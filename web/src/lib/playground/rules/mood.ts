/**
 * Mood → primitive default map. Picking a mood seeds the other primitives
 * with opinionated defaults so a first-time user gets a coherent state in
 * one click. Any primitive can then be user-overridden; when it diverges
 * from the mood default the MoodOverrideBadge surfaces in the UI.
 */

import type {
  Density,
  MoodPreset,
  MotionPreset,
  RadiusScale,
  VoiceAdjective,
  WeightScale,
} from "../state";
import { MOOD_VOICE_DEFAULTS } from "../samples";

export interface MoodDefaults {
  primary: string;
  density: Density;
  radius: RadiusScale;
  weight: WeightScale;
  motion: MotionPreset;
  voice: VoiceAdjective[];
  /** Short copy shown on the mood card. */
  tagline: string;
  /** Characters shown as the mood's visual avatar on the card. */
  glyph: string;
}

export const MOOD_DEFAULTS: Record<MoodPreset, MoodDefaults> = {
  warm: {
    primary: "#c96442", // terracotta — the Claude/Anthropic warm reference
    density: "comfortable",
    radius: "soft",
    weight: "regular",
    motion: "standard",
    voice: MOOD_VOICE_DEFAULTS.warm,
    tagline: "Trustworthy, human-first, measured",
    glyph: "◐",
  },
  sharp: {
    primary: "#18181b", // near-black — the sharp neutral
    density: "compact",
    radius: "sharp",
    weight: "heavy",
    motion: "subtle",
    voice: MOOD_VOICE_DEFAULTS.sharp,
    tagline: "Engineering-first, crisp, disciplined",
    glyph: "▱",
  },
  playful: {
    primary: "#ec4899", // magenta-pink
    density: "airy",
    radius: "pill",
    weight: "regular",
    motion: "expressive",
    voice: MOOD_VOICE_DEFAULTS.playful,
    tagline: "Irreverent, chroma-forward, spring-allowed",
    glyph: "◉",
  },
  luxurious: {
    primary: "#1f1b2d", // dark plum
    density: "comfortable",
    radius: "soft",
    weight: "light",
    motion: "subtle",
    voice: MOOD_VOICE_DEFAULTS.luxurious,
    tagline: "Editorial, dark-calm, unhurried",
    glyph: "◈",
  },
  editorial: {
    primary: "#141413", // ink-black
    density: "airy",
    radius: "sharp",
    weight: "heavy",
    motion: "subtle",
    voice: MOOD_VOICE_DEFAULTS.editorial,
    tagline: "Typography-led, flat chrome, reading-pace",
    glyph: "▭",
  },
};
