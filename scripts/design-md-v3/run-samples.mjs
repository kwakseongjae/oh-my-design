#!/usr/bin/env node
// Phase 1 harness: convert the three sample references and run the value comparator on each.
// Writes to docs/research/2026-10-13-format/samples/<id>/. Never touches web/references.
//
//   node scripts/design-md-v3/run-samples.mjs
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { convert } from './convert-legacy.mjs';
import { compare } from './compare-values.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const samples = path.join(root, 'docs/research/2026-10-13-format/samples');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'design-md-v3-'));
const tossLegacy = path.join(tmp, 'toss-legacy.md');
execFileSync('node', [path.join(root, 'scripts/design-md-v3/extract-core-legacy.mjs'), path.join(root, 'web/references/toss'), tossLegacy]);

const plan = {
  toss: tossLegacy,
  // stripe and baemin are v3 in the catalog since 2026-10-14; their legacy bytes are frozen here.
  stripe: path.join(root, 'web/src/lib/references/fixtures/legacy-omd-0.1/stripe.md'),
  baemin: path.join(root, 'web/src/lib/references/fixtures/legacy-omd-0.1/baemin.md'),
};
let failed = false;
for (const [id, src] of Object.entries(plan)) {
  const outDir = path.join(samples, id);
  const overlay = path.join(outDir, 'overlay.yaml');
  const { lint } = convert({ src, outDir, overlay });
  const side = JSON.parse(fs.readFileSync(path.join(outDir, 'reference.json'), 'utf8'));
  const cmp = compare(src, outDir, overlay);
  failed ||= lint.errors > 0 || !cmp.ok;
  console.log(JSON.stringify({ id, lint, byRule: side.lint.byRule, comparator: { ok: cmp.ok, tokenLeaves: cmp.tokenLeaves, claims: cmp.claims, proseLines: cmp.proseLines, renames: cmp.renames, additions: cmp.additions.length, problems: cmp.problems } }));
}
process.exit(failed ? 1 : 0);
