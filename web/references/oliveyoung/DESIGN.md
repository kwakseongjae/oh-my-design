---
name: Olive Young
colors:
  storefront-canvas: '#ffffff'
  storefront-ink: '#131518'
  storefront-body: '#666666'
  storefront-muted: '#888888'
  storefront-line: '#ebebeb'
  storefront-current: '#2f3030'
  corporate-brand-green: '#82dc28'
typography:
  storefront-body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20
    letterSpacing: '-0.56px'
    use: Storefront home body and navigation text
  corporate-display:
    fontSize: 25.2px
    fontWeight: 700
    lineHeight: 35.28
    letterSpacing: 0px
    use: Corporate home display copy
rounded:
  outline-control: 4px
  search-field: 5px
  pagination-current: 12px
spacing:
  search-x: 14
  search-end: 10
components:
  pagination-current:
    type: tab
    backgroundColor: '#2f3030'
    textColor: '#ffffff'
    rounded: 12px
    typography: 14px/700/Montserrat
    active: Current carousel pagination item; selected markup observed
    use: 24px current item in storefront home carousel pagination
  gnb-category-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px
    height: 44px
    typography: 16px / 700 / 44px Montserrat
    hover: 'fg #e02020'
    pressed: 'fg #e02020'
    states: rest, hover, and pressed sampled on nine links that all record the same values; a focus frame was also recorded, but it followed a mouse press and is not a keyboard :focus-visible measurement, so no focus value is declared
    use: Storefront home main navigation link at home::[data-omd-capture="14"] through "22"
  utility-link:
    type: tab
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 0px
    height: 14px
    typography: 12px / 400 / 30px Montserrat
    states: rest captured; no pointer-state frame was sampled for these links
    use: Storefront header utility link at home::[data-omd-capture="0"]; "1" through "6" record the same values
  category-menu-trigger:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px solid #dddddd (left and right edges only)'
    rounded: 0px
    padding: 0px 0px 0px 27px
    height: 44px
    typography: 15px / 700 / 44px Montserrat
    states: rest captured; no pointer-state frame was sampled for it
    use: Storefront category-menu trigger at home::[data-omd-capture="13"], at the start of the main navigation row
  category-menu-link:
    type: tab
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 0px
    padding: 0px 23px
    height: 31px
    typography: 14px / 700 / 31px Montserrat
    states: rest captured on twelve links; only one link was state-sampled, and its hover and pressed frames add a translucent black fill, rgba(0, 0, 0, 0.8), that no sibling sample or rest colour in the capture confirms, so no state value is declared; no focus frame was sampled
    use: Storefront category list link (main_menu) at home::[data-omd-capture="23"] through "34"; the white text implies a backdrop fill that was not part of the sampled elements and is not claimed
  search-field:
    type: input
    backgroundColor: transparent
    textColor: '#131518'
    rounded: 5px
    padding: 0px 10px 0px 14px
    height: 38px
    typography: 14px / 400 / 20px
    states: rest captured; no focus, typed, error, autocomplete, or pointer-state frame was sampled
    use: Storefront header search input (header_search_input) at home::[data-omd-capture="8"]; its computed family is system-resolved Arial, not an Olive Young font asset, and the input itself has no fill or border, so any visible field frame belongs to a wrapper the capture did not sample
  wishlist-control:
    type: button
    backgroundColor: '#ffffff'
    border: '1px solid #ebebeb'
    rounded: 0px
    size: 40px x 40px
    states: rest captured on 29 product-grid controls; no pointer-state or active-icon frame was sampled
    use: Storefront product-grid wishlist control (btn_zzim jeem) at home::[data-omd-capture="85"]; its glyph is not text (font-size 0px), so no label colour or type style is claimed
  product-thumbnail:
    type: card
    backgroundColor: '#ffffff'
    rounded: 0px
    size: 215px x 215px
    states: rest captured; no pointer-state frame was sampled
    use: 'Storefront product-grid thumbnail link (prd_thumb) at home::[data-omd-capture="83"]; its computed #666666 14px / 400 text is the inherited body style, not a label style'
  outline-control:
    type: button
    backgroundColor: transparent
    border: '1px solid #dddddd'
    rounded: 4px
    size: 335px x 40px
    states: rest captured; no pointer-state frame was sampled
    use: Storefront outline button (.btn) at home::[data-omd-capture="66"]; "79" records the same values. Its computed white text on a transparent fill cannot be the visible label colour, so no foreground is claimed
fonts:
  roles:
    storefront: Montserrat
    corporate: CJONLYONENew
---

# Olive Young — Design Reference

## Overview

### Visual Theme & Atmosphere

Olive Young is the CJ retail platform that grew from Korea’s first Beauty & Health store into an omnichannel beauty-and-wellness business. Its official history describes a move away from the traditional health-supplement drugstore model toward beauty, trend discovery, locally tailored assortments, stores, and digital services; its current mission is to help customers live healthier and more beautiful everyday lives. The supplied 2026 capture shows that this story is expressed very differently by two owned surfaces. The shopping storefront is an information-dense, white and charcoal retail interface dominated by `#666666` body copy, a loaded Montserrat web family, square product controls, and a compact 24px current-page marker. The corporate site is a separate brand-and-company presentation with loaded CJONLYONENew and the observed `#82dc28` brand green. These are not one interchangeable UI system: corporate identity context must not be used to fill gaps in the storefront, and the storefront capture does not establish an authenticated app, checkout, mobile, or documentation system.

- **Storefront evidence:** a white canvas, low-radius controls, black-to-gray text hierarchy, and carousel/product-grid mechanics on the public home page.
- **Corporate evidence:** the green aligns with the official brand-resources description of Olive Green, while corporate typography resolves to CJONLYONENew.
- **Current brand evolution:** Olive Young’s official 2025 newsroom announcement says its renewed wordmark was designed for clearer visibility across online and offline global expansion; that is identity context, not a storefront component token.
- **Measured pointer state:** the storefront's main navigation links turn their text from `#000000` to red `#e02020` in both the hover and pressed frames; no other storefront control shows a settled pointer-state change in the capture.

### Primary tasks

- Search the storefront for a specific beauty product
- Save a product to your wishlist from the product grid
- Compare products and services across a dense catalog before choosing
- Order from the official online store and get same-day delivery

### Brand Narrative

Olive Young’s official history places its beginning in 1999 as Korea’s first Beauty & Health store and describes a category shift from conventional supplement-led drugstores toward beauty, trend-led products, and locally tailored store designs and assortments. The company now presents itself as a lifestyle platform where customers encounter trends, not merely as a cosmetics shelf. Its official history records an independent official online store in 2017, same-day delivery in 2018, a 2019 BI renewal, and a 2025 logo renewal oriented toward global and omnichannel visibility. These are brand and business facts; they do not prove an unobserved application design system.

### Principles

1. **Healthy beauty joins beauty and wellbeing.** The official brand essence is Healthy Beauty. *UI implication:* frame choices as practical care or discovery, not as unsupported transformation claims.
2. **Discovery belongs in everyday life.** The official core value names New Discoveries Everyday. *UI implication:* make catalog information scannable enough to compare products and services without forcing a narrative detour.
3. **Omnichannel is a business context, not a copied UI pattern.** Olive Young’s history records online, store, pickup, returns, and same-day service milestones. *UI implication:* preserve service context where it is observed; do not invent cart or fulfilment controls from the corporate story alone.
4. **Global clarity is a current identity objective.** The 2025 official logo-renewal announcement cites visibility and English readability across online and offline environments. *UI implication:* distinguish identity assets from product-interface tokens and keep type/asset licensing explicit.

### Personas

The official sources describe customers generally rather than publishing research-backed personas. The following are non-fictional stakeholder groups derived from the documented service model, not demographic profiles or behavioral claims.

- **Beauty & Health customers:** people the official mission says Olive Young aims to inspire and empower toward healthier, more beautiful everyday lives.
- **Local-store and online shoppers:** customers served through the documented store, official-online-store, pickup, return, and same-day-delivery milestones.
- **Brand and business partners:** stakeholders named in the company’s mission and sustainability materials through partnership and mutual-growth commitments.

## Colors

### Observed storefront roles

- **Storefront canvas** (`#ffffff`): repeated page, button, and product-control surface on `storefront-home`.
- **Storefront ink** (`#131518`): observed search-field text on `home::[data-omd-capture="8"]`; it is not a universal corporate text token.
- **Storefront body** (`#666666`): dominant body and navigation color on the public home capture.
- **Storefront muted** (`#888888`): inactive carousel pagination-button text.
- **Storefront line** (`#ebebeb`): 1px border on the repeated `btn_zzim jeem` wishlist control.
- **Storefront current** (`#2f3030`): current 24px carousel-pagination item.

### Observed corporate-brand role

- **Corporate brand green** (`#82dc28`): observed on the corporate home capture and also named Olive Green in Olive Young’s official Brand Resources. Its official counterpart is Coral Orange `#ff7878`, but Coral Orange was not a computed token in the supplied surfaces and is intentionally not added to `tokens.colors`.

The source bundle also contains isolated browser/vendor-like blues, reds, and other local values. Without a repeated role or a first-party product token specification, they are not promoted to a semantic palette.

### Measured state and component colours

- **Navigation hover red** (`#e02020`): the nine storefront main navigation links change their text from `#000000` to `#e02020` in both the hover and pressed frames (`home::[data-omd-capture="14"]` through `"22"`, captured 2026-07-13). It is a state value on those links, not a storefront palette role, so it is not added to `tokens.colors`.
- **Header utility text** (`#333333`): the seven header utility links at the top of the storefront. It is a component value, not a palette role.

## Typography

### Evidence classes

- **Live storefront use — Montserrat.** `Montserrat` is loaded with high confidence, has 528 visible uses across storefront body, list, menu, tab, button, and heading roles, and is corroborated by six Olive Young-hosted WOFF/WOFF2 sources. The observed home stack begins `Montserrat, -apple-system, NotoSansCJKkr, AppleSDGothicNeo, Roboto, …`; only the loaded Montserrat family is represented as the storefront family token.
- **Live corporate use — CJONLYONENew.** `CJONLYONENew` is loaded with high confidence on the corporate home (176 visible uses) and is backed by six `corp.oliveyoung.com` WOFF2 assets. The captured corporate stack lists it first, before Pretendard and Korean system fallbacks. It is a corporate-surface family token, not evidence of storefront use.
- **Loaded but not promoted.** `NotoSansCJKkr` has only three recorded visible uses on the storefront and stays a loaded fallback observation rather than a general primary family token. `Arial` is system-resolved in the one captured search input and is not an Olive Young font asset.
- **Declared-only assets.** CJONLYONENewJP, CJONLYONENewOrigin, Dovemayo-Medium, Nanum Myeongjo, Noto Sans KR, OY Greta Sans, Pretendard, and PretendardJP have declared `@font-face` sources but zero recorded visible use in this bundle. They remain declared-only; no specimen or token substitutes them.
- **Licence boundary.** First-party pages and the supplied bundle establish delivery of the corporate and storefront webfont files, but this update found no first-party standalone licence granting downstream reuse of CJONLYONENew or Montserrat assets. Asset delivery is not a redistribution licence.

### Measured styles

| Scope | Family | Size | Weight | Line height | Tracking | Evidence boundary |
|---|---|---:|---:|---:|---:|---|
| Storefront body/navigation | Montserrat | 14px | 400 | 20px | -0.56px | repeated `home` text/list/menu/tab samples |
| Storefront carousel pagination | Montserrat | 14px | 700 | 24px | normal | `home::[data-omd-capture="174"]` and `"175"` |
| Corporate display copy | CJONLYONENew | 25.2px | 700 | 35.28px | normal | repeated `surface-2` body samples |

## Layout

### Layout & Spacing

- The supplied storefront capture is 1440×900 and records a 294px × 38px global search field with `0px 10px 0px 14px` padding.
- Captured carousel pagination is 24px × 24px. The repeated wishlist control is 40px × 40px.
- The collector’s spacing frequencies include 2, 5, 10, 12, 18, 22, 23, 24, 30, 35, 40, 45, 51, 60, and 80px. This is a capture-frequency record, not a published spacing scale.
- No authenticated product layout, search-results layout, purchase funnel, responsive breakpoint, or mobile reflow is established by the two supplied desktop surfaces.

## Elevation & Depth

The storefront carousel pagination, wishlist controls, search field, and outline control report `box-shadow: none`. The corporate `btn_top` is a distinct corporate-surface exception with `0px 10px 15px rgba(0, 0, 0, 0.1)`; it is not promoted to a shared elevation token.

## Components

All components below retain their captured surface and selector provenance. The bundle reports `interactionCount: 0`, which counts dialog, menu, and tab expansions only: no dialog, menu, toast, cart, or checkout variant was expanded. It does hold pointer-state frames (`<selector>::state-hover|pressed|focus`) for 13 storefront links and 10 corporate links. The one settled storefront change, the main navigation hover and pressed text colour, is declared below; the other frames are listed in `.verification.md` as sampled but not declared. No focus value is declared, because the collector's focus frames follow a mouse press and are not keyboard `:focus-visible` measurements. No disabled variant was captured. The selected/current carousel relationship is static markup observed in the capture, not an interaction transition contract. (Corrected 2026-09-29: the July text read `interactionCount: 0` as the absence of any pointer-state sample.)

### Storefront carousel pagination

**Current item as captured**
- Background: `#2F3030`
- Text: `#FFFFFF`
- Border: 0
- Radius: `12px`
- Font: `14px / 700 / Montserrat`
- Active: current 24px carousel item; evidence `home::[data-omd-capture="174"]`, with selected carousel markup at `home::#slick-slide10`
- Use: public storefront-home carousel pagination

**Other item as captured**
- Background: transparent
- Text: `#888888`
- Border: 0
- Radius: `0px`
- Font: `14px / 700 / Montserrat`
- Use: sibling 24px carousel-pagination button; evidence `home::[data-omd-capture="175"]`

### Storefront wishlist control

**Default visual shell**
- Background: `#FFFFFF`
- Border: `1px solid #EBEBEB`
- Radius: `0px`
- Size: `40px × 40px`
- Use: repeated product-grid `btn_zzim jeem` control on storefront-home; evidence `home::[data-omd-capture="85"]` (29 occurrences)

The control’s visible glyph is not text (`font-size: 0px` in the representative sample); its active/selected icon treatment was not captured and is intentionally omitted.

### Storefront search field

**Default visual shell**
- Text: `#131518`
- Radius: `5px`
- Padding: `0px 10px 0px 14px`
- Font: `14px / 400 / Arial` (system-resolved)
- Use: `header_search_input` on storefront-home; evidence `home::[data-omd-capture="8"]`

No focused, typed, error, disabled, or autocomplete state was supplied.

### Storefront outline control

**Default visual shell**
- Border: `1px solid #DDDDDD`
- Radius: `4px`
- Font: `13.3333px / 700 / Montserrat`
- Use: `home::[data-omd-capture="66"]`, class `btn`, 335px × 40px

The sample’s transparent background and white computed foreground cannot identify its composited visual context, so no foreground or reusable button-color token is asserted.

### Storefront main navigation link

**Rest / hover / pressed**
- Background: transparent
- Text: `#000000`
- Radius: `0px`
- Padding: `0px`
- Height: `44px`
- Font: `16px / 700 / 44px Montserrat`, tracking `-0.64px`
- Hover: text `#e02020`
- Pressed: text `#e02020`
- Focus: a focus frame also shows `#e02020`, but the collector records it after a mouse hover and press, so it is not a keyboard `:focus-visible` measurement and no focus value is declared.
- Use: nine main navigation links, `home::[data-omd-capture="14"]` through `"22"`, which all record the same rest and state values.

### Storefront header utility link

**Rest**
- Background: transparent
- Text: `#333333`
- Font: `12px / 400 / 30px Montserrat`, tracking `-0.07px`
- Height: `14px` inline box
- States: rest only; no pointer-state frame was sampled for these links.
- Use: seven header utility links, `home::[data-omd-capture="0"]` through `"6"`.

### Storefront category-menu trigger

**Rest**
- Background: transparent
- Text: `#000000`
- Border: `1px solid #dddddd` on the left and right edges only
- Padding: `0px 0px 0px 27px`
- Height: `44px`
- Font: `15px / 700 / 44px Montserrat`, tracking `-0.56px`
- States: rest only; no pointer-state frame was sampled for it.
- Use: `home::[data-omd-capture="13"]`, 170px wide, at the start of the main navigation row.

### Storefront category list link

**Rest**
- Background: transparent
- Text: `#ffffff`
- Padding: `0px 23px`
- Height: `31px`
- Font: `14px / 700 / 31px Montserrat`, tracking `-0.56px`
- States: only `home::[data-omd-capture="23"]` was state-sampled. Its hover and pressed frames add a translucent black fill, `rgba(0, 0, 0, 0.8)`, but no sibling sample and no rest colour in the capture confirms that value as a settled state, so none is declared. No focus frame was sampled.
- Use: twelve category links (`main_menu`), `home::[data-omd-capture="23"]` through `"34"`, each 170px × 31px. The white text implies a backdrop fill that was not part of the sampled elements and is not claimed.

### Storefront product thumbnail

**Rest**
- Background: `#ffffff`
- Radius: `0px`
- Size: `215px × 215px`
- States: rest only; no pointer-state frame was sampled.
- Use: product-grid thumbnail link (`prd_thumb`) at `home::[data-omd-capture="83"]` and its siblings. Its computed `#666666` 14px / 400 text is the inherited body style, not a label style, so no label treatment is claimed.

### Corporate skip link

**Default visual shell**
- Background: `#0000FF`
- Text: `#FFFFFF`
- Radius: `6px`
- Font: `13.5px / 400 / CJONLYONENew`
- Use: off-canvas `btn_skip` accessibility link on corporate-home; evidence `surface-2::[data-omd-capture="0"]`

This is corporate accessibility chrome, not storefront evidence or a general Olive Young primary-action token.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.oliveyoung.co.kr/store/main/main.do?oy=0` (public storefront), `https://corp.oliveyoung.com/ko` (public corporate surface), `https://corp.oliveyoung.com/en/company/brand` (official brand resources), `https://corp.oliveyoung.com/en/company/history` (official history), `https://corp.oliveyoung.com/en/company/main` (official mission), `https://corp.oliveyoung.com/en/company/vision` (official vision)
**Tier 2 sources:** `https://getdesign.md/oliveyoung` (attempted through built-in web open; internal error, no usable record), `https://styles.refero.design/?q=oliveyoung` (attempted through built-in web open; internal error, no usable record)
**Conflicts unresolved:** none

The previous legacy snapshot’s unrecaptured flag palette, inferred product states, product-detail migration account, cart/checkout claims, motion timings, and uncorroborated component variants were removed rather than carried forward.

### States & Motion

- **Observed current carousel item:** `#2f3030`, white text, 12px radius, 24px square.
- **Observed other carousel item:** transparent, `#888888` text, 0px radius, 24px square.
- **Observed selected carousel markup:** `home::#slick-slide10` carries `aria-selected="true"`; the capture does not record a transition or interaction event.
- **Measured pointer state:** the nine main navigation links (`home::[data-omd-capture="14"]` through `"22"`) change text from `#000000` to `#e02020` in the hover and pressed frames.
- **Sampled, not declared:** focus frames (recorded after a mouse press, so not keyboard `:focus-visible`), one category list link's hover and pressed fill `rgba(0, 0, 0, 0.8)` (a single sample), the header my-menu links' pressed frames (the three siblings disagree), and the corporate frames (browser-default link colours on image links, and a one-unit colour shift). Details are in `.verification.md`.
- **Unobserved:** loading, empty, error, success, form validation, disabled, cart feedback, menu, dialog, toast, and mobile states. (Corrected 2026-09-29: the July text also listed hover and pressed as unobserved.)
- **Motion:** the bundle contains Slick and Swiper class names, but no captured duration, easing, or interaction sequence. No motion token is asserted.

## Do's and Don'ts

### Do

- Keep storefront implementation claims bounded to the observed home surface and its measured black-to-gray hierarchy.
- Treat `#82dc28` as corporate brand evidence unless a storefront surface independently establishes that role.
- Preserve the source-domain boundary between Montserrat storefront use and CJONLYONENew corporate use.
- Keep current carousel pagination compact: the captured current item is `#2f3030` with white text and a 12px radius.
- Label declared-only families as unavailable rather than rendering another family under their names.
- Use `#e02020` only as the hover and pressed text colour of the main navigation links, where it was measured.

### Don't

- Do not turn the corporate skip link, top button, or Swiper chrome into storefront component tokens.
- Do not infer cart, checkout, form-error, focus, or motion behavior from this bundle, and do not extend the navigation hover red to other controls: the bundle expanded no dialog, menu, or tab, and the only settled pointer-state change it holds is on the main navigation links.
- Do not promote OY Greta Sans, Pretendard, Noto Sans KR, or other zero-use declarations to the UI family.
- Do not use official logo colors as a storefront color system without a matching storefront observation.

## Voice & Tone

Olive Young’s official company language is optimistic, practical, and discovery-oriented: its mission centers a healthier and more beautiful everyday life, while the vision names Healthy Beauty and New Discoveries Everyday. The public storefront capture supports short functional labels and dense retail scanning, but it does not establish a complete product microcopy system.

| Do | Don't |
|---|---|
| Connect a beauty or wellness action to a concrete everyday outcome. | Make unverifiable efficacy, delivery, or price promises. |
| Describe discovery as a useful choice or service. | Replace a product fact with a vague lifestyle superlative. |
| Keep commerce labels short and legible in a dense catalog. | Treat the corporate slogan as a verbatim checkout or error-copy pattern. |

**Official wording samples**
- *“Healthy Beauty”* — official brand essence.
- *“New Discoveries Everyday”* — official core value.
- *“ALL LIVE BETTER”* — official brand slogan.

## Agent Prompt Guide

Use this reference for a factual, dense Korean beauty-retail storefront moment: white ground, dark-gray reading hierarchy, square product-grid controls, Montserrat where the licensed/available target actually supplies it, and a compact dark current-page marker. For corporate storytelling, keep CJONLYONENew and Olive Green in the separate corporate lane. Do not present a system fallback, declared-only face, logo color, or unobserved cart interaction as an Olive Young storefront fact.

## Governance

### Accessibility & Evidence Limits

- The corporate surface includes an off-canvas skip link, but the capture does not document keyboard traversal, focus-visible styling, or screen-reader behavior.
- The storefront current carousel marker is 24px square and the captured wishlist shell is 40px square. This reference records dimensions only; it is not a touch-target or contrast conformance audit.
- `#666666` body text, `#888888` muted pagination text, and white text on `#2f3030` are observed combinations. Each target implementation still needs its own contrast and state testing.
- No design-system documentation, authenticated application, or mobile surface was supplied. Those domains remain unresolved rather than being filled from corporate marketing or legacy notes.

### References & Boundaries

#### Tier 1 live evidence

- `https://www.oliveyoung.co.kr/store/main/main.do?oy=0` — public storefront: 532 captured elements, Montserrat loaded/high with 528 uses, the measured search, wishlist, outline-control, carousel-pagination, navigation, utility-link, and product-thumbnail samples, and 32 pointer-state frames for 13 links.
- `https://corp.oliveyoung.com/ko` — public corporate surface: 176 captured elements, CJONLYONENew loaded/high with 176 uses, corporate skip-link and top-button samples, and declared-only corporate font assets.

#### First-party context, brand, and font boundaries

- `https://corp.oliveyoung.com/en/company/brand` — official brand name story, logo colors, 13° symbol meaning, and downloadable logo asset; it does not publish a storefront token specification.
- `https://corp.oliveyoung.com/en/company/history` — official company/history and omnichannel milestones; it does not supply component values.
- `https://corp.oliveyoung.com/en/company/main` and `/vision` — official mission, Healthy Beauty, New Discoveries Everyday, and ALL LIVE BETTER language; they do not establish transactional UI copy or states.
- Olive Young-hosted WOFF/WOFF2 delivery URLs in the supplied collector corroborate the loaded families. No first-party standalone downstream-reuse licence was located in this update, so a target project must not assume permission to copy those font assets.

#### Tier 2 cross-check boundary

Both required catalog checks were attempted through built-in web open on 2026-07-13. `getdesign.md/oliveyoung` and Refero’s Olive Young query each returned an internal error, so neither contributed a token, component, font, or conflict resolution.

### Known Gaps

- **Contrast, `gnb-category-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `utility-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `category-menu-trigger`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-field`.** Text `#131518` on `#00000000` measures 1.15:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
