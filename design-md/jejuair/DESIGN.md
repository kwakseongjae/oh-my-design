---
name: Jeju Air
colors:
  primary: '#ff5000'
  orange-sub: '#ff8300'
  background: '#ffffff'
  foreground: '#000000'
  content: '#333333'
  card-ink: '#222222'
  muted: '#666666'
  surface: '#f2f2f2'
  border: '#dddddd'
  disabled: '#aaaaaa'
typography:
  navigation:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: '-0.2px'
    use: 예약 navigation anchor and its visible label; live-loaded FlightSans
  booking-tab:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 27px
    use: 항공권 예매 tab in the survey
  input:
    fontSize: 14px
    fontWeight: 400
    use: promo-code input; line-height computed as normal
  service-label:
    fontSize: 16px
    fontWeight: 400
    use: 좌석 visible child label; hover and press use weight 600
rounded:
  square: 0px
  button: 2px
  tab-top: 8px
spacing:
  input-x: 20
  input-y: 15
  fare-card-gap: 16
components:
  seat-service:
    type: button
    textColor: '#333333'
    rounded: 0px
    height: 134px
    padding: 0px
    typography: 16px / 400
    hover: visible label 16px/600; image transform matrix(1.1, 0, 0, 1.1, 0, 0)
    pressed: visible label 16px/600; image transform matrix(1.1, 0, 0, 1.1, 0, 0), identical to hover
    use: '좌석 service link on the white page, 122px wide; 100x100px image on a #f2f2f2 disc. Font describes the visible label; the anchor itself is 18px/400. Keyboard focus had no computed visual change.'
  promo-code:
    type: input
    textColor: '#000000'
    rounded: 0px
    height: 48px
    padding: 15px 20px
    typography: 14px / 400
    pressed: 'parent ::after black #000000 underline grows from 0px to 671px wide, 1px high; input also has focus during press'
    focus: 'parent ::after black #000000 underline grows from 0px to 671px wide, 1px high; returns to 0px after blur'
    use: '프로모션 코드를 입력해주세요! text field, 671px wide on white; own background is transparent and own border is none. The parent frame is 1px solid #dddddd. Hover had no computed change.'
  nav-booking:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 76px
    padding: 0px
    typography: 16px / 700
    hover: 'label span::after #ff5000 underline grows from 0px to 49.0469px wide, 3px high; transform matrix(1, 0, 0, 1, -24.5234, 0)'
    pressed: 'label span::after #ff5000 underline 49.0469px wide and 3px high, identical to hover'
    use: '예약 anchor styled as a navigation link on white; no href captured. Width 49px rounded by the probe. Visible child label is #000000; anchor color is #333333. Second states call used hideOverlays: true; computed pointer states matched, but state crops were unstable. Keyboard focus was not reached and is unmeasured.'
fonts:
  roles:
    sans: FlightSans
---

# Design System Inspiration of Jeju Air

## Overview

### Visual Theme & Atmosphere

Jeju Air is a Korean low-cost airline founded in 2005. Its tenth-anniversary BI brightened Jeju-tangerine orange, added blue for safety and trust, and used an “i” flag to welcome travellers. The current font material records a 2025 v0.2 update to numeric and Latin spacing; the history lists a J campaign brand site in June 2025. [Official company and brand page](https://www.jejuair.net/ko/about/corp/page.do).

The live interface combines orange marks and selected states with a white booking panel, dark labels, destination photography and small illustrated service shortcuts. The illustrations give the service row a softer character than the compact, mostly square form controls. This is an interpretation of the captured homepage, not a published design principle.

The measured homepage is the Korean edition (`www.jejuair.net/ko/main/base/index.do`), with HTML `lang="ko"`, reached from the supplied root URL.

Primary tasks visible on this surface are booking a flight, looking up a reservation or flight, and finding seat, baggage and other travel services.

### Brand Narrative

The captured surface makes travel tangible through destination photographs and illustrated seat, baggage and meal shortcuts. Orange connects the wordmark with selected states and small action labels. That visual reading explains how the booking interface expresses the brand without assigning an unverified persona to its users.

### Principles

The company lists safety, efficiency, professionalism, open-mindedness and collaboration as core values. These are corporate values, not published UI rules. The implementation guidance in §7 comes from the live measurements. [Company values](https://www.jejuair.net/ko/about/corp/page.do).

### Personas

No verified persona research was found in the opened sources.

## Colors

These role labels describe measured uses; they are not published CSS custom-property names. The survey's 12 captured custom properties belong to a Groobee promotion embed and are excluded. Two stylesheets were unreadable to the browser's stylesheet walk, so the declared-property inventory is incomplete.

| Role | Value | Live evidence |
|---|---|---|
| Primary orange | `#ff5000` | Header navigation underline, selected trip type, and visible lowest-fare button label |
| Orange sub | `#ff8300` | Lowest-fare button's 1px border |
| Background | `#ffffff` | Fare card and lowest-fare button; white page in the screenshots |
| Foreground | `#000000` | Most frequent paragraph ink: 24 paragraphs; promo-code input and visible header label |
| Content | `#333333` | Service label and anchors' own computed color |
| Card ink | `#222222` | Destination card's visible route and price descendants |
| Muted | `#666666` | Card date and utility links |
| Surface | `#f2f2f2` | Service illustration's 100×100px backing disc |
| Border | `#dddddd` | Promo-code field's parent frame |
| Disabled | `#aaaaaa` | Initially disabled flight-search button background |

The official BI page separately documents Orange `#ff5000`, Orange Sub `#ff8300` and Blue `#00a7e1`. Blue is brand-document evidence only here and is not included in the live color tokens. [Official color guide](https://www.jejuair.net/ko/about/corp/page.do).

The inactive booking tabs have `rgba(0, 0, 0, 0.6)` backgrounds over photography. Transparent control backgrounds are left unset in component tokens.

## Typography

- **Official product-use evidence:** Flight Sans is the company's dedicated typeface, documented in Title, Bold and Regular cuts. [Official font material](https://www.jejuair.net/ko/about/corp/page.do).
- **Live-loaded:** `FlightSans 400 normal`, `600 normal`, `700 normal` and `800 normal` appear in `document.fonts`. Body, h1 and button computed family declarations are all `FlightSans`.
- **Serving definitions:** The [linked first-party stylesheet](https://static.jejuair.net/hpgg/resources/css/front-jejuair.css?v=202610271439) maps 400 to `FlightSans-Regular`, 600/700 to `FlightSans-Bold`, and 800 to `FlightSans-Title`, each with WOFF2, WOFF and EOT URLs under `../font/FlightSans/`. These are source definitions; individual network font requests were not captured.
- **Official distributed assets:** Print and screen downloads are offered. The page permits free commercial and noncommercial use, excluding font sales and BI/CI use. The attached PDF was not inspected and no font archive was downloaded.
- **Declared-only:** The same stylesheet declares `SpoqaHanSansNeo` at 300/400/700/800 and `FlightSans` at 900. None of those faces appears as loaded in this survey. They receive no specimen or additional family token.
- **Unresolved:** The font package's full license and per-script glyph coverage were not inspected. **Substitute: none chosen.**

Measured sizes are local to their controls: navigation 16px/700 with 24px line-height and −0.2px tracking; booking tabs 18px/700 with 27px line-height; promo-code input 14px/400 with `normal` line-height. The seat shortcut's anchor computes to 18px/400, while its visible child label is 16px/400 and becomes 16px/600 under pointer interaction.

## Layout

At 1440×1000, a notice strip and white header precede a photographic hero. A white booking panel overlaps the image; its tab strip uses white for the selected booking task and translucent black for the other two tasks. Illustrated service shortcuts follow the panel, then promotion and fare carousels. This arrangement is visible in the states screenshots.

The lowest-fare date strip's surveyed anchor is 1004px wide. Separately, the destination fare links are 240px wide with a 16px horizontal gap, calculated from consecutive x positions 209, 465 and 721. The promo-code field uses 20px horizontal and 15px vertical padding. These measured values are not a complete spacing scale.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; no responsive breakpoint or mobile behavior is verified.

## Elevation & Depth

All six selected controls have computed `box-shadow: none`. The viewport shows a softly elevated booking panel, but its shadow was not numerically measured. The promotion embed's `0 0 32px 0 rgba(0, 0, 0, 0.16)` shadow is excluded from brand tokens.

## Motion & Easing

Every selected control's own computed transition is `all 0s ease 0s`. The timing scan reports a 200ms maximum within the seat link's compared scope and 300ms for the promo-code field's scope; those scopes include descendants and three ancestor levels. They are not component-level duration tokens. The raw data does not serialize the nonzero descendant or pseudo-element transition strings, so no easing curve is assigned.

---

First-party sources: [live homepage](https://www.jejuair.net/) and its Korean edition; [company, BI, history and font material](https://www.jejuair.net/ko/about/corp/page.do); [linked product stylesheet](https://static.jejuair.net/hpgg/resources/css/front-jejuair.css?v=202610271439); [legal terms and address](https://jj.jejuair.net/dom/pageTerm.do); [company-authored 2024 statutory report](https://kind.krx.co.kr/external/2025/03/18/001337/20250318006242/11011.htm). Captured 2026-11-03. Raw values, controls and collection limits are recorded in verification.md and report.md.

## Components

**Seat service link — “좌석”.** A 122×134px anchor, radius 0, padding 0, transparent on the white page, own and label color `#333333`. Its 100×100px illustration sits on `#f2f2f2`. Hover and press change the image transform from `matrix(1, 0, 0, 1, 0, 0)` to `matrix(1.1, 0, 0, 1.1, 0, 0)` and the visible label from 16px/400 to 16px/600. Keyboard focus produced no computed visual change within the measured scope.

**Promo-code input — “프로모션 코드를 입력해주세요!”.** 671×48px, radius 0, padding 15px 20px, FlightSans 14px/400, `#000000` ink. The input has no own border or opaque background; its parent has a 1px `#dddddd` frame. Hover produced no computed change. Press and keyboard focus expand the parent's black `::after` underline from 0×1px to 671×1px. During press the input is also focused; no separate active-only treatment is established. After blur the underline returns to 0px width.

**Header navigation — “예약”.** A 49×76px anchor, radius 0, padding 0, FlightSans 16px/700. The visible child label is `#000000`; the anchor's own color is `#333333`. In the second pass with `hideOverlays: true`, hover and press expand the child's orange `#ff5000` `::after` from 0×3px to 49.0469×3px, with transform `matrix(1, 0, 0, 1, -24.5234, 0)`. Both pseudo-classes matched at sampling. The pointer-state screenshots lost their states during cropping; keyboard focus was not reached. These limits accompany the component's raw computed observations.

Other measured controls remain prose observations:

- **“항공권 검색”:** 160×50px, 2px radius, padding 14px 0, 16px/700, `#aaaaaa` background and `#ffffff` ink. It was natively disabled. Hover, pressed and keyboard focus are **UNMEASURED**, not unchanged.
- **“최저가 검색”:** 140×50px, 2px radius, padding 0 20px, white background and 1px `#ff8300` border. Its own 13.3333px/400 white text declaration is overridden on the visible child by 16px/400 `#ff5000`. Hover, press and keyboard focus were measured with no computed change. It has no component token.
- **Nha Trang destination card link:** 240×417px, radius 0, padding 0, white background. Its anchor is 18px/400 `#333333`, while the visible route and price are `#222222` and the date is `#666666`. The photographic background region is 240×312px. Hover had no computed change; press and focus readings were polluted by translation of the carousel wrapper, including movement after blur. No card-state token is published.

Measured corner values are 0 on the links/input and 2px on the two search buttons. Booking tabs have `8px 8px 0px 0px` corners; the 8px token refers only to their top corners.

### States

Hover and press share the seat link's 1.1 image scale and 600-weight label, and the header label's 3px orange underline. Promo-code press also focuses the input; the same 1px black underline appears under keyboard focus and clears after blur. No additional pressed-only visual treatment was established for these controls.

“No computed change” is limited to the probe's scope: self, descendants and their `::before`/`::after`, plus three ancestor levels and their pseudo-elements. Compared properties include color, background, border, drawn outline, shadow, opacity, transform, filter, visibility, size, decoration, images, masks and SVG attributes. Descendant counts were 1 for the fare button, 0 for the input, 9 for the fare card, and 4 including one image for the service link. Navigation focus and all interactive states of the disabled main CTA remain unmeasured. No browser-default focus ring is promoted to a token.

## Do's and Don'ts

Reference guidance from the measured surface:

- Use the loaded FlightSans face and keep the visible child label's metrics distinct from its wrapper.
- Use orange for the measured selected trip indicator and header underline; preserve the white field surfaces.
- Pair the seat illustration's 1.1 scale with a 600-weight label under hover and press.
- Keep the promo field's focus underline on its parent wrapper.
- Do not turn the disabled CTA into an enabled-state specification, or carousel translation into a card interaction effect.
- Do not import the Groobee modal's corner and shadow variables into the product palette or shape tokens.

## Voice & Tone

Observed copy is task-led: “항공권 검색”, “예약 조회”, “출발지” and “도착지”. The promo-code placeholder uses a polite request with an exclamation mark. These are homepage copy observations, not a documented writing guide.

## Agent Prompt Guide

“Build a Jeju Air service shortcut link, 122×134px, with a 100×100px illustration on a `#f2f2f2` disc. Use the loaded FlightSans face for a 16px/400 `#333333` label. On hover and press, scale the illustration to 1.1 and change the label weight to 600.”

“Build the observed 671×48px promo-code field on white with 15px 20px padding and 14px/400 FlightSans. Put the 1px `#dddddd` frame on its parent; keyboard focus reveals a black 1px underline across 671px.”
