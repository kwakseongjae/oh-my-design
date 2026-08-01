# Reflow v11 measured outcome table — 1.9.164

## Change

The canonical `omd-apply` reflow closure now requires an item-level outcome table before it can claim narrow-screen verification. This is a bounded refinement of the existing type-role and inline-size ledger; it adds no task string, selector, filename, token, evaluator branch, score weight, or CSS recipe.

Each one-line-contract item records semantic role, declared type role and source, required width, available width at 390px/320px/200%, line count at those viewports, proof quality, and pass/unresolved status. Ordinary display headings and body prose are excluded unless the product contract explicitly requires one line.

The skill may report reflow verification complete only when every scoped row passes and none is unresolved. Page width, `width:100%`, zero page overflow, screenshot inspection, and an unsupported prose claim are not item-level proof.

## Safety

- unresolved measurements remain unresolved rather than being converted to a pass;
- no valid multiline heading may be shrunk, nowrap'd, abbreviated, or rewritten for a benchmark score;
- existing type-role, width recovery, no-break, no-single-text-scroller, protected-selector, hierarchy, and target-emphasis constraints remain intact;
- new closure counters: `unmeasured_reflow_outcome_row: 0`, `false_reflow_verification_claim: 0`.

## Acceptance

- canonical skill contract: `7/7` green;
- benchmark contract suite: `46/48` green; the two red cases are the pre-existing missing Git metadata for local Taste/UI UX Pro vendor fixtures;
- TypeScript lint: green;
- historical decision-context experiment differs from canonical only by its pre-existing decision-context closure;
- diff check: green.

## Next

Commit v11 before locking a new unseen non-approval task. The next task must use explicit atomic and compact-copy text scopes, then compare exact previous canonical versus exact v11 with the same Grok 4.5 High 2×3 protocol.
