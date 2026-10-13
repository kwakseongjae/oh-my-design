#!/usr/bin/env node
// Real-render proof for omd-shader-hero. Pattern inherited from the owner's tf-shaders `shoot.mjs`
// (real GPU, frames, reduced-motion pass, no-GPU pass), changed to:
//   - playwright-core with a fresh Playwright Chromium (never the user's own Chrome profile)
//   - GPU flags first (ANGLE/Metal on macOS) and an honest report of the renderer that drew
//   - measured contrast: hide the copy, sample the scene behind it across the whole timeline,
//     and compare against the text color (sub copy needs 4.5:1, the display headline 3:1)
//
//   node verify.mjs <hero.html|url> <outDir> [--frames 48] [--seconds 12] [--headed]
//
// Needs `playwright-core` resolvable from the cwd (or PW_CORE=/abs/path/to/playwright-core) and a
// Playwright Chromium (`npx playwright-core install chromium`). Network is used for the font and
// the pinned Paper Shaders ESM on jsDelivr.
//
// Page contract (hero.html follows it): <html data-hero="shader|still|poster">, window.__hero.mount
// (Paper ShaderMount or null), copy inside .hero-copy (h1 + p), scene in .hero-scene.

import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : dflt; };
const positional = args.filter((a, i) => !a.startsWith('--') && !['--frames', '--seconds'].includes(args[i - 1]));
const [target, outDir = 'hero-verify'] = positional;
if (!target) { console.error('usage: node verify.mjs <hero.html|url> <outDir> [--frames 48] [--seconds 12] [--headed]'); process.exit(2); }
const FRAMES = Number(flag('frames', 48));
const SECONDS = Number(flag('seconds', 12));
const HEADED = args.includes('--headed');
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

async function run(label, { reduce = false, noGL = false, width = 1440, height = 900, frames = FRAMES } = {}) {
  const browser = await chromium.launch({ headless: !HEADED, args: GPU_ARGS });
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: reduce ? 'reduce' : 'no-preference' });
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
      renderer: gl ? (ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : null,
      canvases: document.querySelectorAll('.hero-scene canvas').length,
      text: window.__hero.tokens.text,
      headlineOpacityAtLoad: getComputedStyle(h1).opacity,
      headline: h1.textContent,
    };
  });
  const rects = await page.evaluate(() => ['.hero h1', '.hero p'].map((s) => { const r = document.querySelector(s).getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; }));
  const hideCopy = (hidden) => page.evaluate((h) => document.querySelectorAll('.hero-copy h1, .hero-copy p, .hero-copy a').forEach((e) => { e.style.visibility = h ? 'hidden' : ''; }), hidden);
  const set = (ms) => page.evaluate((ms) => { const m = window.__hero.mount; if (m) { m.setSpeed(0); m.setFrame(ms); } }, ms);

  const result = { label, width, ...info, logs };
  let worstH1 = Infinity, worstP = Infinity;
  const n = info.mode === 'shader' ? frames : 1;
  for (let i = 0; i < n; i++) {
    if (info.mode === 'shader') { await set(Math.round((i / Math.max(1, n - 1)) * SECONDS * 1000)); await page.waitForTimeout(50); }
    await page.screenshot({ path: path.join(outDir, `${label}-frame-${String(i).padStart(3, '0')}.png`) });
    await hideCopy(true);
    const bare = await page.screenshot();
    await hideCopy(false);
    const [h, p] = await worstContrast(page, bare, rects, info.text);
    worstH1 = Math.min(worstH1, h); worstP = Math.min(worstP, p);
  }
  result.worstContrast = { headline: worstH1, subcopy: worstP };
  if (info.mode === 'shader') {
    await set(0); await page.waitForTimeout(60); const a = await page.screenshot();
    await set(SECONDS * 500); await page.waitForTimeout(60); const b = await page.screenshot();
    result.animates = await diffRatio(page, a, b);
    await page.evaluate(() => { document.querySelector('.hero-scene').style.visibility = 'hidden'; });
    await page.waitForTimeout(60); const poster = await page.screenshot();
    result.sceneVsPoster = await diffRatio(page, b, poster); // >0: the canvas, not the CSS poster, is on screen
  }
  await browser.close();
  return result;
}

const report = { url, date: new Date().toISOString(), chromium: chromium.executablePath(), headless: !HEADED, passes: [] };
report.passes.push(await run('gpu'));
report.passes.push(await run('mobile', { width: 390, height: 844, frames: 12 }));
report.passes.push(await run('reduced-motion', { reduce: true }));
report.passes.push(await run('no-webgl', { noGL: true }));
const [gpu, mobile, still, nogl] = report.passes;
report.checks = {
  rendered: gpu.mode === 'shader' && gpu.canvases === 1 && (gpu.sceneVsPoster ?? 0) > 0.01,
  animates: (gpu.animates ?? 0) > 0.01,
  headlineVisibleAtLoad: gpu.headlineOpacityAtLoad === '1',
  contrastSubcopy: report.passes.every((p) => p.worstContrast.subcopy >= 4.5),
  contrastHeadline: report.passes.every((p) => p.worstContrast.headline >= 3),
  reducedMotionStill: still.mode === 'still',
  noWebGLPoster: nogl.mode === 'poster' && nogl.canvases === 0,
  softwareRenderer: /swiftshader|llvmpipe|software/i.test(gpu.renderer || ''),
};
writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ renderer: gpu.renderer, ...report.checks, contrast: Object.fromEntries(report.passes.map((p) => [p.label, p.worstContrast])) }, null, 2));
const fail = Object.entries(report.checks).filter(([k, v]) => k !== 'softwareRenderer' && !v);
if (fail.length) { console.error('FAIL:', fail.map(([k]) => k).join(', ')); process.exit(1); }
