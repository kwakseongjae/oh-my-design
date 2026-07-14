---
id: zigzag
name: ZIGZAG
country: KR
category: ecommerce
homepage: "https://zigzag.kr/"
primary_color: "#121212"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=zigzag.kr&sz=256"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: ZIGZAG Design System (ZDS)
  url: "https://devblog.kakaostyle.com/ko/2024-12-13-1-rebuilding-frontend-design-system/"
  type: system
  description: Official Kakaostyle engineering account of the ZDS rebuild, CSS-variable token work, and product-card unification.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product-home, url: "https://zigzag.kr/", inspected: "2026-07-13" }
    - { id: product-a, kind: product-detail, url: "https://zigzag.kr/catalog/products/145661347", inspected: "2026-07-13" }
    - { id: product-b, kind: product-detail, url: "https://zigzag.kr/catalog/products/162934185", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://zigzag.kr/", captured: "2026-07-13" }
    - { id: product-a-live, kind: product-surface, url: "https://zigzag.kr/catalog/products/145661347", captured: "2026-07-13" }
    - { id: product-b-live, kind: product-surface, url: "https://zigzag.kr/catalog/products/162934185", captured: "2026-07-13" }
    - { id: zds-engineering, kind: official-doc, url: "https://devblog.kakaostyle.com/ko/2024-12-13-1-rebuilding-frontend-design-system/", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.strong": &product_a { surface_id: product-a, source_id: product-a-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.secondary": *product_a
    "tokens.colors.muted": *home
    "tokens.colors.hairline": *home
    "tokens.typography.heading.size": *product_a
    "tokens.typography.heading.weight": *product_a
    "tokens.typography.heading.lineHeight": *product_a
    "tokens.typography.heading.tracking": *product_a
    "tokens.typography.heading.use": *product_a
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.metadata.size": *product_a
    "tokens.typography.metadata.weight": *product_a
    "tokens.typography.metadata.lineHeight": *product_a
    "tokens.typography.metadata.tracking": *product_a
    "tokens.typography.metadata.use": *product_a
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *product_a
    "tokens.rounded.square": *home
    "tokens.rounded.icon": *home
    "tokens.rounded.control": *product_a
    "tokens.rounded.full": *product_a
    "tokens.shadow.flat": *home
    "tokens.components.product-thumbnail.type": *product_a
    "tokens.components.product-thumbnail.bg": *product_a
    "tokens.components.product-thumbnail.radius": *product_a
    "tokens.components.product-thumbnail.use": *product_a
    "tokens.components.product-card.type": *product_a
    "tokens.components.product-card.radius": *product_a
    "tokens.components.product-card.padding": *product_a
    "tokens.components.product-card.use": *product_a
    "tokens.components.detail-tab.type": *product_a
    "tokens.components.detail-tab.fg": *product_a
    "tokens.components.detail-tab.radius": *product_a
    "tokens.components.detail-tab.padding": *product_a
    "tokens.components.detail-tab.font": *product_a
    "tokens.components.detail-tab.states": *product_a
    "tokens.components.detail-tab.use": *product_a
    "tokens.components.quick-menu-arrow.type": *home
    "tokens.components.quick-menu-arrow.bg": *home
    "tokens.components.quick-menu-arrow.fg": *home
    "tokens.components.quick-menu-arrow.border": *home
    "tokens.components.quick-menu-arrow.radius": *home
    "tokens.components.quick-menu-arrow.states": *home
    "tokens.components.quick-menu-arrow.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Three current public product surfaces. Current computed Pretendard JP did not match a loaded FontFace, so no font family is promoted. The legacy pink palette and unobserved commerce states were removed."
  colors:
    strong: "#121212"
    canvas: "#ffffff"
    foreground: "#292b2b"
    secondary: "#606567"
    muted: "#878f91"
    hairline: "#ecedee"
  typography:
    heading: { size: 32, weight: 600, lineHeight: 1.4, tracking: 0, use: "Public product-detail section headings" }
    body: { size: 16, weight: 400, lineHeight: normal, use: "Current page and product-card text" }
    metadata: { size: 14, weight: 500, lineHeight: 1.21, tracking: 0, use: "Product-detail tab and supporting metadata" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16 }
  rounded: { square: 0, icon: 8, control: 24, full: 9999 }
  shadow: { flat: "none" }
  components_harvested: true
  components:
    product-thumbnail: { type: card, bg: "#ecedee", radius: "0px", use: "Public product-card thumbnail placeholder on both captured product-detail pages" }
    product-card: { type: card, radius: "0px", padding: "0px 0px 8px", use: "Public product-card root on both captured product-detail pages" }
    detail-tab: { type: tab, fg: "#121212", radius: "0px", padding: "0px 4px 17.5px", font: "14px / 600", states: "selected captured; default tab uses #878f91 at 14px / 500", use: "Product-detail tab list on both captured product-detail pages" }
    quick-menu-arrow: { type: button, bg: "transparent", fg: "#000000", border: "1px solid #ecedee", radius: "50%", states: "default captured; previous arrow disabled with rgba(16,16,16,0.3)", use: "Home quick-menu carousel arrow" }
---

# Design System Inspiration of ZIGZAG (지그재그)

## 1. Visual Theme & Atmosphere

ZIGZAG is KakaoStyle's style-commerce service: its public terms describe it as the mobile shopping service through which sellers and users transact, while the company's 2025 brand publication frames the service as a place for people to discover and complete their own tastes. The current public web evidence is deliberately product-led rather than a separate corporate-brand treatment: product photography and dense catalog information occupy the page, with a white `#ffffff` canvas, dark `#292b2b` reading text, muted metadata, and square-to-lightly-rounded geometry. The official ZDS engineering account explains why that consistency matters: Kakaostyle rebuilt the web design system around CSS-variable tokens and unified product-card work across surfaces. This reference preserves that engineering and commerce context, but promotes only the values observed on the three supplied current public product surfaces.

The inspected home and two product details share a restrained neutral system. `#121212` is the strongest observed detail-tab text, `#292b2b` is the repeated body/card foreground, `#878f91` supports inactive tabs and home list text, and `#ecedee` appears in thumbnail placeholders and thin control borders. The 2025 brand story is marketing context, not an authorization to turn campaign color or copy into a current product token.

**Key Characteristics:**

- Three current public product surfaces, not authenticated checkout or native-app screens
- White canvas with charcoal reading text and cool-gray metadata
- Product-card root, thumbnail, metadata, and tab substructures observed in current public markup
- 0px card geometry, 8px icon corners, 24px action corners, and full-pill carousel controls each tied to a specific observed role
- No published current pink token is promoted from the supplied product capture

## 2. Color Palette & Roles

### Current public product values

- **Strong detail text** (`#121212`): selected product-detail tab text and dark carousel navigation fill.
- **Foreground** (`#292b2b`): repeated body, card, and page text across home and both product details.
- **Canvas** (`#ffffff`): body and white control surface in the captured public pages.
- **Secondary** (`#606567`): supporting product-detail text.
- **Muted** (`#878f91`): inactive product-detail tabs and home list text.
- **Hairline / placeholder** (`#ecedee`): public product-thumbnail placeholder and 1px carousel-arrow border.

### Deliberately unpromoted groups

The legacy `#fa6ee3` / `#f55dd6` pink system, sale/status colors, Kakao-login color, dark theme, campaign colors, and hover/pressed values did not occur in the supplied current product evidence. The official ZDS article establishes token architecture, not those absent values on these captured surfaces, so they are omitted instead of reconstructed.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | No first-party source inspected in this pass publishes a current universal ZIGZAG font-family claim. |
| Live computed surface-use | All three public product surfaces compute a stack beginning `"Pretendard JP", Pretendard, -apple-system, system-ui`; 912 visible uses were recorded. |
| Official distributed asset | Pretendard's own project documents the family and SIL Open Font License, but it is not a ZIGZAG-owned font asset. |
| Declared-only | `Pretendard`, `swiper-icons`, and `VideoJS` had declarations; only the latter two had data-URL declarations in the collector output. |
| Unresolved | The computed `Pretendard JP` family had no matching loaded FontFace or source URL in the supplied artifact. It is not promoted to `tokens.typography.family` and has no live specimen. |

The public hierarchy was measured as a stack, not a guaranteed loadable type family: product-detail headings reached 32px / 600 / 44.8px, common text was 16px / 400, and tabs/supporting metadata used 14px / 500 or selected 14px / 600. Letter spacing was `normal` throughout the sampled roles.

### Observed hierarchy

| Role | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| Product-detail heading | 32px | 600 | 44.8px | Heading roles on both product-detail pages |
| Current body | 16px | 400 | normal | Page and product-card text |
| Detail metadata / tab | 14px | 500 | 17px | Inactive tab and supporting text |
| Selected detail tab | 14px | 600 | 17px | Selected product-detail tab |

## 4. Component Stylings

### Public product components

**Product Thumbnail Placeholder**
- Background: `#ecedee`
- Radius: 0px
- Use: `.product-card-thumbnail` placeholder on `surface-2` and `surface-3`; representative 172px-wide product cards.

**Product Card Root**
- Radius: 0px
- Padding: 0px 0px 8px
- Use: `.product-card-root.product-card` on both captured product-detail surfaces; the root itself is transparent.

**Product-detail Tab**
- Text: `#121212`
- Radius: 0px
- Padding: 0px 4px 17.5px
- Font: 14px / 600 / computed Pretendard JP stack
- States: selected tab captured in `surface-2` and `surface-3`; the default tab is `#878f91`, 14px / 500, with the same control height.
- Use: product-detail tab list; selector provenance `surface-2::[data-omd-capture="28"]`.

**Home Quick-menu Arrow**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#ecedee`
- Radius: 50%
- Disabled: previous arrow captured with `rgba(16,16,16,0.3)` text.
- Use: home quick-menu carousel arrow; selector provenance `home::[data-omd-capture="74"]`.

No checkout CTA, search input, filter chip, toast, dialog, favorite state, hover, focus, or pressed variant is promoted: the collector reported zero safe interaction expansions, and those components were not present with sufficient selector/state proof in the supplied product surfaces.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://zigzag.kr/ · https://zigzag.kr/catalog/products/145661347 · https://zigzag.kr/catalog/products/162934185
**Tier 2 sources:** https://getdesign.md/zigzag (attempted; unavailable) · https://styles.refero.design/?q=ZIGZAG (attempted; unavailable)
**Conflicts unresolved:** none

## 5. Layout Principles

- Keep product imagery and metadata as separate blocks. The current public card implementation exposes thumbnail and metadata as distinct product-card subcomponents.
- Treat the 8px bottom card padding as local card geometry, not a global spacing scale.
- Keep product-detail tabs as low-fill text controls; the observed selected state is conveyed by text weight/color rather than a filled pill.
- Do not infer desktop, native-app, cart, or checkout layout rules from these three public web pages.

## 6. Depth & Elevation

The supplied public samples report `box-shadow: none` for the promoted card, tab, and quick-menu controls. Product thumbnails may use the neutral `#ecedee` placeholder; depth is not promoted as a canonical shadow system. White surfaces and hairlines should not be converted into an invented card-elevation scale.

## 7. Do's and Don'ts

### Do

- Keep `#292b2b` as the observed body/card foreground and reserve `#121212` for the strongest captured detail-tab state.
- Preserve the product-card split between thumbnail and metadata when using this reference's public-card pattern.
- Use 0px geometry only for the observed card/tab roles; use 8px, 24px, and full-pill values only in their evidenced icon, action, and carousel-control roles.

### Don't

- Do not present the legacy pink palette as a current public product token without new product-surface proof.
- Do not label the computed Pretendard JP stack as a browser-loadable ZIGZAG font or substitute a system font under that name.
- Do not invent sale, error, success, favorite, dialog, input, checkout, hover, focus, or pressed variants from adjacent marketing or native-app surfaces.

## 8. Responsive Behavior

The artifact was captured at `1440x900` and the public product content contained a 600px-wide product carousel/card region. That observation is not enough to claim a global max-width or native-mobile breakpoint policy. Responsive behavior, overlays, and interaction states remain outside this reference until independently captured.

## 9. Agent Prompt Guide

Use this reference for a neutral, photo-led public fashion-product detail only: white canvas, `#292b2b` reading text, `#878f91` inactive metadata, `#ecedee` placeholder/hairline, a selected 14px / 600 `#121212` tab, and a transparent square product-card root. Do not ask it to supply a ZIGZAG pink CTA, a verified font file, or checkout-state patterns; those are not in this evidence set.

## 10. Voice & Tone

Official current brand publishing uses a personal-style discovery frame: the 2025 ZIGZAG Beauty story calls the service a style-commerce platform and describes helping people find their own preferences. This is marketing voice, not a token or a verified logged-in-product microcopy guide. Keep product-detail labels concrete and item-led; do not manufacture error, payment, or retention copy from campaign language.

## 11. Brand Narrative

KakaoStyle's official 2025 ZIGZAG Beauty publication describes ZIGZAG as a style-commerce platform that began in fashion and expanded its categories and selection so people can discover their own preferences. The publication connects that idea to a beauty pop-up whose offline “online pouch” could link saved products back to the app cart. Separately, ZIGZAG's public terms define the service as a mobile shopping service in which the company intermediates transactions between sellers and users. Together, those first-party sources explain the reference's scope: a commerce service whose editorial discovery language sits beside a transactional product surface.

The official engineering account adds the system's current technical arc. Its ZDS rebuild began from the need to unify independently maintained product cards; the team adopted modular packages, CSS-variable token contracts, and a compound product-card structure that can vary by surface without losing its shared base. That background supports the documented card anatomy, but not token values absent from the July 2026 public capture.

## 12. Principles

1. **Discovery and transaction coexist.** The official brand story presents preference discovery while the terms define a transaction-intermediation service. *UI implication:* keep editorial/campaign interpretation separate from checkout claims unless each has surface evidence.
2. **Systemize the repeated product card.** ZDS was rebuilt in part to unify product-card work across surfaces. *UI implication:* preserve thumbnail and metadata as separable blocks rather than treating each card as an unstructured visual tile.
3. **Tokens need local proof.** CSS-variable architecture is official engineering context, but current values must still come from the correct product surface. *UI implication:* do not copy a marketing color or legacy CSS value into product tokens without computed evidence.

## 13. Personas

These are stakeholder roles derived from first-party service/engineering descriptions, not synthetic user research or demographic claims.

- **Shopper:** uses the mobile shopping service to browse product information and complete a transaction through the platform.
- **Seller:** provides goods or services through the marketplace relationship described in the public terms.
- **Product-surface team:** maintains product-card UI across multiple surfaces using the ZDS component architecture described by Kakaostyle engineering.

## 14. States

| State | Evidence boundary |
|---|---|
| Default product card | Transparent root, 0px radius, 0px 0px 8px padding on both captured product-detail pages. |
| Thumbnail placeholder | `#ecedee`, 0px radius on the captured `.product-card-thumbnail`. |
| Default detail tab | `#878f91`, 14px / 500, captured on both product-detail pages. |
| Selected detail tab | `#121212`, 14px / 600, captured on both product-detail pages. |
| Quick-menu arrow default | Transparent, `#000000`, 1px `#ecedee` border, 50% radius on home. |
| Quick-menu arrow disabled | `rgba(16,16,16,0.3)` text on the captured previous arrow. |
| Hover / focus / pressed | Not claimed: interaction coverage was zero. |
| Checkout, payment, error, success, toast, dialog | Not claimed: no public selector/state evidence in the supplied artifact. |

## 15. Motion & Easing

No motion duration, easing curve, animation, or reduced-motion treatment was observed in the supplied capture. The product-card carousel and quick-menu arrows establish only structural control evidence; they do not authorize a motion token or a claimed transition behavior.
