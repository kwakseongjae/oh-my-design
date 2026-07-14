---
id: elevenlabs
name: ElevenLabs
country: US
category: ai
homepage: "https://elevenlabs.io"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: elevenlabs
verified: "2026-07-13"
omd: "0.1"
ds:
  name: ElevenLabs Brand
  url: "https://elevenlabs.io/brand"
  type: brand
  description: Official logo, symbol, naming, and platform-brand guidance.
  og_image: "https://elevenlabs.io/cover.png"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://elevenlabs.io/", inspected: "2026-07-12" }
    - { id: customer-story, kind: editorial, url: "https://elevenlabs.io/blog/clay-scales-content-production-and-agility-with-elevencreative", inspected: "2026-07-12" }
    - { id: pricing, kind: marketing-pricing, url: "https://elevenlabs.io/pricing", inspected: "2026-07-12" }
  sources:
    - { id: public-capture, kind: product-surface, url: "https://elevenlabs.io/", captured: "2026-07-12" }
    - { id: official-about, kind: official-doc, url: "https://elevenlabs.io/about", captured: "2026-07-13" }
    - { id: official-brand, kind: brand-asset, url: "https://elevenlabs.io/brand", captured: "2026-07-13" }
    - { id: official-docs, kind: official-doc, url: "https://elevenlabs.io/docs/overview/intro", captured: "2026-07-13" }
    - { id: official-safety, kind: official-doc, url: "https://elevenlabs.io/safety", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &public { surface_id: home, source_id: public-capture, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.surface": *public
    "tokens.colors.foreground": *public
    "tokens.colors.muted": *public
    "tokens.colors.hairline": *public
    "tokens.colors.primary": *public
    "tokens.colors.on-primary": *public
    "tokens.typography.family.ui": *public
    "tokens.typography.family.display": *public
    "tokens.typography.display.size": *public
    "tokens.typography.display.weight": *public
    "tokens.typography.display.lineHeight": *public
    "tokens.typography.display.use": *public
    "tokens.typography.body.size": *public
    "tokens.typography.body.weight": *public
    "tokens.typography.body.lineHeight": *public
    "tokens.typography.body.use": *public
    "tokens.typography.control.size": *public
    "tokens.typography.control.weight": *public
    "tokens.typography.control.lineHeight": *public
    "tokens.typography.control.use": *public
    "tokens.spacing.xs": *public
    "tokens.spacing.sm": *public
    "tokens.spacing.md": *public
    "tokens.spacing.lg": *public
    "tokens.spacing.xl": *public
    "tokens.spacing.xxl": *public
    "tokens.rounded.sm": *public
    "tokens.rounded.md": *public
    "tokens.rounded.lg": *public
    "tokens.rounded.full": *public
    "tokens.components.public-selected-tab.type": *public
    "tokens.components.public-selected-tab.radius": *public
    "tokens.components.public-selected-tab.padding": *public
    "tokens.components.public-selected-tab.font": *public
    "tokens.components.public-selected-tab.states": *public
    "tokens.components.public-selected-tab.use": *public
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Selector-backed values come only from supplied public marketing, editorial, and pricing captures. Official brand, documentation, policy, authenticated-product, and declared-font evidence remain separate."
  colors:
    canvas: "#ffffff"
    surface: "#f5f3f1"
    foreground: "#000000"
    muted: "#777169"
    hairline: "#e5e5e5"
    primary: "#000000"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Inter", display: "Waldenburg" }
    display: { size: 48, weight: 300, lineHeight: 1.08, use: "Waldenburg h1 on captured public marketing home" }
    body: { size: 18, weight: 400, lineHeight: 1.60, use: "Inter repeated body/list text on captured public routes" }
    control: { size: 15, weight: 400, lineHeight: 1.00, use: "Inter public primary-action sample" }
  spacing: { xs: 4, sm: 6, md: 8, lg: 12, xl: 16, xxl: 20 }
  rounded: { sm: 4, md: 12, lg: 16, full: 9999 }
  components:
    public-selected-tab: { type: tab, radius: 14, padding: "0px 21px 0px 20px", font: "18px/400 Inter", states: "selected via aria-selected=true; no measured visual delta", use: "One public-home selected tab; not a product-wide component contract" }
  components_harvested: true
---

# Design System Inspiration of ElevenLabs

## 1. Visual Theme & Atmosphere

ElevenLabs is an AI research and product company that began with human-like voice technology and now describes three distinct offerings: ElevenAgents for customer-facing voice and chat agents, ElevenCreative for creator and marketing workflows, and ElevenAPI for developers. Its official brand system keeps the parent identity spare—black, white, the two-bar “11” pause-like symbol, and disciplined naming—while giving each platform a separate graphic and color approach. The supplied public capture of the marketing home, a customer story, and pricing reinforces that distinction: black-and-white actions, warm near-neutrals, low-contrast borders, Inter for the repeated reading rhythm, and light Waldenburg display moments. These are public communication surfaces, not evidence of the authenticated product interface or documentation chrome. [About](https://elevenlabs.io/about) · [Brand guidelines](https://elevenlabs.io/brand)

**Key characteristics:**
- Parent-brand public chrome is neutral: `#000000`, `#ffffff`, `#f5f3f1`, and `#e5e5e5` are selector-backed observations.
- The official “11” symbol abstracts eleven and references a pause icon; its clear-space and naming rules belong to brand use, not a UI component library.
- Inter is the repeated live UI/body family; light-weight Waldenburg is a live public display family.
- ElevenAgents, ElevenCreative, and ElevenAPI have official platform-specific identities and must not be reduced to one parent-product palette.

## 2. Color Palette & Roles

### Selector-backed public surfaces
- **Canvas / inverse action** (`#ffffff`): observed page and public inverse-action background.
- **Primary public action / foreground** (`#000000`): observed black public action and primary text.
- **Warm public surface** (`#f5f3f1`): observed on a pill-shaped home control only; not a global canvas claim.
- **Muted text** (`#777169`): repeated public-route muted text.
- **Hairline** (`#e5e5e5`): repeated computed border color across the captured routes.
- **On primary** (`#ffffff`): observed text on the black public action.

### Official platform-brand boundary

The official brand page assigns blue to ElevenAgents, orange to ElevenCreative, and a monochrome approach to ElevenAPI. It does not provide selector-backed CSS values in this packet, so no platform hue is promoted into the parent token set. The supplied capture is public marketing/editorial/pricing evidence only; it does not establish an authenticated dashboard palette.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Live computed surface-use | **Inter** is loaded/high with 879 observed uses across the supplied public routes, with CDN source URLs. **Waldenburg** is loaded/high with 22 observed uses and three ElevenLabs CDN font files; observed samples include a 48px/300 home h1 and 36px/300 headings. |
| Official product-use | No official source in this packet names a product UI font family. The official documentation establishes the separate developer-doc domain but was not raw-style inspected. |
| Official distributed brand asset | The official brand page distributes logo and symbol assets, not a font package or font license. It supports brand-mark use only. |
| Declared-only | **Geist Mono**, **WaldenburgFH**, **Waldenburg-ML**, and listed fallback families have declared/source evidence in the capture but no visible loaded use. They are not UI-family tokens or specimen claims. |
| System / unresolved | No system fallback is substituted for an identified family; no font-license claim is made where an official font-license source was not found. |

### Selector-backed hierarchy

| Role | Family | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Public display | Waldenburg | 48px | 300 | 1.08 | Captured home h1 |
| Public section heading | Waldenburg | 36px | 300 | 1.17 | Captured public h2 |
| Repeated reading text | Inter | 18px | 400 | 1.60 | Captured list/body text |
| Public action sample | Inter | 15px | 400 | 1.00 | One black home action |

## 4. Component Stylings

### Public actions

**Black public action**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 0px 14px
- Font: 15px / 400 / Inter
- Use: One public-home action at `home::[data-omd-capture="63"]`; do not generalize to an authenticated product button.

**White public action**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 9999px
- Shadow: `rgba(0, 0, 0, 0.4) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 1px, rgba(0, 0, 0, 0.04) 0px 2px 4px`
- Use: Repeated public-route action at `home::[data-omd-capture="97"]`; capture does not establish its semantic variant name.

**Warm public pill**
- Background: `#f5f3f1`
- Text: `#000000`
- Radius: 9999px
- Padding: 0px 16px
- Font: 15px / 400 / Inter
- Use: Home-only public control at `home::[data-omd-capture="32"]`.

### Public content and navigation

**Editorial card**
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.4) 0px 0px 1.143px, rgba(0, 0, 0, 0.04) 0px 2px 4px`
- Use: Public-home article capture; it is not a general dashboard-card contract.

**Listbox trigger**
- Radius: 12px
- Padding: 0px 8px 0px 12px
- Font: 15px / 500 / Inter
- Use: Public-home button with `aria-haspopup="listbox"` at `home::[data-omd-capture="59"]`.

**Selected public tab**
- Radius: 14px
- Padding: 0px 21px 0px 20px
- Use: Selected `role="tab"` capture at `home::[data-omd-capture="12"]`. No selected-color change, hover, focus, or pressed style was observed.

The supplied artifact records zero interaction expansions. Its disabled buttons and `aria-selected` tabs are structural observations only; unmeasured state styling and unobserved menu/dialog variants are intentionally omitted.

## 5. Layout Principles

The supplied desktop public routes repeat compact 4px text-control corners alongside 12px/16px containers and full-pill actions. Their spacing observations include 4, 6, 8, 12, 16, and 20px values. Those values support a restrained public rhythm but do not prove a universal spacing scale or a product-layout grid. Official platform art direction—spheres for Agents and Chladni-pattern variations for Creative/API—belongs to platform-brand materials rather than to this parent marketing token set.

## 6. Depth & Elevation

Only two selector-backed public depth treatments are retained: the white public action’s dark 1px-like edge plus low-alpha 1px/2px lift, and the home editorial card’s `0px 2px 4px` low-alpha shadow. The capture has no evidence for a universal shadow ladder, modal elevation, or authenticated-product layers.

## 7. Do's and Don'ts

### Do
- Use the black/white action pairing only where the public-surface context calls for it.
- Keep live Inter reading/UI and light Waldenburg display roles distinct.
- Preserve official platform names exactly: `ElevenAgents`, `ElevenCreative`, and `ElevenAPI`.
- Treat Agents blue, Creative orange, and API monochrome as platform-brand direction until route-local UI values are observed.

### Don't
- Don’t apply parent marketing neutrals as an asserted authenticated-product palette.
- Don’t substitute a system or fallback face for declared-only Geist Mono or WaldenburgFH.
- Don’t invent hover, focus, expanded-menu, or pressed visual variants from structural ARIA/state observations.
- Don’t alter the official “11” symbol, its construction, or the prescribed platform names.

## 8. Responsive Behavior

No mobile viewport or breakpoint behavior is present in the supplied evidence. Preserve the observed public components’ content semantics when adapting a layout, but do not claim a specific collapse threshold, mobile navigation pattern, or touch-target size without new route-specific evidence.

## 9. Agent Prompt Guide

### Quick public-surface reference
- Canvas: `#ffffff`
- Foreground / black action: `#000000`
- Warm pill: `#f5f3f1`
- Muted text: `#777169`
- Hairline: `#e5e5e5`
- Display: Waldenburg 48px/300 on one public-home h1
- Reading text: Inter 18px/400/1.60

### Safe prompt boundary

“Create a public marketing action using the observed black `#000000` fill, white text, 9999px radius, 0px 14px padding, and 15px/400 Inter label. Keep it scoped to a parent-brand marketing context; do not present it as a measured ElevenLabs dashboard component.”

## 10. Voice & Tone

Official copy is direct, technically specific, and mission-led: the company describes itself as an AI research and product company making communication and creation with technology seamless, while its documentation routes audiences through product-specific paths and concrete API examples. Safety language is explicit rather than ornamental: the safety page frames safeguards as part of development, deployment, and misuse prevention. [About](https://elevenlabs.io/about) · [Documentation](https://elevenlabs.io/docs/overview/intro) · [Safety](https://elevenlabs.io/safety)

| Context | Evidence-backed direction |
|---|---|
| Parent brand | Describe the research/product company and its three named platforms plainly. |
| Documentation | Use example-first, capability-specific language; do not borrow unobserved docs-chrome styles. |
| Safety | Name the safeguard, traceability, or accountability point directly. |
| Brand naming | Keep `ElevenLabs`, `ElevenAgents`, `ElevenCreative`, and `ElevenAPI` in their official forms. |

## 11. Brand Narrative

ElevenLabs says it was founded in 2022 by Piotr Dąbkowski and Mati Staniszewski after the two reflected on poor dubbing in films they watched while growing up in Poland. The company’s own help material describes that origin as the motivation for improving voice dubbing and states a mission of making content accessible in any language and voice. [Press](https://elevenlabs.io/press) · [What is ElevenLabs?](https://help.elevenlabs.io/hc/en-us/articles/27583713738257-What-is-ElevenLabs)

Its current public account is broader than the original voice model: the About page names an agent platform for businesses, a creative platform for creators and marketers, and an API platform for developers. That shift explains why the official brand system deliberately gives the three platforms their own graphic treatment instead of using one visual vocabulary everywhere.

## 12. Principles

1. **Make communication and creation more seamless.** *UI implication:* state the relevant capability and audience before styling a generic “AI” surface.
2. **Keep platform identities legible.** *UI implication:* preserve official platform names and do not transplant an Agents or Creative color direction into the parent brand without context.
3. **Treat safety as part of the product.** *UI implication:* make consent, provenance, reporting, and misuse boundaries understandable where the relevant flow is evidenced.
4. **Use the official mark with discipline.** *UI implication:* protect the “11” symbol’s clear space and never reconstruct it with text characters.

## 13. Personas

The official sources identify stakeholder groups rather than named user personas; no fictional individual is asserted here.

- **Businesses deploying agents:** ElevenAgents is described as supporting voice and chat agents with integrations, testing, monitoring, and reliability.
- **Creators and marketers:** ElevenCreative is described as a browser-based environment for generating and editing speech, music, image, and video.
- **Developers:** ElevenAPI provides access to AI audio models through APIs and official SDKs.
- **Accessibility and nonprofit recipients:** the Impact program provides free licenses to qualifying individuals and organizations. [About](https://elevenlabs.io/about) · [Documentation](https://elevenlabs.io/docs/overview/intro)

## 14. States

The supplied public capture includes structural disabled buttons and selected tabs but no measured authenticated-product, loading, error, success, form-validation, or expanded interaction state. Preserve only the documented public selected/disabled provenance in §4; omit product-state recipes rather than invent them.

## 15. Motion & Easing

No motion duration, easing value, or reduced-motion behavior was measured in the supplied artifact, and the official brand guidance reviewed here describes graphics rather than a UI motion specification. No motion token is asserted.

---

**Verified:** 2026-07-13
**Tier 1 sources:** supplied deterministic capture of https://elevenlabs.io/, https://elevenlabs.io/blog/clay-scales-content-production-and-agility-with-elevencreative, and https://elevenlabs.io/pricing (captured 2026-07-12); official context at https://elevenlabs.io/about, https://elevenlabs.io/brand, https://elevenlabs.io/docs/overview/intro, and https://elevenlabs.io/safety.
**Tier 2 sources:** https://getdesign.md/elevenlabs/design-md (independent, non-affiliated high-level analysis; no numeric token promoted); https://styles.refero.design/?q=ElevenLabs (attempted; built-in web tool returned an internal error, so no absence claim). The getdesign “dark cinematic” characterization conflicts with the supplied light public capture and was not promoted; Refero yielded no usable comparison record.
**Conflicts unresolved:** none
