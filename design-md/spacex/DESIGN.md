---
id: spacex
name: SpaceX
country: US
category: consumer-tech
homepage: "https://www.spacex.com"
primary_color: "#f0f0fa"
logo:
  type: simpleicons
  slug: spacex
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.spacex.com/", inspected: "2026-07-13" }
    - { id: surface-2, kind: marketing, url: "https://www.spacex.com/mission", inspected: "2026-07-13" }
    - { id: surface-3, kind: product, url: "https://www.spacex.com/vehicles/starship", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.spacex.com/", captured: "2026-07-13" }
    - { id: mission-live, kind: product-surface, url: "https://www.spacex.com/mission", captured: "2026-07-13" }
    - { id: starship-live, kind: product-surface, url: "https://www.spacex.com/vehicles/starship", captured: "2026-07-13" }
    - { id: d-din-asset, kind: brand-asset, url: "https://www.spacex.com/D-DIN.e58c68e58b09fc0e.woff2", captured: "2026-07-13" }
    - { id: d-din-bold-asset, kind: brand-asset, url: "https://www.spacex.com/D-DIN-Bold.9a5ce67e997fd030.woff2", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.foreground": *home
    "tokens.colors.tab-selected": &mission { surface_id: surface-2, source_id: mission-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.ui": &ddin { surface_id: home, source_id: d-din-asset, method: computed-style-plus-fontfaceset-source, captured: "2026-07-13" }
    "tokens.typography.family.display": &ddinbold { surface_id: home, source_id: d-din-bold-asset, method: computed-style-plus-fontfaceset-source, captured: "2026-07-13" }
    "tokens.spacing.cta-x": *home
    "tokens.spacing.icon": *home
    "tokens.rounded.cta": *home
    "tokens.rounded.icon": *home
    "tokens.rounded.tab": *mission
    "tokens.shadow.none": *home
    "tokens.components.primary-cta.type": *home
    "tokens.components.primary-cta.bg": *home
    "tokens.components.primary-cta.fg": *home
    "tokens.components.primary-cta.border": *home
    "tokens.components.primary-cta.radius": *home
    "tokens.components.primary-cta.padding": *home
    "tokens.components.primary-cta.font": *home
    "tokens.components.primary-cta.states": *home
    "tokens.components.primary-cta.use": *home
    "tokens.components.selected-tab.type": *mission
    "tokens.components.selected-tab.fg": *mission
    "tokens.components.selected-tab.border": *mission
    "tokens.components.selected-tab.radius": *mission
    "tokens.components.selected-tab.padding": *mission
    "tokens.components.selected-tab.font": *mission
    "tokens.components.selected-tab.states": *mission
    "tokens.components.selected-tab.use": *mission
    "tokens.components.carousel-previous.type": &starship { surface_id: surface-3, source_id: starship-live, method: computed-style, captured: "2026-07-13" }
    "tokens.components.carousel-previous.fg": *starship
    "tokens.components.carousel-previous.radius": *starship
    "tokens.components.carousel-previous.padding": *starship
    "tokens.components.carousel-previous.font": *starship
    "tokens.components.carousel-previous.disabled": *starship
    "tokens.components.carousel-previous.use": *starship
    "tokens.components.circular-control.type": *home
    "tokens.components.circular-control.bg": *home
    "tokens.components.circular-control.fg": *home
    "tokens.components.circular-control.radius": *home
    "tokens.components.circular-control.padding": *home
    "tokens.components.circular-control.font": *home
    "tokens.components.circular-control.states": *home
    "tokens.components.circular-control.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    primary: "#f0f0fa"
    canvas: "#000000"
    foreground: "#f0f0fa"
    tab-selected: "#ffffff"
  typography:
    family: { ui: "D-DIN", display: "D-DIN-Bold" }
  spacing: { cta-x: 20, icon: 18 }
  rounded: { cta: 4, icon: 32, tab: 0 }
  shadow:
    none: "none"
  components:
    primary-cta: { type: button, bg: "rgba(0, 0, 0, 0.5)", fg: "#f0f0fa", border: "1px solid rgba(240, 240, 250, 0.35)", radius: "4px", padding: "0px 20px", font: "16px / 400 / D-DIN", states: "default snapshot only; no pseudo-state variant captured", use: "Cinematic CTA on the captured public home, Mission, and Starship pages" }
    selected-tab: { type: tab, fg: "#ffffff", border: "0px 0px 1px", radius: "0px", padding: "0px", font: "16px / 600 / D-DIN", states: "selected and tab-selected after captured tab interaction", use: "Mission and Starship tab controls" }
    carousel-previous: { type: button, fg: "rgba(16, 16, 16, 0.3)", radius: "0px", padding: "0px", font: "13.3333px / 400 / D-DIN", disabled: "disabled observed on Starship previous control", use: "Starship carousel previous control" }
    circular-control: { type: button, bg: "rgba(240, 240, 250, 0.1)", fg: "#000000", radius: "32px", padding: "18px", font: "13.3333px / 400 / D-DIN", states: "default snapshot only; no variant captured", use: "Unlabelled circular control observed on all three captured public pages" }
---

# SpaceX — Design Reference

## 1. Visual Theme & Atmosphere

SpaceX is a launch and spacecraft company whose public site connects an expansive mission—making life multiplanetary—with vehicle, launch, and human-spaceflight information. The captured public pages express that story through large edge-to-edge imagery, black scrims, cool off-white type, and a compact all-caps interface. The home page is a marketing surface; the Mission and Starship pages add product-program detail. This reference deliberately does not extend those observations to authenticated operations software, launch control, checkout, or other unobserved product domains.

The verified visual system is more specific than a generic “black-and-white” treatment. Its primary public CTA is a 50% black surface with `#f0f0fa` text and a faint cool-white border; selected tabs switch to `#ffffff`. D-DIN handles visible UI and body copy, while D-DIN-Bold is the loaded display face. Photography supplies the visual emphasis, not cards or shadows.

## 2. Color Palette & Roles

### Observed public-page roles

- **Cool off-white / primary** (`#f0f0fa`): visible CTA and public-page text on the captured surfaces.
- **Canvas** (`#000000`): primary CTA scrim and dark public-page canvas.
- **Selected-tab white** (`#ffffff`): selected Mission/Starship tab text and underline.
- **CTA scrim** (`rgba(0, 0, 0, 0.5)`): primary CTA fill at `home::[data-omd-capture="23"]`.
- **CTA stroke** (`rgba(240, 240, 250, 0.35)`): primary CTA border on that same selector.
- **Circular-control fill** (`rgba(240, 240, 250, 0.1)`): unlabelled 32px-radius control observed on all three captured pages.

No semantic success, warning, error, countdown, or launch-status color is promoted: the supplied evidence does not ground those roles.

## 3. Typography Rules

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

## 4. Component Stylings

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

## 5. Layout Principles

- Use full-bleed imagery and dark overlays on the captured public marketing/program pages; do not generalize this pattern to an unobserved operational product.
- Keep the primary CTA compact: the measured public version is 50px high with `0px 20px` padding and a 4px radius.
- Retain sharp tab geometry and an underline for the selected tab rather than converting it into a filled pill.
- The capture records no box shadow on the primary CTA, selected tabs, carousel controls, or circular control.

## 6. Depth & Elevation

The observed controls use imagery, transparent fills, and a black scrim instead of shadow elevation. `box-shadow: none` was recorded on the representative CTA, tab, carousel, and circular-control elements. No general depth scale is claimed.

## 7. Do's and Don'ts

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

## 8. Responsive Behavior

The supplied bundle is desktop-only at 1440×900. It confirms three public routes but does not contain a mobile viewport, breakpoint, responsive-image, or navigation-collapse observation. Responsive rules are therefore unresolved rather than extrapolated.

## 9. Agent Prompt Guide

Use this reference only for an image-led public aerospace/program page: black canvas or a dark photo overlay; D-DIN UI copy; a 50px-high CTA with `rgba(0, 0, 0, 0.5)` fill, `#f0f0fa` text, `1px solid rgba(240, 240, 250, 0.35)` border, 4px radius, and `0px 20px` padding. Use a sharp selected tab with `#ffffff` text and a 1px bottom border. Do not use this prompt as evidence for SpaceX operations software, mobile behavior, font redistribution, status semantics, or motion.

---

## 10. Voice & Tone

The official Mission and About pages use direct, outcome-led public language: “Making life multiplanetary,” vehicle capability, reusability, and named programs. The captured CTAs are short uppercase imperatives such as “LEARN MORE,” “RESERVE YOUR RIDE,” and “JOIN A MISSION.” This is an observation of those public pages, not a general writing rule for unobserved internal or transactional surfaces.

### Do

- Use concrete vehicle, destination, or capability language when it is supported by a first-party source.
- Keep public CTA labels brief and action-led.
- Attribute mission and product claims to SpaceX’s own public pages.

### Don't

- Don't manufacture founder quotations, launch claims, or operational-status copy.
- Don't extend uppercase CTA observations into a universal casing rule for every content type.

## 11. Brand Narrative

SpaceX’s official About page frames the company around a future in which people explore the stars and describes Starship and Super Heavy as a fully reusable transportation system for crew and cargo to Earth orbit, the Moon, Mars, and beyond. The Mission overview connects that ambition to reusable launch vehicles and to the company’s history of Dragon, Falcon, and human-spaceflight milestones. These first-party statements supply the narrative context for the public pages; they are not visual-token evidence.

The captured site’s current public expression pairs that mission language with large imagery, black overlays, D-DIN typography, and small action controls. It does not provide sufficient evidence for a brand-history timeline, employee culture claims, or a customer-product narrative beyond the official pages cited in the verification notes.

## 12. Principles

1. **Make the destination explicit.** The official pages connect vehicles to Earth orbit, the Moon, Mars, and beyond. *UI implication:* keep a public program page’s visual hierarchy tied to a named program or destination, not generic sci-fi decoration.
2. **Reuse is a first-party product thesis.** The Mission overview calls fully and rapidly reusable rockets pivotal to reducing space-access cost. *UI implication:* present a reuse claim only when the specific page supplies it; do not synthesize performance metrics.
3. **Separate source domains.** The evidence covers public marketing and program pages only. *UI implication:* do not transfer their tokens, components, or writing treatment to flight operations, accounts, checkout, or other unobserved systems.

## 13. Personas

[FILL IN: SpaceX has not supplied audience research, role definitions, or public product-persona material in the sources used for this reference. Do not invent named personas from launch interest or inferred job titles.]

## 14. States

Only two public component states are evidenced by the supplied collector:

| Observed state | Surface and provenance | Treatment |
|---|---|---|
| Selected tab | Mission `surface-2::[data-omd-capture="26"]` | `#ffffff` text with `0px 0px 1px` border; `role="tab"`, `aria-selected="true"` |
| Disabled previous control | Starship `surface-3::[data-omd-capture="25"]` | transparent background; `rgba(16, 16, 16, 0.3)` text/border; `disabled=true` |

Loading, empty, error, success, validation, toast, form, and reduced-motion states were not captured. They are intentionally omitted rather than designed from the visual language.

## 15. Motion & Easing

The collector records two tab interactions but does not record transition durations, easing curves, scroll behavior, animation properties, or reduced-motion behavior. No motion token or animation rule is inferred from this evidence.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.spacex.com/ · https://www.spacex.com/mission · https://www.spacex.com/vehicles/starship
**Tier 2 sources:** https://getdesign.md/spacex (editorial cross-check) · https://styles.refero.design/?q=SpaceX (required search attempted; no indexed SpaceX result found)
**Conflicts unresolved:** none
