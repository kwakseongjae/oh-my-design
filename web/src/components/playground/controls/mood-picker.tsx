"use client";

import { MOOD_PRESETS, type MoodPreset } from "@/lib/playground/state";
import { MOOD_DEFAULTS } from "@/lib/playground/rules/mood";

/**
 * Mood picker — 5 cards, each showing a glyph, name, tagline, and the
 * primary-color chip. Clicking a card commits mood + seeds defaults for the
 * other primitives (handled by the parent via `onPick`).
 */
export function MoodPicker({
  value,
  onPick,
}: {
  value: MoodPreset;
  onPick: (m: MoodPreset) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {MOOD_PRESETS.map((m) => {
        const d = MOOD_DEFAULTS[m];
        const active = value === m;
        return (
          <button
            key={m}
            type="button"
            onClick={() => onPick(m)}
            className={`group flex items-center gap-3 rounded-lg border p-3 text-left transition-all ${
              active
                ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                : "border-border/50 bg-background/50 hover:border-foreground/30 hover:bg-accent/30"
            }`}
            aria-pressed={active}
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-lg"
              style={{ background: d.primary, color: "#ffffff" }}
              aria-hidden
            >
              {d.glyph}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold capitalize">{m}</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground leading-snug truncate">
                {d.tagline}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
