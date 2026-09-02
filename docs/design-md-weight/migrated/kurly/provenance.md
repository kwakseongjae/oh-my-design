# Kurly provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/kurly/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kurly |
| name | Kurly |
| country | KR |
| category | ecommerce |
| homepage | https://www.kurly.com |
| primary_color | `#5f0080` |
| logo | favicon `https://res.kurly.com/icons/favicon-128x128.png` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled). Catalog `primary_color` `#5f0080` is dual: identity here, and Foundations Active accent / `tokens.colors.primary` in `DESIGN.md`. The favicon slug is dual: identity here, and a portable Assets URL in `DESIGN.md` Typography & Assets (E2a). Homepage `https://www.kurly.com` is identity here; the three captured shopping URLs in Experience are the live surfaces, not a substitute homepage token.

Token note from source: Only values represented in the supplied three-surface collector artifact are canonical. Brand/corporate material and declared-only font assets remain narrative evidence.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | commerce-home | https://www.kurly.com/main | 2026-07-13 |
| category-list | commerce-category | https://www.kurly.com/shopping/categories/list | 2026-07-13 |
| new-products | commerce-collection | https://www.kurly.com/collections/market-newproduct | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.kurly.com/main | 2026-07-13 |
| category-live | product-surface | https://www.kurly.com/shopping/categories/list | 2026-07-13 |
| collection-live | product-surface | https://www.kurly.com/collections/market-newproduct | 2026-07-13 |
| kurly-introduce | official-doc | https://www.kurly.com/introduce | 2026-07-13 |
| kurly-company | official-doc | https://newsroom.kurlycorp.com/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/ | 2026-07-13 |
| pretendard-license | license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | 2026-07-13 |

### Tier 1

- https://www.kurly.com/main
- https://www.kurly.com/shopping/categories/list
- https://www.kurly.com/collections/market-newproduct
- https://www.kurly.com/introduce
- https://newsroom.kurlycorp.com/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/

### Tier 2 (no usable record)

- https://getdesign.md/kurly (attempted; no Kurly record returned in public search)
- https://styles.refero.design/?q=kurly (attempted; no Kurly style record returned in public search)

These independent catalogs do not supply missing Tier 1 fields, and their absence is not used as positive token evidence.

### Narrative (not interface tokens)

- Official introduction: https://www.kurly.com/introduce
- Official company profile: https://newsroom.kurlycorp.com/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/
- Pretendard license: https://github.com/orioncactus/pretendard/blob/main/LICENSE

The introduction and company profile are company/service and corporate/newsroom sources for 2015 origin, cold-chain delivery, Market Kurly, Beauty Kurly, `Something Better`, and the values tenacity, integrity, diversity, and sustainability. They are not token sources for commerce component geometry or color values.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `collection` = new-products / collection-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.body | home |
| tokens.colors.muted | home |
| tokens.colors.border | new-products |
| tokens.colors.control-background | new-products |
| tokens.colors.control-muted | new-products |
| tokens.typography.family.sans | home |
| tokens.typography.utility.size / weight / lineHeight / use | home |
| tokens.typography.category-tab.size / weight / lineHeight / use | home |
| tokens.typography.input.size / weight / lineHeight / use | home |
| tokens.spacing.xxs / xs / sm / md | home |
| tokens.rounded.sm / xs | new-products |
| tokens.shadow.none | new-products |
| tokens.components.category-tab.type / fg / font / states / use | home |
| tokens.components.form-input.type / bg / fg / font / error / use | home |
| tokens.components.product-list-article.type / fg / radius / font / use | new-products |

YAML typography `lineHeight` values are the fixed px strings `14px` (utility), `23.94px` (category-tab), and `20px` (input). Those px strings remain in portable Type roles. They are not unitless ratios.

YAML `tokens.colors.muted` `#999999` is not `tokens.colors.control-muted` `#b5b5b5`. YAML `tokens.spacing.xxs: 2` is not `tokens.rounded.xs: 2`. YAML `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. YAML `tokens.spacing.md: 16` is not `tokens.typography.input.size: 16`.

YAML `tokens.components.category-tab.type` is `button`. YAML `tokens.components.form-input.type` is `input`. YAML `tokens.components.product-list-article.type` is `card`. Repeated list control and compact product-list control have no YAML `type` key.

## Capture selectors

| Component | Pointer |
|---|---|
| Category tab | `home::[data-omd-capture="7"]` and matching `surface-3::[data-omd-capture="7"]`; selected `home::[data-omd-capture="6"]`; hover `home::[data-omd-capture="7"]::state-hover`; pressed `home::[data-omd-capture="7"]::state-pressed` |
| Form input | `home::[data-omd-interaction-capture="form-error-0-0"]` and `surface-3::[data-omd-interaction-capture="form-error-0-0"]` |
| Repeated list control | `surface-3::[data-omd-capture="148"]`; 249px by 36px button; default only |
| Compact product-list control | `surface-3::[data-omd-capture="60"]`; 22px; padding `2px 0px 3px`; default only |
| Product-list article | `surface-3::article`; 249px sampled width; transparent background; no border; `box-shadow: none` |

## Sibling

`web/references/kurly/.verification.md` exists. Sibling-only measurements that the portable body does not adopt: capture timestamp `2026-07-13T11:04:52.389Z`; viewport height `900` in `1440×900`; collector score 90 / 37 component variants / four observed states / one interaction kind / two interaction snapshots; Pretendard path `res.kurly.com/fonts/pretendard/1.3.9`; RGB restatements of already-hexed values; rendered height `24px` on category-tab captures `"6"` and `"7"`; form-error `border-width: 0px`; prior-reference “KPDS-like” removal narrative. Those remain ledger notes. They are not promoted as portable tokens.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction expansions recorded in the source: category-tab hover and pressed; form-input error. Empty, loading, success, skeleton, disabled, and focus were unobserved. Capture absence is not a `not-applicable` reason. Loading, error, and success on the category tab, repeated list control, and compact product-list control are `not-applicable` by those roles’ meaning (category navigation, product-list chrome). Form-input error is `applicable` and captured; form-input loading and success are `not-applicable` by value-entry meaning. State coverage is not claimed complete.
- The source never records `focus-visible`. Applicability stays; no focus color is promoted as `focus-visible` treatment. Named Focus in §14 is not that evidence.
- Pressed on one inactive category tab is an additional observed state, not a Core applicability row.
- Product-list article YAML `type: card` has no interactive-kind confirmation; kind and a state-applicability map are omitted (C4).
- No official Kurly design-system documentation surface was collected. The B2a form used in Experience is the no-published-UI-specification form.
- Official history, `Something Better`, and 2015 / Market Kurly / Beauty Kurly are narrative context, not token sources.

## B2a ledger (portable-body qualifications)

Each row is one derived-editorial qualification that also appears adjacent in `DESIGN.md`. This ledger does not add a second interpretation; it records the same class.

| Location | Qualified reading |
|---|---|
| Experience Scope | Treating the three captured shopping URLs as this contract's scope rather than substituting the catalog homepage token |
| Experience Scope | Reading the captured layer as a compact commerce language rather than a published universal product design system, and reading corporate story and shopping UI as related without filling unobserved tokens from corporate or marketing language; classifying the introduction and company profile as business context, the three live surfaces as UI values, and the 2015 / cold-chain / Market Kurly / Beauty Kurly narrative as context that does not convert corporate claims into component tokens |
| Primary tasks | Selecting the three captured shopping surfaces as primary tasks, and refusing the persona placeholders |
| Audience | Reading first-party stakeholder groups as audience, and dropping the two unresolved persona placeholders |
| Distinctive traits | Classifying the list as a restatement of Key Characteristics |
| Principles | UI-implication notes on the four company-profile titles |
| Application rules | Treating the source Do list as capture-bound application |
| Avoid | Treating the source Don't list as reconstruction prohibitions |
| Semantic color | Pairing hexes to token-set paths; keeping muted unmerged from control-muted; keeping canvas `#ffffff` unmerged from form-input `bg` and list-control background, foreground `#333333` unmerged from form-input `fg` and article `fg`, and control-muted `#b5b5b5` unmerged from category-tab `fg` |
| Spacing | Keeping YAML spacing steps unmerged from rounded and type-size 16 |
| Spacing | Recording compact-control `3px` as that control's field rather than a spacing token |
| Shape | Reading YAML 2 / 4 as not a universal radius scale; pairing compact `2px` to `tokens.rounded.xs` and list-control `4px` to `tokens.rounded.sm` |
| Shape | Keeping YAML 2 / 4 unmerged from component-local `0px`; not inventing `rounded.none` |
| Font evidence | Assigning live-computed Pretendard as the UI-family token; Pretendard license as reusable typeface not a Kurly-owned brand-font asset; `Noto Sans KR` / `swiper-icons` declared-only; system fallbacks not the brand face; no Kurly-exclusive distributed type family |
| Type roles | Keeping YAML unitless sizes 14 / 18 / 16 unmerged from body `14px` / `18px` / `16px`; YAML line-height px strings unconverted to ratios; compact `13px` component-local rather than a YAML type role |
| Assets | Reading Pretendard as a third-party webfont rather than a Kurly-owned brand-font asset |
| Capture record | Declaring Core applicability by control meaning rather than capture completeness; named Focus is not `focus-visible` treatment; pressed is not a Core row; primitive type only when YAML records one; product-list article omits kind plus state map |
| Layout | Reading the 1440px capture as not a responsive specification, and the 249px article width as not a site-wide grid |
| Layout | Keeping YAML spacing steps 2 / 4 / 8 / 16 as the spacing token set rather than a converted px sheet or a responsive grid |
| Content & Locales | Reading company material as a practical, discriminating, and responsible voice; treating the context table as first-party-supported direction rather than storefront microcopy |

## Legacy placeholders (omitted, not rewritten)

Nine `[FILL IN]` wrappers in the source were omitted at the smallest unresolved boundary (two in §13, six in §14, one in §15). Portable `DESIGN.md` does not emit those wrappers. They are kept here as an omission ledger (E2b). The two §13 wrappers are unresolved segment/workflow slots, not named people. This ledger records location and field kind only (D2a).

| Location | Source placeholder |
|---|---|
| §13 Personas | `[FILL IN: user-provided primary customer segment and task]` |
| §13 Personas | `[FILL IN: user-provided producer or partner workflow, if the target surface serves one]` |
| §14 Empty | `[FILL IN: no observed state]` |
| §14 Loading | `[FILL IN: no observed state]` |
| §14 Success | `[FILL IN: no observed state]` |
| §14 Skeleton | `[FILL IN: no observed state]` |
| §14 Disabled | `[FILL IN: no observed state]` |
| §14 Focus | `[FILL IN: no observed state]` |
| §15 Motion | `[FILL IN: product-specific motion evidence]` |
