---
name: Yuanta Securities
colors:
  primary: '#0067b3'
  canvas: '#ffffff'
  foreground: '#636363'
  navigation-ink: '#030303'
  shortcut-ink: '#454f5c'
  shortcut-hover: '#000000'
  secondary-gold: '#dfaf4a'
  shortcut-rule: '#2d92cb'
  trading-surface: '#273647'
  trading-hover: '#00ffff'
  search-ink: '#777777'
typography:
  navigation:
    fontSize: 12px
    fontWeight: 400
    use: 關於元大 utility navigation link; measured line-height 40px. UI font family unresolved.
  button:
    fontSize: 14px
    fontWeight: 400
    use: Market-data more link; measured line-height 21px. UI font family unresolved.
  shortcut:
    fontSize: 16px
    fontWeight: 700
    use: 我要開戶 and 投資先生 shortcut labels; measured line-height 22.4px. UI font family unresolved.
rounded:
  square: 0px
  compact: 2px
components:
  open-account:
    type: button
    textColor: '#454f5c'
    rounded: 0px
    height: 102.4px
    padding: 60px 0px 20px
    typography: 16px / 700
    hover: 'fg #000000; label border-bottom 3px solid #2d92cb; reveal the 60x60 icon layer'
    pressed: 'fg #000000; label border-bottom 3px solid #2d92cb; reveal the 60x60 icon layer'
    use: 我要開戶 is a transparent account-opening link on the white shortcut section; measured width 261px.
  market-more:
    type: button
    textColor: '#dfaf4a'
    border: '1px solid #dfaf4a'
    rounded: 2px
    height: 23px
    padding: 0px 10px
    typography: 14px / 400
    hover: 'bg #dfaf4a; fg #ffffff'
    pressed: 'bg #dfaf4a; fg #ffffff'
    use: The more link beside the market chart is transparent over the blue market-section image; measured width 53.9px.
  about-nav:
    type: button
    textColor: '#030303'
    rounded: 0px
    height: 40px
    padding: 0px
    typography: 12px / 400
    hover: 'fg #0067b3'
    pressed: 'fg #0067b3'
    use: 關於元大 is a transparent utility navigation link on the white header; measured width 48px.
  invest-card:
    type: card
    textColor: '#454f5c'
    rounded: 0px
    height: 102.4px
    padding: 60px 0px 20px
    typography: 16px / 700
    hover: 'fg #000000; label border-bottom 3px solid #2d92cb; reveal the 60x60 icon layer'
    pressed: 'fg #000000; label border-bottom 3px solid #2d92cb; reveal the 60x60 icon layer'
    use: 投資先生 is a transparent product shortcut card link on the white shortcut section; measured width 261px.
  quick-order:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 22.4px
    padding: 0px
    typography: 16px / 400
    hover: 'fg #00ffff'
    pressed: 'fg #ffffff (matches rest)'
    use: '快速下單 is a transparent action link on the #273647 trading table; measured width 64px.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Yuanta Securities

## Overview

### Visual Theme & Atmosphere

Yuanta Securities (元大證券) provides securities, futures-related and trust services. Its company introduction describes a Taiwan-based business expanding internationally and identifies it as a subsidiary of Yuanta Financial Holding. Its history records the adoption of the present Chinese and English company names in July 2015. [Company introduction](https://www.yuanta.com.tw/eYuanta/Securities/Node/Index?MainId=00409&C1=2018032208610704&ID=2018032208610704&Level=1), [company history](https://www.yuanta.com.tw/eYuanta/Securities/Node/Index?MainId=00409&C1=2018032206894591&ID=2018032206894591&Level=1).

The homepage combines a white corporate header, a blue navigation band, campaign imagery, gold outline service icons and a dark market-information section. A compact trading panel stays prominent over the hero. The shortcut grid makes account opening, investment products and beginner guidance visible together. Blue, gold and dark slate form the observed website's distinctive combination; these are observations of the live surface, rather than an official identity specification. [Live homepage](https://www.yuanta.com.tw/).

Yuanta's current product writing emphasizes reducing information burden: its 投資先生 app announcement describes a simplified market view, visualized key data and one-tap switching between simple and professional modes. This provides a documented direction for its digital services. [Official app announcement](https://www.yuanta.com.tw/eYuanta/Securities/Node/Index/2026101508436650?MainId=00409&C1=2026100209727353&Level=2).

The measured homepage is the Traditional Chinese Taiwan surface (`www.yuanta.com.tw/eyuanta/`, HTML `lang="zh-TW"`), reached from the supplied root URL.

### Brand Narrative

The company introduction joins wealth creation with integrity and protection of customer rights, and describes a Taiwan base with international investment access. Its more recent product writing connects asset usefulness with transaction security: the official “靈活持股” and device-binding announcement discusses both in the same account of digital-service development. [Company introduction](https://www.yuanta.com.tw/eYuanta/Securities/Node/Index?MainId=00409&C1=2018032208610704&ID=2018032208610704&Level=1), [official product announcement](https://www.yuanta.com.tw/eYuanta/Securities/Node/Index/2026101506693783?MainId=00409&C1=2026100209727353&Level=2).

### Principles

These implementation principles are inferred from the captured website: separate trading, service discovery and news into visible regions; keep shortcuts legible with a distinct icon and label; and give individual control types their measured interaction treatment. The app announcement separately documents simplification and visualized data as product directions. [Official app announcement](https://www.yuanta.com.tw/eYuanta/Securities/Node/Index/2026101508436650?MainId=00409&C1=2026100209727353&Level=2).

### Personas

No user research or validated personas were verified.

## Colors

These names describe measured roles. The survey found no CSS custom properties, so they are not presented as company-authored variable names.

| Role | Value | First-party evidence |
|---|---|---|
| Primary blue | `#0067b3` | Header navigation; 關於元大 hover and pressed foreground |
| Canvas / inverse ink | `#ffffff` | White shortcut section; resting trading-link ink; gold-link hover ink |
| Foreground | `#636363` | Global body declaration and four paragraph-ink observations |
| Utility navigation ink | `#030303` | 關於元大 resting foreground |
| Shortcut ink | `#454f5c` | 我要開戶 and 投資先生 resting label colour |
| Shortcut hover ink | `#000000` | Both shortcut labels on hover and press |
| Secondary gold | `#dfaf4a` | Market more link text and border; hover and pressed fill |
| Shortcut rule | `#2d92cb` | The shortcut label's 3px bottom border on hover and press |
| Trading surface | `#273647` | Trading table background in the page stylesheet; backing colour in the state capture |
| Trading hover ink | `#00ffff` | 快速下單 hover foreground |
| Search ink | `#777777` | Stock-search input's computed foreground; entered text was not tested |

The paragraph census contains white ×15 and `#636363` ×4. White is common in the dark sections; it should not be interpreted as the base body colour on the white canvas. The base foreground is independently declared in the first-party stylesheet. [Global CSS](https://www.yuanta.com.tw/eYuanta/Content/Securities/css/global.min.css), [homepage CSS](https://www.yuanta.com.tw/eYuanta/Content/Securities/css/index.min.css).

## Typography

- **Official product use:** no first-party statement naming a product typeface was verified.
- **Live-loaded:** `document.fonts` reports **Unica One 400 normal**. The site's vendored Highcharts theme injects a Google Fonts stylesheet and assigns this family to charts. It is a chart-theme face and is excluded from the interface family tokens. [Theme source](https://www.yuanta.com.tw/eYuanta/Content/js/stock/themes/dark-unica.js).
- **Official distributed assets:** no company font distribution or associated font licence was verified.
- **Declared-only interface faces:** the survey's body family is `Arial, Helvetica, 微軟正黑體`; the sampled button family is `Arial`. The states capture declares `Arial` on five selected controls and `Microsoft JhengHei UI` on 快速下單. These declarations do not establish loaded faces or the actual font supplying Chinese glyphs. No specimen is provided for them.
- **Unresolved:** the interface's rendered font family and script-by-script glyph fallback. No interface family is published in the tokens. **Substitute: none chosen.**

Preserve the measured metrics independently of that unresolved family: utility navigation **12px/400**, line-height **40px**; market more link **14px/400**, line-height **21px**; shortcut labels **16px/700**, line-height **22.4px**. Search is **14px/400**, line-height **19.6px**; 快速下單 is **16px/400**, line-height **22.4px**. The global stylesheet declares the base body at **16px** with **140%** line-height. [Global CSS](https://www.yuanta.com.tw/eYuanta/Content/Securities/css/global.min.css).

## Layout

At the captured **1440 × 1000px** viewport, use a dense header above a full-width blue navigation band and a wide hero. Place the compact WEB下單/AP下單 trading panel toward the hero's left side. Follow with a horizontal common-functions strip and a white shortcut section displaying five columns and two visible rows of icon links.

Below the shortcuts, the captured full page places the market chart beside a news list, then digital-service summaries, promotional image cards, a customer-service panel and the group/legal footer. This is the observed desktop composition. [Live homepage](https://www.yuanta.com.tw/).

### Responsive Behavior

Only the 1440 × 1000px desktop viewport was measured; mobile layouts and breakpoint behavior were not verified.

## Elevation & Depth

All six selected product controls report `box-shadow: none`. The shortcut region uses a pale geometric background image; the market and customer-service regions use large image backgrounds. The observed control styling relies on borders, ink and image layers. No elevation scale was verified.

## Motion & Easing

The market more link's raw computed transition is **`all 0.2s ease 0s`**. The other five control roots report **`all 0s ease 0s`**. These are the exported root-level strings; they do not define a global motion scale or describe every descendant. No custom easing curve or reduced-motion behavior was verified.

## Components

All six controls were inspected at rest, with a matched hover, during mouse-down and under real keyboard Tab focus. The announcement was closed through its `×` control before the states pass. Five controls have authored interaction changes and are included in the component tokens.

- **Account-opening action — 我要開戶:** a link, **261 × 102.4px**, square corners, padding **60px 0px 20px**, label **16px/700**. Its own background is transparent over the white shortcut section. The label changes `#454f5c` → `#000000`; a **3px solid `#2d92cb`** bottom border appears on the label span, and the alternative **60 × 60px** image layer becomes visible. The pressed capture has the same treatment.
- **Secondary action — market more:** the link beside the chart is **53.9 × 23px**, with **2px** radius, **0px 10px** padding and **14px/400** type. It starts transparent, with a **1px solid `#dfaf4a`** border and gold ink, over the blue market-section image. Hover and press fill it `#dfaf4a` and turn its text `#ffffff`.
- **Utility navigation — 關於元大:** a transparent link on the white header, **48 × 40px**, radius **0px**, padding **0px**, **12px/400** type. Its foreground changes `#030303` → `#0067b3` on hover and press.
- **Product shortcut — 投資先生:** a card link with the same **261 × 102.4px** geometry, padding, type and interaction treatment as 我要開戶. Its icon and label occupy the white shortcut section without an opaque card fill.
- **Trading action — 快速下單:** a transparent link on the **`#273647`** table, **64 × 22.4px**, radius **0px**, padding **0px**, **16px/400** type. Rest is white; hover is **`#00ffff`**; press returns to **`#ffffff`**. The stylesheet explicitly supplies different hover and active colours. [Homepage CSS](https://www.yuanta.com.tw/eYuanta/Content/Securities/css/index.min.css).

The **股名/代碼 search input** is **80 × 28px**, square, with **0px 5px** padding, white background, `#777777` computed foreground, no own border and no shadow. Its hover showed no change within the probe's comparison scope. Press and keyboard focus showed only a browser `auto` outline. It is retained here without a component token.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| 我要開戶 | Black label, blue 3px label border, alternative icon layer visible | Same as hover | Browser `auto` ring only |
| Market more | Gold fill, white ink | Same as hover | Browser `auto` ring only |
| 關於元大 | Blue ink | Blue ink | Browser `auto` ring only |
| 股名/代碼 input | No observed change within compared scope | Browser `auto` ring only | Browser `auto` ring only |
| 投資先生 | Black label, blue 3px label border, alternative icon layer visible | Same as hover | Browser `auto` ring only |
| 快速下單 | Cyan ink | White ink, matching rest | Browser `auto` ring only |

No authored focus token was found in these captures. “No observed change” is limited to computed styles and attributes on the control, its pseudo-elements, descendants and three ancestor levels. The two shortcuts include five descendants and two images each; the other four controls have no descendants. Disabled, error and validation states were not measured.

## Do's and Don'ts

For a reference implementation, preserve the measured link semantics and backgrounds. Keep the shortcuts square, reserve the gold outline treatment for the small market more action, and put the blue interaction rule on the shortcut label span.

Do not turn transparent links into filled buttons, apply the cyan trading hover to every navigation link, or promote the chart theme's font and colours into the corporate interface palette. Keep the measured font metrics while leaving the unresolved family absent.

## Voice & Tone

The visible homepage uses direct task labels: “我要開戶” (I want to open an account), “新手上路” (getting started) and “請選擇您想要的服務” (choose the service you want). Use concise service names and an explicit next action. This is an interpretation of the captured copy, not a verified company voice manual. [Live homepage](https://www.yuanta.com.tw/).

## Agent Prompt Guide

“Build the measured Yuanta homepage style with a white header, blue navigation band, wide campaign hero and a compact slate trading table. Use gold outline shortcut imagery and dark labels. A shortcut link is 261 × 102.4px with square corners, 60px top and 20px bottom padding, and a 16px/700 label. On hover and press, blacken the label, reveal its alternative icon image and add a 3px `#2d92cb` bottom border to the label. Use only a separately verified interface font; no substitute is chosen here.”

“For the market more link, use a 23px height, 2px radius, 0px 10px padding and 14px/400 text. Keep the resting fill transparent over its section, with gold text and border; hover and press use the gold fill and white ink.”
