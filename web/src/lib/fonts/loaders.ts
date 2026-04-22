/**
 * Font loading — builds URLs / CSS to pull a catalog entry's font into the
 * page. Catalog supports two loaders:
 *   - `google`: single Google Fonts css2 URL (many families per request OK)
 *   - `jsdelivr`: raw @font-face CSS text, injected via <style>
 *
 * Google-hosted fonts are preferred (CDN-optimized, OFL-vetted, HTTP/2
 * multiplexing). jsdelivr is the fallback for Korean display fonts not on
 * Google Fonts (Gmarket Sans, Galmuri, etc.).
 */

import type { FontEntry } from "./types";

/** Build a single Google Fonts css2 URL that loads every google-loader
 *  catalog entry at once. Dramatically reduces request count vs per-font
 *  links. Families are alphabetized so the URL is deterministic (cache
 *  friendly). */
export function buildGoogleFontsHref(entries: FontEntry[]): string | null {
  const googleFamilies = entries
    .filter((e) => e.loader.kind === "google")
    .map((e) => (e.loader as { kind: "google"; family: string }).family)
    .sort();
  if (googleFamilies.length === 0) return null;
  const params = googleFamilies
    .map((f) => `family=${encodeURIComponent(f)}`)
    .join("&");
  return `https://fonts.googleapis.com/css2?${params}&display=swap`;
}

/** Concatenate raw @font-face CSS for every jsdelivr-loader catalog entry.
 *  Returned string is safe to inject inside a `<style>` element. */
export function buildJsdelivrCss(entries: FontEntry[]): string {
  return entries
    .filter((e) => e.loader.kind === "jsdelivr")
    .map((e) => (e.loader as { kind: "jsdelivr"; fontFaceCss: string }).fontFaceCss)
    .join("\n\n");
}

/** Generate a copy-ready `font-variation-settings` CSS snippet for a
 *  variable-font selection. Returns "" for static fonts. */
export function buildVariationSettings(axisValues: Record<string, number>): string {
  const entries = Object.entries(axisValues);
  if (entries.length === 0) return "";
  return entries
    .map(([tag, v]) => `"${tag}" ${Number.isInteger(v) ? v : v.toFixed(2)}`)
    .join(", ");
}

/** User-facing CSS snippet for a font selection. Meant to be pasted into
 *  a project's stylesheet. Includes the loader directive + font-family
 *  rule. Omits per-selector usage — the user's caller wires that. */
export function buildExportCss(entry: FontEntry, selection: {
  axisValues: Record<string, number>;
  staticWeight?: number;
  letterSpacing?: number;
  lineHeight?: number;
}): string {
  const parts: string[] = [];
  if (entry.loader.kind === "google") {
    parts.push(`@import url("${buildGoogleFontsHref([entry])}");`);
  } else {
    parts.push(entry.loader.fontFaceCss);
  }

  const useBlock: string[] = [`/* Apply to a selector of your choice */`];
  useBlock.push(`.your-text {`);
  useBlock.push(`  font-family: ${entry.cssFamily};`);

  if (entry.variable) {
    const vs = buildVariationSettings(selection.axisValues);
    if (vs) useBlock.push(`  font-variation-settings: ${vs};`);
    // Surface the weight axis as a first-class CSS property when present —
    // this lets the cascade interact naturally with utility classes.
    const wght = selection.axisValues.wght;
    if (wght != null) useBlock.push(`  font-weight: ${Math.round(wght)};`);
  } else if (selection.staticWeight) {
    useBlock.push(`  font-weight: ${selection.staticWeight};`);
  }

  if (selection.letterSpacing != null && selection.letterSpacing !== 0) {
    useBlock.push(`  letter-spacing: ${selection.letterSpacing.toFixed(3)}em;`);
  }
  if (selection.lineHeight != null) {
    useBlock.push(`  line-height: ${selection.lineHeight.toFixed(2)};`);
  }

  useBlock.push(`}`);
  parts.push(useBlock.join("\n"));
  return parts.join("\n\n");
}
