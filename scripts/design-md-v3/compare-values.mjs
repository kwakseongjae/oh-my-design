#!/usr/bin/env node
// Value comparator for a legacy → v3 conversion. Passes only when tokens, claims, catalog identity and
// prose are equal except for the documented renames (spec/design-md-v3.md §11) and listed overlay
// additions.
//
//   node scripts/design-md-v3/compare-values.mjs <legacy DESIGN.md> <v3 dir> [--overlay <yaml>]
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { createRequire } from 'node:module';
import { mapLegacyPath, leaves, getPath, sectionTarget, splitFrontmatter } from '../../web/scripts/lib/design-md-v3.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const yaml = createRequire(path.join(root, 'web/package.json'))('js-yaml');

function split(text) {
  const s = splitFrontmatter(text);
  return { fm: yaml.load(s.fmText, { schema: yaml.JSON_SCHEMA }), body: s.body };
}

export function compareText(legacyText, designMd, side, overlay = {}) {
  const legacy = split(legacyText);
  const v3 = split(designMd);
  const problems = [];
  const renames = [];
  const mapped = new Set();
  const tokens = legacy.fm.tokens ?? {};
  const numeric = new Set(side.migration?.numeric ?? []);

  // 1. Every legacy token leaf lands at its mapped path with an equal (normalised) value.
  let tokenLeaves = 0;
  for (const [parts, value] of leaves(tokens)) {
    tokenLeaves++;
    const legacyPath = `tokens.${parts.join('.')}`;
    if (value && typeof value === 'object' && !Array.isArray(value) && !Object.keys(value).length) {
      if (!(side.migration?.emptyMaps ?? []).includes(parts.join('.'))) problems.push(`empty map ${legacyPath} not recorded`);
      continue;
    }
    const m = mapLegacyPath(parts, value, tokens.typography);
    if (m.kind === 'meta') {
      if (!isDeepStrictEqual(side.tokens?.[parts[0]], value)) problems.push(`meta ${legacyPath} differs`);
      continue;
    }
    if (m.kind === 'prose') {
      const literal = typeof value === 'string' ? value : JSON.stringify(value);
      const hit = side.migration.prose.some((p) => p.path === m.path && isDeepStrictEqual(p.value, value)) && v3.body.includes(`\`${literal}\``);
      if (!hit) problems.push(`prose value ${legacyPath}=${literal} not carried`);
      renames.push([legacyPath, `prose:${m.path}`]);
      continue;
    }
    const got = getPath(v3.fm, m.path);
    const want = m.numeric ? `${value}px` : value;
    if (!isDeepStrictEqual(got, want)) problems.push(`${legacyPath} → ${m.path}: want ${JSON.stringify(want)} got ${JSON.stringify(got)}`);
    if (m.numeric && !numeric.has(m.path)) problems.push(`${m.path} numeric origin not recorded`);
    mapped.add(m.path);
    if (legacyPath.slice(7) !== m.path) renames.push([legacyPath, m.path]);
  }

  // 2. Every v3 token leaf maps back to a legacy leaf, or is an overlay addition.
  const additions = [];
  const overlayPaths = new Set([...leaves({ typography: overlay.typography ?? {} }), ...leaves(overlay.add ?? {})].map(([p]) => p.join('.')));
  for (const g of ['colors', 'typography', 'rounded', 'spacing', 'components']) {
    if (v3.fm[g] === undefined) continue;
    for (const [parts, value] of leaves({ [g]: v3.fm[g] })) {
      const p = parts.join('.');
      if (value && typeof value === 'object' && !Array.isArray(value) && !Object.keys(value).length) continue;
      if (mapped.has(p)) continue;
      if (overlayPaths.has(p)) additions.push(p);
      else problems.push(`unexplained v3 token ${p}`);
    }
  }
  if (v3.fm.tokens) problems.push('legacy tokens: block still present');
  if (v3.fm.verification_v2) problems.push('verification_v2 still in frontmatter');

  // 3. Claims: each legacy claim re-keyed with identical evidence; extra claims only from the overlay.
  const lc = legacy.fm.verification_v2?.claims ?? {};
  const nc = side.verification_v2?.claims ?? {};
  const overlayClaims = overlay.verification?.claims ?? {};
  for (const [k, ev] of Object.entries(lc)) {
    const parts = k.slice(7).split('.');
    const m = mapLegacyPath(parts, getPath(tokens, parts.join('.')), tokens.typography);
    const nk = m.kind === 'prose' ? `prose:${m.path}` : m.path;
    if (!isDeepStrictEqual(nc[nk], ev)) problems.push(`claim ${k} → ${nk} missing or changed`);
  }
  for (const [k, ev] of Object.entries(overlayClaims)) if (!isDeepStrictEqual(nc[k], ev)) problems.push(`overlay claim ${k} missing`);
  const expectedClaims = Object.keys(lc).length + Object.keys(overlayClaims).length;
  if (expectedClaims !== Object.keys(nc).length) problems.push(`claim count ${expectedClaims} → ${Object.keys(nc).length}`);
  const { claims: _a, surfaces: ls = [], sources: lsrc = [], ...lv2 } = legacy.fm.verification_v2 ?? {};
  const { claims: _b, surfaces: ns = [], sources: nsrc = [], ...nv2 } = side.verification_v2 ?? {};
  if (overlay.verification?.checked) lv2.checked = overlay.verification.checked;
  if (!isDeepStrictEqual(lv2, nv2)) problems.push('verification_v2 (non-claim fields) changed');
  if (!isDeepStrictEqual([...ls, ...(overlay.verification?.surfaces ?? [])], ns)) problems.push('verification_v2.surfaces changed');
  if (!isDeepStrictEqual([...lsrc, ...(overlay.verification?.sources ?? [])], nsrc)) problems.push('verification_v2.sources changed');

  // 4. Catalog identity moved, unchanged.
  for (const [k, v] of Object.entries(legacy.fm)) {
    if (['tokens', 'verification_v2', 'omd'].includes(k)) continue;
    if (!isDeepStrictEqual(side.catalog?.[k], v)) problems.push(`catalog.${k} changed or missing`);
  }

  // 5. Prose: every non-heading legacy body line survives verbatim; every legacy heading survives as a heading.
  const v3Lines = new Set(v3.body.split('\n'));
  const v3Headings = new Set(v3.body.split('\n').filter((l) => /^#{1,6} /.test(l)).map((l) => l.replace(/^#+\s*(\d+\.\s*)?/, '')));
  let proseLines = 0;
  let fence = false;
  for (const line of legacy.body.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) fence = !fence;
    if (!line.trim()) continue;
    if (!fence && /^#{1,6} /.test(line)) {
      const title = line.replace(/^#+\s*(\d+\.\s*)?/, '');
      const sec = /^## /.test(line) ? sectionTarget(title) : null;
      const expect = sec && sec[1] === 'merge' ? sec[0] : title;
      if (!v3Headings.has(expect)) problems.push(`heading lost: ${line}`);
      else if (expect !== title) renames.push([line, `## ${expect}`]);
      continue;
    }
    proseLines++;
    if (!v3Lines.has(line)) problems.push(`prose line lost: ${line.slice(0, 80)}`);
  }

  return { ok: problems.length === 0, tokenLeaves, claims: Object.keys(lc).length, proseLines, renames: renames.length, additions, problems };
}

export function compare(legacyFile, v3Dir, overlayFile) {
  const overlay = overlayFile ? yaml.load(fs.readFileSync(overlayFile, 'utf8'), { schema: yaml.JSON_SCHEMA }) : {};
  return compareText(
    fs.readFileSync(legacyFile, 'utf8'),
    fs.readFileSync(path.join(v3Dir, 'DESIGN.md'), 'utf8'),
    JSON.parse(fs.readFileSync(path.join(v3Dir, 'reference.json'), 'utf8')),
    overlay,
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const oi = args.indexOf('--overlay');
  const overlay = oi >= 0 ? args.splice(oi, 2)[1] : null;
  const r = compare(args[0], args[1], overlay);
  console.log(JSON.stringify(r, null, 1));
  process.exit(r.ok ? 0 : 1);
}
