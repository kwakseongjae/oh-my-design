---
id: apple
name: Apple
country: US
category: consumer-tech
homepage: "https://www.apple.com"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: apple
verified: "2026-07-11"
omd: "0.1"
ds:
  name: Human Interface Guidelines
  url: "https://developer.apple.com/design/human-interface-guidelines"
  type: system
  description: Apple's official platform design guidance; this reference separately labels apple.com and HIG documentation-site UI.
  og_image: "https://docs.developer.apple.com/tutorials/developer-og.jpg"
verification_v2:
  schema: 2
  checked: "2026-07-11"
  surfaces:
    - { id: apple-home, kind: marketing, url: "https://www.apple.com/", inspected: "2026-07-11" }
    - { id: apple-store-product, kind: commerce, url: "https://www.apple.com/shop/product/mw5g3am/a/siri-remote", inspected: "2026-07-11" }
    - { id: hig-buttons, kind: design-system, url: "https://developer.apple.com/design/human-interface-guidelines/buttons", inspected: "2026-07-11" }
    - { id: hig-components, kind: design-system, url: "https://developer.apple.com/design/human-interface-guidelines/components", inspected: "2026-07-11" }
  sources:
    - { id: apple-live, kind: product-surface, url: "https://www.apple.com/", captured: "2026-07-11" }
    - { id: apple-store-live, kind: product-surface, url: "https://www.apple.com/shop/product/mw5g3am/a/siri-remote", captured: "2026-07-11" }
    - { id: hig-buttons-live, kind: official-doc, url: "https://developer.apple.com/design/human-interface-guidelines/buttons", captured: "2026-07-11" }
    - { id: hig-components-live, kind: official-doc, url: "https://developer.apple.com/design/human-interface-guidelines/components", captured: "2026-07-11" }
  claims:
    "tokens.colors.primary": &apple_live { surface_id: apple-home, source_id: apple-live, method: computed-style, captured: "2026-07-11" }
    "tokens.colors.brand": *apple_live
    "tokens.colors.canvas": *apple_live
    "tokens.colors.canvas-dark": *apple_live
    "tokens.colors.surface": *apple_live
    "tokens.colors.foreground": *apple_live
    "tokens.colors.on-primary": *apple_live
    "tokens.colors.muted": &hig_live { surface_id: hig-components, source_id: hig-components-live, method: computed-style, captured: "2026-07-11" }
    "tokens.colors.secondary": *hig_live
    "tokens.colors.link": *apple_live
    "tokens.colors.link-on-dark": *apple_live
    "tokens.typography.family.display": *apple_live
    "tokens.typography.family.text": *apple_live
    "tokens.typography.display-hero.size": *apple_live
    "tokens.typography.display-hero.weight": *apple_live
    "tokens.typography.display-hero.lineHeight": *apple_live
    "tokens.typography.display-hero.tracking": *apple_live
    "tokens.typography.section.size": *apple_live
    "tokens.typography.section.weight": *apple_live
    "tokens.typography.section.lineHeight": *apple_live
    "tokens.typography.tile-heading.size": *apple_live
    "tokens.typography.tile-heading.weight": *apple_live
    "tokens.typography.tile-heading.lineHeight": *apple_live
    "tokens.typography.tile-heading.tracking": *apple_live
    "tokens.typography.body.size": *apple_live
    "tokens.typography.body.weight": *apple_live
    "tokens.typography.body.lineHeight": *apple_live
    "tokens.typography.body.tracking": *apple_live
    "tokens.typography.body-small.size": *apple_live
    "tokens.typography.body-small.weight": *apple_live
    "tokens.typography.body-small.lineHeight": *apple_live
    "tokens.typography.body-small.tracking": *apple_live
    "tokens.typography.caption.size": *apple_live
    "tokens.typography.caption.weight": *apple_live
    "tokens.typography.caption.lineHeight": *apple_live
    "tokens.typography.caption.tracking": *apple_live
    "tokens.spacing.compact": *apple_live
    "tokens.spacing.control-inline": *apple_live
    "tokens.spacing.pill-block": *apple_live
    "tokens.spacing.pill-inline": *apple_live
    "tokens.spacing.content": *apple_live
    "tokens.rounded.control": *apple_live
    "tokens.rounded.docs-card": *hig_live
    "tokens.rounded.marketing-pill": *apple_live
    "tokens.components.marketing-primary.type": *apple_live
    "tokens.components.marketing-primary.bg": *apple_live
    "tokens.components.marketing-primary.fg": *apple_live
    "tokens.components.marketing-primary.radius": *apple_live
    "tokens.components.marketing-primary.padding": *apple_live
    "tokens.components.marketing-primary.height": *apple_live
    "tokens.components.marketing-primary.font": *apple_live
    "tokens.components.marketing-primary.states": *apple_live
    "tokens.components.marketing-primary.use": *apple_live
    "tokens.components.marketing-outline.type": *apple_live
    "tokens.components.marketing-outline.bg": *apple_live
    "tokens.components.marketing-outline.fg": *apple_live
    "tokens.components.marketing-outline.border": *apple_live
    "tokens.components.marketing-outline.radius": *apple_live
    "tokens.components.marketing-outline.padding": *apple_live
    "tokens.components.marketing-outline.height": *apple_live
    "tokens.components.marketing-outline.font": *apple_live
    "tokens.components.marketing-outline.states": *apple_live
    "tokens.components.marketing-outline.use": *apple_live
    "tokens.components.marketing-compact.type": *apple_live
    "tokens.components.marketing-compact.bg": *apple_live
    "tokens.components.marketing-compact.fg": *apple_live
    "tokens.components.marketing-compact.radius": *apple_live
    "tokens.components.marketing-compact.padding": *apple_live
    "tokens.components.marketing-compact.height": *apple_live
    "tokens.components.marketing-compact.font": *apple_live
    "tokens.components.marketing-compact.states": *apple_live
    "tokens.components.marketing-compact.use": *apple_live
    "tokens.components.product-gallery-tab.type": &store_live { surface_id: apple-store-product, source_id: apple-store-live, method: computed-style, captured: "2026-07-11" }
    "tokens.components.product-gallery-tab.fg": *store_live
    "tokens.components.product-gallery-tab.height": *store_live
    "tokens.components.product-gallery-tab.font": *store_live
    "tokens.components.product-gallery-tab.states": *store_live
    "tokens.components.product-gallery-tab.use": *store_live
    "tokens.components.hig-reference-card.type": *hig_live
    "tokens.components.hig-reference-card.bg": *hig_live
    "tokens.components.hig-reference-card.radius": *hig_live
    "tokens.components.hig-reference-card.states": *hig_live
    "tokens.components.hig-reference-card.use": *hig_live
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-11"
  note: "apple.com marketing/commerce values are distinct from HIG guidance and the HIG documentation site's own chrome."
  colors:
    primary: "#0071e3"
    brand: "#000000"
    canvas: "#f5f5f7"
    canvas-dark: "#000000"
    surface: "#ffffff"
    foreground: "#1d1d1f"
    on-primary: "#ffffff"
    muted: "#6e6e73"
    secondary: "#515154"
    link: "#0066cc"
    link-on-dark: "#2997ff"
  typography:
    family: { display: "SF Pro Display", text: "SF Pro Text" }
    display-hero: { size: 56, weight: 600, lineHeight: "60px", tracking: "-0.28px" }
    section: { size: 40, weight: 600, lineHeight: "44px" }
    tile-heading: { size: 28, weight: 400, lineHeight: "32px", tracking: "0.196px" }
    body: { size: 17, weight: 400, lineHeight: "25px", tracking: "-0.374px" }
    body-small: { size: 14, weight: 400, lineHeight: "18.0008px", tracking: "-0.224px" }
    caption: { size: 12, weight: 400, lineHeight: "16.0005px", tracking: "-0.12px" }
  spacing: { compact: 8, control-inline: 15, pill-block: 11, pill-inline: 21, content: 20 }
  rounded: { control: 8, docs-card: 18, marketing-pill: 980 }
  components_harvested: true
  components:
    marketing-primary: { type: button, bg: "#0071e3", fg: "#ffffff", radius: "980px", padding: "11px 21px", height: "44px", font: "17px / 400", states: "default captured; hover not retained", use: "large apple.com marketing CTA" }
    marketing-outline: { type: button, bg: "transparent", fg: "#0066cc", border: "1px solid #0066cc", radius: "980px", padding: "11px 21px", height: "44px", font: "17px / 400", states: "default captured; hover not retained", use: "secondary apple.com marketing CTA" }
    marketing-compact: { type: button, bg: "#0071e3", fg: "#ffffff", radius: "980px", padding: "8px 15px", height: "36px", font: "14px / 400", states: "default captured; hover not retained", use: "compact apple.com tile CTA" }
    product-gallery-tab: { type: tab, fg: "#1d1d1f", height: "53px", font: "17px / 400", states: "selected and unselected gallery thumbnails", use: "Apple Store product image selection" }
    hig-reference-card: { type: card, bg: "#ffffff", radius: "18px", states: "default documentation card; hover not retained", use: "HIG documentation index card, not a native-platform component token" }
---

# Design System Inspiration of Apple

## 1. Visual Theme & Atmosphere

Apple’s current design language makes hardware, software, content, and controls feel like one continuous system. On the public web, a small neutral palette, SF Pro optical families, and conspicuous blue actions leave product photography and page composition to carry most of the drama. Across Apple platforms, the newer Liquid Glass direction adds a translucent functional layer for controls and navigation while keeping content visually primary. The recognizable effect is not minimalism for its own sake: precise hierarchy, familiar behavior, platform harmony, and carefully limited ornament make complex capabilities feel immediately usable.

This reference distinguishes three evidence domains: `apple.com` marketing, Apple Store commerce/product UI, and the Human Interface Guidelines documentation website. HIG guidance may describe native-platform components, but the computed style of the HIG website is only evidence for its documentation chrome.

**Key Characteristics:**
- SF Pro Text: 600 visible uses on current Apple public pages; SF Pro Display: 31
- Primary filled action `#0071e3`; text link `#0066cc`; dark-surface link `#2997ff`
- 44px large pill and 36px compact pill coexist on the current homepage
- HIG documentation cards use an 18px radius but are not native-platform component tokens

## 2. Color Palette & Roles

- **Primary Action** (`#0071e3`): current filled buttons across Apple-owned web surfaces.
- **Brand / Dark Canvas** (`#000000`): identity and immersive dark sections.
- **Fog Canvas** (`#f5f5f7`): light section and footer background.
- **Surface** (`#ffffff`): white content and HIG card surfaces.
- **Foreground** (`#1d1d1f`): principal text and selected commerce state.
- **Muted** (`#6e6e73`): secondary HIG documentation text.
- **Secondary** (`#515154`): another current HIG documentation neutral.
- **On Primary** (`#ffffff`): text on blue filled actions.
- **Link** (`#0066cc`): links and outline-button text/border on light surfaces.
- **Link on Dark** (`#2997ff`): brighter blue observed on dark Apple sections.

Do not infer a universal native-platform semantic palette from these web values. HIG platform colors are dynamic and context-dependent; this pass records public web evidence.

## 3. Typography Rules

### Font Family
- **Display**: `SF Pro Display`, loaded/high confidence, 31 visible uses across current Apple public pages.
- **Text**: `SF Pro Text`, loaded/high confidence, 600 visible uses across marketing and store surfaces; another 734 on HIG documentation surfaces.
- **SF Mono**: declared on the HIG site but not visibly used in this capture, so it is not promoted.

| Role | Family | Size | Weight | Line Height | Tracking |
|---|---|---:|---:|---:|---:|
| Display Hero | SF Pro Display | 56px | 600 | 60px | -0.28px |
| Section | SF Pro Display | 40px | 600 | 44px | normal |
| Tile Heading | SF Pro Display | 28px | 400 | 32px | 0.196px |
| Body | SF Pro Text | 17px | 400 | 25px | -0.374px |
| Body Small | SF Pro Text | 14px | 400 | 18.0008px | -0.224px |
| Caption | SF Pro Text | 12px | 400 | 16.0005px | -0.12px |

| Evidence class | Apple status |
|---|---|
| **Official product-use** | SF Pro is the system family for Apple platforms; SF Compact serves watchOS; SF Mono serves coding environments such as Xcode |
| **Live surface-use** | SF Pro Text and SF Pro Display are loaded and visibly used across inspected Apple marketing, Store, and HIG web surfaces |
| **Official distributed asset** | Apple provides SF Pro, SF Compact, SF Mono, New York, script extensions, and design resources under Apple-specific licenses |
| **Declared-only** | SF Mono was declared on the inspected HIG website but not observed as visible page chrome |
| **Unresolved** | A universal mapping from Apple web roles to every native platform context; platform APIs remain the authority |

## 4. Component Stylings

### apple.com Marketing Primary
- Background: `#0071e3`
- Text: `#ffffff`
- Radius: 980px
- Padding: 11px 21px
- Height: 44px
- Font: 17px / 400 / SF Pro Text
- States: default captured; hover not retained
- Use: large homepage marketing CTA

### apple.com Marketing Outline
- Background: transparent
- Text: `#0066cc`
- Border: 1px solid `#0066cc`
- Radius: 980px
- Padding: 11px 21px
- Height: 44px
- Font: 17px / 400 / SF Pro Text
- States: default captured; hover not retained
- Use: secondary marketing CTA paired with a filled action

### apple.com Marketing Compact
- Background: `#0071e3`
- Text: `#ffffff`
- Radius: 980px
- Padding: 8px 15px
- Height: 36px
- Font: 14px / 400 / SF Pro Text
- States: default captured; hover not retained
- Use: compact product-tile CTA on the current homepage

### Apple Store Product Gallery Tab
- Text: `#1d1d1f`
- Height: 53px in the captured product thumbnail navigation
- Font: 17px / 400 / SF Pro Text
- States: selected and unselected thumbnails
- Use: choosing a product image on an Apple Store product page

### HIG Documentation Reference Card
- Background: `#ffffff`
- Radius: 18px
- States: default documentation card; hover not retained
- Use: HIG component-index navigation only. Do not present this as a native iOS or macOS card token.

---

**Verified:** 2026-07-11 (verification v2, 4 current Apple-owned surfaces)
**Tier 1 sources:** https://www.apple.com/ https://www.apple.com/shop/product/mw5g3am/a/siri-remote https://developer.apple.com/design/human-interface-guidelines/buttons https://developer.apple.com/design/human-interface-guidelines/components
**Tier 2 sources:** https://styles.refero.design/style/a4f123f2 and https://styles.refero.design/style/c9cabb96 remain historical cross-checks only; https://getdesign.md/apple did not provide an importable current record in this run.
**Surface split:** apple.com marketing, Apple Store product UI, and HIG documentation chrome are retained as separate evidence domains.
**Conflicts unresolved:** none

## 5. Layout Principles

- Public marketing sections use full-width composition and centered content; store pages use denser product-detail layout.
- Exact spacing promoted here is component-local: 8px and 15px for compact action padding; 11px and 21px for the large pill; 20px as a recurrent content cluster.
- Avoid treating every sampled margin from Apple page composition as a universal system token.

## 6. Depth & Elevation

No shadow token is canonical in this revision. Captured primary and outline buttons reported no shadow, and HIG reference cards were flat in computed style. Product imagery and color contrast create depth on the inspected surfaces.

## 7. Do's and Don'ts

### Do
- Use SF Pro Display for verified large display roles and SF Pro Text for body/control roles.
- Name Apple web variants by surface and size.
- Use `#0071e3` for filled actions and `#0066cc` for light-surface links/outline actions.
- Keep selected state explicit in gallery-style tabs.
- Label HIG website chrome separately from native-platform HIG guidance.

### Don't
- Don't call the HIG website's 18px card a universal Apple platform card.
- Don't promote declared-only SF Mono or icon fonts as visible UI families.
- Don't treat `#0066cc` as a filled-button background.
- Don't collapse 36px and 44px marketing controls into one invented default.
- Don't infer hover, disabled, or focus visuals that were not retained by the capture.

## 8. Responsive Behavior

The homepage and store surface are responsive, but this pass does not promote universal breakpoints. Preserve control geometry at the inspected desktop surface, then use platform-specific HIG guidance when targeting iOS, macOS, watchOS, tvOS, or visionOS rather than scaling web values mechanically.

## 9. Agent Prompt Guide

- “Create a large Apple web CTA with `#0071e3`, white text, 44px height, 980px radius, 11px 21px padding, and SF Pro Text 17px/400.”
- “Pair it with an outline action using transparent background and `#0066cc` text/border.”
- “For a compact homepage tile, use the separately verified 36px / 8px 15px variant.”
- “When building a native app, treat this web reference as inspiration and consult the relevant platform HIG instead of copying web geometry.”

## 10. Voice & Tone

Apple’s current design guidance treats language as part of simplicity and agency. Labels should be concise, recognizable, and directly tied to what happens next; feedback should keep people informed and in control. Product pages tend to make one capability the subject of a headline and use short actions, while platform guidance explains the rationale and constraints without promotional filler.

Clarity does not mean stripping away character. Apple’s current principles pair **Simplicity** with **Craft** and **Delight**: remove what is unnecessary, care about every detail, and create defining moments that support the task rather than interrupt it. Privacy, safety, permissions, and destructive actions require transparent language and recoverability, not euphemism.

## 11. Brand Narrative

Apple publishes the Human Interface Guidelines as a living platform design system rather than a static visual kit. The current principles start from how people think, feel, and act, then organize design around purpose, agency, responsibility, familiarity, flexibility, simplicity, craft, and delight. This makes the system’s restraint functional: interfaces are expected to help people act, preserve context, recover from mistakes, and trust how their information is handled.

The 2025 software redesign introduced Liquid Glass across iOS, iPadOS, macOS, watchOS, and tvOS. Apple describes it as a shared material language that creates harmony while preserving what makes each platform distinct. Controls and navigation occupy a translucent functional layer above content; they should not become a decorative glass effect spread across the content layer.

Typography follows the same system logic. SF Pro is neutral and flexible, with optical sizing and platform integration; SF Compact adapts to narrow watch contexts; SF Mono supports alignment in coding environments; New York provides a serif companion. The family names matter less than using the platform role, license, and context correctly.

## 12. Principles

These are implementation principles derived from the verified public surfaces:

1. Let product content dominate while controls remain visually restrained.
2. Use one clear chromatic action accent per local composition.
3. Match typography optical role to size: Display for large hierarchy, Text for reading and controls.
4. Keep marketing, commerce, documentation, and native-platform evidence separate.
5. Prefer verified component-local measurements over a fictional universal Apple scale.

## 13. Personas

These are official design contexts from the Human Interface Guidelines, not invented demographic personas.

- **A person pursuing a goal:** expects the interface to stay out of the way, provide feedback, and make mistakes reversible.
- **A person protecting sensitive information:** needs clear reasons for permissions, transparent data behavior, and safe defaults.
- **A person using a different device, input, language, or accessibility setting:** needs the experience to adapt while preserving familiar structure and context.
- **A person learning a new interaction:** relies on established physical and digital patterns plus consistent behavior to build confidence quickly.

## 14. States

| Component | Verified state evidence |
|---|---|
| Marketing buttons | default geometry captured; hover/pressed/disabled not retained |
| Product gallery tab | selected and unselected thumbnail states |
| HIG reference card | default documentation state only |

## 15. Motion & Easing

No exact Apple motion token is promoted from this web capture. Use relevant platform HIG guidance and reduced-motion support for native implementation; label any web animation duration or easing as a local extension until verified.
