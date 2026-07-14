---
id: coupang
name: Coupang
country: KR
category: ecommerce
homepage: "https://www.coupang.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.coupang.com/favicon.ico"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Coupang Media Assets Brand Guidelines
  url: "https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/"
  type: brand
  description: Official rules for downloaded Coupang media assets, logo treatment, and attribution.
  og_image: "https://news.coupang.com/wp-content/uploads/2023/01/Coupang_2_1609.jpg"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: commerce, url: "https://www.coupang.com/", inspected: "2026-07-12" }
    - { id: product-a, kind: commerce-product, url: "https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=5351802654", inspected: "2026-07-12" }
    - { id: product-b, kind: commerce-product, url: "https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=80324048129", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.coupang.com/", captured: "2026-07-12" }
    - { id: product-a-live, kind: product-surface, url: "https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=5351802654", captured: "2026-07-12" }
    - { id: product-b-live, kind: product-surface, url: "https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=80324048129", captured: "2026-07-12" }
    - { id: coupang-sans, kind: official-doc, url: "https://news.coupang.com/archives/19962/", captured: "2026-07-13" }
    - { id: brand-guidelines, kind: brand-asset, url: "https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.foreground": *home
    "tokens.colors.foreground-muted": *home
    "tokens.colors.foreground-secondary": *home
    "tokens.colors.foreground-account": *home
    "tokens.colors.hairline": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.search.size": *home
    "tokens.typography.search.weight": *home
    "tokens.typography.search.lineHeight": *home
    "tokens.typography.search.use": *home
    "tokens.typography.utility.size": *home
    "tokens.typography.utility.weight": *home
    "tokens.typography.utility.lineHeight": *home
    "tokens.typography.utility.use": *home
    "tokens.typography.utility-small.size": *home
    "tokens.typography.utility-small.weight": *home
    "tokens.typography.utility-small.lineHeight": *home
    "tokens.typography.utility-small.use": *home
    "tokens.spacing.xxs": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.spacing.xxl": *home
    "tokens.spacing.account-gap": *home
    "tokens.rounded.none": *home
    "tokens.shadow.none": *home
    "tokens.components.header-menu-item.type": *home
    "tokens.components.header-menu-item.fg": *home
    "tokens.components.header-menu-item.radius": *home
    "tokens.components.header-menu-item.padding": *home
    "tokens.components.header-menu-item.use": *home
    "tokens.components.header-account-utility.type": *home
    "tokens.components.header-account-utility.fg": *home
    "tokens.components.header-account-utility.radius": *home
    "tokens.components.header-account-utility.font": *home
    "tokens.components.header-account-utility.use": *home
tokens:
  source: live-extract
  extracted: "2026-07-12"
  colors:
    canvas: "#ffffff"
    foreground: "#000000"
    foreground-muted: "#555555"
    foreground-secondary: "#333333"
    foreground-account: "#212b36"
    hairline: "#e5e7eb"
  typography:
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Observed default body text on the live commerce home surface; system-family only." }
    search: { size: 14, weight: 400, lineHeight: 1.5, use: "Observed search-field text on the live commerce home surface." }
    utility: { size: 12, weight: 400, lineHeight: 1.25, use: "Observed compact account and utility text on the live commerce home surface." }
    utility-small: { size: 11, weight: 400, lineHeight: 1.5, use: "Observed top utility navigation text on the live commerce home surface." }
  spacing: { xxs: 1, xs: 5, sm: 10, md: 12, lg: 14, xl: 16, xxl: 20, account-gap: 24 }
  rounded: { none: 0 }
  shadow: { none: "none" }
  components_harvested: true
  components:
    header-menu-item: { type: listItem, fg: "#000000", radius: 0, padding: "0px 5px", use: "Observed default header menu list item only." }
    header-account-utility: { type: listItem, fg: "#212b36", radius: 0, font: "12/400 system", use: "Observed default account-area list item only." }
---

# Design System Inspiration of Coupang (쿠팡)

## 1. Visual Theme & Atmosphere

Coupang is a commerce and services company whose customer-facing Korean storefront is built around a broad catalog and a compact global header. Its verified public product surface is materially different from the company’s marketing and careers material: the captured storefront presents a white field, black text, pale gray dividers, a prominent search field, and small utility navigation rather than a published consumer design system. The company describes its broader aim as making shopping, eating, and living easier, and as building the future of commerce; its careers material frames the desired outcome as customers wondering how they lived without Coupang. Those ideas explain the dense, utilitarian register without licensing an inferred brand palette or a generic e-commerce component library. [Coupang Careers](https://www.coupang.jobs/en/why-coupang/) and the [Coupang Newsroom](https://news.coupang.com/21597-2/) are corporate/editorial sources; they are not token sources for the commerce UI.

The reference therefore preserves the verified distinction between domains. The live commerce capture covers the homepage and two product URLs, although the product URLs exposed only minimal document chrome in this collector run. Corporate media guidance governs downloadable marks and logo treatment, not the live product UI. No public source collected in this pass authorizes treating a marketing color, logo asset, or a careers-font deployment as a commerce-app token.

**Key Characteristics:**

- White commerce header and canvas with black default text
- Pale gray #e5e7eb divider/border chrome
- Search-led header with compact utility and menu controls
- Square default geometry: sampled controls and inputs have 0px radius
- System-font rendering on the captured commerce surface, separate from Coupang Sans on official corporate/careers surfaces

## 2. Color Palette & Roles

### Observed live commerce surface

- **Canvas** (#ffffff): Observed background on the header menu control and search input.
- **Foreground** (#000000): Dominant observed text color across all three captured routes.
- **Muted foreground** (#555555): Repeated home-surface text color; no semantic role was observed.
- **Secondary foreground** (#333333): Repeated home-surface text color; no semantic role was observed.
- **Account foreground** (#212b36): Observed on the home account-area list item.
- **Hairline** (#e5e7eb): Repeated border color in the collector output.

### Boundary

No live computed Coupang-red fill, WOW color, semantic status color, or hover/pressed value was present in the supplied capture. Those values are omitted rather than inferred from logos, screenshots, or third-party color lists.

## 3. Typography Rules

### Evidence classes

- **Live computed surface-use:** the captured commerce pages resolve to Apple SD Gothic Neo followed by Korean/Japanese/Chinese and common sans fallbacks. The collector classifies it as a high-confidence operating-system stack (155 uses), with no loaded FontFaceSet match or @font-face source URL. It is documented as system use, not a Coupang-owned UI font token.
- **Official product/corporate-use:** Coupang’s Newsroom says its BX team created **Coupang Sans**, applied it to the corporate homepage and careers site, and split it into Display and Text families. This is official corporate/careers use; it does not establish use on the captured commerce storefront. [Coupang Sans announcement](https://news.coupang.com/archives/19962/)
- **Official distributed asset / license:** no downloadable font file or font-license terms were found in the official material reviewed for this pass. Coupang’s media-assets license covers marks and logos, not a font license. [Media Assets Brand Guidelines](https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/)
- **Unresolved:** Times appeared eight times in the captured product URL documents but has no FontFaceSet/source corroboration and is not promoted.

### Observed hierarchy

| Role | Size | Weight | Line height | Surface boundary |
|------|------|--------|-------------|------------------|
| Default body | 16px | 400 | 24px | Observed on the commerce home surface |
| Search field | 14px | 400 | 21px | Observed on the commerce home surface |
| Utility text | 12px | 400 | 15–32px | Observed on the commerce home surface |
| Utility small | 11px | 400 | 16.5px | Observed on the commerce home surface |

Do not substitute Pretendard, Inter, or another webfont and label it as Coupang. Coupang Sans is useful brand context only until a product surface and loaded source corroborate it for that surface.

## 4. Component Stylings

### Header controls

**Menu control — observed default**
- Background: #ffffff
- Text: #000000
- Radius: 0px
- Padding: 0px 16px
- Font: 16px / 400 / system stack
- Use: Home header control at home::[data-omd-capture="15"]; 32px rendered height, observed default state only.

**Search submit control — observed default**
- Text: #000000
- Radius: 0px
- Font: 16px / 400 / system stack
- Use: Home header submit button at home::[data-omd-capture="12"]; 20px rendered height, observed default state only.

### Search field

**Header search input — observed default**
- Background: #ffffff
- Text: #000000
- Radius: 0px
- Padding: 0px
- Font: 14px / 400 / system stack
- Use: Text input at home::[data-omd-capture="10"]; 351px rendered width and 17px rendered height in the supplied desktop capture.

### Header navigation

**Menu item — observed default**
- Text: #000000
- Radius: 0px
- Padding: 0px 5px
- Use: home::li.gnb-menu-item; observed 32px rendered height. This item was classified as a list item, not a tab.

**Account utility item — observed default**
- Text: #212b36
- Radius: 0px
- Font: 12px / 400 / system stack
- Use: home::li.my-coupang; observed 59px rendered height and 0px 24px margin.

No product card, checkout CTA, badge, selected, error, focus, hover, pressed, dialog, or mobile-tab variant is specified: none had selector/state provenance in the supplied capture.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.coupang.com/; https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=5351802654&from=home_C2&traid=home_C2&trcid=4750545; https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=80324048129&from=home_C2&traid=home_C2&trcid=4750546; https://news.coupang.com/archives/19962/; https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/; https://www.coupang.jobs/en/why-coupang/
**Tier 2 sources:** https://getdesign.md/coupang (no indexed record found); https://styles.refero.design/?q=coupang (no Coupang result found in the public search result set)
**Conflicts unresolved:** none

The live commerce capture does not corroborate legacy #E94B22, Pretendard, or any interaction/state variant; these values are intentionally absent. Coupang Sans is confirmed only for corporate/careers use, not the captured commerce product surface. Interactive machine components are omitted because the capture contains no observed interaction state; their measured defaults remain documented above as prose evidence.

## 5. Layout Principles

The supplied desktop home capture is 1440px wide. Its verified layout evidence is limited to a 351px search input, compact 32px menu controls, and home-header utility spacing. Product-grid columns, responsive breakpoints, sticky behavior, and card spacing are not asserted because they were not reliably captured across the supplied routes.

## 6. Depth & Elevation

The representative captured controls have box-shadow: none. No elevated component or overlay state is retained.

## 7. Do's and Don'ts

### Do

- Keep the observed commerce header canvas white with black text and pale gray hairlines when recreating this captured state.
- Treat Apple SD Gothic Neo as an operating-system stack on this surface, not a Coupang webfont.
- Keep components constrained to their recorded selector, route, and default state provenance.
- Apply the official media-assets rules when using downloaded Coupang logos or marks.

### Don't

- Do not infer a consumer CTA color from Coupang’s logo, media assets, or third-party color directories.
- Do not use Coupang Sans as a commerce UI font without product-surface and font-source corroboration.
- Do not add hover, focus, pressed, selected, error, or responsive variants from this evidence set.
- Do not reuse corporate/careers or newsroom visual chrome as storefront evidence.

## 8. Responsive Behavior

No mobile viewport was captured. The source evidence does not support breakpoint, grid, sticky, or touch-target rules.

## 9. Agent Prompt Guide

### Verified prompt boundary

“Create only the observed Coupang desktop-header elements: a white, square-cornered search input with black 14px system-stack text; white/black square menu controls; and pale gray hairlines. Do not add a red CTA, product card, delivery badge, font substitution, or interaction state unless separately evidenced.”

## 10. Voice & Tone

Coupang’s official careers language is customer-centred, direct, and action-oriented: it describes an aim to “wow” customers, make everyday commerce easier, and build the future of commerce. That is a corporate voice source, not evidence of storefront microcopy. [Why Coupang](https://www.coupang.jobs/en/why-coupang/)

| Do | Don't |
|----|-------|
| Describe customer outcomes plainly and specifically. | Attribute unobserved commerce labels or error messages to Coupang. |
| Use the official “wow the customer” framing only with its source context. | Turn careers language into a product UI token or interaction claim. |
| Preserve the distinction between corporate and commerce copy. | Invent delivery, checkout, or membership copy. |

**Voice samples.**

- “We exist to wow our customers.” — official careers copy. <!-- verified: coupang.jobs/en/why-coupang 2026-07-13 -->
- “How did I ever live without Coupang?” — official customer-outcome framing. <!-- verified: coupang.jobs/en/why-coupang 2026-07-13 -->
- “Our mission to build the future of commerce is real.” — official careers copy. <!-- verified: coupang.jobs/en/why-coupang 2026-07-13 -->

## 11. Brand Narrative

Coupang describes itself as a technology company shaping global commerce and says it was born from an effort to make shopping, eating, and living easier. Its official careers page connects that objective with a customer-outcome test: whether people feel they could not live without the service. The company’s Newsroom separates corporate information, services, technology, and media assets into distinct editorial areas, a useful boundary when reading brand claims versus UI evidence. [Why Coupang](https://www.coupang.jobs/en/why-coupang/) · [Newsroom information](https://news.coupang.com/21597-2/)

The current public brand record also includes a purpose-built Coupang Sans family for corporate and careers use. The source describes Display and Text cuts and links the design to speed and legibility, but does not provide a license or establish the font as a loaded commerce-webfont asset. [Coupang Sans](https://news.coupang.com/archives/19962/)

## 12. Principles

1. **Wow the customer.** Coupang says the customer is the beginning and end of decisions. *UI implication:* connect a product claim to a clear user outcome; do not claim more product behavior than the evidence records.
2. **Simplify.** The company’s published leadership principles call complexity an enemy of scale, speed, and customer experience. *UI implication:* preserve a clear default hierarchy before adding optional surface variants.
3. **Move with urgency.** Coupang describes timely action as a leadership value. *UI implication:* use concise, actionable language where official product copy is available; otherwise leave the copy unspecified.

## 13. Personas

*No first-party persona research was collected for this reference. Do not fabricate customer archetypes or demographic facts.*

- [FILL IN: user-provided primary customer segment]
- [FILL IN: user-provided commerce task and context]

## 14. States

Only default states were captured. The following states require a product-specific observation before specification:

| Category | Evidence status |
|----------|-----------------|
| Empty | [FILL IN: no observed state] |
| Loading | [FILL IN: no observed state] |
| Error | [FILL IN: no observed state] |
| Success | [FILL IN: no observed state] |
| Skeleton | [FILL IN: no observed state] |
| Disabled | [FILL IN: no observed state] |

## 15. Motion & Easing

No motion, transition, or interaction state was captured. [FILL IN: product-specific motion evidence]
