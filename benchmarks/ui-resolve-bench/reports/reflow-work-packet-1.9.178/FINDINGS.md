# Reflow work-packet simplification — 1.9.178

## Decision

Replace the rejected v13 closure accumulation with one compact, machine-readable execution packet. This is a structural candidate, not a quality promotion. No provider call has been made.

## Why

The unseen print-proof transfer showed that adding final-selector prose reduced UI-Resolved reliability from 2/3 to 1/3, increased mean wall time by 24.4%, and increased reported tokens by 65.9%. One trial left the dynamic state unresolved in the UI; another applied broad nowrap rules and created page-level horizontal overflow at 200%.

The failure mode was no longer missing policy. The skill had accumulated seven ordered reflow stages and 26 terminal counters, making the operational priority harder to recover under a fixed task budget.

## Structural delta

The reflow closure is now one fixed `reflow_work_packet` with row identity, source, contract, measured fit, chosen layout decision, final selector proof, and three global invariants. Execution is limited to four ordered operations:

1. `INVENTORY` static, dynamic, and relational compact-copy rows;
2. `FIT` with declared typography and measured available/required width;
3. `REFLOW` through full-row, then stack, with comparison scroll as the only scroll exception;
4. `PROVE` the final selector at 390px, 320px, and 200% reflow.

Unsafe source-derived success was removed. A one-line row passes only with measured line count 1 and zero overflow/clipping. `nowrap` is permitted only after the longest value is measured to fit at all three views and page overflow remains zero.

## Size and contract checks

- canonical skill: 42,996 → 34,854 bytes (`-18.9%`)
- reflow closure: 11,164 → 3,462 bytes (`-69.0%`)
- focused skill contract: 8/8 pass
- experimental decision-context skill differs from canonical by its one bounded hierarchy rule only
- TypeScript lint: pass
- benchmark contract: 58/60 pass; the two failures are the pre-existing non-Git Taste/UI UX Pro vendor fixtures
- full unit suite: 351 pass, 1 skip, the same 2 pre-existing vendor-fixture failures
- provider calls: 0

## Stop gate

Do not promote on prose compactness. Pin the exact candidate, use seen tasks only for provider-free diagnostics, then run exact previous canonical versus this packet candidate on a new unseen topology. Promotion still requires UI-Resolved 3/3, Reliability@3 100%, zero paired loss, and no material wall-time/token regression.
