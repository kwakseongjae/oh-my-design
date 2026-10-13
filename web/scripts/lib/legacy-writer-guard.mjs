import { isV3Markdown } from "./reference-source.mjs";

/**
 * Refuse to text-edit a DESIGN.md v3 file with a tool written for OmD 0.1 frontmatter.
 *
 * These tools patch flow-style `tokens:` lines and numbered sections in place. On a v3 file they
 * would either find nothing or write a second token dialect into a Google frontmatter — and the
 * catalog is single-write v3 (spec/design-md-v3.md §12.3). A port reads
 * `readReferenceSource(dir).markdown` (the legacy shape), edits that, and hands it to
 * `scripts/design-md-v3/writer.mjs` `writeReference`, which converts, checks and writes v3.
 */
export function refuseV3Target(markdown, id, tool) {
  if (!isV3Markdown(markdown)) return;
  throw new Error(
    `${tool}: ${id} is DESIGN.md v3. This tool edits OmD 0.1 text and is not ported yet — `
    + "edit readReferenceSource(dir).markdown and write it with scripts/design-md-v3/writer.mjs writeReference.",
  );
}
