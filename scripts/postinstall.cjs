#!/usr/bin/env node
// Friendly post-install nudge — only when the user explicitly installed
// oh-my-design-cli (global or as a top-level dependency).
//
// Suppressed when:
//   - running inside CI
//   - this package is being installed as a sub-dependency
//   - npm is in production mode
//
// Plain CommonJS so it runs on any Node version without build deps.

'use strict';

if (
  process.env.CI ||
  process.env.NODE_ENV === 'production' ||
  // Sub-dep install: npm sets npm_command but no INIT_CWD pointing here
  process.env.npm_config_global !== 'true' && !process.env.INIT_CWD
) {
  process.exit(0);
}

const c = {
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
};

const lines = [
  '',
  `${c.green('✓')} ${c.bold('oh-my-design installed.')}  ${c.dim('(commands: omd, oh-my-design)')}`,
  '',
  `  ${c.bold('Next')}  in any project:`,
  '',
  `    ${c.cyan('cd')} ${c.dim('<your project>')}`,
  `    ${c.cyan('omd install-skills')}        ${c.dim('# one time per project — installs the design harness')}`,
  '',
  `  ${c.bold('Then restart your agent and type your first prompt:')}`,
  '',
  `    ${c.cyan('EN')}  ${c.dim('Set up our design system — Toss-style, for a family meal-tracking app.')}`,
  `    ${c.cyan('KR')}  ${c.dim('토스 스타일로 가족 식단 공유 앱 디자인 시스템 잡아줘')}`,
  '',
  `  ${c.dim('Your agent runs omd:init and writes DESIGN.md. Then: "Design the home screen."')}`,
  `  ${c.dim('Full walkthrough → "Your first 60 seconds" in the README. Routing is automatic.')}`,
  '',
  `  ${c.dim('Power user shortcut: ')} ${c.cyan('/omd-harness <task>')} ${c.dim('— jump straight into the pipeline.')}`,
  '',
  `  ${c.bold('⚠ Already running Claude Code?')} ${c.dim('Quit (Cmd+Q on macOS) and relaunch — subagents only load at session start.')}`,
  '',
];

console.log(lines.join('\n'));

