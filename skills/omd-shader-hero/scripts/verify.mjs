#!/usr/bin/env node
// Real-render proof for omd-shader-hero. Pattern inherited from the owner's tf-shaders `shoot.mjs`
// (real GPU, frames, reduced-motion pass, no-GPU pass), changed to:
//   - playwright-core with a fresh Playwright Chromium (never the user's own Chrome profile)
//   - GPU flags first (ANGLE/Metal on macOS) and an honest report of the renderer that drew
//   - measured contrast: hide the copy, sample the scene behind it across the whole timeline,
//     and compare against the text color (4.5:1 for the headline and the sub copy alike)
//   - two inks, counted: outside the knockouts every pixel of the canvas and of the CSS poster must
//     be the base ink or the brand ink
//   - poster before canvas, from the page's own clock (an init script records paint timing, LCP,
//     poster/canvas insertion and the first WebGL draw with performance.now())
//   - frame times: rAF intervals for 3 s while the field runs, median and p95
//
//   node verify.mjs <hero.html|url> <outDir> [--frames 48] [--seconds 12] [--shape warp|ripple|all] [--headed]
//
// Needs `playwright-core` resolvable from the cwd (or PW_CORE=<dir whose node_modules has it>) and a
// Playwright Chromium (`npx playwright-core install chromium`). Network is used for the font and
// the pinned Paper Shaders ESM on jsDelivr. Serve the page over http(s); file:// works in Chromium
// today but other module-import setups block it.
//
// Page contract (hero.html follows it): <html data-hero="shader|still|poster">, window.__hero
// ({ mount, tokens: { stops: [base, brand], text }, shape }), copy inside .hero-copy (h1 + p + a)
// on a knockout, small text in .hero small, scene in .hero-scene[data-shape], poster in .hero-poster.

import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const VALUE_FLAGS = ['--frames', '--seconds', '--shape'];
const flag = (name, dflt) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : dflt; };
const positional = args.filter((a, i) => !a.startsWith('--') && !VALUE_FLAGS.includes(args[i - 1]));
const [target, outDir = 'hero-verify'] = positional;
if (!target) { console.error('usage: node verify.mjs <hero.html|url> <outDir> [--frames 48] [--seconds 12] [--shape warp|ripple|all] [--headed]'); process.exit(2); }
const FRAMES = Number(flag('frames', 48));
const SECONDS = Number(flag('seconds', 12));
const SHAPE_ARG = flag('shape', 'all');
const SHAPES = SHAPE_ARG === 'all' ? ['warp', 'ripple'] : [SHAPE_ARG];
const HEADED = args.includes('--headed');
const STILL_FRAME = 8000; // hero.html's STILL_FRAME: the frame reduced motion shows and the poster is laid out after
const url = /^https?:|^file:/.test(target) ? target : pathToFileURL(path.resolve(target)).href;
mkdirSync(outDir, { recursive: true });

const require = createRequire(process.env.PW_CORE ? process.env.PW_CORE + '/' : path.join(process.cwd(), 'noop.js'));
const { chromium } = require('playwright-core');
const GPU_ARGS = ['--enable-gpu', '--ignore-gpu-blocklist', '--enable-unsafe-webgpu',
  ...(process.platform === 'darwin' ? ['--use-angle=metal'] : [])];
const NO_GL = () => {
  const orig = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (type, ...rest) { return /webgl/i.test(type) ? null : orig.call(this, type, ...rest); };
};
// Force a shape the way a page author would: set data-shape on .hero-scene as the parser inserts it,
// before the first paint and before the module runs.
const SET_SHAPE = (shape) => {
  new MutationObserver((_, mo) => {
    const el = document.querySelector('.hero-scene');
    if (el) { el.dataset.shape = shape; mo.disconnect(); }
  }).observe(document, { childList: true, subtree: true });
};
// The page's own clock: everything below is performance.now() in the page, not the test runner's time.
// Paint timing reports *presentation* time, and on a fast network the module can insert the (still
// transparent) canvas before that. So the gate is per rendered frame, sampled in the page's own rAF:
// the first frame the poster is on screen vs the first frame the canvas has drawn AND is not transparent.
const TIMELINE = () => {
  const T = (window.__heroTimeline = { paint: {}, lcp: null, posterInserted: null, canvasInserted: null, canvasReady: null, firstDraw: null,
    posterFrame: null, h1AtPosterFrame: null, canvasFrame: null, frames: 0 });
  const now = () => +performance.now().toFixed(1);
  const visible = (e) => { if (!e?.isConnected) return false; const s = getComputedStyle(e); return s.display !== 'none' && s.visibility !== 'hidden'; };
  const frame = (t) => {
    T.frames++;
    const scene = document.querySelector('.hero-scene'), h1 = document.querySelector('.hero h1');
    if (T.posterFrame === null && visible(document.querySelector('.hero-poster'))) {
      T.posterFrame = +t.toFixed(1);
      T.h1AtPosterFrame = visible(h1) && getComputedStyle(h1).opacity === '1';
    }
    if (T.canvasFrame === null && T.firstDraw !== null && scene?.querySelector('canvas') && +getComputedStyle(scene).opacity > 0.01) T.canvasFrame = +t.toFixed(1);
    if (T.canvasFrame === null && t < 8000) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  try { new PerformanceObserver((l) => { for (const e of l.getEntries()) T.paint[e.name] = +e.startTime.toFixed(1); }).observe({ type: 'paint', buffered: true }); } catch {}
  try {
    new PerformanceObserver((l) => {
      const e = l.getEntries().at(-1);
      if (e) T.lcp = { t: +e.startTime.toFixed(1), tag: e.element?.tagName ?? null, id: e.element?.id ?? null, size: e.size };
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  } catch {}
  new MutationObserver((recs) => {
    for (const r of recs) {
      if (r.type === 'attributes') {
        if (r.target.classList.contains('hero-scene') && r.target.classList.contains('is-ready')) T.canvasReady ??= now();
        continue;
      }
      for (const n of r.addedNodes) {
        if (n.nodeType !== 1) continue;
        if (T.posterInserted === null && (n.matches('.hero-poster') || n.querySelector('.hero-poster'))) T.posterInserted = now();
        if (T.canvasInserted === null && n.tagName === 'CANVAS' && n.closest('.hero-scene')) T.canvasInserted = now();
      }
    }
  }).observe(document, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  for (const C of [window.WebGL2RenderingContext, window.WebGLRenderingContext]) {
    if (!C) continue;
    const draw = C.prototype.drawArrays;
    C.prototype.drawArrays = function (...a) { if (T.firstDraw === null) T.firstDraw = now(); return draw.apply(this, a); };
  }
};

// Worst WCAG contrast between `text` and the screenshot pixels inside each rect.
async function worstContrast(page, png, rects, text) {
  return page.evaluate(async ([src, rects, text]) => {
    const img = new Image(); img.src = 'data:image/png;base64,' + src; await img.decode();
    const c = new OffscreenCanvas(img.width, img.height); const x = c.getContext('2d'); x.drawImage(img, 0, 0);
    const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    const L = (r, g, b) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    const t = [1, 3, 5].map((i) => parseInt(text.slice(i, i + 2), 16));
    const Lt = L(...t);
    return rects.map((r) => {
      const d = x.getImageData(Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)).data;
      let worst = Infinity;
      for (let k = 0; k < d.length; k += 16) { // every 4th pixel is plenty
        const Lb = L(d[k], d[k + 1], d[k + 2]);
        const ratio = (Math.max(Lt, Lb) + 0.05) / (Math.min(Lt, Lb) + 0.05);
        if (ratio < worst) worst = ratio;
      }
      return +worst.toFixed(2);
    });
  }, [png.toString('base64'), rects, text]);
}

// Share of pixels outside the knockouts that are neither ink (|dR|+|dG|+|dB| > 12 from both), and the
// share that is brand ink. A blend, a translucent mask or a scaled canvas shows up as "other".
async function inkCount(page, png, inks, skip) {
  return page.evaluate(async ([src, inks, skip]) => {
    const img = new Image(); img.src = 'data:image/png;base64,' + src; await img.decode();
    const c = new OffscreenCanvas(img.width, img.height); const x = c.getContext('2d'); x.drawImage(img, 0, 0);
    const d = x.getImageData(0, 0, img.width, img.height).data;
    const [a, b] = inks.map((h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)));
    const near = (k, q) => Math.abs(d[k] - q[0]) + Math.abs(d[k + 1] - q[1]) + Math.abs(d[k + 2] - q[2]) <= 12;
    let n = 0, other = 0, brand = 0;
    for (let y = 0; y < img.height; y++) for (let X = 0; X < img.width; X++) {
      if (skip.some((r) => X >= r.x && X < r.x + r.width && y >= r.y && y < r.y + r.height)) continue;
      const k = (y * img.width + X) * 4; n++;
      if (near(k, b)) brand++; else if (!near(k, a)) other++;
    }
    return { other: +(other / n).toFixed(5), brand: +(brand / n).toFixed(3) };
  }, [png.toString('base64'), inks, skip]);
}

async function diffRatio(page, a, b) {
  return page.evaluate(async ([a, b]) => {
    const load = async (s) => { const i = new Image(); i.src = 'data:image/png;base64,' + s; await i.decode(); return i; };
    const [ia, ib] = await Promise.all([load(a), load(b)]);
    const c = new OffscreenCanvas(ia.width, ia.height); const x = c.getContext('2d');
    x.drawImage(ia, 0, 0); const da = x.getImageData(0, 0, ia.width, ia.height).data;
    x.clearRect(0, 0, ia.width, ia.height); x.drawImage(ib, 0, 0); const db = x.getImageData(0, 0, ia.width, ia.height).data;
    let n = 0; for (let k = 0; k < da.length; k += 4) if (Math.abs(da[k] - db[k]) + Math.abs(da[k + 1] - db[k + 1]) + Math.abs(da[k + 2] - db[k + 2]) > 18) n++;
    return n / (da.length / 4);
  }, [a.toString('base64'), b.toString('base64')]);
}

// rAF intervals while the field runs at the page's own speed: the frame cadence a visitor gets.
const frameTimes = (page, ms) => page.evaluate((ms) => new Promise((resolve) => {
  const d = []; let last = null; const t0 = performance.now();
  const tick = (t) => {
    if (last !== null) d.push(t - last);
    last = t;
    if (t - t0 < ms) return requestAnimationFrame(tick);
    d.sort((a, b) => a - b);
    const q = (p) => +d[Math.min(d.length - 1, Math.floor(p * d.length))].toFixed(2);
    resolve({ seconds: ms / 1000, frames: d.length, median: q(0.5), p95: q(0.95), max: +d.at(-1).toFixed(2), over33ms: d.filter((v) => v > 33.4).length });
  };
  requestAnimationFrame(tick);
}), ms);

async function run(label, { shape, reduce = false, noGL = false, width = 1440, height = 900, frames = FRAMES, timing = false } = {}) {
  const browser = await chromium.launch({ headless: !HEADED, args: GPU_ARGS });
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: reduce ? 'reduce' : 'no-preference' });
  await ctx.addInitScript(TIMELINE);
  if (shape) await ctx.addInitScript(SET_SHAPE, shape);
  if (noGL) await ctx.addInitScript(NO_GL);
  const page = await ctx.newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.documentElement.dataset.hero, null, { timeout: 30000 });
  await page.waitForTimeout(900); // canvas fade-in
  const info = await page.evaluate(() => {
    const gl = document.createElement('canvas').getContext('webgl2');
    const ext = gl?.getExtension('WEBGL_debug_renderer_info');
    const h1 = document.querySelector('.hero h1');
    return {
      mode: document.documentElement.dataset.hero,
      shape: window.__hero.shape ?? document.querySelector('.hero-scene')?.dataset.shape ?? null,
      renderer: gl ? (ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : null,
      canvases: document.querySelectorAll('.hero-scene canvas').length,
      text: window.__hero.tokens.text,
      inks: window.__hero.tokens.stops,
      headlineOpacityAtLoad: getComputedStyle(h1).opacity,
      headline: h1.textContent,
      timeline: window.__heroTimeline,
    };
  });
  const rects = await page.evaluate(() => ['.hero h1', '.hero p'].map((s) => { const r = document.querySelector(s).getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; }));
  // Knockouts (the copy panel = .hero-copy::before box, and the small label) are base ink by design.
  const skip = await page.evaluate(() => {
    const box = (r) => ({ x: Math.floor(r.x) - 1, y: Math.floor(r.y) - 1, width: Math.ceil(r.width) + 2, height: Math.ceil(r.height) + 2 });
    const ko = document.querySelector('.hero-copy'); const cs = getComputedStyle(ko, '::before');
    const r = ko.getBoundingClientRect();
    const t = parseFloat(cs.top), l = parseFloat(cs.left), b = parseFloat(cs.bottom), rt = parseFloat(cs.right);
    return [box({ x: r.x + l, y: r.y + t, width: r.width - l - rt, height: r.height - t - b }), box(document.querySelector('.hero small').getBoundingClientRect())];
  });
  const hideCopy = (hidden) => page.evaluate((h) => document.querySelectorAll('.hero-copy h1, .hero-copy p, .hero-copy a').forEach((e) => { e.style.visibility = h ? 'hidden' : ''; }), hidden);
  const set = (ms) => page.evaluate((ms) => { const m = window.__hero.mount; if (m) { m.setSpeed(0); m.setFrame(ms); } }, ms);

  const result = { label, width, ...info, logs };
  if (timing && info.mode === 'shader') result.frameTimes = await frameTimes(page, 3000);

  let worstH1 = Infinity, worstP = Infinity, worstOther = 0;
  const n = info.mode === 'shader' ? frames : 1;
  for (let i = 0; i < n; i++) {
    if (info.mode === 'shader') { await set(Math.round((i / Math.max(1, n - 1)) * SECONDS * 1000)); await page.waitForTimeout(50); }
    await page.screenshot({ path: path.join(outDir, `${label}-frame-${String(i).padStart(3, '0')}.png`) });
    await hideCopy(true);
    const bare = await page.screenshot();
    await hideCopy(false);
    const [h, p] = await worstContrast(page, bare, rects, info.text);
    worstH1 = Math.min(worstH1, h); worstP = Math.min(worstP, p);
    if (info.mode !== 'poster' && (i % 8 === 0 || i === n - 1)) worstOther = Math.max(worstOther, (await inkCount(page, bare, info.inks, skip)).other);
  }
  result.worstContrast = { headline: worstH1, subcopy: worstP };
  if (info.mode !== 'poster') result.sceneOtherInk = worstOther;
  if (info.mode === 'shader') {
    await set(0); await page.waitForTimeout(60); const a = await page.screenshot();
    await set(SECONDS * 500); await page.waitForTimeout(60); const b = await page.screenshot();
    result.animates = await diffRatio(page, a, b);
  }
  // The poster on its own: hide the scene. In the no-WebGL pass this is simply what's on screen.
  await page.evaluate(() => { document.querySelector('.hero-scene').style.visibility = 'hidden'; });
  await page.waitForTimeout(60);
  await hideCopy(true);
  const poster = await page.screenshot({ path: path.join(outDir, `${label}-poster.png`) });
  await hideCopy(false);
  const posterInk = await inkCount(page, poster, info.inks, skip);
  result.posterOtherInk = posterInk.other;
  result.posterBrandShare = posterInk.brand;
  if (info.mode === 'shader') {
    await set(STILL_FRAME); await page.waitForTimeout(60);
    await page.evaluate(() => { document.querySelector('.hero-scene').style.visibility = ''; });
    await page.waitForTimeout(60); await hideCopy(true);
    const still = await page.screenshot();
    await hideCopy(false);
    result.sceneVsPoster = await diffRatio(page, still, poster); // >0: the canvas, not the CSS poster, is on screen
    result.sceneBrandShare = (await inkCount(page, still, info.inks, skip)).brand;
  }
  await browser.close();
  return result;
}
const report = { url, date: new Date().toISOString(), chromium: chromium.executablePath(), headless: !HEADED, shapes: SHAPES, passes: [] };
for (const shape of SHAPES) {
  report.passes.push(await run(`gpu-${shape}`, { shape, timing: true }));
  report.passes.push(await run(`mobile-${shape}`, { shape, width: 390, height: 844, frames: 12 }));
  report.passes.push(await run(`reduced-motion-${shape}`, { shape, reduce: true }));
  report.passes.push(await run(`no-webgl-${shape}`, { shape, noGL: true }));
}
const by = (kind) => report.passes.filter((p) => p.label.startsWith(kind + '-'));
const gpus = by('gpu');
const tl = (p) => p.timeline;
// Poster before canvas: the poster (and the headline at full opacity) is on screen in an earlier
// rendered frame than the first one where the canvas has drawn and is not transparent, the poster was
// in the DOM by first-paint, and the LCP element is the headline (the copy never waits on the shader).
const posterFirst = (p) => {
  const t = tl(p); const fp = t.paint['first-paint'];
  return t.posterFrame != null && t.h1AtPosterFrame === true
    && (t.canvasFrame == null || t.posterFrame < t.canvasFrame)
    && fp != null && t.posterInserted != null && t.posterInserted <= fp
    && t.lcp?.tag === 'H1';
};
report.checks = {
  shapeApplied: report.passes.every((p) => p.shape === p.label.split('-').at(-1)),
  rendered: gpus.every((p) => p.mode === 'shader' && p.canvases === 1 && (p.sceneVsPoster ?? 0) > 0.01),
  animates: gpus.every((p) => (p.animates ?? 0) > 0.01),
  headlineVisibleAtLoad: gpus.every((p) => p.headlineOpacityAtLoad === '1'),
  contrastSubcopy: report.passes.every((p) => p.worstContrast.subcopy >= 4.5),
  contrastHeadline: report.passes.every((p) => p.worstContrast.headline >= 4.5), // 4.5 even though the display size would allow 3
  twoInksScene: report.passes.filter((p) => p.sceneOtherInk != null).every((p) => p.sceneOtherInk <= 0.001),
  twoInksPoster: report.passes.every((p) => p.posterOtherInk <= 0.01),
  posterBeforeCanvas: report.passes.every(posterFirst),
  reducedMotionStill: by('reduced-motion').every((p) => p.mode === 'still'),
  noWebGLPoster: by('no-webgl').every((p) => p.mode === 'poster' && p.canvases === 0),
  softwareRenderer: /swiftshader|llvmpipe|software/i.test(gpus[0]?.renderer || ''),
};
writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
const summary = {
  renderer: gpus[0]?.renderer,
  ...report.checks,
  // one line per pass: worst contrast, non-ink share (scene/poster), page-clock ms, frame times
  perPass: Object.fromEntries(report.passes.map((p) => {
    const t = p.timeline;
    return [p.label, [
      `contrast h1 ${p.worstContrast.headline} p ${p.worstContrast.subcopy}`,
      `otherInk scene ${p.sceneOtherInk ?? '-'} poster ${p.posterOtherInk}`,
      `brand share scene ${p.sceneBrandShare ?? '-'} poster ${p.posterBrandShare}`,
      `first-paint ${t.paint['first-paint']} posterFrame ${t.posterFrame} canvasFrame ${t.canvasFrame ?? '-'} firstDraw ${t.firstDraw ?? '-'} lcp ${t.lcp?.tag}@${t.lcp?.t}`,
      ...(p.frameTimes ? [`rAF ${p.frameTimes.frames} frames / ${p.frameTimes.seconds}s: median ${p.frameTimes.median}ms p95 ${p.frameTimes.p95}ms max ${p.frameTimes.max}ms >33ms ${p.frameTimes.over33ms}`] : []),
    ].join(' | ')];
  })),
};
console.log(JSON.stringify(summary, null, 2));
const fail = Object.entries(report.checks).filter(([k, v]) => k !== 'softwareRenderer' && !v);
if (fail.length) { console.error('FAIL:', fail.map(([k]) => k).join(', ')); process.exit(1); }
