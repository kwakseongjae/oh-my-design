---
name: KakaoPay
colors:
  primary: '#ffeb00'
  ink: '#060b11'
  title: '#191c20'
  text: '#000000'
  canvas: '#ffffff'
  band: '#eff2f4'
  timeline-text: '#dfdfdf'
  on-dark: '#f2f2f2'
  pill-border: '#606a74'
  control-border: '#d2d2d2'
typography:
  hero:
    fontSize: 63px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0px
    use: 'Home hero title (마음놓고 금융하다) in #ffffff over the hero video, 72.45px line'
  display:
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0px
    use: 'Brand-page closing headline (안심하고 사용할 수 있습니다) in #060b11, 67.6px line'
  section:
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.39
    letterSpacing: '-0.4px'
    use: 'Section titles on the payment page (이렇게 쓰세요, 함께하면 좋아요) in #191c20, 50.04px line'
  statement:
    fontSize: 31.5px
    fontWeight: 500
    lineHeight: 1.39
    letterSpacing: '-0.4px'
    use: 'Two-line feature statements down the home page (일상의 모든 금융 / 한 번에 관리해요) in #060b11, 43.785px line'
  brand-headline:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0px
    use: 'Brand-page opening headline block (카카오페이, 새로운 금융을 만들고 있어요) in #000000, 32.2px line'
  card-title:
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.46
    letterSpacing: '-0.4px'
    use: 'Service-card title on the payment page in #060b11, 37.96px line'
  timeline:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.46
    letterSpacing: '-0.2px'
    use: 'Brand-page history timeline entries in #dfdfdf, 26.28px line'
  button-large:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: '-0.2px'
    use: 'App-store pill labels on the home hero in #f2f2f2, 20.7px line'
  nav:
    fontSize: 16px
    fontWeight: 300
    lineHeight: 5.25
    letterSpacing: 0px
    use: 'Header menu links (카카오페이, 서비스, 소식, ESG …) in #060b11, set on an 84px line that is the header height; weight 500 marks the current section'
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0px
    use: 'Document default on all four pages, 16.1px line, in #000000'
rounded:
  none: 0px
  control: 4px
  marker: 8px
  pill: 9999px
spacing:
  control: 8
  pill-x: 22
  card: 40
  band-y: 76
components:
  app-store-pill:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.2)
    textColor: '#f2f2f2'
    border: '1px solid #606a74'
    rounded: 9999px
    padding: 0px 22px
    height: 56px
    typography: 18px / 500 / 20.7px Noto Sans KR, letter-spacing -0.2px
    states: 'rest only: the bundle holds no hover, pressed or focus frame for this control, so those states are unmeasured'
    use: iOS 앱스토어로 이동 and 안드로이드 구글플레이로 이동 links over the home hero video, 163 x 56 and 170 x 56 (home::[data-omd-capture="11"])
  media-control:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.2)
    textColor: '#f2f2f2'
    border: '1px solid #d2d2d2'
    rounded: 9999px
    padding: 8px
    size: 40px x 40px
    states: rest only; no state frame was recorded
    use: Round icon buttons over the home hero video (자막 켜기, 일시정지, 소리 켜기, 전체화면 켜기), home::[data-omd-capture="13"] and its three siblings
  icon-circle:
    type: badge
    backgroundColor: '#ffffff'
    textColor: '#060b11'
    border: 1px solid rgba(6, 11, 17, 0.56)
    rounded: 9999px
    padding: 8px
    size: 40px x 40px
    use: Outline arrow circle in the corner of each payment-page service card (Circle-module outline); the same white outline circle is used for the arrow buttons of the home feature sections
  slide-control:
    type: button
    textColor: '#000000'
    rounded: 4px
    size: 32px x 32px
    hover: bg rgba(6, 11, 17, 0.06)
    pressed: bg rgba(6, 11, 17, 0.06)
    states: rest is transparent; the hover and pressed frames lay a 6% ink tint over the square and change nothing else in the recorded properties; no focus frame was recorded
    use: 이전 / 정지 / 다음 controls of the merchant logo carousels (온라인, 오프라인) on the payment page, surface-3::[data-omd-capture="13"] to "18"
  nav-link:
    type: tab
    textColor: '#060b11'
    typography: 16px / 300 / 84px Noto Sans KR
    selected: weight 500 on the current section (서비스 on the payment page, class noHover)
    hover: 'weight 300 to 500; on home the label also changes from #ffffff to #060b11'
    pressed: weight 500, as hover
    focus: 'on home the label turns #060b11 and stays at weight 300; no outline value is recorded in the frame'
    states: 'rest, hover, pressed and focus frames on the seven header links of home and the brand page; over the home hero the rest label is #ffffff'
    use: Header menu links on every kakaopay.com page (surface-3::[data-omd-capture="1"] to "7")
  disclosure-tab:
    type: tab
    textColor: '#000000'
    typography: 14px / 400 / 16.1px Noto Sans KR
    height: 30px
    selected: aria-selected=true on the fourth tab with the same recorded colour, weight and background as the other three
    states: role=tab; the bundle records no computed difference between the selected and unselected tabs in the dumped properties
    use: Sub-menu tabs of the product-disclosure page (surface-4::[data-omd-capture="13"] to "16")
  service-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 0px
    padding: 40px
    size: 554px x 392px
    use: 'Linked service cards (결제할 때 바로 포인트 적립해드려요, 가스, 전기, 통신요금도 카톡에서 납부하세요) laid in pairs on the #eff2f4 band at the foot of the payment page (surface-3::[data-omd-capture="19"], "20")'
fonts:
  roles:
    sans: Noto Sans KR
---

# Design System Inspiration of KakaoPay

## Overview

### Visual Theme & Atmosphere

KakaoPay (카카오페이) is a Korean financial platform. Its own brand page tells the company's history as a timeline: Korea's first simple-payment service in September 2014, KakaoTalk remittance in April 2016, spin-off as the independent Kakao Pay Corp. in April 2017, overseas payment and loan comparison in 2019, KakaoPay Point in 2020, a KOSPI listing in November 2021, the first own product from KakaoPay Insurance and the securities arm's MTS in 2022, and in 2023 loan refinancing, overseas ATM withdrawal and what it calls Korea's first instant insurance payout. The page closes with the brand line “마음 놓고 금융하다, 카카오페이” and the aim “누구나 카카오페이 하나로 금융하는 그날까지”. [Brand](https://www.kakaopay.com/brand)

The public site is mostly neutral. Pages are white, text is a near-black ink (`#060b11`) set in Noto Sans KR, and the home page opens on a full-bleed video with translucent dark pills over it. The recognisable KakaoPay yellow (`#ffeb00`) is not used on buttons. It appears as the logo mark in the brand-page headline, as the sixteen 16px markers down the brand timeline, and on one round control on home. Most of the feeling comes from large, light-weight Korean type: 63px hero, 52px and 36px headlines, and 31.5px two-line feature statements. The KakaoPay design story (read 2026-07-13) describes graphics rebuilt for accessibility: filled forms instead of black line art, a minimum 3:1 contrast between a graphic and its background, and separate icon, 2D and 3D levels. [Design story](https://story.kakaopay.com/225-kakaopay-design/)

KakaoPay belongs to the Kakao group, and Kakao Corp. lists it among its services on kakaocorp.com. That listing is group context only. No token or component here is taken from it.

**Key Characteristics:**

- Neutral white and near-black `#060b11` pages; yellow `#ffeb00` kept for the logo mark and brand markers
- Noto Sans KR, served from KakaoPay's own brand-site font path, at weights 300 to 700
- Large light-weight Korean display type over generous white space
- Fully round pills and circles (9999px) for controls over media; square 0px cards and sections
- A video-led home page with translucent `rgba(0, 0, 0, 0.2)` controls

### Primary tasks

- Pay without a card, cash or a certificate, confirming online payments with fingerprint or face ID
- Pay offline by showing a barcode, and pay abroad in won without exchanging money
- Manage money, insurance, loans and investments from the same app
- Earn KakaoPay Point when paying and pay utility bills inside KakaoTalk

### Brand Narrative

The brand page frames KakaoPay as “making a new kind of finance” (새로운 금융을 만들고 있어요). The payments it began with in 2014 grew into remittance, asset management, securities and insurance. The manifesto names what it hopes for: money moving easily in everyone's daily life, asset management that is not only for a few, and investing that finally feels close. It ends “누구나 카카오페이 하나로 금융하는 그날까지.” The same page points users to the 금융안심센터, which it says looks after user security 24 hours a day. [Brand](https://www.kakaopay.com/brand)

The site groups services under three verbs, 생활하다 (live), 관리하다 (manage) and 금융하다 (do finance), which echo the “마음 놓고 금융하다” line. The 2024 design story adds the visual rationale: accessible, reusable graphics made clear and warm, with rounded lines. [Design story](https://story.kakaopay.com/225-kakaopay-design/)

### Principles

1. **Finance as everyday life.** The service menu uses the verbs 생활하다 / 관리하다 / 금융하다. *UI implication:* describe actions in plain verbs, not product jargon.
2. **Identity in the mark, not the controls.** Yellow is kept for the logo and brand markers. *UI implication:* keep action controls neutral and let the mark carry recognition.
3. **Graphic accessibility.** The design story sets a 3:1 minimum graphic-to-background contrast and prefers filled forms. *UI implication:* check graphic contrast, especially yellow on white.
4. **Type-led hierarchy.** Large 500/600 Korean headings over white space. *UI implication:* build hierarchy from size and weight before adding colour or depth.

### Personas

No official persona research was reviewed. The public pages address people paying, managing money and borrowing in daily life, and merchants who accept KakaoPay. No named or demographic personas are supported.

## Colors

### Brand

- **Primary / KakaoPay yellow** (`#ffeb00`): the logo mark in the brand-page headline (an SVG path filled `rgb(255, 235, 0)`), the sixteen 16px round markers on the brand timeline, and one 40px round control on home (the arrow button labelled 카카오페이증권 보도자료 페이지로 이동). No captured CTA, link or text uses it. It marks identity, not action.

### Ink & text

- **Ink** (`#060b11`): the main text colour. Home feature statements (13 paragraphs), card titles, header links on white, and 16 paragraphs on the payment page.
- **Title** (`#191c20`): section titles and carousel headings on the payment and disclosure pages.
- **Text** (`#000000`): the document default on `body`, tab labels and the brand-page opening headline.
- Secondary text is ink at reduced alpha, not a separate hex: `rgba(6, 11, 17, 0.56)` for the footer copyright and footer menu, `rgba(6, 11, 17, 0.6)` on some payment-page captions.

### Surfaces

- **Canvas** (`#ffffff`): the page background on all four pages, and the service cards.
- **Band** (`#eff2f4`): the full-width band at the foot of the payment page that holds the service cards.

### On media

- **On-dark** (`#f2f2f2`): labels and icons on the translucent controls over the home video.
- **Pill border** (`#606a74`): 1px border of the app-store pills.
- **Control border** (`#d2d2d2`): 1px border of the round media controls.
- **Timeline text** (`#dfdfdf`): brand-page history entries, light text on the history section.

## Typography

### Font family

- **Noto Sans KR** is the only UI face. It is loaded at weights 300, 400, 500, 600 and 700 on all four pages and computed on 388 captured elements. It is served from KakaoPay's own path, `t1.kakaocdn.net/kakaopay/brand_site/font/NotoSans-*.woff`: Thin, DemiLight, Light, Regular, Medium, Bold and Black files. The declared stack is `"Noto Sans KR", system-ui, AppleSDGothicNeo, sans-serif`. The fallbacks are context, not tokens.
- **kp-m-masking** is a font inlined as a data URI. It is declared but was not used on any captured element. It is a masking utility, not a brand face.
- KakaoSmall and KakaoBig were recorded in July 2026 on Kakao Corp.'s service page for KakaoPay. They do not load on any kakaopay.com page captured on 2026-09-30 and are not part of this reference.

### Hierarchy

| Role | Size | Weight | Line height | Tracking | Where |
|------|------|--------|-------------|----------|-------|
| Hero | 63px | 500 | 72.45px | normal | Home hero title, white over video |
| Display | 52px | 600 | 67.6px | normal | Brand-page closing headline |
| Section | 36px | 500 | 50.04px | -0.4px | Payment-page section titles, `#191c20` |
| Statement | 31.5px | 500 | 43.785px | -0.4px | Home feature statements, `#060b11` |
| Brand headline | 28px | 700 | 32.2px | normal | Brand-page opening headline |
| Card title | 26px | 500 | 37.96px | -0.4px | Payment-page service cards |
| Timeline | 18px | 500 | 26.28px | -0.2px | Brand history entries, `#dfdfdf` |
| Button large | 18px | 500 | 20.7px | -0.2px | App-store pills |
| Nav | 16px | 300 | 84px | normal | Header links, 500 when current |
| Body | 14px | 400 | 16.1px | normal | Document default |

### Principles

- Display type is large and set at 500 or 600, not bold. Among captured headings, weight 700 appears only on the brand-page opening headline (the 본문 바로가기 skip link is also 700).
- Header links rest at 300 and move to 500 on hover or when their section is current. Weight carries the state, not colour.
- Korean headings use slight negative tracking (-0.2px to -0.4px). Body and nav stay at normal tracking.

## Layout

### Spacing

- 8px padding inside round controls; 22px horizontal padding in the app-store pills.
- 40px inner padding on service cards; 76px top padding (114px bottom) on the payment-page card band.
- Header height 84px on every page.

### Grid & container

Captured at a 1440px desktop viewport. The payment-page card band spans the full width, with a 1133px pair of cards inside it. Home stacks full-width feature sections, each with a two-line statement beside a product image.

### Border radius scale

| Token | Value | Use |
|-------|-------|-----|
| none | 0px | Sections, cards, images |
| control | 4px | Carousel slide controls |
| marker | 8px | 16px brand-timeline markers (circles) |
| pill | 9999px | App-store pills, media controls, icon circles |

### Responsive Behavior

#### Breakpoints

Not measured. Only the 1440 × 900 desktop viewport was captured.

#### Touch targets

Round controls are 40 × 40; app-store pills are 56px tall; slide controls are 32 × 32.

#### Collapsing strategy

Not captured.

#### Image behavior

Home feature images and payment-page screens are PNG and JPG files from `t1.kakaocdn.net/pay_brand_admin/`. They show app screens as pictures. Those screens are not captured UI.

## Elevation & Depth

Every captured element computes `box-shadow: none`. Depth comes from colour: translucent dark controls over video, a pale `#eff2f4` band behind white cards, and light `#dfdfdf` text on the brand-page history section.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

Not measured. The home hero is a video with pause, captions, sound and fullscreen controls, and the merchant carousels have a pause control, but no transition durations or easing curves were captured.

## Components

### Buttons

**App-store pill (home hero)**
- Background: `rgba(0, 0, 0, 0.2)` over the video
- Text: `#f2f2f2`
- Border: 1px solid `#606a74`
- Radius: 9999px
- Padding: 0px 22px; height 56px
- Font: 18px / 500 / 20.7px Noto Sans KR, -0.2px
- States: rest only. No hover, pressed or focus frame was recorded.
- Use: iOS 앱스토어로 이동 and 안드로이드 구글플레이로 이동

**Media control (home hero)**
- Background: `rgba(0, 0, 0, 0.2)`; icon `#f2f2f2`
- Border: 1px solid `#d2d2d2`
- Radius: 9999px; 40 × 40; padding 8px
- States: rest only
- Use: 자막 켜기, 일시정지, 소리 켜기, 전체화면 켜기

**Slide control (payment page)**
- Background: transparent at rest
- Icon: `#000000`
- Radius: 4px; 32 × 32
- Hover: `rgba(6, 11, 17, 0.06)` fill
- Pressed: `rgba(6, 11, 17, 0.06)` fill
- Focus: not recorded
- Use: 이전 / 정지 / 다음 on the merchant logo carousels

### Navigation

**Header link**
- Text: `#060b11` on white pages, `#ffffff` over the home hero
- Font: 16px / 300 on an 84px line (the header height)
- Selected: weight 500 on the current section (서비스 on the payment page)
- Hover and pressed: weight 300 to 500. On home the label also turns from `#ffffff` to `#060b11`.
- Focus: on home the label turns `#060b11` at weight 300. No outline value is recorded.

**Disclosure tab**
- Text: `#000000`; 14px / 400 / 16.1px; height 30px; `role=tab`
- Selected: the fourth tab carries `aria-selected=true`. Its recorded colour, weight and background match the unselected tabs, so no selected style is given.

### Cards & badges

**Service card (payment page)**
- Background: `#ffffff` on the `#eff2f4` band
- Text: `#000000`; title 26px / 500 in `#060b11`
- Radius: 0px; padding 40px; 554 × 392
- Use: paired linked cards for KakaoPay Point membership and bill payment

**Icon circle**
- Background: `#ffffff`; icon `#060b11`
- Border: 1px solid `rgba(6, 11, 17, 0.56)`
- Radius: 9999px; 40 × 40; padding 8px
- Use: arrow circle in each service card corner and beside the home feature sections

The collector expanded no dialog, menu or tab (`interactionCount: 0`). No authenticated payment, checkout, receipt, transfer or account screen was captured. The payment page shows those screens only as images.

---
**Verified:** 2026-09-30
**Tier 1 sources:** https://www.kakaopay.com/; https://www.kakaopay.com/brand; https://www.kakaopay.com/services/life/payment; https://www.kakaopay.com/qna/consumer/product_disclosure
**Tier 2 sources:** not attempted
**Conflicts unresolved:** none

The previous record (2026-07-13) took every token from Kakao Corp.'s service page on kakaocorp.com. This version re-sources all tokens from KakaoPay's own domain.

### States

Recorded states are limited to the header links (weight 300 to 500 on hover and pressed; a colour change on home), the payment-page slide controls (6% ink tint on hover and pressed), a disabled carousel arrow on the payment page, and tab selection by `aria-selected` with no visual difference in the recorded properties. No loading, success, error or empty-state UI was captured. KakaoPay's developer documentation covers API error codes, not visual states. [Developer docs](https://developers.kakaopay.com/docs/payment/online/reference)

## Do's and Don'ts

### Do

- Keep pages white with `#060b11` ink, and let large Noto Sans KR type carry the hierarchy.
- Use `#ffeb00` for the KakaoPay mark and small brand markers.
- Use fully round 9999px pills and circles for controls over imagery, with 1px light borders.
- Mark the current or hovered header link with weight 500 rather than colour.

### Don't

- Don't put yellow on primary buttons. No captured kakaopay.com CTA uses it.
- Don't substitute KakaoSmall or KakaoBig. Neither loads on kakaopay.com.
- Don't give cards shadows or rounded corners. Captured cards are square and flat.
- Don't invent payment-app states, success or error colours. None were captured.

## Voice & Tone

KakaoPay's public copy is short and plain, and it sounds reassuring. The payment page says “카드나 현금, 공동인증서가 없어도 바로 결제하고 카카오페이포인트를 받을 수 있어요. 카카오페이로 마음 놓고 결제하세요.” The home page uses paired lines such as “일상의 모든 금융 / 한 번에 관리해요” and “대출도 톡하듯 쉽게”. It uses polite 해요체 and everyday verbs, and it talks about finance as ordinary activity. The brand page states the intent in the first person: “이것은 카카오페이가 금융을 대하는 마음입니다.” [Home](https://www.kakaopay.com/) · [Payment](https://www.kakaopay.com/services/life/payment) · [Brand](https://www.kakaopay.com/brand)

## Agent Prompt Guide

### Quick color reference

- Brand mark / accent: `#ffeb00`
- Ink: `#060b11`; titles `#191c20`; default text `#000000`
- Canvas `#ffffff`; band `#eff2f4`
- On media: text `#f2f2f2`, borders `#606a74` / `#d2d2d2`, fill `rgba(0, 0, 0, 0.2)`

### Example component prompts

- “A KakaoPay-style hero: full-bleed video, a 63px / 500 Noto Sans KR title in white, and two 56px pill links with `rgba(0, 0, 0, 0.2)` fill, a 1px `#606a74` border and 18px / 500 `#f2f2f2` labels.”
- “A payment-page card row: a full-width `#eff2f4` band with 76px top padding and two square white 554 × 392 cards with 40px padding, a 26px / 500 `#060b11` title and a 40px white outline arrow circle.”

### Iteration guide

Start from neutral white and ink. Add yellow only as a mark. Check that the display type stays at 500 or 600 and the controls stay fully round.
