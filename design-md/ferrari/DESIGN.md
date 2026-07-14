---
id: ferrari
name: Ferrari
country: IT
category: automotive
homepage: "https://www.ferrari.com"
primary_color: "#da291c"
logo:
  type: simpleicons
  slug: ferrari
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-brand, url: "https://www.ferrari.com/en-EN", inspected: "2026-07-13" }
    - { id: car-range, kind: public-product, url: "https://www.ferrari.com/en-EN/auto/car-range", inspected: "2026-07-13" }
    - { id: formula1, kind: public-racing, url: "https://www.ferrari.com/en-EN/formula1", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.ferrari.com/en-EN", captured: "2026-07-13" }
    - { id: car-range-live, kind: product-surface, url: "https://www.ferrari.com/en-EN/auto/car-range", captured: "2026-07-13" }
    - { id: formula1-live, kind: product-surface, url: "https://www.ferrari.com/en-EN/formula1", captured: "2026-07-13" }
    - { id: ferrari-sans-asset, kind: brand-asset, url: "https://www.ferrari.com/etc.clientlibs/ferrari-fcom/clientlibs/clientlib-site/resources/fonts/Ferrari-SansRegular.woff2?v=1", captured: "2026-07-13" }
    - { id: ferrari-font-context, kind: official-doc, url: "https://www.ferrari.com/en-EN/formula1/articles/the-sf-24-is-here", captured: "2026-07-13" }
    - { id: ferrari-legal, kind: license, url: "https://www.ferrari.com/en-US/legal", captured: "2026-07-13" }
    - { id: ferrari-about, kind: official-doc, url: "https://www.ferrari.com/en-EN/corporate/about-us", captured: "2026-07-13" }
    - { id: ferrari-history, kind: official-doc, url: "https://www.ferrari.com/en-EN/history", captured: "2026-07-13" }
    - { id: ferrari-design, kind: official-doc, url: "https://www.ferrari.com/en-EN/magazine/articles/new-language-of-ferrari-design", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &range { surface_id: car-range, source_id: car-range-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.on-primary": *range
    "tokens.typography.family.ui": *range
    "tokens.typography.family.chrome": *home
    "tokens.typography.nav.size": *home
    "tokens.typography.nav.weight": *home
    "tokens.typography.nav.lineHeight": *home
    "tokens.typography.nav.tracking": *home
    "tokens.typography.nav.use": *home
    "tokens.typography.primary-action.size": *range
    "tokens.typography.primary-action.weight": *range
    "tokens.typography.primary-action.lineHeight": *range
    "tokens.typography.primary-action.use": *range
    "tokens.typography.consent-action.size": *home
    "tokens.typography.consent-action.weight": *home
    "tokens.typography.consent-action.lineHeight": *home
    "tokens.typography.consent-action.tracking": *home
    "tokens.typography.consent-action.use": *home
    "tokens.spacing.nav-y": *home
    "tokens.spacing.consent-y": *home
    "tokens.spacing.primary-inset": *range
    "tokens.rounded.sharp": *range
    "tokens.rounded.consent": *home
    "tokens.components.racing-media-card.type": &formula1 { surface_id: formula1, source_id: formula1-live, method: computed-style, captured: "2026-07-13" }
    "tokens.components.racing-media-card.bg": *formula1
    "tokens.components.racing-media-card.fg": *formula1
    "tokens.components.racing-media-card.radius": *formula1
    "tokens.components.racing-media-card.shadow": *formula1
    "tokens.components.racing-media-card.use": *formula1
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Three supplied public Ferrari surfaces were reconciled. Marketing and racing web components are retained only at their observed selector/surface boundary; no authenticated product UI, responsive behavior, semantic status palette, or unobserved interaction variant is inferred."
  colors:
    primary: "#da291c"
    canvas: "#ffffff"
    foreground: "#181818"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Body-Font", chrome: "FerrariSans" }
    nav: { size: 12, weight: 400, lineHeight: 1.27, tracking: 1, use: "Observed public header item" }
    primary-action: { size: 16, weight: 400, lineHeight: 1.15, use: "Observed Ferrari-red Subscribe CTA" }
    consent-action: { size: 13.008, weight: 600, lineHeight: 1.2, tracking: 0.13008, use: "Observed OneTrust cookie-control action" }
  spacing: { nav-y: 5, consent-y: 12, primary-inset: 21 }
  rounded: { sharp: 0, consent: 2 }
  components:
    racing-media-card: { type: card, bg: "transparent", fg: "#ffffff", radius: "0px", shadow: "none", use: "Static Formula 1 media-card wrapper; surface-3::div.Card__wrapper__2HwxoSe5.Card__wrapper--visible__1LdTLCPj." }
  components_harvested: true
---

# Design System Inspiration of Ferrari

## 1. Visual Theme & Atmosphere

Ferrari builds road cars and competes in racing from Maranello; its official history frames that work as cars made to win both on track and road. The public web surfaces supplied for this review express that heritage as image-led brand and racing communication rather than an in-car, owner, or commerce application. Across the home, car-range, and Formula 1 pages, the interface mostly recedes into black, white, transparent layers, wide-tracked small navigation, and sharp controls, while a Ferrari-red `#da291c` Subscribe action appears on the observed product-range and racing surfaces. Ferrari’s own design writing describes Centro Stile’s continuing combination of art and engineering, a useful context for the deliberate, low-chrome presentation; it is context, not a substitute for a web token. The capture does not establish authenticated product UI, dealer tooling, configurator states, or native-app patterns.

- **Public-surface scope:** home, car range, and Formula 1 only; no account or checkout behavior is promoted.
- **Image-led contrast:** `#ffffff`, `#181818`, and transparent controls carry the observed chrome.
- **Measured accent:** `#da291c` is an observed 57px Subscribe CTA fill, not a universal semantic color.
- **Sharp geometry:** public primary and header controls resolve to 0px radius; cookie consent is a separate 2px utility treatment.

## 2. Color Palette & Roles

- **Ferrari-red action** (`#da291c`): observed background for the car-range and Formula 1 `BtnCta__button__w7eTRXBJ` Subscribe CTA.
- **Canvas / on-primary** (`#ffffff`): observed white surface and red-CTA foreground; it also appears as the header-control foreground on dark imagery.
- **Foreground** (`#181818`): observed text and border color on light public chrome.

The bundle also contains black text and border values, but it does not establish error, success, warning, link-hover, yellow heritage, or a general dark-surface role. Those are omitted rather than reconstructed from older snapshots or photography.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Ferrari’s official SF-24 article identifies Ferrari Sans as the marque’s official font for the race numbers. That establishes brand context, not a blanket UI role. |
| Live computed surface-use | `Body-Font` is loaded/high with 746 visible uses across all three supplied pages; it covers public navigation, CTA, card, badge, list, and text roles. `FerrariSans` is loaded/high with 32 visible home-surface uses. |
| Official distributed asset | First-party `Ferrari-SansRegular` and `Ferrari-SansMedium` WOFF/WOFF2 files corroborate the loaded FerrariSans family. |
| Declared-only | `Body-Font-Medium`, LF Maranello Body/Caption/Title, Noe Display, and Open Sans families were declared with zero visible captured use. They are not UI-family tokens. |
| Unresolved / license boundary | `Title-Font` was loaded for four Formula 1 headings but is an alias whose delivered sources include Ferrari Sans files; it is not promoted as a separate family. Ferrari’s Legal page does not grant a downstream web-font licence. Preserve metadata and omit a specimen when the font is unavailable; never substitute a system font as FerrariSans or Body-Font. |

| Role | Family | Size | Weight | Line height | Provenance |
|---|---|---:|---:|---:|---|
| Header item | Body-Font | 12px | 400 | 15.24px | `home::[data-omd-capture="1"]` |
| Red Subscribe CTA | Body-Font | 16px | 400 | 18.4px | `surface-2::[data-omd-capture="49"]` |
| Cookie Manage action | FerrariSans | 13.008px | 600 | 15.6096px | `home::[data-omd-capture="101"]` |

## 4. Component Stylings

All values below come from the supplied public-surface collector. It records `interactionCount: 0`; a focus snapshot is not evidence of a transition, menu, dialog flow, or unlisted variant.

### Subscribe CTA

**Ferrari-red public CTA**
- Background: `#da291c`
- Text: `#ffffff`
- Border: `0px solid #ffffff`
- Radius: `0px`
- Padding: `21px`
- Height: `57px`
- Font: `16px / 400 / Body-Font`
- Use: `surface-2::[data-omd-capture="49"]` on car range and its Formula 1 sibling `surface-3::[data-omd-capture="49"]`

### Header navigation item

**Light-on-image control**
- Background: transparent
- Text: `#ffffff`
- Border: `0px solid #ffffff`
- Radius: `0px`
- Padding: `5px 0px`
- Height: `25px`
- Font: `12px / 400 / Body-Font`
- Use: `home::[data-omd-capture="1"]`; the collector retained a focus snapshot but no changed focus value is promoted

### Cookie-consent action

**Manage Cookies utility**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #000000`
- Radius: `2px`
- Padding: `12px 10px`
- Height: `42px`
- Font: `13.008px / 600 / FerrariSans`
- Use: `home::[data-omd-capture="101"]` within the `ot-sdk-container` consent dialog; this is not a public product CTA

No generic card, input, carousel, menu, notification, tab, hover, pressed, disabled, or error variant is published here: the relevant component or state was not observed as a measured canonical field.

## 5. Layout Principles

The supplied desktop capture is `1440×900`. Its evidence supports full-width public surfaces, light-on-image header controls, and content whose visual emphasis comes from photography rather than a framed application shell. It does not establish a global grid, maximum width, breakpoint, carousel behavior, or a reusable card layout. Keep those fields absent until a captured surface measures them.

## 6. Depth & Elevation

The listed components have `boxShadow: none`; their observed depth comes from transparency, image contrast, and white or red fills rather than a reusable shadow token. No overlay, modal elevation, or dark-card token is promoted from the collector.

## 7. Do's and Don'ts

### Do

- Scope the sharp red Subscribe CTA to the observed public car-range/racing pattern.
- Keep the measured header item transparent, white, and widely tracked when it sits on dark imagery.
- Treat the 2px consent button as third-party utility chrome, not a Ferrari product-control default.
- Preserve FerrariSans and Body-Font metadata without silent font substitution.

### Don't

- Generalize `#da291c` into success, danger, alert, or every primary-action role.
- Turn the OneTrust cookie action into a product button pattern.
- Add hover, pressed, menu, carousel, or responsive rules not present in the supplied evidence.
- Use declared-only LF Maranello, Noe Display, or Open Sans faces as current Ferrari UI tokens.

## 8. Responsive Behavior

Only a `1440×900` desktop capture was supplied. Mobile breakpoints, navigation collapse, touch-target policy, image crops, and reduced-motion behavior were not measured and are therefore not specified.

## 9. Agent Prompt Guide

Use only the observed public-web boundary: “Create a sharp 57px Subscribe CTA with `#da291c` background, white 16px Body-Font text, 21px inset, and 0px radius.” For a light-on-image header control, use transparent background, white 12px Body-Font text, 5px vertical padding, and 1px tracking. Do not request an unverified Ferrari configurator, checkout, dashboard, alert, or component-state system from this reference.

## 10. Voice & Tone

Ferrari’s first-party corporate language connects passion, craftsmanship, innovation, exclusivity, performance, quality, and memorable client experiences. The public navigation and short action controls in the capture are much terser than that corporate narrative. Use concise discovery language on public editorial surfaces; do not fabricate customer-service, error, or transactional voice rules.

**First-party wording:** “The power of passion becomes the beauty of achievement.” — Ferrari Corporate, [About us](https://www.ferrari.com/en-EN/corporate/about-us).

## 11. Brand Narrative

Ferrari’s official corporate account begins in 1947, when the 125 S passed through the Maranello factory gates. Its History surface frames the continuing work as cars intended to win on track and road, while the corporate description connects the Prancing Horse with exclusivity, performance, quality, sporting success, innovation, technology, and driving pleasure. This is the product and category context for the public car-range and Formula 1 surfaces in this reference.

The company’s own design reporting adds a current evolution: Ferrari established Centro Stile in 2010 and describes its work as a close relationship between design and engineering, form and content. The concise public web shell should be read alongside that wider product story, not as proof that every Ferrari surface uses the same tokens or components. Sources: [Ferrari History](https://www.ferrari.com/en-EN/history), [Corporate About us](https://www.ferrari.com/en-EN/corporate/about-us), and [The New Language of Ferrari Design](https://www.ferrari.com/en-EN/magazine/articles/new-language-of-ferrari-design).

## 12. Principles

1. **Let the vehicle imagery carry the public-surface emphasis.** *UI implication:* retain the measured low-chrome, transparent header treatment rather than inventing application panels.
2. **Keep action color contextual.** *UI implication:* use the measured red only where the captured Subscribe CTA establishes it; do not infer semantic status colors.
3. **Keep public controls sharp.** *UI implication:* the observed header and Subscribe controls are 0px radius; cookie-consent chrome is a separate 2px utility exception.
4. **Separate related evidence domains.** *UI implication:* a marketing, racing, corporate, font-asset, or consent observation does not authorize an unobserved product component.

## 13. Personas

Ferrari’s official corporate material identifies clients as the recipients of its exclusive, authentic, and memorable experiences. No first-party research in this packet establishes demographics, jobs-to-be-done, purchase behavior, accessibility needs, or task flows for a detailed persona. [FILL IN: validated stakeholder research before adding user archetypes.]

## 14. States

The collector reports zero interaction events. Default public-control baselines and one header focus snapshot were captured, but empty, loading, success, failure, disabled, form validation, and skeleton states were not observed. No state treatment is invented here.

## 15. Motion & Easing

No duration, easing, autoplay, or reduced-motion rule was measured in the supplied capture. Do not infer a Ferrari motion system from editorial photography or the existence of racing content.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.ferrari.com/en-EN · https://www.ferrari.com/en-EN/auto/car-range · https://www.ferrari.com/en-EN/formula1 (supplied computed-style, FontFaceSet, and source-URL evidence).
**Tier 2 sources:** https://getdesign.md/ferrari · https://styles.refero.design/style/80164adf-a898-4f7c-bce7-12f3f62e1649 (cross-check only; Tier 1 wins recorded component conflicts).
**Conflicts unresolved:** none
