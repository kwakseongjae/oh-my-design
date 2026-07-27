export const BENCHMARK_EXPERIMENT_VERSION = "1.9.38";
export const BENCHMARK_PRODUCTION_HOST = "oh-my-design.kr";
export const BENCHMARK_EVENT_NAMES = Object.freeze([
  "bm_entry",
  "bm_view",
  "bm_inspect",
  "bm_handoff_view",
  "bm_handoff",
  "act_install_copy",
  "act_handoff",
]);

export function benchmarkActivationFilter() {
  return {
    andGroup: {
      expressions: [
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
      ],
    },
  };
}

export function benchmarkMeasurementStatus(internalTrafficFilterStatus) {
  return internalTrafficFilterStatus === "active"
    ? { status: "eligible" }
    : {
        status: "measurement_blocked",
        reason:
          "GA4_INTERNAL_TRAFFIC_FILTER_STATUS must confirm the property Active internal-traffic exclusion",
      };
}
