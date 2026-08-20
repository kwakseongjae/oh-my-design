# Opus 4.8 paired task matrix — 1.9.3 replacement 2 findings

Run on 2026-07-22 against the preregistration in this directory.

## Disposition

All six scheduled cells completed and are valid. Every cell used exact
`claude-opus-4-8`/xhigh through first-party subscription OAuth, returned a final
response, changed only `index.html`, produced evaluator output, and recorded
zero infrastructure, sandbox, and cwd errors. The `acceptEdits` runner inside
the native strict sandbox resolved the permission failure that stopped the two
earlier calibrations.

This is a valid internal patch-selection calibration, not leaderboard evidence.
One trial on three public development tasks cannot support reliability,
generality, superiority, or frontier claims.

## Outcome

| task | Raw | OmD | resolved pair | Raw / OmD wall | Raw / OmD first write |
|---|---:|---:|---:|---:|---:|
| Pricing | 62 / 85 · fail | 66 / 85 · fail | tie | 787,584 / 512,943ms | 259,870 / 251,796ms |
| Onboarding | 83 / 85 · fail | 77 / 85 · fail | tie | 769,261 / 358,316ms | 358,505 / 167,655ms |
| Operations | 81 / 85 · pass | 85 / 85 · pass | tie | 525,848 / 517,619ms | 208,365 / 270,244ms |

- UI-Resolved: Raw 1/3, OmD 1/3; descriptive lift 0 percentage points.
- Resolved win/tie/loss: 0 / 3 / 0.
- Mean objective score: Raw 75.33, OmD 76.00 (+0.67 points).
- Per-task objective deltas: +4, -6, +4 points.
- Mean wall time: Raw 694,231ms, OmD 462,959ms (OmD -33.31%).
- Mean uncached tokens: Raw 129,069, OmD 96,559 (OmD -25.19%).
- Mean first product write: Raw 275,580ms, OmD 229,898ms (OmD -16.58%).
- Mean provider price equivalent: Raw $2.9226, OmD $1.9287 (OmD -34.01%).
- Recoverable verifier errors: one Raw and one OmD cell; infrastructure errors:
  zero across all six.

Provider price equivalent is Claude Code telemetry, not proof that the
subscription account was billed those amounts. Efficiency deltas are
descriptive and particularly unstable at one trial.

## Failure clusters

### Pricing

Both conditions expanded a protected two-item FAQ. Raw rendered three and OmD
rendered four, failing exact hook count and state-contract gates. Both used the
orange accent as small text on a light surface below WCAG AA. Raw additionally
overflowed and clipped its nav action at the 200% zoom surrogate; OmD passed all
responsive geometry.

### Onboarding

Raw preserved every functional, accessibility, design, and evidence gate but
its workspace input overlapped the submit button at the 200% zoom surrogate.
OmD preserved those same non-responsive gates but put a skip link at
`left:-9999px`; the frozen geometry contract records that focusable control as
clipped at every viewport. The accessible intent does not override the frozen
acceptance rule.

### Incident operations

Both conditions were UI-Resolved. Raw scored 81 because the evaluator's primary
action color observation missed the required computed value. OmD scored 85 and
passed every objective check.

## Patch decision

The earlier late-first-write hypothesis is not supported across this matrix.
OmD wrote 16.58% earlier on average and was materially faster on onboarding;
only operations remained later than Raw. Do not add a universal earlier-edit
rule from the single incident observation.

The repeated cross-task defect is acceptance-contract drift before delivery:
protected hook cardinality, small-text contrast, and frozen 320/200% geometry.
The next bounded product patch should therefore require an initial protected-
contract ledger and one final viewport/contrast pass before aesthetic expansion.
It must not expose hidden evaluator implementation details or force a benchmark-
specific DOM shape.

## Agent track implication

These were intentionally skill-only cells. Specialist role absence was not an
error and no role was silently attributed. A separate Harness Track should
measure whether `omd-ux-writer` and `omd-ux-engineer` advisories reduce hook,
contrast, and geometry failures after controlling model, task, and budget. It
must not be merged into this paired Skill Lift calibration.

