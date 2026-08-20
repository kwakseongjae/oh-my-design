---
name: omd
description: "Compatibility router for older `omd` invocations. Route existing UI work to omd:apply, autonomous greenfield work to omd:autopilot, and DESIGN.md-only setup or migration to omd:init. Use it only when the legacy skill name is invoked; it reads Core v2 or legacy context without writing DESIGN.md itself."
---

# OmD compatibility router

`ROUTER_ONLY_NO_DESIGN_MD_WRITES`

This skill preserves old `omd` entrypoints while the active workflows live in
`omd:apply`, `omd:autopilot`, and `omd:init`. It classifies the available design
context, transfers the original request to one canonical workflow, and then
stops. Do not duplicate a target workflow here.

## Authority classification

Inspect these files without mutating them:

1. A valid adopted Core v2 package has a hash-bound
   `.omd/system/manifest.json` with `format: design-md-core`,
   `format_version: 2.0.0`, `profile: portable-core`, and
   `authority.canonical: system-graph`. Only after the target workflow validates
   the manifest, graph, projection, and exact bidirectional hashes is
   `.omd/system/graph.json` canonical. Root `DESIGN.md` remains its complete,
   vendor-neutral portable projection.
2. `profile: migration-candidate` is non-authoritative. Keep the source
   `DESIGN.md` named by its authority record canonical while the candidate is
   reviewed. Never use the candidate as a Bound System.
3. If the package is absent, stale, invalid, or hash-mismatched, use root
   `DESIGN.md` independently for the rules it actually expresses. It does not
   require sidecars, an OmD install, or this skill to be useful. Do not claim
   graph authority or a conformance level that has not been validated.
4. A legacy or unmarked root `DESIGN.md` remains a read-only compatibility
   input. If root `DESIGN.md` is absent, `.stitch/DESIGN.md` may be used only as
   the same read-only fallback. Apply declared rules, omit unknown values at the
   smallest boundary, and never silently rewrite or upgrade either file.

A stale binding invalidates graph authority, not the readable Markdown. Never
promote reference observations, placeholders, or generic defaults into project
facts.

## Route once

- Existing UI, component, styling, motion, microcopy, design review, or other
  bounded product work -> transfer the unchanged request and authority
  classification to `omd:apply`.
- Broad from-scratch product work, a new surface with delegated decisions, or
  autonomous design-system-plus-implementation work -> transfer to
  `omd:autopilot`.
- DESIGN.md bootstrap, design-system-only creation, explicit migration,
  refactor, or refresh without product implementation -> transfer to
  `omd:init`.
- If the user explicitly requests guided checkpoints, transfer to
  `omd:harness`; do not convert that request into Autopilot.

Use the runtime's skill dispatch when available. Otherwise locate the selected
skill in the active channel, read its `SKILL.md` completely, and follow it. Pass
through the user's original brief, preferences, and known authority facts so the
user is not asked to repeat them.

## Write boundary

This compatibility shim may inspect and route only. It must not create, edit,
copy, move, rename, delete, or project `DESIGN.md`; it must not edit
`.omd/system`; and it must not run a writer or migration command itself. The
selected canonical workflow owns every write, checkpoint, migration proof, and
validation step.
