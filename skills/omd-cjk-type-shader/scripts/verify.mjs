#!/usr/bin/env node
// Real-render proof for omd-cjk-type-shader. Pattern inherited from the owner's tf-shaders
// `shoot.mjs` (headed Chrome + WebGPU flag, frames, reduced-motion pass, no-GPU pass), changed to:
//   - playwright-core with a fresh Playwright Chromium (never the user's own Chrome profile)
//   - GPU flags first (ANGLE/Metal on macOS), and an honest report of which renderer drew the frames
//   - pixel evidence instead of eyeballing: shader-on vs shader-off diff inside the heading box
//
//   node verify.mjs <page.html|url> <outDir> [--frames 36] [--headed]
//
// Needs `playwright-core` resolvable from the cwd (or PW_CORE=/abs/path/to/playwright-core) and a
// Playwright Chromium (`npx playwright-core install chromium`). Network is used for fonts + the
// pinned Paper Shaders ESM on jsDelivr.
//
// Page contract (demo.html follows it): headings carry .ink; inkBleed() sets
// <html data-ink-ready="1">, exposes window.__ink.handles[i].mount (Paper ShaderMount), and marks
// .ink-static when WebGL2 is missing.

import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : dflt; };
const positional = args.filter((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--') && args[i - 1] !== '--headed'));
const [target, outDir = 'ink-verify'] = positional;
if (!target) { console.error('usage: node verify.mjs <page.html|url> <outDir> [--frames 36] [--headed]'); process.exit(2); }
const FRAMES = Number(flag('frames', 36));
const HEADED = args.includes('--headed');
const url = /^https?:|^file:/.test(target) ? target : pathToFileURL(path.resolve(target)).href;
mkdirSync(outDir, { recursive: true });

const require = createRequire(process.env.PW_CORE ? process.env.PW_CORE + '/' : path.join(process.cwd(), 'noop.js'));
const { chromium } = require('playwright-core');

const GPU_ARGS = ['--enable-gpu', '--ignore-gpu-blocklist', '--enable-unsafe-webgpu',
  ...(process.platform === 'darwin' ? ['--use-angle=metal'] : [])];
const NO_GL = () => {
  const orig = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (type, ...rest) {
    return /webgl/i.test(type) ? null : orig.call(this, type, ...rest);
  };
};

// Count pixels that differ between two PNG screenshots inside a clip, in the page (no PNG deps).
async function diffRatio(page, a, b) {
  return page.evaluate(async ([a, b]) => {
    const load = async (src) => { const i = new Image(); i.src = 'data:image/png;base64,' + src; await i.decode(); return i; };
    const [ia, ib] = await Promise.all([load(a), load(b)]);
    const c = new OffscreenCanvas(ia.width, ia.height); const x = c.getContext('2d');
    x.drawImage(ia, 0, 0); const da = x.getImageData(0, 0, ia.width, ia.height).data;
    x.clearRect(0, 0, ia.width, ia.height); x.drawImage(ib, 0, 0); const db = x.getImageData(0, 0, ia.width, ia.height).data;
    let n = 0; for (let k = 0; k < da.length; k += 4) if (Math.abs(da[k] - db[k]) + Math.abs(da[k + 1] - db[k + 1]) + Math.abs(da[k + 2] - db[k + 2]) > 18) n++;
    return n / (da.length / 4);
  }, [a.toString('base64'), b.toString('base64')]);
}

async function run(label, { reduce = false, noGL = false, launchArgs = GPU_ARGS } = {}) {
  const browser = await chromium.launch({ headless: !HEADED, args: launchArgs });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, reducedMotion: reduce ? 'reduce' : 'no-preference' });
  if (noGL) await ctx.addInitScript(NO_GL);
  const page = await ctx.newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.documentElement.dataset.inkReady === '1', null, { timeout: 30000 });
  const renderer = await page.evaluate(() => {
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) return null;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
  });
  const result = { label, renderer, logs, grounds: {} };
  // One heading per ground: the sumi variant on the light page and the 금니 variant on a dark section.
  for (const ground of ['light', 'dark']) {
    const sel = `.ink[data-ink-ground="${ground}"]`;
    if (!(await page.locator(sel).count())) continue;
    const heading = page.locator(sel).first();
    await heading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(120);
    const box = await heading.boundingBox();
    const clip = { x: Math.max(0, box.x - 60), y: Math.max(0, box.y - 60), width: Math.min(1440 - Math.max(0, box.x - 60), box.width + 120), height: Math.min(900 - Math.max(0, box.y - 60), box.height + 120) };
    const a11y = await page.evaluate((sel) => {
      const h = document.querySelector(sel);
      const s = getSelection(); const r = document.createRange(); r.selectNodeContents(h); s.removeAllRanges(); s.addRange(r);
      const selected = s.toString().replace(/\s+/g, ' ').trim(); s.removeAllRanges();
      const layer = h.querySelector('.ink-layer');
      return {
        headingText: h.textContent.replace(/\s+/g, ' ').trim(),
        selectedText: selected,
        layerAriaHidden: layer ? layer.getAttribute('aria-hidden') : 'no-layer',
        layerPointerEvents: layer ? getComputedStyle(layer).pointerEvents : 'no-layer',
        canvases: h.querySelectorAll('.ink-layer canvas').length,
        staticFallback: h.classList.contains('ink-static'),
        state: h.dataset.inkState || null,
      };
    }, sel);
    const g = { a11y };
    if (!noGL && a11y.canvases > 0) {
      const idx = await page.evaluate((sel) => [...document.querySelectorAll('.ink')].indexOf(document.querySelector(sel)), sel);
      const duration = await page.evaluate((sel) => +document.querySelector(sel).dataset.inkDuration || 2.6, sel);
      const set = (ms) => page.evaluate(([i, ms]) => { const h = window.__ink.handles[i]; h?.mount.setSpeed(0); h?.mount.setFrame(ms); }, [idx, ms]);
      const layerVis = (v) => page.evaluate(([sel, v]) => { document.querySelector(sel).querySelector('.ink-layer').style.visibility = v ? '' : 'hidden'; }, [sel, v]);
      // Glyph mask for the legibility check: text on vs text transparent, both without the layer.
      await layerVis(false);
      const withText = await page.screenshot({ clip });
      await page.evaluate((sel) => { document.querySelector(sel).querySelector('.ink-text').style.color = 'transparent'; }, sel);
      await page.waitForTimeout(60);
      const noText = await page.screenshot({ clip });
      await page.evaluate((sel) => { document.querySelector(sel).querySelector('.ink-text').style.color = ''; }, sel);
      await layerVis(true);
      const frames = reduce ? 1 : FRAMES;
      const shots = [];
      for (let i = 0; i < frames; i++) {
        const ms = reduce ? duration * 1000 : Math.round((i / (frames - 1)) * duration * 1000);
        if (!reduce) await set(ms);
        await page.waitForTimeout(60);
        const shot = await page.screenshot({ path: path.join(outDir, `${label}-${ground}-frame-${String(i).padStart(3, '0')}.png`), clip });
        if (i % 6 === 0 || i === frames - 1) shots.push(shot);
      }
      // Legibility: contrast of each glyph pixel (as drawn, with the effect) against the paper behind it
      // (the no-text, no-layer shot), 10th percentile so anti-aliased edges don't decide it, worst frame.
      g.legibilityP10 = Math.min(...(await Promise.all(shots.map((f) => page.evaluate(async ([a, b, f]) => {
        const load = async (s) => { const i = new Image(); i.src = 'data:image/png;base64,' + s; await i.decode(); return i; };
        const [ia, ib, ifr] = await Promise.all([load(a), load(b), load(f)]);
        const c = new OffscreenCanvas(ia.width, ia.height); const x = c.getContext('2d');
        const px = (im) => { x.clearRect(0, 0, ia.width, ia.height); x.drawImage(im, 0, 0); return x.getImageData(0, 0, ia.width, ia.height).data; };
        const da = px(ia), db = px(ib), df = px(ifr);
        const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
        const L = (d, k) => 0.2126 * lin(d[k]) + 0.7152 * lin(d[k + 1]) + 0.0722 * lin(d[k + 2]);
        const rs = [];
        for (let k = 0; k < da.length; k += 4) {
          if (Math.abs(da[k] - db[k]) + Math.abs(da[k + 1] - db[k + 1]) + Math.abs(da[k + 2] - db[k + 2]) < 90) continue; // glyph core only
          const lt = L(df, k), lg = L(db, k);
          rs.push((Math.max(lt, lg) + 0.05) / (Math.min(lt, lg) + 0.05));
        }
        rs.sort((p, q) => p - q);
        return rs.length ? +rs[Math.floor(rs.length * 0.1)].toFixed(2) : 0;
      }, [withText.toString('base64'), noText.toString('base64'), f.toString('base64')])))));
      await set(duration * 1000); await page.waitForTimeout(80);
      const on = await page.screenshot({ clip });
      await layerVis(false); await page.waitForTimeout(80);
      const off = await page.screenshot({ clip });
      await layerVis(true);
      if (!reduce) { await set(0); await page.waitForTimeout(80); }
      const start = await page.screenshot({ clip });
      g.shaderPixelsChanged = await diffRatio(page, on, off);   // >0: the shader drew something
      g.startVsDry = reduce ? null : await diffRatio(page, start, on); // >0: it animates
      if (!reduce) { await set(duration * 1000); await page.waitForTimeout(80); }
    }
    result.grounds[ground] = g;
  }
  await page.screenshot({ path: path.join(outDir, `${label}-full.png`), fullPage: true });
  await browser.close();
  return result;
}

const report = {
  url,
  date: new Date().toISOString(),
  chromium: chromium.executablePath(),
  headless: !HEADED,
  passes: [],
};
report.passes.push(await run('gpu'));
report.passes.push(await run('reduced-motion', { reduce: true }));
report.passes.push(await run('no-webgl', { noGL: true }));

const [gpu, still, nogl] = report.passes;
const each = (p, fn) => Object.values(p.grounds).length > 0 && Object.values(p.grounds).every(fn);
const textOk = (g) => g.a11y.selectedText === g.a11y.headingText && g.a11y.headingText.length > 0;
report.checks = {
  bothGrounds: ['light', 'dark'].every((k) => k in gpu.grounds),
  rendered: each(gpu, (g) => (g.shaderPixelsChanged ?? 0) > 0.002),
  animates: each(gpu, (g) => (g.startVsDry ?? 0) > 0.002),
  // Display headings are WCAG large text: 3:1 for the glyph cores in every frame of the effect.
  legibleEveryFrame: each(gpu, (g) => (g.legibilityP10 ?? 0) >= 3),
  textSelectableAllPasses: report.passes.every((p) => each(p, textOk)),
  layerDecorative: each(gpu, (g) => g.a11y.layerAriaHidden === 'true' && g.a11y.layerPointerEvents === 'none'),
  reducedMotionStill: each(still, (g) => g.a11y.state === 'still'),
  noWebGLFallback: each(nogl, (g) => g.a11y.canvases === 0 && g.a11y.staticFallback),
  softwareRenderer: /swiftshader|llvmpipe|software/i.test(gpu.renderer || ''),
};
writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ renderer: gpu.renderer, ...report.checks, grounds: Object.fromEntries(Object.entries(gpu.grounds).map(([k, g]) => [k, { shaderPixelsChanged: g.shaderPixelsChanged, startVsDry: g.startVsDry, legibilityP10: g.legibilityP10 }])) }, null, 2));
const fail = Object.entries(report.checks).filter(([k, v]) => k !== 'softwareRenderer' && !v);
if (fail.length) { console.error('FAIL:', fail.map(([k]) => k).join(', ')); process.exit(1); }
