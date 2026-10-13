#!/usr/bin/env node
// Value comparator for a legacy → v3 conversion. Passes only when tokens, claims, catalog identity and
// prose are equal except for the documented renames (spec/design-md-v3.md §11).
//
//   node scripts/design-md-v3/compare-values.mjs <legacy DESIGN.md> <v3 dir> [--overlay <yaml>]
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import yaml from 'js-yaml';
import { mapLegacyPath, v3Value, leaves, getPath, SECTION_MAP } from './mapping.mjs';

function split(text) {
  const end = text.indexOf('\n---\n', 4);
  return { fm: yaml.load(text.slice(4, end + 1)), body: text.slice(end + 5) };
}

export function compare(legacyFile, v3Dir, overlayFile) {
  const legacy = split(fs.readFileSync(legacyFile, 'utf8'));
  const v3 = split(fs.readFileSync(path.join(v3Dir, 'DESIGN.md'), 'utf8'));
  const side = JSON.parse(fs.readFileSync(path.join(v3Dir, 'reference.json'), 'utf8'));
  const overlay = overlayFile ? yaml.load(fs.readFileSync(overlayFile, 'utf8')) : {};
  const problems = [];
  const renames = [];
  const mapped = new Set();

  // 1. Every legacy token leaf lands at its mapped path with an equal (normalised) value.
  let tokenLeaves = 0;
  for (const [parts, value] of leaves(legacy.fm.tokens)) {
    tokenLeaves++;
    const m = mapLegacyPath(parts, value);
    const legacyPath = `tokens.${parts.join('.')}`;
    if (m.kind === 'meta') {
      if (!isDeepStrictEqual(side.tokens?.[parts[0]], value)) problems.push(`meta ${legacyPath} differs`);
      continue;
    }
    if (m.kind === 'prose') {
      const hit = side.migration.prose.some((p) => p.path === m.path && p.value === value) && v3.body.includes(`\`${value}\``);
      if (!hit) problems.push(`prose value ${legacyPath}=${value} not carried`);
      renames.push([legacyPath, `prose:${m.path}`]);
      continue;
    }
    const got = getPath(v3.fm, m.path);
    const want = m.kind === 'fonts' ? value : v3Value(parts, value);
    if (!isDeepStrictEqual(got, want)) problems.push(`${legacyPath} → ${m.path}: want ${JSON.stringify(want)} got ${JSON.stringify(got)}`);
    mapped.add(m.path);
    if (legacyPath.slice(7) !== m.path) renames.push([legacyPath, m.path]);
  }

  // 2. Every v3 token leaf maps back to a legacy leaf, or is an overlay addition.
  const additions = [];
  const overlayPaths = new Set([...leaves({ typography: overlay.typography ?? {} })].map(([p]) => p.join('.')));
  for (const g of ['colors', 'typography', 'rounded', 'spacing', 'components']) {
    for (const [parts] of leaves({ [g]: v3.fm[g] ?? {} })) {
      const p = parts.join('.');
      if (mapped.has(p)) continue;
      if (overlayPaths.has(p)) additions.push(p);
      else problems.push(`unexplained v3 token ${p}`);
    }
  }
  if (v3.fm.tokens) problems.push('legacy tokens: block still present');
  if (v3.fm.verification_v2) problems.push('verification_v2 still in frontmatter');

  // 3. Claims: same count, each re-keyed with identical evidence.
  const lc = legacy.fm.verification_v2?.claims ?? {};
  const nc = side.verification_v2?.claims ?? {};
  for (const [k, ev] of Object.entries(lc)) {
    const m = mapLegacyPath(k.slice(7).split('.'), undefined);
    const nk = m.kind === 'prose' ? `prose:${m.path}` : m.path;
    if (!isDeepStrictEqual(nc[nk], ev)) problems.push(`claim ${k} → ${nk} missing or changed`);
  }
  if (Object.keys(lc).length !== Object.keys(nc).length) problems.push(`claim count ${Object.keys(lc).length} → ${Object.keys(nc).length}`);
  const { claims: _a, ...lv2 } = legacy.fm.verification_v2 ?? {};
  const { claims: _b, ...nv2 } = side.verification_v2 ?? {};
  if (!isDeepStrictEqual(lv2, nv2)) problems.push('verification_v2 (non-claim fields) changed');

  // 4. Catalog identity moved, unchanged.
  for (const [k, v] of Object.entries(legacy.fm)) {
    if (['tokens', 'verification_v2', 'omd'].includes(k)) continue;
    if (!isDeepStrictEqual(side.catalog?.[k], v)) problems.push(`catalog.${k} changed or missing`);
  }

  // 5. Prose: every non-heading legacy body line survives verbatim; every legacy heading survives as a heading.
  const v3Lines = new Set(v3.body.split('\n'));
  const v3Headings = new Set(v3.body.split('\n').filter((l) => /^#{1,6} /.test(l)).map((l) => l.replace(/^#+\s*(\d+\.\s*)?/, '')));
  let proseLines = 0;
  for (const line of legacy.body.split('\n')) {
    if (!line.trim()) continue;
    if (/^#{1,6} /.test(line)) {
      const title = line.replace(/^#+\s*(\d+\.\s*)?/, '');
      const sec = /^## /.test(line) ? SECTION_MAP[title] : null;
      const expect = sec && sec[1] === 'merge' ? sec[0] : title;
      if (!v3Headings.has(expect)) problems.push(`heading lost: ${line}`);
      else if (expect !== title) renames.push([line, `## ${expect}`]);
      continue;
    }
    proseLines++;
    if (!v3Lines.has(line)) problems.push(`prose line lost: ${line.slice(0, 80)}`);
  }

  return {
    ok: problems.length === 0,
    tokenLeaves,
    claims: Object.keys(lc).length,
    proseLines,
    renames: renames.length,
    additions,
    problems,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const oi = args.indexOf('--overlay');
  const overlay = oi >= 0 ? args.splice(oi, 2)[1] : null;
  const r = compare(args[0], args[1], overlay);
  console.log(JSON.stringify(r, null, 1));
  process.exit(r.ok ? 0 : 1);
}
