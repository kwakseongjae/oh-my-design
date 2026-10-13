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

## Write path: DESIGN.md v3 (2026-10-14)

The catalog is DESIGN.md v3 (`spec/design-md-v3.md`): every `web/references/<id>/` holds a
Google-frontmatter `DESIGN.md` and a `reference.json` sidecar. Any write this gate permits (an
evidence refresh on an existing reference) goes through one path: read
`readReferenceSource(dir).markdown` (the legacy-shaped source), edit it, and write it with
`scripts/design-md-v3/writer.mjs` `writeReference(dir, text)`, which converts, checks spec §10
conformance with 0 Google lint errors, and writes the file, the sidecar and the `design-md/` mirror.
`web/scripts/assemble-reference.mjs` emits v3 the same way. The OmD 0.1 text-patching tools
(`apply-state-values`, `apply-measured-palette`, `apply-primary-tasks`, `migrate-frontmatters`,
`retire-template-motion`) refuse v3 files until they are ported. Creating a new reference stays
refused until the owner lifts this gate.
