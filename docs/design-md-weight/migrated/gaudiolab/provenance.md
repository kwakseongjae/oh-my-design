# Gaudio Lab provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence grading, and omission record for the Core v2 migration of `web/references/gaudiolab/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | gaudiolab |
| name | Gaudio Lab |
| display_name_kr | 가우디오랩 |
| country | KR |
| category | ai |
| homepage | `https://www.gaudiolab.com/` |
| primary_color | `#00b7ff` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=gaudiolab.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a Gaudio Lab-hosted asset. The sibling verification file states outright that `getdesign.md / refero.design / Google favicon are explicitly NOT counted toward the KR brand-owned requirement`. The URL is therefore kept here as the catalog's own identity field and is not promoted to a Gaudio Lab brand asset in the portable document.

**Token note, quoted verbatim from the source frontmatter:**

> primary = live CTA/outline sky-blue (#00b7ff); marketing ink near-black (#111214) while the MUI chrome layer uses rgba(0,0,0,0.87). Hybrid type stack: Poppins (EN display) + Roboto (MUI body/UI) + Noto Sans KR (KO). Shadowless.

Every value inside that note is carried separately in the portable document: `#00b7ff` and `#111214` in Foundations `Semantic color`, `rgba(0,0,0,0.87)` in the same table and in Typography rules, the three families in Typography & Assets `Family`, and the shadowless finding in Foundations `Elevation`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| surfaces inspected | 2026-07-02 |
| sibling verification notes | 2026-07-02 |

Conflicts unresolved: none. The source states `Conflicts unresolved: none (Tier 2 supplied no competing values)`.

## Sibling verification file (E2)

`web/references/gaudiolab/.verification.md` was read and **adopted as evidence grading only**. No sibling-only value and no sibling structural classification was promoted into the portable body (B1). The sibling-only items are listed below and appear in this ledger alone.

**Method, quoted from the sibling:** playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless), goto with desktop Chrome UA, `waitUntil: domcontentloaded` + 3.5s settle, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav buttons, CTAs, links, cards, plus a full-DOM background/text color + radius frequency scan.

### Sibling-only values — held here, absent from the portable body

| Value | Sibling record | Why it stays here |
|---|---|---|
| `rgb(238,238,238)` ×8 | text-color frequency scan | The legacy body never establishes this colour as a role. Writing it into the portable body would be an invented token. |
| `rgba(255,255,255,0.2)` ×8 | background frequency scan | Same: no role is established for it in the legacy body. |
| `50%` ×9 | border-radius frequency scan, marked `circular` | The legacy body's radius scale is 4 / 6 / 12 / 16 / 9999px. The percentage form is a sibling measurement of the same circular geometry the body records as `9999px`. |
| `letter-spacing: 0.15008px` | milestone `<h1>` sample | The legacy body rounds this to `0.15px`. The body keeps the source's own figure; the sibling's precise reading stays here. |
| `Suit` in `font-family: -apple-system, system-ui, Suit` | Korean brand hero `<h2>` sample | A family named in the computed stack that the legacy body does not carry. Promoting it would be a sibling value crossing into body facts. |
| nav `<button>` colour `rgb(0,0,0)` on light / `rgb(255,255,255)` on dark hero | nav sample | The legacy component record gives one value, `#111214`, and labels its use `Top nav menu items (light surface)`. The sibling's two-surface reading is held here; the body keeps the source's value with the source's light-surface label rather than merging or replacing it. |
| `https://studio.gaudiolab.io/` | country source 4 — `brand-owned SaaS surface; HEAD 200, redirects to login` | A brand-owned surface reachable but not inspected. It establishes no token. |
| Frequency counts | `rgb(255,255,255)` ×37 bg / ×366 text; `rgba(0,0,0,0.87)` ×228; `rgb(17,18,20)` ×131; `rgb(211,213,218)` ×24; `rgb(0,183,255)` ×9 bg and ×9 text; `rgb(250,250,250)` ×7; `rgb(156,163,175)` ×6; radius `9999px` ×26, `4px` ×14, `50%` ×9, `16px` ×8, `6px` ×6, `12px` ×6 | The legacy body carries two of these counts in prose (nine `#00b7ff` background fills; 130+ `#111214` text instances). The rest are measurement detail, not contract. |

### Sibling-only published strings — held here byte-exact (A5)

A5 covers strings the verification sibling names as measured copy, so these are kept as bytes rather than paraphrased. The portable body carries only the labels the legacy body itself carries.

- `Our Milestone` — English section `<h2>`, recorded beside `The Science of Sound` and `Wherever Sound Goes`
- `Gaudio Lab | AI Audio Technology` — `document.title` (EN)
- `가우디오랩 | 가우디오랩` — `document.title` (KO)
- `Products/제품` — the nav sample's label form
- `우리는 좋은 소리를 만들고…` — the sibling's truncated form of the Korean brand hero; the full string is in the portable body

### Third-party strings the source itself excludes

Recorded because the source recorded them, and excluded from evidence for the same reason the source excludes them. These are not Gaudio Lab strings and are not needles for copy preservation.

- `"gaudiolab — 0 DESIGN.md files | getdesign.md"` — getdesign.md page title
- `#ffb1ee`, `#f5a623`, `#ededed` — getdesign.md's own site theme colours, explicitly not Gaudio's
- `Browse 2,000+` and generic `"Minimal Design / Clean SaaS"` cards — refero.design's default trending grid

## Raw samples (from the sibling, 19 records)

- body: `font-family: Roboto, Helvetica, Arial, sans-serif`; `color: rgba(0, 0, 0, 0.87)` (MUI default ink); `font-size: 16px`; `line-height: 24px`; `background-color: rgb(255, 255, 255)` (#ffffff)
- hero CTA `<a>` "Contact us": `background-color: rgb(0, 183, 255)` (#00b7ff); `color: rgb(255, 255, 255)`; `border-radius: 4px`; height 44px; `font-size: 16px`; `font-weight: 500`
- header CTA `<button>` "문의하기" (KO): `background-color: rgb(0, 183, 255)` (#00b7ff); `color: rgb(250, 250, 250)` (#fafafa); `border-radius: 6px`; `padding: 8px 16px`; height 32px; `font-size: 14px`; `font-weight: 500`
- "All products" `<button>` (outline): `color: rgb(0, 183, 255)` (#00b7ff); `border: 1px solid rgb(0, 183, 255)`; `border-radius: 4px`; height 44px; `font-size: 16px` / 500
- nav `<button>` "Products/제품": `border-radius: 6px`; `padding: 8px 16px`; height 36px; `font-size: 14px`; `font-weight: 500`; color `rgb(0,0,0)` on light / `rgb(255,255,255)` on dark hero
- "Watch the Film" `<button>`: `background-color: rgb(255, 255, 255)` (#ffffff); `color: rgb(17, 18, 20)` (#111214); `border-radius: 4px`; `padding: 16px 40px`; height 62px; `font-size: 18px` / 500; `font-family: __Poppins`
- Korean brand hero `<h2>` "우리는 좋은 소리를 만들고…": `font-size: 80px`; `font-weight: 700`; `color: rgb(255, 255, 255)`; `font-family: -apple-system, system-ui, Suit`
- English section `<h2>` "The Science of Sound" / "Wherever Sound Goes" / "Our Milestone": `font-size: 48px`; `font-weight: 900`; `color: rgb(17, 18, 20)` (#111214)
- milestone `<h1>` "50 million users" / "Award-winning": `font-size: 36px`; `font-weight: 700`; `line-height: 40px`; `letter-spacing: 0.15008px`; `color: rgba(0, 0, 0, 0.87)`; Roboto
- blog/news card `<h3>`: `font-size: 18px`; `font-weight: 500`; `line-height: 28px`; `color: rgb(255, 255, 255)` (on dark thumbnail) / `rgb(17, 18, 20)` on light
- news card container: `border-radius: 12px`; `border-color: rgb(214, 214, 214)` (#d6d6d6); `box-shadow: none`
- product list rows (GSA / Gaudio Sing / GTS / LM1 / Gaudio Studio Pro): `border-radius: 9999px`; height 64px; `font-size: 16px` / 400; `color: rgba(0, 0, 0, 0.87)`
- "Open app launcher" `<button>`: `border-radius: 9999px`; height 40px
- loaded fonts (`document.fonts`): `Poppins` 400/500/700 loaded; `Roboto` 300/400/500/600/700 loaded; `Noto Sans KR` present; `swiper-icons`
- background frequency (top): `rgb(255,255,255)` ×37 (#ffffff), `rgb(0,183,255)` ×9 (#00b7ff), `rgba(255,255,255,0.2)` ×8, `rgb(30,30,31)` (#1e1e1f) ×1, `rgb(18,53,78)` (#12354e) ×1, `rgb(240,249,255)` (#f0f9ff) ×1, `rgb(17,18,20)` (#111214) ×1
- text-color frequency (top): `rgb(255,255,255)` ×366, `rgba(0,0,0,0.87)` ×228, `rgb(17,18,20)` ×131 (#111214), `rgb(211,213,218)` ×24 (#d3d5da), `rgb(0,183,255)` ×9 (#00b7ff), `rgb(238,238,238)` ×8, `rgb(250,250,250)` ×7 (#fafafa), `rgb(156,163,175)` ×6 (#9ca3af)
- border-radius frequency (top): `9999px` ×26 (pills dominant), `4px` ×14, `50%` ×9 (circular), `16px` ×8, `6px` ×6, `12px` ×6
- box-shadow: `none` across hero, nav, CTAs, cards, and headings (shadowless system confirmed)
- document.title: "Gaudio Lab | AI Audio Technology" (EN) / "가우디오랩 | 가우디오랩" (KO)

## Evidence class of the legacy sections

The source's own closing comment partitions its file, and this migration follows that partition rather than treating the whole file as one evidence class.

| Legacy range | Source's stated attribution |
|---|---|
| §1-§9 (token-level claims) | Tier 1 live inspection, 2026-07-02, via playwright `getComputedStyle` on the three surfaces |
| §10 Voice samples | verbatim from the live brand/company pages — hero subtitle, "The Science of Sound" paragraph, Korean brand hero |
| §11 Brand narrative | facts taken from the live `gaudiolab.com/company/brand` page; the founding year is the source's inference from the 10th-anniversary milestone; Seoul, KR HQ is described as widely documented public knowledge |
| §13 Personas | fictional archetypes, names illustrative, do not refer to real people |
| §14 States, §15 Motion | **no attribution given.** The closing comment assigns a source to §1-9, §10, §11, and §13 and assigns none to these two sections. Both are therefore carried as system-level statements with a derived-editorial qualification adjacent to them in the portable body. |
| Interpretive claims | the comment names "one color, one action", "flat and fast as a rejection of ornamented consumer audio chrome", and "sound is science first" as editorial readings, not quoted Gaudio Lab statements |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage (EN) | `https://www.gaudiolab.com/` | 2026-07-02 |
| brand-en | brand/company page (EN) | `https://www.gaudiolab.com/company/brand` | 2026-07-02 |
| brand-ko | brand page (KO) | `https://www.gaudiolab.com/ko/company/brand` | 2026-07-02 |

## Sources

### Tier 1 (from the legacy footer, with the sibling's scope notes)

- `https://www.gaudiolab.com/` — nav, hero CTAs, product list, color/radius frequency scan
- `https://www.gaudiolab.com/company/brand` — brand hero, section headings, milestone stats, "Watch the Film"
- `https://www.gaudiolab.com/ko/company/brand` — Korean brand hero + nav (light surface)

Legacy footer wording: **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces).

### Tier 2 (no usable record)

- `getdesign.md/gaudiolab` — the legacy footer records `0 DESIGN.md files — empty`; the sibling records the page title and notes that the only hexes present are getdesign.md's own theme.
- `styles.refero.design/?q=gaudio` — the legacy footer records `not listed — generic trending grid only`; the sibling records the default "Browse 2,000+" trending grid.

The sibling adds: KR Tier-2 coverage is weak (expected per `spec/regional-sources.yaml`); Tier 1 live inspect carries the proof.

### Country sources (KR — brand-owned ≥2 requirement, all HEAD-checked 200 in the source turn)

1. `https://www.gaudiolab.com/` — official homepage (Tier 1 live-inspected; all token claims)
2. `https://www.gaudiolab.com/company/brand` — official brand/company page (mission, milestone stats, "Watch the Film" hero)
3. `https://www.gaudiolab.com/ko/company/brand` — Korean brand page (가우디오랩 hero + Korean nav chrome)
4. `https://studio.gaudiolab.io/` — Gaudio Studio product app (brand-owned SaaS surface; HEAD 200, redirects to login). Not inspected; establishes no token.

## Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary / action color | `#00b7ff` (CTA bg + outline border, ×9 bg) | — (0 files) | — (not listed) | Tier 1 → `#00b7ff` |
| Heading ink | `#111214` (marketing) / `rgba(0,0,0,0.87)` (MUI chrome) | — | — | Tier 1 → both documented (hybrid stack) |
| Display font | Poppins (EN) / Roboto (MUI body) / Noto Sans KR (KO) | — | — | Tier 1 → hybrid documented |
| Corner radius | pills 9999px + 4/6/12/16px | — | — | Tier 1 → mixed pill + small-radius scale |
| Elevation | `box-shadow: none` everywhere | — | — | Tier 1 → shadowless |

## Claim ledger

Every value's legacy origin and its portable destination. `home` = `https://www.gaudiolab.com/`; `brand-en` and `brand-ko` as above.

| Claim | Legacy origin | Portable destination | Surface |
|---|---|---|---|
| `tokens.colors.primary` `#00b7ff` | frontmatter + §2 Primary/Brand | Foundations `Semantic color`, and the three blue-bearing components | home, brand-en, brand-ko |
| `tokens.colors.on-primary` `#fafafa` | frontmatter + §2 Primary/Brand | Foundations `Semantic color`, Header CTA `Text` | brand-ko header CTA |
| `tokens.colors.ink` `#111214` | frontmatter + §2 Ink & Text | Foundations `Semantic color`, Nav Menu Item, Product Row, Watch the Film | brand-en, home |
| `rgba(0,0,0,0.87)` | §1, §2, §3 (MUI chrome ink) | Foundations `Semantic color`, Typography rules, Experience `Scope` | home body, milestone stats, product rows |
| `tokens.colors.muted` `#9ca3af` | frontmatter + §2 | Foundations `Semantic color`, State record | home |
| `tokens.colors.faint` `#d3d5da` | frontmatter + §2 | Foundations `Semantic color`, State record | brand-en dark sections |
| `tokens.colors.canvas` `#ffffff` | frontmatter + §2 | Foundations `Semantic color`, Hero CTA, Watch the Film, News Card, Layout | all three |
| `tokens.colors.surface` `#f0f9ff` | frontmatter + §2 | Foundations `Semantic color` and `Elevation`, Layout, State record | home |
| `tokens.colors.hairline` `#d6d6d6` | frontmatter + §2 | Foundations `Semantic color` and `Elevation`, News Card | home |
| `tokens.colors.night` `#1e1e1f` | frontmatter + §2 | Foundations `Semantic color` and `Elevation`, Layout | brand-en, brand-ko |
| `tokens.colors.ocean` `#12354e` | frontmatter + §2 | Foundations `Semantic color` and `Elevation`, Layout | brand-en |
| `tokens.typography.family` (Poppins / Roboto / Noto Sans KR) | frontmatter + §3 Font Family | Typography & Assets `Family` and `Font evidence` | all three |
| 7 type roles (size / weight / unitless lineHeight / tracking / use) | frontmatter `typography` + §3 Hierarchy table | Typography & Assets `Type roles` | brand-en, brand-ko, home |
| `tokens.spacing` 7 keys (4 / 8 / 12 / 16 / 24 / 40 / 64) | frontmatter + §5 Spacing System | Foundations `Spacing` | home |
| `tokens.rounded` 5 keys (4 / 6 / 12 / 16 / 9999) | frontmatter + §5 Border Radius Scale | Foundations `Shape` | home |
| `tokens.shadow.none` | frontmatter + §6 | Foundations `Elevation`, News Card | all three |
| `tokens.components.cta-primary` | frontmatter + §4 Header CTA | Components `Header CTA (Primary)` | brand-ko |
| `tokens.components.cta-hero` | frontmatter + §4 Hero CTA | Components `Hero CTA (Primary)` | home |
| `tokens.components.button-outline` | frontmatter + §4 Outline | Components `Outline (Secondary)` | home |
| `tokens.components.button-film` | frontmatter + §4 Watch the Film | Components `Watch the Film (Overlay)` | brand-en |
| `tokens.components.nav-item` | frontmatter + §4 Nav Menu Item | Components `Nav Menu Item` | home, brand-ko |
| `tokens.components.news-card` | frontmatter + §4 News Card | Components `News Card` | home |
| `tokens.components.product-row` | frontmatter + §4 Product Row | Components `Product Row` | home |
| `tokens.components.app-launcher` | frontmatter + §4 App Launcher | Components `App Launcher (Icon)` | home |
| Elevation levels 0-3 | §6 table | Foundations `Elevation` | all three |
| Durations 120 / 240 / 400ms | §15 | Foundations `Motion` | no attribution given by the source |
| Easing roles and uses | §15 | Foundations `Motion` | no attribution given by the source |
| 9 state rows | §14 | Components `State record` | no attribution given by the source |
| Breakpoints 640 / 1024 / 1440px | §8 | Layout & Platforms | no attribution given by the source |
| Voice samples ×3 | §10 | Content & Locales | brand-en, brand-ko |
| Brand narrative facts | §11 | Experience `Scope` | brand-en |

## Derived editorial inventory

Seventeen sentences in the portable body carry the full B2a qualification — "a derived editorial implementation inference from the verified surfaces; … not Gaudio Lab-authored or a separately published UI specification". They are indexed here so a reviewer can confirm each one sits adjacent to the claim it qualifies rather than only in this sidecar. Measured on the output: 17 occurrences in `DESIGN.md`; the single occurrence in this file is the quotation of the clause in the sentence above, not a qualification.

| # | Portable location | What is qualified |
|---:|---|---|
| 1 | Experience `Scope`, paragraph 3 | The research-lab-restraint reading, "blue means act", engineered-and-trustworthy, the hybrid stack as an engineering-led tell, the refusal-of-elevation reading, and the flat/fast/science-forward reading. Names the source's own note that "one color, one action", flat-and-fast-as-rejection, and "sound is science first" are its editorial readings. |
| 2 | Experience `Primary tasks` | The selection of these four as the primary tasks |
| 3 | Experience `Audience` | Reading the archetype-informing groups as this product's audience |
| 4 | Experience `Distinctive traits` | The rationing, duality, deliberate-flatness, and MUI-softness readings inside the eight traits |
| 5 | Experience `Principles` | All five principles and their UI implications |
| 6 | Experience `Application rules` | The eight Do items and their attached reasons |
| 7 | Experience `Avoid` | The seven Don't items and their attached reasons |
| 8 | Foundations `Shape` | Reading the pill / small-radius pairing as a deliberate mix rather than a framework accident |
| 9 | Foundations `Elevation` | The refusal-of-elevation reading and the audio-engineering-company inference drawn from it |
| 10 | Foundations `Motion` | The entire motion contract — durations, easing roles, and motion rules — as a section the source leaves unattributed |
| 11 | Typography & Assets `Font evidence`, "Attribution, not a recorded family" row | Reading the Poppins 400/500/700 loaded set against the "pushed to 900" section titles as a synthesized weight |
| 12 | Typography & Assets `Typography rules` | The four typography principles as readings of the measured metrics |
| 13 | Components `How to read this section` | Every kind verdict, every applicability verdict, and the reason given for either |
| 14 | Components `State record` | The nine state treatments as an unattributed system-level statement |
| 15 | Layout & Platforms, paragraph after the layout bullets | "Content over chrome", flat segmentation, and immersive-rhythm readings |
| 16 | Layout & Platforms, responsive paragraph | The breakpoints, collapsing strategy, and image behavior as system-level statements rather than cross-viewport measurements |
| 17 | Content & Locales, paragraph 1 | The voice characterization, the Korean register reading, the evidence-over-adjectives reading, and the tone table |

### Evidence-class boundary statements — related but not the same clause

These sentences separate one evidence domain from another. They are not B2a qualifications and are listed separately so the count above is not read as covering them.

| Portable location | Boundary drawn |
|---|---|
| Experience `Scope`, paragraph 4 | Three classes inside the brand narrative: strings and figures published on the company's own pages / the founding year as the source's inference from the 10th-anniversary milestone / Seoul, KR HQ as public knowledge rather than a quoted statement. Closes with the rule that the narrative supplies no interface token. |
| Foundations `Semantic color`, closing line | The two blue CTAs carry two different label colours (`#fafafa`, `#ffffff`); both are kept rather than merged. |
| Foundations `Semantic color`, MUI chrome ink row | The two blacks are two values on two layers; the split is kept rather than collapsed. |
| Foundations `Motion`, easing paragraph | The curve values are omitted because they are not traceable to Gaudio Lab evidence, while the roles and uses are kept. |
| Foundations `Motion` and Governance | The B3 promotion condition: five evidence kinds plus a per-component computed-observation gate, with partial confirmation explicitly excluded. Present in full in both places. |
| Typography & Assets `Font evidence`, Korean-hero half of the attribution row | The Korean hero's computed family is the system stack; Noto Sans KR is the source's own attribution of the resolved face. |
| Typography & Assets `Assets` | The catalog logo entry is a third-party favicon service, not a Gaudio Lab-hosted asset, and is held in this ledger rather than presented as a brand asset. |
| Components `News Card` and `Product Row` | Neither an interactive nor a non-interactive kind is established, so kind and applicability map are both withheld (C4). |
| Content & Locales, closing line | The Korean strings and the recorded English labels reproduce byte-exact rather than translated or re-cased. |

## Omission ledger

| Omitted | Where it came from | Disposition |
|---|---|---|
| `cubic-bezier(0.2, 0.6, 0.25, 1)` (`ease-enter`) | §15 Easings | Removed from the portable body; held verbatim here. Not traceable to Gaudio Lab evidence — the sibling records no transition, animation, duration, or easing observation on any of the three surfaces. |
| `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`) | §15 Easings | Removed from the portable body; held verbatim here. Same absence of evidence, and this exact value is the example curve printed in `spec/omd-v0.1.md` — the file that declares those curves non-brand implementation defaults and forbids moving them into a reference DESIGN.md. |
| `cubic-bezier(0.25, 0.1, 0.25, 1)` (`ease-standard`) | §15 Easings | Removed from the portable body; held verbatim here. Same absence of evidence. |
| §13's three named archetypes — names, ages, cities, and biographies | §13 Personas | Deleted, and deliberately **not** re-hosted in this sidecar. The source's own §13 header and closing comment both state that these are fictional archetypes whose names are illustrative and do not refer to real people. No name, age, city, or biography from §13 appears in the portable document or in this file. The audience groups the source says the archetypes were informed by are carried in Experience `Audience` as groups only. |
| §9 Agent Prompt Guide — Quick Color Reference, four example component prompts, and the six-item Iteration Guide | §9 | Deleted. Tool-facing restatement and copy-paste prompt wrappers have no receiving slot. Every renderable value in §9 was checked against the rest of the file before deletion; see the migration log for the one field that existed only there and was moved rather than dropped. |

## Notes on evidence separation

- Narrative evidence and UI-token evidence stay separate. The company history, the milestone figures, the award record, and the product line explain the product; none of them supplies an interface token, and the portable body says so.
- Public marketing surfaces and the brand-owned product app are separate evidence domains. `studio.gaudiolab.io` is recorded above as reachable and uninspected; nothing in the portable body draws on it.
- The two blacks (`#111214` and `rgba(0,0,0,0.87)`) are kept as two values on two layers. The source calls the duality observable and deliberate, and merging them would erase a recorded distinction.
- The Korean hero's computed family is the `-apple-system, system-ui` stack. Naming Noto Sans KR as the resolved face is the source's attribution, and the portable body labels it as one rather than presenting it as a read family string.
