import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = '/opt/cursor/artifacts/conference-after';
const PORT = 4185;

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
const base = `http://127.0.0.1:${PORT}`;

for (const theme of ['light', 'dark']) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await ctx.newPage();
  await page.goto(`${base}/?theme=${theme}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const check = await page.evaluate(() => {
    const langLi = document.querySelector('.nav-lang-mobile');
    const cs = langLi ? getComputedStyle(langLi) : null;
    const headerSwitch = document.querySelector('.navbar-right .language-switcher');
    return {
      langDisplay: cs?.display,
      langVisible: langLi ? langLi.getBoundingClientRect().height : 0,
      headerSwitchVisible: headerSwitch ? getComputedStyle(headerSwitch).display !== 'none' : false,
    };
  });
  console.log(`desktop ${theme}`, check);
  await page.locator('.navbar').screenshot({
    path: `${OUT}/desktop-header-${theme}-1280.png`,
  });
  console.log(`Saved desktop-header-${theme}-1280.png`);
  await ctx.close();
}

const ctxM = await browser.newContext({ viewport: { width: 390, height: 844 } });
const pageM = await ctxM.newPage();
await pageM.goto(`${base}/?theme=light`, { waitUntil: 'networkidle' });
await pageM.click('.hamburger');
await pageM.waitForTimeout(450);
const mobileCheck = await pageM.evaluate(() => {
  const langLi = document.querySelector('.nav-lang-mobile');
  const cs = langLi ? getComputedStyle(langLi) : null;
  return { langDisplay: cs?.display, height: langLi?.getBoundingClientRect().height };
});
console.log('mobile menu', mobileCheck);
await pageM.screenshot({ path: `${OUT}/mobile-nav-open-light-390.png`, fullPage: false });
console.log('Saved mobile-nav-open-light-390.png');

await browser.close();
srv.close();
