# Digital master carrier-inventory transfer — 1.9.300

This experiment compares exact conjunctive-release control `3a414a0a…` with
exact carrier-inventory candidate `a57c374…` on the fresh
`digital-master-lineage-review-v0.1` holdout. Task, prompt, starter, DESIGN.md,
activation, Codex/Luna/high runtime, 900-second timeout, installed proof
policy, balanced order, and 120-second pacing are held equal. The sole
treatment difference is the installed skill source.

Promotion requires candidate UI-Resolved 3/3, zero serious/critical contrast
violations 3/3, no paired objective loss, and proof plus installed host-policy
passes 3/3. Candidate mean wall time and provider-reported tokens must each be
at most 1.1× control. Timeout is a valid failure; retry, fallback, same-root
repair, and post-hoc substitution are forbidden. Each execution uses
`--max-new-cells 1`.

This is prospective Tokens-to-Target attempt 3. Attempts 1 and 2 remain
right-censored at 3,101,747 and 4,398,179 total experimental tokens
respectively. All scheduled spend in this attempt is retained; provider token
meanings are not pooled across providers. Provider calls at preregistration: 0.
