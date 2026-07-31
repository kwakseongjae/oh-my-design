# Feature-flag canonical candidate validation — preregistration

## Question

Does the exact canonical candidate containing `reflow-integrity closure`
generalize to an unseen feature-flag dashboard and outperform or match the
exact previous canonical without a functional, evidence, accessibility,
DESIGN, overflow, clipping, generated-label, or decision-hierarchy regression?

## Frozen comparison

- Task: `feature-flag-rollout-review-v0.1` `0.1.0`
- Previous canonical: `omd-portable-jade`, commit `f013dbd9f94a1e018f7cf8a4e500207fe982b00a`
- Candidate: `omd-portable-reflow-candidate`, commit `fb44964c5e177fc6fd55f1dd8bb0c29375132ff9`
- Runtime/model: Cursor / registered Grok 4.5 High
- Effort high; timeout 900 seconds; 3 trials per arm
- Concurrency 1; fixed 120-second inter-cell pacing
- Retry, fallback, repair, replacement, and model substitution forbidden
- Attribution: Internal registered display name only

Task, core prompt, starter, DESIGN.md, activation, runtime, model, effort, and
timeout must match all cells. The sole intended factor is the exact installed
skill tree from previous canonical versus candidate.

Order: previous→candidate, candidate→previous, previous→candidate.

## Decision boundary

The candidate becomes accepted canonical evidence only if it reaches
Reliability@3 100%, has no guardrail regression, and has no paired objective
loss. A repeated new failure rejects or revises it. A deterministic tie with a
material visual difference may trigger anonymous owner review; objective
failure or objective ceiling needs no owner review. Results remain internal and
cannot support a public model claim.
