#!/usr/bin/env node
// UserPromptSubmit hook — forced-eval skill activation (~84% reliability).
// Reads .claude/skills/skill-rules.json + the user's prompt, finds matching
// rules, appends a structured "SKILL ACTIVATION CHECK" block via the
// `additionalContext` channel.
//
// Plain CommonJS so it works on any Node ≥18 without build deps.

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const rulesPath = path.join(projectDir, '.claude', 'skills', 'skill-rules.json');

let prompt = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => (prompt += chunk));
process.stdin.on('end', () => {
  if (!fs.existsSync(rulesPath)) {
    process.exit(0);
  }
  let rules;
  try {
    rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));
  } catch (e) {
    process.exit(0);
  }
  const matches = [];
  const lower = prompt.toLowerCase();
  for (const [skill, def] of Object.entries(rules.skills || {})) {
    const t = def.promptTriggers || {};
    const all = [...(t.keywordsKr || []), ...(t.keywordsEn || [])];
    const kwHit = all.some((k) => lower.includes(k.toLowerCase()) || prompt.includes(k));
    let ipHit = false;
    for (const p of t.intentPatterns || []) {
      try {
        if (new RegExp(p, 'i').test(prompt)) {
          ipHit = true;
          break;
        }
      } catch {
        // bad regex — skip
      }
    }
    if (kwHit || ipHit) matches.push({ skill, def });
  }
  if (matches.length === 0) {
    process.exit(0);
  }

  const required = matches.filter((m) => m.def.enforcement === 'required');
  const suggested = matches.filter((m) => m.def.enforcement === 'suggest');

  const lines = [
    '',
    'OMD SKILL ACTIVATION CHECK',
  ];
  if (required.length > 0) {
    lines.push('REQUIRED skills (use Skill tool BEFORE responding):');
    for (const m of required) lines.push(`  → ${m.skill}`);
  }
  if (suggested.length > 0) {
    lines.push('SUGGESTED skills (consider invoking):');
    for (const m of suggested) lines.push(`  → ${m.skill}`);
  }
  lines.push('Reasoning: state YES/NO with brief reason for each rule before doing the work.');
  lines.push('');

  process.stdout.write(JSON.stringify({ additionalContext: lines.join('\n') }));
});

