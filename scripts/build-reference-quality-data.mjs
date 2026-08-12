#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  evaluateReferenceQuality,
  parseReferenceFrontmatter,
  REFERENCE_QUALITY_SCHEMA_VERSION,
} from '../web/scripts/lib/reference-quality.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const REFS_DIR = join(ROOT, 'web', 'references');
const OUT_FILE = join(ROOT, 'data', 'reference-quality.json');
const CHECK = process.argv.includes('--check');
const asOfIndex = process.argv.indexOf('--as-of');
const AS_OF = asOfIndex >= 0
  ? process.argv[asOfIndex + 1]
  : new Date().toISOString().slice(0, 10);

if (!/^\d{4}-\d{2}-\d{2}$/.test(AS_OF ?? '')) {
  console.error('build-reference-quality-data: --as-of must be YYYY-MM-DD');
  process.exit(2);
}

const ids = readdirSync(REFS_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(join(REFS_DIR, entry.name, 'DESIGN.md')))
  .map((entry) => entry.name)
  .sort();

const items = ids.map((id) => {
  const designPath = join(REFS_DIR, id, 'DESIGN.md');
  const markdown = readFileSync(designPath, 'utf8');
  const frontmatter = parseReferenceFrontmatter(markdown, designPath);
  const verificationPath = join(REFS_DIR, id, '.verification.md');
  const verificationMarkdown = existsSync(verificationPath)
    ? readFileSync(verificationPath, 'utf8')
    : '';
  const entry = evaluateReferenceQuality({
    id,
    markdown,
    frontmatter,
    verificationMarkdown,
    asOf: AS_OF,
  });
  return {
    id: entry.id,
    status: entry.status,
    verified_at: entry.verifiedAt,
    next_reverify_at: entry.nextReverifyAt,
    evidence_coverage: entry.evidenceCoverage,
    surface_count: entry.surfaceCount,
    source_count: entry.sourceCount,
    conflict_count: entry.conflictCount,
    reason_codes: entry.reasonCodes,
  };
});

const counts = {
  verified_v2: items.filter((item) => item.status === 'verified_v2').length,
  partial: items.filter((item) => item.status === 'partial').length,
  legacy_snapshot: items.filter((item) => item.status === 'legacy_snapshot').length,
  total: items.length,
};

const manifest = {
  schema_version: REFERENCE_QUALITY_SCHEMA_VERSION,
  generated_at: AS_OF,
  generator: 'scripts/build-reference-quality-data.mjs',
  count: items.length,
  counts,
  items,
};
const output = `${JSON.stringify(manifest, null, 2)}\n`;

if (CHECK) {
  const current = existsSync(OUT_FILE) ? readFileSync(OUT_FILE, 'utf8') : null;
  let comparableCurrent = current;
  // A read-only publish check must not require rewriting an otherwise identical
  // generated artifact solely to advance its wall-clock stamp. We still
  // evaluate every reference at today's date above, so a TTL/status/evidence
  // change remains a real byte drift and fails closed. An explicit --as-of is
  // strict and is used when intentionally resealing the snapshot date.
  if (current && asOfIndex < 0) {
    try {
      const parsed = JSON.parse(current);
      comparableCurrent = `${JSON.stringify({ ...parsed, generated_at: AS_OF }, null, 2)}\n`;
    } catch {
      comparableCurrent = current;
    }
  }
  if (!current || comparableCurrent !== output) {
    console.error('reference-quality.json is stale; run `npm run query:references:data`.');
    process.exit(1);
  }
  const persistedAsOf = JSON.parse(current).generated_at;
  console.log(`reference-quality.json current (${items.length} entries evaluated as of ${AS_OF}; snapshot ${persistedAsOf})`);
} else {
  writeFileSync(OUT_FILE, output, 'utf8');
  console.log(`wrote ${OUT_FILE} (${items.length} entries as of ${AS_OF})`);
}
