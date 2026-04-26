export function initMenu() {
  const menu = document.getElementById('mobMenu');
  const ham = document.getElementById('ham');
  if (!menu || !ham) return;

  ham.addEventListener('click', toggleMenu);
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  function toggleMenu() {
    const isOpen = menu.classList.toggle('open');
    ham.classList.toggle('open');
    ham.setAttribute('aria-expanded', String(isOpen));
    ham.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    menu.classList.remove('open');
    ham.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false');
    ham.setAttribute('aria-label', 'Abrir menú');
    document.body.style.overflow = '';
  }
}
