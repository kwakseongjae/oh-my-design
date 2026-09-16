---
name: omd:add-reference
description: "Reference catalog authoring compatibility gate. Core v2 cutover가 끝나기 전에는 신규 legacy DESIGN.md 쓰기를 차단하고 안전한 재개 조건을 설명한다."
argument-hint: "<url|id>"
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

# omd:add-reference — Core v2 catalog cutover gate

Status: `CORE_V2_CATALOG_WRITE_BLOCKED`.

The historical reference catalog remains a dual-read migration input. It is not
permission to create another legacy file. Do not write or update
`web/references/<id>/DESIGN.md`, frontmatter tokens, generated counts, or mirrors.

On invocation, return the blocker and the proposed reference id/source list
without writing. Authoring may resume only after a graph-backed reference
metadata/evidence schema, deterministic Core projection, migrated registry and
quality readers, legacy dual-read/Core single-write tests, and a dropped-zero
migration gate all pass together.

Never restore a legacy YAML marker, 13/15/16-section output, placeholder
sentinels, or a second authoritative Markdown dialect as a shortcut.
