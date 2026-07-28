# Checkpointed matrix controller calibration — 1.9.61 findings

Status: **accepted; fresh one-cell-at-a-time provider matrices unlocked**.

## Outcome

The prepared-matrix controller can now persist an immutable
`max_new_cells` execution contract and stop after a fully run, evaluated, and
exported cell. A continuation verifies the completed prefix, untouched suffix,
execution histories, and pacing evidence before any evaluator preflight,
cooldown, or provider call.

Every invocation owns an atomic root-local lease. An active or stale lease,
completed matrix, stopped matrix, incomplete running state, changed execution
bound, changed source state, dirty suffix, or corrupted retained history fails
closed. The controller does not retry or replace a failed cell.

For the locked 120-second cooldown, bounded execution accepts only
120,000–125,000 ms on both wall and monotonic clocks with at most 5,000 ms of
clock disagreement. Early return, oversleep, clock disagreement, and a
root-local `STOP` sentinel freeze before the next provider.

## Acceptance evidence

- three related controller/runtime suites: 56/56 passed;
- checkpoint-specific provider-neutral suite: 39/39 passed;
- two- and three-cell checkpoint continuations: passed;
- provider, completed-cell evaluator, exporter, artifact, and cooldown
  non-replay assertions: passed;
- lease contention, bound mutation, completed/suffix drift, artifact and
  history corruption, timing violations, cancellation, invalid CLI bounds,
  and legacy behavior fixtures: passed;
- Node syntax, TypeScript lint, CLI build, and diff checks: passed;
- provider generations in this patch: zero.

## Decision boundary

The controller calibration passed. Fresh GLM 5.2 High and Kimi K3 High
matrices may run on independent roots with `--max-new-cells 1`, one live
provider cell at a time.

This patch changes orchestration only. It changes no task, prompt, model,
condition, evaluator, score, timeout, retry, or historical result and creates
no quality, skill-lift, efficiency, ranking, public-model, or frontier claim.
