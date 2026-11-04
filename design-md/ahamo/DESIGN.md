---
name: ahamo
colors:
  primary: '#01b5d0'
  hero-action: '#50b3cd'
  wave-layer: '#52d0d5'
  foreground: '#3b4043'
  button-label: '#484848'
  background: '#ffffff'
  surface: '#f6f6f6'
  border: '#a7a7a7'
  navigation: '#000000'
typography:
  header-action:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 16.8px
    use: Header application link; loaded noto-sans-cjk-jp.
  hero-action:
    fontSize: 14px
    fontWeight: 400
    use: Hero action anchors and their visible child labels; computed family Work Sans, with the loaded Japanese face in the body stack.
  navigation:
    fontSize: 19px
    fontWeight: 500
    letterSpacing: 0.38px
    use: Measured header link to /flow; computed family Work Sans.
  product-label:
    fontSize: 16px
    fontWeight: 500
    use: Visible iPhone Duo card label; the enclosing anchor is 14px/400.
rounded:
  compact-action: 20px
  hero-action: 28px
components:
  hero-apply:
    type: button
    backgroundColor: '#50b3cd'
    textColor: '#ffffff'
    border: '1px solid #a7a7a7'
    rounded: 28px
    height: 56px
    padding: 0px
    typography: 14px / 400
    hover: Child .a-wavy-button__inverted-content mask-position changes from -1176px 53px to -376px -50px.
    pressed: Same child mask-position as hover; no additional change versus hover.
    use: '今すぐ申し込み — a 312px-wide link to /store/pub/application/type/. The visible label is white; the anchor''s inherited color is #484848. A masked #52d0d5 layer supplies the interaction. Child padding is 0 32px 0 28px in the first-party stylesheet.'
  hero-flow:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#484848'
    border: '1px solid #a7a7a7'
    rounded: 28px
    height: 56px
    padding: 0px
    typography: 14px / 400
    hover: Child .a-wavy-button__inverted-content mask-position changes from -1176px 53px to -376px -50px.
    pressed: Same child mask-position as hover; no additional change versus hover.
    use: '申し込みの流れ — a 312px-wide link to /flow/. Rest label #484848; the masked interaction layer is #52d0d5 with white text. Child padding is 0 32px 0 28px in the first-party stylesheet.'
  header-apply:
    type: button
    backgroundColor: '#01b5d0'
    textColor: '#ffffff'
    rounded: 20px
    height: 40px
    padding: 0px 8px
    typography: 14px / 500
    hover: transform matrix(1.05, 0, 0, 1.05, 0, 0); bounding box 160x40 to 168x42.
    pressed: Same transform and bounding box as hover; no additional change versus hover.
    use: 申し込み — a 160px-wide header link to /store/pub/application/type/. Background and visible foreground stay unchanged during measured hover and pressed states.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Work Sans
    japanese: noto-sans-cjk-jp
---

# Design System Inspiration of ahamo

## Overview

### Visual Theme & Atmosphere

ahamo is NTT DOCOMO's online mobile plan. Announced in December 2020 and launched on 26 March 2021, it was introduced for a generation accustomed to digital services, with simpler conditions and online procedures. The name combines the aha moment, the English acknowledgement “Aha,” and the Japanese expression of laughter. DOCOMO describes the intended feelings as surprise, joy and fun. [Launch announcement](https://www.docomo.ne.jp/info/news_release/2020/12/03_00.html), [launch date](https://www.docomo.ne.jp/info/news_release/2021/02/05_01.html).

The current [About page](https://ahamo.com/about/) presents simplicity as a route to freedom and connection. The captured homepage gives that story a bright expression: photographic campaign panels, a white canvas, cyan actions, rounded outlines and a wave-shaped interaction inside the larger buttons. The lowercase ahamo logo is delivered as an image asset.

The product continues to change: ahamo's September 2024 notice records the increase from 20GB to 30GB without changing the monthly price. At capture, its homepage links to DOCOMO's notice of a further plan revision effective 1 December 2026. [2024 update](https://ahamo.com/news/fhqhpm0000000bsx.html), [2026 revision](https://www.docomo.ne.jp/charge/plan_renewal2026/).

The measured homepage is the Japanese surface at `ahamo.com/`, with HTML `lang="ja"`; the capture did not redirect to another regional path. Its visible tasks include understanding the plan, reading the application flow, browsing phones, applying and reaching support.

### Brand Narrative

The name's documented references to understanding and laughter give the product a vocabulary of discovery and enjoyment. The current About page connects a simple mobile service with freedom to connect. The measured implementation pairs that story with campaign photography, rounded actions and a wave mask. [Naming origin](https://www.docomo.ne.jp/info/news_release/2020/12/03_00.html), [current story](https://ahamo.com/about/).

### Principles

Use these as implementation guidance derived from the evidence, not as official ahamo design principles: give the main application task a clear cyan action; distinguish compact header controls from larger hero links; keep ordinary paragraph ink dark gray; implement the observed child-layer interaction; and retain the source's distinction between loaded fonts and declarations.

### Personas

No current persona research was verified; the launch release's digital-native audience is historical positioning, not a measured present-day persona.

## Colors

These role names describe the extracted homepage values; they are not names from a published ahamo token specification.

| Role | Value | Observed use |
|---|---|---|
| Primary | `#01b5d0` | Header application link background |
| Hero action | `#50b3cd` | “今すぐ申し込み” background at rest |
| Wave layer | `#52d0d5` | Masked child layer in both large hero links |
| Foreground | `#3b4043` | Paragraph ink: 31 sampled `<p>` elements; also the product card's label |
| Button label | `#484848` | Secondary hero label and inherited color on both hero anchors |
| Background | `#ffffff` | White canvas, secondary hero background and primary labels |
| Surface | `#f6f6f6` | Ground behind the measured product card; 24 background occurrences in the census |
| Border | `#a7a7a7` | Both hero links' 1px solid border |
| Navigation | `#000000` | Header “申し込みの流れ” text |

Keep the three cyan values distinct. The header action and hero action have different resting fills, and the wave layer has its own color. The header behind the measured navigation link resolves to `rgba(246, 246, 246, 0.6)`; it is a translucent surface, not an opaque palette token.

The root census exposed only `--swiper-theme-color: #007aff` and `--swiper-navigation-size: 44px`. Both are excluded as Swiper defaults. The first-party CSS contains additional local layout variables, recorded in the research report; they do not establish a root brand palette.

## Typography

**Official product-use statement:** no opened ahamo brand document names an official product typeface.

**Live-loaded:** `document.fonts` reports **Work Sans**, variable weight range 100–900, normal; and **noto-sans-cjk-jp**, weights 350, 400, 500, 600 and 700, normal. The body declares `"Work Sans", noto-sans-cjk-jp, sans-serif`. The two named loaded faces are the only families promoted to typography tokens. A family declaration alone does not identify the face used for each Japanese glyph.

**Official distributed asset declarations:** the [first-party font CSS](https://cache.cil.ahamo.com/common/fonts/fonts.css?1640) points Work Sans to `WorkSans.woff2` with format `woff2-variations`. The Japanese family maps to Noto Sans CJK JP WOFF2 files on the same CDN, with local-name lookups first. Both weights 500 and 600 map to `NotoSansCJKjp-Medium.woff2`. The census does not expose whether a local lookup or the URL supplied each Japanese face. Font binaries and licenses were not downloaded or verified.

**Declared-only:** that stylesheet also declares Japanese weights 100 and 300, and `best10-dot` at 400; none appears in the loaded-face census. The sampled native button and collapsed search input declare Arial, which is not listed among loaded web faces. These declarations receive no specimen and no family token.

**Unresolved:** the census has no sampled `h1`, and the exact glyph-by-glyph font selection and font licenses were not established. **Substitute: none chosen.**

| Measured role | Size / weight | Other metrics |
|---|---|---|
| Header application link | 14px / 500 | `noto-sans-cjk-jp`; line height 16.8px |
| Hero links and visible labels | 14px / 400 | Anchor family Work Sans; line height `normal` |
| Header flow navigation | 19px / 500 | Work Sans declaration; 0.38px letter spacing |
| Product card name | 16px / 500 | Visible child label; anchor itself 14px / 400 |

## Layout

At 1440×1000, a 74px sticky header carries the logo, text navigation, application and login links, search opener and menu opener. The photographed campaign spans the page beneath it. The two hero actions form a centered vertical stack: x=557px, width 312px, top positions 630px and 702px, leaving a measured 16px gap.

The survey records 315×315px promotional links and a product carousel. The measured product link is 378×565px, with 64px top padding and a 378×470px image descendant. Preserve the difference between a compact action, a large hero action and an image-led product link.

### Responsive Behavior

The opened component CSS sets the base `.a-wavy-button` to 100% width, 40px height and 20px radius. Its media rules from 641px upward set 312px width, 56px height and 28px radius. Only the desktop viewport was rendered; mobile layout, touch behavior and reduced-motion behavior were not measured.

## Elevation & Depth

The three measured action links have `box-shadow: none`. Their separation comes from fills, outlines and the wave layer. The header is translucent: the navigation link's nearest painted background is `rgba(246, 246, 246, 0.6)`. No reusable shadow scale was established.

## Motion & Easing

The hero links' child mask movement is measured. The probe reports a longest transition of **500ms** and sampled after **900ms**. Each selected control's own raw computed transition is `all 0s ease 0s`; that anchor-level value does not describe the animated child. The child's raw computed easing string was not exported, so no computed easing token is published. The header CTA's settled scale is measured; its animation duration was not exported by the state capture.

---

Live values: [ahamo homepage](https://ahamo.com/), survey and states captured 2026-11-03 at 1440×1000, `ja-JP`. First-party CSS: [fonts](https://cache.cil.ahamo.com/common/fonts/fonts.css?1640) and [components](https://cache.cil.ahamo.com/assets/css/components.css?776273). Legal operator and location: [特定商取引法に基づく表記（ahamo）](https://ahamo.com/assets/documents/specified_commerce.pdf). Full raw evidence, exclusions and narrative quotes are recorded in `verification.md` and `report.md`.

## Components

Three action links have measured authored hover and pressed changes. Their keyboard focus indication is the browser's `auto` outline, so no brand focus token is declared.

**Hero application link — “今すぐ申し込み”.** A 312×56px anchor, 28px radius, 1px `#a7a7a7` border, `#50b3cd` background, zero anchor padding and no shadow. Its anchor color is `#484848`, but the visible child label is `#ffffff`, at 14px/400. The normal and inverted child layers each measure 310×54px. First-party CSS gives those layers padding `0 32px 0 28px`.

On hover, the inverted child's mask position changes from `-1176px 53px` to `-376px -50px`. That child already has `#52d0d5` background and white text; the measured change is the mask position, not the anchor background. Pressed retains the same mask position, with no additional change versus hover.

**Hero flow link — “申し込みの流れ”.** The same 312×56px geometry, 28px radius, zero anchor padding and 1px border. Rest is `#ffffff` with a visible `#484848` label. Its inverted layer is `#52d0d5` with white text, and hover and pressed use the same measured mask positions as the application link.

**Header application link — “申し込み”.** A separate 160×40px treatment: 20px radius, padding `0 8px`, no border or shadow, `#01b5d0` background and white 14px/500 text. Hover changes its transform from `none` to `matrix(1.05, 0, 0, 1.05, 0, 0)`, producing a 168×42px bounding box. Pressed keeps that result. Neither state changes its measured colors.

The header flow link, collapsed search input and product card are documented in §14 but omitted from component tokens: the first and last showed no authored state change, and the input's states were unmeasured.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Hero application | Child mask `-1176px 53px` → `-376px -50px` | Same as hover; no additional change | Browser `auto` ring only |
| Hero flow | Same child mask change | Same as hover; no additional change | Browser `auto` ring only |
| Header application | Scale 1.05; 160×40 → 168×42px | Same as hover; no additional change | Browser `auto` ring only |
| Header flow navigation | No change in the compared scope | No change in the compared scope | Browser `auto` ring only |
| Header search | UNMEASURED | UNMEASURED | UNMEASURED; inert and `pointer-events:none` |
| Product card | No change in the compared scope | No change in the compared scope | Browser `auto` ring only |

The navigation anchor is 135.7×28px, radius 0, padding 0, black 19px/500 text, transparent over the translucent header. The product anchor is 378×565px, radius 0, padding `64px 0 0`, transparent over `#f6f6f6`, with `#3b4043` text; its visible name is 16px/500. The collapsed search input's computed box is 200×40px, radius 20px, padding `0 50px`, white background, black declared 16px/400 Arial, and a transparent 1px border. Its enclosing search panel has opacity 0; this is hidden-layout evidence, not an enabled input measurement.

“No change” is limited to computed styles and attributes on the control, its pseudo-elements and three ancestor levels, plus zero descendants for the nav link and four descendants (including one image) for the product card. It does not prove absence of pixel-only, sibling or cross-origin effects. All five reached controls gained `rgb(0, 95, 204) auto 1px off 1px` on Tab; no other focus-only change was recorded, and none persisted after blur. The ring is excluded from brand tokens.

The recorded hover snapshots have `:hover=true`; pressed snapshots have `:active=true`. Later crop checks lost those states, so the pointer crops are not relied on as state proof. The DOM snapshots supply the state values; rest and keyboard-focus crops confirm control identity.

## Do's and Don'ts

- Keep compact actions at 40px high with 20px radius, and desktop hero actions at 56px high with 28px radius.
- Reproduce the layered mask for the hero hover; changing only the anchor fill would miss the measured interaction.
- Use the visible label color: the primary hero's inherited anchor color differs from its white child label.
- Keep `#3b4043` as paragraph foreground and reserve the measured black for header navigation.
- Do not turn Swiper's default blue into the ahamo primary color.
- Do not add a font specimen for `best10-dot`, unloaded Japanese weights or Arial from a declaration alone.
- Keep browser `auto` focus separate from authored brand states.

## Voice & Tone

The About page says “プランは「欲しい」を凝縮してシンプルに。” and closes with “さあahamoで はじめよう”. This supports a concise, inviting style centered on simplicity. The homepage action labels are practical: “今すぐ申し込み” and “申し込みの流れ”. This is an interpretation of the opened copy, not a published voice manual. [About ahamo](https://ahamo.com/about/).

## Agent Prompt Guide

“Build a Japanese mobile-plan landing page with a white canvas, photographic campaign content, `#3b4043` paragraph ink, and compact `#01b5d0` application links. Use the measured 160×40px header action, with 20px radius and 14px/500 text in the loaded Japanese family. Scale it to 1.05 on hover and pressed.”

“For the larger actions, use a 312×56px link with 28px radius and a 1px `#a7a7a7` border. The application version rests on `#50b3cd` with white text; the flow version rests on white with `#484848` text. Reveal the `#52d0d5` child layer by moving its mask from `-1176px 53px` to `-376px -50px` on hover. Keep the measured font declarations and do not supply an unverified substitute.”

## Governance

### Known Gaps

- **Contrast, `hero-apply`.** Text `#ffffff` on `#50b3cd` measures 2.42:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-apply`.** Text `#ffffff` on `#01b5d0` measures 2.46:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
