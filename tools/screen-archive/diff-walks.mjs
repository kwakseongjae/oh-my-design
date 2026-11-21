#!/usr/bin/env node
/**
 * What changed between two walks of the same service (the "updates" half of the archive: shoot the same route again
 * and show only what moved).
 *
 *   node tools/screen-archive/diff-walks.mjs <older walk dir> <newer walk dir> [--width 1440]
 *
 * Listings change every hour (products, prices, banners), so pixels and labels are not compared. What is compared,
 * per screen, is what a redesign changes and a new product does not:
 *   - where the screen ended up (status, final path) and whether it is refused or missing
 *   - the styles controls are drawn with: the set of (kind, background, text colour, radius, font size) over buttons,
 *     links with a fill or a border, fields and tabs; a style present on one side only is reported with a sample label
 *   - headings structure: how many h1/h2/h3 and their sizes
 *   - the page's own background, text colour and font
 * A screen is "same", "styles changed" (with the styles), or "moved" (address or status). Walks shot before
 * web-shoot.mjs recorded element styles cannot be compared and are reported as such.
 * Writes <newer>/diff-from-<older folder name>.json and prints one line per screen.
 */
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const dirs = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--width');
const WIDTH = Number(args.includes('--width') ? args[args.indexOf('--width') + 1] : 1440);
if (dirs.length !== 2) { console.error('usage: diff-walks.mjs <older walk dir> <newer walk dir> [--width 1440]'); process.exit(2); }
const [A, B] = dirs.map((d) => ({ dir: d, walk: JSON.parse(fs.readFileSync(path.join(d, 'walk.json'), 'utf8')) }));
const CONTROL = new Set(['button', 'link', 'field', 'tab', 'select', 'searchbox', 'textbox']);
const load = (w, key) => { const f = path.join(w.dir, String(WIDTH), key + '.elements.json'); return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null; };
const sig = (e) => [e.type, e.style.background ?? '-', e.style.color, e.style.radius ?? '0', e.style.fontSize, e.style.fontWeight].join(' | ');
function styles(data) {
  const m = new Map();
  for (const e of data.elements) {
    if (!e.style || !CONTROL.has(e.type)) continue;
    if (e.type === 'link' && !e.style.background && !e.style.border) continue;   // a plain text link is content, not a control style
    const k = sig(e); if (!m.has(k)) m.set(k, { count: 0, sample: e.label.slice(0, 24) }); m.get(k).count++;
  }
  return m;
}
const heads = (data) => { const m = {}; for (const e of data.elements) if (/^heading/.test(e.type) && e.style) { const k = e.type + ' ' + e.style.fontSize + '/' + e.style.fontWeight; m[k] = (m[k] ?? 0) + 1; } return m; };
const pathOf = (u) => { try { const x = new URL(u); return x.host + x.pathname; } catch { return String(u); } };

const keys = [...new Set([...A.walk.records, ...B.walk.records].filter((r) => r.width === WIDTH).map((r) => r.key))];
const out = [];
for (const key of keys) {
  const ra = A.walk.records.find((r) => r.key === key && r.width === WIDTH), rb = B.walk.records.find((r) => r.key === key && r.width === WIDTH);
  const row = { key, title: (rb ?? ra).title };
  if (!ra || !rb) { row.verdict = ra ? 'gone from the route' : 'new in the route'; out.push(row); continue; }
  const moved = [];
  if (ra.status !== rb.status) moved.push('status ' + ra.status + ' → ' + rb.status);
  // a detail screen follows whatever is listed that day, so only its host is compared
  const same = ra.final && rb.final && (ra.type === '상세' ? new URL(ra.final).host === new URL(rb.final).host : pathOf(ra.final) === pathOf(rb.final));
  if (!same) moved.push('address ' + pathOf(ra.final) + ' → ' + pathOf(rb.final));
  if (!!ra.blocked !== !!rb.blocked) moved.push(rb.blocked ? 'now refused' : 'no longer refused');
  // a detail screen follows the first item listed that day: another item has other options and badges, so its styles say nothing about a redesign
  if (ra.type === '상세' && ra.final && rb.final && pathOf(ra.final) !== pathOf(rb.final) && !moved.length) { row.verdict = 'another item was listed first (not compared)'; out.push(row); continue; }
  const da = load(A, key), db = load(B, key);
  if (!da || !db) { row.verdict = moved.length ? 'moved' : 'not comparable (a still is missing)'; row.moved = moved; out.push(row); continue; }
  if (!da.elements.some((e) => e.style) || !db.elements.some((e) => e.style)) { row.verdict = moved.length ? 'moved' : 'not comparable (shot before styles were recorded)'; row.moved = moved; out.push(row); continue; }
  const sa = styles(da), sb = styles(db);
  const added = [...sb].filter(([k]) => !sa.has(k)).map(([k, v]) => ({ style: k, ...v }));
  const removed = [...sa].filter(([k]) => !sb.has(k)).map(([k, v]) => ({ style: k, ...v }));
  const ha = heads(da), hb = heads(db);
  const headChange = [...new Set([...Object.keys(ha), ...Object.keys(hb)])].filter((k) => !!ha[k] !== !!hb[k]).map((k) => (hb[k] ? '+ ' : '- ') + k);
  const pageChange = da.page && db.page ? ['background', 'color', 'fontFamily', 'fontSize'].filter((k) => da.page[k] !== db.page[k]).map((k) => k + ' ' + da.page[k] + ' → ' + db.page[k]) : [];
  // one style that appears or disappears on a listing is usually a badge or a promo of the day; report it, call the screen changed only past that
  const n = added.length + removed.length;
  row.controlStyles = { before: sa.size, after: sb.size, added, removed }; row.headings = headChange; row.page = pageChange; row.moved = moved;
  row.verdict = moved.length ? 'moved' : pageChange.length ? 'page styles changed' : n === 0 && !headChange.length ? 'same' : n <= 2 && headChange.length <= 1 ? 'same but for ' + (n + headChange.length) + ' small difference(s)' : 'styles changed';
  out.push(row);
}
const name = 'diff-from-' + path.basename(path.resolve(A.dir)) + '.json';
fs.writeFileSync(path.join(B.dir, name), JSON.stringify({ service: B.walk.slug, older: path.basename(path.resolve(A.dir)), newer: path.basename(path.resolve(B.dir)), width: WIDTH, screens: out }, null, 1));
const tally = {}; for (const r of out) { const k = r.verdict.replace(/\d+ small difference\(s\)/, 'small differences'); tally[k] = (tally[k] ?? 0) + 1; }
console.log(B.walk.slug + ' @' + WIDTH + ': ' + Object.entries(tally).map(([k, v]) => v + ' ' + k).join(', '));
for (const r of out.filter((x) => !/^same$/.test(x.verdict))) console.log('  ' + r.key.padEnd(16) + r.verdict + (r.moved?.length ? ' · ' + r.moved.join('; ') : '') + (r.controlStyles ? ' · +' + r.controlStyles.added.length + ' -' + r.controlStyles.removed.length + ' control styles' : ''));
