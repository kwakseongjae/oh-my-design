# Reflow v7 portable candidate — 1.9.149

## Decision

`omd-portable-reflow-v7-candidate` is accepted as an exact, portable candidate for provider evaluation. This is a preparation and provenance checkpoint, not a quality result and not a public promotion.

## Locked identity

- source commit: `0b81b5264cf7bf955629d0dd2a98d1aaff56f0a3`
- source: detached, clean, publishable Git worktree at `/tmp/ui-frontier-19103/vendors/omd-1.9.147`
- source path: `skills/omd-apply`
- Cursor install: `.cursor/skills/omd-apply`
- installed skill tree SHA-256: `079c32e6a0974b696237b80e652e0796e4b86a260a6c9c071d61580ad75b928a`
- installed `SKILL.md` file SHA-256: `93ed06c5e4c877126933764c4369e550c4b9a2450e0a4f783a60737a013cc7da`
- activation SHA-256: `01728b95555028b7db735816e304bd2e51ca60aee1a59fd65e9b97aa75c58a9f`

## Diagnostic preparation

The candidate was prepared without a provider call at `/tmp/u19149-v7-diagnostic` against the locked `support-routing-handoff-v0.1` task.

- task core prompt SHA-256: `21008e52911623f820b95c554af22381f547f3cd9886e118328fcb00bcb523fe`
- starter SHA-256: `ea6e6a8eef2bf0039b83b6efbb92b30ad9ccea038cedff7860c4b9e6ec70750e`
- DESIGN.md SHA-256: `23e2ca9af2a5100611fb2ef30352686632afab452a6d8ba2ba90c8794cd1a2ce`
- index.html SHA-256: `5b1c040fd206de1a0799a0d4315949691a1de23f8915822038d9e80ce8f87add`
- source dirty entries: `0`
- third-party installer, hooks, and agent tools executed: `false`

## Verification

- focused v7 competitor-pin test: `1/1` green
- TypeScript lint: green
- full benchmark unit file: `42/44` green; the two failures are pre-existing non-Git `/tmp` fixtures for Taste and UI UX Pro, outside this candidate and unchanged by it

## Next gate

Run exact previous canonical versus v7 on the unseen support-routing task as two arms × three trials. Promotion requires v7 UI-Resolved `3/3`, Reliability@3 `100%`, no protected behavior or evidence loss, and no paired guardrail regression.
