import { event } from "@/lib/gtag";

export const BENCHMARK_EXPERIMENT_VERSION = "1.9.38" as const;

export type BenchmarkInspectionTarget =
  | "method"
  | "harness_summary"
  | "aggregate_statistics"
  | "failed_run"
  | "focus_calibration"
  | "fresh_recovery"
  | "protocol";

export type BenchmarkHandoffDestination = "install_copy" | "docs_demo" | "builder";
export type BenchmarkHandoffOutcome = "navigate" | "copied" | "failed";

const version = { experiment_version: BENCHMARK_EXPERIMENT_VERSION };

export function trackBenchmarkEntry() {
  event("bm_entry", { origin: "home_cli", ...version });
}

export function trackBenchmarkView() {
  event("bm_view", version);
}

export function trackBenchmarkInspect(target: BenchmarkInspectionTarget) {
  event("bm_inspect", { target, ...version });
}

export function trackBenchmarkHandoffView() {
  event("bm_handoff_view", version);
}

export function trackBenchmarkHandoff(
  destination: BenchmarkHandoffDestination,
  outcome: BenchmarkHandoffOutcome,
) {
  event("bm_handoff", { destination, outcome, ...version });
}
