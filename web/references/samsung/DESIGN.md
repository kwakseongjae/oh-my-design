---
id: samsung
name: Samsung
display_name_kr: 삼성전자
country: KR
category: consumer-tech
homepage: "https://www.samsung.com/sec/"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: samsung
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Samsung One UI Design System
  url: "https://developer.samsung.com/one-ui"
  type: system
  description: Samsung's official platform design guidance. Its component and color rules are a separate evidence domain from the captured Samsung Korea public web surfaces.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.samsung.com/sec/", inspected: "2026-07-13" }
    - { id: ai-products, kind: public-product, url: "https://www.samsung.com/sec/ai-products/", inspected: "2026-07-13" }
    - { id: brand-identity, kind: official-doc, url: "https://www.samsung.com/sec/about-us/brand-identity/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.samsung.com/sec/", captured: "2026-07-13" }
    - { id: ai-live, kind: product-surface, url: "https://www.samsung.com/sec/ai-products/", captured: "2026-07-13" }
    - { id: brand-live, kind: product-surface, url: "https://www.samsung.com/sec/about-us/brand-identity/", captured: "2026-07-13" }
    - { id: one-ui-color, kind: official-doc, url: "https://developer.samsung.com/one-ui/color/system.html", captured: "2026-07-13" }
    - { id: samsungone-font, kind: official-doc, url: "https://developer.samsung.com/design-system/font", captured: "2026-07-13" }
    - { id: sharp-sans-brand, kind: official-doc, url: "https://www.samsung.com/bd/about-us/brand-identity/color-and-typo/", captured: "2026-07-13" }
    - { id: brand-story, kind: official-doc, url: "https://www.samsung.com/sec/about-us/brand-identity/brand-story/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.surface": &ai { surface_id: ai-products, source_id: ai-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.foreground": *ai
    "tokens.colors.muted": *home
    "tokens.colors.border": *home
    "tokens.colors.link": *home
    "tokens.colors.one-ui-primary": &oneui { surface_id: brand-identity, source_id: one-ui-color, method: official-doc, captured: "2026-07-13" }
    "tokens.typography.family.display": &sharp { surface_id: home, source_id: home-live, method: fontfaceset-and-computed-style, captured: "2026-07-13" }
    "tokens.typography.family.ui": &ui { surface_id: home, source_id: home-live, method: fontfaceset-and-computed-style, captured: "2026-07-13" }
    "tokens.typography.display.size": *sharp
    "tokens.typography.display.weight": *sharp
    "tokens.typography.display.lineHeight": *sharp
    "tokens.typography.display.use": *sharp
    "tokens.typography.body.size": *ai
    "tokens.typography.body.weight": *ai
    "tokens.typography.body.lineHeight": *ai
    "tokens.typography.body.use": *ai
    "tokens.typography.action.size": *home
    "tokens.typography.action.weight": *home
    "tokens.typography.action.lineHeight": *home
    "tokens.typography.action.use": *home
    "tokens.spacing.nav-inline": *home
    "tokens.spacing.action-inline": *home
    "tokens.spacing.card-inset": *ai
    "tokens.rounded.sharp": *ai
    "tokens.rounded.pill": *home
    "tokens.rounded.chip": *ai
    "tokens.shadow.flat": *ai
    "tokens.components.ai-product-tabs.type": *ai
    "tokens.components.ai-product-tabs.fg": *ai
    "tokens.components.ai-product-tabs.radius": *ai
    "tokens.components.ai-product-tabs.padding": *ai
    "tokens.components.ai-product-tabs.font": *ai
    "tokens.components.ai-product-tabs.states": *ai
    "tokens.components.ai-product-tabs.use": *ai
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    primary: "#000000"
    canvas: "#ffffff"
    surface: "#f7f7f7"
    foreground: "#000000"
    muted: "#707070"
    border: "#dddddd"
    link: "#007aff"
    one-ui-primary: "#0381fe"
  typography:
    family: { display: "Samsung Sharp Sans", ui: "SamsungOneKorean" }
    display: { size: 24, weight: 700, lineHeight: 32, use: "Observed product-card heading on the AI products surface" }
    body: { size: 16, weight: 400, lineHeight: 21.2798, use: "Observed product-card body on the AI products surface" }
    action: { size: 14, weight: 700, lineHeight: 19, use: "Observed contained CTA label on the Samsung Korea homepage" }
  spacing: { nav-inline: 12, action-inline: 24, card-inset: 32 }
  rounded: { sharp: 0, pill: 20, chip: 40 }
  shadow:
    flat: "none"
  components:
    ai-product-tabs: { type: tab, fg: "#000000", radius: 0, padding: "4px 0px", font: "18px/700 SamsungOneKorean", states: "selected / tab-selected observed", use: "AI products `tab__item-title`; selector surface-2::[data-omd-capture=\"25\"]" }
  components_harvested: true
---

# Design System Inspiration of Samsung

## 1. Visual Theme & Atmosphere

Samsung Electronics presents consumer devices, services, and its Galaxy ecosystem across a broad public web estate. Its Korean public commerce and AI-product pages use a quiet product frame: white or pale-gray surfaces, black typography, contained black calls to action, and large device imagery. Samsung’s official brand story frames this product work within human-driven innovation and describes its expression as bold, genuine, contemporary, and playful; the captured commerce treatment is one restrained application of that wider identity rather than a substitute for it. The official One UI system is a separate platform domain, designed for comfortable and responsive experiences across Galaxy devices. This reference therefore preserves the observed public-web grammar while keeping One UI’s documented blue and component guidance separate from web-commerce claims. [Samsung brand story](https://www.samsung.com/sec/about-us/brand-identity/brand-story/) · [One UI overview](https://developer.samsung.com/one-ui/index.html)

The supplied 2026-07-13 evidence covers a Korean homepage, an AI-products page, and the Korean brand-identity page at one desktop viewport. The homepage provides the measured contained and outlined CTA patterns; the AI page provides the product-card and selected-tab patterns; the brand-identity page is retained as an official brand/documentation surface. It does not cover checkout, sign-in, native Galaxy apps, or a general Samsung component library.

**Key characteristics:**
- Black `#000000` contained CTA and primary text on the captured Korean public web surfaces
- White `#ffffff` canvas and `#f7f7f7` product/search surface, with no representative box shadow
- Samsung Sharp Sans for observed display headings and SamsungOneKorean for observed Korean UI/body text
- 20px contained-CTA and AI-product media-card corners; 0px selected-tab title treatment
- One UI blue `#0381fe` is an official mobile-system token, not a substitute for the captured commerce CTA

## 2. Color Palette & Roles

### Captured Korean public web surfaces
- **Primary action and foreground** (`#000000`): observed on the homepage contained CTA and across the AI-product card/title treatments.
- **Canvas** (`#ffffff`): observed homepage and product-card background.
- **Product/search surface** (`#f7f7f7`): observed on the AI page’s pressed search control and on official/commerce surface treatments.
- **Muted text** (`#707070`): repeated computed text color in the supplied capture; retain for secondary content only.
- **Border** (`#dddddd`): observed on homepage carousel-control chrome; not promoted as a universal product-card border.
- **Link** (`#007aff`): observed homepage text/link color; it is separate from the black contained CTA.

### One UI documentation boundary
- **One UI primary** (`#0381fe`): Samsung’s official One UI color guidance assigns it to floating action buttons and sliders. It belongs to the platform design-system source, not to the captured Korean commerce CTA. [Color system and usage](https://developer.samsung.com/one-ui/color/system.html)

## 3. Typography Rules

### Evidence classes

**Official product-use and brand context.** Samsung’s design-system font page describes SamsungOne as the family that gives its products a consistent voice, with localized fonts supporting a universal Samsung experience. Samsung’s official brand-identity typography page separately identifies Samsung Sharp Sans Bold and Medium as brand type specimens. Those pages establish family and brand context; they do not turn every official face into a public-web UI token. [Samsung fonts](https://developer.samsung.com/design-system/font) · [Samsung Sharp Sans specimens](https://www.samsung.com/bd/about-us/brand-identity/color-and-typo/)

**Live computed surface-use.** The supplied capture records `SamsungOneKorean` as loaded/high with 1,297 visible uses across body, button, menu, tab, card, and heading roles, with `@font-face` sources on Samsung domains. `SamsungSharpSans` is likewise loaded/high with 76 visible heading/text uses and Samsung-hosted FontFace sources. On the AI-products page, a repeated heading is 24px/700/32px Samsung Sharp Sans; a repeated product-card body is approximately 16px/400/21.2798px SamsungOneKorean. The homepage contained CTA is 14px/700/19px SamsungOneKorean.

**Official distributed brand asset / license boundary.** Samsung Design publishes SamsungOne specimens and a PDF download, but the first-party sources reviewed here do not provide a transferable public font-license grant. Keep official specimen and history material as context; do not infer permission to redistribute the webfont files or substitute a system font. [SamsungOne](https://design.samsung.com/global/contents/samsungone/index.html)

**Declared-only.** The artifact found Samsung Korea Sans, SamsungOne, SamsungSharpGraphic, SamsungSSBody, SamsungSSHead, Samsung Sharp Sans mixed/normal, NanumBarunBold, and several icon faces declared with `@font-face` but without visible computed use. They remain declared assets, not UI-family tokens.

**System/unresolved.** Dotum, Apple SD Gothic Neo, Arial, and `sans-serif` occur only as fallbacks in the captured computed stacks. No runtime availability authorizes their use as Samsung substitutes. Additional locales, native One UI font behavior, and all uncaptured pages remain unresolved.

## 4. Component Stylings

### Homepage calls to action

**Contained CTA — Korean homepage**
- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#000000`
- Radius: 20px
- Padding: 10px 24px 9px
- Height: 40px
- Font: 14px / 700 / SamsungOneKorean
- Use: `home::[data-omd-capture="26"]`, class `cta cta-ntrns-fild`; 36 occurrences on the captured homepage.

**Outlined CTA — Korean homepage**
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 20px
- Padding: 10px 24px 9px
- Height: 40px
- Font: 14px / 700 / SamsungOneKorean
- Use: `home::[data-omd-capture="20"]`, class `cta cta-outl`; six homepage occurrences. Its computed background is transparent, so no white fill is asserted.

### AI-product content

**Product media card — AI products**
- Background: `#ffffff`
- Radius: 20px
- Use: `surface-2::div`, class `showcase-card-tab-card__img-wrap`; a 330px-square observed media wrapper. The surrounding card is not asserted as a universal commerce-card pattern.

**Selected product tab title — AI products**
- Text: `#000000`
- Radius: 0px
- Padding: 4px 0px
- Font: 18px / 700 / SamsungOneKorean
- Use: `surface-2::[data-omd-capture="25"]`, class `tab__item-title`.
- Selected: `selected` and `tab-selected` were observed by three collector tab interactions. No selected underline, panel geometry, or unmeasured color is inferred.

### Observed state boundaries

The capture records a pressed underlined CTA on the homepage, pressed search controls on the AI and brand-identity surfaces, disabled carousel arrows on the homepage, three selected-tab interactions on the AI-products surface, and an expanded/menu-open brand-identity menu. Only the selected product-tab state has enough matching component provenance to be represented in the machine-readable component token. No generic hover, focus, error, dialog, toast, or checkout state is asserted.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.samsung.com/sec/, https://www.samsung.com/sec/ai-products/, https://www.samsung.com/sec/about-us/brand-identity/, https://developer.samsung.com/one-ui/color/system.html, https://developer.samsung.com/design-system/font
**Tier 2 sources:** https://getdesign.md/samsung and https://styles.refero.design/?q=samsung were both attempted through built-in web retrieval; both returned an internal error, so neither supplied a value or an absence determination.
**Resolution note:** The prior universal e-commerce filter/input/card/shadow/state rules were removed because this packet did not observe their matching current component provenance. One UI blue remains documentation-only rather than a commerce CTA token.
**Conflicts unresolved:** none

## 5. Layout Principles

The one captured desktop viewport repeatedly exposes 12px navigation insets, 24px horizontal CTA padding, and a 32px product-card text inset. Treat these as local, observed spacing values rather than a complete Samsung grid scale. The capture does not compare breakpoints, measure a checkout layout, or establish a universal product-listing grid.

## 6. Depth & Elevation

Representative contained CTAs, AI-product cards, tabs, and menu structures in the artifact report `box-shadow: none`. Hierarchy in these observed surfaces comes from product imagery, white versus `#f7f7f7` planes, typography, and borders. No modal, tooltip, or floating-panel elevation is claimed.

## 7. Do's and Don'ts

### Do
- Use the contained homepage CTA only with the measured black/white, 20px-corner, 40px-high treatment.
- Keep SamsungOneKorean and Samsung Sharp Sans tied to their recorded live-use roles and loaded FontFace evidence.
- Treat the AI-product selected tab as its own 18px/700, 0px-radius pattern with the observed selected state.
- Keep One UI documentation values visibly separate from Korean public-commerce measurements.

### Don't
- Do not promote declared-only faces or system fallbacks as loaded Samsung UI fonts.
- Do not apply One UI `#0381fe` as a replacement for the captured black public-web CTA.
- Do not infer a product-card shadow, checkout field, generic filter control, or error state from unobserved variants.
- Do not treat the brand-identity documentation page as native Galaxy-app evidence.

## 8. Responsive Behavior

No viewport comparison was included in the supplied artifact. The values above describe the captured desktop surfaces only; no Samsung-specific mobile navigation, grid collapse, touch target, or breakpoint geometry is asserted.

## 9. Agent Prompt Guide

### Quick reference
- Homepage contained CTA: `#000000` background, `#ffffff` text, 1px black border, 20px radius, 10px 24px 9px padding, 40px height, SamsungOneKorean 14px/700.
- AI-product selected tab: black 18px/700 SamsungOneKorean text, 4px 0px padding, sharp corners; selected/tab-selected is observed.
- AI-product media wrapper: white, 20px radius, no observed shadow.

### Boundary-aware prompt
- "Create a Korean public-web CTA using Samsung’s captured homepage treatment: black background, white text, 20px radius, 40px height, 10px 24px 9px padding, and SamsungOneKorean 14px/700. Do not use One UI blue or infer hover/focus values."

## 10. Voice & Tone

Samsung’s official brand story calls its expression bold, genuine, contemporary, and playful. On the captured Korean public surfaces, that broader tone becomes direct category and action language rather than a claim about every channel or locale. Use concise, specific labels that name the product or action; do not invent marketing superlatives, price claims, or product benefits. [Samsung brand story](https://www.samsung.com/sec/about-us/brand-identity/brand-story/)

## 11. Brand Narrative

Samsung’s official Korean brand story dates the company’s story to 1969 and states a purpose of creating human-driven innovations that overcome barriers for a better world. It also describes people and their concerns as central to what Samsung creates, and names values around people, excellence, change, integrity, and co-prosperity. This provides context for the consumer-device and service ecosystem; it does not prove a specific public-web token. [Samsung brand story](https://www.samsung.com/sec/about-us/brand-identity/brand-story/)

The current design expression spans more than the captured commerce pages. Samsung’s brand material treats color, typography, logo, and sound as distinct visual/experiential assets, while One UI documents a platform system for phones, tablets, wearables, earbuds, and PCs. This reference retains those domains separately so a marketplace CTA is not presented as a native One UI control. [Brand identity](https://www.samsung.com/sec/about-us/brand-identity/) · [One UI overview](https://developer.samsung.com/one-ui/index.html)

## 12. Principles

1. **Put people and tasks first.** Samsung’s brand story and One UI guidance both center human experience and focused tasks. *UI implication:* state the action clearly and avoid decorative flow interruptions.
2. **Use a connected typographic voice.** Samsung positions SamsungOne as a localized, universal family. *UI implication:* preserve the observed SamsungOneKorean UI role; do not substitute a system face as if it were SamsungOne.
3. **Keep surface domains distinct.** The public Korean web and One UI are both official but have different evidence and component contexts. *UI implication:* use `#0381fe` only when implementing the documented One UI platform context, not as a generic Samsung-commerce action color.
4. **Retain observed component boundaries.** The packet has exact evidence for CTA, media-card, and selected-tab treatments only. *UI implication:* leave unobserved variants absent instead of filling them from a generic Samsung pattern.

## 13. Personas

No first-party audience research suitable for named personas was collected in this packet. Do not invent demographic personas.

- **[FILL IN: validated Samsung Korea public-web audience]** — add only with a Samsung first-party audience or product-research source.
- **[FILL IN: validated Galaxy platform audience]** — add only with a Samsung first-party audience or product-research source.

## 14. States

| State | Captured evidence boundary |
|---|---|
| Selected tab | AI-products `tab__item-title` records `selected` and `tab-selected`; color/padding/type are retained in §4. |
| Pressed text CTA | Homepage underlined CTA records `pressed`; it is a distinct text-link treatment, not a primary-CTA state value. |
| Pressed search control | AI-products and brand-identity search controls record `pressed`; their values are not promoted into a generic search component. |
| Disabled carousel arrow | Homepage carousel arrows record `disabled`; no opacity or disabled-button rule is asserted. |
| Expanded menu | Brand-identity navigation records `expanded` / `menu-open`; panel geometry and shadow were not promoted. |

No current capture evidence supports universal loading, empty, form-error, success, skeleton, or modal-state rules.

## 15. Motion & Easing

The artifact records state and interaction kinds, not timing curves or transition durations. One UI documentation includes a separate motion section, but no motion token is promoted here without a matching captured surface/value. Preserve reduced-motion and accessibility requirements in an implementation without presenting them as measured Samsung commerce motion.
