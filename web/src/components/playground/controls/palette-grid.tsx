"use client";

/**
 * Trending-palette gallery — first-class color-picking surface.
 *
 * Primary palettes (filtered by current mood) shown by default; "Show all"
 * reveals the full curated set. Each tile is a 5-stripe swatch with the
 * primary color ring-highlighted. Click anywhere on the tile to commit.
 */

import { useState } from "react";
import { Sparkles } from "lucide-react";
import {
  PALETTES,
  palettesForMood,
  type ColorPalette,
} from "@/lib/playground/palettes";
import type { MoodPreset } from "@/lib/playground/state";

export function PaletteGrid({
  mood,
  primary,
  onPick,
}: {
  mood: MoodPreset;
  primary: string;
  onPick: (palette: ColorPalette) => void;
}) {
  const [showAll, setShowAll] = useState(false);
  const moodPalettes = palettesForMood(mood);
  const visible = showAll ? PALETTES : moodPalettes;
  const primaryLower = primary.toLowerCase();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          <Sparkles className="h-3 w-3" />
          {showAll
            ? `All palettes · ${PALETTES.length}`
            : `Palettes for ${mood} · ${moodPalettes.length}`}
        </div>
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="text-[11px] font-medium text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        >
          {showAll ? `only ${mood}` : "show all"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {visible.map((p) => (
          <PaletteTile
            key={p.id}
            palette={p}
            active={p.colors[p.primaryIndex].toLowerCase() === primaryLower}
            onPick={onPick}
          />
        ))}
      </div>
    </div>
  );
}

function PaletteTile({
  palette,
  active,
  onPick,
}: {
  palette: ColorPalette;
  active: boolean;
  onPick: (p: ColorPalette) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onPick(palette)}
      className={`group flex flex-col gap-1.5 rounded-lg border p-2 text-left transition-all ${
        active
          ? "border-primary bg-primary/5 ring-2 ring-primary/20"
          : "border-border/50 hover:border-foreground/30 hover:bg-accent/30"
      }`}
      aria-pressed={active}
      title={palette.colors.join(" · ")}
    >
      {/* 5-stripe swatch */}
      <div className="flex h-9 overflow-hidden rounded-md ring-1 ring-border/40">
        {palette.colors.map((hex, i) => {
          const isPrimary = i === palette.primaryIndex;
          return (
            <div
              key={i}
              className={`flex-1 transition-all ${isPrimary ? "flex-[1.5]" : ""}`}
              style={{ background: hex }}
              aria-label={`${hex}${isPrimary ? " (primary)" : ""}`}
            />
          );
        })}
      </div>
      <div className="px-0.5">
        <div className="text-xs font-semibold leading-tight">
          {palette.name}
        </div>
        <div className="text-[10px] text-muted-foreground leading-snug">
          {palette.tagline}
        </div>
      </div>
    </button>
  );
}
