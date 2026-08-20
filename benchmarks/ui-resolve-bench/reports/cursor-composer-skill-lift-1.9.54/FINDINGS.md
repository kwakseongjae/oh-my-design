# Cursor/Composer paced Skill Lift — 1.9.54 findings

Status: **execution stopped; local evaluator dependency failure**.

## Outcome

The first baseline provider generation succeeded:

- requested selector: `composer-2.5`;
- reported display name: `Composer 2.5`;
- provider process: exit 0;
- provider wall time: 348,795 ms;
- usage: 64,600 input, 1,083,044 cached input, 31,504 output tokens;
- product diff: `index.html` only.

The controller then launched the evaluator from the detached clean-source
worktree. That worktree intentionally had no installed dependency tree, so the
evaluator failed to resolve `axe-core` before producing a score. The first cell
was retained as stopped and the remaining eight cells as `not-started`.

## Diagnosis

This is not quota exhaustion or a model switch condition. Composer completed
the generation and returned usage normally. It is also not a benchmark product,
task, skill, or evaluator-rule failure.

The orchestration mistake was coupling clean-source preparation and evaluator
runtime location. Preparation should read a clean committed worktree, while
the controller and evaluator should run from the dependency-complete primary
workspace. A fail-fast evaluator dependency preflight is required before any
future provider call.

## Decision boundary

The matrix is infrastructure-invalid and frozen. It has zero valid completed
cells and is excluded from paired W/T/L, Reliability@3, efficiency, and
replication denominators. The generated product is not rescored or reused.

The next patch must add provider-free evaluator preflight and prove failure
before a provider cell starts. Only then may a separately preregistered fresh
Composer matrix be prepared.
