export function initPortfolioScroll() {
  const section = document.getElementById('portafolio');
  if (!section || !window.gsap || !window.ScrollTrigger) return;

  const { gsap, ScrollTrigger } = window;
  const track  = document.getElementById('portTrack');
  const dots   = document.querySelectorAll('.prdot');
  const slides = track ? track.querySelectorAll('.port-slide') : [];
  const n      = slides.length;

  if (!track || n === 0) return;

  const mm = gsap.matchMedia();

  mm.add('(min-width: 900px)', () => {
    ScrollTrigger.refresh();

    const padding   = 48 * 2;                                 // left + right padding
    const scrollDist = Math.max(0, track.scrollWidth - window.innerWidth + padding);

    section.style.height = `calc(100vh + ${scrollDist}px)`;

    gsap.to(track, {
      x: -scrollDist,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=' + scrollDist,
        scrub: 1.2,
        invalidateOnRefresh: true,
        onUpdate(self) {
          const idx = Math.min(n - 1, Math.round(self.progress * (n - 1)));
          dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        }
      }
    });

    // Return cleanup for when matchMedia no longer matches
    return () => {
      section.style.height = '';
      gsap.set(track, { x: 0 });
    };
  });
}
