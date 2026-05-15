# Changelog

User-facing changes to `oh-my-design-cli` and the bundled skill / agent files.

After any release: `npx oh-my-design-cli@latest install-skills`. Managed files (those carrying the `<!-- omd:installed-skill -->` marker) refresh automatically; your edits outside the marker block are preserved. See `Upgrading` in `README.md`.

---

## 1.3.10 — 2026-05-14

- **+10 KR references** (88 → 98): `kream`, `upbit`, `kbank`, `inflearn`, `wadiz`, `channeltalk`, `lunit`, `bunjang`, `flex`, `classum`. Each ships full DESIGN.md + `assets/_reference/{tokens,structure,fonts}.json` + `.live-inspect-proof.json` (≥ 5 raw_samples) per `omd:add-reference` skill.
- Tier-1 official DS finding: **Channel Talk publishes Bezier** (github.com/channel-io/bezier-react, MIT) — first canonical KR SaaS DS in the catalog.
- Numbers refreshed across surfaces: README badges + intro, README.ko.md, docs page, `web/public/llms.txt`, landing copy, root SEO metadata.
- `web/src/app/api/references/route.ts` + `web/src/lib/logos.ts` register the 10 new brands (categories / country / display name / logo / domain fallback).
- Audit log: `data/reference-audits/2026-05-14-kr10.md`.

## 1.3.9 — 2026-05-14

- Docs only. `README.md` and `README.ko.md` gain an **Upgrading** section. `CHANGELOG.md` (this file) extended to cover the 1.2.x → 1.3.x line.
- Docs page (`oh-my-design.kr/docs`) gains an Upgrading card.
- No skill, agent, hook, CLI, or data change.

## 1.3.8 — 2026-05-14

- **`omd:harness` rule 9** (new): hero archetype catalog with 7 variants — `left-character`, `center-text`, `carousel`, `split-screen`, `editorial-magazine`, `dashboard-preview`, `quote-led`. Brand-vibe → archetype matching table. Same brand re-run → 2nd-rank archetype, so visual variation is automatic.
- `experiment-meta.json` gains a `hero_archetype` field.
- Per-archetype grep gates documented (e.g. `center-text` mandates `position:absolute = 0` in the hero block; `dashboard-preview` mandates `<img> = 0` + mock ≥ 50% of viewport).

## 1.3.7 — 2026-05-14

- **`omd:harness` rule 5** rewritten — header logo is a wordmark in a display font, not a separate icon mark. Anti-pattern list: DiceBear `shapes`+wordmark pairs, DiceBear `initials` chips, hand-drawn inline-svg logos, and dashed-box `[YOUR LOGO]` placeholders are all forbidden.
- Brand-vibe → font + product-name matching table added (Bricolage Grotesque / Space Grotesk / DM Serif Display / Fraunces, all SIL OFL via Google Fonts).
- `omd:asset-fetch` §1 rewritten to match.

## 1.3.6 — 2026-05-13

- **New skill `omd:experiment-gallery`** — builds a single `index.html` that previews every brand experiment under a folder as iframe-scaled cards with archetype badges, wow ratings, multi-turn deltas, and per-brand IP audit. Reusable across batches.
- **`omd:reference-capture` Phase 3.9** (new): browser-harness fast-path auto-detect. When the user has `browser-harness` (https://github.com/browser-use/browser-harness) installed and Chrome with `--remote-debugging-port=9222`, the skill drives live computed-style capture via CDP — measured 3-5× faster than playwright MCP. Falls back to playwright MCP otherwise.
- **`omd:harness` rule 10** (new): IntersectionObserver reveal safety net mandatory. `@keyframes failsafeReveal` + `html.js-ready` gate + reduced-motion guard. Stops the recurring "fullpage screenshot has blank sections below the fold" regression.

## 1.3.5 — 2026-05-13

- **New skill `omd:asset-fetch`** — free-license asset catalog with verified-200 CDN URLs. DiceBear (CC0 avatars: notionists / lorelei / personas / adventurer / fun-emoji), Lucide (ISC icons), Heroicons (MIT), Tabler (MIT), Picsum (CC0 photos with deterministic seeds), Loremflickr (Flickr-CC photos with deterministic locks), and SIL OFL display fonts (Bricolage Grotesque, Space Grotesk, DM Serif Display, Fraunces, Pretendard, Wanted Sans, Noto Sans KR).
- **`omd:harness` rule 6** tightened — generator must read from `omd:asset-fetch`. Handcraft inline-svg characters / icons / logos forbidden. CDN call fails → fall back to a brand-color CSS gradient placeholder. Provenance comment `<!-- omd-asset: source=<url>, license=<license>, fetched=<ISO> -->` mandatory on any saved asset file (e.g. `assets/illustrations/hero-character.svg`).

## 1.3.4 — 2026-05-13

- **`omd:harness` rule 7**: single shared `.container-inner` class enforces consistent horizontal padding across `<header>`, `.hero`, sections, `<footer>`. Stops the "header offset 24px from hero" class of bugs on wide viewports.
- **`omd:harness` rule 8**: hero composition decomposed into separate elements (`.hero-character`, `.hero-chart`, `.hero-stat-card`, `.hero-ornament`). Single-SVG-with-everything forbidden — asset swap no longer destroys the scene.
- **`omd:reference-capture` Phase 4.0** (new): `.live-inspect-proof.json` mandatory with ≥ 5 raw samples from playwright `browser_evaluate`. If `tokens.json#live_overrides` ends up byte-equal to canonical, the block is deleted (drift-detection: live inspect didn't really run).

## 1.3.3 — 2026-05-13

- Wordmark-only logo pattern introduced in `omd:asset-fetch` §1 (rewritten further in 1.3.7).
- `omd:asset-fetch` becomes the single source of truth for which CDN URLs the generator may use.

## 1.3.2 — 2026-05-13

- Deferred experiment: a `clone` / `inspired` mode toggle that turned out to be the wrong split. Removed in 1.3.3 in favor of a single-mode flow.

## 1.3.1 — 2026-05-13

- Skill descriptions made count-agnostic. Replaced hard-coded `"67개 / 78개 / 88개 reference"` strings with `"실제 기업 reference"` so the description never drifts with the reference count. `omd:init` and `omd:harness` SKILL.md descriptions updated.

## 1.3.0 — 2026-05-13

- **New skill `omd:reference-capture`** — live brand-site CDP / playwright inspect. Writes `assets/_reference/<id>/` with `tokens.json`, `structure.json`, `fonts.json`, `screenshots/{hero-desktop,hero-mobile}.png`, `LICENSE-NOTE.md`, and `attribution.md`. The captured material is reference-only and never embedded in user product DOM.
- **`omd:init` CLI drift fix**: the skill body referenced `omd init recommend` and `omd init prepare` subcommands the CLI never actually exposed. Rewritten to use the bundled fingerprints + Bash directly. Skill is now self-contained.

## 1.2.0 — 2026-05-13

- 10 new Korean references (78 → 88 total). Fingerprints + DESIGN.md files now ship in the npm tarball: `socar`, `gangnamunni`, `kakaopay`, `zigzag`, `29cm`, `ably`, `banksalad`, `zigbang`, `wanted`, `remember`.
- Web `api/references/route.ts`, `lib/logos.ts`, `lib/homepage-urls.ts` mappings extended for the new IDs. `tokens.ts` `BRAND_COLORS` const extended.

## 1.1.0 — 78 references (+11 Korean cluster including KRDS)

The reference bundle expanded from 67 → 78 and the npm tarball now actually carries them.

### Added

- **11 new references** (Korean cluster): `yeogiotte` (여기어때) · `musinsa` · `kurly` (마켓컬리) · `ohouse` (오늘의집) · `naver` · `yanolja` (야놀자) · `coupang` · `kakaobank` · `ridi` · `qanda` · **`krds`** (Korea Republic Design System, 행정안전부 주관 — the first government DS in the bundle).
- Each new ref ships with a `.verification.md` alongside its `DESIGN.md` documenting Tier 1 live DOM measurements, Tier 2 cross-check status, conflict matrix, and cited philosophy sources.
- `data/reference-fingerprints.json` regenerated → **count 67 → 78**, all 11 new entries added.
- `data/reference-tags.md`: 11 new rows + Korean shortcut buckets (한국 이커머스 · 한국 여행 · 공공·행정·정부).

### Fixed

- **Tarball was missing references entirely.** `package.json` `files[]` pointed at `references/**/DESIGN.md` which is now a local-dev symlink — npm doesn't follow symlinks in the whitelist, so 1.0.x shipped 0 reference files. Updated to `web/references/*/DESIGN.md` (the canonical path); tarball now contains all 78 `DESIGN.md` files.

### Changed

- `omd-init` skill references the canonical `web/references/<id>/DESIGN.md` path inside the package.
- Apple-tier philosophy verification for all 67 pre-existing refs (Tier 1 live DOM + Tier 2 cross-check + `.verification.md` with conflict matrix). Skill behavior unchanged — this only deepens the source-of-truth.

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
