# 1.9.736 results — bounded council effectiveness pilot

## Result

All twelve isolated Cursor Grok 4.5 High lane calls completed with no retry or
replacement. The reconciler accepted 26 cited claims, rejected none, retained
the required pricing authority, kept the missing official reference blocked,
and introduced zero forbidden automatic decisions.

After correcting the scorer to honor the real `blocked → halt before interview`
state transition, pre-build questions moved from 6 to 0 and batched human
handoffs moved from 3 to 2. The existing docs case became autonomous. The
regulated pricing case did not invent a price; it narrowed the authority gap to
a blocker. The missing official reference remained blocked.

## Cost

- calls: 12/12 successful;
- sequential lane wall time: 849,118 ms total, 66,840.5 ms median;
- reported tokens: 656,314 input, 31,785 output, 1,055,232 cache read;
- combined reported tokens: 1,743,331.

This is not Pareto competitive yet. The same decisions were repeated by several
lanes: the contrarian lane alone covered every eventual disposition, while
product, code, architecture, reference, and UX lanes mostly corroborated it.
The next patch should reduce the default maximum from four lanes to two and
replay the retained claims before any further provider call.

## Scoring correction

The initial summary counted interview decisions even when the same ledger
contained a blocking decision. That contradicted the shipped harness state
machine. The raw summary is preserved in the live root as
`SUMMARY.raw-1.9.736.json`; 1.9.737 rescored the same provider artifacts without
calling the model again.

## Honest boundary

This is an Internal Preview on three synthetic cases. It supports continued
development of the council-first gate, but does not establish production human
intervention lift, public Grok attribution, frontier superiority, or 2.0
promotion.
