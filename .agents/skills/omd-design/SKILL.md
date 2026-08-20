---
name: omd:design
description: "Legacy survey-based DESIGN.md writer redirect. Use for old omd:design requests only to route them to the Core v2 Autopilot or init workflow; this compatibility skill never writes DESIGN.md itself."
---

# omd:design — Core v2 compatibility redirect

`CORE_V2_LEGACY_WRITER_BLOCKED`

This legacy survey flow cannot author a new project design system. It mapped
preferences into the retired frontmatter/numbered-section format and could not
produce the evidence-bound Core v2 package.

For a new project or autonomous build, route the original request to
`omd:autopilot`. For design-system-only work, route it to the current
`omd:init` workflow. Preserve the user's original brief and preferences; do not
ask them to repeat information already present in the conversation.

Do not decode an old survey result into DESIGN.md, copy a catalog reference into
the project root, or hand-author a partial replacement. New output must use the
clean-top, seven-anchor standalone Core v2 projection. Only an explicitly
adopted `profile: portable-core` manifest with exact graph/projection hashes may
make the System Graph canonical; a migration candidate remains non-authoritative.
