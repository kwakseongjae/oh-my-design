# Musinsa Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Musinsa (무신사) is a Korean fashion platform that began with sneaker photographs and street snaps, then grew into a marketplace and content ecosystem for Korean fashion brands. This contract covers two current first-party storefronts only: the main Musinsa recommendation storefront and the MUSINSA STANDARD brand storefront. It does not treat the brand storefront as a proxy for every commerce, editorial, authenticated, mobile-app, help, or marketing surface.

The captured interface layer is restrained: `#ffffff` canvas, `#000000` text, `#ebebeb` lines, square product imagery, and a loaded Pretendard text system. Product photography, brand imagery, and editorial modules carry the visual variety. The official history connects that image emphasis to the 2001 sneaker community and the later development of MUSINSA.com, Magazine, and Store. In 2025 Musinsa renewed the MUSINSA STORE BI, making the retail-service identity bolder and separating it from the company CI as its global and offline footprint expanded. Official history and the BI announcement provide that narrative context; they do not by themselves supply interface tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Discover K-fashion products on the main Musinsa recommendation storefront.
- Search the main storefront catalog.
- Scan square product imagery and supporting product text on the MUSINSA STANDARD brand storefront.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Official material discusses customers, fashion enthusiasts, partner brands, and Korean designers at a group level, without detailed fictional biographies. Use stakeholder groups only: fashion shoppers seeking K-fashion discovery, and brands seeking a retail and content platform.

### Distinctive traits

- `#ffffff` canvas with `#000000` foreground and `#ebebeb` repeated line color
- Pretendard loaded from Musinsa’s own `image.msscdn.net` font files and visibly used across 657 captured elements
- Repeated 14px / 400 text, with a 16px / 500 global-navigation store link
- Square product imagery and listing controls; 4px search-input corners and 2px small-icon geometry are local defaults, not a universal radius scale
- No captured hover, focus, pressed, disabled, dialog, toast, or form-error state is promoted

### Principles

- Fashion content and partner brands are central to the platform story. Official history describes street snaps, lookbooks, editorials, and brand discovery as part of the service. Do not replace verified product and editorial imagery with invented brand-color decoration.
- Store identity and company identity are intentionally distinct. The 2025 announcement says the renewed MUSINSA STORE BI separates the retail service from the corporate CI. Do not generalize a store-surface token to corporate, campaign, or offline-signage contexts without evidence.
- Evidence domains remain separate. The two live storefront captures verify a small set of web tokens; official company history explains brand context. Leave any unobserved interaction, mobile, authenticated, marketing, or documentation pattern absent rather than filling it with a plausible ecommerce convention.
- Use the verified storefront canvas, foreground, line, typography, and component values only in the source domains where they were observed.
- Keep captured product-image links square and unpadded.
- Keep Pretendard tied to the verified Musinsa webfont evidence when reproducing the two captured storefront surfaces.

### Avoid

- Do not infer sale, error, success, selected, hover, focus, pressed, disabled, or authenticated-app styling from this snapshot.
- Do not present the MUSINSA STANDARD storefront as proof of universal Musinsa product, marketing, docs, or mobile-app behavior.
- Do not substitute a system font for a different claimed family; only the observed Pretendard family is available here.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Primary / Foreground** (`#000000`): repeated visible text and product utility-control color on both captured storefronts.
- **Canvas** (`#ffffff`): current search-input and page-surface color.
- **Muted text** (`#666666`): footer and supporting copy on the captured main storefront.
- **Line** (`#ebebeb`): repeatedly computed border color across both captured surfaces.

No sale, error, success, selected-filter, promotional, or dark-surface color is canonical in this pass. Older red and yellow claims were not present in the supplied color evidence and are omitted rather than reconstructed from a past snapshot or a different surface.

### Spacing

Repeated captured values: 4px, 6px, 8px, and 24px.

### Shape

- Square: 0px
- Small icon: 2px
- Control (search input): 4px

4px search-input corners and 2px small-icon geometry are local defaults, not a universal radius scale.

### Elevation

Captured navigation, product-link, and utility-control representatives report `box-shadow: none`. This supports a flat treatment for these observed elements only. No modal, sheet, dropdown, sticky, or promotional elevation token was captured.

### Motion

No motion duration, easing curve, or reduced-motion behavior was observed in the supplied raw evidence. No motion token is promoted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The official company newsroom describes Musinsa’s product and retail evolution, but does not publish a universal current typography token. |
| Live computed surface-use | Both captured storefronts compute visible text as Pretendard; the collector recorded 657 visible uses. |
| FontFaceSet and source corroboration | Pretendard is loaded, with Musinsa-hosted Regular, Medium, SemiBold, and Bold source files under `image.msscdn.net`. |
| Official distributed asset | No Musinsa-exclusive distributed type family was verified. |
| Declared-only | FontAwesome and swiper-icons were declared but had zero observed visible text uses. |
| License | Pretendard’s upstream project publishes it under SIL Open Font License 1.1; this describes the font asset, not a Musinsa brand asset. |
| Outside these captures | Native-app, global-store, help-center, campaign, and authenticated-account typography remain outside these two captures. |

### Family

- **Current visible UI family:** `Pretendard, "Apple SD Gothic Neo", sans-serif`
- **Loaded source boundary:** Pretendard face sources from `https://image.msscdn.net/platform/fonts/`; the family is loadable in these captured storefronts.
- Do not replace unavailable or unobserved brand type with Pretendard. It is canonical here only because computed visible use and loaded FontFace/source evidence agree.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Provenance |
|---|---|---:|---:|---:|---:|---|
| Storefront body / product text | Pretendard | 14px | 400 | 21px (1.5) | normal (0) | Repeated on home and MUSINSA STANDARD capture elements |
| Global-navigation store link | Pretendard | 16px | 500 | 22px (1.375) | normal (0) | 56px high store link |
| Storefront search input | Pretendard | 14px | 400 | 20px | normal | 36px high home search input |

### Assets

- Storefront favicon: `https://image.msscdn.net/static/assets/bi/favicon/favicon.svg`
- Product photography and brand imagery are first-party catalog content; do not replace them with invented brand-color decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

No empty, loading, error, success, skeleton, disabled, focus, or pressed state was captured in the supplied evidence. The collector’s interaction coverage is zero, so those visual treatments are intentionally omitted. No primary checkout button, filter-selected chip, sale badge, modal, toast, input focus/error, or hover/pressed state is included because the raw collector did not observe it. The prior generic component inventory is not retained as a current component contract.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. This is not a complete state-coverage claim.

### Global-navigation Store Link

- Role: global-navigation store link on both captured storefronts
- Kind: interactive
- Anatomy: label
- Text: `rgba(255,255,255,0.8)`
- Radius: 0px
- Padding: 0px 8px
- Height: 56px
- Font: 16px / 500 / Pretendard
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on both storefronts |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | applicable | Interactive control; visual treatment omitted |
| error | applicable | Interactive control; visual treatment omitted |
| success | applicable | Interactive control; visual treatment omitted |

### Home Search Input

- Role: search input on the main recommendation storefront
- Kind: interactive
- Anatomy: value field
- Background: `#ffffff`
- Text: `#8a8a8a`
- Radius: 4px
- Padding: 8px 28px 8px 8px
- Height: 36px
- Font: 14px / 400 / Pretendard
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the home storefront |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | Input control; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | Form field; visual treatment omitted |

### MUSINSA STANDARD Product-image Link

- Role: product-image link in the visible listing grid
- Kind: interactive
- Anatomy: image
- Radius: 0px
- Padding: 0px
- Height: 312px
- Font: 14px / 400 / Pretendard

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the MUSINSA STANDARD listing |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | applicable | Interactive control; visual treatment omitted |
| error | applicable | Interactive control; visual treatment omitted |
| success | applicable | Interactive control; visual treatment omitted |

### MUSINSA STANDARD Product Utility Button

- Role: product-card utility control on the brand storefront
- Kind: interactive
- Anatomy: control
- Text: `#000000`
- Radius: 0px
- Padding: 4px
- Height: 28px
- Font: 14px / 400 / Pretendard
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the brand storefront |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Button control; visual treatment omitted |
| error | applicable | Button control; visual treatment omitted |
| success | applicable | Button control; visual treatment omitted |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The captured storefronts repeatedly use 4px, 6px, 8px, and 24px spacing values. Product-image links on the MUSINSA STANDARD listing surface are square, with no observed container padding; section articles on that surface include 24px bottom padding. The two captures do not establish a responsive grid, desktop-to-mobile breakpoints, or a universal content gutter, so those are omitted.

No breakpoint transition, mobile navigation, or interaction expansion was captured in the supplied desktop evidence. The 56px global-navigation link, 36px home search input, 312px product-image link, and 28px product utility control are desktop-capture measurements, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official company story uses a direct K-fashion platform narrative and the 2025 BI announcement uses the campaign line “Bolder Than Ever: The New MUSINSA.” Those are corporate/newsroom expressions, not a complete product-microcopy guide. Current storefront CTA, error, empty-state, and support-copy rules were not captured, so no synthetic voice samples are promoted.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent:

- sale, error, success, selected-filter, promotional, and dark-surface colors
- hover, pressed, disabled, loading, error, success, empty, skeleton, dialog, toast, and form-error visual treatments
- responsive grid, breakpoints, mobile navigation, and a universal content gutter
- storefront CTA, error, empty-state, and support copy
- native-app, global-store, help-center, campaign, and authenticated-account typography
- primary checkout button, filter-selected chip, sale badge, modal, and toast components
