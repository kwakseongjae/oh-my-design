# Electrical single-line conjunctive-release transfer — 1.9.278

This experiment compares the exact close-latch baseline `1d204afe…` with the
exact conjunctive-release candidate `3a414a0a…` on the fresh
`electrical-single-line-review-v0.1` holdout. Task, prompt, starter product,
DESIGN.md, activation, Codex/Luna/high runtime, 900-second timeout, shared
installed proof policy, balanced order, and 120-second pacing are held equal.
The sole intended treatment difference is the installed skill source.

The candidate is promotable only if all three candidate trials are UI-Resolved,
all have zero serious/critical contrast violations, no candidate trial loses its
paired deterministic score, and every candidate trial passes proof and
installed host-policy gates. Mean wall time and provider-reported tokens must
each remain within 10% of baseline. A timeout is a valid failure; retry,
fallback, same-root repair, and post-hoc substitution are forbidden. Every
execution invocation must use `--max-new-cells 1`.

This is attempt 1 of the prospective OmD 2.0.0 Tokens-to-Target ledger. Every
scheduled candidate and control token, including timeouts and invalid runs, is
counted. The goal is right-censored until all nine frozen frontier gates pass;
this bounded experiment alone cannot satisfy that goal.

Provider calls at preregistration: 0.
