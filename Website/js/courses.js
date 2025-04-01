// Courses data and functionality for Kakashi Learning Hub

// YouTube playlists data (mapped as courses)
const coursesData = [
    {
        id: 'devops1',
        title: 'AZ-400 DevOps Certification',
        category: 'devops',
        description: 'Complete guide to achieving the Microsoft Azure DevOps certification with hands-on examples and practice tests.',
        thumbnail: 'assets/devops-cert.jpg',
        lessons: 15,
        duration: '10h 45m',
        level: 'Advanced',
        playlistUrl: 'https://www.youtube.com/playlist?list=PLD7svyKaquTmDb1vc3VMU8GY4t0HVwucQ',
        videos: [
            {
                title: 'AZ-400 Exam Preparation and learning source | Learn Azure DevOps and Pass this Exam!',
                url: 'https://www.youtube.com/watch?v=g6PQzQKnNaQ',
                duration: '10:08'
            },
            {
                title: 'AZ 400 learning resources | FREE resources to learn Microsoft Azure and DevOps | AZ 400 certification',
                url: 'https://www.youtube.com/watch?v=3ZouYKtGZnA',
                duration: '13:35'
            },
            {
                title: 'Microsoft Azure DevOps Workshop | Get ready for AZ 400 certification | DevOps workshop | Kakashi',
                url: 'https://www.youtube.com/watch?v=hGxHcvQb5OM',
                duration: '1:24:53'
            }
            // Additional videos will be populated from the YouTube API in a real implementation
        ]
    },
    {
        id: 'azure1',
        title: 'Azure Fundamentals',
        category: 'azure',
        description: 'Learn the fundamentals of Microsoft Azure cloud platform with practical examples and demos.',
        thumbnail: 'assets/azure-fundamentals.jpg',
        lessons: 12,
        duration: '8h 30m',
        level: 'Beginner',
        playlistUrl: 'https://www.youtube.com/playlist?list=PLD7svyKaquTkKPUFQd0iGZVQ5NeQWwx4g',
        videos: [
            {
                title: 'Azure Fundamentals part 1 | AZ-900 certification',
                url: 'https://www.youtube.com/watch?v=WVuULXipYUY',
                duration: '23:35'
            },
            {
                title: 'Azure Fundamentals part 2 | AZ 900 certification',
                url: 'https://www.youtube.com/watch?v=KVOIhOb7w_o',
                duration: '33:21'
            },
            {
                title: 'Azure Fundamentals part 3 | AZ 900 certification',
                url: 'https://www.youtube.com/watch?v=dZN1uEGJ7pw',
                duration: '12:15'
            }
            // Additional videos will be populated from the YouTube API in a real implementation
        ]
    },
    {
        id: 'rpa1',
        title: 'UiPath RPA Development',
        category: 'rpa',
        description: 'Master RPA development with UiPath through step-by-step tutorials and real-world projects.',
        thumbnail: 'assets/uipath-rpa.jpg',
        lessons: 20,
        duration: '15h 20m',
        level: 'Intermediate',
        playlistUrl: 'https://www.youtube.com/playlist?list=PLD7svyKaquTkpN5FwgYACj0HvlSWMyEWh',
        videos: [
            {
                title: 'UiPath tutorial | How to create a new queue item in Orchestrator',
                url: 'https://www.youtube.com/watch?v=CJQX7tGgVZo',
                duration: '8:09'
            },
            {
                title: 'UiPath tutorial | How to handle download folders using UiPath',
                url: 'https://www.youtube.com/watch?v=f95wfMcd-KA',
                duration: '10:56'
            },
            {
                title: 'UiPath tutorial | Transfer data from Excel to Web Application (Dynamic selector & item)',
                url: 'https://www.youtube.com/watch?v=qhbe_T0eWus',
                duration: '16:41'
            }
            // Additional videos will be populated from the YouTube API in a real implementation
        ]
    },
    {
        id: 'security1',
        title: 'Cybersecurity Fundamentals',
        category: 'security',
        description: 'Learn essential cybersecurity concepts and practices to protect systems and data from threats.',
        thumbnail: 'assets/cybersecurity.jpg',
        lessons: 18,
        duration: '12h 15m',
        level: 'Beginner',
        playlistUrl: 'https://www.youtube.com/playlist?list=PLD7svyKaquTktM3lQRaGi0UwjiZFu7AsY',
        videos: [
            {
                title: 'How to deploy a Windows virtual machine in Oracle Cloud [Full tutorial]',
                url: 'https://www.youtube.com/watch?v=GcJkuvzPeXg',
                duration: '10:49'
            },
            {
                title: 'Microsoft Sentinel - How to create a virtual machine in Azure and connect it to Sentinel',
                url: 'https://www.youtube.com/watch?v=P3K_bhx6hVw',
                duration: '10:08'
            },
            {
                title: 'Create Honeynet and SOC in Azure | Setting up the environment and virtual machines',
                url: 'https://www.youtube.com/watch?v=Xs8F-StALF4',
                duration: '13:57'
            }
            // Additional videos will be populated from the YouTube API in a real implementation
        ]
    },
    {
        id: 'dotnet1',
        title: '.NET Core Development',
        category: 'dotnet',
        description: 'Comprehensive course on building modern applications with .NET Core and C#.',
        thumbnail: 'assets/dotnet-core.jpg',
        lessons: 25,
        duration: '18h 30m',
        level: 'Intermediate',
        playlistUrl: 'https://www.youtube.com/playlist?list=PLD7svyKaquTmkOSBZ8dj39NwdZn3SnQOO',
        videos: [
            {
                title: 'SonarQube code analysis using Azure DevOps CI CD',
                url: 'https://www.youtube.com/watch?v=c4nYhGU7s-k',
                duration: '19:53'
            },
            {
                title: 'CI CD Pipeline for ASP.NET Core Web API using Azure DevOps',
                url: 'https://www.youtube.com/watch?v=7YMWthE6RTY',
                duration: '16:19'
            },
            {
                title: 'Build ASP.NET Core Web API and deploy it in Azure using GitHub Actions',
                url: 'https://www.youtube.com/watch?v=cE33BSCGN3E',
                duration: '13:29'
            }
            // Additional videos will be populated from the YouTube API in a real implementation
        ]
    }
];

// Sample quiz data for courses
const quizData = {
    'devops1': [
        {
            question: 'What is the primary focus of DevOps?',
            options: [
                { text: 'Software development only', correct: false },
                { text: 'Infrastructure management only', correct: false },
                { text: 'Bridging the gap between development and operations', correct: true },
                { text: 'Security testing', correct: false }
            ]
        },
        {
            question: 'Which of the following is NOT a core DevOps practice?',
            options: [
                { text: 'Continuous Integration', correct: false },
                { text: 'Infrastructure as Code', correct: false },
                { text: 'Waterfall Development', correct: true },
                { text: 'Continuous Delivery', correct: false }
            ]
        },
        {
            question: 'What Azure service is primarily used for CI/CD pipelines?',
            options: [
                { text: 'Azure App Service', correct: false },
                { text: 'Azure DevOps', correct: true },
                { text: 'Azure Functions', correct: false },
                { text: 'Azure Kubernetes Service', correct: false }
            ]
        }
    ],
    'azure1': [
        {
            question: 'What is Azure?',
            options: [
                { text: 'A programming language', correct: false },
                { text: 'A cloud computing platform by Microsoft', correct: true },
                { text: 'A database management system', correct: false },
                { text: 'An operating system', correct: false }
            ]
        },
        {
            question: 'Which of the following is NOT an Azure compute service?',
            options: [
                { text: 'Azure Virtual Machines', correct: false },
                { text: 'Azure App Service', correct: false },
                { text: 'Azure DevOps', correct: true },
                { text: 'Azure Functions', correct: false }
            ]
        }
    ],
    // More quizzes for other courses
};

// Function to generate course cards
function generateCourseCards() {
    const coursesContainer = document.querySelector('.courses-container');
    
    if (!coursesContainer) return;
    
    coursesContainer.innerHTML = '';
    
    coursesData.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.dataset.category = course.category;
        
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.thumbnail}" alt="${course.title}" onerror="this.onerror=null; this.src='assets/default-course.jpg';">
            </div>      
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <span class="course-category">${getCategoryName(course.category)}</span>
                <p class="course-description">${course.description}</p>
                <div class="course-stats">
                    <span>${course.lessons} lessons</span>
                    <span>${course.duration}</span>
                    <span>${course.level}</span>
                </div>
                <div class="course-action">
                    <div class="course-progress">
                        <span>0%</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 0%"></div>
                        </div>
                    </div>
                    <a href="course.html?id=${course.id}" class="btn-primary">Start Learning</a>
                </div>
            </div>
        `;
        
        coursesContainer.appendChild(courseCard);
    });
}

// Helper function to get category display name
function getCategoryName(categoryId) {
    const categories = {
        'devops': 'DevOps',
        'azure': 'Azure',
        'dotnet': '.NET',
        'rpa': 'RPA',
        'security': 'Cybersecurity'
    };
    
    return categories[categoryId] || categoryId;
}

// Initialize courses
document.addEventListener('DOMContentLoaded', function() {
    generateCourseCards();
    
    // Additional initialization for course details page
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
    
    if (courseTitle) courseTitle.textContent = course.title;
    if (courseDescription) courseDescription.textContent = course.description;
    if (courseThumbnail) {
        courseThumbnail.src = course.thumbnail;
        courseThumbnail.onerror = () => { courseThumbnail.src = 'assets/default-course.jpg'; };
    }
    
    // Generate lesson list
    const lessonList = document.querySelector('.lesson-list');
    
    if (lessonList && course.videos) {
        lessonList.innerHTML = '';
        
        course.videos.forEach((video, index) => {
            const lessonItem = document.createElement('div');
            lessonItem.classList.add('lesson-item');
            
            lessonItem.innerHTML = `
                <div class="lesson-icon">
                    <i class="fas fa-play"></i>
                </div>
                <div class="lesson-title">
                    <h4>${video.title}</h4>
                </div>
                <div class="lesson-duration">${video.duration}</div>
                <a href="${video.url}" target="_blank" class="btn-primary">Watch</a>
            `;
            
            lessonList.appendChild(lessonItem);
        });
    }
    
    // Load quiz for the course if available
    const quizContainer = document.querySelector('.quiz-content');
    
    if (quizContainer && quizData[courseId]) {
        loadQuiz(quizContainer, quizData[courseId]);
    }
}

// Function to load quiz
function loadQuiz(container, questions) {
    container.innerHTML = '';
    
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-question');
        
        let optionsHTML = '';
        question.options.forEach((option, optIndex) => {
            optionsHTML += `
                <div class="quiz-option" data-correct="${option.correct}">
                    <span class="quiz-option-marker">${String.fromCharCode(65 + optIndex)}</span>
                    <span class="quiz-option-text">${option.text}</span>
                </div>
            `;
        });
        
        questionElement.innerHTML = `
            <h4>Question ${index + 1}: ${question.question}</h4>
            <div class="quiz-options">
                ${optionsHTML}
            </div>
        `;
        
        container.appendChild(questionElement);
    });
    
    // Add submit button
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn-primary', 'quiz-submit');
    submitBtn.textContent = 'Submit Answers';
    container.appendChild(submitBtn);
    
    // Add feedback container (hidden initially)
    const feedbackContainer = document.createElement('div');
    feedbackContainer.classList.add('quiz-feedback');
    feedbackContainer.style.display = 'none';
    feedbackContainer.innerHTML = '<p>Check your answers above to see what you got right and wrong!</p>';
    container.appendChild(feedbackContainer);
} 