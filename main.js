// IntersectionObserver for Animations on Scroll
const observeElements = (selector, animationClass) => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => observer.observe(element));
};

document.addEventListener('DOMContentLoaded', () => {
    observeElements('.fade-in', 'fadeIn');
    observeElements('.slide-up-animation', 'slideUp');
    observeElements('.slide-in-left', 'slideInLeft');
    observeElements('.slide-in-right', 'slideInRight');
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
