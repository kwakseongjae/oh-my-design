# Reflow integrity canonical candidate — findings

Status: **CANDIDATE IMPLEMENTED; final unseen validation pending**.

The preregistered v2 activation passed the release-artifact comparison at
85/85 in 3/3 trials, versus current canonical 85/79/81. The generalized rule
is now present in canonical `skills/omd-apply/SKILL.md` as one additive
`reflow-integrity closure`.

The candidate contains no benchmark selector, task name, brand, filename, new
token, or prescribed component. It asks the agent to allocate reading width
before changing text behavior, forbids `nowrap` when it creates overflow or
clipping, protects generated labels and atomic identifiers, and preserves
decision containment and target emphasis. Acceptance is stated as seven
observable zero-defect outcomes.

Focused skill-contract and activation-isolation tests pass, as does TypeScript.
The prior canonical remains available at detached commit `f013dbd9…` for an
exact previous-versus-candidate comparison. The candidate is not yet a public
winner or final canonical release: another unseen task family must pass
Reliability@3 without a guardrail regression.
