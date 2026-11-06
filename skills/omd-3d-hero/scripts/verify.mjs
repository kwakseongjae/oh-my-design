#!/usr/bin/env node
// omd-3d-hero real-GPU proof. Same four passes as omd-shader-hero/scripts/verify.mjs, plus two checks a
// 3D scene needs: the poster is on screen before the canvas, and frame time on the GPU pass.
//
//   node verify.mjs <hero.html|url> <outDir> [--steps 8] [--headed]
//   node verify.mjs <hero.html|url> --bake poster.webp      # three branch: still of the live scene at t=0
//
// Needs playwright-core (`npm i -D playwright-core && npx playwright-core install chromium`).
// Set PW_CORE=<dir containing node_modules/playwright-core> to reuse an existing install.
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import path from 'node:path';

const args = process.argv.slice(2);
const flag = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : d; };
const positional = args.filter((a, i) => !a.startsWith('--') && !['--steps', '--bake', '--encode'].includes(args[i - 1]));
const [target, outDir = 'hero-verify'] = positional;
const ENCODE = flag('encode'); // --encode in.png out.webp: the browser's WebP encoder, so no libwebp is needed
if (ENCODE) {
  const { chromium } = createRequire(process.env.PW_CORE ? process.env.PW_CORE + '/' : path.join(process.cwd(), 'noop.js'))('playwright-core');
  const b = await chromium.launch(); const p = await b.newPage();
  const data = await p.evaluate(async (src) => {
    const img = new Image(); img.src = 'data:image/png;base64,' + src; await img.decode();
    const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; c.getContext('2d').drawImage(img, 0, 0);
    return c.toDataURL('image/webp', 0.86);
  }, readFileSync(ENCODE).toString('base64'));
  writeFileSync(positional[0], Buffer.from(data.split(',')[1], 'base64'));
  await b.close();
  console.log(JSON.stringify({ encoded: positional[0], kib: Math.round(readFileSync(positional[0]).length / 1024) }));
  process.exit(0);
}
if (!target) { console.error('usage: node verify.mjs <hero.html|url> <outDir> [--steps 8] | --bake poster.webp | --encode in.png out.webp'); process.exit(2); }
const STEPS = Number(flag('steps', 8));
const BAKE = flag('bake');
const HEADED = args.includes('--headed');
// ES modules don't load over file:// (CORS), so a local file is served over http from its parent's parent
// (the example imports ../engines/three/scene.js).
let url = target, server;
if (!/^https?:/.test(target)) {
  const abs = path.resolve(target.replace(/^file:\/\//, ''));
  const root = path.dirname(path.dirname(abs));
  const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.webp': 'image/webp', '.png': 'image/png', '.webm': 'video/webm', '.mp4': 'video/mp4', '.css': 'text/css' };
  server = createServer((req, res) => {
    const f = path.join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if (!f.startsWith(root) || !existsSync(f)) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'content-type': TYPES[path.extname(f)] ?? 'application/octet-stream' });
    res.end(readFileSync(f));
  });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  url = `http://127.0.0.1:${server.address().port}/${path.relative(root, abs).split(path.sep).join('/')}`;
}
process.on('exit', () => server?.close());

const require = createRequire(process.env.PW_CORE ? process.env.PW_CORE + '/' : path.join(process.cwd(), 'noop.js'));
const { chromium } = require('playwright-core');
const GPU_ARGS = ['--enable-gpu', '--ignore-gpu-blocklist', ...(process.platform === 'darwin' ? ['--use-angle=metal'] : [])];
const NO_GL = () => {
  const orig = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (t, ...r) { return /webgl/i.test(t) ? null : orig.call(this, t, ...r); };
};

async function open({ width = 1440, height = 900, reduce = false, noGL = false, dpr = 1 } = {}) {
  const browser = await chromium.launch({ headless: !HEADED, args: GPU_ARGS });
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: dpr, reducedMotion: reduce ? 'reduce' : 'no-preference' });
  if (noGL) await ctx.addInitScript(NO_GL);
  // Record when the poster and the live layer first appear, from the page's own clock.
  await ctx.addInitScript(() => {
    window.__omd3dTimeline = {};
    const mark = () => {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      const t = window.__omd3dTimeline;
      if (t.poster == null && getComputedStyle(hero).backgroundImage.includes('url(')) t.poster = performance.now();
      if (t.live == null && 'live' in hero.dataset) t.live = performance.now();
      if (t.live == null) requestAnimationFrame(mark);
    };
    document.addEventListener('DOMContentLoaded', mark);
  });
  const page = await ctx.newPage();
  const logs = [];
  page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__omd3dState, null, { timeout: 30000 });
  return { browser, page, logs };
}

const hideCopy = (page, h) => page.evaluate((h) => document.querySelectorAll('.hero .copy *').forEach((e) => { e.style.visibility = h ? 'hidden' : ''; }), h);
// Measure where the glyphs are: the union of the text's line boxes, not the block (which spans the column).
const rectsOf = (page) => page.evaluate(() => ['.hero h1', '.hero .copy p'].map((s) => {
  const range = document.createRange(); range.selectNodeContents(document.querySelector(s));
  const rs = [...range.getClientRects()].filter((r) => r.width > 1);
  const x = Math.min(...rs.map((r) => r.x)), y = Math.min(...rs.map((r) => r.y));
  return { x, y, width: Math.max(...rs.map((r) => r.right)) - x, height: Math.max(...rs.map((r) => r.bottom)) - y };
}));
const textColor = (page) => page.evaluate(() => { const c = getComputedStyle(document.querySelector('.hero h1')).color.match(/\d+/g).map(Number); return '#' + c.slice(0, 3).map((v) => v.toString(16).padStart(2, '0')).join(''); });

async function worstContrast(page, png, rects, text) {
  return page.evaluate(async ([src, rects, text]) => {
    const img = new Image(); img.src = 'data:image/png;base64,' + src; await img.decode();
    const c = new OffscreenCanvas(img.width, img.height); const x = c.getContext('2d'); x.drawImage(img, 0, 0);
    const s = img.width / innerWidth;
    const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    const L = (r, g, b) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    const Lt = L(...[1, 3, 5].map((i) => parseInt(text.slice(i, i + 2), 16)));
    return rects.map((r) => {
      const d = x.getImageData(Math.round(r.x * s), Math.round(r.y * s), Math.max(1, Math.round(r.width * s)), Math.max(1, Math.round(r.height * s))).data;
      let worst = Infinity;
      for (let k = 0; k < d.length; k += 16) { const Lb = L(d[k], d[k + 1], d[k + 2]); worst = Math.min(worst, (Math.max(Lt, Lb) + 0.05) / (Math.min(Lt, Lb) + 0.05)); }
      return +worst.toFixed(2);
    });
  }, [png.toString('base64'), rects, text]);
}

async function diff(page, a, b) {
  return page.evaluate(async ([a, b]) => {
    const load = async (s) => { const i = new Image(); i.src = 'data:image/png;base64,' + s; await i.decode(); return i; };
    const [ia, ib] = await Promise.all([load(a), load(b)]);
    const c = new OffscreenCanvas(ia.width, ia.height); const x = c.getContext('2d');
    x.drawImage(ia, 0, 0); const da = x.getImageData(0, 0, ia.width, ia.height).data;
    x.clearRect(0, 0, ia.width, ia.height); x.drawImage(ib, 0, 0); const db = x.getImageData(0, 0, ia.width, ia.height).data;
    let n = 0; for (let k = 0; k < da.length; k += 4) if (Math.abs(da[k] - db[k]) + Math.abs(da[k + 1] - db[k + 1]) + Math.abs(da[k + 2] - db[k + 2]) > 18) n++;
    return +(n / (da.length / 4)).toFixed(4);
  }, [a.toString('base64'), b.toString('base64')]);
}

// ---------- bake: a still of the live three.js scene, encoded by the browser as WebP ----------
if (BAKE) {
  // 1600x900 CSS px at 1.2x = a 1920x1080 still: 16:9, the framing the scene is composed for (the hero caps at 900px tall).
  const { browser, page, logs } = await open({ width: 1600, height: 900, dpr: 1.2 });
  await page.waitForFunction(() => window.__omd3d && 'live' in document.querySelector('.hero').dataset, null, { timeout: 30000 });
  await page.evaluate(() => window.__omd3d.setTime(0));
  const webp = await page.evaluate(() => {
    const c = document.querySelector('.hero > canvas');
    window.__omd3d.setTime(0); // render into the drawing buffer right before reading it
    return c.toDataURL('image/webp', 0.86);
  });
  writeFileSync(BAKE, Buffer.from(webp.split(',')[1], 'base64'));
  console.log(JSON.stringify({ baked: BAKE, renderer: await page.evaluate(() => window.__omd3d.renderer), logs }));
  await browser.close();
  server?.close();
  process.exit(0);
}

mkdirSync(outDir, { recursive: true });

async function pass(label, opts) {
  const { browser, page, logs } = await open(opts);
  await page.waitForTimeout(1200);
  const state = await page.evaluate(() => ({ ...window.__omd3dState, live: 'live' in document.querySelector('.hero').dataset, layers: document.querySelectorAll('.hero > canvas, .hero > video').length, h1Opacity: getComputedStyle(document.querySelector('.hero h1')).opacity, timeline: window.__omd3dTimeline }));
  const rects = await rectsOf(page), text = await textColor(page);
  const live = state.engine === 'three' && !!(await page.evaluate(() => window.__omd3d));
  const r = { label, ...state, text, logs };
  if (live) r.renderer = await page.evaluate(() => window.__omd3d.renderer);
  let wh = Infinity, wp = Infinity;
  const steps = live ? STEPS : 1;
  for (let i = 0; i < steps; i++) {
    if (live) { await page.evaluate((t) => window.__omd3d.setTime(t), (i / steps) * 8); await page.waitForTimeout(40); }
    await page.screenshot({ path: path.join(outDir, `${label}-${String(i).padStart(2, '0')}.png`) });
    await hideCopy(page, true); const bare = await page.screenshot(); await hideCopy(page, false);
    const [h, p] = await worstContrast(page, bare, rects, text);
    wh = Math.min(wh, h); wp = Math.min(wp, p);
  }
  r.worstContrast = { headline: wh, subcopy: wp };
  if (live) {
    await page.evaluate(() => window.__omd3d.setTime(0)); await page.waitForTimeout(40); const a = await page.screenshot();
    await page.evaluate(() => window.__omd3d.setTime(2)); await page.waitForTimeout(40); const b = await page.screenshot();
    r.animates = await diff(page, a, b);
    // Frame time with the real clock: 3 s of rAF deltas from the scene's own loop.
    await page.evaluate(() => { window.__omd3d.release(); window.__omd3d.frameTimes.length = 0; });
    await page.waitForTimeout(3000);
    const ft = await page.evaluate(() => [...window.__omd3d.frameTimes].slice(1).sort((x, y) => x - y));
    const q = (p) => +ft[Math.min(ft.length - 1, Math.floor(p * ft.length))].toFixed(2);
    r.frameMs = { n: ft.length, median: q(0.5), p95: q(0.95) };
  }
  await browser.close();
  return r;
}

const report = { url, date: new Date().toISOString(), chromium: chromium.executablePath(), passes: [] };
report.passes.push(await pass('gpu', { width: 1440, height: 900 }));
report.passes.push(await pass('mobile', { width: 390, height: 844, dpr: 2 }));
report.passes.push(await pass('reduced-motion', { width: 1440, height: 900, reduce: true }));
report.passes.push(await pass('no-webgl', { width: 1440, height: 900, noGL: true }));
const [gpu, mobile, still, nogl] = report.passes;
const tl = gpu.timeline || {};
report.checks = {
  liveOnDesktop: gpu.mounted && gpu.live && gpu.layers === 1,
  animates: gpu.engine !== 'three' || (gpu.animates ?? 0) > 0.002,
  posterBeforeLive: tl.poster != null && (tl.live == null || tl.poster <= tl.live),
  headlineVisibleAtLoad: gpu.h1Opacity === '1',
  contrastHeadline: report.passes.every((p) => p.worstContrast.headline >= 4.5),
  contrastSubcopy: report.passes.every((p) => p.worstContrast.subcopy >= 4.5),
  mobilePosterOnly: mobile.layers === 0,
  reducedMotionPosterOnly: still.layers === 0,
  noWebGLPosterOnly: gpu.engine !== 'three' || nogl.layers === 0,
  softwareRenderer: /swiftshader|llvmpipe|software/i.test(gpu.renderer || ''),
};
writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ engine: gpu.engine, renderer: gpu.renderer, frameMs: gpu.frameMs, timeline: tl, ...report.checks, contrast: Object.fromEntries(report.passes.map((p) => [p.label, p.worstContrast])) }, null, 2));
const fail = Object.entries(report.checks).filter(([k, v]) => k !== 'softwareRenderer' && !v);
server?.close();
if (fail.length) { console.error('FAIL:', fail.map(([k]) => k).join(', ')); process.exit(1); }
