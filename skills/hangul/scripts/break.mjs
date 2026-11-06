#!/usr/bin/env node
/**
 * /hangul break: render a stress page (a component filled with break-data.json's worst-case Korean values)
 * and report what the data broke, at 360, 390 and 1440px. Node >= 18.
 *
 *   node break.mjs <stress-page.html|url>... [width...]      (default widths: 360 390 1440)
 *   node break.mjs --data                                     print break-data.json (the values to put in)
 *   node break.mjs --self-test
 *
 * Four findings, each tied to a rule:
 *   spill    text runs out of its box: scrollWidth > clientWidth with overflow visible (HG-9: the token needs
 *            overflow-wrap: anywhere, or the box needs to grow)
 *   clip     overflow hidden/clip cuts text off with no ellipsis (HG-14)
 *   sideways the page itself scrolls horizontally at this width
 *   broken   a Korean word split across lines (render-check.mjs's scan; read body prose in context, HG-10)
 * Exit code 1 when anything is found. Needs playwright-core (or playwright) and a local Chrome or Chromium,
 * like render-check.mjs; without them it prints how to install and exits 0.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadChromium, launchBrowser, toUrl, brokenWords } from './render-check.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const HINT = 'break skipped: needs playwright-core and a local Chrome or Chromium. Install with `npm i -D playwright-core` (drives your installed Chrome), or `npm i -D playwright && npx playwright install chromium`.';

async function layoutFaults(browser, url, width) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, locale: 'ko-KR', reducedMotion: 'reduce' });
  try {
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await page.evaluate(async () => { await document.fonts.ready; });
    await page.waitForTimeout(300);
    return await page.evaluate(() => {
      const out = [];
      const label = (el) => {
        const cls = typeof el.className === 'string' && el.className.trim() ? `.${el.className.trim().split(/\s+/)[0]}` : '';
        return el.tagName.toLowerCase() + cls;
      };
      const ownText = (el) => [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.data).join('').trim();
      for (const el of document.body.querySelectorAll('*')) {
        const text = ownText(el) || (el.children.length === 0 ? el.textContent.trim() : '');
        if (!text) continue;
        const cs = getComputedStyle(el);
        if (cs.display === 'inline' || cs.display === 'contents' || cs.visibility === 'hidden') continue;
        const over = el.scrollWidth - el.clientWidth;
        if (over <= 1) continue;
        const snippet = text.replace(/\s+/g, ' ').slice(0, 28);
        if (cs.overflowX === 'visible') out.push({ kind: 'spill', el: label(el), by: over, text: snippet, rule: 'HG-9' });
        else if ((cs.overflowX === 'hidden' || cs.overflowX === 'clip') && cs.textOverflow !== 'ellipsis') out.push({ kind: 'clip', el: label(el), by: over, text: snippet, rule: 'HG-14' });
      }
      const doc = document.scrollingElement;
      if (doc.scrollWidth > innerWidth + 1) out.push({ kind: 'sideways', el: 'page', by: doc.scrollWidth - innerWidth, text: '', rule: '' });
      return out;
    });
  } finally {
    await ctx.close();
  }
}

export async function breakCheck(targets, widths) {
  const chromium = await loadChromium();
  const browser = chromium && (await launchBrowser(chromium));
  if (!browser) return null;
  const results = [];
  try {
    for (const target of targets) {
      const url = toUrl(target);
      if (!url) { results.push({ target, error: 'not a URL or an existing file' }); continue; }
      for (const width of widths) {
        try {
          const faults = await layoutFaults(browser, url, width);
          for (const b of await brokenWords(browser, url, width)) faults.push({ kind: 'broken', el: b.el, by: 0, text: b.at, rule: 'HG-10' });
          results.push({ target, width, faults });
        } catch (e) { results.push({ target, width, error: String(e.message || e).split('\n')[0] }); }
      }
    }
  } finally {
    await browser.close();
  }
  return results;
}

async function main(argv) {
  const flags = new Set(argv.filter((a) => a.startsWith('--')));
  const rest = argv.filter((a) => !a.startsWith('--'));
  if (flags.has('--data')) { process.stdout.write(fs.readFileSync(path.join(HERE, 'break-data.json'), 'utf8')); return 0; }
  const widths = rest.filter((a) => /^\d+$/.test(a)).map(Number);
  let targets = rest.filter((a) => !/^\d+$/.test(a));
  const selfTest = flags.has('--self-test');
  if (flags.has('--help') || (!targets.length && !selfTest)) {
    console.log('usage: node break.mjs [--json] <stress-page.html|url>... [width...]   (default widths 360 390 1440)\n       node break.mjs --data | --self-test\nexit 1 when the worst-case data spills, clips, scrolls the page sideways or splits a Korean word');
    return flags.has('--help') ? 0 : 2;
  }
  if (selfTest) targets = ['bad.html', 'good.html'].map((f) => path.join(HERE, 'fixtures', 'break', f));
  const results = await breakCheck(targets, selfTest ? [360] : widths.length ? widths : [360, 390, 1440]);
  if (!results) { console.log(HINT); return 0; }
  if (selfTest) {
    const [bad, good] = results;
    const kinds = new Set((bad.faults || []).map((f) => f.kind));
    const ok = !bad.error && !good.error && ['spill', 'clip', 'sideways'].every((k) => kinds.has(k)) && good.faults.length === 0;
    console.log(`break self-test: bad.html ${bad.error || `${bad.faults.length} fault(s): ${[...kinds].join(', ')}`}, good.html ${good.error || `${good.faults.length} fault(s)`} @360px`);
    for (const f of good.faults || []) console.log(`  good: ${f.kind} ${f.el} ${f.text}`);
    console.log(ok ? 'break self-test: PASS' : 'break self-test: FAIL');
    return ok ? 0 : 1;
  }
  const total = results.reduce((n, r) => n + (r.faults ? r.faults.length : 0), 0);
  const failed = results.some((r) => r.error);
  if (flags.has('--json')) console.log(JSON.stringify({ results, total }, null, 2));
  else {
    for (const r of results) {
      if (r.error) { console.log(`${r.target}${r.width ? ` @${r.width}px` : ''}: error: ${r.error}`); continue; }
      console.log(`${r.target} @${r.width}px: ${r.faults.length} fault(s)`);
      for (const f of r.faults) console.log(`  ${f.kind.padEnd(8)} ${f.rule.padEnd(5)} ${f.el}${f.by ? ` (+${f.by}px)` : ''}  ${f.text}`);
    }
    console.log(`${total} fault(s) · exit ${total || failed ? 1 : 0}`);
  }
  return total || failed ? 1 : 0;
}

process.exitCode = await main(process.argv.slice(2));
