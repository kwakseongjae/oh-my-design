#!/usr/bin/env node
/**
 * Token backfill TRACKER — the live checklist. Scans every reference and reports
 * which already carry a `tokens:` block (done) vs. which still need one (pending),
 * plus the token `source` and a quick consistency probe. Source of truth is the
 * files themselves, so it never drifts.
 *
 *   node web/scripts/token-status.mjs            # summary + pending list
 *   node web/scripts/token-status.mjs --md       # markdown checklist (for a doc)
 *   node web/scripts/token-status.mjs --done      # list only completed
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const REFS = join(dirname(fileURLToPath(import.meta.url)), '..', 'references');
const asMd = process.argv.includes('--md');
const onlyDone = process.argv.includes('--done');

const ids = readdirSync(REFS, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(join(REFS, d.name, 'DESIGN.md')))
  .map(d => d.name).sort();

const rows = ids.map(id => {
  const md = readFileSync(join(REFS, id, 'DESIGN.md'), 'utf8');
  let tokens = null;
  if (/^tokens:/m.test(md.slice(0, md.indexOf('\n---', 4) + 1))) {
    try { tokens = yaml.load(md.slice(4, md.indexOf('\n---', 4))).tokens; } catch { tokens = { _bad: true }; }
  }
  if (!tokens) return { id, status: 'pending', source: '-', colors: 0, ground: '-' };
  if (tokens._bad) return { id, status: 'error', source: 'bad-yaml', colors: 0, ground: '-' };
  const colorObj = tokens.colors || tokens.color || {};
  const ground = md.replace(/\ntokens:\n(?:[ \t].*(?:\n|$))*/, '\n').toLowerCase();
  const ungrounded = Object.entries(colorObj).filter(([, h]) => !ground.includes(String(h).toLowerCase())).map(([k]) => k);
  return { id, status: ungrounded.length ? 'check' : 'done', source: tokens.source || '?', colors: Object.keys(colorObj).length, ground: ungrounded.length ? `ungrounded:${ungrounded.join(',')}` : 'ok' };
});

const done = rows.filter(r => r.status === 'done');
const pending = rows.filter(r => r.status === 'pending');
const flagged = rows.filter(r => r.status === 'check' || r.status === 'error');

if (asMd) {
  console.log(`# Token backfill checklist\n`);
  console.log(`Done **${done.length}** / ${rows.length} · pending ${pending.length} · needs-attention ${flagged.length}\n`);
  console.log(`## Done\n${done.map(r => `- [x] ${r.id} \`${r.source}\` (${r.colors} colors)`).join('\n') || '- none'}\n`);
  if (flagged.length) console.log(`## Needs attention\n${flagged.map(r => `- [ ] ${r.id} — ${r.status} (${r.ground})`).join('\n')}\n`);
  console.log(`## Pending\n${pending.map(r => `- [ ] ${r.id}`).join('\n') || '- none'}`);
} else if (onlyDone) {
  done.forEach(r => console.log(`${r.id}\t${r.source}\t${r.colors}c`));
} else {
  console.log(`tokens: done ${done.length}/${rows.length} · pending ${pending.length} · needs-attention ${flagged.length}\n`);
  if (flagged.length) { console.log('NEEDS ATTENTION:'); flagged.forEach(r => console.log(`  ${r.id.padEnd(14)} ${r.status} ${r.ground}`)); console.log(''); }
  console.log('DONE:', done.map(r => r.id).join(' ') || '(none)');
  console.log(`\nPENDING (${pending.length}):`, pending.map(r => r.id).join(' '));
}
