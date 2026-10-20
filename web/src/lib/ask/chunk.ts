/**
 * Chunks for the question box index (docs/REDESIGN_R11_PLAN_2026-10-20.md W4).
 *
 * A chunk is one retrievable passage: ~600–900 characters of plain text with the title and the
 * URL the answer cites. Markdown sources (the docs pages' Markdown projection, the READMEs) are
 * cut at headings, small neighbouring sections are merged up to the cap, and a long section is
 * split at paragraph, then line, then sentence boundaries. Client-safe and dependency-free so
 * the build script can load it under Node's type stripping.
 */

export type AskLocale = "en" | "ko" | "ja" | "zh-tw";

export interface AskChunk {
  /** Stable id, e.g. `docs:ko:getting-started:3`. */
  id: string;
  src: "faq" | "docs" | "readme" | "guide" | "ref";
  /** Content language; `*` = locale-neutral (reference metadata). */
  loc: AskLocale | "*";
  /** Same passage in another locale shares a group, so one answer never cites it twice. */
  group: string;
  title: string;
  /** Site-relative for oh-my-design.kr pages, absolute elsewhere. */
  url: string;
  /** Korean item page, for reference chunks that have one (lib/i18n/ko-detail.ts). */
  urlKo?: string;
  text: string;
  /** Retrieval-only terms (native names, localized country and category words); never sent to the model. */
  kw?: string;
  /** Reference verification tier (v verified, p partial, l legacy); a small ranking prior. */
  tier?: "v" | "p" | "l";
}

/** Shape of src/data/ask-index.generated.json. */
export interface AskIndexFile {
  version: number;
  chunks: AskChunk[];
  /**
   * Words that mean "the question is about companies in the archive": brand names and aliases,
   * country words, specific category words. Only then do references get reserved slots.
   */
  intent: string[];
}

export const CHUNK_MIN = 600;
export const CHUNK_MAX = 900;

export interface MdSection {
  heading: string | null;
  level: number;
  body: string;
}

/** Decode the few entities the copy uses and drop inline tags (FAQ answers, README HTML). */
export function plainText(s: string): string {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

const LANGUAGE_LABELS = new Set(["English", "한국어", "日本語", "繁體中文", "简体中文"]);

function cleanInline(line: string): string {
  return line
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images, badges
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links keep their text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1");
}

/**
 * Split Markdown into heading sections. Code fences stay intact (their language tag is dropped),
 * tables become "cell — cell" lines, HTML and images are removed, and the docs projection's
 * "> Human page / > Locale index" pointer lines are skipped.
 */
export function markdownSections(md: string): MdSection[] {
  const lines = md.replace(/<!--[\s\S]*?-->/g, "").split(/\r?\n/);
  const sections: MdSection[] = [];
  let cur: MdSection = { heading: null, level: 0, body: "" };
  const out: string[] = [];
  let fence = false;

  const flush = () => {
    cur.body = out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
    if (cur.heading || cur.body) sections.push(cur);
    out.length = 0;
  };

  for (const raw of lines) {
    if (/^\s*(```|~~~)/.test(raw)) {
      fence = !fence;
      out.push("```");
      continue;
    }
    if (fence) {
      out.push(raw);
      continue;
    }
    const h = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(raw);
    if (h) {
      flush();
      cur = { heading: plainText(cleanInline(h[2])).trim(), level: h[1].length, body: "" };
      continue;
    }
    if (/^>\s*(?:Human page|Locale index):/.test(raw)) continue;
    let line = raw.replace(/^\s*>\s?/, "");
    if (/^\s*\|?\s*:?-{3,}/.test(line) && /\|/.test(line)) continue; // table separator
    if (/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(line)) continue; // horizontal rule
    if (/^\s*\|.*\|\s*$/.test(line)) {
      line = line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim()).filter(Boolean).join(" — ");
    }
    line = plainText(cleanInline(line)).replace(/\*\*/g, "").replace(/\s+$/, "");
    // README chrome: the language switcher row ("English | 한국어 | 日本語 | 繁體中文")
    if (line.includes("|") && line.split("|").every((cell) => LANGUAGE_LABELS.has(cell.trim()))) continue;
    // HTML indentation is layout, not structure; list markers survive the trim
    line = line.replace(/^\s+(?![-*+] |\d+[.)] )/, "");
    out.push(line);
  }
  flush();
  return sections;
}

function splitLong(text: string): string[] {
  if (text.length <= CHUNK_MAX) return [text];
  // paragraphs (a fenced block counts as one), then lines, then sentences
  const blocks: string[] = [];
  let buf: string[] = [];
  let fence = false;
  for (const line of text.split("\n")) {
    if (line.startsWith("```")) fence = !fence;
    if (!fence && !line.trim()) {
      if (buf.length) blocks.push(buf.join("\n"));
      buf = [];
      continue;
    }
    buf.push(line);
  }
  if (buf.length) blocks.push(buf.join("\n"));

  const pieces: string[] = [];
  for (const block of blocks) {
    if (block.length <= CHUNK_MAX) {
      pieces.push(block);
      continue;
    }
    const lines = block.split("\n");
    for (const line of lines) {
      if (line.length <= CHUNK_MAX) {
        pieces.push(line);
        continue;
      }
      const sentences = line.split(/(?<=[.!?。！？])\s*/u).filter(Boolean);
      let acc = "";
      for (const s of sentences) {
        if (acc && acc.length + s.length > CHUNK_MAX) {
          pieces.push(acc);
          acc = "";
        }
        acc = acc ? `${acc} ${s}` : s;
        while (acc.length > CHUNK_MAX) {
          pieces.push(acc.slice(0, CHUNK_MAX));
          acc = acc.slice(CHUNK_MAX);
        }
      }
      if (acc) pieces.push(acc);
    }
  }

  const out: string[] = [];
  let acc = "";
  for (const p of pieces) {
    if (acc && acc.length + p.length + 2 > CHUNK_MAX) {
      out.push(acc);
      acc = "";
    }
    acc = acc ? `${acc}\n\n${p}` : p;
  }
  if (acc) out.push(acc);
  return out;
}

export interface SectionChunk {
  /** Heading of the first merged section (null for text before the first heading). */
  heading: string | null;
  /** Index of the first merged section, stable across rebuilds of the same source. */
  section: number;
  part: number;
  text: string;
}

/**
 * Merge small sections forward until a chunk reaches CHUNK_MIN (never past CHUNK_MAX), then split
 * anything still over the cap. A merged section's own heading stays in the text as a line, so
 * the passage keeps its structure.
 */
export function sectionChunks(sections: MdSection[]): SectionChunk[] {
  const out: SectionChunk[] = [];
  let group: { heading: string | null; section: number; text: string } | null = null;

  const close = () => {
    if (!group) return;
    const text = group.text.replace(/\n{3,}/g, "\n\n").trim();
    if (text) {
      splitLong(text).forEach((t, part) => out.push({ heading: group!.heading, section: group!.section, part, text: t.trim() }));
    }
    group = null;
  };

  sections.forEach((s, i) => {
    const own = s.body.trim();
    if (!own && !s.heading) return;
    const piece = group && s.heading ? `${s.heading}\n${own}` : own;
    if (group && group.text.length < CHUNK_MIN && group.text.length + piece.length + 2 <= CHUNK_MAX) {
      group.text = `${group.text}\n\n${piece}`;
      return;
    }
    close();
    group = { heading: s.heading, section: i, text: own };
  });
  close();
  return out.filter((c) => c.text.length > 0);
}

/** GitHub's heading anchor (github-slugger): lower-case, punctuation dropped, spaces → hyphens. */
export function githubSlug(heading: string): string {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\p{Pc}\- ]/gu, "")
    .replace(/ /g, "-");
}
