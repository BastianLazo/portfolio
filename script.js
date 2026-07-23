// ===== Menú hamburguesa =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// ===== Cerrar menú al hacer clic en un enlace (mobile) =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ===== Smooth scroll para los enlaces internos =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    });
});

// ===== Intersection Observer para animaciones al hacer scroll =====
const animatedElements = document.querySelectorAll('.service-card, .project-card, .about-text .highlight-list li');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

animatedElements.forEach(el => {
    if (el.style.animationPlayState !== 'running') {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    }
});

// ===== Animar las barras de los servicios al hacer hover =====
// (se maneja con CSS, pero añadimos un toque extra)
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

console.log('🚀 Portafolio de Bastián Lazo - Landing Pages que Venden');