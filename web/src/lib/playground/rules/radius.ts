/**
 * Radius scale → per-component radii. Large surfaces cap at 16px even when
 * the brand's pill radius is 9999px, mirroring the surface-cap logic already
 * in the existing preview.tsx (legacy but the cap logic is corpus-verified).
 */

import type { RadiusScale } from "../state";

export interface RadiusTokens {
  /** Buttons, inputs, small interactive controls. */
  control: number;
  /** Cards and content containers. Pill radius caps here. */
  surface: number;
  /** Dialogs / modals. */
  dialog: number;
  /** Badges / pills / tags. Small decorative elements. */
  badge: number;
  /** Avatars — always 50% for circle, per corpus convention. */
  avatar: string;
  /** Short copy on the radius card. */
  tagline: string;
}

export const RADIUS_RULES: Record<RadiusScale, RadiusTokens> = {
  sharp: {
    control: 2,
    surface: 4,
    dialog: 4,
    badge: 2,
    avatar: "2px",
    tagline: "0-2px — utility, commerce, editorial",
  },
  soft: {
    control: 6,
    surface: 10,
    dialog: 12,
    badge: 4,
    avatar: "50%",
    tagline: "4-8px — default, balanced, humane",
  },
  pill: {
    control: 9999,
    surface: 16, // Capped — a pill card is kitsch
    dialog: 16,
    badge: 9999,
    avatar: "50%",
    tagline: "pill buttons, capped cards — tactile",
  },
};

/** Convert px value to CSS string, preserving `9999px` for pills. */
export function radiusPx(value: number): string {
  return `${value}px`;
}
