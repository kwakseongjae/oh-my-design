---
name: Alibaba Cloud
colors:
  brand-orange: '#ff6a00'
  primary: '#1354ee'
  primary-hover: '#0033cc'
  secondary: '#dde8ff'
  secondary-hover: '#c8d9fd'
  navigation-hover: '#1366ec'
  heading: '#0d0d0e'
  navigation-ink: '#181818'
  content-ink: '#3d3d3d'
  foreground: '#999999'
  background: '#ffffff'
typography:
  action:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 21px
    use: Measured hero action labels; Roboto is live-loaded, Han glyph face unresolved.
  navigation:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 64px
    use: Measured 产品 header link.
  search:
    fontSize: 14px
    fontWeight: 400
    use: Measured header input; computed line-height normal.
rounded:
  none: 0px
components:
  hero-primary:
    type: button
    backgroundColor: '#1354ee'
    textColor: '#ffffff'
    rounded: 0px
    height: 50px
    padding: 14px 20px
    typography: 18px / 500
    hover: '#0033cc'
    pressed: '#0033cc'
    use: 免费开始使用 is a link styled as an action, measured at 280px wide. Hover and held press darken its fill and change the SVG arrow geometry. Keyboard focus had no change in the compared scope.
  hero-secondary:
    type: button
    backgroundColor: '#dde8ff'
    textColor: '#0d0d0e'
    rounded: 0px
    height: 50px
    padding: 14px 20px
    typography: 18px / 500
    hover: '#c8d9fd'
    pressed: '#c8d9fd'
    use: 通义万相3.0高级视频30% OFF is the secondary hero link, measured at 304.6px wide. Hover and held press darken its fill and change the SVG arrow geometry. Keyboard focus had no change in the compared scope.
  nav-product:
    type: button
    textColor: '#181818'
    rounded: 0px
    height: 64px
    padding: 0px 10px
    typography: 14px / 500
    hover: 'fg #1366ec'
    pressed: 'fg #1366ec'
    use: 产品 is a navigation link on the white header. Its own fill is transparent and omitted. Hover and held press turn the label blue and reveal the small ::after chevron; keyboard focus had no change in the compared scope.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Roboto
---

# Design System Inspiration of Alibaba Cloud

## Overview

### Visual Theme & Atmosphere

Alibaba Cloud provides cloud computing and data-management platforms. The company dates its establishment to September 2009; its current Chinese company page presents global cloud infrastructure, large-scale computing and AI technology as the foundations for enterprises entering the AI era. The product has evolved from infrastructure into a cloud-and-AI proposition. [Company](https://www.aliyun.com/about), [official history](https://www.alibabagroup.com/en-US/document-1491556654565556224).

Its visual identity makes computing tangible. Alibaba's 2016 logo announcement explains the brackets as calculation and the central dash as data flow. The official Brand Design page develops that dash into a cursor symbol and describes a language of code, computation, geometry, abstraction and motion. These are useful starting points for imagery with structure and purpose. [Logo announcement](https://www.alibabagroup.com/en-US/document-1491556654565556224), [Brand Design](https://design.aliyun.com/brand).

The measured homepage is the international Chinese edition (`alibabacloud.com/zh/?_p_lc=1`), reached automatically from `www.aliyun.com/`. Its current expression combines an orange logo, a white canvas, blue action fills and blue-to-lilac gradient emphasis. Square action buttons and a compact header frame a spacious AI-focused hero. The published portal guidance still identifies orange `#ff6a00` as the brand colour; the live hero's main action uses blue `#1354ee`. Treat those as separately evidenced roles. [Live edition](https://www.alibabacloud.com/zh/?_p_lc=1), [Portal Design System](https://design.aliyun.com/portal-design).

Primary tasks visible in the capture are starting a free trial, finding products, searching, opening documentation and exploring AI offers.

### Brand Narrative

The 2016 logo release made a programming metaphor explicit: calculation surrounds flowing data. The later Brand Design page describes the cursor as a starting point into the digital world. The current company page places AI capability alongside global infrastructure and accessible computing. Together these sources support a reference built around computing, recognisable geometry and an evolving cloud-and-AI offer. [Logo history](https://www.alibabagroup.com/en-US/document-1491556654565556224), [cursor and brand language](https://design.aliyun.com/brand), [company](https://www.aliyun.com/about).

### Principles

The official Evolving Design Language identifies four viewpoints: **order, the relationship between virtual and real, geometry, and motion**. It explains product imagery as a way to make abstract cloud concepts recognisable and consistent. Use those as documented design intentions; the measured homepage values above provide the implementation evidence for this edition. [Design language](https://design.aliyun.com/guideline?menuKey=product-identity).

### Personas

The company page addresses enterprises and developers; no persona study was verified. [Company](https://www.aliyun.com/about).

## Colors

These are semantic labels for observed values, not claimed names from an exported Alibaba token package. The readable custom properties contain layout helpers and Swiper variables; the palette below comes from computed controls and the rendered colour census.

| Role | Value | Evidence and application |
|---|---|---|
| Brand orange | `#ff6a00` | Named in the official portal guidance; also computed on the campaign card's root and SVG paths. |
| Primary action | `#1354ee` | 免费开始使用 hero link at rest. |
| Primary hover / held press | `#0033cc` | Same link with confirmed pointer hover and active press. |
| Secondary action | `#dde8ff` | 通义万相3.0高级视频30% OFF at rest. |
| Secondary hover / held press | `#c8d9fd` | Same secondary hero link. |
| Navigation hover / held press | `#1366ec` | 产品 header link; also its chevron border. |
| Heading / dark action label | `#0d0d0e` | Secondary hero label; campaign-title computed colour, whose visible fill is a gradient. |
| Navigation ink | `#181818` | 产品 at rest and header input ink. |
| Content ink | `#3d3d3d` | Campaign description; four `<p>` elements in the census. |
| Foreground, paragraph census | `#999999` | Dominant `<p>` ink, 81 occurrences; this is a census role, not a claim that all page copy uses this grey. |
| Background / inverse label | `#ffffff` | White surface and main action label. |

The title emphasis uses text clipped to a blue-to-lilac background gradient. The captured title's computed `color` alone therefore does not describe its visible lettering. Keep that distinction when reproducing it. [Live edition](https://www.alibabacloud.com/zh/?_p_lc=1).

## Typography

**Official product-use documentation.** The published China-site portal guidance names Helvetica for Latin and PingFang for Chinese on macOS/iOS; Arial and Microsoft YaHei on Windows. This is documentation for that portal surface, not proof of their rendering in the captured international edition. None appears in its loaded-face list, so no live specimen is assigned to them here. [Portal typography](https://design.aliyun.com/portal-design).

**Live-loaded.** The census reports **Roboto 300, 400, 500 and 700**, normal style. The measured action and navigation declarations use Roboto. The loaded list also includes `aliyun-2023-nav` and `iconfont` for icons, and `RobotoRegular` from the TrustArc consent layer; those are excluded from interface-font tokens.

**Official distributed assets.** The live Alibaba CDN stylesheet declares Roboto with local-font options and WOFF2 URLs under `assets.alicdn.com/g/alicloud-components/intl/0.3.10/fonts/roboto/`. The census proves loaded status; it does not identify whether the local or network source won. The icon stylesheets declare separate icon fonts. No standalone font package or licence was inspected. [Live base CSS](https://g.alicdn.com/alicloud-components/??alicloud-ui3/0.1.7/acUI.css,acApp/0.0.6/app.css,/intl/0.3.10/css/zh-cn/index.css).

**Declared-only.** Body and button stacks name `Roboto, "Helvetica Neue", Helvetica, Tahoma, Arial, sans-serif`. Besides Roboto, those names are not in the loaded-face list. The inline `font_1256165_ze64lzcva2m` face is declared but not loaded. These declarations receive no specimen.

**Unresolved.** The actual Han glyph font is not identified by this census. The inspected Roboto subsets do not establish Chinese glyph coverage. There is no measured H1 family or size (`h1: null`). Substitute: none chosen.

| Measured role | Size / weight | Line height |
|---|---|---|
| Both hero action labels | 18px / 500 | 21px |
| 产品 navigation | 14px / 500 | 64px |
| Header search input | 14px / 400 | `normal` |
| Campaign title | 16px / 600 computed | Parent title box 24px high; no separate live-loaded 600 face was reported. |

## Layout

At the measured 1440 × 1000 viewport, the promotion strip is 60px high and the navigation below it is 64px high. The hero actions align at y = 522px; their horizontal gap is 24px, derived from the primary's right edge at x = 288px and the secondary's left edge at x = 312px. A partner-logo band follows the hero, then a four-card campaign row. These are capture-specific measurements, not a reconstructed global grid.

For this surface, preserve the action pair's alignment and compact header rhythm. Use the gradient emphasis within otherwise plain text rather than adding decoration to every label.

### Responsive Behavior

Current responsive behaviour was not measured; the live evidence is desktop 1440 × 1000 only.

## Elevation & Depth

Both hero links, the product link and the campaign card have `box-shadow: none` at rest. The expanded search ancestor measures `rgba(0, 0, 0, 0.1) 0px 4px 20px 0px`; its persistence after blur makes this an expanded-surface observation, not a keyboard-focus shadow token. The hero's soft coloured atmosphere is visible in the screenshot; no blur radius is inferred from it.

## Motion & Easing

The hero links' raw computed transition is `all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s`. The 产品 link's transition is `color 0.3s ease-in-out 0s`. Those strings apply to the measured elements; they are not a universal motion scale.

Hover and press also change SVG arrow paths, visibility and transforms in both hero links and the campaign card. The snapshots establish different arrow geometry, not an animation duration. The card root and search input each report `all 0s ease 0s`; that does not establish zero-duration motion for their children or ancestors. No reduced-motion behaviour was tested.

## Components

The three exported controls are links. Their state colours were measured with `:hover` confirmed, a held pointer press, and a real Tab walk. Consent was rejected through **Decline All**.

| Control | Rest identity | Hover and held press |
|---|---|---|
| 免费开始使用 | 280 × 50px; radius 0; padding 14px 20px; white 18px/500 label; blue fill | Fill `#1354ee → #0033cc`; SVG arrow geometry changes. |
| 通义万相3.0高级视频30% OFF | 304.6 × 50px; radius 0; padding 14px 20px; dark 18px/500 label; pale-blue fill | Fill `#dde8ff → #c8d9fd`; SVG arrow geometry changes. |
| 产品 | 48 × 64px; radius 0; padding 0px 10px; 14px/500; transparent over white | Ink `#181818 → #1366ec`; `::after` opacity 0 → 1 reveals a small chevron. |

The header input is 172 × 40px at rest, radius 0, padding `1px 16px 1px 40px`, white fill and `#181818` ink. Keyboard focus expanded it to 872 × 40px and opened a white, shadowed ancestor surface. Those changes persisted after blur, so the input remains a prose observation rather than an exported component or focus token.

The 迁移上云，智省成本 campaign link is 351.8 × 174px with radius 0, no padding and a transparent root over white. Its root declares 14px/400 and orange, while the title is 16px/600 with a gradient text fill and its description is `#3d3d3d`. Hover and press change the arrow's SVG geometry. Root and non-text descendants change computed orange to `#ff791a`; focus produces that inherited-colour change without changing the visible title or arrow geometry. A single flat foreground would misrepresent this card, so its detailed measurements stay in prose.

### States

For both hero links and the product navigation link, held press matches the settled hover appearance; there is no additional measured pressed delta. Real keyboard focus was reached at Tab stops 43, 44 and 5 respectively and produced no change within the probe's scope: self and pseudo-elements, descendants and their pseudo-elements, and three ancestor levels. The hero links include 29 descendants each; the product link has none. No focus token is exported.

The card's root-colour change is reversible on blur but does not recolour its gradient title or the arrow paths. The search expansion persists after blur and is excluded from focus tokens. Pointer measurement of 产品 was obstructed by that expansion in the first run; the separate navigation-only run measured hover and press successfully. Disabled, validation and selected states were not measured.

## Do's and Don'ts

- Match the measured international edition's blue action fills and square corners when building this homepage style.
- Preserve the distinction between a root's computed text colour and a title painted with a clipped gradient.
- Keep the documented platform-font guidance attached to its China-site scope; use only the verified live family in the live-extract family token.
- Keep Swiper defaults, icon fonts and consent fonts out of brand palette and type roles.
- Leave unverified focus rings, disabled styles and mobile measurements absent.

## Voice & Tone

The official design-language writing guidance calls for professional, concise, stable language, with the subject and purpose clear. The captured action labels are direct: 免费开始使用 and 产品. Use task names and concrete product descriptions. [Writing guidance](https://design.aliyun.com/guideline?menuKey=product-identity).

## Agent Prompt Guide

“Create an Alibaba Cloud international Chinese homepage action pair: square 50px-high links, 14px 20px padding, 18px/500 labels, primary `#1354ee` with white lettering and secondary `#dde8ff` with `#0d0d0e` lettering. Darken the fills to `#0033cc` and `#c8d9fd` on hover and held press. Place the pair 24px apart. Roboto is the live-loaded family; the Han glyph face is unresolved.”

“Create a compact product navigation link on white: 64px high, 0px 10px padding, 14px/500, `#181818` at rest and `#1366ec` on hover. Reveal its small chevron with opacity 0 → 1.”

These prompts describe the measured surface. Substitute: none chosen.
