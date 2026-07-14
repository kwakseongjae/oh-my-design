---
id: linear.app
name: Linear
country: US
category: productivity
homepage: "https://linear.app"
primary_color: "#5e6ad2"
logo:
  type: simpleicons
  slug: linear
verified: "2026-07-12"
omd: "0.1"
ds:
  name: Linear Brand
  url: "https://linear.app/brand"
  type: brand
  description: Linear's official identity and asset-use guidance; public marketing/product-preview measurements remain a separate evidence domain.
verification_v2:
  schema: 2
  checked: "2026-07-12"
  surfaces:
    - { id: home, kind: marketing-product, url: "https://linear.app/", inspected: "2026-07-12" }
    - { id: method, kind: official-method, url: "https://linear.app/method", inspected: "2026-07-12" }
    - { id: customers, kind: marketing-customer, url: "https://linear.app/customers", inspected: "2026-07-12" }
    - { id: pricing, kind: product-pricing, url: "https://linear.app/pricing", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://linear.app/", captured: "2026-07-12" }
    - { id: method-live, kind: product-surface, url: "https://linear.app/method", captured: "2026-07-12" }
    - { id: customers-live, kind: product-surface, url: "https://linear.app/customers", captured: "2026-07-12" }
    - { id: pricing-live, kind: product-surface, url: "https://linear.app/pricing", captured: "2026-07-12" }
    - { id: brand-official, kind: official-doc, url: "https://linear.app/brand", captured: "2026-07-12" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": *home_evidence
    "tokens.colors.foreground": *home_evidence
    "tokens.colors.secondary": *home_evidence
    "tokens.colors.muted": *home_evidence
    "tokens.colors.quiet": *home_evidence
    "tokens.colors.primary-action": *home_evidence
    "tokens.colors.on-primary-action": *home_evidence
    "tokens.colors.hairline": *home_evidence
    "tokens.typography.family.ui": *home_evidence
    "tokens.typography.family.mono": *home_evidence
    "tokens.typography.display.size": *home_evidence
    "tokens.typography.display.weight": *home_evidence
    "tokens.typography.display.lineHeight": *home_evidence
    "tokens.typography.display.tracking": *home_evidence
    "tokens.typography.display.use": *home_evidence
    "tokens.typography.heading.size": *home_evidence
    "tokens.typography.heading.weight": *home_evidence
    "tokens.typography.heading.lineHeight": *home_evidence
    "tokens.typography.heading.tracking": *home_evidence
    "tokens.typography.heading.use": *home_evidence
    "tokens.typography.body.size": &method_evidence { surface_id: method, source_id: method-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.typography.body.weight": *method_evidence
    "tokens.typography.body.lineHeight": *method_evidence
    "tokens.typography.body.tracking": *method_evidence
    "tokens.typography.body.use": *method_evidence
    "tokens.typography.navigation.size": *home_evidence
    "tokens.typography.navigation.weight": *home_evidence
    "tokens.typography.navigation.lineHeight": *home_evidence
    "tokens.typography.navigation.tracking": *home_evidence
    "tokens.typography.navigation.use": *home_evidence
    "tokens.typography.mono.size": *home_evidence
    "tokens.typography.mono.weight": *home_evidence
    "tokens.typography.mono.lineHeight": *home_evidence
    "tokens.typography.mono.use": *home_evidence
    "tokens.spacing.xs": *home_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.md": *home_evidence
    "tokens.spacing.lg": *home_evidence
    "tokens.spacing.xl": *home_evidence
    "tokens.rounded.product-control": *home_evidence
    "tokens.rounded.card": *home_evidence
    "tokens.rounded.full": *home_evidence
    "tokens.shadow.primary-action": *home_evidence
    "tokens.components.primary-action.type": *home_evidence
    "tokens.components.primary-action.bg": *home_evidence
    "tokens.components.primary-action.fg": *home_evidence
    "tokens.components.primary-action.border": *home_evidence
    "tokens.components.primary-action.radius": *home_evidence
    "tokens.components.primary-action.padding": *home_evidence
    "tokens.components.primary-action.height": *home_evidence
    "tokens.components.primary-action.font": *home_evidence
    "tokens.components.primary-action.states": *home_evidence
    "tokens.components.primary-action.use": *home_evidence
    "tokens.components.secondary-action.type": *home_evidence
    "tokens.components.secondary-action.bg": *home_evidence
    "tokens.components.secondary-action.fg": *home_evidence
    "tokens.components.secondary-action.radius": *home_evidence
    "tokens.components.secondary-action.padding": *home_evidence
    "tokens.components.secondary-action.height": *home_evidence
    "tokens.components.secondary-action.font": *home_evidence
    "tokens.components.secondary-action.states": *home_evidence
    "tokens.components.secondary-action.use": *home_evidence
    "tokens.components.nav-trigger.type": *home_evidence
    "tokens.components.nav-trigger.bg": *home_evidence
    "tokens.components.nav-trigger.fg": *home_evidence
    "tokens.components.nav-trigger.radius": *home_evidence
    "tokens.components.nav-trigger.padding": *home_evidence
    "tokens.components.nav-trigger.height": *home_evidence
    "tokens.components.nav-trigger.font": *home_evidence
    "tokens.components.nav-trigger.states": *home_evidence
    "tokens.components.nav-trigger.use": *home_evidence
    "tokens.components.product-menu-item.type": *home_evidence
    "tokens.components.product-menu-item.bg": *home_evidence
    "tokens.components.product-menu-item.fg": *home_evidence
    "tokens.components.product-menu-item.radius": *home_evidence
    "tokens.components.product-menu-item.padding": *home_evidence
    "tokens.components.product-menu-item.font": *home_evidence
    "tokens.components.product-menu-item.states": *home_evidence
    "tokens.components.product-menu-item.use": *home_evidence
    "tokens.components.customer-card.type": &customers_evidence { surface_id: customers, source_id: customers-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.components.customer-card.bg": *customers_evidence
    "tokens.components.customer-card.fg": *customers_evidence
    "tokens.components.customer-card.radius": *customers_evidence
    "tokens.components.customer-card.padding": *customers_evidence
    "tokens.components.customer-card.use": *customers_evidence
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Fresh four-route capture with 65 component variants and six safe menu expansions. Marketing, embedded product preview, Method, customer, pricing, and brand evidence remain separate."
  colors:
    primary: "#5e6ad2"
    canvas: "#08090a"
    foreground: "#f7f8f8"
    secondary: "#d0d6e0"
    muted: "#8a8f98"
    quiet: "#62666d"
    primary-action: "#e5e5e6"
    on-primary-action: "#08090a"
    hairline: "#1c1d1e"
  typography:
    family: { ui: "Inter", mono: "Berkeley Mono" }
    display: { size: 48, weight: 510, lineHeight: 1, tracking: -1.056, use: "Repeated public section display heading" }
    heading: { size: 24, weight: 590, lineHeight: 1.33, tracking: -0.288, use: "Public feature and card heading" }
    body: { size: 15, weight: 400, lineHeight: 1.6, tracking: -0.165, use: "Method and public descriptive body" }
    navigation: { size: 13, weight: 400, lineHeight: 1.5, tracking: -0.13, use: "Public navigation and compact product-preview labels" }
    mono: { size: 14, weight: 400, lineHeight: 1.71, use: "Embedded public product-preview technical input" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 24, xl: 32 }
  rounded: { product-control: 6, card: 8, full: 9999 }
  shadow:
    primary-action: "0 0 1px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.07), 0 3px 2px rgba(0,0,0,0.04)"
  components_harvested: true
  components:
    primary-action: { type: button, bg: "#e5e5e6", fg: "#08090a", border: "1px solid #e5e5e6", radius: "9999px", padding: "0 20px", height: "44px", font: "16px / 510", states: "default captured; compact 32px variant remains local", use: "Highest-priority public get-started action" }
    secondary-action: { type: button, bg: "rgba(255,255,255,0.05)", fg: "#f7f8f8", radius: "9999px", padding: "0 20px", height: "44px", font: "16px / 510", states: "default captured; no universal hover token promoted", use: "Paired public contact-sales action" }
    nav-trigger: { type: button, bg: "transparent", fg: "#8a8f98", radius: "9999px", padding: "0 12px", height: "32px", font: "13px / 400", states: "focus, hover, pressed, expanded, and menu-open observed across current routes", use: "Current public navigation trigger" }
    product-menu-item: { type: tab, bg: "transparent", fg: "#f7f8f8", radius: "8px", padding: "12px 16px 12px 12px", font: "16px / 400", states: "selected, expanded, and menu-open captured in the embedded product preview", use: "Current embedded product-preview menu row" }
    customer-card: { type: card, bg: "transparent", fg: "#f7f8f8", radius: "8px", padding: "24px 32px", use: "Large current customer-story card; lime sibling remains a surface-local editorial variant" }
---

# Design System Inspiration of Linear

## 1. Visual Theme & Atmosphere

Linear is a product-development system for planning and building software, and its public experience treats precision as atmosphere. The current pages use a deep `#08090a` canvas, near-white `#f7f8f8` type, narrow luminance steps for secondary information, and light-steel conversion actions rather than flooding the interface with its indigo identity color. Large Inter Variable headings compress at 48px/510 with negative tracking, while compact 13px navigation and embedded product previews create a tool-like layer beneath the editorial story.

The distinctive part is the boundary between public marketing and inspectable product demonstration. The homepage embeds real-looking issue, menu, comment, and control compositions, but those samples do not authorize claims about every authenticated workspace state. Six safe menu expansions established current open/selected behavior for public nav and the embedded preview. Berkeley Mono was visibly used for six technical input/text elements. Tiempos Headline appeared once on a surface-local heading and is documented as an observation rather than promoted as the UI family. Linear's official Method and brand pages provide philosophy and identity context separately.

**Key Characteristics:**
- Dark-native public canvas with narrow neutral luminance hierarchy
- Loaded Inter Variable across 1,728 visible elements; Berkeley Mono in technical preview roles
- Light-steel pill as the main public CTA; indigo retained as identity evidence
- 6px embedded product controls, 8px cards/menu rows, full-pill public actions
- Current focus/hover/pressed and menu-open states captured across four routes

## 2. Color Palette & Roles

- **Identity indigo** (`#5e6ad2`): official/live brand-defining accent, not the default public CTA fill.
- **Canvas** (`#08090a`): repeated current dark background.
- **Foreground** (`#f7f8f8`), **secondary** (`#d0d6e0`), **muted** (`#8a8f98`), **quiet** (`#62666d`): current information hierarchy.
- **Primary public action** (`#e5e5e6`) with `#08090a` content.
- **Hairline** (`#1c1d1e`): 8% white composited on `#08090a`, the current embedded/product boundary.

Neon lime is retained only as a captured customer-card editorial sibling, not a universal action or semantic token. Prior hover indigo and generic success colors are omitted without matching current interaction evidence.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Public Linear surfaces and embedded product demonstrations establish Inter Variable and Berkeley Mono roles. |
| Live surface-use | Inter Variable loaded/high, 1,728 uses; Berkeley Mono loaded/high, six uses; Tiempos Headline loaded/medium, one heading use. |
| Official distributed asset | These first-party webfont files are not assumed redistributable. |
| Declared-only | SF Pro and system fallbacks remain fallback declarations. |
| Unresolved | Authenticated workspace and native/desktop overrides remain unresolved. |

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Section display | Inter Variable | 48px | 510 | 48px | -1.056px |
| Feature heading | Inter Variable | 24px | 590 | 31.92px | -0.288px |
| Method body | Inter Variable | 15px | 400 | 24px | -0.165px |
| Navigation | Inter Variable | 13px | 400 | 19.5px | -0.13px |
| Technical preview | Berkeley Mono | 14px | 400 | 24px | normal |

## 4. Component Stylings

### Current verified components

#### Primary and secondary public actions
- Primary: `#e5e5e6` / `#08090a`; secondary: 5% white / `#f7f8f8`
- Full-pill, 44px height, 0 20px, Inter 16px/510

#### Navigation trigger
- Transparent, `#8a8f98`, full-pill, 32px, 0 12px, Inter 13px/400
- Focus, hover, pressed, expanded, and menu-open states observed

#### Embedded product menu row
- Transparent / `#f7f8f8`, 8px radius, `12px 16px 12px 12px`
- Selected/open state captured; nested menu items use a separate 6px compact geometry

#### Customer story card
- Transparent surface, near-white copy, 8px radius, `24px 32px`
- The lime sibling is an editorial variant, not a universal card token

Inputs, command palettes, authenticated issue controls, success badges, and dialogs are omitted from canonical machine components unless current evidence establishes their exact role.

## 5. Layout Principles

- Use a deep continuous canvas and create hierarchy through luminance before borders.
- Keep public conversion actions pill-shaped; keep embedded product controls compact at 6–8px.
- Let large editorial typography and product demonstration alternate rather than stacking generic cards.
- Preserve generous 24–32px card padding where customer stories become full compositions.

## 6. Depth & Elevation

Depth is low-contrast and layered: faint inset rings and small multi-layer action shadows on dark surfaces. The primary action shadow is role-specific, not a default for every control.

## 7. Do's and Don'ts

### Do
- Use the verified neutral hierarchy and distinguish public actions from product-preview controls.
- Keep Inter Variable's observed 510/590 weights and negative display tracking.
- Treat open/selected states as component-local evidence.

### Don't
- Do not make neon lime or indigo the default CTA everywhere.
- Do not export embedded preview states as authenticated-app facts.
- Do not invent command palettes, status colors, or errors from Linear-like convention.

## 8. Responsive Behavior

Public routes retain the dark canvas, pill navigation/actions, and type hierarchy as sections reflow. Authenticated workspace breakpoints and desktop-client layout remain unresolved.

## 9. Agent Prompt Guide

> Build a precise dark product-development surface with a `#08090a` canvas, near-white and stepped gray text, Inter Variable, restrained negative tracking, light-steel full-pill primary actions, and compact 6–8px product-preview controls. Use only verified menu-open/selected states and omit speculative workspace components.

## 10. Voice & Tone

Linear's public language is concise, opinionated, and operational. Describe how teams plan and build with direct verbs and clear tradeoffs. Product copy should name the work object, its state, and the next decision rather than celebrate process for its own sake. Method content may be more declarative, but it should still connect principles to how a team actually plans, discusses, and ships work. Keep labels short. Avoid decorative productivity claims and unsupported speed metrics; prioritize focus, momentum, quality, and deliberate workflow.

## 11. Brand Narrative

Linear presents software development as a system that benefits from clear principles, not a collection of disconnected tickets. Its Method turns product philosophy into explicit operating guidance, while the dark public interface and embedded product demonstrations make that discipline visible. The brand's indigo identifies Linear, but neutral structure does most of the interface work. That restraint supports the company's larger narrative: product teams need a shared environment where issues, projects, feedback, and progress remain connected without adding operational noise. Public customer stories show the system in organizational context, while embedded product compositions demonstrate how compact menus, labels, and states can make dense work legible. The visual language therefore combines editorial conviction with tool-like precision. It should feel fast because hierarchy is clear, not because motion or unsupported performance claims are added.

## 12. Principles

1. **Build with focus.** Reduce visual and operational noise around the next important action.
2. **Make progress legible.** Hierarchy and state should help teams understand momentum.
3. **Use opinionated defaults carefully.** Strong conventions should remain tied to verified roles.
4. **Separate story from product truth.** Marketing demos, Method, brand assets, and private workspaces are distinct evidence domains, even when they share the same visual language.

## 13. Personas

Public material establishes task contexts only:
- A product or engineering lead planning work and reviewing progress.
- A software maker creating, prioritizing, or discussing issues.
- A cross-functional team evaluating workflow, pricing, or migration fit.

Project-specific names, team sizes, roles, metrics, and company stages are intentionally unspecified and must come from the product brief.

## 14. States

Public nav focus/hover/pressed and expanded/menu-open states are verified. Embedded menu selected/open is verified. Loading, empty, error, success, disabled workflow, and command-palette states remain absent.

## 15. Motion & Easing

No reusable current duration or easing curve is promoted. Menu expansion proves state change, not a universal animation token.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://linear.app/ ; https://linear.app/method ; https://linear.app/customers ; https://linear.app/pricing ; https://linear.app/brand
**Tier 2 attempts:** getdesign.md/linear supplied a directory snippet; Refero was used only to discover historical lime/indigo and radius conflicts
**Conflicts unresolved:** none
