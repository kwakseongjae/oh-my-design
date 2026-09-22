---
id: weibo
name: Weibo
country: CN
category: consumer-tech
homepage: "https://weibo.com"
primary_color: "#FF8200"
logo:
  type: simpleicons
  slug: sinaweibo
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    primary: "#ff8200"
    primary-hover: "#ff5900"
    accent-warm: "#eb7350"
    special: "#e14123"
    link-blue: "#507daf"
    logo-ink: "#231916"
    foreground: "#333333"
    icon-muted: "#838383"
    line-default: "#606060"
    disabled: "#cccccc"
    canvas: "#ffffff"
    page: "#f1f2f5"
    input-bg: "#f0f1f4"
    gray-4: "#f2f2f5"
    panel: "#f8f8f8"
    tag-hover: "#fff7f0"
    switch-off-border: "#e9e9e9"
    on-primary: "#ffffff"
  typography:
    base:      { size: 16, use: "Base reading size — the dominant size on the feed" }
    nick:      { size: 15, use: "Author name in a feed card header" }
    control:   { size: 14, use: "Input and secondary control text" }
    dense:     { size: 13, use: "Dense metadata" }
    caption:   { size: 12, use: "Annotations, picture tags, like counts" }
    micro:     { size: 10, use: "Smallest published step" }
  spacing: { control-y: 9, control-x: 15 }
  rounded: { sm: 4, input: 8, pill: 36, circle: 9999 }
  components:
    button-search: { type: button, bg: "#ff8200", fg: "#ffffff", radius: 0, padding: "9px 15px", font: "20px / 500", hover: "#ff5900", pressed: "#ff5900", use: "Top-bar search submit — 48px tall, square, the largest control on the page." }
    button-primary-pill: { type: button, bg: "#ff8200", fg: "#ffffff", radius: 36, padding: "9px 15px", font: "14px / 500", hover: "#ff5900", pressed: "#ff5900", use: "Sign-in / register call to action — 34px tall pill." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: home, kind: product-surface, url: "https://weibo.com/", inspected: "2026-09-22" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://weibo.com/", captured: "2026-09-22" }
    - { id: open-platform, kind: product-surface, url: "https://open.weibo.com/", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.accent-warm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.special: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.link-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.logo-ink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.icon-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.line-default: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.page: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.input-bg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-4: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.panel: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.tag-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.switch-off-border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.on-primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.nick.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.nick.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.control.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.control.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.dense.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.dense.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.micro.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.micro.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.control-y: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.control-x: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.input: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.rounded.circle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary-pill.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary-pill.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary-pill.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary-pill.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary-pill.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary-pill.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary-pill.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary-pill.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary-pill.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
---

# Design System Inspiration of Weibo (微博)

## 1. Visual Theme & Atmosphere

Weibo is China's public square. Launched by Sina in 2009 as 新浪微博, it became the country's
dominant microblogging platform and, more than that, the venue where public discussion,
celebrity culture and breaking news happen in the open — a role closer to a national
noticeboard than to a friends-and-family feed.

The interface is built for **density and turnover**. A logged-out home page is a stacked feed
of cards on a cool grey wash, and almost everything on it is text at one size: of roughly two
thousand elements sampled, **921 render at 16px**. Weibo does not build hierarchy by scaling
type up. It builds it by *weight, colour and enclosure* — a white card lifted off `#f1f2f5`,
an author name a single step larger at 15px, metadata dropped to 12px and grey.

Against that grey-on-grey field the brand does one loud thing: **orange**. `#ff8200` appears
as the search submit, the sign-in pill, the active link rule — and essentially nowhere else.
It is a wayfinding colour, not a decorative one. The 2009-era Sina wordmark ink (`#231916`,
a warm near-black) still sits in the top navigation, a holdover that dates the brand honestly.

### Primary tasks
- Scan a dense, continuously refreshing feed without losing your place.
- Recognise instantly which element is the action — orange means "press this".
- Move between topic surfaces (超话 super-topics, hot search, video) that share one chrome.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `weibo.com`. The page resolves **473 custom
properties, of which 309 are Weibo's own** — `--w-*` (190), `--feed-*` (50), `--weibo-*` (44),
`--chaohua-*` (15, 超话 / super-topic) and `--vote-*` (10). Weibo's own token name is given
beside each role.

### Brand

- **Weibo Orange** (`#ff8200`) — `--w-b-flat-primary-bg`, `--w-color-orange-1`,
  `--w-b-line-primary`. The single brand action colour.
- **Orange Pressed** (`#ff5900`) — `--w-b-flat-primary-bg-hover`, `--w-color-orange-2`.
  **The rendered hover state and the named token agree exactly** — measured on both controls.
- **Warm Accent** (`#eb7350`) — `--w-color-orange-3`, also `--w-alink`. A softer orange used
  for inline links rather than for actions.
- **Special** (`#e14123`) — `--w-special`. A red-orange reserved for emphasis.
- **Logo Ink** (`#231916`) — `--weibo-top-nav-logo-color`. The wordmark's warm near-black.

### Text and line

- **Foreground** (`#333333`) — `--w-option-color`, `--w-source-input-color`. Body and option text;
  the most painted colour on the page (843 of ~2,000 sampled elements).
- **Icon Muted** (`#838383`) — `--w-fonticon`.
- **Line Default** (`#606060`) — `--w-b-line-default`.
- **Disabled** (`#cccccc`) — `--w-disabled`, `--w-radio-border`.
- **Link Blue** (`#507daf`) — `--w-link-blue`. Note the palette carries **two link colours**:
  this blue and the warm `#eb7350`.

### Surface

- **Canvas** (`#ffffff`) — `--w-card-background`, `--w-b-flat-primary`. Every feed card.
- **Page** (`#f1f2f5`) — the body wash the cards sit on.
- **Input** (`#f0f1f4`) — `--w-input-background`, `--w-color-gray-6`. Also the search-bar border.
- **Gray 4** (`#f2f2f5`) — `--w-color-gray-4`.
- **Panel** (`#f8f8f8`) — `--w-source-panel-background`.
- **Tag Hover** (`#fff7f0`) — `--w-history-tag-hover-background`. A barely-tinted orange wash;
  the only place the brand hue appears as a *background* rather than a fill.
- **Switch Off Border** (`#e9e9e9`) — `--w-switch-off-border-color`.

### Not Weibo's

`weibo.com` also resolves `--vc-*` (41), `--vs-*` (39) and a block of
`--color-prettylights-syntax-*` / `--fgColor-*` / `--borderColor-*` properties. Those last are
**GitHub's syntax-highlighting theme**, arriving through an embedded third-party stylesheet.
They are not recorded here, and a frequency-based extraction would have taken them.

## 3. Typography Rules

### Font Family

**Weibo ships no brand typeface, and the observation needs care.** The body stack computes
verbatim as:

`QuoteFallback, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif`

The leading `QuoteFallback` is a **deliberately non-existent family** — a sentinel used so
quotation glyphs fall through to a chosen face — so body text resolves to the **OS UI font**.
`tokens.typography.family` is therefore **absent** rather than filled: a system stack is not
promoted to a brand face. (pixiv uses the same trick with `win-bug-omega`.)

### Scale

`--w-base-font-size` is `16`, and the rendered distribution confirms it dominates:

| Role | Size | Count in sample | Weibo token |
|---|---|---|---|
| Base | 16px | **921** | `--w-base-font-size` |
| Nick | 15px | 76 | `--feed-head-nick-font-size` |
| Control | 14px | 105 | `--w-input-font-size` (`.875em`) |
| Dense | 13px | 51 | — |
| Caption | 12px | 227 | `--feed-annotation-font-size`, `--feed-picture-tag-font-size`, `--w-like-font-size` (`.75em`) |
| Micro | 10px | 154 | — |

Six steps, and the shape is unusual: **16px and 12px carry nearly everything** (1,148 of the
sample between them). There is no display size on the logged-out home at all — the largest
observed is 22px, used 14 times.

### Principles
- **One reading size.** 16px is the feed. Hierarchy comes from card edges and colour.
- **Metadata collapses hard.** The step from content (16px) to annotation (12px) skips 14 and
  13 in the feed body; those sizes live in controls, not in posts.
- **Relative units inside controls.** `--w-input-font-size: .875em` and
  `--w-like-font-size: .75em` are expressed against the 16px base rather than in pixels.

## 4. Component Stylings

### Buttons

Measured live with the pointer parked between readings and navigation suppressed, so
`:active` could be read in place.

| Control | Rest | Hover | Pressed | Geometry |
|---|---|---|---|---|
| **Search submit** | `#ff8200` fill, `#ffffff` text | **`#ff5900`** | **`#ff5900`** | 48px tall, **0px radius**, `9px 15px`, 20px/500 |
| **Sign-in pill** | `#ff8200` fill, `#ffffff` text | **`#ff5900`** | **`#ff5900`** | 34px tall, **36px radius**, `9px 15px`, 14px/500 |

Both share one contract — `--w-b-flat-primary-bg` → `--w-b-flat-primary-bg-hover` — and
**pressed does not darken further**: hover and pressed are the same value. Focus produced no
computed change on either.

The two differ in *shape*, not colour: the search submit is a hard rectangle butted against
the search field, the sign-in a full pill. Weibo uses geometry, not hue, to separate a
utility action from an account action.

### Radius scale

- **4px** — `--w-border-radius`, the default (23 occurrences).
- **8px** — `--w-input-radius` (`.5em`), inputs and dialogs (`--w-dialog-radius: .5rem`).
- **36px** — the sign-in pill.
- **50%** — avatars, the most common rounded value on the page (35 occurrences).
- **2em** — `--w-switch-radius`.

### Not measured

Feed cards, the composer, super-topic chrome, the video player and every authenticated
surface. The logged-out home renders a sign-in wall over most of the product, so only the two
controls above were observable. They are declared; nothing else is.

## 5. Layout Principles

- **Top navigation is 60px** — `--weibo-top-nav-height`; its icon hover target is
  `70×38px` (`--weibo-top-nav-icon-hover-width` / `-height`).
- **Cards on a wash.** White cards on `#f1f2f5`, separated by gap rather than by rule.
- **Control padding is `9px 15px`** on both measured buttons — a wider-than-tall rhythm that
  suits dense Chinese text.

## 6. Depth & Elevation

> **Not measured.** No shadow or elevation token appears among the 309 Weibo properties, and
> no shadow was observed on the two measured controls. Weibo separates surfaces with fill and
> gap. Nothing is claimed here.

## 7. Do's and Don'ts

### Do
- Use `#ff8200` for the action and nothing else — its scarcity is what makes it read.
- Keep body text at 16px and drop straight to 12px for metadata.
- Separate surfaces with a white card on `#f1f2f5`, not with borders or shadow.
- Let shape distinguish action types: rectangle for utility, pill for account.

### Don't
- Don't treat `#eb7350` or `#507daf` as the brand colour — they are link hues.
- Don't add a hover *and* a distinct pressed shade; Weibo uses one value for both.
- Don't promote the system font stack to a brand typeface; `QuoteFallback` is a sentinel.
- Don't sample `--color-prettylights-*` or `--fgColor-*` — that is GitHub's theme, embedded.

## 8. Responsive Behavior

**Not measured.** Only the 1440×900 desktop viewport was captured. Weibo's mobile surface is
a separate application (`m.weibo.cn`) and was not inspected.

## 9. Agent Prompt Guide

### Quick Color Reference
`#ff8200` action · `#ff5900` action pressed · `#333333` text · `#838383` muted icon ·
`#ffffff` card · `#f1f2f5` page · `#f0f1f4` input · `#231916` wordmark

### Example Component Prompts
- "A 34px sign-in pill, `#ff8200` on white, 36px radius, 14px/500 white label, darkening to
  `#ff5900` on hover and press."
- "A dense feed card: white on `#f1f2f5`, 16px body in `#333333`, 12px `#838383` metadata."

## 10. Voice & Tone

Public, immediate, compressed. Weibo's own chrome uses two-character verbs — 搜索 (search),
登录 (sign in) — and the interface does not explain itself. Copy assumes the reader already
knows the platform.

## 11. Brand Narrative

Sina launched 新浪微博 in August 2009, months after Twitter had been blocked in China, and it
grew into the country's principal open-posting platform. The company separated Weibo as its
own listed entity in 2014. The product's visual identity has stayed conservative through that
whole arc: the warm near-black wordmark ink `#231916` still in the navigation is a direct
carry-over from the Sina era, and the orange has never moved.

## 12. Principles

- **Density over comfort.** One reading size, tight metadata, cards packed edge to edge.
- **Colour is a signal, not decoration.** One orange, used only where action is possible.
- **The chrome recedes.** Grey wash, grey text, white cards; the content supplies the colour.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Only hover and pressed were observed, on two controls, and they are identical (`#ff5900`).
Focus produced no computed change. Disabled exists as a token (`--w-disabled: #cccccc`) but
was not observed on a rendered control, so no disabled component is declared.

## 15. Motion & Easing

**Not measured.** No transition or duration token appears among the 309 Weibo properties.

---

**Tier 1 sources:** https://weibo.com/ (live production home, 473 custom properties of which 309 are Weibo's own, read via `getComputedStyle`; both measured controls and their hover/pressed states, 2026-09-22); https://open.weibo.com/ (Sina Weibo Open Platform — Weibo's own developer surface, confirming brand ownership; its chrome is a separate domain and **not** cited for product tokens, see the verification notes)
