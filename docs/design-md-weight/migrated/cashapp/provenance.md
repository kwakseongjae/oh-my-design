# Cash App provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/cashapp/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | cashapp |
| name | Cash App |
| country | US |
| category | fintech |
| homepage | https://cash.app |
| primary_color | `#00e013` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=cash.app&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

Token note from source: `primary = Cash Green #00e013 (documented hero color, PMS 802 C; live green CTA bg on cash.app/card). Black #000000 + White #ffffff are the supporting balance pair. Citron #d8ff14 is a sparing high-impact accent (never a full background fill). Live product surfaces use 999px pill buttons in CashSans; brand portal (design.cash.app) is a black canvas with white type.` Dual destination (E2a): this ledger and portable Experience Scope 13 (same note plus the adjacent register-split / `#00e013`-as-catalog-primary-and-Sign-up-fill / `#d8ff14`-accent-only / 999px-not-20px-not-9999px-not-2px-not-50% / derived editorial implementation inference / not-Cash-App-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=cash.app&sz=128` is dual: this identity ledger + portable Typography & Assets 211 (E2a). It is a catalog identity-boundary record, not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence. Named gaps 609–617 has no first-party-mark sentence and does not restate the URL.

Homepage `https://cash.app` is dual-destination: Experience Scope 9/11 + Primary tasks 27 + this identity/surfaces/Proof ledger (E2a). `https://cash.app/card` is dual Scope 11 / Primary tasks 27 + this surfaces/Tier 1/Proof ledger (E2a). `https://design.cash.app/color` is dual Scope 11 / Primary tasks 29 + this surfaces/Tier 1/Proof ledger (E2a). `https://design.cash.app/typography` is dual Scope 11 / Primary tasks 29 / Font evidence 179 + this Proof/HTML-comment/sidecar ledger (E2a).

Catalog `primary_color` `#00e013` destinations: this identity ledger + portable Scope token-note 13 / atmosphere 15 + Distinctive unmerged B2a 38 / bullet 40 + Principles item 1 54 / capture-bound 61 / Do 63 + Semantic unmerged-role 91 / Cash Green 93 + Elevation 141 + Capture-record Empty 226 + Sign Up Background 246 / field note 255 + Marketing Nav Active 397 / field note 401 / hover row 406 / additional observed 413 + White Hero local children 473 + Marketing Top Nav local-composition 506 / local children 511 + Named gaps captured-variant exception 613 (E2a). Avoid 76 names Citron `#d8ff14`, not this hex. Content Observed 555–557 are live strings without this hex.

`tokens.source: live-extract` and `components_harvested: true` are this ledger only as YAML keys (A1c). Portable Font evidence restates live computed surface-use in the table row at 180 (E2a). Line 175 is the adjacent complete B2a on evidence-class application, not the live-extract restatement. YAML `verified` 2026-06-17, `added` 2026-06-17, and `extracted` 2026-06-17 are this freshness ledger. Footer **Verified:** 2026-06-17 is this ledger only.

Source has no `ds.*` and no `verification_v2`; none invented.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| footer Verified | 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces) |
| HTML-comment live inspect | 2026-06-17 |
| .verification.md inspected | 2026-06-17 |

Conflicts unresolved: none — live computed green `rgb(0,224,19)` exactly matches the documented portal value `#00E013`. Preserved value pairs inside the reconstruction: `#00e013` vs `#d8ff14` vs `#3860be`; `#000000` ink / on-primary / Log-in fill / portal canvas vs `#ffffff` canvas / on-dark / Sign-up-on-dark fill; `#f8f8f8` vs `#f6f6f6`; `#737373` / `#555555` / `#999999` / `#858585`; `#f9fffa` tint vs canvas; `#27455c` slate vs portal black; 999px pills vs 20px cards vs `9999px` chips vs 2px inputs vs `50%` avatars; Sign-up 14px/500 vs Log-in 14px/400 vs dark-hero Sign-up 12px/500; marketing-nav 16px/600 vs portal-nav 16px/400 vs body 16px/400; YAML spacing numbers without a px suffix vs body px vs 46px / 276px / 86px; YAML `lg` 999 vs `full` 9999 vs avatar `50%`; YAML `lineHeight` 1.0 / 1.1 / 1.2 / 1.5 vs px/rem companions. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen. §9 parent-child tuples stay on local recipes, not as extra global tokens.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-homepage | https://cash.app | 2026-06-17 (source footer + HTML comment + canonical `web/references/cashapp/.verification.md`) |
| card | product-surface | https://cash.app/card | 2026-06-17 |
| portal-color | brand-portal | https://design.cash.app/color | 2026-06-17 |
| portal-type | brand-portal-typography | https://design.cash.app/typography | 2026-06-17 (source HTML comment + `.verification.md` Proof Sources) |
| verification | proof-sidecar | `web/references/cashapp/.verification.md` | 2026-06-17 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://cash.app | 2026-06-17 |
| card-live | product-surface | https://cash.app/card | 2026-06-17 |
| portal-color | official-brand-portal | https://design.cash.app/color | 2026-06-17 |
| portal-type | official-brand-portal | https://design.cash.app/typography | named HTML comment + `.verification.md` Proof Sources |
| verification | proof-sidecar | `web/references/cashapp/.verification.md` | 2026-06-17 |

### Tier 1

- https://cash.app — homepage, live computed style. Dual portable Scope 9/11 / Primary tasks 27 + this ledger (E2a).
- https://cash.app/card — product surface, green CTA live. Dual portable Scope 11 / Primary tasks 27 + this ledger (E2a).
- https://design.cash.app/color — official brand portal, documented Cash Green `#00E013` / Citron `#D8FF14` / Black / White. Dual portable Scope 11 / Primary tasks 29 / Semantic 93/99 + this ledger (E2a).
- https://design.cash.app/typography — official brand portal typography page, named in the source HTML comment and in `.verification.md` Proof Sources. Dual portable Scope 11 / Primary tasks 29 / Font 179 + this ledger (E2a).

### Proof (source HTML comment + sidecar `web/references/cashapp/.verification.md`)

Canonical proof sidecar exists at `web/references/cashapp/.verification.md` (A1c; heading `## Proof — Tier 1 live inspect`). Derived mirror `design-md/cashapp/.verification.md` has the same SHA-256 `b788952ff8ff9f996206eb23f5a6df738c73e44fb0fcdae3c119fd35e0a65288`. Canonical is `web/references`. Source footer has no `.verification.md` pointer. The same live-inspect method and overlapping raw samples also sit in the source DESIGN.md HTML comment (philosophy-layer block). This ledger records both. They are not a second portable token table. Absence of the sidecar is not the disposition.

- **Inspected:** 2026-06-17
- **Method:** playwright getComputedStyle (live DOM), named in the source HTML comment as Tier 1 live inspect and in the sidecar Proof block (global playwright, chromium, headless)
- **Sources named in the HTML comment:**
  - https://cash.app — Cash Sans body font; pill buttons (999px) green/black/white; box-shadow none
  - https://cash.app/card — green Sign-up CTA bg `rgb(0,224,19)` `#00e013`, black text, 999px pill, 0 20px padding, 46px
  - https://design.cash.app/color — documented palette verbatim:
    - Cash Green: CMYK 65/0/100/0, RGB 0/224/19, HEX `#00E013`, PMS 802 C
    - Black: RGB 0/0/0, HEX `#000000`, PMS Black C
    - White: RGB 255/255/255, HEX `#FFFFFF`, PMS Bright White C
    - Citron: CMYK 11/0/91/0, RGB 216/255/20, HEX `#D8FF14`, PMS 388 C
    - "Cash Green should be omnipresent... used strategically such that it stands out as the hero color."
    - "Citron can be used sparingly as a high-impact accent... should never be used as a full background fill."
  - https://design.cash.app/typography — documented verbatim:
    - "Our typeface is Cash Sans, a customized version of Söhne by Klim Type Foundry. A neo-grotesque sans serif."
    - "The primary feature specific to Cash Sans that distinguishes it from Söhne is rounded punctuation."
    - "Regular and Medium are our default for typesetting."
    - Secondary typeface section exists for Display / Novelty / Bespoke usage. No family name is recorded here; none is invented.

Sidecar-only raw observations (this ledger; not portable tokens):

- Green CTA "Sign up" (`cash.app/card`): live-computed font-size 14.8 px / weight 500 / Cash Sans. YAML/body control size remains 14px. The two sizes stay unmerged. Sidecar writes that live size with a `px` suffix; it is not promoted as a portable type-role.
- Favicon identity: catalog slug `https://www.google.com/s2/favicons?domain=cash.app&sz=128` — `curl -sL` returned 756 bytes, genuine `PNG image data, 16 x 16, 8-bit RGBA` (> 450B threshold → real Cash App icon, not generic globe). Portable Assets restates the URL as identity-boundary, not this byte-count record.

HTML-comment full sample dump is this Proof ledger only. Sidecar raw samples stay on this ledger; portable DESIGN.md does not re-host the Proof rgb dump (E1). Portable Foundations Semantic restates role hexes; Font evidence restates the typography page and the YAML 14px versus sidecar 14.8 px split (E2a). `rgb(0,224,19)` is restated on portable Semantic 93 as the live computed match; it is not converted into an extra hex. Dual this Proof ledger + Semantic 93 + this footer note below (E2a).

### Tier 2 (no usable record)

- getdesign.md/cashapp — no entry ("No designs found")
- styles.refero.design/?q=cash app — no confirmed Cash App style page (generic fintech results only)

Footer note (this ledger): Conflicts unresolved: none — live computed green `rgb(0,224,19)` exactly matches the documented portal value `#00E013`. Dual portable Semantic 93 + this freshness/Proof/footer-note ledger (E2a).

### Narrative (not interface tokens)

Source §11 2013 Square Cash as email/text frictionless P2P / Block, Inc. (then Square, Inc.) / Jack Dorsey / growth into Card, direct deposit, commission-free stocks, bitcoin, and tax filing / “redefining money” as a branchless banking alternative / 2024 bespoke immersive Index Studio infinite-canvas portal / digital-first identity / “push boundaries” / “defy conventions” / Awwwards SOTD, and named press coverage (Creative Bloq, Awwwards), are restated in portable Scope under adjacent complete B2a (public-history). They are not interface tokens. Evidence class is public-history narrative from those widely documented facts, the live brand portal, and named press coverage. Motion’s infinite-canvas sentence remains Motion-only; it is not this product/history relationship.

## Claim ledger

Token extraction is `live-extract` (2026-06-17). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body `#00e013`, `#d8ff14`, `#000000`, `#ffffff`, `#f9fffa`, `#27455c`, `#3860be`, `#f8f8f8`, `#f6f6f6`, `#737373`, `#555555`, `#999999`, `#858585` | live-extract tokens + body §2; cash.app / cash.app/card / design.cash.app/color named as inspection hosts; HTML comment raw samples |
| YAML typography Cash Sans roles display-hero 86/400/1.0 through button-sm 12/500/1.0; rem companions 5.40rem / 2.50rem / 1.50rem / 1.00rem / 0.88rem / 0.75rem | YAML + body §3; portable Type roles 199–205 including Use (YAML) |
| YAML spacing xs 4 / sm 8 / md 12 / base 16 / lg 20 / xl 31 / xxl 48 / section 64 (unitless); body 4px–64px including 31px | YAML; portable Spacing 111 (no px suffix added to YAML numbers) |
| YAML rounded sm 2 / md 20 / lg 999 / full 9999; body 2px / 20px / 999px / 9999px / 50% | YAML; portable Shape; full as `9999px` on the Citron chip; avatar `50%` unmerged |
| YAML shadow.none `none`; live `box-shadow: none` on nav, hero, and buttons on cash.app and cash.app/card | YAML + body §6; portable Elevation |
| YAML components button-green / button-dark / button-light type `button`; nav-tab / portal-nav-tab type `tab`; card-light / card-dark type `card`; badge-citron type `badge`; avatar-round type `avatar` | YAML + portable Components (A1b). Default Input has no YAML `tokens.components` row; Type is not invented (body 329 / Capture-record 238 / Named gaps 616) |
| YAML component use strings | YAML + portable Use fields 252/278/304/350/365/381/398/424/451 and Primary tasks 27–29. Default Input body Use 327 is not a YAML `tokens.components` use string |
| §9 parent-child tuples | prompt wrappers deleted; unique tuples restored as local recipes White Hero 466–476 / Feature Card 478–490 / Dark Section 492–502 / Marketing Top Nav 504–514. Not promoted as global tokens |
| §14 Empty / Loading / Error / Success / Skeleton / Disabled | source state contract; portable Capture record 224–234 under adjacent complete B2a on table characterizations 222 (limiter precedes the table). Additional Named gaps dests: hover/pressed/focus-visible 612; L/E/S treatments 614; C4 cards/chip 615 |
| §15 durations 120ms / 220ms / 360ms, easing names, reduced-motion, functional-and-quick / green-never-bounces / confidence-reads-as-steadiness | source-stated; portable Motion under adjacent complete B2a 145 and 163. Easing names also DESIGN 157–159 + Named gaps 611. Cubic-bezier values omitted (omission ledger below) |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`120ms` / `220ms` / `360ms`), easing names, signature motions, and `prefers-reduced-motion: reduce` remain in portable Motion under the source-stated limiter 145 plus the adjacent signature-motion limiter 163. Easing names also DESIGN 157–159 + Named gaps 611. The B3 five-kind per-component computed gate is Foundations Motion 167 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 617 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts wrappers, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Unique parent-child tuples from those prompts are restored as receiving local recipes (A3/A4): White Hero 466–476, Feature Card 478–490, Dark Section 492–502, Marketing Top Nav 504–514. Verified hexes, radii, heights, and Cash Sans metrics already in Foundations / Type / Components stay there; the tuples are not scattered as extra global tokens. Unique §4 Default Input (`#ffffff`, `#000000`, `1px solid #999999`, 2px) is portable Default Input 318–340 (A3), Capture-record 238, and Named gaps 616. Remaining prompt-only constructions stay omitted here as deleted tool prompts.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted §13 fictional archetypes

Source §13 names fictional archetypes. They are not Audience, not primary tasks, and not re-hosted here (D2). Generic deletion only: fictional archetype material deleted; not re-hosted. No names, biographies, ages, cities, or segment labels from that section are listed in this file.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Cash App-authored or a separately published UI specification`) on the current portable body: Scope evidence-domain 11 (typography-documentation-named-in-the-source-HTML-comment-not-a-fourth-live-inspect-host-in-this-packet); Scope token-note register-split 13; Scope atmosphere extra names 15 (dual-canvas-portal-black-versus-marketing-white / green-sits-on-the-primary-call-to-action / those-quoted-clauses-are-portal-documented / uniformly-999px-pill / share-the-silhouette-at-46px); Scope public-history 17; Scope refusal / embrace extra names 19; Primary tasks YAML-use-strings-not-from-§13 25; Audience no-individual-personas-promoted / fictional-archetypes-not-Audience 34; Distinctive unmerged-role extras, limiter immediately before the bullets 38; numbered Principles six stems 52 plus named *UI implication* tails; capture-bound grouping of §7 Do’s named rules 61 including omnipresent-but-strategic; Avoid named Don’ts 74 including black-on-green-for-contrast / the-system-is-flat-use-color-blocks / keep-it-the-single-hero-action / every-button-is-a-full-pill / push-Cash-Sans-instead / rejects-legacy-bank-aesthetics; Avoid last-bullet floods-of-green quote 83; Semantic unmerged-role extra characterizations 91 including muted-soft-`#999999`-as-Default-Input-border-not-text; Spacing unitless-YAML-not-required-px-suffix / body-px / heights-as-component-fields, limiter precedes the YAML numbers 111; Spacing ~4px-base / 0px-vertical-20px-horizontal 113; Shape local-geometry including container-workhorse, limiter-precedes-list 119; Shape local-harvested-not-universal / YAML-lg-999-not-full-9999-not-50% 127; Elevation table Use precede / extra philosophy 131 (emphasis-via-Cash-Green-or-Citron-never-drop-shadow / deliberate-modern-flat-anti-corporate / fast-confident-culturally-current / avoiding-legacy-banking-card-stack-elevation); Motion source-stated classification / Arriving-Dismissals-Two-way / spec-template-ease-exit-match / functional-and-quick / green-never-bounces 145; Motion signature functional-and-quick / subtle-scale-opacity-shift / content-fades-in-from-below / playful-character-driven-transitions / fully-functional adjacent 163; Font evidence-class extras 175; Family font-use named 189; Type-rule extras 191; Type-role ratio-versus-size-local / rem-companions-local / button-14px-500-unmerged-from-Log-in-14px-400 / button-sm-12px-500-compact-header-pill 195; Assets Google-favicon identity-only 211; Assets imagery-not-invented-decoration 213; Capture-record graph-not-adopted 220; Capture-record table characterizations, limiter immediately before the table 222; Sign Up field-note unmerged-field 255; Log In field-note 281; Sign Up on Dark field-note 307; Default Input field-note 330; Light Feature Card field-note 353; Dark Tile field-note 368; Citron Accent Chip field-note 384; Marketing Nav field-note 401; Marketing Nav captured-variant-not-focus-visible 413; Brand-Portal Nav field-note 427; Brand-Portal Nav captured-variant 439; Account Control field-note 454; White Hero local-composition 468 / field-note 476; Feature Card local-composition 480 / field-note 490; Dark Section local-composition 494 / field-note 502; Marketing Top Nav local-composition 506 / field-note 514; Layout extras 521 including green-CTA-as-the-focal-action; Layout whitespace-philosophy 530 (limiter precedes the philosophy list); Layout recorded-span / collapsing / image-behavior / touch-purpose 532 including green-CTA-may-go-full-width-pill / RGB-as-documented-truest-depiction / green-CTA-full-pill / nav-items-spaced-for-touch / consistent-with-the-flat-system, limiter precedes the breakpoint table; Content Observed citation-character 553; Content §14-not-extra-Observed 559; Content derived voice extra names / tone-table labels (short-declarative-benefit-first / plain-and-functional / confident-expressive-a-little-defiant / plain-and-unembellished) / forbidden-register items 563. Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is dual: this identity ledger + portable Typography & Assets 211 (E2a). Named gaps has no first-party-mark sentence and does not restate the URL
- Homepage / cash.app/card / design.cash.app/color / design.cash.app/typography URLs are dual-destination with portable Experience Scope (E2a)
- `primary_color` `#00e013` destinations listed in Identity (E2a)
- Token note is dual-destination: Experience Scope 13 + this ledger (E2a)
- YAML typography `use` fields restored on Type roles 199–205 (A1)
- YAML unitless `lineHeight` 1.0 / 1.1 / 1.2 / 1.5 preserved as ratios (A1a)
- Verified primitive types preserved per component: button×3 (244/270/296) + tab×2 (392/419) + card×2 (345/360) + badge (375) + avatar (445) (A1b). Default Input has no YAML type; Type is not invented (329/238/616)
- No generic Focus capture in the source; focus-visible rows carry no hex (B1, 261/287/313/336/407/433/460). Capture-record prose 236 names `focus-visible` without a hex. Marketing Nav `#00e013` fill/underline on hover is a captured variant (397/413), not a `focus-visible` treatment. Named gaps hover/pressed/focus-visible 612
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete (236)
- Sign Up / Log In / Sign Up on Dark omit loading/error/success fields (C2) 264/290/316. Default Input keeps error applicable as a form field (338) and omits loading/success (340). Marketing Nav, Brand-Portal Nav, and Account Control loading/error/success remain destination/selection/profile role-based (409–411, 435–437, 462–464). Named gaps L/E/S treatments 614
- Light Feature Card, Dark Tile, and Citron Accent Chip omit kind/map (C4) 238/355/370/386/615
- Source §13 fictional archetypes are not copied here (D2). Primary tasks come from YAML use / live hosts, not §13
- Footer live-inspect method, source HTML comment, and canonical sidecar path `web/references/cashapp/.verification.md` are this ledger only. Derived mirror `design-md/cashapp/.verification.md` has the same SHA-256 `b788952ff8ff9f996206eb23f5a6df738c73e44fb0fcdae3c119fd35e0a65288`. Portable DESIGN.md does not re-host the Proof rgb dump. False-absence of the canonical sidecar is not in any of the three files
