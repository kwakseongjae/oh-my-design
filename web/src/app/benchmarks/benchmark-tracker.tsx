"use client";

import { useEffect, useRef } from "react";
import { trackBenchmarkView } from "@/lib/benchmarks/analytics";

export function BenchmarkTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    trackBenchmarkView();
  }, []);

  return null;
}
