/**
 * Design refresh proposal: theme toggle and research cards.
 */
(function () {
  'use strict';

  const THEME_KEY = 'site-theme';

  const INFOGRAPHIC_SRC = {
    gpp: 'assets/research/gpp.svg',
    disaster: 'assets/research/disaster.svg',
    ai: 'assets/research/ai-remote-sensing.svg',
  };

  const RESEARCH_CARDS = [
    {
      titleKey: 'home.researchCardGppTitle',
      descKey: 'home.researchCardGppDesc',
      linkPubId: 'pub-adapt-isprs-2026',
      theme: 'gpp',
    },
    {
      titleKey: 'home.researchCardDisasterTitle',
      descKey: 'home.researchCardDisasterDesc',
      linkPubId: 'pub-samba-kjrs-2024',
      theme: 'disaster',
    },
    {
      titleKey: 'home.researchCardAiTitle',
      descKey: 'home.researchCardAiDesc',
      linkPubId: 'pub-helios-isprs-2026',
      theme: 'ai',
    },
  ];

  function findPublication(pubId) {
    if (!window.SITE_DATA?.publications) return null;
    for (const section of ['international', 'domestic']) {
      const hit = (window.SITE_DATA.publications[section] || []).find((p) => p.id === pubId);
      if (hit) return hit;
    }
    return null;
  }

  function getTranslation(key) {
    const lang =
      typeof currentLang !== 'undefined' ? currentLang : localStorage.getItem('language') || 'en';
    if (typeof translations === 'undefined') return key;
    const parts = key.split('.');
    let node = translations[lang];
    for (const part of parts) {
      node = node?.[part];
    }
    return node || key;
  }

  function renderResearchCards() {
    const grid = document.getElementById('research-cards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    RESEARCH_CARDS.forEach((card) => {
      const pub = findPublication(card.linkPubId);
      const href = pub ? `/publications/#pub-${pub.id}` : '/publications/';
      const link = document.createElement('a');
      link.className = 'research-card';
      link.href = href;

      const thumb = document.createElement('div');
      thumb.className = `research-card-thumb research-card-thumb--${card.theme}`;
      const img = document.createElement('img');
      img.className = 'research-infographic';
      img.src = INFOGRAPHIC_SRC[card.theme];
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      thumb.appendChild(img);

      const body = document.createElement('div');
      body.className = 'research-card-body';
      const h3 = document.createElement('h3');
      h3.textContent = getTranslation(card.titleKey);
      const p = document.createElement('p');
      p.textContent = getTranslation(card.descKey);
      const cta = document.createElement('div');
      cta.className = 'research-card-cta';
      cta.setAttribute('data-i18n', 'home.researchCardCta');
      cta.textContent = getTranslation('home.researchCardCta');

      body.appendChild(h3);
      body.appendChild(p);
      body.appendChild(cta);
      link.appendChild(thumb);
      link.appendChild(body);
      grid.appendChild(link);
    });
  }

  function applyTheme(theme) {
    const next = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next === 'dark' ? 'dark' : 'light');
    localStorage.setItem(THEME_KEY, next);
    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
      btn.title = next === 'dark' ? 'Light mode' : 'Dark mode';
    });
  }

  function initThemeToggle() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
    }

    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        applyTheme(isDark ? 'light' : 'dark');
      });
    });
  }

  function init() {
    initThemeToggle();
    if (document.getElementById('research-cards-grid')) {
      renderResearchCards();
    }
  }

  window.DesignRefresh = {
    init,
    renderResearchCards,
    applyTheme,
  };

  document.addEventListener('DOMContentLoaded', init);
})();
