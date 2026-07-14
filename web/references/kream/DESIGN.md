---
id: kream
name: KREAM
country: KR
category: ecommerce
homepage: "https://kream.co.kr"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kream.co.kr&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: commerce-home, url: "https://kream.co.kr/", inspected: "2026-07-13" }
    - { id: recovery, kind: commerce-recovery, url: "https://kream.co.kr/shop", inspected: "2026-07-13" }
    - { id: search, kind: commerce-search, url: "https://kream.co.kr/search?keyword=nike", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://kream.co.kr/", captured: "2026-07-13" }
    - { id: recovery-live, kind: product-surface, url: "https://kream.co.kr/shop", captured: "2026-07-13" }
    - { id: search-live, kind: product-surface, url: "https://kream.co.kr/search?keyword=nike", captured: "2026-07-13" }
    - { id: buying-faq, kind: official-doc, url: "https://kream.co.kr/faq?category=buying&page=0", captured: "2026-07-13" }
    - { id: authentication-policy, kind: official-doc, url: "https://kream.co.kr/auth_policy", captured: "2026-07-13" }
    - { id: pretendard-docs, kind: official-doc, url: "https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.primary": *home
    "tokens.colors.foreground": *home
    "tokens.colors.surface": *home
    "tokens.colors.muted": &search { surface_id: search, source_id: search-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.hairline": *search
    "tokens.colors.on-primary": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.utility.size": *search
    "tokens.typography.utility.weight": *search
    "tokens.typography.utility.use": *search
    "tokens.typography.search.size": *search
    "tokens.typography.search.weight": *search
    "tokens.typography.search.lineHeight": *search
    "tokens.typography.search.use": *search
    "tokens.typography.tab-active.size": *search
    "tokens.typography.tab-active.weight": *search
    "tokens.typography.tab-active.use": *search
    "tokens.spacing.xxs": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *search
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.rounded.none": *home
    "tokens.rounded.sm": *search
    "tokens.rounded.recovery": &recovery { surface_id: recovery, source_id: recovery-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.rounded.merchandising-panel": *home
    "tokens.rounded.search-filter-pill": *search
    "tokens.shadow.none": *home
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    canvas: "#ffffff"
    primary: "#222222"
    foreground: "#222222"
    surface: "#f5f5f5"
    muted: "#4e4e4e"
    hairline: "#f0f0f0"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Pretendard Variable" }
    body: { size: 16, weight: 400, use: "Observed default live-commerce text on home and search." }
    utility: { size: 13, weight: 400, use: "Observed search-filter control text." }
    search: { size: 24, weight: 700, lineHeight: 1.21, use: "Observed search input text." }
    tab-active: { size: 16, weight: 700, use: "Observed active search-tab label." }
  spacing: { xxs: 2, xs: 4, sm: 6, md: 8, lg: 12, xl: 24 }
  rounded: { none: 0, sm: 6, recovery: 8, merchandising-panel: 16, search-filter-pill: 30 }
  shadow: { none: "none" }
  components_harvested: false
  components: {}
---

# Design System Inspiration of KREAM

## 1. Visual Theme & Atmosphere

KREAM is a Korean limited-edition marketplace where members can buy immediately at the lowest available sell offer or place a bid; when a match is made, the seller sends the item to KREAM for authentication before delivery. Its official FAQ also describes warehouse-held, authenticated inventory as eligible for rapid shipping. That transaction model gives the public commerce surface a particular character: a quiet white and charcoal information field that makes product imagery, price, filters, and rankings do the work rather than relying on a broad brand-color system. The current home route is a merchandising surface with campaign modules and product discovery, while the search route is the strongest evidence for the marketplace controls themselves. [Buying FAQ](https://kream.co.kr/faq?category=buying&page=0) · [Authentication standards](https://kream.co.kr/auth_policy)

The supplied live capture shows a tightly neutral interface: `#222222` is the recurring text and border ink, `#ffffff` the canvas, `#f5f5f5` a home-surface fill, and a small search-control layer in `#4e4e4e`/`#f0f0f0`. Corners are not globally rounded: the evidence ranges from square tabs and inputs to 6px product/filter geometry, one 8px recovery action, 16px home merchandising panels, and 30px filter pills. The practical distinction is surface-specific, not a universal component kit. Marketing campaign content visible on the home route is not used as documentation or product-state evidence; the separate FAQ and authentication pages provide service context only, not UI tokens.

**Key Characteristics:**

- Live commerce use of `Pretendard Variable`, verified by computed-family usage plus a loaded FontFaceSet match and 92 KREAM-hosted subset source URLs
- White canvas and charcoal `#222222` chrome across home, recovery, and search captures
- Search-route filters distinguish pill fill (`#f4f4f4`, 30px) from outlined rectangular controls (`#ffffff`, 6px)
- Active search tabs retain the charcoal ink and use a 2px bottom border with 700 weight
- No captured hover, focus, pressed, dialog, toast, loading, responsive, or other interaction state

## 2. Color Palette & Roles

### Observed live commerce surfaces

- **Canvas** `#ffffff` — repeated background across home and search.
- **Primary / foreground** `#222222` — repeated text and border ink across all supplied routes.
- **Home merchandising surface** `#f5f5f5` — observed background on the home route; not a universal card fill.
- **Search-control muted ink** `#4e4e4e` — observed on both default filter-control styles.
- **Search-control hairline** `#f0f0f0` — observed 1px border on the outlined search filter control.
- **On-primary / inverse** `#ffffff` — observed text and border value in the live capture; no semantic CTA role was established.

The collector also saw product-content colors such as `#00cc44` and `#f15746` on the search route. It does not establish a semantic price, status, gain, or loss role, so these values are deliberately absent from machine tokens. No official public design-system page was found in this pass.

## 3. Typography Rules

### Evidence classes

- **Live computed surface-use and loaded webfont:** visible text on all three supplied KREAM routes resolves first to **Pretendard Variable**. The collector records 1,026 visible uses across headings, body text, buttons, cards, inputs, list items, tabs, and badges; it also records a loaded FontFace match and 92 KREAM-hosted `woff2` subset URLs. `Pretendard Variable` is therefore the sole KREAM UI-family machine token.
- **Official font documentation and license:** Pretendard’s own documentation describes it as a cross-platform, multilingual neo-grotesque family with variable-font support. Its repository distributes the family under SIL Open Font License 1.1; that license permits commercial use, modification, and redistribution subject to its terms. This is font-author evidence, not KREAM brand-asset evidence. [Pretendard documentation](https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md) · [License](https://github.com/orioncactus/pretendard/blob/main/LICENSE)
- **Declared-only assets:** the bundle declares `HelveticaNeue`, `HelveticaNeueBold`, `NotoSansCJKkr` (including Light and Bold), `Roboto-Bold`, and `Roboto-Light`/`Roboto-Medium`, with legacy KREAM-hosted source URLs but zero visible observed usage. They remain declared-only and are not rendered as KREAM UI families.
- **System / unresolved:** `Roboto` is classified as a system-stack entry with zero visible uses. No substitution is authorized for any declared-only or system entry.

### Measured hierarchy

| Role | Size | Weight | Line height | Surface boundary |
| --- | --- | --- | --- | --- |
| Default live text | 16px | 400 | normal | Repeated across home and search |
| Search filter control | 13px | 400 | normal | Search route only |
| Search input | 24px | 700 | 29px | Search route only |
| Active search tab | 16px | 700 | normal | Search route only |
| Recovery home button | 13px | 300 | 26px | Recovery route only |

## 4. Component Stylings

### Search filters

**Pill filter button — observed default**
- Background: #f4f4f4
- Text: #4e4e4e
- Radius: 30px
- Padding: 0px 8px
- Font: 13px / 400 / Pretendard Variable
- Height: 30px
- Use: Search-route default filter at `surface-3::[data-omd-capture="18"]` (`filter_button tint shape_pill`); 7 occurrences, no observed state transition.

**Outlined filter button — observed default**
- Background: #ffffff
- Text: #4e4e4e
- Border: 1px solid #f0f0f0
- Radius: 6px
- Padding: 0px 6px 0px 4px
- Font: 13px / 400 / Pretendard Variable
- Height: 30px
- Use: Search-route default filter at `surface-3::[data-omd-capture="25"]` (`filter_button line shape_rect`); 9 occurrences, no observed state transition.

### Search navigation

**Search tab — observed default**
- Text: #222222
- Radius: 0px
- Padding: 13px 0px
- Font: 16px / 400 / Pretendard Variable
- Height: 44px
- Use: Home and search tab elements; representative `home::[data-omd-capture="13"]` (`tab`).

**Search tab — observed active**
- Text: #222222
- Border: 2px solid #222222 on the bottom edge
- Radius: 0px
- Font: 16px / 700 / Pretendard Variable
- Height: 44px
- Use: Active search tab at `surface-3::[data-omd-capture="14"]` (`router-link-active router-link-exact-active tab active`). This is an observed route state, not a hover or pressed variant.

### Search input

**Search text input — observed default**
- Text: #000000
- Radius: 0px
- Padding: 0px 13px 0px 1px
- Font: 24px / 700 / Pretendard Variable
- Height: 29px
- Use: Search input at `surface-3::[data-omd-capture="12"]` (`input_search show_placeholder_on_focus`). No focus state was captured.

### Product discovery card

**Search product-card shell — observed default**
- Text: #222222
- Radius: 6px
- Padding: 0px 0px 10px
- Font: 16px / 400 / Pretendard Variable
- Use: Search-route linked card at `surface-3::[data-omd-capture="37"]` (`product_card`); captured heights vary from 319px to 340px, so no fixed-height token is asserted.

### Recovery action

**Home recovery button — observed default**
- Text: #000000
- Border: 1px solid rgba(0,0,0,0.6)
- Radius: 8px
- Font: 13px / 300 / Pretendard Variable
- Height: 36px
- Use: Recovery route action at `surface-2::[data-omd-capture="12"]` (`button-home`). Its route-local recovery context must not be generalized as a primary commerce CTA.

No hover, focus, pressed, disabled, dialog, menu, toast, error-form, responsive, or unobserved selected component variant is specified. The collector reports zero interactions and zero observed states.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://kream.co.kr/; https://kream.co.kr/shop; https://kream.co.kr/search?keyword=nike; https://kream.co.kr/faq?category=buying&page=0; https://kream.co.kr/auth_policy; https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md; https://github.com/orioncactus/pretendard/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/kream (attempted; no indexed KREAM record returned); https://styles.refero.design/?q=kream (attempted; no KREAM result returned in the public search result set)
**Conflicts unresolved:** none

## 5. Layout Principles

Only route-local dimensions are retained: the home collector found a 1188px-wide, 475px-high merchandising panel and the search collector found 238px-wide product-card shells with variable observed heights. The search input was 468px wide in this desktop sample. No responsive breakpoint, grid-column count, sticky behavior, or global container width is asserted from one desktop capture.

## 6. Depth & Elevation

Representative components in the supplied capture report `box-shadow: none`. No elevated card, overlay, modal, or menu elevation token is established.

## 7. Do's and Don'ts

### Do

- Use `Pretendard Variable` only where the recorded KREAM-loaded webfont evidence applies.
- Keep the observed commerce chrome white and charcoal, with search filter controls constrained to their recorded geometry and route.
- Preserve selector, surface, and state provenance when recreating an observed component.
- Treat KREAM’s official FAQ and authentication policy as service-context sources, not a design-token system.

### Don't

- Do not replace declared-only Helvetica Neue, Noto Sans, or Roboto entries with a look-alike and label it as KREAM.
- Do not turn product-content green or red samples into semantic status tokens.
- Do not generalize the recovery-route button into a primary CTA.
- Do not add hover, focus, pressed, disabled, loading, dialog, or mobile variants without a corresponding captured surface and state.

## 8. Responsive Behavior

The supplied collector evidence is desktop-only. No breakpoint, mobile layout, touch target, or adaptive navigation behavior is specified.

## 9. Agent Prompt Guide

### Verified prompt boundary

“Create only the observed KREAM commerce elements: a white/charcoal desktop search route with Pretendard Variable; 30px `#f4f4f4` pill filters; 6px white outlined filters; a 24px/700 search input; and 44px tabs whose active state uses 700 weight plus a 2px charcoal bottom border. Do not add a branded CTA color, a substituted font, a modal/menu state, or a responsive variant.”

## 10. Voice & Tone

KREAM’s official service explanations are operational and sequential: search or select an item, buy immediately or bid, then move the matched item through inspection and delivery. The same material describes authenticated warehouse inventory as eligible for rapid shipping. This is official service language, not a complete catalog of public UI microcopy. [Buying FAQ](https://kream.co.kr/faq?category=buying&page=0)

| Do | Don't |
| --- | --- |
| State the transaction step and condition clearly. | Attribute unobserved checkout or error copy to KREAM. |
| Separate immediate purchase from a bid. | Treat campaign headlines as a system-wide voice rule. |
| Explain inspection and delivery as distinct stages. | Convert service-policy language into a color or component token. |

**Voice samples.**

- “즉시 구매 혹은 구매 입찰” — official buying-flow label. <!-- verified: kream.co.kr/faq?category=buying&page=0 2026-07-13 -->
- “검수를 진행” — official buying-flow stage. <!-- verified: kream.co.kr/faq?category=buying&page=0 2026-07-13 -->
- “당일 출고” — official rapid-shipping outcome for qualifying stored inventory. <!-- verified: kream.co.kr/faq?category=buying&page=0 2026-07-13 -->

## 11. Brand Narrative

KREAM describes its service as a way to buy and trade limited-edition goods that are otherwise difficult to obtain, with expert inspection intended to make the exchange safe and quick. Its official buying guidance distinguishes immediate purchase, bid-based purchase, inspection, storage, and delivery rather than reducing the marketplace to a conventional retailer. [KREAM FAQ](https://kream.co.kr/faq?list=true&page=2) · [Buying FAQ](https://kream.co.kr/faq?category=buying&page=0)

The current public surface reflects that service model through discovery, search filtering, product cards, and route-local recovery controls. The reference does not claim a separate KREAM brand history, rebrand, owned typeface, or public design-system program because no first-party evidence for those claims was collected in this pass.

## 12. Principles

1. **Make the transaction path legible.** Official guidance distinguishes immediate purchase and bidding before inspection and delivery. *UI implication:* maintain clear labels for the observed route and step; do not invent transactional states.
2. **Keep authentication explicit.** KREAM publishes product-category authentication standards and assigns responsibility for inspection/guarantees within its policy boundary. *UI implication:* distinguish an inspection statement from a generic marketing assurance.
3. **Keep control evidence local.** Search filters, tabs, and recovery controls appear on different captured contexts. *UI implication:* reuse only the field values and state that were actually observed for that context.

## 13. Personas

*No first-party persona research was collected for this reference. Do not fabricate customer archetypes or demographic facts.*

- [FILL IN: user-provided primary customer segment]
- [FILL IN: user-provided transaction or discovery task]

## 14. States

Only component defaults and the route-selected search tab were captured. The following require a product-specific observation before specification:

| Category | Evidence status |
| --- | --- |
| Empty | [FILL IN: no observed state] |
| Loading | [FILL IN: no observed state] |
| Error | [FILL IN: recovery-route component only; no error treatment captured] |
| Success | [FILL IN: no observed state] |
| Skeleton | [FILL IN: no observed state] |
| Disabled | [FILL IN: no observed state] |

## 15. Motion & Easing

No motion, transition, or interaction state was captured. [FILL IN: product-specific motion evidence]
