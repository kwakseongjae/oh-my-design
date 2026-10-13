# EXTRACTION (Step 3) — DESIGN.md "Toss"

Read in full: frontmatter, Colors, Typography, Elevation, Shapes, Components, Do's and Don'ts, Known Gaps. There is no "Iteration Guide" section. Two surfaces are kept separate: **TDS Mobile** (product) and **toss.im marketing**.

| Extract | Value from DESIGN.md |
|---|---|
| Canvas and ink | canvas `#ffffff`; foreground `#191f28` (strongest text); body `#4e5968` (emphasized body / neutral action text); muted `#8b95a1` (secondary text) |
| Action color + states | primary `#3182f6`; primary-hover / "strong blue" `#2272eb`; on-primary `#ffffff`; pressed and disabled are named states but have no values. No `-active` or `-disabled` color. |
| Secondary actions | No `button-secondary` token. The only tinted fill is the "weak" pair `#e8f3ff` fill / `#1b64da` text (toss.im marketing CTA; TDS buttons also have a "weak" fill). Marketing dark: `rgba(0,12,30,0.8)` / `#fff`. |
| Surfaces | surface `#f2f4f6` (quiet neutral layer). No card recipe: "Don't invent cards, shadows, tabs, toasts, or dialogs". |
| Lines | border `#e5e8eb` (light divider or outline). Width not stated. |
| Focus | "keyboard focus" is a required state, but no color, width, offset or alpha is given. |
| Type families | Toss Product Sans (unlicensed, cannot be installed). Substitute: **none chosen**. Safe default: Noto Sans KR (Hangul) and Noto Sans (Latin), labelled as a fallback. Tossface: declared only, not a UI font. Mono: none claimed. |
| Type scale | h1 36/700/54px; h2 30/600/45px; h3 24/600/36px; h4 22/600/33px; body 16/400/24px; body-small 14/400/21px. Button text 17/600 (xlarge) and 15/600 (marketing). No tracking values. |
| Radius scale | sm 4, md 6 (default 6). Buttons: small 8, medium 10, large 14, xlarge 16 (TDS). Marketing: 7. "Don't merge 16px with 7px". |
| Elevation | None. "Use flat color layering." |
| Control heights | TDS: small 32, medium 38, large 48, xlarge 56 (xlarge padding `0 20px`). Marketing: 40 (`11px 16px`) and 46 (`11px 16px`). Text field geometry is not given. |
| Danger | `#e42939` |
| Spacing | 4, 6, 8, 16, 24, 32 captured; no official scale, so no tokens declared. |
| Hard rules | Keep TDS and marketing surfaces named separately. Don't use logo blue in place of `#3182f6`. Don't merge 16px and 7px radii into an average. Don't invent cards, shadows, tabs, toasts or dialogs from generic fintech conventions. Don't present a fallback face as Toss Product Sans. Don't copy doc-site colors into product tokens. Preserve loading / disabled / pressed / focus states. Badge is descriptive, not an action. Mark any unlisted component as an extension. Unknowns must be omitted, not replaced with plausible defaults. |
| Known gaps | White on `#3182f6` is 3.71:1 (below AA). No spacing, shadow or motion tokens. No dark mode. Only 4 of 43 TDS components are measured. |

## Decisions that follow

- Style: `maia` was already scaffolded and the task forbids re-running init. Its geometry (pill 4xl on controls) is overridden per component below.
- Dark mode is not defined, so `.dark` will be derived and flagged.
- Secondary slot: weak blue pair. Muted / accent slot: surface `#f2f4f6`.
- Radius classes will be pinned to DESIGN.md values. Controls move from `rounded-4xl` to the 10px step. Button radius varies by size.
- Elevation: flat. The whole shadow scale is zeroed.
