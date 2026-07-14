---
id: tesla
name: Tesla
country: US
category: automotive
homepage: "https://www.tesla.com"
primary_color: "#3e6ae1"
logo:
  type: simpleicons
  slug: tesla
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: support, url: "https://www.tesla.com/support/getting-started-with-your-vehicle", inspected: "2026-07-13" }
    - { id: surface-2, kind: marketing, url: "https://www.tesla.com/model3?lang=en", inspected: "2026-07-13" }
    - { id: surface-3, kind: documentation, url: "https://www.tesla.com/ownersmanual/", inspected: "2026-07-13" }
  sources:
    - { id: support-live, kind: official-doc, url: "https://www.tesla.com/support/getting-started-with-your-vehicle", captured: "2026-07-13" }
    - { id: model3-live, kind: product-surface, url: "https://www.tesla.com/model3?lang=en", captured: "2026-07-13" }
    - { id: manual-live, kind: official-doc, url: "https://www.tesla.com/ownersmanual/", captured: "2026-07-13" }
    - { id: universal-text-asset, kind: brand-asset, url: "https://digitalassets.tesla.com/tesla-design-system/raw/upload/static/fonts/universal-sans-2/web/text/Universal-Sans-Text-Regular.woff2", captured: "2026-07-13" }
    - { id: universal-display-asset, kind: brand-asset, url: "https://digitalassets.tesla.com/tesla-design-system/raw/upload/static/fonts/universal-sans-2/web/display/Universal-Sans-Display-Regular.woff2", captured: "2026-07-13" }
    - { id: tesla-legal, kind: license, url: "https://www.tesla.com/legal/terms", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &model3 { surface_id: surface-2, source_id: model3-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *model3
    "tokens.colors.surface": *model3
    "tokens.colors.foreground": *model3
    "tokens.colors.body": *model3
    "tokens.colors.muted": *model3
    "tokens.colors.on-primary": *model3
    "tokens.typography.family.ui": *model3
    "tokens.typography.family.display": *model3
    "tokens.spacing.unit": *model3
    "tokens.spacing.gap": *model3
    "tokens.spacing.nav-x": *model3
    "tokens.spacing.card-x": *model3
    "tokens.spacing.card-y": *model3
    "tokens.spacing.card-bottom": *model3
    "tokens.spacing.section": *model3
    "tokens.rounded.control": *model3
    "tokens.rounded.tab": *model3
    "tokens.rounded.card": *model3
    "tokens.shadow.carousel-navigation": *model3
    "tokens.components.primary-cta.type": *model3
    "tokens.components.primary-cta.bg": *model3
    "tokens.components.primary-cta.fg": *model3
    "tokens.components.primary-cta.radius": *model3
    "tokens.components.primary-cta.padding": *model3
    "tokens.components.primary-cta.font": *model3
    "tokens.components.primary-cta.states": *model3
    "tokens.components.primary-cta.use": *model3
    "tokens.components.high-contrast-cta.type": *model3
    "tokens.components.high-contrast-cta.bg": *model3
    "tokens.components.high-contrast-cta.fg": *model3
    "tokens.components.high-contrast-cta.radius": *model3
    "tokens.components.high-contrast-cta.padding": *model3
    "tokens.components.high-contrast-cta.font": *model3
    "tokens.components.high-contrast-cta.states": *model3
    "tokens.components.high-contrast-cta.use": *model3
    "tokens.components.info-card.type": *model3
    "tokens.components.info-card.bg": *model3
    "tokens.components.info-card.fg": *model3
    "tokens.components.info-card.radius": *model3
    "tokens.components.info-card.padding": *model3
    "tokens.components.info-card.use": *model3
    "tokens.components.carousel-dot.type": *model3
    "tokens.components.carousel-dot.bg": *model3
    "tokens.components.carousel-dot.fg": *model3
    "tokens.components.carousel-dot.radius": *model3
    "tokens.components.carousel-dot.padding": *model3
    "tokens.components.carousel-dot.states": *model3
    "tokens.components.carousel-dot.use": *model3
    "tokens.components.mode-tab.type": *model3
    "tokens.components.mode-tab.fg": *model3
    "tokens.components.mode-tab.radius": *model3
    "tokens.components.mode-tab.padding": *model3
    "tokens.components.mode-tab.states": *model3
    "tokens.components.mode-tab.use": *model3
    "tokens.components.carousel-navigation.type": *model3
    "tokens.components.carousel-navigation.bg": *model3
    "tokens.components.carousel-navigation.fg": *model3
    "tokens.components.carousel-navigation.radius": *model3
    "tokens.components.carousel-navigation.padding": *model3
    "tokens.components.carousel-navigation.shadow": *model3
    "tokens.components.carousel-navigation.states": *model3
    "tokens.components.carousel-navigation.use": *model3
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    primary: "#3e6ae1"
    canvas: "#ffffff"
    surface: "#f4f4f4"
    foreground: "#171a20"
    body: "#393c41"
    muted: "#5c5e62"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Universal Sans Text", display: "Universal Sans Display" }
  spacing: { unit: 4, gap: 8, nav-x: 16, card-x: 24, card-y: 32, card-bottom: 48, section: 64 }
  rounded: { control: 4, tab: 8, card: 8 }
  shadow:
    carousel-navigation: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
  components:
    primary-cta: { type: button, bg: "#3e6ae1", fg: "#ffffff", radius: "4px", padding: "4px", font: "14px / 500 / Universal Sans Text", states: "pressed and focus computed snapshots", use: "Model 3 marketing CTA" }
    high-contrast-cta: { type: button, bg: "#ffffff", fg: "#393c41", radius: "4px", padding: "4px", font: "14px / 500 / Universal Sans Text", states: "focus computed snapshot", use: "Paired Model 3 marketing CTA" }
    info-card: { type: card, bg: "#f4f4f4", fg: "#393c41", radius: "8px", padding: "0px 24px", use: "Filled information card on Model 3 marketing page" }
    carousel-dot: { type: tab, bg: "#ffffff", fg: "#d0d1d2", radius: "8px", padding: "4px", states: "default and focus computed snapshots", use: "Model 3 carousel dot" }
    mode-tab: { type: tab, fg: "#171a20", radius: "4px", padding: "4px 8px", states: "default, pressed, and focus computed snapshots", use: "Model 3 carousel mode tab" }
    carousel-navigation: { type: button, bg: "rgba(255, 255, 255, 0.75)", fg: "#393c41", radius: "4px", padding: "4px", shadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px", states: "default, pressed, and focus computed snapshots", use: "Inline Model 3 carousel arrow" }
---

# Tesla — Design Reference

## 1. Visual Theme & Atmosphere

Tesla makes electric vehicles, charging, solar, and energy-storage products; its current public story extends that work toward what it calls sustainable abundance. On the captured Model 3 marketing page, that ambition is expressed through a largely neutral, image-led interface rather than a dense automotive dashboard: `#3e6ae1` appears on a primary call to action, while white, charcoal, and near-black carry most of the UI. Universal Sans Display creates the large product hierarchy and Universal Sans Text handles controls and supporting copy. This reference separates that marketing language from the supplied support page and owners-manual chrome: the latter do not authorize marketing tokens, while the former does not describe an authenticated vehicle, account, or in-car product interface.

- **Product-led marketing:** the captured Model 3 surface combines large display type, paired CTAs, carousel controls, and filled information cards.
- **Restrained UI color:** the verified marketing palette is blue plus neutrals, not a general semantic-status palette.
- **Distinct source domains:** support and documentation were captured, but their local typography and browser-like chrome are not promoted into the Model 3 system.

## 2. Color Palette & Roles

### Observed Model 3 marketing roles

- **Primary action** (`#3e6ae1`): Model 3 `tds-btn--primary` background at `surface-2::[data-omd-capture="11"]`.
- **Canvas and on-primary** (`#ffffff`): high-contrast CTA fill and primary CTA text on the same surface.
- **Filled card surface** (`#f4f4f4`): `tcl-info-card--filled` background.
- **Foreground** (`#171a20`): selected mode-tab and information-card heading text.
- **Body** (`#393c41`): high-contrast CTA text, card copy, and carousel-arrow icon color.
- **Muted copy** (`#5c5e62`): Model 3 low-contrast display copy and inactive mode tabs.

The capture also records local transparent and translucent fills, including `rgba(255, 255, 255, 0.75)` on carousel arrows. No success, warning, error, dark-mode, or account-product color role is inferred.

## 3. Typography Rules

### Evidence classes

- **Live computed marketing use:** `Universal Sans Text` is loaded with high confidence, has 266 visible uses, and is backed by five Tesla-hosted WOFF2 sources. It appears in navigation, buttons, cards, tabs, dialogs, and supporting text on the supplied Tesla pages.
- **Live computed marketing use:** `Universal Sans Display` is loaded with high confidence, has 65 visible uses, and is backed by five Tesla-hosted WOFF2 sources. It appears in Model 3 headings and display copy.
- **Official distributed assets:** the two Universal Sans families are served from Tesla’s `digitalassets.tesla.com/tesla-design-system` paths. Those URLs corroborate the loaded-face source, not permission to reuse the files.
- **Declared-only assets:** Blender TSL, CT Speed, Fira Code, Noto Sans variants, Open Sans, and PingFang variants were declared but had zero visible captured uses. They are not UI-family tokens.
- **Documentation chrome and unresolved:** the owners-manual capture computes `Times` but supplies no matching loaded face or source. It remains unresolved and is not treated as a Tesla brand family.
- **License boundary:** Tesla’s public legal material does not publish a Universal Sans web-font licence for downstream use. Keep the metadata and mark the specimen unavailable when the target project lacks its own licence; do not substitute a system font as Universal Sans.

### Measured Model 3 marketing hierarchy

| Role | Family | Size | Weight | Line height | Provenance |
|---|---|---:|---:|---:|---|
| Large product heading | Universal Sans Display | 48px | 500 | 56px | `surface-2::h1` |
| Information-card heading | Universal Sans Display | 34px | 500 | 44px | `.tcl-info-card__header` |
| Display support copy | Universal Sans Display | 20px | 400 | 28px | `.tcl-info-card__description` |
| Navigation and control text | Universal Sans Text | 14px | 500 | 20px | `.tds-site-nav-item` |
| CTA label | Universal Sans Text | 14px | 500 | 16.8px | `.tds-btn--primary` |
| Mode tab | Universal Sans Text | 17px | 500 | 20px | `.tds-tab` |

## 4. Components

All values in this section come from the captured Model 3 marketing surface (`surface-2`). The collector reports `interactionCount: 0`; focus and pressed rows below are computed pseudo-state snapshots, not evidence of transitions, menu behavior, or a complete accessibility contract.

### CTA buttons

**Primary CTA**
- Background: `#3e6ae1`
- Text: `#ffffff`
- Border: `3px solid transparent`
- Radius: `4px`
- Padding: `4px`
- Font: `14px / 500 / Universal Sans Text`
- Use: `surface-2::[data-omd-capture="11"]`, a Model 3 marketing CTA
- Pressed: `#3e6ae0` background at `surface-2::[data-omd-capture="11"]::state-pressed`
- Focus: `rgba(255, 255, 255, 0.05) 0px 0px 0px 2px inset` at `surface-2::[data-omd-capture="11"]::state-focus`

**High-contrast CTA**
- Background: `#ffffff`
- Text: `#393c41`
- Border: `3px solid transparent`
- Radius: `4px`
- Padding: `4px`
- Font: `14px / 500 / Universal Sans Text`
- Use: `surface-2::[data-omd-capture="12"]`, paired with the primary Model 3 CTA
- Focus: `rgba(57, 60, 65, 0.05) 0px 0px 0px 2px inset` at `surface-2::[data-omd-capture="12"]::state-focus`

### Navigation item

**Product-name navigation item**
- Text: `#ffffff`
- Radius: `4px`
- Padding: `4px 16px`
- Font: `14px / 500 / Universal Sans Text`
- Use: Model 3 header item at `surface-2::[data-omd-capture="2"]`; the value is scoped to the captured light-on-image header treatment

### Carousel controls

**Carousel dot**
- Background: `#ffffff`
- Text: `#d0d1d2`
- Radius: `8px`
- Padding: `4px`
- Use: `surface-2::[data-omd-capture="13"]` active and `"14"` inactive dot controls
- Focus: inactive dot becomes `#d8d9d9` at `surface-2::[data-omd-capture="14"]::state-focus`

**Mode tab**
- Text: `#171a20`
- Radius: `4px`
- Padding: `4px 8px`
- Font: `17px / 500 / Universal Sans Text`
- Use: selected Model 3 tab at `surface-2::[data-omd-capture="18"]`
- Pressed: inactive tab is `#5b5d61` at `surface-2::[data-omd-capture="19"]::state-pressed`
- Focus: inactive tab is `#57595d` at `surface-2::[data-omd-capture="19"]::state-focus`

**Carousel arrow**
- Background: `rgba(255, 255, 255, 0.75)`
- Text: `#393c41`
- Border: `2px solid transparent`
- Radius: `4px`
- Padding: `4px`
- Shadow: `rgba(0, 0, 0, 0.25) 0px 4px 4px 0px`
- Use: inline Model 3 carousel navigation at `surface-2::[data-omd-capture="16"]` and `"17"`
- Pressed: `#393c41` `0px 0px 0px 2px inset` at `surface-2::[data-omd-capture="16"]::state-pressed`
- Focus: the same inset value at `surface-2::[data-omd-capture="17"]::state-focus`

### Information card

**Filled information card**
- Background: `#f4f4f4`
- Text: `#393c41`
- Radius: `8px`
- Padding: `0px 24px`
- Use: `surface-2::div.tcl-info-card.tcl-info-card--filled`; nested content is `32px 0px 48px`

## 5. Layout Principles

The supplied evidence is a 1440×900 desktop capture. On the Model 3 page, 4px and 8px recur in control padding and gaps; 16px is the product-navigation horizontal padding; filled-card shells use 24px horizontal padding; their nested content uses 32px top and 48px bottom padding. A 64px section margin is also observed. These are observed local measurements, not a public design-token release or a responsive specification.

## 6. Depth & Elevation

The filled information cards report no box shadow. The captured inline carousel arrow is the exception: `rgba(0, 0, 0, 0.25) 0px 4px 4px 0px`. Its focus and pressed snapshots replace that with an inset outline. No global elevation scale, overlay system, or modal shadow is asserted.

## 7. Do's and Don'ts

### Do

- Keep the observed Model 3 public-marketing base to `#3e6ae1`, white, and the measured neutral hierarchy.
- Use Universal Sans Text and Display only when the target project has legitimate access to those families.
- Preserve the exact captured surface boundary when using the 4px CTA, 8px card, and carousel-control patterns.
- Treat pseudo-state rows as visual samples with their selectors, not as an interaction specification.

### Don't

- Do not transfer Model 3 marketing values into Tesla account, vehicle, service, support, or in-car product UI without evidence from that surface.
- Do not promote declared-only Blender TSL, CT Speed, Fira Code, Noto, Open Sans, or PingFang faces to a live family.
- Do not present Times from the owners-manual capture as a Tesla brand or documentation font.
- Do not infer hover motion, breakpoints, dialog behavior, or semantic status colors from this bundle.

## 8. Responsive Behavior

Only a 1440×900 desktop capture was supplied. It records a desktop Model 3 header and carousel but does not establish Tesla’s mobile navigation, breakpoints, touch targets, reflow rules, or responsive image behavior.

## 9. Agent Prompt Guide

Use this reference for a Tesla-like public vehicle-marketing panel, not for a Tesla product clone: a neutral image-led composition, one `#3e6ae1` primary action, a white paired action, 4px control corners, and 8px filled information cards. Keep support documentation, owners-manual chrome, and unavailable fonts outside the implementation unless the target work carries its own evidence and licence.

## 10. Voice & Tone

Tesla’s official about page frames the company through energy, batteries, electric vehicles, safety, and scale; Master Plan Part IV extends that frame to “sustainable abundance.” That is a useful public positioning direction: concrete physical systems and direct claims of purpose. It is not evidence for a complete product-microcopy or error-message system.

| Context | First-party direction |
|---|---|
| Company framing | Connect solar, batteries, and electric vehicles to a sustainable-energy mission. |
| Long-form strategy | State a principle, then explain the engineering or scale rationale. |
| Public product copy | Keep the copy concrete and product-led; the supplied capture does not verify a broader voice rule. |

**Official wording samples**

- *“Accelerating the World’s Transition to Sustainable Energy”* — Tesla About page.
- *“The Future is Sustainable”* — Tesla About page.
- *“Innovation removes constraints.”* — Master Plan Part IV.
- *“Technology solves tangible problems.”* — Master Plan Part IV.

## 11. Brand Narrative

Tesla’s official About page presents an integrated ecosystem of solar generation, batteries, and electric vehicles, and describes the systems as designed to scale. Master Plan Part IV, published by the Tesla team in 2025, positions the next chapter around sustainable abundance and links hardware, software, manufacturing, autonomy, mobility, energy, and robotics. Those first-party sources provide the product and strategic context for the sparse, product-led public marketing surface captured here. They do not establish unobserved history, vehicle-interface patterns, or claims about individual founders.

## 12. Principles

1. **Unconstrained sustainability.** Master Plan Part IV describes this as Tesla’s north star. *Reference UI implication:* make the product and its physical outcome legible before adding decorative interface layers.
2. **Innovation removes constraints.** Tesla’s strategy source links progress to solving battery and scale constraints. *Reference UI implication:* use precise hierarchy and measured controls to explain a technical choice.
3. **Technology solves tangible problems.** The plan connects energy storage, transport, and autonomy to concrete outcomes. *Reference UI implication:* connect an interface claim to an observable product or task, rather than an abstract flourish.
4. **Greater access drives greater growth.** The source ties scale and availability to its broader purpose. *Reference UI implication:* do not turn this marketing reference into an exclusionary premium-only visual language.

The UI implications are this reference’s interpretation of Tesla’s published strategy, not Tesla design-system rules.

## 13. Personas

No fictional personas are asserted. Tesla’s official public context addresses people considering electric vehicles, solar generation, and battery storage, while the Model 3 evidence is a vehicle-marketing surface. Support and owners-manual visitors are separate audiences with separate chrome; the capture does not justify collapsing them into the Model 3 marketing system.

## 14. States

The only state evidence is the collector’s computed pseudo-state output for the captured Model 3 CTA, carousel dot, mode tab, and carousel arrow. It includes focus and pressed samples documented in §4. No authenticated empty, loading, success, error, disabled, order-flow, or vehicle-control state was supplied, so none is invented here.

## 15. Motion & Easing

The bundle reports `interactionCount: 0`. It contains no measured transition duration, easing curve, reduced-motion behavior, or recorded carousel interaction. Pseudo-state computed snapshots do not establish a motion system.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.tesla.com/model3?lang=en` (captured public vehicle marketing), `https://www.tesla.com/support/getting-started-with-your-vehicle` (captured support), `https://www.tesla.com/ownersmanual/` (captured documentation chrome), `https://www.tesla.com/en_GB/about?redirect=no` (official context), `https://www.tesla.com/en_sa/master-plan-part-4` (official strategy), `https://digitalassets.tesla.com/tesla-design-system/raw/upload/static/fonts/universal-sans-2/web/text/Universal-Sans-Text-Regular.woff2` and `https://digitalassets.tesla.com/tesla-design-system/raw/upload/static/fonts/universal-sans-2/web/display/Universal-Sans-Display-Regular.woff2` (official font assets), `https://www.tesla.com/legal/terms` (legal boundary; not a font licence)
**Tier 2 sources:** `https://getdesign.md/tesla` (Tesla record; broad direction only), `https://styles.refero.design/?q=tesla` and `https://styles.refero.design/style/7266b546-2fb0-465c-acd6-79001c39829a` (Tesla record; cross-check only)
**Conflicts unresolved:** none
