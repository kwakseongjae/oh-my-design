---
id: "onestore"
name: "원스토어"
country: KR
category: ecommerce
homepage: "https://m.onestore.co.kr/"
primary_color: "#2a1f60"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=onestore.co.kr&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: store-home, kind: product-storefront, url: "https://m.onestore.co.kr/", inspected: "2026-07-13" }
    - { id: game-catalog, kind: product-storefront, url: "https://m.onestore.co.kr/v2/ko-kr/game", inspected: "2026-07-13" }
    - { id: oneplay-information, kind: product-information, url: "https://m.onestore.co.kr/v2/ko-kr/about/oneplay", inspected: "2026-07-13" }
    - { id: app-detail, kind: product-storefront, url: "https://m.onestore.co.kr/v2/ko-kr/app/0000117501/about", inspected: "2026-07-13" }
    - { id: developer-portal, kind: developer-product, url: "https://dev.onestore.net/dev", inspected: "2026-07-13" }
  sources:
    - { id: store-home-live, kind: product-surface, url: "https://m.onestore.co.kr/", captured: "2026-07-13" }
    - { id: game-catalog-live, kind: product-surface, url: "https://m.onestore.co.kr/v2/ko-kr/game", captured: "2026-07-13" }
    - { id: oneplay-live, kind: product-surface, url: "https://m.onestore.co.kr/v2/ko-kr/about/oneplay", captured: "2026-07-13" }
    - { id: app-detail-live, kind: product-surface, url: "https://m.onestore.co.kr/v2/ko-kr/app/0000117501/about", captured: "2026-07-13" }
    - { id: developer-portal-live, kind: product-surface, url: "https://dev.onestore.net/dev", captured: "2026-07-13" }
    - { id: company-about, kind: official-doc, url: "https://www.onestorecorp.com/about/corp/", captured: "2026-07-13" }
    - { id: customer-commitment, kind: official-doc, url: "https://onestorecorp.com/sv/ccm/", captured: "2026-07-13" }
    - { id: developer-support, kind: official-doc, url: "https://onestorecorp.com/sv/fordev/", captured: "2026-07-13" }
    - { id: brand-gallery, kind: brand-asset, url: "https://www.onestorecorp.com/brand/", captured: "2026-07-13" }
    - { id: mobile-font-assets, kind: brand-asset, url: "https://www.onestorecorp.com/sv/fordev_font/", captured: "2026-07-13" }
    - { id: mobile-font-commercial-use, kind: license, url: "https://onestorecorp.com/news/presskit/2021/2021-05-17.html", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.brand-surface": { surface_id: store-home, source_id: store-home-live, method: computed-style-aggregate, captured: "2026-07-13" }
    "tokens.colors.canvas": &store_home { surface_id: store-home, source_id: store-home-live, method: computed-style, selector: "home::body", captured: "2026-07-13" }
    "tokens.colors.foreground": *store_home
    "tokens.colors.secondary-foreground": { surface_id: store-home, source_id: store-home-live, method: computed-style, selector: "home::li", captured: "2026-07-13" }
    "tokens.typography.body.size": *store_home
    "tokens.typography.body.weight": *store_home
    "tokens.typography.body.lineHeight": *store_home
    "tokens.typography.body.use": *store_home
    "tokens.colors.developer-surface": &developer { surface_id: developer-portal, source_id: developer-portal-live, method: computed-style, selector: "surface-5::[data-omd-capture=10]", captured: "2026-07-13" }
    "tokens.colors.developer-border": &developer_input { surface_id: developer-portal, source_id: developer-portal-live, method: computed-style, selector: "surface-5::[data-omd-capture=12]", captured: "2026-07-13" }
    "tokens.typography.developer-control.size": *developer
    "tokens.typography.developer-control.weight": *developer
    "tokens.typography.developer-control.use": *developer
    "tokens.spacing.developer-button-x": *developer
    "tokens.spacing.developer-input-y": *developer_input
    "tokens.spacing.developer-input-x": *developer_input
    "tokens.rounded.square": *store_home
    "tokens.components.developer-basic-button.type": *developer
    "tokens.components.developer-basic-button.bg": *developer
    "tokens.components.developer-basic-button.fg": *developer
    "tokens.components.developer-basic-button.border": *developer
    "tokens.components.developer-basic-button.radius": *developer
    "tokens.components.developer-basic-button.padding": *developer
    "tokens.components.developer-basic-button.height": *developer
    "tokens.components.developer-basic-button.font": *developer
    "tokens.components.developer-basic-button.states": *developer
    "tokens.components.developer-basic-button.use": *developer
    "tokens.components.developer-login-input.type": *developer_input
    "tokens.components.developer-login-input.bg": *developer_input
    "tokens.components.developer-login-input.fg": *developer_input
    "tokens.components.developer-login-input.border": *developer_input
    "tokens.components.developer-login-input.radius": *developer_input
    "tokens.components.developer-login-input.padding": *developer_input
    "tokens.components.developer-login-input.height": *developer_input
    "tokens.components.developer-login-input.font": *developer_input
    "tokens.components.developer-login-input.states": *developer_input
    "tokens.components.developer-login-input.use": *developer_input
tokens:
  source: live-extract
  extracted: "2026-07-13"
  components_harvested: true
  note: "Machine tokens are limited to selector-backed values from the supplied One Store storefront and developer-portal capture. Corporate brand, font, and developer-support material remain separate evidence domains."
  colors:
    brand-surface: "#2a1f60"
    canvas: "#ffffff"
    foreground: "#000000"
    secondary-foreground: "#454545"
    developer-surface: "#efefef"
    developer-border: "#767676"
  typography:
    body: { size: 15, weight: 400, lineHeight: 1.46, use: "Storefront body sample; computed system stack is not a brand font" }
    developer-control: { size: 13.3333, weight: 400, use: "Developer-portal button and input sample; computed Arial is a system font" }
  spacing: { developer-button-x: 20, developer-input-y: 1, developer-input-x: 2 }
  rounded: { square: 0 }
  components:
    developer-basic-button: { type: button, bg: "#efefef", fg: "#000000", border: "2px solid #000000", radius: "0px", padding: "0px 20px", height: "50px", font: "13.3333px / 400 Arial", states: "Default observed only; interactionCount is 0, so no hover, focus, pressed, disabled, or error value is asserted", use: "Developer portal GeneralButton-module__box___leAwc.large at surface-5::[data-omd-capture=10]" }
    developer-login-input: { type: input, bg: "#ffffff", fg: "#000000", border: "2px solid #767676", radius: "0px", padding: "1px 2px", height: "21px", font: "13.3333px / 400 Arial", states: "Default observed only; interactionCount is 0, so no hover, focus, pressed, disabled, or error value is asserted", use: "Developer portal LoginField-module__loginField___7ReTE at surface-5::[data-omd-capture=12]" }
---
# Design System Inspiration of 원스토어

## 1. Visual Theme & Atmosphere

원스토어 is a Korean mobile-content marketplace spanning games, apps, and story content. It was launched in 2016 by combining the three mobile-carrier app markets with Naver App Store, after the T Store business moved from SK Planet to One store Co., Ltd. Its official company narrative calls for a platform that is closer, more open, and more fun, and its current public messaging centres on “쏠쏠하게 앱하다” and enjoyable game life. The supplied capture shows a deliberately split public ecosystem rather than one universal UI: the consumer storefront is a mostly white, black-text surface with a sparse dark-purple background occurrence, while the separately captured developer portal uses conventional square system controls. The official corporate brand gallery, free mobile-font program, developer-support material, and storefront are related but distinct domains; this reference keeps their evidence boundaries intact. [Company history](https://www.onestorecorp.com/about/corp/) · [Customer commitment](https://onestorecorp.com/sv/ccm/)

## 2. Color Palette & Roles

### Selector-backed surface values

- **Brand-surface candidate** (`#2A1F60`): observed twice as a background on the captured storefront home route. It is retained as a narrow surface observation and catalog identity color, not as a universal action color.
- **Canvas** (`#FFFFFF`): observed across all five captured surfaces.
- **Foreground** (`#000000`): the dominant observed text and border value across all five captured surfaces.
- **Storefront secondary text** (`#454545`): repeated on home-route list items.
- **Developer control surface** (`#EFEFEF`) and **developer input border** (`#767676`): observed only on `dev.onestore.net`; they do not define the consumer marketplace palette.

No semantic success, error, selected, hover, pressed, or CTA color is specified. `#0000EE` appears on the developer portal, but the supplied evidence does not establish it as a One Store brand value, so it is not promoted.

## 3. Typography Rules

### Evidence classes

- **Live computed storefront use:** the main storefront’s visible samples resolve to `helvetica, "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", Arial, sans-serif`. The collector classifies this as a high-confidence operating-system stack; no loaded FontFace/source supports a One Store-owned UI family. The measured 15px / 400 / 21.9px body metrics remain useful, but the stack is not emitted as a brand font token.
- **Live computed developer-product use:** the developer portal samples use system `Arial` at 13.3333px / 400. The portal’s `geistSans`, `geistMono`, and `notoSansKr` faces are declared-only in the supplied evidence; none had visible usage and none is promoted.
- **Official distributed brand assets:** One Store publicly distributes Mobile Gothic Body, Mobile Gothic Title, and Mobile Gothic POP. The company describes the Body face as mobile-optimised and modern/comfortable, the Title face as stable and firm, and POP as a lively handwritten face. These are useful font assets, not evidence that the captured storefront loads them. [Official font page](https://www.onestorecorp.com/sv/fordev_font/)
- **Official licence/use boundary:** the company’s launch announcement says the three fonts are free and commercially usable. That establishes distribution/use terms, not consumer-storefront deployment. [Font announcement](https://onestorecorp.com/news/presskit/2021/2021-05-17.html)
- **Unresolved:** `Times` appears in sparse developer-portal samples without a matching loaded FontFace or official product-use evidence; it is omitted.

### Measured hierarchy

| Role | Size | Weight | Line height | Evidence boundary |
|------|------|--------|-------------|-------------------|
| Storefront body | 15px | 400 | 21.9px | Home-route computed system stack |
| Storefront secondary list text | 14px | 400 | 20px | Home-route list items |
| Developer control | 13.3333px | 400 | normal | Developer portal system Arial samples |

## 4. Component Stylings

### Developer portal controls

**General button — observed default**
- Background: #EFEFEF
- Text: #000000
- Border: 2px solid #000000
- Radius: 0px
- Padding: 0px 20px
- Height: 50px
- Font: 13.3333px / 400 / Arial
- Use: `GeneralButton-module__box___leAwc.large` at `surface-5::[data-omd-capture="10"]`; default only.

**Login input — observed default**
- Background: #FFFFFF
- Text: #000000
- Border: 2px solid #767676
- Radius: 0px
- Padding: 1px 2px
- Height: 21px
- Font: 13.3333px / 400 / Arial
- Use: `LoginField-module__loginField___7ReTE` at `surface-5::[data-omd-capture="12"]`; default only.

The evidence records no interaction snapshots or observed states. The two default controls above remain available because their selector, surface, and computed geometry are present; hover, focus, pressed, disabled, and error values are absent. Storefront links and rows are documented only as list items in the raw evidence and are not relabelled as buttons.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://m.onestore.co.kr/; https://m.onestore.co.kr/v2/ko-kr/game; https://m.onestore.co.kr/v2/ko-kr/about/oneplay; https://m.onestore.co.kr/v2/ko-kr/app/0000117501/about; https://dev.onestore.net/dev; https://www.onestorecorp.com/about/corp/; https://onestorecorp.com/sv/ccm/; https://www.onestorecorp.com/sv/fordev_font/
**Tier 2 sources:** https://getdesign.md/onestore (attempted; endpoint returned an internal error/no usable record); https://styles.refero.design/?q=onestore (attempted; endpoint returned an internal error/no usable record)
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied bundle covers five 1440×900 routes but does not establish a single cross-domain layout system. On the developer portal, the observed button is 180×50px and the input is 153×21px; these are individual control measurements, not a consumer-marketplace grid. The storefront’s only retained measurement is its system-stack body text and sparse list-item geometry. No product-card grid, breakpoint, sticky header, or responsive rule is claimed.

## 6. Depth & Elevation

The retained button and input samples have `box-shadow: none`. No elevated card, panel, menu, toast, dialog, or overlay value was backed by the supplied selector/state evidence, so no elevation token is included.

## 7. Do's and Don'ts

### Do

- Keep consumer storefront, developer portal, corporate brand assets, and font distribution as separately evidenced domains.
- Reuse the recorded developer button or input only at their documented default geometry and source surface.
- Treat One Store Mobile Gothic as an official distributable brand asset, not a verified storefront webfont.
- Preserve the measured storefront body metrics without silently substituting a claimed brand typeface.

### Don't

- Do not turn the narrow `#2A1F60` background observation into a universal CTA or product palette.
- Do not use `geistSans`, `geistMono`, `notoSansKr`, Times, Arial, Helvetica, or a system fallback as though it were an observed One Store brand UI font.
- Do not reclassify observed links/rows as buttons or infer components from generic marketplace conventions.
- Do not add hover, focus, pressed, disabled, error, selected, responsive, or motion values from this capture.

## 8. Responsive Behavior

All supplied surfaces were captured at 1440×900. No mobile viewport, breakpoint, touch-target rule, responsive grid, or alternate navigation state is evidenced. The mobile hostname in the storefront URL is not itself evidence for a responsive implementation rule.

## 9. Agent Prompt Guide

“Treat One Store as a Korean mobile-content marketplace with separate storefront, developer, corporate-brand, and font-asset evidence. For the documented developer portal default, use a square #EFEFEF button with a 2px black border, 0px 20px padding, 50px height, and system Arial metrics; pair it only with the measured square white login input. Preserve the storefront’s white/black baseline and narrow #2A1F60 background observation. Do not synthesize a consumer CTA, card, brand webfont, interaction state, responsive pattern, or elevation system.”

## 10. Voice & Tone

The official corporate voice is open, benefit-aware, and playfully mobile-native. Its public language frames the service around more enjoyable game life and a platform that is closer, more open, and more fun, while the customer-commitment page keeps the decision frame on compelling choices for creators and consumers. This is corporate and service-principle context, not evidence for unobserved store labels or flows. [Company introduction](https://www.onestorecorp.com/about/corp/) · [Customer commitment](https://onestorecorp.com/sv/ccm/)

| Do | Don't |
|----|-------|
| Describe a concrete benefit or choice in plain language. | Attribute unobserved purchase, error, or account copy to the storefront. |
| Keep creator and consumer value in the same frame where the source does. | Treat corporate slogan language as a UI token. |
| Use playful energy only when it supports a real mobile-content context. | Invent a youth audience, demographic, or game-specific tone rule. |

**Voice samples.**

- “더 쏠쏠하게 앱하다” — current corporate/service slogan. <!-- verified: onestorecorp.com/about/corp 2026-07-13 -->
- “슬기로운 게임생활을 만듭니다” — official company framing. <!-- verified: onestorecorp.com/about/corp 2026-07-13 -->
- “To provide compelling choices to make creators and consumers happier on our digital content platform” — official mission statement. <!-- verified: onestorecorp.com/sv/ccm 2026-07-13 -->

## 11. Brand Narrative

One Store traces its operating history to the 2016 transfer of T Store from SK Planet, its company establishment, and the launch that combined the three mobile-carrier app markets with Naver App Store. That origin explains the platform’s explicit concern with both consumers and content partners rather than a single retail category. The company’s current description centres games, apps, and story content, seeking a more open and enjoyable platform experience. [Company history](https://www.onestorecorp.com/about/corp/)

The current story also has an ecosystem dimension. The company records a 2024 investment/cooperation arrangement with Digital Turbine for overseas expansion, while its developer-support program describes long-running support for mobile-game developers and creator pathways. These are corporate and partner-program facts, not evidence that the public storefront or developer portal shares a single component system. [Company history](https://www.onestorecorp.com/about/corp/) · [Developer support](https://onestorecorp.com/sv/fordev/)

In 2021, the company made three mobile fonts publicly available and described them as suitable for commercial use. That release expands its brand-asset footprint, but no supplied loaded-font evidence connects the fonts to the captured consumer storefront. [Font release](https://onestorecorp.com/news/presskit/2021/2021-05-17.html)

## 12. Principles

1. **Offer compelling choices for creators and consumers.** The official mission joins both stakeholder groups in one digital-content platform. *UI implication:* make a verified choice or benefit legible without inventing a checkout, ranking, or recommendation rule.
2. **Keep mobile content enjoyable.** The company describes a goal of more enjoyable mobile and game life. *UI implication:* use a clear, light hierarchy where actual content or benefit evidence exists; do not add decorative game tropes as a default.
3. **Support the ecosystem.** Official developer-support material describes developer, game-industry, and creator programs. *UI implication:* distinguish developer-facing controls from consumer-storefront patterns instead of collapsing them into one UI kit.
4. **Put customers first.** The company’s customer commitment calls for understanding what customers want and acting on feedback. *UI implication:* communicate confirmed outcomes and boundaries plainly; do not hide missing state evidence behind generic reassurance.

## 13. Personas

*The company names creators, consumers, and developers in first-party material, but no first-party persona research or demographic segmentation was collected. The archetypes below are stakeholder boundaries, not fictional user profiles.*

- **Consumer of mobile content:** a service stakeholder named in the mission. Specific browsing, payment, and retention behaviour is not asserted.
- **Creator or developer:** a stakeholder named in the mission and developer-support material. Specific tool needs and workflow stages are not asserted.
- **[FILL IN: user-provided primary storefront task and context]**

## 14. States

No state-specific UI was observed: the supplied bundle has `interactionCount: 0` and `observedStates: 0`. The following state categories are intentionally unspecified until a relevant product-surface selector/value pair is captured.

| Category | Evidence status |
|----------|-----------------|
| Empty | No observed state |
| Loading | No observed state |
| Error | No observed state |
| Success | No observed state |
| Skeleton | No observed state |
| Disabled | No observed state |

## 15. Motion & Easing

No transition duration, easing curve, animation, expanded state, or interaction sequence was captured. Do not assign motion tokens or infer a motion style from static illustrations, corporate videos, or generic platform behaviour.
