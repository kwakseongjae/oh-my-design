# Lezhin provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/lezhin/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | lezhin |
| name | Lezhin Comics |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.lezhin.com` |
| primary_color | `#eb0014` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=lezhin.com&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected public homepage `https://www.lezhin.com` is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations Brand Red / the primary CTA in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a Lezhin-hosted brand file.

**Token note** (source frontmatter, kept here): `tokens.source: prose-derived`. Values were taken from homepage HTML and the five CSS bundles named in the source footer, then written as prose.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |
| surfaces inspected | 2026-06-03 |
| sources captured | 2026-06-03 |

The source footer records the verification verbatim as **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | `https://www.lezhin.com` | 2026-06-03 |
| about-en | narrative | `https://about.lezhin.com/en` | 2026-06-03 |

### Tier 1 (as listed in the source footer)

- `https://www.lezhin.com` (homepage HTML + 5 CSS bundles: `035ea059869bfd89.css`, `9161416b11db8c9e.css`, `06e1ad77298be69d.css`, `0427f27bd4442fbd.css`, `895581ecc829564e.css`)
- `https://about.lezhin.com/en` (corporate brand/about page)

### Tier 2

- getdesign.md/lezhin — NOT LISTED (no data).
- refero — not checked (KR brand, typically no result).

Tier 2 data was not used to establish any token or component value. The source names both lookups; they stay as Named gaps of unnamed records, not as new product domains.

## Sibling handling (`web/references/lezhin/.verification.md`)

The sibling exists — confirmed with `find web/references/lezhin -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-03. Method: raw source-file fetch (homepage HTML + 5 CSS bundles) + corporate about-page HTML.
- Homepage HTML 237 KB, `lang="ko"`. CSS1 `035ea059869bfd89.css` 19,988 bytes; CSS2 `9161416b11db8c9e.css` 134,953 bytes; CSS3 `06e1ad77298be69d.css` 101,308 bytes; CSS4 `0427f27bd4442fbd.css` 20,253 bytes. The source footer also names a fifth bundle `895581ecc829564e.css`; the sibling list stops at four CSS files plus the about page.
- Corporate page in the sibling is `https://about.lezhin.com/ko` (351,016 bytes). The source footer names `https://about.lezhin.com/en`. Those two URLs stay two records. The `/ko` URL is inspect context here; it is not a portable-body token surface.
- CSS1 `:root` — `--state-button-primary-default:#eb0014`; `--state-button-primary-hover:#ff5254`; `--bg-inverted-default:#111115`; `--text-default:#111115; --text-soft:#36363a; --text-subtle:#6f6f77; --text-muted:#a1a1a9`; `--border-muted:#e9e9ec`
- CSS2 `:root` — `--grey-0:#fff; --grey-900:#18181b; --grey-950:#111115; --grey-1000:#09090b`; `--red-600:#eb0014; --red-700:#c40017; --red-400:#ff5254`
- CSS2 semantic — `--button-primary-default:var(--red-600)` → `#eb0014`; `--button-primary-hover:var(--red-400)` → `#ff5254`
- CSS2 typeface stack fuller than the source body: `Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, ...`
- CSS2 sizing — `--size-3xs:10px` through `--size-10xl:80px` (source §3 already names that 16-step scale)
- CSS3 `.lzBtn--medium__VwSBj { height:48px; line-height:48px; padding:0 20px; font-size:14px; border-radius:2px }` — sibling padding and radius that the source body does not write on the 48px primary (`0 12px` / `4px`)
- CSS3 `.lzBtn--large__v_uNA { height:56px; line-height:56px; padding:0 24px; font-size:16px; border-radius:4px }` — sibling large padding `0 24px` against source / YAML `0 16px`
- CSS2 `.lzButton { border-radius:var(--xs,4px); font-weight:var(--text-semibold,600) }`
- CSS3 `.lzBtn--filled_red__mb2yC` → background `#eb0014`, color `#ffffff`
- CSS3 `.lzCard` `border:1px solid var(--border-alpha)` where `--border-alpha = rgba(17,17,21,0.1)`
- CSS3 `.lzChip { min-height:32px; padding:0 12px; border-radius:var(--full,999px) }`
- CSS3 `.lzChip[aria-selected=true]` → `rgba(255,82,84,0.15)` / `#c40017`
- CSS3 `.lzTab` default `rgba(17,17,21,.04)`
- CSS3 `.lzSkeleton__oBELh` `animation:skeleton 1.8s ease-in-out infinite`
- CSS3 `.lzSwitch[data-switch=on] .lzSwitchTrack` selected `#eb0014`
- CSS4 `.lzSelectPaper` `box-shadow:0 2px 12px 0 var(--shadow-drop-shadow-2,rgba(17,17,21,.08))`
- HTML og:title `content="레진코믹스 - 솔직한 재미 대폭발"`
- about.lezhin.com/ko og:description `레진엔터테인먼트는 프리미엄 웹툰 서비스 '레진코믹스'를 운영하는 글로벌 콘텐츠 기업입니다`
- getdesign.md/lezhin: "No designs found for 'lezhin'."
- Country note: Lezhin Entertainment HQ is Seoul, Korea

Sibling-only strings stay here. They are inspect context, not portable-body use.

## Capture selectors

The source HTML comment / footer records the live inspect, not `data-omd-capture` pointers. Pointers below are the source’s own surface + control names.

| Component | Pointer |
|---|---|
| Primary / Primary Large | `lzButtonPrimary` / `lzBtn--filled_red`; large size in the same family |
| Secondary | `lzButtonSecondary` / `lzBtn--filled_bw` |
| Tertiary | `lzButtonTertiary` / `lzBtn--filled_grey` |
| Outlined | `lzBtn--outlined` |
| Comic Thumbnail Card | `lzCard` |
| Circle Thumb Card | `lzCardCircleThumb` |
| Default / Selected Chip | `lzChip` |
| Default / Selected Tab | `lzTab` |
| Dropdown paper | `lzSelectPaper` |
| Empty / Skeleton / Error | `lzEmpty` / `lzSkeleton` / `lzError` (state vehicles in source §14, not YAML `tokens.components` records) |

## Proof notes

- Two named Tier 1 sources, recorded 2026-06-03. Homepage HTML + five CSS bundles are the token surfaces; the about page is narrative.
- `components_harvested: true`; twelve component records in the source token set.
- `tokens.source: prose-derived`.
- Uncaptured focus-visible treatments are omitted as values; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- Source §2 `#c40017` and source §9 `#9e0018` are recorded focus/active writings. They are not written onto `focus-visible` rows (B1).
- Lezhin has no published first-party UI specification in the source. Derived-editorial qualifications therefore close with the toss-form example: not Lezhin-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- April 2012 founding by Han Hee-sung (the blogger known as "lezhin") and Kwon Jung-hyuk; Android app launch on June 7, 2013; KidariStudio acquisition in December 2020; coin-based micro-payment / first premium webtoon marketplace; mission "stories can make the world a better place"; 8,000-title catalogue; Lezhin Studio and Lezhin Shop; tagline "솔직한 재미 대폭발"; four stated values (duty and self-reliance, mutual respect, customer satisfaction, and innovation) — source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Claim ledger

Claims use the homepage inspect (home / home-live / prose-derived from CSS / 2026-06-03) unless noted.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-hover / primary-dark / ink / deep-dark / charcoal / text-soft / text-subtle / text-muted / border-muted / surface-muted / canvas / on-primary | home |
| tokens.typography.family.sans / mono | home |
| tokens.typography.section-header / title / body / label / label-medium / caption / caption-small (size / weight / lineHeight / tracking / use) | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home |
| tokens.rounded.sm / md / lg / full | home |
| tokens.shadow.subtle / soft / medium / strong | home |
| tokens.components.button-primary.* | home |
| tokens.components.button-primary-large.* | home |
| tokens.components.button-secondary.* | home |
| tokens.components.button-tertiary.* | home |
| tokens.components.button-outlined.* | home |
| tokens.components.card-thumbnail.* | home |
| tokens.components.card-circle.* | home |
| tokens.components.badge-chip.* | home |
| tokens.components.badge-chip-selected.* | home |
| tokens.components.tab-default.* | home |
| tokens.components.tab-selected.* | home |
| tokens.components.dialog-dropdown.* | home |
| Tagline "솔직한 재미 대폭발" | home + about-en (narrative) |

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| `#eb0014` as the single brand accent on the primary button and selected-state | Foundations Brand Red + Primary CTA + Selected Chip/Tab/Switch |
| Grey ladder `#111115` → `#e9e9ec` → `#ffffff` | Foundations Ink / Border Muted / Canvas |
| Font stack `Pretendard Variable, Pretendard, -apple-system, Noto Sans KR, sans-serif` | Family |
| 14px/600 buttons, 16px/400 body, 12px/400 metadata | Type roles + button Font rows |
| Radius 4px buttons/cards; 999px pills; avoid >12px on rectangular elements | Shape + Application rules + Avoid |
| Spacing 4/8/12/16/20/24px; Card gutters are 4px (dense) or 8–12px (standard) | Spacing + Layout |
| Dark mode `--bg-default` `#111115`, `--text-default` `#ffffff` | Layout & Platforms |
| `0.2s ease-in-out` background-color/borders; `0.25s linear` transforms; skeleton `1.8s ease-in-out infinite` | Foundations Motion |
| Disabled primary `rgba(255,82,84,0.2)` | Capture record + Primary disabled |
| Primary focus `#9e0018` | Foundations body writings + Primary focus/active (kept beside `#c40017`) |

## Omission ledger

| Location | Disposition |
|---|---|
| §13 Personas — 4 illustrative archetypes (name, age, city included) | Deleted. Not promoted into Audience or `primary-tasks`, and not re-hosted here. This row names the source section and the field kinds only (D2, D2a). Identifier strings are not copied into this file. |
| `[FILL IN]` wrappers | Source count 0. None omitted, none rewritten. |

Mention of that section as a deletion is a disposition pointer, not a reuse of the biographies.

## B2a ledger (portable-body qualifications)

Each row is one derived-editorial qualification that also appears adjacent in `DESIGN.md`. This ledger does not add a second interpretation; it records the same class. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`). This table has as many data rows as that count (E1 1:1). The same lines also carry `not Lezhin-authored` and `separately published UI specification`.

| Location | Qualified reading |
|---|---|
| Experience — Scope ¶1 | Treating `https://www.lezhin.com` as this contract's token surface, the about page as narrative rather than as a token surface, and the named app launch, Studio, Shop, and regional services as availability rather than as captured UI; reading the source's opening product characterization as catalog reconstruction rather than as Lezhin-authored copy |
| Experience — Scope ¶2 | Calling the recorded light canvas plus inverted near-black pairing a dual-mode interface; calling the recorded layer dark, immersive, premium but unadorned, or a UI in which 8,000+ titles speak louder than chrome |
| Experience — Scope ¶3 | Classifying the founding-and-commerce narrative as context that does not by itself supply interface tokens |
| Experience — Primary tasks | Selecting the three surface-or-control tasks; they do not come from the persona section |
| Experience — Audience | Reading the source-named groups as audience, and dropping archetype biographies rather than promoting them |
| Experience — Distinctive traits | Classifying the list as a restatement of recorded values; grouping the five traits and the readings inside them |
| Experience — Principles | Reading the five source principles and every UI implication as implementation principles |
| Experience — Application rules | Grouping the seven Do-list rules and the reasons attached to them |
| Experience — Avoid | Grouping the six Don’t-list prohibitions and the reasons inside them |
| Foundations — Semantic color | Pairing hexes to token-set paths; keep-both on canvas/on-primary `#ffffff`, ink vs inverted vs light text, charcoal vs dark `--border-muted` vs secondary fill, `#c40017` vs `#9e0018`; snackbar / skeleton-dark / disabled-tertiary / selected-chip wash / primary-disabled / AI-gradient as body writings that are not YAML `tokens.colors.*` keys; control text, snackbar text, and dark-mode inverted text stay on the two YAML keys that share that hex, not a third YAML colors key |
| Foundations — Spacing | Keeping unitless spacing steps on their own keys; gutters off those keys; md ≠ rounded.lg; sm ≠ rounded.md; xs ≠ rounded.sm and ≠ button radius; base ≠ body size; lg ≠ outlined padding; xl ≠ section-header size; section ≠ Primary Large height; xxl ≠ a type size |
| Foundations — Shape | Keeping four rounded keys; keep-both on `999px` / unitless `9999` / `9999px`; `4px` unmerged from spacing `4`; 12px rectangular ceiling on `tokens.rounded.lg` |
| Foundations — Elevation | Keeping YAML `"0 0 0 …"` strings on their own keys rather than flattening them over the §6 rgba ladder; Level 5 / thumbnail inset / full scrim off the YAML keys |
| Foundations — Motion | Holding recorded CSS motion, omitting reduced-motion, holding the five-kind promotion gate, and reading `ease-in-out` / `linear` as CSS named keywords rather than as catalog template cubic-bezier values |
| Foundations — Motion keep-both | Keeping §9 second-unit writings beside the millisecond scale rather than converting one writing into the other |
| Typography — Font evidence | Evidence-class application readings: about page is not a universal type token; Pretendard Variable is the live computed UI family; homepage CSS stack corroborates the load; no Lezhin-exclusive distributed family; named fallbacks remain fallbacks; Studio / Shop / United States / Japan typography stay outside the homepage CSS capture |
| Typography — Family | Keeping `tokens.typography.family.sans` and `tokens.typography.family.mono` as two keys; refusing to present a fallback as the brand face |
| Typography — Type roles | Keeping YAML `use` verbatim; unitless `1.35` / `1.4` / `1.5`; YAML sizes beside the 16-step px scale; YAML tracking `-0.36` beside `−0.28px to −0.36px` |
| Typography — Assets | Catalog-boundary reading of the Google s2 favicon slug; thumbnails as first-party catalog content |
| Components — Capture record | Applicability procedure; omitting Kind and the map on the two card records; L/E/S closures on chips, tabs, and the dropdown paper; YAML `use` as Token-set use beside Role; YAML compact `14px/600` beside body `14px / 600`; 28px (xs) as a Do-list ladder note; two recorded focus/active writings kept off `focus-visible` rows |
| Layout & Platforms | Treating breakpoints, `calc` card widths, 1036px / 1212px max-widths, the 36px touch floor, the 53 dark-scheme queries, and the `--bg-default` / `--text-default` swap as the source's own layout contract; keeping the §5 4-column tablet writing beside the §8 4–6-column tablet writing; recorded control heights as control measurements, not a cross-viewport specification |
| Content & Locales — voice | Calling the register direct, confident, and candid; reading the table as reconstruction direction; reading recorded UI copy as Korean with dedicated KR / US / JP catalogues |
| Content & Locales — samples | Classifying the parenthetical glosses as editorial readings of the samples |
| Governance — Named gaps | Reading the list as unnamed values, not as coverage of domains the source never named |
