# Practitioner calibration — 1.9.93 findings

Status: **accepted; candidate retained, judge plane not calibrated**.

All three exports passed exact intake: 3 families, 8 comparisons, and 32 axis
judgments.

On ship preference, the practitioner selected the 1.9.78 visual-equity
candidate four times, the preceding control once, tie twice, and both-fail
once. Incident favored the candidate 2/2. Locale produced one candidate
preference, one tie, and one both-fail. Onboarding produced one candidate, one
control, and one tie. This supports retaining the patch; it does not establish
general superiority because the sample was uncertainty-selected and contains
one practitioner.

The automated modal matched the practitioner on only:

- functionality: 3/8 (37.5%);
- usability: 2/7 (28.57%);
- fidelity: 1/7 (14.29%);
- ship preference: 1/8 (12.5%).

Therefore the current Grok automated judge plane remains useful for triage and
disagreement detection only. It must not decide a winner or contribute public
reviewer counts. Any judge-prompt revision must be evaluated on new holdout
tasks, not rescored on these seen examples.

Focused reviewer tests are 27/27. TypeScript and production build pass. The
locked private result is `/tmp/u1992-private/calibration-summary.json`.
