#!/usr/bin/env node
// Batch conversion of catalog references to DESIGN.md v3 (PHASE1.md §7 step 5).
//
//   node scripts/design-md-v3/convert-tree.mjs --ids a,b,c [--out <root>]   # selected ids
//   node scripts/design-md-v3/convert-tree.mjs --all-legacy [--out <root>]  # every legacy file
//   node scripts/design-md-v3/convert-tree.mjs --tier verified --limit 50 --skip-converted
//
// Without --out the conversion is in place (web/references/<id>/DESIGN.md is replaced and
// reference.json written beside it). With --out <root>, files go to <root>/references/<id>/, and
// every other reference is copied unchanged, so <root> is a complete web-shaped catalog tree for
// parity checks. Each file must pass the comparator and lint with 0 errors or nothing is written.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { convertText } from './convert-legacy.mjs';
import { compareText } from './compare-values.mjs';
import { splitFrontmatter } from '../../web/scripts/lib/design-md-v3.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const yaml = createRequire(path.join(root, 'web/package.json'))('js-yaml');
const refs = path.join(root, 'web/references');

const args = process.argv.slice(2);
const opt = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : null);
const outRoot = opt('--out');
const limit = opt('--limit') ? Number(opt('--limit')) : Infinity;
const tier = opt('--tier');

function isLegacy(id) {
  const file = path.join(refs, id, 'DESIGN.md');
  if (!fs.existsSync(file)) return false;
  const text = fs.readFileSync(file, 'utf8');
  if (text.includes('<!-- design-md:section ') || !text.startsWith('---\n')) return false;
  const fm = yaml.load(splitFrontmatter(text).fmText, { schema: yaml.JSON_SCHEMA });
  return Boolean(fm?.tokens || fm?.id);
}

let ids;
if (opt('--ids')) ids = opt('--ids').split(',');
else {
  ids = fs.readdirSync(refs).sort().filter(isLegacy);
  if (tier) {
    const quality = JSON.parse(fs.readFileSync(path.join(root, 'data/reference-quality.json'), 'utf8'));
    const rows = quality.items;
    const statusOf = (id) => (Array.isArray(rows) ? rows.find((r) => r.id === id) : rows[id])?.status;
    const want = { verified: 'verified_v2', partial: 'partial', legacy: 'legacy_snapshot' }[tier] ?? tier;
    ids = ids.filter((id) => statusOf(id) === want);
  }
  ids = ids.slice(0, limit);
}

const report = { converted: [], failed: [] };
for (const id of ids) {
  if (!isLegacy(id)) { report.failed.push({ id, error: 'not a legacy reference' }); continue; }
  const text = fs.readFileSync(path.join(refs, id, 'DESIGN.md'), 'utf8');
  try {
    const { designMd, sidecar, lint } = convertText(text, {});
    const cmp = compareText(text, designMd, JSON.parse(JSON.stringify(sidecar)), {});
    if (!cmp.ok) throw new Error(`comparator: ${cmp.problems.slice(0, 3).join('; ')}`);
    if (lint.summary.errors > 0) throw new Error(`lint: ${lint.summary.errors} errors`);
    report.converted.push({ id, designMd, sidecar, claims: cmp.claims });
  } catch (e) {
    report.failed.push({ id, error: e.message });
  }
}
if (report.failed.length) {
  console.error(JSON.stringify(report.failed, null, 1));
  process.exit(1);
}
const target = outRoot ? path.join(outRoot, 'references') : refs;
if (outRoot) {
  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(refs, target, { recursive: true });
}
// In place, the design-md/ mirror (byte-identical, checked by catalog-integrity) follows for the
// converted ids only — never a blanket re-copy of the tree.
const mirrors = outRoot ? [target] : [target, path.join(root, 'design-md')];
for (const { id, designMd, sidecar } of report.converted) {
  for (const base of mirrors) {
    fs.mkdirSync(path.join(base, id), { recursive: true });
    fs.writeFileSync(path.join(base, id, 'DESIGN.md'), designMd);
    fs.writeFileSync(path.join(base, id, 'reference.json'), `${JSON.stringify(sidecar, null, 2)}\n`);
  }
}
console.log(JSON.stringify({ converted: report.converted.length, ids: report.converted.map((r) => r.id), claims: report.converted.reduce((n, r) => n + r.claims, 0), target }));
