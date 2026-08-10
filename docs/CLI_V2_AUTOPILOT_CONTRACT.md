# OmD 2.0 — One-prompt Autopilot contract

Status: normative target for the 2.0.0 release train. This document does not
claim that the target has already been achieved.

## Product promise

After one OmD installation, one sufficiently authorized natural-language
prompt in a blank application repository can produce:

1. a project-owned `DESIGN.md`, when a project system is warranted;
2. a working product surface on the real consumer route; and
3. a hash-bound verification and delivery report.

The user does not have to select a reference, name a skill, run a design
harness, or configure tokens first. "Zero setup" does not mean that OmD itself
is not installed.

This is a new **Autopilot** workflow. The existing `omd:harness` remains the
guided workflow and keeps its three mandatory user checkpoints. Autopilot must
never claim that it approved or bypassed a guided-harness checkpoint.

## Entry and authority contract

Autopilot is selected by an ordinary creation request, not a slash command.
The main host agent is the only implementation owner. Specialists are
read-only advisers.

The workflow may ask at most one consequential question batch. It asks only
when an answer changes product authority, acceptance criteria, or the design
system disposition and cannot be recovered from the prompt or repository.
Fully specified benchmark prompts grant the required authority and therefore
must complete with zero follow-up questions.

The design system disposition is decided before reference selection:

| Disposition | When it applies | Product effect |
| --- | --- | --- |
| `reuse` | A valid compatible root `DESIGN.md` exists | Apply it without reopening settled choices |
| `establish` | The user explicitly requests or delegates a project system | Build a new project-owned system |
| `refresh` | The user explicitly requests replacement, or an existing system is proven stale | Propose a bounded replacement with provenance |
| `surface-local-only` | The task is a narrow repair, or the user explicitly declines a project system | Keep decisions local; do not promote them as project facts |
| `interview` | A broad greenfield request lacks system authority | Ask project system vs local contract in the one question batch |
| `blocked` | An exact external brand claim lacks authoritative evidence | Stop rather than synthesize a substitute |

## Autonomous state machine

```text
DETECT
→ EVIDENCE_SNAPSHOT
→ AUTHORITY_GATE
→ BOUNDED_COUNCIL
→ CONSEQUENTIAL_INTERVIEW (zero or one batch)
→ DESIGN_SYSTEM_DISPOSITION
→ DESIGN_SYSTEM_BUILD_OR_REUSE
→ SYSTEM_PROOF
→ PRODUCT_BUILD
→ SAME_ROUTE_VERIFY
→ BOUNDED_REVISION (maximum two)
→ HANDOFF
```

No product file may be written before the authority and design-system
disposition receipts exist. A failed system proof blocks product
implementation. A failed final proof produces an honest failed handoff; it is
not force-passed.

## High-quality project design system

The system is derived first from the product brief, real route and component
inventory, user journeys, states, protected behavior, locales, and assets.
Quality-graded references are supporting evidence, never a product-fact
substitute.

The system proof requires:

- semantic color roles with contrast evidence;
- typography roles, metrics, fallback and loading policy;
- spacing, density, radii, elevation and layout rules;
- responsive behavior at desktop, mobile, 320px and 200% zoom;
- component anatomy, variants, interaction states and recovery states;
- motion and reduced-motion behavior;
- voice and locale guidance;
- asset, font and license provenance;
- token-reference closure and code-to-token conformance;
- an unresolved list where unknown means absent; and
- `[FILL IN]` rather than fabricated facts in DESIGN.md sections 11–13.

Every consequential field is classified as one of:

1. `prompt-fact`
2. `repository-fact`
3. `verified-reference-inspiration`
4. `agent-proposed-greenfield-decision`
5. `unresolved`

Agent-proposed greenfield values are legitimate project proposals. They must
not be described as verified company or product facts.

## Roles and ownership

- Main host agent: mission owner, DESIGN.md writer, product implementer, repair
  owner, and delivery owner.
- Design-system architect: read-only system proposal, coverage and provenance.
- Product/context, interaction/IA, art direction, copy/contrarian advisers:
  read-only and dispatched only when the decision ledger requires them.
- Deterministic validators, designer review, slop/UX audit, accessibility and
  final QA: evidence producers, never product implementers.

Autopilot may dispatch at most three council lanes and may run at most two
bounded repair rounds. A specialist edit to product files is a contract
failure.

## 2.0 promotion gates

1. Natural-language routing and four-channel package/doctor parity.
2. Selective authority escalation: required questions are never skipped and
   unnecessary questions are not asked.
3. Parseable high-quality DESIGN.md, complete provenance and implementation
   conformance on every scheduled task.
4. From-scratch UI reliability across function, usability, accessibility,
   responsive behavior and recovery states.
5. Positive paired lift over model-only and first or statistically tied with
   the strongest eligible portable UI skill under the same prompt.
6. Nonnegative transfer on Luna, Terra and Sol at the locked comparison effort.
7. A non-dominated quality, human-burden, wall-time and token result.
8. At least twelve hidden greenfield task families and six authority-perturbation
   tasks, each calibrated with valid alternatives and targeted mutants.
9. Blind practitioner review of both ship preference and design-system quality.
10. Reproducible packages, independent task audit, downloadable failures and
    claim-policy compliance.

The first product preview gate is 12 hidden tasks × 5 trials with five blind
practitioners. The stricter public `Verified` benchmark remains a later 24+
task × 10 trial program. Passing the preview gate does not authorize an
"industry best" claim.

## Fair one-prompt comparison

Portable arms receive identical prompt bytes, blank framework shell, model,
effort, tool permissions, timeout and network policy:

- model only;
- Anthropic Frontend Design;
- Impeccable prompt-only;
- UI UX Pro Max;
- Taste on its documented landing/marketing scope only; and
- OmD 2.0 Autopilot.

No arm receives a task-specific DESIGN.md, tokens, component library, example
UI, hidden helper, reference preselection, or harness configuration. Hook- and
browser-assisted workflows are reported separately as a Harness Track.

Primary metrics are critical functionality, hidden journey success, recovery,
keyboard/accessibility, responsive robustness, brief/asset fidelity, evidence
honesty, system quality, DESIGN.md↔code conformance, autonomy burden, wall time
and token use. Mean visual scores are diagnostic, not substitutes for the
critical gates.

## Release train

- 1.9.829 — this normative reset and provider-zero contract fixtures
- 1.9.830 — natural router and design-system authority decision
- 1.9.831 — design-system provenance schema and deterministic validator
- 1.9.832 — Autopilot council and state machine
- 1.9.833 — single-owner implementation, proof and bounded repair loop
- 1.9.834 — greenfield task and evaluator schema
- 1.9.835 — provider-zero valid-solution and mutant calibration
- 1.9.836 — three-task Luna/high smoke
- 1.9.837 — bounded repair based on observed failures
- 1.9.838 — twelve-task × five-trial same-prompt skill qualification
- 1.9.839 — Luna/Terra/Sol transfer
- 1.9.840 — blind review and independent audit package
- 1.9.841 — final 2.0 readiness audit

Marketing remains on the current bounded claims until these gates pass.
