---
name: omd-component-harvest
description: "Legacy catalog component writer safety gate. Use when component harvesting is requested, but stop before editing until the Core v2 graph-backed catalog writer and readers are available."
---

# omd:component-harvest — catalog write safety gate

`CORE_V2_CATALOG_WRITE_BLOCKED`

Do not rewrite a reference section, legacy frontmatter token block, mirror, or
quality marker. The current public catalog is dual-read source material, while
all future writers must be graph-backed Core v2. Reusing the retired section and
frontmatter mutation path would create a new legacy authority and can silently
lose provenance.

Report that component harvesting is temporarily read-only. Evidence collection
may be proposed separately, but no catalog bytes may change until a canonical
catalog graph/evidence writer, migrated readers, and a provider-free
`dropped_segments=0` migration gate ship together.
