# Audio-stem reflow v12 Grok transfer — 1.9.173

## Decision

Do not fold v12 into the release-candidate slice yet. It beat the previous canonical arm in every paired trial and eliminated the scope-inventory loss, but failed the preregistered UI-Resolved 3/3 transfer gate.

## Result

| Arm | Trial scores | UI-Resolved | Reliability@3 | Median | Mean |
| --- | --- | ---: | ---: | ---: | ---: |
| previous canonical | 79, 79, 79 | 0/3 | 0% | 79 | 79 |
| reflow v12 | 85, 83, 83 | 1/3 | 33.3% | 83 | 83.67 |

- paired v12 W/T/L: `3/0/0`
- mean wall time: previous `165,247 ms`; v12 `233,830 ms` (descriptive only, `41.5%` higher)
- mean reported non-cached tokens: previous `70,966`; v12 `89,841` (descriptive only, `26.6%` higher)
- function, state, keyboard, accessibility, target hierarchy, protected hooks, evidence honesty, overflow, clipping, and overlap: `6/6` green
- provider, timeout, quota, retry, fallback, repair, replacement, and model-substitution failures: `0`
- requested/reported model: `cursor-grok-4.5-high` / `Cursor Grok 4.5 High`, `6/6`

## Stable improvement

The v12 scope manifest fixed the v11 inventory failure. All three candidate trials retained and classified the dynamic package summary `Package: Session order · checksums off`, retained the relational checksum-control copy, preserved all five stem/bus/owner mappings, and repaired the mobile fact topology. No candidate trial omitted a protected state or compact-control row.

The candidate also outscored the previous arm in every paired trial. The previous arm left multiple scoped responsive rows unresolved and remained at 79/85 in all three repetitions.

## Remaining failure

Candidate trials 2 and 3 failed only the 200% reflow geometry check. In both runs, the dynamic package summary wrapped to two lines at the CSS-zoom surrogate:

`Package: Session order · checksums off`

Both runs correctly assigned the state to the declared 12/17 label/metadata role and recovered the outer layout space, but neither final selector established the one-line rendering contract. Trial 1 kept a source-proven full-width row plus an explicit no-wrap declaration and scored 85/85 without overflow or clipping.

This is no longer a scope-inventory or topology failure. It is a repeated final-selector closure failure for a manifest row whose one-line authority was already known.

## Verification-contract failure

Trials 2 and 3 claimed source-derived inline-size budgets passed even though the deterministic evaluator measured the state row at two lines under the 200% surrogate. Their final responses did not emit the mandatory item-level reflow outcome table, so the unsupported pass claim was not exposed before delivery.

The next bounded delta should not add another inventory layer. It should require each manifest row with one-line authority to end in an explicit selector-level rendering decision after space recovery: either measured one-line output, a source-proven no-wrap declaration with no overflow/clipping, or an honest unresolved row. A prose statement that the budget passes cannot substitute for the selector declaration or measured result.

## Boundary

Do not rerun or retune this seen audio task for promotion. Use it only as a provider-free diagnostic for the bounded final-selector closure delta, then lock a new unseen transfer task for the next scored gate.
