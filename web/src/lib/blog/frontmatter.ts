/**
 * Minimal YAML frontmatter reader for blog posts.
 *
 * Deliberately not a YAML dependency: posts carry a few scalar fields and one
 * inline list, and a strict 40-line parser that names the offending file beats
 * a general parser that silently accepts a typo'd key. Unknown keys and missing
 * required fields throw, so a malformed post fails the build instead of
 * shipping a card with an empty title.
 */

export interface PostFrontmatter {
  title: string;
  description: string;
  /** ISO date, publication day. */
  date: string;
  /**
   * ISO date of the last substantive correction, when there was one. Feeds
   * machine-readable freshness only (JSON-LD dateModified, article:modified_time,
   * sitemap lastmod); the page does not print it.
   */
  updated?: string;
  tags: string[];
}

const REQUIRED_KEYS = ["title", "description", "date", "tags"] as const;
const OPTIONAL_KEYS = ["updated"] as const;
const ALLOWED_KEYS: readonly string[] = [...REQUIRED_KEYS, ...OPTIONAL_KEYS];
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function fail(source: string, message: string): never {
  throw new Error(`${source}: ${message}`);
}

/** Strips one layer of matching quotes, if present. */
function unquote(value: string): string {
  const quoted = /^(["'])(.*)\1$/.exec(value);
  return quoted ? quoted[2] : value;
}

function parseValue(key: string, raw: string, source: string): string | string[] {
  const value = raw.trim();
  if (key === "tags") {
    const list = /^\[(.*)\]$/.exec(value);
    if (!list) fail(source, `tags must be an inline list, e.g. [release, ai] — got ${value}`);
    return list[1]
      .split(",")
      .map((tag) => unquote(tag.trim()))
      .filter(Boolean);
  }
  if (!value) fail(source, `${key} is empty`);
  return unquote(value);
}

export function parseFrontmatter(
  raw: string,
  source: string,
): { data: PostFrontmatter; body: string } {
  if (!raw.startsWith("---\n")) fail(source, "missing frontmatter — file must start with ---");
  const end = raw.indexOf("\n---\n", 4);
  if (end === -1) fail(source, "unterminated frontmatter — no closing ---");

  const parsed: Record<string, string | string[]> = {};
  for (const line of raw.slice(4, end).split("\n")) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator === -1) fail(source, `frontmatter line is not key: value — ${line}`);
    const key = line.slice(0, separator).trim();
    if (!ALLOWED_KEYS.includes(key)) {
      fail(source, `unknown frontmatter key "${key}" — allowed: ${ALLOWED_KEYS.join(", ")}`);
    }
    parsed[key] = parseValue(key, line.slice(separator + 1), source);
  }

  for (const key of REQUIRED_KEYS) {
    if (parsed[key] === undefined) fail(source, `missing required frontmatter key "${key}"`);
  }
  const date = parsed.date as string;
  if (!DATE_RE.test(date)) fail(source, `date must be YYYY-MM-DD — got ${date}`);
  const updated = parsed.updated as string | undefined;
  if (updated !== undefined) {
    if (!DATE_RE.test(updated)) fail(source, `updated must be YYYY-MM-DD — got ${updated}`);
    // Same-format ISO dates compare correctly as strings.
    if (updated < date) fail(source, `updated (${updated}) is earlier than date (${date})`);
  }
  const tags = parsed.tags as string[];
  if (tags.length === 0) fail(source, "tags must not be empty");

  return {
    data: {
      title: parsed.title as string,
      description: parsed.description as string,
      date,
      ...(updated !== undefined && { updated }),
      tags,
    },
    body: raw.slice(end + 5).replace(/^\n+/, "").trimEnd(),
  };
}
