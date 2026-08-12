---
name: omd:add-reference
description: "Reference catalog authoring compatibility gate. Core v2 cutover가 끝나기 전에는 신규 legacy DESIGN.md 쓰기를 차단하고 안전한 재개 조건을 설명한다."
argument-hint: "<url|id>"
user-invocable: true
---

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
