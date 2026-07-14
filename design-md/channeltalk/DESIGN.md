---
id: channeltalk
name: Channel Talk
country: KR
category: saas
homepage: "https://channel.io"
primary_color: "#242428"
logo:
  type: github
  slug: channel-io
verified: "2026-07-12"
omd: "0.1"
ds:
  name: Bezier
  url: "https://github.com/channel-io/bezier-react"
  type: system
  description: Channel Talk's open-source product design system and component implementation. It is retained as official product-system context, not used to overwrite current public marketing tokens.
  og_image: "https://opengraph.githubassets.com/d5fd6836ec938de2c8399cf28b2ceabc49104fbbf86e937f9e89983f1b50d638/channel-io/bezier-react"
verification_v2:
  schema: 2
  checked: "2026-07-12"
  surfaces:
    - { id: home, kind: marketing-product, url: "https://channel.io/kr", inspected: "2026-07-12" }
    - { id: us, kind: marketing-product, url: "https://channel.io/us", inspected: "2026-07-12" }
    - { id: updates, kind: product-doc, url: "https://docs.channel.io/updates/en/articles/Notice-Channel-Talk-Major-Updates--b3d45997", inspected: "2026-07-12" }
    - { id: help, kind: product-doc, url: "https://docs.channel.io/help/en/articles/94f34984", inspected: "2026-07-12" }
    - { id: rebrand, kind: official-history, url: "https://channel.io/kr/blog/articles/rebranding-channeltalk-3aff8113", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://channel.io/kr", captured: "2026-07-12" }
    - { id: us-live, kind: product-surface, url: "https://channel.io/us", captured: "2026-07-12" }
    - { id: updates-live, kind: official-doc, url: "https://docs.channel.io/updates/en/articles/Notice-Channel-Talk-Major-Updates--b3d45997", captured: "2026-07-12" }
    - { id: help-live, kind: official-doc, url: "https://docs.channel.io/help/en/articles/94f34984", captured: "2026-07-12" }
    - { id: rebrand-official, kind: official-doc, url: "https://channel.io/kr/blog/articles/rebranding-channeltalk-3aff8113", captured: "2026-07-12" }
    - { id: bezier-official, kind: official-doc, url: "https://github.com/channel-io/bezier-react", captured: "2026-07-12" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": *home_evidence
    "tokens.colors.surface": *home_evidence
    "tokens.colors.foreground": *home_evidence
    "tokens.colors.secondary": *home_evidence
    "tokens.colors.dark-surface": *home_evidence
    "tokens.colors.hairline": *home_evidence
    "tokens.colors.on-primary": *home_evidence
    "tokens.typography.family.ui": *home_evidence
    "tokens.typography.family.marketing": *home_evidence
    "tokens.typography.family.docs": &docs_evidence { surface_id: updates, source_id: updates-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.typography.marketing-heading.size": *home_evidence
    "tokens.typography.marketing-heading.weight": *home_evidence
    "tokens.typography.marketing-heading.lineHeight": *home_evidence
    "tokens.typography.marketing-heading.tracking": *home_evidence
    "tokens.typography.marketing-heading.use": *home_evidence
    "tokens.typography.marketing-body.size": *home_evidence
    "tokens.typography.marketing-body.weight": *home_evidence
    "tokens.typography.marketing-body.lineHeight": *home_evidence
    "tokens.typography.marketing-body.tracking": *home_evidence
    "tokens.typography.marketing-body.use": *home_evidence
    "tokens.typography.marketing-tab.size": *home_evidence
    "tokens.typography.marketing-tab.weight": *home_evidence
    "tokens.typography.marketing-tab.lineHeight": *home_evidence
    "tokens.typography.marketing-tab.tracking": *home_evidence
    "tokens.typography.marketing-tab.use": *home_evidence
    "tokens.typography.docs-body.size": *docs_evidence
    "tokens.typography.docs-body.weight": *docs_evidence
    "tokens.typography.docs-body.lineHeight": *docs_evidence
    "tokens.typography.docs-body.tracking": *docs_evidence
    "tokens.typography.docs-body.use": *docs_evidence
    "tokens.spacing.xs": *home_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.md": *home_evidence
    "tokens.spacing.lg": *home_evidence
    "tokens.spacing.xl": *home_evidence
    "tokens.rounded.control": *docs_evidence
    "tokens.rounded.utility": *docs_evidence
    "tokens.rounded.card": *home_evidence
    "tokens.rounded.full": *home_evidence
    "tokens.shadow.flat": *home_evidence
    "tokens.components.marketing-primary.type": *home_evidence
    "tokens.components.marketing-primary.bg": *home_evidence
    "tokens.components.marketing-primary.fg": *home_evidence
    "tokens.components.marketing-primary.radius": *home_evidence
    "tokens.components.marketing-primary.padding": *home_evidence
    "tokens.components.marketing-primary.font": *home_evidence
    "tokens.components.marketing-primary.states": *home_evidence
    "tokens.components.marketing-primary.use": *home_evidence
    "tokens.components.marketing-outline.type": *home_evidence
    "tokens.components.marketing-outline.bg": *home_evidence
    "tokens.components.marketing-outline.fg": *home_evidence
    "tokens.components.marketing-outline.border": *home_evidence
    "tokens.components.marketing-outline.radius": *home_evidence
    "tokens.components.marketing-outline.padding": *home_evidence
    "tokens.components.marketing-outline.font": *home_evidence
    "tokens.components.marketing-outline.states": *home_evidence
    "tokens.components.marketing-outline.use": *home_evidence
    "tokens.components.marketing-card.type": *home_evidence
    "tokens.components.marketing-card.bg": *home_evidence
    "tokens.components.marketing-card.border": *home_evidence
    "tokens.components.marketing-card.radius": *home_evidence
    "tokens.components.marketing-card.padding": *home_evidence
    "tokens.components.marketing-card.use": *home_evidence
    "tokens.components.marketing-tab.type": *home_evidence
    "tokens.components.marketing-tab.bg": *home_evidence
    "tokens.components.marketing-tab.fg": *home_evidence
    "tokens.components.marketing-tab.radius": *home_evidence
    "tokens.components.marketing-tab.padding": *home_evidence
    "tokens.components.marketing-tab.font": *home_evidence
    "tokens.components.marketing-tab.states": *home_evidence
    "tokens.components.marketing-tab.use": *home_evidence
    "tokens.components.docs-icon-button.type": *docs_evidence
    "tokens.components.docs-icon-button.bg": *docs_evidence
    "tokens.components.docs-icon-button.fg": *docs_evidence
    "tokens.components.docs-icon-button.radius": *docs_evidence
    "tokens.components.docs-icon-button.states": *docs_evidence
    "tokens.components.docs-icon-button.use": *docs_evidence
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Five current first-party surfaces. Marketing and product-doc domains are intentionally separate. Legacy universal Cobalt, BildV5, generic form, synthetic state, and inferred motion claims are not promoted."
  colors:
    primary: "#242428"
    canvas: "#ffffff"
    surface: "#f7f6f3"
    foreground: "#000000"
    secondary: "#716f6d"
    dark-surface: "#3a3530"
    hairline: "#e4e4e5"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Pretendard", marketing: "Pretendard", docs: "Inter" }
    marketing-heading: { size: 44, weight: 600, lineHeight: 1.41, tracking: -0.88, use: "Large current marketing headings" }
    marketing-body: { size: 18, weight: 400, lineHeight: 1.56, tracking: -0.18, use: "Current marketing body and action copy" }
    marketing-tab: { size: 16, weight: 600, lineHeight: 1.56, tracking: -0.16, use: "Interactive marketing category tabs" }
    docs-body: { size: 17, weight: 400, lineHeight: 1.59, tracking: -0.1, use: "English product documentation body" }
  spacing: { xs: 4, sm: 6, md: 10, lg: 20, xl: 30 }
  rounded: { control: 6, utility: 8, card: 35, full: 9999 }
  shadow:
    flat: "none"
  components_harvested: true
  components:
    marketing-primary: { type: button, bg: "#242428", fg: "#ffffff", radius: "9999px", padding: "10px 22px", font: "18px / 400", states: "default captured; no hover or focus token promoted", use: "Primary signup and conversion action on current KR/US marketing" }
    marketing-outline: { type: button, bg: "transparent", fg: "#000000", border: "1px solid #242428", radius: "9999px", padding: "10px 22px", font: "18px / 400", states: "default captured; no hover or focus token promoted", use: "Secondary marketing conversion action" }
    marketing-card: { type: card, bg: "#f7f6f3", border: "1px solid #e4e4e5", radius: "35px", padding: "30px 35px", use: "Current KR/US marketing information card" }
    marketing-tab: { type: tab, bg: "transparent", fg: "#716f6d", radius: "9999px", padding: "6px 20px", font: "16px / 600", states: "selected and tab-selected observed in six safe expansions", use: "Interactive category switcher on current marketing" }
    docs-icon-button: { type: button, bg: "transparent", fg: "rgba(0,0,0,0.85)", radius: "6px", states: "pressed state observed on current documentation controls", use: "Compact icon action in product documentation" }
---

# Design System Inspiration of Channel Talk

## 1. Visual Theme & Atmosphere

Channel Talk is a customer-service platform that joins live chat, team inbox, calls, marketing, workflows, and AI assistance around one ongoing customer relationship. Its public identity has evolved from a bright SaaS-accent story toward a warmer editorial system: current Korean and US pages pair black type with cream `#f7f6f3`, dark charcoal `#242428` conversion controls, generous photography, and rounded 35px information cards. The result feels conversational and human despite the product's operational depth. Official rebrand writing explains that this warmth is intentional—Channel Talk wanted a clearer, more authentic expression of its customer-first culture rather than a generic software identity.

The product-documentation domain is visually related but technically separate. Marketing loads Pretendard and uses 18px reading copy, 44px sectional headings, and full-pill actions. English documentation loads an Inter alias and uses a tighter 17px/27px reading scale with compact 6–8px controls. This reference does not merge those two surfaces into a fictional universal stack. Bezier remains valuable official evidence that Channel maintains a real product design system, but a Bezier color does not become a current marketing token unless the inspected surface confirms it.

**Key Characteristics:**
- Warm cream `#f7f6f3` marketing surfaces with black type and `#242428` primary actions
- Pretendard on current KR/US marketing; loaded Inter alias on English product documentation
- 35px editorial cards and full-pill conversion controls
- Selected marketing tabs captured through six safe interaction expansions
- Public Bezier implementation retained as product-system context, not substituted for uninspected app UI

## 2. Color Palette & Roles

### Current marketing roles
- **Primary / conversion** (`#242428`): repeated filled signup and conversion controls.
- **Canvas** (`#ffffff`): page and neutral content canvas.
- **Warm surface** (`#f7f6f3`): repeated card and section background.
- **Foreground** (`#000000`): dominant marketing and documentation text.
- **Secondary** (`#716f6d`): marketing supporting copy and inactive tab labels.
- **Dark editorial surface** (`#3a3530`): repeated customer-case media field.
- **Hairline** (`#e4e4e5`): current 1px marketing-card border.

Bezier's historical Cobalt `#329BE7` is not promoted as a universal current primary: it was not the conversion color on the five captured public surfaces. Authenticated Inbox status colors remain unresolved.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Bezier is an official product design-system implementation, but the inspected repository context is not treated as proof for every current private app surface. |
| Live surface-use | Pretendard loaded/high with 484 visible uses on marketing; Inter aliases loaded/high with 581 combined visible uses on product docs. |
| Official distributed asset | No Channel-exclusive redistributable brand font is promoted. |
| Declared-only | NotoSansKR, Poppins, fallback faces, and unused locale declarations remain metadata only. |
| Unresolved | Authenticated app overrides and unobserved locale behavior remain unresolved. |

`NotoSansJP` was loaded for one visible body use and remains a surface-local observation, not the universal family. No BildV5 declaration or visible use appeared in the fresh capture, so it is omitted.

### Current observed hierarchy

| Role | Surface | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Section heading | Marketing | 44px | 600 | 62px | -0.88px |
| Card heading | Marketing | 25px | 600 | 32px | -0.5px |
| Body / CTA | Marketing | 18px | 400 | 28px | -0.18px |
| Category tab | Marketing | 16px | 600 | 25px | -0.16px |
| Article heading | Docs | 24px | 700 | 34px | -0.5px |
| Article body | Docs | 17px | 400 | 27px | -0.1px |

## 4. Component Stylings

### Current verified components

#### Marketing primary action
- `#242428` background, white label, full-pill radius
- 10px × 22px padding; Pretendard 18px/400/28px
- Default captured; no guessed hover/focus treatment

#### Marketing outline action
- Transparent background, black label, 1px `#242428` border
- Same full-pill geometry and type as the primary action

#### Marketing information card
- `#f7f6f3` surface, 1px `#e4e4e5` border, 35px radius
- 30px × 35px padding, with 10px internal gap in the captured variant

#### Marketing category tab
- Transparent surface, `#716f6d` label, full-pill hit area
- 6px × 20px padding; Pretendard 16px/600/25px
- Selected state was observed in six safe tab expansions across KR/US pages

#### Documentation icon action
- Transparent compact control with 6px radius
- Loaded Inter alias; pressed state observed

Inputs, dialogs, toasts, authenticated inbox rows, and error/success patterns are not promoted because current inspectable evidence did not establish them at the required boundary.

## 5. Layout Principles

- Marketing uses wide centered sections with strong vertical breaks and generous 30–45px internal spacing.
- Editorial cards use large 35px corners; documentation controls remain compact at 6–8px.
- Do not transfer marketing's full-pill geometry to uninspected product controls.
- Preserve the separation between marketing composition and documentation density.

## 6. Depth & Elevation

Current promoted surfaces are flat. Marketing cards use background, border, radius, and photography for separation; no reusable shadow token was established. Documentation overlays and authenticated product elevation remain unresolved.

## 7. Do's and Don'ts

### Do
- Use current surface-local evidence and label marketing versus documentation roles.
- Keep warm cream, charcoal actions, and editorial card geometry together on marketing surfaces.
- Preserve Bezier as official system history and implementation context.

### Don't
- Do not call Cobalt the universal current primary without current product evidence.
- Do not substitute a system font, BildV5, or Noto declaration for the loaded surface family.
- Do not generate Inbox components or semantic states from generic SaaS conventions.

## 8. Responsive Behavior

The public marketing system retains full-pill controls and rounded editorial cards while reducing horizontal section padding and tab padding on narrower layouts. Exact private-product breakpoints and mobile-native behavior are unresolved and should not be inferred from the marketing site.

## 9. Agent Prompt Guide

> Build a warm, editorial customer-conversation surface using a white and cream canvas, black text, charcoal full-pill conversion actions, Pretendard marketing typography, and 35px bordered cards. Use the Inter documentation scale only for documentation-like surfaces. Do not add Cobalt product controls, inbox states, inputs, or dialogs unless a current product source is supplied.

## 10. Voice & Tone

Official Channel Talk writing centers customers, conversations, and practical operational improvement. The tone is direct and optimistic rather than ceremonial: explain what a team can do, why it improves a customer relationship, and where AI removes routine work. Product updates should name the affected workflow, the person who benefits, and the next available action. Support guidance should stay calm and procedural, while brand stories may be warmer and more reflective. Avoid unsupported performance numbers, excessive futurism, and generic “all-in-one revolution” language.

## 11. Brand Narrative

Channel Talk presents customer communication as a durable operating capability rather than a support widget. Official rebrand material describes the visual change as a way to express the company's identity and culture more honestly, while official product updates show the platform continuing to combine messaging operations with AI-assisted service. The public Bezier repository is a separate but complementary signal: Channel has invested in reusable product primitives, even though this reference does not use that repository to fabricate current private-app values. Across these sources, the company consistently frames conversation as the place where support, sales, and long-term customer understanding meet. The visual move toward warmer editorial surfaces supports that human relationship, while the operational product story remains structured around inboxes, configuration, documentation, and AI-assisted work. Reuse should therefore strengthen continuity between people and tools, not flatten every surface into one marketing style.

## 12. Principles

1. **The customer is the answer.** Start from a real conversation or task rather than feature spectacle.
2. **Warmth supports operational clarity.** Editorial cream, photography, and rounded cards humanize a complex service platform.
3. **Evidence domains stay separate.** Marketing, documentation, Bezier, and private product surfaces cannot silently overwrite one another.
4. **AI should remove routine work.** Describe assistance in terms of what people can focus on next, without inventing outcomes.

## 13. Personas

Public product material supports task contexts, not verified biographical personas:
- A support lead reviewing conversations and adopting current AI-assisted operations.
- A frontline agent using product documentation to configure or troubleshoot a customer channel.
- A growth or commerce operator evaluating whether Channel Talk fits an ongoing customer relationship workflow.

Project-specific names, ages, company sizes, locations, and quantitative goals are intentionally unspecified and must come from the product brief rather than this public reference.

## 14. States

Only the current marketing tab selected state and a compact documentation control's pressed state were safely observed. No canonical empty, loading, error, success, disabled, or authenticated Inbox state is promoted.

## 15. Motion & Easing

No reusable current duration or easing token was established by this capture. The six tab expansions prove state change, not a universal animation specification; motion values remain absent.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://channel.io/kr ; https://channel.io/us ; https://docs.channel.io/updates/en/articles/Notice-Channel-Talk-Major-Updates--b3d45997 ; https://docs.channel.io/help/en/articles/94f34984 ; https://channel.io/kr/blog/articles/rebranding-channeltalk-3aff8113 ; https://github.com/channel-io/bezier-react
**Tier 2 attempts:** getdesign.md/channeltalk and styles.refero.design search; unavailable as positive evidence
**Conflicts unresolved:** none
