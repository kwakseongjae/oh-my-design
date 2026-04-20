/**
 * Personality quiz → Playground seed.
 *
 * The Design Personality Quiz (src/app/curation/* and /result/[typeCode])
 * produces a 4-axis code like "CDFS" (Cool / Dense / Flat / Sharp). This
 * module maps each TypeCode to an opinionated Playground seed, using the
 * axes as primitives and the type's top-matched reference to seed color.
 *
 * Usage: /playground?from=CDFS → `seedFromTypeCode("CDFS")` returns the
 * initial PlaygroundState to merge into DEFAULT_STATE.
 */

import type { PlaygroundState } from "../state";
import { MOOD_DEFAULTS } from "./mood";
import { DESIGN_TYPES } from "@/lib/survey/types";
import type { TypeCode } from "@/lib/survey/types";

/**
 * Canonical color seeds per top-matched reference — used when the personality's
 * highest-score reference is picked as the color source. Keeps the seeding
 * offline (no HTTP fetch to /api/references/<id>).
 */
const TOP_REF_COLOR_SEED: Record<string, string> = {
  "linear.app": "#5e6ad2",
  vercel: "#000000",
  stripe: "#635bff",
  airbnb: "#ff385c",
  figma: "#a259ff",
  notion: "#000000",
  apple: "#0071e3",
  claude: "#c96442",
  line: "#07b53b",
  toss: "#3182f6",
};

/**
 * Per-axis → Playground primitive mapping. The rationale for each axis → primitive
 * is derived from the DESIGN_TYPES comments in @/lib/survey/types.ts.
 */
function mapAxes(code: TypeCode) {
  const [T, D, E, S] = code.split("") as [string, string, string, string];

  // Temperature → mood baseline. Cool leans sharp/editorial; warm leans warm/playful.
  const mood =
    T === "W"
      ? E === "L"
        ? "warm"
        : "warm"
      : S === "R"
        ? "playful"
        : E === "L"
          ? "sharp"
          : "editorial";

  // Density axis maps directly to density primitive.
  const density = D === "D" ? "compact" : "airy";

  // Shape axis directly chooses radius scale.
  const radius = S === "S" ? "sharp" : S === "R" && D === "O" ? "pill" : "soft";

  // Elevation axis modulates motion — flat reads as subtle, layered reads as standard.
  const motion = E === "F" ? "subtle" : "standard";

  // Weight: cool+dense → heavy (signal-dense); warm+open → regular/light
  const weight: PlaygroundState["weight"] =
    T === "C" && D === "D" ? "heavy" : T === "W" && D === "O" ? "light" : "regular";

  return { mood, density, radius, motion, weight } as const;
}

export function seedFromTypeCode(code: string): Partial<PlaygroundState> | null {
  const typeCode = code.toUpperCase() as TypeCode;
  const type = DESIGN_TYPES[typeCode];
  if (!type) return null;

  const { mood, density, radius, motion, weight } = mapAxes(typeCode);
  const topRef = type.references[0]?.id;
  const primary =
    topRef && TOP_REF_COLOR_SEED[topRef]
      ? TOP_REF_COLOR_SEED[topRef]
      : MOOD_DEFAULTS[mood].primary;

  return {
    base: { kind: "personality", code: typeCode },
    mood,
    primary,
    density,
    radius,
    weight,
    motion,
    voice: [...MOOD_DEFAULTS[mood].voice],
  };
}
