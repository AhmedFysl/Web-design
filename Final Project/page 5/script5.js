document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-num');

    if (counters.length === 0) return;

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const duration = 1500; // مدة العداد بالميلي ثانية
        const steps = 60;
        const stepTime = duration / steps;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.innerText = target;
                clearInterval(timer);
            } else {
                counter.innerText = Math.floor(current);
            }
        }, stepTime);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
});

const upBtn = document.getElementById('up');

if (upBtn) {
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 300) {
            upBtn.classList.remove('none');
        } else {
            upBtn.classList.add('none');
        }
    });

    upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}