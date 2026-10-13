---
name: Hana Bank
colors:
  primary: '#008485'
  nav-hover: '#009591'
  canvas: '#ffffff'
  ink: '#000000'
  body: '#555555'
  body-home: '#666666'
  text-strong: '#333333'
  lnb-muted: '#637079'
  hairline: '#dddddd'
  surface: '#f3f3f3'
typography:
  hero:
    fontSize: 38px
    fontWeight: 800
    lineHeight: 1.26
    letterSpacing: '-0.5px'
    use: 'Home carousel headline (p), NotoSans_Bold, #000000'
  page-title:
    fontSize: 38px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: '-2px'
    use: 'Inner-page title (h3), NotoSans_Medium, #000000'
  section-title:
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: '-3px'
    use: 'Left-navigation section title (h2), NotoSans_Medium, #008485 over a 3px #008485 rule'
  gnb:
    fontSize: 18px
    fontWeight: 400
    letterSpacing: '-0.5px'
    use: Main navigation tab label, NotoSans_Regular in a 70px line box
  lnb:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.88
    letterSpacing: '-1px'
    use: Left navigation link, NotoSans_Regular
  body:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: Default body text
  news-title:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: '-0.5px'
    use: 'Home news headline (p), NotoSans_Medium, #333333'
rounded:
  control: 10px
  pill: 50px
  join: 20px
  small: 3px
spacing:
  gnb-x: 40
  lnb-top: 10
  lnb-right: 25
  lnb-bottom: 8
  footer-select-x: 16
  small-button-x: 13
  join-x: 20
components:
  gnb-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#000000'
    padding: 0px 40px
    height: 70px
    typography: 18px / 400 / 70px NotoSans_Regular, -0.5px tracking
    hover: 'fg #009591, NotoSans_Bold'
    states: 'hover and pressed both record #009591 text in NotoSans_Bold on all five tabs (captures 8-12) on each of the three pages; the two frames hold the same opaque value, so the transition had settled'
    use: Main banking navigation tab (a) at home::[data-omd-capture="8"], 112-150 x 70; the served HTML labels the five tabs 조회, 이체, 공과금, 외환, 금융상품
  lnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#637079'
    padding: 10px 25px 8px 0px
    size: 260px x 48px
    typography: 16px / 400 / 30px NotoSans_Regular, -1px tracking
    hover: 'fg #008485, NotoSans_Medium'
    states: 'hover and pressed record #008485 in NotoSans_Medium on seven sibling links on the product page (captures 17-23) and five on the news page (captures 16-20); the current item at rest (surface-2 capture 16, surface-3 capture 21) records the same #008485 NotoSans_Medium, but aria-current was not captured, so it is a described variant, not a selected state'
    use: Left navigation link at surface-2::[data-omd-capture="17"], 260 x 48
  slide-cta:
    type: button
    backgroundColor: '#333333'
    textColor: '#ffffff'
    rounded: 50px
    size: 98px x 40px
    typography: 14px / 400 / 40px NotoSans_Regular, -0.5px tracking
    states: rest on six carousel slides (odd captures 19-29); the hover and pressed frames on captures 19, 21 and 23 recorded no change
    use: Home carousel action (a) at home::[data-omd-capture="19"]; the served HTML labels it 자세히보기
  footer-site-select:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#555555'
    border: '1px #dddddd'
    rounded: 10px 0px 0px 10px
    padding: 0px 16px
    size: 200px x 48px
    typography: 12px / 400 NotoSans_Regular
    states: 'rest only: these controls lie beyond the collector''s first 24 probed controls on each page, so no hover or pressed frame exists'
    use: Segmented footer site selector at home::[data-omd-capture="78"]; three joined buttons (first 10px 0px 0px 10px, middle 0px, last 0px 10px 10px 0px) share 1px 0px 1px 1px edges; identical on all three pages
  hanaworld-button:
    type: button
    backgroundColor: '#f3f3f3'
    textColor: '#000000'
    rounded: 10px
    size: 237px x 48px
    typography: 14px / 400 / 48px NotoSans_Regular, -0.5px tracking
    states: rest only (beyond the probed set)
    use: Footer grey button (button.btn--hanaworld) at home::[data-omd-capture="82"]; identical on all three pages
  product-join-pill:
    type: button
    backgroundColor: '#008485'
    border: '1px #16959c'
    rounded: 20px
    padding: 0px 20px
    size: 94px x 33px
    states: rest only (captures 41, 44, 47, beyond the probed set)
    use: 'Product-list join link (a.link-join) at surface-2::[data-omd-capture="41"]; the label colour is not claimed because the link computes #555555, which would sit on its own #008485 fill, and no separate label node was sampled'
  outline-small-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#555555'
    border: '1px #c1c1c1'
    rounded: 3px
    padding: 0px 13px
    height: 28px
    typography: 12px / 400 / 25px NotoSans_Regular
    states: rest only (captures 36-38, beyond the probed set)
    use: Small outline link button (a.btn) above the product list at surface-2::[data-omd-capture="36"], 68-121 wide
  teal-outline-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#008485'
    border: '1px #a5d3d4'
    size: 146px x 38px
    typography: 14px / 700 / 38px; declared family 돋움, unresolved in the capture environment
    states: rest only (capture 32, beyond the probed set)
    use: Teal outline link (a.btnMiddle) on the news page at surface-3::[data-omd-capture="32"]
  news-search-input:
    type: input
    backgroundColor: transparent
    textColor: '#555555'
    border: '1px #dddddd'
    padding: 0px 0px 0px 10px
    size: 280px x 31px
    typography: 13.33px / 400 / 29px; declared family 돋움, unresolved in the capture environment
    states: rest only (capture 30, beyond the probed set); nothing was typed
    use: News search field (input.text) at surface-3::[data-omd-capture="30"]
  news-search-button:
    type: button
    backgroundColor: transparent
    textColor: '#028389'
    border: '1px #7cc2c2'
    size: 98px x 31px
    typography: 12px / 700 / 30px; declared family dotum, unresolved in the capture environment
    states: rest only (capture 31, beyond the probed set); never clicked
    use: News search button (button.searchBtn) at surface-3::[data-omd-capture="31"]
  pagination-item:
    type: button
    backgroundColor: transparent
    textColor: '#6e6e6e'
    border: '1px #ffffff'
    size: 27px x 27px
    typography: 14px / 700 / 27px; declared family 돋움, unresolved in the capture environment
    states: 'rest only (captures 43-56, beyond the probed set); the current page (a.on, capture 45) records #008486 text with a 1px #7fc0c2 border, a described variant'
    use: News-list pagination link at surface-3::[data-omd-capture="46"]
fonts:
  roles:
    ui: NotoSans_Regular
    medium: NotoSans_Medium
    bold: NotoSans_Bold
---

# Design System Inspiration of Hana Bank

> **A full-service Korean bank whose web portal is dense, white and quiet, with Hana teal marking where you are and what you can open.**

## Overview

### Visual Theme & Atmosphere

Hana Bank (하나은행) is the banking company of Hana Financial Group. Its public site's footer links the group's holding-company site (`hanafn.com`) alongside sister companies such as Hana Card, Hana Capital, Hana Life and Hana Savings Bank. The bank's own PR pages still carry the KEB name, from Korea Exchange Bank, that the bank bore after the two combined. The CI page is titled "KEB HANA CI | 하나은행소개", and the e-mail counselling page still ends in "KEB하나은행". The home page and most inner pages now title themselves simply "하나은행". The name itself means "one", and the portal is built as one place for everyday banking. Five main tabs cover 조회, 이체, 공과금, 외환 and 금융상품: inquiry, transfer, bills, foreign exchange, and financial products. A product finder, a news list, English, Japanese, Vietnamese and Chinese "EasyOne" entry pages, and links to the bank's app family (하나원큐) complete it.

The visual language is institutional and text-dense rather than promotional. Pages sit on white. The main navigation uses black 18px labels in 70px-tall tabs, and body text runs at 12px in `#555555` (inner pages) or `#666666` (home). Hana teal does the orienting work. `#008485` marks inner-page section titles (over a 3px teal rule), the current left-navigation item, and the product-join pills. A lighter `#009591` appears when a main tab is hovered, together with a switch to the bold Noto Sans face. The home carousel pairs a 38px/800 black headline with dark `#333333` pill actions. Type is Noto Sans KR, served from the bank's own domain in five weights.

The CI page names an official typeface ("CI & 하나서체"), but the live portal renders Noto Sans KR. This reference keeps those two facts separate (see §3).

### Primary tasks

- Check balances and history, and move money (조회 / 이체)
- Pay utility and public bills (공과금)
- Check rates and handle foreign exchange (외환)
- Find a deposit, savings or loan product by name and compare it (금융상품)
- Read the bank's notices and news

### Iconography

The home quick-action tiles and carousel arrows use image-based icons. The capture records no icon font or catalogue, so no icon token is promoted.

### Imagery & Illustration

The home carousel and quick-action tiles use image fills behind white or black text. Their images, ratios and crops were not captured, and no illustration system is derived.

### Brand Narrative

"하나" means "one", and Hana Bank's portal is organized as one place for everyday banking, foreign exchange and products. That proposition runs through the five-tab navigation and the multilingual EasyOne entry points. The KEB label still visible on the bank's own CI and counselling pages records its combination with Korea Exchange Bank, while the site's current titles use "하나은행" alone. The bank sits inside Hana Financial Group, whose affiliates its footer links as one family.

The bank's introduction pages ("연혁 및 조직", "CI & 하나서체", "비전과 미션") hold its history, identity and mission. Their bodies were not readable for this reference, so dated milestones and the typeface's details are left out rather than taken from memory.

### Principles

1. **Teal orients.** `#008485` marks location (the current item, section titles) and entry into products; it is not decoration.
2. **Hover is colour plus weight.** Main tabs gain `#009591` and the bold face together.
3. **Density with order.** Small base text is organized by a strict header, left-navigation and content structure.
4. **Keep domains separate.** The group holding site and the bank's portal are different evidence domains.

### Personas

First-party navigation addresses these customer groups; no named personas are invented:

- **Everyday banking customers:** inquiry, transfer and bill payment.
- **Foreign-exchange customers:** the 외환 tab.
- **Product shoppers:** the product finder and product lists.
- **Foreign-language customers:** the English, Japanese, Vietnamese and Chinese EasyOne pages.
- **Business and pension customers:** the portal links separate business (`biz.kebhana.com`) and pension sites.

## Colors

### Color & Typography

#### Color tokens

- `#008485`: Hana teal. It carries the inner-page section title and rule, the current left-navigation link, the left-navigation hover, the product-join pill fill and the teal outline link. It has 111 property hits in the bundle.
- `#009591`: main-navigation hover text, recorded on all three pages (60 hits).
- `#ffffff`: canvas, main-navigation tab fill, footer selector fill, and outline-button fill.
- `#000000`: main-navigation labels, the home carousel headline and inner-page titles.
- `#555555`: inner-page body text, footer selector text and small outline buttons.
- `#666666`: home body text.
- `#333333`: news headlines and footer links; also the carousel pill fill.
- `#637079`: left-navigation links at rest.
- `#dddddd`: footer selector border and news-search border.
- `#f3f3f3`: the footer's grey button fill.
- Component-local, recorded in §4 and not promoted to palette roles:
  - `#16959c`: product-join pill border
  - `#c1c1c1`: small outline button border
  - `#a5d3d4`: teal outline link border
  - `#028389` and `#7cc2c2`: news-search button text and border
  - `#6e6e6e` and `#008486` with `#7fc0c2`: pagination text, and the current page's text and border

#### Typography evidence classes

- **Live computed use, from site-hosted assets:**
  - NotoSans_Regular: 369 uses across body, buttons, `h1`, `h3`, lists and menus.
  - NotoSans_Medium: 51 uses across `h2`, `h3` and text.
  - NotoSans_Bold: 36 uses.
  - NotoSans_Dl: 16 uses.
  - NotoSans_Light: 2 uses.
  - All five load from `https://www.kebhana.com/resource/simple/fonts/` as `NotoSansKR-{Regular,Medium,Bold,DemiLight,Light}.{eot,woff}`. The family names are the site's own aliases for Noto Sans KR files, and the machine tokens keep those computed names.
- **Unresolved system family:** `돋움` / `dotum` (Dotum) is the declared body default and the family of some inputs, buttons and pagination (71 uses). It did not resolve in the capture environment. It is recorded as declared, never substituted, and it is not a token.
- **Declared-only asset:** `Roboto-Bold` has two site-hosted sources (`Roboto-Bold.eot`, `.woff`) and zero visible uses.
- **Official typeface, named but unresolved:** the bank's PR site lists a "CI & 하나서체" section, titled "KEB HANA CI | 하나은행소개". Its body did not render for a non-browser fetch, so this reference records only that the bank names an official typeface. Its design, specimen, distribution and licence are not established, and the live portal does not render it.
- **Licence:** the Noto Sans KR licence was not opened in this session and is not claimed here.

## Layout

### Layout & Grid

- **Header:** a utility row of 12px links, then the 70px main navigation. Each tab has 40px horizontal padding and ranges from 112px to 150px wide.
- **Inner pages:** a 260px left navigation with 48px link rows sits beside the content, which opens with a 38px title (`h3`). The left-navigation section title (`h2`) uses 64px top padding over a 3px `#008485` rule.
- **Home:** a 760 × 440 carousel slide area, quick-action tiles (158 × 120, 10px radius), and a news block with 14px headlines.
- **Footer:** a segmented three-part site selector (200px × 48px each) and a grey 237px × 48px button.
- **Boundary:** the capture records a 1440px desktop viewport only. No breakpoint or mobile layout was measured.

## Motion & Easing

### Motion

The home carousel exposes stop and view-all controls, which means it moves by itself, but no duration, easing or transition was recorded.

No motion token, duration, easing or reduced-motion behaviour was captured. The carousel's own stop control shows that motion exists, and its timing is not invented here.

## Components

These are static computed-style observations from three public pages, with selector provenance. Hover and pressed values are declared only when both frames hold the same opaque value across siblings. The collector probes the first 24 interactive elements on each page, so controls beyond that set have rest values only. Focus values are never taken from the bundle.

### Main navigation tab

**Default** (`gnb-tab`)
- Background: `#ffffff`
- Text: `#000000`, 18px / 400 NotoSans_Regular, −0.5px, in a 70px line box
- Padding: `0px 40px`
- Height: 70px
- Hover: `#009591` text switching to NotoSans_Bold. All five tabs record it on all three pages, and pressed is identical.

### Left navigation link

**Default** (`lnb-link`)
- Background: transparent
- Text: `#637079`, 16px / 400 / 30px NotoSans_Regular, −1px
- Padding: `10px 25px 8px 0px`
- Size: 260px × 48px
- Hover: `#008485` text in NotoSans_Medium, on twelve siblings across two pages
- Current item: at rest it records the same `#008485` NotoSans_Medium. `aria-current` was not captured, so this is a described variant, not a declared selected state.

### Carousel action

**Default** (`slide-cta`)
- Background: `#333333`
- Text: `#ffffff`, 14px NotoSans_Regular ("자세히보기")
- Radius: `50px`
- Size: 98px × 40px
- Hover and pressed: no change recorded

### Footer controls

- **Site selector** (`footer-site-select`): `#ffffff` fill, `#555555` 12px text, 1px `#dddddd` border, 200px × 48px, `0px 16px` padding. It is built from three joined buttons, with 10px outer corners only.
- **Grey button** (`hanaworld-button`): `#f3f3f3` fill, `#000000` 14px text, `10px` radius, 237px × 48px.

### Product page controls

- **Join pill** (`product-join-pill`): `#008485` fill, 1px `#16959c` border, `20px` radius, `0px 20px` padding, 94px × 33px. The label colour is not claimed, because the link computes `#555555` and no separate label node was sampled.
- **Small outline button** (`outline-small-button`): `#ffffff` fill, `#555555` 12px text, 1px `#c1c1c1` border, `3px` radius, `0px 13px` padding, 28px high.

### News page controls

- **Teal outline link** (`teal-outline-button`): `#ffffff` fill, `#008485` 14px / 700 text, 1px `#a5d3d4` border, 146px × 38px.
- **Search field** (`news-search-input`): transparent, `#555555` 13.33px text, 1px `#dddddd` border, 280px × 31px. Nothing was typed into it.
- **Search button** (`news-search-button`): transparent, `#028389` 12px / 700 text, 1px `#7cc2c2` border, 98px × 31px. It was never clicked.
- **Pagination** (`pagination-item`): `#6e6e6e` 14px / 700 text, 1px `#ffffff` border, 27px × 27px. The current page records `#008486` text with a 1px `#7fc0c2` border.
- These news-page controls declare the Dotum family, which was unresolved in the capture. Their size and weight are recorded; the family is not.

---

**Verified:** 2026-09-30
**Tier 1 sources:** `https://www.kebhana.com/`, `https://www.kebhana.com/cont/mall/mall08/mall0805/index.jsp?_menuNo=62608`, `https://www.kebhana.com/cont/news/news01/index.jsp` (public banking portal, computed styles); `http://pr.kebhana.com/contents/kor/index.jsp`, `http://pr.kebhana.com/contents/kor/about/corporate/index.jsp`, `http://pr.kebhana.com/contents/kor/about/history/index.jsp` (first-party bank introduction; titles only)
**Tier 2 sources:** not attempted in this session (see `.verification.md`)
**Conflicts unresolved:** none

The June 2026 snapshot's values are superseded wherever this capture contradicts them or cannot support them. Removed:
- the Hana Financial Group site's tokens (`#009178`, Pretendard Variable, the 27px pill buttons), which come from a separate domain
- the unobserved `#00a39f` "mint" primary, the `#2dc396` card border, and the `#f8f8f8`, `#f2f9f9` and `#dbdbdb` values (zero occurrences in the 2026-09-30 bundle)
- the card shadow
- the teal feature card, the grey card and the teal badge
- the invented state, motion, breakpoint and persona material

### States

- **Observed:**
  - main-tab hover (`#009591`, bold)
  - left-navigation hover (`#008485`, medium)
- **Described variants:** the current left-navigation item and the current pagination page (not declared as selected states).
- **Not captured:** focus, error, loading, empty, success and disabled styling for brand controls.

## Do's and Don'ts

### Do

- Use `#008485` for location and product entry, and `#009591` with the bold face for main-tab hover.
- Keep the 70px main navigation with 18px black labels on white.
- Use the site's Noto Sans KR faces as captured, and record Dotum only as a declared family.
- Keep selector provenance from §4 when reusing a component.

### Don't

- Reintroduce `#00a39f`, `#2dc396` or the group site's `#009178` and Pretendard pills as Hana Bank tokens.
- Render Inter or a system font as though it were 하나서체 or Dotum.
- Invent focus, error, loading or motion values.
- Treat the group holding site's styles as the bank's portal styles.

---

**Verified:** 2026-09-30
**Pipeline:** omd:add-reference UPDATE (deterministic capture + first-party context reconcile)
**Catalog position:** KR · fintech · retail bank

## Voice & Tone

### Content & Voice

The portal speaks in short, functional category nouns (조회, 이체, 공과금, 외환, 금융상품) and calm action labels ("자세히보기"). Its product and news areas are information-first, and promotion is carried by imagery rather than urgent copy.

**Voice adjectives:** functional · calm · institutional

| Context | Observed wording (served HTML, 2026-09-30) |
|---|---|
| Main navigation | "조회", "이체", "공과금", "외환", "금융상품" |
| Carousel action | "자세히보기" |
| Page titles | "상품명으로 찾기 < 상품찾기 & 가입 < 상품 < 하나은행", "새소식(리스트) < 새소식/이벤트 < 하나은행" |

| Do | Don't |
|---|---|
| Name banking tasks with plain nouns. | Add hard-sell urgency to product entry points. |
| Keep action labels calm ("자세히보기"). | Use casual slang on institutional surfaces. |
| Let the page title state the path (category < section < bank). | Hide where the user is in the portal. |

## Governance

### Accessibility

- Main-navigation labels pair `#000000` on `#ffffff`, and body text pairs `#555555` or `#666666` on white at 12px. The small base size should be reviewed against current legibility practice before reuse.
- The hover change to `#009591` bold is a colour-and-weight cue. No focus-visible styling was taken from the capture, so implementations must supply one.
- Dotum is declared but was unavailable in the capture environment, so do not assume it renders.

### Known Gaps

- **Contrast, `lnb-link`.** Text `#637079` on `#00000000` measures 4.12:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `news-search-input`.** Text `#555555` on `#00000000` measures 2.82:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `pagination-item`.** Text `#6e6e6e` on `#00000000` measures 4.12:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
