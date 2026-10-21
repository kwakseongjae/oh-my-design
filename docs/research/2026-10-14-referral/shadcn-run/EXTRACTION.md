# EXTRACTION.md — Step 3 working table (DESIGN.md: Toss)

Written before any edit. Source: `./DESIGN.md` (unchanged download). Sections read in full: frontmatter, Colors, Typography, Layout, Elevation, Motion, Components, Do's and Don'ts, Known Gaps. There is no "Iteration Guide" section; "Agent Prompt Guide" was read instead.

Two surfaces are documented and must stay separate: **TDS Mobile** (product, 56px/16px xlarge button) and **toss.im marketing** (40/46px, 7px radius).

| Extract | Value (verbatim from DESIGN.md) |
| --- | --- |
| Canvas and ink | canvas `#ffffff`; foreground (strongest text) `#191f28`; body (emphasized body) `#4e5968` |
| Action color + states | primary `#3182f6`; primary-hover / strong blue `#2272eb` (blue600); on-primary `#ffffff`; danger `#e42939` (red600). **Pressed:** `scale(0.96)`, fill unchanged. **Hover:** "produces no observable change on the official component page — the press feedback is geometric, not tonal". **Disabled / loading:** documented states, no values. |
| Secondary actions | TDS "weak" fill; marketing-primary = bg `#e8f3ff` (weak-background / blue50), text `#1b64da` (weak-foreground / blue700). Marketing-dark = bg `rgba(0, 12, 30, 0.8)`, text `#ffffff`. |
| Surfaces | surface `#f2f4f6` (grey100, "quiet neutral layer"); grey50 `#f9fafb`. No card / dialog / tab / toast recipe is defined ("Don't invent cards, shadows, tabs, toasts, or dialogs from generic fintech conventions"). |
| Lines | border `#e5e8eb` (grey200), "light divider or outline reference" |
| Focus | Button `:focus-visible`: `0 0 0 1px #8ac0ff, 0 0 0 3px #b8d9ff` (two-layer ring, no outline). Fields: not documented. |
| Type families | Toss Product Sans (brand, no redistribution right, not installable). Substitute: **none chosen**. Safe default (fallback, label as such): Noto Sans KR (Hangul), Noto Sans (Latin). Tossface: declared only, not a UI font. Monospace: none claimed. |
| Type scale | Tokens t1 30/40, st1 29/38, st2 28/37, st3 27/36, t2 26/35, st4 25/34, st5 24/33, st6 23/32, t3 22/31, st7 21/30, t4 20/29, st8 19/28, st9 18/27, t5 17/25.5, st10 16/24, t6 15/22.5, st11 14/21, t7 13/19.5, st12 12/18, st13 11/16.5 (size/line-height px, no weights, no tracking). Doc roles: H1 36/54 700, H2 30/45 600, H3 24/36 600, H4 22/33 600, Body 16/24 400, Body Small 14/21 400. Button text 17px/600 (xlarge), marketing 15px/600 and 17px/600. Rule: product code should not hard-code sizes (follows phone larger-text setting). |
| Radius scale | sm 4, md 6 (small surfaces); button-small 8, button-medium 10, button-large 14, button-xlarge 16; marketing buttons 7. Note: 7px is not on the scale. |
| Elevation | None. "No canonical shadow token is promoted... Use flat color layering." Motion: no duration/easing values. |
| Control heights | Button: small 32 / 8px radius; medium 38 / 10px; large 48 / 14px; xlarge 56 / 16px (documented default size); padding `0 20px` at xlarge. Marketing: 40px (padding 11px 16px) and 46px. Text field (box/line/big/hero): no heights, radius or colors given. Badge xsmall–large: no values. |
| Spacing | 4, 6, 8, 16, 24, 32 (measured clusters, not tokens). |
| Palette | grey, blue, red, orange, yellow, green, teal, purple, each 50–900 (80 values in frontmatter). |
| Hard rules | Don't use logo brand blue in place of `#3182f6`. Don't call Tossface the UI font. Don't copy documentation-site colors into product tokens. Don't merge the 16px TDS radius with the 7px marketing radius into an average. Don't invent cards, shadows, tabs, toasts or dialogs from generic fintech conventions. Do keep TDS and marketing variants named by surface. Do preserve loading, disabled, pressed and keyboard-focus states. Badges are status metadata, not actions. Mark anything not listed as an extension. |
| Known gaps | White on `#3182f6` = 3.71:1 (below 4.5:1), recorded as measured, not adjusted. No shadow/motion tokens. Font licence unresolved. Spacing/radius are clusters, not TDS tokens. 4 of 43 TDS components measured (Button, Badge, TextField, Agreement). Light-only (no dark mode defined). |

## Decisions taken from this table (carried into REPORT.md)

- Style already fixed by the user (`maia`); not re-picked.
- DESIGN.md is light-only, so `.dark` is derived from the grey/blue scales.
- Hover on the primary button is left unchanged, as the DESIGN.md says. `--primary-hover` is registered as a token only.
- Radius scale is pinned onto Tailwind steps so every component class resolves to a value from the scale; marketing 7px is applied only inside marketing button variants.
- All shadow tiers flattened, as the DESIGN.md says to use flat color layering.
- Fonts: no substitute exists, so Noto Sans / Noto Sans KR are installed as the documented safe default and the stack still lists Toss Product Sans first.
