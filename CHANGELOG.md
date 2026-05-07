# Changelog

## 1.0.2 — Onboarding banner correction

The `install-skills` "Next" panel still claimed *"Hook이 자동으로 라우팅 — 디자인 의도 감지해서 하네스/스킬 호출"* and described `/omd-harness` as *"hook 우회"*. That language described the 1.0.0 forced-eval hook which was retired in 1.0.1 — auto-routing now happens via Claude's standard description matching, and the hook only gates on DESIGN.md existence. The banner is the first thing users see after install, so it's worth getting right even for a single panel.

### Changed

- `install-skills` Next panel:
  - "Hook이 자동으로 라우팅 — 디자인 의도 감지해서 하네스/스킬 호출" → "Claude가 description 매칭으로 자동 라우팅. Hook은 DESIGN.md 부재 시 omd:init 안내만."
  - `/omd-harness <task>` description: "hook 우회, 즉시 진입" → "즉시 진입"
  - inline comment: "자동 hook 라우팅" → "자동 라우팅"

## 1.0.1 — Trigger surface cleanup

Patch release focused on skill triggering — descriptions, hook behavior, and a stale dependency in the package manifest. No public API change.

### Changed

- Skill triggering uses the standard mechanism (SKILL.md `description`) as the single source of truth. Descriptions trimmed to ~230 chars on average (down from ~700) and rewritten in the canonical "what it does + use-when + chain hints" pattern that the rest of the Claude Code skill ecosystem uses. Modern models generalize from one phrase per language, so the keyword-inflated form was paying maintenance cost without measurable trigger gain.
- Skill descriptions now ship Japanese and Traditional Chinese trigger examples alongside Korean and English (`omd-apply`, `omd-init`, `omd-harness`, `omd-remember`, `omd-learn`, `omd-sync`, `omd-add-reference`). About half of OmD users work in JP / TW, so they previously fell back to weaker description-only matching with English/Korean phrases.
- `.claude/hooks/skill-activation.cjs` simplified from a keyword/regex forced-eval injector to a DESIGN.md existence gate. The "OMD SKILL ACTIVATION CHECK" block no longer appears on every UI prompt — the hook is silent unless DESIGN.md is missing and the prompt looks like UI work, in which case it surfaces a single one-line nudge to run `omd:init` first. The forced-eval layer was a custom belt-and-suspenders pattern from the 3.x model era; with 4.x description matching it became overlap and a second source of truth that drifted.

### Removed

- `.claude/skills/skill-rules.json` (dual source-of-truth for the forced-eval matcher).
- Dangling reference to that file in `package.json` `files[]`.

## 1.0.0 — Skill-first

Breaking release. The CLI surface collapsed from 9 user-facing commands down to 1 (`install-skills`). All operational logic moved to skill markdown + agent prose. See [MIGRATION.md](MIGRATION.md).

### Removed

- CLI commands: `generate`, `init recommend`, `init prepare`, `learn`, `remember`, `sync`, `context`, `harness`, `setup-blender`, `reference list/show`, `preview`.
- Public API exports (`src/index.ts`): `detectContext`, `extractUrl`, `renderPlan`, `applyOverrides`, `loadReference`, `appendEntry`, `writeAllShims`, all v4 modules. The package no longer ships a programmatic API; use the skill markdown directly.
- TypeScript modules (≈ 7000 lines): customizer, preview-generator, recommend, vocabulary, init-deprecate, apply-delta-stub, preferences, shims, sync-lock, sync-marker, run-archive, memory, code-introspect, context-detect, url-token-extractor, plan-emitter, signal-classifier, budget-tracker, visual-anchor, trace, and supporting utility / preset modules.
- Tests for removed surface (≈ 480 of 545 retired).

### Added

- `omd-asset-curator` agent: stack-aware asset medium selection. Detects framework (Next/Vue/Svelte/etc.), CSS framework, icon libs (lucide/heroicons), chart libs (recharts/chartjs/nivo/etc.), animation libs (framer-motion/lottie/rive). Recommends the best matching medium per asset (inline SVG / chart library / Lottie / Rive / Unsplash / 3D dispatch). Inline SVG recipes for liquid fills, progress indicators, simple icons, empty-state illustrations.
- `omd-apply` skill: explicit dispatch decision tree. Complex requests (assets, charts, screens, a11y, microcopy, persona) now route to specialized sub-agents instead of being handled inline.
- `scripts/context.cjs`: 80-line deterministic project scan helper invoked by master Phase A as a fast cache, optional but preserved for repeatability.
- `omd-3d-blender` agent: just-in-time install walkthrough (uv check → brew install / brew --cask blender → claude mcp add → addon prompt). No longer bundled into `install-skills`.
- `MIGRATION.md`, this `CHANGELOG.md`.

### Changed

- npm tarball ~60% smaller (no preview templates, no stale src/, no preset library).
- Dependencies: 9 → 3 (`@clack/prompts`, `commander`, `picocolors`).
- `package.json`: removed `main`, `types`, `exports` fields. Bin-only package.
- README rewritten around the single-command flow + agent natural-language pattern.
- Skill activation rules: `omd-apply` triggers tightened (39 → 23) so high-intent requests like "에셋 / 차트 / 아이콘" route to omd-asset-curator instead of being absorbed by omd-apply inline. Orphan `omd-add-reference` rule removed.

### Migration

```bash
cd my-project
npx oh-my-design-cli@latest install-skills
```

Then restart your agent (Cmd+Q + relaunch for Claude Code).

## 0.1.3 — 2026-04-29

- Drop unused dependencies (shadcn, tw-animate-css).

## 0.1.2 — 2026-04-29

- Trim 90% of npm tarball (drop research / preview / per-reference READMEs).

## 0.1.1 — 2026-04-29

- Five usability fixes from npm-publish verification.

## 0.1.0 — 2026-04-29

- First publish under the `oh-my-design-cli` npm name.
