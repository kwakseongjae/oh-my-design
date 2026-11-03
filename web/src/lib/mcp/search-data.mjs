/** Shared by the build-time corpus and runtime keyword search. */
export const hasHangul = (text) => /\p{Script=Hangul}/u.test(text);

/**
 * Slice source offsets, ignoring frontmatter and fenced code; never reserialize.
 * @param {string} markdown
 */
export function sectionsOf(markdown) {
  const bodyStart = markdown.startsWith("---\n") ? markdown.indexOf("\n---\n", 4) + 5 : 0;
  /** @type {{ title: string; offset: number }[]} */
  const starts = [];
  let offset = Math.max(0, bodyStart);
  /** @type {{ char: string; length: number } | undefined} */
  let fence;
  for (const line of markdown.slice(offset).split(/(?<=\n)/)) {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = { char: marker[1][0], length: marker[1].length };
      else if (marker[1][0] === fence.char && marker[1].length >= fence.length) fence = undefined;
    } else if (!fence) {
      const heading = line.match(/^## ([^\r\n]+?)[ \t]*\r?\n?$/);
      if (heading) starts.push({ title: heading[1], offset });
    }
    offset += line.length;
  }
  return starts.map((section, i) => ({ title: section.title, markdown: markdown.slice(section.offset, starts[i + 1]?.offset ?? markdown.length) }));
}

/**
 * @param {{ id: string; name: string; displayName: string; country: string; category: string }} entry
 * @param {string} [overview] The Overview section, including its heading.
 * @returns {Record<string, string>}
 */
export function searchFields(entry, overview) {
  const fields = {
    id: entry.id, name: entry.name,
    display_name_ko: hasHangul(entry.displayName) ? entry.displayName : "",
    country: entry.country, category: entry.category,
  };
  if (overview !== undefined) {
    fields.overview = overview.replace(/^## Overview\s*/, "").replace(/^### [^\n]+\n\s*/, "").split(/\r?\n\s*\r?\n/)[0];
  }
  return fields;
}

const DESCRIPTOR_LOCALES = ["en", "ko", "ja", "zh"];

/**
 * id -> the Claude-written search terms of every locale, joined, for references that are still in the catalog.
 * Malformed entries are skipped, so a bad or stale file degrades to keyword-only search instead of failing.
 * @param {unknown} data the parsed search-descriptors.generated.json
 * @param {readonly string[]} ids the current registry ids
 * @returns {Map<string, string>}
 */
export function descriptorIndex(data, ids) {
  const entries = data && typeof data === "object" && !Array.isArray(data) ? /** @type {any} */ (data).entries : undefined;
  const index = new Map();
  if (!entries || typeof entries !== "object") return index;
  for (const id of ids) {
    const terms = entries[id]?.terms;
    if (!terms || typeof terms !== "object") continue;
    const words = DESCRIPTOR_LOCALES.flatMap((locale) => Array.isArray(terms[locale]) ? terms[locale].filter((t) => typeof t === "string") : []);
    if (words.length) index.set(id, words.join(" · "));
  }
  return index;
}
