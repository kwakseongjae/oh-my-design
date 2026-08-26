# Classum provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/classum/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | classum |
| name | Classum |
| display_name_kr | Classum (클라썸) |
| country | KR |
| category | education |
| homepage | https://www.classum.com |
| primary_color | `#ff4438` |
| logo | favicon `https://www.google.com/s2/favicons?domain=classum.com&sz=256` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| verification_v2.schema | 2 |

Token note from source: `Values are selector-backed public marketing claims from three supplied captures. No authenticated Classum product UI, documentation chrome, interaction transition, or declared-only font is promoted.` Dual destination (E2a): this ledger keeps the verbatim source sentence; portable Experience Scope 13 restates the same unpromotion without the “No … product” phrasing, which would make the Experience scope claim self-negate.

Catalog logo metadata is a Google favicon lookup, not a captured first-party mark. The literal URL `https://www.google.com/s2/favicons?domain=classum.com&sz=256` is this identity ledger only. Portable Typography & Assets 157 holds a URL-free Google-favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file sentence, not the URL string. Named gaps has no first-party-mark sentence. First-party mark-file existence is not claimed from this lookup.

Catalog homepage `https://www.classum.com` is dual-destination: Experience Scope and this identity/surfaces ledger (E2a). It is catalog identity, not an extra captured host beyond the three named URLs.

YAML has no `ds.type`. None is invented.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| footer Verified | 2026-07-13 |

Conflicts unresolved: none. Preserved value pairs inside the reconstruction: `#ff4438` action fill vs not an in-app destructive or status color; canvas `#f6f6f9` vs university-grid-card fill `#f6f6f9` (same hex, YAML canvas described as page/card background and the card still keeps its component field); surface `#ffffff` vs on-primary `#ffffff` (same hex, named jobs unmerged); ink `#232334` vs body `#333333` vs muted `#666b80`; YAML spacing xs 6 / sm 8 / md 16 / card 30 without a px suffix vs body 6px / 8px / 16px / 30px; YAML `card` 30 vs YAML `rounded.card` 30 vs university-grid-card padding `30px`; YAML rounded control 8 / card-item 12 / card 30 vs harvested `8px` / no harvested control using `card-item` 12 / `30px`; marketing-heading 52 / 700 / 1.40 vs marketing-body 14 / 400 / 1.43 vs navigation-action 15 / 600 / 1.50 vs large-primary 18 / 600 (component field only); nav padding `6px 16px` vs large-primary `12px 34px`; filled-action border `0px solid #ffffff` vs light-outline `1px solid #ff4438` vs dark-outline `1px solid #ffffff` vs card border `0px solid #333333`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketing | https://business.classum.com/ | 2026-07-13 |
| learning | public-marketing | https://business.classum.com/learning | 2026-07-13 |
| university-lms | public-marketing | https://business.classum.com/university/lms | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-capture | product-surface | https://business.classum.com/ | 2026-07-13 |
| learning-capture | product-surface | https://business.classum.com/learning | 2026-07-13 |
| university-lms-capture | product-surface | https://business.classum.com/university/lms | 2026-07-13 |
| company-context | official-doc | https://business.classum.com/ | 2026-07-13 |
| lms-context | official-doc | https://business.classum.com/university/lms | 2026-07-13 |
| culture-context | official-doc | https://careers.classum.com/culture | 2026-07-13 |
| font-design | official-doc | https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md | 2026-07-13 |
| font-license | license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | 2026-07-13 |

### Tier 1

- https://business.classum.com/ — public-marketing home. Dual portable Scope + this ledger (E2a).
- https://business.classum.com/learning — public-marketing learning. Dual portable Scope + this ledger (E2a).
- https://business.classum.com/university/lms — public-marketing university LMS. Dual portable Scope + this ledger (E2a).
- https://careers.classum.com/culture — official historical / culture context. Provenance-only. Portable Scope restates official historical material without this URL.
- https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md — Pretendard family documentation. Provenance-only. Portable Font evidence License restates `"Pretendard Variable"` and SIL Open Font License 1.1 without this URL.
- https://github.com/orioncactus/pretendard/blob/main/LICENSE — Pretendard license. Provenance-only. Portable Font evidence License restates SIL OFL 1.1 without this URL.

Catalog homepage `https://www.classum.com` is dual Scope + this identity ledger (E2a). It is not listed as a fourth captured surface.

### Tier 2 (no usable record)

- https://getdesign.md/classum (retrieval attempted; no importable record returned)
- https://styles.refero.design/?q=classum (retrieval attempted; no importable record returned)

Portable body does not re-host these Tier 2 failure strings (E1).

### Narrative (not interface tokens)

Source §1 / §11 official historical material (founded in 2018 by Chaerin Lee and Youjin Choi to address challenges they experienced as learners; current public home as an AI-centered set of LMS, consultation, and skill solutions for university and corporate-HR audiences; university LMS page concentrating on reducing preparation and evaluation work so instructors can focus on students; reconstruction does not claim unobserved product-design intent) is restated in portable Scope. They are not interface tokens. Evidence class is official historical material and the current public-business pages. Careers culture URL is provenance-only.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-capture / computed-style / 2026-07-13; `lms` = university-lms / university-lms-capture / computed-style / 2026-07-13.

Token extraction is `reconciled` (2026-07-13). `components_harvested: true`. `verification_v2.schema: 2`. Conflicts: [].

| claim | surface |
|---|---|
| tokens.colors.primary / canvas / surface / ink / body / on-primary | home |
| tokens.colors.muted | university-lms |
| tokens.typography.family.ui | home |
| tokens.typography.marketing-body.size / weight / lineHeight / use | home |
| tokens.typography.marketing-heading.size / weight / lineHeight / use | home |
| tokens.typography.action.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / md | home |
| tokens.spacing.card | university-lms |
| tokens.rounded.control | home |
| tokens.rounded.card-item / card | university-lms |
| tokens.shadow.flat | home |
| tokens.components.nav-primary-action.* | home |
| tokens.components.nav-outline-light.* | home |
| tokens.components.nav-outline-dark.* | home |
| tokens.components.large-primary-action.* | home |
| tokens.components.university-grid-card.* | university-lms |

YAML `primary` `#ff4438` is catalog `primary_color` and the harvested public-marketing action fill, not an in-app destructive or status color.

## Capture selectors

| Component | Pointer |
|---|---|
| Public marketing navigation primary action | YAML use `home::[data-omd-capture=4]`; body `home::[data-omd-capture="4"]`. Dual portable Use / Body selector + this ledger (E2a). |
| Public marketing navigation outline on light | YAML use `home::[data-omd-capture=3]`; body `home::[data-omd-capture="3"]`. Dual portable Use / Body selector + this ledger (E2a). |
| Public marketing navigation outline on dark | YAML use `home::[data-omd-capture=8]`; body `home::[data-omd-capture="8"]`. Dual portable Use / Body selector + this ledger (E2a). |
| Public marketing large primary action | YAML use `home::[data-omd-capture=17]`; body `home::[data-omd-capture="17"]`. Dual portable Use / Body selector + this ledger (E2a). |
| University-LMS public-marketing grid card | YAML use `university-lms::div.grid-card`; body `university-lms::div.grid-card`. Dual portable Use / Body selector + this ledger (E2a). |

YAML unquoted capture ids and body quoted capture ids are both source forms; neither is rewritten to erase the other.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted unattributed curves

No cubic-bezier values exist in the source DESIGN.md. None are stored here. Duration, easing names, and reduced-motion behavior are also absent from the source; portable Motion records that absence and the B3 five-kind per-component computed gate. Sidecar `assets/_reference/fonts.json` jsDelivr CSS URL, fallback stack, and weight list are not source DESIGN.md claims and are not promoted. Sidecar `assets/_reference/tokens.json` extra neutrals and accents are not source DESIGN.md claims and are not promoted.

## Source-stated removed / unpromoted claims

Source token note and §2 / §3 / §4 / §7 / §9: authenticated Classum product UI, documentation chrome, interaction transition, and declared-only font are not promoted. No semantic success, warning, error, product-app, or documentation palette is claimed. Hover, focus, pressed, selected, disabled, dialog, menu, tab, toast, and form-error variants are deliberately absent. Those names are source-stated omissions, not new negative coverage invented for an unmentioned domain (D1).

## Omitted §13 fictional archetypes

Source §13 names three source-bound audience roles and says they are not synthetic user research. Those groups are restated in portable Audience. No fictional names, ages, company sizes, locations, or quantitative goals exist in the source; none are re-hosted here (D2).

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Classum-authored or a separately published UI specification`) on the portable body: Scope catalog-homepage-as-identity-not-a-fourth-captured-surface / three-public-marketing-packet-routes-as-this-contract’s-coverage (9); Scope token-note authenticated-application-UI-documentation-chrome-interaction-transition-declared-only-font-stay-unpromoted (13); Scope marketing-expression-only / values-stay-attached (15); Scope atmosphere calm-without-generic-CTAs (17); Scope official-history as narrative not token sheet / confined-to-first-party / no-unobserved-signed-in-application-design-intent (19); Primary tasks named captured-home-offer / navigation-and-large-CTA / university-LMS-grid-cards not §13 roles (25); Audience no-individual-personas / §13 roles not primary tasks (34); Audience no-behavioral-demographic-or-satisfaction-claims-inferred (40); Distinctive 8px-action-versus-30px-card unmerged / no-captured-hover-focus-pressed-empty-loading-error-success-disabled-dialog-menu-tab-toast-or-form-error-state-promoted (44); Principles three stems and UI implications (56); capture-bound §7 Do’s named four rules (62); Avoid §7 Don’ts plus unique §5 / §9 constraints named (71); Avoid last-bullet authenticated-learner-instructor-administrator-documentation-form-validation-or-interactive-state-requires-source-domain-evidence (78); Semantic unmerged surface/on-primary and component-field inks / not-in-app-destructive / no-semantic-success-warning-error-product-app-or-documentation-palette (86); Semantic after-list component-fields-not-extra-inks / no-semantic-palette (96); Spacing unitless YAML vs body px / 30px-not-a-global-application-gutter (100); Shape local harvested geometry / card-item-12-not-a-reason-to-invent-a-component (106); Elevation treat-as-flat / gradient-11-multicolor-shadow-not-generalized (114); Motion captured-absence-not-a-motion-token-sheet / not-defining-public-marketing-authenticated-product-or-documentation-motion-behavior (118); Font evidence-class application including SIL OFL as font asset not Classum brand asset / no-authenticated-product-or-documentation-font-substituted-or-inferred (128); Family do-not-substitute-system-font / webflow-icons-not-a-loaded-text-face (143); Type-role ratio versus size-local / large-primary component field (147); Assets Google-favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file and webflow-icons declared-only (157); Capture-record source-state-contract-preserved-while-catalog-graph-not-adopted (164); Capture-record Core applicability by meaning / Focus not focus-visible / L-E-S by product role / card no interactive-kind (181); Navigation primary C2 destination/inquiry (202); Outline-on-light C2 destination (231); Outline-on-dark C2 destination (260); Large primary L/E/S omitted at unresolved destination/request/outcome rather than closed as not-applicable (296; no destination/inquiry B2a); University-LMS grid card C4 omit-kind (314); Layout captured-surface / 30px-not-global-gutter / surface-local / do-not-reuse-marketing-CTA-as-LMS-workflow (319); Layout desktop-1440×900 / not-cross-viewport / preserve-uncertainty-rather-than-extrapolating (321); Content voice as observed public copy not a published voice spec / table guidances / no-casual-consumer-voice (326); Content Korean public-marketing register not a complete locale profile / unobserved-locale-unnamed / no-synthetic-voice-samples (334). Governance Authority / priority / unknowns / changes are the controlled Core copy; they are not reconstruction readings and are not wrapped. Named gaps are unnamed-value inventory, not extra brand doctrine. This ledger does not re-host those sentences.

## Proof notes

- tokens.source: `reconciled`; `components_harvested: true`; `verification_v2.schema: 2` preserved (A1c)
- Catalog Google favicon URL is this identity ledger only. URL-free lookup / not-a-captured-first-party-mark / not-a-portable-mark-file is portable Assets 157. Named gaps has no first-party-mark sentence (E2a)
- Homepage / three evidence-domain URLs are dual-destination with portable Experience Scope (E2a)
- Careers culture URL and Pretendard README/LICENSE URLs are provenance-only
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- YAML typography `use` fields restored on Type roles and on component Use (A1)
- YAML unitless `lineHeight` 1.43 / 1.40 / 1.50 preserved as ratios (A1a)
- Verified primitive types preserved per component: button ×4 + card. `Kind: interactive` does not replace Type (A1b). University-LMS public-marketing grid card has Type: card and omits kind (C4)
- Generic Focus row is not `focus-visible` evidence; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Navigation primary / outline-on-light / outline-on-dark loading·error·success are `not-applicable` by destination meaning, not because they were uncaptured (C2) 202/210–212, 231/239–241, 260/268–270. Large primary loading·error·success are omitted at the unresolved destination/request/outcome boundary (296); §14 capture-absence rows 169–178 are not the applicability reason (C1)
- C4 omit-kind set: University-LMS public-marketing grid card. YAML records `type: card` and no interactive-kind
- Source §13 audience roles are Audience, not primary tasks, not fictional biographies, and not re-hosted as demographics here (D2)
- The B3 five-kind per-component computed gate is Foundations Motion 120 (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 375 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence
- Capture selectors are dual portable Use/Body selector + this ledger (E2a)
- Source §9 Agent Prompt Guide brand constraints are in Experience Principles / Avoid; the prompt wrapper is deleted. No `omd-apply` / `npx omd` in the portable body
- No `.verification.md` sidecar is named in the source packet; none is invented here
