"use client";

import { Lightbulb } from "lucide-react";
import {
  VOICE_POOL,
  VOICE_MAX,
  type VoiceAdjective,
} from "@/lib/playground/state";
import { MOOD_VOICE_DEFAULTS } from "@/lib/playground/samples";
import type { MoodPreset } from "@/lib/playground/state";

export function VoicePicker({
  value,
  mood,
  onChange,
}: {
  value: VoiceAdjective[];
  mood: MoodPreset;
  onChange: (next: VoiceAdjective[]) => void;
}) {
  const suggestions = MOOD_VOICE_DEFAULTS[mood];

  function toggle(adj: VoiceAdjective) {
    const has = value.includes(adj);
    if (has) {
      onChange(value.filter((v) => v !== adj));
    } else if (value.length < VOICE_MAX) {
      onChange([...value, adj]);
    }
  }

  function useSuggestions() {
    onChange([...suggestions]);
  }

  function clear() {
    onChange([]);
  }

  const activeMatchesSuggestions =
    value.length === suggestions.length &&
    value.every((v) => suggestions.includes(v));

  return (
    <div className="space-y-2.5">
      {/* Mood suggestion banner — makes the auto-pop behavior transparent */}
      <div className="flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-[11px] leading-snug">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
        <div className="flex-1 min-w-0">
          <span className="font-semibold">
            Suggested for <span className="capitalize">{mood}</span>:
          </span>{" "}
          <span className="text-muted-foreground">{suggestions.join(", ")}.</span>{" "}
          {activeMatchesSuggestions ? (
            <button
              type="button"
              onClick={clear}
              className="underline underline-offset-2 hover:text-foreground"
            >
              clear and pick your own
            </button>
          ) : (
            <button
              type="button"
              onClick={useSuggestions}
              className="underline underline-offset-2 hover:text-foreground"
            >
              use these
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {VOICE_POOL.map((adj) => {
          const active = value.includes(adj);
          const suggested = suggestions.includes(adj);
          const atCap = !active && value.length >= VOICE_MAX;
          const base = "relative rounded-full border px-2.5 py-1 text-xs font-medium transition-all";
          let variant: string;
          if (active) {
            variant =
              "border-primary bg-primary/10 text-primary";
          } else if (atCap) {
            variant =
              "border-border/30 bg-muted/20 text-muted-foreground/50 cursor-not-allowed";
          } else if (suggested) {
            variant =
              "border-primary/30 bg-primary/5 text-foreground hover:bg-primary/10 hover:border-primary/40";
          } else {
            variant =
              "border-border/50 bg-background/50 text-foreground hover:border-foreground/40 hover:bg-accent/30";
          }
          return (
            <button
              key={adj}
              type="button"
              disabled={atCap}
              onClick={() => toggle(adj)}
              className={`${base} ${variant}`}
              aria-pressed={active}
              title={suggested ? `Suggested for ${mood}` : undefined}
            >
              {suggested && (
                <span
                  className="absolute right-1 top-0.5 h-1 w-1 rounded-full bg-primary"
                  aria-hidden
                />
              )}
              {adj}
            </button>
          );
        })}
      </div>
      <p className="text-[10px] text-muted-foreground leading-relaxed">
        {value.length} / {VOICE_MAX} selected · dot = suggested for this mood
      </p>
    </div>
  );
}
