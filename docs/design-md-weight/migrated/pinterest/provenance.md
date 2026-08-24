# Pinterest provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/pinterest/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | pinterest |
| name | Pinterest |
| country | US |
| category | consumer-tech |
| homepage | https://www.pinterest.com |
| primary_color | `#e60023` |
| logo | simpleicons slug `pinterest` |
| omd format (source) | 0.1 |
| ds.name | Gestalt |
| ds.url | https://gestalt.pinterest.systems |
| ds.type | system |
| ds.description | Pinterest's public design system for product teams. |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |

Catalog logo metadata is Simple Icons identity (`pinterest`), not a captured first-party mark. Triple destination (E2a): this identity ledger, portable Typography & Assets boundary sentence, and Avoid (`Do not treat catalog Simple Icons identity as a captured first-party mark file`). Official badge geometry (white script P in a red circle) is first-party brand guidance in portable Experience / Assets / Avoid.

YAML `ds.name` is Gestalt. YAML `ds.url` is `https://gestalt.pinterest.systems`. YAML `ds.type` is `system`. YAML `ds.description`: Pinterest's public design system for product teams. Not promoting Gestalt component tokens from this capture is Scope + Font evidence + Named gaps, with adjacent complete B2a on the Scope/Font-evidence application readings (E2a).

Homepage `https://www.pinterest.com` is dual-destination: this identity ledger and portable Experience Scope (`Catalog homepage identity`) (E2a). The captured consumer URL `https://kr.pinterest.com/` and business URL `https://business.pinterest.com/ko/` are dual-destination with portable Experience Scope (E2a). `ds.url` Gestalt and brand-guidelines `https://business.pinterest.com/en-in/brand-guidelines/` are dual Experience Scope + this ledger (E2a).

Token note from source: Consumer product/auth and Pinterest Business marketing are separate source domains; no route-local value is generalized across them. Dual destination: this ledger and portable Experience Scope (E2a). The Foundations consumer/business color split applies that note; the sentence itself is not repeated as a Foundations heading.

Catalog `primary_color` `#e60023` is identity metadata and the portable Foundations Primary / consumer-action role (explicit `Catalog primary_color`). The same hex also sits in Distinctive consumer-action and the consumer-primary-action Background field (E2a). The Foundations unmerged-role sentence (not a Pinterest Business filled-action color) is under adjacent complete B2a.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | consumer-product | https://kr.pinterest.com/ | 2026-07-13 |
| surface-2 | consumer-auth | https://kr.pinterest.com/ | 2026-07-13 |
| surface-3 | business-marketing | https://business.pinterest.com/ko/ | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| consumer-capture | product-surface | https://kr.pinterest.com/ | 2026-07-13 |
| business-capture | product-surface | https://business.pinterest.com/ko/ | 2026-07-13 |
| gestalt-context | official-doc | https://gestalt.pinterest.systems/ | 2026-07-13 |
| brand-guidelines | brand-asset | https://business.pinterest.com/en-in/brand-guidelines/ | 2026-07-13 |
| consumer-font-assets | brand-asset | https://s.pinimg.com/font/Pin-Sans-Regular.ttf | 2026-07-13 |
| business-font-assets | brand-asset | https://s.pinimg.com/font/Pinterest-Sans-Pro-Regular.otf | 2026-07-13 |

### Tier 1

- https://kr.pinterest.com/ (consumer product/auth capture)
- https://business.pinterest.com/ko/ (business marketing capture)
- https://gestalt.pinterest.systems/ (official product design-system context)
- https://business.pinterest.com/en-in/brand-guidelines/ (official brand guidance)
- Pinterest-hosted loaded font sources under `https://s.pinimg.com/font/`

### Tier 2 (no usable record)

- https://getdesign.md/pinterest (one broad editorial record; no source-backed token/component data used)
- https://styles.refero.design/?q=Pinterest (attempted through built-in web open; safe-open error, no usable record)

### Narrative (not interface tokens)

Gestalt introduction, business explanation of Pins, campaign coverage that inspiration is a step toward life away from the screen, and official badge geometry are in the portable Experience scope. They are not interface tokens.

## Claim ledger

Claims use YAML anchors from the source: `consumer` = home / consumer-capture / computed-style / 2026-07-13; `business` = surface-3 / business-capture / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | home (`consumer`) |
| tokens.colors.consumer-ink | home |
| tokens.colors.muted | home |
| tokens.colors.secondary-surface | home |
| tokens.colors.control-border | home |
| tokens.colors.canvas | home |
| tokens.colors.business-ink | surface-3 (`business`) |
| tokens.colors.business-action | surface-3 |
| tokens.colors.on-action | surface-3 |
| tokens.typography.family.ui | home |
| tokens.typography.family.business-marketing | surface-3 |
| tokens.typography.consumer-ui.size / weight / use | home |
| tokens.typography.consumer-form.size / weight / lineHeight / use | home |
| tokens.typography.business-body.size / weight / use | surface-3 |
| tokens.typography.business-tab.size / weight / use | surface-3 |
| tokens.spacing.xs / sm / md | home |
| tokens.spacing.lg | surface-3 |
| tokens.rounded.consumer-control | home |
| tokens.rounded.business-tab | surface-3 |
| tokens.rounded.business-action | surface-3 |
| tokens.shadow.none | home |
| tokens.components.consumer-primary-action.* | home |
| tokens.components.consumer-secondary-action.* | home |
| tokens.components.consumer-form-input.* | home |
| tokens.components.business-action.* | surface-3 |
| tokens.components.business-outline-action.* | surface-3 |
| tokens.components.business-tab.* | surface-3 |

## Capture selectors

| Component | Pointer |
|---|---|
| Consumer primary action | `home::[data-omd-capture="7"]`; also repeated on `surface-2` |
| Consumer secondary action | `home::[data-omd-capture="8"]`; also repeated on `surface-2` |
| Consumer auth input | `home::[data-omd-capture="19"]`; also repeated on `surface-2` |
| Business marketing action | `surface-3::[data-omd-capture="9"]` |
| Business marketing outline action | `surface-3::[data-omd-capture="10"]` |
| Business marketing tab (unselected) | `surface-3::[data-omd-capture="16"]` |
| Business marketing tab (selected text) | `surface-3::[data-omd-capture="15"]`; two `interactions[]` entries record tab-selected |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- YAML `ds.type`: `system` (A1c)
- YAML unitless `tokens.typography.consumer-form.lineHeight` is `1.50`; portable Type roles preserve the ratio, not a fixed px (A1a)
- YAML primitive types preserved per component: button ×4 (consumer-primary-action, consumer-secondary-action, business-action, business-outline-action), input ×1 (consumer-form-input), tab ×1 (business-tab) (A1b)
- Consumer primary/secondary foreground `#000000` is each control’s renderable field. It is not Consumer ink `#211922` and is not merged with the `#ffffff` canvas/action-text observation (A4)
- `#e5e5e0` is Secondary surface and the consumer secondary-action fill; `#91918c` is Control border and the auth-input border; `#111111` is business ink and filled-action background; `#ffffff` is Canvas, on-action, business outline surface, and selected-tab text. Roles are not collapsed into one ink
- Uncaptured hover/focus/pressed/disabled/`focus-visible` treatments are omitted. Capture absence is not a `not-applicable` reason. Applicability follows control meaning. State coverage is not claimed complete
- The source never records `focus-visible`. No `focus-visible` color is assigned (B1)
- Consumer header primary/secondary loading·error·success applicability is omitted: exact selector label/behavior is unresolved (C2). Auth-input error is applicable with treatment omitted; loading/success follow credential-entry meaning. Business marketing action and outline action loading·error·success are also omitted at the same field boundary; they are not closed as destination controls. Business tab loading·error·success follow tab selection meaning
- Catalog Simple Icons logo is triple provenance identity + portable Typography & Assets boundary sentence + Avoid (`Do not treat catalog Simple Icons identity as a captured first-party mark file`); it is not a captured first-party mark (E2a)
- Scope atmosphere paragraph (image-led, low-chrome, warm plum, quiet olive-gray, compact rounded account controls) is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification (B2/B2a)
- Numbered principle stems, *UI implication* notes, and the capture-bound application list are a derived editorial implementation inference from the verified surfaces; they are not Pinterest-authored or a separately published UI specification. Official brand-guideline rules (badge circle/colour/account-or-CTA pairing) are first-party and sit outside that limiter. Agent-prompt wrappers from source §9 are deleted (B2/B2a, E1)
- Homepage `https://www.pinterest.com` is dual identity ledger + portable Experience Scope. Capture URLs, Gestalt `ds.url`, brand-guidelines URL, and `tokens.note` are dual Experience Scope + this ledger (E2a)
- Font files `Pin-Sans-Regular.ttf` and `Pinterest-Sans-Pro-Regular.otf` (`verification_v2.sources` consumer-font-assets / business-font-assets) are dual Typography & Assets + this sources table (E2a)
- Business-marketing-action-sample 2px `#111111` outline-like shadow value is Foundations Elevation + Named gaps; it is not a harvested filled-action field. The not-a-local-field reading also sits on Business marketing action Observed, each site with adjacent complete B2a (E2a)
- No canonical motion duration or easing is promoted. Any exact animation value remains a local extension until a per-component computed observation records transition properties, animation name, duration, easing, and reduced-motion behavior (B3). Motion absence is also Named gaps (E2a)
- Source §13 states official sources describe broad audiences but do not provide verified user-persona definitions. Groups remain Audience. Independently verified primary tasks (search/save/shop ideas; Pins connecting browsing to saving, clicking, or buying) are not a §13 destination — they come from §1 and the public business explanation. No fictional demographic segments were recorded here and none were moved to a persona sidecar (D2)
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Pinterest-authored or a separately published UI specification`): Scope Gestalt official-context / no-promote-tokens; Scope token-note application; Scope atmosphere; Scope side-by-side / not-lead-generation-chrome; Scope narrative-does-not-authorize-tokens; Audience groups-only / tasks-only / no-invented-personas; numbered Principles; capture-bound application; Avoid non-first-party items (business-as-consumer-CTA, font-substitute, `#111111` substitute, Simple Icons, declared-only families, infer-unobserved); Semantic color unmerged-role readings (consumer list + business ink/on-action); Shape not-a-universal-radius; Elevation not-a-shared-scale / not-selector-bound / not-local-field; Font evidence application readings; Family font-use boundary; Assets Simple Icons identity-not-captured + omitted imagery; Capture-record omitted-rather-than-synthesized / variant-limit; Capture-record legacy-removal; Business marketing action Observed shadow Elevation-only; Layout retained-only-for-that-surface; Layout desktop-measurement / conservative-spacing; Content official-guidance-not-copy-library / no-synthetic-voice (B2/B2a)

## Legacy placeholders (omitted, not rewritten)

One `[FILL IN]` string in the source was omitted at the smallest unresolved boundary. It is not copied into DESIGN.md. The wrapper is kept here as an omission ledger (E2b). It is not a fictional persona and is not rehosted as demographics (D2).

| Location | Source placeholder |
|---|---|
| §13 Personas | `[FILL IN: user research or customer-segment source supplied by Pinterest]` |
