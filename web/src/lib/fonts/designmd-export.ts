/**
 * Font Playground → DESIGN.md §3 snippet generator.
 *
 * Emits a copy-ready Typography section compatible with OmD v0.1. Intended
 * to be pasted into a project's DESIGN.md or handed to an AI coding agent
 * (Claude Code, Cursor) as brand context.
 */

import type { FontEntry } from "./types";
import type { LiveSelection } from "./tweaks";
import { buildGoogleFontsHref, buildVariationSettings } from "./loaders";

export function buildDesignMdSnippet(
  font: FontEntry,
  selection: LiveSelection,
): string {
  const loaderLine =
    font.loader.kind === "google"
      ? `Google Fonts — ${buildGoogleFontsHref([font])}`
      : `jsdelivr @font-face (see snippet)`;

  const lines: string[] = [];
  lines.push(`## 3. Typography Rules`);
  lines.push("");
  lines.push(`### Family`);
  lines.push("");
  lines.push(`- **Primary**: \`${font.cssFamily}\``);
  lines.push(`- **Source**: ${loaderLine}`);
  lines.push(`- **License**: ${font.license} — [${font.source}](${font.source})`);
  if (font.designer) lines.push(`- **Designer**: ${font.designer}`);
  lines.push(`- **Scripts supported**: ${font.scripts.join(", ")}`);
  lines.push("");

  lines.push(`### Weight`);
  lines.push("");
  if (font.variable) {
    const wght = selection.axisValues.wght;
    const axis = font.axes.find((a) => a.tag === "wght");
    if (axis) {
      lines.push(`- **Selected**: \`${Math.round(wght)}\``);
      lines.push(`- **Range**: \`${axis.min}–${axis.max}\` (variable)`);
    }
  } else if (font.weights) {
    lines.push(`- **Selected**: \`${selection.staticWeight}\``);
    lines.push(`- **Available weights**: ${font.weights.map((w) => `\`${w}\``).join(", ")}`);
  }
  lines.push("");

  if (font.variable && font.axes.length > 0) {
    lines.push(`### Variable axes`);
    lines.push("");
    lines.push(`| Axis | Tag | Value |`);
    lines.push(`|---|---|---|`);
    for (const a of font.axes) {
      const v = selection.axisValues[a.tag];
      const display = v == null ? "—" : Number.isInteger(v) ? String(v) : v.toFixed(2);
      lines.push(`| ${a.name} | \`${a.tag}\` | \`${display}\` |`);
    }
    lines.push("");
    const vs = buildVariationSettings(selection.axisValues);
    if (vs) {
      lines.push(`CSS:`);
      lines.push("");
      lines.push("```css");
      lines.push(`font-variation-settings: ${vs};`);
      lines.push("```");
      lines.push("");
    }
  }

  if (selection.letterSpacing !== 0) {
    lines.push(`### Letter-spacing`);
    lines.push("");
    const em = selection.letterSpacing.toFixed(3);
    lines.push(`- **Tracking**: \`${em}em\` (${selection.letterSpacing < 0 ? "tighter" : "looser"} than default)`);
    lines.push("");
  }

  lines.push(`### Line-height`);
  lines.push("");
  lines.push(
    `- **Default**: \`${selection.lineHeight.toFixed(2)}\` (unitless, scales with font-size)`,
  );
  lines.push(
    `- **Guidance**: body copy usually 1.5–1.6, display/heading 1.05–1.2, captions 1.3–1.4`,
  );
  lines.push("");

  lines.push(`### Do's and Don'ts`);
  lines.push("");
  lines.push(`- Keep body text in this family for rhythm consistency`);
  lines.push(
    `- Avoid mixing more than two weights on a single surface (use only the selected weight + a display weight)`,
  );
  lines.push(
    `- Respect the license: **${font.license}** requires that the license text travel with any font file redistribution`,
  );
  lines.push("");

  lines.push(
    `<!-- Exported via oh-my-design Font Playground. Font is ${font.license}-licensed; output files inherit the license. -->`,
  );
  return lines.join("\n");
}
