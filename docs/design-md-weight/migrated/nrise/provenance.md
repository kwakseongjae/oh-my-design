# NRISE (WIPPY) provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the nrise migration. Canonical source remains `web/references/nrise/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | nrise |
| name | NRISE (WIPPY) |
| display_name_kr | 엔라이즈 (위피) |
| country | KR |
| category | consumer-tech |
| homepage | https://www.nrise.net/ |
| primary_color | `#ff0056` |
| logo | type `favicon`, slug `https://opening-attachments.greetinghr.com/20230601/02c9543a-74ed-4592-853f-17b2adc07c5d/nrise_logo_launchericon2.png` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

`components_harvested: true` is kept as a value, not paraphrased away (A1c).

**Token note, quoted verbatim from the source frontmatter:**

> primary = live WIPPY product CTA pink (#ff0056); the system is otherwise monochrome — a dark ink ladder (#222222 headings, #000000 pure black, #212529/#212126 deep neutrals) on white (#ffffff). Near-shadowless flat surfaces.

Every value inside that note is carried separately in the portable document.

**Logo decision.** The `logo.slug` above is hosted on `opening-attachments.greetinghr.com`. The sibling records it as a brand launcher icon referenced as a preload image on nrise.net (HTTP 200, 512×512 PNG RGBA, 6741B), selected after a Google favicon-proxy candidate was rejected as below the 450B threshold. The URL is kept here and named in the portable Assets subsection as the catalog's selected launcher-icon pointer, not as a NRISE-hosted brand file. The sibling states that getdesign.md / refero.design / Google favicon are explicitly not counted toward the KR brand-owned requirement.

## Freshness

| Event | Date |
|---|---|
| added | 2026-07-02 |
| verified | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| surfaces inspected | 2026-07-02 |

Conflicts unresolved: none (source footer: "none (Tier 2 empty for this KR brand; all values Tier 1 live-inspected)").

The source footer's producer string: `omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate-home | https://www.nrise.net/ | 2026-07-02 |
| career | wippy-product-career | https://career.nrise.net/ko/wippy | 2026-07-02 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.nrise.net/ | 2026-07-02 |
| career-live | product-surface | https://career.nrise.net/ko/wippy | 2026-07-02 |
| github-org | brand-owned | https://github.com/nrise | 2026-07-02 |
| github-pages | brand-owned | https://nrise.github.io/ | 2026-07-02 |

### Tier 1 (source footer)

- https://www.nrise.net/
- https://career.nrise.net/ko/wippy
- https://github.com/nrise
- https://nrise.github.io/

GitHub organization and GitHub Pages are brand-owned country sources. They are not token surfaces in this pass. Token-level claims attach to the two live-inspected web surfaces.

### Tier 2 (attempted; no usable record)

- https://getdesign.md/nrise (0 files — not covered)
- https://styles.refero.design/?q=nrise and `?q=wippy` (generic grid only — no brand-specific match)

Tier 2 records are not interface-token sources. No value was used.

## Claim ledger

Every value below traces to `web/references/nrise/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` `#ff0056` | YAML; §2 WIPPY Pink | Foundations → Semantic color |
| `tokens.colors.ink` `#222222` | YAML; §2 Ink | Foundations → Semantic color |
| `tokens.colors.ink-pure` `#000000` | YAML; §2 Pure Black | Foundations → Semantic color |
| `tokens.colors.ink-nav` `#212429` | YAML; §2 Nav Ink | Foundations → Semantic color |
| `tokens.colors.neutral-900` `#212529` | YAML; §2 Neutral 900 | Foundations → Semantic color |
| `tokens.colors.neutral-850` `#212126` | YAML; §2 Neutral 850 | Foundations → Semantic color |
| `tokens.colors.section-dark` `#111111` | YAML; §2 Section Dark | Foundations → Semantic color |
| `tokens.colors.canvas` `#ffffff` | YAML; §2 Pure White | Foundations → Semantic color |
| `tokens.colors.surface` `#fafafa` | YAML; §2 Surface Grey | Foundations → Semantic color |
| `tokens.colors.muted` `#767676` | YAML; §2 Muted Grey | Foundations → Semantic color |
| `tokens.colors.muted-alt` `#8c8c8c` | YAML; §2 Muted Alt | Foundations → Semantic color |
| `tokens.colors.on-dark` `#ffffff` | YAML; §2 On Dark | Foundations → Semantic color (unmerged from canvas) |
| `tokens.typography.family.sans` Pretendard | YAML; §3 Font Family | Typography & Assets → Family |
| `tokens.typography.display-hero` 48 / 700 / 1.50 | YAML; §3 WIPPY Hero | Typography & Assets → Type roles (A1a: unitless `1.50` kept; source 72px / 3.00rem kept beside it) |
| `tokens.typography.section` 38 / 700 / 1.35 | YAML; §3 Corporate Section | Typography & Assets → Type roles (`1.35` / 51.3px / 2.38rem). YAML use includes `NRISE가 세상에 전하는 가치` |
| `tokens.typography.section-sm` 36 / 700 / 1.33 | YAML; §3 Product Section | Typography & Assets → Type roles (`1.33` kept unitless; no px equivalent in source) |
| `tokens.typography.subheading` 23 / 700 / 1.35 | YAML; §3 Sub-heading | Typography & Assets → Type roles (`1.35` / 31px / 1.44rem) |
| `tokens.typography.logo` 20 / 700 / 1.50 | YAML; §3 Logotype | Typography & Assets → Type roles (`1.50` / 30px / 1.25rem) |
| `tokens.typography.eyebrow` 19 / 400 / 1.50 | YAML; §3 Eyebrow | Typography & Assets → Type roles (`1.50` / 28.5px / 1.19rem) |
| `tokens.typography.body` 16 / 400 / 1.50 | YAML; §3 Body | Typography & Assets → Type roles (`1.50` / 24px / 1.00rem). YAML use `CTA labels` kept beside §3 `button labels` |
| `tokens.typography.nav` 14 / 600 / 1.50 | YAML; §3 Nav Link | Typography & Assets → Type roles (`1.50` / 21px / 0.88rem) |
| `tokens.spacing.xs` 4 | YAML; §5 Scale | Foundations → Spacing |
| `tokens.spacing.sm` 8 | YAML; §5 Scale | Foundations → Spacing |
| `tokens.spacing.md` 12 | YAML; §5 Scale | Foundations → Spacing |
| `tokens.spacing.base` 16 | YAML; §5 Scale | Foundations → Spacing |
| `tokens.spacing.lg` 24 | YAML; §5 Scale | Foundations → Spacing |
| `tokens.spacing.xl` 32 | YAML; §5 Scale | Foundations → Spacing |
| `tokens.spacing.xxl` 48 | YAML; §5 Scale | Foundations → Spacing |
| `tokens.spacing.section` 64 | YAML; §5 Scale | Foundations → Spacing |
| `tokens.rounded.xs` 4 | YAML; §5 Extra-small | Foundations → Shape (+ Nav Item) |
| `tokens.rounded.sm` 8 | YAML; §5 Small | Foundations → Shape (+ Solid Button) |
| `tokens.rounded.md` 10 | YAML; §5 Medium | Foundations → Shape (+ News Card) |
| `tokens.rounded.lg` 12 | YAML; §5 Large | Foundations → Shape (+ Dark Feature Card) |
| `tokens.rounded.xl` 24 | YAML; §5 XL | Foundations → Shape (+ Floating Top Button) |
| `tokens.rounded.pill` 30 | YAML; §5 Pill | Foundations → Shape (+ home CTAs) |
| `tokens.rounded.jumbo` 48 | YAML; §5 Jumbo | Foundations → Shape |
| `tokens.shadow.none` `none` | YAML; §6 Flat | Foundations → Elevation |
| `tokens.shadow.floating` | YAML (with `0px` spread); §4 / §6 (without trailing `0px` on first layer) | Foundations → Elevation (+ Floating Top Button). Both writings kept |
| `tokens.components.cta-wippy` (`type: button`) | YAML; §4 WIPPY CTA | Components & States → WIPPY CTA (Primary) |
| `tokens.components.cta-dark-pill` (`type: button`) | YAML; §4 Dark Pill CTA | Components & States → Dark Pill CTA |
| `tokens.components.cta-solid` (`type: button`) | YAML; §4 Solid Button | Components & States → Solid Button (Product surface) |
| `tokens.components.nav-item` (`type: button`) | YAML; §4 Nav Item | Components & States → Nav Item |
| `tokens.components.floating-top` (`type: button`) | YAML; §4 Floating Top Button | Components & States → Floating Top Button |
| `tokens.components.news-card` (`type: card`) | YAML; §4 News Card | Components & States → News Card (White) |
| `tokens.components.dark-card` (`type: card`) | YAML; §4 Dark Feature Card | Components & States → Dark Feature Card |
| `tokens.components.eyebrow-tag` (`type: badge`) | YAML; §4 Eyebrow Label | Components & States → Eyebrow Label |
| §3 four typography principles | §3 Principles | Typography & Assets → Typography rules |
| §5 Whitespace Philosophy | §5 | Layout & Platforms |
| §6 three-row elevation table | §6 | Foundations → Elevation |
| §7 Do / Don't | §7 | Experience → Application rules / Avoid |
| §8 breakpoints / touch / collapsing / image | §8 | Layout & Platforms → Responsive behavior |
| §10 voice, tone table, three verbatim samples, forbidden register | §10 | Content & Locales |
| §11 two-product narrative, press headline 2026.04.08, founding year not asserted, refuses/embraces closing | §11 | Experience → Scope (fenced as brand narrative; last sentence kept). Verbatim lines kept: "나를 표현하고 상대를 발견하는 공간"; "같은 관심사를 가진 동네 친구와의 만남"; "건강한 습관을 형성하여 삶의 변화를 제공합니다"; 콰트 (Quat); "더 나은 연결을 위해 안전을 최우선의 가치로" |
| §12 five principles with UI implications | §12 | Experience → Principles |
| §14 nine-row state table | §14 | Components & States → State record. Includes the source prohibition of a bare "오류가 발생했습니다" and of a field message that is just "필수" |
| §15 durations / easing roles / motion rules / reduced-motion | §15 | Foundations → Motion (curve values omitted; see Omission ledger) |
| §1 Key Characteristics | §1 | Experience → Distinctive traits |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | §4 footer block | This file — Freshness, Sources |

## Capture selectors

The source does not record `data-omd-capture` indices. Pointers below are the sibling's raw-sample labels, held here as evidence pointers, not as portable selectors.

| Component | Pointer |
|---|---|
| WIPPY CTA | sibling: pink product CTA "더 알아보기" on https://www.nrise.net/ |
| Dark Pill CTA | sibling: dark product CTA "더 알아보기" on https://www.nrise.net/ |
| Solid Button | sibling: (career) primary button "바로가기" |
| Nav Item | sibling: nav button (inactive) and nav button "CAREER" (active) |
| Floating Top Button | sibling: (career) floating "TOP" button |
| News Card | source §4 News Card (White); sibling news list item sample is type, not a card-radius pointer |
| Dark Feature Card | sibling: (career) dark feature card |
| Eyebrow Label | sibling: eyebrow label "MISSION" / "HISTORY" / "NEWS" |

The portable body keeps each harvested component's YAML `use` string; this table is the ledger copy (E2a).

## Sibling verification file (E2)

`web/references/nrise/.verification.md` exists beside the legacy source and **is adopted** as the evidence record for this migration. Adoption is at the evidence level only. **No portable token was promoted from the sibling.** Sibling-only structural measurements were not promoted as token facts (B1).

### Sibling-only values — held here, absent from the portable body as tokens

| Value | Sibling record | Why it stays here |
|---|---|---|
| body `line-height: normal` | raw sample for `body` | The legacy body role records unitless `1.50` (24px). The portable Type roles keep the source form. |
| nav logotype color `rgba(0, 0, 0, 0.85)` | raw sample for H1 "(주)엔라이즈" | The legacy logotype role does not assign that rgba as a token. Heading ink stays `#222222`. |
| H3 line-height `31.05px` | raw sample for "편안한 만남을 통해 일상의 행복을 전달합니다" | The legacy Sub-heading row records `1.35 (31px)`. The portable body keeps the source 31px writing. |
| compound radius `0px 0px 20px 20px` ×1 | homepage radius frequency | Not a YAML `tokens.rounded` key. Not promoted. |
| Frequency counts | bg `#ffffff` ×6, `#000000` ×5, `#111111` ×2, `#222222` ×1, `#ff0056` ×1, `#fafafa` ×1, `#212529` ×1; text `rgb(0,0,0)` ×451, `#222222` ×48, white ×20, `#767676` ×9, `#8c8c8c` ×4; radius `10px` ×9, `48px` ×8, `4px` ×4, `30px` ×2, `24px` ×1 | Measurement detail, not contract. |
| Viewport / method settle | playwright, Chrome UA, `waitUntil: domcontentloaded`, cookie/modal dismissal | Capture context, not a portable width token. |

### Sibling-only published strings — held here byte-exact (A5)

A5 covers strings the verification sibling names as measured copy. The portable body carries the labels the legacy body itself carries. These lines are mentions of disposition, not portable use of a new token.

- `(주)엔라이즈` — nav logotype H1
- `(주)엔라이즈 채용` — `document.title`

Third-party strings the source itself excludes, recorded because the source recorded the attempts, and excluded from evidence for the same reason. These are not NRISE strings and are not needles for copy preservation.

- `nrise — 0 DESIGN.md files | getdesign.md` — getdesign.md page title
- `Browse 2,000+ AI-readable design systems` — refero generic landing hint

`TOP` is not sibling-only: the source Don't list names "the floating TOP button". It is dual: portable Avoid + this ledger's raw-sample transcription of the career floating control.

### Raw samples (from the sibling)

Kept here because they are per-element evidence, not portable contract.

- `body` — `font-family: Pretendard, -apple-system, system-ui, ...`; `color: rgb(0, 0, 0)` (`#000000`); `font-size: 16px`; `line-height: normal`
- nav logotype H1 "(주)엔라이즈" — `20px` / `700` / `rgba(0, 0, 0, 0.85)` / `line-height: 30px`
- nav item span "HOME" / "PRODUCT" / "CULTURE" — `14px` / `600` / `rgb(33, 36, 41)` (`#212429`) / `line-height: 21px`
- nav button (inactive) — bg `#ffffff`; color `#212429`; radius `4px`; padding `5.5px 12px`; height `32px`
- nav button "CAREER" (active) — bg `#222222`; color `#ffffff`; radius `4px`; height `32px`
- section H2 "NRISE가 세상에 전하는 가치" — `38px` / `700` / `line-height: 51.3px` / `#222222`
- H3 "편안한 만남을 통해 일상의 행복을 전달합니다" — `23px` / `700` / `line-height: 31.05px` / `#222222`
- eyebrow "MISSION" / "HISTORY" / "NEWS" — `19px` / `400` / `#767676` / `line-height: 28.5px`
- pink CTA "더 알아보기" — bg `#ff0056`; color `#ffffff`; radius `30px`; padding `8px 16px`; height `40px`; label `16px / 700`
- dark CTA "더 알아보기" — bg `#000000`; color `#ffffff`; radius `30px`; padding `8px 16px`; height `40px`
- (career) hero H1 "위피, 소셜 디스커버리 1위 서비스" — `48px` / `700` / `line-height: 72px` / `#222222`
- (career) section H2 "나를 표현하고 상대를 발견하는 공간" — `36px` / `700` / `#222222`
- (career) primary "바로가기" — bg `#000000`; color `#ffffff`; radius `8px`; padding `10.5px 24px`; height `48px`; font `16px / 400`
- (career) floating "TOP" — bg `#212529`; color `#ffffff`; radius `24px`; height `48px`; `box-shadow: rgba(0,0,0,0.04) 0px 1px 2px 0px, rgba(0,0,0,0.06) 0px 8px 24px`
- (career) dark feature card — bg `#212126`; radius `12px`
- news list item "콰트·위피 눈부신 활약…엔라이즈, 2년 연속 흑자 달성" · date "2026.04.08" — `16px` / `400` / `line-height: 24px` / `#222222`
- `box-shadow: none` across hero, nav, headings, and section CTAs

### Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary action color | `#ff0056` (WIPPY pink CTA) | — | — | Tier 1 (live DOM) |
| Heading/ink color | `#222222` | — | — | Tier 1 |
| Body font | Pretendard | — | — | Tier 1 |
| CTA radius | 30px pill (home) / 8px (career primary) | — | — | Tier 1 — both retained as distinct variants |
| Shadow | none (flat); floating TOP btn only | — | — | Tier 1 |

No unresolved conflicts.

## Omission ledger

| Item | Status |
|---|---|
| §13 Personas — 3 fictional archetypes (name / age / city fields present in the source) | Deleted. The source's own §13 header and its closing note both state that the archetypes are fictional and that the names are illustrative. Identifiers are not re-hosted here (D2, D2a). Experience `Audience` keeps only the source header's own publicly observable segment wording, not biographies. |
| §15 easing curve values — `cubic-bezier(0.2, 0.6, 0.25, 1)` (`ease-enter`), `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`), `cubic-bezier(0.25, 0.1, 0.25, 1)` (`ease-standard`) | Removed from the portable body as unsourced curves; kept here verbatim. The sibling's method and its raw samples record no transition, animation, duration, or easing observation, and `cubic-bezier(0.4, 0.0, 1, 1)` is the example value that `spec/omd-v0.1.md` carries and defines as a non-brand implementation default that must not be moved into a reference. The roles, uses, durations, signature motions, and reduced-motion rule stay in the portable body. |
| §9 Agent Prompt Guide — example component prompts and iteration steps | Deleted as a tool-facing restatement. Every value it named (pink `#ff0056` 30px / `8px 16px` / 40px / 16px 700 "더 알아보기"; heading `#222222`; body `#000000`; nav `#212429`; `#fafafa` bands; dark card `#212126` 12px; Pretendard 700/400/600; home pills vs 8px solid; dark ladder; Latin-caps eyebrow at 19px) already has a Foundations / Components / Typography slot. |
| Unsourced motion curve promotion | B3 five-kind promotion gate is in portable Motion and Named gaps. |

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope, first paragraph | Reading the two URLs as this contract's token surfaces; keeping every value attached to the surface that established it |
| Experience Scope, second paragraph | Readings of the captured layer as confident, editorial, and almost aggressively monochrome; of the type as Korean-modern; of the Latin eyebrows as a magazine-like rhythm; of the design getting out of the way; of a flat, fast, mobile-native aesthetic; of a young Korean app studio rather than a legacy corporate site |
| Experience Scope, third paragraph | Classifying the two-product positioning, the dated press headline, and the non-assertion of founding year and leadership as narrative context that does not by itself supply interface tokens; reading the company's copy as emotional-benefit framing rather than technical framing; reading the safety line as a deliberate stance for a trust-sensitive category; reading the dated press headline as a two-product profitability narrative |
| Experience Scope, fourth paragraph | The refuses/embraces pairing |
| Primary tasks | Selecting the four captured-surface outcomes as primary tasks, and refusing the persona section |
| Audience | Dropping fictional archetypes rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading the source header's own publicly observable segment wording as this product's audience |
| Distinctive traits | Classifying the list as a restatement of the source Key Characteristics, and the groupings inside it |
| Principles | The five stems plus UI-implication items as a reconstruction pairing |
| Application rules | Treating the source Do list as capture-bound application, reasons included |
| Avoid | Treating the source Don't list as reconstruction prohibitions, reasons included |
| Semantic color | Pairing hexes to token-set paths; calling `#ff0056` the single action color; calling `#222222` softer than pure black with a premium weight; calling `#212429` a hair cooler than heading ink; keeping `tokens.colors.canvas` `#ffffff` unmerged from `tokens.colors.on-dark` `#ffffff` |
| Spacing | Keeping each number on its own key path rather than treating a shared numeral as the same token; reading generous vertical rhythm as editorial spacing over density |
| Shape | Keeping the seven rounded steps as seven keys, distinct from spacing and from control heights; reading pill 30px as the corporate-home CTA and 8px as the sharper product-surface solid button |
| Elevation | Reading `box-shadow: none` plus the one floating two-layer drop as a near-shadowless, flat system that reaches for pink or a dark block, never elevation; keeping both the YAML floating-shadow writing (trailing `0px` spread on the first layer) and the Level 2 / component writing (without that trailing `0px`) rather than replacing one with the other |
| Motion, opening | Treating durations, easing roles, signature motions, and motion rules as a philosophy-layer contract outside the live color/type/spacing/radius/shadow attribution |
| Motion, easing-role omission | Treating the source's three curve values as untraceable and omitting them rather than promoting them as NRISE motion tokens; requiring the five-kind per-component computed gate before any curve promotion |
| Font evidence, head | Sorting evidence classes; Pretendard as live computed family rather than a NRISE-owned exclusive face; fallbacks not a second brand face; no system-face substitution called Pretendard |
| Font evidence → Official product-use | Classifying official product-use as no published type token and no separately issued specimen |
| Font evidence → Official distributed asset | Reading Pretendard as an upstream face rather than a NRISE-exclusive distributed family |
| Font evidence → Declared-only | Classing `-apple-system`, `system-ui`, `Apple SD Gothic Neo`, `Noto Sans KR`, and `Malgun Gothic` as fallbacks, not the brand face |
| Font evidence → License | Classifying Pretendard as an upstream face with no NRISE font-license notice in this record |
| Family | Fallback prohibition; refusing to replace Pretendard with a system substitute |
| Type roles | Keeping YAML unitless `1.50` / `1.35` / `1.33` beside the source's own px and rem writings; keeping each YAML `use` string beside the hierarchy-table note |
| Typography rules | Reading the measured metrics as the source's four typography principles |
| Assets | Treating the greetinghr-hosted launcher-icon URL as the catalog's selected pointer rather than as a NRISE-hosted brand file |
| Assets, screenshots | Recording app screenshots and product illustrations as shadowless, consistent with the flat system; prohibiting replacement with invented brand-color decoration |
| Capture record / How applicability is decided | Declaring Core applicability by control meaning; keeping YAML `use` / font / padding / radius / height / active byte forms beside the §4 writings; treating the pink and dark pills and the career solid as destination CTAs, nav items as destination items, and the floating TOP as a scroll action; omitting kind and a state-applicability map where the source supplies no interaction evidence for a container |
| State record | Treating the nine-row state contract as a philosophy-layer system-level record rather than measured per-control observations |
| Layout | Reading the eyebrow → headline → content cadence as editorial spacing over density; reading bands as flat segmentation; reading the pink CTA as the visual anchor of any screen it appears on |
| Layout → Responsive behavior | Treating §8 as source-stated intended behavior rather than a captured cross-viewport pass |
| Content & Locales | Characterizing the voice as warm, human, and reassuring; reading mission lines as emotional-benefit register and WIPPY copy as confident and safety-forward |

## Proof notes

- `tokens.source: live-extract`
- `components_harvested: true`
- Two surfaces inspected 2026-07-02 via playwright `getComputedStyle`
- Unobserved hover / `focus-visible` treatments are omitted rather than marked `not-applicable` for missing observation. Applicability follows control meaning: the pink CTA, dark pill, and career solid are destination controls, so loading / error / success are `not-applicable` on that destination role; nav items are destination items on the same reason; the floating TOP control is a scroll action, so loading / error / success are `not-applicable`. Disabled stays `applicable` on the five interactive `button` controls with treatment omitted except where the system-level pink-fade sentence is restated. News Card and Dark Feature Card omit kind and map (C4). Eyebrow Label is `kind: non-interactive`. State coverage is not claimed complete.
- No focus-visible treatment is asserted anywhere: the source records no `focus-visible` capture (B1).
- GitHub organization and GitHub Pages are brand-owned country sources, not interface-token sources.
- Official narrative facts (two-product span, verbatim positioning, dated press headline) are narrative context, not token sources.
- A published NRISE UI specification is not in this record. The B2a form used in Experience is the catalog default (`not NRISE-authored or a separately published UI specification`) because no first-party design-system document is named.
