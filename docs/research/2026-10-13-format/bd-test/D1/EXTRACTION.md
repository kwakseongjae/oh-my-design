# Extraction working table (Step 3)

Source: `DESIGN.md` (Toss). Read in full: frontmatter, Foundations, Typography, Components & States, Do's and Don'ts, Known Gaps. The file has no "Iteration Guide" section.
Surface choice: the app is product UI, so **TDS Mobile** geometry is used. `toss.im` marketing geometry (7px radius, 40/46px heights) is not blended in.

| Extract | Value from DESIGN.md |
| --- | --- |
| Canvas and ink | canvas `#ffffff`; foreground/ink `#191f28`; body `#4e5968`; muted `#8b95a1`; surface `#f2f4f6` |
| Action color + states | primary `#3182f6`; primary-hover/strong blue `#2272eb`; on-primary `#ffffff`; states documented: loading, disabled, pressed, keyboard focus (no disabled/pressed color values given) |
| Secondary actions | no TDS `button-secondary` recipe. The only "weak" pair is `#e8f3ff` fill / `#1b64da` text (marketing CTA; TDS says fill or weak variants exist) |
| Surfaces | surface `#f2f4f6` (quiet neutral layer); no card, dialog or dark-surface recipes ("Don't invent cards, shadows, tabs, toasts, or dialogs") |
| Lines | border `#e5e8eb`; width not stated (assume 1px) |
| Focus | no color, width or offset documented, only "keyboard focus" as a required state |
| Type families | Toss Product Sans (brand, not installable); substitute: none chosen; safe defaults Noto Sans KR (Hangul) and Noto Sans (Latin), to be labeled as fallbacks; mono: none; Tossface declared-only (not used) |
| Type scale | h1 36/700/54px; h2 30/600/45px; h3 24/600/36px; h4 22/600/33px; body 16/400/24px; body-small 14/400/21px; xlarge button text 17/600; no tracking rules |
| Radius scale | 4px and 6px (small surfaces, default 6px); button small 8, medium 10, large 14, xlarge 16; marketing 7px (not used) |
| Elevation | none promoted. "Use flat color layering." |
| Control heights | button xlarge 56 / large 48 / medium 38 / small 32; padding `0 20px` at xlarge; text field has no documented height; xlarge is the documented default button size |
| Spacing | working clusters 4, 6, 8, 16, 24, 32px; no official scale (nothing declared as tokens) |
| Danger | `#e42939` |
| Dark mode | none documented |
| Hard rules | Don't use logo blue instead of `#3182f6`; don't present Tossface as UI font; don't copy docs-site colors into product tokens; don't average 16px TDS radius and 7px marketing radius; don't invent cards, shadows, tabs, toasts, dialogs from generic fintech conventions; don't present a fallback face as Toss Product Sans. Do: keep surfaces named, preserve loading/disabled/pressed/keyboard-focus, badge is status metadata not an action, use exact geometry only where evidence names it |
| Known gaps | white on `#3182f6` is 3.71:1 (recorded as measured, not adjusted); no spacing scale; no shadow or motion values; font license unresolved |

## Planned mapping decisions

- **Style**: preset already scaffolded as maia (soft, generous). Toss controls are 48-56px with 14-16px radii, which maia's geometry roughly fits. The style is kept and the geometry is pinned in the theme/component edits.
- **Control heights** (Toss to shadcn size): xs 32 (small), sm 38 (medium), default 48 (large), lg 56 (xlarge). Fields use 48 to match the default button.
- **Radius pins**: sm 4, md 6, lg 8, xl 10, 2xl 14, 3xl 16, 4xl 16. No pill radius, because none is documented.
- **Elevation**: all shadows flattened. Separation comes from the rings/borders already in the components.
- **Fonts**: `Toss Product Sans` first in the stack, then Noto Sans / Noto Sans KR variable from Fontsource as labeled fallbacks.
- **Focus**: nothing documented. Keep shadcn's ring pattern (ring color is primary blue).
- **Dark**: derived, since the DESIGN.md is light-only.
- **Pressed**: `#2272eb` is registered as `--primary-hover` and `--primary-active`.
