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

  function iconSvg(theme) {
    if (theme === 'gpp') {
      return `<svg class="research-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><path d="M8 14c1.5-2 4.5-2 6 0"/></svg>`;
    }
    if (theme === 'disaster') {
      return `<svg class="research-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 20h18M5 18l5-10 4 6 3-4 4 8"/><path d="M14 6l2-2 2 2"/></svg>`;
    }
    return `<svg class="research-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z"/><circle cx="12" cy="11" r="2"/><path d="M8 15h8"/></svg>`;
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
      thumb.innerHTML = iconSvg(card.theme);

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

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
  }

  let revealObserver;

  function observeReveals() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = document.querySelectorAll('.reveal-on-scroll');

    items.forEach((el) => {
      el.classList.add('is-visible');
    });

    if (reduceMotion) return;

    items.forEach((el) => {
      if (isInViewport(el)) {
        return;
      }
      el.classList.remove('is-visible');
    });

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
        { rootMargin: '0px 0px -5% 0px', threshold: 0.05 }
      );
    }

    document.querySelectorAll('.reveal-on-scroll:not(.is-visible)').forEach((el) => {
      revealObserver.observe(el);
    });

    window.setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible');
      });
    }, 800);
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
