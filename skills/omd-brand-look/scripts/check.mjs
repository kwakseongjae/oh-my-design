#!/usr/bin/env node
// omd-brand-look check (design doc §4): run the checks on every themed copy of a look.mjs run and write report.md /
// report.json next to it. Existing checkers are called on the copies' file paths, unmodified:
//   C1 contrast       test-v2/tools/text-contrast.mjs (glyph pixels vs the background under them), all widths
//   C2 broken words   skills/hangul/scripts/break.mjs breakCheck (kind: broken) — heading/button/label/badge FAIL, prose WARN
//   C3 layout         breakCheck spill / clip / sideways — FAIL
// and two new ones:
//   C5 palette        every painted colour is a mapped value or a kept (omitted-slot) value; primary button fill = --primary
//   C6 font           the face that painted Latin / Hangul (CDP CSS.getPlatformFontsForNode) is the one the label names
// Each FAIL gets a cause: inherited (the reference declares the pair), mapping (our assignment made it), layout (C2/C3).
// Fixes are suggestions to reassign a slot to another declared colour; nothing is lightened, darkened or mixed.
//
//   PW_CORE=$PWD/web node check.mjs <look-run-dir>
// Exit 0 = report written (FAILs are in the report, not the exit code), 2 = usage.

import { closeSync, existsSync, openSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { pairCause, ratio, SAFE } from './tokens.mjs';
import { pairOfLabel } from './target.mjs';
import { launchChromium, loadPlaywright } from './browser.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..', '..', '..');
const DIR = process.argv[2] && path.resolve(process.argv[2]);
if (!DIR || !existsSync(path.join(DIR, 'run.json'))) { console.error('usage: node check.mjs <look-run-dir>   (a folder look.mjs wrote, with run.json)'); process.exit(2); }
const run = JSON.parse(readFileSync(path.join(DIR, 'run.json'), 'utf8'));
const WIDTHS = run.widths;
const tag = (v) => `${v.width}x${v.height}`;
const brands = run.brands.map((b) => ({ ...b, t: JSON.parse(readFileSync(path.join(DIR, b.id, 'tokens.json'), 'utf8')), html: path.join(DIR, b.id, 'index.html') }));
const kept = run.keptValues;
const findFirst = (cands) => cands.find(existsSync);
const engines = { look: run.engines?.look };

// value of a slot on the rendered screen: the brand's, else the screen's own
const valueOf = (t, slot) => t.slots[slot]?.v ?? kept[slot] ?? null;
const pairInfo = (t, fg, bg) => {
  const f = valueOf(t, fg), b = valueOf(t, bg);
  const r = f && b ? +ratio(f, b).toFixed(2) : null;
  return { pair: `${fg} on ${bg}`, tokenRatio: r, ...pairCause(t, fg, bg) };
};

// ---------- C1: text-contrast.mjs ----------
const tcTool = findFirst([path.join(REPO, 'test-v2', 'tools', 'text-contrast.mjs'), path.join(process.cwd(), 'node_modules', 'oh-my-design-cli', 'test-v2', 'tools', 'text-contrast.mjs')]);
const c1 = {};
if (!tcTool) console.error('C1 skipped: test-v2/tools/text-contrast.mjs not found');
else {
  console.log(`C1 contrast: ${brands.length} copies × ${WIDTHS.length} widths …`);
  // text-contrast.mjs calls process.exit() right after printing, which cuts a piped stdout at 64 KB: give it a file.
  const c1File = path.join(DIR, 'c1-text-contrast.json');
  const fd = openSync(c1File, 'w');
  const res = spawnSync(process.execPath, [tcTool, ...brands.map((b) => b.html), '--viewport', WIDTHS.map(tag).join(','), '--json'], { stdio: ['ignore', fd, 'pipe'], encoding: 'utf8' });
  closeSync(fd);
  let parsed = [];
  try { parsed = JSON.parse(readFileSync(c1File, 'utf8')); } catch { console.error(`C1 output unreadable (status ${res.status}, ${res.error ?? ''}): ${String(res.stderr).split('\n').slice(-3).join(' ')}`); }
  if (!parsed.length) console.error(`C1 returned nothing: ${String(res.stderr).split('\n').slice(-3).join(' ')}`);
  for (const r of parsed) {
    const b = brands.find((x) => path.resolve(r.file) === x.html);
    if (b) c1[b.id] = r;
  }
  try {
    const { detectBrowser } = await import(pathToFileURL(path.join(path.dirname(tcTool), 'lib', 'browser.mjs')).href);
    const d = detectBrowser();
    engines.c1 = { mode: d.mode, executable: d.detail };
  } catch { engines.c1 = { mode: 'unknown' }; }
}

// ---------- C2 / C3: hangul breakCheck, in the same Chromium as look.mjs ----------
const breakTool = findFirst([path.join(HERE, '..', '..', 'hangul', 'scripts', 'break.mjs'), path.join(REPO, 'skills', 'hangul', 'scripts', 'break.mjs')]);
let breaks = null;
if (!breakTool) console.error('C2/C3 skipped: skills/hangul/scripts/break.mjs not found');
else {
  console.log('C2/C3 broken words + layout …');
  try { const { chromium } = loadPlaywright(); const p = chromium.executablePath(); if (existsSync(p) && !process.env.CHROME_PATH) process.env.CHROME_PATH = p; } catch { /* break.mjs falls back to Chrome */ }
  engines.c2c3 = { mode: process.env.CHROME_PATH ? 'CHROME_PATH' : 'break.mjs default (local Chrome first)', executable: process.env.CHROME_PATH ?? null };
  // break.mjs runs its CLI on import (no main guard): give it --help and mute it while it loads.
  const [argv, log, code] = [process.argv, console.log, process.exitCode];
  process.argv = [argv[0], breakTool, '--help']; console.log = () => {};
  const { breakCheck } = await import(pathToFileURL(breakTool).href).finally(() => { process.argv = argv; console.log = log; });
  process.exitCode = code;
  breaks = await breakCheck([path.join(DIR, 'baseline', 'index.html'), ...brands.map((b) => b.html)], WIDTHS.map((v) => v.width));
  if (!breaks) console.error('C2/C3 skipped: break.mjs found no browser');
}
const PROSE = /^(p|li|div|dd|td)\b/;

// ---------- C5 palette + C6 font: one pass in look.mjs's engine ----------
console.log('C5 palette + C6 font …');
const { browser, engine } = await launchChromium();
engines.c5c6 = engine;
const toHex = (c) => {
  const m = /rgba?\(([^)]+)\)/.exec(c);
  if (!m) return null;
  const [r, g, b, a = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
  return { hex: '#' + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, '0')).join(''), a };
};
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
const c5 = {}, c6 = {};
for (const b of brands) {
  const t = b.t;
  const allowed = new Map();
  for (const [k, s] of Object.entries(t.slots)) if (s) allowed.set(s.v, [...(allowed.get(s.v) ?? []), `--${k}`]);
  const keptMap = new Map();
  for (const k of t.omitted.map((o) => o.slice(2))) if (kept[k]) keptMap.set(kept[k], [...(keptMap.get(kept[k]) ?? []), `--${k}`]);
  c5[b.id] = {};
  for (const v of WIDTHS) {
    const ctx = await browser.newContext({ viewport: v, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto(pathToFileURL(b.html).href, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
    await page.evaluate(async () => { await document.fonts.ready; });
    const painted = await page.evaluate(() => {
      const out = [];
      const label = (el) => el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/).join('.') : '');
      for (const el of document.body.querySelectorAll('*')) {
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        if (cs.display === 'none' || cs.visibility === 'hidden' || r.width === 0 || r.height === 0 || el.closest('img,video,picture,svg,[class*="--content"]')) continue;
        const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.data.trim());
        if (own || el.tagName === 'INPUT') out.push({ el: label(el), prop: 'color', value: cs.color });
        out.push({ el: label(el), prop: 'background-color', value: cs.backgroundColor });
        for (const side of ['top', 'right', 'bottom', 'left'])
          if (parseFloat(cs[`border-${side}-width`]) > 0 && cs[`border-${side}-style`] !== 'none') out.push({ el: label(el), prop: `border-${side}-color`, value: cs[`border-${side}-color`] });
        if (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) out.push({ el: label(el), prop: 'outline-color', value: cs.outlineColor });
        for (const m of (cs.boxShadow === 'none' ? '' : cs.boxShadow).matchAll(/rgba?\([^)]+\)/g)) out.push({ el: label(el), prop: 'box-shadow', value: m[0] });
        const paintedBox = cs.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(cs.borderTopWidth) > 0;
        if (paintedBox && cs.borderTopLeftRadius !== '0px') out.push({ el: label(el), prop: 'border-radius', value: cs.borderTopLeftRadius, h: r.height });
      }
      const pb = document.querySelector('.btn-primary');
      return { out, primaryFill: pb ? getComputedStyle(pb).backgroundColor : null };
    });
    await ctx.close();
    const strays = new Map(), derived = new Map(), keptHits = new Map(), radii = new Map();
    const R = t.radius ? parseFloat(t.radius.v) : null;
    for (const p of painted.out) {
      if (p.prop === 'border-radius') {
        const px = parseFloat(p.value);
        const kind = p.value.endsWith('%') || px >= p.h / 2 ? 'shape (circle/pill, the screen\'s own)'
          : R == null ? 'kept (radius omitted)'
            : px === R ? `mapped (= ${t.radius.from})`
              : [R - 2, R + 2, R + 6].includes(px) ? 'derived (shadcn offset)' : 'stray';
        radii.set(`${p.value} · ${kind}`, (radii.get(`${p.value} · ${kind}`) ?? 0) + 1);
        continue;
      }
      const c = toHex(p.value);
      if (!c || c.a === 0) continue;
      const key = `${p.prop} ${c.hex}${c.a < 1 ? ` α${+c.a.toFixed(2)}` : ''}`;
      const add = (m, why) => { const e = m.get(key) ?? { value: c.hex, alpha: c.a, prop: p.prop, why, els: new Set() }; e.els.add(p.el); m.set(key, e); };
      if (allowed.has(c.hex)) (c.a < 1 ? add(derived, `alpha mix of ${allowed.get(c.hex).join(', ')}`) : null);
      else if (keptMap.has(c.hex)) add(keptHits, `kept: ${keptMap.get(c.hex).join(', ')} omitted, the screen's own value stays`);
      else add(strays, 'not a mapped or kept value');
    }
    const fill = toHex(painted.primaryFill ?? '');
    const primaryOk = !t.slots.primary || (fill && fill.hex === t.slots.primary.v);
    const list = (m) => [...m.values()].map((e) => ({ ...e, els: [...e.els].slice(0, 4), count: e.els.size }));
    c5[b.id][tag(v)] = {
      primaryButton: t.slots.primary ? { expected: t.slots.primary.v, painted: fill?.hex ?? null, verdict: primaryOk ? 'PASS' : 'FAIL' } : { verdict: 'n/a (--primary omitted)' },
      strays: list(strays), derived: list(derived), kept: list(keptHits),
      radii: [...radii.entries()].map(([k, n]) => ({ radius: k, count: n })),
    };
  }
  // C6 at the first width: which face painted a Latin run and a run in the screen's script
  const script = (SAFE[run.lang] ?? SAFE.ko)[1];
  const ctx = await browser.newContext({ viewport: WIDTHS[0], locale: run.lang === 'ko' ? 'ko-KR' : run.lang });
  const page = await ctx.newPage();
  await page.goto(pathToFileURL(b.html).href, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await page.evaluate(async (sample) => {
    for (const [id, text] of Object.entries(sample)) { const s = document.createElement('span'); s.id = id; s.textContent = text; document.body.append(s); }
    await document.fonts.ready;
  }, { 'omd-fm-latin': 'Review orders before 6 PM', [`omd-fm-${script}`]: { hangul: '주문 관리 배송지 변경', kana: '注文の管理をする', han: '订单管理与配送' }[script] ?? '' });
  await page.waitForTimeout(300);
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('DOM.enable'); await cdp.send('CSS.enable');
  const { root } = await cdp.send('DOM.getDocument', { depth: -1 });
  c6[b.id] = {};
  for (const s of ['latin', script]) {
    const { nodeId } = await cdp.send('DOM.querySelector', { nodeId: root.nodeId, selector: `#omd-fm-${s}` });
    const { fonts } = await cdp.send('CSS.getPlatformFontsForNode', { nodeId });
    const top = [...fonts].sort((x, y) => y.glyphCount - x.glyphCount)[0] ?? null;
    const exp = t.font.expect?.[s] ?? null;
    let verdict = 'n/a', why = 'no label for this script (no UI face declared)';
    if (exp && top) {
      const name = norm(top.familyName);
      const hit = (list) => (list ?? []).find((f) => name.startsWith(norm(f)) || norm(f).startsWith(name));
      if (exp.system) { verdict = top.isCustomFont ? 'FAIL' : 'PASS'; why = top.isCustomFont ? `label says the OS system family; web font ${top.familyName} painted` : `OS face ${top.familyName} painted, as labelled`; }
      else if (hit(exp.families)) { verdict = 'PASS'; why = `${top.familyName} painted, as labelled`; }
      else if (hit(exp.fallback)) { verdict = 'PASS'; why = `${top.familyName} painted: the labelled safe default behind ${exp.families.join(', ')}`; }
      else { verdict = 'FAIL'; why = `label names ${[...(exp.families ?? []), ...(exp.fallback ?? [])].join(' / ')}; ${top.familyName}${top.isCustomFont ? '' : ' (installed/OS)'} painted`; }
    }
    c6[b.id][s] = { painted: top ? { family: top.familyName, custom: top.isCustomFont, glyphs: top.glyphCount } : null, all: fonts.map((f) => f.familyName), verdict, why };
  }
  await ctx.close();
}
await browser.close();

// ---------- assemble ----------
const report = { run: path.relative(process.cwd(), DIR) || DIR, created: new Date().toISOString(), engines, brands: [] };
for (const b of brands) {
  const t = b.t;
  const B = { id: b.id, name: t.name, displayName: t.displayName, file: t.file, verified_at: t.verified_at, filled: t.filled, omitted: t.omitted,
    font: { case: t.font.case, caption: t.font.caption, labels: t.font.labels }, tokenContrast: t.contrast, screenContrast: t.screenContrast,
    suggestions: t.screenSuggestions ?? t.suggestions, widths: {}, c6: c6[b.id] };
  for (const v of WIDTHS) {
    const W = { fails: [], warns: [] };
    const r = c1[b.id]?.viewports?.[tag(v)];
    if (r) {
      // one FAIL per slot pair (and cause), listing the elements that paint it
      const byPair = new Map();
      for (const x of r.text) if (x.pctBelow > 5) {
        const pr = pairOfLabel(x.el);
        const info = pr ? pairInfo(t, pr[0], pr[1]) : { pair: `unlabelled ${x.el}`, cause: 'mapping', why: 'element paints no labelled slot pair' };
        const k = `${info.pair}|${info.cause}`;
        if (!byPair.has(k)) { byPair.set(k, { check: 'C1', ...info, els: [] }); W.fails.push(byPair.get(k)); }
        byPair.get(k).els.push({ el: x.el, text: x.text, pctBelow: x.pctBelow, min: x.min, floor: x.floor });
      }
      // a pair whose both sides are the screen's own values fails on the unthemed screen too: WARN, not the brand's FAIL
      for (const f of byPair.values()) if (f.cause === 'screen') { W.fails.splice(W.fails.indexOf(f), 1); W.warns.push(f); }
      for (const f of byPair.values()) { f.el = [...new Set(f.els.map((e) => e.el))].join(', '); f.detail = `${f.els.length} element(s), glyph px under ${f.els[0].floor}:1 (min ${Math.min(...f.els.map((e) => e.min))}): ${f.els.slice(0, 4).map((e) => `"${e.text}"`).join(', ')}${f.els.length > 4 ? ' …' : ''}`; }
      const rings = r.rings.filter((x) => x.pctBelow > 5);
      if (rings.length) {
        const ring = t.slots.ring;
        W.fails.push({ check: 'C1', el: 'focus ring', detail: `${rings.length} focus ring(s), ring px under 3:1 (min ${Math.min(...rings.map((x) => x.min))}): ${rings.slice(0, 4).map((x) => `"${x.text}"`).join(', ')}${rings.length > 4 ? ' …' : ''}`, pair: 'ring on background',
          tokenRatio: valueOf(t, 'ring') && valueOf(t, 'background') ? +ratio(valueOf(t, 'ring'), valueOf(t, 'background')).toFixed(2) : null,
          ...(ring && ring.from.startsWith('components.') ? { cause: 'inherited', why: `${ring.from} is the reference's measured focus colour` } : { cause: 'mapping', why: ring ? `${ring.from} assigned as the ring` : '--ring omitted: the screen\'s own ring on a brand background' }) });
      }
    } else if (tcTool) W.warns.push({ check: 'C1', detail: c1[b.id]?.fails?.join('; ') || 'no C1 result for this width' });
    if (breaks) {
      const mine = breaks.find((x) => x.target === b.html && x.width === v.width);
      const base = breaks.find((x) => x.target.endsWith(path.join('baseline', 'index.html')) && x.width === v.width);
      const inBase = (f) => (base?.faults ?? []).some((g) => g.kind === f.kind && g.el === f.el && g.text === f.text);
      for (const f of mine?.faults ?? []) {
        const check = f.kind === 'broken' ? 'C2' : 'C3';
        const item = { check, el: f.el, text: f.text, detail: `${f.kind}${f.by ? ` by ${f.by}px` : ''} (${f.rule || 'page'})`, cause: inBase(f) ? 'screen' : 'layout',
          why: inBase(f) ? 'the unthemed screen has the same fault (not caused by the swap)' : 'appears after the brand font / radius swap' };
        if (item.cause === 'screen' || (f.kind === 'broken' && PROSE.test(f.el))) W.warns.push(item); else W.fails.push(item);
      }
      if (mine?.error) W.warns.push({ check: 'C2/C3', detail: mine.error });
      W.c23 = mine ? { faults: mine.faults?.length ?? null, baselineFaults: base?.faults?.length ?? null } : null;
    }
    const p = c5[b.id][tag(v)];
    if (p.primaryButton.verdict === 'FAIL') W.fails.push({ check: 'C5', el: 'button.btn-primary', detail: `fill ${p.primaryButton.painted} ≠ --primary ${p.primaryButton.expected}`, cause: 'mapping', why: 'the screen paints its primary button with something other than --primary' });
    for (const s of p.strays) W.warns.push({ check: 'C5', el: s.els.join(', '), detail: `${s.prop} ${s.value}${s.alpha < 1 ? ` α${s.alpha}` : ''} — ${s.why}` });
    for (const s of p.derived) W.warns.push({ check: 'C5', el: s.els.join(', '), detail: `${s.prop} ${s.value} α${s.alpha} — derived: ${s.why}` });
    for (const s of p.radii.filter((x) => /derived|stray/.test(x.radius))) W.warns.push({ check: 'C5', detail: `radius ${s.radius} ×${s.count}` });
    W.c5 = p;
    if (v === WIDTHS[0]) for (const [s, f] of Object.entries(c6[b.id])) if (f.verdict === 'FAIL') W.fails.push({ check: 'C6', el: `${s} run`, detail: f.why, cause: 'font', why: 'the painted face does not match its label (G3)' });
    W.verdict = W.fails.length ? 'FAIL' : 'PASS';
    B.widths[tag(v)] = W;
  }
  report.brands.push(B);
}
writeFileSync(path.join(DIR, 'report.json'), JSON.stringify(report, null, 2) + '\n');
run.engines = { ...run.engines, ...engines };
writeFileSync(path.join(DIR, 'run.json'), JSON.stringify(run, null, 2) + '\n');

// ---------- report.md ----------
const md = [];
// distinct findings per cause across widths (a pair failing at four widths counts once)
const causeCount = (B) => { const seen = new Map(); for (const W of Object.values(B.widths)) for (const f of W.fails) seen.set(`${f.check}|${f.pair ?? f.el}|${f.cause}`, f.cause); const n = {}; for (const c of seen.values()) n[c] = (n[c] ?? 0) + 1; return n; };
const fmtCause = (n) => Object.entries(n).map(([k, v]) => `${k} ${v}`).join(' · ');
md.push(`# omd-brand-look report`, '', `Run \`${report.run}\` · ${report.created.slice(0, 10)} · sample screen · widths ${WIDTHS.map((v) => v.width).join(' · ')} · lang ${run.lang}`, '');
md.push(`Engines: look/C5/C6 ${engines.c5c6.mode} ${engines.c5c6.version} · C1 ${engines.c1?.mode ?? 'skipped'} · C2/C3 ${engines.c2c3 ? (engines.c2c3.executable ? 'same Chromium via CHROME_PATH' : engines.c2c3.mode) : 'skipped'}`, '');
md.push('A cell is PASS when C1, C2 (heading/button/label/badge), C3, C5 (primary button fill) and C6 have no FAIL. Causes: **inherited** = the reference declares the pair (left as measured) · **mapping** = our slot assignment made it (incl. an omitted slot) · **layout** = C2/C3 after the swap · **font** = C6 label mismatch. A **screen** finding (both sides are the unthemed screen\'s own values, or the unthemed screen has the same fault) is a WARN.', '');
md.push('FAIL causes count distinct findings (one slot pair, one layout fault) across all widths.', '');
md.push(`| brand | slots | font | ${WIDTHS.map((v) => v.width).join(' | ')} | FAIL causes |`, `|---|---|---|${WIDTHS.map(() => '---').join('|')}|---|`);
for (const B of report.brands) md.push(`| ${B.displayName} (\`${B.id}\`) | ${B.filled}/18 | ${B.font.caption} | ${WIDTHS.map((v) => { const W = B.widths[tag(v)]; return W.fails.length ? `FAIL ${W.fails.length}` : 'PASS'; }).join(' | ')} | ${fmtCause(causeCount(B)) || '—'} |`);
md.push('');
md.push('Suggestion rule: only for a mapping FAIL. Try the omitted side first, then the other side (never the page canvas), and reassign it to another declared `colors.*` value of the same kind (`--destructive` only danger keys, `--primary` only primary keys, a surface only canvas/surface keys, a text slot role keys or single-word keys, so `corporate-*` and other surface-prefixed keys never cross evidence domains) that reaches 4.5:1 against every colour that slot sits with on the screen; among those, the lowest ratio (least change in hierarchy). An inherited pair is never "fixed", and nothing is lightened, darkened or mixed. `look.mjs --assign` applies the suggestions.', '');
for (const B of report.brands) {
  md.push(`## ${B.displayName} · \`${B.id}\``, '');
  md.push(`- Source \`${B.file}\` · verified ${B.verified_at} · slots ${B.filled}/18 · omitted: ${B.omitted.length ? B.omitted.map((o) => `\`${o}\``).join(' ') : 'none'}`);
  md.push(`- Font (${B.font.case}): ${B.font.caption}`);
  for (const l of B.font.labels) md.push(`  - ${l}`);
  md.push('', '**Token pairs** (design doc §3 set, then the pairs this screen paints; an omitted side uses the screen\'s own value)', '');
  md.push('| pair | ratio | 4.5:1 | cause |', '|---|---|---|---|');
  const seen = new Set();
  for (const c of [...B.tokenContrast, ...(B.screenContrast ?? [])]) {
    if (seen.has(c.pair)) continue; seen.add(c.pair);
    md.push(`| ${c.pair}${c.kept?.length ? ` (kept ${c.kept.map((k) => `--${k}`).join(', ')})` : ''} | ${c.ratio}:1 | ${c.body} | ${c.body === 'FAIL' ? `${c.cause} — ${c.why}` : ''} |`);
  }
  md.push('');
  if (B.suggestions?.length) {
    md.push('**Suggestions** (not applied unless `--assign`)', '');
    for (const s of B.suggestions) md.push(s.to ? `- \`--${s.slot}\` ← \`${s.to}\` (${s.value}): ${s.minRatio}:1 for ${s.for} (was ${s.from})` : `- \`--${s.slot}\` for ${s.for}: ${s.note}`);
    md.push('');
  }
  md.push('**C6 font**', '');
  for (const [s, f] of Object.entries(B.c6)) md.push(`- ${s}: ${f.verdict} — ${f.why}${f.all.length > 1 ? ` (all faces on the run: ${f.all.join(', ')})` : ''}`);
  md.push('');
  for (const v of WIDTHS) {
    const W = B.widths[tag(v)];
    md.push(`**${tag(v)} — ${W.verdict}**`, '');
    for (const f of W.fails) md.push(`- FAIL ${f.check} · ${f.cause} · ${f.pair ? `**${f.pair}**${f.tokenRatio ? ` ${f.tokenRatio}:1` : ''} · ` : ''}\`${f.el ?? ''}\` ${f.text ? `"${f.text}" ` : ''}${f.detail} — ${f.why}`);
    for (const f of W.warns) md.push(`- WARN ${f.check}${f.cause ? ` · ${f.cause}` : ''} ${f.el ? `\`${f.el}\` ` : ''}${f.text ? `"${f.text}" ` : ''}${f.detail ?? ''}${f.why ? ` — ${f.why}` : ''}`);
    const p = W.c5;
    md.push(`- C2/C3: ${W.c23 ? `${W.c23.faults} fault(s) on this copy, ${W.c23.baselineFaults} on the unthemed screen` : 'not run'}`);
    md.push(`- C5 primary button: ${p.primaryButton.verdict}${p.primaryButton.painted ? ` (${p.primaryButton.painted})` : ''} · radii: ${p.radii.map((x) => `${x.radius} ×${x.count}`).join('; ') || 'none'}${p.kept.length ? ` · kept values painted: ${p.kept.map((k) => `${k.value} (${k.why.split(':')[1].trim().split(' ')[0]})`).join(', ')}` : ''}`);
    md.push('');
  }
}
md.push('---', '', 'Not in this report (design doc §6 later): C4 restraint R3/R7, component geometry, dark blocks. slop-audit is an agent checklist (COLOR-01·02, TYPE-01·03, VISUAL-03), not a gate.', '');
writeFileSync(path.join(DIR, 'report.md'), md.join('\n'));
console.log(`report: ${path.relative(process.cwd(), path.join(DIR, 'report.md'))}`);
for (const B of report.brands) console.log(`  ${B.id.padEnd(11)} ${String(B.filled).padStart(2)}/18  ${WIDTHS.map((v) => B.widths[tag(v)].verdict.padEnd(4)).join(' ')}  ${fmtCause(causeCount(B))}`);
