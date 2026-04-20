/**
 * Density → spacing scale mapping. Drives every padding/gap/height token in
 * the generated DESIGN.md §5 Layout Principles and §14 States.
 *
 * Mobile touch-target floor is 44px regardless of density — no amount of
 * compact preference overrides accessibility geometry on touch surfaces.
 */

import type { Density } from "../state";

export interface DensityTokens {
  /** Base spacing unit — multipliers in the DS use this as their anchor. */
  unit: number;
  /** Spacing scale (8-tier), derived from `unit`. */
  scale: number[];
  rowPaddingY: number;
  sectionGap: number;
  cardPadding: number;
  /** Minimum height for interactive elements on desktop. */
  interactiveMinHeight: number;
  /** Mobile touch-target floor. Compact preserves the WCAG 44px minimum;
   *  airy density voluntarily goes above it. Never below 44 regardless. */
  mobileTouchFloor: number;
  /** Short copy used on the density card. */
  tagline: string;
}

export const DENSITY_RULES: Record<Density, DensityTokens> = {
  compact: {
    unit: 4,
    scale: [0, 2, 4, 6, 8, 12, 16, 24],
    rowPaddingY: 8,
    sectionGap: 24,
    cardPadding: 16,
    interactiveMinHeight: 36,
    mobileTouchFloor: 44,
    tagline: "High information density, data-heavy layouts",
  },
  comfortable: {
    unit: 8,
    scale: [0, 4, 8, 12, 16, 24, 32, 48],
    rowPaddingY: 12,
    sectionGap: 40,
    cardPadding: 20,
    interactiveMinHeight: 40,
    mobileTouchFloor: 44,
    tagline: "Default — generous but efficient",
  },
  airy: {
    unit: 12,
    scale: [0, 6, 12, 18, 24, 36, 48, 64],
    rowPaddingY: 16,
    sectionGap: 64,
    cardPadding: 28,
    interactiveMinHeight: 48,
    mobileTouchFloor: 48,
    tagline: "Editorial pacing, reading-first surfaces",
  },
};
