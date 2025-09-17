
// Main functions
function showPage(pageId) {
    // Show loading state
    showLoading();

    // Fetch content dynamically
    utils.fetchPageContent(pageId).then(content => {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = content;

        // Update nav active link
        updateActiveNavLink(pageId);

        // Scroll to top after loading
        utils.smoothScrollToTop();
    });
}

function loadPageContent(pageId) {
    const mainContent = document.getElementById('main-content');
    const content = pageContent[pageId];
    
    if (content) {
        mainContent.innerHTML = content;
    } else {
        mainContent.innerHTML = `
            <div class="page-content">
                <h1>Page Not Found</h1>
                <p>The requested page could not be found.</p>
            </div>
        `;
    }
}

function updateActiveNavLink(pageId) {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to the clicked nav link
    const activeLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function showLoading() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="loading">
            <p>Loading...</p>
        </div>
    `;
}

// Mobile menu functionality
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
}

// Initialize the page
function init() {
    // Load introduction.html into #main-content
    utils.fetchPageContent('introduction')
        .then(content => {
            document.getElementById('main-content').innerHTML = content;
        });

    // Add mobile menu functionality
    const settingsIcon = document.querySelector('.settings-icon');
    if (settingsIcon) {
        settingsIcon.addEventListener('click', toggleMobileMenu);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = 'flex';
        }
    });
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Utility functions for future enhancements
const utils = {
    // Function to fetch content from external files (for future use)
    async fetchPageContent(pageId) {
    try {
        const response = await fetch(`pages/${pageId}.html`);
        if (response.ok) {
            return await response.text();
        }
        throw new Error('Page not found');
    } catch (error) {
        console.error('Error loading page:', error);
        return `
            <div class="page-content">
                <h1>Error</h1>
                <p>Could not load the requested page.</p>
            </div>
        `;
    }
    },
    
    // Function to update page title
    updatePageTitle(pageTitle) {
        document.title = `${pageTitle} - Academic Portfolio`;
    },
    
    // Function to handle smooth scrolling
    smoothScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};