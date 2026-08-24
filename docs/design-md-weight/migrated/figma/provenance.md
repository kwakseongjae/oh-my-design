# Figma provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/figma/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | figma |
| name | Figma |
| country | US |
| category | design-tools |
| homepage | https://www.figma.com |
| primary_color | `#000000` |
| logo | simpleicons slug `figma` |
| omd format (source) | 0.1 |
| ds.name | Figma Brand Guidelines |
| ds.url | https://www.figma.com/using-the-figma-brand |
| ds.type | brand |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |

Catalog logo metadata is Simple Icons identity (`slug: figma`), not a captured first-party mark. Dual destination (E2a): this identity ledger and the portable Typography & Assets boundary sentence (not promoted as a Figma mark file). That portable Assets sentence shares the adjacent complete B2a that also names the official brand page as a separate evidence domain and webfont files as not assumed redistributable.

YAML `ds.name` is Figma Brand Guidelines (`https://www.figma.com/using-the-figma-brand`). YAML `ds.type` is `brand`. YAML `ds.description`: Figma's official trademark, logo, and brand-use guidance; public product pages are measured separately for UI tokens. Dual destination (E2a): this identity note plus portable Scope evidence-domain and Assets (official brand page as a separate evidence domain from public-page measurements), both with adjacent complete B2a.

Token note from source (recorded 2026-07-12): Current verified public marketing/product pages. A July automated recapture was blocked before producing evidence, so live computed claims retain the still-fresh May proof and current official brand page was rechecked separately. That “still-fresh” clause is the source’s 2026-07-12 wording, not a 2026-08-23 TTL recertification.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-12 (omd:migrate) |
| verification_v2.checked | 2026-07-12 |
| home / design surfaces inspected | 2026-05-15 |
| brand surface inspected | 2026-07-12 |
| home-live / design-live captured | 2026-05-15 |
| brand-official captured | 2026-07-12 |
| tokens.extracted | 2026-07-12 |

Footer metadata from the source: `Verified: 2026-07-12 (omd:migrate)`. The `(omd:migrate)` mark is preserved here (A1c).

Conflicts unresolved: none.

On 2026-07-12 the source recorded this verification judgement: live computed claims retain the May 15 live proof, and that May proof was then judged within the 90-day product-surface TTL. This ledger keeps that 2026-07-12 judgement as historical. It does not claim that the May proof remains within TTL as of 2026-08-23, and it does not invent a later recapture.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-product | https://www.figma.com/ko-kr/ | 2026-05-15 |
| design | marketing-product | https://www.figma.com/ko-kr/design/ | 2026-05-15 |
| brand | official-brand | https://www.figma.com/using-the-figma-brand | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.figma.com/ko-kr/ | 2026-05-15 |
| design-live | product-surface | https://www.figma.com/ko-kr/design/ | 2026-05-15 |
| brand-official | official-doc | https://www.figma.com/using-the-figma-brand | 2026-07-12 |

### Tier 1

- https://www.figma.com/ko-kr/
- https://www.figma.com/ko-kr/design/
- https://www.figma.com/using-the-figma-brand

### Tier 2

- getdesign.md/figma supplied only a generic directory snippet
- Refero component samples were used only for conflict discovery and never overrode Tier 1

### Narrative / identity (not interface tokens)

- Official brand: https://www.figma.com/using-the-figma-brand
- Catalog homepage identity: https://www.figma.com

Homepage `https://www.figma.com` and the three surface URLs (`https://www.figma.com/ko-kr/`, `https://www.figma.com/ko-kr/design/`, `https://www.figma.com/using-the-figma-brand`) are dual-destination: they remain in portable Experience Scope and in this identity/surfaces/sources/Tier 1 ledger.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-05-15; `design` = design / design-live / live-inspect / 2026-05-15.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.canvas | home |
| tokens.colors.border | home |
| tokens.colors.indigo-action | home |
| tokens.colors.focus | home |
| tokens.colors.on-primary | home |
| tokens.typography.family.ui | home |
| tokens.typography.family.mono | home |
| tokens.typography.hero.size / weight / lineHeight / tracking / use | home |
| tokens.typography.section.size / weight / lineHeight / tracking / use | home |
| tokens.typography.body.size / weight / lineHeight / tracking / use | design |
| tokens.typography.mono-label.size / weight / lineHeight / tracking / use | home |
| tokens.spacing.xs / sm / md / lg / xl | home |
| tokens.rounded.control / segment / full | home |
| tokens.rounded.hero | design |
| tokens.shadow.panel | design |
| tokens.components.primary-action.* | home |
| tokens.components.indigo-action.* | home |
| tokens.components.outline-action.* | design |
| tokens.components.product-segment.* | home |
| tokens.components.round-icon.* | design |

`tokens.colors.primary` `#000000` is public chrome, not indigo. `tokens.colors.indigo-action` `#4d49fc` is the alternate prominent action, not the universal brand primary. `tokens.colors.focus` `#0d99ff` is the generic focus outline color. `tokens.components.primary-action.focus` `2px dashed #0d99ff` is that control’s observed generic `focus` field, not a `focus-visible` treatment. `tokens.components.primary-action.fg` `#ffffff` is the filled-action content color and is not collapsed into Canvas. `tokens.components.outline-action.bg` `transparent` stays the outline control field. `tokens.components.product-segment.bg` `rgba(0,0,0,0.08)` is the active segmented-control field.

YAML typography `lineHeight` values are the unitless ratios 1, 1.1, 1.42, and 1.3. Those ratios remain in portable Type roles. The legacy body table’s 1.00 / 1.10 / 1.30 notation is the same three ratios with trailing zeros, not fixed px.

YAML component primitive types: primary-action, indigo-action, outline-action, and round-icon are `button`; product-segment is `tab`. Those types remain per component in portable Components.

## Capture selectors

The source DESIGN.md does not record `data-omd-capture` pointers or class selectors. None are invented here.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- YAML `ds.type: brand`
- Footer `Verified: 2026-07-12 (omd:migrate)` keeps the `(omd:migrate)` mark in this freshness ledger (A1c)
- Font evidence class for authenticated editor, desktop-client, and platform-specific overrides is `Unresolved claim` (captured-as-unresolved), not `Outside this capture`
- May 15 live proof captured `figmaSans` and `figmaMono` and their computed roles. The 90-day product-surface TTL reading is the source’s 2026-07-12 verification judgement of that May proof, recorded in Freshness above. It is not restated as present-tense “remains within” TTL as of 2026-08-23, and portable Font live-surface-use does not carry TTL
- Interaction: action focus and product-segment active/inactive variants verified. Hover, loading, empty, error, success, editor selection, and AI-generation states remain absent from the canonical machine set
- Capture absence is not a `not-applicable` reason. Product-segment tab loading/error/success are `not-applicable` by identified selection-role meaning. Primary, Indigo, Outline, and Round icon omit those three applicability fields: source records action style and broad use only; exact selector/label/request/outcome is unresolved, so the fields stay omitted rather than closed as destination, conversion, or media-navigation. This ledger does not claim C2 closed those four actions. State coverage is not claimed complete
- Generic `focus` on the primary action (`2px dashed #0d99ff`) is an additional observed state. It is not a `focus-visible` treatment. The source never records `focus-visible`
- Round-icon light/dark translucent variants remain surface-local
- Source §13 is public product task context only. Independently verified tasks: create and prototype an interface with collaborators; inspect design intent and prepare implementation; review, comment, or present shared work. Project-specific names, ages, team sizes, subscription tiers, and productivity goals stay unspecified. Dual destination (E2a): portable Primary tasks + Audience + this Proof note + Governance Named gaps. No fictional demographic set is recorded here and none was moved to a persona sidecar
- Official brand page is trademark/logo guidance, not a substitute for the public-page UI measurements
- July automated recapture was blocked. That fact, and the May live proof as the 2026-07-12 computed-evidence judgement, stay in this ledger. No later capture is invented

Derived editorial range in the portable body (B2/B2a, E1) — not Figma-authored or a separately published UI specification:

- Scope colorful-output / workspace-frame reading
- Scope type-character reading (`figmaSans` unusually fine weight control; `figmaMono` technical signposts)
- Scope evidence-domain (official brand guidance separate from UI measurements; apply-only to inspected public pages; editor / desktop-client / FigJam / generated-product-content do not share every marketing value)
- Audience: not promoting invented demographic personas; absorbing the three contexts as primary tasks rather than named individuals; observable work follows that public material; those groups do not authorize authenticated editor, desktop-client, or FigJam tokens
- Distinctive dashed-blue-focus-as-echoing-selection-tooling reading
- Numbered Principles (these four items only; the limiter does not cover capture-bound or Avoid)
- Capture-bound application list
- Avoid source-stated prohibitions and retained capture-bound doctrine
- Semantic color indigo-role and content-token readings (indigo not the universal brand primary; screenshot/template colors not reusable tokens; earlier purple/pink/lime/cyan/green/lavender/sage omitted; do not substitute `#4d49fc` for Primary chrome)
- Spacing compact-working-scale / not-authenticated-editor-spacing reading
- Shape local-captured-geometry / not-a-universal-radius / not-every-control-a-50px-pill reading
- Elevation-purpose reading (flat public chrome; panel shadow not a default card)
- Font evidence-class application readings
- Family font-use boundary (SF Pro / system / mono fallbacks not identity fonts)
- Assets: official brand page as a separate evidence domain; Simple Icons identity-not-captured and webfont non-redistribute reading
- Capture-record omitted-rather-than-synthesized (inputs / community cards / editor panels / toast / template colors)
- Round-icon light/dark translucent variants as surface-local rather than one universal token
- Layout editorial-frame / compact-conversion / whitespace-before-containers application
- Content product-copy direction and not promoting synthetic voice samples

Left unqualified as source-stated fact, capture measurement, evidence class, A4 field-identity, B1, B3, C1/C2/C3 policy, or Core policy — not a reconstruction-boundary exemption: named surfaces and URLs; Scope coverage inventory; Primary tasks; Distinctive raw bullets other than the echoes reading; semantic color hex roles; A4 notes (on-primary not a second canvas; outline `transparent` not Canvas; product-segment `rgba(0,0,0,0.08)` not a general overlay); B1 generic-`focus` vs `focus-visible`; Motion B3 five-kind gate; Font evidence class labels including `Unresolved claim`; Type-role metrics and A1a notation; Capture-record §14 sentences and Core C1/C2/C3 policy; Product-segment identified-role loading/error/success map; Primary/Indigo/Outline/Round-icon omission sentences (not closed C2 maps); observed 49px / 43px / 40px heights; `ko-kr` as capture locale of those URLs; Governance; Named gaps inventory.
