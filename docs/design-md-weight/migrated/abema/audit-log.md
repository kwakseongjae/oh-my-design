# ABEMA F3 audit (wave5 full resubmit)

Auditor: grok-4.6 (fresh session, not the T2 worker).
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7 — B2 / B2a / E1 / E2 / E2a–c only.
Date: 2026-08-23
Source FAIL: `docs/reviews/t2-1-wave5-2026-08-23-sol-full.md` §3.

Token values, component tables, state applicability, and section structure were not changed. There is no reconstruction-boundary exemption: third-class sentences were given an adjacent complete limiter (`derived editorial implementation inference` / `not ABEMA-authored or a separately published UI specification`) or the judgement was removed. Foundations does not use `do not … constraint` (or `do not reuse` near `constraint`).

Worker resubmit decisions left in place: `primary-hover` / `accent` / `accent-hover` remain `abema-css` only; Pure White maximum-contrast, Assets thumbnail first-party / no-invented-decoration, and thumbnail-veil “lifts” already had adjacent complete B2a; mixed/generic Primary, Secondary, Dark, Primary Dark, Danger, Text Field, and Checkbox omit loading/error/success; no native-app / TIMES negative coverage; Hiragino fallback is a migration/runtime evidence class, not a source Don’t; TIMES destinations are Scope + Typography & Assets + provenance.

## Classification (DESIGN.md)

Already adjacent to a complete B2a phrase and left as-is:
- Scope visual-character / committed dark-surface
- Scope TV-envelope
- Distinctive `role-locked` / `deliberately light`
- Principles (five items + capture-bound application)
- Avoid causal source Don’ts (`single attention signal`; `"broadcasting live"`; `surface-color steps`; `broadcast-bold 700`)
- Semantic color `never white-on-yellow` / role-bound named-uses / Link Hover `cool to` / Pale `deliberately light` / Pure White maximum-contrast
- Elevation philosophy
- Motion table character `fast in, soft settle`
- Motion purpose
- type-character
- Capture-record §14 causal wording
- Layout whitespace
- Layout `structural exception`
- Layout collapsing-purpose / player-as-fixed-anchor
- Layout thumbnail-veil “lifts”
- Assets thumbnail first-party / no-invented-decoration
- Content voice table (except verbatim samples)

Class 1 (brand-published / first-party) or class 2 (observed technical / field-identity / rulebook mechanics) — not third-class brand-UI judgements, so no B2a was attached:
- Scope coverage, catalog homepage, `live-extract`, outage/Wayback recovery, TIMES named as a brand-owned media inspect, public facts with “not independently re-verified this turn”
- CADC 2022 concept name 「テレビの再発明」 as first-party citation
- Primary tasks
- D2 Audience exclusion (named fictional archetypes are not Audience)
- Token/YAML fields; A4 non-merge notes (`#dfb015` vs `#c5c5c5`; crimson hovers; stacks; `rounded.full` 9999 vs 50%)
- B3 five-kind per-component computed gate
- Font evidence table; CopyRight family strings; Type roles
- Catalog favicon identity-only and Hiragino fallback as evidence-class boundaries
- Component anatomy, C1/C2/C3/C4 applicability sentences, C2 omission sentences
- Governance claims

Third class found without adjacent complete limiter (fixed below):
- Scope evidence-domain: exact values stay attached to named observations (incomplete “not an ABEMA-published UI specification” phrase)
- Audience observable-work application
- Distinctive / Shape “universal” radius application word
- Avoid catalog-favicon Don’t listed as if it copied a source Don’t
- Accent heading `do not collapse them into “error only”`
- Foreground `near-white, not pure white`
- Shape: 4px is not a claim that every unlisted surface uses it
- Motion reduced-motion: nothing in the interface depends on animation to communicate state (split off the motion-purpose paragraph)
- Layout closing sentence: named measurements are not a claim that every unlisted surface shares them
- Content forbidden-register after the verbatim interlude (section header was not adjacent)

## Fixes

1. `DESIGN.md` Scope — attached **The following evidence-domain sentence is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.** before “Exact values below stay attached to those named observations.” Removed the incomplete “They are not an ABEMA-published UI specification.”
2. `DESIGN.md` Audience — attached **The following audience-application reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.** before “Observable work follows the three primary tasks…”. D2 exclusion sentence left as class-2 policy.
3. `DESIGN.md` Distinctive traits — removed the “Universal” application word from the `--radius: 4px` bullet. Role-locked / deliberately-light limiter unchanged.
4. `DESIGN.md` Avoid — pulled the catalog Google favicon line out of the source-Don’ts list. Recorded it as a catalog/identity evidence class, not an ABEMA-authored Avoid rule (same treatment as Hiragino).
5. `DESIGN.md` Foundations Accent heading — removed the `do not collapse them into “error only”` application. Heading is now “both captured uses.” Did not introduce `do not … constraint`.
6. `DESIGN.md` Semantic color Foreground — attached complete B2a on the “near-white, not pure white” reading.
7. `DESIGN.md` Foundations Shape — attached **The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.** 4px is local geometry, not a claim that every unlisted surface uses it. Dropped “universal” from the 4px bullet. YAML `rounded.full` 9999 vs 50% remains an A4 non-merge note.
8. `DESIGN.md` Motion — kept `prefers-reduced-motion: reduce` fades-collapse-to-instant as the B3 fact. Attached complete B2a on “Nothing in the interface depends on animation to communicate state.”
9. `DESIGN.md` Layout & Platforms — attached **The following measurement-application reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.** before the named-heights/widths sentence.
10. `DESIGN.md` Content — attached a complete adjacent B2a on the forbidden-register list after the verbatim interlude. Removed the non-adjacent “derived with the section limiter above” pointer.
11. `provenance.md` Proof notes derived inventory — was narrower than the body (omitted evidence-domain, Audience, Foreground near-white, Shape local-geometry, reduced-motion application, Layout measurement-application, Content forbidden-register). Restated to the actual B2a sites. Hiragino and favicon called out as evidence-class boundaries, not that derived set. No reconstruction-boundary exemption.
12. `provenance.md` destinations — SorryPage heading “ABEMAの表示に失敗しました” is Capture record + Content verbatim + ledger, not Content+ledger only. Favicon identity-only is catalog/identity in Assets + Avoid, not a source Don’t. Audience note records the observable-work B2a.
13. `migration-log.md` source rows — §1 evidence-domain B2a and Distinctive radius wording; §2 Foreground/Shape/Accent heading; YAML identity favicon as evidence class; §5 Shape local-geometry; §7 Don’ts favicon not a source Don’t; §8 measurement-application; §10 forbidden-register own limiter and SorryPage Capture record destination; §13 Audience B2a; §14 SorryPage E2a; §15 reduced-motion application B2a; HTML comment derived list. Complete limiter wording uses “or a separately published”.
14. `migration-log.md` §4 Primary Dark — log said “7-state map”. Body is default/hover/focus-visible/disabled only; loading/error/success omitted. Corrected (E2c).
15. `migration-log.md` F1/F2 and Portable Core — worker F1 omitted the sites in (1)–(10) and treated favicon as a source Don’t; worker F2 called SorryPage dual Content+provenance and reused a pre-F3 Core SHA. Overclaims withdrawn. F1 now lists the post-F3 B2a inventory and class 1/2 leftovers without a reconstruction-boundary skip. F2 greps match the files. Pre-F3 SHA `bcf993…` is labeled pre-F3; this session did not re-run Core/gate, so that hash is not claimed as the current file.

No token values, component tables, state applicability, or section structure were changed. C2 omissions were not reverted. `primary-hover` / `accent` / `accent-hover` were not remapped to `abema-live`. Native-app / TIMES negatives were not restored.

AUDIT_DONE fixes=15
