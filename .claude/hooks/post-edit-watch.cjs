#!/usr/bin/env node
// PostToolUse hook — runs after Edit/Write on .tsx/.jsx/.css/.scss files.
// Detects if the change introduced a hex / radius / motion-duration value
// that's NOT in DESIGN.md, surfaces a one-line suggestion to capture as
// preference, AND persists the drift to .omd/preferences.md as an ambient
// inferred entry (issue #24 — alert + record).
//
// Detection axes (high-precision only — each axis needs a parsable DESIGN.md
// scale, otherwise it is skipped silently):
//   - color:  hex literals vs DESIGN.md hexes (token-system DESIGN.md → skip)
//   - radius: rounded-{none,sm,md,lg,xl,2xl,3xl,full} / border-radius values
//             vs the DESIGN.md radius scale
//   - motion: duration-{n} / `duration: <n>ms` vs the DESIGN.md motion section
// Spacing and voice are DEFERRED per issue #24 — gap-/p-/m- token drift and
// copy-edit keyword detection are too low-precision against prose DESIGN.md
// content to record without flooding preferences.md with false positives.
//
// Hook input shape (Claude Code hook contract):
//   stdin = JSON with toolName / args / etc.

'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { appendEntry } = require('./lib/preferences-writer.cjs');

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const designMd = path.join(projectDir, 'DESIGN.md');

// Tailwind rounded-* scale → px (default theme).
const TW_RADIUS = {
  none: 0,
  sm: 2,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  full: 9999,
};

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
  // Claude Code sends snake_case `tool_input`; keep camelCase `toolInput` as
  // a fallback for other channels / older payloads.
  const toolInput = payload.tool_input || payload.toolInput || {};
  const filePath = toolInput.file_path || toolInput.filePath || '';
  // .html/.vue/.svelte included — omd:harness/apply emit html prototypes,
  // which is where most generated-UI drift actually lives.
  if (!/\.(tsx|jsx|ts|js|css|scss|html|vue|svelte)$/i.test(filePath)) {
    process.exit(0);
  }

  const newText = toolInput.content || toolInput.new_string || '';
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

  const designText = fs.existsSync(designMd)
    ? (() => {
        try {
          return fs.readFileSync(designMd, 'utf8');
        } catch {
          return '';
        }
      })()
    : '';

  // ---- axis: color (hex) -------------------------------------------------
  // Extract hexes from new content
  const rawHexes = newText.match(/#[0-9a-f]{3,8}\b/gi) || [];
  const hexes = [...new Set(rawHexes.map(normHex))];

  // Read DESIGN.md hexes — also handle CSS vars and oklch (Tailwind v4) by
  // signaling N/A when DESIGN.md is purely token-driven (no inline hex).
  let designHexes = new Set();
  let designUsesTokenSystem = false;
  if (designText) {
    const lower = designText.toLowerCase();
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
  }

  const introducedHexes = designUsesTokenSystem
    ? [] // skip — too noisy
    : hexes.filter((h) => !designHexes.has(h));

  // ---- axis: radius ------------------------------------------------------
  // DESIGN.md radius scale: px values on lines mentioning radius/rounded,
  // plus the frontmatter `rounded: { sm: 2, md: 4 }` token block (bare = px).
  const designRadii = new Set();
  for (const line of designText.split('\n')) {
    if (!/radius|rounded/i.test(line)) continue;
    for (const m of line.matchAll(/(\d+(?:\.\d+)?)px/g)) {
      designRadii.add(parseFloat(m[1]));
    }
    const fm = /rounded:\s*\{([^}]*)\}/.exec(line);
    if (fm) {
      for (const m of fm[1].matchAll(/:\s*(\d+(?:\.\d+)?)/g)) {
        designRadii.add(parseFloat(m[1]));
      }
    }
    if (/\bfull\b|\b999\d*\b/i.test(line)) designRadii.add(9999);
  }

  const introducedRadii = [];
  if (designRadii.size > 0) {
    // no parsable scale → skip axis silently
    const seen = new Set();
    for (const m of newText.matchAll(
      /\brounded-(none|sm|md|lg|xl|2xl|3xl|full)\b/g,
    )) {
      const px = TW_RADIUS[m[1]];
      const label = `rounded-${m[1]}(${px}px)`;
      if (!designRadii.has(px) && !seen.has(label)) {
        seen.add(label);
        introducedRadii.push(label);
      }
    }
    // kebab-case CSS (`border-radius: 9999px`) AND camelCase JSX inline style
    // (`borderRadius: "9999px"`) — quoted values included.
    for (const m of newText.matchAll(
      /border-?[rR]adius:\s*["']?(\d+(?:\.\d+)?)(px|rem)/g,
    )) {
      const px = m[2] === 'rem' ? parseFloat(m[1]) * 16 : parseFloat(m[1]);
      const label = `border-radius:${m[1]}${m[2]}`;
      // ≥999px is the "pill" idiom — match it to a 9999/full scale entry.
      const effective = px >= 999 ? 9999 : px;
      if (!designRadii.has(effective) && !seen.has(label)) {
        seen.add(label);
        introducedRadii.push(label);
      }
    }
  }

  // ---- axis: motion ------------------------------------------------------
  // DESIGN.md motion scale: all <n>ms values inside the Motion/Easing section
  // (heading match → until the next `## `). No section → skip axis silently.
  const designDurations = new Set();
  const motionSection = /^##+ .*(motion|easing).*$/im.exec(designText);
  if (motionSection) {
    const rest = designText.slice(motionSection.index + motionSection[0].length);
    const end = rest.search(/^## /m);
    const section = end >= 0 ? rest.slice(0, end) : rest;
    for (const m of section.matchAll(/(\d+)ms\b/g)) {
      designDurations.add(parseInt(m[1], 10));
    }
  }

  const introducedDurations = [];
  if (designDurations.size > 0) {
    const seen = new Set();
    // Tailwind duration-{n} — n is milliseconds.
    for (const m of newText.matchAll(/\bduration-(\d+)\b/g)) {
      const n = parseInt(m[1], 10);
      const label = `duration-${m[1]}(${n}ms)`;
      if (!designDurations.has(n) && !seen.has(label)) {
        seen.add(label);
        introducedDurations.push(label);
      }
    }
    // CSS / JS object literal — `duration: 300ms`, `transition-duration: 300ms`,
    // and camelCase JSX `transitionDuration: "300ms"` (quoted values included).
    for (const m of newText.matchAll(/[dD]uration:\s*["']?(\d+)\s*ms\b/g)) {
      const n = parseInt(m[1], 10);
      const label = `duration:${n}ms`;
      if (!designDurations.has(n) && !seen.has(label)) {
        seen.add(label);
        introducedDurations.push(label);
      }
    }
  }

  if (
    introducedHexes.length === 0 &&
    introducedRadii.length === 0 &&
    introducedDurations.length === 0
  ) {
    process.exit(0);
  }

  // ---- alert (kept — alert + record) --------------------------------------
  const base = path.basename(filePath);
  const lines = ['', 'OMD WATCH:'];
  if (introducedHexes.length > 0) {
    lines.push(
      `방금 ${base} 에 DESIGN.md에 없는 색이 들어갔어요: ${introducedHexes.slice(0, 3).join(', ')}`,
    );
  }
  if (introducedRadii.length > 0) {
    lines.push(
      `방금 ${base} 에 DESIGN.md radius 스케일에 없는 값이 들어갔어요: ${introducedRadii.slice(0, 3).join(', ')}`,
    );
  }
  if (introducedDurations.length > 0) {
    lines.push(
      `방금 ${base} 에 DESIGN.md motion 스케일에 없는 duration이 들어갔어요: ${introducedDurations.slice(0, 3).join(', ')}`,
    );
  }
  lines.push(
    '의도된 거면 \`omd remember "<설명>" --context "' + filePath + '"\` 으로 preference 캡처 추천.',
  );
  lines.push('');

  // ---- record (ambient persistence, issue #24) -----------------------------
  // Guards: never record while editing DESIGN.md / DESIGN_DEPRECATED.md,
  // anything under .omd/ or .claude/ (or the .codex/ mirror), or non-UI files
  // (.ts only when the content is JSX-ish).
  const normPath = filePath.replace(/\\/g, '/');
  const isProtectedFile =
    /(^|\/)(DESIGN|DESIGN_DEPRECATED)\.md$/i.test(normPath) ||
    /(^|\/)\.(omd|claude|codex)\//.test(normPath);
  const isUiFile =
    /\.(tsx|jsx|html|css|vue|svelte)$/i.test(normPath) ||
    (/\.ts$/i.test(normPath) && /<[A-Za-z][^>]*>/.test(newText));
  if (!isProtectedFile && isUiFile) {
    try {
      if (introducedHexes.length > 0 && designHexes.size > 0) {
        appendEntry({
          dir: projectDir,
          scope: 'color',
          signal: 'ambient',
          confidence: 'inferred',
          sourceContext: filePath,
          body: `Introduced off-palette color(s) ${introducedHexes.slice(0, 3).join(', ')} in ${normPath} — not in DESIGN.md`,
        });
      }
      if (introducedRadii.length > 0) {
        appendEntry({
          dir: projectDir,
          scope: 'visualTheme',
          signal: 'ambient',
          confidence: 'inferred',
          sourceContext: filePath,
          body: `Introduced off-scale border radius ${introducedRadii.slice(0, 3).join(', ')} in ${normPath} — not in DESIGN.md radius scale`,
        });
      }
      if (introducedDurations.length > 0) {
        appendEntry({
          dir: projectDir,
          scope: 'motion',
          signal: 'ambient',
          confidence: 'inferred',
          sourceContext: filePath,
          body: `Introduced off-scale motion duration ${introducedDurations.slice(0, 3).join(', ')} in ${normPath} — not in DESIGN.md motion scale`,
        });
      }
    } catch {
      // recording is best-effort — the alert must still go out
    }
  }

  // PostToolUse hook contract: additionalContext must be nested under
  // hookSpecificOutput — a top-level { additionalContext } is dropped.
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PostToolUse',
        additionalContext: lines.join('\n'),
      },
    }),
  );
});
