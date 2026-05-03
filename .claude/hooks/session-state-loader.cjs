#!/usr/bin/env node
// SessionStart hook — load .omd/state.md (and a recent timeline tail) into the
// session as additionalContext. If state.md is missing or stale, recompute
// best-effort from preferences.md + timeline.md.

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const stateMd = path.join(projectDir, '.omd', 'state.md');
const timelineMd = path.join(projectDir, '.omd', 'timeline.md');
const preferencesMd = path.join(projectDir, '.omd', 'preferences.md');

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
  // Best-effort fallback — count pending entries
  const text = safeRead(preferencesMd) || '';
  const pendingCount = (text.match(/^- status:\s*pending\b/gm) || []).length;
  if (pendingCount > 0) {
    lines.push('## OMD ENVIRONMENT STATE');
    lines.push('');
    lines.push(`Pending preferences: ${pendingCount}${pendingCount >= 7 ? ' — consider /omd-learn review' : ''}`);
    lines.push('');
  }
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
  process.stdout.write(JSON.stringify({ additionalContext: lines.join('\n') }));
}

