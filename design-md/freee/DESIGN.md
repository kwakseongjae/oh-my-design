---
id: freee
name: freee
country: JP
category: productivity
homepage: "https://www.freee.co.jp"
primary_color: "#2864f0"
logo:
  type: github
  slug: freee
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Vibes
  url: "https://vibes.freee.co.jp"
  type: system
  description: Official freee design system, published with accessibility-focused frontend-development materials.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-marketing, url: "https://www.freee.co.jp/", inspected: "2026-07-12" }
    - { id: pricing, kind: public-marketing, url: "https://www.freee.co.jp/pricing/", inspected: "2026-07-12" }
    - { id: products, kind: public-marketing, url: "https://www.freee.co.jp/products/", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.freee.co.jp/", captured: "2026-07-12" }
    - { id: pricing-live, kind: product-surface, url: "https://www.freee.co.jp/pricing/", captured: "2026-07-12" }
    - { id: products-live, kind: product-surface, url: "https://www.freee.co.jp/products/", captured: "2026-07-12" }
    - { id: vibes-repo, kind: official-doc, url: "https://github.com/freee/vibes", captured: "2026-07-13" }
    - { id: vibes-release, kind: official-doc, url: "https://corp.freee.co.jp/news/20231219_design.html", captured: "2026-07-13" }
    - { id: mission, kind: official-doc, url: "https://corp.freee.co.jp/mission/", captured: "2026-07-13" }
    - { id: company, kind: official-doc, url: "https://corp.freee.co.jp/company/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-12" }
    "tokens.colors.primary-hover": *live
    "tokens.colors.primary-pressed": *live
    "tokens.colors.canvas": *live
    "tokens.colors.surface-tint": *live
    "tokens.colors.text": *live
    "tokens.colors.text-muted": *live
    "tokens.colors.border": *live
    "tokens.typography.family.ui": *live
    "tokens.typography.body.size": *live
    "tokens.typography.body.weight": *live
    "tokens.typography.body.lineHeight": *live
    "tokens.typography.body.use": *live
    "tokens.typography.action.size": *live
    "tokens.typography.action.weight": *live
    "tokens.typography.action.lineHeight": *live
    "tokens.typography.action.use": *live
    "tokens.typography.heading.size": *live
    "tokens.typography.heading.weight": *live
    "tokens.typography.heading.lineHeight": *live
    "tokens.typography.heading.use": *live
    "tokens.spacing.header-y": *live
    "tokens.spacing.header-x": *live
    "tokens.spacing.action-y": *live
    "tokens.spacing.action-x": *live
    "tokens.rounded.header-action": *live
    "tokens.rounded.action": *live
    "tokens.components.header-primary.type": *live
    "tokens.components.header-primary.bg": *live
    "tokens.components.header-primary.fg": *live
    "tokens.components.header-primary.radius": *live
    "tokens.components.header-primary.padding": *live
    "tokens.components.header-primary.font": *live
    "tokens.components.header-primary.use": *live
    "tokens.components.header-primary.hover": *live
    "tokens.components.primary-action.type": *live
    "tokens.components.primary-action.bg": *live
    "tokens.components.primary-action.fg": *live
    "tokens.components.primary-action.radius": *live
    "tokens.components.primary-action.padding": *live
    "tokens.components.primary-action.font": *live
    "tokens.components.primary-action.use": *live
    "tokens.components.primary-action.hover": *live
    "tokens.components.segment-card.type": *live
    "tokens.components.segment-card.bg": *live
    "tokens.components.segment-card.radius": *live
    "tokens.components.segment-card.use": *live
tokens:
  source: live-extract
  extracted: "2026-07-12"
  components_harvested: true
  colors:
    primary: "#2864f0"
    primary-hover: "#2863ef"
    primary-pressed: "#245ad9"
    canvas: "#ffffff"
    surface-tint: "#ebf3ff"
    text: "#323232"
    text-muted: "#595959"
    border: "#e1dcdc"
  typography:
    family: { ui: "Noto Sans JP" }
    body: { size: 14, weight: 400, lineHeight: 1.5, use: "Observed public-site body text." }
    action: { size: 16, weight: 700, lineHeight: 1.5, use: "Observed public primary and outline action." }
    heading: { size: 40, weight: 700, lineHeight: 1.5, use: "Observed public-site heading." }
  spacing: { header-y: 4, header-x: 20, action-y: 10, action-x: 16 }
  rounded: { header-action: 5, action: 8 }
  components:
    header-primary: { type: button, bg: "#2864f0", fg: "#ffffff", radius: "5px", padding: "4px 20px", font: "14px / 700 / Noto Sans JP", hover: "#2761e8", use: "Public header sign-up action only." }
    primary-action: { type: button, bg: "#2864f0", fg: "#ffffff", radius: "8px", padding: "10px 16px", font: "16px / 700 / Noto Sans JP", hover: "#2863ee", use: "Public pricing-page primary action only." }
    segment-card: { type: card, bg: "#ebf3ff", radius: "8px", use: "Public home segment-selection card only." }
---

# Design System Inspiration of freee

## 1. Visual Theme & Atmosphere

freee develops an integrated management platform for Japanese small businesses: accounting, HR, approvals, and connected business data are framed as a way to let owners manage freely rather than spend their time on back-office work. The company was established in July 2012 and its public mission is 「スモールビジネスを、世界の主役に。」 (“Empower Small Businesses to Take Center Stage”). On the current public freee pages supplied for this review, that purpose is expressed with a clean white field, a vivid practical blue, high-contrast Japanese text, and compact rounded calls to action. The visual system reads as calm and approachable without claiming that these marketing pages are the authenticated accounting, payroll, or documentation product UI. [Mission](https://corp.freee.co.jp/mission/) · [Company profile](https://corp.freee.co.jp/company/)

freee also maintains **Vibes**, an official open-source design system. Vibes is valuable design and accessibility context, but the current public-site token set below comes only from the supplied live computed capture. Historic Vibes values such as `#285ac8` are not substituted for the current live `#2864f0`, and no component is generalized from the website into an unobserved product surface. [Official Vibes announcement](https://corp.freee.co.jp/news/20231219_design.html) · [Vibes repository](https://github.com/freee/vibes)

- A public-site primary blue with white action text
- White canvas, charcoal body copy, and muted gray navigation
- 5px compact header controls and 8px page actions/cards
- Loaded Noto Sans JP across the supplied public routes

## 2. Color Palette & Roles

### Observed public-site roles

- **Primary** (`#2864f0`): repeated public header and page-action fill, text, and border color across home, pricing, and products.
- **Primary hover snapshot** (`#2863ef`): pseudo-state snapshot on the pricing/page action capture; not a motion contract.
- **Primary pressed snapshot** (`#245ad9`): pseudo-state snapshot on a pricing primary action; not a universal state token.
- **Canvas** (`#ffffff`): repeated public-page action and surface background.
- **Tint surface** (`#ebf3ff`): home segment-selection card background.
- **Text** (`#323232`): observed home segment-card text and repeated public text.
- **Muted text** (`#595959`): repeated public navigation and footer text.
- **Border** (`#e1dcdc`): observed products-page category-card border.

### Historical system boundary

The official Vibes repository contains a broader, versioned component and token system under an Apache-2.0 licence. It is a historical/design-system source, not evidence that its legacy palette or status colors are the current values on the three public pages in this capture. Values not computed on those pages are omitted from machine tokens rather than inferred.

## 3. Typography Rules

### Evidence classes

- **Live computed public-site use:** `Noto Sans JP` is the only promoted UI-family token. It has 1,371 visible computed uses across the three routes, a high-confidence loaded FontFaceSet match, and freee-hosted Regular, Medium, and Bold OTF source URLs.
- **Official design-system context:** Vibes is an official freee design system. Its repository is Apache-2.0 licensed and documents a reusable system; that does not make its historical font stack a current public-site token.
- **Declared-only:** Cherry Bomb One, Coiny, `myfont`, and swiper-icons have `@font-face` declarations in the raw bundle but zero visible observed uses. They are not UI-family tokens.
- **Unobserved domains:** no authenticated product screen or documentation chrome was included in the collector evidence. This reference makes no claim about their font use.

### Measured public hierarchy

| Role | Family | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Body | Noto Sans JP | 14px | 400 | 21px | Repeated across home, pricing, and products |
| Public action | Noto Sans JP | 16px | 700 | 24px | Pricing `.c-btn-primary` and outline action |
| Public heading | Noto Sans JP | 40px | 700 | 60px | Repeated captured h2 samples |
| Compact header action | Noto Sans JP | 14px | 700 | 21px | Header `.c-btn-primary` |

Do not render a declared Google font, icon face, or a system fallback as though it were Noto Sans JP.

## 4. Component Stylings

Every component below is a public-site observation with preserved selector and surface provenance. The bundle reports three pseudo-state kinds but `interactionCount: 0`; hover, pressed, and focus snapshots are visual samples, not proof of transition timing, keyboard behavior, or a complete state model.

### Header action

**Primary — observed default**
- Background: `#2864f0`
- Text: `#ffffff`
- Border: `1px solid #2864f0`
- Radius: `5px`
- Padding: `4px 20px`
- Font: `14px / 700 / Noto Sans JP`
- Use: public header sign-up action at `home::[data-omd-capture="8"]`; 31px rendered height.
- Hover: `#2761e8` background at `home::[data-omd-capture="8"]::state-hover`.
- Pressed: `#2358d4` background at `home::[data-omd-capture="8"]::state-pressed`.
- Focus: `#2256ce` background at `home::[data-omd-capture="8"]::state-focus`.

### Page actions

**Primary — observed default**
- Background: `#2864f0`
- Text: `#ffffff`
- Border: `2px solid #2864f0`
- Radius: `8px`
- Padding: `10px 16px`
- Font: `16px / 700 / Noto Sans JP`
- Use: pricing-page action at `pricing::[data-omd-capture="17"]`; 48px rendered height.
- Hover: `#2863ee` background at `pricing::[data-omd-capture="17"]::state-hover`.
- Pressed: `#2762ec` background at `pricing::[data-omd-capture="17"]::state-pressed`.
- Focus: `#2763ed` background with `#2761e8` border at `pricing::[data-omd-capture="17"]::state-focus`.

**Outline — observed default**
- Background: `#ffffff`
- Text: `#2864f0`
- Border: `2px solid #2864f0`
- Radius: `8px`
- Padding: `10px 16px`
- Font: `16px / 700 / Noto Sans JP`
- Use: pricing-page secondary action at `pricing::[data-omd-capture="70"]`; 48px rendered height, default state only.

### Segment-selection card

**Tinted — observed default**
- Background: `#ebf3ff`
- Text: `#323232`
- Radius: `8px`
- Font: `16px / 400 / Noto Sans JP`
- Use: home segment-selection card at `home::div.fr-3ezzk7z2_kv_card`; 103px rendered height, default state only.

### Product-category card

**Outline — observed default**
- Background: `#ffffff`
- Text: `#2864f0`
- Border: `1px solid #e1dcdc`
- Radius: `8px`
- Padding: `10px 14px`
- Font: `16px / 700 / Noto Sans JP`
- Use: products category link at `products::[data-omd-capture="37"]`; 186px rendered height, default state only.

No authenticated-app fields, data tables, status badges, dialogs, errors, disabled states, responsive breakpoints, or documentation components are specified: none had the required public selector/surface/state provenance in the supplied evidence.

## 5. Layout Principles

- The observed public header action uses `4px 20px` padding; the larger public actions use `10px 16px`.
- The capture shows local 5px and 8px geometry, not a universal radius scale.
- Only desktop public routes were supplied. No application layout grid, mobile breakpoint, or product workflow density is asserted.

## 6. Depth & Elevation

No reusable shadow or elevation token is promoted. The inspected public component samples used `box-shadow: none`; the broader Vibes shadow recipes are historical system context, not live-page tokens.

## 7. Do's and Don'ts

### Do

- Use Noto Sans JP only where its live loaded-font evidence applies.
- Keep public primary and outline actions distinct: filled blue versus white with a blue border.
- Treat pseudo-state samples as selector-specific visual evidence.

### Don't

- Substitute Vibes’ historical `#285ac8` for the current public `#2864f0`.
- Promote declared-only Cherry Bomb One, Coiny, `myfont`, or swiper-icons to UI typography.
- Invent product-dashboard tables, badges, form states, or motion from public marketing pages.

## 8. Responsive Behavior

No responsive token or breakpoint is documented. The evidence contains no mobile viewport capture; re-verification must collect a matching public route at the target viewport before adding one.

## 9. Agent Prompt Guide

- “Create a public freee-style page action: `#2864f0` fill, white `Noto Sans JP` 16px/700 text, 8px radius, and `10px 16px` padding. Scope it to public marketing, not an accounting-app control.”
- “Create a public freee-style outline action: white fill, `#2864f0` text and 2px border, 8px radius, `10px 16px` padding, Noto Sans JP 16px/700.”
- “Use white canvas, `#323232` content text, `#595959` muted text, and `#ebf3ff` only for the observed segment-card context. Do not add unobserved status colors.”

## 10. Voice & Tone

The official mission speaks directly about enabling small businesses to take centre stage and to manage freely. Public copy should be clear, respectful, and oriented to the user’s business outcome; this is an editorial application of the mission, not a claim that a full product copy guide was captured. [Mission](https://corp.freee.co.jp/mission/)

| Do | Don't |
|---|---|
| Name the concrete management outcome. | Claim an unverified automation result. |
| Use respectful, direct Japanese. | Use a synthetic persona quote as evidence. |
| Keep support copy accessible and specific. | Turn an unavailable state into a decorative marketing promise. |

**Voice samples.**
- 「スモールビジネスを、世界の主役に。」 — official mission. <!-- verified: corp.freee.co.jp/mission/ 2026-07-13 -->
- 「だれもが自由に自然体で経営できる環境」 — official mission-page framing. <!-- verified: corp.freee.co.jp/mission/ 2026-07-13 -->
- 「だれもが自由に経営できる統合型経営プラットフォーム」 — official vision framing. <!-- verified: corp.freee.co.jp/vision/ 2026-07-13 -->

## 11. Brand Narrative

freee was established in July 2012. Its official company profile identifies Daisuke Sasaki as CEO and founder; its mission page describes an integrated management platform intended to reduce back-office burden for small businesses and support freer management. The current public-site blue, Noto Sans JP deployment, and concise action geometry are a separate live-surface record, not evidence about the private application. [Company profile](https://corp.freee.co.jp/company/) · [Mission](https://corp.freee.co.jp/mission/)

In 2023 freee publicly released Vibes and its accessibility-related frontend-development knowledge. That release is evidence of an accessibility-focused design-system initiative, not authority to reclassify its historic tokens as current website values. [Official announcement](https://corp.freee.co.jp/news/20231219_design.html)

## 12. Principles

1. **Support small-business autonomy.** *UI implication:* make the relevant management outcome explicit before the call to action.
2. **Separate evidence domains.** *UI implication:* public marketing, authenticated product, documentation chrome, and historical Vibes assets must not donate tokens to one another without direct evidence.
3. **Treat accessibility as engineering practice.** *UI implication:* use the official Vibes/a11y context for intent, but verify each public UI value at the actual surface before implementation.

## 13. Personas

[FILL IN] No official persona research or product-user interviews were collected in this re-verification packet. Do not create synthetic users as evidence.

## 14. States

[FILL IN] The supplied capture has pseudo-state visual snapshots for selected public buttons, but no observable error, loading, success, empty, disabled, dialog, or authenticated-product state model. Add a state only after collecting its selector and surface provenance.

## 15. Motion & Easing

[FILL IN] The collector recorded no interaction event or timing data. Hover, focus, and pressed images do not establish duration, easing, or reduced-motion behavior.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.freee.co.jp/; https://www.freee.co.jp/pricing/; https://www.freee.co.jp/products/; https://corp.freee.co.jp/news/20231219_design.html; https://github.com/freee/vibes; https://corp.freee.co.jp/mission/; https://corp.freee.co.jp/company/
**Tier 2 sources:** https://getdesign.md/freee (attempted through built-in web search; no freee record returned); https://styles.refero.design/?q=freee (attempted through built-in web search; no freee result returned in the public result set)
**Conflicts unresolved:** none
