const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // only animate once
        }
    });
}, { threshold: 0.20 });

document.querySelectorAll('.project').forEach(el => observer.observe(el));