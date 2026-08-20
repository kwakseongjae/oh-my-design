# Reflow v10 portable candidate — 1.9.161

## Decision

`omd-portable-reflow-v10-candidate` is accepted as an exact portable candidate for provider evaluation. This checkpoint proves source identity and installation only; it is not a quality result or promotion.

## Locked identity

- source commit: `e3e5c6e4edb968a76ded79d6a9f5f6fe4c453a33`
- source: detached, clean, publishable Git worktree at `/tmp/ui-frontier-19103/vendors/omd-1.9.159`
- source path: `skills/omd-apply`
- Cursor install: `.cursor/skills/omd-apply`
- installed skill tree SHA-256: `fb7472d55d1145073cf85877dca4194cb0c529606e19e4f3e32b765d03973d8f`
- installed `SKILL.md` SHA-256: `c649e30c83ebd5eecbf856b9ba133d62cf2335e40176bcf4438abf24389f251f`
- activation SHA-256: `01728b95555028b7db735816e304bd2e51ca60aee1a59fd65e9b97aa75c58a9f`

## Diagnostic preparation

Provider-free diagnostic: `/tmp/u19161-v10-diagnostic` against exact `research-sample-routing-v0.1`.

- core prompt SHA-256: `cfd01edd68779260b73237233c43e7bf308c19c3dc67253361fd205e6ebb730a`
- full prompt SHA-256: `821214b9120f1563c646d02d3170fc25fc00876be60022717aa36b2f7c9291f6`
- starter SHA-256: `30926173fe7a78403d07c70f7948230f787fc39b68d17f55972ca7da66ef41c3`
- source dirty entries: `0`
- third-party installer, hooks, and agent tools executed: `false`

## Verification

- focused v10 candidate pin: `1/1` green
- source attached state: detached HEAD
- source publishable: true
- TypeScript lint: green

## Next gate

Run exact previous canonical versus v10 on the unseen research-sample task as two arms × three trials. Promotion requires v10 UI-Resolved `3/3`, Reliability@3 `100%`, no target demotion, and no protected behavior, evidence, accessibility, hierarchy, or reflow regression.
