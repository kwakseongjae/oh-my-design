# LINE provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/line/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | line |
| name | LINE |
| country | JP |
| category | consumer-tech |
| homepage | https://line.me |
| primary_color | `#06c755` |
| logo | simpleicons slug `line` |
| omd format (source) | 0.1 |
| ds.name | LINE Design System |
| ds.url | https://designsystem.line.me |
| ds.type | system |
| ds.description | LINE Messenger and Global Family Service design guidance, including foundations, components, UX guidelines, principles, and LINE Voice. |
| ds.og_image | https://designsystem.line.me/static/36a4ead41b7b972b1130287e849a14b1/73f08/SEO_IMG_1741574443.png |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-11 |

Catalog logo metadata is Simple Icons identity (`line`), not a captured first-party mark. Dual destination (E2a): this identity ledger and portable Typography & Assets (`Catalog logo metadata is Simple Icons identity (`line`)`). The identity-not-captured reading has adjacent complete B2a in Assets.

YAML `ds.name` is LINE Design System (`https://designsystem.line.me`). YAML `ds.type` is `system`. Catalog `og_image` is identity metadata, not an interface token. YAML `ds.description`: LINE Messenger and Global Family Service design guidance, including foundations, components, UX guidelines, principles, and LINE Voice.

Token note from source: LINE Messenger product UI uses OS system fonts; public marketing and design-system headings use loaded LINESeed. The official v3.5 palette defines `#06c755`, replacing the legacy `#07b53b` value. LY corporate chrome is a separate domain and is not mixed into Messenger tokens.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-11 (eight-surface collector plus in-app visual verification) |
| verification_v2.checked | 2026-07-11 |
| surfaces inspected | 2026-07-11 |
| sources captured | 2026-07-11 |
| tokens.extracted | 2026-07-11 |

Footer metadata from the source: `Verified: 2026-07-11 (eight-surface collector plus in-app visual verification)`. The verification method is eight-surface collector plus in-app visual verification; it is not date-only plus collector counts (A1c).

Conflicts unresolved: none.

Collector summary from the source body (proof, not portable tokens): July 11 capture covered the Korean consumer site plus seven official design-system routes and found 8 surfaces, 41 color candidates, 10 font families, 45 component variants, five tab interactions, and coverage 87/100. `system-ui` was visibly used on 682 elements across the design-system pages; loaded `LINESeed` appeared on 107 elements. Those live-use counts remain in portable Typography & Assets as evidence-class resolution. The footer method `in-app visual verification` is in addition to that collector summary.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://www.line.me/ko/ | 2026-07-11 |
| ds-home | design-system | https://designsystem.line.me/ | 2026-07-11 |
| colors | design-system | https://designsystem.line.me/LDSM/foundation/color/line-color-guide-ex-en/ | 2026-07-11 |
| typography | design-system | https://designsystem.line.me/LDSM/foundation/typography-ex-en/ | 2026-07-11 |
| layout | design-system | https://designsystem.line.me/LDSM/foundation/layout-ex-en/ | 2026-07-11 |
| box-button | design-system | https://designsystem.line.me/LDSM/components/box-button-ex-en/ | 2026-07-11 |
| capsule-button | design-system | https://designsystem.line.me/LDSM/components/capsule-button-ex-en/ | 2026-07-11 |
| input | design-system | https://designsystem.line.me/LDSM/components/input-ex-en/ | 2026-07-11 |
| popup | design-system | https://designsystem.line.me/LDSM/components/popup-ex-en/ | 2026-07-11 |
| tabs | design-system | https://designsystem.line.me/LDSM/components/tabs-ex-en/ | 2026-07-11 |
| badge | design-system | https://designsystem.line.me/LDSM/components/badge-ex-en/ | 2026-07-11 |
| principles | design-system | https://designsystem.line.me/about/design-principle-en | 2026-07-11 |
| voice | design-system | https://designsystem.line.me/about/line-voice-en | 2026-07-11 |
| corporate-style | corporate | https://www.lycorp.co.jp/en/technology-design/design/ | 2026-07-11 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.line.me/ko/ | 2026-07-11 |
| ds-home-doc | official-doc | https://designsystem.line.me/ | 2026-07-11 |
| colors-doc | official-doc | https://designsystem.line.me/LDSM/foundation/color/line-color-guide-ex-en/ | 2026-07-11 |
| typography-doc | official-doc | https://designsystem.line.me/LDSM/foundation/typography-ex-en/ | 2026-07-11 |
| layout-doc | official-doc | https://designsystem.line.me/LDSM/foundation/layout-ex-en/ | 2026-07-11 |
| box-button-doc | official-doc | https://designsystem.line.me/LDSM/components/box-button-ex-en/ | 2026-07-11 |
| capsule-button-doc | official-doc | https://designsystem.line.me/LDSM/components/capsule-button-ex-en/ | 2026-07-11 |
| input-doc | official-doc | https://designsystem.line.me/LDSM/components/input-ex-en/ | 2026-07-11 |
| popup-doc | official-doc | https://designsystem.line.me/LDSM/components/popup-ex-en/ | 2026-07-11 |
| tabs-doc | official-doc | https://designsystem.line.me/LDSM/components/tabs-ex-en/ | 2026-07-11 |
| badge-doc | official-doc | https://designsystem.line.me/LDSM/components/badge-ex-en/ | 2026-07-11 |
| principles-doc | official-doc | https://designsystem.line.me/about/design-principle-en | 2026-07-11 |
| voice-doc | official-doc | https://designsystem.line.me/about/line-voice-en | 2026-07-11 |
| corporate-style-doc | official-doc | https://www.lycorp.co.jp/en/technology-design/design/ | 2026-07-11 |

### Tier 1

- https://www.line.me/ko/
- https://designsystem.line.me/
- https://designsystem.line.me/LDSM/foundation/color/line-color-guide-ex-en/
- https://designsystem.line.me/LDSM/foundation/typography-ex-en/
- https://designsystem.line.me/LDSM/foundation/layout-ex-en/
- https://designsystem.line.me/LDSM/components/box-button-ex-en/
- https://designsystem.line.me/LDSM/components/capsule-button-ex-en/
- https://designsystem.line.me/LDSM/components/input-ex-en/
- https://designsystem.line.me/LDSM/components/popup-ex-en/
- https://designsystem.line.me/LDSM/components/tabs-ex-en/
- https://designsystem.line.me/LDSM/components/badge-ex-en/
- https://designsystem.line.me/about/design-principle-en
- https://designsystem.line.me/about/line-voice-en
- https://www.lycorp.co.jp/en/technology-design/design/

### Tier 2 (no usable record)

- https://getdesign.md/line returned “No designs found for line”
- https://styles.refero.design/?q=LINE exposed no LINE-specific style result after top and bottom rendered-path inspection

### Narrative (not interface tokens)

- LINE Design Principles: https://designsystem.line.me/about/design-principle-en
- LINE Voice: https://designsystem.line.me/about/line-voice-en
- LY Corporation Design Style (organizational context only): https://www.lycorp.co.jp/en/technology-design/design/

## Claim ledger

Claims use YAML anchors from the source. `color_evidence` = colors / colors-doc / official-doc / 2026-07-11. `button_evidence` = box-button / box-button-doc / official-doc / 2026-07-11. `capsule_evidence` = capsule-button / capsule-button-doc / official-doc / 2026-07-11. `badge_evidence` = badge / badge-doc / official-doc / 2026-07-11. `popup_evidence` = popup / popup-doc / official-doc / 2026-07-11. `tabs_evidence` = tabs / tabs-doc / official-doc / 2026-07-11. `input_evidence` = input / input-doc / official-doc / 2026-07-11. `ds_home_evidence` = ds-home / ds-home-doc / official-doc / 2026-07-11. `layout_evidence` = layout / layout-doc / official-doc / 2026-07-11. `typography_evidence` = typography / typography-doc / official-doc / 2026-07-11. `home_evidence` = home / home-live / live-inspect / 2026-07-11.

| claim | surface |
|---|---|
| tokens.colors.action-blue | colors |
| tokens.colors.android-primary | colors |
| tokens.colors.border | colors |
| tokens.colors.canvas | colors |
| tokens.colors.danger | colors |
| tokens.colors.foreground | colors |
| tokens.colors.on-primary | colors |
| tokens.colors.outline | colors |
| tokens.colors.primary | colors |
| tokens.colors.text-muted | colors |
| tokens.colors.text-secondary | colors |
| tokens.components.box-button-destructive.* | box-button |
| tokens.components.box-button-outline.* | box-button |
| tokens.components.box-button-primary.* | box-button |
| tokens.components.capsule-button.* | capsule-button |
| tokens.components.notification-badge.* | badge |
| tokens.components.popup.* | popup |
| tokens.components.tabs.* | tabs |
| tokens.components.text-input.* | input |
| tokens.rounded.button / button-large | box-button |
| tokens.rounded.full | capsule-button |
| tokens.shadow.flat | ds-home |
| tokens.spacing.card-margin / gutter-2-column / gutter-3-column / gutter-4-column / screen-margin | layout |
| tokens.typography.body-1 / body-2 / body-4 size, use, weight | typography |
| tokens.typography.family.sans | typography |
| tokens.typography.heading-1 / heading-2 / title-1 / title-3 size, use, weight | typography |
| tokens.typography.family.display | home |
| tokens.typography.marketing-hero size, use, weight | home |
| tokens.typography.marketing-service lineHeight, size, use, weight | home |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction: five official documentation tab controls exercised (selected/tab-selected). Form submission, destructive actions, and popup actions were not executed.
- Capture absence is not a `not-applicable` reason. Loading, error, and success follow each control’s product role. State coverage is not claimed complete. Box Button Primary/Destructive/Outline omit error and success rows (exact label/destination/request/outcome unresolved). Text Input omits loading and success rows on the combined text/password/code field; official error remains applicable. Capsule and Tabs keep identified-role not-applicable maps.
- The source never records `focus-visible`. Text-input focused underline `#06c755` is a generic focused observation. Applicability of `focus-visible` stays; that color is not promoted as `focus-visible` treatment.
- YAML `ds.type: system` is identity metadata (A1c).
- Catalog Simple Icons logo is dual provenance identity + portable Typography & Assets (`Catalog logo metadata is Simple Icons identity (`line`)`). The identity-not-captured reading sits under Assets adjacent complete B2a. `ds.og_image` is identity-only (provenance-only). They are not captured first-party marks (E2a).
- `SFPro` remains an unresolved marketing-surface claim (no resolved loaded face). Declared-only `SF Pro Text` / `SF Pro Display` had zero observed usage. Evidence class is not rewritten to Outside this capture.
- LY Corporation Design Style is organizational context. Corporate chrome is not used as Messenger component tokens. Destinations: Scope publisher-chrome B2a + Avoid remaining items B2a + Assets catalog-boundary B2a + Named gaps + this token note (E2a).
- Official first-party design documentation records that the official component system includes box buttons, capsule buttons, inputs, popups, tabs, badges, sheets, navigation, lists, cards, and feedback, each with defined anatomy, usage, and state behavior. That narrative is Capture record (first-party official docs). The harvest-boundary (do not promote tokens for unharvested members) is Capture record under adjacent complete B2a. Unharvested tokens for sheets, navigation, lists, cards, and feedback are also Named gaps (E2a).
- Popup `optional area` is a §9-only anatomy field in portable Components (A3).
- Footer verification method `in-app visual verification` is Freshness above, not a portable token.

Derived editorial range in the portable body (B2/B2a, E1) — not LINE-authored or a separately published UI specification:

- Scope identity / `direct, approachable tone` / surface-separation
- Scope publisher-chrome boundary (LY corporate visual system is not used as Messenger component tokens)
- Scope surface-application (values stay attached to the surface that established them)
- Audience observable-work and research prescription
- Principles *UI implication* notes only (the six numbered LINE Design Principles stay first-party)
- Capture-bound application list
- Avoid remaining catalog-boundary items (hard-code SF Pro; merge LY chrome; transfer 70px LINESeed). First-party Messenger Don'ts stay unqualified.
- Semantic color unmerged-role readings (do not merge Android Green or Blue 500 into LINE Green)
- Spacing surface-application (product grid, not wide marketing layout)
- Shape local-geometry (5px/6px not a universal radius scale)
- Elevation hierarchy synthesis
- Font evidence application readings (LINESeed distribution is not the Messenger UI default; neither family is a substitute for the other)
- Family font-mapping (platform mappings, not a license to hard-code SF Pro)
- Family font-use boundary (do not present a fallback as LINESeed / LINESeed as Messenger default)
- Assets catalog-boundary (LINESeed not Messenger UI default; Simple Icons identity-not-captured; LY chrome / organizational-context-only)
- Capture-record harvest-boundary (do not promote tokens for unharvested members; sheets/navigation/lists/cards/feedback remain outside the harvested token set)
- Layout layout-contract (resolution-adaptive product-grid guidance, not a breakpoint-specific CSS contract)
- Layout surface-application (box-button heights and 16pt margins are not a wide-marketing-layout claim)

Left unqualified as first-party, observational, or Core contract — not as a reconstruction-boundary exemption: coverage URLs; official mission / “Chat comes first” / more-than-messenger / LY publisher fact; Distinctive measurements; official numbered LINE Design Principles; first-party Messenger Don'ts; official palette/type/layout/Voice facts; Capture-record official component-system range and definitions; Core C1/C2/C3 policy; B3 five-kind gate; YAML token fields; A4 field-identity of named palette entries (roles themselves); component anatomy and identified-role maps; Box Button and Text Input omission sentences; Governance; Named gaps inventory. This ledger does not claim that no unqualified sentence remains.

## Legacy placeholders (omitted, not rewritten)

One `[FILL IN]` string in the source was omitted at the smallest unresolved boundary. It is not copied into DESIGN.md. The wrapper is kept here as an omission ledger (E2b).

| Location | Source placeholder |
|---|---|
| §15 Motion & Easing | `[FILL IN: capture computed transition-duration, transition-timing-function, animation-duration, and reduced-motion behavior before adding motion tokens.]` |
