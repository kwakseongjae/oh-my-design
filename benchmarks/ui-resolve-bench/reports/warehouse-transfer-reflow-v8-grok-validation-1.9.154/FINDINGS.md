# Warehouse-transfer reflow v8 Grok validation — 1.9.154

## Decision

Reject v8 for promotion. All six cells are valid and v8 recorded no paired loss, but it resolved only one of three trials and therefore failed the preregistered Reliability@3 gate.

## Result

| Arm | Trial scores | UI-Resolved | Reliability@3 | Median | Mean |
| --- | --- | ---: | ---: | ---: | ---: |
| previous canonical | 83, 77, 83 | 0/3 | 0% | 83 | 81 |
| reflow v8 | 83, 85, 83 | 1/3 | 0% | 83 | 84 |

- paired v8 W/T/L: `1/2/0`
- mean wall time: previous `290,048 ms`; v8 `250,753 ms` (descriptive only)
- mean reported non-cached tokens: previous `139,110`; v8 `79,084` (descriptive only)
- evidence honesty: `6/6` green
- provider, timeout, quota, retry, fallback, repair, replacement, and model-substitution failures: `0`
- requested/reported model: `cursor-grok-4.5-high` / `Cursor Grok 4.5 High`, `6/6`

## What improved

v8 had no paired loss and trial 2 reached 85/85. The successful output preserved the protected empty status selector's own geometry, recovered enough inline space at every measured viewport, kept supplied request, warehouse, and owner identifiers intact, and preserved the decision hierarchy. Function, state journey, accessibility, DESIGN grounding, evidence, overflow, clipping, and text geometry all passed.

The protected-status regression observed in v7 did not recur in any v8 cell. The explicit width ledger also reduced unnecessary outer chrome more consistently than v7.

## Repeated residual

Trials 1 and 3 still failed 200% reflow. Trial 3 retained the short evidence line `3 supplied requests · 1 transfer policy` on two lines. Trial 1 also split `warehouse-transfer-routing.yaml` mid-token. The filename split occurred once; the supplied-count evidence line is the repeated cross-version cluster and is the only justified target for the next bounded change.

The current type-role step explicitly covers atomic identifiers and short control/state labels, while the width-recovery step separately mentions evidence. This leaves a short evidence or summary metadata line free to inherit the 16px body role even when DESIGN.md declares a 12px label/metadata role. The residual is therefore a role-selection gap, not evidence that the evaluator or task needs another exception.

## Next bounded hypothesis

Do not add task strings, selectors, filenames, token values, evaluator branches, or scoring weight changes. Refine only the existing type-role step:

1. classify a short evidence, summary, metadata, or supplied-count line alongside the existing compact label roles;
2. when DESIGN.md declares a label or metadata role, apply that role before width recovery instead of leaving body or heading inheritance;
3. never shrink below the declared role, and preserve the existing role when DESIGN.md declares no smaller compatible role;
4. retain every v8 width-ledger, protected-visibility, no-break, no-single-text-scroller, and semantic-boundary closure.

Any v9 change must be committed before a new unseen task is created. Warehouse-transfer is now seen and cannot be reused as the promotion holdout.
