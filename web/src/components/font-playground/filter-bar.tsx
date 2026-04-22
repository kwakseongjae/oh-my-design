"use client";

/**
 * Filter bar — two-row controls for narrowing the catalog.
 *   Row 1: script tabs (All · Korean · Latin · Mono)
 *   Row 2: mood chips — top picks inline, "More moods" unfolds the full
 *          taxonomy grouped by Feel / Form / Purpose.
 *
 * The mood taxonomy has ~40 tags. Showing them all flat overwhelms — so
 * we put the most-representative moods (by catalog frequency) up front,
 * and hide the long tail behind a single toggle that reveals bucketed
 * chips. No tag is removed — just deferred.
 */

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FontScript } from "@/lib/fonts/types";
import { MOOD_BUCKETS, moodFrequency } from "@/lib/fonts/catalog";

export type ScriptFilter = "all" | FontScript | "mono";

const POPULAR_COUNT = 8;

export function FilterBar({
  script,
  mood,
  moods,
  onScriptChange,
  onMoodChange,
}: {
  script: ScriptFilter;
  mood: string | null;
  moods: string[];
  onScriptChange: (s: ScriptFilter) => void;
  onMoodChange: (m: string | null) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const scripts: { id: ScriptFilter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "hangul", label: "Korean" },
    { id: "latin", label: "Latin" },
    { id: "mono", label: "Mono" },
  ];

  /** Top moods by frequency, stable-sorted alphabetically within ties so
   *  the surfaced shortlist looks deliberate rather than randomly ordered. */
  const popular = useMemo(() => {
    const freq = moodFrequency();
    const scored = moods
      .map((m) => ({ m, n: freq.get(m) ?? 0 }))
      .sort((a, b) => b.n - a.n || a.m.localeCompare(b.m));
    return scored.slice(0, POPULAR_COUNT).map((s) => s.m);
  }, [moods]);

  /** Anything in the taxonomy but not surfaced inline gets deferred to
   *  the expandable panel — bucketed by semantic group. */
  const bucketed = useMemo(() => {
    const leftover = new Set(moods.filter((m) => !popular.includes(m)));
    const known = new Set(MOOD_BUCKETS.flatMap((b) => b.moods));
    const buckets = MOOD_BUCKETS.map((b) => ({
      id: b.id,
      label: b.label,
      moods: b.moods.filter((m) => leftover.has(m)),
    }));
    const other = [...leftover].filter((m) => !known.has(m)).sort();
    if (other.length > 0) {
      buckets.push({ id: "other", label: "Other", moods: other });
    }
    return buckets.filter((b) => b.moods.length > 0);
  }, [moods, popular]);

  const hiddenCount = Math.max(0, moods.length - popular.length);
  const moodSelectedButHidden =
    mood != null && !popular.includes(mood);

  return (
    <div className="space-y-3">
      {/* Script tabs */}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Script
        </span>
        {scripts.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onScriptChange(s.id)}
            className={
              script === s.id
                ? "rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
                : "rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent/30"
            }
            aria-pressed={script === s.id}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Mood — popular row */}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Mood
        </span>
        <MoodChip label="Any" active={mood == null} onClick={() => onMoodChange(null)} />
        {popular.map((m) => (
          <MoodChip
            key={m}
            label={m}
            active={mood === m}
            onClick={() => onMoodChange(mood === m ? null : m)}
          />
        ))}
        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className={
              expanded || moodSelectedButHidden
                ? "inline-flex items-center gap-1 rounded-full border border-primary/50 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary transition-colors"
                : "inline-flex items-center gap-1 rounded-full border border-dashed border-border/70 bg-background/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground dark:border-border"
            }
          >
            {expanded ? "Hide" : `More moods · ${hiddenCount}`}
            <ChevronDown
              className={
                expanded
                  ? "h-3 w-3 rotate-180 transition-transform"
                  : "h-3 w-3 transition-transform"
              }
            />
          </button>
        )}
      </div>

      {/* Mood — bucketed panel */}
      {(expanded || moodSelectedButHidden) && bucketed.length > 0 && (
        <div className="space-y-2 rounded-xl border border-border/50 bg-muted/20 p-3 dark:border-border dark:bg-muted/10">
          {bucketed.map((bucket) => (
            <div
              key={bucket.id}
              className="flex flex-wrap items-center gap-1.5"
            >
              <span className="mr-1 w-14 shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {bucket.label}
              </span>
              {bucket.moods.map((m) => (
                <MoodChip
                  key={m}
                  label={m}
                  active={mood === m}
                  onClick={() => onMoodChange(mood === m ? null : m)}
                  small
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MoodChip({
  label,
  active,
  onClick,
  small,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  small?: boolean;
}) {
  const sizing = small ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]";
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? `rounded-full bg-primary font-semibold capitalize text-primary-foreground ${sizing}`
          : `rounded-full border border-border/50 bg-background/50 font-medium capitalize text-foreground transition-colors hover:border-primary/40 hover:bg-accent/30 ${sizing}`
      }
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
