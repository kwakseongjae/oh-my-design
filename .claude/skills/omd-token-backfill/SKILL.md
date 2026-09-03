---
name: omd-token-backfill
description: "Legacy reference token writer compatibility gate during the DESIGN.md Core v2 catalog cutover."
---

**Expiry.** This gate is a waiting state, not a policy. It lifts when the
catalog adoption path lands — the T2-2 writer gate, tracked in
`docs/OMD_PLAN_2026-09-02.md` §0 "카탈로그 채택 경로" (today: 없다 — the migrated
bodies sit in `docs/design-md-weight/migrated/` and `web/references/` is still
legacy). Until a graph-backed Core v2 writer exists and every catalog reader
accepts its package, this skill refuses catalog writes — all of them, with no
one-off exception and no plausible fallback.

# omd:token-backfill — Core v2 catalog cutover gate

Status: `CORE_V2_CATALOG_WRITE_BLOCKED`.

Do not add or rewrite YAML `tokens:` blocks. Historical token data remains a
dual-read migration input; new structured tokens belong in the canonical System
Graph and must project to a vendor-neutral DESIGN.md Core v2 file.

Resume only after the catalog graph/evidence package, token closure validator,
registry and quality readers, and dropped-zero legacy migration are available.
Until then this skill performs no writes and suggests no plausible fallback.
