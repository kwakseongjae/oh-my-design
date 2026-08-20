# Reflow v10 relational control-copy refinement — 1.9.159

## Change

Refined only the existing type-role classification step in canonical `omd-apply` and its historical decision-context mirror.

- compact control copy is now identified by its functional relationship to a paired toggle, button, or select, not by the source element tag;
- visible naming copy in `label`, `strong`, `span`, or `p` receives the declared label role when that control relationship is confirmed;
- selected targets, source filenames, artifact IDs, and other atomic identifiers are explicitly excluded from evidence/metadata role demotion;
- unresolved control relationships or missing compatible roles preserve the current type instead of guessing;
- closure now requires `unclassified_compact_control_copy: 0`.

No task string, selector, filename, token value, evaluator branch, score weight, tag-specific CSS recipe, or fallback value was added.

## Why this is bounded

The museum-loan v9 matrix produced two stable signals: all three candidate trials missed the compact toggle naming copy, while one trial incorrectly applied the evidence role to the selected target. v10 clarifies the existing role boundary and does not add a new repair phase.

## Verification

- canonical `omd-apply` contract: `7/7` green
- historical decision-context one-delta parity: `1/1` green
- TypeScript lint: green

## Promotion constraint

v10 is not promoted by source-level verification. It must be committed before a newly created unseen non-approval task and must achieve UI-Resolved 3/3 with no paired regression.
