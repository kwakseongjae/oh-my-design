# Editorial-brief reflow v11 Grok validation — 1.9.167

## Decision

Promote v11. All six cells are valid, v11 resolved all three trials, won every paired comparison, and passed the preregistered Reliability@3 gate without a protected behavior, evidence, accessibility, hierarchy, or scoped reflow regression.

## Result

| Arm | Trial scores | UI-Resolved | Reliability@3 | Median | Mean |
| --- | --- | ---: | ---: | ---: | ---: |
| previous canonical | 81, 83, 81 | 0/3 | 0% | 81 | 81.67 |
| reflow v11 | 85, 85, 85 | 3/3 | 100% | 85 | 85 |

- paired v11 W/T/L: `3/0/0`
- mean wall time: previous `191,399 ms`; v11 `150,281 ms` (descriptive only, `21.5%` lower)
- mean reported non-cached tokens: previous `72,009`; v11 `68,429` (descriptive only, `5.0%` lower)
- evidence honesty: `6/6` green
- function, state, keyboard, accessibility, target hierarchy, protected hooks, overflow, clipping, and overlap: `6/6` green
- provider, timeout, quota, retry, fallback, repair, replacement, and model-substitution failures: `0`
- requested/reported model: `cursor-grok-4.5-high` / `Cursor Grok 4.5 High`, `6/6`

## Repeated paired difference

Every previous trial left the relational compact-control copy `Preserve original source-note context` wrapped at 320px. Previous trials 1 and 3 also wrapped it at the 200% surrogate. Previous trial 2 repaired 200% but still failed 320px. No previous trial reached UI-Resolved.

Every v11 trial applied the declared label/metadata role, removed residual desktop column widths on the mobile mapping rows, recovered outer insets using declared spacing tokens, and preserved exact identifiers. All candidate trials recorded zero scoped text wraps and zero token fragmentation at 390px, 320px, and 200%.

The multiline display heading remained governed by its declared 34/38 mobile role and was not scored, shrunk, nowrap'd, abbreviated, or rewritten. This confirms that the v11 result comes from closing the actual one-line contract rather than gaming the former broad-scope oracle.

## Verification honesty

Candidate final messages did not claim browser proof they did not possess. Each reported browser/computed reflow and focus geometry as unresolved while distinguishing source-derived width work. The post-run deterministic evaluator independently proved the final DOM and computed geometry. This aligns the skill's delivery honesty with the benchmark's external acceptance rather than substituting prose for measurement.

## Promotion boundary

v11 is promoted for the explicit-scope non-approval reflow family. It is not yet a universal 2.0.0 release claim. The next gate is transfer, not another wording iteration on this task:

1. freeze editorial-brief as seen and never reuse it for promotion;
2. run one new explicit-scope non-approval family with different content length and layout pressure;
3. require v11 UI-Resolved 3/3 and no paired loss again;
4. only then fold the promoted outcome-table/reflow contract into the next release-candidate benchmark slice.
