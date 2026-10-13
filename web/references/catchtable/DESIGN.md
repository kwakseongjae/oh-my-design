---
name: CatchTable
colors:
  canvas: '#ffffff'
  foreground: '#000000'
  title: '#222222'
  muted: '#666666'
  search-surface: '#f5f5f5'
  control-border: '#e4e4e4'
  brand-orange: '#ff3d00'
  on-brand: '#ffffff'
typography:
  consumer-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Repeated consumer-home body and button sample
  consumer-title:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    use: Consumer-home section-title sample
  search-control:
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    use: Consumer-home search input
  career-display:
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.35
    use: Careers-service marketing heading
rounded:
  square: 0px
  discovery-tile: 6px
  control: 8px
  search: 40px
  career-action: 15px
spacing:
  xs: 4
  sm: 8
  md: 12
  lg: 20
components:
  consumer-search:
    type: input
    backgroundColor: '#f5f5f5'
    textColor: '#000000'
    rounded: 40px
    padding: 0px 15px 0px 32px
    typography: 15px / 500 Pretendard Std Variable
    states: default only; no interaction state captured
    use: Consumer-home search input, selector home::[data-omd-capture=0]
  consumer-filter-control:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #e4e4e4'
    rounded: 8px
    height: 32px
    typography: 16px / 400 Pretendard Std Variable
    states: default only; no interaction state captured
    use: Consumer-home compact filter/control, selector home::[data-omd-capture=1]
  consumer-discovery-tile:
    type: button
    rounded: 6px
    padding: 8px 12px
    typography: 16px / 400 Pretendard Std Variable
    states: default only; no interaction state captured
    use: Consumer-home image-led discovery tile, selector home::[data-omd-capture=17]
  merchant-cta:
    type: button
    backgroundColor: '#002d4e'
    textColor: '#ffffff'
    rounded: 8px
    height: 48px
    typography: 16px / 700 Pretendard
    shadow: rgba(202, 202, 202, 0.4) 0px 0px 4px 2px
    states: default only; no interaction state captured
    use: Merchant-marketing CTA link, selector surface-2::[data-omd-capture=20]
  careers-orange-action:
    type: button
    backgroundColor: '#ff3d00'
    textColor: '#ffffff'
    rounded: 15px
    padding: 10.5px 24px
    typography: 16px / 400 Pretendard
    states: default only; no interaction state captured
    use: Careers-service marketing action, selector surface-3::[data-omd-capture=14]
  merchant-gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#37352f'
    rounded: 0px
    padding: 0px
    height: 56px
    typography: 16px / 700 / 24px Pretendard
    hover: 'fg #002d4e'
    pressed: 'fg #002d4e'
    states: 'rest on two links (capture 1 and 2); hover and pressed sampled on both, all four frames recording #002d4e, the merchant CTA fill; focus not declared'
    use: Merchant-site global navigation link (a.css-rx11nm) at surface-2::[data-omd-capture="1"], 60 x 56 (capture 2 is 69 x 56); the colour of its 0px border follows the text and is not a border
  merchant-submit-outline:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#002d4e'
    border: '2px #002d4e'
    rounded: 8px
    padding: 0px
    height: 53px
    typography: 16px / 700 / 18.4px Pretendard
    states: 'rest declared only. The hover and pressed frames agree (text and border #0d3857, fill #f2f4f6), but each channel sits about 5% of the way from its rest colour toward the element''s other rest colour (fill toward #002d4e, text toward #ffffff): a transition frame, so neither is declared; focus not declared'
    use: Merchant inquiry-form submit button (button.btn-submit, type=submit) at surface-2::[data-omd-capture="14"], 260 x 53
  merchant-form-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 0px
    padding: 16px
    size: 414px x 77px
    typography: 16px / 400 / 18.4px Pretendard
    states: default captured on two inputs and one textarea; no state frame
    use: Merchant inquiry-form text input (input.__form-input) at surface-2::[data-omd-capture="3"]; capture 4 matches and the textarea (capture 5) is 414 x 50; border width 0px, so no border is declared
  merchant-checkbox:
    type: toggle
    backgroundColor: '#ffffff'
    border: '1px #999999'
    rounded: 4px
    size: 19px x 19px
    states: rest captured on six checkboxes; the checked property was not dumped, so no checked value is declared; no state frame
    use: Merchant inquiry-form checkbox (input type=checkbox) at surface-2::[data-omd-capture="6"]; captures 7 to 10 and 12 match
  careers-header-menu-item:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#212429'
    rounded: 4px
    padding: 5.5px 12px
    height: 32px
    typography: 16px / 400 Pretendard
    states: default captured on five items; no state frame
    use: Careers-site header menu item (button.header__MenuItemContainer) at surface-3::[data-omd-capture="2"], 81 x 32; five per header (captures 2, 4, 6, 8, 10)
  careers-header-orange-item:
    type: button
    backgroundColor: '#ff3d00'
    textColor: '#ffffff'
    rounded: 4px
    padding: 5.5px 12px
    height: 32px
    typography: 16px / 400 Pretendard
    states: default captured; no state frame
    use: Careers-site header item in the orange variant of the same component (header__MenuItemContainer, iqSJex) at surface-3::[data-omd-capture="12"], 55 x 32
  careers-blue-action:
    type: button
    backgroundColor: '#388fff'
    textColor: '#ffffff'
    rounded: 15px
    padding: 10.5px 24px
    height: 48px
    typography: 16px / 400 Pretendard
    states: default captured; no state frame
    use: Careers-service marketing action in blue (button.button__Button, gPqMCK) at surface-3::[data-omd-capture="16"], 166 x 48; same component and geometry as the orange action
  careers-pill-action:
    type: button
    backgroundColor: '#ff3d00'
    textColor: '#ffffff'
    rounded: 24px
    padding: 10.5px 28px
    height: 48px
    typography: 16px / 400 Pretendard
    states: default captured; no state frame
    use: Careers-service wide orange action (button.button__Button, boFZhw) at surface-3::[data-omd-capture="21"], 214 x 48
  consumer-category-shortcut:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    size: 109px x 65px
    typography: 13px / 400 / 16.9px Pretendard Std Variable
    states: default captured on twelve shortcuts; no state frame
    use: Consumer-home category shortcut (a, flex column) at home::[data-omd-capture="4"]; twelve in one row (captures 4 to 15); the text style is its h3 label (home::h3), not the link container
  consumer-restaurant-card:
    type: card
    backgroundColor: transparent
    textColor: '#222222'
    size: 200px x 274px
    typography: 16px / 700 / 24px Pretendard Std Variable
    states: non-interactive; eight cards at 200 x 274 and two at 200 x 298, whose titles run to two lines
    use: 'Consumer-home restaurant card (article, w-[200px]) at home::article; the title is its h2 (home::h2, clamped to two lines) and the meta line its p (home::p, 12px / 400 / 18px, #666666); the article has no fill and a 0px radius, and the image corners were not sampled'
  consumer-bottom-tab:
    type: tab
    backgroundColor: transparent
    size: 120px x 56px
    states: default captured on four links; no state frame and no selected variant recorded
    use: Consumer bottom navigation link (a, flex-1) at home::[data-omd-capture="61"]; four links fill a 480px row at top 844, the last 56px of the 900px viewport; the icon and label sit in children whose style was not sampled
  consumer-modal-text-button:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    height: 21px
    typography: 14px / 400 / 21px Pretendard Std Variable
    states: default captured on two buttons; no state frame
    use: Text button on the consumer-home modal (MUI Modal over a rgba(0, 0, 0, 0.7) backdrop, open at capture) at home::[data-omd-capture="65"], 89 x 21; the second button (capture 66) is 35 x 21
fonts:
  roles:
    ui: Pretendard Std Variable
---

# Design System Inspiration of CatchTable (캐치테이블)

## Overview

### Visual Theme & Atmosphere

CatchTable is a restaurant platform operated by WAD that connects the diner’s choice and reservation journey with merchant-side reservation, waiting, POS, pickup, and ordering operations. Its official careers narrative describes the consumer service as making a choice more certain and enjoyable, while its merchant site frames the other side as an integrated operating solution. The supplied public consumer home is visually quieter than those merchant and employer stories: a white field, black text, compact controls, image-led discovery tiles, and a single loaded `Pretendard Std Variable` family. The official careers surface supplies the current orange `#FF3D00` action treatment, but that marketing expression is kept distinct from the consumer home rather than generalized into a product-wide CTA system.

The reference therefore preserves three source domains as three facts: consumer-product discovery, merchant marketing, and careers marketing. It does not claim that a merchant lead form or careers campaign button is a restaurant-booking control.

### Primary tasks

- Search for a restaurant from the consumer home screen
- Browse image-led tiles to find somewhere to eat
- Reserve a table at a restaurant you picked
- Wait for a table at a restaurant through the service

### Iconography & Imagery

The consumer home is image-led: repeated discovery tiles use a simple control shell around imagery and text. The capture exposes ordinary controls but no named icon library, stroke treatment, image ratio, or reusable media-card contract. Those details remain unclaimed.

#### Do

- Keep restaurant imagery and discovery content tied to the consumer surface where they were observed.
- Preserve the separation between diner discovery imagery and merchant lead-generation content.

#### Don't

- Invent a named icon library, stroke specification, or image ratio that the evidence does not establish.
- Recast merchant marketing imagery as an observed consumer reservation component.

### Brand Narrative

CatchTable’s official careers page describes a service present around meaningful meals and store opening/growth moments. It identifies the consumer side as CatchTable (B2C), where reservations and waiting support the dining journey, and the merchant side as CatchTable Business (B2B), combining reservation, waiting, and POS operations. The same page reports a current ambition to grow into a food-service super-platform. WAD’s official service terms identify the operating company as 주식회사 와드.

### Principles

1. **Keep the two-sided service legible.** Consumer discovery and merchant operations are related but not the same UI surface.
2. **Promote only observed public styles.** A selector-backed product token does not authorize a plausible restaurant-detail or reservation-flow variant.
3. **Let food discovery carry the consumer surface.** The captured consumer home uses image-led tiles and compact controls rather than a generalized sales dashboard.
4. **Treat orange by source domain.** `#FF3D00` is verified on the careers marketing action; do not automatically use it as a universal consumer semantic color.

### Personas

The official service description names two stakeholder groups; this reference keeps them as groups rather than inventing demographic personas:

- **Diners:** use the consumer service to discover restaurants, make reservations, and use waiting-related experiences.
- **Restaurant operators:** use merchant-side reservation, waiting, POS, pickup, order, and management functions.

## Colors

### Color & Typography

#### Color tokens

- `#FFFFFF` — observed consumer canvas and compact-control background.
- `#000000` — observed consumer foreground.
- `#222222` — observed consumer section-title and careers-heading ink.
- `#666666` — consumer-home muted text sample.
- `#F5F5F5` — consumer search background.
- `#E4E4E4` — consumer compact-control border.
- `#FF3D00` — careers-marketing action background; this is verified public brand expression, not a universal consumer-product status or CTA token.

#### Typography evidence classes

- **Live consumer computed use:** `Pretendard Std Variable` is loaded/high confidence with 122 observed uses on the consumer home and seven jsDelivr subset source URLs. It is the only UI family promoted in `tokens.typography.family.ui`.
- **Live marketing computed use:** `Pretendard` is loaded/high confidence with 117 observed uses across the merchant and careers surfaces and source URLs from Lazyrockets plus jsDelivr. It is recorded as source-domain evidence, not added as a second consumer UI-family token.
- **Surface-local live use:** `NanumSquareRound` is loaded with one observed merchant-surface text use and eighteen source URLs; its low frequency and separate B2B surface keep it out of consumer tokens.
- **Declared-only assets:** Aggro, Arita-dotum-Medium, Cafe24Oneprettynight, Chosunilbo_myungjo, D2Coding, DungGeunMo, Gmarket Sans, NanumSquare, Inter, KaTeX faces, and other zero-use declarations in the bundle remain declared-only. They are neither rendered as substitutes nor promoted as CatchTable UI roles.
- **Official font/license boundary:** Pretendard’s upstream project distributes the family under SIL Open Font License 1.1. That license explains the font asset, while computed usage plus FontFaceSet/source corroboration is what establishes the observed public use above.

## Layout

### Layout & Grid

- The captured consumer home is a 1440×900 public route with a 38px search input, compact 32px control, centered 13px discovery labels, a 20px/700 section-title sample, and repeated image-led discovery tiles.
- Consumer search padding is asymmetric—`0px 15px 0px 32px`—which leaves room for a leading search affordance without asserting an unmeasured icon spec.
- Consumer discovery tiles are observed at 6px radius with `8px 12px` padding. The capture does not establish a universal card grid, breakpoint, or responsive rule.
- Merchant and careers surfaces have their own marketing layouts. Their button values are documented only as route-local examples below.

## Elevation & Depth

### Elevation

The selector-backed consumer controls documented above have `box-shadow: none`. The merchant CTA has a route-local shadow (`rgba(202, 202, 202, 0.4) 0px 0px 4px 2px`, §4), but no repeatable elevation scale is established across the three domains, so no shadow token is promoted.

## Shapes

### Spacing & Shape

The repeated small values in the supplied bundle support a conservative `4 / 8 / 12 / 20px` observed spacing set. Radius is deliberately source-specific: the consumer home includes square chrome, 6px discovery tiles, an 8px compact control, and a 40px search field; the careers action is 15px. These observations are not a global radius prescription.

## Motion & Easing

### Motion

No duration, easing, transition, carousel, or scroll state is recorded in the supplied evidence. Motion is intentionally undocumented.

## Components

### Consumer search

**Default**
- Background: `#F5F5F5`
- Text: `#000000`
- Radius: `40px`
- Padding: `0px 15px 0px 32px`
- Font: `15px / 500 Pretendard Std Variable`
- Use: Consumer-home search input; `home::[data-omd-capture="0"]`.

### Consumer filter control

**Default**
- Background: `#FFFFFF`
- Text: `#000000`
- Border: `1px solid #E4E4E4`
- Radius: `8px`
- Height: `32px`
- Font: `16px / 400 Pretendard Std Variable`
- Use: Consumer-home compact control; `home::[data-omd-capture="1"]`.

### Consumer discovery tile

**Default**
- Radius: `6px`
- Padding: `8px 12px`
- Font: `16px / 400 Pretendard Std Variable`
- Use: Image-led consumer-home discovery tile; `home::[data-omd-capture="17"]`.

### Merchant marketing CTA

**Default**
- Background: `#002D4E`
- Text: `#FFFFFF`
- Radius: `8px`
- Height: `48px`
- Font: `16px / 700 Pretendard`
- Shadow: `rgba(202, 202, 202, 0.4) 0px 0px 4px 2px` (added 2026-09-29 from the same capture; the link is 432 × 48)
- Use: Merchant-marketing CTA link; `surface-2::[data-omd-capture="20"]`.

### Careers orange action

**Default**
- Background: `#FF3D00`
- Text: `#FFFFFF`
- Radius: `15px`
- Padding: `10.5px 24px`
- Font: `16px / 400 Pretendard`
- Use: Careers-service marketing action; `surface-3::[data-omd-capture="14"]`.

The components below were transcribed on 2026-09-29 from the same 2026-07-13 bundle; nothing was re-measured.

### Merchant navigation link

**Default**
- Background: transparent
- Text: `#37352F`
- Padding: `0px`
- Height: `56px` (60 × 56 and 69 × 56)
- Font: `16px / 700 / 24px Pretendard`
- Hover: text `#002D4E`
- Pressed: text `#002D4E`
- States: sampled on both links, `surface-2::[data-omd-capture="1"]` and `"2"`. All four hover and pressed frames record `#002D4E`, which is the merchant CTA's fill and the submit button's text colour, so the value is read as settled. The frames also move the colour of the links' 0px border; a 0px border is not a border, so no border state is declared. Each link also has a focus frame in that colour, but focus is not declared from the bundle: the collector presses before it focuses.
- Use: merchant-site global navigation (`a.css-rx11nm`).

### Merchant submit button

**Default**
- Background: `#FFFFFF`
- Text: `#002D4E`
- Border: 2px `#002D4E`
- Radius: `8px`
- Padding: `0px`
- Height: `53px` (260 × 53)
- Font: `16px / 700 / 18.4px Pretendard`
- States: rest only. The hover and pressed frames agree with each other (text and border `#0D3857`, fill `#F2F4F6`), but each channel sits about 5% of the way from its rest colour toward the element's other rest colour: the fill toward `#002D4E`, the text toward `#FFFFFF`. That is a transition caught early, not a settled value, so neither hover nor pressed is declared; the end value was not captured.
- Use: merchant inquiry-form submit (`button.btn-submit`, `type=submit`); `surface-2::[data-omd-capture="14"]`.

### Merchant form field

**Default**
- Background: `#FFFFFF`
- Text: `#000000`
- Radius: `0px`
- Padding: `16px`
- Size: 414 × 77 (the textarea, capture 5, is 414 × 50)
- Font: `16px / 400 / 18.4px Pretendard`
- Border: width 0px, so none is declared.
- Use: merchant inquiry-form inputs (`input.__form-input`); `surface-2::[data-omd-capture="3"]` and `"4"`.

### Merchant checkbox

**Default**
- Background: `#FFFFFF`
- Border: 1px `#999999`
- Radius: `4px`
- Size: 19 × 19
- States: rest on six checkboxes. The checked property was not dumped, so no checked value is declared.
- Use: merchant inquiry-form consent row (`input[type=checkbox]`); `surface-2::[data-omd-capture="6"]` to `"10"` and `"12"`.

### Careers header items

- **Menu item:** background `#FFFFFF`, text `#212429`, radius `4px`, padding `5.5px 12px`, height 32px, `16px / 400 Pretendard`; five per header (`surface-3::[data-omd-capture="2"]`, `"4"`, `"6"`, `"8"`, `"10"`).
- **Orange item:** the same component class in its orange variant: background `#FF3D00`, text `#FFFFFF`, same radius, padding and type, 55 × 32 (`surface-3::[data-omd-capture="12"]`).
- States: default captured; no state frame on either.

### Careers action variants

- **Blue action:** background `#388FFF`, text `#FFFFFF`, radius `15px`, padding `10.5px 24px`, height 48px, `16px / 400 Pretendard`; 166 × 48 (`surface-3::[data-omd-capture="16"]`). Same component and geometry as the orange action above.
- **Wide orange action:** background `#FF3D00`, text `#FFFFFF`, radius `24px`, padding `10.5px 28px`, height 48px, `16px / 400 Pretendard`; 214 × 48 (`surface-3::[data-omd-capture="21"]`).
- States: default captured; no state frame.

### Consumer category shortcut

- Size: 109 × 65; twelve in one row (`home::[data-omd-capture="4"]` to `"15"`).
- Label: its `h3`, `13px / 400 / 16.9px Pretendard Std Variable`, `#000000`. The link container's own 16px / 400 is not the label style.
- States: default captured; no state frame.

### Consumer restaurant card

- Size: 200 × 274 (eight); 200 × 298 (two, whose titles run to two lines).
- Title: `h2`, `16px / 700 / 24px Pretendard Std Variable`, `#222222`, clamped to two lines.
- Meta: `p`, `12px / 400 / 18px`, `#666666`, one line.
- The `article` itself has no fill and a 0px radius; the image corners were not sampled. Non-interactive.

### Consumer bottom navigation

- Four links, 120 × 56 each, filling a 480px row at top 844, the last 56px of the 900px viewport (`home::[data-omd-capture="61"]` to `"64"`).
- The icon and label sit in children whose style was not sampled, so no text style is declared. Default only; no state frame, and no selected variant was recorded.

### Consumer modal text buttons

- Background transparent, text `#FFFFFF`, `14px / 400 / 21px Pretendard Std Variable`; 89 × 21 and 35 × 21 (`home::[data-omd-capture="65"]`, `"66"`).
- They sit on a MUI modal whose backdrop computes `rgba(0, 0, 0, 0.7)`; the modal was open when the page was captured. Default only; no state frame.

The merchant navigation link is the only component with declared pointer states. The bundle's `interactions[]` record is empty (no dialog, tab, menu, form-error, or toast record), but that record does not cover pointer states: the bundle holds eight state frames, all on `surface-2`, for the two merchant navigation links and the submit button (above). Focus, disabled, menu, validation, and responsive variants stay omitted. Corrected 2026-09-29: the July text read the empty interaction record as grounds to set every state frame aside. The navigation-link frames are settled values; the submit-button frames are a transition and stay undeclared for that reason.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.catchtable.net/` (consumer product surface), `https://biz.catchtable.co.kr/n/main` (merchant marketing), `https://career.catchtable.co.kr/ko/service` (careers marketing and official service context), `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution/design boundary), and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence boundary)
**Tier 2 sources:** `https://getdesign.md/catchtable` (attempted; built-in web open safe-open failure/no usable record), `https://styles.refero.design/?q=catchtable` (attempted; built-in web open safe-open failure/no usable record), web search for both names (no CatchTable record returned)
**Conflicts unresolved:** none

Legacy claims about a 145-token semantic sheet, a universal 150% type contract, a five-tier shadow ladder, restaurant-booking CTA styling, bottom-navigation states, Swiper states, and a universal hard-square geometry were removed: the supplied 2026 capture does not substantiate them.

### States

Pointer states are declared for one component: the merchant navigation links record text `#002D4E` on hover and pressed over a `#37352F` rest (§4). The merchant submit button's frames are a transition and are not declared. The bundle's interaction record is empty, so loading, error, success, focus, disabled, menu-open, and responsive states are omitted. The consumer home was captured with a modal already open (backdrop `rgba(0, 0, 0, 0.7)`); that is a rest observation, not a dialog-open interaction. Corrected 2026-09-29: the July text read the empty interaction record as the absence of every state sample.

## Voice & Tone

### Content & Voice

Official careers copy frames the consumer experience around making a dining choice with more confidence and enjoyment, and the merchant experience around connecting reservation, waiting, POS, and store operations. Use that clarity—choice for diners, operational continuity for merchants—without copying slogans or turning a careers narrative into consumer-product microcopy.

**Voice adjectives:** clear · food-centered · operationally concrete

| Do | Don't |
|---|---|
| Describe a diner choice or a concrete restaurant operation. | Invent urgency, discounts, or reservation states that were not captured. |
| Keep consumer and merchant messages audience-specific. | Treat a merchant lead-generation CTA as a diner-booking control. |
| Use calm, direct Korean service language. | Reproduce official slogans as generated product copy. |

## Governance

### Accessibility

- The consumer search has black text on `#F5F5F5`; the compact control has black text on white with a `#E4E4E4` border.
- The careers orange action is `#FFFFFF` on `#FF3D00`; it is a marketing observation, not an accessibility approval for all consumer actions.
- No focus-visible state is declared. The bundle holds focus frames only for the two merchant navigation links, and the collector presses before it focuses, so those frames are not focus-visible evidence. Any implementation needs its own accessible focus treatment rather than inferring one from the recorded radii.
- Declared-only fonts must not be presented as loaded CatchTable faces.

### Known Gaps

- **Contrast, `careers-orange-action`.** Text `#ffffff` on `#ff3d00` measures 3.55:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `merchant-gnb-link`.** Text `#37352f` on `#00000000` measures 1.71:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `careers-header-orange-item`.** Text `#ffffff` on `#ff3d00` measures 3.55:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `careers-blue-action`.** Text `#ffffff` on `#388fff` measures 3.21:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `careers-pill-action`.** Text `#ffffff` on `#ff3d00` measures 3.55:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `consumer-category-shortcut`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `consumer-restaurant-card`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
