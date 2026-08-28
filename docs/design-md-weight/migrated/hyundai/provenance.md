# Hyundai provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/hyundai/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | hyundai |
| name | Hyundai |
| display_name_kr | 현대자동차 |
| country | KR |
| category | automotive |
| homepage | `https://www.hyundai.com/kr/ko/e` |
| primary_color | `#002c5f` |
| logo.type | simpleicons |
| logo.slug | hyundai |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / the navy vehicle action in `DESIGN.md`. The simpleicons slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3.

**Logo decision.** The catalog field is `logo.type: simpleicons` / `logo.slug: hyundai`. That is an identity pointer, not a Hyundai-hosted file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product home | `https://www.hyundai.com/kr/ko/e` | 2026-07-13 |
| vehicles | vehicle catalogue | `https://www.hyundai.com/kr/ko/e/vehicles` | 2026-07-13 |
| ioniq6 | IONIQ 6 intro | `https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq-6/intro` | 2026-07-13 |
| design | official-doc — vehicle-design philosophy | `https://www.hyundai.com/worldwide/en/company/innovation/design` | 2026-07-13 |
| typeface | official-doc — Hyundai Sans UI / Seon | `https://www.hyundai.com/worldwide/en/newsroom/detail/0000000287` | 2026-07-13 |
| history | official-doc — 1967–2000 history | `https://www.hyundai.com/worldwide/en/footer/corporate/history/1967-2000` | 2026-07-13 |

### Tier 1 (as listed in the source footer)

- `https://www.hyundai.com/kr/ko/e`
- `https://www.hyundai.com/kr/ko/e/vehicles`
- `https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq-6/intro`
- `https://www.hyundai.com/worldwide/en/company/innovation/design`
- `https://www.hyundai.com/worldwide/en/newsroom/detail/0000000287`
- `https://www.hyundai.com/worldwide/en/footer/corporate/history/1967-2000`

### Tier 2

- `https://getdesign.md/hyundai` — attempted 2026-07-13, web fetch returned an internal error
- `https://styles.refero.design/?q=hyundai` — attempted 2026-07-13, web fetch returned an internal error

Tier 2 data was unavailable, so it was not used to establish any token or component value.

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (`DESIGN.md` Family):

> Only values observed in the supplied three-surface KR product capture are tokenized. HyundaiSansTextKR and HyundaiSansHeadKR have visible computed use backed by loaded FontFaceSet entries. HyundaiSansHeadKRR and HyundaiSansTextKRR are loaded regional variants; Arial is system chrome and element-icons is declared-only.

## Sibling handling (`web/references/hyundai/.verification.md`)

The sibling exists — confirmed with `find web/references/hyundai -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-13. Method: reconciliation of the supplied deterministic collector bundle `artifacts/reference-evidence/hyundai.json`; no browser capture or MCP was rerun. The bundle records three Hyundai-owned KR product surfaces, 85 coverage, six component types, 54 component variants, one observed state, and zero captured interactions.
- `surface-2::[data-omd-capture="15"]` (`a.btn.nuxt-link-active`): `background-color: rgb(0, 44, 95)` (#002c5f); `color: rgb(255, 255, 255)`; `border-radius: 0px`; `font-family: HyundaiSansTextKR`; `font-size: 16px`; `font-weight: 500`; `line-height: 18.4px`.
- `home::[data-omd-capture="2"]` (`button.lnb_depth0_btn`): `background-color: rgba(0, 0, 0, 0)`; `color: rgb(0, 0, 0)` (#000000); `border-radius: 0px`; `font-family: HyundaiSansHeadKRR`; `font-size: 16px`; `font-weight: 400`; `line-height: 30px`.
- `home::[data-omd-capture="128"]` (`a.btn.btn-external-sm.in-phrase`): `color: rgb(68, 68, 68)` (#444444); `padding: 10px 0px`; `border-radius: 0px`; `font-family: HyundaiSansHeadKR`; `font-size: 14px`; `font-weight: 500`.
- `home::[data-omd-capture="75"]` (`button.el-carousel__button`): `background-color: rgb(0, 127, 168)` (#007fa8); `border-radius: 6px`; `width: 12px`; `height: 12px`; no interaction state captured.
- `home::li` (`li.el-carousel__indicator.el-carousel__indicator--horizontal.is-active`): `padding: 0px 4px`; `border-radius: 0px`; `font-family: HyundaiSansTextKR, "Magul Gothic"`; `font-size: 16px`; `font-weight: 400`; `aria-selected: true`.
- `home::[data-omd-capture="146"]` (Family Site button): `background-color: rgb(28, 27, 27)` (#1c1b1b); `color: rgb(153, 153, 153)` (#999999); `border: 1px solid rgb(103, 103, 103)` (#676767); `border-radius: 0px`; `padding: 0px 13px`.
- `home::[data-omd-capture="122"]` (`button.btn.ibtn.chatbot`): `background-color: rgb(0, 170, 210)` (#00aad2); `border-radius: 100%`; `box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px 0px`; `font-family: HyundaiSansTextKR`; `font-size: 16px`; `font-weight: 500`.
- H2 aggregate on `home`: `font-family: HyundaiSansHeadKR`; `font-size: 44px`; `font-weight: 400`; `line-height: 58px`; `letter-spacing: -0.4px`.

Sibling-only items (transcribed as sibling records; mention here is not portable-body use):

- Pager geometry `width: 12px` / `height: 12px`
- Fallback face `"Magul Gothic"`
- `aria-selected: true`
- RGB spellings of hex values already in the source
- Collector totals 85 coverage / six component types / 54 variants
- Narrative URL `https://www.hyundai.com/worldwide/en/company/sustainability` (Progress for Humanity context)

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.32`, `1.15`). They are carried as ratios in the portable token-set table, never converted to a replacement px (A1a). Source §3's `58px` / `18.4px` / `30px` / `14px` stay on the observed-hierarchy table.
- The source frontmatter records `tokens.spacing` as `{}`. No spacing scale is invented. Component paddings `10px 0px` / `0px 4px` / `0px 13px` stay on those records.
- `tokens.rounded.none: 0` is not `tokens.rounded.pager: 6`. The chatbot `100%` is a body-named radius, not a token-set key. There is no `tokens.rounded.full`.
- YAML `tokens.typography.body.size: 16` and `tokens.typography.action.size: 16` are two type keys. They are not a spacing step.
- YAML `tokens.components.selected-carousel-indicator.type: tab` is attached only to the Selected indicator shell. The other six §4 records are not in the token set.
- `#676767` is the Family Site border in source §4. It is not a `tokens.colors` key.
- YAML hex is lowercase. The portable body keeps that form.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas | whole section | The source recorded no first-party audience segmentation and used a `[FILL IN]` placeholder. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. The section is dropped and is deliberately not restated here as names, ages, cities, occupations, or affiliations (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

No `cubic-bezier` from the `spec/omd-v0.1.md` example table appears in the source. The source lists no duration, easing, animation, or reduced-motion value.

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Navy vehicle action `#002c5f` / white text / `0px` radius / 16px/500 HyundaiSansTextKR — Navy filled vehicle action. The instruction not to derive card, input, error-state, or motion specifications — Avoid.

## Claim ledger

Claims use the YAML anchor from the source: `live` = home / home-live / computed-style / 2026-07-13.

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `accent-teal` / `accent-cyan` / `ink` / `on-primary` / `muted` / `utility` / `footer` | home live |
| `tokens.typography.family.display` HyundaiSansHeadKR / `family.body` HyundaiSansTextKR | home live |
| `tokens.typography.display-h2` / `body` / `action` (size, weight, lineHeight, tracking, use) | home live |
| `tokens.rounded.none` / `pager` | home live |
| `tokens.shadow.chatbot` | home live |
| `tokens.components.selected-carousel-indicator` (type, fg, radius, active, use) | home live |
| Published strings Progress for Humanity / Sensuous Sportiness / Family Site / Hyundai Sans / Hyundai Sans UI / Seon / IONIQ / Pony / Hyundai Motor Company / mobility solution provider | source §10 / §11 / §12 / §4 |
| Founding 1967 / Ulsan 1968 / Pony 1976 / mobility solution provider / 2024 IONIQ milestone / Sensuous Sportiness since 2018 / structure, proportion, and styling / Seon and Hyundai Sans UI as in-vehicle ccNC context, not proof of the KR public-web component rules | source §11 narrative |

## Proof notes

- Six named Tier 1 sources, recorded 2026-07-13. The three KR product URLs are the computed-token surfaces. The design, typeface, and history pages are brand sources, not computed-token surfaces.
- `components_harvested: true`; one component record in the source token set (`selected-carousel-indicator`).
- The source records no `focus-visible` string. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Hyundai has no published first-party web UI specification in the source. Sensuous Sportiness is vehicle-design philosophy. Hyundai Sans UI / Seon are ccNC infotainment context. Derived-editorial qualifications therefore close with the toss-form example: not Hyundai-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- Incorporation year, Ulsan plant, Pony launch, mobility-solution-provider framing, 2024 IONIQ milestone, Sensuous Sportiness since 2018, and the source §11 closing sentence (Seon / Hyundai Sans UI / ccNC, not proof of the KR public-web component rules) are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **21**. This table has **21** rows (E1 1:1). The same 21 lines also carry `not Hyundai-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | Surface boundary: three KR product URLs as token surfaces; official design / typeface / history pages do not supply computed tokens |
| Experience — Scope ¶2 | Keeping recorded values on the surfaces that established them rather than as a house palette |
| Experience — Scope ¶3 | Classifying the 1967 / 1968 / 1976 / 2024 / 2018 / Seon·ccNC narrative as context that does not supply tokens |
| Experience — Primary tasks | Selecting the three label-and-surface tasks; they do not come from the persona section |
| Experience — Distinctive traits | Grouping the seven traits and the teal / cyan / chatbot-as-recorded-use reading |
| Experience — Principles | The three source principles and their UI implications (toss-form header) |
| Experience — Application rules | The three Do-list rules and the reasons attached to them |
| Experience — Avoid | The Don't-list prohibitions plus the §9 card / input / error-state / motion constraint |
| Foundations — Semantic color | Palette-role slotting; teal / cyan stay on recorded uses; `#676767` stays a Family Site border |
| Foundations — Spacing | Empty YAML scale; 10px / 4px / 13px paddings stay component-local |
| Foundations — Shape | Keeping `none: 0` / `pager: 6` / chatbot `100%` on their own paths |
| Foundations — Elevation | Reading the chatbot shadow as a single-control record rather than a depth system |
| Foundations — Motion | Five-kind promotion gate; no motion token promoted |
| Typography — Font evidence | 2023 newsroom as ccNC context; licence boundary; Arial / element-icons not the UI face |
| Typography — Family | No-substitution rule; loaded families canonical only where computed use and FontFaceSet agree |
| Typography — Type roles | Unitless `1.32` / `1.15` kept off `58px` / `18.4px`; body `16` and action `16` stay two type keys |
| Typography — Assets | simpleicons slug as an identity pointer, not a hosted brand file; first-party vehicle photography not replaced with invented decoration |
| Components — Capture record | Role-based applicability procedure; interactive-kind and not-applicable verdicts |
| Layout | Three desktop routes; breakpoint / grid / touch / collapse left unnamed; no universal card / spacing / layout grid promoted |
| Content | Byte-exact / gloss-beside rule; official lines as corporate and vehicle-design language |
| Governance — Recorded unresolved | Naming the list from the source's own unresolved fields |
