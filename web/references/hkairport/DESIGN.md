---
name: Hong Kong International Airport
colors:
  primary: '#3d51e4'
  selected-section: '#2a47b1'
  canvas: '#ffffff'
  foreground: '#000000'
  service-surface: '#f6f1ef'
  service-coral: '#f25144'
  action-aqua: '#01e1bf'
  card-hover-orange: '#fc5600'
  notice-yellow: '#ffaa00'
  search-icon: '#001e3f'
typography:
  navigation:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 60px
    use: main navigation link; full header
  action:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28.8px
    use: hero flight action and secondary facilities link
  search:
    fontSize: 24px
    fontWeight: 400
    lineHeight: 53px
    use: homepage search input
  service:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 21px
    use: Wi-Fi facility link
  card-title:
    fontSize: 24px
    fontWeight: 400
    use: transport card title span
  footer-link:
    fontSize: 16px
    fontWeight: 300
    lineHeight: 25.6px
    use: footer passenger links
rounded:
  none: 0px
  carousel-indicator: 6px
spacing:
  search-left: 10
  navigation-inline: 18
  card-gap: 16
components:
  arrival-link:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 29.6px
    padding: 0px 0px 0px 37px
    typography: 18px / 400
    hover: 'Label colour #01e1bf, underline and translateX(20px); aircraft span translates 20px; trailing arrow translates 18px and fades from 1 to 0.'
    pressed: Same measured appearance as hover.
    use: 抵港航班 is a transparent link on the hero flight panel's dark background image. The link itself has no fill. Browser auto focus ring is excluded.
  more-services:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 29.6px
    padding: 0px
    typography: 18px / 400
    hover: Label underlines and translates 20px; trailing coral arrow translates 18px and fades out; leading arrow translates from -18px to 0 and fades in.
    pressed: Same measured appearance as hover.
    use: '更多設施及服務 is a transparent secondary action link on #f6f1ef; the arrow is #f25144. Browser auto focus ring is excluded.'
  nav-flights:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 60px
    padding: 0px 18px
    typography: 18px / 400
    hover: 'The ::before bottom rule, 4px solid #01e1bf, grows from zero width to the link width: 100px in the first pointer pass, 108px in the repeat.'
    pressed: Same measured underline as hover.
    use: 航班資料 is a transparent navigation link on white. Full-header padding is 18px per side; the compact header measured 14px. Persistent focus-pass layout changes are excluded.
  transport-card:
    type: card
    textColor: '#000000'
    rounded: 0px
    height: 410.9px
    padding: 0px
    typography: 18px / 400
    hover: 'Image wrapper ::before paints an 8px solid #fc5600 frame; image transform changes from matrix(1.05, 0, 0, 1.05, 0, 0) to matrix(1, 0, 0, 1, 0, 0); text underlines.'
    pressed: Same measured frame, image transform and underline as hover.
    focus: Link text-decoration changes from none to underline. Browser auto outline is excluded.
    use: 往來機場的交通服務 is a transparent image card link on white, with a separately measured 24px/400 title. Height is the first settled rest snapshot; the repeat measured 410.8px. Initial identity rectangles differ.
  wifi-service:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 126px
    padding: 0px
    typography: 15px / 400
    hover: 'The 90px square ::before icon changes background from #f25144 to #f6f1ef; sprite position changes from 0% 0% to 50% -100px; label underlines.'
    pressed: Same measured icon background, sprite position and underline as hover.
    focus: Label text-decoration changes from none to underline. Browser auto outline is excluded.
    use: 'Wi-Fi is a transparent facility link on #f6f1ef. Its icon pseudo-element retains a 2px #f25144 border. The link''s zero radius does not describe the circular icon.'
fonts:
  roles:
    sans: roboto condensed
---

# Design System Inspiration of Hong Kong International Airport

## Overview

### Visual Theme & Atmosphere

Hong Kong International Airport (HKIA) brings flight information, passenger guidance, ground transport, shopping, dining and entertainment into one passenger portal. Airport Authority Hong Kong operates and develops the airport; its own account dates the Authority to 1995. The airport's history records the overnight move from Kai Tak to Chek Lap Kok on 6 July 1998. [Website terms](https://www.hongkongairport.com/en/terms-of-use.page), [operator](https://www.hongkongairport.com/en/airport-authority/vision-mission/), [history](https://www.hongkongairport.com/en/about-us/).

The measured homepage is the Traditional Chinese edition at `hongkongairport.com/tc/`. Its visual identity combines a mint-coloured airport mark, a vivid blue utility bar and footer, large terminal photography, a dark flight-information panel and a white search area. Aqua arrows and navigation rules provide small directional accents; coral service icons and an orange image-card frame give different tasks their own emphasis. These are observations of the live passenger homepage, not claims of published brand standards.

The airport's development narrative extends beyond flying: on 16 January 2025, the Authority introduced **SKYTOPIA** as the brand for its Airport City development, bringing commerce, popular culture, art trading, entertainment and leisure into that programme. That is a documented development brand, not evidence of a rename of HKIA or a website redesign. The passenger homepage expresses a related breadth through transport, facilities, a layover tour and arts-and-culture content. [Official SKYTOPIA announcement](https://www.hongkongairport.com/en/media-centre/press-release/2025/pr_1771), [live homepage](https://www.hongkongairport.com/tc/).

#### Primary tasks

- Reach arrivals or departures information directly from the hero panel.
- Search the website and find transport, parking and airport facilities.
- Explore services and activities available at the airport.

### Brand Narrative

HKIA's official history connects the present airport to its overnight relocation in 1998. The Authority's 2025 SKYTOPIA announcement broadens the development story into a destination for commerce, culture and leisure. For a reference based on the passenger portal, the useful expression is the coexistence of flight tasks and place-based discovery: arrivals, ground transport and facilities alongside a layover tour and arts content. [History](https://www.hongkongairport.com/en/about-us/), [development announcement](https://www.hongkongairport.com/en/media-centre/press-release/2025/pr_1771), [homepage](https://www.hongkongairport.com/tc/).

### Principles

The Authority's published values are “Continuous Improvement”, “Commitment”, “Collaboration”, “Caring” and “Creativity”. Its mission also addresses efficient operations, customer expectations, environmental care, innovation, and safety and security. These are the operator's organisational statements; their use here does not imply a separately published web-design doctrine. [Vision, Mission & Values](https://www.hongkongairport.com/en/airport-authority/vision-mission/).

### Personas

No research-backed personas were verified.

## Colors

The readable live census returned **zero root custom properties and zero declared custom properties**. These role names organise measured colours for this reference; they are not names of official CSS variables.

| Role | Measured value | Evidence and use |
|---|---|---|
| Primary | `#3d51e4` | Nine backgrounds in the census; blue utility/header and footer areas in the capture. |
| Selected section | `#2a47b1` | Rest background of the header's current “旅客資訊” link. |
| Canvas | `#ffffff` | Fifteen census backgrounds; search-input fill. |
| Foreground | `#000000` | The sole visible paragraph in the census; navigation, card and service labels. |
| Service surface | `#f6f1ef` | Facilities-band background behind the secondary action and Wi-Fi link. |
| Service coral | `#f25144` | Secondary-action arrows and the Wi-Fi icon's rest fill and 2px border. |
| Action aqua | `#01e1bf` | Arrivals-label hover colour, its trailing arrow and the navigation's 4px bottom rule. |
| Card hover orange | `#fc5600` | An 8px image-wrapper frame on the transport card's hover and pressed states. |
| Notice yellow | `#ffaa00` | The important-notice strip shown in the survey. |
| Search icon | `#001e3f` | The search action's foreground in survey row 33. |

The most frequent census text colour was white, but the measured paragraph ink was black. The frequently occurring `rgb(51, 122, 183)` link colour is not promoted to a brand token: Bootstrap is loaded and the visible label can be a differently coloured child. No logo colour was sampled numerically.

## Typography

**Official product use:** no opened narrative or brand document identifies a prescribed product typeface.

**Live-loaded:** `document.fonts` reported **roboto condensed / Roboto Condensed**, normal weights **300, 400 and 700**, plus **hkia-fonts**, normal 400. The differently capitalised Roboto Condensed entries are retained in the evidence and represented as one family in the tokens. `hkia-fonts` is an icon face, not a text family.

**Official distributed assets:** the site's [stylesheet](https://www.hongkongairport.com/iwov-resources/css/styles.css) publishes `@font-face` URLs for `RobotoCondensed-Light`, `RobotoCondensed-Regular`, `RobotoCondensed-Bold` and `hkia-fonts` beneath `/iwov-resources/css/fonts/`. The live census exposes WOFF and TTF sources. No font binaries were fetched and no licence was verified.

**Declared-only:** the body, h1 and button family stack reads `"roboto condensed", mhei, STXihei, 微軟正黑體, Arial, PMingLiU, Arial, sans-serif, Verdana, Helvetica`. Only Roboto Condensed enters the text-family token. None of the other named faces receives a specimen.

**Unresolved:** the font that actually supplied Traditional Chinese glyphs is not identified by the census. A loaded Latin face does not establish Han glyph coverage. **Substitute: none chosen.**

| Measured role | Size / weight | Line height |
|---|---|---|
| Full-header navigation | 18px / 400 | 60px |
| Flight and secondary action links | 18px / 400 | 28.8px |
| Search input | 24px / 400 | 53px |
| Transport-card title span | 24px / 400 | Not separately recorded |
| Wi-Fi facility label | 15px / 400 | 21px |
| Footer passenger links | 16px / 300 | 25.6px |

## Layout

The desktop survey used a 1440 × 1000 viewport. The header places a blue utility row above a white primary-navigation row. Below the hero and centred search are three image cards, then a full-width facilities band, exploration content and a blue multi-column footer.

The first two image-card links start at x=80 and x=507 and are each 411px wide: a measured **16px gap**. The search input has a **10px left inset**. Full-header navigation uses **18px horizontal padding**, changing to 14px in the compact header. These are local measurements, not a global spacing scale. The hero's lower white edge forms a shallow central point in the viewport capture.

### Responsive Behavior

Only the 1440 × 1000 desktop viewport was measured; no mobile layout or breakpoint behaviour was verified.

## Elevation & Depth

All six measured controls have `box-shadow: none` at rest. The transport card's pointer treatment is an image frame and image-scale change. The Wi-Fi icon uses a sprite and border. No general elevation scale was verified.

## Motion & Easing

The arrivals and secondary-action links each expose the raw computed self transition **`all 0.3s ease-out 0s`**. Their measured hover moves the label span 20px and changes arrow transforms and opacity. The other four controls' self transition is **`all 0s ease 0s`**; their descendant and pseudo-element effects must not be assigned that self transition. No cubic-bezier curve or reduced-motion behaviour was verified.

---

**Evidence:** live homepage survey and keyboard/pointer states, captured 2026-11-09. First-party narrative and stylesheet sources are linked above; exact snapshots, control identities, comparison scopes, source quotes and limitations are recorded in `report.md` and `verification.md`.

## Components

The measured controls are links, apart from the search input. A link represented as `button` in the structured tokens retains its link semantics. All five exported links have transparent self backgrounds; their backgrounds are omitted from the component tokens.

- **Arrivals action — 抵港航班.** Rest snapshot 137 × 29.6px, 0px radius, padding `0px 0px 0px 37px`, 18px/400, white label on the hero's dark flight-panel image. Hover changes the label to aqua, underlines it and translates the label and aircraft span 20px to the right. The trailing arrow translates 18px and fades from opacity 1 to 0. Pressed matches hover.
- **Secondary action — 更多設施及服務.** 154 × 29.6px, 0px radius and padding, 18px/400, black label over the service surface. Hover underlines and translates the label 20px. The trailing coral arrow translates 18px and fades out; a leading arrow moves from -18px to 0 and fades in. Pressed matches hover.
- **Main navigation — 航班資料.** Full-header rest size 108 × 60px, radius 0px, padding `0px 18px`, 18px/400, black on white. The first pointer pass uses a compact-header width of 100px and horizontal padding of 14px; the repeat pointer pass measures 108px width and 18px padding. Hover and pressed grow the aqua 4px bottom rule from zero to the observed link width. Focus-pass layout changes that persist after blur are not focus tokens.
- **Transport image card — 往來機場的交通服務.** The first settled rest snapshot is 411 × 410.9px, with 0px radius and padding, transparent self background and black text; the repeat is 411 × 410.8px. Initial identity rectangles are smaller and are not used as the settled size. The link inherits 18px/400; its title span measures 24px/400. Hover adds an **8px `#fc5600` frame to the image wrapper**, underlines the text and changes the image from `matrix(1.05, 0, 0, 1.05, 0, 0)` to `matrix(1, 0, 0, 1, 0, 0)`. Pressed matches hover. Keyboard focus underlines link text without the pointer's image treatment.
- **Facility link — Wi-Fi.** The 130 × 126px link has 0px radius and padding and a black 15px/400 label. Its circular icon is a separate 90 × 90px pseudo-element. Hover changes that icon's fill from coral to the service surface and changes the sprite position from `0% 0%` to `50% -100px`; its 2px coral border stays. Hover, pressed and keyboard focus underline the label; focus does not reproduce the pointer's icon treatment.

The **搜尋網站** search input is recorded in prose: 415 × 53px, radius 0px, padding `0px 0px 20px 10px`, black 24px/400 text on white, no border or shadow. Hover, pressed and Tab focus produced no change within the probe's comparison scope, so it is omitted from `components`.

All exported links showed a browser `outline-style: auto` ring under keyboard focus. It is not a brand focus token. Only the independently measured text underline is retained for the card and Wi-Fi focus states.

The survey's carousel buttons measured a 6px corner radius and 12px height; this does not establish a general rounded-button system.

### States

Pointer states were sampled with `:hover` true; pressed snapshots also had `:active` true. Keyboard focus came from a real Tab walk. Every exported link has an authored pointer change. The pressed snapshots added no differences beyond hover in the compared scope.

The arrivals and secondary links expose only a browser auto ring on Tab focus. The navigation focus pass also contains width, padding and rule changes that persisted after blur; those changes are not treated as focus indications. The transport card and Wi-Fi link add reversible text underlines on keyboard focus, alongside their browser auto rings. The search input had no measured style change in any of the three states. Disabled, validation, loading and error states were not measured.

The comparison covers the element, its pseudo-elements, recorded descendants and their pseudo-elements, and three ancestor levels. It does not establish absence of changes inside external sprites, cross-origin frames, canvas/video or sibling elements. The Wi-Fi sprite-position change is verified; its internal image pixels were not inspected as separate tokens.

## Do's and Don'ts

- Use the measured blue for large utility and footer areas, with black text on the white content canvas.
- Keep the action-arrow, navigation-rule, service-icon and image-frame colours tied to their measured roles.
- Animate the internal text and arrow spans when reproducing the measured action links; the outer link remains in place.
- Build the transport-card frame on the image wrapper, preserving the separate text area.
- Preserve link semantics and the distinction between pointer and keyboard treatments.
- Do not assign an unverified Chinese typeface or convert the browser's auto ring into a brand token.

## Voice & Tone

The measured homepage combines direct task labels, such as “抵港航班” and “搜尋網站”, with an invitation in the hero: “開展無限精采旅程”. The facilities and exploration areas mix practical guidance with an invitation to spend time at the airport. This describes the captured copy, not a published tone-of-voice guide. [Live homepage](https://www.hongkongairport.com/tc/).

## Agent Prompt Guide

“Create a desktop airport passenger portal with a `#3d51e4` utility row and footer, a white main-navigation row and black content text. Use terminal photography above a centred search area and three square-cornered image cards. Put facilities on `#f6f1ef` with `#f25144` icon treatments. Use `#01e1bf` for directional action accents. For a transport card, add an 8px `#fc5600` image frame on hover, reduce the image scale from 1.05 to 1 and underline the text. Keep the title at 24px/400. Roboto Condensed is the verified loaded text face; leave the unresolved Chinese glyph face unspecified.”
