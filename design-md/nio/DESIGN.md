---
name: NIO
colors:
  primary: '#00bebe'
  foreground: '#000000'
  background: '#ffffff'
  nav-foreground: '#5a5a5a'
  muted-foreground: '#7d7d7d'
  model-ink: '#111111'
  service-ink: '#000f16'
  divider: '#f0f1f2'
typography:
  action-small:
    fontSize: 12px
    fontWeight: 400
    use: Header and section action links; BlueSkyStandard is live-loaded on this website.
  action-model:
    fontSize: 14px
    fontWeight: 400
    use: 40px model-carousel action link; measured line-height 20px.
  navigation:
    fontSize: 12px
    fontWeight: 400
    use: Footer navigation links; measured line-height 19px.
rounded:
  none: 0px
components:
  test-drive:
    type: button
    textColor: '#ffffff'
    border: '#ffffff'
    rounded: 0px
    height: 32px
    padding: 0 14px
    typography: 12px / 400
    hover: 'bg #ffffff; fg #000000; icon filter invert(1) to invert(0)'
    use: Header link 预约试驾 to /test-drive, 104px wide. Transparent at rest over the hero imagery, with a 1px solid white border and 30px line-height. Hover fills white and turns the label and icon black.
  model-five-seat:
    type: button
    textColor: '#111111'
    border: '#111111'
    rounded: 0px
    height: 40px
    padding: 11.2px 16px
    typography: 14px / 400
    hover: 'bg #111111; fg #ffffff'
    use: Model-carousel link 大五座版 to /es8-five-seater, 96.4px wide. Transparent at rest on the light model area, with a 1px solid border and 20px line-height.
  power-more:
    type: button
    textColor: '#000f16'
    border: '#000f16'
    rounded: 0px
    height: 32px
    padding: '0'
    typography: 12px / 400
    hover: 'bg #000f16; fg #ffffff'
    use: NIO Power section link 了解更多 to /nio-power, 88px wide. Transparent at rest on the white section, with a 1px solid border and 32px line-height.
  house-more:
    type: button
    textColor: '#ffffff'
    border: '#ffffff'
    rounded: 0px
    height: 32px
    padding: '0'
    typography: 12px / 400
    hover: 'bg #ffffff; fg #000000'
    use: NIO House section link 了解更多 to /nio-house, 88px wide. Transparent at rest in the black and photographic section, with a 1px solid white border and 32px line-height.
  about-nav:
    type: button
    textColor: '#5a5a5a'
    rounded: 0px
    height: 19px
    padding: '0'
    typography: 12px / 400
    hover: 'fg #00bebe'
    use: Footer navigation link 关于我们 to /about, 48px wide. Transparent on the white footer, with no border; its label changes to cyan on hover.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: BlueSkyStandard
---

# Design System Inspiration of NIO

## Overview

### Visual Theme & Atmosphere

NIO designs, develops, manufactures and sells smart electric vehicles. Founded in November 2014, the company now describes a portfolio spanning premium NIO vehicles, family-oriented ONVO vehicles and small high-end FIREFLY cars. Its identity connects the promise of a better future with practical action: the upper part of the logo represents sky and vision, the lower part earth and action, and their meeting forms a horizon. [Company profile](https://ir.nio.com/governance/company-profile), [About NIO](https://www.nio.com/about).

The China homepage gives vehicles and their surroundings most of the visual space. A scenic automotive hero carries small white navigation and outlined actions; lower sections alternate light service presentations with a black NIO House presentation. The measured controls have square corners, thin borders and compact labels. Cyan appears in the footer link's hover state, while the main action links switch between outline and solid monochrome treatments. These are observations of the live website, rather than a published brand rulebook.

The measured homepage is the China edition at `www.nio.cn/`, with HTML language `zh-CN` and no regional redirect. Its current survey includes links for both ES8 seating variants and an ES9 configurator. This reference covers that public website; it does not establish the styling of NIO's vehicle software or mobile apps.

### Brand Narrative

NIO's stated mission uses the phrase **Blue Sky Coming**. Its About page extends the brand beyond vehicles into NIO House, a place for users and friends, and NIO Life, its lifestyle brand. The homepage gives Power, Service and House their own substantial visual sections, making those parts of ownership visible alongside the cars. [About NIO](https://www.nio.com/about).

### Principles

NIO explicitly lists user interests and design among its guiding priorities. A historical [NIO design article](https://us.nio.com/blog/driven-design-inside-and-out), dated March 25, 2021, describes design and engineering work preceding manufacturing.

For this website reference, the measured implications are small outlined controls, media-led sections and fill inversion on hover. These implementation observations are not additional corporate principles.

### Personas

No persona research was conducted.

## Colors

| Role | Measured value | Evidence and use |
|---|---|---|
| Primary accent | `#00bebe` | Footer “关于我们” hover; also the computed `--text_brand_default` and `--bg_brand_default` value. |
| Foreground | `#000000` | Paragraph ink on 86 `<p>` elements. Also the hovered label of the white header and House actions. |
| Background / inverse label | `#ffffff` | Rendered white surfaces and resting labels on dark imagery; white fill on hovered header and House actions. |
| Navigation foreground | `#5a5a5a` | Resting footer link label. |
| Muted paragraph ink | `#7d7d7d` | Paragraph ink on 10 `<p>` elements. |
| Model action ink | `#111111` | Model-carousel action label and border; its hover fill. |
| Service action ink | `#000f16` | Power action label and border; its hover fill. |
| Footer divider | `#f0f1f2` | A 1px solid border on the footer link's third ancestor. |

The survey contains 3,902 computed root custom properties and 4,313 distinct properties in readable stylesheets. Much of that inventory belongs to NIO's bundled account components and their theme. It is not a list of colours visibly used by the marketing page. The palette above uses rendered colours and measured control states. In particular, paragraph ink is black, even though the bundled theme's `--text_primary` resolves to a different dark colour.

The controls are transparent at rest: `rgba(0, 0, 0, 0)`, or `rgba(18, 18, 18, 0)` for the model action. Preserve their photographic or sectional backdrop when reproducing them.

## Typography

**Official product use:** no opened prose guideline identifies a typeface for all NIO products. The evidence here establishes use on the China website.

**Live-loaded:** `document.fonts` reports **BlueSkyStandard**, normal style, at weights **300, 400 and 700**. The measured action and navigation links declare this family. The site's opened [font stylesheet](https://cdn-public.nio.com/www-nio-cn/cdn-static/_next/static/css/45ee7774c19301e1.css) supplies matching `@font-face` rules: Regular at 400, Light at 300 and Bold at 700. Each offers a WOFF source first, followed by TTF and EOT alternatives under `www.nio.cn/cdn-static/luban/nextjs/fonts/`. The capture does not identify which format was transferred.

**Official distributed assets:** that stylesheet also declares a 400 italic face and `BlueSkyTextArabic` at 300, 400 and 700. The readable census separately finds eight `Blue Sky Standard-*` family aliases pointing to TTF assets on `cdn-app.nio.com`. These declarations establish asset references, not a public redistribution licence.

**Declared-only:** the italic, Arabic and spaced family aliases do not appear in the loaded-face list. The body's CSS fallback stack is also only a declaration; it does not identify which face rendered an individual character. No specimen is assigned to these unconfirmed faces.

**Unresolved:** Han glyph coverage and the actual per-character fallback were not measured. Substitute: none chosen.

| Measured text | Size / weight | Line-height |
|---|---|---|
| Header test-drive action | 12px / 400 | 30px |
| Model-carousel action | 14px / 400 | 20px |
| Power and House actions | 12px / 400 | 32px |
| Footer navigation | 12px / 400 | 19px |

No `<h1>` declaration was available in the homepage census. The hero “大五座版” link reports 12px / 440 with 14px line-height; this computed weight does not establish a separately loaded 440 face.

## Layout

At the measured 1440 × 1000 viewport, the fixed header is 64px high. The hero and Power action begin at x = 80px; the header test-drive action ends at x = 1360px. The full-page image shows broad media sections, a light service area, a black House area and a compact white footer.

Keep the action metrics distinct: the header uses 14px horizontal padding; the 40px model action uses 16px horizontal padding and a measured 11.2px vertical padding. The fixed action height should be preserved alongside that computed padding. A general grid or breakpoint scale was not measured.

### Responsive Behavior

Only the 1440 × 1000 desktop viewport was measured; mobile layouts and breakpoints are unverified.

## Elevation & Depth

The six inspected controls have `box-shadow: none` at rest. The five measured hovers change fills, label colours and the header icon filter. The page derives visible depth from its photographs and sectional contrast; no general elevation token is established here.

## Motion & Easing

The header action reports `all 0.2s ease-in 0s`. For the model action, the probe records the properties `color, border-color, background-color`, durations `0.3s, 0.3s, 0.3s`, easings `ease-out, ease-out, ease-out`, and delays `0s, 0s, 0s`. The hero, Power, House and footer controls report `all 0s ease 0s` on their own elements. These are per-control values, rather than a general motion scale. The raw serializations are retained in the verification Proof block.

## Components

These controls are anchors. Their component render type is `button` because they are action or navigation links. All six measured identities have 0px radius and no resting box shadow.

| Control and destination | Width × height | Padding | Resting treatment | Measured hover |
|---|---|---|---|---|
| Header “预约试驾”, `/test-drive` | 104 × 32px | 0px 14px | Transparent, white label, 1px white border | White fill, black label; the 16px image icon changes from `invert(1)` to `invert(0)`. |
| Model “大五座版”, `/es8-five-seater` | 96.4 × 40px | 11.2px 16px | Transparent, `#111111` label and 1px border | `#111111` fill, white label. |
| Power “了解更多”, `/nio-power` | 88 × 32px | 0px | Transparent, `#000f16` label and 1px border | `#000f16` fill, white label. |
| House “了解更多”, `/nio-house` | 88 × 32px | 0px | Transparent, white label and 1px border | White fill, black label. |
| Footer “关于我们”, `/about` | 48 × 19px | 0px | Transparent on white, `#5a5a5a` label, no border | Label becomes `#00bebe`. |

The separate hero “大五座版” link is 88 × 32px, with 0px 14px padding, white label and a 1px white border. Its pointer states were covered by another slide's action. It remains a geometric observation and is omitted from the component tokens. No search input or standalone linked card was identified in the survey.

### States

Five controls have verified hover changes, listed in §4. Each hover snapshot reports `:hover = true`; the later screenshot check reports that hover stopped matching during the crop, so the crops do not independently prove those styles.

Pressed is **UNMEASURED** for all six controls. Five failed the probe's `:active` check; the hero link was covered. No pressed tokens are published.

Keyboard focus reached every selected control. The header, hero, Power, House and footer links displayed the browser's `auto` outline. No brand focus token is inferred. The 40px model action had no computed-style or attribute change within the probe's scope: self and pseudo-elements, zero descendants, and three ancestor levels with pseudo-elements. This does not establish the absence of a pixel-only or sibling indication. No focus changes persisted after blur in the recorded comparisons.

## Do's and Don'ts

- Use 0px corners and thin outlines for these measured action links.
- Preserve white-on-imagery and dark-on-light variants, including their inverse hover fills.
- Use cyan for the verified footer hover, without extending it to unmeasured controls.
- Keep the compact 12px actions and the larger 14px model action distinct.
- Do not treat account, calendar or carousel library defaults as the website's complete design system.
- Do not turn a browser `auto` outline into a brand focus colour or infer a pressed style from hover.

## Voice & Tone

The observed calls to action are short and task-specific: “预约试驾” invites a test drive, “了解更多” offers more information, and “探索” is paired with a model name. This describes the homepage labels; an official writing-style guide was not verified.

## Agent Prompt Guide

“Build a photographic automotive landing section with square, transparent outlined links. The header test-drive link is 104 × 32px, uses a white 1px border and a 12px / 400 label with 30px line-height, and fills white with black content on hover. Use the live-loaded BlueSkyStandard family only where available; font substitution remains unresolved.”

“For a light model section, use the measured 96.4 × 40px action with 14px / 400 text, 20px line-height, 11.2px 16px padding and `#111111` ink. On hover, fill with the same ink and turn the label white. A footer navigation link may change from `#5a5a5a` to `#00bebe`.”
