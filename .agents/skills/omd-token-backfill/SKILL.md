---
name: omd-token-backfill
description: "Legacy reference token writer compatibility gate during the DESIGN.md Core v2 catalog cutover."
---

# omd:token-backfill — Core v2 catalog cutover gate

Status: `CORE_V2_CATALOG_WRITE_BLOCKED`.

Do not add or rewrite YAML token blocks. Historical token data is a dual-read
migration input; all new structured tokens belong in the canonical System Graph
and project to vendor-neutral DESIGN.md Core v2.

Resume only after the reference graph/evidence package, token closure validator,
registry and quality readers, and dropped-zero migration are available. Until
then this skill performs no writes and invents no fallback.
