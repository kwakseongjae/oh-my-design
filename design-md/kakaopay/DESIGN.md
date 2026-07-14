---
id: kakaopay
name: KakaoPay
country: KR
category: fintech
homepage: "https://www.kakaopay.com"
primary_color: "#ffeb00"
logo:
  type: favicon
  slug: "https://t1.kakaocdn.net/kakaopay/icons/web/192-brand.png"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: KakaoPay design story
  url: "https://story.kakaopay.com/225-kakaopay-design/"
  type: brand
  description: Official KakaoPay article describing its graphic-accessibility work; it is not a public component library.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: marketing-main, kind: marketing, url: "https://www.kakaopay.com/main", inspected: "2026-07-13" }
    - { id: design-story, kind: marketing-content, url: "https://story.kakaopay.com/225-kakaopay-design/", inspected: "2026-07-13" }
    - { id: story-home, kind: marketing-content, url: "https://story.kakaopay.com/", inspected: "2026-07-13" }
    - { id: corporate-service, kind: corporate-service, url: "https://www.kakaocorp.com/page/service/service/KakaoPay", inspected: "2026-07-13" }
    - { id: font-resource, kind: brand-asset, url: "https://www.kakaocorp.com/page/detail/11571", inspected: "2026-07-13" }
    - { id: developer-docs, kind: documentation, url: "https://developers.kakaopay.com/docs/payment/online/reference", inspected: "2026-07-13" }
  sources:
    - { id: marketing-main-live, kind: product-surface, url: "https://www.kakaopay.com/main", captured: "2026-07-13" }
    - { id: story-live, kind: product-surface, url: "https://story.kakaopay.com/", captured: "2026-07-13" }
    - { id: design-story-doc, kind: official-doc, url: "https://story.kakaopay.com/225-kakaopay-design/", captured: "2026-07-13" }
    - { id: corporate-service-live, kind: product-surface, url: "https://www.kakaocorp.com/page/service/service/KakaoPay", captured: "2026-07-13" }
    - { id: font-resource-doc, kind: brand-asset, url: "https://www.kakaocorp.com/page/detail/11571", captured: "2026-07-13" }
    - { id: developer-docs-live, kind: official-doc, url: "https://developers.kakaopay.com/docs/payment/online/reference", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.ink": &corporate { surface_id: corporate-service, source_id: corporate-service-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.text": *corporate
    "tokens.colors.muted": *corporate
    "tokens.colors.subtle": *corporate
    "tokens.colors.canvas": *corporate
    "tokens.colors.surface": *corporate
    "tokens.colors.surface-soft": *corporate
    "tokens.typography.family.sans": *corporate
    "tokens.typography.family.display": *corporate
    "tokens.typography.card-title.size": *corporate
    "tokens.typography.card-title.weight": *corporate
    "tokens.typography.card-title.lineHeight": *corporate
    "tokens.typography.card-title.tracking": *corporate
    "tokens.typography.card-title.use": *corporate
    "tokens.typography.public-body.size": *corporate
    "tokens.typography.public-body.weight": *corporate
    "tokens.typography.public-body.lineHeight": *corporate
    "tokens.typography.public-body.tracking": *corporate
    "tokens.typography.public-body.use": *corporate
    "tokens.typography.utility.size": *corporate
    "tokens.typography.utility.weight": *corporate
    "tokens.typography.utility.lineHeight": *corporate
    "tokens.typography.utility.tracking": *corporate
    "tokens.typography.utility.use": *corporate
    "tokens.spacing.compact": *corporate
    "tokens.spacing.control": *corporate
    "tokens.spacing.card": *corporate
    "tokens.rounded.none": *corporate
    "tokens.rounded.card": *corporate
    "tokens.rounded.search": *corporate
    "tokens.rounded.action": *corporate
    "tokens.rounded.pill": *corporate
    "tokens.shadow.none": *corporate
    "tokens.components.corporate-menu.type": *corporate
    "tokens.components.corporate-menu.bg": *corporate
    "tokens.components.corporate-menu.fg": *corporate
    "tokens.components.corporate-menu.radius": *corporate
    "tokens.components.corporate-menu.padding": *corporate
    "tokens.components.corporate-menu.font": *corporate
    "tokens.components.corporate-menu.states": *corporate
    "tokens.components.corporate-menu.use": *corporate
    "tokens.components.corporate-search.type": *corporate
    "tokens.components.corporate-search.bg": *corporate
    "tokens.components.corporate-search.fg": *corporate
    "tokens.components.corporate-search.radius": *corporate
    "tokens.components.corporate-search.padding": *corporate
    "tokens.components.corporate-search.font": *corporate
    "tokens.components.corporate-search.states": *corporate
    "tokens.components.corporate-search.use": *corporate
    "tokens.components.corporate-card.type": *corporate
    "tokens.components.corporate-card.bg": *corporate
    "tokens.components.corporate-card.fg": *corporate
    "tokens.components.corporate-card.radius": *corporate
    "tokens.components.corporate-card.padding": *corporate
    "tokens.components.corporate-card.font": *corporate
    "tokens.components.corporate-card.use": *corporate
    "tokens.components.corporate-tag.type": *corporate
    "tokens.components.corporate-tag.bg": *corporate
    "tokens.components.corporate-tag.fg": *corporate
    "tokens.components.corporate-tag.radius": *corporate
    "tokens.components.corporate-tag.padding": *corporate
    "tokens.components.corporate-tag.font": *corporate
    "tokens.components.corporate-tag.use": *corporate
tokens:
  source: reconciled
  extracted: "2026-07-13"
  colors:
    ink: "#000000"
    text: "#333333"
    muted: "#666666"
    subtle: "#888888"
    canvas: "#ffffff"
    surface: "#f3f3f3"
    surface-soft: "#eeeeee"
  typography:
    family: { sans: "KakaoSmall", display: "KakaoBig" }
    card-title: { size: 26, weight: 700, lineHeight: 1.38, tracking: -0.6, use: "Observed corporate-service card title only." }
    public-body: { size: 14, weight: 400, lineHeight: 1.5, tracking: 0, use: "Observed corporate-service list and card copy only." }
    utility: { size: 12, weight: 400, lineHeight: 1.5, tracking: -0.2, use: "Observed corporate-service utility link only." }
  spacing: { compact: 4, control: 16, card: 32 }
  rounded: { none: 0, card: 16, search: 18, action: 24, pill: 999 }
  shadow: { none: "none" }
  components_harvested: true
  components:
    corporate-menu: { type: button, bg: "#ffffff", fg: "#000000", radius: 999, padding: "4px 16px 6px", font: "17px/400 KakaoBig", states: "hover and pressed labels observed on .item_menu; the artifact contains no interaction snapshots.", use: "surface-3::[data-omd-capture=\"1\"] on the Kakao corporate service page, not a KakaoPay payment-app control." }
    corporate-search: { type: button, bg: "#eeeeee", fg: "#333333", radius: 18, padding: "0px", font: "14px/400 KakaoSmall", states: "hover and pressed labels observed on .btn_search; the artifact contains no interaction snapshots.", use: "surface-3::[data-omd-capture=\"7\"] on the Kakao corporate service page." }
    corporate-card: { type: card, bg: "#f3f3f3", fg: "#333333", radius: 16, padding: "0px", font: "14px/400 KakaoSmall", use: "surface-3::div.item_card_new.item_normal_card on the Kakao corporate service page." }
    corporate-tag: { type: badge, bg: "#eeeeee", fg: "#000000", radius: 34, padding: "0px 15px", font: "13px/400 KakaoBig", use: "surface-3::[data-omd-capture=\"26\"].link_tag on the Kakao corporate service page." }
---

# Design System Inspiration of KakaoPay

## 1. Visual Theme & Atmosphere

KakaoPay is a Korean financial platform whose public main site presents everyday payment, money-management, and financial services under the line “마음 놓고 금융하다.” Its official payment page describes card- and cash-free payment, including biometric verification, while the partner site describes the merchant flow from a shopper’s payment click through authentication and completion. The current public expression therefore frames finance as an everyday action rather than as a separate institutional task. [Main site](https://www.kakaopay.com/main) · [Payment service](https://www.kakaopay.com/services/life/payment?t_ch=membership&t_src=homepage) · [Partner introduction](https://partner.kakaopay.com/partner/online/introduction)

KakaoPay’s 2024 design article makes the visual rationale unusually explicit: graphics were rebuilt for accessibility and operational reuse, replacing black-line graphics with filled forms, requiring a minimum 3:1 contrast between graphic color and adjacent background, and separating graphics into icon, 2D, and 3D levels by information priority. It characterizes the desired expression as simple and clear, warm and soft in color, and rounded and soft in line. Those are editorial and graphic-system principles, not permission to infer a private payment-app component kit. The supplied capture covers the KakaoPay story and Kakao corporate service pages; its selector-backed controls come only from the latter.

**Key Characteristics:**

- Everyday-finance product framing on official KakaoPay marketing and merchant surfaces
- Official graphic direction: clear filled forms, warm/soft color, rounded/soft lines
- A documented 3:1 minimum graphic-to-background contrast target
- Loaded KakaoSmall and KakaoBig on the captured corporate service page
- Corporate service controls, marketing content, developer documentation, and unobserved authenticated payment flows kept separate

## 2. Color Palette & Roles

### Observed corporate-service chrome

- **Ink** (`#000000`): observed menu text and dark menu fill on the Kakao corporate service page.
- **Text** (`#333333`): observed corporate-service control, card, and list text.
- **Muted** (`#666666`) and **subtle** (`#888888`): observed secondary corporate-service text.
- **Canvas** (`#ffffff`): observed corporate-service menu background.
- **Surface** (`#f3f3f3`): observed corporate-service menu-hover and service-card background.
- **Surface soft** (`#eeeeee`): observed corporate-service search and tag background.

### Official graphic guidance

The official KakaoPay design article establishes contrast and a newly made graphic palette, but the readable article does not publish hexadecimal values for a general KakaoPay product palette. The catalog’s existing `primary_color` is not promoted into the reconciled token block, and no observed corporate value is relabeled as a payment-app CTA, semantic status color, or brand-color replacement.

## 3. Typography Rules

### Evidence classes

- **Live computed surface-use:** **KakaoSmall** is computed on 156 elements and **KakaoBig** on 45 elements in the supplied three-route artifact. Both have a high-confidence loaded FontFaceSet match and Kakao CDN `@font-face` sources. This verifies their use on the captured story/corporate public surfaces, not in an authenticated KakaoPay app.
- **Official distributed brand asset and license:** Kakao’s official font resource describes Kakao Big as the display-oriented face and Kakao Small as the body/caption-oriented face. It says the pair is available under OFL for personal and commercial use. This parent-company distribution evidence explains the family and licensing boundary; it is not a statement that every Kakao service uses it. [Official font resource](https://www.kakaocorp.com/page/detail/11571)
- **Declared-only:** **KakaoDigitLatin** has four declared CDN font-face sources in the artifact but no visible computed use, so it is not a UI token.
- **Declared/system fallback:** Apple SD Gothic Neo, Malgun Gothic, and 맑은 고딕 occur after the loaded Kakao families in captured declarations. They are fallback context, not KakaoPay font substitutions.
- **Unresolved:** Helvetica Neue appears in a small number of computed observations without a matching loaded FontFace or source URL. It is omitted from tokens.

### Observed hierarchy

| Role | Family | Size | Weight | Line height | Boundary |
|------|--------|------|--------|-------------|----------|
| Corporate card title | KakaoBig | 26px | 700 | 36px | `surface-3::strong.tit_card` only |
| Corporate public body | KakaoSmall | 14px | 400 | 21px | Corporate service lists and cards only |
| Corporate utility link | KakaoSmall | 12px | 400 | 18px | Corporate service utility links only |

## 4. Component Stylings

### Kakao corporate service page

**Menu action — observed default**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 999px
- Padding: 4px 16px 6px
- Font: 17px / 400 / KakaoBig
- Hover: `#f3f3f3` background (collector label)
- Pressed: collector label observed; no separate snapshot value captured
- Use: `surface-3::[data-omd-capture="1"]` (`.item_menu`) on `www.kakaocorp.com/page/service/service/KakaoPay`; this is corporate navigation chrome.

**Search action — observed default**
- Text: `#333333`
- Radius: 18px
- Padding: 0px
- Font: 14px / 400 / KakaoSmall
- Hover: `#eeeeee` background (collector label)
- Pressed: collector label observed; no separate snapshot value captured
- Use: `surface-3::[data-omd-capture="7"]` (`.btn_search`) on the same corporate service page.

**Service card — observed default**
- Background: `#f3f3f3`
- Text: `#333333`
- Radius: 16px
- Padding: 0px
- Font: 14px / 400 / KakaoSmall
- Use: `surface-3::div.item_card_new.item_normal_card`, a corporate Kakao service-directory card.

**Topic tag — observed default**
- Background: `#eeeeee`
- Text: `#000000`
- Radius: 34px
- Padding: 0px 15px
- Font: 13px / 400 / KakaoBig
- Use: `surface-3::[data-omd-capture="26"]` (`.link_tag`) on the corporate service page.

The collector records no interaction snapshots (`interactionCount: 0`). Hover and pressed labels above are preserved as labels rather than expanded into unobserved variants. No selector-backed KakaoPay payment-app button, input, receipt, account card, transaction row, toast, sheet, error, success, or mobile navigation component was captured.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.kakaopay.com/main; https://www.kakaopay.com/services/life/payment?t_ch=membership&t_src=homepage; https://story.kakaopay.com/; https://story.kakaopay.com/225-kakaopay-design/; https://www.kakaocorp.com/page/service/service/KakaoPay; https://www.kakaocorp.com/page/detail/11571; https://developers.kakaopay.com/docs/payment/online/reference
**Tier 2 sources:** https://getdesign.md/kakaopay (attempted through built-in web search; no usable record returned); https://styles.refero.design/?q=kakaopay (attempted through built-in web search; no usable style record returned)
**Conflicts unresolved:** none

The previous reference mixed unsupported Noto Sans KR, inferred payment-app components, semantic colors, motion, and responsive rules into public/corporate evidence. This update retains selector- and source-backed values at their own source-domain boundary.

## 5. Layout Principles

The supplied artifact has a corporate service page, a KakaoPay story home, and a KakaoPay design article. It does not expose an authenticated product layout. The selector-backed corporate card uses 32px horizontal inner-card padding, while observed spacing values also include 4px and 16px in public controls. No payment-app grid, safe-area rule, checkout layout, or responsive breakpoint is asserted.

## 6. Depth & Elevation

The representative captured controls and card use `box-shadow: none`. No public evidence in this pass establishes a KakaoPay elevation scale, modal shadow, bottom sheet, or floating action treatment.

## 7. Do's and Don'ts

### Do

- Use the official graphic direction—clear filled forms, warm/soft color, and rounded/soft lines—when a task is specifically about KakaoPay graphics.
- Check graphic/background contrast against the official 3:1 minimum described by KakaoPay.
- Keep KakaoSmall/KakaoBig claims tied to the captured public/corporate surfaces and their official distribution context.
- Preserve the provenance of the four recorded corporate controls.

### Don't

- Do not treat corporate directory chrome as a KakaoPay authenticated payment screen.
- Do not substitute a system font and call it KakaoSmall or KakaoBig.
- Do not invent payment states, semantic colors, responsive rules, or component variants from the marketing article.
- Do not promote KakaoDigitLatin or Helvetica Neue into the UI family without visible loaded use.

## 8. Responsive Behavior

No mobile viewport or responsive-state evidence is included in the supplied artifact. The official product and partner pages establish that payment is offered across PC, mobile web, and mobile app contexts, but they do not provide a public responsive component specification in the material reviewed here.

## 9. Agent Prompt Guide

Use this reference as a bounded public-surface guide. For a corporate-service-style menu, use a white `#ffffff` pill with black `#000000` text, 999px radius, 4px 16px 6px padding, and 17px KakaoBig only with the documented corporate-page provenance. For product work, keep the official graphic principles—clarity, warm/soft color, rounded/soft lines, and graphic contrast—separate from unobserved financial-app controls.

## 10. Voice & Tone

Official public copy frames the service as “마음 놓고 금융하다” and explains payment with direct, everyday language such as paying without cards or cash. The partner surface similarly uses short, instructional statements for merchant onboarding. That supports a plain, reassuring public register; it does not establish a private in-app microcopy guide. [Main site](https://www.kakaopay.com/main) · [Partner introduction](https://partner.kakaopay.com/partner/online/introduction)

## 11. Brand Narrative

KakaoPay presents payment, money management, and financial services as activities that can sit inside everyday life. Its official payment page focuses on immediate payment and biometric verification, while its partner page describes a four-step online-payment journey from a merchant checkout click to completion. [Payment service](https://www.kakaopay.com/services/life/payment?t_ch=membership&t_src=homepage) · [Partner introduction](https://partner.kakaopay.com/partner/online/introduction)

Its design story adds a complementary rationale: accessibility and operational efficiency were explicit goals of a graphic-system redesign, and the work continues as the service evolves. That evidence supports the narrative of accessible, reusable graphic communication; it does not substantiate historical, market-share, or user-persona claims not present in these sources. [Design story](https://story.kakaopay.com/225-kakaopay-design/)

## 12. Principles

1. **Graphic accessibility is a product concern.** The official article requires at least 3:1 contrast between a graphic color and adjacent background. *UI implication:* measure graphic contrast instead of assuming yellow or any other familiar brand cue will work in context.
2. **Make graphic information clear.** KakaoPay describes replacing black-line graphics with filled forms to reduce visual collision with text. *UI implication:* preserve a clear text/graphic distinction when using the documented graphic approach.
3. **Match visual detail to information priority.** The article differentiates icon, 2D, and 3D graphic levels. *UI implication:* do not mix tiers merely as decoration; choose the level for the information hierarchy.
4. **Support reuse without flattening context.** The redesign consolidated more than one thousand graphics for organization-wide use. *UI implication:* retain source and context metadata when reusing an observed asset or control.

## 13. Personas

No official persona research was reviewed in this reverify packet. The public sources identify broad audiences—people using KakaoPay for everyday payments and merchants integrating online payments—but do not support named, demographic, or behavioral personas. Those fields remain intentionally unfilled rather than fabricated.

## 14. States

The reviewed public developer reference documents API error responses and error codes, while the supplied UI artifact records no interaction snapshots. This supports neither a visual error-state specification nor payment success/loading/empty-state components. For implementation, use the endpoint’s documented error code/message contract and obtain a product-surface capture before defining visual state tokens. [Developer reference](https://developers.kakaopay.com/docs/payment/online/reference)

## 15. Motion & Easing

No motion durations, easing curves, reduced-motion behavior, or animated payment-state evidence was captured. Motion tokens are omitted.
