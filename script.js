// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Profile Image Switcher on Hover
    const profileContainer = document.querySelector('.profile-container');
    const profileImages = document.querySelectorAll('.profile-image');
    let currentIndex = 0;
    let hoverInterval;

    if (profileContainer && profileImages.length > 0) {
        profileContainer.addEventListener('mouseenter', () => {
            hoverInterval = setInterval(() => {
                // Remove active class from current image
                profileImages[currentIndex].classList.remove('active');
                
                // Move to next image
                currentIndex = (currentIndex + 1) % profileImages.length;
                
                // Add active class to next image
                profileImages[currentIndex].classList.add('active');
            }, 1000); // Switch every 1 second (adjust speed here)
        });

        profileContainer.addEventListener('mouseleave', () => {
            clearInterval(hoverInterval);
            
            // Reset to first image
            profileImages.forEach((img, index) => {
                img.classList.remove('active');
                if (index === 0) {
                    img.classList.add('active');
                }
            });
            currentIndex = 0;
        });
    }

    // Theme Toggle with localStorage
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Function to set theme
    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
        contactForm.reset();
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
});