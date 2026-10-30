import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 4182;

function resolve(u) {
  let p = decodeURIComponent(u.split('?')[0]);
  if (!p || p === '/') return path.join(ROOT, 'index.html');
  if (p.endsWith('/')) p = p.slice(0, -1);
  let f = path.join(ROOT, p);
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  return f;
}

const srv = http.createServer((req, res) => {
  const f = resolve(req.url);
  if (!f || !fs.existsSync(f)) {
    res.writeHead(404);
    return res.end();
  }
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => srv.listen(PORT, r));

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();
await page.goto(`http://127.0.0.1:${PORT}/?theme=light`, { waitUntil: 'networkidle' });
await page.click('.hamburger');
await page.waitForTimeout(400);

const data = await page.evaluate(() => {
  const menu = document.querySelector('.nav-menu');
  const mcs = menu ? getComputedStyle(menu) : null;
  const items = [...document.querySelectorAll('.nav-menu > li')].map((li) => {
    const a = li.querySelector('a.nav-link');
    const lang = li.querySelector('.nav-lang-switch');
    const r = li.getBoundingClientRect();
    const lcs = getComputedStyle(li);
    const pick = (el, name) => {
      if (!el) return null;
      const cs = getComputedStyle(el);
      const b = el.getBoundingClientRect();
      return {
        h: Math.round(b.height * 10) / 10,
        w: Math.round(b.width * 10) / 10,
        x: Math.round(b.x * 10) / 10,
        padT: cs.paddingTop,
        padB: cs.paddingBottom,
        padL: cs.paddingLeft,
        padR: cs.paddingRight,
        minH: cs.minHeight,
        height: cs.height,
        margin: cs.margin,
        lineH: cs.lineHeight,
        display: cs.display,
        align: cs.alignItems,
        before: cs.content,
      };
    };
    return {
      cls: li.className || 'item',
      li: pick(li, 'li'),
      a: pick(a, 'a'),
      lang: pick(lang, 'lang'),
    };
  });
  return {
    menu: mcs
      ? {
          gap: mcs.gap,
          rowGap: mcs.rowGap,
          pad: mcs.padding,
          display: mcs.display,
        }
      : null,
    items,
  };
});

console.log(JSON.stringify(data, null, 2));

await page.screenshot({
  path: '/opt/cursor/artifacts/conference-after/mobile-nav-open.png',
  fullPage: false,
});
await browser.close();
srv.close();
