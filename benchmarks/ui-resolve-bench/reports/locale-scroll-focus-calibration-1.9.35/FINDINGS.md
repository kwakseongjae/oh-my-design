# 1.9.35 calibration — keyboard-reachable scroll regions

## Outcome

The bounded task and activation calibration is complete. It generated no new
provider output and does not alter the frozen 1.9.34 result.

- Source commit: `a20076e`
- Locale task contract: `0.4.0` → `0.5.0`
- Evaluator schema: unchanged at `0.4`
- Retained 1.9.34 failure replay: 79/85, accessibility gate failed
- Known-good focus-control replay: 85/85, all six critical gates
- Provider browser authority: zero, unchanged
- Provider generation: none

## Contract change

The task and locale-stack activation now require static inspection of every
`overflow: auto|scroll` region that can contain clipped useful content.

Such a region must either contain a reachable control or be an explicit
keyboard focus target with a visible `:focus-visible` treatment. An explicit
target also needs a useful accessible name when its own content does not
already provide one. Decorative and non-scrollable containers must not become
unnecessary Tab stops.

The evaluator, score weights, viewports, clipboard oracle, and critical gates
were not relaxed.

## Real-browser separation

Two copies of the frozen 1.9.34 artifact were evaluated with the same external
browser evaluator:

1. The unchanged retained copy reproduced 79/85. At 390px, 320px, and the 200%
   surrogate, axe reported serious `scrollable-region-focusable`; keyboard
   traversal also failed.
2. The control copy changed only the five command `<code>` elements to
   `tabindex="0"` and added a visible `.command code:focus-visible` outline. It
   reached 85/85, all six critical gates, axe serious/critical zero at all four
   viewports, and exact keyboard traversal.

Clipboard behavior, locale content, responsive geometry, design grounding,
and Evidence & Unknown remained green in both copies. This isolates the
intended accessibility defect rather than masking it with an evaluator change.

## Verification

- focused benchmark tests: 14/14
- full root tests: 217 passed / 1 conditional skip
- TypeScript: pass
- CLI build: pass
- Node syntax: pass
- JSON and diff checks: pass
- clean prepared activation: task `0.5.0`, source commit `a20076e`, publishable
- retained browser replay: 79/85, failure preserved
- known-good focus replay: 85/85, all critical gates

## Decision

Mark 1.9.35 `calibration_complete`. A fresh exact-Opus/xhigh provider recovery
must run as 1.9.36 in a new output root with retry, resume, and manual product
edits disabled. Only that fresh run can recover the locale lane.

No superiority, locale-lift, model, efficiency, or frontier claim follows from
this provider-free calibration.
