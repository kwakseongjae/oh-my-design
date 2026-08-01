# Broadcast-segment reflow v11 Grok transfer — 1.9.169

## Decision

Do not fold v11 into the release-candidate slice yet. The candidate had no paired loss and resolved one trial, but failed the preregistered transfer requirement of UI-Resolved 3/3.

## Result

| Arm | Trial scores | UI-Resolved | Reliability@3 | Median | Mean |
| --- | --- | ---: | ---: | ---: | ---: |
| previous canonical | 81, 81, 81 | 0/3 | 0% | 81 | 81 |
| reflow v11 | 85, 81, 81 | 1/3 | 33.3% | 81 | 82.33 |

- paired v11 W/T/L: `1/2/0`
- mean wall time: previous `196,363 ms`; v11 `203,759 ms` (descriptive only, `3.8%` higher)
- mean reported non-cached tokens: previous `79,310`; v11 `83,326` (descriptive only, `5.1%` higher)
- evidence honesty, function, state, keyboard, accessibility, target hierarchy, protected hooks, overflow, clipping, and overlap: `6/6` green
- provider, timeout, quota, retry, fallback, repair, replacement, and model-substitution failures: `0`
- requested/reported model: `cursor-grok-4.5-high` / `Cursor Grok 4.5 High`, `6/6`

## Stable improvement and remaining failure

All six outputs removed identifier token fragmentation. The previous arm nevertheless left the dynamic state summary `Mode: Rundown sequence · notes off` wrapped at 320px and 200% in all three trials. One previous trial also left `Preserve original rundown-note context` wrapped in both views.

v11 trial 1 correctly classified both dynamic state and relational compact-control copy as declared 12/17 label/metadata roles, recovered outer insets, and produced zero scoped wraps at 390px, 320px, and 200%.

v11 trials 2 and 3 did not classify the dynamic state summary. Both retained its inherited 16/25 body role and left it wrapped at 320px and 200%. Trial 2 also retained the compact-control copy as a wrapping scoped row. The four-column segment mapping itself was repaired in all v11 trials; the transfer failure is therefore a missed scope/type-role inventory, not failure to stack the mapping rows.

## Verification-contract failure

The v11 outcome-table requirement was not operationally closed:

- none of the candidate final messages emitted the required item-level outcome table;
- trials 2 and 3 claimed source-derived inline budgets passed while omitting the dynamic state row;
- trial 2 additionally omitted the relational compact-control row from its claimed closure;
- the deterministic post-run evaluator exposed those omissions.

The next bounded delta must make the pre-edit scope inventory explicit and mandatory: dynamic state output and relational compact-control naming copy must each receive a row before any CSS edit, and every scoped row must map to a declared type role plus a final selector. A prose summary cannot substitute for the row set.

## Boundary

The editorial v11 promotion remains valid for that seen explicit-scope family, but this transfer result blocks a broader release claim. Do not rerun or retune this seen broadcast task for promotion. Use it only as a provider-free diagnostic after the bounded scope-manifest delta, then lock a new unseen transfer task for the next scored gate.
