"use client";

/**
 * Right-column shell for the Playground.
 *
 * Layout (top → bottom):
 *   1. PrimitivesStrip — always visible, 6 pills with miniature visuals
 *   2. View toggle [Preview | DESIGN.md]
 *   3. Content area — either <ReferencePreview> or <ExportBox>
 *
 * Moving the DESIGN.md export out of the left controls column fixes the
 * previous issue where it lived in the bottom-left gutter (low visibility).
 */

import { useState } from "react";
import { Eye, FileText } from "lucide-react";
import { ReferencePreview } from "@/components/reference-preview";
import { ExportBox } from "./export-box";
import { PrimitivesStrip } from "./primitives-strip";
import type { PlaygroundState } from "@/lib/playground/state";
import type { ParsedTokens } from "@/lib/extract-tokens";
import { event } from "@/lib/gtag";

type ViewMode = "preview" | "markdown";

export function PreviewPane({
  state,
  tokens,
}: {
  state: PlaygroundState;
  tokens: ParsedTokens;
}) {
  const [view, setView] = useState<ViewMode>("preview");

  function pick(next: ViewMode) {
    setView(next);
    event("playground_preview_toggle", { view: next });
  }

  return (
    <div className="space-y-3">
      <PrimitivesStrip state={state} />

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-0.5 rounded-lg border border-border/40 bg-card/40 p-0.5 dark:border-border dark:bg-card/60">
          <button
            type="button"
            onClick={() => pick("preview")}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              view === "preview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-pressed={view === "preview"}
          >
            <Eye className="h-3.5 w-3.5" /> Preview
          </button>
          <button
            type="button"
            onClick={() => pick("markdown")}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              view === "markdown"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-pressed={view === "markdown"}
          >
            <FileText className="h-3.5 w-3.5" /> DESIGN.md
          </button>
        </div>
      </div>

      {view === "preview" ? (
        <div className="rounded-2xl border border-border/40 bg-background dark:border-border">
          <ReferencePreview tokens={tokens} embedded />
        </div>
      ) : (
        <ExportBox state={state} />
      )}
    </div>
  );
}
