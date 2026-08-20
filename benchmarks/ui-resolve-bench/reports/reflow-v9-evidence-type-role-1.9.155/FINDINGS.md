# Reflow v9 evidence type-role refinement — 1.9.155

## Change

Refined only the existing first step of `reflow-integrity closure` in canonical `omd-apply` and its historical decision-context mirror.

- short evidence, summary, metadata, and supplied-count lines now enter the same explicit type-role inventory as atomic identifiers and compact control/state labels;
- when DESIGN.md declares a compatible label or metadata role, the line uses that declared role instead of inheriting body or heading type;
- when no compatible role is declared, the current role is preserved and no smaller value is inferred;
- the existing prohibition on shrinking below the declared role remains unchanged;
- closure now requires `undeclared_evidence_type_role: 0`.

No task string, selector, filename, product token, evaluator branch, score weight, layout recipe, or fallback value was added.

## Why this is bounded

The change addresses the only repeated residual in the v8 holdout: short supplied-count evidence inherited body type despite an already-declared metadata role. The one-off filename split is intentionally not encoded. Width-ledger, protected-visibility, full-row-first, no-break, no-single-text-scroller, and semantic-boundary rules remain intact.

## Verification

- canonical `omd-apply` contract: `7/7` green
- historical decision-context one-delta parity: `1/1` green
- TypeScript lint: green
- broader benchmark file: relevant assertions green; the two known external vendor fixture checks remain environment-red because `/tmp/omd-ui-skills-bench/vendors/{taste-skill,ui-ux-pro-max}` are not Git repositories

## Promotion constraint

v9 is not promoted by this source-level verification. It must be committed first, then tested on a newly created unseen non-approval task. Warehouse-transfer, support-routing, certificate-rotation, audit-export, webhook-routing, and earlier approval tasks are seen and cannot serve as the v9 promotion holdout.
