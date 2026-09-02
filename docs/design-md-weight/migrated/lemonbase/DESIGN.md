# Lemonbase Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Lemonbase (레몬베이스) is a Korean HR SaaS for performance management — evaluation, goals/OKR, 1:1s, and engagement surveys. This contract covers the two first-party marketing surfaces the source inspected for tokens: the homepage at `https://www.lemonbase.com` and the pricing surface at `https://www.lemonbase.com/pricing`. The official blog at `https://lemonbase.com/blog/` is a named brand-owned source; it corroborates heading ink, body, muted, and primary blue, and it runs a separate CMS template, so it does not supply the interface tokens below. Values stay attached to the surface that established them. This contract does not treat those marketing pages as a proxy for the performance-management product UI the homepage sells. Keeping values attached to the surface that established them, treating the blog as a named source that does not supply interface tokens, and the refusal to treat those marketing pages as a proxy for the product UI, are derived editorial implementation inferences from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification.

The captured marketing layer is a pure-white canvas (`#ffffff`), segmented by a cool slate surface (`#f1f5f9`) and a warmer off-white (`#f9f9f9`) into full-width bands. Text sits in a near-black navy (`#1a2128`) for headings, dropping through body slate (`#4c5967`), muted slate (`#677583`), and faint grey (`#cfd3d8`). The hairline (`#e2e5e9`) and flat tint are the recorded separators. Blue (`#328af6`) is recorded on the primary "도입 문의" (Contact sales) CTA and the active nav state. On the pricing surface a consult-green (`#469f68`) appears as the secondary "상담 문의" action. A small accent set — purple (`#5d3dd5`), lemon-yellow (`#ffd750`), and magenta-pink (`#c7317b`) — is recorded on decorative tinted icon backgrounds and illustration. Tinted action surfaces like the pale blue wash (`#edf5ff`) carry labels and report chips. A dark slate (`#2c2c38`) anchors occasional inverted blocks; CTA labels are white (`#ffffff` — `on-primary`). Reading that layer as a calm, confident enterprise product rather than a noisy growth-hack landing page, reading navy instead of pure black as warmth and enterprise trust, reading the hairline as the separation device, reading the one blue as the single action color and "the next step.", reading cool/warmer as the two surface temperatures, reading Pretendard Bold at large sizes as a Korean-premium declarative voice, and reading the accent set as festive but disciplined and never interactive chrome, are derived editorial implementation inferences from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification.

Brand narrative recorded by the source, kept separate from the interface evidence above. Lemonbase is a Korean HR-tech SaaS. The product spans evaluation (평가), goal/OKR management (목표관리), 1:1s, and engagement/HR surveys (몰입관리), with consulting services layered on top (leadership assessment 리더십 역량 진단, organization diagnosis 조직 진단, leadership education 리더십 교육). The positioning stated across the site is "고성과를 위한 변화, 필요한 솔루션을 한번에". The live copy also includes "구성원이 신뢰할 수 있는 평가", "어렵기만 한 성과관리, 이제는 쉽게", and "신뢰할 수 있는 전문가". Official live nav and section copy provide that narrative context; they do not by themselves supply interface tokens. Reading performance management as a continuous practice, reading the positioning line as assembling tools and expertise in one place, reading the two feature lines as a promise of trust and ease, and classifying that narrative as context that does not by itself supply interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification. The quoted Korean lines are published copy.

What the source says Lemonbase refuses, visible in its design: the heavy, intimidating chrome of legacy enterprise HR (no shadow-stacked cards, no institutional grey-on-grey density), and the fear-based framing of evaluation as judgment. What it embraces: a flat, calm, mobile-friendly interface; a single trustworthy blue; bold Pretendard headlines that speak plainly; and a small, friendly accent set — led by the lemon-yellow namesake — that keeps an HR product feeling approachable rather than punitive. That refusal/embrace reading is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

- Read the homepage promise "고성과를 위한 변화, 필요한 솔루션을 한번에" and the performance-management tools the product consolidates.
- Inquire about adoption from the primary CTA 도입 문의.
- Review pricing on `/pricing` ("가격 안내") and request a consult with 상담 문의.
- Request a brief via 소개서 신청.

Selecting these four as the product's primary tasks, and keeping them off the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification. Each names a label or surface the source records.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three named figures as fictional archetypes informed by publicly observable Lemonbase user segments (Korean HR leaders, people-team managers, team leads running evaluations), not individual people, so their names, ages, cities, and biographies are dropped rather than promoted, and no demographic segment list is carried. What the source independently records is the audience grouping those archetypes were said to be informed by: Korean HR leaders, people-team managers, and team leads running evaluations. Dropping the named figures rather than promoting them, and reading those groups as this product's audience, is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

### Distinctive traits

- Single friendly blue (`#328af6`) reserved for the primary "도입 문의" CTA and active nav — the one "action" color
- Consult-green (`#469f68`) as the dedicated secondary action on pricing ("상담 문의")
- Pretendard Bold for all display headlines (heavy, declarative Korean-premium voice); Pretendard Regular 16px for body
- Near-black navy (`#1a2128`) for headings instead of pure black — warm, trustworthy
- Flat depth: hairlines (`#e2e5e9`) + tinted surfaces (`#f1f5f9`) + soft ambient `rgba(0,0,0,0.08)` shadows, never hard borders
- Festive but disciplined accent set — purple (`#5d3dd5`), lemon-yellow (`#ffd750`), magenta-pink (`#c7317b`) — for decorative icon tints only
- Pale blue wash (`#edf5ff`) for label / report chips on white
- Disciplined rounded geometry — 8px buttons, 12px cards, 24px containers, 36px pills

These eight traits, and the readings carried inside them — one reserved action blue, pricing-only consult-green, Korean-premium Bold display, navy-not-black, near-flat depth, decorative-only accents, and disciplined rounded geometry — are a derived editorial implementation inference from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification. Each names the values it rests on.

### Principles

These six items are a derived editorial implementation inference from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Trust over judgment.** Evaluation should feel fair and transparent, not punitive. *UI implication:* calm navy text, generous spacing, and plain-language headings ("구성원이 신뢰할 수 있는 평가"); never alarmist red or dense compliance chrome.
2. **One place, one next step.** The product consolidates scattered HR tools; the UI mirrors that with a single action color. *UI implication:* reserve the saturated blue (`#328af6`) for the primary CTA so the next step is never ambiguous.
3. **Make the hard thing easy.** Performance management is intimidating; the interface decodes it. *UI implication:* simplify, label plainly, and keep surfaces airy and uncluttered.
4. **Flat and calm.** Enterprise clarity beats decorative depth. *UI implication:* no hard borders; separate with tint and hairlines; reach for soft wide shadows only when a card must lift.
5. **Bold where it persuades, calm where it informs.** *UI implication:* Pretendard Bold for headlines that motivate; Pretendard Regular 16px for content that explains.
6. **Friendly, not frivolous.** The lemon-yellow and accent set add warmth, disciplined to decorative icon tints. *UI implication:* never let accent color leak into interactive chrome.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification.

- Use Pretendard Bold for all display headlines — it's the brand's voice
- Use Pretendard Regular weight 400 at 16px for body and reading text
- Reserve blue (`#328af6`) for the primary "도입 문의" CTA and active nav — keep it the single "action" color
- Use consult-green (`#469f68`) only for the secondary consult action on pricing
- Use near-black navy (`#1a2128`) for headings instead of pure black
- Separate sections with flat tinted surfaces (`#f1f5f9` / `#f9f9f9`) and `#e2e5e9` hairlines, not heavy borders
- Use soft wide ambient shadows (`rgba(0,0,0,0.08) 0px 8px 36px`) for elevated feature cards
- Keep the lemon-yellow (`#ffd750`), purple (`#5d3dd5`), and pink (`#c7317b`) accents for decorative icon tints only

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification.

- Do not spread blue (`#328af6`) across many elements — it dilutes the single-action signal
- Do not use the accent purple/yellow/pink for buttons or links — they are decorative only
- Do not use pure black (`#000000`) for body text — reserve near-black navy `#1a2128`
- Do not use hard 1px borders on cards — separate with hairlines and soft shadow instead
- Do not set headlines in a light weight — display is always Pretendard Bold
- Do not use Manrope for hangul headlines — Pretendard owns display; Manrope is Latin/numerals only
- Do not use heavy dark drop shadows — elevation stays soft, wide, and low-opacity

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The role names below are this contract's naming of the source's recorded uses rather than published Lemonbase role names. Calling `#328af6` the single action color, calling `#469f68` the pricing-only consult action, calling `#1a2128` navy instead of black as heading ink, calling the grey set a text ladder, calling `#e2e5e9` the primary separation device of a near-shadowless system, calling purple/yellow/pink decorative-only, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two roles that share `#ffffff`, and keeping `tokens.colors.surface` (`#f1f5f9`) off the Neutral Button and Tinted Container fills, are derived editorial implementation inferences from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification. The hex values and the recorded uses beside them are live-computed.

#### Primary

- **Lemonbase Blue** (`#328af6`): Primary brand and action color. The clear blue on the "도입 문의" CTA and active nav state — the system's single primary action. Token-set use path `tokens.colors.primary`.
- **Blue Tint** (`#edf5ff`): Pale blue wash for label chips, report tags, and tinted cards sitting on white. Token-set use path `tokens.colors.primary-tint`.
- **Ink Navy** (`#1a2128`): Primary text and heading color. A very dark blue-black carrying warmth and enterprise trust — used instead of pure black. Token-set use path `tokens.colors.ink`.

#### Secondary & Accent

- **Consult Green** (`#469f68`): Secondary action color for the "상담 문의" CTA on the pricing page; also a tinted feature-icon accent. Token-set use path `tokens.colors.consult-green`.
- **Accent Purple** (`#5d3dd5`): Decorative feature-icon accent (tinted backgrounds), never interactive chrome. Token-set use path `tokens.colors.accent-purple`.
- **Lemon Yellow** (`#ffd750`): The brand's namesake signature accent — illustration and highlight pops. Token-set use path `tokens.colors.accent-yellow`.
- **Accent Pink** (`#c7317b`): Magenta accent for decorative icons and illustration variety. Token-set use path `tokens.colors.accent-pink`.

#### Neutral & Surface

- **Pure White** (`#ffffff`): Page background, white card surfaces, and CTA label text (`on-primary`). Token-set use path `tokens.colors.canvas`. Also `tokens.colors.on-primary` (`#ffffff`) for text on the primary CTA.
- **Surface Slate** (`#f1f5f9`): Cool-grey tinted surface for content cards, neutral buttons, and segmented bands. Token-set use path `tokens.colors.surface`.
- **Surface Alt** (`#f9f9f9`): Warmer off-white for alternating section blocks. Token-set use path `tokens.colors.surface-alt`.
- **Hairline** (`#e2e5e9`): Thin dividers and card outlines — the primary separation device in the near-shadowless system. Token-set use path `tokens.colors.hairline`.
- **Dark Slate** (`#2c2c38`): Near-black surface for occasional inverted blocks and footers. Token-set use path `tokens.colors.dark`.

#### Text Hierarchy

- **Ink Navy** (`#1a2128`): Primary text, headings, nav, strong labels.
- **Body Slate** (`#4c5967`): Secondary body copy and descriptions. Token-set use path `tokens.colors.body`.
- **Muted Slate** (`#677583`): Tertiary text, captions, "더 알아보기" link labels, metadata. Token-set use path `tokens.colors.muted`.
- **Faint Grey** (`#cfd3d8`): Disabled text, placeholder, lowest-emphasis labels. Token-set use path `tokens.colors.faint`.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48` · `section: 64`.

The source names an 8px base unit and the same scale in px: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. Notable recorded paddings: CTA buttons use 16px padding; sections use 48–64px vertical rhythm. `sm: 8` is a spacing step. It is not the shape step `tokens.rounded.sm: 8`. Keeping those two paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

Reading generous vertical rhythm (48–64px) between bands as breathing room over density is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `xs: 6` · `sm: 8` · `md: 12` · `lg: 16` · `xl: 24` · `pill: 36`.

- Extra-small (`6`): nav hover pills, small inner elements
- Small (`8`): buttons, badges — the interactive workhorse
- Medium (`12`): elevated feature cards
- Large (`16`): pricing panels
- Extra-large (`24`): tinted feature containers
- Pill (`36`): carousel controls, fully-round circles

Reading the 8px button as the interactive workhorse, reading 36px as reserved for carousel pills, and keeping `sm: 8` as a radius step rather than the spacing step `tokens.spacing.sm: 8`, are derived editorial implementation inferences from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification. The six values themselves are live-computed.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f1f5f9` / `#f9f9f9` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e2e5e9` divider | Dividers and subtle outlines |
| Ambient (Level 3) | `rgba(0,0,0,0.08) 0px 8px 36px 0px` | Elevated feature cards |
| Soft (Level 4) | `rgba(0,0,0,0.04) 0px 12px 36px 0px` | Floating illustration panels |

Token-set path `tokens.shadow.ambient`: `rgba(0,0,0,0.08) 0px 8px 36px 0px`. Token-set path `tokens.shadow.soft`: `rgba(0,0,0,0.04) 0px 12px 36px 0px`. Token-set path `tokens.shadow.tight`: `rgba(0,0,0,0.08) 0px 1px 24px 0px` (pricing panels; recorded on the Tight-Shadow Panel component). The source token-set elevated-card field writes the ambient shadow without the trailing `0px`: `rgba(0,0,0,0.08) 0px 8px 36px`. Both byte forms are kept. Keeping both byte forms rather than collapsing them is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

Live inspection found most surfaces carry `box-shadow: none`, with elevation appearing only on feature cards as a soft, wide, low-opacity ambient shadow and a tighter variant on pricing panels. Depth and grouping are communicated primarily through flat tinted surfaces (`#f1f5f9`, `#f9f9f9`) and thin `#e2e5e9` hairlines. When emphasis is needed, the system reaches for the blue (`#328af6`) or a tinted accent, rarely for elevation. Reading that as a near-flat modern-flat choice that keeps an enterprise HR UI feeling clean and calm rather than heavy is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, and shadow on the homepage and `/pricing`. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this motion section. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Lemonbase evidence, so the curves are omitted here and only the roles and their uses are kept. That omission is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, sheets, carousel |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and quiet — consistent with the calm, flat aesthetic.
- Customer-logo and testimonial carousels advance with a smooth `motion-standard / ease-standard` slide; cards fade-in from below at `motion-standard / ease-enter`.
- No bounce or spring — an enterprise HR product signals steadiness and trust, not playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and carousels pause; the product remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The homepage states the product. It does not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification. |
| Live computed surface-use | Homepage and `/pricing` compute headlines, CTA labels, and emphasis as Pretendard Bold, and body as Pretendard Regular at weight 400. Manrope is recorded as a Latin/numeral companion. |
| Official distributed asset | No Lemonbase-exclusive distributed type family was verified. |
| Declared-only | `Pretendard Bold Fallback` and `Pretendard Regular Fallback` are named as fallbacks beside the loaded cuts. They are not a further Lemonbase UI-family token. That classification is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification. |
| License | This record does not establish a Lemonbase font-license notice for Pretendard or Manrope. Pretendard and Manrope are upstream faces, not Lemonbase-owned brand assets; that classification is a derived editorial implementation inference from the verified surfaces, and it is not Lemonbase-authored or a separately published UI specification. |
| Outside these captures | Typography on the blog's separate CMS template, and on any surface beyond the two token-inspected pages, sits outside this contract. That scope cut is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification. |

### Family

- **Display**: `Pretendard Bold` (with `Pretendard Bold Fallback`) — used for all headlines, CTA labels, and emphasis. Token-set path `tokens.typography.family.display`.
- **Body**: `Pretendard Regular` (with `Pretendard Regular Fallback`) — the document default, used for body copy and dense UI text at weight 400. Token-set path `tokens.typography.family.body`.
- **Accent**: `Manrope` — Latin/numeral companion for English words and figures. Token-set path `tokens.typography.family.accent`.

A fallback member of a stack is never presented as the brand face. Do not replace Pretendard or Manrope with a system substitute. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification. Do not use Manrope for hangul headlines — that last rule is the source Don't list.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Pretendard Bold | 48px (3.00rem) | 700 | 1.30 | tight | Hero headline, Pretendard Bold |
| Section Heading | Pretendard Bold | 44px (2.75rem) | 700 | 1.40 | tight | Pricing/section title, Pretendard Bold |
| Sub-section | Pretendard Bold | 36px (2.25rem) | 700 | 1.44 | tight | Feature section heads, Pretendard Bold |
| Card / Promo Head | Pretendard | 28px (1.75rem) | 700 | 1.40 | -0.56px | Card / promo heading, Pretendard |
| Body | Pretendard Regular | 16px (1.00rem) | 400 | 1.50 | normal | Reading text, links, Pretendard Regular |
| Button / CTA | Pretendard Bold | 14px (0.88rem) | 700 | 1.50 | normal | Button / CTA label, Pretendard Bold |
| Caption / Nav | Pretendard | 12px (0.75rem) | 400 | 1.50 | normal | Nav items, small UI labels |

Line heights are kept as unitless ratios. Keeping those ratios rather than converting them to px is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification. Token-set paths: `tokens.typography.display-hero` · `section` · `subsection` · `card-head` · `body` · `ui` · `caption`. The Display Hero row's source note names the hero headline "고성과를 위한 변화"; the Section Heading row names the pricing/section title "가격 안내". Tight tracking on display sizes is recorded as "tight" except at 28px, where the source names `-0.56px`.

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

- **Bold display, light body**: Pretendard Bold carries every headline; Pretendard Regular 400 carries every paragraph. The weight contrast is the system's primary hierarchy signal.
- **Tight tracking on headlines**: display sizes compress (around -0.56px at 28px); body text stays at normal tracking.
- **Hangul-first sizing**: Body sits at a comfortable 16px — generous for hangul legibility, calm for information-rich HR layouts.
- **Two fonts, two jobs**: Pretendard is the persuasive/branding and reading voice; Manrope handles Latin and numerals. They never swap roles.

### Assets

- Feature illustrations and screenshots carry soft ambient shadow, consistent across sizes. Cards maintain 12px (elevated) / 24px (tinted) radius across the breakpoints the source declares. Treating those screenshots as first-party product imagery, and the instruction not to replace them with invented brand-color decoration, are a derived editorial implementation inference from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification.
- The catalog's logo entry for this reference is a Google favicon-service URL rather than a Lemonbase-hosted file. It is not presented here as a Lemonbase brand asset. That classification is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each token-set component with a primitive type (`button`, `card`, `tab`, `badge`) and a value set. Those types are preserved per component. Three further records appear only in the source body: the Outline CTA (소개서 신청) under Buttons, the Tight-Shadow Panel under Cards, and Carousel Controls. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. The source's live inspection recorded computed default styling, and the state treatments in the State record below are stated at system level rather than measured per control. Every kind verdict, every applicability verdict, and the reason given for either — including withholding kind and a map where the source supplies no interaction evidence, closing loading/error/success on destination and arrow roles, and calling the chip non-interactive — is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Primary CTA (도입 문의)

- Role: Primary call-to-action across header, hero, and product sections — the system's single primary action
- Primitive type: `button` · Kind: interactive
- Background: `#328af6`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 16px
- Token-set padding: `0 16px`
- Height: 40px
- Font: 14px Pretendard Bold weight 700
- Token-set font: `14px / 700 Pretendard Bold`
- Token-set use: Primary CTA 도입 문의, hover darken
- Hover: blue darkens (no hex is given)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Recorded as "blue darkens" / token-set `hover darken`; no fill hex is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system declares that blue actions fade rather than turn grey; no opacity value is given |
| loading | not-applicable | This control takes the reader to an inquiry destination; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; it does not commit an operation whose outcome it could report. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Consult CTA (상담 문의)

- Role: Secondary consult action on the pricing page
- Primitive type: `button` · Kind: interactive
- Background: `#469f68`
- Text: `#ffffff`
- Radius: 8px
- Padding: 16px
- Font: 14px Pretendard Bold weight 700
- Token-set font: `14px / 700 Pretendard Bold`
- Token-set use: Secondary consult CTA 상담 문의 on pricing

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control sends the reader to a consult path; reaching that destination is not a commit whose in-progress state the button reports. |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed. |
| success | not-applicable | Same role reason: navigating to consult is not an operation that commits and reports success. |

### Neutral Button (로그인)

- Role: Low-emphasis header action (login)
- Primitive type: `button` · Kind: interactive
- Background: `#f1f5f9`
- Text: `#1a2128`
- Radius: 8px
- Padding: 0px 16px
- Token-set padding: `0 16px`
- Height: 40px
- Font: 14px Pretendard Bold weight 700
- Token-set font: `14px / 700 Pretendard Bold`
- Token-set use: Neutral header button 로그인

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control hands off to a login destination; it does not commit an in-page operation whose in-progress state the button reports. |
| error | not-applicable | Destination role; the destination, not this button, reports failure. |
| success | not-applicable | Same role reason: reaching login is not an operation this button reports as success. |

### Outline CTA (소개서 신청)

- Role: Tertiary white request action sitting alongside the primary CTA
- Kind: interactive
- Background: `#ffffff`
- Text: `#1a2128`
- Radius: 8px
- Padding: 16px
- Use: Tertiary white request action sitting alongside the primary CTA

The source token set does not include this control; it is declared only in the source body, under Buttons.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a brief-request path; it does not commit an in-page operation whose in-progress state the button reports. |
| error | not-applicable | Destination / request role; the destination, not this button, reports failure. |
| success | not-applicable | Same role reason: reaching a brief request is not an operation this button reports as success. |

### Top Nav Item

- Role: Top horizontal nav ("성과관리", "몰입관리", "가격", "리더십 진단")
- Primitive type: `tab` · Kind: interactive
- Background: `#ffffff`
- Text: `#1a2128`
- Font: 12px Pretendard weight 400
- Token-set font: `12px / 400 Pretendard`
- Active: blue `#328af6` text on the active item
- Token-set active: `text #328af6`
- Token-set use: Top nav item 가격 / 제품

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | The source records 6px nav hover pills; no fill value is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab/link; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | Destination tab/link; the destination, not the item, reports failure. |
| success | not-applicable | Same role reason: reaching a nav destination is not an operation with a success result. |

### Carousel Controls

- Role: Previous/Next controls on the customer-logo and testimonial carousels
- Kind: interactive
- Background: `rgba(0,0,0,0.2)`
- Radius: 36px (full circle)
- Height: 36px
- Use: Previous/Next controls on the customer-logo and testimonial carousels

The source token set does not include this control; it is declared only in the source body.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An arrow control can become unavailable at a list end; visual treatment omitted |
| loading | not-applicable | This control advances a carousel; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | An arrow control has no failure outcome of its own. |
| success | not-applicable | Advancing a slide is not an operation with a success result on the control. |

### Accent Label Chip

- Role: Label / category chip (e.g. "AI TRENDS", report tags)
- Primitive type: `badge`
- Kind: non-interactive — a label chip, not a control
- Background: `#edf5ff`
- Text: `#328af6`
- Radius: 8px
- Padding: 4px 8px
- Font: 12px Pretendard Bold weight 700
- Token-set font: `12px / 700 Pretendard Bold`
- Token-set use: Label / category chip (e.g. AI TRENDS, report tag)

### Elevated Feature Card

- Role: Feature and customer-logo cards — soft ambient shadow, no border
- Primitive type: `card`
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.08) 0px 8px 36px 0px`
- Token-set shadow: `rgba(0,0,0,0.08) 0px 8px 36px`
- Token-set use: Feature / customer-logo card, soft ambient shadow, no border

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Tinted Container

- Role: Tinted feature container on grey bands
- Primitive type: `card`
- Background: `#f1f5f9`
- Radius: 24px
- Token-set use: Tinted feature container on grey band

The source supplies no interaction evidence for this container, so kind and a state-applicability map are both withheld.

### Tight-Shadow Panel

- Role: Pricing panel / inline elevated block
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0,0,0,0.08) 0px 1px 24px 0px`
- Use: Pricing panel / inline elevated block

The source token set does not include this control as a component record; the matching shadow lives at `tokens.shadow.tight`. The source supplies no interaction evidence for this panel, so kind and a state-applicability map are both withheld.

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Lemonbase-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| Empty (no evaluations yet) | White canvas. Single Ink Navy (`#1a2128`) line at body size explaining nothing has been set up, with one blue CTA to start. No illustration clutter. |
| Empty (no survey responses) | Muted Slate (`#677583`) single line: nothing collected yet, plus a path to send the survey. Honest, calm. |
| Loading (dashboard fetch) | Skeleton blocks on `#f1f5f9` tinted surface at final card dimensions, 12px radius. Soft pulse consistent with the near-flat system. |
| Loading (in-place refresh) | Subtle blue (`#328af6`) progress affordance; previous values stay visible. |
| Error (action failed) | Inline message in Ink Navy with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| Error (form validation) | Field-level message below the input in a calm error tone; describes what's valid, not just "필수". |
| Success (cycle published) | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| Skeleton | `#f1f5f9` blocks at final dimensions, 12px radius, soft pulse. |
| Disabled | Faint Grey (`#cfd3d8`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve brand read. |

These rows describe performance-management product and form treatments the source wrote at system level. They are not attached as visual treatments to the marketing destination controls above. That non-attachment is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered single-column hero with the 48px Pretendard Bold headline as the anchor
- Customer logos and testimonials arranged in horizontal carousels with circular prev/next controls
- Feature sections alternate between white (`#ffffff`), slate (`#f1f5f9`), and off-white (`#f9f9f9`) full-width bands
- Cards use 12px radius (elevated) and 24px radius (tinted containers) to group related features
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64
- Shape restated from `tokens.rounded`: extra-small 6 · buttons 8 · elevated cards 12 · pricing 16 · tinted containers 24 · carousel pills 36

Reading the 48px headline as the hero anchor, reading scale as breathing room over density, reading bands as flat segmentation by tint and hairline, and reading one rationed blue so each band has a single obvious next step, are derived editorial implementation inferences from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the source's "comfortable tapping" reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Lemonbase-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, carousels swipe |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

Touch targets the source records: primary and consult CTAs at 40–44px height; carousel controls at 36px circular targets; nav items spaced within a comfortable header band.

Collapsing strategy, as the source states it:

- Hero: 48px Pretendard Bold headline scales down on mobile, weight maintained
- Customer/testimonial carousels: swipe on narrow viewports
- Feature bands: multi-column → stacked single column
- Tinted/white/off-white alternating sections maintain full-width treatment

Image behavior: feature illustrations and screenshots carry soft ambient shadow, consistent across sizes; cards maintain 12px (elevated) / 24px (tinted) radius across breakpoints. The Desktop row keeps the source body's `1024-1440px` range as declared width. Keeping that range as a declared width rather than a measured viewport is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Lemonbase's voice as **clear, encouraging, and expert** — an HR partner that turns a heavy, politically-charged domain (evaluation, goals, feedback) into confident plain Korean. The hero line "고성과를 위한 변화, 필요한 솔루션을 한번에" ("Change for high performance — every solution you need, in one place") sets the register: outcome-framed, declarative, never gimmicky. Copy treats the reader as a capable HR leader who wants better outcomes, not a target to be pressured. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification. The Korean lines themselves are live homepage copy.

| Context | Tone |
|---|---|
| Hero headlines | Outcome-framed, declarative. "고성과를 위한 변화, 필요한 솔루션을 한번에." Confident, not hype. |
| Feature heads | Trust- and benefit-first. "구성원이 신뢰할 수 있는 평가", "어렵기만 한 성과관리, 이제는 쉽게". |
| CTAs | Direct, low-pressure. "도입 문의", "상담 문의", "소개서 신청", "더 알아보기". |
| Customer / social proof | Partnership-framed. "레몬베이스와 함께 더 높은 성과를 만들어가는 고객사". |
| Expert/consulting copy | Calm authority. "신뢰할 수 있는 전문가와 함께 더 나은 성과를 만드세요". |

**Voice samples (verbatim from live surfaces):**

- "고성과를 위한 변화, 필요한 솔루션을 한번에" — hero headline / page title (outcome-framed).
- "구성원이 신뢰할 수 있는 평가" — feature heading (trust-first).
- "어렵기만 한 성과관리, 이제는 쉽게" — feature heading (simplify promise).
- "신뢰할 수 있는 전문가와 함께 더 나은 성과를 만드세요" — consulting section heading.

Further published strings the source records on the inspected surfaces, kept byte-exact:

- Hero H1 as inspected: "고성과를 위한 변화 / 필요한 솔루션을 한번에"
- Nav: 성과관리, 몰입관리, 가격, 리더십 진단
- Token-set nav use: 가격 / 제품
- Header / primary CTA: 도입 문의
- Pricing H2: 가격 안내
- Consult CTA: 상담 문의
- Neutral header: 로그인
- Outline request: 소개서 신청
- Muted link: 더 알아보기
- Badge example: AI TRENDS
- Product terms: 평가, 목표관리, 몰입관리, 리더십 역량 진단, 조직 진단, 리더십 교육
- Promise glosses kept beside the Korean lines: "evaluation employees can trust"; "performance management that was only ever hard — now made easy"; "trusted experts"

**Forbidden register:** aggressive sales urgency, fear-based performance-management framing, undefined HR jargon left unexplained, exclamation-heavy hype. The source states that copy treats the reader as a capable HR leader — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Lemonbase-authored or a separately published UI specification.

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line.

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

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict among its own recorded values.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Lemonbase evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **The disabled opacity value.** The system states a reduced-opacity surface and a blue action that fades rather than turning grey, without naming the opacity.
- **The skeleton pulse.** The system declares blocks at final dimensions with a 12px radius and a soft pulse, without naming the pulse's duration or opacity range.
- **The primary-CTA hover fill.** The system records "blue darkens" / `hover darken` without a fill hex.
- **Product UI beyond the system-level state record.** The source sells a performance-management product and writes empty/loading/error/success treatments for evaluations, surveys, and forms. This contract does not invent component anatomy for that product UI.
- **Blog as a token source.** `https://lemonbase.com/blog/` is a named brand-owned source. It corroborates heading ink, body, muted, and primary blue. It runs a separate CMS template and does not contribute computed interface tokens.
