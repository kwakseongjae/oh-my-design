# The Pinkfong Company provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Pinkfong migration. Canonical source remains `web/references/pinkfong/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | pinkfong |
| name | The Pinkfong Company |
| display_name_kr | 더핑크퐁컴퍼니 |
| country | KR |
| category | consumer-tech |
| homepage | https://www.thepinkfongcompany.com |
| primary_color | `#ff66af` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=pinkfong.com&sz=128` |
| omd format (source) | 0.1 |
| added | 2026-06-17 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | The Pinkfong Company Identity |
| ds.url | https://www.thepinkfongcompany.com/company |
| ds.type | brand |
| ds.description | Official corporate identity page with company and franchise BI downloads; not a public product-component specification. |

The logo slug is a third-party favicon-proxy URL, not a Pinkfong-hosted brand file. The portable Assets section names it as a catalog pointer.

Token note from source, verbatim: "Only the supplied corporate-site capture is token authority. Consumer Pinkfong pages, authenticated apps, and a general brand component kit were not captured. Spoqa Han Sans Neo is loaded on the corporate capture; BabyShark is a separately confirmed official distributed display asset and a single loaded h1 use."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| added | 2026-06-17 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved, quoted from the source footer: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| corporate-home | marketing | https://www.thepinkfongcompany.com/ | 2026-07-13 |
| corporate-company | marketing | https://www.thepinkfongcompany.com/company | 2026-07-13 |
| corporate-business | marketing | https://www.thepinkfongcompany.com/business | 2026-07-13 |
| font-release | brand-assets | https://www.thepinkfongcompany.com/news/pr/207 | 2026-07-13 |

YAML `verification_v2.surfaces` records `kind: marketing` on the three corporate routes and `kind: brand-assets` on the font release. The collector labels its three route sources `product-surface`; the source body treats their meaning as public corporate home, company, and business pages.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.thepinkfongcompany.com/ | 2026-07-13 |
| company-live | product-surface | https://www.thepinkfongcompany.com/company | 2026-07-13 |
| business-live | product-surface | https://www.thepinkfongcompany.com/business | 2026-07-13 |
| identity-official | brand-asset | https://www.thepinkfongcompany.com/company | 2026-07-13 |
| font-release-official | official-doc | https://www.thepinkfongcompany.com/news/pr/207 | 2026-07-13 |
| spoqa-license | license | https://github.com/spoqa/spoqa-han-sans | 2026-07-13 |

### Tier 1

- https://www.thepinkfongcompany.com/
- https://www.thepinkfongcompany.com/company
- https://www.thepinkfongcompany.com/business
- https://www.thepinkfongcompany.com/en/company
- https://www.thepinkfongcompany.com/en/business
- https://www.thepinkfongcompany.com/news/pr/207
- https://github.com/spoqa/spoqa-han-sans

### Tier 2 (no usable record)

- https://getdesign.md/pinkfong (attempted through built-in web search; no usable Pinkfong record returned)
- https://styles.refero.design/?q=pinkfong (attempted through built-in web search; no usable Pinkfong style record returned)

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

### Narrative (not interface tokens)

- Official company page (EN): https://www.thepinkfongcompany.com/en/company
- Official business page (EN): https://www.thepinkfongcompany.com/en/business
- Official identity page / CI/BI downloads: https://www.thepinkfongcompany.com/company
- Official Pinkfong Baby Shark Font release: https://www.thepinkfongcompany.com/news/pr/207
- Spoqa Han Sans Neo source and license: https://github.com/spoqa/spoqa-han-sans

## Claim ledger

Claims use YAML anchors from the source: `home` = corporate-home / home-live / live-inspect / 2026-07-13; `font` = font-release / font-release-official / official-doc / 2026-07-13; `company` = corporate-company / company-live / live-inspect / 2026-07-13; `business` = corporate-business / business-live / live-inspect / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary `#ff66af` | home |
| tokens.colors.canvas `#ffffff` | home |
| tokens.colors.foreground `#000000` | home |
| tokens.colors.muted `#5a5a5a` | home |
| tokens.typography.family.corporate-ui `Spoqa Han Sans Neo` | home |
| tokens.typography.family.brand-display `Pinkfong Baby Shark Font` | font |
| tokens.typography.corporate-body.size / tokens.typography.corporate-body.weight / tokens.typography.corporate-body.lineHeight / tokens.typography.corporate-body.use | home |
| tokens.typography.corporate-heading.size / tokens.typography.corporate-heading.weight / tokens.typography.corporate-heading.lineHeight / tokens.typography.corporate-heading.use | company |
| tokens.typography.brand-display.size / tokens.typography.brand-display.weight / tokens.typography.brand-display.lineHeight / tokens.typography.brand-display.use | business |
| tokens.spacing.xs: 8 / tokens.spacing.control: 20 / tokens.spacing.action: 32 | home |
| tokens.rounded.none: 0 / tokens.rounded.compact: 8 / tokens.rounded.pill: 32 | home |
| tokens.rounded.emphasis: 40 | business |
| tokens.shadow.none `none` | home |
| tokens.shadow.pink-lift `rgba(255, 5, 88, 0.06) 0px 2px 0px 0px` | home |
| tokens.components.corporate-primary-action.type / .bg / .fg / .radius / .padding / .font / .states / .use (`type: button`) | home |
| tokens.components.family-site-pill.type / .bg / .fg / .radius / .padding / .font / .states / .use (`type: button`) | home |
| tokens.components.business-outline-action.type / .bg / .fg / .radius / .padding / .font / .states / .use (`type: button`) | company |
| tokens.components.mobile-menu-dialog.type / .bg / .fg / .padding / .font / .use (`type: dialog`) | home |

## Capture selectors

| Component | Pointer |
|---|---|
| Corporate primary action | `corporate-home` / `home::[data-omd-capture="26"]`; one public corporate CTA, 64px rendered height |
| Family-site pill | `home::[data-omd-capture="31"]`, repeated across the three corporate routes; 35px rendered height |
| Business outline action | `corporate-company` / `surface-2::[data-omd-capture="23"]`; one public business-page action, 60px rendered height |
| Mobile menu dialog | `home::div.DefaultMenu_mobile-menu-modal__SEaJA`; hidden mobile-menu dialog structure captured on all three corporate routes |

## Sibling file

`web/references/pinkfong/.verification.md` exists. It is a separate canonical file, not the migration input. Values it carries that the visible source body does not stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- Method extras: raw collector `artifacts/reference-evidence/pinkfong.json`, captured 2026-07-13T11:24:15.301Z with `playwright_cli`; capture coverage score 92, 27 component variants, four collector state labels, zero interaction kinds, and zero interaction snapshots; this update used the supplied raw artifact only and did not rerun browser capture or use MCP.
- Raw sample extras not in the source body: corporate-company `surface-2::[data-omd-capture="24"]` color `rgba(0, 0, 0, 0.88)`, `border-radius 8px 8px 0px 0px`, padding `12px 16px`, font-size `14px`, line-height `22px`; corporate-business `surface-3::[data-omd-capture="23"]` background `rgb(255, 102, 175)`, color `rgb(255, 255, 255)`, `border-radius 40px`, padding `40px 15px`, font-size `19px`, height `82px`; shared mobile structure color `rgba(0, 0, 0, 0.88)`, `border-radius 0px`, line-height `64px`; rgb() restatements of the harvested hexes.
- Font extras: 15 matching jsDelivr Spoqa source URLs named for Thin, Light, Regular, Medium, and Bold formats; BabyShark source URL `https://www.thepinkfongcompany.com/fonts/pbs-light.otf`; declared `swiper-icons` face with zero visible use.
- Earlier-values note: a previous consumer-site inspection's Pretendard hierarchy, character palettes, D-day badges, navigation, cards, inputs, responsive rules, state treatments, and motion were removed at the smallest unsupported boundary. Pretendard is not retained as a current machine family.
- Domain table extras: "documentation chrome" as a named non-captured domain; collector `product-surface` labels classified in the sibling as public corporate marketing/information.

Hexes, families, radii, paddings, shadows, and the harvested control records that also stand in the source DESIGN.md are corroboration.

## Proof notes

- components_harvested: true
- tokens.source: reconciled
- verification_v2 schema 2; conflicts: []
- Interaction expansions: YAML records `Observed default only; interactionCount is 0.` on corporate-primary-action and family-site-pill. Business-outline-action records collector labels focus, hover, and pressed with `interactionCount is 0, so no state value is specified.` Mobile-menu-dialog has no YAML `states` key.
- Uncaptured hover/pressed/`focus-visible` treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- The source never records `focus-visible` as a captured treatment value; collector focus labels are not `focus-visible` treatment. No `focus-visible` treatment value appears in the portable body.
- Mobile-menu-dialog carries no opened-dialog interactive-kind evidence, so kind and the state-applicability map are omitted for it (C4). YAML `type: dialog` is still recorded.
- Loading, error, and success are closed with a destination-control role reason on the public corporate CTA, the family-site pill, and the business outline action, never for absence of observation (C2).
- `tokens.rounded.emphasis: 40` is a YAML radius step claimed on corporate-business. It is not attached to the harvested business-outline-action radius `32`. The sibling's 40px / 82px / 19px business-page sample is ledger-only.
- Family-site-pill shadow `rgba(0, 0, 0, 0.02) 0px 2px 0px 0px` is a §4 / §6 component-local observation, not a YAML `tokens.shadow` key.
- No published first-party UI specification was found; YAML `ds.type: brand` and `ds.description` say the identity page is not a public product-component specification. The B2a example form is used as-is.
- Official company, business, identity, and font-release pages are narrative / brand-asset sources. They do not by themselves supply selector-backed interface tokens.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Three inspected corporate-home / corporate-company / corporate-business routes as this contract's token surfaces; English company/business pages, identity page, and font release as named sources that do not by themselves supply selector-backed interface tokens |
| Experience Scope `:11` | Corporate shell rather than proof of a universal consumer-product interface; identity-asset versus captured-shell distinction not a general app type scale and not a license to substitute a system font; measured pink action as selector-backed not a blanket consumer/app/franchise claim; official distributed display family kept off the corporate UI family; machine tokens retained only where 2026-07-13 evidence supplies a current selector and surface |
| Experience Scope `:13` | Company-and-font narrative, including its closing sentence that the font release is not evidence that every corporate or consumer control uses the font, as brand context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three recorded controls/surfaces as primary tasks; not from a persona section |
| Audience `:28` | Dropping any individual persona; carrying no name, age, city, motivation, or affiliation classification; keeping **kids and families worldwide** in the source's wording |
| Distinctive traits `:32` | Classifying the list as a restatement of source Key Characteristics, and the groupings inside them, including the selector-backed-not-blanket reading of the measured pink action and the refusal to promote the official distributed display family to the corporate UI family |
| Principles `:42` | Three numbered stems plus every UI implication; stems rest on official mission / CI/BI distribution / font release, implications as the source's reconstruction |
| Application rules `:50` | Five Do rules plus three Agent Prompt Guide unique constraints moved beside them, and the reasons attached |
| Avoid `:63` | Five Don'ts plus the Agent Prompt Guide unique prohibition against generating a consumer site, child-facing app, purchase flow, status system, or generic character-card library |
| Semantic color `:78` | Role names from the source's labels; pairing each hex to its token-set path; `#08c7ff` kept inside business-outline-action rather than elevated; family-site-pill `#8c8c8c` kept off `tokens.colors.muted`; identity-page BI downloads as asset availability rather than as a UI palette |
| Spacing `:89` | YAML unitless steps off prose px; `tokens.spacing.xs: 8` off `tokens.rounded.compact: 8`; `tokens.spacing.action: 32` off `tokens.rounded.pill: 32` and off component radius and padding writings; measured control padding kept control-local rather than a generic card or page-spacing rule |
| Shape `:93` | YAML `0` / `8` / `32` / `40` off prose px; `compact: 8` off spacing `xs: 8`; `pill: 32` off spacing `action: 32` and off harvested 32px radii; `emphasis: 40` off harvested business-outline-action radius `32` |
| Elevation `:97` | `tokens.shadow.pink-lift` on its token path and on the corporate primary action; family-site-pill shadow as that component's local observation rather than as a second named shadow token; `tokens.shadow.none` off those two local shadows |
| Motion B3 `:103` | Five-kind promotion gate; refusal of a partial confirmation; a match against an official framework or vendor document is not that gate |
| Font evidence `:111` | Evidence-class sorting; resolution in each cell |
| Family `:128` | Spoqa Han Sans Neo as the verified corporate-public text family only; computed `BabyShark` unmerged from official Pinkfong Baby Shark Font; refusal to present the system stack as either named family |
| Type roles `:132` | YAML numbers kept beside §3 px; YAML `use` verbatim; YAML `16` / `1.5715` off `16px` / `25.144px`; YAML `38` / `1.5715` off `38px` / `59.717px`; YAML `48` / `1` off `48px`; corporate-body `16` off `tokens.spacing.xs` |
| Assets `:149` | Google s2 favicon as catalog identity pointer rather than a Pinkfong-hosted brand file; CI/BI downloads as identity assets rather than as a UI palette or public component library |
| Capture record `:162` | Applicability-by-meaning note; collector-label versus `focus-visible` evidence-class split; interactive-kind and applicability verdicts and the reason for either; omit-kind for the mobile-menu dialog; YAML primitive type attached only when recorded; not a complete state-coverage claim |
| Layout `:269` | Desktop corporate capture rather than a cross-viewport layout specification; 1440×900 as the collector viewport the source supplied rather than as a layout token; measured control padding kept control-local rather than a generic card or page-spacing rule |
| Content voice `:276` | Optimistic, clear corporate voice reading; Principles UI implication restated as the same implication rather than as a new microcopy sample; **더핑크퐁컴퍼니** beside The Pinkfong Company rather than as a replacement |
| Named gaps `:310` | List as unnamed values already named by the source, rather than as coverage of domains the source never named |

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 | The source added no fictional personas and supplied public audience wording only. No name, age, city, motivation, or affiliation classification is promoted or re-hosted (D2, D2a). Audience in the portable body keeps the source's own group wording **kids and families worldwide**. Business contexts the source enumerates (content, partnerships, merchandise, live events, and mobile apps) stay as offering categories in Scope and Content, not as Audience groups. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Brand constraints already live in Experience, Foundations, Typography, and Components. Unique constraints moved (A3): load Spoqa Han Sans Neo only when the verified source can be loaded; use Pinkfong Baby Shark Font as an official display asset only within its stated distribution boundary; use the specific corporate CTA, family-site pill, or business outline action only with its recorded route and default-state limitation; do not generate a Pinkfong consumer site, child-facing app, purchase flow, status system, or generic character-card library from this reference. |
| Source §15 motion tokens | The source records no duration, easing curve, reduced-motion rule, or captured animated state. Nothing to promote. B3 five-kind gate stays in portable Motion. No unattributed cubic-bezier was present to drop. |
| Sibling-only computed values and published strings listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
