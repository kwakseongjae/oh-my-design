# 1.9.19 interruption record

Recorded on 2026-07-23 after generation was stopped at the user's request.

## Immutable outcome

- Output root: `/tmp/u1919`
- Scheduled: 18
- Valid complete: 7
- Interrupted while running: 1 (`pricing-t2-portable`)
- Not started: 10
- Process exit: 130 (`SIGINT` requested by the operator)
- Retry or resume of this root: forbidden
- Promotion, reliability, Pareto, or superiority decision: unavailable

The interrupted cell has no completed `run-result.json` and must not be scored,
normalized as a completed run, or paired with `pricing-t2-harness`. The seven
completed cells remain forensic process evidence only; the matrix is incomplete
and cannot enter a full repeated comparison denominator.

## Completed evidence before interruption

All seven completed cells were valid, UI-Resolved, Evidence & Unknown passing,
and scored 85/85. The four completed candidate cells called both required Opus
specialists, authored no replacement verifier, began with a targeted non-no-op
`Edit`, and passed both delivery gates:

| Cell | Wall ms | Tokens | First product write ms | Last advisory to edit ms |
|---|---:|---:|---:|---:|
| `pricing-t1-harness` | 468,941 | 139,367 | 221,431 | 14,558 |
| `onboarding-t1-harness` | 523,451 | 154,120 | 309,155 | 14,538 |
| `operations-t1-harness` | 538,567 | 153,158 | 268,444 | 13,048 |
| `pricing-t2-harness` | 528,959 | 167,274 | 228,565 | 7,541 |

The three complete trial-1 pairs were quality ties. These partial observations
do not satisfy the preregistered requirement for nine valid candidate cells,
three trials per task, Reliability@3, or a paired promotion decision.

## Resume protocol

Do not invoke the matrix executor against `/tmp/u1919` again. Preserve the root
and this report. Resume work by preregistering a new 1.9.20 full replacement,
preparing a new `/tmp/u1920` root from the start, rerunning the exact auth/model
preflight, and executing all 18 cells without importing any 1.9.19 result into
the new denominator. No source change is required solely because the operator
paused the run.
