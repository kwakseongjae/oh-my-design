# Checkpointed matrix controller calibration — 1.9.61

Status: **LOCKED with pre-implementation pacing amendment; provider-free implementation pending**.

## Frontier gate and bounded hypothesis

The 24-task × 10-run frontier gate requires long matrices to survive ordinary
host turn boundaries without replaying a completed provider cell. Kimi 1.9.60
showed that a six-cell controller process can lose its live session between
cells; the frozen matrix then reached a fourth cell before the pause was
observable and stopped on a DNS failure.

A bounded, durable cell checkpoint should let the controller execute at most a
declared number of new cells per invocation, stop only after a fully evaluated
and exported cell, and continue the same locked matrix without repeating a
provider call, evaluator, exporter, or inter-cell cooldown.

## Frozen source scope

- add an optional controller-only `max_new_cells` execution bound;
- default to the existing unbounded behavior when the bound is absent;
- persist `checkpointed` only after a cell has a valid run, score, and exported
  record;
- on the next invocation, skip every completed cell and resume at the first
  untouched cell;
- execute each required adjacent-cell cooldown exactly once;
- retain invocation/checkpoint history and completed-cell provenance;
- freeze the pacing acceptance window at 120,000–125,000 ms, record monotonic
  and wall elapsed time, and fail before the next provider when either clock is
  outside that window or the clocks disagree by more than 5,000 ms;
- check a root-local cancellation sentinel after pacing and immediately before
  provider invocation;
- reject resume from `stopped-preregistered`, incomplete running cells, drifted
  workspaces, or completed matrices;
- expose the bound through `--max-new-cells <positive integer>`;
- add provider-free fake-runtime fixtures and update compute-control language.

No provider generation, task/prompt/model/condition/evaluator/score change,
historical result rewrite, retry, failed-cell replacement, fallback, or
Auto/Router use is allowed.

## Acceptance and rollback

Pass only when:

1. a fresh two-cell fake matrix with `max_new_cells=1` invokes exactly one
   provider and ends `checkpointed`;
2. its second invocation runs the one retained cooldown and second provider
   exactly once, then ends `complete`;
3. the first cell's run, score, record, hashes, and invocation count are
   unchanged after continuation;
4. a third invocation cannot replay a complete matrix;
5. stopped, dirty, invalid-bound, short/overshot/disagreeing wait,
   cancellation, and incomplete-running fixtures fail closed before another
   provider call;
6. legacy unbounded and no-pacing paths remain unchanged;
7. focused tests, Node syntax, TypeScript, build, and diff checks pass.

Failure reverts the controller delta and leaves Kimi 1.9.60 frozen. Passing
unlocks fresh GLM and Kimi matrices executed one durable cell per invocation.
It creates no quality, model, skill, efficiency, or frontier claim.
