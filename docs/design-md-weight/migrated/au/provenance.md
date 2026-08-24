# au provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/au/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | au |
| name | au |
| country | JP |
| category | consumer-tech |
| homepage | https://www.au.com/ |
| primary_color | `#eb5505` |
| logo | favicon `https://www.google.com/s2/favicons?domain=au.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| ds.name | au Visual Identity |
| ds.url | https://www.kddi.com/brand/visual-identity/au/ |
| ds.type | brand |
| ds.description | Official au visual-identity guidance for voice, design principles, colour, typography, graphics, photography, logo, and slogan use. |

Catalog `primary_color` `#eb5505` / body `#EB5505` is multi-destination (E2a). Literal hex: this identity ledger; Scope 19; Distinctive 40; Distinctive extra 48; capture-bound Do 65; Semantic unmerged-role 86; Foundations Primary 90; Mobile orange action Background 193; orange-action field note 201; Mobile catalog tab border 271; tab field note 277; additional selected 289; Smartphone product label Text/Border 314–315; label field note 321. Field-role without treating it as a catalog-link colour: Semantic unmerged-role 86; Distinctive extra 48. Avoid 74 is `#0066AA` catalog-link-not-brand-colour, not an `#EB5505` destination. YAML lowercase `#eb5505` also Distinctive 40 and Foundations 86/90.

Catalog homepage `https://www.au.com/` is this identity ledger + portable Experience Scope 9 (exact literal) + named-domain / Primary-tasks home 11/29 (E2a). Surfaces/Sources/Tier 1 also hold this URL as the home capture.

Catalog logo metadata is a Google favicon lookup, not a captured first-party mark. The literal URL `https://www.google.com/s2/favicons?domain=au.com&sz=128` is this identity ledger only (provenance-only). Portable Typography & Assets holds a URL-free Google-favicon capture-method / not-a-portable-mark sentence, not the URL string (E2a: URL destination and URL-free boundary destinations are separate). Named gaps has no first-party-mark sentence.

YAML `tokens.source` is `reconciled` (A1c) — provenance-only type/source field. YAML `ds.type` is `brand` (A1c) — dual portable Scope 9 + this identity ledger / Proof. `ds.name` / `ds.url` / `ds.description` are this identity ledger; unique Visual Identity facts from those pages are in portable Experience Scope (E2a: facts dual, official-doc subpage URLs provenance-only). `ds.url` `https://www.kddi.com/brand/visual-identity/au/` is dual Scope 9 + this identity 20 + Surfaces 55 + Tier 1 77 + Narrative 91 (E2a).

Token note from source: Machine tokens are limited to supplied au.com product-surface measurements and explicitly labelled official Visual Identity facts. The official brand font is not substituted for the observed loaded UI family. Dual destination (E2a): this identity note and portable Scope 13 + Foundations Semantic evidence-domain 88.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

Verified note from source footer: 2026-07-13. The source footer does not contain `(omd:migrate)`. Packet date `2026-07-13` in Scope 11 is also this freshness ledger (E2a: packet identifier in portable Scope; verified date in this ledger).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-telecom-home | https://www.au.com/ | 2026-07-13 |
| mobile | public-mobile-catalog | https://www.au.com/mobile/ | 2026-07-13 |
| smartphone | public-smartphone-catalog | https://www.au.com/mobile/product/smartphone/ | 2026-07-13 |
| brand-vi | official-visual-identity | https://www.kddi.com/brand/visual-identity/au/ | 2026-07-13 |

Verification product URLs (`https://www.au.com/`, `https://www.au.com/mobile/`, `https://www.au.com/mobile/product/smartphone/`) are dual-destination: portable Experience Scope 11 and this ledger (E2a). `https://www.au.com/` is also Scope 9 and Primary tasks home (URL only; not global navigation/header search). `https://www.au.com/mobile/` is also Primary tasks mobile, including global navigation and header search bound to this mobile surface / mobile-capture. `https://www.au.com/mobile/product/smartphone/` is also Primary tasks 31. Navigation/search typography and `header-search.*` claims remain surface_id `mobile` / source_id `mobile-capture` in this claim ledger. Official-doc subpage URLs (color / typography / design-principles / toneofvoice / knowing-au) are provenance-only in Sources/Tier 1/Narrative; unique first-party narrative propositions from those pages are in portable Experience Scope (E2a: facts dual, URLs provenance-only). `brand-vi` is official visual identity, treated in portable Scope 11 as official-doc evidence rather than an extra au.com capture.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-capture | product-surface | https://www.au.com/ | 2026-07-13 |
| mobile-capture | product-surface | https://www.au.com/mobile/ | 2026-07-13 |
| smartphone-capture | product-surface | https://www.au.com/mobile/product/smartphone/ | 2026-07-13 |
| vi-color | official-doc | https://www.kddi.com/brand/visual-identity/au/color/ | 2026-07-13 |
| vi-typography | official-doc | https://www.kddi.com/brand/visual-identity/au/typography/ | 2026-07-13 |
| vi-principles | official-doc | https://www.kddi.com/brand/visual-identity/au/design-principles/ | 2026-07-13 |
| vi-voice | official-doc | https://www.kddi.com/brand/visual-identity/au/toneofvoice/ | 2026-07-13 |
| brand-message | official-doc | https://www.kddi.com/brand/knowing-au/ | 2026-07-13 |

### Tier 1

- https://www.au.com/
- https://www.au.com/mobile/
- https://www.au.com/mobile/product/smartphone/
- https://www.kddi.com/brand/visual-identity/au/
- https://www.kddi.com/brand/visual-identity/au/color/
- https://www.kddi.com/brand/visual-identity/au/typography/
- https://www.kddi.com/brand/visual-identity/au/design-principles/
- https://www.kddi.com/brand/visual-identity/au/toneofvoice/
- https://www.kddi.com/brand/knowing-au/

### Tier 2 (no usable record)

- https://getdesign.md/au (attempted; built-in web open returned no usable record)
- https://styles.refero.design/?q=au (attempted; built-in web open returned no usable result)

### Narrative (not interface tokens)

- Official visual identity: https://www.kddi.com/brand/visual-identity/au/
- Colour: https://www.kddi.com/brand/visual-identity/au/color/
- Typography: https://www.kddi.com/brand/visual-identity/au/typography/
- Design principles: https://www.kddi.com/brand/visual-identity/au/design-principles/
- Tone of voice: https://www.kddi.com/brand/visual-identity/au/toneofvoice/
- Brand message: https://www.kddi.com/brand/knowing-au/

Official 2012 consumer-services expansion under 3M, current brand message 「おもしろいほうの未来へ。」 introduced in 2019 in place of 「あたらしい自由。」, KDDI joining communications with life design, and companion-toward-a-more-interesting-future are first-party narrative in portable Experience Scope 9/17. March 2025 Visual Identity refresh (simplified design and text expression, slogan rules, colour guidance alongside an au UI colour system; consistent expression across services and customer touchpoints) is first-party in portable Scope 19; treating that update as narrative rather than a wholesale transcription of the brand book into product tokens is derived editorial implementation inference in that same Scope 19 paragraph (adjacent complete B2a; not first-party as a treatment). Official-doc subpage URLs stay provenance-only.

## Claim ledger

Claims use YAML anchors from the source: `brand_color` = brand-vi / vi-color / official-doc / 2026-07-13; `product` = mobile / mobile-capture / computed-style / 2026-07-13; `font_doc` = brand-vi / vi-typography / official-doc / 2026-07-13; `smartphone` = smartphone / smartphone-capture / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | brand-vi |
| tokens.colors.canvas | mobile |
| tokens.colors.foreground | mobile |
| tokens.colors.link | mobile |
| tokens.colors.muted | mobile |
| tokens.colors.hairline | mobile |
| tokens.colors.control-border | mobile |
| tokens.colors.on-primary | mobile |
| tokens.typography.family.ui | mobile |
| tokens.typography.family.brand | brand-vi |
| tokens.typography.body.size / weight / lineHeight / use | mobile |
| tokens.typography.navigation.size / weight / lineHeight / use | mobile |
| tokens.typography.search.size / weight / lineHeight / use | mobile |
| tokens.spacing.xs / sm / md / lg | mobile |
| tokens.rounded.square / card | mobile |
| tokens.shadow.flat | mobile |
| tokens.components.mobile-orange-action.* | mobile |
| tokens.components.mobile-outline-action.* | mobile |
| tokens.components.header-search.* | mobile |
| tokens.components.mobile-tab.* | mobile |
| tokens.components.mobile-service-card.* | mobile |
| tokens.components.smartphone-label.* | smartphone |

## Capture selectors

| Component | Pointer |
|---|---|
| Mobile orange action | body `surface-2::[data-omd-capture="91"]`; YAML `surface-2::[data-omd-capture=91]` |
| Mobile outline action | body `surface-2::[data-omd-capture="92"]`; YAML `surface-2::[data-omd-capture=92]` |
| Header search | body `surface-2::[data-omd-capture="8"]`; YAML `surface-2::[data-omd-capture=8]` |
| Mobile catalog tab | body `surface-2::[data-omd-capture="81"]`; YAML `surface-2::[data-omd-capture=81]` |
| Mobile service card | `surface-2::div.cmp-au-com-card__wrapper` and `.cmp-au-com-card__contents-section` |
| Smartphone product label | `surface-3::span.product-card-item-label` |

## Omission ledger

Source §13 placeholder (quoted, not filled; portable `DESIGN.md` omits the value at this boundary):

`[FILL IN: validated au audience archetypes, jobs, accessibility needs, and evidence source]`

No duration, easing curve, transition, carousel timing, or motion-reduction behavior is established by the supplied evidence. No unattributed cubic-bezier is present in the source, so none is stored here as an omitted curve (E2b: there is no placeholder-wrapper curve to keep).

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: reconciled
- ds.type: brand
- Interaction: one tab-selection interaction captured. Dual: portable Capture record 179 + Mobile catalog tab Observed 276 + additional selected 289 + this Proof note (E2a).
- Uncaptured hover/focus/pressed/disabled/error/modal/toast/empty/loading/success/skeleton treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Mobile orange action / Mobile outline action / Header search loading/error/success applicability is omitted: exact destination/request/outcome unresolved (C2). Capture selectors remain known (Use 199 / 225 / 251 + this Capture selectors table). Those selectors are not in the unresolved set.
- Mobile catalog tab loading/error/success are `not-applicable` by tab meaning (selected versus unselected), not by capture absence (C2, 285–287).
- Mobile service card and Smartphone product label have no interactive-kind evidence; kind and state-applicability maps are omitted (C4). `Type: card` and `Type: badge` are kept (294 / 310).
- YAML `tokens.source: reconciled` and `ds.type: brand` are identity metadata (A1c)
- §13 records no first-party persona segmentation and does not authorize invented demographic or behavioral personas. Independently verified surface work is the three primary tasks. No fictional demographics are re-hosted here (D2)
- Catalog `primary_color` `#eb5505` / `#EB5505` literal hex destinations are listed under Identity (E2a)
- Catalog Google favicon literal URL is provenance identity only. URL-free capture-method / not-a-portable-mark sentence is portable Assets only (E2a). Named gaps has no first-party-mark sentence.
- Token note is dual this identity note + portable Scope 13 + Foundations Semantic evidence-domain 88 (E2a)
- Official-doc subpage URLs are provenance Sources/Tier 1/Narrative; unique narrative facts are portable Scope 9/17/19 (E2a: URL vs URL-free)
- YAML unitless lineHeight `1.4` / `1.4` / `2.5` and body-table 22.4px / 21px / 30px remain unmerged (A1a). Dual Type roles 155 / 161–163
- YAML primitive types preserved per component: button ×2 (191 / 216), input (242), tab (268), card (294), badge (310). `Kind: interactive` does not replace type (A1b)
- RGB 235, 85, 5 is official au Orange in portable Distinctive 40 + Semantic unmerged-role 86 + Foundations Primary 90
- `#0066AA` not-a-brand-colour is Distinctive extra 48 + Avoid 74 + Semantic 86 + Foundations Link 93. Distinctive 41 and Scope 19 hold the hex as catalog-link / organise observation, not that not-brand claim.
- `#FFFFFF` canvas vs action text unmerged is Semantic 86/91 + orange-action 194/201 + outline-action 218/227 + Header search 244/253 + service card 297/303 + label 313/321
- `ds.url` destinations also include Narrative 91 (E2a)

## Derived editorial inventory (portable body, adjacent complete B2a)

These portable sentences are derived editorial implementation inference from the verified surfaces; they are not au-authored or a separately published UI specification:

- Experience Scope named-evidence-domain grouping of the three au.com URLs, and official Visual Identity / brand-message documents as official-doc evidence rather than an extra au.com capture (11)
- Experience Scope token-note register split (13)
- Experience Scope visual-character / tension / identity-mark / deliberately-practical / information-rich / highly-visible-orange-action-lane (15). Organise is not in this paragraph.
- Experience Scope 2025-update-as-narrative / organise / retain-domains-separately / canonical-tokens-restricted (19)
- Experience unmeasured-facts (22)
- Experience Primary tasks: independently verified public-route jobs, not lifted from §13; home task is the home URL only; global navigation and header search stay on the mobile catalog task with claim-ledger mobile / mobile-capture (27)
- Experience Audience: no-individual-personas-promoted / no-invented-personas / placeholder-omitted / observable-work (36)
- Distinctive extra readings (action / label / underline unmerged; `#0066AA` not brand colour; `0px` vs `5px`; UI family not Tazugane; orange action lane as visual character; hover/focus/pressed/disabled/error/modal/toast not-promoted) (48)
- numbered Principles *UI implication* notes (52)
- capture-bound grouping of source §7 Do’s and harvested geometry (63)
- Avoid list including catalog-link-not-brand-colour / Helvetica-or-brand-font-not-UI-family / unobserved-state-not-invented / catalog-chrome-not-KDDI-corporate-marketing-or-authenticated-app / rounded-generic-CTA-fallback-font (72)
- Avoid last-bullet unique §9 construction constraints (78)
- Semantic unmerged-role extra characterizations (`#FFFFFF` not-second-canvas; `#333333` not-Link; `#777777` not-Foreground; hairline-not-control-border) (86)
- Semantic token-note / evidence-domain register split (88)
- Foundations Link catalog-link-not-brand-colour (93)
- Spacing recorded-scale / measurements-stay-with-components (102)
- Shape local-geometry / no-rounded-generic-CTA (111)
- Elevation flat-separation-from-surfaces-hairlines-corners (115)
- Elevation not-a-general-ladder (119)
- Font evidence-class application including only-UI-family-token / brand-message-not-substitute / Helvetica-not-token / no-declared-only-promoted (133)
- Family font-use boundary (151)
- Type-role ratio-versus-size-local / not-converted / 11px-not-a-fourth-YAML-type-role (157)
- Assets Google-favicon identity-not-captured (170)
- Capture-record graph-not-adopted preservation (177)
- Mobile orange action unmerged-field / harvested-height-not-touch-target / fill-jobs-not-this-button / `#FFFFFF` label-not-a-second-canvas-token (201)
- Mobile outline action unmerged-field / harvested-height-not-touch-target / not-a-second-orange-action / `#FFFFFF` shared-hex / `#333333` not-Link (227)
- Header search unmerged-field / search-ratio-versus-30px / height-32px-not-44px-actions / control-border-not-hairline (253)
- Mobile catalog tab unmerged-field / 2px-underline-only-on-selected-tab / not-a-second-primary-token (277)
- Mobile service card unmerged-field / canvas-fill / hairline-not-control-border / 5px-not-0px (303)
- Smartphone product label unmerged-field / 11px-not-a-fourth-YAML-type-role / hex-jobs-not-a-type-role / fill-not-a-second-canvas-token (321)
- Layout measurement-boundary / local-frequency / not-generalized / 5px-bordered-cards / not-touch-target / not-cross-viewport (330)
- Layout desktop-snapshots-only / intentionally-absent-responsive-rules (332)
- Content English Do/Don’t implementation sentences as source-derived editorial implementation / not au-authored or a separately published UI specification (341). Voice adjectives and the respect requirement remain first-party. The table is not first-party tone-of-voice language.
- Content no-synthetic-sample (352). Named gaps has no reusable-copy-beyond-V.I. sentence. Three sample directions remain labelled not reusable au copy in Content.
