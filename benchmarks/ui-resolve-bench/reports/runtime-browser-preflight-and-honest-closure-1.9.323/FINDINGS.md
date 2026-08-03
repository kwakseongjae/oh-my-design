# Runtime browser preflight and honest closure — 1.9.323

Status: **provider-free infrastructure repair accepted**

The 1.9.321 first control cell is infrastructure-invalid. Browser-harness had no usable active CDP connection, yet the matrix invoked Luna/high before discovering that prerequisite. The cell then produced a score even though its installed host-policy gate was false. Its 81/85 is excluded; 693,461ms and 2,036,343 tokens remain attempt-cost evidence.

## Repairs

1. A matrix whose shared host policy requires a browser attempt now runs `browser-harness --doctor` before any provider call. Both a healthy daemon and an active browser connection are required. Failure stops before model execution.
2. Reflow closure now means complete accounting, not fabricated success. Every registered carrier and row must have `pass` or `unresolved` outcomes at 390px, 320px, and 200%. Manifest counts must exactly match those outcomes.
3. Honest unresolved closure can finish delivery bookkeeping while preserving `browser_proof: unresolved`, `reflow_contract.closure: unresolved`, and failed quality/promotion status.
4. A preregistered shared host-policy gate that is not explicitly true now marks the run record `invalid-infrastructure`, freezes the matrix, and prevents checkpoint/score admission.

## Acceptance

- focused proof-policy and provider-neutral tests: 72/72 passed;
- wider proof-policy/provider-neutral/Cursor runtime regression: 85/85 passed;
- TypeScript lint, build, and diff check: passed;
- no provider call was made for this repair;
- frozen root: `/private/tmp/u19321`;
- known invalid spend minimum: 4,968,562 provider-reported tokens, plus one earlier usage-unavailable cell;
- no skill, model, efficiency, reliability, or frontier promotion claim follows.

The next live matrix is prohibited until browser-harness reports an active local browser connection. Once that prerequisite is restored, a fresh root and exact 1.9.323 host-policy pin are required; the frozen root is never resumed.
