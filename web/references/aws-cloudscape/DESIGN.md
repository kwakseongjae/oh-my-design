---
id: aws-cloudscape
name: AWS Cloudscape
country: US
category: backend-devops
homepage: "https://cloudscape.design/"
primary_color: "#295eff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cloudscape.design&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Cloudscape Design System
  url: "https://cloudscape.design/"
  type: system
  description: AWS's open-source design system for cloud application experiences.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://cloudscape.design/", inspected: "2026-07-13" }
    - { id: components, kind: documentation, url: "https://cloudscape.design/components/", inspected: "2026-07-13" }
    - { id: about, kind: corporate, url: "https://cloudscape.design/about/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://cloudscape.design/", captured: "2026-07-13" }
    - { id: components-live, kind: official-doc, url: "https://cloudscape.design/components/", captured: "2026-07-13" }
    - { id: about-live, kind: product-surface, url: "https://cloudscape.design/about/", captured: "2026-07-13" }
    - { id: typography-doc, kind: official-doc, url: "https://cloudscape.design/foundation/visual-foundation/typography/", captured: "2026-07-13" }
    - { id: global-styles-doc, kind: official-doc, url: "https://cloudscape.design/get-started/for-developers/global-styles/", captured: "2026-07-13" }
    - { id: components-license, kind: license, url: "https://github.com/cloudscape-design/components/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.link": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.foreground": *home
    "tokens.colors.muted": *home
    "tokens.colors.border": *home
    "tokens.typography.family.sans": *home
    "tokens.typography.display.size": *home
    "tokens.typography.display.weight": *home
    "tokens.typography.display.lineHeight": *home
    "tokens.typography.display.tracking": *home
    "tokens.typography.display.use": *home
    "tokens.typography.heading.size": *home
    "tokens.typography.heading.weight": *home
    "tokens.typography.heading.lineHeight": *home
    "tokens.typography.heading.tracking": *home
    "tokens.typography.heading.use": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.rounded.sharp": *home
    "tokens.rounded.control": *home
    "tokens.rounded.card": *home
    "tokens.shadow.flat": *home
    "tokens.components.component-directory-card.type": &components { surface_id: components, source_id: components-live, method: computed-style, captured: "2026-07-13" }
    "tokens.components.component-directory-card.fg": *components
    "tokens.components.component-directory-card.radius": *components
    "tokens.components.component-directory-card.height": *components
    "tokens.components.component-directory-card.font": *components
    "tokens.components.component-directory-card.use": *components
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    link: "#295eff"
    canvas: "#ffffff"
    foreground: "#0f141a"
    muted: "#424650"
    border: "#8c8c94"
  typography:
    family: { sans: "Open Sans" }
    display: { size: 42, weight: 400, lineHeight: 48, tracking: -1.26, use: "Observed public home display text" }
    heading: { size: 20, weight: 600, lineHeight: 24, tracking: -0.2, use: "Observed repeated heading and card-title text" }
    body: { size: 14, weight: 400, lineHeight: 20, use: "Observed public documentation and about-page body/list text" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 20, xl: 40 }
  rounded: { sharp: 0, control: 8, card: 12 }
  shadow:
    flat: "none"
  components:
    component-directory-card: { type: card, fg: "#0f141a", radius: 0, height: 272, font: "14px / 400 Open Sans", use: "Static component-directory card; selector surface-2::div, class card" }
  components_harvested: true
---

# Design System Inspiration of AWS Cloudscape

## 1. Visual Theme & Atmosphere

AWS Cloudscape is an open-source design system for cloud application experiences, created for and used by AWS services since 2016. Its recognisable expression is deliberately operational rather than ornamental: white and near-white working surfaces, near-black information text, a clear blue link/action accent, Open Sans hierarchy, and compact geometry for navigating dense technical material. Cloudscape says that it has evolved through customer feedback and research, adding responsiveness, accessibility, usability, visual modes, theming, and content-density options; it also describes a more approachable visual identity intended to extend beyond a solely technical audience. This reference records a bounded public slice of that system—the Cloudscape home, component directory, and About page—without treating an AWS authenticated product console, a generic AWS marketing site, or an unobserved theme as the same surface. [About Cloudscape](https://cloudscape.design/about/) · [Cloudscape home](https://cloudscape.design/)

**Key characteristics:**
- Near-black `#0f141a` text on a measured `#ffffff` canvas, with `#8c8c94` border use.
- `#295eff` is the repeated public link/accent color in the supplied capture; it is not promoted as an unmeasured solid CTA fill.
- Open Sans is both the observed loaded public-web family and the system's documented default typeface.
- Observed typography pairs a 42px display sample with 20px/600 headings and 14px/400 body/list text.
- The observed static component-directory card is sharp and flat; 8px and 12px corners occur elsewhere in the captured public routes.

## 2. Color Palette & Roles

### Observed public-route palette

- **Cloudscape link accent** (`#295eff`): repeated text and border color across the home, component directory, and About surfaces.
- **Working canvas** (`#ffffff`): measured public background surface.
- **Operational foreground** (`#0f141a`): repeated text and border color across all three captured routes.
- **Supporting text** (`#424650`): observed secondary text/border value.
- **Control boundary** (`#8c8c94`): observed border color on public control chrome.

Cloudscape's official color guidance says most of the UI is built from white and grayscale, with colorful calls to action and status indicators. It also asks implementers to use design tokens for visual-mode-compliant work. That is system guidance; the canonical values above remain only the values actually measured in the supplied public-route evidence. [Colors](https://cloudscape.design/foundation/visual-foundation/colors/)

## 3. Typography Rules

### Evidence classes

**Official product-use.** Cloudscape's typography documentation names Open Sans as its primary and default font, and documents normal, bold, and light use in the system. The developer installation guide says the global-styles package includes Open Sans. These are system/product facts, separate from the computed capture. [Typography](https://cloudscape.design/foundation/visual-foundation/typography/) · [Using components](https://cloudscape.design/get-started/for-developers/using-cloudscape-components/)

**Live computed surface-use.** The supplied 2026-07-13 evidence reports Open Sans as loaded with high confidence and 865 visible uses across body, button, card, dialog, heading, input, list-item, and text roles. Representative observed styles include 42px/400/48px display text with -1.26px tracking, 20px/600/24px headings with -0.2px tracking, and 14px/400/20px documentation/list text.

**Official distributed brand asset.** Cloudscape's global-styles documentation says its package ships `@font-face` Open Sans files, and the design-resources page offers Open Sans for designers. The exact captured webfont URLs are public Cloudscape-hosted assets; this supports availability on the captured web surfaces, not a substitute for the loaded family. [Global styles](https://cloudscape.design/get-started/for-developers/global-styles/) · [Design resources](https://cloudscape.design/get-started/for-designers/design-resources/)

**Declared-only.** The artifact records `amazonEmber`, `amazonEmber Fallback`, and `openSans Fallback` as declared but with zero visible uses in these three routes. They are not UI-family tokens.

**Unresolved.** `Times` appears in a small number of dialog/text capture records with unresolved, low-confidence status. It is neither a Cloudscape type token nor a fallback substitute here.

## 4. Component Stylings

### Component directory card

**Default — static documentation card**
- Text: `#0f141a`
- Radius: 0px
- Height: 272px
- Font: 14px / 400 / Open Sans
- Use: Static component-directory card; selector `surface-2::div`, class `card`, on https://cloudscape.design/components/.

The supplied artifact records 36 instances of this 305px-wide, 272px-high default card geometry on the component-directory surface. Its computed background is transparent, border width is 0px, padding is 0px, and box shadow is `none`; those measured properties explain why this token preserves only the stable default geometry and text treatment rather than inventing a filled or elevated card. Dialog-opening interaction capture exists on all three routes, but it does not provide a hover, focus, pressed, disabled, or error state for this static card.

---
**Verified:** 2026-07-13
**Tier 1 sources:** [Cloudscape home](https://cloudscape.design/), [Components](https://cloudscape.design/components/), [About Cloudscape](https://cloudscape.design/about/), [Typography](https://cloudscape.design/foundation/visual-foundation/typography/), [Global styles](https://cloudscape.design/get-started/for-developers/global-styles/)
**Tier 2 sources:** getdesign attempt: https://getdesign.md/aws-cloudscape (web safety layer rejected direct open); Refero attempt: https://styles.refero.design/?q=Cloudscape (web safety layer rejected direct open).
**Conflicts unresolved:** none

## 5. Layout Principles

The captured routes repeatedly use 4, 8, 12, 20, and 40px spacing values. Treat these as a public-route rhythm, not as a complete grid or breakpoint contract. The component directory's repeated 305px-wide static cards show information-dense cataloging without requiring added elevation; their measured default card is 272px high in the representative variant.

Cloudscape's official documentation describes responsive design, visual modes, and density settings, but this packet has no cross-viewport comparison. Keep public information layouts clear and structured, then obtain a dedicated viewport capture before asserting AWS-specific mobile columns, navigation collapse, or density transitions.

## 6. Depth & Elevation

The representative static component-directory card measures `box-shadow: none`, 0px border width, and a transparent background. Its hierarchy comes from typography, spacing, and the enclosing page structure rather than a tokenized raised surface. Use `none` only for this observed flat treatment; dialog overlays and other floating layers are not collapsed into a shared shadow token.

## 7. Do's and Don'ts

### Do
- Use Open Sans where implementing the bounded captured Cloudscape public-web pattern.
- Preserve the `#0f141a` / `#ffffff` information contrast and use `#295eff` as the observed link/accent treatment.
- Keep the component-directory card flat and sharp when applying its measured default geometry.
- Use official Cloudscape documentation as system context while retaining selector-backed public-route values as the token source.
- Treat visual modes, density, responsive guidance, and accessibility as documented system capabilities rather than unmeasured values in this packet.

### Don't
- Do not replace Open Sans with Amazon Ember, a declared fallback, or a system font and call it observed Cloudscape use.
- Do not turn the observed `#295eff` link treatment into an unmeasured global solid-button token.
- Do not invent hover, focus, pressed, disabled, error, or selected values for the static card token.
- Do not transfer Cloudscape documentation measurements to an authenticated AWS console or unrelated AWS marketing surface.
- Do not infer a shadow, card fill, mobile breakpoint, or density-specific geometry that the supplied evidence did not measure.

## 8. Responsive Behavior

The evidence packet covers three public routes at one captured desktop viewport and records no viewport comparison. Cloudscape officially supports responsive design and content-density modes, but no exact breakpoint, reflow, or compact-mode values are promoted here. Preserve normal accessible reflow in implementation and collect a separate comparison before representing it as a Cloudscape-specific responsive contract.

## 9. Agent Prompt Guide

### Quick reference
- Public foreground/canvas: `#0f141a` on `#ffffff`; supporting text `#424650`; control boundary `#8c8c94`.
- Public link accent: `#295eff`.
- Typography: Open Sans; 42px/400/48px display, 20px/600/24px heading, 14px/400/20px body.
- Static component-directory card: sharp, 272px high, 14px/400 Open Sans, no shadow.

### Boundary-aware prompt
- "Build a Cloudscape-inspired public documentation card using only the captured default: `#0f141a` text, Open Sans 14px/400, 0px radius, 272px height, and no shadow. Keep it inside a white public-documentation context; do not add a fill, hover, focus, pressed, disabled, or error style because none was captured for this card."

## 10. Voice & Tone

Cloudscape's public materials use direct, instructional language for designers and developers: get started, explore components, use patterns, and apply global styles. The system frames its goal as building intuitive, engaging, and inclusive experiences at scale. For a Cloudscape-aligned public documentation surface, favor concrete task labels, compact technical nouns, and explanatory support text over promotional superlatives. [Get started](https://cloudscape.design/get-started/) · [About Cloudscape](https://cloudscape.design/about/)

| Context | Treatment |
|---|---|
| Primary action | Use a short verb-led label that names the task. |
| Component guidance | State the component purpose, then the usage constraint. |
| Technical note | Be specific about behavior, scope, or configuration; do not imply unverified capability. |

Voice samples are illustrative writing patterns, not first-party quotations: “View component guidance”; “Choose a pattern for this task”; “This setting changes the current density.”

## 11. Brand Narrative

Cloudscape describes itself as an open-source system for cloud application experiences at scale. AWS created it in 2016 to improve experience consistency across AWS service web applications and help teams implement them faster; its public account says customers and research have continued to shape the system. [About Cloudscape](https://cloudscape.design/about/)

Its current evolution is practical and inclusive: Cloudscape documents added responsiveness, accessibility, usability, light/dark modes, theming, and content-density options, alongside a more approachable look and feel. It publishes guidelines, React components, design resources, patterns, and demos so designers and developers can work from the same public system. [Cloudscape home](https://cloudscape.design/) · [Start designing](https://cloudscape.design/get-started/for-designers/start-designing/)

## 12. Principles

1. **Build cloud experiences at scale.** Cloudscape presents itself as a shared foundation of guidelines, resources, and front-end components. *UI implication:* use repeatable patterns and explicit hierarchy before adding decorative variation.
2. **Keep complex work approachable.** Cloudscape says its visual identity has adapted toward a more approachable feel while serving technical tasks. *UI implication:* pair dense information with clear grouping, readable type, and direct action labels.
3. **Design inclusively and responsively.** The system describes accessibility, responsiveness, and configurable modes as core features. *UI implication:* respect semantic structure and reflow, but do not invent this packet's missing breakpoint values.
4. **Let implementation and guidance meet.** Cloudscape publishes components, patterns, playgrounds, and design resources together. *UI implication:* preserve the distinction between official intent and the selector-backed values actually observed on a route.

## 13. Personas

Cloudscape's first-party materials identify designers and developers as primary users of its resources, and describe cloud-product builders as the broader intended community. The following are evidence-bounded roles, not invented demographic personas.

- **Cloud-product designer** — uses the visual foundation, component library, and patterns to move from wireframe to prototype while maintaining accessible, consistent application structure.
- **React application developer** — installs Cloudscape packages, uses component APIs and global styles, and relies on documented testing, responsiveness, and accessibility guidance.

## 14. States

| State | Evidence boundary |
|---|---|
| Component-directory card — default | Observed static card: `#0f141a` text, 0px radius, 272px height, 14px/400 Open Sans, no shadow. |
| Component-directory card — hover | Not captured; intentionally unspecified. |
| Component-directory card — focus | Not captured; intentionally unspecified. |
| Component-directory card — pressed | Not captured; intentionally unspecified. |
| Component-directory card — disabled | Not captured; intentionally unspecified. |
| Component-directory card — error | Not captured; intentionally unspecified. |
| Dialog — open | Three dialog-opening interactions were captured across home, components, and About; no dialog token is promoted because a stable dialog shell was not selected. |
| Loading | Not captured; intentionally unspecified. |
| Empty | Not captured; intentionally unspecified. |
| Success | Not captured; intentionally unspecified. |
| Skeleton | Not captured; intentionally unspecified. |

## 15. Motion & Easing

The supplied evidence identifies dialog-open interactions but contains no measured duration, easing curve, transition property, reduced-motion behavior, or motion token. Do not derive a motion scale from a static card or from general Cloudscape documentation. **[FILL IN: selector-backed or official-token motion values after dedicated evidence collection.]**
