#!/usr/bin/env node
// scripts/check-counts.mjs — drift guard for catalog counts in static / prose
// surfaces that CANNOT import the TS constants (README, llms.txt, SEO layout
// metadata). Recomputes the authoritative counts and asserts every
// count-anchored phrase matches. Exit 1 on mismatch.
//
// Authoritative sources (identical to build-registry.mjs / sync-catalog.mjs):
//   references = web/references/<id>/DESIGN.md dirs
//   skills     = package.json "files" entries under skills/ (what npm ships)
//   sub-agents = agents/omd-*.md (mirrors install-skills.ts's agent filter)
//
// Rendered web pages (docs/page.tsx, landing sections, faq data) read
// @/lib/catalog-count and are guaranteed by TypeScript — NOT checked here.
// llms-full.txt is excluded: it embeds CHANGELOG history with intentionally old
// counts and is regenerated from these sources by gen-llms-full.cjs.
//
// Fix drift with: node web/scripts/sync-catalog.mjs

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REFS_DIR = path.join(ROOT, 'web', 'references');

function authoritative() {
  const refs = existsSync(REFS_DIR)
    ? readdirSync(REFS_DIR, { withFileTypes: true }).filter(
        (d) => d.isDirectory() && existsSync(path.join(REFS_DIR, d.name, 'DESIGN.md')),
      ).length
    : 0;
  const pkg = JSON.parse(readFileSync(path.join(ROOT, 'package.json'), 'utf-8'));
  const skills = (pkg.files || []).filter((f) => f.startsWith('skills/')).length;
  const agentsDir = path.join(ROOT, 'agents');
  const subagents = existsSync(agentsDir)
    ? readdirSync(agentsDir).filter((f) => /^omd-.*\.md$/.test(f)).length
    : 0;
  return { refs, skills, subagents };
}

const { refs, skills, subagents } = authoritative();

// Phrase-anchored: capture the number immediately before a canonical noun phrase.
// Sub-counts ("15 specialists", "6 skills (v0.2 layer)") use different phrasing
// and are intentionally not matched.
const rules = [
  { label: 'skills', re: /\b(\d+)(?=\s+skills\b)/g, val: skills },
  { label: 'sub-agents', re: /\b(\d+)(?=\s+sub-agents\b)/g, val: subagents },
  {
    label: 'references',
    re: /\b(\d+)(?=\s+(?:references?\b|reference DESIGN\.md\b|real company design systems\b|design systems\b|verified\b))/g,
    val: refs,
  },
];

const SURFACES = [
  'README.md', 'README.ko.md', 'README.ja.md', 'README.zh-TW.md',
  'web/public/llms.txt',
  'web/src/app/layout.tsx', 'web/src/app/docs/layout.tsx',
  'web/src/app/builder/layout.tsx', 'web/src/app/design-systems/layout.tsx',
].map((p) => path.join(ROOT, p));

const failures = [];
for (const p of SURFACES) {
  if (!existsSync(p)) continue;
  const txt = readFileSync(p, 'utf-8');
  const rel = p.replace(ROOT + path.sep, '');
  for (const { label, re, val } of rules) {
    for (const m of txt.matchAll(re)) {
      if (Number(m[1]) !== val) {
        failures.push(`${rel}: "${m[1]} ${label}" should be "${val} ${label}"`);
      }
    }
  }
}

if (failures.length) {
  console.error(
    `✗ check-counts: ${failures.length} stale count(s) — run \`node web/scripts/sync-catalog.mjs\` (or fix by hand):`,
  );
  for (const f of failures) console.error('  - ' + f);
  process.exit(1);
}
console.log(
  `✓ check-counts: refs=${refs} skills=${skills} sub-agents=${subagents} consistent across ${SURFACES.length} surfaces`,
);
