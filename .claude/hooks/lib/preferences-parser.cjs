#!/usr/bin/env node
// omd:installed-hook sha256=44ceaf346dc7238f92f127699d9b985940f77c68a461752d15f10b930ecea4ca
// Shared parser for .omd/preferences.md — the CANONICAL format written by the
// omd:remember skill (skills/omd-remember/SKILL.md). The remember format is the
// single source of truth; these hooks read it, they never change it.
//
// Canonical entry shape:
//
//   ## 2026-04-30T17:48:00.000Z — ctas-never-uppercase
//
//   ```omd-meta
//   id: pref_lqxk2_a3f9c1d4
//   timestamp: 2026-04-30T17:48:00.000Z
//   scope: components.button
//   signal: user-statement
//   confidence: explicit
//   status: pending
//   source_agent: claude-code
//   source_context: "src/components/Button.tsx"
//   ```
//
//   CTAs are never uppercase
//
// Entries are `## <heading>` sections; metadata lives in a fenced ```omd-meta
// block of `key: value` lines (NOT dash-lists, NOT `### ` headings).

'use strict';

/** Parse the key/value lines inside an ```omd-meta fenced block. */
function parseOmdMeta(block) {
  const m = /```omd-meta\s*\n([\s\S]*?)\n```/.exec(block);
  if (!m) return null;
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = /^\s*([a-z_]+):\s*(.*)$/i.exec(line);
    if (!kv) continue;
    let val = kv[2].trim();
    // Strip surrounding quotes (source_context is JSON.stringify'd).
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    meta[kv[1].toLowerCase()] = val;
  }
  return meta;
}

/**
 * Parse the canonical preferences.md text into structured entries.
 * Returns [{ heading, scope, status, timestamp(ms|NaN), confidence, body, raw }].
 * `body` is the free text after the omd-meta block (the preference itself).
 * Robust to a missing/garbled meta block (entry is skipped, never throws).
 */
function parsePreferences(text) {
  if (!text || typeof text !== 'string') return [];
  // Split on `## ` headings (entry boundary). slice(1) drops the file
  // frontmatter + `# Preference Log` preamble before the first entry.
  const sections = text.split(/^## /m).slice(1);
  const entries = [];
  for (const section of sections) {
    const heading = section.split('\n', 1)[0].trim();
    const meta = parseOmdMeta(section);
    if (!meta) continue;
    const tsRaw = meta.timestamp || '';
    // Body = everything after the heading line minus the omd-meta block.
    const body = section
      .split('\n')
      .slice(1)
      .join('\n')
      .replace(/```omd-meta\s*\n[\s\S]*?\n```/, '')
      .trim();
    entries.push({
      heading,
      scope: meta.scope || '',
      status: meta.status || 'pending',
      confidence: meta.confidence || '',
      timestamp: tsRaw ? new Date(tsRaw).getTime() : NaN,
      body,
      raw: meta,
    });
  }
  return entries;
}

/** Count entries with `status: pending`. */
function countPending(text) {
  return parsePreferences(text).filter((e) => e.status === 'pending').length;
}

module.exports = { parsePreferences, parseOmdMeta, countPending };
