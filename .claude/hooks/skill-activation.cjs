#!/usr/bin/env node
// UserPromptSubmit hook — DESIGN.md existence gate.
//
// Scope (2026-05-07, simplified from the prior keyword/regex forced-eval
// system): the hook now does the one thing description-based skill
// triggering cannot do — file-system state checks. If the project has no
// DESIGN.md and the user is asking for UI/design work, we surface a
// single warning recommending omd:init first. Everything else (which
// skill to invoke, when, in what language) is handled by Claude reading
// each SKILL.md description, the standard Anthropic mechanism.
//
// What was removed:
//   - .claude/skills/skill-rules.json (per-skill keyword/regex pools)
//   - the "OMD SKILL ACTIVATION CHECK" forced-injection block
//   - per-skill required/suggested classification
// All those overlapped with SKILL.md descriptions and created a
// dual-source-of-truth maintenance burden.
//
// What remains:
//   - DESIGN.md existence check
//   - a small inline UI-cue keyword set (KO/EN/JA/ZH-TW) so we only fire
//     the warning when the prompt is actually about UI — otherwise a
//     casual "what's 2+2" wouldn't get spammed with init reminders
//
// Plain CommonJS so it works on any Node ≥18 without build deps.

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

// Inline UI cue list (gate scope only). Tiny on purpose — this is a
// "is the user asking for UI work?" sniff test, not a full taxonomy.
// If you find yourself wanting to add 50 entries here, that's a sign
// the description on the relevant SKILL.md should grow instead.
const UI_CUES = [
  // Korean
  '디자인', '레이아웃', '화면', '컴포넌트', '버튼', '카드', '색', '색상',
  '폰트', '스타일', '브랜드', '리팩토링', '랜딩', '페이지',
  // English
  'design', 'layout', 'component', 'button', 'card', 'color', 'colour',
  'font', 'style', 'brand', 'refactor', 'landing', 'redesign', 'rework',
  // Japanese
  'デザイン', 'レイアウト', 'コンポーネント', 'ボタン', 'スタイル',
  'カラー', 'フォント', 'ブランド', 'ランディング',
  // Traditional Chinese
  '設計', '佈局', '元件', '按鈕', '風格', '顏色', '字體', '品牌', '落地頁',
];

let prompt = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => (prompt += chunk));
process.stdin.on('end', () => {
  const designMdPath = path.join(projectDir, 'DESIGN.md');
  if (fs.existsSync(designMdPath)) process.exit(0);

  const lower = prompt.toLowerCase();
  const looksLikeUiWork = UI_CUES.some(
    (k) => lower.includes(k.toLowerCase()) || prompt.includes(k),
  );
  if (!looksLikeUiWork) process.exit(0);

  const lines = [
    '',
    'OMD GATE',
    '⚠️  DESIGN.md not found at project root.',
    '   This prompt looks like UI / design work. Run the omd:init skill first',
    '   to bootstrap DESIGN.md, then re-issue the request so it can be applied',
    '   with brand context.',
    '',
  ];
  process.stdout.write(JSON.stringify({ additionalContext: lines.join('\n') }));
});
