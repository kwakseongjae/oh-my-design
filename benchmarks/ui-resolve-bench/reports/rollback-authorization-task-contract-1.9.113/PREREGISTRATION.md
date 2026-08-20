# Rollback authorization holdout contract — 1.9.113

Status: **ACCEPTED provider-free unseen task contract**.

## Separation from training evidence

The task uses fictional production rollback authorization rather than payout or
permanent deletion. It shares the generic `approval-v1` interaction adapter but
introduces new service, scope, window, evidence, blocker, and authorization
facts. No generated payout or deletion artifact is copied into the fixture.

The task and both new visual contracts are frozen before any model execution:

- task: `rollback-authorization-v0.1@0.1.0`;
- task SHA: `28b2fe54…`;
- prompt SHA: `2ecb8b11…`;
- starter HTML SHA: `1001d121…`;
- DESIGN.md SHA: `10e894e9…`;
- viewports: desktop, mobile, narrow-320, CSS-zoom surrogate 200%;
- network disabled.

## New acceptance boundary

- `approval-v1` filter, disclosure, cancel, confirm, state, and focus journey;
- exact protected hook counts;
- text geometry in every constrained viewport for request rows and the visible
  decision boundary;
- marker-backed target/evidence/state/action hierarchy in all four viewports;
- no overflow, clipping, overlapping controls, short-label wrapping,
  mid-token fragmentation, or generated-label box collision;
- task-owned DESIGN.md values and evidence-honesty gate;
- keyboard traversal, focus visibility, axe, and language gate.

## Stop condition

Accept the untouched starter only if the fresh browser evaluation reaches
85/85 with every critical gate green. Do not run a model, edit the evaluator,
or weaken an oracle in response to a failure.

