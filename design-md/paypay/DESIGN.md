---
name: PayPay
colors:
  primary: '#ff0033'
  action: '#3895ff'
  foreground: '#242323'
  canvas: '#ffffff'
  surface: '#f7f7f7'
  muted: '#606060'
  campaign-border: '#d8d8d8'
  onboarding-section: '#f24f4f'
typography:
  action:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.6
    use: Measured main and inverse action links; live-loaded Noto Sans JP
  faq:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    use: Measured FAQ question button; live-loaded Noto Sans JP
  store-caption:
    fontSize: 14px
    fontWeight: 700
    use: Visible paragraph label inside the store-card link
  bank-caption:
    fontSize: 13px
    fontWeight: 700
    use: Visible paragraph label inside the bank-card link
  nav:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    use: Header link metrics only; its Hiragino declaration is not loaded-face evidence
rounded:
  none: 0px
  action: 6px
spacing:
  base: 16
  lg: 24
  action-inline: 32
  faq-block: 22
  faq-leading: 77
components:
  main-cta:
    type: button
    backgroundColor: '#3895ff'
    textColor: '#ffffff'
    rounded: 6px
    height: 57.6px
    padding: 16px 32px
    typography: 16px / 700
    hover: opacity 0.7
    pressed: opacity 0.7
    use: 'Link: その他のチャージ方法, 250px wide. Hover and pointer press reduce the whole link opacity from 1 to 0.7; computed colours stay unchanged.'
  inverse-cta:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#3895ff'
    rounded: 6px
    height: 57.6px
    padding: 16px 32px
    typography: 16px / 700
    hover: opacity 0.7
    pressed: opacity 0.7
    use: 'Link: PayPayの始め方, 250px wide, on the red onboarding section. Hover and pointer press reduce opacity from 1 to 0.7.'
  store-card:
    type: card
    textColor: '#242323'
    rounded: 0px
    height: 200px
    padding: 24px 16px
    typography: 14px / 700
    hover: link opacity 0.7
    pressed: link opacity 0.7
    use: 'Link: 全国のお店, 300px wide. Transparent anchor on a white wrapper; radius 0 is the anchor, while the wrapper CSS declares 11px. Visible caption is 14px/700; anchor is 16px/400. Hover and pointer press change link opacity only.'
  bank-card:
    type: card
    textColor: '#242323'
    rounded: 0px
    height: 151.6px
    padding: 16px
    typography: 13px / 700
    hover: link opacity 0.7
    pressed: link opacity 0.7
    use: 'Link: 銀行口座, 162px wide. Transparent anchor on a white wrapper; radius 0 is the anchor, while the wrapper CSS declares 11px. Visible caption is 13px/700; anchor is 16px/400. Hover and pointer press change link opacity only.'
  faq-free:
    type: button
    textColor: '#242323'
    rounded: 0px
    height: 69.6px
    padding: 22px 16px 22px 77px
    typography: 16px / 400
    hover: opacity 0.7
    pressed: opacity 0.7
    use: 'FAQ button: アプリの登録は無料ですか？, 852px wide, transparent on white. Hover and pointer press reduce opacity from 1 to 0.7. Its measured keyboard focus had no style change within the compared scope.'
fonts:
  roles:
    sans: Noto Sans JP
---

# Design System Inspiration of PayPay (ペイペイ)

## Overview

### Visual Theme & Atmosphere

PayPay is a Japanese smartphone-payment service: customers show a barcode or scan a shop's QR code, charge a balance and send that balance to friends or family. It launched on 5 October 2018 through the SoftBank–Yahoo Japan joint venture. The current homepage also introduces coupons, public-bill payments and investment experiences. These are useful starting points for the brand: everyday payment, an approachable explanation and a visible benefit. ([Launch](https://about.paypay.ne.jp/pr/20181005/01/), [homepage](https://paypay.ne.jp/))

The measured homepage combines a shop photograph and a phone showing the app with bold white Japanese copy. Small promotional images follow the hero; illustrations explain payment and charging. White and pale-grey sections give the content a light ground. Red `#ff0033` appears in the site's accent treatment, while the measured filled information actions are blue `#3895ff`. A warmer red, `#f24f4f`, fills the three-step getting-started section. The result is a retail-facing, explanatory page with several distinct roles for colour. These are observations of the public website, captured at 1440 × 1000; they do not establish native-app component specifications. ([Homepage](https://paypay.ne.jp/))

PayPay's own design writing describes an evolution beyond individual payment screens. In 2024 its design lead discussed connecting payment, banking and investing experiences. In October 2026 the Illustration Working Group described a shared Figma library, illustration guidelines and the Inspector and Builder plugins to support consistent work across product teams. This gives a builder a concrete direction: friendly explanatory illustration belongs to a growing financial-service ecosystem, with reusable visual rules across its experiences. ([Design lead](https://insideout.paypay.ne.jp/2024/08/01/professionals-vol78-jp/), [illustration system](https://insideout.paypay.ne.jp/2026/10/06/design-at-paypay-vol12-jp/))

#### Primary tasks

- Learn the two payment methods: show a barcode or scan a shop's QR code.
- Find charging methods and shops that accept PayPay.
- Learn how to send a balance to friends or family and find coupons or campaigns.
- Follow the homepage's download → charge → pay sequence.

These tasks are stated on the [homepage](https://paypay.ne.jp/); transactional app screens were not operated.

### Brand Narrative

The service launched in October 2018 as a SoftBank–Yahoo Japan joint venture. Its November 2018 announcement introduced the “100億円あげちゃうキャンペーン”, beginning on 4 December: a payment rebate and a chance of a full rebate, subject to the announced conditions. The present homepage still gives campaigns, coupons and points prominent destinations. This is a supported connection between its early promotion-led launch and the website's current benefit emphasis; it does not establish a particular payment-completion animation. ([Launch](https://about.paypay.ne.jp/pr/20181005/01/), [campaign announcement](https://about.paypay.ne.jp/pr/20181122/02/), [homepage](https://paypay.ne.jp/))

The company was established on **15 June 2018**. Its current corporate page lists card, bank and securities companies among its related companies. Its 2024 design-lead interview frames the ambition as supporting more of users' financial lives beyond payment. ([Company](https://about.paypay.ne.jp/about/), [design lead](https://insideout.paypay.ne.jp/2024/08/01/professionals-vol78-jp/))

The operating company is **PayPay株式会社**, with the legal notice giving **東京都新宿区四谷1-6-1 四谷タワー**. The company page separately gives the registered location as **東京都千代田区紀尾井町1番3号**. This reference proposes **JP**. SoftBank's opened investor page describes its PayPay voting interest as 62.2% as of 31 March 2026, including the B Holdings structure; ownership does not change the Japanese operating location. ([Legal notice](https://about.paypay.ne.jp/terms/consumer/legal/electronic-settlement/), [company](https://about.paypay.ne.jp/about/), [ownership](https://www.softbank.jp/corp/ir/investor/about/))

### Principles

The following implementation guidance combines observed website treatments with the linked first-party design writing; it is not an official named principle set.

1. **Make the everyday task legible.** Keep payment, charging and getting-started explanations concrete, as on the homepage.
2. **Give actions and panels distinct colour roles.** Preserve the blue action, white inverse and red onboarding panel observed here.
3. **Keep interaction feedback simple.** Reuse the measured opacity response across action links, card links and the FAQ question.
4. **Check consistency across experiences.** PayPay's design-operations article describes research, a design-system check, design review and UX-writer wording checks. ([Design operations](https://insideout.paypay.ne.jp/2025/02/12/design-at-paypay-vol7-jp/))
5. **Reuse illustration parts deliberately.** The Illustration Working Group describes checking for reusable assets before creating new work. ([Illustration system](https://insideout.paypay.ne.jp/2026/10/06/design-at-paypay-vol12-jp/))

### Personas

No source-backed persona study was verified; the prior fictional profiles are not retained as company research.

## Colors

These values come from the rendered colour census and identified homepage elements, rather than a published brand-token specification.

| Role | Value | Evidence and use |
|---|---|---|
| Primary / brand accent | `#ff0033` | Surveyed `.top__button` background and red text/accent entries in the census. |
| Action | `#3895ff` | Filled “その他のチャージ方法” link background; inverse “PayPayの始め方” label and chevron. |
| Foreground | `#242323` | Dominant paragraph ink: 33 paragraph entries; also card captions, FAQ and header-link text. |
| Canvas | `#ffffff` | Most frequent opaque background, white card wrappers and inverse action fill. |
| Surface | `#f7f7f7` | Seven background entries; homepage CSS identifies the download band and explanatory sections. |
| Muted | `#606060` | Five paragraph-ink entries; `.noteContents` declares this colour for notes. |
| Campaign-image border | `#d8d8d8` | Five census border entries; `.campaignBanner__image` declares a 1px border. |
| Onboarding section | `#f24f4f` | Measured ancestor background of “PayPayの始め方”, `section.start`. |

Hover and pointer press on the measured blue action preserve its computed background and foreground. The whole link changes opacity from 1 to 0.7. Treat that as an opacity response; no separate darker-blue or darker-red state colour was observed.

The census contains additional colours, but no success, warning, error or points semantic palette was established. The only root custom-property namespace observed was WordPress `--wp--preset--*`; its 47 defaults are excluded from PayPay tokens.

## Typography

### Evidence classes

- **Official product use:** the PayPay pages opened for this reference did not identify an approved native-app font family.
- **Live-loaded:** the homepage's `document.fonts` census records **Noto Sans JP 400 normal** and **Noto Sans JP 700 normal**. Both weights belong in this website reference. The page links the Google Fonts stylesheet `https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700`; the browser's stylesheet walk could not read its cross-origin `@font-face` rules. A separate HTTP text fetch of that endpoint returned font sources on `fonts.gstatic.com`; the capture browser's individual font URLs and format remain unresolved.
- **Official distributed assets:** no PayPay-authored font distribution or font-licence document was verified.
- **Declared-only:** the body's and header button's computed family declaration begins with “Hiragino Kaku Gothic ProN”, followed by Japanese/system fallbacks. These names were not recorded as loaded font faces. The `h1` declaration starts with “Noto Sans JP”. Do not turn the declared header family into a verified rendered-face specimen.
- **Unresolved:** the prior app-balance, amount and developer-monospace font claims have no new supporting product-font source. **Substitute: none chosen.**

### Measured hierarchy

| Element | Size / weight | Line height | Face evidence |
|---|---|---|---|
| Blue and inverse action labels | 16px / 700 | 25.6px | Noto Sans JP loaded; control declaration names it. |
| FAQ question | 16px / 400 | 25.6px | Noto Sans JP loaded; control declaration names it. |
| Store-card visible caption | 14px / 700 | Not separately recorded | Caption inside a 16px / 400 anchor. |
| Bank-card visible caption | 13px / 700 | Not separately recorded | Caption inside a 16px / 400 anchor. |
| Header “はじめる” link | 16px / 700 | 22.4px | Hiragino declaration only; rendered face unresolved. |
| Footer sitemap links | 13px / 400 | 18.2px | Hiragino declaration only. |
| Footer terms links | 12px / 400 | 16.8px | Hiragino declaration only. |

The action and FAQ metrics use a measured 1.6 line-height ratio. Their weight difference separates actions from questions without adding another loaded family. The table describes concrete website elements, not a complete app type scale.

## Layout

The desktop homepage leads with a photographic payment scene, app-store links and a compact row of campaign images. Explanatory sections then cover the service, charging, reasons to use it, supported shops, identity verification, everyday scenarios, getting started and FAQs. The three-step getting-started section is a broad red panel containing white step cards. This order is visible in the captured homepage and its HTML.

For measured spacing, use **16px** bank-card padding, **24px** vertical store-card padding and **32px** horizontal action-link padding. The FAQ deliberately reserves **77px** at the leading side for its question marker, with **22px** vertical padding. These are local component measurements, not evidence for a universal 8px grid.

The homepage stylesheet declares `max-width:1128px; margin:0 auto; padding:0 24px` on `.about__inner`, `.merit__inner` and `.start__inner`. Treat this as declared website container geometry. No native-app design baseline was established.

### Responsive Behavior

The browser capture measured desktop at **1440 × 1000**. Mobile behavior was not rendered or tested.

The opened homepage CSS has explicit **max-width: 750px** rules and **min-width: 751px** hover rules. In the smaller-width rule, the action declares `width:74.6666666667vw`, `padding:5.6vw 6.4vw`, `font-size:4.8vw` and `border-radius:1.6vw`. Store cards declare `width:41.0666666667vw` and a matching height, with `padding:4.2666666667vw 4.2666666667vw` on their links. These are source declarations, not a mobile measurement. ([Homepage CSS](https://paypay.ne.jp/wp-content/themes/paypay/assets/top/css/top_58.css?v=9))

## Elevation & Depth

The two card wrappers share the measured shadow **`rgba(155, 155, 155, 0.6) 4px 4px 12px 0px`**, with white backgrounds. The interactive anchors themselves have `box-shadow: none`. This separation matters: reproduce the shadow on the wrapper and apply the pointer opacity to the link content.

The blue and inverse actions, FAQ button and header link have no shadow on their inspected nodes. No multi-level elevation scale, red balance-card glow, modal blur or application scrim token was verified.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.card-wrapper`: `rgba(155, 155, 155, 0.6) 4px 4px 12px 0px`

## Motion & Easing

All six inspected controls report the raw computed transition **`all 0.3s ease 0s`**. The five measured pointer responses settle at opacity 0.7. The header's computed transition does not establish its unmeasured pointer behavior.

Card image and ancestor reveal changes persisted after blur, so they are not keyboard-focus animations. Payment celebrations, balance-counting motion, sheet transitions and reduced-motion behavior were not measured; no duration or easing token is supplied for them.

## Components

Five controls have an authored, measured pointer response. All are product-site controls; none is a consent button. Measurements identify the interactive node separately from its visual wrapper.

### Filled action link — “その他のチャージ方法”

`a.mainButton__button`, linking to `/guide/charge/`: **250 × 57.6px**, **6px radius**, **16px 32px padding**, **16px / 700 Noto Sans JP**, 25.6px line height. Rest is `#3895ff` background and `#ffffff` text, with no border or shadow on the anchor. A CSS `::after` draws an 8px × 8px chevron with two 2px white borders.

Hover and pointer press each set the entire link's opacity to **0.7**, from **1**. Keyboard focus adds the browser's `auto` outline; it supplies no authored brand-focus token.

### Inverse action link — “PayPayの始め方”

`a.mainButton__button--inversion`, linking to `/start/`: **250 × 57.6px**, **6px radius**, **16px 32px padding**, **16px / 700 Noto Sans JP**, 25.6px line height. Rest is `#ffffff` background with `#3895ff` text and chevron, on the `#f24f4f` onboarding section. The anchor has no border or shadow. Hover and pointer press again set opacity to **0.7**. Its keyboard ring is browser `auto`.

### Store card link — “全国のお店”

`a.stores__link`, linking to `/shop/`: **300 × 200px**, **0px anchor radius**, **24px 16px padding**. The anchor is transparent, with `#242323` foreground; its visible caption is **14px / 700**, while the anchor's inherited metrics are 16px / 400 with 25.6px line height. It sits on a white wrapper. Homepage CSS declares **11px corners on that wrapper**; this is a stylesheet declaration, separate from the measured anchor radius.

Hover and pointer press change the link's opacity from **1 to 0.7**. The wrapper's background and shadow stay outside that link-level fade. Focus produces a browser `auto` ring; lazy image loading and ancestor reveal changes also appeared, persisted after blur and are not focus tokens.

### Bank card link — “銀行口座”

`a.charge__link`, linking to `/guide/bank/`: **162 × 151.6px**, **0px anchor radius**, **16px padding**. The transparent anchor sits on a white wrapper, with `#242323` foreground. Its visible caption is **13px / 700**; the anchor is 16px / 400 with 25.6px line height. The wrapper's **11px radius** is declared in the homepage CSS.

Hover and pointer press set link opacity to **0.7**. Keyboard focus has a browser `auto` ring and persistent loading/reveal changes, which are excluded from state tokens.

### FAQ button — “アプリの登録は無料ですか？”

`button.faq__question`: **852 × 69.6px**, **0px radius**, **22px 16px 22px 77px padding**, **16px / 400 Noto Sans JP**, 25.6px line height. It is transparent on white, with `#242323` text and no border or shadow on the button. Its row parent has a bottom divider: **1px solid rgba(112, 112, 112, 0.2)**.

Hover and pointer press change opacity from **1 to 0.7**. Keyboard focus was reached with a real Tab key and had **no style change within the probe's compared scope**. This does not establish behavior outside the measured DOM, pseudo-elements and three ancestor levels. Accordion expansion was not activated.

### Header link — prose only

“はじめる” is a **64 × 60px** transparent link on white, **0px radius**, **0px padding**, **16px / 700**, 22.4px line height, `#242323` foreground. Its pointer pass found it outside the viewport, so hover and press are **UNMEASURED**. Keyboard focus showed only browser `auto`. It is excluded from component tokens.

No search input was present in the survey. Native-app inputs, balances, badges, tabs, toggles, dialogs and toasts were not measured.

### States

| Control | Hover | Pointer press | Keyboard focus |
|---|---|---|---|
| Blue action | Opacity 1 → 0.7 | Opacity 1 → 0.7 | Browser `auto` outline only. |
| White inverse action | Opacity 1 → 0.7 | Opacity 1 → 0.7 | Browser `auto` outline only. |
| Store card link | Link opacity 1 → 0.7 | Link opacity 1 → 0.7 | Browser `auto`; persistent image/reveal changes excluded. |
| Bank card link | Link opacity 1 → 0.7 | Link opacity 1 → 0.7 | Browser `auto`; persistent image/reveal changes excluded. |
| FAQ question | Opacity 1 → 0.7 | Opacity 1 → 0.7 | No change within compared scope. |
| Header “はじめる” link | UNMEASURED: outside viewport | UNMEASURED: outside viewport | Browser `auto` outline only. |

Each measured pointer state had the matching hover/active flag. The comparison covered self and pseudo-elements, descendants and their pseudo-elements, and three ancestor levels. It did not cover sibling effects, canvas/video pixels, closed shadow roots or cross-origin frame contents. No disabled, loading, error, empty-result or payment-success state was measured.

## Do's and Don'ts

- Use the measured blue fill for the website's information actions, with the white inverse action on the red getting-started panel.
- Keep body and question text near-black at `#242323`, with pale-grey explanatory sections and white cards.
- Use the loaded Noto Sans JP 400/700 evidence for website typography; preserve the separate declared-only status of the header family.
- Keep the 6px action corners distinct from the card wrapper's declared 11px corners and the anchor's measured 0px radius.
- Fade the measured interactive node to 0.7 on hover and pointer press; keep the card shadow on its wrapper.
- Do not infer darker state colours, semantic success colours or native-app geometry from these website measurements.

For illustration work, PayPay's [Illustration Working Group](https://insideout.paypay.ne.jp/2026/10/06/design-at-paypay-vol12-jp/) describes shared guidelines for colour, shape, composition and reusable parts. This supports consistency across related illustrations; it does not supply unmeasured UI tokens.

## Voice & Tone

The homepage leads with ease and benefit: “スマホひとつで”, “かんたんに”, “おトク” and a three-step explanation. Its action labels identify destinations directly: charging methods, supported shops and getting started. FAQ questions are followed by practical answers and qualifications. This supports short Japanese benefit headings with concrete explanatory copy, without establishing a universal tone for app errors or legal disclosures. ([Homepage](https://paypay.ne.jp/))

PayPay also documents a **Wording Check** by UX writers and shared wording guidelines in its design process. That is first-party evidence for deliberate language consistency. ([Design operations](https://insideout.paypay.ne.jp/2025/02/12/design-at-paypay-vol7-jp/))

## Agent Prompt Guide

### Quick colour reference

`#ff0033` accent · `#3895ff` information action · `#242323` foreground · `#ffffff` canvas/card wrapper · `#f7f7f7` section surface · `#606060` note text · `#d8d8d8` campaign-image border · `#f24f4f` getting-started panel.

### Example component prompts

- “Build the measured PayPay website action: 250 × 57.6px, 6px corners, 16px 32px padding, blue fill, white 16px/700 Noto Sans JP label and a small right chevron. Hover and pointer press set the whole link to 0.7 opacity.”
- “Build the white inverse of that action on the getting-started red panel. Preserve blue text and chevron, the same geometry and the same opacity response.”
- “Build a 300 × 200px store link on a white card wrapper. Use 24px 16px anchor padding and a 14px/700 near-black caption. Apply the measured shadow to the wrapper and the hover fade to the link. The wrapper's stylesheet declares 11px corners.”

These prompts describe measured or explicitly labelled source-declared website treatments.

## Governance

### Known Gaps

- **Contrast, `main-cta`.** Text `#ffffff` on `#3895ff` measures 3.04:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `inverse-cta`.** Text `#3895ff` on `#ffffff` measures 3.04:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
