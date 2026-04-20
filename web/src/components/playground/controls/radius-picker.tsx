"use client";

import { RADIUS_PICKS, type RadiusScale } from "@/lib/playground/state";
import { RADIUS_RULES } from "@/lib/playground/rules/radius";

export function RadiusPicker({
  value,
  onPick,
}: {
  value: RadiusScale;
  onPick: (r: RadiusScale) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {RADIUS_PICKS.map((r) => {
        const active = value === r;
        const rules = RADIUS_RULES[r];
        const cornerPx = rules.control > 16 ? 16 : rules.control;
        return (
          <button
            key={r}
            type="button"
            onClick={() => onPick(r)}
            className={`flex flex-col items-center gap-2 rounded-lg border p-2.5 transition-all ${
              active
                ? "border-primary bg-primary/5"
                : "border-border/50 hover:border-foreground/30 hover:bg-accent/30"
            }`}
            aria-pressed={active}
          >
            {/* Corner sample */}
            <div
              className="h-8 w-12 bg-foreground/80"
              style={{ borderRadius: `${cornerPx}px ${cornerPx}px 0 0` }}
              aria-hidden
            />
            <div className="text-center">
              <div className="text-xs font-semibold capitalize">{r}</div>
              <div className="text-[10px] text-muted-foreground leading-snug">
                {rules.tagline.split("—")[0].trim()}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
