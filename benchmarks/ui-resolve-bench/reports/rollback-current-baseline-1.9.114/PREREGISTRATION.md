# Rollback authorization current-skill baseline — 1.9.114

Status: **LOCKED; provider calls 0**.

## Purpose

Measure the exact restored current `omd-apply` skill on
`rollback-authorization-v0.1` before designing another rule. This is the first
baseline where severe text geometry and marker-backed decision hierarchy are
part of the deterministic critical gate.

## Frozen denominator

- task: rollback authorization `0.1.0`;
- task SHA `28b2fe54…`, prompt SHA `2ecb8b11…`, starter SHA `1001d121…`,
  DESIGN SHA `10e894e9…`;
- one exact detached current-skill arm at commit
  `f013dbd9f94a1e018f7cf8a4e500207fe982b00a`;
- canonical source-file SHA-256
  `22eb96d8ac5da85477c5120fadaa23605252ac9afed46ee19f33da16fd7a567d`;
- three fresh independent trials;
- Cursor/Grok 4.5 High, runtime effort High;
- 900-second timeout, global concurrency 1, 120-second inter-cell pacing;
- one controller invocation may add at most one cell;
- no retry, repair, fallback, failed-cell replacement, or model substitution;
- Internal registered-display-name attribution only; no public model row.

## Primary outcomes

1. UI-Resolved@1 and Reliability@3.
2. Exact task hooks and filter/disclosure/authorization states.
3. Text geometry and decision hierarchy at all registered viewports.
4. Keyboard traversal, focus visibility, axe, DESIGN grounding, and evidence
   honesty.
5. Provider-reported time, steps, and token components as descriptive
   telemetry only.

## Decision boundary

- 3/3 at the new ceiling forbids inventing a rule from this family.
- A repeated valid quality failure cluster may justify exactly one bounded
  non-canonical candidate in a later patch.
- A single failure remains diagnostic.
- Do not use the seen deletion outputs as validation evidence.

## Stop conditions

Freeze the fresh root at the first preparation, provider, timeout, pacing,
evaluator, export, attribution, or infrastructure/process failure. Keep valid
quality failures in the denominator. Never retry, repair, resume a frozen root,
or substitute another model.

