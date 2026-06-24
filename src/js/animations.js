export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('v');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fi').forEach(el => observer.observe(el));

  // Hero visible inmediatamente
  document.querySelectorAll('#hero .fi').forEach(el => el.classList.add('v'));
}
