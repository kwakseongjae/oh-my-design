"use client";

import { useRef, type ReactNode } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import {
  trackBenchmarkInspect,
  type BenchmarkInspectionTarget,
} from "@/lib/benchmarks/analytics";

export function BenchmarkSourceLink({
  href,
  target,
  protocol = false,
  children,
}: {
  href: string;
  target: BenchmarkInspectionTarget;
  protocol?: boolean;
  children: ReactNode;
}) {
  const tracked = useRef(false);

  function trackOnce() {
    if (tracked.current) return;
    tracked.current = true;
    trackBenchmarkInspect(target);
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackOnce}
      className={
        protocol
          ? "inline-flex min-h-11 items-center justify-between gap-3 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 active:translate-y-px active:opacity-80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          : "inline-flex min-h-11 items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-foreground/25 hover:bg-secondary active:translate-y-px focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      }
    >
      <span className={protocol ? "inline-flex items-center gap-2" : undefined}>
        {protocol ? <Code2 className="h-4 w-4" aria-hidden="true" /> : null}
        {children}
      </span>
      <ArrowUpRight
        className={protocol ? "h-4 w-4" : "h-4 w-4 shrink-0 text-muted-foreground"}
        aria-hidden="true"
      />
    </a>
  );
}
