import { CURSOR } from './constants.js';

export function initCursor() {
  const dot = document.getElementById('cur');
  const ring = document.getElementById('cur2');
  if (!dot || !ring) return;

  let targetX = 0;
  let targetY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener('mousemove', e => {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.left = targetX + 'px';
    dot.style.top = targetY + 'px';
  });

  (function loop() {
    ringX += (targetX - ringX) * CURSOR.RING_LERP;
    ringY += (targetY - ringY) * CURSOR.RING_LERP;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(loop);
  })();
}
