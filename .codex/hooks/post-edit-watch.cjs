#!/usr/bin/env node
// PostToolUse hook — runs after Edit/Write on .tsx/.jsx/.css/.scss files.
// Detects if the change introduced a hex/spacing value that's NOT in
// DESIGN.md tokens, and surfaces a one-line suggestion to capture as preference.
//
// Hook input shape (Claude Code hook contract):
//   stdin = JSON with toolName / args / etc.

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const designMd = path.join(projectDir, 'DESIGN.md');

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (c) => (input += c));
process.stdin.on('end', () => {
  let payload = {};
  try {
    payload = JSON.parse(input || '{}');
  } catch {
    process.exit(0);
  }
  const toolName = payload.toolName || payload.tool_name || '';
  if (!['Edit', 'Write', 'MultiEdit'].includes(toolName)) {
    process.exit(0);
  }
  const filePath = payload.toolInput?.file_path || payload.toolInput?.filePath || '';
  if (!/\.(tsx|jsx|ts|js|css|scss)$/i.test(filePath)) {
    process.exit(0);
  }

  const newText =
    payload.toolInput?.content ||
    payload.toolInput?.new_string ||
    '';
  if (!newText) process.exit(0);

  // Normalize a hex to canonical 6-char lowercase form (#abc → #aabbcc)
  function normHex(h) {
    let s = h.toLowerCase();
    if (s.length === 4) {
      // #abc → #aabbcc
      s = '#' + s[1] + s[1] + s[2] + s[2] + s[3] + s[3];
    } else if (s.length === 9) {
      // #aarrggbb (8-char includes alpha) — strip alpha for comparison
      s = s.slice(0, 7);
    }
    return s;
  }

  // Extract hexes from new content
  const rawHexes = newText.match(/#[0-9a-f]{3,8}\b/gi) || [];
  const hexes = [...new Set(rawHexes.map(normHex))];
  if (hexes.length === 0) process.exit(0);

  // Read DESIGN.md hexes — also handle CSS vars and oklch (Tailwind v4) by
  // signaling N/A when DESIGN.md is purely token-driven (no inline hex).
  let designHexes = new Set();
  let designUsesTokenSystem = false;
  if (fs.existsSync(designMd)) {
    try {
      const text = fs.readFileSync(designMd, 'utf8');
      const lower = text.toLowerCase();
      for (const h of (lower.match(/#[0-9a-f]{3,8}\b/g) || [])) {
        designHexes.add(normHex(h));
      }
      // If DESIGN.md mostly uses oklch() / CSS vars / token names, hex-only
      // comparison is unreliable — skip warning to avoid noise.
      const hexCount = designHexes.size;
      const oklchCount = (lower.match(/oklch\(/g) || []).length;
      const cssVarCount = (lower.match(/var\(--/g) || []).length;
      if ((oklchCount + cssVarCount) > hexCount * 2) {
        designUsesTokenSystem = true;
      }
    } catch {
      // ignore
    }
  }

  if (designUsesTokenSystem) process.exit(0); // skip — too noisy
  const introduced = hexes.filter((h) => !designHexes.has(h));
  if (introduced.length === 0) process.exit(0);

  const lines = [
    '',
    'OMD WATCH:',
    `방금 ${path.basename(filePath)} 에 DESIGN.md에 없는 색이 들어갔어요: ${introduced.slice(0, 3).join(', ')}`,
    '의도된 거면 \`omd remember "<설명>" --context "' + filePath + '"\` 으로 preference 캡처 추천.',
    '',
  ];

  // Hook contract: write to additionalContext via JSON stdout
  process.stdout.write(JSON.stringify({ additionalContext: lines.join('\n') }));
});

