# Toss sample — verification against the official TDS docs (2026-10-13)

Owner G2: "토스 샘플도 너가 자체적으로 확인해봐." Sample: `samples/toss/` (DESIGN.md, reference.json,
overlay.yaml). Official docs: the Apps-in-Toss design overview
(https://developers-apps-in-toss.toss.im/design/components) links every component to TDS Mobile at
`https://tossmini-docs.toss.im/tds-mobile/`, which is where the foundation and component pages live.

Method: WebFetch only. No browser, no Aside, not the owner's session. 34 pages read. The colour and
typography values were read twice, independently, and agreed digit for digit. WebFetch summarises
pages through a small model, so only values (hex, numbers, prop enums) are relied on, not English
phrasing.

## Result in one paragraph

Nothing in the sample conflicts with the docs. Every role colour sits on an official palette step.
The docs state far fewer numbers than the sample has: no button, field or badge heights, no radii, no
spacing scale, no pressed or focus values, no numeric font weights. Those sample values come from
computed-style captures of the official component pages, which the docs neither confirm nor
contradict, so they stay with their existing claims and a Known Gap saying where they come from. The
docs do publish two things the sample lacked, the full colour palette and the TDS type scale. Both are
added: 80 colours and 20 type roles, with 120 new claims citing the official pages.

## Table

Abbreviations: **colors page** = https://tossmini-docs.toss.im/tds-mobile/foundation/colors/,
**typography page** = https://tossmini-docs.toss.im/tds-mobile/foundation/typography/,
**button page** = https://tossmini-docs.toss.im/tds-mobile/components/button/. Source dates are the
read date unless the column says otherwise.

| Field | Sample | Official doc | Decision | Source |
|---|---|---|---|---|
| `colors.primary` | `#3182f6` | blue500 `#3182f6` | keep (match) | colors page |
| `colors.primary-hover` | `#2272eb` | blue600 `#2272eb`; "hover" role not named by the docs | keep (value matches; role from the 2026-07-11 capture) | colors page; claim `tds-button-live` |
| `colors.weak-background` | `#e8f3ff` | blue50 `#e8f3ff` | keep (match) | colors page |
| `colors.weak-foreground` | `#1b64da` | blue700 `#1b64da` | keep (match) | colors page |
| `colors.foreground` | `#191f28` | grey900 | keep (match) | colors page |
| `colors.body` | `#4e5968` | grey700 | keep (match) | colors page |
| `colors.muted` | `#8b95a1` | grey500 | keep (match) | colors page |
| `colors.surface` | `#f2f4f6` | grey100 (also `greyBackground`) | keep (match) | colors page |
| `colors.border` | `#e5e8eb` | grey200 | keep (match) | colors page |
| `colors.canvas`, `on-primary` | `#ffffff` | `background` `#FFFFFF` | keep (match) | colors page |
| `colors.danger` | `#e42939` | red600 `#e42939`; red500 is `#f04452`; docs do not name a danger step | keep; prose says red600 is the step observed on the button page | colors page; claim `tds-button-live` |
| palette `grey50`–`grey900`, `blue50`–`blue900`, `red50`–`red900`, `orange*`, `yellow*`, `green*`, `teal*`, `purple*` | absent | 8 scales × 10 steps, hex stated | **added** (80 colours, 80 claims, `method: official-doc`) | colors page, 2026-10-13 |
| `greyOpacity50`–`900` | absent | base colour + alpha | not added: the alpha form could not be confirmed verbatim | colors page |
| `typography.h1`–`h4` | 36/54 700, 30/45 600, 24/36 600, 22/33 600 | not TDS tokens; the type scale is t1–t7 / st1–st13 | keep, **labelled by surface**: computed styles of the TDS documentation pages (claim surface `tds-button`), not the product scale. Prose says so | 2026-07-11 capture; typography page |
| `typography.body`, `body-small` | 16/24 400, 14/21 400 | st10 16/24, st11 14/21 | keep (sizes and line heights match the sub tokens) | typography page |
| `typography.t1`–`t7`, `st1`–`st13` | absent | t1 30/40, st1 29/38, st2 28/37, st3 27/36, t2 26/35, st4 25/34, st5 24/33, st6 23/32, t3 22/31, st7 21/30, t4 20/29, st8 19/28, st9 18/27, t5 17/25.5, st10 16/24, t6 15/22.5, st11 14/21, t7 13/19.5, st12 12/18, st13 11/16.5 | **added** as `fontSize` + `lineHeight` (40 claims). No `fontWeight`: the page gives weight names only | typography page, 2026-10-13 |
| font weights | 400 / 600 / 700 on roles | Light, Regular, Medium, Semibold, Bold — names only | keep sample weights (computed); none added to t/st roles | typography page |
| font family | `Toss Product Sans` (`fonts.roles.sans`) | typography page names none; design-prep page: product uses Toss Product Sans, Figma kit uses SF Pro because the font is not distributable | keep (consistent); `distribution: none-asserted` stays | https://developers-apps-in-toss.toss.im/design/prepare/design.md |
| `spacing.xs`–`xxl` | 4/6/8/16/24/32 | **no spacing scale exists**; only per-component values (Border padding24 = 24px, Top gaps 24, BottomSheet ctaContentGap 34px, BottomCTA 20px) | **keep** (sourced: frequency clusters in the 2026-07-11 docs-page capture, which ranks 8, 6, 4, 16, 24, 32 highest) and state in Known Gaps that they are documentation-page clusters, not TDS tokens. No value change | 2026-07-11 capture; foundation pages |
| `rounded.sm`, `md` | 4px, 6px | no radius tokens | keep (capture clusters 4 and 6); same Known Gap | 2026-07-11 capture |
| `rounded.button-small`…`xlarge` | 8/10/14/16px | button page states no radius | keep (rendered official component) | 2026-07-11 capture |
| `tds-button.height` | 56px | sizes small/medium/large/xlarge, default xlarge; no heights | keep (xlarge rendered height; the `use` already says xlarge) | button page |
| `tds-button.padding`, `typography` | `0 20px`, `17px / 600` | not stated | keep (capture) | 2026-07-11 capture |
| `tds-button.pressed` | `scale(0.96)`… | CSS variable names only (`--button-pressed-opacity`, `--button-pressed-background-color`), no values | **keep** (sourced: 2026-09-17 computed-style capture `tds-button-states`); Known Gap says the value is captured, not documented | button page; claim `tds-button-states` |
| `tds-button.focus` | `0 0 0 1px #8ac0ff, 0 0 0 3px #b8d9ff` | no focus ring stated | **keep** (same capture); same Known Gap | claim `tds-button-states` |
| `tds-button.states` | fill/weak; primary/danger/light/dark; loading, disabled, pressed, focus | variant fill/weak; color primary/danger/light/dark; loading (three dots, width kept); disabled | keep (match) | button page |
| `text-field.states` | box, line, big, hero; focus, error, disabled, read-only | variant box/line/big/hero; hasError; disabled | keep (match) | https://tossmini-docs.toss.im/tds-mobile/components/TextField/text-field/ |
| `badge.states` | fill/weak; xsmall–large; semantic colours | size xsmall/small/medium/large; variant fill/weak; colour blue/teal/green/red/yellow/elephant | keep (match); no numbers in the docs | https://tossmini-docs.toss.im/tds-mobile/components/badge/ |
| `agreement.states` | checked/unchecked/disabled, nested | AgreementV4 header/checkbox/badge/necessity variants | keep (match) | https://tossmini-docs.toss.im/tds-mobile/components/Agreement/v4/ |
| `marketing-primary`, `marketing-dark` | toss.im computed values | not covered by TDS (different surface) | keep, already labelled toss.im marketing | claim `toss-live` |
| Other documented values: Checkbox size 24, IconButton iconSize 24, Toast 3000/5000 ms, BottomSheet gap 34px, canvas width 375px, no dark mode | absent | stated | not added: no matching component or token slot in the sample, and adding components from prop defaults would be interpretation. Listed for a later capture pass | component pages |

## Value changes this makes (intended, toss only)

- `colors`: 12 → 92 (80 palette steps appended after the existing roles; existing values unchanged).
- `typography`: 6 → 26 roles (20 appended; existing roles unchanged).
- Claims: 81 → 207: 120 official-doc claims, plus 6 for the per-role `fontFamily` stacks the Phase 1
  sample already carried without a claim. Those six cite the existing 2026-07-11 capture
  (`tds-button-live`), which records Toss Product Sans as the first family on every captured type
  role (715 of 715 occurrences); without them the catalog tier engine reads toss as `partial`
  (`claim_evidence_missing`). `verification_v2.sources` 10 → 12 and `surfaces` 9 → 11 (two
  foundation pages), and `verification_v2.checked` 2026-07-11 → 2026-10-13, because an observation
  may not postdate the check that accepted it. The evidence ledger moves by +2 sources
  (1,845 → 1,847). Toss stays `verified_v2`.
- The Colors prose carries the full palette as a table, so every palette token is grounded in the
  body (the catalog's colour-grounding gate).
- No existing value is changed or removed. Spacing, radii, pressed and focus stay; two Known Gaps
  state where they come from.
- Lint: 0 errors, 110 warnings (89 `orphaned-tokens`, from palette steps not bound to a component —
  a fact catalog's expected warning, not gated; 20 extension properties; 1 contrast 3.71:1, in Known
  Gaps).

One converter fix rides along: Phase 1 re-keyed every `lineHeight` claim as `prose:` because it looked
the value up as `undefined`. Claims now re-key against the actual token value, so toss's and stripe's
numeric line heights keep plain `typography.<role>.lineHeight` claim keys (baemin's `normal` stays
`prose:`).

Reproduce: `node scripts/design-md-v3/run-samples.mjs` (toss: comparator OK, 85 legacy leaves, 126
listed overlay additions — 80 colours, 40 type values and the 6 per-role `fontFamily` stacks).
The catalog file `web/references/toss/` is this sample, byte for byte (converted 2026-10-14);
`web/references/toss/.omd/system/` stays as the archived Core v2 package.
