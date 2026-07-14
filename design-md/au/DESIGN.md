---
id: au
name: au
country: JP
category: consumer-tech
homepage: "https://www.au.com/"
primary_color: "#eb5505"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=au.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: au Visual Identity
  url: "https://www.kddi.com/brand/visual-identity/au/"
  type: brand
  description: "Official au visual-identity guidance for voice, design principles, colour, typography, graphics, photography, logo, and slogan use."
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-telecom-home, url: "https://www.au.com/", inspected: "2026-07-13" }
    - { id: mobile, kind: public-mobile-catalog, url: "https://www.au.com/mobile/", inspected: "2026-07-13" }
    - { id: smartphone, kind: public-smartphone-catalog, url: "https://www.au.com/mobile/product/smartphone/", inspected: "2026-07-13" }
    - { id: brand-vi, kind: official-visual-identity, url: "https://www.kddi.com/brand/visual-identity/au/", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://www.au.com/", captured: "2026-07-13" }
    - { id: mobile-capture, kind: product-surface, url: "https://www.au.com/mobile/", captured: "2026-07-13" }
    - { id: smartphone-capture, kind: product-surface, url: "https://www.au.com/mobile/product/smartphone/", captured: "2026-07-13" }
    - { id: vi-color, kind: official-doc, url: "https://www.kddi.com/brand/visual-identity/au/color/", captured: "2026-07-13" }
    - { id: vi-typography, kind: official-doc, url: "https://www.kddi.com/brand/visual-identity/au/typography/", captured: "2026-07-13" }
    - { id: vi-principles, kind: official-doc, url: "https://www.kddi.com/brand/visual-identity/au/design-principles/", captured: "2026-07-13" }
    - { id: vi-voice, kind: official-doc, url: "https://www.kddi.com/brand/visual-identity/au/toneofvoice/", captured: "2026-07-13" }
    - { id: brand-message, kind: official-doc, url: "https://www.kddi.com/brand/knowing-au/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &brand_color { surface_id: brand-vi, source_id: vi-color, method: official-doc, captured: "2026-07-13" }
    "tokens.colors.canvas": &product { surface_id: mobile, source_id: mobile-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *product
    "tokens.colors.link": *product
    "tokens.colors.muted": *product
    "tokens.colors.hairline": *product
    "tokens.colors.control-border": *product
    "tokens.colors.on-primary": *product
    "tokens.typography.family.ui": *product
    "tokens.typography.family.brand": &font_doc { surface_id: brand-vi, source_id: vi-typography, method: official-doc, captured: "2026-07-13" }
    "tokens.typography.body.size": *product
    "tokens.typography.body.weight": *product
    "tokens.typography.body.lineHeight": *product
    "tokens.typography.body.use": *product
    "tokens.typography.navigation.size": *product
    "tokens.typography.navigation.weight": *product
    "tokens.typography.navigation.lineHeight": *product
    "tokens.typography.navigation.use": *product
    "tokens.typography.search.size": *product
    "tokens.typography.search.weight": *product
    "tokens.typography.search.lineHeight": *product
    "tokens.typography.search.use": *product
    "tokens.spacing.xs": *product
    "tokens.spacing.sm": *product
    "tokens.spacing.md": *product
    "tokens.spacing.lg": *product
    "tokens.rounded.square": *product
    "tokens.rounded.card": *product
    "tokens.shadow.flat": *product
    "tokens.components.mobile-orange-action.type": *product
    "tokens.components.mobile-orange-action.bg": *product
    "tokens.components.mobile-orange-action.fg": *product
    "tokens.components.mobile-orange-action.radius": *product
    "tokens.components.mobile-orange-action.height": *product
    "tokens.components.mobile-orange-action.padding": *product
    "tokens.components.mobile-orange-action.font": *product
    "tokens.components.mobile-orange-action.states": *product
    "tokens.components.mobile-orange-action.use": *product
    "tokens.components.mobile-outline-action.type": *product
    "tokens.components.mobile-outline-action.bg": *product
    "tokens.components.mobile-outline-action.fg": *product
    "tokens.components.mobile-outline-action.border": *product
    "tokens.components.mobile-outline-action.radius": *product
    "tokens.components.mobile-outline-action.height": *product
    "tokens.components.mobile-outline-action.padding": *product
    "tokens.components.mobile-outline-action.font": *product
    "tokens.components.mobile-outline-action.states": *product
    "tokens.components.mobile-outline-action.use": *product
    "tokens.components.header-search.type": *product
    "tokens.components.header-search.bg": *product
    "tokens.components.header-search.fg": *product
    "tokens.components.header-search.border": *product
    "tokens.components.header-search.radius": *product
    "tokens.components.header-search.height": *product
    "tokens.components.header-search.padding": *product
    "tokens.components.header-search.font": *product
    "tokens.components.header-search.states": *product
    "tokens.components.header-search.use": *product
    "tokens.components.mobile-tab.type": *product
    "tokens.components.mobile-tab.fg": *product
    "tokens.components.mobile-tab.border": *product
    "tokens.components.mobile-tab.radius": *product
    "tokens.components.mobile-tab.padding": *product
    "tokens.components.mobile-tab.font": *product
    "tokens.components.mobile-tab.states": *product
    "tokens.components.mobile-tab.use": *product
    "tokens.components.mobile-service-card.type": *product
    "tokens.components.mobile-service-card.bg": *product
    "tokens.components.mobile-service-card.border": *product
    "tokens.components.mobile-service-card.radius": *product
    "tokens.components.mobile-service-card.padding": *product
    "tokens.components.mobile-service-card.use": *product
    "tokens.components.smartphone-label.type": &smartphone { surface_id: smartphone, source_id: smartphone-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.components.smartphone-label.bg": *smartphone
    "tokens.components.smartphone-label.fg": *smartphone
    "tokens.components.smartphone-label.border": *smartphone
    "tokens.components.smartphone-label.radius": *smartphone
    "tokens.components.smartphone-label.padding": *smartphone
    "tokens.components.smartphone-label.font": *smartphone
    "tokens.components.smartphone-label.use": *smartphone
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Machine tokens are limited to supplied au.com product-surface measurements and explicitly labelled official Visual Identity facts. The official brand font is not substituted for the observed loaded UI family."
  colors:
    primary: "#eb5505"
    canvas: "#ffffff"
    foreground: "#333333"
    link: "#0066aa"
    muted: "#777777"
    hairline: "#e5e5e5"
    control-border: "#d1d1d1"
    on-primary: "#ffffff"
  typography:
    family: { ui: "noto-sans-cjk-jp", brand: "Tazugane Gothic" }
    body: { size: 16, weight: 400, lineHeight: 1.4, use: "Repeated public au.com body and card text" }
    navigation: { size: 15, weight: 700, lineHeight: 1.4, use: "Public global-navigation item" }
    search: { size: 12, weight: 400, lineHeight: 2.5, use: "Public header text search input" }
  spacing: { xs: 10, sm: 15, md: 20, lg: 25 }
  rounded: { square: 0, card: 5 }
  shadow: { flat: "none" }
  components:
    mobile-orange-action: { type: button, bg: "#eb5505", fg: "#ffffff", radius: "0px", height: "44px", padding: "12.8px 40px 12.8px 15px", font: "16px / 700 / noto-sans-cjk-jp", states: "default only; no button interaction state captured", use: "Mobile catalog orange action, selector surface-2::[data-omd-capture=91]" }
    mobile-outline-action: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #333333", radius: "0px", height: "44px", padding: "12.8px 40px 12.8px 15px", font: "16px / 400 / noto-sans-cjk-jp", states: "default only; no button interaction state captured", use: "Mobile catalog outline action, selector surface-2::[data-omd-capture=92]" }
    header-search: { type: input, bg: "#ffffff", fg: "#333333", border: "1px solid #d1d1d1", radius: "0px", height: "32px", padding: "0px 30px 0px 6px", font: "12px / 400 / noto-sans-cjk-jp", states: "default only; no input interaction state captured", use: "Public header search input, selector surface-2::[data-omd-capture=8]" }
    mobile-tab: { type: tab, fg: "#333333", border: "0px 0px 2px solid #eb5505 when selected", radius: "0px", padding: "0px 16px", font: "16px / 400 / noto-sans-cjk-jp", states: "selected and unselected observed; tab selection interaction captured", use: "Mobile catalog tab, selector surface-2::[data-omd-capture=81]" }
    mobile-service-card: { type: card, bg: "#ffffff", border: "1px solid #e5e5e5", radius: "5px", padding: "15px 25px 25px", use: "Mobile catalog service-card wrapper and contents, selectors surface-2::div.cmp-au-com-card__wrapper and .cmp-au-com-card__contents-section" }
    smartphone-label: { type: badge, bg: "#ffffff", fg: "#eb5505", border: "1px solid #eb5505", radius: "0px", padding: "3.3px 11px", font: "11px / 400 / noto-sans-cjk-jp", use: "Smartphone catalog product label, selector surface-3::span.product-card-item-label" }
  components_harvested: true
---

# Design System Inspiration of au

## 1. Visual Theme & Atmosphere

au is KDDI’s consumer communications brand: it began as a mobile-phone brand and, in 2012, expanded to consumer services alongside mobile service. Its public product routes turn that broad offer into a deliberately practical, information-rich telecom experience: white canvas, charcoal text, bright blue links, square controls, bordered cards, and a highly visible orange action lane. The distinction comes from the tension between the comparatively neutral service UI and the more expressive official brand system. Orange cursive lettering in open white space remains the identity mark, while the current brand message, 「おもしろいほうの未来へ。」, frames au as a companion toward a more interesting future.

The current evolution is explicit. In March 2025 au refreshed its Visual Identity guidance, simplified its design and text expression, added slogan rules, and adjusted colour guidance alongside an au UI colour system. The public mobile routes captured here are product-surface evidence, not a wholesale transcription of that brand book: `#EB5505` is officially au Orange and appears on a measured mobile action, while `#0066AA`, `#333333`, white, and hairlines organise the observed catalog UI. This reference retains those domains separately.

## 2. Color Palette & Roles

- **au Orange** — `#EB5505`: official brand colour (RGB 235, 85, 5); measured as the fill of the supplied mobile-catalog primary action and as product-label text/border.
- **Canvas / on-primary** — `#FFFFFF`: observed mobile catalog card and search surface; observed white action text.
- **Foreground** — `#333333`: repeated public text, navigation, search text, controls, and unselected tab ink.
- **Link** — `#0066AA`: repeated public catalog link and card-link colour; it is not promoted as a corporate brand colour.
- **Muted** — `#777777`: repeated public supporting text.
- **Hairline** — `#E5E5E5`: observed mobile card edge.
- **Control border** — `#D1D1D1`: observed header-search border.

Official V.I. says to use au Orange thoughtfully rather than indiscriminately. The public capture does not establish semantic success, error, warning, or disabled colour tokens, so those are absent.

## 3. Typography Rules

### Font evidence classes

- **Official product/brand guidance:** au’s Visual Identity specifies Tazugane Gothic for brand messages and recommends Noto Sans JP for standard use. The brand face requires contact with brand management; the Noto Sans JP download is linked by the official guidance.
- **Live computed surface-use:** the supplied three-route capture resolves `noto-sans-cjk-jp` as loaded/high confidence for 1,437 observed uses across body, navigation, cards, inputs, tabs, buttons, and labels. This is the only UI-family token.
- **Official distributed brand asset:** Tazugane Gothic is a named official brand typeface with Light, Regular, and Bold samples in the V.I. guidance. It remains a brand-message asset, not a substitute for the captured web UI family.
- **System-resolved:** Helvetica appears twice as an operating-system stack in the capture. It is not an au type asset or a token.
- **Declared-only / unresolved:** no declared-only face is promoted by this packet.

| Role | Family | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public body/card text | `noto-sans-cjk-jp` | 16px | 400 | 22.4px | Repeated supplied product-surface measurement |
| Public global navigation | `noto-sans-cjk-jp` | 15px | 700 | 21px | Measured navigation item |
| Public header search | `noto-sans-cjk-jp` | 12px | 400 | 30px | Measured text input |
| Brand message | Tazugane Gothic | — | Light/Regular/Bold distributed | — | Official V.I. brand-asset guidance; no live product specimen claimed |

## 4. Component Stylings

### Mobile orange action

**Default**
- Background: `#EB5505`
- Text: `#FFFFFF`
- Radius: `0px`
- Height: `44px`
- Padding: `12.8px 40px 12.8px 15px`
- Font: `16px / 700 / noto-sans-cjk-jp`
- States: Default only; no button interaction state captured.
- Use: Mobile catalog action; `surface-2::[data-omd-capture="91"]`.

### Mobile outline action

**Default**
- Background: `#FFFFFF`
- Text: `#333333`
- Border: `1px solid #333333`
- Radius: `0px`
- Height: `44px`
- Padding: `12.8px 40px 12.8px 15px`
- Font: `16px / 400 / noto-sans-cjk-jp`
- States: Default only; no button interaction state captured.
- Use: Mobile catalog outline action; `surface-2::[data-omd-capture="92"]`.

### Header search

**Default**
- Background: `#FFFFFF`
- Text: `#333333`
- Border: `1px solid #D1D1D1`
- Radius: `0px`
- Height: `32px`
- Padding: `0px 30px 0px 6px`
- Font: `12px / 400 / noto-sans-cjk-jp`
- States: Default only; no input interaction state captured.
- Use: Public header text search; `surface-2::[data-omd-capture="8"]`.

### Mobile catalog tab

**Selected item as captured**
- Text: `#333333`
- Border: `0px 0px 2px solid #EB5505`
- Radius: `0px`
- Padding: `0px 16px`
- Font: `16px / 400 / noto-sans-cjk-jp`
- States: Selected and unselected were observed; a tab-selection interaction was captured.
- Use: Mobile catalog tab; `surface-2::[data-omd-capture="81"]`.

### Mobile service card

**Default**
- Background: `#FFFFFF`
- Border: `1px solid #E5E5E5`
- Radius: `5px`
- Padding: `15px 25px 25px`
- Use: Mobile catalog card wrapper and contents; `surface-2::div.cmp-au-com-card__wrapper` and `.cmp-au-com-card__contents-section`.

### Smartphone product label

**Default**
- Background: `#FFFFFF`
- Text: `#EB5505`
- Border: `1px solid #EB5505`
- Radius: `0px`
- Padding: `3.3px 11px`
- Font: `11px / 400 / noto-sans-cjk-jp`
- Use: Smartphone catalog product label; `surface-3::span.product-card-item-label`.

Only the tab has captured interaction provenance. Hover, focus, pressed, disabled, error, modal, toast, and other interactive state values are absent; their absence does not remove these measured default geometries.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.au.com/; https://www.au.com/mobile/; https://www.au.com/mobile/product/smartphone/; https://www.kddi.com/brand/visual-identity/au/; https://www.kddi.com/brand/visual-identity/au/color/; https://www.kddi.com/brand/visual-identity/au/typography/; https://www.kddi.com/brand/visual-identity/au/design-principles/; https://www.kddi.com/brand/visual-identity/au/toneofvoice/; https://www.kddi.com/brand/knowing-au/
**Tier 2 sources:** https://getdesign.md/au (attempted; built-in web open returned no usable record); https://styles.refero.design/?q=au (attempted; built-in web open returned no usable record)
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied desktop capture is 1440×900 and records three public surfaces. The mobile catalog uses repeated 5px bordered cards, including a card-content padding sample of `15px 25px 25px`; the smartphone route also records product-card shells and compact labels. The observed aggregate includes 10, 15, 20, and 25px spacing values, preserved as a local frequency-backed set rather than an asserted global spacing scale. No breakpoint, fixed container width, authenticated purchase journey, or responsive-grid rule is claimed.

## 6. Elevation & Shape

The representative public controls, cards, tab, and search input have `box-shadow: none`; flat separation comes from white surfaces, hairlines, and square-to-5px corners. A single home modal trigger has a local shadow in the packet, but no opened dialog state or repeatable elevation system was observed, so it is not promoted to a shadow token.

## 7. Do's and Don'ts

### Do

- Use au Orange `#EB5505` as the recorded brand/action emphasis, leaving white space and neutral product chrome around it.
- Keep the observed product UI family as `noto-sans-cjk-jp`; use Tazugane Gothic only under its official brand-message boundary.
- Preserve the measured square controls, 5px cards, hairlines, and selected-tab orange underline on the documented public surfaces.
- Follow the official SIMPLE principle: reduce nonessential elements, retain generous whitespace, unify type, and avoid unnecessary colour variation.

### Don't

- Do not promote `#0066AA` from a catalog-link measurement into an au brand colour.
- Do not substitute Helvetica or another system family for the observed UI family, or use the official brand font as though it were a loaded product webfont.
- Do not invent hover, focus, pressed, disabled, error, modal, toast, or checkout states.
- Do not use product catalog chrome as evidence for KDDI corporate, marketing, or authenticated-app UI.

## 8. Responsive Behavior

The packet records desktop 1440×900 snapshots only. It establishes repeated public components across three routes but no mobile viewport, breakpoint, sticky behavior, or touch-target policy. Responsive rules are intentionally absent.

## 9. Agent Prompt Guide

“Create only the observed au public mobile-catalog pattern: white cards with `#E5E5E5` hairlines and 5px corners, charcoal Noto Sans CJK JP text, bright `#0066AA` catalog links, and a square orange `#EB5505` action. Add a 2px orange underline only to an observed selected tab. Do not add a rounded generic CTA, a fallback font, an unobserved state, or a corporate-marketing token.”

## 10. Voice & Tone

**Voice adjectives:** future-oriented · curious/playful · approachable · respectful

| Do | Don't |
|---|---|
| Speak positively about the next choice or possibility. | Treat the future as fixed or inaccessible. |
| Show curiosity and room for discovery without making the customer the punchline. | Use novelty or humour at another person’s expense. |
| Keep an approachable, calm register that can sit beside daily life. | Sound distant, over-formal, or needlessly technical. |
| Make respect for other people a non-negotiable baseline. | Use discriminatory or hurtful language. |

Source-derived sample direction, not reusable au copy: “Choose the path that opens a new possibility.” “Let’s make the next connection easier to explore.” “Start from what matters in your everyday life.”

## 11. Brand Narrative

au began as KDDI’s mobile-phone brand and expanded in 2012 from mobile phones into consumer services under the company’s 3M strategy. Its current brand message is 「おもしろいほうの未来へ。」, introduced in 2019 in place of 「あたらしい自由。」. KDDI describes the shift as joining communications with life design so it can propose enjoyable change and exciting experience value in customers’ lives.

The present visual-identity update makes the design implication concrete. au says it aims to be a companion helping everyone move toward the more interesting future, and its 2025 revision seeks a consistent expression across a widening range of services and customer touchpoints. The canonical product tokens in this document stay restricted to the three supplied au.com captures; the broader brand story explains the direction but does not create unmeasured product facts.

## 12. Principles

1. **Make SIMPLE the baseline.** au requires simple composition, sufficient whitespace, disciplined type, uncluttered photography, and a unified colour impression. *UI implication:* reduce surplus decoration before adding a new product-surface token.
2. **Use a service-appropriate secondary character.** CLEAN, ADVANCED, PLAYFUL, and FRIENDLY are additional values selected by the service’s intended impression. *UI implication:* do not flatten all four into a simultaneous visual recipe.
3. **Keep orange intentional.** Official guidance treats au Orange as a primary brand element whose use and proportion need care. *UI implication:* retain the observed orange action/underline/label roles instead of assigning arbitrary semantic states.
4. **Express a considerate personality.** The V.I. makes future orientation, curiosity/playfulness, approachability, and respect for others its four voice characteristics. *UI implication:* concise service copy should remain positive and attentive rather than merely promotional.

## 13. Personas

No first-party persona segmentation was found in the sources consulted for this reference. ` [FILL IN: validated au audience archetypes, jobs, accessibility needs, and evidence source] `

The available first-party material addresses customers broadly and calls for consideration of diverse people; it does not authorize invented demographic or behavioral personas.

## 14. States

The supplied evidence records one tab-selection interaction and no stable empty, loading, error, success, skeleton, or disabled component states. Those state groups are therefore absent from the token graph and component specifications. An implementation may provide accessible states, but it must not label their visual values as observed au facts.

## 15. Motion & Easing

No duration, easing curve, transition, carousel timing, or motion-reduction behavior is established by the supplied evidence. Motion tokens are absent rather than inferred from static markup.
