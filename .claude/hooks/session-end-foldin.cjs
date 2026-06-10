#!/usr/bin/env node
// Stop hook — at session end, run fold-in algorithm on .omd/preferences.md.
// If proposals exceed threshold, append a note to .omd/timeline.md so the
// next SessionStart hook surfaces it as "fold-in proposals ready: N".

'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { parsePreferences } = require('./lib/preferences-parser.cjs');

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const preferencesMd = path.join(projectDir, '.omd', 'preferences.md');
const timelineMd = path.join(projectDir, '.omd', 'timeline.md');
const configJson = path.join(projectDir, '.omd', 'config.json');

if (!fs.existsSync(preferencesMd)) process.exit(0);

let config = {
  fold_in_score_threshold: 60,
  recurrence_window_days: 7,
};
try {
  if (fs.existsSync(configJson)) {
    config = { ...config, ...JSON.parse(fs.readFileSync(configJson, 'utf8')) };
  }
} catch {
  // ignore
}

let prefText;
try {
  prefText = fs.readFileSync(preferencesMd, 'utf8');
} catch {
  process.exit(0);
}

// Parse the CANONICAL omd:remember format (## heading + ```omd-meta block).
const now = Date.now();
const windowMs = config.recurrence_window_days * 24 * 3600 * 1000;
const byScope = new Map();

for (const entry of parsePreferences(prefText)) {
  if (entry.status !== 'pending') continue;
  if (!entry.scope) continue;
  const ts = entry.timestamp;
  if (Number.isNaN(ts) || now - ts > windowMs) continue;
  // The canonical format carries no numeric importance; derive a 1-5 weight
  // from confidence (explicit statements weigh more than inferred).
  const importance = entry.confidence === 'inferred' ? 2 : 4;
  const list = byScope.get(entry.scope) || [];
  list.push({ ts, importance });
  byScope.set(entry.scope, list);
}

const proposals = [];
for (const [scope, entries] of byScope.entries()) {
  if (entries.length < 3) continue;
  const importanceAvg = entries.reduce((s, e) => s + e.importance, 0) / entries.length;
  // Hard floor matches src/core/memory.ts — keep these in sync.
  if (importanceAvg < 2.5) continue;
  const lastTs = entries.reduce((m, e) => Math.max(m, e.ts), 0);
  const daysSince = (now - lastTs) / (24 * 3600 * 1000);
  const recency = Math.exp(-daysSince / 7);
  const score = entries.length * importanceAvg * recency * 10;
  if (score >= config.fold_in_score_threshold) {
    proposals.push({ scope, count: entries.length, score: Math.round(score) });
  }
}

if (proposals.length === 0) process.exit(0);

// Append to timeline.md
const ts = new Date().toISOString();
const block =
  `## ${ts} — fold_in_proposal\n\n` +
  `${proposals.length} fold-in proposals ready (top: ${proposals[0].scope}, score ${proposals[0].score}).\n\n` +
  '```json\n' +
  JSON.stringify(proposals.slice(0, 5), null, 2) +
  '\n```\n\n';

if (!fs.existsSync(path.dirname(timelineMd))) {
  fs.mkdirSync(path.dirname(timelineMd), { recursive: true });
}
if (!fs.existsSync(timelineMd)) {
  fs.writeFileSync(timelineMd, '# OMD TIMELINE — per-session journal\n\n' + block);
} else {
  fs.appendFileSync(timelineMd, block);
}

// Optional: print one-line confirmation to stdout
process.stdout.write(JSON.stringify({}) || '');

