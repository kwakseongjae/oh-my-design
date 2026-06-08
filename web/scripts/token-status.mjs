#!/usr/bin/env node
/**
 * Catalog TRACKER — the live checklist. Scans every reference and reports, per ref:
 *   - token backfill: has a `tokens:` block (done) vs. still needs one (pending),
 *     the token `source`, and a consistency probe (colors grounded in prose).
 *   - component depth: how many `tokens.components` are documented, and whether a
 *     component-harvest pass has been run (`tokens.components_harvested: true`).
 * Source of truth is the files themselves, so it never drifts.
 *
 *   node web/scripts/token-status.mjs            # summary + pending / harvest lists
 *   node web/scripts/token-status.mjs --md       # markdown checklist (for a doc)
 *   node web/scripts/token-status.mjs --done      # list only token-completed
 *   node web/scripts/token-status.mjs --components # focus the component-depth view
 *
 * Component philosophy: we DON'T force richness. A source-limited ref (e.g. a
 * landing-page-only mobile app) is legitimately "done" once harvested even with
 * few components — the harvest pass marks `components_harvested: true` so it stops
 * showing up as a candidate. The list only nags refs we haven't *tried* yet.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const REFS = join(dirname(fileURLToPath(import.meta.url)), '..', 'references');
const asMd = process.argv.includes('--md');
const onlyDone = process.argv.includes('--done');
const compView = process.argv.includes('--components');

const RICH = 10; // >= this many tokens.components reads as "rich"

const ids = readdirSync(REFS, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(join(REFS, d.name, 'DESIGN.md')))
  .map(d => d.name).sort();

const rows = ids.map(id => {
  const md = readFileSync(join(REFS, id, 'DESIGN.md'), 'utf8');
  let tokens = null;
  if (/^tokens:/m.test(md.slice(0, md.indexOf('\n---', 4) + 1))) {
    try { tokens = yaml.load(md.slice(4, md.indexOf('\n---', 4))).tokens; } catch { tokens = { _bad: true }; }
  }
  if (!tokens) return { id, status: 'pending', source: '-', colors: 0, ground: '-', comp: 0, cstatus: 'no-tokens' };
  if (tokens._bad) return { id, status: 'error', source: 'bad-yaml', colors: 0, ground: '-', comp: 0, cstatus: 'no-tokens' };
  const colorObj = tokens.colors || tokens.color || {};
  const ground = md.replace(/\ntokens:\n(?:[ \t].*(?:\n|$))*/, '\n').toLowerCase();
  const ungrounded = Object.entries(colorObj).filter(([, h]) => !ground.includes(String(h).toLowerCase())).map(([k]) => k);
  // Component depth
  const comp = Object.keys(tokens.components || {}).length;
  const harvested = tokens.components_harvested === true;
  const cstatus = harvested ? 'harvested' : comp >= RICH ? 'rich' : comp >= 1 ? 'baseline' : 'none';
  return {
    id,
    status: ungrounded.length ? 'check' : 'done',
    source: tokens.source || '?',
    colors: Object.keys(colorObj).length,
    ground: ungrounded.length ? `ungrounded:${ungrounded.join(',')}` : 'ok',
    comp, harvested, cstatus,
  };
});

const done = rows.filter(r => r.status === 'done');
const pending = rows.filter(r => r.status === 'pending');
const flagged = rows.filter(r => r.status === 'check' || r.status === 'error');

// Component view: a "harvest candidate" is a tokenized ref we haven't run the
// harvest pass on AND whose component map is still below rich. Harvested refs
// (rich OR honestly-capped) drop off — we don't nag source-limited refs.
const withTokens = rows.filter(r => r.cstatus !== 'no-tokens');
const harvested = withTokens.filter(r => r.harvested);
const rich = withTokens.filter(r => !r.harvested && r.cstatus === 'rich');
const candidates = withTokens.filter(r => !r.harvested && r.comp < RICH);

if (asMd) {
  console.log(`# Catalog checklist\n`);
  console.log(`**Tokens** — done ${done.length}/${rows.length} · pending ${pending.length} · needs-attention ${flagged.length}`);
  console.log(`**Components** — harvested ${harvested.length} · rich(unmarked) ${rich.length} · candidates ${candidates.length}\n`);
  console.log(`## Tokens — Done\n${done.map(r => `- [x] ${r.id} \`${r.source}\` (${r.colors} colors, ${r.comp} comp)`).join('\n') || '- none'}\n`);
  if (flagged.length) console.log(`## Tokens — Needs attention\n${flagged.map(r => `- [ ] ${r.id} — ${r.status} (${r.ground})`).join('\n')}\n`);
  console.log(`## Tokens — Pending\n${pending.map(r => `- [ ] ${r.id}`).join('\n') || '- none'}\n`);
  console.log(`## Components — Harvested (done, incl. honestly-capped)\n${harvested.map(r => `- [x] ${r.id} (${r.comp} comp)`).join('\n') || '- none'}\n`);
  console.log(`## Components — Harvest candidates (tokenized, <${RICH} comp, not yet harvested)\n${candidates.map(r => `- [ ] ${r.id} (${r.comp} comp)`).join('\n') || '- none'}`);
} else if (onlyDone) {
  done.forEach(r => console.log(`${r.id}\t${r.source}\t${r.colors}c\t${r.comp}comp${r.harvested ? '\tharvested' : ''}`));
} else if (compView) {
  console.log(`components: harvested ${harvested.length} · rich(unmarked) ${rich.length} · candidates ${candidates.length} · no-tokens ${rows.length - withTokens.length}\n`);
  console.log('HARVESTED:', harvested.map(r => `${r.id}(${r.comp})`).join(' ') || '(none)');
  console.log(`\nCANDIDATES (${candidates.length}, tokenized & <${RICH} comp):`, candidates.map(r => `${r.id}(${r.comp})`).join(' ') || '(none)');
} else {
  console.log(`tokens: done ${done.length}/${rows.length} · pending ${pending.length} · needs-attention ${flagged.length}`);
  console.log(`components: harvested ${harvested.length} · rich(unmarked) ${rich.length} · candidates ${candidates.length}\n`);
  if (flagged.length) { console.log('NEEDS ATTENTION:'); flagged.forEach(r => console.log(`  ${r.id.padEnd(14)} ${r.status} ${r.ground}`)); console.log(''); }
  console.log('DONE:', done.map(r => r.id).join(' ') || '(none)');
  console.log(`\nPENDING (${pending.length}):`, pending.map(r => r.id).join(' '));
}
