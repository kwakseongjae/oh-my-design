# 1.9.573 — Subsea runner self-dispatch replacement preregistration

The replacement experiment uses the model-unseen subsea task and repeats the balanced Luna/high 2×3 contract: 900-second cells, 120-second inter-cell pacing, concurrency one, runtime-default temperature, and no retry.

The exact control remains `6142925c…` without runner self-dispatch. The candidate is exact pinned source `a6ebdc8a…`, combining the self-dispatch runner with snapshot-time carrier anchor rejection. The task already exposes `[data-bench-decision-carrier='target']`, so the anchor gate is preregistered as inert for valid input. A causal self-dispatch claim still requires the safety path to be observed; merely scoring faster does not qualify.

Promotion remains strict 3/3 for UI, proof, shipped runner, and observed self-dispatch, with no objective losses and mean wall/token ratios no greater than 1.1. The matrix freezes as soon as 3/3 becomes mathematically unreachable. No provider was called.
