---
id: kurly
name: Kurly
country: KR
category: ecommerce
homepage: "https://www.kurly.com"
primary_color: "#5f0080"
logo:
  type: favicon
  slug: "https://res.kurly.com/icons/favicon-128x128.png"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: commerce-home, url: "https://www.kurly.com/main", inspected: "2026-07-13" }
    - { id: category-list, kind: commerce-category, url: "https://www.kurly.com/shopping/categories/list", inspected: "2026-07-13" }
    - { id: new-products, kind: commerce-collection, url: "https://www.kurly.com/collections/market-newproduct", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.kurly.com/main", captured: "2026-07-13" }
    - { id: category-live, kind: product-surface, url: "https://www.kurly.com/shopping/categories/list", captured: "2026-07-13" }
    - { id: collection-live, kind: product-surface, url: "https://www.kurly.com/collections/market-newproduct", captured: "2026-07-13" }
    - { id: kurly-introduce, kind: official-doc, url: "https://www.kurly.com/introduce", captured: "2026-07-13" }
    - { id: kurly-company, kind: official-doc, url: "https://newsroom.kurlycorp.com/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  claims:
    "tokens.colors.primary": &home_live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home_live
    "tokens.colors.foreground": *home_live
    "tokens.colors.body": *home_live
    "tokens.colors.muted": *home_live
    "tokens.colors.border": &collection_live { surface_id: new-products, source_id: collection-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.control-background": *collection_live
    "tokens.colors.control-muted": *collection_live
    "tokens.typography.family.sans": *home_live
    "tokens.typography.utility.size": *home_live
    "tokens.typography.utility.weight": *home_live
    "tokens.typography.utility.lineHeight": *home_live
    "tokens.typography.utility.use": *home_live
    "tokens.typography.category-tab.size": *home_live
    "tokens.typography.category-tab.weight": *home_live
    "tokens.typography.category-tab.lineHeight": *home_live
    "tokens.typography.category-tab.use": *home_live
    "tokens.typography.input.size": *home_live
    "tokens.typography.input.weight": *home_live
    "tokens.typography.input.lineHeight": *home_live
    "tokens.typography.input.use": *home_live
    "tokens.spacing.xxs": *home_live
    "tokens.spacing.xs": *home_live
    "tokens.spacing.sm": *home_live
    "tokens.spacing.md": *home_live
    "tokens.rounded.sm": *collection_live
    "tokens.rounded.xs": *collection_live
    "tokens.shadow.none": *collection_live
    "tokens.components.category-tab.type": *home_live
    "tokens.components.category-tab.fg": *home_live
    "tokens.components.category-tab.font": *home_live
    "tokens.components.category-tab.states": *home_live
    "tokens.components.category-tab.use": *home_live
    "tokens.components.form-input.type": *home_live
    "tokens.components.form-input.bg": *home_live
    "tokens.components.form-input.fg": *home_live
    "tokens.components.form-input.font": *home_live
    "tokens.components.form-input.error": *home_live
    "tokens.components.form-input.use": *home_live
    "tokens.components.product-list-article.type": *collection_live
    "tokens.components.product-list-article.fg": *collection_live
    "tokens.components.product-list-article.radius": *collection_live
    "tokens.components.product-list-article.font": *collection_live
    "tokens.components.product-list-article.use": *collection_live
  conflicts: []
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only values represented in the supplied three-surface collector artifact are canonical. Brand/corporate material and declared-only font assets remain narrative evidence."
  colors:
    primary: "#5f0080"
    canvas: "#ffffff"
    foreground: "#333333"
    body: "#464c52"
    muted: "#999999"
    border: "#dfe4eb"
    control-background: "#f7f7f7"
    control-muted: "#b5b5b5"
  typography:
    family: { sans: "Pretendard" }
    utility: { size: 14, weight: 400, lineHeight: "14px", use: "Repeated visible text and button default in the supplied desktop commerce capture." }
    category-tab: { size: 18, weight: 400, lineHeight: "23.94px", use: "Inactive category tab in the home and new-products surfaces; selected and hover/pressed samples are separately observed." }
    input: { size: 16, weight: 400, lineHeight: "20px", use: "Captured form input, including the collector's error-state sample." }
  spacing: { xxs: 2, xs: 4, sm: 8, md: 16 }
  rounded: { xs: 2, sm: 4 }
  shadow: { none: "none" }
  components_harvested: true
  components:
    category-tab: { type: button, fg: "#b5b5b5", font: "18px / 400 / Pretendard", states: "Selected tab is #5f0080 at 18px / 500; the captured inactive tab changed to #5f0080 at both hover and pressed.", use: "Category control at home::[data-omd-capture=\"7\"] and surface-3::[data-omd-capture=\"7\"]." }
    form-input: { type: input, bg: "#ffffff", fg: "#333333", font: "16px / 400 / Pretendard", error: "Error state was captured at home::[data-omd-interaction-capture=\"form-error-0-0\"] and surface-3::[data-omd-interaction-capture=\"form-error-0-0\"]; sampled computed values matched the retained default sample.", use: "Captured form input only; no focus, disabled, or success variant is specified." }
    product-list-article: { type: card, fg: "#333333", radius: "0px", font: "14px / 400 / Pretendard", use: "Article wrapper in the new-products product list at surface-3::article; 249px sampled width, with no card surface or hover variant observed." }
---

# Design System Inspiration of Kurly (컬리 / 마켓컬리)

## 1. Visual Theme & Atmosphere

Kurly is a Korean commerce company whose retail service began in 2015 around curated food and controlled-temperature delivery; its official introduction says that selection, delivery quality, fair pricing, customer care, and sustainable distribution are central to the service. The current public shopping surfaces in this reference show a compact commerce language rather than a published universal product design system: white backgrounds, charcoal text, fine light borders, a restrained deep-purple active accent, and a loaded Pretendard webfont. The recognizable purple is present in category selection and active text/border treatments, while the product-list article wrappers themselves remain visually flat. That separation matters: Kurly’s corporate story and its current shopping UI are related, but neither the corporate brand material nor marketing language is used here to fill unobserved commerce tokens. [Kurly introduction](https://www.kurly.com/introduce) and [company profile](https://newsroom.kurlycorp.com/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/) provide the business context; the three supplied live surfaces provide the UI values.

**Key Characteristics:**

- Current captured commerce surfaces use `#ffffff`, `#333333`, and a deep `#5f0080` active accent.
- Pretendard is computed on 761 visible samples and corroborated by loaded Kurly-hosted FontFace sources.
- The retained component evidence is deliberately surface-specific: category tabs, a form-input error sample, and flat product-list articles.
- The supplied artifact contains desktop captures only; responsive rules, mobile navigation, checkout, and product-detail UI are not specified.

## 2. Color Palette & Roles

### Observed live product surfaces

- **Active accent** (`#5f0080`): repeated computed text and border value across the home, category-list, and new-products surfaces; selected category-tab and hover/pressed tab samples use it.
- **Canvas** (`#ffffff`): repeated page/control background in the supplied product surfaces.
- **Foreground** (`#333333`): dominant computed text value in all three captured product surfaces.
- **Body emphasis** (`#464c52`): observed text value in home and new-products samples.
- **Muted control text** (`#b5b5b5`) and **muted text** (`#999999`): observed inactive/secondary text values; no wider semantic role is inferred.
- **Control border** (`#dfe4eb`): observed 1px border on repeated 36px new-products list controls.
- **Control fill** (`#f7f7f7`): observed on compact product-list controls in the new-products surface.

### Boundary

The supplied current capture does not establish the former purple ramps, cream bands, promotional colors, sale/error colors, or a filled purple commerce CTA. Those values are omitted from canonical tokens rather than inferred from legacy prose, logos, corporate material, or adjacent surfaces.

## 3. Typography Rules

### Evidence classes

- **Live computed surface-use:** all 761 retained uses resolve first to **Pretendard** across body, button, card, heading, input, list-item, and text roles. The collector also records 18 Kurly-hosted Pretendard subset files as loaded FontFace sources, so `Pretendard` is the current UI-family token.
- **Font source and license:** the webfont files are served from `res.kurly.com`; the typeface project publishes its license as SIL Open Font License 1.1. This establishes the reusable typeface license, not a Kurly-owned brand-font asset. [Pretendard license](https://github.com/orioncactus/pretendard/blob/main/LICENSE)
- **Declared-only:** `Noto Sans KR` has declared source files in the artifact but no visible computed use. It is not promoted to the UI family. `swiper-icons` is likewise declared-only icon-font infrastructure.
- **System fallbacks:** the computed family includes platform and system fallbacks after Pretendard. They remain fallbacks and are not presented as Kurly typography.

### Observed hierarchy

| Role | Size | Weight | Line height | Provenance |
|------|------|--------|-------------|------------|
| Utility/default | 14px | 400 | 14px | Repeated visible text and buttons in all captured product surfaces |
| Category tab, inactive | 18px | 400 | 23.94px | `home::[data-omd-capture="7"]` and matching `surface-3` control |
| Category tab, selected/hover/pressed | 18px | 500 | 23.94px | selected `data-omd-capture="6"`; hover/pressed state capture for `"7"` |
| Form input | 16px | 400 | 20px | retained input/error sample |

Do not substitute Noto Sans KR or a system font and call it Kurly’s active UI family; the July capture directly corroborates Pretendard instead.

## 4. Component Stylings

### Category navigation

**Category tab — inactive, selected, and observed interaction states**
- Text: `#b5b5b5` inactive; `#5f0080` selected
- Radius: 0px
- Font: 18px / 400 inactive; 18px / 500 selected
- Hover: `#5f0080` text at 18px / 500 on `home::[data-omd-capture="7"]::state-hover`
- Pressed: `#5f0080` text at 18px / 500 on `home::[data-omd-capture="7"]::state-pressed`
- Use: Category control at `home::[data-omd-capture="6"]` / `"7"` and corresponding new-products controls; the selected tab is the active purple state.

### Form input

**Captured input — default and error sample**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 0px
- Font: 16px / 400 / Pretendard
- Error: Captured at `home::[data-omd-interaction-capture="form-error-0-0"]` and `surface-3::[data-omd-interaction-capture="form-error-0-0"]`; retained computed background, text, border, and radius matched the default sample.
- Use: A captured form input only; focus, disabled, success, and validation-copy variants were not observed.

### Product-list controls

**Repeated list control — observed default**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dfe4eb`
- Radius: 4px
- Font: 14px / 400 / Pretendard
- Use: Repeated 249px by 36px button at `surface-3::[data-omd-capture="148"]`; default state only.

**Compact product-list control — observed default**
- Background: `#f7f7f7`
- Text: `#b5b5b5`
- Radius: 2px
- Padding: 2px 0px 3px
- Font: 13px / 400 / Pretendard
- Use: Compact 22px control at `surface-3::[data-omd-capture="60"]`; default state only.

### Product-list article

**Article wrapper — observed default**
- Text: `#333333`
- Radius: 0px
- Font: 14px / 400 / Pretendard
- Use: `surface-3::article` wrapper; representative sample is 249px wide. It has a transparent computed background, no border, no shadow, and no observed hover variant.

No filled purple purchase CTA, badge, modal, checkout control, product-card image treatment, responsive variant, or additional interaction state is specified: the supplied capture does not give that selector/state provenance.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.kurly.com/main; https://www.kurly.com/shopping/categories/list; https://www.kurly.com/collections/market-newproduct; https://www.kurly.com/introduce; https://newsroom.kurlycorp.com/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/
**Tier 2 sources:** https://getdesign.md/kurly (attempted; no Kurly record returned in public search); https://styles.refero.design/?q=kurly (attempted; no Kurly style record returned in public search)
**Conflicts unresolved:** none

## 5. Layout Principles

- The supplied evidence is a 1440px desktop capture, not a responsive specification.
- Repeated new-products article wrappers measure 249px wide; that observation does not establish a site-wide grid, column count, gutter, or breakpoint.
- Keep product-list wrappers flat until a specific elevated/card treatment is observed on the relevant surface.

## 6. Depth & Elevation

The retained representative category tabs, repeated product-list controls, and product-list article wrappers all compute to `box-shadow: none`. No elevation scale, modal shadow, sticky-header shadow, or hover shadow is specified from this artifact.

## 7. Do's and Don'ts

### Do

- Use `#5f0080` for the observed active category treatment, not as a presumed universal fill.
- Use Pretendard where this reference needs the captured product-surface UI family.
- Keep the observed new-products article wrapper flat unless another surface supplies a measured treatment.
- Preserve the selector and state boundaries for category-tab hover/pressed and form-input error evidence.

### Don't

- Don't restore legacy purple ramps, cream fills, sale colors, filled purchase CTAs, or badges without current product-surface provenance.
- Don't turn declared-only Noto Sans KR or system fallbacks into Kurly’s UI-family token.
- Don't use corporate/newsroom brand narrative as an authority for commerce component geometry or color values.
- Don't invent responsive, checkout, modal, or additional form states from the three desktop captures.

## 8. Responsive Behavior

No mobile viewport or responsive-state capture was supplied. Breakpoints, column changes, touch-target requirements, and mobile navigation are intentionally unspecified.

## 9. Agent Prompt Guide

- "Create a captured Kurly category tab: inactive text `#b5b5b5`, selected text `#5f0080`; 18px Pretendard, 0px radius. The observed inactive tab becomes `#5f0080` at 18px/500 on hover and pressed."
- "Create the observed new-products list control: white background, `#333333` text, 1px `#dfe4eb` border, 4px radius, 14px/400 Pretendard. Do not add a hover state."
- "Use a flat, transparent product-list article wrapper with `#333333` 14px/400 Pretendard; do not infer a card background, shadow, or product-image treatment."

## 10. Voice & Tone

Kurly’s first-party introduction frames the service around careful selection, delivery quality, price, customer care, and sustainable distribution. The official company profile names `Something Better`, tenacity, integrity, diversity, and sustainability as its values. This supports a practical, discriminating, and responsible voice in company material; it does not establish unobserved storefront microcopy rules.

| Context | First-party-supported direction |
|---------|-------------------------------|
| Product selection | Explain the standard or quality rationale clearly. |
| Delivery | State timing and product-condition information plainly. |
| Producer/partner story | Credit the producer and describe the relevant value chain. |
| Sustainability | Describe the specific practice or impact rather than generic “eco” claims. |

**Official language samples.**

- `Something Better` — company value label. <!-- source: newsroom.kurlycorp.com company profile -->
- `나와 내 가족이 사고 싶은 상품을 판매합니다.` — official service principle. <!-- source: kurly.com/introduce -->
- `더 나은 삶을 위한 유통 혁신` — company-profile framing. <!-- source: newsroom.kurlycorp.com company profile -->

## 11. Brand Narrative

Kurly’s official materials say that the company began its consumer service in 2015 and built it around carefully chosen products and a cold-chain delivery approach. The current company profile identifies Market Kurly and Beauty Kurly as services and describes the broader purpose as distribution innovation for a better life. [Company profile](https://newsroom.kurlycorp.com/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/)

Its own introduction connects the service proposition to product selection, delivery quality, fair pricing, customer care, and sustainable distribution. That narrative is useful context for a reference user, but it does not convert corporate claims into component tokens or make unobserved commerce behaviors factual. [Kurly introduction](https://www.kurly.com/introduce)

## 12. Principles

1. **Something Better.** The company says it pursues better things and better ways. *UI implication:* make a product or delivery claim specific and traceable to its supporting evidence.
2. **Integrity.** The company describes acting on trust and sincere communication. *UI implication:* do not conceal an evidence boundary behind a plausible UI token.
3. **Diversity.** The company says it respects different preferences and choices. *UI implication:* do not collapse separate product, marketing, and corporate surfaces into one fictional system.
4. **Sustainability.** Kurly connects sustainability to customers, producers, partners, and the distribution ecosystem. *UI implication:* represent a sustainability claim only when the source identifies the practice or impact.

## 13. Personas

Kurly’s first-party material identifies stakeholder groups rather than providing customer personas: customers and families, producers, partners, shareholders, and employees. No demographic archetypes, purchase behavior, or individual personas were collected for this reference, so they are not fabricated here.

- [FILL IN: user-provided primary customer segment and task]
- [FILL IN: user-provided producer or partner workflow, if the target surface serves one]

## 14. States

The collector recorded category-tab hover and pressed samples and a form-input error sample only. All other product states need direct surface evidence before specification.

| Category | Evidence status |
|----------|-----------------|
| Default category tab | Inactive and selected values captured |
| Hover | Captured for one inactive category tab |
| Pressed | Captured for one inactive category tab |
| Error | Captured for a form input; retained computed values matched the default sample |
| Empty | [FILL IN: no observed state] |
| Loading | [FILL IN: no observed state] |
| Success | [FILL IN: no observed state] |
| Skeleton | [FILL IN: no observed state] |
| Disabled | [FILL IN: no observed state] |
| Focus | [FILL IN: no observed state] |

## 15. Motion & Easing

No motion duration, easing curve, or transition was captured. The hover and pressed samples establish resulting computed styles for one category tab only; they do not establish motion behavior. [FILL IN: product-specific motion evidence]
