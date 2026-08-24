# Airbnb provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/airbnb/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | airbnb |
| name | Airbnb |
| country | US |
| category | consumer-tech |
| homepage | https://www.airbnb.com |
| primary_color | `#ff385c` |
| logo | simpleicons slug `airbnb` |
| omd format (source) | 0.1 |
| ds.name | Airbnb Brand Hub |
| ds.url | https://brand.withairbnb.com |
| ds.type | brand |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |

Catalog `primary_color` `#ff385c` is this identity ledger AND portable Distinctive (Rausch identity-accent hex) AND Foundations Identity accent AND Scope visual-signature hex (E2a). Component hosting-action/help-list-row `fg` `#222222` and disabled-icon-action `fg` `#c1c1c1` are the YAML component-field source-rows, not this catalog identity field.

Catalog logo metadata is Simple Icons identity (`airbnb`), not a captured first-party mark. Dual destination (E2a): this identity ledger and portable Typography & Assets boundary sentence. It is not a captured first-party mark file.

Official DS pointer from source: Airbnb Brand Hub at `https://brand.withairbnb.com` (type: brand). Description: Airbnb's official identity and asset-use guidance; public marketplace, Newsroom, Help, and native-product evidence remain separate domains. `ds.type: brand` is provenance metadata (A1c). Dual destination (E2a): `ds.name` and `ds.description` are portable Experience Scope + Typography & Assets + this identity ledger. `ds.url` is dual Experience Scope + this ledger.

Token note from source: Fresh marketplace, Newsroom, and Help capture. Rausch remains a current identity accent, but no universal red CTA geometry is promoted without matching current component evidence. Dual destination (E2a): this identity ledger and portable Foundations Semantic color (editorial-domain / omission reading, adjacent complete B2a). The Distinctive “not an inferred fill” and Avoid “Do not turn Rausch into a default fill” lines are the §1 / §7 source-rows, not this `tokens.note` string.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-12 (omd:migrate) |
| verification_v2.checked | 2026-07-12 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 |
| tokens.extracted | 2026-07-12 |

Footer metadata from the source: `Verified: 2026-07-12 (omd:migrate)`. The `(omd:migrate)` mark is preserved here (A1c).

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketplace | https://www.airbnb.co.kr/ | 2026-07-12 |
| release | official-newsroom | https://news.airbnb.com/product-releases/airbnb-2026-summer-release/ | 2026-07-12 |
| help | official-help | https://www.airbnb.com/help/article/2503 | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.airbnb.co.kr/ | 2026-07-12 |
| release-live | official-doc | https://news.airbnb.com/product-releases/airbnb-2026-summer-release/ | 2026-07-12 |
| help-live | official-doc | https://www.airbnb.com/help/article/2503 | 2026-07-12 |
| brand-official | brand-asset | https://brand.withairbnb.com | 2026-07-12 |

### Tier 1

- https://www.airbnb.co.kr/
- https://news.airbnb.com/product-releases/airbnb-2026-summer-release/
- https://www.airbnb.com/help/article/2503
- https://brand.withairbnb.com

### Tier 2

- getdesign.md/airbnb supplied a directory entry only
- Refero was retained only as a historical conflict candidate; those historical values were not promoted as current tokens

### Narrative / identity (not interface tokens)

- Brand Hub: https://brand.withairbnb.com
- 2026 Summer Release: https://news.airbnb.com/product-releases/airbnb-2026-summer-release/
- Help: https://www.airbnb.com/help/article/2503

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-12; `release` = release / release-live / live-inspect / 2026-07-12; `help` = help / help-live / live-inspect / 2026-07-12.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.secondary | home |
| tokens.colors.disabled | home |
| tokens.colors.surface | home |
| tokens.colors.surface-soft | home |
| tokens.colors.divider | help |
| tokens.typography.family.ui | home |
| tokens.typography.family.editorial | release |
| tokens.typography.title.size / weight / lineHeight / use | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.action.size / weight / lineHeight / use | home |
| tokens.typography.reading.size / weight / lineHeight / use | help |
| tokens.typography.newsroom.size / weight / lineHeight / use | release |
| tokens.spacing.xs / sm / md / xl | home |
| tokens.spacing.lg | help |
| tokens.rounded.control / search / card / full | home |
| tokens.components.hosting-action.* | home |
| tokens.components.category-tab.* | home |
| tokens.components.icon-action.* | home |
| tokens.components.disabled-icon-action.* | home |
| tokens.components.search-shell.* | home |
| tokens.components.help-list-row.* | help |

`tokens.colors.primary` `#ff385c` is identity accent, not a universal CTA fill. `tokens.components.hosting-action.fg` `#222222` stays the control's renderable content color and is not collapsed into a generic Ink role. `tokens.components.disabled-icon-action.fg` `#c1c1c1` stays the disabled circular-control field. `tokens.components.help-list-row.fg` `#222222` is the Help row's renderable field. `tokens.components.search-shell` inner input remains transparent.

YAML typography `lineHeight` values are the unitless ratios 1.18, 1.43, 1.29, 1.5, and 1.56. Those ratios remain in portable Type roles. The legacy body table's computed 26px / 20.02px / 18px / 24px / 28px observations are size-local and are not the same values as the ratios. 22 × 1.18 = 25.96, so title 26px is a rounding. 14 × 1.29 = 18.06, so action 18px is a rounding. 18 × 1.56 = 28.08, so Newsroom 28px is a rounding.

Catalog homepage `https://www.airbnb.com` and the captured marketplace URL `https://www.airbnb.co.kr/` are distinct. Marketplace, Newsroom, Help, and Brand Hub URLs are dual-destination: they remain in portable Experience Scope and in this identity/surfaces/sources/Tier 1 ledger.

## Capture selectors

The source DESIGN.md does not record `data-omd-capture` pointers or class selectors. None are invented here.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Six named machine components are declared from the harvest. Red Reserve buttons, listing cards, modal dialogs, badges, inputs, and booking states stay omitted unless current evidence establishes their exact role. Dual destination (E2a): Components capture record + Governance Named gaps.
- Marketplace circular controls expose focus, hover, pressed, and disabled. Category navigation exposes selected/tab-selected. Search shells expose hover and pressed. Booking loading, error, success, authentication, and empty remain absent. Dual destination (E2a): Components capture record + Governance Named gaps.
- Uncaptured booking/loading/error/success/authentication/empty treatments are omitted. Capture absence is not a `not-applicable` reason. Category tab (public category navigation) and Search shell (public marketplace search) keep identified-role loading/error/success maps. Hosting action and the two circular icon controls have no exact selector, label, destination, request, or outcome; those three applicability fields are omitted at that boundary rather than closed as navigation or local-action outcome (C2). State coverage is not claimed complete.
- Generic `focus` on the disabled circular icon action is an additional observed state. It is not a `focus-visible` treatment. The source never records `focus-visible`.
- Help list row has no interactive-kind evidence; kind and a state-applicability map were omitted rather than invented.
- YAML `family.ui` is `Airbnb Cereal VF`; editorial family is `Cereal`. Those are not collapsed. Cereal Italic and HE/JP/KR/Thai variable families remain declared-only. Dual destination (E2a): Typography Font evidence + Governance Named gaps.
- Font evidence class for authenticated booking flows, native apps, and locale-specific runtime overrides is `Unresolved claim` (captured but uncorroborated), not `Outside this capture`. Dual destination (E2a): Typography Font evidence + Governance Named gaps.
- YAML `rounded.card` 12 is retained as a scale value. It is not rewritten as a px component radius because no harvested component records that measurement. Dual destination (E2a): Foundations Shape + Governance Named gaps.
- Newsroom cookie-panel shadow `0 8px 28px rgba(0,0,0,.28)` is not a product elevation token. Dual destination (E2a): Foundations Elevation + Governance Named gaps.
- Exact native-app breakpoints, authenticated booking layouts, and locale-specific truncation remain unresolved. Dual destination (E2a): Layout & Platforms + Governance Named gaps.
- Motion duration, easing, animation name, transition properties, and reduced-motion behavior stay ungated. Dual destination (E2a): Foundations Motion + Governance Named gaps.
- Footer `Verified: 2026-07-12 (omd:migrate)` keeps the `(omd:migrate)` mark in this freshness ledger (A1c).
- Source §13 is first-party task context only. Independently verified tasks: explore homes, experiences, or services; present and manage an offering; seek official Help before or after a booking-related task. Project-specific names, ages, income, trip frequency, team structure, and success metrics stay unspecified. No fictional demographic set is recorded here and none was moved to a persona sidecar.
- Official Brand Hub and the 2026 Summer Release are identity/product-story context, not a substitute for the three-surface interface measurements.
- `ds.type: brand` is preserved as verification metadata. This document remains an evidence-backed reconstruction, not Brand Hub authority for an unrelated target project.
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Airbnb-authored or a separately published UI specification`): Scope product-story / people-and-place thesis; Scope catalog-homepage not-a-substitute; Scope evidence-domain split; Scope visual-signature / photography-led / Bélo-Rausch-versus-place reading; Scope 2026-product / homes-foundation / Brand-Hub-not-geometry causal reading; Audience task-context application; Distinctive trait readings; four numbered Principles; capture-bound application list; Avoid Don'ts; Semantic-role and omission readings; Semantic editorial-domain / Luxe-Plus omission readings; Spacing local-scale reading; Shape local-geometry reading; Elevation cookie-shadow reading; Motion state-availability reading (B3 five-kind gate is separate rulebook procedure); Font evidence-class application readings; Family font-use boundary; Assets Simple Icons / Brand Hub application boundary; Capture-record omitted-Reserve / not-a-separate-input; Disabled circular `#c1c1c1` not-a-general-secondary-text-role; Help list-row Help-domain-only reading; Layout-purpose reading; Layout unresolved-breakpoint reading; Layout capture-local-versus-cross-viewport height reading; Content voice / application / no-synthetic-voice. Governance Authority is a reconstruction-authority sentence, not a substitute for those adjacent limiters. Reconstruction-boundary exemption is not used. Actual derived range is those sites, not Principles-only.
