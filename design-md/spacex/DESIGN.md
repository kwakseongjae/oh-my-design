---
name: SpaceX
colors:
  primary: '#f0f0fa'
  canvas: '#000000'
  foreground: '#f0f0fa'
  tab-selected: '#ffffff'
rounded:
  cta: 4px
  icon: 32px
  tab: 0px
spacing:
  cta-x: 20
  icon: 18
components:
  primary-cta:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.5)
    textColor: '#f0f0fa'
    border: 1px solid rgba(240, 240, 250, 0.35)
    rounded: 4px
    padding: 0px 20px
    typography: 16px / 400 / D-DIN
    states: default snapshot only; no pseudo-state variant captured
    use: Cinematic CTA on the captured public home, Mission, and Starship pages
  selected-tab:
    type: tab
    textColor: '#ffffff'
    border: 0px 0px 1px
    rounded: 0px
    padding: 0px
    typography: 16px / 600 / D-DIN
    states: selected and tab-selected after captured tab interaction
    use: Mission and Starship tab controls
  carousel-previous:
    type: button
    textColor: rgba(16, 16, 16, 0.3)
    rounded: 0px
    padding: 0px
    typography: 13.3333px / 400 / D-DIN
    disabled: disabled observed on Starship previous control
    use: Starship carousel previous control
  circular-control:
    type: button
    backgroundColor: rgba(240, 240, 250, 0.1)
    textColor: '#000000'
    rounded: 32px
    padding: 18px
    typography: 13.3333px / 400 / D-DIN
    states: default snapshot only; no variant captured
    use: Unlabelled circular control observed on all three captured public pages
omitted:
  - section: typography
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: D-DIN
    display: D-DIN-Bold
---

# SpaceX — Design Reference

## Overview

### Visual Theme & Atmosphere

SpaceX is a launch and spacecraft company whose public site connects an expansive mission—making life multiplanetary—with vehicle, launch, and human-spaceflight information. The captured public pages express that story through large edge-to-edge imagery, black scrims, cool off-white type, and a compact all-caps interface. The home page is a marketing surface; the Mission and Starship pages add product-program detail. This reference deliberately does not extend those observations to authenticated operations software, launch control, checkout, or other unobserved product domains.

The verified visual system is more specific than a generic “black-and-white” treatment. Its primary public CTA is a 50% black surface with `#f0f0fa` text and a faint cool-white border; selected tabs switch to `#ffffff`. D-DIN handles visible UI and body copy, while D-DIN-Bold is the loaded display face. Photography supplies the visual emphasis, not cards or shadows.

### Primary tasks

- Follow the mission story into vehicle and launch detail
- Read which destinations a named vehicle is built to reach
- Learn why reusable rockets matter to the cost of launch
- Switch between tabs to read a program page in sections

### Brand Narrative

SpaceX’s official About page frames the company around a future in which people explore the stars and describes Starship and Super Heavy as a fully reusable transportation system for crew and cargo to Earth orbit, the Moon, Mars, and beyond. The Mission overview connects that ambition to reusable launch vehicles and to the company’s history of Dragon, Falcon, and human-spaceflight milestones. These first-party statements supply the narrative context for the public pages; they are not visual-token evidence.

The captured site’s current public expression pairs that mission language with large imagery, black overlays, D-DIN typography, and small action controls. It does not provide sufficient evidence for a brand-history timeline, employee culture claims, or a customer-product narrative beyond the official pages cited in the verification notes.

### Principles

1. **Make the destination explicit.** The official pages connect vehicles to Earth orbit, the Moon, Mars, and beyond. *UI implication:* keep a public program page’s visual hierarchy tied to a named program or destination, not generic sci-fi decoration.
2. **Reuse is a first-party product thesis.** The Mission overview calls fully and rapidly reusable rockets pivotal to reducing space-access cost. *UI implication:* present a reuse claim only when the specific page supplies it; do not synthesize performance metrics.
3. **Separate source domains.** The evidence covers public marketing and program pages only. *UI implication:* do not transfer their tokens, components, or writing treatment to flight operations, accounts, checkout, or other unobserved systems.

### Personas

SpaceX has not supplied audience research, role definitions, or public product-persona material in the sources used for this reference. Do not invent named personas from launch interest or inferred job titles.

## Colors

### Observed public-page roles

- **Cool off-white / primary** (`#f0f0fa`): visible CTA and public-page text on the captured surfaces.
- **Canvas** (`#000000`): primary CTA scrim and dark public-page canvas.
- **Selected-tab white** (`#ffffff`): selected Mission/Starship tab text and underline.
- **CTA scrim** (`rgba(0, 0, 0, 0.5)`): primary CTA fill at `home::[data-omd-capture="23"]`.
- **CTA stroke** (`rgba(240, 240, 250, 0.35)`): primary CTA border on that same selector.
- **Circular-control fill** (`rgba(240, 240, 250, 0.1)`): unlabelled 32px-radius control observed on all three captured pages.

No semantic success, warning, error, countdown, or launch-status color is promoted: the supplied evidence does not ground those roles.

## Typography

### Evidence classes

- **Live computed use, FontFaceSet, and source corroboration:** `D-DIN` is loaded with high confidence, has 313 visible captured uses across body, buttons, list items, tabs, and text, and is matched to SpaceX-hosted WOFF2/WOFF/OTF sources. It is the UI family token.
- **Live computed use, FontFaceSet, and source corroboration:** `D-DIN-Bold` is loaded with high confidence, has 49 visible captured uses in headings and text, and is matched to SpaceX-hosted WOFF2/WOFF/OTF sources. It is the display family token.
- **Declared-only:** `Roboto Mono` is declared by a SpaceX-hosted TTF but has zero visible captured uses. It is not a UI token. Its upstream open-source licensing does not establish current SpaceX product use.
- **Declared-only icon asset:** `swiper-icons` is declared with zero visible captured use and is not a typography token.
- **Unresolved:** one `D-DIN-Regular` computed-family observation has no matching loaded face or source record; it is not a separate family claim.

### Measured text observations

| Context | Family | Size / weight | Other measured properties |
|---|---|---|---|
| Public CTA | D-DIN | 16px / 400 | 24px line height; no letter-spacing value captured |
| Selected tab | D-DIN | 16px / 600 | transparent fill; 1px bottom border |
| Starship carousel previous | D-DIN | 13.3333px / 400 | 44px-high control; disabled value recorded separately |

The supplied font files confirm delivery to the SpaceX public web surface, not a downstream licence grant. The D-DIN licensing source is recorded in the verification notes; no SpaceX-published reuse licence was located in this packet’s source work.

## Layout

- Use full-bleed imagery and dark overlays on the captured public marketing/program pages; do not generalize this pattern to an unobserved operational product.
- Keep the primary CTA compact: the measured public version is 50px high with `0px 20px` padding and a 4px radius.
- Retain sharp tab geometry and an underline for the selected tab rather than converting it into a filled pill.
- The capture records no box shadow on the primary CTA, selected tabs, carousel controls, or circular control.

### Responsive Behavior

The supplied bundle is desktop-only at 1440×900. It confirms three public routes but does not contain a mobile viewport, breakpoint, responsive-image, or navigation-collapse observation. Responsive rules are therefore unresolved rather than extrapolated.

## Elevation & Depth

The observed controls use imagery, transparent fills, and a black scrim instead of shadow elevation. `box-shadow: none` was recorded on the representative CTA, tab, carousel, and circular-control elements. No general depth scale is claimed.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

The collector records two tab interactions but does not record transition durations, easing curves, scroll behavior, animation properties, or reduced-motion behavior. No motion token or animation rule is inferred from this evidence.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.spacex.com/ · https://www.spacex.com/mission · https://www.spacex.com/vehicles/starship
**Tier 2 sources:** https://getdesign.md/spacex (editorial cross-check) · https://styles.refero.design/?q=SpaceX (required search attempted; no indexed SpaceX result found)
**Conflicts unresolved:** none

## Components

### Primary CTA

**Public-page default**
- Background: `rgba(0, 0, 0, 0.5)`
- Text: `#f0f0fa`
- Border: `1px solid rgba(240, 240, 250, 0.35)`
- Radius: `4px`
- Padding: `0px 20px`
- Font: `16px / 400 / D-DIN`
- States: Default snapshot only; no pseudo-state variant captured
- Use: Cinematic CTA on the captured home, Mission, and Starship pages

Provenance: `home::[data-omd-capture="23"]`, class `spx-button primary`; observed nine times across the three captured public pages.

### Selected tab

**Selected**
- Text: `#ffffff`
- Border: `0px 0px 1px`
- Radius: `0px`
- Padding: `0px`
- Font: `16px / 600 / D-DIN`
- States: Selected and tab-selected after captured tab interaction
- Use: Mission and Starship tab controls

Provenance: `surface-2::[data-omd-capture="26"]`, `role="tab"`, `aria-selected="true"`; the collector records tab interactions on Mission and Starship. No unobserved hover or focus variant is inferred.

### Carousel previous control

**Disabled**
- Text: `rgba(16, 16, 16, 0.3)`
- Radius: `0px`
- Padding: `0px`
- Font: `13.3333px / 400 / D-DIN`
- Disabled: Disabled observed on Starship previous control
- Use: Starship carousel previous control

Provenance: `surface-3::[data-omd-capture="25"]`, class `swiper-button swiper-previous`, `disabled=true`. A separate enabled default was captured on Mission; this does not establish an unobserved disabled treatment for other controls.

### Circular control

**Default**
- Background: `rgba(240, 240, 250, 0.1)`
- Text: `#000000`
- Radius: `32px`
- Padding: `18px`
- Font: `13.3333px / 400 / D-DIN`
- States: Default snapshot only; no variant captured
- Use: Unlabelled circular control observed on all three captured public pages

Provenance: `home::[data-omd-capture="32"]`; this record preserves the observed geometry without assigning a product purpose the capture does not identify.

### States

Only two public component states are evidenced by the supplied collector:

| Observed state | Surface and provenance | Treatment |
|---|---|---|
| Selected tab | Mission `surface-2::[data-omd-capture="26"]` | `#ffffff` text with `0px 0px 1px` border; `role="tab"`, `aria-selected="true"` |
| Disabled previous control | Starship `surface-3::[data-omd-capture="25"]` | transparent background; `rgba(16, 16, 16, 0.3)` text/border; `disabled=true` |

Loading, empty, error, success, validation, toast, form, and reduced-motion states were not captured. They are intentionally omitted rather than designed from the visual language.

## Do's and Don'ts

### Do

- Keep public-page CTAs dark and translucent over imagery when using the measured SpaceX CTA pattern.
- Use D-DIN only where the loaded, public-web evidence applies; retain D-DIN-Bold for display contexts.
- Preserve the selected tab’s white text and 1px bottom border.
- Keep the source domain explicit when borrowing these marketing/program-page observations.

### Don't

- Don't replace the observed 4px CTA with a 32px pill; the 32px radius belongs only to the unlabelled circular control in this capture.
- Don't promote Roboto Mono, swiper-icons, or unresolved D-DIN-Regular as the SpaceX UI family.
- Don't invent semantic status colors, error states, motion timing, or product-workflow components from the public pages.
- Don't treat a public font URL as a downstream redistribution licence.

## Voice & Tone

The official Mission and About pages use direct, outcome-led public language: “Making life multiplanetary,” vehicle capability, reusability, and named programs. The captured CTAs are short uppercase imperatives such as “LEARN MORE,” “RESERVE YOUR RIDE,” and “JOIN A MISSION.” This is an observation of those public pages, not a general writing rule for unobserved internal or transactional surfaces.

### Do

- Use concrete vehicle, destination, or capability language when it is supported by a first-party source.
- Keep public CTA labels brief and action-led.
- Attribute mission and product claims to SpaceX’s own public pages.

### Don't

- Don't manufacture founder quotations, launch claims, or operational-status copy.
- Don't extend uppercase CTA observations into a universal casing rule for every content type.

## Agent Prompt Guide

Use this reference only for an image-led public aerospace/program page: black canvas or a dark photo overlay; D-DIN UI copy; a 50px-high CTA with `rgba(0, 0, 0, 0.5)` fill, `#f0f0fa` text, `1px solid rgba(240, 240, 250, 0.35)` border, 4px radius, and `0px 20px` padding. Use a sharp selected tab with `#ffffff` text and a 1px bottom border. Do not use this prompt as evidence for SpaceX operations software, mobile behavior, font redistribution, status semantics, or motion.

---
