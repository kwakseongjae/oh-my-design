# Accupass provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/accupass/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | accupass |
| name | Accupass |
| country | TW |
| category | consumer-tech |
| homepage | https://www.accupass.com |
| primary_color | `#00aaf5` |
| logo | favicon `https://www.google.com/s2/favicons?domain=accupass.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-10 |
| added | 2026-06-10 |

Catalog `primary_color` `#00aaf5` is multi-destination (E2a): this identity ledger, Scope observed-values, Distinctive, capture-bound tag-shadow chip, Foundations Accu Blue, Foundations Organizer Link not-Accu-Blue, capture-record Success “Add To Calendar”, Ask ACCUPASS Background, Category Tag (Blue) Background, Event Card date line, and Inline Action Link. Catalog homepage `https://www.accupass.com` is this identity ledger + portable Experience Scope + Surfaces/Sources/Tier 1 (E2a).

Catalog logo metadata is a Google favicon lookup, not a captured first-party mark. The literal URL `https://www.google.com/s2/favicons?domain=accupass.com&sz=128` is this identity ledger only (provenance-only). Portable Typography & Assets holds the URL-free first-party-mark boundary sentence, not the URL string. Named gaps has no first-party-mark sentence (E2a: URL destination and URL-free boundary destinations are separate; Named gaps is not a destination). **[SUPERSEDED 2026-08-24 wave7 ledger sync — prior sentence listed Named gaps as a URL-free first-party-mark destination.]**

YAML `tokens.source` is `live-extract` (A1c) — provenance-only type/source field. YAML has no `ds.type`. None is invented.

Token note from source: “Blue family is intentionally multi-step: #00aaf5 (category/service accent), #0088d2 (active nav/brand), #2ab3fc (header CTA), #009ce6 (More pill), register CTA runs a #3e97d3→#1074cc gradient. Pink #ff93c2 is the secondary accent for offline-event tags and notices.” Dual destination (E2a): this identity note and portable Foundations Semantic unmerged-role / stepped-blue paragraph.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-10 |
| added | 2026-06-10 |
| tokens.extracted | 2026-06-10 |
| live inspect (playwright getComputedStyle) | 2026-06-10 |
| blog voice samples fetched | 2026-06-10 |

Conflicts unresolved: none.

Verified note from source footer: 2026-06-10. The source footer does not contain `(omd:migrate)`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product | https://www.accupass.com | 2026-06-10 |
| event-detail | product | https://www.accupass.com/event/2605092145291488451008 | 2026-06-10 |
| blog | editorial | https://blog.accupass.com | 2026-06-10 |

Verification product URLs (`https://www.accupass.com` and `https://www.accupass.com/event/2605092145291488451008`) are dual-destination: portable Experience Scope and this ledger (E2a). Blog URL `https://blog.accupass.com` is dual portable Scope (editorial-surface boundary) + this ledger Surfaces/Sources/Tier 1/Proof (E2a). Quoted Content samples are tagline/titles without that URL. Narrative press URLs are provenance-only; unique public-history facts from those pages are in portable Experience Scope (E2a: facts dual, URLs provenance-only).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.accupass.com | 2026-06-10 |
| event-live | product-surface | https://www.accupass.com/event/2605092145291488451008 | 2026-06-10 |
| blog-live | editorial | https://blog.accupass.com | 2026-06-10 |
| crossing | founder-interview | https://crossing.cw.com.tw/article/15332 | cited in source HTML comment |
| businesstoday | press | https://www.businesstoday.com.tw/article/category/154687/post/201912120034 | cited in source HTML comment |
| 104bravo | press | https://blog.104.com.tw/104bravo-accupass-founder/ | cited in source HTML comment |
| meet-bnext | press | https://meet.bnext.com.tw/articles/view/41647 | cited in source HTML comment |

### Tier 1

- https://www.accupass.com (homepage, live inspect)
- https://www.accupass.com/event/2605092145291488451008 (event detail, live inspect)
- https://blog.accupass.com (ACCUPASS 生活誌 — official blog; voice samples)

### Tier 2 (no usable record)

- https://getdesign.md/accupass — 404 “No designs found”; no values used
- https://styles.refero.design/?q=accupass — no matching results; no values used

### Narrative (not interface tokens)

- https://crossing.cw.com.tw/article/15332 (換日線 founder interview)
- https://www.businesstoday.com.tw/article/category/154687/post/201912120034 (今周刊 — bankruptcy-contemplation story)
- https://blog.104.com.tw/104bravo-accupass-founder/ (104掌聲 profile)
- https://meet.bnext.com.tw/articles/view/41647 (Meet創業小聚)

Public-history facts (謝耀輝 + 羅子文 leaving engineering careers; Hsieh as Foxconn Shenzhen software engineer; AccuSeats 2009 → Accupass Taiwan 2012 pivot; 活動行 China 2013; operator Accuvally Inc. 盈科泛利股份有限公司; mission 壯大亞洲活動生態圈; events as a third space beyond home/work and Accupass as regional organizer–audience infrastructure; NT$200M raise; birthday bankruptcy contemplation; long-term versus quick-money; hundreds of thousands of events) are in portable Experience Scope under the public-history B2a limiter. They do not convert press URLs into UI tokens. Dual: portable Scope + this Narrative (E2a). The source HTML comment states the narrative paraphrases rather than quotes, except Hsieh’s long-term-thinking sentiment, which is paraphrased from the 換日線/104 interviews.

## Claim ledger

Claims use YAML anchors from the source: `home` = homepage live inspect / 2026-06-10; `event-detail` = event-detail live inspect / 2026-06-10. Token extraction is `live-extract` (2026-06-10). `components_harvested: true`.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.brand | home |
| tokens.colors.cta-header | home |
| tokens.colors.cta-pill | home |
| tokens.colors.gradient-start / gradient-end | event-detail |
| tokens.colors.link-organizer | event-detail |
| tokens.colors.accent-pink / pink-surface | event-detail |
| tokens.colors.canvas / surface | home |
| tokens.colors.ink | event-detail |
| tokens.colors.heading / body / muted / faint / hairline | home |
| tokens.colors.footer-dark / footer-subtitle / on-dark / on-primary | home |
| tokens.typography.family.sans / fallback | home |
| tokens.typography.event-title.size / weight / lineHeight / use | event-detail |
| tokens.typography.section.size / weight / lineHeight / use | home |
| tokens.typography.footer-head.size / weight / lineHeight / use | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.body-lg.size / weight / lineHeight / use | event-detail |
| tokens.spacing.xs / sm / md / base / xl / xxl | home |
| tokens.rounded.xs / sm / md / lg / pill / full | home |
| tokens.shadow.card | home |
| tokens.shadow.tag-tinted | home |
| tokens.components.button-create-event.* | home |
| tokens.components.button-register.* | event-detail |
| tokens.components.button-more.* | home |
| tokens.components.button-service.* | home |
| tokens.components.badge-category-blue.* | home |
| tokens.components.badge-category-pink.* | event-detail |
| tokens.components.badge-keyword-chip.* | event-detail |
| tokens.components.card-event.* | home |
| tokens.components.nav-tab.* | home |

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true`
- YAML has no `ds.type` / `ds.name` / `ds.url`
- Interaction: source HTML comment attributes token-level claims in §1–9 to playwright getComputedStyle on the two product URLs (blue family `#0088d2` / `#2ab3fc` / `#009ce6` / `#00aaf5`, register gradient `#3e97d3`→`#1074cc`, pink `#ff93c2`, card 16px radius + `rgba(0,0,0,0.1) 0 2px 8px` shadow, tinted tag shadows, Noto Sans/Microsoft JhengHei stack, 23px/600 section H2, 32px/600 event H1, footer `#1a1f23`)
- Voice samples (§10): blog tagline and post titles fetched verbatim from https://blog.accupass.com (2026-06-10); homepage section headings observed live
- Uncaptured hover/pressed/`focus-visible` visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Create Event / More loading/error/success remain role-based (organizer entry CTA; section continuation). Register Now keeps loading/error applicable and success not-applicable (confirmation view). Ask ACCUPASS loading/error/success applicability is omitted: source names the footer support button; exact destination/request/outcome unresolved (C2)
- Channel Tab loading/error/success remain grouping-selection role-based. Carousel Arrow loading/error/success remain pager role-based
- Event Card, Keyword Chip, Inline Action Link, and Organizer Link: Kind: interactive from source §8 / §4; loading/error/success omitted (exact mapping unresolved). Category Tag (Blue) and Category Tag (Pink): Kind: non-interactive (source §8 display-only metadata; tap targets route through the parent card); state-applicability map omitted. Notice Pill and Notice Banner: kind and state-applicability maps still omitted (C4). `Type: badge` / `Type: card` kept where YAML records them. Carousel Arrow / Notice Pill / Inline Action Link / Organizer Link have no YAML `type`. **[SUPERSEDED 2026-08-24 wave7 ledger sync — prior note listed Event Card / Category Tag / Keyword Chip / Inline Action Link / Organizer Link kind+map as omitted.]**
- YAML `nav-tab.disabled` `#b5bac1 label` and body Inactive `#b5bac1` are both preserved; `#b5bac1` is not used as a disabled visual treatment
- YAML `button-register.bg` `#1074cc` and body linear-gradient 131deg `#3e97d3` → `#1074cc` are both preserved; they are not merged (A4)
- YAML card shadow `rgba(0,0,0,0.1) 0px 2px 8px 0px` and body `rgba(0,0,0,0.1) 0px 2px 8px` are both preserved. YAML tag-tinted `rgba(0,170,245,0.3) 0px 2px 4px 0px` and body `rgba(0,170,245,0.3) 0px 2px 4px` are both preserved
- YAML unitless `lineHeight` 1.50 / 1.33 kept as ratios (A1a)
- Primitive types preserved per component: button ×4, badge ×3, card, tab (A1b)
- Catalog Google favicon literal URL is provenance identity only. URL-free first-party-mark boundary sentence is portable Assets only. Named gaps has no first-party-mark sentence (E2a). **[SUPERSEDED 2026-08-24 wave7 ledger sync — prior note listed Named gaps as a URL-free destination.]**
- Token note is dual this identity note + portable Foundations Semantic unmerged-role / stepped-blue (E2a)
- Source §13 personas are fictional archetypes informed by publicly observable Accupass user segments (attendees, family event-goers, meetup organizers, arts producers). Names are illustrative; they do not refer to real people. Portable Audience keeps the exclusion boundary only. Names, ages, cities, employers, and biographies are not copied here (D2). Primary tasks come from homepage catalog / Register Now / Create Event evidence, not §13
- Unattributed easing *curves* omitted from portable Foundations: `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`; `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` (matches the legacy spec template `ease-exit`). Token names `ease-standard` / `ease-enter` / `ease-exit`, their uses, duration tokens, signature-motion prose, and `prefers-reduced-motion: reduce` remain in portable Motion as source-stated/uncomputed labels. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion (E2b: omitted curves stored in this ledger)
- Interpretive claims in the source HTML comment (examples given there: “saturation tracks commitment”, “marketplace density as a survival-shaped aesthetic”) are editorial readings connecting observed design to the company’s public history, not sourced Accupass statements. Adjacent complete B2a sites for those readings and the other derived sentences are the Derived inventory below, not a Principles-only subset (B2/B2a)
- No `[FILL IN]` placeholders exist in the source; none are emitted

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Accupass-authored or a separately published UI specification`) on: Scope blog-as-editorial-not-token-sheet (11); Scope public-history-as-narrative (13); Scope visual-character / marketplace-density / conversion-proximity (15); Audience no-invented-personas / fictional-archetypes-not-tasks (28); Distinctive list-head (multi-step / saturation / pink-counterweight / soft 16px-radius / mixed radius vocabulary / near-black-icy); Type-scale Footer Link `#f5faff` / 14px unmerged from Body/UI and Footer Subtitle; Event Card / Keyword Chip / Inline Action Link / Organizer Link Kind: interactive; Category Tag Kind: non-interactive (source §8 display-only); numbered Principles 1–5 including UI implications (45); capture-bound application (53); Avoid (66); Gradient YAML-bg vs rendered-gradient unmerged (89); Organizer Link not Accu Blue (90); On-Dark Ice / on-primary unmerged (112); Semantic unmerged-role / stepped-blue (114); Spacing YAML-unitless-versus-px (118); Shape not-a-universal-radius (129); Elevation shadow-philosophy / YAML-vs-body-shadow unmerged (140); Motion carousel-first / no-spring / color-delegated-play (160); Font evidence-class application (170); Family font-use boundary (185); Type-role ratio-versus-size-local (191); Type-scale density / 600-ceiling / footer-300 / CJK-safe (203); Assets Google-favicon identity-not-captured (207); Assets imagery-boundary (209); Capture-record no-generic-ticketing-pattern (231); Ask ACCUPASS unmerged `#f5faff` (326); Channel Tab YAML-disabled vs body-Inactive unmerged (369);  Organizer Link field-note unmerged `#2ea3f2` (472); Layout marketplace-density / cards-carrying-structure / footer-hard-stop (477); Layout breakpoints as source-stated notes (489); Layout image-behavior / recorded-control-sizes (495); Content voice-register / audience-split / citation-character (504); Content forbidden-register (521); Content no-synthetic-voice (523). Reconstruction-boundary exemption not used.
