import './style.css';
import { initCursor } from './js/cursor.js';
import { initCube } from './js/cube.js';
import { initMenu } from './js/menu.js';
import { initScrollAnimations } from './js/animations.js';
import { initTabs } from './js/tabs.js';
import { initContact } from './js/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initCube();
  initMenu();
  initScrollAnimations();
  initTabs();
  initContact();

  // Ocultar imágenes de portafolio que no carguen (muestran el número placeholder)
  document.querySelectorAll('.port-img-photo').forEach(img => {
    img.addEventListener('error', () => { img.style.display = 'none'; });
  });
});
