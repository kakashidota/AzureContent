// Course detail page functionality for Kakashi Learning Hub

// Initialize course detail page
document.addEventListener('DOMContentLoaded', function() {
    // Only run this code if we're on the course detail page
    if (window.location.pathname.includes('course.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('id');
        
        if (courseId) {
            loadCourseDetails(courseId);
        }
    }
});

// Function to load course details
function loadCourseDetails(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    
    if (!course) {
        console.error('Course not found');
        return;
    }
    
    // Set page title
    document.title = `${course.title} - Kakashi Learning Hub`;
    
    // Update header content
    const courseTitle = document.querySelector('.course-detail-title');
    const courseDescription = document.querySelector('.course-detail-description');
    const courseThumbnail = document.querySelector('.course-thumbnail img');
    const coursePlaylistBtn = document.querySelector('.course-playlist');
    
    if (courseTitle) courseTitle.textContent = course.title;
    if (courseDescription) courseDescription.textContent = course.description;
    if (courseThumbnail) {
        courseThumbnail.src = course.thumbnail;
        courseThumbnail.onerror = () => { courseThumbnail.src = 'assets/kakashidota.jpg'; };
    }
    
    // Set up YouTube playlist button
    if (coursePlaylistBtn && course.playlistUrl) {
        coursePlaylistBtn.addEventListener('click', function() {
            // Get YouTube video ID from URL
            const videoId = getYoutubeIdFromUrl(course.playlistUrl);
            if (videoId) {
                openVideoModal(videoId, course.title);
            } else {
                window.open(course.playlistUrl, '_blank');
            }
        });
    }
    
    // Update course stats
    const lessonCount = document.getElementById('lesson-count');
    const duration = document.getElementById('duration');
    const level = document.getElementById('level');
    
    if (lessonCount) lessonCount.textContent = course.lessons;
    if (duration) duration.textContent = course.duration;
    if (level) level.textContent = course.level;
    
    // Generate lesson list
    const lessonList = document.querySelector('.lesson-list');
    
    if (lessonList && course.videos) {
        lessonList.innerHTML = '';
        
        // Get user progress for this course
        const userProgress = getUserProgress();
        const courseProgress = userProgress[courseId] || { completedVideos: [] };
        
        course.videos.forEach((video, index) => {
            const lessonItem = document.createElement('div');
            lessonItem.classList.add('lesson-item');
            
            // Get YouTube video ID
            const videoId = getYoutubeIdFromUrl(video.url);
            
            // Check if this video is marked as completed
            const isCompleted = courseProgress.completedVideos.includes(videoId);
            const completedClass = isCompleted ? 'completed' : '';
            const checkIconClass = isCompleted ? 'fas fa-check-circle' : 'far fa-circle';
            
            lessonItem.innerHTML = `
                <div class="lesson-icon ${completedClass}">
                    <i class="fas fa-play"></i>
                </div>
                <div class="lesson-title">
                    <h4>${video.title}</h4>
                </div>
                <div class="lesson-duration">${video.duration}</div>
                <button class="btn-primary watch-video" data-video-id="${videoId}" data-video-title="${video.title}">Watch</button>
                <button class="btn-complete-lesson ${completedClass}" data-video-id="${videoId}">
                    <i class="${checkIconClass}"></i>
                </button>
            `;
            
            lessonList.appendChild(lessonItem);
        });
        
        // Add event listeners to watch buttons
        document.querySelectorAll('.watch-video').forEach(button => {
            button.addEventListener('click', function() {
                const videoId = this.getAttribute('data-video-id');
                const videoTitle = this.getAttribute('data-video-title');
                openVideoModal(videoId, videoTitle);
            });
        });
        
        // Add event listeners to complete buttons
        document.querySelectorAll('.btn-complete-lesson').forEach(button => {
            button.addEventListener('click', function() {
                const videoId = this.getAttribute('data-video-id');
                const isCompleted = this.classList.contains('completed');
                
                // Toggle completion status
                saveUserProgress(courseId, videoId, !isCompleted);
                
                // Update UI
                if (isCompleted) {
                    this.classList.remove('completed');
                    this.querySelector('i').className = 'far fa-circle';
                    this.parentElement.querySelector('.lesson-icon').classList.remove('completed');
                } else {
                    this.classList.add('completed');
                    this.querySelector('i').className = 'fas fa-check-circle';
                    this.parentElement.querySelector('.lesson-icon').classList.add('completed');
                }
                
                // Update progress display
                updateProgressDisplay(courseId);
            });
        });
        
        // Update progress display
        updateProgressDisplay(courseId);
    }
    
    // Load quiz for the course if available
    const quizContainer = document.querySelector('.quiz-content');
    
    if (quizContainer && quizData[courseId]) {
        // Clear placeholder content
        quizContainer.innerHTML = '';
        loadQuiz(quizContainer, quizData[courseId]);
    }
    
    // Setup tab functionality
    setupTabNavigation();
    
    // Set up video modal events
    setupVideoModal();
}

// Function to get YouTube video ID from URL
function getYoutubeIdFromUrl(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[7].length === 11) {
        return match[7];
    } else {
        // Try to get it from playlist URL format
        const playlistRegExp = /[?&]v=([^&#]*)/;
        const playlistMatch = url.match(playlistRegExp);
        if (playlistMatch) {
            return playlistMatch[1];
        }
    }
    
    console.warn('Could not extract video ID from URL:', url);
    return null;
}

// Function to open the video modal
function openVideoModal(videoId, videoTitle) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('youtube-embed');
    const title = document.querySelector('.video-title');
    
    if (modal && iframe && videoId) {
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        if (title && videoTitle) {
            title.textContent = videoTitle;
        }
        modal.style.display = 'block';
        
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }
}

// Function to set up video modal
function setupVideoModal() {
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-video');
    const iframe = document.getElementById('youtube-embed');
    
    if (closeBtn && modal) {
        // Close button event
        closeBtn.addEventListener('click', function() {
            closeVideoModal();
        });
        
        // Close modal when clicking outside of content
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeVideoModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeVideoModal();
            }
        });
    }
}

// Function to close video modal
function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('youtube-embed');
    
    if (modal) {
        modal.style.display = 'none';
        
        // Stop video playback by clearing the src
        if (iframe) {
            const src = iframe.src;
            iframe.src = '';
            iframe.src = src;
        }
        
        // Re-enable body scrolling
        document.body.style.overflow = '';
    }
}

// Function to set up tab navigation
function setupTabNavigation() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetPane = document.querySelector(targetId);
            
            // Deactivate all tabs
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Activate clicked tab
            this.classList.add('active');
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}

// Function to update the progress display
function updateProgressDisplay(courseId) {
    const progress = getCourseProgress(courseId);
    const progressDisplay = document.querySelector('.course-progress-display');
    
    if (progressDisplay) {
        progressDisplay.innerHTML = `
            <div class="course-progress">
                <span>${progress}%</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            </div>
        `;
    }
} 