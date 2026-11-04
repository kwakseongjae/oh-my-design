---
name: First Bank
colors:
  primary: '#297d6b'
  primary-hover: '#236c5c'
  primary-pressed: '#1a5145'
  pressed-border: '#12362e'
  foreground: '#141a26'
  canvas: '#ffffff'
  news-ground: '#eef5f4'
  news-label: '#b4eaf1'
  muted: '#747869'
  utility-rail: '#4d4b4e'
  current-nav: '#393c42'
  banking-entry: '#ffa64d'
typography:
  action:
    fontSize: 16px
    fontWeight: 500
    use: home hero action; live-loaded Noto Sans TC
  large-action:
    fontSize: 18px
    fontWeight: 500
    use: 更多優質商品 link; line height 27px
  navigation:
    fontSize: 15.008px
    fontWeight: 500
    use: top navigation links; line height 39px
  card:
    fontSize: 16px
    fontWeight: 400
    use: news-card container; line height 24px
  service:
    fontSize: 16px
    fontWeight: 700
    use: 預約服務 tile label; line height 24px
rounded:
  square: 0px
  action: 6px
  news-card: 12px
  service-tile: 16px
components:
  more-products:
    type: button
    backgroundColor: '#297d6b'
    textColor: '#ffffff'
    border: '1px solid #297d6b'
    rounded: 6px
    height: 52.2px
    padding: 11.6px 26.4px
    typography: 18px / 500
    hover: 'bg #236c5c; border 1px solid #1a5145'
    pressed: 'bg #1a5145; border 1px solid #12362e; box-shadow 0px 0px 0px 3.2px rgba(108, 171, 157, 0.5)'
    focus: 'bg #236c5c; border 1px solid #1a5145; authored box-shadow 0px 0px 0px 3px rgba(0, 109, 217, 0.85)'
    use: 更多優質商品 is a link below the product cards. Keyboard focus also had a browser auto outline, excluded from this token.
  corporate-nav:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 40px
    padding: 0px 16px
    typography: 15.008px / 500
    hover: 'bg #ffffff; fg #297d6b'
    pressed: 'bg #ffffff; fg #297d6b'
    focus: authored box-shadow 0px 0px 0px 3px rgba(0, 109, 217, 0.85)
    use: '企業金融 is a transparent navigation link on the #297d6b top bar. Browser auto outline excluded.'
  search-trigger:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 40px
    padding: 0px 16px
    typography: 15.008px / 500
    hover: 'bg #ffffff; fg #297d6b; icon background-position 50% -464px'
    pressed: 'bg #ffffff; fg #297d6b; icon background-position 50% -464px'
    focus: authored box-shadow 0px 0px 0px 3px rgba(0, 109, 217, 0.85)
    use: '搜尋 is a link with role=button on the #297d6b top bar, not the hidden search input. Its icon uses an external SVG sprite. Browser auto outline excluded.'
  news-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#297d6b'
    rounded: 12px
    height: 160px
    padding: 36px 20px 20px
    typography: 16px / 400
    focus: authored box-shadow 0px 0px 0px 3px rgba(0, 109, 217, 0.85)
    use: A news-card link to the 2026/10/29 customer-survey prize announcement. Green brief, dark category label and muted date are separate children. Hover and pressed unmeasured; browser auto outline excluded.
  service-tile:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#297d6b'
    rounded: 16px
    height: 120px
    padding: 0px
    typography: 16px / 700
    hover: 'fg #236c5c; box-shadow 0px 0px 15px 0px rgba(0, 0, 0, 0.125)'
    pressed: 'fg #236c5c; box-shadow 0px 0px 15px 0px rgba(0, 0, 0, 0.125)'
    focus: authored box-shadow 0px 0px 0px 3px rgba(0, 109, 217, 0.85)
    use: 預約服務 is a link in 雲端櫃台; a 120px square tile with a calendar SVG background. Press adds no difference from hover within the compared scope. Browser auto outline excluded.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans TC
---

# Design System Inspiration of First Bank

## Overview

### Visual Theme & Atmosphere

First Bank is a Taiwanese bank whose history begins in 1899 as Taiwan Savings Bank. Its [company introduction](https://www.firstbank.com.tw/sites/fcb/AboutUS) describes the later changes of name, its entry into the First Financial Holding group in 2003, and its customer-first service philosophy. The same page explains its identity: interlocking gold and dark-green arcs form a round coin with a square centre. Gold represents accumulated wealth; dark green represents the earth and continuity; the square expresses stability and professionalism.

That established identity accompanies an evolving public voice. The [2025 brand film announcement](https://www.firstbank.com.tw/sites/fcb/zh_TW/1565708751624) centres on everyday digital finance through iLEO and a younger brand image. The [September 2026 announcement](https://www.firstbank.com.tw/sites/fcb/zh_TW/1565713938795) introduces *Your All-Round Partner* (《你的全方位夥伴》), connecting trust, the bank's history, financial services and sustainability with the promise 「就在你左右」— being by the customer's side.

The measured homepage is the Traditional Chinese personal-banking edition (`www.firstbank.com.tw/sites/fcb/personalhome`, HTML `lang="zh-hant"`). Its visual expression combines green actions, pale green section grounds, white rounded cards, line illustrations and photographs of everyday life. These observations describe the public website; they do not establish the iLEO app's design tokens.

### Brand Narrative

Continuity and renewal are explicit parts of the identity explanation: the company introduction says the mark retains basic elements of the earlier identity while expressing new energy through a modern treatment. The 2026 film extends the “by your side” promise across the bank's history, core services and sustainability activities. On the measured homepage, family photography, life-goal links and an illustrated service counter give that promise concrete settings.

### Principles

The documented operating philosophy is 「顧客至上，服務第一」. For this website reference, the measured patterns translate into three practical rules: keep financial actions easy to distinguish, separate dense service navigation from promotional imagery, and preserve visible keyboard feedback. Those implementation rules are a reading of the captured surface, not additional principles attributed to the company.

### Personas

No persona research was opened; no user segments or persona attributes are specified.

## Colors

These role names describe measured values; they are not names published by the bank. The census found 30 root custom properties, also 30 declared properties: 28 Bootstrap-default properties and two `--aqi-*` properties for the footer air-quality display. The rendered green comes from the bank's CSS rules, despite the framework's unused-for-this-role `--primary` value of blue. No bank-wide palette namespace was found in this capture.

| Role | Measured value | Evidence and use |
|---|---|---|
| Primary | `#297d6b` | Hero action and more-products link backgrounds; news brief and service-tile text; top-bar ancestor background |
| Primary hover | `#236c5c` | More-products hover background; service-tile hover text |
| Primary pressed | `#1a5145` | More-products pressed background and hover border |
| Pressed border | `#12362e` | More-products pressed border |
| Foreground | `#141a26` | Both visible paragraph elements in the census; news category label |
| Canvas | `#ffffff` | News cards and service tiles; action text |
| News ground | `#eef5f4` | Census background and selected news tab |
| News label | `#b4eaf1` | News-card category ribbon, including its angled pseudo-element |
| Muted | `#747869` | News date and trailing action text |
| Utility rail | `#4d4b4e` | Six vertical service-tab backgrounds |
| Current navigation | `#393c42` | Current personal-banking top-bar item |
| Banking entry | `#ffa64d` | Top-bar 網路銀行 entry |

Gold is documented as an identity colour, but no logo-gold hex was measured or promoted into the palette. Alpha shadows are recorded with their full `rgba(...)` values below.

## Typography

**Official product use:** no first-party typography specification was found in the opened company and brand pages.

**Live-loaded:** `document.fonts` reports **Noto Sans TC**, normal, at weights **400, 500 and 700**. The computed family on body, h1 and button starts with Noto Sans TC. Its first-party [font stylesheet](https://www.firstbank.com.tw/sites/FirstBankWebRevision/css/font-noto.min.css) provides local-face sources followed by WOFF2/WOFF URLs under `/sites/FirstBankWebRevision/webfonts/`. The capture does not distinguish a local source from the network URL actually selected. Loaded Font Awesome 5 Duotone 900 and Font Awesome 5 Pro 300/400 are icon fonts, excluded from the UI family token.

**Official distributed assets:** the same bank-hosted stylesheet declares Noto Sans TC 300/400/500/700. This is distribution evidence for the website, not a separate assertion that the bank commissioned these faces or uses them throughout its products. No licence document was opened.

**Declared-only:** Noto Sans TC 300 is declared but absent from the loaded-face census. Other fallback names appear in the computed stack without loaded-face confirmation. No specimen is assigned to these declarations.

**Unresolved:** typography inside iLEO and other banking applications was not inspected. Substitute: none chosen.

Measured sizes retain their component context:

| Context | Size / weight | Line height |
|---|---|---|
| Hero action | 16px / 500 | 24px |
| More-products action | 18px / 500 | 27px |
| Top navigation | 15.008px / 500 | 39px |
| News-card container | 16px / 400 | 24px |
| News category label | 14px / 400 | Not separately recorded |
| Service-tile label | 16px / 700 | 24px |

## Layout

At the measured 1440 × 1000 viewport, the logo occupies a 250 × 120px link beside a two-level header: a 40px utility bar over an 80px product-navigation row. A broad photographic carousel follows, with text and a filled action at the left and a vertical service rail at the right.

Below it, the page places category tabs beside a row of four news cards, then a pale green cloud-counter section of illustrated service tiles. A life-goal section uses four circular photographic links—study abroad, retirement, marriage and buying a home—followed by a three-card product panel and a multi-column service footer. These are desktop arrangements observed in the full-page capture, not a reconstructed grid specification.

### Responsive Behavior

Only the 1440 × 1000 desktop viewport was rendered for measurement; mobile layout and responsive interaction states were not measured.

## Elevation & Depth

Rest shadows were `none` on the six selected controls. The service tile's hover and held-press shadow is `rgba(0, 0, 0, 0.125) 0px 0px 15px 0px`. The more-products held press uses `rgba(108, 171, 157, 0.5) 0px 0px 0px 3.2px`.

Five controls show an authored keyboard-focus box shadow: `rgba(0, 109, 217, 0.85) 0px 0px 0px 3px`. The bank's [main stylesheet](https://www.firstbank.com.tw/sites/FirstBankWebRevision/css/styles-all.min.css) explicitly supplies that shadow under `.js .container--has-focus *:focus`. Each measured focus shadow disappears after blur. The accompanying `outline-style: auto` is browser-resolved and supplies no brand outline token; the component focus entries retain only the authored shadow and any measured fill/border change.

## Motion & Easing

The raw computed transition strings were:

- Hero and more-products links: `color, background-color, border-color, box-shadow 0.15s, 0.15s, 0.15s, 0.15s ease-in-out, ease-in-out, ease-in-out, ease-in-out 0s, 0s, 0s, 0s`.
- Corporate navigation, search trigger and service tile: `all 0.2s ease 0s`.
- News card: `all 0.12s ease 0s`.

These are element-level computed declarations. No global motion scale or carousel easing is specified.

---

**Tier 1 sources:** https://www.firstbank.com.tw/ (rendered Traditional Chinese personal-banking homepage and controls, 2026-11-03); https://www.firstbank.com.tw/zz-this-does-not-exist (HTTP 404 control); https://www.firstbank.com.tw/sites/fcb/AboutUS (history, operating philosophy and identity symbolism); https://www.firstbank.com.tw/sites/fcb/FixedAnnouncement#atab5-tab (privacy/copyright notice and operator footer); https://www.firstbank.com.tw/sites/fcb/zh_TW/1565708751624 (2025 digital-finance brand film); https://www.firstbank.com.tw/sites/fcb/zh_TW/1565713938795 (2026 all-round-partner brand film); https://www.firstbank.com.tw/sites/FirstBankWebRevision/css/font-noto.min.css (font declarations); https://www.firstbank.com.tw/sites/FirstBankWebRevision/css/styles-all.min.css (framework defaults, green action overrides and authored focus shadow); https://www.firstbank.com.tw/sites/FirstBankWebRevision/css/aqi.css (AQI namespace ownership); https://www.firstbank.com.tw/sites/FirstBankWebRevision/css/styles-home-2023.css (homepage tile and card styling). All opened 2026-11-03.

## Components

The **hero 瞭解更多 link**, identified with the 青安貸款3.0 campaign URL, is 114.1 × 40.9px with a 6px radius, `7.44px 16.24px` padding, a 1px green border and white 16px/500 text. Its rest background is `#297d6b`. Its interaction states were not measured successfully, so it has no interactive component entry.

The **更多優質商品 link** below the product cards uses the same green/white pairing at 179.6 × 52.2px, 6px radius and `11.6px 26.4px` padding. It has measured hover, pressed and keyboard-focus changes; use this link as the verified filled-action reference.

The **企業金融 navigation link** is 92 × 40px with square corners and `0px 16px` padding. The **搜尋 trigger**, a link with `role="button"`, is 58 × 40px with the same geometry rules. Both are transparent at rest on the green top bar. Their hover and held-press readings are white-backed with green foreground. The search icon additionally changes its SVG sprite position from `50% -96px` to `50% -464px`; its background size remains `46px 736px`.

The measured **news-card link** is 260.5 × 160px, white, with a 12px radius and `36px 20px 20px` padding. Its brief is green, its category label uses the dark foreground, and the date and trailing action use muted ink. The blue category ribbon ends in an angled pseudo-element. Keyboard focus is measured; hover and pressed remain unmeasured.

The **預約服務 tile link** is 120 × 120px, white, with a 16px radius, zero padding and a bold green label. Its calendar illustration is a background SVG. Hover and held press change the label to `#236c5c` and add a soft shadow.

### States

“Focus shadow” below means the authored 3px `rgba(0, 109, 217, 0.85)` box shadow; the browser `auto` outline is excluded. All five measured focus shadows return to `none` after blur.

| Control | Hover | Held press | Keyboard focus |
|---|---|---|---|
| Hero 瞭解更多 | Unmeasured | Unmeasured | Unmeasured; carousel target not reached |
| 更多優質商品 | Fill `#236c5c`, border `#1a5145` | Fill `#1a5145`, border `#12362e`, 3.2px green shadow | Hover fill/border plus focus shadow |
| 企業金融 | White fill, green foreground | Same measured values as hover | Focus shadow; rest colours retained |
| 搜尋 trigger | White fill, green foreground; sprite y `-464px` | Same measured values as hover | Focus shadow; rest colours and sprite position retained |
| News-card link | Unmeasured | Unmeasured | Focus shadow; rest colours retained |
| 預約服務 tile | Foreground `#236c5c`, 15px soft shadow | Same measured values as hover | Focus shadow; rest colours retained |

The “same” readings compare the control, its label, descendants and their pseudo-elements, plus three ancestor levels. The search trigger has two descendants, the service tile one and the corporate link none. External SVG internals and pixels are outside that comparison. Disabled states were not exercised and are not specified.

## Do's and Don'ts

- Use the measured green progression for filled actions: `#297d6b`, `#236c5c`, `#1a5145`.
- Keep the distinction between square top navigation, 6px action corners, 12px news cards and 16px service tiles.
- Preserve the separate news-card inks and the search sprite's state change.
- Keep the framework defaults and the footer AQI settings out of the bank's core palette. An unmeasured state supplies no implementation value.

These are implementation recommendations derived from the observed homepage, not an official brand manual.

## Voice & Tone

The homepage pairs concise functional labels—搜尋, 預約服務 and 瞭解更多—with the life-goal heading 「夢想啟航」. The accompanying paragraph offers the bank's help while the visitor pursues a dream. The 2025 brand announcement explicitly connects its digital-finance campaign with a warm and reassuring experience. These are observed copy and stated campaign aims, not a general tone-of-voice specification.

## Agent Prompt Guide

- “Build a First Bank website action link with Noto Sans TC 18px/500, 52.2px height, 6px corners and `11.6px 26.4px` padding. Use white text on green; preserve the measured hover and held-press fill and border progression.”
- “Build a 120px white service tile with 16px corners, a calendar background illustration and a 16px/700 green label. Hover changes the label colour and adds the measured 15px soft shadow.”
- “Use a square 40px utility-navigation item on the green bar. Hover and held press use a white background with green text; keep the authored keyboard-focus shadow separate from the browser outline.”
