---
name: omd-token-backfill
description: "Legacy reference token writer compatibility gate during the DESIGN.md Core v2 catalog cutover."
---

# omd:token-backfill — Core v2 catalog cutover gate

Status: `CORE_V2_CATALOG_WRITE_BLOCKED`.

Do not add or rewrite YAML `tokens:` blocks. Historical token data remains a
dual-read migration input; new structured tokens belong in the canonical System
Graph and must project to a vendor-neutral DESIGN.md Core v2 file.

Resume only after the catalog graph/evidence package, token closure validator,
registry and quality readers, and dropped-zero legacy migration are available.
Until then this skill performs no writes and suggests no plausible fallback.
