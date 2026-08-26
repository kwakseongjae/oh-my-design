# EasyWallet Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

EasyWallet (悠遊付) is a mobile payment product in Taiwan operated by EasyCard Corporation (悠遊卡股份有限公司). EasyCard Corporation launched the EasyCard in 2002 as Taipei's contactless transit card, and it is used for MRT, buses, YouBike, and convenience-store payments. EasyWallet is its mobile product: a wallet that keeps physical-card management while adding smartphone-native payment. Its published positioning lines are 從實體到數位 (from physical to digital), EasyWallet as the card's 最佳拍檔 (best companion), and 無現生活 悠遊無限 (cashless living, unlimited ease).

This contract covers the two first-party web surfaces that were live-inspected: the EasyWallet intro site `easywallet.easycard.com.tw` and the EasyCard corporate site `www.easycard.com.tw`. It does not treat either web surface as a proxy for the EasyWallet app itself or for promotional campaign material. The two sites are also separate evidence domains from each other: the intro site supplies the scene system, the hero, and the accent palette, while the corporate site supplies the button system and `#333333` prose.

The intro site is scene-based: a white canvas (`#ffffff`) with near-white grey (`#efefef`) on alternating scenes, an oversized weight-700 「BEEP!」 hero word, the H4 tagline 「智慧升級，放心悠遊！」 (Smart upgrade, worry-free travel) in `#000000`, and white type set inside solid `#007bc6` rectangles as the emphasis device. The secondary palette carries specific jobs: magenta (`#e4007f`) on the 四大優勢 (four advantages) selector circles and animated decorative circles, golden yellow (`#f6ac19`) on step lines and feature-nav accents, and teal (`#66ecd2`) on the initial loading overlay. Noto Sans TC leads a pan-CJK stack with PingFang TC and 微軟正黑體 as cross-platform fallbacks.

Four readings above the evidence line: reading those three published lines as a continuity-rather-than-replacement stance and as a mobility framing rather than a banking one; reading 「BEEP!」 as the audible tap of an EasyCard reader; reading the teal overlay as EasyCard transit identity carried into the digital product; and reading the card's long service life as trust the app inherits. All four are a derived editorial implementation inference from the observed surfaces and public positioning; they are not EasyCard- or EasyWallet-authored statements about the interface and are not a separately published brand doctrine.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Download the EasyWallet (悠遊付) app from the intro site's App Store / Google Play block, labelled 「立即下載 / DOWNLOAD NOW」.
- Compare the 四大優勢 (four advantages) through the circle selector, and reach 悠遊付影片 (product video), 合作銀行 (partner banks), and 安全認證 (security certification) from the fixed navigation.
- Follow the 管理悠遊卡 (manage your EasyCard) step sequence that the intro site lays out as numbered feature scenes.
<!-- design-md:claim-end -->

### Audience

No individual persona is promoted. Address stakeholder groups only: existing EasyCard holders moving from the physical card to the phone, and everyday riders and shoppers using MRT, buses, YouBike, and convenience stores.

Reading those two groups as EasyWallet's audience is a derived editorial implementation inference from the published positioning and from the documented EasyCard usage domains; it is not EasyCard- or EasyWallet-authored and is not a separately published audience definition.

### Distinctive traits

- `#007bc6` brand blue as inline text-highlight blocks behind white type, and as the primary action fill
- `#e4007f` magenta on feature-selector circles and animated decorative circles
- `#f6ac19` / `#f7b146` golden yellow on step lines, the nav bottom border, and hover underlines
- `#66ecd2` teal reserved for the loading overlay — EasyCard's transit teal
- Oversized display entry: 「BEEP!」 at ~234px, weight 700
- Noto Sans TC / PingFang TC as the pan-CJK type stack
- Predominantly flat; shadow appears only on elevated cards and the fixed nav bar
- Full-viewport scenes with 0.5s transitions between them

### Principles

These five principles are a derived editorial implementation inference from the verified surfaces and from EasyCard / EasyWallet public positioning; they are not EasyCard- or EasyWallet-authored and are not a separately published UI specification.

1. **Heritage as foundation.** EasyWallet builds on 20+ years of EasyCard trust rather than away from it. *UI implication:* retain the EasyCard teal (`#66ecd2`) as a heritage touchpoint; keep the card-management metaphor.
2. **Upgrade without intimidation.** "Smart" is framed as ease, not complexity. *UI implication:* feature names stay plain Chinese verbs (嗶乘車, 掃碼付款); no unexplained fintech acronyms.
3. **One card, one app.** Integration is the core promise — physical card plus digital wallet unified. *UI implication:* card management is primary navigation, not a sub-feature.
4. **Playful at entry, calm inside.** The 「BEEP!」 hero tone gives way to functional clarity inside the app flow. *UI implication:* marketing surfaces can be expressive; transactional surfaces stay minimal and clear.
5. **Mobility first.** The tap-to-pay moment is the signature interaction. *UI implication:* the 嗶乘車 (tap-to-ride) feature stays prominent, and performance at the MRT gate is paramount.

### Avoid

The first eight items are a derived editorial implementation inference from the observed surfaces; they are not EasyCard- or EasyWallet-authored prohibitions or a separately published UI specification. The ninth is an evidence boundary.

- Do not use pure black (`#000000`) as a prose color; `#333333` is the corporate-site body color. Black is reserved for the hero tagline and the download CTA fill.
- Do not mix the magenta and yellow accents on the same element — they carry distinct roles.
- Do not set text in magenta (`#e4007f`); it belongs to the feature selectors and the animation accents.
- Do not give yellow (`#f6ac19`) a primary role; it stays secondary, on step lines, nav borders, and progress.
- Do not round buttons beyond 4–8px; the declared components avoid pill shapes.
- Do not replace Noto Sans TC with a serif face; the declared type system is sans-serif first.
- Do not spread heavy drop-shadows; elevation is reserved for floating cards and the fixed nav bar.
- Do not use teal (`#66ecd2`) as a CTA or interactive color; it is an ambient heritage tint.
- Do not infer app-screen or promotional-campaign styling from these two web surfaces.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

**Primary**

- **EasyWallet Blue** (`#007bc6`): brand primary. Inline text-highlight blocks on the intro hero, and the primary action fill on the EasyCard corporate site.
- **Blue Hover** (`#006ba8`): darkened primary for hover on blue buttons.

**Brand accents**

- **Brand Teal** (`#66ecd2`): loading-screen background; EasyCard's transit teal.
- **Accent Magenta** (`#e4007f`): decorative circle feature tabs (四大優勢 selectors) and animated background circles.
- **Accent Yellow** (`#f6ac19`): step-line indicators and feature nav highlights.
- **Nav Yellow** (`#f7b146`): nav bar bottom border and hover underlines.
- **Accent Green** (`#40a731`): success state and numbered step callouts.

The heritage attribution attached to Brand Teal — reading the loading-screen color as the physical EasyCard's transit identity carried into the digital product — is a derived editorial implementation inference from the observed overlay; it is not EasyCard- or EasyWallet-authored and is not a separately published color rationale.

**Neutral and surface**

- **Canvas** (`#ffffff`): page background and card surfaces.
- **On-Primary** (`#ffffff`): white text on blue, magenta, or yellow brand backgrounds.
- **Surface Grey** (`#efefef`): light grey for alternating scene backgrounds (s-1 intro scene, s-6 footer scene).
- **Body Text** (`#333333`): primary text color across the EasyCard corporate site.
- **Secondary Text** (`#595153`): warm dark-grey for section title copy in feature scenes.
- **Hairline** (`#bfbfbf`): separator and form-input border.
- **Placeholder** (`#413b3b`): form input placeholder text.
- **Ink** (`#000000`): the H4 hero tagline and the app-download CTA fill.

### Spacing

Base unit 4px. Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px.

### Shape

- Sharp / none (0px): EasyCard nav links
- Small (4px): buttons, inputs, feature badges
- Medium (8px): cards and content containers
- Large (16px): recorded in the token record; no use is named for it
- Full (9999px): circle feature selectors

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Most surface areas, nav links |
| Card (Level 1) | `rgba(0, 0, 0, 0.15) 0px 10px 20px 0px` | Elevated white content cards |
| Nav (Level 2) | `rgba(0, 0, 0, 0.2) 0px 2px 4px 0px` | Fixed nav bar lift |

Depth is used sparingly: only elevated cards and the fixed nav bar carry shadow. Reading the full-screen `#ffffff` ↔ `#efefef` scene shifts as the system's main separation device in place of elevation is a derived editorial interpretation of the observed surfaces; it is not EasyCard- or EasyWallet-authored and is not a separately published elevation rule.

### Motion — durations

| Token | Value | Use |
|---|---|---|
| `motion-beep` | 100ms | Tap-to-pay NFC feedback — near-instant, mimicking the physical card beep |
| `motion-fast` | 150ms | Button press feedback, badge state change |
| `motion-standard` | 500ms | Scene-to-scene scrolljack transition |
| `motion-slow` | 750ms | Feature circle animation, page-level reveals |

### Motion — easings

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.39, 0.575, 0.565, 1)` | Arriving elements; attributed to EasyCard CSS native easing |
| `ease-exit` | `cubic-bezier(0.39, 0.575, 0.565, 1)` | Departing elements; the same curve on leave |
| `ease-standard` | `0.5s ease` (CSS default) | Scene scrolljack transitions |

Only the 500ms / `0.5s ease` scene transition is corroborated by the live intro-site inspection, which recorded the 0.5s scene-to-scene transition directly. The 100ms, 150ms, and 750ms durations, the split between an NFC-feedback register and a marketing-scene register, and the loading-overlay and reduced-motion behavior below are a derived editorial interpretation of the product's positioning; they are not EasyCard- or EasyWallet-authored and are not a separately published motion specification. Promoting any of them to an EasyWallet product-motion token requires per-component computed observation of transition properties, animation name, duration, easing, and reduced-motion behavior — a curve alone is not sufficient.

**Loading overlay.** The teal (`#66ecd2`) loading screen fades in and out with a slow opacity transition, establishing calm.

**Reduced motion.** Under `prefers-reduced-motion: reduce`, scene transitions collapse to instant, and NFC tap feedback uses a brief static color flash rather than animation.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | Both inspected sites compute body text as `"Noto Sans TC", "PingFang TC", 微軟正黑體, Semibold, "Microsoft JhengHei", Arial, sans-serif`. |
| Display / UI face | Noto Sans TC across headings, nav, and feature text. |
| System fallback | PingFang TC on macOS/iOS; 微軟正黑體 / Microsoft JhengHei on Windows; then Arial, sans-serif. |
| Official distributed asset | No EasyWallet- or EasyCard-distributed type family is established by these two inspections. |
| Outside these inspections | App and promotional-campaign typography lie outside the two web surfaces named in Scope. |

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---|---|
| Hero brand word | Noto Sans TC | ~234px | 700 | 1.0 | — | Oversized brand word 「BEEP!」 |
| H5 section headline | Noto Sans TC | 58px | 700 | 1.2 | — | Main section title (e.g. 悠遊付) |
| H4 hero tagline | Noto Sans TC | 43px | 700 | 1.2 | — | 「智慧升級，放心悠遊！」 |
| Section feature title | Noto Sans TC | 38px | 700 | 1.3 | — | Step-level feature titles (管理悠遊卡 steps), `#595153` |
| H6 sub-headline | Noto Sans TC | 25px | 500 | 1.4 | — | Sub-headline below the section H5 |
| Highlight text | Noto Sans TC | 20px | 500 | 1.5 | 0.17em | Text-highlight box content on brand blue |
| Nav link | Noto Sans TC | 13.5px | 400 | 1.4 | 0.03em | Navigation menu items |
| Body copy | Noto Sans TC | 16px | 400 | 1.5 | — | Standard prose |
| Download CTA | Noto Sans TC | 16px | 700 | 1.0 | 0.1em | App download CTA button label |
| Footer / caption | Noto Sans TC | ~11px | 300 | 1.0 | 0.1em | Footer legal text / copyright, white on the dark footer |

Caption tracking carries two recorded values that disagree: `0.1em` in the token record and `0.17em` in the hierarchy listing. The Footer / caption row above prints the token-record value because the table has one cell for it; that placement is not a selection. Both values are carried and neither is chosen — which of the two the caption actually uses is unresolved.

### Type principles

The three rules below are a derived editorial implementation inference from the observed hierarchy; they are not EasyCard- or EasyWallet-authored and are not a separately published typography doctrine.

- **Expressive display, functional body.** The oversized 「BEEP!」 establishes personality; Noto Sans TC at 16px / 400 carries informational content.
- **Letter-spacing for CJK legibility.** 0.03–0.17em tracking on Chinese body and feature text; tighter at very large display sizes.
- **Three-step weight ladder.** 700 for headlines, 500 for sub-copy, 400 for body.

### Assets

The app logo mark sits at the left of the fixed nav bar. No distributable logo file is established by these two inspections, so none is named as a reusable asset.

<!-- design-md:section components-states -->
## 4. Components & States

### Applicability rule

Declared interactive components declare state applicability by control meaning, not by how much of the control was observed. `default` and `focus-visible` apply to every declared control; a missing observation omits the visual treatment only and is never a `not-applicable` reason. This is not a complete state-coverage claim. Non-interactive components declare `kind: non-interactive` with a reason instead of an applicability map.

### App Download CTA

- Role: primary app entry point — the App Store / Google Play block on the intro site
- Kind: interactive · Control type: button
- Label: 「立即下載 / DOWNLOAD NOW」
- Anatomy: two columns (iOS / Google Play) separated by a vertical rule, center-aligned
- Background: `#000000`
- Text: `#ffffff`
- Font: 16px / 700 Noto Sans TC, tracking 0.1em
- Padding: 20px 32px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the intro site |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Store handoff can be pending; visual treatment omitted |
| error | applicable | Store handoff can fail; visual treatment omitted |
| success | applicable | Button control; visual treatment omitted |

### Action Button

- Role: action control on the EasyCard corporate site
- Kind: interactive · Control type: button
- Anatomy: label
- Radius: 4px · Font: 15px / 400 Noto Sans TC · Padding: 8px 25px

| Variant | Background | Text | Border | Hover | Use |
|---|---|---|---|---|---|
| Primary Blue (藍色按鈕) | `#007bc6` | `#ffffff` | — | background `#006ba8` | Primary action |
| Outline Blue | — | `#007bc6` | 1px solid `#007bc6` | background `#007bc6`, text `#ffffff` | Secondary action, lower emphasis |
| Yellow Accent | `#f6ac19` | `#ffffff` | — | background `#f59205` | Accent CTA in promotional contexts |
| Magenta Accent | `#e4007f` | `#ffffff` | — | background `#d5007d` | High-emphasis accent in promotional campaigns |

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the corporate site |
| hover | applicable | Hover fill recorded per variant |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Action can be pending; visual treatment omitted |
| error | applicable | Action can fail; visual treatment omitted |
| success | applicable | Action can confirm; visual treatment omitted |

### Nav Menu Item

- Role: primary navigation link — 四大優勢, 悠遊付影片, 合作銀行, 安全認證
- Kind: interactive · Control type: tab
- Font: 13.5px / 400 Noto Sans TC, tracking 0.03em
- Active: 2px bottom border `#f7b146` on hover and active
- Container: fixed nav bar, white background, 58px high, app logo at the left
- Text color carries two recorded values that disagree: `#ffffff` on the dark nav overlay in the component description, and `#000000` in the token record. Both are carried; neither is chosen.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on both inspected sites |
| hover | applicable | 2px `#f7b146` underline recorded on hover |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav destination can be withheld; visual treatment omitted |
| loading | not-applicable | The item routes to a scene or page; it holds no pending work of its own |
| error | not-applicable | Navigation failure surfaces on the destination, not on the tab label |
| success | not-applicable | Arrival is expressed by the active underline, not by a success state |

### Feature Selector Circle

- Role: round selector for the 四大優勢 (four advantages) feature scenes
- Kind: interactive · Control type: badge used as a selector
- Active: background `#e4007f`, text `#ffffff`, radius 9999px, with a mild drop-shadow
- Inactive: white fill with a `#e4007f` border
- Sizing: 17vw diameter on tablet

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive treatment recorded |
| hover | applicable | Pointer-web selector; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A selector option can be withheld; visual treatment omitted |
| loading | not-applicable | The selector switches an already-loaded scene; it owns no pending work |
| error | not-applicable | Selection cannot fail; there is nothing to report on the circle |
| success | not-applicable | Selection is expressed by the active fill, not by a success state |

### Default Text Input

- Role: standard form input
- Kind: interactive · Control type: input
- Background: `#ffffff`
- Border: 1px solid `#bfbfbf`
- Radius: 4px
- Font: 16px / 400 Noto Sans TC
- Placeholder: `#413b3b`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default treatment recorded for the declared control |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Field control; visual treatment omitted |
| loading | applicable | A field can await validation; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | Form field; visual treatment omitted |

### Non-interactive components

**Highlight Text Block** — Control type: card. Background `#007bc6`, text `#ffffff`, font 20px / 500 Noto Sans TC, padding 8px 12px. Inline brand-blue box wrapping key product-promise sentences. Kind: non-interactive — a typographic emphasis wrapper around body copy, carrying no control affordance.

**Surface Card** — Control type: card. Background `#efefef`, text `#333333`, radius 8px. Content section on a grey-background scene. Kind: non-interactive — a static content container.

**Elevated White Card** — Control type: card. Background `#ffffff`, text `#333333`, radius 8px, shadow `rgba(0, 0, 0, 0.15) 0px 10px 20px 0px`. Floating feature content card on the white or grey page. Kind: non-interactive — a static content container.

**Success / Step Badge** — Control type: badge. Background `#40a731`, text `#ffffff`, radius 4px, font 12px / 400 Noto Sans TC. Step numbering, success states, step-1 indicator. Kind: non-interactive — a status indicator rendered by surrounding state rather than operated directly.

### Product state treatments

| State | Treatment |
|---|---|
| **Loading / Launch** | Full-viewport teal (`#66ecd2`) overlay — brand-heritage color signals the app is initializing |
| **Empty (no transaction history)** | White canvas, `#595153` secondary text explaining there are no records, blue link to make a first payment |
| **Loading (data fetch)** | Minimal spinner or skeleton row in `#efefef` grey at card height; no heavy shimmer |
| **Error (payment failed)** | Inline message in `#595153` with a plain-language Chinese explanation; retry CTA in blue `#007bc6` |
| **Error (network / beep failed)** | Immediate inline feedback — 「感應失敗，請再試一次」 — tap-to-retry within 0.5s |
| **Success (payment confirmed)** | Brief green (`#40a731`) confirmation check; amount and merchant confirmed; auto-dismisses |
| **Skeleton (loading cards)** | `#efefef` placeholder blocks at card dimensions; gentle opacity pulse |
| **Disabled** | Reduced opacity on buttons; blue `#007bc6` becomes `#b3d8ee`; always provides a clear reason |

Only the Loading / Launch row is corroborated by the live intro-site inspection, which recorded the `#66ecd2` overlay directly. The other seven rows describe in-app transactional screens that lie outside the two web surfaces named in Scope; they are a derived editorial interpretation of the product's positioning; they are not EasyCard- or EasyWallet-authored and are not a separately published state specification. They stay product-level description and are not promoted to tokens for the declared web components above.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and grid

- Base unit 4px; scale 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px.
- Full-viewport scene layout: each feature occupies its own 100vh scrolljack scene (s-1 through s-6).
- Nav bar fixed at top, white background, 58px high, with a 2px `#f7b146` bottom border and the app logo at the left.
- Content is centered within scenes; text blocks are left-aligned inside centered containers.
- Dot-based vertical scene navigation on the right side for desktop.

Reading the full-viewport scenes and their 0.5s transitions as the design's central experience — pacing and whitespace doing the work decoration would otherwise do, with the `#007bc6` highlight blocks acting as punctuation in an otherwise minimal layout — is a derived editorial interpretation of the observed layout; it is not EasyCard- or EasyWallet-authored and is not a separately published layout doctrine.

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | <768px | Scenes stack to natural scroll; oversized type reduces proportionally |
| Tablet | 768–1200px | Circle sizes adjust (vw-based); navigation collapses |
| Desktop | >1200px | Full scrolljack experience; 1440px design width |

### Touch targets

- App download button at ~75px height with generous horizontal padding — the primary mobile entry
- Circle feature tabs at 17vw diameter on tablet, keeping a large touch area
- Navigation links at minimum 51px height with 15–16px padding on the corporate site

### Collapsing

- The 「BEEP!」 hero text scales down proportionally (vh-based sizing)
- Scrolljack transitions degrade to natural scroll on mobile
- The nav bar collapses its dropdown menu into a mobile overlay pattern

<!-- design-md:section content-locales -->
## 6. Content & Locales

Published product copy on the inspected surfaces is Traditional Chinese for Taiwan. Latin strings appear beside the Chinese rather than in place of it, as in the download CTA 「立即下載 / DOWNLOAD NOW」.

### Voice

Characterizing the voice as playful, reassuring, and progress-oriented, and reading 「BEEP!」 as one onomatopoeic word that carries the brand personality, is a derived editorial interpretation of the published copy; it is not EasyCard- or EasyWallet-authored and is not a separately published voice guideline. The verbatim samples below are the published strings themselves.

| Context | Tone |
|---|---|
| Hero moments | Energetic, playful. 「BEEP!」 — one word does the work. |
| Product taglines | Warm and reassuring. 放心悠遊 (worry-free travel) is the brand mantra. |
| Feature names | Clean, action-oriented Chinese: 嗶乘車, 掃碼付款, 自動加值. |
| CTAs | Direct and inclusive: 立即下載 (Download now), DOWNLOAD NOW. |
| Legal / footer | Matter-of-fact. Low-key copyright and policy language. |

### Verbatim samples

- 「一卡一付 無現生活更進一步！」 — page title, on app and card convergence
- 「智慧升級，放心悠遊！」 — hero H4 tagline (Smart upgrade, worry-free travel)
- 「悠遊付=最聰明的電子錢包」 — feature section, product positioning
- 「感應失敗，請再試一次」 — inline retry message for a failed tap
- 「立即下載 / DOWNLOAD NOW」 — app download CTA label

### Terminology

The names and lines below are published strings, carried verbatim. The handling rule attached to the first item is a derived editorial implementation inference from how the published download CTA pairs 立即下載 with DOWNLOAD NOW side by side; it is not EasyCard- or EasyWallet-authored and is not a separately published editorial policy.

- 悠遊付 is the product name; 悠遊卡股份有限公司 (EasyCard Corporation) is the operator. Keep Chinese names in Chinese and place any English gloss beside them, never in place of them.
- Feature names as published: 嗶乘車 (tap to ride), 掃碼付款 (scan to pay), 自動加值 (auto top-up), 管理悠遊卡 (manage EasyCard).
- Positioning lines used publicly: 從實體到數位 (from physical to digital), 最佳拍檔 (best companion), 無現生活 悠遊無限 (cashless living, unlimited ease).

### Forbidden register

Banking jargon, fear-based urgency, overly formal institutional language, and foreign-word-heavy copy that loses the approachable Taiwanese sensibility. This register constraint is a derived editorial implementation inference from the published copy; it is not EasyCard- or EasyWallet-authored and is not a separately published editorial policy.

<!-- design-md:section governance -->
## 7. Governance

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

### Evidence scope

The two inspected web surfaces are separate evidence domains from each other and from the EasyWallet app. A value observed on one does not populate another. Public company history explains brand context and does not by itself supply interface tokens.

### Named gaps

These are unnamed values, not permissions to invent:

- focus-visible visual treatment for the declared interactive controls
- computed screen values behind the product-level state and motion descriptions
- a distributable logo file behind the app logo mark
