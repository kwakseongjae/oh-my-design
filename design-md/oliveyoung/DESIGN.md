---
id: oliveyoung
name: Olive Young
display_name_kr: Olive Young (올리브영)
country: KR
category: ecommerce
homepage: "https://www.oliveyoung.co.kr"
primary_color: "#82dc28"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=oliveyoung.co.kr&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: storefront-home, kind: storefront, url: "https://www.oliveyoung.co.kr/store/main/main.do?oy=0", inspected: "2026-07-13" }
    - { id: corporate-home, kind: corporate, url: "https://corp.oliveyoung.com/ko", inspected: "2026-07-13" }
  sources:
    - { id: storefront-live, kind: product-surface, url: "https://www.oliveyoung.co.kr/store/main/main.do?oy=0", captured: "2026-07-13" }
    - { id: corporate-live, kind: product-surface, url: "https://corp.oliveyoung.com/ko", captured: "2026-07-13" }
    - { id: brand-resources, kind: brand-asset, url: "https://corp.oliveyoung.com/en/company/brand", captured: "2026-07-13" }
    - { id: history-context, kind: official-doc, url: "https://corp.oliveyoung.com/en/company/history", captured: "2026-07-13" }
    - { id: mission-context, kind: official-doc, url: "https://corp.oliveyoung.com/en/company/main", captured: "2026-07-13" }
    - { id: vision-context, kind: official-doc, url: "https://corp.oliveyoung.com/en/company/vision", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.storefront-canvas": &storefront { surface_id: storefront-home, source_id: storefront-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.storefront-ink": *storefront
    "tokens.colors.storefront-body": *storefront
    "tokens.colors.storefront-muted": *storefront
    "tokens.colors.storefront-line": *storefront
    "tokens.colors.storefront-current": *storefront
    "tokens.colors.corporate-brand-green": &corporate { surface_id: corporate-home, source_id: corporate-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.storefront": *storefront
    "tokens.typography.family.corporate": *corporate
    "tokens.typography.storefront-body.size": *storefront
    "tokens.typography.storefront-body.weight": *storefront
    "tokens.typography.storefront-body.lineHeight": *storefront
    "tokens.typography.storefront-body.tracking": *storefront
    "tokens.typography.storefront-body.use": *storefront
    "tokens.typography.corporate-display.size": *corporate
    "tokens.typography.corporate-display.weight": *corporate
    "tokens.typography.corporate-display.lineHeight": *corporate
    "tokens.typography.corporate-display.tracking": *corporate
    "tokens.typography.corporate-display.use": *corporate
    "tokens.spacing.search-x": *storefront
    "tokens.spacing.search-end": *storefront
    "tokens.rounded.outline-control": *storefront
    "tokens.rounded.search-field": *storefront
    "tokens.rounded.pagination-current": *storefront
    "tokens.components.pagination-current.type": *storefront
    "tokens.components.pagination-current.bg": *storefront
    "tokens.components.pagination-current.fg": *storefront
    "tokens.components.pagination-current.radius": *storefront
    "tokens.components.pagination-current.font": *storefront
    "tokens.components.pagination-current.active": *storefront
    "tokens.components.pagination-current.use": *storefront
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    storefront-canvas: "#ffffff"
    storefront-ink: "#131518"
    storefront-body: "#666666"
    storefront-muted: "#888888"
    storefront-line: "#ebebeb"
    storefront-current: "#2f3030"
    corporate-brand-green: "#82dc28"
  typography:
    family: { storefront: "Montserrat", corporate: "CJONLYONENew" }
    storefront-body: { size: 14, weight: 400, lineHeight: 20, tracking: -0.56, use: "Storefront home body and navigation text" }
    corporate-display: { size: 25.2, weight: 700, lineHeight: 35.28, tracking: 0, use: "Corporate home display copy" }
  spacing: { search-x: 14, search-end: 10 }
  rounded: { outline-control: 4, search-field: 5, pagination-current: 12 }
  components:
    pagination-current: { type: tab, bg: "#2f3030", fg: "#ffffff", radius: 12, font: "14px/700/Montserrat", active: "Current carousel pagination item; selected markup observed", use: "24px current item in storefront home carousel pagination" }
---

# Olive Young — Design Reference

## 1. Visual Theme & Atmosphere

Olive Young is the CJ retail platform that grew from Korea’s first Beauty & Health store into an omnichannel beauty-and-wellness business. Its official history describes a move away from the traditional health-supplement drugstore model toward beauty, trend discovery, locally tailored assortments, stores, and digital services; its current mission is to help customers live healthier and more beautiful everyday lives. The supplied 2026 capture shows that this story is expressed very differently by two owned surfaces. The shopping storefront is an information-dense, white and charcoal retail interface dominated by `#666666` body copy, a loaded Montserrat web family, square product controls, and a compact 24px current-page marker. The corporate site is a separate brand-and-company presentation with loaded CJONLYONENew and the observed `#82dc28` brand green. These are not one interchangeable UI system: corporate identity context must not be used to fill gaps in the storefront, and the storefront capture does not establish an authenticated app, checkout, mobile, or documentation system.

- **Storefront evidence:** a white canvas, low-radius controls, black-to-gray text hierarchy, and carousel/product-grid mechanics on the public home page.
- **Corporate evidence:** the green aligns with the official brand-resources description of Olive Green, while corporate typography resolves to CJONLYONENew.
- **Current brand evolution:** Olive Young’s official 2025 newsroom announcement says its renewed wordmark was designed for clearer visibility across online and offline global expansion; that is identity context, not a storefront component token.

## 2. Color Palette & Roles

### Observed storefront roles

- **Storefront canvas** (`#ffffff`): repeated page, button, and product-control surface on `storefront-home`.
- **Storefront ink** (`#131518`): observed search-field text on `home::[data-omd-capture="8"]`; it is not a universal corporate text token.
- **Storefront body** (`#666666`): dominant body and navigation color on the public home capture.
- **Storefront muted** (`#888888`): inactive carousel pagination-button text.
- **Storefront line** (`#ebebeb`): 1px border on the repeated `btn_zzim jeem` wishlist control.
- **Storefront current** (`#2f3030`): current 24px carousel-pagination item.

### Observed corporate-brand role

- **Corporate brand green** (`#82dc28`): observed on the corporate home capture and also named Olive Green in Olive Young’s official Brand Resources. Its official counterpart is Coral Orange `#ff7878`, but Coral Orange was not a computed token in the supplied surfaces and is intentionally not added to `tokens.colors`.

The source bundle also contains isolated browser/vendor-like blues, reds, and other local values. Without a repeated role or a first-party product token specification, they are not promoted to a semantic palette.

## 3. Typography Rules

### Evidence classes

- **Live storefront use — Montserrat.** `Montserrat` is loaded with high confidence, has 528 visible uses across storefront body, list, menu, tab, button, and heading roles, and is corroborated by six Olive Young-hosted WOFF/WOFF2 sources. The observed home stack begins `Montserrat, -apple-system, NotoSansCJKkr, AppleSDGothicNeo, Roboto, …`; only the loaded Montserrat family is represented as the storefront family token.
- **Live corporate use — CJONLYONENew.** `CJONLYONENew` is loaded with high confidence on the corporate home (176 visible uses) and is backed by six `corp.oliveyoung.com` WOFF2 assets. The captured corporate stack lists it first, before Pretendard and Korean system fallbacks. It is a corporate-surface family token, not evidence of storefront use.
- **Loaded but not promoted.** `NotoSansCJKkr` has only three recorded visible uses on the storefront and stays a loaded fallback observation rather than a general primary family token. `Arial` is system-resolved in the one captured search input and is not an Olive Young font asset.
- **Declared-only assets.** CJONLYONENewJP, CJONLYONENewOrigin, Dovemayo-Medium, Nanum Myeongjo, Noto Sans KR, OY Greta Sans, Pretendard, and PretendardJP have declared `@font-face` sources but zero recorded visible use in this bundle. They remain declared-only; no specimen or token substitutes them.
- **Licence boundary.** First-party pages and the supplied bundle establish delivery of the corporate and storefront webfont files, but this update found no first-party standalone licence granting downstream reuse of CJONLYONENew or Montserrat assets. Asset delivery is not a redistribution licence.

### Measured styles

| Scope | Family | Size | Weight | Line height | Tracking | Evidence boundary |
|---|---|---:|---:|---:|---:|---|
| Storefront body/navigation | Montserrat | 14px | 400 | 20px | -0.56px | repeated `home` text/list/menu/tab samples |
| Storefront carousel pagination | Montserrat | 14px | 700 | 24px | normal | `home::[data-omd-capture="174"]` and `"175"` |
| Corporate display copy | CJONLYONENew | 25.2px | 700 | 35.28px | normal | repeated `surface-2` body samples |

## 4. Components

All components below retain their captured surface and selector provenance. The supplied bundle reports `interactionCount: 0`; it does not establish hover, focus, pressed, disabled, dialog, menu, toast, cart, or checkout variants. The selected/current carousel relationship is static markup observed in the capture, not an interaction transition contract.

### Storefront carousel pagination

**Current item as captured**
- Background: `#2F3030`
- Text: `#FFFFFF`
- Border: 0
- Radius: `12px`
- Font: `14px / 700 / Montserrat`
- Active: current 24px carousel item; evidence `home::[data-omd-capture="174"]`, with selected carousel markup at `home::#slick-slide10`
- Use: public storefront-home carousel pagination

**Other item as captured**
- Background: transparent
- Text: `#888888`
- Border: 0
- Radius: `0px`
- Font: `14px / 700 / Montserrat`
- Use: sibling 24px carousel-pagination button; evidence `home::[data-omd-capture="175"]`

### Storefront wishlist control

**Default visual shell**
- Background: `#FFFFFF`
- Border: `1px solid #EBEBEB`
- Radius: `0px`
- Size: `40px × 40px`
- Use: repeated product-grid `btn_zzim jeem` control on storefront-home; evidence `home::[data-omd-capture="85"]` (29 occurrences)

The control’s visible glyph is not text (`font-size: 0px` in the representative sample); its active/selected icon treatment was not captured and is intentionally omitted.

### Storefront search field

**Default visual shell**
- Text: `#131518`
- Radius: `5px`
- Padding: `0px 10px 0px 14px`
- Font: `14px / 400 / Arial` (system-resolved)
- Use: `header_search_input` on storefront-home; evidence `home::[data-omd-capture="8"]`

No focused, typed, error, disabled, or autocomplete state was supplied.

### Storefront outline control

**Default visual shell**
- Border: `1px solid #DDDDDD`
- Radius: `4px`
- Font: `13.3333px / 700 / Montserrat`
- Use: `home::[data-omd-capture="66"]`, class `btn`, 335px × 40px

The sample’s transparent background and white computed foreground cannot identify its composited visual context, so no foreground or reusable button-color token is asserted.

### Corporate skip link

**Default visual shell**
- Background: `#0000FF`
- Text: `#FFFFFF`
- Radius: `6px`
- Font: `13.5px / 400 / CJONLYONENew`
- Use: off-canvas `btn_skip` accessibility link on corporate-home; evidence `surface-2::[data-omd-capture="0"]`

This is corporate accessibility chrome, not storefront evidence or a general Olive Young primary-action token.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.oliveyoung.co.kr/store/main/main.do?oy=0` (public storefront), `https://corp.oliveyoung.com/ko` (public corporate surface), `https://corp.oliveyoung.com/en/company/brand` (official brand resources), `https://corp.oliveyoung.com/en/company/history` (official history), `https://corp.oliveyoung.com/en/company/main` (official mission), `https://corp.oliveyoung.com/en/company/vision` (official vision)
**Tier 2 sources:** `https://getdesign.md/oliveyoung` (attempted through built-in web open; internal error, no usable record), `https://styles.refero.design/?q=oliveyoung` (attempted through built-in web open; internal error, no usable record)
**Conflicts unresolved:** none

The previous legacy snapshot’s unrecaptured flag palette, inferred product states, product-detail migration account, cart/checkout claims, motion timings, and uncorroborated component variants were removed rather than carried forward.

## 5. Layout & Spacing

- The supplied storefront capture is 1440×900 and records a 294px × 38px global search field with `0px 10px 0px 14px` padding.
- Captured carousel pagination is 24px × 24px. The repeated wishlist control is 40px × 40px.
- The collector’s spacing frequencies include 2, 5, 10, 12, 18, 22, 23, 24, 30, 35, 40, 45, 51, 60, and 80px. This is a capture-frequency record, not a published spacing scale.
- No authenticated product layout, search-results layout, purchase funnel, responsive breakpoint, or mobile reflow is established by the two supplied desktop surfaces.

## 6. Depth & Elevation

The storefront carousel pagination, wishlist controls, search field, and outline control report `box-shadow: none`. The corporate `btn_top` is a distinct corporate-surface exception with `0px 10px 15px rgba(0, 0, 0, 0.1)`; it is not promoted to a shared elevation token.

## 7. Do's and Don'ts

### Do

- Keep storefront implementation claims bounded to the observed home surface and its measured black-to-gray hierarchy.
- Treat `#82dc28` as corporate brand evidence unless a storefront surface independently establishes that role.
- Preserve the source-domain boundary between Montserrat storefront use and CJONLYONENew corporate use.
- Keep current carousel pagination compact: the captured current item is `#2f3030` with white text and a 12px radius.
- Label declared-only families as unavailable rather than rendering another family under their names.

### Don't

- Do not turn the corporate skip link, top button, or Swiper chrome into storefront component tokens.
- Do not infer cart, checkout, form-error, hover, focus, or motion behavior from this static, zero-interaction bundle.
- Do not promote OY Greta Sans, Pretendard, Noto Sans KR, or other zero-use declarations to the UI family.
- Do not use official logo colors as a storefront color system without a matching storefront observation.

## 8. Accessibility & Evidence Limits

- The corporate surface includes an off-canvas skip link, but the capture does not document keyboard traversal, focus-visible styling, or screen-reader behavior.
- The storefront current carousel marker is 24px square and the captured wishlist shell is 40px square. This reference records dimensions only; it is not a touch-target or contrast conformance audit.
- `#666666` body text, `#888888` muted pagination text, and white text on `#2f3030` are observed combinations. Each target implementation still needs its own contrast and state testing.
- No design-system documentation, authenticated application, or mobile surface was supplied. Those domains remain unresolved rather than being filled from corporate marketing or legacy notes.

## 9. Agent Prompt Guide

Use this reference for a factual, dense Korean beauty-retail storefront moment: white ground, dark-gray reading hierarchy, square product-grid controls, Montserrat where the licensed/available target actually supplies it, and a compact dark current-page marker. For corporate storytelling, keep CJONLYONENew and Olive Green in the separate corporate lane. Do not present a system fallback, declared-only face, logo color, or unobserved cart interaction as an Olive Young storefront fact.

## 10. Voice & Tone

Olive Young’s official company language is optimistic, practical, and discovery-oriented: its mission centers a healthier and more beautiful everyday life, while the vision names Healthy Beauty and New Discoveries Everyday. The public storefront capture supports short functional labels and dense retail scanning, but it does not establish a complete product microcopy system.

| Do | Don't |
|---|---|
| Connect a beauty or wellness action to a concrete everyday outcome. | Make unverifiable efficacy, delivery, or price promises. |
| Describe discovery as a useful choice or service. | Replace a product fact with a vague lifestyle superlative. |
| Keep commerce labels short and legible in a dense catalog. | Treat the corporate slogan as a verbatim checkout or error-copy pattern. |

**Official wording samples**
- *“Healthy Beauty”* — official brand essence.
- *“New Discoveries Everyday”* — official core value.
- *“ALL LIVE BETTER”* — official brand slogan.

## 11. Brand Narrative

Olive Young’s official history places its beginning in 1999 as Korea’s first Beauty & Health store and describes a category shift from conventional supplement-led drugstores toward beauty, trend-led products, and locally tailored store designs and assortments. The company now presents itself as a lifestyle platform where customers encounter trends, not merely as a cosmetics shelf. Its official history records an independent official online store in 2017, same-day delivery in 2018, a 2019 BI renewal, and a 2025 logo renewal oriented toward global and omnichannel visibility. These are brand and business facts; they do not prove an unobserved application design system.

## 12. Principles

1. **Healthy beauty joins beauty and wellbeing.** The official brand essence is Healthy Beauty. *UI implication:* frame choices as practical care or discovery, not as unsupported transformation claims.
2. **Discovery belongs in everyday life.** The official core value names New Discoveries Everyday. *UI implication:* make catalog information scannable enough to compare products and services without forcing a narrative detour.
3. **Omnichannel is a business context, not a copied UI pattern.** Olive Young’s history records online, store, pickup, returns, and same-day service milestones. *UI implication:* preserve service context where it is observed; do not invent cart or fulfilment controls from the corporate story alone.
4. **Global clarity is a current identity objective.** The 2025 official logo-renewal announcement cites visibility and English readability across online and offline environments. *UI implication:* distinguish identity assets from product-interface tokens and keep type/asset licensing explicit.

## 13. Personas

The official sources describe customers generally rather than publishing research-backed personas. The following are non-fictional stakeholder groups derived from the documented service model, not demographic profiles or behavioral claims.

- **Beauty & Health customers:** people the official mission says Olive Young aims to inspire and empower toward healthier, more beautiful everyday lives.
- **Local-store and online shoppers:** customers served through the documented store, official-online-store, pickup, return, and same-day-delivery milestones.
- **Brand and business partners:** stakeholders named in the company’s mission and sustainability materials through partnership and mutual-growth commitments.

## 14. States & Motion

- **Observed current carousel item:** `#2f3030`, white text, 12px radius, 24px square.
- **Observed other carousel item:** transparent, `#888888` text, 0px radius, 24px square.
- **Observed selected carousel markup:** `home::#slick-slide10` carries `aria-selected="true"`; the capture does not record a transition or interaction event.
- **Unobserved:** loading, empty, error, success, form validation, disabled, hover, focus, pressed, cart feedback, menu, dialog, toast, and mobile states.
- **Motion:** the bundle contains Slick and Swiper class names, but no captured duration, easing, or interaction sequence. No motion token is asserted.

## 15. References & Boundaries

### Tier 1 live evidence

- `https://www.oliveyoung.co.kr/store/main/main.do?oy=0` — public storefront: 532 captured elements, Montserrat loaded/high with 528 uses, and the measured search, wishlist, outline-control, and carousel-pagination samples.
- `https://corp.oliveyoung.com/ko` — public corporate surface: 176 captured elements, CJONLYONENew loaded/high with 176 uses, corporate skip-link and top-button samples, and declared-only corporate font assets.

### First-party context, brand, and font boundaries

- `https://corp.oliveyoung.com/en/company/brand` — official brand name story, logo colors, 13° symbol meaning, and downloadable logo asset; it does not publish a storefront token specification.
- `https://corp.oliveyoung.com/en/company/history` — official company/history and omnichannel milestones; it does not supply component values.
- `https://corp.oliveyoung.com/en/company/main` and `/vision` — official mission, Healthy Beauty, New Discoveries Everyday, and ALL LIVE BETTER language; they do not establish transactional UI copy or states.
- Olive Young-hosted WOFF/WOFF2 delivery URLs in the supplied collector corroborate the loaded families. No first-party standalone downstream-reuse licence was located in this update, so a target project must not assume permission to copy those font assets.

### Tier 2 cross-check boundary

Both required catalog checks were attempted through built-in web open on 2026-07-13. `getdesign.md/oliveyoung` and Refero’s Olive Young query each returned an internal error, so neither contributed a token, component, font, or conflict resolution.
