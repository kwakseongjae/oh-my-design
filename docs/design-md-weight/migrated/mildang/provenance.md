# Milddang provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/mildang/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | mildang |
| name | Milddang (I Hate Flying Bugs) |
| display_name_kr | 밀당 (아이헤이트플라잉버그스) |
| country | KR |
| category | education |
| homepage | `https://www.ihateflyingbugs.com/` |
| primary_color | `#00b29d` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=ihateflyingbugs.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not an IHFB-hosted brand file.

Token note from YAML, kept as ledger metadata: `primary = live Mildang PT product-signature teal (#00b29d); corporate accent = magenta (#cc3366, link color); sibling School PT line uses periwinkle blue (#555dfa). Near-black ink #111111 for nav/headings, #333333 body. Shadowless flat system — separation via tinted teal (#e5f7f5/#dff1f1) and grey (#efeff1) surfaces. Single family: Pretendard.`

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| Tier 1 live inspect (source footer) | 2026-07-02 |
| sibling inspect | 2026-07-02 |

The source footer records the verification verbatim as **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate home | `https://www.ihateflyingbugs.com/` | 2026-07-02 |
| mildang-pt-en | Mildang PT product page | `https://www.ihateflyingbugs.com/mildang-pt-en/` | 2026-07-02 |
| r-and-d-blog | official-doc — IHFB R&D team blog | `https://medium.com/mildang` | 2026-07-02 |

### Tier 1 (as listed in the source footer)

- `https://www.ihateflyingbugs.com/`
- `https://www.ihateflyingbugs.com/mildang-pt-en/`
- `https://medium.com/mildang`

### Tier 2

- getdesign.md/mildang (generic SPA shell, no data)
- styles.refero.design/?q=mildang (no genuine entry — first result resolves to unrelated "AngelList")

Tier 2 data was not used to establish any token or component value.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: live-extract` and `tokens.extracted: 2026-07-02`. That producer string is ledger metadata. The portable body attaches tokens to the two inspected routes rather than renaming the source class.

## Sibling handling (`web/references/mildang/.verification.md`)

The sibling exists — confirmed with `find web/references/mildang -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-02. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), Chrome UA + ko-KR locale, `goto` `domcontentloaded` + 3.5s settle, Escape/overlay dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, anchors/buttons, plus a full-DOM background/text-color/border-radius frequency scan on both surfaces (home + scrolled Mildang PT page).
- home · body · `font-family: Pretendard, sans-serif` · `color: rgb(51, 51, 51)` = #333333 · `font-size: 16px` · `line-height: 24px`
- home · h1 "High-Quality Education for Equal Opportunity" · Pretendard · `font-size: 32px` · `font-weight: 700` · `line-height: 44.8px` · `letter-spacing: normal` · `color: rgb(255, 255, 255)` (white on hero image)
- home · h2 "For public education" · `font-size: 20px` · `font-weight: 700` · `line-height: 28px` · `letter-spacing: -0.2px` · `color: rgb(255, 255, 255)`
- home · nav link "Who we are" · Pretendard · `font-size: 16px` · `font-weight: 600` · `color: rgb(17, 17, 17)` = #111111 · `padding: 30px 0px`
- home · default link color · `color: rgb(204, 51, 102)` = #cc3366 (magenta accent, ×14 in fg frequency scan)
- home · product card "For public education / School PT" (anchor) · `background-color: rgb(85, 93, 250)` = #555dfa · `border-radius: 8px` · `padding: 20px 16px` · height 160px
- home · product card "For private education / Mildang PT" (anchor) · `background-color: rgb(0, 178, 157)` = #00b29d · `border-radius: 8px` · `padding: 20px 16px` · height 160px
- home · product card "Newsroom" (anchor) · `background-color: rgb(239, 239, 241)` = #efeff1 · `border-radius: 8px` · `padding: 20px 16px` · height 160px
- home · dark footer section "I Hate Flying Bugs Inc." · `background-color: rgb(47, 50, 51)` = #2f3233 · height 163px
- home · inactive language toggle "KOR" / "ESP" · `color: rgb(153, 153, 153)` = #999999 · `font-size: 16px` · `font-weight: 600`
- home · fg color frequency: `rgb(51,51,51)` #333333 ×138 · `rgb(0,0,0)` #000000 ×80 · `rgb(73,76,79)` #494c4f ×26 · `rgb(204,51,102)` #cc3366 ×14 · `rgb(17,17,17)` #111111 ×11 · `rgb(153,153,153)` #999999 ×2
- home · border-radius frequency: `8px` ×3 · `50%` ×3 · `3px` ×1
- home · `box-shadow: none` across nav, hero, product cards, footer
- home · document.title: "I Hate Flying Bugs Inc."
- mildang-pt-en · document.title "Mildang PT - I Hate Flying Bugs" · body Pretendard 16px · `color: rgb(51, 51, 51)` = #333333 · `line-height: 24px`
- mildang-pt-en · h1 "High-Quality Personalized…" · `font-size: 32px` · `font-weight: 700` · `line-height: 48px` · `color: rgb(17, 17, 17)` = #111111
- mildang-pt-en · h3 "AI-based 1:1 Personalized…" · `font-size: 20px` · `font-weight: 700` · `line-height: 28px` · `color: rgb(255, 255, 255)`
- mildang-pt-en · teal brand accent · `color: rgb(0, 178, 157)` = #00b29d (×7 in fg frequency scan)
- mildang-pt-en · tinted-teal surfaces · `rgb(229, 247, 245)` = #e5f7f5 ×2 · `rgb(223, 241, 241)` = #dff1f1 ×2
- mildang-pt-en · persona card "Students" · `background-color: rgb(223, 241, 241)` = #dff1f1 · height 240px · `padding: 0px 200px 0px 28px`
- mildang-pt-en · persona card "Lecturers" · `background-color: rgb(239, 239, 241)` = #efeff1 · height 240px
- mildang-pt-en · border-radius frequency: `40px` ×3 · `50%` ×1
- mildang-pt-en · `box-shadow: none` across headings and segment cards
- Medium blog verified live 200 via playwright; sibling wording "밀당PT와 스쿨PT를 개발하는 IHFB R&D팀 블로그"
- getdesign.md/mildang and getdesign.md/ihateflyingbugs → HTTP 200 generic SPA shell (~14.7 KB)
- styles.refero.design `?q=mildang` / `?q=ihateflyingbugs` / `?q=밀당` → featured carousel; first "mildang" result resolves to "AngelList"
- KR regional requirement note: getdesign.md / styles.refero.design / Google favicon proxy are explicitly NOT counted toward the KR brand-owned requirement

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- home h2 / card label `For public education`
- product-card label `For private education / School PT` and `For private education / Mildang PT` as quoted sibling snippets
- footer height `163px`
- language-toggle `font-weight: 600` as a sibling-only attachment to KOR / ESP
- fg frequency ×80 / ×26 / ×11 / ×2 (source body records ×138 and ~14×)
- home border-radius frequency `8px` ×3 · `50%` ×3 · `3px` ×1
- mildang-pt h3 computed color `rgb(255, 255, 255)` on "AI-based 1:1 Personalized…"
- Students padding `0px 200px 0px 28px` (the `200px` side)
- Lecturers background `#efeff1` as a sibling-only per-card color
- mildang-pt teal fg ×7
- getdesign.md/ihateflyingbugs and refero `?q=ihateflyingbugs` / `?q=밀당` as sibling-only query variants
- sibling Medium wording with trailing `블로그`
- method details: Chrome UA + ko-KR locale, 3.5s settle, Escape/overlay dismissal
- KR regional-requirement counting note

Values the sibling shares with the source body (corroboration, not new portable facts): Pretendard, `#333333`, 16px / 24px body, "High-Quality Education for Equal Opportunity", 32px / 700, 44.8px inside the source's `44.8–48px` range, `-0.2px`, "Who we are", `#111111`, `30px 0px`, `#cc3366`, `#555dfa`, 8px, `20px 16px`, 160px, `#00b29d`, `#efeff1`, `#2f3233`, KOR / ESP, `#999999`, `box-shadow: none`, "I Hate Flying Bugs Inc.", "Mildang PT - I Hate Flying Bugs", "High-Quality Personalized…", 48px inside that same range, "AI-based 1:1 Personalized…", 20px / 700 / 28px, `#e5f7f5`, `#dff1f1`, Students, Lecturers, 240px, 40px, 50%, AngelList, `밀당PT와 스쿨PT를 개발하는 IHFB R&D팀`.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary | Mildang PT teal `#00b29d` — home entry card + Mildang PT accent |
| tokens.colors.primary-tint | `#e5f7f5` — Mildang PT emphasis labels / feature blocks |
| tokens.colors.primary-tint-alt | `#dff1f1` — rounded persona/segment cards |
| tokens.colors.accent-magenta | `#cc3366` — home link / corporate accent |
| tokens.colors.accent-blue | `#555dfa` — School PT entry card |
| tokens.colors.ink | `#111111` — headings / nav |
| tokens.colors.ink-pure | `#000000` — occasional max-contrast heading |
| tokens.colors.body | `#333333` — standard reading text |
| tokens.colors.slate | `#494c4f` — secondary text / captions |
| tokens.colors.muted | `#999999` — tertiary / inactive (KOR / ESP) |
| tokens.colors.canvas | `#ffffff` — page background / on-color text |
| tokens.colors.surface | `#efeff1` — Newsroom / grey surface |
| tokens.colors.dark | `#2f3233` — corporate footer band |
| tokens.colors.on-primary | `#ffffff` — text on teal / blue / dark |
| tokens.typography.family.sans | Pretendard |
| tokens.typography.display | 32 / 700 / 1.40 — Hero / page H1 headline, Pretendard Bold |
| tokens.typography.heading | 20 / 700 / 1.40 / tracking -0.2 — Section / card H2·H3, Pretendard Bold |
| tokens.typography.nav | 16 / 600 / 1.50 — Top-nav item, Pretendard SemiBold |
| tokens.typography.body | 16 / 400 / 1.50 — Standard reading text, Pretendard Regular |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | 4 / 8 / 12 / 16 / 20 / 28 / 48 / 64 |
| tokens.rounded.sm / md / lg / full | 3 / 8 / 40 / 9999 |
| tokens.shadow.none | `"none"` |
| tokens.components.card-mildang | Mildang PT entry card — teal, the private-education flagship line |
| tokens.components.card-school | School PT entry card — periwinkle blue, the public-education line |
| tokens.components.card-neutral | Newsroom / neutral entry card on grey surface |
| tokens.components.card-tinted | Rounded tinted-teal persona/segment card on the Mildang PT page |
| tokens.components.cta-pill | Teal pill CTA — teal is the single action color |
| tokens.components.nav-link | Top-nav item; inactive language toggle sits at #999999 |
| tokens.components.badge-teal | Tinted-teal emphasis label on Mildang PT surfaces |
| tokens.components.footer-band | Dark corporate footer band (I Hate Flying Bugs Inc. info) |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header and closing note label them fictional archetypes / illustrative names. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components / Experience / Layout. The §9-only hero pairing (white on image, or `#111111` on white) lands on Layout. |
| §15 cubic-bezier values — `cubic-bezier(0.2, 0.6, 0.25, 1)` (`ease-enter`), `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`), `cubic-bezier(0.25, 0.1, 0.25, 1)` (`ease-standard`) | Removed from the portable body as unsourced curves; kept here verbatim. The sibling's method and its raw samples record no transition, animation, duration, or easing observation, and `cubic-bezier(0.4, 0.0, 1, 1)` is the example value that `spec/omd-v0.1.md` carries and defines as a non-brand implementation default that must not be moved into a reference. The roles and their uses stay in the portable body. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Teal `#00b29d` / tints `#e5f7f5` `#dff1f1` / School blue `#555dfa` / magenta `#cc3366` / ink `#111111` / `#000000` / body `#333333` / slate `#494c4f` / muted `#999999` / canvas `#ffffff` / grey `#efeff1` / dark `#2f3233` — Semantic color. Three equal cards ~385×160, 8px, 20px 16px, Pretendard 20px 700, no shadow — Layout + Components. Hero full-width grey band, H1 Pretendard 32px 700 line-height 1.4, white on image or `#111111` on white, body 16px 400 `#333333` — Layout + Type roles. Mildang PT `#dff1f1` 40px card, heading 20px 700 `#111111`, body 16px 400 `#333333`, teal pill 40px white text, no shadow — Components + Type roles. Top nav white header, Pretendard 16px 600 `#111111`, magenta `#cc3366` on active/link, inactive toggle `#999999` — Top Nav Item. Iteration-guide restatements (Pretendard weight hierarchy, teal vs blue, no shadows, soft geometry, near-black text, magenta not a fill, dark band closes the page) — Application rules + Avoid + Foundations.

## Derived editorial inventory

Portable `DESIGN.md` carries 35 complete B2a qualifications. This table is 35 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Two inspected routes as this contract's token surfaces; Medium blog as a named narrative source that does not supply computed tokens; values stay attached |
| Experience Scope ¶2 | Atmosphere readings: calm editorial rather than loud cram-school ad; trustworthy and quietly optimistic; product-as-color wayfinding; deliberately flat shadowless system; mobile-native education-first aesthetic |
| Experience Scope ¶3 | Founding-premise and refuses/embraces narrative as context that does not supply interface tokens; each paragraph's last sentence kept as one unit; engineering-led transparent posture; "one product, one color" as an editorial reading |
| Primary tasks | Selecting the three recorded surfaces and controls as primary tasks; not from the persona section |
| Audience | Biography-drop (no name, age, city, motivation, or affiliation classification); group-level students, lecturers, parents, and "Ontact" (online-contact) teachers |
| Distinctive traits | Grouping the recorded Key Characteristics as the distinctive layer |
| Principles | The five numbered items and their UI implications |
| Application rules | The eight Do rules and the reasons attached |
| Avoid | The seven Don't rules and the reasons inside them |
| Foundations Semantic color | Role names from the source's labels; canvas / on-primary unmerged; ink-pure unmerged from ink; warmth / not-a-fill / product-signature readings |
| Foundations Spacing | Unitless steps unmerged from matching type sizes and padding halves |
| Foundations Shape | `sm: 3` / `md: 8` / `lg: 40` / `full: 9999` unmerged; `50%` kept beside `9999` |
| Foundations Elevation | Shadow-free color as a deliberate modern-flat choice; emphasis as a reach for product color rather than elevation |
| Foundations Motion class | Duration table, easing names, signature motions, and reduced-motion as source-stated rather than computed CSS |
| Foundations Motion curve omission | Treating the source's three curve values as untraceable and omitting them rather than promoting them |
| Motion B3 | Five-kind promotion gate; partial confirmation insufficient |
| Typography Font evidence | Sorting Pretendard / sans-serif fallback into evidence-class rows; no exclusive family |
| Typography Family | Fallback prohibition; Pretendard as the only promoted UI family |
| Type roles | YAML unitless ratios kept; YAML use and §3 notes both kept; heading `-0.2` / `-0.2px` keep-both; §3 `normal` tracking not invented YAML tracking |
| Typography principles | What a weight or a tracking value is *for* |
| Assets | Google s2 slug as identity pointer; document titles as recorded strings; "no shadow at any size" as consistent with the flat system |
| Components how-to-read | Source state contract kept rather than delegated; role-based decision procedure; kind and applicability verdicts; kind/map omitted where interactive-kind is unconfirmed; generic Focus not treated as focus-visible; not a complete state-coverage claim |
| Teal CTA Pill | 40px / 16px 700 as this button's geometry; YAML font and §4 font keep-both |
| Mildang PT Entry Card | 8px / 20px 16px as this card's geometry; destination-tile role |
| School PT Entry Card | 8px / 20px 16px as this card's geometry; destination-tile role |
| Neutral Entry Card | 8px / 20px 16px as this card's geometry; destination-tile role |
| Tinted-Teal Segment Card | 40px / ~240px / 28px as this card's geometry; YAML use / §4 Students·Lecturers·Parents / §5 Ontact Teachers keep-both; kind and map omitted |
| Teal Emphasis Label | 40px / 16px 700 as this label's geometry; kind and map omitted |
| Top Nav Item | 30px 0px / 16px 600 as this nav item's geometry; YAML use beside §4 labels and KOR / ESP; destination-nav role |
| Dark Corporate Band | 16px 400 as this band's geometry; kind and map omitted |
| Layout | Recorded measurements rather than a specification invented on top of them |
| Layout hero pairing | White-on-image / `#111111`-on-white and white-on-hero kept both, not chosen as a replacement |
| Content voice | Calm / credible / mission-framed public voice rather than a separately published microcopy guide |
| Voice samples | Three verbatim live-surface lines rather than a synthetic voice pack; KOR / ESP as captured toggle labels rather than a locale-profile claim |
| Named gaps | Named gaps rather than a domain inventory; unnamed values rather than permissions to invent |
