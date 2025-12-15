function bookNow() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your inquiry has been sent. We will contact you soon.');
    this.reset();
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
