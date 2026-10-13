---
name: Douyin
colors:
  brand: '#fe2c55'
  brand-hover: '#d21b46'
  canvas: '#161823'
  surface: '#252632'
  surface-raised: '#33343f'
  surface-hover: '#2e2f3b'
  surface-secondary: '#292b35'
  surface-deep: '#20212c'
  foreground: '#f9f9f9'
  text-secondary: '#f2f2f4'
  on-brand: '#ffffff'
  light-canvas: '#f9f9fa'
  accent-cyan: '#00f3e9'
typography:
  base:
    fontSize: 16px
    use: Dominant reading size — 1,266 of ~2,000 sampled elements
  secondary:
    fontSize: 14px
    use: Secondary text and control labels
  dense:
    fontSize: 13px
    use: Dense metadata
  caption:
    fontSize: 12px
    use: Captions and counts
  lead:
    fontSize: 24px
    use: Section lead
  micro:
    fontSize: 10px
    use: Smallest step
rounded:
  sm: 4px
  md: 12px
  lg: 16px
  pill: 72px
omitted:
  - section: spacing
    reason: No verified values in current evidence.
  - section: components
    reason: No verified values in current evidence.
---

# Design System Inspiration of Douyin (抖音)

## Overview

### Visual Theme & Atmosphere

Douyin is **dark-first**, and not as a theme option — the dark surface is the product. Video
is the content, so the chrome gets out of its way: near-black `#161823` canvas, panels a step
lighter at `#252632`, and text that is almost never a solid colour but **white at a stated
opacity** — `rgba(255,255,255,.75)` for body, `.34` for tertiary.

Against that, one colour: **`#fe2c55`**, the Douyin red, declared as `--color-primary`.

The token set gives away what the product actually is. Alongside the ordinary background and
text families sit **`gift-*` (19 properties) and `pk-*` (18)** — virtual gifts and
livestream battles, two mechanics with no equivalent in a Western social product and enough
design weight to earn their own token families. A `-ucenter` suffix marks a distinct
user-centre layer with its own light-mode values.

#### Primary tasks
- Watch video with chrome that never competes with it.
- Read overlaid text at several opacities against unpredictable video frames.
- Operate livestream mechanics — gifts, PK battles — that have dedicated visual vocabulary.

### Brand Narrative

Launched by ByteDance in September 2016, Douyin is the Chinese short-video platform whose
international sibling is TikTok. Its interface has been dark-first from early on, and its
economics run on livestreaming — virtual gifting and PK battles between creators. That the
token set carries dedicated `gift-*` and `pk-*` families is the clearest evidence in this
reference of what the product actually monetises.

### Principles

- **The chrome is a frame.** Dark, low-contrast, never competing with video.
- **Opacity is the hierarchy.** One white ink at graded alpha.
- **Name what you monetise.** Gifting and PK earn their own token families.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured 2026-09-22 via `getComputedStyle` on `douyin.com`. Douyin's token name follows each
role. Values are given as hex where the token resolves to an opaque colour.

### Brand

- **Douyin Red** (`#fe2c55`) — `--color-primary` and `--color-primary-default-ucenter`;
  resolves as `rgba(255,44,85,1)`.
- **Brand Hover** (`#d21b46`) — `--color-primary-hover` / `--color-primary-hover-ucenter`,
  `rgba(210,27,70,1)`.

### Dark surfaces — the default

- **Canvas** (`#161823`) — `--color-bg-b0`, `rgba(22,24,35,1)`. Also `gift-color-bg-2`.
- **Surface** (`#252632`) — `--color-bg-base-b1`, `rgba(37,38,50,1)`. Painted 47 times, the
  most common fill on the page. Also `pk-color-bg-0`, `gift-color-bg-4` and
  `im-shareList-bg-start` — one step reused across livestream, gifting and messaging.
- **Surface Raised** (`#33343f`) — `--color-bg-toast-ucenter`.
- **Surface Hover** (`#2e2f3b`) — `--audience-color-hover-bg-0`.
- **Surface Secondary** (`#292b35`) — `--color-bg-rs`, `--comment-bg`, `--gift-color-bg-3`.
- **Surface Deep** (`#20212c`) — `--small-bg-color`.

### Text — opacity, not colour

Douyin's text tokens are **white at fixed alpha**, so a single ink works over video of any
brightness:

- `--color-text-t2` / `--color-text-1` `rgba(255,255,255,.75)` — body.
- `--name-list-text-0` `rgba(255,255,255,.9)` — names.
- `--color-text-close` `rgba(255,255,255,.8)`.
- `--color-text-t4` / `-t5` / `pk-color-text-1` `rgba(255,255,255,.34)` — tertiary.
- `--color-const-text-white60` `rgba(255,255,255,.6)`.

**Foreground** (`#f9f9f9`) is the rendered near-white, painted 795 times. The `-ucenter`
layer inverts: `--color-text-t2-ucenter` is `rgba(22,24,35,.75)` — dark ink for a light surface.

### Light layer and accent

- **Light Canvas** (`#f9f9fa`) — `--color-bg-b1-ucenter`. The user-centre surface is light.
- **Text Secondary** (`#f2f2f4`) — `--color-secondary-default-ucenter`.
- **Accent Cyan** (`#00f3e9`) — rendered once; recorded as an observed accent, not a role.
- **On Brand** (`#ffffff`) — the sign-in button's label colour, measured on the control.

## Typography

### Font Family

The body stack computes `-apple-system`. Douyin publishes **no font-family token** among its
424 properties, so `tokens.typography.family` is **absent**: the platform system face is not
promoted to a brand typeface.

### Scale

| Role | Size | Count in sample |
|---|---|---|
| Base | 16px | **1,266** |
| Secondary | 14px | 490 |
| Dense | 13px | 138 |
| Caption | 12px | 58 |
| Lead | 24px | 14 |
| Micro | 10px | 11 |

**16px carries 63% of the page.** Like Weibo, hierarchy comes from opacity and enclosure
rather than from size.

## Layout

- **Dark canvas, lighter panels.** `#161823` under `#252632`, a single step of separation.
- **12px is the radius.** 81 of the page's rounded corners.
- **One ink at many opacities** rather than a grey ramp, so text stays legible over video.

### Responsive Behavior

**Not measured.** Desktop 1440×900 only. Douyin is primarily a mobile application and the web
surface is a secondary view of it.

## Elevation & Depth

**Not measured.** No shadow or elevation token appears among the 424 properties. Douyin
separates layers by background step, not by shadow.

## Motion & Easing

**Not measured.** No transition or duration token appears among the 424 properties.

---

**Tier 1 sources:** https://www.douyin.com/ (live production home — 424 custom properties read via `getComputedStyle`, including the `gift-*`, `pk-*` and `-ucenter` families that are specific to Douyin's livestream and user-centre surfaces, 2026-09-22); https://open.douyin.com/ (Douyin Open Platform — a second brand-owned regional source; its chrome is a separate palette and is **not** cited for product tokens, see the verification notes)

## Components

**No component is declared.**

The one control the logged-out home exposes is the sign-in button: `#fe2c55` fill, 12px
radius, 38px tall, 15px/500 — and it **does not change on hover, press or focus**. Everything
else is behind a sign-in wall.

Douyin declares `--color-primary-hover` (`#d21b46`) and `--color-secondary-hover`
(`rgba(242,242,244,.12)`), so the interaction contract exists in the token set. This capture
did not find a control rendering it, so no component state is claimed.

### Radius

`--radius-small_1-ucenter` 4px · `--radius-large_1-ucenter` 12px · `--radius-large_2-ucenter`
16px are published. Rendered, **12px dominates at 81 occurrences**, with a 72px pill used 5
times. Two asymmetric values — `12px 0 0 12px` and `0 12px 12px 0` — appear once each, the
halves of a split control.

### States

**None observed.** The sign-in button does not react to hover, press or focus, and it is the
only control the logged-out surface exposes. `--color-primary-hover` and
`--color-secondary-hover` are recorded as colour tokens, not as component states.

## Do's and Don'ts

### Do
- Build dark-first: `#161823` canvas, `#252632` panels.
- Express text hierarchy as **white at .9 / .75 / .34 alpha**, not as grey values.
- Reserve `#fe2c55` for the primary action.
- Use 12px radius as the default.

### Don't
- Don't take `open.douyin.com`'s palette — `#1c5cfb`, `#1ff17f`, `#692cea` are a developer
  portal's colours, not the product's (§ verification notes).
- Don't convert the alpha text tokens into opaque greys; the alpha is what makes them work
  over video.
- Don't invent hover states for components — the declared hover tokens exist but this capture
  observed none rendering.

## Voice & Tone

Terse and mechanical in the chrome — 登录 (sign in) and little else. The product's personality
lives in its content and its livestream mechanics, not in interface copy.

## Agent Prompt Guide

### Quick Color Reference
`#fe2c55` brand · `#d21b46` brand hover · `#161823` canvas · `#252632` surface ·
`#33343f` raised · white at .9 / .75 / .34 for text

### Example Component Prompts
- "A dark video card: `#252632` panel on `#161823`, 12px radius, title white at 90%,
  metadata white at 34%, one `#fe2c55` action."
