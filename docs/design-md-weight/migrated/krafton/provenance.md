# KRAFTON provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/krafton/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | krafton |
| name | KRAFTON |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.krafton.com` |
| primary_color | `#000000` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=krafton.com&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a KRAFTON-hosted brand file.

Token source from YAML, kept as ledger metadata: `tokens.source: prose-derived`, `tokens.extracted: 2026-06-09`. The portable body names the inspected homepage HTML and theme CSS bundles as the token surfaces; it does not rewrite `prose-derived` as `live-extract`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |
| Tier 1 live inspect (source footer) | 2026-06-03 |
| sibling inspect | 2026-06-03 |

The source footer records the verification verbatim as **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states. Both Tier-2 catalogs returned no KRAFTON data; all values from Tier 1 raw source-file fetch.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate homepage | `https://www.krafton.com` | 2026-06-03 |
| style | theme CSS | `https://www.krafton.com/wp-content/themes/krafton/style.css` | 2026-06-03 |
| component | theme CSS | `https://www.krafton.com/wp-content/themes/krafton/assets/css/component.css` | 2026-06-03 |
| header | theme CSS | `https://www.krafton.com/wp-content/themes/krafton/assets/css/header.css` | 2026-06-03 |
| footer | theme CSS | `https://www.krafton.com/wp-content/themes/krafton/assets/css/footer.css` | 2026-06-03 |
| page | theme CSS | `https://www.krafton.com/wp-content/themes/krafton/assets/css/page.css` | 2026-06-03 |
| brandcenter | official-doc — Brand Resource Center | `https://www.krafton.com/about/brandcenter/` | 2026-06-03 |
| vision | official-doc — vision / philosophy | `https://www.krafton.com/en/about/vision/` | 2026-06-03 |

### Tier 1 (as listed in the source footer)

- `https://www.krafton.com` (homepage HTML + inline CSS)
- `https://www.krafton.com/wp-content/themes/krafton/style.css`
- `https://www.krafton.com/wp-content/themes/krafton/assets/css/component.css`
- `https://www.krafton.com/wp-content/themes/krafton/assets/css/header.css`
- `https://www.krafton.com/wp-content/themes/krafton/assets/css/footer.css`
- `https://www.krafton.com/wp-content/themes/krafton/assets/css/page.css`
- `https://www.krafton.com/about/brandcenter/`
- `https://www.krafton.com/en/about/vision/`

### Tier 2

- getdesign.md/krafton — NOT LISTED (0 DESIGN.md files)
- refero — no result for KRAFTON KR

Tier 2 data was not used to establish any token or component value.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: prose-derived` and `tokens.extracted: 2026-06-09`. That producer string is ledger metadata. The portable body attaches tokens to the homepage HTML and the named CSS bundles rather than renaming the source class.

## Sibling handling (`web/references/krafton/.verification.md`)

The sibling exists — confirmed with `find web/references/krafton -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-03. Method: raw source-file fetch (homepage HTML + seven CSS bundles via curl).
- Sources include the source-footer Tier 1 list plus sibling-only `fonts.css` and `https://www.krafton.com/en/about/history/`.
- `style.css` line 10: `body {background:#fff; font-size:14px; line-height:1.7; color:#555555; font-weight:400;}`
- `header.css` line 7: `.site-footer { background-color:#000; }`
- `header.css` line 74: footer-nav separator `background-color:#393939`; line 339: `.SiteHeaderLinkLang-link { color:#A2A2A2; font-size:13px; font-family:'Poppins', sans-serif; }`
- `component.css` line 620–628: `.SearchInput { border:2px solid #000; }` `.SearchInput-input { height:46px; padding:12px 20px; color:#222; font-size:15px; font-weight:500; }` `.SearchInput-input::placeholder { color:#ADADAD; }`
- `component.css` line 1817–1821: `.DownloadEnBtn-button { background-color:#fff; color:#000; border:2px solid #000; font-size:14px; font-family:'Poppins'; font-weight:bold; padding:8px 43px 7px 15px; }`
- `page.css` line 1952: `.text-red { color:#ED2929; }` line 1960: `.text-blue { color:#3D7FD9; }`
- `page.css` lines 86–88: `.PageHeaderTitle-text { font-size:70px; font-weight:bold; color:#000; }`; line 87: `.PageHeaderTitle-text.Text-lage { font-size:140px; font-family:'KRAFTON'; }`
- `fonts.css`: `@font-face { font-family:"KRAFTON"; src:url("../fonts/KRAFTON_FONT.woff") format('woff'); }`
- homepage HTML cookie-bar: `background:"#0a0a0a"`, `button_1_button_colour:"#000000"`, `text:"#ffffff"`
- `style.css` lines 710–722: `.a-Opacity { opacity:0; transition-property:opacity; transition-duration:1.6s; transition-timing-function:ease-out; }` `.a-OpacityTop { transition-duration:0.8s; transition-timing-function:ease-out; opacity:0; transform:translateY(100px); }`
- getdesign.md/krafton page title: "krafton — 0 DESIGN.md files"
- country KR; `lang="ko-KR"` on the Korean-language primary domain
- history page confirms founding year 2007 as Bluehole in Korea

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- Download button padding `8px 43px 7px 15px` (source / YAML write `8px 43px 8px 15px`)
- `fonts.css` URL and the `KRAFTON_FONT.woff` path
- history URL `https://www.krafton.com/en/about/history/`
- cookie `button_1_button_colour:"#000000"`
- CSS selector samples `.SearchInput { border:2px solid #000; }` and `background:"#0a0a0a"` as quoted sibling snippets
- `lang="ko-KR"`
- getdesign.md miss page title `krafton — 0 DESIGN.md files`

Values the sibling shares with the source body (corroboration, not new portable facts): `#000000`, `#0a0a0a`, `#393939`, `#555555`, `#222222`, `#ADADAD` / `#adadad`, `#ED2929`, `#3D7FD9`, `#A2A2A2`, 46px search height, `12px 20px` search padding, 70px PageHeader, 140px KRAFTON logotype, `1.6s` / `0.8s` / `ease-out`, `translateY(100px)`, 2007 Bluehole founding.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / brand / canvas | home + CSS (three keys, hex `#000000`) |
| tokens.colors.foreground / on-primary | home + CSS (two keys, hex `#ffffff`) |
| tokens.colors.surface | cookie-consent `#0a0a0a` |
| tokens.colors.hairline | footer / dark-mode border `#393939` |
| tokens.colors.muted | secondary labels / nav hover `#777777` |
| tokens.colors.body | default body `#555555` |
| tokens.colors.content | rich-text / table `#222222` |
| tokens.colors.placeholder | input placeholder `#adadad` |
| tokens.colors.disabled | scrollbar / disabled borders `#dddddd` |
| tokens.colors.error | required-field / error `#ed2929` |
| tokens.colors.link | article hyperlink `#3d7fd9` |
| tokens.typography.family.sans | Poppins |
| tokens.typography.family.mono | SF Mono |
| tokens.typography.hero-logotype | 140 / 400 — Hero logotype, KRAFTON custom font, display only |
| tokens.typography.page-header | 70 / 700 — PageHeader title on light pages |
| tokens.typography.article-body | 16 / 400 / 1.9 — Article/single body copy |
| tokens.typography.nav | 18 / 600 — Navigation, Poppins |
| tokens.typography.body | 14 / 400 / 1.7 — Base body text |
| tokens.typography.selector | 13 / 400 — Language selector links |
| tokens.typography.footer | 12 / 400 — Footer copyright, Poppins |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | 15 / 20 / 40 / 60 / 80 / 100 / 140 |
| tokens.rounded.sm / md / lg / full | 0 / 0 / 0 / 9999 |
| tokens.shadow.none | No box-shadow in brand CSS; depth via dark background bleed and self-lit imagery |
| tokens.components.button-primary | Download button on white surface |
| tokens.components.input-search | Search input, placeholder #adadad |
| tokens.components.tab-third | ThirdDepthTab navigation |
| tokens.components.listItem-link | Download link, text + animated underline |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 4인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own headers label them illustrative. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components / Experience. The §9-only sentences that Zalando Sans Expanded is used at 600–800 for display headings, that Poppins is used at 500 for nav links and buttons, and that game-card imagery sits on `#000` with no visible frame land on Family and Assets. |
| §15 cubic-bezier values | None in the source. Named easings `ease-out` and `ease` are kept. No unattributed template curve was deleted. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. `background:#000; color:#fff` on primary surfaces — Application rules + Semantic color. Zalando Sans Expanded 600–800 for display headings — Family. Poppins 500 for nav/buttons beside YAML nav weight 600 — Family. Noto Sans / Noto Sans KR at 400 for Korean body — Family + Application rules. Buttons `border:2px solid #000; background:#fff; color:#000` invert on hover with `transition:background-color 0.1s` — Download Button. Entrance `translateY(100px)` / opacity over `0.8s ease-out` — Application rules + Motion. Text-link underline 0 to 100% over `0.3s ease-out` — Download Link + Motion. All border-radius 0. No box-shadows — Shape + Elevation. Game cards imagery on `#000` with no visible frame — Assets.

## Derived editorial inventory

Portable `DESIGN.md` carries 30 complete B2a qualifications. This table is 30 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 `:9` | Inspected homepage-and-CSS bytes as this contract's token surfaces; brandcenter and vision as named sources that do not supply computed tokens; values stay attached |
| 2 | Experience Scope ¶2 `:11` | Three canvas/primary/brand keys unmerged; two foreground/on-primary keys unmerged; Body Background off canvas; not-merely-decorative blackness / illuminated-world / daylight-breaking / cinematic / largeness / underline-restraint atmosphere |
| 3 | Experience Scope ¶3 `:13` | Founding-and-portfolio narrative as context that does not supply interface tokens |
| 4 | Primary tasks `:19` | Selecting the three recorded surfaces and controls as primary tasks; not from the persona section |
| 5 | Audience `:28` | Biography-drop (no name, age, city, motivation, or affiliation classification); group-level fans |
| 6 | Distinctive traits `:32` | Grouping the recorded values as the distinctive layer |
| 7 | Principles `:44` | The five numbered items and their UI implications |
| 8 | Application rules `:54` | The seven Do rules and the reasons attached |
| 9 | Avoid `:66` | The six Don't rules and the reasons inside them |
| 10 | Foundations Semantic color `:81` | Role names from the source's labels; primary / brand / canvas unmerged; foreground / on-primary unmerged; Body Background off canvas; Alert Red alternate as a §2 / §14 writing rather than a second YAML colors key |
| 11 | Foundations Spacing `:113` | Unitless steps unmerged from matching type sizes and padding halves |
| 12 | Foundations Shape `:124` | `sm: 0` / `md: 0` / `lg: 0` unmerged; `full: 9999` kept on its own key |
| 13 | Foundations Elevation `:128` | Shadow-free bleed as apparent foreground/background separation; header bar as kinetic highlight |
| 14 | Foundations Motion `:132` | CSS-bundle attribution; named `ease-out` / `ease` kept; five-kind gate held |
| 15 | Motion B3 `:160` | Five-kind promotion gate; partial confirmation insufficient |
| 16 | Typography Official product-use `:170` | "No published type token"; no separately issued type specimen |
| 17 | Typography Font-evidence wrap `:176` | Official-use / licence-boundary / SF Mono-as-YAML-key classifications; typography beyond the inspected corporate-site homepage and CSS bundles stays outside this contract |
| 18 | Typography Family `:186` | Fallback prohibition; §9 Zalando 600–800 / Poppins 500 and §7 Noto Sans JP keep-both |
| 19 | Type roles `:190` | YAML unitless ratios kept; YAML use and §3 notes both kept; hero `140` off spacing `140`; article `16` as a type size rather than a spacing step |
| 20 | Assets `:210` | Google s2 slug as identity pointer; first-party imagery not replaced |
| 21 | Components how-to-read `:228` | Source state contract kept rather than delegated to an unadopted catalog graph; role-based decision procedure; kind and applicability verdicts; generic Focus not treated as focus-visible; not a complete state-coverage claim |
| 22 | Download Button `:252` | 8px 43px 8px 15px / 14px 700 / 0.1s as this button's geometry |
| 23 | Search Input `:286` | 12px 20px / 15px 500 as this input's geometry; `#adadad` / `#ADADAD` keep-both |
| 24 | Tab Navigation `:315` | 2.4em / `#f7f7f7` as this tab's geometry; accordion collapse kept on Layout |
| 25 | Download Link `:342` | 15px 500 / 2px underline as this link's geometry; 0.3s / 0.2s / 0.2–0.3 s keep-both |
| 26 | Layout `:370` | Recorded measurements rather than a specification invented on top of them |
| 27 | Content voice `:375` | Public voice rather than a separately published microcopy guide |
| 28 | Voice samples `:392` | Three illustrative lines rather than official UI copy; "Our Challenges" as a published page name |
| 29 | Named gaps `:426` | Named gaps rather than a domain inventory; unnamed values rather than permissions to invent |
| 30 | Motion keep-both `:148` | YAML `0.3s` / §4 `0.2s ease-out` / §15 `0.2–0.3 s` writings unmerged; Download-button `0.1 s` as that control's background transition rather than a spacing step |
