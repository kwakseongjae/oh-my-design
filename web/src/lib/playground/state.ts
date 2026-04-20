/**
 * Playground state model — single source of truth for what the user has picked.
 *
 * The state is deterministic: every primitive maps to tokens via rule tables
 * (see ./rules/*.ts). No LLM calls. URL-serializable via ./codec.ts.
 */

export type MoodPreset = "warm" | "sharp" | "playful" | "luxurious" | "editorial";
export type Density = "compact" | "comfortable" | "airy";
export type RadiusScale = "sharp" | "soft" | "pill";
export type WeightScale = "light" | "regular" | "heavy";
export type MotionPreset = "subtle" | "standard" | "expressive";

export const MOOD_PRESETS: readonly MoodPreset[] = [
  "warm",
  "sharp",
  "playful",
  "luxurious",
  "editorial",
] as const;

export const DENSITY_PICKS: readonly Density[] = ["compact", "comfortable", "airy"] as const;
export const RADIUS_PICKS: readonly RadiusScale[] = ["sharp", "soft", "pill"] as const;
export const WEIGHT_PICKS: readonly WeightScale[] = ["light", "regular", "heavy"] as const;
export const MOTION_PICKS: readonly MotionPreset[] = ["subtle", "standard", "expressive"] as const;

export type VoiceAdjective =
  | "Warm"
  | "Precise"
  | "Irreverent"
  | "Quiet"
  | "Friendly"
  | "Direct"
  | "Considered"
  | "Bright"
  | "Candid"
  | "Grounded"
  | "Deliberate"
  | "Confident";

export const VOICE_POOL: readonly VoiceAdjective[] = [
  "Warm",
  "Precise",
  "Irreverent",
  "Quiet",
  "Friendly",
  "Direct",
  "Considered",
  "Bright",
  "Candid",
  "Grounded",
  "Deliberate",
  "Confident",
] as const;

export const VOICE_MAX = 3;

export type PersonaArchetype =
  | "engineer-who-skims"
  | "designer-who-hunts"
  | "pm-who-approves"
  | "student-who-learns"
  | "exec-who-signs-off"
  | "buyer-who-audits"
  | "creator-who-ships"
  | "explorer-who-browses";

export const PERSONA_POOL: readonly PersonaArchetype[] = [
  "engineer-who-skims",
  "designer-who-hunts",
  "pm-who-approves",
  "student-who-learns",
  "exec-who-signs-off",
  "buyer-who-audits",
  "creator-who-ships",
  "explorer-who-browses",
] as const;

export const PERSONA_MIN = 2;
export const PERSONA_MAX = 4;

export type BaseSeed =
  | { kind: "blank" }
  | { kind: "clone"; refId: string }
  | { kind: "personality"; code: string };

export interface OverrideFlags {
  primary: boolean;
  density: boolean;
  radius: boolean;
  weight: boolean;
  motion: boolean;
  voice: boolean;
}

export interface PlaygroundState {
  /** Schema version — bump on breaking change so `codec.decode` can guard. */
  v: 1;
  name: string;
  tagline?: string;
  description?: string;
  base: BaseSeed;
  mood: MoodPreset;
  /** Primary color hex (`#rrggbb`). */
  primary: string;
  density: Density;
  radius: RadiusScale;
  weight: WeightScale;
  motion: MotionPreset;
  voice: VoiceAdjective[];
  personas: PersonaArchetype[];
  /**
   * Tracks which primitives the user explicitly diverged from the Mood default.
   * Used by the `MoodOverrideBadge` and the `playground_mood_override` analytics event.
   */
  overrides: OverrideFlags;
}

/** Runtime guard — narrow validation of parsed URL/localStorage payload.
 *  Returns null if malformed. Values that pass this check are safe to merge
 *  into DEFAULT_STATE even if some properties are missing. */
export function validatePlaygroundState(candidate: unknown): PlaygroundState | null {
  if (!candidate || typeof candidate !== "object") return null;
  const c = candidate as Record<string, unknown>;
  if (c.v !== 1) return null;

  const moodOk = typeof c.mood === "string" && MOOD_PRESETS.includes(c.mood as MoodPreset);
  const densityOk = typeof c.density === "string" && DENSITY_PICKS.includes(c.density as Density);
  const radiusOk = typeof c.radius === "string" && RADIUS_PICKS.includes(c.radius as RadiusScale);
  const weightOk = typeof c.weight === "string" && WEIGHT_PICKS.includes(c.weight as WeightScale);
  const motionOk = typeof c.motion === "string" && MOTION_PICKS.includes(c.motion as MotionPreset);
  const primaryOk = typeof c.primary === "string" && /^#[0-9a-f]{6}$/i.test(c.primary);
  const nameOk = typeof c.name === "string";

  if (!moodOk || !densityOk || !radiusOk || !weightOk || !motionOk || !primaryOk || !nameOk) {
    return null;
  }

  // voice & personas: narrow arrays (drop unknown values rather than fail whole state)
  const voice: VoiceAdjective[] = Array.isArray(c.voice)
    ? (c.voice as unknown[]).filter((v): v is VoiceAdjective =>
        typeof v === "string" && (VOICE_POOL as readonly string[]).includes(v),
      ).slice(0, VOICE_MAX)
    : [];
  const personas: PersonaArchetype[] = Array.isArray(c.personas)
    ? (c.personas as unknown[]).filter((p): p is PersonaArchetype =>
        typeof p === "string" && (PERSONA_POOL as readonly string[]).includes(p),
      ).slice(0, PERSONA_MAX)
    : [];

  const base = (c.base && typeof c.base === "object" ? c.base : { kind: "blank" }) as BaseSeed;

  const overrides = (c.overrides && typeof c.overrides === "object"
    ? c.overrides
    : { primary: false, density: false, radius: false, weight: false, motion: false, voice: false }
  ) as OverrideFlags;

  return {
    v: 1,
    name: c.name as string,
    tagline: typeof c.tagline === "string" ? c.tagline : undefined,
    description: typeof c.description === "string" ? c.description : undefined,
    base,
    mood: c.mood as MoodPreset,
    primary: c.primary as string,
    density: c.density as Density,
    radius: c.radius as RadiusScale,
    weight: c.weight as WeightScale,
    motion: c.motion as MotionPreset,
    voice,
    personas,
    overrides,
  };
}

/** Update a primitive and automatically flag the override if the new value
 *  differs from the Mood's default. */
export function setPrimitive<
  K extends "primary" | "density" | "radius" | "weight" | "motion" | "voice",
>(
  state: PlaygroundState,
  key: K,
  value: PlaygroundState[K],
  moodDefault: PlaygroundState[K],
): PlaygroundState {
  const overrides: OverrideFlags = { ...state.overrides };
  const same =
    Array.isArray(value) && Array.isArray(moodDefault)
      ? value.length === moodDefault.length &&
        value.every((v, i) => v === (moodDefault as unknown[])[i])
      : value === moodDefault;
  overrides[key] = !same;
  return { ...state, [key]: value, overrides };
}
