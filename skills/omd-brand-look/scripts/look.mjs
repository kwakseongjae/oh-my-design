#!/usr/bin/env node
// omd-brand-look look (design doc §2, §5): repaint the sample screen once per verified reference, shoot the first viewport
// at each width, and lay the shots out as a grid (rows = brands, columns = widths) plus 4:5 Threads cards of the 390px
// column. The user's source is never touched: each brand gets a copy with one <style data-omd-brand-look> block.
//
//   PW_CORE=$PWD/web node look.mjs --sample <id> [<id> …] [--out .omd/brand-look/<run-id>] [--widths 1440,1024,768,390]
//                                  [--lang ko] [--card id,id,id,id,id]… [--assign]
//
// No logos, marks or brand copy: captions are text (name, surface, verified date, font label, omitted count, values).
// Exit 2 = usage, 3 = a reference was refused (not found / not verified_v2; the others still render).

import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { brandTokens, renderCss, contrastOf, suggest, applySuggestions } from './tokens.mjs';
import { SAMPLE, readTarget, keptValues, textPairs, themedCopy } from './target.mjs';
import { launchChromium } from './browser.mjs';

// W2 default set (owner 2026-11-09, design doc §7 Q5: ohouse takes the fifth slot instead of baemin)
const W2 = ['toss', 'karrot', 'ohouse', 'linear.app', 'apple'];
const HEIGHTS = { 1440: 900, 1024: 768, 768: 1024, 390: 844 };
const args = process.argv.slice(2);
const VALUE_FLAGS = new Set(['--out', '--widths', '--lang', '--card']);
const flag = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const flags = (k) => args.flatMap((a, i) => (a === `--${k}` ? [args[i + 1]] : []));
if (!args.includes('--sample')) { console.error('usage: node look.mjs --sample <id> [<id> …] [--out dir] [--widths 1440,1024,768,390] [--lang ko] [--card id,…]… [--assign]\n(MVP: --sample only; user HTML and dev-server URLs come later)'); process.exit(2); }
const ids = args.filter((a, i) => !a.startsWith('--') && !VALUE_FLAGS.has(args[i - 1])).flatMap((a) => a.split(',')).filter(Boolean);
const IDS = ids.length ? ids : W2;
const LANG = flag('lang', 'ko');
const ASSIGN = args.includes('--assign');
const WIDTHS = String(flag('widths', '1440,1024,768,390')).split(',').map(Number);
const stamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').slice(0, 15);
const OUT = path.resolve(flag('out', path.join('.omd', 'brand-look', stamp)));
const vp = (w) => ({ width: w, height: HEIGHTS[w] ?? 900 });

const html = readTarget(SAMPLE);
const kept = keptValues(html);
const pairs = textPairs(html);
mkdirSync(OUT, { recursive: true });

// ---------- 1. tokens + themed copies ----------
const brands = [];
const refused = [];
for (const id of IDS) {
  let t;
  try { t = brandTokens(id, { format: 'hex', lang: LANG }); } // the sample reads var(--x), so hex
  catch (e) { refused.push({ id, error: e.message }); console.error(e.message); continue; }
  // Pairs this screen paints (not only the six of the CSS comment), with the screen's own value on an omitted side.
  t.screenContrast = contrastOf(t, pairs, kept);
  t.screenSuggestions = suggest(t, pairs, kept);
  if (ASSIGN) {
    applySuggestions(t, t.screenSuggestions);
    t.screenContrast = contrastOf(t, pairs, kept);
  }
  const css = renderCss(t);
  const dir = path.join(OUT, id);
  mkdirSync(path.join(dir, 'shots'), { recursive: true });
  writeFileSync(path.join(dir, 'tokens.css'), css + '\n');
  const { absFile, ...json } = t;
  writeFileSync(path.join(dir, 'tokens.json'), JSON.stringify(json, null, 2) + '\n');
  writeFileSync(path.join(dir, 'index.html'), themedCopy(html, css, { dropDefaultFont: Boolean(t.font.stack) }));
  brands.push(t);
}
mkdirSync(path.join(OUT, 'baseline', 'shots'), { recursive: true });
writeFileSync(path.join(OUT, 'baseline', 'index.html'), html);

// ---------- 2. shots ----------
const { browser, engine } = await launchChromium();
const fontsLoaded = {};
async function shoot(dir, key) {
  const url = pathToFileURL(path.join(dir, 'index.html')).href;
  for (const w of WIDTHS) {
    const ctx = await browser.newContext({ viewport: vp(w), deviceScaleFactor: 2, reducedMotion: 'reduce', locale: LANG === 'ko' ? 'ko-KR' : LANG });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => page.waitForLoadState('load'));
    await page.evaluate(async () => { await document.fonts.ready; });
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(dir, 'shots', `${w}.png`) });
    if (w === 390) await page.screenshot({ path: path.join(dir, 'shots', '390-full.png'), fullPage: true });
    if (w === WIDTHS[0] && key) {
      fontsLoaded[key] = await page.evaluate(() => [...new Set([...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family.replace(/^["']|["']$/g, '')))]);
    }
    await ctx.close();
  }
}
await shoot(path.join(OUT, 'baseline'), 'baseline');
for (const t of brands) { await shoot(path.join(OUT, t.id), t.id); console.log(`shot ${t.id}`); }

// ---------- 3. grid + Threads cards ----------
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const facts = (t) => [
  t.slots.primary ? `primary ${t.slots.primary.v} (${t.slots.primary.from})` : 'primary omitted',
  t.radius ? `radius ${t.radius.v} (${t.radius.from})` : 'radius omitted',
  t.pillButton ? `pill button ${t.pillButton.v}, not applied` : null,
].filter(Boolean);
const caption = (t) => `
  <div class="name">${esc(t.displayName)}${t.displayName !== t.name ? ` <span class="en">${esc(t.name)}</span>` : ''}</div>
  ${t.surface ? `<div class="line">${esc(t.surface)}</div>` : ''}
  <div class="line">verified ${esc(t.verified_at)}</div>
  <div class="line font">${esc(t.font.caption)}</div>
  <div class="line">slots ${t.filled}/18 · omitted ${t.omitted.length}</div>
  ${facts(t).map((f) => `<div class="line mono">${esc(f)}</div>`).join('')}`;
const DISCLAIMER = (list) => `Not affiliated with the companies shown. Tokens measured from public surfaces; see ${list.map((t) => `oh-my-design.kr/design-systems/${t.id}`).join(', ')}.`;
const H = 340;
const gridHtml = `<!doctype html><html lang="ko"><head><meta charset="utf-8"><title>omd-brand-look grid</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<style>
body{margin:0;padding:32px;background:#f4f4f5;color:#18181b;font-family:"Pretendard Variable",sans-serif;font-size:13px;line-height:1.45;word-break:keep-all;overflow-wrap:anywhere}
h1{font-size:20px;margin:0 0 4px;letter-spacing:-0.01em} .sub{color:#52525b;margin-bottom:20px}
.head,.row{display:grid;grid-template-columns:300px ${WIDTHS.map((w) => `${Math.round((H * w) / (HEIGHTS[w] ?? 900)) + 2}px`).join(' ')};gap:16px;align-items:start}
.head{margin-bottom:8px;color:#52525b;font-weight:600}
.row{padding:16px 0;border-top:1px solid #d4d4d8}
.cap .name{font-size:18px;font-weight:700;letter-spacing:-0.01em} .cap .en{font-size:13px;font-weight:500;color:#52525b}
.cap .line{color:#3f3f46;margin-top:3px} .cap .font{color:#18181b;font-weight:600} .mono{font-family:ui-monospace,Menlo,monospace;font-size:11.5px}
img{display:block;height:${H}px;width:auto;border:1px solid #d4d4d8;background:#fff}
.foot{margin-top:20px;color:#52525b}
</style></head><body>
<h1>Same screen × ${brands.length} brands</h1>
<div class="sub">omd-brand-look sample screen · first viewport at ${WIDTHS.join(' · ')} · ${new Date().toISOString().slice(0, 10)} · values only; checks are in report.md</div>
<div class="head"><div></div>${WIDTHS.map((w) => `<div>${w}</div>`).join('')}</div>
${brands.map((t) => `<div class="row"><div class="cap">${caption(t)}</div>${WIDTHS.map((w) => `<img src="${t.id}/shots/${w}.png" alt="${esc(t.name)} at ${w}px">`).join('')}</div>`).join('\n')}
<div class="foot">${esc(DISCLAIMER(brands))}</div>
</body></html>`;
writeFileSync(path.join(OUT, 'grid.html'), gridHtml);

async function snap(file, out, viewport, fullPage) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(pathToFileURL(file).href, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map((i) => i.decode().catch(() => {}))); });
  await page.screenshot({ path: out, fullPage });
  await ctx.close();
}
const gridWidth = 32 * 2 + 300 + 16 * WIDTHS.length + WIDTHS.reduce((s, w) => s + Math.round((H * w) / (HEIGHTS[w] ?? 900)) + 2, 0);
await snap(path.join(OUT, 'grid.html'), path.join(OUT, 'grid.png'), { width: gridWidth, height: 900 }, true);

const cardSets = (flags('card').length ? flags('card').map((s) => s.split(',')) : [brands.map((t) => t.id)])
  .map((set) => set.map((id) => brands.find((t) => t.id === id)).filter(Boolean)).filter((set) => set.length);
mkdirSync(path.join(OUT, 'threads'), { recursive: true });
const cards = [];
if (WIDTHS.includes(390)) for (const [k, set] of cardSets.entries()) {
  const colW = Math.floor((1080 - 2 * 44 - (set.length - 1) * 14) / set.length);
  const cardHtml = `<!doctype html><html lang="ko"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<style>
html,body{margin:0;width:1080px;height:1350px;overflow:hidden}
body{box-sizing:border-box;padding:64px 44px 40px;background:#f4f4f5;color:#18181b;font-family:"Pretendard Variable",sans-serif;display:flex;flex-direction:column;justify-content:space-between;word-break:keep-all;overflow-wrap:anywhere}
h1{margin:0;font-size:76px;line-height:1.15;letter-spacing:-0.035em;font-weight:800}
.sub{margin-top:18px;font-size:22px;line-height:1.4;color:#52525b;letter-spacing:-0.01em}
.cols{display:grid;grid-template-columns:repeat(${set.length},${colW}px);gap:14px;align-items:end}
.col{display:flex;flex-direction:column}
.shot{border-radius:16px;border:1px solid #d4d4d8;overflow:hidden;background:#fff}
.shot img{display:block;width:100%;height:auto}
.n{margin-top:14px;font-size:20px;font-weight:700;letter-spacing:-0.01em}
.f{margin-top:4px;font-size:12.5px;line-height:1.35;color:#52525b;min-height:51px}
.v{margin-top:6px;font-family:ui-monospace,Menlo,monospace;font-size:11.5px;color:#3f3f46;display:flex;align-items:center;gap:6px}
.chip{width:12px;height:12px;border-radius:3px;border:1px solid rgba(0,0,0,.15);flex:none}
.foot{margin-top:24px;font-size:13px;color:#71717a}
</style></head><body>
<div><h1>같은 화면,<br>${set.length}개 회사</h1>
<div class="sub">Same screen, repainted with each company's measured tokens · 390px</div></div>
<div><div class="cols">${set.map((t) => `<div class="col"><div class="shot"><img src="../${t.id}/shots/390-full.png" alt=""></div><div class="n">${esc(t.displayName)}</div><div class="f">${esc(t.font.caption)}</div><div class="v">${t.slots.primary ? `<span class="chip" style="background:${t.slots.primary.v}"></span>${t.slots.primary.v}` : 'primary omitted'}</div><div class="v">radius ${esc(t.radius?.v ?? 'omitted')}</div></div>`).join('')}</div>
<div class="foot">${esc(`Not affiliated with the companies shown. Tokens measured from public surfaces; see oh-my-design.kr/design-systems/<id>.`)}</div>
</body></html>`;
  const name = `${String(k + 1).padStart(2, '0')}-390x${set.length}`;
  writeFileSync(path.join(OUT, 'threads', `${name}.html`), cardHtml);
  await snap(path.join(OUT, 'threads', `${name}.html`), path.join(OUT, 'threads', `${name}.png`), { width: 1080, height: 1350 }, false);
  cards.push({ file: `threads/${name}.png`, brands: set.map((t) => t.id) });
}
await browser.close();

// ---------- 4. run.json ----------
const run = {
  created: new Date().toISOString(), target: 'sample', targetFile: path.relative(process.cwd(), SAMPLE), lang: LANG, assign: ASSIGN,
  widths: WIDTHS.map((w) => vp(w)), deviceScaleFactor: 2, keptValues: kept, textPairs: pairs,
  brands: brands.map((t) => ({ id: t.id, name: t.name, displayName: t.displayName, file: t.file, status: t.status, verified_at: t.verified_at,
    filled: t.filled, omitted: t.omitted, font: { case: t.font.case, caption: t.font.caption, stack: t.font.stack, loads: t.font.loads, expect: t.font.expect }, fontsLoaded: fontsLoaded[t.id] ?? [] })),
  baseline: { fontsLoaded: fontsLoaded.baseline ?? [] },
  refused, cards, engines: { look: engine },
};
writeFileSync(path.join(OUT, 'run.json'), JSON.stringify(run, null, 2) + '\n');
console.log(`\nomd-brand-look: ${brands.length} brand(s) × ${WIDTHS.length} widths -> ${path.relative(process.cwd(), OUT) || OUT}`);
console.log(`  grid.png, ${cards.length} Threads card(s), run.json${refused.length ? ` · refused: ${refused.map((r) => r.id).join(', ')}` : ''}`);
console.log(`  next: node ${path.relative(process.cwd(), path.join(path.dirname(SAMPLE), '..', 'scripts', 'check.mjs'))} ${path.relative(process.cwd(), OUT) || OUT}`);
process.exit(refused.length ? 3 : 0);
