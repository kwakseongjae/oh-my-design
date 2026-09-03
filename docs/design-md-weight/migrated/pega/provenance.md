# Pega UX Design System provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/pega/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | pega |
| name | Pega UX Design System |
| country | US |
| category | saas |
| homepage | `https://design.pega.com/` |
| primary_color | `#1a3a5c` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=pega.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | Pega UX Design System |
| ds.url | `https://design.pega.com/` |
| ds.type | system |
| ds.description | Pega's public, prescribed system for enterprise application workflows. |

The homepage URL is dual-destination: identity metadata here, and the inspected public UX System home in `DESIGN.md` Scope. The primary color is dual: identity here, and Foundations Header / catalog `primary_color` in `DESIGN.md`. The favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. `ds.type: system` / `ds.name` / `ds.url` / `ds.description` are ledger fields (A1c). The published system name is also in the portable Scope.

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 lookup. That is an identity pointer, not a Pega-hosted brand file.

YAML token note, kept as written: Only the supplied public Pega UX Design System surfaces are tokenized; corporate and authenticated-product UI are outside this evidence bundle.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | design-system | `https://design.pega.com/` | 2026-07-13 |
| surface-2 | design-system | `https://design.pega.com/` | 2026-07-13 |
| surface-3 | design-system | `https://design.pega.com/components/` | 2026-07-13 |

| id | kind | url | captured |
|---|---|---|---|
| pega-ui-home | product-surface | `https://design.pega.com/` | 2026-07-13 |
| pega-components | official-doc | `https://design.pega.com/components/` | 2026-07-13 |
| pega-design-resources | brand-asset | `https://design.pega.com/resources/design-resources/` | 2026-07-13 |
| roboto-flex-license | license | `https://github.com/googlefonts/roboto-flex` | 2026-07-13 |

### Tier 1

- `https://design.pega.com/` (supplied public Pega UX System computed-style and FontFaceSet evidence)
- `https://design.pega.com/components/` (supplied public components-route evidence)
- `https://design.pega.com/resources/design-resources/` (official design assets and Roboto Flex confirmation)
- `https://github.com/googlefonts/roboto-flex` (Roboto Flex licence context)

### Tier 2 (no usable record)

- `https://getdesign.md/pega` (attempted through built-in web open; safe-open error, no usable record)
- `https://styles.refero.design/?q=pega` (attempted through built-in web open and domain search; safe-open error and no result record)

## Claim ledger

Claims use YAML anchors from the source. `home` = home / pega-ui-home / computed-style / 2026-07-13; `surface-3` = surface-3 / pega-components / computed-style / 2026-07-13. Family uses computed-style-and-FontFaceSet.

| claim | surface |
|---|---|
| tokens.colors.header | home |
| tokens.colors.action | home |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.accent | home |
| tokens.colors.accent-weak | home |
| tokens.typography.family.ui | home |
| tokens.typography.heading.size / weight / lineHeight | surface-3 |
| tokens.typography.body.size / weight / lineHeight | home |
| tokens.spacing.version-button-y / version-button-x | home |
| tokens.spacing.search-input-x | home |
| tokens.spacing.dark-action-y / dark-action-x | home |
| tokens.rounded.version-button / dark-action / search-input | home |
| tokens.components.dark-link-action.* | home |
| tokens.components.header-search.* | home |
| tokens.components.menu-row.* | home |

## Capture selectors

The source body does not publish CSS selectors. The sibling verification file records these as raw-sample pointers; they are transcribed here as sibling evidence and are not promoted into the portable body.

| Component | Pointer (sibling) |
|---|---|
| Public dark link action | `home::[data-omd-capture="26"]`, class `.link-as-button` |
| Header search input | `home::[data-omd-capture="7"]`, class `.search-field` |
| Menu row | `home::li[role="menuitem"]` |
| Version control (padding/radius keys only; not a token-set component) | `home::[data-omd-capture="1"]`, class `.version-btn` |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction expansions: 0; only default component observations promoted
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history, getting-started, forms guidance, and the 2021 brand account are narrative or system-purpose context, not token sources
- `ds.type: system` is a ledger field (A1c)
- Same hex, different roles, as the portable body actually uses them (not an extra B2a row). `#ffffff`: `tokens.colors.canvas` page background and text-on-dark pairing; header utility text on `#1a3a5c`; `tokens.components.dark-link-action.fg` action label; `tokens.components.dark-link-action.border` (`1px solid #ffffff`); `tokens.components.header-search.fg` search-field text. `#03102e` is the action fill and the dark-link-action background (same role). `#050505` is the foreground token and the menu-row text (same role).

## Sibling

The sibling `web/references/pega/.verification.md` exists. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

Its full record is transcribed below as sibling evidence and is **not** promoted into `DESIGN.md`.

Sibling-only values (source body does not establish them as portable facts):

- coverage score `65`; `surfaceCount: 3`; `componentTypes: 4`; `componentVariants: 16`; `observedStates: 0`
- raw evidence path `artifacts/reference-evidence/pega.json`
- `home::#masthead` height `60px` and shadow `0px 2px 8px 0px`
- `.version-btn` computed type `17.6px / 700`
- `surface-3::h1` color `rgb(15, 37, 64)`
- `home::[data-omd-capture="9"]` padding `6.4px 20px` / `16px / 700` on the public-home accent sample
- narrative URLs named only in the sibling: `https://www.pega.com/about`, `https://www.pega.com/de/insights/articles/go-behind-scenes-how-pega-brand-evolving`, `https://design.pega.com/about/get-started/`, `https://design.pega.com/patterns/forms/`

Those sibling-only strings stay on this page. Mention here is disposition of a sibling record, not portable use (E2d).

Values the sibling corroborates that the source body already records: `#1a3a5c` masthead, `#03102e` `link-as-button`, header-search `rgba(255, 255, 255, 0.14)` / `0px` / `0px 12px` / `32px`, menu-row `#050505` / `42px`, heading `38.4px / 500 / 48px`, body `16px / 400 / 24.64px`, Roboto Flex 184 uses, `interactionCount: 0`, SIL Open Font License 1.1, declared-only DM Sans / JetBrains Mono / Source Serif 4.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompt | Deleted. Tool-facing recreate-the-direction prompt. Values it restated are already in Experience / Foundations / Components. Unique constraints land on Application rules and Avoid. |
| §13 named personas | Not present in the source. The source states that this reference does not invent named personas and labels official-page groups as stakeholder groups. Those groups land in Audience in the source’s own wording. No name, age, city, motivation, or affiliation classification is invented or re-hosted here (D2, D2a). |
| §15 unattributed curves | Not present in the source. No curve value to delete. Duration and signature-motion fields are also unnamed. B3 promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Deep-blue utility header / white canvas / Roboto Flex — Scope + Semantic color + Family. Low-shadow separation — Elevation. Clear labels — Application rules + Content. One highly legible dark rounded next-step action — dark-link-action 59px / 32px / `#03102e`. Let the workflow and business information lead — Application rules §9 sentence. Do not present this public documentation geometry as verified Pega product UI — Avoid §9 prohibition. Leave interactive states and motion unspecified unless new product-surface evidence records them — Capture record + Motion + Avoid.

## Derived editorial inventory

Portable `DESIGN.md` carries 24 complete B2a qualifications. This table is 24 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Inspected public UX System URLs as this contract’s token surfaces; design-resources, getting-started material, forms guidance, and the 2021 brand account as named sources that do not supply computed tokens; values stay attached; YAML token note kept as the facts it names |
| Experience Scope ¶2 `:11` | Calm but operationally direct document experience; deliberately prescribed rather than a loose sticker sheet |
| Experience Scope ¶3 `:13` | Founding / Constellation / 2021 four-color/four-shape narrative classified as context that does not by itself supply interface tokens; “long horizon helps explain” causal link from that history to prescribed patterns |
| Primary tasks `:19` | Selecting the three surface-or-control outcomes as primary tasks; not from the stakeholder-group section |
| Audience `:28` | Reading the source-named official-page groups as audience in the source’s own wording; not lifting Cases or Assignments into Primary tasks; no name, age, city, motivation, or affiliation classification |
| Distinctive traits `:32` | Groupings and readings of the recorded-value list |
| Principles `:43` | Four numbered items as derived editorial implementation inference; stems on official public guidance; UI implications as this reference’s application of that guidance, including the published Pega UX Design System documentation |
| Application rules `:52` | Four Do rules and the reasons attached to them |
| Application rules §9 sentence `:59` | Keeping the Agent Prompt Guide unique constraints on this page rather than as a tool prompt |
| Avoid `:63` | Four Don’t prohibitions and the reasons inside them |
| Avoid §9 prohibition `:70` | Keeping the Agent Prompt Guide unique prohibitions here rather than as a tool prompt |
| Semantic color `:80` | Role names from the source’s labels; canvas `#ffffff` off dark-link-action fg `#ffffff` and off header utility text `#ffffff`; action `#03102e` off header `#1a3a5c`; accent pair on the public-home link sample rather than on the dark `link-as-button`; documentation-surface record rather than corporate campaign or authenticated-product semantic colors |
| Spacing `:101` | Five unitless keys kept; `12` / `16` / `32` unmerged from matching type sizes, paddings, radii, and heights |
| Shape `:111` | Three rounded keys kept; `version-button: 2` as a YAML rounded key rather than a declared component; dark-action `32` off spacing `32` and search height `32px` |
| Elevation `:115` | Hierarchy-from-header-contrast-padding-silhouette reading rather than a reusable shadow ladder |
| Motion `:119` | Five-kind promotion gate; refusal of a partial confirmation, including a match against the published Pega UX Design System documentation; source `interactionCount: 0` kept |
| Font evidence `:127` | Evidence-class rows as the source’s resolution table; UX System ’25 naming as asset confirmation rather than a licence grant; declared-only faces omitted; `-apple-system` and Arial as runtime fallbacks; OFL as typeface context |
| Family `:141` | Roboto Flex as UI-family token on the supplied surfaces; canonical only because computed visible use, loaded FontFace evidence, and official design-kit naming agree; system-font substitute refused |
| Type roles `:145` | YAML unitless sizes kept beside §3 px writings; heading `surface-3` off home body; body `16` off spacing `16` and dark-action font `16px`; header-search `14px` kept on that component rather than as a YAML typography role |
| Assets `:160` | Google s2 favicon as catalog identity pointer; design-resources links and OFL as asset-association and typeface-licence context rather than a Pega project licence grant |
| Capture / applicability `:169` | Interactive-kind and applicability verdicts; Primitive type attached only when the source YAML records that type; no §4-only component outside the three token-set records; not a complete state-coverage claim |
| Layout `:258` | Source layout sentences rather than a published product grid; 1440×900 as the supplied capture size rather than as a breakpoint system |
| Content `:277` | Official system language as practical and outcome-oriented public documentation and positioning guidance, not a complete error-message or transactional-copy specification |
| Named gaps `:311` | List as a catalog of source-unnamed values, not coverage of domains the source never named |
