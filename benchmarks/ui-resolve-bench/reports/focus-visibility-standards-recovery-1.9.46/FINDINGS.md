# 1.9.46 calibration — focus visibility aligned with WCAG 2.4.11

Status: **calibration complete**.

## Outcome

The evaluator-only recovery generated no provider output and does not change
the frozen 1.9.45 score or decision.

- evaluator schema: `0.5`;
- retained 1.9.45 OmD trial 3: 85/85, all six critical gates pass;
- retained 1.9.45 Raw trial 2: 79/85, accessibility still fails;
- product artifacts changed: none;
- 1.9.45 retroactive promotion: none.

The positive and negative artifacts were mechanically copied before replay.
Their SHA-256 values exactly match their frozen sources:

- OmD positive: `7957a4db...`;
- Raw real-defect control: `3d9ebac7...`.

## Standards correction

Schema `0.4` treated a focused control as visible only when its complete
bounding rectangle fit inside the viewport. That rejects a legitimate
focusable horizontal scroll region whenever its content makes the region
taller than a constrained viewport.

Schema `0.5` uses viewport intersection for the critical focus-not-obscured
gate: width and height must be positive and some part of the focused component
must intersect the viewport. It separately records `fully_in_view` and
`all_fully_in_view` as diagnostics.

This matches WCAG 2.4.11's minimum requirement that the focused component is
not entirely hidden. Full visibility is the stronger enhanced criterion.

## Guardrail

The correction did not make the known Raw defect pass. Its comparison region
still lacks a focus target and visible focus treatment, axe still reports
`scrollable-region-focusable`, keyboard traversal still fails, and the
accessibility critical gate stays false at 79/85.

Unit mutations also prove:

- a tall, partially visible region passes minimum visibility but not full
  visibility;
- a fully off-screen focused rectangle fails;
- invalid-attribution-only aggregation returns an empty paired comparison
  instead of crashing.

## Decision

Mark 1.9.46 `calibration_complete`. Because the score rule changed, no schema
`0.4` candidate is reclassified. A fresh 1.9.47 matrix must use suite
`ui-resolve-v0.2` and evaluator schema `0.5`.
