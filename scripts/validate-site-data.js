#!/usr/bin/env node
/**
 * Validates data/site-data.js schema, duplicate ids, publication images, asset paths,
 * and Biography ↔ Publications consistency.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { listCvPublications, listPublishedPublicationIds } = require('./lib/publication-cv');

const ROOT = path.join(__dirname, '..');
const DATA_PATH = path.join(ROOT, 'data', 'site-data.js');

function loadSiteData() {
  const code = fs.readFileSync(DATA_PATH, 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(`${code}\nthis.SITE_DATA = window.SITE_DATA;`, sandbox);
  return sandbox.SITE_DATA;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function checkImage(relPath, errors) {
  const normalized = relPath.replace(/^\//, '');
  const full = path.join(ROOT, normalized);
  if (!fs.existsSync(full)) {
    errors.push(`Missing image file: ${relPath}`);
  }
}

function checkFooterFallbacks(data, errors) {
  const expectedYear = String(data.copyrightYear);
  const expectedUpdated = data.lastUpdated;
  const htmlFiles = [
    'index.html',
    'about/index.html',
    'news/index.html',
    'publications/index.html',
    'conference/index.html',
    'others/index.html',
  ];
  htmlFiles.forEach((rel) => {
    const full = path.join(ROOT, rel);
    const text = fs.readFileSync(full, 'utf8');
    if (!text.includes(`id="current-year">${expectedYear}`)) {
      errors.push(
        `Stale footer copyright fallback in ${rel} (expected ${expectedYear} in #current-year span)`
      );
    }
    if (!text.includes(`id="last-updated">${expectedUpdated}`)) {
      errors.push(
        `Stale footer last-updated fallback in ${rel} (expected "${expectedUpdated}" to match site-data.js)`
      );
    }
  });
}

function checkConferenceListFormat(data, errors) {
  const quotePattern = /["'‘’「」]/;
  const dateRangeInParens =
    /\(\s*(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d|\d{4}\.\d{2}\.\d{2}/;
  const venueOrTalkHints = [
    /\.\s*"/,
    /\)\s*,\s*(?:HICO|Washington|Sejong|경주|미국)/,
    /Sejong University/i,
    /대양AI센터/,
    / entitled /i,
  ];

  ['international', 'domestic'].forEach((kind) => {
    (data.conferences[kind] || []).forEach((item) => {
      ['textEn', 'textKo'].forEach((field) => {
        const text = item[field];
        if (!text) {
          errors.push(`conference ${item.id}: ${field} is required`);
          return;
        }
        if (quotePattern.test(text)) {
          errors.push(
            `conference ${item.id} ${field}: must not contain quotes (official conference name only; put talk titles in news[])`
          );
        }
        if (dateRangeInParens.test(text)) {
          errors.push(
            `conference ${item.id} ${field}: must not include date ranges in the title (use the \`date\` field only)`
          );
        }
        venueOrTalkHints.forEach((pattern) => {
          if (pattern.test(text)) {
            errors.push(
              `conference ${item.id} ${field}: looks like a venue or talk title (use official conference name only; see docs/UPDATE-CHECKLIST.md)`
            );
          }
        });
      });
    });
  });
}

function checkBiographyNoInProgress(errors) {
  const rel = 'js/site-render.js';
  const text = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const fn = text.slice(text.indexOf('function renderAboutSections'), text.indexOf('function conferenceDateToCvYear'));
  if (/inProgress/.test(fn)) {
    errors.push('Biography must not render publications.inProgress (Under review papers belong on the Publications page only)');
  }
  const pub = fs.readFileSync(path.join(ROOT, 'publications/index.html'), 'utf8');
  if (!pub.includes('data-show-in-progress="true"')) {
    errors.push('publications/index.html must keep data-show-in-progress="true"');
  }
}

function checkBiographyPublicationSync(data, errors) {
  if (data.about?.cvPublications?.length) {
    errors.push(
      'about.cvPublications is deprecated; Biography papers are generated from publications.international/domestic'
    );
  }

  const publishedIds = listPublishedPublicationIds(data);
  const cvRows = listCvPublications(data);
  if (cvRows.length !== publishedIds.length) {
    errors.push(
      `Biography CV row count (${cvRows.length}) does not match published papers (${publishedIds.length})`
    );
  }

  const cvIds = new Set(cvRows.map((r) => r.id));
  publishedIds.forEach((id) => {
    if (!cvIds.has(id)) {
      errors.push(`Published paper ${id} is missing from generated Biography CV list`);
    }
  });

  const inProgress = data.publications.inProgress || [];
  inProgress.forEach((item) => {
    if (!item.html || !item.html.includes('status-badge')) {
      errors.push(`inProgress ${item.id}: html should include a status badge`);
    }
  });
}

function main() {
  const errors = [];
  const data = loadSiteData();

  assert(data && typeof data === 'object', 'SITE_DATA missing');
  assert(data.lastUpdated, 'lastUpdated is required');
  assert(data.publications, 'publications block required');

  const ids = new Set();
  const remember = (id, label) => {
    if (!id) {
      errors.push(`${label}: missing id`);
      return;
    }
    if (ids.has(id)) errors.push(`Duplicate id: ${id}`);
    ids.add(id);
  };

  (data.publications.inProgress || []).forEach((p) => remember(p.id, 'inProgress'));
  ['international', 'domestic'].forEach((section) => {
    (data.publications[section] || []).forEach((p) => {
      remember(p.id, section);
      assert(p.title, `${p.id}: title required`);
      if (p.image) checkImage(p.image, errors);
    });
  });

  (data.news || []).forEach((n) => {
    remember(n.id, 'news');
    assert(n.date && n.content, `${n.id}: date and content required`);
    if (n.image) checkImage(n.image, errors);
  });

  ['international', 'domestic'].forEach((kind) => {
    (data.conferences[kind] || []).forEach((c) => remember(c.id, `conference-${kind}`));
  });

  (data.about?.awards || []).forEach((a) => {
    remember(a.id, 'award');
    ['titleEn', 'titleKo', 'eventEn', 'eventKo', 'orgEn', 'orgKo'].forEach((field) => {
      if (!a[field] || !String(a[field]).trim()) {
        errors.push(`award ${a.id}: ${field} is required`);
      }
    });
    if (String(a.titleEn || '').includes(' / ') || String(a.eventEn || '').includes(' / ')) {
      errors.push(`award ${a.id}: use title/event/org fields instead of " / " in text`);
    }
  });
  (data.about?.grants || []).forEach((g) => remember(g.id, 'grant'));

  checkBiographyPublicationSync(data, errors);
  checkBiographyNoInProgress(errors);
  checkConferenceListFormat(data, errors);
  checkFooterFallbacks(data, errors);

  if (errors.length) {
    console.error('Validation failed:\n' + errors.map((e) => ` - ${e}`).join('\n'));
    process.exit(1);
  }
  console.log('validate-site-data: OK');
}

main();
