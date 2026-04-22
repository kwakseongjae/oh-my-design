/**
 * Deterministic 3-button tweaks. Novice users don't want to learn axis
 * vocabulary — they want "rounder", "thicker", "tighter". Each tweak maps
 * to a concrete delta on axis values / letter-spacing / static-weight index.
 *
 * Non-variable fonts still support Thicker/Thinner (walks the weights[]
 * array) and Tighter/Looser (letter-spacing). Rounder/Sharper only applies
 * when the font has a CASL / SOFT / wght axis.
 */

import type { FontEntry } from "./types";

export type TweakKey =
  | "rounder"
  | "sharper"
  | "thicker"
  | "thinner"
  | "tighter"
  | "looser";

export interface LiveSelection {
  axisValues: Record<string, number>;
  /** Chosen weight for static fonts. For variable fonts this is ignored. */
  staticWeight: number;
  /** Letter-spacing in `em` (scales with font-size). */
  letterSpacing: number;
  /** Unitless CSS line-height. 1.2 is a sensible generic default; body
   *  text usually wants 1.5+, display/headline wants 1.05–1.2. */
  lineHeight: number;
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

/** Initial live selection seeded from the font's declared defaults.
 *  Line-height defaults to 1.2 (tight, headline-weighted) because the
 *  big specimen is what users look at first — body copy users can
 *  bump it to 1.5 themselves. */
export function initialSelection(font: FontEntry): LiveSelection {
  const axisValues: Record<string, number> = Object.fromEntries(
    font.axes.map((a) => [a.tag, a.default]),
  );
  const staticWeight = font.variable
    ? (axisValues.wght ?? 400)
    : (font.weights?.[Math.floor((font.weights?.length ?? 1) / 2)] ?? 400);
  return { axisValues, staticWeight, letterSpacing: 0, lineHeight: 1.2 };
}

/** Whether a tweak can actually do anything given this font's axes. */
export function tweakAvailable(font: FontEntry, tweak: TweakKey): boolean {
  const hasWght = font.axes.some((a) => a.tag === "wght");
  const hasCASL = font.axes.some((a) => a.tag === "CASL");
  const hasSOFT = font.axes.some((a) => a.tag === "SOFT");
  const hasStaticWeights = (font.weights?.length ?? 0) > 1;
  switch (tweak) {
    case "rounder":
    case "sharper":
      return hasCASL || hasSOFT || hasWght;
    case "thicker":
    case "thinner":
      return hasWght || hasStaticWeights;
    case "tighter":
    case "looser":
      return true;
  }
}

function axisRange(font: FontEntry, tag: string): { min: number; max: number } | null {
  const a = font.axes.find((x) => x.tag === tag);
  return a ? { min: a.min, max: a.max } : null;
}

/** Apply one tweak. Returns a new selection object. */
export function applyTweak(
  font: FontEntry,
  current: LiveSelection,
  tweak: TweakKey,
): LiveSelection {
  const next: LiveSelection = {
    axisValues: { ...current.axisValues },
    staticWeight: current.staticWeight,
    letterSpacing: current.letterSpacing,
    lineHeight: current.lineHeight,
  };

  const wghtRange = axisRange(font, "wght");
  const caslRange = axisRange(font, "CASL");
  const softRange = axisRange(font, "SOFT");

  switch (tweak) {
    case "rounder":
      if (caslRange) {
        next.axisValues.CASL = clamp(
          (current.axisValues.CASL ?? 0) + 0.3,
          caslRange.min,
          caslRange.max,
        );
      } else if (softRange) {
        next.axisValues.SOFT = clamp(
          (current.axisValues.SOFT ?? 30) + 20,
          softRange.min,
          softRange.max,
        );
      } else if (wghtRange) {
        // Soft fallback — heavier weight slightly opens counters in most faces
        next.axisValues.wght = clamp(
          (current.axisValues.wght ?? 400) + 50,
          wghtRange.min,
          wghtRange.max,
        );
      }
      break;
    case "sharper":
      if (caslRange) {
        next.axisValues.CASL = clamp(
          (current.axisValues.CASL ?? 0) - 0.3,
          caslRange.min,
          caslRange.max,
        );
      } else if (softRange) {
        next.axisValues.SOFT = clamp(
          (current.axisValues.SOFT ?? 30) - 20,
          softRange.min,
          softRange.max,
        );
      } else if (wghtRange) {
        next.axisValues.wght = clamp(
          (current.axisValues.wght ?? 400) - 50,
          wghtRange.min,
          wghtRange.max,
        );
      }
      break;
    case "thicker":
      if (wghtRange) {
        next.axisValues.wght = clamp(
          (current.axisValues.wght ?? 400) + 150,
          wghtRange.min,
          wghtRange.max,
        );
      } else if (font.weights && font.weights.length > 1) {
        const i = font.weights.indexOf(current.staticWeight);
        const nextI = Math.min(font.weights.length - 1, (i === -1 ? 0 : i) + 1);
        next.staticWeight = font.weights[nextI];
      }
      break;
    case "thinner":
      if (wghtRange) {
        next.axisValues.wght = clamp(
          (current.axisValues.wght ?? 400) - 150,
          wghtRange.min,
          wghtRange.max,
        );
      } else if (font.weights && font.weights.length > 1) {
        const i = font.weights.indexOf(current.staticWeight);
        const prevI = Math.max(0, (i === -1 ? 1 : i) - 1);
        next.staticWeight = font.weights[prevI];
      }
      break;
    case "tighter":
      next.letterSpacing = clamp(current.letterSpacing - 0.02, -0.1, 0.2);
      break;
    case "looser":
      next.letterSpacing = clamp(current.letterSpacing + 0.02, -0.1, 0.2);
      break;
  }

  return next;
}

/** Distance from the current selection to the font's default, used by the
 *  "Reset" button affordance. 0 = at default. */
export function distanceFromDefault(
  font: FontEntry,
  current: LiveSelection,
): number {
  let d = 0;
  for (const a of font.axes) {
    const delta = Math.abs((current.axisValues[a.tag] ?? a.default) - a.default);
    const range = a.max - a.min;
    if (range > 0) d += delta / range;
  }
  if (current.letterSpacing !== 0) d += Math.abs(current.letterSpacing) * 10;
  if (current.lineHeight !== 1.2) d += Math.abs(current.lineHeight - 1.2) * 2;
  return d;
}
