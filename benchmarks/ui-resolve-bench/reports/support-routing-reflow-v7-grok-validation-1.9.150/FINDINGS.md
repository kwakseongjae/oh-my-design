# Support-routing reflow v7 Grok validation — 1.9.150

## Decision

Reject v7 for promotion. All six cells are valid, but v7 resolved only one of three trials and therefore failed the preregistered Reliability@3 gate.

## Result

| Arm | Trial scores | UI-Resolved | Reliability@3 | Median | Mean |
| --- | --- | ---: | ---: | ---: | ---: |
| previous canonical | 83, 81, 81 | 0/3 | 0% | 81 | 82 |
| reflow v7 | 85, 71, 81 | 1/3 | 0% | 81 | 79 |

- paired v7 W/T/L: `1/1/1`
- mean wall time: previous `234,430 ms`; v7 `224,995 ms` (descriptive only)
- mean reported non-cached tokens: previous `182,501`; v7 `95,408` (descriptive only)
- evidence honesty: `6/6` green
- provider, timeout, quota, retry, fallback, repair, replacement, and model-substitution failures: `0`
- requested/reported model: `cursor-grok-4.5-high` / `Cursor Grok 4.5 High`, `6/6`

## What improved

Trial 1 reached 85/85. The 320px screenshot shows the card using nearly the full viewport width, queue/destination/owner values receiving full reading rows, and `Preserve original-assignee context` staying on one line without shrinking below its declared role. Function, state journey, accessibility, DESIGN grounding, evidence, decision hierarchy, overflow, clipping, and text geometry all passed.

## Repeated residual

Trials 2 and 3 did not reliably execute the full-row recovery. They retained larger outer/card lateral insets, leaving the short evidence line and `Preserve original-assignee context` on two lines at 320px and 200% reflow. The screenshots make the difference visible: trial 1 uses almost the full 320px canvas while trials 2 and 3 preserve substantially more side chrome.

This means the v7 prose states the intended order but does not make the width budget auditable enough for stable model compliance.

## Regression in trial 2

Trial 2 also failed `protected_hooks_exact`. The live-region selector remained in the DOM but its own empty `<p data-bench="form-status">` had zero visible geometry; only a parent status row received `min-height`. The baseline protected contract requires the protected selector itself to remain visible. This is an unrelated contract regression and accounts for the 71-point result.

## Next bounded hypothesis

Do not add task strings, selectors, filenames, or a new evaluator. Refine the existing closures only:

1. make mobile width recovery an explicit inline-size budget ledger (`viewport → page inset → card border/padding → section inset → text/control required width`) and require the first reducible declared spacing layer to be removed until the protected short label fits;
2. add direct protected-visibility closure: a protected dynamic status/live-region selector must preserve its own baseline rendered geometry in the initial state; parent geometry or DOM presence is not sufficient;
3. keep all existing no-shrink, no-break, no-scroller, semantic-boundary, and token constraints unchanged.

Any v8 change must be committed before a new unseen task is created, then validated on another family. The support-routing task is now seen and cannot be the promotion holdout.
