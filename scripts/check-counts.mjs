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
  const shippedSkillPaths = (pkg.files || []).filter((f) => f.startsWith('skills/'));
  const skills = shippedSkillPaths.length;
  const cursorSkills = shippedSkillPaths.filter((skillPath) => {
    const skillMd = readFileSync(path.join(ROOT, skillPath, 'SKILL.md'), 'utf-8');
    const frontmatter = /^---\n([\s\S]*?)\n---/.exec(skillMd)?.[1] ?? '';
    const declaration = /^x-omd-channels:\s*(.+)$/m.exec(frontmatter)?.[1];
    return !declaration || declaration.split(/[,\s]+/).includes('cursor');
  }).length;
  const agentsDir = path.join(ROOT, 'agents');
  const subagents = existsSync(agentsDir)
    ? readdirSync(agentsDir).filter((f) => /^omd-.*\.md$/.test(f)).length
    : 0;
  // Tier counts (verified_v2 / partial / legacy) drift in prose the same way the
  // reference total does, in five locales at once, and nothing caught it: this file
  // checked "N references" but not "verified_v2 N". Seven manual sync passes between
  // 2026-09-16 and 2026-09-22 is what a missing rule looks like.
  //
  // data/reference-quality.json is the authoritative tier split and is itself kept
  // fresh by the `query:references:data:check` gate that runs beside this one, so
  // reading it here adds no new source of truth — only a second reader of the same one.
  const qualityPath = path.join(ROOT, 'data', 'reference-quality.json');
  let tiers = null;
  if (existsSync(qualityPath)) {
    const quality = JSON.parse(readFileSync(qualityPath, 'utf-8'));
    // Staleness guard, and it caught itself on the first run. This file and
    // sync-catalog.mjs both read the tier split from here, so a stale copy makes
    // the gate and the healer agree on the *same wrong number* and report green —
    // exactly what happened on 2026-09-22 when the counts were synced before the
    // quality data was regenerated. Its own total has to match the directory count
    // or the tier numbers are from a different catalog and get no vote.
    const counts = quality.counts ?? {};
    if (quality.count != null && quality.count !== refs) {
      console.error(
        `✗ check-counts: data/reference-quality.json is stale — it evaluated ${quality.count} `
        + `reference(s), web/references/ has ${refs}.\n`
        + `  The tier counts in it are from a different catalog, so this run cannot check them.\n`
        + `  Fix with: npm run query:references:data   (then re-run node web/scripts/sync-catalog.mjs)`,
      );
      process.exit(1);
    }
    if (counts.verified_v2 != null) {
      tiers = {
        verified: counts.verified_v2,
        partial: counts.partial,
        legacy: counts.legacy_snapshot,
      };
    }
  }
  return { refs, skills, cursorSkills, subagents, tiers };
}

const { refs, skills, cursorSkills, subagents, tiers } = authoritative();

// Phrase-anchored: capture the number immediately before a canonical noun phrase.
// Sub-counts ("15 specialists", "6 skills (v0.2 layer)") use different phrasing
// and are intentionally not matched.
const rules = [
  { label: 'skills', re: /\b(\d+)(?=\s+skills\b)/g, val: skills },
  {
    label: 'Cursor Agent Skills',
    re: /\b(\d+)(?=\s+(?:compatible|native) Agent Skills\b)/g,
    val: cursorSkills,
  },
  { label: 'sub-agents', re: /\b(\d+)(?=\s+sub-agents\b)/g, val: subagents },
  {
    label: 'references',
    re: /\b(\d+)(?=\s+(?:references?\b|reference DESIGN\.md\b|real company design systems\b|design systems\b|verified\b))/g,
    val: refs,
  },
];

// The tier counts are written with the number before the label in English
// ("151 verified_v2") and after it in every CJK locale ("verified_v2 151개",
// "verified_v2 151 份", "legacy snapshot 113件"), so each tier needs both directions.
if (tiers) {
  const tierRules = [
    ['verified_v2', /verified_v2\b/.source, tiers.verified],
    ['partial', /partial\b/.source, tiers.partial],
    ['legacy', /legacy(?:\s+snapshots?)?\b/.source, tiers.legacy],
  ];
  for (const [label, noun, val] of tierRules) {
    if (val == null) continue;
    rules.push({ label, re: new RegExp(`\\b(\\d+)(?=\\s+${noun})`, 'g'), val });
    // `(?![\d/-])` keeps the after-form off an enumeration: README's
    // "legacy 13/15/16-section" lists format versions, not a tier count. The class
    // has to include `\d` as well as the separators — without it the engine just
    // backtracks the capture from "13" to "1" and reports "legacy 1". A space is
    // deliberately not in the class, so "verified_v2 151 / partial 184" still counts.
    rules.push({ label, re: new RegExp(`${noun}\\s+(\\d+)(?![\\d/-])`, 'g'), val, after: true });
  }
}

const SURFACES = [
  'README.md', 'README.ko.md', 'README.ja.md', 'README.zh-TW.md',
  'web/public/llms.txt',
  'web/src/data/faq.ts', 'web/src/data/cli-docs.ts',
  'web/src/app/layout.tsx', 'web/src/app/docs/layout.tsx',
  'web/src/app/builder/layout.tsx', 'web/src/app/design-systems/layout.tsx',
].map((p) => path.join(ROOT, p));

const failures = [];
for (const p of SURFACES) {
  if (!existsSync(p)) continue;
  const txt = readFileSync(p, 'utf-8');
  const rel = p.replace(ROOT + path.sep, '');
  for (const rule of rules) {
    const { label, re, val } = rule;
    for (const m of txt.matchAll(re)) {
      if (Number(m[1]) !== val) {
        const shown = rule.after ? `${label} ${m[1]}` : `${m[1]} ${label}`;
        const want = rule.after ? `${label} ${val}` : `${val} ${label}`;
        failures.push(`${rel}: "${shown}" should be "${want}"`);
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
  `✓ check-counts: refs=${refs}${tiers ? ` (${tiers.verified} verified / ${tiers.partial} partial / ${tiers.legacy} legacy)` : ''}`
    + ` skills=${skills} cursor-skills=${cursorSkills} sub-agents=${subagents} consistent across ${SURFACES.length} surfaces`,
);
