const PROJECT_DATA = {
  'el-topo': {
    desc: {
      reto: 'Espacio residencial con distribución rígida y poca luz natural.',
      solucion: 'Rediseño interior y redistribución para ganar amplitud y luz.',
      resultado: 'Modelado BIM completo con paleta neutra, madera y luz controlada.'
    },
    tags: ['Interior', 'Residencial', 'Revit', 'Lumion', 'Bogotá']
  },
  'la-ofi': {
    desc: {
      reto: 'Adaptar un espacio a un entorno de trabajo funcional y con identidad.',
      solucion: 'Diseño de interiorismo enfocado en flujo, ergonomía y marca.',
      resultado: 'Zonificación acústica y mobiliario modular para mayor productividad.'
    },
    tags: ['Interior', 'Oficina', 'Diseño BIM', 'Bogotá']
  },
  'el-nido': {
    desc: {
      reto: 'Vivienda con poco aprovechamiento de luz natural y ventilación.',
      solucion: 'Rediseño interior con materialidad local y confort climático pasivo.',
      resultado: 'Luz natural y ventilación cruzada integradas al diseño.'
    },
    tags: ['Interior', 'Residencial', 'Materialidad', 'Bogotá']
  },
  'villa-magnolia': {
    desc: {
      reto: 'Proyecto residencial desde diagnóstico hasta ejecución.',
      solucion: 'Diseño arquitectónico con documentación técnica y residencia de obra.',
      resultado: 'Documentación técnica exhaustiva y supervisión de principio a fin.'
    },
    tags: ['Residencial', 'BIM completo', 'Supervisión', 'Bogotá']
  },
  'recuperacion-urbana-la-union': {
    desc: {
      reto: 'Recuperar una plaza central deteriorada como espacio público de encuentro.',
      solucion: 'Intervención urbana con tratamiento de piso y patrón geométrico identitario.',
      resultado: 'Cuatro zonas renovadas con paisajismo bioclimático y plantas nativas.'
    },
    tags: ['Urbano', 'Espacio público', 'BIM', 'Lumion', 'Paisajismo', 'Fómeque', 'Cundinamarca'],
    images: [
      '/images/portfolio/recuperacion-urbana-la-union/cover.jpg',
      '/images/portfolio/recuperacion-urbana-la-union/01.jpg',
      '/images/portfolio/recuperacion-urbana-la-union/02.jpg',
      '/images/portfolio/recuperacion-urbana-la-union/05.jpg',
      '/images/portfolio/recuperacion-urbana-la-union/08.jpg',
      '/images/portfolio/recuperacion-urbana-la-union/04.jpg',
      '/images/portfolio/recuperacion-urbana-la-union/06.jpg',
      '/images/portfolio/recuperacion-urbana-la-union/03.jpg',
      '/images/portfolio/recuperacion-urbana-la-union/07.jpg',
      '/images/portfolio/recuperacion-urbana-la-union/09.jpg'
    ]
  },
  'cid': {
    desc: {
      reto: 'Dar identidad visual coherente a una ONG con presencia en los 32 departamentos.',
      solucion: 'Identidad visual completa + sitio web para una organización certificada HQAI.',
      resultado: 'Marca y web unificadas para sus programas de educación y protección.'
    },
    tags: ['Branding', 'Web', 'Identidad visual', 'ONG', 'Colombia', 'HQAI'],
    images: [
      '/images/portfolio/cid/cover.jpg',
      '/images/portfolio/cid/01.jpg',
      '/images/portfolio/cid/02.jpg'
    ]
  },
  'angeles-en-el-manglar': {
    desc: {
      reto: 'Comunicar el trabajo de una fundación aliada del ICBF en el Pacífico.',
      solucion: 'Brandbook integral + sitio web para la organización.',
      resultado: 'Identidad y presencia digital para sus programas de primera infancia.'
    },
    tags: ['Branding', 'Web', 'ICBF', 'Tumaco', 'Sector social'],
    images: [
      '/images/portfolio/angeles-en-el-manglar/01.jpg',
      '/images/portfolio/angeles-en-el-manglar/03.jpg',
      '/images/portfolio/angeles-en-el-manglar/cover.jpg',
      '/images/portfolio/angeles-en-el-manglar/02.jpg'
    ]
  },
  'raelja': {
    desc: {
      reto: 'Gestionar infraestructura institucional bajo contratación pública.',
      solucion: 'Documentación técnica con cumplimiento NSR-10 y normativa COPASST.',
      resultado: 'Proyecto conforme a los requisitos de la Policía Nacional.'
    },
    tags: ['Infraestructura', 'Contratación pública', 'NSR-10', 'Institucional']
  },
  'dron': {
    desc: {
      reto: 'Levantamientos y registro visual precisos para obra y presentación.',
      solucion: 'Fotografía aérea con piloto de dron certificado.',
      resultado: 'Levantamientos topográficos, seguimiento de obra y material de presentación.'
    },
    tags: ['Fotografía aérea', 'Dron', 'DJI', 'Levantamiento', 'Paisaje', 'Colombia'],
    images: [
      '/images/portfolio/dron/capurgana-01.jpg',
      '/images/portfolio/dron/villa-de-leyva-01.jpg',
      '/images/portfolio/dron/capurgana-02.jpg',
      '/images/portfolio/dron/mongua-01.jpg',
      '/images/portfolio/dron/mongua-02.jpg',
      '/images/portfolio/dron/guasca-01.jpg',
      '/images/portfolio/dron/guasca-02.jpg',
      '/images/portfolio/dron/sasaima-01.jpg',
      '/images/portfolio/dron/doradal-01.jpg',
      '/images/portfolio/dron/villa-de-leyva-02.jpg',
      '/images/portfolio/dron/medellin-01.jpg',
      '/images/portfolio/dron/tolima-01.jpg',
      '/images/portfolio/dron/gautavita-01.jpg',
      '/images/portfolio/dron/gautavita-02.jpg',
      '/images/portfolio/dron/dron-2026-01.jpg'
    ]
  }
};

function accentLastWord(title) {
  const words = title.trim().split(' ');
  const last = words.pop();
  const prefix = words.length ? words.join(' ') + ' ' : '';
  return `${prefix}<span class="pm-title-accent">${last}</span>`;
}

export function initPortfolioModal() {
  const modal     = document.getElementById('portModal');
  const backdrop  = modal.querySelector('.pm-backdrop');
  const closeBtn  = modal.querySelector('.pm-close');
  const pmCat     = document.getElementById('pmCat');
  const pmTitle   = document.getElementById('pmTitle');
  const pmMeta    = document.getElementById('pmMeta');
  const pmGallery = document.getElementById('pmGallery');
  const pmDots    = document.getElementById('pmDots');
  const pmDesc    = document.getElementById('pmDesc');
  const pmTags    = document.getElementById('pmTags');
  const prevBtn   = modal.querySelector('.pm-prev');
  const nextBtn   = modal.querySelector('.pm-next');

  let currentIdx = 0;
  let slides     = [];

  function buildGallery(srcs, title) {
    slides = srcs;
    currentIdx = 0;

    pmGallery.innerHTML = srcs.map((src, i) => src
      ? `<div class="pm-slide-img">
           <img src="${src}" alt="${title} — imagen ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}"
                onerror="this.parentElement.classList.add('pm-slide-hidden')">
         </div>`
      : `<div class="pm-slide-placeholder"><span>imagen ${i + 1}</span></div>`
    ).join('');

    pmDots.innerHTML = srcs.map((_, i) =>
      `<span class="pm-dot${i === 0 ? ' active' : ''}" data-idx="${i}"></span>`
    ).join('');

    pmDots.querySelectorAll('.pm-dot').forEach(d => {
      d.addEventListener('click', () => goTo(parseInt(d.dataset.idx)));
    });

    updateCarousel();
  }

  function goTo(idx) {
    currentIdx = (idx + slides.length) % slides.length;
    updateCarousel();
  }

  function updateCarousel() {
    pmGallery.style.transform = `translateX(-${currentIdx * 100}%)`;
    pmDots.querySelectorAll('.pm-dot').forEach((d, i) =>
      d.classList.toggle('active', i === currentIdx)
    );
  }

  prevBtn.addEventListener('click', () => goTo(currentIdx - 1));
  nextBtn.addEventListener('click', () => goTo(currentIdx + 1));

  // Swipe support
  let touchStartX = 0;
  modal.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  modal.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(currentIdx + (dx < 0 ? 1 : -1));
  }, { passive: true });

  function openModal(card) {
    const slug     = card.dataset.slug;
    const title    = card.dataset.title;
    const cat      = card.dataset.cat;
    const year     = card.dataset.year;
    const location = card.dataset.location;
    const cover    = card.dataset.cover;
    const extra    = PROJECT_DATA[slug] || {};

    pmCat.textContent   = cat;
    pmTitle.innerHTML   = accentLastWord(title);
    pmMeta.textContent  = [year, location].filter(Boolean).join(' · ');
    pmDesc.innerHTML    = extra.desc
      ? `<p class="pm-desc-line"><strong>Reto</strong> ${extra.desc.reto}</p>
         <p class="pm-desc-line"><strong>Solución</strong> ${extra.desc.solucion}</p>
         <p class="pm-desc-line"><strong>Resultado</strong> ${extra.desc.resultado}</p>`
      : '';
    pmTags.innerHTML    = (extra.tags || []).map(t => `<span class="pm-tag">${t}</span>`).join('');

    const srcs = extra.images || (() => {
      const list = [cover];
      for (let i = 1; i <= 3; i++) {
        if (cover) list.push(cover.replace('cover.jpg', `0${i}.jpg`));
      }
      return list;
    })();
    buildGallery(srcs, title);

    modal.removeAttribute('hidden');
    requestAnimationFrame(() => modal.classList.add('open'));
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => modal.setAttribute('hidden', ''), 350);
  }

  document.querySelectorAll('.port-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver proyecto ${card.dataset.title}`);
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
    });
  });

  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goTo(currentIdx - 1);
    if (e.key === 'ArrowRight') goTo(currentIdx + 1);
  });
}
