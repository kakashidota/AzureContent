// Course list functionality for Kakashi Learning Hub home page

// Function to generate course cards for the homepage
function generateCourseCards() {
    const coursesContainer = document.querySelector('.courses-container');
    
    if (!coursesContainer) return;
    
    coursesContainer.innerHTML = '';
    
    coursesData.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.dataset.category = course.category;
        
        // Get progress for this course
        const progress = getCourseProgress(course.id);
        
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.thumbnail}" alt="${course.title}" onerror="this.src='assets/kakashidota.jpg'">
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
                        <span>${progress}%</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                    </div>
                    <a href="course.html?id=${course.id}" class="btn-primary">Start Learning</a>
                </div>
            </div>
        `;
        
        coursesContainer.appendChild(courseCard);
    });
}

// Initialize courses on homepage
document.addEventListener('DOMContentLoaded', function() {
    // Only run this code if we're on the homepage 
    if (!window.location.pathname.includes('course.html')) {
        generateCourseCards();
        
        // Set up category filters if they exist
        const categoryFilter = document.querySelector('.course-filter select');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', function() {
                const selectedCategory = this.value;
                filterCourses(selectedCategory);
            });
        }
    }
});

// Function to filter courses by category
function filterCourses(category) {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
} 