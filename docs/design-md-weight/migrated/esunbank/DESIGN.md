# E.SUN Bank Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

E.SUN Bank (玉山銀行) is a Taiwanese commercial bank whose public site is esunbank.com. It was founded in 1992 as part of the liberalization of Taiwan's banking sector, and its name 玉山 (Jade Mountain) refers to Taiwan's highest peak — a reference the reviewed material reads as a metaphor for aspiration, stability, and the Taiwanese spirit. Over three decades it has grown into one of Taiwan's private banks recognized for digital innovation, ESG leadership, and customer-centric service. That namesake reading and that recognition characterization are a derived editorial interpretation carried in the reviewed material; they are not E.SUN-authored or a separately published brand statement. The 1992 founding, the name 玉山, and the esunbank.com site are the factual parts.

The present evolution recorded here is how that digital and ESG positioning appears on the public site. A dedicated 探索數位服務 (Explore digital services) section sits on the personal-banking homepage; 玉山Wallet and mobile banking are presented alongside traditional products; and the homepage hero carries an ESG campaign headline, 一個好的ESG策略就是一個好的企業發展策略 ("A good ESG strategy is a good business development strategy"). ESG 永續金融 sits at the same top-tier navigation level as 個人金融, 企業/商家, and 私銀/亞資.

This contract covers the 2026-06-22 live inspection of two public routes only: the personal-banking homepage `https://www.esunbank.com/zh-tw/personal` and the credit-card category page `https://www.esunbank.com/zh-tw/personal/credit-card`. The color, type, layout, and component values below stay attached to those two routes. They are not a specification for the 企業/商家, 私銀/亞資, or ESG 永續金融 segments, for 玉山Wallet or mobile banking, or for any surface reached through 登入.

The following characterization of that interface is a derived editorial implementation inference from the verified surfaces; it is not E.SUN-authored or a separately published UI specification. The captured layer reads as clean, credentialed, and warmly approachable rather than corporate-cold. A single jade teal saturates every interactive element from primary CTAs to section headings, and it reads as ESG-conscious, responsible-finance warmth rather than the stiffness of traditional banking navy; teal means important, navigational, or actionable. Depth comes not from shadows as such but from a teal-tinted ambient glow that harmonizes with the palette, so that even the depth signal reads as E.SUN. The result reads as a modern Taiwanese bank that has genuinely invested in its digital product, oriented toward everyday consumers navigating credit cards, savings, and investments in one cohesive interface. Two further readings carry the same qualification, and the reviewed material marks both as editorial rather than as E.SUN statements: that the jade-teal color ties the bank's digital identity back to its mountainous namesake and to the green ESG values it champions publicly, and that ESG is a core operating principle rather than a PR signal.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Open a bank account online from the 線上開戶 (open account online) primary CTA in the global navigation header.
- Sign in from the 登入 login text-link in the same header.
- Read the 外幣匯率 (foreign exchange rate) table in the exchange-rate widget on the personal-banking homepage.
- Move into digital banking from the 探索數位服務 (Explore digital services) homepage section.
- Browse credit-card products on the 信用卡/支付 category page, where 信用卡介紹 introduction cards sit under the 產品與服務 / 生活金融 / 申辦/繳費 sub-navigation.
<!-- design-md:claim-end -->

### Audience

The reviewed material presents four named archetypes and states in the same place that they are fictional, informed by publicly observable segments rather than individual people. Fictional archetypes are not verified audience evidence, so no name, age, city, motivation, or behavior from them is carried forward.

What remains is segment-level: the site's own top-tier navigation separates 個人金融, 企業/商家, 私銀/亞資, and ESG 永續金融, and both captured routes belong to 個人金融. Reading the personal-banking surface as oriented toward everyday consumers navigating credit cards, savings, and investments is a derived editorial implementation inference from the verified surfaces; it is not E.SUN-authored or a separately published UI specification. No individual persona, demographic, spending pattern, or conversion behavior is asserted.

### Distinctive traits

- Jade teal `#00a19b` is the single interactive and heading color — consistent from nav to CTA to section titles.
- Deep teal `#007a7a` carries the campaign and hero headline weight.
- Noto Sans TC with Microsoft JhengHei (微軟正黑體) — the Traditional Chinese web-font standard for legibility.
- Weight 700 for hero display, weight 500 for sections, weight 400 for body and UI.
- Elevation is a teal ambient shadow `rgb(208, 230, 230) 0px 0px 12px 0px` rather than a grey or black drop shadow.
- Near-black ink `#1c1c1c` for body text; muted grey `#7c7c7c` for secondary.
- A strict 4px base radius on interactive elements; 8px on content cards.
- ESG and digital banking are foregrounded on the homepage: an ESG hero campaign and a dedicated 探索數位服務 section.

One entry in that list is a reading rather than a measurement: calling Noto Sans TC with Microsoft JhengHei the Traditional Chinese web-font standard for legibility is a derived editorial implementation inference from the verified surfaces; it is not E.SUN-authored or a separately published UI specification. The measured part is the stack computed on both routes.

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not E.SUN-authored or a separately published UI specification.

1. **Digital as a first-class offering.** E.SUN prominently co-positions mobile banking, 玉山Wallet, and online account opening alongside traditional products. *UI implication:* digital CTAs (線上開戶) appear in the global nav, not buried in a product tab; digital services have their own homepage section.
2. **ESG and finance are inseparable.** The bank leads its homepage with an ESG campaign, treating sustainability as core identity rather than a sidebar. *UI implication:* the ESG navigation item sits at the same tier as personal banking and corporate banking.
3. **Teal as trust.** The single brand color is warm, natural, and non-aggressive — a deliberate departure from banking's traditional navy-and-gold. *UI implication:* teal is used consistently rather than strategically reserved, building brand recognition through repetition rather than scarcity.
4. **Clarity over decoration.** The design system uses functional shadows, clean typography, and minimal ornament. *UI implication:* no gradients, no illustrations cluttering the interface, no decorative patterns that compete with financial content.
5. **Traditional Chinese fluency.** The UI is built for TC-reading users — font stacks, sizing, and layout density reflect CJK typographic conventions. *UI implication:* fonts and spacing are calibrated for character density, not adapted from a Latin-first template.

### Capture-bound application

These 10 items are a derived editorial implementation inference from the verified surfaces; they are not E.SUN-authored or a separately published UI specification.

- Use jade teal `#00a19b` consistently for interactive elements, headings, and navigational signals.
- Use deep teal `#007a7a` for campaign hero headlines to add authoritative weight.
- Apply the teal ambient shadow `rgb(208, 230, 230)` on elevated cards and containers.
- Use Noto Sans TC at 32px / weight 500 for section headings, keeping the 32px / 48px rhythm that holds the homepage grid stable.
- Keep button radius at 4px; E.SUN does not use pill or round buttons on the captured surfaces.
- Use near-black ink `#1c1c1c` for body text; never pure black.
- Separate sections with `#f4f8fa` tinted background shifts and `#d9d9d9` hairline borders.
- Maintain the Traditional Chinese font priority in the stack: Noto Sans TC → Microsoft JhengHei.
- Teal text for structure, ink for content: teal appears in headings and section labels so hierarchy does not rely on size alone, while body copy stays `#1c1c1c`.
- Weight 500 is the section voice — confident and approachable rather than loud.

### Avoid

These boundary rules are read off the captured surfaces and are a derived editorial implementation inference from them; they are not E.SUN-authored or a separately published UI specification.

- Do not use grey or black shadows; the observed elevation language is teal-tinted.
- Do not apply rounded corners above 8px on cards or buttons — the aesthetic is structured and precise.
- Do not spread accent colors beyond teal. The reviewed material records no red, orange, or purple in the primary UI; the validation red `#c92e34` is a form-error color, not an accent.
- Do not use bold (700) weight for section headings — Medium (500) is the deliberate section voice.
- Do not place pure black `#000000` text in body copy; the ink is `#1c1c1c`.
- Do not create pill-shaped CTAs; the captured CTAs use the conservative 4px radius.
- Do not use muted grey `#7c7c7c` for headings — grey is reserved for inactive and secondary states.
- Do not mix multiple heading colors: teal for structural headings, ink for content, deep teal for the hero only.

The rationale clauses inside that list — that the above-8px prohibition protects a structured and precise aesthetic, that Medium (500) is a deliberate section voice rather than simply the observed weight, and that the conservative 4px radius reads as a trust signal in the banking context — are a derived editorial implementation inference from the verified surfaces; they are not E.SUN-authored or a separately published UI specification. The measured parts are the observed 4px and 8px radii, the observed 500 section weight, and the observed color roles.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **E.SUN Teal / Primary** (`#00a19b`): CTA button backgrounds, active nav labels, section headings, card borders. Recorded as the live interactive teal and as the catalog identity color.
- **Deep Teal** (`#007a7a`): hero campaign headlines and high-impact typography.
- **Pure White / Canvas** (`#ffffff`): page background and card surfaces.
- **On-Primary** (`#ffffff`): text on teal CTA buttons and teal backgrounds. The same value as the canvas, kept as its own role rather than merged into it.
- **Surface Blue-Grey** (`#f4f8fa`): cool-tinted off-white for alternating content sections and subtle zone separation.
- **Surface Alt** (`#f5f5f5`): secondary neutral surface for lighter content zones.
- **Teal Tint** (`#d0e6e6`): the shadow color — the teal tint used for the ambient card glow.
- **Hairline** (`#d9d9d9`): thin borders, table dividers, input outlines.
- **Ink** (`#1c1c1c`): primary body text; a near-black rather than pure black.
- **Muted** (`#7c7c7c`): secondary nav labels, inactive states, supporting copy.
- **Muted Alt** (`#999999`): tertiary text, fine print, metadata.
- **Error** (`#c92e34`): validation errors, described as rare but present in form surfaces.

### Evidence-domain boundary

Both captured routes are public 個人金融 pages. The values above stay attached to them and do not extend to the other navigation segments or to 玉山Wallet or mobile banking. The header's 登入 link was measured on those two routes as a link — text color, radius, padding, and type — and nothing it opens was measured. Brand-published financial language — product names, campaign lines, rate-section labels, and account-opening CTAs — is published copy, not measurement: no color, radius, spacing, or type value in this contract describes a financial product, an interest or exchange rate, an eligibility condition, or a term of service, and none may be read as evidence about one.

### Spacing

Base unit 4px, with a recorded scale of `xs` 4px, `sm` 8px, `md` 16px, `base` 20px, `lg` 24px, `xl` 30px, `xxl` 48px, and `section` 64px.

Placements the reviewed material names: 30px horizontal padding for service CTAs inside content cards, 20px horizontal padding on nav sub-items, and 24px top padding on each teal H2 section heading.

### Shape

- `sm` 4px — buttons, input fields, small card containers; the system default.
- `md` 8px — feature cards and activity cards, i.e. elevated content containers.
- `lg` 16px — present in the scale but described as not observed on the primary surfaces and reserved for special UI. The surface it belongs to is unresolved, so no placement is stated.
- `full` 9999px — present in the scale and described as not the primary pattern; the captured CTAs use the 4px radius rather than a pill.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | `none` | Nav background, page background, text elements |
| Teal Glow (Level 1) | `rgb(208, 230, 230) 0px 0px 12px 0px` | Cards, table containers — brand-colored ambient elevation |
| Overlay (Level 2) | `rgba(0,0,0,0.51)` background | Modal overlays / drawer backgrounds |

The recorded observations cover the teal glow on white content cards and on the exchange-rate table. The overlay level names modal and drawer backgrounds, and its value stays attached to that elevation table rather than to a named captured element.

Reading the teal shadow as a deliberate on-brand depth signal — that even the depth reads as E.SUN, that traditional black and grey drop shadows are absent from the primary layout, and that floating elements therefore feel like they belong to the same design language as the buttons and headings — is a derived editorial implementation inference from the verified surfaces; it is not E.SUN-authored or a separately published UI specification.

### Motion

Duration scale as recorded:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Nav hover, button hover feedback |
| `motion-standard` | 200ms | Card reveal, panel transition, dropdown |
| `motion-slow` | 350ms | Page-level transitions, hero banner carousel |

Easing roles as recorded, with the curve values omitted:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; no E.SUN-published source for the curve) | Arriving elements — sheets, cards |
| `ease-exit` | omitted (unattributed cubic-bezier; no E.SUN-published source for the curve) | Dismissals — close animations |
| `ease-standard` | omitted (unattributed cubic-bezier; no E.SUN-published source for the curve) | Two-way transitions |

Reduced motion: under `prefers-reduced-motion: reduce`, all transitions collapse to instant while full functionality is maintained.

The duration values and their assignments, the reduced-motion rule, and the characterization of the motion — functional and calm rather than flashy, a homepage banner carousel that changes at a measured pace, interactive elements (CTAs, nav items) answering hover with near-instant feedback, and motion that must inspire confidence rather than excitement for a bank handling financial transactions — are a derived editorial implementation inference from the verified surfaces; they are not E.SUN-authored or a separately published motion specification. The recorded inspection measured computed color, type, and component geometry and contains no motion measurement. Promoting an exact easing curve to an E.SUN motion token requires a per-component computed observation of the transition properties, the animation name, the duration, the easing, and the reduced-motion behavior; a single named curve or duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No reviewed first-party E.SUN source publishes a typography token for the captured routes. |
| Live computed surface-use | The 2026-06-22 inspection computed body text as `"Noto Sans TC", Arial, 微軟正黑體` at 16px in `rgb(28,28,28)` (`#1c1c1c`) on both routes, and recorded the heading, nav, and CTA sizes and weights in the role table below. |
| Declared fallback chain | The system fallback order is recorded as 微軟正黑體 (Microsoft JhengHei) → 新細明體 → `sans-serif`, described as covering Windows and macOS Traditional Chinese environments. |
| Official distributed asset | No E.SUN-distributed type family is established in this pass. |
| Unresolved claim | The reviewed material states that Noto Sans TC is loaded for all Traditional Chinese content, while the observation record carries the computed font-family only. The family is computed on the captured surfaces; it is not established here as an E.SUN-owned or E.SUN-licensed face. |

### Family

- **Display / primary:** `Noto Sans TC` — described in the reviewed material as loaded for all Traditional Chinese content and UI elements, and computed on both captured routes.
- **UI:** `Microsoft JhengHei` (微軟正黑體).
- **Fallback:** `Arial, sans-serif`.
- Composite stack as recorded: `Noto Sans TC` with `Arial` and `Microsoft JhengHei` as fallbacks, then 微軟正黑體 → 新細明體 → `sans-serif` as the system chain.
- Do not present a system fallback as an E.SUN brand face, and do not substitute this stack for an unobserved family on another surface.

### Type roles

| Role | Font | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Display Hero | Noto Sans TC | 38px | 700 | 1.4 | Hero ESG / campaign banner headline, bold declaration, in `#007a7a` |
| Page Title (H1 product) | Noto Sans TC | 36px | 500 | 1.5 | Product category page titles (信用卡/支付) |
| Section Heading (H2) | Noto Sans TC | 32px | 500 | 48px (1.5) | All major section titles in `#00a19b` — 外幣匯率, 最新消息, 探索數位服務 |
| Feature Sub-head (H3) | Noto Sans TC | 20px | 500 | 30px (1.5) | Feature card sub-headings and product intros in `#00a19b` — 便利支付，交給玉山Wallet |
| Sub-nav | Noto Sans TC | 18px | 400 | 1.4 | In-page sub-navigation links |
| Body | Noto Sans TC | 16px | 400 | 1.5 | Standard reading text, list items, UI labels |
| Button | Noto Sans TC | 16px | 400 | 1.0 | CTA labels (線上開戶, 登入, 返回首頁) |
| Nav Top-tier | Noto Sans TC | 14px | 400–500 | 1.4 | Top navigation items; active state weight 500 |

The hero, page-title, sub-nav, and nav line heights are recorded as approximate (`~1.4`, `~1.5`); the section and sub-head roles carry the exact 48px and 30px measurements alongside their 1.5 ratio.

### Assets

- Site icon: `https://www.esunbank.com/zh-tw/-/media/New-ESUNBANK/icon/apple-touch-icon/esun-icon.png`, an apple-touch-icon recorded as the catalog logo entry of type favicon.
- The reviewed material establishes no other first-party E.SUN asset for the captured routes, and none is substituted here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The 2026-06-22 inspection recorded computed styles on two desktop routes and harvested the components below. Its observation list holds default appearances only: it contains no interaction event, no hover transition, and no focus or pressed treatment. Two state appearances were separately marked as verified live — the page-not-found heading and the active top-tier nav item — and they appear as such in the state contract that follows.

A declared interactive component still closes Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A missing observation omits the visual treatment only; it is never a `not-applicable` reason. Where a canonical state carries no meaning for a control's role, it is marked `not-applicable` with that semantic reason. State coverage is not complete here.

### Source state contract

The state contract as recorded. Only the two rows marked verified live are observed appearances; the remaining nine rows are a derived editorial implementation inference from the verified surfaces, describing how those states would be built in this system. They are not E.SUN-authored, not observed, and not a separately published state specification.

| State | Treatment |
|---|---|
| **Empty (no transactions)** | White canvas with teal-labeled section heading; single ink body line explaining no recent activity, with a teal CTA to explore products. |
| **Empty (search no results)** | The 404 pattern: teal H1 with friendly explanation ("很抱歉，找不到您所查詢的頁面") + large 65px teal CTA "返回首頁". |
| **Loading (data fetch)** | Skeleton blocks on `#f4f8fa` surface at card dimensions with teal-tinted ambient shadow; flat pulse consistent with the shadow system. |
| **Loading (exchange rate)** | Inline loading state within the exchange rate table card; previous values remain visible. |
| **Error (form validation)** | Inline error message below the input field; teal border shifts to error red (`#c92e34`); plain Chinese error description. |
| **Error (service unavailable)** | Teal heading with calm plain-language explanation; retry CTA in teal. |
| **Error (page not found)** | "很抱歉，找不到您所查詢的頁面" in teal 30px weight 500; chatbot link + large return button. *(verified live)* |
| **Success (account opened)** | Calm teal confirmation message; next-step guidance below immediately. |
| **Skeleton** | `#f4f8fa` blocks at final card dimensions; teal-shadow glow maintained even on skeleton. |
| **Disabled** | Muted grey (`#7c7c7c`) text; reduced opacity on teal elements; hairline border replaces teal border. |
| **Active nav** | Teal (`#00a19b`) text at weight 500 on active top-tier nav item; no underline — color weight shift alone signals active. *(verified live)* |

### Primary CTA — 線上開戶

- Role: primary call-to-action in the global navigation header (open account online)
- Kind: interactive
- Type: button
- Background: `#00a19b`
- Text: `#ffffff`
- Border: 1px solid `#00a19b`
- Radius: 4px
- Padding: 10px
- Height: 46px
- Font: 16px / 400 / Noto Sans TC
- Label: 線上開戶
- Observed: default appearance on the captured personal-banking homepage

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the personal-banking homepage |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | The state contract describes a disabled treatment: muted grey `#7c7c7c` text, reduced opacity on teal elements, hairline border in place of the teal border |
| loading | not-applicable | A global-nav CTA opens the account-opening route; the control itself does not enter a loading state |
| error | not-applicable | Following the CTA is a navigation action, not a request or validation failure on the control |
| success | not-applicable | Account-opening confirmation is a separate screen state in the contract above, not an outcome state of this header control |

### Large Return CTA — 返回首頁

- Role: prominent return-to-home button on error / 404 pages
- Kind: interactive
- Type: button
- Background: `#00a19b`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 50px
- Height: 65px
- Font: 16px / 400
- Label: 返回首頁

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the error-page return control |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | The state contract's disabled treatment applies to teal controls |
| loading | not-applicable | This control returns to the homepage; it does not wait on a request of its own |
| error | not-applicable | The control already sits on the error screen; it reports no failure of its own |
| success | not-applicable | Returning home is a navigation action, not an action-outcome confirmation |

### Hero Ghost Link — 線上開戶 (secondary)

- Role: secondary CTA within hero campaign banners
- Kind: interactive
- Type: button
- Text: unresolved. The reviewed material carries two values for this one field — `#00a19b` in the token record and `#007a7a` in the component description — and neither is selected here.
- Border: 1px solid `#00a19b`, described in the component text as an implicit teal outline
- Radius: 4px
- Padding: 8px 20px
- Font: 20px / 400
- Label: 線上開戶

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the hero secondary CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | The state contract's disabled treatment applies to teal controls |
| loading | not-applicable | A hero CTA opens the account-opening route; the control itself does not enter a loading state |
| error | not-applicable | Following the CTA is a navigation action, not a request or validation failure on the control |
| success | not-applicable | Account-opening confirmation is a separate screen state, not an outcome state of this hero control |

### Login Link — 登入

- Role: login text-link in the global navigation header
- Kind: interactive
- Type: link — the reviewed material describes it as a login text-link with a transparent background
- Text: `#00a19b`
- Radius: 0px
- Padding: 10px 40px 10px 10px
- Font: 16px / 400
- Label: 登入

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured in the global nav header |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | The reviewed material calls it a login text-link, and a login entry point can be unavailable; visual treatment omitted |
| loading | not-applicable | The measured control is a navigational text link; it hands off rather than running an operation in place, so it has no loading state of its own |
| error | not-applicable | Nothing resolves on this link — it hands off to whatever it opens — so no failure outcome can render on it |
| success | not-applicable | Link meaning is the destination, not an action-outcome confirmation |

### Top-tier Navigation

- Role: top segment navigation (個人金融, 企業/商家, 私銀/亞資, ESG 永續金融)
- Kind: interactive
- Type: tab
- Text (default): `#7c7c7c` / weight 400
- Text (active): `#00a19b` / weight 500
- Font: 14px / 400 / Noto Sans TC
- Height: about 20px nav items inside a 70px header
- Background: `#ffffff` header surface
- Observed: the active item 個人金融 computed as `#00a19b` at weight 500, with no underline

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive items captured at `#7c7c7c` / 400 |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | A navigation segment can be unavailable; visual treatment omitted |
| loading | not-applicable | A top-tier tab selects a navigation segment; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: active (`#00a19b`, weight 500, no underline). That is a captured appearance, not an observed transition, and it is not `focus-visible` evidence.

### Sub-navigation (in-page)

- Role: secondary nav tabs on product pages (產品與服務, 生活金融, 申辦/繳費)
- Kind: interactive
- Type: tab
- Text: `#1c1c1c`
- Padding: 8px 20px
- Height: 42px
- Font: 18px / 400

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the credit-card category page |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | An in-page section can be unavailable; visual treatment omitted |
| loading | not-applicable | A sub-nav tab selects an in-page grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

### Text Input / Form Field

- Role: standard form and search input on white surfaces
- Kind: interactive
- Type: input
- Background: `#ffffff`
- Border: 1px solid `#d9d9d9`
- Radius: 4px
- Font: 16px / 400 / Noto Sans TC

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the form-field resting appearance |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable field; visual treatment omitted |
| disabled | applicable | A form field can be unavailable; the contract's disabled treatment names muted grey text and a hairline border |
| loading | applicable | A search or form field whose submission can be pending; visual treatment omitted |
| error | applicable | The state contract names an inline error message below the field, with the border shifting to `#c92e34` |
| success | applicable | A form field can carry validation confirmation; visual treatment omitted |

### Feature / Activity Card

- Role: activity and news card (最新消息)
- Type: card
- Kind: omitted. The reviewed material records this as a content container with no interactive-kind evidence, so no Core §4.4 state-applicability map is declared and it is not recast as a button.
- Background: `#ffffff`
- Radius: 8px
- Shadow: `rgb(208, 230, 230) 0px 0px 12px 0px`
- Use: activity cards and news cards, with the teal-tinted ambient shadow as brand-colored elevation

### Exchange Rate Table Card

- Role: 外幣匯率 exchange-rate widget container on the personal-banking homepage
- Type: card
- Kind: omitted, on the same grounds as the feature card — a container with no interactive-kind evidence.
- Background: `#ffffff`
- Radius: 4px
- Shadow: `rgb(208, 230, 230) 0px 0px 12px 0px`

### Hero Service Item Cards

- Role: quick-access service link tiles overlaid on the teal hero background
- Kind: interactive — the reviewed material describes these as hero CTA service items and as link tiles.
- Type: card
- Background: transparent, `rgba(0, 0, 0, 0)`
- Border: 1px solid `#ffffff`
- Radius: 4px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the hero service tiles |
| hover | applicable | Pointer-web tile link; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | A quick-access service can be unavailable; visual treatment omitted |
| loading | not-applicable | A service tile opens its service route; the tile itself does not enter a loading state |
| error | not-applicable | Tile meaning is the destination, not a request or validation failure on the tile |
| success | not-applicable | Opening a service is not an action-outcome confirmation on the tile |

### Content Service Card (信用卡 page)

- Role: 信用卡介紹 product introduction card on the credit-card category page
- Type: card
- Kind: omitted, on the same grounds as the other containers — no interactive-kind evidence.
- Background: `#ffffff`
- Border: 1px solid `#00a19b`
- Radius: 4px
- Padding: 30px

### Section Heading Badge

- Role: section-level heading label (teal label) that functions as a visual badge for a content zone
- Kind: non-interactive — it is a heading text label rather than a control, so it declares no state-applicability map.
- Type: badge
- Text: `#00a19b`
- Radius: 0px
- Font: 32px / 500
- Note recorded with the token: a 非图形 badge pattern, i.e. a non-graphical one carried by the heading text itself.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and grid

Base unit 4px, with the scale 4px, 8px, 16px, 20px, 24px, 30px, 48px, 64px. The page uses a full-width structure with a centered content max-width. The homepage order is hero banner → quick-service tiles → exchange rate widget → news/activities → digital services → articles. Product pages run breadcrumb header → H1 → sub-nav tabs → service cards in a responsive grid. Cards sit in a 3–4 column grid on desktop and collapse to a single column on mobile. The desktop grid is the measured part; the mobile collapse stated here is a derived editorial implementation inference from the verified surfaces, not E.SUN-authored or a separately published responsive specification.

### Whitespace

Section padding is generous: each teal H2 heading carries 24px top padding. Cards sit apart inside their grid container, with the shadow providing grouping instead of tight borders, and the hairline `#d9d9d9` is used sparingly because teal and the shadow do the primary organizing. That reading of the whitespace intent is a derived editorial implementation inference from the verified surfaces; it is not E.SUN-authored or a separately published layout specification. The 24px heading padding and the 30px and 20px paddings in Foundations are the measured parts.

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | <768px | Single column, nav collapses to hamburger, hero text reduces |
| Tablet | 768–1024px | 2-column cards, sub-nav may wrap |
| Desktop | 1024px+ | Full multi-column layout, 3–4 card grids |

### Touch targets and collapsing

- Primary CTA 線上開戶 at 46px height — comfortably tappable.
- Large return CTA at 65px height — oversized for error-page reassurance.
- Sub-nav links at 42px height with 20px horizontal padding — generous tap area.
- Hero headline font-size scales down on mobile while maintaining weight 700.
- The service tile grid collapses from multi-column to single column.
- The exchange rate widget becomes a scrollable table on narrow viewports.
- News/activity tabs keep their 42px height across all breakpoints.

The recorded inspection covers computed styles on two desktop routes. The breakpoint table, the collapsing strategy, and the tap-comfort reading of the 46px, 65px, and 42px heights are a derived editorial implementation inference from the verified surfaces; they are not E.SUN-authored or a separately published responsive specification. Those three heights are desktop measurements of the named controls, not accessibility-target rules.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Brand-published lines

Three lines are marked verbatim from the live homepage, 2026-06-22:

- 一個好的ESG策略就是一個好的企業發展策略 — hero headline, a principled declaration. (Rendering given alongside it in the reviewed material: "A good ESG strategy is a good business development strategy.")
- 探索數位服務 — section heading, an invitation to digital tools. (Rendering given alongside it: "Explore digital services.")
- 便利支付，交給玉山Wallet — feature sub-head, benefit + brand product.

The role notes beside those three lines — principled declaration, invitation to digital tools, benefit plus brand product — are a derived editorial implementation inference from the verified surfaces; they are not E.SUN-authored or a separately published voice specification. The published strings and their live markers are the measured parts.

One further line is marked verified live in the state contract:

- 很抱歉，找不到您所查詢的頁面 — page-not-found message, shown with the 返回首頁 return control. Neither belongs to the two routes listed above.

Labels recorded on the two captured routes, as section, navigation, control, and page names rather than as marked voice samples:

- Section headings 外幣匯率, 最新消息, 探索數位服務.
- Top-tier navigation 個人金融, 企業/商家, 私銀/亞資, ESG 永續金融; in-page sub-navigation 產品與服務, 生活金融, 申辦/繳費.
- Control labels 線上開戶 and 登入.
- Page labels 信用卡/支付 and 信用卡介紹.

One marketing line is quoted in the reviewed material without a live marker, so it stays at that lower evidence class:

- 便利你的生活日常. (Rendering given alongside it: "making your everyday life more convenient.")

The English renderings above are the reading aids supplied with the reviewed material. They sit beside the published strings and never replace them: the published copy is the Traditional Chinese.

### Voice reading

The characterization below and the five context rows that follow are a derived editorial implementation inference from the verified surfaces; they are not E.SUN-authored or a separately published voice specification.

E.SUN Bank's voice reads as trustworthy, progressive, and accessible — a traditional commercial bank that has embraced digital transformation and wants its customers to feel that journey alongside it. The ESG hero headline exemplifies the register: principled, direct, and substantive for a bank homepage. It does not pitch; it declares a point of view. Marketing copy positions E.SUN as a partner in daily financial life rather than a transactional institution.

| Context | Tone |
|---|---|
| Hero / campaign | Principled and declarative. 一個好的ESG策略就是一個好的企業發展策略. Confidence without hype. |
| Product pages | Benefit-first and practical. 便利支付，交給玉山Wallet. Clear feature + clear promise. |
| Digital services | Invitation-style. 探索數位服務 — curious, not pushy. |
| CTAs | Direct and frictionless. 線上開戶, 登入, 返回首頁 — task-oriented plain language. |
| Financial content | Factual and empowering. Exchange rates, news — data-dense but clearly labelled. |

### Forbidden register

The same editorial reading names a forbidden register: fear-based urgency (限時優惠), predatory lending framing, jargon-heavy financial gatekeeping, and aggressive upsell language. This is an authoring rule for writing in this style. It is not an E.SUN-published policy and it asserts nothing about the bank's actual products, lending practice, or compliance position.

### Locale

The captured routes and every published line above are Traditional Chinese, and the type stack is Traditional-Chinese first: Noto Sans TC, then Microsoft JhengHei (微軟正黑體), then 新細明體 and `sans-serif`. Keep that priority in the stack, and keep the published strings in Traditional Chinese rather than substituting a translation for them. The reading that sizing and layout density are calibrated for CJK character density rather than adapted from a Latin-first template is a derived editorial implementation inference from the verified surfaces; it is not E.SUN-authored or a separately published locale specification.

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

### Named gaps

These decisions are unnamed values, not permissions to invent:

- the exact cubic-bezier curves behind the `ease-enter`, `ease-exit`, and `ease-standard` roles
- the transition properties behind the recorded durations, until a per-component computed observation records all five motion evidence kinds
- the hover appearance of any control — the duration table names hover feedback timing without a treatment
- the Hero Ghost Link text color, where the reviewed material carries `#00a19b` and `#007a7a` for the same field
- the surface that carries the 16px `lg` radius, recorded in the scale as reserved and unobserved on the primary surfaces
- the captured element behind the `rgba(0,0,0,0.51)` overlay level
- corroboration for the reviewed material's statement that Noto Sans TC is loaded for all Traditional Chinese content — the observation record carries the computed font-family only
- color, type, and component values for the 企業/商家, 私銀/亞資, and ESG 永續金融 segments, and for 玉山Wallet and mobile banking
- any value on whatever the header's 登入 link opens — the link itself was measured, its destination was not
