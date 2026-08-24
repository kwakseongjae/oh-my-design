# Barogo provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/barogo/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | barogo |
| name | Barogo |
| display_name_kr | 바로고 |
| country | KR |
| category | consumer-tech |
| homepage | https://www.barogo.com/ |
| primary_color | `#fa5014` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=barogo.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

Token note from source: `primary = live hero-CTA orange (#fa5014, rgb(250,80,20)); text is true black (#000000) softening to #111111; near-shadowless flat surfaces with a #2d3ce6 electric-blue used only inside the aboutUs brand-identity block. Single family Pretendard, with Termina reserved for Latin/numeral display accents.` Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / derived editorial implementation inference / not-Barogo-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=barogo.com&sz=128` is this identity ledger only. Portable Typography & Assets states a URL-free Google-favicon identity-boundary sentence (not a captured first-party mark; not promoted as a portable mark file). No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage exact `https://www.barogo.com/` (not the aboutUs path) is dual-destination: portable Scope 9 / named-domain 11 + this identity 14 / Surfaces 49 / Sources 56 / Tier 1 61 (E2a). aboutUs `https://www.barogo.com/aboutUs` is dual portable Scope 11 + this Surfaces 50 / Sources 57 / Tier 1 62 (E2a). Substring hits of the homepage host on aboutUs rows are not homepage destinations.

Catalog `primary_color` `#fa5014` is identity metadata + portable Scope token-note 13 / atmosphere 15 + Distinctive 42 / unmerged 51 + Principles item 2 58 + capture-bound 65 + Semantic unmerged-role 93 / Foundations Barogo Orange 95 + Elevation philosophy 133 + Capture-record Empty 210 + Primary CTA Background 234 / field note 244 + Outline Text/Border 262–263 / field note 271 + Feature Card Observed additional fills 294 / field note 296 (E2a). Avoid names “orange” in running prose (78, 85) and `#2d3ce6` in the electric-blue Don’t (84); the `#fa5014` hex is not in Avoid.

`display_name_kr` `바로고` is dual: this identity ledger (YAML key) + portable Scope running prose `Barogo (바로고)` (value destination). H1 is `Barogo Design System` and is not the YAML key. `tokens.source: live-extract` and `components_harvested: true` are this ledger only (A1c). `added` 2026-07-02 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| live inspect (playwright getComputedStyle) | 2026-07-02 |
| Observed voice samples | 2026-07-02 |
| footer Verified | 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces) |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#fa5014` action orange vs Brand-Identity Blue `#2d3ce6`; Ink `#000000` vs Ink Soft `#111111` vs Dark `#1a1a1a`; Canvas `#ffffff` jobs vs Surface `#f6f6f6` vs Surface Alt `#f9f9f9`; Hairline `#dcdcdc` vs Feature Card `#dcdcdc` fill; YAML `rounded.sm` 3 / 3px vs measured 3.008px; YAML `shadow.cta` / `shadow.card` trailing `0px` vs body shadows without it; YAML line-height ratios `1.33` / `1.43` / `1.0` vs roles with no `lineHeight`; YAML Outline Use "스토어프로그램 / 사용 설명서 / 자세히 보기" vs body "BI / GUIDE". Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-homepage | https://www.barogo.com/ | 2026-07-02 |
| aboutUs | company-page | https://www.barogo.com/aboutUs | 2026-07-02 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.barogo.com/ | 2026-07-02 |
| aboutUs-live | company-page | https://www.barogo.com/aboutUs | 2026-07-02 |

### Tier 1

- https://www.barogo.com/ — homepage, live computed style (hero H1 "무엇이든 어디서나 배달" (Pretendard 42px/700), primary CTA "바로 문의하기" (bg rgb(250,80,20) `#fa5014`, radius 3.008px, 20px/700, white text), outline buttons (`#fa5014` text + 1px solid `#fa5014`), section H2s "성공하는 매장의 노하우" "사장님의 정성 그대로", black footer `#1a1a1a` with white links, radius freq 20px×45 / 3.008px×6, font Pretendard ×434)
- https://www.barogo.com/aboutUs — mission H1 "세상에 활력을 더하는 초연결 생태계를 만듭니다." (54px/700), ghost numeral "2016" (Termina 150px, `#000000` @0.05 alpha), stat cards (16px radius), feature cards (12px radius, `rgba(0,0,0,0.1) 0px 2px 20px`), "BAROGO Brand Identity" block with `#2d3ce6`, "숫자로 보는 바로고" / "바로고가 걸어온 길" section headings

Home / aboutUs URLs are dual-destination with portable Experience Scope (E2a). Exact homepage `https://www.barogo.com/` (not the aboutUs path) is portable Scope 9 + named-domain 11 + this identity 14 / Surfaces 49 / Sources 56 / Tier 1 61. aboutUs `https://www.barogo.com/aboutUs` is portable Scope 11 + this Surfaces 50 / Sources 57 / Tier 1 62. Substring hits of the homepage host on aboutUs rows are not homepage destinations. HTML-comment radius frequency `20px×45` / `3.008px×6` is this Tier 1 ledger only; measured `3.008px` is portable Scope 19 + Distinctive 48 / unmerged 51 + Shape 117 / 119 + Primary CTA field note 244 (E2a). Pretendard ×434 is dual: this ledger + portable Scope 17 / Font evidence 167 / Family 174 (E2a). HTML-comment `rgb(250,80,20)` is dual this ledger + portable Scope token-note 13 / Semantic 93 / Foundations Barogo Orange 95 (E2a).

### Tier 2 (no usable record)

- getdesign.md/barogo — 0 files ("No designs found")
- styles.refero.design/?q=barogo — no barogo-specific match (generic browse grid only)

### Narrative (not interface tokens)

- 2016 founding year from the oversized ghost numeral on aboutUs; mission line "세상에 활력을 더하는 초연결 생태계를 만듭니다." verbatim from that page. Dual portable Scope + this ledger (E2a). Broader scale/positioning claims are general public knowledge, not quoted from a single verified statement in the source turn. Portable Scope restates that public-knowledge limiter under adjacent complete B2a (narrative rather than interface tokens).
- Site-visible entry points "스토어프로그램", "라이더 지원", "허브 창업" and "숫자로 보는 바로고" are live-surface labels in portable Scope 21 / Primary tasks / Components. Source §11 also records the software-coordination relation (riders and store operators) that those labels sit on. They are not a live-surface-labels-not-captured-product-UI negative.

Voice samples (§10) are verbatim from the live homepage and aboutUs page (tagline, mission H1, section headings). Dual-destination for the Observed strings and the 2026-07-02 date: portable Content & Locales + this ledger (E2a). "바로 문의하기" is also in Primary tasks / Primary CTA; "숫자로 보는 바로고" is also Primary tasks / Stat Card / Principles; "무엇이든 어디서나" is also Scope atmosphere (E2a). Derived §10 tone table and forbidden register are not this observation class.

## Claim ledger

Token extraction is `live-extract` (2026-07-02). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body action orange `#fa5014`, inks `#000000` / `#111111`, surfaces `#ffffff` / `#f6f6f6` / `#f9f9f9`, hairline `#dcdcdc`, footer `#1a1a1a`, identity blue `#2d3ce6`, Pretendard, Termina 150px `2016` | home-live / aboutUs-live computed style (footer HTML comment) |
| Primary CTA "바로 문의하기" radius 3.008px, 72px / 20px/700 | home-live |
| Outline buttons, section H2s, footer white links, Pretendard ×434, radius freq 20px×45 / 3.008px×6 | home-live |
| Mission 54px/700, ghost numeral Termina, stat 16px, feature 12px + card shadow, `#2d3ce6` identity block, "숫자로 보는 바로고" / "바로고가 걸어온 길" | aboutUs-live |
| YAML `rounded.full` 9999 / body `9999px` | YAML + portable Shape + Distinctive |
| Badges geometry (bg `#f6f6f6`, text `#666666`, radius 20px, font 12px / 500) | body §4 only (not YAML `tokens.components`) |
| Outline body extra label "BI / GUIDE" | body §4 (YAML Use names 스토어프로그램 / 사용 설명서 / 자세히 보기) |
| YAML `shadow.cta` / `shadow.card` trailing `0px` vs body shadows without it | YAML + portable Elevation |
| §14 empty/loading/error/success/skeleton/disabled rows | source state contract; portable Capture record under adjacent complete B2a on philosophy-layer classification and table characterizations |
| §15 durations 120ms/220ms/320ms, easing names, reduced-motion, signature carousel/press | philosophy layer (sections 10–15); not in the live-inspect list; portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed (nintendo/workday/barogo share the same three curves without a live computed source in this packet). Duration tokens (`120ms` / `220ms` / `320ms`), easing names, “No bounce or spring”, signature hero-carousel `motion-standard / ease-enter` plus "Previous slide" / "Next slide", button press opacity/scale, and `prefers-reduced-motion: reduce` remain in portable Motion under the philosophy-layer / source-stated limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps lists the omitted curve names and “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. Prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components. §9-only unique renderable fields kept: Hero 42px/700/#000 H1 with primary+outline CTA pair (Layout 406); Feature Card title Pretendard 700 / `#000000` and body 16px / 400 / `#666666` (292–293).

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is this identity ledger only. Portable Assets is URL-free identity-boundary (E2a). No Named-gaps first-party-logo-file negative was kept
- Homepage exact `https://www.barogo.com/` (not the aboutUs path) is dual-destination: portable Scope 9 / named-domain 11 + this identity 14 / Surfaces 49 / Sources 56 / Tier 1 61 (E2a)
- aboutUs `https://www.barogo.com/aboutUs` is dual portable Scope 11 + this Surfaces 50 / Sources 57 / Tier 1 62 (E2a). Substring hits of the homepage host on aboutUs rows are not homepage destinations
- `primary_color` `#fa5014` destinations: identity 15/22/28/43/61/84/123 + portable Scope token-note 13 / atmosphere 15 + Distinctive 42 / unmerged 51 + Principles item 2 58 + capture-bound 65 + Semantic unmerged-role 93 / Foundations Barogo Orange 95 + Elevation philosophy 133 + Capture-record Empty 210 + Primary CTA Background 234 / field note 244 + Outline Text/Border 262–263 / field note 271 + Feature Card Observed additional fills 294 / field note 296 (E2a). Avoid does not contain the `#fa5014` hex
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- `display_name_kr` `바로고` is dual: this identity ledger (YAML key) + portable Scope running prose (value). Not provenance-only
- Observed 2026-07-02 voice strings and date are dual-destination: portable Content & Locales + this freshness/narrative ledger; "바로 문의하기" / "숫자로 보는 바로고" / "무엇이든 어디서나" also appear in Primary tasks or Scope (E2a)
- YAML typography `use` fields restored on Type roles (A1)
- YAML unitless `lineHeight` 1.33 / 1.43 / 1.0 preserved as ratios (A1a)
- Verified primitive types preserved per component: button×2 + card×2 + tab + listItem; Badges have no YAML type and none was invented (A1b)
- Generic Focus is absent from the source; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Primary CTA / Outline / Footer Link omit loading/error/success fields (C2). Top Nav loading/error/success remain destination-selection role-based. Feature Card / Stat Card / Badges omit kind/map (C4)
- Badges are body §4 only (not YAML `tokens.components`)
- Source §13 personas are fictional archetypes informed by publicly observable segments (store owners, delivery riders, hub franchise operators), not specific individuals. Portable Audience keeps the exclusion boundary only. Fictional given names, ages, cities, occupations, and biographies are omitted here (D2). Primary tasks come from live homepage/aboutUs strings, not §13
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Barogo-authored or a separately published UI specification`): Scope two-URL evidence-domain (11); Scope token-note register-split (13); Scope visual-character / operator-plainness / high-energy-plainness / matter-of-factness / eye-trained-to-orange-as-act-now including confident operator-that-moves-physical-goods / hot-delivery-orange applied-with-discipline / orange-owns-CTA-and-outline-ink-and-little-else / high-contrast-read-mirroring-무엇이든-어디서나 (15); Scope Korean-utilitarian / almost-no-ornament / size-and-weight-not-color-or-decoration including Pretendard-carries-the-entire-site / Termina-as-only-exception / quiet-weight-400-for-body-and-UI (17); Scope near-flat / sharp-cornered / functional-and-fast / structure-by-tint-hairline-footer including barely-there ~3px / restrained elevation / identity-blue as a deliberate secondary-brand accent never as general UI color (19); Scope public-history / founding-year-from-ghost-numeral / scale-as-public-fact / structural-gap / shared-rails / software-coordination / live-surface labels as site-visible names (21); live-surface-labels-not-captured-product-UI is not current; Scope refusal / embrace / operator-aesthetic (23); Primary tasks independently-verified / not-from-§13 (29); Audience no-individual-personas-promoted / exclusion / observable-work-follows-three-tasks (38); Distinctive unmerged-role including single-action-hue / identity-block-blue / text-inks-not-navy / 3px-not-pill / Termina-as-numeral / cool-grey-and-hairline-as-structure / black-footer-as-closing-band / restrained-elevation-not-a-heavy-card-stack (51); numbered Principles *UI implication* notes (55); capture-bound grouping of §7 Do’s / harvested geometry (63); Avoid named Don’ts (76); Semantic unmerged-role extra characterizations (93); Spacing recorded-scale / unitless-YAML-not-required-px-suffix / padding-stays-with-components (111); Shape local-geometry / 3px-not-3.008px / 3px-not-pill / sharp-functional-button-read / Small-Medium-Large-X-Large-Full role labels limiter-precedes-list (117); Elevation table Use / trailing-0px unmerge (131); Elevation near-flat / shadow-philosophy extra names (133); Motion philosophy-layer / source-stated / spec-template-ease-exit-match / nintendo-workday-barogo unattributed set (137); Motion-rule functional-and-steady / matching-fast-flat-logistics-operator / signature carousel-press / no-bounce-reliability-not-playfulness / reduced-motion-fully-functional (153); Motion omitted-unattributed-curves-not-promoted (155; B3 five-kind gate is the rest of that paragraph and is not this B2a); Font evidence-class including Termina-as-numeral-ornament-only / Pretendard-as-document-default (163); no-additional-family-promoted is not current; Family font-use boundary including document-default / geometric-Latin-reserved / fallback-not-Pretendard (170); Type-role ratio-versus-size-local (179); Type-rule one-family size-and-weight / bold-display-light-body / Termina-as-numeral / high-contrast-black-text / not-the-softened-navy-common-to-fintech-peers (181); Assets Google-favicon identity-only (197); Assets imagery-not-invented-decoration (199); Capture-record graph-not-adopted / philosophy-layer (206); Capture-record table characterizations extra names (220); Primary CTA field-note (244); Outline field-note (271); Feature Card field-note (296); Stat Card field-note (312); Badges field-note (327); Top Nav field-note / YAML-use-versus-five-body-labels / item-not-header-fill (352); Header / Navigation band parent fill (331–338); Top Nav additional captured-variant (364); Footer Link field-note / item-not-footer-fill (386); Footer band parent fill (366–373); Layout operational-clarity / flat-segmentation / sharp-functional-geometry / logistics-dense-calm-and-scannable (402; singular `a derived editorial implementation inference`); Layout recorded-span / surface-measurements-not-universal-tokens / touch-target-as-purpose-reading / collapsing-image-behavior source-stated / image-behavior-consistent-with-near-flat (428); Content Observed citation-character (435); Content empty/loading as state-contract (443); Content derived voice + tone table + forbidden register extra names (447). Reconstruction-boundary exemption not used. No “no unqualified sentence remains” claim (E2c)
- Footer `(omd:add-reference CREATE)` is this freshness ledger only
- HTML-comment radius frequency `20px×45` / `3.008px×6` is this Tier 1 ledger only
