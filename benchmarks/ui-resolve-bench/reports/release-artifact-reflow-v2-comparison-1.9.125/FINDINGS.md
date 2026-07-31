# Release-artifact reflow v2 comparison — findings

Status: **COMPLETE; canonical-candidate threshold met**.

## Result

- 6/6 valid cells; no retry, fallback, repair, replacement, or substitution.
- Control: 85/79/81, UI-Resolved 1/3, Reliability@3 0%.
- Reflow v2: 85/85/85, UI-Resolved 3/3, Reliability@3 100%.
- Paired objective W/T/L for v2: 2/1/0.
- Median objective: control 95.3%, v2 100%.
- Function, DESIGN grounding, accessibility, evidence honesty, overflow,
  clipping, control overlap, and decision hierarchy passed in every v2 cell.

Control trial 2 fragmented artifact identifiers at all three narrow/reflow
viewports and overflowed generated mobile labels at 320px and 200%. Control
trial 3 still wrapped short atomic text at 320px and 200%. V2 removed the
cluster in 3/3 without reproducing the v1 `nowrap`, clipping, generated-label,
or target-emphasis regressions.

Direct 320px screenshot comparison confirms the objective result: the control
splits `checkout-web-2.7.14.tgz`, `Production`, and other short fields into
stacked fragments; v2 gives each mobile field a full-width reading row while
keeping the selected artifact, supplied evidence, blocker state, and action in
one visible decision boundary.

Compute is descriptive only. V2 median wall time was 394,185 ms versus control
271,342 ms; v2 median tokens were 136,308 versus control 174,668. Neither is a
promotion criterion.

## Decision

The activation paragraph meets the preregistered threshold for a canonical
candidate. Port its general principle into `skills/omd-apply/SKILL.md` without
task names, benchmark selectors, filenames, or a new token. Then validate that
candidate on another unseen family before treating it as the new public
canonical. Owner review is unnecessary because all remaining comparisons are
objective and v2 has no guardrail failure.
