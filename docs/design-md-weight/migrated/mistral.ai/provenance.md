# Mistral AI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/mistral.ai/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | mistral.ai |
| name | Mistral AI |
| country | FR |
| category | ai |
| homepage | https://mistral.ai |
| primary_color | `#000000` |
| logo | type `simpleicons`, slug `mistralai` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| verification_v2.schema | 2 |
| ds.name | Mistral Brand |
| ds.url | https://mistral.ai/brand/ |
| ds.type | brand |
| ds.description | Official logo, model illustration, and brand-asset guidance. |
| ds.og_image | https://mistral.ai/-/brand/opengraph-image-1robrb.png |

Token note from source YAML: `tokens.source: reconciled`; `components_harvested: true`. Dual destination (E2a): this ledger (verbatim YAML keys) and portable Experience Scope / Foundations (token-set paths, not the `reconciled` extraction-class string). The portable body does not contain `reconciled`.

Catalog homepage `https://mistral.ai` is dual-destination: Experience Scope + this identity ledger (E2a). Captured home is `https://mistral.ai/`; captured pricing is `https://mistral.ai/pricing/`. Those two inspected URLs are dual Scope + this surfaces/Sources/Tier 1 ledger (E2a). YAML `verification_v2.surfaces` also records `pricing-duplicate` at the same pricing URL; that duplicate pass is this ledger only.

Catalog `primary_color` `#000000` destinations: this identity ledger + portable Scope + Semantic Foreground + Public header control text + Expandable/list row text + Pricing navigation container text (E2a). YAML `tokens.colors.foreground` is the same hex on a color key.

Catalog logo type `simpleicons` and slug `mistralai` are dual: this identity ledger + portable Typography & Assets (E2a). They are not a captured first-party mark file.

`ds.type: brand` (A1c), `ds.name` Mistral Brand, `ds.url` https://mistral.ai/brand/, `ds.description`, and `ds.og_image` are this identity ledger. `ds.url` is also named in portable Scope as official brand guidance. The portable body does not re-host the `og_image` URL.

`tokens.source: reconciled` and `components_harvested: true` are this ledger only as YAML keys (A1c). YAML `verified` 2026-07-13 and `extracted` 2026-07-13 are this freshness ledger. Footer **Verified:** 2026-07-13 is this ledger only. `verification_v2.schema: 2` is this identity ledger + Claim ledger + Proof notes (A1c, E2a).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| footer Verified | 2026-07-13 |

Conflicts unresolved: none. Preserved value pairs inside the reconstruction: YAML `tokens.colors.foreground` `#000000` vs YAML `tokens.components.pricing-plan.fg` `#000000` vs §4 plan-shell / quantity-input text `oklch(0.21 0.006 285.885)`; YAML `tokens.colors.border` `#e4e3de` vs quantity-input border `1px solid oklch(0.21 0.006 285.885)`; YAML `tokens.colors.surface-brand-primary` `#fbfbf8` vs `tokens.colors.surface-brand-secondary` `#f5f4ef`; YAML unitless `lineHeight` `1.5` / `1.07` / `1.45` vs §3 `24px` / `60px` / `16px`; YAML tracking `0.16` / `-0.56` vs §3 `0.16px` / `-0.56px`; YAML `tokens.spacing.lg: 16` vs `tokens.typography.body.size` `16` vs `tokens.rounded` keys; YAML `tokens.rounded.sm: 4` vs `tokens.spacing.sm: 4` vs disabled-compact padding `4px`; YAML `tokens.rounded.md: 6` vs harvested `6px`; Inter vs ALTMistral vs Space Mono vs declared-only Source Sans 3. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://mistral.ai/ | 2026-07-13 |
| pricing | product-pricing | https://mistral.ai/pricing/ | 2026-07-13 |
| pricing-duplicate | product-pricing | https://mistral.ai/pricing/ | 2026-07-13 |

YAML `verification_v2.surfaces` records the duplicate pricing pass. Sibling proof states that duplicate improves repeated-observation confidence and is not a third distinct surface. That sibling sentence stays on this ledger; portable Scope names the two inspected URLs.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://mistral.ai/ | 2026-07-13 |
| pricing-live | product-surface | https://mistral.ai/pricing/ | 2026-07-13 |
| inter-asset | brand-asset | https://mistral.ai/fonts/inter/Inter-VariableFont.ttf | 2026-07-13 |
| alt-mistral-asset | brand-asset | https://mistral.ai/fonts/alt-mistral/ALTMistral-Regular.woff2 | 2026-07-13 |
| space-mono-asset | brand-asset | https://mistral.ai/fonts/space-mono/SpaceMono-Regular.ttf | 2026-07-13 |
| brand-guidance | official-doc | https://mistral.ai/brand/ | 2026-07-13 |
| about | official-doc | https://mistral.ai/about/ | 2026-07-13 |
| careers | official-doc | https://mistral.ai/careers/ | 2026-07-13 |

YAML collector kind labels the two live routes `product-surface`. The verification record further labels home as marketing and pricing as product-pricing. Portable Scope uses those further labels. The YAML collector kind strings stay on this ledger.

### Tier 1

- https://mistral.ai/ — public marketing. Dual portable Scope + this ledger (E2a).
- https://mistral.ai/pricing/ — public commercial pricing. Dual portable Scope + this ledger (E2a).
- https://mistral.ai/brand/ — official brand-asset guidance; pixel-cat emblem, preferred gradient logo, monochrome variants, colorful model illustrations. Dual portable Scope / Assets / narrative + this ledger (E2a). Not a numeric UI-token source.
- https://docs.mistral.ai/ — official documentation domain consulted only as a domain boundary. Dual portable Font evidence + this ledger (E2a). No computed-style or FontFaceSet record.
- https://mistral.ai/fonts/inter/Inter-VariableFont.ttf — Inter loaded source. Dual portable Family + this ledger (E2a).
- https://mistral.ai/fonts/alt-mistral/ALTMistral-Regular.woff2 — ALTMistral loaded source. Dual portable Family + this ledger (E2a).
- https://mistral.ai/fonts/space-mono/SpaceMono-Regular.ttf — Space Mono loaded source. Dual portable Family + this ledger (E2a).

Catalog homepage `https://mistral.ai` is dual Scope + this identity ledger (E2a). It is catalog identity, not a third inspected URL.

### Tier 2 (no usable record)

- https://getdesign.md/mistral.ai/design-md (independent analysis; its purple, DM Serif, JetBrains Mono, 8px-button, and 12px-card claims are not promoted)
- https://styles.refero.design/?q=Mistral (attempted; built-in open returned an internal error and no Refero record was used)

Portable Avoid / Named gaps restate the getdesign exclusion using the source footer’s own claim list (E2a). Refero failure strings stay on this ledger (E1).

### Proof (canonical sidecar `web/references/mistral.ai/.verification.md`)

Canonical proof sidecar exists at `web/references/mistral.ai/.verification.md` (A1c; heading `# Mistral AI — Verification Notes (2026-07-13)`). Derived mirror `design-md/mistral.ai/.verification.md` exists. Canonical is `web/references`. This ledger records both. They are not a second portable token table.

Sidecar lineage (this Proof ledger; not portable tokens): current packet adopts sibling sidecar `web/references/mistral.ai/.verification.md`. Raw artifact pointer `artifacts/reference-evidence/mistral.ai.json` comes from sidecar heading. This update uses that supplied collector artifact only; no browser recapture, browser-harness session, or MCP session was run.

- **Inspected:** 2026-07-13
- **Method:** supplied deterministic Playwright collector evidence; no browser capture rerun and no MCP use
- **Sources:**
  - https://mistral.ai/
  - https://mistral.ai/pricing/

Sidecar bundle metadata (this ledger; not portable tokens): `surfaceCount: 3`, `score: 85`, `componentTypes: 6`, `componentVariants: 38`, `observedStates: 1`, `interactionKinds: 0`, `interactionCount: 0`. Portable Capture record restates `interactionCount: 0` and empty `interactions[]` from the source body (E2a). The counts 3 / 85 / 6 / 38 / 1 stay on this Proof ledger.

Raw samples in that Proof block (this ledger). Selector-bound tuples that the source body already records are restated in portable Components from the source DESIGN.md, not from this sibling. Sibling-only extra observations stay here and are not promoted as portable tokens:

- `home::[data-omd-capture="55"]` — public header control. Source §4 already records transparent / `#000000` / right `1px solid #e4e3de` / `0px` / `0px 16px` / `16px / 500 / ALTMistral`. Sibling rgb writings `rgba(0, 0, 0, 0)`, `rgb(0, 0, 0)`, `rgb(228, 227, 222)` are this Proof ledger only.
- `home::[data-omd-capture="1"]` — expandable/list row. Source §4 already records the portable fields. Sibling rgb writings stay here.
- `home::[data-omd-capture="18"]` — linked content row; top border `rgb(228, 227, 222)` / `1px`; padding `16px`; `16px / 400 / 24px / Inter`. **This selector is sibling-only.** Source §4 does not name capture `18`. Not promoted as a portable component (E1).
- `home::p.text-eyebrow-small` — source §3 names this selector for the Small label type-role. Sibling extra geometry `rgb(245, 244, 239)` background, radius `4px`, padding `4px 8px` is this Proof ledger only. Portable Small label keeps the source type-role metrics.
- `pricing::mistral-block-card-plan` — source §4 primary/secondary shells. Sibling extra border writing `1px 0px 1px 1px` and `rgb(251, 251, 248)` / `rgb(245, 244, 239)` stay here. Portable shells keep source `1px solid #e4e3de` and hex/oklch writings.
- `pricing::mistral-atom-navigation-tabs` — source §4 container. Sibling rgb writings stay here.
- `pricing::[data-omd-capture="74"]` — source §4 quantity input.
- `pricing::[data-omd-capture="75"]` — source §4 / §14 disabled compact control. Source values `rgba(7, 7, 11, 0.1)` background, `oklch(0.552 0.016 285.938)` text, `6px` radius, `4px` padding. Dual portable Disabled compact control + Capture record + this ledger (E2a).

Sibling Font evidence extras that the source body does not name (this Proof ledger only): ALTMistral “12 Mistral-hosted” source count; directory `https://mistral.ai/fonts/alt-mistral/`; Source Sans 3 domain `fonts.axept.io`; Inter role list including `h3` and `text`; ALTMistral role list as badge/body/button. Portable Font evidence keeps the source’s 632 / 560 / 38 counts and the source’s own role lists.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `inter` = home / inter-asset / computed-style-plus-fontfaceset-source / 2026-07-13; `alt` = home / alt-mistral-asset / computed-style-plus-fontfaceset-source / 2026-07-13; `mono` = home / space-mono-asset / computed-style-plus-fontfaceset-source / 2026-07-13; `pricing` = pricing / pricing-live / computed-style / 2026-07-13.

Token extraction is `reconciled` (2026-07-13). `components_harvested: true`. `verification_v2.schema: 2`. Conflicts: [].

| claim | surface |
|---|---|
| tokens.colors.foreground / border / surface-brand-secondary / surface-brand-primary | home |
| tokens.typography.family.ui | home / inter-asset |
| tokens.typography.family.display | home / alt-mistral-asset |
| tokens.typography.family.mono | home / space-mono-asset |
| tokens.typography.body.size / weight / lineHeight / use | home / inter-asset |
| tokens.typography.control.size / weight / lineHeight / tracking / use | home / alt-mistral-asset |
| tokens.typography.display.size / weight / lineHeight / tracking / use | home / alt-mistral-asset |
| tokens.typography.eyebrow.size / weight / lineHeight / use | home / space-mono-asset |
| tokens.spacing.xs / sm / md / lg / xl | home |
| tokens.rounded.sharp / sm / md / lg | home |
| tokens.components.pricing-plan.* | pricing |
| tokens.components.disabled-compact-control.* | pricing |

YAML `foreground` `#000000` is catalog `primary_color` and portable Semantic Foreground. Dual also Scope, header-control text, list-row text, and navigation-container text (E2a). YAML pricing-plan `fg` `#000000` stays on that component field and is not merged with §4 `oklch(0.21 0.006 285.885)`.

## Capture selectors

| Component | Pointer |
|---|---|
| Public header control | `home::[data-omd-capture="55"]`. Source §4 names this selector. |
| Expandable/list row | `home::[data-omd-capture="1"]`. Source §4 names this selector. |
| Compact link/label (type-role) | `home::[data-omd-capture="126"]`. Source §3 names this selector. |
| Small label (type-role) | `home::p.text-eyebrow-small`. Source §3 names this selector. |
| Primary-surface plan shell | `pricing::mistral-block-card-plan`. Source §4 names this selector. |
| Secondary-surface plan shell | `pricing::mistral-block-card-plan`. Source §4 names this selector. |
| Pricing navigation container | `pricing::mistral-atom-navigation-tabs`. Source §4 names this selector. |
| Pricing number input | `pricing::[data-omd-capture="74"]`. Source §4 names this selector. |
| Disabled compact control | `pricing::[data-omd-capture="75"]`. Source §4 / §14 names this selector. Values `rgba(7, 7, 11, 0.1)`, `oklch(0.552 0.016 285.938)`, `6px`, `4px`. |
| Linked content row (sibling-only; not a portable component) | `home::[data-omd-capture="18"]`. Proof-only pointer. |

Portable Use fields keep the source §3 / §4 selectors (E2a). The sibling-only capture `18` pointer stays on this ledger.

## Placeholder omission ledger

No placeholder tokens exist in the source; none are written into the portable DESIGN.md. This ledger mentions the `[FILL IN]` class only as the check label (mention, not use) and does not claim that string is absent from this file.

## Omitted unattributed curves

No cubic-bezier values exist in the source DESIGN.md. None are stored here. Duration, easing names, and reduced-motion behavior are also absent from the source; portable Motion records that absence and the B3 five-kind per-component computed gate. Class names that include transition utilities are not motion tokens.

## Source-stated removed / unpromoted claims

Source §2 / §4 / §7 / §9 / footer (this ledger + portable Semantic / Avoid / Named gaps): success / warning / error / dark-mode / focus / hover color tokens, Source Sans 3 as a typography token, documentation chrome as a UI family, hover values from class names, empty / loading / success / error / validation / toast / dialog / skeleton states, a sitewide max width / grid / authenticated-product layout, a global shadow scale / modal elevation / overlay / animation layer, breakpoints / mobile navigation / touch-target / reflow / authenticated-product responsive contract, the earlier orange/golden palette / Arial / all-0px rule / warm-shadow system, and getdesign purple / DM Serif / JetBrains Mono / 8px-button / 12px-card claims are not promoted. Those names are source-stated omissions, not new negative coverage invented for an unmentioned domain (D1). Sibling-only rgb writings, capture `18`, eyebrow `4px` / `4px 8px` geometry, and `fonts.axept.io` stay on this Proof ledger without portable Semantic rows.

## Omitted §13 fictional archetypes

Source §13 names evidence-based stakeholder groups rather than named user personas and says they are not fictional profiles. Official group language is restated in portable Audience. Source does not fabricate named personas. Generic deletion only: no fictional biography material to re-host (D2, D2a). Audience has adjacent complete B2a.

## Derived editorial inventory

Complete form used in the portable body: "a derived editorial implementation inference from the verified surfaces; they are not Mistral-authored or taken from a separately published UI specification, including the official brand-asset guidance."

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope bound | two inspected URLs as this contract's token surfaces; catalog homepage identity as catalog identity rather than as an extra inspected URL; captured pages as public marketing and commercial-pricing rather than as a product-app audit; values attached to the surface that established them |
| Experience Scope atmosphere | restrained, almost editorial, proprietary-feeling characterizations; artwork/UI split as an asset/UI boundary rather than as a missing color scale |
| Experience Scope brand narrative | April 2023 founding, co-founders’ European-company brief, present offer, enterprise/government positioning, pixel-cat / gradient / monochrome / small-scale illustration system, and the closing token-layer sentence classified as narrative context that does not by itself supply interface tokens |
| Primary tasks | Selecting the three surface-or-control outcomes as primary tasks; not from the stakeholder-group section |
| Audience | Reading the three source-named evidence-based groups as this product's audience; keeping the source's own "not fictional profiles" label rather than inventing biographies |
| Distinctive traits | Groupings and readings of the source's own labeled bullets |
| Principles | Four numbered items and their UI implications |
| Application rules | Do list plus unique Agent Prompt Guide constraints, and the reasons attached to them |
| Avoid | Don't list plus the unique Agent Prompt Guide prohibition and the independent-analysis exclusion, and the reasons inside them |
| Semantic color | Role names from token-set keys; YAML pricing-plan `fg` `#000000` off §4 `oklch(0.21 0.006 285.885)`; quantity-input oklch border off YAML divider; primary surface off secondary surface; artwork as identity source rather than as an inferred palette; no success/warning/error/dark-mode/focus/hover color token |
| Spacing | Unitless YAML steps kept on their own keys; px cluster as observed public-web rhythm rather than a released specification; `2` / `4` / `8` / `16` / `24` unmerged from type, radius, and component paddings |
| Shape | Four YAML rounded keys kept; harvested `0px` / `6px` on the components that record them; local harvested geometry rather than a universal radius scale |
| Elevation | Representative `box-shadow: none` as a flat treatment for the observed elements only, rather than as a depth scale for every surface |
| Motion | Five-kind promotion gate; refusal of a partial confirmation; source "no computed transition duration, easing token, motion rule, or reduced-motion behavior" kept |
| Font evidence | Evidence-class rows as the source's resolution table rather than as a published type specimen; Source Sans 3 declared-only; documentation chrome outside; licence boundary not a reuse grant |
| Family | Inter as repeated reading, ALTMistral as display/control, Space Mono as small-label, rather than as one interchangeable stack |
| Type roles | YAML numbers and unitless line-heights kept beside §3 px / normal; pairing each YAML role to its token-set path; YAML `use` verbatim; §3-only 44px and 14px rows kept; YAML `16` / `56` / `11` off spacing and radius steps; two YAML size-16 type roles kept on their own paths |
| Assets | simpleicons slug as catalog identity rather than as a Mistral-hosted mark file; three font URLs as delivery evidence rather than as a reuse licence; pixel-cat / gradient / monochrome / model-illustration artwork as brand assets rather than as UI color tokens |
| Capture record | Every kind verdict, every applicability verdict, Primitive type only when YAML records it, kind omitted on the three shells, not a complete state-coverage claim; generic Focus is not `focus-visible`; disabled compact control loading/error/success omitted at the unresolved-request boundary rather than closed from the captured state rows; source state contract kept here while the catalog graph is not adopted |
| Layout & Platforms | Unitless YAML spacing beside the px cluster; highest-frequency rhythm as observed rather than released; 48px header, `0px 16px` header padding, and the segmented container as local captured geometry rather than a cross-viewport specification; horizontally scrollable pricing navigation shell and responsive utility classes as facts that do not establish breakpoints; desktop public-surface evidence only |
| Content & Locales voice | Official writing characterized as direct, technically ambitious, and oriented toward access and control; read as support for product-led, specific public language; not a comprehensive error-copy or conversational-assistant style guide |
| Content & Locales samples | Three quoted lines treated as official wording rather than as synthetic microcopy; public marketing home and public commercial-pricing route named as this packet's surfaces |
| Governance Named gaps | List as unnamed values rather than as coverage of domains the source never named |

## Proof notes

- tokens.source: `reconciled`; `components_harvested: true`; `verification_v2.schema: 2` preserved (A1c)
- Canonical Proof sidecar `web/references/mistral.ai/.verification.md` SHA-256 `725fa1ec475635578f2429a7abd250e341f32644fabe91a063b8a80487838ddb`; derived mirror `design-md/mistral.ai/.verification.md`. Selector-bound Proof tuples, lineage, sibling-only capture `18`, sibling rgb writings, eyebrow extra geometry, and `fonts.axept.io` stay on this Proof ledger.
- Catalog logo type `simpleicons` and slug `mistralai` are dual: this identity ledger + portable Typography & Assets (E2a)
- Catalog homepage `https://mistral.ai` is dual Scope + this identity ledger (E2a). The two captured URLs are dual Scope + Surfaces/Sources/Tier 1
- `verification_v2.schema: 2` is Identity + Claim ledger + Proof notes
- YAML typography `use` fields restored on Type roles (A1)
- `primary_color` `#000000` destinations listed in Identity (E2a)
- YAML unitless `lineHeight` `1.5` / `1.07` / `1.45` preserved as ratios (A1a)
- Verified primitive types preserved per component: `card` on Primary-surface plan shell; `button` on Disabled compact control. `Kind: interactive` does not replace Type (A1b). Five §4-only components stay `not in the token set`
- `ds.type: brand` preserved on this identity ledger (A1c)
- No generic Focus capture with a hex in the source; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Public header control and Expandable/list row loading/error/success remain role-based not-applicable (C2). Pricing number input loading/success remain role-based not-applicable; error stays applicable as a quantity field. Disabled compact control loading/error/success fields are omitted because exact request/outcome mapping is unresolved (C2). `not captured` is not the reason (C1)
- C4 omit-kind set: Primary-surface plan shell, Secondary-surface plan shell, Pricing navigation container
- Source §13 official groups are Audience, not primary tasks, not fictional biographies, and not re-hosted as archetype titles here (D2)
- The B3 five-kind per-component computed gate is Foundations Motion (`transition properties`, `animation name`, `duration`, `easing`, and `reduced-motion behavior`, plus the per-component gate and the partial-confirmation clause). Named gaps lists those five kinds in inventory form; it is not the B3 full promotion-gate paragraph
- Capture selectors from source §3 / §4 are dual portable Use + this ledger; sibling capture `18` stays on this ledger
- Source §9 Agent Prompt Guide brand constraints are in Experience Application rules / Avoid; the prompt wrapper is deleted. No `omd-apply` / `npx omd` in the portable body
- Official About, Brand, and Careers writing is narrative context, not token sources
- Footer sentence, this ledger only: Legacy claims were rolled back where absent from current Tier 1 evidence.
