"use client";

import { RotateCcw } from "lucide-react";
import { ShareButton } from "./share-button";
import type { PlaygroundState } from "@/lib/playground/state";

export function ActionsHeader({
  state,
  onReset,
}: {
  state: PlaygroundState;
  onReset: () => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
        aria-label="Reset to defaults"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Reset</span>
      </button>
      <ShareButton state={state} />
    </div>
  );
}
