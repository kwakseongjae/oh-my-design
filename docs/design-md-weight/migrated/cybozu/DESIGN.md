# Cybozu Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Cybozu (サイボウズ) is a Japanese teamwork-software company behind Cybozu Office, Garoon, and kintone. This reconstruction covers two brand-owned public surfaces observed on 2026-06-17: the corporate site at `cybozu.co.jp` and the flagship kintone product site at `kintone.cybozu.co.jp`. Treating them as two distinct systems rather than conflicting values to reconcile into one palette is a derived editorial implementation inference from the verified surfaces; it is not Cybozu-authored or a separately published UI specification. Corporate Cybozu uses teal `#139cb7` with Hiragino and `#333333` ink, while kintone uses yellow `#ffbf00`, Roboto + Noto Sans JP, and warm `#231200` ink.

Cybozu states the mission “チームワークあふれる社会を創る” and kintone uses “みんな、つくれる。” to frame business-application building as something non-engineers can do. The source records Cybozu’s 1997 founding in Matsuyama, Ehime by Yoshihisa Aono and co-founders, kintone’s 2011 launch, and Cybozu’s flexible-work-style context (働き方改革). Reading those facts as software functioning as collaboration infrastructure is a derived editorial implementation inference from the verified first-party narrative; it is not Cybozu-authored or a separately published UI specification. The source also records an open product-design organization spanning a Figma kintone Design System, the `kintone-ui-component` package and Storybook documentation, and the Cybozu Product Design Magazine.

The following visual characterization is a derived editorial implementation inference from the verified surfaces; it is not Cybozu-authored or a separately published UI specification. The corporate surface reads as calm and editorial through white, dark grey, quiet bilingual labels, and a single teal action signal. kintone is warmer and more inviting through amber-yellow, positive headline tracking, and a flat hairline-separated card system. Both rely more on tint and borders than elevation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These task formulations are derived editorial implementation inferences from the verified surface purposes; they are not Cybozu-authored or a separately published UI specification.

- Find corporate product, news, seminar/event, company, and IR information on the Cybozu public site.
- Understand, try, or start a trial of kintone’s no-code/low-code business-application product.
- Build and reuse kintone interface components through the public `kintone-ui-component` system.
<!-- design-md:claim-end -->

### Audience

This audience grouping is a derived editorial implementation inference from the source-backed stakeholder references; it is not Cybozu-authored or a separately published UI specification.

Source-backed groups are Japanese SMB operations staff, non-engineer citizen developers, enterprise IT evaluators, and Cybozu/kintone product designers. Named biographies from the legacy persona section are not retained.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the verified surfaces; it is not Cybozu-authored or a separately published UI specification.

- Corporate action signal: teal `#139cb7`, observed 446 times on corporate links and calls to action.
- Surface-specific type: full Hiragino corporate stack versus a Roboto / Noto Sans JP kintone stack.
- Surface-specific reading ink: `#333333` corporate and `#231200` kintone; `#000000` exists as an occasional maximum-contrast value, not the sustained-reading default.
- kintone display type at 52px / 700 / unitless 1.45 with `2.6px` positive tracking, plus a 48px / 700 / unitless 1.40 alternative with `0.96px` tracking.
- Flat kintone cards with `#d6d5d5` hairlines, 8–10px geometry, and `box-shadow: none`; corporate elevation is bounded to circular controls.

### Derived implementation principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Cybozu-authored or a separately published UI specification.

- Keep the corporate teal and kintone yellow systems on their own surfaces; do not blend them into a single mixed identity.
- Treat teal as the corporate action signal and yellow as the kintone brand-chip, banner, and decorative signal.
- Keep Hiragino on corporate surfaces and Roboto + Noto Sans JP on kintone surfaces.
- Use warm reading ink and positive kintone display tracking to preserve the observed open, approachable cadence.
- Separate groups with flat tints and hairlines; reserve shadow for the observed circular corporate controls.

### Avoid

The following avoidances are derived editorial implementation inferences from the verified surfaces; they are not Cybozu-authored or a separately published UI specification.

- Do not use heavy shadow stacks or invent a general elevation scale.
- Do not spread teal across unrelated corporate elements or use kintone yellow as a corporate action color.
- Do not use tight negative tracking for the captured kintone display roles.
- Do not replace surface-specific font stacks with each other.
- Do not promote the legacy responsive, state, or motion recipes as observed behavior; their proof boundary is recorded in provenance.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Corporate semantic color

| Role | Value | Verified use |
|---|---|---|
| Primary / action teal | `#139cb7` | Corporate links, text CTAs, and circular-button glyphs; 446 live text-color occurrences |
| Teal light | `#64bdd4` | Softer fills, accent borders, and decorative blocks |
| Reading ink | `#333333` | Corporate body, headings, and navigation |
| Maximum-contrast ink | `#000000` | Occasional text only |
| Muted label | `#aaaaaa` | English section labels and low-emphasis copy |
| Muted slate | `#838d94` | Tertiary text and fine print |
| Slate dark | `#31424e` | Dark accent blocks and footer-adjacent panels |
| Slate darker | `#465560` | Dark accent borders and surfaces |
| Canvas / on-primary | `#ffffff` | Page background, cards, and inverse text |
| Tinted surface | `#f6f6f6` | Alternating corporate content bands |
| Hairline | `#e6e6e6` | Dividers and card outlines |

### kintone semantic color

| Role | Value | Verified use |
|---|---|---|
| Product yellow | `#ffbf00` | Badge chips, banners, and brand accents |
| Amber light | `#ffdb4f` | Decorative circles and highlights |
| Amber deep | `#ff8f00` | Bounded emphasis accent |
| Product ink | `#231200` | kintone body and heading text |
| Product surface | `#f3f3f3` | Neutral section background |
| Product tint | `#fff5e1` | Warm cream section band |
| Card border | `#d6d5d5` | Flat outlined cards, buttons, and fields |
| Dark CTA fill | `#333333` | kintone primary CTA wrapper |
| Canvas / inverse text | `#ffffff` | Page and card surfaces, CTA text |

### Spacing

Source scale: `xs: 4`, `sm: 8`, `md: 12`, `base: 16`, `lg: 20`, `xl: 24`, `xxl: 32`, `section: 62`. The source describes this as a 4px / 8px base system. kintone feature cards use 24px internal padding; corporate sections use approximately 62px top spacing.

### Shape

- Source scale: `sm: 4`, `md: 8`, `lg: 10`, `full: 9999`.
- Compact kintone outlined button: 4px.
- kintone primary/secondary controls and badge top corners: 8px.
- kintone feature card: 10px.
- Corporate circular controls: captured `50%`; catalog full token `9999px` remains a separate source representation.

### Elevation

The elevation-role grouping and its explanatory boundaries are derived editorial implementation inferences from the verified surface treatments; they are not Cybozu-authored or a separately published UI specification.

| Role | Value | Boundary |
|---|---|---|
| Flat | `none` | kintone hero, feature cards, and outlined buttons |
| Tint separation | `#f6f6f6`, `#f3f3f3`, `#fff5e1` | Section grouping without elevation |
| Corporate hairline | `1px solid #e6e6e6` | Cards and dividers |
| kintone hairline | `1px solid #d6d5d5` | Cards, buttons, and fields |
| Soft circular control | `rgba(0,0,0,0.1) 0px 0px 6px 0px` | 40px corporate icon button only |
| PickUp circular control | `rgba(0,0,0,0.17) 0px 1px 10px 0px` | Featured corporate PickUp button only; its sidecar-only raw size remains in provenance |

### Motion

The motion-promotion decision below is a derived editorial implementation inference from the recorded proof boundary; it is not Cybozu-authored or a separately published UI specification.

The live-inspection proof contains computed static styles but no component-specific transition-property, animation-name, duration, easing, or reduced-motion observation. The legacy duration and curve tables are therefore not promoted as Cybozu or kintone motion tokens.

A motion value may be promoted only after component-specific computed before/after observation establishes all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. Until then, motion values remain absent.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Families

- **Corporate:** `"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Meiryo, メイリオ, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`.
- **kintone product:** `Roboto, "Noto Sans JP", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`.
- The compact source metadata names the corporate family `Hiragino Kaku Gothic Pro`, the product family `Roboto / Noto Sans JP`, and fallback `Meiryo`; the full captured stacks above preserve the live surface values.

### Type roles

| Surface / role | Size | Weight | Line height | Tracking | Use |
|---|---:|---:|---:|---:|---|
| Corporate body | 16px | 400 | `2.0` unitless (32px captured) | normal | Corporate reading text |
| Corporate nav | 14px | 700 | not established | normal | Top navigation links |
| Corporate English label | 16px | 400 | 32px | normal | Muted `#aaaaaa` bilingual section label |
| kintone section heading | 52px | 700 | `1.45` unitless (75.4px captured) | 2.6px | Primary product section head |
| kintone secondary heading | 48px | 700 | `1.40` unitless (67.2px captured) | 0.96px | Secondary product head |
| kintone body | 16px | 400 | `1.69` unitless (27px captured) | normal | Product reading text |
| kintone badge chip | 12px | 700 | not established | normal | Yellow chip label |

### Assets and public system boundary

The asset-authority and token-source boundaries below are derived editorial implementation inferences from the verified sources; they are not Cybozu-authored or a separately published UI specification.

- The official kintone UI Component documentation and the GitHub package `kintone-ui-component` v1.25.0 confirm an open component library under MIT. Generic Docusaurus documentation chrome is not a token source.
- The catalog favicon URL is an identity pointer only; its exact URL remains in provenance and is not promoted as an official distributed logo asset.
- Product screenshots and illustrations were observed without shadow; no image licence or distribution authority is established by this source.

<!-- design-md:section components-states -->
## 4. Components & States

### State evidence boundary

The evidence-boundary and applicability judgments in this section are derived editorial implementation inferences from the verified component roles; they are not Cybozu-authored or a separately published UI specification.

The live proof records default computed styles and a named corporate hover/active color, but no comprehensive interaction capture. `default` and `focus-visible` remain applicable for interactive primitives. Applicability follows component meaning. Absence of a capture is not a `not-applicable` reason. State coverage is not claimed complete.

The legacy §14 recipes are preserved below as derived editorial guidance, not measured state evidence. They do not supply a visual treatment to the component applicability tables.

The applicability judgments below are derived editorial implementation inferences from the verified component roles; they are not Cybozu-authored or a separately published UI specification. They classify Core §4.4 meaning only and do not promote an unmeasured visual treatment.

### Corporate top-navigation item

- Primitive type: tab
- Kind: interactive
- Text: `#333333`; named hover/active text: `#139cb7`
- Font: `14px / 700 / Hiragino`
- Header height: 56px; item padding: `18px 0px`
- Use: corporate top navigation — “製品情報”, “ニュース”, “セミナー・イベント”, “企業・IR”

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Cybozu-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default navigation treatment |
| hover | applicable | Pointer-web tab; named teal treatment is preserved |
| focus-visible | applicable | Interactive tab; visual treatment omitted |
| disabled | applicable | Tab control may be unavailable; visual treatment omitted |
| loading | not-applicable | Navigation selection does not itself carry loading presentation |
| error | not-applicable | Navigation selection does not itself present validation failure |
| success | not-applicable | Navigation selection does not itself present completion feedback |

### Corporate inline/list text action

- Primitive type: button
- Kind: interactive
- Text: `#139cb7`
- Font: `16px / 400 / Hiragino`
- Use: corporate inline/list text action; the verified primitive remains `button` even though the source role is called a text link

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Cybozu-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured teal action treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Button can be unavailable; visual treatment omitted |
| loading | not-applicable | This navigation/list action does not itself carry loading presentation |
| error | not-applicable | This navigation/list action does not itself present validation failure |
| success | not-applicable | This navigation/list action does not itself present completion feedback |

### Corporate circular icon button

- Primitive type: button
- Kind: interactive
- Background: `#ffffff`; foreground: `#139cb7`
- Radius: source token `9999px`; captured geometry `50%`
- Height: 40px
- Shadow: `rgba(0,0,0,0.1) 0px 0px 6px 0px`

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Cybozu-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured circular-button treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Button can be unavailable; visual treatment omitted |
| loading | not-applicable | Navigation icon control does not carry loading presentation |
| error | not-applicable | Navigation icon control does not present validation failure |
| success | not-applicable | Navigation icon control does not present completion feedback |

### Corporate content card

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the unresolved interaction evidence; it is not Cybozu-authored or a separately published UI specification.

- Primitive type: card
- Interaction kind / applicability map: omitted; interactivity is not established.
- Background: `#ffffff`; border: `1px solid #e6e6e6`
- Use: hairline-separated corporate content card on `#f6f6f6`

### kintone primary trial CTA

- Primitive type: button
- Kind: interactive
- Background: `#333333`; text: `#ffffff`
- Accent: source-described yellow/white label treatment inside the dark fill
- Radius: 8px; padding: `5px 5px 5px 20px`; height: 64px
- Font: `16px / 400 / Roboto`
- Use: “30日間無料お試し” and “アプリ作成体験”

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Cybozu-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured CTA treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Trial CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | The CTA launches the trial flow rather than presenting its progress in-place |
| error | not-applicable | Trial-flow failure is not presented by this CTA role |
| success | not-applicable | Trial completion is not presented by this CTA role |

### kintone secondary outlined button

- Primitive type: button
- Kind: interactive
- Background: `#ffffff`; text: `#231200`; border: `1px solid #d6d5d5`
- Radius: 8px; padding: `5px 5px 5px 20px`; height: 66px
- Font: `16px / 400 / Roboto`
- Use: “セミナー”, “kintoneを知る”

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Cybozu-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured outlined-button treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Button can be unavailable; visual treatment omitted |
| loading | not-applicable | Navigation action does not itself carry loading presentation |
| error | not-applicable | Navigation action does not itself present validation failure |
| success | not-applicable | Navigation action does not itself present completion feedback |

### kintone compact outlined button

- Primitive type: button
- Kind: interactive
- Background: `#ffffff`; text: `#231200`; border: `1px solid #d6d5d5`
- Radius: 4px; padding: `2px 2px 2px 12px`; height: 42px
- Use: “動画をみる”, “資料をみる”

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Cybozu-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured compact button treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Button can be unavailable; visual treatment omitted |
| loading | not-applicable | Media/document navigation does not itself carry loading presentation |
| error | not-applicable | Media/document navigation does not itself present validation failure |
| success | not-applicable | Media/document navigation does not itself present completion feedback |

### kintone feature card

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the unresolved interaction evidence; it is not Cybozu-authored or a separately published UI specification.

- Primitive type: card
- Interaction kind / applicability map: omitted; interactivity is not established.
- Background: `#ffffff`; text: `#231200`; border: `1px solid #d6d5d5`
- Radius: 10px; padding: 24px; shadow: none
- Use: product feature/use-case card — “顧客・案件管理”, “脱エクセル”

### kintone yellow badge

Classifying this badge as non-interactive is a derived editorial implementation inference from its verified label role; it is not Cybozu-authored or a separately published UI specification.

- Primitive type: badge
- Kind: non-interactive
- Reason: status/promotional label, not an action control
- Background: `#ffbf00`; text: `#231200`
- Captured radius: `8px 8px 0px 0px`; compact token record: `8px`
- Padding: `5px 8px 10px`; font: `12px / 700`
- Use: “さわってみよう！”, “30日間無料！”, “個人情報不要！”

### kintone form input

- Primitive type: input
- Kind: interactive
- Background: `#ffffff`; text: `#231200`; border: `1px solid #d6d5d5`; radius: 8px
- Use: kintone search and trial-signup fields

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Cybozu-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default field treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; visual treatment omitted |
| disabled | applicable | Form field can be unavailable; visual treatment omitted |
| loading | not-applicable | The field itself does not carry form-submission progress |
| error | applicable | Form validation can fail; visual treatment omitted |
| success | applicable | Form validation can succeed; visual treatment omitted |

### Legacy derived state guidance

These state recipes are a derived editorial implementation inference from the verified surfaces; they are not Cybozu-authored or a separately published UI specification. No measured interaction evidence is assigned to them.

| State | Legacy guidance retained without promotion to observed treatment |
|---|---|
| Empty, no apps/records | White canvas, one `#231200` kintone or `#333333` corporate explanation, and one create/try action; no illustration clutter. |
| Empty search | One `#aaaaaa` no-match line plus a path to adjust criteria. |
| Loading records/cards | Final-size skeleton cards on `#f3f3f3` or `#f6f6f6`, 10px radius, flat pulse, no shadow shimmer. |
| Loading in-place refresh | Progress stays inside the affected area while prior content remains visible. |
| Action error | Inline warm-ink explanation and retry; not only “エラーが発生しました”. |
| Field error | Message below the `1px #d6d5d5` outlined field describing valid input, not only “必須”. |
| Success | Brief calm inline confirmation and next-step link; kintone may use a `#ffbf00` chip without celebratory excess. |
| Skeleton | `#f3f3f3` final-dimension blocks, 10px radius, flat pulse. |
| Disabled | Reduced-opacity surface with `#aaaaaa` text; legacy guidance says teal/yellow actions fade rather than turn grey. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The layout grouping and portability judgments below are derived editorial implementation inferences from the verified desktop evidence and proof boundaries; they are not Cybozu-authored or a separately published UI specification.

- Corporate layout: centered news/products portal, bilingual English-over-Japanese section labels, and alternating `#ffffff` / `#f6f6f6` bands.
- kintone layout: large display headings anchor tinted bands; use-case cards form multi-column groupings in the observed desktop surface (顧客・案件管理, 脱エクセル, ワークフロー, and others).
- Exact source-body control targets are 64px for the primary CTA, 66px for the secondary outlined button, 42px for the compact button, 56px for the corporate header, and 40px for the circular icon button. The sibling proof’s additional PickUp size remains in provenance rather than becoming a source-body portable token.
- Product screenshots and illustrations use no shadow in the captured surface.
- The proof contains no multi-viewport or breakpoint capture. Mobile `<640px`, tablet `640–1024px`, desktop `1024–1440px`, and the associated collapse recipes remain unverified legacy claims in provenance and are not a responsive contract here.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The tone characterizations, source-backed directions, and avoidances below are derived editorial implementation inferences from verified first-party language; they are not Cybozu-authored or a separately published UI specification.

Corporate copy is mission-framed, factual, and measured; bilingual English section labels such as “News”, “Products”, and “Seminar・Event” sit above Japanese content. kintone copy is warmer and more inviting, using “みんな、つくれる。”, “さわってみよう！”, “30日間無料お試し”, “さくっと体験”, and “個人情報不要！” to make no-code/low-code participation concrete.

| Context | Source-backed direction |
|---|---|
| Corporate headlines | Frame teamwork and social contribution. |
| Corporate news / IR | Use factual, dated public-record language. |
| kintone product copy | Use warm, democratizing language around “みんな、つくれる。”. |
| kintone CTA | Use low-pressure, concrete trial language. |
| kintone badges | Encouraging exclamation marks are bounded to the product surface. |
| Product Design Magazine | Reflective process narration is part of the open-design context. |

Verified live titles include “サイボウズ株式会社” and “kintone（キントーン） | みんな、つくれる。業務アプリがつくれるサイボウズのノーコード・ローコードツール”. Avoid aggressive sales urgency, fear-based B2B language, undefined enterprise jargon, or language that makes no-code sound exclusive or intimidating.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Cybozu-authored or a separately published UI specification.

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

- measured mobile, tablet, desktop breakpoint changes and reflow behavior
- component-specific hover, focus-visible, pressed, disabled, loading, error, success, and reduced-motion visual treatments beyond the one named nav hover/active color
- verified transition properties, animation names, durations, easings, and reduced-motion behavior
- official distributed logo/image authority beyond the catalog favicon identity pointer
