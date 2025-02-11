// Theme toggle with localStorage
const themeToggle = document.getElementById('theme-toggle');
const setTheme = (isDark) => {
    document.body.classList.toggle('dark-mode', isDark);
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Initialize theme
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');

themeToggle.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('dark-mode'));
});

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche la propagation du clic
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Initialize EmailJS
emailjs.init("bQiL2UmZaYkjKeZMd");

// GitHub Projects Loader
async function loadGitHubProjects() {
    try {
        const username = 'Liantsoa123';
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        const repos = await response.json();

        const projectsContainer = document.getElementById('github-projects');
        projectsContainer.innerHTML = '';

        repos.forEach(repo => {
            if (!repo.fork) {
                const card = document.createElement('div');
                card.className = 'project-card';

                const languageColor = getLanguageColor(repo.language);

                card.innerHTML = `
                    <div class="project-info">
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'No description available'}</p>
                        <div class="project-language">
                            ${repo.language ? `
                                <span class="language-dot" style="background-color: ${languageColor}"></span>
                                <span>${repo.language}</span>
                            ` : ''}
                        </div>
                        <div class="project-stats">
                            <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                            <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                        </div>
                        <div class="project-tags">
                            <a href="${repo.html_url}" target="_blank" class="cta-button">View Project</a>
                        </div>
                    </div>
                `;

                card.addEventListener('click', () => {
                    window.open(repo.html_url, '_blank');
                });

                projectsContainer.appendChild(card);
            }
        });
    } catch (error) {
        console.error('Error loading GitHub projects:', error);
        document.getElementById('github-projects').innerHTML = `
            <div class="error-message">
                <p>Unable to load projects. Please try again later.</p>
            </div>
        `;
    }
}

// Couleurs pour les langages de programmation
function getLanguageColor(language) {
    const colors = {
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        Java: '#b07219',
        PHP: '#4F5D95',
        'C#': '#178600',
        HTML: '#e34c26',
        CSS: '#563d7c',
        TypeScript: '#2b7489'
    };
    return colors[language] || '#666';
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the submit button
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Liantsoa Fanantenana'
    };

    // Send email
    emailjs.send('service_h6w8lfk', 'template_uw8kzlh', templateParams)
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        })
        .catch(function(error) {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again later.');
        })
        .finally(function() {
            // Restore button state
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        });
});

// Charger les projets au chargement de la page
window.addEventListener('load', loadGitHubProjects);