"use client";

import { DENSITY_PICKS, type Density } from "@/lib/playground/state";
import { DENSITY_RULES } from "@/lib/playground/rules/density";

export function DensityPicker({
  value,
  onPick,
}: {
  value: Density;
  onPick: (d: Density) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {DENSITY_PICKS.map((d) => {
        const active = value === d;
        const rules = DENSITY_RULES[d];
        return (
          <button
            key={d}
            type="button"
            onClick={() => onPick(d)}
            className={`flex flex-col items-stretch gap-1 rounded-lg border p-2.5 text-left transition-all ${
              active
                ? "border-primary bg-primary/5"
                : "border-border/50 hover:border-foreground/30 hover:bg-accent/30"
            }`}
            aria-pressed={active}
          >
            <div className="space-y-0.5">
              {/* Miniature bars visualize spacing */}
              <div
                className="h-0.5 rounded-sm bg-foreground/60"
                style={{ marginTop: `${rules.scale[1]}px` }}
              />
              <div
                className="h-0.5 rounded-sm bg-foreground/40"
                style={{ marginTop: `${rules.scale[2]}px` }}
              />
              <div
                className="h-0.5 rounded-sm bg-foreground/20"
                style={{ marginTop: `${rules.scale[3]}px` }}
              />
            </div>
            <div className="mt-1.5">
              <div className="text-xs font-semibold capitalize">{d}</div>
              <div className="text-[10px] text-muted-foreground leading-snug">
                {rules.unit}px unit
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
