#!/usr/bin/env node
/**
 * Inventory of what oh-my-design.kr is drawn with, page by page: every control's height, type size, weight, radius
 * and fill; every heading's size, line height and weight; text sizes; and the content width. The basis for the site's
 * own design system (docs/ROADMAP.md T9): a size or radius appears in the spec only if this inventory shows where it
 * is used, and a change is checked by running it again.
 *
 *   node scripts/site-audit/controls.mjs [--base https://oh-my-design.kr] [--out DIR] [--shots]
 *
 * Headless Chromium at 1440 and 390, no sign-in, reads only. Writes <out>/inventory.json and, with --shots,
 * full-page PNGs. Default out: ~/.omd-workers/site-audit/<yyyymmdd>/.
 */
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const flag = (n) => (args.includes(n) ? args[args.indexOf(n) + 1] : null);
const BASE = (flag('--base') ?? 'https://oh-my-design.kr').replace(/\/$/, '');
const day = new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' }).replaceAll('-', '');
const OUT = path.resolve(flag('--out') ?? path.join(os.homedir(), '.omd-workers/site-audit', day));
const SHOTS = args.includes('--shots');
fs.mkdirSync(OUT, { recursive: true });

function loadPlaywright() {
  const roots = [REPO];
  try { roots.push(path.resolve(execFileSync('git', ['-C', REPO, 'rev-parse', '--git-common-dir'], { encoding: 'utf8' }).trim(), '..')); } catch { /* no git */ }
  for (const r of roots) { try { return createRequire(path.join(r, 'web/package.json'))('playwright-core'); } catch { /* next */ } }
  console.error('playwright-core not found under web/node_modules'); process.exit(2);
}
const { chromium } = loadPlaywright();

// One page per kind of surface; the item page three times because a verified, a partial and a legacy reference
// render different sections, and once more in Korean.
const PAGES = [
  ['home', '/'], ['home-ko', '/ko'], ['archive', '/design-systems'],
  ['item-verified', '/design-systems/toss'], ['item-verified-ko', '/ko/design-systems/toss'], ['item-partial', '/design-systems/' + (flag('--partial') ?? 'line')], ['item-legacy', '/design-systems/' + (flag('--legacy') ?? 'wadiz')],
  ['docs', '/docs'], ['blog', '/blog'], ['hangul', '/hangul'], ['what-is', '/what-is-design-md'], ['faq', '/faq'], ['alternatives', '/alternatives'], ['changelog', '/changelog'],
];

function inventory() {
  const vis = (e) => { const r = e.getBoundingClientRect(); const cs = getComputedStyle(e); return r.width > 2 && r.height > 2 && cs.visibility !== 'hidden' && cs.display !== 'none' && Number(cs.opacity) > 0.05; };
  const text = (e) => (e.innerText || e.getAttribute('aria-label') || e.getAttribute('title') || '').replace(/\s+/g, ' ').trim().slice(0, 28);
  const where = (e) => { const s = e.closest('header, footer, nav, main section, section, article, aside, main'); if (!s) return 'body'; return s.tagName.toLowerCase() + (s.id ? '#' + s.id : s.classList[0] ? '.' + s.classList[0] : ''); };
  const controls = [];
  for (const e of document.querySelectorAll('button, a[href], input:not([type=hidden]), select, textarea, summary, [role=button], [role=tab]')) {
    if (!vis(e)) continue;
    const cs = getComputedStyle(e); const r = e.getBoundingClientRect();
    const filled = cs.backgroundColor !== 'rgba(0, 0, 0, 0)'; const bordered = cs.borderTopWidth !== '0px' && cs.borderTopStyle !== 'none';
    const tag = e.tagName.toLowerCase();
    // A plain text link is not a control for this purpose; a link drawn as a button or a card is.
    if (tag === 'a' && !filled && !bordered) continue;
    if (r.height > 120) continue; // cards and tiles are measured as surfaces, not controls
    controls.push({ tag, text: text(e), where: where(e), h: Math.round(r.height), w: Math.round(r.width), fontSize: cs.fontSize, fontWeight: cs.fontWeight, radius: cs.borderTopLeftRadius, padX: cs.paddingLeft, filled: filled ? cs.backgroundColor : null, border: bordered ? cs.borderTopColor : null, color: cs.color });
  }
  const headings = [...document.querySelectorAll('h1, h2, h3, h4')].filter(vis).map((e) => { const cs = getComputedStyle(e); return { tag: e.tagName.toLowerCase(), text: text(e), where: where(e), fontSize: cs.fontSize, lineHeight: cs.lineHeight, fontWeight: cs.fontWeight, letterSpacing: cs.letterSpacing, marginTop: cs.marginTop, marginBottom: cs.marginBottom }; });
  const texts = {};
  for (const e of document.querySelectorAll('p, li, dd, dt, td, th, figcaption, label, small, code, pre')) { if (!vis(e) || !e.innerText.trim()) continue; const cs = getComputedStyle(e); const k = cs.fontSize + ' / ' + cs.lineHeight + ' / ' + cs.fontWeight; texts[k] = (texts[k] ?? 0) + 1; }
  const surfaces = {};
  for (const e of document.querySelectorAll('main *')) { const cs = getComputedStyle(e); if (cs.borderTopLeftRadius === '0px') continue; const r = e.getBoundingClientRect(); if (r.height <= 120 || r.width < 160) continue; if (cs.backgroundColor === 'rgba(0, 0, 0, 0)' && cs.borderTopWidth === '0px') continue; const k = cs.borderTopLeftRadius; surfaces[k] = (surfaces[k] ?? 0) + 1; }
  const main = document.querySelector('main') ?? document.body; const first = main.querySelector(':scope > *, section, article') ?? main;
  const fr = first.getBoundingClientRect();
  return { controls, headings, texts, surfaces, content: { left: Math.round(fr.left), width: Math.round(fr.width), viewport: innerWidth }, height: document.documentElement.scrollHeight, overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth };
}

const browser = await chromium.launch({ headless: true });
const out = { base: BASE, day, pages: {} };
for (const width of [1440, 390]) {
  const ctx = await browser.newContext({ viewport: { width, height: width === 1440 ? 900 : 844 }, isMobile: width === 390, hasTouch: width === 390, deviceScaleFactor: 1, locale: 'ko-KR' });
  for (const [key, p] of PAGES) {
    const page = await ctx.newPage();
    try {
      const resp = await page.goto(BASE + p, { waitUntil: 'load', timeout: 45000 });
      await page.waitForTimeout(1200);
      const total = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < Math.min(total, 16000); y += 800) { await page.evaluate((yy) => scrollTo(0, yy), y); await page.waitForTimeout(120); }
      await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(400);
      const inv = await page.evaluate(inventory);
      out.pages[key + '@' + width] = { path: p, status: resp?.status() ?? null, ...inv };
      if (SHOTS) await page.screenshot({ path: path.join(OUT, key + '-' + width + '.png'), fullPage: true, clip: { x: 0, y: 0, width, height: Math.min(inv.height, 14000) } });
      console.log([width, key.padEnd(18), resp?.status(), 'controls ' + inv.controls.length, 'headings ' + inv.headings.length, inv.overflowX ? 'OVERFLOW-X ' + inv.overflowX : ''].join('  '));
    } catch (e) { out.pages[key + '@' + width] = { path: p, error: String(e.message).split('\n')[0] }; console.log(width, key, 'ERROR', String(e.message).split('\n')[0]); }
    await page.close();
  }
  await ctx.close();
}
await browser.close();
fs.writeFileSync(path.join(OUT, 'inventory.json'), JSON.stringify(out, null, 1));
console.log('→ ' + path.join(OUT, 'inventory.json'));
