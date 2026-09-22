---
id: taobao
name: Taobao
country: CN
category: ecommerce
homepage: "https://www.taobao.com"
primary_color: "#FF5000"
logo:
  type: simpleicons
  slug: taobao
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "Taobao PC tokens (--tbpc-*)"
  url: "https://www.taobao.com/"
  type: system
  description: "28 --tbpc-* custom properties resolving identically on www.taobao.com and world.taobao.com: one orange theme colour aliased three ways, a gold second theme, a four-step grey text ramp, three surfaces and a border/divider pair, each published as a hex and again as a black-alpha variant."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    brand: "#ff5000"
    gold: "#b88449"
    brand-wash: "#fff1eb"
    brand-border: "#ffd5c2"
    foreground: "#1f1f1f"
    secondary: "#7a7a7a"
    tertiary: "#999999"
    disabled: "#cccccc"
    border: "#d6d6d6"
    divider: "#ebebeb"
    canvas: "#ffffff"
    surface-1: "#f5f5f5"
    surface-2: "#f7f7f7"
    surface-3: "#fafafa"
  typography:
    body: { size: 14, use: "The default size for nearly everything — nav, card titles, category links" }
    small: { size: 12, use: "Prices, tags, secondary metadata under a card" }
    lead: { size: 16, use: "Search field and the two theme-orange buttons" }
    title: { size: 20, use: "The few section headings on the page" }
  rounded: { sm: 4, md: 8, lg: 12 }
  components:
    button-search: { type: "button", bg: "#ff5000", fg: "#ffffff", radius: 8, font: "16px / 500", hover: "#ff5000", pressed: "#ff5000", focus: "#ff5000", use: "The search submit, 72×36. Measured at rest, hover, pressed and focus: all four are byte-identical — the button has no state styling at all." }
    button-login: { type: "button", bg: "#ff5000", fg: "#ffffff", radius: 12, font: "16px / 900", hover: "#ff5000", pressed: "#ff5000", focus: "#ff5000", use: "The sign-in call to action, 224×48 at weight 900 — the single heaviest text on the page. Also identical across all four states." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.taobao.com/", inspected: "2026-09-22" }
    - { id: world, kind: product-surface, url: "https://world.taobao.com/", inspected: "2026-09-22" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.taobao.com/", captured: "2026-09-22" }
    - { id: world-live, kind: product-surface, url: "https://world.taobao.com/", captured: "2026-09-22" }
    - { id: alibaba-business, kind: official-doc, url: "https://www.alibabagroup.com/en-US/about-alibaba-businesses-1744508703945523200", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gold: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-wash: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.tertiary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.divider: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface-1: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface-2: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface-3: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.title.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.title.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
---
# Design System Inspiration of Taobao (淘宝)

## 1. Visual Theme & Atmosphere

Taobao is Alibaba's consumer marketplace, launched in 2003 — the name means "search for
treasures" — and Alibaba describes it as China's leading retail e-commerce platform, a place
where individual sellers, brand flagship stores and specialist channels all sit on one
surface. It is the first Chinese e-commerce reference in this catalog.

The desktop home is **white, dense and almost entirely typographic**. There is one colour:
`#ff5000`, a saturated orange that Taobao calls its primary theme, its secondary theme and
its price colour — three token names, one value. Everything else is grey. In a census of
2,500 rendered elements the text colours were `#1f1f1f` (78 elements), `#7a7a7a` (11) and
`#ff5000` (8); nothing else appeared more than four times.

**Token and render agree.** Those three census values are exactly what
`--tbpc-primary-color`, `--tbpc-secondary-color` and `--tbpc-primary-theme-color` declare.
The page is painted from its own token set, not around it.

What is distinctive here is how *little* the interface does. The two orange buttons on the
page were measured at rest, hover, pressed and focus and are byte-identical in all four —
same fill, same text, same border, same shadow, same filter, same transform. A `transition:
all` is declared and there is nothing for it to transition. Taobao puts its energy into
density of merchandise, not into feedback on chrome.

### Primary tasks
- Search the marketplace, or enter one of the dozens of category channels listed on the page.
- Sign in, which is what the largest control on the surface is for.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `www.taobao.com`. All 28 custom properties on
the document element carry the **`--tbpc-`** prefix — Taobao PC. Nothing else is declared at
the root, so every colour below is Taobao's own.

The set has a consistent shape: almost every role is published **twice**, once as an opaque
hex and once as a black-at-alpha variant for use over merchandise imagery.

### Theme

- **Brand** (`#ff5000`) — `--tbpc-primary-theme-color`, and the same value again as
  `--tbpc-secondary-theme-color` and `--tbpc-price-color`. Prices and the primary action are
  literally the same orange; there is no separate "sale" red.
- **Gold** (`#b88449`) — `--tbpc-gold-theme-color`, the one other theme colour, reserved for
  the membership and premium surfaces.
- **Brand Wash** (`#fff1eb`) — `--tbpc-primary-theme-alpha-color`, published a second time as
  `--tbpc-background-theme--color` (with the doubled hyphen intact).
- **Brand Border** (`#ffd5c2`) — `--tbpc-border-theme-color`, the tint used to outline an
  orange-washed block.
- The alpha forms of both are 8-digit: `--tbpc-secondary-theme-alpha-color` and
  `--tbpc-price-alpha-color` are both `#ff500015`, orange at roughly 8%.

### Text ramp

Four steps, darkest to lightest, each with a black-alpha twin:

- **Foreground** (`#1f1f1f`) — `--tbpc-primary-color`; twin `rgba(0,0,0,.88)`.
- **Secondary** (`#7a7a7a`) — `--tbpc-secondary-color`; twin `rgba(0,0,0,.52)`.
- **Tertiary** (`#999999`, authored `#999`) — `--tbpc-tertiary-color`; twin `rgba(0,0,0,.4)`.
- **Disabled** (`#cccccc`, authored `#ccc`) — `--tbpc-disable-color`. Its twin is the one
  oddity in the set: `--tbpc-disable-alpha-color` is `rgba(108,20,20,.2)`, a dark **red** at
  20%, not black. Recorded as found; no rendered use of it was observed.

### Surface and line

- **Canvas** (`#ffffff`) — the measured page background, and `--tbpc-white-color` (authored
  `#fff`).
- **Surface 1** (`#f5f5f5`) · **Surface 2** (`#f7f7f7`) · **Surface 3** (`#fafafa`) —
  `--tbpc-bg1/2/3-color`, three barely-separated greys, with alpha twins
  `rgba(0,0,0,.04)`, `.03` and `.02`. The whole recessed range lives in five percent.
- **Border** (`#d6d6d6`) — `--tbpc-border-color`; twin `rgba(0,0,0,.16)`.
- **Divider** (`#ebebeb`) — `--tbpc-divider-color`; twin `rgba(0,0,0,.08)`.

## 3. Typography Rules

### Font Family

**Absent.** The rendered body face is `system-ui`, and the CJK face behind it is
`PingFang SC` — Apple's system typeface, not Taobao's. The only other families in the census
are `iconfont` and `global-iconfont` (icon sets, 38 elements) and `Roboto` on three Latin
fragments. There is no font token in the `--tbpc-*` set and no webfont for body text, so no
`family` is recorded.

### Scale

Four sizes, measured across 116 text-bearing elements:

- **14px** — 69 elements. The default for nav, card titles and the long category lists.
- **12px** — 29 elements. Prices, tags, the metadata under a card.
- **16px** — 16 elements. The search field and both orange buttons.
- **20px** — 2 elements. The only heading step on the page.

Weights: 400 on 99 elements, 600 on 10, 500 on 6, 700 on one — and **900** on exactly one,
the sign-in button. That single control is heavier than every heading.

## 4. Component Stylings

Both controls were measured with focus read for **every** control before the mouse moved at
all. Reading focus per-control between mouse actions is not enough: one `mousedown` anywhere
switches Chrome's modality to pointer for the whole page, and a later programmatic `.focus()`
then reports `:focus-visible` false. With the passes separated, both controls report
`:focus-visible` true.

### Search submit

- `#ff5000` fill, `#ffffff` text, **no border** (`border-width: 0`), **8px radius**, 72×36,
  16px/500, no padding, no shadow.
- **Hover, pressed and focus are identical to rest.** Every property read — background,
  background-image, colour, border, radius, box-shadow, filter, transform, opacity,
  text-decoration — is unchanged. `:hover` matched true while the reading was taken, so the
  state was live; there is simply nothing declared for it.
- **`:focus-visible` matched true and `outline-style` is `none`.** Focus fires and nothing
  renders.

### Sign-in

- `#ff5000` fill, `#ffffff` text, no border, **12px radius**, 224×48, **16px/900**.
- Same result: identical at rest, hover, pressed and focus, and the same
  `:focus-visible` true / `outline-style: none` pair.

Both carry `transition: all`. Nothing changes, so nothing transitions.

### Radius

Three steps observed in the rendered page: **4px** is the default and by far the most common
(10 elements — cards, inputs, tags), **8px** is the search submit, **12px** the sign-in
button. A single 100px pill and a single 20px chip also appear; neither is a scale step.

## 5. Layout Principles

- **One accent, everything else grey.** `#ff5000` is the entire colour budget.
- **Recessed surfaces are nearly invisible** — `#f5f5f5`, `#f7f7f7` and `#fafafa` separate
  blocks by a few percent of luminance, letting product photography supply the contrast.
- **Every colour ships twice**, opaque and as black-at-alpha, because half the page sits on
  merchandise images where an opaque grey would band.

## 6. Depth & Elevation

**No shadow was observed** on either measured control, and no shadow token exists among the
28 properties. Separation is done with `#ebebeb` dividers and `#d6d6d6` borders.

## 7. Do's and Don'ts

### Do
- Use `#ff5000` for the action *and* the price — Taobao makes no distinction.
- Take greys from the four-step ramp (`#1f1f1f` → `#7a7a7a` → `#999999` → `#cccccc`) rather
  than picking values.
- Reach for the alpha twin over imagery and the hex over a flat surface.

### Don't
- Don't invent hover or pressed styling for these buttons; on the measured surface there is
  none.
- Don't copy the missing focus indicator. `:focus-visible` matches and `outline-style: none`
  renders nothing — that is a measurement of Taobao, not a pattern to reuse.
- Don't treat `PingFang SC` as a brand face. It is the OS.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only. A `--tbpc-layout-page-margin-*` group and a
`--tbpc-split-main-width` do exist in Taobao's stylesheets, but the only surface serving them
rendered no content and reported the viewport width back as a token value, so no spacing
scale is recorded.

## 9. Agent Prompt Guide

### Quick Color Reference
`#ff5000` brand, price and action · `#b88449` gold · `#1f1f1f` text · `#7a7a7a` secondary ·
`#999999` tertiary · `#cccccc` disabled · `#ffffff` page · `#f5f5f5`/`#f7f7f7`/`#fafafa`
surfaces · `#d6d6d6` border · `#ebebeb` divider · `#fff1eb` wash · `#ffd5c2` wash border

### Example Component Prompts
- "A 36px search submit: `#ff5000` fill, `#ffffff` 16px/500 label, 8px radius, no border, no
  hover change."
- "A 48px sign-in button: `#ff5000`, 12px radius, 16px at weight 900."

## 10. Voice & Tone

Not assessed as copy. The measured page is 2,157 characters, nearly all of them category
names and product titles rather than authored interface voice.

## 11. Brand Narrative

Alibaba launched Taobao in 2003 as a consumer-to-consumer marketplace; the name, "search for
treasures", describes a surface built for browsing rather than for finding one known item.
Alibaba's own business description places it as China's leading retail e-commerce platform
and as the entry point to Tmall flagship stores, Tmall Supermarket and the secondhand channel
Xianyu. The interface reflects the C2C origin: an enormous, flat, text-dense directory with a
single orange accent, closer to a printed catalogue index than to a curated storefront.

## 12. Principles

- **One colour does every job.** Action, price and brand are the same `#ff5000`.
- **Publish the alpha twin.** Every role exists opaque and at alpha, for flat versus imagery.
- **Chrome recedes; merchandise does not.** Five percent of luminance separates the surfaces.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

**Measured and empty.** Rest, hover, pressed and focus were captured on both controls and
every property matched across all four. `:hover` matched true during the hover reading, so the
states were live, not missed. `:focus-visible` matched true on both while `outline-style`
remained `none` — focus is recognised and draws nothing. This is recorded as an observation
about Taobao's desktop home, not as an absence of evidence.

## 15. Motion & Easing

`transition: all` is set on both controls, with no duration or easing token anywhere in the
28 properties — and, since no state changes, nothing animates.

---

**Tier 1 sources:** https://www.taobao.com/ (live product surface — 28 `--tbpc-*` custom properties read via `getComputedStyle`, both orange controls measured at rest, hover, pressed and focus, 2026-09-22); https://world.taobao.com/ (Taobao's traditional-Chinese surface — returned the same 28 property names with byte-identical values, cross-confirming that the set is brand-wide rather than page-local, 2026-09-22); https://www.alibabagroup.com/en-US/about-alibaba-businesses-1744508703945523200 (Alibaba Group's own business page — launch year, name meaning and marketplace position; not cited for tokens)
