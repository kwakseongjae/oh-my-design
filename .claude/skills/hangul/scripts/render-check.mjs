#!/usr/bin/env node
/**
 * /hangul render check (optional): open pages in headless Chrome/Chromium and flag Korean words broken
 * across lines, i.e. a line boundary between two Hangul syllables with no space between them ("생 / 활",
 * "있어 / 요."). check.mjs reads source and cannot see wraps; this reads the render. Node >= 18.
 *
 *   node render-check.mjs [--json] <url-or-html-file>... [width...]     (default widths: 360 390 1440)
 *   node render-check.mjs --self-test
 *
 * Needs playwright-core (or playwright), resolved from this script's folder or the current directory,
 * plus a local Chrome or Chromium (CHROME_PATH overrides). Without them it prints one line on how to
 * install and exits 0, so the default /hangul check stays zero-dependency.
 * Exit code: 1 if any word is broken, otherwise 0.
 *
 * Every text node is walked with Range.getClientRects. Transforms are neutralised first (they don't change
 * line breaking, but rotated text confuses line grouping), and <br> counts as an intentional break.
 * Body prose may legitimately break between syllables (HG-10), so read each hit in context.
 * Adapted from OmD's launch-content wordcheck.mjs (2026-09-30).
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const HINT = 'render-check skipped: needs playwright-core and a local Chrome or Chromium. Install with `npm i -D playwright-core` (drives your installed Chrome), or `npm i -D playwright && npx playwright install chromium`.';
const BROWSER_PATHS = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];

async function loadChromium() {
  for (const from of [HERE, process.cwd()]) {
    const req = createRequire(path.join(from, 'noop.js'));
    for (const name of ['playwright-core', 'playwright']) {
      try {
        const mod = await import(pathToFileURL(req.resolve(name)).href);
        const chromium = mod.chromium || mod.default?.chromium;
        if (chromium) return chromium;
      } catch { /* not resolvable from here */ }
    }
  }
  return null;
}

async function launchBrowser(chromium) {
  const tries = [];
  if (process.env.CHROME_PATH) tries.push({ executablePath: process.env.CHROME_PATH });
  tries.push({ channel: 'chrome' }, {}); // installed Chrome, then Playwright's own Chromium if downloaded
  for (const p of BROWSER_PATHS) if (fs.existsSync(p)) tries.push({ executablePath: p });
  for (const opt of tries) {
    try { return await chromium.launch({ headless: true, ...opt }); } catch { /* try the next one */ }
  }
  return null;
}

function toUrl(target) {
  if (/^(https?|file):/i.test(target)) return target;
  if (fs.existsSync(target)) return pathToFileURL(path.resolve(target)).href;
  return null;
}

async function brokenWords(browser, url, width) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, locale: 'ko-KR', reducedMotion: 'reduce' });
  try {
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {}); // dev servers may never go idle
    await page.evaluate(async () => { await document.fonts.ready; });
    await page.waitForTimeout(300);
    await page.addStyleTag({ content: '*{transform:none!important;rotate:none!important;scale:none!important;translate:none!important}' });
    return await page.evaluate(() => {
      const H = /[\uAC00-\uD7A3]/;
      const out = [];
      const blocks = new Map();
      const blockOf = (el) => { while (el && getComputedStyle(el).display === 'inline') el = el.parentElement; return el; };
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) {
        if (n.nodeType === 1) {
          if (n.tagName === 'BR') { const k = blockOf(n.parentElement); if (blocks.has(k)) blocks.get(k).push({ c: '\n', q: null }); }
          continue;
        }
        if (!n.data.trim()) continue;
        const k = blockOf(n.parentElement);
        if (!blocks.has(k)) blocks.set(k, []);
        for (let i = 0; i < n.data.length; i++) {
          const r = document.createRange();
          r.setStart(n, i);
          r.setEnd(n, i + 1);
          blocks.get(k).push({ c: n.data[i], q: [...r.getClientRects()].find((x) => x.width > 0) || null });
        }
      }
      for (const [k, ch] of blocks) {
        for (let i = 0; i + 1 < ch.length; i++) {
          const a = ch[i];
          const z = ch[i + 1];
          if (!a.q || !z.q || !H.test(a.c) || !H.test(z.c)) continue;
          if (z.q.top > a.q.top + a.q.height * 0.6) {
            const t = ch.map((x) => x.c).join('');
            const cls = typeof k.className === 'string' && k.className.trim() ? `.${k.className.trim().split(/\s+/)[0]}` : '';
            out.push({ el: k.tagName.toLowerCase() + cls, at: `${t.slice(Math.max(0, i - 12), i + 1)} | ${t.slice(i + 1, i + 9)}`.replace(/\s+/g, ' ') });
          }
        }
      }
      return out;
    });
  } finally {
    await ctx.close();
  }
}

async function check(targets, widths) {
  const chromium = await loadChromium();
  const browser = chromium && (await launchBrowser(chromium));
  if (!browser) return null;
  const results = [];
  try {
    for (const target of targets) {
      const url = toUrl(target);
      if (!url) { results.push({ target, error: 'not a URL or an existing file' }); continue; }
      for (const width of widths) {
        try { results.push({ target, width, broken: await brokenWords(browser, url, width) }); } catch (e) { results.push({ target, width, error: String(e.message || e).split('\n')[0] }); }
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
  const widths = rest.filter((a) => /^\d+$/.test(a)).map(Number);
  let targets = rest.filter((a) => !/^\d+$/.test(a));
  const selfTest = flags.has('--self-test');
  if (flags.has('--help') || (!targets.length && !selfTest)) {
    console.log('usage: node render-check.mjs [--json] <url-or-html-file>... [width...]   (default widths 360 390 1440)\n       node render-check.mjs --self-test\nexit 1 when a Korean word breaks across lines; exit 0 (with an install hint) when no browser is available');
    return flags.has('--help') ? 0 : 2;
  }
  if (selfTest) targets = ['broken.html', 'clean.html'].map((f) => path.join(HERE, 'fixtures', 'render', f));
  const results = await check(targets, selfTest ? [360] : widths.length ? widths : [360, 390, 1440]);
  if (!results) { console.log(HINT); return 0; }
  if (selfTest) {
    const [broken, clean] = results;
    const ok = !broken.error && !clean.error && broken.broken.length > 0 && clean.broken.length === 0;
    console.log(`render self-test: broken.html ${broken.error || `${broken.broken.length} broken word(s)`}, clean.html ${clean.error || `${clean.broken.length} broken word(s)`} @360px`);
    console.log(ok ? 'render self-test: PASS' : 'render self-test: FAIL');
    return ok ? 0 : 1;
  }
  const total = results.reduce((n, r) => n + (r.broken ? r.broken.length : 0), 0);
  const failed = results.some((r) => r.error);
  if (flags.has('--json')) console.log(JSON.stringify({ results, total }, null, 2));
  else {
    for (const r of results) {
      if (r.error) { console.log(`${r.target}${r.width ? ` @${r.width}px` : ''}: error: ${r.error}`); continue; }
      console.log(`${r.target} @${r.width}px: ${r.broken.length} broken Korean word(s)`);
      for (const b of r.broken) console.log(`  ${b.el}  ${b.at}`);
    }
    console.log(`${total} broken Korean word(s) · exit ${total || failed ? 1 : 0}`);
  }
  return total || failed ? 1 : 0;
}

process.exitCode = await main(process.argv.slice(2));
