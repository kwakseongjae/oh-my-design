#!/usr/bin/env node
// Batch guards for the v3 conversion (PHASE1.md §6–7). Compares the generated catalog artifacts of
// the working tree against a baseline snapshot taken before the batch.
//
//   node scripts/design-md-v3/guards.mjs snapshot <dir>      # after pipeline.sh on the baseline
//   node scripts/design-md-v3/guards.mjs check <dir> [--allow toss,serendie]
//
// Checks: tiers 299/109/113 and per-id status; motion advisory id set; registry entries deep-equal
// per id; evidence ledger refs/sources; per-reference claim count (through readReferenceSource);
// reference AST equal per id except sections and content hashes. --allow lists ids whose registry,
// claims or ledger contribution may differ (intended changes), which are then printed.
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { createHash } from 'node:crypto';
import { readReferenceSource } from '../../web/scripts/lib/reference-source.mjs';
import { parseReferenceFrontmatter } from '../../web/scripts/lib/reference-quality.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const [mode, dir] = process.argv.slice(2);
const allowArg = process.argv.includes('--allow') ? process.argv[process.argv.indexOf('--allow') + 1].split(',') : [];
const allow = new Set(allowArg);

async function collect() {
  const quality = JSON.parse(fs.readFileSync(path.join(root, 'data/reference-quality.json'), 'utf8'));
  const { REFERENCE_QUALITY } = await import(`${path.join(root, 'web/src/data/reference-quality.generated.ts')}?t=${Date.now()}`);
  const { REGISTRY } = await import(`${path.join(root, 'web/src/data/registry.generated.ts')}?t=${Date.now()}`);
  const ledger = JSON.parse(fs.readFileSync(path.join(root, 'data/evidence-ledger.json'), 'utf8'));
  const ast = JSON.parse(fs.readFileSync(path.join(root, 'web/src/data/reference-ast.generated.json'), 'utf8'));
  const refs = path.join(root, 'web/references');
  const claims = {};
  for (const id of fs.readdirSync(refs).sort()) {
    if (!fs.existsSync(path.join(refs, id, 'DESIGN.md'))) continue;
    const fm = parseReferenceFrontmatter(readReferenceSource(path.join(refs, id)).markdown, id);
    claims[id] = Object.keys(fm.verification_v2?.claims ?? {}).length;
  }
  return {
    counts: quality.counts,
    status: Object.fromEntries(quality.items.map((r) => [r.id, r.status])),
    motion: REFERENCE_QUALITY.filter((r) => (r.advisoryCodes ?? []).includes('motion_value_unsourced')).map((r) => r.id).sort(),
    registry: Object.fromEntries(REGISTRY.map((e) => [e.id, e])),
    ledger: { refs: ledger.references_with_verification_v2, sources: ledger.sources, sha: summarizeLedger(ledger) },
    ast: Object.fromEntries(ast.references.map((r) => { const { contentHash, sections, ...rest } = r; return [r.identity.id, { rest, sectionCount: sections.length }]; })),
    claims,
  };
}

function summarizeLedger(ledger) {
  return createHash('sha256').update(JSON.stringify(ledger.references)).digest('hex');
}

const file = (d) => path.join(d, 'guards-baseline.json');
if (mode === 'snapshot') {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file(dir), JSON.stringify(await collect()));
  console.log(`snapshot written to ${file(dir)}`);
} else if (mode === 'check') {
  const base = JSON.parse(fs.readFileSync(file(dir), 'utf8'));
  const now = JSON.parse(JSON.stringify(await collect()));
  const problems = [];
  const intended = [];
  if (!isDeepStrictEqual(base.counts, now.counts)) problems.push(`tier counts ${JSON.stringify(base.counts)} -> ${JSON.stringify(now.counts)}`);
  for (const [id, s] of Object.entries(base.status)) if (now.status[id] !== s) problems.push(`status ${id}: ${s} -> ${now.status[id]}`);
  if (!isDeepStrictEqual(base.motion, now.motion)) problems.push(`motion set ${base.motion.length} -> ${now.motion.length}: +[${now.motion.filter((i) => !base.motion.includes(i))}] -[${base.motion.filter((i) => !now.motion.includes(i))}]`);
  for (const [id, e] of Object.entries(base.registry)) {
    if (isDeepStrictEqual(e, now.registry[id])) continue;
    const fields = Object.keys({ ...e, ...now.registry[id] }).filter((k) => !isDeepStrictEqual(e[k], now.registry[id]?.[k]));
    (allow.has(id) ? intended : problems).push(`registry ${id}: ${fields.join(',')}`);
  }
  if (!isDeepStrictEqual(base.ledger, now.ledger)) (allowArg.length ? intended : problems).push(`ledger ${JSON.stringify(base.ledger)} -> ${JSON.stringify(now.ledger)}`);
  for (const [id, n] of Object.entries(base.claims)) if (now.claims[id] !== n) (allow.has(id) ? intended : problems).push(`claims ${id}: ${n} -> ${now.claims[id]}`);
  for (const [id, a] of Object.entries(base.ast)) {
    if (isDeepStrictEqual(a.rest, now.ast[id]?.rest)) continue;
    (allow.has(id) ? intended : problems).push(`ast ${id}: non-section fields differ`);
  }
  console.log(JSON.stringify({ ok: problems.length === 0, counts: now.counts, motion: now.motion.length, ledger: now.ledger, claimsTotal: Object.values(now.claims).reduce((a, b) => a + b, 0), problems: problems.slice(0, 40), intended }, null, 1));
  process.exit(problems.length ? 1 : 0);
} else {
  console.error('usage: guards.mjs snapshot|check <dir> [--allow ids]');
  process.exit(2);
}
