# Cursor Kimi K3 / GLM 5.2 adapter calibration — 1.9.59 findings

Status: **accepted; Kimi-first scored Preview unlocked**.

## Outcome

The Cursor live allowlist now contains exactly:

1. `cursor-grok-4.5-high`;
2. `composer-2.5`;
3. `kimi-k3-high`;
4. `glm-5.2-high`.

The new selectors map only to the display names observed in 1.9.58:
`Kimi K3 High` and `GLM 5.2 High`. Correct labels produce
`runtime-reported-display-name`; a crossed Kimi/GLM label fails with
`reported-model-mismatch`.

Auto, Grok Fast, Kimi Max, GLM Max, low/fast variants, Kimi K2.7, and all
unregistered selectors remain outside the allowlist.

## Acceptance evidence

- focused Cursor/provider-neutral/run-matrix tests: 23/23 passed;
- existing Grok/Composer provenance fixtures: passed;
- wrong display fail-close: passed;
- Node syntax, TypeScript lint, CLI build, and diff checks: passed;
- provider generations in this patch: zero.

## Decision boundary

The bounded adapter calibration passed. A separately preregistered Internal
Kimi K3 High scored Preview may run first; GLM 5.2 High follows only after the
Kimi result or capacity stop is frozen.

The adapter changes no effort flag, timeout, task, evaluator, score, retry,
Auto/Router, or public attribution rule. It creates no quality, efficiency,
ranking, public model, or frontier claim.
