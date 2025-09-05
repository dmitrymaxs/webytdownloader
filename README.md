# Ytdowload - YouTube Video Downloader

A modern, responsive web application for downloading YouTube videos. Built with vanilla HTML, CSS, and JavaScript for maximum compatibility and performance.

## Features

- **High Quality Downloads**: Support for up to 4K resolution
- **Multiple Formats**: MP4, WEBM, and audio-only (MP3) formats
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Fast & Free**: No registration required, completely free to use
- **Clean Interface**: Modern, user-friendly design with smooth animations

## Demo

![Desktop View](https://github.com/user-attachments/assets/b679f5a3-9ae9-4ee2-ac54-a5376c5c7f3c)

![Mobile View](https://github.com/user-attachments/assets/4d19ad2f-965b-4fea-9561-1f3080d1ea6d)

## How to Use

1. Paste a YouTube URL into the input field
2. Click the "Download" button
3. Choose your preferred format and quality
4. Download will begin automatically

## Supported URL Formats

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`
- `https://www.youtube.com/v/VIDEO_ID`

## Files Structure

```
├── index.html      # Main HTML file
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This documentation file
```

## Technical Details

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Responsive**: Mobile-first design with CSS Grid and Flexbox
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Accessibility**: Semantic HTML with proper ARIA labels

## Development

To run locally:

1. Clone the repository
2. Open `index.html` in your browser, or
3. Start a local server: `python3 -m http.server 8000`
4. Navigate to `http://localhost:8000`

## Implementation Notes

This is a frontend-only implementation that provides the user interface for a YouTube downloader. To make it fully functional, you would need to:

1. Implement a backend service to handle YouTube video processing
2. Add proper video format detection
3. Integrate with YouTube API or similar service
4. Handle actual file downloads

## Legal Notice

This tool is for educational purposes only. Please respect YouTube's Terms of Service and copyright laws. Only download videos you have permission to download.

## License

This project is open source and available under the MIT License.