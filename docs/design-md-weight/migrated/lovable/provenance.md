# Lovable provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the lovable migration. Canonical source remains `web/references/lovable/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | lovable |
| name | Lovable |
| country | US |
| category | developer-tools |
| homepage | https://lovable.dev |
| primary_color | `#030303` |
| logo | type `favicon`, slug `https://lovable.dev/favicon-192x192.png` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |
| components_harvested | true |

YAML token note (source): Three current public marketing/product routes were captured. Authenticated builder UI, documentation chrome, and declared-only font assets are separate evidence domains; only current live public claims are machine tokens.

No YAML `ds.name` / `ds.url` / `ds.type` is present. A1c: there is no `ds.type` field to keep. No published first-party UI specification was collected. The B2a form used in the portable body is the no-published-UI-specification form.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-12 (home, pricing, product-managers); 2026-07-13 (docs-welcome, docs-quick-start) |
| sources captured | 2026-07-12 (live public + camera-font-asset); 2026-07-13 (docs) |
| tokens.extracted | 2026-07-12 |

Conflicts unresolved: none (source footer records "Conflicts unresolved: none").

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-product | https://lovable.dev/ko | 2026-07-12 |
| pricing | marketing-pricing | https://lovable.dev/ko/pricing | 2026-07-12 |
| product-managers | marketing-product | https://lovable.dev/ko/product-managers | 2026-07-12 |
| docs-welcome | documentation-chrome | https://docs.lovable.dev/introduction/welcome | 2026-07-13 |
| docs-quick-start | documentation-chrome | https://docs.lovable.dev/introduction/getting-started | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://lovable.dev/ko | 2026-07-12 |
| pricing-live | product-surface | https://lovable.dev/ko/pricing | 2026-07-12 |
| product-managers-live | product-surface | https://lovable.dev/ko/product-managers | 2026-07-12 |
| docs-welcome-official | official-doc | https://docs.lovable.dev/introduction/welcome | 2026-07-13 |
| docs-quick-start-official | official-doc | https://docs.lovable.dev/introduction/getting-started | 2026-07-13 |
| camera-font-asset | brand-asset | https://lovable.dev/fonts/CameraPlainVariable-c48bd243.woff2 | 2026-07-12 |

### Tier 1 (source footer)

- https://lovable.dev/ko
- https://lovable.dev/ko/pricing
- https://lovable.dev/ko/product-managers
- https://docs.lovable.dev/introduction/welcome
- https://docs.lovable.dev/introduction/getting-started
- https://lovable.dev/fonts/CameraPlainVariable-c48bd243.woff2

### Tier 2 (attempted; no usable token authority)

- https://getdesign.md/lovable/design-md — independent directory page; description only, no first-party token authority
- https://styles.refero.design/style/9ff62d34-e48d-4fcb-9fd9-c018e2747542 — independent style analysis used only as a cross-check

Tier 2 records are not interface-token sources. No value was used.

### Narrative context (not interface tokens)

- https://lovable.dev/ — current public language: “Build something Lovable,” idea → prototype → refine/ship sequence, templates, and public navigation. Token surfaces in this packet are the three Korean-localized routes above.
- https://docs.lovable.dev/introduction/welcome — first-party product scope, editable code, shared workspaces, GitHub workflow, and user groups.
- https://docs.lovable.dev/introduction/getting-started — first-party project workflow, chat-based editing, visual edits, Build/Plan modes, version history, GitHub integration, and publishing.

These sources support the product narrative and task contexts. They do not supply computed token claims for documentation chrome or private builder UI.

## Claim ledger

Every value below traces to `web/references/lovable/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.ink` `#030303` | YAML `tokens.colors.ink`, §2 Ink | Foundations → Semantic color |
| `tokens.colors.canvas` `#fafafa` | YAML `tokens.colors.canvas`, §2 Canvas | Foundations → Semantic color |
| `tokens.colors.border` `#eceae4` | YAML `tokens.colors.border`, §2 Hairline | Foundations → Semantic color |
| `tokens.colors.overlay-border` `#e7e7e6` | YAML `tokens.colors.overlay-border`, §2 Overlay border | Foundations → Semantic color |
| Primary action `lab(0 0 0 / 0.88)` / on-action `lab(98.2716 0 0)` | YAML `tokens.components.header-primary-action`; §2 | Foundations → Recorded component writings · Components → Header primary action |
| Selected-option violet wash | §2; §7 Don't | Foundations → Recorded component writings · Experience Avoid |
| Retired coral `#ff6f61` | §2; §7 Don't | Experience Avoid · Governance Named gaps (omitted, not restored) |
| `tokens.typography.family.ui` Camera Plain Variable | YAML family; §3 | Typography & Assets → Family |
| `tokens.typography.display` size `60` / weight `600` / lineHeight `1.1` / tracking `-1.5` / use | YAML display; §3 Display 60px / 66px / -1.5px | Typography & Assets → Type roles (A1a: unitless `1.1` kept beside 66px) |
| `tokens.typography.section` size `48` / weight `600` / lineHeight `1.1` / tracking `-1.2` / use | YAML section; §3 Section 48px / 52.8px / -1.2px | Typography & Assets → Type roles |
| `tokens.typography.heading` size `36` / weight `600` / lineHeight `1.1` / tracking `-0.9` / use | YAML heading; §3 Feature heading 36px / 39.6px / -0.9px | Typography & Assets → Type roles |
| `tokens.typography.body` size `16` / weight `400` / lineHeight `1.5` / use | YAML body; §3 Body 16px / 24px | Typography & Assets → Type roles |
| `tokens.typography.navigation` size `15` / weight `400` / lineHeight `1.6` / use | YAML navigation; §3 Navigation 15px / 24px | Typography & Assets → Type roles (A1a: unitless `1.6` kept beside 24px) |
| `tokens.typography.action` size `14` / weight `400` / lineHeight `1.5` / use | YAML action; §3 Compact action 14px / 21px | Typography & Assets → Type roles |
| YAML typography `use` 6 strings | YAML display/section/heading/body/navigation/action | Type roles Token-set use column (verbatim) |
| `tokens.spacing` xxs 4 … 3xl 32 | YAML spacing; §5 4/6/8/10/12/16/24/32px | Foundations → Spacing (unitless YAML beside px list) |
| `tokens.rounded` nav-trigger 0 / control 8 / option 6 / overlay 12 / full 9999 | YAML rounded; §1 / §4 / §7 | Foundations → Shape (+ Components) |
| `tokens.components.header-nav-trigger` (`type: button`) | YAML; §4 Header navigation trigger | Components & States → Header navigation trigger |
| `tokens.components.header-primary-action` (`type: button`) | YAML; §4 Header primary action | Components & States → Header primary action |
| `tokens.components.pricing-cycle-tab` (`type: tab`) | YAML; §4 Pricing-cycle tab | Components & States → Pricing-cycle tab |
| `tokens.components.pricing-selector` (`type: button`) | YAML; §4 Pricing selector | Components & States → Pricing selector |
| `tokens.components.pricing-info-dialog` (`type: dialog`) | YAML; §4 Pricing information dialog | Components & States → Pricing information dialog |
| YAML component `use` 5 strings | YAML five component `use` fields | Components Token-set use rows (verbatim) |
| Dialog shadow string | YAML `pricing-info-dialog.shadow`; §4; §6 | Foundations → Elevation · Components → Pricing information dialog |
| §14 observed hover/pressed/focus/selected/menu-open/dialog-open | §14; YAML `states` | Components → Capture record + per-component Observed |
| §15 no duration/easing; no motion token promoted | §15 | Foundations → Motion |
| B3 five-kind promotion gate | rulebook B3 (not in source as that sentence) | Foundations → Motion · Governance Named gaps |
| §10 “Build something Lovable” / “Start with an idea” / “Watch it come to life” / “Refine and ship” | §10 | Content & Locales |
| §11 full-stack platform, natural-language editable code, shared workspaces, GitHub sync; That product context is not evidence for private workspace controls | §11 | Experience → Scope (fenced as brand narrative) |
| §12 four principles | §12 | Experience → Principles |
| §7 Do 4 / Don't 4 | §7 | Experience → Application rules / Avoid |
| §1 Key characteristics | §1 | Experience → Distinctive traits |
| §1 deliberately quiet interface, warm hairlines, contrast is purposeful, chat-driven way to create software, compact, legible public shell, visually noisy “AI” motif | §1 | Experience → Scope (source fact citation) |
| §11 quiet shell that lets the creation workflow, examples, and templates carry the product story | §11 | Experience → Scope (source fact citation) |
| §13 official documentation task contexts (no named personas) | §13 | Experience → Audience (group-level records only) |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | source footer | This file — Freshness, Sources |

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-12; `pricing` = pricing / pricing-live / computed-style / 2026-07-12; `font` = home / camera-font-asset / computed-style+FontFaceSet / 2026-07-12.

| claim | surface |
|---|---|
| tokens.colors.ink / canvas / border | home |
| tokens.colors.overlay-border | pricing |
| tokens.typography.family.ui | home (camera-font-asset) |
| tokens.typography.display.* / section.* / body.* / navigation.* / action.* | home |
| tokens.typography.heading.* | pricing |
| tokens.spacing.* | home |
| tokens.rounded.nav-trigger / control / full | home |
| tokens.rounded.option / overlay | pricing |
| tokens.components.header-nav-trigger.* / header-primary-action.* | home |
| tokens.components.pricing-cycle-tab.* / pricing-selector.* / pricing-info-dialog.* | pricing |

## Capture selectors

| Component | Pointer |
|---|---|
| Header navigation trigger | `home::[data-omd-capture="1"]` — transparent, `#030303`, 0px, `4px 0px 4px 6px`, 32px, `15px / 400 / 24px`; hover/pressed/focus text `oklab(...)` |
| Header primary action | all three public routes `*[data-omd-capture="7"]` — `lab(0 0 0 / 0.88)` / `lab(98.2716 0 0)`, 8px, `6px 10px`, 32px, `14px / 400 / 21px`; default only |
| Pricing-cycle tab | `pricing::[data-omd-capture="9"]` — transparent / `lab(42.0087 -0.102207 0.363302)`, 9999px, `0px 12px`, 32px, `14px / 400 / 21px`; hover/pressed/selected |
| Pricing selector | `pricing::[data-omd-capture="12"]` — `lab(100 0 0 / 0.8)` / `lab(0.903296 0 0)`, 8px, 32px, `14px / 400 / 21px`; pressed/focus/menu-open |
| Pricing information dialog | `pricing::[data-omd-interaction-capture="dialog-3-0"]` — `lab(99.9884 -0.0000298023 0)`, 12px, 16px, `16px / 400 / 24px`, measured multi-layer shadow; dialog-open |

The portable body keeps each harvested component’s YAML `use` string and the §4 selector writings; the table above is the ledger copy of those pointers.

## Sibling verification file (E2)

`web/references/lovable/.verification.md` exists beside the legacy source and **is adopted** as the evidence record for this migration. Adoption is at the evidence level only. **No portable token and no structural classification was promoted from the sibling** (B1). Concretely, the sibling records the following facts that the legacy `DESIGN.md` never carried as tokens, and none of them entered `docs/design-md-weight/migrated/lovable/DESIGN.md` as new tokens:

| Sibling-only fact | Where it lives | Portable body |
|---|---|---|
| Italic WOFF2 `https://lovable.dev/fonts/CameraPlainVariableRegularItalic-8524cd9a.woff2` | Font evidence below | Portable Assets keeps the YAML-listed `CameraPlainVariable-c48bd243.woff2` only. |
| Element counts 208 / 330 / 220 and collector coverage 100 | Proof — Tier 1 live inspect | Not a portable token. |
| 31 component variants, nine observed states, eight safe interactions | Proof — Tier 1 live inspect | Portable body keeps the five YAML components and the source §14 state list. |
| Selected option `lab(47.9156 57.9535 -81.2975 / 0.08)`, `10px 8px`, `14px/450/21px` | Raw samples | Portable body keeps the source phrase “selected-option violet wash” without those sibling-only metrics. |
| Frequency counts `#eceae4` 685 / `#030303` 392 / Camera Plain Variable 758 | Raw samples | 758 visible uses is also in the legacy §3 table and is in portable Font evidence. Frequency 685 / 392 stay here. |
| `rgb(3, 3, 3)` / `rgb(250, 250, 250)` spellings | Raw samples | Portable hexes stay the legacy `#030303` / `#fafafa` forms. |
| getdesign.md / Refero conflict-matrix rows | Tier 2 attempts | Kept here. No token used. |

### Raw samples (from the sibling)

Kept here because they are per-element evidence, not portable contract.

- home `home::body` — `rgb(3, 3, 3)` text, `rgb(250, 250, 250)` background, Camera Plain Variable `16px/400/24px`
- home `home::[data-omd-capture="1"]` — transparent, `rgb(3, 3, 3)`, 0px radius, `4px 0px 4px 6px`, 32px, `15px/400/24px`
- home `home::[data-omd-capture="7"]` — `lab(0 0 0 / 0.88)` / `lab(98.2716 0 0)`, 8px radius, `6px 10px`, 32px, `14px/400/21px`
- pricing `surface-2::[data-omd-capture="9"]` — transparent / `lab(42.0087 -0.102207 0.363302)`, full-pill radius, `0px 12px`, 32px, `14px/400/21px`
- pricing `surface-2::[data-omd-capture="12"]` — `lab(100 0 0 / 0.8)` / `lab(0.903296 0 0)`, 8px radius, 32px, `14px/400/21px`
- pricing `surface-2::[data-omd-interaction-capture="menu-0-1"]` — selected option `lab(47.9156 57.9535 -81.2975 / 0.08)`, 6px radius, `10px 8px`, `14px/450/21px`
- pricing `surface-2::[data-omd-interaction-capture="dialog-3-0"]` — `lab(99.9884 -0.0000298023 0)` background, 12px radius, 16px padding, `16px/400/24px`, measured multi-layer shadow
- all three public routes — `#eceae4` border (685 occurrences), `#030303` text (392), Camera Plain Variable loaded/high (758 visible uses)

### Conflict matrix (from the sibling)

| Field | Tier 1 supplied collector | getdesign | Refero | Resolution |
|---|---|---|---|---|
| Public neutral canvas and ink | `#fafafa` canvas, `#030303` repeated text, `#eceae4` hairline | descriptive only | similar warm-neutral description | Tier 1 values retained; secondary descriptions do not create tokens. |
| Compact primary action | `lab(0 0 0 / 0.88)`, 8px, 32px, `6px 10px` | no raw component values exposed | near-black action described | Exact Tier 1 component values retained. |
| Shape system | 0px header trigger, 8px action/selector, full-pill pricing tab, 12px dialog | no raw component values exposed | generalizes controls as pills | Split by observed role; no global pill rule. |
| Typography | Camera Plain Variable loaded/high; Roboto Mono declared-only | Camera named descriptively | Camera named with fallback suggestions | Camera Plain remains the only UI family. No fallback is promoted and no font is substituted. |
| Cards, chat input, template gallery, status UI | no matching current reusable public component claim | broad inspiration only | broad style examples | Omitted. |
| Local violet | selected pricing option wash only | not exposed as raw token | describes an accent | Kept as a selected-option observation, not a universal color token. |

No unresolved promoted token conflict remains.

## Omission ledger

| Item | Status |
|---|---|
| §13 Personas | The source records official documentation task contexts rather than named personas. No named-persona biographies existed to delete. Group-level records the source independently attributes to official documentation stay in Experience Audience. No name, age, city, or invented job-title list is carried here (D2a). |
| §15 unsourced easing curve values | None were in the source. Nothing to drop as a curve. Duration and easing remain unresolved. B3 five-kind promotion gate is in portable Motion. |
| §9 Agent Prompt Guide | Deleted as tool-facing restatement. Overlapping `#fafafa` / `#030303` / `#eceae4` / Camera Plain Variable / 8px near-black header action / square header triggers / pricing-local tabs and overlays already have Foundations / Components / Typography slots. No unique numeric value lived only in §9. |
| YAML `ds.type` | Absent in the source. Nothing to keep (A1c N/A). |
| `[FILL IN]` placeholders | Source count 0. None emitted. |
| Sibling-only italic WOFF2, selected-option `lab(47.9156…)` / `14px/450/21px`, collector coverage 100, `rgb()` frequency counts | Evidence-level only in this file. Not portable tokens. This row names the sibling evidence class; it does not assert those strings are absent from this file (E2d). |

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Lovable-authored or a separately published UI specification." This is an index of the derived-reading sites, not a completeness claim. Portable `DESIGN.md` carries 22 complete B2a qualifications. This table is 22 data rows. Preamble sentences on this page are not portable qualifications.

| Location | Qualified reading |
|---|---|
| Experience Scope | Treating the three Korean-localized public marketing/product routes as this contract's token surfaces; treating documentation chrome as product context rather than as a token surface; keeping the source bound that the capture does not authorize claims about the authenticated builder, native clients, or any generated app |
| Experience Scope | Readings of the captured layer as a deliberately quiet public shell, as a compact legible marketing surface rather than a visually noisy “AI” motif, or as a quiet shell that lets the creation workflow, examples, and templates carry the product story |
| Experience Scope | Treating the full-stack platform framing, the natural-language-to-editable-code span, the homepage idea / prototype / refine-and-ship sequence, shared workspaces, GitHub sync, and governance-and-deploy workflow language as official context facts that do not by themselves supply interface tokens, and keeping public marketing/product capture distinct from authenticated product claims |
| Primary tasks | Selecting the three captured public-control outcomes as primary tasks, and refusing the persona section |
| Audience | Reading official-documentation task contexts as audience, and not promoting named personas or inventing job titles, company sizes, technical fluency, goals, or success metrics |
| Distinctive traits | Classifying the list as a restatement of the source's Key characteristics, and the groupings and the readings inside it |
| Principles | The four numbered stems resting on official documentation recorded by the source |
| Application rules | Treating the source Do list as capture-bound application |
| Avoid | Treating the source Don't list as reconstruction prohibitions |
| Semantic color | Pairing hexes to token-set paths; keeping canvas unmerged from header-action text and dialog background; keeping ink unmerged from header-action fill and combobox text; keeping hairline unmerged from overlay-border; keeping the selected-option violet wash off YAML color keys; keeping the lab() action pair as `tokens.components.header-primary-action` fields rather than extra color keys; keeping header-action text `lab(98.2716 0 0)` unmerged from that same lab() token inside `pricing-info-dialog.shadow`; keeping local warm surfaces component-local rather than a universal primary palette; keeping retired coral / generic focus blue / cream card omitted |
| Spacing | Keeping YAML unitless steps beside the source px list; not treating a spacing step as a type size, radius, padding, or control height; treating 32px control heights as local captured geometry that is not a spacing-scale step |
| Shape | Reading 0 / 8 / 6 / 12 / 9999 as local harvested geometry; keeping 6px option local to the pricing option row rather than as a promoted menu-system token; keeping unitless `9999` beside `9999px`; keeping rounded.control 8 unmerged from spacing.sm 8; keeping rounded.overlay 12 unmerged from spacing.lg 12; not a universal radius |
| Elevation | Reading public base controls as flat with overlay-local depth on the pricing dialog rather than as a global shadow scale, and refusing to invent a `tokens.shadow` path |
| Motion | Omitting duration and easing because this packet recorded none; requiring the five-kind per-component computed gate before any promotion; official documentation of a single curve or duration is not that gate |
| Font evidence | Sorting evidence classes; Camera Plain Variable as captured UI family because computed use and FontFace/source agree; Roboto Mono Variable declared-only; no system-face substitution; WOFF2 delivery is not redistribution or license proof; FontFaceSet is specimen corroboration not a license |
| Family | Reading computed visible use plus loaded FontFace/source evidence as the reason Camera Plain Variable is canonical on these three public routes; refusing system-font substitution; keeping Roboto Mono Variable declared-only |
| Type roles | Keeping YAML unitless line-heights and tracking numbers beside px writings; keeping YAML `heading` as Feature heading; keeping Navigation YAML use unmerged from the component use; keeping action YAML use unmerged from the component use; keeping each YAML `use` string beside the hierarchy-table note; keeping `tokens.typography.body.size` `16` unmerged from `tokens.spacing.xl: 16`; keeping `tokens.typography.action.size` `14` as a type size rather than a spacing step |
| Assets | Reading the first-party favicon URL as identity metadata, and the WOFF2 URL as live delivery rather than as a redistribution license |
| Capture record | Declaring Core applicability by control meaning; treating generic observed Focus as a captured Focus treatment and not a `focus-visible` treatment; keeping pressed and selected as captured local observations rather than extra Core §4.4 rows; keeping YAML `use` / font / padding / radius / height / states / bg / fg / border / shadow byte forms; treating the header menu trigger as a menu trigger, the header primary action as a public destination, the pricing-cycle tab as a tab, the pricing selector as a combobox trigger, the pricing information dialog as an information overlay |
| Layout | Reading spacing repetitions as a measured local cluster rather than a complete grid, refusing to average 0px / 8px / 9999px, treating 32px control heights as desktop-capture measurements rather than cross-viewport specifications, and keeping public page composition separate from generated product UI |
| Layout → Responsive behavior | Reading `1440×900` as the capture viewport rather than a cross-viewport specification, and reading the documentation preview switch as product-context language rather than as a public breakpoint table |
| Content & Locales | Characterizing public language as direct, constructive, and sequence-oriented implementation context rather than as a separately published copy manual; requiring quoted strings byte-exact; treating documentation cadence as first-party workflow language rather than as a token source |

Evidence-class boundary sentences in the portable body (a different class from the qualifier above, listed separately so the two are not conflated):

- Scope — the three Korean-localized public marketing/product routes are the token surfaces; documentation chrome is product context; the capture does not authorize authenticated builder, native clients, or generated-app claims.
- Scope — the narrative supplies product context and does not by itself supply interface tokens.
- Foundations → Semantic color — canvas is not on-action `lab(98.2716 0 0)`; ink is not header-action `lab(0 0 0 / 0.88)`; hairline is not overlay-border; violet wash is not a YAML color key; the lab() action pair is not extra `tokens.colors.*` keys; header-action text `lab(98.2716 0 0)` is not the same-lab ring inside `pricing-info-dialog.shadow`; local warm surfaces are not a universal primary palette.
- Foundations → Motion — no duration or easing is recorded; B3 five-kind gate is stated.
- Components → Capture record — generic Focus is not `focus-visible`; absence of a capture is not a `not-applicable` reason.
- Content & Locales — quoted strings are labelled recorded homepage lines; reproduce them byte-exact.

## Proof notes

- verification_v2 schema 2; `conflicts: []`
- `components_harvested: true`
- `tokens.source: reconciled`
- Unobserved loading / empty / error / success / toast / validation treatments are omitted rather than marked `not-applicable` for missing observation. Applicability follows control meaning: the header menu trigger, header primary action, pricing-cycle tab, pricing selector, and pricing information dialog are menu-trigger / destination / tab / combobox-trigger / information-overlay roles, so loading / error / success are `not-applicable` on those roles. Disabled stays `applicable` on all five interactive controls with treatment omitted where unobserved. State coverage is not claimed complete.
- No focus-visible treatment is asserted anywhere: the source records Focus on the header menu trigger and pricing selector, not `focus-visible` (B1).
- Official documentation pages are narrative and task-context sources, not interface-token sources.
- No official Lovable UI specification was collected. The B2a form used in Experience is the no-published-UI-specification form.
- Raw UI proof path recorded by the sibling: `artifacts/reference-evidence/lovable.json` (captured 2026-07-12). The reverify used that supplied raw collector output; no browser capture was rerun.
