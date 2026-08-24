# Airbridge provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/airbridge/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | airbridge |
| name | Airbridge |
| display_name_kr | 에어브릿지 |
| country | KR |
| category | marketing |
| homepage | https://www.airbridge.io |
| primary_color | `#155dfc` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=airbridge.io&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

Token note from source: `Dark-first martech site. primary = electric CTA blue (#155dfc); a lighter link blue (#0970ff) carries inline links on light sections. Page emits lab()/oklab() colors — converted to hex via canvas getImageData during live inspect.` Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / `lab()`/`oklab()` / derived editorial implementation inference / not-Airbridge-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=airbridge.io&sz=128` is this identity ledger only. Portable Typography & Assets states a Google-favicon identity-boundary sentence without the URL (E2a). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage `https://www.airbridge.io` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a). Inspect URLs `https://www.airbridge.io/ko` and `https://www.airbridge.io/ko/pricing` are dual Scope + this surfaces/Tier 1 ledger (E2a). `https://engineering.ab180.co` is dual Scope (quotation source, not a token sheet) + this Tier 1/narrative ledger (E2a). `https://help.airbridge.io/en` is dual Scope (footer Tier 1 URL, not in the live-inspect list, not a token sheet) + this Tier 1 ledger (E2a).

Catalog `primary_color` `#155dfc` is identity metadata + portable Scope token-note + Distinctive + Foundations Airbridge Blue / Semantic unmerged-role + capture-bound + Primary CTA Background + Compact Primary Background. The hex value additionally appears in Scope atmosphere, Principles item 2, Elevation, Capture-record Empty (no measurement data yet) / Loading (in-place refresh), Primary CTA field note (fills), Compact Primary field note (as Primary), Mint Highlight field note (as not Primary), Inline Link field note (as not Primary) (E2a). It is not Link Blue `#0970ff`. Avoid does not contain the hex.

`display_name_kr` `에어브릿지` is dual: this identity ledger (YAML key) + portable Scope running prose `Airbridge (에어브릿지)` (value destination). H1 is `Airbridge Design System` and is not the YAML key. `tokens.source: live-extract` and `components_harvested: true` are this ledger only (A1c). `added` 2026-06-26 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| live inspect (playwright getComputedStyle) | 2026-06-26 |
| Observed voice samples | 2026-06-26 |
| footer Verified | 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces) |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#155dfc` action blue vs Link Blue `#0970ff` vs Mint `#7eedb8`; Near-White Ink `#fafafa` vs Pure White `#ffffff` vs Ink Dark `#020202`; Canvas `#0a0a0c` vs Surface Dark `#18181b` vs Surface Light `#efefef`; YAML `shadow.ring` vs `box-shadow: none` on nav/headings/cards; YAML `rounded.full` 9999 / `9999px` vs button/card 8–16px; YAML line-height ratios `1.0` / `1.33` / `1.54` / `1.5` / `1.43` vs body-table Body `24px` at 16px; YAML tracking `-1.08` / `-0.72` / `-0.39` / `-0.27` vs body `-1.08px` / `-0.72px` / `-0.39px` / `-0.27px`; YAML Ghost Use "요금 확인하기" vs body Ghost also "자세히 보기"; YAML `family.sans` `Pretendard Variable` vs harvested-control font `Pretendard`; Compact Primary 36px vs Nav Item 36px; Primary CTA 48px vs Compact 36px; YAML `0 16px` / `0 28px` vs body `0px 16px` / `0px 28px`; YAML segmented Use `MMP / 딥링크` vs body "MMP 플랜" / "딥링크 플랜". Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home-ko | marketing-homepage | https://www.airbridge.io/ko | 2026-06-26 |
| pricing-ko | marketing-pricing | https://www.airbridge.io/ko/pricing | 2026-06-26 |

Catalog homepage identity `https://www.airbridge.io` is recorded in Identity; it is not a third inspect URL.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-ko-live | product-surface | https://www.airbridge.io/ko | 2026-06-26 |
| pricing-ko-live | product-surface | https://www.airbridge.io/ko/pricing | 2026-06-26 |
| engineering-blog | official-engineering-blog | https://engineering.ab180.co | (quoted scale figures; not a token inspect) |
| help | help-center | https://help.airbridge.io/en | (footer Tier 1 URL; not in the live-inspect list) |

### Tier 1

- https://www.airbridge.io/ko — Korean marketing homepage, live computed style (Hero H1 "광고 성과 측정, AI로 완성하세요" — Pretendard Variable 72px / weight 600 / -1.08px / gradient text-fill, computed color transparent; Section H2 "사각지대 없는 데이터로 성과를 측정하세요" / "감이 아닌 데이터를 근거로 의사결정하세요" — 48px / 700 / -0.72px / color `#fafafa`; Primary CTA "데모 신청하기" — bg `#155dfc` / text `#fafafa` / radius 8px / 48px height / soft blue focus ring; Ghost CTA "요금 확인하기" — `rgba(255,255,255,0.04)` bg / 1px `rgba(255,255,255,0.12)` border / radius 8px; Canvas bg `#0a0a0c`; dark feature card surface `#18181b`; light section `#efefef` with `#020202` headings; Inline link "자세히 보기" — color `#0970ff`; mint accent `#7eedb8` in data highlights; page title meta "크로스 플랫폼 성과 측정도 AI로 완성하세요 | Airbridge")
- https://www.airbridge.io/ko/pricing — Korean pricing surface (segmented "MMP 플랜" / "딥링크 플랜"; FAQ "MAU(월간 활성 유저)란 무엇인가요?")
- https://engineering.ab180.co — scale figures quoted in Brand Narrative ("10억 개 이상의 이벤트 데이터, 1억 대 이상의 디바이스, 100만 이상의 RPM")
- https://help.airbridge.io/en — listed in footer Tier 1; not in the HTML-comment live-inspect list

Home-ko / pricing-ko URLs are dual-destination with portable Experience Scope (E2a). Engineering and Help URLs are dual Scope boundary + this ledger (E2a).

### Tier 2 (no usable record)

- getdesign.md/airbridge — not listed (KR brand)
- styles.refero.design — not listed (KR brand)

### Narrative (not interface tokens)

- AB180 (에이비일팔공), founded 2015, Seoul; co-founders 남성필 (Sungpil Nam) and 정훈재 (Hunjae Jung); Airbridge = MMP. Dual portable Scope (under public-history / product-line B2a) + this ledger (E2a).
- Scale figures ("10억 개 이상의 이벤트 데이터, 1억 대 이상의 디바이스, 100만 이상의 RPM") quoted from AB180's engineering blog. Dual portable Scope + this ledger (E2a).
- Client list and 600+/30+ figures from public company sources (ab180.co); widely documented public facts, not directly quoted Airbridge statements beyond the engineering-blog scale figures. Dual portable Scope + this ledger (E2a).
- Product line: Airflux (AI monetization agent), Airbridge DeepLink. Dual portable Scope + this ledger (E2a).

Voice samples (§10) are verbatim from the live homepage and pricing page (hero H1, section H2, eyebrow, page title meta). Dual-destination for the Observed strings and the 2026-06-26 date: portable Content & Locales + this ledger (E2a). "데모 신청하기" / "요금 확인하기" / "자세히 보기" are also in Primary tasks; "데모 신청하기" is also Primary CTA Use; "요금 확인하기" is also Ghost Use; "자세히 보기" is also Ghost body use and Inline Link Use; "글로벌 스탠다드에 부합하는 MMP" is also Content derived value-claim row; "MAU(월간 활성 유저)란 무엇인가요?" is also FAQ Use and Content derived FAQ-tone row (E2a). Derived §10 tone table and forbidden register are not this observation class.

## Claim ledger

Token extraction is `live-extract` (2026-06-26). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body action blue `#155dfc`, link `#0970ff`, ink/white/ink-dark ladder, canvas `#0a0a0c`, surface-dark `#18181b`, surface-light `#efefef`, mint `#7eedb8`, `box-shadow: none`, lab()/oklab() hex conversion | home-ko-live computed style (footer HTML comment) |
| Ghost / primary CTA geometry, inline "자세히 보기", nav labels, segmented MMP/딥링크, FAQ MAU row | home-ko-live / pricing-ko-live |
| YAML `tokens.shadow.ring` `rgba(21,93,252,0.15) 0px 0px 0px 1px` | YAML + portable Semantic unmerged-role + Elevation Ring + Primary CTA Shadow + Primary CTA additional observed Focus. Scope atmosphere restates `rgba(21,93,252,0.15)` without the `0px 0px 0px 1px` suffix (E2a) |
| YAML `rounded.full` 9999 / body `9999px` | YAML + portable Shape + Distinctive |
| Compact Primary geometry (bg `#155dfc`, fg `#fafafa`, radius 8px, padding 8px 16px, height 36px, font 14px / 500) | body §4 only (not YAML `tokens.components`) |
| Default Input geometry (bg `rgba(255,255,255,0.04)`, border 1px solid `rgba(255,255,255,0.12)`, radius 8px, text `#fafafa`, placeholder `#98989f`) | body §4 only |
| Mint Highlight (`rgba(126,237,184,0.04)` / `#7eedb8` / 8px) | body §4 only |
| Nav height 36px; segmented height 29px | body §8 (YAML has other fields) |
| §9 dark-feature-card mixed anatomy (26px / 700 / `-0.39px` / `#fafafa` title + 16px / 400 / 1.5 / `#98989f` body) | body §9 + portable Dark Feature Card field-note |
| §9-only canvas-ink ("never pure black on the dark canvas") | body §9 + portable Avoid |
| §14 empty/loading/error/success/skeleton/disabled rows | source state contract; portable Capture record under adjacent complete B2a on table characterizations and philosophy-layer classification |
| §15 durations 120ms/200ms/320ms, easing names, reduced-motion, signature nav-wash / fade-in / segmented-slide | philosophy layer (sections 10–15); not in the live-inspect list; portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`120ms` / `200ms` / `320ms`), easing names, “No bounce or spring”, and `prefers-reduced-motion: reduce` remain in portable Motion under the philosophy-layer / source-stated limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps lists the omitted curve names and “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. Unique §9 dark-feature-card mixed anatomy (26px title `#fafafa` + 16px body `#98989f`) is portable Dark Feature Card field-note, unmerged from YAML `card-dark` fg `#fafafa` (A3/A4). Unique §9 canvas-ink constraint (“never pure black on the dark canvas”) is portable Avoid, unmerged from the light-mode `#020202` Don’t (A3/A4). Prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is this identity ledger only. Portable Typography & Assets identity-boundary sentence is URL-free (E2a). No Named-gaps first-party-logo-file negative was kept
- Homepage `https://www.airbridge.io` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a)
- Inspect `/ko` and `/ko/pricing` URLs are dual Scope + this surfaces/Tier 1 ledger (E2a)
- Engineering and Help URLs are dual Scope boundary + this Tier 1/narrative ledger (E2a)
- `primary_color` `#155dfc` destinations: identity + Scope token-note + Distinctive + Foundations Airbridge Blue / Semantic unmerged-role + capture-bound + Primary CTA Background + Compact Primary Background. Hex also in Scope atmosphere, Principles item 2, Elevation, Capture-record Empty/Loading-refresh, Primary CTA field note (fills), Compact Primary field note as Primary, Mint Highlight field note as not Primary, Inline Link field note as not Primary (E2a). Avoid does not contain the hex
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- `display_name_kr` `에어브릿지` is dual: this identity ledger (YAML key) + portable Scope running prose (value). Not provenance-only
- Observed 2026-06-26 voice strings and date are dual-destination: portable Content & Locales + this freshness/narrative ledger; live CTA strings are also in Primary tasks (E2a)
- YAML typography `use` fields restored on Type roles (A1)
- YAML unitless `lineHeight` 1.0 / 1.33 / 1.54 / 1.5 / 1.43 preserved as ratios (A1a)
- Verified primitive types preserved per component: button×3 (Primary CTA, Ghost, Inline Link) + tab×2 (Nav Item, Segmented Toggle) + card×2 (Dark Feature Card, Light Comparison Card) + listItem×1 (FAQ Accordion). Compact Primary / Default Input / Mint Highlight have no YAML type and none was invented (A1b)
- Generic Primary CTA Focus ring is not promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Primary CTA / Ghost / Compact Primary / Inline Link omit loading/error/success fields (C2). Default Input omits loading/success and keeps error applicable as a form field. Segmented Toggle / Nav Item / FAQ Accordion loading/error/success remain grouping/disclosure role-based. Dark Feature Card / Light Comparison Card / Mint Highlight omit kind/map (C4)
- Compact Primary, Default Input, and Mint Highlight are body §4 only (not YAML `tokens.components`)
- Source §13 personas are fictional archetypes informed by publicly observable segments (Korean app marketers, growth/performance teams, mobile analysts at game and commerce companies), not specific individuals. Portable Audience keeps the exclusion boundary only. Names, ages, cities, occupations, and biographies are not copied here (D2). Primary tasks come from live CTA strings, not §13
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Airbridge-authored or a separately published UI specification`): Scope two-URL evidence-domain assignment; Scope token-note register-split / `lab()`/`oklab()` conversion; Scope evidence-domain (engineering/help not token sheets); Scope visual-character / control-panel / light/dark-cadence / Korean-modern typographic / restraint / soft-square readings; Scope public-history / product-line narrative-not-interface-token; Scope refusal / embrace / precision-tool readings; Primary-tasks live-CTA mapping; Audience no-individual-personas-promoted / exclusion / observable-work-follows-three-tasks; Distinctive unmerged-role readings including lone-organic-hue / hierarchy-by-size-weight / gradient-hero / light/dark-cadence-as-trait / flat-depth / 16px-workhorse / action-blue-as-primary-and-fill / rare-full-9999px-reserved-for-avatars-dots; five numbered principles and UI implications; capture-bound grouping of §7 Do’s / live inspect; Avoid §7 Don’ts plus §9-only canvas-ink; Avoid canvas-ink-unmerged-from-light-mode-`#020202`; Semantic color unmerged-role readings including extra list characterizations (single-action / heavier-primary-on-light / mint-used-sparingly); Spacing unitless-versus-px; Spacing Ghost-CTA 28px wider-calmer-hit-area; Shape local-geometry / workhorse-radius / rare-9999px-reserved-for-avatars-dots; Elevation tone-not-elevation and shadow-philosophy readings including table Use assignments; Motion philosophy-layer / source-stated classification; Motion functional-restrained / signature nav-wash / fade-in / segmented-slide / steadiness readings; Font evidence-class application including fallback-not-product-face; Family font-use boundary; Typography one-font / weight-driven / tight-tracking / gradient-hero / hangul-tuned-body / dense-data-heavy-copy readings; Type roles ratio-versus-size-local reading including omitted-tracking-not-invented; Type roles YAML-Pretendard versus Pretendard-Variable unmerged; Assets Google-favicon identity-only reading; Assets imagery-not-invented-decoration / no-shadow-at-any-size / consistent-with-flat; Capture-record graph-not-adopted; Capture-record philosophy-layer classification; Capture-record table characterizations; Primary CTA field-note unmerged-role / generic-Focus; Primary CTA field-note fills unmerged; Ghost field-note unmerged-role; Compact Primary field-note unmerged 36px; Default Input field-note not-a-merge-into-Ghost; Dark Feature Card field-note mixed-anatomy; Light Comparison Card field-note unmerged-role; Mint Highlight field-note unmerged-role; Segmented Toggle captured-variant-not-click-transition; Segmented Toggle field-note unmerged disabled/inactive; Nav Item field-note unmerged-field including hover-wash-name-not-copied-as-hex; Nav Item captured-variant-not-click-transition; Inline Link field-note unmerged Type-button; FAQ Accordion field-note unmerged Near-White Ink / `listItem` primitive; Layout breathing-room / light/dark-cadence / flat-segmentation / centered-hero / sticky-nav / 2-3-column feature-grid readings; Layout breakpoint table as recorded span not complete specification of every unlisted control, collapsing-strategy / image-behavior as recorded application, surface measurements not universal layout tokens, and touch-target record as a purpose reading rather than a complete target-size specification; Content Observed citation-character of parentheticals; Content empty/loading strings as state-contract not extra Observed samples; Content derived voice + tone table + forbidden register (B2/B2a)
- Footer `(omd:add-reference CREATE)` is this freshness ledger only
