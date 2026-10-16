/**
 * Renders shared content from window.SITE_DATA into page placeholders.
 */
(function () {
  'use strict';

  const LI_FLEX = 'display: flex; gap: 1.5rem; align-items: flex-start;';
  const LINK_FLEX =
    'display: flex; gap: 1.5rem; align-items: flex-start; width: 100%; text-decoration: none; color: inherit;';
  const THUMB_WRAP = 'flex-shrink: 0;';
  const PAPER_STYLE = 'flex: 1; position: relative; min-width: 0;';
  const IMG_STYLE =
    'max-width: 200px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);';
  const FALLBACK_STYLE =
    'width: 130px; height: 168px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); background: linear-gradient(160deg, #f8fafc 0%, #e2e8f0 100%); border: 1px solid rgba(148, 163, 184, 0.35); display: flex; align-items: center; justify-content: center; text-align: center; padding: 0.5rem; font-size: 0.7rem; line-height: 1.25; color: #64748b; box-sizing: border-box;';

  function assetPath(relativePath) {
    if (!relativePath) return '';
    const clean = relativePath.replace(/^\//, '');
    const inSubdir = /\/(about|news|publications|conference|others)\//.test(window.location.pathname);
    if (!inSubdir) return clean;
    if (clean.startsWith('news/')) return '../' + clean;
    if (clean.startsWith('external-news/')) return '../' + clean;
    return '../' + clean;
  }

  function createThumbColumn(pub) {
    const wrap = document.createElement('div');
    wrap.style.cssText = THUMB_WRAP;
    if (pub.image) {
      const img = document.createElement('img');
      img.src = assetPath(pub.image);
      img.alt = pub.imageAlt || pub.title || 'Publication';
      img.style.cssText = IMG_STYLE;
      img.loading = 'lazy';
      img.onerror = function () {
        img.replaceWith(createFallbackThumb(pub));
      };
      wrap.appendChild(img);
    } else {
      wrap.appendChild(createFallbackThumb(pub));
    }
    return wrap;
  }

  function createFallbackThumb(pub) {
    const el = document.createElement('div');
    el.className = 'publication-thumb-fallback';
    el.style.cssText = FALLBACK_STYLE;
    el.setAttribute('aria-hidden', 'true');
    el.textContent = pub.imageAlt || 'Journal article';
    return el;
  }

  function buildPaperBody(pub, index, options) {
    const showIndex = options.showIndex !== false;
    const body = document.createElement('div');
    body.className = 'published-paper';
    body.style.cssText = PAPER_STYLE;

    if (pub.metricsHtml) {
      const metrics = document.createElement('div');
      metrics.className = 'publication-metrics';
      metrics.innerHTML = pub.metricsHtml;
      body.appendChild(metrics);
    }

    const authors = document.createElement('div');
    authors.className = 'publication-authors';
    authors.innerHTML =
      (showIndex ? `<span class="publication-index">${index}.</span> ` : '') + (pub.authorsHtml || '');
    body.appendChild(authors);

    const title = document.createElement('div');
    title.className = 'publication-title-text';
    title.textContent = pub.title || '';
    body.appendChild(title);

    const venue = document.createElement('div');
    venue.className = 'publication-venue';
    venue.innerHTML = pub.venueHtml || '';
    body.appendChild(venue);

    const year = document.createElement('span');
    year.className = 'publication-year';
    year.textContent = String(pub.year || '');
    body.appendChild(year);

    return body;
  }

  function buildPublishedPaper(pub, index, options) {
    const li = document.createElement('li');
    li.style.cssText = LI_FLEX;

    const thumb = createThumbColumn(pub);
    const body = buildPaperBody(pub, index, options);

    if (pub.doi) {
      const link = document.createElement('a');
      link.href = pub.doi;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.cssText = LINK_FLEX;
      link.appendChild(thumb);
      link.appendChild(body);
      li.appendChild(link);
    } else {
      li.appendChild(thumb);
      li.appendChild(body);
    }

    return li;
  }

  function renderPublicationsList(container, options) {
    if (!container || !window.SITE_DATA) return;
    const data = window.SITE_DATA.publications;
    const opts = options || {};
    container.innerHTML = '';

    if (opts.showInProgress) {
      const block = document.createElement('div');
      block.className = 'publication-item';
      const heading = document.createElement('h3');
      heading.setAttribute('data-i18n', 'publications.inProgress');
      heading.style.cssText = 'font-size: 0.9em; opacity: 0.7; font-weight: normal; margin-bottom: 0.75rem;';
      heading.textContent = 'In progress publications';
      block.appendChild(heading);
      const ul = document.createElement('ul');
      ul.style.cssText = 'margin-bottom: 1rem;';
      data.inProgress.forEach((item) => {
        const li = document.createElement('li');
        li.style.cssText = 'margin-bottom: 0; padding: 0.5rem;';
        li.innerHTML = item.html;
        ul.appendChild(li);
      });
      block.appendChild(ul);
      container.appendChild(block);
    }

    const sections = [
      { key: 'international', i18n: 'publications.international', title: 'International Journal Articles' },
      { key: 'domestic', i18n: 'publications.domestic', title: 'Domestic Journal Articles' },
    ];

    sections.forEach((section) => {
      const list = data[section.key];
      if (!list || !list.length) return;
      const block = document.createElement('div');
      block.className = 'publication-item';
      const heading = document.createElement('h3');
      heading.setAttribute('data-i18n', section.i18n);
      heading.textContent = section.title;
      block.appendChild(heading);
      const ul = document.createElement('ul');
      list.forEach((pub, idx) => {
        ul.appendChild(buildPublishedPaper(pub, idx + 1, { showIndex: opts.showIndex }));
      });
      block.appendChild(ul);
      container.appendChild(block);
    });
  }

  function conferenceText(item, lang) {
    const base = lang === 'ko' && item.textKo ? item.textKo : item.textEn;
    if (item.presentationType) {
      return `${base} <span class="conference-type-badge">${item.presentationType}</span>`;
    }
    return base;
  }

  function renderConferences(root) {
    if (!root || !window.SITE_DATA) return;
    const data = window.SITE_DATA.conferences;
    const lang =
      typeof currentLang !== 'undefined'
        ? currentLang
        : localStorage.getItem('language') || 'en';

    root.querySelectorAll('[data-conference-list]').forEach((ul) => {
      const kind = ul.getAttribute('data-conference-list');
      const items = data[kind] || [];
      ul.innerHTML = '';
      items.forEach((item) => {
        const li = document.createElement('li');
        const date = document.createElement('span');
        date.className = 'conference-date';
        date.textContent = item.date;
        const text = document.createElement('span');
        text.className = 'conference-text';
        text.innerHTML = conferenceText(item, lang);
        li.appendChild(date);
        li.appendChild(text);
        ul.appendChild(li);
      });
    });

    if (typeof sortConferenceLists === 'function') {
      sortConferenceLists();
    }
  }

  function renderAboutSections() {
    const awardsRoot = document.getElementById('about-awards');
    const pubsRoot = document.getElementById('about-publications');
    if (!window.SITE_DATA || !window.SITE_DATA.about) return;
    const lang =
      typeof currentLang !== 'undefined'
        ? currentLang
        : localStorage.getItem('language') || 'en';

    if (awardsRoot) {
      awardsRoot.innerHTML = '';
      window.SITE_DATA.about.awards.forEach((award) => {
        const entry = document.createElement('div');
        entry.className = 'cv-entry';
        const date = document.createElement('div');
        date.className = 'cv-date';
        date.textContent = award.year;
        const detail = document.createElement('div');
        detail.className = 'cv-detail';
        detail.textContent = lang === 'ko' && award.textKo ? award.textKo : award.textEn;
        entry.appendChild(date);
        entry.appendChild(detail);
        awardsRoot.appendChild(entry);
      });
    }

    if (pubsRoot) {
      pubsRoot.innerHTML = '';
      window.SITE_DATA.about.cvPublications.forEach((row) => {
        const entry = document.createElement('div');
        entry.className = 'cv-entry';
        const date = document.createElement('div');
        date.className = 'cv-date';
        date.textContent = row.year;
        const detail = document.createElement('div');
        detail.className = 'cv-detail';
        detail.innerHTML = row.html;
        entry.appendChild(date);
        entry.appendChild(detail);
        pubsRoot.appendChild(entry);
      });
    }
  }

  function applySiteMeta() {
    if (!window.SITE_DATA) return;
    const yearEl = document.getElementById('current-year');
    const updatedEl = document.getElementById('last-updated');
    if (yearEl && window.SITE_DATA.copyrightYear) {
      yearEl.textContent = String(window.SITE_DATA.copyrightYear);
    }
    if (updatedEl && window.SITE_DATA.lastUpdated) {
      updatedEl.textContent = window.SITE_DATA.lastUpdated;
    }
  }

  function initSiteRender() {
    if (!window.SITE_DATA) return;
    applySiteMeta();
    document.querySelectorAll('[data-site-render="publications"]').forEach((el) => {
      renderPublicationsList(el, {
        showInProgress: el.getAttribute('data-show-in-progress') === 'true',
        showIndex: el.getAttribute('data-show-index') !== 'false',
      });
    });
    document.querySelectorAll('[data-site-render="conferences"]').forEach((el) => {
      renderConferences(el);
    });
    renderAboutSections();
  }

  window.SiteRender = {
    assetPath,
    initSiteRender,
    renderPublicationsList,
    renderConferences,
    renderAboutSections,
    applySiteMeta,
  };

  document.addEventListener('DOMContentLoaded', initSiteRender);
})();
