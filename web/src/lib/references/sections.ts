/**
 * Section lookup that reads both dialects of a catalog DESIGN.md.
 *
 * Legacy OmD 0.1 files number their H2s (`## 2. Color Palette & Roles`); DESIGN.md v3 uses Google's
 * unnumbered names (`## Colors`) and nests the old §1 under `## Overview` as `### Visual Theme &
 * Atmosphere` (spec/design-md-v3.md §4.2, §11.2). Readers that keyed on `## N.` call these instead,
 * so a converted file yields the same text it did before.
 */

/** Text of the `## <name>` section including its heading, up to the next H2; "" when absent. */
export function namedSection(md: string, name: string): string {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return md.match(new RegExp(`^## ${escaped}[ \\t]*\\n[\\s\\S]*?(?=\\n## |$(?![\\s\\S]))`, "m"))?.[0] ?? "";
}

/** The legacy numbered section when present, otherwise the v3 section of that name. */
export function legacyOrNamedSection(md: string, legacy: RegExp, v3Name: string): string {
  return md.match(legacy)?.[0] ?? namedSection(md, v3Name);
}

/** Body of the Visual Theme & Atmosphere section (legacy §1 or the v3 Overview H3), without its heading. */
export function visualThemeBody(md: string): string | null {
  const legacy = md.match(/## 1\. Visual Theme.*?\n([\s\S]*?)(?=## 2\.)/)?.[1];
  if (legacy !== undefined) return legacy;
  return md.match(/^### Visual Theme & Atmosphere[^\n]*\n([\s\S]*?)(?=^#{2,3} |$(?![\s\S]))/m)?.[1] ?? null;
}
