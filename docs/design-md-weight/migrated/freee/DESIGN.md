# freee Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

freee develops an integrated management platform for Japanese small businesses: accounting, HR, approvals, and connected business data are framed as a way to let owners manage freely rather than spend their time on back-office work. The company was established in July 2012, and its official company profile identifies Daisuke Sasaki as CEO and founder. Its public mission is 「スモールビジネスを、世界の主役に。」, which the reviewed material renders in English as “Empower Small Businesses to Take Center Stage”; the Japanese is the published line and the English sits beside it as a reading aid.

This contract covers three public freee routes and nothing else: `https://www.freee.co.jp/`, `https://www.freee.co.jp/pricing/`, and `https://www.freee.co.jp/products/`, all recorded as public-marketing surfaces and inspected 2026-07-12. Every color, type, spacing, radius, and component value below stays attached to those three pages. None of them establishes the authenticated accounting, HR, payroll, approval, or documentation product UI, and this contract does not treat a marketing page as a proxy for one.

freee also maintains **Vibes**, an official open-source design system published at `https://vibes.freee.co.jp` with an Apache-2.0-licensed repository at `https://github.com/freee/vibes`. Vibes is a separately published freee system and its own evidence domain; the token set below comes only from the live computed capture of the three public routes. Historic Vibes values such as `#285ac8` are not substituted for the current live `#2864f0`, and no component observed on the website is generalized into an unobserved product surface. In 2023 freee publicly released Vibes together with its accessibility-related frontend-development knowledge; that release is a record of an accessibility-focused design-system initiative, and it is not authority to reclassify Vibes' historic tokens as current website values.

The following characterization of the captured pages is a derived editorial implementation inference from the verified surfaces; it is not freee-authored, and it is drawn neither from Vibes nor from any other separately published freee UI specification. On those pages the mission reads as expressed through a clean white field, a vivid practical blue, high-contrast Japanese text, and compact rounded calls to action, and the visual system reads as calm and approachable. The measured parts are the color roles, the type metrics, the geometry, and the four component records below.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

- Reach the public sign-up action in the freee public-site header.
- Take the primary action on the public pricing page at `https://www.freee.co.jp/pricing/`.
- Take the outline secondary action on that same public pricing page.
- Open a product category from the category link on `https://www.freee.co.jp/products/`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The reviewed material states that no official persona research and no product-user interviews were collected for it, and instructs that synthetic users are never created as evidence. That instruction is carried here rather than replaced.

What remains is surface-level: the three captured routes are Japanese-language and public-facing, they present a header sign-up action, pricing-page actions, a home segment-selection card, and product category links. No individual persona, demographic, business profile, or purchasing behavior is asserted.

### Distinctive traits

- A public-site primary blue `#2864f0` with white action text
- White canvas `#ffffff`, charcoal body copy `#323232`, and muted gray navigation `#595959`
- 5px compact header controls and 8px page actions and cards
- Noto Sans JP loaded across the three supplied public routes, with 1,371 visible computed uses

### Principles

These 3 items are a derived editorial implementation inference from the verified surfaces; they are not freee-authored or a separately published UI specification, and in particular they are not drawn from Vibes, which is a separately published freee system with its own content. Item 1 reads a product stance off the marketing surface: it states nothing about how freee's accounting, HR, payroll, or approval product actually behaves.

1. **Support small-business autonomy.** *UI implication:* make the relevant management outcome explicit before the call to action.
2. **Separate evidence domains.** *UI implication:* public marketing, authenticated product, documentation chrome, and historical Vibes assets must not donate tokens to one another without direct evidence.
3. **Treat accessibility as engineering practice.** *UI implication:* use the official Vibes and accessibility context for intent, but verify each public UI value at the actual surface before implementation.

### Capture-bound application

These 3 rules are a derived editorial implementation inference from the verified surfaces; they are not freee-authored or a separately published UI specification.

- Use Noto Sans JP only where its live loaded-font evidence applies.
- Keep public primary and outline actions distinct: filled blue versus white with a blue border.
- Treat the recorded pseudo-state samples as selector-specific visual evidence.

### Avoid

These boundary rules are read off the captured surfaces and are a derived editorial implementation inference from them; they are not freee-authored or a separately published UI specification.

- Do not substitute Vibes' historical `#285ac8` for the current public `#2864f0`.
- Do not promote declared-only Cherry Bomb One, Coiny, `myfont`, or swiper-icons to UI typography.
- Do not invent product-dashboard tables, badges, form states, or motion from public marketing pages.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Primary** (`#2864f0`): repeated public header and page-action fill, text, and border color across home, pricing, and products.
- **Primary hover snapshot** (`#2863ef`): pseudo-state snapshot on the pricing page-action capture; not a motion contract.
- **Primary pressed snapshot** (`#245ad9`): pseudo-state snapshot on a pricing primary action; not a universal state token.
- **Canvas** (`#ffffff`): repeated public-page action and surface background.
- **Tint surface** (`#ebf3ff`): home segment-selection card background.
- **Text** (`#323232`): observed home segment-card text and repeated public text.
- **Muted text** (`#595959`): repeated public navigation and footer text.
- **Border** (`#e1dcdc`): observed products-page category-card border.

No sale, status, warning, or dark-surface color is canonical here; a value the three pages did not compute is omitted from machine tokens rather than inferred.

The application guidance that accompanies these roles — use the white canvas with `#323232` content text and `#595959` muted text as the public-page ground, use `#ebf3ff` only in the observed segment-card context, and add no status color the capture does not show — is a derived editorial implementation inference from the verified surfaces; it is not freee-authored or a separately published UI specification. The eight role names and their values above are the measured parts.

### Evidence-domain boundary

Four evidence domains are separate here, and an observation in one never populates another's tokens:

1. **Live public capture** — the three public routes on `www.freee.co.jp`, inspected 2026-07-12. This is the only source of the color, type, geometry, and component values in this contract.
2. **Official design system** — Vibes, published at `https://vibes.freee.co.jp` and `https://github.com/freee/vibes` under Apache-2.0. It supports the existence, the open-source distribution, the licence, and the accessibility orientation of that system. It does not replace a live public token, and its broader versioned palette, status colors, and component recipes stay in that domain.
3. **Corporate context** — freee's own mission and company material supports the product and company description, the mission line, and the founding and leadership facts above. It carries no UI token, component, or font-family authority.
4. **Declared-only font assets** — raw `@font-face` declarations establish that a face was declared and nothing more.

freee-published accounting, HR, payroll, approval, and pricing language is published copy and is recorded here as copy. No color, spacing, radius, type, or component value in this contract describes an accounting treatment, a tax condition, or an HR, payroll, or approval outcome, and none may be read as evidence about one. The pricing route contributed two measured controls — their fill, border, radius, padding, font, and height — and everything else on that page stays outside this evidence base. Recording that a line or a control appears on a public page is a record of the line or the control, never a finding about the accounting or tax substance behind it.

### Historical system boundary

The official Vibes repository contains a broader, versioned component and token system under an Apache-2.0 licence. It is a historical and design-system source; it is not evidence that its legacy palette or status colors are the current values on the three public pages in this capture.

### Spacing

The spacing record is the two action paddings, kept as vertical and horizontal pairs: the header action at `4` / `20` and the page action at `10` / `16` in the token record, stated as `4px 20px` and `10px 16px` in the measured layout below. The capture establishes no general spacing scale beyond those two pairs.

### Shape

- Compact header action: 5px
- Page action and card: 8px

The capture shows local 5px and 8px geometry, not a universal radius scale.

### Elevation

No reusable shadow or elevation token is promoted. The inspected public component samples used `box-shadow: none`; the broader Vibes shadow recipes are historical system context, not live-page tokens.

### Motion

The collector recorded no interaction event and no timing data. Hover, focus, and pressed images do not establish duration, easing, or reduced-motion behavior, so no motion token is promoted here. Promoting an easing curve, a duration, or a reduced-motion behavior to a freee motion token requires a per-component computed observation that records all five kinds of motion evidence — the transition properties, the animation name, the duration, the easing, and the reduced-motion behavior. Official documentation of a single curve or a single duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed public-site use | `Noto Sans JP` is the only promoted UI-family token. It has 1,371 visible computed uses across the three routes, a high-confidence loaded FontFaceSet match, and freee-hosted Regular, Medium, and Bold OTF source URLs. |
| Official design-system context | Vibes is an official freee design system. Its repository is Apache-2.0 licensed and documents a reusable system; that does not make its historical font stack a current public-site token. |
| Declared-only | Cherry Bomb One, Coiny, `myfont`, and swiper-icons have `@font-face` declarations in the raw bundle and zero visible observed uses. They are not UI-family tokens. |
| Unobserved domains | No authenticated product screen and no documentation chrome was included in the collector evidence. This contract makes no claim about their font use. |

### Family

- **Current visible UI family:** `Noto Sans JP`
- Do not render a declared Google font, an icon face, or a system fallback as though it were Noto Sans JP.

### Measured public hierarchy

| Role | Family | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Body | Noto Sans JP | 14px | 400 | 21px (1.5) | Repeated across home, pricing, and products. Observed public-site body text. |
| Public action | Noto Sans JP | 16px | 700 | 24px (1.5) | Pricing `.c-btn-primary` and outline action. Observed public primary and outline action. |
| Public heading | Noto Sans JP | 40px | 700 | 60px (1.5) | Repeated captured h2 samples. Observed public-site heading. |
| Compact header action | Noto Sans JP | 14px | 700 | 21px | Header `.c-btn-primary` |

The token record states body, action, and heading line height as the unitless ratio `1.5`; the measured hierarchy states those same three roles in px. The compact header action is recorded in px only.

### Assets

- Catalog logo entry: type `github`, slug `freee`. That is an organization-account reference rather than a captured first-party freee mark, and it is recorded on those terms.
- Noto Sans JP is served from freee-hosted Regular, Medium, and Bold OTF sources on the captured routes.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Every component below is a public-site observation with its selector and surface preserved. The evidence base is a deterministic collector artifact over three public routes recorded 2026-07-12. The bundle reports three pseudo-state kinds and `interactionCount: 0`; hover, pressed, and focus snapshots are visual samples of a selector, not proof of transition timing, keyboard behavior, or a complete state model.

The bundle holds pseudo-state visual snapshots for selected public buttons and no observable error, loading, success, empty, disabled, dialog, or authenticated-product state model. Add a state only after recording the selector and the surface it was observed on.

A declared interactive component still closes Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A missing observation omits the visual treatment only; it is never a `not-applicable` reason. Where a canonical state carries no meaning for a control's role, it is marked `not-applicable` with that semantic reason. State coverage is not complete here.

Every declared control in this capture is a public marketing entry or destination control — a header sign-up action, two pricing-page actions, and a products category link. That is why the same three role reasons recur: none of the four opens an operation that commits or resolves on the control itself. That reading of the four control roles, and every applicability verdict built on it, is a derived editorial implementation inference from the verified surfaces; it is not freee-authored or a separately published state specification. The measured parts are the recorded selectors, surfaces, geometry, and pseudo-state snapshots.

These applicability verdicts describe those four public marketing controls and nothing else. None of them describes a control inside freee's accounting, HR, payroll, or approval product, and none asserts anything about how that product behaves.

The focus snapshots recorded below are generic focus captures on a selector. They are a different kind of evidence from a `focus-visible` treatment, so no `focus-visible` row carries a value.

### Header Action — Primary

- Role: public header sign-up action
- Kind: interactive
- Type: button
- Background: `#2864f0`
- Text: `#ffffff`
- Border: `1px solid #2864f0`
- Radius: `5px`
- Padding: `4px 20px`
- Font: `14px / 700 / Noto Sans JP`
- Height: 31px rendered
- Use: public header sign-up action only, at `home::[data-omd-capture="8"]`
- Hover snapshot: `#2761e8` background at `home::[data-omd-capture="8"]::state-hover`
- Pressed snapshot: `#2358d4` background at `home::[data-omd-capture="8"]::state-pressed`
- Focus snapshot: `#2256ce` background at `home::[data-omd-capture="8"]::state-focus`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the home route |
| hover | applicable | Pointer-web button; the recorded hover snapshot is listed above |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted, and the recorded focus snapshot is a generic focus capture rather than a `focus-visible` observation |
| disabled | applicable | A sign-up entry point can be made unavailable; visual treatment omitted |
| loading | not-applicable | A public marketing entry action opens the sign-up path; it runs no operation in place that could be pending |
| error | not-applicable | Nothing resolves on this control, so no failure outcome can render on it |
| success | not-applicable | Opening an entry path is not an action-outcome confirmation on the control |

### Page Action — Primary

- Role: public pricing-page primary action
- Kind: interactive
- Type: button
- Background: `#2864f0`
- Text: `#ffffff`
- Border: `2px solid #2864f0`
- Radius: `8px`
- Padding: `10px 16px`
- Font: `16px / 700 / Noto Sans JP`
- Height: 48px rendered
- Use: public pricing-page primary action only, at `pricing::[data-omd-capture="17"]`
- Hover snapshot: `#2863ee` background at `pricing::[data-omd-capture="17"]::state-hover`
- Pressed snapshot: `#2762ec` background at `pricing::[data-omd-capture="17"]::state-pressed`
- Focus snapshot: `#2763ed` background with `#2761e8` border at `pricing::[data-omd-capture="17"]::state-focus`

The color record also carries a `#2863ef` hover snapshot and a `#245ad9` pressed snapshot for the pricing page action. Those differ from the `#2863ee` and `#2762ec` values in the component record above. Both pairs are preserved; neither is selected here.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the pricing route |
| hover | applicable | Pointer-web button; the recorded hover snapshots are listed above |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted, and the recorded focus snapshot is a generic focus capture rather than a `focus-visible` observation |
| disabled | applicable | A page action can be made unavailable; visual treatment omitted |
| loading | not-applicable | A public marketing page action leads onward; it runs no operation in place that could be pending |
| error | not-applicable | Nothing resolves on this control, so no failure outcome can render on it |
| success | not-applicable | Leading onward is not an action-outcome confirmation on the control |

### Page Action — Outline

- Role: public pricing-page secondary action
- Kind: interactive
- Background: `#ffffff`
- Text: `#2864f0`
- Border: `2px solid #2864f0`
- Radius: `8px`
- Padding: `10px 16px`
- Font: `16px / 700 / Noto Sans JP`
- Height: 48px rendered
- Use: pricing-page secondary action at `pricing::[data-omd-capture="70"]`; default appearance only
- Type: omitted. The record names this an outline secondary action and assigns it no primitive type, so none is asserted.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the pricing route |
| hover | applicable | Pointer-web action; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | A secondary action can be made unavailable; visual treatment omitted |
| loading | not-applicable | A public marketing page action leads onward; it runs no operation in place that could be pending |
| error | not-applicable | Nothing resolves on this control, so no failure outcome can render on it |
| success | not-applicable | Leading onward is not an action-outcome confirmation on the control |

### Product-category Card — Outline

- Role: products category link
- Kind: interactive
- Type: link — the record names this a products category link
- Background: `#ffffff`
- Text: `#2864f0`
- Border: `1px solid #e1dcdc`
- Radius: `8px`
- Padding: `10px 14px`
- Font: `16px / 700 / Noto Sans JP`
- Height: 186px rendered
- Use: products category link at `products::[data-omd-capture="37"]`; default appearance only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the products route |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | A category destination can be unavailable; visual treatment omitted |
| loading | not-applicable | The link hands off to its destination; it runs no operation in place |
| error | not-applicable | Nothing resolves on this link, so no failure outcome can render on it |
| success | not-applicable | Link meaning is the destination, not an action-outcome confirmation |

### Segment-selection Card — Tinted

- Role: public home segment-selection card
- Type: card
- Kind: omitted. The record carries this as a card with no interactive-kind evidence, so no Core §4.4 state-applicability map is declared and it is not recast as a control.
- Background: `#ebf3ff`
- Text: `#323232`
- Radius: `8px`
- Font: `16px / 400 / Noto Sans JP`
- Height: 103px rendered
- Use: public home segment-selection card only, at `home::div.fr-3ezzk7z2_kv_card`; default appearance only

### Outside these records

No authenticated-app field, data table, status badge, dialog, error, disabled state, responsive breakpoint, or documentation component is specified: none had the required public selector, surface, and state evidence in the supplied bundle.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- The observed public header action uses `4px 20px` padding; the larger public actions use `10px 16px`.
- The capture shows local 5px and 8px geometry, not a universal radius scale.
- Rendered heights on the captured desktop routes: 31px for the header action, 48px for each of the two pricing-page actions, 103px for the home segment-selection card, and 186px for the products category link. These are desktop capture measurements of those elements, not cross-viewport specifications and not touch-target rules.
- Only desktop public routes were supplied. No application layout grid, mobile breakpoint, or product workflow density is asserted.

No responsive token and no breakpoint is documented. The evidence contains no mobile viewport capture; a future capture has to collect a matching public route at the target viewport before a breakpoint is added here.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Brand-published lines

Three lines are carried verbatim from official freee material. The reviewed material marks the first two as official mission-page lines and the third as an official vision framing.

- 「スモールビジネスを、世界の主役に。」 — the official mission. The reviewed material supplies the English rendering “Empower Small Businesses to Take Center Stage” beside it; that rendering is a reading aid and never replaces the Japanese.
- 「だれもが自由に自然体で経営できる環境」 — official mission-page framing.
- 「だれもが自由に経営できる統合型経営プラットフォーム」 — official vision framing.

Keep these lines in Japanese. The published copy on the captured routes is Japanese, and an English paraphrase is never substituted for a published Japanese string.

### Voice reading

The reading below and the three Do/Don't rows that follow it are a derived editorial implementation inference from the verified surfaces and from the official mission wording; they are not freee-authored or a separately published voice specification, and the reviewed material itself states that no full product copy guide was captured. The mission speaks directly about enabling small businesses to take centre stage and to manage freely, and public copy in this style is clear, respectful, and oriented to the reader's business outcome.

| Do | Don't |
|---|---|
| Name the concrete management outcome. | Claim an unverified automation result. |
| Use respectful, direct Japanese. | Use a synthetic persona quote as evidence. |
| Keep support copy accessible and specific. | Turn an unavailable state into a decorative marketing promise. |

That table is an authoring rule for writing in this style. It is not a freee-published policy, and it asserts nothing about freee's actual product copy, marketing conduct, accounting or tax guidance, or compliance position.

### Locale

The captured routes and every published line above are Japanese. Noto Sans JP is the only promoted UI family, with body text at 14px / 400 / 21px and headings at 40px / 700 / 60px, and the captured pages are recorded as carrying high-contrast Japanese text. Keep the published strings in Japanese rather than substituting a translation for them.

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

- typography, components, states, and colors for the authenticated accounting, HR, payroll, and approval product screens and for documentation chrome
- error, loading, success, empty, disabled, and dialog state treatments
- status colors, product-dashboard tables, status badges, and form states
- motion duration, easing curve, and reduced-motion behavior
- responsive tokens, breakpoints, and any mobile-viewport value
- shadow and elevation tokens beyond the `box-shadow: none` component samples
- persona research and product-user interviews
- which of the two recorded hover values, `#2863ef` or `#2863ee`, and which of the two recorded pressed values, `#245ad9` or `#2762ec`, applies to the pricing primary action
