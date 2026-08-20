# Feature-flag rollout holdout — findings

Status: **ACCEPTED; provider calls 0**.

`feature-flag-rollout-review-v0.1` was contract-locked after the canonical
candidate commit and before any model generation. It uses a dashboard
filter/disclosure/acknowledgement interaction rather than the preceding
approval dialog, and dot-separated flag keys rather than artifact filenames.

The untouched starter scores 79/85. Task facts, all state journeys,
accessibility, DESIGN grounding, evidence honesty, horizontal overflow,
clipping, and control overlap are green. Mobile, 320px, and 200% reflow fail
only the intended short atomic/control line budgets and action separation.
The 320px screenshot confirms narrow label columns, two-line `View audience`
controls, vertically fragmented owner values, and a squeezed selected-action
boundary.

The candidate source is pinned at detached commit `fb44964c…`; the previous
canonical remains pinned at `f013dbd9…`. The next experiment compares those
two exact skills at three trials each with identical task, prompt, starter,
DESIGN.md, runtime, model, effort, and timeout.
