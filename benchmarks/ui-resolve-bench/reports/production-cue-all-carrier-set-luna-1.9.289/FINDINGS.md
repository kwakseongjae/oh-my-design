# Production cue all-carrier-set transfer — findings

Status: **3/6 cells complete**

## Checkpoint 1 — control trial 1

`luna-cue-r1-control` completed valid at **79/85** and is not UI-Resolved.
It fixed exact foreground contrast and removed page overflow while preserving
all eight cues, seven dependencies, three lane carriers, interactions, and
evidence. The separate handoff carrier remains outside the atomic one-line
closure: its target wraps at 390px, 320px, and 200%; its evidence also wraps at
320px and 200%.

- wall time: **205,552ms**
- provider-reported total tokens: **380,768**
- input / cached input / output / reasoning output: **370,624 / 314,368 /
  10,144 / 5,667**
- proof execution: pass
- installed host policy: pass

No paired claim is available until `luna-cue-r1-carrier-set` completes. This
spend is retained in Tokens-to-Target attempt 2.

## Pair 1

The all-carrier-set candidate tied the control at **79/85**; both remain
unresolved with the same handoff target/evidence line-budget failures. The
candidate fixed contrast and retained all three lane carriers, but did not
close the fourth registered handoff carrier at 390px, 320px, or 200%.

- candidate wall: **305,146ms** vs control **205,552ms** (**+48.45%**)
- candidate tokens: **1,021,916** vs control **380,768** (**+168.38%**)
- candidate input / cached / output / reasoning: **1,007,718 / 937,216 /
  14,198 / 8,140**
- both proof execution and installed host-policy gates: pass
- cumulative attempt-2 experimental tokens: **1,402,684**

Candidate UI-Resolved 3/3 is now impossible, so this patch cannot be promoted.
The remaining two pairs are diagnostic evidence for recurrence and the next
smallest repair; they cannot restore promotion eligibility.

## Checkpoint 3 — candidate trial 2

`luna-cue-r2-carrier-set` completed valid at **79/85** and is not
UI-Resolved. It repeated the candidate's first-trial failure: the separate
handoff target wraps at 390px, 320px, and 200%, while the handoff evidence
wraps at 320px and 200%. Exact contrast, page containment, task facts,
interactions, accessibility, proof execution, and installed host policy pass.

- wall time: **327,330ms**
- provider-reported total tokens: **1,463,832**
- input / cached input / output / reasoning output: **1,449,303 / 1,362,176 /
  14,529 / 8,277**
- cumulative attempt-2 experimental tokens: **2,866,516**

This is a candidate-only checkpoint. Pair-2 quality and efficiency deltas are
withheld until `luna-cue-r2-control` completes.
