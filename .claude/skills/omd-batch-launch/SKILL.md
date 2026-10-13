---
name: omd:batch-launch
description: "Reference batch writer compatibility gate during the DESIGN.md Core v2 catalog cutover."
argument-hint: "[category|theme]"
user-invocable: true
---

**Expiry.** This gate is a waiting state, not a policy. It lifts when the
catalog adoption path lands — the T2-2 writer gate, tracked in
`docs/OMD_PLAN_2026-09-02.md` §0 "카탈로그 채택 경로" (today: 없다 — the migrated
bodies sit in `docs/design-md-weight/migrated/` and `web/references/` is still
legacy). Until a graph-backed Core v2 writer exists and every catalog reader
accepts its package, this skill refuses catalog writes — all of them, with no
one-off exception and no plausible fallback.

# omd:batch-launch — Core v2 catalog cutover gate

Status: `CORE_V2_CATALOG_WRITE_BLOCKED`.

Do not add references, mutate counts, start authoring workers, or create promo
claims from an unshipped batch. The prior workflow emitted legacy frontmatter
and numbered sections, so it is disabled until `omd:add-reference` has a
graph-backed Core v2 writer and all catalog readers accept its package.

Candidate research may be returned in chat without repository writes. Never
bypass this gate with legacy YAML, placeholder sentinels, or a mixed-format batch.

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
