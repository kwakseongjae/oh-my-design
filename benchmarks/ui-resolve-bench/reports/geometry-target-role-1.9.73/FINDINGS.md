# Geometry target-role contract — 1.9.73 findings

Status: **accepted, provider-free**.

## Decision

The incident task now measures the explicit
`data-bench-design-role="main-console"` surface instead of the ambiguous
`data-dashboard-card` surface. The marker is protected at exactly one visible
instance in every viewport, and the prompt requires it to follow the overall
console role when markup is reorganized.

The existing `14px` radius oracle, `±1px` tolerance, design score, critical
gate, DESIGN.md, and canonical OmD skill are unchanged. Historical results are
not re-evaluated.

## Why this closes the recurrence

The 1.9.72 trial-3 Raw and OmD outputs both rendered a valid 14px outer console
but attached `data-dashboard-card` to a square inner panel. The old name could
reasonably refer to either surface. The new role name states which product
surface the oracle measures instead of asking the evaluator to search for an
element that happens to match 14px.

The calibrated mutations prove:

| Case | Result |
|---|---|
| one visible main-console marker | pass |
| missing marker | fail |
| duplicate marker | fail |
| marker observes 14px main console | pass |
| marker observes 0px subordinate panel | fail |

## Browser calibration

The unchanged starter behavior under task `0.4.0` scored 85/85:

- automated and all six critical gates passed;
- all five design checks passed;
- the marker was exactly 1/1 and visible at desktop, mobile, 320px, and the
  200% CSS-zoom surrogate;
- all responsive, keyboard, state, Evidence & Unknown, and accessibility
  checks passed;
- axe serious/critical violations were zero.

## Validation

- focused task/evaluator/controller tests: 56/56;
- TypeScript, build, Node syntax, and diff checks: pass;
- provider generation: zero.

The broader sandbox test still has the two pre-existing `/tmp` competitor
vendor failures because the Taste and UI UX Pro Max directories lack Git
metadata. They are unrelated to this task contract and were not hidden or
reclassified.

## Next

Any future incident run must use a fresh task `0.4.0` denominator. The next
distinct benchmark capability is the Arena-inspired blind Ship Preference
plane; it must remain separate from deterministic correctness and may not
override failed behavior, accessibility, evidence, or unknown-data gates.
