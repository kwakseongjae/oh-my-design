# Unseen pricing holdout — findings

Status: **COMPLETE; deterministic review gate stopped the visual-judge ladder**.

## Result

All six preregistered cells completed as valid executions. Provider,
infrastructure, attribution, evaluator, pacing, retry, repair, fallback, and
substitution failures were zero.

The retained 1.9.78 candidate resolved two of three trials; the preceding
control resolved none. Pairwise objective and UI-Resolved W/T/L was `2/1/0`
for the candidate. Mean paired objective lift was `+2.3529` percentage points,
and observed resolved lift was `+66.6667` points.

This is an encouraging unseen-task signal, not a superiority claim. The
bootstrap interval for resolved lift spans `0–100` points, the sample contains
one task family, and both arms fail Reliability@3.

## What failed

- Control trial 1: a comparison region overflowed and clipped by 4px at
  390px and 320px.
- Both arms in trial 2: the horizontally scrollable comparison region was not
  keyboard focusable at 320px and 200% zoom; focus-visible also failed.
- Control trial 3: focus-visible failed at 320px and 200% zoom even though axe
  serious-or-critical remained zero.

Task behavior, design grounding, evidence honesty, protected hooks, and
product delivery passed in every cell. The remaining weakness is narrow and
actionable: adaptive comparison/data surfaces must preserve containment,
keyboard entry, and visible focus at narrow width and zoom.

## Review decision

The anonymous automated visual-review preparer correctly rejects this result:
it requires both candidates in each exact pair to pass deterministic critical
gates. Four of six cells are unresolved, so no model judge or practitioner
review is warranted for 1.9.94.

The next patch should add a bounded adaptive-data-surface contract to
`omd-apply`, then prove it provider-free before opening a fresh pricing
replacement denominator. The completed `/tmp/u1994` root is immutable and
must not be resumed, repaired, or rescored.
