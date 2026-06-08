#!/usr/bin/env node
/**
 * Render a reference's `tokens:` block to a visual review sheet (PNG).
 * Mirrors getdesign.md depth: colors, typography table (with `use`), rounded,
 * spacing, elevation, components. Used to eyeball a backfill/new-ref result.
 *
 *   GLOBAL_ROOT=$(npm root -g) node scripts/token-sheet.mjs <ref-id> [--out path.png]
 *
 * Requires global playwright (GLOBAL_ROOT). Writes to /tmp/<id>-token-sheet.png
 * by default. Exits non-zero if the ref has no tokens block.
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import yaml from 'js-yaml';

const id = process.argv[2];
if (!id || id.startsWith('--')) {
  console.error('usage: GLOBAL_ROOT=$(npm root -g) node scripts/token-sheet.mjs <ref-id> [--out path]');
  process.exit(2);
}
const outFlag = process.argv.indexOf('--out');
const out = outFlag !== -1 ? process.argv[outFlag + 1] : `/tmp/${id}-token-sheet.png`;
const GLOBAL_ROOT = process.env.GLOBAL_ROOT;
if (!GLOBAL_ROOT) { console.error('set GLOBAL_ROOT=$(npm root -g) for global playwright'); process.exit(2); }

const REFS = join(dirname(fileURLToPath(import.meta.url)), '..', 'references');
const md = readFileSync(join(REFS, id, 'DESIGN.md'), 'utf8');
const fm = yaml.load(md.slice(4, md.indexOf('\n---', 4)));
const t = fm.tokens;
if (!t) { console.error(`${id}: no tokens block`); process.exit(1); }

const accent = (t.colors?.primary || t.colors?.brand || fm.primary_color || '#444').toString();
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const swatch = (name, hex) =>
  `<div style="display:flex;align-items:center;gap:10px;margin:3px 0"><div style="width:34px;height:34px;border-radius:8px;background:${hex};box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)"></div><code style="font:12px ui-monospace">${esc(name)}</code><span style="color:#7d818a;font:12px ui-monospace">${esc(hex)}</span></div>`;
const colors = Object.entries(t.colors || {}).map(([k, v]) => swatch(k, v)).join('');

const typo = t.typography || {};
const typeRows = Object.entries(typo).filter(([k]) => k !== 'family').map(([k, v]) =>
  `<tr><td style="padding:5px 12px 5px 0"><code>${esc(k)}</code></td><td style="padding:5px 12px"><span style="font-size:${Math.min(v.size || 16, 40)}px;font-weight:${v.weight || 400};line-height:1.1">Aa</span></td><td style="padding:5px 12px;color:#555;font:12px ui-monospace">${v.size || '?'}/${v.weight || '?'}/${v.lineHeight ?? '?'}</td><td style="padding:5px 12px;color:#7d818a;font-size:12px">${esc(v.use || '')}</td></tr>`).join('');
const family = typo.family ? Object.values(typo.family).join(' · ') : '';

const rnd = t.rounded || {};
const round = Object.entries(rnd).map(([k, v]) =>
  `<div style="text-align:center"><div style="width:56px;height:56px;background:${accent};border-radius:${v > 1000 ? 28 : v}px"></div><code style="font-size:11px">${esc(k)} ${v}</code></div>`).join('');

const sp = t.spacing || {};
const spaceEntries = Array.isArray(sp) ? sp.map((v, i) => [i, v]) : Object.entries(sp);
const space = spaceEntries.map(([k, v]) =>
  `<div style="text-align:center"><div style="width:${Math.min(v, 96)}px;height:18px;background:${accent};border-radius:3px"></div><code style="font-size:10px">${esc(k)}<br>${v}</code></div>`).join('');

const comps = Object.entries(t.components || {}).map(([k, v]) =>
  `<div style="margin:4px 0"><code style="color:${accent}">${esc(k)}</code> <span style="color:#444;font-size:13px">${esc(v)}</span></div>`).join('');

const html = `<html><head><style>body{font-family:-apple-system,system-ui,sans-serif;margin:0;background:#fff;color:#101214}h1{font-size:30px;margin:0}h2{font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:#7d818a;margin:26px 0 8px;border-bottom:1px solid #eee;padding-bottom:5px}.wrap{padding:36px 44px;width:880px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:0 40px}.row{display:flex;gap:18px;align-items:flex-end;flex-wrap:wrap}table{border-collapse:collapse;font-size:14px}</style></head><body><div class="wrap">
<div style="display:flex;align-items:center;gap:14px"><div style="width:46px;height:46px;border-radius:10px;background:${accent}"></div><div><h1>${esc(fm.name || id)}</h1><span style="color:#7d818a;font:13px ui-monospace">source: ${esc(t.source || '?')} · extracted ${esc(t.extracted || '?')} · primary ${esc(accent)}</span></div></div>
<div class="grid"><div><h2>Colors (${Object.keys(t.colors || {}).length})</h2>${colors}</div><div><h2>Typography ${family ? '— ' + esc(family) : ''}</h2><table>${typeRows}</table>
${round ? `<h2>Rounded</h2><div class="row">${round}</div>` : ''}
${space ? `<h2>Spacing</h2><div class="row" style="align-items:flex-start">${space}</div>` : ''}</div></div>
${comps ? `<h2>Components</h2>${comps}` : ''}
</div></body></html>`;

const pw = await import(pathToFileURL(join(GLOBAL_ROOT, 'playwright', 'index.js')).href);
const chromium = pw.chromium ?? pw.default?.chromium;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 880, height: 100 }, deviceScaleFactor: 2 });
await p.setContent(html, { waitUntil: 'networkidle' });
await p.screenshot({ path: out, fullPage: true });
await b.close();
console.log(`written ${out}`);
