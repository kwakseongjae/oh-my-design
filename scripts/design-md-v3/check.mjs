#!/usr/bin/env node
// `design-md-v3 check` (spec §10): conformance of v3 reference directories.
//   node scripts/design-md-v3/check.mjs [<reference dir> ...]   (default: every v3 file in web/references)
import fs from 'node:fs';
import path from 'node:path';
import { runLint } from './convert-legacy.mjs';
import { checkV3 } from '../../web/scripts/lib/design-md-v3-check.mjs';
import { isV3Markdown } from '../../web/scripts/lib/design-md-v3.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
let dirs = process.argv.slice(2);
if (!dirs.length) {
  const refs = path.join(root, 'web/references');
  dirs = fs.readdirSync(refs).map((id) => path.join(refs, id))
    .filter((d) => fs.existsSync(path.join(d, 'DESIGN.md')) && isV3Markdown(fs.readFileSync(path.join(d, 'DESIGN.md'), 'utf8')));
}
let failed = 0;
for (const dir of dirs) {
  if (!fs.existsSync(path.join(dir, 'DESIGN.md'))) continue;
  const text = fs.readFileSync(path.join(dir, 'DESIGN.md'), 'utf8');
  if (!isV3Markdown(text)) continue;
  const sidecarPath = path.join(dir, 'reference.json');
  const sidecar = fs.existsSync(sidecarPath) ? JSON.parse(fs.readFileSync(sidecarPath, 'utf8')) : null;
  const problems = checkV3({ text, sidecar, lint: runLint(text) });
  if (problems.length) {
    failed++;
    console.log(`${path.basename(dir)}: ${problems.slice(0, 4).join(' || ')}`);
  }
}
console.log(JSON.stringify({ checked: dirs.length, failed }));
process.exit(failed ? 1 : 0);
