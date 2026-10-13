#!/usr/bin/env node
// For a Core v2 reference adopted by migration (toss, krds), write the hash-checked legacy bytes kept in
// .omd/system/graph.json extensions["dev.oh-my-design.migration"] so convert-legacy.mjs can read them.
// This is the same source web/scripts/lib/reference-source.mjs serves to the pipeline today.
//
//   node scripts/design-md-v3/extract-core-legacy.mjs <reference dir> <out file>
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const [dir, out] = process.argv.slice(2);
if (!dir || !out) throw new Error('usage: extract-core-legacy.mjs <reference dir> <out file>');
const graph = JSON.parse(fs.readFileSync(path.join(dir, '.omd/system/graph.json'), 'utf8'));
const mig = graph.extensions?.['dev.oh-my-design.migration'];
if (!mig?.original_segments) throw new Error(`${dir}: no migration segments (natively authored Core reference?)`);
const text = [...mig.original_segments].sort((a, b) => a.order - b.order).map((s) => s.content).join('');
const sha = crypto.createHash('sha256').update(text).digest('hex');
if (sha !== mig.source_sha256) throw new Error(`${dir}: segment hash ${sha} != source_sha256 ${mig.source_sha256}`);
fs.writeFileSync(out, text);
console.log(JSON.stringify({ out, sha256: sha, bytes: text.length }));
