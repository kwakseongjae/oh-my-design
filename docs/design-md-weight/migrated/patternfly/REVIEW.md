# patternfly — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged. `find` confirmed files before grep: portable `DESIGN.md`, `provenance.md`, `migration-log.md`, `audit-log.md`; source `web/references/patternfly/DESIGN.md`; sibling `web/references/patternfly/.verification.md` (dotfile, path written directly). Counts: `grep -oF -- <pat> <file> | wc -l` with `setopt NO_NOMATCH`; empty pipeline = dest 0. Portable DESIGN SHA-256 `b0ec6079dbd79c03e852e5de4c4aeb45d95d357eae024c5e7d0cf3058273ba81` matches the mechanical-correction line in `audit-log.md`. Line counts: source 259, sibling 78, DESIGN 313, provenance 193, migration-log 50, audit-log 140.

## Verdict

**PASS**

No A-series key-path loss, unique-fact drop, ungrounded surface, conflict-policy split, stale F2 list, persona-derivative promotion, C2 direction split, sibling-fragment fusion, cross-surface reassignment, or YAML-use truncation found in this pass.

Absence counts below are file-column dests (SRC / SIB / DES / PRO). This REVIEW.md mentions those needles so that it can name them; it is not a fourth dest for “the portable body does not contain X” (E2d).

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Color / family / lineHeight / size / rounded / component parent paths are DESIGN dest ≥1. Spacing steps are bound on `tokens.spacing` as `xs: 4` · `sm: 8` · `md: 16` · `lg: 24` (easywallet trap: same number on another scale does not count). `tokens.spacing.md: 16` is named as a spacing step and unmerged from `tokens.rounded.card: 16` and featured-card radius `16`. Primary-action radius YAML `999` / §4 `999px` sit on `tokens.components.primary-action.radius`, unmerged from `tokens.rounded.control: 6` / `tokens.rounded.none: 0`.

| path or labeled form | SRC | DES | PRO |
|---|---:|---:|---:|
| tokens.colors.primary / foreground / body / canvas | 1 | 1/1/1/1 | — |
| `#0066cc` / `#151515` / `#4d4d4d` / `#ffffff` | 8/6/3/6 | 7/4/1/5 | 5/1/1/1 |
| tokens.typography.family.ui / .display | 1 | 1/1 | — |
| Red Hat Text / Red Hat Display / Red Hat Mono | 11/7/4 | 14/8/6 | — |
| tokens.typography.body.size / .lineHeight | 1 | 1/1 | — |
| tokens.typography.display-title.size / .lineHeight | 1 | 1/1 | — |
| tokens.typography.body.weight / .use (dotted string) | 1 | 0/0 | — |
| tokens.typography.display-title.weight / .use (dotted string) | 1 | 0/0 | — |
| xs: 4 / sm: 8 / md: 16 / lg: 24 | 1 | 1/1/2/1 | — |
| tokens.rounded.none / .control / .card | 1 | 2/2/2 | — |
| none: 0 / control: 6 / card: 16 | 1 | 2/2/2 | — |
| tokens.components.primary-action / featured-card | 8/6 | 3/1 | — |
| type: button / type: card | 1 | 2/2 | — |
| Primitive type: \`button\` / \`card\` | 0 | 1/1 | 0 |
| radius: 999 / 8px 24px / 14/400 Red Hat Text | 1/1/1 | 1/2/4 | — |
| 1.5 / 1.3 / 46.8px / 21px | — | 5/2/2/2 | — |
| 37px / 37px rendered height / 1440×900 / 1440px | — | 2/1/3/0 | — |
| interactionCount: 0 / 27 component variants / 349 captured elements | 2/1/1 | 4/1/1 | — |

A1a: YAML `tokens.typography.body.lineHeight` `1.5` and `display-title.lineHeight` `1.3` remain unitless on Type-roles rows; observed table keeps `46.8px` / `21px`; official body reference keeps `1.5`. A1b: `type: button` and `type: card` kept; not collapsed to Kind only (`Kind: interactive` DES 2 beside primitive types). A1c: `ds.type: system` DES 1 / PRO 2; `components_harvested` DES 0 / PRO 2 (sidecar); `reconciled` DES 0 / PRO (ledger). Same-hex unmerge: `#ffffff` canvas ≠ primary-action text ≠ featured-card bg; `#151515` foreground ≠ featured-card text; `#0066cc` catalog/primary ≠ primary-action fill (same hex, named paths). DES-only hex set empty vs source.

## 2 Unique facts

`PatternFly 6` SRC 2 / DES 3. `Project Felt` 7/9. `token-based theming architecture` 1/2. `red accents` 1/2. `pill treatment` 1/2. `glass layer` 1/2. `Red Hat-aligned` 2/3. `authenticated operational console` 1/2. `349 captured elements` 1/1. `12 captured heading` 1/1. `WOFF2` 1/3. `@font-face` 1/1. `Font Awesome 5 Free` 1/3. `pf-v6-pficon` 1/3. `codemods` 1/1. `Components connect foundations, patterns, and extensions` 1/1. `Build consistent and usable enterprise software` 1/1. `does not provide a named executive quotation` 1/1. `zero interaction snapshots` 1/1. `zero interaction kinds` 1/1. `not reclassified as button components` 1/1. `feedback button` 1/1. `use no box shadow` 1/1. `Red Hat contact form` 1/2. `About PatternFly` 2/1. `4/8/16/24px` 2/2. `6px controls` 1/2. `16px featured cards` 1/1. `share standards, guidance, and working code` 1/1. `reduce repeated work across cross-functional product teams` 1/1. `controlled evolution rather than a replacement` 1/2. `less a campaign aesthetic` 1/2. `pf-v6-c-button` 2/2. `pf-m-primary` 2/2. `pf-v6-c-card` 2/3. `pf-m-clickable` 2/3. `featured-blog-post-1` 2/2. Sibling link text `Download PatternFly’s fonts from GitHub` (U+2019) SRC 0 / SIB 1 / DES 1. Tier-2 `getdesign.md` / `refero.design` DES 0 / PRO 1 (E1 ledger). `2026-07-14` DES 0 / PRO 10 (freshness sidecar). `2026-07-13` DES 1.

## 3 Constraints / motion

§15 `No motion duration, easing curve, transition, or reduced-motion behavior was measured` SRC 1 / DES 1. `Preserve user motion preferences` 1/1. Five-kind gate present: `transition properties` DES 1. `cubic-bezier` SRC 0 / DES 0 / PRO 1 (omission mention). `ease-in` 0/0. `200ms` 0/0. §8 `Only a 1440×900 viewport` 1/1. §5 layout sentence including `no application-column count, responsive grid, sidebar width, data-table density, or form layout` dest 1 at Layout `:250`. §6 `use no box shadow` 1/1; feedback-button shadow not generalized dest 1 at Elevation `:110`. §7 Do/Don't four+four byte-exact (each SRC 1 / DES 1). §9 unique pill / 16px featured-card / 4/8/16/24px constraint dest 1 at Application rules `:66`. §14 handling-boundary table ten rows each SRC 1 / DES 1. `not captured` DES 1 is the source §4 “not captured as button semantics” sentence at `:168`, not a `not-applicable` reason.

## 4 Ungrounded surface

Home vs button-docs vs color-docs follows the source: primary action Domain `public PatternFly.org home`; featured card the same; YAML claims remain `home`. Foreground/body “across the supplied home, button, and color documentation surfaces” stays that three-surface wording (`:86`–`:87`). Official body `1.5` stays official default-body guidance. `37px` stays primary-action height (`:201`, restated as desktop-capture at `:252`), not moved onto button-docs. Sibling danger `rgb(177, 56, 11)` DES 0 / PRO 1. `native-client` / `storefront` / `iOS` / `Android` / `mobile app` / `fin.ai` / `marketing campaign` / `corporate site` SRC 0 / DES 0. Named gaps restate source omissions (hover/focus/pressed…; empty/loading…; Project Felt/glass-mode; danger/warning/plain/link/secondary as reusable tokens; elevation/modal/popover; breakpoint/safe-area; motion five-kind; declared-only fonts; font-license; executive quotation). YAML home kind `marketing` is restated as verification kind, not as a new campaign surface.

## 5 Conflict policy

Source `conflicts: []`. One policy in the portable body: keep-both for dual writings. YAML `999` / §4 `999px`; YAML `14/400 Red Hat Text` / §4 `14px / 400 / Red Hat Text`; unitless `1.5`/`1.3` vs `46.8px`/`21px`; writings of `16` on spacing vs rounded vs featured-card radius. Featured-card YAML `use` verbatim at Token-set use `:231` plus backticked Use `:232`. Primary-action Use is the YAML description with a backticked selector; Role/Height keep §4 `an anchor` and `37px rendered height` (each SRC 1 / DES 1). Not a pick-one on one pair and keep-both on another measured pair.

## 6 F2 list after F3

F1 list `13, 15, 17, 23, 32, 36, 46, 59, 66, 70, 83, 96, 106, 110, 114, 122, 138, 142, 159, 166, 217, 245, 252, 257, 301` matches this pass’s 25 `derived editorial implementation inference` lines (DESIGN 25 / provenance 1 / migration-log 1). F2 dest remasure still holds: featured-card YAML use `:231` dest 1; body/display-title use Type roles `:146`–`:147` dest 1 each; YAML states string dest 2 (`:170` + `:203`); `2026-07-14` DESIGN dest 0; `Primitive type: \`button\`` dest 1 at `:194`; `Primitive type: \`card\`` dest 1 at `:224`; B3 `transition properties` dest 1 at Motion `:114`; Named gaps motion shortened at `:310`. SHA matches the post-insert remapping.

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 is three workflow archetypes, not named people. Portable Audience keeps About wordings only. Counts below are DESIGN / provenance; this review file mentions the needles (E2d: absence is claimed of DESIGN Primary tasks and Audience, not of this file).

| needle | SRC | DES | PRO | in Primary tasks / Audience |
|---|---:|---:|---:|---|
| Enterprise front-end developer | 1 | 0 | 1 | no |
| Product designer | 1 | 0 | 1 | no |
| Open-source contributor | 1 | 0 | 1 | no |
| Looks for production-ready React or HTML guidance | 1 | 0 | 0 | no |
| production-ready React | 1 | 0 | 0 | no |
| React or HTML guidance | 1 | 0 | 0 | no |
| Uses foundations, components, and patterns to maintain consistency | 1 | 0 | 0 | no |
| Brings a feature request, design issue, code change, or documentation update | 1 | 0 | 0 | no |
| public contribution channels | 1 | 0 | 0 | no |
| workflow archetypes | 1 | 0 | 1 | no |

Primary tasks name the three captured public routes (home / button docs / color-foundation docs). Audience: `designers and developers` and `users and contributors beyond Red Hat` (source About). `React` DESIGN dest 0.

## 8 C2

Public-home action is read as a destination anchor (`pf-v6-c-button pf-m-primary`). Featured card is read as a clickable card (`pf-m-clickable`). Both close loading, error, and success with a no-commit / destination-reports-failure reason. `| loading | applicable |` DESIGN dest 0. `| error | applicable |` DESIGN dest 0. `| loading | not-applicable |` dest 2 (`:213`, `:241`). `| error | not-applicable |` dest 2 (`:214`, `:242`). No control opens loading while closing error. `Interactive control` dest 0. `not captured` is not a not-applicable reason.

## 9 Sibling fusion

`14px radius with 16px padding` SRC 0 / SIB 0 / DES 0. `measures 1440px` SRC 0 / SIB 0 / DES 0. `1440px` DES 0 (`1440×900` DES 3). Sibling-only extras stay out of portable DESIGN: `score 66` 0/1/0/1, `8px 16px` 0/1/0/1, `rgb(177, 56, 11)` 0/1/0/1, `rgb(31, 31, 31)` 0/1/0/1, `data-omd-capture="10"` / `"45"` / `"43"` / `"32"` each DES 0 / PRO 1, `navigation/AI` DES 0 / PRO 1, `four matching` DES 0, `playwright_cli` DES 0. `box-shadow: none` SRC 0 / SIB 0 / DES 1 sits beside source `use no box shadow` (SRC 1 / DES 1); sibling spelling is `box-shadow none` (SIB 1 / DES 0). That is CSS punctuation of a pairing the source already records, not a new measurement and not a string that fuses two properties neither file combined. Layout `:252` lists 37px / 6px / 16px / 999px each with its component name, not as one fused geometry.

## 10 Surface transfer

Primary-action `8px 24px` / `999` / `37px` stay the public-home action. Featured-card `16px` radius stays that card. Body `14` / `21px` stays “all three supplied surfaces”. Display-title `36` / `46.8px` stays public-site H1. Official `1.5` stays official default-body guidance. `6px` stays `tokens.rounded.control`, not recast as featured-card or primary-action radius. Button-page danger/warning/plain/link/secondary remain documentation examples (`:90`, Named gaps `:306`), not home tokens.

## 11 YAML use ↔ § table use

Longer YAML `use` strings and § tables both kept where they differ.

| record | SRC | DES |
|---|---:|---:|
| Repeated body, list-item, and default control text on all three supplied PatternFly.org surfaces. | 1 | 1 |
| Observed H1 on the supplied public PatternFly.org surfaces. | 1 | 1 |
| Repeated across all three supplied surfaces (§3 short) | 1 | 1 |
| home::#featured-blog-post-1 — selector-backed pf-v6-c-card pf-m-clickable default geometry on the public home. | 1 | 1 |
| selector-backed pf-v6-c-button pf-m-primary action on the public home. | 1 | 1 |
| an anchor | 1 | 1 |
| 37px rendered height | 1 | 1 |
| Observed default only; the supplied artifact has interactionCount: 0, so no hover, focus, pressed, disabled, or error value is specified. | 1 | 2 |

No kakaot-style cut to the shorter record. `supplied public home` SRC 2 / DES 0 is the §4 location adjective; YAML already said `on the public home`, and `supplied` remains 17 times on DESIGN (capture/packet/surfaces). Role/Height keep the longer §4 facts.

## Notes (not FAIL)

- Dotted typography subpaths `tokens.typography.body.weight` / `.use` and `display-title.weight` / `.use` are DESIGN dest 0 as strings. Size / Weight / Line-height / Token-set use columns still hold `14` / `400` / `1.5` and `36` / `600` / `1.3` plus the YAML use sentences on those rows. Same treatment as spacing `xs: 4` listed under parent `tokens.spacing` rather than as `tokens.spacing.xs`.
- Primary-action YAML `use` is not a contiguous unbackticked byte match (selector wrapped in backticks). Featured-card has an extra Token-set use line because the landing checker required it. Semantic YAML use text dest 1 either way.
- Catalog logo Google s2 URL is provenance-only; portable Assets is URL-free. Not a token loss.

REVIEW_DONE patternfly PASS
