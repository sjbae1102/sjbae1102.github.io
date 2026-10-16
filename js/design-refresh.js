/**
 * Design refresh proposal: theme toggle and research showcase cards.
 */
(function () {
  'use strict';

  const THEME_KEY = 'site-theme';
  const PALETTE_PARAM = 'theme';

  function initPaletteFromQuery() {
    const raw = new URLSearchParams(window.location.search).get(PALETTE_PARAM);
    const id = raw ? String(raw).toLowerCase() : '';
    if (id === 'a' || id === 'b' || id === 'c') {
      document.documentElement.setAttribute('data-palette', id);
    } else {
      document.documentElement.removeAttribute('data-palette');
    }
  }

  initPaletteFromQuery();

  const RESEARCH_IMAGES = {
    gpp: {
      jpg: 'assets/research/gpp.jpg',
      webp: 'assets/research/gpp.webp',
      alt: 'Geostationary satellite observing vegetation and carbon flux',
    },
    disaster: {
      jpg: 'assets/research/landslide.jpg',
      webp: 'assets/research/landslide.webp',
      alt: 'Satellite monitoring of landslide on forested terrain',
    },
    ai: {
      jpg: 'assets/research/ai.jpg',
      webp: 'assets/research/ai.webp',
      alt: 'Geospatial foundation model fusing Earth observation inputs',
    },
  };

  const RESEARCH_CARDS = [
    {
      titleKey: 'home.researchCardGppTitle',
      descKey: 'home.researchCardGppDesc',
      linkPubId: 'pub-adapt-isprs-2026',
      theme: 'gpp',
      featured: true,
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

  function createResearchPicture(theme) {
    const assets = RESEARCH_IMAGES[theme];
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    source.type = 'image/webp';
    source.srcset = assets.webp;
    const img = document.createElement('img');
    img.className = 'research-card-image';
    img.src = assets.jpg;
    img.alt = assets.alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    picture.appendChild(source);
    picture.appendChild(img);
    return picture;
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
      if (card.featured) link.classList.add('research-card--featured');

      const thumb = document.createElement('div');
      thumb.className = `research-card-thumb research-card-thumb--${card.theme}`;
      thumb.appendChild(createResearchPicture(card.theme));

      const body = document.createElement('div');
      body.className = 'research-card-body';
      const h3 = document.createElement('h3');
      h3.textContent = getTranslation(card.titleKey);
      const p = document.createElement('p');
      p.textContent = getTranslation(card.descKey);

      body.appendChild(h3);
      body.appendChild(p);
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
    initPaletteFromQuery,
  };

  document.addEventListener('DOMContentLoaded', init);
})();
