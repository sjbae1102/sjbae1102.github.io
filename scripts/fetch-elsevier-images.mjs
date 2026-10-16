import { chromium } from 'playwright';
import fs from 'fs';

const dois = [
  { doi: '10.1016/j.isprsjprs.2026.09.024', out: 'news/isprs_adapt_cover.jpg' },
  { doi: '10.1016/j.isprsjprs.2026.09.028', out: 'news/isprs_helios_cover.jpg' },
  { doi: '10.1016/j.rse.2026.115636', out: 'news/rse_unique346_cover.jpg' },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
for (const { doi, out } of dois) {
  const url = `https://doi.org/${doi}`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);
  const og = await page.locator('meta[property="og:image"]').first().getAttribute('content').catch(() => null);
  const html = await page.content();
  const match = html.match(/https:\/\/ars\.els-cdn\.com\/content\/image\/[^"'\s<>]+/);
  const imgUrl = og || match?.[0];
  console.log(doi, imgUrl || 'NO_IMAGE');
  if (imgUrl) {
    const resp = await page.request.get(imgUrl);
    const buf = await resp.body();
    fs.writeFileSync(out, buf);
    console.log('  wrote', out, buf.length);
  }
}
await browser.close();
