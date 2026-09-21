---
id: smarthr
name: SmartHR
country: JP
category: saas
homepage: "https://smarthr.jp"
primary_color: "#00C4CC"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=smarthr.jp&sz=128"
verified: "2026-09-21"
omd: "0.1"
ds:
  name: SmartHR Design System
  url: "https://smarthr.design"
  type: system
  description: SmartHR's fully public, governance-driven design system — primitive and semantic tokens, accessibility-first components, and inclusive UI guidelines published openly at smarthr.design.
verification_v2:
  schema: 2
  checked: "2026-09-21"
  surfaces:
    - { id: sds, kind: official-doc, url: "https://smarthr.design/products/design-tokens/", inspected: "2026-09-21" }
    - { id: ui-story, kind: product-surface, url: "https://story.smarthr-ui.dev/", inspected: "2026-09-21" }
  sources:
    - { id: sds-tokens-live, kind: official-doc, url: "https://smarthr.design/products/design-tokens/", captured: "2026-09-21" }
    - { id: ui-button-variant, kind: product-surface, url: "https://story.smarthr-ui.dev/iframe.html?id=components-button--variant&viewMode=story", captured: "2026-09-21" }
    - { id: ui-button-disabled, kind: product-surface, url: "https://story.smarthr-ui.dev/iframe.html?id=components-button--disabled&viewMode=story", captured: "2026-09-21" }
    - { id: ui-statuslabel-type, kind: product-surface, url: "https://story.smarthr-ui.dev/iframe.html?id=components-statuslabel--type&viewMode=story", captured: "2026-09-21" }
    - { id: ui-input, kind: product-surface, url: "https://story.smarthr-ui.dev/iframe.html?id=components-input--playground&viewMode=story", captured: "2026-09-21" }
    - { id: smarthr-ui-repo, kind: official-doc, url: "https://github.com/kufu/smarthr-ui", captured: "2026-09-21" }
  conflicts: []
  claims:
    tokens.colors.body: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.colors.border: { surface_id: ui-story, source_id: ui-button-variant, method: computed-style, captured: "2026-09-21" }
    tokens.colors.border-hover: { surface_id: ui-story, source_id: ui-button-variant, method: computed-style, captured: "2026-09-21" }
    tokens.colors.brand: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.colors.canvas: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.colors.danger: { surface_id: ui-story, source_id: ui-button-variant, method: computed-style, captured: "2026-09-21" }
    tokens.colors.danger-hover: { surface_id: ui-story, source_id: ui-button-variant, method: computed-style, captured: "2026-09-21" }
    tokens.colors.disabled-bg: { surface_id: ui-story, source_id: ui-button-disabled, method: computed-style, captured: "2026-09-21" }
    tokens.colors.disabled-fg: { surface_id: ui-story, source_id: ui-button-disabled, method: computed-style, captured: "2026-09-21" }
    tokens.colors.foreground: { surface_id: ui-story, source_id: ui-button-variant, method: computed-style, captured: "2026-09-21" }
    tokens.colors.hairline: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.colors.info: { surface_id: ui-story, source_id: ui-statuslabel-type, method: computed-style, captured: "2026-09-21" }
    tokens.colors.link: { surface_id: ui-story, source_id: ui-button-variant, method: computed-style, captured: "2026-09-21" }
    tokens.colors.muted: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.colors.on-primary: { surface_id: ui-story, source_id: ui-button-variant, method: computed-style, captured: "2026-09-21" }
    tokens.colors.primary: { surface_id: ui-story, source_id: ui-button-variant, method: computed-style, captured: "2026-09-21" }
    tokens.colors.primary-hover: { surface_id: ui-story, source_id: ui-button-variant, method: computed-style, captured: "2026-09-21" }
    tokens.colors.success: { surface_id: ui-story, source_id: ui-statuslabel-type, method: computed-style, captured: "2026-09-21" }
    tokens.colors.surface: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.colors.surface-hover: { surface_id: ui-story, source_id: ui-button-variant, method: computed-style, captured: "2026-09-21" }
    tokens.colors.text-grey: { surface_id: ui-story, source_id: ui-statuslabel-type, method: computed-style, captured: "2026-09-21" }
    tokens.colors.warning: { surface_id: ui-story, source_id: ui-statuslabel-type, method: computed-style, captured: "2026-09-21" }
    tokens.components.button-danger.bg: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.border: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.fg: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.font: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.hover: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.padding: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.pressed: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.radius: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.type: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.use: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.bg: { surface_id: ui-story, source_id: ui-button-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.disabled: { surface_id: ui-story, source_id: ui-button-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.fg: { surface_id: ui-story, source_id: ui-button-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.radius: { surface_id: ui-story, source_id: ui-button-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.type: { surface_id: ui-story, source_id: ui-button-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.use: { surface_id: ui-story, source_id: ui-button-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-ghost.fg: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-ghost.font: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-ghost.hover: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-ghost.pressed: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-ghost.radius: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-ghost.type: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-ghost.use: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.bg: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.border: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.fg: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.font: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.hover: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.padding: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.pressed: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.radius: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.type: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.use: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.bg: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.border: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.fg: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.font: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.hover: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.padding: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.pressed: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.radius: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.type: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.use: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-text.fg: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-text.font: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-text.hover: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-text.pressed: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-text.radius: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-text.type: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-text.use: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.bg: { surface_id: ui-story, source_id: ui-input, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.border: { surface_id: ui-story, source_id: ui-input, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.fg: { surface_id: ui-story, source_id: ui-input, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.focus: { surface_id: ui-story, source_id: ui-input, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.radius: { surface_id: ui-story, source_id: ui-input, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.type: { surface_id: ui-story, source_id: ui-input, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.use: { surface_id: ui-story, source_id: ui-input, method: live-inspect, captured: "2026-09-21" }
    tokens.components.status-label.bg: { surface_id: ui-story, source_id: ui-statuslabel-type, method: live-inspect, captured: "2026-09-21" }
    tokens.components.status-label.border: { surface_id: ui-story, source_id: ui-statuslabel-type, method: live-inspect, captured: "2026-09-21" }
    tokens.components.status-label.fg: { surface_id: ui-story, source_id: ui-statuslabel-type, method: live-inspect, captured: "2026-09-21" }
    tokens.components.status-label.type: { surface_id: ui-story, source_id: ui-statuslabel-type, method: live-inspect, captured: "2026-09-21" }
    tokens.components.status-label.use: { surface_id: ui-story, source_id: ui-statuslabel-type, method: live-inspect, captured: "2026-09-21" }
    tokens.rounded.full: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.rounded.md: { surface_id: ui-story, source_id: ui-button-variant, method: live-inspect, captured: "2026-09-21" }
    tokens.spacing.base: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.lg: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.md: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.sm: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.xl: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.xs: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-10.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-10.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-11.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-11.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-12.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-12.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-13.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-13.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-14.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-14.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-15.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-15.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-16.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-16.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-18.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-18.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-20.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-20.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-24.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-24.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-26.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-26.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-28.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-28.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-36.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-36.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-48.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-48.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-52.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-52.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-54.size: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
    tokens.typography.size-54.use: { surface_id: sds, source_id: sds-tokens-live, method: computed-style, captured: "2026-09-21" }
tokens:
  source: live-extract
  extracted: "2026-09-21"
  colors:
    brand: "#00c4cc"
    primary: "#0077c7"
    primary-hover: "#0068ae"
    danger: "#e01e5a"
    danger-hover: "#ca1b51"
    canvas: "#ffffff"
    surface: "#f8f7f6"
    surface-hover: "#f2f2f2"
    foreground: "#23221e"
    text-grey: "#706d65"
    body: "#4e4c49"
    muted: "#aaa69f"
    border: "#d6d3d0"
    border-hover: "#cac6c2"
    hairline: "#edebe6"
    success: "#0f7f85"
    warning: "#ffcc17"
    info: "#0077c7"
    link: "#0071c1"
    disabled-bg: "#f2f2f2"
    disabled-fg: "#c1bdb7"
    on-primary: "#ffffff"
  typography:
    size-10: { size: 10, use: "Smallest published step" }
    size-11: { size: 11, use: "Dense metadata" }
    size-12: { size: 12, use: "Helper and caption text" }
    size-13: { size: 13, use: "Dense table text" }
    size-14: { size: 14, use: "Secondary body" }
    size-15: { size: 15, use: "Body alternate" }
    size-16: { size: 16, use: "Base body and control text" }
    size-18: { size: 18, use: "Sub-heading" }
    size-20: { size: 20, use: "Section heading" }
    size-24: { size: 24, use: "Page heading" }
    size-26: { size: 26, use: "Large heading" }
    size-28: { size: 28, use: "Display heading" }
    size-36: { size: 36, use: "Marketing heading" }
    size-48: { size: 48, use: "Marketing display" }
    size-52: { size: 52, use: "Marketing display, large" }
    size-54: { size: 54, use: "Largest published step" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32 }
  rounded: { md: 6, full: 9999 }
  components:
    button-primary: { type: button, bg: "#0077c7", fg: "#ffffff", border: "1px solid #0077c7", radius: 6, padding: "12px 16px", font: "16px / 700", hover: "#0068ae", pressed: "#0068ae", use: "Single most important action — 42px tall." }
    button-secondary: { type: button, bg: "#ffffff", fg: "#23221e", border: "1px solid #d6d3d0", radius: 6, padding: "12px 16px", font: "16px / 700", hover: "#f2f2f2", pressed: "#f2f2f2", use: "Cancel or secondary action beside a primary." }
    button-danger: { type: button, bg: "#e01e5a", fg: "#ffffff", border: "1px solid #e01e5a", radius: 6, padding: "12px 16px", font: "16px / 700", hover: "#ca1b51", pressed: "#ca1b51", use: "Destructive action." }
    button-text: { type: button, fg: "#0071c1", radius: 6, font: "16px / 400", hover: "#f2f2f2", pressed: "#f2f2f2", use: "Low-emphasis inline action on a transparent fill." }
    button-ghost: { type: button, fg: "#23221e", radius: 6, font: "16px / 700", hover: "#f2f2f2", pressed: "#f2f2f2", use: "Neutral low-emphasis action on a transparent fill." }
    button-disabled: { type: button, bg: "#f2f2f2", fg: "#c1bdb7", radius: 6, disabled: "#f2f2f2", use: "Unavailable action — palette swap with cursor not-allowed, no opacity trick." }
    input: { type: input, bg: "#ffffff", fg: "#23221e", border: "1px solid #d6d3d0", radius: 6, focus: "outline ring", use: "Form text field, 42px tall." }
    status-label: { type: badge, bg: "#ffffff", fg: "#706d65", border: "1px solid #d6d3d0", use: "Status chip — 24px tall; semantic variants recolour text and border." }
  components_harvested: true
---

# Design System Inspiration of SmartHR

## 1. Visual Theme & Atmosphere

SmartHR is the cloud HR/labor-administration platform that quietly runs payroll, social-insurance paperwork, and employee records for a large share of Japanese SMEs — and its design language is built around a single, unfashionable virtue: **だれでも・効率よく・迷わずに** ("anyone, efficiently, without getting lost"). This is not a brand that wants to be admired; it wants to be *cleared through*. The screens are the boring, load-bearing infrastructure of someone's employment, and the design system treats that responsibility with the seriousness of a public utility. The result is one of the most rigorous, openly-published, accessibility-first design systems in Japan — the **SmartHR Design System** lives in full public view at `smarthr.design`, primitive tokens, semantic tokens, governance docs and all.

The signature color is **SmartHR Blue** (`#00C4CC`) — a bright cyan-teal that reads as fresh and approachable rather than corporate-blue or fintech-navy. It is paired with a warm near-black for text (`#23221F`, not pure `#000`) and an accent orange (`#FF9900`) used sparingly for emphasis. Crucially, SmartHR does **not** flood its product chrome with the brand cyan; the working surfaces are predominantly white and warm-gray Stone neutrals, with cyan reserved for primary actions and brand moments. The palette is then organized into ten named, four-step color families (Stone, Aqua, Sakura, Momiji, Sunlight, Grass, Sky, Marine, Galaxy, Earth) — a system that lets product teams pick semantically (a green for success, a red for danger) without ever inventing an ad-hoc hex.

Typography is deliberately **typeface-agnostic** — SmartHR ships no brand webfont and instead defers to the operating system's native font stack, because rendering Japanese, alphanumerics, and screen-reader output correctly on every device matters more than a bespoke wordmark. The type scale is a clean rem-based ladder (XXS 10.67px → XXL 32px). The radius scale is tiny and restrained (`s` 4px / `m` 6px / `l` 8px / `full` 9999px). Everything about the system says: this is a tool, the tool should disappear, and no one should ever have to think about the UI while filing their own resignation paperwork or onboarding their first job.

**Key Characteristics:**
- **SmartHR Blue** `#00C4CC` (cyan-teal) as the brand primary — fresh and approachable, never navy-corporate
- Warm near-black text `#23221F` (not pure black) on white + warm-gray Stone neutrals
- Accent **Orange** `#FF9900` used sparingly for emphasis/highlight moments
- Ten named four-step color families (Stone / Aqua / Sakura / Momiji / Sunlight / Grass / Sky / Marine / Galaxy / Earth) — pick semantically, never ad-hoc
- **Typeface-agnostic** — no brand webfont; defers to OS-native font stack for correct JP + alphanumeric + a11y rendering
- rem-based type scale: XXS `0.667rem`/XS `0.75rem`/S `0.857rem`/M `1rem`/L `1.2rem`/XL `1.5rem`/XXL `2rem`
- Small restrained radius scale: `s` 4px / `m` 6px / `l` 8px / `full` 9999px
- Token architecture split into **primitive tokens** (raw values) and **semantic tokens** (role-mapped) — the canonical two-layer model
- Accessibility-first: explicit a11y guidelines, contrast governance, screen-reader-respecting copy
- The whole system is **fully public** at smarthr.design — governance, principles, components, write rules all open

## Primary tasks

- File social insurance and year-end tax paperwork digitally
- Enter your bank details and address as a new hire
- Look up an employee, then clear the filter when nothing matches
- Submit an application and get a quiet confirmation

## 2. Color Palette & Roles

Two first-party surfaces were measured on 2026-09-21 and they are **not interchangeable**:
`smarthr.design` (the design system's own site, which publishes 22 `--color-*` custom
properties) and `story.smarthr-ui.dev` (the official smarthr-ui Storybook — 988 stories,
144 components — where the values are compiled into Tailwind `shr-` utility classes and
must be read off rendered components).

### Brand

- **SmartHR Blue** (`#00c4cc`) — `--color-smarthr-blue`. The corporate aqua. **It is not the
  primary button colour** — see below. Recorded as the brand mark colour.

### Interactive

Measured on the smarthr-ui Button `variant` story:

- **Primary** (`#0077c7`) — primary button fill; hover and pressed both `#0068ae`. This is
  `--color-bg-blue`, *not* the brand aqua.
- **Danger** (`#e01e5a`) — destructive fill (`--color-danger`); hover and pressed `#ca1b51`.
- **Link** (`#0071c1`) — the text-button foreground.
- **Surface Hover** (`#f2f2f2`) and **Border Hover** (`#cac6c2`) — the neutral hover pair
  shared by secondary, text and ghost buttons.
- **Disabled** — fill `#f2f2f2`, text `#c1bdb7`, cursor `not-allowed`. A palette swap, not an
  opacity trick.

### Stone (neutral family)

- **Canvas** (`#ffffff`) — `--color-white`.
- **Surface** (`#f8f7f6`) — `--color-light-grey-3`, the page wash behind cards.
- **Border** (`#d6d3d0`) — `--color-light-grey-1`. Measured identically on both surfaces.
- **Hairline** (`#edebe6`) — `--color-divider`.
- **Muted** (`#aaa69f`) — `--color-light-grey-4`.
- **Body** (`#4e4c49`) — `--color-dark-grey-1`.
- **Text Grey** (`#706d65`) — `--color-text-grey`; measured as the StatusLabel resting text.

### Text

- **Foreground** (`#23221e`) — measured on rendered smarthr-ui components.
  **The two surfaces disagree by one unit here**: `smarthr.design` declares
  `--color-text-black: #23221f` and paints it 440 times, while smarthr-ui components compute
  `#23221e`. Both are SmartHR's; the component value is recorded because it is what products
  render. The docs value is kept in the conflict matrix rather than averaged away.

### Semantic Color Families

Measured on the smarthr-ui StatusLabel `type` story — this is the real semantic set:

- **Info** (`#0077c7`) — same value as the primary action.
- **Success** (`#0f7f85`) — a **teal**, `--color-nav-active`, not a green.
- **Error** (`#e01e5a`) — same value as the danger action.
- **Warning** (`#ffcc17`) — a yellow fill carrying `#23221e` text, the only semantic variant
  that fills rather than outlines.

## 3. Typography Rules

### Font Stack

**SmartHR publishes no brand typeface token.** The design system's token set contains
`--font-size-*` and `--leading-*` but no font-family entry, so no family is recorded here —
the field is absent, not substituted.

What was observed, kept separate by surface:

- **smarthr-ui components** compute `system-ui` — the OS UI font. A deliberate choice for a
  dense B2B product, but a system stack is not promoted to a brand face.
- **smarthr.design** renders `SDSYuGothic`, a webfont scoped to the design-system site.
- **smarthr.jp** (corporate marketing) renders `AdjustedYuGothic`.

Three surfaces, three different faces, none of them a published product-font token.

### Type Scale (semantic font-size tokens)

Read live from `smarthr.design`; the tokens are named by their pixel value and expressed
in rem:

| Token | rem | px |
|---|---|---|
| `--font-size-10` … `--font-size-16` | .625 / .688 / .75 / .813 / .875 / .938 / 1 | 10 · 11 · 12 · 13 · 14 · 15 · 16 |
| `--font-size-18` … `--font-size-28` | 1.125 / 1.25 / 1.5 / 1.625 / 1.75 | 18 · 20 · 24 · 26 · 28 |
| `--font-size-36` … `--font-size-54` | 2.25 / 3 / 3.25 / 3.375 | 36 · 48 · 52 · 54 |

Sixteen steps. Control text measures **16px** on rendered buttons and inputs.

### Line Heights (leading tokens)

- `--leading-normal` **1.5** — body and running text.
- `--leading-tight` **1.25** — headings and dense rows.

Only two leading tokens are published.

### Conventions
- **16px is the control baseline**: buttons and inputs both compute 16px, buttons at weight
  700 and inputs at 400.
- **Weight carries emphasis, not size**: the filled and neutral buttons share 16px and differ
  by weight and fill.
- **The scale is named by pixels**: a token is `--font-size-24`, not `--font-size-lg`, so the
  intended size is unambiguous at the call site.

## 4. Component Stylings

### Buttons

Measured on the smarthr-ui `variant` and `disabled` stories, pointer parked between
readings. All variants share **42px height, 6px radius, `12px 16px` padding and 16px text**;
they differ by fill, border and weight. **No variant changes on focus** — smarthr-ui draws
focus with a separate ring rather than restyling the control.

| Variant | Rest | Hover / Pressed | Weight |
|---|---|---|---|
| **Primary** | `#0077c7` fill, `#ffffff` text, `1px solid #0077c7` | `#0068ae` | 700 |
| **Secondary** | `#ffffff` fill, `#23221e` text, `1px solid #d6d3d0` | `#f2f2f2` fill, `#cac6c2` border | 700 |
| **Danger** | `#e01e5a` fill, `#ffffff` text | `#ca1b51` | 700 |
| **Text** | transparent, `#0071c1` text | `#f2f2f2` fill | 400 |
| **Ghost** | transparent, `#23221e` text | `#f2f2f2` fill | 700 |
| **On-dark** | transparent, `#ffffff` text and border | `rgba(3,3,2,0.15)` fill | 700 |
| **Disabled** | `#f2f2f2` fill, `#c1bdb7` text, `cursor: not-allowed` | — | 700 |

The disabled treatment is a **palette swap at full opacity**, so disabled text keeps its own
contrast rather than inheriting a dimmed parent.

### Inputs

- Rest: `#ffffff` fill, `#23221e` text, `1px solid #d6d3d0`, **6px radius, 42px tall**,
  16px / 400 — the same height and radius as a button, so a field and a button align on a row.
- Focus and pressed add an outline ring; no fill or border colour change was observed.

### Status labels

- 24px tall, `#ffffff` fill, `#706d65` text, `1px solid #d6d3d0` at rest. Semantic variants
  recolour **text and border together** (info `#0077c7`, success `#0f7f85`, error `#e01e5a`);
  warning is the exception and fills `#ffcc17` with `#23221e` text.

### Cards / Surfaces

**Base Surface**
- Background: `#FFFFFF`
- Border: `1px solid` Stone02 `#EDEBE6`
- Radius: `8px` (token `l`)
- Use: Content panels, dashboard cards on a Stone01 `#F8F7F6` page background

### Notifications / Status

**Info Notice**
- Background: Sky01 `#DDF2FB`
- Text: Sky04 `#1376A0`
- Radius: `4px`
- Use: Informational banners

**Success Notice**
- Background: Grass01 `#E6F2C8`
- Text: Grass04 `#378445`
- Use: Confirmation messages

**Warning Notice**
- Background: Sunlight01 `#FAF2D0`
- Text: Earth-dark / Sunlight04 `#F56121`
- Use: Caution messages

**Error Notice**
- Background: Momiji01 `#FFE7E5`
- Text: Momiji04 `#A53F3F`
- Use: Error / failure banners

### Badges / Chips

**Status Chip**
- Background: semantic family 01 tint
- Text: matching family 04 dark
- Radius: `full` (9999px) or `4px`
- Use: Employee status, application state — color-coded by semantic family

### Published component roster (144 published in Storybook; 8 measured here)

The SmartHR Design System publishes **61 components**, read from its own component index at
`https://smarthr.design/products/components/` on 2026-09-19. Names are given as the host
publishes them — the PascalCase identifiers of the `smarthr-ui` package, which is how the index
labels each card. No value, state or geometry below is asserted by this reference.

AccordionPanel, AppHeader, AppNavi, Badge, Base, BottomFixedArea, Browser, Button, Calendar, Checkbox, Chip, Combobox, DatePicker, DefinitionList, Dialog, Disclosure, DropZone, Dropdown, ErrorScreen, Fieldset, FileViewer, FloatArea, FormControl, Formatter, Header, Heading, Icon, InformationPanel, Input, InputFile, Layout, LineClamp, Loader, NotificationBar, PageCounter, Pagination, Picker, RadioButton, RadioButtonPanel, ResponseMessage, Scroller, SectioningContent, SegmentedControl, Select, SideMenu, SideNav, SmartHRAILogo, SmartHRLogo, SpreadsheetTable, StatusLabel, Stepper, Switch, TabBar, Table, Text, TextLink, Textarea, Timeline, Tooltip, VisuallyHiddenText, WarekiPicker

**Two are marked deprecated by the host itself**: `BottomFixedArea` and `DatePicker` are both
labelled 非推奨 on the index. They stay in the roster because SmartHR still publishes them, and
the label is recorded because it is the host's, not this reference's judgement.

The list is flat because the index presents it flat, in one alphabetical grid of cards with no
category headings.

### What this reference's thirteen entries are, and what they are not

§4 records thirteen stylings. Their `use:` strings are descriptions of purpose — "Single most
important action (Save/Submit)", "Cancel / secondary beside primary" — with no selector, no
capture id, and no class from the `smarthr-ui` package. This reference has no `verification_v2`
block and therefore no surface record either.

Several of the thirteen carry names that resemble published components. None is claimed as a
rendered instance of one, and none of the 61 above carries a measured value here.

## 5. Layout Principles

### Density
SmartHR is **medium-to-high density** by necessity — HR dashboards surface many employees, many fields, many statuses. The system manages density with generous `NORMAL` (1.5×) body leading and Stone-neutral separation rather than cramming. Tables are first-class citizens.

### Spacing
Spacing uses a dedicated **spacing token scale** (`余白`) — a stepped set of semantic gaps so vertical rhythm stays consistent across teams. Page content sits on Stone01 `#F8F7F6`; white cards (radius `l` 8px) float on that warm-gray base for separation without heavy shadows.

### Structure
- App-shell pattern: persistent left navigation + top header + main content area
- Forms are the central artifact — labeled fields, helper text, inline validation
- Z-index is governed by a **layer-order token** (`レイヤー順序`) so modals, dropdowns, and toasts never fight

## 6. Depth & Elevation

SmartHR uses a **shadow token scale** (`影`) for elevation, kept subtle. The product reads mostly flat — separation comes from Stone-neutral backgrounds and 1px borders rather than dramatic shadows.

- Cards: minimal or no shadow; 1px Stone02 border + Stone01 page bg does the separating
- Dropdowns / popovers: light shadow token
- Modals / dialogs: stronger shadow token + Stone01 backdrop scrim
- Elevation always references the shadow token scale, never an ad-hoc `box-shadow`

## 7. Do's and Don'ts

- **DO** reserve SmartHR Blue (`#00C4CC`) for the primary action and brand moments. **DON'T** flood working surfaces with cyan — the product is white + Stone neutrals.
- **DO** use warm near-black `#23221F` for text. **DON'T** use pure `#000000` — SmartHR softens text deliberately.
- **DO** pick colors from the ten semantic families (Grass for success, Momiji for danger, Sunlight for warning, Sky for info). **DON'T** invent ad-hoc hexes — the families exist precisely so you never have to.
- **DO** defer to the OS-native font stack. **DON'T** load a brand webfont or hardcode a single typeface — it breaks JP/a11y rendering.
- **DO** use the radius tokens `s`(4) / `m`(6) / `l`(8) / `full`. **DON'T** use 12px+ rounded corners — SmartHR's radius is small and businesslike.
- **DO** treat accessibility as a gate, not a nicety — contrast, focus rings, screen-reader copy. **DON'T** ship a control that fails the a11y guidelines.
- **DO** build hierarchy from size + leading + color. **DON'T** reach for a heavy display weight; the system has no dramatic bold tier.
- **DO** use Orange (`#FF9900`) sparingly for emphasis. **DON'T** promote it to a second primary — it dilutes the cyan signal.

## 8. Responsive Behavior

SmartHR ships **media-query tokens** (`メディアクエリ`) so breakpoints are shared, not re-invented per team.

| Width | Behavior |
|---|---|
| Desktop | Full app shell: left nav + header + wide content, dense tables shown in full |
| Tablet | Left nav may collapse; tables gain horizontal scroll or column priority |
| Mobile | Single column; left nav becomes a drawer; XXL heading drops 32px → 28.8px; tables reflow to stacked cards |

### Touch & Mobile
- Touch targets respect minimum tap height; inputs grow comfortable on mobile
- Only XXL typography steps down on mobile; body and below stay constant for legibility
- Forms remain the central artifact — mobile keeps full validation and helper text

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / brand: SmartHR Blue `#00C4CC`
- Text: `#23221F` (warm near-black)
- Accent / emphasis: Orange `#FF9900`
- Page bg: Stone01 `#F8F7F6`; card bg `#FFFFFF`; border Stone02 `#EDEBE6`
- Muted text: Stone04 `#4E4C49` / Stone03 `#AAA69F`
- Success Grass `#3DCC65` / Danger Momiji `#EC5A55` / Warning Sunlight `#FFD74A` / Info Sky `#32B7F0`
- Radius: `s` 4px / `m` 6px / `l` 8px / `full` 9999px

### Example Component Prompts
- "Create a SmartHR primary button: bg `#00C4CC`, white text, `6px` radius, 16px bold, comfortable padding. Beside it a secondary button: white bg, `#23221F` text, 1px `#EDEBE6` border, same radius."
- "Build a SmartHR text input: white bg, 1px `#AAA69F` border, `4px` radius, `#23221F` text. Focus state: border `#00C4CC` + focus ring. Error state: border `#EC5A55` and 12px helper text in `#A53F3F` below."
- "Design a SmartHR dashboard card: white surface, 1px `#EDEBE6` border, `8px` radius, sitting on a Stone01 `#F8F7F6` page background. Heading at XL (24px), body at M (16px) with 1.5× line height, text `#23221F`."
- "Create a SmartHR status notice set: info (bg `#DDF2FB`, text `#1376A0`), success (bg `#E6F2C8`, text `#378445`), warning (bg `#FAF2D0`), error (bg `#FFE7E5`, text `#A53F3F`). 4px radius, M-size text."

### Iteration Guide
1. **SmartHR Blue (`#00C4CC`) is the single primary** — one per screen, brand moments only.
2. **Text is `#23221F`, not `#000`** — warm near-black always.
3. **Pick from the ten semantic families** — never invent a hex; Grass/Momiji/Sunlight/Sky cover success/danger/warning/info.
4. **OS-native fonts only** — no webfont, no hardcoded typeface.
5. **Radius is small** — `s`/`m`/`l` (4/6/8px). Avoid 12px+.
6. **Hierarchy from size + leading + color** — no heavy display weight exists.
7. **Accessibility is a gate** — contrast, focus rings, screen-reader copy are non-negotiable.
8. **Flat by default** — Stone neutrals + 1px borders separate; shadows are subtle and tokenized.

---

## 10. Voice & Tone

SmartHR's voice is **plain, polite, and de-stressing**. The product sits at one of the most anxiety-inducing intersections in adult life — employment paperwork, payroll, social insurance, resignations — and the copy's entire job is to lower the user's blood pressure. It writes in standard polite Japanese (です・ます調 / 丁寧語), short declarative sentences, and avoids both bureaucratic stiffness (硬い役所言葉) and over-familiar startup chumminess. The guiding internal phrase is **だれでも・効率よく・迷わずに** — anyone, efficiently, without getting lost — and every microcopy decision is measured against "did this help the user not get lost?" English exists for international employees but Japanese is the first-class voice.

| Context | Tone |
|---|---|
| Buttons | Short JP verb phrase — `保存`, `申請する`, `次へ`. Imperative-polite, no exclamation marks. |
| Form labels & helper text | Concrete and reassuring — explain *what this field is for* and *what happens next*, in plain terms. |
| Empty states | Blameless one-liner + the single next action. Never implies the user did something wrong. |
| Error messages | State the cause, give the fix, in one calm sentence. No `申し訳ございません`-flood; one polite acknowledgment max. |
| Success | Quiet confirmation (`保存しました`) — the work is done, no celebration needed. |
| Notices | Color-coded by semantic family + plain-language summary. The color carries urgency; the words stay calm. |
| Accessibility copy | Written to be read by a screen reader — meaningful labels, no decorative noise. |

**Forbidden patterns.** Bureaucratic stiffness (`〜していただきますようお願い申し上げます` walls of keigo), apology-flooding on non-destructive states, exclamation-mark emphasis on buttons (`保存する！`), marketing superlatives (`最高の`, `革新的な`), emoji in product chrome, and any copy that makes the user feel they're at fault for a system condition. Decorative cleverness that costs clarity is a bug.

**Voice samples.**
- `保存` — primary action verb on forms. <!-- illustrative: standard SmartHR-register JP form verb; not quoted verbatim from a specific live screen -->
- `申請する` — submit-an-application primary action. <!-- illustrative -->
- `だれでも・効率よく・迷わずに` — the system's stated design intent, surfaced on smarthr.design. <!-- verified: smarthr.design homepage copy, WebFetch 2026-05-19 -->

## 11. Brand Narrative

SmartHR was founded in Japan to attack a specific, unglamorous problem: the **mountain of労務 (labor administration) paperwork** that every Japanese company must file — social insurance, employment insurance, year-end tax adjustment (年末調整), onboarding and offboarding documents — almost all of it historically done on paper, by hand, by overworked back-office staff. SmartHR's premise was that this work is (a) universal, (b) miserable, and (c) almost entirely automatable. By digitizing the forms and the workflows, SmartHR turned a paper avalanche into a few clicks — and grew into one of Japan's most widely-used HR/labor SaaS platforms for small and medium businesses. <!-- source: SmartHR product positioning + smarthr.jp, general public knowledge; not a quoted founder interview -->

The design system reflects three commitments inherited from that origin. **One**, the product must work for *everyone in a company* — not just designers or power users, but the new hire filing their first form and the 60-year-old administrator who has done this on paper for thirty years. Hence `だれでも` (anyone) as the first word of the design intent, and hence the relentless accessibility focus. **Two**, it must be *efficient* — these are repetitive, high-volume, deadline-driven tasks, so the UI optimizes for throughput, not delight: dense tables, clear forms, minimal ceremony. **Three**, no one should *get lost* — labor paperwork is confusing enough without a confusing UI on top of it, so the system invests heavily in plain-language copy, predictable layouts, and a shared token vocabulary that keeps every team's screens feeling like one product.

What sets SmartHR apart in the Japanese SaaS landscape is that it published its design system **fully in the open** at `smarthr.design` — primitive and semantic tokens, accessibility guidelines, writing rules, governance — at a level of completeness rare even among global tech companies. The system is itself an expression of the brand: methodical, generous, unflashy, and built so that anyone can use it without getting lost.

## 12. Principles

1. **Anyone, efficiently, without getting lost (だれでも・効率よく・迷わずに).** The stated design intent and the lens for every decision. *UI implication:* If a screen helps a power user but loses a first-timer, it fails. Plain copy, predictable layout, and accessibility are requirements, not enhancements.

2. **Accessibility is a gate, not a feature.** Color contrast, focus visibility, and screen-reader-meaningful labels are checked before ship. *UI implication:* Text is `#23221F` on white for contrast; every interactive control has a visible focus ring; semantic family colors are chosen so the *meaning* survives even without the hue.

3. **Two-layer tokens: primitive then semantic.** The palette exists as primitives; teams author against semantic roles. *UI implication:* Don't reference `#EC5A55` directly — reference the danger role that maps to Momiji. This keeps the whole product re-themeable and coherent.

4. **The tool should disappear.** SmartHR is infrastructure for someone's employment; the UI's success is measured by how little the user has to think about it. *UI implication:* No decorative flourish, no brand color where it isn't needed, restrained motion, small radii. White + Stone neutrals + cyan for the one action that matters.

5. **Typeface-agnostic by principle.** Deferring to OS fonts is a correctness decision — JP glyphs, alphanumerics, and assistive tech all render best natively. *UI implication:* Never hardcode a typeface or load a webfont. Build hierarchy from the size/leading/color tokens instead.

## 13. Personas

*Personas are fictional archetypes informed by SmartHR's publicly-described user base (back-office staff and employees at Japanese SMEs), not real individuals.*

**佐藤 美咲 (Misaki Sato), 38, Osaka.** HR/labor admin at a 60-person manufacturing company. Owns year-end tax adjustment season and onboarding. Used to drown in paper every January; now runs it through SmartHR. Cares only that it's fast, correct, and that employees can self-serve so they stop emailing her. Will forgive a plain UI; will never forgive a confusing one.

**田中 健太 (Kenta Tanaka), 24, Tokyo.** First job out of university. His only contact with SmartHR is onboarding: entering his bank details, address, and emergency contact on his phone in the first week. Wants it to feel obvious and trustworthy — this is his salary and personal data. Notices immediately if a field is unexplained.

**山田 老 (Hajime Yamada), 61, Nagoya.** Veteran administrator who did labor paperwork on paper for three decades. Distrusts software that hides what it's doing. SmartHR earns his trust through predictability, plain Japanese, and never burying the "what happens next." If a screen surprises him, he stops and calls support.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no records yet)** | White card on Stone01 bg, one plain-language line (M, `#23221F`) explaining what will appear here, one primary `#00C4CC` button for the first action. No illustration clutter. |
| **Empty (search/filter no results)** | Single calm line in Stone04 `#4E4C49` (`該当する従業員が見つかりませんでした` pattern). Offer to clear the filter; no spammy suggestions. |
| **Loading (table/page)** | Skeleton blocks in Stone01/Stone02 at final dimensions. Subtle shimmer. Layout doesn't shift when data lands. |
| **Loading (inline action)** | In-button spinner; button keeps its width and `6px` radius; label swaps to a loading state. |
| **Error (field validation)** | Border swaps to Momiji `#EC5A55`; helper text below in `#A53F3F` (XS/12px), one sentence: cause + fix. |
| **Error (page/system)** | Error notice banner: bg Momiji01 `#FFE7E5`, text `#A53F3F`. States the condition plainly, offers retry. One polite acknowledgment, no apology-flood. |
| **Success** | Quiet — success notice (bg Grass01 `#E6F2C8`, text `#378445`) or inline `保存しました`. No confetti; the task being done is the reward. |
| **Disabled** | bg Stone02 `#EDEBE6`, text Stone03 `#AAA69F`. The palette swap is the signal; no opacity hack. |
| **Skeleton** | Stone-neutral blocks at exact final size, never on already-known values; respects reduced-motion. |
| **Warning / caution** | Sunlight notice (bg `#FAF2D0`) before a consequential action (e.g., a filing deadline). Color carries urgency; words stay calm. |

## 15. Motion & Easing

SmartHR's motion is **restrained and functional** — motion exists to clarify state change and continuity, never to entertain. An HR tool used under deadline pressure has no room for kinetic flourish.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox commits, selection |
| `motion-fast` | 150ms | Hover, press, small reveals, focus ring |
| `motion-standard` | 250ms | Dropdown open, accordion, tab switch |
| `motion-modal` | 300ms | Modal/dialog enter-exit |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | The default — 95% of motion |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things arriving (dropdowns, modals, toasts) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |

**Spring stance.** Spring / overshoot easing is **forbidden** on SmartHR product surfaces. The brand intent is "without getting lost"; bouncy motion adds noise to a tool whose job is to be invisible. Confidence in a business tool comes from predictability, not delight.

**Signature motions.**
1. **Modal enter.** Backdrop scrim fades in over `motion-modal / ease-enter`; the dialog appears with a small opacity + slight upward translate. Controlled, never bouncy.
2. **Dropdown / select open.** Opens over `motion-standard / ease-enter` with a short height/opacity reveal; closes over `ease-exit`.
3. **Focus ring.** Appears instantly-to-`motion-fast` on focus — accessibility takes priority, so the ring never lags behind keyboard navigation.
4. **Inline save feedback.** Success notice fades in over `motion-fast` and lingers briefly; no celebratory animation.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; skeleton shimmer becomes a static Stone block; modals appear without translate. Accessibility outranks polish, always.

<!--
OmD v0.1 Sources — SmartHR

Tier 1 (live / official DS, WebFetch 2026-05-19):
- smarthr.design (design system homepage) — confirms intent "だれでも・効率よく・迷わずに",
  primitive vs semantic token split, public governance model.
- smarthr.design/basics/colors/ — SmartHR Blue #00C4CC, Black #23221F, Orange #FF9900,
  Stone/Aqua/Sakura/Momiji/Sunlight/Grass/Sky/Marine/Galaxy/Earth four-step families
  (all hex values transcribed from this page).
- smarthr.design/products/design-tokens/typography — rem-based size scale XXS→XXL,
  typeface-agnostic / OS-font policy, leading tokens (TIGHT/NORMAL/NONE).
- smarthr.design/products/design-tokens/radius — s 4px / m 6px / l 8px / full 9999px.

Verified vs assumed:
- VERIFIED: #00C4CC primary, all family hex values, type/radius tokens, OS-font policy,
  design intent phrase. These come straight from the public DS.
- ASSUMED/INFERRED: component-level button/input/notice variants in §4 are reasonable
  mappings of the verified tokens onto standard SmartHR-style components (the DS documents
  these component categories; exact per-variant values are inferred from the token set).
  Motion tokens (§15) follow the documented shadow/z-index token discipline but specific
  duration values are illustrative. Voice samples marked illustrative are not verbatim
  live strings except the design-intent phrase.
- Personas (§13) are fictional archetypes of SmartHR's described SME back-office + employee
  user base, not real people.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — JP batch)
**Tier 1 sources:** https://smarthr.design/products/design-tokens/ (SmartHR Design System's own token page — 22 `--color-*`, 16 `--font-size-*`, 2 `--leading-*` read live via getComputedStyle); https://story.smarthr-ui.dev (official smarthr-ui Storybook, 988 stories / 144 components — component geometry, variants and hover/pressed/disabled measured on rendered DOM); https://github.com/kufu/smarthr-ui (the library's official repository on SmartHR's GitHub org, kufu); https://smarthr.jp (corporate marketing — font observation only, a separate evidence domain).
**Tier 2 sources:** getdesign.md / refero — not separately fetched (official public DS supersedes).
**Conflicts unresolved:** none. Brief-supplied #00C4CC confirmed exactly against smarthr.design/basics/colors/.
