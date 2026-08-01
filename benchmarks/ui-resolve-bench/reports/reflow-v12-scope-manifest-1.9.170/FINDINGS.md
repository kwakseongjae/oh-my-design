# Reflow v12 scope manifest — 1.9.170

## Decision

Add one bounded contract delta before the next unseen scored transfer: freeze the full one-line reflow scope before the first CSS edit, then require identity/cardinality parity with the final outcome table.

## Why

The broadcast v11 transfer showed a stable omission rather than a missing CSS recipe. All v11 trials repaired the four-column mapping, but two of three omitted the dynamic state summary from type-role closure and one also omitted the relational compact-control copy. Those outputs then claimed source-derived reflow success without producing the required row table.

## Contract delta

- inventory static and dynamic one-line rows from both DOM and state-rendering source before CSS work;
- include state render functions, template literals, and state maps that populate visible summary nodes;
- include relational compact-control copy by its paired-control relationship rather than element tag;
- record source selector, origin, semantic role, one-line authority, declared type role, current selector, and planned final selector;
- exclude ordinary display headings and body prose unless the product contract explicitly requires one line;
- preserve row identities and cardinality through the edit;
- require the outcome table to contain the exact same identity set plus final controlling selector;
- fail closure on missing dynamic-state rows, missing relational-control rows, or manifest/outcome row loss.

No task strings, benchmark selectors, filenames, evaluator weights, colors, component recipes, or font values were added to the skill.

## Verification

- focused canonical contract: `7/7` pass;
- TypeScript lint: pass;
- full unit suite: `347` pass, `1` skipped, `3` infrastructure red;
- the three red tests are unrelated vendor-fixture conditions: one pinned-vendor preparation timeout and two pre-existing non-Git Taste/UI UX Pro fixture directories under `/tmp/omd-ui-skills-bench/vendors`;
- canonical and experimental mirrors contain the same new scope-manifest contract.

## Next

Commit and pin exact v12. Use the seen broadcast task only for provider-free contract diagnostics. Lock a new unseen non-approval task with different state wording and layout topology before provider generation, then compare exact previous canonical versus v12 under the same Grok 4.5 High 2×3 contract.
