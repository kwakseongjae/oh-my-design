# Rail consist known-failure closure — 1.9.391

Attempt 15 uses the unseen rail-consist holdout locked at 1.9.390. It compares the exact historical conjunctive control with the exact 1.9.389 known-failure-closure candidate under Luna/high in a balanced 2×3 matrix: C/N, N/C, C/N. Timeout is 900 seconds, concurrency is one, fixed inter-cell pacing is 120 seconds, and primary retries are forbidden.

The candidate must resolve all three trials, preserve every supplied relationship carrier, introduce no paired objective loss, pass the installed host/proof gates three times, and stay within 1.1× control mean wall time and provider tokens. All admission, checkpoint-resume, timeout-accounting, isolated runtime, named browser, bootstrap boundary/order, and shared socket pins are inherited exactly. Earlier roots and outputs remain frozen. Provider calls at preregistration: 0.
