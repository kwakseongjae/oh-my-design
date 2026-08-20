# Static attribute and overlap repair — 1.9.474

This provider-free repair closes the two evaluator defects exposed by the frozen genomic transfer. `reflow-artifact.mjs` now counts declared hook cardinality from actual HTML start-tag attributes. Attribute-like text in script/style bodies no longer increments the count, while quoted and unquoted real attributes remain supported. Required and forbidden literal checks retain their original strict behavior.

The UI evaluator now excludes ancestor/descendant containment when checking collisions between focusable controls. It still reports geometric overlap between independent controls; a focusable decision region containing its own action is no longer treated as a sibling collision.

On an untouched copy of the failed r1 candidate, the repaired static helper passed the original schema 0.3 manifest. Re-evaluation removed every false overlap and raised the deterministic result from 77/85 to 81/85. The remaining red gate is real: `5 libraries · 7 read sets · 3 instrument lanes` still spans two lines at 320px and actual 200%.

Focused helper/evaluator/skill/install coverage passed 89/89 and TypeScript lint passed. The broad suite reached 529 passing and one skipped before the canonical/experimental documentation mirror was corrected; its only new failure was then fixed and retested. The three remaining broad failures are unchanged external vendor Git-root fixtures (two) and the pre-existing timeout-attribution expectation (one). Provider calls: zero. Promotion: false; the next step is an immutable exact pin followed by a shipped, model-independent consumer-browser measurement path.
