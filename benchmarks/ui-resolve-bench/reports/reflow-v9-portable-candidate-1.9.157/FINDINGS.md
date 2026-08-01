# Reflow v9 portable candidate — 1.9.157

## Decision

`omd-portable-reflow-v9-candidate` is accepted as an exact portable candidate for provider evaluation. This checkpoint proves source identity and installation only; it is not a quality result or promotion.

## Locked identity

- source commit: `b6fa87d1d274b5b74283ccdc9d7717aa765ea6fc`
- source: detached, clean, publishable Git worktree at `/tmp/ui-frontier-19103/vendors/omd-1.9.155`
- source path: `skills/omd-apply`
- Cursor install: `.cursor/skills/omd-apply`
- installed skill tree SHA-256: `eca9a09a79b8cf991604b96c4141a48f782c77bde66a0b061044bc5ba4c91a8b`
- installed `SKILL.md` SHA-256: `7f12521c8647cc00bbfb68eecb985b550caa5282bff04d5a714ba1bf27866271`
- activation SHA-256: `01728b95555028b7db735816e304bd2e51ca60aee1a59fd65e9b97aa75c58a9f`

## Diagnostic preparation

Provider-free diagnostic: `/tmp/u19157-v9-diagnostic` against exact `museum-loan-routing-v0.1`.

- core prompt SHA-256: `f512b7f6bf2ea2474953f9f8ec98cae6095effa49007e5da5091c1a76e85bf10`
- full prompt SHA-256: `a2764a0f1a57882e95de0e9bbeca25ff58ad87ff356ac8fab3e8b1b21cb35fcc`
- starter SHA-256: `1c838a6b6eebeb41b5795c8ff0c754cb620ecc0d831f93686a4ffdb01cb58a47`
- source dirty entries: `0`
- third-party installer, hooks, and agent tools executed: `false`

## Verification

- focused v9 candidate pin: `1/1` green
- source attached state: detached HEAD
- source publishable: true
- TypeScript lint: green

## Next gate

Run exact previous canonical versus v9 on the unseen museum-loan task as two arms × three trials. Promotion requires v9 UI-Resolved `3/3`, Reliability@3 `100%`, no protected selector visibility loss, and no protected behavior, evidence, accessibility, hierarchy, or reflow regression.
