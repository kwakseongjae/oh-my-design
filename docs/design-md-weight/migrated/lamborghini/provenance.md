# Lamborghini provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the lamborghini migration. Canonical source remains `web/references/lamborghini/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | lamborghini |
| name | Lamborghini |
| country | IT |
| category | automotive |
| homepage | https://www.lamborghini.com |
| primary_color | `#ffc000` |
| logo | type `simpleicons`, slug `lamborghini` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The logo record is a third-party icon-set entry (`simpleicons` / slug `lamborghini`), not a Lamborghini-distributed brand-asset file. It is kept here and named as identity metadata in the portable Assets subsection; it is not carried as a first-party mark file. Source YAML has no `ds.type` field; none is invented (A1c).

Source YAML carries no `tokens.note`. Token source is `live-extract`; `components_harvested: true`.

## Freshness

| Event | Date |
|---|---|
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
| home | marketing | https://www.lamborghini.com/ko-en | 2026-07-13 |
| global-home | marketing | https://www.lamborghini.com/en-en | 2026-07-13 |
| models | marketing | https://www.lamborghini.com/en-en/models | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.lamborghini.com/ko-en | 2026-07-13 |
| global-home-live | product-surface | https://www.lamborghini.com/en-en | 2026-07-13 |
| models-live | product-surface | https://www.lamborghini.com/en-en/models | 2026-07-13 |
| corporate-look | official-doc | https://www.lamborghini.com/en-en/news/automobili-lamborghini-launches-its-new-corporate-look | 2026-07-13 |
| brand-manifesto | official-doc | https://www.lamborghini.com/en-en/beyond/brand-manifesto | 2026-07-13 |
| lambotype-design | brand-asset | https://charactertype.com/typefaces/lamborghini/ | 2026-07-13 |
| website-terms | license | https://www.lamborghini.com/en-en/privacy-legal | 2026-07-13 |

### Tier 1 (source footer)

- https://www.lamborghini.com/ko-en
- https://www.lamborghini.com/en-en
- https://www.lamborghini.com/en-en/models

### Tier 2 (cross-check only)

- https://getdesign.md/lamborghini
- https://styles.refero.design/style/c9c5be5a-aaa1-4338-9681-8378d2e24fbd

Tier 2 records are not interface-token sources. Generated catalogue or Refero prescriptions do not replace selector-level collector evidence.

### Narrative and license context (not interface tokens)

- Official 2024 corporate-look announcement: https://www.lamborghini.com/en-en/news/automobili-lamborghini-launches-its-new-corporate-look — black and white as primary hues with yellow and gold accents; official typeface and icon set for company communications. The portable body keeps that substance; the URL stays here.
- Official brand manifesto: https://www.lamborghini.com/en-en/beyond/brand-manifesto — “Driving Humans Beyond”; brave, unexpected, and authentic.
- Character Type Lambotype project: https://charactertype.com/typefaces/lamborghini/ — identifies Lambotype as a variable custom family designed with Strichpunkt. This explains the brand asset; it is not a licence grant.
- Public terms: https://www.lamborghini.com/en-en/privacy-legal — site fonts and other material are protected; no public downstream LamboType web-font licence was found.

## Claim ledger

Claims use the YAML anchor from the source: `home` = home / home-live / computed-style / 2026-07-13.

| claim | anchor |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.primary-muted | home |
| tokens.colors.surface-light | home |
| tokens.colors.foreground | home |
| tokens.colors.on-primary | home |
| tokens.colors.inverse | home |
| tokens.colors.muted | home |
| tokens.typography.family.ui | home |
| tokens.spacing.xs / sm / md / lg / section | home |
| tokens.rounded.square | home |
| tokens.components.accent-cta.type / bg / fg / radius / padding / font / states / use | home |
| tokens.components.outline-action.type / fg / border / radius / padding / font / states / use | home |
| tokens.components.menu-link.type / fg / radius / padding / font / states / use | home |
| tokens.components.selected-tab.type / fg / border / radius / padding / font / states / use | home |
| tokens.components.news-card.type / fg / radius / padding / use | home |

## Capture selectors

| Component | Pointer |
|---|---|
| Accent CTA | `home::[data-omd-capture="45"]`, class `btn-accent btn-large` |
| Alternate accent sample (color only, not a harvested component) | `home::[data-omd-capture="31"]`, `nav-btn explore ... btn-accent` |
| Outline action | `home::[data-omd-capture="46"]` |
| Menu hierarchy link | `home::[data-omd-capture="4"]`, `.burger-menu-link.lev-2-toggler` |
| Selected tab | `home::[data-omd-capture="41"]`, `.react-tabs__tab.react-tabs__tab--selected` |
| Small label (type role) | `home::[data-omd-capture="51"]` |
| News-card image wrapper | `home::div.card-news__image-wrapper` |
| Display headline | `surface-3::h3.card-bt__title-primary` |
| News heading | `home::h3.card-news__title` |

The portable body keeps each component’s YAML `use` string, including those selectors; the table above is the ledger copy (E2a).

## Sibling verification notes — adopted

`web/references/lamborghini/.verification.md` (dated 2026-07-13) exists beside the source and **is adopted** as ledger evidence in this file. Its values are not promoted into the portable body: every portable token comes from `web/references/lamborghini/DESIGN.md` itself. What the sibling adds, kept here:

- **Coverage counters.** `surfaceCount: 3`, `score: 91`, `componentTypes: 5`, `componentVariants: 70`, `observedStates: 3`, `interactionCount: 7`. All seven interactions are tabs.
- **Raw samples** (rgb / extra metrics the source DESIGN.md does not promote as tokens): `.btn-accent.btn-large` `rgb(255, 192, 0)` / `rgb(0, 0, 0)` / `16px / 400 / 24px`; `.btn-secondary.btn-large` `rgba(0, 0, 0, 0)` / `rgb(255, 255, 255)` / `1px` border; menu `.burger-menu-link.lev-2-toggler` bottom-border width `0px 0px 1px` and `18px / 400 / 28px`; selected tab `16px / 400 / 26px`; `.lam-tag.lam-tag--link` `rgb(150, 150, 150)` / `8px` / `10px / 400 / 10px`; `surface-2::h3.card-news__title` `rgb(24, 24, 24)` / `27px / 400 / 37px`; `surface-3::h3.card-bt__title-primary` `rgb(245, 245, 245)` / `120px / 400 / 110px`. The selected-tab `26px` line-height and the menu `0px 0px 1px` bottom border are not in the source DESIGN.md component fields; they stay here.
- **Tab after observed interaction.** `home::[data-omd-interaction-capture="tab-0-16"]`: transparent, `#c4c4c4`, bottom-border width `0px 0px 2px`. Source §2 lists `#c4c4c4` among local values that are not promoted to semantic tokens. It is not added as an unselected-tab token.
- **Disabled carousel previous control.** `models::[data-omd-capture="31"]` in the sibling table is a disabled carousel previous control with `#969696`. Source §14 records disabled carousel-control styling in component samples without exercised disabled behavior. No carousel component is invented in the portable body.
- **Font extras.** Character Type describes Normal-to-Ultracompressed widths and Light-to-Black weights. Those axis names are not promoted as type-role tokens.
- **Narrative extras the source DESIGN.md does not name.** Official company profile https://www.lamborghini.com/company; official design-DNA page https://www.lamborghini.com/en-en/design (proportions, clear contours, precise lines, pure surfaces, hexagon/Y — narrative only; no unmeasured hexagon component). Founder identification on that company page is not re-hosted as a portable claim.
- **Tier 2 extras.** getdesign.md opened and lists one Lamborghini record whose linked preview is a generated catalogue. Refero query `https://styles.refero.design/?q=Lamborghini` hit a safe-open internal error; the record at the footer URL broadly aligns with a dark/yellow editorial direction and names LamboType, but generated spacing/tracking/header/carousel prescriptions do not replace collector selectors.
- **Conflict matrix / reverted legacy claims.** Sibling records that an older snapshot claimed no public filled CTA and a cookie-banner canon. Current raw capture contains public `btn-accent` and `btn-primary`/`btn-secondary` samples; cookie utility is not a canonical component token. No cookie component is added to the portable body. `btn-primary` is not a harvested YAML component.

## Omission ledger

- Source §13 ends with the placeholder `[FILL IN: add research-backed audience needs only when an official or user-provided source is available.]`. It is quoted here as an omission record (E2b) and is not emitted in the portable body. The placeholder is an unresolved research slot, not a named person. This ledger records location and field kind only (D2a). Portable Audience states the same unresolved boundary in prose; Named gaps names first-party persona segmentation and user-research evidence.
- Source §9 Agent Prompt Guide is a tool-directed construction prompt. The prompt wrapper is deleted rather than relocated. Its constituent values (`LamboType` when licensed, `#ffc000` background, `#000000` text, `0px` radius, `24px` padding, no unobserved hover behavior) are restatements of §1–§4. The §9 out-of-scope list (configurator, error state, account flow, modal) and the “not an implementation kit for a vehicle or ownership product” boundary are **not** covered by that deletion: they moved into the portable Experience Scope (A3).

## B2a ledger (portable-body qualifications)

Each row is one derived-editorial qualification that also appears adjacent in `DESIGN.md`. This ledger does not add a second interpretation; it records the same class.

| Location | Qualified reading |
|---|---|
| Experience Scope | Treating the three captured public marketing routes as this contract's token surfaces, and not treating them as proof of authenticated vehicle, owner, dealer, checkout, documentation, configurator, account-flow, or modal product |
| Experience Scope | Reading the captured layer as editorial automotive marketing, reading hard-edged controls and a tightly observed palette as measured character rather than a universal product system, and reading yellow on accent actions as measured character rather than a general semantic palette |
| Experience Scope | Treating the 2024 corporate refresh as this reference's current evolution; treating those first-party statements as assigning no interface token on their own; treating the official identity announcement as brand context rather than a reusable design-system release; treating the live capture's corroboration as not licensing an older site snapshot as a universal product system |
| Primary tasks | Selecting the three captured-surface outcomes as primary tasks, and refusing the persona placeholder |
| Audience | Dropping the unresolved audience-needs placeholder rather than promoting it, inventing no unnamed stakeholder group, and tying work only to the three primary tasks |
| Distinctive traits | Classifying the list as a restatement of measured values, and the groupings inside it |
| Principles | The three manifesto-plus-UI-implication items as a reconstruction pairing; titles cite first-party manifesto values |
| Application rules | Treating the source Do list as capture-bound application |
| Avoid | Treating the source Don't list as reconstruction prohibitions |
| Semantic color | Pairing hexes to token-set paths; keeping surface-light unmerged from inverse; keeping on-primary `#000000` unmerged from foreground `#202020`; keeping `#917300` off hover; keeping `#969696` unmerged from the unpromoted local list; not promoting that local list to semantic, error, success, link, or global-surface roles because the capture does not establish those roles |
| Spacing | Keeping YAML unitless steps unmerged from 24px action/tab padding, from type size, and from isolated `80px 0px` / `40px` measurements; reading the strongest observed local pattern as measured local recurrence rather than a site-wide grid |
| Shape | Reading YAML square 0 as harvested geometry for observed controls, not a universal radius |
| Elevation | Treating depth beyond the observed no-shadow samples as unresolved, and attributing visual weight to transparent wrappers and photography |
| Motion | Treating measured absence as a reason not to promote motion values; not deriving a motion scale from cinematic imagery or the corporate narrative; requiring the five-kind per-component computed gate before any promotion |
| Font evidence | Sorting evidence classes; LamboType as sole UI-family token; `Lambo-icons` declared-only; no system-face substitution called LamboType; official product-use context supports the live family story rather than a reusable captured-file asset; keep family metadata and mark a specimen unavailable unless licensed |
| Type roles | Keeping recorded px line heights unconverted to unitless ratios; keeping `0.225px` tracking on the small-label role only |
| Assets | Treating the Simple Icons catalog pointer as identity metadata rather than a portable first-party mark file |
| Capture record | Declaring Core applicability by control meaning; omitting kind and a state-applicability map for the news-card image wrapper because it declares no control role; not copying an unobserved menu open/close transition as a computed paint; collector `selected` / `tab-selected` labels on button samples are not a button activation transition; selected/tab-selected is not a Core row |
| Layout | Reading spacing repetitions as local measurements rather than a declared layout system or a responsive specification, and reading 24px as the strongest observed local pattern rather than a site-wide grid |
| Content & Locales | Reading manifesto plus uppercase navigation labels as support for a direct, declarative marketing register, not as invented support, legal, or product-error voice |

## Proof notes

- verification_v2 schema 2; `conflicts: []`
- `components_harvested: true`
- `interactionCount: 7`; all seven are tabs; `selected` / `tab-selected` is the only interaction result recorded
- Unobserved hover / disabled / loading / error / success treatments are omitted rather than marked `not-applicable` for missing observation. Applicability follows control meaning: the accent and outline actions are destination-style public-marketing actions, so loading / error / success are `not-applicable` on role grounds; the menu hierarchy link is a toggle; the selected tab selects a panel. Disabled stays `applicable` on those interactive controls with treatment omitted. The news-card wrapper has no interactive-kind evidence, so kind and a state-applicability map are omitted (C4). State coverage is not claimed complete.
- No focus-visible treatment is asserted anywhere: the source records no `focus-visible` capture (B1).
- Official manifesto, 2024 corporate-look, Character Type, and terms pages are narrative, brand-asset, or licence sources, not interface-token sources.
- No fictional persona, demographic, journey, or conversion claim is recorded here; source §13's placeholder is held in the Omission ledger only.
- No official Lamborghini UI specification was collected. The B2a form used in Experience is the no-published-UI-specification form.
