# Chunghwa Telecom provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/chunghwa/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | chunghwa |
| name | Chunghwa Telecom |
| country | TW |
| category | consumer-tech |
| homepage | https://www.cht.com.tw |
| primary_color | `#209cff` |
| logo | type `favicon`, slug `https://web-eshop.cdn.hinet.net/eShop%20Images/Consumer/Faicon/Faicon_logo_128x128.png` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note from source: `primary = live Chunghwa Blue (#209cff = rgb(32,156,255)); accent orange (#ff874d = rgb(255,135,77)); canvas near-white (#fafafa); body text near-black (#333333).` Dual destination (E2a): this ledger and portable Experience Scope 13 (same note plus the adjacent register-split / `#209cff`-as-CTA-fill-not-accent / `#fafafa`-as-canvas-not-surface / derived editorial implementation inference / not-Chunghwa-Telecom-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / first-party HiNet CDN slug URL `https://web-eshop.cdn.hinet.net/eShop%20Images/Consumer/Faicon/Faicon_logo_128x128.png` is dual: this identity ledger + portable Typography & Assets 213 (E2a). Named gaps 558–567 has no first-party-mark sentence and does not restate the URL.

Homepage `https://www.cht.com.tw` is dual-destination: Experience Scope 9/11 + this identity/surfaces/Proof ledger (E2a). Personal-services host `https://www.cht.com.tw/home/cht/personal/` is dual Scope 11 + this surfaces/Tier 1/Proof ledger (E2a).

Catalog `primary_color` `#209cff` destinations: this identity ledger + portable Scope token-note 13 / atmosphere 15 + Distinctive unmerged B2a 42 / bullet 44 + Principles UI implication 58 / capture-bound 63 / Do 65 + Semantic unmerged-role 91 / Chunghwa Blue 93 + Capture-record Error (session expired) 231 + Primary CTA Background 251 / field note 260 + Find More Text 280 / field note 287 + Blue Tint Card Text 392 / field note 397 + Orange Promo Badge field note 411 + Blue Feature Badge Background 420 / field note 425 (E2a). Avoid 77 names `#ff874d`, not this hex. Content Observed 502–508 is live strings without this hex. Warn/accent orange `#ff874d` destinations: Scope token-note 13 / atmosphere 15 + Distinctive unmerged 42 / bullet 46 + Principles UI implication 58 / capture-bound 63 / Do 67 + Avoid Don’t 77 + Semantic unmerged-role 91 / CHT Orange 97 + Primary CTA field note 260 + Orange Promo Badge Background 406 / field note 411 + Blue Feature Badge field note 425 + Promo Badge local recipe 461 / local children 457 (E2a). Avoid limiter 75 names orange-as-accent-only without this hex. Anatomy 460 has no this hex. Primary Hover `#0083ec` destinations: Scope 13 / Distinctive 42 / 45 / Semantic 91 / 94 / Named Hover restatement 241 / Primary CTA Hover 257 / Observed 259 / field note 260 / hover row 265 / additional named state 271 / Named gaps 564 (E2a). Capture 237 names the hover-versus-`focus-visible` reading without this hex. YAML `rounded.full` string destinations: Distinctive unmerged 42 / Shape list item 123 / Primary CTA field note 260. YAML `full` 100 step also Distinctive bullet 49 / Shape YAML row 115 / limiter 117 / local-not-universal 127 (E2a). Search `#686868` destinations: Scope 13 / Distinctive 42 / Semantic 91 / Search Input Text 352 / field note 361 (E2a). YAML/body search border pair `#cbcbcb` / `#eaeaea` destinations: Scope 13 / Distinctive 42 / Semantic 91 / Hairline 104 / Input Border 105 / Capture Skeleton 234 / Disabled 235 / Search Input 353–354 / field note 361 (E2a). Avoid `#000000` destinations: Avoid limiter 75 / Don’t 82 only (not Distinctive, not Foundations Semantic).

`tokens.source: live-extract` and `components_harvested: true` are this ledger only as YAML keys and as the extraction-class value (A1c). The `live-extract` literal is provenance-only; portable Font evidence restates live computed surface-use without that extraction-class string (E2). YAML `verified` 2026-06-22 and `extracted` 2026-06-22 are this freshness ledger. Footer **Verified:** 2026-06-22 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| footer Verified | 2026-06-22 |
| HTML-comment live inspect | 2026-06-22 |
| sidecar inspected | 2026-06-22 |
| sidecar borderRadiusFreq scan | 2026-06-23 (`web/references/chunghwa/.verification.md`) |

Conflicts unresolved: none. Preserved value pairs inside the reconstruction: `#209cff` primary CTA fill vs `#ff874d` accent vs `#0083ec` hover; `#fafafa` canvas vs `#ffffff` surface / on-primary; `#333333` ink vs `#666666` muted vs `#4c4c4c` dark-mid vs search `#686868`; `#eaeaea` hairline vs `#cbcbcb` input border vs body-§4 search border `#eaeaea`; YAML `rounded.full` 100 vs harvested `100px` vs live “回首頁” `30px`; YAML primary height 50px vs live “我接受” 54px; YAML primary padding `16px 35px` vs live “我接受” `16px` vs live “回首頁” `0px 35px`; YAML `button-primary` font `16px / 400` vs YAML `cta-label` 16px / 700 / 1.50 vs Find More 16px / 700; YAML `family.body` without `SF Pro Text` vs live stack with `SF Pro Text`; YAML `shadow.card` `0 2px 8px rgba(0,0,0,0.08)` vs body §6 no-shadow / YAML `none`; 20px YAML `rounded.card` vs 16px White Service Card. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen. §9 parent-child tuples stay on local recipes, not as extra global tokens.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | telecom-homepage | https://www.cht.com.tw/ | 2026-06-22 (source footer + HTML comment + canonical `web/references/chunghwa/.verification.md`) |
| personal | personal-services (session-gated, partial) | https://www.cht.com.tw/home/cht/personal/ | 2026-06-22; partial; “網頁過期囉” page also inspected |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.cht.com.tw/ | 2026-06-22 |
| personal-live | product-surface | https://www.cht.com.tw/home/cht/personal/ | 2026-06-22 (session-gated, partial) |
| verification | proof-sidecar | `web/references/chunghwa/.verification.md` | 2026-06-22 |

### Tier 1

- https://www.cht.com.tw/ — homepage live inspect. Dual portable Scope 9/11 + this ledger (E2a).
- https://www.cht.com.tw/home/cht/personal/ — personal services surface, session-gated, partial. Dual portable Scope 11 + this ledger (E2a).

### Tier 2 (no usable record)

- getdesign.md/chunghwa — 0 files (not indexed)
- styles.refero.design — no results for "chunghwa telecom"

Source footer and sidecar state that getdesign.md and styles.refero.design are explicitly not counted toward the TW brand-owned requirement. That exclusion is this ledger only. The portable body does not re-host it.

### Proof (source HTML comment + sidecar `web/references/chunghwa/.verification.md`)

Canonical proof sidecar exists at `web/references/chunghwa/.verification.md` (A1c; heading `## Proof — Tier 1 live inspect`). Derived mirror `design-md/chunghwa/.verification.md` has the same SHA-256 `f73e60d22edacfd0006e5e76df9e0977ca3d9a64c98a561bff5a64e8c1ce6227`. Canonical is `web/references`. Source footer points to the same inspect. The same live-inspect method and overlapping raw samples also sit in the source DESIGN.md HTML comment (philosophy-layer block, sections 10–15). This ledger records both. They are not a second portable token table.

- **Heading (sidecar):** `## Proof — Tier 1 live inspect`
- **Inspected:** 2026-06-22
- **Method:** playwright getComputedStyle (live DOM) — global playwright (chromium, headless, domcontentloaded), goto https://www.cht.com.tw/, modal dismissal pass, then `getComputedStyle` on body, headings, nav, buttons, links, and a full-DOM background/text color frequency scan
- **Sources:**
  - https://www.cht.com.tw/ (homepage, live computed style — primary Tier 1 source)
  - https://www.cht.com.tw/home/cht/personal/ (personal services surface — session-gated, partial load; "網頁過期囉" error page also inspected)

Raw samples in the source HTML comment / sidecar (this ledger; portable Semantic/Components restate the matching hex/geometry, not the rgb dump):

- body: `font-family: "PingFang TC", "SF Pro TC", "SF Pro Text", "Microsoft JhengHei", "Helvetica Neue", "Noto Sans CJK TC", Helvetica, Arial, sans-serif`; `color: rgb(51, 51, 51)` → `#333333`; `font-size: 20px`; `line-height: 32px`; `background-color: rgb(250, 250, 250)` → `#fafafa`
- nav tab "個人家庭" (active): `color: rgb(51, 51, 51)`; `font-size: 16px`; `font-weight: 700`; sidecar also records `height: 34px` (portable Primary Tab Height; not merged with this Proof padding) and Proof-only padding 6 px (not a YAML field; not merged with portable padding tokens)
- nav tab "企業服務" (inactive): `color: rgb(102, 102, 102)` → `#666666`; `font-size: 16px`; `font-weight: 400`
- sub-nav "行動上網通話": `font-size: 18px`; `font-weight: 700`; `color: rgb(51, 51, 51)`; sidecar also records `padding: 12px 20px 32px` and Proof-only computed height 69 px — that extra height stays on this Proof ledger and is not merged with portable Layout body §8 sub-nav 38px height with 8px right padding
- "找更多 >" button: bg `rgb(228, 242, 255)` → `#e4f2ff`; color `rgb(32, 156, 255)` → `#209cff`; radius 8px; padding `7px 58px`; height 40px; font-size 16px; weight 700
- "我接受" (accept) primary button: bg `rgb(32, 156, 255)` → `#209cff`; color white; radius `100px`; padding `16px`; font-size 16px; height 54px
- "回首頁" back-to-home CTA: bg `rgb(32, 156, 255)`; color white; radius `30px`; padding `0px 35px`; font-size 16px; height 50px
- search input: sidecar `border: 1px solid rgb(203, 203, 203)` → `#cbcbcb`; radius 4px; padding `0px 10px`; height 36px; color `rgb(104, 104, 104)` → `#686868`. Proof-only live-computed font-size 13.33 px stays on this ledger; it is not converted into a portable token (legacy DESIGN.md / portable Small-Label records 13px). YAML/body border pair `#cbcbcb` / `#eaeaea` stay unmerged in portable Search Input
- carousel/card container and service category card: white; radius 16px

Color frequency scan (sidecar / HTML comment; portable Semantic restates role hexes already in the legacy DESIGN.md token bag; extra sidecar-only frequency-scan values that are not in that token bag stay on this Proof ledger as observations and are not promoted as portable tokens):

- `rgb(51,51,51)` → `#333333` — 1084
- `rgb(32,156,255)` → `#209cff` — 176 (fg) / 19 (bg)
- `rgb(255,255,255)` → `#ffffff` — 75 (fg) / 52 (bg)
- `rgb(255,135,77)` → `#ff874d` — 26 (fg) / 7 (bg)
- `rgb(102,102,102)` → `#666666` — 36
- `rgb(76,76,76)` → `#4c4c4c` — 7
- `rgb(0,131,236)` → `#0083ec` — 2 (bg)
- `rgb(228,242,255)` → `#e4f2ff` — 6 (bg)
- `rgb(240,248,255)` → `#f0f8ff` — 4 (bg, sidecar)
- `rgb(250,250,250)` → `#fafafa` — 1 (bg)
- `rgb(234,234,234)` → `#eaeaea` — 1 (bg)
- sidecar-only fg rows not promoted as portable tokens: `rgba(0,0,0,0)` ×90, `rgba(0,0,0,0.5)` ×52, `rgb(0,0,0)` ×41, `rgb(2,103,185)` ×2 (quoted as rgb; no invented hex)
- sidecar-only bg row `rgba(0,0,0,0.2)` ×25 — HTML comment also records this frequency; not promoted as an elevation token

borderRadiusFreq (sidecar 2026-06-23): `20px` ×66 (~46%); `50%` ×11; `42px` ×4; `16px` ×22; `12px` ×23; `8px` ×7; `4px`; `100px` ×9. Independent scan (sidecar): `20px`×86, `50px`×26, `12px`×23, `16px`×22, `100px`×9, `8px`×7, `42px`×4. Those independent-scan counts stay on this Proof ledger and are not merged with portable Shape 4 / 8 / 16 / 20 / 100px or with YAML spacing `md` 12. Sidecar `12px` ×23 as a radius-frequency row stays on this Proof ledger; portable 12px remains the YAML spacing `md` step / body spacing list, not an extra radius key.

**Primary selection rationale (sidecar):** `#209cff` is the live primary-CTA fill and is set as `primary_color`. `#ff874d` is recorded as the orange accent.

HTML-comment / sidecar full `rgb(...)` sample dump and the sidecar frequency-scan table are this Proof ledger only. Portable Foundations Semantic restates role hexes; Font evidence 183 restates the live stack and body 20px / 32px companion (E2a).

### Narrative (not interface tokens)

Source §11 1996 spin-out, 2005 privatization, TWSE: 2412, NYSE: CHT, successor to national telephone infrastructure, widest fixed-line network, largest HiNet fiber subscriber base, one of Taiwan's lead 5G operators, and product span across 5G / HiNet / MOD / enterprise ICT / smart city are restated in portable Scope 17. Mission evolution phones-to-digital-life is Scope 19. Backbone-versus-consumer-products-challenger and institutional-versus-playful design posture are Scope 21. Stable/trustworthy blue for a decades-old national audience, dense IA that respects users' time, and dual-language nav reflecting Taiwan's bilingual professional class are Scope 23. Each derived relationship has adjacent complete B2a. They are not interface tokens. Evidence class is public-history narrative.

## Claim ledger

Token extraction is `live-extract` (2026-06-22). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body `#209cff`, `#0083ec`, `#e4f2ff`, `#f0f8ff`, `#ff874d`, `#fafafa`, `#ffffff`, `#333333`, `#666666`, `#4c4c4c`, `#eaeaea`, `#cbcbcb`, `#686868`, `#000000` | live-extract tokens + body §2; homepage named as inspection host; HTML comment + sidecar raw samples. `#209cff` is primary CTA fill; `#ff874d` is accent; `#0083ec` is named hover |
| YAML typography PingFang TC roles hero 32/700/1.40 through cta-label 16/700/1.50; body-table Small / Label 13/400/1.30 | YAML + body §3; portable Type roles 202–209. YAML `use` and body Notes are separate fields on each row. Live computed surface-use in portable Font evidence 183 |
| YAML spacing xs 4 / sm 8 / md 12 / base 16 / lg 20 / xl 32 / xxl 48 / section 64 (unitless); body also 4px, 8px, 12px, 16px, 20px, 32px, 48px, 64px | YAML; portable Spacing 109 (no px suffix added to YAML numbers) |
| YAML rounded sm 4 / md 8 / lg 16 / card 20 / full 100 | YAML; portable Shape; full as YAML step 100, not converted to harvested `100px` |
| YAML shadow.card `0 2px 8px rgba(0,0,0,0.08)` / none; body §6 three-level table | YAML + body §6; portable Elevation 133–141 |
| YAML components button-primary / button-find-more type `button`; nav-tab / nav-link type `tab`; card-white type `card`; search-input type `input`; badge-orange / badge-blue type `badge` | YAML + portable Components (A1b). Blue Tint Card has no YAML `tokens.components` row; Type is not invented |
| YAML component use strings | YAML + portable Use fields 258/285/307/331/359/381/409/423 and Primary tasks 31–33. Body-only Use dests (not YAML `use`): Blue Tint Card 394 |
| §9 parent-child tuples | prompt wrappers deleted; unique tuples restored as local recipes White Service Card 429–441 / Navigation Bar 443–453 / Promo Badge on Service Card 455–464. Not promoted as global tokens |
| §14 Empty / Loading / Error / Success / Skeleton / Disabled | source state contract; portable Capture record 227–235 under adjacent complete B2a on table characterizations 223 (limiter precedes the table) |
| §15 durations 100ms / 200ms / 300ms, easing names, reduced-motion, signature carousel / sub-nav / reduce-motion | source-stated; portable Motion under adjacent complete B2a 145 and 163. Cubic-bezier values omitted (omission ledger below) |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`100ms` / `200ms` / `300ms`), easing names, signature motions, and `prefers-reduced-motion: reduce` remain in portable Motion under the source-stated limiter 145 plus the adjacent signature-motion limiter 163. The B3 five-kind per-component computed gate is Foundations Motion 171 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 567 names animation/transition/duration and refers to all five kinds; it is not the B3 full promotion-gate sentence and does not enumerate the five kinds.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts wrappers, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Unique parent-child tuples from those prompts are restored as receiving local recipes (A3/A4): White Service Card 429–441, Navigation Bar 443–453, Promo Badge on Service Card 455–464. Verified hexes, radii, heights, and type metrics already in Foundations / Type / Components stay there; the tuples are not scattered as extra global tokens. Remaining prompt-only constructions stay omitted here as deleted tool prompts.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted §13 fictional archetypes

Source §13 names fictional archetypes. They are not Audience, not primary tasks, and not re-hosted here (D2). No names, biographies, ages, or cities from that section are listed in this file.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Chunghwa Telecom-authored or a separately published UI specification`) on the current portable body: Scope product-origin (9); Scope URL evidence-domain including values-stay-attached / homepage-not-proxy / personal-session-gated-partial (11); Scope token-note register-split including `#209cff`-as-CTA-fill-not-accent (13); Scope atmosphere extra names including Chunghwa-Blue-as-brand-color-link-color-and-primary-interactive-accent / tinted-blue-surfaces-for-hierarchy-without-heavy-shadows (15); Scope public-history / narrative-not-interface-token including 1996-spin-out / 2005-privatization / widest-fixed-line / largest-HiNet / lead-5G (17); Scope mission-evolution phones-to-digital-life (19); Scope backbone-versus-challenger / institutional-versus-playful (21); Scope refusal / embrace extra names including stable-trustworthy-blue / dense-IA-respects-users-time / dual-language-nav-bilingual-professional-class (23); Primary tasks YAML-use-strings-not-from-§13 / independently-verified-homepage-URL / harvested-strings-controls-not-independently-verified-destination-routes (29); Audience no-individual-personas-promoted / fictional-archetypes-not-Audience / observable-work-follows-three-tasks (38); Distinctive unmerged-role extras, limiter immediately before the bullets (42); numbered Principles five stems (55); Principle 1 UI implication (57); Principle 2 UI implication (58); Principle 3 UI implication (59); Principle 4 UI implication (60); Principle 5 UI implication (61); capture-bound grouping of §7 Do’s named rules (63); Avoid named Don’ts (75); Avoid last-bullet (83); Semantic unmerged-role extra characterizations including named-hover-pressed-not-keyboard-focus-evidence (91); Spacing unitless-YAML-not-required-px-suffix / body-px / heights-as-component-fields (109); Spacing 4px-base / information-dense-portal / 12–20px-internal-padding (111); Shape local-geometry / role labels limiter-precedes-list (117); Shape local-harvested-not-universal / YAML-full-100-not-harvested-pill (127); Elevation table Use precede / extra philosophy (131); Elevation YAML-shadow-card unmerged, limiter on the following-the-table sentence (141); Motion source-stated classification / Arriving-Dismissals-Two-way / spec-template-ease-exit-match / utilitarian-portal / functional-and-imperceptible (145); Motion signature no-bounce / auto-advance-cadence-prose-not-motion-slow / carousel-slide-as-motion-standard / ease-standard-as-carousel-two-way-easing-not-cadence / sub-nav-slide / all-functionality-remains-intact (163); Font evidence-class extras including live-computed-stack / YAML-family-keys-naming-those-live-computed-families (179); Family font-use named / SF-Pro-Text-unmerged / same-system-stack-for-all-contexts / no-dedicated-brand-typeface-or-custom-web-font / do-not-replace-unavailable-or-unobserved-on-a-surface-that-did-not-establish-it (192); Type-role ratio-versus-size-local / px-companions-local / cta-label-unmerged-from-button-primary (196); Type-rule extras (198); Assets favicon identity-only (213); Assets imagery-not-invented-decoration (214); Capture-record graph-not-adopted / hex-and-geometry-remain-source-stated / philosophy-layer / §14-as-source-stated-contract-not-computed-CSS (221); Capture-record table characterizations, limiter immediately before the table (223); Capture-record named-hover-not-focus-visible (237); Capture-record YAML-row-absent-Type-not-invented (243); Primary CTA field-note unmerged-field including named-hover-hex-not-keyboard-focus-evidence (260); Primary CTA session-expired-page-row-not-this-button-error-state (269); Primary CTA named-hover-not-focus-visible (271); Find More field-note unmerged-field (287); Primary Tab field-note unmerged-field including named-active-ink-weight-not-keyboard-focus-evidence (309); Primary Tab captured-variant-not-click-transition (321); Secondary Nav field-note unmerged-field (333); Search Input field-note unmerged-field / YAML-border-not-body-border / 13px-400-as-body-table-Small-Label (361); White Service Card field-note unmerged-field (383); Blue Tint Card field-note unmerged-field / YAML-row-absent-Type-not-invented (397); Orange Promo Badge field-note unmerged-field (411); Blue Feature Badge field-note unmerged-field (425); White Service Card local-composition (431) / field-note including not-a-rewrite-of-YAML-sub-nav-18px-700 (441); Navigation Bar local-composition (445) / field-note (453); Promo Badge on Service Card local-composition (457) / field-note including not-a-rewrite-of-Type-role-Small-Label (464); Layout extras (471); Layout recorded-span / collapsing / touch-purpose, limiter precedes the breakpoint table (481); Content Observed citation-character (500); Content §14-not-extra-Observed (510); Content derived voice extra names / tone-table labels / forbidden-register items (514). Lines 239/241 are Core C1/C2/C3 restatements adjacent to 237; they are not separate complete B2a phrases. Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog favicon URL is dual: this identity ledger + portable Typography & Assets 213 (E2a). Named gaps has no first-party-mark sentence and does not restate the URL
- Homepage / personal-services URLs are dual-destination with portable Experience Scope (E2a)
- `primary_color` `#209cff` destinations listed in Identity (E2a)
- Token note is dual-destination: Experience Scope 13 + this ledger (E2a)
- YAML typography `use` fields restored on Type roles 202–208 together with body Notes as a separate field on each row (A1). Small / Label 209 is body-table only (no YAML `lineHeight` / no YAML `use`)
- YAML unitless `lineHeight` 1.40 / 1.42 / 1.38 / 1.60 / 1.44 / 1.50 preserved as ratios (A1a). Body-table 1.30 on Small / Label is not a YAML `lineHeight` field
- Verified primitive types preserved per component: button×2 (249/277) + tab×2 (302/327) + card (376) + input (349) + badge×2 (404/418). Blue Tint Card has no YAML type; Type is not invented (243/396/397) (A1b)
- Named Primary Hover `#0083ec` is preserved as observed hover, not copied onto `focus-visible` rows (B1, 237/241/257/265/271)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete (239/241)
- Primary CTA omits loading/error/success fields (C2) 269. Find More omits loading/error/success 296. Search Input keeps error applicable as a form field (369) and omits loading/success (371). Primary Tab and Secondary Nav loading/error/success remain destination/selection role-based (317–319, 341–343)
- White Service Card / Blue Tint Card / Orange Promo Badge / Blue Feature Badge kind/map omitted (C4) 243/385/399/413/427/566
- The B3 five-kind promotion gate is Foundations Motion 171 only. Named gaps 567 is inventory form, not that sentence (E2c)
