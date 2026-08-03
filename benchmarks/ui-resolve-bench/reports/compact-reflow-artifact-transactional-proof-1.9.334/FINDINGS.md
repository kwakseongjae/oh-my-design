# Compact reflow artifact + transactional proof — 1.9.334

Status: **provider-free candidate repair accepted; no quality promotion**

The valid 1.9.333 timeout showed that the runtime artifact contract was scientifically strict but operationally too expensive. The candidate changed the product, then spent the remainder of its 900-second budget coordinating six carrier records and 41 row records. Its static proof remained `running`, so browser proof and delivery never began.

## Repair

- Reflow artifact schema `0.2` groups repeated atomic rows by selector, semantic role, and longest real value. `expected_count` preserves every rendered instance without asking the model to author one JSON record per row.
- A dependency-free `reflow-artifact.mjs` helper owns inventory locking, hashing, expanded count arithmetic, resolved finalization, and honest unresolved finalization.
- Resolved closure now also requires all four relationship invariants: same row count, same decision boundary, all registered carriers closed, and no text hack.
- The installed proof policy keeps schema `0.1` compatibility while validating schema `0.2` independently of the helper.
- If a host omits a static proof `PostToolUse`, the next proof transition atomically settles that attempt as unresolved. A repeated static command remains denied; browser proof can continue instead of deadlocking the delivery latch.
- The historical decision-context experimental arm was rebased onto the new canonical skill while retaining exactly its one bounded experimental rule.

## Acceptance

- focused helper, skill-contract, runtime-hook, and state tests: 46/46 passed;
- install smoke: helper present and executable in Claude Code, Codex, and OpenCode;
- wider benchmark contract: 84/84 runnable tests passed; two reviewed external vendor cases remain unavailable because their local vendor roots are not Git repositories;
- TypeScript lint, build, and diff check: passed;
- provider calls during repair: 0.

This patch removes bookkeeping and proof-lifecycle failure modes. It does not prove better UI quality. The 1.9.309 candidate, aircraft task, and `/private/tmp/u19330` remain frozen. The next quality experiment must pin this committed source and use a fresh unseen task, fresh preregistration, and fresh committed/detached/clean cells.

## Exact host-policy pin — 1.9.335

Committed source `c1de0e4e…` is pinned in `HOST-POLICY-PIN.json`. The pin binds the canonical and installed skill, deterministic reflow helper, managed Codex config, and every source/rendered hook file. A same-permission browser-harness doctor run confirmed Chrome, daemon, and one active browser connection; optional cloud authentication is irrelevant to local proof. Provider calls remain zero and this pin is not a quality promotion.
