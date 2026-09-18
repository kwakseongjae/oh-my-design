#!/usr/bin/env node

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const destination = path.join(root, 'web/src/generated/core-verifier');
const sources = [
  'scripts/compile-design-md-core.cjs',
  'scripts/design-md-core.cjs',
  'scripts/design-md-core-schema.cjs',
  'scripts/design-md-core-conformance.cjs',
  'scripts/prepare-design-md-core-review.cjs',
  'spec/schema/design-md-core-adoption-receipt-v2.schema.json',
  'spec/schema/design-md-core-adoption-review-v2.schema.json',
  'spec/schema/design-md-core-manifest-v2.schema.json',
  'spec/schema/design-md-core-project-checkpoint-v2.schema.json',
  'spec/schema/design-system-coverage-v2.schema.json',
  'spec/schema/design-system-graph-v2.schema.json',
  'spec/schema/design-system-provenance-v2.schema.json',
];

const sha256 = (bytes) => crypto.createHash('sha256').update(bytes).digest('hex');
const targetRelative = (source) => source.startsWith('spec/schema/')
  ? `schema/${path.basename(source)}`
  : path.basename(source);

function expectedFiles() {
  const entries = sources.map((source) => {
    const bytes = fs.readFileSync(path.join(root, source));
    return { source, target: targetRelative(source), bytes, sha256: sha256(bytes) };
  });
  const schemaTargets = entries.filter((entry) => entry.target.startsWith('schema/')).map((entry) => entry.target);
  const entryBytes = Buffer.from([
    "const key = Symbol.for('oh-my-design.core-v2.embedded-schemas');",
    'globalThis[key] = Object.freeze({',
    ...schemaTargets.map((target) => `  ${JSON.stringify(path.basename(target))}: require(${JSON.stringify(`./${target}`)}),`),
    '});',
    "module.exports = require('./compile-design-md-core.cjs');",
    '',
  ].join('\n'));
  entries.push({ source: null, target: 'web-core-verifier.cjs', bytes: entryBytes, sha256: sha256(entryBytes) });
  const manifest = Buffer.from(`${JSON.stringify({
    schema_version: 1,
    kind: 'generated-web-core-verifier-closure',
    files: entries.map(({ source, target, sha256: digest }) => ({ source, target, sha256: digest })),
  }, null, 2)}\n`);
  return [...entries, { source: null, target: 'source-manifest.json', bytes: manifest, sha256: sha256(manifest) }];
}

function check(files) {
  const failures = [];
  for (const file of files) {
    const target = path.join(destination, file.target);
    if (!fs.existsSync(target)) failures.push(`missing ${file.target}`);
    else if (!fs.readFileSync(target).equals(file.bytes)) failures.push(`drift ${file.target}`);
  }
  if (failures.length) throw new Error(failures.join('; '));
}

function write(files) {
  for (const file of files) {
    const target = path.join(destination, file.target);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, file.bytes);
  }
}

try {
  const files = expectedFiles();
  if (process.argv.includes('--check')) check(files);
  else write(files);
  process.stdout.write(`${process.argv.includes('--check') ? 'checked' : 'generated'} ${files.length} web verifier files\n`);
} catch (error) {
  process.stderr.write(`web core verifier closure: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
}
