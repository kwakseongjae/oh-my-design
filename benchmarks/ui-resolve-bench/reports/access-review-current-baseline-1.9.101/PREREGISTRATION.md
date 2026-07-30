# Access review current-skill baseline — 1.9.101

Status: **LOCKED; provider calls 0**.

## Purpose

Measure the restored current `omd-apply` skill on the unseen
`access-review-v0.1` family before designing another rule. The experiment is a
failure-discovery baseline, not a comparison against the rejected pricing
candidate.

## Frozen denominator

- task: access review `0.1.0`;
- one exact detached current-skill arm at commit
  `f013dbd9f94a1e018f7cf8a4e500207fe982b00a`;
- canonical source-file SHA-256
  `22eb96d8ac5da85477c5120fadaa23605252ac9afed46ee19f33da16fd7a567d`;
- installed Cursor-adapted skill-tree SHA-256
  `d7a890ac08f8a4cce8c541b186039c9fcd4245a363f7f97132a2bbf8f46f52d5`;
- three fresh independent trials;
- Cursor/Grok 4.5 High, runtime effort High;
- 900-second timeout, global concurrency 1, 120-second inter-cell pacing;
- one controller invocation may add at most one cell;
- no retry, repair, fallback, failed-cell replacement, or model substitution;
- Internal registered-display-name attribution only; no public model row.

## Primary outcomes

1. UI-Resolved@1 and Reliability@3.
2. Exact protected task hooks and filter/disclosure/acknowledgement states.
3. Desktop, 390px, 320px, and 200% zoom-surrogate geometry.
4. Keyboard traversal, focus visibility, axe serious/critical findings, DESIGN
   grounding, and unsupported-claim count.
5. Provider-reported time, steps, and token components as descriptive telemetry.

## Decision boundary

- A repeated deterministic failure cluster may justify designing one bounded
  candidate rule in a later patch.
- A 3/3 ceiling forbids inventing a skill delta from this family. The queue must
  move to blind visual review or another unseen family.
- A single failure remains diagnostic and cannot by itself authorize a rule.

## Stop conditions

- Freeze the fresh root at the first preparation, provider, timeout, pacing,
  evaluator, export, attribution, or infrastructure/process failure.
- Keep valid quality failures in the denominator.
- Never retry, repair, resume a frozen root, or substitute another model.
- Do not run a provider until exact-source preparation and focused tests are
  green and committed.
