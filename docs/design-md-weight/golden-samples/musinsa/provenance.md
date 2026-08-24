# Musinsa provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T1-3 golden sample. Canonical source remains `web/references/musinsa/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | musinsa |
| name | Musinsa |
| country | KR |
| category | ecommerce |
| homepage | https://www.musinsa.com |
| primary_color | `#000000` |
| logo | favicon `https://image.msscdn.net/static/assets/bi/favicon/favicon.svg` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |

Token note from source: two current first-party storefronts. Pretendard is both computed on visible text and backed by loaded Musinsa CDN FontFace records (657 uses). The capture reported zero interaction expansions; only default component observations are promoted.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 |
| tokens.extracted | 2026-07-12 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | storefront | https://www.musinsa.com/main/musinsa/recommend?gf=A | 2026-07-12 |
| standard | brand-storefront | https://www.musinsa.com/brand/musinsastandard?gf=A | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.musinsa.com/main/musinsa/recommend?gf=A | 2026-07-12 |
| standard-live | product-surface | https://www.musinsa.com/brand/musinsastandard?gf=A | 2026-07-12 |

### Tier 1

- https://www.musinsa.com/main/musinsa/recommend?gf=A (main product storefront)
- https://www.musinsa.com/brand/musinsastandard?gf=A (MUSINSA STANDARD brand storefront)

### Tier 2 (no usable record)

- https://getdesign.md/musinsa (attempted direct lookup and indexed search; no usable record returned)
- https://styles.refero.design/?q=musinsa (attempted direct lookup and indexed search; no usable result returned)

### Narrative (not interface tokens)

- Official history: https://about.musinsa.com/newsroom/about-musinsa
- Official origin and evolution: https://about.musinsa.com/newsroom/musinsa-ceo
- Official 2025 BI announcement: https://about.musinsa.com/newsroom/2025-1022
- Pretendard license: https://github.com/orioncactus/pretendard/blob/main/LICENSE

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-12; `standard` = standard / standard-live / computed-style / 2026-07-12.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.muted | home |
| tokens.colors.line | home |
| tokens.typography.family.sans | home |
| tokens.typography.body.size / weight / lineHeight / tracking / use | home |
| tokens.typography.nav.size / weight / lineHeight / tracking / use | home |
| tokens.spacing.xs / sm / md | home |
| tokens.spacing.lg | standard |
| tokens.rounded.square / icon / control | home |
| tokens.shadow.flat | home |
| tokens.components.gnb-store-link.* | home |
| tokens.components.search-input.* | home |
| tokens.components.product-image-link.* | standard |
| tokens.components.product-utility-button.* | standard |

## Capture selectors

| Component | Pointer |
|---|---|
| Global-navigation Store Link | `home::[data-omd-capture="1"]`, class `_gnb__store_102dz_106`; also observed on `standard` |
| Home Search Input | `home::[data-omd-capture="20"]`, `input`, class begins `font-global placeholder-gray-400` |
| MUSINSA STANDARD Product-image Link | `standard::[data-omd-capture="421"]`, `a`, class includes `GoodsItem-BGx5c3Fz__Hr` |
| MUSINSA STANDARD Product Utility Button | `standard::[data-omd-capture="67"]`, `button`, class includes `GoodsItem-BGx5c3Fz__Br` |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction expansions: 0; only default component observations promoted
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history and 2025 BI announcement are narrative context, not token sources
