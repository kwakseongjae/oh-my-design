# Kakao Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Kakao (카카오) is a mobile-life platform. This contract covers three related but distinct evidence domains: Kakao corporate marketing on `kakaocorp.com`, the official Kakao Login integration component, and Kakao Developers documentation chrome. Familiarity spans many services; it is not one transferable UI kit.

Corporate marketing uses KakaoBig and KakaoSmall with black, white, and marketing yellow `#fae100`. Kakao Login is a regulated integration component (`#fee500`, black speech-bubble symbol, 85% black label, 12px radius, OS system type at 30Pt). Kakao Developers uses Pretendard only for documentation chrome. Values in this capture are named by surface: corporate marketing, the official login integration, or documentation chrome.

The following identity reading is a derived editorial implementation inference from the verified surfaces; it is not Kakao-authored or a separately published UI specification. Kakao identity is built around making communication and everyday services feel immediately approachable. Yellow, speech-bubble symbolism, friendly proprietary type, and compact Korean language create recognition before a person reads a product name.

Kakao describes itself as a mobile-life platform that uses technology, content, and high mobile reach to make everyday services more convenient. Its current mission is bringing a needed future closer through technology that understands people.

The following mission and ecosystem reading is a derived editorial implementation inference from the verified surfaces; it is not Kakao-authored or a separately published UI specification. That mission places human context before technical novelty. KakaoTalk’s communication model became the organizing metaphor for a broader ecosystem: channels connect people with brands and stores, messages carry transactional information, and services extend into commerce, maps, content, mobility, and social impact. The corporate yellow and speech-bubble identity therefore signal connection, but each service still needs its own product rules. A coherent Kakao reference preserves the relationship between these systems without flattening them into one fictional theme.

Exact values below are limited to current computed styles on the inspected corporate surfaces or the current official Kakao Login design guide.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Integrate Kakao Login using the official symbol, color, type, label, and resizing rules.
- Browse Kakao corporate, culture, and milestone pages.
- Search the corporate site or filter milestone categories.
<!-- design-md:claim-end -->

### Audience

No invented demographic personas are promoted. Source §13 names four official service and stakeholder contexts, not research participants or population counts: a person communicating in daily life; a customer receiving information or benefits from a channel; a business or creator operating a Kakao channel; and a developer integrating Kakao Login. Those four groups remain Audience. Independently verified user outcomes are the three primary tasks above, mapped to the captured corporate surfaces and the official Login guide. Daily-life communication, channel-customer, and channel-operator bullets stay here as named stakeholder contexts; this capture does not inspect KakaoTalk or Channel product UI.

### Distinctive traits

- Corporate fonts: KakaoSmall 133 visible uses; KakaoBig 49
- Developers docs font: Pretendard 1,339 visible uses, documentation chrome only
- Login compliance: `#fee500`, black symbol, black 85% label, 12px radius, OS system font at 30Pt
- Corporate marketing yellow `#fae100` remains distinct from login yellow
- Compact Korean labels on corporate navigation, search, milestone filters, and footer pills

### Principles

These five items and the capture-bound application list are a derived editorial implementation inference from the verified surfaces; they are not Kakao-authored or a separately published UI specification.

1. **Compliance outranks approximation.** Login symbols, labels, colors, type, and relative emphasis follow the official integration guide even when another treatment looks more fashionable.
2. **Surface-specific fonts are part of correctness.** KakaoBig/KakaoSmall, OS system labels, and Pretendard documentation chrome describe different jobs, not a fallback chain.
3. **Preserve the dual-yellow distinction.** Corporate marketing `#fae100` and regulated Login `#fee500` remain separately named and sourced.
4. **Connection should stay legible.** Friendly language and familiar symbols can reduce distance, but transactional information, consent, and support states must remain explicit.
5. **Use first-party evidence over remembered KakaoTalk conventions.** Do not fabricate chat bubbles, navigation, or native-service tokens from cultural familiarity with the brand.

Capture-bound application:

- Name the surface before reusing a value: corporate marketing, Kakao Login, or Developers documentation chrome.
- Use the exact Kakao Login compliance colors, symbol, radius, and OS system font at 30Pt.
- Keep corporate KakaoBig/KakaoSmall values separate from Developers-site Pretendard.
- Name marketing yellow `#fae100` separately from login yellow `#fee500`.
- Use the shortened Login label instead of distorting a standard button below its intended size.
- Preserve observed light/dark theme and interaction states on corporate navigation.

The official Kakao Login design guide is first-party compliance, not the editorial list above. It requires the mandated colors, the black speech-bubble symbol with unchanged shape, proportion, and color, and the OS system label. Colors outside that regulation must not be applied. Another third-party login button must not be emphasized by omitting Kakao’s button color.

### Avoid

- Don't change the Kakao Login symbol shape, proportion, or color.
- Don't replace the speech-bubble symbol with Kakao CI or a functional icon.
- Don't remove the symbol from the Login button.
- Don't use Developers-site Pretendard as evidence that the Login button uses Pretendard.
- Don't present unverified KakaoTalk chat bubbles, mobile inputs, tabs, badges, or semantic colors as current canonical Kakao tokens.
- Don't treat KakaoTalk in-app components as verified unless native product evidence is supplied.
- Don't merge Kakao Login foreground `rgba(0, 0, 0, 0.85)` into YAML `login-label` `#000000` or corporate Foreground `#333333`.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Kakao Login compliance (official design guide):

- **Login Container** (`#fee500`): mandatory login-button background.
- **Login Symbol** (`#000000`): mandatory speech-bubble symbol color.
- **Login Label** (`rgba(0, 0, 0, 0.85)`): mandatory 85% black label. YAML `tokens.colors.login-label` is `#000000`; that named token is not a substitute for the Login button’s renderable foreground `rgba(0, 0, 0, 0.85)`.

The official guide explicitly says colors outside this regulation must not be applied and that another third-party login button must not be emphasized by omitting Kakao's button color.

Corporate marketing:

- **Marketing Yellow** (`#fae100`): current corporate-home marketing accent.
- **Dark Marketing** (`#111111`): current paired dark tag/CTA background.
- **Canvas** (`#ffffff`): dominant public-site background.
- **Foreground** (`#333333`): primary corporate text/control color.
- **On Dark** (`#ffffff`): content on black/dark surfaces.
- **Muted** (`#888888`): milestone metadata.
- **Surface** (`#eeeeee`): current filter/footer-pill fill.
- **Border** (`#dbdbdb`): captured culture-page circular-control border.

Search-control background `transparent` is that control’s renderable field, not Canvas. Corporate-nav light `#ffffff` / `#000000` and dark `#000000` / `#ffffff` pairs stay on that menu trigger.

### Spacing

Corporate content uses a compact 4px / 6px / 8px / 16px / 20px spacing rhythm around controls and text.

### Shape

- Login: 12px
- Marketing tag: 16px
- Search control: 18px
- Footer pill: 24px
- Milestone filter: 30px
- Full / navigation pill: 999px

These radii are local to the named controls, not a universal Kakao scale.

### Elevation

No canonical shadow token is promoted. Captured corporate controls are largely flat. The Developers documentation site contains its own hover shadows, but those belong to documentation chrome rather than the Kakao Login component.

### Motion

No exact motion duration or easing token is promoted. Preserve focus and hover clarity on the corporate site and platform-standard interaction feedback for the Login button. Label custom timing as an extension. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration, and platform-standard feedback without those five computed records, is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Kakao status |
|---|---|
| Official product-use | The Kakao Login guide mandates OS system type for its label; KakaoBig/KakaoSmall are the official corporate families |
| Live surface-use | KakaoBig and KakaoSmall are loaded on corporate surfaces; Pretendard is loaded on developer-documentation chrome |
| Official distributed asset | No general redistribution right for KakaoBig/KakaoSmall is asserted by the current official sources |
| Declared-only | KakaoDigitLatin is declared but had zero visible first-family uses in the inspected surfaces |
| Unresolved mapping | A universal KakaoTalk/native-service family mapping beyond the exact official surfaces documented here |

### Family

- **KakaoBig**: loaded/high; 49 visible uses; display, navigation, card, and heading roles.
- **KakaoSmall**: loaded/high; 133 visible uses; body, input, button, badge, and heading roles.
- **System**: required by the Kakao Login design guide for the 30Pt label.
- **Pretendard**: 1,339 visible uses on the Kakao Developers documentation website. It is documentation chrome, not the Kakao Login label font.
- **KakaoDigitLatin**: declared but 0 visible uses; not promoted.

Do not replace KakaoBig or KakaoSmall with Pretendard or a system face, and do not present a fallback as those families. Do not present a system stack as KakaoBig or KakaoSmall. The Login label requires OS default system type; do not substitute Pretendard there.

### Type roles

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---|
| Corporate Display | KakaoBig | 53.82px | 700 | 66px | -1px |
| Corporate Heading | KakaoBig | 30px | 700 | 40px | normal |
| Corporate Title | KakaoSmall | 28px | 700 | 42px | normal |
| Navigation | KakaoBig | 17px | 400 | 27px | normal |
| Body | KakaoSmall | 14px | 400 | 21px | normal |
| Readable Body | KakaoSmall | 14px | 400 | 24.92px | -0.2px |
| Caption | KakaoSmall | 12px | 400 | 18px | -0.2px |
| Kakao Login Label | OS system | 30Pt | guide does not specify | proportional | unchanged |

### Assets

Catalog logo metadata is Simple Icons identity (`kakaotalk`), not a captured first-party mark, and is not a portable asset here. KakaoBig and KakaoSmall remain corporate families without a general redistribution right in the current official sources. Pretendard on Developers documentation is documentation chrome, not a Kakao Login or corporate UI asset.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| Component | Verified state evidence |
|---|---|
| Kakao Login | full/short label and resizing constraints; interaction-state styling not specified |
| Corporate nav | light/dark themes, focus, hover |
| Search control | default, hover |
| Milestone filter | selected |
| Marketing/footer labels | default only |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `focus` capture is not `focus-visible` treatment evidence; named focus on corporate navigation stays an additional observed state, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

The Dark Marketing Tag records default geometry and no state or interactive-kind evidence beyond `type: badge`, so kind and a state-applicability map are omitted.

### Kakao Login Button

- Role: official Kakao Login integration button
- Kind: interactive
- Type: button
- Anatomy: mandatory black speech-bubble symbol and label
- Background: `#fee500`
- Symbol: `#000000`; shape, proportion, and color cannot change
- Text: `rgba(0, 0, 0, 0.85)`
- Radius: 12px
- Font: 30Pt / OS system
- Labels: `카카오 로그인` / `Login with Kakao`, or shortened `로그인` / `Login`
- Use: Kakao Login only; preserve black speech-bubble symbol and mandated colors. Preserve symbol/label area when resizing. Expand left and right equally when widening. When scaling the whole button, preserve symbol/label proportions and keep the label height at no more than one third of the container height. Use the shortened label if a smaller format is required.
- Surface: Kakao Login design guide
- Observed: full or shortened label; hover, pressed, and disabled visuals are not specified by this guide

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Official full or shortened label on the Login button |
| hover | applicable | Pointer-web login button; the guide does not specify a visual treatment |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The guide names disabled as a Login-button state without specifying a visual |
| loading | not-applicable | A Kakao Login integration button starts Kakao authentication; the control itself does not enter a loading state |
| error | not-applicable | Authentication failure belongs to the host or Kakao auth flow, not an error state of the branded button |
| success | not-applicable | Completed login is not a success confirmation on the button |

Additional observed named state: pressed, named by the guide without a specified visual. This is not `focus-visible` evidence.

### Corporate Navigation Menu

- Role: top-level corporate menu trigger
- Kind: interactive
- Type: button
- Anatomy: pill label
- Background: `#ffffff` in light mode; `#000000` on captured dark subpages
- Text: `#000000` in light mode; `#ffffff` in dark mode
- Radius: 999px
- Padding: 4px 16px 6px
- Height: 37px
- Font: 17px / 400 / KakaoBig
- Use: top-level corporate menu trigger
- Surface: corporate marketing
- Observed: light and dark theme variants; focus and hover observed

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Light and dark theme variants captured on corporate navigation |
| hover | applicable | Pointer-web menu trigger; hover observed, no separate hover color promoted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A menu trigger can be unavailable; visual treatment omitted |
| loading | not-applicable | A top-level corporate menu trigger opens navigation; the control itself does not enter a loading state |
| error | not-applicable | Menu-trigger meaning is opening the menu, not a request or validation failure on the control |
| success | not-applicable | Opening the menu is not an action-outcome confirmation on the control |

Additional observed named states: light/dark theme variants, and generic `focus`. Generic `focus` is not `focus-visible` evidence.

### Corporate Search Control

- Role: corporate-site circular search control
- Kind: interactive
- Type: button
- Anatomy: circular search control
- Background: transparent
- Text: `#333333`
- Radius: 18px
- Height: 36px
- Font: 14px / 400 / KakaoSmall
- Use: corporate-site circular search control
- Surface: corporate marketing
- Observed: default and hover observed

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default captured on the corporate search control |
| hover | applicable | Pointer-web search control; hover observed, no separate hover color promoted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search control can be unavailable; visual treatment omitted |
| loading | not-applicable | A circular search control opens or focuses search; the control itself does not enter a loading state |
| error | not-applicable | This harvested control is a search button, not a validating query field that reports error on itself |
| success | not-applicable | Opening search is not a success confirmation on the control |

### Dark Marketing Tag

- Role: dark corporate marketing tag/CTA label
- Type: badge
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#111111`
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Radius: 16px
- Padding: 7px 8px 8px
- Height: 32px
- Font: 13px / 700 / KakaoSmall
- Use: dark corporate marketing tag/CTA label
- Surface: corporate marketing
- Observed: default captured

### Milestone Filter

- Role: milestone category filter
- Kind: interactive
- Type: button
- Anatomy: selected-filter pill
- Background: `#eeeeee`
- Text: `#000000`
- Radius: 30px
- Padding: 8px 20px 12px
- Height: 44px
- Font: 16px / 700 / KakaoBig
- Use: milestone category filter
- Surface: corporate milestones
- Observed: selected filter captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Selected filter captured on corporate milestones |
| hover | applicable | Pointer-web filter; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A category filter can be unavailable; visual treatment omitted |
| loading | not-applicable | A milestone category filter selects a set; the control itself does not enter a loading state |
| error | not-applicable | Filter meaning is selected versus unselected, not a request or validation failure on the control |
| success | not-applicable | Selecting a category is not an action-outcome confirmation on the control |

Additional observed named state: selected. No separate selected color is recorded.

### Footer Related-Site Pill

- Role: corporate footer related-site pill
- Kind: interactive
- Type: button
- Anatomy: related-site pill
- Background: `#eeeeee`
- Text: `#000000`
- Radius: 24px
- Padding: 10px 20px 12px
- Height: 40px
- Font: 12px / 400 / KakaoSmall
- Use: corporate footer related-site pill
- Surface: corporate milestones
- Observed: default captured; hover not retained

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default captured on the footer related-site pill |
| hover | applicable | Pointer-web related-site pill; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A related-site pill can be unavailable; visual treatment omitted |
| loading | not-applicable | A related-site pill is a destination action; the control itself does not enter a loading state |
| error | not-applicable | Related-site meaning is the destination, not a request or validation failure on the control |
| success | not-applicable | Following the pill is not an action-outcome confirmation on the control |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Corporate content uses a compact 4px / 6px / 8px / 16px / 20px spacing rhythm around controls and text. The corporate pages are responsive, but this run does not promote universal breakpoints.

The Login guide requires the symbol and label zones to remain intact when widening the container; expand left and right equally. When scaling the whole Login button, preserve symbol/label proportions and keep the label height at no more than one third of the container height. Use the shortened Login label if a smaller format is required.

Observed control heights — Login label at 30Pt, navigation 37px, search 36px, marketing tag 32px, milestone filter 44px, footer pill 40px — are measurements from the official guide or the captured corporate surfaces, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Kakao’s corporate mission centers on bringing a needed future closer through technology that understands people.

The following copy-direction and surface-tone reading is a derived editorial implementation inference from the verified surfaces; it is not Kakao-authored or a separately published UI specification. In user-facing copy, that translates into familiar Korean, short labels, and service explanations grounded in an everyday action — talking, finding a place, sending a gift, following a channel — rather than abstract technology claims.

The tone changes by surface. Corporate and culture pages can be optimistic and connective; product/service descriptions should be concrete about the benefit; developer and compliance guidance must be prescriptive and exact. Kakao Login wording, symbol, color, and label rules are not a place for playful rewriting. Avoid turning Kakao’s friendliness into childishness or using yellow as a substitute for clear instructions.

Verified Login labels, kept as observed compliance copy rather than a complete microcopy guide:

- `카카오 로그인` / `Login with Kakao`
- shortened `로그인` / `Login`

No synthetic voice samples are promoted.

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

- Kakao Login hover, pressed, and disabled visual treatments (named, unspecified by the guide)
- `focus-visible` visual treatments
- hover visual on the footer related-site pill (hover not retained)
- selected color for the milestone filter
- Kakao Login label weight (guide does not specify)
- a universal KakaoTalk/native-service family mapping
- KakaoDigitLatin as a visible UI family
- Pretendard as a Kakao Login or corporate UI family
- canonical shadow or elevation tokens, including Developers-docs hover shadows
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five
- universal breakpoints and native KakaoTalk layout
- unverified KakaoTalk chat bubbles, mobile inputs, tabs, badges, or semantic colors
