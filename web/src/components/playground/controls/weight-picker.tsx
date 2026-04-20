"use client";

import { WEIGHT_PICKS, type WeightScale } from "@/lib/playground/state";
import { WEIGHT_RULES } from "@/lib/playground/rules/weight";

export function WeightPicker({
  value,
  onPick,
}: {
  value: WeightScale;
  onPick: (w: WeightScale) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {WEIGHT_PICKS.map((w) => {
        const active = value === w;
        const rules = WEIGHT_RULES[w];
        return (
          <button
            key={w}
            type="button"
            onClick={() => onPick(w)}
            className={`flex flex-col items-stretch gap-1 rounded-lg border p-2.5 text-left transition-all ${
              active
                ? "border-primary bg-primary/5"
                : "border-border/50 hover:border-foreground/30 hover:bg-accent/30"
            }`}
            aria-pressed={active}
          >
            <div
              className="text-xl leading-none"
              style={{ fontWeight: rules.heading }}
              aria-hidden
            >
              Aa
            </div>
            <div className="mt-1">
              <div className="text-xs font-semibold capitalize">{w}</div>
              <div className="text-[10px] text-muted-foreground leading-snug">
                {rules.heading}/{rules.body}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
