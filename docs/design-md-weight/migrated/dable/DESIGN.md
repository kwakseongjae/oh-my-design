# Dable Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The source-role and evidence-classification judgments in this Scope are derived editorial implementation inferences from the verified records; they are not Dable-authored or a separately published UI specification.

Dable (데이블) is a content-discovery and native-advertising platform serving advertisers, publishers, and media audiences. This reconstruction covers two first-party Korean public surfaces inspected on 2026-07-02: the homepage at `dable.io/ko/` and the advertiser product page at `dable.io/ko/advertising/`. The official engineering blog and GitHub organization supply brand-owned context, not additional interface tokens.

The source records Dable’s 2015 founding by 이채현 (Lee Chae-hyun) and three co-founders from SK Planet’s RecoPick venture; Lee’s POSTECH computer-science and big-data/recommendation background; the “Data” + “able” name; and the mission “사용자와 미디어, 콘텐츠를 연결하자” (to connect users, media, and content). It describes Dable News as the content-discovery engine and Dable Native Ad as Asia’s largest native-ad exchange, serving 500M+ monthly users and 3,000+ media partners by 2021 across 10+ Asia-Pacific markets including Japan, Taiwan, Indonesia, Vietnam, Malaysia, Thailand, Hong Kong, and Singapore, before acquisition by Yanolja. These are legacy narrative claims, not live-style evidence.

The following visual characterization is a derived editorial implementation inference from the verified surfaces; it is not Dable-authored or a separately published UI specification. The public system is flat and presentation-led: `#ffffff`, `#efefef`, and `#212121` full-width bands replace elevation; `#0071ce` is the primary pill-action blue; `#56cfc2` is a bounded alternate; Poppins carries feature words and chrome while Open Sans carries explanatory text; every verified CTA uses 50px pill geometry.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These task formulations are derived editorial implementation inferences from the verified surface purposes; they are not Dable-authored or a separately published UI specification.

- Understand Dable’s personalization, machine-learning, and auto-optimization capabilities.
- Create an advertiser account, request a quote, or start a native-advertising workflow.
- Evaluate or use Dable News/content-discovery services as a media or publisher partner.
<!-- design-md:claim-end -->

### Audience

This audience grouping is a derived editorial implementation inference from the source-backed stakeholder references; it is not Dable-authored or a separately published UI specification.

Source-backed groups are performance advertisers, media and publisher partners, and adtech buyers operating across APAC. Named biographies in the legacy persona section are fictional and are not retained.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the verified surfaces; it is not Dable-authored or a separately published UI specification.

- Poppins at 56px / 400 for hero capability words; Poppins also owns 14px buttons and 13px / 600 navigation.
- Open Sans owns body and product explanation roles, including 14px / 400 / unitless 1.5 body text.
- Primary blue `#0071ce` and alternate mint `#56cfc2` stay in distinct action roles.
- All verified CTAs are 50px capsules; verified content bands and cards are flat.
- Color-band separation (`#212121`, `#efefef`, `#ffffff`) instead of shadow.

### Derived implementation principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Dable-authored or a separately published UI specification.

- Lead with a concrete capability, outcome, or metric and keep decoration secondary.
- Reserve `#0071ce` for the primary action and `#56cfc2` for the single alternate action role.
- Use Poppins for feature words and interactive chrome; use Open Sans for the reading layer.
- Separate sections with full-width bands rather than elevation.
- Preserve 50px CTA geometry and the observed square content-band/block geometry as distinct roles.

### Avoid

The following avoidances are derived editorial implementation inferences from the verified surfaces; they are not Dable-authored or a separately published UI specification.

- Do not add a third saturated action hue or use mint as the primary CTA.
- Do not spread blue through unrelated text and surfaces.
- Do not swap the Poppins and Open Sans roles.
- Do not add drop shadows or square the verified CTA pills.
- Do not promote the legacy breakpoint, state, or motion recipes as measured live behavior.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The semantic role names and action boundaries in this table are derived editorial implementation inferences from the verified surface records; they are not Dable-authored or a separately published UI specification.

| Role | Value | Verified use |
|---|---|---|
| Primary action | `#0071ce` | Primary CTA backgrounds and active navigation text |
| Inline link | `#0b7ed1` | Text-level link emphasis |
| Alternate action | `#56cfc2` | Mint “기본 견적 확인” CTA only |
| Heading ink | `#000000` | Hero and section headings |
| Feature-title ink | `#181818` | Smaller targeting-option titles |
| Body | `#3d3d3d` | Dominant explanatory copy |
| Slate | `#464646` | Secondary subhead and stronger caption |
| Muted | `#8a8a8a` | Tertiary copy and metadata |
| Faint | `#cccccc` | Lowest-emphasis text and legacy disabled guidance |
| Neutral button | `#e8e8e8` | Tertiary grey pill surface |
| Neutral button text | `#6f6f6f` | Tertiary pill label |
| Light surface | `#efefef` | Alternating content band |
| Dark band | `#212121` | Hero and footer bands |
| Ghost-pill text | `#2b2b2b` | White pill on dark band |
| Canvas / on-primary | `#ffffff` | Page/card bands and text on blue/mint/dark |

### Spacing

Source scale: `xs: 4`, `sm: 8`, `md: 16`, `lg: 24`, `xl: 44`, `section: 64`. CTA padding remains component-specific: `17px 44px`, `17px 29px`, and the compact `10px 40px` record.

### Shape

The role separation between the 50 and 9999 shape records is a derived editorial implementation inference from the verified uses; it is not Dable-authored or a separately published UI specification.

- Square: 0
- Pill: 50
- Full: 9999

Verified CTA declarations render the pill value as 50px. The full value remains a separate token for circular play buttons and icon frames described by the source; it is not merged with the 50px CTA radius.

### Elevation

The grouping and captured-surface boundary below are derived editorial implementation inferences from the verified flat treatments; they are not Dable-authored or a separately published UI specification.

The live proof records `box-shadow: none` across hero, navigation, headings, and all pill buttons on both surfaces. Page groups separate through `#212121`, `#efefef`, and `#ffffff` bands. This is the captured public-site boundary; it is not proof for an authenticated dashboard or unobserved overlay.

### Motion

The motion-promotion decision below is a derived editorial implementation inference from the recorded proof boundary; it is not Dable-authored or a separately published UI specification.

The live proof contains static computed styles but no component-specific transition-property, animation-name, duration, easing, or reduced-motion observation. Legacy motion durations and curves are therefore not promoted as Dable tokens.

A motion value may be promoted only after component-specific computed before/after observation establishes all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. Until then, motion values remain absent.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Families

The family-role split and substitution rule below are derived editorial implementation inferences from the verified typography uses; they are not Dable-authored or a separately published UI specification.

- **Display and interactive chrome:** `Poppins`, weight 400 for feature words/buttons and 600 for navigation.
- **Reading and product content:** `Open Sans`, weight 400 for body/headings/footer and 700 for feature-card titles.
- Do not substitute one verified role family for the other.

### Type roles

| Role | Family | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Display hero | Poppins | 56px | 400 | `1.0` unitless | “Personalization”, “Machine learning”, “Auto-optimization” |
| Product hero | Open Sans | 35px | 400 | `1.0` unitless (35px captured) | Advertiser product hero |
| Section heading | Open Sans | 26px | 400 | `1.0` unitless (26px captured) | Product section title — observed “데이블 네이티브 애드란?” |
| Subheading | Open Sans | 22px | 400 | `1.0` unitless (22px captured) | Feature subtitle |
| Feature title | Open Sans | 18px | 700 | `1.0` unitless (18px captured) | Targeting-option title |
| Body | Open Sans | 14px | 400 | `1.5` unitless | Dense explanatory copy |
| CTA label | Poppins | 14px | 400 | `1.0` unitless | Pill action label |
| Navigation | Poppins | 13px | 600 | `1.0` unitless | Top navigation |
| Footer heading | Open Sans | 15px | 400 | `3.0` unitless (45px captured) | Footer section heading |

### Assets

The identity-selection, rejection, authority, and reuse boundaries below are derived editorial implementation inferences from the verified asset records; they are not Dable-authored or a separately published UI specification.

- The selected catalog identity is the brand-owned GitHub organization avatar for slug `teamdable`; the 64×64, 2198-byte PNG decision remains in provenance. It is an identity asset, not a general logo-licence grant.
- The rejected Google proxy, low-resolution CDN favicon, and unavailable Simple Icons entry remain provenance decisions, not portable substitutes.
- Product screenshots and illustrations were observed without shadow; no reuse licence is established by the source.

<!-- design-md:section components-states -->
## 4. Components & States

### State evidence boundary

The evidence-boundary and applicability judgments in this section are derived editorial implementation inferences from the verified component roles; they are not Dable-authored or a separately published UI specification.

The source verifies default component geometry and one named active navigation color. It supplies no comprehensive interaction capture. Applicability follows component meaning; absence of a capture is not a `not-applicable` reason. Unmeasured visual treatments remain absent, and state coverage is not claimed complete.

The applicability judgments below are derived editorial implementation inferences from the verified component roles; they are not Dable-authored or a separately published UI specification. They classify Core §4.4 meaning only and do not promote an unmeasured visual treatment.

### Primary blue CTA

- Primitive type: button
- Kind: interactive
- Background: `#0071ce`; text: `#ffffff`
- Radius: 50px; height: 48px; padding: `17px 44px`
- Font: `14px / 400 / Poppins`
- Use: “자세히 보기”, “광고계정 생성하기”, “시작하기”
- Also observed carrying this same `#0071ce` pill treatment on the advertiser product page: “상품소개서 다운로드” (live inspect 2026-07-02). The label is a source live-inspect record, not part of the legacy component `use` field.

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Dable-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured primary CTA treatment |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | This CTA launches a destination or flow rather than presenting progress in-place |
| error | not-applicable | Flow failure is not presented by the CTA itself |
| success | not-applicable | Flow completion is not presented by the CTA itself |

### Mint secondary CTA

- Primitive type: button
- Kind: interactive
- Background: `#56cfc2`; text: `#ffffff`
- Radius: 50px; height: 48px; padding: `17px 29px`
- Font: `14px / 400 / Poppins`
- Use: “기본 견적 확인”

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Dable-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured alternate CTA treatment |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Quote CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | Quote-flow progress is not presented by this CTA role |
| error | not-applicable | Quote failure is not presented by this CTA role |
| success | not-applicable | Quote completion is not presented by this CTA role |

### White ghost CTA

- Primitive type: button
- Kind: interactive
- Background: `#ffffff`; text: `#2b2b2b`
- Radius: 50px; height: 48px; padding: `17px 44px`
- Font: `14px / 400 / Poppins`
- Use: “서비스 문의하기”, “광고주 지원” on a dark band

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Dable-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured ghost CTA treatment |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Support action can be unavailable; visual treatment omitted |
| loading | not-applicable | Support navigation does not present progress in-place |
| error | not-applicable | Support navigation does not present validation failure |
| success | not-applicable | Support navigation does not present completion feedback |

### Neutral pill CTA

- Primitive type: button
- Kind: interactive
- Background: `#e8e8e8`; text: `#6f6f6f`
- Radius: 50px; height: 48px; padding: `17px 29px`
- Font: `14px / 400 / Poppins`
- Use: “콘텐츠 검토 가이드”

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Dable-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured neutral CTA treatment |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Guide action can be unavailable; visual treatment omitted |
| loading | not-applicable | Guide navigation does not present progress in-place |
| error | not-applicable | Guide navigation does not present validation failure |
| success | not-applicable | Guide navigation does not present completion feedback |

### Top navigation item

- Primitive type: tab
- Kind: interactive
- Background: transparent over `#212121`
- Text: `#ffffff`; named active text: `#0071ce`
- Font: `13px / 600 / Poppins`
- Use: “Advertisers”, “Publishers”, “Support”, “Resources”, “About”

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Dable-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured navigation treatment |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive tab; visual treatment omitted |
| disabled | applicable | Navigation tab can be unavailable; visual treatment omitted |
| loading | not-applicable | Navigation selection does not carry loading presentation |
| error | not-applicable | Navigation selection does not present validation failure |
| success | not-applicable | Navigation selection does not present completion feedback |

### Flat feature block

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the unresolved interaction evidence; it is not Dable-authored or a separately published UI specification.

- Primitive type: card
- Interaction kind / applicability map: omitted; interactivity is not established.
- Background: `#ffffff`; text: `#000000`; no border; no shadow
- Use: flat feature/content block on a white band

### Grey surface band

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the unresolved interaction evidence; it is not Dable-authored or a separately published UI specification.

- Primitive type: card
- Interaction kind / applicability map: omitted; interactivity is not established.
- Background: `#efefef`; text: `#3d3d3d`
- Use: alternating full-width content band

### Compact contact pill

The decision to omit a primitive type, interaction kind, and applicability map is a derived editorial implementation inference from the unresolved primitive evidence; it is not Dable-authored or a separately published UI specification.

- Primitive type / interaction kind: omitted; the source supplies a pill treatment but no verified primitive declaration.
- Background: `#0071ce`; text: `#ffffff` in the legacy component body
- Radius: 50px; height: 39px; padding: `10px 40px`
- Font: `13px / 400 / Poppins`
- Use: “Contact Us” in the dark footer band

### Footer heading

Classifying this footer heading as non-interactive is a derived editorial implementation inference from its verified section-heading role; it is not Dable-authored or a separately published UI specification.

- Kind: non-interactive
- Reason: section heading, not an action control
- Text: `#ffffff`; background band: `#212121`
- Font: `15px / 400 / Open Sans`; unitless line-height token `3.0` (45px captured)
- Use: “Seoul Office”, “Careers”, “Privacy Policy”

### Legacy derived state guidance

These state recipes are a derived editorial implementation inference from the verified surfaces; they are not Dable-authored or a separately published UI specification. No measured interaction evidence is assigned to them.

| State | Legacy guidance retained without promotion to observed treatment |
|---|---|
| Empty campaign/report | White canvas; one `#3d3d3d` explanation and one `#0071ce` create-campaign pill; no clutter. |
| Empty saved list | One `#8a8a8a` line and a path back. |
| Loading dashboard/results | Final-size flat skeleton blocks on `#efefef`; no shadow shimmer. |
| Loading in-place refresh | Subtle `#0071ce` progress while prior values remain visible. |
| Fetch/compute error | Inline `#3d3d3d` explanation and retry; never only “오류가 발생했습니다”. |
| Form error | Field-level message describing valid input, not only “필수”. |
| Campaign success | Brief calm confirmation with a next-step link; no celebratory emoji. |
| Skeleton | `#efefef` final-size blocks, square corners, flat pulse. |
| Disabled | `#cccccc` text on `#e8e8e8`; legacy guidance fades blue actions rather than switching them to grey. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The presentation grouping and responsive-proof boundaries below are derived editorial implementation inferences from the verified desktop surfaces; they are not Dable-authored or a separately published UI specification.

- Full-screen `#212121` hero bands present one large Poppins capability word at a time.
- Product and feature sections alternate full-width `#ffffff` and `#efefef` bands; calls to action group into horizontal pill rows beneath copy.
- Source spacing runs 4 → 8 → 16 → 24 → 44 → 64, with exact component padding in §4.
- Captured controls are 48px high; the compact footer pill is 39px. Both values are desktop public-site observations.
- Proof uses a 1440×900 viewport and does not establish `<640px`, `640–1024px`, or `1024–1440px` breakpoints or their collapse behavior. Those legacy claims remain in provenance only.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice direction, proof-use direction, and avoidances below are derived editorial implementation inferences from verified first-party language; they are not Dable-authored or a separately published UI specification.

Dable’s observed voice is clear, technical, and capability-first. Hero words are declarative—“Personalization”, “Machine learning”, “Auto-optimization”—while product headings name the benefit and CTAs use direct functional imperatives such as “자세히 보기”, “광고계정 생성하기”, and “기본 견적 확인”.

The source also records a mission line about connecting “사용자와 미디어, 콘텐츠” (users, media, and content), stated in full as “사용자와 미디어, 콘텐츠를 연결하자”; keep the Korean wording as published rather than shipping only its English reading.

Verified live titles include “네이티브 광고와 콘텐츠 디스커버리”, “인공 지능 기반의 네이티브 광고를 통한 적합한 고객 발견”, and “글로벌 프리미엄 미디어 네트워크에 광고하세요”. Use concrete counts and market coverage where the source supplies them. Avoid buzzword stacking without substance, fear-based marketing, undefined jargon, and exclamation-heavy hype.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Dable-authored or a separately published UI specification.

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

- authenticated advertiser/publisher dashboard tokens and components
- measured mobile/tablet/desktop reflow and alternative-viewport image behavior
- component-specific hover, focus-visible, pressed, disabled, loading, error, and success visual treatments
- verified transition properties, animation names, durations, easings, and reduced-motion behavior
- general logo/image reuse rights beyond the selected catalog identity record
