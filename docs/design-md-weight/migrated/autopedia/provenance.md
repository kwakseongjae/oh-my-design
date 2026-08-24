# Autopedia provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/autopedia/DESIGN.md` until catalog adoption. The T2 worker left this file absent after writing portable `DESIGN.md`; F3 created it from the source YAML/footer and grep of the current portable body (E1 / E2).

## Identity

| Field | Value |
|---|---|
| id | autopedia |
| name | Dr.Cha (Autopedia) |
| display_name_kr | 닥터차(오토피디아) |
| country | KR |
| category | automotive |
| homepage | https://company.autopedia.co.kr/ |
| primary_color | `#7A00FF` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=company.autopedia.co.kr&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |
| added | 2026-07-02 |

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

Token note from source: `primary = live brand violet #7A00FF (rgb 122,0,255), used as the active-nav accent and the full-bleed brand-statement band; near-shadowless high-contrast black/white system on Pretendard; corners are mostly sharp (0px), with 8px only on the CI asset-download buttons.` Dual destination (E2a): this identity note and portable Experience Scope 13 (same note plus the adjacent register-split complete B2a).

Catalog logo type `favicon` / Google s2 URL `https://www.google.com/s2/favicons?domain=company.autopedia.co.kr&sz=128` is this identity ledger only. Portable Typography & Assets 196 holds a URL-free Google-favicon capture-method / not-a-portable-mark sentence, not the URL string (E2a). Named gaps has no first-party-mark-file sentence.

Catalog homepage exact `https://company.autopedia.co.kr/` (trailing slash, no path suffix) is dual-destination: portable Scope 9 + named-domain 11 + Primary tasks 29 + this identity / Surfaces / Sources / Tier 1 (E2a). The CI-guide and Dr.Cha URLs contain that homepage string as a prefix; those rows are not homepage destinations.

Catalog `primary_color` `#7A00FF` is identity metadata + portable Scope token-note 13 / atmosphere 15 + Distinctive 40 / extra 49 + Principles item 3 57 + capture-bound 64 + Semantic unmerged-role 91 / Foundations Violet 93 + Elevation color-block 123 + Motion 141 + Top Nav Active/field-note/additional 236/239/251 + Brand Band Background/field-note 352/357 (E2a). Avoid names violet in running prose and does not carry the `#7A00FF` hex.

`display_name_kr` `닥터차(오토피디아)` is dual: this identity ledger (YAML key) + portable Scope 9 running prose. H1 is `Dr.Cha (Autopedia) Design System` and is not the YAML key. YAML `tokens.source: live-extract` as a field is this ledger only (A1c). The portable wording `Token extraction is \`live-extract\`` is Scope 11; `live-extract UI family` is Family 171 (E2a: field vs wording). `components_harvested: true` is this ledger only. `added` 2026-07-02 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| live inspect (playwright getComputedStyle) | 2026-07-02 |
| Observed voice samples | 2026-07-02 |
| footer Verified | 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces) |

Conflicts unresolved: none (source footer). Source footer has no `(omd:migrate)`; none invented. Packet date `2026-07-02` in portable Scope 11 and Content Observed 408 is also this freshness ledger (E2a).

Preserved value pairs inside the reconstruction (both sides stay in portable Foundations / Typography / Components; neither is chosen):

- `#7A00FF` active-nav text vs brand-band fill vs catalog `primary_color`
- `#ffffff` canvas vs on-primary / outline-light text / solid-white fill
- `#000000` ink vs dark photographic section fill vs outline-dark border vs CI-download text
- Hairline `#E5E7EB` vs 1px `#000000` outline-dark vs 3px `#ffffff` outline-light
- YAML `rounded.sharp` `0` vs CI-download `8px` vs `rounded.full` 9999
- YAML Feature Card `fg` `#000000` vs source §9 card body 16px / 400 `#4B5563`
- YAML unitless lineHeight `1.44` / `1.54` / `1.55` / `1.50` / `1.43` vs body-table 49px / 40px / 34px / 24px / 20px
- CI-download height `63px` vs hero outline `47px` vs solid-white `49px` vs nav link `24px`

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | company-homepage | https://company.autopedia.co.kr/ | 2026-07-02 |
| ci-guide | company-ci | https://company.autopedia.co.kr/about/ci-guide | 2026-07-02 |
| doctor-cha | product-page | https://company.autopedia.co.kr/business/doctor-cha | 2026-07-02 |

The three URLs are dual-destination with portable Experience Scope 11 (E2a). Exact homepage `https://company.autopedia.co.kr/` is also Scope 9 and Primary tasks 29. CI-guide is also Primary tasks 30. Dr.Cha is also Primary tasks 31. Treating Medium as a named company-blog source rather than an extra token surface is portable Scope 11 under adjacent complete B2a; the Medium URL itself is this Sources/Tier 1 ledger only (E2a: named-source treatment dual, URL provenance-only).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://company.autopedia.co.kr/ | 2026-07-02 |
| ci-guide-live | product-surface | https://company.autopedia.co.kr/about/ci-guide | 2026-07-02 |
| doctor-cha-live | product-surface | https://company.autopedia.co.kr/business/doctor-cha | 2026-07-02 |
| medium-blog | company-blog | https://medium.com/autopedia | 2026-07-02 |

### Tier 1

- https://company.autopedia.co.kr/ (homepage: nav, display headlines, full-bleed violet `#7A00FF` brand band, business feature cards, partnership CTA)
- https://company.autopedia.co.kr/about/ci-guide (CI page: asset-download buttons, company registry — 대표 김병근, 사업자등록번호 236-86-01261, contact@autopediacar.com)
- https://company.autopedia.co.kr/business/doctor-cha (Dr.Cha product page: "모빌리티 자산" framing, in-section homepage-link CTA)
- https://medium.com/autopedia

The three company-surface URLs are dual-destination with portable Experience Scope 11 (E2a). `contact@autopediacar.com` is this Tier 1 / HTML-comment ledger only; it is not a portable Scope string (E2a). Registry CEO 김병근 and registration 236-86-01261 are dual portable Scope 17 + this ledger (E2a).

### Tier 2 (no usable record)

- getdesign.md/autopedia (SPA fallback — no KR coverage)
- styles.refero.design/?q=autopedia (not listed)

### Narrative (not interface tokens)

Company registry facts (CEO 김병근, registration 236-86-01261) are read from the CI page. The four business lines and their on-site roles (닥터차 owner-facing aftermarket platform; Quantum Mobility specialist repair for BMW/Audi/Benz/Tesla; Parts Distribution supply network to repair shops; AI platform for vehicle-problem diagnosis, prediction, consultation) and the "모빌리티 자산" / "모빌리티의 진화" framing are quoted from the live homepage and Dr.Cha page. Dual portable Scope 17 + this ledger (E2a). The aftermarket-ecosystem reading of that roster has adjacent complete B2a on Scope 17. Broader company-history details beyond these on-site statements are not independently verified in the source turn. Founding-observation / gap-closing and refuses-cluttered-chrome readings sit under portable Scope 19/21 adjacent complete B2a; they are not first-party as treatments.

Voice samples (§10) that are verbatim from the live surfaces are dual-destination: portable Content Observed 410–412 + this ledger (E2a). Packet-date heading 408 is the Observed date, not a fourth live string. “오토피디아는 기술로써 모빌리티의 진화를 이끌어 냅니다.” is also Distinctive 47 + Brand Band Use 355 + Scope 17 + Content table 418 (E2a). “닥터차는 고객의 '모빌리티 자산'을 관리하는 최적의 서비스입니다.” is also Primary tasks 31 + Scope 17 + Principles 56 + Content table 420 (E2a). “오토피디아는 첨단 AI 기술로 운전자들에게 새로운 차원의 경험을 제공합니다.” is Content Observed 412 + this ledger. Derived voice table / forbidden-register / CTA inventory are not this Observed class.

## Claim ledger

The source has no `verification_v2.claims` object and no per-claim surface mapping. None is invented here. Token extraction remains `live-extract` (2026-07-02). `components_harvested: true`. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body violet `#7A00FF`, inks `#000000`, canvas `#ffffff`, muted `#4B5563`, hairline `#E5E7EB`, scrim `rgba(0, 0, 0, 0.6)`, Pretendard | home-live / ci-guide-live / doctor-cha-live computed style |
| Active nav `#7A00FF` text; full-bleed brand band; feature cards; partnership CTA | home-live |
| CI asset-download `8px` / `18px 0px` / `63px` / 1px `#000000` | ci-guide-live |
| Dr.Cha “모빌리티 자산” framing; solid-white `홈페이지 바로가기` | doctor-cha-live |
| YAML `rounded.full` 9999 / body `9999px` | YAML + portable Shape + Distinctive |
| YAML Feature Card `fg` `#000000` vs §9 body `#4B5563` | YAML + §9 prompt; both kept in Feature Card field note |
| §14 empty/loading/error/success/skeleton/disabled rows | philosophy layer; portable Capture record under adjacent complete B2a |
| §15 durations 120ms/220ms/360ms, easing names, reduced-motion | philosophy layer; portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` — unattributed
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` — unattributed

Duration tokens (`120ms` / `220ms` / `360ms`), easing names, “No bounce or spring”, signature band fade-up / nav active, and `prefers-reduced-motion: reduce` remain in portable Motion under the philosophy-layer / source-stated limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables (Foundations 155). Named gaps 469 lists the omitted curve names and “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion 153 only (E2c).

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. The §9-only Feature Card body copy 16px / 400 `#4B5563` is kept in the Feature Card field note (A3, 342). The §9-only Hero outline `Background: transparent` is kept on the Hero CTA (A3, 291). Prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c). YAML field is this ledger only. Portable Scope 11 / Family 171 carry the live-extract wording, not the YAML key.
- Catalog Google favicon URL is this identity ledger only. Portable Assets 196 is URL-free identity-boundary (E2a). Named gaps has no first-party-mark-file sentence.
- Homepage exact `https://company.autopedia.co.kr/` → portable Scope 9/11 + Primary tasks 29 + this identity/surfaces/sources/Tier 1. CI-guide and Dr.Cha path URLs are not homepage destinations.
- Medium URL `https://medium.com/autopedia` is this Sources/Tier 1 ledger only. Portable Scope 11 names Medium as a company-blog source without the URL string (E2a).
- `contact@autopediacar.com` is this Tier 1 HTML-comment ledger only.
- Token note dual this identity + portable Scope 13 (E2a).
- Observed 2026-07-02 strings dual Content 410–412 + this ledger; extra Distinctive/Brand Band/Scope/Principles hits listed under Narrative (E2a).
- Source §13 fictional archetypes (정민호 / 이수경 / 박재현) are not re-hosted here (D2). Portable Audience 36 keeps the exclusion boundary only.
- Generic Focus is not present; `focus-visible` rows carry no colour (B1, portable 223).
- CI Download, Hero CTA, and In-Section Link loading/error/success omitted at the field boundary (C2, CI 277 / Hero 303 / In-Section 328 + Named gaps 463). Source §14 inquiry-submitted remains a capture-record row; it is not Hero CTA applicability.
- Feature Card and Brand Band omit kind and map (C4, 334 / 350 + Named gaps 464). Kind is not declared `non-interactive`.
- Uncaptured hover/disabled/loading visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. Top Nav and Footer Link loading/error/success are not-applicable by tab/list-item role (247–249 / 379–381). State coverage is not claimed complete (C3, 223).
- YAML unitless lineHeight `1.44` / `1.54` / `1.55` / `1.50` / `1.43` and body-table px remain unmerged (A1a, Type roles 177/179/182–188).
- YAML primitive types preserved per component: tab (231), button ×3 (257/283/309), card ×2 (333/349), listItem (365). `Kind: interactive` does not replace type (A1b).
- RGB 122, 0, 255 is portable Scope 13 + Distinctive 40 + Foundations 93 + this ledger.
- No `[FILL IN]` in source or portable body.

## Derived editorial inventory (portable body, adjacent complete B2a)

These portable sentences are derived editorial implementation inference from the verified surfaces; they are not Autopedia-authored or a separately published UI specification:

- Experience Scope named-evidence-domain of the three company URLs, and Medium as a named company-blog source rather than an extra token surface (11)
- Experience Scope token-note register split (13)
- Experience Scope atmosphere extra names including separation-via-flat-color-blocking / thin-hairlines-never-elevation (15)
- Experience Scope founding-observation / gap-closing including everyday-car-use versus unchanged-driving-and-management (19)
- Experience Scope refuses-cluttered-auto-repair-chrome / refuses-consumer-cute-softness / embraces-stark-black-and-white / single-violet / bold-Pretendard-mission / flat-architectural-precision (21)
- Primary tasks independently-verified / not-from-§13 (27)
- Audience no-individual-personas-promoted / fictional-archetypes-not-Audience / observable-work-follows-three-tasks (36)
- Distinctive extra unmerged / reserved-incidental-circular / nav-heavier-than-display / tight-negative-tracking-as-recorded-metric / engineering-forward-not-doctrine (49)
- numbered Principles five items including each *UI implication* (53)
- capture-bound grouping of source §7 Do’s and harvested geometry (61)
- Avoid list-head named Don’ts including Autopedia-tracks-tight (74)
- Avoid last-bullet Autopedia-tracks-tight adjacent complete B2a (83)
- Semantic unmerged-role extra characterizations including scrim-not-hex-not-Hairline / hairline-not-1px-black-not-3px-white (91)
- Spacing YAML-scale-and-~4px-doubling as recorded spacing rather than a universal token / measurements-stay-with-components (102)
- Shape local-geometry including 0px-as-the-default / 8px-only-on-CI-download / 9999-not-a-harvested-control-radius (108; limiter precedes the list)
- Elevation table Use assignments (118; limiter precedes the table)
- Elevation strictly-shadowless / industrial-modern / contrast-not-elevation (127)
- Elevation not-a-general-ladder (129)
- Motion philosophy-layer duration-table Use (133; limiter precedes the table)
- Motion restrained-and-purposeful / quiet-fade-up / no-bounce-or-spring / consistent-with-flat-high-contrast-engineering-forward (141)
- Motion easing-table “Arriving” / “Dismissals” / “Two-way transitions” (143)
- Reduce-motion instant-collapse / stays-fully-functional (151)
- Font evidence-class application including only-Pretendard-token on live computed Pretendard and Pretendard-Fallback-not-a-second-identity (161). no-universal-exclusive-type-token / no-FontFace-count-invented / no-license-invented / outside-three-URLs are not current (D1; deleted in wave10 sol resubmit)
- Family font-use boundary including no-decorative-display-face / Pretendard-Fallback-not-a-second-identity / no-system-face-replacement (173)
- Type-role ratio-versus-size-local / hangul-first-sizing / stay-open-display-line-heights / not-converted (179)
- Type-role weight-driven-hierarchy / nav-heavier-than-display (192)
- Assets Google-favicon identity-not-captured (196)
- Assets imagery-replacement (198)
- Capture-record graph-not-adopted / philosophy-layer-not-computed-paints (205)
- Capture-record table characterizations including previous-content-stays-visible / calm-technical-tone (209)
- Top Nav unmerged-field including not-a-second-primary-token (239)
- Top Nav active captured-variant-not-click-transition (251)
- CI Download unmerged-field including 3px-white-hero-not-this-border / harvested-height-not-touch-target (268)
- Hero CTA unmerged-field including height-not-63-not-49 / weight-400-not-nav-700 / transparent-background-not-a-canvas-token (294)
- In-Section Link unmerged-field including height-not-47-not-63 / not merging this solid CTA with the outline-light 문의하기 control (319)
- Feature Card unmerged-field including YAML-fg-versus-§9-body-muted / tappable-layout-sentence-not-kind-evidence (342)
- Brand Band unmerged-field including not-a-second-primary-token (357)
- Footer Link unmerged-field including caption-size-not-nav-16px / `#000000` not-muted (371)
- Layout measurement-boundary including tappable-feature-cards / centered-single-column / full-width-bands-stack (386)
- Layout collapsing-strategy table and collapsing-bullet changes as source-stated (390)
- Layout image-behavior including scrim-at-every-breakpoint / sharp-cornered-shadowless-across-sizes (403)
- Content remaining voice / copy-pattern table / voice characterization extra names (414)
- Content CTA / corporate inventory not extra Observed (424)
- Content forbidden-register as reconstruction reading (426)

Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c).
