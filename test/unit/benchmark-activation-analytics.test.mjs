import { describe, expect, it } from "vitest";
import {
  BENCHMARK_EVENT_NAMES,
  BENCHMARK_EXPERIMENT_VERSION,
  BENCHMARK_PRODUCTION_HOST,
  benchmarkActivationFilter,
  benchmarkMeasurementStatus,
} from "../../scripts/analytics/benchmark-activation-contract.mjs";

describe("benchmark activation GA4 contract", () => {
  it("pins event, experiment, production host, and Testing-filter exclusion", () => {
    const expressions = benchmarkActivationFilter().andGroup.expressions;

    expect(expressions).toEqual([
      {
        filter: {
          fieldName: "eventName",
          inListFilter: { values: [...BENCHMARK_EVENT_NAMES] },
        },
      },
      {
        filter: {
          fieldName: "customEvent:experiment_version",
          stringFilter: {
            value: BENCHMARK_EXPERIMENT_VERSION,
            matchType: "EXACT",
          },
        },
      },
      {
        filter: {
          fieldName: "hostName",
          stringFilter: {
            value: BENCHMARK_PRODUCTION_HOST,
            matchType: "EXACT",
          },
        },
      },
      {
        filter: {
          fieldName: "testDataFilterName",
          emptyFilter: {},
        },
      },
    ]);
  });

  it("blocks production decisions until Active internal traffic exclusion is confirmed", () => {
    expect(benchmarkMeasurementStatus("unconfirmed").status).toBe("measurement_blocked");
    expect(benchmarkMeasurementStatus("testing").status).toBe("measurement_blocked");
    expect(benchmarkMeasurementStatus("active")).toEqual({ status: "eligible" });
  });
});
