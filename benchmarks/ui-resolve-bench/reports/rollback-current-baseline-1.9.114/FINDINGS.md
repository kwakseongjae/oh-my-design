# Rollback authorization current-skill baseline — findings

Status: **COMPLETE; retain the current skill without a new rollback rule**.

## Result

- 3/3 scheduled cells completed as valid runs.
- UI-Resolved@1: 3/3.
- Reliability@3: 100%.
- Objective score: 85/85 in all three trials.
- Text geometry: 12/12 registered viewport observations passed.
- Decision hierarchy: 12/12 registered viewport observations passed.
- Evidence and unknown handling: 3/3 passed.
- Retry, fallback, repair, replacement, and model substitution: 0.

All three mobile screenshots were inspected after deterministic evaluation. None
reproduced the deletion-review failure cluster: short evidence controls stayed
on one line, status labels did not split into vertical characters, generated
status markers did not collide with labels, and the selected
target→evidence→state→action boundary remained legible.

## Interpretation

The earlier deletion outputs were objective false positives under the old
evaluator. The new text-geometry and marker-backed hierarchy gates close those
specific blind spots without rejecting this fresh unseen rollback family.

The result does not prove that every visual preference is solved, does not
authorize a public model claim, and does not establish superiority over another
skill. It only establishes that the exact current `omd-apply` skill cleared the
new structural contract three independent times on this family.

Under the preregistered decision boundary, a 3/3 ceiling forbids adding a new
rollback-specific rule. The canonical skill therefore remains unchanged.

## Descriptive compute

- Wall time: 254,064 / 282,505 / 281,392 ms; median 281,392 ms.
- Tokens: 136,643 / 73,791 / 114,486; median 114,486.
- Both 120-second pacing checks and all three runtime/evaluator preflights
  passed.

Compute is descriptive only and is not a cross-provider efficiency claim.
