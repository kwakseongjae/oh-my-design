# 11st provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/11st/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | 11st |
| name | 11st |
| country | KR |
| category | ecommerce |
| homepage | https://www.11st.co.kr/ |
| primary_color | `#ff0038` |
| logo | favicon `https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |

The source YAML has no `ds.name` / `ds.type` field. Do not invent one. Official design-system context URL `https://design.11stcorp.com/` is a verification_v2 source (`kind: official-doc`), not a `ds.type` record. Dual destination (E2a): this ledger (Identity / Sources / Tier 1 / Narrative) and portable Experience Scope evidence-domain sentence.

Catalog `primary_color` `#ff0038` is not identity+Foundations only (E2a). Grep destinations: this identity ledger; portable Scope observed-sample hex; Distinctive brand-red plus filled-CTA non-promotion B2a; Foundations Brand red plus filled-CTA non-promotion B2a; Governance Named gaps (filled CTA background). Same hex as YAML `tokens.colors.brand-red`.

Catalog logo is a third-party Google s2 favicon lookup, not a captured first-party mark. Dual destination (E2a): this identity ledger and portable Typography & Assets boundary sentence.

Token note from source: Values are selector-backed observations from three public 11st product routes. The corporate brand site, advertising guide, and declared fonts are separate evidence domains. Dual destination (E2a): this ledger and portable Experience Scope (coverage sentences plus the evidence-domain B2a).

YAML `tokens.components_harvested` is `true`. That harvest flag is recorded here only; it is not a portable component contract.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| added | 2026-06-09 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Footer metadata from the source: `Verified: 2026-07-13`.

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-home | https://www.11st.co.kr/ | 2026-07-13 |
| main | product-home | https://www.11st.co.kr/main | 2026-07-13 |
| category | product-category | https://www.11st.co.kr/categories/1467565 | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-capture | product-surface | https://www.11st.co.kr/ | 2026-07-13 |
| main-capture | product-surface | https://www.11st.co.kr/main | 2026-07-13 |
| category-capture | product-surface | https://www.11st.co.kr/categories/1467565 | 2026-07-13 |
| brand-context | official-doc | https://www.11stcorp.com/brand | 2026-07-13 |
| design-system | official-doc | https://design.11stcorp.com/ | 2026-07-13 |
| company-profile | official-doc | https://www.11stcorp.com/resources/guide/2026_11street_Brochure_Kor.pdf | 2026-07-13 |
| advertising-guide | official-doc | https://ads.11st.co.kr/contents/guide/read?bbsNo=617&incHideYN=Y | 2026-07-13 |

### Tier 1

- https://www.11st.co.kr/ (product home)
- https://www.11st.co.kr/main (product home)
- https://www.11st.co.kr/categories/1467565 (product category)
- https://www.11stcorp.com/brand (official identity, font asset, and font-use terms)
- https://design.11stcorp.com/ (official design-system context)
- https://www.11stcorp.com/resources/guide/2026_11street_Brochure_Kor.pdf (official current company/history context)
- https://ads.11st.co.kr/contents/guide/read?bbsNo=617&incHideYN=Y (official advertising-font guidance)

### Tier 2 (no usable record)

- https://getdesign.md/11st (attempted; built-in web open returned no accessible record)
- https://styles.refero.design/?q=11st (attempted; built-in web open returned no accessible record)
- built-in web search for both `11st` and `11번가` on each directory (no record returned)

### Narrative (not interface tokens)

- Official brand page (street-sign logo, orange-red-pink gradient as customer/shopping/experience, 11번가 고딕 Light/Regular/Bold ownership and free-use): https://www.11stcorp.com/brand
- Official 2026 company profile (2008 open market, 2010 mobile, 2016 brand identity, customers and sellers, search/information/purchase/customer life): https://www.11stcorp.com/resources/guide/2026_11street_Brochure_Kor.pdf
- Official design-system context: https://design.11stcorp.com/
- Official advertising-production guide (11Street Gothic-Kor and Noto Sans CJK KR for PC and mobile; advertising materials, not product-route tokens): https://ads.11st.co.kr/contents/guide/read?bbsNo=617&incHideYN=Y

## Claim ledger

Claims use YAML anchors from the source: `product` = home / home-capture / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.body | home |
| tokens.colors.brand-red | home |
| tokens.colors.muted | home |
| tokens.colors.hairline | home |
| tokens.colors.on-brand | home |
| tokens.typography.family.ui | home |
| tokens.typography.family.numerals | home |
| tokens.typography.family.brand | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.search.size / weight / lineHeight / use | home |
| tokens.typography.price.size / weight / lineHeight / use | home |
| tokens.typography.price-struck.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / md / lg | home |
| tokens.rounded.square / card / billboard-control / circular | home |
| tokens.components.global-search.* | home |
| tokens.components.billboard-control.* | home |
| tokens.components.deal-card.* | home |
| tokens.components.header-inventory-dialog.* | home |

YAML typography `lineHeight` values are the unitless ratios 1.50 (body, price), 2.44 (search), and 1.85 (price-struck). Those ratios remain in portable Type roles. The legacy body table’s computed 21px / 44px / 24px / 24px observations are size-local and are not the same values as the ratios. Search control height `44px` is a separate YAML `height` field, not a replacement for ratio `2.44`.

YAML `tokens.components.global-search.type` is `input`. `billboard-control.type` is `button`. `deal-card.type` is `card`. `header-inventory-dialog.type` is `dialog`.

YAML `tokens.components.global-search.fg` `#666666` is the search field’s default renderable foreground. Focus/pressed samples change it to `#111111`. YAML `tokens.components.billboard-control.fg` `#999999` is the billboard control’s renderable field; it is not collapsed into Body `#666666` or Muted `#a9a9a9`. YAML `tokens.colors.on-brand` `#ffffff` is a named color token with no body use.

## Capture selectors

| Component | Pointer |
|---|---|
| Global Search | `home::[data-omd-capture="1"]`, `.search_text.search_text_ad`; also used on `/main` |
| Billboard Control | `home::[data-omd-capture="109"]`, `._billboard-controls__button_1wxhc_120`; also used on `/main` |
| Deal Card | `home::div.c-card-item.c-card-item--deal.c-card-item--box` (16 observed occurrences) |
| Header Inventory Dialog | `home::[data-omd-interaction-capture="dialog-0-0"]`, `.c_header_inventory.c_header_inventory_not_recommend`; two menu-to-dialog interaction expansions on home and `/main` |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction expansions: two menu-to-dialog expansions. Search focus and pressed are captured pseudo-states (foreground `#111111`). Billboard control and deal card are default only.
- Capture absence is not a `not-applicable` reason. Loading, error, and success on Global Search are `not-applicable` by catalog-query-entry meaning. Billboard Control omits loading/error/success: source records selector and default styling only; exact label, action, request, and outcome are unresolved. Deal Card and Header Inventory Dialog omit kind and a §4.4 map (no interactive-kind evidence). State coverage is not claimed complete. C2 complete is not claimed for Billboard Control.
- The source never records `focus-visible`. Applicability stays; captured search `Focus` and `Pressed` `#111111` are additional observed named states, not `focus-visible` treatment.
- Source §13 invents no named personas. Customers and sellers stay Audience. Independently verified tasks only: catalog search, deal-card scan, header-inventory dialog open. No fictional biographies. Sidecar rehosting of personas: none.
- Official brand, company-profile, design-system context, and advertising-guide URLs are narrative or documentation context. They are not token sources for the captured public product routes.

## Derived editorial range in the portable body

B2a adjacent qualifications in `DESIGN.md` (not first-party 11st UI specification). Reconstruction-boundary exemption is not used. This list is the actual adjacent-complete sites after the F3 scan, not a claim that no unqualified sentence remains:

- Experience Scope: evidence-domain / reading-work / identity-authorization
- Experience Scope: comparison of official identity to the captured product routes (“utilitarian layer”)
- Experience Audience: no-invented-personas, stakeholder-group, and task-context reading
- Experience Distinctive: filled-CTA non-promotion of observed `#ff0038`
- Experience Principles: the three numbered items as a whole (stems and *UI implication* notes)
- Experience capture-bound application list
- Experience Avoid list
- Foundations Brand red: filled-CTA non-promotion
- Foundations color: unmerged billboard `#999999` / deal-card price fields
- Foundations color: canonicity and `#F43142` omitted-rather-than-reconstructed
- Foundations Spacing: unitless-scale / not a px scale
- Foundations Shape: local-geometry / not a universal radius scale
- Foundations Elevation: not-an-elevation-scale
- Foundations Motion: dialog-open-not-animation (B3 five-kind gate stays unqualified policy)
- Typography Font evidence: evidence-class application readings
- Typography Family: `Noto Sans KR` UI-family canonicity and `11StreetGothic` related-but-distinct
- Typography Type roles: ratio-versus-px reading
- Typography & Assets: identity-asset and font-distribution boundary
- Components Capture record: omitted-rather-than-synthesized / variant-limit
- Billboard Control field note: unmerged-field
- Layout: omitted-rather-than-inferred
- Layout: desktop-measurement / not cross-viewport
- Content & Locales: public-facing content-direction reading

## Retracted earlier-catalog claims (source footer; not current tokens)

The source footer records that earlier catalog claims promoting a `#F43142` discount token, filled primary/ghost CTAs, a 25px search tab, an 8px universal product-card radius, hover elevation, generic mobile breakpoints, checkout/cart states, and motion tokens were removed. The supplied 2026 capture does not substantiate those values or variants. Grep destinations (E2a): this ledger; portable Capture record (omitted-rather-than-synthesized B2a); Foundations Semantic color (`#F43142` omitted-rather-than-reconstructed B2a); Governance Named gaps. Named gaps keep those names without promoting the values.
