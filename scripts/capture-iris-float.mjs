import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'docs', 'screenshots', 'after');
const PORT = 4174;

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
  const filePath = resolveFilePath(req.url || '/');
  if (!filePath || !filePath.startsWith(ROOT) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(filePath);
  const types = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
  };
  res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
}

fs.mkdirSync(OUT, { recursive: true });

const server = http.createServer(serveStatic);
await new Promise((resolve) => server.listen(PORT, resolve));

const shots = [
  { file: 'iris-float-home-1280.png', url: '/', width: 1280, height: 800 },
  { file: 'iris-float-home-390.png', url: '/', width: 390, height: 844 },
  { file: 'iris-float-home-390-ko.png', url: '/?lang=ko', width: 390, height: 844 },
];

const browser = await chromium.launch({ headless: true });
for (const s of shots) {
  const context = await browser.newContext({ viewport: { width: s.width, height: s.height } });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:${PORT}${s.url}`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.iris-lab-float');
  await page.screenshot({ path: path.join(OUT, s.file) });
  await context.close();
  console.log('saved', path.join(OUT, s.file));
}

await browser.close();
server.close();