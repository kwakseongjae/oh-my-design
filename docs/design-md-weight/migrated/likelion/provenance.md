# LikeLion provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the likelion migration. Canonical source remains `web/references/likelion/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | likelion |
| name | LikeLion |
| display_name_kr | 멋쟁이사자처럼 |
| country | KR |
| category | education |
| homepage | https://likelion.net/ |
| primary_color | `#ff6000` |
| logo | type `favicon`, slug `https://likelion.net/img/favicon.png` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | LikeLion Design System |
| ds.url | https://designsystem.likelion.net/ |
| ds.type | system |
| ds.description | Official public documentation surface. The supplied capture covers its documentation chrome, not component-story tokens. |

`ds.type: system` is kept as a value, not paraphrased away (A1c): it records that a public documentation surface exists. The supplied capture covers documentation chrome, not component-story tokens, so this reconstruction does not take component tokens from that documentation.

The logo record is a first-party favicon on `likelion.net`. It is kept here and named as identity metadata in the portable Assets subsection.

## Freshness

| Event | Date |
|---|---|
| added | 2026-07-02 |
| verified | 2026-07-13 |
| verification_v2.schema | 2 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none (source `conflicts: []`, and the source footer records "Conflicts unresolved: none").

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-course-catalog | https://likelion.net/ | 2026-07-13 |
| docs | documentation-chrome | https://designsystem.likelion.net/?path=/docs/intro-introduction--docs | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://likelion.net/ | 2026-07-13 |
| docs-live | official-doc | https://designsystem.likelion.net/?path=/docs/intro-introduction--docs | 2026-07-13 |
| history-context | official-doc | https://k-digital.likelion.net/364c521d-31d4-425e-a281-7d056ce3f8a6 | 2026-07-13 |
| b2b-context | official-doc | https://likelion.net/b2b | 2026-07-13 |
| pretendard-license | license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | 2026-07-13 |

### Tier 1 (source footer)

- https://likelion.net/
- https://designsystem.likelion.net/?path=/docs/intro-introduction--docs
- https://k-digital.likelion.net/364c521d-31d4-425e-a281-7d056ce3f8a6
- https://likelion.net/b2b

### Tier 2 (attempted; no usable record)

- https://getdesign.md/likelion (attempted; no usable LikeLion record extracted)
- https://styles.refero.design/?q=likelion (attempted; no usable LikeLion record extracted)

Tier 2 records are not interface-token sources. No value was used.

### Narrative and license context (not interface tokens)

- Official history: https://k-digital.likelion.net/364c521d-31d4-425e-a281-7d056ce3f8a6 — 2013 origin, “HACK YOUR LIFE!”, later education initiatives. Company/product context only. The portable body keeps that substance; the URL stays here.
- Official business education: https://likelion.net/b2b — problem-led learning, mentoring, “문제 해결 반복 및 경험 공유”, “AI = 동료”. Brand and educational-context only.
- Pretendard license: https://github.com/orioncactus/pretendard/blob/main/LICENSE — SIL Open Font License 1.1. License fact only; not LikeLion font ownership.

## Claim ledger

Every value below traces to `web/references/likelion/DESIGN.md`. "Source location" is the legacy section or YAML path. Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` | YAML `tokens.colors.primary`, §2 Attention / search | Foundations → Semantic color |
| `tokens.colors.foreground` | YAML `tokens.colors.foreground`, §2 Primary foreground | Foundations → Semantic color |
| `tokens.colors.muted` | YAML `tokens.colors.muted`, §2 Muted text | Foundations → Semantic color |
| `tokens.colors.muted-secondary` | YAML `tokens.colors.muted-secondary`, §2 Secondary muted text | Foundations → Semantic color |
| `tokens.colors.hairline` | YAML `tokens.colors.hairline`, §2 Hairline | Foundations → Semantic color |
| `tokens.colors.promo` | YAML `tokens.colors.promo`, §2 Warm promo surface | Foundations → Semantic color |
| `tokens.colors.nav-border` | YAML `tokens.colors.nav-border`, §2 Account-pill border | Foundations → Semantic color |
| `tokens.typography.body.size` / `weight` / `lineHeight` / `use` | YAML body; §3 Default body | Typography & Assets → Type roles (A1a: unitless `1.5` kept; source 24px kept beside it). YAML use: Observed home body copy; the computed Pretendard Variable face is unresolved, so no UI-family token is assigned. |
| `tokens.typography.section-heading.size` / `weight` / `lineHeight` / `use` | YAML section-heading; §3 Course-section heading | Typography & Assets → Type roles (A1a: unitless `1.5` kept; source 48px kept beside it). YAML use: Observed home course-section heading. |
| `tokens.typography.search.size` / `weight` / `lineHeight` / `use` | YAML search; §3 Course-search input | Typography & Assets → Type roles (A1a: unitless `1.2` kept; source 24px kept beside it). YAML use: Observed home course-search input. |
| `tokens.rounded.promo` | YAML `tokens.rounded.promo: 16`; §4 promo radius | Foundations → Shape (+ Components) |
| `tokens.shadow.none` | YAML `tokens.shadow.none: "none"`; §6 | Foundations → Elevation |
| `tokens.components.promo-tile` (`type: button`) | YAML `tokens.components.promo-tile`; §4 Promotional tile | Components & States → Promotional tile |
| `tokens.components.account-pill` (`type: button`) | YAML `tokens.components.account-pill`; §4 Navigation account control | Components & States → Navigation account control |
| `tokens.components.course-search` (`type: input`) | YAML `tokens.components.course-search`; §4 Course search | Components & States → Course search |
| §3 four-row hierarchy table | §3 Measured homepage hierarchy | Typography & Assets → Type roles (course-card title is §3 only) |
| §14 six-row state boundary table | §14 | Components & States → Capture record |
| §15 motion absence | §15 | Foundations → Motion |
| §10 voice, Do/Don't table, three source-grounded strings | §10 | Content & Locales |
| §11 2013, HACK YOUR LIFE!, commercial corporation, current course mix, AX learning | §11 | Experience → Scope (fenced as brand narrative) |
| §12 four principles with UI implications | §12 | Experience → Principles |
| §7 Do / Don't | §7 | Experience → Application rules / Avoid |
| §1 Key Characteristics | §1 | Experience → Distinctive traits |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | §4 footer block | This file — Freshness, Sources |

YAML `tokens.spacing` is `{}`. No spacing key path exists to land.

## Capture selectors

| Component | Pointer |
|---|---|
| Promotional tile | `home::[data-omd-capture="13"]` (source) |
| Navigation account control | `home::[data-omd-capture="6"]` (source) |
| Course search | `home::[data-omd-capture="7"]` (source). Captured `::state-focus` / `::state-pressed` are pseudo-state samples. |

The portable body keeps each harvested component’s YAML `use` string, including those selectors; the table above is the ledger copy (E2a).

## Sibling verification file (E2)

`web/references/likelion/.verification.md` exists beside the legacy source and **is adopted** as the evidence record for this migration. Adoption is at the evidence level only. **No portable token was promoted from the sibling.** Sibling-only structural labels (`surface-2`, coverage counters, docs-chrome geometry) were not promoted as token facts (B1). One sibling prose sentence is used in the portable Font evidence Official product-use cell (`No LikeLion-authored font licence`, DESIGN dest 1) — recorded here so this ledger is not stronger than the body. The measurement facts in the table below did not enter the portable body as tokens:

| Sibling-only fact | Where it lives | Portable body |
|---|---|---|
| Coverage counters: score 79, four component types, 32 component variants, three observed pseudo-states | Proof notes below | The one documentation form-error interaction and the home pseudo-state samples are also in the legacy §4/§14, so those phrases are source facts in the portable Capture record. The score 79 / 32 / four-type counters are sibling-only. |
| Docs search chrome geometry: radius `6px`, padding `8px`, `14px / 400` | Raw samples below | `#6b7583` is the legacy §2 excluded documentation-chrome value. Extra geometry stays here. |
| Docs chrome `4–10px` radius samples | Component table below | Not a portable radius token. |
| LikeLion-hosted font files `https://likelion.net/fonts/Pretendard-Regular.subset.woff2` (and Medium / SemiBold / Bold) | Font evidence below | Portable Font evidence keeps “LikeLion-hosted static Pretendard files and the Pretendard CDN” from the legacy §3 wording. Exact woff2 URLs stay here. |
| Raw `rgb()` readings (`rgb(34, 34, 34)`, `rgb(252, 244, 238)`, `rgb(255, 96, 0)`, `rgb(37, 99, 235)`) | Raw samples below | Portable hexes stay the legacy `#rrggbb` forms. |

### Raw samples (from the sibling)

Kept here because they are per-element evidence, not portable contract.

- `home::body` — color `rgb(34, 34, 34)`; border-color `rgb(229, 229, 229)`; radius `0px`; font `Pretendard Variable`; `16px / 400 / 24px`.
- homepage course-section `h3` — color `rgb(34, 34, 34)`; `32px / 700 / 48px`.
- `home::[data-omd-capture="13"]` — background `rgb(252, 244, 238)`; color `rgb(34, 34, 34)`; radius `16px`; padding `40px`; `16px / 400`; rendered height `310px`.
- `home::[data-omd-capture="6"]` — text `rgb(34, 34, 34)`; border `rgb(212, 212, 212)` `1px`; radius `9999px`; padding `10px 16px`; `16px / 400`; rendered height `43px`.
- `home::[data-omd-capture="7"]` — text `rgb(255, 96, 0)`; border width `0px`; radius `0px`; `20px / 600 / 24px`.
- `home::[data-omd-capture="7"]::state-focus` — border color `rgb(37, 99, 235)`; border width `0px`; pseudo-state sample only.
- `surface-2` docs search chrome — text/border `rgb(107, 117, 131)`; radius `6px`; padding `8px`; `14px / 400`; documentation chrome only.

### Conflict matrix (from the sibling)

| Field | Tier 1 supplied capture | getdesign | refero | Resolution |
|---|---|---|---|---|
| Homepage attention color | `#ff6000` at course-search input | No usable LikeLion record | No usable LikeLion record | Retained only as observed homepage attention/search color. |
| Homepage foreground and promo tile | `#222222`, `#e5e5e5`, `#fcf4ee` with selector-backed tile | No usable record | No usable record | Retained with homepage provenance. |
| Homepage computed face | Pretendard Variable, no loaded match/source for exact family | No usable record | No usable record | Kept unresolved; no UI-family token. |
| Docs Pretendard | Loaded/high with source URLs on documentation chrome | No usable record | No usable record | Retained as docs-only font evidence, not product-family evidence. |
| Docs chrome controls/error | Present only on `surface-2` | No usable record | No usable record | Kept outside product/marketing tokens and components. |

No unresolved conflicts.

## Omission ledger

| Item | Status |
|---|---|
| §13 Personas — 3 unfinished group slots (learner / organisation-learning / documentation-reader labels) | Deleted. The source's own §13 header states that first-party sources do not supply enough persona research to support invented demographic archetypes. Not promoted into the portable body, and not re-listed here as identifiers (D2a). Experience `Audience` does not carry the dropped slots as group-level audience. |
| §14 Empty / Loading / Error / Success / Skeleton / Disabled placeholder wrappers | The source rows used the concrete placeholder form asking for a public course-surface observation. Those wrappers are omitted as unnamed values. The portable Capture record keeps the no-observation boundary without emitting a placeholder. |
| §15 motion placeholder wrapper | The source asked for selector-backed public motion evidence. That wrapper is omitted. Portable Motion keeps the absence plus the B3 five-kind promotion gate. |
| §9 Agent Prompt Guide — verified prompt boundary | Deleted as a tool-facing restatement. Every value it named (`#222222`, `#e5e5e5`, `#ff6000` 20px/600, `#fcf4ee` 16px/40px, outlined login pill, no orange CTA, no Storybook component set, no mobile layout, no semantic states, no Pretendard substitution) already has a Foundations / Components / Typography slot. |
| Unsourced motion curve / duration / reduced-motion values | None were in the source. Nothing to drop as a curve. B3 five-kind promotion gate is in portable Motion. |
| YAML `tokens.spacing: {}` | Empty in the source. No spacing scale invented. Local 40px / `10px 16px` remain component padding. |

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not LikeLion-authored or taken from a separately published UI specification, including the published LikeLion Design System documentation." This is an index of the derived-reading sites, not a completeness claim. Portable `DESIGN.md` carries 24 complete B2a qualifications. This table is 24 data rows. Preamble sentences on this page are not portable qualifications.

| Location | Qualified reading |
|---|---|
| Experience Scope | Treating `https://likelion.net/` as this contract's token surface; treating the published LikeLion Design System route as official documentation whose captured chrome is not a product-token source; refusing to fill a generic component library from that chrome |
| Experience Scope | Readings of the captured layer as a restrained field; of `#ff6000` as concentrated rather than as a filled orange CTA system; of the documentation-chrome Pretendard load as not a homepage UI-family token |
| Experience Scope | Treating the 2013 origin, the “HACK YOUR LIFE!” through-line, the commercial-corporation move, the current course mix, and AX learning as official educational-context facts that do not by themselves supply interface tokens |
| Primary tasks | Selecting the three captured-homepage outcomes as primary tasks, and refusing the persona section |
| Audience | Dropping the unfinished persona slots rather than promoting them, carrying no demographic segment list, and refusing to treat the dropped slots as audience |
| Distinctive traits | Classifying the list as a restatement of measured values, and the groupings inside it |
| Principles | The four stems plus UI-implication items as a reconstruction pairing; titles rest on official history and business-education material |
| Application rules | Treating the source Do list as capture-bound application |
| Avoid | Treating the source Don't list as reconstruction prohibitions |
| Semantic color | Pairing hexes to token-set paths; keeping primary as attention/search rather than a filled orange CTA; keeping promo unmerged from canvas; keeping hairline unmerged from nav-border; keeping muted unmerged from muted-secondary; not marketing documentation-chrome hexes as product tokens. Same-hex multi-role kept unmerged: `#ff6000` as catalog `primary_color`, `tokens.colors.primary` / attention-search, and course-search Text; `#222222` as `tokens.colors.foreground`, promo-tile Text, and account-pill Text; `#fcf4ee` as `tokens.colors.promo` and promo-tile Background; `#d4d4d4` as `tokens.colors.nav-border` and account-pill Border |
| Spacing | Treating empty YAML `tokens.spacing` as no spacing scale, and keeping 40px / `10px 16px` as component padding rather than as steps of a missing scale |
| Shape | Reading 16 and 9999px as local harvested geometry for observed controls, not a universal radius |
| Elevation | Reading `box-shadow: none` samples as a flat treatment for the observed elements only, and not as a global shadow scale |
| Motion | Treating measured absence as a reason not to promote motion values; requiring the five-kind per-component computed gate before any promotion |
| Font evidence | Sorting evidence classes; homepage `Pretendard Variable` unresolved; documentation-chrome Pretendard as documentation only; declared-only omitted; no system-face substitution called Pretendard |
| Font evidence → Official product-use | Classifying official product-use as unresolved on the source-search finding, and refusing to take a universal current typography token from the published documentation route |
| Font evidence → Official distributed brand asset | Reading LikeLion-hosted Pretendard files as proof of delivery on the captured documentation route rather than as a homepage UI-family token or as ownership of a proprietary typeface |
| Family | Reading computed visible use without a matching FontFaceSet as the reason no homepage UI-family token is assigned, and refusing to extend the documentation-chrome Pretendard load to the homepage |
| Type roles | Keeping YAML unitless `1.5` / `1.2` beside the source's own px writings; keeping course-card title 30px unconverted; keeping each YAML `use` string beside the hierarchy-table note |
| Assets | Treating the first-party favicon slug as identity metadata for the captured homepage, not as a mark taken from the published LikeLion Design System documentation |
| Capture record | Declaring Core applicability by control meaning; keeping YAML `use` / font / padding / radius / border / states byte forms beside the §4 writings; treating the promo tile as a destination tile, the account pill as a 로그인/회원가입 destination, and course-search as a query field; generic observed `focus` is not a `focus-visible` treatment |
| Layout | Reading 731px / 310px / 40px / 43px as local captured geometry rather than as a complete grid, and refusing to average the promo tile and account-pill geometries |
| Layout → Responsive behavior | Reading 1440×900 as the capture viewport rather than a cross-viewport specification |
| Content & Locales | Characterizing official materials as practical, encouraging, and learning-oriented implementation context rather than as a homepage microcopy guide; requiring the three quoted strings byte-exact; treating English beside a Korean label as a reading aid rather than a replacement |

Evidence-class boundary sentences in the portable body (a different class from the qualifier above, listed separately so the two are not conflated):

- Scope — homepage is the token surface; documentation chrome does not authorize product or marketing component tokens; 2013 / “HACK YOUR LIFE!” do not by themselves supply interface tokens.
- Foundations → Semantic color — no filled orange CTA, orange hover, semantic success/error palette, neutral scale, or general canvas token; documentation-chrome hexes are not product tokens.
- Foundations → Motion — no duration, easing, transition, or reduced-motion value is verified; B3 five-kind gate is stated.
- Content & Locales — the three quoted strings are labelled official history/business labels, not homepage microcopy; reproduce them byte-exact.

## Proof notes

- verification_v2 schema 2; `conflicts: []`
- `components_harvested: true`
- `tokens.source: live-extract`
- `ds.type: system`; official documentation surface at `https://designsystem.likelion.net/`; this capture is documentation chrome, not component-story tokens
- Homepage interaction flow: none. Course-search focus/pressed rows are computed pseudo-state samples. The only recorded interaction is a documentation `form-error` on `surface-2`, not promoted to the course surface.
- Unobserved hover / disabled / loading / error / success treatments are omitted rather than marked `not-applicable` for missing observation. Applicability follows control meaning: the promotional tile and the 로그인/회원가입 pill are destination controls, so loading / error / success are `not-applicable` on that destination role; course-search is a query field, so error stays `applicable` with treatment omitted and loading / success are `not-applicable`. Disabled stays `applicable` on all three interactive controls with treatment omitted. State coverage is not claimed complete.
- No focus-visible treatment is asserted anywhere: the source records no `focus-visible` capture. The observed-state name `focus` (`#2563eb` with `0px` border width) is not promoted as `focus-visible` (B1).
- Official history, business education, and Pretendard license pages are narrative or licence sources, not interface-token sources.
- A published LikeLion Design System documentation surface exists. The B2a form used in Experience is the published-spec form (`not LikeLion-authored or taken from a separately published UI specification, including the published LikeLion Design System documentation`) because the reconstruction's editorial inferences are not taken from that documentation. Component-story tokens were not in this capture.
- Raw UI proof path recorded by the sibling: `artifacts/reference-evidence/likelion.json`.
