/**
 * Hand-curated trending palettes, mood-tagged.
 *
 * Inspired by coolors.co's trending palettes + contemporary brand-design
 * conventions. Each palette ships 5 colors (bg → accent tier ladder) with
 * one index flagged as the "primary" — the value we seed into PlaygroundState
 * when the user picks a palette.
 *
 * Moods are multi-tagged so palettes can belong to more than one register
 * (e.g. "Mono Graphite" reads as both sharp and editorial). The palette
 * picker filters by the current mood first, then offers an "all" view.
 */

import type { MoodPreset } from "./state";

export interface ColorPalette {
  id: string;
  name: string;
  tagline: string;
  moods: MoodPreset[];
  /** Five hex colors, ordered light → dark for warm/editorial palettes,
   *  chroma-grouped for playful/luxurious. */
  colors: [string, string, string, string, string];
  /** Index (0-4) of the color that becomes the PlaygroundState primary. */
  primaryIndex: 0 | 1 | 2 | 3 | 4;
}

export const PALETTES: ColorPalette[] = [
  // ─────────── WARM (5) ───────────
  {
    id: "terracotta-dream",
    name: "Terracotta Dream",
    tagline: "Clay · coral · sage",
    moods: ["warm"],
    colors: ["#fef7ed", "#f4a261", "#e76f51", "#2a9d8f", "#264653"],
    primaryIndex: 2,
  },
  {
    id: "desert-sand",
    name: "Desert Sand",
    tagline: "Sunbaked · grounded",
    moods: ["warm", "editorial"],
    colors: ["#fefae0", "#ccd5ae", "#d4a373", "#bc6c25", "#606c38"],
    primaryIndex: 3,
  },
  {
    id: "sunset-peach",
    name: "Sunset Peach",
    tagline: "Dusk · ember · char",
    moods: ["warm"],
    colors: ["#fff3e0", "#ffcc80", "#ff9800", "#e65100", "#3e2723"],
    primaryIndex: 2,
  },
  {
    id: "cozy-clay",
    name: "Cozy Clay",
    tagline: "Coastal · warm neutral",
    moods: ["warm"],
    colors: ["#faedcd", "#e07a5f", "#f2cc8f", "#81b29a", "#3d405b"],
    primaryIndex: 1,
  },
  {
    id: "honey-oat",
    name: "Honey Oat",
    tagline: "Cream · amber · moss",
    moods: ["warm", "editorial"],
    colors: ["#f4f1de", "#e07a5f", "#f2cc8f", "#81b29a", "#3d405b"],
    primaryIndex: 2,
  },

  // ─────────── SHARP (5) ───────────
  {
    id: "midnight-steel",
    name: "Midnight Steel",
    tagline: "Monochrome · precise",
    moods: ["sharp"],
    colors: ["#f8f9fa", "#dee2e6", "#6c757d", "#343a40", "#212529"],
    primaryIndex: 3,
  },
  {
    id: "arctic-blue",
    name: "Arctic Blue",
    tagline: "Cool · technical · calm",
    moods: ["sharp"],
    colors: ["#e7f5ff", "#a5d8ff", "#339af0", "#1c7ed6", "#1864ab"],
    primaryIndex: 2,
  },
  {
    id: "mono-graphite",
    name: "Mono Graphite",
    tagline: "Near-black · ruthless",
    moods: ["sharp", "editorial"],
    colors: ["#fafafa", "#e0e0e0", "#9e9e9e", "#424242", "#18181b"],
    primaryIndex: 4,
  },
  {
    id: "cool-slate",
    name: "Cool Slate",
    tagline: "Mist · ink · steel",
    moods: ["sharp"],
    colors: ["#f1f5f9", "#cbd5e1", "#64748b", "#334155", "#0f172a"],
    primaryIndex: 3,
  },
  {
    id: "neo-cerulean",
    name: "Neo Cerulean",
    tagline: "Vercel-blue family",
    moods: ["sharp"],
    colors: ["#eef2ff", "#a5b4fc", "#6366f1", "#4338ca", "#1e1b4b"],
    primaryIndex: 2,
  },

  // ─────────── PLAYFUL (5) ───────────
  {
    id: "candy-pop",
    name: "Candy Pop",
    tagline: "Pink · bubblegum · spark",
    moods: ["playful"],
    colors: ["#ffe5ec", "#ffc2d1", "#fb6f92", "#d53f8c", "#880e4f"],
    primaryIndex: 2,
  },
  {
    id: "tropical-splash",
    name: "Tropical Splash",
    tagline: "Coral · aqua · citrus",
    moods: ["playful"],
    colors: ["#227c9d", "#17c3b2", "#ffcb77", "#fe6d73", "#fef9ef"],
    primaryIndex: 3,
  },
  {
    id: "neon-citrus",
    name: "Neon Citrus",
    tagline: "Acid · chroma-loud",
    moods: ["playful"],
    colors: ["#00bbf9", "#f15bb5", "#fee440", "#9b5de5", "#00f5d4"],
    primaryIndex: 3,
  },
  {
    id: "sunshine-fruit",
    name: "Sunshine Fruit",
    tagline: "Coral · mint · lemon",
    moods: ["playful", "warm"],
    colors: ["#ffd166", "#ef476f", "#06d6a0", "#118ab2", "#073b4c"],
    primaryIndex: 1,
  },
  {
    id: "retro-arcade",
    name: "Retro Arcade",
    tagline: "Pixel · playful · 80s",
    moods: ["playful"],
    colors: ["#fff5f7", "#ff6b9d", "#7dd3fc", "#facc15", "#1e293b"],
    primaryIndex: 1,
  },

  // ─────────── LUXURIOUS (5) ───────────
  {
    id: "midnight-plum",
    name: "Midnight Plum",
    tagline: "Wine · velvet · amber",
    moods: ["luxurious"],
    colors: ["#1f0b34", "#501f3a", "#812f5a", "#d4af37", "#f7f4ea"],
    primaryIndex: 2,
  },
  {
    id: "wine-and-gold",
    name: "Wine & Gold",
    tagline: "Burgundy · ivory · brass",
    moods: ["luxurious", "editorial"],
    colors: ["#faf3e0", "#d4af37", "#722f37", "#3c1518", "#1b1b1e"],
    primaryIndex: 2,
  },
  {
    id: "champagne-silk",
    name: "Champagne Silk",
    tagline: "Cream · beige · cocoa",
    moods: ["luxurious", "editorial"],
    colors: ["#f7f4ea", "#e8d5b7", "#d4a373", "#82715e", "#2d2a26"],
    primaryIndex: 2,
  },
  {
    id: "obsidian-dream",
    name: "Obsidian Dream",
    tagline: "Dark · ultraviolet · rose",
    moods: ["luxurious"],
    colors: ["#0a0a0a", "#1a1a2e", "#16213e", "#0f3460", "#e94560"],
    primaryIndex: 4,
  },
  {
    id: "forest-noir",
    name: "Forest Noir",
    tagline: "Deep green · copper · ink",
    moods: ["luxurious"],
    colors: ["#1a2e1f", "#2d4a2b", "#74c69d", "#c77dff", "#0b0f0b"],
    primaryIndex: 2,
  },

  // ─────────── EDITORIAL (5) ───────────
  {
    id: "pure-ink",
    name: "Pure Ink",
    tagline: "Ink on paper · silent",
    moods: ["editorial", "sharp"],
    colors: ["#ffffff", "#f5f5f5", "#e5e5e5", "#262626", "#0a0a0a"],
    primaryIndex: 3,
  },
  {
    id: "newsprint",
    name: "Newsprint",
    tagline: "Warm paper · column",
    moods: ["editorial"],
    colors: ["#f5f1e8", "#e8e0d0", "#8b7e74", "#3a3228", "#1a1611"],
    primaryIndex: 3,
  },
  {
    id: "manuscript",
    name: "Manuscript",
    tagline: "Parchment · handset",
    moods: ["editorial", "luxurious"],
    colors: ["#fefbf3", "#f7e9d0", "#e8d1b2", "#5c4a3f", "#1c1917"],
    primaryIndex: 3,
  },
  {
    id: "long-read",
    name: "Long Read",
    tagline: "Sepia · warm neutral",
    moods: ["editorial"],
    colors: ["#fcfaf6", "#ebe8e1", "#a8a39e", "#4a4743", "#0d0d0d"],
    primaryIndex: 3,
  },
  {
    id: "printed-page",
    name: "Printed Page",
    tagline: "Off-white · matte ink",
    moods: ["editorial"],
    colors: ["#f7f4ef", "#e8e4dc", "#b0a89c", "#423d36", "#0b0b0b"],
    primaryIndex: 3,
  },
];

/** Palettes whose `moods` list includes the given mood. */
export function palettesForMood(mood: MoodPreset): ColorPalette[] {
  return PALETTES.filter((p) => p.moods.includes(mood));
}

/** Returns the palette whose `colors` array contains the given hex (case-insensitive),
 *  useful for highlighting the active palette when the primary was picked via one. */
export function findPaletteByColor(hex: string): ColorPalette | null {
  const lower = hex.toLowerCase();
  return (
    PALETTES.find((p) =>
      p.colors.some((c) => c.toLowerCase() === lower),
    ) ?? null
  );
}

/** Returns the primary hex for a palette (convenience). */
export function paletteprimary(palette: ColorPalette): string {
  return palette.colors[palette.primaryIndex];
}
