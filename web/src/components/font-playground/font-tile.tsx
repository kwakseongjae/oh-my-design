"use client";

/**
 * FontTile — one card in the gallery. Renders the user's sample text in
 * the font's default weight, with the font name and key tags underneath.
 *
 * The whole tile is clickable; parent opens the detail overlay.
 */

import type { FontEntry, FontScript } from "@/lib/fonts/types";
import { scriptLabels } from "./labels";

export function FontTile({
  font,
  sampleText,
  activeScript,
  onSelect,
}: {
  font: FontEntry;
  sampleText: string;
  /** When the gallery has a script filter active, show the matching-script
   *  sample; when 'all', prefer hangul if available, else latin. */
  activeScript: "hangul" | "latin" | "auto";
  onSelect: () => void;
}) {
  const scriptForSample: FontScript =
    activeScript === "hangul" && font.scripts.includes("hangul")
      ? "hangul"
      : activeScript === "latin" && font.scripts.includes("latin")
        ? "latin"
        : font.scripts.includes("hangul")
          ? "hangul"
          : "latin";

  const display =
    sampleText.trim() !== ""
      ? sampleText
      : (font.sampleText[scriptForSample] ?? font.sampleText.latin ?? font.name);

  const displayWeight = font.variable
    ? (font.axes.find((a) => a.tag === "wght")?.default ?? 500)
    : (font.weights?.[Math.floor(font.weights.length / 2)] ?? 400);

  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex flex-col gap-3 rounded-xl border border-border/50 bg-card/40 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card dark:border-border dark:bg-card/60 dark:hover:bg-card"
    >
      {/* Sample text in the font itself */}
      <div
        className="flex min-h-[6rem] items-center break-words text-[28px] leading-tight text-foreground"
        style={{
          fontFamily: font.cssFamily,
          fontWeight: displayWeight,
        }}
      >
        {display}
      </div>

      {/* Meta */}
      <div className="flex items-end justify-between gap-3 border-t border-border/30 pt-3">
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-foreground">{font.name}</div>
          <div className="mt-0.5 flex flex-wrap items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
            <span>{font.family}</span>
            <span aria-hidden>·</span>
            <span>{scriptLabels(font.scripts)}</span>
            {font.variable && (
              <>
                <span aria-hidden>·</span>
                <span className="rounded bg-primary/10 px-1 py-0.5 text-[9px] font-semibold text-primary">
                  VARIABLE
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap justify-end gap-1">
          {font.tags.mood.slice(0, 2).map((m) => (
            <span
              key={m}
              className="rounded-full bg-muted/50 px-2 py-0.5 text-[9px] font-medium capitalize text-muted-foreground dark:bg-muted/30"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
