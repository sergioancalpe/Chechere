export function initTabs() {
  const tabs = document.querySelectorAll('.s-tab[role="tab"]');
  const panels = document.querySelectorAll('.s-panel[role="tabpanel"]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateTab(tab);
      }
    });
  });

  function activateTab(activeTab) {
    tabs.forEach(t => {
      t.classList.remove('on');
      t.setAttribute('aria-selected', 'false');
    });
    panels.forEach(p => {
      p.classList.remove('on');
      p.setAttribute('hidden', '');
    });

    activeTab.classList.add('on');
    activeTab.setAttribute('aria-selected', 'true');

    const panel = document.getElementById('tp-' + activeTab.dataset.tab);
    if (panel) {
      panel.classList.add('on');
      panel.removeAttribute('hidden');
    }
  }
}
