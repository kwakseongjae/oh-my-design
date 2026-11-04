---
name: Demae-can
colors:
  primary: '#da3734'
  address-action: '#eb3334'
  foreground: '#646464'
  control-ink: '#212121'
  surface: '#ffffff'
  canvas: '#f7f7f7'
  secondary: '#f5f5f5'
  header-neutral: '#e1e1e1'
  link: '#0070c9'
  black: '#000000'
typography:
  navigation:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    use: Side navigation; LINE Seed JP is live-loaded.
  header-action:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    use: Header signup link; LINE Seed JP is live-loaded.
  main-action:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
    use: Main login and signup links; metrics verified, rendered family unresolved.
rounded:
  card: 4px
  action: 8px
spacing:
  main-action-gap: 16
  header-action-gap: 8
components:
  main-login:
    type: button
    backgroundColor: '#da3734'
    textColor: '#ffffff'
    rounded: 8px
    height: 56px
    padding: 16px 24px
    typography: 16px / 700
    hover: White ::before overlay opacity 0.2; base background unchanged.
    pressed: White ::before overlay opacity 0.3; base background unchanged.
    focus: 'outline 2px solid #000000; outline-offset 2px'
    use: ログイン — link to /login, 416px wide on the white main panel; rendered font family unresolved.
  main-signup:
    type: button
    backgroundColor: '#f5f5f5'
    textColor: '#000000'
    rounded: 8px
    height: 56px
    padding: 16px 24px
    typography: 16px / 700
    hover: Black ::before overlay opacity 0.1; base background unchanged.
    pressed: Black ::before overlay opacity 0.15; base background unchanged.
    focus: 'outline 2px solid #000000; outline-offset 2px'
    use: 初めての方は会員登録 — link to /signup, 416px wide on the white main panel; rendered font family unresolved.
  header-signup:
    type: button
    backgroundColor: '#da3734'
    textColor: '#ffffff'
    rounded: 8px
    height: 40px
    padding: 10px 8px
    typography: 14px / 700
    hover: White ::before overlay opacity 0.2; base background unchanged.
    pressed: White ::before overlay opacity 0.3; base background unchanged.
    focus: 'outline 2px solid #000000; outline-offset 2px'
    use: 会員登録 — link to /signup, 72px wide in the white header; live-loaded LINE Seed JP.
  coupon-nav:
    type: button
    textColor: '#212121'
    height: 48px
    padding: 14px 0px 14px 14px
    typography: 14px / 400
    hover: Black ::before overlay opacity 0.1.
    pressed: Black ::before overlay opacity 0.15.
    focus: 'outline 2px solid #000000; outline-offset 2px'
    use: クーポン・キャンペーン — link to /link/cam/list on the white sidebar, transparent at rest, 239px wide and pill-shaped; live-loaded LINE Seed JP.
fonts:
  roles:
    ui: LINE Seed JP
---

# Design System Inspiration of Demae-can

## Overview

### Visual Theme & Atmosphere

Demae-can (出前館) is a Japanese delivery platform for ordering food and everyday goods through its website and app. Its company history records a September 1999 founding, the service's October 2000 launch, and the November 2019 change of company name to 株式会社出前館. Its current mission, 「時間価値を高める」, frames delivery as a way to give people more valuable time; its vision connects this to local life infrastructure. [Service](https://corporate.demae-can.co.jp/business/demaecan.html), [history](https://corporate.demae-can.co.jp/company/history.html), [current mission and vision](https://corporate.demae-can.co.jp/company/vision.html).

The measured homepage combines a red wordmark and promotional imagery with a pale canvas, generous white panels and dark interface text. Large stacked action links lead the first panel; chain logos and food photographs support browsing below it. Red actions lighten through a white overlay, while neutral actions darken through a black overlay. These are observations of the live product surface, captured on 2026-11-03.

The documented evolution includes a May 2020 consumer-site redesign intended to align the desktop and smartphone sites with the app and make shops and products easier to find. Separately, the January 2023 corporate-site redesign used the concept 「打ち破る」 to express expansion from food delivery toward life infrastructure. That announcement describes the corporate site. [Consumer redesign](https://corporate.demae-can.co.jp/pr/news/demaecan/post_563.html), [corporate redesign](https://corporate.demae-can.co.jp/pr/info/newcorporate2023.html).

The measured homepage is the Japanese surface at `demae-can.com/`, with HTML `lang="ja"`; the capture did not redirect to a regional path.

### Brand Narrative

The recorded progression runs from a delivery-ordering site launched in 2000 to a service whose current mission emphasizes the value of people's time. The product page describes expansion into everyday goods, while the 2020 redesign announcement connects visual consistency with easier discovery. The live homepage expresses the service through food imagery, savings offers and straightforward entry points. [History](https://corporate.demae-can.co.jp/company/history.html), [service](https://corporate.demae-can.co.jp/business/demaecan.html), [redesign](https://corporate.demae-can.co.jp/pr/news/demaecan/post_563.html).

### Principles

The company's current stated mission is to increase the value of time; its vision is life infrastructure connecting local people's happiness. The current value page names 「プロフェッショナル」 and 「成果で応える」. For this interface reference, the measured patterns are clear action hierarchy, image-led discovery and consistent overlay feedback. Those patterns are observations, not a claimed official UI-principles document. [Current company statements](https://corporate.demae-can.co.jp/company/vision.html).

### Personas

No research-backed personas were verified.

## Colors

These role names describe observed use. The homepage census contains 95 computed root custom properties, including 51 Tailwind implementation properties; it does not expose a complete named brand-color scale.

| Role | Value | Observed use |
|---|---|---|
| Primary | `#da3734` | Main login and header signup backgrounds |
| Address action | `#eb3334` | Postal-code, prefecture and map action links |
| Foreground | `#646464` | Most frequent paragraph ink: 4 paragraph samples |
| Control ink | `#212121` | Navigation labels; most frequent text census value, 37 samples |
| Surface | `#ffffff` | White panels and sidebar; primary-action text |
| Canvas | `#f7f7f7` | Pale page background |
| Secondary | `#f5f5f5` | Main signup background |
| Header neutral | `#e1e1e1` | Header login background, observed at rest in the survey |
| Link | `#0070c9` | Chain-list text link |
| Black | `#000000` | Main signup text, neutral interaction overlays and authored focus outlines |

Paragraph ink also includes `#212121` (3 samples) and `rgba(0, 0, 0, 0.52)` (2). The observed border color is `rgba(0, 0, 0, 0.15)`. Neither alpha value is converted into an opaque color token.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product use | No named product face was established from the readable company/design pages opened for this reference. |
| Live-loaded | `document.fonts` reports **LINE Seed JP 400 normal** and **LINE Seed JP 700 normal**. Header and side-navigation controls declare this family. The two inspected `@font-face` records point to WOFF2 files on `cdn.demae-can.com/static-assets/fonts/LINESeedJP_OTF_Rg/0.woff2` and `LINESeedJP_OTF_Bd/0.woff2`. |
| Official distributed assets | The press kit offers logo and app-icon assets and links a brand-guideline PDF. No separately distributed font package or font licence was inspected. |
| Declared-only | The body declares `Meiryo, メイリオ, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Roboto, "Droid Sans", YuGothic, 游ゴシック, Verdana, "ＭＳ Ｐゴシック", sans-serif`. Main action controls report `Meiryo` in computed CSS. These names are not loaded faces in this capture and receive no specimens or family tokens. |
| Unresolved | The body stack's actual per-glyph rendered face, font licensing, and the brand guideline's typography rules remain unverified. The document reader returned no readable lines for that PDF. |

Substitute: none chosen.

Measured side navigation is **14px / 400**, line-height **20px**. Header signup is **14px / 700**, line-height **20px**. Main login and signup are **16px / 700**, line-height **24px**; those metrics remain usable independently of the unresolved rendered family. The census found no `h1` to report. [Official press kit](https://corporate.demae-can.co.jp/pr/presskit/).

## Layout

At the measured **1440 × 1000px** viewport, a **65px** sticky header spans the page and a **256px** sticky navigation column sits at the left. The main content is a vertical sequence of white sections on the pale canvas: promotional account actions, chain logos, address search, food categories and supporting service information.

The two main action links are **416px** wide and separated by **16px**, derived from their recorded y positions and heights. Header login and signup have an **8px** horizontal gap. Main-action padding is **16px 24px**; header signup uses **10px 8px**. The computed root values include `--sm-content-padding-inline: 40px`, `--content-padding-inline: 32px`, `--content-max-width: 50rem`, and `--slide-gap: 1rem`. These are scoped live values, not a reconstructed universal spacing scale.

### Responsive Behavior

Only the desktop 1440 × 1000px surface was measured; breakpoint and mobile behavior remain unverified.

## Elevation & Depth

The primary, secondary and navigation controls have `box-shadow: none`. The measured chain-logo tile uses a visible shadow of **`rgba(0, 0, 0, 0.2) 0px 0px 4px 0px`**, alongside two transparent zero-sized shadow entries. White panels are separated chiefly by their pale surroundings and spacing. No dialog elevation was measured.

## Motion & Easing

The two main links report the following raw computed transition string:

`color, background-color, border-color, text-decoration-color, fill, stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s`

The header signup, coupon navigation, chain card and postal-code link report `all 0s ease 0s` on the element itself. Root custom properties include `--transition-duration: 300ms` and `--mouseover-screen-duration: 300ms`; the state probe recorded a longest transition of 300ms for the four authored controls and sampled after 900ms. The pseudo-element's own complete transition declaration was not separately captured, so no curve is assigned to it here.

## Components

All six inspected controls are links. Four have measured authored state changes and are included as components.

| Component and identity | Rest | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| Main 「ログイン」, `/login`; **416 × 56px**, radius **8px**, padding **16px 24px**, **16px/700**, line-height **24px** | `#da3734` / `#ffffff` | White `::before` opacity **0 → 0.2** | White `::before` opacity **0 → 0.3** | **2px solid `#000000`**, offset **2px** |
| Main 「初めての方は会員登録」, `/signup`; **416 × 56px**, radius **8px**, padding **16px 24px**, **16px/700**, line-height **24px** | `#f5f5f5` / `#000000` | Black `::before` opacity **0 → 0.1** | Black `::before` opacity **0 → 0.15** | Same authored outline |
| Header 「会員登録」, `/signup`; **72 × 40px**, radius **8px**, padding **10px 8px**, **14px/700 LINE Seed JP**, line-height **20px** | `#da3734` / `#ffffff` | White `::before` opacity **0 → 0.2** | White `::before` opacity **0 → 0.3** | Same authored outline |
| 「クーポン・キャンペーン」, `/link/cam/list`; **239 × 48px**, pill (computed radius **9999px**), padding **14px 0px 14px 14px**, **14px/400 LINE Seed JP**, line-height **20px** | Transparent on `#ffffff`; visible label `#212121` | Black `::before` opacity **0 → 0.1** | Black `::before` opacity **0 → 0.15** | Same authored outline |

The four components have no resting border or box shadow. Their base background and foreground values stay unchanged during the measured pointer states; the pseudo-element supplies the visible change.

Two additional observations stay in prose. The first chain-logo link (`/chain/top/310895?genreNm=hamburger`) is **80 × 80px**, radius **4px**, padding **0px**, computed **16px/400**, line-height **24px**, transparent over white. Its inherited `#212121` is not the raster logo's ink. The postal-code link 「郵便番号」 is **144 × 32px**, pill radius **9999px**, padding **4px 0px**, computed **16px/700**, line-height **24px**, with `#eb3334` / `#ffffff`. Both report no hover or pressed change within the probe's compared scope and only a browser-default `auto` focus ring. They supply no authored component-state tokens.

No search input appeared among the survey's 50 interactive elements.

### States

The red main login and header signup links use a white `::before` layer at opacity **0.2** on hover and **0.3** while pressed. The neutral main signup and coupon navigation use black at **0.1** and **0.15** respectively. All four use a **2px solid black outline, offset 2px**, for keyboard focus; it disappears after blur. Their visible text colors remain unchanged in these measurements.

The chain card and postal-code link had no pointer-state change within the compared scope. That scope includes the element, both pseudo-elements and three ancestor levels with their pseudo-elements; the card also includes its image descendant and source attributes. Their `outline-style: auto` focus rings belong to the browser. Disabled, validation and loading states were not measured.

## Do's and Don'ts

- Use red account actions, light neutral secondary actions and rounded white content sections.
- Preserve the measured overlay behavior: white at 20%/30% for the red links, black at 10%/15% for the neutral link and navigation.
- Give the four measured authored controls a black 2px focus outline with 2px offset.
- Keep the loaded LINE Seed JP evidence scoped to the header and navigation; preserve the main-action metrics without assigning an unverified family.
- Keep chain-logo colors and the Google Translate widget outside the Demae-can palette.

## Voice & Tone

The homepage pairs a benefit-led heading, 「今すぐ登録しておトクに注文」, with brief task labels such as 「ログイン」 and 「郵便番号」. Use that observed pattern of a concrete benefit followed by direct action labels. No formal tone-of-voice guide was verified.

## Agent Prompt Guide

“Create a white header with a 72 × 40px signup link: `#da3734` background, white 14px/700 LINE Seed JP text, 20px line-height, 8px radius and 10px 8px padding. Add a white `::before` overlay at opacity 0.2 on hover and 0.3 while pressed, and a black 2px focus outline offset by 2px.”

“Arrange two 416 × 56px main action links with a 16px gap, 8px corners, 16px 24px padding and 16px/700 text at 24px line-height. Use the measured red and neutral treatments from §4. Leave the rendered main-content family unresolved.”
