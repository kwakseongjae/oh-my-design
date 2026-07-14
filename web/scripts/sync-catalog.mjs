#!/usr/bin/env node
/**
 * sync-catalog.mjs — one-command SYNC phase for reference additions.
 *
 *   node web/scripts/sync-catalog.mjs [--dry-run]
 *
 * After new references/<id>/ folders pass verify-reference.mjs, this script
 * propagates them to every adjacent surface that historically drifted when
 * done by hand:
 *
 *   1. web/src/data/registry.generated.ts   (build-registry)
 *   2. data/reference-fingerprints.json ×3  (append missing ids, count, mirrors)
 *   3. design-md/ mirror                    (byte-identical re-copy)
 *   4. README ×4 / llms.txt / app layouts   (old count → new count strings)
 *   5. llms.txt Examples line               (append missing display names)
 *   6. npm test                             (catalog-integrity must be green)
 *
 * NOT done here (still the orchestrator's call): CHANGELOG entry, package.json
 * version bump, git commit.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, cpSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB = resolve(__dirname, '..');
const ROOT = resolve(WEB, '..');
const REFS = join(WEB, 'references');
const DRY = process.argv.includes('--dry-run');

const FP_PATHS = [
  join(ROOT, 'data', 'reference-fingerprints.json'),
  join(ROOT, '.claude', 'data', 'reference-fingerprints.json'),
  join(ROOT, '.codex', 'data', 'reference-fingerprints.json'),
];
// Static / prose surfaces that carry literal counts and CANNOT import the TS
// constants (markdown) or are SEO metadata prose we keep literal. Rendered web
// pages (docs/page.tsx, landing sections, faq data) are NOT here — they read
// REFERENCE_COUNT / SKILL_COUNT / SUBAGENT_COUNT from @/lib/catalog-count and
// never drift. llms-full.txt is omitted too: gen-llms-full.cjs rebuilds it from
// these sources, so fixing them + regenerating propagates.
const COUNT_SURFACES = [
  'README.md', 'README.ko.md', 'README.ja.md', 'README.zh-TW.md',
  'web/public/llms.txt',
  'web/src/app/layout.tsx', 'web/src/app/docs/layout.tsx',
  'web/src/app/builder/layout.tsx', 'web/src/app/design-systems/layout.tsx',
].map(p => join(ROOT, p));

// Authoritative bundled counts (mirror what npm ships + the installer's filters,
// same definitions as scripts/build-registry.mjs → catalog-meta.generated.ts).
function bundledCounts() {
  const rootPkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf-8'));
  const skills = (rootPkg.files || []).filter((f) => f.startsWith('skills/')).length;
  const agentsDir = join(ROOT, 'agents');
  const subagents = existsSync(agentsDir)
    ? readdirSync(agentsDir).filter((f) => /^omd-.*\.md$/.test(f)).length
    : 0;
  return { skills, subagents };
}

// Self-healing count replacement: each rule matches the NUMBER immediately
// before a canonical noun phrase and overwrites it with the true count —
// unconditional and phrase-anchored, so a surface that already drifted heals on
// the next run (the old oldCount→newCount approach could only fix the last-known
// number, which is how "15 skills" / "221 references" froze). Sub-counts like
// "15 specialists" / "6 skills (v0.2 layer)" use different phrasing and are left
// untouched by design.
function countRules({ refs, skills, subagents }) {
  return [
    { re: /\b\d+(?=\s+skills\b)/g, val: skills },
    { re: /\b\d+(?=\s+sub-agents\b)/g, val: subagents },
    {
      re: /\b\d+(?=\s+(?:references?\b|reference DESIGN\.md\b|real company design systems\b|design systems\b|verified\b))/g,
      val: refs,
    },
  ];
}

const TONE_LEXICON = ['clean', 'bold', 'warm', 'dark', 'playful', 'minimal', 'dense', 'flat', 'editorial', 'calm', 'energetic', 'trustworthy', 'friendly', 'modern', 'vivid', 'systematic', 'utilitarian', 'premium', 'approachable', 'confident', 'cinematic', 'immersive', 'organic', 'human'];

function frontmatter(id) {
  const md = readFileSync(join(REFS, id, 'DESIGN.md'), 'utf-8');
  const close = md.indexOf('\n---\n', 4);
  return { fm: yaml.load(md.slice(4, close)), md };
}

function sec1Prose(md) {
  const sec1 = md.split('## 1. Visual Theme & Atmosphere', 2)[1] || '';
  return (sec1.split('\n').map(l => l.trim()).find(l => l.length > 0) || '').slice(0, 260);
}

const ids = readdirSync(REFS, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(join(REFS, d.name, 'DESIGN.md')))
  .map(d => d.name).sort();

// ── 1. registry ────────────────────────────────────────────────────────
if (!DRY) execSync('node scripts/build-registry.mjs', { cwd: WEB, stdio: 'inherit' });
if (!DRY) execSync('node scripts/build-reference-quality.mjs', { cwd: WEB, stdio: 'inherit' });

// ── 2. fingerprints ×3 ─────────────────────────────────────────────────
const fp = JSON.parse(readFileSync(FP_PATHS[0], 'utf-8'));
const oldCount = fp.count;
const have = new Set(fp.items.map(i => i.id));
const missing = ids.filter(i => !have.has(i));
for (const rid of missing) {
  const { fm, md } = frontmatter(rid);
  const prose = sec1Prose(md);
  const lower = (md.split('## 4.')[0] || '').toLowerCase();
  const tones = TONE_LEXICON.filter(t => lower.includes(t)).slice(0, 4);
  fp.items.push({
    id: rid,
    primary_color_hex: fm.primary_color,
    category: fm.category,
    visual_theme: prose,
    voice_fingerprint: { register: fm.category, sentence_length: 'medium declarative', metaphor_density: 'low', vocabulary_register: 'brand-appropriate' },
    tone_keywords: tones.length ? tones : ['brand-appropriate'],
    antipatterns: ['off-brand'],
    signature_motion: 'See §15 Motion.',
    has_personas: true,
    category_raw: fm.category,
  });
  console.log(`[fingerprints] + ${rid} (tone: ${tones.join(', ') || 'default'}) — refine keywords by hand if needed`);
}
fp.items.sort((a, b) => a.id.localeCompare(b.id));
fp.count = fp.items.length;
fp.generated_at = new Date().toISOString().slice(0, 10) + 'T00:00:00Z';
if (!DRY) {
  const body = JSON.stringify(fp, null, 1) + '\n';
  for (const p of FP_PATHS) writeFileSync(p, body);
}
console.log(`[fingerprints] count ${oldCount} -> ${fp.count} (${missing.length} added, mirrors x${FP_PATHS.length})`);

// ── 3. design-md mirror ────────────────────────────────────────────────
if (!DRY) {
  const mirror = join(ROOT, 'design-md');
  mkdirSync(mirror, { recursive: true });
  // References are append/update-only, so an in-place overwrite is sufficient
  // and avoids macOS ENOTEMPTY races from deleting a 400-directory tree first.
  cpSync(REFS, mirror, { recursive: true, dereference: true, force: true });
}
console.log('[mirror] design-md re-synced');

// ── 4. count strings (self-healing) ────────────────────────────────────
{
  const { skills, subagents } = bundledCounts();
  const rules = countRules({ refs: fp.count, skills, subagents });
  console.log(`[count] targets: refs=${fp.count} skills=${skills} sub-agents=${subagents}`);
  for (const p of COUNT_SURFACES) {
    if (!existsSync(p)) { console.warn(`[count] skip missing ${p}`); continue; }
    const before = readFileSync(p, 'utf-8');
    let after = before;
    let n = 0;
    for (const { re, val } of rules) {
      after = after.replace(re, (m) => { if (m !== String(val)) n++; return String(val); });
    }
    if (n && !DRY) writeFileSync(p, after);
    if (n) console.log(`[count] ${p.replace(ROOT + '/', '')}: ${n} fix(es)`);
  }
}

// ── 5. llms.txt Examples ───────────────────────────────────────────────
const llmsPath = join(WEB, 'public', 'llms.txt');
if (existsSync(llmsPath) && missing.length) {
  let txt = readFileSync(llmsPath, 'utf-8');
  const line = txt.match(/^Examples:.*$/m)?.[0] || '';
  const adds = [];
  for (const rid of missing) {
    const { fm } = frontmatter(rid);
    const display = fm.display_name_kr ? `${fm.name} (${fm.display_name_kr})` : fm.name;
    if (!line.includes(fm.name)) adds.push(display);
  }
  if (adds.length && !DRY) {
    txt = txt.replace(/^(Examples:.*)$/m, `$1 · ${adds.join(' · ')}`);
    writeFileSync(llmsPath, txt);
  }
  if (adds.length) console.log(`[llms.txt] Examples += ${adds.join(' · ')}`);
}

// ── 6. tests ───────────────────────────────────────────────────────────
if (!DRY) execSync('npm test --silent', { cwd: WEB, stdio: 'inherit' });
console.log(`\n[sync-catalog] done — ${fp.count} references${DRY ? ' (dry-run, nothing written)' : ''}. Remaining manual: CHANGELOG entry + package.json bump.`);
