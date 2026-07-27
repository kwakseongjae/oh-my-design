# Benchmark activation analytics — 1.9.38

This document implements the frozen contract in
`benchmarks/ui-resolve-bench/reports/benchmark-activation-1.9.38/PREREGISTRATION.md`.
It measures a bounded web handoff from internal benchmark evidence. It does not
measure CLI installation, resolved UI, causal lift, or reuse.

## Journey and events

| Step | Event | Bounded parameters |
|---|---|---|
| Home CLI evidence link | `bm_entry` | `origin=home_cli`, `experiment_version=1.9.38` |
| Benchmark mount | `bm_view` | `experiment_version` |
| Method/source inspection | `bm_inspect` | `target`, `experiment_version` |
| End module ≥50% visible | `bm_handoff_view` | `experiment_version` |
| End-module action | `bm_handoff` | `destination`, `outcome`, `experiment_version` |

`destination` is `install_copy`, `docs_demo`, or `builder`. `outcome` is
`copied`, `failed`, or `navigate`. Only
`bm_handoff(destination=install_copy,outcome=copied)` enters the qualified
activation numerator.

A successful installer copy also emits the canonical `act_install_copy` and
`act_handoff(kind=install_copy,surface=benchmark)` events with
`experiment_version=1.9.38`. These mirrored events check taxonomy integrity;
they are not an additional numerator. Docs and Builder navigation are
exploratory continuation proxies.

## GA4 setup

Run the idempotent Admin API setup after deploy:

```bash
node scripts/analytics/setup-ga4.mjs --apply
```

The setup registers `experiment_version`, `target`, `destination`, and
`outcome` as event-scoped custom dimensions. Existing `origin`, `surface`, and
`kind` dimensions are reused.

## Deterministic production report

Confirm the GA4 property has an **Active** internal-traffic exclusion based on
`traffic_type=internal`, then record that deployment prerequisite:

```bash
GA4_INTERNAL_TRAFFIC_FILTER_STATUS=active \
node scripts/analytics/pull-ga4.mjs --days 28
```

The `benchmark_activation` report uses complete days and applies all of these
filters:

1. the bounded `bm_*`, `act_install_copy`, and `act_handoff` event names;
2. `customEvent:experiment_version` exactly `1.9.38`;
3. `hostName` exactly `oh-my-design.kr`;
4. an empty `testDataFilterName`, excluding traffic matched by a Testing-state
   data filter.

If `GA4_INTERNAL_TRAFFIC_FILTER_STATUS` is not `active`, the report remains
available for diagnosis but is marked `measurement_blocked`. It cannot support
a production promotion or rollback decision.

Official GA behavior:

- [Data API dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema)
- [Data API filter expressions](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/FilterExpression)
- [Internal traffic and data filters](https://support.google.com/analytics/answer/10104470)

## Frozen decision

Evaluate 14 complete days after at least 200 unique `bm_handoff_view` users.
The hard stop is 28 complete days.

```text
qualified activation rate
= unique bm_handoff users where destination=install_copy and outcome=copied
÷ unique bm_handoff_view users
```

Promotion requires at least 10 qualified activations, rate ≥5%, Wilson 95%
lower bound ≥2.5%, copy failure ≤2%, and no duplicate, false-success,
accessibility, evidence-boundary, or Builder-ownership regression.
