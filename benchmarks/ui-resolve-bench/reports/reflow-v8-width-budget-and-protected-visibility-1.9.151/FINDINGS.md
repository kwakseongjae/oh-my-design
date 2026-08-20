# Reflow v8 width budget and protected visibility — 1.9.151

## Change

The canonical `omd-apply` skill now makes two existing contracts auditable without adding task-specific content:

1. full-row recovery uses an inline-size budget ledger from viewport through every ancestor inset to required text/control width; a `width: 100%` declaration alone is not proof;
2. protected dynamic status/live-region elements preserve the selector's own baseline rendered geometry; DOM presence or a parent wrapper's min-height is not proof.

The change does not add task strings, selectors, filenames, design tokens, evaluator branches, or score weights. Existing no-shrink, no-break, no-single-text-scroller, semantic-boundary, and evidence constraints remain unchanged.

## New closure outcomes

- `unresolved_inline_size_budget: 0`
- `protected_selector_visibility_loss: 0`

## Verification

- canonical `omd-apply` contract: `7/7` green
- historical decision-context experiment parity: `2/2` green
- TypeScript lint: green
- skill length remains below the skill-creator progressive-disclosure ceiling

## Next gate

Commit v8 before defining another unseen non-approval task. The support-routing family is now seen and must not be reused as the promotion holdout. Pin the resulting commit as a detached clean candidate, then run exact previous canonical versus v8 as two arms × three trials on the new family.
