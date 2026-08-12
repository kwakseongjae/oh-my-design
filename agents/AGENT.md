# AGENT.md — oh-my-design harness compact context (≤ 60 lines, Ralph convention)

A 60-line operational context card. Loaded into the project at install via `omd install-skills`. Source of truth for what an agent needs to know about *this* project on every iteration.

## Identity
- **Project:** oh-my-design — a CLI + skill bundle that turns AI coding agents into a design harness.
- **Output artifact:** vendor-neutral DESIGN.md Core v2 projection + canonical `.omd/system/{manifest,graph,provenance,coverage}.json` when bound + permanent `.omd/runs/` archive.
- **Target users:** vibe coders, junior designers, solo founders.

## Stack & commands
- Build: `npm run build` (tsup) · Lint: `npm run lint` (tsc --noEmit) · Test: `npm test` (vitest)
- The harness skill bootstraps run directories directly; the CLI exposes installation and diagnostics only.
- User-facing entry: `/omd-harness <task>` (Claude Code or Codex skill)

## Directory map
- `agents/` — canonical sub-agent definitions (master + specialists; source-of-truth, generates channel-native Claude Code, Codex, and OpenCode roles)
- `skills/omd-harness/` — entry skill that calls master orchestrator
- `skills/omd-init/`, `skills/omd-apply/`, `skills/omd-remember/`, `skills/omd-learn/`, `skills/omd-sync/` — project design-system skills
- `skills/omd-humanize/`, `skills/omd-slop-audit/` — locale-native copy editing and evidence-based anti-slop audit
- `data/reference-fingerprints.json` — resolved-catalog voice fingerprint manifest (skill-side semantic match)
- `data/vocabulary.json`, `data/synonyms.json`, `data/reference-tags.md` — controlled vocab + tagging
- `references/<id>/DESIGN.md` — bundled reference design systems resolved from the catalog
- `spec/design-md-core-v2.md` — normative portable Core + System Graph contract
- `spec/omd-v0.1.md` — legacy read-compatibility contract; never a new-writer target
- `.omd/runs/run-<ts>-<slug>/` — every harness run; permanent archive
- `skills/omd-lab-02-design-harness/runs/v<N>-...` — Lab #02 versioned experiments

## Core architecture (re-read every Phase 8)
- **Single Ralph-style loop**, fan-out only at: ux-research (parallel readers), persona-testing (parallel adversarial)
- **Core v2 is the single-write contract** — seven stable anchors: `experience`, `foundations`, `typography-assets`, `components-states`, `layout-platforms`, `content-locales`, `governance`. New writers never emit legacy YAML or 13/15/16-section layouts.
- **Graph first after adoption** — only a valid, hash-bound
  `profile: portable-core` manifest makes the graph canonical; DESIGN.md remains
  a complete standalone projection. A `migration-candidate` keeps its named
  source DESIGN.md canonical until explicit adoption. Legacy refactor requires
  provider-free staged migration with `dropped=0`; unknown means absent, never fallback.
- **Eval pipeline**: deterministic gate (axe + lighthouse + spec validate) → cross-judge ensemble (3-prompt diversity, no API key) → adversarial persona walkthrough (4 personas, ABANDON token, hard turn budget)
- **3 mandatory user checkpoints**: Phase 3 (journey), Phase 5 (frozen Core graph + sidecar patches + DESIGN.md.patch), Phase 8 (validation summary)
- **3-iteration cap**, critic between iterations forces root-cause re-entry (no surface patches)

## Brand non-negotiables (apply to *this* project's own UI)
- No Inter on white. No purple-on-white. No gradient backgrounds. No unjustified emoji.
- Korean and Latin script co-equal (this is a bilingual project).
- Hex + name together for every color: `Toss Blue (#3182f6)`, never just `#3182f6`.
- AI slop means context-free pattern convergence, not proof that AI authored a screen. Audit clusters, quality issues, and preferences separately.

## Numbered-9s (re-read at every iteration boundary)
- 9 → re-read sub-agent output before acting
- 99 → user feedback → trace to Phase decision (critic), not surface-patch
- 999 → never fabricate project history, principles, personas, locales, or brand facts
- 9999 → never invent tokens absent from the valid Core graph/projection
- 99999 → never auto-skip user checkpoints
- 999999 → never invent reference ids; use only IDs present in the resolved catalog
- 9999999 → never claim success when output is empty; Read the file
- 99999999 → never overwrite previous iteration; snapshot to `iteration-<N>/`

## Where to look when stuck
- `research/harness-design/06-omd-integration-design.md` — full architecture
- `research/harness-design/07-poc-spec.md` — Scenario A/B/C
- `skills/omd-lab-02-design-harness/runs/live-*.md` — accumulated live-run insights
- `research/harness-design/docs-todo.md` — pending docs/blogs queue
