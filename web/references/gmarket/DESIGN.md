---
name: Gmarket
colors:
  primary: '#00c400'
  brand: '#00c400'
  error: '#ef2b2a'
  canvas: '#ffffff'
  surface: '#ffffff'
  foreground: '#222222'
  muted: '#757575'
  hairline: '#e0e0e0'
  success: '#00c400'
  accent-smile: '#ffd200'
  accent-stardelivery: '#7130f3'
  accent-connect: '#00c3a0'
  club-navy: '#002041'
  club-blue: '#497cff'
  event-bf: '#3067ff'
  event-bs: '#0051ff'
  event-bsd: '#7b00e7'
  price: '#da120d'
  category-rail: '#0abb26'
  category-trigger: '#10af29'
typography:
  section-compact:
    fontSize: 24px
    fontWeight: 400
    use: Homepage section-title link; computed Gmarket Sans, line-height normal
  body:
    fontSize: 16px
    fontWeight: 400
    use: Product-card anchor and primary navigation; Noto Sans KR is live-loaded, while each selected outer control reports an Apple-first stack
  secondary:
    fontSize: 14px
    fontWeight: 400
    use: Seller-services button; line-height 14px
  utility:
    fontSize: 13.3333px
    fontWeight: 400
    use: Outer search-icon and carousel button styles; normal line-height, not visible-label typography
  meta:
    fontSize: 12px
    fontWeight: 400
    use: Footer notice button; line-height 20px
  category-trigger:
    fontSize: 18px
    fontWeight: 700
    use: All-categories button; line-height 21px
  category-link:
    fontSize: 15px
    fontWeight: 400
    use: Category-rail link; line-height 42px
  search:
    fontSize: 15px
    fontWeight: 400
    use: Search input; computed Gmarket Sans, line-height 29px
rounded:
  none: 0px
  sm: 3px
  banner: 6px
  lg: 20px
  search: 24px
  pill: 27px
spacing:
  carousel-button-padding: 4
  search-button-padding: 5
  thumbnail-gap: 16
  rank-card-gutter: 20
  product-card-gutter: 28
  service-module-gap: 52
  product-row-gap: 20
components:
  category-fashion:
    type: button
    backgroundColor: '#0abb26'
    textColor: '#ffffff'
    rounded: 0px
    height: 44px
    padding: 0px
    typography: 15px / 400
    hover: 'bg #ffffff; fg #0abb26; parent ::before paints a 224px by 1px #e5e5e5 separator'
    pressed: 'bg #ffffff; fg #0abb26; same separator as hover; no additional change versus hover'
    use: 'The 브랜드패션 link (href #) in the left category rail, 224px wide. Focus colours are unresolved because the crop conflicts with the computed snapshot; no focus token is emitted.'
fonts:
  roles:
    sans: Noto Sans KR
    display: Gmarket Sans
---

# Design System Inspiration of Gmarket (지마켓)

## Overview

### Visual Theme & Atmosphere

Gmarket is a South Korean online open marketplace established in 2000. Its current corporate presentation connects the marketplace with Auction, membership rewards, delivery and payment services. The company history records entry into Shinsegae Group in 2021 and a Shinsegae–Alibaba joint venture in 2025; the service presentation now features **꼭 멤버십**, StarDelivery, SmilePay and Smile Money. This is a marketplace whose current expression brings offer discovery, reward amounts and delivery promises into the same shopping surface. [Company and history](https://corp.gmarket.com/), [product terms](https://policy.gmarket.co.kr/terms-policy/buyer-use).

The measured homepage is the Korean edition at `www.gmarket.co.kr/` (`lang="ko"`), with no regional redirect. At 1440×1000 it combines a centered 1200px content area, a green category rail, white shopping modules, near-black paragraph ink and red offer prices. The captured Big Smile Day campaign adds purple promotional imagery and a campaign wordmark to the header and hero, combining product photographs with round smiling illustrated characters. Treat that campaign treatment as the observed edition of the page. [Live homepage](https://www.gmarket.co.kr/).

The distinctive reusable combination is **green navigation, red price information and Gmarket Sans in selected brand-bearing text**. GDS describes the brand through connection, while its typography guidance limits the brand webfont to prices and selected headings or buttons alongside OS-oriented typography. The geometric, square-filling forms of the distributed Gmarket Sans are part of that identity. [Brand values](https://gds.gmarket.co.kr/brand/values), [product typography](https://gds.gmarket.co.kr/foundation/typography), [official font](https://corp.gmarket.com/fonts/).

#### Primary tasks

- Search for products or browse the category rail and bestsellers navigation.
- Compare product names, coupon-adjusted prices, reward amounts and delivery information.
- Open a product listing or explore the Emart Mall, StarDelivery and membership destinations shown on the homepage.

### Brand Narrative

The corporate history places Auction's establishment in 1998, Gmarket's in 2000 and their merger in 2010. It records SmilePay and Smile Delivery in 2014, Smile Club in 2017, Shinsegae Group entry in 2021 and the Shinsegae–Alibaba JV in 2025. The current service presentation features 꼭 membership, StarDelivery, Emart Mall, SmilePay and Smile Money. [History and current services](https://corp.gmarket.com/).

The corporate presentation uses **지금부터의 마켓** and **We Connect**. The company's connection theme also appears in GDS's brand values. The live homepage expresses that theme through adjoining shopping services and repeated offer information. The description of the live interface is an interpretation of the capture, not a quotation of a corporate design rule. [Brand values](https://gds.gmarket.co.kr/brand/values), [homepage](https://www.gmarket.co.kr/).

### Principles

GDS Introduction names three principles: **consistency**, connecting identity and usability; **extensibility**, maintaining shared guidelines, components and resources; and **efficiency**, reusing assets to give practitioners more time for user experience. Its brand-values page names connection, center, forward and variety. [Introduction](https://gds.gmarket.co.kr/overview/introduction), [values](https://gds.gmarket.co.kr/brand/values).

The opened GDS pages show version and update labels from 2021, and individual code-completion statuses vary. Those labels date the guidance; they do not date a current storefront redesign.

### Personas

No first-party persona research was verified.

## Colors

The live homepage exposes **277 computed root custom properties**, including one Swiper default; 276 remain after that exclusion. The browser declaration walk could not read five cross-origin stylesheets. Separately opening the product's `starro/desktop/css/home/home.css` recovered two `:root` blocks: one Swiper variable and a 276-property product block. All 277 names and raw values match the computed census. [Root declarations](https://script.gmarket.co.kr/starro/desktop/css/home/home.css). The paragraph census identifies **foreground `#222222`** (21 paragraph elements), even though red is the most frequent text colour across the complete census.

### Product colour and brand identity

- **Product main green `#00c400`** — live `--Green-500`; GDS Foundation names this Main Green and also uses it for positive or benefit information. The reference primary colour follows that product role.
- **Price red `#da120d`** — live `--Red-600`; the measured water card uses it for the discount percentage, final amount and currency unit. It is not evidence of a red purchase button.
- **Error / warning red `#ef2b2a`** — live `--Red-500`, documented for caution and errors.
- **White canvas / surface `#ffffff`** — `--White`; **foreground `#222222`** — `--Gray-900`; **muted ramp value `#757575`** — `--Gray-600`; **hairline ramp value `#e0e0e0`** — `--Gray-300`.
- **Category trigger `#10af29`** with `#ffffff` text, and **category rail `#0abb26`** with `#ffffff` text, are measured control colours. The rail reverses those colours during interaction.

The brand-identity page separately names **Gmarket Green `#00c01e`**, **Gmarket Blue `#0028ac`** and white. It documents a connection gradient using `#00c400`, `#00c3a0` and `#067dfd`. GDS Foundation also names `#0028ac` for purchase-path CTA colour. These documented roles are distinct from the measured category controls. [Brand colours](https://gds.gmarket.co.kr/brand/colors), [foundation colours](https://gds.gmarket.co.kr/foundation/color).

### Measured colour ladders

Every entry below is the corresponding `--Hue-stop` computed root value, expanded to six-digit hex. These are available palette values; a ladder's presence alone does not establish how every stop is used.

| Root namespace | Stops 50 → 900 |
|---|---|
| Gray | 50: `#fafafa` · 100: `#f5f5f5` · 200: `#eeeeee` · 300: `#e0e0e0` · 400: `#bdbdbd` · 500: `#9e9e9e` · 600: `#757575` · 700: `#616161` · 800: `#424242` · 900: `#222222` |
| Red | 50: `#fff5f5` · 100: `#ffdadb` · 200: `#ffbfbf` · 300: `#ff8585` · 400: `#ff5454` · 500: `#ef2b2a` · 600: `#da120d` · 700: `#bf0a03` · 800: `#9f0a01` · 900: `#7d0800` |
| Orange | 50: `#fff6f2` · 100: `#ffe1d3` · 200: `#ffccb2` · 300: `#ff9e70` · 400: `#ff7638` · 500: `#f9560e` · 600: `#da4000` · 700: `#b43200` · 800: `#882400` · 900: `#5e2700` |
| Yellow | 50: `#fffce5` · 100: `#fdf8cb` · 200: `#fff6a3` · 300: `#ffe65c` · 400: `#ffcc1f` · 500: `#eaad06` · 600: `#cf8b00` · 700: `#ac6600` · 800: `#864300` · 900: `#592500` |
| Green | 50: `#e5fce3` · 100: `#a5f4a0` · 200: `#6cef64` · 300: `#39e532` · 400: `#11d70d` · 500: `#00c400` · 600: `#01a900` · 700: `#018600` · 800: `#015f00` · 900: `#013600` |
| Teal | 50: `#eaf9fa` · 100: `#d1f5f8` · 200: `#b8f0f6` · 300: `#89e5ee` · 400: `#62d4e2` · 500: `#43bed0` · 600: `#2da2b8` · 700: `#1d7f97` · 800: `#125a6f` · 900: `#0a3545` |
| Blue | 50: `#eef7ff` · 100: `#cbe8ff` · 200: `#a7d9ff` · 300: `#68bbff` · 400: `#329cff` · 500: `#067dfd` · 600: `#0062e5` · 700: `#0048c8` · 800: `#0231a6` · 900: `#072182` |
| Indigo | 50: `#f5f5ff` · 100: `#e4e4ff` · 200: `#d2d2ff` · 300: `#ababff` · 400: `#8a8aff` · 500: `#706ff7` · 600: `#5855e2` · 700: `#4741c7` · 800: `#3931a8` · 900: `#2d2587` |
| Purple | 50: `#fbf5ff` · 100: `#f0dcfe` · 200: `#e5c4fc` · 300: `#ce95f8` · 400: `#b66ef0` · 500: `#9d50e5` · 600: `#823ad5` · 700: `#662ac0` · 800: `#4c1fa7` · 900: `#37188c` |
| Pink | 50: `#fff2fc` · 100: `#fecff2` · 200: `#fcade9` · 300: `#f76dd9` · 400: `#ef39cc` · 500: `#e413c3` · 600: `#d300be` · 700: `#bd00b8` · 800: `#9c00a3` · 900: `#64009a` |

`--Black` is `#000000`; `--White` is `#ffffff`. RGB companion properties expose the same channels separately.

### Service, Club, event and Selecti namespaces

- `--Smile-Yellow` **`#ffd200`**; GDS Foundation associates that value with the Smile brand. This is not the product's main green.
- `--StarDelivery-Purple` **`#7130f3`**; `--Green-Connect-Blue` **`#00c3a0`**. Their names and values are confirmed; no delivery-speed or cross-app programme interpretation is inferred from the names.
- **Club Navy** — `--Club-Navy-Main` `#002041` · `--Club-Navy-80` `#334d67` · `--Club-Navy-60` `#66798d` · `--Club-Navy-40` `#99a6b3` · `--Club-Navy-20` `#ccd2d9`.
- **Club Blue** — `--Club-Blue-Main` `#497cff` · `--Club-Blue-80` `#6d96ff` · `--Club-Blue-60` `#92b0ff` · `--Club-Blue-40` `#b6cbff` · `--Club-Blue-20` `#dbe5ff`.
- **Club Gray** — `--Club-Gray-Main` `#c8c8c8` · `--Club-Gray-80` `#d3d3d3` · `--Club-Gray-60` `#dedede` · `--Club-Gray-40` `#e9e9e9` · `--Club-Gray-20` `#f4f4f4`.

The following current event variables are confirmed as values. Their presence does not establish that a matching event is active or that every promotional module uses them:

- `--Event-bf-main` `#3067ff`.
- `--Event-brand-main` `#222222`.
- `--Event-bs-main` `#0051ff`.
- `--Event-bsd-main` `#7b00e7`.
- `--Event-campaign-main` `#00c400`.
- `--Event-hangawi-main` `#0051ff`.
- `--Event-monthly-main` `#3067ff`.
- `--Event-seollal-main` `#fd4e28`.
- `--Event-shinsegae-main` `#f1266d`.

`--Selecti-Green` is `#d9ff3f`; its ten-stop Green ladder is 50: `#f7ffc7` · 100: `#eeff95` · 200: `#d9ff3f` · 300: `#caf625` · 400: `#abdd05` · 500: `#85b100` · 600: `#648605` · 700: `#50690b` · 800: `#43590e` · 900: `#223201`. `--Selecti-Yellow` is `#fde486`. No product role for this namespace was established.

`--swiper-theme-color: #007aff` belongs to the Swiper stylesheet and is excluded from the brand palette.

## Typography

### Evidence classes

- **Official product use:** GDS Typography documents Gmarket Sans for prices and selected components, including headings and buttons; it describes OS-oriented system typography for the rest. Its brand-typeface page names Gmarket Sans as the designated headline face. [Product typography](https://gds.gmarket.co.kr/foundation/typography), [brand typeface](https://gds.gmarket.co.kr/brand/typeface).
- **Live-loaded:** the census records **Gmarket Sans 300, 500, 700** and **Noto Sans KR 400, 700**, all normal style. This confirms loaded faces, without assigning a particular file to each glyph. The search input computes to Gmarket Sans; the section-title link also computes to that family.
- **Official distributed assets:** the corporate font page offers Gmarket Sans in Light, Medium and Bold, in TTF and OTF, under the SIL Open Font License. Its stated coverage is 11,172 Hangul syllables, 95 Latin characters and 986 special characters. It describes straight, geometric forms within square bounds, adjusted for mixed Korean, Latin and number setting, and intended to remain clear in print, web and mobile use. [Distribution and licence statement](https://corp.gmarket.com/fonts/). No font files were downloaded or vendored.
- **Declared-only:** the live body, h1 and first-button stacks name `-apple-system`, `system-ui`, Apple SD Gothic Neo, Roboto, Noto Sans CJK KR and Tahoma in addition to the two loaded families. Those named alternatives are not individually confirmed as loaded by this census. The product CSS also declares Noto Sans KR 300 and 500, which are not in the loaded list. They receive no specimens.
- **Unresolved:** the exact local-versus-network face selected for each run, and per-glyph fallback, were not captured. **Substitute: none chosen.**

The opened product CSS configures local font names first, then WOFF2 and WOFF URLs under `script.gmarket.com/fonts/`: `GmarketSansLight`, `GmarketSansMedium`, `GmarketSansBold`, and `noto-sans-kr-v11-korean-*`. The census could not read those cross-origin `@font-face` rules; the serving configuration comes from the separately opened stylesheet. [Product font CSS](https://script.gmarket.co.kr/pc/css/common/kr/ui/common.css).

### Computed sizes on the sampled surface

| Element | Size / weight | Line-height | Additional evidence |
|---|---|---|---|
| Section-title link, 지금 제일 잘 나가는 상품 | 24px / 400 | normal | Gmarket Sans; 24px-high link |
| All-categories button | 18px / 700 | 21px | letter-spacing -1px |
| Primary nav link, 베스트 | 16px / 400 | 32px | letter-spacing -1px |
| Product-card outer anchor | 16px / 400 | normal | child labels carry their own colours |
| Category-rail link | 15px / 400 | 42px | letter-spacing -1px |
| Search input | 15px / 400 | 29px | Gmarket Sans; letter-spacing -0.5px |
| Seller-services button | 14px / 400 | 14px | letter-spacing -1px |
| Outer search-icon / carousel button styles | 13.3333px / 400 | normal | hidden/icon labels; not a visible copy-size recommendation |
| Footer notice button | 12px / 400 | 20px | survey measurement |

The section link and search input report computed weight 400 while the loaded Gmarket Sans faces are 300/500/700. A separate 400 font file was not observed. No unmeasured line-height ratios are added to these metrics.

GDS's documented typography scale is a separate specification: 24, 22, 20, 18, 16, 12 and 11px appear in its size table; its small-size row literally says `14ox`, while its usage paragraph names body size 14. The documentation says that 11 is exceptional. These dated guidance values do not replace the desktop measurements. [Typography specification](https://gds.gmarket.co.kr/foundation/typography).

## Layout

`--minWidth` is **1200px**. At the measured 1440px viewport, the core content runs from x=120 to x=1320. The category trigger and rail are 224px wide; the adjacent hero link is 976×400px. The navigation strip contains the category trigger, service links and utility links above the hero. Its captured text destinations include 베스트, 슈퍼딜, 이마트몰, 스타배송 and 꼭 멤버십.

The bestsellers carousel shows five 224px cards across the 1200px content area, with 20px between adjacent card origins after subtracting card width. The Emart Mall and StarDelivery areas use two 574px modules separated by 52px. Inside each module, two 273px product links sit 28px apart; 100px-high rows repeat at 120px intervals, leaving a 20px vertical gap. The selected card's 116px left padding reserves a 100px image and a 16px content gap. These are specific desktop layouts, not a universal gutter scale.

The page continues through service links, home-shopping content, Superdeal offers, notices and the legal footer. Its captured full-page height is 7189px.

GDS separately documents an 8-point grid and spacing units **2, 4, 8, 12, 16, 20, 24, 32 and 40px**. It identifies 64px specifically between the logo and bottom navigation in a full-footer pattern. This does not establish a 64px gap between the measured desktop modules. No `--space-*` property appears in the computed root list. [Documented spacing](https://gds.gmarket.co.kr/foundation/spacing).

### Responsive Behavior

Only the 1440×1000 desktop surface was measured; narrow-width reflow, mobile layout, breakpoints and reduced-motion behavior remain unmeasured.

## Elevation & Depth

All six sampled outer controls report **`box-shadow: none`** at rest. The product thumbnail's alpha border and the seller button's `#ececec` edge show how those specific elements separate from their surroundings. This sample does not establish a site-wide ban on shadows. Calculated sRGB contrast against white is **5.1554:1** for `#da120d` and **1.4512:1** for `#ffd200`; the former exceeds the normal-text 4.5:1 threshold, while the latter does not. [Contrast method and threshold](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

The category trigger's `::before` and seller button's `::after` use a common image sprite; the survey exposes `sprite__common--before`, `sprite__common--after` and `--spriteSize: 100% 100%`. The opened desktop CSS references `sprite__common.png`, while the homepage CSS references `sprite__homemain.svg`. Product thumbnails and campaign images supply much of the visible detail. The selected category sprite computes a 400px auto background size; the existence of `--spriteSize` does not establish that it sizes this particular sprite. No migration motive is inferred from this mixed sprite implementation. [Desktop CSS](https://script.gmarket.co.kr/pc/css/common/kr/ui/desktop_layout.css), [homepage CSS](https://script.gmarket.co.kr/pc/css/application/kr/homemain/app.css).

The separate GDS iconography guidance specifies a 48×48 design grid, 4px internal margins, a 3px line weight at that size, rounded ends and joins, and line/fill variants. These are documented construction rules, not measured icon dimensions on this desktop. The survey gives the 46×70px hero-arrow buttons 4px padding and the accessible labels 이전 목록 보기 and 다음 목록 보기; no general claim about all icon labels is made. [Iconography](https://gds.gmarket.co.kr/foundation/iconography).

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

Each of the six outer controls reports the raw computed transition **`all 0s ease 0s`**. The sampled category reversal therefore has no nonzero outer-control transition. The product focus probe detects a longer transition somewhere in its compared subtree, without recording that descendant's full transition shorthand. No duration is promoted from that partial observation. Carousel, layer and toast timing, scroll animation and reduced-motion handling were not measured.

## Components

### Category-rail link — measured interactive component

**Identity:** `a.link__1depth-item`, text **브랜드패션**, `href="#"`; 224×44px, 0px radius, 0px padding, 15px/400, 42px line-height, -1px letter-spacing. Rest: background **`#0abb26`**, foreground **`#ffffff`**, no border or shadow.

Hover and held mouse press both reverse the colours to **`#ffffff` background / `#0abb26` text**. A parent `::before` separator appears, 224×1px in **`#e5e5e5`**. Press adds no further change relative to hover. The keyboard-focus JSON records the same colour reversal and separator plus a browser `auto` outline, with `persistsAfterBlur: []`. However, the focus crop shows the original green background and white label with the browser ring. The computed and visual focus records disagree; focus colour is unresolved and no focus token is emitted. The browser outline is not a brand token.

### Measured controls retained as reference geometry

These controls have unchanged or browser-only state results, or incomplete pointer measurement, so they are described here without interactive entries in `tokens.components`.

| Control | Identity and rest styling |
|---|---|
| **전체 카테고리** | `button.button__category-all`; 224×60px; radius 0; padding 17px 0px 20px; 18px/700; background `#10af29`, text `#ffffff`; border and shadow none |
| 판매자서비스 | `button.button__sellermenu`; 117×34px; radius 3px; padding 0; 14px/400; `#ffffff` background, `#5e636d` text, 1px solid `#ececec` border; shadow none |
| 베스트 | `a.link__service`, link to `/n/best`; 38.5×32px; radius 0; padding 0; 16px/400; transparent on white, `#000000` text; no border or shadow |
| 무엇을 찾아드릴까요? | `input#form__search-keyword`; 533×29px; radius 24px; padding 0; Gmarket Sans 15px/400; transparent on white, `#424242` ink; border and shadow none. The visible outer search enclosure is a separate element. The desktop CSS declares placeholder colour `#999999`; the probe did not capture its computed pseudo-element colour. |
| 5K프라이스 내츄럴미네랄워터 2Lx6입 (무라벨) | `a.link__item.product-clk-spm-d`; 273×100px; radius 0; padding 0px 0px 0px 116px; 16px/400; transparent anchor, own inherited colour `#0000ee`, border and shadow none. The visible product name is a child in `#444444`; the price and percentage are `#da120d`; rewards are `#01a900`; delivery copy is `#616161`. |

The sampled product's thumbnail is 100×100px, with a 1px `rgba(0, 0, 0, 0.1)` edge on an image-wrapper pseudo-element. Its visible green tag is a 50×18px child in `#00c400` with white text. The outer anchor's blue inherited colour is not the visible title colour.

The survey finds **하나더** as a module-tab link (`role="button"`, `href="#하나더"`): 134×40px, 20px radius, 0 padding, 16px/400, 40px line-height, transparent with `#666666` text. The rendered active **전단상품** tab has `#00c400` background, white text and 16px/700. These are two rendered variants, not an observed transition on one control. More-links are 54px high with 27px radius, `#fafafa` backgrounds, `#444444` text and a 1px `rgba(0, 0, 0, 0.1)` border. The promotional banner link has 6px radius.

The Global button and nearby login utility link measure 14px/400, 32px high, padding 0, with `#777777` ink. The 32×32px search-icon button has 5px padding, radius 0, transparent background, black outer foreground and no border; its 13.3333px/400 outer style is not a visible label specimen.

The homepage CSS assigns the rank badge a 47×47px circle, `#00c01e` background and white 16px bold Gmarket Sans text. The screenshot shows green filled rank badges with white numbers. These declared badge dimensions and typography are not a new computed-control measurement. [Homepage CSS](https://script.gmarket.co.kr/pc/css/application/kr/homemain/app.css).

### States

| Control | Hover | Held press | Real keyboard focus |
|---|---|---|---|
| Category rail, 브랜드패션 | White background, green text; parent separator appears | Same; no additional delta versus hover | JSON: inversion/separator, restoring after blur. Crop: green/white rest colours plus auto ring. Focus colour unresolved; no token |
| All-categories button | No compared style change | No compared style change | Browser `auto` outline only |
| Seller-services button | No compared style change | No compared style change | Browser `auto` outline only |
| Best nav link | No compared style change in the second pass | No compared style change in the second pass | Browser `auto` outline only |
| Search input | No compared style change | No compared style change | No compared style change; `:focus-visible` was true |
| Selected water-product link | UNMEASURED: covered in first pass, absent in second | UNMEASURED: covered in first pass, absent in second | Browser `auto` outline only in first pass |

The second pointer pass enabled `hideOverlays: true` after a fixed header covered the best-nav and product-card targets. The selected product was no longer found in that second load. No third state call was made.

“No compared style change” covers the control, its pseudo-elements, captured descendants and three ancestor levels with pseudo-elements. The five simple controls have no captured descendants; the product has 19 descendants including two images. Canvas/video pixels, closed shadow roots, cross-origin iframe interiors, external sprite internals and siblings are outside this comparison. Disabled, error, empty, loading and success behavior were not measured.

## Do's and Don'ts

### Do

- Keep the product's green navigation and red price information distinct. Match the measured rail reversal for hover and held press; the focus-colour record has an unresolved visual discrepancy.
- Use the verified Gmarket Sans metadata for brand-bearing text, and preserve the measured type sizes independently of whether a face is available in a later environment.
- Keep the measured product information grouped: name, coupon-adjusted price, reward amount and delivery copy.
- Use the measured 1200px desktop geometry and component-specific radii when reproducing this surface.
- Keep GDS's published specification and current production measurements labelled separately.

### Don't

- Derive a red purchase button from red price text. GDS documents a blue purchase-path CTA role; no purchase CTA was measured here.
- Replace the brand face with an unmeasured fallback or present an unloaded face as a specimen.
- Turn the sample's flat cards into a claim that shadows are prohibited everywhere.
- Use a library's `--swiper-theme-color` as Gmarket's brand accent.
- Transfer an event variable's name into an unsupported claim about a currently active campaign.

## Voice & Tone

The captured UI names tasks and price context directly: search, category, bestsellers, coupon-adjusted price, reward amount and delivery. The search placeholder asks what the customer wants to find. Its reward line associates a specific amount with membership. These observations support task-specific, numerically explicit interface copy; they do not establish a researched brand persona or a rule forbidding emotional language. [Homepage](https://www.gmarket.co.kr/).

GDS Buttons prescribes labels appropriate to the journey, distinguishes purchase from payment, and permits conversational language where friendly guidance is needed. [Button writing guidance](https://gds.gmarket.co.kr/components/buttons).

## Agent Prompt Guide

### Quick colour reference

Product green `#00c400` · category rail `#0abb26` · category trigger `#10af29` · price `#da120d` · foreground `#222222` · surface `#ffffff` · Smile `#ffd200` · StarDelivery `#7130f3`.

### Example component prompts grounded in the capture

- “A 224×44px category link labelled 브랜드패션, square corners, 15px/400 and 42px line-height; `#0abb26` background and white text. Hover and held press reverse those colours and reveal a 1px `#e5e5e5` separator. Focus rendering is unresolved; preserve the platform focus outline independently.”
- “A centered 1200px desktop shopping area with two 574px service modules separated by 52px; each contains two 273×100px horizontal product links with a 28px gutter and 100px square thumbnails.”

## Governance

### Known Gaps

- **Contrast, `category-fashion`.** Text `#ffffff` on `#0abb26` measures 2.58:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
