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
  const heading = page.locator('.ink').first();
  const box = await heading.boundingBox();
  const clip = { x: Math.max(0, box.x - 60), y: Math.max(0, box.y - 60), width: Math.min(1440, box.width + 120), height: box.height + 120 };
  const a11y = await page.evaluate(() => {
    const h = document.querySelector('.ink');
    const sel = getSelection(); const r = document.createRange(); r.selectNodeContents(h); sel.removeAllRanges(); sel.addRange(r);
    const selected = sel.toString().replace(/\s+/g, ' ').trim(); sel.removeAllRanges();
    const layer = h.querySelector('.ink-layer');
    return {
      headingText: h.textContent.replace(/\s+/g, ' ').trim(),
      selectedText: selected,
      layerAriaHidden: layer ? layer.getAttribute('aria-hidden') : 'no-layer',
      layerPointerEvents: layer ? getComputedStyle(layer).pointerEvents : 'no-layer',
      canvases: document.querySelectorAll('.ink-layer canvas').length,
      staticFallback: document.querySelectorAll('.ink.ink-static').length,
      states: [...document.querySelectorAll('.ink')].map((e) => e.dataset.inkState || null),
    };
  });
  const result = { label, renderer, a11y, logs };

  if (!noGL && a11y.canvases > 0) {
    // Deterministic frames: freeze the clock and step it, so the GIF is the effect, not screenshot jitter.
    const duration = await page.evaluate(() => +document.querySelector('.ink').dataset.inkDuration || 2.6);
    const set = (ms) => page.evaluate((ms) => window.__ink.handles.forEach((h) => { h?.mount.setSpeed(0); h?.mount.setFrame(ms); }), ms);
    const frames = reduce ? 1 : FRAMES;
    for (let i = 0; i < frames; i++) {
      const ms = reduce ? duration * 1000 : Math.round((i / (frames - 1)) * duration * 1000);
      if (!reduce) await set(ms);
      await page.waitForTimeout(60);
      await page.screenshot({ path: path.join(outDir, `${label}-frame-${String(i).padStart(3, '0')}.png`), clip });
    }
    await set(duration * 1000); await page.waitForTimeout(80);
    const on = await page.screenshot({ clip });
    await page.evaluate(() => document.querySelectorAll('.ink-layer').forEach((l) => { l.style.visibility = 'hidden'; }));
    await page.waitForTimeout(80);
    const off = await page.screenshot({ clip });
    await page.evaluate(() => document.querySelectorAll('.ink-layer').forEach((l) => { l.style.visibility = ''; }));
    if (!reduce) { await set(0); await page.waitForTimeout(80); }
    const start = await page.screenshot({ clip });
    result.shaderPixelsChanged = await diffRatio(page, on, off);   // >0: the shader drew something
    result.startVsDry = reduce ? null : await diffRatio(page, start, on); // >0: it animates
    await page.screenshot({ path: path.join(outDir, `${label}-full-start.png`) });
    if (!reduce) { await set(duration * 1000); await page.waitForTimeout(80); }
    await page.screenshot({ path: path.join(outDir, `${label}-full.png`) });
  } else {
    await page.screenshot({ path: path.join(outDir, `${label}-full.png`) });
  }
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
const textOk = (p) => p.a11y.selectedText === p.a11y.headingText && p.a11y.headingText.length > 0;
report.checks = {
  rendered: (gpu.shaderPixelsChanged ?? 0) > 0.002,
  animates: (gpu.startVsDry ?? 0) > 0.002,
  textSelectableAllPasses: report.passes.every(textOk),
  layerDecorative: gpu.a11y.layerAriaHidden === 'true' && gpu.a11y.layerPointerEvents === 'none',
  reducedMotionStill: still.a11y.states.every((s) => s === 'still'),
  noWebGLFallback: nogl.a11y.canvases === 0 && nogl.a11y.staticFallback > 0,
  softwareRenderer: /swiftshader|llvmpipe|software/i.test(gpu.renderer || ''),
};
writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ renderer: gpu.renderer, ...report.checks, shaderPixelsChanged: gpu.shaderPixelsChanged, startVsDry: gpu.startVsDry }, null, 2));
const fail = Object.entries(report.checks).filter(([k, v]) => k !== 'softwareRenderer' && !v);
if (fail.length) { console.error('FAIL:', fail.map(([k]) => k).join(', ')); process.exit(1); }
