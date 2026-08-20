---
name: omd:batch-launch
description: "Reference batch writer compatibility gate during the DESIGN.md Core v2 catalog cutover."
argument-hint: "[category|theme]"
user-invocable: true
---

# omd:batch-launch — Core v2 catalog cutover gate

Status: `CORE_V2_CATALOG_WRITE_BLOCKED`.

Do not add references, mutate counts, start authoring workers, or promote an
unshipped batch. The retired writer emitted legacy frontmatter and numbered
sections. It stays disabled until reference metadata/evidence has a canonical
graph package, a deterministic Core projection, migrated readers, and a
dropped-zero compatibility suite.

Candidate research may be returned in chat only. Do not bypass this gate with
legacy YAML, placeholder sentinels, or mixed-format catalog files.
