# 1.9.753 checkpoint reliability — findings

## Outcome

The preregistered Codex-native `gpt-5.6-luna` / `high` run passed Reliability@3. All three fixed-order cells finished at 85/85 in one product revision with one successful static closure, one measured browser closure, no recovery, no duplicate verification, proof compliance, and byte-identical candidate promotion.

This is an internal harness-reliability result. It is not evidence that Luna is better than another model, that OmD is better than another skill, or that the full 2.0 release gate is complete.

## What this run proves

- A completed checkpoint keeps its provider-zero pre-edit-plan receipt instead of being incorrectly revalidated against the edited final product.
- An unstarted cell still has its live pre-edit-plan evidence revalidated before provider exposure.
- Three separate one-cell invocations advanced the matrix exactly `0→1→2→3`, with no retries or replacements.
- Both inter-cell pacing intervals satisfied the locked 30–35 second window.
- The exact CSS cascade contract remained closed in all three final artifacts.
- The isolated `omd1753` browser was attached rather than launched by a model.
- Cursor calls were zero. All model execution used Codex-native `gpt-5.6-luna` at `high` effort.

## Measured result

| Cell | Score | Revisions | Proof | Wall time | Tokens |
|---|---:|---:|---|---:|---:|
| Architectural drawing return | 85/85 | 1 | pass | 179,225 ms | 602,971 |
| Ceramic vessel return | 85/85 | 1 | pass | 176,480 ms | 649,940 |
| Glass plate return | 85/85 | 1 | pass | 187,255 ms | 887,568 |
| **Aggregate** | **3/3** | **1 each** | **3/3** | **542,960 ms** | **2,140,479** |

Median wall time was 179,225 ms and median reported tokens were 649,940. Cached input is reported separately in `RESULT.json`; the observed totals are descriptive, not normalized cross-provider costs.

## Continuation evidence

The second invocation preserved checkpoint 1 and waited 30,004.488 ms before ceramic. The third invocation preserved checkpoints 1–2 and waited 30,002.700 ms before glass. A provider-free post-completion invocation then failed closed with `matrix execution state is not resumable: complete`, so the finished denominator cannot be silently replayed.

## Next gate

Freeze this root. The next fresh preregistered suite should reuse the proven checkpoint-continuation and exact-cascade contracts while introducing a comparative denominator. It must not reuse these three exposed tasks for ranking evidence.
