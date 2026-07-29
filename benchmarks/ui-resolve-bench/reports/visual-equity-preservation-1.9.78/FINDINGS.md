# Visual Equity Preservation — 1.9.78 Findings

## Status

**PROVIDER-FREE ACCEPTED**

The canonical `omd-apply` skill now protects a bounded set of task-helpful
existing visual decisions before a repair can weaken or replace them.
Provider generation remained zero.

## Contract added

The work packet now carries a `visual_equity` ledger with:

- `identity`
- `user_value`
- `before_evidence`
- `decision(preserve|reinforce|replace)`
- `change_authority`

The ledger is limited to at most five high-salience decisions: decision
hierarchy, risk or reversibility cues, active/selected-state distinction,
primary-action prominence, and spatial boundaries between different user
decisions. Existing decoration is not protected without task value.

Replacement or weakening requires the original user task, an explicit
DESIGN.md rule, or a measured defect on the same consumer route. Generic
cleanup language, consolidation, minimalism, specialist preference, and model
taste are not authority. Visual authority cannot override the stricter
protected-behavior, foreground, geometry-token, or interactive contracts.

The post-edit `visual-equity closure` checks the same route and state at
desktop and mobile and requires:

- `unsupported_hierarchy_loss: 0`
- `unsupported_state_signal_weakening: 0`
- `unsupported_reassurance_removal: 0`
- `unsupported_decision_boundary_collapse: 0`

Low-salience edits with no eligible decision use `visual_equity: []` and
`visual-equity closure: N/A`; they do not incur an unnecessary viewport
comparison. The closure cannot invent a token, fallback value, verifier, or
new specialist pass.

## Acceptance evidence

- canonical contract + install-skills: 43/43 passed
- Cursor benchmark adaptation: 1/1 passed
- TypeScript lint: passed
- build: passed
- `git diff --check`: passed
- canonical skill length: 238 lines, below the 500-line skill guideline
- canonical skill SHA-256:
  `22eb96d8ac5da85477c5120fadaa23605252ac9afed46ee19f33da16fd7a567d`
- provider calls: 0

A broader benchmark-file run observed the two pre-existing missing vendor
Git-metadata fixture failures only; the OmD distribution/adaptation tests
passed.

## Claim boundary

This acceptance proves that the contract is present, internally coherent, and
distributed through the supported skill paths. It does not prove preference
lift. The 1.9.77 owner round remains a one-reviewer historical diagnostic.

The next valid live step is a fresh current-version comparison that isolates
the pre-1.9.78 OmD skill from the 1.9.78 skill under one fixed provider,
balanced order, repeated trials, and the same deterministic and blind planes.
Raw DESIGN.md may remain an external anchor, but it cannot substitute for the
old-skill control when measuring this patch.

