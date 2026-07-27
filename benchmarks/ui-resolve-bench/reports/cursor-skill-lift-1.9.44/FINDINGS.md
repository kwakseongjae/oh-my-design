# Cursor fixed-model Skill Lift — 1.9.44 findings

Status: **STOPPED; 0 valid cells; denominator closed**.

## What happened

The first `baseline` cell completed successfully at the provider, but the
controller stopped before evaluation with `observed-model-mismatch`. The
remaining eight cells are frozen as `not-started`; there is no retry, resume,
score, W/T/L, or Skill Lift conclusion.

The provider evidence was internally consistent:

- requested selector: `cursor-grok-4.5-high`;
- runtime label: `Cursor Grok 4.5 High`;
- evidence mode: `runtime-reported-display-name`;
- Cursor exit: `0`;
- product diff: `index.html` only;
- wall time: `401,042 ms`;
- usage: `92,125` input, `652,160` cached input, `27,907` output.

## Root cause

`preregisteredStopReason` invoked the provider-neutral runtime attribution
contract only for schema `0.2`. Schema `0.3` fell through to the legacy schema
`0.1` check, which required `model_usage[].model` to equal the immutable CLI
selector. Cursor reports a display label instead, a boundary already supported
by `runtimeAttributionStopReason`.

This is a controller schema-dispatch defect, not evidence that Cursor changed
the selected model. The fail-closed behavior was still correct: the matrix
stopped before evaluation and did not silently reinterpret the run.

## Replacement

The controller now routes both schema `0.2` and `0.3` through the same
provider-neutral attribution contract. A regression fixture uses the exact
`cursor-grok-4.5-high` → `Cursor Grok 4.5 High` relationship and provider usage
shape. The 1.9.44 root remains frozen. A fresh 1.9.45 root is required.
