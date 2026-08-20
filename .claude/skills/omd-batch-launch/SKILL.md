---
name: omd:batch-launch
description: "Reference batch writer compatibility gate during the DESIGN.md Core v2 catalog cutover."
argument-hint: "[category|theme]"
user-invocable: true
---

# omd:batch-launch — Core v2 catalog cutover gate

Status: `CORE_V2_CATALOG_WRITE_BLOCKED`.

Do not add references, mutate counts, start authoring workers, or create promo
claims from an unshipped batch. The prior workflow emitted legacy frontmatter
and numbered sections, so it is disabled until `omd:add-reference` has a
graph-backed Core v2 writer and all catalog readers accept its package.

Candidate research may be returned in chat without repository writes. Never
bypass this gate with legacy YAML, placeholder sentinels, or a mixed-format batch.
