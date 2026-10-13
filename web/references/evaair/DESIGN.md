---
name: 長榮航空
colors:
  canvas: '#ffffff'
  foreground: '#000000'
  on-green: '#ffffff'
  green-panel: '#4b7d6b'
  accent: '#cc4b00'
  hairline: '#666666'
typography:
  body:
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.5
    use: Repeated public page body only; the computed Dotum-first stack has no matching loaded FontFace in the supplied evidence.
  nav-label:
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.2
    use: Observed public navigation-list label only; no named EVA UI family is claimed.
  accordion-label:
    fontSize: 30px
    fontWeight: 500
    use: Awards-page accordion trigger label only.
rounded:
  square: 0px
  media: 3px
  input: 3px
spacing:
  xs: 5
  sm: 10
  md: 20
  lg: 30
components:
  booking-field:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #666666'
    rounded: 3px
    padding: 10px 10px 10px 50px
    height: 44px
    typography: 16px / 400 / unresolved computed stack
    states: default captured; the interaction log records booking-tab selection only, not focus, error, disabled, or pressed values
    use: Home booking text field; selector home::[data-omd-capture=151].
  booking-widget-tab:
    type: tab
    backgroundColor: '#4b7d6b'
    textColor: '#ffffff'
    rounded: 24px
    padding: 1px 10px
    height: 42px
    typography: 16px / 500 / unresolved computed stack
    states: selected and tab-selected were captured; no hover, focus, pressed, or disabled values were captured
    use: Home booking-widget selected tab; selector home::[data-omd-capture=145].
  award-accordion:
    type: button
    textColor: '#cc4b00'
    border: '0px 0px 1px #eeeeee'
    rounded: 0px
    padding: 30px 70px 30px 40px
    height: 96px
    typography: 30px / 500 / unresolved computed stack
    states: default captured only; no expanded, hover, focus, pressed, or disabled value was captured
    use: Awards-page accordion trigger; selector awards::[data-omd-capture=144].
  green-information-card:
    type: card
    backgroundColor: '#4b7d6b'
    textColor: '#ffffff'
    rounded: 0px 0px 3px 3px
    padding: 20px
    typography: 16px / 300 / unresolved computed stack
    use: About-page card information panel; selector about::div.card-info.card-info--green.
  footer-list-item:
    type: listItem
    textColor: '#ffffff'
    rounded: 0px
    padding: 10px 0px
    typography: 16px / 300 / unresolved computed stack
    use: Public footer list row; selector home::li.footer-listItem.
---

# Design System Inspiration of 長榮航空

## Overview

### Visual Theme & Atmosphere

EVA Air is Taiwan’s international airline, created by Evergreen Group founder Chang Yung-Fa in 1989 and flying its first service in 1991. Its public web presence combines a travel-planning utility surface with corporate material about safety, service, and a global network. The supplied Korean home, about, and awards pages are notably restrained: white fields and black copy carry the information load; the measured green `#4b7d6b` is concentrated in information-card treatment; orange `#cc4b00` marks the awards accordion’s active label. The visual impression is orderly and operational rather than built from broad, saturated marketing fills.

The distinction matters because EVA’s corporate expression extends beyond this capture. Its official values page frames the airline around quality service, safety, comfort, international reach, and environmental care, while the current company chronicle records newer digital cargo and route initiatives. Those are brand and business context—not a license to expand the three measured web surfaces into a universal cabin, mobile app, or booking-flow design system. This reference keeps the current public web geometry and its evidence boundaries intact.

**Key characteristics:**

- White `#ffffff`, black `#000000`, and square `0px` chrome dominate the supplied public pages.
- A green `#4b7d6b` information-card panel pairs with white text and a 3px lower media edge.
- The awards page uses `#cc4b00` for its 30px accordion labels rather than a filled primary button.
- 3px form-control corners coexist with selected 24px booking-widget tabs; geometry is contextual, not a single radius scale.
- The only captured interaction records are booking-tab selected states. No hover, focus, pressed, disabled, error, dialog, or toast values are promoted.

### Primary tasks

- Search routes, fares, and travel information before booking a flight.
- Change a booking, check in, and choose seats and meals.
- Find current information about special travel requirements and support.

### Brand Narrative

EVA Airways was established by Evergreen Group founder Chang Yung-Fa in 1989, with its first flight following in 1991. EVA’s own account situates the airline in Evergreen’s transportation heritage while setting quality service and safety as the starting standards for the carrier.

Its current narrative connects global service, comfort, safety, and environmental care. The official values page describes a network from Taiwan’s Taoyuan hub and links service improvements such as digital dining and e-library services to environmental goals. The company chronicle also records current digital cargo participation and network expansion, showing that the brand is evolving through operational and service infrastructure as well as passenger-facing hospitality.

EVA’s official marketing policy asks its teams and partners to keep product information accurate, transparent, fair, and socially responsible. That documented commitment is stronger evidence for a precise, non-exaggerated communication posture than any invented brand slogan or executive quotation.

### Principles

1. **Safety and service are coequal.**
   *UI implication:* make safety, assistance, and trip-management information clear rather than decorative.

2. **Accurate information earns trust.**
   *UI implication:* prefer specific labels, conditions, and status information over promotional abstraction.

3. **Global travel should remain navigable.**
   *UI implication:* organize public journeys around planning, managing, flight information, and assistance without conflating them.

4. **Sustainability belongs in operational context.**
   *UI implication:* state the relevant initiative or action precisely; do not turn sustainability into an unsupported green UI semantic.

### Personas

The following are stakeholder archetypes derived from EVA’s public service categories, not synthetic research personas or behavioral claims.

- **Trip planner:** uses the public site to search routes, fares, and travel information before booking.
- **Managing passenger:** needs clear access to booking changes, check-in, seats, meals, and flight updates.
- **Assistance seeker:** needs current, accessible information about special travel requirements and support.
- **Corporate or cargo partner:** encounters business-travel, cargo, digital, and operational information in EVA’s broader public ecosystem.

## Colors

### Selector-backed public surface colours

- **Canvas** (`#ffffff`): repeated public page ground and form field fill.
- **Foreground** (`#000000`): body, navigation, and form text in the supplied pages.
- **Green information panel** (`#4b7d6b`): about-page `card-info--green` panel and selected booking-widget tab fill.
- **On green** (`#ffffff`): observed text and border sibling on the green information panel and selected tab.
- **Awards accent** (`#cc4b00`): awards-page accordion trigger text; it is not evidenced as a generic filled CTA.
- **Hairline / form border** (`#666666`): observed booking-field border and header utility separator.

`#ed5500`, `#d8d8d8`, and other low-frequency samples remain raw evidence rather than canonical role tokens. Do not turn the green panel into an inferred success state or the orange accordion label into a universal action color.

## Typography

### Font evidence classes

| Evidence class | Resolution |
|---|---|
| Official product-use | No EVA typography standard or product-specific family statement was located in the first-party material reviewed. |
| Live computed surface-use | The supplied Korean public surfaces repeatedly compute to a Dotum-first Korean stack. The artifact classifies `Dotum` as unresolved because it has no matching loaded FontFace or known-system mapping. |
| Official distributed brand asset | No EVA-owned distributed type asset was located. |
| Declared-only | EVA-hosted `Roboto Mono` declarations have zero visible uses in the supplied capture. |
| System / license context | EVA-hosted Roboto files appear in the raw evidence, but the artifact classifies Roboto as system rather than an EVA brand face. Roboto’s separate Apache-2.0 license does not make it an EVA typography token. |

The Dotum-first stack is therefore described as a live computed surface fact only and is not promoted to `tokens.typography.family`. No fallback typeface may be rendered as though it were an EVA-owned face.

| Role | Size | Weight | Line height | Captured context |
|---|---:|---:|---:|---|
| Body | 16px | 300 | 24px | Repeated public page body |
| Navigation label | 14px | 300 | 16.8px | Public navigation list |
| Booking tab | 16px | 500 | 22.4px | Selected booking widget tab |
| Awards accordion label | 30px | 500 | normal | Awards-page accordion trigger |

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.accordion-label.lineHeight`: `normal`

## Layout

- Preserve the separation between a compact booking module, long-form corporate information, and an awards list.
- Use the measured 5px, 10px, 20px, and 30px spacing values only in contexts supported by the supplied public surfaces.
- Keep flat containers as the default; the green information card is a contained panel, not evidence that all travel cards receive a green fill.
- Treat booking controls as form geometry and awards rows as full-width information controls; do not collapse them into one generic button recipe.

### Responsive Behavior

The packet supplies desktop `1440x900` observations only. It establishes no breakpoints, mobile rearrangement, touch-target policy, or responsive typography behavior. Preserve the measured component geometry as desktop evidence and omit unobserved responsive rules.

## Elevation & Depth

The supplied home travel-card shell exposes `rgba(0,0,0,0.16) 0px 3px 6px 0px`. Most sampled public elements are flat and report no shadow. Retain that shadow only for the measured travel-card context; no modal, overlay, toast, or floating-menu elevation token was captured.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.travel-card`: `rgba(0,0,0,0.16) 0px 3px 6px 0px`

## Motion & Easing

No animation duration, easing curve, transition, or motion-reduction preference is present in the supplied computed-style and interaction evidence. The observed tab selection is a state record, not evidence for an animation contract; no motion tokens are invented.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.evaair.com/ko-kr/index.html · https://www.evaair.com/ko-kr/about-eva-air/about-us/ · https://www.evaair.com/ko-kr/about-eva-air/about-us/awards-and-honors/
**Tier 2 sources:** attempted https://getdesign.md/evaair and https://styles.refero.design/?q=EVA%20Air; neither returned an EVA Air record in the built-in web opener.
**Conflicts unresolved:** none

## Components

### Booking field

**Home booking text field — observed default**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #666666`
- Radius: 3px
- Padding: 10px 10px 10px 50px
- Height: 44px
- Font: 16px / 400 / unresolved computed stack
- States: default captured; the interaction log records booking-tab selection only, not focus, error, disabled, or pressed values
- Use: Home booking text field; `home::[data-omd-capture="151"]`.

### Booking widget tab

**Selected tab — observed selected state**
- Background: `#4b7d6b`
- Text: `#ffffff`
- Radius: 24px
- Padding: 1px 10px
- Height: 42px
- Font: 16px / 500 / unresolved computed stack
- States: selected and tab-selected were captured; no hover, focus, pressed, or disabled values were captured
- Use: Home booking widget selected tab; `home::[data-omd-capture="145"]`.

### Awards accordion

**Awards trigger — observed default**
- Text: `#cc4b00`
- Border: 0px 0px 1px `#eeeeee`
- Radius: 0px
- Padding: 30px 70px 30px 40px
- Height: 96px
- Font: 30px / 500 / unresolved computed stack
- States: default captured only; no expanded, hover, focus, pressed, or disabled value was captured
- Use: Awards-page accordion trigger; `awards::[data-omd-capture="144"]`.

### Green information card

**About-page information panel — observed default**
- Background: `#4b7d6b`
- Text: `#ffffff`
- Radius: 0px 0px 3px 3px
- Padding: 20px
- Font: 16px / 300 / unresolved computed stack
- Use: About-page card information panel; `about::div.card-info.card-info--green`.

### Footer list item

**Public footer row — observed default**
- Text: `#ffffff`
- Radius: 0px
- Padding: 10px 0px
- Font: 16px / 300 / unresolved computed stack
- Use: Public footer list row; `home::li.footer-listItem`.

### States

Only the booking tab’s selected state is captured. The supplied evidence does not establish visual specifications for empty, loading, error, success, skeleton, disabled, hover, focus, pressed, or dialog states; no values are added for them.

| Category | Evidence boundary |
|---|---|
| Empty | No captured empty-state component. |
| Loading | No captured loading indicator or timing rule. |
| Error | No captured error field, message, or color treatment. |
| Error recovery | No captured retry or recovery control. |
| Success | No captured success confirmation treatment. |
| Success follow-up | No captured completion or next-step component. |
| Skeleton | No captured skeleton surface. |
| Disabled | No captured disabled value. |
| Focus | No captured focus value. |
| Pressed / hover | No captured pressed or hover value. |
| Selected tab | Booking-widget `selected` and `tab-selected` states are captured; the selected tab values appear in §4. |

## Do's and Don'ts

### Do

- Keep high-density travel information legible against the measured white canvas and black text.
- Use `#4b7d6b` for the evidenced booking-selected or information-panel contexts.
- Preserve 0px structural edges, 3px input/media corners, and the observed 24px selected booking tab as distinct patterns.
- Treat the availability of accessibility and accurate service information as a content requirement, consistent with EVA’s published marketing policy.

### Don't

- Do not present `#cc4b00` as a global filled CTA; its supplied evidence is an awards accordion label.
- Do not substitute a system or fallback font for an EVA-owned face.
- Do not invent hover, focus, pressed, disabled, error, dialog, toast, or responsive values from the captured default geometry.
- Do not use corporate sustainability, cabin, or campaign language as evidence for unmeasured public-web components.

## Voice & Tone

The official EVA Values and marketing policy support a service register that is attentive, direct, accurate, and responsible. This is a content-tone interpretation, not a claim about an unmeasured UI copy system.

| Do | Don't |
|---|---|
| State service and travel information plainly. | Use exaggerated performance or sustainability claims. |
| Use reassuring, operational language around safety and assistance. | Replace specific guidance with vague premium language. |
| Keep accessibility information actionable. | Assume a traveler’s needs or bury assistance details. |

Observed public-site samples: “Plan & Book,” “Manage Your Trip,” and “Safety First.” These labels show short task-led navigation; they do not establish a broader copy taxonomy.

## Agent Prompt Guide

Design a public EVA Air web-adjacent surface with a white canvas, black information hierarchy, square structural chrome, 3px form/media edges, and a narrowly scoped `#4b7d6b` booking-selected or information-panel treatment. Use the 30px `#cc4b00` accordion-label pattern only for awards-style information rows. Keep the Dotum-first computed stack unresolved; do not substitute an invented EVA font. Include only selected booking-tab state values that were observed, and leave unobserved interaction, responsive, authenticated booking, cabin, and native-app behavior out of scope.
