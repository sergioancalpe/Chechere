import './style.css';
import './style_tierra.css';
import { initCursor } from './js/cursor.js';
import { initCube } from './js/cube.js';
import { initMenu } from './js/menu.js';
import { initScrollAnimations } from './js/animations.js';
import { initTabs } from './js/tabs.js';
import { initContact } from './js/contact.js';
import { initPortfolioScroll } from './js/portfolio-scroll.js';
import { initPortfolioModal } from './js/portfolio-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  if (window.Lenis && window.gsap && window.ScrollTrigger) {
    const lenis = new Lenis({
      duration: 1.25,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -80, duration: 1.4 }); }
      });
    });
  }

  initCursor();
  initCube();
  initMenu();
  initScrollAnimations();
  initTabs();
  initContact();
  initPortfolioScroll();
  initPortfolioModal();

  document.querySelectorAll('.port-img-photo').forEach(img => {
    img.addEventListener('error', () => { img.style.display = 'none'; });
  });
});
