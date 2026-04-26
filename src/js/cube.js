import { CUBE } from './constants.js';

export function initCube() {
  const box = document.getElementById('box');
  const hero = document.getElementById('hero');
  if (!box || !hero) return;

  // Estado de rotación acumulada (Euler continuo, sin límites de giro)
  let rotX = CUBE.INITIAL_ROT_X;
  let rotY = CUBE.INITIAL_ROT_Y;
  let targetX = CUBE.INITIAL_ROT_X;
  let targetY = CUBE.INITIAL_ROT_Y;
  let velX = 0;
  let velY = 0;
  let dragging = false;
  let lastMx = 0;
  let lastMy = 0;
  let autoAngle = CUBE.INITIAL_ROT_Y;
  let autoActive = true;
  let rafId = null;
  let idleTimer = null;

  // JS toma el control de la animación; quita la CSS animation
  box.style.animation = 'none';
  box.style.transition = 'none';

  function applyRot() {
    box.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  // Seguimiento de mouse sin arrastre: mapea posición en el hero → ángulo objetivo
  function onHeroMouseMove(e) {
    if (dragging) return;
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const ny = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    targetY = autoAngle + nx * CUBE.MOUSE_Y_RANGE;
    targetX = -ny * CUBE.MOUSE_X_RANGE;
    autoActive = false;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { autoActive = true; }, CUBE.IDLE_TIMEOUT_MS);
  }

  function onHeroMouseLeave() {
    if (!dragging) autoActive = true;
  }

  function startDrag(clientX, clientY) {
    dragging = true;
    autoActive = false;
    lastMx = clientX;
    lastMy = clientY;
    velX = 0;
    velY = 0;
  }

  function moveDrag(clientX, clientY) {
    const dx = clientX - lastMx;
    const dy = clientY - lastMy;
    // Velocidad para inercia post-arrastre
    velY = dx * CUBE.VELOCITY_FACTOR;
    velX = -dy * CUBE.VELOCITY_FACTOR;
    // Rotación libre 360° en ambos ejes
    rotY += dx * CUBE.DRAG_SENSITIVITY;
    rotX += -dy * CUBE.DRAG_SENSITIVITY;
    targetX = rotX;
    targetY = rotY;
    lastMx = clientX;
    lastMy = clientY;
    applyRot();
  }

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    runInertia();
  }

  // Decaimiento exponencial de velocidad al soltar
  function runInertia() {
    cancelAnimationFrame(rafId);
    (function step() {
      velX *= CUBE.DAMPING;
      velY *= CUBE.DAMPING;
      rotX += velX;
      rotY += velY;
      targetX = rotX;
      targetY = rotY;
      applyRot();
      if (Math.abs(velX) > CUBE.VELOCITY_THRESHOLD || Math.abs(velY) > CUBE.VELOCITY_THRESHOLD) {
        rafId = requestAnimationFrame(step);
      } else {
        autoActive = true;
        startMainLoop();
      }
    })();
  }

  // Loop principal: auto-rotación + interpolación suave (lerp) hacia el objetivo
  function startMainLoop() {
    cancelAnimationFrame(rafId);
    (function loop() {
      if (autoActive) {
        autoAngle += CUBE.AUTO_SPEED;
        targetY = autoAngle;
        // Retorno suave al eje horizontal cuando está en auto-rotación
        targetX += (0 - targetX) * CUBE.X_RETURN_FACTOR;
      }
      if (!dragging) {
        rotX += (targetX - rotX) * CUBE.LERP_FACTOR;
        rotY += (targetY - rotY) * CUBE.LERP_FACTOR;
        applyRot();
      }
      rafId = requestAnimationFrame(loop);
    })();
  }

  // Eventos de mouse
  hero.addEventListener('mousemove', onHeroMouseMove);
  hero.addEventListener('mouseleave', onHeroMouseLeave);
  hero.addEventListener('mousedown', e => {
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (dragging) moveDrag(e.clientX, e.clientY);
  });
  document.addEventListener('mouseup', endDrag);

  // Eventos táctiles (misma lógica)
  hero.addEventListener('touchstart', e => {
    const t = e.touches[0];
    startDrag(t.clientX, t.clientY);
  }, { passive: true });
  document.addEventListener('touchmove', e => {
    if (!dragging) return;
    const t = e.touches[0];
    moveDrag(t.clientX, t.clientY);
  }, { passive: true });
  document.addEventListener('touchend', endDrag);

  startMainLoop();
}
