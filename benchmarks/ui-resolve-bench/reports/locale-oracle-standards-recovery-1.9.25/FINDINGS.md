# 1.9.25 calibration — locale oracle aligned with web standards

## Outcome

The evaluator-only recovery is complete. It generated no new model output and
does not alter the frozen 1.9.24 score or decision.

- Source commit: `b128aef`
- Evaluator schema: `0.3`
- Retained 1.9.24 artifact replay: 85/85, all six critical gates pass
- Seeded invalid starter: 57/85, automated gate fails
- Provider generation: none
- 1.9.24 retroactive promotion: none

The same exact 1.9.24 `index.html` was copied mechanically into a diagnostic
workspace before replay. Both files have SHA-256
`25ff118e...`; no product edit was made for the positive calibration.

## Standards corrections

The bounded patch fixes four assumptions exposed by 1.9.24:

1. **Sequential focus uses the platform contract.** The generic keyboard
   traversal now includes only visible, enabled controls whose computed
   `tabIndex` is at least zero. Roving tabs with `tabindex="-1"` remain
   inspectable for names, target geometry, and accessibility, but are not
   falsely counted as sequential Tab stops.
2. **Roving tabs are tested as roving tabs.** The locale adapter separately
   requires Right Arrow to reach every locale and wrap to KO, and Left Arrow
   from KO to wrap to ZH-TW. Focus, selected state, visible panel, body locale,
   and root language must change together.
3. **Live status may start empty.** A copy action passes only when its resulting
   localized status is non-empty, differs from the initial value, and marks the
   action copied. An initially empty polite live region is valid.
4. **Language follows the active content.** The task starts in KO, uses
   `ko-KR` browser locale, and checks `<html lang>` at every locale state. The
   unstated navigation-landmark requirement was removed; h1, main, and footer
   remain explicit task requirements.

The task contract was bumped from `0.1.0` to `0.2.0`, and the evaluator score
schema from `0.2` to `0.3`.

## Positive retained-artifact replay

The frozen 1.9.24 result stays 72/85 under its original evaluator. Under the
new diagnostic evaluator, the unchanged artifact records:

- 85/85 deterministic points;
- task contract, state journey, responsive, accessibility, design grounding,
  and Evidence & Unknown all pass;
- all five locales reachable by click and roving keyboard;
- every root language and panel language exact;
- every copy handoff changes to a non-empty localized result;
- all four geometry profiles pass;
- axe serious/critical zero.

This replay calibrates the new oracle. It is not a new provider result and
cannot be combined with a fresh experiment denominator.

## Negative seeded-starter replay

The task's seeded starter remains invalid under schema `0.3`:

| Gate | Result |
|---|---|
| Task contract | pass |
| State journey | fail |
| Responsive | fail |
| Accessibility | fail |
| Design grounding | pass |
| Evidence & Unknown | fail |
| Deterministic score | 57/85 |

It fails the intended signals: static English root language, no roving-arrow
behavior, cross-locale terminology, clipped controls at 390/320/200%, broken
keyboard traversal, serious axe findings on narrow surfaces, and an unsupported
`10x` claim. Removing the false negatives therefore did not create a
known-invalid pass.

## Verification

- focused benchmark tests: 27/27
- full root tests: 215 passed / 1 conditional skip
- TypeScript: pass
- CLI build: pass
- Node syntax: pass
- JSON and diff checks: pass
- real-browser retained artifact: 85/85
- real-browser seeded invalid starter: 57/85, automated gate fail

## Decision

Mark 1.9.25 `calibration_complete`. The locale task and schema `0.3` evaluator
are now suitable for a fresh provider experiment under a new root and
preregistration. No superiority, locale-lift, model, efficiency, or public
leaderboard claim follows from this evaluator-only calibration.

