---
name: omd:update
description: Safely update an existing oh-my-design installation in place and verify it afterward. Use when the user asks to update, upgrade, refresh, reinstall, or check whether their OmD skills, agents, hooks, or reference catalog are current.
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# Update oh-my-design

Update only the OmD installation the user already has. Preserve its project/global scope, installed channels, Cursor compatibility mode, `DESIGN.md`, references added by the user, and every file outside OmD ownership.

## Workflow

1. Run from the intended project root unless the user explicitly requests the global installation.
2. Use the latest package as the executor:

   ```bash
   npx oh-my-design-cli@latest update
   ```

   For a global installation, append `--global`. For another project root, append `--dir <path>`.
3. Never add `--force`. The update command detects installed channels, preserves the existing scope, refreshes managed files, and runs the equivalent of a post-update doctor check.
4. If the command reports a protected local difference, stop. Show the exact scoped repair command or manual action it prints; do not overwrite the file on the user's behalf.
5. Report the before/after state, preserved scope and channels, and any skipped drift. Do not claim success if the exit code is non-zero.
6. Tell the user to restart the coding agent, then run:

   ```bash
  npx oh-my-design-cli@latest doctor --self-test
   ```

## Safety contract

- Do not switch project ↔ global scope.
- Do not install channels that were not already installed.
- Do not enable proof policy, hooks, or Cursor Agent Skills that were previously absent.
- Do not update deprecated MCP configuration.
- Do not use `--force`, delete drifted files, or replace symlinks automatically.
- Do not edit `DESIGN.md` or product files during an OmD update.

If no installation exists, explain that this is a fresh install and use `npx oh-my-design-cli@latest` only after the user confirms installation intent.
