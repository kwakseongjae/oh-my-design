# RFC: Multi-surface brand spec (deferred)

**Status**: deferred / not blocking
**Filed**: 2026-05-13
**Trigger**: Banksalad mismatch — canonical DESIGN.md captured "advisor app" idiom, but `banksalad.com` is a "marketing landing" idiom. Generated landing.html was schema-faithful but didn't resemble the actual brand homepage.
**Decision**: do NOT do this schema change now. Solve at the skill level first (see `data/issues/2026-05-13-multi-surface-schema-rfc.md` companion fix in commit history). Revisit only if skill-level fix proves insufficient after ~10 more brand additions or repeated user complaints about surface mismatch.

---

## Problem

One brand can have visually distinct surfaces (marketing landing, in-app, docs, onboarding). The current `DESIGN.md`-per-brand schema implicitly picks ONE surface as canonical. Generators following the spec faithfully will mismatch when user requests a different surface.

## Why we're deferring the schema change

1. **Both prior-art systems we surveyed keep schema single**:
   - Google Stitch treats variants/modes/devices as runtime workflows (sidebar items in their docs), not separate spec documents.
   - getdesign.md allows N entries per brand with catalog-level tags, but actual catalog data shows 1 entry per brand in practice (e.g. Apple has 1 entry).
   - W3C Design Tokens Community Group spec deliberately does NOT scope tokens by surface — leaves it to vendor `$extensions`.
2. **Authoring cost scales poorly**: 88 brands × N surfaces is real maintenance overhead for marginal cases. Only ~10-15% of brands appear to have visually distinct landing/app idioms.
3. **The Banksalad case is a generator priority bug, not a schema gap**. We already had `tokens.json#live_overrides` and screenshots — the generator just didn't weight them.
4. **Backward compatibility**: 88 published references would all need migration. High blast radius for unclear payoff.

## What might warrant revisiting

- ≥3 distinct user reports of "this brand's generated output doesn't look like the real brand"
- A new batch where ≥30% of brands exhibit landing-vs-app idiom split
- AI coding agents adopting a multi-surface convention (W3C tokens spec, Stitch, etc. adding `surface` as a first-class field)

## Sketch (if/when we do this)

Probable shape based on the survey:

- `web/references/<id>/DESIGN.md` stays — essence-leaning (voice, principles, motion philosophy, raw palette)
- Optional `surfaces/<surface>.md` overlay files — delta only, frontmatter `surface: marketing|product|docs|onboarding`, `extends: ../DESIGN.md`
- Generator reads essence + (one) overlay → composes
- Closed enum chosen for AI determinism (Spectrum/Carbon precedent — productive vs expressive moment)
- Only ~10-15% of brands need overlays — most stay single-doc

## What we're doing instead (now)

Skill-level fix shipping in v1.4.0 or similar:

1. `omd:reference-capture` writes `structure.json` recording observable composition cues (hero type, CTA shape, nav structure, ornament style) — facts, not copyrighted content.
2. `omd:apply` / `omd:harness` instructed to Read hero screenshots as images for visual grounding before composing.
3. Token-resolution priority order documented: `tokens.json#live_overrides` > canonical DESIGN.md > `delta_set`. Brand essence (voice, principles, motion philosophy) stays canonical-only.
4. `omd:harness` Step 4 master prompt includes a `surface_signal` field derived from task keywords (`랜딩`→marketing, `대시보드`→product, etc.). Master uses it to weight reference-capture artifacts vs canonical spec.

The skill-level fix achieves the same Banksalad-landing outcome without any schema or migration work.

## References (survey notes)

- Stitch docs at `stitch.withgoogle.com/docs/design-md/overview` — sidebar nav includes `Device Types`, `Design Modes`, `Generate design variations` as separate workflows
- getdesign.md catalog (`getdesign.md/apple`) — N-entries-per-brand with category tags at catalog level, but actual data has single entries
- W3C Design Tokens spec `tr.designtokens.org` — `$extensions` escape hatch, no surface primitive
- Material 3 (`m3.material.io`) — three-tier `ref/sys/comp` is vertical, not surface-horizontal
- Carbon (`carbondesignsystem.com`) — theme axis (`white/g10/g90/g100`) is the closest to surface, but it's a single coarse dimension
- Adobe Spectrum (`spectrum.adobe.com`) — `productive/expressive` moment is a 2-bucket idiom split; precedent for closed enum
- shadcn/ui (`ui.shadcn.com`) — explicitly refuses the surface problem by shipping unstyled primitives

---

## Linked actions

- [ ] Implement skill-level fix (4 items above) — target v1.4.0
- [ ] After 3 more batches, re-evaluate whether skill fix is sufficient
- [ ] If not, draft formal `omd: 0.2` schema following the surfaces/<name>.md sketch
