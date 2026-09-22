---
id: ctrip
name: Ctrip
country: CN
category: consumer-tech
homepage: "https://www.ctrip.com"
primary_color: "#006FF6"
logo:
  type: simpleicons
  slug: tripdotcom
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "Ctrip Design Tokens"
  url: "https://hotels.ctrip.com"
  type: system
  description: "A three-tier token system resolving live on Ctrip surfaces — core primitives (coreColor*), semantic roles (smtcColor*) and component-scoped values (comp*)."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    brand: "#006ff6"
    brand-hover: "#2582f5"
    brand-border: "#93bff5"
    brand-tint: "#ebf4ff"
    brand-tint-low: "#f5f9ff"
    foreground: "#111111"
    text-secondary: "#555555"
    text-muted: "#aaaaaa"
    border: "#d5d5d5"
    surface: "#f5f5f5"
    surface-secondary: "#f5f7fa"
    bluegray-mid: "#869ebf"
    bluegray-line: "#e1e7f0"
    canvas: "#ffffff"
    on-brand: "#ffffff"
    notice: "#ff7700"
    notice-strong: "#ff5500"
    notice-tint: "#fff4eb"
    success: "#06875a"
    success-icon: "#24b281"
    success-border: "#8dd9be"
    favorite: "#f5190a"
    star-rating: "#fcb000"
  typography:
    base: { size: 14, use: "Dominant reading size — 817 of ~2,000 sampled elements" }
    caption: { size: 12, use: "Metadata and secondary labels" }
    control: { size: 16, use: "Search field and primary control text" }
    lead: { size: 20, use: "Section lead" }
    sub: { size: 18, use: "Sub-heading" }
    display: { size: 24, use: "Largest repeated step" }
  rounded: { sm: 4, md: 8, pill: 16, tab: 20 }
  components:
    button-search: { type: "button", bg: "#006ff6", fg: "#ffffff", radius: 4, font: "16px / 700", hover: "#2953d6", pressed: "#2953d6", use: "Primary search submit on hotels.ctrip.com — 48px tall. Rest equals coreColorBlue1; the hover value is not a published token." }
    button-login-pill: { type: "button", bg: "#f2f8fe", fg: "#333333", radius: 16, font: "14px / 400", hover: "#0086f6", pressed: "#0086f6", focus: "#0086f6", use: "Header sign-in pill — 32px tall; hover, press and focus all recolour text and border together." }
    chip-city: { type: "button", bg: "#ffffff", fg: "#333333", radius: 4, font: "14px / 400", hover: "#0086f6", use: "Departure-city chip in the search panel — 34px tall; hover recolours the label only." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.ctrip.com/", inspected: "2026-09-22" }
    - { id: hotels, kind: product-surface, url: "https://hotels.ctrip.com/", inspected: "2026-09-22" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.ctrip.com/", captured: "2026-09-22" }
    - { id: hotels-live, kind: product-surface, url: "https://hotels.ctrip.com/", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.brand: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-hover: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-border: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-tint: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-tint-low: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-secondary: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-muted: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.border: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface-secondary: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bluegray-mid: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bluegray-line: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.on-brand: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.notice: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.notice-strong: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.notice-tint: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.success: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.success-icon: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.success-border: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.favorite: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.star-rating: { surface_id: hotels, source_id: hotels-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.control.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.control.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.sub.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.sub.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.tab: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-search.type: { surface_id: hotels, source_id: hotels-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.bg: { surface_id: hotels, source_id: hotels-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.fg: { surface_id: hotels, source_id: hotels-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.radius: { surface_id: hotels, source_id: hotels-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.font: { surface_id: hotels, source_id: hotels-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.hover: { surface_id: hotels, source_id: hotels-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.pressed: { surface_id: hotels, source_id: hotels-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-search.use: { surface_id: hotels, source_id: hotels-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login-pill.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login-pill.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login-pill.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login-pill.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login-pill.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login-pill.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login-pill.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login-pill.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login-pill.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-city.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-city.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-city.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-city.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-city.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-city.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-city.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
---
# Design System Inspiration of Ctrip (携程)

## 1. Visual Theme & Atmosphere

Ctrip is China's largest online travel agency — founded in Shanghai in 1999, listed since
2003, and the parent of the Trip.com Group that now also owns Skyscanner. Its interface has
the job every OTA has: put a dense, comparable inventory of flights, hotels and packages in
front of someone who is price-sensitive and in a hurry.

The result is **information-dense and deliberately plain**. Body text runs at **14px** on
`#ffffff` in **Pingfang SC**, and of roughly two thousand sampled elements **817 render at
14px** with another **426 at 12px** — over 60% of the page is set at those two sizes. Nothing
is enlarged for drama. Ctrip builds hierarchy with a blue that appears only on interactive
things, orange that appears only on urgency, and gold that appears only on star ratings.

What distinguishes it from most of this catalog is the **token architecture underneath**. A
Ctrip page resolves a genuine three-tier system: `coreColor*` primitives, `smtcColor*`
semantic roles, and `comp*` component-scoped values. That is a mature structure — most
references in this catalog have one flat layer or none.

### Primary tasks
- Compare many priced options on one screen without scrolling past the fold.
- Spot the state that matters — available, discounted, favourited, rated — at a glance.
- Move between verticals (hotels, flights, packages) that share one chrome.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `ctrip.com` (404 custom properties) and
`hotels.ctrip.com` (417). Ctrip's own token name is given beside each role.

### The three tiers

```
core*   286   primitives          coreColorBlue1-5 · coreColorGray1-9 · coreColorOrange1-5
                                  coreColorGreen1-4 · coreColorBluegray3-9 (+245 icon glyphs)
smtc*    86   semantic roles      smtcColorTextBrand · smtcColorBgSurfaceSecondary
                                  smtcColorBgFavorite · smtcColorBgStarRating · …
comp*    30   component-scoped    compHotelMapActiveLine · compSearchBoxCalendarHighlight · …
```

### Brand

- **Ctrip Blue** (`#006ff6`) — `coreColorBlue1`, and promoted to three semantic roles:
  `smtcColorTextBrand`, `smtcColorBorderBrandBold`, `smtcColorBgRateFilled`.
- **Blue Step 2** (`#2582f5`) — `coreColorBlue2`.
- **Brand Border** (`#93bff5`) — `coreColorBlue3` / `smtcColorBorderBrand`.
- **Brand Tint** (`#ebf4ff`) — `coreColorBlue4` / `smtcColorBgBrandTintedHigh`.
- **Brand Tint Low** (`#f5f9ff`) — `coreColorBlue5` / `smtcColorBgBrandTintedLow`.

A five-step blue ramp where **steps 1, 3, 4 and 5 each carry a named semantic role** — the
primitive and the meaning are wired together rather than left to the implementer.

### Neutrals

- **Foreground** (`#111111`) — `coreColorGray1` / `smtcColorTextPrimary`.
- **Text Secondary** (`#555555`) — `coreColorGray2`.
- **Text Muted** (`#aaaaaa`) — `coreColorGray4`.
- **Border** (`#d5d5d5`) — `coreColorGray6`.
- **Surface** (`#f5f5f5`) — `coreColorGray9` / `smtcColorBgDisabledTinted`.
- **Surface Secondary** (`#f5f7fa`) — `coreColorBluegray9` / `smtcColorBgSurfaceSecondary`.
- **Bluegray Mid** (`#869ebf`) — `coreColorBluegray4`. **Bluegray Line** (`#e1e7f0`) — `coreColorBluegray7`.
- **Canvas / On-Brand** (`#ffffff`) — `coreColorWhite`.

Ctrip keeps **two neutral ramps**: a pure grey (`coreColorGray*`) and a blue-tinted one
(`coreColorBluegray*`). Chrome and panels use the blue-tinted ramp; text uses the pure one.

### Status

- **Notice** (`#ff7700`) — `coreColorOrange2`, promoted to `smtcColorBgNoticeFilled`,
  `smtcColorIconNotice` *and* `smtcColorBgDiscountFilled`. On an OTA, "notice" and "discount"
  are the same colour: both mean *act now*.
- **Notice Strong** (`#ff5500`) — `coreColorOrange1`. **Notice Tint** (`#fff4eb`) — `coreColorOrange4`.
- **Success** (`#06875a`) — `coreColorGreen1` / `smtcColorTextSuccess`.
  **Success Icon** (`#24b281`) — `smtcColorIconSuccess`. **Success Border** (`#8dd9be`) —
  `coreColorGreen3` / `smtcColorBorderSuccess`. Three greens for three jobs.
- **Favorite** (`#f5190a`) — `smtcColorBgFavorite`. A true red, used only for the heart.
- **Star Rating** (`#fcb000`) — `smtcColorBgStarRating`. Gold, used only for stars.

### The home page is partly off-system

A conflict worth stating plainly. `hotels.ctrip.com` renders the declared brand: its search
button is `#006ff6`, exactly `coreColorBlue1`. **`ctrip.com`'s home page does not.** Its
interactive blue computes `#0086f6`, its sign-in pill sits on `#f2f8fe`, and the search
button's hover is `#2953d6` — **none of those three is a declared token anywhere in the 404
properties the same page loads.**

So Ctrip ships a coherent token system and its own front door is not fully on it. Both facts
are recorded: the palette above is the declared system, and the off-system values appear only
where a measured component actually used them (§4).

## 3. Typography Rules

### Font Family

`ctrip.com` computes **Pingfang SC** — Apple's Simplified-Chinese system face — as the body
family. `hotels.ctrip.com` computes plain `system-ui`. Neither is a licensed brand typeface,
and `tokens.typography.family` is therefore **absent**: a platform CJK system face is not
promoted to a brand face.

### Scale

| Role | Size | Count in sample |
|---|---|---|
| Base | 14px | **817** |
| Caption | 12px | 426 |
| Control | 16px | 254 |
| Lead | 20px | 41 |
| Sub | 18px | 7 |
| Display | 24px | 3 |

**Two sizes carry 1,243 of ~2,000 elements.** The display step appears three times on the
entire home page. This is a scale built for tables and comparison rows, not for editorial.

## 4. Component Stylings

Measured live, pointer parked between readings, navigation suppressed so `:active` could be
read in place.

### Search submit — `hotels.ctrip.com`

- Rest `#006ff6` fill (**exactly `coreColorBlue1`**), `#ffffff` label, 4px radius, 48px tall,
  16px/700.
- Hover and pressed both **`#2953d6`** — a darker blue that is **not** a published token.

### Sign-in pill — `ctrip.com`

- Rest `#f2f8fe` fill, `#333333` label, 16px radius, 32px tall, 14px/400.
- Hover, pressed **and focus** all recolour label and border to **`#0086f6`** together. The
  fill never changes. Three states, one treatment — and unusually, focus is not ignored here.

### City chip — `ctrip.com`

- Rest `#ffffff`, `#333333` label, 4px radius, 34px tall, 14px/400.
- Hover recolours the **label only** to `#0086f6`; no fill or border change.

### Radius scale

`4px`×37 and `8px`×42 dominate; `20px`×32 for tab-like pills; `16px` on the sign-in pill;
`2px`×13 on dense table chrome. A distinctive asymmetric value — `0 8px 8px 0` — appears 10
times, the right half of a split search field butted against its input.

### Not measured

Result cards, the calendar picker, price filters, the map panel and every authenticated view.
`comp*` tokens name several of these (`compSearchBoxCalendarHighlight`,
`compHotelRoomListFilterBgcHover`), so the system documents components this capture did not
reach. They are not declared.

## 5. Layout Principles

- **Two neutral ramps, used deliberately** — blue-tinted `Bluegray` for chrome and panels,
  pure `Gray` for text.
- **Split controls.** The `0 8px 8px 0` radius marks a field and its submit fused into one
  unit rather than spaced apart.
- **Density is the point.** 14px body with 12px metadata, on white, with 4–8px radii.

## 6. Depth & Elevation

**Not measured.** No shadow or elevation token appears among the `core*`/`smtc*`/`comp*` sets,
and none was observed on the three measured controls. Nothing is claimed.

## 7. Do's and Don'ts

### Do
- Use `#006ff6` for interactive things and `#ff7700` for urgency — Ctrip separates the two strictly.
- Keep the two neutral ramps apart: `Bluegray` for surfaces, `Gray` for text.
- Reserve `#f5190a` for favourites and `#fcb000` for star ratings; neither is a general accent.
- Set body at 14px and metadata at 12px. Do not introduce a display size.

### Don't
- Don't take `#0086f6`, `#f2f8fe` or `#2953d6` as system values — they are the home page's
  off-system renders (§2).
- Don't read `#0000ee` or `#ff0000` off a Ctrip anchor: those are the **browser's** default
  link and active-link colours on an unstyled `<a>`, not Ctrip's.
- Don't promote Pingfang SC to a brand typeface; it is the platform CJK system face.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×900 only. Ctrip's mobile web and app are separate surfaces.

## 9. Agent Prompt Guide

### Quick Color Reference
`#006ff6` brand · `#ebf4ff` brand tint · `#111111` text · `#555555` secondary ·
`#f5f7fa` panel · `#ff7700` notice/discount · `#06875a` success · `#fcb000` stars ·
`#f5190a` favourite

### Example Component Prompts
- "A 48px search submit, `#006ff6` on white, 4px radius, 16px/700 white label, darkening to
  `#2953d6` on hover and press."
- "A comparison row: 14px `#111111` title, 12px `#555555` metadata, `#f5f7fa` panel,
  `#ff7700` discount badge, `#fcb000` stars."

## 10. Voice & Tone

Transactional and unadorned. Ctrip's chrome uses bare two-character verbs — 登录 (sign in),
搜索 (search) — and lets price and availability do the persuading.

## 11. Brand Narrative

Founded in Shanghai in 1999 and listed on Nasdaq in 2003, Ctrip consolidated Chinese online
travel through the 2010s, merging with Qunar in 2015 and acquiring Skyscanner in 2016. The
group renamed itself Trip.com Group in 2019 while keeping 携程 as the domestic brand. The
three-tier token system measured here reflects that scale: a company running several verticals
and several brands needs primitives it can re-skin, semantic roles it can hold stable, and
component tokens it can vary per product.

## 12. Principles

- **Comparison before persuasion.** The layout exists to make options line up.
- **Colour is categorical.** Blue = interactive, orange = urgent, gold = rated, red = saved.
- **Tokens are layered.** Primitive, semantic, component — so a vertical can change its
  components without touching the palette.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Three controls were observed. The sign-in pill carries hover, pressed **and** focus, all
identical. The search submit carries hover and pressed, identical. The city chip carries hover
only. No disabled state was observed on a rendered control, though
`smtcColorBgDisabledTinted` (`#f5f5f5`) exists as a token.

## 15. Motion & Easing

**Not measured.** No transition or duration token appears in the `core*`/`smtc*`/`comp*` sets.

---

**Tier 1 sources:** https://www.ctrip.com/ (live production home — 404 custom properties resolved via `getComputedStyle`, sign-in pill and city chip with hover/press/focus, 2026-09-22); https://hotels.ctrip.com/ (Ctrip's hotel vertical — 417 custom properties including `smtcColorBgBrand`, and the search submit whose rest state equals `coreColorBlue1` exactly, 2026-09-22)
