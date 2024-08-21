document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['Mohd Mudassir Ansari'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|'
    };

    var typed = new Typed('#typed-name', options);

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        console.log('Form submitted:', { email, message });
        
        // For now, we'll just clear the form and show an alert
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileMenuToggle.classList.toggle('active');
        
        if (navLinks.classList.contains('show')) {
            navItems.forEach((item, index) => {
                item.style.animationDelay = `${0.1 * (index + 1)}s`;
                item.style.animation = 'fadeInDown 0.5s forwards';
            });
        } else {
            navItems.forEach(item => {
                item.style.animation = 'none';
            });
        }
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            mobileMenuToggle.classList.remove('active');
            navItems.forEach(item => {
                item.style.animation = 'none';
            });
        });
    });
});
