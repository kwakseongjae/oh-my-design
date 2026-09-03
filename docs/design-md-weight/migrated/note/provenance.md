# note provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/note/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | note |
| name | note |
| country | JP |
| category | consumer-tech |
| homepage | `https://note.com` |
| primary_color | `#41C9B4` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=note.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-05-19 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1 (`https://note.com`). Catalog `primary_color` `#41C9B4` is dual: identity here, and a keep-beside record in `DESIGN.md` Scope / Semantic color — it is the same teal as `tokens.colors.brand` `#41c9b4`, not a second teal. Catalog logo type `favicon` / Google s2 slug is this identity ledger. Portable Typography & Assets records type `favicon` and a Google favicon lookup / non-promotion identity-boundary without the URL (E1). It is not a captured first-party mark.

`tokens.source: prose-derived` is this identity/Claim ledger as the colon form (A1c). The portable body writes `YAML tokens.source is prose-derived` (value `prose-derived` is dual). `components_harvested: true` is ledger metadata. YAML has no `ds.name` / `ds.url` / `ds.type` and no `verification_v2` block. The absence is recorded, not filled (A1c).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-19 |
| surfaces inspected | 2026-05-19 |
| tokens.extracted | 2026-06-09 |
| footer Verified | 2026-05-19 |

The source footer records **Verified:** 2026-05-19 (omd:add-reference — JP batch). That producer string is ledger metadata.

Conflicts unresolved (source footer, kept as the source wrote them): none. Brief-supplied `#41C9B4` confirmed as the logo color; documented the important nuance that note's *product primary action* color is black (teal = brand accent). Both sides stay in the portable body; this row is the ledger copy.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | `https://note.com` | 2026-05-19 |
| brand-help | brand-resource | `help.note.com` brand guideline | 2026-05-19 |
| anoiro | brand-resource | `anoiro.com/themes/note` | 2026-05-19 |
| brandcolor | brand-resource | `brandcolor.info/note` | 2026-05-19 |
| note-dsn | designer-article | `note.com/note_dsn` | 2026-05-19 |

### Tier 1 (as listed in the source footer / HTML comment)

- `https://note.com` (live inspect, 2026-05-19) — page title `note ――つくる、つながる、とどける。`; off-white reading surface + near-black text observed. Dual portable Scope + this ledger (E2a).
- note brand/help resources (WebSearch 2026-05-19, `anoiro.com/themes/note` + `help.note.com` brand guideline + `brandcolor.info/note`): logo color `#41C9B4`, theme color `#2CB696`, dark theme `#228D74`, background `#F7F9F9`, text `#222222`. Dual portable Scope / Semantic color + this ledger (E2a).
- note designer official article (`note.com/note_dsn` `コンテンツにより集中できるデザインに。noteのプライマリーカラーが黒色になるまで`) — confirms note shifted its PRIMARY color to BLACK so content leads; teal became brand accent. Dual portable Scope + Capture verified list + this ledger (E2a).

### Tier 2

- getdesign.md / refero — source footer: not separately fetched. Portable body does not re-host those failure strings (E1).

### Narrative (not interface tokens)

Source §1 / §11 operator `note, Inc.`; individual creators — writers, illustrators, musicians, photographers; three-word thesis **つくる、つながる、とどける**; the unusual, disciplined choice to shift primary-action color to black; premium-paper surface `#F7F9F9` / `#222222`; distinctive teal `#41C9B4` as a recognizable mark rather than a wash; the refuse list (endless-scroll engagement loop, trending-now FOMO, vanity-metric arms race, writing as content to be optimized); closing sentence `note chooses the dignity of the page — and builds its entire visual language to protect it`. Restated in portable Scope under adjacent complete B2a. They are not interface tokens.

## Claim ledger

Token extraction is `prose-derived` (2026-06-09). `components_harvested: true`. Claims split by the source HTML comment: VERIFIED teal palette / bg / text / thesis / black-primary shift vs INFERRED §4 control variants vs representative font stack vs illustrative §15 durations.

| claim | surface |
|---|---|
| tokens.colors.brand / theme / theme-dark | home + brand/help resources |
| tokens.colors.primary | home + designer article (black-primary shift) |
| tokens.colors.canvas / surface / text / on-primary | home (live inspect + brand/help) |
| tokens.typography.family.sans / mono | prose-derived YAML; representative JP-first chain |
| tokens.typography.body / heading | prose-derived YAML weight + use; no size or line-height |
| tokens.spacing.sm / base | prose-derived YAML numbers, no px suffix |
| tokens.rounded.sm / md / lg / full | prose-derived YAML; full 9999 unmerged from 8 |
| tokens.shadow.none | prose-derived YAML string `none`; no numeric token |
| tokens.components.button-primary / button-secondary / button-theme / article-card / editor-canvas / text-field | inferred from palette + black-primary principle per source HTML comment |

## Capture selectors

No `data-omd-capture` selectors exist in the source DESIGN.md. None are invented here.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` — matches the legacy spec-template `ease-standard` example
- `ease-enter` `cubic-bezier(0, 0, 0.2, 1)` — matches the legacy spec-template `ease-enter` example
- `ease-exit` `cubic-bezier(0.4, 0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-soft` `cubic-bezier(0.34, 1.15, 0.64, 1)` — source-reserved overshoot for スキ only; unattributed (source HTML comment: duration values illustrative)

Portable Motion keeps the four names and uses. Duration 0ms / 150ms / 250ms / 300ms remain in portable Motion. Signature motions, spring stance, and `prefers-reduced-motion: reduce` remain in portable Motion. This omission ledger is a log disposition (E2b), not a promotion.

## Omission ledger

Disposition only. This table names what was dropped and why. It does not re-host the dropped content as facts (D2a, E2d).

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing recreate-the-control prompts. Values they restated land in Foundations / Typography / Components / Layout. The §9-only reading-view sentence (teal `#2CB696` only for inline links) lands in Experience Application rules beside the Do list. Article-card title `(bold)` lands on Article / Note Card. Article-card constraint `Minimal chrome — the title and image lead.` lands on Article / Note Card. No receiving slot and no delegation (A2, A3). |
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes informed by note's publicly-described user base, not real individuals. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| YAML `[FILL IN]` | Not present in the source. Nothing to omit at a placeholder boundary. |
| Template `ease-standard` / `ease-enter` / `ease-exit` cubic-bezier values from `spec/omd-v0.1.md`, plus source-reserved `ease-soft` | Omitted as unattributed curves. Names and uses kept. See Omitted unattributed curves (E2b). |

§9 deletion check (A3). Every value the construction prompts name was confirmed present elsewhere in the portable body before the section was dropped. Brand teal logo `#41C9B4` / theme `#2CB696` / dark `#228D74` — Semantic color. Product primary black `#000000` — Semantic color / Primary Button. Page bg `#F7F9F9`; card/editor `#FFFFFF` — Semantic color. Text `#222222` — Semantic color. Radius soft rounded (pill / `8px`+) — Shape / Primary Button. Primary button black bg, white text, soft rounded, on `#F7F9F9` — Primary Button + Layout. Article card white bg, thumbnail + title (bold) + author + metadata, `#222222`, floating on `#F7F9F9` — Article / Note Card. `Minimal chrome — the title and image lead.` — Article / Note Card. Reading view: centered single text column with generous margins on `#F7F9F9`, body `#222222`, teal `#2CB696` only for inline links — Layout + Application rules §9 sentence. Brand accent: `#41C9B4` logo mark + `#2CB696` `フォロー` or link accent — Theme Button. Iteration-guide rules (black primary, off-white reading background, sparing teal, generous whitespace, `#222222`, soft rounded, minimal chrome) — Principles + Application rules + Avoid.

## Sibling

No `.verification.md` sidecar is named in the source packet; none is invented here. This sentence names a missing sidecar class, not a list of sibling-only product facts (E2d).

## Derived editorial inventory

Portable `DESIGN.md` carries 44 complete B2a qualifications. This table is 44 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Inspected URLs as this contract's surfaces; catalog `primary_color` `#41C9B4` beside `tokens.colors.brand` `#41c9b4`; values stay attached; brand/help color resources and the designer article do not rewrite inferred §4 control geometry |
| Experience Scope ¶2 `:11` | Quiet/generous/content-first reading-and-writing space; premium paper; warm-white pages and crisp black type; teal mark without shouting; calm, sincere, and writerly; against dopamine-feed mechanics; a place to settle in; §1 unique atmosphere sentences classified as source-own rather than as that derived list |
| Experience Scope ¶3 `:13` | Anti-feed founding-and-design narrative, including the closing dignity-of-the-page sentence, classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three YAML `use` strings as primary tasks; not from the Personas section |
| Audience `:28` | Dropping the fictional biographies rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading source-named creator/reader groups as audience |
| Distinctive traits `:32` | Groupings and readings of the recorded-value list |
| Principles `:46` | Five numbered items as derived editorial implementation inference; toss-form close |
| Application rules `:56` | Seven Do rules and the reasons attached to them |
| Application rules §9 sentence `:66` | Keeping the §9 reading-view inline-link constraint beside the Do list rather than folding it into §7 |
| Avoid `:70` | Seven Don't prohibitions and the reasons inside them |
| Semantic color `:86` | Role names from the source's labels; YAML/§2 hex keep-both; catalog `#41C9B4` beside `tokens.colors.brand`; primary black off brand teal; canvas off surface off on-primary; text off product-primary black; note pro per-publication theme as default identity rather than a hard-locked single accent |
| Semantic color theme-dark `:90` | Theme-dark kept on the color role; not copied onto a component `hover` row as `focus-visible` or hover treatment |
| Spacing `:105` | Unitless `sm: 8` / `base: 16` kept on their own path; unmerged from matching radius keys and from layout prose |
| Shape `:116` | Three rounded keys that share `8`; `full: 9999` off those keys; body pill / `8px`+ as a second writing; `editor-canvas` off a radius step |
| Elevation `:126` | Paper-like depth rather than a numeric lift scale; YAML `none` kept; no numeric shadow invented for dropdowns/modals |
| Motion `:130` | Duration table and easing names as source-stated rather than computed CSS; duration-values-illustrative as the source HTML-comment class |
| Motion spring stance `:148` | Spring-stance paragraph as source-stated register rather than a separately published note motion specification |
| Motion signature motions `:157` | calm-no-slide; the-one-warm-overshoot-fitting-an-appreciation-gesture; no-aggressive-slide-in; Calm-and-dignified |
| Motion reduced-motion `:159` | Reduced-motion line as source-stated register rather than a computed implementation |
| Motion B3 `:161` | Five-kind promotion gate for a further curve; refusal of a partial confirmation; four duration rows and four easing names kept; duration-values-illustrative |
| Font evidence `:179` | Evidence-class rows as the source's resolution table, not a published note type specimen; sans and mono as two YAML keys that share Hiragino Kaku Gothic ProN; no note-exclusive distributed family; representative JP-first chain rather than loaded webfont proof; no note font-license notice established |
| Family `:187` | Fallback-and-chain reading; system faces not presented as a replacement for the YAML family; §3 Font Stack classification kept on Family rather than replaced by the HTML-comment short form recorded in Font evidence |
| Type roles `:191` | YAML `use` verbatim; weights kept; size and line-height omitted rather than converted from "generous line-height" |
| Assets favicon `:202` | Google favicon lookup as identity metadata rather than a captured first-party mark |
| Assets photography `:204` | Refusing to replace article photography with invented brand-color decoration |
| Capture / graph `:211` | Preserving the source state contract while the catalog graph is not adopted |
| Capture table characterizations `:226` | §14 wording treated as the source state contract rather than a new treatment sheet |
| Capture verified-versus-inferred `:228` | Source HTML-comment verified/inferred split as evidence class rather than a second token sheet |
| Capture / applicability `:230` | Interactive-kind and applicability verdicts and the reason for either; YAML primitive types attached only where the token set records them; not a complete state-coverage claim; named Focus not `focus-visible`; theme-dark not copied onto a black-primary hover row |
| Primary Button keep-apart `:247` | Radius `8` off spacing `8` and off `full: 9999`; fill as `tokens.colors.primary` not brand; on-fill as `on-primary` not canvas; theme-dark `#228D74` off this table's `hover` row; INFERRED class |
| Secondary Button keep-apart `:273` | Fill off canvas; label off product-primary black; mid-gray unnamed; INFERRED class |
| Secondary omitted L/E/S `:282` | Loading/error/success omitted because request/outcome mapping is unresolved, rather than closed from §14 rows |
| Theme Button keep-apart `:297` | Primary-use `フォロー` beside the teal moment; theme off logo-teal and off black; theme-dark as a color-role writing rather than a hover treatment on this row |
| Theme omitted L/E/S `:306` | Loading/error/success omitted because link-versus-follow mapping is unresolved, rather than closed from §14 rows |
| Article / Note Card `:320` | INFERRED; fill off canvas; bold-title writing kept; §9 title-and-image-lead constraint kept beside §4 card-chrome writing; kind and map omitted (C4) |
| Writing Canvas `:332` | Both `#FFFFFF` and `#F7F9F9` ambient kept; record off a radius step; kind and map omitted (C4) |
| Text Field INFERRED + Focus `:349` | INFERRED; named Focus not `focus-visible` evidence; theme-or-black kept as two writings |
| Text Field Focus not a Core row `:361` | Named Focus as an additional named-source-state rather than a Core `focus-visible` row |
| §4 Disabled recipe `:363` | Treatment recipe for button controls, not a seventh YAML component; no primitive type |
| Layout `:368` | Layout behaviors as the source wrote them rather than as a measured cross-viewport specification; YAML spacing unmerged; Desktop/Tablet/Mobile as source §8 writings |
| Content adjectives `:392` | Voice adjectives and the です・ます調 register reading |
| Content forbidden patterns `:404` | Forbidden-pattern list as source-stated §10 rather than a separately published microcopy specification |
| Illustrative voice samples `:412` | Illustrative samples as not-verbatim-live-strings except the homepage thesis |
| Recorded unresolved decisions `:446` | List as a catalog of source-named unresolved writings, not coverage of domains the source never named |

## Proof notes

- No `verification_v2` block in the source frontmatter. No sibling `.verification.md`.
- `components_harvested: true`
- `tokens.source: prose-derived` is ledger metadata as the colon form. Value `prose-derived` is dual portable Scope + this ledger (E2a).
- Catalog Google s2 favicon URL is this identity ledger only. Portable Assets names type `favicon` and Google favicon lookup / non-promotion without the URL (E1).
- Uncaptured hover fill / focus-visible chrome are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Named Focus accent in note Theme `#2CB696` (or black) is an additional INFERRED named-source-state, not `focus-visible` treatment evidence (B1).
- YAML primitive types preserved: `Primitive type: button` on Primary / Secondary / Theme; `Primitive type: card` on Article / Note Card and Writing Canvas; `Primitive type: input` on Text Field (A1b). §4 Disabled has no primitive type. スキ is not a YAML component.
- C4 omit-kind set: Article / Note Card, Writing Canvas. YAML records `type: card` and no interactive-kind.
- Secondary / Theme omit loading/error/success fields (C2) because request/outcome mapping is unresolved. Text Field closes loading/success with a role reason and keeps error applicable. `not captured` is not the reason (C1).
- Source §13 fictional archetypes are deleted, not Audience, not primary tasks, and not re-hosted as demographics here (D2, D2a).
- The B3 five-kind per-component computed gate is Foundations Motion in full text (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence (E2c).
- Source §9 Agent Prompt Guide brand constraints are in Experience / Foundations / Components / Layout; the prompt wrapper is deleted. No `omd-apply` / `npx omd` in the portable body.
- Source YAML has no `ds.type` and no `verification_v2.schema`; none invented.
- No separately published note UI specification is named as a component system (brand/help is a color resource; the designer article is the black-primary narrative), so every derived-editorial close uses the toss-form `not note-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석).
