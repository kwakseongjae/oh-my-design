---
id: cohere
name: Cohere
country: US
category: ai
homepage: "https://cohere.com"
primary_color: "#17171c"
logo:
  type: github
  slug: cohere-ai
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Cohere Newsroom
  url: "https://cohere.com/newsroom"
  type: brand
  description: Cohere's official newsroom and press-kit entry point.
  og_image: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/0750efbc3db33b1a67bc77575525b076f0137f26-1200x630.jpg?w=1200&h=630"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://cohere.com/ko", inspected: "2026-07-13" }
    - { id: pricing, kind: product-pricing, url: "https://cohere.com/ko/pricing", inspected: "2026-07-13" }
    - { id: products, kind: product-marketing, url: "https://cohere.com/ko/products", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://cohere.com/ko", captured: "2026-07-13" }
    - { id: pricing-live, kind: product-surface, url: "https://cohere.com/ko/pricing", captured: "2026-07-13" }
    - { id: products-live, kind: product-surface, url: "https://cohere.com/ko/products", captured: "2026-07-13" }
    - { id: cohere-about, kind: official-doc, url: "https://cohere.com/about", captured: "2026-07-13" }
    - { id: cohere-careers, kind: official-doc, url: "https://cohere.com/careers", captured: "2026-07-13" }
    - { id: lineto-unica77, kind: license, url: "https://lineto.com/api/front/font-families/393/document?index=1", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &all { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": *all
    "tokens.colors.foreground": *all
    "tokens.colors.foreground-soft": *all
    "tokens.colors.muted": *all
    "tokens.colors.inverse": *all
    "tokens.colors.border": *all
    "tokens.colors.border-dark": *all
    "tokens.typography.family.ui": *all
    "tokens.typography.family.display": *all
    "tokens.typography.family.mono": *all
    "tokens.typography.display.size": *all
    "tokens.typography.display.weight": *all
    "tokens.typography.display.lineHeight": *all
    "tokens.typography.display.tracking": *all
    "tokens.typography.display.use": *all
    "tokens.typography.heading.size": *all
    "tokens.typography.heading.weight": *all
    "tokens.typography.heading.lineHeight": *all
    "tokens.typography.heading.tracking": *all
    "tokens.typography.heading.use": *all
    "tokens.typography.body.size": *all
    "tokens.typography.body.weight": *all
    "tokens.typography.body.lineHeight": *all
    "tokens.typography.body.use": *all
    "tokens.typography.label.size": *all
    "tokens.typography.label.weight": *all
    "tokens.typography.label.lineHeight": *all
    "tokens.typography.label.tracking": *all
    "tokens.typography.label.use": *all
    "tokens.spacing.xs": *all
    "tokens.spacing.sm": *all
    "tokens.spacing.md": *all
    "tokens.spacing.lg": *all
    "tokens.spacing.xl": *all
    "tokens.spacing.xxl": *all
    "tokens.spacing.xxxl": *all
    "tokens.rounded.control": *all
    "tokens.rounded.dialog": *all
    "tokens.rounded.media": *all
    "tokens.rounded.pill": *all
    "tokens.components.pricing-tab.type": &pricing { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.pricing-tab.fg": *pricing
    "tokens.components.pricing-tab.radius": *pricing
    "tokens.components.pricing-tab.padding": *pricing
    "tokens.components.pricing-tab.font": *pricing
    "tokens.components.pricing-tab.states": *pricing
    "tokens.components.pricing-tab.use": *pricing
    "tokens.components.marketing-media-card.type": *all
    "tokens.components.marketing-media-card.radius": *all
    "tokens.components.marketing-media-card.use": *all
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only selector-backed observations from Cohere's public Korean marketing, pricing, and products routes are tokens. The capture contains no documentation chrome or authenticated product UI; declared-only font assets remain outside typography tokens."
  colors:
    primary: "#17171c"
    canvas: "#ffffff"
    foreground: "#000000"
    foreground-soft: "#212121"
    muted: "#75758a"
    inverse: "#fafafa"
    border: "#e5e7eb"
    border-dark: "#525260"
  typography:
    family: { ui: "Unica77 Cohere Web", display: "CohereText", mono: "CohereMono" }
    display: { size: 72, weight: 400, lineHeight: 1, tracking: -1.44, use: "Observed public h1 on the supplied routes" }
    heading: { size: 48, weight: 400, lineHeight: 1.2, tracking: -0.48, use: "Observed public h3 on the supplied routes" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Repeated public navigation, body, and action text" }
    label: { size: 14, weight: 400, lineHeight: 1.4, tracking: 0.28, use: "Observed CohereMono label text" }
  spacing: { xs: 6, sm: 8, md: 12, lg: 16, xl: 24, xxl: 36, xxxl: 40 }
  rounded: { control: 4, dialog: 8, media: 22, pill: 9999 }
  components:
    pricing-tab: { type: tab, fg: "#212121", radius: 0, padding: "4px 0px", font: "16px/400 Unica77 Cohere Web", states: "selected only", use: "Observed selected public pricing tab" }
    marketing-media-card: { type: card, radius: 22, use: "Observed home marketing-card container; no fill, border, or state is promoted" }
  components_harvested: true
---

# Design System Inspiration of Cohere

## 1. Visual Theme & Atmosphere

Cohere is an enterprise AI company that builds foundation models and end-to-end AI products for business use. Its official About page frames the work around improving human wellbeing by helping organizations scale innovation, productivity, and progress; its 2025 North launch extends that proposition into an agentic workplace product grounded in enterprise data. On the three supplied public Korean routes, that business-first posture appears as a quiet, high-contrast interface: white canvases, black and charcoal text, occasional inverse panels, and rounded pill actions. The capture records CohereText only for a small display tier, while the loaded Unica77 Cohere Web family carries the repeated navigation, body, card, input, tab, and action rhythm. The result is restrained rather than decorative: large editorial headlines introduce practical enterprise product and pricing content.

This is a public-surface reference, not a claim about signed-in product UI or documentation chrome. The components and tokens below retain only the selectors, routes, and states in the supplied capture.

**Key characteristics:**

- White public canvas with black, charcoal, and soft-gray text.
- CohereText at large display sizes; loaded Unica77 Cohere Web throughout the observed public UI.
- Dark and inverse white 9999px pill actions, backed by multiple public routes.
- A 22px rounded home marketing-card container, without a claim of a universal card recipe.
- No hover, pressed, focus, menu, dialog, toast, or error state token: the capture recorded no interactions.

## 2. Color Palette & Roles

### Observed public-route values

- **Dark action** (#17171c): observed dark pill background on public home, pricing, and products actions.
- **Canvas** (#ffffff): observed page and inverse-action surface across all captured routes.
- **Foreground** (#000000): repeated public text value.
- **Foreground soft** (#212121): repeated public button, tab, and body value.
- **Muted** (#75758a): repeated public secondary-text value.
- **Inverse text** (#fafafa): observed text on dark public areas.
- **Light border** (#e5e7eb): repeated computed border value across the three routes.
- **Dark-section boundary** (#525260): observed one-pixel border on the home and products routes.

### Boundary

The artifact does not provide a selector-backed blue, purple, green, gradient, focus-ring, or error-color role for these routes. Those older claims are omitted rather than generalized from class names, asset names, or an adjacent surface.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | Cohere’s official public pages establish the company/product context, but this research pass found no first-party typography guide that assigns a universal product role to a named Cohere family. |
| Live computed surface-use | Unica77 Cohere Web is loaded/high with 1,262 uses across body, buttons, cards, dialogs, inputs, lists, tabs, and toggles. CohereText is loaded/high with five heading uses, and CohereMono is loaded/high with 29 label/body uses. Each has computed-family use plus FontFaceSet and browser-served source corroboration in the supplied artifact. |
| Official distributed brand asset | The capture records Cohere-served WOFF/WOFF2/OTF assets. For Unica77, Lineto identifies LL Unica77 as an authorized digital Haas Unica version and publishes separate licensing terms; that does not grant reuse of Cohere’s served custom files. |
| Declared-only | CohereColor, CohereHeadline, CohereIconDefault, CohereIconOutline, and CohereVariable have declared source assets but no visible computed use. They remain declared-only. KaTeX faces are also declared-only technical assets, not Cohere brand typography. |
| System / unresolved | Inter, Arial, and system families occur in fallback stacks only. They are not substituted for or promoted as Cohere typefaces. |

### Captured hierarchy

| Role | Family | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public h1 | CohereText | 72px | 400 | 72px | two observed headings |
| Public h2 | CohereText | 60px | 400 | 60px | two observed headings |
| Public h3 | Unica77 Cohere Web | 48px | 400 | 57.6px | ten observed headings |
| Public heading | Unica77 Cohere Web | 32px | 400 | 38.4px | observed h2/h4 |
| Repeated body/action | Unica77 Cohere Web | 16px | 400 | 24px | navigation, lists, and actions |
| Secondary body | Unica77 Cohere Web | 14px | 400 | 19.6px | repeated public body text |
| Technical label | CohereMono | 14px | 400 | 19.6px | 0.28px tracking on observed label text |

## 4. Component Stylings

### Public actions

**Dark solid**
- Background: #17171c
- Text: #ffffff
- Radius: 9999px
- Padding: 12px 24px
- Font: 16px / 400 / Unica77 Cohere Web
- Use: Home, pricing, and products public CTA; home selector home::[data-omd-capture="53"]

**Inverse solid**
- Background: #ffffff
- Text: #17171c
- Radius: 9999px
- Padding: 12px 24px
- Font: 16px / 400 / Unica77 Cohere Web
- Use: Inverse public CTA on home and products; home selector home::[data-omd-capture="58"]

**Outlined pricing action**
- Text: #17171c
- Border: 1px solid #17171c
- Radius: 9999px
- Padding: 12px 16px
- Font: 16px / 400 / Unica77 Cohere Web
- Use: Pricing-only secondary action; selector surface-2::[data-omd-capture="59"]

### Public pricing navigation

**Selected tab**
- Text: #212121
- Radius: 0px
- Padding: 4px 0px
- Font: 16px / 400 / Unica77 Cohere Web
- Selected: aria-selected=true observed
- Use: Pricing-only tab; selector surface-2::[data-omd-capture="56"]

### Home marketing media

**Rounded container**
- Radius: 22px
- Use: Home-only interactive media-card container; selector home::div.group/card

The supplied capture records no component hover, pressed, focus, expanded, dialog-open, toast, validation, or generic disabled treatment. A disabled 4px icon control is a route-local observation and is not promoted as an action variant.

## 5. Layout Principles

The capture shows 6px, 8px, 12px, 16px, 24px, 36px, and 40px spacing values. These are observed clusters rather than a documented Cohere spacing specification. Public actions use 12px vertical padding; the captured navigation has 16px vertical and 40px horizontal padding at the 1440px viewport. Treat route-specific card and section geometry as local until a selector-backed measurement establishes it.

The home media-card container is 22px rounded, while a captured route-local dialog is 8px and compact controls can be 4px. Do not flatten that into a claim that every Cohere card, image, dialog, or form uses one radius.

## 6. Depth & Elevation

Most observed public controls are shadow-free. The capture also records a route-local floating control and dialog with a 0px 2px 8px rgba(0, 0, 0, 0.15) shadow. It is route-local chrome, not a general Cohere elevation token.

## 7. Do's and Don'ts

### Do

- Use the loaded CohereText / Unica77 / CohereMono hierarchy only when the deployment can legally load the named family.
- Keep the captured public action geometry specific: dark or inverse 9999px pills, with 12px vertical padding.
- Preserve the distinction between public marketing, public pricing, public product marketing, and route-local floating-dialog chrome.
- Use the 22px radius only for the observed home media-card container unless another selector proves a broader rule.

### Don't

- Do not substitute Inter, Arial, or system UI while naming the result as a Cohere typeface.
- Do not promote the declared-only CohereHeadline, CohereColor, icon, variable, or KaTeX assets into visible UI tokens.
- Do not invent hover, pressed, focus, error, dialog, toast, or accordion-expanded variants from class names.
- Do not generalize the floating dialog’s 8px/shadow treatment into product cards or primary actions.

## 8. Responsive Behavior

The supplied capture is at 1440x900. It establishes desktop computed values only. The navigation class indicates responsive padding rules and the home media card includes responsive dimensions, but no smaller-viewport render or interaction was supplied; mobile breakpoints, collapsed navigation, and touch behavior therefore remain unclaimed.

## 9. Agent Prompt Guide

- Build a public marketing CTA with #17171c background, #ffffff text, 9999px radius, 12px 24px padding, and 16px / 400 Unica77 Cohere Web only when the licensed font is available.
- Build the inverse counterpart only for a dark public section: #ffffff background, #17171c text, and the same observed pill geometry.
- Use CohereText 72px / 400 / 72px for an observed public h1 treatment, not as a claim about the authenticated product.
- Keep a pricing tab route-local: #212121 text, 0px radius, 4px vertical padding; selected is the only captured state.

## 10. Voice & Tone

Cohere’s official public voice is practical, enterprise-oriented, and human-purposeful. The About page describes foundation models and AI solutions that turn everyday effort into impact, while the public homepage leads with control over data and infrastructure. Careers names Momentum, Openness, and Autonomy as company values. These are official messaging and culture evidence, not a claim about every product microcopy string.

| Context | Evidence-backed direction |
|---|---|
| Enterprise proposition | Emphasize control, security, flexibility, and customization. |
| Product framing | Connect an AI capability to a work outcome or organization context. |
| Culture | Use purposeful, direct language consistent with Momentum, Openness, and Autonomy. |

**Public samples**

- “Own your AI” (official homepage).
- “Where enterprise AI meets real-world purpose” (official About page).
- “Join the mission to scale intelligence” (official Careers page).

## 11. Brand Narrative

Cohere says it was founded in Toronto in 2019 to scale intelligence in service of humanity. Its official About page identifies co-founders Aidan Gomez, Nick Frosst, and Ivan Zhang, and describes a current enterprise focus on helping teams improve judgment, accelerate execution, and extend what they can achieve. The same source places the 2025 launch of North in that evolution: a turnkey workplace platform using agentic capabilities and retrieval with enterprise data.

The company’s current public positioning centers on private, secure, customizable deployment across a customer’s infrastructure. That narrative explains the sober public presentation more reliably than the older snapshot’s unsupported claims about an all-purpose visual color story.

## 12. Principles

1. **Scale intelligence to serve people.** *UI implication:* connect public product messaging to human and organizational outcomes rather than novelty alone.
2. **Keep control with the enterprise.** *UI implication:* make security, deployment, and customization legible in public information architecture.
3. **Support momentum.** *UI implication:* make a next action visible without relying on unobserved interaction effects.
4. **Make room for autonomy and openness.** *UI implication:* prefer direct explanatory content and clear choice boundaries over opaque system behavior.

## 13. Personas

The official public sources identify enterprises, teams, workforces, and customers as the intended stakeholder groups, including organizations that need secure, private, and customizable AI deployment. They do not provide validated individual user personas. This reference intentionally does not fabricate named personas or behavioral metrics from that broad audience evidence.

## 14. States

No loading, empty, error, success, skeleton, or validation state was captured on the three supplied public routes. The only recorded stateful component evidence is a selected pricing tab and one disabled 4px-radius icon control. Do not extrapolate those observations into a general application-state system.

## 15. Motion & Easing

The supplied public capture contains transition-related class names on actions and a floating control, but no measured transition duration, easing value, reduced-motion behavior, or before/after interaction observation. No motion token is asserted.

---

**Verified:** 2026-07-13
**Tier 1 sources:** supplied capture of https://cohere.com/ko, https://cohere.com/ko/pricing, and https://cohere.com/ko/products; official context at https://cohere.com/about and https://cohere.com/careers; Unica77 source/license context at https://lineto.com/api/front/font-families/393/document?index=1 and https://lineto.com/information/legal/legal/lineto-eula.
**Tier 2 sources:** https://getdesign.md/cohere/design-md (independent high-level analysis); https://styles.refero.design/?q=Cohere (attempted; built-in web open returned an internal error, so no positive or negative Refero assertion is made).
**Conflicts unresolved:** none
