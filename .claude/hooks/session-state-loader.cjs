#!/usr/bin/env node
// SessionStart hook — load .omd/state.md (and a recent timeline tail) into the
// session as additionalContext. If state.md is missing or stale, recompute
// best-effort from preferences.md + timeline.md.

'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { countPending } = require('./lib/preferences-parser.cjs');

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const stateMd = path.join(projectDir, '.omd', 'state.md');
const timelineMd = path.join(projectDir, '.omd', 'timeline.md');
const preferencesMd = path.join(projectDir, '.omd', 'preferences.md');
const proposalJson = path.join(projectDir, '.omd', 'foldin-proposal.json');

function safeRead(p) {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return null;
  }
}

const lines = [];

if (fs.existsSync(stateMd)) {
  const content = safeRead(stateMd);
  if (content) {
    lines.push('## OMD ENVIRONMENT STATE');
    lines.push('');
    lines.push(content.split('\n').slice(0, 60).join('\n')); // cap injection size
    lines.push('');
  }
} else if (fs.existsSync(preferencesMd)) {
  // Best-effort fallback — count pending entries (canonical omd:remember format).
  const text = safeRead(preferencesMd) || '';
  const pendingCount = countPending(text);
  if (pendingCount > 0) {
    lines.push('## OMD ENVIRONMENT STATE');
    lines.push('');
    lines.push(`Pending preferences: ${pendingCount}${pendingCount >= 7 ? ' — consider /omd-learn review' : ''}`);
    lines.push('');
  }
}

// Auto-fold gate (issue #23): a "proposed" fold-in proposal instructs the
// agent to ask the user via AskUserQuestion — hooks can't render UI, the
// agent executes the question at session start. Snoozed/applied → silent.
let proposal = null;
try {
  proposal = JSON.parse(fs.readFileSync(proposalJson, 'utf8'));
} catch {
  // missing / malformed → no proposal
}
if (
  proposal &&
  proposal.status === 'proposed' &&
  Array.isArray(proposal.scopes) &&
  proposal.scopes.length > 0
) {
  const items = proposal.scopes
    .map((s) => `${s.scope}: ${s.summary || '(no summary)'} (${s.count}×)`)
    .join('; ');
  const perScope =
    proposal.scopes.length <= 3
      ? ` / per-scope picks (${proposal.scopes.map((s) => s.scope).join(', ')})`
      : '';
  lines.push('## OMD FOLD-IN PROPOSAL');
  lines.push('');
  lines.push(`${proposal.scopes.length} scope(s) recurred: ${items}.`);
  lines.push(
    `Ask the user via AskUserQuestion (one question, options: '전부 반영'${perScope} / '나중에') whether to fold these into DESIGN.md.`,
  );
  lines.push(
    "On approve: run the omd:learn skill for the approved scopes, then set .omd/foldin-proposal.json status to 'applied'.",
  );
  lines.push(
    "On decline: set status to 'snoozed' and add snoozed_at (ISO timestamp).",
  );
  lines.push('');
}

if (fs.existsSync(timelineMd)) {
  const text = safeRead(timelineMd) || '';
  const blocks = text.split(/^## /m).slice(1).slice(-3);
  if (blocks.length > 0) {
    lines.push('## RECENT TIMELINE (last 3)');
    lines.push('');
    for (const b of blocks) {
      const firstLine = b.split('\n')[0];
      const summary = (b.split('\n').slice(2).find((l) => l.trim()) || '').trim();
      lines.push(`- ${firstLine.trim()} — ${summary}`);
    }
    lines.push('');
  }
}

if (lines.length > 0) {
  // SessionStart contract: structured context must sit under hookSpecificOutput
  // — a top-level { additionalContext } parses as JSON and is silently dropped
  // (same class as the post-edit-watch / skill-activation fixes).
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'SessionStart',
        additionalContext: lines.join('\n'),
      },
    }),
  );
}

