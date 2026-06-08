#!/usr/bin/env node
/**
 * Deterministic design-token extractor (Phase 1 of the token-reconciliation flow).
 *
 *   node scripts/extract-tokens.mjs <ref-id> [--json]
 *
 * What it does (NO model — pure logic):
 *  1. Loads the ref's homepage in headless Chromium and DISMISSES promo/cookie/
 *     app-install modals (Escape + close/accept buttons + fixed-overlay removal),
 *     so computed-style sampling isn't polluted by overlay colours.
 *  2. Captures all network CSS and runs Project Wallace — declared tokens are
 *     modal-immune (they describe the whole stylesheet, not what's on screen).
 *  3. Reads CSS custom properties whose NAME contains brand/primary/point/key —
 *     the most authoritative brand-colour signal when present (but noisy: third-
 *     party embeds can define such vars, so it's a candidate, not a verdict).
 *  4. Builds primary candidates by (frequency × saturation), filtering neutrals.
 *  5. Compares to the ref's current primary_color via ΔE and classifies drift.
 *
 * Output = a CANDIDATE token set + a drift verdict for a downstream LLM pass to
 * adjudicate (legacy-vs-live vs wrong) and assign canonical roles. This script
 * never writes DESIGN.md.
 *
 * Requires global playwright + @projectwallace/css-analyzer:
 *   NODE_PATH=$(npm root -g) node scripts/extract-tokens.mjs stripe
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execSync } from 'node:child_process';
import { analyze } from '@projectwallace/css-analyzer'; // web devDependency

const __dirname = dirname(fileURLToPath(import.meta.url));
const REFS = join(__dirname, '..', 'references');

const id = process.argv[2];
const asJson = process.argv.includes('--json');
if (!id) { console.error('usage: extract-tokens.mjs <ref-id> [--json]'); process.exit(1); }

// playwright is large — kept as a GLOBAL install, resolved here (set GLOBAL_ROOT
// to override). Install once: `npm i -g playwright && npx playwright install chrome`.
const GROOT = process.env.GLOBAL_ROOT || execSync('npm root -g').toString().trim();
const pw = await import(pathToFileURL(join(GROOT, 'playwright', 'index.js')).href);
const chromium = pw.chromium ?? pw.default?.chromium;

function norm(c) { let h = String(c).trim().toLowerCase(); const m = h.match(/rgba?\(([^)]+)\)/); if (m) { const p = m[1].split(',').map(s => parseFloat(s)); if (p.length >= 4 && p[3] < 0.5) return null; const [r, g, b] = p; if ([r, g, b].some(Number.isNaN)) return null; h = '#' + [r, g, b].map(n => Math.round(n).toString(16).padStart(2, '0')).join(''); } if (/^#[0-9a-f]{3}$/.test(h)) h = '#' + h.slice(1).split('').map(x => x + x).join(''); return /^#[0-9a-f]{6}$/.test(h) ? h : null; }
function hsl(hex) { const r = parseInt(hex.slice(1, 3), 16) / 255, g = parseInt(hex.slice(3, 5), 16) / 255, b = parseInt(hex.slice(5, 7), 16) / 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2; const s = mx === mn ? 0 : l > .5 ? (mx - mn) / (2 - mx - mn) : (mx - mn) / (mx + mn); return { s, l }; }
function deltaE(a, b) { const A = [1, 3, 5].map(i => parseInt(a.slice(i, i + 2), 16)), B = [1, 3, 5].map(i => parseInt(b.slice(i, i + 2), 16)); const rm = (A[0] + B[0]) / 2; return Math.sqrt((2 + rm / 256) * (A[0] - B[0]) ** 2 + 4 * (A[1] - B[1]) ** 2 + (2 + (255 - rm) / 256) * (A[2] - B[2]) ** 2); }
function brandCandidates(pairs, n = 4) { return pairs.map(([h, c]) => { const { s, l } = hsl(h); return { hex: h, score: c * s, sat: +s.toFixed(2), lum: +l.toFixed(2) }; }).filter(x => x.sat > 0.3 && x.lum > 0.15 && x.lum < 0.85).sort((a, b) => b.score - a.score).slice(0, n); }
function brandVars(css) { const out = {}; const re = /--([a-z0-9-]*(?:primary|brand|point|key|signature)[a-z0-9-]*)\s*:\s*(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))/gi; let m; while ((m = re.exec(css))) { const h = norm(m[2]); if (h && hsl(h).s > 0.2) (out[h] ||= new Set()).add(m[1]); } return Object.entries(out).map(([hex, names]) => ({ hex, names: [...names].slice(0, 3) })).slice(0, 4); }

async function dismissModals(page) {
  let acted = 0;
  for (let i = 0; i < 2; i++) { await page.keyboard.press('Escape').catch(() => {}); await page.waitForTimeout(120); }
  const sels = ['[aria-label*="close" i]', '[aria-label*="dismiss" i]', '[aria-label*="닫기"]', 'button[class*="close" i]', 'button:has-text("Accept")', 'button:has-text("I agree")', 'button:has-text("동의")', 'button:has-text("모두 동의")', 'button:has-text("닫기")', 'button:has-text("오늘 하루")', '[id*="cookie" i] button', '[class*="cookie" i] button'];
  for (const s of sels) { try { const el = page.locator(s).first(); if (await el.isVisible({ timeout: 250 })) { await el.click({ timeout: 700 }); acted++; await page.waitForTimeout(150); } } catch {} }
  acted += await page.evaluate(() => { let n = 0; document.querySelectorAll('[role="dialog"],[aria-modal="true"],[class*="modal" i],[class*="popup" i],[class*="overlay" i],[class*="backdrop" i]').forEach(el => { const s = getComputedStyle(el); if ((s.position === 'fixed' || s.position === 'absolute') && parseInt(s.zIndex || '0') >= 50 && el.offsetHeight > 150 && el.offsetWidth > 200) { el.remove(); n++; } }); return n; });
  return acted;
}

const md = existsSync(join(REFS, id, 'DESIGN.md')) ? readFileSync(join(REFS, id, 'DESIGN.md'), 'utf8') : '';
const homepage = (md.match(/^homepage:\s*"?([^"\n]+)"?/m) || [])[1];
const ourPrimary = (md.match(/^primary_color:\s*"?(#[0-9a-fA-F]{6})/m) || [])[1]?.toLowerCase();
if (!homepage) { console.error(`no homepage for ref '${id}'`); process.exit(1); }

const browser = await chromium.launch({ headless: true, args: ['--disable-http2'] });
const ctx = await browser.newContext({ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36', viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const cssChunks = [];
page.on('response', async r => { const ct = r.headers()['content-type'] || ''; if (ct.includes('css') || r.url().endsWith('.css')) { try { cssChunks.push(await r.text()); } catch {} } });
await page.goto(homepage, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
await page.waitForTimeout(1200);
const modalActions = await dismissModals(page);
await page.waitForTimeout(300);
const computed = await page.evaluate(() => { const cnt = {}; for (const el of document.querySelectorAll('button,a[class],[class*="btn" i],[class*="cta" i],h1,h2')) { if (el.closest('[role=dialog]')) continue; const s = getComputedStyle(el); for (const c of [s.backgroundColor, s.color]) cnt[c] = (cnt[c] || 0) + 1; } return cnt; });
await browser.close();

const css = cssChunks.join('\n');
const r = css.length > 800 ? analyze(css) : null;
const declared = r ? Object.entries(r.values.colors?.unique || {}).map(([raw, n]) => [norm(raw), n]).filter(([h]) => h).sort((a, b) => b[1] - a[1]) : [];
const compTop = Object.entries(computed).map(([raw, n]) => [norm(raw), n]).filter(([h]) => h).sort((a, b) => b[1] - a[1]);
const vars = brandVars(css);
const fonts = r ? Object.entries(r.values.fontFamilies?.unique || {}).sort((a, b) => b[1] - a[1]).slice(0, 3).map(x => x[0].split(',')[0].replace(/["']/g, '')) : [];
const radii = r ? Object.entries(r.values.borderRadiuses?.unique || {}).map(x => x[0]).filter(v => /^\d+px$/.test(v)).map(v => parseInt(v)).sort((a, b) => a - b) : [];

const candidates = brandCandidates(declared);
// Pick the live primary from the frequency×saturation winner (robust). Brand CSS
// vars are kept as EVIDENCE only — they're a tint scale (brand-25…brand-900), so
// the named var alone is unreliable; we only trust a var if it's saturated AND
// corroborates a top candidate.
const satVar = vars.find(v => { const { s, l } = hsl(v.hex); return s > 0.45 && l > 0.2 && l < 0.7; });
const live = candidates[0]?.hex || brandCandidates(compTop)[0]?.hex || satVar?.hex || null;
const dE = live && ourPrimary ? Math.round(deltaE(live, ourPrimary)) : null;
const verdict = !ourPrimary ? 'no-current' : !live ? 'no-live-signal' : dE <= 12 ? 'MATCH' : dE <= 35 ? 'DRIFT' : 'CONFLICT';

const result = {
  id, homepage, modalActions,
  current_primary: ourPrimary,
  live_primary_candidate: live,
  drift: { deltaE: dE, verdict },
  brand_css_vars: vars,
  primary_candidates: candidates,
  declared_top: declared.slice(0, 12).map(([h, n]) => `${h}×${n}`),
  fonts, radius_scale: [...new Set(radii)].slice(0, 8),
  note: 'CANDIDATE only — an LLM pass adjudicates legacy-vs-live vs wrong against Tier-1 sources before any DESIGN.md edit.',
};

if (asJson) { console.log(JSON.stringify(result, null, 2)); }
else {
  console.log(`\n# ${id}  ${homepage}`);
  console.log(`modal actions: ${modalActions}`);
  console.log(`current primary_color: ${ourPrimary}`);
  console.log(`live primary candidate: ${live}   drift: ${verdict}${dE != null ? ` (ΔE ${dE})` : ''}`);
  if (vars.length) console.log(`brand CSS vars: ${vars.map(v => `${v.hex}[${v.names.join(',')}]`).join('  ')}`);
  console.log(`primary candidates: ${candidates.map(c => `${c.hex}(sat${c.sat})`).join('  ')}`);
  console.log(`fonts: ${fonts.join(' | ') || '?'}   radius: ${result.radius_scale.join(' ') || '?'}`);
  console.log(`declared top: ${result.declared_top.join(' ')}`);
}
