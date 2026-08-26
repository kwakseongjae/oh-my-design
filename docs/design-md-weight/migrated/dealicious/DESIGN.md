# Sinsang Market (Dealicious) Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The source-role, surface-scope, company-versus-product, and historical-context-versus-live-token-evidence judgments in this Scope are derived editorial implementation inferences from the verified records; they are not Dealicious-authored or a separately published UI specification.

Dealicious (딜리셔스) operates Sinsang Market (신상마켓), a Korean K-fashion wholesale trading platform. This reconstruction covers the Dealicious corporate homepage, its first-party square logo, and official engineering-blog context. It describes the corporate hero, navigation, stories, recruiting/blog actions, cards, and footer; it does not establish the authenticated Sinsang Market commerce interface.

The source records a 2015 founding and a product aimed at digitizing Dongdaemun-centered wholesale ordering, sourcing, and settlement. It also records the official engineering blog's Android clean architecture, Elasticsearch, Kafka, and i18n topics. Founding and market detail beyond the inspected homepage/blog remains public narrative context, not live token proof.

The following visual characterization is a derived editorial implementation inference from the inspected corporate surface; it is not Dealicious-authored or a separately published UI specification. Deep navy identity and hero treatment, near-black action ink, slate editorial copy, cool-gray surfaces, Roboto/Noto Sans KR, 50px CTA pills, 20px story cards, and `box-shadow: none` create a calm people-and-culture presentation rather than dense commerce chrome.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These task formulations are derived editorial implementation inferences from the corporate surface and source links; they are not Dealicious-authored or a separately published UI specification.

- Understand Dealicious, Sinsang Market, and the company's wholesale-platform mission.
- Explore company stories, interviews, culture, services, and newsroom content.
- Continue to recruiting or the engineering blog through the primary and secondary CTAs.
<!-- design-md:claim-end -->

### Audience

This audience grouping and biography-retention decision are derived editorial implementation inferences from source-backed stakeholders; they are not Dealicious-authored or a separately published UI specification.

Use group-level scope only: Dongdaemun fashion retailers and wholesalers, prospective Dealicious employees, and Dealicious engineers or engineering-blog readers. The named biographies in the legacy persona section are fictional and are not retained.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the verified surface; it is not Dealicious-authored or a separately published UI specification.

- Deep Deali Navy `#001339` as the logo/hero identity anchor, with `#102245` secondary navy and `#151f32` hero scrim.
- `#222222` dark primary-action pill and `#3e4149` light-surface heading/link slate.
- Roboto plus Noto Sans KR; 60px / 700 hero, 30px / 700 sections, and quiet 16px / 400 body.
- Flat cool-gray separation with `#f5f6fb`, `#ebeef6`, `#f1f8ff`, and `#d0d6e1`.
- 50px pill CTAs and 20px editorial cards.
- Muted ladder `#bec5d2` → `#a6adbd` → `#8f97a7`.

### Derived implementation principles

These five items are derived editorial implementation inferences from the mission, source narrative, and verified surface; they are not Dealicious-authored or a separately published UI specification.

- Make the customer's business easier with one clear action, plain language, and no dark patterns.
- Reserve the dark `#222222` pill for the primary next step.
- Use tints and hairlines instead of shadows for routine grouping.
- Give people, interviews, culture, and engineering stories generous image-led card space.
- Keep the navy/ink/cool-gray system composed instead of adding a second saturated accent.

### Avoid

The following avoidances are derived editorial implementation inferences from the source rules; they are not Dealicious-authored or a separately published UI specification.

- Do not introduce a second saturated action hue or spread the dark pill treatment across many elements.
- Do not add drop shadows to the verified corporate hero, navigation, headings, or story cards.
- Do not use pure black `#000000` for chrome/labels; keep it for body while UI ink uses `#222222` / `#3e4149`.
- Do not square the CTA pills, lighten the display weight, or put white hero copy over raw imagery without the navy scrim.
- Do not present the corporate-surface rules as authenticated marketplace UI behavior.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The semantic-role assignments, same-value role grouping, and body-text-versus-chrome boundary below are derived editorial implementation inferences from the source records; they are not Dealicious-authored or a separately published UI specification.

| Role | Value | Verified/source boundary |
|---|---|---|
| Deali Navy | `#001339` | Logo-dominant fill and hero identity anchor |
| Navy deep | `#102245` | Secondary logo/navy tone |
| Navy scrim | `#151f32` | Hero image overlay token; live raw alpha remains in provenance |
| Interactive ink | `#222222` | Primary pill and strong footer/UI ink |
| Body black | `#000000` | Paragraph text on white, not chrome |
| Slate | `#3e4149` | Light-surface headings, links, contact rows |
| Canvas / card / on-color | `#ffffff` | Page, cards, secondary CTA, inverse text |
| Surface | `#f5f6fb` | Tinted section and card frame |
| Surface alternate | `#ebeef6` | Alternating cool-gray block |
| Surface blue | `#f1f8ff` | Highlight panel tint |
| Hairline | `#d0d6e1` | Borders and dividers |
| Muted | `#8f97a7` | Tertiary copy and metadata |
| Faint | `#bec5d2` | Low-emphasis/disabled-adjacent text |
| Faint alternate | `#a6adbd` | Fine print alternate |

### Spacing

Keeping component padding distinct from the source spacing scale is a derived editorial implementation inference from the source component record; it is not Dealicious-authored or a separately published UI specification.

Source scale: `xs: 4px`, `sm: 8px`, `md: 12px`, `base: 16px`, `lg: 24px`, `xl: 31px`, `xxl: 48px`, `section: 64px`. CTA padding remains `14px 31px`.

### Shape

- Small: 8
- Medium: 20
- Large / CTA pill: 50
- Full: 9999px

The shape-role labels and source-token-versus-component-form separation in this section are derived editorial implementation inferences from the source scale and components; they are not Dealicious-authored or a separately published UI specification. Numeric source roles and explicit 8px/20px/50px component forms remain distinct.

### Elevation

- Shadow token: `none`.
- Tint separation: `#f5f6fb`, `#ebeef6`, `#f1f8ff`.
- Hairline: `1px solid #d0d6e1`.
- Hero scrim: `#151f32`.

Describing color and tint as the depth system is a derived editorial implementation inference from the verified shadowless surface; it is not Dealicious-authored or a separately published UI specification.

### Motion

The motion-promotion boundary below is a derived editorial implementation inference from the supplied evidence; it is not Dealicious-authored or a separately published UI specification.

No component-specific transition property, animation name, duration, easing, or reduced-motion behavior was measured. The exact legacy duration, curve, signature, and reduced-motion recipes remain in provenance rather than becoming Dealicious tokens.

A motion value may be promoted only after component-specific computed before/after observation establishes all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. Until then, motion values remain absent.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Family

The family-role boundary below is a derived editorial implementation inference from the live stack; it is not Dealicious-authored or a separately published UI specification.

- Primary Latin: `Roboto`.
- Korean: `Noto Sans KR`.
- Exact document stack: `Roboto, "Noto Sans KR", "Noto Sans SC", "Noto Sans JP", sans-serif`.
- Noto Sans SC/JP and `sans-serif` are runtime fallbacks, not additional Dealicious brand faces.

### Type roles

| Role | Size | Rem form | Weight | Line height | Use |
|---|---:|---:|---:|---:|---|
| Hero headline | 60px | 3.75rem | 700 | unitless `1.5` | White hero copy |
| Section title | 30px | 1.88rem | 700 | normal | “딜리셔스의 이야기” |
| Pill CTA | 18px | 1.13rem | 700 | normal | CTA label |
| Navigation | 16px | 1.00rem | 400 | normal | Hero navigation |
| Body | 16px | 1.00rem | 400 | unitless `1.5` / 24px | Reading text |
| Caption / footer | 15px | 0.94rem | 400 | normal | Footer/contact text |

### Assets

The asset-authority, logo-sample-to-identity-palette, and reuse boundaries below are derived editorial implementation inferences from the first-party logo proof; they are not Dealicious-authored or a separately published UI specification.

- The selected identity asset is the verified first-party square Dealicious logo; its exact source URL remains in provenance.
- Dominant `#001339` and secondary `#102245` support the identity palette. Exact dimensions, bytes, and the sibling-only third sampled color remain in provenance.
- Story/interview imagery is first-party corporate content in the captured surface; no general reuse licence is established.

<!-- design-md:section components-states -->
## 4. Components & States

### State evidence boundary

The evidence-boundary and applicability judgments in this section are derived editorial implementation inferences from the verified component roles; they are not Dealicious-authored or a separately published UI specification.

The source verifies default CTA, navigation, card, and footer geometry, but no comprehensive interaction capture. Applicability follows component meaning; unmeasured visual treatments remain absent, and state coverage is not claimed complete.

### Corporate CTA button family

The family grouping, interaction-kind classification, and applicability judgments for these components are derived editorial implementation inferences from their recruiting/blog navigation roles; they are not Dealicious-authored or a separately published UI specification.

- Primitive type: button; Kind: interactive.
- Primary: `#222222` / `#ffffff`; radius 50px; padding `14px 31px`; height 55px; `18px / 700`; “인재영입 바로가기”.
- Secondary: `#ffffff` / `#3e4149`; radius 50px; padding `14px 31px`; height 55px; `18px / 700`; “블로그 바로가기”.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Verified primary/secondary treatments |
| hover | applicable | Pointer-web buttons; visual treatment omitted |
| focus-visible | applicable | Interactive buttons; visual treatment omitted |
| disabled | applicable | Navigation action can be unavailable; visual treatment omitted |
| loading | not-applicable | Recruiting/blog navigation does not present in-button progress |
| error | not-applicable | The buttons do not present validation failure |
| success | not-applicable | The buttons do not present completion feedback |

### Top navigation item

The interaction-kind classification and applicability judgments for this component are derived editorial implementation inferences from its corporate-navigation role; they are not Dealicious-authored or a separately published UI specification.

- Primitive type: tab; Kind: interactive.
- Transparent over hero; `#ffffff`; `16px / 400`; 64px header.
- Use: 회사소개, 서비스, 사람과 문화, 뉴스룸.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Verified navigation treatment |
| hover | applicable | Pointer-web navigation; visual treatment omitted |
| focus-visible | applicable | Interactive navigation; visual treatment omitted |
| disabled | not-applicable | Public top navigation has no disabled role in this contract |
| loading | not-applicable | Navigation selection does not carry loading presentation |
| error | not-applicable | Navigation does not present validation failure |
| success | not-applicable | Navigation does not present completion feedback |

### Editorial cards and surface frame

The decisions to omit interaction kinds and applicability maps, keep the source token separate from the raw container record, and leave child interaction on the child are derived editorial implementation inferences from unresolved card-level control evidence; they are not Dealicious-authored or a separately published UI specification.

- Tinted surface; primitive type `card`: `#f5f6fb`; 20px; shadowless section/story frame.
- Story/interview card; primitive type `card`: source token `#ffffff`; 20px; image-led; live raw container background transparent; shadow `none`. The token and raw container records remain separate.
- Interaction kinds/applicability maps omitted; any child link carries its own interaction.

### Footer navigation row

The decisions to omit an interaction kind and applicability map and keep a child link distinct from its list container are derived editorial implementation inferences from the list-container primitive; they are not Dealicious-authored or a separately published UI specification.

- Primitive type: listItem.
- `#3e4149`; `15px / 400`; footer navigation/contact role.
- The list item may contain a link, but the primitive itself is not established as an interactive control.

### Legacy state guidance

The following treatments are derived editorial implementation inferences in the legacy source rather than measured interaction proof; they are not Dealicious-authored or a separately published UI specification. They apply only to the named patterns.

| Pattern | Legacy treatment |
|---|---|
| Empty listings/results | White; one `#3e4149` line; one `#222222` adjustment/add action; no illustration clutter |
| Empty saved | One `#8f97a7` line plus calm path back |
| Loading list | Final-size `#f5f6fb` blocks; 20px; flat pulse and no shadow shimmer |
| In-place refresh | Affected-band progress; previous content and values remain |
| Fetch/action error | Inline `#3e4149` explanation and retry; avoid bare `오류가 발생했습니다` |
| Form validation | Field-level corrective message; not only `필수` |
| Action completed | Brief calm inline confirmation and linked next step; no celebratory emoji |
| Skeleton | Final-size `#f5f6fb`; 20px; flat pulse |
| Disabled | `#bec5d2` text on reduced-opacity surface; `#222222` pill fades rather than changing hue |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The layout grouping and responsive-proof boundary below are derived editorial implementation inferences from the verified corporate surface; they are not Dealicious-authored or a separately published UI specification.

- Centered single-column hero with a 60px headline over a dark-navy image band and a 64px navigation header.
- Editorial interview/culture/news cards use 20px rounded frames; full-width story bands alternate white, `#f5f6fb`, and `#ebeef6`.
- CTA measurements are 55px high with `14px 31px` padding. The footer is a white contact/legal band.
- The legacy responsive breakpoint bands, stacking rules, and cross-width image claims lack a separate multi-viewport proof record. Exact breakpoint and behavior claims remain in provenance and are not promoted as responsive tokens.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice direction and forbidden-register judgments below are derived editorial implementation inferences from verified corporate copy; they are not Dealicious-authored or a separately published UI specification.

Use warm, plain-spoken, people-first Korean. Hero copy frames a customer benefit without hype; navigation and section labels are literal and human; CTAs are direct and low-pressure; culture and recruiting copy describes people and working conditions rather than stacking corporate jargon.

Verified live samples:

- “고객의 사업을 쉽고 즐겁게”
- “딜리셔스의 이야기”
- “K패션 도소매 거래 No.1 신상마켓”

Captured labels are carried in the published Korean. Any English in parentheses below is a reading aid placed beside the original, never a substitute for it.

- Header navigation: 회사소개, 서비스, 사람과 문화, 뉴스룸.
- Footer navigation: 회사소개, 개인정보 처리방침 (privacy policy). The exact footer contact rows stay in provenance.
- CTAs: 인재영입 바로가기, 블로그 바로가기.
- Story / culture card titles, as the source records them: “신상마켓의 얼굴을 만드는…” (the trailing ellipsis is the source's own truncation of the card title), “딜리셔스개발팀 연대기”, 사내인터뷰.
- Corporate people-and-culture titles: “자유와 체계가 공존하는 딜리셔스”, “심리적 안정감을 주는 딜리셔스”. The source's tone table quotes the same two in the shortened register form “자유와 체계가 공존하는” and “심리적 안정감을 주는”; both forms are the source's, so both are kept.

Avoid aggressive urgency, buzzword-stacked B2B jargon, cold corporate language that hides small-business customers, and exclamation-heavy hype.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Dealicious-authored or a separately published UI specification.

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

- authenticated Sinsang Market marketplace tokens, states, responsive behavior, and microcopy
- official reuse/licence status for the first-party logo and corporate story imagery
- component-specific hover, focus-visible, disabled, loading, error, and success visual treatments
- verified multi-viewport breakpoints, card reflow, footer stacking, and image behavior
- component-specific transition properties, animation names, durations, easings, and reduced-motion behavior
