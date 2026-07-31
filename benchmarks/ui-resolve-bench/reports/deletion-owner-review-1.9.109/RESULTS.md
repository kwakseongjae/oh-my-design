# Deletion matched-trial owner review — results

Status: **complete and hash-locked**.

The submitted owner export passed exact schema, methodology epoch, reviewer,
family, comparison, trial, axis, and choice validation. All three comparisons
and all 12 axis judgments were present before the private identities were
normalized.

## Identity-normalized outcomes

| Axis | Control | Experimental | Tie | Both fail |
|---|---:|---:|---:|---:|
| Functionality | 0 | 0 | 3 | 0 |
| Usability | 0 | 0 | 3 | 0 |
| Fidelity | 0 | 0 | 0 | 3 |
| Ship preference | 0 | 0 | 0 | 3 |

Every trial preserved the tested interactions equally, but neither arm reached
the visual bar for fidelity or shipping. The bounded experimental
decision-context paragraph produced no owner-visible lift.

## Practitioner-observed failure cluster

The owner rejected all three shippable outcomes for the same visible reasons:

1. **Text geometry fragmented at the narrow view.** Short labels, status text,
   and evidence controls wrapped into two lines or—in the worst case—stacked
   letters vertically. The page remained technically inside the viewport, but
   the content no longer scanned as intentional UI.
2. **Information hierarchy was too flat.** Evidence, status, workspace,
   ownership, scope, and requested date competed at similar emphasis. The
   irreversible decision boundary did not read faster than its supporting
   metadata.
3. **The automated ceiling was a false positive.** All six cells received
   85/85 because the current geometry gate detects overflow, clipped controls,
   overlap, target size, and accessibility failures, but not destructive text
   fragmentation or weak decision hierarchy.

This is not evidence that the experimental rule is harmful; it is evidence
that it is insufficient and that the deterministic evaluator currently has a
quality blind spot.

## Decision

- Reject promotion of `omd-decision-context-experimental`.
- Keep the canonical `omd-apply` skill unchanged.
- Preserve this review as training evidence only.
- Add a provider-free visual-geometry contract for mid-token fragmentation,
  implausibly narrow generated labels, and decision-context hierarchy before
  opening another model comparison.
- Validate that contract on accepted fixtures plus a new unseen holdout; do not
  retroactively rescore `/tmp/u19108`.

No public skill winner, model row, or industry benchmark claim is authorized.

