---
id: asana
name: Asana
country: US
category: productivity
homepage: "https://asana.com"
primary_color: "#f06a6a"
logo:
  type: simpleicons
  slug: asana
verified: "2026-09-21"
ds:
  name: "Asana Design System"
  url: "https://storybook.asana.com"
  type: system
  description: "Asana's published marketing-site design system — 526 Storybook stories across 215 components, with Design System stories for Colors, Typography, Spacing and Shadows."
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-21"
  surfaces:
    - { id: home, kind: product-surface, url: "https://asana.com/", inspected: "2026-09-21" }
    - { id: pricing, kind: product-surface, url: "https://asana.com/pricing", inspected: "2026-09-21" }
    - { id: storybook, kind: product-surface, url: "https://storybook.asana.com/", inspected: "2026-09-21" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://asana.com/", captured: "2026-09-21" }
    - { id: pricing-live, kind: product-surface, url: "https://asana.com/pricing", captured: "2026-09-21" }
    - { id: ds-colors, kind: product-surface, url: "https://storybook.asana.com/iframe.html?id=design-system-colors--primitives&viewMode=story", captured: "2026-09-21" }
    - { id: ds-typography, kind: product-surface, url: "https://storybook.asana.com/iframe.html?id=design-system-typography--all-types&viewMode=story", captured: "2026-09-21" }
    - { id: ds-spacing, kind: product-surface, url: "https://storybook.asana.com/iframe.html?id=design-system-spacing--spacing-example&viewMode=story", captured: "2026-09-21" }
    - { id: ds-shadows, kind: product-surface, url: "https://storybook.asana.com/iframe.html?id=design-system-shadows--shadow-example&viewMode=story", captured: "2026-09-21" }
    - { id: home-june, kind: product-surface, url: "https://asana.com/", captured: "2026-06-22" }
    - { id: brand-official, kind: official-doc, url: "https://asana.com/brand", captured: "2026-09-21" }
  conflicts: []
  claims:
    tokens.colors.body: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.border-muted: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.brand-dark: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.brand-pink: { surface_id: home, source_id: brand-official, method: computed-style, captured: "2026-09-21" }
    tokens.colors.canvas: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.coral-blush: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.deep-coral: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.hairline: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.heading: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.ink: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.muted: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.on-dark: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.on-primary: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.primary: { surface_id: home, source_id: brand-official, method: computed-style, captured: "2026-09-21" }
    tokens.colors.sky: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.surface: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.surface-alt: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.colors.violet: { surface_id: storybook, source_id: ds-colors, method: computed-style, captured: "2026-09-21" }
    tokens.components.badge-coral.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-coral.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-coral.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-coral.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-coral.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-coral.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-sky.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-sky.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-sky.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-sky.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-sky.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.badge-sky.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card-primary.bg: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card-primary.fg: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card-primary.font: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card-primary.height: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card-primary.hover: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card-primary.padding: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card-primary.radius: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card-primary.type: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card-primary.use: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card.bg: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card.fg: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card.font: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card.height: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card.hover: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card.padding: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card.radius: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card.type: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-card.use: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-hero-accent.bg: { surface_id: home, source_id: home-june, method: live-inspect, captured: "2026-06-22" }
    tokens.components.button-hero-accent.fg: { surface_id: home, source_id: home-june, method: live-inspect, captured: "2026-06-22" }
    tokens.components.button-hero-accent.font: { surface_id: home, source_id: home-june, method: live-inspect, captured: "2026-06-22" }
    tokens.components.button-hero-accent.height: { surface_id: home, source_id: home-june, method: live-inspect, captured: "2026-06-22" }
    tokens.components.button-hero-accent.padding: { surface_id: home, source_id: home-june, method: live-inspect, captured: "2026-06-22" }
    tokens.components.button-hero-accent.radius: { surface_id: home, source_id: home-june, method: live-inspect, captured: "2026-06-22" }
    tokens.components.button-hero-accent.type: { surface_id: home, source_id: home-june, method: live-inspect, captured: "2026-06-22" }
    tokens.components.button-hero-accent.use: { surface_id: home, source_id: home-june, method: live-inspect, captured: "2026-06-22" }
    tokens.components.button-nav.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-nav.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-nav.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-nav.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-nav.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-nav.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-nav.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-nav.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-nav.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.card-surface.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.card-surface.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.card-surface.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.card-surface.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.card-surface.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.card-tinted.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.card-tinted.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.card-tinted.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.card-tinted.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input-default.bg: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input-default.border: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input-default.fg: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input-default.font: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input-default.height: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input-default.padding: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input-default.radius: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input-default.type: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input-default.use: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle-on.bg: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle-on.hover: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle-on.focus: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle-on.fg: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle-on.radius: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle-on.type: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle-on.use: { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-09-21" }
    tokens.rounded.card: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-21" }
    tokens.rounded.full: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-21" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-21" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-21" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.base: { surface_id: storybook, source_id: ds-spacing, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.lg: { surface_id: storybook, source_id: ds-spacing, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.md: { surface_id: storybook, source_id: ds-spacing, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.section: { surface_id: storybook, source_id: ds-spacing, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.sm: { surface_id: storybook, source_id: ds-spacing, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.xl: { surface_id: storybook, source_id: ds-spacing, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.xs: { surface_id: storybook, source_id: ds-spacing, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.xxl: { surface_id: storybook, source_id: ds-spacing, method: computed-style, captured: "2026-09-21" }
    tokens.typography.body-lg.lineHeight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.body-lg.size: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.body-lg.use: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.body-lg.weight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.body.lineHeight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.body.size: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.body.use: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.body.weight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.caption.lineHeight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.caption.size: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.caption.tracking: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.caption.use: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.caption.weight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.display-hero.lineHeight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.display-hero.size: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.display-hero.tracking: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.display-hero.use: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.display-hero.weight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.display-lg.lineHeight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.display-lg.size: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.display-lg.tracking: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.display-lg.use: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.display-lg.weight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.family.display: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.family.fallback: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.family.sans: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.heading-sm.lineHeight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.heading-sm.size: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.heading-sm.use: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.heading-sm.weight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.section.lineHeight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.section.size: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.section.use: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.section.weight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.subheading.lineHeight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.subheading.size: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.subheading.tracking: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.subheading.use: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
    tokens.typography.subheading.weight: { surface_id: storybook, source_id: ds-typography, method: computed-style, captured: "2026-09-21" }
tokens:
  source: live-extract
  extracted: "2026-09-21"
  colors:
    primary: "#f06a6a"
    brand-pink: "#fd3ffd"
    brand-dark: "#0d0e10"
    ink: "#0d0d0d"
    heading: "#0d0e10"
    body: "#646f79"
    muted: "#9ca6af"
    canvas: "#ffffff"
    surface: "#f3f3f3"
    surface-alt: "#fafafa"
    on-primary: "#ffffff"
    on-dark: "#ffffff"
    hairline: "#e7e7e7"
    violet: "#222875"
    sky: "#cbefff"
    coral-blush: "#ffeaec"
    deep-coral: "#690031"
    border-muted: "#6e6e6e"
  typography:
    family: {display: Ghost, sans: TWK Lausanne, fallback: 'Helvetica Neue, Helvetica, sans-serif'}
    display-hero: {size: 102, weight: 300, lineHeight: 1, tracking: -0.007, use: 'Hero headline — light authority, Ghost or TWK Lausanne'}
    display-lg: {size: 72, weight: 500, lineHeight: 1, tracking: -0.007, use: 'Display headings, Ghost display font'}
    section: {size: 54, weight: 300, lineHeight: 1.15, use: Section headings}
    subheading: {size: 36, weight: 400, lineHeight: 1.2, tracking: -0.01, use: Card / sub-section heads}
    heading-sm: {size: 24, weight: 500, lineHeight: 1.2, use: Small headings}
    body-lg: {size: 20, weight: 400, lineHeight: 1.5, use: Lead body / subheadings}
    body: {size: 16, weight: 400, lineHeight: 1.5, use: Standard body text}
    caption: {size: 11, weight: 400, lineHeight: 1.75, tracking: 0.04, use: 'Labels, captions'}
  spacing:
    xs: 4
    sm: 8
    md: 12
    base: 16
    lg: 24
    xl: 48
    xxl: 80
    section: 120
  rounded:
    sm: 4
    md: 8
    lg: 16
    card: 20
    full: 9999
  components:
    button-primary: { type: "button", bg: "#0d0d0d", fg: "#ffffff", radius: "100px", padding: "16px 32px", height: "64px", font: "20px / 400 TWK Lausanne", use: "Hero primary CTA — Get started, black pill", hover: "#6e6e6e" }
    button-hero-accent: { type: "button", bg: "#fd3ffd", fg: "#0b0505", radius: "100px", padding: "16px 32px", height: "64px", font: "20px / 400 TWK Lausanne", use: "Hero accent CTA — magenta-pink brand moment" }
    button-secondary: { type: "button", bg: "#fafafa", fg: "#0d0d0d", border: "1px solid #6e6e6e", radius: "100px", padding: "16px 32px", font: "20px / 400 TWK Lausanne", use: "Secondary outline pill — View demo, Learn more", hover: "#f3f3f3" }
    button-nav: { type: "button", bg: "#0d0d0d", fg: "#ffffff", radius: "100px", padding: "0px 16px", height: "44px", font: "14px / 500 TWK Lausanne", use: "Nav bar CTA — Get started (compact)", hover: "#6e6e6e" }
    button-card: { type: "button", bg: "#f3f3f3", fg: "#0d0d0d", radius: "100px", padding: "16px 32px", height: "50px", font: "16px / 500 TWK Lausanne", use: "Pricing card secondary — Get started (light)", hover: "#e7e7e7" }
    button-card-primary: { type: "button", bg: "#0d0d0d", fg: "#ffffff", radius: "100px", padding: "16px 32px", height: "50px", font: "16px / 500 TWK Lausanne", use: "Pricing card primary — Get started (dark)", hover: "#6e6e6e" }
    input-default: { type: "input", bg: "#ffffff", border: "1px solid #757677", radius: "6px", padding: "6px 12px", height: "36px", font: "14px / 400", fg: "#000000", use: "Login / form text input" }
    card-surface: { type: "card", bg: "#ffffff", radius: "16px", border: "1px solid #e7e7e7", use: "Feature / pricing card — no shadow, hairline border" }
    card-tinted: { type: "card", bg: "#f3f3f3", radius: "8px", use: "Tinted content card on grey surface" }
    badge-coral: { type: "badge", bg: "#ffeaec", fg: "#690031", radius: "9999px", font: "12px / 400 TWK Lausanne", use: "Coral blush tag / label pill" }
    badge-sky: { type: "badge", bg: "#cbefff", fg: "#0d0e10", radius: "9999px", font: "12px / 400 TWK Lausanne", use: "Sky blue tag / status pill" }
    toggle-on: { type: "toggle", bg: "#24a651", fg: "#ffffff", radius: "100px", hover: "#1d8541", focus: "#24a651", use: "Pricing billing-period switch — on state; 22px track" }
  components_harvested: true
---

# Design System Inspiration of Asana

## 1. Visual Theme & Atmosphere

Asana's 2026 homepage presents a dramatic evolution from its iconic multi-dot, coral-drenched brand of the 2010s toward a high-contrast, near-monochromatic editorial system that still pulses with unexpected chromatic moments. The canvas is pure white (`#ffffff`) anchored by near-black ink (`#0d0d0d`) for headings, and the dominant interactive vocabulary is bold black pills on white — a confident inversion of the soft, colorful SaaS aesthetic Asana once pioneered. Yet the system refuses to be merely minimal: a single, jarring magenta-pink hero CTA (`#fd3ffd`) detonates on the homepage as a brand accent, and the signature coral (`#f06a6a`) lives on in the brand CSS and product UI elements as the marque color that has defined Asana since its founding.

The typographic backbone is **TWK Lausanne**, Weltkern's geometric grotesque that brings a Swiss editorial restraint to every surface. At display sizes the weight drops to an extraordinary 300 — hero headlines at 102px weight 300 that command without shouting. A second display face, **Ghost**, handles the largest brand moments (72px+) with tighter tracking at -0.007em. The combined effect is a system that feels simultaneously luxurious and utilitarian, like a well-designed annual report that also happens to run your team's roadmap.

The geometry is pill-everything: navigation buttons, hero CTAs, pricing cards, and nav dropdowns all terminate in 100px border-radius. This full-pill commitment is the one constant that links the current high-contrast era back to the playful, rounded Asana brand identity. Depth is handled through hairlines (`#e7e7e7`) and subtle card borders rather than heavy shadows — the page feels flat, fast, and confident.

**Key Characteristics:**
- TWK Lausanne as the universal brand font — weight 300 at display sizes, 400-500 for body/UI
- Ghost display font for the largest 72px+ brand moments
- Full-pill geometry (100px radius) on all interactive elements — buttons, nav, tags
- High-contrast monochromatic primary palette: `#0d0d0d` ink on `#ffffff` canvas
- Magenta-pink hero accent (`#fd3ffd`) for brand energy moments on the homepage
- Signature brand coral (`#f06a6a`) anchoring the traditional brand identity
- Multi-color dots palette: coral, violet, sky-blue, sage — present in product UI and illustrations
- No heavy shadows — flat elevation via `#e7e7e7` hairlines and subtle card borders

## Primary tasks

- Complete a task and see it register as done
- Add the first task to a brand-new, empty project
- See what your team is working on right now
- Check workload and capacity so nobody becomes the bottleneck
- Track company-level goals and present them in a board meeting

## 2. Color Palette & Roles

Measured 2026-09-21 on two surfaces that agree: `asana.com` resolves **353 CSS custom
properties**, and `storybook.asana.com` publishes a **Design System / Colors** story with
**113 named swatches**. Asana names its colours *positionally* — `blue 0` … `blue 1000`,
`black 20` … `black 1000` — so the role names below are this reference's, and Asana's own
token name is given beside each one.

### Primary Brand

- **Asana Coral** (`#f06a6a`): the signature brand hue, anchoring the three-dots logo.
  It is **not** in the marketing system's primitive ramp; it resolves live as
  `--darkmode-button-secondary-hover` and `--darkmode-link-hover`, and is confirmed on the
  official brand page. Asana's *marketing buttons are black*, not coral — the coral is a
  brand and dark-mode accent, not the primary action colour.
- **Magenta-Pink Accent** (`#fd3ffd`): `fuchsia 700` / `--fuchsia-700`. The hero CTA accent.
- **Ink Black** (`#0d0d0d`): `--black-1000` / `--lightmode-button-primary`. The real primary
  action colour — nav CTAs, pricing buttons, hero CTA.
- **Dark Heading** (`#0d0e10`): `--darkmode-button-text-primary`. Display and H1 text.

### Neutrals

Asana publishes a 15-step `black` ramp; these are the four this reference uses.

- **Surface Alt** (`#fafafa`): `black 20` / `--lightmode-bg-inverted`.
- **Surface** (`#f3f3f3`): `black 50` / `--lightmode-accent-gray-light`.
- **Hairline** (`#e7e7e7`): `black 100` / `--lightmode-bg-med-hover`.
- **Border Muted** (`#6e6e6e`): `black 600` / `--lightmode-link-text-weak`. Also the hover
  fill for every dark button (see §4).
- **Canvas / On-Primary / On-Dark** (`#ffffff`): `white` / `--lightmode-accent-white`.
- **Body** (`#646f79`): `--gray-8`. **Muted** (`#9ca6af`): `--gray-6`.

### Accent Ramps

The reference cites four endpoints of two published 17-step ramps:

- **Sky** (`#cbefff`) is `blue 0`; **Violet** (`#222875`) is `blue 1000` — the two ends of
  the same ramp, not two separate hues.
- **Coral Blush** (`#ffeaec`) is `coral 0`; **Deep Coral** (`#690031`) is `coral 1000`.

Asana publishes 13 colour families in total — blue, coral, green, purple and black at 15–18
steps each, plus `bright`, `glow`, `chartreuse`, `fuchsia`, `google`, `white`, `red`, `amber`.

### Dark theme

`--darkmode-*` (62 properties) and `--lightmode-*` (62) both resolve on the product surface,
so Asana ships a full dark theme. **This reference does not yet record it** — only the light
values above were measured, and the dark set is left unclaimed rather than guessed.

## 3. Typography Rules

### Font Family
- **Display**: `Ghost` — used at 60-72px+ for brand display moments, weight 500, tight tracking -0.007em
- **Primary**: `TWK Lausanne` — Weltkern's geometric grotesque for all body, UI, and marketing text
- **Fallback**: `Helvetica Neue, Helvetica, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | TWK Lausanne | 102px | 300 | 1.0 | -0.007em | Whisper-weight authority |
| Display Large | Ghost | 72px | 500 | 1.0 | -0.007em | Brand display moments |
| Section Head | TWK Lausanne | 54px | 300 | 1.15 | normal | Section headings |
| Heading | TWK Lausanne | 36px | 400 | 1.2 | -0.01em | Card / sub-section heads |
| Heading SM | TWK Lausanne | 24px | 500 | 1.2 | normal | Small headings |
| Body Lead | TWK Lausanne | 20px | 400 | 1.5 | normal | Lead paragraph / subheadings |
| Body | TWK Lausanne | 16px | 400 | 1.5 | normal | Standard reading text |
| Caption | TWK Lausanne | 11px | 400 | 1.75 | +0.04em | Labels, captions, fine print |
| Nav | TWK Lausanne | 14px | 500 | auto | normal | Navigation items, compact CTAs |

### Principles
- **Lightness signals confidence**: Weight 300 at 54-102px is Asana's display signature. Heavy headlines are for brands that need to shout; Asana is confident enough to whisper.
- **Two font personalities**: Ghost for pure brand moments (logo scale, hero display), TWK Lausanne for everything functional and below the fold.
- **Tight tracking at display**: -0.007em at 72px+, relaxing to normal at body sizes.
- **Weight 500 for UI**: Navigation, pricing cards, and feature labels use weight 500 — functional text needs more presence than editorial text.

## 4. Component Stylings

### Buttons

Every button is a **pill** (`border-radius: 100px`), measured live on `asana.com` and
`asana.com/pricing` with the pointer parked between readings and navigation suppressed so
`:active` could be read without leaving the page.

| Variant | Rest | Hover | Size |
|---|---|---|---|
| **Primary (hero)** | `#0d0d0d` fill, `#ffffff` text | **`#6e6e6e`** | 64px · `16px 32px` · 20px/400 |
| **Secondary (hero)** | `#fafafa` fill, `#0d0d0d` text | **`#f3f3f3`** | 64px · `16px 32px` · 20px/400 |
| **Nav** | `#0d0d0d` fill, `#ffffff` text | **`#6e6e6e`** | 44px · `0 16px` · 14px/500 |
| **Nav outline** | `#ffffff` fill, `#0d0d0d` text | **`#fafafa`** | 44px · `0 16px` · 14px/500 |
| **Card** | `#f3f3f3` fill, `#0d0d0d` text | **`#e7e7e7`** | 50px · 16px/500 |
| **Card primary** | `#0d0d0d` fill, `#ffffff` text | **`#6e6e6e`** | 50px · 16px/500 |

**Every hover value is a step on the published `black` ramp** — `black 600` (`#6e6e6e`),
`black 100` (`#e7e7e7`), `black 50` (`#f3f3f3`), `black 20` (`#fafafa`). The hover contract
is "move one or more steps along the neutral ramp", not a bespoke colour per button.

**Pressed produced no computed change** on any variant — hover and pressed are the same
value, and that is a real observation. **Focus is a different matter:** it focus was **not measured reliably** — it was read after a mouse press, which suppresses Chrome's `:focus-visible` heuristic, so a ring that a keyboard user sees would not have rendered. **No focus claim is made either way** (method: `docs/MEASUREMENT_METHOD_2026-09-22.md` §2).

### Toggle

The pricing page's billing-period switch, measured live: **`#24a651`** on, 100px track, 22px tall.
Hover darkens to **`#1d8541`**, and focus draws a **`#24a651`** outline ring. The June pass
recorded `#36a651` for this control; the live value today is `#24a651`, and the measured one is
kept.

### Inputs — measured, and deliberately not merged

`asana.com/create-account` serves an email field at `#ffffff`, **50px** tall with an asymmetric
`3px 0 0 3px` radius — it is the left half of an input-group, not the standalone field the June
pass measured on `app.asana.com/-/login` (36px, 6px radius). Neither hover nor focus changed it.
Two different controls on two different surfaces, so the declared `input-default` keeps its own
values and its own date rather than being overwritten by a lookalike.

**Not re-measured today**: the magenta hero-accent variant (`#fd3ffd` fill, `#0b0505` text) was
recorded by the June pass and did not appear on the surfaces measured on 2026-09-21 — the
homepage hero now leads with the black primary. Its values are retained from that capture and
carry its date, not today's; no hover is claimed for it.

### Inputs

**Default Text Field**
- Background: `#ffffff`
- Border: 1px solid `#757677`
- Radius: 6px
- Padding: 6px 12px
- Height: 36px
- Text: `#000000`
- Font: 14px / 400
- Use: Login form text input — email / password

### Cards & Containers

**Feature Card (White)**
- Background: `#ffffff`
- Border: 1px solid `#e7e7e7`
- Radius: 16px
- Use: Pricing and feature cards — flat, no shadow, hairline outline

**Tinted Surface Card**
- Background: `#f3f3f3`
- Radius: 8px
- Use: Contained content card on grey surface sections

### Badges

**Coral Blush Badge**
- Background: `#ffeaec`
- Text: `#690031`
- Radius: 9999px
- Font: 12px / 400 / TWK Lausanne
- Use: Coral-branded label or highlight tag

**Sky Blue Badge**
- Background: `#cbefff`
- Text: `#0d0e10`
- Radius: 9999px
- Font: 12px / 400 / TWK Lausanne
- Use: Sky-tinted status or feature tag

### Toggles

**Toggle On**
- Background: `#36a651`
- Radius: 100px
- Use: Toggle/switch — on state (green success)

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://storybook.asana.com (Asana's published design system — 526 stories / 215 components; Design System stories for Colors, Typography, Spacing and Shadows read live); https://asana.com/ (homepage, TWK Lausanne confirmed, hero CTA colors, color frequency scan); https://asana.com/pricing (pricing buttons, surface card colors); https://asana.com/brand (brand CSS hex extraction — #f06a6a confirmed as primary brand color); https://app.asana.com/-/login (input field, app-level component colors)
**Tier 2 sources:** styles.refero.design/style/6b2a0513-df80-4140-87a8-38b1fef34313 (Ghost font, coral palette, button specs); getdesign.md/asana — no entry found
**Conflicts unresolved:** none — Tier 1 live confirms TWK Lausanne, 100px pill geometry, high-contrast monochrome; refero adds Ghost display font and coral palette detail consistent with brand CSS. Hero CTA magenta-pink (#fd3ffd) is 2026-era marketing; coral (#f06a6a) is the permanent brand primary per brand page CSS.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 28, 32, 40, 48, 56, 64, 76, 80, 100, 104, 120px
- Card padding: 24px
- Section gaps: 80-120px between major horizontal bands

### Grid & Container
- Max content width: ~1200px (centered)
- Hero: single-column, centered, full-width headline at 102px weight 300
- Feature sections: 2-3 column grids for AI features and product highlights
- Pricing: 4-column pricing card grid on desktop
- Full-width dark sections with `#0d0d0d` or `#27455c` backgrounds for feature immersion

### Whitespace Philosophy
- **Generous at every level**: The system uses section gaps of 80-120px, reflecting confidence in content scarcity rather than density. This is a marketing product, not a data dashboard.
- **Pill-as-rhythm**: The ubiquitous 100px pill shapes create horizontal cadence — every interactive element shares the same soft-round personality.
- **Flat separation**: Sections separate by background tint shifts (`#f3f3f3` vs `#ffffff` vs `#0d0d0d` dark) and hairlines, not elevation shadows.

### Border Radius Scale
- Micro (4px): Inputs, small interactive elements
- Standard (8px): Tinted card containers
- Comfortable (16px): Feature and pricing cards
- Modal (20px): Dialog and modal surfaces
- Pill (100px): All buttons, nav items, and form pills
- Full (9999px): Badge and tag elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav, inline text |
| Card (Level 1) | `1px solid #e7e7e7` hairline | Standard white feature cards |
| Subtle (Level 2) | `0px 1px 3px rgba(0,0,0,0.08)` | Hover lift on cards |
| Elevated (Level 3) | `0px 4px 16px rgba(0,0,0,0.10)` | Modals, popovers, dropdown panels |

**Shadow Philosophy**: Asana's marketing surface is shadow-light. Depth comes from background color contrast — alternating `#ffffff` / `#f3f3f3` / `#0d0d0d` dark bands — rather than layered shadows. This keeps the visual tone clean, fast, and confident: no atmospheric depth, pure spatial hierarchy.

## 7. Do's and Don'ts

### Do
- Use TWK Lausanne at weight 300 for all display headlines — lightness is the brand signature
- Apply 100px border-radius to every interactive element — the pill is non-negotiable
- Use `#0d0d0d` ink-black as the primary CTA color in most contexts
- Reserve `#f06a6a` coral for brand-accent moments, illustrations, and product category highlights
- Keep the Hero Accent (`#fd3ffd`) confined to one moment per page — it works because it's rare
- Separate sections with background color shifts and `#e7e7e7` hairlines, not heavy shadows
- Use weight 500 for UI/navigation text; 300-400 for editorial and body

### Don't
- Use weight 600-700 in TWK Lausanne for headlines — weight 300 is the authority signal
- Apply sharp corners (0px-4px radius) to buttons — every button is a pill
- Spread `#fd3ffd` magenta across multiple elements — its power comes from singularity
- Use heavy multi-layer shadows — Asana's system is flat-first
- Mix multiple saturated accent colors on the same surface — one accent per zone
- Substitute system fonts for TWK Lausanne in brand contexts — the geometric grotesque is non-negotiable
- Use warm yellows or oranges as accent colors — the palette is coral/violet/sky/sage (cool-warm-cool-cool)
- Apply positive letter-spacing at display sizes — Asana tracks tight

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline scales down, pill buttons stack |
| Tablet | 640-1024px | 2-column grid, moderate padding |
| Desktop | 1024-1280px | Full layout, 3-4 column grids |
| Large | >1280px | Centered max-width content with generous margins |

### Touch Targets
- Hero pills at 64px height — comfortably tappable
- Nav compact CTA at 44px — meets touch minimum
- Pricing card buttons at 50px — good tap target on mobile

### Collapsing Strategy
- Hero: 102px headline → ~52px on mobile, weight 300 maintained
- Navigation: horizontal + dropdowns → hamburger toggle
- Pricing: 4-column → 2-column → single column stacked
- Dark feature sections maintain full-width background treatment
- Section gaps compress: 120px → 60px on mobile

### Image Behavior
- Product screenshots and AI illustrations maintain flat, borderless treatment at all sizes
- Cards maintain 16px radius across breakpoints
- Pill buttons scale with container but maintain 100px radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary Brand Coral: `#f06a6a`
- Hero Accent Pink: `#fd3ffd`
- Primary CTA / Ink: `#0d0d0d`
- Dark Heading: `#0d0e10`
- Background: `#ffffff`
- Tinted Surface: `#f3f3f3`
- Body Text: `#646f79`
- Muted Text: `#9ca6af`
- Hairline: `#e7e7e7`
- Violet Dots: `#222875`
- Sky Dots: `#cbefff`
- Coral Blush: `#ffeaec`

### Example Component Prompts
- "Create a hero section on white. Headline at 102px TWK Lausanne weight 300, line-height 1.0, color #0d0e10. Subhead at 20px weight 400, #646f79. Two pill CTAs: black (#0d0d0d bg, white text, 100px radius, 16px 32px padding, 64px height) and ghost (#fafafa bg, #0d0d0d text, 1px solid #6e6e6e border, same geometry)."
- "Design a pricing card: white background, 1px solid #e7e7e7 border, 16px radius. Plan name at 24px TWK Lausanne weight 500, #0d0d0d. Price at 36px weight 400. CTA: #0d0d0d background, white text, 100px radius, 16px 32px padding."
- "Build a feature card on grey: #f3f3f3 background, 8px radius. Headline at 24px TWK Lausanne weight 500, #0d0e10. Body at 16px weight 400, #646f79. Badge: #ffeaec background, #690031 text, 9999px radius, 12px TWK Lausanne."
- "Create Asana nav: white sticky header. TWK Lausanne 14px weight 500 links, #0d0d0d text. Pill-dropdown nav buttons (100px radius, 8px 24px padding). Black 'Get started' CTA right-aligned (#0d0d0d, white text, 44px height, 100px radius)."

### Iteration Guide
1. TWK Lausanne weight 300 for display headlines — never 600+
2. Every interactive element is a pill (100px radius)
3. `#0d0d0d` is the default CTA; `#fd3ffd` is the single brand-energy accent (use max once per page)
4. Separate sections with `#f3f3f3` tints and `#e7e7e7` hairlines, no heavy shadows
5. Multi-color dots (`#f06a6a`, `#222875`, `#cbefff`, `#466451`) for illustrations and product callouts
6. Ghost font only at 60px+ for pure display brand moments; TWK Lausanne for everything else
7. Card radius is 16px; modal radius is 20px; badge radius is 9999px

---

## 10. Voice & Tone

Asana's voice in 2026 is **direct, ambitious, and human** — a productivity platform that speaks to teams managing real complexity, not a toy for simple to-do lists. The headline "The OS for human-agent teams" is quintessential Asana: a declarative, category-defining statement that announces a new era without apology. Copy is confident without being arrogant, action-oriented without being pushy. There's a warmth underneath the precision — Asana was founded with a mission of helping humanity thrive, and that idealism surfaces in copy about "human flourishing" even as the product language is tightly operational.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, bold. Defines a new category. "The OS for human-agent teams." Never hedging. |
| Product descriptions | Capability-first, verb-led. "Manage work across every team and tool." |
| CTAs | Action-clear imperatives. "Get started", "View demo", "Learn more". |
| AI feature copy | Confident but grounded. AI as teammate, not replacement. Specific capability claims. |
| Pricing | Transparent and clear. Tier names (Personal, Starter, Advanced, Enterprise) are functional. |
| Enterprise / sales | More formal, outcome-focused. ROI and scale language. |
| Error messages | Calm, specific, actionable — consistent with the productivity-tool ethos. |

**Voice samples (verified live 2026-06-22):**
- "The OS for human-agent teams" — hero headline H1. *(live asana.com/)*
- "AI that works the way your team works" — section H2. *(live asana.com/)*
- "Work & Project Management for Human-Agent Teams" — page title. *(live asana.com/)*

**Forbidden register**: Vague empowerment language ("unlock your potential"), enterprise buzzword stacking ("synergize cross-functional workflows"), aggressive countdown urgency, emoji in marketing copy, sentences that start with "We believe...".

## 11. Brand Narrative

Asana was founded in **2008** by **Dustin Moskovitz** (Facebook co-founder) and **Justin Rosenstein**, originally as an internal Facebook tool for managing the company's own work — a problem so acute at Facebook's scale that two senior engineers left to solve it full-time. The company launched publicly in **2011** and went public on the NYSE in **September 2020** via direct listing.

The founding premise was both philosophical and operational: human coordination is the most underinvested leverage point in organizations. The company's mission — "to help humanity thrive by enabling the world's teams to work together effortlessly" — is unusually idealistic for a B2B SaaS company, and this idealism is visible in the product's insistence on clarity over complexity, and in Moskovitz's public writing on effective altruism and workplace wellbeing. The three-dot logo (originally three interconnected circles, now a stylized triangular arrangement) represents teammates connected in a shared goal — a visual metaphor that has remained central to the brand through every redesign.

The 2026 homepage reflects Asana's current chapter: positioning the product as the "OS for human-agent teams" — acknowledging AI agents as active participants in organizational work, not just productivity accessories. This is a deliberate category-expansion move, repositioning Asana from "work management tool" to "the coordination layer for teams that include both humans and AI." The coral brand color and multi-color dots palette persist as connective tissue between eras.

## 12. Principles

1. **Clarity over complexity.** Asana's founding insight was that organizational complexity isn't inevitable — it's a coordination failure. *UI implication:* every surface should reduce cognitive load, never add it. Progressive disclosure over feature dumps.
2. **Humans and AI as teammates.** The 2026 positioning frames AI agents as active collaborators, not automation plugins. *UI implication:* AI features are labeled as "AI Teammates," not "AI Tools" — design for handoff, not hand-off.
3. **One source of truth.** Asana's core value proposition is that work should live in one place, not scattered across emails and messages. *UI implication:* UI communicates completeness — every task, project, and goal is visible and connected.
4. **Work should be energizing, not exhausting.** The founders' philosophy holds that good process design liberates human capacity. *UI implication:* the visual system is calm, uncluttered — the app should feel like clarity, not burden.
5. **Teams, not individuals.** Asana is built for groups, not heroes. *UI implication:* collaboration surfaces (comments, assignees, followers, team views) are first-class UI, not afterthoughts.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Asana user segments (project managers, product teams, marketing ops, enterprise IT), not individual people.*

**Sarah Chen, 34, San Francisco.** Senior Product Manager at a Series-B startup scaling from 40 to 200 people. Uses Asana to manage a roadmap across 3 engineering squads and 2 design teams. Her primary concern is cross-team visibility — she needs to see blockers before they become crises. Values Asana's timeline view and dependency tracking. Would leave any tool that required more than 2 clicks to answer "what is my team working on right now?"

**Marcus Thompson, 47, Chicago.** VP of Marketing Operations at a mid-market B2B company. Manages campaigns, events, and content calendars for a 25-person team. Not a developer — thinks in outcomes, not systems. Chose Asana because his team could onboard without an IT project. Approves the Starter tier budget because it's cheaper than one missed campaign deadline.

**Priya Nair, 29, London.** Project coordinator at a global consulting firm. Her Asana workspace spans 12 client projects and 4 time zones. Depends on workload management and capacity views to prevent herself from being the bottleneck. Appreciates the mobile app because she's in client meetings half the day. Notices immediately when a tool slows down or adds unnecessary friction between her and an update.

**Jordan Kim, 38, New York.** Chief of Staff at a 500-person tech company. Manages the CEO's strategic initiatives and company-level OKRs in Asana. Presents Asana portfolios in board meetings. Cares deeply about the visual legibility of goals and status — if the board can't read the roadmap, the tool has failed.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new project, no tasks)** | White canvas. Single `#0d0d0d` heading at body size: "Add your first task." One black pill CTA: "New task". No illustration. Clean, invitational — reflects that empty is a starting point, not a failure. |
| **Empty (search, no results)** | `#646f79` body text: "No results for '[query]'." Suggestions for broader search terms. Calm, non-apologetic. |
| **Loading (project view)** | Skeleton rows at final task-row dimensions on `#f3f3f3` surface. Subtle shimmer. Sidebar skeleton mirrors final sidebar width. |
| **Loading (dashboard, first paint)** | Skeleton cards at portfolio/project card dimensions. `#e7e7e7` hairline borders maintained. |
| **Error (save failed)** | Inline banner at top of pane. `#ffeaec` coral-blush background, `#690031` deep-coral text: "Couldn't save. [Specific reason.] Try again." One "Retry" pill button. |
| **Error (form validation)** | Field-level. `#f06a6a` coral border on input + error text below. Describes exactly what's needed. |
| **Error (network offline)** | Persistent banner at top. States offline status, lists what's available offline, and auto-retries on reconnect. |
| **Success (task completed)** | Brief check animation on the task completion circle. `#36a651` green on the toggle/checkbox. Task row fades subtly to distinguish completed state. |
| **Success (action saved)** | Transient toast — 3 seconds — bottom of view. Sentence case: "Changes saved." No emoji. |
| **Skeleton** | `#f3f3f3` blocks at final content dimensions. Hairline `#e7e7e7` borders maintained on card skeletons. |
| **Disabled** | Reduced opacity on button and label together. Pill shape maintained, `#0d0d0d` fades to `rgba(13,13,13,0.3)`. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, checkbox toggles, selection ticks |
| `motion-fast` | 100ms | Hover overlays, focus rings, button press |
| `motion-standard` | 200ms | Dropdown open, modal enter, card hover lift |
| `motion-slow` | 320ms | Page-level transitions, hero section reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, modals, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Signature motions.**

1. **Task completion.** The circular check on a task completion registers at `motion-fast / ease-enter` — satisfying but not distracting. The row color shifts to a subtly muted state to signal "done" without disappearing.
2. **Pill button hover.** A subtle darkening of the background at `motion-fast` — no scale, no lift, no bounce. The button is self-assured; it doesn't need to animate aggressively.
3. **Project view load.** Skeleton content fades in at `motion-standard / ease-enter` as real content populates. Never a full-page flash — always progressive.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all non-essential transitions collapse to instant. Task completion still shows the check (essential feedback); the animation is removed. Dashboard populates without skeleton shimmer.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://asana.com/ — TWK Lausanne confirmed; hero CTA colors live; color frequency scan
- https://asana.com/pricing — pricing button colors, surface card colors
- https://asana.com/brand — CSS hex extraction confirming #f06a6a as primary brand color
- https://app.asana.com/-/login — input field styles, app-level colors

Tier 2:
- styles.refero.design/style/6b2a0513-df80-4140-87a8-38b1fef34313 — Ghost font, coral palette, button specs
- getdesign.md/asana — no entry found (404)

Brand narrative (§11): Dustin Moskovitz and Justin Rosenstein as co-founders, Facebook origin, 2011 public launch, 2020 NYSE direct listing — publicly documented facts.

Voice samples (§10) are verbatim from the live 2026-06-22 homepage (H1, H2, page title).

Personas (§13) are fictional archetypes informed by publicly observable Asana user segments.

Interpretive claims (e.g., "The pill as brand DNA", "coral as permanent brand anchor") are editorial readings connecting observed design to Asana's positioning, not directly sourced Asana statements.
-->
