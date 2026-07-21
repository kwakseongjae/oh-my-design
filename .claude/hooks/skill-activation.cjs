#!/usr/bin/env node
// omd:installed-hook sha256=3ac226a3cd7d9579d44c0d760fbb5a0b806208132e546c35c0d226dda3552338
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
// `색` → `색상`: the bare `색` substring-matched 검색("search"), 검색창, etc.,
// firing the gate on non-UI prompts. `색상` ("color") is the real cue.
const UI_CUES = [
  // Korean
  '디자인', '레이아웃', '화면', '컴포넌트', '버튼', '카드', '색상',
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

// Latin-alphabet cues use word boundaries so e.g. "card" doesn't match
// "discard"/"cardinal" and "style" doesn't match "stylesheet" inside a path.
// CJK cues have no ASCII word boundaries, so for them we keep substring match.
const isLatin = (s) => /^[a-z]+$/i.test(s);
function cueMatches(cue, prompt, lowerPrompt) {
  if (isLatin(cue)) {
    return new RegExp(`\\b${cue}\\b`, 'i').test(prompt);
  }
  return lowerPrompt.includes(cue.toLowerCase()) || prompt.includes(cue);
}

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => (input += chunk));
process.stdin.on('end', () => {
  // Never crash on malformed stdin — exit 0 silently.
  let prompt;
  try {
    const payload = JSON.parse(input || '{}');
    // Match against the user's prompt ONLY — not cwd/transcript_path, which
    // contain repo paths like ".../oh-my-design/..." that falsely tripped the gate.
    prompt = typeof payload.prompt === 'string' ? payload.prompt : '';
  } catch {
    process.exit(0);
  }
  if (!prompt) process.exit(0);

  const designMdPath = path.join(projectDir, 'DESIGN.md');
  if (fs.existsSync(designMdPath)) process.exit(0);

  const lower = prompt.toLowerCase();
  const looksLikeUiWork = UI_CUES.some((k) => cueMatches(k, prompt, lower));
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
  // UserPromptSubmit contract: structured context must sit under
  // hookSpecificOutput — a top-level { additionalContext } parses as JSON
  // with no recognized fields and the gate message is silently dropped.
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'UserPromptSubmit',
        additionalContext: lines.join('\n'),
      },
    }),
  );
});
