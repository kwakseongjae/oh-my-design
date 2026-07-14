---
id: hyundai
name: Hyundai
display_name_kr: 현대자동차
country: KR
category: automotive
homepage: "https://www.hyundai.com/kr/ko/e"
primary_color: "#002c5f"
logo:
  type: simpleicons
  slug: hyundai
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product, url: "https://www.hyundai.com/kr/ko/e", inspected: "2026-07-13" }
    - { id: vehicles, kind: product, url: "https://www.hyundai.com/kr/ko/e/vehicles", inspected: "2026-07-13" }
    - { id: ioniq6, kind: product, url: "https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq-6/intro", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.hyundai.com/kr/ko/e", captured: "2026-07-13" }
    - { id: vehicles-live, kind: product-surface, url: "https://www.hyundai.com/kr/ko/e/vehicles", captured: "2026-07-13" }
    - { id: ioniq6-live, kind: product-surface, url: "https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq-6/intro", captured: "2026-07-13" }
    - { id: design, kind: official-doc, url: "https://www.hyundai.com/worldwide/en/company/innovation/design", captured: "2026-07-13" }
    - { id: typeface, kind: official-doc, url: "https://www.hyundai.com/worldwide/en/newsroom/detail/0000000287", captured: "2026-07-13" }
    - { id: history, kind: official-doc, url: "https://www.hyundai.com/worldwide/en/footer/corporate/history/1967-2000", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.accent-cyan": &live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.accent-teal": *live
    "tokens.colors.footer": *live
    "tokens.colors.ink": *live
    "tokens.colors.muted": *live
    "tokens.colors.on-primary": *live
    "tokens.colors.primary": *live
    "tokens.colors.utility": *live
    "tokens.components.selected-carousel-indicator.active": *live
    "tokens.components.selected-carousel-indicator.fg": *live
    "tokens.components.selected-carousel-indicator.radius": *live
    "tokens.components.selected-carousel-indicator.type": *live
    "tokens.components.selected-carousel-indicator.use": *live
    "tokens.rounded.none": *live
    "tokens.rounded.pager": *live
    "tokens.shadow.chatbot": *live
    "tokens.typography.action.lineHeight": *live
    "tokens.typography.action.size": *live
    "tokens.typography.action.tracking": *live
    "tokens.typography.action.use": *live
    "tokens.typography.action.weight": *live
    "tokens.typography.body.lineHeight": *live
    "tokens.typography.body.size": *live
    "tokens.typography.body.use": *live
    "tokens.typography.body.weight": *live
    "tokens.typography.display-h2.lineHeight": *live
    "tokens.typography.display-h2.size": *live
    "tokens.typography.display-h2.tracking": *live
    "tokens.typography.display-h2.use": *live
    "tokens.typography.display-h2.weight": *live
    "tokens.typography.family.body": *live
    "tokens.typography.family.display": *live
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  note: "Only values observed in the supplied three-surface KR product capture are tokenized. HyundaiSansTextKR and HyundaiSansHeadKR have visible computed use backed by loaded FontFaceSet entries. HyundaiSansHeadKRR and HyundaiSansTextKRR are loaded regional variants; Arial is system chrome and element-icons is declared-only."
  colors:
    primary: "#002c5f"
    accent-teal: "#007fa8"
    accent-cyan: "#00aad2"
    ink: "#000000"
    on-primary: "#ffffff"
    muted: "#999999"
    utility: "#444444"
    footer: "#1c1b1b"
  typography:
    family: { display: "HyundaiSansHeadKR", body: "HyundaiSansTextKR" }
    display-h2: { size: 44, weight: 400, lineHeight: 1.32, tracking: -0.4, use: "Observed h2 on the KR product home surface" }
    body: { size: 16, weight: 400, lineHeight: 1.15, use: "Observed product-surface text" }
    action: { size: 16, weight: 500, lineHeight: 1.15, tracking: -0.4, use: "Observed navy vehicle action" }
  spacing: {}
  rounded: { none: 0, pager: 6 }
  shadow: { chatbot: "rgba(0,0,0,0.15) 0px 0px 20px 0px" }
  components:
    selected-carousel-indicator: { type: tab, fg: "#000000", radius: "0px", active: true, use: "Selected shell observed on the home surface" }
---

# Design System Inspiration of Hyundai

## 1. Visual Theme & Atmosphere

Founded in 1967, Hyundai Motor Company now presents itself as a mobility company as well as an automaker, with its official history tracing the shift from the Ulsan assembly plant to current IONIQ electric vehicles. On the captured Korean product surfaces, that broad automotive identity resolves into a restrained interface: black and white text, a deep navy action color (`#002c5f`), and loaded HyundaiSans families. The documented vehicle-design direction, Sensuous Sportiness, has been Hyundai's design philosophy since 2018; it connects emotional appeal with structure, proportion, styling, and technology. This reference keeps that official vehicle-design context separate from web claims: it describes the captured KR product UI, not a universal Hyundai design system.

The product capture favors flat, rectangular actions for its repeated navy vehicle CTA, but it is not a zero-radius system: the selected carousel control has a 6px radius and the chatbot is circular. Deep navy (`#002c5f`) is the repeated product action color; teal (`#007fa8`) appears in captured carousel controls, while cyan (`#00aad2`) appears on the chatbot. Black (`#000000`), white (`#ffffff`), muted gray (`#999999`), utility gray (`#444444`), and the dark footer (`#1c1b1b`) are also directly observed.

## 2. Color Palette & Roles

### Product-surface colors

- **Primary navy** (`#002c5f`): observed filled vehicle action on both the catalogue and IONIQ 6 product surfaces.
- **Teal** (`#007fa8`): observed on home-surface carousel controls; no broader semantic role is inferred.
- **Cyan** (`#00aad2`): observed as the home-surface chatbot button background.
- **Ink** (`#000000`) and **white** (`#ffffff`): repeatedly observed text and border values across the three product surfaces.
- **Muted gray** (`#999999`) and **utility gray** (`#444444`): observed in footer/list and inline external-link chrome respectively.
- **Footer dark** (`#1c1b1b`): observed on the Family Site control in the KR product footer.

## 3. Typography Rules

### Evidence classes

- **Live computed product use, FontFaceSet-backed:** `HyundaiSansTextKR` (287 observed uses) and `HyundaiSansHeadKR` (84) are visible computed families with matching loaded FontFaceSet entries in the supplied KR product capture. `HyundaiSansHeadKRR` (43) and `HyundaiSansTextKRR` (35) are likewise loaded and visibly used variants.
- **Official brand/type context:** Hyundai's 2023 official newsroom describes Hyundai Sans UI as a next-generation mobility UX typeface that inherits the formative characteristics of Hyundai Sans. That statement concerns the ccNC infotainment context; it does not establish Hyundai Sans UI as the web product-surface family.
- **System / declared-only:** Arial is a system family observed in utility chrome. `element-icons` is declared in the capture but has no visible usage. Neither is promoted to the UI family token.
- **License and distribution boundary:** the supplied capture records no font source URLs, and this review found no public first-party web-font licence for the KR files. The loaded families may be described by name and observed metrics, but no downloadable asset or reuse licence is asserted.

### Observed hierarchy

| Role | Family | Size | Weight | Line Height | Tracking | Surface |
|------|--------|------|--------|-------------|----------|---------|
| H2 | HyundaiSansHeadKR | 44px | 400 | 58px | -0.4px | home |
| Body/list | HyundaiSansTextKR | 16px | 400 | 18.4px | normal | all three product surfaces |
| Vehicle action | HyundaiSansTextKR | 16px | 500 | 18.4px | -0.4px | catalogue and IONIQ 6 |
| Primary nav trigger | HyundaiSansHeadKRR | 16px | 400 | 30px | -0.4px | all three product surfaces |
| Inline external link | HyundaiSansHeadKR | 14px | 500 | 14px | -0.4px | all three product surfaces |

## 4. Component Stylings

Only the variants below are retained because the supplied collector evidence records their selector, surface, and computed values. The capture has `interactionCount: 0`; hover, focus, pressed, disabled, menu-open, and validation states are not asserted.

### Vehicle action

**Navy filled action**
- Background: `#002c5f`
- Text: `#ffffff`
- Radius: 0px
- Font: 16px / 500 / HyundaiSansTextKR
- Use: `surface-2::[data-omd-capture="15"]`, class `btn nuxt-link-active`; observed on `surface-2` (vehicle catalogue) and `surface-3` (IONIQ 6 intro), 2 occurrences, no state captured.

### Primary navigation

**Top-level trigger**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Font: 16px / 400 / HyundaiSansHeadKRR
- Use: `home::[data-omd-capture="2"]`, class `lnb_depth0_btn`; observed on home, vehicle catalogue, and IONIQ 6 intro, 15 occurrences, no state captured.

### Inline external link

**Small external link**
- Background: transparent
- Text: `#444444`
- Radius: 0px
- Padding: 10px 0px
- Font: 14px / 500 / HyundaiSansHeadKR
- Use: `home::[data-omd-capture="128"]`, class `btn btn-external-sm in-phrase`; observed on all three product surfaces, 9 occurrences, no state captured.

### Carousel pagination

**Teal pager control**
- Background: `#007fa8`
- Radius: 6px
- Use: `home::[data-omd-capture="75"]`, class `el-carousel__button`; observed on home only, 2 occurrences, no state captured.

**Selected indicator shell**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 0px 4px
- Font: 16px / 400 / HyundaiSansTextKR
- Use: `home::li`, class `el-carousel__indicator el-carousel__indicator--horizontal is-active`; observed on home only, 13 occurrences, `selected` is the sole captured state. The child visual control was not separately measured.

### Footer utility control

**Family Site control**
- Background: `#1c1b1b`
- Text: `#999999`
- Border: 1px solid `#676767`
- Radius: 0px
- Padding: 0px 13px
- Use: `home::[data-omd-capture="146"]`; observed on all three product surfaces, 3 occurrences. It uses system Arial and is retained as footer utility chrome, not a HyundaiSans UI token.

### Chatbot trigger

**Circular chatbot button**
- Background: `#00aad2`
- Radius: 100%
- Shadow: rgba(0,0,0,0.15) 0px 0px 20px 0px
- Font: 16px / 500 / HyundaiSansTextKR
- Use: `home::[data-omd-capture="122"]`, class `btn ibtn chatbot`; observed once on the home product surface, no state captured. This is single-surface, low-confidence component evidence and does not establish a general floating-action pattern.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.hyundai.com/kr/ko/e; https://www.hyundai.com/kr/ko/e/vehicles; https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq-6/intro; https://www.hyundai.com/worldwide/en/company/innovation/design; https://www.hyundai.com/worldwide/en/newsroom/detail/0000000287; https://www.hyundai.com/worldwide/en/footer/corporate/history/1967-2000

**Tier 2 sources:** https://getdesign.md/hyundai — attempted 2026-07-13, web fetch returned an internal error; https://styles.refero.design/?q=hyundai — attempted 2026-07-13, web fetch returned an internal error.
**Conflicts unresolved:** none

Tier 2 data was unavailable, so it was not used to establish any token or component value.

## 5. Layout Principles

The supplied evidence establishes three desktop product routes, but it does not contain a responsive breakpoint or grid measurement. The catalogue and IONIQ 6 routes share the navy filled vehicle action; no universal card, spacing scale, or layout grid is promoted from the capture.

## 6. Depth & Elevation

The repeated captured components in §4 have `box-shadow: none`, except the single home-surface chatbot trigger, which has `rgba(0,0,0,0.15) 0px 0px 20px 0px`. No broader elevation scale is asserted.

## 7. Do's and Don'ts

### Do

- Use the observed navy vehicle action only when the same product action pattern is intended.
- Use the loaded HyundaiSans KR families only where licensed assets are provided by Hyundai.
- Preserve a component's surface and state boundary when reusing this reference.

### Don't

- Treat teal, cyan, or the circular chatbot as a general-purpose accent or floating-action system.
- Substitute a system font while labelling it Hyundai Sans.
- Invent hover, focus, disabled, form-error, or responsive variants from this capture.

## 8. Responsive Behavior

No responsive viewport comparison was supplied. Breakpoints, touch-target rules, and collapse behavior remain unresolved.

## 9. Agent Prompt Guide

Apply only source-bound values: a navy vehicle action (`#002c5f`, white text, 0px radius, 16px/500 HyundaiSansTextKR) is supported on the two vehicle product surfaces. Do not derive card, input, error-state, or motion specifications from this reference.

## 10. Voice & Tone

Official corporate language frames Hyundai around “Progress for Humanity,” while the official design material describes Sensuous Sportiness as combining emotional appeal with structure, proportion, styling, and technology. The supplied capture does not preserve reliable product-copy text, so no verbatim voice samples or prescriptive copy rules are claimed here.

## 11. Brand Narrative

Hyundai Motor Company was incorporated in 1967; its official history records the Ulsan assembly plant in 1968, the Pony launch in 1976, and its present framing as a mobility solution provider. The 2024 milestone account connects that history to the current dedicated IONIQ electric-vehicle lineup.

Since 2018, Hyundai has described Sensuous Sportiness as the evolution of its design identity. Its official design page names structure, proportion, and styling, while the 2023 newsroom account separates vehicle infotainment work: the Seon design system and Hyundai Sans UI are an in-vehicle ccNC context, not proof of the KR public-web component rules above.

## 12. Principles

1. **Progress for Humanity.** Hyundai's official materials frame this as a mobility and sustainability vision. *UI implication:* none is inferred beyond the recorded product surfaces.
2. **Sensuous Sportiness.** The official vehicle-design philosophy combines emotional appeal with structure, proportion, styling, and technology. *UI implication:* do not turn that vehicle philosophy into unsupported web tokens.
3. **Legibility in mobility UX.** Hyundai's official Hyundai Sans UI description stresses legibility and hierarchy for driving environments. *UI implication:* this supports the typeface's brand context, not a substitution or web licence.

## 13. Personas

[FILL IN] No first-party audience segmentation with enough detail to define personas was collected in this reverify packet. Do not use synthetic personas as evidence for Hyundai product decisions.

## 14. States

No component interaction state was captured. The collector reports `interactionCount: 0` and only the carousel indicator shell carries an observed `selected` state. Empty, loading, error, success, skeleton, disabled, hover, focus, and pressed treatments are unresolved.

## 15. Motion & Easing

No duration, easing, animation, or reduced-motion behavior was captured. Motion tokens and rules are unresolved.
