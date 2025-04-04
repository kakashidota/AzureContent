// Quiz functionality for Kakashi Learning Hub

// Function to load quiz questions
function loadQuiz(container, questions) {
    container.innerHTML = '';
    
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-question');
        questionElement.dataset.questionIndex = index;
        
        let optionsHTML = '';
        question.options.forEach((option, optIndex) => {
            optionsHTML += `
                <div class="quiz-option" data-option-index="${optIndex}" data-correct="${option.correct}">
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
    submitBtn.disabled = true; // Start disabled until at least one answer is selected
    container.appendChild(submitBtn);
    
    // Add feedback container (hidden initially)
    const feedbackContainer = document.createElement('div');
    feedbackContainer.classList.add('quiz-feedback');
    feedbackContainer.style.display = 'none';
    feedbackContainer.innerHTML = '<p>Check your answers above to see what you got right and wrong!</p>';
    container.appendChild(feedbackContainer);
    
    // Set up quiz interactions
    setupQuizInteractions(container);
}

// Set up quiz interactions
function setupQuizInteractions(quizContainer) {
    // Handle option selection
    const quizOptions = quizContainer.querySelectorAll('.quiz-option');
    const submitBtn = quizContainer.querySelector('.quiz-submit');
    let selectedAnswers = 0;
    
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Get all options in this question
            const parent = this.closest('.quiz-options');
            const options = parent.querySelectorAll('.quiz-option');
            
            // Remove selected class from all options in this question
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Check if this is a new selection or changing an existing one
            if (!parent.dataset.answered) {
                selectedAnswers++;
                parent.dataset.answered = 'true';
            }
            
            // Enable submit button if at least one answer is selected
            if (selectedAnswers > 0) {
                submitBtn.disabled = false;
            }
        });
    });
    
    // Handle quiz submission
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            if (this.textContent === 'Submit Answers') {
                evaluateQuiz(quizContainer);
            } else {
                resetQuiz(quizContainer);
            }
        });
    }
}

// Evaluate quiz answers
function evaluateQuiz(quizContainer) {
    const questions = quizContainer.querySelectorAll('.quiz-question');
    const feedback = quizContainer.querySelector('.quiz-feedback');
    const submitBtn = quizContainer.querySelector('.quiz-submit');
    
    let correctAnswers = 0;
    let totalQuestions = questions.length;
    
    questions.forEach(question => {
        const selectedOption = question.querySelector('.quiz-option.selected');
        const allOptions = question.querySelectorAll('.quiz-option');
        
        // Mark correct answers
        allOptions.forEach(option => {
            if (option.getAttribute('data-correct') === 'true') {
                option.classList.add('correct');
                
                // Add check icon to correct answers
                const marker = option.querySelector('.quiz-option-marker');
                if (marker) {
                    marker.innerHTML = '<i class="fas fa-check"></i>';
                }
            }
        });
        
        // Check if user selected an answer and if it's correct
        if (selectedOption) {
            if (selectedOption.getAttribute('data-correct') === 'true') {
                correctAnswers++;
            } else {
                selectedOption.classList.add('incorrect');
                
                // Add X icon to incorrect selected answers
                const marker = selectedOption.querySelector('.quiz-option-marker');
                if (marker) {
                    marker.innerHTML = '<i class="fas fa-times"></i>';
                }
            }
        }
    });
    
    // Show feedback
    if (feedback) {
        const score = Math.round((correctAnswers / totalQuestions) * 100);
        
        feedback.innerHTML = `
            <p><strong>You scored ${correctAnswers} out of ${totalQuestions} (${score}%)</strong></p>
            <p>${getScoreFeedback(score)}</p>
        `;
        
        if (score >= 70) {
            feedback.classList.add('correct');
            feedback.classList.remove('incorrect');
        } else {
            feedback.classList.add('incorrect');
            feedback.classList.remove('correct');
        }
        
        feedback.style.display = 'block';
        
        // Scroll to feedback
        feedback.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Disable further option selection
    const allOptions = quizContainer.querySelectorAll('.quiz-option');
    allOptions.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Change submit button to retry button
    if (submitBtn) {
        submitBtn.textContent = 'Try Again';
        submitBtn.disabled = false;
    }
}

// Reset quiz for another attempt
function resetQuiz(quizContainer) {
    // Re-enable option selection
    const allOptions = quizContainer.querySelectorAll('.quiz-option');
    const quizOptionContainers = quizContainer.querySelectorAll('.quiz-options');
    const submitBtn = quizContainer.querySelector('.quiz-submit');
    
    // Reset all options
    allOptions.forEach(option => {
        option.style.pointerEvents = 'auto';
        option.classList.remove('selected', 'correct', 'incorrect');
        
        // Reset the marker content
        const marker = option.querySelector('.quiz-option-marker');
        if (marker) {
            marker.textContent = String.fromCharCode(65 + parseInt(option.getAttribute('data-option-index')));
        }
    });
    
    // Clear answered status
    quizOptionContainers.forEach(container => {
        delete container.dataset.answered;
    });
    
    // Hide feedback
    const feedback = quizContainer.querySelector('.quiz-feedback');
    if (feedback) {
        feedback.style.display = 'none';
        feedback.classList.remove('correct', 'incorrect');
    }
    
    // Reset submit button
    if (submitBtn) {
        submitBtn.textContent = 'Submit Answers';
        submitBtn.disabled = true;
    }
}

// Get feedback based on score
function getScoreFeedback(score) {
    if (score >= 90) {
        return 'Excellent! You have a great understanding of the material.';
    } else if (score >= 70) {
        return 'Good job! You have a solid grasp of the content.';
    } else if (score >= 50) {
        return 'You\'re making progress, but might need to review some topics.';
    } else {
        return 'You should consider reviewing the course material again.';
    }
} 