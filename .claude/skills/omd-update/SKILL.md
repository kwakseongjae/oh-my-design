---
name: omd:update
description: Safely update an existing oh-my-design installation in place and verify it afterward. Use when the user asks to update, upgrade, refresh, reinstall, or check whether their OmD skills, agents, hooks, or reference catalog are current.
---

# Update oh-my-design

Run `npx oh-my-design-cli@latest update` from the installed project root. Append `--global` only when the user explicitly means the global installation, or `--dir <path>` for another project.

Preserve the current scope, installed channels, Cursor compatibility mode, `DESIGN.md`, and files outside OmD ownership. Never add `--force`, change proof-policy or MCP settings, or turn a missing installation into a fresh install without confirmation.

If the update exits non-zero, report the protected difference and exact scoped action without overwriting it. On success, report the preserved channels, ask the user to restart the coding agent, and run `npx oh-my-design-cli@latest doctor`.
