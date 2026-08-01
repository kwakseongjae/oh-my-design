# Certificate-rotation reflow v6 Grok validation — findings

Status: **COMPLETE — v6 rejected**.

## Result

All six preregistered cells completed validly. There were no retries,
fallbacks, repairs, replacements, model substitutions, timeouts, attribution
drifts, or provider failures. All six calls reported `Cursor Grok 4.5 High`.

| Trial | Previous | v6 | Paired result |
| --- | ---: | ---: | --- |
| 1 | 81/85 · not resolved | 83/85 · not resolved | v6 win |
| 2 | 77/85 · not resolved | 85/85 · resolved | v6 win |
| 3 | 77/85 · not resolved | 81/85 · not resolved | v6 win |

- Paired v6 W/T/L: **3/0/0**
- Previous UI-Resolved: **0/3**, Reliability@3 **0%**
- v6 UI-Resolved: **1/3**, Reliability@3 **0%**
- Previous median/mean score: **77 / 78.3**
- v6 median/mean score: **83 / 83.0**

The candidate wins every score pair but fails its preregistered 3/3 release
gate. It remains experimental.

## What v6 changed

The ordered type-role → width-recovery → structure-reflow → no-text-workaround
→ semantic-measurement procedure improved all three trials. It preserved the
task, interactions, accessibility, DESIGN.md grounding, evidence boundary, and
decision hierarchy in every candidate cell. Trial 2 reached the full 85/85
ceiling at all four viewports.

The two unresolved candidate trials no longer fragmented supplied certificate
or service identifiers. Their residual failures are narrower:

- trial 1: `3 supplied services · 1 rollout window` wrapped at the 200% reflow
  surrogate;
- trial 3: the same evidence line wrapped at 320px and 200%, and `Require
  dual-operator confirmation` wrapped at 200%.

There was no horizontal overflow, clipping, generated-label overflow, injected
break opportunity, single-text scroller, accessibility regression, or semantic
decision escape in the candidate arm.

## Root cause

Trial 2 recovered horizontal reading width before applying `white-space:
nowrap`: its selected-plan surface removed lateral margins and used the full
mobile row. Trials 1 and 3 retained nested card margin/padding around the short
evidence line, then allowed that line to wrap. Trial 3 also kept the toggle
heading at the inherited 16px body role.

The remaining issue is therefore not another generic nowrap rule. The ordered
procedure needs a stricter, measurable width-recovery invariant: before a short
atomic evidence/state/control label may wrap or use nowrap, remove dispensable
nested lateral margin, padding, fixed tracks, and card chrome so it receives the
full available reading row; then apply the declared compact label role and
measure again. If the declared role and full row still cannot fit, restructure
the label/control relationship without shrinking below the role.

## Efficiency (descriptive only)

| Arm | Median wall | Mean wall | Median reported tokens | Mean reported tokens |
| --- | ---: | ---: | ---: | ---: |
| Previous | 303,715 ms | 317,271 ms | 140,619 | 132,489 |
| v6 | 458,980 ms | 440,802 ms | 242,741 | 202,324 |

v6 used about 38.9% more wall time and 52.7% more reported tokens in this
one-task sample. These values are descriptive only and do not support a general
efficiency claim.

## Decision

- Do not promote `omd-portable-reflow-v6-candidate`.
- Preserve `/tmp/u19146` and this report as complete negative/recovery evidence.
- Keep `/tmp/u19145` provider-zero Luna preparation untouched; do not merge
  provider scopes.
- Build a bounded v7 by tightening the existing width-recovery step rather than
  adding task text, selectors, filenames, tokens, or evaluator-specific rules.
- Lock the next unseen non-approval family only after the v7 commit, then test
  exact previous versus v7 at Reliability@3.
