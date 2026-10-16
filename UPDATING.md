# Updating Sejeong Bae's homepage

All shared academic content lives in **`data/site-data.js`**. Pages render it with **`js/site-render.js`** (no build step; works on GitHub Pages).

Also update **`lastUpdated`** and **`copyrightYear`** at the top of `site-data.js` when you publish changes.

## What lives where

| Content | Location in `site-data.js` |
| --- | --- |
| Footer “Last updated” | `lastUpdated`, `copyrightYear` |
| News (EN + optional KO) | `news[]` |
| Published papers | `publications.international`, `publications.domestic` |
| Under-review papers | `publications.inProgress` |
| Conferences | `conferences.international`, `conferences.domestic` |
| Biography CV papers | `about.cvPublications` |
| Awards | `about.awards` |
| Home profile / i18n labels | `script.js` (`translations`) + static HTML on `index.html` |

External news sidebar: `external-news-data.js` (unchanged).

## Add a published paper

1. Add an object to `publications.international` or `publications.domestic` with a unique `id`.
2. Set **`image`** to a path under `news/` when you have a cover thumbnail (optional; text-only cards use the same layout without a thumbnail).
3. Add a matching row to `about.cvPublications` if it should appear on the Biography page.
4. Optional: add a `news[]` item when you announce it.

## In-progress / under review

Add to `publications.inProgress` with HTML in `html`. Use status badge class `status-under-review` and label **Under review** (not “In progress”) unless the manuscript is not yet submitted.

## Add a conference

Add to `conferences.international` or `conferences.domestic` after the event. For international talks, set `presentationType` to `Oral` or `Poster` when known; omit or `null` if unknown (e.g. AOGS 2024).

## Add news

1. Append to `news[]` with unique `id`, `date` (`Mon DD, YYYY`), `content`, and optional `contentKo`.
2. Optional `link` / `linkText` (and `linkTextKo`).
3. Optional photo: save file under **`news/`** and set `image: "news/your-file.jpg"`.

### News photos (user-provided)

Place originals in **`news-photos/`** and run:

```bash
python3 scripts/import-news-photos.py
```

This resizes into `news/` (max width 1600px, target &lt;500KB).

## Publication cover images

- Put thumbnails in `news/` (e.g. `news/adapt_gpp_cover.png`).
- If `image` is set, the file must exist under the repo root (usually `news/`).
- Do not commit generated placeholder art for missing journal covers; omit `image` instead.

## Validate before commit

```bash
npm run validate
```

Checks schema, duplicate `id`s, required publication images, and that referenced files exist.

## Conventions

- News: provide **English**; add **Korean** in `contentKo` when possible.
- Conferences: add only after attended (or with a clear future date you control in data).
- Dataset links: use `venueHtml` with a `[Dataset]` link (see ADAPT entry).
- GISRS DOI: `https://doi.org/10.1080/15481603.2025.2609352`
