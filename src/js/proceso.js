export function initProceso() {
  const section = document.getElementById('proceso');
  if (!section || !window.gsap || !window.ScrollTrigger) return;

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const track  = document.getElementById('procesoTrack');
  const dots   = document.querySelectorAll('.pdot');
  const slides = track ? track.querySelectorAll('.paso-slide') : [];
  const n      = slides.length;
  const deco   = section.querySelector('.proceso-deco');

  if (!track || n === 0) return;

  // Decorative ring: fade in when section enters view, rotate with scroll
  if (deco) {
    gsap.to(deco, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        end: 'top 30%',
        toggleActions: 'play reverse play reverse',
      }
    });
    gsap.to(deco, {
      rotation: 200,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2.5,
      }
    });
  }

  const mm = gsap.matchMedia();

  mm.add('(min-width: 900px)', () => {
    gsap.to(track, {
      xPercent: -(100 - 100 / n),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate(self) {
          const idx = Math.min(n - 1, Math.round(self.progress * (n - 1)));
          dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        }
      }
    });
  });
}
