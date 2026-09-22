---
id: newspicks
name: NewsPicks
country: JP
category: consumer-tech
homepage: "https://newspicks.com"
primary_color: "#146AF5"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=newspicks.com&sz=128"
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "NewsPicks semantic tokens"
  url: "https://newspicks.com/"
  type: system
  description: "220 custom properties with no framework among them: an 84-step --palette-* ramp underneath four parallel semantic families named for what is being painted — surface 53, text 22, object 19, border 19 — each carrying role, emphasis and state. Beside them sit product families the product itself needs: a Premium green, an AI purple, a BookPicks cream, a read/unread pair, and a brand colour for each third-party sign-in."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    accent: "#146af5"
    accent-hover: "#0032ca"
    accent-inverse: "#4b9dfa"
    accent-surface: "#ebf3ff"
    accent-surface-hover: "#d6e6ff"
    foreground: "#222222"
    disabled: "#a3a3a3"
    canvas: "#ffffff"
    premium: "#00b357"
    premium-hover: "#007d3c"
    premium-surface: "#f0faf5"
    campaign-yellow: "#ffc800"
    ai: "#9b2cc1"
    bookpicks: "#f7f3eb"
    highlight: "#ffe86b"
    investment-gold: "#886c0f"
    caution: "#de3535"
    caution-hover: "#ab0000"
    recommend: "#ed5353"
    success: "#018a26"
    success-hover: "#044f20"
    success-surface: "#e8ffe8"
    caution-surface: "#fff0f0"
    caution-surface-hover: "#ffdbdb"
    unread: "#ebf3ff"
    unread-hover: "#d6e6ff"
    inverse-hover: "#474747"
    palette-blue-100: "#d6e6ff"
    palette-blue-400: "#4b9dfa"
    palette-blue-500: "#2986ff"
    palette-blue-700: "#0040e0"
    palette-gray-100: "#e6e6e6"
    palette-gray-500: "#616161"
    palette-gray-700: "#333333"
    palette-red-50: "#fff0f0"
    palette-red-100: "#ffdbdb"
    palette-red-400: "#fa7373"
    palette-red-700: "#d41717"
    palette-green-100: "#d0f2d0"
    palette-green-500: "#239e2f"
    palette-green-700: "#037020"
    social-facebook: "#0866ff"
    social-linkedin: "#2967b2"
    social-bizd: "#0081cc"
    social-apple: "#000000"
  typography:
    micro: { size: 10, use: "Timestamps and pick counts; 20 rendered elements" }
    caption: { size: 11, use: "The smallest label step" }
    base: { size: 12, use: "The page's default — 138 of 286 text-bearing elements, including every control label" }
    body: { size: 13, use: "Comment body" }
    reading: { size: 14, use: "Article summaries; 43 elements" }
    lead: { size: 16, use: "Headlines in the feed; 42 elements" }
    title: { size: 18, use: "Section titles" }
    heading: { size: 20, use: "The largest rendered step" }
  rounded: { xs: 2, sm: 4, md: 8, pill: 20, circle: 9999 }
  components:
    button-login: { type: "button", bg: "#ffffff", fg: "#222222", border: "1px solid #222222", radius: 4, height: "32px", padding: "0 12px", font: "12px / 400", hover: "rgba(34,34,34,0.05)", pressed: "rgba(34,34,34,0.05)", use: "ログイン — the outline action, 73×32. Hover and pressed wash the fill with ink at 5%, which is --surface-color-base-primary-hover exactly." }
    button-premium: { type: "button", bg: "#146af5", fg: "#ffffff", radius: 4, height: "32px", padding: "0 12px", font: "12px / 400", hover: "#0032ca", pressed: "#0032ca", use: "プレミアムを無料で体験 — the filled action, 160×32. Hover and pressed are --surface-color-accent-primary-hover; note the button is accent blue while the Premium product colour is the green #00b357." }
    tab-active: { type: "tab", bg: "#146af5", fg: "#ffffff", radius: 20, height: "40px", padding: "0 16px", font: "12px / 400", hover: "#146af5", pressed: "#146af5", use: "The selected feed tab (総合), 58×40 — a blue pill. Hover and pressed change nothing; the current tab does not respond to the pointer." }
    tab-inactive: { type: "tab", bg: "transparent", fg: "#222222", border: "1px solid #222222", radius: 20, height: "40px", padding: "0 16px", font: "12px / 400", hover: "rgba(34,34,34,0.05)", pressed: "rgba(34,34,34,0.05)", use: "An unselected feed tab (ワールド), 86×40 — outlined, and it takes the same 5% ink wash as the login button." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: home, kind: product-surface, url: "https://newspicks.com/", inspected: "2026-09-22" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://newspicks.com/", captured: "2026-09-22" }
    - { id: control-404, kind: product-surface, url: "https://newspicks.com/zz-this-does-not-exist", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.accent: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.accent-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.accent-inverse: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.accent-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.accent-surface-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.ai: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bookpicks: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.campaign-yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.caution: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.caution-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.caution-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.caution-surface-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.highlight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.inverse-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.investment-gold: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-blue-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-blue-400: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-blue-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-blue-700: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-gray-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-gray-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-gray-700: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-green-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-green-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-green-700: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-red-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-red-400: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-red-50: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.palette-red-700: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.premium: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.premium-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.premium-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.recommend: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.social-apple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.social-bizd: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.social-facebook: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.social-linkedin: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.success-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.success-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.unread: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.unread-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-login.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-premium.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-premium.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-premium.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-premium.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-premium.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-premium.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-premium.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-premium.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-premium.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-premium.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-active.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-active.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-active.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-active.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-active.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-active.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-active.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-active.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-active.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-active.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.tab-inactive.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.rounded.circle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.heading.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.heading.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.micro.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.micro.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.reading.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.reading.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.title.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.title.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
---
# Design System Inspiration of NewsPicks (ニューズピックス)

## 1. Visual Theme & Atmosphere

NewsPicks is a Japanese business-news platform where journalism sits next to expert
commentary. The surface is white, very dense — 19,523 characters on one screen — and set
almost entirely at **12px** (138 of 286 text-bearing elements). Ink is `#222222`, not black,
and it does nearly all the work: 176 elements at full strength and 99 more at an alpha.

The token set is the reason this reference is here. **220 custom properties and not one of
them belongs to a framework.** The architecture is the same one JAL uses — four parallel
families named for *what is being painted* — but NewsPicks carries it further:

```
--palette-<hue>-<step>        84   the raw ramp, five hues
--surface-color-<role>-…      53   fills
--text-color-<role>-…         22   labels
--object-color-<role>-…       19   glyphs
--border-color-<role>-…       19   lines
```

And then a layer that no framework would ever generate, because it is made of **this
product's own nouns**: a Premium green, an AI purple, a BookPicks cream, a read/unread pair,
and a brand colour for each third-party sign-in.

### Primary tasks
- Read the feed, switch between topic tabs, open a story and its picks.
- Sign in, or start a free Premium trial.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `newspicks.com`.

### Accent

- **Accent** (`#146af5`) — `--surface-color-accent-primary`, `--text-color-accent`,
  `--object-color-accent`, `--border-color-information`, and `--palette-blue-600`. One value
  under five names, one per family.
- **Accent Hover** (`#0032ca`) — and it is the measured hover on the Premium button.
- **Accent Inverse** (`#4b9dfa`) — the accent for dark grounds, also `--text-color-bookmark`.
- **Accent Surface** (`#ebf3ff`) and its hover **`#d6e6ff`** — the pale wash behind an accent.

### Ink

- **Foreground** (`#222222`) — `--text-color-base-primary`, `--object-color-base-primary`,
  `--brand-color-default`, `--body-color-inverse`, `--surface-color-inverse-primary`. Secondary
  ink is the same value at alpha: `rgba(34,34,34,.7)`, `.62`, `.4`, `.24`, `.16`, `.12`, `.08`,
  `.05`.
- **Disabled** (`#a3a3a3`) — `--text-color-base-primary-disabled`, and the placeholder colour.
- **Inverse Hover** (`#474747`) — the one lighter step off the ink.
- **Canvas** (`#ffffff`).

### Status

**Caution** (`#de3535`) → hover **`#ab0000`**, surface **`#fff0f0`** → hover **`#ffdbdb`**.
**Success** (`#018a26`) → hover **`#044f20`**, surface **`#e8ffe8`**.
**Recommend** (`#ed5353`) — a *fourth* red, distinct from caution, used for reposts.

### The families made of product nouns

This is what separates the reference from a generic semantic system.

- **Premium** (`#00b357`) → hover **`#007d3c`**, surface **`#f0faf5`**. The paid tier has its
  own green, and it is **not** the success green. Plus a campaign pair:
  `--premium-campaign-surface-color-secondary` **`#ffc800`** on `#222`.
- **AI** (`#9b2cc1`) — `--surface-color-ai-primary` and `--text-color-ai-primary`, with a 5%
  wash. A purple reserved for machine-generated content.
- **BookPicks** (`#f7f3eb`) — a cream surface for the book vertical, with a translucent twin.
- **Highlight** (`#ffe86b`) — the colour of a highlighted passage.
- **Unread** (`#ebf3ff`) → hover **`#d6e6ff`** — read state as a token, which a news product
  needs and a component library would not think to publish.
- **Investment Gold** (`#886c0f`) — `--brand-category-color-*-investment-gold`, a whole
  role set (text, border, inverse surface) for one editorial category.
- **Third-party sign-in**: Facebook **`#0866ff`** · LinkedIn **`#2967b2`** · BizD
  **`#0081cc`** · Apple **`#000000`** · Twitter `#000` — the last recorded as found, and worth
  noticing because it is the post-rebrand black rather than the old blue.

### Palette

84 tokens across five hues at eleven steps. Blue `#d6e6ff` · `#4b9dfa` · `#2986ff` ·
`#146af5` · `#0040e0`; gray `#e6e6e6` · `#616161` · `#333333`; red `#fff0f0` · `#ffdbdb` ·
`#fa7373` · `#d41717`; green `#d0f2d0` · `#239e2f` · `#037020`; plus yellow.

Two entries resolve to CSS keywords rather than hex — `--palette-gray-400` is `grey` and
`--text-color-base-primary-visited` is `grey`. Recorded as found; not promoted.

## 3. Typography Rules

### Font family

**Absent.** No webfont loaded, and the rendered stack begins at `-apple-system` on all 286
text-bearing elements. There is no `--font-*` token in the set. A dense reading product that
spends its whole token budget on colour and none on type.

### Scale

Rendered: **12px ×138** · 14px ×43 · 16px ×42 · 10px ×20 · 13px ×12 · 18px ×11 · 11px ×10 ·
20px ×4. Every control label is 12px. Weights are two: 400 on 174 and 700 on 112.

The scale is not tokenised either — these are readings, not declarations.

## 4. Component Stylings

Four controls measured, each with focus read for every control before the mouse moved.

### One hover rule, two fills

The outline controls — the login button and an unselected tab — both take
**`rgba(34,34,34,0.05)`** on hover and pressed. That is `--surface-color-base-primary-hover`
`rgb(34 34 34/5%)` exactly: **ink at 5%, not a grey.**

The filled control — the Premium button — goes `#146af5` → **`#0032ca`**, which is
`--surface-color-accent-primary-hover`.

**Token and render agree three times**: the accent rest, the accent hover, and the 5% ink wash.

### Login

`#ffffff`, `#222222` label, `1px solid #222222`, **4px radius**, 73×32, 12px/400,
`transition: background-color 0.1s linear`.

### Premium trial

`#146af5` fill, `#ffffff` label, 4px radius, 160×32, 12px/400.

Worth noting: **the button that sells Premium is accent blue, not the Premium green.** The
green `#00b357` is the product's colour; the blue is the action's.

### Feed tabs — a pill, and only one of them responds

The selected tab is a **20px-radius blue pill**, 58×40. The unselected one is transparent with
a `1px solid #222222` outline at the same radius and height.

**The selected tab changes nothing on hover or pressed** — `:hover` matched true while the
reading was taken. The unselected one takes the 5% wash. The current tab does not respond to
the pointer, which is a deliberate and legible choice.

### Focus

**All focusable controls render `outline: rgb(0, 95, 204) auto 1px`** — Chrome's default ring.
The `auto` style is the tell; an authored ring names a style and a width. **No focus token is
recorded**, and the set declares none. The selected tab does not report `:focus-visible` at all.

### Radius

Rendered: **4px ×51** — the house value — then `50%` ×29 (avatars), **20px ×28** (the tab
pills), 2px ×18, 8px ×2.

## 5. Layout Principles

- **Four families, one per painted thing**, over one raw palette. A glyph takes
  `--object-color-*`, never `--text-color-*`.
- **Ink at alpha, eight steps deep**, instead of a grey ramp for secondary text and washes.
- **Name the product's nouns.** Premium, AI, BookPicks, unread, and each sign-in provider get
  tokens because the product has those things.

## 6. Depth & Elevation

**No shadow was observed** on any measured control and no shadow token exists among the 220.
Separation is the `rgba(34,34,34,.12)` / `.16` border pair and the pale surface washes.

## 7. Do's and Don'ts

### Do
- Wash with ink at 5% (`rgba(34,34,34,0.05)`) for a neutral hover — that is the system's rule
  and it is measured on two different control shapes.
- Keep Premium green and success green apart. `#00b357` is a product tier; `#018a26` is a state.
- Take the whole role when you take one — `base-primary`, its `-hover`, and its `-disabled`
  are published together.

### Don't
- Don't copy the focus ring. Every control shows Chrome's `auto 1px`; NewsPicks authors none.
- Don't use `#146af5` for Premium. The Premium button is blue but Premium itself is green.
- Don't build a grey ramp for secondary text. The system uses `#222222` at alpha.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1100 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#146af5` accent · `#0032ca` accent hover · `#4b9dfa` accent inverse · `#ebf3ff`/`#d6e6ff`
accent surface · `#222222` ink (at .7/.62/.4/.24/.16/.12/.08/.05) · `#a3a3a3` disabled ·
`#00b357`/`#007d3c`/`#f0faf5` Premium · `#9b2cc1` AI · `#f7f3eb` BookPicks · `#ffe86b`
highlight · `#886c0f` investment gold · `#de3535`/`#ab0000` caution · `#ed5353` recommend ·
`#018a26`/`#044f20` success · `#ffc800` campaign

### Example Component Prompts
- "A 32px outline button: white, `#222222` 12px/400 label and 1px border, 4px radius, hover
  fill `rgba(34,34,34,0.05)`."
- "A 40px filter pill: 20px radius; selected is `#146af5` with white 12px label and does not
  react to hover; unselected is transparent with a `#222222` outline and the 5% ink wash."

## 10. Voice & Tone

Not assessed as authored voice. 19,523 characters on the measured surface, almost all of it
headlines and comment excerpts.

## 11. Brand Narrative

NewsPicks is a feed where a story is followed by named experts arguing about it, sold partly
behind a Premium tier. The token set reads exactly like that product: a colour for the paid
tier, a colour for machine-written text, a colour for whether you have read something, a full
role set for one editorial category, and the brand blue of every service you can sign in with.

The rest is restraint. No webfont, no type scale, no shadow, 12px almost everywhere — the
design spends nothing on surface and all of it on telling one kind of thing from another.

## 12. Principles

- **Four families over one palette.** Surface, text, object, border.
- **Ink at alpha, never grey.**
- **If the product has a noun, the system has a token for it.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

All four components carry measured hover and pressed; hover and pressed are identical on every
one of them, so the system distinguishes "pointer is here" and not "pointer is down".

**The selected tab is the interesting case.** It changes nothing while `:hover` matches true —
measured, not missed. A control that is already current has nothing to offer the pointer.

**Focus is Chrome's on everything.** No focus value is recorded. Disabled exists thoroughly in
the tokens — `--surface-color-*-disabled`, `--text-color-base-primary-disabled` `#a3a3a3`,
`--border-color-*` — but was **not observed on a rendered control**, so no disabled component
is declared.

## 15. Motion & Easing

**No motion token exists.** Durations are written inline and differ by control:
`background-color 0.1s linear` on the buttons, and
`color 0.3s, text-decoration 0.3s, background-color …` on the tabs. The tabs transition three
times slower than the buttons, and nothing names either value.

---

**Tier 1 sources:** https://newspicks.com/ (live product surface — 220 custom properties read via `getComputedStyle`, none belonging to a framework; four controls measured at rest, hover, pressed and focus, 2026-09-22); https://newspicks.com/zz-this-does-not-exist (nonsense-path control — returns a real HTTP 404 of 89 characters, establishing that the host is not a catch-all and that the homepage reading is a real route, 2026-09-22)
