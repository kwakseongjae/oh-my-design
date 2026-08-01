# Proof-policy real-host outcome smoke — 1.9.214

Status: **PASS; scored unseen-task preregistration may proceed**  
Host: Codex CLI 0.144.1  
Model: `gpt-5.6-luna`, high effort  
Fixture: fresh Git root `/private/tmp/omd-proof-policy-outcome-smoke-1.9.214`

## Acceptance result

The production-built CLI installed the corrected opt-in Codex policy into a fresh Git root. The prompt deliberately attempted browser proof before static verification and then required the model to follow the denial guidance.

| Acceptance condition | Result |
| --- | --- |
| Product edit occurred | PASS — h1 `before` → `after` |
| Out-of-order browser attempt denied | PASS — `static-closure-required` |
| Exactly one static attempt followed | PASS |
| Static string outcome did not claim pass | PASS — `static-closure-observed` |
| Exactly one browser attempt followed | PASS |
| Exit-1 browser output did not claim pass | PASS — `browser-proof-unresolved` |
| Delivery became ready | PASS |
| Later tool calls | 0 |
| Unblocked policy violations | 0 |

The saved state has six decisions, one browser attempt, and zero values for browser recovery, duplicate static closure, and verification-after-ready violations.

## Interpretation

The installed policy now does both required jobs on the real Codex boundary:

1. it gives a denied agent a legal recovery path instead of leaving it stranded; and
2. it distinguishes observed attempts from proven success when the host omits exit metadata.

This is a host-boundary and attribution result, not evidence that the policy improves UI quality. Proof policy remains opt-in. The next scored experiment must use a new unseen UI task, lock its geometry/hierarchy/state contract before generation, and compare the same host/model/task with and without the installed policy.
