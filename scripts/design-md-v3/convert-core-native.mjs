#!/usr/bin/env node
// Convert a natively authored Core v2 catalog reference (serendie) to DESIGN.md v3.
//
//   node scripts/design-md-v3/convert-core-native.mjs <reference dir> --out <dir>
//
// A native package has no legacy bytes. Its catalog frontmatter (tokens, verification_v2, identity)
// is declared in .omd/system/graph.json extensions["dev.oh-my-design.catalog"], which
// readReferenceSource already projects in front of the Core body. The Core body's H3s carry the
// legacy section names, so the body is rewritten into that shape — Core section anchors, claim
// markers and the seven numbered Core H2s removed, H3s promoted — and then converted like any
// legacy file. Two compiler-generated blocks are dropped because spec §3.4 forbids a second token
// list in the body: "Semantic tokens" (a bullet list of the frontmatter colours/radii) and
// "Type roles" (a table of the frontmatter type roles). Every other line moves verbatim.
import fs from 'node:fs';
import path from 'node:path';
import { readReferenceSource } from '../../web/scripts/lib/reference-source.mjs';
import { splitFrontmatter } from '../../web/scripts/lib/design-md-v3.mjs';
import { convertText } from './convert-legacy.mjs';
import { compareText } from './compare-values.mjs';

const GENERATED_TOKEN_BLOCKS = new Set(['Semantic tokens', 'Type roles']);

export function coreBodyToLegacyShape(body) {
  const out = [];
  let skip = false;
  for (const line of body.split('\n')) {
    if (/^<!--\s*design-md:/.test(line.trim())) continue;
    if (/^## \d+\. /.test(line)) { skip = false; continue; }
    const h3 = /^### (.+?)\s*$/.exec(line);
    if (h3) {
      skip = GENERATED_TOKEN_BLOCKS.has(h3[1]);
      if (!skip) out.push(`## ${h3[1]}`);
      continue;
    }
    if (skip) continue;
    out.push(/^#{4,6} /.test(line) ? line.slice(1) : line);
  }
  return out.join('\n');
}

const [dir, , outDir] = process.argv.slice(2);
if (!dir || process.argv[3] !== '--out' || !outDir) throw new Error('usage: convert-core-native.mjs <reference dir> --out <dir>');
const source = readReferenceSource(dir);
if (source.format !== 'core-v2' || !source.projected) throw new Error(`${dir}: not a natively authored Core v2 reference`);
const split = splitFrontmatter(source.markdown);
const legacyText = `---\n${split.fmText}---\n\n${coreBodyToLegacyShape(split.body).replace(/^\n+/, '')}`;
const { designMd, sidecar, lint } = convertText(legacyText, {});
sidecar.migration.source = 'core-v2-native'; // catalog frontmatter came from the package's catalog extension
const cmp = compareText(legacyText, designMd, JSON.parse(JSON.stringify(sidecar)), {});
if (!cmp.ok || lint.summary.errors) throw new Error(JSON.stringify({ lint: lint.summary, problems: cmp.problems.slice(0, 5) }));
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'DESIGN.md'), designMd);
fs.writeFileSync(path.join(outDir, 'reference.json'), `${JSON.stringify(sidecar, null, 2)}\n`);
console.log(JSON.stringify({ outDir, lint: lint.summary, claims: cmp.claims, tokenLeaves: cmp.tokenLeaves, proseLines: cmp.proseLines }));
