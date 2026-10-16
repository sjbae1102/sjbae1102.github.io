#!/usr/bin/env node
/**
 * Validates data/site-data.js schema, duplicate ids, publication images, and asset paths.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

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
      assert(p.image, `${p.id}: published paper must have image`);
      assert(p.title, `${p.id}: title required`);
      checkImage(p.image, errors);
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

  if (errors.length) {
    console.error('Validation failed:\n' + errors.map((e) => ` - ${e}`).join('\n'));
    process.exit(1);
  }
  console.log('validate-site-data: OK');
}

main();
