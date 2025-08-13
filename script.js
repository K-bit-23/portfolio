// Smooth scrolling for navigation links
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

// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('fade-in');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active', 'fade-in');
    });
});

// Active navigation link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Typing animation
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = 'Developer & Innovator';
    typingText.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                typingText.textContent = '';
                i = 0;
                typeWriter();
            }, 3000);
        }
    }
    setTimeout(typeWriter, 1000);
}

// Particle system
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Skills animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    skillBars.forEach(bar => observer.observe(bar));
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('.btn-primary');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            submitBtn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
            submitBtn.style.background = 'var(--secondary-gradient)';
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = 'var(--primary-gradient)';
                submitBtn.style.pointerEvents = 'auto';
                this.reset();
            }, 2000);
        }, 1000);
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(15, 23, 42, 0.98)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    }
});

// Hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
        this.style.transition = 'all 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
});

// Ripple effect
function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Cursor trail effect
document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 500);
});

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.iot-network');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Smooth reveal animations
const revealElements = document.querySelectorAll('section');
const revealElementsOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
};
window.addEventListener('scroll', revealElementsOnScroll);
revealElementsOnScroll();

// Loading animation with progress bar
window.addEventListener('load', function() {
    const loading = document.querySelector('.loading');
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    document.body.appendChild(progressBar);

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 90) clearInterval(interval);
        else {
            width += 10;
            progressBar.style.width = width + '%';
        }
    }, 150);

    setTimeout(() => {
        progressBar.style.width = '100%';
        setTimeout(() => {
            progressBar.style.opacity = '0';
        }, 400);
    }, 500);

    if (loading) {
        loading.classList.add('hidden');
        setTimeout(() => loading.remove(), 500);
    }
});

// Init
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    animateSkills();
    initScrollAnimations();
    addRippleEffect();
    document.querySelectorAll('.section-header, .project-card, .skill-category').forEach(el => el.classList.add('fade-in'));
    document.querySelectorAll('.timeline-item').forEach((el, index) => {
        el.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
    });
});

// Inject CSS for effects
const style = document.createElement('style');
style.textContent = `
    .btn-primary, .btn-secondary { position: relative; overflow: hidden; }
    .ripple { position: absolute; background: rgba(255,255,255,0.3); border-radius: 50%; pointer-events: none; animation: ripple-animation 0.6s ease-out; }
    @keyframes ripple-animation { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(1); opacity: 0; } }
    .cursor-trail { position: fixed; width: 10px; height: 10px; background: var(--primary-gradient); border-radius: 50%; pointer-events: none; z-index: 9999; opacity: 0.7; animation: cursor-trail-fade 0.5s ease-out forwards; }
    @keyframes cursor-trail-fade { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(0); opacity: 0; } }
    section { opacity: 0; transform: translateY(30px); transition: all 0.8s ease; }
    section.revealed { opacity: 1; transform: translateY(0); }
    #progress-bar { position: fixed; top: 0; left: 0; height: 4px; background: linear-gradient(90deg, #00e0ff, #0088ff); width: 0%; z-index: 10000; transition: width 0.3s ease, opacity 0.5s ease; }
    .nav-menu.fade-in { animation: fadeIn 0.3s ease forwards; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);
