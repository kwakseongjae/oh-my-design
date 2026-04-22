"use client";

/**
 * Color swatches for the preview. Lets users see their chosen font
 * rendered in a brand-plausible color, not just flat foreground. Picks
 * apply to text only — background stays page-neutral so we don't have
 * to worry about contrast pairs for 56 combinations.
 *
 * Curated small palette — warm/cool/neutral anchors — beats a freeform
 * picker here: users want "how would this look in a real brand color",
 * not "exact hex input".
 */

import { Check } from "lucide-react";

export interface Swatch {
  id: string;
  label: string;
  /** CSS color value applied to text in the preview. */
  value: string;
}

export const PREVIEW_SWATCHES: Swatch[] = [
  { id: "ink", label: "Ink", value: "currentColor" },
  { id: "charcoal", label: "Charcoal", value: "#1f2937" },
  { id: "navy", label: "Navy", value: "#1e3a8a" },
  { id: "electric", label: "Electric", value: "#2563eb" },
  { id: "forest", label: "Forest", value: "#166534" },
  { id: "terracotta", label: "Terracotta", value: "#c2410c" },
  { id: "wine", label: "Wine", value: "#831843" },
  { id: "plum", label: "Plum", value: "#6b21a8" },
  { id: "coral", label: "Coral", value: "#e11d48" },
];

export function ColorPalette({
  activeId,
  onChange,
}: {
  activeId: string;
  onChange: (swatch: Swatch) => void;
}) {
  return (
    <div
      className="flex flex-wrap items-center gap-1.5"
      role="radiogroup"
      aria-label="Preview color"
    >
      {PREVIEW_SWATCHES.map((s) => {
        const active = s.id === activeId;
        const isInk = s.id === "ink";
        return (
          <button
            key={s.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(s)}
            title={s.label}
            className={
              active
                ? "relative flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-foreground ring-offset-2 ring-offset-background transition-transform"
                : "relative flex h-6 w-6 items-center justify-center rounded-full border border-border/40 transition-transform hover:scale-110 dark:border-border"
            }
            style={{
              background: isInk
                ? "conic-gradient(from 0deg, #0f172a, #374151, #0f172a)"
                : s.value,
            }}
          >
            {active && (
              <Check
                className="h-3 w-3"
                style={{
                  color:
                    isInk || s.value === "#1f2937" ? "#fff" : "#fff",
                  mixBlendMode: "difference",
                }}
                aria-hidden
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
