---
id: lguplus
name: LG유플러스
country: KR
category: consumer-tech
homepage: "https://www.lguplus.com/"
primary_color: "#e6007e"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=lguplus.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-service-home, url: "https://www.lguplus.com/", inspected: "2026-07-13" }
    - { id: subscription-product, kind: public-subscription-product, url: "https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9C%A0%EB%8F%85pick-2?utm_campaign=o25o25udok04pfm&utm_source=uplusapp&utm_medium=main_eventbanner_empty_empty&utm_content=notsetpick2_6&utm_term=notsetnone", inspected: "2026-07-13" }
    - { id: corporate-about, kind: corporate-about, url: "https://www.lguplus.com/about/ko", inspected: "2026-07-13" }
  sources:
    - { id: lguplus-home-live, kind: product-surface, url: "https://www.lguplus.com/", captured: "2026-07-13" }
    - { id: lguplus-subscription-live, kind: product-surface, url: "https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9C%A0%EB%8F%85pick-2?utm_campaign=o25o25udok04pfm&utm_source=uplusapp&utm_medium=main_eventbanner_empty_empty&utm_content=notsetpick2_6&utm_term=notsetnone", captured: "2026-07-13" }
    - { id: lguplus-about-live, kind: product-surface, url: "https://www.lguplus.com/about/ko", captured: "2026-07-13" }
    - { id: lguplus-pretendard-asset, kind: brand-asset, url: "https://www.lguplus.com/static/pc-static/common/fonts/Pretendard-Regular.subset.woff2", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-14" }
  conflicts: []
  claims:
    "tokens.colors.primary": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.colors.ink": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::body", captured: "2026-07-13" }
    "tokens.colors.canvas": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::body", captured: "2026-07-13" }
    "tokens.colors.muted": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-07-13" }
    "tokens.colors.soft": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"34\"]", captured: "2026-07-13" }
    "tokens.colors.border": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.typography.family.home": { surface_id: home, source_id: lguplus-pretendard-asset, method: computed-style-and-font-face, selector: "home::body", captured: "2026-07-13" }
    "tokens.typography.family.subscription": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style-and-font-face, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.typography.body.size": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::body", captured: "2026-07-13" }
    "tokens.typography.body.weight": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::body", captured: "2026-07-13" }
    "tokens.typography.body.lineHeight": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::body", captured: "2026-07-13" }
    "tokens.typography.body.use": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::body", captured: "2026-07-13" }
    "tokens.typography.subscription-action.size": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.typography.subscription-action.weight": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.typography.subscription-action.lineHeight": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.typography.subscription-action.use": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.spacing.xs": { surface_id: home, source_id: lguplus-home-live, method: computed-style-cluster, captured: "2026-07-13" }
    "tokens.spacing.sm": { surface_id: home, source_id: lguplus-home-live, method: computed-style-cluster, captured: "2026-07-13" }
    "tokens.spacing.md": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style-cluster, captured: "2026-07-13" }
    "tokens.spacing.lg": { surface_id: home, source_id: lguplus-home-live, method: computed-style-cluster, captured: "2026-07-13" }
    "tokens.rounded.none": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::body", captured: "2026-07-13" }
    "tokens.rounded.row": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.rounded.primary-cta": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-primary-cta.type": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-primary-cta.bg": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-primary-cta.fg": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-primary-cta.border": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-primary-cta.radius": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-primary-cta.padding": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-primary-cta.height": { surface_id: home, source_id: lguplus-home-live, method: bounding-rect-and-computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-primary-cta.font": { surface_id: home, source_id: lguplus-home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-primary-cta.states": { surface_id: home, source_id: lguplus-home-live, method: interaction-summary, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-primary-cta.use": { surface_id: home, source_id: lguplus-home-live, method: selector-context, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.subscription-information-row.type": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: semantic-element-and-computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.components.subscription-information-row.bg": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.components.subscription-information-row.fg": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.components.subscription-information-row.border": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.components.subscription-information-row.radius": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.components.subscription-information-row.padding": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.components.subscription-information-row.height": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: bounding-rect-and-computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.components.subscription-information-row.font": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.components.subscription-information-row.use": { surface_id: subscription-product, source_id: lguplus-subscription-live, method: selector-context, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only selector-backed values from the supplied Home and public subscription-product capture are tokenized. Corporate, newsroom, declared-only, and license evidence remains separately scoped."
  colors:
    primary: "#e6007e"
    ink: "#000000"
    canvas: "#ffffff"
    muted: "#888888"
    soft: "#f5f5f5"
    border: "#ebebeb"
  typography:
    family: { home: "Pretendard", subscription: "nskr" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Observed public Home body" }
    subscription-action: { size: 16, weight: 700, lineHeight: 1.5, use: "Observed public subscription purchase action" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16 }
  rounded: { none: 0, row: 8, primary-cta: 20 }
  components_harvested: true
  components:
    home-primary-cta: { type: button, bg: "#e6007e", fg: "#ffffff", border: "0px solid #ffffff", radius: "20px", padding: "0px 30px", height: "40px", font: "16px / 400 / Pretendard", states: "default captured; interactionCount 0, so no hover, focus, pressed, disabled, or error value was observed", use: "Public Home solid CTA at home::[data-omd-capture=\"19\"]" }
    subscription-information-row: { type: listItem, bg: "transparent", fg: "#222222", border: "1px solid #ebebeb", radius: "8px", padding: "19px", height: "65px", font: "14px / 500 / nskr", use: "Public subscription product information row at surface-2::[data-omd-capture=\"14\"]" }
---

# Design System Inspiration of LG유플러스

## 1. Visual Theme & Atmosphere

LG유플러스 is a Korean telecommunications and consumer-technology company, established in 1996, with public services for mobile, home internet and IPTV, smart home, and people-centred AI as well as enterprise offerings. Its recognizable public expression combines a white, near-black service foundation with a high-visibility magenta action signal, while its current Simply. U+ direction frames the brand around reducing the complexity customers encounter in everyday telecom tasks. The supplied capture shows this in a deliberately bounded way: the public service home uses Pretendard with magenta calls to action; the public subscription-product page uses its own loaded `nskr` stack and more compact information rows; the corporate About page is context rather than a shared product-token source. The result is not a single universal LG U+ design system, nor evidence for authenticated, native-app, checkout, or support flows.

**Observed characteristics:**

- `#e6007e` is a selector-backed filled action color on both captured public service and subscription surfaces.
- `#000000` on `#ffffff` is the repeated public working base; `#f5f5f5`, `#888888`, and `#ebebeb` are scoped subscription-detail siblings.
- Loaded typography is surface-specific: Home uses Pretendard and the public subscription detail uses computed family `nskr`.
- The captured Home CTA is a 40px-high 20px-radius control; the subscription detail also has a static 65px information row with an 8px outline geometry.
- The 2025 Simply. U+ narrative is brand context only. It does not create colors, components, states, or motion tokens.

## 2. Color Palette & Roles

### Observed public-surface foundation

- **Primary** — `#e6007e`: measured fill on the public Home solid CTA and the public subscription purchase CTA.
- **Ink** — `#000000`: measured Home body ink and repeated public-surface text baseline.
- **Canvas** — `#ffffff`: measured Home canvas and CTA text color.
- **Muted** — `#888888`: measured public subscription-detail supporting-link text only.
- **Soft** — `#f5f5f5`: measured fill on the compact public subscription `pr-btne add` control only.
- **Border** — `#ebebeb`: measured 1px outline on the public subscription information row.

The product-detail row’s text is `#222222`; it is retained in that component’s measured fields rather than promoted as a general foreground token. Corporate About ink values and low-frequency page-specific colors remain useful raw evidence but are not merged into this product-scoped palette.

## 3. Typography Rules

### Font evidence classes

| Evidence class | Resolution |
|---|---|
| Official product-use | No first-party announcement reviewed here names one type family for every LG U+ product. |
| Live computed surface-use | Home has loaded Pretendard with 231 observed uses. The public subscription product has loaded `nskr` with 162 observed uses; its delivered filenames identify NotoSansKR assets. |
| Official distributed brand asset | The supplied runtime bundle delivers LG U+-hosted Pretendard and NotoSansKR font files. This proves delivery on the captured web surfaces, not ownership of a proprietary LG U+ typeface. |
| Declared-only | Geist, Geist Fallback, slick, and swiper-icons have no visible use in the supplied bundle and are omitted from tokens. |
| License | Pretendard’s upstream repository states SIL Open Font License 1.1. This license concerns Pretendard, not an LG U+ trademark or cross-product font policy. |

### Captured hierarchy

| Surface and role | Computed family | Size | Weight | Line height | Boundary |
|---|---|---:|---:|---:|---|
| Public Home body | Pretendard | 16px | 400 | 24px | `home::body`; not a universal product scale |
| Public Home primary CTA | Pretendard | 16px | 400 | 24px | `home::[data-omd-capture="19"]` |
| Public subscription purchase CTA | `nskr` | 16px | 700 | 24px | `surface-2::[data-omd-capture="15"]` |
| Public subscription information row | `nskr` | 14px | 500 | 21px | `surface-2::[data-omd-capture="14"]` |

Do not substitute an unavailable system font and call it Pretendard or `nskr`; do not extend either family from these two captured domains to uninspected LG U+ surfaces.

## 4. Component Stylings

### Button

**Home primary CTA**
- Background: `#e6007e`
- Text: `#ffffff`
- Border: `0px solid #ffffff`
- Radius: 20px
- Padding: 0px 30px
- Height: 40px
- Font: 16px / 400 / Pretendard
- Observed-state summary: Default captured; `interactionCount: 0`, so no hover, focus, pressed, disabled, or error value was observed.
- Use: Public Home solid CTA at `home::[data-omd-capture="19"]`.

### List item

**Subscription information row**
- Background: transparent
- Text: `#222222`
- Border: `1px solid #ebebeb`
- Radius: 8px
- Padding: 19px
- Height: 65px
- Font: 14px / 500 / nskr
- Use: Public subscription product information row at `surface-2::[data-omd-capture="14"]`; it is an observed link/row and is classified as `listItem`, not as a button.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.lguplus.com/ ; https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9C%A0%EB%8F%85pick-2?utm_campaign=o25o25udok04pfm&utm_source=uplusapp&utm_medium=main_eventbanner_empty_empty&utm_content=notsetpick2_6&utm_term=notsetnone ; https://www.lguplus.com/about/ko
**Tier 2 sources:** https://getdesign.md/lguplus (attempted) ; https://styles.refero.design/?q=lguplus (attempted)
**Conflicts unresolved:** none

## 5. Layout Principles

- The supplied desktop observations repeatedly include 4px, 8px, 12px, and 16px spacing values. Treat this as a measured local cluster, not a complete grid declaration.
- Preserve the named component geometry rather than averaging it: the Home CTA is 40px high with 20px corners, whereas the subscription row is 65px high with 8px corners.
- The capture establishes no canonical column count, maximum container width, or authenticated checkout layout.

## 6. Responsive Behavior

The supplied evidence was captured at 1440×900. It supports only the listed desktop geometry. No mobile breakpoint, touch-target rule, safe-area behavior, or responsive reflow is promoted.

## 7. Do's and Don'ts

### Do

- Keep Home and public subscription values explicitly scoped to their observed surfaces.
- Use `#e6007e` with white text for the measured action variants.
- Use the actual loaded family only where the relevant captured surface is being recreated.
- Preserve the static row as `listItem` geometry rather than changing the observed link/row into button semantics.

### Don't

- Treat declared-only fonts as visible LG U+ type families.
- Substitute a system font and label it Pretendard or `nskr`.
- Invent hover, focus, pressed, disabled, error, toast, dialog, or motion values from this zero-interaction capture.
- Merge corporate About styling into the product-token namespace without a product-surface observation.

## 8. Reference Implementation Notes

Use only the frontmatter tokens that have a matching `verification_v2.claims` path. The two promoted components preserve measured default geometry: the button includes the truthful zero-interaction state summary, and the static subscription link/row preserves its measured default fields without fabricated interactive states.

## 9. Verification Scope

Raw UI proof comes only from `artifacts/reference-evidence/lguplus.json`: Home, one public subscription product detail, and corporate About. Product, corporate, newsroom, font-license, and Tier 2 evidence are retained in separate domains in `.verification.md` and `_research.md`. The official company and current-brand narrative provides context; it does not create UI tokens.

## 10. Voice & Tone

The official Simply. U+ material describes a customer-centred effort to remove complexity, retain what is essential, and make telecom tasks easier to understand. The cues below are bounded implementation guidance derived from that stated direction, not an approved LG U+ copy manual: **plain**, **reassuring**, and **next-step oriented**.

| Do | Don't |
|---|---|
| Put the service outcome and next action close together. | Make a customer decode a technical term before learning its consequence. |
| Use everyday Korean service language for a practical task. | Hide conditions behind celebratory language. |
| Explain a choice in one clear step before adding detail. | Turn a routine telecom task into a dense multi-step instruction. |

Illustrative, not LG U+ copy: “요금제 확인하기”; “내게 맞는 혜택 보기”; “필요한 정보부터 확인하세요.”

## 11. Brand Narrative

LG유플러스 states that it has worked to make meaningful change in customers’ lives since its 1996 establishment. Its official company presentation spans personal mobile, home internet and IPTV, smart-home, AI, and enterprise services; the common narrative is connection and practical service value rather than a single consumer product.

The current evolution is Simply. U+. In official 2025 material, LG유플러스 describes the direction as reducing customers’ complexity and discomfort, leaving the essential, and building trustworthy, easier experiences. Simple Lab is presented as a channel for customer ideas to be proposed and shared through implementation. These are corporate and campaign facts, not evidence that all legacy pages already share a new visual system.

## 12. Principles

1. **Remove customer complexity.** *UI implication:* Put the immediate outcome and the required action together; do not add unmeasured interaction patterns.
2. **Keep what is essential.** *UI implication:* Prefer the observed white/ink foundation and purpose-specific magenta CTA over decorative color expansion.
3. **Make service choices understandable.** *UI implication:* Preserve surface-specific type and row geometry where it carries practical subscription information.
4. **Listen through customer participation.** *UI implication:* A feedback flow must be evidenced before it is treated as a reusable component pattern.

## 13. Personas

These are service-domain archetypes inferred from LG U+’s own public service categories, not surveyed personas, demographics, or observed product-flow behavior.

- **Mobile service customer:** compares plans, benefits, or device-related options on public service pages. No authenticated account behavior is claimed.
- **Home and family service customer:** evaluates internet, IPTV, or smart-home information. The capture does not establish household-management UI.
- **Enterprise service evaluator:** reviews AI, infrastructure, or security service information. No enterprise console pattern is inferred.

## 14. States

The supplied evidence reports `interactionCount: 0`; no state color, message, control, or animation specification is available. The categories below preserve that boundary rather than inventing brand facts.

| Category | Verified boundary |
|---|---|
| Empty | No captured empty-state treatment. |
| Loading | No captured loading treatment. |
| Error — validation | No captured validation-error treatment. |
| Error — service | No captured service-error treatment. |
| Success | No captured success treatment. |
| Skeleton | No captured skeleton treatment. |
| Disabled | No captured disabled treatment. |

## 15. Motion & Easing

No duration scale, easing curve, transition, carousel behavior, or motion-reduction rule is verified by the supplied static capture. Do not introduce a named LG U+ motion token from this reference. If motion is added to a new implementation, treat it as a local extension and document it separately from these verified tokens.
