---
name: au
colors:
  primary: '#eb5505'
  canvas: '#ffffff'
  foreground: '#333333'
  link: '#0066aa'
  muted: '#777777'
  hairline: '#e5e5e5'
  control-border: '#d1d1d1'
  on-primary: '#ffffff'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    use: Repeated public au.com body and card text
  navigation:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.4
    use: Public global-navigation item
  search:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 2.5
    use: Public header text search input
rounded:
  square: 0px
  card: 5px
spacing:
  xs: 10
  sm: 15
  md: 20
  lg: 25
components:
  mobile-orange-action:
    type: button
    backgroundColor: '#eb5505'
    textColor: '#ffffff'
    rounded: 0px
    height: 44px
    padding: 12.8px 40px 12.8px 15px
    typography: 16px / 700 / noto-sans-cjk-jp
    states: default only; no button interaction state captured
    use: Mobile catalog orange action, selector surface-2::[data-omd-capture=91]
    focus: 'outline #eb5505 solid 2px on :focus-visible'
  mobile-outline-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '1px solid #333333'
    rounded: 0px
    height: 44px
    padding: 12.8px 40px 12.8px 15px
    typography: 16px / 400 / noto-sans-cjk-jp
    states: default only; no button interaction state captured
    use: Mobile catalog outline action, selector surface-2::[data-omd-capture=92]
  header-search:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '1px solid #d1d1d1'
    rounded: 0px
    height: 32px
    padding: 0px 30px 0px 6px
    typography: 12px / 400 / noto-sans-cjk-jp
    states: default only; no input interaction state captured
    use: Public header search input, selector surface-2::[data-omd-capture=8]
  mobile-tab:
    type: tab
    textColor: '#333333'
    border: '0px 0px 2px solid #eb5505 when selected'
    rounded: 0px
    padding: 0px 16px
    typography: 16px / 400 / noto-sans-cjk-jp
    states: selected and unselected observed; tab selection interaction captured
    use: Mobile catalog tab, selector surface-2::[data-omd-capture=81]
  mobile-service-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px solid #e5e5e5'
    rounded: 5px
    padding: 15px 25px 25px
    use: Mobile catalog service-card wrapper and contents, selectors surface-2::div.cmp-au-com-card__wrapper and .cmp-au-com-card__contents-section
  smartphone-label:
    type: badge
    backgroundColor: '#ffffff'
    textColor: '#eb5505'
    border: '1px solid #eb5505'
    rounded: 0px
    padding: 3.3px 11px
    typography: 11px / 400 / noto-sans-cjk-jp
    use: Smartphone catalog product label, selector surface-3::span.product-card-item-label
fonts:
  roles:
    ui: noto-sans-cjk-jp
    brand: Tazugane Gothic
---

# Design System Inspiration of au

## Overview

### Visual Theme & Atmosphere

au is KDDI’s consumer communications brand: it began as a mobile-phone brand and, in 2012, expanded to consumer services alongside mobile service. Its public product routes turn that broad offer into a deliberately practical, information-rich telecom experience: white canvas, charcoal text, bright blue links, square controls, bordered cards, and a highly visible orange action lane. The distinction comes from the tension between the comparatively neutral service UI and the more expressive official brand system. Orange cursive lettering in open white space remains the identity mark, while the current brand message, 「おもしろいほうの未来へ。」, frames au as a companion toward a more interesting future.

The current evolution is explicit. In March 2025 au refreshed its Visual Identity guidance, simplified its design and text expression, added slogan rules, and adjusted colour guidance alongside an au UI colour system. The public mobile routes captured here are product-surface evidence, not a wholesale transcription of that brand book: `#EB5505` is officially au Orange and appears on a measured mobile action, while `#0066AA`, `#333333`, white, and hairlines organise the observed catalog UI. This reference retains those domains separately.

### Primary tasks

- Search from the header on a public au.com page
- Browse au's mobile services in the catalog
- Follow a link from a mobile-catalog card
- Browse product cards in the smartphone catalog

### Brand Narrative

au began as KDDI’s mobile-phone brand and expanded in 2012 from mobile phones into consumer services under the company’s 3M strategy. Its current brand message is 「おもしろいほうの未来へ。」, introduced in 2019 in place of 「あたらしい自由。」. KDDI describes the shift as joining communications with life design so it can propose enjoyable change and exciting experience value in customers’ lives.

The present visual-identity update makes the design implication concrete. au says it aims to be a companion helping everyone move toward the more interesting future, and its 2025 revision seeks a consistent expression across a widening range of services and customer touchpoints. The canonical product tokens in this document stay restricted to the three supplied au.com captures; the broader brand story explains the direction but does not create unmeasured product facts.

### Principles

1. **Make SIMPLE the baseline.** au requires simple composition, sufficient whitespace, disciplined type, uncluttered photography, and a unified colour impression. *UI implication:* reduce surplus decoration before adding a new product-surface token.
2. **Use a service-appropriate secondary character.** CLEAN, ADVANCED, PLAYFUL, and FRIENDLY are additional values selected by the service’s intended impression. *UI implication:* do not flatten all four into a simultaneous visual recipe.
3. **Keep orange intentional.** Official guidance treats au Orange as a primary brand element whose use and proportion need care. *UI implication:* retain the observed orange action/underline/label roles instead of assigning arbitrary semantic states.
4. **Express a considerate personality.** The V.I. makes future orientation, curiosity/playfulness, approachability, and respect for others its four voice characteristics. *UI implication:* concise service copy should remain positive and attentive rather than merely promotional.

### Personas

No first-party persona segmentation was found in the sources consulted for this reference.

The available first-party material addresses customers broadly and calls for consideration of diverse people; it does not authorize invented demographic or behavioral personas.

## Colors

- **au Orange** — `#EB5505`: official brand colour (RGB 235, 85, 5); measured as the fill of the supplied mobile-catalog primary action and as product-label text/border.
- **Canvas / on-primary** — `#FFFFFF`: observed mobile catalog card and search surface; observed white action text.
- **Foreground** — `#333333`: repeated public text, navigation, search text, controls, and unselected tab ink.
- **Link** — `#0066AA`: repeated public catalog link and card-link colour; it is not promoted as a corporate brand colour.
- **Muted** — `#777777`: repeated public supporting text.
- **Hairline** — `#E5E5E5`: observed mobile card edge.
- **Control border** — `#D1D1D1`: observed header-search border.

Official V.I. says to use au Orange thoughtfully rather than indiscriminately. The public capture does not establish semantic success, error, warning, or disabled colour tokens, so those are absent.

## Typography

### Font evidence classes

- **Official product/brand guidance:** au’s Visual Identity specifies Tazugane Gothic for brand messages and recommends Noto Sans JP for standard use. The brand face requires contact with brand management; the Noto Sans JP download is linked by the official guidance.
- **Live computed surface-use:** the supplied three-route capture resolves `noto-sans-cjk-jp` as loaded/high confidence for 1,437 observed uses across body, navigation, cards, inputs, tabs, buttons, and labels. This is the only UI-family token.
- **Official distributed brand asset:** Tazugane Gothic is a named official brand typeface with Light, Regular, and Bold samples in the V.I. guidance. It remains a brand-message asset, not a substitute for the captured web UI family.
- **System-resolved:** Helvetica appears twice as an operating-system stack in the capture. It is not an au type asset or a token.
- **Declared-only / unresolved:** no declared-only face is promoted by this packet.

| Role | Family | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public body/card text | `noto-sans-cjk-jp` | 16px | 400 | 22.4px | Repeated supplied product-surface measurement |
| Public global navigation | `noto-sans-cjk-jp` | 15px | 700 | 21px | Measured navigation item |
| Public header search | `noto-sans-cjk-jp` | 12px | 400 | 30px | Measured text input |
| Brand message | Tazugane Gothic | — | Light/Regular/Bold distributed | — | Official V.I. brand-asset guidance; no live product specimen claimed |

## Layout

The supplied desktop capture is 1440×900 and records three public surfaces. The mobile catalog uses repeated 5px bordered cards, including a card-content padding sample of `15px 25px 25px`; the smartphone route also records product-card shells and compact labels. The observed aggregate includes 10, 15, 20, and 25px spacing values, preserved as a local frequency-backed set rather than an asserted global spacing scale. No breakpoint, fixed container width, authenticated purchase journey, or responsive-grid rule is claimed.

### Responsive Behavior

The packet records desktop 1440×900 snapshots only. It establishes repeated public components across three routes but no mobile viewport, breakpoint, sticky behavior, or touch-target policy. Responsive rules are intentionally absent.

## Elevation & Depth

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Shapes

### Elevation & Shape

The representative public controls, cards, tab, and search input have `box-shadow: none`; flat separation comes from white surfaces, hairlines, and square-to-5px corners. A single home modal trigger has a local shadow in the packet, but no opened dialog state or repeatable elevation system was observed, so it is not promoted to a shadow token.

## Motion & Easing

No duration, easing curve, transition, carousel timing, or motion-reduction behavior is established by the supplied evidence. Motion tokens are absent rather than inferred from static markup.

## Components

### Mobile orange action

**Default**
- Background: `#EB5505`
- Text: `#FFFFFF`
- Radius: `0px`
- Height: `44px`
- Padding: `12.8px 40px 12.8px 15px`
- Font: `16px / 700 / noto-sans-cjk-jp`
- States: Default only; no button interaction state captured.
- Use: Mobile catalog action; `surface-2::[data-omd-capture="91"]`.

### Mobile outline action

**Default**
- Background: `#FFFFFF`
- Text: `#333333`
- Border: `1px solid #333333`
- Radius: `0px`
- Height: `44px`
- Padding: `12.8px 40px 12.8px 15px`
- Font: `16px / 400 / noto-sans-cjk-jp`
- States: Default only; no button interaction state captured.
- Use: Mobile catalog outline action; `surface-2::[data-omd-capture="92"]`.

### Header search

**Default**
- Background: `#FFFFFF`
- Text: `#333333`
- Border: `1px solid #D1D1D1`
- Radius: `0px`
- Height: `32px`
- Padding: `0px 30px 0px 6px`
- Font: `12px / 400 / noto-sans-cjk-jp`
- States: Default only; no input interaction state captured.
- Use: Public header text search; `surface-2::[data-omd-capture="8"]`.

### Mobile catalog tab

**Selected item as captured**
- Text: `#333333`
- Border: `0px 0px 2px solid #EB5505`
- Radius: `0px`
- Padding: `0px 16px`
- Font: `16px / 400 / noto-sans-cjk-jp`
- States: Selected and unselected were observed; a tab-selection interaction was captured.
- Use: Mobile catalog tab; `surface-2::[data-omd-capture="81"]`.

### Mobile service card

**Default**
- Background: `#FFFFFF`
- Border: `1px solid #E5E5E5`
- Radius: `5px`
- Padding: `15px 25px 25px`
- Use: Mobile catalog card wrapper and contents; `surface-2::div.cmp-au-com-card__wrapper` and `.cmp-au-com-card__contents-section`.

### Smartphone product label

**Default**
- Background: `#FFFFFF`
- Text: `#EB5505`
- Border: `1px solid #EB5505`
- Radius: `0px`
- Padding: `3.3px 11px`
- Font: `11px / 400 / noto-sans-cjk-jp`
- Use: Smartphone catalog product label; `surface-3::span.product-card-item-label`.

Only the tab has captured interaction provenance. Hover, focus, pressed, disabled, error, modal, toast, and other interactive state values are absent; their absence does not remove these measured default geometries.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.au.com/; https://www.au.com/mobile/; https://www.au.com/mobile/product/smartphone/; https://www.kddi.com/brand/visual-identity/au/; https://www.kddi.com/brand/visual-identity/au/color/; https://www.kddi.com/brand/visual-identity/au/typography/; https://www.kddi.com/brand/visual-identity/au/design-principles/; https://www.kddi.com/brand/visual-identity/au/toneofvoice/; https://www.kddi.com/brand/knowing-au/
**Tier 2 sources:** https://getdesign.md/au (attempted; built-in web open returned no usable record); https://styles.refero.design/?q=au (attempted; built-in web open returned no usable record)
**Conflicts unresolved:** none

### States

The supplied evidence records one tab-selection interaction and no stable empty, loading, error, success, skeleton, or disabled component states. Those state groups are therefore absent from the token graph and component specifications. An implementation may provide accessible states, but it must not label their visual values as observed au facts.

Live state probe, 2026-10-16 (`https://www.au.com/mobile/`), `mobile-orange-action`: focus — outline #eb5505 solid 2px.

## Do's and Don'ts

### Do

- Use au Orange `#EB5505` as the recorded brand/action emphasis, leaving white space and neutral product chrome around it.
- Keep the observed product UI family as `noto-sans-cjk-jp`; use Tazugane Gothic only under its official brand-message boundary.
- Preserve the measured square controls, 5px cards, hairlines, and selected-tab orange underline on the documented public surfaces.
- Follow the official SIMPLE principle: reduce nonessential elements, retain generous whitespace, unify type, and avoid unnecessary colour variation.

### Don't

- Do not promote `#0066AA` from a catalog-link measurement into an au brand colour.
- Do not substitute Helvetica or another system family for the observed UI family, or use the official brand font as though it were a loaded product webfont.
- Do not invent hover, focus, pressed, disabled, error, modal, toast, or checkout states.
- Do not use product catalog chrome as evidence for KDDI corporate, marketing, or authenticated-app UI.

## Voice & Tone

**Voice adjectives:** future-oriented · curious/playful · approachable · respectful

| Do | Don't |
|---|---|
| Speak positively about the next choice or possibility. | Treat the future as fixed or inaccessible. |
| Show curiosity and room for discovery without making the customer the punchline. | Use novelty or humour at another person’s expense. |
| Keep an approachable, calm register that can sit beside daily life. | Sound distant, over-formal, or needlessly technical. |
| Make respect for other people a non-negotiable baseline. | Use discriminatory or hurtful language. |

Source-derived sample direction, not reusable au copy: “Choose the path that opens a new possibility.” “Let’s make the next connection easier to explore.” “Start from what matters in your everyday life.”

## Agent Prompt Guide

“Create only the observed au public mobile-catalog pattern: white cards with `#E5E5E5` hairlines and 5px corners, charcoal Noto Sans CJK JP text, bright `#0066AA` catalog links, and a square orange `#EB5505` action. Add a 2px orange underline only to an observed selected tab. Do not add a rounded generic CTA, a fallback font, an unobserved state, or a corporate-marketing token.”

## Governance

### Known Gaps

- **Contrast, `mobile-orange-action`.** Text `#ffffff` on `#eb5505` measures 3.60:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `smartphone-label`.** Text `#eb5505` on `#ffffff` measures 3.60:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
