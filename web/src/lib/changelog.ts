/**
 * Changelog parser — reads ../CHANGELOG.md from web/ at request/build
 * time (server only). Splits on `## <version>` H2 headings into
 * per-release entries.
 *
 * Heading shape varies in history:
 *   - "## 1.6.0 — 2026-05-28"
 *   - "## 1.0.0 — Skill-first"
 *   - "## 1.1.0 — 78 references (+11 Korean cluster including KRDS)"
 * → version is always the leading semver token; everything after the
 *   em-dash is the headline. If the headline is itself a YYYY-MM-DD,
 *   we surface it separately as `date`.
 */

import { readFileSync } from "fs";
import { join } from "path";

const CHANGELOG_PATH = join(process.cwd(), "..", "CHANGELOG.md");

export interface ChangelogEntry {
  version: string;
  date?: string;
  headline: string;
  body: string;
}

const SEMVER_RE = /^([0-9]+\.[0-9]+\.[0-9]+)$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

let _cache: ChangelogEntry[] | null = null;

export function getChangelog(): ChangelogEntry[] {
  if (_cache) return _cache;
  const txt = readFileSync(CHANGELOG_PATH, "utf-8");
  const lines = txt.split("\n");

  const entries: ChangelogEntry[] = [];
  let current: { headerLine: string; bodyLines: string[] } | null = null;

  const flush = () => {
    if (!current) return;
    const m = current.headerLine.match(/^##\s+(.+?)\s*$/);
    if (!m) return;
    const raw = m[1].trim();
    // split on em-dash / en-dash / hyphen (with surrounding whitespace)
    const parts = raw.split(/\s+[—–-]\s+/);
    const versionToken = parts[0].trim();
    if (!SEMVER_RE.test(versionToken)) return; // ignore "Changelog" preamble etc.

    const tail = parts.slice(1).join(" — ").trim();
    let date: string | undefined;
    let headline = tail;
    if (DATE_RE.test(tail)) {
      date = tail;
      headline = "";
    } else if (tail) {
      // headline often *contains* a date prefix
      const dm = tail.match(/^(\d{4}-\d{2}-\d{2})(?:\s+[—–-]\s+(.*))?$/);
      if (dm) {
        date = dm[1];
        headline = dm[2] ?? "";
      }
    }

    const body = current.bodyLines.join("\n").trim();
    // pull a one-sentence summary if no headline
    if (!headline) {
      const first = body
        .split(/\n\n+/)
        .map((p) => p.replace(/^\*\*|\*\*$/g, "").trim())
        .find((p) => p.length > 0 && !p.startsWith("#") && !p.startsWith("|"));
      if (first) {
        const stripped = first.replace(/^\*+|\*+$/g, "").trim();
        headline = stripped.split(/\n/)[0].slice(0, 220);
      }
    }
    entries.push({ version: versionToken, date, headline, body });
  };

  for (const line of lines) {
    if (/^##\s+/.test(line) && !/^###/.test(line)) {
      flush();
      current = { headerLine: line, bodyLines: [] };
    } else if (current) {
      current.bodyLines.push(line);
    }
  }
  flush();

  _cache = entries;
  return entries;
}

export function getChangelogEntry(version: string): ChangelogEntry | null {
  return getChangelog().find((e) => e.version === version) ?? null;
}
