# Master execution phases

Read this file only after the intake handoff reaches `PROPOSE_PLAN`, or when a
resumed `.handoff.json` state is PLAN_REVIEW, DESIGN_GENERATION, SHIP_GATE, or
ARCHIVE_RUN.

## PROPOSE_PLAN and PLAN_REVIEW

1. Build `OMD-PLAN.md` from the approved slots and evidence ledger.
2. Ask one plan-review checkpoint with go, edit, restart, and stop paths.
3. `go` enters DESIGN_GENERATION. An edited plan is re-read and confirmed once.
   Restart returns to SLOT_GATE; stop preserves the run.
4. A blocked external-evidence item can never reach this phase.

## DESIGN_GENERATION

Run phases in order, using parallel specialists only where their ownership does
not overlap:

1. UX research: 2–3 bounded evidence clusters → `references-cited.md`.
2. IA/journey: `journey.mmd` + `screens.md` per `master-screen-inventory.md`
   → mandatory checkpoint #1.
3. Wireframe: `omd-ui-junior` → `wireframes/`, approved rows only.
4. System: validate `system/{graph,provenance,coverage}.draft.json` with the
   authority-neutral draft contract. Omit `projection`/`projection.sha256`; a
   compiler demanding a placeholder/precomputed/zero SHA must fail closed. The
   frozen ledger must explicitly authorize `establish` or `refresh` before staged
   compilation, but never a root write before mandatory checkpoint #2.

   Migrate legacy, unmarked, or portable-only input in staging. Require
   `dropped_segments=0`, no promotion, round-trip equality, and opaque preservation
   under `dev.oh-my-design.migration`; the candidate stays non-authoritative.
   Never edit headings. Unknown values stay absent; Governance may name only
   consequential unknowns without a fallback.

   Prepare the validated graph as a non-authoritative exact review directory:

   ```bash
   omd design-md prepare-review <graph> --provenance <provenance> --coverage <coverage> --out-dir <review> [--migration-report <report>]
   ```

   `DESIGN.md.patch` is an unedited byte copy of `<review>/DESIGN.md`; the
   review request and hash are the checkpoint manifest authority. After the
   actual user approves mandatory checkpoint #2, materialize the receipt and compile:

   ```bash
   omd design-md approve-review <review>/review-request.json --reviewer <project-owner-id> --out <approval> --authority-transition-approved
   omd design-md compile <review>/input-graph.json --provenance <review>/provenance.json --coverage <review>/coverage.json --review-receipt <approval> [--migration-report <review>/migration-report.json] --out-dir <fresh> --adopt
   ```

   The sole fallback is the installed exact-equivalent
   `prepare-design-md-core-review.cjs`, `compile-design-md-core.cjs`, and
   `adopt-design-md-core.cjs` helper chain.
   The compiler owns `DESIGN.md`, compiled
   graph, manifest, hashes, seven `design-md:claim` declarations, and every
   `design-md:claim-end`; never write or patch them.

   Read back and validate clean top, anchors/claims, graph/schema, canonical
   rendering, bindings, provenance, coverage, unknown absence, and extensions.
   Compiler PASS proves declaration conformance and binding integrity only—not
   facts, provenance truth, licenses, locale behavior, accessibility, or visual
   quality. Missing provenance/coverage bindings fail closed; never add manual hashes.

   Only the deterministic review preparer may create byte-exact review aliases:
   - `system/graph.patch.json`, `system/manifest.patch.json`,
     `system/provenance.patch.json`, and `system/coverage.patch.json`
   - `DESIGN.md.patch`, an unedited byte copy of compiler-owned `DESIGN.md`
   - `system/checkpoint-manifest.json`, binding every reviewed byte

   Missing preparer blocks without manufactured files/hashes. At checkpoint #2,
   show the exact preview diff, decisions, migration report, limits, and
   checkpoint-manifest hash. Approval permits only:

   ```bash
   omd design-md prepare-checkpoint <fresh> --reviewer <project-owner-id> --out <checkpoint> --authority-transition-approved
   omd design-md adopt <fresh> --project-root <project-root> --checkpoint-receipt <checkpoint>
   ```

   Missing atomic package adopter fails closed without partial copies. Edit/reject
   changes nothing.
5. Components: `omd-ui-junior` → manifest and all required states.
6. Assets: `omd-asset-curator` → manifest, licensed sources, fallbacks.
7. Microcopy: `omd-microcopy` using the stable `content-locales` section and,
   only when an adopted `profile: portable-core` manifest binds the exact
   graph/projection hashes, canonical `graph.content_locales`. A migration
   candidate keeps its named source DESIGN.md canonical.
8. Existing-page work may run `omd-ux-writer` and `omd-ux-engineer` in parallel
   for section-level recommendations; only selected corrections are applied.
9. Validation: deterministic a11y first, then cross-family jury and four
   adversarial personas. An optional pre-ship contrarian is read-only, cited,
   single-call, retry-0, and cannot reopen auto values or checkpoints.

## SHIP_GATE and iteration

Present a concise validation summary → mandatory checkpoint #3 with ship,
iterate, or stop. Iteration runs `omd-critic`, re-enters at the lowest broken
phase, and is capped at three total iterations. Never emit SUS/NPS from synthetic
personas.

## ARCHIVE_RUN

Before reporting done, write `handoff/delivery.json` with:

- intent, original task, verified consumer route or null;
- acceptance, protected behaviors, evidence, and unknowns;
- implementation owner, artifacts, and exact-route verification plan.

Do not invent a consumer route. If the route has not been observed and verified,
record it as null and keep the missing route in `unknowns`.

Design archive completion is not product implementation completion. For
`implement`, the main agent owns product edits only after checkpoint #3 and must
verify the same route, viewport, state, and behavior.

## Specialist ownership

- Research: `omd-ux-researcher`
- Wireframe/components: `omd-ui-junior`
- Assets: `omd-asset-curator`
- Copy: `omd-microcopy`
- Deterministic accessibility: `omd-a11y-auditor`
- Adversarial flows: `omd-persona-tester`
- Root-cause iteration: `omd-critic`
- Section advice: `omd-ux-writer`, `omd-ux-engineer`

All specialists write only their declared run artifact. `omd-master` remains the
single design-plan owner; the main agent remains the sole post-checkpoint product
implementation owner.

## Trace

Append one JSONL record per turn with timestamp, turn, state in/out, classified
user signal, decision, and budget. Re-read every specialist artifact before
relaying it. Preserve the run directory permanently.
