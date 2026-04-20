"use client";

import { useState } from "react";
import { MOTION_PICKS, type MotionPreset } from "@/lib/playground/state";
import { MOTION_RULES } from "@/lib/playground/rules/motion";

export function MotionPicker({
  value,
  onPick,
}: {
  value: MotionPreset;
  onPick: (m: MotionPreset) => void;
}) {
  const [previewing, setPreviewing] = useState<MotionPreset | null>(null);

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-1.5">
        {MOTION_PICKS.map((m) => {
          const active = value === m;
          const rules = MOTION_RULES[m];
          return (
            <button
              key={m}
              type="button"
              onClick={() => onPick(m)}
              onMouseEnter={() => setPreviewing(m)}
              onMouseLeave={() => setPreviewing(null)}
              className={`relative flex flex-col items-stretch gap-1.5 rounded-lg border p-2.5 transition-all ${
                active
                  ? "border-primary bg-primary/5"
                  : "border-border/50 hover:border-foreground/30 hover:bg-accent/30"
              }`}
              aria-pressed={active}
            >
              {/* Mini motion sample — a square slides when hovered */}
              <div className="relative h-6 overflow-hidden rounded-md bg-muted/60">
                <div
                  className="absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-sm bg-foreground/70"
                  style={{
                    transform: `translate(${previewing === m ? `calc(100% + 6px)` : "0"}, -50%)`,
                    transition: `transform ${rules.durations.standard}ms ${rules.easings.standard}`,
                  }}
                  aria-hidden
                />
              </div>
              <div>
                <div className="text-xs font-semibold capitalize">{m}</div>
                <div className="text-[10px] text-muted-foreground leading-snug">
                  {rules.durations.standard}ms · {rules.springLicensed ? "spring ✓" : "no spring"}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <p className="text-[10px] text-muted-foreground leading-relaxed">
        {MOTION_RULES[value].rationale}
      </p>
    </div>
  );
}
