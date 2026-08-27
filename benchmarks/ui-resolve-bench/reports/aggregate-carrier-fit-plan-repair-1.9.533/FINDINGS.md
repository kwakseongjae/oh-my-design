# 1.9.533 — Aggregate carrier fit-plan repair

## What failed

The observatory candidate measured its longest row text correctly, added the required 16px planning reserve, and still overflowed. The plan had measured only the atomic label. The actual layout also had to fit a button, adjacent note copy, flex gap, and shell padding.

## Repair

- Every registered row now belongs to exactly one aggregate carrier group.
- The carrier must be the smallest stable existing layout scope that contains all width competitors for that row.
- The pre-edit browser plan measures each carrier at max-content in the named consumer browser.
- The artifact records aggregate outer width, horizontal chrome, inter-item gap, available document width, the 16px planning target, and whether reflow is required for every condition.
- Static edit guardrails expose row and carrier budgets separately.

## Live proof

The smoke fixture deliberately paired a short `Mode` label with long adjacent copy and a button. The old row-only plan saw 36.5547px of text and a 52.5547px required inner width. The repaired plan measured the actual carrier at 462.9297px plus the 16px reserve and marked 390px, 320px, and actual 200% as requiring reflow.

This is the exact failure class that escaped 1.9.525 and froze the 1.9.528 transfer.

## Acceptance

- Focused skill/helper tests: 43/43
- Experimental skill parity: 1/1
- Three-channel installer smoke: 1/1
- TypeScript lint and Python AST: pass
- Existing Chrome named-session smoke: pass, no browser launch
- Full suite: 562 passed, 1 skipped, 3 pre-existing failures
- Provider calls: 0

This repairs the candidate contract. It is not a quality promotion and does not reopen the frozen observatory matrix.
