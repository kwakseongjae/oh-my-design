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

/** @param {unknown} vector @param {number} dimension @returns {vector is number[]} */
export function isEmbeddingVector(vector, dimension) {
  return Array.isArray(vector) && vector.length === dimension
    && vector.every((value) => typeof value === "number" && Number.isFinite(value))
    && vector.some((value) => value !== 0) && Number.isFinite(Math.hypot(...vector));
}

/** Validated, nonzero vectors of the same dimension. @param {number[]} a @param {number[]} b */
export function cosineSimilarity(a, b) {
  const aNorm = Math.hypot(...a);
  const bNorm = Math.hypot(...b);
  const cosine = a.reduce((sum, value, i) => sum + (value / aNorm) * (b[i] / bNorm), 0);
  return Math.max(-1, Math.min(1, cosine));
}
