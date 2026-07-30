# Reduced-human selection — 1.9.91 findings

Status: **accepted, Internal diagnostic**.

The fresh 1.9.90 automated review root completed 54/54 isolated invocations
with no stop, retry, response repair, fallback, or model substitution. Its 27
primary votes and 27 independent reversals cover nine task×trial pairs.

Across the full round, slate has a small rating lead on all four axes, but every
95% rating interval and rank interval overlaps. Reversal consistency is
74/108 (68.52%). This is not sufficient for a patch winner claim.

The deterministic selector identifies seven unresolved pairs and one seeded
audit pair; one otherwise resolved pair remains out of human review. These
eight pairs collapse to three task-family review pages, so a practitioner does
not need to score all 18 generated cells or 27 automated judge units.

Focused reviewer tests are 23/23. TypeScript and production build pass. The
private selection manifest is
`/tmp/u1990-private/human-escalation-selection.json`.
