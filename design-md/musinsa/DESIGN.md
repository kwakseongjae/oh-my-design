---
name: Musinsa
colors:
  primary: '#000000'
  canvas: '#ffffff'
  foreground: '#000000'
  muted: '#666666'
  line: '#ebebeb'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
    use: Repeated storefront body and product text
  nav:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: 0px
    use: 56px global-navigation store link
rounded:
  square: 0px
  icon: 2px
  control: 4px
spacing:
  xs: 4
  sm: 6
  md: 8
  lg: 24
components:
  gnb-store-link:
    type: button
    textColor: rgba(255,255,255,0.8)
    rounded: 0px
    padding: 0px 8px
    height: 56px
    typography: 16px / 500 / Pretendard
    states: default captured only; the capture holds no pointer-state frame for any element on either storefront (interaction coverage 0 counts expansions only)
    use: Global-navigation store link on both captured storefronts
  search-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#8a8a8a'
    rounded: 4px
    padding: 8px 28px 8px 8px
    height: 36px
    typography: 14px / 400 / Pretendard
    states: default captured only; the capture holds no pointer-state frame for any element on either storefront (interaction coverage 0 counts expansions only)
    use: Home storefront search input
  product-image-link:
    type: card
    rounded: 0px
    padding: 0px
    height: 312px
    typography: 14px / 400 / Pretendard
    use: MUSINSA STANDARD product-image link in the listing grid
  product-utility-button:
    type: button
    textColor: '#000000'
    rounded: 0px
    padding: 4px
    height: 28px
    typography: 14px / 400 / Pretendard
    states: default captured only; the capture holds no pointer-state frame for any element on either storefront (interaction coverage 0 counts expansions only)
    use: Product-card utility control on the MUSINSA STANDARD storefront
  home-tab-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 14px 7px
    height: 48px
    typography: 14px / 400 / 21px Pretendard
    states: rest captured on five tabs, none marked selected; the capture holds no pointer-state frame for any element on either storefront
    use: Main-storefront category tab link (TabItem__TabLink) at home::[data-omd-capture="22"] through "26"
  floating-action-button:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.92)
    border: '1px solid #ebebeb'
    rounded: 100%
    size: 40px x 40px
    states: rest captured; the capture holds no pointer-state frame for any element on either storefront
    use: Main-storefront white floating action button (_fab__button--white) at home::[data-omd-capture="32"]; "36" records the same values. It carries an icon, not text, so no label colour is claimed
  global-filter-toggle:
    type: toggle
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 100%
    size: 40px x 40px
    typography: 12px / 500 / 18px Pretendard
    selected: 12px / 600, class _fab-global-filter__button--active
    states: inactive rest and one active variant captured as static markup; the active option's own fill is transparent and the fill behind it was not sampled, so neither the active fill nor its text colour is claimed; the capture holds no pointer-state frame for any element on either storefront
    use: Main-storefront floating global filter option at home::[data-omd-capture="34"] and "35"; active sample "33"
  outline-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #e0e0e0'
    rounded: 4px
    padding: 0px 11px
    height: 32px
    typography: 14px / 400 / 21px Pretendard
    states: rest captured on three controls; the capture holds no pointer-state frame for any element on either storefront
    use: MUSINSA STANDARD outline button at surface-2::[data-omd-capture="36"]; "37" (an anchor) and "38" record the same values
  search-keyword-tag:
    type: badge
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px
    height: 18px
    typography: 14px / 400 / 18px Pretendard
    states: rest captured on 26 tags; the capture holds no pointer-state frame for any element on either storefront
    use: MUSINSA STANDARD search keyword tag (UISearchTags__Tag) at surface-2::[data-omd-capture="40"]; all 26 tags record the same values, with no fill, border, or padding
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Musinsa (무신사)

## Overview

### Visual Theme & Atmosphere

Musinsa is a Korean fashion platform that began with sneaker photographs and street snaps, then grew into a marketplace and content ecosystem for Korean fashion brands. Its current public storefront capture is visually restrained at the interface layer: `#ffffff` canvas, `#000000` text, `#ebebeb` lines, square product imagery, and a loaded Pretendard text system. That restraint serves a catalog whose product photography, brand imagery, and editorial modules carry the visual variety. The official history connects this emphasis on images to the 2001 sneaker community and the later development of MUSINSA.com, Magazine, and Store. In 2025 Musinsa also renewed the MUSINSA STORE BI, making the retail-service identity bolder and separating it from the company CI as its global and offline footprint expanded. [Official history](https://about.musinsa.com/newsroom/about-musinsa) and [BI announcement](https://about.musinsa.com/newsroom/2025-1022) provide the narrative context; they do not by themselves supply interface tokens.

The two supplied Tier 1 surfaces are the main Musinsa recommendation storefront and the MUSINSA STANDARD brand storefront. They share a black/white/gray web chrome and dense 14px Pretendard product text. This pass does not treat the brand storefront as a proxy for every commerce, editorial, authenticated, mobile-app, help, or marketing surface.

**Key characteristics:**

- `#ffffff` canvas with `#000000` foreground and `#ebebeb` repeated line color
- Pretendard loaded from Musinsa’s own `image.msscdn.net` font files and visibly used across 657 captured elements
- Repeated 14px / 400 text, with a 16px / 500 global-navigation store link
- Square product imagery and listing controls; 4px search-input corners and 2px small-icon geometry are local defaults, not a universal radius scale
- No captured hover, focus, pressed, disabled, dialog, toast, or form-error state is promoted

### Primary tasks

- Search the main storefront for a specific item
- Browse a brand storefront's grid of product photos
- Discover Korean fashion brands through snaps and editorials

### Brand Narrative

Musinsa began in 2001 as a sneaker-focused community whose name is an abbreviation of “a place with tremendous sneaker photography.” The company says the community evolved into MUSINSA.com in 2003, expanded through fashion content and street snaps, and opened MUSINSA Store in 2009 to connect fashion brands with customers. Its 2025 founder story frames the company’s present role as a bridge for Korean fashion brands to reach international audiences; the company’s 2025 store-BI announcement separately explains that the renewed retail identity is intended to distinguish the store service from the corporate identity as online, offline, and global operations expand. [Official origin and evolution](https://about.musinsa.com/newsroom/musinsa-ceo) · [Official 2025 BI announcement](https://about.musinsa.com/newsroom/2025-1022)

### Principles

1. **Fashion content and partner brands are central to the platform story.** Musinsa’s official history describes street snaps, lookbooks, editorials, and brand discovery as part of the service. *UI implication:* do not replace verified product and editorial imagery with invented brand-color decoration. [Official history](https://about.musinsa.com/newsroom/about-musinsa)
2. **Store identity and company identity are intentionally distinct.** The 2025 announcement says the renewed MUSINSA STORE BI separates the retail service from the corporate CI. *UI implication:* do not generalize a store-surface token to corporate, campaign, or offline-signage contexts without evidence. [Official BI announcement](https://about.musinsa.com/newsroom/2025-1022)
3. **Evidence domains remain separate.** The two live storefront captures verify a small set of web tokens; official company history explains brand context. *UI implication:* leave any unobserved interaction, mobile, authenticated, marketing, or documentation pattern absent rather than filling it with a plausible ecommerce convention.

### Personas

No individual personas are promoted. The official material discusses customers, fashion enthusiasts, partner brands, and Korean designers at a group level, but it does not provide evidence for detailed fictional user biographies. Use stakeholder groups only: fashion shoppers seeking K-fashion discovery, and brands seeking a retail and content platform. [Official history](https://about.musinsa.com/newsroom/about-musinsa)

## Colors

### Current storefront tokens

- **Primary / Foreground** (`#000000`): repeated visible text and product utility-control color on both Tier 1 storefronts.
- **Canvas** (`#ffffff`): current search-input and page-surface color.
- **Muted text** (`#666666`): footer and supporting copy on the captured main storefront.
- **Line** (`#ebebeb`): repeatedly computed border color across both captured surfaces. The MUSINSA STANDARD outline buttons carry a separate 1px `#e0e0e0` border; it is a component value, not a palette role.

### Boundary

No sale, error, success, selected-filter, promotional, or dark-surface color is canonical in this pass. The older red and yellow claims were not present in the supplied Tier 1 color evidence and are omitted rather than reconstructed from a past snapshot or a different surface.

## Typography

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | The official company newsroom describes Musinsa’s product and retail evolution, but does not publish a universal current typography token. |
| Live computed surface-use | Both captured storefronts compute visible text as Pretendard; the collector recorded 657 visible uses. |
| FontFaceSet and source corroboration | Pretendard is loaded, with Musinsa-hosted Regular, Medium, SemiBold, and Bold source files under `image.msscdn.net`. |
| Official distributed asset | No Musinsa-exclusive distributed type family was verified. |
| Declared-only | FontAwesome and swiper-icons were declared but had zero observed visible text uses. |
| License | Pretendard’s upstream project publishes it under SIL Open Font License 1.1; this describes the font asset, not a Musinsa brand asset. [License](https://github.com/orioncactus/pretendard/blob/main/LICENSE) |
| Unresolved | Native-app, global-store, help-center, campaign, and authenticated-account typography remain outside these two captures. |

### Font family

- **Current visible UI family:** `Pretendard, "Apple SD Gothic Neo", sans-serif`
- **Loaded source boundary:** the collector observed Pretendard face sources from `https://image.msscdn.net/platform/fonts/`; the family is loadable in these captured storefronts.
- Do not replace unavailable or unobserved brand type with Pretendard. It is canonical here only because computed visible use and loaded FontFace/source evidence agree.

### Observed hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Provenance |
|---|---|---:|---:|---:|---:|---|
| Storefront body / product text | Pretendard | 14px | 400 | 21px | normal | Repeated on home and MUSINSA STANDARD capture elements |
| Global-navigation store link | Pretendard | 16px | 500 | 22px | normal | `home::[data-omd-capture="1"]`, 56px high |
| Storefront search input | Pretendard | 14px | 400 | 20px | normal | `home::[data-omd-capture="20"]`, 36px high |

## Layout

The captured storefronts repeatedly use 4px, 6px, 8px, and 24px spacing values. Product-image links on the MUSINSA STANDARD listing surface are square, with no observed container padding; section articles on that surface include 24px bottom padding. The two captures do not establish a responsive grid, desktop-to-mobile breakpoints, or a universal content gutter, so those are intentionally omitted.

### Responsive Behavior

No breakpoint transition, mobile navigation, or interaction expansion was captured in the supplied desktop evidence. The 56px global-navigation link, 36px home search input, 312px product-image link, and 28px product utility control are desktop-capture measurements, not cross-viewport specifications.

## Elevation & Depth

The captured navigation, product-link, and utility-control representatives report `box-shadow: none`. This supports a flat treatment for these observed elements only. No modal, sheet, dropdown, sticky, or promotional elevation token was captured.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

No motion duration, easing curve, or reduced-motion behavior was observed in the supplied raw evidence. No motion token is promoted.

## Components

### Captured storefront components

**Global-navigation Store Link**
- Text: `rgba(255,255,255,0.8)`
- Radius: 0px
- Padding: 0px 8px
- Height: 56px
- Font: 16px / 500 / Pretendard
- States: Default captured only; the collector recorded zero interaction expansions.
- Use: Global-navigation store link on both captured storefronts.
- Provenance: `home::[data-omd-capture="1"]`, selector class `_gnb__store_102dz_106`; also observed on `standard`.

**Home Search Input**
- Background: `#ffffff`
- Text: `#8a8a8a`
- Radius: 4px
- Padding: 8px 28px 8px 8px
- Height: 36px
- Font: 14px / 400 / Pretendard
- States: Default captured only; the collector recorded zero interaction expansions.
- Use: Search input on the main recommendation storefront.
- Provenance: `home::[data-omd-capture="20"]`, `input`, class begins `font-global placeholder-gray-400`.

**MUSINSA STANDARD Product-image Link**
- Radius: 0px
- Padding: 0px
- Height: 312px
- Font: 14px / 400 / Pretendard
- Use: Product-image link in the visible listing grid.
- Provenance: `standard::[data-omd-capture="421"]`, `a`, class includes `GoodsItem-BGx5c3Fz__Hr`.

**MUSINSA STANDARD Product Utility Button**
- Text: `#000000`
- Radius: 0px
- Padding: 4px
- Height: 28px
- Font: 14px / 400 / Pretendard
- States: Default captured only; the collector recorded zero interaction expansions.
- Use: Product-card utility control on the brand storefront.
- Provenance: `standard::[data-omd-capture="67"]`, `button`, class includes `GoodsItem-BGx5c3Fz__Br`.

**Main-storefront Category Tab Link**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 14px 7px
- Height: 48px
- Font: 14px / 400 / 21px Pretendard
- States: Rest captured on five tabs, none marked selected; the bundle holds no pointer-state frame for any element on either storefront.
- Use: Category tab row on the main recommendation storefront.
- Provenance: `home::[data-omd-capture="22"]` through `"26"`, `a`, class begins `TabItem__TabLink`.

**Main-storefront Floating Action Button**
- Background: `rgba(255, 255, 255, 0.92)`
- Border: 1px solid `#ebebeb`
- Radius: 100%
- Size: 40px × 40px
- States: Rest captured; no pointer-state frame exists.
- Use: White floating action button. It carries an icon, not text, so no label colour is claimed.
- Provenance: `home::[data-omd-capture="32"]` (`a`) and `"36"` (`button`), class includes `_fab__button--white`.

**Main-storefront Global Filter Option**
- Background: transparent
- Text: `#000000`
- Radius: 100%
- Size: 40px × 40px
- Font: 12px / 500 / 18px Pretendard
- Active variant: 12px / 600, class `_fab-global-filter__button--active`. The option's own fill stays transparent and the fill behind it was not sampled, so neither the active fill nor its text colour is claimed.
- States: Inactive rest and one active variant captured as static markup; no pointer-state frame exists.
- Provenance: `home::[data-omd-capture="34"]` and `"35"` (inactive), `"33"` (active), `button`, class begins `_fab-global-filter__button`.

**MUSINSA STANDARD Outline Button**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#e0e0e0`
- Radius: 4px
- Padding: 0px 11px
- Height: 32px
- Font: 14px / 400 / 21px Pretendard
- States: Rest captured on three controls; no pointer-state frame exists.
- Use: Outline button on the brand storefront.
- Provenance: `surface-2::[data-omd-capture="36"]` (`button`), `"37"` (`a`), and `"38"` (`button`), 197px × 32px, classes include `bg-white text-black border-gray-300`. The July notes list the same element as `standard::[data-omd-capture="36"]`.

**MUSINSA STANDARD Search Keyword Tag**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 0px
- Height: 18px
- Font: 14px / 400 / 18px Pretendard
- States: Rest captured on 26 tags; no pointer-state frame exists.
- Use: Text-only keyword tag below the brand-storefront search box, with no fill, border, or padding.
- Provenance: `surface-2::[data-omd-capture="40"]` and 25 siblings, `a`, class begins `UISearchTags__Tag`.

No primary checkout button, product-filter chip, sale badge, modal, toast, input focus/error, or hover/pressed state is included. The bundle holds no pointer-state frame (`<selector>::state-hover|pressed|focus`) for any element on either storefront (`observedStates: 0`), and its zero interaction count separately means that no dialog, menu, or tab was expanded. The prior generic component inventory is not retained as a current component contract.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.musinsa.com/main/musinsa/recommend?gf=A (main product storefront); https://www.musinsa.com/brand/musinsastandard?gf=A (MUSINSA STANDARD brand storefront).
**Tier 2 sources:** https://getdesign.md/musinsa (attempted direct lookup and indexed search; no usable record returned); https://styles.refero.design/?q=musinsa (attempted direct lookup and indexed search; no usable result returned).
**Conflicts unresolved:** none

### States

No empty, loading, error, success, skeleton, disabled, hover, focus, or pressed state was captured in the supplied evidence. The reason is that the bundle holds no pointer-state frame (`<selector>::state-hover|pressed|focus`) for any element on either storefront (`observedStates: 0`); the zero interaction coverage separately means that no dialog, menu, or tab was expanded. (Refined 2026-09-29: the July text gave the interaction count as the reason.) The one non-default variant recorded is static markup: the active global-filter option (`_fab-global-filter__button--active`) at 12px / 600; its fill and text colour are not claimed.

## Do's and Don'ts

### Do

- Use the verified storefront canvas, foreground, line, typography, and component values only in the source domains where they were observed.
- Keep captured product-image links square and unpadded.
- Keep Pretendard tied to the verified Musinsa webfont evidence when reproducing the two captured storefront surfaces.

### Don't

- Do not infer sale, error, success, selected, hover, focus, pressed, disabled, or authenticated-app styling from this snapshot.
- Do not present the MUSINSA STANDARD storefront as proof of universal Musinsa product, marketing, docs, or mobile-app behavior.
- Do not substitute a system font for a different claimed family; only the observed Pretendard family is available here.

## Voice & Tone

The official company story uses a direct K-fashion platform narrative and the 2025 BI announcement uses the campaign line “Bolder Than Ever: The New MUSINSA.” Those are corporate/newsroom expressions, not a complete product-microcopy guide. Current storefront CTA, error, empty-state, and support-copy rules were not captured, so no synthetic voice samples are promoted.

## Agent Prompt Guide

Use only the evidence-backed subset: “Create a square MUSINSA STANDARD product-image link with no container padding, 14px/400 Pretendard supporting text, `#000000` foreground, `#ffffff` canvas, and `#ebebeb` line color where a captured border is needed.” Do not add a sale badge, prominent CTA, interaction state, responsive grid, or proprietary display face unless separately verified.

## Governance

### Known Gaps

- **Contrast, `search-input`.** Text `#8a8a8a` on `#ffffff` measures 3.45:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-tab-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `global-filter-toggle`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-keyword-tag`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
