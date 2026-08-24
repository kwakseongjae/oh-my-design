# 42dot provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/42dot/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | 42dot |
| name | 42dot |
| display_name_kr | 포티투닷 |
| country | KR |
| category | automotive |
| homepage | https://42dot.ai/ |
| primary_color | `#786efa` |
| logo | favicon `https://42dot.ai/icon.png` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |

Catalog `primary_color` `#786efa` is this identity ledger AND portable Distinctive (periwinkle-violet hex) AND Foundations Periwinkle Violet (`Catalog primary_color`) AND Scope accent-signal hex AND Principles “One accent, one meaning” AND capture-bound reserve-violet (E2a). Component tag-active `bg` `#786efa` is a further portable hit on Active Tag Pill; it stays that control's renderable field and is not collapsed into a general Ink (A4).

`display_name_kr` 포티투닷 is this identity ledger AND portable Experience Scope (E2a).

Catalog logo metadata is a first-party favicon `https://42dot.ai/icon.png`. Dual destination (E2a): this identity ledger and portable Typography & Assets. It is not a Google s2 lookup.

Homepage `https://42dot.ai/` is dual-destination: Experience Scope + this identity / Surfaces / Sources / Tier 1 ledger (E2a). Captured blog `https://42dot.ai/blog` is a distinct URL, also dual Experience Scope + this identity/surfaces/sources/Tier 1 ledger.

Token note from source: Monochrome black/white system with a single periwinkle-violet accent (`#786efa`) reserved for active topic tags. Dark chrome uses graphite `#32353f` (nav dropdown) and charcoal `#282b32` (blog hero); secondary text/borders sit in slate `#737d8c`. Type is AstaSans with Noto Sans KR fallback. Destinations (E2a): this identity ledger + portable Scope accent-signal + Distinctive + Foundations Semantic color + Typography Family (AstaSans live / Noto declared-only).

`tokens.source: live-extract` is this identity ledger AND portable Font evidence live-computed row (E2a). `components_harvested: true` is not in the portable body.

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces) |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |

Footer metadata from the source: `Verified: 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)`. The `(omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)` mark is preserved here (A1c).

Conflicts unresolved (footer): none.

Preserved value conflicts inside the packet (not resolved by choosing one side):

- Inactive tag-filter border: YAML / §4 `1px solid #737d8c` vs HTML inspect `1px solid rgba(115,125,140,0.3)`. Dual destination: portable Inactive Tag Filter + this Conflicts ledger (E2a). Both values are kept.
- Tag radius: YAML / §4 `22px` vs HTML inspect `22.4px`. Dual destination: portable Shape / Active Tag Pill + this ledger (E2a).
- Tag padding: YAML / §4 `6px 12px` vs HTML inspect `5.6px 12px`. Dual destination: portable Active Tag Pill + this ledger (E2a).
- Tag type size: YAML `11px` vs HTML inspect `11.2px`. Dual destination: portable Font evidence live-computed / Type roles / Active Tag Pill + this ledger (E2a).
- Section title size: YAML `36px` vs HTML inspect `35.52px`. Dual destination: portable Font evidence live-computed / Type roles + this ledger (E2a).
- Card title size: YAML `26px` vs HTML inspect `25.6px`. Dual destination: portable Font evidence live-computed / Type roles + this ledger (E2a).
- Section label size: YAML `29px` vs HTML inspect `28.8px`. Dual destination: portable Font evidence live-computed / Type roles + this ledger (E2a).
- Carousel radius: YAML / §4 `9999px` vs HTML inspect `50%` radius. Dual destination: portable Carousel Control + this ledger (E2a). This `50%` is the radius observation, not Nav Item `50%` white.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-site | https://42dot.ai/ | 2026-07-02 |
| blog | editorial | https://42dot.ai/blog | 2026-07-02 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://42dot.ai/ | 2026-07-02 |
| blog-live | product-surface | https://42dot.ai/blog | 2026-07-02 |

### Tier 1

- https://42dot.ai/
- https://42dot.ai/blog

### Tier 2 (no usable record)

- getdesign.md/42dot (listed but 0 DESIGN.md files — no data)
- styles.refero.design/?q=42dot (no 42dot match — KR under-coverage)

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-02; `blog` = blog / blog-live / live-inspect / 2026-07-02.

| claim | surface |
|---|---|
| tokens.colors.primary (homepage active pills ×16) | home |
| tokens.colors.primary (blog active pills ×16) | blog |
| tokens.colors.ink | home |
| tokens.colors.muted | blog |
| tokens.colors.nav-dark | home |
| tokens.colors.hero-dark | blog |
| tokens.colors.canvas | home |
| tokens.colors.surface | home |
| tokens.colors.card | home |
| tokens.colors.on-dark | home |
| tokens.typography.family.sans | home (AstaSans live computed) |
| tokens.typography.family.kr | declared-only Noto Sans KR; not a home live-inspect mapping |
| tokens.typography.display-hero.size / weight / lineHeight / use | home |
| tokens.typography.section.size / weight / lineHeight / use | home |
| tokens.typography.section-label.size / weight / lineHeight / use | blog |
| tokens.typography.card-title.size / weight / lineHeight / use | home |
| tokens.typography.nav.size / weight / lineHeight / use | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.tag.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / base / md / lg / section | home |
| tokens.rounded.none / pill / full | home |
| tokens.shadow.dropdown | home |
| tokens.components.tag-active.* | home |
| tokens.components.tag-filter.* | blog |
| tokens.components.blog-card.* | home |
| tokens.components.nav-dropdown.* | home |
| tokens.components.nav-item.* | home |
| tokens.components.carousel-button.* | home |

`tokens.colors.primary` `#786efa` is the active-tag accent, not a general fill. Homepage active pills ×16 and blog active pills ×16 are separate surface observations; both are kept. `tokens.components.tag-filter` background is transparent; YAML did not list `bg`, §9 and the HTML inspect note do. `tokens.components.nav-item` sub-items dim to 50% white (opacity on the label, not carousel `50%` radius). `tokens.components.carousel-button` YAML radius is 9999px; HTML inspect also records 50% radius. `tokens.shadow.dropdown` `rgba(0,0,0,0.2) 0px 4px 10px` is portable Foundations Elevation + Nav Dropdown Panel Shadow + Scope geometry mention + this claim ledger / Proof notes (E2a).

YAML typography `lineHeight` values are the unitless ratios 1.45, 1.60, 1.50, and 1.40. Those ratios remain in portable Type roles. The legacy body table's computed 55.68px / 56.83px / 41.76px / 38.40px observations are size-local and are not the same values as the ratios. Nav Item rem is `0.89rem`; Body rem is `0.88rem`; they are not collapsed.

## Capture selectors

The source DESIGN.md does not record `data-omd-capture` pointers or class selectors. None are invented here. HTML inspect notes name playwright `getComputedStyle` on the two Tier 1 URLs.

## Omission ledger (easing curves)

Unattributed cubic-bezier curves omitted from portable Foundations (names and uses kept; E2b):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` — Arriving — dropdown panels, cards
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — Dismissals; matches the legacy spec template `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` — Two-way transitions, carousel

Duration tokens `120ms` / `240ms` / `400ms` and signature-motion prose remain in portable Motion. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion.

## Proof notes

- tokens.source: `live-extract` is this identity/Proof ledger AND portable Font evidence live-computed row (E2a). `components_harvested: true` is provenance metadata only (A1c).
- Token-level claims (§1–9) are sourced from the 2026-07-02 live inspection (see HTML comment Proof block). Voice samples (§10) are verbatim from the live homepage. Brand narrative founding/acquisition details are widely documented public facts, not directly quoted from a verified 42dot statement in that turn.
- Homepage `https://42dot.ai/` and blog `https://42dot.ai/blog` are dual-destination: Experience Scope + this identity/surfaces/sources/Tier 1 ledger (E2a).
- Catalog favicon `https://42dot.ai/icon.png` is dual identity + portable Assets (E2a).
- Catalog `primary_color` `#786efa` is identity + Distinctive + Foundations Periwinkle Violet + Scope accent-signal + Principles “One accent, one meaning” + capture-bound reserve-violet (E2a). Homepage active pills ×16 and blog active pills ×16 are both preserved. Active Tag Pill `Background: #786efa` is the tag-active field, not a general Ink (A4).
- `tokens.shadow.dropdown` `rgba(0,0,0,0.2) 0px 4px 10px` is Foundations Elevation + Nav Dropdown Panel Shadow + Scope geometry mention + this claim ledger / Proof notes (E2a).
- `display_name_kr` 포티투닷 is identity + Scope (E2a).
- Inactive tag-filter `Background: transparent` is portable Inactive Tag Filter + Foundations unpromoted-role + this identity/Proof ledger (E2a, A3).
- Inactive tag-filter border conflict, tag 22px vs 22.4px, 6px vs 5.6px, 11px vs 11.2px, section 36px vs 35.52px, card-title 26px vs 25.6px, section-label 29px vs 28.8px, carousel 9999px vs 50% radius are dual portable body + this Conflicts ledger (E2a). `11.2px` / `35.52px` / `25.6px` / `28.8px` also hit Font evidence live-computed. Carousel `50%` radius is not Nav Item `50%` white.
- Active Tag Pill, Blog / Research Card, and Nav Dropdown Panel have no interactive-kind evidence; kind and a state-applicability map were omitted rather than invented (C4). Dual destination (E2a): Components kind-omitted entries + Governance Named gaps.
- Uncaptured hover/pressed/focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. Inactive Tag Filter (blog tag filter) and Carousel Control (prev/next paging) keep identified-role loading/error/success maps. Nav Item omits loading/error/success: exact destination versus dropdown-trigger is unresolved. State coverage is not claimed complete. C2 complete is not claimed for Nav Item.
- Generic `Focus` is not recorded in the source as `focus-visible`. Dual destination (E2a): Components capture-record B1 note + Governance Named gaps.
- Source §13 personas are fictional archetypes informed by publicly observable 42dot audiences, not individual people. Portable Audience keeps the exclusion boundary only. Names, ages, cities, employers, and biographies are not copied here (D2). Primary tasks come from homepage hero / blog-card scan / blog tag filter evidence, not §13.
- Unattributed easing *curves* omitted from portable Foundations as listed in the omission ledger above. Token names `ease-enter` / `ease-exit` / `ease-standard`, their uses, and duration/signature-motion prose remain in portable Motion. Dual destination (E2a): Foundations Motion + Governance Named gaps + this omission ledger (E2b).
- Form-validation color is unnamed (warm error tone, no hex). Destinations (E2a): Components capture record + Governance Named gaps + this Proof notes ledger.
- AstaSans live computed use and Noto Sans KR declared-only fallback are separate evidence classes. No portable Font evidence or Named-gaps row asserts a 42dot-exclusive redistribution right or a loadable third-party reproduction kit.
- Footer `Verified: 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)` keeps that mark in this freshness ledger (A1c).
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not 42dot-authored or a separately published UI specification`): Scope visual-character / engineering-lab; Scope accent-signal / violet-does-a-lot-of-work; Scope geometry-affordance / roundness-as-interactive; Scope design-refusal / consumer-cute-vs-engineered-flatness; Scope public-fact-not-token application; Audience task-context application; Distinctive trait readings; five numbered Principles (`These five items` only); capture-bound application list (separate limiter); Avoid Don'ts; Semantic-role and character readings; Semantic unpromoted-role / transparent-not-canvas; Spacing local-scale / ~8px; Shape local-geometry / affordance; Elevation philosophy; Motion character / no-bounce-steadiness; Font evidence-class application readings; Family font-use boundary; Typography hierarchy-signal / imagery-leads; Assets favicon identity-not-wordmark and first-party imagery not-invented-decoration (one limiter); Capture-record state-contract characterizations; Layout-purpose / cinematic-then-calm; Layout-application (touch-target purpose / collapsing as packet rows / image-behavior legibility); Content voice / tone-table / application; Content Forbidden-register list; Content no-synthetic-voice. Governance Authority is a reconstruction-authority sentence, not a substitute for those adjacent limiters. Reconstruction-boundary exemption is not used. Actual derived range is those sites, not Principles-only. `precision-over-decoration` is not a portable sentence and is not in this range.
- Founding 2019 / Song Chang-hyun / 2022 Hyundai Motor Group acquisition / AKit / SDV / 42dot LLM / TAP! remain public-fact narrative in portable Scope with the source's "widely documented public facts, not directly quoted" qualifier. The not-token application on that paragraph has adjacent complete B2a.
