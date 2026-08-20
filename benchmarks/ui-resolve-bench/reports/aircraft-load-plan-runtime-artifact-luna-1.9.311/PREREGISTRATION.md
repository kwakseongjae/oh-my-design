# Aircraft load-plan runtime-artifact transfer — 1.9.311

This experiment compares exact conjunctive-release control `3a414a0a…` with exact runtime-artifact-aware candidate `8f8cec6e…` on the fresh `aircraft-load-plan-review-v0.1` holdout. Task, prompt, starter, DESIGN.md, activation, Codex/Luna/high runtime, 900-second timeout, balanced order, 120-second pacing, and the installed runtime artifact proof policy are held byte-identical. The sole treatment difference is the exact installed skill tree: the candidate tells the model how to materialize and close the artifact that the shared gate enforces.

Promotion requires candidate UI-Resolved 3/3, zero serious/critical contrast violations 3/3, no paired objective loss, and proof plus installed host-policy passes 3/3. Candidate mean wall time and provider-reported tokens must each be at most 1.1× control. Timeout is a valid failure; retry, fallback, same-root repair, and post-hoc substitution are forbidden. Each execution uses `--max-new-cells 1`.

This is prospective Tokens-to-Target attempt 4. Attempts 1–3 remain right-censored at 3,101,747, 4,398,179, and 3,451,991 total experimental tokens; their cumulative spend is 10,951,917. All scheduled spend in this attempt is retained and provider token meanings are not pooled across providers. Provider calls at preregistration: 0.
