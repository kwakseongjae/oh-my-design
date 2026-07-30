# Access review current-skill baseline — 1.9.101 findings

Status: **complete; bounded Internal Reliability@3 passed**.

The exact detached current `omd-apply` source at
`f013dbd9f94a1e018f7cf8a4e500207fe982b00a` completed all three independent
`access-review-v0.1` trials. No cell was retried, repaired, replaced, resumed
after failure, or moved to another model.

## Deterministic result

| Trial | UI-Resolved | Objective | Time | Tokens |
|---|---:|---:|---:|---:|
| 1 | yes | 85/85 | 286,669 ms | 186,999 |
| 2 | yes | 85/85 | 430,861 ms | 128,698 |
| 3 | yes | 85/85 | 320,520 ms | 319,840 |

- valid / scheduled: 3/3;
- UI-Resolved: 3/3;
- Reliability@3: 1/1 eligible task;
- objective median [P10–P90]: 100 [100–100];
- evidence-and-unknown pass: 3/3;
- failure, timeout, retry, fallback, repair, and substitution: 0.

Every run preserved the exact request/filter/disclosure/acknowledgement
contract and passed desktop, 390px, 320px, and 200% zoom-surrogate geometry,
keyboard/focus, axe serious/critical, DESIGN grounding, and unsupported-claim
checks.

## Compute telemetry

- wall-time median: 320,520 ms; min–max 286,669–430,861 ms;
- token median: 186,999; min–max 128,698–319,840;
- token telemetry availability: 3/3;
- latency remains descriptive-only under the locked control contract.

Both 120-second inter-cell pacing checks passed. Cursor project-cache and
evaluator preflights passed before every invocation. The registered selector
was `cursor-grok-4.5-high`, while the runtime display label is Internal-only and
does not authorize a public model attribution row.

## Decision

This family provides no deterministic failure cluster from which to derive a
new skill rule. Per the locked decision boundary, the current skill remains
unchanged and the queue moves to another unseen task family. The result is
bounded to this fictional access-review task, exact skill version, and runtime
lane; it is not a general frontier or superiority claim.
