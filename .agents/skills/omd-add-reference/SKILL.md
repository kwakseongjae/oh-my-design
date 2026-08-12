---
name: omd:add-reference
description: "Reference catalog authoring compatibility gate. Core v2 cutover가 끝나기 전에는 신규 legacy DESIGN.md 쓰기를 차단하고 안전한 재개 조건을 설명한다."
argument-hint: "<url|id>"
user-invocable: true
---

# omd:add-reference — Core v2 catalog cutover gate

Status: `CORE_V2_CATALOG_WRITE_BLOCKED`.

This repository still reads the 440 historical reference files through the
legacy frontmatter adapter. That makes them valid migration inputs, but it does
not authorize a new legacy writer. Do not create, update, backfill, or sync a
`web/references/<id>/DESIGN.md` from this skill.

When invoked:

1. Inspect only. Do not write a reference, token block, generated catalog, or
   public count.
2. Explain that project/user-facing DESIGN.md is already single-write Core v2,
   while reference authoring is paused until the catalog has a graph-backed
   metadata/evidence package and Core projection compiler.
3. If research is still useful, save nothing to the catalog. Return a concise
   proposed source list and the intended reference id in chat only.
4. Resume writes only after all of these exist and pass together:
   - Core v2 reference metadata/evidence sidecar schema;
   - registry, quality, AST, token, and verification readers for that schema;
   - deterministic graph → portable DESIGN.md projection;
   - legacy dual-read and Core single-write tests;
   - migration report with `dropped_segments=0` and unknown facts absent.

Never work around this gate by restoring a legacy YAML marker, numbered
13/15/16 sections, placeholder sentinels, or a second authoritative Markdown dialect.
