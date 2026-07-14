---
id: ollama
name: Ollama
country: US
category: ai
homepage: "https://ollama.com"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: ollama
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://ollama.com/", inspected: "2026-07-13" }
    - { id: surface-2, kind: marketing, url: "https://ollama.com/pricing", inspected: "2026-07-13" }
    - { id: surface-3, kind: documentation, url: "https://docs.ollama.com/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://ollama.com/", captured: "2026-07-13" }
    - { id: pricing-live, kind: product-surface, url: "https://ollama.com/pricing", captured: "2026-07-13" }
    - { id: docs-live, kind: official-doc, url: "https://docs.ollama.com/", captured: "2026-07-13" }
    - { id: repository, kind: official-doc, url: "https://github.com/ollama/ollama", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.ink": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.action": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.muted": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.hairline": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.outline": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.sans": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.mono": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body-sm.size": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body-sm.weight": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body-sm.lineHeight": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body-sm.use": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.size": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.weight": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.lineHeight": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.use": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.nav.size": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.nav.weight": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.nav.lineHeight": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.nav.use": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.section.size": { surface_id: surface-2, source_id: pricing-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.section.weight": { surface_id: surface-2, source_id: pricing-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.section.lineHeight": { surface_id: surface-2, source_id: pricing-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.section.use": { surface_id: surface-2, source_id: pricing-live, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.xxs": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.xs": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.sm": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.md": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.lg": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.xl": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.2xl": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.full": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.shadow.none": { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
tokens:
  source: reconciled
  extracted: "2026-07-13"
  colors:
    ink: "#000000"
    action: "#262626"
    canvas: "#ffffff"
    muted: "#737373"
    hairline: "#e5e7eb"
    outline: "#d4d4d4"
  typography:
    family: { sans: "ui-sans-serif", mono: "ui-monospace" }
    body-sm: { size: 14, weight: 400, lineHeight: 1.43, use: "Observed product text and input" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Observed product list and body text" }
    nav: { size: 18, weight: 400, lineHeight: 1.56, use: "Product navigation and header controls" }
    section: { size: 30, weight: 500, lineHeight: 1.2, use: "Observed pricing heading" }
  spacing: { xxs: 4, xs: 6, sm: 8, md: 12, lg: 16, xl: 24, 2xl: 32 }
  rounded: { full: 9999 }
  shadow:
    none: "none"
  components: {}
  components_harvested: false
---

# Design System Inspiration of Ollama

## 1. Visual Theme & Atmosphere

Ollama is a developer platform for getting open models running locally, through an app, CLI, API, and integrations. Its public product marketing surface makes that technical proposition feel deliberately direct: a white canvas, black and charcoal calls to action, spare text links, terminal-shaped instructions, and full-pill controls. The current homepage pairs the local-first promise with an optional cloud offer—"Start local. Scale with cloud."—rather than replacing the local workflow. That evolution is echoed in the pricing surface, which introduces Free, Pro, and Max tiers while keeping download and local use visible. Visually, the recognizable expression is restrained neutral contrast and rounded product controls, not an independently named color system or decorative campaign treatment.

The July 2026 company post describes the product as a way to make open models easy to run, build with, own, and keep private; its homepage and pricing page now present cloud capacity as an extension for larger or parallel workloads. The live values below describe those public marketing product surfaces at the captured desktop viewport. Documentation chrome is recorded separately and is not promoted into product tokens.

**Key characteristics:**

- White canvas, black text, and charcoal (`#262626`) primary CTAs.
- Full-pill (`9999px`) controls for the observed product inputs and calls to action.
- No observed drop shadow on the product controls in the supplied capture.
- System-stack body text plus a separately unresolved rounded display-family observation.
- Terminal and command language used as product content, not ornament.

## 2. Color Palette & Roles

### Product marketing surfaces

- **Ink** (`#000000`): observed primary text and the text of white pricing actions.
- **Action charcoal** (`#262626`): observed header download and hero CTA background.
- **Canvas** (`#ffffff`): observed page and inverted pricing CTA surface.
- **Muted** (`#737373`): observed secondary product text.
- **Hairline** (`#e5e7eb`): observed product border color.
- **Outline** (`#d4d4d4`): observed border on a white product CTA.

### Documentation chrome — separate domain

The captured docs homepage uses additional light-gray, charcoal, and semantic color values. Those belong to `docs.ollama.com` chrome and are not product-marketing tokens. No gradient token is asserted from the supplied evidence.

## 3. Typography Rules

### Official product-use

Ollama’s official homepage, pricing page, documentation, and public repository all frame the product around local and open-model workflows. They do not provide a first-party typography specification or a downloadable Ollama-branded typeface in the sources reviewed for this update.

### Live computed product-surface use

`ui-sans-serif` is the high-confidence visible system stack across the captured homepage and pricing page; `system-ui` is also observed in the bundle. These are system-stack facts, not a claim to a proprietary Ollama font. The observed product text scale includes 14px/400/20px, 16px/400/24px, 18px/400/28px, and a 30px/500/36px pricing heading.

`SF Pro Rounded` appears in computed headings on the homepage and pricing page (including 36px/500/40px and 48px/600/48px), but the supplied FontFaceSet/source reconciliation contains no matching loaded face or source URL. It remains **unresolved** and is deliberately excluded from `tokens.typography.family`. Apple describes SF Pro and its rounded variant as Apple platform fonts; that does not establish an Ollama-distributed webfont or a portable product token.

`ui-monospace` is observed in product command-related UI and is retained as a system-stack token. The capture does not establish a custom downloadable monospace family for the product.

### Declared-only documentation assets

On `docs.ollama.com`, the raw bundle declares `Inter`, `paperMono`, `CMU Typewriter Text`, and `Latin Modern` sources. It records zero visible usage for each. They remain declared-only documentation assets, not product typography tokens or live specimens. The docs surface is therefore not evidence for the homepage/pricing typography system.

### Typography application

| Role | Family status | Observed size / weight / line height | Surface boundary |
|------|---------------|--------------------------------------|------------------|
| Product body | system `ui-sans-serif` | 14px / 400 / 20px; 16px / 400 / 24px | homepage and pricing |
| Product navigation | system `ui-sans-serif` | 18px / 400 / 28px | homepage |
| Pricing section title | system `ui-sans-serif` | 30px / 500 / 36px | pricing |
| Rounded display headings | unresolved `SF Pro Rounded` | 36px / 500 / 40px; 48px / 600 / 48px | homepage and pricing; no loaded/source match |
| Product command UI | system `ui-monospace` | 14px / 400 / 22.75px | homepage |
| Docs fonts | declared-only | no visible usage recorded | docs only |

## 4. Component Stylings

The variants below preserve the captured selector, surface, and default-state provenance. The collector recorded zero interaction snapshots, so no hover, focus, pressed, disabled, error, dialog, or menu state is specified.

### Product marketing — Header controls

**Sign-in ghost**
- Background: `rgba(0, 0, 0, 0.05)`
- Text: `#000000`
- Radius: `9999px`
- Padding: `6px 16px`
- Font: `18px / 400 / ui-sans-serif`
- Use: Homepage header link at `home::[data-omd-capture="5"]`.

**Download charcoal CTA**
- Background: `#262626`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: `6px 16px`
- Font: `18px / 400 / ui-sans-serif`
- Use: Homepage header CTA at `home::[data-omd-capture="6"]`.

### Product marketing — Hero and pricing actions

**Hero charcoal CTA**
- Background: `#262626`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: `12px 32px`
- Font: `18px / 500 / ui-sans-serif`
- Use: Homepage hero action at `home::[data-omd-capture="10"]`.

**Pricing outlined CTA**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #d4d4d4`
- Radius: `9999px`
- Padding: `8px 24px`
- Font: `14px / 500 / ui-sans-serif`
- Use: Homepage pricing action at `home::[data-omd-capture="12"]`.

**Pricing white CTA**
- Background: `#ffffff`
- Text: `#000000`
- Radius: `9999px`
- Padding: `8px 24px`
- Font: `14px / 500 / ui-sans-serif`
- Use: Homepage pricing action at `home::[data-omd-capture="13"]`.

### Product marketing — Input

**Pill input**
- Text: `#000000`
- Border: `0px solid #6b7280`
- Radius: `9999px`
- Padding: `10px 12px`
- Font: `14px / 400 / ui-sans-serif`
- Use: Homepage input at `home::[data-omd-capture="4"]`; also observed on pricing.

### Documentation chrome — separate domain

**Docs search control**
- Background: `#ffffff`
- Text: `#6f6f6f`
- Radius: `12px`
- Padding: `0px 12px 0px 14px`
- Font: `14px / 400 / ui-sans-serif`
- Use: Docs-only search button at `surface-3::[data-omd-capture="5"]`.

**Docs link card**
- Background: `#ffffff`
- Border: `1px solid oklab(0.144787 0.00000661612 0.00000289828 / 0.1)`
- Radius: `16px`
- Font: `16px / 400 / ui-sans-serif`
- Use: Docs-only link cards at `surface-3::[data-omd-capture="34"]` and related selectors.

## 5. Layout Principles

### Spacing system

The captured bundle clusters spacing at 4, 6, 8, 12, 16, 24, and 32px. These are observed values, not a published Ollama spacing scale. Header actions use 6px 16px padding, the hero CTA uses 12px 32px, and the product input uses 10px 12px.

### Product composition

- The homepage leads with an install command and a narrow set of entry points: Models, Docs, Pricing, Sign in, and Download.
- The cloud proposition follows the local starting point instead of displacing it.
- Pricing is presented as Free, Pro, Max, and an announced Team tier on the captured official pricing page.
- Documentation is a separate content surface with navigation, search, cards, and API/integration paths; its chrome should not dictate the public product-marketing layout.

### Radius boundary

`9999px` is directly observed on the product controls recorded in §4. The 12px and 16px radii in this update are confined to documentation chrome; they are not generalized to the product marketing surface.

## 6. Depth & Elevation

The captured homepage and pricing controls in §4 have `box-shadow: none`. Separate product elements can only be described when directly measured; this reference does not turn the absence of shadow on the sampled controls into a universal product rule. Docs cards carry transparent ring values in the raw capture, not an elevated product-card token.

## 7. Do's and Don'ts

### Do

- Use `#262626` with white text for the observed dark product CTA treatment.
- Use full-pill geometry only for controls whose observed product provenance supports it.
- Keep body and navigation type on the system stack unless a loadable font is independently verified.
- Keep local use prominent when describing the current local-plus-cloud product story.
- Treat docs chrome as its own surface when borrowing patterns.

### Don't

- Do not substitute a local or system font and label it `SF Pro Rounded`.
- Do not promote declared docs fonts to the product UI family.
- Do not generalize docs cards or their 12px/16px radii to marketing-product components.
- Do not specify hover, focus, pressed, disabled, or error visuals from this capture; interaction coverage is zero.
- Do not invent a published spacing, shadow, or color scale where only clustered computed values were collected.

## 8. Responsive Behavior

The supplied evidence is a 1440×900 desktop capture for each surface. It confirms the desktop component values in §4 but does not establish mobile breakpoints, collapsed navigation, touch targets, or responsive asset behavior. Those fields are intentionally absent rather than extrapolated.

## 9. Agent Prompt Guide

### Safe product-marketing brief

> Create a sparse developer-tool landing section using a white canvas, `#000000` text, a `#262626` full-pill primary CTA with white text, and system sans body type. Keep the local workflow explicit. Do not claim or substitute SF Pro Rounded, and do not import documentation-site cards or declared docs fonts.

### Safe documentation brief

> Treat documentation as a separate surface. A captured docs search control uses a white 12px-radius shell and a docs link card uses a white 16px-radius, 1px-border treatment. Keep those values out of product-marketing tokens unless new product-surface evidence supports them.

## 10. Voice & Tone

The official homepage and repository use concise, action-first language: installation commands, “Get started,” “Download,” and “Start local. Scale with cloud.” The July 2026 company post explains the larger idea in direct developer language—open models should be easy to build, run, and own.

| Do | Don't |
|----|-------|
| Lead with the concrete task or command. | Lead with abstract AI hype. |
| Explain local control and optional scale plainly. | Imply cloud use is required. |
| Name the developer workflow or integration. | Hide the next technical step behind marketing language. |

Verified voice samples: “The easiest way to build with open models,” “Start local. Scale with cloud.”, and “Your model. Your machine. Your data.”

## 11. Brand Narrative

Ollama presents open models as something developers should be able to run on their own machine and integrate through a simple API. Its official repository and documentation make that practical: download the software, run a model, connect an integration, or use the API.

In the company’s July 2026 post, Jeff and Michael connect Ollama to their earlier work on Kitematic and Docker Desktop, then describe a return to making complex developer infrastructure easier to run. The same post frames the present product around ownership, affordability, and privacy, with cloud capacity offered when local hardware is not enough.

That story makes the quiet, command-led public surface coherent: it lets a local workflow remain the primary mental model while acknowledging a growing cloud product.

## 12. Principles

1. **Open models should be practical to run.**
   *UI implication:* make installation, model selection, and API entry points easy to scan.
2. **Ownership and privacy remain legible.**
   *UI implication:* explain the local path plainly and avoid making cloud the only visible route.
3. **Scale is an extension, not a replacement.**
   *UI implication:* distinguish local capability from optional cloud capacity in layout and copy.
4. **Developer actions come before persuasion.**
   *UI implication:* use commands, integrations, and links as primary content.

## 13. Personas

These are product-surface archetypes inferred from official use cases, not research personas or synthetic satisfaction claims.

- **Local-model developer:** wants to install Ollama, run a model, and call it from an app or API without treating a remote service as the default.
- **Integration builder:** connects a coding agent, editor, or application to open models using the official integrations and libraries.
- **Cloud-scale team member:** starts with the local workflow and needs larger or parallel cloud capacity for some work.

## 14. States

No product interaction-state variants are included in this update. The supplied collector recorded `interactionCount: 0` and no observed hover, focus, pressed, disabled, error, dialog, toast, or tab state. A future capture can add only states with selector, surface, raw computed value, and interaction provenance.

## 15. Motion & Easing

Some captured class strings declare color-transition utilities, but no interaction snapshot measured their resulting motion or state. No duration, easing, or motion token is asserted from this evidence.

---
**Verified:** 2026-07-13
**Tier 1 sources:** [Ollama homepage](https://ollama.com/) (marketing product surface; raw collector `home`), [Ollama pricing](https://ollama.com/pricing) (marketing product surface; raw collector `surface-2`), [Ollama docs](https://docs.ollama.com/) (documentation chrome only; raw collector `surface-3`), [Ollama’s official open-model narrative](https://ollama.com/blog/all-aboard-open-models), [official repository](https://github.com/ollama/ollama), [Apple SF font documentation](https://developer.apple.com/fonts/).
**Tier 2 sources:** [getdesign.md/ollama](https://getdesign.md/ollama) lists one community design; [Refero search](https://styles.refero.design/?q=Ollama) was attempted but did not return a fetchable result in this run.
**Conflicts unresolved:** none

Tier 2 supplied no conflicting measured values. SF Pro Rounded remains unresolved (computed-only, no FontFaceSet/source corroboration), rather than a Tier 2 conflict.
