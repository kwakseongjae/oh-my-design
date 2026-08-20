# Evaluator dependency preflight calibration — 1.9.55 findings

Status: **accepted; fresh dependency-safe matrix unlocked**.

## Outcome

`evaluate-run.mjs --preflight` now loads the exact `playwright-core` and
`axe-core` dependencies used by evaluation without opening a browser or
reading a benchmark workspace. `run-prepared-matrix.mjs` executes that
preflight before the first provider cell.

If preflight fails, execution state retains the failure and every scheduled
cell as `not-started`. The fake acceptance proved that neither fake provider
runtime was invoked. Preflight timestamps are stored separately and remain
outside provider cell wall time.

## Acceptance evidence

- dependency-complete primary workspace preflight: passed;
- focused prepare/runtime/aggregate acceptance: 22/22 passed;
- missing-dependency fail-before-provider fixture: passed;
- valid fake Claude/Codex and Cursor provenance: unchanged and passed;
- Node syntax, TypeScript lint, CLI build, and diff checks: passed;
- full benchmark unit slice: 94 passed, 1 skipped;
- two pre-existing `/tmp` competitor vendor fixtures remain red because their
  Git metadata is absent; neither executes evaluator preflight.

## Decision boundary

The bounded provider-free calibration passed. A fresh paced Composer
replacement may be prepared from a clean committed source while the controller
and evaluator execute from the dependency-complete primary workspace.

This is orchestration evidence only. It changes no evaluator rule or historical
score and creates no quality, capacity, model, skill, efficiency, or frontier
claim.
