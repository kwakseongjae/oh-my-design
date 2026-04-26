---
name: Agent fidelity report
about: Report a real session of `omd:init` (or other omd:* skills) running in your agent. These reports drive the v0.2 roadmap.
title: '[fidelity] '
labels: agent-fidelity
---

## Setup

- **Agent + version**: <!-- e.g. Claude Code 1.x.x / Codex CLI / OpenCode 0.x.x / Cursor -->
- **OS**: <!-- macOS 14 / Ubuntu 22.04 / Windows 11 / WSL2 -->
- **`oh-my-design-cli` version**: `npx oh-my-design-cli --version` →
- **Skills installed via**: <!-- `omd install-skills` / manual copy / pre-existing -->

## What you ran

```
# the user prompt or commands you gave the agent
```

## What omd:init produced

Attach or paste the relevant pieces. Don't include anything sensitive.

- `.omd/init-context.json`:
  ```json
  ```
- Resulting `DESIGN.md` — section that looks wrong (or full file if small):
  ```markdown
  ```

## What you expected vs got

<!-- 1-3 bullets. -->

## 7-rule self-assessment

Tick each that the output passes (skill enforces these in Phase 5B):

- [ ] **R1** — Section structure 1:1 with the reference (same H2/H3 in same order)
- [ ] **R2** — Token values changed only where `delta_set` authorizes; rest byte-for-byte
- [ ] **R3** — Voice fingerprint preserved (sentence length / register / metaphor density)
- [ ] **R4** — Domain swap scoped to concrete nouns (verbs/adjectives/framing untouched)
- [ ] **R5** — No new philosophies added (no new bullets/principles outside the reference)
- [ ] **R6** — Unresolved deltas (if any) marked with `<!-- omd:unresolved: ... -->`
- [ ] **R7** — Voice hints from `delta_set.voiceHints` reflected in §10
- [ ] **R8** — §11–13 (Brand Narrative / Principles / Personas) either filled with project-specific facts collected in Phase 4.5, OR left as `[FILL IN: ...]` placeholders with `omd:limitation` comments

## Phase 4.5 dialog (NEW in v0.1.x)

- Did the agent ask you for project facts (founding date / thesis / tagline / personas) before writing §11–13?
  - [ ] Yes — collected facts and used them
  - [ ] Yes — I said "skip" and got `[FILL IN]` placeholders
  - [ ] No — agent skipped Phase 4.5 entirely
  - [ ] N/A — used a reference without §11–13

## Anything else

<!-- Anything surprising, confusing, or that you wish the skill had asked. -->
