#!/usr/bin/env node
// omd-restraint AUDIT — measures restraint rules R1–R13 on a rendered page.
//
//   node audit.mjs <url|file.html> [--json] [--out <dir>] [--kind landing|list|doc]
//                  [--widths 1440x900,390x844] [--exclude "<css selector>"] [--wait 1200]
//
// Output: a human table on stdout (or JSON with --json), plus report.json and the first-screen
// PNGs in --out when given. Exit 0 = no FAIL, 1 = at least one FAIL, 2 = usage, 3 = no browser.
//
// What is reused and from where (do not let these drift silently):
//   - Fold units (R2) follow LI-37 / LC-54 in test-v2/tools/landing-integrity.mjs (FOLD_UNITS):
//     nav = one unit, CTAs, text blocks of >= 8 direct characters, media >= 64px, url() backgrounds.
//     This script additionally merges a vertically adjacent copy stack (H1 + subhead + body) and a
//     row of sibling buttons into one unit each, which is what RESTRAINT.md R2 asks for.
//   - Focal ratio (R1) follows LI-36 / LC-52 (SECTION_MEASURE): media + text >= 2x body, overlapping
//     same-family layers and equal-size sibling tile bands merged into one focal cluster, threshold
//     2.0 (lane-A reference median 2.1, n = 11). Text is measured by its glyph box, not its block box.
//   - Browser resolution mirrors test-v2/tools/lib/browser.mjs and the omd-shader-hero verify script:
//     playwright-core from PW_CORE, the cwd, or this file's ancestors, and the Playwright-cache
//     Chromium only. It never launches the user's own Chrome profile.
//   - Empty share (R11) is RESTRAINT.md §1's method: first viewport, 16px tiles, a tile is empty when
//     its greyscale standard deviation is under 6. Thin screens (R12) are tasteskill's hit-test
//     "filled" measure (text, media, url() background or a colour field that differs from the page).
//     The two are deliberately different: a flat colour field is empty to R11 and filled to R12.
//
// The thresholds live in THRESHOLDS only. Change them there, with the provenance note beside them.

import { createRequire } from 'node:module';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const VALUE_FLAGS = new Set(['--out', '--kind', '--widths', '--exclude', '--content', '--wait']);
const flag = (name, dflt) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : dflt; };
const positional = args.filter((a, i) => !a.startsWith('--') && !VALUE_FLAGS.has(args[i - 1]));
const target = positional[0];
if (!target) {
  console.error('usage: node audit.mjs <url|file.html> [--json] [--out <dir>] [--kind landing|list|doc] [--widths 1440x900,390x844] [--exclude "<selector>"] [--wait 1200]');
  process.exit(2);
}
const AS_JSON = args.includes('--json');
const OUT = flag('out', null);
const KIND = flag('kind', 'landing');
const WAIT = Number(flag('wait', 1200));
const EXCLUDE = flag('exclude', '');
const CONTENT = flag('content', ''); // R7: a selector whose colours are content (a brand swatch, a product shot)
const WIDTHS = flag('widths', '1440x900,390x844').split(',').map((s) => s.split('x').map(Number)).map(([w, h]) => ({ width: w, height: h }));
const url = /^(https?|file):/.test(target) ? target : pathToFileURL(path.resolve(target)).href;

// Grade: M = measured on references (a number observed across sites), C = convention (a published
// study or several practitioners agree), H = heuristic (one site, one inspector or the owner's brief).
const THRESHOLDS = {
  focalRatio: 2.0,          // R1  M  lane-A n=11 dominance median 2.1 (scale-and-simplicity.md §5)
  foldUnits: 5,             // R2  C  Nielsen 2011 / LC-54; tasteskill hero stack <= 4
  sizesFold: 4,             // R3  C  tasteskill v2: 2-3 sizes carry a page, 5 is the ceiling
  sizesPage: 6,             // R3  H  RESTRAINT.md; tasteskill.dev itself uses 18
  headBodyDesktop: 4.0,     // R3  M  tasteskill 247-site median headline:body ~4.3 (their measurement, not re-verified)
  headBodyPhone: 2.5,       // R3  H  tasteskill.dev 390 = 3.5, OmD r3 = 2.3
  headlineLines: 2,         // R4  C  tasteskill v2 copy budget (every headline <= 2 lines)
  ledeWords: 25,            // R4  C  tasteskill statement length ~25 words
  ledeLines: 2,             // R4  H
  foldWords: 60,            // R4  H  tasteskill.dev first screen 55 words (one site)
  heroCtas: 2,              // R5  C  tasteskill: most strong heroes have one button or none
  foldNumerals: 3,          // R6  H  tasteskill.dev 2, OmD r3 17
  statTiles: 1,             // R6  H
  accentHues: 1,            // R7  C  one ground, one ink, one accent
  bordered: 3,              // R8  H  tasteskill.dev hero 5-7, RESTRAINT.md budget 3
  gridBackdrops: 0,         // R8  C
  eyebrows: 0,              // R9  C  tasteskill caps any eyebrow at 6.5 overall
  microLabels: 2,           // R9  C  tasteskill FAILs at >= 3 tiny tracked uppercase labels
  emptyShareDesktop: 0.65,  // R11 H  tasteskill.dev 76%, OmD r3 62% (one pair of sites)
  emptyBandVh: 0.25,        // R11 C  LC-55 / LI-40
  thinFilled: 0.20,         // R12 C  tasteskill inspector: >= 2 desktop screens under 20% filled = FAIL
  thinScreensMax: 1,        // R12 C  one deliberate rest per page
  lengthDesktop: { landing: 6, list: 4, doc: Infinity }, // R13 H  owner brief / RESTRAINT.md
  lengthPhone: { landing: 9, list: 6, doc: Infinity },   // R13 H
  tilePx: 16, tileSigma: 6, // R11 method (RESTRAINT.md §1)
  maxScreens: 12,
};

// ---------------------------------------------------------------- browser (Playwright-cache Chromium only)
function loadPlaywright() {
  const candidates = [];
  if (process.env.PW_CORE) candidates.push(() => createRequire(path.join(process.env.PW_CORE, 'noop.js'))(process.env.PW_CORE));
  candidates.push(() => createRequire(path.join(process.cwd(), 'noop.js'))('playwright-core'));
  candidates.push(() => createRequire(import.meta.url)('playwright-core'));
  for (const load of candidates) {
    try { return load(); } catch { /* next root */ }
  }
  return null;
}
async function launch() {
  const pw = loadPlaywright();
  if (!pw) { console.error('playwright-core not found. Run `npm i -D playwright-core` or set PW_CORE=/abs/path/to/playwright-core.'); process.exit(3); }
  let exe = null;
  try { exe = pw.chromium.executablePath(); } catch { exe = null; }
  if (!exe || !existsSync(exe)) { console.error('Playwright Chromium not installed. Run `npx playwright-core install chromium` once. (This audit never uses your own Chrome profile.)'); process.exit(3); }
  return pw.chromium.launch({ headless: true, executablePath: exe });
}

// ---------------------------------------------------------------- in-page collectors
// Hides consent UI (fixed/sticky elements named cookie/consent/gdpr) and any --exclude selector.
const HIDE_CHROME = (extra) => {
  let hidden = 0;
  const kill = (el) => { el.style.setProperty('display', 'none', 'important'); hidden++; };
  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el);
    if (cs.position !== 'fixed' && cs.position !== 'sticky') continue;
    const tag = `${el.id} ${typeof el.className === 'string' ? el.className : ''} ${el.getAttribute('aria-label') || ''}`;
    if (/cookie|consent|gdpr|onetrust|cmp-/i.test(tag)) kill(el);
  }
  if (extra) for (const el of document.querySelectorAll(extra)) kill(el);
  return hidden;
};

// Shared helpers are re-declared inside each collector because page.evaluate ships one function body.
const FIRST_SCREEN = () => {
  const vw = innerWidth, vh = innerHeight, vArea = vw * vh;
  const vis = (el) => { const cs = getComputedStyle(el); return cs.display !== 'none' && cs.visibility !== 'hidden' && +cs.opacity > 0.02; };
  const visDeep = (el) => { for (let e = el; e && e !== document.documentElement; e = e.parentElement) if (!vis(e)) return false; return true; };
  const inFold = (r) => r.top < vh && r.bottom > 0 && r.right > 0 && r.left < vw && r.width >= 1 && r.height >= 1;
  const clip = (r) => [Math.max(r.left, 0), Math.max(r.top, 0), Math.min(r.right, vw), Math.min(r.bottom, vh)];
  const bbArea = (b) => Math.max(0, b[2] - b[0]) * Math.max(0, b[3] - b[1]);
  const nameOf = (el) => { if (el.id) return '#' + el.id; const c = typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/)[0] : ''; return el.tagName.toLowerCase() + c; };
  const rgba = (s) => { const m = s && s.match(/rgba?\(([^)]+)\)/); if (!m) return null; const q = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: q[0], g: q[1], b: q[2], a: q.length > 3 ? q[3] : 1 }; };
  const directText = (el) => [...el.childNodes].filter((c) => c.nodeType === 3).map((c) => c.nodeValue).join(' ').replace(/\s+/g, ' ').trim();
  const glyphBox = (el) => { const rg = document.createRange(); rg.selectNodeContents(el); const r = rg.getBoundingClientRect(); return r.width ? r : el.getBoundingClientRect(); };
  const chromeOf = (el) => { const n = el.closest('nav, [role="navigation"], header, footer'); if (!n) return null; return (n.tagName === 'FOOTER' || n.getBoundingClientRect().height <= 160) ? n : null; };
  const CJK = /[぀-ヿ㐀-鿿豈-﫿]/g;
  const words = (s) => { let n = 0; for (const tok of s.split(/\s+/)) { if (!tok) continue; const cjk = (tok.match(CJK) || []).length; const rest = tok.replace(CJK, ''); n += cjk ? Math.ceil(cjk / 2) + (/[\p{L}\p{N}]/u.test(rest) ? 1 : 0) : (/[\p{L}\p{N}]/u.test(tok) ? 1 : 0); } return n; };
  const lineCount = (el) => {
    const rg = document.createRange(); rg.selectNodeContents(el);
    const fs = parseFloat(getComputedStyle(el).fontSize) || 16; const tops = [];
    for (const r of rg.getClientRects()) { if (r.width < 2 || r.height < fs * 0.5) continue; if (!tops.some((t) => Math.abs(t - r.top) < fs * 0.5)) tops.push(r.top); }
    if (tops.length) return tops.length;
    const cs = getComputedStyle(el); const lh = cs.lineHeight === 'normal' ? fs * 1.2 : parseFloat(cs.lineHeight);
    return Math.max(1, Math.round(el.getBoundingClientRect().height / lh));
  };

  // ---- text inventory (page-wide, fold-flagged)
  const texts = [];
  for (const el of document.querySelectorAll('body *')) {
    if (/^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE|svg|path|title)$/i.test(el.tagName)) continue;
    const t = directText(el); if (!/[\p{L}\p{N}]/u.test(t)) continue;
    if (!visDeep(el)) continue;
    const r = glyphBox(el); if (r.width < 1 || r.height < 1) continue;
    const cs = getComputedStyle(el);
    texts.push({ el, t, r, fs: Math.round(parseFloat(cs.fontSize) || 0), fold: inFold(r), cs });
  }
  const charsBySize = new Map();
  for (const x of texts) charsBySize.set(x.fs, (charsBySize.get(x.fs) || 0) + x.t.length);
  const bodyPx = [...charsBySize.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || 16;
  const foldTexts = texts.filter((x) => x.fold);
  const sizesOf = (list) => [...new Set(list.filter((x) => x.t.length >= 2).map((x) => x.fs))].sort((a, b) => b - a);
  const foldSizes = sizesOf(foldTexts), pageSizes = sizesOf(texts);
  const foldWords = foldTexts.reduce((n, x) => n + words(x.t), 0);
  const foldNumerals = foldTexts.reduce((n, x) => n + (x.t.match(/\d[\d.,]*/g) || []).length, 0);
  const statTiles = foldTexts.filter((x) => /^[\s$€₩£¥+~]*\d[\d.,]*\s?[kKmMbB%+x×]?\s*$/.test(x.t) && x.fs >= bodyPx * 1.5).map((x) => x.t);

  // ---- headline (largest fold text outside nav chrome) + lede (first readable block under it)
  const cand = foldTexts.filter((x) => x.t.length >= 2 && !chromeOf(x.el)).sort((a, b) => b.fs - a.fs || (a.el.tagName === 'H1' ? -1 : 1));
  let headline = null, lede = null, headEl = null;
  if (cand[0]) {
    headEl = cand[0].el.closest('h1, h2, h3, h4, p, li, div') || cand[0].el;
    const hb = glyphBox(headEl);
    headline = { text: headEl.textContent.replace(/\s+/g, ' ').trim().slice(0, 90), px: cand[0].fs, lines: lineCount(headEl), words: words(headEl.textContent) };
    const below = foldTexts.filter((x) => x.r.top >= hb.bottom - 2 && x.r.top - hb.bottom < 160 && x.fs < cand[0].fs && x.fs >= bodyPx * 0.9
      && words(x.t) >= 4 && !headEl.contains(x.el) && !x.el.closest('a, button, nav, code, pre')).sort((a, b) => a.r.top - b.r.top)[0];
    if (below) { const lEl = below.el.closest('p, h2, h3, li, div') || below.el; lede = { text: lEl.textContent.replace(/\s+/g, ' ').trim().slice(0, 90), px: below.fs, lines: lineCount(lEl), words: words(lEl.textContent) }; }
  }
  // ---- hero CTAs (R5): everything pressable on the first screen outside the nav bar
  const PRESS = 'a[href], button, [role="button"], input:not([type="hidden"]), select, textarea, summary';
  const ctas = [...document.querySelectorAll(PRESS)].filter((el) => { if (!visDeep(el) || chromeOf(el)) return false; const r = el.getBoundingClientRect(); return inFold(r) && r.width >= 8 && r.height >= 8; })
    .filter((el, _i, all) => !all.some((o) => o !== el && o.contains(el)));
  const ctaLabels = ctas.map((el) => (el.textContent || el.value || el.getAttribute('aria-label') || el.getAttribute('placeholder') || el.tagName).replace(/\s+/g, ' ').trim().slice(0, 40));

  // ---- fold units (R2): LI-37 semantics, then copy-stack / button-row / media-cluster merges
  const counted = new Set(); const units = [];
  const claim = (el) => { counted.add(el); for (const d of el.querySelectorAll('*')) counted.add(d); };
  for (const el of document.querySelectorAll('nav, header, [role="navigation"]')) {
    const r = el.getBoundingClientRect(); if (counted.has(el) || !visDeep(el) || !inFold(r) || r.height > 160) continue;
    units.push({ kind: 'nav', n: nameOf(el), box: clip(r) }); claim(el);
  }
  const ctaBoxes = ctas.filter((el) => !counted.has(el)).map((el) => ({ el, r: el.getBoundingClientRect() }));
  const rows = [];
  for (const c of ctaBoxes) { const row = rows.find((g) => Math.abs(g.r.top - c.r.top) < 12 && Math.abs(g.r.bottom - c.r.bottom) < 24 && c.r.left - g.right < 64); if (row) { row.n++; row.right = Math.max(row.right, c.r.right); } else rows.push({ el: c.el, r: c.r, right: c.r.right, n: 1, label: (c.el.textContent || c.el.tagName).trim().slice(0, 24) }); claim(c.el); }
  const hasBigMedia = (el) => [...el.querySelectorAll('img, video, canvas, picture, svg')].some((m) => { const r = m.getBoundingClientRect(); return r.width >= 64 && r.height >= 64; });
  for (const g of rows) units.push({ kind: g.n > 1 ? `actions×${g.n}` : (hasBigMedia(g.el) ? 'media(pressable)' : 'cta'), n: g.label, box: clip(g.r) });
  const blockOf = (el) => { let e = el; while (e && e !== document.body && /^(inline|contents)$/.test(getComputedStyle(e).display)) e = e.parentElement; return e; };
  const textBlocks = [];
  for (const x of foldTexts) { if (counted.has(x.el)) continue; const b = blockOf(x.el); if (!b || counted.has(b) || textBlocks.some((t) => t.el === b)) continue;
    const t = b.textContent.replace(/\s+/g, ' ').trim(); if (t.length < 8) continue; textBlocks.push({ el: b, r: glyphBox(b), fs: x.fs }); }
  textBlocks.sort((a, b) => a.r.top - b.r.top);
  const stacks = [];
  for (const t of textBlocks) {
    if (stacks.some((s) => s.els.some((e) => e.contains(t.el)))) continue;
    const s = stacks.find((s) => t.r.top - s.bottom <= Math.max(28, s.fs * 1.2) && t.r.top >= s.top - 4 && (Math.abs(t.r.left - s.left) <= 40 || (t.r.left < s.right && t.r.right > s.left)));
    if (s) { s.bottom = Math.max(s.bottom, t.r.bottom); s.right = Math.max(s.right, t.r.right); s.els.push(t.el); s.fs = t.fs; }
    else stacks.push({ top: t.r.top, bottom: t.r.bottom, left: t.r.left, right: t.r.right, fs: t.fs, els: [t.el], label: t.el.textContent.trim().slice(0, 24) });
  }
  for (const s of stacks) { units.push({ kind: s.els.length > 1 ? `copy×${s.els.length}` : 'text', n: s.label, box: [s.left, s.top, s.right, s.bottom].map(Math.round) }); s.els.forEach(claim); }
  const inter = (A, B) => Math.max(0, Math.min(A[2], B[2]) - Math.max(A[0], B[0])) * Math.max(0, Math.min(A[3], B[3]) - Math.max(A[1], B[1]));
  // A picture that covers >= 85% of the screen with the headline set on it is the ground the screen is
  // printed on (tasteskill.dev's stone photo), not a competitor: it is left out of R1 and R2. A full-bleed
  // picture with no headline on it stays a candidate, and is then the focal point.
  const headBox = headEl ? clip(glyphBox(headEl)) : null;
  const isGround = (r) => bbArea(clip(r)) >= vArea * 0.85 && !!headBox && inter(clip(r), headBox) > 0;
  const grounds = [];
  const mediaEls = [];
  for (const el of document.querySelectorAll('body *')) {
    if (!visDeep(el)) continue; const r = el.getBoundingClientRect(); if (!inFold(r) || r.width < 64 || r.height < 64) continue;
    const tag = el.tagName.toUpperCase(), cs = getComputedStyle(el);
    const isMedia = /^(IMG|VIDEO|CANVAS|PICTURE|SVG|IFRAME)$/.test(tag);
    const isBg = !isMedia && cs.backgroundImage !== 'none' && /url\(/.test(cs.backgroundImage);
    if (!isMedia && !isBg) continue; if (isGround(r)) { grounds.push(nameOf(el)); continue; } if (mediaEls.some((m) => m.el.contains(el))) continue;
    mediaEls.push({ el, r, box: clip(r), kind: isBg ? 'bg' : tag.toLowerCase(), skip: counted.has(el) });
  }
  const mclusters = [];
  for (const m of mediaEls.filter((m) => !m.skip)) {
    const hit = mclusters.find((c) => c.par === m.el.parentElement || inter(c.box, m.box) >= 0.5 * Math.min(bbArea(c.box), bbArea(m.box)));
    if (hit) { hit.n++; hit.box = [Math.min(hit.box[0], m.box[0]), Math.min(hit.box[1], m.box[1]), Math.max(hit.box[2], m.box[2]), Math.max(hit.box[3], m.box[3])]; }
    else mclusters.push({ par: m.el.parentElement, box: m.box, n: 1, kind: m.kind, label: nameOf(m.el) });
  }
  for (const c of mclusters) units.push({ kind: c.n > 1 ? `media×${c.n}` : 'media', n: c.label, box: c.box.map(Math.round) });
  const rawUnits = units.filter((u) => u.kind === 'nav').length + ctaBoxes.length + textBlocks.length + mediaEls.filter((m) => !m.skip).length;

  // ---- focal ratio (R1): LI-36 clustering over media + display text (>= 2x body, glyph box)
  const visuals = mediaEls.map((m) => ({ n: nameOf(m.el), kind: 'media', box: m.box, area: bbArea(m.box), par: m.el.parentElement }));
  // Panels compete too (a boxed card, a filled search bar): LI-36 only saw media and display text, which let a
  // page of framed widgets pass with a 53px headline as its "focal point". Outermost framed boxes of 3–85%
  // of the screen that do not hold the headline join the media family.
  const groundBg = (() => { for (const el of [document.body, document.documentElement]) { const bg = getComputedStyle(el).backgroundColor; if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg; } return 'rgb(255, 255, 255)'; })();
  const panels = [];
  for (const el of document.querySelectorAll('body *')) {
    if (chromeOf(el) || (headEl && el.contains(headEl)) || panels.some((p) => p.contains(el)) || /^(IMG|VIDEO|CANVAS|PICTURE|SVG|IFRAME)$/i.test(el.tagName)) continue;
    const r = el.getBoundingClientRect(); if (!inFold(r)) continue; const a = bbArea(clip(r)); if (a < vArea * 0.03 || a > vArea * 0.85) continue;
    if (!visDeep(el)) continue; const cs = getComputedStyle(el); const bg = rgba(cs.backgroundColor);
    const sides = ['Top', 'Right', 'Bottom', 'Left'].filter((s) => parseFloat(cs[`border${s}Width`]) >= 0.5 && !/none|hidden/.test(cs[`border${s}Style`])).length;
    if ((bg && bg.a >= 0.5 && cs.backgroundColor !== groundBg) || sides >= 3) { panels.push(el); visuals.push({ n: nameOf(el) + '[panel]', kind: 'media', box: clip(r), area: a, par: el.parentElement }); }
  }
  for (const x of foldTexts) if (x.fs >= bodyPx * 2 && x.t.length >= 2) { const b = clip(x.r); visuals.push({ n: `${nameOf(x.el)}@${x.fs}px`, kind: 'text', box: b, area: bbArea(b), par: x.el.parentElement }); }
  visuals.sort((a, b) => b.area - a.area);
  const fc = [];
  for (const v of visuals) {
    const hit = fc.find((c) => (c.kind === 'text') === (v.kind === 'text') && inter(c.box, v.box) >= 0.8 * Math.min(c.area0, v.area));
    if (hit) { hit.members++; continue; }
    const sib = fc.find((c) => c.par && c.par === v.par && c.kind === v.kind && Math.max(c.area0, v.area) / Math.max(1, Math.min(c.area0, v.area)) <= 1.35);
    if (sib) { sib.members++; if (sib.members >= 3 && v.par) { const pb = clip(v.par.getBoundingClientRect()); sib.box = pb; sib.area = Math.max(sib.area, bbArea(pb)); sib.n = `${nameOf(v.par)}(band×${sib.members})`; } else sib.area += v.area; continue; }
    fc.push({ ...v, area0: v.area, members: 1 });
  }
  fc.sort((a, b) => b.area - a.area);
  const focal = { ratio: fc.length >= 2 ? +(fc[0].area / Math.max(1, fc[1].area)).toFixed(2) : (fc.length === 1 ? 99 : 0), top: fc.slice(0, 2).map((c) => `${c.n} ${(100 * c.area / vArea).toFixed(1)}%`) };

  // ---- accent hues (R7): saturated CSS colours on the first screen, hue-clustered (24°)
  const CONTENT = window.__omdContentSel || '';
  const hsl = ({ r, g, b }) => { const R = r / 255, G = g / 255, B = b / 255, mx = Math.max(R, G, B), mn = Math.min(R, G, B), l = (mx + mn) / 2, d = mx - mn; if (!d) return { h: 0, s: 0, l, c: 0 };
    const s = d / (1 - Math.abs(2 * l - 1)); let h = mx === R ? ((G - B) / d) % 6 : mx === G ? (B - R) / d + 2 : (R - G) / d + 4; h = (h * 60 + 360) % 360; return { h, s, l, c: d }; };
  const hex = ({ r, g, b }) => '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
  const hues = [];
  const addColour = (str, el, why) => { const c = rgba(str); if (!c || c.a < 0.5) return; const h = hsl(c); if (h.s < 0.4 || h.l < 0.2 || h.l > 0.85 || h.c < 0.24) return; hues.push({ h: h.h, hex: hex(c), why, n: nameOf(el) }); };
  for (const el of document.querySelectorAll('body *')) {
    if (el.closest('img, video, canvas, picture, svg, iframe') || (CONTENT && el.closest(CONTENT))) continue;
    if (!visDeep(el)) continue; const r = el.getBoundingClientRect(); if (!inFold(r) || r.width * r.height < 64) continue;
    const cs = getComputedStyle(el);
    addColour(cs.backgroundColor, el, 'bg');
    if (directText(el).length >= 1) addColour(cs.color, el, 'text');
    if (parseFloat(cs.borderTopWidth) >= 1 && cs.borderTopStyle !== 'none') addColour(cs.borderTopColor, el, 'border');
  }
  hues.sort((a, b) => a.h - b.h);
  const hueGroups = [];
  for (const x of hues) { const g = hueGroups.find((g) => Math.min(Math.abs(g.h - x.h), 360 - Math.abs(g.h - x.h)) <= 24); if (g) { g.n++; if (!g.samples.includes(x.hex) && g.samples.length < 3) g.samples.push(x.hex); } else hueGroups.push({ h: Math.round(x.h), n: 1, samples: [x.hex] }); }

  // ---- borders and grid backdrops (R8)
  const NO_BORDER_CHECK = /^(INPUT|SELECT|TEXTAREA|TABLE|THEAD|TBODY|TR|TD|TH|CODE|PRE|KBD|SAMP)$/;
  const bordered = [];
  for (const el of document.querySelectorAll('body *')) {
    if (NO_BORDER_CHECK.test(el.tagName) || el.closest('table, pre, code, svg')) continue;
    if (!visDeep(el)) continue; const r = el.getBoundingClientRect(); if (!inFold(r) || r.width < 8 || r.height < 1) continue;
    const cs = getComputedStyle(el);
    const side = ['Top', 'Right', 'Bottom', 'Left'].some((s) => parseFloat(cs[`border${s}Width`]) >= 0.5 && !/none|hidden/.test(cs[`border${s}Style`]) && (rgba(cs[`border${s}Color`])?.a ?? 0) >= 0.15);
    if (side || el.tagName === 'HR') bordered.push(nameOf(el));
  }
  const grids = [];
  for (const el of [document.documentElement, document.body, ...document.querySelectorAll('body *')]) {
    const cs = getComputedStyle(el); const bi = cs.backgroundImage; if (!bi || bi === 'none') continue;
    const lines = (bi.match(/(repeating-)?linear-gradient/g) || []).length; if (!lines) continue;
    const sizes = cs.backgroundSize.split(',').map((s) => parseFloat(s)).filter((n) => n > 0);
    if (/repeating-linear-gradient/.test(bi) || (lines >= 2 && sizes.length && Math.min(...sizes) <= 160)) { const r = el.getBoundingClientRect(); if (r.width * r.height >= vArea * 0.05) grids.push(nameOf(el)); }
  }
  // ---- eyebrows, micro labels, mono captions, repeated badges (R9) — page-wide
  const isCodeLike = (el, t) => !!el.closest('code, pre, kbd, samp') || /^(\$ |npx |npm |pnpm |yarn |bun |curl |git |brew |pip )/.test(t);
  const MONO = /mono|courier|consolas|menlo|monaco|monospace/i;
  const micro = [], mono = [], eyebrows = [];
  for (const x of texts) {
    const letters = x.t.replace(/[^\p{L}]/gu, '');
    const caps = letters.length >= 3 && (x.cs.textTransform === 'uppercase' || (letters === letters.toUpperCase() && letters !== letters.toLowerCase()));
    if (x.fs < 13 && caps && !chromeOf(x.el)) micro.push(x.t.slice(0, 24));
    const fam = x.cs.fontFamily.split(',')[0];
    if (MONO.test(fam) && !isCodeLike(x.el, x.t)) mono.push(x.t.slice(0, 24));
  }
  for (const h of document.querySelectorAll('h1, h2, h3')) {
    if (!visDeep(h)) continue; const hb = glyphBox(h); if (hb.width < 1) continue; const hfs = parseFloat(getComputedStyle(h).fontSize) || 16;
    const above = texts.find((x) => !h.contains(x.el) && !x.el.contains(h) && x.r.bottom <= hb.top + 2 && hb.top - x.r.bottom <= 40 && x.r.right > hb.left && x.r.left < hb.right
      && words(x.t) <= 6 && x.fs <= hfs * 0.6 && x.fs <= bodyPx * 1.1 && !x.el.closest('a, button, nav'));
    if (above && !eyebrows.some((e) => e.text === above.t)) eyebrows.push({ text: above.t.slice(0, 30), above: h.textContent.trim().slice(0, 30) });
  }
  const badgeCount = new Map();
  for (const x of texts) {
    if (words(x.t) > 3 || x.fs >= bodyPx || chromeOf(x.el)) continue;
    const box = x.el.closest('span, div, p, li, small, strong, em, mark') || x.el; const cs = getComputedStyle(box); const r = box.getBoundingClientRect();
    const framed = (rgba(cs.backgroundColor)?.a ?? 0) >= 0.3 || parseFloat(cs.borderTopWidth) >= 0.5;
    if (framed && r.height <= 36 && parseFloat(cs.borderTopLeftRadius) >= Math.min(8, r.height / 2 - 1)) { const k = x.t.toLowerCase(); badgeCount.set(k, (badgeCount.get(k) || 0) + 1); }
  }
  const repeatedBadges = [...badgeCount.entries()].filter(([, n]) => n >= 3).map(([t, n]) => `${t} ×${n}`);

  // ---- duplicate facts (R10, advisory): CTA labels and 3+ digit figures repeated outside nav/footer
  const dupCount = new Map();
  for (const el of document.querySelectorAll('a[href], button')) { if (!visDeep(el) || chromeOf(el)) continue; const t = el.textContent.replace(/\s+/g, ' ').trim().toLowerCase(); if (t.length >= 3 && t.length <= 40) dupCount.set('cta:' + t, (dupCount.get('cta:' + t) || 0) + 1); }
  for (const x of texts) { if (chromeOf(x.el)) continue; for (const m of x.t.match(/\b\d{3,}[\d,.]*\b/g) || []) dupCount.set('num:' + m, (dupCount.get('num:' + m) || 0) + 1); }
  const duplicates = [...dupCount.entries()].filter(([k, n]) => (k.startsWith('cta:') ? n >= 2 : n >= 3)).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k, n]) => `${k.slice(4)} ×${n}`);

  return {
    vw, vh, bodyPx, foldSizes, pageSizes, foldWords, foldNumerals, statTiles, headline, lede,
    ctas: ctaLabels, units, unitCount: units.length, rawUnits, focal,
    grounds, accents: hueGroups, bordered: bordered.length, borderedSamples: bordered.slice(0, 6), grids,
    eyebrows, microLabels: micro, monoCaptions: mono, repeatedBadges, duplicates,
    docHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
  };
};

// tasteskill-style "filled" share of the current viewport: a grid point is filled when it sits on text,
// a picture, a url() background, or a colour field that differs from the page ground.
const SCREEN_FILLED = () => {
  const vw = innerWidth, vh = innerHeight, COLS = 24, ROWS = 15;
  const tr = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (!/[\p{L}\p{N}]/u.test(n.nodeValue)) continue; const p = n.parentElement; if (!p) continue;
    const cs = getComputedStyle(p); if (cs.visibility === 'hidden' || +cs.opacity < 0.05) continue;
    const rg = document.createRange(); rg.selectNodeContents(n);
    for (const r of rg.getClientRects()) if (r.bottom > 0 && r.top < vh && r.width > 1) tr.push(r);
  }
  const ground = (() => { for (const el of [document.body, document.documentElement]) { const bg = getComputedStyle(el).backgroundColor; if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg; } return 'rgb(255, 255, 255)'; })();
  let filled = 0, samples = 0;
  for (let i = 0; i < COLS; i++) for (let j = 0; j < ROWS; j++) {
    const x = (i + 0.5) * vw / COLS, y = (j + 0.5) * vh / ROWS; samples++;
    if (tr.some((r) => x >= r.left - 6 && x <= r.right + 6 && y >= r.top - 4 && y <= r.bottom + 4)) { filled++; continue; }
    for (const el of document.elementsFromPoint(x, y)) {
      const cs = getComputedStyle(el); if (+cs.opacity < 0.05) continue;
      if (/^(IMG|VIDEO|CANVAS|PICTURE|IFRAME)$/.test(el.tagName) || el.closest('svg')) { filled++; break; }
      if (cs.backgroundImage !== 'none' && /url\(/.test(cs.backgroundImage)) { filled++; break; }
      const bg = cs.backgroundColor; if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') { if (bg !== ground) filled++; break; }
    }
  }
  return +(filled / samples).toFixed(2);
};

// Pixel tiles of one screenshot (RESTRAINT.md §1): empty share + the tallest run of all-empty tile rows.
// Decoded on a blank page so a site's CSP cannot block the data: URL.
const TILE_STATS = async ([b64, tile, sigma]) => {
  const img = new Image(); img.src = 'data:image/png;base64,' + b64; await img.decode();
  const W = img.width, H = img.height, c = new OffscreenCanvas(W, H), x = c.getContext('2d'); x.drawImage(img, 0, 0);
  const d = x.getImageData(0, 0, W, H).data;
  const cols = Math.floor(W / tile), rows = Math.floor(H / tile);
  let empty = 0, run = 0, best = 0;
  for (let ty = 0; ty < rows; ty++) {
    let rowEmpty = true;
    for (let tx = 0; tx < cols; tx++) {
      let s = 0, s2 = 0, n = 0;
      for (let y = ty * tile; y < (ty + 1) * tile; y++) for (let xx = tx * tile; xx < (tx + 1) * tile; xx++) {
        const k = (y * W + xx) * 4, g = 0.299 * d[k] + 0.587 * d[k + 1] + 0.114 * d[k + 2]; s += g; s2 += g * g; n++;
      }
      const sd = Math.sqrt(Math.max(0, s2 / n - (s / n) ** 2));
      if (sd < sigma) empty++; else rowEmpty = false;
    }
    run = rowEmpty ? run + 1 : 0; best = Math.max(best, run);
  }
  return { emptyShare: +(empty / (cols * rows)).toFixed(3), bandPx: best * tile };
};

// ---------------------------------------------------------------- measure one viewport
async function measure(browser, vp) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  const decoder = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(WAIT);
    if (CONTENT) await page.evaluate((s) => { window.__omdContentSel = s; }, CONTENT);
    const hidden = await page.evaluate(HIDE_CHROME, EXCLUDE);
    // reveal journey: walk the page once so scroll-triggered content exists, then measure from the top
    // Smooth-scroll CSS and scroll libraries (Lenis etc.) turn scrollTo into an animation, which once left
    // tasteskill.dev measured mid-scroll. Force instant jumps and confirm the position before measuring.
    const scrollToY = async (y, settle) => {
      for (let k = 0; k < 6; k++) {
        const at = await page.evaluate((t) => { for (const el of [document.documentElement, document.body]) el.style.setProperty('scroll-behavior', 'auto', 'important');
          window.scrollTo({ top: t, left: 0, behavior: 'instant' }); return [window.scrollY, Math.max(0, document.documentElement.scrollHeight - innerHeight)]; }, y);
        await page.waitForTimeout(settle);
        const now = await page.evaluate(() => window.scrollY);
        if (Math.abs(now - Math.min(y, at[1])) <= 2) return now;
      }
      return page.evaluate(() => window.scrollY);
    };
    const docH0 = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    for (let y = 0, i = 0; y < docH0 && i < 40; y += vp.height, i++) await scrollToY(y, 150);
    await scrollToY(0, 600);
    await page.evaluate(HIDE_CHROME, EXCLUDE);
    const first = await page.evaluate(FIRST_SCREEN);
    const tiles = async (buf) => decoder.evaluate(TILE_STATS, [buf.toString('base64'), THRESHOLDS.tilePx, THRESHOLDS.tileSigma]);
    const shot0 = await page.screenshot();
    const firstTiles = await tiles(shot0);
    if (OUT) writeFileSync(path.join(OUT, `first-${vp.width}.png`), shot0);
    const n = Math.min(THRESHOLDS.maxScreens, Math.max(1, Math.ceil(first.docHeight / vp.height)));
    const screens = [];
    for (let i = 0; i < n; i++) {
      await scrollToY(i * vp.height, 300);
      const filled = await page.evaluate(SCREEN_FILLED);
      const t = i === 0 ? firstTiles : await tiles(await page.screenshot());
      screens.push({ i: i + 1, filled, emptyShare: t.emptyShare, bandPx: t.bandPx });
    }
    return { ...vp, hiddenChrome: hidden, first, firstTiles, screens, lengthScreens: +(first.docHeight / vp.height).toFixed(1) };
  } finally { await ctx.close(); }
}

// ---------------------------------------------------------------- rules
// Each check returns { status: PASS|FAIL|WARN|INFO, value, limit }. INFO = measured, not judged at this width.
function judge(v) {
  const T = THRESHOLDS, f = v.first, desk = v.width >= 1100;
  const ck = (ok, value, limit, soft = false) => ({ status: ok ? 'PASS' : soft ? 'WARN' : 'FAIL', value, limit });
  const info = (value, limit = '—') => ({ status: 'INFO', value, limit });
  const ratio = f.headline ? +(f.headline.px / f.bodyPx).toFixed(1) : 0;
  const thin = v.screens.filter((s) => s.filled < T.thinFilled);
  const band = Math.max(...v.screens.map((s) => s.bandPx)) / v.height;
  const lenLimit = (desk ? T.lengthDesktop : T.lengthPhone)[KIND] ?? T.lengthDesktop.landing;
  const r9 = f.eyebrows.length + f.repeatedBadges.length;
  return {
    R1: ck(f.focal.ratio >= T.focalRatio, f.focal.ratio, `>= ${T.focalRatio}`),
    R2: ck(f.unitCount <= T.foldUnits, f.unitCount, `<= ${T.foldUnits}`),
    'R3-fold': ck(f.foldSizes.length <= T.sizesFold, f.foldSizes.length, `<= ${T.sizesFold}`),
    'R3-page': ck(f.pageSizes.length <= T.sizesPage, f.pageSizes.length, `<= ${T.sizesPage}`),
    'R3-ratio': ck(ratio >= (desk ? T.headBodyDesktop : T.headBodyPhone), ratio, `>= ${desk ? T.headBodyDesktop : T.headBodyPhone}`),
    'R4-headline': ck(!f.headline || f.headline.lines <= T.headlineLines, f.headline ? f.headline.lines : 0, `<= ${T.headlineLines}`),
    'R4-lede': f.lede ? ck(f.lede.words <= T.ledeWords && f.lede.lines <= T.ledeLines, `${f.lede.words}w/${f.lede.lines}l`, `<= ${T.ledeWords}w/${T.ledeLines}l`) : info('none'),
    'R4-words': ck(f.foldWords <= T.foldWords, f.foldWords, `<= ${T.foldWords}`),
    R5: ck(f.ctas.length <= T.heroCtas, f.ctas.length, `<= ${T.heroCtas}`),
    R6: ck(f.foldNumerals <= T.foldNumerals && f.statTiles.length <= T.statTiles, `${f.foldNumerals}#/${f.statTiles.length}t`, `<= ${T.foldNumerals}#/${T.statTiles}t`),
    R7: ck(f.accents.length <= T.accentHues, f.accents.length, `<= ${T.accentHues}`),
    R8: ck(f.bordered <= T.bordered && f.grids.length <= T.gridBackdrops, `${f.bordered}b/${f.grids.length}g`, `<= ${T.bordered}b/${T.gridBackdrops}g`),
    R9: ck(r9 <= T.eyebrows && f.microLabels.length + f.monoCaptions.length <= T.microLabels, `${f.eyebrows.length}e/${f.microLabels.length + f.monoCaptions.length}m/${f.repeatedBadges.length}r`, `0e/<= ${T.microLabels}m/0r`),
    R10: ck(!f.duplicates.length, f.duplicates.length, '0', true),
    'R11-empty': desk ? ck(v.firstTiles.emptyShare >= T.emptyShareDesktop, pct(v.firstTiles.emptyShare), `>= ${pct(T.emptyShareDesktop)}`) : info(pct(v.firstTiles.emptyShare)),
    'R11-band': ck(band >= T.emptyBandVh, `${band.toFixed(3)}vh`, `>= ${T.emptyBandVh}vh`),
    R12: desk ? ck(thin.length <= T.thinScreensMax, thin.length, `<= ${T.thinScreensMax}`) : info(thin.length),
    R13: Number.isFinite(lenLimit) ? ck(v.lengthScreens <= lenLimit, v.lengthScreens, `<= ${lenLimit}`) : info(v.lengthScreens),
  };
}
const pct = (x) => `${Math.round(x * 100)}%`;

const RULES = {
  R1: ['One focal point (1st >= 2x 2nd)', 'M'],
  R2: ['First-screen pieces', 'C'],
  'R3-fold': ['Type sizes on the first screen', 'C'],
  'R3-page': ['Type sizes on the page', 'H'],
  'R3-ratio': ['Headline : body (desktop M / phone H)', 'M/H'],
  'R4-headline': ['Headline lines', 'C'],
  'R4-lede': ['Lede words / lines', 'C/H'],
  'R4-words': ['First-screen words', 'H'],
  R5: ['Hero CTAs (outside nav)', 'C'],
  R6: ['Numerals / stat tiles on first screen', 'H'],
  R7: ['Accent hues on first screen', 'C'],
  R8: ['Bordered elements / grid backdrops', 'H/C'],
  R9: ['Eyebrows / micro+mono labels / repeated badges', 'C'],
  R10: ['Facts said twice (advisory)', 'H'],
  'R11-empty': ['First-screen empty share (tiles)', 'H'],
  'R11-band': ['Tallest empty band on page', 'C'],
  R12: ['Thin screens (< 20% filled)', 'C'],
  R13: [`Page length in screens (${KIND})`, 'H'],
};

// ---------------------------------------------------------------- run + report
if (OUT) mkdirSync(OUT, { recursive: true });
const browser = await launch();
const viewports = [];
try { for (const vp of WIDTHS) viewports.push(await measure(browser, vp)); } finally { await browser.close(); }
for (const v of viewports) v.checks = judge(v);

const rank = { FAIL: 3, WARN: 2, PASS: 1, INFO: 0 };
const rules = Object.entries(RULES).map(([id, [name, grade]]) => {
  const per = viewports.map((v) => ({ width: v.width, ...v.checks[id] }));
  const status = per.reduce((s, p) => (rank[p.status] > rank[s] ? p.status : s), 'INFO');
  return { id, name, grade, status: status === 'INFO' ? 'INFO' : status, per };
});
const fails = rules.filter((r) => r.status === 'FAIL');
const report = {
  tool: 'omd-restraint/audit', target, url, kind: KIND, measuredAt: new Date().toISOString(),
  method: { reducedMotion: 'reduce', deviceScaleFactor: 1, waitMs: WAIT, exclude: EXCLUDE || null, content: CONTENT || null, thresholds: THRESHOLDS },
  verdict: fails.length ? 'FAIL' : 'PASS', fails: fails.map((r) => r.id), rules,
  viewports: viewports.map(({ checks, ...v }) => v),
};
if (OUT) writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 1));

if (AS_JSON) console.log(JSON.stringify(report, null, 1));
else {
  const W = viewports.map((v) => v.width);
  const pad = (s, n) => String(s).padEnd(n);
  console.log(`omd-restraint audit — ${target}  (${KIND}, ${new Date().toISOString().slice(0, 10)})`);
  console.log(pad('rule', 12) + pad('grade', 6) + pad('measure', 48) + W.map((w) => pad(`${w}px`, 18)).join('') + 'status');
  for (const r of rules) {
    console.log(pad(r.id, 12) + pad(r.grade, 6) + pad(r.name, 48) + r.per.map((p) => pad(`${p.value} ${p.status === 'INFO' ? '(info)' : p.status === 'PASS' ? '' : p.status}`, 18)).join('') + r.status);
  }
  for (const v of viewports) {
    const f = v.first;
    console.log(`\n${v.width}px — body ${f.bodyPx}px · headline ${f.headline ? `${f.headline.px}px ${f.headline.lines} line(s) "${f.headline.text.slice(0, 50)}"` : 'none'}`);
    console.log(`  pieces: ${f.units.map((u) => `${u.kind}(${String(u.n).slice(0, 18)})`).join(', ')}  [LI-37 raw ${f.rawUnits}]`);
    console.log(`  focal: ${f.focal.top.join(' vs ') || 'none'} · sizes fold ${f.foldSizes.join('/')} · page ${f.pageSizes.length}`);
    console.log(`  CTAs: ${f.ctas.join(' | ') || 'none'} · accents: ${f.accents.map((a) => a.samples.join('+')).join(', ') || 'none'}`);
    if (f.eyebrows.length || f.microLabels.length || f.monoCaptions.length || f.repeatedBadges.length) console.log(`  labels: eyebrows ${JSON.stringify(f.eyebrows.slice(0, 3).map((e) => e.text))} micro ${JSON.stringify(f.microLabels.slice(0, 3))} mono ${JSON.stringify(f.monoCaptions.slice(0, 3))} badges ${JSON.stringify(f.repeatedBadges.slice(0, 3))}`);
    if (f.duplicates.length) console.log(`  said twice: ${f.duplicates.join(', ')}`);
    console.log(`  screens filled: ${v.screens.map((s) => pct(s.filled)).join(' ')} · first-screen empty ${pct(v.firstTiles.emptyShare)} · length ${v.lengthScreens} screens`);
  }
  console.log(`\nRESULT: ${report.verdict}${fails.length ? ` — ${fails.map((r) => r.id).join(', ')}` : ''}. Every cut must name what grows into the space (SKILL.md, counter-rule).`);
}
process.exit(fails.length ? 1 : 0);
