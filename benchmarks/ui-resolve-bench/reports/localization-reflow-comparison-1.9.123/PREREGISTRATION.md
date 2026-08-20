# Localization reflow activation comparison — preregistration

## Question

Does one bounded reflow-integrity activation paragraph improve exact current
OmD on an unseen localization handoff task without changing the installed skill
or regressing function, evidence, accessibility, DESIGN grounding, or decision
containment?

## Frozen comparison

- Task: `localization-bundle-handoff-v0.1` `0.1.0`
- Control: `omd-portable-jade`
- Experimental: `omd-reflow-integrity-experimental`
- Exact source commit for both:
  `f013dbd9f94a1e018f7cf8a4e500207fe982b00a`
- Expected installed skill SHA for both:
  `d7a890ac08f8a4cce8c541b186039c9fcd4245a363f7f97132a2bbf8f46f52d5`
- Runtime/model: Cursor / registered Grok 4.5 High
- Effort: high
- Timeout: 900 seconds
- Trials: 3 per arm
- Concurrency: 1
- Inter-cell pacing: 120 seconds
- Retry, fallback, repair, replacement, and model substitution: forbidden
- Attribution: Internal registered display name only

Task version, core prompt, starter, DESIGN.md, installed skill, runtime, model,
effort, and timeout must match across all six cells. Only the preregistered
activation text may differ.

Order is balanced by trial:

1. control → reflow
2. reflow → control
3. control → reflow

## Outcomes

Primary:

- paired objective W/T/L
- UI-Resolved@1 and Reliability@3 per arm
- registered text-geometry checks on mobile, 320px, and 200%

Guardrails:

- protected hook exactness and all three state journeys
- evidence honesty and no unsupported claims
- accessibility and keyboard traversal
- DESIGN.md token grounding
- exact decision-role count, containment, order, emphasis, distinction, and
  action separation

## Decision boundary

- Promote the paragraph into a new canonical candidate only if it improves the
  repeated text-geometry cluster and does not create a guardrail regression.
- Do not promote on compute differences or one isolated win.
- If deterministic results tie but screenshots expose a real subjective
  difference, prepare an anonymous owner review.
- If both arms fail the same geometry cluster, reject or rewrite the
  hypothesis before using another unseen validation task.

This experiment is internal and cannot support a public model claim.
