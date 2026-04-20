"use client";

import {
  PERSONA_POOL,
  PERSONA_MIN,
  PERSONA_MAX,
  type PersonaArchetype,
} from "@/lib/playground/state";
import { PERSONA_COPY } from "@/lib/playground/samples";

export function PersonasPicker({
  value,
  onChange,
}: {
  value: PersonaArchetype[];
  onChange: (next: PersonaArchetype[]) => void;
}) {
  function toggle(p: PersonaArchetype) {
    const has = value.includes(p);
    if (has) {
      onChange(value.filter((x) => x !== p));
    } else if (value.length < PERSONA_MAX) {
      onChange([...value, p]);
    }
  }

  const needMore = value.length < PERSONA_MIN;

  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-2 gap-1.5">
        {PERSONA_POOL.map((p) => {
          const active = value.includes(p);
          const atCap = !active && value.length >= PERSONA_MAX;
          const copy = PERSONA_COPY[p];
          return (
            <button
              key={p}
              type="button"
              onClick={() => toggle(p)}
              disabled={atCap}
              aria-pressed={active}
              title={copy.role}
              className={`group flex flex-col items-center gap-1.5 rounded-lg border p-2.5 text-center transition-all ${
                active
                  ? "border-primary bg-primary/10"
                  : atCap
                    ? "border-border/30 bg-muted/10 cursor-not-allowed opacity-50"
                    : "border-border/50 bg-background/50 hover:border-foreground/30 hover:bg-accent/30"
              }`}
            >
              <span className="text-xl leading-none" aria-hidden>
                {copy.emoji}
              </span>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold leading-tight">
                  {copy.short}
                </div>
                <div className="mt-0.5 text-[9px] uppercase tracking-wider text-muted-foreground truncate">
                  {copy.role.split(" at ")[0].split(",")[0]}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div
        className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-[11px] ${
          needMore
            ? "border-amber-500/30 bg-amber-50 text-amber-900 dark:bg-amber-500/10 dark:text-amber-300"
            : "border-border/40 bg-muted/20 text-muted-foreground"
        }`}
      >
        <span>
          <span className="font-semibold">{value.length}</span> / {PERSONA_MAX} selected
          {needMore && (
            <span> · pick at least {PERSONA_MIN - value.length} more</span>
          )}
        </span>
        <span className="text-[10px]">hover card for role</span>
      </div>
    </div>
  );
}
