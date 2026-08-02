# Electrical single-line conjunctive-release transfer — findings

Status: **IN PROGRESS — 5/6 cells complete**

## Checkpoint 1 — baseline trial 1

`luna-single-line-r1-close` completed valid at **77/85** and is not
UI-Resolved. Task contract, interactions, evidence honesty, design grounding,
desktop geometry, 390px geometry, keyboard traversal, proof execution, and the
installed host-policy gate pass. Exact foreground contrast remains red. The
320px and 200% views preserve the diagram without page overflow or fragmented
tokens but still wrap short atomic node/decision text beyond the registered
one-line budget.

- wall time: **255,966ms**
- provider-reported total tokens: **543,427**
- input tokens: **535,072**
- cached input tokens: **480,512**
- output tokens: **8,355**
- reasoning output tokens: **3,488**
- proof execution: pass
- installed host policy: pass

No paired claim is available until `luna-single-line-r1-conjunctive` completes.
The 2.0.0 Tokens-to-Target goal remains right-censored; this spend is retained
in total experimental cost even if the bounded patch later fails.

## Pair 1

The conjunctive candidate scored **79/85** against the close-latch baseline's
**77/85**, a paired delta of **+2**. Both are unresolved. The candidate closed
all serious/critical contrast violations and removed page overflow while
preserving all eight nodes, seven connections, four branches, interactions,
and evidence. It did not keep the decision target and state within the
registered one-line atomic budget at 390px, 320px, or 200%. The foreground and
diagram-carrier outcomes were conjunctive, but the related decision carrier was
not included in that closure.

- candidate wall: **211,703ms** vs baseline **255,966ms** (**-17.29%**)
- candidate total tokens: **500,414** vs baseline **543,427** (**-7.92%**)
- candidate input/cached/output/reasoning: **489,829 / 432,640 / 10,585 / 5,803**
- candidate proof execution and installed host policy: pass
- cumulative prospective experimental tokens: **1,043,841**

Because candidate UI-Resolved 3/3 is now impossible, this patch cannot be
promoted. The remaining pairs are diagnostic evidence for recurrence and the
smallest next repair; they cannot restore promotion eligibility.

## Checkpoint 3 — candidate trial 2

The second conjunctive candidate scored **81/85** and remained unresolved. It
closed exact contrast, page containment, token fragmentation, and the 390px
atomic budget. The 320px and 200% decision target/state one-line budget remains
red, repeating the same carrier-boundary failure family as trial 1 with a
smaller viewport scope. Proof execution and installed host policy pass.

- wall time: **235,650ms**
- provider-reported total tokens: **491,306**
- input/cached/output/reasoning: **479,782 / 429,312 / 11,524 / 5,475**
- cumulative candidate tokens: **991,720**
- cumulative total experimental tokens: **1,535,147**

Pair 2 has no comparative result until its close-latch baseline completes.

## Pair 2

The close-latch baseline scored **77/85**, making the candidate delta **+4**.
Both are unresolved. Across two pairs the candidate is 2 wins / 0 ties / 0
losses, but remains 0/2 UI-Resolved because the decision carrier's narrow
atomic-line contract is not reliably included in the same closure.

- pair 2 wall: candidate **235,650ms** vs baseline **241,135ms** (**-2.27%**)
- pair 2 tokens: candidate **491,306** vs baseline **692,346** (**-29.03%**)
- two-pair mean wall: candidate **223,677ms** vs baseline **248,551ms** (**-10.01%**)
- two-pair mean tokens: candidate **495,860** vs baseline **617,887** (**-19.75%**)
- cumulative candidate/control/total tokens: **991,720 / 1,235,773 / 2,227,493**

The final pair remains diagnostic for variance and attainable ceiling.

## Checkpoint 5 — baseline trial 3

The final close-latch baseline again scored **77/85** and remained unresolved.
The baseline is now fixed at 77/77/77 with proof and host-policy gates green.
This removes score-direction ambiguity from the first two candidate gains, but
does not turn an unresolved candidate into a quality promotion.

- wall time: **164,877ms**
- provider-reported total tokens: **422,468**
- cumulative control tokens: **1,658,241**
- cumulative total experimental tokens: **2,649,961**

The last candidate determines the attainable ceiling and final efficiency
ratios; it cannot restore the already-failed 3/3 resolved gate.
