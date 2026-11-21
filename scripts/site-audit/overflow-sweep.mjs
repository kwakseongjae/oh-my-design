#!/usr/bin/env node
/**
 * Does any item page scroll sideways on a phone? Loads every reference's item page at 390 and records how far the
 * document is wider than the viewport, and (with --css) what is left after laying a candidate rule over the page.
 *
 *   node scripts/site-audit/overflow-sweep.mjs [--base https://oh-my-design.kr] [--css "<rule>"] [--ko] [--out FILE]
 * Reads ids from data/reference-quality.json. Headless, reads only, six pages at a time.
 */
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const flag = (n) => (args.includes(n) ? args[args.indexOf(n) + 1] : null);
const BASE = (flag('--base') ?? 'https://oh-my-design.kr').replace(/\/$/, '');
const CSS = flag('--css');
const PREFIX = args.includes('--ko') ? '/ko/design-systems/' : '/design-systems/';
const OUT = flag('--out') ?? path.join(os.homedir(), '.omd-workers/site-audit/overflow-' + (args.includes('--ko') ? 'ko' : 'en') + '.json');
function loadPlaywright() {
  const roots = [REPO];
  try { roots.push(path.resolve(execFileSync('git', ['-C', REPO, 'rev-parse', '--git-common-dir'], { encoding: 'utf8' }).trim(), '..')); } catch { /* no git */ }
  for (const r of roots) { try { return createRequire(path.join(r, 'web/package.json'))('playwright-core'); } catch { /* next */ } }
  process.exit(2);
}
const { chromium } = loadPlaywright();
const ids = JSON.parse(fs.readFileSync(path.join(REPO, 'data/reference-quality.json'), 'utf8')).items.map((r) => r.id);
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const wide = () => document.documentElement.scrollWidth - document.documentElement.clientWidth;
const rows = [];
let next = 0;
await Promise.all(Array.from({ length: 6 }, async () => {
  const page = await ctx.newPage();
  while (next < ids.length) {
    const id = ids[next++];
    try {
      const resp = await page.goto(BASE + PREFIX + id, { waitUntil: 'domcontentloaded', timeout: 40000 });
      await page.waitForTimeout(500);
      const before = await page.evaluate(wide);
      let after = null;
      if (CSS && before > 0) { await page.addStyleTag({ content: CSS }); await page.waitForTimeout(150); after = await page.evaluate(wide); }
      if (before > 0 || resp?.status() !== 200) rows.push({ id, status: resp?.status(), before, after });
    } catch (e) { rows.push({ id, error: String(e.message).split('\n')[0] }); }
  }
  await page.close();
}));
await browser.close();
rows.sort((a, b) => (b.before ?? 0) - (a.before ?? 0));
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ base: BASE, prefix: PREFIX, css: CSS, pages: ids.length, rows }, null, 1));
const over = rows.filter((r) => r.before > 0);
console.log(ids.length + ' pages, ' + over.length + ' scroll sideways' + (CSS ? ', ' + over.filter((r) => r.after > 0).length + ' still do with the rule' : '') + ', ' + rows.filter((r) => r.error || (r.status && r.status !== 200)).length + ' did not load → ' + OUT);
for (const r of over.filter((r) => !CSS || r.after > 0).slice(0, 12)) console.log('  ' + r.id + ' ' + r.before + (r.after != null ? ' → ' + r.after : ''));
