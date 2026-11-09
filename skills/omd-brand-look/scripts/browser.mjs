// One place where omd-brand-look finds playwright-core and a Chromium, so look.mjs and check.mjs paint and measure in the
// same engine. PW_CORE=<dir containing node_modules/playwright-core> reuses an existing install (inside the oh-my-design
// repo: web). Order: Playwright's own cached Chromium for this playwright-core version, then the installed Google Chrome.
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import path from 'node:path';

export function loadPlaywright() {
  const bases = [process.env.PW_CORE, process.cwd()].filter(Boolean);
  for (const base of bases) {
    try { return createRequire(path.join(path.resolve(base), 'noop.js'))('playwright-core'); } catch { /* next base */ }
  }
  throw new Error('playwright-core not found: set PW_CORE=<dir containing node_modules/playwright-core> or `npm i -D playwright-core`');
}

export async function launchChromium() {
  const { chromium } = loadPlaywright();
  let cached = null;
  try { cached = chromium.executablePath(); } catch { /* no cache entry for this version */ }
  const tries = [];
  if (cached && existsSync(cached)) tries.push({ opts: {}, executable: cached, mode: 'playwright-cache' });
  tries.push({ opts: { channel: 'chrome' }, executable: 'Google Chrome (channel: chrome)', mode: 'chrome' });
  for (const t of tries) {
    try {
      const browser = await chromium.launch({ headless: true, ...t.opts });
      return { browser, engine: { mode: t.mode, executable: t.executable, version: browser.version() } };
    } catch { /* try the next one */ }
  }
  throw new Error('no Chromium: run `npx playwright-core install chromium` or install Google Chrome');
}
