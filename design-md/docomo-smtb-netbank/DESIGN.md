---
name: DOCOMO SMTB Net Bank
colors:
  primary: '#cc0033'
  primary-hover: '#9c0c0c'
  link: '#196097'
  foreground: '#303c48'
  navigation-foreground: '#3b3939'
  muted-foreground: '#575757'
  canvas: '#ffffff'
  surface: '#f5f5f5'
  border: '#d4d4d4'
  details-hover: '#f3f8ff'
  catalog-section: '#e7eef3'
  onboarding-section: '#e4ecf2'
  benefit-card-border: '#e6ecf0'
  promotion-panel: '#bb002f'
typography:
  navigation:
    fontSize: 14px
    fontWeight: 400
    use: Measured desktop campaign navigation; live-loaded Noto Sans JP Medium, registered with normal weight.
  account-action:
    fontSize: 16px
    fontWeight: 600
    use: Measured main account-opening link; family resolution remains outside the machine token.
  secondary-action:
    fontSize: 14px
    fontWeight: 700
    use: Measured Smart Program outline link.
  search-input:
    fontSize: 16px
    fontWeight: 400
    use: Measured site-search input; geometry retained although its states are browser-only.
rounded:
  none: 0px
  search: 5px
  outline-action: 21px
  catalog-action: 23px
  account-action: 28px
components:
  account-cta:
    type: button
    backgroundColor: '#cc0033'
    textColor: '#ffffff'
    rounded: 28px
    height: 53.7px
    padding: 18px
    typography: 16px / 600
    hover: '#9c0c0c'
    pressed: '#9c0c0c'
    use: 'Link: 最短5分！アプリで口座開設※, a.dngnli__btn_m[href=''/contents/account-2/'']; 350px wide in the account-opening section. Hover and pointer press change the fill; the label stays white.'
  details-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#196097'
    border: '1px solid #196097'
    rounded: 21px
    height: 43.5px
    padding: 12px 24px
    typography: 14px / 700
    hover: '#f3f8ff'
    pressed: '#f3f8ff'
    use: 'Link: 詳しくみる to /contents/lineup/smartprogram/, 120px wide. The white fill becomes pale blue; blue text and border stay unchanged.'
  campaign-nav:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#3b3939'
    rounded: 0px
    height: 44px
    padding: 13px 10px 11px
    typography: 14px / 400
    hover: 'border-bottom: 4px solid #cc0033'
    pressed: 'border-bottom: 4px solid #cc0033'
    use: 'Link: キャンペーン in desktop nav, 236.7px wide. At rest its bottom border is 4px solid #ffffff; hover and pointer press replace that border with red.'
  catalog-button:
    type: button
    backgroundColor: '#196097'
    textColor: '#ffffff'
    rounded: 23px
    height: 46px
    padding: 11px 35px
    typography: 14px / 400
    hover: 'text-decoration: underline solid #ffffff'
    pressed: 'text-decoration: underline solid #ffffff'
    use: 'Link: 一覧からさがす to /contents/lineup/, 200px wide on the white catalog panel. The label gains a white underline; fill and geometry stay unchanged.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    navigation: Noto Sans JP Medium
---

# Design System Inspiration of SBI Sumishin Net Bank (DOCOMO SMTB Net Bank)

## Overview

### Visual Theme & Atmosphere

SBI Sumishin Net Bank now operates as **DOCOMO SMTB Net Bank**. Its individual banking service became **ドコモの銀行** on 3 August 2026; the bank's own announcement describes a more familiar service that makes its connection to the Docomo group easier to understand. App names, icons and web marks form part of the announced transition. BaaS partner services and corporate services retain NEOBANK. [Official brand announcement](https://www.netbk.co.jp/contents/company/press/2026/0709_006011.html)

The live consumer homepage expresses this through a red wordmark, broad red announcement panels, pale blue-grey sections, white benefit cards and small explanatory illustrations. Red `#cc0033` carries the account-opening action; blue `#196097` carries utility links and the product-catalog action. The combination is distinctive: the new consumer identity and the blue banking interface coexist on the same page. This is a reading of the captured page, not a published design principle.

The page leads from an app illustration and everyday banking benefits into security, account-opening instructions, questions and product discovery. A fixed bottom bar repeats the red account-opening link. The measured homepage is the Japanese surface at `netbk.co.jp/contents/`, with HTML language `ja`.

### Brand Narrative

The company's profile dates its establishment to June 1986, while its history records a banking licence and the start of banking operations in September 2007. Keep these two milestones distinct. [Company profile](https://www.netbk.co.jp/contents/company/about/organization/), [history](https://www.netbk.co.jp/contents/company/about/history/)

The current brand change gives individual banking the name ドコモの銀行 and changes the legal bank name to 株式会社ドコモSMTBネット銀行. The bank's change notice also states that existing accounts and banking identifiers continue. Its corporate slogan connects technology with fairness and a society in which prosperity circulates. [Change notice](https://www.netbk.co.jp/contents/lp/ci/), [corporate slogan](https://www.netbk.co.jp/contents/company/about/slogan/)

### Principles

The July 2026 announcement names reassurance and convenience through the Docomo group, finance integrated into everyday life, and service design that combines convenience with safety. These are the company's stated aims. [Official brand announcement](https://www.netbk.co.jp/contents/company/press/2026/0709_006011.html)

The measured page suggests practical implementation choices: distinguish account opening from utility navigation through colour, pair benefit explanations with illustrations, and place explanatory notes beside promotional claims. These are observations of this page rather than additional corporate principles.

### Personas

No research-backed personas were verified.

## Colors

The live census found 174 root custom properties and 175 declared properties. After excluding Swiper's two root properties and one additional declared property, 172 computed properties remain associated with the site's own styles. These include module, shared colour, content and loading-skeleton groups; a value's presence in that list does not establish use by every component.

| Role | Value | Evidence |
|---|---|---|
| Account-opening red | `#cc0033` | `--m-color-bg-button-account-opening: #c03`; measured main CTA |
| Account-opening hover and pressed fill | `#9c0c0c` | Settled states of the main CTA |
| Utility blue | `#196097` | Measured secondary text/border and catalog fill; `--m-color-deep-blue` |
| Foreground | `#303c48` | Most frequent paragraph ink: 27 paragraph entries |
| Navigation foreground | `#3b3939` | Campaign link and its visible label |
| Muted foreground | `#575757` | Rendered text census and `--rur-color-text-secondary` |
| Canvas | `#ffffff` | Measured header, secondary action and card ancestor |
| Search surface | `#f5f5f5` | Measured search input; shared secondary background variable |
| Input border | `#d4d4d4` | Measured 1px search border |
| Secondary action hover and pressed fill | `#f3f8ff` | Settled Smart Program link states |
| Catalog section | `#e7eef3` | Computed ancestor of the catalog link |
| Account-opening section | `#e4ecf2` | Computed ancestor of the main CTA |
| Benefit-card border | `#e6ecf0` | Secondary action's white card ancestor: 0.5px solid |
| Promotion panel | `#bb002f` | Rendered background census; `.dngnli_da` in the linked homepage CSS |

The root module token `--m-color-text-body` resolves to `#1b1b1b`; it differs from the dominant paragraph ink on this consumer page. Use the observed `foreground` for this reference. Likewise, the existing variable named `--primary_color` is blue `#196097`, while the measured account-opening CTA is red. The role names above describe the captured controls rather than renaming the site's variables.

## Typography

**Official product-use evidence:** the company pages opened for this reference do not name an official product typeface.

**Live-loaded evidence:** `document.fonts` reports `Noto Sans JP Medium`, `gf-Oswald`, `gf-Roboto-bold`, `Char`, `Char-Medium`, `Num-Regular`, `Num-Medium` and `Num-Bold`, plus the `icon` glyph font. The measured navigation and search input declare **Noto Sans JP Medium**. Its `@font-face` registration uses weight `normal`, and the campaign label computes to 14px/400. The word “Medium” in the family name is not evidence for a computed 500 weight.

**Official distributed-asset evidence:** this is limited to source references in the site's own CSS; no standalone font distribution or licence page was verified. Linked homepage stylesheets reference Noto Sans JP Medium at `/contents/assets/fonts/NotoSansJP/NotoSansJP-Medium.woff2` with a TTF alternative. The other loaded aliases reference `Oswald/Oswald-Light.ttf`, `Roboto/Roboto-Bold.ttf` and files under `/contents/assets/fonts/Shikumi/`. No independent brand role or redistribution licence is assigned to those other faces. Font files were not downloaded.

**Declared-only evidence:** the body and ordinary button stack begins with `hiragino sans`, followed by Japanese platform faces and `Noto Sans JP`. The census does not list those stack faces as loaded. Other unloaded `@font-face` aliases include `gf-Oswald-light`, `gf-Oswald-regular`, the regular/bold `Noto Sans JP` registrations and several `gf-Roboto` variants. They receive no specimen or machine family token.

**Unresolved:** the exact platform face providing the body and action-link glyphs is not established by the loaded-face census. The `navigation` family token is limited to the verified navigation use. Substitute: none chosen.

| Measured use | Size / CSS weight | Line height |
|---|---|---|
| Main account-opening action | 16px / 600 | 16px |
| Smart Program outline action | 14px / 700 | 17.5px |
| Campaign navigation | 14px / 400 | 19.6px |
| Search input | 16px / 400 | `normal` |
| Catalog action | 14px / 400 | 19.6px |

## Layout

Use broad horizontal sections to separate everyday benefits, security, rewards, onboarding and product discovery. White cards hold the explanations; compact pill actions sit inside them. A two-row desktop header separates the brand and utility links from the full-width product navigation. The fixed account-opening bar supplies a repeated conversion action.

The catalog link's measured white panel sits on `#e7eef3`; the main onboarding CTA sits in a `#e4ecf2` section. Preserve those contextual surfaces when reproducing the controls. The measured action paddings are 18px for the red CTA, 12px 24px for the outline action and 11px 35px for the catalog action; they do not establish a global spacing scale.

### Responsive Behavior

Only 1440 × 1000 desktop was rendered. The opened homepage CSS declares outline-action padding of `12px 16px` at `max-width:559px` and `12px 24px` at `min-width:560px`. This is stylesheet evidence, not a mobile rendering measurement. [Homepage action styles](https://www.netbk.co.jp/contents/assets/css/top_dngnli.css)

## Elevation & Depth

The catalog's white panel has the computed shadow `rgba(0, 0, 0, 0.05) 0px 0px 10px 2px`. Its blue action has no shadow. The main CTA, outline action, navigation link and search input also compute to `box-shadow: none`.

The root header/menu shadow declaration is `0px 6px 10px -6px #00000040`. This is a declared module value; the measured resting navigation ancestor itself had no shadow.

## Motion & Easing

The main account-opening link and Smart Program outline link both compute to `background-color 0.15s ease-out 0s` (150ms). Their colour changes were sampled after 900ms. The campaign navigation, search input, image link and catalog action each compute to `all 0s ease 0s` on the control itself. No broader motion scale is inferred.

---

**Tier 1 sources:** [Live homepage](https://www.netbk.co.jp/) (capture resolves to `/contents/`; survey, loaded fonts, colour census, six controls and screenshots, 2026-11-03); [nonsense-path control](https://www.netbk.co.jp/zz-this-does-not-exist) (curl catch-all redirect to the same 825-byte navigation gate as the root homepage); [homepage module styles](https://www.netbk.co.jp/contents/assets/css/top.css), [homepage styles](https://www.netbk.co.jp/contents/assets/css/style.css), [content styles](https://www.netbk.co.jp/contents/assets/css/top_renewal250701.css), [consumer homepage styles](https://www.netbk.co.jp/contents/assets/css/top_dngnli.css). Narrative sources are linked beside the claims they support. This reference covers the public consumer homepage, not an authenticated banking application.

## Components

These are links styled as actions or navigation, measured with real pointer hover, pointer press and keyboard Tab focus.

| Control | Measured identity | Authored state change |
|---|---|---|
| **最短5分！アプリで口座開設※** | 350 × 53.7px; 28px radius; 18px padding; 16px/600; red `#cc0033`, white `#ffffff`; no border or shadow | Hover and pressed: fill `#9c0c0c`; label remains white |
| **詳しくみる**, Smart Program | 120 × 43.5px; 21px radius; 12px 24px padding; 14px/700; white `#ffffff`, blue `#196097`; 1px blue border; no shadow | Hover and pressed: fill `#f3f8ff`; text and border remain blue |
| **キャンペーン** | 236.7 × 44px; square corners; 13px 10px 11px padding; 14px/400; white fill and `#3b3939` label | Bottom 4px border changes from white `#ffffff` to red `#cc0033` on hover and pressed |
| **一覧からさがす** | 200 × 46px; 23px radius; 11px 35px padding; 14px/400; blue `#196097`, white `#ffffff`; no border or shadow | Hover and pressed add `underline solid rgb(255, 255, 255)` to the label |

The search input is 250 × 30px, with 5px corners, 0px 10px padding, a `#f5f5f5` fill, `#3b3939` text and a 1px `#d4d4d4` border. Hover produced no change within the recorded comparison scope. Pointer press and keyboard focus added only the browser's `auto` outline, so it remains a prose observation rather than a harvested interactive component.

The **はじめてのネット銀行** image link was initially 350 × 19.6px before its lazy image loaded, then 350 × 182.8px in the parked rest and pointer snapshots. It has 0px padding/radius, a transparent background over white and a declared 14px/400 link style in `#196097`. Hover and press add computed blue underlining to the outer anchor. A visible image-pixel change was not established, so this banner is not generalized into a card token.

### States

Hover and pointer press were both confirmed on all six selected controls. The four harvested controls have the authored changes listed in §4. Pressed values matched hover values in this pointer interaction; a separate active-only treatment was not established.

Keyboard Tab reached every control. The five links gained `rgb(0, 95, 204) auto 1px off 1px`; the search input gained `rgb(0, 95, 204) auto 1px off 0px`. These are browser outlines and produce no focus token. The image link's extra height persisted after blur and is excluded from focus styling. Disabled, validation, success and error treatments were not measured.

## Do's and Don'ts

- Use red for the measured account-opening action and blue for the measured utility actions.
- Keep the primary link's actual dark-red hover and the outline link's pale-blue hover.
- Preserve the white label and pill geometry of the primary action.
- Keep the campaign navigation's state on its bottom border.
- Keep the loaded navigation family separate from the unresolved body stack.
- Avoid turning a loading-image size change into a focus animation or a browser `auto` ring into a brand token.

## Voice & Tone

The consumer page uses direct action labels such as “詳しくみる” and “一覧からさがす”, and presents account opening as a short guided sequence. Its headline qualifies its banking benefits with adjacent notes. The official brand announcement emphasizes familiarity and easier understanding; these observed labels are useful examples of that direction. [Official announcement](https://www.netbk.co.jp/contents/company/press/2026/0709_006011.html)

## Agent Prompt Guide

“Build a Japanese consumer-banking landing page with white benefit cards, pale blue-grey sections, dark `#303c48` paragraph ink, a red `#cc0033` account-opening pill and blue `#196097` utility actions. Make the measured 350 × 53.7px primary link use 28px corners, 18px padding and 16px/600 text. Its hover and pressed fill is `#9c0c0c`. Give the 120 × 43.5px secondary link a 1px blue border, 21px corners and a `#f3f8ff` hover fill. Use verified Noto Sans JP Medium only for the navigation role; leave unresolved typography unassigned.”
