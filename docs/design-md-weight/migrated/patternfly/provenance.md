# PatternFly provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/patternfly/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | patternfly |
| name | PatternFly |
| country | US |
| category | developer-tools |
| homepage | https://www.patternfly.org/ |
| primary_color | `#0066cc` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=patternfly.org&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | PatternFly |
| ds.url | https://www.patternfly.org/ |
| ds.type | system |
| ds.description | Red Hat-sponsored open-source design system for consistent, accessible enterprise products. |

Catalog logo type `favicon` / Google s2 URL is identity-only in this ledger. Portable Typography & Assets holds a URL-free Google-favicon capture-method / not-a-portable-mark sentence, not the URL string (E2a: not dual-destination for the URL). Catalog `primary_color` `#0066cc` is dual identity metadata + portable Scope + Distinctive + Semantic color (E2a). Homepage exact `https://www.patternfly.org/` is dual-destination: Experience Scope + this identity/surfaces/sources/Tier 1 ledger (E2a). Portable Primary tasks names the PatternFly public home without repeating that URL. `ds.name` / `ds.url` / `ds.type: system` / `ds.description` are dual: this identity ledger + portable Experience Scope (A1c, E2a).

Token note from source: `tokens.source: reconciled`; extracted `2026-07-13`. YAML field is this ledger. Portable Scope carries the capture-bound Default-style public-documentation wording, not the YAML field name.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-14 |
| verification_v2.checked | 2026-07-14 |
| surfaces inspected | 2026-07-13 (home, button-docs, color-docs); 2026-07-14 (typography-docs, about-docs) |
| sources captured | 2026-07-13 (home-live, button-live, color-live); 2026-07-14 (about-official, typography-official, theming-official, releases-official) |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://www.patternfly.org/ | 2026-07-13 |
| button-docs | documentation | https://www.patternfly.org/components/button/ | 2026-07-13 |
| color-docs | documentation | https://www.patternfly.org/design-foundations/colors/ | 2026-07-13 |
| typography-docs | documentation | https://www.patternfly.org/foundations-and-styles/typography/ | 2026-07-14 |
| about-docs | documentation | https://www.patternfly.org/get-started/about-patternfly/ | 2026-07-14 |

Home URL `https://www.patternfly.org/` is dual-destination with portable Experience Scope, not Primary tasks (Primary tasks names the PatternFly public home without repeating that URL). Button-docs and color-docs URLs are dual Scope + Primary tasks 26–27 (E2a). Surface kinds `marketing` / `documentation` are dual: this ledger + portable Scope verification-kind labels (E2a; not ledger-only). typography-docs and about-docs are official-doc inspect surfaces in YAML; portable Font evidence and Scope cite those URLs as official-doc context.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.patternfly.org/ | 2026-07-13 |
| button-live | product-surface | https://www.patternfly.org/components/button/ | 2026-07-13 |
| color-live | product-surface | https://www.patternfly.org/design-foundations/colors/ | 2026-07-13 |
| about-official | official-doc | https://www.patternfly.org/get-started/about-patternfly/ | 2026-07-14 |
| typography-official | official-doc | https://www.patternfly.org/foundations-and-styles/typography/ | 2026-07-14 |
| theming-official | official-doc | https://staging.patternfly.org/foundations-and-styles/theming/ | 2026-07-14 |
| releases-official | official-doc | https://www.patternfly.org/get-started/release-highlights | 2026-07-14 |

Additional first-party URL named in the source body (not YAML `verification_v2.sources`):

- Components overview: https://www.patternfly.org/components/overview/

### Tier 1

- https://www.patternfly.org/
- https://www.patternfly.org/components/button/
- https://www.patternfly.org/design-foundations/colors/
- https://www.patternfly.org/get-started/about-patternfly/
- https://www.patternfly.org/foundations-and-styles/typography/
- https://staging.patternfly.org/foundations-and-styles/theming/
- https://www.patternfly.org/get-started/release-highlights

### Tier 2 (no usable record)

- https://getdesign.md/patternfly (attempted; no usable record returned)
- https://styles.refero.design/?q=PatternFly (attempted; no usable record returned)

### Narrative / license (not interface tokens)

- About PatternFly: https://www.patternfly.org/get-started/about-patternfly/
- Theming: https://staging.patternfly.org/foundations-and-styles/theming/
- Release highlights: https://www.patternfly.org/get-started/release-highlights
- Typography: https://www.patternfly.org/foundations-and-styles/typography/
- Components overview: https://www.patternfly.org/components/overview/

The source does not name a license identifier. The typography-page download destination returned a Red Hat contact form. None is invented here.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.foreground | home |
| tokens.colors.body | home |
| tokens.colors.canvas | home |
| tokens.typography.family.ui | home |
| tokens.typography.family.display | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.display-title.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / md / lg | home |
| tokens.rounded.none / control / card | home |
| tokens.components.primary-action.type / bg / fg / radius / padding / font / states / use | home |
| tokens.components.featured-card.type / bg / fg / radius / font / use | home |

## Capture selectors

| Component | Pointer |
|---|---|
| Primary action | `home::[data-omd-capture="2"]`, an anchor with `pf-v6-c-button pf-m-primary` on the public home |
| Featured card | `home::#featured-blog-post-1`, a selector-backed `pf-v6-c-card pf-m-clickable` on the public home |

Those two pointers are dual-destination with portable Components Use lines (E2a).

## Sibling file

`web/references/patternfly/.verification.md` is a verification sibling, not a second token sheet. Mention (disposition) is not use (re-hosting). This section names sibling-only collector samples and coverage figures as ledger context. It does not promote those samples as portable component tokens.

Sibling-only collector samples named in that file and not promoted in the source DESIGN.md component set:

- `home::[data-omd-capture="10"]` — color rgb(77, 77, 77); border-radius 6px; padding 8px 16px; font-size 14px; line-height 21px
- `surface-2::[data-omd-capture="45"]` — color rgb(0, 102, 204); border-radius 6px; padding 8px; height 37px; font-size 14px
- `surface-2::[data-omd-capture="43"]` — background rgb(177, 56, 11); color rgb(255, 255, 255); border-radius 999px; padding 8px 24px; height 37px (button-docs danger example; source §2 keeps danger/warning/plain/link/secondary as documentation examples)
- `surface-3::[data-omd-capture="32"]` — color rgb(31, 31, 31); background transparent; border-radius 6px; padding 8px; font-size 14px

Sibling coverage figures: score 66; 27 component variants; three component types; zero observed states; zero interaction kinds; `interactionCount: 0`. Release-highlights sibling note also names navigation/AI changes as narrative/current-evolution context. Sibling brand-issued link text “Download PatternFly’s fonts from GitHub” is dual with portable Font evidence License boundary (A5a, E2a).

## Proof notes

- verification_v2 schema 2; conflicts: []
- tokens.source: `reconciled`; `components_harvested: true`
- `ds.type: system` preserved (A1c). `ds.name` PatternFly, `ds.url` `https://www.patternfly.org/`, `ds.description` Red Hat-sponsored open-source design system for consistent, accessible enterprise products.
- Catalog logo Google s2 favicon URL is identity-only. Portable Assets is URL-free capture-method / not-promoting-the-lookup-as-a-portable-mark-file (E2a: URL not dual).
- Homepage exact `https://www.patternfly.org/` is dual-destination: Scope + this identity/surfaces/sources/Tier 1 ledger (E2a). Portable Primary tasks names the PatternFly public home without repeating that URL.
- `primary_color` `#0066cc` is dual-destination: identity + portable Scope / Distinctive / Semantic (E2a). It is also the primary-action fill; that component fill is the same hex on a component path, not a second palette key.
- Same-hex role splits on the portable body (not a second palette key): `#ffffff` is canvas (`tokens.colors.canvas`) and primary-action text (`tokens.components.primary-action.fg`) and featured-card background (`tokens.components.featured-card.bg`); `#151515` is foreground (`tokens.colors.foreground`) and featured-card text (`tokens.components.featured-card.fg`); `#0066cc` is catalog/`tokens.colors.primary` and primary-action fill. `#4d4d4d` is body ink only.
- YAML `tokens.source: reconciled` as a field remains this ledger (A1c).
- `ds.*` fields are dual-destination: this identity ledger + portable Experience Scope (E2a).
- Surface kinds marketing / documentation are dual this ledger + portable Scope (E2a).
- Uncaptured hover/focus/pressed/disabled/error/loading/empty/success/skeleton treatments are omitted. They are not `not-applicable` solely for that reason. Applicability follows control meaning. State coverage is not claimed complete (C3). Generic `focus` is not `focus-visible` treatment evidence (B1).
- Source §13 names workflow archetypes derived from the official audience description, not research-validated people. Portable Audience keeps only official About wordings: designers and developers; users and contributors beyond Red Hat. Role labels, motivations, and affiliation classifications from that section are not copied here (D2, D2a). Primary tasks come from the three captured public routes, not §13.
- Worker F1 is a self-scan, not a completeness proof (E2c).

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:13` | Three captured PatternFly.org routes as this contract's product-surface scope; an individual Red Hat product and an authenticated operational console kept outside that same-surface set; Default-style public-documentation values unmerged from Project Felt's red accents, pill treatment, glass layer, and unobserved themes |
| Experience Scope `:15` | Characterizations (less a campaign aesthetic than a deliberately practical interface language; controls that make dense software easier to scan); hex values, typefaces, and spacing clusters beside them are recorded |
| Experience Scope `:17` | About / Theming / Release-highlights narrative as brand context that does not by itself supply interface tokens; Red Hat relationship as the reason the system reads as shared infrastructure; current story as controlled evolution rather than a replacement of the system's enterprise purpose |
| Primary tasks `:23` | Selecting the three primary tasks from captured PatternFly.org surfaces; not from the source's persona section |
| Audience `:32` | Dropping the persona section rather than promoting it; carrying no affiliation classification or motivation; using only the source wordings designers and developers, and users and contributors beyond Red Hat |
| Distinctive traits `:36` | Classifying the list as a restatement of measured values, and the groupings inside it |
| Principles `:46` | Four items; numbered stems resting on first-party About, Theming, and contribution sentences; every *UI implication* as the source's own editorial reading, not taken from the published PatternFly documentation as a token sheet for uncaptured Red Hat product surfaces |
| Application rules `:59` | Four Do rules and the reasons attached to them |
| Application rules `:66` | Keeping the Agent Prompt Guide unique constraint on this page rather than as a tool prompt |
| Avoid `:70` | Four Don'ts and the reasons inside them |
| Semantic color `:83` | Pairing each hex to its token-set path; `#0066cc` as filled primary-action background and repeated public link/control ink rather than as proof of a universal Red Hat product CTA; danger, warning, plain, link, and secondary examples as documentation examples rather than reusable component tokens |
| Spacing `:96` | Public-surface rhythm rather than a complete grid or breakpoint contract; writings of `16` kept on their own records |
| Shape `:106` | Three YAML rounded keys unmerged from the primary-action `999` pill; `6px` as a control radius rather than a spacing step |
| Elevation `:110` | `none` only for those observed representatives; feedback-button shadow not collapsed into a shared elevation scale |
| Motion `:114` | Five-kind promotion gate; PatternFly documentation and release notes are not that gate |
| Font evidence `:122` | Evidence-class sorting; PatternFly-hosted WOFF2 as availability rather than a substitute for the loaded family; Red Hat Mono / Font Awesome 5 Free / pf-v6-pficon as declared-only and not UI-family tokens; no license statement asserted from the contact-form retrieval |
| Family `:138` | Red Hat Text and Red Hat Display canonical here only because official product-use and live computed use agree; system-font substitute and declared-only promotion refused |
| Type roles `:142` | YAML unitless line-height, observed px hierarchy, and official body `1.5` unmerged; body `14` as a type size rather than a spacing step |
| Assets `:159` | Google favicon as a catalog identity pointer rather than as a PatternFly-hosted mark file |
| Capture record `:166` | Preservation required while the catalog graph is not adopted; §14 handling-boundary rows as capture-boundary notes rather than as a published PatternFly state specification; applicability by control meaning; YAML `Primitive type` only when the token set records that type; generic `Focus` capture is not a `focus-visible` treatment; absence of a capture is not a `not-applicable` reason; not a complete state-coverage claim |
| Public-home action `:217` | Role-based applicability verdicts and reasons for the primary action |
| Featured card `:245` | Role-based applicability verdicts and reasons for the featured card |
| Layout `:252` | 1440×900 as the supplied capture size rather than as a breakpoint system; control measurements as desktop-capture rather than as a cross-viewport specification |
| Content `:257` | Naming official voice practical, inclusive, and collaborative; table and paraphrases as the source's documentation-voice application rather than as a complete product-microcopy guide |
| Named gaps `:301` | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 25 complete B2a qualifications. This table is 25 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation."

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas, 3 slots (role labels Enterprise front-end developer, Product designer, Open-source contributor; motivations not re-hosted; no name, age, or city existed) | Deleted. Not promoted as individuals, tasks, or Audience groups. Affiliation classification and motivation are not re-hosted. Portable Audience uses only source wordings the About page already uses. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Unique constraint (measured pill primary action or 16px featured card only where public-home provenance is appropriate; 4/8/16/24px rhythm) already lives in Experience Application rules. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. The no-token constraint and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed samples listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
