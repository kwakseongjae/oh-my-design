# i2 Consolidated Findings + Fix Plan

**Date:** 2026-04-29
**Method:** 4 parallel audit subagents (V/J/F/S persona). Each read v4 implementation files and walked through the master state machine mentally.

## Cross-persona critical findings (deduped)

| # | Issue | Cited by | Fix tier |
|---|---|---|---|
| C1 | Subagent registration "preflight" is fake (no API) — first Agent() call may throw | V | 1 |
| C2 | Picker answers bypass signal-classifier — opt-out works only in free-text | V | 1 |
| C3 | Reference-pick burns user turn before master spawns (V cap=7) | V | 1 |
| C4 | Master ↔ launcher race on `.handoff.json` (no atomic write) | V | 2 |
| F1 | No F-FAST path — founder forced through 8-16 turn avg | F | 1 |
| F2 | dembrandt 90s timeout + unimplemented fallback (lethal on URL extract) | F | 1 |
| F3 | Default `exit_scope = wireframe-and-spec` mismatches F's handoff-zip need | F | 1 |
| J1 | URL_EXTRACT branch unimplemented (master.md:56 references it) | J | 1 |
| J2 | @figma/code-connect detected but used only for persona, never as token source | J | 2 |
| J3 | Catalog match will false-rank `figma` id when user shares own Figma file | J | 1 |
| J4 | PlanInputs has no extracted-token schema → tokens vanish before OMD-PLAN.md | J | 1 |
| S1 | code-introspect treats 1px borders as spacing tokens (PX_RE unfiltered) | S | 1 |
| S2 | No inconsistency detection (no 8pt-grid check, no radius-scale check) | S | 3 (defer) |
| S3 | Fold-in math: importance=1 × count=10 still promotes (false rule) | S | 1 |
| S4 | Fold-in duplicated in memory.ts AND session-end-foldin.cjs (drift risk) | S | 1 |
| S5 | post-edit-watch hex case asymmetry (Tailwind v4 oklch / CSS vars unhandled) | S | 1 |

## Major (priority 2)

- V-M1 hook keyword "메인 화면 디자인" too narrow → loosen
- V-M2 turn count not synced (master vs launcher) → spec
- V-M3 FAST_EXIT counter not persisted → add to BudgetState
- V-M4 OMD-PLAN.md edit round-trip parser missing → add Markdown→PlanInputs
- V-M5 frontend detection requires `is_frontend` to also need `.tsx/.jsx` file
- F-Major: turn count, persona sticky, no anti-platitude
- J-Major: designVocab regex too narrow (8pt grid / type ramp / modular scale missing), no J-specific question library, Phase 5 patch cites catalog tokens as user's
- S-Major: persona sticky, no rule 999 negotiation, no anti-platitude in critic, cascade re-runs, hex case

## Fix execution plan

**Batch A — data/code quality**
1. code-introspect: filter spacing < 4px (1px borders, etc.)
2. signal-classifier: re-classify picker labels via opt-out corpus
3. memory.ts: tighten fold-in (require importance avg ≥ 3 AND score ≥ 80)
4. session-end-foldin.cjs: align formula with memory.ts (single SoT note)
5. post-edit-watch.cjs: hex case + 3-vs-6 char normalization
6. designVocab regex: add 8pt grid / type ramp / modular scale / tracking / leading / line-height / radius scale / elevation / hierarchy

**Batch B — state machine**
7. F-FAST path: empty repo + URL hint + first turn → propose plan immediately, defaults
8. Persona-driven exit_scope: F → handoff-zip, others → wireframe-and-spec
9. V auto-pick top-1 ref (skip ref question)
10. Persona signal re-eval each turn
11. Anti-platitude clause in critic prompt
12. PlanInputs token schema: palette/typography/spacing fields

**Batch C — URL/data**
13. url-token-extractor: figma.com special case (graceful "paste tokens" message)
14. URL_EXTRACT branch: actually call extractor, fallback to catalog
15. Plan-emitter: surface extracted tokens

**Batch D — install/hooks**
16. install-skills postinstall: explicit "restart Claude Code" banner
17. skill-rules.json: loosen omd-harness keywords

**Batch E — guards**
18. install-skills + master spawn: try/catch + recovery prose
19. .handoff.json atomic write (rename pattern)
20. New unit tests covering all fixes

