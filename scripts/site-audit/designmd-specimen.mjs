#!/usr/bin/env node
/**
 * A specimen sheet for one Core v2 DESIGN.md: the colours, type scale, control sizes and radii the file itself states,
 * drawn at real size in a 1440-wide PNG. Built to show the owner what the site's public DESIGN.md says before and after
 * a rewrite (web/public/design.md), side by side as two images.
 *
 *   node scripts/site-audit/designmd-specimen.mjs --in web/public/design.md --out /path/after.png [--label "after"] [--source "what --in is"]
 *
 * Everything drawn comes from the file's text, parsed the same way for any Core v2 file (the format has no frontmatter,
 * so the tokens are read from the body):
 *   colours   lines "**name** ... `#hex`" or "**name** `oklch(...)`"; an oklch value is shown with its sRGB hex
 *             converted by the browser and marked "converted"
 *   type      Markdown tables with a Size and a Weight column; the family is the first Family cell of a table that has one
 *   controls  tables with a Height column, and prose of the form `name` 32px (`h-8` …)
 *   radii     tables with a Value column whose first cell names a radius
 * A group the file does not state is drawn as "not stated in this file", never filled in. A family that has no font file
 * here is drawn in the platform sans and labelled as such.
 */
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const flag = (n) => (args.includes(n) ? args[args.indexOf(n) + 1] : null);
const IN = flag('--in');
const OUT = flag('--out');
if (!IN || !OUT) { console.error('usage: designmd-specimen.mjs --in <DESIGN.md> --out <file.png> [--label <text>]'); process.exit(2); }
const LABEL = flag('--label') ?? path.basename(IN);

const roots = [REPO];
try { roots.push(path.resolve(execFileSync('git', ['-C', REPO, 'rev-parse', '--git-common-dir'], { encoding: 'utf8' }).trim(), '..')); } catch { /* no git */ }
function fromWeb(rel) { for (const r of roots) { const p = path.join(r, 'web', rel); if (fs.existsSync(p)) return p; } return null; }
function loadPlaywright() {
  for (const r of roots) { try { return createRequire(path.join(r, 'web/package.json'))('playwright-core'); } catch { /* next */ } }
  console.error('playwright-core not found under web/node_modules'); process.exit(2);
}

// Font files available offline. Wanted Sans: the site's own self-hosted Latin slices. Geist / Geist Mono: the copies
// Next ships for its dev overlay (the same faces next/font/google serves).
const FONTS = {
  'Wanted Sans Variable': ['public/fonts/wanted-sans/WantedSansVariable.split.90.woff2', 'public/fonts/wanted-sans/WantedSansVariable.split.89.woff2'],
  Geist: ['node_modules/next/dist/next-devtools/server/font/geist-latin.woff2'],
  'Geist Mono': ['node_modules/next/dist/next-devtools/server/font/geist-mono-latin.woff2'],
};

// ---- parse ----
const md = fs.readFileSync(IN, 'utf8');
const title = (md.match(/^# (.+)$/m) ?? [, path.basename(IN)])[1];
const cells = (line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
const tables = [];
{
  const lines = md.split('\n');
  for (let i = 0; i < lines.length - 1; i++) {
    if (!/^\s*\|/.test(lines[i]) || !/^\s*\|\s*:?-{2,}/.test(lines[i + 1])) continue;
    const head = cells(lines[i]).map((h) => h.toLowerCase());
    const rows = [];
    let j = i + 2;
    for (; j < lines.length && /^\s*\|/.test(lines[j]); j++) rows.push(cells(lines[j]));
    let heading = '';
    for (let k = i; k >= 0; k--) if (/^#{2,4} /.test(lines[k])) { heading = lines[k].replace(/^#+ /, ''); break; }
    tables.push({ head, rows, heading, line: i + 1 });
    i = j - 1;
  }
}
const col = (t, name) => t.head.findIndex((h) => h === name || h.startsWith(name));
const px = (s) => { const m = String(s).match(/(\d+(?:\.\d+)?)px/); return m ? Number(m[1]) : null; };
const strip = (s) => s.replace(/\x60/g, '').replace(/\*\*/g, '');

const colors = [];
for (const line of md.split('\n')) {
  const m = line.match(/\*\*([^*]+)\*\*:?\s*\x60(oklch\([^)]*\)|#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b)\x60/);
  if (!m) continue;
  const name = m[1].trim();
  const hex = (line.match(/\x60(#[0-9a-fA-F]{6})\x60/) ?? [])[1] ?? null;
  if (!colors.some((c) => c.name === name)) colors.push({ name, value: m[2], hex: m[2].startsWith('#') ? m[2] : hex });
}

let family = null;
for (const t of tables) { const f = col(t, 'family'); if (f >= 0 && t.rows.length) { family = strip(t.rows[0][f]); break; } }
let monoFamily = null;
for (const t of tables) { const f = col(t, 'family'); if (f >= 0) for (const r of t.rows) if (/mono/i.test(r[0]) || /mono/i.test(r[f])) monoFamily = strip(r[f]); }

const type = [];
for (const t of tables) {
  const s = col(t, 'size'), w = col(t, 'weight');
  if (s < 0 || w < 0) continue;
  for (const r of t.rows) { const size = px(r[s]); if (size) type.push({ role: strip(r[0]), size, sizeText: strip(r[s]), weight: Number((r[w].match(/\d{3}/) ?? [400])[0]), note: strip(r[t.head.length - 1] ?? '') }); }
}

const controls = [];
for (const t of tables) {
  const h = col(t, 'height');
  if (h < 0) continue;
  const lab = col(t, 'label');
  for (const r of t.rows) { const height = px(r[h]); if (height) controls.push({ name: strip(r[0]), height, label: lab >= 0 ? strip(r[lab]) : '', note: strip(r[h]) }); }
}
for (const m of md.matchAll(/\x60([\w-]+)\x60 (\d+)px (?:square )?\(\x60(?:h|size)-[\d.]+/g)) controls.push({ name: m[1], height: Number(m[2]), label: '', note: 'from prose' });

const radii = [];
for (const t of tables) {
  const v = col(t, 'value');
  if (v < 0 || !/radi/i.test(t.heading + ' ' + t.rows.map((r) => r[0]).join(' '))) continue;
  for (const r of t.rows) { const value = px(r[v]); if (value != null && /radi/i.test(r[0])) radii.push({ name: strip(r[0]), value }); }
}

// ---- render ----
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const faces = [];
const missing = [];
for (const fam of [family, monoFamily].filter(Boolean)) {
  const files = (FONTS[fam] ?? []).map(fromWeb).filter(Boolean);
  if (!files.length) { missing.push(fam); continue; }
  for (const f of files) faces.push('@font-face{font-family:"' + fam + '";src:url("' + pathToFileURL(f).href + '") format("woff2");font-weight:100 1000;font-display:block}');
}
const famCss = family && !missing.includes(family) ? '"' + family + '", ' : '';
const famNote = !family ? 'Family: not stated in this file' : missing.includes(family) ? 'Family: ' + family + ' (no font file here; drawn in the platform sans, not ' + family + ')' : 'Family: ' + family;
const none = '<p class="none">not stated in this file</p>';
const rel = path.relative(REPO, path.resolve(IN));
const shownPath = flag('--source') ?? (rel.startsWith('..') ? path.basename(IN) : rel);

// The sheet's own chrome is neutral grey so it does not compete with the file's colours; the scales are real size.
const CSS = [
  '*{box-sizing:border-box;margin:0}',
  'body{width:1440px;padding:56px 64px 72px;background:#fff;color:#111;font:15px/1.45 ' + famCss + 'system-ui,-apple-system,sans-serif}',
  'header{display:flex;justify-content:space-between;align-items:baseline;gap:24px;border-bottom:1px solid #ddd;padding-bottom:20px;margin-bottom:36px}',
  'header b{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#666}',
  'header h1{font-size:28px;font-weight:700;white-space:nowrap}',
  'header p{color:#555;font-size:14px;text-align:right;max-width:55%}',
  'h2{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#666;font-weight:600;margin:40px 0 16px}',
  '.none{color:#999;font-style:italic}',
  '.sw{display:grid;grid-template-columns:repeat(6,1fr);gap:16px}',
  '.sw div i{display:block;height:72px;border-radius:10px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}',
  '.sw div span{display:block;font-size:12.5px;margin-top:6px;word-break:break-all}',
  '.sw div small{display:block;font-size:12px;color:#666;font-family:ui-monospace,Menlo,monospace}',
  '.ty>div{display:grid;grid-template-columns:240px 1fr;align-items:baseline;gap:24px;padding:10px 0;border-top:1px solid #eee}',
  '.ty small{color:#666;font-size:12.5px}',
  '.ty p{white-space:nowrap;overflow:hidden}',
  '.ct{display:flex;align-items:flex-end;gap:28px;flex-wrap:wrap}',
  '.ct div{display:flex;flex-direction:column;align-items:center;gap:8px}',
  '.ct i{display:flex;align-items:center;justify-content:center;width:150px;background:#eee;border:1px dashed #999;font-style:normal;font-size:12px;color:#333}',
  '.ct small{font-size:12.5px;color:#444;text-align:center}',
  '.rd{display:flex;gap:28px;flex-wrap:wrap}',
  '.rd div{display:flex;flex-direction:column;align-items:center;gap:8px}',
  '.rd i{display:block;width:120px;height:80px;border:2px solid #333;background:#f4f4f4}',
  '.rd small{font-size:12.5px;color:#444;text-align:center}',
].join('\n');
const html = '<!doctype html><html><head><meta charset="utf-8"><style>' + faces.join('') + CSS + '</style></head><body>' +
  '<header><div><b>' + esc(LABEL) + '</b><h1>' + esc(title) + '</h1></div><p>' + esc(shownPath) + ' · ' + esc(famNote) + '</p></header>' +
  '<h2>Colours (' + colors.length + ')</h2>' + (colors.length ? '<div class="sw">' + colors.map((c) => '<div><i style="background:' + esc(c.value) + '"></i><span>' + esc(c.name) + '</span><small data-v="' + esc(c.value) + '">' + esc(c.hex ?? c.value) + (c.value.startsWith('oklch') ? (c.hex ? ' (in file)' : '') : '') + '</small>' + (c.value.startsWith('oklch') ? '<small>' + esc(c.value) + '</small>' : '') + '</div>').join('') + '</div>' : none) +
  '<h2>Type scale, real size (' + type.length + ')</h2>' + (type.length ? '<div class="ty">' + type.map((t) => '<div><small>' + esc(t.role) + '<br>' + esc(t.sizeText) + ' / ' + t.weight + (t.note ? '<br>' + esc(t.note) : '') + '</small><p style="font-size:' + t.size + 'px;font-weight:' + t.weight + ';line-height:1.2">Copy DESIGN.md · Toss 0123</p></div>').join('') + '</div>' : none) +
  '<h2>Control heights, real size (' + controls.length + ')</h2>' + (controls.length ? '<div class="ct">' + controls.map((c) => '<div><i style="height:' + c.height + 'px">' + c.height + 'px</i><small>' + esc(c.name) + (c.label ? '<br>' + esc(c.label) : '') + '</small></div>').join('') + '</div>' : none) +
  '<h2>Radii (' + radii.length + ')</h2>' + (radii.length ? '<div class="rd">' + radii.map((r) => '<div><i style="border-radius:' + Math.min(r.value, 40) + 'px"></i><small>' + esc(r.name) + '<br>' + r.value + 'px</small></div>').join('') + '</div>' : none) +
  '</body></html>';

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'omd-specimen-'));
const page = path.join(tmp, 'specimen.html');
fs.writeFileSync(page, html);
const { chromium } = loadPlaywright();
const browser = await chromium.launch({ headless: true });
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  await p.goto(pathToFileURL(page).href, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  // oklch swatches: show the sRGB hex the browser draws, marked as converted, unless the file stated one.
  await p.evaluate(() => {
    const cv = document.createElement('canvas'); cv.width = cv.height = 1; const g = cv.getContext('2d', { willReadFrequently: true });
    for (const s of document.querySelectorAll('small[data-v^="oklch"]')) {
      if (s.textContent.includes('(in file)')) continue;
      g.clearRect(0, 0, 1, 1); g.fillStyle = s.dataset.v; g.fillRect(0, 0, 1, 1);
      const [r, gg, b] = g.getImageData(0, 0, 1, 1).data;
      s.textContent = '#' + [r, gg, b].map((v) => v.toString(16).padStart(2, '0')).join('') + ' (converted)';
    }
  });
  fs.mkdirSync(path.dirname(path.resolve(OUT)), { recursive: true });
  await p.screenshot({ path: OUT, fullPage: true });
  console.log(JSON.stringify({ out: OUT, title, family, monoFamily, missingFonts: missing, colors: colors.length, type: type.length, controls: controls.length, radii: radii.length }));
} finally {
  await browser.close();
  fs.rmSync(tmp, { recursive: true, force: true });
}
