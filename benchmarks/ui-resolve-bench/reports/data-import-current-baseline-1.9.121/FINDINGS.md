# Data import mapping current-skill baseline — findings

Status: **COMPLETE; repeated reflow failure requires a bounded hypothesis**.

## Result

- 3/3 scheduled cells completed as valid runs.
- UI-Resolved@1: 0/3.
- Reliability@3: 0%.
- Objective scores: 81/85, 81/85, 77/85.
- Objective median: 95.3%; P10–P90 91.5–95.3%.
- Evidence and unknown handling: 3/3 passed.
- Choice, toggle, and form journeys: 3/3 passed.
- DESIGN.md token grounding: 3/3 passed.
- Accessibility: 3/3 passed.
- Retry, fallback, repair, replacement, and model substitution: 0.

## Repeated defect

All three runs preserved the literal `customer-update-july.csv` but split it
across two lines at 320px and 200% zoom. The registered checks failed
`no_mid_token_fragmentation` and
`short_atomic_text_within_line_budget` in exactly those two viewports.

All three narrow screenshots were inspected. The failure is visible and matches
the user's earlier rejection of short operational identifiers and labels that
break into two lines on narrow screens. It is not horizontal overflow, clipping,
or a missing-control failure; those checks passed.

Trial 3 also placed the `state` and `action` decision roles outside the declared
context container, failing `roles_inside_container` in all four viewports.
Trials 1 and 2 kept the context boundary intact, so this is a secondary
1/3 structural regression rather than the primary repeated cluster.

## Interpretation

The current skill's acceptance packet checks horizontal overflow, clipped
controls, and control overlap at 320px and 200%, but it does not explicitly
close short atomic text geometry. A page can therefore look broadly responsive
while a filename, ID, status, or short action label fragments in a way the user
reads as broken hierarchy.

The smallest general hypothesis is a `reflow integrity closure`:

1. identify user-visible atomic identifiers and short control/state text whose
   product contract requires one-line integrity;
2. inspect them at 320px and 200%;
3. preserve exact content and resolve fragmentation through existing layout,
   width, spacing, and declared typography roles rather than `word-break`,
   hidden text, invented abbreviations, or overflow;
4. when the task declares one decision-context boundary, keep target, evidence,
   state, and action inside it through the final DOM edit.

This hypothesis is broader than the FieldMerge filename and directly covers the
previous owner-observed deletion-screen failure class.

## Decision

Do not silently patch the three completed cells and do not use this now-seen
task as final validation. Create one bounded non-canonical activation delta,
then compare it with the exact current skill on a different unseen family whose
short identifiers and decision boundary are preregistered before generation.

Canonical `omd-apply`: **unchanged at this checkpoint**.

## Descriptive compute

- Wall time: 343,093 / 271,216 / 299,087 ms; median 299,087 ms.
- Tokens: 108,380 / 70,649 / 79,246; median 79,246.
- Both 120-second pacing checks and all three runtime preflights passed.

Compute is descriptive only and is not a public model or cross-provider claim.
