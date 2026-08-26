# Claude (Anthropic) F3 audit

Auditor: grok-4.6 (fresh session, not the T2 worker).
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7 — B2 / B2a / E1 / E2 / E2a–c only.
Date: 2026-08-24

Sentence class used: brand-published fact / observed technical / editorial interpretation or causal/application judgement. Only the third class without an adjacent complete qualifier (`derived editorial implementation inference` / `not Anthropic-authored or a separately published UI specification`) was edited in the body. Limiters that named extras absent from the adjacent sentences were retargeted to the extras actually there. There is no reconstruction-boundary exemption. Governance Authority is not a substitute. Token values, component tables, state applicability maps, and section structure were not changed.

Worker decisions left in place: YAML unitless lineHeight 1.10/1.20/1.60 비율 보존; tab×1+card×3 컴포넌트별 보존; Appearance Toggle YAML type 없음·kind/map 생략(C4); `tokens.source: reconciled` provenance-only; Simple Icons slug `anthropic` dual provenance+Assets identity-boundary; generic Focus 없음/`focus-visible` 비승격; §13 official groups만 Audience·sidecar biography 없음; 무출처 커브 없음·B3 다섯 증거 종류 Foundations Motion 121; Overview Tab loading·error·success 역할별 not-applicable(C2); `#c96442` vs `#141413` 비합침; `#f5f4ed` vs `#ffffff` vs `#f0eee6` vs `#e8e6dc` 비합침; `#5e5d59` vs `#5d5c58` vs `#4d4c48` 비합침; 6 vs 8 vs 12 vs 16 vs 24 vs 32 비합침.

## Classification (DESIGN.md)

Already adjacent to a complete B2a phrase and left as-is (names later expanded, shrunk, or given a local limiter where the existing limiter under-named, over-named, or was not adjacent):
- Scope product-origin / catalog-homepage-as-identity
- Scope three-URL evidence-domain / values-stay-attached / Anthropic-marketing-home-not-a-stand-in / Claude-overview-not-a-stand-in-for-public-pricing / public-pricing-not-a-stand-in / no-equivalence-with-authenticated-chat-Help-Center-documentation-chrome-or-internal-product-UI
- Scope token-note register-split
- Scope atmosphere extra names (that-practical-role-is-expressed-through was under-named)
- Scope public-history / narrative-not-interface-token (official-company-writing-the-public-overview-and-the-Constitution-provide-narrative-context-not-interface-tokens was under-named)
- Primary tasks YAML-use-strings-not-from-§13
- Audience no-individual-personas / official-groups-not-primary-tasks / names-ages-unspecified
- Distinctive unmerged-role extras, limiter immediately before the bullets (authenticated-chat / documentation-chrome / hover-system / motion as unpromoted was named here but is not a Distinctive bullet)
- numbered Principles *UI implication* notes (52 also named the capture-bound list, which is not adjacent)
- capture-bound grouping of §7 Do’s and unique §9 constraints
- Avoid named Don’ts
- Semantic unmerged-role extra characterizations (parchment-canvas-not-claimed-as-an-authenticated-chat-canvas was under-named)
- Spacing unitless-YAML-not-required-px-suffix / body-4px–48px-cluster (harvested-control-padding was named here but is not in the adjacent sentences)
- Shape local-geometry limiter-precedes-list (universal-radius-for-uninspected-controls is 111, not 102)
- Shape local-harvested-not-universal / 12px-tab-versus-24px-pricing-versus-32px-model-not-interchangeable
- Elevation standard-cards-flat / featured-shadow-selector-specific / appearance-one-pixel-warm-ring / not-a-general-elevation-scale
- Motion source-stated absence / tab-selection-pressed-and-tab-panel-expansion-prove-state-change-not-a-universal-animation-specification
- Font evidence-class extras (live-font-evidence-below-is-the-basis-for-UI-family-tokens was under-named)
- Anthropic-Mono-declared-only-not-a-mono-scale
- Family font-use (do-not-replace-unavailable-or-unobserved-brand-type-with-a-system-stack was named here but is not an adjacent body sentence)
- Type-role ratio-versus-size-local / public-h3-and-public-tab-as-body-table-only (appearance-tile-16-as-component-field is not in this section)
- Type-table trailing restatement
- Assets Simple-Icons-slug identity-only
- Assets delivery-versus-license split
- Capture-record graph-not-adopted (intentionally-left-unspecified / no-generic-modal-inferred were under-named)
- Capture-record Core-applicability-by-meaning / Focus-not-focus-visible / Overview-Tab-L-E-S-role-based-not-applicable / cards-and-appearance-no-interactive-kind
- Capture-record selected-hover-pressed restatement (181 was not adjacent to 179)
- Capture-record cards/appearance omit-kind restatement (183 was not adjacent to 179)
- Overview Tab / Model Card / Pricing standard / Pricing featured / Appearance Toggle field notes
- C4 omit-kind on each card and the appearance tile
- Layout recorded-span extras (preserve-as-route-local-geometry was under-named)
- Layout captured-surface-not-cross-viewport
- Content official-writing-characterization / derived voice extra names / tone-table context labels (official-writing-characterization and the table labels were under-named)
- Content Do/Don't copy of source §10
- Content captured-host / unobserved-signed-in-support-or-legal-copy

Left unqualified (brand-published or observed-technical — not a reconstruction-boundary exemption):
- Scope product identity, catalog homepage URL, three live-inspect URLs, YAML token note as quoted, official company/overview/Constitution narrative as source-stated
- Primary tasks YAML-use strings
- Distinctive hex / radius / family field-identity
- Token measurements, YAML unitless spacing, YAML rounded, Type role rows including YAML `use` strings, component anatomy including source Use strings
- B3 five-kind Motion gate
- Core C1/C2/C3 capture-record policy; per-control C2 reason rows; B1 named-Focus sentence
- §14 selected/pressed / no selector-backed empty/loading/error/success/skeleton/disabled as recorded
- Governance boilerplate
- Named gaps inventory

Third class found without adjacent complete limiter, or with a limiter that did not name the reading or named extras that are not on the adjacent sentences (fixed below):
- Scope 15 that-practical-role-is-expressed-through
- Scope 17 official-company-writing-the-public-overview-and-the-Constitution-provide-narrative-context-not-interface-tokens
- Distinctive 42 authenticated-chat / documentation-chrome / hover-system / motion as unpromoted (not a Distinctive bullet)
- Principles 52 capture-bound application list (not adjacent; 59 wraps that list)
- Semantic 81 parchment-canvas-not-claimed-as-an-authenticated-chat-canvas
- Spacing 96 harvested-control-padding-as-component-fields (not in the adjacent sentences)
- Shape 102 not-a-universal-radius-for-uninspected-chat-or-docs-controls (that reading is 111)
- Font 129 live-font-evidence-below-is-the-basis-for-UI-family-tokens
- Family 149 do-not-replace-unavailable-or-unobserved-brand-type-with-a-system-stack (not an adjacent body sentence)
- Type roles 153 appearance-tile-16-as-component-field (Appearance Toggle 269/274, not this table)
- Capture 177 intentionally-left-unspecified-rather-than-populated-with-plausible-Claude-like-patterns / no-generic-modal-toast-menu-error-disabled-or-hover-system-is-inferred
- Capture 181 selected-hover-pressed restatement remote from 179
- Capture 183 cards/appearance omit-kind restatement remote from 179
- Layout 281 preserve-12px-tab-24px-pricing-card-32px-model-card-as-route-local-geometry-rather-than-one-interchangeable-radius
- Content 292 official-writing-characterization / tone-table-context-labels
- provenance derived inventory narrower vs actual extras and over-wide vs Distinctive/Spacing/Shape/Family/Type/Principles phantom extras; `simpleicons` dual-to-Assets overclaim; §11 unique dest listed as Scope 9/17
- migration-log dest maps: `simpleicons` dual, §1 public-history 17, featured variant 13, Content table 295, §11 (9, 15, 17), Appearance 267–271 missing 274, F1/F2 completeness and worker SHA as current (E2 / E2a / E2c)

## Fixes

1. `DESIGN.md` Scope 15 — expanded the adjacent complete B2a so that-practical-role-is-expressed-through-a-restrained-warm-neutral-system-rather-than-a-generic-blue-software-palette is named. Atmosphere measurements unchanged.
2. `DESIGN.md` Scope 17 — expanded so official-company-writing-the-public-overview-and-the-Constitution-provide-narrative-context-not-interface-tokens is named. Narrative facts unchanged.
3. `DESIGN.md` Distinctive 42 — retargeted the precede limiter so authenticated-chat / documentation-chrome / hover-system / motion as unpromoted is not named here (those extras are not Distinctive bullets). Hex/geometry unchanged.
4. `DESIGN.md` Principles 52 — retargeted so the *UI implication* notes are named and the capture-bound application list is not claimed here (59 wraps that list). Numbered stems unchanged.
5. `DESIGN.md` Semantic 81 — expanded so parchment-canvas-not-claimed-as-an-authenticated-chat-canvas is named. Hex values unchanged.
6. `DESIGN.md` Spacing 96 — retargeted so harvested-control-padding-as-component-fields is not named (that extra is not in the adjacent sentences). YAML numbers unchanged.
7. `DESIGN.md` Shape 102 — retargeted so not-a-universal-radius-for-uninspected-chat-or-docs-controls is not named here (111 holds that reading). YAML rounded unchanged.
8. `DESIGN.md` Font 129 — expanded so live-font-evidence-below-is-the-basis-for-UI-family-tokens is named. Family counts unchanged.
9. `DESIGN.md` Family 149 — retargeted so do-not-replace-unavailable-or-unobserved-brand-type-with-a-system-stack is not named (no adjacent body sentence). Family names unchanged.
10. `DESIGN.md` Type roles 153 — retargeted so appearance-tile-16-as-component-field is not named here. YAML unitless ratios unchanged.
11. `DESIGN.md` Capture record 177 — expanded so intentionally-left-unspecified-rather-than-populated-with-plausible-Claude-like-patterns / no-generic-modal-toast-menu-error-disabled-or-hover-system-is-inferred-from-the-supplied-artifact are named. State tables untouched.
12. `DESIGN.md` Capture record 181 — attached complete B2a on selected-hover-pressed-as-additional-named-observed-states-not-Core-rows. Applicability maps unchanged.
13. `DESIGN.md` Capture record 183 — attached complete B2a on cards-yaml-type-card-no-interactive-kind / appearance-no-yaml-type-none-invented. Kind/map omissions unchanged.
14. `DESIGN.md` Layout 281 — expanded so preserve-12px-tab-24px-pricing-card-32px-model-card-as-route-local-geometry-rather-than-one-interchangeable-radius is named. Measurements unchanged.
15. `DESIGN.md` Content 292 — expanded so official-writing-characterization and tone-table-context-labels-Product-explanation-Safety-or-policy-Company-communication are named. Table copy unchanged.
16. `provenance.md` Identity / Proof notes — catalog logo type `simpleicons` is this ledger only; slug `anthropic` / Simple Icons identity (`anthropic`) is dual Assets 168 + this ledger (E2a).
17. `provenance.md` Narrative — source §11 unique restatement is portable Scope 17; Scope 9 restates the overlapping reliable/interpretable/steerable sentence from source §1, not the company-page practical-tools sentence (E2).
18. `provenance.md` derived inventory — restated to the actual adjacent-complete B2a extra names after this scan, including Capture 181/183 and the shrunk Distinctive/Spacing/Shape/Family/Type/Principles extras. Reconstruction-boundary exemption not used.
19. `migration-log.md` dest maps — grepped against the current three files: `simpleicons` provenance-only; featured unpromoted 42/72/81/115/259/355 not 13; §1 without public-history 17; §11 unique dest Scope 17; Content table 296–298; Appearance `#e8e6dc` / `#4d4c48` / 16px / `#d1cfc5` 267–271 and field note 274; Shape 102 vs 111; Type 153 without appearance-tile-16; Family 149 without do-not-replace; Principles 52 UI-implication-only; Capture 181/183 (E2 / E2a).
20. `migration-log.md` F1/F2 — worker completeness and worker SHA `062b0756…db56` are not current-class (E2c). Post-F3 grep dests recorded. Post-F3 SHA and gate results recorded below.

No token values, component tables, state applicability, or section structure were changed. C2 omissions, C4 kind/map omissions, and the B3 five-kind gate were not reverted.

Post-F3 migrated DESIGN SHA-256 `18d981af51a29cb5571dbb598e03bc55c7c357a81910ecf41dc9f14336cdf08f`. `migrate-reference.mjs --brand claude --gate-only` PASS, problems []. `migrate-design-md-core.cjs --input docs/design-md-weight/migrated/claude/DESIGN.md --check --require-portable-core` exit 0 / `portable_core: true`.

AUDIT_DONE fixes=20
