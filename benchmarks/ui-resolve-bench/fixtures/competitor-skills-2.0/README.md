# competitor-skills-2.0 — frozen portable skill packs

Byte-identical copies of the per-arm skill packs from the immutable Luna
caf0e62d materialized cells (which themselves were installed from the frozen
official competitor sources locked in
`config/omd-2.0-competitor-source-lock-v0.1.json`). Installed by
`materialize-grok46-wow-preview.mjs` into each non-model-only cell workspace
(`.agents/skills/…`, plus workspace `scripts/` for omd-autopilot-v2) so the
activation prefix refers to a skill that actually exists in the isolated
runtime. Grok Build CLI discovers workspace skills under `.agents/skills/`
(probed 2026-08-15; also `.grok/skills/`, unused here to stay byte-identical
with the Luna layout).

`SHA256SUMS` freezes every file; the lock step records the per-arm tree hash
into the locked matrix and the materializer fail-closes on any drift.
