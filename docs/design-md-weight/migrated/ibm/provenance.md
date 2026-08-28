# IBM provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/ibm/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | ibm |
| name | IBM |
| country | US |
| category | consumer-tech |
| homepage | `https://www.ibm.com` |
| primary_color | `#0f62fe` |
| logo.type | github |
| logo.slug | IBM |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | Carbon |
| ds.url | `https://carbondesignsystem.com` |
| ds.type | system |
| ds.description | IBM's official open-source design system; Carbon documentation is distinct from the captured IBM.com product surfaces. |
| ds.og_image | `https://carbondesignsystem.com/ogimage.png` |

The homepage URL is dual-destination: identity metadata here, and the inspected Korean marketing route `https://www.ibm.com/kr-ko` is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / the public-product primary action in `DESIGN.md`. The github slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. `ds.type: system` / `ds.name: Carbon` / `ds.url` are ledger fields (A1c). Carbon as a named official system is also in the portable Scope.

**Logo decision.** The catalog field is `logo.type: github` / `logo.slug: IBM`. That is an identity pointer, not an IBM-hosted file.

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
| home | marketing | `https://www.ibm.com/kr-ko` | 2026-07-13 |
| cloud-support | public-product | `https://www.ibm.com/kr-ko/products/cloud/support?lnk=flathl` | 2026-07-13 |
| confluent | public-product | `https://www.ibm.com/kr-ko/products/confluent?lnk=hpfp4kr` | 2026-07-13 |
| carbon-docs | official-doc | `https://carbondesignsystem.com/components/button/usage/` | 2026-07-13 |
| plex-typeface | license | `https://www.ibm.com/design/language/typography/typeface/` | 2026-07-13 |
| ibm-history | official-doc | `https://www.ibm.com/history/ctr-and-ibm` | 2026-07-13 |

YAML `verification_v2.sources` also names `home-live`, `cloud-support-live`, `confluent-live` as product-surface captures on the same three URLs, plus Carbon button docs and the Plex typeface and history pages.

### Tier 1 (as listed in the source footer)

- `https://www.ibm.com/kr-ko`
- `https://www.ibm.com/kr-ko/products/cloud/support?lnk=flathl`
- `https://www.ibm.com/kr-ko/products/confluent?lnk=hpfp4kr`
- `https://carbondesignsystem.com/components/button/usage/`
- `https://carbondesignsystem.com/components/tabs/usage/`
- `https://carbondesignsystem.com/components/accordion/usage/`

### Tier 2

- `https://getdesign.md/ibm` — directory entry; an independent “Carbon design system, structured blue palette” summary. Tier 2 only; no raw source values promoted.
- Refero query attempted at `https://styles.refero.design/?q=IBM`; the built-in web tool refused the direct URL and no indexed Refero IBM result was used.

Tier 2 data was not used to establish any token or component value.

## Token note

The source frontmatter has no `tokens.note` field. The YAML `ds.description` string, kept here as a ledger string and also landed in the portable body as the fact it names (`DESIGN.md` Scope):

> IBM's official open-source design system; Carbon documentation is distinct from the captured IBM.com product surfaces.

## Sibling handling (`web/references/ibm/.verification.md`)

The sibling exists — confirmed with `find web/references/ibm -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-13. Method: supplied deterministic collector bundle `artifacts/reference-evidence/ibm.json` (captured `2026-07-13T07:15:51.895Z`); no browser recapture or MCP was rerun. The artifact reports 3 public routes, 6 component types, 64 captured component variants, 6 observed states, 3 tab interactions, and coverage 100.
- `cloud-support`, `surface-2::[data-omd-capture="4"]`: primary button `rgb(15, 98, 254)` / `#0f62fe`, `rgb(255, 255, 255)`, 4px radius, 48px height, `14px 63px 14px 15px`, 14px/400 IBM Plex Sans KR.
- Same selector `::state-hover`: `rgb(9, 91, 244)` / `#095bf4`, 4px radius, 48px.
- Same selector `::state-pressed`: `rgb(12, 86, 231)` / `#0c56e7`, 4px radius, 48px.
- `cloud-support`, `surface-2::[data-omd-capture="5"]`: accordion header `rgb(22, 22, 22)` / `#161616`, 0px radius, 40px height, `0px 16px 0px 0px`, 16px/400 IBM Plex Sans KR.
- `confluent`, `surface-3::[data-omd-capture="10"]`: tab `#f4f4f4`, `#161616`, 1px `#c6c6c6`, 4px radius, 48px height, `0px 16px`.
- Same selector `::state-hover`: tab hover `rgb(232, 232, 232)` / `#e8e8e8`, 4px radius, 48px.
- `marketing`, `home::#leadspaceSimpleTitle`: leadspace IBM Plex Sans KR, 53.6469px/300/62.7669px.
- `marketing`, `home::[data-omd-capture="23"]`: newsletter field `#f4f4f4`, `#161616`, 0px radius, 48px, Helvetica/Arial 14px/400; third-party marketing-form boundary. Class `mktoField mktoTextField mktoHasWidth mktoRequired`.
- Font evidence: IBM Plex Sans KR loaded/high, 485 uses; IBM Plex Sans loaded/high, 25 uses. Helvetica is system/high with 7 uses. Declared-only Mono, Serif, Arabic, Hebrew, JP.

Sibling-only items (transcribed as sibling records; mention here is not portable-body use):

- RGB spellings of hex values already in the source (`rgb(15, 98, 254)`, `rgb(9, 91, 244)`, `rgb(12, 86, 231)`, `rgb(22, 22, 22)`, `rgb(232, 232, 232)`)
- Selector `home::#leadspaceSimpleTitle`
- Marketo class tokens `mktoField` / `mktoTextField` / `mktoHasWidth` / `mktoRequired`
- Helvetica system/high **7 uses**
- Collector totals 6 component types / 64 variants / 6 observed states / 3 tab interactions / coverage 100
- Artifact timestamp `2026-07-13T07:15:51.895Z`
- getdesign directory gloss “Carbon design system, structured blue palette”
- Refero URL `https://styles.refero.design/?q=IBM`
- Sibling abbreviation `C-T-R` (source writes Computing-Tabulating-Recording)

## Byte-form notes

- The source frontmatter records display / body / action / label line heights as `62.7669`, `24`, `18.0001`, `16`. They are carried in that form in the portable token-set table and as `62.7669px` / `24px` / `18.0001px` / `16px` in the observed-hierarchy table. They are not rewritten as ratios (A1a).
- `tokens.spacing.md: 16` is not `tokens.typography.body.size` `16`, not `tokens.typography.label.lineHeight` `16`, and not tab padding `0px 16px`.
- `tokens.rounded.sharp: 0` is not `tokens.rounded.control: 4`. Accordion header `0px` stays on that control as well as on `sharp`.
- YAML `tokens.components.primary-action.type: button` is attached only to Public product primary action. YAML `tokens.components.product-tabs.type: tab` is attached only to Public product tabs. Accordion and newsletter field are not in the token set.
- `#0f62fe` and `#0062fe` stay two color-token keys. Route-local `#e8e8e8` / `#095bf4` / `#0b5df8` / `#0c56e7` / `#0953e5` / `#e0e0e0` / `#8d8d8d` stay on those component records.
- YAML hex is lowercase. The portable body keeps that form.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas | whole section | The source recorded no first-party audience research suitable for named personas and used `[FILL IN]` placeholders. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. The section is dropped and is deliberately not restated here as names, ages, cities, occupations, or affiliations (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

No `cubic-bezier` from the `spec/omd-v0.1.md` example table appears in the source. The source lists no duration, easing, animation, or reduced-motion value.

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Product CTA `#0f62fe` / `#ffffff`, 4px radius, 48px high, 14px / 400 IBM Plex Sans KR — Public product primary action. Product body IBM Plex Sans KR, 16px / 400 / 24px, `#161616` — Type roles Body. Product tabs `#f4f4f4` / `#161616` / 1px `#c6c6c6` / 4px — Public product tabs. Support accordion sharp 40px header, top rule `#e0e0e0`, 16px / 400 IBM Plex Sans KR — Public product accordion. The boundary-aware prompt restates the same CTA values and the route-specific hover/pressed/focus instruction already on that component.

## Claim ledger

Claims use the YAML anchors from the source: `*product` = cloud-support / cloud-support-live / live-inspect / 2026-07-13; `*marketing` = home / home-live; `*confluent` = confluent / confluent-live.

| Claim | Surface |
|---|---|
| `tokens.colors.primary` | cloud-support live |
| `tokens.colors.canvas` / `layer` | home live |
| `tokens.colors.foreground` / `muted` / `border` | cloud-support live |
| `tokens.colors.link` | confluent live |
| `tokens.typography.family.sans` IBM Plex Sans KR | cloud-support live |
| `tokens.typography.display` (size, weight, lineHeight, use) | home live |
| `tokens.typography.body` / `action` | cloud-support live |
| `tokens.typography.label` | home live |
| `tokens.spacing.xs` / `sm` / `md` / `lg` / `xl` | cloud-support live |
| `tokens.spacing.section` | home live |
| `tokens.rounded.sharp` / `control` | cloud-support live |
| `tokens.shadow.flat` | cloud-support live |
| `tokens.components.primary-action` (type, bg, fg, radius, padding, height, font, states, use) | cloud-support live |
| `tokens.components.product-tabs` (type, bg, fg, border, radius, padding, height, font, states, use) | confluent live |
| Published strings IBM / IBM Plex / IBM Plex Sans KR / Carbon / Computing-Tabulating-Recording / Gray 10 / Gray 100 / IBM Blue / Open Font License / Plex Mono Light | source §1 / §3 / §10 / §11 |
| 1911 Computing-Tabulating-Recording merger / 1924 IBM name / Plex as corporate typeface / OFL / Carbon public component guidance / About AI, cloud, quantum, sustainability / closing sentence that first-party narrative facts stay separate from the limited computed values on Korean public routes | source §1 / §11 narrative |

## Proof notes

- Six named Tier 1 sources, recorded 2026-07-13. The three Korean public URLs are the computed-token surfaces. Carbon component pages, the typeface page, Developer typography, history, and About are brand or system sources, not computed-token surfaces for the live palette.
- `components_harvested: true`; two component records in the source token set (`primary-action`, `product-tabs`).
- The source records no `focus-visible` string. Generic Focus was captured on the primary action and accordion header; raw values stay in the sibling because the two CTA routes differ. Uncaptured disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- IBM has a published first-party design system (Carbon, `ds.type: system`). Derived-editorial qualifications therefore close by naming that specification: not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation (rulebook v12 B2a 전제 주석).
- 1911 Computing-Tabulating-Recording merger, 1924 IBM name, data-and-computing lineage, Plex as corporate typeface, OFL boundary, Carbon's public component guidance, About framing around AI / cloud / quantum / sustainability, and the source §11 closing sentence (first-party narrative facts kept separate from the limited computed values on Korean public routes) are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **21**. This table has **21** rows (E1 1:1). The same 21 lines also carry `not IBM-authored` and `including the published Carbon documentation`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | Surface boundary: three Korean public URLs as token surfaces; Carbon documentation plus typeface / Developer / history / About pages do not automatically supply computed tokens |
| Experience — Scope ¶2 | Keeping recorded values on the surfaces that established them rather than as a house palette for every IBM or Carbon surface |
| Experience — Scope ¶3 | Classifying the 1911 / 1924 / Plex / OFL / Carbon / About narrative as context that does not supply tokens |
| Experience — Primary tasks | Selecting the three label-and-surface tasks; they do not come from the persona section |
| Experience — Distinctive traits | Grouping the five traits and the `#0f62fe` / `#0062fe` two-role reading |
| Experience — Principles | The four source principles and their UI implications (Carbon-named close) |
| Experience — Application rules | The five Do-list rules and the reasons attached to them |
| Experience — Avoid | The five Don't-list prohibitions |
| Foundations — Semantic color | Palette-role slotting; `#0f62fe` and `#0062fe` stay two roles; route-local state colors stay on those records |
| Foundations — Spacing | Rhythm candidates, not a complete grid; `48` stays a control height, not a `tokens.spacing` key; `md: 16` stays a spacing step off body `16` / label line-height `16` / tab padding `16` |
| Foundations — Shape | Keeping `sharp: 0` / `control: 4` / accordion `0px` on their own paths |
| Foundations — Elevation | Reading `box-shadow: none` as a flat treatment for observed public components rather than a depth system |
| Foundations — Motion | Five-kind promotion gate; no motion token promoted from this capture or from Carbon documentation |
| Typography — Font evidence | Design Language / Developer as official context; OFL as license boundary; declared-only Mono / Serif / locale faces not machine UI-family tokens; Helvetica / `ibm_icons` not the UI face |
| Typography — Family | No-substitution rule; loaded KR family canonical only where computed use and loaded/high evidence agree |
| Typography — Type roles | `62.7669` / `24` kept off invented ratios; body `16` stays a type key |
| Typography — Assets | github slug as an identity pointer, not a hosted brand file; `ibm_icons` off the UI-family token |
| Components — Capture record | Role-based applicability procedure; interactive-kind and not-applicable verdicts |
| Layout | Three 1440×900 routes; Carbon 2x Grid left unnamed as a live-token measurement; no authenticated-product layout inferred |
| Content | Byte-exact / gloss-beside rule; Carbon button and IBM Developer typography lines as official guidance rather than a complete product-microcopy guide |
| Governance — Recorded unresolved | Naming the list from the source's own unresolved fields |
