---
name: Yanolja
colors:
  primary: '#000000'
  foreground: '#1b1c1f'
  canvas: '#ffffff'
  surface-muted: '#f7f8fb'
  surface-hover: '#f2f3f7'
  muted: '#6e6f73'
  hairline: '#dadbdf'
  brand-yanolja-orange: '#f54b1e'
typography:
  display:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.19
    use: Observed h2 on NOL product surfaces
  search:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.22
    use: Observed search input text
  action:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.19
    use: Observed pill action
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.19
    use: Observed outlined action
  label:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.21
    use: Observed 48px utility action
  badge:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.17
    use: Observed neutral badge
rounded:
  sm: 8px
  md: 16px
  full: 9999px
spacing:
  xxs: 2
  xs: 4
  sm: 8
  md: 12
  base: 16
  lg: 20
  xl: 24
  xxl: 32
components:
  utility-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 16px
    padding: 0px
    typography: 14px/700 Pretendard
    hover: '#f7f8fb'
    use: '48px product utility button; hover capture switches to #f7f8fb'
    pressed: '#f7f8fb'
    states: 'hover and pressed frames sampled on home captures 14 and 15; in all four frames bg #ffffff becomes #f7f8fb and the shadow rgba(0,0,0,0.1) 0 0 8px becomes rgba(0,0,0,0.2) 0 0 6px; focus not declared'
  neutral-badge:
    type: badge
    backgroundColor: '#f7f8fb'
    textColor: '#1b1c1f'
    rounded: 9999px
    padding: 2px 8px 2px 6px
    typography: 12px/400 Pretendard
    use: 26px product badge observed on hotel and leisure
  action-pill:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1b1c1f'
    rounded: 9999px
    padding: 4px 16px
    height: 52px
    typography: 16px / 700 / Pretendard
    states: default captured; no pointer-state frame for this control
    use: White pill action at home::[data-omd-capture="50"], 127 x 52; 6 instances across home and leisure
  outlined-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1b1c1f'
    border: '1px solid #1b1c1f'
    rounded: 16px
    padding: 4px 16px
    height: 52px
    typography: 16px / 400 / Pretendard
    states: default captured; no pointer-state frame for this control
    use: Outlined full-width action at surface-2::[data-omd-capture="101"], 768 x 52; 4 instances across hotel and leisure
  ghost-action:
    type: button
    backgroundColor: transparent
    textColor: '#1b1c1f'
    rounded: 16px
    padding: 4px 16px
    height: 52px
    typography: 16px / 700 / Pretendard
    hover: 'bg #f2f3f7'
    pressed: 'bg #f2f3f7'
    states: hover and pressed frames sampled on this one element, both opaque rgb(242, 243, 247) from a fully transparent base; the neighbouring header actions move toward the same RGB but were caught mid-transition; focus not declared
    use: Home transparent 16px-radius action at home::[data-omd-capture="7"], 147 x 52 near the top of the page (top 74)
  icon-button:
    type: button
    backgroundColor: transparent
    textColor: '#1b1c1f'
    rounded: 16px
    padding: 4px
    size: 56px x 56px
    states: default captured; no pointer-state frame for this control
    use: Icon-only control (textLength 0) at surface-2::[data-omd-capture="7"]; "9" and "11" and the same three on leisure match
  search-input:
    type: input
    backgroundColor: transparent
    textColor: '#1b1c1f'
    rounded: 0px
    padding: 0px
    height: 22px
    typography: 18px / 700 / Pretendard
    states: default captured; no focus frame
    use: Search text input at surface-2::[data-omd-capture="1"], 582 x 22; hotel and leisure
  search-bar-button:
    type: button
    backgroundColor: transparent
    border: '1px solid #1b1c1f'
    rounded: 8px
    padding: 0px 20px 0px 24px
    size: 520px x 60px
    shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 0px
    states: default captured; no pointer-state frame for this control
    use: Hotel bordered search trigger (class includes border-fill-neutral-main, shadow-2) at surface-2::[data-omd-capture="12"]; its own 10px / 400 computed font is the page root size, and the visible label sits in child elements that were not sampled
  footer-bordered-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #dadbdf'
    rounded: 5px
    padding: 0px 12px
    height: 32px
    typography: 12px / 400 / Pretendard
    states: default captured; no pointer-state frame; no open state captured
    use: Home bordered row button (flex, justify-between; class includes border-line-neutral-weak3, bg-static-white) at home::[data-omd-capture="131"], 328 x 32 near the page foot (top 6017)
  footer-text-link:
    type: button
    backgroundColor: transparent
    textColor: '#6e6f73'
    rounded: 0px
    padding: 0px
    height: 18px
    typography: 12px / 400 / Pretendard
    states: default captured; no pointer-state frame
    use: Home text button (class text-text-neutral-sub underline) at home::[data-omd-capture="149"], 144 x 18 (top 6252); the underline is named by the class, text-decoration is not in the style dump
  overlay-icon-button:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.5)
    rounded: 9999px
    size: 32px x 32px
    states: default captured; no pointer-state frame
    use: Home translucent circular icon-only button (class includes rounded-full) at home::[data-omd-capture="12"] (top 499), beside a 32px-high counter button at "13"
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Yanolja (야놀자)

## Overview

### Visual Theme & Atmosphere

Yanolja is a global travel-technology company whose consumer division operates NOL, a platform spanning accommodation, flights, leisure, entertainment and culture. The Group’s public identity frames that broader system as the “Multiverse of Dreams,” using Yanolja Orange as its distinctive thread; meanwhile, the live NOL product surfaces captured for this reference are visibly more restrained: white surfaces, black and charcoal text, soft cool-gray fills, and rounded utility controls. That split matters. Yanolja Group’s orange and warm-grays are verified corporate-brand assets, not evidence that the current NOL hotel or leisure UI uses an orange primary CTA. The current direction also reflects the Group’s 2026 “Yanolja 3.0” positioning around customer focus, technology, and one-team collaboration, while NOL continues to unify consumer travel, leisure, and culture services.

**Key Characteristics:**
- Separate the official Yanolja Group identity from the observed NOL consumer-product UI.
- NOL product chrome is neutral and rounded: white, `#000000`/`#1B1C1F`, `#F7F8FB`, and 16px/full radii.
- Yanolja Orange (`#F54B1E`) is a verified Group brand color and logo asset; this packet does not observe it as NOL’s current product-action token.
- Product typography is loaded Pretendard, backed by computed usage and official NOL-hosted font files.

### Primary tasks

- Search for a place to stay in a destination
- Browse leisure activities alongside accommodation and flights

### Brand Narrative

Yanolja began in 2005 and has developed from a travel and leisure platform into a global travel-technology company. Its official history describes an early focus on making hotel information and operations more accurate and less dependent on fragmented, manual processes. Today it combines enterprise travel technology with a consumer platform: NOL UNIVERSE brings accommodations, airlines, leisure activities, entertainment, sports, and culture together for travelers, while Yanolja’s enterprise offerings connect travel businesses through cloud, transaction, and AI-powered data solutions.

The visual identity on the Group Brand Center is built around the “Multiverse of Dreams.” Its symbol represents digital connections between the travel industry and travelers, and Yanolja Orange is the recognized constant across that Group identity. In 2026, Yanolja announced “Yanolja 3.0,” identifying Customer, Technology, and One Team as the values guiding its next decade. That corporate evolution and the neutral current NOL product chrome should be read together, but not collapsed into one unproven token set.

### Principles

1. **Customer First.** The official value says every decision begins and ends with the customer. *UI implication:* prioritize clarity and completion over decorative complexity.
2. **Tech-Driven Innovation.** The Group says technology should redefine experiences. *UI implication:* make technological assistance legible and useful, rather than adding visual novelty without a task benefit.
3. **Together as One Team.** The official value centers shared goals and mutual support. *UI implication:* keep handoffs between travel planning, booking, and support coherent; this is a product-design interpretation, not a published component rule.
4. **Brand and product domains are distinct.** The Brand Center’s orange identity and the captured NOL neutral UI are both authoritative inside their own domains. *UI implication:* do not use one domain as evidence for the other.

### Personas

This reference records verified stakeholder groups, not synthetic personas.

- **Travelers:** receive personalized, seamless experiences across pre-trip, in-trip, and post-trip stages.
- **Travel enterprises:** use data-powered travel technology to improve operations and efficiency.
- **Consumer-platform customers:** use NOL UNIVERSE across travel, leisure, culture, entertainment, and related services.
- **Product and operating teams:** the Group’s One Team value emphasizes shared goals and psychological safety internally.

## Colors

### Live NOL consumer product surfaces

- **Primary ink** (`#000000`): observed text and border value across home, hotel, and leisure captures.
- **Foreground** (`#1B1C1F`): observed product text and border value across all three captured NOL surfaces.
- **Canvas / raised surface** (`#FFFFFF`): observed page and action surface.
- **Neutral weak fill** (`#F7F8FB`): observed badge fill and utility-button hover fill.
- **Neutral hover fill** (`#F2F3F7`): observed only in state frames on the NOL home surface, as the hover and pressed fill of the transparent 16px-radius home action (`home::[data-omd-capture="7"]`); the header actions beside it move toward the same RGB. It does not appear at rest in the capture.
- **Muted text** (`#6E6F73`): observed on the NOL home surface.
- **Hairline** (`#DADBDF`): one captured NOL home control border; retain as a local border observation, not a global rule.

### Official Yanolja Group identity assets

- **Yanolja Orange** (`#F54B1E`): official Group primary/logo color, documented by the Brand Center with Pantone 2028C/2028U. It is not promoted to NOL product primary from this capture.
- **Light Gray** (`#F5EBE1`), **Medium Gray** (`#8C8282`), **Deep Gray** (`#555055`), and **Dark Gray** (`#1E1928`): official Group brand-support colors. They remain brand-context assets rather than inferred NOL UI tokens.

## Typography

### Font evidence classes

- **Live computed surface-use — Pretendard:** The home, hotel, and leisure captures compute `Pretendard, -apple-system, "system-ui", sans-serif`. `document.fonts` reports Pretendard as loaded for 512 observed uses, and the capture records 88 NOL-hosted Pretendard variable-subset URLs under `yaimg.yanolja.com`. This establishes Pretendard as the live NOL UI family.
- **Official distributed font / license — Pretendard:** Pretendard’s upstream project distributes the font under SIL Open Font License 1.1. This explains the type asset’s license boundary; it does not make the upstream repository a Yanolja brand source.
- **Declared-only — swiper-icons:** A `swiper-icons` face is declared in the capture but has no visible usage. It is not a UI typography token.
- **Unresolved:** No separate display family, proprietary Yanolja typeface, or additional product font family was established by this packet.

### Observed hierarchy

| Role | Size | Weight | Line height | Provenance |
|---|---:|---:|---:|---|
| Product h2 | 32px | 700 | 38px | NOL capture, 6 occurrences |
| Search input | 18px | 700 | 22px | hotel + leisure input |
| Product action | 16px | 700 | 19px | NOL action-pill capture |
| Outlined action | 16px | 400 | 19px | hotel + leisure button |
| Utility action | 14px | 700 | 17px | home 48px button |
| Neutral badge | 12px | 400 | 14px | hotel + leisure badge |

## Layout

The capture supports a compact spacing vocabulary of 2, 4, 8, 12, 16, 20, 24, and 32px. Radius observations are mostly 0px in unframed text/content, 16px in rounded product controls, 8px on the hotel search bar button, 5px on the home footer row button, and 9999px for pills. No grid, card, responsive-breakpoint, or booking-detail layout rule is asserted because this packet did not measure one.

### Responsive Behavior

No breakpoint, mobile navigation, touch-target policy, or responsive grid is documented by the supplied evidence. The packet contains three public NOL product routes, but does not establish a responsive specification.

## Elevation & Depth

The verified product depth evidence is local rather than a complete elevation scale: the 48px white utility control has `0 0 8px rgba(0,0,0,0.1)` at rest and the captured hover and pressed value is `0 0 6px rgba(0,0,0,0.2)`. The hotel search bar button carries the same `rgba(0, 0, 0, 0.1) 0px 0px 8px 0px` at rest. Other observed product controls are shadowless. No modal, popover, card, or sheet elevation token is claimed.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.utility`: `0 0 8px rgba(0,0,0,0.1)`

## Motion & Easing

No motion duration, easing curve, animation, or reduced-motion behavior is verified by the supplied evidence. Motion should remain unspecified until a product-surface observation or official NOL documentation establishes it.

## Components

The following are direct product observations. Selector, surface, and state provenance are retained in the verification log; names below describe the observed geometry, not an undocumented public component API.

### Utility button

**48px white utility control**
- Background: `#FFFFFF`
- Text: `#000000`
- Radius: 16px
- Shadow: `0 0 8px rgba(0,0,0,0.1)`
- Padding: 0px
- Font: 14px / 700 / Pretendard
- Height: 48px
- Hover: `#F7F8FB` background with `0 0 6px rgba(0,0,0,0.2)` shadow
- Pressed: the same `#F7F8FB` background and `0 0 6px rgba(0,0,0,0.2)` shadow
- Use: `home::[data-omd-capture="14"]`; high-confidence, 33 occurrences across home, hotel, and leisure. Hover and pressed frames exist for `"14"` and `"15"`, and all four frames carry the same background and shadow. The July text asserted only the hover value while the frontmatter already declared the pressed one; the frames support both. Focus is not declared.

### Action button

**White pill action**
- Background: `#FFFFFF`
- Text: `#1B1C1F`
- Radius: 9999px
- Padding: 4px 16px
- Font: 16px / 700 / Pretendard
- Height: 52px
- Use: `home::[data-omd-capture="50"]`; high-confidence, 6 occurrences across home and leisure.

**Outlined action**
- Background: `#FFFFFF`
- Text: `#1B1C1F`
- Border: 1px solid `#1B1C1F`
- Radius: 16px
- Padding: 4px 16px
- Font: 16px / 400 / Pretendard
- Height: 52px
- Use: `surface-2::[data-omd-capture="101"]`; high-confidence, 4 occurrences across hotel and leisure.

**Transparent ghost action**
- Background: transparent (`rgba(255, 255, 255, 0)`)
- Text: `#1B1C1F`
- Radius: 16px
- Padding: 4px 16px
- Font: 16px / 700 / Pretendard
- Height: 52px
- Hover: background `#F2F3F7`
- Pressed: background `#F2F3F7`
- Use: `home::[data-omd-capture="7"]`, 147 × 52 near the top of the home page. This is one element. Its hover and pressed frames are both opaque `rgb(242, 243, 247)`. From a fully transparent base, a frame caught mid-transition carries fractional alpha, as the header actions beside it show (`rgba(242, 243, 247, 0.04)` to `0.11`, not declared for them), so the opaque value is read as the settled fill. The value is not seen at rest anywhere in the capture. Focus is not declared.

### Icon button

**Transparent rounded icon control**
- Text: `#1B1C1F`
- Radius: 16px
- Padding: 4px
- Height: 56px (56px × 56px)
- Use: `surface-2::[data-omd-capture="7"]`; high-confidence, 6 occurrences across hotel and leisure (`"7"`, `"9"`, `"11"` on each). The control has no text (textLength 0), so its computed 10px / 700 font styles no visible label; the July text listed it as the control's font, and it is no longer recorded as one.

### Search input

**Transparent search text field**
- Text: `#1B1C1F`
- Radius: 0px
- Font: 18px / 700 / Pretendard
- Height: 22px
- Use: `surface-2::[data-omd-capture="1"]`; high-confidence search input observed on hotel and leisure. Container geometry and focus treatment were not captured.

### Neutral badge

**Weak neutral pill**
- Background: `#F7F8FB`
- Text: `#1B1C1F`
- Radius: 9999px
- Padding: 2px 8px 2px 6px
- Font: 12px / 400 / Pretendard
- Height: 26px
- Use: `surface-2::div`; high-confidence, 2 occurrences across hotel and leisure.

### Search trigger

**Bordered search bar button**
- Background: transparent
- Border: 1px solid `#1B1C1F`
- Radius: 8px
- Padding: 0px 20px 0px 24px
- Size: 520px × 60px
- Shadow: `rgba(0, 0, 0, 0.1) 0px 0px 8px 0px`
- Observed-state summary: Default captured; no pointer-state frame.
- Use: `surface-2::[data-omd-capture="12"]` on the hotel sub-home (class includes `border-fill-neutral-main`, `shadow-2`). Its own computed font, 10px / 400, is the page's root size; the visible label sits in child elements that were not sampled, so no label style is recorded.

### Footer controls

**Bordered row button**
- Background: `#FFFFFF`
- Text: `#000000`
- Border: 1px solid `#DADBDF`
- Radius: 5px
- Padding: 0px 12px
- Height: 32px
- Font: 12px / 400 / Pretendard, 18px line height
- Observed-state summary: Default captured; no pointer-state frame and no open state.
- Use: `home::[data-omd-capture="131"]`, 328 × 32 near the page foot (class includes `justify-between`, `border-line-neutral-weak3`, `bg-static-white`).

**Muted text button**
- Background: transparent
- Text: `#6E6F73`
- Radius: 0px
- Padding: 0px
- Height: 18px
- Font: 12px / 400 / Pretendard, 18px line height
- Observed-state summary: Default captured; no pointer-state frame.
- Use: `home::[data-omd-capture="149"]`, 144 × 18 (class `text-text-neutral-sub underline`). The class names an underline; text-decoration is not part of the style dump.

### Overlay icon button

**Translucent circular icon button**
- Background: `rgba(0, 0, 0, 0.5)`
- Radius: 9999px
- Size: 32px × 32px
- Observed-state summary: Default captured; no pointer-state frame.
- Use: `home::[data-omd-capture="12"]` at top 499, icon-only (textLength 0), beside a 32px-high counter button at `"13"` whose visible fill belongs to a child element and is not recorded.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://nol.yanolja.com/`; `https://nol.yanolja.com/sub-home/hotel`; `https://nol.yanolja.com/sub-home/leisure` (raw computed-style and FontFaceSet evidence in `artifacts/reference-evidence/yanolja.json`); `https://www.yanoljagroup.com/brand_center`; `https://www.yanoljagroup.com/about`; `https://www.yanoljagroup.com/yanolja_way`; `https://www.yanoljagroup.com/en/press_release/view?id=1534`
**Tier 2 sources:** `https://getdesign.md/yanolja` (no independently accessible record found during this run); `https://styles.refero.design/?q=yanolja` (no Yanolja-specific result surfaced in this run’s search)
**Conflicts unresolved:** none

Corporate-brand values and NOL product values are separate evidence domains, so neither is substituted for the other.

### States

No empty, loading, error, success, skeleton, or disabled-state treatment is verified by the supplied capture. Do not infer colors, timing, layouts, or copy for these states from the Group brand palette or from generic travel-product conventions.

Pointer-state frames exist for six home elements; the collector expanded no dialog, menu, or tab (`interactionCount: 0`).

| Category | Verified boundary |
|---|---|
| Hover | Utility button (`"14"`, `"15"`): background `#FFFFFF` → `#F7F8FB`, shadow `rgba(0,0,0,0.1) 0 0 8px` → `rgba(0,0,0,0.2) 0 0 6px`. Transparent ghost action (`"7"`): background → `#F2F3F7`. |
| Pressed | The same values as hover for both controls. |
| Sampled, not declared | Header actions `"3"` to `"5"`: background moved from transparent toward `rgb(242, 243, 247)` at 4% to 11% alpha, different per element and per frame, consistent with a transition caught at its start. |
| Focus | Not declared. The bundle has no focus frame, and a collector focus frame would follow a mouse press, which is not a keyboard `:focus-visible` measurement. |

## Do's and Don'ts

### Do

- Treat `#000000`, `#1B1C1F`, white, and cool-neutral fills as the verified NOL product-chrome palette.
- Use loaded Pretendard for a NOL UI implementation when the project can load it; do not silently substitute it for a proprietary font.
- Preserve the 16px/full-radius distinction where the corresponding observed control calls for it.
- Use Yanolja Orange only when intentionally applying the separately evidenced Group identity, logo, or brand material.

### Don't

- Do not turn Group-brand Yanolja Orange or warm grays into a current NOL CTA, discount, error, or selected-state token without product-surface evidence.
- Do not invent a lodging-card, booking CTA, bottom navigation, modal, toast, or input-focus variant from this packet.
- Do not treat declared-only `swiper-icons` as a text family.
- Do not infer mobile breakpoints or motion behavior from this desktop capture.

## Voice & Tone

Official Group language is future-facing and practical: its stated mission is to make travel “10x easier,” with Customer First, Tech-Driven Innovation, and Together as One Team as core values. The About page explains the name as “Hey, Let’s Play!” and frames the consumer platform around seamless, hyper-personalized leisure. This supports a direct, enabling tone for brand narrative; it does not establish production microcopy, error messages, Korean honorific endings, or a consumer voice guide.

| Context | Verified direction |
|---|---|
| Corporate mission | Make travel easier, smarter, and more connected through technology. |
| Consumer-platform proposition | Seamless, personalized travel, leisure, and culture experiences. |
| Brand-name context | “Hey, Let’s Play!” is the official English explanation of Yanolja’s name. |

## Agent Prompt Guide

### Quick Color Reference

- NOL product ink: `#000000` and `#1B1C1F`
- NOL product canvas: `#FFFFFF`
- NOL neutral weak fill: `#F7F8FB`
- NOL muted text: `#6E6F73`
- Yanolja Group brand asset: `#F54B1E` (not a verified NOL product CTA)

### Example Component Prompts

- "Create a NOL-style observed product utility control: white 48px surface, 16px radius, `#000000` 14px/700 Pretendard text, and `0 0 8px rgba(0,0,0,0.1)` shadow. Its captured hover and pressed background is `#F7F8FB`."
- "Create an observed NOL product action pill: white background, `#1B1C1F` 16px/700 Pretendard label, 52px height, 4px 16px padding, and a full radius."
- "Create the observed NOL weak badge: `#F7F8FB` fill, `#1B1C1F` 12px/400 Pretendard text, 26px height, 2px 8px 2px 6px padding, and a full radius."

### Iteration Guide

1. Decide which evidence domain the task targets: NOL product UI or Yanolja Group identity.
2. Keep unmeasured component properties absent rather than filling them with a generic travel-product pattern.
3. Retain Pretendard only where it can be loaded; do not represent a system fallback as Pretendard.

## Governance

### Known Gaps

- **Contrast, `ghost-action`.** Text `#1b1c1f` on `#00000000` measures 1.23:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `icon-button`.** Text `#1b1c1f` on `#00000000` measures 1.23:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-input`.** Text `#1b1c1f` on `#00000000` measures 1.23:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-text-link`.** Text `#6e6f73` on `#00000000` measures 4.18:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
