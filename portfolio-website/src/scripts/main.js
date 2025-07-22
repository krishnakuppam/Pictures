// This file contains the JavaScript code for the portfolio website. 
// It includes functionality such as event listeners and dynamic content loading.

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const toggleButton = document.querySelector('.toggle-button');

    // Event listener for the toggle button
    toggleButton.addEventListener('click', () => {
        header.classList.toggle('active');
    });

    // Function to load dynamic content
    function loadContent() {
        const contentArea = document.querySelector('.content-area');
        fetch('path/to/your/content.json')
            .then(response => response.json())
            .then(data => {
                contentArea.innerHTML = data.map(item => `
                    <div class="portfolio-item">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `).join('');
            })
            .catch(error => console.error('Error loading content:', error));
    }

    loadContent();
});