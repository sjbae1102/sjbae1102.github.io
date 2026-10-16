import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = process.env.SITE_ROOT ? path.resolve(process.env.SITE_ROOT) : path.join(__dirname, '..');
const OUT = process.env.SCREENSHOT_OUT
  ? path.resolve(process.env.SCREENSHOT_OUT)
  : path.join(ROOT, 'docs', 'screenshots', 'after');
const PORT = 4173;

const pages = [
  { name: 'home-news', url: `/?tab=news` },
  { name: 'home-publications', url: `/?tab=publications` },
  { name: 'home-conference', url: `/?tab=conference` },
  { name: 'publications', url: '/publications/' },
  { name: 'conference', url: '/conference/' },
  { name: 'news', url: '/news/' },
  { name: 'about', url: '/about/' },
  { name: 'others', url: '/others/' },
];

function resolveFilePath(urlPath) {
  let reqPath = decodeURIComponent(urlPath.split('?')[0]);
  if (!reqPath || reqPath === '/') {
    return path.join(ROOT, 'index.html');
  }
  if (reqPath.endsWith('/')) {
    reqPath = reqPath.slice(0, -1);
  }
  let filePath = path.join(ROOT, reqPath);
  if (!filePath.startsWith(ROOT)) {
    return null;
  }
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  return filePath;
}

function serveStatic(req, res) {
  const filePath = resolveFilePath(req.url);
  if (!filePath || !filePath.startsWith(ROOT) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(filePath);
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
  res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
}

fs.mkdirSync(OUT, { recursive: true });

const server = http.createServer(serveStatic);
server.listen(PORT);

const browser = await chromium.launch({ headless: true });
const viewports = [
  { label: 'desktop', width: 1280, height: 900 },
  { label: 'mobile', width: 390, height: 844 },
];

const consoleErrors = [];

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();
  page.on('console', (msg) => {
    if (msg.type() !== 'error') return;
    const text = msg.text();
    if (text.includes('favicon.png') || text.includes('Failed to load resource')) return;
    consoleErrors.push(`[${vp.label}] ${text}`);
  });
  page.on('pageerror', (err) => consoleErrors.push(`[${vp.label}] ${err.message}`));

  for (const p of pages) {
    await page.goto(`http://127.0.0.1:${PORT}${p.url}`, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(800);
    const file = path.join(OUT, `${p.name}-${vp.label}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log('Saved', file);
  }
  await context.close();
}

await browser.close();
server.close();

if (consoleErrors.length) {
  console.error('Console errors detected:\n' + consoleErrors.join('\n'));
  process.exit(1);
}
console.log('Screenshots complete with no console errors.');
