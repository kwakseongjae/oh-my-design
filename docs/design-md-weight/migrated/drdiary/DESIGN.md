# Dr.diary Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Dr.diary (닥터다이어리) publishes its own positioning in the page title, "닥터다이어리 | Healthcare & Lifestyle Tech Company", and its own direction in the homepage hero, "데이터로 선도하는 초개인화 만성질환 케어" ("data-driven, hyper-personalized chronic-disease care"). Both strings are brand-published copy captured on the live surface. The care areas the source names around them — blood-glucose (혈당) tracking, continuous glucose monitoring (CGM), and data-driven diabetes management — are recorded by the source as background drawn from that positioning and from homepage press items rather than quoted from a Dr.diary statement, so they are carried as scope context and never as a clinical, efficacy or safety claim.

This contract covers two brand-owned web surfaces that were inspected live: the corporate/product homepage at `https://drdiary.co.kr/` and the official careers site on the `careers.drdiary.co.kr` subdomain. It does not treat those two marketing surfaces as a proxy for the consumer app, the CGM product interface, or the B2B corporate-health service console. Values below stay attached to the surface that established them: color, type, elevation and component values come from the homepage, and the careers surface contributes the pill radius and one voice sample.

The source also records the company's platform reach — a consumer app, continuous glucose monitoring, B2B corporate-health services, continuous-glucose-management pilots with public-health centers (보건소), AI chronic-care collaboration with 서울대병원, employee-health programs with corporate partners, and a companion health-product line (글루어트 / Gluart) that press items describe as expanding into overseas retail channels. The source marks these corporate details as general public knowledge rather than a quoted Dr.diary statement, so they are carried here as scope context and never as interface evidence or as a clinical claim.

Reading the flat, gradient-warmed interface as an argument that managing a chronic condition can be approachable rather than clinical is a derived editorial implementation inference from the verified surfaces; it is not Dr.diary-authored or a separately published UI specification. The source applies the same qualification to its own interpretive readings.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Read the mission positioning in the homepage hero — "데이터로 선도하는 초개인화 만성질환 케어".
- Review the value and service bands — "닥터다이어리가 지향하는 가치" and "맞춤형 건강관리 서비스".
- Download the consumer app through the App Store / Google Play outline CTA pair on the hero band.
- Scan press tiles in the "닥터다이어리 새소식" grid and open "전체보기" for the full list.
- Read the team and culture framing on the official careers site.
<!-- design-md:claim-end -->

### Audience

Restricting Audience to group level, and reading the two groups below off the positioning and the general-knowledge narrative graded in Scope, are a derived editorial implementation inference from the verified surfaces; they are not Dr.diary-authored or a separately published audience definition. No individual personas are promoted. The source labels its three persona entries as fictional archetypes with illustrative names; they are dropped rather than promoted to verified tasks, and they are not re-hosted in the sidecar. Use group level only: people managing a chronic condition such as diabetes, and the corporate, hospital and public-health partners of the B2B health service. Both groups come from the positioning and the general-knowledge narrative graded in Scope above, not from an audience study.

### Distinctive traits

The values below are live computed observations. The role names attached to them — anchor/trust accent, signature, container workhorse — are a derived editorial implementation inference from the verified surfaces; they are not Dr.diary-authored or a separately published token taxonomy.

- Signature tri-stop gradient — sky-blue `#3eaeff` → pink `#ff5a8c` → purple `#dc6eff`, with a cyan `#00c8fa` tail on emphasis text — rendered as clipped text and as thin accent bars
- Sky-blue (`#3eaeff`) as the single anchor/trust accent, and by far the most frequent solid accent
- Pretendard across the whole type system — section headlines at 40px / weight 600, body at 16px / weight 400
- Ink navy (`#232f4d`) headings and pure black (`#000000`) body on a white (`#ffffff`) canvas
- Flat, shadow-free depth: live inspection returned `box-shadow: none` on the hero, nav, headings, value cards and press cards; separation comes from the `#f5f8fb` tint and `#dee0e4` hairlines
- 16px-radius cards as the container workhorse; 8px on outline CTAs
- Cool slate-grey text ladder (`#4f5971` → `#9197a6` → `#bdc1ca`) for hierarchy
- Secondary blue-violet (`#4970f5`) for occasional link and icon accents

### Principles

These five principles are a derived editorial implementation inference from the verified surfaces; they are not Dr.diary-authored or a separately published UI specification. The source records the same qualification for its own interpretive claims.

1. **Reframe the burden.** Chronic-disease care should feel approachable, not clinical. *UI implication:* warm the trustworthy sky-blue with the pink-purple gradient; keep surfaces flat, airy and mobile-native rather than heavy.
2. **Data made legible.** The product's value is turning continuous health data into something a person can act on. *UI implication:* reserve gradient and color energy for the numbers and headlines that matter; keep everything else calm white and slate so the data reads first.
3. **Decode, don't intimidate.** Clinical terms (CGM, 혈당) are surfaced in plain language. *UI implication:* every clinical term gets a plain-language label; copy explains rather than gatekeeps.
4. **Trust through restraint.** Credibility comes from calm precision, not decoration. *UI implication:* no shadows, ink-navy headings, hairline separation.
5. **One anchor, one signature.** Sky-blue (`#3eaeff`) is the trust color and the tri-stop gradient is the memorable signature. *UI implication:* keep the anchor single and the gradient reserved for emphasis.

### Avoid

These prohibitions are a derived editorial implementation inference from the verified surfaces; they are not Dr.diary-authored or a separately published UI specification.

- Do not add drop shadows for elevation — the inspected surfaces are shadow-free.
- Do not fill large surfaces with the vivid gradient; it belongs on headline words and stat figures, not paragraph backgrounds.
- Do not use pure black (`#000000`) for headings — ink navy (`#232f4d`) carries headline weight.
- Do not introduce the heavy navy-and-gold chrome of legacy medical institutions.
- Do not swap in a second display font; Pretendard owns every role and weight is the hierarchy lever.
- Do not spread the sky-blue accent onto every element; keep it the single anchor color.
- Do not use sharp square corners on cards; the container radius is 16px.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Every hex below is a live computed value. The role assignment that follows each one — which color is primary, which is trust/action, which is the segmentation device — is a derived editorial implementation inference from the verified surfaces; it is not Dr.diary-authored or a separately published token taxonomy.

Primary and gradient:

- **Sky Blue** (`#3eaeff`): primary brand color and gradient anchor; the leading stop of the horizontal brand sweep and the single most frequent solid accent — the system's trust/action color.
- **Accent Pink** (`#ff5a8c`): the warm middle of the signature gradient.
- **Accent Purple** (`#dc6eff`): the violet-magenta stop, used on emphasis/stat text and the accent bar.
- **Accent Cyan** (`#00c8fa`): the cyan tail on the tri-stop headline gradient.
- **Accent Violet** (`#4970f5`): a secondary blue-violet used sparingly for links and icon accents.

Text and ink:

- **Ink Navy** (`#232f4d`): primary heading color.
- **Pure Black** (`#000000`): body copy and dense reading text on the white canvas.
- **Slate** (`#4f5971`): navigation links and secondary labels.
- **Muted Slate** (`#9197a6`): tertiary text, captions, metadata.
- **Faint Blue-Grey** (`#bdc1ca`): lowest-emphasis labels ("전체보기" more-links), disabled text, placeholders.

Surface and border:

- **Pure White** (`#ffffff`): page background, card surfaces, and text on the gradient/dark hero; also the `on-primary` text color.
- **Surface Grey** (`#f5f8fb`): the cool-grey tinted band for value/feature sections — the primary segmentation device.
- **Hairline** (`#dee0e4`): 1px borders and card outlines — the separation device in a shadow-free system.

Gradient definitions as computed on the homepage:

- Signature emphasis text: `linear-gradient(270deg, #ff5a8c 60%, #dc6eff 75%, #00c8fa 100%)`, applied as a text clip on hero words and stat figures.
- Brand accent bar: `linear-gradient(to right, #3eaeff, #ff5a8c, #dc6eff)`.

The gradient was observed only as clipped text on hero words and stat figures and as a thin horizontal bar. Restating that as a rule — keep it off paragraph fills — is a derived editorial implementation inference from the verified surfaces; it is not a Dr.diary-authored or separately published gradient rule.

### Spacing

- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 40px, 64px
- Nav links pad at 12px 8px; outline CTAs at 12px 16px; section headlines land at the 40px step, which also anchors the vertical rhythm between bands, and 64px is the section step.

### Shape

- Small (8px): outline CTAs and small controls
- Medium (16px): cards and content containers — the workhorse radius
- Pill (100px): careers-site navigation pills, on the brand-owned careers surface
- Full (9999px): gradient emphasis pills and round chips

The scale and radius values above are computed observations. Calling 16px the container workhorse and the 40px step the vertical-rhythm anchor is a derived editorial implementation inference from the verified surfaces; it is not Dr.diary-authored or a separately published spacing or shape specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f8fb` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #dee0e4` border | White card outlines, dividers |
| Overlay (hero) | `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))` scrim | Legibility scrim over hero imagery only |

Live inspection returned `box-shadow: none` across the hero, nav, headings, value cards and press cards, and the one place tonal depth appears is the dark top-scrim gradient over hero photography behind white overlay text. Reading that record as a model — depth and grouping carried by the flat tint and the hairline, the scrim as a functional overlay rather than decorative elevation, and the brand gradient or ink navy reached for instead of a drop shadow when emphasis is needed — is a derived editorial implementation inference from the verified surfaces; it is not Dr.diary-authored or a separately published elevation specification.

### Motion

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, tap feedback, focus |
| `motion-standard` | 220ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal, gradient sweep-in |

Motion rules: motion stays functional and calm. Cards and data views fade in from below at `motion-standard`; the signature gradient may sweep in once on hero reveal at `motion-slow` and then hold static; no bounce and no spring. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the gradient renders static, and the product remains fully functional.

These duration values, the motion rules and the reduced-motion behavior are a derived editorial implementation inference from the verified surfaces; they are not Dr.diary-authored or a separately published motion specification. No easing curve is promoted here: the source names `ease-enter`, `ease-exit` and `ease-standard` but records no evidence for their curve values, and one of the three is byte-identical to a generic non-brand default curve rather than to any measured Dr.diary value. A curve may be promoted only after a per-component computed observation records all five of transition properties, animation name, duration, easing, and reduced-motion behavior.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | Homepage body computes as `pretendard, "pretendard Fallback"` at 16px / 24px line height; headings, nav, cards and CTAs compute in the same family. |
| Fallback stack | `Pretendard Fallback`, then `-apple-system` / `system-ui`. The fallback stack is a fallback, not the brand face. |
| Careers surface | The careers site is a brand-owned subdomain hosted on a third-party page platform; its base text color and generic sans stack are that platform's defaults, so no type token is taken from it. |

### Family

- **Current visible UI family:** Pretendard, described by the source as the de-facto Korean product font optimized for dense hangul legibility.
- No separate display face is used; weight is the hierarchy lever (400 body → 500 titles → 600 headlines).
- Do not substitute a different family for Pretendard on these surfaces, and do not present the fallback stack as the brand face.

### Type roles

| Role | Font | Size | Weight | Line height | Color | Notes |
|---|---|---:|---:|---:|---|---|
| Section Heading | Pretendard | 40px (2.50rem) | 600 | 1.4 | `#232f4d` | H2 section titles |
| Card Title | Pretendard | 18px (1.13rem) | 500 | 1.4 | `#232f4d` | Press/news card headings (H3) |
| Nav Link | Pretendard | 20px (1.25rem) | 400 | 1.2 | `#4f5971` | Top navigation items |
| Button | Pretendard | 18px (1.13rem) | 500 | 1.2 | `#ffffff` | App-store download CTA label |
| More Link | Pretendard | 20px (1.25rem) | 600 | 1.2 | `#bdc1ca` | "전체보기" more-links |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.5 (24px) | `#000000` | Standard reading text |

Type rules: one font with weight as hierarchy; ink navy for headlines against pure black body, a two-tone split; hangul-first body sizing at 16px with a 1.5 line height; and the gradient used as a type treatment on emphasis words and stat figures only. The metrics are computed observations, while reading them as intent — weight chosen as the hierarchy lever, the two-tone chosen for headline weight, the body metric chosen for hangul legibility in a data-dense context — is a derived editorial implementation inference from the verified surfaces; it is not Dr.diary-authored or a separately published typography specification.

### Assets

- Hero photography carries the dark top-scrim gradient described under Elevation.
- Product screenshots and cards carry no shadow at any size, consistent with the flat system.
- No Dr.diary-owned logo file is established by this source; the identity record points at a third-party favicon proxy, which is a lookup service rather than a brand asset, so it stays in the sidecar and is not promoted here as a logo.

<!-- design-md:section components-states -->
## 4. Components & States

### Evidence record

Component values below are live computed observations of the homepage in its default rendering. The interaction states in the state contract further down are the source's declared treatments rather than observations of these two surfaces, and they are marked as such where they appear.

Declared interactive components close Core §4.4 applicability by control meaning rather than by capture completeness: `default` and `focus-visible` apply, other canonical states are judged against what the control actually does, and a state that is meaningful but whose visual treatment is unresolved keeps its applicability and omits only the value. Each applicability judgment and its reason is a derived editorial implementation inference from the verified surfaces; they are not Dr.diary-authored or a separately published state specification. State coverage is not claimed complete.

### App-Store Download CTA (Outline)

- Role: App Store / Google Play download pair, outlined over the dark imagery hero — the site's primary call to action
- Kind: interactive · Primitive: button
- Background: transparent
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Radius: 8px
- Padding: 12px 16px
- Height: 54px
- Font: 18px / 500 / Pretendard

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the hero band |
| hover | applicable | Pointer-web control; treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; treatment omitted |
| disabled | applicable | An action control the system can present in an unavailable form; the source's disabled treatment is a declared rule, not an observation of this control |
| loading | not-applicable | The control hands off to an external store listing; it runs no in-page operation whose progress it would report |
| error | not-applicable | The store destination owns the outcome; this control reports none |
| success | not-applicable | Same role reason as error: the control's completion is a navigation away, not a reported result |

### Top Nav Link

- Role: top navigation item (Platform, Solution, Brand, News, Contact)
- Kind: interactive · Primitive: tab
- Text: `#4f5971`
- Font: 20px / 400 / Pretendard
- Padding: 12px 8px
- Height: 48px
- Active: sky-blue `#3eaeff` text

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the homepage nav |
| hover | applicable | Pointer-web navigation item; treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; treatment omitted |
| disabled | applicable | A navigation item can be presented in an unavailable form while its section is; treatment omitted |
| loading | not-applicable | A navigation item moves between sections; it runs no operation whose progress it would report |
| error | not-applicable | A navigation item reports no operation outcome |
| success | not-applicable | A navigation item reports no operation outcome |

Beyond the canonical seven, this control declares one selection state: `active`, rendered as sky-blue `#3eaeff` text.

### Press / News Card

- Role: press/news tile in the "닥터다이어리 새소식" grid — flat, hairline-outlined, and a full-tile tap target
- Kind: interactive · Primitive: card
- Background: `#ffffff`
- Border: `1px solid #dee0e4`
- Radius: 16px
- Shadow: none
- Height: ~373px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the homepage press grid |
| hover | applicable | Pointer-web tile; treatment omitted |
| focus-visible | applicable | Keyboard-reachable tile; treatment omitted |
| disabled | not-applicable | A published press item is either listed in the grid or absent from it; an unavailable-but-present tile has no role in this grid |
| loading | applicable | The tile renders fetched press content, and the source declares a skeleton treatment at the tile's final 16px-radius dimensions |
| error | not-applicable | A failed fetch is reported by the section-level empty/error line, not by an individual tile |
| success | not-applicable | The tile opens a press item; it reports no completed operation |

### Value / Feature Card (Tinted)

- Role: value/feature card sitting on the cool-grey tinted section band
- Primitive: card
- Background: `#f5f8fb`
- Text: `#232f4d`
- Radius: 16px
- Shadow: none

The source establishes this as a content container and gives it no control role, so no `kind` and no state-applicability map are declared for it. Deciding either way would be an invention.

### More Link

- Role: "전체보기" section more-link, the lowest-emphasis navigational control
- Kind: interactive
- Text: `#bdc1ca`
- Font: 20px / 600 / Pretendard

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the homepage section headers |
| hover | applicable | Pointer-web link; treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; treatment omitted |
| disabled | not-applicable | When there is nothing further to list, the source replaces the section body with an empty-state line and a path back rather than presenting a dimmed link |
| loading | not-applicable | The link navigates to a full list; it runs no in-place operation |
| error | not-applicable | The link reports no operation outcome |
| success | not-applicable | The link reports no operation outcome |

### Gradient Emphasis Pill

- Role: gradient-clipped emphasis text and stat figures carrying the signature `#ff5a8c` → `#dc6eff` → `#00c8fa` sweep
- Kind: non-interactive · Primitive: badge
- Reason: the source describes it as an emphasis text treatment on headline words and stat figures rather than a control, so it declares no state-applicability map
- Text: `#ff5a8c`
- Radius: 9999px

### Declared state contract

The nine rows below are the source's own state section, preserved. They are a derived editorial implementation inference — a state contract written for the Dr.diary product experience, including app surfaces such as glucose logging that lie outside the two inspected marketing surfaces. They are not Dr.diary-authored and not a separately published state specification, and they do not upgrade any per-component applicability above.

| State | Treatment |
|---|---|
| **Empty (no logged data yet)** | White canvas. Single Ink Navy (`#232f4d`) line at body size inviting the first glucose/health entry, with one sky-blue (`#3eaeff`) CTA. No alarming illustration — calm and encouraging. |
| **Empty (no press/results)** | Muted Slate (`#9197a6`) single line explaining nothing to show yet, plus a path back. Honest and low-key. |
| **Loading (data fetch)** | Skeleton cards on `#f5f8fb` tinted surface at final 16px-radius dimensions. Flat pulse, no shadow shimmer — consistent with the shadowless system. |
| **Loading (chart compute)** | Inline progress within the card; previous values stay visible so the trend view is never blank. |
| **Error (data sync failed)** | Inline message in Ink Navy (`#232f4d`) with a plain-language explanation and a retry — never a bare "오류가 발생했습니다". States what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". Warm, non-judgmental tone. |
| **Success (entry saved / goal met)** | Brief inline confirmation in a calm, encouraging tone; may briefly use the gradient accent on a stat figure. No fear or guilt framing, no celebratory emoji clutter. |
| **Skeleton** | `#f5f8fb` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Faint Blue-Grey (`#bdc1ca`) text on a reduced-opacity surface; sky-blue actions fade rather than turn grey to preserve brand read. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Grid and container: a centered single-column hero with a large gradient-clipped headline as the anchor; value/feature content grouped into cards on alternating white (`#ffffff`) and tinted grey (`#f5f8fb`) full-width bands; press items in a horizontal card row/grid, each tile about 373px tall at 16px radius; and the app-store CTAs as an outline pair over the dark imagery hero band.

Whitespace: sections separate by background tint (`#f5f8fb` against `#ffffff`) and hairlines (`#dee0e4`) rather than by shadow or heavy borders, and the vivid gradient stays confined to headline words, stat figures and thin accent bars, leaving the bulk of the page white and slate. Naming that a philosophy — breathing room over density on a marketing surface for a data-heavy health domain, with color energy held in reserve — is a derived editorial implementation inference from the verified surfaces; it is not Dr.diary-authored or a separately published layout specification.

Touch targets on the inspected desktop rendering: nav links sit in a 48px-height row with 12px 8px padding, app-store outline CTAs are 54px high with 12px 16px padding, and press cards are large full-tile tap targets at about 373px.

| Breakpoint | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, headline compresses, cards stack, nav collapses |
| Tablet | 640-1024px | Moderate padding, 2-up cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column value/press bands |

Collapsing strategy: the gradient-clipped hero headline scales down on mobile while weight 600 is maintained; value and press bands go multi-column to stacked single column; tinted and white alternating sections keep their full-width treatment; and the app-store CTA pair stacks vertically on narrow viewports. Image behavior: hero photography carries its dark top-scrim gradient at all sizes for overlay-text legibility, cards and app screenshots carry no shadow at any size, and cards hold the 16px radius across breakpoints.

The breakpoint table and the collapsing strategy are a derived editorial implementation inference from the verified surfaces; they are not Dr.diary-authored or a separately published responsive specification. The measured heights above are desktop-rendering measurements rather than cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The product language is Korean, and the captured copy is the evidence for everything in this section. The readings placed on that copy — that it decodes clinical terms into plain Korean, that it addresses the reader as a capable owner of their own health data rather than a patient being managed, that the voice is warm, clear and empowering, and that the register splits between a mission-framed corporate surface and a friendly careers surface — are a derived editorial implementation inference from the verified surfaces; they are not Dr.diary-authored or a separately published voice guideline.

| Context | Tone |
|---|---|
| Hero / mission headlines | Declarative, mission-framed. "데이터로 선도하는 초개인화 만성질환 케어." Confident, data-forward, never fear-based. |
| Section titles | Plain and value-oriented. "닥터다이어리가 지향하는 가치", "맞춤형 건강관리 서비스". |
| Press / news | Factual, third-person, credibility-building (hospital and public-health-center partnerships). |
| Team / careers voice | Human, first-person, aspirational. "건강 관리가 평생 숙제가 아닌, 쉽고 재밌는 과정". |
| Product / feature copy | Benefit-first; clinical terms (CGM, 혈당) turned into everyday language. |

Voice samples, verbatim from the live surfaces:

- "데이터로 선도하는 초개인화 만성질환 케어" — homepage hero headline, mission-framed.
- "닥터다이어리가 지향하는 가치" — homepage section heading, values framing.
- "건강 관리가 평생 숙제가 아닌, 쉽고 재밌는 과정" — careers/team voice, reframing health as easy and fun.
- "닥터다이어리 | Healthcare & Lifestyle Tech Company" — page title and positioning meta.

Error and empty copy rules, restated from the declared state contract in section 4: an inline sync error carries a plain-language explanation and a retry rather than a bare "오류가 발생했습니다"; a form-validation message describes what is valid instead of just "필수"; and an empty section states plainly that there is nothing to show yet and offers a path back.

Forbidden register: fear-based medical urgency, clinical jargon left undefined, guilt or shame framing around health habits, exclamation-heavy hype, and any tone that treats the user as a passive patient rather than an active owner of their own data.

The error/empty copy rules and the forbidden register are a derived editorial implementation inference from the verified surfaces; they are not Dr.diary-authored or a separately published content specification. The four voice samples above are the exception: they are brand-published strings quoted verbatim.

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

Two evidence domains stand behind this document and they do not merge. The homepage and careers surfaces supply live computed interface values. The company narrative, partnerships and product line supply scope context that the source itself grades as general public knowledge. Neither domain licenses a clinical, efficacy or safety statement, and none appears here. The state contract, the motion tokens, the responsive contract and the principles are derived editorial inference and are labeled where they appear.

### Named gaps

These decisions are unnamed values, not permissions to invent:

- exact easing curve values for the declared `ease-enter`, `ease-exit` and `ease-standard` tokens
- the consumer app, CGM product and B2B corporate-health service interfaces named in the source narrative, which lie outside the two inspected surfaces
