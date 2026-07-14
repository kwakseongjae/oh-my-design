---
id: lamborghini
name: Lamborghini
country: IT
category: automotive
homepage: "https://www.lamborghini.com"
primary_color: "#ffc000"
logo:
  type: simpleicons
  slug: lamborghini
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.lamborghini.com/ko-en", inspected: "2026-07-13" }
    - { id: global-home, kind: marketing, url: "https://www.lamborghini.com/en-en", inspected: "2026-07-13" }
    - { id: models, kind: marketing, url: "https://www.lamborghini.com/en-en/models", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.lamborghini.com/ko-en", captured: "2026-07-13" }
    - { id: global-home-live, kind: product-surface, url: "https://www.lamborghini.com/en-en", captured: "2026-07-13" }
    - { id: models-live, kind: product-surface, url: "https://www.lamborghini.com/en-en/models", captured: "2026-07-13" }
    - { id: corporate-look, kind: official-doc, url: "https://www.lamborghini.com/en-en/news/automobili-lamborghini-launches-its-new-corporate-look", captured: "2026-07-13" }
    - { id: brand-manifesto, kind: official-doc, url: "https://www.lamborghini.com/en-en/beyond/brand-manifesto", captured: "2026-07-13" }
    - { id: lambotype-design, kind: brand-asset, url: "https://charactertype.com/typefaces/lamborghini/", captured: "2026-07-13" }
    - { id: website-terms, kind: license, url: "https://www.lamborghini.com/en-en/privacy-legal", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home_live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.primary-muted": *home_live
    "tokens.colors.surface-light": *home_live
    "tokens.colors.foreground": *home_live
    "tokens.colors.on-primary": *home_live
    "tokens.colors.inverse": *home_live
    "tokens.colors.muted": *home_live
    "tokens.typography.family.ui": *home_live
    "tokens.spacing.xs": *home_live
    "tokens.spacing.sm": *home_live
    "tokens.spacing.md": *home_live
    "tokens.spacing.lg": *home_live
    "tokens.spacing.section": *home_live
    "tokens.rounded.square": *home_live
    "tokens.components.accent-cta.type": *home_live
    "tokens.components.accent-cta.bg": *home_live
    "tokens.components.accent-cta.fg": *home_live
    "tokens.components.accent-cta.radius": *home_live
    "tokens.components.accent-cta.padding": *home_live
    "tokens.components.accent-cta.font": *home_live
    "tokens.components.accent-cta.states": *home_live
    "tokens.components.accent-cta.use": *home_live
    "tokens.components.outline-action.type": *home_live
    "tokens.components.outline-action.fg": *home_live
    "tokens.components.outline-action.border": *home_live
    "tokens.components.outline-action.radius": *home_live
    "tokens.components.outline-action.padding": *home_live
    "tokens.components.outline-action.font": *home_live
    "tokens.components.outline-action.states": *home_live
    "tokens.components.outline-action.use": *home_live
    "tokens.components.menu-link.type": *home_live
    "tokens.components.menu-link.fg": *home_live
    "tokens.components.menu-link.radius": *home_live
    "tokens.components.menu-link.padding": *home_live
    "tokens.components.menu-link.font": *home_live
    "tokens.components.menu-link.states": *home_live
    "tokens.components.menu-link.use": *home_live
    "tokens.components.selected-tab.type": *home_live
    "tokens.components.selected-tab.fg": *home_live
    "tokens.components.selected-tab.border": *home_live
    "tokens.components.selected-tab.radius": *home_live
    "tokens.components.selected-tab.padding": *home_live
    "tokens.components.selected-tab.font": *home_live
    "tokens.components.selected-tab.states": *home_live
    "tokens.components.selected-tab.use": *home_live
    "tokens.components.news-card.type": *home_live
    "tokens.components.news-card.fg": *home_live
    "tokens.components.news-card.radius": *home_live
    "tokens.components.news-card.padding": *home_live
    "tokens.components.news-card.use": *home_live
tokens:
  source: live-extract
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    primary: "#ffc000"
    primary-muted: "#917300"
    surface-light: "#ffffff"
    foreground: "#202020"
    on-primary: "#000000"
    inverse: "#ffffff"
    muted: "#969696"
  typography:
    family: { ui: "LamboType" }
  spacing: { xs: 8, sm: 16, md: 24, lg: 32, section: 48 }
  rounded: { square: 0 }
  components:
    accent-cta: { type: button, bg: "#ffc000", fg: "#000000", radius: "0px", padding: "24px", font: "16px / 400 / LamboType", states: "captured in selected/tab-selected surface context; no activation transition asserted", use: "Marketing accent action at home::[data-omd-capture=\"45\"]" }
    outline-action: { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "0px", padding: "24px", font: "16px / 400 / LamboType", states: "captured in selected/tab-selected surface context; no activation transition asserted", use: "Marketing secondary action at home::[data-omd-capture=\"46\"]" }
    menu-link: { type: button, fg: "#ffffff", radius: "0px", padding: "16px 0px", font: "18px / 400 / LamboType", states: "default capture; menu open/close transition was not captured", use: "Burger-menu hierarchy link at home::[data-omd-capture=\"4\"]" }
    selected-tab: { type: tab, fg: "#ffffff", border: "0px 0px 2px #ffc000", radius: "0px", padding: "24px", font: "16px / 400 / LamboType", states: "selected and tab-selected after observed tab interaction", use: "React tab at home::[data-omd-capture=\"41\"]" }
    news-card: { type: card, fg: "#202020", radius: "0px", padding: "0px", use: "News-card image wrapper at home::div.card-news__image-wrapper" }
---

# Lamborghini — Design Reference

## 1. Visual Theme & Atmosphere

Automobili Lamborghini is an Italian super sports car maker founded in 1963, whose current public positioning pairs technological performance with audacious design and its “Driving Humans Beyond” mission. The captured public web surfaces express that identity as editorial automotive marketing: large LamboType headlines, full-bleed product imagery, hard-edged controls, and a tightly observed palette of yellow, black, white, and neutral gray. This is not a reference for an authenticated vehicle, owner, dealer, checkout, or documentation product: the supplied evidence covers only three public marketing routes. Lamborghini’s 2024 corporate refresh explicitly reconnects black and white with yellow and gold accents, an official typeface, and a new icon set; the live capture corroborates LamboType in visible public UI rather than treating the older site snapshot as a universal product system.

- **Source boundary:** `home`, `global-home`, and `models` are public marketing surfaces. No authenticated product, dealership workflow, configuration flow, or documentation chrome was supplied.
- **Measured character:** 0px controls and panels recur throughout the capture; yellow is observed on accent actions rather than elevated to a general semantic palette.
- **Current context:** the official 2024 identity update links the visual direction to the company’s brave, unexpected, and authentic values.

## 2. Color Palette & Roles

The roles below are limited to values that the supplied collector observed in computed styles on the three marketing surfaces.

- **Accent action — `#ffc000`:** background on `btn-accent btn-large` at `home::[data-omd-capture="45"]`.
- **Alternate accent sample — `#917300`:** background on a separate `nav-btn explore ... btn-accent` sample at `home::[data-omd-capture="31"]`. It is an observed variant, not a documented hover contract.
- **Light fill / inverse text — `#ffffff`:** a captured filled primary button background and the foreground/border of outline controls.
- **Foreground — `#202020`:** recurring card and text color on the marketing routes.
- **On accent — `#000000`:** text and border color on the `#ffc000` accent action.
- **Muted control text — `#969696`:** captured on disabled/secondary carousel and tab samples.

The bundle also records `#181818`, `#f5f5f5`, `#c4c4c4`, `#494949`, and `#7d7d7d` in local text or border contexts. They are not promoted to semantic, error, success, link, or global-surface tokens because the capture does not establish those roles.

## 3. Typography Rules

### Evidence classes

- **Live computed + FontFaceSet use:** `LamboType` is the sole loaded, high-confidence family in the bundle. It has 805 visible uses across headings, text, buttons, cards, tabs, badges, and list items; the collector reports that the computed family is backed by a loaded `FontFace`.
- **Official product-use context:** Lamborghini’s 2024 corporate-look announcement says its official typeface was created for company communications. Character Type identifies the Lamborghini project as Lambotype, a variable custom family designed with Strichpunkt. This contextual evidence supports the live family story; it does not turn the captured site files into a reusable asset.
- **Declared-only asset:** `Lambo-icons` has an `@font-face` declaration but zero visible captured use. It is not a typography or icon token.
- **Fallback names:** Roboto, Helvetica Neue, and Arial appear behind `LamboType` in computed CSS stacks. The loaded LamboType face wins in the capture; fallback names are not promoted as brand families.
- **Licence boundary:** Lamborghini’s terms say site fonts and other material are protected and may not be reproduced or used without authorization. No public downstream LamboType web-font licence was found. Keep the family metadata, but mark a specimen unavailable unless the target project has its own licence; never substitute a system font while calling it LamboType.

### Measured public-marketing hierarchy

| Role | Size / weight / line height | Provenance |
|---|---|---|
| Display headline | 120px / 400 / 110px | `surface-3::h3.card-bt__title-primary` |
| Large display | 80px / 400 / 90px | `surface-3` body sample |
| Editorial heading | 54px / 400 / 64px | `surface-3::h3` sample |
| News heading | 27px / 400 / 37px | `home::h3.card-news__title` |
| Menu hierarchy link | 18px / 400 / 28px | `home::[data-omd-capture="4"]` |
| Body / control | 16px / 400 / 24px | recurring captured text/button/card sample |
| Small label | 10px / 400 / 10px, `0.225px` tracking | `home::[data-omd-capture="51"]` |

## 4. Components

All values below are selector-level observations from the supplied public marketing capture. It reports seven successful tab interactions. The collector’s `selected` / `tab-selected` component labels are retained as provenance; they do not establish a general button-hover, menu, dialog, or form-state specification.

### Marketing actions

**Accent CTA**
- Background: `#ffc000`
- Text: `#000000`
- Radius: `0px`
- Padding: `24px`
- Font: `16px / 400 / LamboType`
- Use: `home::[data-omd-capture="45"]` on public marketing routes
- States: Captured in selected/tab-selected surface context; no activation transition was asserted

**Outline action**
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Radius: `0px`
- Padding: `24px`
- Font: `16px / 400 / LamboType`
- Use: `home::[data-omd-capture="46"]` on public marketing routes
- States: Captured in selected/tab-selected surface context; no activation transition was asserted

### Navigation and selection

**Menu hierarchy link**
- Text: `#ffffff`
- Radius: `0px`
- Padding: `16px 0px`
- Font: `18px / 400 / LamboType`
- Use: `home::[data-omd-capture="4"]`, `.burger-menu-link.lev-2-toggler`
- States: Default capture only; a menu open/close transition was not captured

**Selected tab**
- Text: `#ffffff`
- Border: `0px 0px 2px #ffc000`
- Radius: `0px`
- Padding: `24px`
- Font: `16px / 400 / LamboType`
- Use: `home::[data-omd-capture="41"]`, `.react-tabs__tab.react-tabs__tab--selected`
- States: Selected and tab-selected after an observed tab interaction

### Editorial content

**News-card image wrapper**
- Text: `#202020`
- Radius: `0px`
- Padding: `0px`
- Use: `home::div.card-news__image-wrapper`; no card fill, border, shadow, or state is claimed from this transparent wrapper

## 5. Layout Principles

The capture repeatedly measures 8px, 16px, 24px, 32px, and 48px in local padding, margin, and gap values. The strongest observed local pattern is 24px: it occurs in action padding, tab padding, and layout gaps. A carousel shell is observed with `80px 0px` padding and an editorial-content card with `40px` padding, but neither value is promoted into the compact token scale because their roles are isolated. No grid, breakpoint, or max-width is claimed without an explicit measurement.

## 6. Depth & Elevation

The captured component samples report `box-shadow: none`. Transparent wrappers and photography carry much of the page’s visual weight; this evidence does not establish a global black-canvas policy, overlay scale, modal treatment, or image gradient system. Treat depth beyond the observed no-shadow samples as unresolved.

## 7. Do's and Don'ts

### Do

- Keep an adaptation scoped to the public-marketing evidence: LamboType, 0px control radius, and the explicitly observed yellow/white/charcoal roles.
- Preserve selector-level provenance when reusing the 24px accent action, white outline action, or selected tab.
- Use a properly licensed LamboType asset, or omit the specimen rather than substituting a system face.
- Treat the 2024 official identity announcement as brand context, not a release of a reusable design system.

### Don't

- Do not apply these marketing observations to configurator, owner, vehicle, dealer, checkout, or documentation UI without source evidence from that domain.
- Do not turn `#917300` into a hover token, or turn the observed color list into success/error/link semantics; those behaviors were not captured.
- Do not promote `Lambo-icons`, Roboto, Helvetica Neue, or Arial to a verified Lamborghini UI family.
- Do not invent menu, dialog, form-validation, carousel, or motion variants beyond the selected tab interaction that was observed.

## 8. Responsive Behavior

The supplied evidence does not provide a viewport matrix or mobile/desktop comparison. Responsive breakpoints, navigation collapse behavior, touch-target policy, and image-art-direction rules remain unresolved rather than inferred from the marketing layout.

## 9. Agent Prompt Guide

Use this reference as a constrained public-marketing direction, not an implementation kit for a vehicle or ownership product. A safe prompt names the source boundary and the measured inputs: “Create a public automotive editorial action with LamboType only when licensed, `#ffc000` background, `#000000` text, 0px radius, 24px padding, and no unobserved hover behavior.” Do not request a generic Lamborghini configurator, error state, account flow, or modal from this evidence.

## 10. Voice & Tone

The official manifesto frames Lamborghini as brave, unexpected, and authentic, with “Driving Humans Beyond” as its mission. The live public navigation and model marketing use concise, uppercase labels; the corporate-look announcement describes the identity change as a clearer expression of those values. This supports a direct, declarative marketing register—not an invented support, legal, or product-error voice.

| Context | Source-backed direction |
|---|---|
| Brand statement | “Driving Humans Beyond” and a leadership position in the unexpected |
| Public marketing navigation | Brief uppercase labels such as “MODELS”, “OWNERSHIP”, and “NEWS” |
| Product storytelling | Model-focused, editorial presentation on the captured public pages |

## 11. Brand Narrative

Lamborghini’s official company material dates the founding to 1963 in Sant’Agata Bolognese and describes more than sixty years of super sports car design and performance. Its current company framing adds sustainability, well-being, and inclusion to the “Driving Humans Beyond” mission. The 2024 corporate refresh is the relevant current evolution for this reference: it introduces a broader logo typeface, reconfirms black and white as primary hues with yellow and gold accents, and adds a new official typeface and icon set for company communications.

## 12. Principles

1. **Brave.** The manifesto identifies courage as a brand value. *UI implication:* make emphasis deliberate and sparse rather than accumulating decorative emphasis.
2. **Unexpected.** The manifesto asks the brand to push boundaries. *UI implication:* use the measured accent action only where a public-marketing action needs visual priority.
3. **Authentic.** The official identity work ties visual expression to the company’s own design language. *UI implication:* retain 0px control geometry and licensed LamboType only where the cited marketing evidence applies.

## 13. Personas

No first-party persona segmentation or user-research evidence was supplied for this reverify. **[FILL IN: add research-backed audience needs only when an official or user-provided source is available.]**

## 14. States

The only observed interaction class is tabs: seven captured interactions produced `selected` / `tab-selected` provenance. Disabled carousel-control styling appears in component samples, but no disabled behavior was exercised. Empty, loading, error, success, skeleton, menu, dialog, form-validation, and toast states were not captured and are intentionally omitted.

## 15. Motion & Easing

No duration, easing, transition, or reduced-motion value was measured in the supplied evidence. Do not derive a motion scale from cinematic imagery or the corporate narrative.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.lamborghini.com/ko-en · https://www.lamborghini.com/en-en · https://www.lamborghini.com/en-en/models
**Tier 2 sources:** https://getdesign.md/lamborghini · https://styles.refero.design/style/c9c5be5a-aaa1-4338-9681-8378d2e24fbd
**Conflicts unresolved:** none
