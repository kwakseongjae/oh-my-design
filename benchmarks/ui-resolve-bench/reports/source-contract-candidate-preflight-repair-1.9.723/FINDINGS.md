# 1.9.723 — provider-sealed candidate preflight repair

## Outcome

The 1.9.722 hard stop exposed a lifecycle gap: the model had to consume the
exactly-once static closure only after editing the product, so an exact-selector
mistake could be discovered only after the sole allowed edit. A pre-edit
candidate check also needed a deterministic binding to the bytes eventually
applied to the product.

1.9.723 adds a provider-zero repair:

- `static-preview` checks complete candidate product bytes with the same static
  evaluator used by `static-close`, without mutating the product or sealed
  closure artifact.
- Each preview overwrites a separate receipt with its pass/fail state, candidate
  hash, source-contract hash, and inventory hash. A failed retry therefore
  cannot reuse an earlier green receipt.
- Provider-sealed `static-close` refuses to consume the closure unless the final
  product bytes exactly match the latest passed candidate receipt.
- Prepared benchmark instructions now require source packet → candidate preview
  until green → one exact-byte product edit → one static close.

## Verification

- Focused unit/contract/benchmark/install tests: 352 passed, 2 skipped, 0 failed.
- TypeScript lint/type-check: passed.
- The dirty-tree full suite retained four attribution-sensitive reds because the
  user-owned `web/public/llms-full.txt` is intentionally not staged or changed;
  this does not override the focused green result or qualify as publishable
  clean-source evidence.
- Provider calls: 0.
- Model exposures: 0.

## Claim boundary

This is a local lifecycle repair, not model transfer evidence. The frozen
1.9.722 tasks remain unexecuted or terminal exactly as recorded and must not be
replayed. A fresh task set must also repair the cascade-ineffective contrast
selector discovered in the old task generator before any new provider run.
