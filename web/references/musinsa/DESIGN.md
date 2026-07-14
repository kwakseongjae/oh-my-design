---
id: musinsa
name: Musinsa
country: KR
category: ecommerce
homepage: "https://www.musinsa.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://image.msscdn.net/static/assets/bi/favicon/favicon.svg"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: storefront, url: "https://www.musinsa.com/main/musinsa/recommend?gf=A", inspected: "2026-07-12" }
    - { id: standard, kind: brand-storefront, url: "https://www.musinsa.com/brand/musinsastandard?gf=A", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.musinsa.com/main/musinsa/recommend?gf=A", captured: "2026-07-12" }
    - { id: standard-live, kind: product-surface, url: "https://www.musinsa.com/brand/musinsastandard?gf=A", captured: "2026-07-12" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-12" }
    "tokens.colors.canvas": *home
    "tokens.colors.foreground": *home
    "tokens.colors.muted": *home
    "tokens.colors.line": *home
    "tokens.typography.family.sans": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.tracking": *home
    "tokens.typography.body.use": *home
    "tokens.typography.nav.size": *home
    "tokens.typography.nav.weight": *home
    "tokens.typography.nav.lineHeight": *home
    "tokens.typography.nav.tracking": *home
    "tokens.typography.nav.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": &standard { surface_id: standard, source_id: standard-live, method: computed-style, captured: "2026-07-12" }
    "tokens.rounded.square": *home
    "tokens.rounded.icon": *home
    "tokens.rounded.control": *home
    "tokens.shadow.flat": *home
    "tokens.components.gnb-store-link.type": *home
    "tokens.components.gnb-store-link.fg": *home
    "tokens.components.gnb-store-link.radius": *home
    "tokens.components.gnb-store-link.padding": *home
    "tokens.components.gnb-store-link.height": *home
    "tokens.components.gnb-store-link.font": *home
    "tokens.components.gnb-store-link.states": *home
    "tokens.components.gnb-store-link.use": *home
    "tokens.components.search-input.type": *home
    "tokens.components.search-input.bg": *home
    "tokens.components.search-input.fg": *home
    "tokens.components.search-input.radius": *home
    "tokens.components.search-input.padding": *home
    "tokens.components.search-input.height": *home
    "tokens.components.search-input.font": *home
    "tokens.components.search-input.states": *home
    "tokens.components.search-input.use": *home
    "tokens.components.product-image-link.type": *standard
    "tokens.components.product-image-link.radius": *standard
    "tokens.components.product-image-link.padding": *standard
    "tokens.components.product-image-link.height": *standard
    "tokens.components.product-image-link.font": *standard
    "tokens.components.product-image-link.use": *standard
    "tokens.components.product-utility-button.type": *standard
    "tokens.components.product-utility-button.fg": *standard
    "tokens.components.product-utility-button.radius": *standard
    "tokens.components.product-utility-button.padding": *standard
    "tokens.components.product-utility-button.height": *standard
    "tokens.components.product-utility-button.font": *standard
    "tokens.components.product-utility-button.states": *standard
    "tokens.components.product-utility-button.use": *standard
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Two current first-party storefronts. Pretendard is both computed on visible text and backed by loaded Musinsa CDN FontFace records (657 uses). The capture reported zero interaction expansions; only default component observations are promoted."
  colors:
    primary: "#000000"
    canvas: "#ffffff"
    foreground: "#000000"
    muted: "#666666"
    line: "#ebebeb"
  typography:
    family: { sans: "Pretendard" }
    body: { size: 14, weight: 400, lineHeight: 1.5, tracking: 0, use: "Repeated storefront body and product text" }
    nav: { size: 16, weight: 500, lineHeight: 1.375, tracking: 0, use: "56px global-navigation store link" }
  spacing: { xs: 4, sm: 6, md: 8, lg: 24 }
  rounded: { square: 0, icon: 2, control: 4 }
  shadow:
    flat: "none"
  components_harvested: true
  components:
    gnb-store-link: { type: button, fg: "rgba(255,255,255,0.8)", radius: "0px", padding: "0px 8px", height: "56px", font: "16px / 500 / Pretendard", states: "default captured only; interaction coverage 0", use: "Global-navigation store link on both captured storefronts" }
    search-input: { type: input, bg: "#ffffff", fg: "#8a8a8a", radius: "4px", padding: "8px 28px 8px 8px", height: "36px", font: "14px / 400 / Pretendard", states: "default captured only; interaction coverage 0", use: "Home storefront search input" }
    product-image-link: { type: card, radius: "0px", padding: "0px", height: "312px", font: "14px / 400 / Pretendard", use: "MUSINSA STANDARD product-image link in the listing grid" }
    product-utility-button: { type: button, fg: "#000000", radius: "0px", padding: "4px", height: "28px", font: "14px / 400 / Pretendard", states: "default captured only; interaction coverage 0", use: "Product-card utility control on the MUSINSA STANDARD storefront" }
---

# Design System Inspiration of Musinsa (무신사)

## 1. Visual Theme & Atmosphere

Musinsa is a Korean fashion platform that began with sneaker photographs and street snaps, then grew into a marketplace and content ecosystem for Korean fashion brands. Its current public storefront capture is visually restrained at the interface layer: `#ffffff` canvas, `#000000` text, `#ebebeb` lines, square product imagery, and a loaded Pretendard text system. That restraint serves a catalog whose product photography, brand imagery, and editorial modules carry the visual variety. The official history connects this emphasis on images to the 2001 sneaker community and the later development of MUSINSA.com, Magazine, and Store. In 2025 Musinsa also renewed the MUSINSA STORE BI, making the retail-service identity bolder and separating it from the company CI as its global and offline footprint expanded. [Official history](https://about.musinsa.com/newsroom/about-musinsa) and [BI announcement](https://about.musinsa.com/newsroom/2025-1022) provide the narrative context; they do not by themselves supply interface tokens.

The two supplied Tier 1 surfaces are the main Musinsa recommendation storefront and the MUSINSA STANDARD brand storefront. They share a black/white/gray web chrome and dense 14px Pretendard product text. This pass does not treat the brand storefront as a proxy for every commerce, editorial, authenticated, mobile-app, help, or marketing surface.

**Key characteristics:**

- `#ffffff` canvas with `#000000` foreground and `#ebebeb` repeated line color
- Pretendard loaded from Musinsa’s own `image.msscdn.net` font files and visibly used across 657 captured elements
- Repeated 14px / 400 text, with a 16px / 500 global-navigation store link
- Square product imagery and listing controls; 4px search-input corners and 2px small-icon geometry are local defaults, not a universal radius scale
- No captured hover, focus, pressed, disabled, dialog, toast, or form-error state is promoted

## 2. Color Palette & Roles

### Current storefront tokens

- **Primary / Foreground** (`#000000`): repeated visible text and product utility-control color on both Tier 1 storefronts.
- **Canvas** (`#ffffff`): current search-input and page-surface color.
- **Muted text** (`#666666`): footer and supporting copy on the captured main storefront.
- **Line** (`#ebebeb`): repeatedly computed border color across both captured surfaces.

### Boundary

No sale, error, success, selected-filter, promotional, or dark-surface color is canonical in this pass. The older red and yellow claims were not present in the supplied Tier 1 color evidence and are omitted rather than reconstructed from a past snapshot or a different surface.

## 3. Typography Rules

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

## 4. Component Stylings

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

No primary checkout button, filter-selected chip, sale badge, modal, toast, input focus/error, or hover/pressed state is included because the raw collector did not observe it. The prior generic component inventory is not retained as a current component contract.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.musinsa.com/main/musinsa/recommend?gf=A (main product storefront); https://www.musinsa.com/brand/musinsastandard?gf=A (MUSINSA STANDARD brand storefront).
**Tier 2 sources:** https://getdesign.md/musinsa (attempted direct lookup and indexed search; no usable record returned); https://styles.refero.design/?q=musinsa (attempted direct lookup and indexed search; no usable result returned).
**Conflicts unresolved:** none

## 5. Layout Principles

The captured storefronts repeatedly use 4px, 6px, 8px, and 24px spacing values. Product-image links on the MUSINSA STANDARD listing surface are square, with no observed container padding; section articles on that surface include 24px bottom padding. The two captures do not establish a responsive grid, desktop-to-mobile breakpoints, or a universal content gutter, so those are intentionally omitted.

## 6. Depth & Elevation

The captured navigation, product-link, and utility-control representatives report `box-shadow: none`. This supports a flat treatment for these observed elements only. No modal, sheet, dropdown, sticky, or promotional elevation token was captured.

## 7. Do's and Don'ts

### Do

- Use the verified storefront canvas, foreground, line, typography, and component values only in the source domains where they were observed.
- Keep captured product-image links square and unpadded.
- Keep Pretendard tied to the verified Musinsa webfont evidence when reproducing the two captured storefront surfaces.

### Don't

- Do not infer sale, error, success, selected, hover, focus, pressed, disabled, or authenticated-app styling from this snapshot.
- Do not present the MUSINSA STANDARD storefront as proof of universal Musinsa product, marketing, docs, or mobile-app behavior.
- Do not substitute a system font for a different claimed family; only the observed Pretendard family is available here.

## 8. Responsive Behavior

No breakpoint transition, mobile navigation, or interaction expansion was captured in the supplied desktop evidence. The 56px global-navigation link, 36px home search input, 312px product-image link, and 28px product utility control are desktop-capture measurements, not cross-viewport specifications.

## 9. Agent Prompt Guide

Use only the evidence-backed subset: “Create a square MUSINSA STANDARD product-image link with no container padding, 14px/400 Pretendard supporting text, `#000000` foreground, `#ffffff` canvas, and `#ebebeb` line color where a captured border is needed.” Do not add a sale badge, prominent CTA, interaction state, responsive grid, or proprietary display face unless separately verified.

## 10. Voice & Tone

The official company story uses a direct K-fashion platform narrative and the 2025 BI announcement uses the campaign line “Bolder Than Ever: The New MUSINSA.” Those are corporate/newsroom expressions, not a complete product-microcopy guide. Current storefront CTA, error, empty-state, and support-copy rules were not captured, so no synthetic voice samples are promoted.

## 11. Brand Narrative

Musinsa began in 2001 as a sneaker-focused community whose name is an abbreviation of “a place with tremendous sneaker photography.” The company says the community evolved into MUSINSA.com in 2003, expanded through fashion content and street snaps, and opened MUSINSA Store in 2009 to connect fashion brands with customers. Its 2025 founder story frames the company’s present role as a bridge for Korean fashion brands to reach international audiences; the company’s 2025 store-BI announcement separately explains that the renewed retail identity is intended to distinguish the store service from the corporate identity as online, offline, and global operations expand. [Official origin and evolution](https://about.musinsa.com/newsroom/musinsa-ceo) · [Official 2025 BI announcement](https://about.musinsa.com/newsroom/2025-1022)

## 12. Principles

1. **Fashion content and partner brands are central to the platform story.** Musinsa’s official history describes street snaps, lookbooks, editorials, and brand discovery as part of the service. *UI implication:* do not replace verified product and editorial imagery with invented brand-color decoration. [Official history](https://about.musinsa.com/newsroom/about-musinsa)
2. **Store identity and company identity are intentionally distinct.** The 2025 announcement says the renewed MUSINSA STORE BI separates the retail service from the corporate CI. *UI implication:* do not generalize a store-surface token to corporate, campaign, or offline-signage contexts without evidence. [Official BI announcement](https://about.musinsa.com/newsroom/2025-1022)
3. **Evidence domains remain separate.** The two live storefront captures verify a small set of web tokens; official company history explains brand context. *UI implication:* leave any unobserved interaction, mobile, authenticated, marketing, or documentation pattern absent rather than filling it with a plausible ecommerce convention.

## 13. Personas

No individual personas are promoted. The official material discusses customers, fashion enthusiasts, partner brands, and Korean designers at a group level, but it does not provide evidence for detailed fictional user biographies. Use stakeholder groups only: fashion shoppers seeking K-fashion discovery, and brands seeking a retail and content platform. [Official history](https://about.musinsa.com/newsroom/about-musinsa)

## 14. States

No empty, loading, error, success, skeleton, disabled, focus, or pressed state was captured in the supplied evidence. The collector’s interaction coverage is zero, so these states are intentionally omitted.

## 15. Motion & Easing

No motion duration, easing curve, or reduced-motion behavior was observed in the supplied raw evidence. No motion token is promoted.
