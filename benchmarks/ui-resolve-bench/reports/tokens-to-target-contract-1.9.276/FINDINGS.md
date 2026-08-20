# 1.9.276 — Tokens-to-Target contract

## Outcome

UI-Resolve can now measure the cumulative provider-token spend required to
reach the first preregistered long-term goal pass. This is an accounting
contract, not a claim that the current 2.0.0 goal has already passed.

The deterministic aggregator reports two denominators:

- candidate tokens through the first passing patch;
- total experimental tokens through that patch, including controls, timeouts,
  and invalid scheduled runs.

If no observed attempt passes, the result is right-censored. Post-target runs
are excluded from Tokens-to-Target but retained as later evidence. Fresh input,
cached input, output, and reasoning-output coverage remain separate; a missing
component produces a null total instead of a fabricated zero.

## Acceptance

- focused unit tests: 3/3 green;
- TypeScript lint: green;
- diff whitespace check: green;
- provider, hook, agent, and third-party installer calls: 0.

## Interpretation boundary

Cross-provider token counts are not pooled because provider/runtime token
semantics are not interchangeable. Public comparison requires compatible
telemetry strata and a goal ledger whose contract and attempt order were frozen
before outcomes were observed.

## Next

Lock a fresh unseen topology for the exact conjunctive-release candidate, then
run the existing paired reliability protocol. Populate a cumulative 2.0.0 goal
ledger only from preregistered attempts; historical backfill remains labelled
retrospective and cannot become the primary Tokens-to-Target result.
