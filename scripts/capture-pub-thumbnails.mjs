import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'news');

const pubs = [
  {
    out: 'pub_adapt_isprs2026.png',
    doi: '10.1016/j.isprsjprs.2026.09.024',
  },
  {
    out: 'pub_helios_isprs2026.png',
    doi: '10.1016/j.isprsjprs.2026.09.028',
  },
  {
    out: 'pub_unique_rse2026.png',
    doi: '10.1016/j.rse.2026.115636',
  },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });

for (const pub of pubs) {
  const url = `https://doi.org/${pub.doi}`;
  console.log('Fetching', url);
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
    await page.waitForTimeout(5000);
    const imgUrl = await page.evaluate(() => {
      const og = document.querySelector('meta[property="og:image"]')?.content;
      if (og) return og;
      const img = document.querySelector(
        'img[src*="els-cdn"], img[src*="sciencedirect"], .abstract-author img, #preview-image, img[data-testid="figure"]'
      );
      return img?.src || null;
    });
    const dest = path.join(OUT_DIR, pub.out);
    if (imgUrl) {
      const resp = await page.request.get(imgUrl);
      const buf = await resp.body();
      fs.writeFileSync(dest, buf);
      console.log('  saved og/preview', dest, buf.length);
      continue;
    }
    // Fallback: clip top of article panel
    const clip = await page.evaluate(() => {
      const el =
        document.querySelector('#abstracts') ||
        document.querySelector('article') ||
        document.querySelector('main');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: Math.max(0, r.x), y: Math.max(0, r.y), width: Math.min(520, r.width), height: Math.min(680, r.height) };
    });
    if (clip && clip.width > 50) {
      await page.screenshot({ path: dest, clip });
      console.log('  saved clip', dest);
    } else {
      console.log('  no capture for', pub.doi);
    }
  } catch (e) {
    console.log('  error', pub.doi, e.message);
  }
}

await browser.close();
