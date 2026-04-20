import type { PlaygroundState } from "./state";
import { MOOD_DEFAULTS } from "./rules/mood";

/** The state the Playground opens with when no seed is provided.
 *  Mood = `sharp` because it's the most common register across the OmD
 *  corpus (Stripe, Vercel, Linear, Claude all register sharp-ish) and
 *  gives the most neutral starting canvas. Users migrate outward from
 *  here. */
export const DEFAULT_STATE: PlaygroundState = {
  v: 1,
  name: "",
  base: { kind: "blank" },
  mood: "sharp",
  primary: MOOD_DEFAULTS.sharp.primary,
  density: MOOD_DEFAULTS.sharp.density,
  radius: MOOD_DEFAULTS.sharp.radius,
  weight: MOOD_DEFAULTS.sharp.weight,
  motion: MOOD_DEFAULTS.sharp.motion,
  voice: [...MOOD_DEFAULTS.sharp.voice],
  personas: [],
  overrides: {
    primary: false,
    density: false,
    radius: false,
    weight: false,
    motion: false,
    voice: false,
  },
};

/** Build a state seeded from a specific mood (used when the user clicks a
 *  mood card without having previously tweaked any primitive). */
export function stateForMood(name: string, mood: keyof typeof MOOD_DEFAULTS): PlaygroundState {
  const d = MOOD_DEFAULTS[mood];
  return {
    v: 1,
    name,
    base: { kind: "blank" },
    mood,
    primary: d.primary,
    density: d.density,
    radius: d.radius,
    weight: d.weight,
    motion: d.motion,
    voice: [...d.voice],
    personas: [],
    overrides: {
      primary: false,
      density: false,
      radius: false,
      weight: false,
      motion: false,
      voice: false,
    },
  };
}
