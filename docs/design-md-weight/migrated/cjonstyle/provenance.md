# CJ ONSTYLE provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/cjonstyle/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | cjonstyle |
| name | CJ ONSTYLE |
| display_name_kr | CJ온스타일 |
| country | KR |
| category | ecommerce |
| homepage | https://www.cjonstyle.com |
| primary_color | `#640faf` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=cjonstyle.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

Token note from source: `primary = live buy-CTA purple (#640faf, rgb 100,15,175) — CJ ONSTYLE signature violet, 52 bg + 143 fg occurrences; sale/price accent magenta (#ec0040); near-flat (box-shadow none). Body font legacy Nanum Barun Gothic; newer promo/PDP modules use Pretendard.` Dual destination (E2a): this ledger and portable Experience Scope 13 (same note plus the adjacent register-split / `#640faf`-as-CTA-fill-not-sale / derived editorial implementation inference / not-CJ ONSTYLE-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google favicon slug `https://www.google.com/s2/favicons?domain=cjonstyle.com&sz=128` is this identity ledger only. Portable Typography & Assets 220 records the lookup as identity-boundary without promoting that URL as a mark file (E2a). Named gaps 629–638 has no first-party-mark sentence and does not restate the URL.

Homepage `https://www.cjonstyle.com` is dual-destination: Experience Scope 9/11 + this identity 14/26 / surfaces 48 / sources 56 / Tier 1 63 / country-sources 71 / Proof 85 (E2a). Redirect host `display.cjonstyle.com/p/homeTab/main` is dual Scope 11 + this identity 26 / surfaces 48 / sources 56 / Proof 85 — not a separate Tier 1 host string (E2a). PDP `https://display.cjonstyle.com/p/item/2086524438` is dual Scope 11 + this identity 26 / surfaces 49 / sources 57 / Tier 1 64 / country-sources 72 / Proof 86 (E2a). `https://medium.com/cj-onstyle` is dual Scope 11 (country-identity / engineering-blog, not a token capture) + this identity 26 / surfaces 50 / sources 58 / Tier 1 65 / country-sources 73 (E2a).

Catalog `primary_color` `#640faf` destinations: this identity ledger + portable Scope token-note 13 / atmosphere 15 + Distinctive unmerged B2a 44 / bullet 46 + Principles 59 / capture-bound 64 / Do 66 + Semantic unmerged-role 93 / CJ ONSTYLE Violet 95 + Capture-record table characterizations 231 / Loading (buy action) 238 / named-active 359/361/363/376/390 + Buy Primary Background 258 / Border 260 / field note 266 + Inquiry 283 / 284 + Wishlist field note 315 + local recipes 490/494/515/519 + Named gaps 635 (E2a). Avoid 85 names `#ec0040`, not this hex. Content Observed 572–579 is the live CTA/nav strings without this hex. Sale `#ec0040` destinations: portable Scope token-note 13 / atmosphere 15 + Distinctive unmerged 44 / bullet 47 + Principles 58 / capture-bound 64 / Do 67 + Avoid limiter 77 / Don’t 85 + Semantic unmerged-role 93 / Sale Magenta 97 + Buy Primary field note 266 + Inquiry field note 290 + Promo banner local 526/530 + this identity 22/28 / freshness 42 / Proof frequency 116 / rationale 121 / claim ledger 139 (E2a).

`tokens.source: live-extract` and `components_harvested: true` are this ledger only as YAML keys (A1c). Portable Font evidence restates live computed surface-use in the table row at 190 (E2a). Line 186 is the adjacent complete B2a on evidence-class application, not the live-extract restatement. YAML `verified` 2026-07-02, `added` 2026-07-02, and `extracted` 2026-07-02 are this freshness ledger. Footer **Verified:** 2026-07-02 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| footer Verified | 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces) |
| HTML-comment live inspect | 2026-07-02 |

Conflicts unresolved: none. Preserved value pairs inside the reconstruction: `#640faf` primary CTA fill vs `#ec0040` sale vs `#d53225` promo red vs `#f26d00` promo orange; `#ffffff` canvas vs on-primary `#ffffff`; `#000000` ink vs `#111111` nav vs `#2a2a2a` body; `#666666` muted vs `#767676` utility vs `#929292` faint; `#f5f5f5` vs `#f0f0f0`; `#e5e5e5` hairline vs `#b2b2b2` border-strong; `#26292a` chrome vs ink; 0px nav/inputs vs 2px badges/cards vs 4px buttons vs 11px chips vs 18px carousel prev/next vs YAML `rounded.full` 9999 vs carousel pause 50%; 60px buy vs 40px inquiry vs 46px search vs 34px utility bar vs 36px carousel; Nanum Barun Gothic vs Pretendard; YAML nav lineHeight 1.4 vs body 1.5. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen. §9 parent-child tuples stay on local recipes, not as extra global tokens.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | storefront | https://www.cjonstyle.com (redirect to display.cjonstyle.com/p/homeTab/main) | 2026-07-02 (source footer + HTML comment + canonical `web/references/cjonstyle/.verification.md`) |
| pdp | product-detail | https://display.cjonstyle.com/p/item/2086524438 | 2026-07-02 |
| medium | engineering-blog | https://medium.com/cj-onstyle | named in source footer as Tier 1; country source; not a token capture |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.cjonstyle.com → display.cjonstyle.com/p/homeTab/main | 2026-07-02 |
| pdp-live | product-surface | https://display.cjonstyle.com/p/item/2086524438 | 2026-07-02 |
| medium | engineering-blog | https://medium.com/cj-onstyle | named footer; country source |
| verification | proof-sidecar | `web/references/cjonstyle/.verification.md` | 2026-07-02 |

### Tier 1

- https://www.cjonstyle.com — requested URL for the CJ ONSTYLE homepage. Dual portable Scope 9/11 + this ledger (E2a).
- https://display.cjonstyle.com/p/item/2086524438 — product-detail surface. Dual portable Scope 11 + this ledger (E2a).
- https://medium.com/cj-onstyle — named source-footer Tier 1 host; country-identity / engineering-blog, not a token capture. Dual portable Scope 11 + this ledger (E2a).

### Country sources (not extra token captures)

Brand-owned / regional Korean sources from the source footer and `web/references/cjonstyle/.verification.md`:

1. https://www.cjonstyle.com — official storefront; redirects to `display.cjonstyle.com`.
2. https://display.cjonstyle.com/p/item/2086524438 — product-detail surface (buy CTA, wishlist, price, tabs).
3. https://medium.com/cj-onstyle — CJ ONSTYLE official tech blog "CJ 온스타일 기술 블로그" (GET verified 200 in the sidecar). Not a token capture in this reconstruction.

Source sidecar states that getdesign.md, refero.design, and the Google favicon proxy are explicitly not counted as country sources. That exclusion is this ledger only. The portable body does not re-host it.

### Proof (source HTML comment + sidecar `web/references/cjonstyle/.verification.md`)

Canonical proof sidecar exists at `web/references/cjonstyle/.verification.md` (A1c; heading `## Proof — Tier 1 live inspect`). Derived mirror `design-md/cjonstyle/.verification.md` has the same SHA-256 `0b61b722a959905f70f7f4abc2b5b33f2f96f73f303c48bb2b53599ce845145f`. Canonical is `web/references`. Source footer points to the live inspect. The same live-inspect method and overlapping raw samples also sit in the source DESIGN.md HTML comment (philosophy-layer block for sections 10–15; token-level claims §1–9 sourced from this inspect). This ledger records both. They are not a second portable token table.

- **Heading (sidecar):** `## Proof — Tier 1 live inspect`
- **Inspected:** 2026-07-02
- **Method:** playwright getComputedStyle (live DOM) — global playwright (chromium, headless), Chrome UA, `waitUntil: domcontentloaded` + settle, cookie/modal dismissal, lazy-load scroll, then `getComputedStyle`
- **Sources:**
  - https://www.cjonstyle.com — requested URL; redirect resolved to `display.cjonstyle.com/p/homeTab/main` (page title "홈 | CJ온스타일")
  - https://display.cjonstyle.com/p/item/2086524438 — product-detail page (page title includes "| CJ온스타일")

Raw samples in the source HTML comment / sidecar that restated portable hex/geometry already in the legacy DESIGN.md token bag (this ledger; portable Semantic/Components restate the matching hex/geometry, not a sidecar-only dump):

- body: Nanum Barun Gothic / 나눔바른고딕; color `#000000`; font-size 12px; line-height 18px
- H1 wordmark "CJ ONSTYLE": Nanum Barun Gothic; 24px / 700 / `#000000`; Proof-only height 57 px (not a portable type-role height)
- GNB nav "카테고리 / 홈 / 혜택 / TV쇼핑": `#111111`; 15px / 400; Proof-only height ~55 px (not a portable type-role height)
- Utility links "로그인 / 마이존 / 장바구니": `#767676`; 12px; Proof-only height 51 px (not a portable type-role height)
- Skip links: background `#26292a`; color `#ffffff`; padding `0px 20px 0px 26px`; height 34px
- Header search: Pretendard; `#111111`; 18px; height 46px
- Promo/benefit overlay badge: `rgba(0,0,0,0.2)` scrim; white 12px/700 Pretendard; 2px radius; padding `0px 8px`; `rgba(255,255,255,0.3)` hairline
- Promo banner headline "빕스바우처 ~56%": Pretendard 26px/700 white
- Carousel prev/next: `#ffffff`; Proof-local radii `18px 0 0 18px` / `0 18px 18px 0`; height 36px. Those directional corners stay on this Proof ledger and on portable Carousel local fields; they are not a scalar 18px global token.
- Carousel pause: `#ffffff`; Proof-only border `1px solid rgb(209, 209, 209)`; radius 50%; height 36px. Pause-only border is not Border Strong `#b2b2b2`.
- PDP "바로구매": `#640faf`; white text; `1px solid #640faf`; 4px; 60px; Proof-only width 400 px; 20px / 400. Width 400 px stays on this Proof ledger; not a portable global width token.
- PDP "찜": `#ffffff`; `#111111`; `1px solid #b2b2b2`; 4px; 60px; Proof-only width 64 px. Width 64 px stays on this Proof ledger.
- PDP "상품문의": `#640faf`; white text; 4px; 40px; 14px
- PDP price "69,900원": `#000000`; 14px / 400 / Nanum Barun Gothic; text-decoration none. Proof-only; not merged with portable type roles.
- PDP section tab "상세설명": `#767676`; `border-bottom: 1px solid #e5e5e5`
- box-shadow: `none` across nav, GNB, buy CTA, and product cards
- document.title (home): "홈 | CJ온스타일"

Color frequency scan rows that correspond to portable role hexes (sidecar; extra sidecar-only measurements that are not in the legacy DESIGN.md token bag stay on the sidecar and are not copied into this ledger or the portable body):

- `#000000` — 2424 (fg)
- `#111111` — 701 (fg)
- `#666666` — 641 (fg)
- `#ffffff` — 233 (fg) / 50 (bg)
- `#640faf` — 143 (fg) / 52 (bg)
- `#2a2a2a` — 142 (fg)
- `#ec0040` — 118 (fg)
- `#929292` — 55 (fg)
- `#f5f5f5` — 43 (bg)
- `#767676` — 34 (fg)

**Primary selection rationale (sidecar):** `#640faf` is the live buy-CTA fill (52 bg + 143 fg) and is set as `primary_color`. `#ec0040` is the sale/price accent (118 fg).

Border-radius frequency (sidecar; Proof-only counts, not portable global radius tokens): `2px` ×225, `11px` ×52, 100 percent ×15, 13 px ×6, `8px` ×6, `50%` ×3, `18px` ×3, 14 px ×2.

Tier 2 (sidecar exact URLs/status; this ledger; not portable negatives): `https://getdesign.md/cjonstyle` and `https://getdesign.md/cj-onstyle` HTTP 200 app-shell only (~14.7 KB, empty `<title>`, client-rendered browse grid) — no CJ ONSTYLE-specific token page. `styles.refero.design/?q=cjonstyle` and `?q=onstyle` return the default featured browse grid, no CJ ONSTYLE match.

HTML-comment / sidecar full `rgb(...)` sample dump beyond the samples copied above stays on that Proof sidecar. Copied Proof-only raw values above are this ledger, not portable global tokens. Portable Foundations Semantic restates role hexes; Font evidence restates the live families and wordmark/promo/body metrics (E2a).

### Narrative (not interface tokens)

Source §11 CJ Group commerce arm, CJ오쇼핑 / CJ홈쇼핑, 2021 relaunch, unified TV/mobile/web style-and-living destination are restated in portable Scope 17. ON (always-on/on-air/online) + STYLE name semantics and watched-channel-to-lived-shopping-surface are Scope 19. Retail-TV host urgency and offer/badge/violet-CTA relationship are Scope 21. Curated style-and-home versus bargain-bin, and clean black-on-white chrome versus noisy promotional layer, are Scope 23. Refusal/embrace is Scope 25. Each derived relationship has adjacent complete B2a. They are not interface tokens. Evidence class is public-history narrative.

## Claim ledger

Token extraction is `live-extract` (2026-07-02). `components_harvested: true`. The source does not record `data-omd-capture` selectors. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body `#640faf`, `#ec0040`, `#d53225`, `#f26d00`, `#000000`, `#111111`, `#2a2a2a`, `#666666`, `#767676`, `#929292`, `#26292a`, `#ffffff`, `#f5f5f5`, `#f0f0f0`, `#e5e5e5`, `#b2b2b2` | live-extract tokens + body §2; homepage and PDP named as inspection hosts; HTML comment + sidecar raw samples. `#640faf` is primary CTA fill; `#ec0040` is sale |
| YAML typography Nanum Barun Gothic / Pretendard roles wordmark 24/700 through util 12/400; body-table Notes; unitless lineHeight 1.4 (nav) and 1.5 (body) | YAML + body §3; portable Type roles 208–216. YAML `use` and body Notes are separate fields on each row |
| YAML spacing xs 2 / sm 4 / base 8 / md 12 / lg 20 / xl 26 / xxl 48 (unitless); body also 2px, 4px, 8px, 12px, 20px, 26px, 48px | YAML; portable Spacing 115 (no px suffix added to YAML numbers) |
| YAML rounded xs 2 / sm 4 / md 11 / lg 18 / full 9999 | YAML; portable Shape; full as YAML step 9999, not converted to a harvested pill; 50% pause unmerged |
| YAML shadow.none `none`; body also scrim `rgba(0,0,0,0.2)` | YAML + body §6; portable Elevation |
| Sale/benefit overlay hairline `rgba(255,255,255,0.3)` | canonical body §4 + sidecar Proof raw sample `:21`; portable Component Sale / Benefit Pill Observed 430; this Proof raw-sample 96 and this claim-ledger row (E2a). Not canonical §6. Not portable Elevation. |
| YAML components buy-primary / inquiry-button / wishlist-button type `button`; gnb-tab / detail-tab type `tab`; product-card type `card`; search-input type `input`; sale-badge type `badge` | YAML + portable Components (A1b). Utility / Skip-link Bar and Carousel Control have no YAML `tokens.components` row; Type is not invented |
| YAML component use strings | YAML + portable Use fields 264/288/313/338/360/387/414/429 and Primary tasks 33–35 |
| §9 parent-child tuples | prompt wrappers deleted; unique tuples restored as local recipes Product-detail buy bar 488–497 / Product card with sale overlay 499–511 / Global header assembly 513–522 / Promo banner headline 524–533. Not promoted as global tokens |
| §14 Empty / Loading / Error / Success / Skeleton / Sold out / Disabled | source state contract (philosophy-layer); portable Capture record 235–244 under adjacent complete B2a on table characterizations 231 (limiter precedes the table) |
| §15 durations 120ms / 200ms / 400ms, easing names, reduced-motion, signature carousel / tap-feedback / reduce-motion | source-stated; portable Motion under adjacent complete B2a 152 and 170. Cubic-bezier values omitted (omission ledger below) |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`120ms` / `200ms` / `400ms`), easing names, signature motions, and `prefers-reduced-motion: reduce` remain in portable Motion under the source-stated limiter 152 plus the adjacent signature-motion limiter 170. The B3 five-kind per-component computed gate is Foundations Motion 178 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 638 names animation/transition/duration and refers to all five kinds; it is not the B3 full promotion-gate sentence and does not enumerate the five kinds.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts wrappers, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Unique parent-child tuples from those prompts are restored as receiving local recipes (A3/A4): Product-detail buy bar 488–497, Product card with sale overlay 499–511, Global header assembly 513–522, Promo banner headline 524–533. Verified hexes, radii, heights, and type metrics already in Foundations / Type / Components stay there; the tuples are not scattered as extra global tokens. Remaining prompt-only constructions stay omitted here as deleted tool prompts.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted §13 fictional archetypes

Source §13 names fictional archetypes. They are not Audience, not primary tasks, and not re-hosted here (D2). Generic deletion only: fictional archetype material deleted; not re-hosted. No names, biographies, ages, or cities from that section are listed in this file.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not CJ ONSTYLE-authored or a separately published UI specification`) on the current portable body: Scope product-origin (9); Scope URL evidence-domain including values-stay-attached / homepage-not-proxy-for-every-PDP-module / PDP-buy-CTA-not-a-homepage-chrome-fill / medium-as-country-identity / redirect-host-same-homepage (11); Scope token-note register-split including `#640faf`-as-CTA-fill-not-sale (13); Scope atmosphere extra names (15); Scope public-history / narrative-not-interface-token including 2021-relaunch (17); Scope ON-plus-STYLE name semantics (19); Scope retail-TV urgency (21); Scope curated-versus-bargain-bin / quiet-chrome-versus-noisy-promo (23); Scope refusal / embrace extra names (25); Primary tasks YAML-use-strings-not-from-§13 / independently-verified-homepage-and-PDP-URLs / harvested-strings-controls-not-independently-verified-destination-routes (31); Audience no-individual-personas-promoted / fictional-archetypes-not-Audience / observable-work-follows-three-tasks (40); Distinctive unmerged-role extras, limiter immediately before the bullets (44); numbered Principles five stems (56); capture-bound grouping of §7 Do’s named rules (64); Avoid named Don’ts (77); Avoid last-bullet (85); Semantic unmerged-role extra characterizations (93); Spacing unitless-YAML-not-required-px-suffix / body-px / heights-as-component-fields (115); Spacing ~8px-base / dense-at-the-small-end / per-module (117); Shape local-geometry / role labels limiter-precedes-list (123); Shape local-harvested-not-universal / YAML-full-9999-not-merged-with-50% (133); Elevation table Use precede / extra philosophy named on the limiter rather than as after-table sentences (137); Elevation live-inspection-`box-shadow: none` / tint-and-hairline / scrim-as-imagery-legibility (148); Motion source-stated classification / Arriving-Dismissals-Two-way / spec-template-ease-exit-match / no-bounce-or-spring (152); Motion signature no-bounce / auto-advance / tap-feedback / storefront-remains-fully-functional (170); Font evidence-class extras including live-computed-stack / YAML-family-keys-naming-those-live-computed-families / fallback-stack-not-the-brand-face / two-fonts-two-jobs / outside-the-captured-homepage-and-PDP (186); Family font-use named / two-fonts-two-jobs / do-not-replace-unavailable-or-unobserved-on-a-surface-that-did-not-establish-it (198); Type-role ratio-versus-size-local / omitted-lineHeight-unfilled / tracking-omitted (202); Type-rule extras (204); Assets Google-favicon identity-only (220); Assets imagery-not-invented-decoration (222); Capture-record graph-not-adopted / hex-and-geometry-remain-source-stated / philosophy-layer / §14-as-source-stated-contract-not-computed-CSS (229); Capture-record table characterizations, limiter immediately before the table (231); Capture-record Core §4.4 applicability-by-meaning / omitted-L-E-S-fields (246); Capture-record YAML-row-absent-Type-not-invented / C4 omit-kind (250); Buy Primary field-note unmerged-field (266); Inquiry field-note unmerged-field (290); Wishlist field-note unmerged-field (315); Header Search field-note unmerged-field (340); Global Nav field-note unmerged-field (362); Global Nav named-active-not-hover (376); PDP Section Tab field-note unmerged-field (389); PDP Section Tab named-active-not-hover (403); Product Card field-note unmerged-field (416); Sale / Benefit Pill field-note unmerged-field (431); Utility / Skip-link Bar YAML-row-absent-Type-not-invented (446) / field-note unmerged-field (447); Carousel Control YAML-row-absent-Type-not-invented / Kind-interactive-from-body-Use-not-invented-YAML-type (475) / field-note unmerged-field (476); Product-detail buy bar local-composition (490) / field-note (497); Product card with sale overlay local-composition (501) / field-note (511); Global header assembly local-composition (515) / field-note (522); Promo banner headline local-composition (526) / field-note (533); Layout extras (540); Layout recorded-span / collapsing / image-behavior including consistent-with-the-flat-system / scrim-to-preserve-legibility / touch-purpose, limiter precedes the breakpoint table (549); Layout after-table collapsing (559) / image-behavior (561) / touch-purpose (563); Content Observed em-dash role-label citation-character (570); Content §14-not-extra-Observed (581); Content derived voice extra names / tone-table labels / forbidden-register items (585); Content last-sentence deal-is-the-message (597). Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is this identity ledger only. Portable Typography & Assets 220 is URL-free identity-boundary (E2a). Named gaps has no first-party-mark sentence and does not restate the URL
- Homepage / PDP / medium URLs are dual-destination with portable Experience Scope (E2a)
- `primary_color` `#640faf` destinations listed in Identity (E2a)
- Token note is dual-destination: Experience Scope 13 + this ledger (E2a, B2/B2a)
- YAML typography `use` fields restored on Type roles 208–216 together with body Notes as a separate field on each row (A1)
- YAML unitless `lineHeight` 1.4 and 1.5 preserved as ratios (A1a)
- Verified primitive types preserved per component: button×3 (256/281/305) + tab×2 (355/383) + card×1 (409) + input (330) + badge (423). Utility / Skip-link Bar and Carousel Control have no YAML `tokens.components` row; Type is not invented (A1b). Carousel Control Kind `interactive` 464 from body Use as prev/next/pause
- No named Focus hex is copied onto `focus-visible` rows (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete (246/248)
- Buy Primary / Inquiry / Wishlist / Header Search omit loading/error/success fields (C2) 275/299/324/349. Global Nav / PDP Section Tab / Utility / Skip-link Bar / Carousel Control loading/error/success remain destination/selection or chrome role-based not-applicable (372–374 / 399–401 / 455–457 / 484–486) (C2; `not captured` 사유 아님, C1)
- Product Card / Sale / Benefit Pill kind/map omitted (C4) 418/433. Local recipes kind/map omitted 496/510/521/532
