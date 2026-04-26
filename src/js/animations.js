export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('v');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fi').forEach(el => observer.observe(el));

  // El hero es visible inmediatamente, sin esperar scroll
  document.querySelectorAll('#hero .fi').forEach(el => el.classList.add('v'));
}
