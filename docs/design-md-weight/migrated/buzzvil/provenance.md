# Buzzvil provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/buzzvil/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | buzzvil |
| name | Buzzvil |
| display_name_kr | 버즈빌 |
| country | KR |
| category | marketing |
| homepage | https://www.buzzvil.com |
| primary_color | `#f44336` |
| logo | type `favicon`, slug `https://www.buzzvil.com/favicon.png` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

Token note from source: `primary = live contact-CTA coral red (#f44336, also the brandmark color); hero/dark sections sit on ink navy (#0e171f) with a dark slate card surface (#2a3f4d); the cool light surface (#f2f5f7) carries secondary buttons. Flat — box-shadow: none across the flagship surface.` Dual destination (E2a): this ledger and portable Experience Scope 13 (same note plus the adjacent register-split / derived editorial implementation inference / not-Buzzvil-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / slug URL `https://www.buzzvil.com/favicon.png` is dual-destination: this identity ledger + portable Assets 199 (E2a). Portable Assets 197 is the adjacent complete B2a (favicon file at the homepage host, not a Google favicon lookup).

Homepage exact `https://www.buzzvil.com` is dual-destination: portable Scope 9 / named-domain 11 / Primary tasks 29–33 + this identity / Surfaces / Sources / Tier 1 (E2a). Substring hits of the host on the favicon slug or Tech-blog rows are not homepage destinations. Tech blog `https://tech.buzzvil.com/` is this ledger (Tier 1 listed host) only as a blog index. Design-system post `https://tech.buzzvil.com/blog/design-system-at-buzzvil` is dual portable First-party writing 519 + this paragraph 26 + Tier 1 61 (E2a). Narrative 74 restates the quote class, not this URL. Scope 23 quotes the line without this URL.

Catalog `primary_color` `#f44336` is identity metadata + portable Scope token-note 13 / atmosphere 15 + Distinctive limiter 42 / bullet 44 + Principles item 2 57 + capture-bound 65 + Semantic unmerged-role 91 / Foundations Coral Red 93 + Elevation philosophy 131 + Capture-record Empty 214 + Contact CTA Background 238 / field note 247 / local recipe 248 + Header local recipe 412 (E2a). Avoid names “coral red” in running prose (77) without this hex; the `#f44336` hex is not in Avoid.

`display_name_kr` `버즈빌` is mixed: this identity ledger (YAML key) + portable Scope running prose `Buzzvil (버즈빌)` (9). H1 is `Buzzvil Design System` and is not the YAML key. `tokens.source: live-extract` and `components_harvested: true` are this ledger only (A1c). `added` 2026-06-26 is this ledger only. `category: marketing` is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| live inspect (playwright getComputedStyle) | 2026-06-26 |
| Observed voice samples | 2026-06-26 |
| footer Verified | 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect) |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#f44336` contact coral vs `#000000` ad-center fill vs `#f2f5f7` secondary; Ink Navy `#0e171f` vs Pure Black `#000000`; Canvas `#ffffff` jobs vs Surface Grey `#f2f5f7` vs Surface Dark `#2a3f4d`; Body Slate `#3e5463` vs Muted `#5b7282` vs Muted Alt `#7a909e` vs Faint `#9fb1bd` vs Faint Alt `#c1ccd6`; Hairline `#dce3e8` vs inactive `#c1ccd6`; YAML `rounded.sm` 4 vs `md` 8 vs `lg` 16 vs `xl` 32 vs `full` 9999 / `9999px`; YAML line-height ratios `1.19` / `1.31` / `1.50` vs body companion `1.19 (93px)` vs principle prose `1.5`; header height `44px` vs hero/filter `55px` vs nav-band `75px`; YAML outline/ghost with no `bg` vs body `transparent`; YAML secondary with no `border` vs body `1px solid #f2f5f7`. Both sides of each pair stay in portable Foundations, Typography, Components, or Layout. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-homepage | https://www.buzzvil.com | 2026-06-26 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.buzzvil.com | 2026-06-26 |

### Tier 1

- https://www.buzzvil.com — homepage, live computed style — hero, nav, CTAs, cards, filter pills; document.title "버즈빌 | 인터랙션 AI agent로 시작하는 모두가 사랑하는 방식의 광고"; Hero H1 "모두가 사랑하는 방식의 광고" Pretendard 78px / weight 800 / over dark navy rgb(14,23,31) `#0e171f`; Contact CTA "문의하기" bg rgb(244,67,54) `#f44336` / white text / radius 4px / 12px 16px / height 44px; Ad-center CTA "광고센터 바로가기" bg rgb(0,0,0) `#000000` / white text / radius 4px; Secondary "광고 상품 둘러보기" bg rgb(242,245,247) `#f2f5f7` / text rgb(62,84,99) `#3e5463` / radius 8px / 16px 32px; Nav links color rgb(91,114,130) `#5b7282` / 16px / 600; Filter pills radius 9999px / active `#ffffff` fill + `#000000` text / inactive `#c1ccd6` border+text; Stat/feature cards radius 32px / `box-shadow: none`
- https://tech.buzzvil.com/ — official Buzzvil Tech blog — brand-owned; listed in the source footer as a Tier 1 host; no token-level live-inspect claims in the HTML comment
- https://tech.buzzvil.com/blog/design-system-at-buzzvil — official Buzzvil design-system post — brand-owned, design philosophy; "Simplicity is key…" verbatim

Home URL is dual-destination with portable Experience Scope (E2a). Exact homepage `https://www.buzzvil.com` is portable Scope 9 + named-domain 11 + Primary tasks 29–33 + this identity / Surfaces / Sources / this Tier 1. HTML-comment rgb(244,67,54) `#f44336`, rgb(14,23,31) `#0e171f`, rgb(0,0,0) `#000000`, rgb(242,245,247) `#f2f5f7`, rgb(62,84,99) `#3e5463`, and rgb(91,114,130) `#5b7282` are the same source values as portable Semantic 91 and this Tier 1 / claim-ledger writing (E2a). They are not a second invented RGB.

### Tier 2 (no usable record)

- getdesign.md/buzzvil — 404 (not listed)
- styles.refero.design ?q=buzzvil — no Buzzvil-specific entry (generic catalog results only)

### Narrative (not interface tokens)

- Founded 2012 by John Gwanwoo Lee (이관우, CEO) and Robert Seo; named for the "buzz"; lock-screen idea from subway platform screen doors; HoneyScreen → BuzzScreen SDK; SlideJoy (US) acquisition 2016; offices in KR/US/JP/TW. Dual portable Scope 21 + this ledger (E2a). Source HTML comment: widely documented public facts gathered via web search this turn; not all are directly quoted from a single verified Buzzvil statement.
- Homepage mission line "모두가 사랑하는 방식의 광고" and current-chapter "인터랙션 AI 에이전트". Dual portable Scope 21 / Observed 511–513 + this ledger (E2a).
- Design-system post quote dual portable First-party writing 519 + Principles 54 / Scope 23 + this Tier 1 61 / this ledger (E2a). The post URL itself is 26/61 + portable 519, not this Narrative row and not Scope 23.

Voice samples (§10) are verbatim from the live homepage for the two Observed hero strings. Dual-destination for those Observed live strings and the 2026-06-26 date: portable Content Observed 511–512 + this ledger (E2a). Harvested control strings ("문의하기", "광고센터 바로가기", "광고 상품 둘러보기", "광고 문의하기", "전체", "브랜드 알리기", "39% 평균 클릭률", "x4 전환율", "82% 리텐션", document.title) are Observed 513 / Primary tasks 31–33 / component Use fields (E2a). Derived §10 tone table and forbidden register are not this observation class. The blog quote is First-party writing 519, not an Observed homepage string.

## Claim ledger

Token extraction is `live-extract` (2026-06-26). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to the homepage URL; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body coral `#f44336`, inks `#0e171f` / `#000000`, surfaces `#ffffff` / `#f2f5f7` / `#2a3f4d`, slate ladder, hairline, Pretendard | home-live computed style (footer HTML comment) |
| Contact CTA rgb(244,67,54) `#f44336`, white text, radius 4px, 12px 16px, height 44px | home-live |
| Ad-center rgb(0,0,0) `#000000`, white text, radius 4px | home-live |
| Secondary rgb(242,245,247) `#f2f5f7` / rgb(62,84,99) `#3e5463`, radius 8px, 16px 32px | home-live |
| Nav rgb(91,114,130) `#5b7282` / 16px / 600 | home-live |
| Hero H1 Pretendard 78px / 800 over rgb(14,23,31) `#0e171f`; subhead 24px / 400 | home-live |
| Filter pills 9999px; active `#ffffff` + `#000000`; inactive `#c1ccd6` | home-live |
| Stat/feature cards 32px / `box-shadow: none` | home-live |
| YAML `rounded.full` 9999 / body `9999px` | YAML + portable Shape + Distinctive |
| Header band fill `#ffffff` / height 75px | body §4 Navigation (YAML has no nav-band component) |
| Language Toggle body `transparent` / height 44px (YAML has no `bg` / no `height`) | body §4 + portable Language Toggle |
| Secondary body `1px solid #f2f5f7` (YAML has no `border`) | body §4 + portable Secondary Explore |
| Ghost body `transparent` (YAML has no `bg`) | body §4 + portable Ghost on Dark |
| Dark Slate Card (YAML has no `padding`) | YAML `card-dark` + portable Dark Slate Card |
| §14 empty/loading/error/success/skeleton/disabled rows | source state contract; portable Capture record under adjacent complete B2a on philosophy-layer classification and table characterizations |
| §15 durations 120ms/200ms/320ms, easing names, reduced-motion, signature pill-press / card-fade-in-from-below | philosophy layer (sections 10–15); not in the live-inspect list; portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed (philosophy layer; `ease-exit` matches the spec template; `ease-enter` / `ease-standard` match the unattributed nintendo/workday/barogo companion set without a live computed source in this packet). Duration tokens (`120ms` / `200ms` / `320ms`), easing names, “No bounce or spring”, signature filter-pill scale/opacity and card fade-in from below at `motion-standard / ease-enter`, and `prefers-reduced-motion: reduce` remain in portable Motion under the philosophy-layer / source-stated limiter (135 / 151). B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps 571 lists omitted curve names; 577 lists “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion 153 only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. Prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components. §9-only unique renderable fields kept: sticky white top nav (75px) with Pretendard 16px / 600 `#5b7282` links, active `#0e171f`, right-aligned black `#000000` ad-center + coral-red `#f44336` contact, white text, 4px, 12px 16px, 44px (Contact CTA 248 / Header 412 / Top Nav 426); dark hero `#0e171f` + 78px / 800 white headline + 24px / 400 `#f2f5f7` subhead + two 8px / 16px 32px / 55px buttons (Secondary 331 / Layout 480); Feature / Stat Card number `#0e171f` + label `#3e5463`, three side by side (383). Those fields are not promoted as global tokens.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## §13 fictional archetypes

fictional archetype material deleted; not re-hosted. Names and biographies are not Audience and are omitted from portable Audience and from this sidecar (D2). Primary tasks are reconstructed from harvested homepage strings, not from §13; independently verified in this packet is the inspected homepage URL only.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog favicon URL is dual this identity ledger + portable Assets 199 (E2a). Portable Assets 197 is the adjacent complete B2a (not a Google favicon lookup).
- HTML comment: Interpretive claims (e.g., "one action, one color", "flat and fast as a rejection of legacy adtech chrome") are editorial readings connecting Buzzvil's observed design and stated design-team values to its positioning, not directly sourced Buzzvil statements. Portable Principles 54 restates that class under adjacent complete B2a.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Buzzvil-authored or a separately published UI specification`) on portable DESIGN.md:

- Scope named-domain / Tech-blog-not-token-captures / stay-attached-to-the-establishing-page / homepage-not-stand-in-for-HoneyScreen-BuzzScreen-SlideJoy (11)
- Scope token-note register-split (13)
- Scope homepage-character extra names including single-saturated-brand-accent / exact-hue-of-the-Buzzvil-brandmark (15). `so-the-eye-learns-that-red-means-talk-to-us` is not a portable-body reading.
- Scope typographic-personality extra names including wide-weight-range / headlines-run-enormous-and-heavy (17). `de-facto-hangul-product-font` is not a portable-body reading.
- Scope distinguishing / flatness / hairlines-never-elevation / tidy-4px extra names (19)
- Scope public-history including named-for-the-buzz / subway-screen-doors / founding-insight-recorded-as-concrete / everyday-surface-people-glance-at-constantly / HoneyScreen-BuzzScreen / SlideJoy-2016 / rewards-rather-than-interrupts / hyper-personalized-experiences (21)
- Scope refusal / embrace (23)
- Primary tasks reconstructed-not-independently-verified-destination-routes / not-from-§13 (29)
- Audience no-individual-personas-promoted / fictional-archetypes-deleted-not-Audience / not-primary-tasks / observable-work-three-primary-tasks (38)
- Distinctive unmerged-role extra names, limiter-precedes-list (42)
- numbered Principles stems + *UI implication* (54)
- capture-bound grouping of §7 Do’s named token-role rules including crisp-and-declarative (62)
- Avoid named Don’ts (75)
- Avoid last-bullet faint-slate-c1ccd6-is-the-quiet-state (83)
- Semantic unmerged-role extra characterizations including pure-black-jobs-share-hex-not-a-second-navy / faint-alt-not-hairline (91). `warmth-and-weight-without-going-pure-black` is not a portable-body reading.
- Spacing recorded-scale / unitless-YAML / padding-stays / card-80-40-40-not-a-spacing-token (110)
- Shape local-geometry limiter-precedes-list including workhorse-rounding (116)
- Elevation table Use, limiter-precedes-table (120)
- Elevation near-shadowless extra names (131). `keeping-the-adtech-UI-feeling-clean-fast-and-modern` is not a portable-body reading.
- Motion philosophy-layer / spec-template / Arriving-Dismissals-Two-way (135)
- Motion-rule extra names (151)
- Motion omitted-unattributed-curves-not-promoted / B3 five-kind gate (153)
- Font evidence-class extra names including fallbacks-not-substitute (161)
- Family font-use extra names (168)
- Type-role ratio-versus-size-local / 1.50-not-the-prose-1.5 / px-companions-local (176)
- Type-rule extra names including weight-jump-primary-hierarchy / hangul-first-body / declarative-brand-forward-scale / compresses-on-smaller-viewports-while-keeping-the-weight / notch-heavier-so-chrome-reads-as-interactive (178)
- Type-role dark-hero white text unmerge (193)
- Assets favicon-not-Google-lookup (197)
- Assets screenshots-no-shadow image behavior (201)
- Capture-record graph-not-adopted / philosophy-layer (208)
- Capture-record campaign-surface-not-marketing-CTA-paints / table characterizations named before table (210)
- Capture-record table characterizations extra names (224)
- Contact CTA field-note including right-aligned-in-sticky-white-75px-nav-not-global-alignment (247)
- Contact CTA local recipe sticky-white-nav-one-local-relationship (248)
- Ad-Center CTA field-note (274)
- Language Toggle field-note (302)
- Secondary Explore field-note (330)
- Secondary Explore local recipe dark-hero-one-local-relationship (331)
- Ghost on Dark field-note (359)
- Feature / Stat Card field-note including §9-only number/label tuple (383)
- Dark Slate Card field-note (399)
- Header / Navigation band parent-surface (411)
- Header local recipe sticky-white-nav-one-local-relationship (412)
- Top Nav Observed captured-variant-not-click-transition (424)
- Top Nav field-note including sticky-white-nav-right-aligned-CTAs-as-one-local-relationship (426)
- Top Nav additional captured-variant (438)
- Goal Filter Pill Observed captured-variant-not-click-transition (455)
- Goal Filter Pill field-note (457)
- Goal Filter Pill additional captured-variant (469)
- Layout airy / color-band / round-rhythm extra names including despite-being-a-data-performance-product (476)
- Layout §9-only dark-hero mixed pair (480)
- Layout recorded-span / collapsing extras / image-behavior, limiter-precedes-table (488)
- Layout collapsing / image / touch-target adjacent limiter (496)
- Content Observed citation-character mission-framed / positioning (509). `social-proof-as-metric-cards` is not a parenthetical on the Observed strings.
- Content empty/loading as state-contract (515)
- Content first-party blog quote citation-character (519)
- Content derived voice extra names including tone-table labels / forbidden-register items (523)

Left unqualified as first-party or observed-technical: Buzzvil product-surface identity and catalog homepage `https://www.buzzvil.com`; live-inspect URLs; YAML token measurements and primitive types button / tab / card; `box-shadow: none`; duration/easing table values; Type role rows; B1 generic-Focus notes (228); B3 five-kind gate (second half of 153); Core C1/C2/C3 capture-record policy and per-control C2 omission / C4 kind-omission notes; Governance controlled copy; Named gaps inventory.
