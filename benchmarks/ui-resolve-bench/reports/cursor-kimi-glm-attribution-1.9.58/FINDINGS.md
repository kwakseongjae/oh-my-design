# Cursor Kimi K3 / GLM 5.2 attribution canary — 1.9.58 findings

Status: **accepted for Internal controller adaptation**.

## Results

| Selector | Reported display name | Exit | Exact final | Usage | Tool/write |
|---|---|---:|---:|---:|---:|
| `kimi-k3-high` | `Kimi K3 High` | 0 | pass | 22,211 input / 74 output | 0 / 0 |
| `glm-5.2-high` | `GLM 5.2 High` | 0 | pass | 11,834 input / 10,976 cached / 7 output | 0 / 0 |

Both final responses were exactly `OMD_ATTRIBUTION_OK`. The streams contained
no tool events, and both fresh `/tmp` directories remained empty.

Cursor's init event reported the account home as `cwd` despite the process
being launched from the empty directories. Because no tool or write occurred,
this does not invalidate the no-write canary, but controller provenance must
continue to distinguish the requested workspace from runtime-reported cwd.

## Decision boundary

Both selectors may enter a provider-free controller allowlist adaptation with
exact display-name fixtures. Passing does not yet authorize a scored benchmark
matrix; the adapter tests must pass first.

Attribution remains runtime-reported display-name only and therefore Internal.
The canary creates no quality, speed, token-efficiency, cost, ranking, or
frontier claim. Execution priority is Kimi K3 first, then GLM 5.2.
