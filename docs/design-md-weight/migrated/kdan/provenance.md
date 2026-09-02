# Kdan Mobile provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kdan/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kdan |
| name | Kdan Mobile |
| country | TW |
| category | productivity |
| homepage | `https://www.kdan.com` |
| primary_color | `#00DC87` |
| logo.type | favicon |
| logo.slug | `https://www.kdan.com/apple-touch-icon-152x152.png` |
| omd format (source) | 0.1 |
| verified | 2026-06-01 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |
| ds.name | kdan-ui |
| ds.url | `https://github.com/kdan-mobile-software-ltd/kdan-ui-revamp` |
| ds.type | system |
| ds.description | Kdan's open-source UI token library (kdanGreen brand token + neutral scale + semantic colors). |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog identity `primary_color` `#00DC87` is dual: identity here, and `tokens.colors.brand` in the portable Semantic color section. The favicon URL is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a hosted apple-touch-icon URL on `www.kdan.com`, kept as the catalog identity pointer and classified in the portable document as that identity pointer.

**ds.type: system (A1c).** The source records an open-source UI token library. The portable B2a close uses the published-spec form `not Kdan-authored or taken from a separately published UI specification, including the published kdan-ui-revamp token library`. The source's own description that kdan-ui is a token library (kdanGreen + neutrals + semantic colors) is kept as a source fact in `DESIGN.md` Scope.

Token note from source: brand = kdanGreen `#00dc87` (catalog primary); structural surface + primary action = deep teal-black `#002d37`; `#caff00` = single loud hero accent.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-01 |
| tokens.extracted | 2026-06-09 |
| surfaces inspected | 2026-06-01 |
| sources captured | 2026-06-01 |

The source footer records the verification verbatim as **Verified:** 2026-06-01. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| homepage | live-homepage | `https://www.kdan.com` | 2026-06-01 |
| token-library | official-doc | `https://github.com/kdan-mobile-software-ltd/kdan-ui-revamp` | 2026-06-01 |
| brand-org | official-doc | `https://github.com/kdan-mobile-software-ltd` | 2026-06-01 |

Live button geometry, Clear Sans, hero 56px/700, and 16px body resolve to the homepage / live-inspect / 2026-06-01 anchor. kdanGreen, gray100–gray1000, hyperlink, error, and hover-layer resolve to the token-library anchor. The brand-org URL is a named source; it is not a token-claim surface.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| homepage-live | product-surface | `https://www.kdan.com` | 2026-06-01 |
| token-library-doc | official-doc | `https://github.com/kdan-mobile-software-ltd/kdan-ui-revamp` | 2026-06-01 |
| brand-org-doc | official-doc | `https://github.com/kdan-mobile-software-ltd` | 2026-06-01 |

### Tier 1

- https://www.kdan.com (live homepage — buttons, hero CTA, Clear Sans, hero 56px/700)
- https://github.com/kdan-mobile-software-ltd (brand-owned org)
- https://github.com/kdan-mobile-software-ltd/kdan-ui-revamp (open-source kdan-ui token library — kdanGreen + neutrals + semantic colors)

### Tier 2 (no usable record)

- getdesign.md/kdan — NOT LISTED
- refero — not listed

The footer note that brand token kdanGreen `#00DC87` is the catalog primary, `#002D37` is the structural surface, and `#CAFF00` the loud accent is the same note as the YAML `tokens.note`.

## Sibling handling (`web/references/kdan/.verification.md`)

The sibling exists — confirmed with `find web/references/kdan -type f`. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Method: playwright getComputedStyle (live DOM) + raw source-file fetch
- Inspected: 2026-06-01
- kdan-ui-revamp token: kdanGreen `#00DC87`; hyperlink `#007AFF`; error `#F25858`; gray1000 `#191919`; gray100 `#FAFAFA`; hoverLayer `rgba(0,0,0,0.2)`
- live kdan.com: solid primary button bg rgb(0,45,55)=`#002D37`, text `#FFFFFF`, 1.5px border, radius 4px, height 38px, font 16px/500
- live kdan.com: lime hero CTA bg rgb(202,255,0)=`#CAFF00`, black text `#000000`, radius 4px, height 53px, font 22px/500
- live kdan.com: outline button bg transparent, text `#002D37`, 1.5px solid `#002D37` border, radius 4px, height 38px
- live kdan.com: disabled button bg `#AFAFAF`, text `#4B4B4B`, radius 4px
- live kdan.com: typeface Clear Sans; body 16px; hero heading 56px/700
- country TW; Tainan, Taiwan on the official homepage line

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- `playwright getComputedStyle`
- rgb(0,45,55)
- rgb(202,255,0)
- raw source-file fetch

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): `#00DC87` / `#002D37` / `#CAFF00` / `#007AFF` / `#F25858` / `#191919` / `#FAFAFA` / `rgba(0,0,0,0.2)` / `#FFFFFF` / `#000000` / `#AFAFAF` / `#4B4B4B` / 1.5px / 4px / 38px / 53px / 16px / 22px / 56px/700 / Clear Sans / Tainan, Taiwan.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary | homepage (kdan.com) |
| tokens.colors.brand | token-library (kdan-ui-revamp) |
| tokens.colors.accent-lime | homepage (kdan.com) |
| tokens.colors.canvas / on-primary | both keys; `#ffffff` |
| tokens.colors.foreground / body | both keys; `#191919`; token-library |
| tokens.colors.muted | token-library neutral; also disabled text |
| tokens.colors.surface | token-library gray100 |
| tokens.colors.link / error | token-library |
| tokens.colors.disabled | homepage disabled pairing |
| tokens.typography.family.sans | homepage |
| tokens.typography.family.mono | declared-only |
| tokens.typography.hero / hero-cta / body / button | homepage |
| tokens.spacing.xs / sm / md / base / lg / xl | token set; no per-step live claim beyond the scale |
| tokens.rounded.sm / md / lg / full | token set; component `4px` is control-local |
| tokens.shadow.hover | token-library hoverLayer |
| tokens.components.button-primary / button-outline / button-hero / button-disabled | homepage |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 Personas — 3 role-archetype entries (role label, served-by design note) | Deleted. No name, motivation, or affiliation classification is re-hosted here (D2, D2a). The two source-named groups from §1 / §10 — the signer and the integrating engineer — survive in `DESIGN.md` Audience because the source names them outside the persona section. |
| §9 Agent Prompt Guide — tool-facing construction prompt | Deleted. No receiving slot. Every value the prompt names (teal-black `#002D37`, white `#FFFFFF`, gray100 `#FAFAFA`, kdanGreen `#00DC87`, lime `#CAFF00`, 53px / 22px/500, 38px / 16px/500 / 4px / 1.5px, `#AFAFAF` / `#4B4B4B`, Clear Sans, 56px/700, `rgba(0,0,0,0.2)`, `#007AFF`, `#F25858`) is already in Foundations / Typography / Components / Experience. |
| Unsourced motion curve | None in the source. No curve was deleted. Durations are unnamed. B3 promotion gate is in `DESIGN.md` Motion. |
| Sibling-only collector method (`playwright getComputedStyle`, rgb() spellings) | Mentioned in the sibling section above. Not promoted into `DESIGN.md`. |
| YAML `omd`, `verified`, `tokens.source` / `extracted`, `ds.*`, `components_harvested` | Kept in this ledger (A1c). Not copied into portable top matter. |

## Claim ledger

Claims use the YAML anchors from the source: homepage / homepage-live / live-inspect / 2026-06-01 for live geometry; token-library / kdan-ui-revamp for library tokens.

| claim | surface |
|---|---|
| tokens.colors.primary / accent-lime | homepage |
| tokens.colors.brand / foreground / body / surface / link / error | token-library |
| tokens.colors.canvas / on-primary | shared hex; white on teal-black is homepage text |
| tokens.colors.disabled / muted | homepage disabled pairing; muted also a library neutral |
| tokens.typography.family.sans | homepage |
| tokens.typography.family.mono | declared-only |
| tokens.typography.hero / hero-cta / body / button | homepage |
| tokens.spacing.xs / sm / md / base / lg / xl | token set |
| tokens.rounded.sm / md / lg / full | token set |
| tokens.shadow.hover | token-library |
| tokens.components.button-primary.* | homepage |
| tokens.components.button-outline.* | homepage |
| tokens.components.button-hero.* | homepage |
| tokens.components.button-disabled.* | homepage |

## Derived-editorial inventory (B2a, 1:1 with portable complete-form closes)

Each row names one portable sentence that carries the complete close `derived editorial implementation inference` + `not Kdan-authored or taken from a separately published UI specification, including the published kdan-ui-revamp token library`. Count must match `DESIGN.md`.

| # | Portable site | Judgment named |
|---|---|---|
| 1 | Scope ¶1 | kdan.com as live token surface; kdan-ui-revamp as named token-library source rather than as that live surface; values stay attached to the surface or evidence class that established them |
| 2 | Scope ¶2 | teal-black as ink on a signed page; lime as a reserved pop; corners never soft or playful; energetic document software that respects both the signer and the integrating engineer |
| 3 | Scope narrative | classifying the §11 paragraph — including Tainan, Taiwan, PDF productivity, e-signature, document SDKs, the dual story, and the closing charged-with-momentum sentence — as narrative context that does not by itself supply interface tokens |
| 4 | Primary tasks | selecting the three surface-or-control outcomes as primary tasks; classifying them as surface-or-control outcomes rather than fictional biographies; recording that they do not come from the source's persona section |
| 5 | Audience | refusing to promote individual personas; reading the two source-named groups as this product's audience |
| 6 | Distinctive traits | classifying the list as a restatement of the source's recorded characteristics; groupings and readings inside the list |
| 7 | Principles | the five source Principles items as a derived editorial implementation inference |
| 8 | Application rules | the five source Do rules and the reasons attached |
| 9 | Avoid | the four source Don't prohibitions and the reasons inside them |
| 10 | Semantic color | pairing each hex to its token-set path; taking role names from the source's own labels; keeping `#00DC87` on `brand` rather than on `primary`; keeping `#191919` on both `foreground` and `body`; keeping `#ffffff` on both `canvas` and `on-primary`; attaching live-surface roles to kdan.com and library roles to kdan-ui-revamp |
| 11 | Spacing | keeping each number on its own key path |
| 12 | Shape | keeping the three 4-steps as three keys; keeping `full: 9999` on its own key path; keeping component `4px` on the controls |
| 13 | Elevation | reading the stack as contrast-and-overlay depth rather than a Z-axis shadow scale |
| 14 | Motion | treating the absence as an unnamed motion set rather than a default curve; leaving reduced-motion unnamed; keeping the overlay as a hover-layer token rather than as a duration or curve; keeping the source's qualitative overlay line as that qualitative claim rather than as a restored duration or curve; holding the five-kind per-component promotion gate; stating that gate in full, including that a partial confirmation does not satisfy it |
| 15 | Font evidence | evidence-class application readings: kdan-ui-revamp is not a typography specification and does not name a universal current type family; live kdan.com records Clear Sans / 16px / 56px/700; no exclusive distributed family; `SF Mono` declared-only; no font-license sentence |
| 16 | Family | fallback prohibition; leaving `SF Mono` as a declared family with no invented role |
| 17 | Type roles | keeping YAML `use` strings verbatim; keeping YAML singles and §3 longer spellings on separate readings; refusing to invent a line-height ratio |
| 18 | Type roles hierarchy | calling the humanist-sans and steep-hierarchy sentences implementation rules for every unobserved surface |
| 19 | Assets | favicon URL as an identity pointer; kdan-ui-revamp as the named token-library source rather than as a hosted brand file download |
| 20 | Capture record | preserving the source state contract here rather than delegating to an unadopted catalog graph; reading Error and Link as semantic color roles rather than as a button error treatment or a declared link component; role-based decision procedure; every interactive-kind verdict; every applicability verdict and reason; refusal to treat the map as a complete state-coverage claim |
| 21 | Solid primary | reading 38px / `4px` / `16px / 500` as this control's geometry rather than those YAML spacing or rounded steps |
| 22 | Outline | reading 38px / `4px` / `16px / 500` as this paired secondary's geometry rather than as a spacing step or the solid-primary record |
| 23 | Lime hero CTA | reading 53px / 22px / `#000000` as this hero record rather than as the solid primary or a spacing step |
| 24 | Disabled | reading `#AFAFAF` / `#4B4B4B` as this disabled record rather than as a fourth radius or a type-role |
| 25 | Layout | reading 38px / 53px / 56px/700 / 16px / 4px as live kdan.com observations rather than as a responsive grid specification; leaving breakpoints, fluid grids, and per-viewport measurements unnamed |
| 26 | Content & Locales | reading the source voice paragraph as this contract's public voice rather than as a separately published Kdan microcopy guide; reproducing issued names byte-exact |
| 27 | Named gaps | calling the list a set of named gaps rather than a domain inventory |

## Proof notes

- tokens.source: prose-derived
- components_harvested: true
- ds.type: system — open-source token library, not a complete product-surface specification
- Interaction: hover overlay `rgba(0,0,0,0.2)` recorded on the solid primary; disabled pairing recorded as its own component
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Narrative context (Tainan, Taiwan; PDF productivity; e-signature; document SDKs; dual story; closing charged-with-momentum sentence) does not by itself supply interface tokens
