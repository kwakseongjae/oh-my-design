#!/usr/bin/env node
// Stop hook — at session end, run fold-in algorithm on .omd/preferences.md.
// If proposals exceed threshold, append a note to .omd/timeline.md AND write
// .omd/foldin-proposal.json so the next SessionStart hook instructs the agent
// to ask via AskUserQuestion (hooks can't render UI — the agent layer does).

'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { parsePreferences } = require('./lib/preferences-parser.cjs');

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const preferencesMd = path.join(projectDir, '.omd', 'preferences.md');
const timelineMd = path.join(projectDir, '.omd', 'timeline.md');
const configJson = path.join(projectDir, '.omd', 'config.json');
const proposalJson = path.join(projectDir, '.omd', 'foldin-proposal.json');

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
  list.push({ ts, importance, id: entry.raw.id || '', body: entry.body || '' });
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
    // One-line summary from the latest entry's body (first non-empty line).
    const latest = entries.reduce((m, e) => (e.ts > m.ts ? e : m), entries[0]);
    const summary =
      (latest.body.split('\n').find((l) => l.trim()) || '').trim();
    proposals.push({
      scope,
      count: entries.length,
      score: Math.round(score),
      entry_ids: entries.map((e) => e.id).filter(Boolean),
      summary,
      latestTs: lastTs,
    });
  }
}

if (proposals.length === 0) process.exit(0);

// Append to timeline.md
const ts = new Date().toISOString();
const block =
  `## ${ts} — fold_in_proposal\n\n` +
  `${proposals.length} fold-in proposals ready (top: ${proposals[0].scope}, score ${proposals[0].score}).\n\n` +
  '```json\n' +
  JSON.stringify(
    proposals.slice(0, 5).map(({ scope, count, score }) => ({ scope, count, score })),
    null,
    2,
  ) +
  '\n```\n\n';

if (!fs.existsSync(path.dirname(timelineMd))) {
  fs.mkdirSync(path.dirname(timelineMd), { recursive: true });
}
if (!fs.existsSync(timelineMd)) {
  fs.writeFileSync(timelineMd, '# OMD TIMELINE — per-session journal\n\n' + block);
} else {
  fs.appendFileSync(timelineMd, block);
}

// Write the structured proposal for the next SessionStart (auto-fold gate,
// issue #23). Overwrite any prior proposal UNLESS it is snoozed and no scope
// gained a new entry since snoozed_at — don't re-ask on every session.
let writeProposal = true;
try {
  const prior = JSON.parse(fs.readFileSync(proposalJson, 'utf8'));
  if (prior && prior.status === 'snoozed' && prior.snoozed_at) {
    const snoozedAt = new Date(prior.snoozed_at).getTime();
    if (
      !Number.isNaN(snoozedAt) &&
      proposals.every((p) => p.latestTs <= snoozedAt)
    ) {
      writeProposal = false; // still snoozed, nothing new — leave it alone
    }
  }
} catch {
  // no prior proposal / malformed → overwrite
}
if (writeProposal) {
  fs.writeFileSync(
    proposalJson,
    JSON.stringify(
      {
        created_at: new Date().toISOString(),
        status: 'proposed',
        scopes: proposals.map(({ scope, count, score, entry_ids, summary }) => ({
          scope,
          count,
          score,
          entry_ids,
          summary,
        })),
      },
      null,
      2,
    ) + '\n',
  );
}

// Optional: print one-line confirmation to stdout
process.stdout.write(JSON.stringify({}) || '');

// ── Hermes #38: §10-15 maturity ratchet — single writer of .omd/maturity.json.
// Additive + best-effort: silently no-ops if a root DESIGN.md or omd-core isn't
// reachable (e.g. before packaging ships omd-core alongside hooks). Never throws.
(async () => {
  try {
    const designMd = path.join(projectDir, 'DESIGN.md');
    if (!fs.existsSync(designMd)) return;
    const candidates = [
      path.join(projectDir, 'web', 'scripts', 'lib', 'omd-core.mjs'),
      path.join(__dirname, '..', 'skills', 'omd-absorb', 'scripts', 'omd-core.mjs'),
      path.join(__dirname, 'lib', 'omd-core.mjs'),
    ];
    const corePath = candidates.find((p) => fs.existsSync(p));
    if (!corePath) return;
    const core = await import(require('node:url').pathToFileURL(corePath).href);
    const raw = fs.readFileSync(designMd, 'utf8');
    const maturityJson = path.join(projectDir, '.omd', 'maturity.json');
    let prev = null;
    try { prev = JSON.parse(fs.readFileSync(maturityJson, 'utf8')); } catch { /* first run */ }
    let prefs = [];
    try { prefs = parsePreferences(fs.readFileSync(preferencesMd, 'utf8')); } catch { /* none */ }
    const ratchet = core.maturityRatchet(prev, raw);
    const top = core.enrichmentTargets(raw, prefs).find((t) => t.readySignals > 0) || null;
    fs.writeFileSync(maturityJson, JSON.stringify({
      ...ratchet, updated_at: new Date().toISOString(),
      top_enrichment: top ? { n: top.n, title: top.title, purpose: top.purpose, readySignals: top.readySignals } : null,
    }, null, 2) + '\n');
  } catch { /* Hermes maturity is best-effort — never break session end */ }
})();

