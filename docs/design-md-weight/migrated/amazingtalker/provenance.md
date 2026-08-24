# AmazingTalker provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/amazingtalker/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | amazingtalker |
| name | AmazingTalker |
| country | TW |
| category | consumer-tech |
| homepage | https://www.amazingtalker.com |
| primary_color | `#02cab9` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=amazingtalker.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

Token note from source: `primary = live teal CTA fill #02cab9 (rgb 2,202,185); coral #ff5f5f is the secondary energy accent; body text #484848 across both en. and tw. surfaces`. Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / derived editorial implementation inference / not-AmazingTalker-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=amazingtalker.com&sz=128` is dual: this identity ledger + portable Typography & Assets identity-boundary sentence (E2a). It is not a captured first-party mark. No portable Named-gaps row restates the URL. Named gaps has no first-party-mark sentence. **[SUPERSEDED 2026-08-24 wave8 ledger sync — prior clause claimed Named gaps names “a first-party mark file other than the catalog Google favicon lookup” without the URL. That Named-gaps row is absent (`DESIGN.md` Named gaps 548–557). See migration-log Revision wave8 ledger sync.]**

Homepage `https://www.amazingtalker.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a). `https://en.amazingtalker.com/` and `https://tw.amazingtalker.com` are dual Scope + this surfaces/Tier 1 ledger (E2a). `https://tw.amazingtalker.com/blog` and `https://www.amazingtalker.com/about` are dual Scope (named as brand-owned country sources, not token-capture surfaces) + this country-sources ledger (E2a).

Catalog `primary_color` `#02cab9` is identity metadata + portable Scope token-note + Distinctive (bullet + unmerged-role readings) + Foundations Brand Teal / Semantic unmerged-role + capture-bound + Primary Hero CTA Background / Observed / field-note + Primary Section CTA Background / Observed / field-note + Nav Link active/hover / Observed + Form Input named Focus + Elevation Ring + Capture-record Loading (in-place filter) / Success (lesson booked) + Capture-record generic Input Focus / Elevation Ring B1 sentence + Teal Tint Tag text + Coral Accent field-note contrast + Named gaps Nav Link active/hover exception. The hex additionally appears in Scope atmosphere, Principles item 2, Font evidence live nav, Content Observed CTAs (E2a). It is not Teal Deep `#02b3a4` and not Coral `#ff5f5f`. Motion CTA feedback uses `#02b3a4`, not this hex. Avoid does not contain the hex; Don’ts name coral-as-second-CTA and third-hue in words.

`tokens.source: live-extract` and `components_harvested: true` are this ledger only (A1c). `added` 2026-06-08 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-08 |
| added | 2026-06-08 |
| tokens.extracted | 2026-06-08 |
| live inspect (playwright getComputedStyle) | 2026-06-08 |
| footer Verified | 2026-06-08 (Tier 1 live inspect — playwright getComputedStyle on en. and tw. surfaces) |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#02cab9` action teal vs Teal Deep `#02b3a4` vs Coral `#ff5f5f` vs Coral Soft `#ffe5e5`; Heading `#363636` vs live H2 `#484848` vs Body `#484848`; Course Card price field `#484848` vs live "₩14,580/lesson" `#ffffff`; Body `#484848` vs nav `rgba(0,0,0,0.87)` vs live scan `rgb(0,0,0)` ×566; YAML `card-course.use` "ambient shadow" vs body Course Card `rgba(0,0,0,0.10) 0px 4px 16px` (standard); YAML `subhead` 1.30 vs body Category Head 1.60 (38.4px); YAML `family.cjk` short string vs body long CJK stack; YAML Section CTA font `24px/300` vs body Roboto; YAML `rounded.full` 9999 / `9999px`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| en-home | product-homepage | https://en.amazingtalker.com/ (www 302) | 2026-06-08 |
| tw-home | product-homepage-zh-TW | https://tw.amazingtalker.com | 2026-06-08 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| en-live | product-surface | https://en.amazingtalker.com/ | 2026-06-08 |
| tw-live | product-surface | https://tw.amazingtalker.com | 2026-06-08 |
| tw-blog | brand-owned-editorial | https://tw.amazingtalker.com/blog | named country source; not a token-capture surface |
| about | brand-owned-about | https://www.amazingtalker.com/about | named country source; not a token-capture surface |

### Tier 1

- https://www.amazingtalker.com (302 → https://en.amazingtalker.com/) — body, primary CTA, h1, h2, h3, nav, paragraph computed styles. Raw samples in `.verification.md`: body `background: rgb(255, 255, 255)` (`#ffffff`), `color: rgb(72, 72, 72)` (`#484848`), `font-family: Roboto, sans-serif`; Primary CTA "English tutors" `background: rgb(2, 202, 185)` (`#02cab9`), `color: rgb(255, 255, 255)` (`#ffffff`), `border-radius: 5px`, `font-size: 20px`, `font-weight: 400`, Roboto; H1 "Languages and learning made fun" `font-size: 50px`, `font-weight: 600`, `line-height: 65px`, `color: rgb(255, 255, 255)` (`#ffffff`), Roboto; H2 "Popular Courses" `font-size: 30px`, `font-weight: 500`, `line-height: 45px`, `color: rgb(72, 72, 72)` (`#484848`), font-family `"Helvetica Neue", ... PingFang ... "Microsoft JhengHei"`; H2 "4 reasons to learn on AmazingTalker" `font-size: 31px`, `font-weight: 500`, `line-height: 46.5px`, `color: rgb(72, 72, 72)` (`#484848`), Roboto; Nav active link `color: rgb(2, 202, 185)` (`#02cab9`), `font-size: 16px`, `font-weight: 400`, `line-height: 24px`, Roboto; Price label "₩14,580/lesson" `font-size: 18px`, `font-weight: 300`, `color: rgb(255, 255, 255)`, `line-height: 27px`; Coral accent (top-colors frequency scan) `rgb(255, 95, 95)` (`#ff5f5f`) ×12, plus tint `rgba(255, 95, 95, 0.1)` (`#ffe5e5` soft) ×3; Surface band `rgb(243, 245, 247)` (`#f3f5f7`); border hairline `rgb(220, 223, 230)` (`#dcdfe6`); slate icon `rgb(144, 147, 153)` (`#909399`).
- https://tw.amazingtalker.com — Traditional-Chinese home; section CTA "開始挑選教師吧！" `background: rgb(2, 202, 185)` (`#02cab9`), `color: rgb(255, 255, 255)`, `border-radius: 3px`, `padding: 8px 18px`, `font-size: 24px`, `font-weight: 300`, height ~54px.

Top computed-color frequencies (live scan, `.verification.md`): `rgb(72,72,72)` ×907 (body `#484848`) · `rgb(0,0,0)` ×566 · `rgb(118,118,118)` ×296 (`#767676`) · `rgb(54,54,54)` ×193 (`#363636` heading) · `rgb(255,255,255)` ×134 · `rgba(0,0,0,0.87)` ×101 (nav text) · `rgb(2,202,185)` ×28 (teal `#02cab9`) · `rgb(255,95,95)` ×12 (coral `#ff5f5f`) · `rgb(243,245,247)` ×3 (`#f3f5f7`).

HTML-comment / `.verification.md` full rgb sample dump and the top-frequency scan table (×907 / ×566 / ×296 / ×193 / ×134 / ×101 / ×28 / ×12 / ×3) are this Tier 1 ledger only. Portable Foundations Semantic restates role rgb tuples on Brand Teal / Coral / Heading / Body / Muted / Slate / Surface / Hairline bullets, and the Semantic unmerged-role paragraph restates live-scan ×193 / ×907 / ×566 (E2a). The source token note’s `rgb 2,202,185` is dual Scope + this ledger.

Home / tw URLs are dual-destination with portable Experience Scope (E2a).

### Tier 2 (no usable record)

- getdesign.md / refero.design — excluded by gate rules in `.verification.md` (non-regional/non-brand); Google s2 favicon proxy likewise excluded as a country source.

### Country sources (not token-capture surfaces)

- https://tw.amazingtalker.com — AmazingTalker's own Traditional-Chinese home ("AmazingTalker 線上家教平台 ｜ 1 對 1 線上課程學習的好夥伴！"). Dual token surface + country source.
- https://tw.amazingtalker.com/blog — official Traditional-Chinese blog. Dual portable Scope (named, not a token-capture surface) + this ledger (E2a).
- https://www.amazingtalker.com/about — company / about page. Dual portable Scope (named, not a token-capture surface) + this ledger (E2a).

### Narrative (not interface tokens)

- Taipei founding; expansion from `tw.amazingtalker.com` to `en.amazingtalker.com` plus language-locale subdomains; languages named (English, Spanish, Korean, Japanese, French, Chinese). Dual portable Scope (under adjacent complete B2a as public-history / narrative-not-interface-token) + this ledger (E2a).
- Refusal of institutional ed-tech / over-gamified apps, and embrace of one teal + coral + white space + tutor imagery, live in portable Scope under the refusal/embrace B2a limiter.

Voice samples (§10 / live inspect) are verbatim from the live homes ("Languages and learning made fun", "English tutors", "Match me with tutors", "開始挑選教師吧！", "₩14,580/lesson"). Dual-destination for the Observed strings and the 2026-06-08 date: portable Content & Locales + this ledger (E2a). Per-string extra portable hits (E2a): "Languages and learning made fun" — Scope typographic paragraph + Font evidence live H1 + Content derived tagline row (not Type roles, not Primary tasks); "English tutors" / "Match me with tutors" — Primary tasks + Foundations Brand Teal example + Primary Hero CTA + Content; "English tutors" also Type roles Category Head Use; "開始挑選教師吧！" — Primary tasks + Foundations Brand Teal example + Primary Section CTA; "₩14,580/lesson" — Semantic unmerged-role + Font evidence + Type roles unmerged-ink + Course Card + Content. Derived §10 tone table and forbidden register are not this observation class.

## Claim ledger

Token extraction is `live-extract` (2026-06-08). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body teal `#02cab9`, coral `#ff5f5f` + `rgba(255,95,95,0.1)` / `#ffe5e5`, body `#484848`, canvas `#ffffff`, surface `#f3f5f7`, hairline `#dcdfe6`, heading `#363636`, muted `#767676`, slate `#909399` | en-live computed style (footer + `.verification.md`) |
| Hero CTA 5px / 20px/400; section CTA 3px / 24px/300 / `8px 18px` / ~54px | en-live + tw-live |
| H1 50px/600/65px; H2 31px/500/46.5px Roboto; H2 30px/500/45px CJK stack | en-live |
| Nav active `#02cab9` 16px/400/24px | en-live |
| Price "₩14,580/lesson" 18px/300/27px `#ffffff` | en-live (unmerged from Course Card `#484848`) |
| YAML `card-course.use` "ambient shadow" vs body standard `rgba(0,0,0,0.10) 0px 4px 16px` | YAML metadata + body §4 |
| YAML `subhead` 1.30 vs body Category Head 1.60 (38.4px) | YAML + body §3 |
| §14 empty/loading/error/success/disabled/highlight rows | source state contract; portable Capture record under adjacent complete B2a on table characterizations |
| §15 durations 0ms/150ms/240ms/360ms, easing names, reduced-motion, signature lift/reveal/CTA | source-stated; portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`0ms` / `150ms` / `240ms` / `360ms`), easing names, signature motions, and `prefers-reduced-motion: reduce` remain in portable Motion under the source-stated limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps lists the omitted curve names and “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. Unique §9 Course Card category head `24px Roboto 400 #363636` is portable Course Card (A3/A4). Unique §9 coral urgency `14px Roboto 400` is portable Coral Soft Badge and Coral Accent Button (A3/A4). Remaining prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is dual: this identity ledger + portable Typography & Assets identity-boundary sentence (E2a). Named gaps has no first-party-mark sentence and does not restate the URL
- Homepage `https://www.amazingtalker.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a)
- `https://en.amazingtalker.com/` / `https://tw.amazingtalker.com` are dual Scope + this surfaces/Tier 1 ledger (E2a)
- `https://tw.amazingtalker.com/blog` / `https://www.amazingtalker.com/about` are dual Scope (country sources, not token-capture) + this ledger (E2a)
- `primary_color` `#02cab9` destinations: identity + Scope token-note + Distinctive (bullet + unmerged-role readings) + Foundations Brand Teal / Semantic unmerged-role + capture-bound + Primary Hero CTA Background / Observed / field-note + Primary Section CTA Background / Observed / field-note + Nav Link + Form Input Focus + Elevation Ring + Capture-record Loading/Success + Capture-record B1 Input Focus/Ring + Teal Tint Tag text + Coral Accent field-note contrast + Named gaps Nav Link exception + Scope atmosphere + Principles item 2 + Font evidence live nav + Content Observed CTAs (E2a). Not Motion CTA feedback (`#02b3a4`). Not Avoid.
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- YAML typography `use` fields restored on Type roles (A1)
- YAML unitless `lineHeight` 1.30 / 1.50 preserved as ratios (A1a). Body Category Head 1.60 (38.4px) kept beside YAML `subhead` 1.30
- Verified primitive types preserved per component: button×3 + card + badge + tab; Coral Accent Button / Teal Tint Tag / Form Input / Surface Band have no YAML type and none was invented (A1b)
- Generic Input Focus `#02cab9` and Elevation Ring `2px solid #02cab9` are not promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Primary Hero CTA / Primary Section CTA / Header Utility / Course Card omit loading/error/success fields (C2). Form Input omits loading/success and keeps error applicable as a form field. Nav Link loading/error/success remain grouping/destination role-based. Course Card keeps Kind: interactive from source §8 full tap targets / §15 card hover lift. Coral Soft Badge / Coral Accent Button / Teal Tint Tag / Surface Band omit kind/map (C4)
- Coral Accent Button, Teal Tint Tag, Form Input, and Surface Band are body §4 only (not YAML `tokens.components`), except Form Input kind/map as a named form field
- Source §13 personas are fictional archetypes informed by publicly observable segments (adult language learners, working professionals upskilling, parents arranging lessons for children, and tutors), not specific individuals. Portable Audience keeps the exclusion boundary only. Names, ages, cities, occupations, and biographies are not copied here (D2). Primary tasks come from live CTA strings, not §13
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not AmazingTalker-authored or a separately published UI specification`): Scope product-origin / marketplace-definition; Scope two-URL evidence-domain assignment; Scope token-note register-split; Scope evidence-domain (en. vs tw. vs blog/about); Scope marketplace-character / one-teal-discipline / dual-script / friendly-weight / typographic-foundation / conversion-first-hero / coral-as-warmth / two-hue-restraint; Scope stripe-apple-analogy / reassuring / teal-competence / coral-warmth / slate-not-pure-black; Scope public-history / narrative-not-interface-token; Scope product-premise / vetted-human-tutor / visual-language-warmth; Scope refusal / embrace / design-forward-startup; Audience exclusion / observable-work-follows-three-tasks; Distinctive unmerged-role readings including single-interactive-hue / warm-secondary / coral-not-second-CTA / warmer-than-black / conservative-geometry / conservative-radii / neutral-soft-shadows / conversion-first-rhythm; six numbered principles; capture-bound grouping of §7 / §16 Do’s / live inspect / token note; Avoid §7 / §16 Don’ts; Semantic color unmerged-role readings; Spacing ~8px-base / frequent-18px / generous-64px+ (limiter precedes those readings); Shape local-geometry / Sharp-Standard-Comfortable-Pill role labels / crisp-modern / friendly-restrained; Elevation shadow-philosophy and decorative-depth; Motion source-stated classification; Motion signature characterizations (tappability-without-bounce / calm-never-abrupt / immediate-reassuring / marketplace-stays-fully-functional); Font evidence-class application including no-custom-webfont / dual-script-intentional; Family font-use boundary; Typography weight-as-hierarchy / Roboto-for-trust / CJK-intentional / generous-1.5 / no-letter-spacing-tricks; Type roles ratio-versus-size-local; Type roles unmerged-ink; Assets Google-favicon identity-only; Assets imagery-not-invented-decoration; Capture-record graph-not-adopted preservation; Capture-record table characterizations; Layout generous-inviting / conversion-anchored / band-rhythm / funnels-toward-CTA / empty-space-directional / ~8px-base / frequent-18px restatement / recorded-layout visual-rhythm / clean-header; Layout breakpoint table as recorded span not complete specification of every unlisted control, surface measurements not universal layout tokens, touch-target record as a purpose reading rather than a complete target-size specification, and image-behavior (hero responsive cropping / tutor-face-and-CTA-visible / locale-specific imagery swap) as source-stated rather than a complete image specification; Content Observed citation-character of parentheticals including section titles; Content empty/loading strings as state-contract not extra Observed samples; Content derived voice + tone table + forbidden register (B2/B2a)
- Footer live-inspect method and `.verification.md` path `web/references/amazingtalker/.verification.md` are this ledger only
- HTML-comment / `.verification.md` full `rgb(...)` sample dump is this Tier 1 ledger only. Portable Semantic bullets restate role rgb tuples; the unmerged-role paragraph restates live-scan ×193 / ×907 / ×566 (E2a)
