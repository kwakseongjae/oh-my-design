---
id: yanolja
name: Yanolja
country: KR
category: consumer-tech
homepage: "https://www.yanolja.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Yanolja Brand Center
  url: "https://www.yanoljagroup.com/brand_center"
  type: brand
  description: Official Yanolja Group identity guidance; it is separate from the live NOL consumer-product chrome documented below.
  og_image: "https://www.yanoljagroup.com/common/assets/yanolja_colored_og_image.jpg"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product, url: "https://nol.yanolja.com/", inspected: "2026-07-13" }
    - { id: hotel, kind: product, url: "https://nol.yanolja.com/sub-home/hotel", inspected: "2026-07-13" }
    - { id: leisure, kind: product, url: "https://nol.yanolja.com/sub-home/leisure", inspected: "2026-07-13" }
    - { id: brand-center, kind: brand, url: "https://www.yanoljagroup.com/brand_center", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://nol.yanolja.com/", captured: "2026-07-13" }
    - { id: hotel-live, kind: product-surface, url: "https://nol.yanolja.com/sub-home/hotel", captured: "2026-07-13" }
    - { id: leisure-live, kind: product-surface, url: "https://nol.yanolja.com/sub-home/leisure", captured: "2026-07-13" }
    - { id: brand-center-source, kind: brand-asset, url: "https://www.yanoljagroup.com/brand_center", captured: "2026-07-13" }
    - { id: yanolja-3, kind: official-doc, url: "https://www.yanoljagroup.com/en/press_release/view?id=1534", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.brand-yanolja-orange": &brand { surface_id: brand-center, source_id: brand-center-source, method: official-brand-asset, captured: "2026-07-13" }
    "tokens.colors.canvas": &live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *live
    "tokens.colors.hairline": *live
    "tokens.colors.muted": *live
    "tokens.colors.primary": *live
    "tokens.colors.surface-hover": *live
    "tokens.colors.surface-muted": *live
    "tokens.components.neutral-badge.bg": &hotel { surface_id: hotel, source_id: hotel-live, method: computed-style, captured: "2026-07-13" }
    "tokens.components.neutral-badge.fg": *hotel
    "tokens.components.neutral-badge.font": *hotel
    "tokens.components.neutral-badge.padding": *hotel
    "tokens.components.neutral-badge.radius": *hotel
    "tokens.components.neutral-badge.type": *hotel
    "tokens.components.neutral-badge.use": *hotel
    "tokens.components.utility-button.bg": *live
    "tokens.components.utility-button.fg": *live
    "tokens.components.utility-button.font": *live
    "tokens.components.utility-button.hover": *live
    "tokens.components.utility-button.padding": *live
    "tokens.components.utility-button.radius": *live
    "tokens.components.utility-button.type": *live
    "tokens.components.utility-button.use": *live
    "tokens.rounded.full": *live
    "tokens.rounded.md": *live
    "tokens.rounded.sm": *live
    "tokens.shadow.utility": *live
    "tokens.spacing.base": *live
    "tokens.spacing.lg": *live
    "tokens.spacing.md": *live
    "tokens.spacing.sm": *live
    "tokens.spacing.xl": *live
    "tokens.spacing.xs": *live
    "tokens.spacing.xxl": *live
    "tokens.spacing.xxs": *live
    "tokens.typography.action.lineHeight": *live
    "tokens.typography.action.size": *live
    "tokens.typography.action.use": *live
    "tokens.typography.action.weight": *live
    "tokens.typography.badge.lineHeight": *hotel
    "tokens.typography.badge.size": *hotel
    "tokens.typography.badge.use": *hotel
    "tokens.typography.badge.weight": *hotel
    "tokens.typography.body.lineHeight": *live
    "tokens.typography.body.size": *live
    "tokens.typography.body.use": *live
    "tokens.typography.body.weight": *live
    "tokens.typography.display.lineHeight": *live
    "tokens.typography.display.size": *live
    "tokens.typography.display.use": *live
    "tokens.typography.display.weight": *live
    "tokens.typography.family.sans": *live
    "tokens.typography.label.lineHeight": *live
    "tokens.typography.label.size": *live
    "tokens.typography.label.use": *live
    "tokens.typography.label.weight": *live
    "tokens.typography.search.lineHeight": *hotel
    "tokens.typography.search.size": *hotel
    "tokens.typography.search.use": *hotel
    "tokens.typography.search.weight": *hotel
tokens:
  source: reconciled
  extracted: "2026-07-13"
  colors:
    primary: "#000000"
    foreground: "#1b1c1f"
    canvas: "#ffffff"
    surface-muted: "#f7f8fb"
    surface-hover: "#f2f3f7"
    muted: "#6e6f73"
    hairline: "#dadbdf"
    brand-yanolja-orange: "#f54b1e"
  typography:
    family: { sans: "Pretendard" }
    display: { size: 32, weight: 700, lineHeight: 1.19, use: "Observed h2 on NOL product surfaces" }
    search: { size: 18, weight: 700, lineHeight: 1.22, use: "Observed search input text" }
    action: { size: 16, weight: 700, lineHeight: 1.19, use: "Observed pill action" }
    body: { size: 16, weight: 400, lineHeight: 1.19, use: "Observed outlined action" }
    label: { size: 14, weight: 700, lineHeight: 1.21, use: "Observed 48px utility action" }
    badge: { size: 12, weight: 400, lineHeight: 1.17, use: "Observed neutral badge" }
  spacing: { xxs: 2, xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32 }
  rounded: { sm: 8, md: 16, full: 9999 }
  shadow:
    utility: "0 0 8px rgba(0,0,0,0.1)"
  components:
    utility-button: { type: button, bg: "#ffffff", fg: "#000000", radius: 16, padding: "0px", font: "14px/700 Pretendard", hover: "#f7f8fb", use: "48px product utility button; hover capture switches to #f7f8fb" }
    neutral-badge: { type: badge, bg: "#f7f8fb", fg: "#1b1c1f", radius: 9999, padding: "2px 8px 2px 6px", font: "12px/400 Pretendard", use: "26px product badge observed on hotel and leisure" }
  components_harvested: true
---

# Design System Inspiration of Yanolja (야놀자)

## 1. Visual Theme & Atmosphere

Yanolja is a global travel-technology company whose consumer division operates NOL, a platform spanning accommodation, flights, leisure, entertainment and culture. The Group’s public identity frames that broader system as the “Multiverse of Dreams,” using Yanolja Orange as its distinctive thread; meanwhile, the live NOL product surfaces captured for this reference are visibly more restrained: white surfaces, black and charcoal text, soft cool-gray fills, and rounded utility controls. That split matters. Yanolja Group’s orange and warm-grays are verified corporate-brand assets, not evidence that the current NOL hotel or leisure UI uses an orange primary CTA. The current direction also reflects the Group’s 2026 “Yanolja 3.0” positioning around customer focus, technology, and one-team collaboration, while NOL continues to unify consumer travel, leisure, and culture services.

**Key Characteristics:**
- Separate the official Yanolja Group identity from the observed NOL consumer-product UI.
- NOL product chrome is neutral and rounded: white, `#000000`/`#1B1C1F`, `#F7F8FB`, and 16px/full radii.
- Yanolja Orange (`#F54B1E`) is a verified Group brand color and logo asset; this packet does not observe it as NOL’s current product-action token.
- Product typography is loaded Pretendard, backed by computed usage and official NOL-hosted font files.

## 2. Color Palette & Roles

### Live NOL consumer product surfaces

- **Primary ink** (`#000000`): observed text and border value across home, hotel, and leisure captures.
- **Foreground** (`#1B1C1F`): observed product text and border value across all three captured NOL surfaces.
- **Canvas / raised surface** (`#FFFFFF`): observed page and action surface.
- **Neutral weak fill** (`#F7F8FB`): observed badge fill and utility-button hover fill.
- **Neutral hover fill** (`#F2F3F7`): observed menu/action hover fill on the NOL home surface.
- **Muted text** (`#6E6F73`): observed on the NOL home surface.
- **Hairline** (`#DADBDF`): one captured NOL home control border; retain as a local border observation, not a global rule.

### Official Yanolja Group identity assets

- **Yanolja Orange** (`#F54B1E`): official Group primary/logo color, documented by the Brand Center with Pantone 2028C/2028U. It is not promoted to NOL product primary from this capture.
- **Light Gray** (`#F5EBE1`), **Medium Gray** (`#8C8282`), **Deep Gray** (`#555055`), and **Dark Gray** (`#1E1928`): official Group brand-support colors. They remain brand-context assets rather than inferred NOL UI tokens.

## 3. Typography Rules

### Font evidence classes

- **Live computed surface-use — Pretendard:** The home, hotel, and leisure captures compute `Pretendard, -apple-system, "system-ui", sans-serif`. `document.fonts` reports Pretendard as loaded for 512 observed uses, and the capture records 88 NOL-hosted Pretendard variable-subset URLs under `yaimg.yanolja.com`. This establishes Pretendard as the live NOL UI family.
- **Official distributed font / license — Pretendard:** Pretendard’s upstream project distributes the font under SIL Open Font License 1.1. This explains the type asset’s license boundary; it does not make the upstream repository a Yanolja brand source.
- **Declared-only — swiper-icons:** A `swiper-icons` face is declared in the capture but has no visible usage. It is not a UI typography token.
- **Unresolved:** No separate display family, proprietary Yanolja typeface, or additional product font family was established by this packet.

### Observed hierarchy

| Role | Size | Weight | Line height | Provenance |
|---|---:|---:|---:|---|
| Product h2 | 32px | 700 | 38px | NOL capture, 6 occurrences |
| Search input | 18px | 700 | 22px | hotel + leisure input |
| Product action | 16px | 700 | 19px | NOL action-pill capture |
| Outlined action | 16px | 400 | 19px | hotel + leisure button |
| Utility action | 14px | 700 | 17px | home 48px button |
| Neutral badge | 12px | 400 | 14px | hotel + leisure badge |

## 4. Component Stylings

The following are direct product observations. Selector, surface, and state provenance are retained in the verification log; names below describe the observed geometry, not an undocumented public component API.

### Utility button

**48px white utility control**
- Background: `#FFFFFF`
- Text: `#000000`
- Radius: 16px
- Shadow: `0 0 8px rgba(0,0,0,0.1)`
- Padding: 0px
- Font: 14px / 700 / Pretendard
- Height: 48px
- Hover: `#F7F8FB` background with `0 0 6px rgba(0,0,0,0.2)` shadow
- Use: `home::[data-omd-capture="14"]`; high-confidence, 33 occurrences across home, hotel, and leisure. Hover and pressed were captured, but only the hover computed value is asserted here.

### Action button

**White pill action**
- Background: `#FFFFFF`
- Text: `#1B1C1F`
- Radius: 9999px
- Padding: 4px 16px
- Font: 16px / 700 / Pretendard
- Height: 52px
- Use: `home::[data-omd-capture="50"]`; high-confidence, 6 occurrences across home and leisure.

**Outlined action**
- Background: `#FFFFFF`
- Text: `#1B1C1F`
- Border: 1px solid `#1B1C1F`
- Radius: 16px
- Padding: 4px 16px
- Font: 16px / 400 / Pretendard
- Height: 52px
- Use: `surface-2::[data-omd-capture="101"]`; high-confidence, 4 occurrences across hotel and leisure.

### Icon button

**Transparent rounded icon control**
- Text: `#1B1C1F`
- Radius: 16px
- Padding: 4px
- Font: 10px / 700 / Pretendard
- Height: 56px
- Use: `surface-2::[data-omd-capture="7"]`; high-confidence, 6 occurrences across hotel and leisure.

### Search input

**Transparent search text field**
- Text: `#1B1C1F`
- Radius: 0px
- Font: 18px / 700 / Pretendard
- Height: 22px
- Use: `surface-2::[data-omd-capture="1"]`; high-confidence search input observed on hotel and leisure. Container geometry and focus treatment were not captured.

### Neutral badge

**Weak neutral pill**
- Background: `#F7F8FB`
- Text: `#1B1C1F`
- Radius: 9999px
- Padding: 2px 8px 2px 6px
- Font: 12px / 400 / Pretendard
- Height: 26px
- Use: `surface-2::div`; high-confidence, 2 occurrences across hotel and leisure.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://nol.yanolja.com/`; `https://nol.yanolja.com/sub-home/hotel`; `https://nol.yanolja.com/sub-home/leisure` (raw computed-style and FontFaceSet evidence in `artifacts/reference-evidence/yanolja.json`); `https://www.yanoljagroup.com/brand_center`; `https://www.yanoljagroup.com/about`; `https://www.yanoljagroup.com/yanolja_way`; `https://www.yanoljagroup.com/en/press_release/view?id=1534`
**Tier 2 sources:** `https://getdesign.md/yanolja` (no independently accessible record found during this run); `https://styles.refero.design/?q=yanolja` (no Yanolja-specific result surfaced in this run’s search)
**Conflicts unresolved:** none

Corporate-brand values and NOL product values are separate evidence domains, so neither is substituted for the other.

## 5. Layout Principles

The capture supports a compact spacing vocabulary of 2, 4, 8, 12, 16, 20, 24, and 32px. Radius observations are mostly 0px in unframed text/content, 16px in rounded product controls, 8px on one captured bordered control, and 9999px for pills. No grid, card, responsive-breakpoint, or booking-detail layout rule is asserted because this packet did not measure one.

## 6. Depth & Elevation

The verified product depth evidence is local rather than a complete elevation scale: the 48px white utility control has `0 0 8px rgba(0,0,0,0.1)` at rest and the captured hover value is `0 0 6px rgba(0,0,0,0.2)`. Other observed product controls are shadowless. No modal, popover, card, or sheet elevation token is claimed.

## 7. Do's and Don'ts

### Do

- Treat `#000000`, `#1B1C1F`, white, and cool-neutral fills as the verified NOL product-chrome palette.
- Use loaded Pretendard for a NOL UI implementation when the project can load it; do not silently substitute it for a proprietary font.
- Preserve the 16px/full-radius distinction where the corresponding observed control calls for it.
- Use Yanolja Orange only when intentionally applying the separately evidenced Group identity, logo, or brand material.

### Don't

- Do not turn Group-brand Yanolja Orange or warm grays into a current NOL CTA, discount, error, or selected-state token without product-surface evidence.
- Do not invent a lodging-card, booking CTA, bottom navigation, modal, toast, or input-focus variant from this packet.
- Do not treat declared-only `swiper-icons` as a text family.
- Do not infer mobile breakpoints or motion behavior from this desktop capture.

## 8. Responsive Behavior

No breakpoint, mobile navigation, touch-target policy, or responsive grid is documented by the supplied evidence. The packet contains three public NOL product routes, but does not establish a responsive specification.

## 9. Agent Prompt Guide

### Quick Color Reference

- NOL product ink: `#000000` and `#1B1C1F`
- NOL product canvas: `#FFFFFF`
- NOL neutral weak fill: `#F7F8FB`
- NOL muted text: `#6E6F73`
- Yanolja Group brand asset: `#F54B1E` (not a verified NOL product CTA)

### Example Component Prompts

- "Create a NOL-style observed product utility control: white 48px surface, 16px radius, `#000000` 14px/700 Pretendard text, and `0 0 8px rgba(0,0,0,0.1)` shadow. Its captured hover background is `#F7F8FB`."
- "Create an observed NOL product action pill: white background, `#1B1C1F` 16px/700 Pretendard label, 52px height, 4px 16px padding, and a full radius."
- "Create the observed NOL weak badge: `#F7F8FB` fill, `#1B1C1F` 12px/400 Pretendard text, 26px height, 2px 8px 2px 6px padding, and a full radius."

### Iteration Guide

1. Decide which evidence domain the task targets: NOL product UI or Yanolja Group identity.
2. Keep unmeasured component properties absent rather than filling them with a generic travel-product pattern.
3. Retain Pretendard only where it can be loaded; do not represent a system fallback as Pretendard.

## 10. Voice & Tone

Official Group language is future-facing and practical: its stated mission is to make travel “10x easier,” with Customer First, Tech-Driven Innovation, and Together as One Team as core values. The About page explains the name as “Hey, Let’s Play!” and frames the consumer platform around seamless, hyper-personalized leisure. This supports a direct, enabling tone for brand narrative; it does not establish production microcopy, error messages, Korean honorific endings, or a consumer voice guide.

| Context | Verified direction |
|---|---|
| Corporate mission | Make travel easier, smarter, and more connected through technology. |
| Consumer-platform proposition | Seamless, personalized travel, leisure, and culture experiences. |
| Brand-name context | “Hey, Let’s Play!” is the official English explanation of Yanolja’s name. |

## 11. Brand Narrative

Yanolja began in 2005 and has developed from a travel and leisure platform into a global travel-technology company. Its official history describes an early focus on making hotel information and operations more accurate and less dependent on fragmented, manual processes. Today it combines enterprise travel technology with a consumer platform: NOL UNIVERSE brings accommodations, airlines, leisure activities, entertainment, sports, and culture together for travelers, while Yanolja’s enterprise offerings connect travel businesses through cloud, transaction, and AI-powered data solutions.

The visual identity on the Group Brand Center is built around the “Multiverse of Dreams.” Its symbol represents digital connections between the travel industry and travelers, and Yanolja Orange is the recognized constant across that Group identity. In 2026, Yanolja announced “Yanolja 3.0,” identifying Customer, Technology, and One Team as the values guiding its next decade. That corporate evolution and the neutral current NOL product chrome should be read together, but not collapsed into one unproven token set.

## 12. Principles

1. **Customer First.** The official value says every decision begins and ends with the customer. *UI implication:* prioritize clarity and completion over decorative complexity.
2. **Tech-Driven Innovation.** The Group says technology should redefine experiences. *UI implication:* make technological assistance legible and useful, rather than adding visual novelty without a task benefit.
3. **Together as One Team.** The official value centers shared goals and mutual support. *UI implication:* keep handoffs between travel planning, booking, and support coherent; this is a product-design interpretation, not a published component rule.
4. **Brand and product domains are distinct.** The Brand Center’s orange identity and the captured NOL neutral UI are both authoritative inside their own domains. *UI implication:* do not use one domain as evidence for the other.

## 13. Personas

This reference records verified stakeholder groups, not synthetic personas.

- **Travelers:** receive personalized, seamless experiences across pre-trip, in-trip, and post-trip stages.
- **Travel enterprises:** use data-powered travel technology to improve operations and efficiency.
- **Consumer-platform customers:** use NOL UNIVERSE across travel, leisure, culture, entertainment, and related services.
- **Product and operating teams:** the Group’s One Team value emphasizes shared goals and psychological safety internally.

## 14. States

No empty, loading, error, success, skeleton, or disabled-state treatment is verified by the supplied capture. Do not infer colors, timing, layouts, or copy for these states from the Group brand palette or from generic travel-product conventions.

## 15. Motion & Easing

No motion duration, easing curve, animation, or reduced-motion behavior is verified by the supplied evidence. Motion should remain unspecified until a product-surface observation or official NOL documentation establishes it.
