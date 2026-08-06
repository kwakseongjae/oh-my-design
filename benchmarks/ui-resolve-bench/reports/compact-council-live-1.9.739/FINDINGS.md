# 1.9.739 findings — compact council live confirmation

Fresh two-lane execution completed 6/6 calls without retry or replacement.
Authority retention, expected blockers, and forbidden-auto safety all passed.
Questions fell from six to one. Wall time fell 45.1% and combined reported
tokens fell 53.6% relative to the four-lane pilot.

The preregistered exact-disposition condition failed. The existing docs audience
stayed `interview` instead of `defer`, and missing-reference visual grounding
narrowed from `defer` to `blocked`. Human handoffs therefore stayed 3 instead of
the full council's 2. The compact policy is cheaper and safe on this sample, but
does not reproduce the full council outcome.

The existing docs disagreement reveals a better boundary: repository-backed
maintenance work should not ask a model whether to reopen the existing audience
and single-surface scope. Those items should be deterministically deferred
without assigning a council lane. The missing-reference change is conservative
and does not weaken safety. The next patch implements that maintenance defer and
reuses these live artifacts; no immediate provider replay is warranted.
