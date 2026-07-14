---
id: zendesk
name: Zendesk Garden
country: US
category: saas
homepage: "https://garden.zendesk.com/"
primary_color: "#1f73b7"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=garden.zendesk.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Zendesk Garden
  url: "https://garden.zendesk.com/"
  type: system
  description: Zendesk's public design-system documentation.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: design-system-home, url: "https://garden.zendesk.com/", inspected: "2026-07-13" }
    - { id: surface-2, kind: component-documentation, url: "https://garden.zendesk.com/components/button", inspected: "2026-07-13" }
    - { id: surface-3, kind: color-documentation, url: "https://garden.zendesk.com/design/color", inspected: "2026-07-13" }
  sources:
    - { id: garden-home-live, kind: product-surface, url: "https://garden.zendesk.com/", captured: "2026-07-13" }
    - { id: garden-button-live, kind: official-doc, url: "https://garden.zendesk.com/components/button", captured: "2026-07-13" }
    - { id: garden-color-live, kind: product-surface, url: "https://garden.zendesk.com/design/color", captured: "2026-07-13" }
    - { id: garden-home-official, kind: official-doc, url: "https://garden.zendesk.com/", captured: "2026-07-13" }
    - { id: garden-palette-official, kind: official-doc, url: "https://garden.zendesk.com/design/palette/", captured: "2026-07-13" }
    - { id: zendesk-company, kind: official-doc, url: "https://www.zendesk.com/company/", captured: "2026-07-13" }
    - { id: zendesk-signin-refresh, kind: official-doc, url: "https://support.zendesk.com/hc/en-us/articles/9850316391322-Announcing-an-updated-look-to-the-team-member-and-end-user-sign-in-experiences", captured: "2026-07-13" }
    - { id: garden-github, kind: brand-asset, url: "https://github.com/zendeskgarden", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &button { surface_id: surface-2, source_id: garden-button-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": &home { surface_id: home, source_id: garden-home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.muted": *button
    "tokens.colors.border": &color { surface_id: surface-3, source_id: garden-color-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.success": *color
    "tokens.colors.danger": *button
    "tokens.typography.display.size": *home
    "tokens.typography.display.weight": *home
    "tokens.typography.display.lineHeight": *home
    "tokens.typography.display.use": *home
    "tokens.typography.section-heading.size": *button
    "tokens.typography.section-heading.weight": *button
    "tokens.typography.section-heading.lineHeight": *button
    "tokens.typography.section-heading.use": *button
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *button
    "tokens.spacing.lg": *button
    "tokens.spacing.xl": *button
    "tokens.rounded.control": *button
    "tokens.rounded.icon-control": *home
    "tokens.components.primary-doc-button.type": *button
    "tokens.components.primary-doc-button.bg": *button
    "tokens.components.primary-doc-button.fg": *button
    "tokens.components.primary-doc-button.radius": *button
    "tokens.components.primary-doc-button.padding": *button
    "tokens.components.primary-doc-button.height": *button
    "tokens.components.primary-doc-button.states": *button
    "tokens.components.primary-doc-button.use": *button
    "tokens.components.icon-button.type": *button
    "tokens.components.icon-button.fg": *button
    "tokens.components.icon-button.radius": *button
    "tokens.components.icon-button.height": *button
    "tokens.components.icon-button.states": *button
    "tokens.components.icon-button.use": *button
    "tokens.components.sidebar-list-item.type": *button
    "tokens.components.sidebar-list-item.fg": *button
    "tokens.components.sidebar-list-item.radius": *button
    "tokens.components.sidebar-list-item.height": *button
    "tokens.components.sidebar-list-item.use": *button
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Selector-backed values from the supplied Garden home, button-documentation, and color-documentation capture only. The observed system-ui stack is not a Zendesk font token; no interaction state is promoted because interactionCount is 0."
  colors:
    primary: "#1f73b7"
    canvas: "#ffffff"
    foreground: "#293239"
    muted: "#5c6970"
    border: "#b0b8be"
    success: "#4eab89"
    danger: "#cd3642"
  typography:
    display: { size: 48, weight: 700, lineHeight: 1.17, use: "Observed 48px/700/56px h1 on the supplied Garden home route" }
    section-heading: { size: 36, weight: 600, lineHeight: 1.22, use: "Observed documentation h2 on the supplied button route" }
    body: { size: 14, weight: 400, lineHeight: 1.43, use: "Repeated body, navigation, list-item, and control text; family omitted because the capture resolves only to a system stack" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 20, xl: 36 }
  rounded: { control: 4, icon-control: 100 }
  components:
    primary-doc-button: { type: button, bg: "#1f73b7", fg: "#ffffff", radius: 4, padding: "0px 15px", height: 40, states: "Default only; no hover, focus, pressed, disabled, or loading state was observed", use: "Native button on the public button-documentation route; selector surface-2::[data-omd-capture=\"90\"]" }
    icon-button: { type: button, fg: "#5c6970", radius: 4, height: 40, states: "Default only; no hover, focus, pressed, disabled, or loading state was observed", use: "Native icon button on the public button-documentation route; selector surface-2::[data-omd-capture=\"64\"]" }
    sidebar-list-item: { type: listItem, fg: "#293239", radius: 0, height: 32, use: "Static documentation sidebar row; selector surface-2::li" }
  components_harvested: true
---

# Zendesk Garden — Design Reference

## 1. Visual Theme & Atmosphere

Zendesk builds customer-service software, and Garden is its public design system: the company calls it the source of truth for the tools, standards, and practices used to build Zendesk products. The system’s distinctive expression is deliberate rather than ornamental. Its own introduction describes an evolving shared library that joins design, content strategy, and engineering, while the supplied documentation capture makes that coordination visible through a white workspace, deep blue actions, dark gray reading text, restrained 4px controls, and dense technical navigation. Garden 9 is the current major version of the public site, so this reference treats the captured routes as current documentation-surface evidence, not as a proxy for signed-in Zendesk product UI or the separate corporate marketing site.

Zendesk’s company story gives the system a useful product context: the company says it began with the idea of bringing calm to the chaos of customer service and now frames its mission as making business complexity easier so companies and customers can connect. The public Garden material carries that practical, connection-oriented ambition into a reusable interface library. A 2025 official sign-in refresh also says Zendesk is aligning experiences with its current UI frameworks and brand standards; it establishes ongoing product evolution, but it supplies no token values for this reference.

**Key characteristics:**

- White documentation surfaces with `#293239` as the repeatedly measured dark text.
- `#1f73b7` for the observed native primary documentation button and repeated links.
- A compact `4px` control corner, alongside a `100px` circular icon-control observation.
- Measured editorial hierarchy: 48px/700 display on home, 36px/600 section headings in the button documentation, and repeated 14px/400 reading/control text.
- System-ui is the only resolved computed family. It is retained as a runtime observation, not represented as a Zendesk brand font.

## 2. Color Palette & Roles

### Selector-backed current-route values

- **Primary blue** (`#1f73b7`) — native button fill on the captured button documentation route and repeated link text across the supplied routes. Garden’s official palette names the same value blue-700.
- **Canvas** (`#ffffff`) — captured header and page background.
- **Foreground** (`#293239`) — recurring body, heading, list, and navigation text; Garden’s official palette names it grey-900.
- **Muted control text** (`#5c6970`) — observed icon-button text and border color; Garden’s official palette names it grey-700.
- **Light border** (`#b0b8be`) — observed input border; Garden’s official palette names it grey-400.
- **Success green** (`#4eab89`) — recurring observed green text/border value; Garden’s official palette names it green-500.
- **Danger red** (`#cd3642`) — observed button/documentation text and fill value; Garden’s official palette names it red-700.

Garden’s Palette page distinguishes UI colors from brand colors and says its UI colors are designed for interface structure, actions, validation, and accessibility. That documentation provides semantic context; the seven token roles above remain limited to values seen in the supplied computed-style packet.

## 3. Typography Rules

### Evidence classes

| Evidence class | Finding and boundary |
|---|---|
| Official product-use | Garden officially documents typography components and a size scale, but the supplied material does not establish a named Zendesk product font family. |
| Live computed surface-use | All 733 captured uses resolve to an operating-system `system-ui` stack across body, headings, buttons, inputs, list items, and text. This is a high-confidence runtime fact, not a branded-family fact. |
| Official distributed brand asset | No official font asset was supplied or discovered in the packet’s `fontOrLicenseUrls`; no font file is promoted. |
| Declared-only | None recorded in the supplied evidence. |
| System / unresolved | The captured `system-ui, -apple-system, ...` stack has no Zendesk-served source URL. Do not substitute it while presenting a result as a Zendesk typeface. |

### Measured public documentation hierarchy

| Role | Size | Weight | Line height | Boundary |
|---|---:|---:|---:|---|
| Home display h1 | 48px | 700 | 52–56px | two captured documentation-route samples; the 1.17 token uses the home route’s 56px sample |
| Documentation section h2 | 36px | 600 | 44px | button-documentation sections |
| Repeated body/control text | 14px | 400 | 20px | navigation, lists, text, and native controls across supplied routes |

The 48px display token uses the home h1’s 56px line-height sample; the packet also contains a 52px h1 on the button-documentation route. The table preserves that measured sibling rather than averaging it into a fabricated universal style.

## 4. Component Stylings

### Documentation primary action

**Default native button**
- Background: #1f73b7
- Text: #ffffff
- Radius: 4px
- Padding: 0px 15px
- Height: 40px
- Use: Public button-documentation native button; selector surface-2::[data-omd-capture="90"]

Observed-state summary: default only. The packet records zero interactions, so hover, focus, pressed, disabled, loading, and error values are not asserted.

### Documentation icon control

**Default native icon button**
- Text: #5c6970
- Radius: 4px
- Height: 40px
- Use: Public button-documentation native icon button; selector surface-2::[data-omd-capture="64"]

Observed-state summary: default only. No interactive state is in the supplied capture.

### Documentation sidebar row

**Static list item**
- Text: #293239
- Radius: 0px
- Height: 32px
- Use: Public documentation sidebar `li`; selector surface-2::li

This is a list item, not a button: the representative evidence is a static `li` row. The capture’s linked anchors are likewise not reclassified as buttons merely because they participate in navigation.

## 5. Layout Principles

The supplied 1440px documentation capture clusters spacing at 4px, 8px, 12px, 20px, and 36px. These values are retained as observed spacing tokens, not asserted as a complete Garden spacing scale. The public header is 80px high with 16px horizontal padding; the primary documentation button is 40px high with 15px horizontal padding. The sidebar-list observation is 32px high, while a nearby typography list observation is 20px high. Keep those geometries surface-local unless another selector proves a shared rule.

## 6. Depth & Elevation

The chosen canonical components are shadow-free in the supplied packet. The header alone has a measured `0px 16px 24px rgba(10, 13, 14, 0.04)` shadow, which is retained as raw proof in the verification notes but not promoted into a general elevation token. No universal card, dialog, popover, or floating-layer recipe is established.

## 7. Do's and Don'ts

### Do

- Use the selector-backed blue/white primary button only as the documented 40px native-button observation.
- Keep the documentation hierarchy compact: dark gray reading text, 14px/400 repeated text, and the measured display/section scales.
- Use the official Garden palette’s semantic guidance as context while retaining only supplied-packet values as machine tokens.
- Preserve the distinction between public Garden documentation and Zendesk’s marketing or signed-in product surfaces.

### Don't

- Do not call the captured system-ui stack a Zendesk brand font or use it as a visual substitute for an unknown proprietary family.
- Do not turn an anchor or a static documentation row into a `button` component without native button semantics.
- Do not invent hover, focus, pressed, disabled, loading, validation, menu, dialog, toast, or error styles from class names or product expectations.
- Do not generalize the header shadow into cards, dialogs, or all navigation surfaces.

## 8. Responsive Behavior

Only 1440×900 supplied renders are available. They establish the captured desktop values, including the 80px header and the listed control geometries. No mobile viewport, breakpoint, collapsed navigation, touch target behavior, or interaction trace was supplied, so none is claimed.

## 9. Agent Prompt Guide

- Build a public documentation primary action only when its context is equivalent to the captured native button: `#1f73b7`, white text, 4px radius, 40px height, and 0px 15px padding.
- Use `#293239` for observed documentation foreground text and `#5c6970` for the captured icon-control treatment; retain system-font uncertainty rather than naming a Zendesk family.
- Treat the 32px sidebar row as a `listItem` rather than an action button.
- When implementation requires focus, error, loading, or disabled behavior, design it accessibly for the target product but label it as a new implementation decision, not an observed Garden value.

## 10. Voice & Tone

**Voice adjectives:** practical · cohesive · outcome-oriented

| Context | Evidence-backed direction |
|---|---|
| Design-system guidance | Explain a tool, standard, or best practice in terms of the product work it enables. |
| Component documentation | Prefer direct, functional labels and describe use before implementation detail. |
| Customer-service context | Connect the UI decision to less complex, more helpful customer or employee interactions. |

Illustrative, not copied microcopy:

- “Use the component that makes the next task clear.”
- “Keep the action visible and the supporting detail close.”
- “Document the constraint so teams can make the same choice consistently.”

These are fresh examples derived from Garden’s stated role as a shared knowledge library and Zendesk’s customer-connection mission; they are not quotations or observed product strings.

## 11. Brand Narrative

Zendesk says its origin was a literal desk—more exactly a door or kitchen table—and connects that origin to an early ambition of bringing calm to chaotic customer service. Its current company framing is broader: simplify business complexity and help companies and customers make better connections. That is the company context for Garden, not evidence that the Garden documentation routes reproduce every Zendesk product surface.

Garden is the operational bridge from that mission to interface work. Zendesk describes it as the source of truth for product-building tools, standards, and best practices, and as an evolving library shared across design, content strategy, and engineering. The current public site announces Garden 9, while Zendesk’s 2025 sign-in update describes continued alignment with current UI frameworks and brand standards. Together, those first-party sources support a story of an actively maintained system and an evolving product presentation; they do not authorize unobserved UI tokens.

## 12. Principles

1. **Treat shared knowledge as product infrastructure.** Garden explicitly joins design, content strategy, and engineering. *UI implication:* document selector-backed defaults and boundaries together, rather than exporting isolated colors.
2. **Make purposeful UI legible before decorative.** Garden frames its design foundation as purposeful UI. *UI implication:* retain the observed white field, dark reading text, and compact geometry before adding visual effects.
3. **Use color with a documented role.** The official palette separates UI and brand color and connects primary UI colors to structure, action, and validation. *UI implication:* reserve `#1f73b7` for the observed documentation action rather than treating every palette color as a primary CTA.
4. **Keep public evidence domains separate.** Garden docs, Zendesk corporate storytelling, and signed-in product UI answer different questions. *UI implication:* do not let company narrative or a sign-in-refresh announcement create CSS token claims.

## 13. Personas

Zendesk’s official Garden introduction names the disciplines that share this library; its company page names companies and customers as the people whose connections the product seeks to improve. These are stakeholder groups, not fictional or researched personas:

- **Product designers:** need documented foundations and patterns to make purposeful UI consistently.
- **Content strategists:** need the same shared guidance so interface language and structure reinforce one another.
- **Engineers:** need component instructions and standards that can be implemented without turning adjacent examples into new rules.
- **Service teams and their customers:** are the downstream audience for clearer, less complex customer interactions described by Zendesk’s company mission.

## 14. States

The supplied runtime packet has `interactionCount: 0`; it establishes no visual interactive or validation state values. Garden’s public patterns documentation does describe purpose-level state guidance, which is retained here without inventing colors, radii, timing, or component-state geometry:

| Category | Official guidance / evidence boundary |
|---|---|
| Empty | No empty-state visual recipe was supplied in the packet; omit a token rather than infer one. |
| Loading | Garden’s loader pattern differentiates skeletons for predictable content and spinners for unpredictable content. No computed loader styling was captured. |
| Error | Garden lists error handling as a pattern, but no error value or component state was captured. |
| Success | The supplied capture includes green `#4eab89` as a color observation, not a verified success-message component recipe. |
| Skeleton | Use only the official purpose-level guidance above; no skeleton geometry, color, or animation token is claimed. |
| Disabled | No disabled control state was captured. Do not derive one from the static native-button variants. |

## 15. Motion & Easing

No duration, easing curve, transition, animation, or interaction trace appears in the supplied packet. Garden’s public loader documentation discusses when a loader should appear and remain visible, but it does not supply a measured timing token in this evidence set. Motion and easing tokens are therefore omitted.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://garden.zendesk.com/` (design-system home), `https://garden.zendesk.com/components/button` (public component documentation), `https://garden.zendesk.com/design/color` (public color documentation), `https://garden.zendesk.com/design/palette/` (official palette semantics), `https://www.zendesk.com/company/` (company context), `https://support.zendesk.com/hc/en-us/articles/9850316391322-Announcing-an-updated-look-to-the-team-member-and-end-user-sign-in-experiences` (current-evolution context)
**Tier 2 sources:** `https://getdesign.md/zendesk` (attempted; built-in open returned an internal error), `https://styles.refero.design/?q=zendesk` (attempted; built-in open returned an internal error)
**Conflicts unresolved:** none
