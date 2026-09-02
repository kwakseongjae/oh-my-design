# pega — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged. Files confirmed with `find` before grep (`DESIGN.md`, `provenance.md`, `migration-log.md`, `audit-log.md`, source `web/references/pega/DESIGN.md`, sibling `web/references/pega/.verification.md`). Counts: `grep -oF -- <pat> <file> | wc -l` in bash `set +e`; empty pipeline = dest 0 (not zsh `no matches found`). Portable DESIGN SHA-256 `5e68e17e6e7187378499a90052c782576e7640bd3ef327e0f08f7ddeacafd104` matches F3’s byte-identical claim.

## Verdict

**PASS**

No A-series key-path loss, unique-fact drop, ungrounded surface, conflict-policy split, stale F2 list, persona-derivative promotion, C2 direction split, sibling-fragment fusion, cross-surface reassignment, or YAML-use truncation found in this pass.

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Component and color/spacing/rounded paths are DESIGN dest ≥1 (easywallet trap: same number on another scale does not count). Typography dotted subpaths `heading.size` / `.weight` / `.lineHeight` and `body.weight` / `.lineHeight` are dest 0 as strings; the Type-roles table still binds `38.4` / `500` / `48px` to `tokens.typography.heading` and `16` / `400` / `24.64px` to `tokens.typography.body`. That is keep-both of YAML numbers beside §3 px writings, not an icook missing-field row.

| path | SRC | DES | PRO |
|---|---:|---:|---:|
| tokens.colors.header / action / canvas / foreground / accent-weak | 1 | 2/2/2/1/2 | 1/1/2/1/1 |
| tokens.colors.accent (F-string also hits accent-weak) | 2 | 4 | 2 |
| tokens.typography.family.ui | 1 | 2 | 1 |
| tokens.typography.heading.size / .weight / .lineHeight | 1 | 0/0/0 | 1/0/0 |
| tokens.typography.heading (parent) | 3 | 1 | 1 |
| tokens.typography.body.size / .weight / .lineHeight | 1 | 2/0/0 | 1/0/0 |
| tokens.typography.body (parent) | 3 | 3 | 1 |
| tokens.spacing.version-button-y / version-button-x / search-input-x / dark-action-y / dark-action-x | 1 | 1/1/2/3/3 | 1/0/1/1/0 |
| tokens.rounded.version-button / dark-action / search-input | 1 | 1/3/2 | 1/0/0 |
| tokens.components.dark-link-action.type / .bg / .fg / .border / .radius / .height / .padding / .font / .states / .use | 1 | 2/1/2/1/1/1/1/1/1/1 | 0 |
| tokens.components.header-search.type / .bg / .fg / .radius / .height / .padding / .font / .states / .use | 1 | 2/1/1/1/1/1/1/1/1 | 0 |
| tokens.components.menu-row.type / .fg / .height / .font / .use | 1 | 2/1/1/1/1 | 0 |

Values on those paths (DESIGN): `#1a3a5c` 5, `#03102e` 6, `#ffffff` 10, `#050505` 3, `#0b6dd3` 4, `#e8f3fb` 4, `Roboto Flex` 25, `38.4` 4, `38.4px` 2, `48px` 3, `24.64px` 3, `59px` 7, `42px` 1, `1px solid #ffffff` 1, `rgba(255, 255, 255, 0.14)` 1, `16px 32px` 2, `0px 12px` 2, `16px / 700 / Roboto Flex` 1, `14px / 400 / Roboto Flex` 3, `16px / 400 / Roboto Flex` 1, `default observed only; interaction capture reported 0` 4. A1a: line heights stay `48px` / `24.64px` (not rewritten as a ratio). A1b: `type: button` SRC 1 / DES 1; `Primitive type: \`button\`` DES 1; `type: input` 1/1; `Primitive type: \`input\`` DES 1; `type: listItem` 1/1; `Primitive type: \`listItem\`` DES 1; `listItem` DES 3. A1c: `components_harvested` DES 0 / PRO 2 (sidecar); YAML token note DES 1 / PRO 1; `ds.type` DES 1 / PRO 3.

Same-number unmerge in body: `tokens.spacing.version-button-x: 12` ≠ `tokens.spacing.search-input-x: 12`; `tokens.typography.body.size` `16` ≠ `tokens.spacing.dark-action-y: 16` ≠ dark-action font `16px`; `tokens.spacing.dark-action-x: 32` ≠ `tokens.rounded.dark-action: 32` ≠ header-search height `32px`. Same-hex unmerge: `tokens.colors.canvas` `#ffffff` ≠ dark-link-action fg ≠ header utility text ≠ dark-link-action border ≠ header-search fg; `tokens.colors.action` `#03102e` ≠ `tokens.colors.header` `#1a3a5c`.

## 2 Unique facts

`Alan Trefler` SRC 1 / DES 1. `chess-playing AI agents` 1/2. `more than four decades` 1/2. `Constellation` 2/3. `four-color/four-shape` 1/2. `184 visible observations` 1/2. `1440×900` 2/3 (`1440x900` all 0). `Build for Change®` 1/1. `Build for Change` 2/2. Official wording samples byte-exact, each SRC 1 / DES 1: `Patterns and components for building enterprise applications.` / `The fastest path to an accurate outcome.` / `Build for Change®.` `Cases` 1/2. `Assignments` 1/2. `interactionCount: 0` 1/2. `SIL Open Font License 1.1` 1/3. `DM Sans` / `JetBrains Mono` / `Source Serif 4` each 2/4. `-apple-system` 1/2. `Arial` 1/2. `Figma kit` 1/2. `UX System ’25` 2/4. `Pega UX System ’25` 1/1. `enterprise-transformation platform` 1/2. `loose sticker sheet` 1/2. `pill-shaped` 1/1. `Let the workflow and business information lead` 1/1. `repeated button-placement choices` 1/2. `product-language evolution` 1/2. `narrative illustration approach` 1/1. `Pega's public, prescribed system for enterprise application workflows` 1/1. `founder and CEO` 1/1. `governed, scalable, adaptable` 1/1. `That long horizon helps explain` 1/1. `underlying system remains the same` 1/1. `row/menuitem` 1/2. `not button semantics` 1/2.

## 3 Constraints / motion

§15 `interactionCount: 0` SRC 1 / DES 2. `no transition or easing measurements` 1/1. `No duration, easing, reduced-motion, or motion-behavior token is established` 1/1. Five-kind gate present: `transition properties` DES 1, `animation name` DES 1, `reduced-motion behavior` DES 1, `per-component computed observation` DES 1, `partial confirmation` DES 2. `cubic-bezier` SRC 0 / DES 0. `ease-in` 0/0. `200ms` 0/0. §6 `no box shadow` 1/1. `No Pega elevation scale is established` 1/1. §14 full state contract `No authenticated-product empty` 1/1; `no component-state contract is inferred` 1/1; `does not create measured state tokens` 1/1. §8 `Those fields are therefore absent` 1/1. §7 Don'ts: `without product-surface evidence` 1/1; `label it Roboto Flex` 1/2; `zero-interaction capture` 1/1; `Pega UI-family claim` 1/2. §9 unique constraints landed on Application rules / Avoid (`guided-enterprise-workflow direction` 1/1; `low-shadow separation` 1/1).

## 4 Ungrounded surface

Home vs `surface-3` split follows the source YAML claims: heading `38.4` stays `surface-3` / `https://design.pega.com/components/` (DES `:149`); body `16` / `24.64px` stays public home (`:150`); accent `#0b6dd3` / `#e8f3fb` stays “public-home link sample”, not the dark `link-as-button` (`:38` / `:86`). Dark action, header search, and menu row stay on the public system home. `mobile app` SRC 0 / DES 0. `native-client` 0/0. `storefront` 0/0. `iOS` / `Android` 0/0. `fin.ai` 0/0. Named gaps restate source omissions (`authenticated-product` SRC 3 / DES 6; `product application grid` 1/2), not new domains.

## 5 Conflict policy

Source `conflicts: []`. Sibling matrix all Tier 1 retained / unresolved none. One policy: YAML token-set and source § body over sibling extras; same-hex / same-number roles kept apart rather than mixed. Sibling masthead shadow `0px 2px 8px 0px` stays in provenance (PRO 1); portable body keeps source `no box shadow`.

## 6 F2 list after F3

F3 did not edit portable DESIGN (SHA match). Dest rows F3 remesured still match this pass: `Roboto Flex` DES 25, `#1a3a5c` DES 5, `24.64px` DES 3, `59px` DES 7, `listItem` DES 3, `14px / 400 / Roboto Flex` DES 3, `derived editorial implementation inference` DES 24, `not Pega-authored` DES 24, `including the published Pega UX Design System documentation` DES 25, `6px 12px` DES 2 at `:101` / `:252`. Log no longer claims a contiguous dest of the source §12 closer (E2c; out of this layer).

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 has no named personas. Portable Audience keeps the source’s own stakeholder wording. Counts below are DESIGN / provenance; this review file mentions the needles (E2d: absence is claimed of DESIGN Primary tasks, not of this file).

| needle | SRC | DES | in Primary tasks |
|---|---:|---:|---|
| application designers and authors | 1 | 1 | no |
| create and manage Cases | 1 | 1 | no |
| complete Assignments | 1 | 1 | no |
| large organizations modernizing | 1 | 1 | no |
| guided enterprise work | 1 | 1 | no |
| does not invent named personas | 1 | 1 | — |
| stakeholder groups | 1 | 1 | — |

Primary tasks name the two captured UX System URLs plus header search / `link-as-button` / menu rows. `Cases` / `Assignments` / designers are not in that block.

## 8 C2

Public dark link action is read as a destination `link-as-button`. Menu row is read as a menuitem. Both close loading, error, and success. Header search keeps error applicable as a form field and closes loading/success with a role reason (not “commit 없음” on error while opening loading). `| loading | applicable |` DES 0. `| error | applicable |` DES 1 (`:223` search only). `| loading | not-applicable |` DES 3. `| error | not-applicable |` DES 2. `commits no operation in place` DES 2 (dark link + menu row). `not captured` as a not-applicable reason DES 0. YAML `type: button` kept on the destination link (A1b); the destination-link reading is the C2 role, not a primitive rewrite. `Interactive control` DES 0.

## 9 Sibling fusion

`14px radius with 16px padding` SRC 0 / SIB 0 / DES 0. `measures 1440px` SRC 0 / SIB 0 / DES 0 / LOG 1 (log denial, not a body dest). `2px radius with` all 0. Sibling-only extras stay out of portable DESIGN: `60px` 0/2/0/1, `17.6px` 0/1/0/1, `rgb(15, 37, 64)` 0/1/0/1, `6.4px 20px` 0/1/0/1, `0px 2px 8px 0px` 0/1/0/1, `https://www.pega.com/about` 0/1/0/1, `https://design.pega.com/about/get-started/` 0/1/0/1, `https://design.pega.com/patterns/forms/` 0/1/0/1, `data-omd-capture` 0/6/0/4, `.version-btn` 0/1/0/2, `Google Fonts` 0/1/0/0, `WOFF2` 0/1/0/0, `transparent background` 0/1/0/0. Menu-row font stays YAML `16px / 400 / Roboto Flex` (DES 1), not sibling `16px / 400 / 24.64px` on the menuitem.

`6px 12px` SRC 0 / SIB 1 / DES 2 (`:101` / `:252`) sits beside the source’s own `6px vertical and 12px horizontal padding` (SRC 1 / DES 2). That is CSS shorthand of a padding the source already pairs, not a new measurement and not a string that exists in neither file (item 9). Other sibling-only paddings (`6.4px 20px`) remain dest 0.

## 10 Surface transfer

Heading `38.4px / 500 / 48px` stays the component-page / `surface-3` measurement. Body `16px / 400 / 24.64px` stays public home. Accent pair stays the public-home link sample. `184 visible observations` stays the source’s cross-page family count, not a heading-size move onto home. Catalog `primary_color` `#1a3a5c` stays the header token, not recast onto the dark action.

## 11 YAML use ↔ § table use

Longer §4 writing and YAML `use` both kept.

| record | SRC | DES |
|---|---:|---:|
| public design-system link with explicit link-as-button class (YAML, no backticks) | 1 | 1 |
| public design-system link with explicit \`link-as-button\` class (§4) | 1 | 2 |
| public design-system search input | 2 | 3 |
| public design-system menu row | 2 | 4 |
| default observed only; interaction capture reported 0 | 4 | 4 |

No kakaot-style cut to the shorter record.

## Notes (not FAIL)

- Dotted typography subpaths `tokens.typography.heading.size` / `.weight` / `.lineHeight` and `tokens.typography.body.weight` / `.lineHeight` are DESIGN dest 0 as strings. Size / Weight / Line-height columns of the Type-roles table still hold the YAML numbers beside the §3 px writings on the parent paths. 38.4 is unique to the heading row; body `400` is in the Body row labeled `tokens.typography.body`, not absorbed into another key.
- Source §1 `evolved from long-running AI and automation work` SRC 1 / DES 0 and `enterprise-transformation position` SRC 1 / DES 0. Dest keeps §11 founding (`Alan Trefler` / chess-playing AI / four decades) plus `enterprise-transformation platform` (SRC 1 / DES 2) and Constellation as default name and direction with the underlying system remaining the same. Narrative connective dropped; the two poles remain.
- Source §12 closer `The UI implications are this reference’s application of official public guidance` is not contiguous (DES 0); `:43` restates it inside the qualifier. F3 already logged that. Not an A5 issued-copy loss.
- `6px / 12px` and `16px / 32px at 59px` (slash compression in Distinctive traits `:37`) are dest-only notation of source-paired paddings / the source §5 dark-action sentence, not sibling fusion of two properties that neither file combined.

REVIEW_DONE pega PASS
