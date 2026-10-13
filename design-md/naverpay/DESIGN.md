---
name: Naver Pay
colors:
  primary: '#09aa5c'
  ink: '#1e1e23'
  body: '#404048'
  muted: '#767678'
  nav-idle: '#aaaaac'
  subtle: '#929294'
  surface: '#f6f8fa'
  surface-strong: '#edeff2'
  chip: '#eef0f2'
  canvas: '#ffffff'
  error-text: '#ff5252'
  corporate-ink: '#121212'
  corporate-muted: '#878890'
  corporate-link: '#03c75a'
typography:
  guide-title:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.19
    use: 'Design-guide page title (h3.title, #1e1e23, 38px line)'
  guide-subtitle:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.27
    use: 'Design-guide section title (h4.sub_title, #1e1e23, 28px line)'
  guide-lede:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.4
    use: 'Design-guide description paragraph (p.description, #1e1e23, 21px line)'
  guide-nav:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.33
    use: Design-guide side navigation link (24px line); the current item is 700
  top-nav:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.4
    use: Developer-center top navigation link (21px line); hover and current are 700
  guide-note:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.46
    use: 'Bridge-guide annotation text (p.bridge_guide_text, #404048, 19px line)'
  footer-link:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    use: Developer-center footer sitemap link (#767678, 20px line)
  prompt-title:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.36
    letterSpacing: '-0.5px'
    use: Developer-center home prompt heading (h3.title_prompt, 30px line)
  corporate-hero:
    fontSize: 53px
    fontWeight: 900
    lineHeight: 1.11
    letterSpacing: '-1px'
    use: Naver Financial corporate hero headline in NanumSquare (59px line)
  corporate-lede:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: '-0.5px'
    use: Naver Financial corporate hero sub-line in NanumSquare (32px line)
  corporate-section:
    fontSize: 18px
    fontWeight: 900
    lineHeight: 1.39
    use: Naver Financial corporate section title in NanumSquare (25px line)
rounded:
  hover-pill: 8px
  chip: 10px
  link-card: 12px
spacing:
  top-nav-x: 15
  guide-nav-y: 12
  guide-nav-x: 10
  link-card-y: 37
  link-card-x: 29
  chip-y: 12
  chip-x: 16
components:
  top-nav-link:
    type: tab
    textColor: '#aaaaac'
    rounded: 0px
    padding: 13px 15px 10px
    height: 44px
    typography: 15px / 400 / 21px
    hover: 'bg #edeff2, fg #1e1e23, 15px / 700, radius 8px'
    pressed: 'bg #edeff2, fg #1e1e23, 15px / 700, radius 8px'
    states: 'hover and pressed are settled frames: four sibling links (captures 3-6) on home and on surface-2 record identical values on published grey steps; the current-section link (class on, surface-2 capture 5) rests at fg #09aa5c, 15px / 700 and keeps #09aa5c over the #edeff2 hover fill; that variant is described, not declared as a state, because the bundle records no aria-current or aria-selected'
    use: Developer-center top navigation link (a.link_lnb) at home::[data-omd-capture="3"], 95 x 44; text renders the OS system stack (-apple-system first), no webfont is loaded
  guide-nav-link:
    type: tab
    textColor: '#404048'
    rounded: 0px
    padding: 12px 10px
    height: 48px
    typography: 18px / 500 / 24px
    hover: 'bg #f6f8fa, radius 8px, fg unchanged'
    pressed: 'bg #edeff2, radius 8px, fg unchanged'
    states: 'settled frames on three sibling links (captures 9, 10, 12) and on the current link (capture 11), which takes the same fills; the current item (class on) rests at fg #09aa5c, 18px / 700, a described variant rather than a declared state (no aria-current or aria-selected recorded)'
    use: Design-guide side navigation link (a.link_guide) at surface-2::[data-omd-capture="9"], 230 x 48
  developer-link-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px #edeff2'
    rounded: 12px
    padding: 37px 29px
    size: 400px x 156px
    hover: box-shadow rgba(0, 0, 0, 0.1) 0px 4px 16px 0px; bg and border unchanged
    states: hover shadow on both sibling cards (captures 14, 15); the pressed frame keeps the same shadow; the anchor's own text colour is the browser default link blue, so no label colour is claimed
    use: Developer-center link card (a.item_link) at home::[data-omd-capture="14"]
  prompt-chip:
    type: card
    backgroundColor: '#eef0f2'
    rounded: 10px
    padding: 12px 16px
    height: 42px
    use: 'Developer-center home prompt chip (div.card): fourteen captured in one row, seven widths each twice; its 12px / 400 black text equals the body''s inherited values, so no label style is claimed'
  language-select:
    type: input
    textColor: '#929294'
    rounded: 0px
    padding: 0px 11px 0px 20px
    height: 19px
    typography: 13px / 400 / 19px
    states: rest on home and surface-2 (capture 8 on each); the bundle holds no state frame for this select
    use: Header language select (select.select_language), 65 x 19, no fill or border
  footer-sitemap-link:
    type: listItem
    textColor: '#767678'
    height: 17px
    typography: 14px / 400 / 20px
    states: rest on thirteen links (captures 16-28); no state frame
    use: Developer-center footer sitemap link (a.link) at home::[data-omd-capture="16"]
  footer-policy-link:
    type: listItem
    textColor: '#404048'
    height: 15px
    typography: 12px / 400 / 18px
    states: rest on three links (captures 29-31); no state frame
    use: 'Developer-center footer policy link at home::[data-omd-capture="29"], beside a #404048 12px / 400 / 24px copyright line'
  corporate-gnb-link:
    type: tab
    textColor: '#000000'
    padding: 6px 0px
    height: 34px
    typography: 18px / 400 / 21.6px NanumSquare
    states: rest on five links (captures 1-5); the collector recorded no pseudo-state frame on surface-3
    use: Naver Financial corporate top navigation link (a.lk_item) at surface-3::[data-omd-capture="1"]
  corporate-more-link:
    type: button
    textColor: '#03c75a'
    height: 18px
    typography: 15px / 700 / 18px NanumSquare
    states: rest on two links (captures 6, 19); a third green link (capture 22, a.lk_view) records 15px / 600 / 24px; no pseudo-state frame on surface-3
    use: Naver Financial corporate section 'more' text link (a.lk_more) at surface-3::[data-omd-capture="6"], 69 x 18, no fill
  corporate-family-site-toggle:
    type: button
    textColor: '#878890'
    border: '1px #c9c9c9'
    rounded: 0px
    padding: 0px 31px 0px 12px
    height: 35px
    typography: 13px / 400 / 35px NanumSquare
    states: 'the collector''s menu interaction opened it into a 168 x 106 list (ul.select_list) with a #ffffff fill, 1px #c9c9c9 top and side borders and #878890 15px / 400 / 18px items; no pseudo-state frame'
    use: Naver Financial corporate footer family-site select (button.btn_toggle) at surface-3::[data-omd-capture="30"], 168 x 35, letter-spacing -0.3px
fonts:
  roles:
    corporate: NanumSquare
---

# Design System Inspiration of Naver Pay

## Overview

### Visual Theme & Atmosphere

Naver Pay (네이버페이) is the payments and finance brand of Naver Financial (네이버파이낸셜), the Naver company that has run it since the financial business was incorporated as its own entity in November 2019. It began in June 2015 as a simple-payment service stitched into Naver search and shopping, grew a points economy, quick settlement for sellers and deferred payment around it, and now presents itself on the corporate site as "금융을 넓히는 기술, 네이버페이" — technology that widens finance, from payments through loans, insurance, cards, securities and real estate. The recent history is one of expansion from checkout into a full financial platform: a standalone Naver Pay app in 2021, a 2023 mobile overhaul that put assets, payments, financial products, securities and real estate in one place, and in 2024 overseas QR payment, a wallet beta, a mobile transit card and face-sign payment.

The brand mark is governed tightly. The official logo guide calls the Naver Pay logo "the brand image that stands for the whole service", reserves it for Naver Pay partners, and sets the normal case as a Naver Pay Black logo on Naver Pay Green (`#00DE5A`), with Naver Green (`#03C75A`) allowed only as an exception on white when legibility demands it. That signature green lives on the logo, not in the interface.

The interface that merchants and developers actually work in is calmer. The developer center and its design guide sit on white with a cool grey ladder that the bridge guide publishes as numbered steps — near-black ink `#1e1e23`, body grey `#404048`, meta grey `#767678`, idle `#aaaaac`, down to the `#f6f8fa` and `#edeff2` tints — and one working green, `#09aa5c` (the guide's Green 500), which marks where you are in the navigation. Hover never underlines or recolours in a loud way: links settle into soft 8px grey pills. Cards are flat white with a 1px `#edeff2` edge and lift only on hover. The corporate site (Naver Financial) speaks in a different, louder register — NanumSquare at weight 900 and 53px, tightly tracked, with Naver green `#03c75a` on its "more" links. The consumer app itself sits behind Naver login, so this reference reads the brand through its public developer, design-guide and corporate faces.

**Key Characteristics:**
- One working green, `#09aa5c`, used as the current-location marker in navigation
- Signature Naver Pay Green `#00DE5A` reserved for the logo by the official guide
- A published grey ladder (`#1e1e23` → `#f6f8fa`) that the live developer center is built from
- Hover as a soft 8px grey pill (`#edeff2` or `#f6f8fa`), never an underline
- Flat white cards with a 1px `#edeff2` edge; the only shadow appears on hover
- No webfont on the developer surfaces — the OS system stack carries the UI
- NanumSquare 900 at display size on the Naver Financial corporate site

### Primary tasks

- Pay across Naver and partner merchants without re-entering card details
- Earn and spend Naver Pay points inside the Naver ecosystem
- Integrate Naver Pay checkout as a merchant or developer, following the official guides
- Use the logo and benefit badges correctly on a partner surface

### Brand Narrative

Naver Pay launched its simple-payment service in June 2015. The Naver Financial history page traces what followed: convenience-store change top-ups and bank-partnered check cards in 2016, a Samsung credit card and a K-Bank check card in 2017, offline QR payment with Zero Pay in December 2018, and in November 2019 the incorporation of Naver Financial as a separate company. From 2020 the list turns financial — on-site payment and quick settlement for SmartStore sellers, deferred payment pilots and credit management in 2021, the standalone Naver Pay app in August 2021, loan and insurance comparison from 2022, a June 2023 mobile overhaul that brought assets, payments, financial products, securities and real estate together, overseas QR payment in 65 countries by December 2023, and in 2024 Weixin Pay and PayPay acceptance, a Naver Pay wallet beta, a mobile transit card and face-sign payment.

The company describes the arc in its own words: a simple payment connected seamlessly from search to shopping, a strong points ecosystem, and services built on mutual growth with sellers, now becoming "a comprehensive financial platform beyond simple payment". Naver Financial is based at NAVER 1784 in Seongnam.

### Principles

*Editorial readings of the captured surfaces and official guides, not Naver statements.*

1. **The mark is protected, the interface is quiet.** The logo guide fixes the signature green and limits the logo to partners; the working interface uses a softer green only to show location.
2. **Greys are specified, not improvised.** The live developer center uses the same grey steps the bridge guide publishes, so partner pages and Naver Pay's own pages can match.
3. **State through weight and tint.** Hover and current states change weight and add a soft grey pill instead of adding colour.
4. **Flat until touched.** Cards carry an edge, not a shadow, and lift only under the pointer.

### Personas

*Personas below are fictional archetypes informed by publicly observable Naver Pay user segments, not individual people.*

**이준혁, 38, 서울.** Sells clothing online and added Naver Pay because his customers already carry Naver points. He reads the logo guide once to place the payment button correctly and wants settlement to be quick.

**김태우, 29, 경기.** A freelance developer who builds checkout pages for small merchants. He lives in the developer center's guides and relies on the published colour steps to make partner pages look native.

**최수아, 25, 서울.** Pays for convenience stores, delivery and online shopping with Naver Pay and follows her points balance; she recognises the green logo at checkout instantly.

**박미경, 44, 부산.** Runs a small restaurant and accepts Naver Pay QR; she cares about fees and settlement dates more than design, and expects plain Korean in every notice.

## Colors

### Interface (developer center and design guide, captured)
- **Working Green** (`#09aa5c`): the current-section colour on the top navigation and the design-guide side navigation. The bridge guide publishes the same value as Green 500.
- **Ink** (`#1e1e23`): design-guide titles, section titles and description text; also the text colour a top-navigation link takes on hover. Published as grey step 900.
- **Body** (`#404048`): design-guide side-navigation links, bridge-guide annotations, footer policy links and the copyright line. Step 800.
- **Muted** (`#767678`): footer sitemap links. Step 700.
- **Nav Idle** (`#aaaaac`): resting top-navigation links. Step 500.
- **Subtle** (`#929294`): the header language select. Step 600.
- **Surface** (`#f6f8fa`): hover fill of design-guide side-navigation links.
- **Surface Strong** (`#edeff2`): hover and pressed fill of top-navigation links, pressed fill of side-navigation links, and the 1px edge of link cards.
- **Chip** (`#eef0f2`): fill of the prompt chips on the developer-center home.
- **Canvas** (`#ffffff`): link-card fill and the page ground.
- **Error Text** (`#ff5252`): the error line in the bridge guide's live input example.

### Corporate (Naver Financial site, captured)
- **Corporate Ink** (`#121212`): body text and section titles.
- **Corporate Muted** (`#878890`): footer text and the family-site select; its open list sits on `#ffffff` with a 1px `#c9c9c9` border.
- **Corporate Link** (`#03c75a`): the green "more" links beside each section title. The logo guide names this exact value Naver Green.
- **Navigation Black** (`#000000`): corporate top-navigation links.

### Declared by the official guides (not captured as computed style)
- **Naver Pay Green** `#00DE5A` and **Naver Pay Black** `#000000` — the logo colours in the logo guide; Naver Green `#03C75A` is its white-background exception.
- The bridge guide also publishes `#0B9552` (Green 600), `#EEF9F3` (Green 100), `#E3F6ED` (Green 200) and the grey steps `#BBBBBD`, `#C8CACC`, `#DCDEE0`, `#EFEFF0`, `#F3F5F7`. They belong to the partner-facing bridge specification; none of them appears as a computed value on the three captured surfaces, so they stay out of the token set.

## Typography

### Font evidence by class
- **Live surface-use:** NanumSquare is loaded on the Naver Financial corporate site from its own server (woff, eot and OTF files under /font/) and renders every text role there — navigation, hero, section titles, links and footer. It is scoped to that corporate surface and is not the developer surfaces' face.
- **Developer center and design guide:** no webfont is loaded. Text computes to the operating system's own stack (Apple's system face first, then Apple SD Gothic Neo, Nanum Gothic and Malgun Gothic), so these surfaces have no brand face to specimen; their sizes and weights are still recorded below.
- **Official product-use:** none of the pages opened in this pass names a UI typeface for Naver Pay.
- **Official distributed font assets:** none opened in this pass; no Naver Pay font download or licence page was read.
- **Declared-only:** NotoSans (Light and Regular faces declared on the corporate site, no visible use) and swiper-icons (the carousel library's embedded icon font).
- **Unresolved:** a June 2026 reading of the merchant center reported NanumSquareNeo for hero headlines and Pretendard for UI text. That host is outside the capture policy and was not re-observed, so neither face is promoted. NanumSquare's licence was not opened in this pass.

### Hierarchy

| Role | Surface | Size | Weight | Line height | Notes |
|------|---------|------|--------|-------------|-------|
| Guide title | Design guide | 32px | 700 | 38px | `#1e1e23` |
| Guide section | Design guide | 22px | 700 | 28px | `#1e1e23` |
| Guide description | Design guide | 15px | 400 | 21px | `#1e1e23` |
| Guide side nav | Design guide | 18px | 500 (current 700) | 24px | `#404048`, current `#09aa5c` |
| Top nav | Developer center | 15px | 400 (hover/current 700) | 21px | `#aaaaac` |
| Guide annotation | Design guide | 13px | 400 | 19px | `#404048` |
| Prompt heading | Developer center | 22px | 700 | 30px | tracking -0.5px |
| Footer link | Developer center | 14px | 400 | 20px | `#767678` |
| Corporate hero | Corporate | 53px | 900 | 59px | NanumSquare, tracking -1px |
| Corporate sub-line | Corporate | 20px | 600 | 32px | NanumSquare, tracking -0.5px |
| Corporate section | Corporate | 18px | 900 | 25px | NanumSquare |

### Principles
- **Weight carries state.** A navigation link moves from 400 to 700 when hovered or current; colour and fill do the rest.
- **Quiet UI, loud corporate.** The developer surfaces stay on system text at 13–32px; the corporate site is the one place that sets heavy 900 display type.
- **Hangul first.** Every captured heading and label is Korean; sizes are tuned for dense Korean text rather than Latin display.

## Layout

### Spacing
- Top-navigation links pad 13px 15px 10px inside a 44px row; side-navigation rows are 48px with 12px 10px padding in a 230px column.
- The design-guide content column is 1000px wide.
- Link cards pad 37px 29px; prompt chips pad 12px 16px at 42px high.
- Corporate content cards run 335px wide in rows.

### Radius
- 0px on almost everything at rest (200 of 248 radius readings).
- 8px for the hover pill on navigation links.
- 10px for prompt chips, 12px for link cards.

### Whitespace
- Separation comes from white space, grey steps and a 1px `#edeff2` edge rather than rules or shadows.

### Responsive Behavior

All three surfaces were captured at a 1440 x 900 desktop viewport. No breakpoint behaviour was measured, so none is specified here. The measured touch-relevant sizes are the 44px top-navigation row and the 48px side-navigation row.

## Elevation & Depth

| Level | Treatment | Where |
|-------|-----------|-------|
| Flat | no shadow | every captured element at rest |
| Tint | `#f6f8fa` / `#edeff2` fill | hover and pressed navigation pills |
| Edge | 1px `#edeff2` | link cards |
| Lift | `rgba(0, 0, 0, 0.1) 0px 4px 16px 0px` | link card on hover only |

Resting shadows are absent across all three surfaces; the one shadow in the bundle is the link card's hover lift.

## Motion & Easing

The evidence collector records computed colours, sizes and state endpoints, not transition or animation properties, so no duration or easing is declared for Naver Pay here. What is known is the endpoint of each change: navigation settles into its grey pill and weight 700, and the link card gains its hover shadow. Choose motion that keeps those endpoints intact and collapses to instant under `prefers-reduced-motion: reduce`.

## Components

### Navigation

**Top navigation link** (developer center, `a.link_lnb`)
- Text: `#aaaaac`
- Font: 15px, weight 400, line height 21px
- Padding: 13px 15px 10px
- Height: 44px
- Hover: fill `#edeff2`, text `#1e1e23`, weight 700, radius 8px
- Pressed: identical to hover
- Current section: text `#09aa5c`, weight 700, and the same `#edeff2` pill on hover

**Design-guide side navigation link** (`a.link_guide`)
- Text: `#404048`
- Font: 18px, weight 500, line height 24px
- Padding: 12px 10px
- Height: 48px
- Hover: fill `#f6f8fa`, radius 8px
- Pressed: fill `#edeff2`, radius 8px
- Current item: text `#09aa5c`, weight 700

**Corporate top navigation link** (Naver Financial, `a.lk_item`)
- Text: `#000000`
- Font: 18px NanumSquare, weight 400, line height 21.6px
- Padding: 6px 0px
- Height: 34px

### Cards

**Developer link card** (`a.item_link`)
- Background: `#ffffff`
- Border: 1px `#edeff2`
- Radius: 12px
- Padding: 37px 29px
- Size: 400 x 156
- Hover: shadow `rgba(0, 0, 0, 0.1) 0px 4px 16px 0px`, fill and edge unchanged

**Prompt chip** (`div.card`)
- Background: `#eef0f2`
- Radius: 10px
- Padding: 12px 16px
- Height: 42px

### Links & Inputs

**Language select** (`select.select_language`)
- Text: `#929294`
- Font: 13px, weight 400, line height 19px
- Padding: 0px 11px 0px 20px
- Border: none

**Footer sitemap link**
- Text: `#767678`
- Font: 14px, weight 400, line height 20px

**Footer policy link**
- Text: `#404048`
- Font: 12px, weight 400, line height 18px

**Corporate "more" link** (`a.lk_more`)
- Text: `#03c75a`
- Font: 15px NanumSquare, weight 700, line height 18px
- Background: none

**Corporate family-site select** (`button.btn_toggle`)
- Text: `#878890`
- Border: 1px `#c9c9c9`
- Padding: 0px 31px 0px 12px
- Height: 35px
- Font: 13px NanumSquare, weight 400, line height 35px, tracking -0.3px
- Open: a 168 x 106 list on `#ffffff` with 1px `#c9c9c9` top and side borders and `#878890` 15px items

### State evidence
Hover and pressed values above come from settled frames in the capture bundle: four sibling top-navigation links on two surfaces, four side-navigation links, and both link cards record identical values on the published grey steps. No focus value is declared. Several developer-center anchors keep the browser's default link colours on the anchor itself (their visible labels are child elements), so no label colour or pressed colour is taken from them.

---

**Verified:** 2026-09-30 (deterministic evidence capture of three public first-party surfaces, reconciled with the official guides and corporate pages)
**Tier 1 sources:** https://developers.pay.naver.com/, https://developers.pay.naver.com/design/bridge, https://www.naverfincorp.com/, https://developers.pay.naver.com/design/brand/logo, https://www.naverfincorp.com/introduce/introduceView
**Tier 2 sources:** getdesign.md/naverpay returned a page with no Naver Pay content; styles.refero.design search for "naver pay" returned no usable result
**Conflicts unresolved:** none

### States

| State | Treatment (observed) |
|---|---|
| Hover — top navigation | `#edeff2` pill, 8px radius, text `#1e1e23`, weight 700 |
| Pressed — top navigation | same as hover |
| Current — top navigation | text `#09aa5c`, weight 700 |
| Hover — side navigation | `#f6f8fa` pill, 8px radius |
| Pressed — side navigation | `#edeff2` pill, 8px radius |
| Current — side navigation | text `#09aa5c`, weight 700 |
| Hover — link card | shadow `rgba(0, 0, 0, 0.1) 0px 4px 16px 0px` |
| Error — bridge example | error line in `#ff5252`, 14px / 20px |
| Open — corporate family-site select | 168 x 106 list, `#ffffff` fill, 1px `#c9c9c9` border |

Focus, disabled, loading and empty states did not occur on these public surfaces and are not specified.

## Do's and Don'ts

### Do
- Mark the current location with `#09aa5c` text and weight 700
- Build text hierarchy from the published greys: `#1e1e23`, `#404048`, `#767678`, `#aaaaac`
- Show hover as an 8px `#edeff2` or `#f6f8fa` pill
- Keep cards flat white with a 1px `#edeff2` edge and lift them only on hover
- Keep the Naver Pay Green `#00DE5A` for the logo, as the logo guide requires

### Don't
- Don't use the logo green `#00DE5A` as an interface fill or text colour
- Don't add resting drop shadows
- Don't substitute a webfont on the developer surfaces as though it were Naver Pay's own
- Don't underline navigation on hover
- Don't recolour or recompose the logo; the guide forbids arbitrary changes

## Voice & Tone

Naver Pay writes plainly and in full Korean sentences. Guides state the rule and the reason in the same breath, the corporate site speaks in broad declarative lines about widening finance, and nothing leans on exclamation or urgency.

| Context | Tone |
|---|---|
| Corporate headline | Broad and declarative — "금융을 넓히는 기술, 네이버페이" |
| Service scope | A plain list — "결제 · 대출 · 보험 · 카드 · 증권 · 부동산까지" |
| Developer support | Helpful and direct — "네이버페이 개발자센터를 통해 쉽고 빠르게 결제 연동을 지원해 드립니다." |
| Brand rules | Firm, with the reason given — "가이드라인을 따라 사용해야 하고 임의로 변경하여 사용할 수 없습니다." |

**Voice samples (verbatim, read 2026-09-30):**
- "금융을 넓히는 기술, 네이버페이" — corporate home hero
- "이제 네이버페이는 간편결제를 넘어, 종합 금융플랫폼으로 거듭나고 있습니다." — corporate introduction
- "네이버페이 로고는 서비스 전체를 의미하는 브랜드 이미지로 네이버페이 협력사에 한하여 사용할 수 있습니다." — logo guide
- "잘못된 사용은 브랜드 이미지를 왜곡하거나 커뮤니케이션 효과를 약화하므로 사용상 주의를 필요로 합니다." — logo guide

**Forbidden register:** unexplained payment jargon, urgency cues, exclamation-heavy sales copy.

## Agent Prompt Guide

### Quick Color Reference
- Current-location green: `#09aa5c`
- Ink: `#1e1e23`
- Body: `#404048`
- Muted: `#767678`
- Idle navigation: `#aaaaac`
- Hover pill: `#edeff2` (top navigation) or `#f6f8fa` (side navigation)
- Card: `#ffffff` with a 1px `#edeff2` edge
- Chip: `#eef0f2`
- Error line: `#ff5252`

### Example Component Prompts
- "Top navigation on white: links 15px weight 400 in `#aaaaac`, padding 13px 15px 10px, 44px high. On hover the link becomes `#1e1e23` weight 700 on an `#edeff2` pill with 8px radius. The current page's link is `#09aa5c` weight 700."
- "Documentation side navigation, 230px wide: 48px rows, 18px weight 500 `#404048`, padding 12px 10px; hover fill `#f6f8fa`, pressed fill `#edeff2`, both 8px radius; current item `#09aa5c` weight 700."
- "Link card: `#ffffff`, 1px `#edeff2` border, 12px radius, 37px 29px padding, no shadow; on hover add `rgba(0, 0, 0, 0.1) 0px 4px 16px 0px`."

### Iteration Guide
1. Green marks location, not decoration
2. Greys come from the published ladder
3. Hover is a soft pill, never an underline
4. Flat by default; lift only on hover
5. No brand webfont on the developer surfaces — do not invent one
