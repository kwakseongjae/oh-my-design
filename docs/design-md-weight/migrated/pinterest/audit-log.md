# Pinterest F3 audit (wave5 full resubmit)

Auditor: grok-4.6 (fresh session, not the T2 worker).
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7 — B2 / B2a / E1 / E2 / E2a–c only.
Date: 2026-08-23

Sentence class used: brand-published fact / observed technical / editorial interpretation or causal/application judgement. Only the third class without an adjacent complete qualifier (`derived editorial implementation inference` / `not Pinterest-authored or a separately published UI specification`) was edited in the body. There is no reconstruction-boundary exemption. Token values, component tables, state applicability maps, and section structure were not changed. Worker resubmit decisions left in place: Business action loading·error·success omitted (not closed as destination); 2px shadow not bound to the filled action; §9 agent-prompt wrappers deleted.

## Classification (DESIGN.md)

Already adjacent to a complete B2a phrase and left as-is:
- Scope token-note application
- Scope atmosphere
- Scope side-by-side / not-lead-generation-chrome
- Scope narrative-does-not-authorize-tokens
- numbered Principles (four items + UI implications)
- capture-bound application
- Semantic color Canvas unmerged-foreground; business ink not-substitute; on-action unmerged
- Shape not-a-universal-radius
- Family font-use boundary
- Capture-record legacy-removal
- Layout desktop-measurement / conservative-spacing

Left unqualified (brand-published or observed-technical — not a reconstruction-boundary exemption):
- Scope coverage, catalog homepage, Gestalt `ds.description` fact, brand-guidelines URL
- First-party Gestalt / business / campaign / badge narrative facts
- Primary tasks
- Distinctive hex / radius / badge facts
- Official brand-guideline rules paragraph and badge Don’t
- Token measurements, Type roles A1a note, component anatomy
- B3 five-kind Motion gate
- Core C1/C2/C3 capture-record policy; per-control C2 omission sentences; B1 notes
- Governance
- Named gaps inventory
- A4 field-identity notes (after judgement removal)

Third class found without adjacent complete limiter (fixed below):
- Scope Gestalt official-context / no-promote-tokens application
- Audience no-invented-personas application (limiter did not name it)
- Avoid source Don’ts that are not first-party (business-as-consumer-CTA; font-substitute)
- Semantic color consumer unmerged-role readings (`Catalog primary_color` not a Business filled-action color; not the consumer action label; not a second canvas; not general ink)
- Elevation not-a-local-field (same paragraph, not inside the limiter sentence)
- Font evidence application readings
- Assets Simple Icons identity-not-captured (imagery-omission limiter did not cover it)
- Capture-record omitted-rather-than-synthesized / variant-limit
- Component A4 “it is not Consumer ink / not merged” judgements
- Business marketing action Observed shadow Elevation-only reading
- Layout retained-only-for-that-surface
- Content official-guidance-not-copy-library / no-synthetic-voice

## Fixes

1. `DESIGN.md` Scope — attached **Using Gestalt as official product-system context in this capture, and not promoting Gestalt component tokens from it, is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.**
2. `DESIGN.md` Audience — limiter now covers groups-only / tasks-only / **not promoting invented demographic personas**; dropped the uncovered lead sentence.
3. `DESIGN.md` Avoid — first-party Don’ts is the badge rule only. Business-as-consumer-CTA and font-substitute moved under the remaining-items complete B2a.
4. `DESIGN.md` Semantic color (consumer list) — attached **The following unmerged-role readings are a derived editorial implementation inference from the verified surfaces; they are not Pinterest-authored or a separately published UI specification.**
5. `DESIGN.md` Elevation — folded not-a-local-field into the adjacent complete B2a sentence. Shadow is not rebound to the filled action.
6. `DESIGN.md` Font evidence — attached complete B2a on the evidence-class application readings.
7. `DESIGN.md` Assets — extended the adjacent complete B2a so Simple Icons identity-not-captured and omitted imagery share it.
8. `DESIGN.md` Capture record — attached complete B2a on omitted-rather-than-synthesized / variant-limit.
9. `DESIGN.md` Consumer primary action — removed the unmerged-role judgement; kept `#000000` as this control’s renderable foreground.
10. `DESIGN.md` Consumer secondary action — removed “not Consumer ink”; kept fill / Secondary surface field identity.
11. `DESIGN.md` Consumer auth input — removed “not Consumer ink”; kept border / Control border field identity.
12. `DESIGN.md` Business marketing action Observed — attached complete B2a on treating the 2px `#111111` shadow as Elevation-only, not a local field.
13. `DESIGN.md` Layout & Platforms — attached complete B2a on retaining 60px/47px measurements only for that surface.
14. `DESIGN.md` Content & Locales — attached complete B2a on official-guidance-not-copy-library / no-synthetic-voice.
15. `provenance.md` Identity — catalog `primary_color` `#e60023` was dual identity + Foundations. Grep: also Distinctive consumer-action hex and consumer-primary-action Background (E2a).
16. `provenance.md` Identity — Gestalt no-promote-tokens destinations were Experience-only. Grep: Scope + Font evidence + Named gaps (E2a).
17. `provenance.md` Proof notes — 2px shadow “Elevation + Named gaps only” omitted Business marketing action Observed (E2a).
18. `provenance.md` Proof notes derived inventory — expanded to the actual adjacent-complete B2a sites after this scan (was missing Gestalt application, Avoid CTA/font-substitute, consumer unmerged-role list, Font evidence, Simple Icons Assets reading, capture omit/variant, Observed shadow, Layout retained-only, Content).
19. `migration-log.md` YAML identity / `ds` / tokens rows — primary_color Distinctive hex; Gestalt no-promote Scope+Font evidence+Named gaps with B2a; unmerged-role readings in Semantic color under B2a; `#111111` not-substitute also Avoid (E2a).
20. `migration-log.md` §1–§8 rows — Gestalt application B2a; Layout/Avoid/Named gaps masonry destinations; Font evidence B2a; Google Sans triple; licence Named gaps; Observed shadow B2a; Avoid Don’t regroup + Family font-substitute; Assets Simple Icons B2a.
21. `migration-log.md` §10 / §11 / §14 / §15 — Content B2a + Named gaps 379; Pins explanation also Primary tasks; Capture record 159–161 + Named gaps 367–369; Motion 110 + Named gaps 373.
22. `migration-log.md` Portable Core SHA — worker SHA/command results withdrawn; F3 body edits mean this log does not re-assert them (E2c).
23. `migration-log.md` F1 — listed the actual adjacent-complete B2a sites; reconstruction-boundary exemption not used; no “no unqualified sentence remains” claim (E2c).
24. `migration-log.md` F2 — grep destinations widened to the hits above; compliance not claimed stronger than the body (E2c).

No token values, component tables, state applicability, or section structure were changed. C2 omissions, the unbound 2px shadow, and deleted §9 agent prompts were not reverted.

AUDIT_DONE fixes=24
