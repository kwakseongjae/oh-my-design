# Sensor release-blocker transfer — 1.9.244

This experiment compares the exact close-latch baseline `1d204afe…` with the exact compact release-blocker candidate `aa074ab…` on the fresh `sensor-channel-matrix-review-v0.1` holdout. Task, prompt, starter product, DESIGN.md, activation, Codex/Luna/high runtime, 900-second timeout, shared installed proof policy, balanced order, and 120-second pacing are held equal. The sole intended treatment difference is the installed skill source.

The candidate is promotable only if all three candidate trials are UI-Resolved, all have zero serious/critical contrast violations, no candidate trial loses its paired deterministic score, and every cell passes proof/host-policy gates. Mean wall time and provider-reported tokens must each remain within 10% of baseline. A timeout is a valid failure; retry, fallback, same-root repair, and post-hoc substitution are forbidden. Every execution invocation must use `--max-new-cells 1`.

Provider calls at preregistration: 0.
