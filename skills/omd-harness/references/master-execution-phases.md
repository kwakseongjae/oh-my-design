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
2. IA/journey: master writes `journey.mmd` → mandatory checkpoint #1.
3. Wireframe: `omd-ui-junior` → `wireframes/`.
4. System: `DESIGN.md.patch` → mandatory checkpoint #2. Never mutate DESIGN.md
   before approval.
5. Components: `omd-ui-junior` → manifest and all required states.
6. Assets: `omd-asset-curator` → manifest, licensed sources, fallbacks.
7. Microcopy: `omd-microcopy` using DESIGN.md §10.
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
