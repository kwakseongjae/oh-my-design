# Opt-in proof-policy installer — 1.9.205

## Outcome

The CLI now exposes the real-host proof policy as an explicit project-scoped
option for Claude Code and Codex:

```bash
npx oh-my-design-cli@latest install-skills --agent claude-code codex --all --proof-policy
```

The default install remains unchanged. Cursor, OpenCode, global installs, and
`--skills-only` cannot acquire this blocker through the flag.

## Safety contract

- Existing JSON keys and unrelated hook groups are retained.
- Installed scripts carry the same content-addressed managed marker as other
  OmD hooks. Modified or symlinked managed files fail closed as drift.
- Codex activation requires a Git project root.
- `omd doctor` validates both hook events and all four installed modules only
  when an opt-in installation is detected.
- `--remove-proof-policy` removes only exact OmD hook commands and
  self-consistent managed files.
- Native host trust/review and a host restart remain required; installation is
  not described as effective enforcement until those conditions are met.

## Verification

- Focused CLI, doctor, workflow-contract, state, mapper, runtime, and classifier
  tests: 110/110 passed.
- TypeScript and diff checks passed.
- Package dry-run includes the four runtime modules.
- A built-CLI install into a fresh Git fixture produced a doctor-ready Codex
  channel. The installed hook allowed the first static closure and returned a
  `PreToolUse` deny for the second identical command.

No model/provider call was needed for this patch.
