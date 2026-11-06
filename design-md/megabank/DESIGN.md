---
name: Mega Bank
colors:
  primary: '#903f98'
  foreground: '#111111'
  canvas: '#ffffff'
  muted: '#707070'
  secondary-foreground: '#5f5f5f'
  input-foreground: '#232323'
  input-border: '#e3e3e3'
  surface-muted: '#f6f5f5'
  interaction-hover: '#6b206c'
  focus-ring: '#c42e6c'
  gradient-end: '#e84d8d'
typography:
  heading:
    fontSize: 36px
    fontWeight: 700
    use: Homepage section H2; measured line-height 54px.
  body:
    fontSize: 16px
    fontWeight: 400
    use: Channel navigation and currency amount input; measured line-height 24px.
  button:
    fontSize: 18px
    fontWeight: 700
    use: Secondary hero action and market tab; measured line-height 27px.
rounded:
  none: 0px
  control: 12px
  focus: 6px
components:
  login-menu:
    type: button
    textColor: '#ffffff'
    rounded: 12px
    height: 40px
    padding: 8px 20px
    typography: 16px / 700
    hover: 'background-position: 100% 0px; background-size: 200% 100%'
    pressed: 'background-position: 100% 0px; background-size: 200% 100%'
    focus: 'outline 2px solid #c42e6c; outline-offset 2px'
    use: '登入 — header menu button on the white header. Its background-image is linear-gradient(90deg, #903f98 0px, #c42e6c 50%, #e84d8d 100%), sized 200% 100%, positioned 0% 50% at rest. Hover and pointer-held press reposition that image; the gradient stops and white label remain unchanged. Computed background-color is transparent; the visible fill is the gradient. No sign-in was performed.'
  hero-more:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#903f98'
    border: '1px solid #903f98'
    rounded: 12px
    height: 48px
    padding: 8px 12px
    typography: 18px / 700
    focus: 'outline 2px solid #c42e6c; outline-offset 2px'
    use: 了解更多 — a link in the corporate-support hero slide. First-pass keyboard focus was measured and reverted after blur. Hover and pressed were unmeasured in both passes and have no tokens.
  corporate-nav:
    type: button
    textColor: '#111111'
    rounded: 0px
    height: 18px
    padding: 0px
    typography: 16px / 400
    hover: 'fg #6b206c'
    pressed: 'fg #6b206c'
    focus: 'outline 2px solid #c42e6c; outline-offset 2px; radius 6px'
    use: 企業金融 — a link to /corporate, transparent on the white header. Its child label shares the measured foreground. Keyboard focus rounds the link from 0px to 6px; the outline and radius revert after blur.
  fx-amount:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#232323'
    border: '1px solid #e3e3e3'
    rounded: 12px
    height: 50px
    padding: 12px 16px
    typography: 16px / 400
    pressed: 'border 1px solid #6b206c; outline 2px solid #c42e6c; outline-offset 2px'
    focus: 'border 1px solid #6b206c; outline 2px solid #c42e6c; outline-offset 2px'
    use: 請輸入試算金額 — editable currency-calculator input. Hover was measured with no change. The pressed sample also matched focus-visible. Border and outline reverted after blur. No amount was entered or submitted.
  video-card:
    type: card
    textColor: '#111111'
    rounded: 0px
    height: 89px
    padding: 0px
    typography: 20px / 700
    hover: 'fg #6b206c'
    pressed: 'fg #6b206c'
    focus: 'outline 2px solid #c42e6c; outline-offset 2px; radius 6px'
    use: 'Mega FOCUS Channel EP299 — the title-and-date link to https://youtu.be/y33FQi2QCjg, transparent on white. The wrapper is 16px/400; the visible title child is 20px/700 and changes colour. Its date stays #5f5f5f. Focus rounds the link from 0px to 6px and reverts after blur. The video was not opened.'
  cash-tab:
    type: tab
    textColor: '#707070'
    rounded: 120px
    height: 51px
    padding: 12px 20px
    typography: 18px / 700
    hover: 'fg #6b206c'
    pressed: 'fg #6b206c'
    use: '現金外幣匯率 — unselected tab, transparent on the #f6f5f5 rail; measured CSS radius 120px gives a pill. aria-selected was false and tabIndex was -1. Keyboard focus was not reached; no focus or selected-state token is declared.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Mega Bank

## Overview

### Visual Theme & Atmosphere

Mega Bank (兆豐銀行) is the Taiwanese commercial bank formed when the International Commercial Bank of China and Chiao Tung Bank merged on **21 August 2006**, taking the name Mega International Commercial Bank. Its own history emphasizes international trade, foreign exchange and financing. The headquarters operates in Taipei; the legal disclosure names **Mega International Commercial Bank Co., Ltd.** [History](https://www.megabank.com.tw/about/about-mega/mega-intro/history), [legal disclosure, page 1](https://www.megabank.com.tw/en-us/-/media/mega/files/bank/english/006344_2020031011150005629/20250714.pdf).

The public homepage pairs a gold-coloured logo with white space, purple links, a purple-to-pink login gradient and substantial rounded controls. The hero separates a large text block from campaign artwork; practical service links, market information and a currency calculator follow. These are observations of the homepage, rather than a published corporate palette.

In its **28 November 2025** redesign announcement, the bank identifies functionality and ease of use as its design axes, describes reorganizing menus and categories through user research, and reports WCAG 2.1 AA certification. That is the bank's account of the redesign; this capture does not independently certify accessibility. [Official redesign announcement](https://www.megabank.com.tw/about/announcement/info/announcement-news/announcement-news-detail?sno=4581f2dac8fe4cb3b719c8ef0a681ca7).

The measured homepage is the Traditional Chinese personal-banking edition (`www.megabank.com.tw/personal`), reached from `/`; its HTML language is `zh-Hant-TW`.

### Brand Narrative

The current bank name dates to the 2006 merger. Its history connects that combined institution to trade and foreign-exchange services. Its company page states values of respect and inclusion, professional trust, and integrity and accountability. The public website translates that institutional setting into service navigation and approachable life-stage entry points. The last sentence is a reading of the captured interface. [History](https://www.megabank.com.tw/about/about-mega/mega-intro/history), [company](https://www.megabank.com.tw/about/).

### Principles

The bank's published redesign priorities are functionality and ease of use, with menu organization informed by user research. For this reference, the measured implementation cues are separate pointer and keyboard treatments, rounded form controls and a gradient on the header action. The implementation cues are observations, rather than additional official principles. [Redesign announcement](https://www.megabank.com.tw/about/announcement/info/announcement-news/announcement-news-detail?sno=4581f2dac8fe4cb3b719c8ef0a681ca7).

### Personas

No user-persona study was opened; no persona claims are supplied.

## Colors

These role names organize live computed values. The census exposes no first-party custom-property colour palette.

| Role | Measured value | Evidence on this surface |
|---|---|---|
| Primary | `#903f98` | Secondary hero link foreground and border; active channel navigation in the survey |
| Foreground | `#111111` | Channel link and video title at rest; section headings; the survey's visible paragraph |
| Canvas | `#ffffff` | Header backing, secondary action and currency input |
| Muted | `#707070` | Unselected cash-rate tab |
| Secondary foreground | `#5f5f5f` | Video-card date, unchanged during title hover |
| Input foreground | `#232323` | Editable calculator amount |
| Input border | `#e3e3e3` | Calculator's resting 1px border |
| Muted surface | `#f6f5f5` | Cash-rate tab rail behind the transparent tab |
| Interaction hover | `#6b206c` | Channel link, video title and tab under hover and held press; input focus border |
| Focus ring / gradient midpoint | `#c42e6c` | Authored 2px solid outline; login gradient's 50% stop |
| Gradient endpoint | `#e84d8d` | Login gradient's 100% stop |

The login background image is `linear-gradient(90deg, rgb(144, 63, 152) 0px, rgb(196, 46, 108) 50%, rgb(232, 77, 141) 100%)`. Its size is `200% 100%`; rest position is `0% 50%`. The computed background colour is `rgba(0, 0, 0, 0)` and the image supplies the visible fill.

The survey's paragraph-ink count is one, collected while the anti-fraud popup was open. It supports that observed paragraph, not a comprehensive census of article body copy.

## Typography

**Official product use:** none verified in the opened company or redesign writing; neither identifies a product typeface.

**Live-loaded:** the census's loaded list contains only `swiper-icons 400 normal`, an embedded WOFF icon font belonging to the carousel library. It supplies no evidence for the interface's text face and is excluded from typography family tokens.

**Official distributed assets:** no font binary or font licence was opened. Distribution and licensing are unresolved.

**Declared-only:** body and H1 declare `"Microsoft JhengHei", PingFang, Arial, Helvetica, sans-serif`. The first button sampled by the census declares `Arial, Baskerville, monospace`; the six selected product controls declare `Microsoft JhengHei`. The stylesheet walk also finds `Phudu` at `../media/fonts/Phudu-Regular.woff2` and `GridGlyphs` at `../MvcGrid/Fonts/GridGlyphs.woff`. Neither appears in the loaded list. These names describe declarations, with no specimen or family token.

**Unresolved:** actual local text-face selection, per-script glyph fallback, font licensing and an officially designated brand face. **Substitute: none chosen.**

Measured metrics remain useful independently of a resolved family:

| Use | Size / weight | Line height |
|---|---|---|
| Section H2 | 36px / 700 | 54px |
| Channel navigation | 16px / 400 | 24px |
| Login-menu button | 16px / 700 | 24px |
| Secondary hero link and cash-rate tab | 18px / 700 | 27px |
| Editable currency amount | 16px / 400 | 24px |
| Video title child | 20px / 700 | 60px total box height for the captured two-line title; per-line height was not separately recorded for that child |

## Layout

At the survey's 1440×1000 desktop viewport, the market-information section H2 spans **1200px**, starting at **x=120**. The sticky header is **100px** high and has a channel row above the product navigation. The split hero precedes a four-column service block, market-rate tabs and the calculator. Further down are needs-based service tabs, news alongside video links, offers, awards and the footer. [Homepage capture](https://www.megabank.com.tw/).

Use the measured component paddings as local recipes: 8px 20px on login, 8px 12px on the secondary action, and 12px 16px on the input. The declared `--gap: 40px` utility is not evidence of a universal spacing scale.

### Responsive Behavior

Only a 1440×1000 desktop viewport was measured; mobile layout and breakpoint behaviour are unverified.

## Elevation & Depth

All six sampled product controls have `box-shadow: none` at rest; their measured changed-state lists add no shadow. The clear viewport also shows a floating quick-service rail, but its shadow was not sampled as a reusable elevation value. No shadow scale is declared here.

## Motion & Easing

Raw computed transitions are **`background 0.3s ease 0s`** for login and the hero action; **`color 0.3s ease 0s`** for channel navigation, the video-card link and the cash-rate tab; and **`all 0s ease 0s`** for the amount input. Login's observed moving property is background position; the gradient stops remain unchanged. No additional motion timing, custom curve or reduced-motion behaviour is inferred.

## Components

Six product controls were selected. The anti-fraud popup was closed, and the cookie reject button was explicitly clicked before states. Measurements below use the first states pass; the second pass adds only a failed pointer retry for the hero action.

| Control | Rest identity | Measured interaction |
|---|---|---|
| `login-menu` — 登入 | 100×40px; radius 12px; padding 8px 20px; 16px/700; white label on the gradient in §2; border and shadow none | Hover and held press move background position to `100% 0px`, keeping size `200% 100%`. Keyboard focus adds the pink outline described in §14. |
| `hero-more` — 了解更多 | Link, 140×48px; radius 12px; padding 8px 12px; 18px/700; white fill; purple label and 1px border; shadow none | First-pass keyboard focus adds the authored pink outline. Hover and pressed remain **UNMEASURED**. |
| `corporate-nav` — 企業金融 | Link, 64×18px; radius 0px; padding 0px; 16px/400; transparent on white, dark label; border and shadow none | Hover and held press recolour the link and its label to the interaction purple. Keyboard focus adds the outline and a 6px radius. |
| `fx-amount` — 請輸入試算金額 | Input, 386×50px; radius 12px; padding 12px 16px; 16px/400; white fill, input foreground and border from §2; shadow none | Hover has no change within the compared scope. Held press and keyboard focus use the interaction-purple border plus the pink outline. The pressed sample also matched `:focus-visible`. |
| `video-card` — Mega FOCUS Channel EP299 | Title-and-date link, 340×89px; radius 0px; padding 0px; wrapper 16px/400, visible title 20px/700; transparent on white, dark title; border and shadow none | Hover and held press recolour the title to the interaction purple. The date remains secondary grey. Keyboard focus adds the outline and a 6px radius. |
| `cash-tab` — 現金外幣匯率 | 227×51px; CSS radius 120px; padding 12px 20px; 18px/700; transparent on the muted rail, muted label; border and shadow none | Hover and held press recolour the label to the interaction purple. Keyboard focus is **UNMEASURED**; `tabIndex=-1`, `aria-selected=false`. |

The hidden site-search input was absent from the visible survey rows. The amount input above is the visible financial calculator, not a search-field specimen.

### States

The **企業金融** link is the clearest re-measurement target: rest foreground `#111111`, radius **0px**; hover and held-press foreground **`#6b206c`**; keyboard focus **`2px solid #c42e6c`**, outline offset **2px**, radius **6px**. Focus-only changes disappear after blur; the data's `persistsAfterBlur` list is empty.

The same authored outline is measured on login, the hero action, the amount input and the video-card link. It has `outline-style: solid`, rather than the browser's `auto` ring. Login and the hero action retain 12px corners; the video link takes the same 6px focused radius as channel navigation. Input focus additionally changes the 1px border to `#6b206c`.

Input hover's “no change” is limited to self, `::before`/`::after`, zero descendants, and three ancestor levels with their pseudos, across the probe's computed-style and DOM-attribute property list. Canvas/video pixels, sibling elements, external sprite internals and cross-origin frames are outside that comparison. Hero hover/pressed and the cash tab's keyboard focus are **UNMEASURED**, not unchanged. Disabled, validation-error and selected-tab states were not measured.

## Do's and Don'ts

- Use purple for actions and the separate pink outline for the measured keyboard-focus treatment.
- Preserve the login gradient's background-position behaviour and the secondary action's outlined white treatment.
- Use 12px corners for the sampled action and input; preserve the channel link's measured 0px resting and 6px focused radii.
- Keep text-family selection unresolved until stronger evidence exists. Loaded carousel icons do not establish a text family.
- Keep hero pointer states and the unselected tab's keyboard focus absent from component tokens.

## Voice & Tone

The homepage combines practical labels such as “了解更多” with life-stage language such as “陪您打造第一個家” and “陪您一起白頭到老”. Those observed phrases support a helpful, personal tone for service discovery; no wider editorial style guide was verified. [Homepage](https://www.megabank.com.tw/).

## Agent Prompt Guide

“Build a Mega Bank-style public banking header on white. Give its login menu a 100×40px button, 12px radius, 8px 20px padding and white 16px/700 text. Use the measured 90-degree purple-to-pink gradient at 200% width, positioned 0% 50% at rest and 100% 0px on hover and held press. Keyboard focus draws a 2px solid pink outline, offset 2px. Use the colour values in §2; leave the text family unresolved.”

“For the secondary hero action, use a 140×48px link with white fill, a 1px primary-purple border, 12px radius and 18px/700 purple text. Apply only the measured keyboard-focus treatment; leave pointer states unspecified.”
