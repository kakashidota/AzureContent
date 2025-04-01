# Kakashi Learning Hub

A frontend educational platform that showcases content from Kakashi's YouTube channel organized as structured courses with interactive quizzes.

## Project Overview

Kakashi Learning Hub is an educational web platform similar to Udemy or Codecademy but focused specifically on content created by Kakashi, a Senior DevOps Engineer specializing in Azure, .NET, RPA, Cybersecurity, and Full-Stack Development.

The platform organizes YouTube playlists into structured courses, adds quizzes for learning assessment, and provides a modern, responsive user interface.

## Features

- **Course Catalog**: Browse courses by category
- **Course Details**: View videos and resources for each course
- **Quizzes**: Test your knowledge with interactive quizzes
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional design with a tech-focused color palette

## Technology Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (for icons)

## How to Run

1. Clone this repository:
   ```
   git clone <repository-url>
   ```

2. Open the project folder

3. Open `index.html` in your web browser

   You can use any of these methods:
   - Double-click the file in your file explorer
   - Use a local development server like Live Server in VS Code
   - Use Python's SimpleHTTPServer:
     ```
     python -m http.server
     ```
     Then navigate to `http://localhost:8000`

## Structure

- `index.html` - Main page with course listings
- `course.html` - Course detail page
- `styles/` - CSS stylesheets
- `js/` - JavaScript files
- `assets/` - Images and other static assets

## Development Notes

- The current version is an MVP (Minimum Viable Product) with frontend functionality only
- Course data is currently hardcoded in JavaScript
- In a production environment, you would:
  - Replace placeholder images with actual course thumbnails
  - Implement backend functionality for user management and progress tracking
  - Add more quiz questions and interactive elements
  - Connect to the YouTube API to dynamically fetch video data

## Future Enhancements

See the [SUMMARY.md](SUMMARY.md) file for details on current limitations and planned future enhancements.

## License

This project is for demonstration purposes.

## Contact

For questions or feedback, reach out to Kakashi via the YouTube channel: [Kakashi Dota](https://www.youtube.com/@KakashiDota) 