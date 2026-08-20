# Feature-flag canonical candidate validation — findings

Status: **FROZEN; candidate rejected, infrastructure stop preserved**.

## Valid evidence

- Trial 1 previous canonical: valid, UI-Resolved, 81/85.
- Trial 1 candidate: valid, not UI-Resolved, 75/85.
- Trial 2 candidate: process failure before product write, Cursor HTTP 503.
- Remaining three cells: not started after the preregistered stop.
- No retry, fallback, repair, replacement, resume, or model substitution.

This incomplete matrix cannot produce Reliability@3 or an aggregate comparison.
The valid paired result is still adverse evidence: candidate lost trial 1 and
failed the responsive critical gate.

## Root cause

The candidate output inserted `<wbr>` into every dot-separated flag key and
even asserted that the inserted break tags must remain. At mobile it changed
`.matrix td` to a one-column grid, but the desktop
`.matrix td:nth-child(n) { width: … }` selectors had higher specificity and
continued to constrain cells to 34/16/30/20 percent. The result fragmented flag
keys, `Production`, short controls, and owner values at mobile, 320px, and 200%,
and overflowed generated labels at 320px and 200%.

The candidate also missed the primary-action token, as did the previous run;
that shared non-critical miss is not attributed to reflow. Function, state
journeys, accessibility, and evidence honesty remained green.

## Decision

Reject the current canonical candidate as release evidence. Revise the closure
without changing the task or evaluator:

1. prohibit inserted break opportunities (`<wbr>`, `<br>`, zero-width space,
   soft hyphen, generated separators) inside atomic identifiers;
2. after stacking mobile metadata, remove or override residual desktop column
   widths with equal-or-higher specificity and verify the computed reading width;
3. add zero-defect outcomes for inserted breaks and residual mobile columns.

The HTTP 503 cell and old root remain frozen. Validate the revision in a fresh,
preregistered root; do not resume `/tmp/u19128`.
