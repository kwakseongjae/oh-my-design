"use client";

import type { OverrideFlags } from "@/lib/playground/state";

/**
 * Inline badge that surfaces whenever the user has diverged from the Mood
 * preset on any primitive. Shows which primitives are overridden and a
 * single-click "Revert to mood defaults" action.
 */
export function MoodOverrideBadge({
  mood,
  overrides,
  onRevert,
}: {
  mood: string;
  overrides: OverrideFlags;
  onRevert: () => void;
}) {
  const diverged = Object.entries(overrides)
    .filter(([, v]) => v)
    .map(([k]) => k);

  if (diverged.length === 0) return null;

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-medium text-amber-900 dark:bg-amber-500/15 dark:text-amber-300">
      <span>
        Overrides <span className="font-mono lowercase">{mood}</span>:{" "}
        <span className="font-mono">{diverged.join(", ")}</span>
      </span>
      <button
        type="button"
        onClick={onRevert}
        className="rounded-full border border-amber-900/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] transition-colors hover:border-amber-900/40 dark:border-amber-300/30"
      >
        Revert
      </button>
    </div>
  );
}
