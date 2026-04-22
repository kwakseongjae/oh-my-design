"use client";

/**
 * Two-checkbox script filter. Empty array = "no filter" (don't care).
 * Users can freely toggle either or both off — unchecking both just
 * means "give me whatever you think fits". Shared between the hero
 * entry and the Stage 2 refinement bar.
 *
 * Visual affordance: real checkbox icon inside each pill so users
 * parse it as "two toggleable options" rather than two decorative
 * labels. Checked = filled + Check; unchecked = outlined + Square.
 */

import { Check, Square } from "lucide-react";
import type { FontScript } from "@/lib/fonts/types";

const OPTIONS: { value: FontScript; label: string }[] = [
  { value: "hangul", label: "한글" },
  { value: "latin", label: "영문" },
];

export function ScriptToggle({
  value,
  onChange,
  className,
  size = "md",
}: {
  value: FontScript[];
  onChange: (next: FontScript[]) => void;
  className?: string;
  size?: "sm" | "md";
}) {
  function toggle(script: FontScript) {
    const has = value.includes(script);
    onChange(has ? value.filter((s) => s !== script) : [...value, script]);
  }

  const sizing = size === "sm" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs";
  const iconSize = size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";

  return (
    <div
      className={`inline-flex items-center gap-1.5 ${className ?? ""}`}
      role="group"
      aria-label="Script filter"
    >
      {OPTIONS.map((o) => {
        const active = value.includes(o.value);
        return (
          <button
            key={o.value}
            type="button"
            role="checkbox"
            aria-checked={active}
            onClick={() => toggle(o.value)}
            className={
              active
                ? `inline-flex items-center gap-1.5 rounded-full border border-foreground bg-foreground font-semibold text-background transition-colors ${sizing}`
                : `inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground dark:border-border ${sizing}`
            }
          >
            {active ? (
              <Check className={`${iconSize} shrink-0`} aria-hidden />
            ) : (
              <Square className={`${iconSize} shrink-0 opacity-40`} aria-hidden />
            )}
            <span>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
