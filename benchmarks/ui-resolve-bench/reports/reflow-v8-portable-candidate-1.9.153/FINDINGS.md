# Reflow v8 portable candidate — 1.9.153

## Decision

`omd-portable-reflow-v8-candidate` is accepted as an exact portable candidate for provider evaluation. This checkpoint proves source identity and installation only; it is not a quality result or promotion.

## Locked identity

- source commit: `e33fd2198bee50938ed3da51989dc9f9d13256a2`
- source: detached, clean, publishable Git worktree at `/tmp/ui-frontier-19103/vendors/omd-1.9.151`
- source path: `skills/omd-apply`
- Cursor install: `.cursor/skills/omd-apply`
- installed skill tree SHA-256: `60b4fe6be8ae6e61aa7575f75502cc4a2f5b116092d95b155ab5d9edc0c9b696`
- installed `SKILL.md` SHA-256: `26bfbe554c0f23949c622f25323d9c113f3cd925eeb439b7e7842a6e27f6bc3d`
- activation SHA-256: `01728b95555028b7db735816e304bd2e51ca60aee1a59fd65e9b97aa75c58a9f`

## Diagnostic preparation

Provider-free diagnostic: `/tmp/u19153-v8-diagnostic-v2` against exact `warehouse-transfer-routing-v0.1`.

- core prompt SHA-256: `477737f4088207b740be7d69744fff9f1b3e3be0e448725a709c544f553f6cc2`
- full prompt SHA-256: `ce56fd2850a672558c819c4273f8f083604d6d8e6c945d2f0eac954a4eabb71f`
- starter SHA-256: `4f6ec8eaf629cb0258caaffcf45d67ba40ec520cb273e6782c394abe7c0aa80e`
- source dirty entries: `0`
- third-party installer, hooks, and agent tools executed: `false`

## Verification

- focused v8 candidate pin: `1/1` green
- source attached state: detached HEAD
- source publishable: true

## Next gate

Run exact previous canonical versus v8 on the unseen warehouse-transfer task as two arms × three trials. Promotion requires v8 UI-Resolved `3/3`, Reliability@3 `100%`, no protected selector visibility loss, and no protected behavior, evidence, accessibility, hierarchy, or reflow regression.
