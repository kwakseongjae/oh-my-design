# Reflow v11 portable candidate — 1.9.166

## Decision

`omd-portable-reflow-v11-candidate` is accepted as an exact portable candidate for provider evaluation. This checkpoint proves source identity and installation only; it is not a quality result or promotion.

## Locked identity

- source commit: `4c27cb484ae19ceac3f72dedf4324592f2c60946`
- source: detached, clean, publishable Git worktree at `/tmp/ui-frontier-19103/vendors/omd-1.9.164`
- source path: `skills/omd-apply`
- Cursor install: `.cursor/skills/omd-apply`
- installed skill tree SHA-256: `5d0323abdc59e50ee7132cfbb2978bf03f6fa8dc0d6ebd9988ceefb21498308a`
- installed `SKILL.md` SHA-256: `c94e75597a6245d873a461a945182cd9a6c1fa0a376700b66447c846c0e2f0fb`
- activation SHA-256: `01728b95555028b7db735816e304bd2e51ca60aee1a59fd65e9b97aa75c58a9f`

## Diagnostic preparation

Provider-free diagnostic: `/tmp/u19166-v11-diagnostic` against exact `editorial-brief-routing-v0.1`.

- core prompt SHA-256: `a7183166f0986458e9c30b6f33e2edb245f9bf625172ecca8fb2eb3e5ac29cc9`
- full prompt SHA-256: `1fb2acd17028ad1d243409af83eeb267f7c41b1e4a4c64a5b09347bbce72bb1b`
- starter SHA-256: `3b734dfc3f2667d40105e44bcc4c9d4577ae2f42a418677738170a9eba6c17aa`
- source dirty entries: `0`
- third-party installer, hooks, and agent tools executed: `false`

## Verification

- focused v11 candidate/task pins: `2/2` green
- source attached state: detached HEAD
- source publishable: true
- TypeScript lint: green

## Next gate

Run exact previous canonical versus v11 on the unseen editorial-brief task as two arms × three trials. Promotion requires v11 UI-Resolved `3/3`, Reliability@3 `100%`, no false verification claim, and no protected behavior, evidence, accessibility, hierarchy, or scoped reflow regression.
