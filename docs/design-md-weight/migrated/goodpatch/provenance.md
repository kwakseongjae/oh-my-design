# Goodpatch provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence grading, and omission record for the Core v2 migration of `web/references/goodpatch/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | goodpatch |
| name | Goodpatch |
| country | JP |
| category | design-tools |
| homepage | `https://goodpatch.com/` |
| primary_color | `#096fc8` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=goodpatch.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a Goodpatch-hosted asset. The sibling verification file states that `getdesign.md / refero.design / Google favicon are not counted as Tier 1 evidence`. The sibling also records that the proxy returns 1139 bytes (a 128×128 PNG above the 450-byte generic-globe threshold) and that simpleicons has no `goodpatch` slug (404). The URL is therefore kept here as the catalog's own identity field and is not promoted to a Goodpatch brand asset in the portable document.

**Token note, quoted verbatim from the source frontmatter:**

> primary = live CTA / link signature blue (#096fc8, rgb(9,111,200)); light-blue (#81b0da) is the decorative/secondary work-title tint; ink is warm grey #333333 (not pure black) over a #f6f6f6 paper canvas. Pill CTAs use an effectively-full radius (computed 1584px). Latin display = My Galano Grotesque; CJK body = Yu Gothic Pr6N (computed family 'A+EqpB-游ゴシック体 Pr6N').

Every value inside that note is carried separately in the portable document: `#096fc8`, `#81b0da`, `#333333`, `#f6f6f6` in Foundations `Semantic color`; `1584px` / `9999px` in Foundations `Shape` and the pill CTAs; both families in Typography & Assets `Family`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| surfaces inspected | 2026-06-17 |
| sibling verification notes | 2026-06-17 |

Conflicts unresolved: none. The source footer states `Conflicts unresolved: none`.

## Sibling verification file (E2)

`web/references/goodpatch/.verification.md` was read and **adopted as evidence grading only**. No sibling-only value and no sibling structural classification was promoted into the portable body (B1). The sibling-only items are listed below as records in this ledger. The same strings may appear in the migration log as disposition mentions, not as use.

**Method, quoted from the sibling:** playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless, viewport 1440×900, Chrome UA, locale ja-JP), goto `https://goodpatch.com/` and `https://goodpatch.com/company` with `domcontentloaded` + 3.5–4s settle, Escape/cookie-modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, anchors, buttons, plus a full-DOM background/text-color and border-radius frequency scan. Two surfaces inspected; values cross-confirmed. Profile facts via WebFetch on `https://goodpatch.com/company/profile`.

The viewport figure `1440×900` is a sibling method detail. It is not a portable measurement of a band, a canvas, or a breakpoint. The portable Desktop row keeps the source body's `1024-1440px` range and does not say that anything measures 1440px.

### Sibling-only values — held here, absent from the portable body

| Value | Sibling record | Why it stays here |
|---|---|---|
| `14.55px` on primary pill CTA, consent button, and JP sub-nav | raw samples | The legacy body records those controls at `15px`. The body keeps the source figure; the sibling's finer reading stays here. |
| `53.33px` News banner | raw sample | The legacy body records `53px`. The body keeps `53px`. |
| `17.78px` News headline | raw sample | The legacy body records `18px`. The body keeps `18px`. |
| Contact/Careers panel height `210px` | raw sample | The legacy body records padding `66px 16px` and does not name a panel height. |
| `rgb(150,160,166)` ×6 | background frequency scan | The legacy body never establishes this colour as a role. |
| Frequency counts | bg `rgb(255,255,255)` ×25, `rgb(9,111,200)` ×17, `rgb(150,160,166)` ×6, `rgb(129,176,218)` ×4, `rgb(69,71,74)` ×3, `rgb(246,246,246)` ×2, `rgb(255,171,163)` ×2, `rgb(83,76,151)` ×2, `rgb(118,183,237)` ×2, `rgb(25,27,31)` ×1; text `rgb(51,51,51)` ×611, `rgb(255,255,255)` ×345, `rgb(110,110,110)` ×206, `rgb(144,150,162)` ×108, `rgb(9,111,200)` ×80, `rgb(0,0,0)` ×63, `rgb(129,176,218)` ×33, `rgb(143,149,161)` ×9, `rgb(255,119,107)` ×4; radius `8px` ×29, `1584px` ×2 | Measurement detail, not contract. The portable body carries the roles, not these counts. |
| Viewport `1440×900` | method | Capture context, not a portable width token. |
| `ソフトウェア開発` in the profile business list | sibling Company facts; also in the source closing comment | The portable §11 body string is the source body's list without this extra item. Held here as the profile-page wording. |
| Capital `17億7,456万円` | sibling Company facts | Not in the legacy body. |
| HQ `〒150-0032 東京都渋谷区鶯谷町3-3 VORT渋谷South 2階` | sibling Company facts | The legacy body places the studio in Tokyo; the source comment adds Shibuya, Tokyo. The street address stays here. |

### Sibling-only published strings — held here byte-exact (A5)

A5 covers strings the verification sibling names as measured copy, so these are kept as bytes rather than paraphrased. The portable body carries only the labels the legacy body itself carries.

- `スズキ株式会社` — work-card H3 sample
- `Company｜Goodpatch グッドパッチ` — `document.title` on the Company surface
- `Goodpatch グッドパッチ｜デザインの力を証明する` — `document.title` on the homepage (the portable body carries `デザインの力を証明する` from the legacy voice sample; the full title string stays here)

### Third-party strings the source itself excludes

Recorded because the source recorded them, and excluded from evidence for the same reason the source excludes them. These are not Goodpatch strings and are not needles for copy preservation.

- `"No designs found for 'goodpatch'"` — getdesign.md
- generic `"Minimal Design / Clean SaaS"` cards — refero.design default browse grid

## Raw samples (from the sibling)

- body: `font-family: "A+EqpB-游ゴシック体 Pr6N M", sans-serif` (Yu Gothic Pr6N); `color: rgb(51, 51, 51)` (#333333); `font-size: 16px`; `line-height: 32px` (2.0)
- body background: `rgb(246, 246, 246)` (#f6f6f6)
- h1 "Design to empower": `font-family: "My Galano Grotesque"`; `font-size: 150px`; `font-weight: 700`; `line-height: 127.5px` (0.85); `letter-spacing: -5.25px`; `color: rgb(51, 51, 51)` (#333333)
- Primary pill CTA "View services": `background-color: rgb(9, 111, 200)` (#096fc8); `color: rgb(255, 255, 255)`; `border-radius: 1584px` (≈9999px); `padding: 16px 24px`; height 56px; Galano Grotesque 14.55px
- Primary pill CTA "View selected works" / "Why design": `background-color: rgb(9, 111, 200)` (#096fc8); white text; `border-radius: 1584px`; `padding: 16px 24px`; height 56px
- Outline pill CTA "View career info": `background-color: rgb(255, 255, 255)`; `color: rgb(9, 111, 200)` (#096fc8); 1px `#096fc8` border; `border-radius: 1584px`; height 56px
- Consent button "同意する": `background-color: rgb(9, 111, 200)` (#096fc8); white text; `border-radius: 1584px`; `padding: 0px 40px`; height 48px; Yu Gothic Pr6N 14.55px
- Contact/Careers panel "Contact お気軽にお問い合わせください": `background-color: rgb(255, 255, 255)`; `color: rgb(9, 111, 200)` (#096fc8); `border-radius: 8px`; `padding: 66px 16px`; height 210px
- Section eyebrow H2 "Services"/"Work"/"Products": `color: rgb(9, 111, 200)` (#096fc8); My Galano Grotesque; `font-size: 16px`; `font-weight: 400`; `line-height: 20px`
- Work-card H3 "スズキ株式会社": `color: rgb(51, 51, 51)` (#333333); `font-size: 40px`; `font-weight: 600`; `line-height: 44px`; `letter-spacing: -1px`; secondary read `color: rgb(129, 176, 218)` (#81b0da)
- News banner H2 "News": `color: rgb(9, 111, 200)` (#096fc8); `font-size: 53.33px`; `font-weight: 600`; `line-height: 60px`; `letter-spacing: -1.33px`
- News headline H3 (JP): `font-family: "A+EqpB-游ゴシック体 Pr6N B"`; `font-size: 17.78px`; `line-height: 28px`; `color: rgb(51, 51, 51)`
- header/nav link "Why design": `color: rgb(51, 51, 51)`; `font-family: "My Galano Grotesque"`; `font-size: 16px`; `font-weight: 400`; `padding: 8px 0px`
- JP sub-nav link "会社概要": `font-family: "A+EqpB-游ゴシック体 Pr6N B"`; `font-size: 14.55px`; `color: rgb(51, 51, 51)`
- box-shadow: `none` across hero, nav, CTAs, cards, and Contact/Careers panels
- document.title (homepage): "Goodpatch グッドパッチ｜デザインの力を証明する"
- document.title (company): "Company｜Goodpatch グッドパッチ"

## Evidence class of the legacy sections

The source's own closing comment partitions its file, and this migration follows that partition rather than treating the whole file as one evidence class.

| Legacy range | Source's stated attribution |
|---|---|
| §1-§9 (token-level claims) | Tier 1 live inspection, 2026-06-17, via playwright `getComputedStyle` on `https://goodpatch.com/` and `https://goodpatch.com/company` |
| §10 Voice samples | verbatim from the live surfaces — hero H1 "Design to empower", `document.title` "デザインの力を証明する", Careers card "一緒にデザインの力を証明しませんか？" |
| §11 Brand narrative | facts verified via WebFetch on `https://goodpatch.com/company/profile` (2026-06-17): 株式会社グッドパッチ / Goodpatch Inc.; 設立 2011年9月; 代表取締役社長 土屋尚史; business scope as quoted in the body; HQ Shibuya, Tokyo. TSE listing (IPO 2020) and products (Prott, ReDesigner) are described as widely documented public facts, referenced via IR / Products sections but not quoted verbatim there. |
| §13 Personas | fictional archetypes, names illustrative, do not refer to real people |
| §14 States, §15 Motion | **no attribution given.** The closing comment assigns a source to §1-9, §10, §11, and §13 and assigns none to these two sections. Both are therefore carried as system-level statements with a derived-editorial qualification adjacent to them in the portable body. |
| Interpretive claims | the comment names "type carries the conviction", "flat as confidence", and "the website is the proof" as editorial readings, not quoted Goodpatch statements |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage | `https://goodpatch.com/` | 2026-06-17 |
| company | Company surface | `https://goodpatch.com/company` | 2026-06-17 |
| profile | company profile facts (WebFetch) | `https://goodpatch.com/company/profile` | 2026-06-17 |

## Sources

### Tier 1 (from the legacy footer)

- `https://goodpatch.com/` — homepage, live computed style
- `https://goodpatch.com/company` — Company surface, live computed style
- `https://goodpatch.com/company/profile` — company profile facts

Legacy footer wording: **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces).

### Tier 2 (no usable record)

- `getdesign.md/goodpatch` — no data ("No designs found")
- `styles.refero.design/?q=goodpatch` — no Goodpatch-specific entry (generic browse cards only)

## Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign.md | refero | Resolution |
|---|---|---|---|---|
| Primary blue | `#096fc8` (rgb(9,111,200)) on CTAs/links/eyebrows | no data | no entry | Tier 1 (live, both surfaces) |
| Ink / body text | `#333333` (rgb(51,51,51)), line-height 2.0 | no data | no entry | Tier 1 (live) |
| Canvas | `#f6f6f6` paper under `#ffffff` cards | no data | no entry | Tier 1 (live) |
| CTA radius | full pill (computed 1584px ≈ 9999px) | no data | no entry | Tier 1 (live) |
| Panel radius | 8px | no data | no entry | Tier 1 (live) |
| Shadow | `none` (shadowless) | no data | no entry | Tier 1 (live, both surfaces) |
| Display font | My Galano Grotesque (Latin) | no data | no entry | Tier 1 (live) |
| CJK body font | Yu Gothic Pr6N (`"A+EqpB-游ゴシック体 Pr6N"`) | no data | no entry | Tier 1 (live) |

No conflicts: both Tier 2 sources returned no Goodpatch-specific data, so Tier 1 live inspection (two surfaces, cross-confirmed) is the sole authority.

## Claim ledger

Every value's legacy origin and its portable destination. `home` = `https://goodpatch.com/`; `company` and `profile` as above.

| Claim | Legacy origin | Portable destination | Surface |
|---|---|---|---|
| `tokens.colors.primary` `#096fc8` | frontmatter + §2 Primary | Foundations `Semantic color`, Primary Pill CTA, Outline Pill CTA, Consent Confirm, Section Eyebrow, Nav active | home, company |
| `tokens.colors.primary-light` `#81b0da` | frontmatter + §2 | Foundations `Semantic color`, Work Card title secondary read | home |
| `tokens.colors.sky` `#76b7ed` | frontmatter + §2 | Foundations `Semantic color` | home |
| `tokens.colors.ink` `#333333` | frontmatter + §2 | Foundations `Semantic color`, Work Card, Nav Link, Footer Link | home, company |
| `tokens.colors.ink-pure` `#000000` | frontmatter + §2 | Foundations `Semantic color` | home |
| `tokens.colors.body` `#6e6e6e` | frontmatter + §2 | Foundations `Semantic color` | home |
| `tokens.colors.muted` `#9096a2` | frontmatter + §2 | Foundations `Semantic color`, State record | home |
| `tokens.colors.faint` `#8f95a1` | frontmatter + §2 | Foundations `Semantic color`, State record | home |
| `tokens.colors.canvas` `#ffffff` | frontmatter + §2 | Foundations `Semantic color`, Outline Pill CTA, Contact / Careers Panel, Work Card, Section Eyebrow, Nav Link | home, company |
| `tokens.colors.paper` `#f6f6f6` | frontmatter + §2 | Foundations `Semantic color` and `Elevation`, Layout, Work Card role | home |
| `tokens.colors.dark` `#191b1f` | frontmatter + §2 | Foundations `Semantic color` | home |
| `tokens.colors.dark-chrome` `#45474a` | frontmatter + §2 | Foundations `Semantic color` | home |
| `tokens.colors.coral` `#ff776b` | frontmatter + §2 | Foundations `Semantic color` | home |
| `tokens.colors.coral-tint` `#ffaba3` | frontmatter + §2 | Foundations `Semantic color` | home |
| `tokens.colors.plum` `#534c97` | frontmatter + §2 | Foundations `Semantic color` | home |
| `tokens.colors.on-primary` `#ffffff` | frontmatter + §2 | Foundations `Semantic color`, Primary Pill CTA, Consent Confirm | home |
| `tokens.typography.family` (My Galano Grotesque / Yu Gothic Pr6N / sans-serif) | frontmatter + §3 Font Family | Typography & Assets `Family` and `Font evidence` | home, company |
| 9 type roles (size / weight / unitless lineHeight / tracking / use) | frontmatter `typography` + §3 Hierarchy table | Typography & Assets `Type roles` | home, company |
| `tokens.spacing` 7 keys (4 / 8 / 16 / 24 / 40 / 66 / 120) | frontmatter + §5 Spacing System | Foundations `Spacing` | home |
| `tokens.rounded` sm 8 / pill 9999 / full 9999 | frontmatter + §5 Border Radius Scale | Foundations `Shape` | home |
| computed CTA radius `1584px` | frontmatter note + §5 | Foundations `Shape`, Primary Pill CTA, Outline Pill CTA | home |
| `tokens.shadow.none` | frontmatter + §6 | Foundations `Elevation`, Contact / Careers Panel | home, company |
| `tokens.components.cta-primary` `type: button` | frontmatter + §4 | Components `Primary Pill CTA` | home |
| `tokens.components.cta-outline` `type: button` | frontmatter + §4 | Components `Outline Pill CTA` | home |
| `tokens.components.cta-consent` `type: button` | frontmatter + §4 | Components `Consent Confirm` | home |
| `tokens.components.contact-card` `type: card` | frontmatter + §4 | Components `Contact / Careers Panel` | home |
| `tokens.components.work-card` `type: card` | frontmatter + §4 | Components `Work Card` | home |
| `tokens.components.section-eyebrow` `type: badge` | frontmatter + §4 | Components `Section Eyebrow` | home |
| `tokens.components.nav-link` `type: tab` | frontmatter + §4 | Components `Nav Link` | home |
| `tokens.components.footer-link` `type: listItem` | frontmatter + §4 | Components `Footer Link` | company |
| Elevation levels 0-1 | §6 table | Foundations `Elevation` | home, company |
| Durations 120 / 240 / 400ms | §15 | Foundations `Motion` | no attribution given by the source |
| Easing roles and uses | §15 | Foundations `Motion` | no attribution given by the source |
| 9 state rows | §14 | Components `State record` | no attribution given by the source |
| Breakpoints 640 / 1024 / 1440px | §8 | Layout & Platforms | no attribution given by the source |
| Voice samples ×3 | §10 | Content & Locales | home |
| Brand narrative facts | §11 | Experience `Scope` | profile, home |

## Derived editorial inventory

Twenty-two sentences in the portable body carry the full B2a qualification — "a derived editorial implementation inference from the verified surfaces; … not Goodpatch-authored or a separately published UI specification". They are indexed here so a reviewer can confirm each one sits adjacent to the claim it qualifies rather than only in this sidecar. Measured on the output: 22 occurrences of `derived editorial implementation inference` in `DESIGN.md`. The two occurrences of that clause in this file are the quotation in this paragraph and the count sentence that names it; neither is a portable qualification.

| # | Portable location | What is qualified |
|---:|---|---|
| 1 | Experience `Scope`, paragraph 1 | The refusal to treat the three inspected surfaces as a proxy for Prott or ReDesigner product UI |
| 2 | Experience `Scope`, paragraph 3 | Gallery-wall calm, type-as-instrument, blue-means-act / light-blue-means-atmosphere, coral/plum as punctuation, paper-vs-white as separator, the site as a portfolio piece for "design has the power to move business". Names the source's own note that "type carries the conviction", "flat as confidence", and "the website is the proof" are its editorial readings. |
| 3 | Experience `Scope`, paragraph 4 | The source's characterization of the TSE listing as a rare path and as a statement that design can be a publicly accountable business |
| 4 | Experience `Primary tasks` | The selection of these four as the primary tasks |
| 5 | Experience `Audience` | Reading the archetype-informing groups as this product's audience |
| 6 | Experience `Distinctive traits` | The hero-type, single-action-blue, editorial-calm, paper/white-separator, and bilingual-lane readings inside the nine traits |
| 7 | Experience `Principles` | All five principles and their UI implications |
| 8 | Experience `Application rules` | The eight Do items and their attached reasons |
| 9 | Experience `Avoid` | The eight Don't items and their attached reasons |
| 10 | Foundations `Semantic color` | Role naming, plus the single-action / atmosphere / punctuation / surface-split readings |
| 11 | Foundations `Shape` | Reading the pill / 8px pairing as a deliberate bimodal geometry |
| 12 | Foundations `Elevation` | The editorial-flat reading, restraint-as-confidence, and work-not-chrome reading |
| 13 | Foundations `Motion` | The entire motion contract — durations, easing roles, and motion rules — as a section the source leaves unattributed |
| 14 | Typography & Assets `Family` | The source's "Geometric humanist sans" classification of My Galano Grotesque |
| 15 | Typography & Assets `Typography rules` | The five typography principles as readings of the measured metrics |
| 16 | Typography & Assets `Assets` | Treating case-study imagery as the work that carries the argument, and the instruction not to replace it with invented brand-color decoration |
| 17 | Components `How to read this section` | Every kind verdict, every applicability verdict, and the reason given for either |
| 18 | Components `State record` | The nine state treatments as an unattributed system-level statement |
| 19 | Layout & Platforms, paragraph after the layout bullets | Scale-over-density, exhibition-catalog, surface-split segmentation, and pill-cadence readings |
| 20 | Layout & Platforms, responsive paragraph | The breakpoints, collapsing strategy, image behavior, and the "comfortably tappable" reading of recorded target sizes, as system-level statements rather than cross-viewport measurements |
| 21 | Content & Locales, paragraph 1 | The voice characterization, the register reading, and the tone table |
| 22 | Content & Locales, Forbidden register | "Persuades through conviction and craft, not pressure" as a characterization of the register |

### Evidence-class boundary statements — related but not the same clause

These sentences separate one evidence domain from another. They are not B2a qualifications and are listed separately so the count above is not read as covering them.

| Portable location | Boundary drawn |
|---|---|
| Experience `Scope`, paragraph 4 close | The narrative supplies product context; it does not by itself supply interface tokens. |
| Foundations `Motion`, easing paragraph | The curve values are omitted because they are not traceable to Goodpatch evidence, while the roles and uses are kept. |
| Foundations `Motion` and Governance | The B3 promotion condition: five evidence kinds plus a per-component computed-observation gate are present in both places. The partial-confirmation exclusion sentence is in Foundations `Motion` only, not in Governance. |
| Typography & Assets `Font evidence` | Official product-use / live computed / official distributed / declared-only / license / outside-these-captures are kept as separate classes. |
| Typography & Assets `Assets` | The catalog logo entry is a third-party favicon service, not a Goodpatch-hosted asset, and is held in this ledger rather than presented as a brand asset. |
| Components `Contact / Careers Panel` and `Work Card` | Neither an interactive nor a non-interactive kind is established, so kind and applicability map are both withheld (C4). |
| Components `Section Eyebrow` | Kind is `non-interactive` because the record is a section label, not a control. |
| Content & Locales, closing line | The Japanese strings and the recorded English labels reproduce byte-exact rather than translated or re-cased. |

## Omission ledger

| Omitted | Where it came from | Disposition |
|---|---|---|
| `cubic-bezier(0.2, 0.6, 0.25, 1)` (`ease-enter`) | §15 Easings | Removed from the portable body; held verbatim here. Not traceable to Goodpatch evidence — the sibling records no transition, animation, duration, or easing observation on either inspected surface. |
| `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`) | §15 Easings | Removed from the portable body; held verbatim here. Same absence of evidence, and this exact value is the example curve printed in `spec/omd-v0.1.md` — the file that declares those curves non-brand implementation defaults and forbids moving them into a reference DESIGN.md. |
| `cubic-bezier(0.25, 0.1, 0.25, 1)` (`ease-standard`) | §15 Easings | Removed from the portable body; held verbatim here. Same absence of evidence. |
| §13 fictional archetypes | §13 Personas | Deleted, and deliberately **not** re-hosted in this sidecar. The source's own §13 header and closing comment both state that these are fictional archetypes whose names are illustrative and do not refer to real people. No name, age, city, or biography from §13 is restated here. The audience groups the source says the archetypes were informed by are carried in Experience `Audience` as groups only. |
| §9 Agent Prompt Guide — Quick Color Reference, four example component prompts, and the seven-item Iteration Guide | §9 | Deleted. Tool-facing restatement and copy-paste prompt wrappers have no receiving slot. Every renderable value in §9 was checked against the rest of the file before deletion; no unique render field lived only there. |

## Notes on evidence separation

- Narrative evidence and UI-token evidence stay separate. The founding, the mission, the business span, the product names, and the listing explain the company; none of them supplies an interface token, and the portable body says so.
- The company marketing surfaces and the named products Prott and ReDesigner are separate evidence domains. The products are recorded as named; their interfaces were not inspected and establish no token.
- The two ink values (`#333333` and `#000000`) are kept as two roles. Merging them would erase a recorded distinction.
- Sibling-rounded sizes (`14.55px`, `53.33px`, `17.78px`) are not substituted for the source body's `15px` / `53px` / `18px`.
