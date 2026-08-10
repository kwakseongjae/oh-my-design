---
name: omd-autopilot
description: "One-prompt autonomous product design and implementation. Use automatically for broad greenfield UI requests such as 'from scratch', '새 제품/화면을 알아서 만들어줘', or requests that delegate DESIGN.md creation. It decides whether to reuse, establish, refresh, or skip a project design system; asks at most one consequential question batch; then builds and verifies the real surface. Use omd:harness instead only when the user explicitly asks for guided checkpoints."
---

# omd:autopilot

Use this skill for an ordinary natural-language request to create a new product
surface without requiring the user to name a skill, choose a reference, or set
up the guided harness.

This is a separate workflow from `omd:harness`. Never claim to have approved or
bypassed its mandatory checkpoints.

## Ownership

The current main host agent is the only implementation owner. Specialists are
read-only advisers. They may write only inside the current run's advisory
folders and must never edit `DESIGN.md` or product files.

## State machine

1. `DETECT` — inspect the repository, real consumer route, stack, existing
   `DESIGN.md`, preferences, components, states, assets and protected behavior.
   Create the run-scoped `task.md`, then run
   `autopilot-mission.cjs <project-root> <run-dir> bootstrap`. This freezes the
   initial product tree and mission budgets before any product write.
2. `AUTHORITY_GATE` — run `scripts/design-council-prime.cjs` in the run scope.
   Freeze its decision ledger before any product write.
3. `BOUNDED_COUNCIL` — dispatch no more than three evidence-required, read-only
   lanes. Do not dispatch a lane for a settled decision. After the authority
   handoff reaches `PROPOSE_PLAN`, run
   `autopilot-council-plan.cjs <project-root> <run-dir>`, dispatch exactly the
   listed roles, then run
   `autopilot-council-reconcile.cjs <project-root> <run-dir>`. The reconciled
   receipt is mandatory and never grants product-write authority.
4. `CONSEQUENTIAL_INTERVIEW` — ask zero or one batch. Ask only unresolved
   product-authority decisions that materially change acceptance or the design
   system. A sufficiently authorized prompt proceeds without a question.
5. `DESIGN_SYSTEM_DISPOSITION` — resolve exactly one of `reuse`, `establish`,
   `refresh`, or `surface-local-only`. A missing exact brand source is blocked.
   After the council handoff reaches `PROPOSE_PLAN`, run the installed
   `design-system-plan.cjs <project-root> <run-dir>` helper. Its
   `design-system-decision.json` receipt is mandatory before any product write.
6. `SYSTEM_PROOF` — for `establish` or `refresh`, use the contract in
   `references/design-system-contract.md`. The design-system architect may
   propose; the main agent writes. Do not implement the product until proof
   passes. Run `validate-project-design-system.cjs <project-root> <run-dir>`;
   only `system/proof.json` with `pass: true` authorizes `PRODUCT_BUILD`.
7. `PRODUCT_BUILD` — implement the requested real route and all required
   empty/loading/error/success/disabled states. Apply only proven or explicitly
   proposed project tokens.
8. `VERIFY` — verify functionality, same-route desktop/mobile/320px/200%,
   keyboard, accessibility, responsive behavior, copy, evidence honesty and
   DESIGN.md-to-code conformance.
9. `BOUNDED_REVISION` — the main agent may apply at most two focused repair
   rounds. Critics stay read-only. Unresolved BLOCK produces a failed handoff.
10. `HANDOFF` — report implemented files, system disposition, question count,
    proof hashes, screenshots, failures, time and token coverage.

Run `autopilot-mission.cjs <project-root> <run-dir> advance` at every state
boundary. The controller rejects product edits before authority, limits
pre-proof changes to `DESIGN.md`, issues the product-build admission only after
an exact system proof, and refuses to force-pass an exhausted repair budget.

## Design-system decision

- Valid compatible root `DESIGN.md` → `reuse` without reopening it.
- Explicit or delegated authority to build a system → `establish`.
- Explicit replacement of an existing system → `refresh`.
- Narrow repair or explicit refusal → `surface-local-only`; never promote local
  choices as project facts.
- Broad greenfield with no authority → ask one question: project system or
  local surface contract.
- Exact official brand request with no authoritative source → block rather
  than fabricate.

Reference selection happens only after this decision and only when it supplies
useful verified inspiration. A reference never owns product facts.

## Evidence and unknowns

Classify each consequential system decision as `prompt-fact`,
`repository-fact`, `verified-reference-inspiration`,
`agent-proposed-greenfield-decision`, or `unresolved`.

Unknown means absent at the smallest boundary. Never synthesize a company fact,
font, component, metric, testimonial, price, security promise, or DESIGN.md
section 11–13. Use `[FILL IN]` for user-owned narrative facts when the schema
requires a placeholder.

## Required run artifacts

Store permanent artifacts under `.omd/runs/<run-id>/`:

- `mission.json`
- `council/decision-ledger.json`
- `design-system-decision.json`
- `system/proposal.md`, `system/provenance.json`, `system/coverage.json`
- `implementation.json`
- `proof.json` and screenshots
- `delivery.json`

Receipts bind the original task, repository evidence, DESIGN.md, product output,
consumer route, states, viewports and validator results. Missing proof is not a
pass.

## Guided-mode boundary

If the user explicitly asks to review journey/system/validation checkpoints or
to collaborate phase by phase, route to `omd:harness` and preserve all of its
mandatory checkpoints. Do not silently switch an active guided run to
Autopilot.
