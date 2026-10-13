---
name: flex
colors:
  canvas: '#ffffff'
  ink: '#111111'
  on-dark: '#ffffff'
  action-lime: '#00ff44'
  announcement-orange: '#ff4d00'
typography:
  about-display:
    fontSize: 96px
    fontWeight: 600
    lineHeight: 1
    use: About-page relationship statement
  about-display-inverse:
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.2
    use: Dark About-page statement
  body-emphasis:
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.55
    use: About-page explanatory copy
  navigation:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    use: Global navigation controls
rounded:
  nav: 8px
  badge: 18px
  cta: 24px
spacing:
  compact: 8
  nav-action-x: 14
  cta-y: 30
  cta-x: 44
components:
  relationship-story-card:
    type: card
    backgroundColor: rgba(255,255,255,0.04)
    border: 1px solid rgba(255,255,255,0.08)
    rounded: 16px
    padding: 24px
    use: Non-interactive relationship-data story item observed on the public home surface
  nav-action-outline:
    type: button
    backgroundColor: transparent
    textColor: '#111111'
    border: '1px #111111'
    rounded: 8px
    padding: 8px 14px
    height: 33px
    typography: 13px / 700
    states: default captured on both surfaces; the capture holds no state frame for this action
    use: 'About-page global navigation secondary action (a, variant-border) at surface-2::[data-omd-capture="8"]; on the dark home header the same action computes #ffffff text and a 1px #ffffff border (home::[data-omd-capture="8"])'
  nav-action-solid:
    type: button
    backgroundColor: '#111111'
    textColor: '#ffffff'
    rounded: 8px
    padding: 8px 14px
    height: 33px
    typography: 13px / 700
    states: default captured on both surfaces; the capture holds no state frame for this action
    use: 'About-page global navigation primary action (a, variant-invert) at surface-2::[data-omd-capture="9"]; on the dark home header it inverts to a #ffffff fill with #111111 text (home::[data-omd-capture="9"])'
  gnb-menu-button:
    type: button
    backgroundColor: transparent
    textColor: '#111111'
    rounded: 8px
    padding: 8px
    height: 32px
    typography: 14px / 700
    states: default captured on six menu buttons per surface; no state frame and no menu-open record
    use: 'About-page global navigation menu button (button, variant-gnb) at surface-2::[data-omd-capture="2"]; the dark home header computes #ffffff text for the same buttons'
  lime-cta:
    type: button
    backgroundColor: '#00ff44'
    textColor: '#111111'
    rounded: 24px
    padding: 30px 44px
    height: 80px
    typography: 17px / 700
    states: default captured on both surfaces; no state frame
    use: High-emphasis marketing conversion link (a, variant-color, size-xl) at home::[data-omd-capture="13"]; /about repeats it at surface-2::[data-omd-capture="25"]
  new-badge:
    type: badge
    backgroundColor: '#ff4d00'
    textColor: '#000000'
    rounded: 18px
    padding: 0px 8px
    height: 20px
    typography: 12px / 700 / 16.56px
    states: static label; no state frame
    use: Announcement-strip new badge (span, badgeType-new) at home::span; /about carries the same badge (surface-2::span)
  carousel-arrow:
    type: button
    backgroundColor: rgba(17, 17, 17, 0.08)
    rounded: 50%
    padding: 0px
    size: 40px x 40px
    hover: bg rgba(17, 17, 17, 0.12)
    pressed: bg rgba(17, 17, 17, 0.12)
    states: 'rest, hover, and pressed sampled on the enabled arrow (capture 12); both frames record rgba(17, 17, 17, 0.12). The disabled arrow beside it (capture 11, same class) records the same two frames, which supports a settled value; the disabled arrow is given no state. Focus is not declared from the bundle: there is no focus frame, and the collector presses before it focuses'
    use: About-page carousel arrow (button.l2024-c-lnBcZQ) at surface-2::[data-omd-capture="12"]; icon-only, its glyph colour was not sampled
  accordion-item:
    type: card
    backgroundColor: rgba(255, 255, 255, 0.08)
    rounded: 24px
    padding: 24px
    states: collapsed (capture 15, class open-false) and expanded (capture 13 and 14, class open-true) variants captured at rest; the expanded fill is rgba(255, 255, 255, 0.1); no pointer-state frame
    use: About-page accordion item (li role=button, l2024-c-bloTie) at surface-2::[data-omd-capture="15"]; the white-alpha fill implies a dark section, and the label style was not sampled separately
  feature-card:
    type: card
    backgroundColor: rgba(17, 17, 17, 0.96)
    rounded: 24px
    padding: 24px
    size: 328px x 452px
    states: non-interactive; three colour variants
    use: 'About-page feature card (li.l2024-c-fMALsr, color-black, two occurrences) at surface-2::li; the color-gray variant fills rgba(17, 17, 17, 0.1) and the color-green variant #00dc3a'
  about-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 24px
    padding: 24px
    states: non-interactive; three colour variants
    use: 'About-page 500px-wide card (li.l2024-c-CFKUv, color-white) at surface-2::li; the color-black variant fills #111111 and the color-trans variant rgba(255, 255, 255, 0.08)'
fonts:
  roles:
    ui: Pretendard Variable
---

# flex — Design Reference

> **Relations Driven AX.** (Observed on `flex.team`, 2026-07-13)
>
> Korean HR-data and AI platform reference: a black-and-white information field punctuated by an acid-lime conversion action. The public marketing surface frames AI as an understanding of organizational relationships and context, while the corporate About surface makes that same thesis concrete through very large editorial type and stark light/dark transitions.

---

## Overview

### Visual Theme & Atmosphere

flex is a Korean company building an HR-data-based AI platform for organizations: its public product language spans people and organization management, performance, payroll and benefits, and operational workflows. Its current expression is not the earlier “one ink / graphite card” system. The 2026 public site leads with **Relations Driven AX**—the claim that AI becomes useful when it understands the relationships and context inside an organization—and turns that idea into a high-contrast, editorial marketing system. Black or white fields establish the serious enterprise register; `#00FF44` appears as a deliberately loud action color rather than a general-purpose semantic palette. The About page gives the brand’s “Human Relations” reinterpretation of HR room to breathe in 80–96px type, then alternates dark and light narrative sections. This reference describes those current public marketing and corporate surfaces only; it does not treat the separate help center as product UI evidence.

What is distinctive in the observed surfaces:

- **Relationship data as the visual argument.** Large, plain-spoken statements carry the thesis before any UI treatment; application screenshots serve the story rather than becoming generic SaaS decoration.
- **Hard contrast, selective lime.** `#111111`/white carry most chrome and text, while `#00FF44` is reserved for primary conversion links.
- **Editorial scale plus dense enterprise copy.** About-page statements reach 96px, then resolve into 17px/600 explanatory copy and 15px supporting copy.
- **Rounded actions rather than rounded everything.** Global nav actions use 8px corners; campaign CTAs use 24px pills. No universal card-radius rule is asserted.

### Primary tasks

- Find out which HR operations the platform covers
- Judge whether an AI subscription actually changes how a company works
- See how the platform works through application screenshots
- Read how the company grew and where it is heading
- Start a trial or send an inquiry

### Iconography

The captured public surfaces expose inline brand/product imagery and ordinary navigation affordances, but no named icon library or reusable icon-size/weight rule. No icon token is promoted.

### Imagery & Illustration

- The home page uses application screenshots to demonstrate contextual AI answers, organizational signals, and connected-work-system data; these are marketing illustrations of the platform, not a component library.
- The About page is primarily typographic and narrative. Its light/dark editorial fields frame the company story rather than adding a stock-photo visual language.
- No imagery crop ratio, overlay treatment, or product-screen frame is promoted because the supplied evidence does not identify a repeatable image component.

### Brand Narrative

Flex says it was established in 2019 and launched its flex service in 2020. Its current About page describes a progression from establishing an HR-platform standard (2019–2021), through enterprise expansion (2022–2024), toward an AX platform grounded in HR data (2025–2027). The current brand thesis is **Relations Driven AX**: HR is redefined from “Human Resources” to “Human Relations,” and relationship data is presented as the context that lets AI diagnose, suggest, and execute work safely. The company frames its mission as solving organizations’ and employees’ problems so that it becomes an essential service for everyone who works.

### Principles

1. **Context before capability.** Explain what the organization knows and how access is bounded before claiming AI benefit.
2. **Contrast carries authority.** Build the public hierarchy with black, white, and measured opacity; reserve lime for the decisive conversion point.
3. **Use lime as an action, not a status system.** `#00FF44` is evidenced on marketing CTA links, not as a universal product semantic token.
4. **Let scale establish the thesis.** Keep editorial statements distinct from supporting explanation; the recorded 80–96px About styles are a surface-specific example.
5. **Keep source domains separate.** Marketing/corporate pages, Help Center chrome, and unverified app surfaces must not be mixed into one inferred product design system.

### Personas

Flex’s official copy names organizations, members, leaders, and teams as the stakeholders of its platform. It also describes HR teams dealing with attendance, evaluation, compensation, compliance, and data-informed decisions. This reference therefore recognizes those official stakeholder groups without inventing named fictional personas or unverified audience demographics:

- **Organization and HR operators:** need connected organizational and employee data to handle HR operations and compliance.
- **Leaders:** use organizational context and goal/health signals to make decisions.
- **Employees:** receive access and AI assistance bounded by their role and organizational relationship.

## Colors

### Color & Typography

#### Color tokens

- `#000000` — public-surface black field and the catalog primary color
- `#111111` — light-surface navigation text and solid navigation action background
- `#FFFFFF` — light canvas, on-dark text, and outline navigation action background
- `#00FF44` — primary marketing conversion action on home and About
- `#FF4D00` — compact “new” badge in the announcement strip
- `#00DC3A` — green variant of the About-page feature card (§4); a card fill, not the `#00FF44` action lime
- `rgba(17,17,17,0.84)` — measured dark-on-light long-form emphasis
- `rgba(255,255,255,0.84)` and `rgba(255,255,255,0.48)` — measured on-dark supporting copy and label tones

The lime and orange are observed marketing accents with separate purposes; neither is promoted as a product-app status color.

#### Typography evidence classes

- **Live loaded Flex webfont:** both supplied public surfaces resolve visible text to `"Pretendard Variable", Pretendard, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`. The collector classifies `Pretendard Variable` as loaded/high-confidence, records 351 visible uses across headings, body, navigation, badges, and actions, and resolves 92 Flex-hosted subset URLs under `static.flex.team`. The machine family token therefore names only `Pretendard Variable`.
- **Declared but unused fallback:** static `Pretendard` is present in declarations but has zero observed visible uses. `system-ui` appears once as an operating-system stack. Neither is promoted as another Flex UI-family token or rendered as a substitute specimen.
- **Measured public hierarchy:** `/about` includes 96px/600/96px and 80px/600/96px display samples, 17px/600/24.65–26.35px body-emphasis samples, and 14px/700 global-navigation controls. These sizes are retained as measured styles without assigning a family token.
- **Documentation chrome:** `guide.flex.team` is a separate Help Center surface. It was inspected only to classify the source domain and contributes no color, typography, or component token here.

## Layout

### Layout & Grid

- **Global announcement strip:** the two captured public surfaces begin with a 48px-high announcement link; it uses 60px horizontal padding at the 1440px collector viewport.
- **Global navigation:** on `/about`, the captured menu controls use 8px radius and 8px internal padding; the two conversion actions use 8px 14px padding.
- **About-page editorial hierarchy:** measured headline styles include 96px/600/96px on a light field and 80px/600/96px on a dark field. These are surface-local display treatments, not a claimed product-app type scale.
- **Conversion action:** the observed lime action is a 24px-radius link with 30px 44px padding and 17px/700 text on both captured public surfaces.
- **Boundary:** no container maximum, page section height, or responsive breakpoint is promoted because the supplied 1440×900 capture does not establish those values across viewports.

## Motion & Easing

### Motion

No duration, easing, transition, or scroll-trigger state was recorded in the supplied evidence. Motion is intentionally undocumented rather than extrapolated from the static surfaces.

No motion values were captured. Preserve the absence of a claimed motion system rather than assigning easing curves, delays, or stagger behavior from visual inference.

## Components

### Global navigation action — outline

**Light-surface secondary action**
- Background: transparent (`rgba(0, 0, 0, 0)` over the white page). Corrected 2026-09-29: the July text listed `#FFFFFF`, which is the page behind the action, not the element's fill.
- Text: `#111111`
- Border: `1px solid #111111`
- Radius: `8px`
- Padding: `8px 14px`
- Font: `13px / 700`
- Height: 33px
- Use: `/about` light global navigation secondary conversion action; evidence `surface-2::[data-omd-capture="8"]`
- States: default captured on both surfaces; the capture holds no state frame for this action. On the dark home header the same action computes `#FFFFFF` text and a 1px `#FFFFFF` border (`home::[data-omd-capture="8"]`).

### Global navigation action — solid

**Light-surface primary action**
- Background: `#111111`
- Text: `#FFFFFF`
- Radius: `8px`
- Padding: `8px 14px`
- Font: `13px / 700`
- Height: 33px
- Use: `/about` light global navigation primary conversion action; evidence `surface-2::[data-omd-capture="9"]`
- States: default captured on both surfaces; no state frame. On the dark home header it inverts to a `#FFFFFF` fill with `#111111` text (`home::[data-omd-capture="9"]`).

### Marketing CTA — lime

**Primary conversion**
- Background: `#00FF44`
- Text: `#111111`
- Radius: `24px`
- Padding: `30px 44px`
- Font: `17px / 700`
- Height: 80px
- Use: high-emphasis marketing conversion link on home and `/about`; evidence `home::[data-omd-capture="13"]`, `surface-2::[data-omd-capture="25"]`
- States: default captured on both surfaces; no state frame.

### Announcement badge — new

**Default**
- Background: `#FF4D00`
- Text: `#000000`
- Radius: `18px`
- Padding: `0px 8px`
- Font: `12px / 700`
- Height: 20px (line height 16.56px)
- Use: compact “new” label in the public announcement strip; evidence `home::span`, `surface-2::span`
- States: static label; no state frame.

The components below were transcribed on 2026-09-29 from the same 2026-07-13 bundle; nothing was re-measured.

### Global navigation menu button

- Background: transparent
- Text: `#111111` on `/about`; the dark home header computes `#FFFFFF`
- Radius: `8px`
- Padding: `8px`
- Height: 32px
- Font: `14px / 700`
- Use: global navigation menu button (`variant-gnb`), six per surface; evidence `surface-2::[data-omd-capture="2"]`, `home::[data-omd-capture="2"]`
- States: default captured; no state frame and no menu-open record.

### Carousel arrow

- Background: `rgba(17, 17, 17, 0.08)`
- Radius: `50%`
- Padding: `0px`
- Size: 40px × 40px
- Hover: background `rgba(17, 17, 17, 0.12)`
- Pressed: background `rgba(17, 17, 17, 0.12)`
- States: sampled on the enabled arrow, `surface-2::[data-omd-capture="12"]`; its hover and pressed frames, taken at different moments, record the same fill. The disabled arrow beside it (`surface-2::[data-omd-capture="11"]`, same class `l2024-c-lnBcZQ`) records the same two frames, which supports reading the value as settled; the disabled arrow itself is given no state value. Focus is not declared: the capture holds no focus frame, and the collector presses before it focuses, which suppresses `:focus-visible`.
- Use: About-page carousel arrow; icon-only, and its glyph colour was not sampled.

### Accordion item

- Background: `rgba(255, 255, 255, 0.08)` collapsed; `rgba(255, 255, 255, 0.1)` expanded
- Radius: `24px`
- Padding: `24px`
- Use: About-page accordion item (`li[role=button]`, class `l2024-c-bloTie`); collapsed `surface-2::[data-omd-capture="15"]` (`open-false`), expanded `"13"` and `"14"` (`open-true`). The white-alpha fill implies a dark section. The item's own 14px / 500 is the container's computed style, not a sampled label style, so no text style is declared.
- States: collapsed and expanded DOM variants at rest; no pointer-state frame.

### Cards

- **Relationship story card** (home, `li.l2024-c-cbIXJP`, 325 × 248, nine occurrences): fill `rgba(255, 255, 255, 0.04)`, border 1px `rgba(255, 255, 255, 0.08)`, 16px radius, 24px padding. This is the July frontmatter token, described in prose here for the first time.
- **Feature card** (`li.l2024-c-fMALsr`, 328 × 452): 24px radius, 24px padding; fills `rgba(17, 17, 17, 0.96)` (`color-black`, two occurrences), `rgba(17, 17, 17, 0.1)` (`color-gray`), and `#00DC3A` (`color-green`).
- **About card** (`li.l2024-c-CFKUv`, 500px wide): 24px radius, 24px padding; fills `#FFFFFF` (`color-white`), `#111111` (`color-black`), and `rgba(255, 255, 255, 0.08)` (`color-trans`).
- All three are non-interactive list items. Their own computed text colour is the container's, not a sampled label style, so no text colour is declared.

The carousel arrow is the only component with measured pointer states. The bundle's `interactions[]` record is empty (no dialog, tab, menu, or form record), so menu, dialog, form, disabled, and focus states stay omitted. Corrected 2026-09-29: the July text read the empty interaction record as the absence of every state sample, while the bundle holds hover and pressed frames for the carousel arrows.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://flex.team/` (marketing surface), `https://flex.team/about` (corporate/marketing surface), `https://guide.flex.team/en/` (documentation-domain classification only), `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (font availability and licence boundary only)
**Tier 2 sources:** `https://getdesign.md/flex` (attempted; safe-open failure/no usable record), `https://styles.refero.design/?q=flex` (attempted; safe-open failure/no usable record), web search for both names (no Flex Team design record returned)
**Conflicts unresolved:** none

The legacy `#1D1D1F`/graphite/pill-service-card claims conflict with the supplied 2026 live public capture and were removed; no usable Tier 2 token record was available for a second comparison.

---

### States

No loading, error, empty, disabled, or success state was captured for a Flex product workflow. The bundle's `interactions[]` record is empty, but it holds pointer-state frames for the About-page carousel arrows: hover and pressed both record `rgba(17, 17, 17, 0.12)` over the `rgba(17, 17, 17, 0.08)` rest (§4). The other state-like observations are surface-theme variants (dark versus light navigation), the accordion's collapsed and expanded variants, and static defaults in §4. Focus is not declared. Corrected 2026-09-29: the July text said the evidence reported zero interaction coverage and read that as no state sample.

## Do's and Don'ts

### Do

- Use `#111111` and `#FFFFFF` as the dominant public-surface contrast pair.
- Reserve `#00FF44` for the large, high-emphasis conversion action observed on the current public pages.
- Use the 8px navigation action and 24px campaign CTA radii only in their observed contexts.
- Treat 80–96px editorial type as a current About-page treatment, not proof of a product-app display scale.
- Keep help-center chrome and any unobserved logged-in application UI out of this public-surface reference.

### Don't

- Reintroduce the legacy graphite manifesto cards, service-filter pills, or inset-ring variants as current Flex components.
- Treat the orange announcement badge as a general error or warning semantic color.
- Render static `Pretendard` or a system fallback as though it were the verified `Pretendard Variable` family.
- Invent hover, disabled, form, dialog, or loading variants beyond the carousel arrow's measured hover and pressed fill.
- Turn relationship-data positioning into generic AI copy that omits access, role, and organizational context.

---

**Verified:** 2026-07-13
**Pipeline:** omd:add-reference UPDATE (3-tier reconcile)
**Catalog position:** KR · saas · HR-data/AI platform

## Voice & Tone

### Content & Voice

The public narrative starts from organizational context rather than generic AI capability. The home page asks whether blanket AI subscriptions actually change how a company works, then answers through three forms of knowledge: knowing the user, anticipating work, and connecting enterprise context. The About page reframes HR as **Human Relations** and positions the company’s mission around solving organizational and employee problems. CTA language is direct and operational—trial or inquiry—while the surrounding prose remains declarative and explanatory.

**Voice adjectives:** contextual · declarative · enterprise-serious

| Do | Don't |
|---|---|
| Start with a concrete organizational condition or question. | Lead with abstract “AI transformation” claims without context. |
| Explain how context, access, and relationships change an outcome. | Treat every user or team as interchangeable. |
| Use a clear conversion label for a trial or inquiry. | Turn every paragraph into a sales CTA. |
| Pair confident headlines with explanatory follow-through. | Use playful hype that conflicts with the governance and safety message. |

The examples are a source-derived style description, not a license to reproduce Flex copy verbatim.

## Governance

### Accessibility

- `#111111` on `#FFFFFF` and `#FFFFFF` on `#111111` are high-contrast text pairs in the captured light/dark chrome.
- The lime primary CTA uses `#111111` text over `#00FF44`; retain this pairing when reproducing the observed action treatment.
- The collector did not record focus-visible or keyboard interaction states. Do not infer focus treatment from the 8px or 24px radii; provide an accessible focus indicator in an implementation.
- `Pretendard Variable` is backed by loaded-face evidence and Flex-hosted subset URLs. Static `Pretendard` and `system-ui` remain declared/system fallbacks and must not be presented as additional Flex font roles.

### Known Gaps

- **Contrast, `nav-action-outline`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-menu-button`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
