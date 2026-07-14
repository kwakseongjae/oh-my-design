---
id: sktelecom
name: SK텔레콤
display_name_kr: SK텔레콤
country: KR
category: consumer-tech
homepage: https://www.sktelecom.com/
primary_color: "#3a46cd"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sktelecom.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.sktelecom.com/", inspected: "2026-07-13" }
    - { id: brand, kind: official-doc, url: "https://www.sktelecom.com/view/introduce/brand.do", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.sktelecom.com/", captured: "2026-07-13" }
    - { id: brand-live, kind: official-doc, url: "https://www.sktelecom.com/view/introduce/brand.do", captured: "2026-07-13" }
    - { id: skt-sans-regular, kind: brand-asset, url: "https://www.sktelecom.com/fonts/SKTSans-Regular.woff2", captured: "2026-07-13" }
    - { id: ai-company-vision, kind: official-doc, url: "https://news.sktelecom.com/182728", captured: "2026-07-13" }
    - { id: t-brand-renewal, kind: official-doc, url: "https://news.sktelecom.com/182844", captured: "2026-07-13" }
    - { id: current-company-facts, kind: official-doc, url: "https://news.sktelecom.com/223776", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.brand-link": &brand { surface_id: brand, source_id: brand-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *brand
    "tokens.colors.strong": *brand
    "tokens.colors.muted": *brand
    "tokens.colors.hairline": *brand
    "tokens.colors.action-fill": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.on-action": *home
    "tokens.typography.family.ui": &font { surface_id: home, source_id: home-live, method: computed-style-fontfaceset-source, captured: "2026-07-13" }
    "tokens.typography.family.display": *font
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.navigation.size": *brand
    "tokens.typography.navigation.weight": *brand
    "tokens.typography.navigation.lineHeight": *brand
    "tokens.typography.navigation.use": *brand
    "tokens.typography.display.size": *font
    "tokens.typography.display.weight": *font
    "tokens.typography.display.lineHeight": *font
    "tokens.typography.display.use": *font
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *brand
    "tokens.spacing.md": *brand
    "tokens.spacing.lg": *brand
    "tokens.spacing.xl": *brand
    "tokens.rounded.square": *brand
    "tokens.rounded.media-tile": *home
    "tokens.shadow.flat": *brand
    "tokens.components.brand-current-link.type": *brand
    "tokens.components.brand-current-link.fg": *brand
    "tokens.components.brand-current-link.padding": *brand
    "tokens.components.brand-current-link.font": *brand
    "tokens.components.brand-current-link.use": *brand
    "tokens.components.resource-download.type": *brand
    "tokens.components.resource-download.bg": *brand
    "tokens.components.resource-download.fg": *brand
    "tokens.components.resource-download.border": *brand
    "tokens.components.resource-download.radius": *brand
    "tokens.components.resource-download.padding": *brand
    "tokens.components.resource-download.font": *brand
    "tokens.components.resource-download.use": *brand
    "tokens.components.outline-title-link.type": *brand
    "tokens.components.outline-title-link.bg": *brand
    "tokens.components.outline-title-link.fg": *brand
    "tokens.components.outline-title-link.border": *brand
    "tokens.components.outline-title-link.radius": *brand
    "tokens.components.outline-title-link.padding": *brand
    "tokens.components.outline-title-link.height": *brand
    "tokens.components.outline-title-link.font": *brand
    "tokens.components.outline-title-link.use": *brand
    "tokens.components.top-action.type": *home
    "tokens.components.top-action.bg": *home
    "tokens.components.top-action.fg": *home
    "tokens.components.top-action.radius": *home
    "tokens.components.top-action.padding": *home
    "tokens.components.top-action.height": *home
    "tokens.components.top-action.font": *home
    "tokens.components.top-action.states": *home
    "tokens.components.top-action.use": *home
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only selector-backed values from the supplied SK텔레콤 home and brand page are tokens. Corporate/brand narrative, T brand renewal, font asset delivery, and unobserved interaction behavior remain separate evidence domains."
  colors:
    brand-link: "#3a46cd"
    foreground: "#1a2232"
    strong: "#3a404e"
    muted: "#595e6b"
    hairline: "#d0d1d3"
    action-fill: "#727887"
    on-action: "#ffffff"
  typography:
    family: { ui: "SKT Sans Text", display: "SKT Sans Display" }
    body: { size: 15, weight: 600, lineHeight: 27, use: "Repeated public page body text" }
    navigation: { size: 16, weight: 600, lineHeight: 20, use: "Brand-page navigation links" }
    display: { size: 24, weight: 700, lineHeight: 38.4, use: "Observed SKT Sans Display body-heading treatment; not a complete type scale" }
  spacing: { xs: 6, sm: 12, md: 16, lg: 24, xl: 40 }
  rounded: { square: 0, media-tile: 16 }
  shadow: { flat: "none" }
  components:
    brand-current-link: { type: listItem, fg: "#3a46cd", padding: "0px 12px", font: "16px / 600 / SKT Sans Text", use: "Static current-page link on the public brand navigation" }
    resource-download: { type: listItem, bg: "transparent", fg: "#1a2232", border: "1px solid #727887", radius: 0, padding: "11px 24px", font: "13px / 600 / SKT Sans Text", use: "Public brand-page download link" }
    outline-title-link: { type: listItem, bg: "transparent", fg: "#595e6b", border: "1px solid #d0d1d3", radius: 0, padding: "6px 12px 6px 16px", height: 34, font: "12px / 600 / SKT Sans Text", use: "Public footer/title link" }
    top-action: { type: button, bg: "#727887", fg: "#ffffff", radius: 0, padding: "1px 6px", height: 58, font: "10px / 700 / SKT Sans Text", states: "default observed; interaction count 0, so no hover, focus, pressed, disabled, or error state is retained", use: "Public desktop/tablet top action" }
  components_harvested: true
---

# Design System Inspiration of SK텔레콤

## 1. Visual Theme & Atmosphere

SK텔레콤 is a Korean connectivity and consumer-technology company whose public ecosystem joins telecommunications with AI services and infrastructure. Its current corporate expression is less about a single consumer-app shell than a clear transition from the legacy meaning of “Telecom” toward Technology, Tomorrow, and Together: the company’s 2022 T-brand renewal describes the T form as an open door to the future, while its AI Company vision frames technology and services around benefiting customers. On the two supplied public surfaces, that forward-looking story resolves into an orderly, typographic corporate interface: loaded SKT Sans families, white or transparent fields, square controls, cool charcoal neutrals, and a saturated blue current-link treatment. The current company facts describe a continuing move toward an AI-infrastructure and full-stack AI-provider role; that strategic evolution is brand context, not a license to turn AI campaign visuals into web tokens.

**Key characteristics:**

- Public brand navigation uses `#3A46CD` for the current-page treatment, with `#727887` as the observed filled top action.
- SKT Sans Text and SKT Sans Display are both loaded first-family faces on the supplied public pages.
- Captured actions are square (`0px` radius); 16px rounding is confined to observed media-tile links.
- The retained values describe the public home and brand-information page only, not T world, A., native apps, advertising, or a general SK텔레콤 product design system.

## 2. Color Palette & Roles

| Role | Value | Usage and evidence boundary |
| --- | --- | --- |
| Brand current-link | `#3A46CD` | Current-page and focused public brand-navigation links; this is an observed public navigation treatment. |
| Foreground | `#1A2232` | Public brand-page resource-download text only. |
| Strong link text | `#3A404E` | Repeated stronger public link text on the supplied pages. |
| Muted link text | `#595E6B` | Public footer/title link text. |
| Hairline | `#D0D1D3` | 1px outline on the footer/title link. |
| Action fill | `#727887` | Observed desktop/tablet top-action fill. |
| On action | `#FFFFFF` | Text on that `#727887` top action. |

T Blue and T Red are named in SK텔레콤’s 2022 renewal story as brand colors, but the supplied computed-style evidence does not establish their official palette values or product roles. This reference therefore does not manufacture a T Blue hex or use a corporate color story to overwrite the measured public-link values above.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
| --- | --- |
| Official product-use | No separate first-party announcement in the consulted material states that a named family applies to all SK텔레콤 apps or services. |
| Live computed surface-use | `SKT Sans Text` is loaded with high confidence and is the visible first family in 291 supplied observations across text, buttons, badges, and list items. `SKT Sans Display` is loaded with high confidence and appears in seven supplied visible observations, including heading/body-heading roles. |
| Official distributed brand asset | The supplied artifact records SK텔레콤-hosted WOFF/WOFF2 delivery URLs for SKT Sans Text weights and SKT Sans Display weights. This establishes delivery on the captured public pages, not a redistribution grant. |
| Declared-only | `swiper-icons` has an `@font-face` declaration but no visible use in the supplied capture. It is not a brand typography token. |
| Unresolved | No first-party public font licence or general re-use permission was found in the consulted sources. Do not treat the hosted files as permission to distribute the faces. |

### Captured public hierarchy

| Role | Family | Size | Weight | Line height | Evidence boundary |
| --- | --- | ---: | ---: | ---: | --- |
| Public body | SKT Sans Text | 15px | 600 | 27px | Repeated public-page body samples; not a complete body scale. |
| Brand navigation | SKT Sans Text | 16px | 600 | 20px | Public brand-page navigation links. |
| Display treatment | SKT Sans Display | 24px | 700 | 38.4px | Six visible public body-heading observations only. |
| Larger display sample | SKT Sans Display | 48px | 700 | 48px | One `h3` observation only; not promoted to a global token. |

## 4. Component Stylings

### Brand navigation link

**Current page**
- Background: transparent
- Text: `#3A46CD`
- Border: none
- Radius: 0px
- Padding: 0px 12px
- Font: 16px / 600 / SKT Sans Text
- Use: `surface-2::[data-omd-capture="11"]`, static current-page brand navigation

### Resource download link

**Default**
- Background: transparent
- Text: `#1A2232`
- Border: 1px solid `#727887`
- Radius: 0px
- Padding: 11px 24px
- Font: 13px / 600 / SKT Sans Text
- Use: `surface-2::[data-omd-capture="13"]` and `"14"`, public brand-page download links

### Outline title link

**Default**
- Background: transparent
- Text: `#595E6B`
- Border: 1px solid `#D0D1D3`
- Radius: 0px
- Padding: 6px 12px 6px 16px
- Height: 34px
- Font: 12px / 600 / SKT Sans Text
- Use: `home::[data-omd-capture="39"]` and `surface-2::[data-omd-capture="70"]`, public footer/title links

### Top action

**Desktop/tablet default**
- Background: `#727887`
- Text: `#FFFFFF`
- Radius: 0px
- Padding: 1px 6px
- Height: 58px
- Font: 10px / 700 / SKT Sans Text
- Use: `home::[data-omd-capture="29"]` and `surface-2::[data-omd-capture="60"]`, public desktop/tablet top action

The artifact retains static CSS snapshots with `state-hover`, `state-pressed`, and `state-focus` selector suffixes, but its top-level `interactions` array is empty and `interactionCount` is zero. They are recorded as raw proof only, not promoted to interaction-state tokens or a behavior contract.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.sktelecom.com/ | https://www.sktelecom.com/view/introduce/brand.do
**Tier 2 sources:** https://getdesign.md/sktelecom (attempted; no usable response) | https://styles.refero.design/?q=SK%20Telecom (attempted; no usable response)
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied desktop captures (1440×900) use spacing clusters of 6, 12, 16, 24, and 40px. On the brand page, 24px and 40px recur around content controls and information groups; they are measured spacing values, not proof of a complete modular grid. The current-page navigation uses compact 16px text with 12px inline padding, while resource links expand horizontally through 11px × 24px padding. Preserve this contrast between dense navigation and spacious resource actions rather than inventing a mobile grid or a universal card layout.

## 6. Depth & Elevation

All retained component representatives report `box-shadow: none`. That supports a flat treatment for these public brand-page links and top action. It does not establish that SK텔레콤 product, marketing, retail, native-app, or campaign interfaces never use shadow, gradients, imagery, or elevation.

## 7. Do's and Don'ts

### Do

- Use SKT Sans Text or SKT Sans Display only when the supplied, SK텔레콤-hosted face is actually available and its deployment is permitted.
- Keep the measured current-page blue `#3A46CD` in the brand-navigation context from which it was captured.
- Retain the square, transparent outline treatment for the observed resource and footer/title links.
- Treat the 16px media-tile rounding as local to the observed tile links, not as a global control radius.

### Don't

- Substitute a system font and label it SKT Sans.
- Convert T Blue, T Red, AI campaign art, or brand-story language into a measured UI token without direct evidence.
- Generalize the 58px desktop/tablet top action into a mobile primary button.
- Invent responsive breakpoints, input states, dialogs, toast behavior, timing, easing, or component variants from static captures.

## 8. Responsive Behavior

The only supplied viewport is 1440×900. It establishes the listed desktop public-page values and does not establish a mobile type scale, breakpoints, stacking, touch target, or responsive component contract. Re-measure the actual target surface before assigning those values.

## 9. Agent Prompt Guide

For a public SK텔레콤 corporate-information composition, use the verified language narrowly: a typographic, flat, square-cornered frame; SKT Sans Text for available compact body/navigation copy; SKT Sans Display for the observed display treatment; dark charcoal links; and a saturated `#3A46CD` current-page navigation cue. Use transparent resource links with 1px neutral outlines and a `#727887`/white top action only in their measured desktop/tablet contexts. Keep the T-brand “open door” and AI Company material as narrative direction rather than color-token instructions. Do not present fallback fonts, unmeasured T Blue/T Red values, or unobserved app controls as SK텔레콤 facts.

## 10. Voice & Tone

Official material frames SK텔레콤’s current direction around technology and services that benefit customers, an “OPEN” motif, and a transition toward AI infrastructure and services. The usable voice is forward-looking, useful, and direct; it should explain a concrete benefit or next step rather than rely on empty futurism.

| Do | Don't |
| --- | --- |
| Connect technology to a concrete customer or societal use. | Use “AI” as a standalone promise without explaining what changes. |
| Use clear, open language for navigation and resource actions. | Turn an unmeasured visual pattern into a brand command. |
| Keep corporate, service, and brand surfaces named when their evidence differs. | Collapse telecom, AI infrastructure, and every consumer service into one UI claim. |

Illustrative tone samples (characterization, not source copy):

- “Choose the service that helps you stay connected today.”
- “Explore the technology and information behind the next step.”
- “See how this service can make a customer task clearer.”

## 11. Brand Narrative

SK텔레콤’s current story begins with connectivity but is explicitly moving beyond a telecommunications-only frame. In its 2022 vision announcement, the company described its direction as becoming an AI Company that benefits customers through technology and services. The associated T/B brand renewal gives that turn a visible motif: “OPEN,” represented by an open-door form and a redefinition of T through Technology, Tomorrow, and Together.

That shift remains active rather than historical. A 2026 official fact sheet describes SK텔레콤 as advancing toward an AI-infrastructure architect and full-stack AI provider, joining technology, infrastructure, and services while redesigning products around customers. The two captured public pages should be read as corporate and brand-information surfaces within that broader evolution; they do not document the UI systems of each consumer service.

## 12. Principles

1. **Make technology useful to customers.** SK텔레콤’s AI Company vision explicitly links technology and services with customer benefit.
   *UI implication:* explain the user outcome beside a technical feature; do not let a technical label do all the work.

2. **Keep the future open and legible.** The 2022 renewal uses “OPEN” and an open door as its design motif.
   *UI implication:* use clear pathways and named actions, while treating this as narrative guidance rather than a measured layout rule.

3. **Connect infrastructure, services, and society without conflating their surfaces.** The current fact sheet spans customer AI, national AI infrastructure, and continued internal transformation.
   *UI implication:* preserve source-domain labels; a corporate infrastructure claim does not supply a consumer-product token.

4. **Pair innovation with responsibility.** The current fact sheet places “DO THE GOOD AI” in SK텔레콤’s ESG context.
   *UI implication:* when communicating AI, state the applicable benefit, boundary, or responsibility instead of using generic assurance language.

## 13. Personas

The following are stakeholder archetypes derived from official strategy descriptions, not research-backed individual personas or claims about a specific app’s users.

### Connected customer

Someone choosing or using SK텔레콤 services and looking for a clear benefit from connectivity or AI-enabled support. Use direct explanations and avoid making infrastructure terminology the only way to understand a task.

### Enterprise or industry collaborator

An organization evaluating AI infrastructure, transformation, or service capabilities. Keep product/service claims, architecture information, and partnership context distinct from consumer-interface guidance.

### Korean AI ecosystem stakeholder

A public, institutional, or industry participant concerned with the wider AI-infrastructure and sovereign-AI agenda described by SK텔레콤. Communicate scope and responsibility precisely; this is not evidence for a consumer-screen persona.

## 14. States

No component-state matrix is retained. The supplied evidence bundle has zero recorded interaction expansions and no selector-backed loading, empty, error, success, disabled, dialog, toast, or form-validation contract. Static state-like CSS snapshots remain documented in `.verification.md` but are not represented as usable product states.

## 15. Motion & Easing

No duration, easing, transition, or animation token is retained. The supplied public-page capture has no interaction records, so motion behavior is unresolved at the smallest group boundary rather than approximated with a generic corporate motion scale.
