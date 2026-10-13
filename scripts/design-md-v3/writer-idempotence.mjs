#!/usr/bin/env node
// The v3 writer is a no-op on an unedited reference: read the legacy-shaped source through the
// shared adapter, render it through writer.mjs, and require byte-identical DESIGN.md and
// reference.json for every catalog reference. Writes nothing.
//   node scripts/design-md-v3/writer-idempotence.mjs [id ...]
import fs from 'node:fs';
import path from 'node:path';
import { readReferenceSource } from '../../web/scripts/lib/reference-source.mjs';
import { renderReference } from './writer.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const refs = path.join(root, 'web/references');
const ids = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(refs).filter((id) => fs.existsSync(path.join(refs, id, 'reference.json')));
const bad = [];
for (const id of ids.sort()) {
  const dir = path.join(refs, id);
  try {
    const { designMd, sidecarJson, problems } = renderReference(dir, readReferenceSource(dir).markdown);
    const d = designMd === fs.readFileSync(path.join(dir, 'DESIGN.md'), 'utf8');
    const s = sidecarJson === fs.readFileSync(path.join(dir, 'reference.json'), 'utf8');
    if (!d || !s || problems.length) bad.push({ id, designMd: d, sidecar: s, problems: problems.slice(0, 2) });
  } catch (e) {
    bad.push({ id, error: e.message.slice(0, 200) });
  }
}
console.log(JSON.stringify({ checked: ids.length, identical: ids.length - bad.length, bad: bad.slice(0, 15) }, null, 1));
process.exit(bad.length ? 1 : 0);
