/* v4 subpage decoration: overline labels and conference year groups (re-run on language change). */
(function () {
  'use strict';
  const OVER = {
    'about-section': ['Curriculum Vitae', '이력'],
    'news-section': ['Updates', '소식'],
    'publications-section': ['Research', '연구'],
    'conference-section': ['Presentations', '발표'],
    'contact-section': ['Others', '기타'],
  };
  function intro(id, ko) {
    const D = window.SITE_DATA || {};
    const P = D.publications || {}, C = D.conferences || {};
    const nPub = (P.international || []).length + (P.domestic || []).length;
    const nRev = (P.inProgress || []).length;
    const nInt = (C.international || []).length, nDom = (C.domestic || []).length;
    const nNews = (D.news || []).length;
    const m = {
      'about-section': ko ? 'UNIST 석·박사통합과정 · IRIS 연구실' : 'Combined M.S. & Ph.D. Student · IRIS Lab, UNIST',
      'news-section': ko ? `연구, 발표, 수상 소식 ${nNews}건` : `${nNews} updates on research, talks, and awards`,
      'publications-section': ko ? `게재 논문 ${nPub}편 · 심사 중 ${nRev}편` : `${nPub} published articles · ${nRev} under review`,
      'conference-section': ko ? `국제 ${nInt}회 · 국내 ${nDom}회` : `${nInt} international · ${nDom} domestic`,
      'contact-section': ko ? '연락처 및 기타 정보' : 'Contact and other information',
    };
    return m[id] || '';
  }
  function groupNews(ko) {
    const tl = document.getElementById('news-timeline');
    if (!tl || !document.getElementById('news-section')) return;
    tl.querySelectorAll('.news-year').forEach((e) => e.remove());
    let last = '';
    Array.from(tl.children).forEach((it) => {
      const d = it.querySelector('.news-date');
      if (!d) return;
      const y = (d.textContent.match(/(\d{4})/) || [])[1];
      if (y && y !== last) {
        const yl = document.createElement('div');
        yl.className = 'news-year';
        yl.textContent = y;
        tl.insertBefore(yl, it);
        last = y;
      }
    });
  }
  function decorate(lang) {
    const ko = (lang || localStorage.getItem('language')) === 'ko';
    document.documentElement.lang = ko ? 'ko' : 'en';
    Object.keys(OVER).forEach((id) => {
      const sec = document.getElementById(id);
      if (!sec) return;
      const h = sec.querySelector('.section-title');
      if (!h) return;
      let p = sec.querySelector('.page-over');
      if (!p) {
        p = document.createElement('p');
        p.className = 'page-over';
        h.parentNode.insertBefore(p, h);
      }
      p.textContent = OVER[id][ko ? 1 : 0];
      // white header band
      let head = sec.querySelector('.page-head');
      if (!head) {
        head = document.createElement('div');
        head.className = 'page-head';
        sec.insertBefore(head, sec.firstChild);
        head.appendChild(p);
        head.appendChild(h);
        const intro = document.createElement('p');
        intro.className = 'page-intro';
        head.appendChild(intro);
      }
      head.querySelector('.page-intro').textContent = intro(id, ko);
    });
    if (document.body.classList.contains('page-v4')) groupNews(ko);
    if (document.body.classList.contains('page-v4')) {
      document.querySelectorAll('#conference-section .conference-list').forEach((ul) => {
        ul.querySelectorAll('li.conf-year').forEach((li) => li.remove());
        const items = Array.from(ul.children).filter((li) => li.querySelector('.conference-date'));
        items.forEach((li) => {
          li.classList.remove('conf-same-year', 'conf-year-start');
        });
        items.sort((a, b) => {
          const da = a.getAttribute('data-conf-date') || '';
          const db = b.getAttribute('data-conf-date') || '';
          return new Date(db) - new Date(da);
        });
        items.forEach((li) => ul.appendChild(li));
        let lastYear = '';
        items.forEach((li) => {
          const full = (li.getAttribute('data-conf-date') || '').trim();
          const y = (full.match(/(\d{4})/) || [])[1];
          const yearEl = li.querySelector('.conference-year');
          const dateEl = li.querySelector('.conference-date');
          if (!y || !yearEl || !dateEl) return;
          dateEl.textContent = full.replace(/,?\s*\d{4}\s*$/, '').trim();
          if (y !== lastYear) {
            lastYear = y;
            yearEl.textContent = y;
            li.classList.add('conf-year-start');
          } else {
            li.classList.add('conf-same-year');
            yearEl.textContent = y;
          }
        });
      });
    }
  }
  window.PagesV4 = { decorate };
  document.addEventListener('DOMContentLoaded', () => setTimeout(() => decorate(), 0));
})();
