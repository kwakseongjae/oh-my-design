---
name: omd:autopilot
description: "One-prompt autonomous product design and implementation. Use automatically for broad greenfield UI requests such as 'from scratch', '새 제품/화면을 알아서 만들어줘', or requests that delegate DESIGN.md creation. It decides whether to reuse, establish, refresh, or skip a project design system; asks at most one consequential question batch; then builds and verifies the real surface. Use omd:harness instead only when the user explicitly asks for guided checkpoints."
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


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
2. EVERY required state as a real interaction outcome, before any visual
   polish. **The task brief's journey verbs ARE the graded states.** Rewrite
   the brief as a verb list first ("filter X", "inspect one Y", "assign a Z",
   "switch locale", "mark progress", "see completion") — each verb is one
   state that must be REACHABLE by real keyboard interaction (Tab to the
   control, then Enter/Space) on the product's own controls. A state that
   cannot be reached by the described action does not exist — and a state
   reached only through a developer switcher does not exist either: NEVER
   render "Show <state>" radios, demo toggles, or any state menu in the
   product UI. `data-state="<state-name>"` markers live on the real
   components that enter those states. Every entry in the system's
   honesty/unknown ledger renders as a visible unavailable-information
   node — prose disclaimers alone do not count.
3. Programmatic-semantics parity — every state change updates the visible UI
   AND the machine contract in the same paint:
   - Selection/toggle: `aria-selected` / `aria-pressed` / `aria-checked` /
     `aria-current` on the control itself, and for filters also a visible
     `role="status"` or `aria-live` summary ("Showing only urgent …").
   - Validation error: focus returns to the offending field, the field gets
     `aria-describedby` pointing at a visible `role="alert"` (or
     `aria-live`) message — all three together, not any one alone.
   - Persisted outcome (e.g. an assignment): announce it in `role="status"`
     WITH the record's visible ID and the chosen value, and update the source
     record's own text to show the same value.
   - Locale switch: update `<html lang>`, the selector's committed value, and
     the rendered script together; never silently change the selected
     language. Progress: `role="progressbar"` `aria-valuenow/max` must equal
     the visible "N of M" text.
   - Detail surfaces are `role="dialog"|"region"|"complementary"` containing
     the record's visible ID; records carry stable visible IDs.
   - Name controls with the brief's exact nouns and verbs ("Reserve a tool",
     "Assign owner", "Urgent") — the brief's language is the accessible name,
     verbatim, with no decorative words prepended or appended.
4. Primary-action uniqueness: exactly one visible primary CTA (chrome or hero,
   not both), marked `data-cta="primary"`; the form submit is
   `data-cta="submit"`; repeated per-item controls are `data-cta="local"` and
   never reuse the primary verb string. No sticky/footer primary duplicates.
5. Structure invariants: exactly one `<main>` and exactly one `<h1>` per
   rendered view — count them in the final DOM, zero and two both fail.
6. Responsive determinism — verify at 320, 390, and 1440 px before finishing:
   `document.documentElement.scrollWidth <= clientWidth` (no horizontal
   document scroll), the primary action fully inside the viewport, every
   interactive control ≥ 44px in its smaller dimension and horizontally
   unclipped. A quick DOM-math pass over the final HTML/CSS counts; skipping
   the check does not.
7. Evidence honesty determinism — for every datum category the brief forbids
   inventing (counts, prices, testimonials, logos, regulatory claims): write
   an explicit honest-absence sentence that NAMES the withheld category,
   placed where a reader would expect the datum; label every fabricated
   record "sample" (or "demo"/"fictional") visibly; never emit an affirmative
   number, price, star rating, or endorsement for a forbidden category
   anywhere on the page, including image alt text.
8. Foreground/background color PAIRS from the adopted tokens (never a lone
   accent value), decorative media `aria-hidden` and informative SVG named via
   `role="img"` + title/desc, then visual polish last with whatever budget
   remains.

Before declaring the product finished, run a SELF-WALK: list every journey
verb from the brief, and for each write (a) the exact keyboard path that
reaches it and (b) the programmatic evidence that proves it (which attribute
or role changes). Any row missing either entry is unfinished work — fix it
before the mission proof, budget permitting, because a missing row scores the
same as a missing page.

## Philosophy derivation chain (mandatory order)

Read `references/derivation-chain.md` before any system draft. The order is
PHILOSOPHY → DERIVE (decision table with D-ids and rationales) → TOKENS
(with D-id back-references in comments) → COMPONENT SPECS (documented before
code; select from `references/presets/INDEX.md` first and derive token slots
from the decision table — never improvise from zero what the preset catalog
already validates (gate GS8); `references/component-craft.md` is the floor)
→ LAYOUT GRAMMAR (per page, with content back-calculation — if the data
cannot fill the grammar, enrich the data first, never leave wide viewports
empty) → BUILD (pages consume only) → RENDER CRITIQUE → DESIGN.md carrying
the philosophy and decision table so a designer can read WHY every value is
what it is. A token value without a D-id rationale is an improvised value
(gate GS7).

## Data discovery (good UI carries the data)

A screen is only as good as the data it carries. Before designing anything,
inventory the DATA TRUTH SOURCES and write `data-inventory.md` into the run
directory:

1. Provided fixtures first: `data/*.json`, `data/*.js`, CSV, seeded stores.
2. Declared contracts next: OpenAPI/Swagger specs, GraphQL schemas, TypeScript
   interfaces/types, ORM models, API route handlers.
3. If neither exists and the brief implies records, the mode decides:
   - Guided mode: ASK the user for the data shape, or ask permission to scan
     the repository for data sources before proceeding.
   - Autonomous/benchmark mode: use only what was provided; state the absence
     honestly on-screen. NEVER invent fields, records, or endpoints.

Then design FROM the data shape, not toward a template:

- Entities and their cardinalities pick the page patterns (a 34-row entity is
  a table with filters, not three cards) and the density dial.
- Every enum in the data (status, category, stock) becomes a system token
  set: one color/mark per value, defined once, legible at a glance.
- Every field a user needs is on screen or one interaction away; IDs and
  timestamps are visible where an operator would search by them. A field in
  the dataset that never renders anywhere needs a reason.
- Aggregates shown as KPIs are COMPUTED from the data at runtime and their
  definition is stated near the number (e.g. "open = pending + packed").
- When an API is the source (now or planned): the schema is the contract —
  per-endpoint loading/error/empty states, pagination beyond ~50 rows,
  and no rendering of fields the contract does not define.

## Visual quality contract (mandatory read)

Before PRODUCT_BUILD, read `references/visual-quality-contract.md` in full
and treat every item as a gate, not a suggestion. Non-negotiables repeated
here because violating them wastes the whole run:
- NEVER render developer/state switchers in the product UI; states come from
  real product interactions only.
- NEVER ship native unstyled form controls — restyle every control from
  system tokens with the accessible native input underneath.
- The system carries a display/body type pair with a ≥2× display step, a
  label role, section-air spacing steps (2.5–6rem), ONE surface genre, and
  accent as a small signal (≤~5% of any viewport).
- After building, run the ONE-round self-critique from the contract (5 axes
  + gate sweep, System Fidelity replaces variety) and write `critique.md`
  into the run directory before the mission proof.

## Multi-page products

When the brief asks for more than one page, the design system is the
consistency contract: ONE shared stylesheet owns tokens and components
(defined exactly once); every page links it and adds only page-level layout.
Nav and footer are designed once and rendered identically on every page with
`aria-current` on the active link. Body, heading, and primary-action styling
must compute identically across pages; every internal link resolves to a
real page. Build page one as the system's proof, then express the remaining
pages FROM it — if page two needs a new token or component, that is a system
change first, not a page-local invention.

## Motion and micro-transitions (system-owned)

Motion is a design-system concern, not per-element improvisation. When the
brief asks for a modern/polished feel (or names transitions), establish
motion TOKENS in the system first and cite only them:

- One duration scale (fast ~120ms, base ~200ms, slow ~320ms) and at most two
  easing curves (one enter, one exit). Every transition on the page uses a
  token pair — a one-off cubic-bezier is an unauthorized token.
- Animate ONLY `transform` and `opacity` (compositor-friendly); never animate
  layout properties (width/height/top/margin) or box-shadow directly (fake
  elevation with a pseudo-element opacity fade).
- Standard vocabulary, applied sparingly: entrance fade-up for major sections
  (one-time, on first reveal), hover elevation/tilt on interactive cards,
  pressed-state scale on buttons, focus-visible transition on CTAs. One page
  needs 3–5 total motion patterns, not one per element.
- EVERY animation sits behind `@media (prefers-reduced-motion: reduce)` with
  a non-animated equivalent state — reduced-motion is a graded contract, not
  an afterthought.
- Provided asset images get explicit width/height (no CLS) and motion applies
  to their container, never the raw img.

## Framework idiom projection

The adopted design system is stack-neutral; the PRODUCT expresses it in the
stack the brief names. Detect the stack from the brief and any provided
runtime (vendored libraries in assets/), then project tokens and state
semantics into that stack's native idiom — never a foreign one:

- Vanilla HTML/CSS: tokens as `:root` custom properties; states as
  data-/aria- attributes driven by small event handlers.
- React (including buildless Preact+HTM): tokens as one exported theme
  object AND mirrored `:root` custom properties; components as functions
  whose props carry state; aria attributes computed from the same props that
  drive the visuals (single source of truth — never a DOM query after
  render); lists keyed by stable record IDs; no innerHTML string templating.
- Tailwind (when present): tokens declared once in the config/theme layer
  and referenced by utility classes; never inline arbitrary values that
  bypass the token scale.
- The same journey states, aria semantics, and honesty rules apply
  identically in every stack — the projection changes syntax, never the
  contract.

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
