# OPENPOINT provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/openpoint/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | openpoint |
| name | OPENPOINT |
| country | TW |
| category | consumer-tech |
| homepage | `https://www.openpoint.com.tw` |
| primary_color | `#8081ff` |
| logo.type | favicon |
| logo.slug | `https://www.openpoint.com.tw/cdn/images/openpoint-logo.png` |
| omd format (source) | 0.1 |
| verified | 2026-06-22 |
| added | 2026-06-22 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected public web surface in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations OPENPOINT Purple / `tokens.colors.primary` in `DESIGN.md`. The hosted PNG slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with an OPENPOINT-hosted PNG on `www.openpoint.com.tw/cdn/images/`. That is a hosted identity file on the inspected surfaces, not a Google s2 proxy.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| added | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| Tier 1 live inspect (source footer) | 2026-06-22 |

The source footer records the verification verbatim as **Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer states: none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | public web, live computed style | `https://www.openpoint.com.tw` | 2026-06-22 |
| style-css | CDN stylesheet | `https://www.openpoint.com.tw/cdn/css/style.css` | 2026-06-22 |

### Tier 1 (as listed in the source footer)

- `https://www.openpoint.com.tw`
- `https://www.openpoint.com.tw/cdn/css/style.css`

### Tier 2

- getdesign.md/openpoint (404 — not listed)
- styles.refero.design/?q=openpoint (0 matches)

Tier 2 data was not used to establish any token or component value.

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names:

> primary = brand purple (#8081ff) used for CTAs, links, borders; teal (#0abbb5) for dates/accent underlines; lavender (#cf7ffa) for premium gradient; 7-ELEVEN red (#e60012) for cookie/alert banner. White (#ffffff) canvas, light-grey (#f3f3f3) card text areas.

## Sibling handling (`web/references/openpoint/.verification.md`)

The sibling exists — confirmed with `find web/references/openpoint -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Issued copy it names that the source body already records is not re-derived from it. One homepage label it records and the source body does not — 「OPENPOINT點數說明」 — is carried in `DESIGN.md` Content as a published string from the same inspected homepage, and is transcribed here.

Its own record, transcribed here:

- Inspected 2026-06-22. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto https://www.openpoint.com.tw networkidle, modal dismissal pass, then getComputedStyle on body, h1/h2, header, buttons/links, event cards, plus CSS source fetch from CDN stylesheet.
- Sources named in the sibling: `https://www.openpoint.com.tw`; `https://www.openpoint.com.tw/cdn/css/style.css`; `https://www.openpoint.com.tw/cdn/css/index.css` (event/card styles). `index.css` is sibling-only as a named URL; it is not promoted to a portable token surface.
- body: `font-family: 微軟正黑體, 新細明體, 蘋果儷黑體, Arial, Helvetica, sans-serif`; `color: rgb(0, 0, 0)`; `font-size: 16px`; `background-color: rgba(0, 0, 0, 0)` (transparent — page bg is white)
- H1 "OPENPOINT優惠活動": `font-size: 28.8px`; `font-weight: 700`; `color: rgb(0, 0, 0)`; `line-height: 60px`; `font-family: 微軟正黑體, 新細明體, 蘋果儷黑體`. YAML `tokens.typography.h1.lineHeight` remains `1.5`; the 60px figure is this sibling computed writing and is not a replacement of that ratio.
- H2 "OPENPOINT推薦": `font-size: 22.4px`; `font-weight: 700`; `color: rgb(255, 255, 255)`; `height: 50px`
- H2 "累積點數": `font-size: 22.4px`; `font-weight: 700`; `color: rgb(255, 255, 255)`
- Nav dropdown item "OPENPOINT點數說明": `background-color: rgba(0, 0, 0, 0)`; `color: rgb(255, 255, 255)`; `border-radius: 8px`; `padding: 10px 15px`; `height: 38px`; `font-size: 16px`; `font-weight: 900`. This computed background is sibling-only and is not promoted into the portable dropdown record.
- Event card (A.event-item): `background-color: rgb(255, 255, 255)`; `box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 5px 0px`; `height: 247px`; `font-size: 16px`
- Event text area (DIV.event-text): `background-color: rgb(243, 243, 243)`; `color: rgb(0, 0, 0)`
- Event-btn "查看更多優惠": `color: rgb(0, 0, 0)`; `padding: 8px 24px`; `height: 33px`; `font-size: 16px`; `font-weight: 900`
- Header: `background-color: rgb(255, 255, 255)`; `color: rgb(0, 0, 0)`; `height: 100px`
- Footer: `background-color: rgb(243, 243, 243)`; `height: 147px`
- bgFreq scan: `rgb(255, 255, 255)` ×6, `rgb(243, 243, 243)` ×5, `rgb(72, 72, 78)` ×4 (`#48484e` overlay), `rgb(128, 129, 255)` ×1 (`#8081ff` button bg)
- fgFreq scan: `rgb(0, 0, 0)` ×248, `rgb(255, 255, 255)` ×23, `rgb(10, 187, 181)` ×4 (`#0abbb5`), `rgb(207, 127, 250)` ×2 (`#cf7ffa`), `rgb(230, 0, 18)` ×2 (`#e60012`)
- CSS `.date { color: #0ABBB5; font-weight: 900; }` from index.css. Portable teal stays `#0abbb5`; the uppercase CSS spelling is this sibling writing.
- CSS `.t-purple { color: rgb(128, 129, 255); }` — colour alias for `#8081ff` in style.css. Sibling-only class name; not promoted as a token-set key.
- CSS `.cookie-popin { background-color: rgb(230, 0, 18); color: rgb(255, 255, 255); }`
- CSS font for inputs: `"Noto Sans TC", "Open Sans", Arial, "Microsoft JhengHei"`
- CSS gradient: `background: linear-gradient(to right, #cf7ffa, #8081ff)`

## Claim ledger

Claims use the source YAML and the 2026-06-22 live inspect of `home` / `style-css`.

| claim | surface |
|---|---|
| tokens.colors.primary | home + style-css |
| tokens.colors.teal | home (`.date`) + style-css / index.css |
| tokens.colors.lavender | style-css gradient |
| tokens.colors.lavender-mid | style-css |
| tokens.colors.muted-purple | style-css |
| tokens.colors.dark-navy | home overlay (`#48484e`) |
| tokens.colors.error-red | style-css cookie/alert |
| tokens.colors.canvas | home |
| tokens.colors.surface | home (`.event-text` + footer) |
| tokens.colors.surface-light | home member forms |
| tokens.colors.surface-lavender | style-css |
| tokens.colors.on-primary | home on-purple text |
| tokens.colors.ink | home body/headings |
| tokens.colors.placeholder | home inputs |
| tokens.typography.family.display | style-css input/button/select |
| tokens.typography.family.body | home body computed |
| tokens.typography.h1 / h2 / h3 / body / label / small | home |
| tokens.spacing.xs / sm / md / base / lg / xl / section | home |
| tokens.rounded.sm / md / lg / full | home |
| tokens.shadow.card / card-hover | home event-item |
| tokens.components.button-primary | home nav dropdown |
| tokens.components.button-cta | home event-btn |
| tokens.components.event-card | home event-item |
| tokens.components.card-text | home event-text |
| tokens.components.badge-teal | home `.date` |
| tokens.components.nav-link | home top nav |
| tokens.components.dropdown-item | home nav dropdown |
| tokens.components.input-default | home member center |
| tokens.components.gradient-badge | style-css gradient |

## Capture selectors (from source HTML comment and sibling)

| Component | Pointer |
|---|---|
| H1 「OPENPOINT優惠活動」 | live homepage H1; 微軟正黑體 28.8px / 700 / `#000000` |
| H2 「OPENPOINT推薦」 | live homepage H2 on bg-image title-bar; 22.4px / 700 / `#ffffff` |
| Event date `.date` | `color #0abbb5` / `#0ABBB5`; font-weight 900 |
| Event card | `A.event-item`; bg `#ffffff`; shadow `rgba(0, 0, 0, 0.16) 2px 2px 5px 0px`; height 247px |
| Event text area | `DIV.event-text`; bg `#f3f3f3`; padding 16px |
| Event-btn 「查看更多優惠」 | padding `8px 24px`; height 33px; weight 900 |
| Nav dropdown item | radius 8px; padding `10px 15px`; height 38px; weight 900 |
| Header | bg `#ffffff`; height 100px |
| Footer | bg `#f3f3f3`; height 147px |
| Loading | `.loading-circle` spinner; `.loading.fade` opacity 0 / z-index -1 |

## Omission ledger

Disposition only. This table names what was dropped and why. It does not re-host the dropped content as facts (D2a, E2d).

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing recreate-the-control prompts. Values they restated land in Foundations / Typography / Components / Layout. §9-only sentences (event-card title 2-line ellipsis; dropdown 4px gap and dark overlay background; gradient-badge weight 700 and 「OPENPOINT優惠」 labels) land on Event Card, Dropdown Sub-Item, and Gradient Accent Badge. No receiving slot and no delegation (A2, A3). |
| §13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| YAML `[FILL IN]` | Not present in the source. Nothing to omit at a placeholder boundary. |
| Template `ease-enter` / `ease-exit` / `ease-standard` / `ease-spring` cubic-bezier values from `spec/omd-v0.1.md` | Not present in the source. Source §15 records `ease-out`, `cubic-bezier(0.23, 1, 0.32, 1)`, and an implicit loading fade; those stay in Foundations Motion. |

§9 deletion check (A3). Every value the construction prompts name was confirmed present in the portable body before the section was dropped. Promotion card: white background, no border-radius, shadow `rgba(0,0,0,0.16) 2px 2px 5px`, image at 48% height, `#f3f3f3` text area 16px padding, date in `#0abbb5` weight 900, title in `#000000` weight 900 2-line ellipsis — Event Card + Event Text Area + Date Badge. Nav dropdown: dark overlay, items as `<a>` with `#8081ff` background / white text / 8px radius / `10px 15px` padding / weight 900, 4px gap — Primary (Nav Dropdown CTA) + Dropdown Sub-Item. Gradient accent badge: `linear-gradient(to right, #cf7ffa, #8081ff)`, white text, weight 700, 「OPENPOINT優惠」 — Gradient Accent Badge. Form input: `1px solid #8081ff`, 8px radius, `#000` text, Noto Sans TC 16px, placeholder `#ccc` — Default Input.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Inspected homepage and style.css as this contract's token surfaces; catalog `primary_color` `#8081ff` beside `tokens.colors.primary`; `live-extract` as the YAML source class; values stay attached |
| Experience Scope ¶2 `:11` | Cheerful/accessible / earn-and-redeem-not-premium-fintech / teal-as-warmth / Traditional-Chinese-first / app-native-identity / deliberate-visual-separation / lighter-app-first atmosphere |
| Experience Scope ¶3 `:13` | Founding-and-ecosystem narrative, including the closing dense-hierarchy / promotions-first sentence, classified as context that does not by itself supply interface tokens; "open ecosystem" and "purple as digital-native identity" carried as the source's named editorial readings |
| Primary tasks `:19` | Selecting the three surface-or-label outcomes as primary tasks; not from the Personas section |
| Audience `:28` | Dropping the fictional biographies rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading the source-named mobile-first 7-ELEVEN consumer group as audience |
| Distinctive traits `:32` | Groupings and readings of the Key Characteristics list |
| Principles `:45` | Five numbered items as derived editorial implementation inference; toss-form close |
| Application rules `:55` | Seven Do rules and the reasons attached to them |
| Avoid `:67` | Seven Don't prohibitions and the reasons inside them |
| Semantic color `:83` | Role names from the source's labels; pairing each hex to its token-set path; catalog `#8081ff` beside `tokens.colors.primary`; canvas off on-primary as two `#ffffff` keys; teal on dates not a second primary; `#e60012` on cookie/alert not a brand fill |
| Semantic color keep-apart `:108` | Red quarantined from the rewards UI; teal as a fresh counterpoint; canvas and on-primary kept as two keys that share a hex |
| Spacing `:124` | Unitless steps kept on their own keys rather than rewritten as a grid; `sm: 16` off `base: 16`; `xs: 8` off radius 8; `md: 24` off event-btn 24px; 150px carousel padding off the scale |
| Shape `:137` | Four rounded keys kept (`0` / `8` / `50` / `9999`); prose `50px+` beside YAML `lg: 50`; component `0px` / `8px` kept on those components; `full: 9999` on its own path |
| Elevation `:148` | Card-lift rather than a universal elevation kit; YAML `0px` spread, table short form, event-card spelling, and hover `0.20` / `0.2` kept unmerged |
| Motion durations `:152` | Four duration values kept as duration tokens rather than as easing curves |
| Motion `:171` | Four durations, `ease-out`, source-recorded cookie curve, implicit loading fade, and scale(1.2) kept; conservative/functional and legal-compliance cookie readings; five-kind promotion gate; refusal of a partial confirmation |
| Font evidence `:181` | Evidence-class rows as this record's resolution table, not a published OPENPOINT type specimen |
| Family `:196` | Fallback-never-substitute reading; YAML short `Noto Sans TC` beside the complete interactive stack; Noto Sans TC not applied below weight 400 |
| Type roles `:200` | YAML unitless ratios kept; YAML `use` beside §3 Notes; H2 white kept on the bg-image title-bar; type-role 16 off spacing `sm` / `base` |
| Type principles `:218` | Four principle titles and the tap-zone / scan-promotions readings |
| Type-role sizes `:220` | Type-role 16 / 12 / 28.8 restated after the table as not spacing steps |
| Assets `:224` | Hosted favicon PNG as identity metadata rather than as a UI token |
| Assets photography `:225` | Image-led promotion cards as first-party event photography; not invented brand-color decoration |
| Capture / applicability `:236` | Interactive-kind and applicability verdicts and the reason for either; YAML primitive types attached only where the token set records them; §4-only bands labelled `not in the token set`; generic Focus not `focus-visible` treatment; absence of an observation is not `not-applicable`; loading/error/success follow product role not primitive kind; not a complete state-coverage claim |
| Primary keep-apart `:250` | 38px / `10px 15px` / 16px font / 8px radius read as this control's geometry, not as spacing steps |
| Event See-More keep-apart `:274` | 33px height and `8px 24px` padding read as this control's geometry, not as spacing steps |
| Dropdown unmerge `:438` | §9 dark overlay, §9 item `#8081ff background`, and YAML background omission kept as unmerged writings |
| State record `:484` | System-level empty/loading/error/success/skeleton/disabled/read-only rows not attached as treatments to destination controls, except the three matching captured attachments |
| Layout `:489` | Generous-versus-tight / full-width-band / panoramic-parallax readings of the source's own layout sentences |
| Breakpoints `:512` | `<1199.98px` / `≥1200px` and collapsing strategy as system-level source statements rather than as a measured cross-viewport specification |
| Content voice `:534` | Friendly / reward-focused / transactional characterization and the tone table |
| Published strings `:550` | Issued-copy list kept byte-exact rather than translated or re-cased |
| Forbidden register `:584` | Premise-to-register causal on hype / urgency / mixed-English-nav / emoji prohibitions |
| Byte-exact copy `:586` | Byte-exact / gloss-beside rule for published strings |
| Recorded unresolved `:620` | List as named unresolved values, not a license to invent |

## Proof notes

- verification method: playwright getComputedStyle, 2026-06-22
- components_harvested: true
- YAML `tokens.source`: live-extract
- Uncaptured hover/focus-visible treatments are omitted except event-card hover shadow and scale(1.2), and input Focus `border #8081ff`. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official narrative (President Chain Store, 6,800 7-ELEVEN locations, icash / Ponta / CLiQQ / ALL member, OPEN! mascot) is narrative context, not a token source
- Source HTML comment: Interpretive claims ("open ecosystem", "purple as digital-native identity") are editorial readings of the brand's observed design choices vs the 7-ELEVEN physical brand palette
- B3 five-kind promotion gate is in Foundations Motion (`DESIGN.md` Motion paragraph that names transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component gate)
- Footer copyright from the live inspect: "© 2026 UNI-President Chain Store Corporation. All rights reserved."
