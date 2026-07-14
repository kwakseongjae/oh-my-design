---
id: tossbank
name: Toss Bank
display_name_kr: 토스뱅크
country: KR
category: fintech
homepage: "https://www.tossbank.com"
primary_color: "#0064FF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Toss Brand Resource Center
  url: "https://brand.toss.im/"
  type: brand
  description: Official Toss group mark and color guidance; it is not a Toss Bank product-UI token source.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.tossbank.com/", inspected: "2026-07-12" }
    - { id: product-disclosure, kind: documentation, url: "https://www.tossbank.com/customer/product-disclosure", inspected: "2026-07-12" }
    - { id: protected-products, kind: documentation, url: "https://www.tossbank.com/customer/protected-products", inspected: "2026-07-12" }
    - { id: brand-assets, kind: brand-assets, url: "https://brand.toss.im/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.tossbank.com/", captured: "2026-07-12" }
    - { id: disclosure-live, kind: product-surface, url: "https://www.tossbank.com/customer/product-disclosure", captured: "2026-07-12" }
    - { id: protected-live, kind: product-surface, url: "https://www.tossbank.com/customer/protected-products", captured: "2026-07-12" }
    - { id: brand-resource, kind: brand-asset, url: "https://brand.toss.im/", captured: "2026-07-13" }
    - { id: tps-history, kind: official-doc, url: "https://toss.im/tossfeed/article/beginning-of-tps", captured: "2026-07-13" }
    - { id: tds-design-tool, kind: official-doc, url: "https://developers-apps-in-toss.toss.im/design/prepare/design.html", captured: "2026-07-13" }
    - { id: bank-story, kind: official-doc, url: "https://www.tossbank.com/ten-million", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.brand": &brand { surface_id: brand-assets, source_id: brand-resource, method: official-doc, captured: "2026-07-13" }
    "tokens.colors.brand-gray": *brand
    "tokens.colors.primary": &live { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": &docs { surface_id: protected-products, source_id: protected-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.foreground": *live
    "tokens.colors.foreground-strong": *docs
    "tokens.colors.foreground-secondary": *docs
    "tokens.colors.muted": *live
    "tokens.colors.hairline": *live
    "tokens.colors.border": *live
    "tokens.colors.surface-muted": *docs
    "tokens.typography.family.sans": *live
    "tokens.typography.marketing-title.size": *live
    "tokens.typography.marketing-title.weight": *live
    "tokens.typography.marketing-title.lineHeight": *live
    "tokens.typography.marketing-title.use": *live
    "tokens.typography.navigation.size": *live
    "tokens.typography.navigation.weight": *live
    "tokens.typography.navigation.lineHeight": *live
    "tokens.typography.navigation.use": *live
    "tokens.typography.docs-body.size": *docs
    "tokens.typography.docs-body.weight": *docs
    "tokens.typography.docs-body.lineHeight": *docs
    "tokens.typography.docs-body.use": *docs
    "tokens.typography.docs-utility.size": *docs
    "tokens.typography.docs-utility.weight": *docs
    "tokens.typography.docs-utility.lineHeight": *docs
    "tokens.typography.docs-utility.use": *docs
    "tokens.spacing.xs": *live
    "tokens.spacing.sm": *live
    "tokens.spacing.md": *live
    "tokens.spacing.lg": *live
    "tokens.spacing.xl": *live
    "tokens.rounded.none": *live
    "tokens.rounded.compact": *live
    "tokens.rounded.pill": *docs
    "tokens.shadow.none": *live
    "tokens.components.docs-outline-button.type": *docs
    "tokens.components.docs-outline-button.fg": *docs
    "tokens.components.docs-outline-button.radius": *docs
    "tokens.components.docs-outline-button.padding": *docs
    "tokens.components.docs-outline-button.font": *docs
    "tokens.components.docs-outline-button.states": *docs
    "tokens.components.docs-outline-button.use": *docs
    "tokens.components.docs-tab.type": *docs
    "tokens.components.docs-tab.fg": *docs
    "tokens.components.docs-tab.padding": *docs
    "tokens.components.docs-tab.font": *docs
    "tokens.components.docs-tab.states": *docs
    "tokens.components.docs-tab.use": *docs
tokens:
  source: reconciled
  extracted: "2026-07-12"
  colors:
    brand: "#0064ff"
    brand-gray: "#202632"
    primary: "#3182f6"
    canvas: "#ffffff"
    foreground: "#212529"
    foreground-strong: "#191f28"
    foreground-secondary: "#4e5968"
    muted: "#6b7684"
    hairline: "#e5e8eb"
    border: "#d1d6db"
    surface-muted: "#f2f4f6"
  typography:
    family: { sans: "Toss Product Sans" }
    marketing-title: { size: 48, weight: 700, lineHeight: 1.3, use: "One observed marketing-home heading; not an app display scale." }
    navigation: { size: 15, weight: 500, lineHeight: 1.5, use: "Observed public-site navigation control text." }
    docs-body: { size: 16, weight: 400, lineHeight: 1.5, use: "Observed product-disclosure and protected-products content text." }
    docs-utility: { size: 11, weight: 600, lineHeight: 1.6, use: "Observed compact documentation control text." }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 32 }
  rounded: { none: 0, compact: 20, pill: 40 }
  shadow: { none: "none" }
  components_harvested: true
  components:
    docs-outline-button: { type: button, fg: "#4e5968", radius: 40, padding: "4px 10px", font: "11/600 Toss Product Sans", states: "Collector labels focus/hover/pressed on the documented control; interactionCount is 0, so no state value is specified.", use: "Observed default documentation-chrome button on the two customer-information routes only." }
    docs-tab: { type: tab, fg: "#212529", padding: "9px 14px", font: "16/400 Toss Product Sans", states: "Selected only (aria-selected=true); no other tab state was captured.", use: "Observed selected documentation tab at product-disclosure only." }
---

# Design System Inspiration of Toss Bank (토스뱅크)

## 1. Visual Theme & Atmosphere

Toss Bank is a Korean bank whose public site presents banking products, customer information, and a campaign asking people to describe banking experiences worth changing. The public home uses short, benefit-led Korean headlines for accounts, savings, loans, foreign exchange, cards, and always-available support; the campaign’s central line is “은행을 바꾸는 은행.” That combination gives the public-facing work a direct, conversational register rather than the ceremonial tone associated with conventional bank marketing. The live capture nevertheless contains three different source domains: the home is a marketing surface, while product disclosure and protected-products are documentation chrome. They share a loaded typeface and familiar blue/gray values, but neither route is evidence for the authenticated Toss Bank app or for financial-flow components. [Toss Bank home](https://www.tossbank.com/) · [campaign](https://www.tossbank.com/ten-million)

The group’s official resource center identifies Toss Blue `#0064FF` and Toss Gray `#202632`, and includes a Toss Bank affiliate logo. Those are brand-asset facts. The supplied live capture separately shows `#3182f6` in public-site text and borders; it is retained as an observed public-surface value, not silently equated with the official logo color. The resulting reference is intentionally narrow: clear typography, sparse borders, and public information controls are verified; account, transfer, card, status, and authenticated-app patterns are not.

**Key Characteristics:**

- Official Toss brand blue `#0064FF` and gray `#202632` for group identity assets
- Loaded Toss Product Sans across the captured public home and customer-information routes
- `#3182f6` observed in public-site control text/borders, alongside neutral documentation colors
- Marketing, documentation chrome, and unobserved authenticated banking flows kept separate
- Only selector-backed public controls are described; app-style cards, forms, and transaction states are omitted

## 2. Color Palette & Roles

### Official brand assets

- **Toss Blue** (`#0064ff`): official Toss brand color, specified by the group resource center for brand use.
- **Toss Gray** (`#202632`): official Toss brand gray, also specified by the group resource center.

### Observed public surfaces

- **Public control blue** (`#3182f6`): repeated public-site text and border value on all three captured routes.
- **Canvas** (`#ffffff`): observed documentation-route background.
- **Foreground** (`#212529`): repeated public text value across the capture.
- **Strong foreground** (`#191f28`): observed on both documentation routes.
- **Secondary foreground** (`#4e5968`) and **muted text** (`#6b7684`): observed documentation and public-site text values.
- **Border** (`#d1d6db`) and **hairline** (`#e5e8eb`): observed public-route border values.
- **Muted surface** (`#f2f4f6`): observed background on the protected-products route.

### Boundary

No captured evidence establishes semantic success/error colors, a universal CTA fill, or a Toss Bank app color system. Brand-asset colors are not promoted to product controls, and the observed public control blue is not presented as a replacement for the official brand color.

## 3. Typography Rules

### Evidence classes

- **Live computed surface-use:** **Toss Product Sans** is the computed family on 672 captured elements across the home and both customer-information routes. The collector reports a matching loaded FontFaceSet entry with 1,536 static.toss.im font-source URLs, so it is the verified public-web family for this reference.
- **Official product-use and history:** Toss says it developed Toss Product Sans as a product typeface for financial, mobile, and digital contexts, initially with Sandoll and later with Leedotype. This explains the typeface’s financial-context intent but does not establish unobserved Toss Bank app sizes or components. [Official typeface history](https://toss.im/tossfeed/article/beginning-of-tps)
- **Official distributed asset / license boundary:** Apps in Toss documentation says the Figma kit uses SF Pro because Toss Product Sans is difficult to distribute as a separate asset, while Toss apps apply Toss Product Sans automatically. The reviewed material does not grant an independent font-file license for this reference. [TDS design-tool guidance](https://developers-apps-in-toss.toss.im/design/prepare/design.html)
- **Declared/system families:** Tossface, SF Pro, Apple SD Gothic Neo, Roboto, Noto Sans, and emoji families occur in the computed fallback declaration. They have no loaded-font match in the supplied evidence and are not promoted to Toss Bank UI tokens.

### Observed hierarchy

| Role | Size | Weight | Line height | Source boundary |
|------|------|--------|-------------|-----------------|
| Marketing title | 48px | 700 | 62.4px | One home marketing heading |
| Public navigation | 15px | 500 | 22.5px | Home navigation controls |
| Documentation body | 16px | 400 | 24px | Product-disclosure and protected-products routes |
| Documentation utility | 11px | 600 | 17.6px | Compact documentation control |

Do not substitute SF Pro, Pretendard, Inter, or a system font and label it Toss Product Sans. Conversely, the non-loadable fallback declaration remains useful compatibility context but is not treated as a product font source.

## 4. Component Stylings

### Public marketing home

**Pill action — observed default**
- Background: #fdfdfe
- Text: #212529
- Radius: 100px
- Padding: 18px 32px
- Font: 16px / 400 / Toss Product Sans
- Use: `home::[data-omd-capture="28"]`, a single public-home action with a 63px rendered height. It is marketing evidence only.

### Customer-information documentation chrome

**Outline button — observed default**
- Text: #4e5968
- Border: 1px solid #4e5968
- Radius: 40px
- Padding: 4px 10px
- Font: 11px / 600 / Toss Product Sans
- Use: `surface-2::[data-omd-capture="10"]`, also repeated on `surface-3`; 28px rendered height.

**Documentation tab — observed selected**
- Text: #212529
- Padding: 9px 14px
- Font: 16px / 400 / Toss Product Sans
- Use: `surface-2::[data-omd-capture="29"]`, `role="tab"` and `aria-selected="true"`; 40px rendered height.

The raw artifact labels some public buttons with focus/hover/pressed state markers but contains no interaction snapshots (`interactionCount: 0`). No state styling is therefore specified. No authenticated-app button, account card, input, badge, toast, sheet, toggle, error, success, or mobile navigation variant had selector and surface provenance in this update.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.tossbank.com/; https://www.tossbank.com/customer/product-disclosure; https://www.tossbank.com/customer/protected-products; https://brand.toss.im/; https://toss.im/tossfeed/article/beginning-of-tps; https://developers-apps-in-toss.toss.im/design/prepare/design.html; https://www.tossbank.com/ten-million
**Tier 2 sources:** https://getdesign.md/tossbank (attempted; no usable record returned); https://styles.refero.design/?q=tossbank (attempted; no usable record returned)
**Conflicts unresolved:** none

The previous reference inferred a mobile-bank application system from shared TDS patterns. This update retains only source-backed public values and components, while preserving separately confirmed Toss brand and typeface context.

## 5. Layout Principles

The supplied desktop capture exposes public marketing and documentation layouts, not an authenticated banking-screen grid. Observed spacing values cluster at 4, 8, 12, 16, and 32px; documentation controls use compact padding while the home pill action uses 18px 32px. A 375px baseline, transaction alignment rules, safe-area behavior, and an app layout grid were not captured and are omitted.

## 6. Depth & Elevation

The representative public controls have `box-shadow: none`. No evidence in this run supports a card, sheet, modal, floating-action, or elevation scale. Use flat public-surface controls only where their documented source domain applies; do not infer banking-product depth rules.

## 7. Do's and Don'ts

### Do

- Keep official brand assets (`#0064ff`, `#202632`) distinct from live public-interface observations.
- Use Toss Product Sans only when the deployment can load the verified family or is explicitly within its official platform boundary.
- Preserve the marketing-home and customer-information source domains on documented controls.
- Treat the selected documentation tab as a selected documentation state, not a general app tab pattern.

### Don't

- Do not turn the observed `#3182f6` text/border value into a universal filled banking CTA.
- Do not reuse the public pill action as a transfer, account-opening, or confirmation component.
- Do not invent hover, pressed, focus, error, disabled, success, or responsive variants from this artifact.
- Do not substitute a system font and call it Toss Product Sans.

## 8. Responsive Behavior

Only a 1440×900 collector viewport was supplied. No mobile viewport, breakpoint, responsive layout change, touch-target policy, or safe-area behavior was observed. Re-verification needs public mobile captures before this reference can describe responsive rules.

## 9. Agent Prompt Guide

For a public Toss Bank marketing or customer-information concept, use the verified source boundary: official group blue `#0064ff` for brand context; observed public control blue `#3182f6` only as a text/border observation; neutral text and hairlines; and Toss Product Sans only when it can actually load. Do not generate an account dashboard, money transfer flow, banking status state, or universal TDS component from this reference—the current evidence does not establish them.

## 10. Voice & Tone

The official home uses concise, benefit-led Korean phrasing such as “하루만 넣어도 이자가 쌓이는” and “쉽고 간편하게 시작해요.” The campaign directly asks for “바꾸고 싶은 불편한 은행 경험,” then says the bank will use those opinions to make a better bank. This supports a clear, constructive public voice; legal and disclosure wording remains a separate regulated content domain. [Home](https://www.tossbank.com/) · [campaign](https://www.tossbank.com/ten-million)

| Context | Observed direction |
|---------|--------------------|
| Product marketing | Short benefit plus a plain-language explanation |
| Participation campaign | Ask directly for a concrete inconvenient experience |
| Documentation | Keep product information distinct from promotional claims |

Voice samples are quoted/paraphrased from the cited public pages, not a specification for unobserved in-app copy.

## 11. Brand Narrative

Toss Bank frames itself publicly as a bank that changes banking: its home lists everyday bank products and services, while its campaign says it is still changing banks and invites people to name the experiences they want improved. The bank’s site also identifies a 24-hour customer center, placing accessibility of assistance alongside its product navigation. [Toss Bank home](https://www.tossbank.com/) · [campaign](https://www.tossbank.com/ten-million)

Within the wider Toss identity, the official resource center supplies the group’s blue and gray brand assets and an affiliate-logo listing for Toss Bank. This is the right evidence for group identity and logo treatment, not for app-screen behavior or financial-product UI tokens. [Brand Resource Center](https://brand.toss.im/)

## 12. Principles

1. **Make the promised outcome easy to scan.** The home groups products by account, savings, loans, foreign exchange, cards, and help. *UI implication:* public information should use clear categorization before decorative treatment.
2. **Ask for a concrete banking problem.** The campaign explicitly requests an inconvenient bank experience. *UI implication:* feedback prompts should ask for one specific experience and clearly say how the response will be used.
3. **Separate brand assets from product evidence.** Official group color rules and live public CSS answer different questions. *UI implication:* never convert a logo color or shared design-kit convention into an unobserved banking-flow token.

## 13. Personas

The public campaign names customers with roles including self-employed people, office workers, university students, and families. These are examples presented by Toss Bank, not a validated user-research segmentation model. [Campaign](https://www.tossbank.com/ten-million)

**Public-source audience cues:** people managing everyday accounts, people considering loans or foreign exchange, card users, and people who want to report a frustrating banking experience. No invented personal profiles are included because the current evidence does not support them.

## 14. States

The supplied artifact records one selected documentation tab (`aria-selected="true"`). It contains no captured interaction snapshots and no selector-backed empty, loading, error, success, disabled, toast, or skeleton state. Those state specifications are intentionally absent rather than inferred from generic banking conventions.

## 15. Motion & Easing

No transition duration, easing curve, reduced-motion behavior, or animated state was captured on the supplied routes. Motion tokens are intentionally absent.
