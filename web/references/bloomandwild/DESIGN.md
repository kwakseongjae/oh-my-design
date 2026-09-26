---
id: bloomandwild
name: Bloom & Wild
country: UK
category: ecommerce
homepage: "https://www.bloomandwild.com"
primary_color: "#262626"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=bloomandwild.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Bloom & Wild web tokens"
  url: "https://www.bloomandwild.com/"
  type: system
  description: "60 first-party custom properties at :root — a --bwBrand__* palette of 12 colours and shadow recipes, a --spacing-* scale of 9 steps, a --radius-* scale of 6 steps, --bw-* layout heights for the nav/header, and a --ui__* set of image aspect ratios. A separate, much larger --oasys-* layer (889 declarations) is the Bloom & Wild Group's shared design-token platform across its three brands — it feeds a few brand values (the pine-green ramp, the universal focus-ring blue) but is not brand-specific."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    foreground: "#262626"
    foreground-muted: "#534e46"
    canvas: "#ffffff"
    linen: "#f9ecd7"
    lemon: "#fdf888"
    pine-green: "#447964"
    pine-green-light: "#a1bcb1"
    error: "#db4141"
    border: "#e2e0dc"
    search-hover: "#fcf5ea"
    focus-ring: "#2771fc"
  typography:
    family: { display: "Tiempos Headline", sans: "Unica 77 LL TT" }
    body: { size: 16, use: "body computed font-family Unica 77 LL TT, weight 400" }
    button: { size: 18, use: "Unica 77 LL TT 400 on the primary call to action" }
    nav-link: { size: 16, use: "Unica 77 LL TT 500, mega-nav top-level items" }
    h1: { size: 32, use: "Tiempos Headline 700 (Bold only face observed)" }
  spacing: { xxxs: 4, xxs: 8, xs: 12, sm: 16, md: 24, lg: 32, xl: 48, xxl: 64, xxxl: 80 }
  rounded: { none: 0, sm: 4, md: 8, lg: 12, xl: 16, full: 9999 }
  components:
    button-primary: { type: "button", bg: "#262626", fg: "#ffffff", border: "#262626", radius: 2, height: "48px", padding: "13px 19px", font: "18px / 400", hover: "#262626", pressed: "#262626", focus: "outline 2px solid #2771fc", use: "Claim offer — the primary promo-banner CTA. No visible change on hover or press; the 2px focus outline is the only state change." }
    button-secondary: { type: "button", bg: "transparent", fg: "#262626", border: "#262626", radius: 2, height: "48px", padding: "13px 19px", font: "18px / 400", hover: "transparent", pressed: "transparent", focus: "outline 2px solid #2771fc", use: "Next slide — the outline carousel-arrow control. No visible change on hover or press." }
    nav-link: { type: "button", bg: "transparent", fg: "#262626", radius: 0, height: "45px", padding: "10px 4px 11px", font: "16px / 500", hover: "transparent", pressed: "transparent", focus: "outline 2px solid #2771fc", use: "Flowers — a mega-nav top-level item. No visible change on hover or press." }
    search-trigger: { type: "input", bg: "#ffffff", fg: "#534e46", border: "#e2e0dc", radius: 9999, height: "37px", padding: "8px 72px 8px 36px", font: "16px / 400", hover: "#fcf5ea", pressed: "#fcf5ea", focus: "#fcf5ea, outline 2px solid #2771fc", use: "Search for products — the header search pill. The only control with a real colour-changing hover: a cream fill close to the linen family." }
    icon-link: { type: "button", bg: "transparent", fg: "#262626", border: "#262626", radius: 0, height: "58px", padding: "8px", font: "16px / 400", hover: "underline #262626", pressed: "underline #262626", focus: "outline 2px solid #2771fc", use: "Log in — secondary-nav icon link. Hover and press underline the label in #262626." }
    card-link: { type: "card", bg: "transparent", fg: "#ffffff", radius: 0, height: "24px", padding: "0", font: "16px / 500", focus: "outline 2px solid #2771fc", use: "Birthday Gifts — an image-backed category card, white label over a photo. Focus draws the #2771fc outline. Hover and press were not measured (the pointer could not reach it)." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.bloomandwild.com/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.bloomandwild.com/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.bloomandwild.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: about-us, kind: official-doc, url: "https://www.bloomandwild.com/about-us", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.error: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.focus-ring: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.lemon: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.linen: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.pine-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.pine-green-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.search-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.icon-link.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.search-trigger.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.full: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.none: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.spacing.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.spacing.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.spacing.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.spacing.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.spacing.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.spacing.xxl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.spacing.xxs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.spacing.xxxl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.spacing.xxxs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.h1.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.h1.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav-link.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav-link.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Bloom & Wild

## 1. Visual Theme & Atmosphere

Bloom & Wild is a British flower and gifting company, founded in **2013** by **Aron Gelbard** and
**Ben Stanway** in **London**, known for flowers that fit through the letterbox. Its site describes
the brand in one line — "We don't just send gifts. We help you care wildly." — and its footer shows
the family it now belongs to: Bloom & Wild in the UK, Ireland, Germany and Austria, **bloomon** in the
Netherlands, Belgium and Denmark, and **Bergamotte** in France. It is a certified B Corp.

That family explains why the stylesheet carries a second, much larger token layer (`--oasys-*`, 889
declarations) beside Bloom & Wild's own 60: a platform shared across the group's brands. No
design-system page exists — `bloomandwild.com/design-system` returns the same generic 404 as a
nonsense-path control.

The landing page is warm and paper-toned: a near-black ink (**`#262626`**) on white, warmed by a
**linen** cream (**`#f9ecd7`**), a bright **lemon** (**`#fdf888`**) and a muted **pine-green**
(**`#447964`**), with soft two-layer shadows built from `rgba(0,0,0,.1)` and `rgba(0,0,0,.07)`.
Buttons are almost square — a **2px** radius that sits outside the site's own 0/4/8/12/16/9999
radius scale — while the search control is a full pill.

What makes it worth reading:

- **Two foundry faces, both self-hosted.** Tiempos Headline (Klim) and Unica 77 LL
  (Lineto) both load and render, served as hashed webfont files from Bloom & Wild's own asset
  host rather than a foundry CDN.
- **Hover is quiet.** The primary, outline and nav controls show no visible change beyond an
  authored focus ring; the header search pill fills with a cream tint and the Log in link
  underlines.
- **A shared group platform underneath.** `--oasys-*` supplies the universal focus-ring blue and
  feeds at least one brand colour (the pine-green ramp) without being a Bloom & Wild-specific
  namespace itself.

### Primary tasks
- Browse and buy letterbox flowers and gifts; claim a promotional offer.
- Search for products; log in; browse by occasion (e.g. Birthday Gifts) via mega-nav.

## 2. Color Palette & Roles

Measured with `getComputedStyle(document.documentElement)` plus a recursive stylesheet walk: 60
custom properties at `:root`, 965 declarations across all rules.

### Root namespaces (60 at `:root`)

| namespace | count |
|---|---|
| `--ui__*` | 23 |
| `--bwBrand__*` | 12 |
| `--spacing-*` | 9 |
| `--bw-*` (nav/navbar/servicebar/card) | 9 |
| `--radius-*` | 6 |
| `--swiper-scrollbar-size` | 1 (Swiper.js carousel default, excluded) |

### Brand colours (`--bwBrand__*`)

- **Ink / Foreground** (`#262626`) — `--bwBrand__text`, the dominant text colour (179 of the
  sampled text-bearing tags) and the fill behind the primary CTA (6 background occurrences). Body
  ink inside `<p>` tags confirms `#262626` as the brand text token, not a separate nav grey.
- **Canvas** (`#ffffff`) — `--bwBrand__background`, the dominant background (60 occurrences).
- **Linen** (`#f9ecd7`) and its tints `#f4e8cd` / `#f9ecd7` — warm cream section backgrounds.
- **Lemon** (`#fdf888`) — a bright accent background (4 occurrences).
- **Pine-green** (`#447964`) and its 50%-tint **Pine-green light** (`#a1bcb1`) — used as a
  background (5 occurrences) and a rare accent text colour, and as a border colour (2
  occurrences). One darker one-off green, `#065d4d`, appears once and is not tokenised.
- **Error** (`#db4141`) — the `--bwBrand__error` token.
- Two shadow-colour primitives, `rgba(0,0,0,.1)` (tight blur) and `rgba(0,0,0,.07)` (loose blur),
  compose the three named shadow recipes (`--bwBrand__box-shadow`, `--box-shadow--inverse`,
  `--box-shadow--bottom-only`) — no shadow was observed on any of the six probed interactive
  controls, so elevation is reserved for cards/panels, not buttons or links.

### Foreground-muted and border

- **Foreground-muted** (`#534e46`) — a warm grey used for the search input's resting text and
  supporting labels (8 occurrences).
- **Border** (`#e2e0dc`) — a light grey hairline, the search input's resting border.
- Two pale tint families recur across the rendered census without a named root variable: a pale
  green (`#dfe9e3`), a pale pink/blush (`#f9dfd9` / `#faeeef`), and a dark 30%-opacity overlay
  (`color(srgb .149 .149 .149 / .3)`, roughly `#262626` at 30% alpha) — recorded in prose, not as
  a hex token, since it is not a flat 6-digit colour.

### Interaction colour: the group platform

**Focus-ring blue** (`#2771fc`) — `--oasys-color-blue-50`, the Bloom & Wild **Group**'s shared
platform colour, not a `--bwBrand__*` token. It is the one colour that appears identically on
every one of the six probed controls' focus state, regardless of the control's own resting
colour. `--oasys-color-green-60` (`#447964`) is identical to `--bwBrand__pine-green` — the group
ramp feeds at least this one brand value — but the other 887 `--oasys-*` declarations (partner
colours for PayPal, Facebook, Trustpilot; blush/buttercream/lilac ramps) are not seen rendered on
Bloom & Wild's own surface and are excluded from its brand token count.

### Search-hover tint

**Search-hover** (`#fcf5ea`) — the only real, colour-changing hover found across the six probed
controls: the header search pill's rest-to-hover fill, close to the linen family but a distinct
lighter cream.

## 3. Typography Rules

### Font family

- **Display** — `"Tiempos Headline"`, computed on `h1`. Only the **700 (Bold)** weight is present
  as a loaded face; no Regular or Medium weight was found, consistent with a display-only
  headline face.
- **Sans / body** — `"Unica 77 LL TT"`, computed on `body`. Buttons compute a fallback stack
  (`Unica77, Arial, Helvetica, sans-serif`) that resolves to the same loaded face. `document.fonts`
  shows Unica 77 LL TT at both **500 (Medium)** and **400 (Regular)**.

`document.fonts` (`status === 'loaded'`), deduped:

```
Tiempos Headline   700 normal
Unica 77 LL TT     500 normal
Unica 77 LL TT     400 normal
```

Both are self-hosted, served from relative `./media/` paths with hashed filenames (e.g.
`TiemposHeadlineWeb-Bold-5AMXWUK5.woff2`, `Unica77LLWeb-Medium-QGRSVCXK.woff2`,
`Unica77LLWeb-Regular-CCQNHAFT.woff2`) — both are served from Bloom & Wild's own asset host, not a foundry CDN. No Google
Fonts and no external font `<link>` were found.

### Scale (rendered, not a published token scale)

| role | size | weight | notes |
|---|---|---|---|
| h1 (display) | 32px | 700 | Tiempos Headline, Bold only |
| primary CTA / secondary button | 18px | 400 | Unica 77 LL TT |
| body / `<p>` | 16px | 400 | Unica 77 LL TT |
| nav link / card link | 16px | 500 | Unica 77 LL TT |
| search input | 16px | 400 | Unica 77 LL TT |
| icon-link (Log in) | 16px | 400 | Unica 77 LL TT |

No `--font-size-*` or `--text-*` custom-property scale was found at `:root`; sizes above are read
directly off the probed controls and headline.

## 4. Component Stylings

Six controls probed (`scripts/probe-component-states.mjs`), each at rest, hover, pressed and
focus. A universal focus ring, `outline: #2771fc solid 2px`, appears on every control regardless
of its own resting colour.

- **Primary CTA** ("Claim offer", promo-banner button) — `#262626` bg, `#ffffff` fg, `#262626`
  border, radius **2px** (off the named radius scale), 48px tall, 13px/19px padding, 18px/400.
  No visible change on hover or press; only the `#2771fc` focus outline appears.
- **Secondary** ("Next slide", carousel arrow, `button--outline size-large type-secondary`) —
  transparent bg, `#262626` fg and border, same geometry as the primary CTA. No visible change on
  hover or press.
- **Nav link** ("Flowers", mega-nav top-level item) — transparent bg, `#262626` fg, 45px tall,
  10px/4px/11px padding, 16px/500. No visible change on hover or press.
- **Search trigger** ("Search for products", header search pill — a styled trigger, not a raw
  `input[type=search]`) — `#ffffff` bg, `#534e46` fg, `#e2e0dc` border, pill radius (9999,
  matching `--radius-full`), 37px tall, 8px/72px/8px/36px padding, 16px/400. Hover **and** pressed
  fill **`#fcf5ea`** with fg/border unchanged — the one real per-control colour-changing state
  found in this pass.
- **Card link** ("Birthday Gifts", image-backed category card) — transparent bg, `#ffffff` label over
  a photo, 24px tall, 16px/500. Focus draws the same `#2771fc` outline; the label stays white.
  **Hover and press were not measured** — the pointer could not reach the element under a sibling;
  recorded as unmeasured, not as "no change."
- **Icon-link** ("Log in", secondary nav) — transparent bg, `#262626` fg and border, 58px tall, 8px
  padding, 16px/400. Hover and press underline the label (`text-decoration: underline #262626`;
  re-measured 2026-09-26 — the first pass compared colours only and read it as unchanged).

Only the search pill shows a colour-changing hover, and only the Log in link an underline; the
primary, outline and nav controls carry their resting values through hover and press, with the
`#2771fc` ring the sole marker of interactivity on focus.

## 5. Layout Principles

- Warm paper tones (linen `#f9ecd7`, lemon `#fdf888`) alternate with white and pine-green
  (`#447964`) to structure sections, rather than borders or shadows.
- A fixed set of layout heights (`--bw-nav__top--height: 120px`, `--bw-navbar__bottom--height:
  62px`, `--bw-servicebar--height: 32px`, `--bw-site-header-content-height: 113px`) governs the
  header stack.
- Image aspect ratios are tokenised per placement (`--ui__hero-banner`: 16:10 desktop / 3:4
  mobile; `--ui__main-image` and `--ui__secondary-image`: 1:1; `--ui__generic-content-block-item`:
  5:3; `--ui__expressive-list-odd`: 3:4 / `-even`: 1:1; `--ui__story-block-image`: 4:3;
  `--ui__blog-hero-image`: 1:1; `--ui__blog-item-square`: 1:1; `--ui__blog-item-rectangle`: 3:4),
  with a shared `--ui__gutter-width: 12px`.

## 6. Depth & Elevation

Three shadow recipes, all built from the same two blur-colour primitives:

```
--bwBrand__box-shadow:              0 0 3px rgba(0,0,0,.1), 0 1px 32px rgba(0,0,0,.07)
--bwBrand__box-shadow--inverse:     0 0 3px rgba(0,0,0,.1), 0 -1px 32px rgba(0,0,0,.07)
--bwBrand__box-shadow--bottom-only: 0 4px 3px -3px rgba(0,0,0,.1), 0 38px 32px -32px rgba(0,0,0,.07)
```

No shadow was observed at rest on any of the six probed interactive controls — elevation is
reserved for card/panel surfaces, not buttons or links.

## 7. Do's and Don'ts

### Do
- Use `#262626` as both the primary ink and the primary CTA's background — the palette is
  near-monochrome with warm accent bands.
- Reserve `#fdf888` (lemon) and `#f9ecd7` (linen) for section-level warmth, not for interactive
  states.
- Use the `#2771fc` focus ring exactly as the group platform renders it; it is shared across the
  whole Bloom & Wild Group, not a Bloom & Wild-only choice.
- Pair Tiempos Headline (display, Bold only) with Unica 77 LL TT (body, 400/500) rather than
  inventing intermediate weights that were not observed loaded.

### Don't
- Don't assume hover changes much: three of six probed controls show identical rest and hover
  states; the search pill's `#fcf5ea` fill and the Log in underline are the exceptions.
- Don't count `--oasys-*` (889 declarations) as Bloom & Wild-specific — it is the group's shared
  platform layer, feeding only a couple of brand values.
- Don't round buttons to the named radius scale (0/4/8/12/16/9999) — the CTA and outline buttons
  use an undocumented **2px** radius outside that scale.
- Don't cite a rebrand case study for the Tiempos + Unica 77 pairing; none was found on-site.

## 8. Responsive Behavior

**Not measured.** The probe ran at a single 1440×1000 desktop viewport; no mobile breakpoint or
layout was rendered this session.

## 9. Agent Prompt Guide

### Quick Color Reference
`#262626` ink / primary CTA · `#ffffff` canvas · `#f9ecd7` linen · `#fdf888` lemon · `#447964`
pine-green · `#a1bcb1` pine-green light · `#db4141` error · `#534e46` foreground-muted · `#e2e0dc`
border · `#fcf5ea` search-hover · `#2771fc` focus ring (group platform)

### Example Component Prompts
- "A 48px near-square button: `#262626` background, white text, `#262626` border, 2px radius; no
  hover change, a 2px `#2771fc` focus outline."
- "A pill search field: white background, `#534e46` placeholder text, `#e2e0dc` border; hover and
  press fill `#fcf5ea`."

## 10. Voice & Tone

Not assessed as authored voice. The one confirmed brand line — "We don't just send gifts. We help
you care wildly." — is a mission statement from the about page, not a UI-copy sample.

## 11. Brand Narrative

Bloom & Wild's landing surface reads as warm and restrained: a near-black ink and white base, lit
by cream, lemon and pine-green bands, with almost no interactive colour change beyond a shared
focus ring. The one type pairing that carries the brand's visual identity — Tiempos Headline
for display, Unica 77 LL for everything else — is self-hosted rather than served from a foundry,
and both faces load and render on the homepage.

The token structure tells a group story as much as a brand one: a compact, 60-variable Bloom &
Wild layer sits on top of an 889-variable `--oasys-*` platform shared with its sibling brands
(bloomon, Bergamotte) since the 2021 group formation — visible in the identical focus-ring blue
and the borrowed pine-green value. No rebrand case study or design-system page documents the
Tiempos/Unica pairing publicly; it is read here from the rendered page alone.

## 12. Principles

- **Near-monochrome, warmed by bands.** `#262626` on white, lit by linen and lemon.
- **Interaction is quiet.** Half the controls don't change on hover; the focus ring is the constant.
- **Two foundry faces, self-hosted.** Tiempos Headline for display, Unica 77 LL for the rest.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Six components probed. Hover: no visible change on the primary CTA, secondary button and nav
link; the search trigger fills `#fcf5ea` and the Log in icon-link underlines, on both hover and
press; the card-link's hover was not measured. Focus: a universal `#2771fc` 2px outline on five
controls; the card-link instead flips its fg/border to `#262626` with no visible outline. The
card-link's hover state was not measured (locator timeout) and is left unrecorded rather than
marked unchanged. No disabled state was observed.

## 15. Motion & Easing

No transition duration or easing token was found on the six probed controls or in the root custom
properties; state changes (where present) render without a measured animation curve this session.

---

**Tier 1 sources:** https://www.bloomandwild.com/ (live landing page — 60 root custom properties
and 965 stylesheet declarations read via `getComputedStyle` and a recursive rule walk; six
components measured at rest, hover, pressed and focus via `scripts/probe-component-states.mjs`;
Tiempos Headline and Unica 77 LL TT confirmed loaded via `document.fonts`, captured 2026-09-26);
https://www.bloomandwild.com/zz-this-does-not-exist (nonsense-path control — the same generic
404, "Uhoh! We can't find the page...", as `bloomandwild.com/design-system`, confirming no
official design-system page exists on this host, captured 2026-09-26);
https://www.bloomandwild.com/about-us (the "care wildly" line; the footer lists the bloomon and Bergamotte sites and the B Corp
certification, read 2026-09-26)

**Regional sources:** https://www.uktech.news/news/london-bloom-and-wild-online-flower-delivery-startup-funding-20210118 (UKTN, 2021-01-18 — "Bloom & Wild raises £75M, London-based online flower delivery and gifting startup achieves 160% growth in revenue"; founded in 2013 by Aron Gelbard and Ben Stanway)
