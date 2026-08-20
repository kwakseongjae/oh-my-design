# 1.9.2 semantic-contract calibration

Status: pass. This is local evaluator calibration, not a model comparison.

## Saved-output checks

| Fixture copy | Previous isolated failure | v0.3 result |
|---|---|---|
| onboarding raw trial 1 | universal nav requirement | 85/85, pass |
| onboarding raw trial 3 | none | 85/85, pass |
| operations raw trial 1 | live count misclassified as proof | 81/85, pass |
| operations raw trial 2 | none | 81/85, pass |
| pricing raw trial 1 | serious color contrast | 81/85, accessibility fail |

The copies live under `/tmp/ui-resolve-semantic-calibration-1.9.2`; canonical
1.9.1 scores and records were not changed.

## Negative controls

| Mutant | Result |
|---|---|
| incorrect annual price | 80/85, billing state gate fail |
| digest toggle no-op | 80/85, toggle state gate fail |
| severity filter no-op | 76/85, filter state gate fail |

Focused semantic helpers pass 12 unit tests. The next scored matrix must prepare
fresh workspaces at task contract version `0.3.0`; it must not re-label the
saved 1.9.1 runs.
