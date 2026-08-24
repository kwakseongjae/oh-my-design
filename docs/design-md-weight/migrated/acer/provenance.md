# 宏碁 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/acer/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | acer |
| name | 宏碁 |
| country | TW |
| category | consumer-tech |
| homepage | https://www.acer.com/ |
| primary_color | `#80c343` |
| logo | favicon `https://www.google.com/s2/favicons?domain=acer.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |

Catalog `primary_color` `#80c343` is multi-destination (E2a). Literal hex: this identity ledger, Scope green-emphasis, Distinctive action pair, Avoid success/hover prohibition, Foundations Primary, Primary CTA Background, Primary CTA field note, Tertiary CTA field note (not Primary `#80c343`). Field-role without the hex string: Semantic unmerged-role (catalog primary as filled-CTA, not success/hover). Capture-bound “Use the measured green action colors” does not contain the hex. Catalog homepage `https://www.acer.com/` is this identity ledger + portable Experience Scope (exact literal). Surfaces/Sources/Tier 1 hold the three supplied-surface URLs (`/kr-ko/`, `/us-en/laptops`, `/corporate/en`), not that exact homepage literal (E2a).

Catalog logo metadata is a Google favicon lookup, not a captured first-party mark. The literal URL `https://www.google.com/s2/favicons?domain=acer.com&sz=128` is this identity ledger only (provenance-only). Portable Typography & Assets and Named gaps hold URL-free first-party-mark boundary sentences, not the URL string (E2a: URL destination and URL-free boundary destinations are separate).

YAML `tokens.source` is `live-extract` (A1c) — provenance-only type/source field. YAML has no `ds.type`.

Token note from source: Only the three supplied Acer web surfaces ground these tokens. Product, corporate, and declared-only font observations remain separate where the evidence does not connect them. Dual destination (E2a): this identity note and portable Foundations Semantic evidence-domain paragraph.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

Verified note from source footer: 2026-07-13 (verification v2, supplied computed-style capture plus source-bound font-license review). The source footer does not contain `(omd:migrate)`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | regional-product-web | https://www.acer.com/kr-ko/ | 2026-07-13 |
| laptops | product-catalog | https://www.acer.com/us-en/laptops | 2026-07-13 |
| corporate | corporate-web | https://www.acer.com/corporate/en | 2026-07-13 |

Verification product URLs (`https://www.acer.com/kr-ko/`, `https://www.acer.com/us-en/laptops`, `https://www.acer.com/corporate/en`) are dual-destination: portable Experience Scope and this ledger (E2a). Official-doc / license URLs are provenance-only in Surfaces/Sources/Tier 1/Narrative; unique first-party narrative propositions from those pages are in portable Experience Scope (E2a: facts dual, URLs provenance-only).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.acer.com/kr-ko/ | 2026-07-13 |
| laptops-live | product-surface | https://www.acer.com/us-en/laptops | 2026-07-13 |
| corporate-live | product-surface | https://www.acer.com/corporate/en | 2026-07-13 |
| noto-license | license | https://github.com/notofonts/noto-fonts/blob/main/LICENSE | 2026-07-13 |

### Tier 1

- https://www.acer.com/kr-ko/
- https://www.acer.com/us-en/laptops
- https://www.acer.com/corporate/en

### Tier 2 (no usable record)

- https://getdesign.md/acer (direct detail attempt returned no usable record)
- https://styles.refero.design/?q=Acer (direct search attempt returned no usable record)

### Narrative (not interface tokens)

- Official milestones: https://www.acer.com/corporate/en/overview/milestones
- Official corporate home: https://www.acer.com/corporate/en/
- Official 2023 Conscious Technology announcement: https://news.acer.com/acer-unveils-conscious-technology-vision-to-help-tackle-climate-change
- 2024 Acer Sustainability Report: https://www.acer.com/sustainability/uploads/files/shares/sustainability-report/2024_Acer_Sustainability_Report.pdf
- Noto license: https://github.com/notofonts/noto-fonts/blob/main/LICENSE

Official 1976 Multitech origin, 1987 Acer name, manufacturing → marketing and sales → gaming / lifestyle / cloud / sustainable innovation, mission “Breaking barriers between people and technology,” Conscious Technology / Vero, and Victor Chien “We focus on achieving measurable change.” are first-party narrative in portable Experience Scope. They do not convert sustainability claims into UI tokens.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `laptops` = laptops / laptops-live / computed-style / 2026-07-13; `corporate` uses the same live captures named in YAML.

| claim | surface |
|---|---|
| tokens.colors.primary | home (`home::[data-omd-capture=19]`) |
| tokens.colors.brand-green | home (`home::[data-omd-capture=31]`) |
| tokens.colors.canvas | home (`home::body`) |
| tokens.colors.foreground | home (`home::body`) |
| tokens.colors.muted | laptops (`surface-2::p.card-feature__text`) |
| tokens.colors.subtle | laptops (`surface-2::[data-omd-capture=0]`) |
| tokens.typography.family.ui | home (visible computed family backed by loaded FontFace; Noto OFL license) |
| tokens.typography.display.size / weight / lineHeight / use | home (`home::h2`) |
| tokens.typography.body.size / weight / lineHeight / use | home (`home::body`) |
| tokens.typography.action.size / weight / lineHeight / use | home (`home::[data-omd-capture=19]`) |
| tokens.spacing.xs / lg / xl | home |
| tokens.spacing.sm | laptops |
| tokens.spacing.md | home |
| tokens.rounded.control | laptops |
| tokens.rounded.pill | home |
| tokens.components.primary-cta.* | home |
| tokens.components.tertiary-cta.* | home |
| tokens.components.feature-card.* | laptops (`surface-2::[data-omd-capture=30]`) |
| tokens.components.locale-select.* | laptops (`surface-2::[data-omd-capture=0]`) |

## Capture selectors

| Component | Pointer |
|---|---|
| Primary CTA | `home::[data-omd-capture=19]`, class `.agw-btn.agw-btn-primary` |
| Tertiary CTA | `home::[data-omd-capture=31]`, class `.agw-btn.agw-btn-tertiary` |
| Feature Card | `surface-2::[data-omd-capture=30]`, class `.card-feature` |
| Locale Select | `surface-2::[data-omd-capture=0]` |
| Display heading | `home::h2` |
| Body / canvas / foreground | `home::body` |
| Muted feature-card copy | `surface-2::p.card-feature__text` |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: live-extract
- Interaction expansions: 0; supplied interaction count is zero; only default static baseline observations promoted. Dual: portable Capture record + this Proof note (E2a).
- Uncaptured hover/pressed/disabled/loading/error/success/empty/skeleton treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Primary CTA and Tertiary CTA loading/error/success applicability is omitted: source names the controls as Homepage `.agw-btn.agw-btn-primary` / `.agw-btn.agw-btn-tertiary` CTA and records selectors `home::[data-omd-capture=19]` / `home::[data-omd-capture=31]`; exact label/destination/request/outcome is unresolved. Those selectors are known and are not in the unresolved set (C2). Dual: portable Use + this Capture selectors table.
- Locale Select loading/error/success remain role-based on locale choice (the select itself does not enter loading, field-level error, or action-outcome confirmation)
- Feature Card has no interactive-kind evidence; kind and state-applicability maps are omitted (C4). Source Use names a `.card-feature` link card; that string is not a closed seven-state contract
- YAML `tokens.source: live-extract` is identity metadata
- §13 names evidence-bounded stakeholder archetypes, not biographical personas. Those groups are Audience only. Independently verified surface work is the three primary tasks. No fictional demographics are re-hosted here
- Catalog `primary_color` `#80c343` literal hex: identity + Scope green-emphasis + Distinctive + Avoid + Foundations Primary + Primary CTA Background + Primary CTA field note + Tertiary CTA field note. Field-role without the hex: Semantic unmerged-role. Capture-bound does not contain the hex (E2a)
- Catalog Google favicon literal URL is provenance identity only. URL-free first-party-mark boundary sentences are portable Assets + Named gaps (E2a: destinations split; not a URL triple)
- Token note is dual this identity note + portable Foundations Semantic evidence-domain (E2a)
- Noto OFL license URL is provenance Sources/Narrative; OFL 1.1 license-boundary prose is portable Font evidence (E2a: URL vs URL-free license sentence)
- Footer Surface split (home CTA / laptop feature-card / locale-select geometry retained by observed surface) is capture-bound Retain-by-observed-surface + Distinctive surface-pattern reading (E2a). Layout surface-distinction is the §5 home-editorial vs catalog-rhythm composition reading, not that footer sentence.

## Derived editorial inventory (portable body, adjacent complete B2a)

These portable sentences are derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification:

- Experience Scope capture-bound coverage (three public web surfaces are not a proxy for native application screens, downloaded brand guidelines, product interaction recordings, or a public official Acer design-system specification)
- Experience Scope visual-character reading (practical rather than ornamental)
- Experience Scope portfolio-versus-laptop-only and hardware-beyond / people-work-responsibility readings
- Experience Scope green-emphasis / shared-system reading (`#80c343` / `#40810c` make CTAs easy to identify; headings create product-story scale; Conscious Technology / Vero do not prove a single shared component system and do not encode sustainability in the measured website tokens)
- Experience Audience: evidence-bounded stakeholder groups are not an official Acer user classification; no-invented-personas / stakeholder-group / observable-work restriction
- Distinctive surface-pattern reading (pill CTA, 24px locale-select, square feature-card kept distinct)
- numbered Principles 1–4 including *UI implication* notes
- capture-bound grouping of source §7 Do’s and harvested geometry (not a remaining-list-only limiter)
- Avoid list
- Foundations Semantic unmerged-role (catalog primary not success/hover; Locale Select `#474747` / `#f8f8f8` unmerged)
- Foundations Semantic evidence-domain (token note; no product-app semantic success/warning/error/hover/theme tokens)
- Foundations Spacing measured-scale (not a private product design-token system)
- Foundations Shape: two observed shape families coexist / local-geometry / not an additional general radius scale
- Foundations Elevation no-canonical-shadow-promoted / separation-by-color-spacing-type-border / not a general elevation ladder
- Foundations Motion no-published-token / future-work limiter (reduced-motion / subordinate to the task / measure before treating as Acer-specific)
- Typography Font evidence-class application (no native-product typeface named in this pass, none promoted; Noto live surface-use not proprietary; acer-icons not text family; declared-only excluded; OFL 1.1 not Acer brand-font)
- Typography Family font-use boundary / canonical-because-computed-use-and-FontFace-agree
- Typography Type-role `normal` versus CTA `28.368px` size-local / not-converted-into-a-different-unit / CTA font field not merged into Display
- Typography & Assets Google-favicon identity-not-captured
- Components Capture record graph-not-adopted preservation (source state contract kept here while the catalog graph is not adopted)
- Components capture-record implementation-guidance classification / characterizations / omitted-rather-than-synthesized
- Components Capture record: native-select prompt constraint as source instruction, not captured focus
- Primary CTA / Tertiary CTA / Feature Card unmerged-field notes
- Locale Select unmerged-field note plus native-select instruction kept as a source prompt constraint
- Layout surface-distinction / measured-scale / supplied-surfaces-not-body-general
- Layout supplied-surface measurement-boundary
- Content citation-character of official samples as first-party language
- Content product-voice / Do-Don't table / Conscious Technology informs tone not tokens
- Content illustrative-sample / source sample-grounding notes / not product microcopy / no-additional-synthetic-voice

**[SUPERSEDED 2026-08-24 wave7 F3 audit — prior derived inventory omitted Capture-record graph-not-adopted, capture-bound grouping (named only as “application list”), Family canonical-because-agree, Type-role not-converted-into-a-different-unit, Locale Select native-select on the field note, Content citation-character adjacency, tone-not-tokens as a named Content limiter, and sample-grounding notes. It also duplicated Audience and Shape. Wave7 ledger sync still listed Assets imagery not-invented-decoration and Content no-complete-product-microcopy-guide as removed; those sentences remain absent.]**

Left unqualified as first-party or observed-technical: 宏碁 / Acer product/surface identity and URLs; 1976 Multitech / 1987 Acer name; official milestones, mission quote, Conscious Technology / Vero, Victor Chien quote; selector-backed color/spacing/shape values including `box-shadow: none`; `Noto Sans` 391 visible first-family uses; Acer-hosted Noto files and Google-hosted resources; `acer-icons`; declared-only `Noto Sans JP` / `Noto Sans TC` / `Material Icons`; YAML `tokens.source: live-extract`; YAML unitless spacing 6/8/16/24/32; YAML rounded 24/800; line-height `normal` and `28.368px`; component anatomy and primitive types button / button / card / input; interaction count 0; B3 five-kind gate; Core C1/C2/C3 capture-record policy and per-control C2 omission / C4 kind-omission notes; Locale Select loading/error/success role map; official English voice samples; stated brand values human/progressive/curious; Governance; Named gaps inventory. Reconstruction-boundary exemption not used.
