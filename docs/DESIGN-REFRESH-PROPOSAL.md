# Design refresh proposal (draft — not for merge without review)

Visual layer only: `css/design-refresh.css` + `js/design-refresh.js`. Content remains in `data/site-data.js`; `npm run validate` unchanged.

- **Home:** hero, research cards → existing publication thumbnails / icons, photo-forward news grid, scroll reveal.
- **Global:** Inter + Pretendard, optional dark mode (navbar toggle, `localStorage`).
- **Rollback:** remove the two asset links from HTML pages to restore the previous look.
