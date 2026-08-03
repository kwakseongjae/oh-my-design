# Sterile-tray completion loop — 1.9.405

Attempt 17 uses the unseen sterile-tray transfer holdout locked at 1.9.404. It compares exact historical control `3a414a0a…` with exact 1.9.403 browser-attempt completion candidate `f55815d…` under Luna/high in a balanced 2×3 matrix: C/N, N/C, C/N. Timeout is 900 seconds, concurrency is one, fixed inter-cell pacing is 120 seconds, and primary retries are forbidden.

The candidate must resolve all three trials, preserve every supplied relationship carrier, introduce no paired objective loss, pass the installed host/proof gates three times, and stay within 1.1× control mean wall time and provider tokens. All admission, checkpoint-resume, timeout-accounting, isolated runtime, named browser, bootstrap boundary/order, shared socket, and browser-attempt and completion-loop pins are fixed before preparation. Earlier roots and outputs remain frozen. Provider calls at preregistration: 0.
