# Localization reflow comparison — findings

Status: **COMPLETE; direction supported, wording not yet promotable**.

## Result

- 6/6 valid cells; no retry, fallback, repair, replacement, or substitution.
- Control: 79/79/79, UI-Resolved 0/3, Reliability@3 0%.
- Reflow experimental: 83/85/81, UI-Resolved 1/3, Reliability@3 0%.
- Paired objective W/T/L for experimental: 3/0/0.
- Median objective: control 92.9%, experimental 97.6%.
- Function, DESIGN grounding, accessibility, and evidence honesty passed in all
  six cells.

Control repeated locale-artifact and short-control fragmentation. Experimental
removed those failures in all three trials, establishing that the closure
changes model behavior.

The activation is not promotable unchanged. Trial 1 interpreted one-line
integrity as `nowrap` and introduced 200% horizontal overflow and clipping.
Trial 3 avoided text fragmentation but produced generated-label overflow and
weakened target emphasis at 320px.

## Decision

Retain canonical `omd-apply` unchanged. Revise the experimental sentence to
state that one-line integrity must be achieved by allocating a full-width
reading row and reducing competing columns/padding first; `white-space: nowrap`
is forbidden when it creates overflow. Generated mobile labels must fit their
declared column, and target emphasis must remain intact.

Validate the rewritten paragraph on another unseen task. Do not reuse
FieldMerge or RelayLocale as final evidence and do not request owner review:
the remaining failures are objective.
