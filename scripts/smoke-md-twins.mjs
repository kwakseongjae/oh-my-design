#!/usr/bin/env node
// scripts/smoke-md-twins.mjs — verifies the raw DESIGN.md twin endpoints
// (/<id>/design.md → /r/<id>) cover every reference.
//
// Two modes:
//   1. Static (default, no server needed): every web/references/<id>/DESIGN.md
//      is readable, ids satisfy the route's id discipline, the route handler +
//      next.config rewrite exist, and llms.txt/llms-full.txt list every twin URL.
//   2. HTTP (opt-in): `node scripts/smoke-md-twins.mjs --base http://localhost:3335`
//      additionally fetches all 221 .md URLs and asserts 200 + text/markdown
//      + attribution footer. Run against `next dev`/`next start`/production.
//
// Exit code 0 = all green; 1 = failures (listed on stderr).

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REFS_DIR = path.join(repoRoot, 'web', 'references');
const REFERENCE_ID_RE = /^[a-z0-9.-]{1,40}$/; // mirrors web/src/lib/kv.ts

const baseArg = process.argv.indexOf('--base');
const base = baseArg !== -1 ? process.argv[baseArg + 1]?.replace(/\/$/, '') : null;

const failures = [];
const ok = (cond, msg) => { if (!cond) failures.push(msg); };

// ── 1. Reference coverage ────────────────────────────────────────────────
const ids = readdirSync(REFS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(path.join(REFS_DIR, d.name, 'DESIGN.md')))
  .map((d) => d.name)
  .sort();

ok(ids.length >= 221, `expected ≥221 references, found ${ids.length}`);

for (const id of ids) {
  ok(REFERENCE_ID_RE.test(id), `id "${id}" fails REFERENCE_ID_RE — /r/[id] would 404`);
  const md = readFileSync(path.join(REFS_DIR, id, 'DESIGN.md'), 'utf8');
  ok(md.trim().length > 0, `references/${id}/DESIGN.md is empty`);
}

// ── 2. Route handler + rewrite wiring ────────────────────────────────────
const routeFile = path.join(repoRoot, 'web', 'src', 'app', 'r', '[id]', 'route.ts');
ok(existsSync(routeFile), `route handler missing: ${routeFile}`);
if (existsSync(routeFile)) {
  const route = readFileSync(routeFile, 'utf8');
  ok(route.includes('generateStaticParams'), 'route.ts lacks generateStaticParams');
  ok(route.includes('text/markdown'), 'route.ts lacks text/markdown content type');
}
const nextConfig = readFileSync(path.join(repoRoot, 'web', 'next.config.ts'), 'utf8');
ok(
  nextConfig.includes('/:id/design.md') && nextConfig.includes('/r/:id'),
  'next.config.ts lacks the /:id/design.md → /r/:id rewrite',
);
ok(
  nextConfig.includes('/design-systems/:id.md'),
  'next.config.ts lacks the legacy /design-systems/:id.md → /:id/design.md redirect',
);

// ── 3. llms.txt / llms-full.txt twin listings ────────────────────────────
for (const file of ['llms.txt', 'llms-full.txt']) {
  const p = path.join(repoRoot, 'web', 'public', file);
  if (!existsSync(p)) { failures.push(`missing web/public/${file}`); continue; }
  const txt = readFileSync(p, 'utf8');
  const missing = ids.filter((id) => !txt.includes(`/${id}/design.md`));
  ok(missing.length === 0, `${file} missing ${missing.length} twin URLs (e.g. ${missing.slice(0, 3).join(', ')}) — run node scripts/gen-llms-full.cjs`);
}

// ── 4. Optional HTTP smoke against a running server ──────────────────────
if (base) {
  console.log(`HTTP smoke against ${base} (${ids.length} URLs)…`);
  const CONCURRENCY = 16;
  let done = 0;
  const queue = [...ids];
  async function worker() {
    while (queue.length) {
      const id = queue.shift();
      const url = `${base}/${id}/design.md`;
      try {
        const res = await fetch(url);
        ok(res.status === 200, `${url} → ${res.status}`);
        const ct = res.headers.get('content-type') ?? '';
        ok(ct.includes('text/markdown'), `${url} content-type "${ct}"`);
        const body = await res.text();
        ok(body.includes('npx oh-my-design-cli install-skills'), `${url} missing attribution footer`);
      } catch (e) {
        failures.push(`${url} fetch failed: ${e.message}`);
      }
      if (++done % 50 === 0) console.log(`  ${done}/${ids.length}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
}

// ── Report ────────────────────────────────────────────────────────────────
if (failures.length) {
  console.error(`✗ smoke-md-twins: ${failures.length} failure(s)`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`✓ smoke-md-twins: ${ids.length} references covered${base ? ' (static + HTTP)' : ' (static checks; pass --base <url> for HTTP)'}`);
