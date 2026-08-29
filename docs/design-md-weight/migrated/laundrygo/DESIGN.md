# LaundryGo Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

LaundryGo (런드리고) is the flagship contactless mobile-laundry service of 의식주컴퍼니 (Uisikju Company). This contract covers two current first-party web surfaces inspected live on 2026-06-11: the corporate brand site `https://www.laundrygo.com` (home / Vision / Business / Growth) and the B2B surface `https://www.laundrygo.com/business/` (런드리고 호텔&비즈니스). Color, type, geometry, and component values stay attached to those two pages. The source's §14 state contract is preserved in Components & States as a system-level statement, not as a live capture of an order surface.

The captured interface layer is a white canvas (`#ffffff`) broken by full-bleed dark photographic hero bands, where large Pretendard headlines sit in white (`#ffffff`) over imagery of folded laundry and logistics. Text on light sections is near-black (`#000000`) softening through a cool-grey ladder (`#4b4b4b` → `#60646a` → `#888c8e` → `#b5bcc0`). The single saturated brand color recorded on the inspected pages is mint green (`#0ac290`), used for green section eyebrow labels (Vision, Our Business, Growth, Quality, Infra) and for primary call-to-action buttons. Web body and headline text compute as Pretendard; a proprietary display face, "런드리고딕체," is referenced for logotype and brand voice. Geometry is gently rounded: 10px on standard buttons and inputs, 14px on emphasis CTAs, ~20px on service cards. A secondary blue (`#0170b9`) appears in data/stat text. Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and standard buttons; the one recorded drop shadow, `rgba(0,0,0,0.15) 0px 14px 29px 0px`, sits on the largest green emphasis CTAs.

Attaching color, type, geometry, and component values to those two pages, keeping brand narrative separate from the interface evidence, readings of that layer as a calm, infrastructure-grade, or "trustworthy rather than hard-sell" surface, and the reading that the site positions laundry as a logistics platform rather than a chore, are a derived editorial implementation inference from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification. The source's own closing note marks interpretive claims of this kind — it names "laundry is infrastructure" and "trust over attention" — as editorial readings connecting observed design and stated rebrand intent to positioning, not as company statements.

Brand narrative recorded by the source, kept separate from the interface evidence above. The evidence classes inside it differ, and the source separates them.

- Live-verified copy on the two inspected pages includes the corporate hero "의식주 생활의 혁신을 만들어 갑니다.", the Vision statement "세탁 산업의 혁신을 시작으로 의식주 산업 전반의 문제를 찾고 해결합니다.", and the B2B hero "국내 최대 호텔 전문 세탁 서비스, 런드리고 호텔&비즈니스". The document title on the corporate site is "런드리고 - 모바일 세탁 서비스".
- Publicly documented company facts the source corroborates from third-party coverage rather than from a first-party page quoted in this capture: 의식주컴퍼니 founded in 2018 by 조성우 (Cho Sung-woo, ex-배민프레시 대표), a former corporate-comms professional who had previously led 배민프레시 (Baemin Fresh, the early-morning grocery-delivery service of 우아한형제들); LaundryGo launched in 2019 as a contactless mobile-laundry service (a user places garments in a "런드렛" (Laundrette) collection bin before 10pm, and cleaned laundry is returned by noon the next day). The 2022 rebrand (third anniversary) down-toned a previously neon green to a softer green, paired it with a warm-grey ("웜그레이") sub-color, combined the alphabet G with an arrow pictogram in the lettermark, and developed "런드리고딕체". The values the system encodes: convenient, considerate service; reliability proven through laundry quality; and practicality. These facts supply product context; they do not by themselves supply interface tokens.
- Mission and vision lines the source records as widely reported public statements of the company or founder, not as quotations from a verified first-party page in this capture: "세탁이 혁신되면 주거 공간이 혁신될 것" (the source's English: "innovating laundry will in turn innovate living space"), and "삶을 단순하고 윤택하게" (the source's English: "make the lives of busy modern people simpler and more abundant"). The company name encodes 의(clothing)·식(food)·주(housing). The source records that the change to clothing-food-housing life begins with laundry. The vision extends globally — laundry being a universal problem, LaundryGo aims to grow into a global service.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not LaundryGo-authored or a separately published UI specification. Each names the source passage it rests on.

- Read the company and service story on the corporate site — the source records the hero "의식주 생활의 혁신을 만들어 갑니다." and the Vision statement "세탁 산업의 혁신을 시작으로 의식주 산업 전반의 문제를 찾고 해결합니다."
- Scan the named service offerings and growth metrics — the source records a row of service cards (런드리고 / 런드리24 / 호텔&비즈니스 / EPC) and a dark-band stat row (회원 수, 누적 세탁량, 누적 주문수, 누적 투자액).
- Inquire or apply — the source records the CTAs "채용공고 보러가기", "문의하기", "B2B·대량세탁 문의", and "상담 문의하기".
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its §13 figures as fictional archetypes rather than real people, so those records are dropped rather than promoted, and no demographic segment list is carried into this document or its sidecar. What the inspected surfaces independently establish is three stakeholder groups: people addressed by the consumer services named on the corporate site (런드리고, 런드리24), hotel and business partners addressed by 호텔&비즈니스 and the B2B inquiry CTAs, and recruits addressed by "채용공고 보러가기". Dropping those fictional archetypes rather than promoting them, carrying no demographic segment list, and reading the live surfaces as those three groups are a derived editorial implementation inference from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification.

### Distinctive traits

These eight traits, and the readings carried inside them — green rationed to eyebrows and CTAs, Pretendard versus "런드리고딕체" as a split of jobs, near-flat depth, cool-grey hierarchy — are a derived editorial implementation inference from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification. Each names the values it rests on.

- Down-toned mint green (`#0ac290`) reserved for green section eyebrow labels and primary CTAs — the system's single recorded "action/brand" color
- Pretendard for all web body and headline text; "런드리고딕체" proprietary display typeface for logotype/brand voice
- Large declarative headlines — 62px/600 hero, 45px/600 section, 35px/700 statement
- Near-black (`#000000`) text on white sections; white (`#ffffff`) headlines on dark photographic hero bands
- Near-flat depth: alternating white/dark bands + `#dfdfdf` hairlines + `#ecebdc` beige surface; one soft drop shadow only on big CTAs
- Gently rounded geometry — 10px buttons, 14px emphasis CTAs, ~20px cards
- Cool-grey text ladder (`#4b4b4b` → `#60646a` → `#888c8e` → `#b5bcc0`) for hierarchy
- Blue accent (`#0170b9`) for data/stat text

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each, and its closing note marks readings of this kind — "laundry is infrastructure", "trust over attention" — as editorial.

1. **Laundry is infrastructure.** LaundryGo frames a chore as a logistics platform — collection bins, smart factories, route delivery. *UI implication:* present the service with infrastructure-grade confidence (large declarative headlines, scale metrics), not consumer-app cuteness.
2. **Trust over attention.** The 2022 rebrand traded neon green for a down-toned green to read as reliable. *UI implication:* keep the green calm and reserved; never let color shout louder than the proof.
3. **One action, one color.** Green (`#0ac290`) means "brand / do this." *UI implication:* reserve the green for eyebrow labels and primary CTAs so the next step and the brand are always legible.
4. **Considerate simplicity.** The promise is a chore removed from the user's day. *UI implication:* copy states concrete mechanisms (drop by 10pm, back by noon) plainly; the interface stays airy and uncluttered.
5. **Bold where it persuades, quiet where it informs.** *UI implication:* large Pretendard 600–700 display for mission/value statements; calm Pretendard 400 body for explanation.

### Application rules

Application rules the source states as its Do list, kept as written. These eight rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification.

- Use the down-toned green (`#0ac290`) for primary CTAs and section eyebrow labels — it is the single brand/action color
- Use Pretendard for all web headlines and body; reserve "런드리고딕체" for logotype/brand voice
- Set headlines large and bold — 62px/600 hero, 45px/600 section, 35px/700 statements
- Put white headlines on dark photographic hero bands; near-black (`#000000`) text on white sections
- Separate sections with alternating white/dark bands, the `#ecebdc` beige surface, and `#dfdfdf` hairlines — not heavy shadows
- Use the green 18px/700 eyebrow label above section heads (Vision, Growth, Quality)
- Keep geometry gently rounded — 10px buttons, 14px emphasis CTAs, ~20px cards
- Reserve the single soft drop shadow for the largest emphasis CTAs only

### Avoid

The source states these as its Don't list; they are kept as its rules, reasons included. These seven prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification.

- Do not spread the green across many elements — it dilutes the single-action/brand signal
- Do not use neon green — the rebrand deliberately down-toned it for trustworthiness
- Do not set body copy in the proprietary display typeface — Pretendard owns functional text
- Do not use heavy drop shadows on cards or standard buttons — the system is near-flat
- Do not use the accent blue (`#0170b9`) as a CTA color — green is the only action color
- Do not use small, timid headlines — display is large and declarative
- Do not add a second saturated accent hue — green is the only brand color, blue is a quiet data accent

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Keeping canvas and on-primary as two roles that share the same white, keeping Ink as both the Primary Pure Black row and the Text Hierarchy Ink row, keeping Hairline unmerged from the muted-button fill, keeping the primary green unmerged from eyebrow text, and naming those roles here rather than as published LaundryGo role names, are derived editorial implementation inferences from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification.

Primary and action:

| Role | Value | Recorded use |
|---|---|---|
| LaundryGo Green (primary) | `#0ac290` | CTA button backgrounds and green section eyebrow labels (Vision, Our Business, Growth, Quality, Infra). The system's single recorded action color. |
| Pure Black (ink) | `#000000` | Primary text and heading color on white sections; nav. Used directly (not a softened navy) for maximum-contrast headlines and body. |
| Pure White (canvas / on-primary) | `#ffffff` | Page background, card surfaces, and headline/CTA text on dark hero bands. |

Accent:

| Role | Value | Recorded use |
|---|---|---|
| Accent Blue | `#0170b9` | Data/stat and select link text — a secondary accent that the source keeps from competing as a CTA color. |

Neutral and surface:

| Role | Value | Recorded use |
|---|---|---|
| Surface Grey | `#f8f9fa` | Faint cool-grey tinted surface for alternating content blocks. |
| Beige | `#ecebdc` | Warm-grey/beige surface — the documented rebrand "웜그레이" sub-color for warmer section backgrounds. |
| Hairline | `#dfdfdf` | Thin borders, dividers, and the muted/neutral button background. |
| Near-Black | `#181b1e` | Deep near-black background for occasional dark chrome and footer-adjacent blocks. |

Text hierarchy:

| Role | Value | Recorded use |
|---|---|---|
| Ink | `#000000` | Primary text, headings, nav. |
| Ink Soft | `#3a3a3a` | Softer heading/label tone for secondary headings. |
| Body Slate | `#4b4b4b` | Secondary body copy and descriptions. |
| Muted Slate | `#60646a` | Tertiary text and muted button label. |
| Muted Alt | `#888c8e` | Captions, fine print, company-info lines. |
| Faint Blue-Grey | `#b5bcc0` | Lowest-emphasis labels, disabled/placeholder text. |

The 2022-rebrand note that `#0ac290` is a down-toned mint chosen to signal trust, and that `#ecebdc` is the documented "웜그레이" sub-color, is the source's attribution of those values to published rebrand coverage, not a live-computed reason.

### Spacing

Token scale (unitless YAML): `xs: 4`, `sm: 8`, `md: 15`, `base: 16`, `lg: 30`, `xl: 40`, `xxl: 72`, `section: 96`. Captured px the source itself writes with a unit: 8px, 15px, 16px, 30px, 40px, and 72px. The source names a base unit of ~8px, frequent 4/8/15/16/30/40/72px steps, generous large gaps (72px+) between full-width bands, and CTA horizontal padding at 30–40px. Keeping the YAML scale unitless beside the source's own captured-px list, and not treating a spacing step as muted-button padding or as a type size, is a derived editorial implementation inference from the verified surfaces; it is not LaundryGo-authored or a separately published UI specification.

### Shape

- Small (10px): standard buttons, inputs
- Medium (14px): emphasis CTAs
- Large (~20px): service cards, content containers
- Full (9999px): pills where used

10px / 14px / ~20px are local component defaults recorded on the two web surfaces; reading them as a local scale rather than a claim that every LaundryGo surface shares it is a derived editorial implementation inference from the verified surfaces; it is not LaundryGo-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f8f9fa` / `#ecebdc` background shift | Section separation without elevation |
| Hairline (Level 2) | `1px solid #dfdfdf` border | Card outlines, dividers, muted button fill |
| Drop (Level 3) | `rgba(0,0,0,0.15) 0px 14px 29px 0px` | Largest emphasis CTAs only |

Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and standard buttons. The one recorded exception is the single soft drop reserved for the largest green emphasis CTAs. Reading the remaining separation — alternating white/dark photographic bands, the warm-grey `#ecebdc` surface, and thin `#dfdfdf` hairlines — as a near-flat system that reaches for green or a dark band rather than decorative elevation is a derived editorial implementation inference from the verified surfaces; it is not LaundryGo-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims (§1–§9) to a live inspection of computed color, type, spacing, radius, border, and shadow on the two web surfaces. The motion contract below sits outside that attribution: it is a system-level statement rather than a set of per-component measured values. The durations, easing roles, the omission of the three curve values, motion rules, and signature-motion note below are therefore a derived editorial implementation inference from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level band transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to LaundryGo evidence, so the curves are omitted and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — sections, cards, CTAs |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and steady. Section content fades in from below at `motion-standard / ease-enter` as photographic bands enter the viewport; CTAs respond to press with a subtle scale/opacity shift.
- The brand's one signature playful motion is the logo's G-arrow rotating like a washing drum in-app. On the marketing surfaces motion stays restrained — no bounce or spring.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Resolving the proprietary display face as official-product-use history rather than a live webfont token, resolving Pretendard as live computed surface-use, recording no LaundryGo-hosted FontFace files for that proprietary face, and placing a live specimen of it plus the in-app G-arrow rotation outside these captures, are derived editorial implementation inferences from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The 2022 rebrand coverage the source cites describes "런드리고딕체" as a proprietary display typeface connected to the logotype. That is brand-type history, not a live webfont token for the two inspected pages. |
| Live computed surface-use | Both inspected pages compute visible web body, headline, nav, and button text as Pretendard (with `sans-serif` fallback). Body is 16px / 400 / line-height 22.4px. |
| FontFaceSet and source corroboration | The source records Pretendard as the document default on the web surface. It does not record LaundryGo-hosted FontFace files for "런드리고딕체" on these pages. |
| Official distributed asset | No LaundryGo-exclusive distributed type family was verified as loadable on the inspected pages. |
| Declared-only | "런드리고딕체" is named as the brand's own typeface; web body/UI text still renders in Pretendard. |
| License | Pretendard is the live web family here; it is not a LaundryGo brand asset. |
| Outside these captures | A live webfont specimen of "런드리고딕체", and the in-app G-arrow rotation the source records, sit outside the two inspected pages. |

### Family

- **Current visible UI family:** `Pretendard, sans-serif` — the de-facto Korean product font optimized for dense hangul legibility
- **Display/Brand (declared, not the live web body face):** `런드리고딕체` — proprietary; strokes described by the source as designed to evoke the soft texture of laundry, connected to the logotype.
- Do not replace unavailable or unobserved "런드리고딕체" with Pretendard, and do not set body copy in the proprietary display face. Pretendard is canonical for the two captured web surfaces because computed visible use is Pretendard. The two families do not swap roles. Reading that computed use as the reason not to swap the two families, and refusing to replace unobserved "런드리고딕체" with Pretendard, are derived editorial implementation inferences from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification.

### Type roles

Line heights are kept in the form the source verified them: unitless ratios, with the px equivalents the source itself spelled out shown beside them. Keeping YAML unitless line-height ratios beside the source's own px equivalents, and keeping each YAML use string beside the hierarchy-table note without replacing either, are derived editorial implementation inferences from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Notes |
|---|---|---:|---:|---:|---|
| Display Hero | Pretendard | 62px (3.88rem) | 600 | 1.00 (62px) | White headline on dark hero band. YAML use: "Dark-hero headline, Pretendard SemiBold" |
| Section Heading | Pretendard | 45px (2.81rem) | 600 | 1.44 (65px) | Section statements. YAML use: "Section titles, Pretendard SemiBold" |
| Statement | Pretendard | 35px (2.19rem) | 700 | 1.00 (35px) | Bold value statements on dark bands. YAML use: "Sub-headline / statement, Pretendard Bold" |
| Card Title | Pretendard | 24px (1.50rem) | 600 | 1.67 (40px) | Service/card titles |
| Stat Block | Pretendard | 23px (1.44rem) | 700 | 1.00 (23px) | Growth metric labels |
| Eyebrow Label | Pretendard | 18px (1.13rem) | 700 | 1.00 (18px) | Green section eyebrow (`#0ac290`). YAML use: "Green section eyebrow label (Vision, Growth, Quality)" |
| Nav (top) | Pretendard | 17px (1.06rem) | 500 | 1.40 | Top-level nav item |
| Button | Pretendard | 17px (1.06rem) | 700 | 1.40 | Primary CTA label |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.40 (22.4px) | Standard reading text. YAML use: "Standard reading text, Pretendard" |
| Nav (sub) / Footer | Pretendard | 14px (0.88rem) | 400 | 1.50 | Sub-nav and footer links. YAML use: "Sub-nav / footer link" |

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not LaundryGo-authored or a separately published UI specification.

- **Large, declarative display:** Pretendard 600–700 at 35–62px carries every headline.
- **One quiet body weight:** Pretendard 400 at 16px carries paragraphs and dense UI — the weight contrast between display and body is the primary hierarchy signal.
- **Green eyebrow rhythm:** small green (`#0ac290`) 18px/700 eyebrow labels announce sections in English (Vision, Growth, Quality) above large Korean heads.
- **Proprietary display, ubiquitous body:** "런드리고딕체" owns the brand/logotype voice; Pretendard owns everything functional. They never swap roles.

### Assets

- Storefront favicon: `https://www.laundrygo.com/wp-content/uploads/2022/12/favicon_web.png`
- Dark photographic hero bands (folded laundry and logistics) and service-card imagery are first-party content; do not replace them with invented brand-color decoration.
- The G-with-arrow lettermark is recorded as a 2022-rebrand mark (the source says it animates like a rotating washing drum in-app). That is a brand-asset fact from the narrative record, not a live-computed marketing-page token. Reading the G-with-arrow lettermark as a 2022-rebrand brand-asset fact rather than a live-computed marketing-page token, and refusing to replace first-party photographic bands with invented brand-color decoration, are derived editorial implementation inferences from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each harvested component with a primitive type (`button`, `tab`, `badge`, `card`, `listItem`) and a value set. Those types are preserved per component. Form fields and the beige surface appear in the source's component prose without a YAML primitive type; they are recorded as such. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. Absence of a capture is not a `not-applicable` reason. Every interactive-kind verdict, every applicability verdict, and the reason given for either — including keeping each YAML `use` string as a Token-set use row beside Role, and keeping YAML font and padding byte forms beside the §4 writings — is a derived editorial implementation inference from the verified surfaces; it is not LaundryGo-authored or a separately published UI specification. This is not a claim that state coverage is finished.

The live inspection recorded default treatments on the two web surfaces. The source also states a system-level state contract (empty, loading, error, success, skeleton, disabled) that sits outside that live-computed attribution; it is preserved in the State record below as the source wrote it, not as an app-surface capture.

### Primary CTA

- Role: primary action ("채용공고 보러가기", "문의하기")
- Token-set use: Primary CTA (채용공고 보러가기, 문의하기)
- Primitive type: `button` · Kind: interactive
- Background: `#0ac290`
- Text: `#ffffff`
- Radius: 10px
- Padding: 0px 40px. YAML padding: `0 40px`
- Font: 17px / 700 / Pretendard. YAML font: `17px / 700 Pretendard`
- Height: 52px
- Observed: default on the two web surfaces

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system declares that green actions fade rather than turn grey, preserving brand read; no opacity value is given |
| loading | applicable | The system declares inline progress within the green CTA on form submit, with previous content staying visible |
| error | applicable | The system declares an inline request-failed message in Ink with a next step, and this control is also the inquiry CTA |
| success | applicable | The system declares a brief inline confirmation when an inquiry is sent |

### Emphasis CTA

- Role: large emphasis call-to-action ("B2B·대량세탁 문의", "상담 문의하기")
- Token-set use: Large emphasis CTA (B2B·대량세탁 문의, 상담 문의하기)
- Primitive type: `button` · Kind: interactive
- Background: `#0ac290`
- Text: `#ffffff`
- Radius: 14px
- Font: 24px / 700 / Pretendard. YAML font: `24px / 700 Pretendard`
- Height: 76px
- Shadow: `rgba(0,0,0,0.15) 0px 14px 29px 0px`
- Observed: default on the two web surfaces

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system's green-action fade applies; no opacity value is given |
| loading | applicable | Inquiry submit uses the same green-CTA inline progress the system declares |
| error | applicable | Inquiry is a committing operation this control starts; the system declares a plain-language failure with a next step |
| success | applicable | The system declares inquiry-sent confirmation as a success treatment |

### Muted / Neutral Button

- Role: secondary neutral action ("웹사이트")
- Token-set use: Secondary / neutral action (웹사이트)
- Primitive type: `button` · Kind: interactive
- Background: `#dfdfdf`
- Text: `#60646a`
- Radius: 10px
- Padding: 15px 30px
- Font: 17px / 500 / Pretendard. YAML font: `17px / 500 Pretendard`
- Height: 52px
- Observed: default on the corporate site

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary action whose availability can lapse; the system's faint `#b5bcc0` disabled treatment applies |
| loading | not-applicable | This control sends the reader to a website; it does not commit an operation whose outcome it could report. |
| error | not-applicable | Same role reason: choosing a destination is not an operation with an error result this button would report. |
| success | not-applicable | Same role reason: choosing a destination is not an operation with a success result. |

### Nav Link

- Role: top-level nav item (회사소개 / 비즈니스 / 컬쳐 / 채용) with sub-items (비전, 성장, 언론, 런드리고)
- Token-set use: Top nav item
- Primitive type: `tab` · Kind: interactive
- Background: `#ffffff`
- Text: `#000000`
- Font: 17px / 500 / Pretendard (top-level); 14px / 400 (sub-nav). YAML font: `17px / 500 Pretendard`
- Active variant: green `#0ac290` text on the active item. YAML active: `green #0ac290 text on active`
- Observed: default on the corporate site

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web navigation control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination can be unavailable while its nav item stays legible; the system's faint `#b5bcc0` disabled treatment applies |
| loading | not-applicable | A nav item changes which section or page the reader is on; it does not commit an operation whose outcome it could report. |
| error | not-applicable | Same role reason: navigation is not an operation this control reports as failed. |
| success | not-applicable | Same role reason: a destination change is not an operation that commits and reports success. |

The active state is declared for this control as a variant (text `#0ac290`) rather than as one of the seven canonical states.

### Green Eyebrow

- Role: section eyebrow label above heads (Vision, Our Business, Growth, Quality, Infra)
- Token-set use: Green section eyebrow label above section heads
- Primitive type: `badge` · Kind: non-interactive — it displays a section signpost, and the source attaches no action, target, or interactive treatment to it. No state-applicability map is declared.
- Text: `#0ac290`
- Font: 18px / 700 / Pretendard. YAML font: `18px / 700 Pretendard`

### Service Card

- Role: service summary card (런드리고 / 런드리24 / 호텔&비즈니스 / EPC)
- Token-set use: Service summary card (런드리고 / 런드리24 / 호텔&비즈니스)
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#000000`
- Radius: 20px
- Observed: default on the corporate site

The source records this as a service summary card and does not attach an action, target, or interactive treatment to it. Kind and a state-applicability map are omitted.

### Stat Block

- Role: growth metric labels on a dark band (회원 수, 누적 세탁량, 누적 주문수, 누적 투자액)
- Token-set use: Growth metric block on dark band (회원 수, 누적 세탁량)
- Primitive type: `listItem` · Kind: non-interactive — it displays a metric label, and the source attaches no action, target, or interactive treatment to it. No state-applicability map is declared.
- Text: `#ffffff`
- Font: 23px / 700 / Pretendard. YAML font: `23px / 700 Pretendard`

### Inquiry Form Field

- Role: contact/inquiry form fields on B2B 문의 surfaces
- Kind: interactive — the source describes these as form fields and does not assign a YAML primitive type
- Background: `#ffffff`
- Border: `1px solid #dfdfdf`
- Radius: 10px
- Text: `#000000`
- Placeholder: `#b5bcc0`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; the system's faint `#b5bcc0` placeholder/disabled text applies |
| loading | applicable | Form submit uses the green-CTA inline progress the system declares; the field stays in place |
| error | applicable | The system declares a field-level message below the input describing what's valid, not just "필수" |
| success | applicable | Form field; the system's inquiry-sent confirmation is recorded on the form, not as a per-field color |

### Beige Surface

- Role: warm-grey content block for softer sections
- Background: `#ecebdc`
- Text: `#000000`
- Radius: 20px

The source records this as a content-block surface and does not attach an action or interactive treatment. Kind and a state-applicability map are omitted.

### State record

The source's state contract, preserved with its values and copy. It sits outside the live-computed attribution of the two marketing pages; keeping it here is preservation of the source's §14 body, not a claim that these treatments were captured on an order app. Keeping the source's §14 state contract here as preservation of that body, not as an app-surface capture, is a derived editorial implementation inference from the verified surfaces; it is not LaundryGo-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no order history)** | White canvas. Single Ink (`#000000`) line at body size explaining no orders yet, with one green (`#0ac290`) CTA to start an order. No illustration clutter. |
| **Empty (saved/none yet)** | Muted Slate (`#60646a`) single line: nothing saved yet, plus a path to the service. Calm, honest. |
| **Loading (order/results fetch)** | Skeleton blocks on `#f8f9fa` tinted surface at final card dimensions, ~20px radius. Flat pulse consistent with the near-shadowless system — no shadow shimmer. |
| **Loading (form submit)** | Inline progress within the green CTA; previous content stays visible. |
| **Error (request failed)** | Inline message in Ink with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다" — states the next step. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". Ruby-free, calm tone. |
| **Success (order placed / inquiry sent)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f8f9fa` blocks at final dimensions, ~20px radius, flat pulse. |
| **Disabled** | Faint Blue-Grey (`#b5bcc0`) text on reduced-opacity surface; green actions fade rather than turn grey to preserve brand read. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Full-width alternating bands: white (`#ffffff`) content sections alternate with dark photographic hero bands carrying white headlines.
- Centered single-column hero with the large Pretendard statement as the anchor.
- Service offerings (런드리고 / 런드리24 / 호텔&비즈니스 / EPC) arranged as a row of `~20px`-radius cards.
- Growth metrics shown as a horizontal row of stat blocks on a dark band.
- Spacing rhythm: ~8px base, with frequent 4/8/15/16/30/40/72px steps and 72px+ gaps between full-width bands; CTA padding 30–40px horizontal.

Reading the generous vertical rhythm as "breathing room over density," reading band-based segmentation (white / dark photographic / `#ecebdc`) as the alternative to heavy borders, and reading rationed green as training the eye to treat `#0ac290` as "the brand / the action," are a derived editorial implementation inference from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification.

### Responsive behavior

The source states these breakpoints as its layout contract. They are not a live cross-viewport capture; the two inspections were of the desktop-rendered pages. Reading them as a declared layout contract rather than a live cross-viewport capture is a derived editorial implementation inference from the verified surfaces; it is not LaundryGo-authored or a separately published UI specification.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, cards stack, nav collapses |
| Tablet | 640-1024px | Moderate padding, 2-up service cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column service/stat rows |

- **Touch targets:** Primary CTAs at 52px height with 30–40px horizontal padding; emphasis CTAs at 76–85px height; nav links spaced for touch within the top header.
- **Collapsing:** Hero 62px Pretendard headline scales down on mobile, weight 600 maintained; service cards go multi-column → stacked single column; growth stat blocks go horizontal row → wrapped/stacked grid; alternating white/dark bands keep full-width treatment.
- **Imagery:** Dark photographic hero bands retain white headline treatment at all sizes; service-card imagery maintains `~20px` radius across breakpoints.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes LaundryGo's voice as confident, mission-framed, and reassuring — positioning a mundane chore as serious infrastructure. That characterization, the register notes in the tone table, and the reading of the hero as declarative and calm rather than hype-driven are a derived editorial implementation inference from the verified surfaces; they are not LaundryGo-authored or a separately published UI specification. The quoted strings below are the labels; English beside them is a reading aid the source already supplied, not a replacement.

Service copy the source records as a concrete mechanism, not a slogan: "저녁 10시 전 런드렛에 넣으면 다음 날 정오 전 수령".

| Context | Tone |
|---|---|
| Corporate hero | Declarative, mission-framed. "의식주 생활의 혁신을 만들어 갑니다." Ambitious, calm. |
| Section eyebrow labels | Terse English signposts. "Vision", "Our Business", "Growth", "Quality", "Infra". |
| Value statements | Bold, purpose-driven. "세탁 산업의 혁신을 시작으로 의식주 산업 전반의 문제를 찾고 해결합니다." |
| CTAs | Direct, low-pressure. "채용공고 보러가기", "B2B·대량세탁 문의", "상담 문의하기". |
| B2B / hotel copy | Credibility-first, concrete. "국내 유수의 프리미엄 호텔에서 이미 경험하고 있습니다." |

Voice samples, verbatim from the live site:

- "의식주 생활의 혁신을 만들어 갑니다." — corporate hero headline (the source's English gloss: "We are building the innovation of clothing-food-housing life").
- "세탁 산업의 혁신을 시작으로 의식주 산업 전반의 문제를 찾고 해결합니다." — Vision section statement.
- "국내 최대 호텔 전문 세탁 서비스, 런드리고 호텔&비즈니스" — B2B hero.

**Forbidden register:** hype-driven superlatives without proof, fear/urgency selling, undefined jargon, exclamation-heavy consumer-app shouting.

The product copy on these surfaces is Korean. English appears as terse eyebrow signposts (Vision, Our Business, Growth, Quality, Infra), not as a second complete locale profile. Reproduce the Korean strings above, the nav labels (회사소개 / 비즈니스 / 컬쳐 / 채용; 비전, 성장, 언론, 런드리고), the service names (런드리고 / 런드리24 / 호텔&비즈니스 / EPC), the metric labels (회원 수, 누적 세탁량, 누적 주문수, 누적 투자액), and the CTA labels byte-exact rather than translating or re-casing them.

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

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to LaundryGo evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Hover, press, and focus visual treatments.** The system assigns hover, button press, and focus to `motion-fast`, and CTAs respond to press with a subtle scale/opacity shift, but it gives no color, opacity, or scale value for any of them.
- **The disabled opacity value.** The system states that green actions fade rather than turn grey, without naming the opacity.
- **The skeleton pulse.** The system declares `#f8f9fa` blocks at final card dimensions with ~20px radius and a flat pulse, without naming the pulse's duration or opacity range.
- **Live specimen for "런드리고딕체".** The face is recorded as the proprietary display/logotype typeface; the two inspected pages render web body and headlines in Pretendard.
