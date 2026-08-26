# Finda Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Finda (핀다) is a Korean loan-comparison platform whose public site is finda.co.kr. The reviewed material records the company as founded in 2015 by 이혜민 (Lee Hye-min, CEO) and co-founders, and states in the same file that those founding details are general public knowledge rather than a quotation from a verified Finda statement; that evidence class is carried here rather than upgraded. The Korean name 핀다, the finda.co.kr site, and the 2026-06-09 live inspection of it are the factual parts.

The founding account that follows is a derived editorial interpretation carried in the reviewed material; it is not Finda-authored or a separately published brand statement, and it is not a finding about any named financial institution or about the Korean lending market. In that account, Korean borrowers had no transparent way to compare loan products across banks, savings banks, and capital companies, they were often steered toward whatever a single institution offered, and Finda reframed lending from an opaque single-vendor process into a transparent comparison marketplace. The same qualification covers the reading that the brand positions itself as the user's advocate.

The present evolution recorded here is what the homepage itself publishes. The hero headline is 금융 선택의 기준을 바꾸다 ("We change the standard of financial choice"), a section heading states 대출 비교부터 신청까지, and the page title claims 1분만에 국내 최다 금융사 대출 비교. Those are Finda's own published lines and are recorded here as published copy: the reviewed material establishes that they appear on the homepage, not that any claim inside them is accurate. A row of dark pill chips opens calculators and tools — 대출이자, 연봉 실수령, DSR, 전월세 비교.

This contract covers the 2026-06-09 live inspection of the public marketing homepage `https://finda.co.kr` only. The color, type, layout, and component values below stay attached to that page. They are not a specification for the Finda app that the header 앱 다운받기 call to action leads to, for the in-app application flow the reviewed material describes, or for `https://blog.finda.co.kr`, which is named as a source with no measured value attached to it.

The following characterization of that interface is a derived editorial implementation inference from the verified surface; it is not Finda-authored or a separately published UI specification. The captured layer reads as a calm, editorial financial product rather than a hard-sell lending site: a pure white canvas layered with a cool grey surface that segments content into airy, breathable zones, deep near-black navy text that gives the page a premium and trustworthy weight without harshness, and a single saturated electric violet held back for the app-download call to action so the eye is trained to treat that one color as "the action." The typographic split — heavy display SUIT over light functional Pretendard — reads as the core tension of the system: bold where it persuades, calm where it informs. What distinguishes the surface from its peers, in the same reading, is restraint with depth, and the result reads as flat, modern, and mobile-first — financial tooling that doesn't look intimidating.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Download the Finda app from the 앱 다운받기 call to action, right-aligned in the header.
- Open a calculator or tool from the hero chip row — 대출이자, 연봉 실수령, DSR, 전월세 비교.
- Follow a 더 보러가기 more-link pill chip to more of the same content.
- Move through the top navigation — 핀다소개, 회사소개, 언론보도, 서비스.
- Reach a footer destination — 이용약관, 개인정보처리방침, 제휴 금융기관.
<!-- design-md:claim-end -->

### Audience

The reviewed material presents three named archetypes and states in the same place that they are fictional archetypes informed by publicly observable segments rather than individual people. No name, age, city, motivation, or borrowing behavior from them is carried forward, and the segment labels used inside that disclaimer are not re-hosted as an audience finding either.

What remains is surface-level: the captured page is Korean-language and consumer-facing, its top navigation separates 핀다소개, 회사소개, 언론보도, and 서비스, and a row of calculator and tool chips sits beneath its hero. No individual persona, demographic, credit profile, borrowing history, or conversion behavior is asserted.

### Distinctive traits

- SUIT ExtraBold (weight 800) carries every display headline.
- Pretendard weight 400 at 14px carries body and UI text.
- A single saturated violet `#4e2eed` is held for the primary app-download CTA.
- Near-black navy `#010a26` is the text color in place of pure black.
- Flat depth: `box-shadow: none` across hero, nav, headings, and tool chips; tinted `#f5f6fa` surfaces and `#dedede` hairlines do the separating.
- Pill-everything geometry — 60px chips, 100px CTA, 9999px badges.
- Negative letter-spacing on headlines: -0.96px at 64px, -0.51px at 34px, -0.42px at 28px.
- A cool-grey neutral ladder for text hierarchy: `#3a415a` → `#65798e` → `#a9b0c9`.

Three readings accompany that list in the reviewed material rather than measurements, and they are a derived editorial implementation inference from the verified surface; they are not Finda-authored or a separately published UI specification: that the SUIT display weight is a "bold, declarative Korean-premium voice", that Pretendard at 14px is "quiet, dense, hangul-optimized" and the de-facto Korean product font, and that the navy reads as "warm, trustworthy". The measured parts are the two families, the sizes, the weights, the tracking values, and the color roles.

### Principles

These 5 items are a derived editorial implementation inference from the verified surface; they are not Finda-authored or a separately published UI specification. Item 1 in particular reads a product stance off the interface: it is not a statement about how Finda actually ranks, sources, or discloses loan offers, and it asserts nothing about the company's lending practice or regulatory position.

1. **Transparency over steering.** Finda exists to compare, not to push one product. *UI implication:* present options side-by-side with clear terms; never visually privilege one lender without disclosure.
2. **Decode, don't intimidate.** Financial jargon (DSR, 연봉 실수령) is surfaced as friendly tools, not gatekeeping. *UI implication:* every financial term gets a plain-language tool or label; the dark tool chips make calculators feel approachable.
3. **One action, one color.** Violet (`#4e2eed`) means "do this." *UI implication:* reserve the saturated violet exclusively for the primary CTA so the next step is never ambiguous.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep the page light and quick to scan.
5. **Bold where it persuades, calm where it informs.** *UI implication:* SUIT ExtraBold for headlines that motivate; Pretendard 400 for content that explains.

### Capture-bound application

These 8 items are a derived editorial implementation inference from the verified surface; they are not Finda-authored or a separately published UI specification.

- Use SUIT ExtraBold (weight 800) for all display headlines.
- Use Pretendard weight 400 at 14px for body and dense UI text.
- Reserve violet (`#4e2eed`) for the primary app-download CTA — keep it the single "action" color.
- Use near-black navy (`#010a26`) for text instead of pure black.
- Separate sections with flat tinted surfaces (`#f5f6fa`) and `#dedede` hairlines, not shadows.
- Use pill geometry — 60px chips, 100px CTA, full-round badges.
- Apply tight negative tracking on headlines (-0.96px at 64px).
- Use the dark chip (`#15161b`) for secondary tool and calculator entry buttons.

### Avoid

These boundary rules are read off the captured surface and are a derived editorial implementation inference from it; they are not Finda-authored or a separately published UI specification.

- Do not use drop shadows for elevation — the captured system is flat and shadow-free.
- Do not spread violet across many elements; it dilutes the single-action signal.
- Do not use pure black (`#000000`) for body text; the body ink is near-black navy `#010a26`.
- Do not use sharp or square corners on interactive elements — everything captured is a pill.
- Do not mix in a second accent color; violet is the only saturated hue recorded.
- Do not set headlines in a light weight; display is always ExtraBold (800).
- Do not use Pretendard for big headlines; SUIT owns display.
- Do not use positive letter-spacing at display sizes; the captured tracking is negative.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Finda Violet / Primary** (`#4e2eed`): brand color and CTA background — the saturated electric violet on the app-download button, recorded as the system's single "action" color, and the active color on a top navigation item.
- **Violet Alt** (`#5d4cf2`): secondary brand violet for tinted highlights, badges, and emphasis surfaces; a slightly lighter, softer companion to the primary.
- **Ink Navy** (`#010a26`): primary text and heading color; a very dark blue-black used in place of pure black.
- **Pure Black** (`#000000`): recorded as occasional maximum-contrast heading text, with the hero H1 and the feature H3 named as the examples.
- **Canvas / Pure White** (`#ffffff`): page background and white card surfaces.
- **On-Primary** (`#ffffff`): text on violet and on dark surfaces. The same value as the canvas, kept as its own role rather than merged into it.
- **Surface Grey** (`#f5f6fa`): cool-grey tinted surface for content cards and segmented sections.
- **Surface Alt** (`#f6f6f6`): a warmer secondary grey surface for alternating blocks.
- **Hairline** (`#dedede`): thin borders, dividers, and card outlines.
- **Dark Chip** (`#15161b`): near-black background for the dark calculator and tool pill chips on the hero.
- **Body Slate** (`#3a415a`): secondary body copy and descriptions.
- **Muted Slate** (`#65798e`): tertiary text, captions, metadata.
- **Muted Alt** (`#737a94`): alternate muted slate for fine print.
- **Faint Blue-Grey** (`#a9b0c9`): disabled text, placeholder, lowest-emphasis labels.

### Evidence-domain boundary

The measured surface is the public marketing homepage at finda.co.kr, inspected 2026-06-09. Every color, type, spacing, radius, and component value in this contract stays attached to that page.

Finda-published financial language — the loan-comparison positioning, the tool and calculator labels 대출이자 / 연봉 실수령 / DSR / 전월세 비교, the 대출 비교부터 신청까지 section heading, and the 1분만에 국내 최다 금융사 대출 비교 page-title claim — is published copy, recorded as copy. No color, spacing, radius, type, or component value here describes a loan product, an interest rate, a DSR or income figure, an approval or screening condition, or a term of service, and none may be read as evidence about one. Recording that a line appears on the homepage is a record of the line, not a finding that the claim inside it holds.

The header 앱 다운받기 CTA was measured on that page as a button — background, text color, radius, font, and height — and nothing it opens was measured. The same holds for the four hero chips: the chip is the measured object, not the calculator behind it.

### Spacing

Base unit ~4px, with the recorded scale `xs` 4px, `sm` 8px, `md` 12px, `base` 16px, `lg` 20px, `xl` 29px, `xxl` 48px, and `section` 64px.

One placement carries a measurement: the dark tool chips land at 29px horizontal padding, recorded as measured. Reading that padding as a generous, tappable hit area is a derived editorial implementation inference from the verified surface; it is not Finda-authored or a separately published layout specification.

### Shape

- `sm` 8px — inner elements and small containers.
- `md` 16px — cards and content containers, recorded as the workhorse radius.
- `lg` 60px — pill chips and tool buttons.
- `full` — the primary CTA at 100px and badges at 9999px.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f6fa` background shift | Card and section separation without elevation |
| Hairline (Level 2) | `1px solid #dedede` border | White card outlines, dividers |

The live inspection found `box-shadow: none` across the hero, nav, headings, and tool chips, and the token record carries `none` as the only shadow value. Depth and grouping come from flat tinted surfaces and thin hairlines instead.

Reading that as a deliberate modern-flat choice — that it keeps the financial UI feeling clean, fast, and mobile-native, that it avoids the heavy "card stack" look of legacy banking apps, and that the system reaches for color or the dark chip rather than elevation when emphasis is needed — is a derived editorial implementation inference from the verified surface; it is not Finda-authored or a separately published UI specification.

### Motion

Duration scale as recorded:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles as recorded, with the curve values omitted:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; no Finda-published source for the curve) | Arriving — sheets, cards, chips |
| `ease-exit` | omitted (unattributed cubic-bezier; no Finda-published source for the curve) | Dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; no Finda-published source for the curve) | Two-way transitions |

Reduced motion: under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

The duration values and their assignments, the reduced-motion rule, and the motion characterization — motion that is functional and quiet, pill chips answering press with a subtle scale or opacity shift, comparison results fading in from below at `motion-standard / ease-enter`, and no bounce or spring because a loan-comparison product signals steadiness rather than playfulness — are a derived editorial implementation inference from the verified surface; they are not Finda-authored or a separately published motion specification. The inspection measured computed color, type, geometry, and shadow, and holds no motion measurement. Promoting an exact easing curve to a Finda motion token requires a per-component computed observation of the transition properties, the animation name, the duration, the easing, and the reduced-motion behavior; a single named curve or duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No reviewed first-party Finda source publishes a typography token for the captured page. |
| Live computed surface-use | The 2026-06-09 inspection computed the document default as Pretendard at 14px / weight 400 in `#010a26`, and computed SUIT on the hero H1, the section H2, the sub-section H3, the header nav, the button labels, and the footer links, with the sizes, weights, line heights, and tracking in the role table below. |
| Declared fallback | The two families are recorded with their fallbacks: `SUIT` with `SUIT Fallback`, `Pretendard` with `Pretendard Fallback`. |
| Official distributed asset | No Finda-distributed type family is established in this pass. |
| Ownership boundary | Both families are computed on the captured page. Neither is established here as a Finda-owned or Finda-licensed face, and no license text is recorded for either. |

### Family

- **Display:** `SUIT` (with `SUIT Fallback`) — headlines, nav, and button labels; ExtraBold (800) at display sizes.
- **Body:** `Pretendard` (with `Pretendard Fallback`) — the document default, body copy and dense UI text at weight 400.
- Do not substitute either family for an unobserved family on another surface, and do not present a fallback as a Finda brand face.

The reading that SUIT is the persuasive and branding voice while Pretendard is the functional and reading voice, that the two never swap roles, and that the weight contrast is the system's primary hierarchy signal, is a derived editorial implementation inference from the verified surface; it is not Finda-authored or a separately published typography specification. The measured parts are the two families and the per-role sizes, weights, line heights, and tracking.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero | SUIT | 64px (4.00rem) | 800 | 1.31 (84px) | -0.96px | Hero headline, ExtraBold |
| Section Heading | SUIT | 34px (2.13rem) | 800 | 1.41 (48px) | -0.51px | Section titles; the component restatement gives the title color as `#010a26` |
| Sub-section | SUIT | 28px (1.75rem) | 800 | 1.43 (40px) | -0.42px | Card / feature heads |
| Nav Link | SUIT | 14px (0.88rem) | 400 | 1.50 (21px) | normal | Top navigation items |
| Button | SUIT | 14px (0.88rem) | 400 | 1.50 (21px) | normal | Dark pill chip labels |
| Button Small | SUIT | 12px (0.75rem) | 400 | 1.50 (18px) | normal | App-download CTA label |
| Body | Pretendard | 14px (0.88rem) | 400 | 1.50 (21px) | normal | Standard reading text |

Tracking compresses as size grows — -0.96px at 64px, -0.51px at 34px, -0.42px at 28px — while the 14px and 12px roles stay at normal tracking. Those five values are measured; the reading of them as a deliberate compression rule is a derived editorial implementation inference from the verified surface and is not Finda-authored or a separately published typography specification.

Heading text color is recorded two ways in the reviewed material. The color-role list assigns `#000000` to occasional maximum-contrast heading text and names the hero H1 and the feature H3 as its examples, while the same material's observation note and its component restatements give the hero headline and the 28px card title as `#010a26`. Both values are preserved; neither is selected here.

### Assets

- Catalog logo entry: type `favicon`, slug `https://www.google.com/s2/favicons?domain=finda.co.kr&sz=128`. That is a third-party favicon proxy rather than a captured first-party Finda mark, and it is recorded as the logo entry on those terms.
- The reviewed material establishes no other first-party Finda asset for the captured page, and none is substituted here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The 2026-06-09 inspection recorded computed styles on one desktop route — the public marketing homepage — and harvested the eight components below. Its observation list holds default appearances only, plus one named active appearance on the top navigation. It holds no interaction event and no hover, press, or focus treatment.

A declared interactive component still closes Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A missing observation omits the visual treatment only; it is never a `not-applicable` reason. Where a canonical state carries no meaning for a control's role, it is marked `not-applicable` with that semantic reason. State coverage is not complete here.

### Source state contract

The state contract as recorded, preserved in full. None of the nine rows carries a verification marker and no observation in the record backs one; they are a derived editorial implementation inference from the verified surface, describing how those states would be built in this system. They are not Finda-authored, not observed, and not a separately published state specification. The financial situations they name — a comparison returning nothing, a comparison failing, an application being submitted — are editorial scenarios written into this contract, not statements about Finda's actual comparison, screening, or application behavior.

| State | Treatment |
|---|---|
| **Empty (no comparison results)** | White canvas. Single Ink Navy (`#010a26`) line at body size explaining no matching products, with one violet CTA to adjust criteria. No illustration clutter. |
| **Empty (saved list, none yet)** | Muted Slate (`#65798e`) single line: nothing saved yet, plus a path back to comparison. Honest, calm. |
| **Loading (results fetch)** | Skeleton rows on `#f5f6fa` tinted surface at final card dimensions, 16px radius. No shadow shimmer — flat pulse consistent with the shadowless system. |
| **Loading (calculator compute)** | Inline progress within the tool chip; previous values stay visible. |
| **Error (comparison failed)** | Inline message in Ink Navy with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone — states what to do next. |
| **Error (form validation)** | Field-level message below the input in a warm error tone; describes what's valid, not just "필수". |
| **Success (application submitted)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f5f6fa` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Faint Blue-Grey (`#a9b0c9`) text on reduced-opacity surface; violet actions fade rather than turn grey to preserve brand read. |

### App-Download CTA — 앱 다운받기

- Role: header app-download call to action, right-aligned in the top navigation; recorded as the system's single primary action
- Kind: interactive
- Type: button
- Background: `#4e2eed`
- Text: `#ffffff`
- Radius: 100px — a full pill
- Height: 33px
- Font: 12px / 400 / SUIT
- Label: 앱 다운받기
- Observed: default appearance on the captured homepage

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured in the homepage header |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | The state contract names a disabled treatment for violet actions: they fade rather than turn grey |
| loading | not-applicable | The control hands off to the app download; it runs no operation in place that could be pending |
| error | not-applicable | Nothing resolves on this control — it hands off — so no failure outcome can render on it |
| success | not-applicable | Handing off to a download is not an action-outcome confirmation on the control |

### Dark Tool Chip

- Role: calculator and tool entry chips on the hero
- Kind: interactive
- Type: button
- Background: `#15161b`
- Text: `#010a26`
- Radius: 60px
- Padding: 14px 29px
- Height: 48px
- Font: 14px / 400 / SUIT
- Labels: 대출이자, 연봉 실수령, DSR, 전월세 비교
- Observed: default appearance on the captured homepage

The observation note for these chips records the background, the radius, and the padding; the `#010a26` text value comes from the component record rather than from that note.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the hero chip row |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | The state contract's disabled treatment covers reduced-opacity surfaces and faint text |
| loading | applicable | The state contract puts calculator compute inside this control — inline progress within the tool chip, previous values staying visible |
| error | applicable | The same compute runs in place and can fail in place; visual treatment omitted |
| success | not-applicable | A calculator's outcome is the computed value it displays, not an action-outcome confirmation on the chip |

### More Link Pill — 더 보러가기

- Role: more-link pill chip
- Kind: interactive
- Type: button
- Background: `#15161b`
- Text: `#010a26`
- Radius: 60px
- Padding: 0px 20px
- Height: 48px
- Font: 14px / 400 / SUIT
- Label: 더 보러가기

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the more-link pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | The state contract's disabled treatment covers reduced-opacity surfaces and faint text |
| loading | not-applicable | The control opens more of the same content; it runs no operation in place that could be pending |
| error | not-applicable | Nothing resolves on this control, so no failure outcome can render on it |
| success | not-applicable | Following a more-link is a navigation action, not an action-outcome confirmation |

### Top Navigation Link

- Role: top horizontal navigation item
- Kind: interactive
- Type: tab
- Text: `#010a26`
- Font: 14px / 400 / SUIT
- Background: `#ffffff` header surface at 56px header height
- Active: violet `#4e2eed` text on the active item
- Labels: 핀다소개, 회사소개, 언론보도, 서비스
- Observed: default appearance, plus the named active appearance

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured in the 56px header |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | A navigation destination can be unavailable; visual treatment omitted |
| loading | not-applicable | A nav item selects a destination; the item itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional named state: active, `#4e2eed` text. That is a named appearance rather than an observed transition, and it is not `focus-visible` evidence.

### Footer Link

- Role: footer navigation link
- Kind: interactive
- Type: listItem
- Text: `#010a26`
- Font: 14px / 400 / SUIT
- Labels: 이용약관, 개인정보처리방침, 제휴 금융기관

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured in the footer |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | A footer destination can be unavailable; visual treatment omitted |
| loading | not-applicable | The link hands off to its destination; it runs no operation in place |
| error | not-applicable | Nothing resolves on this link, so no failure outcome can render on it |
| success | not-applicable | Link meaning is the destination, not an action-outcome confirmation |

### Tinted Surface Card

- Role: content card sitting on the cool-grey surface
- Type: card
- Kind: omitted. The reviewed material records this as a content container with no interactive-kind evidence, so no Core §4.4 state-applicability map is declared and it is not recast as a control.
- Background: `#f5f6fa`
- Text: `#010a26`
- Radius: 16px

### White Feature Card

- Role: white feature card with a hairline outline and no shadow
- Type: card
- Kind: omitted, on the same grounds as the tinted card — a container with no interactive-kind evidence.
- Background: `#ffffff`
- Text: `#010a26`
- Body text inside the card: `#3a415a`
- Border: `1px solid #dedede`
- Radius: 16px

### Violet Highlight Pill

- Role: emphasis tag and highlight pill
- Type: badge
- Kind: non-interactive — the reviewed material records it as an emphasis tag rather than a control, so it declares no state-applicability map.
- Background: `#5d4cf2`
- Text: `#ffffff`
- Radius: 9999px, full round
- Font: 12px / 400 / SUIT

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and grid

Base unit ~4px with the scale 4px, 8px, 12px, 16px, 20px, 29px, 48px, 64px. The captured page is a centered single-column hero anchored by the 64px SUIT headline, with the tool and calculator chips arranged in a horizontal scrolling or wrapping pill row beneath it. Feature sections alternate between white `#ffffff` and tinted grey `#f5f6fa` full-width bands, and cards use the 16px radius to group related calculators and services.

### Radius scale in layout

- Small 8px: inner elements, small containers
- Medium 16px: cards and content containers — the workhorse
- Large 60px: pill chips, tool buttons
- Full: 100px on the primary CTA, 9999px on badges

### Whitespace

The recorded whitespace account: breathing room over density on a data-heavy financial product, generous vertical rhythm between sections, flat segmentation by background tint and hairline rather than by shadow or border weight, and a repeated 60px-radius chip creating a consistent horizontal cadence across tool entry points. That account is a derived editorial implementation inference from the verified surface; it is not Finda-authored or a separately published layout specification. The measured parts are the 29px chip padding, the 60px and 16px radii, and the two band colors.

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, chips wrap or scroll |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1366px | Full layout, centered hero, multi-column feature bands |

### Touch targets and collapsing

- Dark tool chips at 48px height with 29px horizontal padding.
- App-download CTA at 33px height, full pill.
- Nav links spaced for touch within the 56px header.
- Hero: the 64px SUIT headline scales down on mobile, weight 800 maintained.
- Tool chip row: horizontal wrap or scroll on narrow viewports.
- Feature bands: multi-column to stacked single column.
- Tinted and white alternating sections keep their full-width treatment.
- App screenshots and illustrations carry no shadow at any size; cards keep the 16px radius across breakpoints.

The inspection covers computed styles on one desktop route. The breakpoint table, the collapsing strategy, the image behavior, and the tap-comfort reading of the 48px, 33px, and 56px heights are a derived editorial implementation inference from the verified surface; they are not Finda-authored or a separately published responsive specification. Those three heights are desktop measurements of the named elements, not accessibility-target rules.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Brand-published lines

Three lines are marked verbatim from the live homepage, 2026-06-09:

- 금융 선택의 기준을 바꾸다 — hero headline. (Rendering given alongside it in the reviewed material: "We change the standard of financial choice.")
- 대출 비교부터 신청까지 — section heading.
- 1분만에 국내 최다 금융사 대출 비교 — page-title meta.

The full document title in the observation note is 대출비교플랫폼, 핀다 | 1분만에 국내 최다 금융사 대출 비교.

The role notes beside those three lines — mission-framed, an end-to-end promise, a speed-and-scope claim — are a derived editorial implementation inference from the verified surface; they are not Finda-authored or a separately published voice specification. The published strings and their live markers are the measured parts. Recording the page title is a record that the line is published, not a finding that the scope or the one-minute claim inside it holds.

Labels recorded on the captured page as control, navigation, section, and footer names, then two strings the reviewed material records without a page position attached to them:

- Tool and calculator chips 대출이자, 연봉 실수령, DSR, 전월세 비교.
- Control labels 앱 다운받기 and 더 보러가기.
- Top navigation 핀다소개, 회사소개, 언론보도, 서비스.
- Footer navigation 이용약관, 개인정보처리방침, 제휴 금융기관.
- 악성 앱 차단, recorded once as the trust-and-security example in the tone table.
- The end-to-end phrase 비교부터 신청까지 and the category term 대출 비교, both quoted inside the reviewed material's narrative.

Two further strings live inside the state contract rather than on the captured page: 오류가 발생했습니다, named there as the generic error message the contract rules out on its own, and 필수, named there as the bare validation word the contract rules out on its own.

The English renderings above sit beside the published strings and never replace them: the published copy is Korean.

### Voice reading

The characterization below and the five context rows are a derived editorial implementation inference from the verified surface; they are not Finda-authored or a separately published voice specification.

Finda's voice reads as clear, reassuring, and empowering — a financial guide that simplifies a stressful, jargon-heavy domain of loans, interest rates, and credit into confident plain Korean. The hero line sets the register: declarative, mission-framed, never gimmicky. Copy treats the user as a smart person who deserves comparison and transparency, not a target to be upsold.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, mission-framed. 금융 선택의 기준을 바꾸다. Confident, not hype. |
| Tool/calculator labels | Plain and functional. 대출이자, 연봉 실수령, DSR, 전월세 비교. |
| CTAs | Direct, low-pressure. 앱 다운받기, 더 보러가기. |
| Feature descriptions | Benefit-first, jargon decoded. Explains the financial term in user language. |
| Trust / security copy | Calm, concrete. 악성 앱 차단 — states the protection plainly. |

### Forbidden register

The same editorial reading names a forbidden register: aggressive sales urgency, fear-based lending pitches, undefined financial jargon left unexplained, and exclamation-heavy hype. This is an authoring rule for writing in this style. It is not a Finda-published policy and it asserts nothing about the company's actual products, lending practice, marketing conduct, or compliance position.

### Locale

The captured page and every published line above are Korean. The type system is Korean-first: SUIT for display, Pretendard as the document default, body at 14px / 400 / 1.50. The reading of that size as a deliberate 14px — generous for hangul legibility, dense enough for information-rich financial layouts — is a derived editorial implementation inference from the verified surface; it is not Finda-authored or a separately published locale specification. The measured part is the 14px body role. Keep the published strings in Korean rather than substituting a translation for them.

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
- the hover appearance of any control — the duration table names hover timing without naming a treatment
- the heading text color, where the reviewed material carries `#000000` for maximum-contrast hero H1 and feature H3 and `#010a26` for those same two headings elsewhere
- the error color behind the warm error tone the state contract names for field-level validation
- the placement behind `#737a94`, recorded as the fine-print muted slate with a role and no captured element
- the placement behind `#f6f6f6`, recorded as the alternating secondary surface with a role and no captured element
- an observed appearance for any of the nine state rows — the state contract describes them and the observation record holds default appearances only
- measured evidence behind the three breakpoints and the collapsing strategy — the inspection covers one desktop route
- color, type, and component values for the Finda app the header 앱 다운받기 CTA leads to, and for the in-app application flow the reviewed material describes
- any value on `https://blog.finda.co.kr`, which is named as a source with no measured value attached to it
