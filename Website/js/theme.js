// Theme toggle functionality for Kakashi Learning Hub

document.addEventListener('DOMContentLoaded', function() {
    // Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    const iconElement = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('kakashiLearningHubTheme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        iconElement.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.body.classList.remove('dark-mode');
        iconElement.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Toggle theme when the button is clicked
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update the icon
        if (document.body.classList.contains('dark-mode')) {
            iconElement.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('kakashiLearningHubTheme', 'dark');
        } else {
            iconElement.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('kakashiLearningHubTheme', 'light');
        }
    });
    
    // Listen for changes in system theme preference
    prefersDarkScheme.addEventListener('change', function(e) {
        if (!localStorage.getItem('kakashiLearningHubTheme')) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
                iconElement.classList.replace('fa-sun', 'fa-moon');
            } else {
                document.body.classList.remove('dark-mode');
                iconElement.classList.replace('fa-moon', 'fa-sun');
            }
        }
    });
}); 