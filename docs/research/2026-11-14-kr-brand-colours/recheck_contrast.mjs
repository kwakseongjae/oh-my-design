#!/usr/bin/env node
/**
 * Measure the named contrast rows again on the live sites (docs/BLOG_ARTICLE_QUEUE.md: a row that names a company
 * is measured again before the article goes to its gates).
 *
 *   node docs/research/2026-11-14-kr-brand-colours/recheck_contrast.mjs <id> [<id> ...] [--browser headed] [--only-blocked FILE]
 *
 * For each reference it takes the button rows.json records as the main action (fill, text colour, ratio), loads the
 * reference's home page at 1440 with no model, and looks for elements drawn with exactly that fill. For those it
 * reads the text colour the browser computed and works the WCAG contrast ratio out again. It does not search other
 * pages: a control that lives elsewhere comes back as "fill not on the home page", which is not a verdict on the row.
 * A refusal (403, a challenge page) is recorded and not worked around; --browser headed opens the installed Chrome
 * with a window for those (allowed by the owner for sites that refuse headless, 2026-11-20).
 * Writes contrast-recheck.json beside this file and prints a table.
 */
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../../..');
const args = process.argv.slice(2);
const HEADED = args.includes('--browser') && args[args.indexOf('--browser') + 1] === 'headed';
const ids = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--browser');
function loadPlaywright() {
  const roots = [REPO];
  try { roots.push(path.resolve(execFileSync('git', ['-C', REPO, 'rev-parse', '--git-common-dir'], { encoding: 'utf8' }).trim(), '..')); } catch { /* no git */ }
  for (const r of roots) { try { return createRequire(path.join(r, 'web/package.json'))('playwright-core'); } catch { /* next */ } }
  console.error('playwright-core not found'); process.exit(2);
}
const { chromium } = loadPlaywright();
const rows = JSON.parse(fs.readFileSync(path.join(HERE, 'rows.json'), 'utf8')).KR;
const registry = fs.readFileSync(path.join(REPO, 'web/src/data/registry.generated.ts'), 'utf8');
const urlOf = (id) => { const m = registry.match(new RegExp('id:\\s*"' + id + '"[\\s\\S]{0,1200}?(?:homepage|url|website|site):\\s*"(https?://[^"]+)"')); return m ? m[1] : null; };
const hex = (v) => { const m = String(v).match(/rgba?\(([^)]+)\)/); if (!m) return String(v).toLowerCase(); const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number); if (p.length >= 4 && p[3] < 1) return null; return '#' + p.slice(0, 3).map((n) => Math.round(n).toString(16).padStart(2, '0')).join(''); };
const lum = (h) => { const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const BLOCK = /access denied|request blocked|could not be satisfied|attention required|just a moment|forbidden|captcha|잠시만 기다|접속 정보를 확인/i;

const browser = await chromium.launch(HEADED ? { headless: false, channel: 'chrome' } : { headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'ko-KR', timezoneId: 'Asia/Seoul' });
const out = [];
for (const id of ids) {
  const row = rows.find((r) => r.id === id);
  const rec = (row?.ruleW_buttons_on_primary ?? row?.ruleS_buttons_on_primary ?? [])[0];
  const url = urlOf(id);
  const res = { id, name: row?.display_name || row?.name, url, recorded: rec ? { component: rec.component, fill: String(rec.fill).toLowerCase(), text: rec.text_hex ?? rec.textColor, ratio: Math.round(rec.ratio * 100) / 100 } : null };
  if (!rec || !url) { res.verdict = 'no recorded button or no url'; out.push(res); continue; }
  const page = await ctx.newPage();
  try {
    const resp = await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => {});
    await page.waitForTimeout(1500);
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < Math.min(total, 9000); y += 900) { await page.evaluate((yy) => scrollTo(0, yy), y); await page.waitForTimeout(150); }
    await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(500);
    const facts = await page.evaluate(() => {
      const els = [];
      for (const e of document.querySelectorAll('a, button, [role=button], input[type=submit], input[type=button], span, div, p, label')) {
        const cs = getComputedStyle(e); if (cs.backgroundColor === 'rgba(0, 0, 0, 0)' || cs.visibility === 'hidden' || cs.display === 'none') continue;
        const r = e.getBoundingClientRect(); if (r.width < 24 || r.height < 16 || r.width > 700 || r.height > 140) continue;
        const text = (e.innerText || e.value || e.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim(); if (!text || text.length > 40) continue;
        // the colour the text is actually drawn in: the deepest element that holds the text
        let t = e; for (;;) { const kid = [...t.children].find((k) => (k.innerText || '').trim() === (t.innerText || '').trim()); if (!kid) break; t = kid; }
        els.push({ tag: e.tagName.toLowerCase(), text: text.slice(0, 30), bg: cs.backgroundColor, color: getComputedStyle(t).color, w: Math.round(r.width), h: Math.round(r.height), fontSize: getComputedStyle(t).fontSize, fontWeight: getComputedStyle(t).fontWeight });
      }
      return { title: document.title, len: (document.body?.innerText || '').length, els };
    });
    res.status = resp?.status() ?? null; res.final = page.url();
    if ((res.status && res.status >= 400) || (facts.len < 900 && BLOCK.test(facts.title))) { res.verdict = 'refused (HTTP ' + res.status + ')'; }
    else {
      const same = facts.els.filter((e) => hex(e.bg) === res.recorded.fill && hex(e.color));
      res.found = same.length;
      if (!same.length) res.verdict = 'fill not on the home page';
      else {
        const groups = new Map(); for (const e of same) { const k = hex(e.color); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(e); }
        res.live = [...groups.entries()].map(([text, list]) => ({ text, ratio: Math.round(ratio(res.recorded.fill, text) * 100) / 100, count: list.length, sample: list[0].text, size: list[0].fontSize + ' / ' + list[0].fontWeight })).sort((a, b) => b.count - a.count);
        const top = res.live[0];
        res.verdict = String(top.text) === String(res.recorded.text).toLowerCase() && Math.abs(top.ratio - res.recorded.ratio) < 0.02 ? 'same' : res.live.some((l) => l.text === String(res.recorded.text).toLowerCase()) ? 'same pair present, another pair more common' : 'text colour differs';
      }
    }
  } catch (e) { res.verdict = 'error: ' + String(e.message).split('\n')[0].slice(0, 80); }
  await page.close();
  out.push(res);
  console.log([id.padEnd(16), (res.recorded.fill + ' ' + res.recorded.text + ' ' + res.recorded.ratio).padEnd(26), res.verdict, res.live ? res.live.slice(0, 2).map((l) => l.text + ' ' + l.ratio + ' ×' + l.count + ' "' + l.sample + '"').join(' ; ') : ''].join('  '));
}
await browser.close();
const file = path.join(HERE, 'contrast-recheck.json');
const prev = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')).rows : [];
const merged = [...prev.filter((p) => !out.some((o) => o.id === p.id)), ...out].sort((a, b) => a.id.localeCompare(b.id));
// the same rows as a table people read; "kept" is what the article may name
const KEEP = new Set(['same', 'same pair present, another pair more common']);
const md = ['# Named contrast rows, measured again on the live home pages', '', 'Made by recheck_contrast.mjs from rows.json and the sites. A row is kept for naming when an element with the recorded fill and the recorded text colour is drawn on the home page today. "Fill not on the home page" is not a finding about the service: the control may live on another page (a design-system site, a course page), which this check does not open.', '', '| reference | recorded fill / text / ratio | on the home page today | kept |', '|---|---|---|---|',
  ...merged.map((r) => '| ' + r.id + ' | ' + (r.recorded ? '`' + r.recorded.fill + '` / `' + r.recorded.text + '` / ' + r.recorded.ratio.toFixed(2) : '-') + ' | ' + r.verdict + (r.live ? ': ' + r.live.slice(0, 2).map((l) => '`' + l.text + '` ' + l.ratio.toFixed(2) + ' ×' + l.count).join(', ') : '') + ' | ' + (KEEP.has(r.verdict) ? 'yes' : 'no') + ' |'),
  '', 'Kept ' + merged.filter((r) => KEEP.has(r.verdict)).length + ' of ' + merged.length + '.', ''].join('\n');
fs.writeFileSync(path.join(HERE, 'contrast-recheck.md'), md);
fs.writeFileSync(file, JSON.stringify({ measured: new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' }), method: 'home page at 1440, exact fill match, computed text colour, WCAG ratio; no other page searched', rows: merged }, null, 1));
