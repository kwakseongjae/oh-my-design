---
name: Kurly
colors:
  primary: '#5f0080'
  canvas: '#ffffff'
  foreground: '#333333'
  body: '#464c52'
  muted: '#999999'
  border: '#dfe4eb'
  control-background: '#f7f7f7'
  control-muted: '#b5b5b5'
typography:
  utility:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 14px
    use: Repeated visible text and button default in the supplied desktop commerce capture.
  category-tab:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 23.94px
    use: Inactive category tab in the home and new-products surfaces; selected and hover/pressed samples are separately observed.
  input:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 16px
    use: Captured form input, including the collector's error-state sample; letter-spacing -0.33px. Corrected 2026-09-29 from 20px, which no input sample records.
rounded:
  xs: 2px
  sm: 4px
spacing:
  xxs: 2
  xs: 4
  sm: 8
  md: 16
components:
  category-tab:
    type: button
    textColor: '#b5b5b5'
    typography: 18px / 400 / Pretendard
    states: 'Selected tab is #5f0080 at 18px / 500; the captured inactive tab changed to #5f0080 at both hover and pressed.'
    use: Category control at home::[data-omd-capture="7"] and surface-3::[data-omd-capture="7"].
    hover: '#5f0080'
    pressed: '#5f0080'
  form-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#333333'
    typography: 16px / 400 / Pretendard
    error: Error state was captured at home::[data-omd-interaction-capture="form-error-0-0"] and surface-3::[data-omd-interaction-capture="form-error-0-0"]; sampled computed values matched the retained default sample.
    use: Captured form input only; no focus, disabled, or success variant is specified.
  product-list-article:
    type: card
    textColor: '#333333'
    rounded: 0px
    typography: 14px / 400 / Pretendard
    use: Article wrapper in the new-products product list at surface-3::article; 249px sampled width, with no card surface or hover variant observed.
  header-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#464c52'
    border: bottom 1px, transparent at rest
    rounded: 0px
    padding: 0px
    height: 21px
    typography: 16px / 500 / 20px
    hover: 'fg #5f0080, bottom border #5f0080'
    pressed: 'fg #5f0080, bottom border #5f0080'
    states: rest, hover, and pressed sampled on six links on home (capture 14-19) and the same six on new-products, all recording the same values; no focus frame
    use: Header navigation link (a.css-1m0tfai) at home::[data-omd-capture="14"]
  product-list-control:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '1px #dfe4eb'
    rounded: 4px
    padding: 0px
    size: 249px x 36px
    typography: 14px / 400 / 14px
    states: default captured; no pointer-state sample
    use: Repeated product-list button on new-products at surface-3::[data-omd-capture="148"] (58 occurrences of this variant)
    height: 20px
  compact-list-control:
    type: button
    backgroundColor: '#f7f7f7'
    textColor: '#b5b5b5'
    rounded: 2px
    padding: 2px 0px 3px
    size: 22px x 22px
    typography: 13px / 400 / 17px
    states: default captured; no pointer-state sample
    use: Compact product-list control on new-products at surface-3::[data-omd-capture="60"] (18 occurrences of this variant)
  outline-button:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    border: '1px #e2e2e2'
    rounded: 3px
    padding: 0px
    size: 140px x 40px
    typography: 14px / 400 / 39px
    states: default captured; no pointer-state sample
    use: 140 x 40 outline button at home::[data-omd-capture="92"]; the variant occurs four times across home and category-list
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Kurly (컬리 / 마켓컬리)

## Overview

### Visual Theme & Atmosphere

Kurly is a Korean commerce company whose retail service began in 2015 around curated food and controlled-temperature delivery; its official introduction says that selection, delivery quality, fair pricing, customer care, and sustainable distribution are central to the service. The current public shopping surfaces in this reference show a compact commerce language rather than a published universal product design system: white backgrounds, charcoal text, fine light borders, a restrained deep-purple active accent, and a loaded Pretendard webfont. The recognizable purple is present in category selection and active text/border treatments, while the product-list article wrappers themselves remain visually flat. That separation matters: Kurly’s corporate story and its current shopping UI are related, but neither the corporate brand material nor marketing language is used here to fill unobserved commerce tokens. [Kurly introduction](https://www.kurly.com/introduce) and [company profile](https://newsroom.kurlycorp.com/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/) provide the business context; the three supplied live surfaces provide the UI values.

**Key Characteristics:**

- Current captured commerce surfaces use `#ffffff`, `#333333`, and a deep `#5f0080` active accent.
- Pretendard is computed on 761 visible samples and corroborated by loaded Kurly-hosted FontFace sources.
- The retained component evidence is deliberately surface-specific: category tabs, header navigation links, product-list controls, a small outline button, a form-input error sample, and flat product-list articles.
- Measured pointer states use the accent: the inactive category tab and the header navigation links turn `#5f0080` on hover and press, and the links also show a 1px `#5f0080` bottom border.
- The supplied artifact contains desktop captures only; responsive rules, mobile navigation, checkout, and product-detail UI are not specified.

### Primary tasks

- Shop curated food delivered at a controlled temperature
- Pick a product category and see its listings
- Scan the new-products list for recently added items

### Brand Narrative

Kurly’s official materials say that the company began its consumer service in 2015 and built it around carefully chosen products and a cold-chain delivery approach. The current company profile identifies Market Kurly and Beauty Kurly as services and describes the broader purpose as distribution innovation for a better life. [Company profile](https://newsroom.kurlycorp.com/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/)

Its own introduction connects the service proposition to product selection, delivery quality, fair pricing, customer care, and sustainable distribution. That narrative is useful context for a reference user, but it does not convert corporate claims into component tokens or make unobserved commerce behaviors factual. [Kurly introduction](https://www.kurly.com/introduce)

### Principles

1. **Something Better.** The company says it pursues better things and better ways. *UI implication:* make a product or delivery claim specific and traceable to its supporting evidence.
2. **Integrity.** The company describes acting on trust and sincere communication. *UI implication:* do not conceal an evidence boundary behind a plausible UI token.
3. **Diversity.** The company says it respects different preferences and choices. *UI implication:* do not collapse separate product, marketing, and corporate surfaces into one fictional system.
4. **Sustainability.** Kurly connects sustainability to customers, producers, partners, and the distribution ecosystem. *UI implication:* represent a sustainability claim only when the source identifies the practice or impact.

### Personas

Kurly’s first-party material identifies stakeholder groups rather than providing customer personas: customers and families, producers, partners, shareholders, and employees. No demographic archetypes, purchase behavior, or individual personas were collected for this reference, so they are not fabricated here.

## Colors

### Observed live product surfaces

- **Active accent** (`#5f0080`): repeated computed text and border value across the home, category-list, and new-products surfaces; the selected category tab, the category-tab hover/pressed samples, and the header navigation link hover/pressed samples use it.
- **Canvas** (`#ffffff`): repeated page/control background in the supplied product surfaces.
- **Foreground** (`#333333`): dominant computed text value in all three captured product surfaces.
- **Body emphasis** (`#464c52`): observed text value in home and new-products samples; it is the header navigation link colour at rest.
- **Muted control text** (`#b5b5b5`) and **muted text** (`#999999`): observed inactive/secondary text values; no wider semantic role is inferred.
- **Control border** (`#dfe4eb`): observed 1px border on repeated 36px new-products list controls.
- **Control fill** (`#f7f7f7`): observed on compact product-list controls in the new-products surface.

### Boundary

The supplied current capture does not establish the former purple ramps, cream bands, promotional colors, sale/error colors, or a filled purple commerce CTA. Those values are omitted from canonical tokens rather than inferred from legacy prose, logos, corporate material, or adjacent surfaces.

## Typography

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
| Header navigation link | 16px | 500 | 20px | `home::[data-omd-capture="14"]` to `"19"` and the matching new-products links |
| Form input | 16px | 400 | 16px | all four input samples (`home` and `surface-3` capture 8, both error samples); letter-spacing -0.33px. Corrected 2026-09-29 from 20px, which no input sample records |

Do not substitute Noto Sans KR or a system font and call it Kurly’s active UI family; the July capture directly corroborates Pretendard instead.

## Layout

- The supplied evidence is a 1440px desktop capture, not a responsive specification.
- Repeated new-products article wrappers measure 249px wide; that observation does not establish a site-wide grid, column count, gutter, or breakpoint.
- Keep product-list wrappers flat until a specific elevated/card treatment is observed on the relevant surface.

### Responsive Behavior

No mobile viewport or responsive-state capture was supplied. Breakpoints, column changes, touch-target requirements, and mobile navigation are intentionally unspecified.

## Elevation & Depth

The retained representative category tabs, repeated product-list controls, and product-list article wrappers all compute to `box-shadow: none`. No elevation scale, modal shadow, sticky-header shadow, or hover shadow is specified from this artifact.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

No motion duration, easing curve, or transition was captured. The hover and pressed samples establish resulting computed styles for the category tab and the header navigation links only; they do not establish motion behavior.

## Components

### Category navigation

**Category tab — inactive, selected, and observed interaction states**
- Text: `#b5b5b5` inactive; `#5f0080` selected
- Radius: 0px
- Font: 18px / 400 inactive; 18px / 500 selected
- Hover: `#5f0080` text at 18px / 500 on `home::[data-omd-capture="7"]::state-hover`
- Pressed: `#5f0080` text at 18px / 500 on `home::[data-omd-capture="7"]::state-pressed`
- Use: Category control at `home::[data-omd-capture="6"]` / `"7"` and corresponding new-products controls; the selected tab is the active purple state.

### Header navigation

**Header navigation link — rest, hover, and pressed**
- Background: transparent
- Text: `#464c52`
- Border: 1px bottom border, transparent at rest
- Radius: 0px
- Height: 21px
- Font: 16px / 500 / 20px Pretendard
- Hover: text `#5f0080`, and the 1px bottom border turns `#5f0080`
- Pressed: text `#5f0080`, bottom border `#5f0080`
- Use: six links at `home::[data-omd-capture="14"]` through `"19"` and the same six on new-products; all twelve record the same rest, hover, and pressed values.

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
- Home variant: `home::[data-omd-capture="51"]` (`button.product-function`) keeps the 249px × 36px size and 4px radius but computes a transparent fill, `#222222` text, a 1px `#dddddd` border, and 16px / 400 / 29px type. It is recorded as a style variant, not a separate component.

**Compact product-list control — observed default**
- Background: `#f7f7f7`
- Text: `#b5b5b5`
- Radius: 2px
- Padding: 2px 0px 3px
- Font: 13px / 400 / Pretendard
- Use: Compact 22px control at `surface-3::[data-omd-capture="60"]`; default state only.

### Outline button

**Observed default**
- Background: transparent
- Text: `#333333`
- Border: 1px `#e2e2e2`
- Radius: 3px
- Size: 140px × 40px
- Font: 14px / 400 / 39px Pretendard
- Use: `home::[data-omd-capture="92"]`; the variant occurs four times across home and category-list. No pointer-state frame.

### Product-list article

**Article wrapper — observed default**
- Text: `#333333`
- Radius: 0px
- Font: 14px / 400 / Pretendard
- Use: `surface-3::article` wrapper; representative sample is 249px wide. It has a transparent computed background, no border, no shadow, and no observed hover variant.

No filled purple purchase CTA, badge, modal, checkout control, product-card image treatment, or responsive variant is specified, and no interaction state beyond the category-tab and header-navigation hover/pressed frames and the form-input error sample: the supplied capture does not give that selector/state provenance. The bundle holds no focus frame for any Kurly element; this collector presses the mouse before it calls `.focus()`, so a focus frame from it would not be a keyboard focus-visible measurement in any case.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.kurly.com/main; https://www.kurly.com/shopping/categories/list; https://www.kurly.com/collections/market-newproduct; https://www.kurly.com/introduce; https://newsroom.kurlycorp.com/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/
**Tier 2 sources:** https://getdesign.md/kurly (attempted; no Kurly record returned in public search); https://styles.refero.design/?q=kurly (attempted; no Kurly style record returned in public search)
**Conflicts unresolved:** none

### States

The collector recorded hover and pressed samples for one inactive category tab and for six header navigation links on each of two surfaces, and a form-input error sample. Corrected 2026-09-29: the July text said category-tab only; the header-link frames were in the same bundle. All other product states need direct surface evidence before specification.

| Category | Evidence status |
|----------|-----------------|
| Default category tab | Inactive and selected values captured |
| Hover | Inactive category tab: `#b5b5b5` 18px/400 → `#5f0080` 18px/500. Header navigation links: `#464c52` → `#5f0080`, with the 1px bottom border turning from transparent to `#5f0080` |
| Pressed | The same values as hover, for both controls |
| Error | Captured for a form input; retained computed values matched the default sample |
| Empty | Not observed in the captured routes |
| Loading | Not observed in the captured routes |
| Success | Not observed in the captured routes |
| Skeleton | Not observed in the captured routes |
| Disabled | Not observed in the captured routes |
| Focus | No focus frame exists in the bundle; not specified |

## Do's and Don'ts

### Do

- Use `#5f0080` for the observed active category treatment, not as a presumed universal fill.
- Use Pretendard where this reference needs the captured product-surface UI family.
- Keep the observed new-products article wrapper flat unless another surface supplies a measured treatment.
- Preserve the selector and state boundaries for category-tab and header-navigation hover/pressed and form-input error evidence.

### Don't

- Don't restore legacy purple ramps, cream fills, sale colors, filled purchase CTAs, or badges without current product-surface provenance.
- Don't turn declared-only Noto Sans KR or system fallbacks into Kurly’s UI-family token.
- Don't use corporate/newsroom brand narrative as an authority for commerce component geometry or color values.
- Don't invent responsive, checkout, modal, or additional form states from the three desktop captures.

## Voice & Tone

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

## Agent Prompt Guide

- "Create a captured Kurly category tab: inactive text `#b5b5b5`, selected text `#5f0080`; 18px Pretendard, 0px radius. The observed inactive tab becomes `#5f0080` at 18px/500 on hover and pressed."
- "Create the observed new-products list control: white background, `#333333` text, 1px `#dfe4eb` border, 4px radius, 14px/400 Pretendard. Do not add a hover state."
- "Create the captured Kurly header navigation link: `#464c52` 16px/500 Pretendard with a transparent 1px bottom border; on hover and press the text and that border turn `#5f0080`."
- "Use a flat, transparent product-list article wrapper with `#333333` 14px/400 Pretendard; do not infer a card background, shadow, or product-image treatment."

## Governance

### Known Gaps

- **Contrast, `header-nav-link`.** Text `#464c52` on `#00000000` measures 2.42:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `compact-list-control`.** Text `#b5b5b5` on `#f7f7f7` measures 1.91:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `outline-button`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
