# palantir — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged. Files confirmed with `find` before grep. Counts: `grep -oF -- <pat> <file> | wc -l` in bash; empty pipeline = dest 0 (not zsh `no matches found`).

## Verdict

**PASS**

No A-series key-path loss, unique-fact drop, ungrounded surface, conflict-policy split, stale F2 list, persona-derivative promotion, C2 direction split, sibling-fragment fusion, cross-surface reassignment, or YAML-use truncation found in this pass.

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Every source YAML path is DESIGN dest ≥1 (easywallet trap: same number on another scale does not count).

| path | SRC | DES | PRO |
|---|---:|---:|---:|
| tokens.colors.primary | 1 | 2 | 1 |
| tokens.colors.dark-canvas | 1 | 2 | 1 |
| tokens.colors.on-primary | 1 | 3 | 3 |
| tokens.colors.foreground | 1 | 1 | 1 |
| tokens.colors.muted | 1 | 1 | 1 |
| tokens.colors.link | 1 | 1 | 2 |
| tokens.colors.canvas | 1 | 3 | 3 |
| tokens.typography.landing-title.size / .weight / .lineHeight / .use | 1 | 1 | 1/0/0/0 |
| tokens.typography.docs-title.size / .weight / .lineHeight / .use | 1 | 1 | 1/0/0/0 |
| tokens.typography.docs-body.size / .weight / .lineHeight / .use | 1 | 3/1/1/1 | 2/0/0/0 |
| tokens.spacing.xs / sm / md / lg / xl | 1 | 3/1/1/2/1 | 1/0/0/1/2 |
| tokens.rounded.sharp / control / round | 1 | 2/1/1 | 1/1/2 |
| tokens.shadow.docs-card | 1 | 1 | 1 |
| tokens.components.docs-welcome-card.type / .bg / .fg / .radius / .padding / .height / .shadow / .font / .use | 1 | 1/1/2/1/1/1/2/3/1 | 1/0/1/0/0/0/0/1/0 |

Values on those paths: `#2d72d2` DES 3, `#111418` DES 4, `#ffffff` DES 7, `#1c2127` DES 4, `#5f6b7c` DES 3, `#215db0` DES 4, `oklch(1 0 257.113)` DES 5, combined shadow string DES 2, `14px / 400 / 18.0013px operating-system stack` DES 3. A1a: `33.6` DES 4 and `33.6px` DES 1 both kept; `24` not rewritten as ratio (`1.5` appears only in the non-rewrite sentence, DES 1). A1b: YAML `type: card` DES 1; `Primitive type: \`card\`` DES 1; `type: button` DES 0 (source had none). A1c: `ds.type` DES 2 / PRO 3; `components_harvested` DES 0 / PRO 2 (sidecar).

Same-number unmerge in body: `tokens.spacing.lg` `16` ≠ docs-body size `16` ≠ `4px 16px`; `tokens.rounded.round` `30` ≠ 30px action heights; `tokens.spacing.xl` `20` ≠ card `20px`; `tokens.rounded.control` `4` ≠ `tokens.spacing.xs` `4`. Same-hex: `#ffffff` on-primary ≠ canvas; `#215db0` link ≠ card.fg; card `oklch` ≠ canvas.

## 2 Unique facts

`founded in 2003` SRC 1 / DES 1. `protecting civil liberties` 1/1. `critical data problems` SRC 1 / SIB 0 / DES 1 (sibling `critical data issues` SRC 0 / DES 0). `data, decisions, and operations` 1/1. `v6.x` SRC 2 / DES 3. `Apache 2.0` 1/1. `112 recorded uses` 1/2. `1440×900` 1/3 (`1440x900` all 0). `not mobile-first` 2/4. `blueprint-icons-16` / `-20` / `codicon` each SRC 1 / DES 2. `-apple-system` 1/3. Voice samples byte-exact: `A React-based UI toolkit for the web.` 1/1; `Optimized for building complex data-dense interfaces.` 1/1; `The Best Idea Wins.` 1/1. `twelve detected variants` 1/1. `4px 16px` 1/2. `4px 8px` 1/1. `122px high with 20px padding` 1/1. `white card/canvas samples` 1/1 (Scope, original attribution). `sparse entry moment` / `information-heavy reference views` / `rather than a global rule` / `broad button-state system` each 1/1.

## 3 Constraints / motion

§15 sentence `The supplied evidence contains no duration, easing curve, transition, animation, or reduced-motion observation` SRC 1 / DES 1. `No motion token or animation recommendation is created` 1/1. `expanded snapshot, not timing` 1/1. `cubic-bezier` DES 0. `200ms` / `300ms` / `ease-in` / `tokens.motion` all DES 0. Don'ts and §5/§8 bounds present (`authenticated-application layout` DES 2; `No modal, toast, overlay, blur, or focus-ring effect is claimed` DES 1).

## 4 Ungrounded surface

Landing vs Docs kept on the source's observations (`filled landing action` primary; Docs canvas = expanded version menu). `Foundry` / `Gotham` / `Apollo` / `AIP` / `fin.ai` / `storefront` / `mobile app` / `native-client` all DES 0. `authenticated Palantir platform` SRC 0 / SIB 1 / DES 0 / PRO 2 (mention).

## 5 Conflict policy

Same-hex and same-number collisions are unmerged throughout; no mix of merge-one / drop-one.

## 6 F2 list after F3

F3 raised closes 24→26. Portable `derived editorial implementation inference` DES 26, `not Palantir-authored` DES 26, `including the published Blueprint documentation` DES 26. Log `Inventory rows = 26` LOG 1; `24 data rows` LOG 0 (AUD 2 is the audit's before-state). Dest rows F3 rewrote still match (shadow string DES 2 / PRO 0; `.font` DES 3 / PRO 1; `4px 16px` DES 2 / PRO 3).

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 two archetypes. Portable body does not carry goals/needs.

| needle | SRC | DES | PRO | LOG |
|---|---:|---:|---:|---:|
| Desktop React application developer | 1 | 0 | 0 | 0 |
| documented component surface | 1 | 0 | 0 | 0 |
| implementation guidance | 1 | 0 | 0 | 0 |
| information-heavy internal or public application | 1 | 0 | 0 | 0 |
| reference-reading needs | 1 | 0 | 0 | 0 |
| authorization model | 1 | 0 | 0 | 0 |
| Their need is | 1 | 0 | 0 | 0 |
| Team maintaining | 1 | 0 | 0 | 0 |

Primary tasks are surface reads (`https://blueprintjs.com/` / Docs), not those needs. Audience names the two captured surfaces; `affiliation` / `motivation` appear only as unidentified field-kind in the drop sentence (D2a).

## 8 C2

No per-control applicability map. `loading | applicable` DES 0 (this review mentions the needle; DESIGN dest 0). `error | applicable` DES 0 (same). `Kind: interactive` DES 0. Card: `Kind: non-interactive` + no map (C4); measured actions `not in the token set` + no map. Version-selector is not opened on loading while closed on error. `toggle` DES 0.

## 9 Sibling fusion

`measures 1440px` SRC 0 / SIB 0 / DES 0. `14px radius with 16px padding` all 0. `16px / 400` SRC 0 / SIB 2 / DES 0 / PRO 1 (sibling landing-action extra; ledger only). `187px` SRC 0 / SIB 1 / DES 0 / PRO 1. `rgba(255, 255, 255, 0.7)` SRC 0 / SIB 1 / DES 0 / PRO 1. `Own The Outcome` / `Focus on the Mission` DES 0 / PRO 1. Layout `40px / 30px actions` is the source's two landing heights, not a new geometry.

`corners 0/4px with 30px rounding` SRC 0 / SIB 0 / DES 1 is YAML `rounded.sharp/control/round` + source §9 (`0/4px corners`; `30px rounding`) restated, not a sibling-fused measure.

## 10 Cross-surface assignment

Source distinctive `white card/canvas samples with #1c2127 text` remains in Scope (DES 1). Semantic color still records `#ffffff` canvas on the expanded Docs version menu (source §2). Spacing xs–lg home / xl docs stays in the provenance claim ledger; body copies source §5's Docs-density grouping of 4/8/12/16/20px, which the source already wrote.

## 11 YAML use vs § use

Long YAML `use` strings all DES 1:

- `Observed landing h1; computed operating-system stack, not a named Blueprint family`
- `Observed public Docs h1; computed operating-system stack, not a named Blueprint family`
- `Observed public Docs body paragraphs; computed operating-system stack, not a named Blueprint family`
- `Static public Docs welcome card; selector surface-2::div.bp6-card.bp6-elevation-0.bp6-interactive`

Shorter §4 `static public Docs welcome card at` also DES 1 (source §4). Both records kept; the short side was not chosen as a replacement.

REVIEW_DONE palantir PASS
