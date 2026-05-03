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
  `  ${c.bold('Then open Claude Code (or Codex). Just say what you want:')}`,
  '',
  `    ${c.dim('"토스 스타일 가족 식단 공유 앱 메인 화면 디자인해줘"')}`,
  `    ${c.dim('"Linear-clone B2B SaaS dashboard 만들고 싶어"')}`,
  `    ${c.dim('"이 카드 좀 더 세련되게"')}`,
  '',
  `  ${c.bold('하네스가 알아서 호출됨')} ${c.dim('— Claude Code hook이 디자인 요청 감지해서 자동 라우팅. 별도 슬래시 안 쳐도 됩니다.')}`,
  '',
  `  ${c.dim('Power user shortcut: ')} ${c.cyan('/omd-harness <task>')} ${c.dim('— hook 우회하고 즉시 진입.')}`,
  '',
  `  ${c.bold('⚠ Already running Claude Code?')} ${c.dim('Quit (Cmd+Q on macOS) and relaunch — subagents only load at session start.')}`,
  '',
];

console.log(lines.join('\n'));

