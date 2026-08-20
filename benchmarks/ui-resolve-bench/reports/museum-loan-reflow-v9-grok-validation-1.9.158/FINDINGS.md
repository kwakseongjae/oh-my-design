# Museum-loan reflow v9 Grok validation — 1.9.158

## Decision

Reject v9 for promotion. All six cells are valid, but v9 resolved zero of three trials, recorded one paired loss, and therefore failed the preregistered Reliability@3 gate.

## Result

| Arm | Trial scores | UI-Resolved | Reliability@3 | Median | Mean |
| --- | --- | ---: | ---: | ---: | ---: |
| previous canonical | 81, 81, 81 | 0/3 | 0% | 81 | 81 |
| reflow v9 | 77, 81, 81 | 0/3 | 0% | 81 | 80 |

- paired v9 W/T/L: `0/2/1`
- mean wall time: previous `224,335 ms`; v9 `200,780 ms` (descriptive only)
- mean reported non-cached tokens: previous `102,567`; v9 `75,321` (descriptive only)
- evidence honesty: `6/6` green
- provider, timeout, quota, retry, fallback, repair, replacement, and model-substitution failures: `0`
- requested/reported model: `cursor-grok-4.5-high` / `Cursor Grok 4.5 High`, `6/6`

## What the new rule did

v9 trial 2 correctly changed the supplied-count evidence line from inherited 16px body type to the declared 12/17 label/metadata role. That line then stayed on one line at both 320px and 200% reflow. This is direct evidence that the bounded type-role hypothesis can repair the intended cluster.

The same behavior was not reliable. Trial 3 left evidence at inherited 16px body type. Trial 1 applied the 12/17 label role to both evidence and the selected target filename. Because target and evidence then had the same 12px/700 treatment, target emphasis failed at all four viewports and produced the only paired regression.

## Repeated residual

Every v9 trial left `Preserve original source-note context` on two lines at 320px and 200% reflow. The copy is the user-facing label paired with the compact toggle, but its source tag is `<strong>` rather than `<label>`. The current instruction names a “compact control label” without explicitly defining that role by relationship to the control, so the model inconsistently treats it as ordinary body copy.

The previous arm showed the same cluster in all three trials. This is therefore a repeated cross-arm failure, not a v9-only or task-specific artifact.

## Next bounded hypothesis

Do not add the museum string, selector, tag name, filename, token value, evaluator branch, or score change. Refine only the existing type-role classification:

1. define compact control copy by function: the short visible text that names a paired toggle/button/select, regardless of whether the source element is `label`, `strong`, `span`, or `p`;
2. apply a declared label role to that control copy before width recovery;
3. explicitly exclude selected target, filename, artifact ID, and other atomic identifiers from evidence/metadata role demotion; they retain their declared target/identifier role and emphasis;
4. if the relationship or declared role is unresolved, preserve current type instead of guessing;
5. retain all v8/v9 width, protected-visibility, no-break, no-scroller, and semantic-boundary constraints.

Any v10 change must be committed before another unseen non-approval task is created. Museum-loan is now seen and cannot be reused as the promotion holdout.
