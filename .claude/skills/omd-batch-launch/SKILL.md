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
