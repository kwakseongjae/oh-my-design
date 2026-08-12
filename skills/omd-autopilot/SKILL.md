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
   Create the run-scoped `task.md` while retaining the exact user-prompt bytes
   verbatim (extra clearly labelled code observations may follow, but may never
   be presented as user authority), then run
   `autopilot-mission.cjs <project-root> <run-dir> bootstrap`. This freezes the
   initial product tree and mission budgets before any product write.
2. `AUTHORITY_GATE` — run `scripts/design-council-prime.cjs` in the run scope.
   Freeze its decision ledger before any product write.
3. `BOUNDED_COUNCIL` — dispatch no more than three evidence-required, read-only
   lanes. Do not dispatch a lane for a settled decision. A generic authorized
   greenfield mission uses only the design-system and interaction lanes;
   locale/copy or explicit external-evidence needs may add one relevant third
   lane. After the authority
   handoff reaches `PROPOSE_PLAN`, run
   `autopilot-council-plan.cjs <project-root> <run-dir>`, dispatch exactly the
   listed roles exactly once and in parallel, then collect each result once and run
   `autopilot-council-reconcile.cjs <project-root> <run-dir>`. The reconciled
   receipt is mandatory and never grants product-write authority. Every lane
   must write the exact JSON shape declared in `plan.json`. Never send a
   follow-up, retry, or reformat request for a malformed/missing adviser result;
   fail the council honestly and preserve implementation time instead.
4. `CONSEQUENTIAL_INTERVIEW` — ask zero or one batch. Ask only unresolved
   product-authority decisions that materially change acceptance or the design
   system. A sufficiently authorized prompt proceeds without a question. Never
   create, infer, or edit `council-intake.answers.json` on the user's behalf;
   that file may contain only an actual user response relayed verbatim after
   the controller has entered `CONSEQUENTIAL_INTERVIEW`.
5. `DESIGN_SYSTEM_DISPOSITION` — resolve exactly one of `reuse`, `establish`,
   `refresh`, or `surface-local-only`. A missing exact brand source is blocked.
   After the council handoff reaches `PROPOSE_PLAN`, run the installed
   `design-system-plan.cjs <project-root> <run-dir>` helper. Its
   `design-system-decision.json` receipt is mandatory before any product write.
6. `SYSTEM_PROOF` — for `establish` or `refresh`, use the contract in
   `references/design-system-contract.md`. The design-system architect may
   propose; the main agent writes. Coverage booleans are not evidence: every
   provenance/group reference must resolve to a real project or run artifact,
   and every deterministic check must point to a check receipt bound to the
   exact `DESIGN.md` hash. Do not implement the product until proof passes.
   Run `validate-project-design-system.cjs <project-root> <run-dir>`;
   only `system/proof.json` with `pass: true` authorizes `PRODUCT_BUILD`.
7. `ACCEPTANCE_PLAN` — before product admission, materialize
   `acceptance-plan.json`. Quote the exact task bytes for every journey,
   constraint, and protected unknown. Lock the real route, default/loading/
   empty/error/success/disabled states, 1440/390/320/200%-reflow viewports,
   and the exact functionality/journey/responsive/keyboard/accessibility/
   honesty/design-conformance checks. A generic checklist is not admission.
   Preserve every positive journey and supported-item claim at equal or
   stronger semantics. An honest unavailable, unknown, deferred, or fallback
   state may coexist with a required journey, but it never satisfies or
   replaces that journey unless the prompt explicitly makes that exact item
   unavailable. For example, “start a reservation” requires a newly operable
   reservation-start state, not only a notice that reservations are
   unavailable; a stated five-locale surface requires localized core content
   in all five locales even when a secondary translation resource has an
   unavailable state. Reject the plan and revise it before product admission
   when one requirement weakens or contradicts another.
8. `PRODUCT_BUILD` — implement the requested real route and all required
   empty/loading/error/success/disabled states. Apply only proven or explicitly
   proposed project tokens. When a controller execution budget is present,
   finish authority and council work before its handoff reserve begins. The
   reserve belongs to implementation, acceptance proof, and controller
   handoff—not additional research or adviser repair. Treat zero document
   overflow at 390px, 320px, and 200%-reflow as a product requirement, and keep
   primary task controls at least 44×44 CSS px on touch viewports unless the
   control is an inline prose link or a native control whose associated label
   supplies the target. Treat state transitions as product contracts: a
   validation error moves focus to the failing control and is programmatically
   associated with it; a success status names the affected record/action and
   remains reflected in the source collection or detail state. Run contrast
   checks on enabled and disabled task controls—not only the final success
   state. A filterable collection must retain a meaningful baseline dataset
   that makes the filter outcome observable; when a native select is used, its
   selected option is both the programmatic and visible active state. If a
   progressbar role is present, keep `aria-valuenow` and `aria-valuemax`
   synchronized with the visible progress text in every state and locale.
   Never hide focusable descendants with `aria-hidden` alone: use `hidden`,
   `inert`, or remove/disable their focusability until the state opens. When an
   acceptance requirement makes an honesty boundary observable (for example
   fictional sample data or “not medical advice”), render that boundary as
   visible accessible product copy rather than keeping it only in source notes.
9. `VERIFY` — verify functionality, same-route desktop/mobile/320px/200%,
   keyboard, accessibility, responsive behavior, copy, evidence honesty and
   DESIGN.md-to-code conformance. `proof.json` schema 0.2 must bind the mission,
   acceptance plan, product-build admission, route, exact current product-tree
   SHA, repair round, every task requirement, and every quality check. Each
   atomic result needs non-empty evidence. `pass` is the conjunction computed
   from those results; prose confidence or a self-authored summary is not proof.
   “Browser unavailable”, skipped checks, or missing screenshots must be a
   failed check, never a passing substitute.
   When `.benchmark/controller-verification-policy.json` is present, the
   installed mission controller is the objective-verification authority. Every
   local proof, passing or failing, must stop at `EXTERNAL_VERIFY` before any
   repair budget is consumed; do not write delivery, start a local repair, end
   the mission, remove the policy, or invent its receipt. The host controller
   evaluates the real route and supplies the next hash-bound state. If the
   controller passes while a broader local check still fails, the remaining
   local failure may then use the same bounded repair budget.
   In this controller-owned mode, never discover, install, launch, or probe a
   local browser, Playwright/Chromium binary, HTTP server, screenshot command,
   browser harness, or GUI application. Do not spend the controller handoff
   reserve testing whether those tools exist. Finish deterministic source
   checks, write the truthful proof, advance to `EXTERNAL_VERIFY`, and return
   control immediately; the controller owns all browser execution.
10. `BOUNDED_REVISION` — the main agent may apply at most two focused repair
   rounds in the same mission. The controller writes an exclusive receipt for
   every failed proof, freezes the exact failed requirement/check IDs, and
   requires both a changed product tree and a replacement proof at the next
   round. Critics stay read-only. Unresolved BLOCK produces a failed handoff.
   A controller-authorized round is an internal continuation of the same
   one-prompt mission, not a retry or replacement. Read only its exact
   `.benchmark/controller-feedback/round-<n>.json`, preserve passing behavior,
   update the product and atomic proof for that round, and return to
   `EXTERNAL_VERIFY`. Never bootstrap a second mission to escape the findings.
11. `HANDOFF` — report implemented files, system disposition, question count,
    proof hashes, screenshots, failures, time and token coverage.

Run `autopilot-mission.cjs <project-root> <run-dir> advance` at every state
boundary. The controller rejects product edits before authority, limits
pre-proof changes to `DESIGN.md`, issues the product-build admission only after
an exact system proof and acceptance plan, recomputes atomic proof pass, and
refuses to force-pass or replay an exhausted repair budget.
Only one project-scoped Autopilot mission may be active. Continue its bounded
repair loop in the same run; never create a second run to replace, retry, or
escape an unresolved active mission. Completed and failed missions are
terminal and non-resumable.

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
- `acceptance-plan.json`
- `proof.json`, `repairs/round-<n>.json`, and screenshots
- `delivery.json`

Receipts bind the original task, repository evidence, DESIGN.md, product output,
consumer route, states, viewports and validator results. Missing proof is not a
pass.

## Guided-mode boundary

If the user explicitly asks to review journey/system/validation checkpoints or
to collaborate phase by phase, route to `omd:harness` and preserve all of its
mandatory checkpoints. Do not silently switch an active guided run to
Autopilot.
