/**
 * Design refresh proposal: theme toggle, research cards, scroll reveal hooks.
 */
(function () {
  'use strict';

  const THEME_KEY = 'site-theme';

  const RESEARCH_CARDS = [
    {
      titleKey: 'home.researchCardGppTitle',
      descKey: 'home.researchCardGppDesc',
      linkPubId: 'pub-adapt-isprs-2026',
      fallbackPubId: 'pub-gisrs-2026',
    },
    {
      titleKey: 'home.researchCardDisasterTitle',
      descKey: 'home.researchCardDisasterDesc',
      linkPubId: 'pub-samba-kjrs-2024',
      fallbackPubId: 'pub-samba-kjrs-2024',
      useIcon: 'landslide',
    },
    {
      titleKey: 'home.researchCardAiTitle',
      descKey: 'home.researchCardAiDesc',
      linkPubId: 'pub-helios-isprs-2026',
      fallbackPubId: 'pub-adapt-isprs-2026',
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

  function publicationImagePath(pub) {
    if (!pub?.image) return null;
    if (window.SiteRender && typeof SiteRender.assetPath === 'function') {
      return SiteRender.assetPath(pub.image);
    }
    return pub.image;
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

  function iconSvg(type) {
    if (type === 'landslide') {
      return `<svg class="research-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 20h18M6 17l4-8 3 5 2-3 3 6"/><circle cx="17" cy="7" r="2"/></svg>`;
    }
    return `<svg class="research-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 3l2.2 6.8H21l-5.5 4 2.1 6.7L12 16.8 6.4 20.5l2.1-6.7L3 9.8h6.8L12 3z"/></svg>`;
  }

  function renderResearchCards() {
    const grid = document.getElementById('research-cards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    RESEARCH_CARDS.forEach((card) => {
      const pub = findPublication(card.linkPubId) || findPublication(card.fallbackPubId);
      const href = pub ? `/publications/#pub-${pub.id}` : '/publications/';
      const link = document.createElement('a');
      link.className = 'research-card';
      link.href = href;

      const thumb = document.createElement('div');
      thumb.className = 'research-card-thumb';
      const imgPath = publicationImagePath(pub);
      if (imgPath && !card.useIcon) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.alt = pub.imageAlt || pub.title || '';
        img.loading = 'lazy';
        thumb.appendChild(img);
      } else {
        thumb.innerHTML = iconSvg(card.useIcon);
      }

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

  let revealObserver;

  function observeReveals() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
      );
    }

    document.querySelectorAll('.reveal-on-scroll:not(.is-visible)').forEach((el) => {
      revealObserver.observe(el);
    });
  }

  function init() {
    initThemeToggle();
    if (document.getElementById('research-cards-grid')) {
      renderResearchCards();
    }
    observeReveals();
  }

  window.DesignRefresh = {
    init,
    renderResearchCards,
    observeReveals,
    applyTheme,
  };

  document.addEventListener('DOMContentLoaded', init);
})();
