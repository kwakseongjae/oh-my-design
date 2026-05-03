# AGENT.md — oh-my-design harness compact context (≤ 60 lines, Ralph convention)

A 60-line operational context card. Loaded into the project at install via `omd install-skills`. Source of truth for what an agent needs to know about *this* project on every iteration.

## Identity
- **Project:** oh-my-design — a CLI + skill bundle that turns AI coding agents into a design harness.
- **Output artifact:** `DESIGN.md` (Google Stitch 1–9 + OmD 10–15) + harness run dir at `.omd/runs/`.
- **Target users:** vibe coders, junior designers, solo founders.

## Stack & commands
- Build: `npm run build` (tsup) · Lint: `npm run lint` (tsc --noEmit) · Test: `npm test` (vitest)
- Hidden internal helper: `omd harness "<task>" --internal` (slug + run dir; emits single JSON line)
- User-facing entry: `/omd-harness <task>` (Claude Code or Codex skill)

## Directory map
- `agents/` — canonical 11 sub-agent definitions (master + 10 specialists; source-of-truth, generates `.claude/agents/` and `.codex/agents/`)
- `skills/omd-harness/` — entry skill that calls master orchestrator
- `skills/omd-init/`, `skills/omd-apply/`, `skills/omd-remember/`, `skills/omd-learn/`, `skills/omd-sync/` — existing OmD skills
- `data/reference-fingerprints.json` — 67-reference voice fingerprint manifest (skill-side semantic match)
- `data/vocabulary.json`, `data/synonyms.json`, `data/reference-tags.md` — controlled vocab + tagging
- `references/<id>/DESIGN.md` × 67 — bundled reference design systems
- `spec/omd-v0.1.md` — OmD spec (15-section DESIGN.md format)
- `.omd/runs/run-<ts>-<slug>/` — every harness run; permanent archive
- `skills/omd-lab-02-design-harness/runs/v<N>-...` — Lab #02 versioned experiments

## Core architecture (re-read every Phase 8)
- **Single Ralph-style loop**, fan-out only at: ux-research (parallel readers), persona-testing (parallel adversarial)
- **OmD spec is already a harness signature** — §10 → microcopy, §12 → orchestrator constraint, §13 → tester input, §14 → QA checklist
- **Eval pipeline**: deterministic gate (axe + lighthouse + spec validate) → cross-judge ensemble (3-prompt diversity, no API key) → adversarial persona walkthrough (4 personas, ABANDON token, hard turn budget)
- **3 mandatory user checkpoints**: Phase 3 (journey), Phase 5 (DESIGN.md.patch), Phase 8 (validation summary)
- **3-iteration cap**, critic between iterations forces root-cause re-entry (no surface patches)

## Brand non-negotiables (apply to *this* project's own UI)
- No Inter on white. No purple-on-white. No gradient backgrounds. No unjustified emoji.
- Korean and Latin script co-equal (this is a bilingual project).
- Hex + name together for every color: `Toss Blue (#3182f6)`, never just `#3182f6`.

## Numbered-9s (re-read at every iteration boundary)
- 9 → re-read sub-agent output before acting
- 99 → user feedback → trace to Phase decision (critic), not surface-patch
- 999 → never fabricate §11–13 facts
- 9999 → never invent tokens absent from DESIGN.md
- 99999 → never auto-skip user checkpoints
- 999999 → never invent reference ids; 67-only catalog
- 9999999 → never claim success when output is empty; Read the file
- 99999999 → never overwrite previous iteration; snapshot to `iteration-<N>/`

## Where to look when stuck
- `research/harness-design/06-omd-integration-design.md` — full architecture
- `research/harness-design/07-poc-spec.md` — Scenario A/B/C
- `skills/omd-lab-02-design-harness/runs/live-*.md` — accumulated live-run insights
- `research/harness-design/docs-todo.md` — pending docs/blogs queue

