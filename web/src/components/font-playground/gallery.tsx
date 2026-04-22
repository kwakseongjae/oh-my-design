"use client";

/**
 * Gallery — responsive grid of font tiles driven by filter state.
 */

import type { FontEntry } from "@/lib/fonts/types";
import { FontTile } from "./font-tile";

export function Gallery({
  fonts,
  sampleText,
  activeScript,
  onSelect,
}: {
  fonts: FontEntry[];
  sampleText: string;
  activeScript: "hangul" | "latin" | "auto";
  onSelect: (id: string) => void;
}) {
  if (fonts.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border/50 py-16 text-center text-sm text-muted-foreground">
        No fonts match the current filters. Clear a filter or widen the script.
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {fonts.map((f) => (
        <FontTile
          key={f.id}
          font={f}
          sampleText={sampleText}
          activeScript={activeScript}
          onSelect={() => onSelect(f.id)}
        />
      ))}
    </div>
  );
}
