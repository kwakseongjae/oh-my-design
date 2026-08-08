# Findings — preservation-mode calibration 1.9.759

Both lanes agreed that the documented audience, page boundary, and Contact sales CTA were preservation decisions. All three became `defer`. The contract correction fixed the disagreement observed in 1.9.758.

The run still failed. Both lanes changed the annual-pricing decision from `interview` to `blocked`. The first evaluator incorrectly counted either interview or blocked as retaining a mandatory interview, so its raw selectivity result was a false positive. Provider-zero rescoring now requires the exact `interview` disposition and records one mandatory-question loss.

This distinction matters to the 2.0 goal. `blocked` and `interview` both retain human authority, but only interview provides the requested “ask the user only where needed” path. A missing external fact or brand source may be blocked; a product owner’s undecided but answerable pricing choice should remain an interview.

The next correction should encode that boundary in the lane contract. It must not relax the exact evaluator or conservative reconciliation policy.

