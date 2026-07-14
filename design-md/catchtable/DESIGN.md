---
id: catchtable
name: CatchTable
country: KR
category: consumer-tech
homepage: "https://www.catchtable.co.kr"
primary_color: "#ff3d00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=catchtable.co.kr&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: consumer-home, kind: consumer-product, url: "https://www.catchtable.net/", inspected: "2026-07-13" }
    - { id: merchant-marketing, kind: b2b-marketing, url: "https://biz.catchtable.co.kr/n/main", inspected: "2026-07-13" }
    - { id: careers-marketing, kind: careers-marketing, url: "https://career.catchtable.co.kr/ko/service", inspected: "2026-07-13" }
  sources:
    - { id: consumer-capture, kind: product-surface, url: "https://www.catchtable.net/", captured: "2026-07-13" }
    - { id: merchant-capture, kind: product-surface, url: "https://biz.catchtable.co.kr/n/main", captured: "2026-07-13" }
    - { id: careers-capture, kind: product-surface, url: "https://career.catchtable.co.kr/ko/service", captured: "2026-07-13" }
    - { id: service-context, kind: official-doc, url: "https://career.catchtable.co.kr/ko/service", captured: "2026-07-13" }
    - { id: font-design, kind: official-doc, url: "https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md", captured: "2026-07-13" }
    - { id: font-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &consumer { surface_id: consumer-home, source_id: consumer-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *consumer
    "tokens.colors.title": *consumer
    "tokens.colors.muted": *consumer
    "tokens.colors.search-surface": *consumer
    "tokens.colors.control-border": *consumer
    "tokens.colors.brand-orange": &career { surface_id: careers-marketing, source_id: careers-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.on-brand": *career
    "tokens.typography.family.ui": *consumer
    "tokens.typography.consumer-body.size": *consumer
    "tokens.typography.consumer-body.weight": *consumer
    "tokens.typography.consumer-body.lineHeight": *consumer
    "tokens.typography.consumer-body.use": *consumer
    "tokens.typography.consumer-title.size": *consumer
    "tokens.typography.consumer-title.weight": *consumer
    "tokens.typography.consumer-title.lineHeight": *consumer
    "tokens.typography.consumer-title.use": *consumer
    "tokens.typography.search-control.size": *consumer
    "tokens.typography.search-control.weight": *consumer
    "tokens.typography.search-control.lineHeight": *consumer
    "tokens.typography.search-control.use": *consumer
    "tokens.typography.career-display.size": *career
    "tokens.typography.career-display.weight": *career
    "tokens.typography.career-display.lineHeight": *career
    "tokens.typography.career-display.use": *career
    "tokens.spacing.xs": *consumer
    "tokens.spacing.sm": *consumer
    "tokens.spacing.md": *consumer
    "tokens.spacing.lg": *consumer
    "tokens.rounded.square": *consumer
    "tokens.rounded.discovery-tile": *consumer
    "tokens.rounded.control": *consumer
    "tokens.rounded.search": *consumer
    "tokens.rounded.career-action": *career
    "tokens.components.consumer-search.type": *consumer
    "tokens.components.consumer-search.bg": *consumer
    "tokens.components.consumer-search.fg": *consumer
    "tokens.components.consumer-search.radius": *consumer
    "tokens.components.consumer-search.padding": *consumer
    "tokens.components.consumer-search.font": *consumer
    "tokens.components.consumer-search.states": *consumer
    "tokens.components.consumer-search.use": *consumer
    "tokens.components.consumer-filter-control.type": *consumer
    "tokens.components.consumer-filter-control.bg": *consumer
    "tokens.components.consumer-filter-control.fg": *consumer
    "tokens.components.consumer-filter-control.border": *consumer
    "tokens.components.consumer-filter-control.radius": *consumer
    "tokens.components.consumer-filter-control.height": *consumer
    "tokens.components.consumer-filter-control.font": *consumer
    "tokens.components.consumer-filter-control.states": *consumer
    "tokens.components.consumer-filter-control.use": *consumer
    "tokens.components.consumer-discovery-tile.type": *consumer
    "tokens.components.consumer-discovery-tile.radius": *consumer
    "tokens.components.consumer-discovery-tile.padding": *consumer
    "tokens.components.consumer-discovery-tile.font": *consumer
    "tokens.components.consumer-discovery-tile.states": *consumer
    "tokens.components.consumer-discovery-tile.use": *consumer
    "tokens.components.merchant-cta.type": &merchant { surface_id: merchant-marketing, source_id: merchant-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.components.merchant-cta.bg": *merchant
    "tokens.components.merchant-cta.fg": *merchant
    "tokens.components.merchant-cta.radius": *merchant
    "tokens.components.merchant-cta.height": *merchant
    "tokens.components.merchant-cta.font": *merchant
    "tokens.components.merchant-cta.states": *merchant
    "tokens.components.merchant-cta.use": *merchant
    "tokens.components.careers-orange-action.type": *career
    "tokens.components.careers-orange-action.bg": *career
    "tokens.components.careers-orange-action.fg": *career
    "tokens.components.careers-orange-action.radius": *career
    "tokens.components.careers-orange-action.padding": *career
    "tokens.components.careers-orange-action.font": *career
    "tokens.components.careers-orange-action.states": *career
    "tokens.components.careers-orange-action.use": *career
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Selector-backed values are limited to the supplied consumer, merchant-marketing, and careers-marketing captures. These domains are not a single inferred product UI."
  colors:
    canvas: "#ffffff"
    foreground: "#000000"
    title: "#222222"
    muted: "#666666"
    search-surface: "#f5f5f5"
    control-border: "#e4e4e4"
    brand-orange: "#ff3d00"
    on-brand: "#ffffff"
  typography:
    family: { ui: "Pretendard Std Variable" }
    consumer-body: { size: 16, weight: 400, lineHeight: 1.50, use: "Repeated consumer-home body and button sample" }
    consumer-title: { size: 20, weight: 700, lineHeight: 1.50, use: "Consumer-home section-title sample" }
    search-control: { size: 15, weight: 500, lineHeight: 1.50, use: "Consumer-home search input" }
    career-display: { size: 38, weight: 700, lineHeight: 1.35, use: "Careers-service marketing heading" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 20 }
  rounded: { square: 0, discovery-tile: 6, control: 8, search: 40, career-action: 15 }
  components:
    consumer-search: { type: input, bg: "#f5f5f5", fg: "#000000", radius: "40px", padding: "0px 15px 0px 32px", font: "15px / 500 Pretendard Std Variable", states: "default only; no interaction state captured", use: "Consumer-home search input, selector home::[data-omd-capture=0]" }
    consumer-filter-control: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #e4e4e4", radius: "8px", height: "32px", font: "16px / 400 Pretendard Std Variable", states: "default only; no interaction state captured", use: "Consumer-home compact filter/control, selector home::[data-omd-capture=1]" }
    consumer-discovery-tile: { type: button, radius: "6px", padding: "8px 12px", font: "16px / 400 Pretendard Std Variable", states: "default only; no interaction state captured", use: "Consumer-home image-led discovery tile, selector home::[data-omd-capture=17]" }
    merchant-cta: { type: button, bg: "#002d4e", fg: "#ffffff", radius: "8px", height: "48px", font: "16px / 700 Pretendard", states: "default only; no interaction state captured", use: "Merchant-marketing CTA link, selector surface-2::[data-omd-capture=20]" }
    careers-orange-action: { type: button, bg: "#ff3d00", fg: "#ffffff", radius: "15px", padding: "10.5px 24px", font: "16px / 400 Pretendard", states: "default only; no interaction state captured", use: "Careers-service marketing action, selector surface-3::[data-omd-capture=14]" }
  components_harvested: true
---

# Design System Inspiration of CatchTable (캐치테이블)

## 1. Visual Theme & Atmosphere

CatchTable is a restaurant platform operated by WAD that connects the diner’s choice and reservation journey with merchant-side reservation, waiting, POS, pickup, and ordering operations. Its official careers narrative describes the consumer service as making a choice more certain and enjoyable, while its merchant site frames the other side as an integrated operating solution. The supplied public consumer home is visually quieter than those merchant and employer stories: a white field, black text, compact controls, image-led discovery tiles, and a single loaded `Pretendard Std Variable` family. The official careers surface supplies the current orange `#FF3D00` action treatment, but that marketing expression is kept distinct from the consumer home rather than generalized into a product-wide CTA system.

The reference therefore preserves three source domains as three facts: consumer-product discovery, merchant marketing, and careers marketing. It does not claim that a merchant lead form or careers campaign button is a restaurant-booking control.

## 2. Layout & Grid

- The captured consumer home is a 1440×900 public route with a 38px search input, compact 32px control, centered 13px discovery labels, a 20px/700 section-title sample, and repeated image-led discovery tiles.
- Consumer search padding is asymmetric—`0px 15px 0px 32px`—which leaves room for a leading search affordance without asserting an unmeasured icon spec.
- Consumer discovery tiles are observed at 6px radius with `8px 12px` padding. The capture does not establish a universal card grid, breakpoint, or responsive rule.
- Merchant and careers surfaces have their own marketing layouts. Their button values are documented only as route-local examples below.

## 3. Color & Typography

### Color tokens

- `#FFFFFF` — observed consumer canvas and compact-control background.
- `#000000` — observed consumer foreground.
- `#222222` — observed consumer section-title and careers-heading ink.
- `#666666` — consumer-home muted text sample.
- `#F5F5F5` — consumer search background.
- `#E4E4E4` — consumer compact-control border.
- `#FF3D00` — careers-marketing action background; this is verified public brand expression, not a universal consumer-product status or CTA token.

### Typography evidence classes

- **Live consumer computed use:** `Pretendard Std Variable` is loaded/high confidence with 122 observed uses on the consumer home and seven jsDelivr subset source URLs. It is the only UI family promoted in `tokens.typography.family.ui`.
- **Live marketing computed use:** `Pretendard` is loaded/high confidence with 117 observed uses across the merchant and careers surfaces and source URLs from Lazyrockets plus jsDelivr. It is recorded as source-domain evidence, not added as a second consumer UI-family token.
- **Surface-local live use:** `NanumSquareRound` is loaded with one observed merchant-surface text use and eighteen source URLs; its low frequency and separate B2B surface keep it out of consumer tokens.
- **Declared-only assets:** Aggro, Arita-dotum-Medium, Cafe24Oneprettynight, Chosunilbo_myungjo, D2Coding, DungGeunMo, Gmarket Sans, NanumSquare, Inter, KaTeX faces, and other zero-use declarations in the bundle remain declared-only. They are neither rendered as substitutes nor promoted as CatchTable UI roles.
- **Official font/license boundary:** Pretendard’s upstream project distributes the family under SIL Open Font License 1.1. That license explains the font asset, while computed usage plus FontFaceSet/source corroboration is what establishes the observed public use above.

## 4. Components

### Consumer search

**Default**
- Background: `#F5F5F5`
- Text: `#000000`
- Radius: `40px`
- Padding: `0px 15px 0px 32px`
- Font: `15px / 500 Pretendard Std Variable`
- Use: Consumer-home search input; `home::[data-omd-capture="0"]`.

### Consumer filter control

**Default**
- Background: `#FFFFFF`
- Text: `#000000`
- Border: `1px solid #E4E4E4`
- Radius: `8px`
- Height: `32px`
- Font: `16px / 400 Pretendard Std Variable`
- Use: Consumer-home compact control; `home::[data-omd-capture="1"]`.

### Consumer discovery tile

**Default**
- Radius: `6px`
- Padding: `8px 12px`
- Font: `16px / 400 Pretendard Std Variable`
- Use: Image-led consumer-home discovery tile; `home::[data-omd-capture="17"]`.

### Merchant marketing CTA

**Default**
- Background: `#002D4E`
- Text: `#FFFFFF`
- Radius: `8px`
- Height: `48px`
- Font: `16px / 700 Pretendard`
- Use: Merchant-marketing CTA link; `surface-2::[data-omd-capture="20"]`.

### Careers orange action

**Default**
- Background: `#FF3D00`
- Text: `#FFFFFF`
- Radius: `15px`
- Padding: `10.5px 24px`
- Font: `16px / 400 Pretendard`
- Use: Careers-service marketing action; `surface-3::[data-omd-capture="14"]`.

The supplied bundle reports zero interaction records. No hover, pressed, focus, disabled, menu, dialog, validation, or responsive variants are claimed; the `surface-2` static pseudo-state samples are not promoted because the bundle has no corresponding interaction provenance.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.catchtable.net/` (consumer product surface), `https://biz.catchtable.co.kr/n/main` (merchant marketing), `https://career.catchtable.co.kr/ko/service` (careers marketing and official service context), `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution/design boundary), and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence boundary)
**Tier 2 sources:** `https://getdesign.md/catchtable` (attempted; built-in web open safe-open failure/no usable record), `https://styles.refero.design/?q=catchtable` (attempted; built-in web open safe-open failure/no usable record), web search for both names (no CatchTable record returned)
**Conflicts unresolved:** none

Legacy claims about a 145-token semantic sheet, a universal 150% type contract, a five-tier shadow ladder, restaurant-booking CTA styling, bottom-navigation states, Swiper states, and a universal hard-square geometry were removed: the supplied 2026 capture does not substantiate them.

## 5. Elevation

The selector-backed consumer controls documented above have `box-shadow: none`. The merchant CTA has a route-local shadow, but no repeatable elevation scale is established across the three domains, so no shadow token is promoted.

## 6. Spacing & Shape

The repeated small values in the supplied bundle support a conservative `4 / 8 / 12 / 20px` observed spacing set. Radius is deliberately source-specific: the consumer home includes square chrome, 6px discovery tiles, an 8px compact control, and a 40px search field; the careers action is 15px. These observations are not a global radius prescription.

## 7. Iconography & Imagery

The consumer home is image-led: repeated discovery tiles use a simple control shell around imagery and text. The capture exposes ordinary controls but no named icon library, stroke treatment, image ratio, or reusable media-card contract. Those details remain unclaimed.

### Do

- Keep restaurant imagery and discovery content tied to the consumer surface where they were observed.
- Preserve the separation between diner discovery imagery and merchant lead-generation content.

### Don't

- Invent a named icon library, stroke specification, or image ratio that the evidence does not establish.
- Recast merchant marketing imagery as an observed consumer reservation component.

## 8. Accessibility

- The consumer search has black text on `#F5F5F5`; the compact control has black text on white with a `#E4E4E4` border.
- The careers orange action is `#FFFFFF` on `#FF3D00`; it is a marketing observation, not an accessibility approval for all consumer actions.
- No keyboard or focus-visible state was captured. Any implementation needs its own accessible focus treatment rather than inferring one from the recorded radii.
- Declared-only fonts must not be presented as loaded CatchTable faces.

## 9. Content & Voice

Official careers copy frames the consumer experience around making a dining choice with more confidence and enjoyment, and the merchant experience around connecting reservation, waiting, POS, and store operations. Use that clarity—choice for diners, operational continuity for merchants—without copying slogans or turning a careers narrative into consumer-product microcopy.

## 10. Voice & Tone

**Voice adjectives:** clear · food-centered · operationally concrete

| Do | Don't |
|---|---|
| Describe a diner choice or a concrete restaurant operation. | Invent urgency, discounts, or reservation states that were not captured. |
| Keep consumer and merchant messages audience-specific. | Treat a merchant lead-generation CTA as a diner-booking control. |
| Use calm, direct Korean service language. | Reproduce official slogans as generated product copy. |

## 11. Brand Narrative

CatchTable’s official careers page describes a service present around meaningful meals and store opening/growth moments. It identifies the consumer side as CatchTable (B2C), where reservations and waiting support the dining journey, and the merchant side as CatchTable Business (B2B), combining reservation, waiting, and POS operations. The same page reports a current ambition to grow into a food-service super-platform. WAD’s official service terms identify the operating company as 주식회사 와드.

## 12. Principles

1. **Keep the two-sided service legible.** Consumer discovery and merchant operations are related but not the same UI surface.
2. **Promote only observed public styles.** A selector-backed product token does not authorize a plausible restaurant-detail or reservation-flow variant.
3. **Let food discovery carry the consumer surface.** The captured consumer home uses image-led tiles and compact controls rather than a generalized sales dashboard.
4. **Treat orange by source domain.** `#FF3D00` is verified on the careers marketing action; do not automatically use it as a universal consumer semantic color.

## 13. Personas

The official service description names two stakeholder groups; this reference keeps them as groups rather than inventing demographic personas:

- **Diners:** use the consumer service to discover restaurants, make reservations, and use waiting-related experiences.
- **Restaurant operators:** use merchant-side reservation, waiting, POS, pickup, order, and management functions.

## 14. States

Only default static component samples are documented. The raw bundle contains zero interaction records, so loading, error, success, focus, hover, pressed, disabled, menu-open, dialog-open, and responsive states are intentionally omitted.

## 15. Motion

No duration, easing, transition, carousel, or scroll state is recorded in the supplied evidence. Motion is intentionally undocumented.
