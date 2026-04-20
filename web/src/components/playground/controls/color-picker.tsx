"use client";

/**
 * Color primitive picker — palette-first.
 *
 * Gallery of mood-filtered trending palettes at top (picking one seeds the
 * primary from the palette's `primaryIndex`), then a "Custom" section below
 * with preset swatches + raw hex input. The palette surface is the primary
 * affordance because picking color in isolation from mood produced
 * incoherent brand states in testing.
 */

import { generateColorScale } from "@/lib/core/color";
import type { MoodPreset } from "@/lib/playground/state";
import { PaletteGrid } from "./palette-grid";
import type { ColorPalette } from "@/lib/playground/palettes";

const CUSTOM_PRESETS = [
  "#000000", "#18181b", "#2563eb", "#6366f1", "#7c3aed",
  "#a855f7", "#ec4899", "#ef4444", "#f97316", "#22c55e",
  "#06b6d4", "#0ea5e9", "#c96442", "#3182f6", "#ff385c",
];

export function ColorPicker({
  primary,
  mood,
  onChange,
  onPickPalette,
}: {
  primary: string;
  mood: MoodPreset;
  onChange: (hex: string) => void;
  onPickPalette: (palette: ColorPalette) => void;
}) {
  const scale = generateColorScale(primary);

  return (
    <div className="space-y-4">
      {/* 1. Palette gallery — first-class primary path */}
      <PaletteGrid mood={mood} primary={primary} onPick={onPickPalette} />

      {/* 2. Custom color — secondary path for users who want exact control */}
      <details className="rounded-lg border border-border/40 dark:border-border">
        <summary className="cursor-pointer list-none px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground">
          Custom color
        </summary>
        <div className="space-y-3 border-t border-border/40 px-3 py-3 dark:border-border">
          <div className="flex items-center gap-3">
            <label
              className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg ring-1 ring-border/60"
              style={{ background: primary }}
              aria-label="Open system color picker"
            >
              <input
                type="color"
                value={primary}
                onChange={(e) => onChange(e.target.value)}
                className="h-12 w-12 cursor-pointer opacity-0"
              />
            </label>
            <input
              type="text"
              value={primary}
              onChange={(e) => {
                const v = e.target.value.trim();
                if (/^#[0-9a-fA-F]{6}$/.test(v)) onChange(v.toLowerCase());
              }}
              className="h-10 flex-1 rounded-lg border border-border/60 bg-background px-3 font-mono text-sm dark:border-border"
              placeholder="#000000"
              aria-label="Primary color hex"
            />
          </div>

          <div>
            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Presets
            </div>
            <div className="flex flex-wrap gap-1.5">
              {CUSTOM_PRESETS.map((hex) => (
                <button
                  key={hex}
                  type="button"
                  onClick={() => onChange(hex)}
                  className={`h-6 w-6 rounded-md ring-1 transition-all ${
                    primary.toLowerCase() === hex.toLowerCase()
                      ? "ring-2 ring-primary ring-offset-1"
                      : "ring-border/60 hover:ring-foreground/40"
                  }`}
                  style={{ background: hex }}
                  aria-label={`Preset ${hex}`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Derived scale
            </div>
            <div className="flex h-6 overflow-hidden rounded-md ring-1 ring-border/40">
              {Object.entries(scale).map(([stop, hex]) => (
                <div
                  key={stop}
                  className="flex-1"
                  style={{ background: hex }}
                  title={`${stop} · ${hex}`}
                  aria-label={`Scale ${stop} ${hex}`}
                />
              ))}
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}
