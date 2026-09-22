---
id: chatwork
name: Chatwork
country: JP
category: saas
homepage: "https://go.chatwork.com/ja/"
primary_color: "#F03748"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=chatwork.com&sz=128"
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "RISE (--rise--*)"
  url: "https://go.chatwork.com/ja/"
  type: system
  description: "20 --rise--* custom properties, and sixteen of them are typographic: four font-family tokens naming four weights of Chatwork's own typeface, a twelve-step rem type scale split into headline, body, caption and button roles, and two line heights. Two colours complete it."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    brand: "#f03748"
    link: "#df1c13"
    secondary: "#645b4a"
    foreground: "#13202f"
    ink: "#191919"
    muted: "#949aa2"
    canvas: "#ffffff"
  typography:
    family: { sans: "Chatwork Sans R", display: "Chatwork Sans B" }
    leading: { base: 1.6, headline: 1.5 }
    xsmall: { size: 10, use: "--rise--fontSize-other-xSmall, .625rem" }
    caption: { size: 12, use: "--rise--fontSize-caption, .75rem — and the most common rendered size, on 105 elements" }
    body2: { size: 14, use: "--rise--fontSize-body2 and -button-small, .875rem" }
    body1: { size: 16, use: "--rise--fontSize-body1 and -button-medium, 1rem" }
    subtitle: { size: 20, use: "--rise--fontSize-subtitle and -button-large, 1.25rem" }
    headline3: { size: 24, use: "--rise--fontSize-headline3, 1.5rem" }
    headline2: { size: 32, use: "--rise--fontSize-headline2, 2.0rem" }
    headline1: { size: 40, use: "--rise--fontSize-headline1, 2.5rem" }
    other-large: { size: 48, use: "--rise--fontSize-other-large, 3rem — the largest published step" }
  rounded: { sm: 5, md: 6, lg: 15, xl: 20, pill: 50 }
  components:
    button-cta: { type: "button", bg: "#f03748", fg: "#ffffff", radius: 50, height: "60px", font: "17px / 700", hover: "#f03748", pressed: "#f03748", use: "The primary call to action (無料登録して使う) — a 50px pill repeated at 35, 60, 80 and 85px tall. Measured across hover and pressed with :hover live; neither changes anything." }
    button-outline-red: { type: "button", bg: "#ffffff", fg: "#df1c13", radius: 50, height: "42px", font: "14px / 400", hover: "#645b4a", pressed: "#645b4a", use: "White 50px pill with the link red as text and no border at all. Hover and pressed move the text to #645b4a, the system's olive secondary." }
    link-brand: { type: "button", bg: "transparent", fg: "#df1c13", font: "16px / 400", hover: "#645b4a", pressed: "#645b4a", use: "Brand-red text action, including the wordmark link. Same #645b4a on hover and pressed." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: product, kind: product-surface, url: "https://go.chatwork.com/ja/", inspected: "2026-09-22" }
    - { id: corporate, kind: product-surface, url: "https://www.kubell.com/", inspected: "2026-09-22" }
  sources:
    - { id: product-live, kind: product-surface, url: "https://go.chatwork.com/ja/", captured: "2026-09-22" }
    - { id: kubell-live, kind: product-surface, url: "https://www.kubell.com/", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.brand: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.ink: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.link: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.muted: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.secondary: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-cta.bg: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-cta.fg: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-cta.font: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-cta.height: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-cta.hover: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-cta.pressed: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-cta.radius: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-cta.type: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-cta.use: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-outline-red.bg: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-outline-red.fg: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-outline-red.font: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-outline-red.height: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-outline-red.hover: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-outline-red.pressed: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-outline-red.radius: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-outline-red.type: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-outline-red.use: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-brand.bg: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-brand.fg: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-brand.font: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-brand.hover: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-brand.pressed: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-brand.type: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-brand.use: { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-09-22" }
    tokens.rounded.lg: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.md: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.pill: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xl: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body1.size: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body1.use: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body2.size: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body2.use: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.size: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.use: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.display: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.sans: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.headline1.size: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.headline1.use: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.headline2.size: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.headline2.use: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.headline3.size: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.headline3.use: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.leading.base: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.leading.headline: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.other-large.size: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.other-large.use: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.subtitle.size: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.subtitle.use: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xsmall.size: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xsmall.use: { surface_id: product, source_id: product-live, method: computed-style, captured: "2026-09-22" }
---
# Design System Inspiration of Chatwork (チャットワーク)

## 1. Visual Theme & Atmosphere

Chatwork is Japan's business chat service, operated by 株式会社kubell — which states on its own
site that it was Chatwork株式会社 until **1 July 2024**, and that Chatwork was used by 430,000
companies as of December 2023.

Its design system is called **RISE**, and it is the most **typography-first** token set in this
catalog. Of twenty `--rise--*` properties, **sixteen are about type**: four font families, ten
sizes, two line heights. Two are colours. There is no spacing scale, no radius scale, no
shadow, no motion — the system is a typeface and a scale, and everything else is left to the
page.

That makes sense once you see what the typeface is. **Chatwork Sans**, in four weights, is the
brand's own face, and it renders on **318 of 319 text-bearing elements**. The one exception is
a single Helvetica fallback.

### Primary tasks
- Understand the product and start a free account, from a red pill repeated at four sizes.
- Download the explainer material, or sign in.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `go.chatwork.com/ja/`. RISE declares exactly two
colours; the rest of this palette is read off the rendered page.

- **Brand** (`#f03748`) — the fill red. It backs every primary pill (11 elements) and appears
  as text on 19 more.
- **Link** (`#df1c13`) — a **second, darker red** for text actions and the wordmark, on 37
  elements. The two are close enough to read as one colour and are not the same value.
- **Secondary** (`#645b4a`) — an olive-brown, and the most surprising value in the system. It
  never appears at rest. It is what **every red text action turns on hover and pressed**, and
  the stylesheet backs it up: `.btn--secondary` and `.plan__btn-signup--personal` take it as a
  background and border in nine rules. A red brand whose secondary is olive.
- **Foreground** (`#13202f`) — `--rise--color-cw-black`, one of the two declared colours, on
  190 elements.
- **Ink** (`#191919`) — a second near-black that carries **borders on 410 elements** and never
  appears as text colour in the same scan. It is the inherited `currentColor` of a large
  subtree rather than a text role.
- **Muted** (`#949aa2`) — secondary labels and list text, 46 elements.
- **Canvas** (`#ffffff`) — `--rise--color-cw-white`, the other declared colour.

**Not recorded:** `#bf0000`, which appears six times on `div.mktoAsterix` — the required-field
marker inside an embedded Marketo form. The Marketo form also brings its own button styling
(`.mktoButton:hover { background: rgb(60, 72, 14) }`), and none of it is Chatwork's.

## 3. Typography Rules

### Font Family — four weights, four tokens

```
--rise--fontFamily-chatworkSansL   "Chatwork Sans L",  Hiragino Sans, ヒラギノ角ゴシック…
--rise--fontFamily-chatworkSansR   "Chatwork Sans R",  …
--rise--fontFamily-chatworkSansB   "Chatwork Sans B",  …
--rise--fontFamily-chatworkSansEB  "Chatwork Sans EB", …
```

Light, Regular, Bold and ExtraBold, each a **separate family name with its own token** rather
than a weight axis on one family. Two of the four were loaded on the measured page —
`Chatwork Sans R` on 185 elements and `Chatwork Sans B` on 133.

Every token falls back to Hiragino Sans and the Japanese system stack, so the face degrades to
the OS rather than to a Latin default.

### Scale — ten sizes with role names, in rem

| Token | rem | px |
|---|---|---|
| `other-xSmall` | .625 | 10 |
| `caption` | .75 | 12 |
| `body2` · `button-small` | .875 | 14 |
| `body1` · `button-medium` | 1 | 16 |
| `subtitle` · `button-large` | 1.25 | 20 |
| `headline3` | 1.5 | 24 |
| `headline2` | 2.0 | 32 |
| `headline1` | 2.5 | 40 |
| `other-large` | 3 | 48 |

The three button sizes are **aliases of body and subtitle steps**, not their own scale — a
button is body text at one of three existing sizes.

Line height is two values: `--rise--lineHeight-base` **1.6** and `-headline` **1.5**.

The rendered page leans small: 12px on 105 elements, then 14 and 16 on 35 each, 15 on 27 and
17 on 22 — several of which are not scale steps, so the marketing page sets sizes the system
does not name.

## 4. Component Stylings

Three controls measured, each state read on its own page load.

### Primary pill

`#f03748` fill, `#ffffff` text, **50px radius**, 444×60 at 17px/700 — and the same pill at
440×85 and 390×80 at 21px/700, 140×35 at 13px/700 and 130×35 at 13px/400. One shape, five
sizes.

**Hover and pressed change nothing.** `:hover` and `:active` both matched while the readings
were taken. The element is a `<span>` inside an anchor, so it never receives focus itself and
no focus value is recorded for it.

### Outline pill

`#ffffff` fill, `#df1c13` text, 50px radius, 100×42, 14px/400, and **no border at all**
(`border-width: 0`). Hover and pressed move the text — and `border-color`, which follows
`currentColor` — to **`#645b4a`**.

### Brand link

Transparent, `#df1c13`, 16px/400, including the wordmark. Same `#645b4a` on hover and pressed.

### Focus

Every focusable control matched `:focus-visible` and painted
`outline: rgb(0, 95, 204) auto 1px` — **Chrome's default ring**. The `auto` style is the tell.
**No focus token is recorded**, because RISE declares none and the page authors none.

### Radius

Rendered: **5px on 71 elements** — by far the dominant value and not a RISE token — then 50px
on 17 (the pills), 6px on 5, 20px on 5, 15px on 3, and 100% on 5.

## 5. Layout Principles

- **The system is a typeface and a scale.** Sixteen of twenty tokens are typographic; spacing,
  radius, shadow and motion are all absent from RISE and left to the page.
- **One pill at five sizes** carries every call to action.
- **Two reds that are nearly the same**, split by job: fill versus text.

## 6. Depth & Elevation

**No shadow was observed** on any measured control, and RISE declares none. The only shadow on
the page belongs to the embedded Marketo input.

## 7. Do's and Don'ts

### Do
- Pick the weight by token, not by `font-weight` — RISE names four separate families.
- Reach for `#645b4a` for a hover on red text; it is the system's secondary, confirmed in nine
  stylesheet rules and on three controls.
- Keep the fallback chain Japanese: every family token falls back to Hiragino Sans.

### Don't
- Don't take `#bf0000` or `rgb(60, 72, 14)` as Chatwork's. Both belong to the embedded Marketo
  form.
- Don't copy the focus ring — it is Chrome's `auto 1px`, not a brand value.
- Don't expect the primary pill to respond to hover. It was measured and it does not.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#f03748` fill red · `#df1c13` text red · `#645b4a` olive secondary, hover only · `#13202f`
foreground · `#191919` rules · `#949aa2` muted · `#ffffff` canvas

### Example Component Prompts
- "A 60px primary pill: `#f03748`, `#ffffff` 17px/700 in Chatwork Sans B, 50px radius, no
  hover change."
- "Its outline twin: white, `#df1c13` 14px/400 label, 50px radius, **no border**, text to
  `#645b4a` on hover."

## 10. Voice & Tone

Not assessed as copy. 3,807 characters on the measured surface.

## 11. Brand Narrative

株式会社kubell states on its own site that Chatwork株式会社 became kubell on 1 July 2024, that
it operates Chatwork — "日本最大級のビジネスチャット" — and that the service was used by 430,000
companies as of December 2023. Alongside it the company lists Taxita, Secure SAMBA and a cloud
postal service.

The two surfaces have separated visually. `go.chatwork.com` is Chatwork Sans, red and 50px
pills; `kubell.com` is Noto Sans JP with Poppins, an orange `#f04600` and a `#121212` ink, and
carries no `--rise--*` at all. The product kept its identity through the rename and the parent
built a different one.

## 12. Principles

- **The typeface is the system.** Four weights, four tokens, 318 of 319 elements.
- **Name the size by role, in rem**, and let buttons alias the body steps.
- **Two reds, one job each.** Fill and text, close enough to read as one.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Three components carry measured hover and pressed. The split is by control type: the **filled
pill does not move at all**, while both **red text actions go to `#645b4a`** — the same value,
reached from two different rest colours, on hover and on pressed alike.

Focus is Chrome's own ring on everything that can take focus, and the primary pill is a `span`
that cannot. **No focus state is recorded.** No disabled state was observed on a rendered
control.

## 15. Motion & Easing

**No motion token exists** in RISE. The measured controls declare `transition: all` with no
duration, which resolves to `0s` — the state changes above are instant, not animated. The one
timed transition on the page (`0.2s ease-in-out`) belongs to the embedded Marketo button.

---

**Tier 1 sources:** https://go.chatwork.com/ja/ (live product surface — 20 `--rise--*` custom properties read via `getComputedStyle`, three controls measured at rest, hover, pressed and focus, and the stylesheet searched to separate Chatwork's rules from the embedded Marketo form's, 2026-09-22); https://www.kubell.com/ (株式会社kubell's own corporate site — the rename date, the statement that it operates Chatwork, and the 430,000-company figure; a second brand-owned Japanese surface, and the evidence that the parent's visual system is a separate one; not cited for tokens)
