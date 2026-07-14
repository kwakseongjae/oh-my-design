---
id: hashicorp
name: Hashicorp
country: US
category: backend-devops
homepage: "https://www.hashicorp.com"
primary_color: "#1060ff"
logo:
  type: simpleicons
  slug: hashicorp
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Helios
  url: "https://helios.hashicorp.design"
  type: system
  description: HashiCorp's public design system for product foundations, content, components, and patterns.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.hashicorp.com/ko", inspected: "2026-07-13" }
    - { id: pricing, kind: pricing, url: "https://www.hashicorp.com/ko/pricing", inspected: "2026-07-13" }
    - { id: boundary, kind: product-marketing, url: "https://www.hashicorp.com/ko/products/boundary", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.hashicorp.com/ko", captured: "2026-07-13" }
    - { id: pricing-live, kind: product-surface, url: "https://www.hashicorp.com/ko/pricing", captured: "2026-07-13" }
    - { id: boundary-live, kind: product-surface, url: "https://www.hashicorp.com/ko/products/boundary", captured: "2026-07-13" }
    - { id: helios, kind: official-doc, url: "https://helios.hashicorp.design/", captured: "2026-07-13" }
    - { id: font-announcement, kind: official-doc, url: "https://www.hashicorp.com/en/blog/introducing-hashicorp-sans", captured: "2026-07-13" }
    - { id: typography-guideline, kind: brand-asset, url: "https://www.hashicorp.com/en/brand/hcp-product-typography", captured: "2026-07-13" }
    - { id: terms, kind: license, url: "https://www.hashicorp.com/terms-of-service", captured: "2026-07-13" }
    - { id: about, kind: official-doc, url: "https://www.hashicorp.com/en/about", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.boundary": &boundary { surface_id: boundary, source_id: boundary-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.foreground-dark": *home
    "tokens.colors.hairline": *home
    "tokens.colors.muted": *home
    "tokens.colors.on-dark": *home
    "tokens.colors.on-primary": *home
    "tokens.colors.primary": *home
    "tokens.colors.primary-border": *home
    "tokens.colors.primary-bright": &pricing { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.surface": *home
    "tokens.colors.surface-dark": *home
    "tokens.colors.surface-deep": *home
    "tokens.colors.surface-muted": *home
    "tokens.colors.terraform": *pricing
    "tokens.components.card.bg": *home
    "tokens.components.card.fg": *home
    "tokens.components.card.radius": *home
    "tokens.components.card.type": *home
    "tokens.components.card.use": *home
    "tokens.rounded.card": *home
    "tokens.rounded.control": *home
    "tokens.rounded.nav": *home
    "tokens.rounded.sm": *home
    "tokens.rounded.square": *home
    "tokens.shadow.control": *home
    "tokens.spacing.base": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.md": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.xl": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.xxl": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.use": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.button.lineHeight": *home
    "tokens.typography.button.size": *home
    "tokens.typography.button.use": *home
    "tokens.typography.button.weight": *home
    "tokens.typography.display-hero.lineHeight": *home
    "tokens.typography.display-hero.size": *home
    "tokens.typography.display-hero.use": *home
    "tokens.typography.display-hero.weight": *home
    "tokens.typography.family.display": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.heading.lineHeight": *home
    "tokens.typography.heading.size": *home
    "tokens.typography.heading.use": *home
    "tokens.typography.heading.weight": *home
    "tokens.typography.label.lineHeight": *boundary
    "tokens.typography.label.size": *boundary
    "tokens.typography.label.tracking": *boundary
    "tokens.typography.label.use": *boundary
    "tokens.typography.label.weight": *boundary
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only values observed in the supplied three-route capture are machine tokens; HashiCorp Sans is a loaded display family, while controls and body text use system stacks."
  colors:
    primary: "#1060ff"
    primary-border: "#0c56e9"
    primary-bright: "#2b89ff"
    canvas: "#ffffff"
    surface: "#fafafa"
    surface-muted: "#f1f2f3"
    surface-dark: "#15181e"
    surface-deep: "#0d0e12"
    foreground: "#3b3d45"
    foreground-dark: "#d5d7db"
    on-primary: "#ffffff"
    on-dark: "#efeff1"
    muted: "#656a76"
    hairline: "#b2b6bd"
    terraform: "#7b42bc"
    boundary: "#f24c53"
  typography:
    family: { ui: "system-ui", display: "HashiCorp Sans" }
    display-hero: { size: 82, weight: 600, lineHeight: 1.17, use: "Loaded HashiCorp Sans H1 on captured public surfaces" }
    heading: { size: 52, weight: 600, lineHeight: 1.19, use: "Loaded HashiCorp Sans H2 on captured public surfaces" }
    body: { size: 16, weight: 400, lineHeight: 1.63, use: "Computed system-ui reading text" }
    button: { size: 16, weight: 500, lineHeight: 1.69, use: "Computed system-ui primary and secondary control label" }
    label: { size: 13, weight: 600, lineHeight: 1.69, tracking: 1.3, use: "Loaded HashiCorp Sans eyebrow observed on Boundary" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { square: 0, sm: 2, nav: 4, control: 5, card: 6 }
  shadow:
    control: "rgba(101,104,118,0.05) 0px 1px 1px, rgba(101,104,118,0.05) 0px 2px 2px"
  components:
    card: { type: card, bg: "#ffffff", fg: "#3b3d45", radius: 6, use: "Home content card with a 1px rgba(101,104,118,0.2) outline shadow" }
  components_harvested: true
---

# Design System Inspiration of HashiCorp

## 1. Visual Theme & Atmosphere

HashiCorp, now an IBM company, builds infrastructure and security software for multi-cloud and hybrid environments. Its current public expression puts a sober operational interface around that mission: white and near-white information surfaces sit beside deep charcoal sections, with blue as the shared action color and named product routes able to introduce their own accent. The 2024 Infrastructure Cloud brand launch also introduced HashiCorp Sans, a custom display typeface that ties the logotype and headlines together. In the captured public routes, that mix produces a clear division of labor: HashiCorp Sans carries large headings and eyebrow labels; system stacks carry reading text, navigation, controls, and cards.

The raw capture covers three public-facing domains within the company site, not a signed-in application: `/ko` is corporate marketing, `/ko/pricing` is commercial/pricing marketing, and `/ko/products/boundary` is a Boundary product-marketing route. No developer documentation chrome or authenticated product UI was captured, so this reference does not promote those domains into the shared token set. Helios is documented separately by HashiCorp as the public product design system.

**Key Characteristics:**
- White, near-white, deep-charcoal, and near-black surfaces are all observed in the capture
- Shared actions use `#1060ff`; a Terraform-labelled control and a Boundary-labelled control use their observed route-specific colors
- Loaded HashiCorp Sans appears in headings and a Boundary eyebrow; system-ui dominates visible UI text
- Controls use small 4–5px corners; the captured home card uses 6px

## 2. Color Palette & Roles

### Shared live surfaces
- **Shared primary** (`#1060ff`): blue primary CTA background, with observed border `#0c56e9`
- **Bright blue** (`#2b89ff`): selected pricing-tab foreground
- **Canvas** (`#ffffff`): navigation and light card background
- **Secondary surface** (`#fafafa`): secondary CTA background
- **Muted surface** (`#f1f2f3`): observed badge and alert background
- **Deep surfaces** (`#15181e`, `#0d0e12`): dark toggle and dark pricing-card/input backgrounds
- **Light foreground** (`#3b3d45`): secondary CTA, navigation, and light-card text
- **Dark-surface foreground** (`#d5d7db`, `#efeff1`): dark-route text and dark input text
- **Muted text** (`#656a76`) and **hairline** (`#b2b6bd`): observed supporting text and borders

### Route-specific live variants
- **Terraform** (`#7b42bc`): one `color-terraform` CTA observed on `/ko/pricing`
- **Boundary** (`#f24c53`): one `color-boundary` CTA observed on `/ko/products/boundary`

No other product-color variant is included: it was not present in the supplied capture.

## 3. Typography Rules

### Evidence classes

- **Official brand/product use:** HashiCorp’s 2024 font announcement describes HashiCorp Sans as a display typeface used across corporate and product logos and headlines. Its brand typography guidance directs HashiCorp Sans to headlines, sub-headlines, and titles; it separately names Metro Sans Book for brand-material body copy. That guidance is not evidence that Metro Sans is loaded on the captured Korean marketing routes.
- **Live computed and loaded:** the capture records `__hashicorpSans_96f0ca` on 21 visible heading/eyebrow nodes and a site-hosted WOFF2 source (`d29050812a1756cf-s.p.woff2`). The family is therefore represented as **HashiCorp Sans** for display use, not as the UI family.
- **Live system use:** `system-ui` is the computed high-confidence family on 713 visible body, button, card, tab, and badge nodes. Arial appears only on the captured embedded marketing form controls.
- **Declared-only assets:** `__dejavuSansMono_7cac6c` and `dejavu-sans-mono-web` have declared sources but no visible usage in this capture; they are not a UI or code token.
- **License boundary:** the official typography guidance directs access requests to the Brand Studio, while the site terms say no license to proprietary interests is implied. Neither source grants reusable webfont distribution or substitution rights; do not treat the captured WOFF2 source as such permission.

### Observed hierarchy

| Role | Family / evidence | Size | Weight | Line height | Captured use |
|------|-------------------|------|--------|-------------|--------------|
| Display hero | HashiCorp Sans, loaded | 82px | 600 | 96px | H1 |
| Heading | HashiCorp Sans, loaded | 52px | 600 | 62px | H2 |
| Heading variant | HashiCorp Sans, loaded | 42px | 700 | 50px | H2 |
| Eyebrow | HashiCorp Sans, loaded | 13px | 600 | 22px | Boundary label, 1.3px tracking |
| Body / card | system-ui | 16px | 400 | 26px | visible reading and card text |
| Controls | system-ui | 16px | 500 | 26–27px | shared CTAs and tabs |
| Navigation | system-ui | 15.008px | 500 | 24.013px | top navigation trigger |

## 4. Component Stylings

All values below are raw computed values from the supplied 2026-07-13 capture. Selector and route provenance are retained in `.verification.md`. The capture reports zero interaction events, so hover, focus, pressed, modal, menu, and error variants are intentionally omitted.

### Buttons

**Shared Primary CTA**
- Background: `#1060ff`
- Text: `#ffffff`
- Border: `1px solid #0c56e9`
- Radius: `5px`
- Padding: `9px 15px`
- Shadow: `rgba(101, 106, 118, 0.05) 0px 1px 1px, rgba(101, 106, 118, 0.05) 0px 2px 2px`
- Font: `16px / 500 / system-ui`
- Use: `.button__gOWvd.color-primary__rWbwp` on home, pricing, and Boundary routes
- Disabled: one icon-only primary instance used `#fafafa` background, `#8c909c` text, and `rgba(101, 106, 118, 0.2)` border

**Shared Secondary CTA — medium**
- Background: `#fafafa`
- Text: `#3b3d45`
- Border: `1px solid rgba(59, 61, 69, 0.4)`
- Radius: `5px`
- Padding: `9px 15px`
- Shadow: `rgba(101, 106, 118, 0.05) 0px 1px 1px, rgba(101, 106, 118, 0.05) 0px 2px 2px`
- Font: `16px / 500 / system-ui`
- Use: `.button__gOWvd.size-medium__HxMcm.color-secondary-white__AseI0` on all three routes

**Shared Secondary CTA — large**
- Background: `#fafafa`
- Text: `#3b3d45`
- Border: `1px solid rgba(59, 61, 69, 0.4)`
- Radius: `5px`
- Padding: `11px 19px`
- Shadow: `rgba(97, 104, 117, 0.05) 0px 1px 1px, rgba(97, 104, 117, 0.05) 0px 2px 2px`
- Font: `16px / 500 / system-ui`
- Use: `.button__gOWvd.size-large__MEpK3.color-secondary-high-contrast__3bxg3` on all three routes

**Terraform-labelled CTA**
- Background: `#7b42bc`
- Text: `#ffffff`
- Border: `1px solid rgba(178, 182, 189, 0.2)`
- Radius: `5px`
- Padding: `9px 15px`
- Shadow: `rgba(97, 104, 117, 0.05) 0px 1px 1px, rgba(97, 104, 117, 0.05) 0px 2px 2px`
- Font: `16px / 500 / system-ui`
- Use: `.button__gOWvd.color-terraform__DQMD5` on pricing; only this Terraform-labelled variant was captured

**Boundary-labelled CTA**
- Background: `#f24c53`
- Text: `#0c0c0e`
- Border: `1px solid rgba(178, 182, 189, 0.2)`
- Radius: `5px`
- Padding: `11px 19px`
- Shadow: `rgba(97, 104, 117, 0.05) 0px 1px 1px, rgba(97, 104, 117, 0.05) 0px 2px 2px`
- Font: `16px / 500 / system-ui`
- Use: `.button__gOWvd.color-boundary__xJtzy` on the Boundary route; only this Boundary-labelled variant was captured

### Navigation and tabs

**Top navigation trigger**
- Background: `#ffffff`
- Text: `#3b3d45`
- Radius: `4px`
- Padding: `8px 12px`
- Font: `15.008px / 500 / system-ui`
- Use: `.style_navItemTrigger__65Jsv` on all three routes

**Pricing tab — selected**
- Text: `#2b89ff`
- Radius: `5px`
- Font: `16px / 500 / system-ui`
- Use: `.tab-button__qI9wt` with `aria-selected="true"` on pricing

**Pricing tab — unselected**
- Text: `#d5d7db`
- Radius: `5px`
- Font: `16px / 500 / system-ui`
- Use: `.tab-button__qI9wt` with `aria-selected="false"` on pricing

### Form control

**Dark email field**
- Background: `#0d0e12`
- Text: `#efeff1`
- Border: `1px solid #616875`
- Radius: `5px`
- Padding: `11px`
- Shadow: `rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset`
- Font: `16px / 400 / Arial`
- Use: `.mktoField.mktoEmailField.mktoRequired` in the shared marketing form on all three routes

### Cards and badge

**Light content card**
- Background: `#ffffff`
- Text: `#3b3d45`
- Radius: `6px`
- Shadow: `rgba(101, 106, 118, 0.2) 0px 0px 0px 1px`
- Font: `16px / 400 / system-ui`
- Use: `.card__HomZw` on home

**Neutral filled badge**
- Background: `#f1f2f3`
- Text: `#3b3d45`
- Border: `1px solid transparent`
- Radius: `5px`
- Padding: `3px 7px`
- Font: `16px / 400 / system-ui`
- Use: `.badge__zns82.type-filled__ZaWsu.color-neutral__6Csf4` on home

## 5. Layout Principles

The capture records a recurring 4/8/12/16/24/32/48px spacing rhythm. Its high-frequency visible corners are 0px, 4px, 5px, and 6px; the only captured 8px radius is not promoted as the card standard. No responsive breakpoint, container-width, or grid behavior was measured in this packet.

## 6. Depth & Elevation

- **Control shadow:** the primary, secondary, Terraform, and Boundary CTAs use a two-layer 5% shadow, with the exact values recorded in §4.
- **Light-card outline:** home cards use `rgba(101, 106, 118, 0.2) 0px 0px 0px 1px`.
- **Dark-input inset:** the captured email field uses `rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset`.

## 7. Do's and Don'ts

### Do
- Use HashiCorp Sans only where the official brand describes display/logo/headline use and where it can actually be loaded.
- Use system-ui for the captured body and control treatments.
- Keep shared primary, Terraform, and Boundary CTA treatments attached to the route/context in which they were observed.

### Don't
- Don't substitute a system font while labelling it HashiCorp Sans.
- Don't infer unobserved product colors, hover states, focus rings, or component variants from class names or adjacent routes.
- Don't treat declared DejaVu Sans Mono assets as a live code-font token.

## 8. Responsive Behavior

No responsive observations were collected in this packet. Do not infer breakpoint values or mobile transformations from the desktop-route evidence.

## 9. Agent Prompt Guide

Use the captured public-marketing pattern only: `#1060ff` shared primary CTA or `#fafafa` secondary CTA, 5px corners, 16px/500 system-ui labels, and the recorded low-opacity control shadow. Use the Terraform `#7b42bc` or Boundary `#f24c53` CTA only for those specifically observed route contexts. Treat all other product colors and states as unresolved.

## 10. Voice & Tone

HashiCorp describes its work in operational, outcome-oriented terms: automate and secure multi-cloud and hybrid environments; focus on workflows rather than technologies; and keep source code freely available at the core of its offerings. The public marketing routes use short imperative actions.

**Voice samples**
- “Get started” — shared marketing CTA, captured on `/ko`
- “Contact us” — shared marketing CTA, captured on `/ko`
- “The Infrastructure Cloud” — official company positioning

## 11. Brand Narrative

Mitchell Hashimoto and Armon Dadgar met at the University of Washington in 2008 while working on a research project to make public-cloud technologies available to scientists. Hashimoto started HashiCorp in November 2012 and Dadgar joined as co-founder in 2013. Their early view was that organizations using multiple clouds would need a consistent, reliable set of automation tools for combinations of cloud and on-premises environments.

The present company describes itself as an IBM company that helps organizations automate and secure multi-cloud and hybrid environments through The Infrastructure Cloud. In April 2024 it introduced that brand chapter and HashiCorp Sans; in February 2025 it officially joined IBM. These facts describe the corporate/brand domain and should not be read as a claim about the captured public UI’s runtime tokens.

## 12. Principles

1. **Workflows, not technologies.** The company frames its offering around real-world operator workflows. *UI implication:* lead with the task or outcome before product mechanics.
2. **Multi-cloud and hybrid operations.** The public mission is to automate and secure these environments. *UI implication:* avoid implying that a single provider is the default context.
3. **Open source at the core.** HashiCorp describes source-available projects and a practitioner community as foundational. *UI implication:* make technical learning and implementation paths legible alongside commercial paths.
4. **Pragmatic beauty.** The font announcement links “beauty works better” with pragmatism. *UI implication:* use distinctive display typography deliberately while keeping functional UI plain and readable.

## 13. Personas

The official company material identifies technical and business teams, IT operators, practitioners, users, customers, and partners as stakeholders. This reference does not invent named or demographic personas; use those verified stakeholder groups as the starting point for task research.

## 14. States

The supplied capture records one disabled icon-only primary button and selected/unselected pricing tabs. It records no interaction events, loading, error, success, empty, skeleton, dialog, or toast state transitions, so those treatments are intentionally unresolved.

## 15. Motion & Easing

No motion duration, easing value, or reduced-motion behavior was measured in this packet. Keep motion tokens unresolved.

---

**Verified:** 2026-07-13
**Tier 1 sources:** supplied live capture of `https://www.hashicorp.com/ko`, `https://www.hashicorp.com/ko/pricing`, and `https://www.hashicorp.com/ko/products/boundary`; [Helios](https://helios.hashicorp.design/); [HashiCorp Sans announcement](https://www.hashicorp.com/en/blog/introducing-hashicorp-sans); [official typography guideline](https://www.hashicorp.com/en/brand/hcp-product-typography); [official terms of service](https://www.hashicorp.com/terms-of-service); [About](https://www.hashicorp.com/en/about); [Origin story](https://www.hashicorp.com/en/about/origin-story); [IBM-family announcement](https://www.hashicorp.com/en/blog/hashicorp-officially-joins-the-ibm-family).
**Tier 2 sources:** [getdesign.md/hashicorp](https://getdesign.md/hashicorp) directory metadata only; [Refero’s HashiCorp style](https://styles.refero.design/style/834ce97f-61f2-4b12-bf5c-e9fad2544456) cross-check. Its 4px-control and 8px-card claims conflict with the supplied raw capture, so the Tier 1 values remain canonical.
**Conflicts unresolved:** none

Refero’s differing radii and active-blue account are documented in `.verification.md` and resolved to the supplied computed evidence; unobserved prior claims for Vault, Waypoint, Vagrant, focus/hover behavior, responsive behavior, and motion remain omitted.
