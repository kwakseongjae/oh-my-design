"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Collapsible category wrapper used throughout the Playground left panel.
 * Each primitive (Mood / Color / Tokens / Motion / Philosophy) lives inside
 * one of these sections so the whole panel can breathe at initial load
 * (Mood + Color expanded, rest collapsed) and users progressively disclose.
 */
export function CategorySection({
  title,
  subtitle,
  defaultOpen = false,
  action,
  children,
}: {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  action?: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="rounded-xl border border-border/50 bg-card/30 dark:border-border dark:bg-card/50">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-foreground">{title}</div>
          {subtitle && (
            <div className="mt-0.5 text-xs text-muted-foreground leading-snug">{subtitle}</div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {action}
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {open && <div className="border-t border-border/40 px-4 py-4 dark:border-border">{children}</div>}
    </section>
  );
}
