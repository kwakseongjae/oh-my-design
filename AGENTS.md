# AGENTS.md — oh-my-design

This is the agent-instruction shim for OpenAI Codex / generic AGENTS.md-aware CLIs working inside this repository.

oh-my-design itself uses Claude Code skills + subagents for its design harness. This file is the parity layer for Codex users.

## Repository quick map

- `src/` — TypeScript source for the `omd` CLI (`bin/oh-my-design.ts` is the entrypoint).
- `web/references/<id>/DESIGN.md` — 100+ real-company DESIGN.md files; the **canonical source of truth** for the reference catalog. It lives under `web/` because the Vercel project root is `web/` (the site build can only read files beneath it). The root `references` symlink, `design-md/`, and `packages/mcp/data/references/` are all derived from here — see **Repository layout** in `README.md` for why each tree exists and which to edit. Rule: edit `web/references/` only.
- `skills/omd-*` — Claude Code / Codex / OpenCode skill files (installed into target projects via `omd install-skills`).
- `.claude/agents/` — Subagent definitions for the design harness (Claude Code).
- `.codex/agents/` — Mirror TOML definitions for the design harness (Codex).
- `spec/omd-v0.1.md` — OmD spec (15-section DESIGN.md format).
- `research/harness-design/` — Design harness research + integration design.
- `skills/omd-lab-02-design-harness/` — Lab #02 versioned harness experiments.
- `scripts/ctx-prime.cjs` — v1.6.0 deterministic codebase analyzer (stack, brand color, voice, surface inventory, audience hypothesis). Called by `omd-harness` Step 2.5 to pre-fill master slots.

## Build / test / lint

- Build: `npm run build` (tsup → `dist/`)
- Type-check: `npm run lint` (`tsc --noEmit`)
- Unit tests: `npm test` (vitest)
- The CLI runs via `node dist/bin/oh-my-design.js …` after build.

## Design harness mode

User-facing entry: **`/omd-harness <task>`** in Claude Code or Codex CLI.

The harness runs entirely inside the host CLI session — no external API keys, no separate process. The skill at `.agents/skills/omd-harness/` (Codex) or `.claude/skills/omd-harness/` (Claude Code) handles bootstrapping and orchestration handoff.

### Entrypoint

```
/omd-harness <도메인 + 톤/스타일 + 핵심 화면>
```

Examples:
- `/omd-harness 토스 스타일로 가족용 식단 공유 앱 메인 화면`
- `/omd-harness Linear-clone B2B SaaS dashboard — 6 widgets, dark first`
- `/omd-harness 결제 완료 화면 — 성공/실패/부분성공 3 states`

For Lab #02 versioned runs, append `--lab v1` (or v2, v3 …) inside the slash command.

The skill internally bootstraps the run dir via a hidden `omd harness` helper (slug consistency, standardized subdirs, INDEX.md append). This helper is NOT a user surface — always use `/omd-harness`.

### Codex-specific harness flow

When this AGENTS.md is loaded and a fresh `.omd/runs/run-<latest>/` exists:

1. **Activate the orchestrator persona.** Read `.codex/agents/omd-master.toml` and adopt that role. The full behavioral spec lives at `.claude/agents/omd-master.md` — follow it verbatim regardless of channel.

2. **Run the 10 phases in order** (see `.claude/agents/omd-master.md` for full details):
   - Phase 1 — Discovery (5-8 questions, one batch)
   - Phase 1.5 — Asset Brief (spawn omd-asset-curator)
   - Phase 2 — UX Research (parallel × 2-3 omd-ux-researcher)
   - Phase 3 — IA / Journey (master itself) → **user checkpoint #1**
   - Phase 4 — Wireframe (spawn omd-ui-junior)
   - Phase 5 — System / DESIGN.md.patch (master + omd init prepare) → **user checkpoint #2**
   - Phase 6 — Components (spawn omd-ui-junior)
   - Phase 6.5 — Asset Sourcing (spawn omd-asset-curator)
   - Phase 7 — Microcopy (spawn omd-microcopy)
   - Phase 8 — Validation (spawn omd-a11y-auditor → cross-family jury → spawn omd-persona-tester × 4) → **user checkpoint #3**
   - Iteration loop (cap 3) — spawn omd-critic between iterations
   - Phase 9 — Handoff (zip packaging for v0/Cursor/Subframe)

3. **Spawn sub-agents** via Codex's spawn-agent mechanism with names matching `.codex/agents/<name>.toml`:
   - `omd-ux-researcher`
   - `omd-asset-curator`
   - `omd-ui-junior`
   - `omd-microcopy`
   - `omd-a11y-auditor`
   - `omd-persona-tester` (×4 in parallel for Phase 8)
   - `omd-critic` (iteration > 1)

4. **All artifacts go inside the run dir.** Never write outside it except for `DESIGN.md` (Phase 5, with user checkpoint approval) and `.omd/preferences.md` (via `omd remember`).

### User checkpoints (mandatory, do not auto-skip)

- Checkpoint #1 (Phase 3 end) — show `journey.mmd`, halt for user reply.
- Checkpoint #2 (Phase 5 end) — show `DESIGN.md.patch`, halt.
- Checkpoint #3 (Phase 8 end) — show validation summary, halt.

A non-mandatory informational checkpoint #0 follows Phase 1.5 (asset self/fallback/skip choice). All four are gated; do not bypass.

## OmD apply (UI work outside the harness)

For ad-hoc UI work (component changes, microcopy edits, color tweaks) not running through the full harness:

1. Read project-root `DESIGN.md` in full at the start of the turn.
2. Read `.omd/preferences.md` `pending` entries — these override DESIGN.md until folded in.
3. Apply changes citing only DESIGN.md tokens (never invent).
4. If the user corrects your design choice, run `omd remember "<one-sentence summary>" --context "<file>"` before ending the turn.

This mirrors the `omd:apply` Claude Code skill behavior.

## Product surface ownership (mandatory)

- The user-facing creation funnel is Home `시작하기` → **`/builder`**.
- In product discussions, “preview”, “미리보기”, “사용자가 보는 화면”, and “시작하기 이후” mean the builder preview unless the user explicitly names another route.
- `/reference/[id]` is the catalog/detail and reference-data diagnostic surface. Do not treat it as the primary user preview and do not validate a builder task only on this route.
- `ReferencePreview` is currently a shared renderer used by both consumers. Shared-renderer changes are allowed, but every builder request must be entered and acceptance-tested through `/builder`; route ownership is determined by the consumer journey, not the component filename.
- Before finishing builder UI work, verify Home → `/builder` → brand selection → preview, including user overrides when relevant.

## Hard rules (apply across channels)

- **Unknown means absent — at the smallest unresolved field/group boundary.** oh-my-design is a reference delivery product, not a fallback generator. Never promote a plausible substitute, heuristic parse, generic component, system font, or adjacent corporate/marketing surface as a brand/product fact. Omit only the unresolved field, item, or wholly empty group in `/builder` and `/reference/[id]`; preserve every other verified value, metric, description, and section from the canonical reference.
- Never enforce absence by deleting or replacing the canonical reference body, collapsing a useful reference into a status document, or adding `Partial`/warning chrome in place of its content. A missing font family removes that family/specimen, not verified typography metrics, spacing, colors, components, or explanations.
- **Reference depth is part of correctness.** §1 must explain the company/product, distinctive brand expression, and current evolution using first-party history/rebrand/culture evidence; it must not read like an audit-scope disclaimer. §3 must distinguish official product-use, live surface-use, official distributed font assets, declared-only faces, and unresolved claims. A browser-unloadable but officially confirmed product font keeps its metadata and loses only the live specimen.
- Narrative evidence and UI-token evidence are related but not identical. An official font's history, visual character, or license can belong in the reference without being promoted to `tokens.typography.family.ui`. Do not delete useful brand context merely because it is not a machine token.
- Public marketing, corporate, font-catalog, and product/app surfaces are separate evidence domains. Observation on one domain cannot populate another domain's reference tokens without explicit evidence linking them.
- Runtime font availability does not authorize substitution. A known but non-loadable font may be labeled unavailable; do not render Inter/system-ui as though it were that font.
- Never fabricate DESIGN.md §11-13 (Brand Narrative / Principles / Personas) facts. Use `[FILL IN]` placeholders if user-provided facts are absent.
- Never introduce a token absent from DESIGN.md without going through Phase 5 (system extension with checkpoint #2 approval).
- Never download from Pinterest. Pinterest URLs are listed for the user to download manually.
- Never emit SUS / NPS / "satisfaction score" from synthetic personas. Use task_success / steps_vs_optimal / friction_count / heuristic_violations / abandonment instead.
- Never auto-skip user checkpoints.
- Never delete a run directory. They are permanent learning artifacts.

## 세션 연속성 프로토콜
- 시작: `scripts/context_restore.sh` 실행(또는 docs/CURRENT_STATE.md 읽기) → 막힘/대기부터 처리.
- 체크포인트: 작업 단위 완료·결정 확정마다 CURRENT_STATE.md를 먼저 갱신하고 나서 보고한다.
- 종료: JOURNAL.md 맨 위에 항목 추가(한 일/열린 것/다음, 5줄 이내). 채팅에만 있는 맥락은 잃어버린 것으로 간주.
- 컨텍스트가 요약(compact)된 채 재개되면: 첫 행동으로 context_restore.sh를 실행해 복원한다.

## Pre-existing OmD shims (managed by `omd sync`)

Below this line, `omd sync` may add a managed block with shim content for Claude Code / Cursor compat. Do not edit between the markers.

<!-- omd:start version=1 -->
<!-- omd:end -->
