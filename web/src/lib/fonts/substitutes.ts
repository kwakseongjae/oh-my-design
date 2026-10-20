/**
 * Measured font substitutes (spec/design-md-v3.md §6.1–6.3, owner policy F2/G3).
 *
 * A substitute is an open-licence face chosen by measurement to stand in for a brand face, one per
 * script, and is always labelled "substitute — not the brand face". It is recorded in the
 * reference's DESIGN.md frontmatter (fonts.faces.<family>.substitutes.<script>) with its metrics in
 * reference.json (fonts.substitutes.<family>.<script>.metrics).
 *
 * The data is src/data/font-substitutes.generated.json, built by scripts/build-registry.mjs from
 * each reference.json (lib/font-substitutes.mjs); the measurements behind it are recorded in
 * docs/research/2026-10-20-r11/fonts/. The journey UI calls getSubstitutes and, when it returns
 * nothing for a script, shows "Substitute: none chosen" instead of rendering another face.
 */
import generated from "@/data/font-substitutes.generated.json";

export type FontScript = "latin" | "hangul" | "kana" | "han-hans" | "han-hant";

export type FontSubstitute = {
  /** the brand family this stands in for, as captured */
  brandFamily: string;
  script: FontScript;
  /** the open-licence substitute family */
  family: string;
  provider: "google" | "other";
  /** always "substitute — not the brand face" */
  label: string;
  /** stylesheet to load the substitute (Google Fonts css2 URL when provider is google) */
  cssUrl?: string;
  metrics?: {
    xHeightRatio?: number;
    avgAdvance?: number;
    weightRange?: string;
    classification?: string;
    delta?: Record<string, number | string>;
  };
};

const LABEL = "substitute — not the brand face";
const SCRIPTS: readonly FontScript[] = ["latin", "hangul", "kana", "han-hans", "han-hant"];

type Raw = {
  brandFamily?: unknown;
  script?: unknown;
  family?: unknown;
  provider?: unknown;
  label?: unknown;
  cssUrl?: unknown;
  metrics?: {
    xHeightRatio?: unknown;
    avgAdvance?: unknown;
    weightRange?: unknown;
    classification?: unknown;
    delta?: Record<string, unknown>;
  };
};

/**
 * A generated record becomes a FontSubstitute only when it is labelled and measured; anything else is
 * dropped, so a caller can never render an unlabelled face from this accessor.
 */
function toSubstitute(r: Raw): FontSubstitute | null {
  if (typeof r.brandFamily !== "string" || typeof r.family !== "string") return null;
  if (!SCRIPTS.includes(r.script as FontScript)) return null;
  if (r.provider !== "google" && r.provider !== "other") return null;
  if (r.label !== LABEL) return null;
  const m = r.metrics;
  if (!m || typeof m.xHeightRatio !== "number" || typeof m.avgAdvance !== "number") return null;
  const delta: Record<string, number | string> = {};
  for (const [k, v] of Object.entries(m.delta ?? {})) if (typeof v === "number" || typeof v === "string") delta[k] = v;
  return {
    brandFamily: r.brandFamily,
    script: r.script as FontScript,
    family: r.family,
    provider: r.provider,
    label: r.label,
    ...(typeof r.cssUrl === "string" ? { cssUrl: r.cssUrl } : {}),
    metrics: {
      xHeightRatio: m.xHeightRatio,
      avgAdvance: m.avgAdvance,
      ...(typeof m.weightRange === "string" ? { weightRange: m.weightRange } : {}),
      ...(typeof m.classification === "string" ? { classification: m.classification } : {}),
      delta,
    },
  };
}

const BY_ID: Readonly<Record<string, readonly FontSubstitute[]>> = Object.fromEntries(
  Object.entries((generated as { substitutes?: Record<string, Raw[]> }).substitutes ?? {}).map(([id, list]) => [
    id,
    list.map(toSubstitute).filter((s): s is FontSubstitute => s !== null),
  ]),
);

/**
 * Measured substitutes for a reference, one per brand face and script (Latin first), from
 * src/data/font-substitutes.generated.json (built by scripts/build-registry.mjs from each
 * reference.json). Empty when nothing was measured: show "Substitute: none chosen" then, never
 * another face.
 */
export function getSubstitutes(referenceId: string): FontSubstitute[] {
  return (BY_ID[referenceId] ?? []).map((s) => structuredClone(s));
}
