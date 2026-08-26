# BMW provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/bmw/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | bmw |
| name | BMW |
| country | DE |
| category | automotive |
| homepage | https://www.bmw.com |
| primary_color | `#1c69d4` |
| logo | type `simpleicons`, slug `bmw` |
| omd format (source) | 0.1 |
| verification_v2.schema | 2 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | false |

Catalog homepage `https://www.bmw.com` is dual-destination: Experience Scope 9 + this identity 13 / dest sentence 22 (E2a). It is catalog identity, not a captured page. Captured surfaces are BMW USA routes named in portable Scope 9.

Catalog `primary_color` `#1c69d4` destinations: this identity ledger 14 / dest sentence 24 + portable Distinctive unmerged B2a 36 / bullet 38, capture-bound Do 54, Semantic Primary action 76, Home primary CTA Background 171 / field note 179 (E2a). Semantic unmerged-role limiter 74 names the reading without the hex. Avoid does not contain the hex. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Distinctive 32/34, capture-bound 50, Semantic 72, Home primary 168/176, limiter 70]**

Catalog logo type `simpleicons` / slug `bmw` is dual: this identity ledger 15 / dest sentence 26 + portable Typography & Assets 151 (E2a). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Assets 148]**

`tokens.source: live-extract` and `components_harvested: false` are this ledger only as YAML keys (A1c) at 18 / 20 / dest sentence 28 / claim-ledger restatement 106. Portable Capture record restates `components_harvested: false` in running prose at 164 (E2a). YAML `verified` 2026-07-13 and `extracted` 2026-07-13 are this freshness ledger 34 / 39. Footer **Verified:** 2026-07-13 is this ledger only 40. Source YAML `verification_v2.schema: 2` is Identity 17 + Freshness 35 + first-class sentence 42 (A1c). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Capture 161; schema: 2 was missing]**

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.schema | 2 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| footer Verified | 2026-07-13 |

Source YAML `verification_v2.schema: 2` is a first-class metadata row on Identity and Freshness (A1c). Conflicts unresolved: none (source `verification_v2.conflicts` and footer). Preserved value pairs inside the reconstruction: home `#414141` vs configurator `#262626`; on-dark navigation `#ffffff` vs primary-CTA on-fill `#ffffff`; outline `#f2f2f2` vs those foregrounds; build-your-own flyout `#666666` vs `#414141` / `#262626` / `#ffffff`; YAML rounded none 0 vs control 3; YAML lineHeight ratios `1.43` / `1.56` / `1.6` / `1.5` vs body-table 50px / 28px / 24px / 30px; YAML spacing numbers without a px suffix vs observed 4px / 12px / 24px / 32px roles; CTA 52px vs flyout 84px. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-marketing | https://www.bmwusa.com/ | 2026-07-13 |
| models | vehicle-catalog | https://www.bmwusa.com/vehicles/all-bmw-models.html | 2026-07-13 |
| configurator | configurator-marketing | https://www.bmwusa.com/build-your-own.html#/ | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.bmwusa.com/ | 2026-07-13 |
| models-live | product-surface | https://www.bmwusa.com/vehicles/all-bmw-models.html | 2026-07-13 |
| configurator-live | product-surface | https://www.bmwusa.com/build-your-own.html#/ | 2026-07-13 |
| bmwtype-web-assets | brand-asset | https://www.bmwusa.com/etc.clientlibs/bmw-web/clientlibs/clientlib-site/resources/fonts/BMWTypeNext-Regular.woff2 | 2026-07-13 |
| bmw-club-ci | official-doc | https://www.bmwgroup-werke.com/content/dam/grpw/websites/bmwgroup-classic_com/bmw_clubs/downloads/leitlinien/en/BCIC_Guideline_no5_version2.1.1.pdf | 2026-07-13 |
| bmw-brand-design | official-doc | https://www.press.bmwgroup.com/global/article/detail/T0306305EN/introducing-bmw%E2%80%99s-new-brand-design-for-online-and-offline-communication?language=en | 2026-07-13 |
| bmw-history | official-doc | https://www.bmwgroup.com/en/company/history.html | 2026-07-13 |
| bmw-neue-klasse | official-doc | https://www.bmwgroup.com/en/company/neue-klasse.html | 2026-07-13 |

### Tier 1

- https://www.bmwusa.com/ — public BMW USA home. Dual portable Scope 9 + this ledger (E2a).
- https://www.bmwusa.com/vehicles/all-bmw-models.html — model catalog. Dual portable Scope 9 + this ledger (E2a).
- https://www.bmwusa.com/build-your-own.html#/ — build-your-own. Dual portable Scope 9 + this ledger (E2a).

### Tier 2

- https://getdesign.md/bmw — record present; broad editorial cross-check only. This ledger only.
- https://styles.refero.design/?q=bmw — required search attempted; built-in open was blocked and no usable BMW style record was collected. This ledger only.

### Narrative (not interface tokens)

Official URLs that inform portable Scope narrative under adjacent complete B2a (13), not live web tokens:

- BMW brand-design announcement: https://www.press.bmwgroup.com/global/article/detail/T0306305EN/introducing-bmw%E2%80%99s-new-brand-design-for-online-and-offline-communication?language=en
- BMW Group history: https://www.bmwgroup.com/en/company/history.html
- BMW Group Neue Klasse overview: https://www.bmwgroup.com/en/company/neue-klasse.html
- BMW Club CI guideline: https://www.bmwgroup-werke.com/content/dam/grpw/websites/bmwgroup-classic_com/bmw_clubs/downloads/leitlinien/en/BCIC_Guideline_no5_version2.1.1.pdf — dual this ledger + portable Font evidence Official distributed row 127 (guideline named; URL this ledger) (E2a). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Official distributed 124; Official product-use is not a source font evidence class and has no dest]**

WOFF2 face URL `https://www.bmwusa.com/etc.clientlibs/bmw-web/clientlibs/clientlib-site/resources/fonts/BMWTypeNext-Regular.woff2` is this ledger only (brand-asset source). Portable Font evidence Live computed row 125 restates 52 BMWUSA-hosted WOFF/WOFF2 source URLs without copying this path. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Font evidence 122]**

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `configurator` = configurator / configurator-live / computed-style / 2026-07-13; `bmwtype-web-assets` = computed-font-face / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.foreground | home |
| tokens.colors.on-dark | home |
| tokens.colors.outline | home |
| tokens.colors.foreground-configurator | configurator |
| tokens.typography.family.ui | home (bmwtype-web-assets / computed-font-face) |
| tokens.typography.display.size / weight / lineHeight / use | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.control.size / weight / lineHeight / use | home |
| tokens.typography.utility.size / weight / lineHeight / use | home |
| tokens.spacing.space-4 / space-12 / space-24 / space-32 | home |
| tokens.rounded.none / control | home |

Token extraction is `live-extract` (2026-07-13). `components_harvested: false`. YAML `tokens.components` is `{}`. Body §4 supplies the four named controls; portable Components restates that emptiness at 164. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior 161]**

## Capture selectors

| Component | Pointer |
|---|---|
| Home primary CTA | `home::[data-omd-capture="10"]` `.cmp-button` |
| Home outline CTA | `home::[data-omd-capture="11"]` `.cmp-button` |
| Home flyout trigger | `home::[data-omd-capture="1"]` `.cmp-globalnavigation__interaction--flyout` |
| Build-your-own flyout trigger | `surface-3::[data-omd-capture="1"]` `.cmp-globalnavigation__interaction--flyout` |

Portable component Use fields keep the class names (`.cmp-button`, `.cmp-globalnavigation__interaction--flyout`) without the `data-omd-capture` pointers (177, 201, 224, 250). Pointers stay on this ledger. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior 174/198/221/247]**

## Omitted unattributed curves

Source §15 records no cubic-bezier values. None are stored here. Duration, easing name, animation name, transition property, and reduced-motion behavior are all unobserved. Portable Motion keeps the not-promoted absence under adjacent complete B2a (111) and the source sentence “Motion tokens are intentionally omitted.” The B3 five-kind per-component computed gate is Foundations Motion 113 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 330 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Motion 107/109, Named gaps 327]**

## Omitted §9 construction prompts

§9 Agent Prompt Guide is deleted from the portable body (no adapter slot). Verified `#1c69d4` fill, white 15px/500 `bmwTypeNextWeb`, 3px radius, 4px inset padding, 52px height, transparent outline fill, `#f2f2f2` text and 1px inset outline, home flyout white 15px/500 / 0px radius / 0px 12px padding, and build-your-own `#666666` already live in Foundations / Components / Experience capture-bound. Unique §9-only values: none (A3 n/a). Prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components.

## Source §13 stakeholder groups

Source §13 names source-backed stakeholder groups, not fictional customers or demographic personas. Dual portable Audience limiter 28 + unique-relationship bullets 30–32 + this paragraph 129 (E2a). Portable Audience keeps the three source-backed unique relationships (not labels-and-source-parens only): prospective BMW customer (the 2020 brand announcement says BMW puts the customer at the centre of the revised identity and invites customers into the world of BMW); official BMW Club representative (the Club CI guideline addresses official clubs as brand ambassadors and sets mandatory rules for their communications; it is not a public-product UI persona); BMW Group design collaborator (BMW Group Design describes a global design organisation working across its automotive brands; this informs brand context, not a user-flow requirement). They are not primary tasks. No biographies are re-hosted here (D2 n/a for fiction; groups are not copied as personas in this file). D2 is not a deletion reason for these source-backed stakeholder facts. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior “Audience 28 only” labels-and-parens dest]**

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not BMW-authored or a separately published UI specification`) on the current portable body: Scope three-URL evidence-domain / catalog-homepage-not-captured-page / authenticated-vehicle-account-dealer-in-car-not-claimed (9); Scope recorded-home-treatment extras (11); Scope public-history / current-evolution extras including Neue-Klasse-as-an-update-to-the-brand’s-driving-pleasure-proposition (13); Primary tasks three-routes-not-from-§13 (19); Audience no-individual-personas-promoted / groups-not-primary-tasks / groups-not-user-flow-requirements (28), unique source-backed relationships at 30–32; Distinctive unmerged-role extras plus mostly-square-navigation-chrome / unpromoted-hover-focus-pressed-modal-or-responsive-system, limiter immediately before the bullets (36); numbered Principles named *UI implication* notes (46); capture-bound grouping of §7 Do’s named rules including lawful-fallback-only-when-the-proprietary-face-cannot-be-loaded (52); Avoid named Don’ts extra causal readings (61); Avoid last-bullet consent-banner-or-chatbot-not-BMW-component-tokens (66); Semantic unmerged-role extra characterizations including omitted-instead-of-inferred-from-marketing-imagery-or-logos (74); Spacing unitless-YAML-not-a-claimed-scale (86); Spacing observed-px extras / harvested-control-padding / no-grid-container-width-or-breakpoint, limiter precedes the role list (88); Shape local-geometry / role labels limiter-precedes-list (94); Shape local-harvested-geometry restatement (99); Elevation table Use / chatbot-shadow-not-an-elevation-token / no-reusable-panel-card-or-modal-elevation-system, limiter immediately before the table (103); Motion not-promoted-absence (111); Font evidence-class extras of the five source classes Live computed surface-use / Live computed but limited use / Official distributed brand asset / Declared-only / Licence boundary, including licence-boundary-browser-use-only / Club-guideline-not-a-downstream-webfont-licence (121) — Official product-use is not a current Font class and has no dest; Family font-use named (131); Type-role ratio-versus-size-local extras / omitted-tracking-not-invented (140); Assets Simple Icons identity-only (151); Capture-record graph-not-adopted (158); YAML-empty Type-not-invented (164); Home primary CTA field-note unmerged-field (179); Home outline CTA field-note unmerged-field (203); Home flyout field-note unmerged-field (226); Home flyout menu-open-not-computed-paint (238); Build-your-own flyout field-note unmerged-field including surface-specific-not-a-home-navigation-variant (252); Build-your-own flyout menu-open-not-computed-paint (264); omitted-surfaces no-invented-kind (266); Layout two-geometries / observed-repetitions / heights-as-component-fields (273); Layout 1440×900-desktop-only / no-responsive-token-or-rule / 52px-84px-not-cross-viewport, limiter precedes the collector-run sentence (275); Content voice extras including brand-communication-context-not-unobserved-product-error-copy / table labels / Controls-direct-labels-within-observed-surface-evidence (280); Content no-synthetic / §14-not-extra-Observed (288). Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Distinctive 32, Principles 42, capture-bound 48, Avoid 57/62, Semantic 70, Spacing 82/84, Shape 90/95, Elevation 99, Motion 107, Font 117 as if Official-product-use were a class, Family 128, Type-role 137, Assets 148, Capture 155/161, Home primary 176, Home outline 200, Home flyout 223/235, Build-your-own 249/261, omitted-surfaces 263, Layout 270/272, Content 277/285; prior Audience 28 labels-only]**

## Revision 2026-08-24 (wave12 sol resubmit)

F3 was not re-run. `verification_v2.schema: 2` is Identity 17 + Freshness 35 + sentence 42. Portable Audience unique relationships are DESIGN.md 30–32 (limiter 28). Font Official-product-use has no dest; Narrative 76–83 remains narrative-not-interface-token. Current dests are in `migration-log.md` Revision 2026-08-24 (wave12 sol resubmit). DESIGN SHA-256 `77492c4dae561d58c335a606c6ebd2e48e6375961544302b3ea511c17e5a8dec`. Not a catalog-adoption claim (E2c).
