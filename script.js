document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu interés! Nos pondremos en contacto pronto.');
    this.reset();
});

// Animación simple al hacer scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.inc-card');
    cards.forEach(card => {
        const speed = 2;
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});