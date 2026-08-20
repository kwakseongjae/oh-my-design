# Production cue all-carrier-set transfer — findings

Status: **6/6 cells complete — candidate rejected**

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

## Pair 2

The candidate scored **79/85** against the control's **75/85**, but both
remain unresolved. Both arms repeated the handoff target/evidence atomic-line
failure. The candidate closed exact contrast; the control additionally left
the supplied muted foreground at 4.42:1, producing serious axe
`color-contrast` findings in every tested viewport.

- candidate wall: **327,330ms** vs control **240,596ms** (**+36.05%**)
- candidate tokens: **1,463,832** vs control **381,919** (**+283.28%**)
- control input / cached / output / reasoning: **370,296 / 281,344 / 11,623 /
  5,741**
- both proof execution and installed host-policy gates: pass
- two-pair candidate/control mean wall: **316,238ms / 223,074ms**
  (**+41.76%**)
- two-pair candidate/control mean tokens: **1,242,874 / 381,343.5**
  (**+225.92%**)
- cumulative attempt-2 experimental tokens: **3,248,435**

The candidate now leads quality W/T/L **1/1/0**, but candidate UI-Resolved is
still **0/2** and the efficiency gate is decisively red. The last pair remains
diagnostic only.

## Checkpoint 5 — control trial 3

`luna-cue-r3-control` completed valid at **75/85** and is not UI-Resolved. It
repeated control trial 2: responsive geometry remains red at 390px, 320px, and
200%, and the 4.42:1 muted foreground produces serious axe contrast findings.

- wall time: **211,217ms**
- provider-reported total tokens: **489,099**
- input / cached input / output / reasoning output: **479,366 / 431,104 /
  9,733 / 4,499**
- proof execution and installed host policy: pass
- cumulative attempt-2 experimental tokens: **3,737,534**

Final pair claims are withheld until `luna-cue-r3-carrier-set` completes.

## Pair 3 and final decision

The candidate and control both scored **75/85** and remained unresolved. The
candidate left both responsive atomic-line failures and 4.42:1 muted contrast.
It also opened a browser session without completing a browser attempt, so its
installed host-policy gate failed with `installed-policy-delivery-incomplete`
and `installed-policy-browser-attempt-missing`. The deterministic proof trace
itself remained analyzable and compliant.

- candidate wall: **242,038ms** vs control **211,217ms** (**+14.59%**)
- candidate tokens: **660,645** vs control **489,099** (**+35.07%**)
- candidate score mean: **77.67** vs control **76.33**
- candidate quality W/T/L: **1/2/0**
- candidate/control UI-Resolved: **0/3 / 0/3**
- candidate/control mean wall: **291,504.67ms / 219,121.67ms**
  (**+33.03%**)
- candidate/control mean tokens: **1,048,797.67 / 417,262**
  (**+151.35%**)
- candidate/control/total attempt-2 tokens: **3,146,393 / 1,251,786 /
  4,398,179**

The all-carrier-set patch is rejected. Adding a plural carrier-set requirement
to prose did not cause the model to bind the separate handoff target/evidence
carrier into its implementation closure: that carrier remained unresolved in
all three candidate trials. The next bounded repair must make carrier discovery
an explicit pre-edit artifact with one row per protected/named atomic scope and
must prevent static closure when any discovered row lacks concrete 390px,
320px, and 200% outcomes. It should reuse the existing phase and proof-policy
machinery rather than add another advisory paragraph.
