import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/gtag", () => ({ event: vi.fn() }));

import { event } from "@/lib/gtag";
import {
  BENCHMARK_EXPERIMENT_VERSION,
  trackBenchmarkEntry,
  trackBenchmarkHandoff,
  trackBenchmarkHandoffView,
  trackBenchmarkInspect,
  trackBenchmarkView,
} from "./analytics";

const mockedEvent = vi.mocked(event);

beforeEach(() => {
  mockedEvent.mockClear();
});

describe("benchmark activation analytics", () => {
  it("attaches the frozen experiment version to every event", () => {
    trackBenchmarkEntry();
    trackBenchmarkView();
    trackBenchmarkInspect("method");
    trackBenchmarkInspect("effort_claim_policy");
    trackBenchmarkHandoffView();
    trackBenchmarkHandoff("install_copy", "copied");

    expect(mockedEvent.mock.calls).toEqual([
      ["bm_entry", { origin: "home_cli", experiment_version: BENCHMARK_EXPERIMENT_VERSION }],
      ["bm_view", { experiment_version: BENCHMARK_EXPERIMENT_VERSION }],
      ["bm_inspect", { target: "method", experiment_version: BENCHMARK_EXPERIMENT_VERSION }],
      [
        "bm_inspect",
        { target: "effort_claim_policy", experiment_version: BENCHMARK_EXPERIMENT_VERSION },
      ],
      ["bm_handoff_view", { experiment_version: BENCHMARK_EXPERIMENT_VERSION }],
      [
        "bm_handoff",
        {
          destination: "install_copy",
          outcome: "copied",
          experiment_version: BENCHMARK_EXPERIMENT_VERSION,
        },
      ],
    ]);
  });
});
