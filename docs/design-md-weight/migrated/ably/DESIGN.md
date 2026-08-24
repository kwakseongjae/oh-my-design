# Ably Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

ABLY (에이블리) is a Korean style-commerce platform. This contract covers three current first-party public surfaces only: consumer mobile web on `https://m.a-bly.com/`, ABLY Team on `https://ably.team/`, and Seller Square on `https://square.a-bly.com/`. ABLY Team is the official mission, company, product-evolution, and culture surface. The following evidence-domain sentences are a derived editorial implementation inference from the verified surfaces; they are not ABLY-authored or a separately published UI specification. Consumer app and Seller Square remain separate UI evidence domains. Each evidence domain keeps its own font and component roles; native-app commerce patterns are not inferred from brand or seller surfaces.

ABLY’s official product story describes an AI-personalized commerce experience that expanded beyond fashion into beauty, home, stationery, food, and community/content. The current company mission frames this as expanding style commerce and a chain platform globally: people should be able to discover, buy, make, and sell styles with lower friction. The following product-story synthesis is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. Personalization and an accessible seller ecosystem are presented as two connected sides of that next-commerce direction.

The current public ecosystem has three visibly different surfaces. The consumer mobile web is narrow and app-directed, using a Next.js-loaded Pretendard alias, dense 11–16px type, white, `#1f1f1f`, and a compact 28px app-entry action. ABLY Team is a large editorial brand and recruiting surface with Pretendard, 40–48px headings, wide story cards, pale peach accent panels, and `#ff5160` actions. Seller Square uses Noto Sans Korean and its own information architecture for onboarding, market operations, advertising, guides, and global expansion.

The following cross-surface-signal reading is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. The stable cross-surface signal is the current coral-pink `#ff5160`, not the older `#fa2e5f` snapshot.

The current public capture verifies a Seller Square pill, an ABLY Team recruiting CTA, and only a compact app-entry action on mobile web. Native shopping cards, price stacks, checkout actions, bottom navigation, badges, and sheets remain absent.

The following ecosystem and surface-separation reading is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. A shared coral identity with different tools for consumers, company storytelling, and sellers is how this capture reads the three surfaces together. Even this shared color does not make the component systems interchangeable. A Seller Square pill, an ABLY Team recruiting CTA, and a native consumer purchase button are three different claims. The shared color signals one company, but the different typography and geometry belong to different tasks.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Use the compact consumer mobile-web app-entry action that directs people toward the full app.
- Learn ABLY’s mission, culture, and platform direction on ABLY Team.
- Start Seller Square onboarding or seller-platform entry through the captured primary entry action.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. First-party material establishes three task contexts, without project-specific names, ages, spending, seller revenue, category preference, conversion rate, or success metrics: a consumer discovering and purchasing products aligned with personal taste; a seller evaluating onboarding, market operations, advertising, or global expansion; and a candidate or partner learning about ABLY’s mission, culture, and platform direction. Those three groups remain Audience. Independently verified user outcomes are the three primary tasks above, mapped to the captured mobile-web, ABLY Team, and Seller Square surfaces. Native purchase UI is not in this capture; purchasing stays as a named stakeholder context, not a Primary task.

### Distinctive traits

- Current coral-pink `#ff5160` across consumer/corporate/seller identity moments
- Consumer mobile web: dense Pretendard, 11–16px type, app-directed entry
- ABLY Team: editorial Pretendard, 40–48px headings, story cards, 12–24px control geometry
- Seller Square: Noto Sans Korean and full-pill onboarding actions

The following trait readings (consumer/company narrative pairing, strict evidence-domain boundary) are a derived editorial implementation inference from the verified surfaces; they are not ABLY-authored or a separately published UI specification.

- Personal taste and recommendation as the consumer narrative
- Seller/user ecosystem and global chain-platform expansion as the company narrative
- Strict separation of consumer web, native app, corporate, and seller evidence

### Principles

These four items and the capture-bound application list are a derived editorial implementation inference from the verified surfaces; they are not ABLY-authored or a separately published UI specification.

1. **Start from taste.** Discovery should adapt to what a person is trying to express or find.
2. **Connect both sides of commerce.** Consumer ease and seller opportunity are related, not identical interfaces.
3. **Move quickly without inventing truth.** Fast commerce language cannot excuse unsupported UI claims.
4. **Respect surface ownership.** Mobile web, native app, company, and seller systems have distinct evidence.

Capture-bound application:

- Use current `#FF5160` and name the surface that gives a component its role.
- Keep consumer, corporate, and seller font evidence separate.
- Preserve ABLY’s taste-discovery, personalization, and seller-ecosystem narrative.
- Omit native details until an inspectable native path exists.
- Keep consumer mobile web compact and direct users toward the full app without treating that capture as the app.
- Use large editorial sections and paired story cards on ABLY Team.
- Use Seller Square’s own content density and onboarding hierarchy for seller tasks.
- Share `#ff5160` as identity, not as proof of identical control geometry.
- Let product imagery and taste categories carry consumer variety; do not fabricate their layout from memory.

### Avoid

The following Don'ts include source-stated prohibitions and retained capture-bound judgements. Those judgements are a derived editorial implementation inference from the verified surfaces; they are not ABLY-authored or a separately published UI specification.

- Do not restore the older `#FA2E5F` as current primary without new proof.
- Do not infer purchase buttons, deal badges, price typography, tabs, or sheets from commerce convention.
- Do not show Noto Sans Korean as the consumer product font.
- Do not render Pretendard as Seller Square truth.
- Do not turn ABLY Team recruiting cards into consumer product cards.
- Do not fabricate native shopping cards, price stacks, checkout actions, bottom navigation, badges, or sheets.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Current ABLY coral** (`#ff5160`): live identity/action color across current official surfaces.
- **Canvas** (`#ffffff`) and **foreground** (`#1f1f1f`): current consumer and corporate base.
- **Consumer secondary** (`#777777`): current mobile-web supporting text.
- **Team secondary** (`#757575`): current company/editorial supporting copy.
- **Seller body** (`#5b5b5b`): current Seller Square explanatory text.
- **Consumer border** (`#dddddd`): compact mobile-web action outline.
- **Platform border** (`#e5e7eb`): repeated Team and Seller Square boundary.
- **Team accent surface** (`#fff2ea`): current pale peach corporate action surface.

Editorial-pill foreground `#4e4e4e` is that control’s renderable field, not general Ink `#1f1f1f`. Older hot-deal pink, discount red, shipping mint, success, error, link, tab, and native surface colors are omitted. A yellow Seller Square campaign action was captured as a local promotion. The following canonicality judgement is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. That yellow campaign action is not a canonical ABLY semantic color.

### Spacing

YAML captured values: 8, 10, 16, 24, and 32. The source assigns xs/sm to the consumer capture and md/lg/xl to ABLY Team. The following local-scale reading is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. These are repeated captured values, not a universal spacing scale.

### Shape

- Corporate control: 12px
- Team pill: 24px
- Consumer action: 20px
- Seller Square full pill: 9999px

The following local-scale reading is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. 12–24px Team control geometry, 20px consumer-action corners, and 9999px Seller Square pills are local defaults, not a universal radius scale.

### Elevation

Consumer mobile web and Seller Square promoted controls are flat. ABLY Team uses a specific large-card shadow (`0 4px 48px rgba(0,0,0,0.08)`) on 12px story cards. The following elevation judgement is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. That corporate editorial shadow is not a native commerce sheet token.

### Motion

No reusable duration or easing curve is promoted. The current capture did not establish native app motion or a cross-domain animation system. No motion duration, easing curve, animation name, transition property, or reduced-motion behavior is promoted. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Consumer mobile web establishes Pretendard; ABLY Team establishes Pretendard; Seller Square establishes Noto Sans Korean. |
| Live surface-use | `__Pretendard_a4ae19` loaded/high with 85 consumer uses; Pretendard loaded/high with 117 corporate uses; Noto Sans Korean loaded/high with 119 seller uses. |
| Official distributed asset | Pretendard is loaded from first-party and public distribution paths; Noto Sans Korean is delivered on Seller Square. Neither is an ABLY-exclusive font. |
| Declared-only | Pretendard fallback, Black Tie, Font Awesome, Glyphicons, and other vendor icon families had zero visible text use. |
| Unresolved claim | Native iOS/Android consumer typography and campaign-specific type remain unresolved. |

The following surface-ownership Don't and reading are a derived editorial implementation inference from the verified surfaces; they are not ABLY-authored or a separately published UI specification. Do not render Noto Sans Korean as the consumer app font or Pretendard as Seller Square truth. Surface ownership matters more than visual similarity.

### Family

- **Consumer visible UI family:** Pretendard, Next.js alias `__Pretendard_a4ae19`
- **Corporate visible UI family:** Pretendard
- **Seller visible UI family:** Noto Sans Korean
- Do not present a substitute family as ABLY.

### Type roles

Verified line-height values are the unitless YAML ratios `1.25`, `1.33`, `1.27`, `1.4`, `1.5`, and `1.6`. They scale with font size and are not fixed px. The legacy body table also recorded computed line-height at those captured sizes. Those px figures are size-local observations, not replacements for the ratios.

| Role | Font | Size | Weight | Line height | Size-local observation | Tracking | Surface |
|---|---|---:|---:|---:|---:|---|---|
| Consumer label | Pretendard | 16px | 600 | 1.25 | 20px | -0.4px | Current mobile consumer labels |
| Consumer compact action | Pretendard | 12px | 600 | 1.33 | 16px | -0.2px | Current mobile web compact action |
| Consumer metadata | Pretendard | 11px | 400 | 1.27 | 14px | normal | Current mobile consumer metadata |
| Team display | Pretendard | 48px | 600 | 1.33 | 64px | -0.3px | Current ABLY Team display heading |
| Team section | Pretendard | 40px | 600 | 1.4 | 56px | -0.3px | Current ABLY Team repeated section heading |
| Team card title | Pretendard | 24px | 600 | 1.33 | 32px | -0.3px | Current ABLY Team card heading |
| Team body | Pretendard | 16px | 400 | 1.5 | 24px | -0.3px | Current ABLY Team body and card copy |
| Seller body | Noto Sans Korean | 16px | 400 | 1.6 | 25.6px | normal | Current Seller Square body and navigation text |

### Assets

- Catalog logo metadata is a Google s2 favicon proxy (`https://www.google.com/s2/favicons?domain=a-bly.com&sz=128`). It is identity-only, not a captured first-party mark.
- Pretendard is a loaded consumer/Team face from first-party and public distribution paths, not an ABLY-exclusive distributed family.
- Noto Sans Korean is delivered on Seller Square, not an ABLY-exclusive distributed family.
- The following product-imagery reading is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. Product imagery and taste categories carry consumer variety; do not fabricate their layout from memory.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

This baseline-only run establishes default components but no reusable consumer hover, focus, pressed, loading, empty, cart, payment, order-success, or error state. Those states remain absent. Default-only boundaries are explicit in machine components. Native consumer product cards, price stacks, shipping/deal badges, filters, checkout CTAs, bottom tabs, bottom sheets, dialogs, and transactional states are absent until an inspectable native surface verifies them.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source never records `focus-visible`; that applicability stays, and the visual treatment is omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow an identified product role, not its primitive kind. Where exact selector, label, or request/outcome behavior is unresolved, those three applicability fields are omitted at this boundary rather than closed from styling, emphasis, or an editorial name. This is not a complete state-coverage claim.

### Compact app-entry action

- Role: current mobile web compact app-entry action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#1f1f1f`
- Border: `1px solid #dddddd`
- Radius: 20px
- Padding: `0 8px`
- Size: `62px x 28px`
- Font: 12px / 600 / Pretendard
- Observed: default baseline captured; no hover or pressed value promoted
- Surface: consumer mobile web
- Field note: The following meaning reading is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. This compact action does not carry native purchase meaning.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on consumer mobile web |
| hover | applicable | Pointer-capable web action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An app-entry action can be unavailable; visual treatment omitted |
| loading | not-applicable | This compact app-entry directs users toward the full app; the control itself does not enter a loading state |
| error | not-applicable | App-entry is a handoff to the app, not a validation or request-failure state on the control |
| success | not-applicable | Opening the app is not an action-outcome confirmation on this compact action |

### ABLY Team primary action

- Role: current ABLY Team primary action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ff5160`
- Text: `#ffffff`
- Radius: 12px
- Size: `160px x 56px`
- Font: 18px / 600 / Pretendard
- Observed: default baseline captured
- Surface: ABLY Team

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on ABLY Team |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A Team primary action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as the current ABLY Team primary action. Exact selector, label, destination, and request/outcome behavior are unresolved, so those three fields stay omitted at this boundary rather than closed from a recruiting/editorial surface reading.

### ABLY Team soft action

- Role: current ABLY Team low-emphasis action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#fff2ea`
- Text: `#ff5160`
- Radius: 12px
- Size: `312px x 48px`
- Font: 16px / 600 / Pretendard
- Observed: default baseline captured
- Surface: ABLY Team
- Field note: `#fff2ea` is this control’s accent surface, not a general canvas.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on ABLY Team |
| hover | applicable | Pointer-web low-emphasis action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A Team soft action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a low-emphasis action. Exact selector, label, destination, and request/outcome behavior are unresolved, so those three fields stay omitted at this boundary rather than closed from emphasis or styling.

### ABLY Team editorial pill

- Role: current ABLY Team compact editorial action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#4e4e4e`
- Radius: 24px
- Padding: `14px 16px`
- Size: `105px x 48px`
- Font: 16px / 400 / Pretendard
- Observed: default baseline captured
- Surface: ABLY Team
- Field note: `#4e4e4e` is this pill’s renderable foreground, not general Ink `#1f1f1f`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on ABLY Team |
| hover | applicable | Pointer-web editorial pill; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An editorial pill can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a compact editorial action. Exact selector, label, destination, and request/outcome behavior are unresolved, so those three fields stay omitted at this boundary rather than closed from the editorial name.

### ABLY Team story card

- Role: current ABLY Team mission or story card
- Type: card
- Kind: omitted. The source records mission/story card geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: card surface
- Background: `#ffffff`
- Text: `#1f1f1f`
- Radius: 12px
- Shadow: `0 4px 48px rgba(0,0,0,0.08)`
- Surface: ABLY Team
- Field note: The following elevation judgement is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. This corporate editorial shadow is not a native commerce sheet token.

### Seller Square primary entry action

- Role: current Seller Square primary entry action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ff5160`
- Text: `#ffffff`
- Radius: 9999px
- Padding: `13px 30px`
- Size: `114px x 49px`
- Font: 14px / 400 / Noto Sans Korean
- Observed: default baseline captured
- Surface: Seller Square
- Field note: 14px / 400 is this entry action’s type; it is not Seller body 16px / 400 / 1.6.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on Seller Square |
| hover | applicable | Pointer-web seller-entry action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A seller-entry action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as the current Seller Square primary entry action. Exact selector, label, and request/outcome behavior are unresolved, so those three fields stay omitted at this boundary rather than closed from the entry name.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The consumer surface is explicitly mobile web and uses compact type/actions, including the `62px x 28px` app-entry. ABLY Team reflows large editorial stories and card compositions (`160px x 56px` primary, `312px x 48px` soft action, `105px x 48px` pill, 12px story cards). Seller Square has its own desktop-oriented seller information hierarchy and a `114px x 49px` full-pill primary entry. The three captured surfaces do not share one control size in this capture (`62px x 28px`, `160px x 56px`, `114px x 49px`).

Native-app safe areas, bottom navigation, checkout keyboards, and product-grid breakpoints remain unresolved. The following layout judgement is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. The captured sizes above are surface-local measurements, not a cross-viewport specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice and copy reading is a derived editorial implementation inference from the verified surfaces; it is not ABLY-authored or a separately published UI specification. ABLY’s official voice is energetic, friendly, and direct. Consumer and product stories emphasize discovering one’s taste quickly; seller content emphasizes starting and operating a market easily; company content speaks in terms of next commerce, ecosystem, and expansion. Category or community copy can be playful, but transactional language should state price, choice, or next action without manufactured urgency. Seller guidance should distinguish onboarding, operations, advertising, and global expansion. Keep Korean copy conversational but task-clear. Avoid invented discounts, conversion claims, urgency phrases, and seller-growth numbers.

No voice samples beyond the source reading above are promoted.

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

- older `#fa2e5f` / `#FA2E5F` as current primary
- hot-deal pink, discount red, shipping mint, success, error, link, tab, and native surface colors
- yellow Seller Square campaign action as a canonical semantic color
- hover, focus, pressed, loading, empty, cart, payment, order-success, and error visual treatments
- native shopping cards, price stacks, shipping/deal badges, filters, checkout CTAs, bottom tabs, bottom sheets, and dialogs
- native iOS/Android consumer typography and campaign-specific type
- native-app safe areas, bottom navigation, checkout keyboards, and product-grid breakpoints
- native app motion and a cross-domain animation system — duration, easing, animation name, transition properties, and reduced-motion behavior; promote only after per-component computed capture of all five
- project-specific names, ages, spending, seller revenue, category preference, conversion rate, and success metrics
