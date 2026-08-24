# Coupang provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/coupang/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | coupang |
| name | Coupang |
| country | KR |
| category | ecommerce |
| homepage | https://www.coupang.com |
| primary_color | `#000000` |
| logo | favicon `https://www.coupang.com/favicon.ico` |
| omd format (source) | 0.1 |
| ds.name | Coupang Media Assets Brand Guidelines |
| ds.url | https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/ |
| ds.type | brand |
| ds.description | Official rules for downloaded Coupang media assets, logo treatment, and attribution. |
| ds.og_image | https://news.coupang.com/wp-content/uploads/2023/01/Coupang_2_1609.jpg |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-12 |

YAML `ds.name` is Coupang Media Assets Brand Guidelines. YAML `ds.type` is `brand`. Catalog `og_image` is identity metadata, not an interface token. The favicon is also in portable Typography & Assets (E2a dual destination).

Token note from source: live commerce values are distinct from corporate/careers Coupang Sans and from media-asset mark guidance.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 (commerce); 2026-07-13 (Coupang Sans, brand guidelines) |
| tokens.extracted | 2026-07-12 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | commerce | https://www.coupang.com/ | 2026-07-12 |
| product-a | commerce-product | https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=5351802654 | 2026-07-12 |
| product-b | commerce-product | https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=80324048129 | 2026-07-12 |

The two product URLs exposed only minimal document chrome in this collector run.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.coupang.com/ | 2026-07-12 |
| product-a-live | product-surface | https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=5351802654 | 2026-07-12 |
| product-b-live | product-surface | https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=80324048129 | 2026-07-12 |
| coupang-sans | official-doc | https://news.coupang.com/archives/19962/ | 2026-07-13 |
| brand-guidelines | brand-asset | https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/ | 2026-07-13 |

### Tier 1

- https://www.coupang.com/
- https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=5351802654&from=home_C2&traid=home_C2&trcid=4750545
- https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=80324048129&from=home_C2&traid=home_C2&trcid=4750546
- https://news.coupang.com/archives/19962/
- https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/
- https://www.coupang.jobs/en/why-coupang/

### Tier 2 (no usable record)

- https://getdesign.md/coupang (no indexed record found)
- https://styles.refero.design/?q=coupang (no Coupang result found in the public search result set)

### Narrative (not interface tokens)

- Why Coupang: https://www.coupang.jobs/en/why-coupang/
- Newsroom information: https://news.coupang.com/21597-2/
- Coupang Sans announcement: https://news.coupang.com/archives/19962/
- Media Assets Brand Guidelines: https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/

Careers and Newsroom are corporate/editorial sources for the three leadership principles and the shopping/eating/living aim. They are not token sources for the commerce UI. They are not used here as a causal explanation of the storefront register.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-12.

| claim | surface |
|---|---|
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.foreground-muted | home |
| tokens.colors.foreground-secondary | home |
| tokens.colors.foreground-account | home |
| tokens.colors.hairline | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.search.size / weight / lineHeight / use | home |
| tokens.typography.utility.size / weight / lineHeight / use | home |
| tokens.typography.utility-small.size / weight / lineHeight / use | home |
| tokens.spacing.xxs / xs / sm / md / lg / xl / xxl / account-gap | home |
| tokens.rounded.none | home |
| tokens.shadow.none | home |
| tokens.components.header-menu-item.* | home |
| tokens.components.header-account-utility.* | home |

YAML typography `lineHeight` values are the unitless ratios 1.5 (body, search, utility-small) and 1.25 (utility). Those ratios remain in portable Type roles. The legacy body table’s computed 24px / 21px / 15–32px / 16.5px observations are size-local and are not the same values as the ratios. 12 × 1.25 = 15, so the 15 in `15–32px` is the ratio product; 32px is a separate size-local observation.

YAML `tokens.components.header-account-utility.fg` `#212b36` is the account-area list item field. It is not collapsed into Foreground `#000000`.

YAML `tokens.components.header-menu-item.type` and `header-account-utility.type` are `listItem`. Search submit is a submit button in the source body. Header search is a text input in the source body. Header menu control has no verified primitive type in YAML.

## Capture selectors

| Component | Pointer |
|---|---|
| Header Menu Control | `home::[data-omd-capture="15"]`; 32px rendered height |
| Search Submit Control | `home::[data-omd-capture="12"]`; 20px rendered height |
| Header Search Input | `home::[data-omd-capture="10"]`; 351px rendered width and 17px rendered height |
| Header Menu Item | `home::li.gnb-menu-item`; 32px rendered height; classified as a list item, not a tab |
| Header Account Utility Item | `home::li.my-coupang`; 59px rendered height and `0px 24px` margin |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction expansions: none. Only default component observations are documented. Interactive machine components were omitted in the source because the capture contains no observed interaction state.
- Capture absence is not a `not-applicable` reason. Loading, error, and success on the header menu control, search submit, search input, menu item, and account-utility item are `not-applicable` by those roles’ meaning (header chrome, catalog-search submit, query entry, header navigation, account utility). State coverage is not claimed complete.
- The source never records `focus-visible`. Applicability stays; no focus color is promoted as `focus-visible` treatment.
- Source §13 collected no first-party persona research and carried two `[FILL IN]` wrappers. Those are omitted. They are not copied here as fictional biographies or demographic segments (D2). Independently verified tasks only: search the homepage catalog; use compact header menu and account-utility items.
- Coupang Sans, Display/Text cuts, and media-asset mark rules are corporate/careers or logo-treatment context. They are not captured commerce UI tokens.

## Legacy placeholders (omitted, not rewritten)

Nine `[FILL IN]` strings in the source were omitted at the smallest unresolved boundary. They are not copied into DESIGN.md. The wrappers are kept here as an omission ledger (E2b).

| Location | Source placeholder |
|---|---|
| §13 Personas | `[FILL IN: user-provided primary customer segment]` |
| §13 Personas | `[FILL IN: user-provided commerce task and context]` |
| §14 Empty | `[FILL IN: no observed state]` |
| §14 Loading | `[FILL IN: no observed state]` |
| §14 Error | `[FILL IN: no observed state]` |
| §14 Success | `[FILL IN: no observed state]` |
| §14 Skeleton | `[FILL IN: no observed state]` |
| §14 Disabled | `[FILL IN: no observed state]` |
| §15 Motion | `[FILL IN: product-specific motion evidence]` |
