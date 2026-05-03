#!/usr/bin/env node
// Stop hook — at session end, run fold-in algorithm on .omd/preferences.md.
// If proposals exceed threshold, append a note to .omd/timeline.md so the
// next SessionStart hook surfaces it as "fold-in proposals ready: N".

'use strict';

const fs = require('node:fs');
const path = require('node:path');

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

// Parse pending entries (very rough)
const blocks = prefText.split(/^### /m).slice(1);
const now = Date.now();
const windowMs = config.recurrence_window_days * 24 * 3600 * 1000;
const byScope = new Map();

for (const block of blocks) {
  const tsMatch = /^- ts:\s*(.+)$/m.exec(block);
  const scopeMatch = /^- scope:\s*(.+)$/m.exec(block);
  const statusMatch = /^- status:\s*(\w+)$/m.exec(block);
  const importanceMatch = /^- importance:\s*([1-5])$/m.exec(block);
  if ((statusMatch?.[1] || 'pending') !== 'pending') continue;
  if (!tsMatch || !scopeMatch) continue;
  const ts = new Date(tsMatch[1]).getTime();
  if (Number.isNaN(ts) || now - ts > windowMs) continue;
  const scope = scopeMatch[1];
  const importance = parseInt(importanceMatch?.[1] || '3', 10);
  const list = byScope.get(scope) || [];
  list.push({ ts, importance });
  byScope.set(scope, list);
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

