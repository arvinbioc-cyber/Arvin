document.addEventListener('DOMContentLoaded', () => {

    const profileContainer = document.querySelector('.profile-container');
    const profileImages = document.querySelectorAll('.profile-image');
    let currentIndex = 0;
    let hoverInterval;

    if (profileContainer && profileImages.length > 0) {
        profileContainer.addEventListener('mouseenter', () => {
            hoverInterval = setInterval(() => {
               
                profileImages[currentIndex].classList.remove('active');
                
                
                currentIndex = (currentIndex + 1) % profileImages.length;
                
                
                profileImages[currentIndex].classList.add('active');
            }, 1000); 
        });

        profileContainer.addEventListener('mouseleave', () => {
            clearInterval(hoverInterval);
            
            
            profileImages.forEach((img, index) => {
                img.classList.remove('active');
                if (index === 0) {
                    img.classList.add('active');
                }
            });
            currentIndex = 0;
        });
    }

   
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

  
    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

 
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

   
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
        contactForm.reset();
    });

    
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
