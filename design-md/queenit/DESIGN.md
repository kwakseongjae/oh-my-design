---
name: Queenit
colors:
  primary: '#754ee4'
  ink: '#000000'
  foreground: '#000000'
  canvas: '#ffffff'
  on-primary: '#ffffff'
  base_gray_gray1000: '#282c35'
  base_gray_gray500: '#a8afbe'
  base_gray_gray900: '#494e5b'
  base_gray_gray200: '#eeeff2'
  border: '#e4e6ec'
  customer_chip_chip-bg: '#f3f4f6'
  brand_link_link-active: '#633bc8'
  final-week-badge-bg: '#d95c19'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    use: 'Home and search paragraph census: five characters each; not a universal visible-label size. Measured at 390x844.'
  button:
    fontSize: 13px
    fontWeight: 600
    use: Selected fashion-chip visible label and product app-open button. Measured at 390x844.
  heading:
    fontSize: 18px
    fontWeight: 500
    use: 'Product h1: 25 heading characters. Measured at 390x844.'
  heading-sm:
    fontSize: 18px
    fontWeight: 600
    use: 'Product heading census: 16 heading characters; also icon-action inheritance. Measured at 390x844.'
  heading-lg:
    fontSize: 20px
    fontWeight: 600
    use: 'Listing h2: six heading characters. Measured at 390x844.'
  display-sm:
    fontSize: 18px
    fontWeight: 700
    use: 'Home heading census: 27 heading characters; Storefront heading role; earlier display 38px remains unexported corporate history. Measured at 390x844.'
  discount:
    fontSize: 16px
    fontWeight: 600
    use: Published name retained for the same size/weight; product purchase and information buttons, category headings. Not proof of discount text geometry. Measured at 390x844.
  label:
    fontSize: 12px
    fontWeight: 600
    use: Product review all-items action and category action anchors. Measured at 390x844.
  label-sm:
    fontSize: 12px
    fontWeight: 500
    use: AD action label. Measured at 390x844.
  input-lg:
    fontSize: 16px
    fontWeight: 500
    use: Search input at 390px viewport; 20px line height. Measured at 390x844.
  input:
    fontSize: 14px
    fontWeight: 500
    use: Published name retained for the same value; measured listing sort action, not the phone search input. Measured at 390x844.
  promo:
    fontSize: 14px
    fontWeight: 600
    use: Published name retained for the same value; recommendation-more button, not proof of banner overlay labels. Measured at 390x844.
  nav:
    fontSize: 11px
    fontWeight: 600
    use: Visible bottom-home label. Measured at 390x844.
  caption-sm:
    fontSize: 11px
    fontWeight: 500
    use: First product-card campaign badge label; not the card title. Measured at 390x844.
rounded:
  none: 0px
  md: 6px
  base: 8px
  review-card: 12px
  lg: 16px
components:
  recommend-more:
    type: button
    rounded: 6px
    height: 40px
    padding: 10px 14px
    typography: 14px / 600
    hover: no brand change
    pressed: '::after opacity: 0 -> 1'
    focus: no brand change
    use: 추천 더 보기 button on the white home canvas. Rest fill oklch(0.239933 0.089905 261.268 / 0.0706), ink oklch(0.12786 0.025832 253.799 / 0.851). 390x844.
  fashion-chip:
    type: button
    backgroundColor: '#282c35'
    textColor: '#ffffff'
    rounded: 999px
    height: 34px
    padding: 0px
    typography: 13px / 600
    hover: no brand change
    pressed: 'descendant div@3.op: 0 -> 0.03'
    use: Selected 패션 link acting as a filter chip on white. Rest fill oklch(0.293463 0.016665 266.434), visible label oklch(1 0 0). 999px forms rounded ends. 390x844.
  bottom-home:
    type: button
    rounded: 0px
    height: 45.6px
    padding: 0px
    typography: 11px / 600
    hover: no brand change
    pressed: no brand change
    focus: no brand change
    use: 홈 link in the fixed bottom navigation on white. Transparent root; visible label oklch(0.12786 0.025832 253.799 / 0.851). Browser auto focus outline is not a brand token. 390x844.
  search-action:
    type: button
    rounded: 0px
    height: 40px
    padding: 0px
    hover: no brand change
    pressed: 'descendant div@1.op: 0 -> 0.03'
    use: 검색 icon link on white. Transparent root; visible dark SVG oklch(0.293463 0.016665 266.434), with a separate white-theme SVG layer. 390x844.
  search-input:
    type: input
    textColor: '#282c35'
    rounded: 0px
    height: 20px
    padding: 0px 8px
    typography: 16px / 500
    hover: no brand change
    pressed: no brand change
    focus: no brand change
    use: Inner text input in the search header on white; transparent root and ink oklch(0.293463 0.016665 266.434). Width 222px initially; 262px after focus persists after blur. 390x844.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    product: Pretendard
---

# Design System Inspiration of Queenit

## Overview

### Visual Theme & Atmosphere

Queenit (퀸잇) is a lifestyle-commerce product addressing shoppers in their 40s and 50s, operated by Rapportlabs. Its own homepage calls it “멋진 어른들의 라이프스타일링샵, 퀸잇”. Rapportlabs dates the service launch to September 2020. Its 2026 brand article describes expansion from fashion into beauty and living. This gives a builder a useful direction: organize shopping around an adult customer's connected tastes rather than treating fashion as an isolated category. That last design direction is an editorial reading of the official article, not a quoted corporate rule.

The measured surface is the Korean storefront (`web.queenit.kr/home/RECOMMENDATION`, HTML `lang="ko"`), at 390×844 with touch and a phone user agent. Every current UI measurement in this reference uses that viewport. The home screenshot combines a white canvas, a large photographic campaign, category shortcuts and fixed bottom navigation. The search list places two 177px-wide card roots in a row. Its first product opens a detailed merchandise page with a fixed purchase bar. These are observations of the captured pages, not a claimed responsive breakpoint system.

The product palette combines white with a dark selected chip and purple commerce actions. The selected “패션” chip paints #282c35 with a white label. The product’s “구매하기” fill and discount text paint #754ee4. The app icon separately contains #642fe9. The page declares its palette in oklch(); the six-digit values here are the compiler’s in-gamut sRGB results, not sampled guesses. The product-role proposal for primary_color is #754ee4: it appears on five captured pages, including the persistent “앱 열기” button border on both product pages. The icon colour remains a separate raster fact.

#### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #714fd8 → #754ee4; #7d8597 → #7c8597; #292c31 → #282c35; #aaafbb → #a8afbe; #603ec5 → #633bc8; #edeef0 → #eeeff2. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

Name correction in this earlier wording (2026-11-22): it calls #642fe9 `primary`, the brand colour or the identity anchor. The token `primary` now names #754ee4, the colour the storefront declares and paints. #642fe9 is the app icon’s colour: it is described under Color Palette & Roles and is no longer a token.

Queenit (퀸잇) is Korea's leading lifestyle-commerce app for the 4050 generation — "멋진 어른들의 라이프스타일링샵" (a lifestyling shop for stylish grown-ups), operated by Rapportlabs (라포랩스). Its live storefront (web.queenit.kr) reads like a confident, scroll-fast mobile marketplace rather than a fussy department-store site. The canvas is pure white (`#ffffff`) carrying near-black ink (`#000000`) for product titles and prices, so merchandise photography does the talking while the chrome stays quiet. Soft cool-grey surfaces (`#edeef0`, `#f2f3f5`) fill image placeholders and skeletons, and a thin hairline (`#e2e2e8`) separates rows without heavy borders. The single brand anchor is a vivid electric purple (`#642fe9`) — the color of the white-"Q" app icon — which signals "Queenit" the instant the app opens.

In the commerce UI the purple shows up as a working color, not just a logo: the discount-rate percentages that drive this deal-heavy storefront are set in a saturated sale-purple (`#714fd8`) at 16px / weight 600, and a deeper accent-purple (`#603ec5`) handles links and emphasis. A warm pink (`#e54d76`) is the secondary accent for highlight tags, and a muted cool-grey ladder (`#aaafbb` → `#7d8597`) carries metadata and secondary labels alongside a darker slate (`#292c31`) used for input and label text. Geometry leans rounded and friendly — 16px product cards as the workhorse, 8px shortcut chips, 4px–6px micro-tags, and full-circle (50%) floating icon buttons — with light, low-spread shadows (`rgba(27,32,42,0.16) 0px 2px 6px -2px`) that lift chips just enough to feel tappable on a phone. The product font throughout is **Pretendard**, chosen for dense, legible hangul at the larger touch sizes a 40s–50s audience appreciates.

Queenit's parent company runs a deliberately different identity on its corporate/recruiting site (rapportlabs.kr): big 38px Pretendard Bold section headlines over calm body copy set in **Noto Sans Korean** at 14px, a softer near-black ink (`#393838`), and a single warm yellow accent (`#ffcb27`). The two surfaces share a flat, photography-forward sensibility but speak to different audiences — the storefront sells to shoppers with purple and deals; the corporate site recruits talent with restraint and a friendly yellow highlight.

**Key Characteristics:**
- Electric brand purple (`#642fe9`) from the app icon — the system's single identity color
- Sale-purple (`#714fd8`) reserved for discount-rate percentages — the storefront's most repeated brand cue
- Deeper accent-purple (`#603ec5`) for links and emphasis; pink (`#e54d76`) as the secondary accent
- Near-black ink (`#000000`) on white (`#ffffff`) — merchandise-first, quiet chrome
- Cool-grey surfaces (`#edeef0`, `#f2f3f5`) for skeletons and placeholders; hairlines (`#e2e2e8`) over heavy borders
- Rounded, mobile-friendly geometry — 16px cards, 8px chips, 50% circle icons
- Light low-spread shadows for chips/floating icons instead of deep elevation
- Pretendard for the product UI; corporate site uses Noto Sans Korean + a `#ffcb27` yellow accent over `#393838` ink

### Primary tasks

Observed at 390×844: browse category shortcuts, read a product's discount and price, inspect its detail page, and use the fixed home/category navigation. The search surface has a text input and a product grid. No purchase, coupon application, account flow or form submission was exercised.

#### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

- Scan discount rates to judge a deal at a glance
- Buy contemporary brands for less than the department-store price
- Switch between top categories to narrow what you browse
- Open a limited-time sale event from a home banner
- Search for a product and fall back to categories when nothing matches

### Brand Narrative

Rapportlabs' official history places Queenit's launch in September 2020. Its company homepage frames the opportunity as the Korean 4050 market, and its legal notice names a Seoul business address. The official brand article published in 2026 explains expansion from fashion to beauty and living. The storefront's current positioning line therefore belongs to a broader lifestyle proposition rather than a colour-only refresh. The last sentence is an interpretation linking that wording to the company's explicit category expansion.

The 2025 engineering article adds a concrete product evolution: text accessibility was redesigned around token-based shared text components and the principle that small text should enlarge more than large text. It supports role-aware typography work, but does not establish the earlier claim that every label must be at least 16px. The 390×844 capture itself includes 11px bottom labels and 13px chip labels.

#### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Queenit (퀸잇) is operated by **Rapportlabs (라포랩스)**, a startup founded in **May 2020** and based in Gangnam, Seoul, led by co-CEOs **최희민 (Choi Hee-min)** and **홍주영 (Hong Ju-young)**. After an initial product pivot, the team launched **Queenit in September 2020** to serve a market most fashion-commerce players had overlooked: Korean women in their **40s and 50s** — a demographic the company describes as the country's largest and most purchasing-powerful consumer segment.

The founding insight was that the 4050 generation shopped for fashion the way younger users shopped years earlier — increasingly on mobile, but underserved by apps designed for 20s tastes and 20s-sized type. Queenit's answer was a curated, deal-forward storefront of contemporary and premium brands ("백화점 옷인데 더 저렴해" — department-store clothes for less), with a generous, legible UI and value framing (discount rates, coupons, sold-out social proof) that respects the shopper's intelligence. Early growth was rapid, with weekly GMV compounding as word spread through the target demographic.

What Queenit refuses, visible in its design: the cramped 14px type and youth-coded aesthetics of typical fashion apps, and any framing that treats the 4050 audience as a "senior" afterthought. What it embraces: a confident brand purple, photography-first merchandising, a generous 16px reading size, and copy that calls its users "멋진 어른들" (stylish grown-ups). The parent brand's stated ambition — a 4050 lifestyle super-app reaching 8M MAU and 3조+ in GMV — frames the storefront as the first surface of a much larger platform.

### Principles

One company-authored principle was verified: smaller text should enlarge more, larger text less (official text-accessibility article). For the 390×844 reference, additional implementation guidance is observational: distinguish identity from promotion, root inheritance from visible label paint, and persistent layout changes from transient focus styling. These are author guidance, not a fabricated company values list.

#### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #714fd8 → #754ee4. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

1. **Respect the grown-up shopper.** The 4050 user is discerning, not a niche to be condescended to. *UI implication:* aspirational copy ("멋진 어른들"), generous 16px text, and clean merchandise-first layouts — never shrunken type or youth-coded clutter.
2. **Photography leads, chrome follows.** Product imagery is the hero. *UI implication:* near-black text on white, 16px-radius image cards, quiet hairlines; the brand purple is an accent, not a background.
3. **Value is the message.** Deals, coupons, and sold-out proof drive the storefront. *UI implication:* discount rates get the saturated sale-purple (`#714fd8`) at weight 600 so the savings read instantly.
4. **One identity color.** Purple (`#642fe9`) means Queenit. *UI implication:* reserve the saturated purple for identity and the discount cue; don't dilute it across surfaces.
5. **Flat and fast.** A deal-heavy scroll must stay light. *UI implication:* tint and hairlines for separation, light low-spread shadows only on chips and floating icons.

### Personas

No first-party persona profiles were verified. The earlier fictional profiles are retained below as an earlier record; they do not feed product facts or tokens.

#### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

*Personas below are fictional archetypes informed by publicly observable Queenit user segments (Korean women in their 40s–50s shopping fashion on mobile), not individual people.*

**정미경, 52, 서울.** Shops for contemporary brands she used to buy at department stores, now at better prices. Trusts the "완판" (sold-out) tags and the larger, readable type. Came to Queenit after a friend showed her "백화점 옷인데 더 저렴해."

**한영주, 47, 경기.** Busy professional who scans discount rates first — the sale-purple percentages let her judge a deal in a glance. Appreciates that the app feels made for her taste, not a teenager's.

**김선호, 55, 부산.** Browses the 남성 category for quality basics. Values the calm, photography-forward layout and the absence of aggressive pop-ups; buys when the coupon framing makes the value obvious.

## Colors

Every page measurement here is from the 390×844 phone captures of 2026-11-21, recompiled on 2026-11-22. The site declares oklch() values; the hex column is the in-gamut sRGB paint reported by the repaired compiler. Alpha colours remain in their own notation in prose.

### Primary

`primary` is #754ee4, the same value as the frontmatter `primary_color`. The “구매하기” button paints `oklch(0.551898 0.214659 289.15)`; the same colour appears as discount text on home, listing and search, and as the “앱 열기” border on both product pages. Root properties `--brand_primary_primary`, `--brand_link_link` and `--base_lotus_lotus700` declare `oklch(55.1898% 0.214659 289.15)`.

The app icon’s purple, #642fe9, is a separate fact and is not a token. The 192×192 icon the storefront links has 28,825 #642fe9 pixels among 36,316 opaque pixels; it is raster evidence read from the image file, outside the compiler candidates, and no measured control or text paints it. The earlier record published #642fe9 under the name `primary`. On 2026-11-22 that name moved to the colour the storefront itself declares as `--brand_primary_primary` and paints on the purchase button. A live read at 390×844 on 2026-11-22 gave the same purchase fill, `oklch(0.551898 0.214659 289.15)`, on a 294×48px button with an 8px radius and a white label, and the same three root properties.

### Accent

`final-week-badge-bg: #d95c19` belongs to the first search card’s “파이널위크” badge (raw `rgb(217, 92, 25)`). Campaign background #6038f2 is present in home/listing/search counts, but no precise owning element was identified; it is not exported.

### Text Hierarchy

| Token | sRGB paint | Page notation / role |
|---|---|---|
| ink | #000000 | `rgb(0, 0, 0)`: root inheritance and clipped accessibility text; not all visible product labels |
| foreground | #000000 | The single paragraph on home and search, five characters each; a sparse body-ink sample |
| base_gray_gray1000 | #282c35 | `oklch(0.293463 0.016665 266.434)`: search-input ink and selected fashion-chip fill |
| base_gray_gray500 | #a8afbe | `oklch(0.753546 0.023369 264.289)`: first card’s struck original price and heart-path paint |
| base_gray_gray900 | #494e5b | `oklch(0.424839 0.022533 268.437)`: category-directory text census, 230 elements; company property `--base_gray_gray900` |
| brand_link_link-active | #633bc8 | `oklch(0.485854 0.204969 289.234)`: “앱 열기” and “상품 정보 펼쳐보기” ink at rest; the property name does not prove a measured pressed state |

The earlier alternate grey #7d8597 is corrected to #7c8597, `oklch(0.616213 0.028191 263.726)`, measured on nine product text elements and seven sold-out-product text elements. An exact label owner was not recorded, so this correction remains prose and does not export a token. Product text also includes #8361f5, `oklch(0.60496 0.212308 289.206)`, once; no exact label or measured hover identity was established. It is not exported as a hover token.

Visible bottom-home label and recommendation-more ink use `oklch(0.12786 0.025832 253.799 / 0.851)`, normalized by the compiler to `rgba(2, 7, 17, 0.851)`. The card title uses `oklch(0.169589 0.059905 261.062 / 0.6)`; no opaque substitute is exported.

### Neutral & Surface

| Token | sRGB paint | Page notation / role |
|---|---|---|
| canvas | #ffffff | `oklch(1 0 0)`: page/card backing |
| on-primary | #ffffff | `oklch(1 0 0)`: purchase and selected-chip labels |
| base_gray_gray200 | #eeeff2 | `oklch(0.952217 0.004582 269.074)`: search input’s recorded backing and first-card image underlay (177×0 at capture); not a verified loading animation |
| border | #e4e6ec | `oklch(0.924814 0.007841 265.846)`: three product borders; `--neutral_border_divider` / `--neutral_border_divider-on-light` |
| customer_chip_chip-bg | #f3f4f6 | `oklch(0.966927 0.003202 261.347)`: unselected “뷰티” / “리빙” home chip fills |

Recommendation-more fill is `oklch(0.239933 0.089905 261.268 / 0.0706)`, normalized to `rgba(4, 28, 73, 0.0706)`. #f9f9fa occurs on three product backgrounds with `--base_gray_gray50`; no specific panel owner was recorded, so it is not exported. #e2e2e8 is one border with no identified owner; the old hairline role remains unconfirmed. The declared #f2f3f5 value is not a painted token.

### Corporate (rapportlabs.kr)

Corporate colours are not storefront tokens. The company pages supply narrative and address evidence only; no corporate style value enters this palette.

### Declared in the site's CSS, not seen painted

The following first-party CSS colour declarations were not matched to paint across the six captures. This list is not exported as tokens. Out-of-sRGB values remain in the page’s own notation; the compiler’s `colour-spaces.json → outOfGamut` identifies them. Examples include `--brand_error_system-error-bg: oklch(97.0022% 0.01915 20.54)` and `--domain_payment_e-pay-bg-nh: oklch(82.9751% 0.194888 79.097)`. A declaration alone establishes no live success/error/payment treatment.

| CSS property | Computed value |
|---|---|
| `--base_black_black-alpha10` | `oklch(0% 0 0/0.102)` |
| `--base_black_black-alpha15` | `oklch(0% 0 0/0.149)` |
| `--base_black_black-alpha20` | `oklch(0% 0 0/0.2)` |
| `--base_black_black-alpha40` | `oklch(0% 0 0/0.4)` |
| `--base_black_black-alpha5` | `oklch(0% 0 0/0.051)` |
| `--base_black_black-alpha50` | `oklch(0% 0 0/0.502)` |
| `--base_black_black-alpha60` | `oklch(0% 0 0/0.6)` |
| `--base_black_black-alpha70` | `oklch(0% 0 0/0.702)` |
| `--base_black_black-alpha80` | `oklch(0% 0 0/0.8)` |
| `--base_black_black-alpha90` | `oklch(0% 0 0/0.902)` |
| `--base_blue-alpha_blue-alpha100` | `oklch(53.9597% 0.274593 259.949/0.0588)` |
| `--base_blue-alpha_blue-alpha1000` | `oklch(27.5242% 0.142382 260.148/0.9098)` |
| `--base_blue-alpha_blue-alpha200` | `oklch(53.7852% 0.275763 259.968/0.0902)` |
| `--base_blue-alpha_blue-alpha300` | `oklch(53.7959% 0.27566 260.024/0.1412)` |
| `--base_blue-alpha_blue-alpha400` | `oklch(53.4934% 0.277572 260.276/0.251)` |
| `--base_blue-alpha_blue-alpha50` | `oklch(54.4685% 0.271264 259.755/0.0314)` |
| `--base_blue-alpha_blue-alpha500` | `oklch(53.0387% 0.280498 260.577/0.4588)` |
| `--base_blue-alpha_blue-alpha600` | `oklch(52.4664% 0.284168 261.015/0.6196)` |
| `--base_blue-alpha_blue-alpha700` | `oklch(49.3795% 0.268647 261.094/0.6902)` |
| `--base_blue-alpha_blue-alpha800` | `oklch(43.577% 0.237407 261.118/0.7608)` |
| `--base_blue-alpha_blue-alpha900` | `oklch(37.3692% 0.200379 260.834/0.8196)` |
| `--base_blue_blue100` | `oklch(96.6458% 0.017375 263.246)` |
| `--base_blue_blue1000` | `oklch(34.065% 0.129215 262.062)` |
| `--base_blue_blue200` | `oklch(95.145% 0.025255 263.931)` |
| `--base_blue_blue300` | `oklch(92.3333% 0.04036 261.872)` |
| `--base_blue_blue400` | `oklch(86.6321% 0.07163 262.557)` |
| `--base_blue_blue50` | `oklch(98.2308% 0.0091 269.02)` |
| `--base_blue_blue500` | `oklch(75.463% 0.136462 261.986)` |
| `--base_blue_blue600` | `oklch(67.5174% 0.185344 261.736)` |
| `--base_blue_blue700` | `oklch(62.2521% 0.194838 261.896)` |
| `--base_blue_blue75` | `oklch(96.8304% 0.016631 257.029)` |
| `--base_blue_blue800` | `oklch(55.0765% 0.188247 262.045)` |
| `--base_blue_blue900` | `oklch(47.1033% 0.16997 261.711)` |
| `--base_flamingo_flamingo100` | `oklch(97.0654% 0.018663 358.033)` |
| `--base_flamingo_flamingo1000` | `oklch(35.6798% 0.129874 9.288)` |
| `--base_flamingo_flamingo200` | `oklch(95.3286% 0.032835 0.959)` |
| `--base_flamingo_flamingo300` | `oklch(93.1414% 0.049044 1.105)` |
| `--base_flamingo_flamingo400` | `oklch(87.9441% 0.090047 1.318)` |
| `--base_flamingo_flamingo50` | `oklch(98.2737% 0.009928 359.072)` |
| `--base_flamingo_flamingo500` | `oklch(78.1245% 0.172448 4.494)` |
| `--base_flamingo_flamingo600` | `oklch(70.7181% 0.215542 7.019)` |
| `--base_flamingo_flamingo700` | `oklch(65.4785% 0.224451 8.461)` |
| `--base_flamingo_flamingo75` | `oklch(97.0654% 0.018663 358.033)` |
| `--base_flamingo_flamingo800` | `oklch(57.9532% 0.211871 9.253)` |
| `--base_flamingo_flamingo900` | `oklch(49.6449% 0.185841 9.846)` |
| `--base_gray-alpha_gray-alpha50` | `oklch(38.2321% 0.058703 263.968/0.0314)` |
| `--base_gray-alpha_gray-alpha500` | `oklch(20.9066% 0.091351 260.076/0.3412)` |
| `--base_gray-alpha_gray-alpha650` | `oklch(15.8062% 0.059011 250.847/0.6)` |
| `--base_gray-alpha_gray-alpha75` | `oklch(33.886% 0.068421 258.832/0.0588)` |
| `--base_gray-alpha_gray-alpha850` | `oklch(12.5158% 0.026088 244.118/0.851)` |
| `--base_gray-alpha_gray-alpha950` | `oklch(12.5158% 0.026088 244.118/0.851)` |
| `--base_gray_gray400` | `oklch(86.6348% 0.01456 263.714)` |
| `--base_gray_gray600` | `oklch(67.0173% 0.027089 266.645)` |
| `--base_gray_gray650` | `oklch(53.3538% 0.026104 260.959)` |
| `--base_gray_gray75` | `oklch(96.3927% 0.003204 261.347)` |
| `--base_gray_gray800` | `oklch(53.8342% 0.027034 265.369)` |
| `--base_gray_gray850` | `oklch(29.2015% 0.011234 256.903)` |
| `--base_gray_gray950` | `oklch(29.2015% 0.011234 256.903)` |
| `--base_green-alpha_green-alpha100` | `oklch(58.6188% 0.245438 146.852/0.0784)` |
| `--base_green-alpha_green-alpha1000` | `oklch(32.1894% 0.112853 153.892)` |
| `--base_green-alpha_green-alpha200` | `oklch(59.4515% 0.248759 146.874/0.1098)` |
| `--base_green-alpha_green-alpha300` | `oklch(60.5552% 0.253341 146.879/0.1804)` |
| `--base_green-alpha_green-alpha400` | `oklch(60.5798% 0.251168 147.19/0.3294)` |
| `--base_green-alpha_green-alpha50` | `oklch(56.6815% 0.23678 146.868/0.0392)` |
| `--base_green-alpha_green-alpha500` | `oklch(58.4359% 0.236141 148.1/0.5882)` |
| `--base_green-alpha_green-alpha600` | `oklch(56.2932% 0.219633 149.407/0.7686)` |
| `--base_green-alpha_green-alpha700` | `oklch(54.9915% 0.206077 151.002/0.8784)` |
| `--base_green-alpha_green-alpha800` | `oklch(52.311% 0.183878 153.772)` |
| `--base_green-alpha_green-alpha900` | `oklch(44.6648% 0.156894 153.804)` |
| `--base_green_green100` | `oklch(96.3965% 0.020944 151.614)` |
| `--base_green_green1000` | `oklch(32.1894% 0.112853 153.892)` |
| `--base_green_green200` | `oklch(94.7804% 0.033019 153.894)` |
| `--base_green_green300` | `oklch(91.8136% 0.054414 152.714)` |
| `--base_green_green400` | `oklch(85.593% 0.097734 153.665)` |
| `--base_green_green50` | `oklch(98.1554% 0.010915 154.147)` |
| `--base_green_green500` | `oklch(73.3761% 0.163406 153.561)` |
| `--base_green_green600` | `oklch(64.8232% 0.190252 153.691)` |
| `--base_green_green700` | `oklch(59.31% 0.194241 153.823)` |
| `--base_green_green75` | `oklch(96.0717% 0.025085 160.046)` |
| `--base_green_green800` | `oklch(52.311% 0.183878 153.772)` |
| `--base_green_green900` | `oklch(44.6648% 0.156894 153.804)` |
| `--base_lotus-alpha_lotus-alpha100` | `oklch(46.9312% 0.32088 265.38/0.051)` |
| `--base_lotus-alpha_lotus-alpha1000` | `oklch(26.0819% 0.158783 281.251/0.8902)` |
| `--base_lotus-alpha_lotus-alpha200` | `oklch(46.9521% 0.320725 265.484/0.0706)` |
| `--base_lotus-alpha_lotus-alpha300` | `oklch(46.9458% 0.320758 265.603/0.1098)` |
| `--base_lotus-alpha_lotus-alpha400` | `oklch(47.0168% 0.320243 265.955/0.1882)` |
| `--base_lotus-alpha_lotus-alpha50` | `oklch(47.0578% 0.319984 265.561/0.0314)` |
| `--base_lotus-alpha_lotus-alpha500` | `oklch(47.4227% 0.317525 267.943/0.4)` |
| `--base_lotus-alpha_lotus-alpha600` | `oklch(43.9288% 0.28468 272.03/0.6196)` |
| `--base_lotus-alpha_lotus-alpha700` | `oklch(41.1366% 0.26315 273.776/0.6902)` |
| `--base_lotus-alpha_lotus-alpha800` | `oklch(36.9121% 0.2325 275.965/0.7608)` |
| `--base_lotus-alpha_lotus-alpha900` | `oklch(32.7223% 0.203609 277.78/0.8196)` |
| `--base_lotus_lotus100` | `oklch(96.8802% 0.01754 290.496)` |
| `--base_lotus_lotus1000` | `oklch(33.0828% 0.154098 289.737)` |
| `--base_lotus_lotus300` | `oklch(92.6894% 0.04135 289.364)` |
| `--base_lotus_lotus400` | `oklch(87.0729% 0.074924 290.072)` |
| `--base_lotus_lotus50` | `oklch(98.3984% 0.008704 286.239)` |
| `--base_lotus_lotus500` | `oklch(74.1657% 0.155654 289.383)` |
| `--base_lotus_lotus75` | `oklch(96.7501% 0.01796 299.162)` |
| `--base_lotus_lotus900` | `oklch(42.696% 0.188405 289.067)` |
| `--base_orange-alpha_orange-alpha100` | `oklch(68.7144% 0.260162 36.753/0.0784)` |
| `--base_orange-alpha_orange-alpha1000` | `oklch(34.6663% 0.118352 42.007)` |
| `--base_orange-alpha_orange-alpha200` | `oklch(68.7122% 0.260229 36.807/0.1216)` |
| `--base_orange-alpha_orange-alpha300` | `oklch(68.7144% 0.260162 36.753/0.1804)` |
| `--base_orange-alpha_orange-alpha400` | `oklch(68.7144% 0.260162 36.753/0.3294)` |
| `--base_orange-alpha_orange-alpha50` | `oklch(68.906% 0.258341 37.07/0.0392)` |
| `--base_orange-alpha_orange-alpha500` | `oklch(67.4% 0.256333 36.615/0.6196)` |
| `--base_orange-alpha_orange-alpha600` | `oklch(63.3713% 0.237016 37.387/0.7882)` |
| `--base_orange-alpha_orange-alpha700` | `oklch(60.8673% 0.219479 39.15/0.902)` |
| `--base_orange-alpha_orange-alpha800` | `oklch(56.33% 0.192745 41.884)` |
| `--base_orange-alpha_orange-alpha900` | `oklch(48.1868% 0.164419 42.038)` |
| `--base_orange_orange100` | `oklch(96.854% 0.020945 40.743)` |
| `--base_orange_orange1000` | `oklch(34.6663% 0.118352 42.007)` |
| `--base_orange_orange200` | `oklch(95.5096% 0.030369 41.831)` |
| `--base_orange_orange300` | `oklch(92.8836% 0.048937 41.25)` |
| `--base_orange_orange400` | `oklch(87.5489% 0.089752 42.283)` |
| `--base_orange_orange50` | `oklch(98.4208% 0.010394 40.732)` |
| `--base_orange_orange500` | `oklch(76.9607% 0.170293 41.759)` |
| `--base_orange_orange600` | `oklch(69.0745% 0.1996 42.13)` |
| `--base_orange_orange700` | `oklch(63.7282% 0.204285 42.232)` |
| `--base_orange_orange75` | `oklch(96.9464% 0.019184 48.1)` |
| `--base_orange_orange800` | `oklch(56.33% 0.192745 41.884)` |
| `--base_orange_orange900` | `oklch(48.1868% 0.164419 42.038)` |
| `--base_pink-alpha_pink-alpha100` | `oklch(65.1202% 0.296628 24.407/0.0588)` |
| `--base_pink-alpha_pink-alpha1000` | `oklch(30.4042% 0.137145 10.241/0.9216)` |
| `--base_pink-alpha_pink-alpha200` | `oklch(65.145% 0.296377 24.262/0.0902)` |
| `--base_pink-alpha_pink-alpha300` | `oklch(65.1141% 0.296747 24.206/0.1294)` |
| `--base_pink-alpha_pink-alpha400` | `oklch(65.1642% 0.296433 23.294/0.2392)` |
| `--base_pink-alpha_pink-alpha50` | `oklch(65.1356% 0.296443 24.435/0.0314)` |
| `--base_pink-alpha_pink-alpha500` | `oklch(63.7251% 0.289006 20.945/0.4588)` |
| `--base_pink-alpha_pink-alpha600` | `oklch(58.3133% 0.263747 18.798/0.6)` |
| `--base_pink-alpha_pink-alpha700` | `oklch(54.3663% 0.245515 17.095/0.6784)` |
| `--base_pink-alpha_pink-alpha800` | `oklch(48.2353% 0.217604 15.406/0.7608)` |
| `--base_pink-alpha_pink-alpha900` | `oklch(41.4244% 0.18679 14.023/0.8314)` |
| `--base_pink_pink100` | `oklch(96.9128% 0.020947 4.21)` |
| `--base_pink_pink1000` | `oklch(35.2032% 0.134487 5.468)` |
| `--base_pink_pink200` | `oklch(95.6545% 0.02919 7.75)` |
| `--base_pink_pink300` | `oklch(93.0495% 0.048114 6.172)` |
| `--base_pink_pink400` | `oklch(87.7909% 0.088541 5.973)` |
| `--base_pink_pink50` | `oklch(98.3602% 0.011233 1.119)` |
| `--base_pink_pink500` | `oklch(77.4651% 0.16922 5.693)` |
| `--base_pink_pink600` | `oklch(69.5726% 0.199334 5.735)` |
| `--base_pink_pink800` | `oklch(56.9426% 0.19807 5.764)` |
| `--base_pink_pink900` | `oklch(48.8159% 0.179129 5.704)` |
| `--base_red-alpha_red-alpha100` | `oklch(65.1246% 0.296483 29.388/0.0588)` |
| `--base_red-alpha_red-alpha1000` | `oklch(30.4453% 0.138812 23.981/0.9216)` |
| `--base_red-alpha_red-alpha200` | `oklch(65.1513% 0.296164 29.318/0.0902)` |
| `--base_red-alpha_red-alpha300` | `oklch(65.0844% 0.296931 29.314/0.1412)` |
| `--base_red-alpha_red-alpha400` | `oklch(65.0312% 0.297525 29.216/0.251)` |
| `--base_red-alpha_red-alpha50` | `oklch(65.1487% 0.296203 29.373/0.0314)` |
| `--base_red-alpha_red-alpha500` | `oklch(64.4871% 0.297525 28.987/0.4588)` |
| `--base_red-alpha_red-alpha600` | `oklch(59.0287% 0.272098 28.379/0.6)` |
| `--base_red-alpha_red-alpha700` | `oklch(54.8587% 0.252576 27.969/0.6706)` |
| `--base_red-alpha_red-alpha800` | `oklch(48.5504% 0.22309 27.259/0.7608)` |
| `--base_red-alpha_red-alpha900` | `oklch(41.5978% 0.190661 26.291/0.8314)` |
| `--base_red_red100` | `oklch(97.0022% 0.01915 20.54)` |
| `--base_red_red1000` | `oklch(35.094% 0.134924 19.85)` |
| `--base_red_red200` | `oklch(95.5342% 0.028908 19.24)` |
| `--base_red_red300` | `oklch(93.0169% 0.04606 20.293)` |
| `--base_red_red400` | `oklch(87.5812% 0.08584 19.441)` |
| `--base_red_red50` | `oklch(98.4809% 0.009576 24.737)` |
| `--base_red_red500` | `oklch(77.2897% 0.169545 19.991)` |
| `--base_red_red600` | `oklch(69.3563% 0.199049 19.763)` |
| `--base_red_red700` | `oklch(64.1359% 0.205651 19.764)` |
| `--base_red_red75` | `oklch(97.0625% 0.019157 11.848)` |
| `--base_red_red800` | `oklch(56.7885% 0.197722 20.261)` |
| `--base_red_red900` | `oklch(48.5904% 0.177809 20.09)` |
| `--base_white_white-alpha10` | `oklch(100% 0 0/0.102)` |
| `--base_white_white-alpha15` | `oklch(100% 0 0/0.149)` |
| `--base_white_white-alpha20` | `oklch(100% 0 0/0.2)` |
| `--base_white_white-alpha40` | `oklch(100% 0 0/0.4)` |
| `--base_white_white-alpha5` | `oklch(100% 0 0/0.051)` |
| `--base_white_white-alpha50` | `oklch(100% 0 0/0.502)` |
| `--base_white_white-alpha80` | `oklch(100% 0 0/0.8)` |
| `--base_white_white-alpha85` | `oklch(100% 0 0/0.851)` |
| `--base_yellow-alpha_yellow-alpha100` | `oklch(73.6404% 0.223083 49.297/0.102)` |
| `--base_yellow-alpha_yellow-alpha1000` | `oklch(34.088% 0.091641 59.681)` |
| `--base_yellow-alpha_yellow-alpha200` | `oklch(73.6404% 0.223083 49.297/0.149)` |
| `--base_yellow-alpha_yellow-alpha300` | `oklch(73.5022% 0.224079 49.017/0.2314)` |
| `--base_yellow-alpha_yellow-alpha400` | `oklch(73.6365% 0.223284 49.397/0.4196)` |
| `--base_yellow-alpha_yellow-alpha50` | `oklch(73.5022% 0.224079 49.017/0.051)` |
| `--base_yellow-alpha_yellow-alpha500` | `oklch(74.1822% 0.220182 50.96/0.6588)` |
| `--base_yellow-alpha_yellow-alpha600` | `oklch(74.3799% 0.198171 60.645)` |
| `--base_yellow-alpha_yellow-alpha700` | `oklch(68.2323% 0.182033 60.5)` |
| `--base_yellow-alpha_yellow-alpha800` | `oklch(57.967% 0.155256 60.077)` |
| `--base_yellow-alpha_yellow-alpha900` | `oklch(51.0937% 0.135999 60.749)` |
| `--base_yellow_yellow100` | `oklch(96.8914% 0.024711 60.872)` |
| `--base_yellow_yellow1000` | `oklch(34.088% 0.091641 59.681)` |
| `--base_yellow_yellow200` | `oklch(95.467% 0.036713 61.591)` |
| `--base_yellow_yellow300` | `oklch(92.7213% 0.058923 60.115)` |
| `--base_yellow_yellow400` | `oklch(87.3725% 0.107283 61.005)` |
| `--base_yellow_yellow50` | `oklch(98.3317% 0.012796 58.759)` |
| `--base_yellow_yellow500` | `oklch(81.4515% 0.164079 60.746)` |
| `--base_yellow_yellow600` | `oklch(74.3799% 0.198171 60.645)` |
| `--base_yellow_yellow700` | `oklch(68.2323% 0.182033 60.5)` |
| `--base_yellow_yellow75` | `oklch(96.7839% 0.027975 77.721)` |
| `--base_yellow_yellow800` | `oklch(57.967% 0.155256 60.077)` |
| `--base_yellow_yellow900` | `oklch(51.0937% 0.135999 60.749)` |
| `--brand_error_system-error` | `oklch(64.1359% 0.205651 19.764)` |
| `--brand_error_system-error-active` | `oklch(56.7885% 0.197722 20.261)` |
| `--brand_error_system-error-bg` | `oklch(97.0022% 0.01915 20.54)` |
| `--brand_error_system-error-bg-hover` | `oklch(95.5342% 0.028908 19.24)` |
| `--brand_error_system-error-hover` | `oklch(69.3563% 0.199049 19.763)` |
| `--brand_error_system-error-outline` | `oklch(87.5812% 0.08584 19.441)` |
| `--brand_error_system-error-outline-hover` | `oklch(77.2897% 0.169545 19.991)` |
| `--brand_error_system-error-text` | `oklch(56.7885% 0.197722 20.261)` |
| `--brand_error_system-error-text-active` | `oklch(35.094% 0.134924 19.85)` |
| `--brand_error_system-error-text-hover` | `oklch(56.7885% 0.197722 20.261)` |
| `--brand_info_system-info` | `oklch(62.2521% 0.194838 261.896)` |
| `--brand_info_system-info-active` | `oklch(55.0765% 0.188247 262.045)` |
| `--brand_info_system-info-bg` | `oklch(96.6458% 0.017375 263.246)` |
| `--brand_info_system-info-bg-hover` | `oklch(95.145% 0.025255 263.931)` |
| `--brand_info_system-info-hover` | `oklch(67.5174% 0.185344 261.736)` |
| `--brand_info_system-info-outline` | `oklch(86.6321% 0.07163 262.557)` |
| `--brand_info_system-info-outline-hover` | `oklch(75.463% 0.136462 261.986)` |
| `--brand_info_system-info-text` | `oklch(55.0765% 0.188247 262.045)` |
| `--brand_info_system-info-text-active` | `oklch(34.065% 0.129215 262.062)` |
| `--brand_info_system-info-text-hover` | `oklch(55.0765% 0.188247 262.045)` |
| `--brand_link_link-disabled` | `oklch(74.1657% 0.155654 289.383)` |
| `--brand_logo_logo-color` | `oklch(51.6379% 0.264359 287.735)` |
| `--brand_primary_primary-bg` | `oklch(96.8802% 0.01754 290.496)` |
| `--brand_primary_primary-bg-light` | `oklch(98.3984% 0.008704 286.239)` |
| `--brand_primary_primary-disabled` | `oklch(74.1657% 0.155654 289.383)` |
| `--brand_primary_primary-outline` | `oklch(87.0729% 0.074924 290.072)` |
| `--brand_primary_primary-outline-light` | `oklch(92.6894% 0.04135 289.364)` |
| `--brand_primary_primary-text` | `oklch(42.696% 0.188405 289.067)` |
| `--brand_primary_primary-text-active` | `oklch(33.0828% 0.154098 289.737)` |
| `--brand_primary_primary100` | `oklch(96.8802% 0.01754 290.496)` |
| `--brand_primary_primary1000` | `oklch(33.0828% 0.154098 289.737)` |
| `--brand_primary_primary300` | `oklch(92.6894% 0.04135 289.364)` |
| `--brand_primary_primary400` | `oklch(87.0729% 0.074924 290.072)` |
| `--brand_primary_primary50` | `oklch(98.3984% 0.008704 286.239)` |
| `--brand_primary_primary500` | `oklch(74.1657% 0.155654 289.383)` |
| `--brand_primary_primary75` | `oklch(96.8802% 0.01754 290.496)` |
| `--brand_primary_primary900` | `oklch(42.696% 0.188405 289.067)` |
| `--brand_secondary_secondary` | `oklch(63.7282% 0.204285 42.232)` |
| `--brand_secondary_secondary-active` | `oklch(56.33% 0.192745 41.884)` |
| `--brand_secondary_secondary-bg` | `oklch(96.854% 0.020945 40.743)` |
| `--brand_secondary_secondary-bg-hover` | `oklch(95.5096% 0.030369 41.831)` |
| `--brand_secondary_secondary-bg-light` | `oklch(98.4208% 0.010394 40.732)` |
| `--brand_secondary_secondary-disabled` | `oklch(76.9607% 0.170293 41.759)` |
| `--brand_secondary_secondary-hover` | `oklch(69.0745% 0.1996 42.13)` |
| `--brand_secondary_secondary-outline` | `oklch(87.5489% 0.089752 42.283)` |
| `--brand_secondary_secondary-outline-light` | `oklch(92.8836% 0.048937 41.25)` |
| `--brand_secondary_secondary-text` | `oklch(48.1868% 0.164419 42.038)` |
| `--brand_secondary_secondary-text-active` | `oklch(34.6663% 0.118352 42.007)` |
| `--brand_secondary_secondary-text-hover` | `oklch(56.33% 0.192745 41.884)` |
| `--brand_secondary_secondary100` | `oklch(96.854% 0.020945 40.743)` |
| `--brand_secondary_secondary1000` | `oklch(34.6663% 0.118352 42.007)` |
| `--brand_secondary_secondary200` | `oklch(95.5096% 0.030369 41.831)` |
| `--brand_secondary_secondary300` | `oklch(92.8836% 0.048937 41.25)` |
| `--brand_secondary_secondary400` | `oklch(87.5489% 0.089752 42.283)` |
| `--brand_secondary_secondary50` | `oklch(98.4208% 0.010394 40.732)` |
| `--brand_secondary_secondary500` | `oklch(76.9607% 0.170293 41.759)` |
| `--brand_secondary_secondary600` | `oklch(69.0745% 0.1996 42.13)` |
| `--brand_secondary_secondary700` | `oklch(63.7282% 0.204285 42.232)` |
| `--brand_secondary_secondary75` | `oklch(96.854% 0.020945 40.743)` |
| `--brand_secondary_secondary800` | `oklch(56.33% 0.192745 41.884)` |
| `--brand_secondary_secondary900` | `oklch(48.1868% 0.164419 42.038)` |
| `--brand_success_system-success` | `oklch(59.31% 0.194241 153.823)` |
| `--brand_success_system-success-active` | `oklch(52.311% 0.183878 153.772)` |
| `--brand_success_system-success-bg` | `oklch(96.3965% 0.020944 151.614)` |
| `--brand_success_system-success-bg-hover` | `oklch(94.7804% 0.033019 153.894)` |
| `--brand_success_system-success-hover` | `oklch(64.8232% 0.190252 153.691)` |
| `--brand_success_system-success-outline` | `oklch(85.593% 0.097734 153.665)` |
| `--brand_success_system-success-outline-hover` | `oklch(73.3761% 0.163406 153.561)` |
| `--brand_success_system-success-text` | `oklch(52.311% 0.183878 153.772)` |
| `--brand_success_system-success-text-active` | `oklch(32.1894% 0.112853 153.892)` |
| `--brand_success_system-success-text-hover` | `oklch(52.311% 0.183878 153.772)` |
| `--brand_warning_system-warning` | `oklch(68.2323% 0.182033 60.5)` |
| `--brand_warning_system-warning-active` | `oklch(57.967% 0.155256 60.077)` |
| `--brand_warning_system-warning-bg` | `oklch(96.8914% 0.024711 60.872)` |
| `--brand_warning_system-warning-bg-hover` | `oklch(95.467% 0.036713 61.591)` |
| `--brand_warning_system-warning-hover` | `oklch(74.3799% 0.198171 60.645)` |
| `--brand_warning_system-warning-outline` | `oklch(87.3725% 0.107283 61.005)` |
| `--brand_warning_system-warning-outline-hover` | `oklch(81.4515% 0.164079 60.746)` |
| `--brand_warning_system-warning-text` | `oklch(57.967% 0.155256 60.077)` |
| `--brand_warning_system-warning-text-active` | `oklch(34.088% 0.091641 59.681)` |
| `--brand_warning_system-warning-text-hover` | `oklch(57.967% 0.155256 60.077)` |
| `--business_coupon_coupon-bg01` | `oklch(39.6062% 0.051064 33.954)` |
| `--business_coupon_coupon-bg02` | `oklch(40.8389% 0.113953 14.895)` |
| `--business_coupon_coupon-bg03` | `oklch(54.3304% 0.125285 14.442)` |
| `--business_coupon_coupon-bg04` | `oklch(61.7032% 0.097164 18.617)` |
| `--business_coupon_coupon-bg05` | `oklch(57.1527% 0.031175 41.597)` |
| `--business_coupon_coupon-bg06` | `oklch(52.8402% 0.076307 49.584)` |
| `--business_coupon_coupon-bg07` | `oklch(55.5897% 0.107459 46.613)` |
| `--business_coupon_coupon-bg08` | `oklch(62.4151% 0.122061 60.052)` |
| `--business_coupon_coupon-bg09` | `oklch(64.8667% 0.114688 70.824)` |
| `--business_coupon_coupon-bg10` | `oklch(61.4514% 0.070645 71.739)` |
| `--business_coupon_coupon-bg11` | `oklch(56.6926% 0.134641 95.164)` |
| `--business_coupon_coupon-bg12` | `oklch(49.1876% 0.104335 128.374)` |
| `--business_coupon_coupon-bg13` | `oklch(53.5732% 0.120193 159.844)` |
| `--business_coupon_coupon-bg14` | `oklch(46.0785% 0.072568 206.569)` |
| `--business_coupon_coupon-bg15` | `oklch(39.9963% 0.049028 194.299)` |
| `--business_coupon_coupon-bg16` | `oklch(59.1597% 0.035582 243.342)` |
| `--business_coupon_coupon-bg17` | `oklch(56.1442% 0.073691 217.064)` |
| `--business_coupon_coupon-bg18` | `oklch(46.2679% 0.098638 257.526)` |
| `--business_coupon_coupon-bg19` | `oklch(41.366% 0.129682 276.378)` |
| `--business_coupon_coupon-bg20` | `oklch(38.0278% 0.030625 232.109)` |
| `--business_coupon_coupon-bg21` | `oklch(25.7986% 0.020325 290.217)` |
| `--business_coupon_coupon-bg22` | `oklch(42.5584% 0.134498 293.284)` |
| `--business_coupon_coupon-bg23` | `oklch(53.0474% 0.141013 316.391)` |
| `--business_coupon_coupon-bg24` | `oklch(58.0494% 0.12001 345.448)` |
| `--business_coupon_coupon-bg25` | `oklch(60.9934% 0.079552 232.679)` |
| `--business_global-navigation_gnb-menu-item-level01` | `oklch(20.8693% 0.030906 258.446)` |
| `--business_global-navigation_gnb-menu-item-level02` | `oklch(18.7316% 0.02618 261.871)` |
| `--business_global-navigation_gnb-menu-item-level03` | `oklch(15.4537% 0.017156 237.102)` |
| `--collection-coupon-disabled-background` | `#4a4e5a` |
| `--customer_anchor-navigation_anchor-nav-bg` | `oklch(96.7772% 0.002912 286.345/0.702)` |
| `--customer_bottom-navigation_bottom-navi-icon-enabled` | `oklch(20.9066% 0.091351 260.076/0.3412)` |
| `--customer_button_button-shadow-error` | `oklch(65.3231% 0.225249 21.347/0.1216)` |
| `--customer_button_button-shadow-neutral` | `oklch(24.2997% 0.022695 260.518/0.0784)` |
| `--customer_button_button-shadow-primary` | `oklch(54.9176% 0.211133 290.923/0.1216)` |
| `--customer_button_button-text-disabled` | `oklch(20.9066% 0.091351 260.076/0.3412)` |
| `--customer_button_kakao-button-bg` | `oklch(91.3295% 0.220757 101.08)` |
| `--customer_check_check-box-bg-selected` | `oklch(0% 0 0/0.902)` |
| `--customer_message-box_message-box-bg-basic` | `oklch(100% 0 0/0.8)` |
| `--customer_message-box_message-box-bg-primary` | `oklch(96.8802% 0.01754 290.496)` |
| `--customer_message-box_message-box-bg-secondary` | `oklch(96.854% 0.020945 40.743)` |
| `--customer_message-box_message-box-outline-primary` | `oklch(87.0729% 0.074924 290.072)` |
| `--customer_message-box_message-box-outline-secondary` | `oklch(87.5489% 0.089752 42.283)` |
| `--customer_page-header_page-header-bg-blurred` | `oklch(100% 0 0/0.502)` |
| `--customer_popover_popover-bg-inversion` | `oklch(21.7787% 0 0)` |
| `--customer_product-list-item_product-list-price-origin` | `oklch(20.9066% 0.091351 260.076/0.3412)` |
| `--customer_progress_progress-track` | `oklch(54.871% 0.231884 289.473/0.102)` |
| `--customer_snackbar_snackbar-bg` | `oklch(21.7787% 0 0)` |
| `--customer_snackbar_snackbar-success` | `oklch(59.31% 0.194241 153.823)` |
| `--customer_tab-bar_tab-bar-bg-blurred` | `oklch(100% 0 0/0.8)` |
| `--customer_tooltip_tooltip-bg-inversion` | `oklch(21.7787% 0 0)` |
| `--customer_tooltip_tooltip-bg-light` | `oklch(100% 0 0/0.851)` |
| `--domain_brand-home_brand-home-gradient-no-image` | `oklch(85.7611% 0.012703 266.954)` |
| `--domain_collection_luck-queen-gold` | `oklch(83.9441% 0.104489 83.298)` |
| `--domain_collection_promotion-product-list-price-discount` | `oklch(63.7282% 0.204285 42.232)` |
| `--domain_home_meot-deal-bg-title` | `oklch(100% 0 0/0.851)` |
| `--domain_home_vertical-chip-bg-beauty` | `oklch(24.5368% 0.075064 9.323/0.149)` |
| `--domain_home_vertical-chip-bg-default` | `oklch(0% 0 0/0.1216)` |
| `--domain_home_vertical-chip-bg-living` | `oklch(23.8081% 0.070761 50.858/0.149)` |
| `--domain_home_vertical-chip-bg-men` | `oklch(25.68% 0.100435 258.273/0.2118)` |
| `--domain_home_vertical-chip-bg-special-price` | `oklch(24.0524% 0.065898 293.751/0.149)` |
| `--domain_home_vertical-chip-bg-women` | `oklch(25.68% 0.100435 258.273/0.2118)` |
| `--domain_home_vertical-chip-on-text-beauty` | `oklch(52.0899% 0.199112 12.725)` |
| `--domain_home_vertical-chip-on-text-living` | `oklch(46.5001% 0.16721 39.052)` |
| `--domain_home_vertical-chip-on-text-men` | `oklch(45.4813% 0.154237 269.873)` |
| `--domain_home_vertical-chip-on-text-special-price` | `oklch(45.6614% 0.155182 291.476)` |
| `--domain_home_vertical-tab-bg-beauty` | `oklch(65.4111% 0.180759 7.445/0.8)` |
| `--domain_home_vertical-tab-bg-living` | `oklch(77.9154% 0.162544 64.216/0.8)` |
| `--domain_home_vertical-tab-bg-men` | `oklch(18.843% 0.072433 251.943/0.8)` |
| `--domain_home_vertical-tab-bg-special-price` | `oklch(69.4498% 0.128006 296.014/0.8)` |
| `--domain_home_vertical-tab-bg-women` | `oklch(87.9342% 0.021086 293.528/0.8)` |
| `--domain_payment_e-pay-bg-bc` | `oklch(63.4296% 0.241894 23.41)` |
| `--domain_payment_e-pay-bg-hana` | `oklch(54.956% 0.135075 180.076)` |
| `--domain_payment_e-pay-bg-hyundai` | `oklch(35.867% 0.011215 285.821)` |
| `--domain_payment_e-pay-bg-kakao` | `oklch(89.5866% 0.215914 100.818)` |
| `--domain_payment_e-pay-bg-kb` | `oklch(49.9085% 0.024638 79.921)` |
| `--domain_payment_e-pay-bg-lotte` | `oklch(34.7577% 0.01023 63.186)` |
| `--domain_payment_e-pay-bg-nh` | `oklch(82.9751% 0.194888 79.097)` |
| `--domain_payment_e-pay-bg-samsung` | `oklch(43.4127% 0.164574 252.158)` |
| `--domain_payment_e-pay-bg-shinhan` | `oklch(51.3512% 0.163239 243.506)` |
| `--domain_payment_e-pay-bg-woori` | `oklch(58.2608% 0.165548 236.534)` |
| `--neutral_bg_bg-blurred` | `oklch(100% 0 0/0.502)` |
| `--neutral_bg_bg-inversion` | `oklch(21.7787% 0 0)` |
| `--neutral_control_control-item-bg-active` | `oklch(96.8802% 0.01754 290.496)` |
| `--neutral_dim_dim-screen` | `oklch(0% 0 0/0.702)` |
| `--neutral_dim_gradient-dim-end` | `oklch(0% 0 0/0.502)` |
| `--neutral_dim_gradient-dim-end-light` | `oklch(0% 0 0/0.251)` |
| `--neutral_fill_fill-quaternary` | `oklch(38.2321% 0.058703 263.968/0.0314)` |
| `--neutral_pressable_pressable-dim` | `oklch(0% 0 0/0.0314)` |
| `--neutral_pressable_pressable-dim-darker` | `oklch(0% 0 0/0.1216)` |
| `--neutral_pressable_pressable-dim-error` | `oklch(65.3231% 0.225249 21.347/0.1216)` |
| `--neutral_pressable_pressable-dim-primary` | `oklch(54.871% 0.231884 289.473/0.1216)` |
| `--neutral_pressable_pressable-highlight` | `oklch(100% 0 0/0.1216)` |
| `--neutral_shadow_basic_shadow100` | `oklch(24.2997% 0.022695 260.518/0.0902)` |
| `--neutral_shadow_basic_shadow200` | `oklch(24.2997% 0.022695 260.518/0.1216)` |
| `--neutral_shadow_basic_shadow300` | `oklch(24.2997% 0.022695 260.518/0.149)` |
| `--neutral_shadow_basic_shadow400` | `oklch(24.2997% 0.022695 260.518/0.1804)` |
| `--neutral_shadow_basic_shadow50` | `oklch(24.2997% 0.022695 260.518/0.0784)` |
| `--neutral_shadow_basic_shadow500` | `oklch(24.2997% 0.022695 260.518/0.2196)` |
| `--neutral_shadow_basic_shadow600` | `oklch(24.2997% 0.022695 260.518/0.2392)` |
| `--neutral_shadow_basic_shadow700` | `oklch(24.2997% 0.022695 260.518/0.3216)` |
| `--neutral_shadow_basic_shadow800` | `oklch(24.2997% 0.022695 260.518/0.349)` |
| `--neutral_shadow_basic_shadow900` | `oklch(24.2997% 0.022695 260.518/0.4)` |
| `--neutral_shadow_elevation_elevation-narrow100` | `oklch(24.2997% 0.022695 260.518/0.0784)` |
| `--neutral_shadow_elevation_elevation-narrow200` | `oklch(24.2997% 0.022695 260.518/0.0784)` |
| `--neutral_shadow_elevation_elevation-narrow300` | `oklch(24.2997% 0.022695 260.518/0.0784)` |
| `--neutral_shadow_elevation_elevation-narrow400` | `oklch(24.2997% 0.022695 260.518/0.0784)` |
| `--neutral_shadow_elevation_elevation-strong` | `oklch(24.2997% 0.022695 260.518/0.2)` |
| `--neutral_shadow_elevation_elevation-weak` | `oklch(24.2997% 0.022695 260.518/0.102)` |
| `--neutral_shadow_elevation_elevation-wide100` | `oklch(24.2997% 0.022695 260.518/0.1608)` |
| `--neutral_shadow_elevation_elevation-wide200` | `oklch(24.2997% 0.022695 260.518/0.1608)` |
| `--neutral_shadow_elevation_elevation-wide300` | `oklch(24.2997% 0.022695 260.518/0.1608)` |
| `--neutral_shadow_elevation_elevation-wide400` | `oklch(24.2997% 0.022695 260.518/0.1608)` |
| `--neutral_text_text-accent-secondary` | `oklch(56.33% 0.192745 41.884)` |
| `--neutral_text_text-disabled` | `oklch(20.9066% 0.091351 260.076/0.3412)` |

### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #714fd8 → #754ee4; #7d8597 → #7c8597; #292c31 → #282c35; #aaafbb → #a8afbe; #603ec5 → #633bc8; #edeef0 → #eeeff2. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

Name correction in this earlier wording (2026-11-22): it calls #642fe9 `primary`, the brand colour or the identity anchor. The token `primary` now names #754ee4, the colour the storefront declares and paints. #642fe9 is the app icon’s colour: it is described under Color Palette & Roles and is no longer a token.

#### Primary
- **Queenit Purple** (`#642fe9`): The brand color — the vivid electric purple of the app icon (white "Q" on purple). Used as the identity anchor and primary brand accent.
- **Sale Purple** (`#714fd8`): The live commerce accent. Set on discount-rate percentages at 16px / weight 600 — the most frequently repeated colored element on the storefront.
- **Accent Purple** (`#603ec5`): A deeper purple for links, active emphasis, and interactive text.

#### Accent
- **Highlight Pink** (`#e54d76`): Secondary accent for emphasis tags and highlight labels.

#### Text Hierarchy
- **Ink Black** (`#000000`): Primary text — product titles, prices, nav labels.
- **Slate** (`#292c31`): Input text and strong secondary labels.
- **Muted Grey** (`#aaafbb`): Tertiary text, inactive tabs, low-emphasis metadata.
- **Muted Alt** (`#7d8597`): Alternate muted grey for captions and fine print.

#### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, chip backgrounds, text on purple/dark.
- **Surface Grey** (`#edeef0`): Cool-grey fill for image placeholders and loading skeletons.
- **Surface Alt** (`#f2f3f5`): A lighter secondary grey for alternating blocks.
- **Hairline** (`#e2e2e8`): Thin borders and dividers — the primary separation device.
- **On Primary** (`#ffffff`): Text/icon color used on purple and dark overlay surfaces.

#### Corporate (rapportlabs.kr)
- **Corp Ink** (`#393838`): Near-black body text on the parent company site.
- **Corp Yellow** (`#ffcb27`): The single warm accent on the corporate/recruiting surface — highlights and callouts.

#### Earlier machine fields

- tokens.note: "primary = app-icon brand purple (#642fe9); live commerce UI uses a sale-purple (#714fd8) for discount-rate % and a deeper accent-purple (#603ec5) for emphasis; pink (#e54d76) is the secondary accent. Parent corporate site (rapportlabs.kr) runs a separate near-black ink (#393838) + yellow (#ffcb27) system."
- tokens.colors.pink: "#e54d76"
- tokens.colors.surface-alt: "#f2f3f5"
- tokens.colors.hairline: "#e2e2e8"
- tokens.colors.corp-ink: "#393838"
- tokens.colors.corp-yellow: "#ffcb27"

## Typography

### Font Family

**Live-loaded:** Pretendard 400, 500 and 600 on the product, category and search surfaces; home additionally loads 700. These are the only exported face and weights. At 390×844, the browser reports Pretendard at the front of the declared body, button and product h1 stack.

**Official product use:** no opened prose source names a chosen product typeface. The first-party CSS documents implementation use of Pretendard; this is separate from a company statement explaining its selection.

**Official distributed assets:** the storefront-linked stylesheet declares Pretendard weights 100–900 with `font-display:swap`, local face names, and `static.queenit.kr/fonts/pretendard/woff2-subset/…` and `woff-subset/…` URLs. The capture's stylesheet walker cannot read that cross-origin sheet; its text was opened separately. Loaded-face status does not establish which local or network source resolved. No font file or licence document was downloaded.

**Declared-only:** Pretendard 100, 200, 300, 800 and 900 are declared in that stylesheet but absent from the loaded-face lists. The named fallback stack is also declaration evidence only. These faces receive no specimen and no exported family entry.

**Unresolved:** the earlier corporate Noto Sans Korean face and the rationale attributed to Pretendard were not re-measured or officially confirmed. Substitute: none chosen.

### Hierarchy

All rows below are measured at 390×844; a control root's inherited 16px/400 is distinct from its visible child label.

| Current element | Size / weight | Evidence |
|---|---|---|
| Home paragraph | 16px / 400 | Five paragraph characters; largest paragraph count |
| Product h1 | 18px / 500 | 25 heading characters |
| Product additional headings | 18px / 600 | 16 heading characters |
| Listing h2 | 20px / 600 | Six heading characters |
| Home headings | 18px / 700 | 27 heading characters |
| Purchase / information button | 16px / 600 | 20px line height |
| Recommendation-more button | 14px / 600 | 18.004px line height; published token name `promo` retained |
| Selected fashion-chip label | 13px / 600 | Root remains 16px / 400 |
| Bottom-home label | 11px / 600 | Root remains 16px / 400 |
| Search input | 16px / 500 | 20px line height; token `input-lg` |
| Listing sort action | 14px / 500 | Published name `input` retained for this unchanged numeric value; not the phone input |
| Review all-items action | 12px / 600 | 15.996px line height |
| AD action | 12px / 500 | 15.996px line height |
| First-card campaign badge | 11px / 500 | Visible child label, not product title |

### Principles

The official accessibility article states that smaller type should expand more and larger type less. It also documents shared token-based text components such as `BodyMedium` and `LabelLarge`. This supports preserving semantic text roles when building in this style; OS text-size changes were not tested in the browser capture.

### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

#### Font Family
- **Product**: `Pretendard` (with the platform hangul stack — `Apple SD Gothic Neo`, `Malgun Gothic`, `Noto Sans KR`). The de-facto Korean product font; used for all storefront UI.
- **Corporate**: `Noto Sans Korean` for body copy on rapportlabs.kr, with `Pretendard` Bold reserved for the large corporate headlines.

#### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Corporate Headline | Pretendard | 38px (2.38rem) | 700 | 1.50 | rapportlabs.kr section heads |
| Discount % | Pretendard | 16px (1.00rem) | 600 | normal | Sale-purple discount-rate on cards |
| Body / Nav | Pretendard | 16px (1.00rem) | 400 | normal | Product UI text, category-nav labels |
| Promo Label | Pretendard | 14px (0.88rem) | 600 | normal | White overlay text on banner images |
| Corporate Body | Noto Sans Korean | 14px (0.88rem) | 400 | 1.57 (22px) | rapportlabs.kr paragraph copy |
| Search Input | Pretendard | 14px (0.88rem) | 500 | normal | Search field text |

#### Principles
- **Pretendard owns the storefront**: every shopper-facing label, price, and nav item is Pretendard — dense, legible hangul at comfortable touch sizes.
- **Weight as emphasis, not size**: prices and discount rates jump to weight 600 rather than ballooning in size, keeping product rows scannable.
- **Generous reading size for the audience**: body/nav sits at 16px (larger than a typical 14px product app) — a deliberate legibility choice for a 40s–50s user base.
- **Two surfaces, two fonts**: the product app is Pretendard; the corporate site pairs Pretendard Bold headlines with Noto Sans Korean body — the systems never blend.

#### Earlier machine fields

- tokens.typography.family.corp: "Noto Sans Korean"
- tokens.typography.display.lineHeight: 1.5
- tokens.typography.discount.use: "Discount-rate percentage on product cards, Pretendard SemiBold"
- tokens.typography.body.use: "Product UI text and category-nav labels, Pretendard"
- tokens.typography.promo.use: "Promo overlay labels on banner images, Pretendard"
- tokens.typography.caption.size: 14
- tokens.typography.caption.weight: 400
- tokens.typography.caption.lineHeight: 1.57
- tokens.typography.caption.use: "Corporate body copy, Noto Sans Korean"

## Layout

### Spacing System

At 390×844, the recommendation-more button uses padding 10px 14px; the purchase button 13px 17px; the inner search input 0px 8px. These local measurements do not establish the earlier universal spacing scale.

### Grid & Container

The 390×844 search survey places card roots at x=16 and x=197, each 177px wide: a 4px horizontal gap and 16px outer margins. Home uses a horizontal recommendation rail with 111.3px roots and overflowing items. The category directory has a 129px-wide sticky sidebar. These observations are specific to the phone viewport.

### Whitespace Philosophy

The captured phone pages reserve broad white areas for merchandise images and place compact text below them. This is a visual reading of the screenshots, not a documented corporate philosophy.

### Border Radius Scale

At 390×844: `none: 0` on link/input roots; published `md: 6` on more/app-open buttons; published `base: 8` on purchase and expand-information buttons; `review-card: 12` on review anchors; published `lg: 16` on the home carousel-count link. The fully rounded chip uses 999px and the search sort chip 9999px; these local rounded-end values remain prose rather than a generalized numeric scale. The 28px floating control also remains prose. Percentage slider radii belong to hidden filter content and are not exported.

### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #edeef0 → #eeeff2. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

#### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 64px
- Notable: shortcut chips use a tight asymmetric 3.5px / 11.5px padding with a leading icon, keeping the chip rail compact while staying tappable

#### Grid & Container
- Mobile-first single column centered in a phone-width frame (the web storefront renders the app layout)
- Home is a vertical scroll of merchandising bands: a category-nav header, a shortcut-chip rail, banner carousels, and product grids
- Product grids are 2-up tiles with 16px-radius cards; prices and discount rates sit directly beneath each image
- Corporate site (rapportlabs.kr) uses a wide multi-section scroll with 38px headlines and generous vertical rhythm

#### Whitespace Philosophy
- **Merchandise-first**: chrome stays minimal so product photography dominates; white space frames imagery rather than decorating it
- **Flat segmentation**: bands separate by tinted surface (`#edeef0` / `#f2f3f5`) and `#e2e2e8` hairlines, not by shadow stacks
- **Dense but legible**: information-rich deal layouts kept readable by the 16px base size and consistent card rhythm

#### Border Radius Scale
- Tiny (4px): discount/price micro-tags
- Small (6px): inner controls
- Base (8px): shortcut chips, promo pills
- Large (16px): product cards and content containers — the workhorse
- Circle (50% / full): floating icon buttons, avatars

#### Earlier machine fields

- tokens.spacing.xs: 4
- tokens.spacing.sm: 8
- tokens.spacing.md: 12
- tokens.spacing.base: 16
- tokens.spacing.lg: 24
- tokens.spacing.xl: 32
- tokens.spacing.section: 64
- tokens.rounded.sm: 4
- tokens.rounded.full: 9999

### Responsive Behavior

#### Breakpoints

Only 390×844 was measured. No breakpoint values are verified.

#### Touch Targets

At 390×844: selected chip 34px high, search icon link 40×40px, bottom-home link 93.5×45.6px, purchase button 294×48px. The 222×20px inner input is not the enclosing field target.

#### Collapsing Strategy

At 390×844, the home has fixed top and bottom navigation; search/listing use sticky filters; the product has a fixed purchase bar. No cross-viewport collapsing behaviour was measured.

#### Image Behavior

The matched product's phone screenshot shows resolved merchandise photography and a photo rail. The exploratory sold-out product shows a broken image and alt text; that failure is not a designed loading treatment.

#### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #edeef0 → #eeeff2. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

##### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Native single-column app layout; 2-up product grid |
| Tablet | 640–1024px | Same centered phone-width frame, more side margin |
| Desktop | >1024px | Storefront stays phone-width centered; corporate site expands to full multi-section layout |

##### Touch Targets
- Shortcut chips at 45px height with leading icon — comfortable thumb targets
- Floating icon buttons at 42px circles
- Category-nav items spaced for touch within the header
- 16px base text size aids both readability and tap accuracy

##### Collapsing Strategy
- Home bands stack vertically and scroll; banner carousels swipe horizontally
- Product grids stay 2-up on phones; chip rails scroll horizontally when overflowing
- Corporate headlines (38px) scale down on narrow viewports, weight 700 maintained

##### Image Behavior
- Product and banner imagery uses 16px-radius framing; placeholders fall back to `#edeef0`
- Promo overlay text (`#ffffff` weight 600) sits on darkened image regions for contrast

## Elevation & Depth

All six chosen control roots have computed shadow `none` at 390×844. The measured press responses on the home chip and search icon use a black internal layer at opacity 0.03; the more button uses a pseudo-element with `oklch(0 0 0 / 0.0314)`. This is state feedback, not an elevation scale. Earlier chip/floating shadow recipes were not re-confirmed.

### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #edeef0 → #eeeff2. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, product rows, most surfaces |
| Tint (Level 1) | `#edeef0` background shift | Skeletons, image placeholders, section separation |
| Chip (Level 2) | `rgba(27,32,42,0.16) 0px 2px 6px -2px` | Shortcut chips, small floating controls |
| Float (Level 3) | `rgba(27,32,42,0.08) 0px 4px 8px -2px` | Floating circular icon buttons |

**Shadow Philosophy**: Queenit uses depth sparingly and softly. Most of the storefront is flat — separation comes from cool-grey tinted surfaces (`#edeef0`) and `#e2e2e8` hairlines. Where elevation appears it is a low-spread, short-offset shadow (`0px 2px 6px -2px`) tuned for the small interactive surfaces of a mobile UI: shortcut chips and floating circular icons that need to read as "lift up and tap." This keeps the merchandise-heavy page feeling fast and uncluttered rather than card-stacked.

#### Earlier machine fields

- tokens.shadow.chip: "rgba(27,32,42,0.16) 0px 2px 6px -2px"
- tokens.shadow.float: "rgba(27,32,42,0.08) 0px 4px 8px -2px"

## Motion & Easing

At 390×844, the recommendation-more control computes `background-color, color, border-color, transform 0.4s, 0.4s, 0.4s, 0.4s cubic-bezier(0.19, 0.91, 0.38, 1) 0s, 0s, 0s, 0s`. The fashion chip, bottom-home link, search icon, search input and card root compute `all 0s ease 0s`.

No global motion scale, carousel timing, enter/exit curve or reduced-motion behaviour was verified. The earlier duration and easing tables below are preserved as unconfirmed history, not live motion tokens.

### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #714fd8 → #754ee4; #7d8597 → #7c8597; #292c31 → #282c35; #aaafbb → #a8afbe; #603ec5 → #633bc8; #edeef0 → #eeeff2. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

Name correction in this earlier wording (2026-11-22): it calls #642fe9 `primary`, the brand colour or the identity anchor. The token `primary` now names #754ee4, the colour the storefront declares and paints. #642fe9 is the app icon’s colour: it is described under Color Palette & Roles and is no longer a token.

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Chip press, icon-button tap, focus |
| `motion-standard` | 220ms | Card/section reveal, banner crossfade, sheet |
| `motion-slow` | 320ms | Page transitions, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, chips |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quick — consistent with a deal-heavy, scroll-fast storefront. Chips and floating icons respond to press with a subtle scale/opacity shift; product grids and banners fade in from below at `motion-standard / ease-enter`; banner carousels auto-advance with a gentle crossfade. No bounce or spring — a value-focused commerce app signals reliability over playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and carousels stop auto-advancing; the storefront stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle:
- https://web.queenit.kr/home/RECOMMENDATION (queenit.kr redirects here) — product/commerce UI:
  brand purple #642fe9 (app icon, sampled rgb(100,47,233)); discount % rgb(113,79,216)=#714fd8 at 16px/600;
  accent purple rgb(96,62,197)=#603ec5; pink rgb(229,77,118)=#e54d76; ink rgb(0,0,0); slate rgb(41,44,49)=#292c31;
  muted rgb(170,175,187)=#aaafbb, rgb(125,133,151)=#7d8597; surface rgb(237,238,240)=#edeef0, rgb(242,243,245)=#f2f3f5;
  hairline rgb(226,226,232)=#e2e2e8; radius 16px (cards), 8px (chips), 4px/6px (tags), 50% (circle icons);
  shadow rgba(27,32,42,0.16) 0px 2px 6px -2px (chips), rgba(27,32,42,0.08) 0px 4px 8px -2px (floating icons);
  font Pretendard. og:title "멋진 어른들의 라이프스타일링샵, 퀸잇", og:description "1000만이 사랑하는 멋과 스타일을 한 곳에".
- https://www.rapportlabs.kr (parent company / recruiting site) — corp identity: H3 38px/700 Pretendard,
  body 14px/400 Noto Sans Korean, ink rgb(57,56,56)=#393838, yellow rgb(255,203,39)=#ffcb27.
  Verbatim copy: "한국에서 가장 크고 소비력이 강한 4050 시장", "4050의 일상을 연결하는 라이프스타일 플랫폼",
  "4050의 라이프를 책임지는 슈퍼앱이 되어 800만 MAU, 3조 이상의 거래액을 만듭니다".

Token-level claims (§1–9) are sourced from this live inspection. Full raw samples in
web/references/queenit/.verification.md.

Voice samples (§10) are verbatim from the live surfaces (queenit.kr meta + rapportlabs.kr headlines).

Brand narrative (§11): Rapportlabs (라포랩스) founded May 2020, Seoul; co-CEOs 최희민 / 홍주영;
Queenit (퀸잇) launched Sept 2020 as a 4050 women's fashion-commerce app. These founding details are
general public knowledge corroborated by company-profile aggregators (THE VC, Wanted, Rocketpunch,
한국경제인협회 startup story) via web search 2026-06-26 — not directly quoted from a verified
Rapportlabs statement in this turn. Market-ambition figures (8M MAU, 3조+ GMV) are verbatim from the
live corporate site.

Personas (§13) are fictional archetypes informed by publicly observable Queenit user segments
(Korean women in their 40s–50s shopping fashion on mobile). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "photography leads, chrome follows", "value is the message",
"respect the grown-up shopper") are editorial readings connecting Queenit's observed design to its
positioning, not directly sourced company statements.
-->

## Components

All current values below were measured at 390×844. The exported component records come unchanged from `compiled/components.yaml`, apart from their required use descriptions. The compiler now normalizes in-gamut OKLCH paint to sRGB. Alpha fields remain prose.

### Buttons

**Recommendation More (`recommend-more`)**: “추천 더 보기”, 358×40px, radius 6px, padding 10px 14px, Pretendard 14px/600, shadow none. Fill `oklch(0.239933 0.089905 261.268 / 0.0706)`; ink `oklch(0.12786 0.025832 253.799 / 0.851)`. Hover and focus: `no brand change`. Press: `::after` opacity 0 → 1, painting `oklch(0 0 0 / 0.0314)`.

**Selected Fashion Chip (`fashion-chip`)**: an anchor acting as a button, 46.5×34px, radius 999px, root padding 0px, root font 16px/400; visible label 13px/600. Dark fill #282c35, `oklch(0.293463 0.016665 266.434)` and white `#ffffff` label. Hover: `no brand change`; press: inner black layer opacity 0 → 0.03. Keyboard focus was not reached.

**Purchase action, rest only**: “구매하기”, 294×48px, radius 8px, padding 13px 17px, Pretendard 16px/600, line height 20px; fill #754ee4, `oklch(0.551898 0.214659 289.15)` and white `#ffffff` label. No state was measured for the purchase action; it is prose only, not an exported component. “앱 열기” on that page is 62.8×34px, radius 6px, padding 8px 12px, 13px/600, white fill, `oklch(0.485854 0.204969 289.234)` ink and a 1px `oklch(0.551898 0.214659 289.15)` border; also rest only.

### Inputs

**Search Field (`search-input`)**: the inner input, 222×20px at rest, radius 0px, padding 0px 8px, Pretendard 16px/500, line height 20px, transparent background, no border or shadow. Ink #282c35, `oklch(0.293463 0.016665 266.434)`. The measured hover and press show `no brand change`. Keyboard focus widens it to 262×20px, but that width remains after blur; the compiler correctly records focus as `no brand change`. This inner geometry is not the surrounding header's tap target.

### Cards & Containers

**Product Card (`product-card`), rest only**: first search result, “마쯔 남성 웨빙밴드 스니커즈 4cm LCMS53M439”. Transparent anchor root 177×294px, radius 0px, padding 0px, inherited font 16px/400, inherited `#000000`, shadow none, over white `#ffffff`. The compiler's 11px/500 label sample is the campaign badge. Its price, title and image are different descendants. Hover, press and focus are UNMEASURED: after the input gained focus the card vanished from the DOM. It is not exported as a component.

**Review cards**, product survey: 350×116px anchors, white, radius 12px. No interactive states measured.

### Badges

The first search card's “파이널위크” badge has background `#d95c19` and white ink, with an 11px/500 label. No general badge radius or state is inferred from the enclosing card.

### Navigation

**Bottom Home (`bottom-home`)**: a “홈” link in `nav`, 93.5×45.6px, radius 0px, padding 0px, transparent on white. Its visible label is 11px/600 with ink `oklch(0.12786 0.025832 253.799 / 0.851)`. Measured hover, press and focus are `no brand change`; focus does show a browser `auto` outline, excluded from brand tokens.

**Search Action (`search-action`)**: 40×40px icon link, radius 0px, padding 0px, transparent on white. The visible SVG uses `oklch(0.293463 0.016665 266.434)`. Hover: `no brand change`; press: internal black layer opacity 0 → 0.03. Keyboard focus was not reached.

### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #714fd8 → #754ee4; #aaafbb → #a8afbe; #edeef0 → #eeeff2. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

#### Buttons

**Category Shortcut Chip**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 8px
- Padding: 3.5px 11.5px
- Height: 45px
- Shadow: `rgba(27,32,42,0.16) 0px 2px 6px -2px`
- Font: 16px Pretendard weight 400
- Use: Home shortcut chips ("잘 사는 비결", "2만원 쿠폰", "매거진Q", "명품 초특가")

**Floating Icon Button**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 50%
- Padding: 8px
- Height: 42px
- Shadow: `rgba(27,32,42,0.08) 0px 4px 8px -2px`
- Use: Floating circular quick-action icon button

#### Inputs

#### Cards & Containers

**Product Card**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 16px
- Use: Product tile in the recommendation grid

**Skeleton / Placeholder Block**
- Background: `#edeef0`
- Radius: 16px
- Use: Loading skeleton and image placeholder

#### Badges

**Discount Rate**
- Background: `#ffffff`
- Text: `#714fd8`
- Radius: 4px
- Font: 16px Pretendard weight 600
- Use: Discount-rate percentage on product cards (41%, 63%, 79%)

**Promo Overlay Pill**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 8px
- Font: 14px Pretendard weight 600
- Use: Promo label over hero banner images ("주얼리 특가전 ~50%", "이번주만 10% 더 할인")

#### Navigation

**Top Category Nav**
- Active: `#000000` text
- Inactive: `#aaafbb` text
- Font: 16px Pretendard weight 400
- Use: Horizontal category tabs ("추천", "라이프", "뷰티", "컨템퍼러리", "남성")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://web.queenit.kr (live commerce UI, computed style); https://www.rapportlabs.kr (parent company site, live computed style); https://apps.apple.com/kr/app/id1526439940 (Queenit App Store listing — brand-owned product listing)
**Tier 2 sources:** getdesign.md/queenit — no Queenit-specific data (generic shell); styles.refero.design/?q=queenit — searched, no Queenit style page returned. (KR coverage gap — expected per spec/regional-sources.yaml; Tier 1 carries the proof.)
**Conflicts unresolved:** none

#### Earlier machine fields

- tokens.components.category-chip.type: "button"
- tokens.components.category-chip.bg: "#ffffff"
- tokens.components.category-chip.fg: "#000000"
- tokens.components.category-chip.radius: "8px"
- tokens.components.category-chip.padding: "3.5px 11.5px"
- tokens.components.category-chip.height: "45px"
- tokens.components.category-chip.shadow: "rgba(27,32,42,0.16) 0px 2px 6px -2px"
- tokens.components.category-chip.font: "16px / 400 Pretendard"
- tokens.components.category-chip.use: "Home shortcut chip (잘 사는 비결, 2만원 쿠폰, 매거진Q)"
- tokens.components.floating-icon.type: "button"
- tokens.components.floating-icon.bg: "#ffffff"
- tokens.components.floating-icon.fg: "#000000"
- tokens.components.floating-icon.radius: "50%"
- tokens.components.floating-icon.padding: "8px"
- tokens.components.floating-icon.height: "42px"
- tokens.components.floating-icon.shadow: "rgba(27,32,42,0.08) 0px 4px 8px -2px"
- tokens.components.floating-icon.use: "Floating circular quick-action icon button"
- tokens.components.nav-tab.type: "tab"
- tokens.components.nav-tab.active: "text #000000"
- tokens.components.nav-tab.fg: "#aaafbb"
- tokens.components.nav-tab.font: "16px / 400 Pretendard"
- tokens.components.nav-tab.use: "Top category nav (추천·라이프·뷰티·컨템퍼러리·남성)"
- tokens.components.product-card.type: "card"
- tokens.components.product-card.bg: "#ffffff"
- tokens.components.product-card.fg: "#000000"
- tokens.components.product-card.radius: "16px"
- tokens.components.product-card.use: "Product tile in the recommendation grid"
- tokens.components.skeleton-block.type: "card"
- tokens.components.skeleton-block.bg: "#edeef0"
- tokens.components.skeleton-block.radius: "16px"
- tokens.components.skeleton-block.use: "Loading skeleton / image placeholder"
- tokens.components.discount-badge.type: "badge"
- tokens.components.discount-badge.bg: "#ffffff"
- tokens.components.discount-badge.radius: "4px"
- tokens.components.discount-badge.font: "16px / 600 Pretendard"
- tokens.components.discount-badge.use: "Discount-rate percentage on product cards"
- tokens.components.promo-pill.type: "badge"
- tokens.components.promo-pill.bg: "#000000"
- tokens.components.promo-pill.fg: "#ffffff"
- tokens.components.promo-pill.radius: "8px"
- tokens.components.promo-pill.font: "14px / 600 Pretendard"
- tokens.components.promo-pill.use: "Promo overlay label on hero banner images"

### States

At 390×844, the more button's press reveals its `::after` layer; the selected fashion chip and search icon reveal an internal black layer at opacity 0.03. The bottom-home link has only the browser's `auto` ring on focus. The search input widens after focus, and the width remains after blur; its compiled focus state is `no brand change`.

The exploratory product's “품절” action is a rest observation: 294×48px, radius 8px, 13px 17px padding, 16px/600, fill `oklch(0.239933 0.089905 261.268 / 0.0706)`, ink `oklch(0 0 0 / 0.302)`. Disabled semantics were not established by the survey, so it is not a disabled-state measurement. No empty, loading, error, cart-success or coupon-success workflow was exercised.

#### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #aaafbb → #a8afbe; #edeef0 → #eeeff2. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, single Ink Black (`#000000`) line explaining no matching products, with a path back to categories. No clutter. |
| **Empty (wishlist / cart none yet)** | Muted Grey (`#aaafbb`) single line inviting the shopper to browse; calm, non-pushy. |
| **Loading (product grid)** | Skeleton blocks in Surface Grey (`#edeef0`) at 16px radius, matching final card dimensions. Flat pulse, no shadow. |
| **Loading (image)** | `#edeef0` placeholder fill until the product photo resolves. |
| **Error (fetch failed)** | Inline message in Ink Black with a plain-language explanation and a retry — never a bare error code. |
| **Error (form / coupon invalid)** | Field-level message below the input describing what's valid, not just "오류". |
| **Success (added to cart / coupon applied)** | Brief inline confirmation; next-step detail immediately below. No celebratory emoji. |
| **Skeleton** | `#edeef0` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Muted Grey (`#aaafbb`) text on reduced-opacity surface; purple actions fade rather than turn grey to keep the brand read. |

## Do's and Don'ts

### Do

At 390×844, preserve the distinction between a link root and its visible label. Reuse the measured white canvas, dark selected fashion-chip fill, purple purchase fill and local 6px/8px button corners. Use `primary` (#754ee4) for the observed product-purple role and keep #642fe9 as the distinct app-icon fact; it is not a token.

### Don't

Do not apply the inner input's 20px height to the whole search header, treat the product card's 11px badge as its title size, or export the browser's `auto` outline as a brand ring. No evidence establishes universal company-authored do/don't rules beyond the text-accessibility principle quoted under Typography Rules.

### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #714fd8 → #754ee4; #aaafbb → #a8afbe; #edeef0 → #eeeff2. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

Name correction in this earlier wording (2026-11-22): it calls #642fe9 `primary`, the brand colour or the identity anchor. The token `primary` now names #754ee4, the colour the storefront declares and paints. #642fe9 is the app icon’s colour: it is described under Color Palette & Roles and is no longer a token.

#### Do
- Use the brand purple (`#642fe9`) as the single identity anchor — it's the app-icon color
- Set discount-rate percentages in sale-purple (`#714fd8`) at weight 600 — it's the storefront's signature cue
- Keep product chrome quiet: near-black (`#000000`) text on white (`#ffffff`) so photography leads
- Use 16px-radius cards as the default product container
- Separate bands with tinted surfaces (`#edeef0`) and `#e2e2e8` hairlines, not heavy shadows
- Use Pretendard at a generous 16px base for legibility with a 40s–50s audience
- Use light low-spread shadows for chips and floating icons only
- Use pink (`#e54d76`) sparingly as a secondary highlight accent

#### Don't
- Spread the brand purple across large fills — keep it an accent and identity color, not a background wash
- Use deep, heavy drop shadows or stacked cards — Queenit's depth is light and selective
- Drop the body size below 16px on shopper-facing labels — the larger size is intentional for the audience
- Introduce a third saturated hue beyond purple and pink — it dilutes the deal signal
- Mix the corporate yellow (`#ffcb27`) into the storefront — it belongs to rapportlabs.kr only
- Use sharp/square corners on cards or chips — geometry is rounded throughout
- Let metadata compete with prices — keep secondary text in muted grey (`#aaafbb`)

## Voice & Tone

The current positioning combines adult identity with lifestyle shopping, as expressed in the live positioning line quoted under Visual Theme & Atmosphere. The official 2026 brand article describes expansion from fashion into beauty and living. At 390×844, action labels are concise: “추천 더 보기”, “쿠폰 받기”, “구매하기”; the app strip says “앱에서는 더 많이 할인돼요”. A builder can retain that combination of an aspirational positioning line and literal action verbs. This is an editorial reading of the opened sources and live copy, not a verified forbidden-register policy.

### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Queenit's voice is **warm, confident, and deal-savvy** — it speaks to grown-up shoppers as people of taste, not as a niche "senior" segment. The positioning line "멋진 어른들의 라이프스타일링샵" ("a lifestyling shop for stylish grown-ups") sets the register: aspirational and respectful, never patronizing. Copy is benefit-first and value-led — discount rates, coupons, and "완판" (sold-out) social proof are front and center — but framed as savvy curation ("백화점 옷인데 더 저렴해", "department-store clothes, cheaper") rather than desperate urgency. The parent company (Rapportlabs) voice on the corporate site is mission-framed and plainspoken, addressing the scale of the 4050 market with quiet ambition.

| Context | Tone |
|---|---|
| Storefront positioning | Aspirational, respectful. "멋진 어른들의 라이프스타일링샵." |
| Promo / deal labels | Value-led, concrete. "주얼리 특가전 ~50%", "이번주만 10% 더 할인". |
| Category / nav | Plain and functional. "추천", "라이프", "뷰티", "컨템퍼러리", "남성". |
| Social proof | Reassuring. "홈쇼핑 완판템", "1000만이 사랑하는 멋과 스타일". |
| Corporate / recruiting | Mission-framed, ambitious-but-calm. "4050의 일상을 연결하는 라이프스타일 플랫폼." |

**Voice samples (verbatim, verified live 2026-06-26):**
- "멋진 어른들의 라이프스타일링샵, 퀸잇" — storefront meta title (positioning). *(web.queenit.kr og:title)*
- "1000만이 사랑하는 멋과 스타일을 한 곳에" — storefront meta description (social proof). *(web.queenit.kr og:description)*
- "한국에서 가장 크고 소비력이 강한 4050 시장" — corporate headline (market framing). *(rapportlabs.kr)*
- "4050의 일상을 연결하는 라이프스타일 플랫폼" — corporate tagline (mission). *(rapportlabs.kr)*

**Forbidden register**: ageist or condescending framing of the 4050 audience, fear-based urgency, undefined jargon, exclamation-stacked hype. The audience is treated as discerning, not as a problem to be solved.

## Agent Prompt Guide

### Quick Color Reference

At 390×844: canvas `#ffffff`; selected fashion-chip fill `oklch(0.293463 0.016665 266.434)`; purchase fill / first-card discount ink `oklch(0.551898 0.214659 289.15)`; campaign badge `#d95c19`; icon identity `#642fe9` (raster source, independent of viewport). Use the compiler’s sRGB mapping: selected-chip #282c35 and purchase/discount #754ee4. Preserve alpha values in their original notation.

### Example Component Prompts

“Build the measured phone recommendation-more button: 40px high, 6px radius, 10px 14px padding, Pretendard 14px/600. Use its recorded OKLCH fill and ink; press reveals a black 0.0314-alpha pseudo-element.”

“Build the phone purchase bar from rest evidence: 294×48px purchase button, 8px radius, 13px 17px padding, Pretendard 16px/600, recorded purple fill and white label. Supply no invented interaction states.”

### Iteration Guide

Match the 390×844 identities first, including inner versus outer geometry, then compare state crops. Preserve only measured states; use the named live-loaded face. Substitute: none chosen.

### Earlier record, not re-confirmed on 2026-11-22

Earlier wording follows verbatim. It is not a current measurement. Corporate evidence remains corporate-only.

Numeric corrections in this earlier wording: #714fd8 → #754ee4; #292c31 → #282c35; #aaafbb → #a8afbe; #603ec5 → #633bc8; #edeef0 → #eeeff2. The corrected values and current roles are documented under Color Palette & Roles. Only the remaining role, intent, geometry or workflow claims below are unconfirmed; the old numbers are not competing current values.

#### Quick Color Reference
- Brand / identity: Queenit Purple (`#642fe9`)
- Discount-rate %: Sale Purple (`#714fd8`)
- Links / emphasis: Accent Purple (`#603ec5`)
- Secondary accent: Highlight Pink (`#e54d76`)
- Primary text: Ink Black (`#000000`)
- Input / strong label: Slate (`#292c31`)
- Muted text / inactive: Muted Grey (`#aaafbb`)
- Background: Pure White (`#ffffff`)
- Skeleton / placeholder: Surface Grey (`#edeef0`)
- Hairline: `#e2e2e8`
- Corporate ink / accent: `#393838` / `#ffcb27`

#### Example Component Prompts
- "Create a 2-up product grid. Cards are white (#ffffff), 16px radius, no border. Below each image: product title 16px Pretendard #000000, original price struck-through in muted grey (#aaafbb), discount rate 16px Pretendard weight 600 in sale-purple (#714fd8), final price 16px weight 600 #000000."
- "Build a home shortcut chip rail: white (#ffffff) chips, 8px radius, 3.5px 11.5px padding, 45px tall, shadow rgba(27,32,42,0.16) 0px 2px 6px -2px, leading icon + 16px Pretendard #000000 label."
- "Design a promo banner: full-width image with a dark overlay, white (#ffffff) promo label 14px Pretendard weight 600 ('이번주만 10% 더 할인'), 8px radius pill."
- "Create a top category nav: horizontal tabs in 16px Pretendard, active item #000000, inactive items muted grey (#aaafbb)."
- "Build a loading state: skeleton blocks in surface grey (#edeef0) at 16px radius matching final card dimensions; no shadow."

#### Iteration Guide
1. Purple (`#642fe9`) is identity; sale-purple (`#714fd8`) is the discount cue — don't conflate them
2. Photography leads; keep chrome near-black on white
3. 16px-radius cards and 16px base text are the defaults
4. Separate with `#edeef0` tint and `#e2e2e8` hairlines, not heavy shadows
5. Shadows are light and low-spread, for chips and floating icons only
6. Keep the corporate yellow (`#ffcb27`) off the storefront
7. Muted grey (`#aaafbb`) for metadata so prices stay dominant

---
