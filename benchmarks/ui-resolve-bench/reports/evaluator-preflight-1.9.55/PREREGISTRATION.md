# Evaluator dependency preflight calibration — 1.9.55

Status: **LOCKED; provider-free implementation pending**.

## Problem and bounded hypothesis

Matrix 1.9.54 spent one successful Composer generation before discovering that
the controller's detached worktree could not resolve `axe-core`. The existing
controller validates hashes and runtime attribution before execution but does
not validate evaluator dependencies before the first provider call.

A deterministic evaluator preflight should load the exact browser and
accessibility dependencies used by evaluation, then fail before any workspace
mutation or provider process when either dependency is unavailable.

## Frozen source scope

- export one dependency loader from `evaluate-run.mjs`;
- add a `--preflight` mode that loads `playwright-core` and `axe-core` without
  opening a browser or reading a benchmark workspace;
- make `run-prepared-matrix.mjs` execute that preflight before the first cell;
- retain a concise preflight failure in execution state;
- add provider-free fixtures proving success and fail-before-provider behavior;
- document that preflight time is orchestration time, not provider cell time.

No provider generation, product edit, task/evaluator rule, score, pacing,
timeout, retry, fallback, or historical artifact change is allowed.

## Acceptance

Pass only when:

1. the dependency-complete repository preflight exits zero;
2. a fake missing-dependency evaluator fails before the fake runtime is
   invoked and leaves every cell `not-started`;
3. a valid two-cell fake matrix still completes with unchanged provenance;
4. focused tests, Node syntax, TypeScript, build, and diff checks pass.

A pass unlocks a separately preregistered fresh paced Composer matrix whose
workspaces are prepared from a clean committed source while the controller and
evaluator run from the dependency-complete primary workspace. It creates no
benchmark quality, capacity, model, skill, or frontier claim.
