#!/usr/bin/env node
/**
 * Shoot a service's web screens for the screen archive: one route file in, stills and element lists out.
 *
 *   node tools/screen-archive/web-shoot.mjs tools/screen-archive/routes/<slug>.json [--out DIR] [--only key,key] [--widths 1440,390] [--browser headless|headed] [--mask-photos]
 *
 * For every screen of the route file and every width it loads the page with no window (headless Chromium, a fresh
 * profile, signed out; the browser's own user agent at 1440 and a phone's at 390, see PHONE_UA), scrolls once so lazy content loads, and writes
 *   <out>/<width>/<key>.png            the first viewport
 *   <out>/<width>/<key>.full.png       the whole page, height capped at 12000 px
 *   <out>/<width>/<key>.elements.json  links, buttons, fields, headings, images: type, label, href, computed style (colour,
 *                                      background, border, radius, font), x, y, w, h (CSS px, page coordinates)
 *   <out>/walk.json                    one record per shot: requested and final URL, HTTP status, title, viewport, user agent,
 *                                      blocked or not, overlays that cover the viewport, steps taken, time
 *
 * Rules built in (docs/handoff/2026-11-20-code-mode.md, step 2):
 *   - A site that refuses the headless browser (403, a challenge page) is recorded as blocked. Nothing here changes the
 *     user agent or hides automation to get past it. The owner allowed a window for such sites (2026-11-20):
 *     --browser headed runs the installed Chrome, still with a fresh profile and signed out.
 *   - Signed out only. A step never clicks something whose text is on the never list (buy, pay, order, agree, sign up,
 *     follow, delete, send money), nor anything on the route file's own "never".
 *   - Stills are not committed or uploaded: the default output is ~/.omd-workers/screens/web/, and an output folder
 *     inside a git work tree is refused.
 *
 * Route file: { slug, name, reference, platform: "mobile" | "web" | "both", origin, browser?: "headed", never: [], close?: [css of close buttons, tried on every screen], screens: [
 *   { key, type, title, url, note?, close?: [css of close buttons], steps?: [ {fill: {selector, text}} | {press: "Enter"} |
 *     {click: {selector} | {text}} | {wait: ms} ] } ] }
 * Instead of "url" a screen may have "from": { "screen": key of an earlier screen, "href": regex } (see below).
 * "type" is one of the words of tools/phone-recorder/taxonomy.json, so web and phone screens filter the same way.
 */
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const args = process.argv.slice(2);
const flag = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : null);
const routeFile = args.find((a) => a.endsWith('.json'));
if (!routeFile) { console.error('usage: web-shoot.mjs <routes.json> [--out DIR] [--only key,key] [--widths 1440,390]'); process.exit(2); }
const route = JSON.parse(fs.readFileSync(routeFile, 'utf8'));
const day = new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' }).replaceAll('-', '');
const OUT = path.resolve(flag('--out') ?? path.join(os.homedir(), '.omd-workers/screens/web', route.slug + '-' + day));
const ONLY = flag('--only')?.split(',');
const WIDTHS = (flag('--widths') ?? '1440,390').split(',').map(Number);
const BROWSER = flag('--browser') ?? route.browser ?? 'headless';   // a route file may say "browser": "headed" for a site that refuses headless
if (BROWSER !== 'headless' && BROWSER !== 'headed') { console.error('--browser must be "headless" or "headed"'); process.exit(2); }
const FULL_CAP = 12000;
const NEVER = /구매|결제|주문하기|바로\s*구매|동의|가입하기|회원가입|팔로우|삭제|송금|보내기|신청하기|buy|checkout|pay|agree|sign\s*up|follow|delete/i;

// Stills never land in a repository.
fs.mkdirSync(OUT, { recursive: true });
try {
  execFileSync('git', ['-C', OUT, 'rev-parse', '--is-inside-work-tree'], { stdio: 'pipe' });
  console.error('refused: ' + OUT + ' is inside a git work tree; stills are kept outside repositories'); process.exit(2);
} catch { /* not a work tree: fine */ }

// playwright-core lives under web/node_modules; a worktree may not have it, so fall back to the main checkout.
function loadPlaywright() {
  const roots = [REPO];
  try { roots.push(path.resolve(execFileSync('git', ['-C', REPO, 'rev-parse', '--git-common-dir'], { encoding: 'utf8' }).trim(), '..')); } catch { /* no git */ }
  for (const r of roots) {
    try { return createRequire(path.join(r, 'web/package.json'))('playwright-core'); } catch { /* next */ }
  }
  console.error('playwright-core not found under web/node_modules (run npm install in web/)'); process.exit(2);
}
const { chromium, devices } = loadPlaywright();
// Many Korean services choose between their desktop and mobile site by user agent, not by width: at 390 with a
// desktop user agent Kurly, Olive Young and Musinsa serve the desktop page shrunk, which no phone user sees
// (2026-11-21). So the narrow pass identifies as a phone (Playwright's iPhone descriptor); the wide pass keeps the
// browser's own user agent. This is to ask for the mobile site, not to get past a refusal: a 403 is still recorded.
const PHONE_UA = devices['iPhone 15']?.userAgent ?? devices['iPhone 13'].userAgent;

const taxonomy = JSON.parse(fs.readFileSync(path.join(REPO, 'tools/phone-recorder/taxonomy.json'), 'utf8'));
const knownTypes = new Set(taxonomy.screens.flatMap((s) => [s.ko, ...(s.also ?? [])]));
for (const s of route.screens) if (!knownTypes.has(s.type)) console.error('warning: type "' + s.type + '" (' + s.key + ') is not in taxonomy.json');

const BLOCK_TEXT = /access denied|request blocked|could not be satisfied|attention required|just a moment|forbidden|captcha|잠시만 기다|접속 정보를 확인|일시적으로 서비스를 이용하실 수 없/i;

function pageFacts() {
  const vw = innerWidth, vh = innerHeight;
  const vis = (el) => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 1 && r.height > 1 && cs.visibility !== 'hidden' && cs.display !== 'none' && Number(cs.opacity) > 0.05; };
  const label = (el) => (el.getAttribute('aria-label') || el.getAttribute('alt') || el.getAttribute('placeholder') || el.innerText || el.getAttribute('title') || '').replace(/\s+/g, ' ').trim().slice(0, 80);
  const kind = (el) => { const t = el.tagName.toLowerCase(); const role = el.getAttribute('role'); if (role) return role; return { a: 'link', button: 'button', input: 'field', textarea: 'field', select: 'select', img: 'image', h1: 'heading1', h2: 'heading2', h3: 'heading3', nav: 'nav', header: 'header', footer: 'footer' }[t] ?? t; };
  const elements = [];
  for (const el of document.querySelectorAll('a[href],button,input:not([type=hidden]),textarea,select,[role=button],[role=tab],[role=dialog],[role=search],h1,h2,h3,img,nav,header,footer')) {
    if (elements.length >= 500) break;
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const px = (v) => (v && v !== '0px' ? v : undefined);
    // What the element is drawn with, as the browser computed it: the raw material for matching a screen to the
    // service's measured tokens (link-tokens.mjs). Transparent backgrounds and zero-width borders are left out.
    const style = {
      color: cs.color,
      ...(cs.backgroundColor !== 'rgba(0, 0, 0, 0)' ? { background: cs.backgroundColor } : {}),
      ...(px(cs.borderTopWidth) && cs.borderTopStyle !== 'none' ? { border: cs.borderTopColor } : {}),
      ...(px(cs.borderTopLeftRadius) ? { radius: cs.borderTopLeftRadius } : {}),
      fontSize: cs.fontSize, fontWeight: cs.fontWeight, fontFamily: cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(),
    };
    elements.push({ type: kind(el), label: label(el), ...(el.tagName === 'A' ? { href: String(el.href).slice(0, 200) } : {}), style, x: Math.round(r.left + scrollX), y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height) });
  }
  // Layers that sit over the page: fixed or sticky, wide, and tall enough to matter.
  const overlays = [];
  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el);
    if (cs.position !== 'fixed' && cs.position !== 'sticky') continue;
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect();
    const share = (Math.max(0, Math.min(r.right, vw) - Math.max(r.left, 0)) * Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0))) / (vw * vh);
    // chars tells a sheet or dialog (little text) from a page-sized layout wrapper that happens to be fixed (all of it)
    if (share >= 0.12) overlays.push({ position: cs.position, share: Math.round(share * 100) / 100, y: Math.round(r.top), h: Math.round(r.height), chars: (el.innerText || '').length, text: (el.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 70) });
  }
  const text = document.body ? document.body.innerText : '';
  const bodyStyle = getComputedStyle(document.body);
  const page = { background: bodyStyle.backgroundColor, color: bodyStyle.color, fontFamily: bodyStyle.fontFamily.split(',')[0].replace(/["']/g, '').trim(), fontSize: bodyStyle.fontSize };
  return { page, title: document.title, textLength: text.length, textHead: text.replace(/\s+/g, ' ').slice(0, 160), height: document.documentElement.scrollHeight, images: document.images.length, lang: document.documentElement.lang || null, elements, overlays: overlays.slice(0, 6) };
}


/**
 * Runs in the page, after the page's facts were read and before the stills are taken: people's names and their own
 * pictures leave the screen. The owner asked for this on 2026-11-22 ("닉네임같은건 js로 바꿔서 보여줘도"), so that a
 * screen full of users' posts can be shown without showing who posted.
 *   names:  selectors of elements whose whole text is a person's name (a profile link). Every such text is collected,
 *           then replaced wherever it stands on the page (text nodes, alt, aria-label, title) with nameWith.
 *   images: selectors of people's profile pictures. Each becomes a flat block of the same size.
 *   photos: selectors of the pictures people uploaded in a post or a listing. Masked only with --mask-photos, so the
 *           two levels can be compared; the caller merges them into images.
 *   nameHref: a regular expression a profile link's href must match to count as a person (optional).
 * It changes what is drawn, never the layout: no element is added or removed. It stays on the page as an observer until
 * the next navigation; the walk record takes the counts as they stand after the stills.
 */
function maskPage(mask) {
  const nameWith = mask.nameWith || '이웃';
  const hrefOnly = mask.nameHref ? new RegExp(mask.nameHref) : null;   // which profile links are people, when the selector cannot say
  const BLANK = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  const names = new Set();       // every name met on this page so far
  const resolved = new Set();    // profile links whose name is already known
  const total = { names: 0, texts: 0, partial: 0, partialTexts: [], attrs: 0, images: 0 };
  const apply = () => {
    const byTarget = new Map();
    for (const sel of mask.names || []) for (const el of document.querySelectorAll(sel)) {
      const s = (el.innerText || el.textContent || '').trim();
      if (!s || s === nameWith || s.length > 24 || /\n/.test(s)) continue;
      const href = el.getAttribute('href');
      if (href && hrefOnly && !hrefOnly.test(href)) continue;   // "/users/sign_in" is not a person
      if (href && resolved.has(href)) continue;                  // its other links ("이웃의 판매 물품") are not new names
      // One person, several links ("milk", "milk의 판매 물품"): the shortest text of a target is the name itself.
      // An element that is not a link is its own person: keyed by its text, or one selector would yield one name.
      const k = href || 'text:' + s;
      if (!byTarget.has(k) || s.length < byTarget.get(k).length) byTarget.set(k, s);
    }
    for (const [k, s] of byTarget) { names.add(s); if (!k.startsWith('text:')) resolved.add(k); }
    total.names = names.size;
    const list = [...names].sort((x, y) => y.length - x.length);
    // A one-character name is replaced only where it is the whole text: inside a longer text it would eat ordinary words.
    const swap = (s) => { let out = s; for (const n of list) if (n.length > 1 ? out.includes(n) : out.trim() === n) out = out.split(n).join(nameWith); return out; };
    if (list.length) {
      // Text the page does not draw (inline data in a script, a style sheet) is left alone.
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (/^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE)$/.test(n.parentElement?.tagName ?? '') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT) });
      // partial: the name stood inside a longer text ("milk의 판매 물품"). Right for a person's own line, wrong if the
      // name happens to be an ordinary word, so a screen with partial > 0 is one to look at before it is shown.
      // partialTexts keeps those texts as they read after the swap (the name is no longer in them).
      for (let n = walker.nextNode(); n; n = walker.nextNode()) { const v = swap(n.nodeValue); if (v !== n.nodeValue) { if (v.trim() !== nameWith) { total.partial++; if (total.partialTexts.length < 12) total.partialTexts.push(v.trim().slice(0, 60)); } n.nodeValue = v; total.texts++; } }
      for (const el of document.querySelectorAll('[alt],[aria-label],[title]')) for (const at of ['alt', 'aria-label', 'title']) {
        const v = el.getAttribute(at); if (v) { const w = swap(v); if (w !== v) { el.setAttribute(at, w); total.attrs++; } }
      }
    }
    // A masked picture no longer matches its selector (the selectors read src), so one the page loads again is met again.
    for (const sel of mask.images || []) for (const img of document.querySelectorAll(sel)) {
      if (img.tagName !== 'IMG') continue;
      if (!img.dataset.omdMasked) {
        const r = img.getBoundingClientRect();
        if (r.width && r.height) { img.style.width = r.width + 'px'; img.style.height = r.height + 'px'; }
        img.dataset.omdMasked = '1';
      }
      img.removeAttribute('srcset'); img.removeAttribute('sizes');
      for (const s of img.parentElement && img.parentElement.tagName === 'PICTURE' ? img.parentElement.querySelectorAll('source') : []) s.removeAttribute('srcset');
      img.src = BLANK; img.style.background = mask.imageFill || '#e5e6eb'; img.style.objectFit = 'cover';
      img.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,.75)';   // tiles that touched each other stay countable
      total.images++;
    }
  };
  apply();
  // The page keeps drawing after this call (a carousel turns, a lazy picture arrives, the full-page still scrolls): the
  // observer runs before the next paint, so nothing a later render brings is drawn unmasked.
  if (window.__omdMaskObserver) window.__omdMaskObserver.disconnect();
  window.__omdMaskObserver = new MutationObserver(apply);
  window.__omdMaskObserver.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['src', 'srcset', 'href'] });
  window.__omdMask = total;
  return { ...total, partialTexts: [...total.partialTexts] };
}

async function runStep(page, step, never) {
  if (step.wait) { await page.waitForTimeout(step.wait); return 'wait ' + step.wait; }
  if (step.press) { await page.keyboard.press(step.press); await page.waitForTimeout(600); return 'press ' + step.press; }
  if (step.fill) { await page.locator(step.fill.selector).first().fill(step.fill.text, { timeout: 8000 }); return 'fill ' + step.fill.selector; }
  if (step.click) {
    const loc = step.click.selector ? page.locator(step.click.selector).first() : page.getByText(step.click.text, { exact: true }).first();
    const words = ((await loc.innerText({ timeout: 8000 }).catch(() => '')) + ' ' + ((await loc.getAttribute('aria-label').catch(() => '')) ?? '')).trim();
    if (NEVER.test(words) || never.some((w) => words.includes(w))) throw new Error('refused click: "' + words.slice(0, 40) + '" is on the never list');
    await loc.click({ timeout: 8000 });
    await page.waitForTimeout(800);
    return 'click ' + (step.click.selector ?? step.click.text) + ' ("' + words.slice(0, 30) + '")';
  }
  throw new Error('unknown step ' + JSON.stringify(step));
}

// headed: the installed Chrome with a window and a fresh temporary profile (never the owner's profile or logins), for
// a site that refuses the headless browser. It opens a window, so it runs only when the owner has said so.
const browser = await chromium.launch(BROWSER === 'headed' ? { headless: false, channel: 'chrome' } : { headless: true });
const records = [];
const screens = route.screens.filter((s) => !ONLY || ONLY.includes(s.key));
for (const width of WIDTHS) {
  const mobile = width < 600;
  const viewport = { width, height: mobile ? 844 : 900 };
  fs.mkdirSync(path.join(OUT, String(width)), { recursive: true });
  // One context per width: cookies a site sets on the first screen (a region, a closed banner) carry to the next, as for a visitor.
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: mobile ? 2 : 1, isMobile: mobile, hasTouch: mobile, ...(mobile ? { userAgent: PHONE_UA } : {}), locale: 'ko-KR', timezoneId: 'Asia/Seoul' });
  const page = await ctx.newPage();
  const ua = await page.evaluate(() => navigator.userAgent);
  const hrefs = new Map();
  for (const s of screens) {
    // A screen either names its address or takes the first link matching a pattern on an earlier screen of this
    // run ("from": {"screen": "best", "href": "/goods/\\d+"}), so a detail screen follows whatever is listed today.
    let target = s.url;
    if (s.from) { const rx = new RegExp(s.from.href); target = (hrefs.get(s.from.screen) ?? []).find((h) => rx.test(h)); }
    if (!target) {
      records.push({ key: s.key, type: s.type, title: s.title, note: s.note ?? null, width, viewport, userAgent: ua, requested: null, shotAt: new Date().toISOString(), steps: [], errors: ['no link matching ' + s.from?.href + ' on screen ' + s.from?.screen] });
      console.log([width, s.key.padEnd(16), 'SKIPPED: no link matching ' + s.from?.href].join('  '));
      continue;
    }
    const url = new URL(target, route.origin).href;
    const rec = { key: s.key, type: s.type, title: s.title, note: s.note ?? null, state: s.state ?? null, patterns: s.patterns ?? [], width, viewport, userAgent: ua, requested: url, shotAt: new Date().toISOString(), steps: [], errors: [] };
    const base = path.join(OUT, String(width), s.key);
    try {
      const resp = await page.goto(url, { waitUntil: 'load', timeout: 40000 }).catch(async (e) => { rec.errors.push('load: ' + String(e.message).split('\n')[0]); return null; });
      rec.status = resp ? resp.status() : null;
      await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => {});
      await page.waitForTimeout(1200);
      for (const sel of s.noClose ? [] : [...(route.close ?? []), ...(s.close ?? [])]) {   // "noClose": keep what covers the screen (the sheet itself is the screen)
        const b = page.locator(sel).first();
        if (await b.isVisible().catch(() => false)) { await b.click({ timeout: 3000 }).catch(() => {}); rec.steps.push('closed ' + sel); await page.waitForTimeout(400); }
      }
      for (const step of s.steps ?? []) rec.steps.push(await runStep(page, step, route.never ?? []));
      if (s.steps?.length) { await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => {}); await page.waitForTimeout(1200); }
      // One pass down the page so lazy images and sections load, then back to the top.
      const total = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < Math.min(total, FULL_CAP); y += viewport.height) { await page.evaluate((yy) => scrollTo(0, yy), y); await page.waitForTimeout(220); }
      await page.evaluate(() => scrollTo(0, 0));
      await page.waitForTimeout(900);
      const facts = await page.evaluate(pageFacts);
      hrefs.set(s.key, facts.elements.filter((e) => e.href).map((e) => e.href));
      rec.final = page.url();
      Object.assign(rec, { pageTitle: facts.title, textLength: facts.textLength, textHead: facts.textHead, height: facts.height, images: facts.images, lang: facts.lang, overlays: facts.overlays, elementCount: facts.elements.length });
      // Refused is not the same as absent: 404 and 410 are the service's own "nothing here" page (a screen worth
      // keeping when the route asked for it, a wrong address in the route file otherwise). Refusals are 401, 403,
      // 407, 429, 451, any 5xx, or a challenge page served with a 200.
      rec.missing = rec.status === 404 || rec.status === 410;
      rec.blocked = (rec.status !== null && rec.status >= 400 && !rec.missing) || (!rec.missing && facts.textLength < 900 && BLOCK_TEXT.test(facts.title + ' ' + facts.textHead));
      rec.redirected = new URL(rec.final).pathname !== new URL(url).pathname || new URL(rec.final).host !== new URL(url).host;
      // "mask" on the route or on a screen: names and people's own pictures leave the stills (the facts above are the page as served).
      const mask = s.mask === false ? null : (s.mask ?? route.mask ?? null);
      if (mask && !rec.blocked) {
        const level = args.includes('--mask-photos') ? 'names, profile pictures and uploaded photos' : 'names and profile pictures';
        rec.masked = { level, ...(await page.evaluate(maskPage, { ...mask, images: [...(mask.images ?? []), ...(args.includes('--mask-photos') ? mask.photos ?? [] : [])] })) };
        await page.waitForTimeout(250);
      }
      await page.screenshot({ path: base + '.png' });
      if (!rec.blocked) {
        await page.screenshot({ path: base + '.full.png', fullPage: true, clip: { x: 0, y: 0, width, height: Math.min(facts.height, FULL_CAP) } }).catch((e) => rec.errors.push('full: ' + String(e.message).split('\n')[0]));
        fs.writeFileSync(base + '.elements.json', JSON.stringify({ url: rec.final, width, page: facts.page, elements: facts.elements }, null, 1));
      }
      if (rec.masked) Object.assign(rec.masked, await page.evaluate(() => window.__omdMask ?? {}).catch(() => ({})));   // what later renders added
    } catch (e) {
      rec.errors.push(String(e.message).split('\n')[0]);
      await page.screenshot({ path: base + '.png' }).catch(() => {});
    }
    records.push(rec);
    console.log([width, s.key.padEnd(16), rec.blocked ? 'BLOCKED' : rec.missing ? (s.type === '오류' ? 'ok (404 page)' : 'MISSING') : 'ok', rec.status, rec.redirected ? '→ ' + rec.final : '', rec.overlays?.length ? 'overlays ' + rec.overlays.length : '', rec.errors.join(' | ')].join('  '));
  }
  // A page can hold a context open (a map, an unload prompt): closing gets a few seconds, and the walk is written either way.
  await Promise.race([ctx.close(), new Promise((r) => setTimeout(r, 5000))]);
}

const walk = { slug: route.slug, name: route.name, reference: route.reference, platform: route.platform, origin: route.origin, routeFile: path.relative(REPO, path.resolve(routeFile)), shot: day, browser: (BROWSER === 'headed' ? 'Chrome with a window (playwright-core, channel chrome)' : 'chromium headless (playwright-core)') + ', fresh profile, signed out; own user agent at 1440, a phone user agent at 390', records };
// --only re-shoots some screens: keep the other records of an earlier run in the same folder.
const walkFile = path.join(OUT, 'walk.json');
if (fs.existsSync(walkFile)) {   // a second run into the same folder (some screens, or one width) replaces what it shot and keeps the rest
  const fresh = new Set(records.map((r) => r.width + '/' + r.key));
  const order = new Map(route.screens.map((s, i) => [s.key, i]));
  walk.records = [...JSON.parse(fs.readFileSync(walkFile, 'utf8')).records.filter((r) => !fresh.has(r.width + '/' + r.key) && order.has(r.key)), ...records]
    .sort((a, b) => b.width - a.width || (order.get(a.key) ?? 99) - (order.get(b.key) ?? 99));
}
fs.writeFileSync(walkFile, JSON.stringify(walk, null, 1));
const blocked = records.filter((r) => r.blocked).length;
console.log('\n' + records.length + ' shots, ' + blocked + ' blocked → ' + OUT);
await Promise.race([browser.close(), new Promise((r) => setTimeout(r, 8000))]);
process.exit(0);
