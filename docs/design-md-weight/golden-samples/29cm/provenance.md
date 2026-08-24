# 29CM provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T1-3 golden sample. Canonical source remains `web/references/29cm/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | 29cm |
| name | 29CM |
| country | KR |
| category | ecommerce |
| homepage | https://www.29cm.co.kr |
| primary_color | `#000000` |
| logo | favicon `https://asset.29cm.co.kr/icon/apple-icon-144x144.png` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-11 |

Token note from source: five current public commerce/editorial surfaces. Pretendard Variable is loaded and used; Campton and swiper-icons are declared-only. Accent is current sale text `#ff4800`, not the previous `#ff0066`/`#ff003c` guess.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-11 (five-surface live recapture and deterministic reconciliation) |
| verification_v2.checked | 2026-07-11 |
| surfaces inspected | 2026-07-11 |
| sources captured | 2026-07-11 |
| tokens.extracted | 2026-07-11 |

Conflicts unresolved: none.

Current live evidence supersedes the prior pink accent, `#c4c4c4` outline, 22px/700 editorial title, and radius-ceiling assumptions.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | storefront | https://www.29cm.co.kr/ | 2026-07-11 |
| best | catalog | https://www.29cm.co.kr/best-products?period=HOURLY&ranking=POPULARITY&gender=F&age=30 | 2026-07-11 |
| magazine | editorial | https://www.29cm.co.kr/content/29magazine | 2026-07-11 |
| showcase | editorial | https://www.29cm.co.kr/store/showcase | 2026-07-11 |
| product | product-detail | https://www.29cm.co.kr/products/3970725 | 2026-07-11 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.29cm.co.kr/ | 2026-07-11 |
| best-live | product-surface | https://www.29cm.co.kr/best-products?period=HOURLY&ranking=POPULARITY&gender=F&age=30 | 2026-07-11 |
| magazine-live | product-surface | https://www.29cm.co.kr/content/29magazine | 2026-07-11 |
| showcase-live | product-surface | https://www.29cm.co.kr/store/showcase | 2026-07-11 |
| product-live | product-surface | https://www.29cm.co.kr/products/3970725 | 2026-07-11 |

### Tier 1

- https://www.29cm.co.kr/
- https://www.29cm.co.kr/best-products?period=HOURLY&ranking=POPULARITY&gender=F&age=30
- https://www.29cm.co.kr/content/29magazine
- https://www.29cm.co.kr/store/showcase
- https://www.29cm.co.kr/products/3970725

### Tier 2 (no usable 29CM record)

- https://getdesign.md/29cm returned “No designs found for 29cm”
- https://styles.refero.design/?q=29CM exposed no 29CM-specific style result in the rendered search path inspected on 2026-07-11

## Claim ledger

`home_evidence` = home / home-live / live-inspect / 2026-07-11.
`best_evidence` = best / best-live / live-inspect / 2026-07-11.
`magazine_evidence` = magazine / magazine-live / live-inspect / 2026-07-11.
`showcase_evidence` = showcase / showcase-live / live-inspect / 2026-07-11.
`product_evidence` = product / product-live / live-inspect / 2026-07-11.

| claim | surface |
|---|---|
| tokens.colors.accent | best |
| tokens.colors.border / canvas / foreground / muted / primary | home |
| tokens.colors.ink-secondary | magazine |
| tokens.colors.ink-tertiary | best |
| tokens.components.carousel-control.* | product |
| tokens.components.editorial-story-item.bg/radius/type/use | showcase |
| tokens.components.ghost-outline.* | home |
| tokens.components.product-grid-item.bg/radius/type/use | best |
| tokens.components.quantity-input.* | product |
| tokens.rounded.chip / full | product |
| tokens.rounded.md / sm | home |
| tokens.shadow.flat | home |
| tokens.spacing.base/lg/md/sm/xl/xs | home |
| tokens.typography.body.* / family.sans / nav-display.* | home |
| tokens.typography.caption.* / product-brand.* / product-name.* / product-price.* | best |
| tokens.typography.editorial-title.* | magazine |

## Capture inventory

Collector found 68 component variants across the five routes: 40 button variants, 27 list-item variants, and one input variant. No safe click expansion was executed because candidate interactions could mutate navigation or commerce state. Pseudo-state capture still recorded disabled, focus, hover, and pressed variants where available.

Product Grid Item and Editorial Story Item remain listItem anatomy only: no interactive-kind or state-applicability confirmation. Motion tokens stay unpromoted until per-component computed transition, animation name, duration, easing, and reduced-motion evidence exists.

Low-frequency captured value `#f4f4f4` was not promoted to a canonical token.

## Legacy placeholders (omitted, not rewritten)

Six `[FILL IN]` strings in the source were omitted at the smallest unresolved boundary. They are not copied into DESIGN.md.

| Location | Source placeholder |
|---|---|
| §8 Responsive | `[FILL IN: controlled multi-viewport capture required]` for navigation collapse, mobile column counts, tablet gutters, and fixed-position help |
| §14 Empty | `[FILL IN: dedicated public empty-state capture required]` |
| §14 Loading | `[FILL IN: dedicated loading-state capture required]` |
| §14 Error | `[FILL IN: dedicated public error-state capture required]` |
| §14 Success | `[FILL IN: dedicated public success-state capture required]` |
| §15 Motion | `[FILL IN: no canonical motion duration or easing curve was published or extracted in this verification pass.]` |
