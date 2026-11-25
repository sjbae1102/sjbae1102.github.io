/**
 * Design refresh proposal: theme toggle.
 */
(function () {
  'use strict';

  const IRIS_LAB_URL = 'https://irisunist.wixsite.com/irislab';

  const THEME_KEY = 'site-theme';
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
  }

  function injectIrisLabFloat() {
    if (document.querySelector('.iris-lab-float')) return;
    const link = document.createElement('a');
    link.className = 'iris-lab-float';
    link.href = IRIS_LAB_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('data-i18n-aria', 'float.ariaLabel');
    link.setAttribute('aria-label', 'Visit IRIS Lab at UNIST');
    link.innerHTML =
      '<span class="iris-lab-float__body">' +
      '<span class="iris-lab-float__label" data-i18n="float.currentLab">CURRENT LAB</span>' +
      '<span class="iris-lab-float__main">' +
      '<span class="iris-lab-float__main-text" data-i18n="float.irisMain">IRIS Lab · UNIST</span>' +
      '<span class="iris-lab-float__arrow" aria-hidden="true">↗</span>' +
      '</span>' +
      '<span class="iris-lab-float__sub" data-i18n="float.advisor">Prof. Jungho Im</span>' +
      '</span>';
    document.body.appendChild(link);
  }

  injectIrisLabFloat();

  window.DesignRefresh = {
    init,
    applyTheme,
    irisLabUrl: IRIS_LAB_URL,
  };

  document.addEventListener('DOMContentLoaded', init);
})();
