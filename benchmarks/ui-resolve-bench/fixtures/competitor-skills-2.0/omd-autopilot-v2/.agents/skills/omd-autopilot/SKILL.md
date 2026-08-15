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
   When `OMD_AUTHORITY_CONTROLLER_RUN_DIR` is present, use that exact relative
   path as the one run directory; do not derive or substitute a slug.
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
   listed roles exactly once and in parallel (in bounded external-controller
   mode, execute those same lanes inline per the budget section instead of
   spawning advisers), then collect each result once and run
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
   propose; the main agent writes only run-scoped graph/provenance/coverage
   drafts. New generation, synthesis, refresh, and refactor are single-write
   Core v2: never emit legacy frontmatter or 13/15/16-section layouts. After the
   `design-system-decision.json` receipt grants `establish`/`refresh` authority,
   inspect the environment before preparing a review. When
   `OMD_AUTHORITY_CONTROLLER_RECEIPT` is present, the main agent is explicitly
   not the project owner: it must not run either approval helper, pass a
   `--reviewer`, assert `--authority-transition-approved`, calculate a hash, or
   choose a second output name. Author the three drafts once, with every
   interactive component declaring all seven state-applicability entries and
   every non-interactive component declaring only a reason (non-interactive
   error/success display variants do not require a focus-visible state).

   Before spending the single activation, validate the drafts with the
   controller's provider-free dry-check. It may be run any number of times and
   never counts against the activation budget:

   ```bash
   node $OMD_AUTHORITY_CONTROLLER_EXECUTABLE --dry-check . $OMD_AUTHORITY_CONTROLLER_RUN_DIR
   ```

   The dry-check compiles the drafts into a scratch package and verifies that
   every evidence path referenced by `provenance.json` and `coverage.json`
   (for example `council/<lane>/result.json`) exists as a real file at the
   project root. Fix every reported issue and rerun the dry-check until it
   prints `"status": "dry-check-pass"`. Only then invoke exactly once:

   ```bash
   node $OMD_AUTHORITY_CONTROLLER_EXECUTABLE . $OMD_AUTHORITY_CONTROLLER_RUN_DIR
   ```

   Both commands must be issued standalone, byte-exact as written — never
   append `;`, `&&`, `echo`, redirects, or any other text to either command.

   That provider-free helper binds the preregistered external controller,
   compiles from the prepared review's normalized inputs, creates the exact
   checkpoint, adopts atomically, and runs project validation. If it fails,
   preserve the single failure and stop system work—never create `review-v2`,
   `package-v2`, or a replacement mission. This path exists to protect the
   product-build budget; after success, move directly to the acceptance plan
   and real route, giving the explicit unavailable-information state the same
   implementation priority as default/focus-visible.

   Without that receipt, follow the ordinary human-owner flow below.
   validate the authority-neutral graph draft—without `projection` or
   `projection.sha256`—and prepare the exact non-authoritative review preview:

   ```bash
   omd design-md prepare-review <graph> --provenance <provenance> --coverage <coverage> --out-dir <review> [--migration-report <report>]
   ```

   The exact preview must be approved by the actual project owner or a
   preregistered external authority controller, never by the main agent itself:

   ```bash
   omd design-md approve-review <review>/review-request.json --reviewer <project-owner-id> --out <approval> --authority-transition-approved
   omd design-md compile <review>/input-graph.json --provenance <review>/provenance.json --coverage <review>/coverage.json --review-receipt <approval> [--migration-report <review>/migration-report.json] --out-dir <fresh> --adopt
   ```

   If the public binary is unavailable, only the installed exact-equivalent
   `prepare-design-md-core-review.cjs` and `compile-design-md-core.cjs` helpers
   with the same inputs are allowed. Never hand-write or patch `DESIGN.md`, section
   anchors, the seven `design-md:claim` declarations, any `design-md:claim-end`,
   manifest, or binding hashes; those bytes are canonical compiler-owned output.
   If the compiler demands a placeholder, precomputed, or zero projection SHA,
   fail closed; the compiler must create the first binding itself.
   Never publish into an existing, project-owned, or symlinked output directory.

   Read back and validate the fresh adopted package before project adoption.
   Compiler PASS proves only schema, Portable declaration conformance, canonical
   rendering, and binding integrity. It does not prove factual accuracy,
   provenance truth, font/asset licenses, locale behavior, accessibility, or
   visual quality. Coverage booleans are not evidence: every
   provenance/group reference must resolve to a real project or run artifact,
   and the validator computes system checks from the graph and manifest bound to
   the exact compiler-produced `DESIGN.md`. Keep provenance/coverage and the
   installed final project-system validator mandatory; never fill missing
   bindings with agent-calculated hashes. If the compiled manifest does not bind
   them, fail closed at staging. Bind and install the six exact artifacts only via:

   ```bash
   omd design-md prepare-checkpoint <fresh> --reviewer <project-owner-id> --out <checkpoint> --authority-transition-approved
   omd design-md adopt <fresh> --project-root <project-root> --checkpoint-receipt <checkpoint>
   ```

   If the receipt-gated atomic adopter is unavailable, preserve the stage and
   stop. Then run
   `validate-project-design-system.cjs <project-root> <run-dir>`. Do not implement
   the product until that proof passes.
   If refresh/refactor starts from a legacy document, run the provider-free
   migration/check first and require `dropped=0`, no unsupported promotion,
   round-trip equality, and opaque preservation under
   `extensions["dev.oh-my-design.migration"]`. The staged migration candidate is
   non-authoritative and keeps its named source `DESIGN.md` canonical until the
   explicit compile/adopt transition. Do not hand-edit legacy headings.
   Never author or edit `system/proof.json` directly. Run the installed
   `validate-project-design-system.cjs <project-root> <run-dir>` helper; the
   mission controller validates its full schema, source hashes, required
   groups/checks, outcome, and exact `DESIGN.md` binding before it authorizes
   `PRODUCT_BUILD`. A minimal `{ pass: true }` proof is an authority failure.
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
pre-proof project changes to the exact compiler-produced adopted package, issues the product-build admission only after
an exact system proof and acceptance plan, recomputes atomic proof pass, and
refuses to force-pass or replay an exhausted repair budget.
Only one project-scoped Autopilot mission may be active. Continue its bounded
repair loop in the same run; never create a second run to replace, retry, or
escape an unresolved active mission. Completed and failed missions are
terminal and non-resumable.

## Bounded external-controller budget

When `OMD_AUTHORITY_CONTROLLER_RUN_DIR` is present, the mission runs under a
hard wall-clock budget and the product route is the graded deliverable. The
design-system rigor stays intact — what changes is where the minutes go.

- Check elapsed time (`date +%s`) at every state boundary. Authority, council,
  and system work together must finish inside the FIRST 40% of the budget;
  everything after belongs to `PRODUCT_BUILD` → `VERIFY` → controller handoff.
- Dispatch NO adviser subagents in this mode. Execute the planned council
  lanes inline: the main agent authors each lane's exact JSON shape as its own
  read-only analysis from DETECT evidence. Inline lanes still never grant
  product-write authority; reconcile normally. A subagent round-trip you can
  answer yourself from the repository is budget theft from the product.
- Author the three system drafts in one pass, run the controller `--dry-check`
  until it passes, then invoke the controller once, immediately. Do not
  re-read, re-verify, or beautify drafts the compiler will normalize anyway —
  the dry-check IS the verification step, and it is free (it never counts
  against the single activation).
- The dry-check catches schema/enum violations and missing evidence files
  (every path referenced by provenance/coverage evidence must exist at the
  project root). A guessed enum or phantom evidence path wastes the single
  activation — the controller fail-closes on the first violation and there is
  no second invocation, so never invoke the real activation while a dry-check
  is still failing.
- The controller invocation must be the ENTIRE command — never append `;`,
  `&&`, `echo`, `date`, or anything else to it (sequencing voids the
  exactly-once contract). Run elapsed-time checks as their own separate
  commands before or after.
- Before invoking the controller, ensure the exact `task.md` bytes also exist
  at the project root (copy from the run directory): the adopter requires
  `<project-root>/task.md` as proof evidence.
- If authority+system work has consumed 50% of the budget before adoption,
  skip every remaining optional analysis and go straight to the smallest
  compiler-valid drafts.

## Product route order (graded-state first)

In `PRODUCT_BUILD`, implement in this exact order — a polished page missing a
required state scores zero, an honest skeleton with every state scores:

1. Semantic skeleton for the real route: landmarks, single `nav` with
   disclosure collapse, skip link targeting `#main` (never the primary CTA),
   heading order, form field ID graph (`label[for]`, `aria-describedby`
   hint+error chain, `role="alert"` errors, focusable `role="status"` success).
2. EVERY required state as machine-detectable DOM, before any visual polish.
   The graded state list is the one the TASK BYTES name — read the task
   prompt's required states first (an operations task may demand
   filtered/selected/assignment-error/assigned; a locale task may demand
   locale-selected/in-progress/complete/translation-unavailable) and give each
   of those the same priority as the generic
   default/loading/empty/error/success/disabled set. Each state gets a visible
   node with `data-state="<state-name>"`, and every task-named state must be
   REACHABLE through a real user interaction on the route (an external
   evaluator drives actual clicks and selections — a static mockup of the
   state does not count; clicking a row must visibly select it). Every entry
   in the system's honesty/unknown ledger renders as a visible
   unavailable-information node — prose disclaimers alone do not count.
3. Primary-action uniqueness: exactly one visible primary CTA (chrome or hero,
   not both), marked `data-cta="primary"`; the form submit is
   `data-cta="submit"`; repeated per-item controls are `data-cta="local"` and
   never reuse the primary verb string. No sticky/footer primary duplicates.
4. Foreground/background color PAIRS from the adopted tokens (never a lone
   accent value), decorative media `aria-hidden` and informative SVG named via
   `role="img"` + title/desc, then visual polish last with whatever budget
   remains.

## Design-system decision

- Valid compatible root `DESIGN.md` → `reuse` without reopening it. Legacy
  13/15/16-section and unmarked documents remain readable during the compatibility
  window; reusing one does not silently rewrite it.
- Explicit or delegated authority to build a system → `establish`.
- Explicit replacement of an existing system → `refresh`; legacy input must pass
  staged migration/check and opaque-extension preservation before replacement.
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
font, component, metric, testimonial, price, security promise, or narrative.
Core v2 does not require placeholder facts: omit unresolved values from tokens,
prescriptive prose, and code. A consequential unresolved decision may be named in
Governance without a suggested fallback.

## Required run artifacts

Store permanent artifacts under `.omd/runs/<run-id>/`:

- `mission.json`
- `council/decision-ledger.json`
- `design-system-decision.json`
- `system/proposal.md`, migration report/rollback references when applicable,
  and generated `system/proof.json`
- `implementation.json`
- `acceptance-plan.json`
- `proof.json`, `repairs/round-<n>.json`, and screenshots
- `delivery.json`

Receipts bind the original task, repository evidence, DESIGN.md, product output,
consumer route, states, viewports and validator results. Missing proof is not a
pass.

The project-owned canonical system lives outside the run at:

- `.omd/system/manifest.json`
- `.omd/system/graph.json`
- `.omd/system/provenance.json`
- `.omd/system/coverage.json`

The visible `DESIGN.md` begins with `# <Product> Design System`, contains exactly
the seven neutral `design-md:section` anchors in the frozen Core order, and has no
YAML/frontmatter, OmD/tool/generator/quality metadata at its top. Only an adopted,
valid `profile: portable-core` manifest with exact graph/projection hashes makes
the graph canonical; a migration candidate keeps its named source DESIGN.md
canonical. The seven semantic `design-md:claim` declarations and every
`design-md:claim-end` are compiler-owned and must not be edited after rendering.
The Markdown remains a complete portable contract on its own.

## Guided-mode boundary

If the user explicitly asks to review journey/system/validation checkpoints or
to collaborate phase by phase, route to `omd:harness` and preserve all of its
mandatory checkpoints. Do not silently switch an active guided run to
Autopilot.
