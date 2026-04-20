/**
 * Motion preset → duration scale + easing tokens + spring stance.
 *
 * The spring/overshoot decision is deliberate and tracked in §15 of the
 * generated DESIGN.md. Commerce and productivity tools typically forbid
 * spring (precision register); delight-forward products license it in
 * narrow scopes (confirmation animations, stickers, favorite toggles).
 */

import type { MotionPreset } from "../state";

export interface MotionTokens {
  /** Duration ladder, milliseconds. */
  durations: { instant: 0; fast: number; standard: number; slow: number; page: number };
  /** Named easings. */
  easings: {
    enter: string;
    exit: string;
    standard: string;
    /** Present only if `springLicensed === true`. */
    spring?: string;
  };
  /** Whether spring/overshoot easing is allowed anywhere in the system. */
  springLicensed: boolean;
  /** When licensed, the narrow scopes where spring is allowed. */
  springScopes?: string[];
  /** Rationale sentence used in §15 of the output. */
  rationale: string;
  tagline: string;
}

export const MOTION_RULES: Record<MotionPreset, MotionTokens> = {
  subtle: {
    durations: { instant: 0, fast: 100, standard: 180, slow: 300, page: 220 },
    easings: {
      enter: "cubic-bezier(0.4, 0, 0.2, 1)",
      exit: "cubic-bezier(0.4, 0, 0.2, 1)",
      standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    springLicensed: false,
    rationale:
      "Motion is nearly invisible — transitions support perception, never demand attention. Spring is forbidden because overshoot reads as uncertain about the fact being committed.",
    tagline: "Fintech-grade restraint, crossfade-only",
  },
  standard: {
    durations: { instant: 0, fast: 150, standard: 250, slow: 400, page: 300 },
    easings: {
      enter: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      exit: "cubic-bezier(0.4, 0, 1, 1)",
      standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    springLicensed: false,
    rationale:
      "Default easing ladder — enter/exit distinguished, two-way transitions use the symmetric standard curve. Spring is deliberately absent; overshoot reads as playful in a way this register doesn't want.",
    tagline: "Default — balanced, material-adjacent",
  },
  expressive: {
    durations: { instant: 0, fast: 200, standard: 300, slow: 500, page: 350 },
    easings: {
      enter: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      exit: "cubic-bezier(0.4, 0, 1, 1)",
      standard: "cubic-bezier(0.4, 0, 0.2, 1)",
      spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
    springLicensed: true,
    springScopes: ["success confirmation checkmark", "favorite toggle heart-fill"],
    rationale:
      "Spring is licensed but narrowly. Only the listed scopes carry overshoot; routine transitions use the standard easing so delight doesn't dilute into drift.",
    tagline: "Delight-forward, spring licensed in narrow scopes",
  },
};
