"use client";

import { useRef, type MouseEvent } from "react";
import { trackBenchmarkInspect } from "@/lib/benchmarks/analytics";

export function BenchmarkMethodLink() {
  const tracked = useRef(false);

  function navigateToMethod(event: MouseEvent<HTMLAnchorElement>) {
    if (!tracked.current) {
      tracked.current = true;
      trackBenchmarkInspect("method");
    }

    const target = document.getElementById("method");

    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", "#method");

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    target.scrollIntoView({ block: "start" });
    root.style.scrollBehavior = previousScrollBehavior;
  }

  return (
    <a
      href="#method"
      onClick={navigateToMethod}
      className="inline-flex min-h-11 items-center rounded-lg px-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:bg-secondary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      Method
    </a>
  );
}
