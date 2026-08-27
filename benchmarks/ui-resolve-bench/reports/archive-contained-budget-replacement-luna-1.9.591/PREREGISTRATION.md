# 1.9.591 — Archive contained-budget replacement

This provider-zero experiment compares the exact raw-carrier-inner control (`853db7bf…`) with the exact contained-budget candidate (`5f78f1c5…`) on the pinned, model-unseen archive film task (`6bdcd79d…`). Both arms share the artifact consumer, carrier-local fit gate, snapshot anchor, aggregate-width gate, self-dispatch, and proof policy. The intended source delta is the producer budget: raw overflowing live width versus the smaller of live width and the document-contained inner budget.

Luna/high is frozen for three paired trials per arm, one cell at a time, 900-second timeout, 120-second inter-cell pacing, and no retry. Promotion requires 3/3 UI resolution, proof compliance, shipped-runner use, and observed contained-budget plans with zero invalid raw overflow budgets. One candidate miss makes promotion mathematically unreachable and freezes the remaining cells.

No model call has occurred. The next step is executable matrix materialization and detached-source preparation.
