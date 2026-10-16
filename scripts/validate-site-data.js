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

  (data.about?.awards || []).forEach((a) => remember(a.id, 'award'));
  (data.about?.grants || []).forEach((g) => remember(g.id, 'grant'));

  checkBiographyPublicationSync(data, errors);
  checkFooterFallbacks(data, errors);

  if (errors.length) {
    console.error('Validation failed:\n' + errors.map((e) => ` - ${e}`).join('\n'));
    process.exit(1);
  }
  console.log('validate-site-data: OK');
}

main();
