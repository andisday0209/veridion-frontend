import { useEffect } from 'react';

export function useScrollReveal() {
    useEffect(() => {
        document.body.classList.add('js-loaded');

        const animateCounter = (el) => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            const duration = 1800;
            const start = performance.now();

            function step(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(ease * target);
                if (progress < 1) requestAnimationFrame(step);
                else el.textContent = target;
            }
            requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
                    if (entry.target.classList.contains('stats-bar__item')) {
                        const num = entry.target.querySelector('[data-target]');
                        if (num) animateCounter(num);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal, .reveal-clip, .stats-bar__item').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}