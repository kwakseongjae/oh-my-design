# Harness efficiency replacement — 1.9.15 findings

Executed once on 2026-07-23 under the frozen preregistration. All 18 fresh
cells in `/tmp/u1915` completed without retry, resume, or unplanned
intervention.

## Disposition

Reject candidate promotion and mark 1.9.15 calibration failed.

- 18 scheduled / 18 attempted / 18 valid completed
- exact `claude-opus-4-8` / xhigh attribution for every cell
- candidate specialist attribution 18/18 calls, Agent errors 0
- candidate first product write maximum 364,193ms, below the 450,000ms gate
- candidate Evidence & Unknown 9/9
- authored verification programs and replacement verifiers 0
- infrastructure, sandbox, and cwd failures 0
- only `index.html` changed in every cell

The execution and authority repairs are stable. Promotion nevertheless fails
the preregistered `no Reliability@3 task loss` rule: the candidate gains
Incident Operations but loses Pricing.

## Quality and reliability

| metric | portable | repair harness |
|---|---:|---:|
| valid cells | 9/9 | 9/9 |
| UI-Resolved | 7/9 (77.8%) | 8/9 (88.9%) |
| mean objective score | 82.67 | 84.11 |
| median objective score | 85 | 85 |
| Evidence & Unknown | 8/9 | 9/9 |
| overall Reliability@3 tasks | 2/3 | 2/3 |

Paired objective outcomes are 2 harness wins / 6 ties / 1 loss. The mean
objective lift is +1.70 percentage points and the UI-Resolved lift is +11.11
points, but the hierarchical 95% interval is -33.33 to +66.67 points. This is
internal calibration evidence, not a public superiority claim.

Task-level Reliability@3 is the binding result:

| task | portable | repair harness | result |
|---|---:|---:|---|
| Pricing | 3/3 | 2/3 | candidate loss |
| Onboarding | 3/3 | 3/3 | tie |
| Incident Operations | 1/3 | 3/3 | candidate win |

Operations trials 1 and 2 are objective wins of +9 and +8 points. The repair
harness preserved the primary-action/radius/evidence contracts that portable
missed. Trial 3 tied at 81/85 because both artifacts missed the grounded
primary-action color.

Pricing trial 3 is the only candidate loss. It scored 81/85 after using
`signal-orange` `#E7683D` as 13px status text on white. The external evaluator
measured 3.25:1, causing a serious `color-contrast` violation and the
accessibility critical gate to fail. Every other task contract, interaction,
viewport, keyboard, design-grounding, and evidence check passed.

## Efficiency

| metric | portable | repair harness | harness ratio |
|---|---:|---:|---:|
| median wall time | 474,092ms | 380,104ms | 0.802x |
| P90 wall time | 570,040ms | 413,304ms | 0.725x |
| median uncached tokens | 104,232 | 116,653 | 1.119x |
| P90 uncached tokens | 116,690 | 130,952 | 1.122x |
| median first product write | 301,489ms | 322,733ms | 1.070x |

The candidate is within both preregistered efficiency ceilings and is about
20% faster at the median for about 12% more uncached tokens. It is not promoted
because quality/reliability gates precede cost tradeoffs.

## Root cause and next bounded patch

The canonical skill already states 4.5:1 for normal text and says an accent
token is not automatically safe for small text. In the failed run the provider
also reported contrast as unresolved, but still shipped the high-risk pairing.
The missing contract is therefore not another numeric threshold. It is a
fail-closed semantic-color decision rule:

1. unmeasured accent-on-surface contrast may not be used for meaningful small
   text;
2. preserve the semantic accent as a non-text indicator, border, or icon and
   pair it with an `ink` label when text contrast is unproven;
3. `unresolved` means the risky pair is removed before delivery, not merely
   disclosed afterward;
4. specialists must call out every newly authored semantic foreground/background
   pair before the main agent edits.

1.9.16 should change only this semantic-color authority boundary, add focused
contract regressions, and run one fresh Pricing harness recovery. A full
replacement matrix remains locked until that recovery passes 85/85 with exact
model/agent attribution, first write within budget, Evidence & Unknown pass,
and zero authored verifier.

## Reporting limits

- Internal Harness Track only.
- No frontier, best-skill, global-rank, or model superiority claim.
- The completed matrix is immutable and must not be retroactively fixed.
- A future recovery does not change the 1.9.15 denominator or result.
