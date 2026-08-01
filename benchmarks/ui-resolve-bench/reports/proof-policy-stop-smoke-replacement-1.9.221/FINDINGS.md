# Proof-policy real-host Stop replacement — 1.9.221

Status: **PASS**  
Host: Codex CLI 0.144.1  
Model: `gpt-5.6-luna`, high effort  
Fixture: fresh Git root `/private/tmp/omd-proof-policy-stop-smoke-replacement-1.9.221`

## Acceptance

| Condition | Result |
| --- | --- |
| Product edit | PASS — `h1` changed from `before` to `after` |
| Static closure | PASS — exactly one attempt |
| Premature delivery | PASS — first Stop blocked as `proof-incomplete` |
| Instruction read attribution | PASS — consumed no proof budget |
| Actual browser proof | PASS — exactly one attempt |
| Browser outcome honesty | PASS — CDP permission timeout recorded `unresolved`, not passed |
| Final delivery | PASS — ready after the observed attempt |
| Policy violations | PASS — all three counters are zero |
| Stop recursion | PASS — one blocked Stop, one final allowed Stop |

The final state has seven decisions, `browser_attempts: 1`, `delivery: ready`, and zero browser-recovery, duplicate-static, and after-ready violations.

## Decision

The final-response boundary and its one-shot recovery path are accepted for the existing opt-in Codex policy. This is host-behavior evidence, not UI-quality evidence, so default/broader installation remains `HOLD`. A new unseen UI family may now be preregistered for the next scored comparison with `require_delivery_ready` and `require_browser_attempt` enabled from the start.
