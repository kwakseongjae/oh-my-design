---
name: omd-brand-look
description: |
  Repaint one screen with the measured tokens of verified real-company references (verified_v2 only),
  render it at 1440·1024·768·390 in a real browser, and report rule-by-rule PASS/FAIL with the cause of
  each FAIL. Output: per-brand themed copies, a same-screen × N-brands grid, 4:5 Threads cards and
  report.md. It never invents a value: every slot is a declared frontmatter value, an unfillable slot is
  omitted (the user's own variable stays), and fonts carry the G3 labels (brand face / substitute — not
  the brand face / safe default (not the brand face)). It does not edit the user's source, render logos,
  or bootstrap DESIGN.md (that is omd-init). MVP: the shipped sample screen only.
  트리거: "/omd-brand-look", "브랜드 룩으로 칠해 봐", "토스·당근·Linear 룩으로 비교",
  "같은 화면 다섯 브랜드", "repaint this screen in Toss / Linear / Apple look", "brand look grid".
x-omd-channels: claude-code codex opencode
metadata:
  internal: true
  author: 곽성재
  version: "0.1.0"
---

# omd-brand-look

Design: `docs/SKILL_BRAND_LOOK_DESIGN_2026-11-09.md` (decisions D1–D8, token mapping §3, checks §4, grid §5).
Internal until the W2 launch: not in `package.json` "files", not counted on llms / cli-docs / faq.

## What it promises, and what it does not

- **Measured values only.** Every CSS variable it writes is a string declared in a verified_v2
  reference's `DESIGN.md` frontmatter (`colors.*`, `rounded.*`, `components.*.*`, `typography.body.fontFamily`),
  with its source path in a comment (`/* colors.canvas */`). No palette steps, hover shades or tints.
- **Omit, don't fill.** A slot no declared key can fill is left out, so the screen keeps its own value; the
  omitted list is printed and counted in the grid caption. Omission can create a FAIL; that FAIL is
  reported as `mapping`, never patched with an invented value. A surface and the text copied onto it go
  together: when `--card` / `--popover` / `--secondary` / `--accent` is omitted, its `*-foreground` is
  omitted too (the reference declares its foreground for its canvas, not for a surface it never declared;
  writing half the pair drew light text on the screen's white cards for Linear).
- **verified_v2 only** (`data/reference-quality.json`). A partial or legacy id exits 3 with the reason.
- **Fonts follow G3.** Four cases, each labelled wherever the face is named or rendered: A public brand face
  (loaded as itself), B measured substitute ("substitute — not the brand face"), C OS system family per the
  reference, D no substitute ("safe default (not the brand face)", Noto Sans KR/JP/TC/SC). A private brand
  face is referenced by name only, never bundled.
- **Not a brand clone.** No logos, wordmarks, illustrations or brand copy. Company names appear only as
  caption text. No "official" / "Toss theme" wording.
- **Never edits the user's source.** Each brand gets a copy of the target with one
  `<style data-omd-brand-look>` block (`:root:root { … }`, specificity 0,2,0) before `</head>`.

## Run

Needs Node ≥ 18 and playwright-core (`PW_CORE=<dir containing node_modules/playwright-core>`; inside the
oh-my-design repo that is `web`). Fonts load from Google Fonts / jsDelivr / rsms.me, so the run needs network.

```bash
# 1. tokens only (no browser): one reference -> shadcn variable block
node skills/omd-brand-look/scripts/tokens.mjs toss                 # --format auto|hex|hsl, --lang ko|ja|zh-TW|zh-CN|en, --json, --assign

# 2. repaint + shoot + grid + Threads cards
PW_CORE=$PWD/web node skills/omd-brand-look/scripts/look.mjs --sample toss karrot baemin linear.app apple \
  --out .omd/brand-look/<run-id>

# 3. checks -> report.md / report.json in the same folder
PW_CORE=$PWD/web node skills/omd-brand-look/scripts/check.mjs .omd/brand-look/<run-id>
```

`look.mjs` options: `--widths 1440,1024,768,390`, `--lang ko`, `--card id,id,id,id,id` (repeatable; one
1080×1350 card of 390px columns per set, default = all brands), `--assign` (apply the reassignment
suggestions; off by default, design doc §7 Q3).

## Output

```
<out>/
  run.json                      inputs, brands, widths, engines, reference paths + verified_at, font checks
  baseline/shots/<w>.png        the sample before repainting
  <id>/tokens.css, tokens.json  tokens.mjs output (labels, omitted, contrast, suggestions)
  <id>/index.html               themed copy
  <id>/shots/<w>.png            first viewport at each width (deviceScaleFactor 2)
  grid.html, grid.png           rows = brands, columns = widths; captions are text only
  threads/01-390x<N>[-<n>].png  1080×1350 cards, the 390px column side by side
  report.md, report.json        written by check.mjs
```

## Checks (`check.mjs`)

| | Source | Verdict |
|---|---|---|
| C1 contrast | `test-v2/tools/text-contrast.mjs` (glyph pixels vs the background under them) at all four widths | any text element with > 5% of glyph pixels under 4.5:1 (3:1 large) FAILs; focus ring 3:1 |
| C2 broken words | `skills/hangul/scripts/break.mjs` `breakCheck` (`kind: broken`) | in a heading, button, label or badge: FAIL; in body prose: WARN (HG-10) |
| C3 layout | `breakCheck` spill / clip / sideways | any: FAIL |
| C5 palette fidelity | new | every painted colour must be a mapped value or a kept (omitted-slot) value; the primary button's fill must equal `--primary` (FAIL), other strays WARN, alpha mixes and shadcn radius offsets are "derived" WARN |
| C6 font fidelity | new (CDP `CSS.getPlatformFontsForNode`) | the face that actually painted Latin and Hangul must be the one the label names |

Every FAIL carries one cause:
- **inherited**: the reference itself declares the pair (the same `components.<x>` fill and text, or an
  `on-X` / `X` role pair, or a declared text colour on the declared canvas). brand-look reports it and
  leaves it as measured.
- **mapping**: our slot assignment made the pair, including a pair with an omitted side (the screen's own
  value kept next to a brand value).
- **layout**: C2 / C3, i.e. what the font swap did to line breaks and widths.

A pair whose two sides are both the screen's own values (both slots omitted), or a layout fault the unthemed
screen already has, is **screen** and only a WARN.

Fixes are only ever *suggestions* to reassign a slot to another declared colour of the same kind (danger for
`--destructive`, primary for `--primary`, canvas/surface for a surface, never the page canvas itself; rule in
`report.md`); nothing is lightened, darkened or mixed. `--assign` applies them.

## Not in the MVP

User HTML files and dev-server URLs (design doc L1/L2), component geometry such as the primary button's
height and pill radius (L3), restraint R3/R7 (C4), dark blocks (L5), public-font lookup by exact name (L6),
the `resolve.ts` key-list drift test (L7), `--pick 5 --task`, `--adopt`.
