# AWS Cloudscape provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/aws-cloudscape/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | aws-cloudscape |
| name | AWS Cloudscape |
| country | US |
| category | backend-devops |
| homepage | https://cloudscape.design/ |
| primary_color | `#295eff` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=cloudscape.design&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | Cloudscape Design System |
| ds.url | https://cloudscape.design/ |
| ds.type | system |
| ds.description | AWS's open-source design system for cloud application experiences. |

Catalog logo type `favicon` / Google s2 URL is identity-only in this ledger. Portable Typography & Assets holds a URL-free Google-favicon capture-method / not-a-portable-mark sentence, not the URL string (E2a: not dual-destination for the URL). Catalog `primary_color` `#295eff` is dual identity metadata + portable Scope 9/13 + Distinctive 42/47 + capture-bound Do 62/65 + Avoid 72/75 + Semantic 88 (E2a). Homepage exact `https://cloudscape.design/` is dual-destination: Experience Scope 9/11 + About/home citation 17 + Primary tasks 26 + this identity/surfaces/sources/Tier 1 ledger (E2a). `ds.name` / `ds.url` / `ds.type: system` / `ds.description` are dual: this identity ledger + portable Experience Scope 9 (`Official design system = Cloudscape Design System`, `ds.type: system`, open-source description) (A1c, E2a).

Token note from source: live-extract on the three public routes. `#295eff` is the repeated public link/accent; it is not promoted as an unmeasured solid CTA fill. Dual destination (E2a): this ledger 27 and portable Experience Scope 13.

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
| home | marketing | https://cloudscape.design/ | 2026-07-13 |
| components | documentation | https://cloudscape.design/components/ | 2026-07-13 |
| about | corporate | https://cloudscape.design/about/ | 2026-07-13 |

The three URLs are dual-destination with portable Experience Scope (E2a). Surface kinds `marketing` / `documentation` / `corporate` are dual: this ledger + portable Scope 11 verification-kind labels (E2a; not ledger-only).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://cloudscape.design/ | 2026-07-13 |
| components-live | official-doc | https://cloudscape.design/components/ | 2026-07-13 |
| about-live | product-surface | https://cloudscape.design/about/ | 2026-07-13 |
| typography-doc | official-doc | https://cloudscape.design/foundation/visual-foundation/typography/ | 2026-07-13 |
| global-styles-doc | official-doc | https://cloudscape.design/get-started/for-developers/global-styles/ | 2026-07-13 |
| components-license | license | https://github.com/cloudscape-design/components/blob/main/LICENSE | 2026-07-13 |

Additional first-party URLs named in the source body (not YAML `verification_v2.sources`):

- Colors: https://cloudscape.design/foundation/visual-foundation/colors/
- Using components: https://cloudscape.design/get-started/for-developers/using-cloudscape-components/
- Design resources: https://cloudscape.design/get-started/for-designers/design-resources/
- Get started: https://cloudscape.design/get-started/
- Start designing: https://cloudscape.design/get-started/for-designers/start-designing/

### Tier 1

- https://cloudscape.design/ (Cloudscape home)
- https://cloudscape.design/components/ (Components)
- https://cloudscape.design/about/ (About Cloudscape)
- https://cloudscape.design/foundation/visual-foundation/typography/ (Typography)
- https://cloudscape.design/get-started/for-developers/global-styles/ (Global styles)

The three captured-route URLs are dual-destination with portable Experience Scope (E2a). Typography URL is dual: portable Font evidence 132 + this Tier 1 ledger 75 (E2a). Global styles URL is dual: portable Font evidence 134 + this Tier 1 ledger 76 (E2a). Colors URL is dual: portable Foundations 96/98 + additional sources 64 + Narrative 90 (E2a; not Tier 1). Using-components URL is dual: portable Font evidence 132 + additional sources 65 (E2a). Design-resources URL is dual: portable Font evidence 134 + additional sources 66 (E2a). Get-started URL is dual: portable Content 218 + additional sources 67 (E2a). Start-designing URL is dual: portable Scope 17 + additional sources 68 + Narrative 89 (E2a).

### Tier 2 (no usable record)

- https://getdesign.md/aws-cloudscape (getdesign attempt: web safety layer rejected direct open)
- https://styles.refero.design/?q=Cloudscape (Refero attempt: web safety layer rejected direct open)

### Narrative / license (not interface tokens)

- About Cloudscape: https://cloudscape.design/about/
- Cloudscape home: https://cloudscape.design/
- Start designing: https://cloudscape.design/get-started/for-designers/start-designing/
- Colors (system guidance, not a token source for unmeasured fills): https://cloudscape.design/foundation/visual-foundation/colors/
- Components license: https://github.com/cloudscape-design/components/blob/main/LICENSE

The source does not name a license identifier. None is invented here.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `components` = components / components-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.link | home |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.muted | home |
| tokens.colors.border | home |
| tokens.typography.family.sans | home |
| tokens.typography.display.size / weight / lineHeight / tracking / use | home |
| tokens.typography.heading.size / weight / lineHeight / tracking / use | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / md / lg / xl | home |
| tokens.rounded.sharp / control / card | home |
| tokens.shadow.flat | home |
| tokens.components.component-directory-card.type | components |
| tokens.components.component-directory-card.fg | components |
| tokens.components.component-directory-card.radius | components |
| tokens.components.component-directory-card.height | components |
| tokens.components.component-directory-card.font | components |
| tokens.components.component-directory-card.use | components |

## Capture selectors

| Component | Pointer |
|---|---|
| Component directory card | `surface-2::div`, class `card`, on https://cloudscape.design/components/ |

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted placeholders

Portable Foundations omit the source §15 placeholder rather than filling it. Quoted from the source, as an omission ledger:

- `[FILL IN: selector-backed or official-token motion values after dedicated evidence collection.]`

No duration, easing curve, transition property, reduced-motion behavior, or motion token was present to promote. B3 five-kind per-component computed gate remains on any future promotion.

## Proof notes

- verification_v2 schema 2; conflicts: []
- tokens.source: `live-extract`; `components_harvested: true`
- `ds.type: system` preserved (A1c). `ds.name` Cloudscape Design System, `ds.url` `https://cloudscape.design/`, `ds.description` AWS's open-source design system for cloud application experiences.
- Catalog logo Google s2 favicon URL is identity-only. Portable Assets 158 is URL-free capture-method / not-promoting-the-lookup-as-a-portable-mark-file (E2a: URL not dual). Named gaps 262–272 has no first-party-mark-file sentence.
- Homepage exact `https://cloudscape.design/` is dual-destination: Scope 9/11 + About/home citation 17 + Primary tasks 26 + this identity/surfaces/sources/Tier 1 ledger (E2a).
- `primary_color` `#295eff` is dual-destination: identity 14/25/27 + portable Scope 9/13 + Distinctive 42/47 + capture-bound Do 62/65 + Avoid 72/75 + Semantic 88 (E2a). It is not a Components card fill.
- Token note is dual-destination: Experience Scope 13 + this ledger 27 (E2a). YAML `tokens.source: live-extract` as a field remains this ledger 17/139 (A1c); portable Scope 13 carries the token-note wording, not the YAML field.
- `ds.*` fields are dual-destination: this identity ledger + portable Experience Scope 9 (E2a).
- Surface kinds marketing / documentation / corporate are dual this ledger + portable Scope 11 (E2a).
- Uncaptured hover/focus/pressed/disabled/error/loading/empty/success/skeleton treatments are omitted. They are not `not-applicable`; the harvested card omits kind and a §4.4 map (C4). State coverage is not claimed complete (C3). Generic `focus` is not `focus-visible` treatment evidence (B1).
- Source §13 names evidence-bounded roles, not invented demographic personas. Portable Audience keeps those groups and their source jobs: cloud-product designer moving from wireframe to prototype while maintaining accessible, consistent application structure; React application developer using component APIs and testing/responsiveness/accessibility guidance (Audience 36–37). Names, ages, cities, and biographies are not copied here because the source has none (D2). Primary tasks come from the three captured public routes, not §13.
- Interpretive claims in source (operational-rather-than-ornamental; numbered principle titles and UI implications; voice application table; card token-scope “explains why”; layout “information-dense” / “clear and structured”) are editorial readings, not official Cloudscape UI specifications. Portable adjacent-complete B2a sites after F3: Scope named-evidence-domain / not-same-surface (11); Scope token-note / not-unmeasured-solid-CTA-fill (13); Scope operational-rather-than-ornamental (15); Scope About-history-not-tokens (19); Primary tasks not-from-§13 (29); Audience no-individual-personas-promoted / stakeholder-groups / observable-work (34); Audience role jobs (36–37); Distinctive unmerged-role / Open-Sans-canonical-because-agree (47); numbered Principles titles + UI implications + stems-paraphrase (51); capture-bound Do’s named items (62); capture-bound Don’ts named items (72); Avoid last-bullet unmeasured-geometry (78); Semantic extra role characterizations (86); Foundations card-text-not-second-ink (94); Colors-page-not-unmeasured-fills (96); Spacing public-route-rhythm / not-complete-grid (102); Shape local-geometry / unmerged-0px (104–110); Elevation use-none-only / not-shared-shadow (114); Elevation hierarchy reading (116); Font evidence-class extra applications (128); Family font-use boundary (140); Type-role size-local px / not-unitless-ratio (148); Assets Google-favicon-not-mark (158); Capture-record graph-not-adopted (165); card token-scope (202); Layout public-route-rhythm / information-dense-without-added-elevation (207); Layout official-responsive-not-cross-viewport / clear-and-structured (209); Layout one-desktop / no-exact-breakpoint / preserve-reflow / dedicated-comparison (211/213); Content direct-instructional characterization (220); Content application note + table + samples named (222); Content illustrative-not-first-party-quotations (230). First-party public-materials sentence is 218. Worker F1 is a self-scan, not a completeness proof (E2c). This inventory is the F3 restatement, not a claim that no unqualified sentence remains.
