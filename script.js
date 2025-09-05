document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('download-form');
    const urlInput = document.getElementById('video-url');
    const formatOptions = document.getElementById('format-options');
    const formatList = document.getElementById('format-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleDownload();
    });

    function handleDownload() {
        const url = urlInput.value.trim();
        
        // Basic YouTube URL validation
        if (!isValidYouTubeUrl(url)) {
            showError('Please enter a valid YouTube URL');
            return;
        }

        // Clear previous results
        clearMessages();
        
        // Show loading state
        showLoading();
        
        // Simulate processing (replace with actual implementation)
        setTimeout(() => {
            hideLoading();
            showFormatOptions();
        }, 2000);
    }

    function isValidYouTubeUrl(url) {
        const patterns = [
            /^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/,
            /^https?:\/\/(www\.)?youtube\.com\/embed\//,
            /^https?:\/\/(www\.)?youtube\.com\/v\//
        ];
        
        return patterns.some(pattern => pattern.test(url));
    }

    function showFormatOptions() {
        // Mock format data (replace with actual format detection)
        const formats = [
            { quality: '720p MP4', size: '45 MB', format: 'mp4' },
            { quality: '480p MP4', size: '25 MB', format: 'mp4' },
            { quality: '360p MP4', size: '15 MB', format: 'mp4' },
            { quality: 'Audio Only (MP3)', size: '3.5 MB', format: 'mp3' }
        ];

        formatList.innerHTML = '';
        
        formats.forEach(format => {
            const formatItem = createFormatItem(format);
            formatList.appendChild(formatItem);
        });

        formatOptions.style.display = 'block';
    }

    function createFormatItem(format) {
        const item = document.createElement('div');
        item.className = 'format-item';
        
        item.innerHTML = `
            <div>
                <strong>${format.quality}</strong>
                <span style="color: #666; margin-left: 10px;">${format.size}</span>
            </div>
            <button onclick="downloadFormat('${format.format}', '${format.quality}')">Download</button>
        `;
        
        return item;
    }

    function showLoading() {
        const button = form.querySelector('button[type="submit"]');
        button.innerHTML = '<span class="loading"></span> Processing...';
        button.disabled = true;
    }

    function hideLoading() {
        const button = form.querySelector('button[type="submit"]');
        button.innerHTML = 'Download';
        button.disabled = false;
    }

    function showError(message) {
        clearMessages();
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = message;
        form.appendChild(errorDiv);
    }

    function showSuccess(message) {
        clearMessages();
        const successDiv = document.createElement('div');
        successDiv.className = 'success';
        successDiv.textContent = message;
        form.appendChild(successDiv);
    }

    function clearMessages() {
        const messages = form.querySelectorAll('.error, .success');
        messages.forEach(msg => msg.remove());
    }

    // Global function for format download buttons
    window.downloadFormat = function(format, quality) {
        showSuccess(`Download started for ${quality} format. This is a demo - implement actual download functionality.`);
        
        // Hide format options after selection
        setTimeout(() => {
            formatOptions.style.display = 'none';
            urlInput.value = '';
        }, 2000);
    };

    // Add some interactive features
    urlInput.addEventListener('input', function() {
        clearMessages();
        formatOptions.style.display = 'none';
    });

    // Keyboard shortcut for quick access
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            urlInput.focus();
        }
    });
});

// Utility functions for future implementation
function extractVideoId(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
        /youtube\.com\/embed\/([^&\n?#]+)/,
        /youtube\.com\/v\/([^&\n?#]+)/
    ];
    
    for (let pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
            return match[1];
        }
    }
    
    return null;
}

// Future API integration placeholder
async function fetchVideoInfo(videoId) {
    // This would integrate with a backend service or YouTube API
    // For now, return mock data
    return {
        title: 'Sample Video Title',
        duration: '3:45',
        thumbnail: 'https://via.placeholder.com/320x180',
        formats: [
            { quality: '720p', format: 'mp4', size: '45 MB' },
            { quality: '480p', format: 'mp4', size: '25 MB' }
        ]
    };
}