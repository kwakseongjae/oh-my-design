# KKBOX provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kkbox/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kkbox |
| name | KKBOX |
| country | TW |
| category | entertainment |
| homepage | `https://www.kkbox.com` |
| primary_color | `#00B6E1` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kkbox.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-01 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected live homepage `https://www.kkbox.com` is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here (`#00B6E1`), and Foundations brand accent / download-button text in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a KKBOX-hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-01 |
| tokens.extracted | 2026-06-09 |
| surfaces inspected | 2026-06-01 |

The source footer records the verification verbatim as **Verified:** 2026-06-01. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketing | `https://www.kkbox.com` | 2026-06-01 |
| kkcompany | corporate-group | `https://www.kkcompany.com` | named; not the live token surface |
| github-org | brand-owned-engineering-org | `https://github.com/KKBOX` | named; not the live token surface |

### Tier 1 (as listed in the source footer)

- `https://www.kkbox.com` (live homepage — colors, typography, download button)
- `https://www.kkcompany.com` (KKCompany group brand site)
- `https://github.com/KKBOX` (brand-owned engineering org)

### Tier 2

- getdesign.md/kkbox — NOT LISTED.
- refero — not listed.

Tier 2 data was not used to establish any token or component value.

## Token note

The source frontmatter has no `tokens.note` field. The YAML `tokens.source` value is `prose-derived`. `components_harvested` is `true`. One component record sits in the token set: `button-primary`.

## Sibling handling (`web/references/kkbox/.verification.md`)

The sibling exists — confirmed with `find web/references/kkbox -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-01. Method: playwright getComputedStyle (live DOM) + raw source-file fetch.
- Sources: `https://www.kkbox.com`, `https://www.kkcompany.com`, `https://github.com/KKBOX`.
- live kkbox.com: body bg rgb(17,17,17) = `#111111` (near-black ground)
- live kkbox.com: download button bg rgb(242,242,242) = `#F2F2F2` (light pill surface)
- live kkbox.com: download button text rgb(0,182,225) = `#00B6E1` (KKBOX cyan-blue brand accent)
- live kkbox.com: download button border-radius 30px; height 57px; padding 16px 48px
- live kkbox.com: download button font 18px / weight 500
- live kkbox.com: hero heading Work Sans 120px / weight 600, color `#FFFFFF` (white)
- live kkbox.com: body type Helvetica Neue 14px
- Country TW; brand-owned regional sources (≥2 non-Western) as listed above
- getdesign.md/kkbox — NOT LISTED. refero — not listed. No Tier 2 corroboration; all values rest on the Tier 1 live inspection

Sibling-only items (transcribed as sibling records; mention here is not portable-body use):

- Method string `playwright getComputedStyle`
- RGB spellings of hex values already in the source (`rgb(17,17,17)`, `rgb(242,242,242)`, `rgb(0,182,225)`)
- Country-source rubric phrase `brand-owned regional sources (≥2 non-Western)`

## Byte-form notes

- YAML color keys use lowercase hex (`#00b6e1`, `#111111`, `#ffffff`, `#f2f2f2`). Prose and catalog `primary_color` use `#00B6E1` / `#F2F2F2` / `#FFFFFF`. Both forms are kept.
- `tokens.colors.primary`, `tokens.colors.brand`, and `tokens.colors.on-primary` are three keys on the same hex `#00b6e1`. `on-primary` is the recorded download-button text, not a white-on-cyan pairing.
- `tokens.spacing.sm: 16` is not the download-button padding `16px`. `tokens.spacing.base: 48` is not the download-button padding `48px`.
- `tokens.rounded.sm: 30` / `md: 30` / `lg: 30` are three keys. None of them is the download-button radius `30px` written as a spacing step. `tokens.rounded.full: 9999` has no matching component write.
- YAML `tokens.typography.family.sans` is `Work Sans`. YAML `tokens.typography.family.mono` is `SF Mono` (declared-only; no invented role). Body live face is Helvetica Neue; that face is not a YAML `family` key.
- YAML type sizes stay unitless `120` / `14` / `18`. Source §3 writes `120px` / `14px` / `18px` beside them. No line-height ratio was invented.
- YAML `tokens.components.button-primary.type: button` is attached only to that record.
- YAML `tokens.shadow.none` is the prose string `Depth via tonal contrast — bright pill on near-black ground, not drop shadow`.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 Personas — 3 role-archetype entries (role label, served-by design note) | Deleted. No name, motivation, or affiliation classification is re-hosted here (D2, D2a). The source independently records the product as Taiwan's pioneering music-streaming service; that identity stays in `DESIGN.md` Scope. No independently named publicly observable audience group sits outside the persona section, so Audience carries no invented group. |
| §9 Agent Prompt Guide — tool-facing construction prompt | Deleted. No receiving slot. Every value the prompt names (near-black `#111111`, white Work Sans, cyan `#00B6E1`, `#F2F2F2` pill, 30px radius, 57px height, `16px 48px`, 18px/500, Helvetica Neue 14px, no additional colors / shadows / squared corners) is already in Foundations / Typography / Components / Experience. |
| Unsourced motion curve | None in the source. No curve was deleted. Durations are unnamed. B3 promotion gate is in `DESIGN.md` Motion. |
| Sibling-only collector method (`playwright getComputedStyle`, rgb() spellings) | Mentioned in the sibling section above. Not promoted into `DESIGN.md`. |
| YAML `omd`, `verified`, `tokens.source` / `extracted`, `components_harvested` | Kept in this ledger (A1c). Not copied into portable top matter. `prose-derived` is dual: Scope in `DESIGN.md` and this Identity table. |

## Claim ledger

Claims use the YAML anchors from the source: homepage / live-inspect / 2026-06-01 for live geometry.

| claim | surface |
|---|---|
| tokens.colors.canvas | homepage |
| tokens.colors.primary / brand / on-primary | homepage; three keys, same hex |
| tokens.colors.surface | homepage |
| tokens.colors.foreground | homepage |
| tokens.typography.family.sans | homepage |
| tokens.typography.family.mono | declared-only |
| tokens.typography.display-hero / body / button | homepage |
| tokens.spacing.sm / base | token set; component `16px 48px` is control-local |
| tokens.rounded.sm / md / lg / full | token set; component `30px` is control-local |
| tokens.shadow.none | homepage tonal-contrast record |
| tokens.components.button-primary | homepage |

## Derived-editorial inventory (B2a, 1:1 with portable complete-form closes)

Each row names one portable sentence that carries the complete close `derived editorial implementation inference` + `not KKBOX-authored or a separately published UI specification`. Count must match `DESIGN.md` (27 complete-form closes / 27 data rows).

| # | Portable site | Judgment named |
|---|---|---|
| 1 | Scope ¶1 | `https://www.kkbox.com` as live token surface; `https://www.kkcompany.com` and `https://github.com/KKBOX` as named group and engineering-org sources rather than as that live token surface; values stay attached to the surface that established them |
| 2 | Scope ¶2 | canvas as cinematic; music as the source of light; room as premium and audio-forward; hero as editorial and poster-like; brand as less like a utility and more like a stage |
| 3 | Scope narrative | classifying the §11 paragraph — including Taiwan's pioneering music-streaming service, the KKCompany group, being first and staying premium, the regional streaming definition, the refined design-led sensibility, and the closing music-as-the-main-event sentence — as narrative context that does not by itself supply interface tokens |
| 4 | Primary tasks | selecting the two surface-or-control outcomes as primary tasks; classifying them as surface-or-control outcomes rather than fictional biographies; recording that they do not come from the source's persona section |
| 5 | Audience | refusing to promote individual personas; reading the independently recorded identity as product scope rather than as an invented audience list; dropping the source's archetype biographies rather than promoting them; refusing to carry a name, motivation, or affiliation classification |
| 6 | Distinctive traits | classifying the list as a restatement of the source's recorded characteristics; groupings and readings inside the list |
| 7 | Principles | the four source Principles items as a derived editorial implementation inference |
| 8 | Application rules | the four source Do rules and the reasons attached |
| 9 | Avoid | the four source Don't prohibitions and the reasons inside them |
| 10 | Semantic color | pairing each hex to its token-set path; taking role names from the source's own labels; keeping `#00b6e1` on `primary`, `brand`, and `on-primary` as three keys; keeping `#111111` on `canvas` and `#f2f2f2` on `surface`; keeping `#ffffff` on `foreground`; attaching every role to `https://www.kkbox.com` |
| 11 | Semantic color role-discipline | reading the source's "cyan is an event, not a texture" sentence as this contract's color rule rather than as a separately published KKBOX color specification |
| 12 | Spacing | keeping each number on its own key path |
| 13 | Shape | keeping the three 30-steps as three keys; keeping `full: 9999` on its own key path; keeping component `30px` on the download CTA |
| 14 | Elevation | reading the stack as tonal contrast rather than a Z-axis shadow scale; reading the keep-elevation-cues sentence as this contract's elevation rule rather than as a separately published KKBOX shadow specification |
| 15 | Motion | treating the absence as an unnamed motion set rather than a default curve; leaving reduced-motion unnamed; keeping the source's qualitative motion line as that qualitative claim rather than as a restored duration or curve; holding the five-kind per-component promotion gate rather than treating a single official curve as sufficient |
| 16 | Font evidence | evidence-class application readings: no published universal typography specification; live homepage records Work Sans 120px/600 and Helvetica Neue 14px; `SF Mono` declared-only; no KKBOX-exclusive distributed type family verified; no font-license sentence |
| 17 | Family | fallback prohibition; display-versus-body split; leaving `SF Mono` as a declared family with no invented role |
| 18 | Type roles | keeping YAML `use` strings verbatim; keeping YAML singles and §3 longer spellings on separate readings; refusing to invent a line-height ratio |
| 19 | Type roles hierarchy | calling the poster-like hierarchy and scale-not-color sentences implementation rules for every unobserved surface |
| 20 | Type roles button | reading 18 / 500 as the download-CTA type-role rather than as a spacing step |
| 21 | Assets | Google s2 favicon slug as a third-party identity pointer; group and engineering-org URLs as named sources rather than as hosted brand-file downloads |
| 22 | Capture record | preserving the source state contract here rather than delegating to an unadopted catalog graph; role-based decision procedure; every interactive-kind verdict; every applicability verdict and reason; refusal to treat the map as a complete state-coverage claim |
| 23 | Download Button | reading 57px / `30px` / `16px 48px` / `18px / 500` as this control's geometry rather than those YAML spacing or rounded steps; reading hover and disabled as applicable with omitted treatment; reading loading, error, and success as not-applicable because the control is a destination download CTA that commits no operation in place |
| 24 | Layout | reading 120px / `16px 48px` / 57px as live homepage observations rather than as a responsive grid specification; reading the source's dark-canvas-as-negative-space paragraph as this contract's layout rather than as a separately published KKBOX layout specification; keeping the source's qualitative smaller-viewport and phone sentences as that qualitative claim; leaving exact mobile breakpoints and resized values unnamed |
| 25 | Content & Locales | reading the source voice paragraph as this contract's public voice rather than as a separately published KKBOX microcopy guide; reproducing issued names byte-exact |
| 26 | Named gaps | calling the list a set of named gaps rather than a domain inventory |
| 27 | Motion B3 gate | stating the five-kind per-component promotion gate in full — computed transition properties, animation name, duration, easing, reduced-motion behavior — including that a partial confirmation does not satisfy it |

## Proof notes

- tokens.source: prose-derived
- components_harvested: true
- No `ds.type` field in the source. KKBOX has no published first-party UI specification, so every derived-editorial close uses the toss-form example (rulebook v12 B2a 전제 주석).
- Interaction: default download-button treatment recorded; hover, pressed, focus, and disabled visual treatments omitted. Applicability follows control meaning. State coverage is not claimed complete.
- Narrative context (Taiwan's pioneering music-streaming service; KKCompany group; being first and staying premium; closing music-as-the-main-event sentence) does not by itself supply interface tokens
