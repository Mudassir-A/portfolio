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
});

