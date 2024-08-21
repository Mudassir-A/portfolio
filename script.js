document.addEventListener('DOMContentLoaded', function() {
    var nameOptions = {
        strings: ['Mohd Mudassir Ansari'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        onComplete: function(self) {
            setTimeout(function() {
                var subtitleOptions = {
                    strings: ['Data Science Enthusiast', 'Neural Networks', 'Deep Learning'],
                    typeSpeed: 50,
                    backSpeed: 30,
                    loop: true,
                    showCursor: true,
                    cursorChar: '|'
                };
                var subtitleTyped = new Typed('#typed-subtitle', subtitleOptions);
            }, 1000);
        }
    };

    var nameTyped = new Typed('#typed-name', nameOptions);

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

