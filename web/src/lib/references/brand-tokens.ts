import type { RefEntry } from "@/data/registry.generated";
import { contrastRatio } from "@/lib/contrast";

/**
 * Registry-level token selectors — the same key order the reference detail
 * page uses (`selectPrimaryColor`, `selectCanvas`, `selectForeground`,
 * `selectUiFont`, `selectDefaultRadius` in ./normalize.ts), applied straight to
 * a registry entry so list surfaces (the builder grid API, the landing) don't
 * have to parse DESIGN.md to agree with the detail page.
 *
 * Unknown means absent: every selector returns null when the reference does not
 * carry the value. Callers omit the field; they never substitute a default.
 */

const HEX = /^#[0-9a-f]{6}$/i;

function colorMaps(entry: RefEntry): Readonly<Record<string, string>>[] {
  // `colors` is the current key, `color` the pre-getdesign legacy alias.
  return [entry.tokens?.colors, entry.tokens?.color].filter(
    (m): m is Readonly<Record<string, string>> => !!m,
  );
}

function firstColor(entry: RefEntry, keys: readonly string[]): string | null {
  for (const key of keys) {
    for (const map of colorMaps(entry)) {
      const v = map[key];
      if (typeof v === "string" && HEX.test(v)) return v;
    }
  }
  return null;
}

/** UI primary: token `primary`, token `brand`, then the frontmatter primary_color. */
export function resolvePrimaryColor(entry: RefEntry): string {
  return firstColor(entry, ["primary", "brand"]) ?? entry.primaryColor;
}

export function resolveCanvas(entry: RefEntry): string | null {
  return firstColor(entry, ["canvas", "background", "surface"]);
}

export function resolveForeground(entry: RefEntry): string | null {
  return firstColor(entry, ["foreground", "heading", "ink", "body"]);
}

export function resolveOnPrimary(entry: RefEntry): string | null {
  return firstColor(entry, ["on-primary"]);
}

export function resolveSurface(entry: RefEntry): string | null {
  return firstColor(entry, ["surface"]);
}

const FONT_KEYS = ["ui", "sans", "text", "body", "default", "base"] as const;

/** The reference's UI font family name, if it declares one. "System" is not a family. */
export function resolveUiFont(entry: RefEntry): string | null {
  const typo = entry.tokens?.typography as { family?: Record<string, unknown> } | undefined;
  const maps = [typo?.family, entry.tokens?.font].filter(
    (m): m is Record<string, unknown> => !!m && typeof m === "object",
  );
  for (const key of FONT_KEYS) {
    for (const map of maps) {
      const v = map[key];
      if (typeof v === "string" && v.trim() && v.trim().toLowerCase() !== "system") return v.trim();
    }
  }
  return null;
}

const RADIUS_KEYS = ["base", "md", "sm", "lg", "card", "button"] as const;
const PILL_KEYS = new Set(["full", "pill", "circle"]);

/** Default control radius `{ key, px }`, same order as the detail page; null when absent. */
export function resolveRadius(entry: RefEntry): { key: string; px: number } | null {
  const map = entry.tokens?.rounded ?? entry.tokens?.radius;
  if (!map) return null;
  for (const key of RADIUS_KEYS) {
    const v = map[key];
    if (typeof v === "number" && Number.isFinite(v)) return { key, px: v };
  }
  for (const [key, v] of Object.entries(map)) {
    if (!PILL_KEYS.has(key) && typeof v === "number" && Number.isFinite(v)) return { key, px: v };
  }
  return null;
}

export interface LabelChoice {
  color: string;
  ratio: number;
  /** Where the colour came from: the reference's own on-primary token, or the measured fallback. */
  source: "on-primary" | "measured";
}

/**
 * Text colour for a label set on a brand fill. The reference's own on-primary
 * wins when it clears `threshold`; otherwise the darker or lighter of the two
 * page inks, whichever measures higher. Contrast is measured, never assumed.
 */
export function pickLabelColor(
  fill: string,
  onPrimary: string | null,
  threshold: number,
  inks: { dark: string; light: string } = { dark: "#131416", light: "#ffffff" },
): LabelChoice {
  if (onPrimary) {
    const r = contrastRatio(onPrimary, fill);
    if (r >= threshold) return { color: onPrimary, ratio: r, source: "on-primary" };
  }
  const d = contrastRatio(inks.dark, fill);
  const l = contrastRatio(inks.light, fill);
  return d >= l
    ? { color: inks.dark, ratio: d, source: "measured" }
    : { color: inks.light, ratio: l, source: "measured" };
}
