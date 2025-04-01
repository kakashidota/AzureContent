// Main JavaScript functionality for Kakashi Learning Hub

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Tabs functionality (if present on the page)
    const tabLinks = document.querySelectorAll('.tab-link');
    
    if (tabLinks.length) {
        tabLinks.forEach(tab => {
            tab.addEventListener('click', () => {
                // Get all tabs
                const allTabLinks = tab.parentElement.querySelectorAll('.tab-link');
                
                // Remove active class from all tabs
                allTabLinks.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all tab contents
                const tabContents = document.querySelectorAll('.tab-pane');
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Show the corresponding tab content
                const targetTabId = tab.getAttribute('data-target');
                const targetTab = document.querySelector(targetTabId);
                if (targetTab) {
                    targetTab.classList.add('active');
                }
            });
        });
    }

    // Course filter functionality
    const courseFilter = document.getElementById('course-category');
    const courseCards = document.querySelectorAll('.course-card');
    
    if (courseFilter && courseCards.length) {
        courseFilter.addEventListener('change', function() {
            const selectedCategory = this.value;
            
            courseCards.forEach(card => {
                if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle quiz interactions (if quizzes are present)
    const quizOptions = document.querySelectorAll('.quiz-option');
    
    if (quizOptions.length) {
        quizOptions.forEach(option => {
            option.addEventListener('click', function() {
                const questionContainer = this.closest('.quiz-question');
                const options = questionContainer.querySelectorAll('.quiz-option');
                
                // Clear previous selections
                options.forEach(opt => opt.classList.remove('selected'));
                
                // Select the clicked option
                this.classList.add('selected');
            });
        });
        
        // Handle quiz submission
        const submitButton = document.querySelector('.quiz-submit');
        if (submitButton) {
            submitButton.addEventListener('click', function() {
                const selectedOptions = document.querySelectorAll('.quiz-option.selected');
                const questions = document.querySelectorAll('.quiz-question');
                
                // Check for unanswered questions
                if (selectedOptions.length < questions.length) {
                    alert('Please answer all questions before submitting.');
                    return;
                }
                
                // Check answers and provide feedback
                selectedOptions.forEach(option => {
                    if (option.dataset.correct === 'true') {
                        option.classList.add('correct');
                    } else {
                        option.classList.add('incorrect');
                        
                        // Show the correct answer
                        const questionContainer = option.closest('.quiz-question');
                        const correctOption = questionContainer.querySelector('.quiz-option[data-correct="true"]');
                        if (correctOption) {
                            correctOption.classList.add('correct');
                        }
                    }
                });
                
                // Show feedback section
                const feedbackContainer = document.querySelector('.quiz-feedback');
                if (feedbackContainer) {
                    feedbackContainer.style.display = 'block';
                }
                
                // Disable further interaction
                quizOptions.forEach(opt => {
                    opt.style.pointerEvents = 'none';
                });
                
                // Hide submit button
                this.style.display = 'none';
            });
        }
    }
}); 