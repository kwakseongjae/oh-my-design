# Audit-export reflow v5 Luna validation — findings

Status: **COMPLETE — v5 rejected**.

## Result

All six preregistered cells completed validly. There were no retries,
fallbacks, repairs, replacements, model substitutions, timeouts, or provider
failures.

| Trial | Previous | v5 | Paired result |
| --- | ---: | ---: | --- |
| 1 | 81/85 · not resolved | 77/85 · not resolved | v5 loss |
| 2 | 79/85 · not resolved | 81/85 · not resolved | v5 win |
| 3 | 79/85 · not resolved | 81/85 · not resolved | v5 win |

- Paired v5 W/T/L: **2/0/1**
- Previous UI-Resolved: **0/3**, Reliability@3 **0%**
- v5 UI-Resolved: **0/3**, Reliability@3 **0%**
- Previous median/mean score: **79 / 79.7**
- v5 median/mean score: **81 / 79.7**

The candidate fails its preregistered 3/3 release gate. The higher median does
not override zero reliability.

## What v5 changed

v5 narrowed the remaining responsive defect surface. Its second and third
trials preserved supplied artifact/destination identifiers and failed only the
compact verification label at 320px and 200% reflow; trial 2 also produced
200% horizontal overflow. Trial 1 removed the text-geometry failures but moved
target, evidence, state, and action outside the declared decision container at
all four viewports.

The previous arm failed compact-label geometry in all three trials and also
fragmented manifest/retention facts in trial 3. v5 therefore contains useful
direction, but not a shippable closure.

## Root cause

The current reflow paragraph has the right requirements but presents them as a
long unordered constraint list. The generated solutions showed two avoidance
patterns:

1. using `clamp(8px, ...)` below the declared 12px label role to force one-line
   text, or keeping the compact label at inherited 16px so it still wraps;
2. rebuilding the visual sections so they reflow, while moving semantic
   decision roles outside the original context boundary.

Both are already forbidden in prose, which means another additive sentence is
unlikely to help. The next candidate must reorganize the same bounded rule into
an ordered procedure: apply the declared label type role, recover width, reflow
the control, preserve the semantic container, then measure all viewports. It
must not add task selectors, filenames, tokens, or a new evaluator branch.

## Efficiency (descriptive only)

| Arm | Median wall | Mean wall | Median reported tokens | Mean reported tokens |
| --- | ---: | ---: | ---: | ---: |
| Previous | 375,279 ms | 373,860 ms | 854,571 | 853,388 |
| v5 | 392,751 ms | 368,222 ms | 708,957 | 796,056 |

One task × three trials is insufficient for a compute claim. The values are
retained only for future pooled analysis.

## Decision

- Do not promote `omd-portable-reflow-v5-candidate`.
- Preserve the exact candidate and this complete root as negative evidence.
- Build v6 by refactoring, not expanding, the existing `reflow-integrity
  closure` into a short ordered procedure with type-role and semantic-boundary
  invariants.
- Validate v6 on another unseen family locked after the v6 commit.
