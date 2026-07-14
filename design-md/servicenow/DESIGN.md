---
id: servicenow
name: ServiceNow Horizon
country: US
category: saas
homepage: "https://horizon.servicenow.com/"
primary_color: "#102c40"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=horizon.servicenow.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Horizon Design System
  url: "https://horizon.servicenow.com/"
  type: system
  description: ServiceNow's source of truth for experience design across the Now Platform.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: design-system-home, url: "https://horizon.servicenow.com/", inspected: "2026-07-13" }
    - { id: about-horizon, kind: design-system-about, url: "https://horizon.servicenow.com/getting-started/about-horizon", inspected: "2026-07-13" }
    - { id: workspace-components, kind: design-system-components, url: "https://horizon.servicenow.com/workspace/components", inspected: "2026-07-13" }
  sources:
    - { id: horizon-home-capture, kind: product-surface, url: "https://horizon.servicenow.com/", captured: "2026-07-13" }
    - { id: horizon-about-capture, kind: product-surface, url: "https://horizon.servicenow.com/getting-started/about-horizon", captured: "2026-07-13" }
    - { id: horizon-components-capture, kind: official-doc, url: "https://horizon.servicenow.com/workspace/components", captured: "2026-07-13" }
    - { id: horizon-about-doc, kind: official-doc, url: "https://horizon.servicenow.com/getting-started/about-horizon", captured: "2026-07-13" }
    - { id: horizon-principles-doc, kind: official-doc, url: "https://horizon.servicenow.com/getting-started/principles", captured: "2026-07-13" }
    - { id: horizon-whats-new-doc, kind: official-doc, url: "https://horizon.servicenow.com/getting-started/whats-new", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.navy": &home { surface_id: home, source_id: horizon-home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.ink": *home
    "tokens.colors.content-ink": &about { surface_id: about-horizon, source_id: horizon-about-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.border-subtle": *about
    "tokens.colors.link-teal": *home
    "tokens.typography.family.ui": &font { surface_id: home, source_id: horizon-home-capture, method: computed-style-fontfaceset-and-source-url, captured: "2026-07-13" }
    "tokens.typography.display.size": *font
    "tokens.typography.display.weight": *font
    "tokens.typography.display.lineHeight": *font
    "tokens.typography.display.tracking": *font
    "tokens.typography.display.use": *font
    "tokens.typography.section-title.size": *about
    "tokens.typography.section-title.weight": *about
    "tokens.typography.section-title.lineHeight": *about
    "tokens.typography.section-title.tracking": *about
    "tokens.typography.section-title.use": *about
    "tokens.typography.body.size": *about
    "tokens.typography.body.weight": *about
    "tokens.typography.body.lineHeight": *about
    "tokens.typography.body.use": *about
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.rounded.square": *home
    "tokens.rounded.card": &components { surface_id: workspace-components, source_id: horizon-components-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.control": *home
    "tokens.components.workspace-page-link.type": *components
    "tokens.components.workspace-page-link.bg": *components
    "tokens.components.workspace-page-link.fg": *components
    "tokens.components.workspace-page-link.radius": *components
    "tokens.components.workspace-page-link.height": *components
    "tokens.components.workspace-page-link.font": *components
    "tokens.components.workspace-page-link.use": *components
    "tokens.components.primary-action.type": *home
    "tokens.components.primary-action.bg": *home
    "tokens.components.primary-action.fg": *home
    "tokens.components.primary-action.border": *home
    "tokens.components.primary-action.radius": *home
    "tokens.components.primary-action.padding": *home
    "tokens.components.primary-action.height": *home
    "tokens.components.primary-action.font": *home
    "tokens.components.primary-action.states": *home
    "tokens.components.primary-action.use": *home
    "tokens.components.nav-trigger.type": *home
    "tokens.components.nav-trigger.fg": *home
    "tokens.components.nav-trigger.radius": *home
    "tokens.components.nav-trigger.padding": *home
    "tokens.components.nav-trigger.height": *home
    "tokens.components.nav-trigger.font": *home
    "tokens.components.nav-trigger.states": *home
    "tokens.components.nav-trigger.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Machine tokens are limited to the supplied Horizon home, about, and Workspace components capture. The capture contains no interaction records; only observed default component geometry is represented."
  components_harvested: true
  colors:
    navy: "#102c40"
    canvas: "#ffffff"
    ink: "#222222"
    content-ink: "#0b1012"
    border-subtle: "#cfd5d7"
    link-teal: "#00718f"
  typography:
    family: { ui: "ServiceNowSans" }
    display: { size: 64, weight: 700, lineHeight: 72, tracking: -2.56, use: "Observed Horizon home H1" }
    section-title: { size: 40, weight: 700, lineHeight: 52, tracking: -0.8, use: "Observed About Horizon section heading" }
    body: { size: 16, weight: 300, lineHeight: 27.424, use: "Observed Horizon about-page list and body sample" }
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }
  rounded: { square: 0, card: 8, control: 8 }
  components:
    workspace-page-link: { type: listItem, bg: "#ffffff", fg: "#0000ee", radius: "8px", height: "298px", font: "16px / 400 ServiceNowSans", use: "Workspace components page-card link, selector surface-3::[data-omd-capture=93]" }
    primary-action: { type: button, bg: "#222222", fg: "#ffffff", border: "1px solid transparent", radius: "8px", padding: "8px 20px", height: "42px", font: "14px / 450 ServiceNowSans", states: "default only; no interaction state captured", use: "Horizon home primary action, selector home::[data-omd-capture=15]" }
    nav-trigger: { type: button, fg: "#222222", radius: "0px", padding: "24px 8px", height: "64px", font: "16px / 300 ServiceNowSansLight", states: "default only; no interaction state captured", use: "Horizon global-nav trigger with button role, selector home::[data-omd-capture=1]" }
---

# Design System Inspiration of ServiceNow Horizon

## 1. Visual Theme & Atmosphere

ServiceNow began as Fred Luddy's 2004 effort to make enterprise work easier to route and complete; Horizon is the design system that now gives the Now Platform a shared experience language. Its official description is not a marketing palette masquerading as a product UI: it is the source of truth for creators making enterprise experiences, spanning guidelines, resources, app frameworks, patterns, and components. The captured Horizon surfaces translate that remit into a quiet, practical presentation—dark navy navigation, white working space, near-black text, a wide ServiceNow Sans hierarchy, and measured 8px cards and controls. The expression favors orientation over decoration: large headings establish the topic, persistent navigation sets platform context, and link cards make a large system browsable. Horizon is actively evolving, with a 2025 site-wide ServiceNow Sans update and 2026 additions for AI guidance, accessibility personas, mobile coverage, and the Australia release libraries.

- **Platform-first clarity:** `#102C40` is observed on the global header while `#FFFFFF`, `#222222`, and `#0B1012` carry the working surface and content hierarchy.
- **Documentation as product surface:** cards, navigational triggers, and a restrained teal link treatment (`#00718F`) help creators move among frameworks rather than imply a single end-user application.
- **Release-aware system:** Horizon's official updates keep its component guidance and Figma libraries aligned with ServiceNow releases; this reference records the supplied 2026-07-13 capture, not a timeless or universal application theme.

## 2. Color Palette & Roles

### Observed Horizon roles

- **Navigation navy** (`#102C40`): observed global-header background on all three supplied Horizon surfaces.
- **Canvas** (`#FFFFFF`): observed document background and Workspace page-card surface.
- **Navigation ink** (`#222222`): repeated header, body, and default primary-action color.
- **Content ink** (`#0B1012`): observed Workspace component-page text and control color.
- **Subtle card border** (`#CFD5D7`): observed 1px border on an About Horizon link card; it is not generalized as a platform-wide input border.
- **Teal link** (`#00718F`): observed home-surface text link treatment; it is not promoted to a general action fill.

The supplied evidence establishes these values on Horizon's public documentation surfaces. It does not establish semantic status colors, dark-mode values, hover colors, or a complete token taxonomy, so those values are omitted.

## 3. Typography Rules

### Evidence classes

- **Official product-use:** Horizon's Winter 2025 update says the site was updated to its new ServiceNow Sans typography standards. This is official design-system context, not a separate visual measurement.
- **Live computed surface-use:** `ServiceNowSans` is loaded with high confidence, 722 visible uses, and Horizon-hosted WOFF/WOFF2 source URLs in the supplied packet. It is the only family promoted to `tokens.typography.family.ui`.
- **Live secondary aliases:** `ServiceNowSansLight` (34 visible uses) and `ServiceNowSansBook` (18) are also FontFaceSet-backed in the capture. They appear in measured navigation/text samples, but they are not added as independent UI-family tokens.
- **Declared-only:** Font Awesome 7 Brands, Font Awesome 7 Pro, Lato, ServiceNow Sans Mono, and several weight-named ServiceNow aliases are declared with zero visible usage. They are not substitutes or UI tokens.
- **License boundary:** no official public font licence granting reuse of the supplied hosted files was located in the allowed research. This reference records observed use only and does not imply redistribution permission.

### Measured hierarchy

| Role | Family | Size | Weight | Line height | Tracking | Provenance |
|---|---|---:|---:|---:|---:|---|
| Horizon page title | ServiceNowSans | 64px | 700 | 72px | -2.56px | `home::h1` |
| About section heading | ServiceNowSans | 40px | 700 | 52px | -0.8px | `surface-2::#what-is-horizon` |
| About list/body sample | ServiceNowSans | 16px | 300 | 27.424px | normal | `surface-2::li` |
| Global-navigation trigger | ServiceNowSansLight | 16px | 300 | 16px | 0.24px | `home::[data-omd-capture="1"]` |

## 4. Component Stylings

The following entries are restricted to selector-backed default samples in the supplied Horizon capture. Its interaction count is zero; no hover, focus, pressed, disabled, error, checked, or other interactive state is claimed.

### Workspace documentation cards

**Workspace page link**
- Background: `#FFFFFF`
- Text: `#0000EE`
- Radius: `8px`
- Height: `298px`
- Font: `16px / 400 ServiceNowSans`
- Use: Workspace components page-card link; `surface-3::[data-omd-capture="93"]`, repeated on the components surface. This is rendered as a `listItem` token because the observed element is a link, not an evidenced button.

### Horizon actions and navigation

**Primary action**
- Background: `#222222`
- Text: `#FFFFFF`
- Border: `1px solid transparent`
- Radius: `8px`
- Padding: `8px 20px`
- Height: `42px`
- Font: `14px / 450 ServiceNowSans`
- States: default only; no interaction state captured.
- Use: Horizon-home primary action; `home::[data-omd-capture="15"]`.

**Global-navigation trigger**
- Text: `#222222`
- Radius: `0px`
- Padding: `24px 8px`
- Height: `64px`
- Font: `16px / 300 ServiceNowSansLight`
- States: default only; no interaction state captured.
- Use: global-navigation item with an observed `button` role; `home::[data-omd-capture="1"]`.

## 5. Layout Principles

- The supplied desktop surfaces use a persistent 64px global header before long-form design-system content.
- The observed hierarchy moves from 64px page titles to 40px sectional headings and 16px supporting copy; this is an observed documentation pattern, not a responsive specification.
- About Horizon presents reusable resources as bordered 8px link cards. Workspace components presents a larger set of 8px page cards; no universal grid, column count, or breakpoint is inferred from those observations.

## 6. Depth & Elevation

- The representative public header, cards, buttons, and dialog samples in the supplied capture report `box-shadow: none`.
- The captured default surfaces use border, radius, contrast, and layout separation rather than an observed elevation scale. No shadow token is emitted.

## 7. Do's and Don'ts

### Do

- Use the observed navy header, white canvas, and dark text as a documentation-surface relationship, keeping each color in its captured role.
- Preserve the large-to-small heading hierarchy when adapting Horizon reference material.
- Use the selector-backed 8px card and primary-action geometry only where the route-local context fits.

### Don't

- Treat a Horizon documentation card or global-navigation trigger as evidence for a logged-in Now Platform workflow.
- Invent hover, focus, pressed, disabled, error, or selection treatments from the zero-interaction capture.
- Substitute Lato, Font Awesome, a system font, or ServiceNow Sans Mono for the observed ServiceNowSans UI family.

## 8. Responsive Behavior

The supplied evidence is a 1440×900 desktop capture. Horizon's own documentation describes multiple app frameworks, including Workspace, Native Mobile, Service Portal, and Core UI, but this packet does not measure their responsive breakpoints or mobile component geometry. Keep that boundary explicit; no mobile scale or collapse rule is tokenized.

## 9. Agent Prompt Guide

Use Horizon as a source of truth for enterprise experience-design documentation: a dark navy global header, white canvas, ServiceNowSans hierarchy, 8px cards/controls, and quiet separation rather than shadow-heavy layering. Keep the reference domain-specific—Horizon documentation and component pages—not a claim about every ServiceNow product surface. Use only the captured default action and navigation geometry; interaction states, status colors, responsive thresholds, and font licence terms are unresolved and must stay absent.

## 10. Voice & Tone

Horizon’s official language is purposeful, enabling, and creator-oriented: it frames design guidance as a way to help people build clear enterprise experiences. The samples below are illustrative adaptation guidance, not ServiceNow quotations.

| Do | Don't |
|---|---|
| Explain the practical outcome: “Choose the framework that fits this workflow.” | Use abstract superlatives with no task context. |
| Address creators directly and clearly: “Start with the component guidance.” | Hide the next step behind insider terminology. |
| Keep technical guidance calm and specific: “This card links to a documented pattern.” | Present undocumented behavior as a platform rule. |

Illustrative samples: “Build with the guidance that matches your workspace.” “Use the component page to compare documented patterns.” “Keep the next task visible and the system context stable.”

## 11. Brand Narrative

ServiceNow's founder biography says Fred Luddy founded the company in 2004 with a goal of using technology to simplify work experiences for regular people. The company’s early cloud-platform premise grew from that practical concern: route work through an enterprise more effectively rather than add another disconnected tool.

Horizon gives the current platform that concern a design-system form. Its official About page calls it the source of truth for experience design at ServiceNow, centralizing guidelines, patterns, components, resources, and app frameworks for people creating on the platform. That makes the system’s restrained documentation vocabulary consequential: it helps creators, partners, designers, developers, product managers, and quality engineers coordinate around reusable guidance.

The present direction is explicitly evolutionary. Horizon’s updates document a site-wide ServiceNow Sans standards update in Winter 2025, and current 2026 work expands AI guidance, accessibility persona cards, Native Mobile coverage, and release-aligned libraries. These changes describe the Horizon system and its public resources; they do not independently verify visual behavior beyond the captured surfaces.

## 12. Principles

1. **Fluid — create an effortless path between experiences.** Horizon’s official principles describe intuition and clarity as a way to help people move naturally across experiences.
   *UI implication:* make location, next steps, and information hierarchy legible before adding visual emphasis.
2. **Symphonic — make parts work together.** Horizon centralizes guidelines, resources, and app-framework guidance rather than treating components as isolated artifacts.
   *UI implication:* reuse documented patterns and keep shell, card, type, and content relationships coherent.
3. **Inspiring — make enterprise work memorable without losing precision.** The official principles connect design quality with helping ServiceNow and customer brands stand out at important moments.
   *UI implication:* use contrast and typography deliberately, without turning every documentation surface into a campaign.
4. **Accessible creation — support diverse creators and users.** Horizon’s current updates include accessibility persona cards and its guidance addresses accessibility alongside AI and content design.
   *UI implication:* treat accessibility as design input, not post-build decoration.

## 13. Personas

These are official Horizon audience groups, not synthetic usability personas. They describe who the system says it supports; no unobserved behavior or satisfaction outcome is inferred.

- **Creators:** people combining design, engineering, and product-ownership skills who use curated tools and guidance to make enterprise experiences.
- **Partners:** teams using Horizon with tools such as UI Builder to create well-designed subsystems for customers.
- **Designers and developers:** internal advocates and implementers who use vetted patterns, reusable components, code examples, and documentation.
- **Product managers and quality engineers:** collaborators who use Horizon as a shared reference for decisions, validation, usability, performance, and in-app guidance.

## 14. States

The supplied packet records no interaction states. The table therefore describes content and implementation guidance only; it does not assert component color, motion, focus, error, or disabled visual values.

| Category | Guidance |
|---|---|
| Empty | State what is unavailable and offer the documented next place to look. |
| Empty search | Explain that no matching documentation was found; do not imply a hidden result. |
| Loading | Preserve page context and a stable reading order while content is fetched. |
| Skeleton | Reserve space only when the final layout is known; no skeleton visual token is measured here. |
| Error | Name the failed task plainly and give a retry or recovery path when one exists. |
| Error — access | Explain when content requires a different permission or source; do not disguise access failure as missing data. |
| Success | Confirm the completed action in the same workflow context without inventing a toast style. |
| Disabled | Explain the prerequisite for an unavailable action; no disabled visual treatment was captured. |
| No interaction record | Do not infer hover, focus, pressed, checked, or error states from default component geometry. |
| Reduced motion | Honor user motion preferences; this capture does not measure duration or easing values. |

## 15. Motion & Easing

No motion duration, easing curve, transition property, or reduced-motion implementation was measured in the supplied packet. Horizon’s public guidance positions accessibility as a platform concern, but it does not authorize inventing those values here. Use motion only when an implementation has its own verified specification; otherwise keep state changes direct and non-animated.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://horizon.servicenow.com/ · https://horizon.servicenow.com/getting-started/about-horizon · https://horizon.servicenow.com/workspace/components
**Tier 2 sources:** attempted https://getdesign.md/servicenow (fetch error); attempted https://styles.refero.design/?q=servicenow (fetch error)
**Conflicts unresolved:** none
