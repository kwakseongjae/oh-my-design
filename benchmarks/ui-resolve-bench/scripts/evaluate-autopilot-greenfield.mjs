#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '../../..');
const webRequire = createRequire(join(repoRoot, 'web/package.json'));
let playwright;
let axePath;
try { playwright = require('playwright-core'); } catch { playwright = webRequire('playwright-core'); }
try { axePath = require.resolve('axe-core/axe.min.js'); } catch { axePath = webRequire.resolve('axe-core/axe.min.js'); }
const { chromium } = playwright;

function args(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith('--')) continue;
    out[argv[i].slice(2)] = argv[i + 1];
    i += 1;
  }
  return out;
}

function chromeExecutable() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ].filter(Boolean);
  for (const candidate of candidates) if (existsSync(candidate)) return candidate;
  for (const command of ['google-chrome', 'chromium', 'chromium-browser']) {
    try { return execFileSync('which', [command], { encoding: 'utf8' }).trim(); } catch { /* continue */ }
  }
  throw new Error('Chrome/Chromium executable not found; set CHROME_PATH');
}

function readJson(file) {
  return JSON.parse(readFileSync(file, 'utf8'));
}

function shaFile(file) {
  return createHash('sha256').update(readFileSync(file)).digest('hex');
}

export function scoreGreenfieldEvidence(evidence) {
  const groups = {
    design_system: {
      points: 20,
      pass: evidence.design_system.proof_pass
        && evidence.design_system.final_state === 'HANDOFF'
        && evidence.design_system.hashes_bound
        && evidence.design_system.provenance_complete,
    },
    functionality: {
      points: 25,
      pass: evidence.functionality.dialog_opens
        && evidence.functionality.initial_focus
        && evidence.functionality.empty_submit_error
        && evidence.functionality.valid_submit_closes
        && evidence.functionality.success_feedback,
    },
    responsive: {
      points: 20,
      pass: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.visible_control_min_height_px >= 44),
    },
    accessibility: {
      points: 20,
      pass: evidence.viewports.every((item) => item.axe_serious_or_critical === 0)
        && evidence.runtime.semantic_main && evidence.runtime.h1_count === 1,
    },
    fidelity_and_honesty: {
      points: 10,
      pass: evidence.runtime.unknown_claims.length === 0
        && evidence.runtime.design_action_color_conforms
        && evidence.runtime.sections_11_13_honest,
    },
    runtime: {
      points: 5,
      pass: evidence.runtime.console_errors.length === 0
        && evidence.runtime.page_errors.length === 0
        && evidence.runtime.external_requests.length === 0,
    },
  };
  const score = Object.values(groups).reduce((sum, group) => sum + (group.pass ? group.points : 0), 0);
  return {
    schema_version: '0.1',
    methodology_epoch: 'autopilot-greenfield-objective-v1',
    deterministic_max: 100,
    score,
    groups,
    critical_pass: Object.values(groups).every((group) => group.pass),
    ui_resolved: Object.values(groups).every((group) => group.pass),
  };
}

const invoked = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invoked) {
  const parsed = args(process.argv.slice(2));
  const workspace = resolve(parsed.workspace || '.');
  const runDir = resolve(parsed['run-dir'] || join(workspace, '.omd/runs/run-greenfield-family-planner'));
  const outPath = resolve(parsed.out || join(runDir, 'greenfield-score.json'));
  if (existsSync(outPath)) throw new Error(`exclusive output already exists: ${outPath}`);
  const entry = join(workspace, 'index.html');
  if (!existsSync(entry)) throw new Error('index.html is missing');

  const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
  const server = createServer((request, response) => {
    const raw = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
    const relative = raw === '/' ? 'index.html' : normalize(raw).replace(/^[/\\]+/, '');
    const file = resolve(workspace, relative);
    if (file !== workspace && !file.startsWith(`${workspace}/`)) return response.writeHead(403).end('Forbidden');
    try {
      response.writeHead(200, { 'content-type': mime[extname(file)] || 'application/octet-stream' });
      response.end(readFileSync(file));
    } catch { response.writeHead(404).end('Not found'); }
  });
  await new Promise((done) => server.listen(0, '127.0.0.1', done));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({
    executablePath: chromeExecutable(), headless: true,
    args: ['--disable-background-networking', '--disable-component-update', '--no-first-run'],
  });
  const screenshots = join(dirname(outPath), 'greenfield-screenshots');
  mkdirSync(screenshots, { recursive: true });
  const allConsoleErrors = [];
  const allPageErrors = [];
  const allExternalRequests = [];
  const viewports = [];
  let functionality = null;
  let runtimeObservation = null;
  try {
    for (const viewport of [
      { id: 'desktop-1440', width: 1440, height: 900, zoom: 1 },
      { id: 'mobile-390', width: 390, height: 844, zoom: 1 },
      { id: 'mobile-320', width: 320, height: 720, zoom: 1 },
      { id: 'desktop-1440-zoom-200', width: 1440, height: 900, zoom: 2 },
    ]) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height }, locale: 'en-US',
        reducedMotion: 'reduce', colorScheme: 'light', deviceScaleFactor: 1,
      });
      const page = await context.newPage();
      const consoleErrors = [];
      const pageErrors = [];
      const externalRequests = [];
      page.on('console', (message) => { if (message.type() === 'error') consoleErrors.push(message.text()); });
      page.on('pageerror', (error) => pageErrors.push(error.message));
      await page.route('**/*', async (route) => {
        const url = new URL(route.request().url());
        if (url.origin !== origin && !['data:', 'blob:'].includes(url.protocol)) {
          externalRequests.push(url.href);
          await route.abort('blockedbyclient');
        } else await route.continue();
      });
      await page.goto(origin, { waitUntil: 'load' });
      if (viewport.zoom !== 1) await page.evaluate((zoom) => { document.documentElement.style.zoom = String(zoom); }, viewport.zoom);
      await page.addScriptTag({ path: axePath });
      const axe = await page.evaluate(async () => {
        const result = await globalThis.axe.run(document, { resultTypes: ['violations'] });
        return result.violations.map((item) => ({ id: item.id, impact: item.impact, nodes: item.nodes.length }));
      });
      const geometry = await page.evaluate(() => {
        const visible = [...document.querySelectorAll('button,a,input')].filter((element) => {
          const rect = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
        });
        return {
          document_overflow_px: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
          visible_control_min_height_px: visible.length ? Math.min(...visible.map((element) => element.getBoundingClientRect().height)) : 0,
          semantic_main: document.querySelectorAll('main').length === 1,
          h1_count: document.querySelectorAll('h1').length,
          action_background: getComputedStyle(document.querySelector('#start')).backgroundColor,
        };
      });
      await page.screenshot({ path: join(screenshots, `${viewport.id}.png`), fullPage: true });
      viewports.push({
        ...viewport, ...geometry,
        axe_serious_or_critical: axe.filter((item) => ['serious', 'critical'].includes(item.impact)).reduce((sum, item) => sum + item.nodes, 0),
        axe_violations: axe,
      });
      allConsoleErrors.push(...consoleErrors);
      allPageErrors.push(...pageErrors);
      allExternalRequests.push(...externalRequests);
      if (viewport.id === 'desktop-1440') {
        await page.click('#start');
        const dialogOpens = await page.locator('#meal-dialog').evaluate((dialog) => dialog.open);
        const initialFocus = await page.evaluate(() => document.activeElement?.id === 'meal-name');
        await page.click('#save');
        const emptySubmitError = await page.locator('#meal-error').textContent() === 'Enter a meal name.';
        await page.fill('#meal-name', 'Friday noodles');
        await page.click('#save');
        functionality = {
          dialog_opens: dialogOpens,
          initial_focus: initialFocus,
          empty_submit_error: emptySubmitError,
          valid_submit_closes: !(await page.locator('#meal-dialog').evaluate((dialog) => dialog.open)),
          success_feedback: await page.locator('#toast').isVisible(),
        };
        runtimeObservation = geometry;
      }
      await context.close();
    }
  } finally {
    await browser.close();
    await new Promise((done) => server.close(done));
  }

  const systemProofPath = join(runDir, 'system/proof.json');
  const systemProof = existsSync(systemProofPath) ? readJson(systemProofPath) : null;
  const finalProofPath = join(runDir, 'proof.json');
  const finalProof = existsSync(finalProofPath) ? readJson(finalProofPath) : null;
  const designPath = join(workspace, 'DESIGN.md');
  const provenancePath = join(runDir, 'system/provenance.json');
  const coveragePath = join(runDir, 'system/coverage.json');
  const missionState = existsSync(join(runDir, 'mission-state.json')) ? readJson(join(runDir, 'mission-state.json')) : null;
  const provenance = existsSync(provenancePath) ? readJson(provenancePath) : null;
  const designText = existsSync(designPath) ? readFileSync(designPath, 'utf8') : '';
  const htmlText = readFileSync(entry, 'utf8');
  const hashBindings = {
    design_system_design: existsSync(designPath) && systemProof?.design_md_sha256 === shaFile(designPath),
    design_system_provenance: existsSync(provenancePath) && systemProof?.provenance_sha256 === shaFile(provenancePath),
    design_system_coverage: existsSync(coveragePath) && systemProof?.coverage_sha256 === shaFile(coveragePath),
    final_design: existsSync(designPath) && finalProof?.design_md_sha256 === shaFile(designPath),
    final_product: finalProof?.product_sha256 === shaFile(entry),
  };
  const evidence = {
    design_system: {
      proof_pass: systemProof?.pass === true,
      final_state: missionState?.state || null,
      hashes_bound: Object.values(hashBindings).every(Boolean),
      hash_bindings: hashBindings,
      provenance_complete: Array.isArray(provenance?.decisions) && provenance.decisions.length > 0,
    },
    functionality: functionality || {},
    viewports,
    runtime: {
      semantic_main: runtimeObservation?.semantic_main === true,
      h1_count: runtimeObservation?.h1_count || 0,
      unknown_claims: [
        /\$\s?\d/.test(htmlText) ? 'price' : null,
        /testimonial|★★★★★|trusted by \d/i.test(htmlText) ? 'social-proof' : null,
      ].filter(Boolean),
      design_action_color_conforms: runtimeObservation?.action_background === 'rgb(47, 104, 79)',
      sections_11_13_honest: /## 11[^]*\[FILL IN\][^]*## 12[^]*\[FILL IN\][^]*## 13[^]*\[FILL IN\]/.test(designText),
      console_errors: [...new Set(allConsoleErrors)],
      page_errors: [...new Set(allPageErrors)],
      external_requests: [...new Set(allExternalRequests)],
    },
  };
  const result = { ...scoreGreenfieldEvidence(evidence), evidence };
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(result, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
}
