---
name: omd:migrate
description: "Legacy deep-reference writer safety gate. Use for old brand migration requests only to prevent retired section/frontmatter writes until the Core v2 catalog migration pipeline is authoritative."
argument-hint: "<brand-id>"
user-invocable: true
---

# omd:migrate — catalog write safety gate

**Scope, narrowed by owner decision 2026-09-16.** This gate blocks writes that
create a *new* legacy reference or a new Core catalog package. It does **not**
block refreshing evidence on an **existing** reference — `verification_v2`,
`.verification.md`, `tokens.components` state values, `## Proof` — because that
produces no Core package and adds no migration debt; the file stays legacy and
stays in the same queue. Creating a reference, adding a brand, restoring a legacy
YAML marker, emitting retired section output, placeholder sentinels, or hand-editing
generated counts and mirrors all remain refused. Full rationale and the two expiry
conditions: `.claude/skills/omd-add-reference/SKILL.md`.


`CORE_V2_CATALOG_WRITE_BLOCKED`

Do not mutate `web/references/<id>/DESIGN.md`, its frontmatter, numbered
sections, verification footer, or mirrors. Those files remain readable during
the migration window, but creating more legacy bytes would violate the Core v2
dual-read/single-write contract.

For a provider-free assessment, use the Core migration auditor in check mode.
Do not adopt or overwrite its staged result. A migration candidate keeps the
source DESIGN.md canonical until a graph-backed catalog writer, migrated
consumers, evidence binding, and `dropped_segments=0` acceptance ship together.
