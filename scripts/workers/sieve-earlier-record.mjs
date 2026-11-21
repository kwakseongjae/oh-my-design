#!/usr/bin/env node
/**
 * Sort the "Earlier record, not re-confirmed" text of a re-verification by one mechanical test: does every literal
 * value in a sentence (a hex colour, a px/rem/em/ms/% length) appear among the values measured in this run?
 *
 *   node scripts/workers/sieve-earlier-record.mjs <worker folder> [--json]
 *
 * A re-verification worker moves every prior sentence it did not confirm under "### Earlier record, not re-confirmed
 * on <date>" (make-reverify-order.py). Workers are cautious: on 2026-11-21 that was 50 to 70 percent of four bodies,
 * including sentences whose values were measured again the same day. This reads <folder>/out/DESIGN.md (frontmatter =
 * what was measured and assembled; body = text) and <folder>/compiled/*.json if present, and puts each sentence of
 * the earlier record in one of three piles:
 *   measured   it names at least one literal value and all of them are in today's measured set
 *   differs    it names a value that is not in today's set (stays under the heading)
 *   no-value   it names no literal value: prose a script cannot test (stays; a person or a source decides)
 * It changes nothing, and "measured" is not "confirmed": it says the value in the sentence is one this run measured,
 * not that what the sentence says about the value is true. A sentence never returns to the body on this test alone
 * (AGENTS.md: no promotion by heuristic). The piles tell the orchestrator how much of the earlier record a person or
 * a source has to read.
 */
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const dir = args.find((a) => !a.startsWith('--'));
if (!dir) { console.error('usage: sieve-earlier-record.mjs <worker folder> [--json]'); process.exit(2); }
const text = fs.readFileSync(path.join(dir, 'out/DESIGN.md'), 'utf8');
const end = text.indexOf('\n---\n', 4);
const front = text.slice(0, end), body = text.slice(end + 5);
const HEX = /#[0-9a-fA-F]{3,8}\b/g, LEN = /(?<![\w.#-])\d+(?:\.\d+)?(?:px|rem|em|ms|%)(?![\w-])/g;
const norm = (h) => { let s = h.toLowerCase(); if (s.length === 4) s = '#' + [...s.slice(1)].map((c) => c + c).join(''); return s; };
const measured = new Set();
// Only values the assembled frontmatter states, with their unit. An earlier version also took every bare number
// (as px) and every colour anywhere under compiled/, so a sentence passed if its number appeared anywhere at all.
const feed = (s) => { for (const m of s.match(HEX) ?? []) measured.add(norm(m)); for (const m of s.match(LEN) ?? []) measured.add(m.toLowerCase()); };
feed(front);
const parts = body.split(/\n(?=### Earlier record)/);
const earlier = parts.slice(1).map((p) => { const stop = p.search(/\n#{2,3} (?!Earlier record)/); return stop >= 0 ? p.slice(0, stop) : p; });
const piles = { measured: [], differs: [], 'no-value': [] };
for (const block of earlier) {
  for (const raw of block.split('\n').slice(1)) {
    const line = raw.trim();
    if (!line || /^The following is earlier wording/.test(line) || /^\|?[-:| ]+\|?$/.test(line)) continue;
    for (const sentence of line.split(/(?<=[.!?。])\s+(?=[A-Z가-힣"'\`*\[(])/)) {
      const s = sentence.trim(); if (s.length < 8) continue;
      const vals = [...(s.match(HEX) ?? []).map(norm), ...(s.match(LEN) ?? []).map((v) => v.toLowerCase())];
      const pile = !vals.length ? 'no-value' : vals.every((v) => measured.has(v)) ? 'measured' : 'differs';
      piles[pile].push({ text: s, values: vals, missing: vals.filter((v) => !measured.has(v)) });
    }
  }
}
const chars = (list) => list.reduce((n, x) => n + x.text.length, 0);
const total = chars(piles.measured) + chars(piles.differs) + chars(piles['no-value']);
const out = { folder: path.basename(path.resolve(dir)), bodyChars: body.length, earlierChars: earlier.join('').length, sentences: { measured: piles.measured.length, differs: piles.differs.length, noValue: piles['no-value'].length }, share: { measured: Math.round((chars(piles.measured) / total) * 100), differs: Math.round((chars(piles.differs) / total) * 100), noValue: Math.round((chars(piles['no-value']) / total) * 100) }, measuredValues: measured.size, sampleDiffers: piles.differs.slice(0, 3).map((x) => x.missing.join(' ') + ' ← ' + x.text.slice(0, 90)) };
if (args.includes('--json')) console.log(JSON.stringify({ ...out, piles }, null, 1));
else console.log(out.folder + ': earlier record ' + out.earlierChars + ' of ' + out.bodyChars + ' chars · measured today ' + out.share.measured + '% (' + out.sentences.measured + ' sentences) · a value differs ' + out.share.differs + '% (' + out.sentences.differs + ') · no value to test ' + out.share.noValue + '% (' + out.sentences.noValue + ')\n' + out.sampleDiffers.map((s) => '    ' + s).join('\n'));
