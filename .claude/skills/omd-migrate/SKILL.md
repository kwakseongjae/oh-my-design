---
name: omd:migrate
description: "Legacy deep-reference writer safety gate. Use for old brand migration requests only to prevent retired section/frontmatter writes until the Core v2 catalog migration pipeline is authoritative."
argument-hint: "<brand-id>"
user-invocable: true
---

**Expiry.** This gate is a waiting state, not a policy. It lifts when the
catalog adoption path lands — the T2-2 writer gate. Status, **updated 2026-09-16**
(the earlier "today: 없다" note was written 2026-09-02 and went stale):

- *graph-backed Core v2 writer exists* — **met.** `--adoption-target
  reference-catalog` shipped with a four-canary isolated adopt → rollback →
  readopt rehearsal (2026-09-08, `.omd/execution/2026-09-08/sprint90/core/`).
- *every catalog reader accepts its package* — **not met.** The web readers still
  parse legacy frontmatter and numbered sections
  (`extract-tokens.ts`, `generate-css.ts`, `font-registry.ts`, `logos.ts`).

**Scope, narrowed by owner decision 2026-09-16.** The second condition governs
*Core v2 packages*, so it cannot govern a write that produces none. Two different
operations were being blocked by one rule:

| Operation | Produces a Core package? | Status |
|---|---|---|
| Create a **new** legacy reference, or a new Core catalog package | yes / adds migration debt | **still refused** |
| Refresh **evidence on an existing** reference — `verification_v2`, `.verification.md`, `tokens.components` state values, `## Proof` | no; the file stays legacy and stays in the same migration queue | **allowed** |

An evidence refresh does not create another legacy file — it restores what an
earlier pass discarded from a file already queued for migration. It therefore
falls outside this gate's stated purpose.

Still refused, with no one-off exception and no plausible fallback: creating a new
reference, adding a brand, restoring a legacy YAML marker, emitting 13/15/16-section
output, placeholder sentinels, a second authoritative Markdown dialect, or mutating
generated counts and mirrors by hand.

# omd:migrate — catalog write safety gate

`CORE_V2_CATALOG_WRITE_BLOCKED`

Do not mutate `web/references/<id>/DESIGN.md`, its frontmatter, numbered
sections, verification footer, or mirrors. Those files remain readable during
the migration window, but creating more legacy bytes would violate the Core v2
dual-read/single-write contract.

For a provider-free assessment, use the Core migration auditor in check mode.
Do not adopt or overwrite its staged result. A migration candidate keeps the
source DESIGN.md canonical until a graph-backed catalog writer, migrated
consumers, evidence binding, and `dropped_segments=0` acceptance ship together.
