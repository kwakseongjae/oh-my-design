# Naver Pay Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Naver Pay (네이버페이) is the catalog identity (`display_name_kr`: 네이버페이). Catalog homepage identity is `https://new.pay.naver.com/`. This contract covers the two brand-owned Tier 1 sources the YAML token note names, plus the official logo guide listed with them in the source footer: the merchant-center public pre-login landing at `https://admin.pay.naver.com/front/m/v2`; the official bridge UI design spec at `https://developers.pay.naver.com/design/bridge`; and the official logo guide at `https://developers.pay.naver.com/design/brand/logo`. The YAML token note states that the merchant center main surface (`admin.pay.naver.com`) and the official developer design guide are the two brand-owned Tier 1 sources, and that the web app (`new.pay.naver.com`) is fully login-gated — tokens from pre-auth surfaces and official design spec. Every value stays attached to the surface or spec that established it. Reading those URLs as this contract's captured surfaces, keeping the login-gated web app as the capture boundary the YAML note states rather than as a second token surface, and keeping every value attached to the domain that established it, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

The merchant-facing landing at `admin.pay.naver.com` opens on a clean white canvas (`#ffffff`) with a cool blue-grey surface (`#f6f8fa`) that organizes content into ordered, airy zones. Primary text is near-black ink (`#1e1e23`) rather than pure black. The single "action" color, Naver Pay Green (`#09aa5c`), carries payment interaction: the YAML token note records `primary` as live Green 500 (`#09aa5c`) from the official bridge UI guide, and brand logo bg as Naver Pay Green (`#00de5a`) from the logo guide. Hero headlines use **NanumSquareNeo Bold (weight 700)** at 42px. Section and body text drop to **Pretendard** at weights 400–700. Depth is achieved through flat `#f6f8fa` surface tints rather than elevation — cards exist as tinted rectangles (border-radius 20–28px) against white or grey bands, with no drop shadows detected across the merchant surface. The green color system uses a careful four-step ramp: brand logo green (`#00de5a`) for signature logomark contexts, primary interactive green (`#09aa5c`), hover green (`#0b9552`), and two tinted surfaces (`#eef9f3`, `#e3f6ed`) for benefit badges and help cards. The hex values, the two families, the 42px / 700 hero, the 20–28px card radii, `box-shadow` absence, and the four-step ramp with the two tints are recorded. The source's own atmosphere sentence names Korea's dominant payment platform, embedded across the Naver super-app ecosystem — spanning shopping, booking, banking, and loyalty. Calling that visual language instantly recognizable in every merchant checkout context while remaining calm and trustworthy, calling `#1e1e23` a subtle premium move, calling the green bright, unambiguous, and instantly associated with Naver's broader brand identity, calling NanumSquareNeo's strokes distinctly Korean-optimized geometric and the 42px hero declarative Korean fintech confidence, calling this a two-font system where the display font persuades and the body font explains — a pattern common to Korean fintech products (Toss, Finda, Naver) — calling the generous rounded corners a soft, approachable character without the pill extremes of some payment apps, and calling the whole **shadow-free flatness**, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

Brand narrative recorded by the source, kept as narrative context. Naver Pay (네이버페이) launched in **2015** as Naver Corporation's integrated payment and financial services product, initially embedded within Naver Shopping and gradually expanding across the Naver super-app ecosystem. Part of **Naver Financial Corp** (네이버파이낸셜), a Naver subsidiary established in 2019 to house the company's financial infrastructure, Naver Pay benefits from Naver's dominant position in Korean search and content — making it one of the highest-reach payment touchpoints in Korea without requiring standalone acquisition. The product's positioning is built on the Naver ecosystem advantage: users who are already logged into Naver for search, news, blogs, and webtoons can pay across millions of merchant integrations without re-entering credentials. The loyalty layer — Naver Pay Points — creates a closed-loop reward system that keeps spending within the Naver ecosystem. The merchant-facing pitch ("매출을 만드는 가장 쉬운 방법") leans on this reach: integration with Naver Pay means exposure to Korea's most-used digital platform. What Naver Pay refuses: the cold institutional chrome of legacy Korean banking (no navy-and-gold, no heavy corporate formality). What it embraces: a clean, almost editorial layout; a Naver-green that signals trust and familiarity to tens of millions of daily Naver users; and a merchant experience that makes onboarding feel achievable even for a solo business operator. The source's own closing note records the 2015 launch and the 2019 establishment of Naver Financial Corp as widely documented public facts about the company rather than as a statement quoted from a single verified Naver source in that turn; those facts do not by themselves supply interface tokens. The refuses/embraces pairing, and classifying that founding-and-ecosystem narrative as context that does not by itself supply interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, classifying them as surface-or-control outcomes rather than fictional biographies, and recording that they do not come from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide. Each names a surface or control the source records.

- Act on the merchant-center landing CTA "가맹점 가입하기", or the recorded link "내 사업에 맞는 가입 유형 확인하기".
- Sign in from the secondary control "로그인".
- Read the official bridge UI design spec at `https://developers.pay.naver.com/design/bridge`.
- Follow the official logo guide at `https://developers.pay.naver.com/design/brand/logo`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section states in its own header, and again in its closing note, that its archetypes are fictional and that the names are illustrative; those biographies are not carried here and are not re-hosted in the sidecar. What the source independently records, in its own wording, as publicly observable Naver Pay user segments is the audience at a group level: Korean online merchants, small business operators, everyday shoppers using Naver Pay in checkout. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Distinctive traits

The eight traits below are the source's own Key Characteristics. The values in them are recorded; the groupings and the readings inside them ("Naver ecosystem's native display voice", "single payment-action color", "shadow-free flat system", "premium feel") are a derived editorial implementation inference from the verified surfaces — they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

- NanumSquareNeo Bold at hero scale — Naver ecosystem's native display voice
- Pretendard 400–700 for body and dense UI — clean, hangul-optimized
- Naver Pay Green (`#09aa5c`) as the single payment-action color
- Logo brand color (`#00de5a`) reserved for logomark and brand surface contexts
- Shadow-free flat system — tinted `#f6f8fa` surfaces + `#dcdee0` hairlines for separation
- Large-radius cards (20–28px) for warmth and approachability
- Near-black ink (`#1e1e23`) instead of pure black for premium feel
- Grayscale ladder from `#f6f8fa` to `#1e1e23` — eight defined steps

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide. The source's closing note names "ecosystem trust as the product" and "shadow-free for mobile commerce" as editorial readings connecting observed design to market positioning, not directly sourced Naver statements. Item 5 restates that the official logo guide, bridge UI, and benefit badge name color steps (Green 500, Grayscale 900) and measure spacing; that naming is the published spec's. The *UI implication* drawn from it is not.

1. **Ecosystem trust as the product.** Naver Pay's strongest design signal is the green — Koreans associate Naver green with search results, map pins, and webtoon bookmarks. Bringing that color into the payment button creates an instant trust transfer. *UI implication:* the green pay button must be unambiguous and undiluted — no secondary greens competing for attention.
2. **Flat and fast for mobile commerce.** Korea's mobile-first commerce context demands surfaces that load fast and render cleanly. *UI implication:* shadow-free flatness with surface tints is the right call — it keeps file sizes small and rendering sharp on Korean mobile networks.
3. **Benefit before process.** The merchant center leads with outcomes (revenue, settlement, points) rather than technical setup steps. *UI implication:* feature cards lead with benefit headlines, not feature names; the CTA is "시작하기" not "설치하기".
4. **Clear hierarchy through weight contrast.** Two fonts at many weights means the hierarchy must be clear — NanumSquareNeo Bold for hero scale, Pretendard for everything else. *UI implication:* do not mix NanumSquareNeo with body text; the contrast between the two fonts IS the hierarchy.
5. **Design guide as brand protection.** The official Naver Pay design guide (logo guide, bridge UI, benefit badge) is unusually explicit — color steps are named (Green 500, Grayscale 900), spacing is measured. *UI implication:* these specs should be treated as hard constraints by any integration using Naver Pay branding.

### Application rules

The source's eight Do rules. Keeping them as brand rules rather than as universal governance, and the justifications inside them — why green stays the single action color, why `#00de5a` stays off buttons — are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide. Rules that name the official logo guide or the green focus ring from the bridge UI remain those published-spec rules.

- Use NanumSquareNeo Bold (700) for hero-level Korean headlines — it carries the Naver ecosystem voice
- Use Pretendard 400–700 for all body, nav, and button labels
- Reserve Naver Pay Green (`#09aa5c`) for payment/purchase action elements — keep it the single action color
- Use `#00de5a` brand green only on the logo and brand surface contexts — not for UI buttons
- Separate sections with flat `#f6f8fa` tint bands and `#dcdee0` hairlines, not shadows
- Apply green focus rings on inputs — `#09aa5c` border signals the Naver Pay checkout context
- Use large border-radius (20–28px) on cards — warmth matters in a payment context
- Use near-black `#1e1e23` for primary text instead of pure black

### Avoid

The source's seven Don't rules. The reasons attached to them are a derived editorial implementation inference from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

- Use drop shadows on any surface — the system is flat-first
- Apply `#00de5a` brand green to interactive buttons or links — it's a logo color, not a UI color
- Use a second saturated accent alongside green — the system is monochromatic except for the blue link color
- Set headlines in Pretendard — NanumSquareNeo owns the hero display register
- Use pure black (`#000000`) for body text — the system uses warm near-black `#1e1e23`
- Create pill-shaped buttons for primary actions — the system uses moderate 8px radius buttons, not full-round
- Use the green colors for error states — errors use a separate red signal independent of the green system

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Official bridge UI names sit beside the YAML keys: Green 500 / Green 600 / Green 100 / Green 200, Grayscale 100 / 150 / 250 / 300 / 500 / 700 / 800 / 900. The official spec writing `#09AA5C` / `#0B9552` / `#EEF9F3` / `#E3F6ED` / `#1E1E23` / `#F6F8FA` / `#DCDEE0` sits beside the YAML lowercase. Catalog identity `primary_color` is `#09aa5c`, the same hex as `tokens.colors.primary`; they stay two writings, not a second green. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping catalog identity `primary_color` beside `tokens.colors.primary` rather than as a second green, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two keys that share `#ffffff`, keeping `#00de5a` on `tokens.colors.brand-green` rather than as a UI button fill, and attaching every role to the surface or spec that established it, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide. The hex values, the official step names, and the recorded uses are the source's own.

**Primary / Green**

- **Naver Pay Green** (`#09aa5c` / official `#09AA5C`, Green 500): Primary interactive color — payment CTAs, focus rings on inputs, active nav states, and all payment-action elements. Live-confirmed as Green 500 in the official bridge UI color system. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is this hex.
- **Green Hover** (`#0b9552` / official `#0B9552`, Green 600): darker shade for hover/pressed states on green interactive elements. Token-set path `tokens.colors.primary-hover`.
- **Brand Green** (`#00de5a`): The signature Naver Pay logomark background color. Brighter and more saturated than the interactive green — used exclusively for logo/brand surface contexts per the official logo guide. Token-set path `tokens.colors.brand-green`.

**Green Tint**

- **Green Tint 100** (`#eef9f3` / official `#EEF9F3`, Green 100): Soft green surface for benefit badges, guide cards, and success-state backgrounds. Token-set path `tokens.colors.green-tint-100`.
- **Green Tint 200** (`#e3f6ed` / official `#E3F6ED`, Green 200): Slightly deeper green tint for secondary success surfaces. Token-set path `tokens.colors.green-tint-200`.

**Neutral & Surface**

- **Canvas** (`#ffffff`): Page background, white card surfaces, button text on dark backgrounds. Token-set path `tokens.colors.canvas`.
- **Surface** (`#f6f8fa` / official `#F6F8FA`, Grayscale 100): cool-grey tinted surface for feature cards and content bands. Token-set path `tokens.colors.surface`.
- **Surface Alt** (`#f3f5f7`, Grayscale 150): slightly deeper surface variant. Token-set path `tokens.colors.surface-alt`.
- **Hairline** (`#dcdee0` / official `#DCDEE0`, Grayscale 250): primary border color for inputs, dividers, secondary button outlines. Token-set path `tokens.colors.hairline`.
- **Hairline Alt** (`#c8cacc`, Grayscale 300): stronger divider for prominent separation. Token-set path `tokens.colors.hairline-alt`.
- **On-Primary** (`#ffffff`): text on primary and dark fills. The same value as the canvas, kept as its own role rather than merged into it. Token-set path `tokens.colors.on-primary`.

**Text Hierarchy**

- **Ink** (`#1e1e23` / official `#1E1E23`, Grayscale 900): primary heading and body text; near-black with warmth. Token-set path `tokens.colors.ink`.
- **Body** (`#404048`, Grayscale 800): secondary text and card descriptions. Token-set path `tokens.colors.body`.
- **Muted** (`#767678`, Grayscale 700): nav links, tertiary text, metadata. Token-set path `tokens.colors.muted`.
- **Muted Light** (`#aaaaac`, Grayscale 500): placeholder text, disabled labels. Token-set path `tokens.colors.muted-light`.

**Interactive**

- **Link Blue** (`#007eff`): Accent link color for inline anchors in merchant context (e.g., "취급불가상품안내", "내 사업에 맞는 가입 유형 확인하기"). Token-set path `tokens.colors.link`.

`tokens.colors.canvas: #ffffff` is not `tokens.colors.on-primary: #ffffff`. `tokens.colors.primary: #09aa5c` is not `tokens.colors.brand-green: #00de5a` and not the active-nav text on the same hex. `tokens.colors.green-tint-100: #eef9f3` is not a second writing of the benefit-badge fill as a color token transferred onto another component. Source §4 Error Input records `1px solid #e53935` (error red, standard; not green-system) on the field; that hex is not a YAML `tokens.colors` key.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them. Source §5 names a 4px base and the same scale, spelled `4px, 8px, 12px, 16px, 20px, 28px, 40px, 60px`.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 20 | `tokens.spacing.lg` |
| xl | 28 | `tokens.spacing.xl` |
| xxl | 40 | `tokens.spacing.xxl` |
| section | 60 | `tokens.spacing.section` |

`tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 12` is not the green-tint card radius `12px` and not the badge font `12px`. `tokens.spacing.base: 16` is not the nav or button-default size `16px`. `tokens.spacing.lg: 20` is not the primary-CTA font `20px`. `tokens.spacing.xl: 28` is not `tokens.rounded.xl: 28` and not the subsection size `28px`. `tokens.spacing.xxl: 40` is not the section title `40px` and not the green-tint card padding `40px`. Source §5 also notes that the Hero CTA uses 18px vertical padding for a commanding 62px hit height on the main "가맹점 가입하기" button, and that card padding tends to 35–40px vertical; those figures sit on their components. 18px is not a YAML spacing step. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them. Source §5 names the same five steps with their uses.

| Step | Value | Use | Token-set path |
|---|---:|---|---|
| sm | 6 | inputs, secondary buttons — tight, utilitarian | `tokens.rounded.sm` |
| md | 8 | primary buttons, nav items — moderate, action-oriented | `tokens.rounded.md` |
| lg | 20 | standard content cards — the workhorse | `tokens.rounded.lg` |
| xl | 28 | showcase/benefit cards — generous, consumer-friendly | `tokens.rounded.xl` |
| full | 9999 | badges, pill chips — fully round | `tokens.rounded.full` |

`tokens.rounded.sm: 6` is not a spacing step. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 20` is not `tokens.spacing.lg: 20`. `tokens.rounded.xl: 28` is not `tokens.spacing.xl: 28`. `tokens.rounded.full: 9999` is a YAML step; source §5 spells the same step `9999px`. The green-tint guide card records `12px` on that control; that `12px` is not a YAML rounded step. Keeping the five steps as five keys, and keeping component radii on the controls, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, nav |
| Surface (Level 1) | `#f6f8fa` background shift | Card/section separation |
| Hairline (Level 2) | `1px solid #dcdee0` border | Input outlines, secondary button borders |

YAML `tokens.shadow.none` is `"none"`. Source §6 records that Naver Pay's merchant and developer surfaces are entirely shadow-free — `box-shadow: none` was confirmed across nav, hero, cards, buttons, and chips across both inspected surfaces. Depth is communicated via flat color bands and hairlines. The green color system does the work that shadows do elsewhere: a green focus ring on an input creates more depth signal than a soft shadow could. The last two sentences, and the source's comparison that this is consistent with modern Korean fintech (Finda, Toss mobile-web, KakaoBank) and keeps the surface feeling fast, clean, and mobile-native, are a derived editorial implementation inference from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Motion

The source attributes its token-level claims (§1–9) to live inspections of computed color, type, geometry, and shadow on the merchant center, the bridge UI spec, and the logo guide. The motion contract below sits in the source's philosophy layer (sections 10–15): the inspection record covers no transition, animation, duration, or easing observation. The durations, easing roles, motion rules, and reduced-motion sentence below are therefore a derived editorial implementation inference from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Button press, badge tap, checkbox check |
| `motion-standard` | 200ms | Card enter, modal open, dropdown reveal |
| `motion-slow` | 300ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Naver Pay evidence, so the curves are omitted here and only the roles and their uses are kept. Treating those curves as untraceable and omitting them, rather than promoting them as Naver Pay motion tokens, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, modals, dropdowns |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or specification document — does not satisfy that condition. Holding that five-kind per-component gate, rather than treating a named duration or a match against the published bridge UI as enough to promote a curve, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

Motion rules, as the source states them:

- Motion is minimal and purposeful — consistent with the flat, fast payment context.
- Green CTAs respond to press with a brief `#0b9552` color shift at `motion-fast`.
- Cards entering the viewport fade in from below at `motion-standard / ease-enter`.
- No bounce, spring, or overshoot — a payment interface signals reliability, not playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the checkout flow remains fully functional without any animation.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings — that the official bridge UI and logo guide do not by themselves publish a universal current typography token; that the merchant center computes NanumSquareNeo on the hero H2 and Pretendard on H3s, nav, and body; that no Naver Pay-exclusive distributed type family was verified; and that no fallback stack is recorded in the source as a family token — are a derived editorial implementation inference from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

| Evidence class | Resolution |
|---|---|
| Official product-use | The official bridge UI and logo guide name color steps and logomark green; they do not by themselves publish a universal current typography token. |
| Live computed surface-use | Merchant-center hero H2 "매출을 만드는 가장 쉬운 방법" computes NanumSquareNeo 42px / 700 / `#1e1e23`. H3s such as "Npay 포인트 혜택으로 고객의 구매를 더 쉽게" compute Pretendard 28px / 600. Nav computes Pretendard 16px / 400 / `#767678`. |
| Official distributed asset | No Naver Pay-exclusive distributed type family was verified in this pass. |
| Declared-only | None named in the source. |
| License | No font-license sentence is recorded in the source. |
| Outside this capture | Faces on surfaces other than the merchant-center landing, the bridge UI spec, and the logo guide are outside this capture. |

### Family

- **Display:** `NanumSquareNeo` — Token-set path `tokens.typography.family.display`. Naver's own typeface, used for hero-level headlines and primary CTAs at the largest scale. Bold (700) exclusively.
- **Body:** `Pretendard` — Token-set path `tokens.typography.family.body`. Used for all navigation, body copy, UI labels, buttons, and secondary headings. Weights 400, 500, 600, 700.
- Do not substitute a system face for NanumSquareNeo or Pretendard and present it as the brand type. Do not swap the two registers. That fallback prohibition, and reading NanumSquareNeo as the persuasive hero layer while Pretendard owns every functional UI text layer, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Type roles

Token-set `use` strings are kept verbatim. The longer §3 spellings sit beside them; neither was chosen as a replacement. YAML `lineHeight` stays the unitless ratio the YAML recorded. YAML typography keys are `display-hero`, `section`, `subsection`, `nav`, `body`, and `caption`. Source §3 adds Button Primary and Button Default as hierarchy rows; those two sit here as §3 writings and again on their components. Keeping the YAML `use` strings verbatim, keeping the YAML singles and the §3 longer spellings on separate readings, refusing to flatten a unitless ratio into a px, and keeping Button Primary / Button Default as §3 rows rather than as extra YAML typography keys, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

| Role | Font | Size | Weight | Line height | Token-set use | §3 notes |
|---|---|---:|---:|---:|---|---|
| Display Hero | NanumSquareNeo | 42px | 700 | 1.33 | Hero headline — NanumSquareNeo Bold, merchant center H2 | Merchant center hero H2 |
| Section Large | Pretendard | 40px | 700 | 1.25 | Section title — Pretendard Bold | "내 사업에는 어떤 방식이 맞을까?" |
| Sub-section | Pretendard | 28px | 600 | 1.50 | Feature card header — Pretendard SemiBold | Feature card headers |
| Nav Link | Pretendard | 16px | 400 | 1.50 | Nav link — Pretendard Regular | Top nav items, muted gray |
| Button Primary | NanumSquareNeo | 20px | 700 | 1.00 | *(not a YAML typography key; §3 row)* | Hero CTA "가맹점 가입하기" |
| Button Default | Pretendard | 16px | 500 | 1.50 | *(not a YAML typography key; §3 row)* | Secondary/outlined buttons |
| Body | Pretendard | 14px | 400 | 1.50 | Body copy — Pretendard Regular | Card body, descriptions |
| Caption / Footer | Pretendard | 13px | 400 | 1.46 | Footer link — Pretendard Regular | Footer links, fine print |

### Typography principles

The four rules below are the source's own. Their reasoning — what a weight split or a 14px body is *for* — is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

- **Two fonts, two registers**: NanumSquareNeo owns the persuasive hero layer; Pretendard owns every functional UI text layer. They do not swap.
- **Bold for action**: CTA labels run at 700 weight; body text at 400. The weight contrast is the clearest hierarchy signal.
- **Hangul-first sizing**: 14px body is deliberate — the sweet spot for dense hangul legibility in data-heavy financial layouts.
- **Display restraint**: Large headlines are in Korean ("매출을 만드는 가장 쉬운 방법"), never in English — the brand speaks to Korean merchants in their language.

### Assets

- Catalog logo entry: type `favicon`, slug `https://www.google.com/s2/favicons?domain=pay.naver.com&sz=128`. That is a third-party favicon proxy rather than a captured first-party Naver Pay mark, and it is recorded as the logo entry on those terms.
- Official logo guide: brand logomark background green `#00de5a` (live DOM: rgb(0,222,90)) — brand logomark context ONLY. Naver green (secondary logo context) `#09aa5c` (same as interactive Green 500). Login page (nid.naver.com redirect): rgb(9,170,92) = `#09aa5c` confirmed on sign-in button. That confirmation is attached to the sign-in button on that redirect; it is not a token surface for other values.
- Product illustrations and screenshots carry no shadow at any size — consistent with the flat system.

Reading the favicon URL as an identity pointer rather than as a first-party mark, reading `#00de5a` as a logomark color rather than as a UI button fill, attaching the nid.naver.com redirect confirmation to the sign-in button rather than as a token surface for other values, and reading "no shadow at any size" as consistent with the flat system, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full. Token-level claims (§1–9) are sourced from the three live inspections. This table sits in the source's philosophy layer (sections 10–15). The bridge UI error border restated in the Error (form validation) row is the published spec's; the remaining treatments describe how those states would be built in this system. Preserving the table as the source wrote it, rather than as a computed observation of each row, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

| State | Treatment |
|---|---|
| **Empty (no merchant transactions)** | White canvas. Ink Navy (`#1e1e23`) single line at body size with plain Korean explanation. One green CTA to set up payment. No illustration clutter. |
| **Loading (merchant dashboard first paint)** | Skeleton blocks on `#f6f8fa` surface at final card dimensions, 20px radius. No shimmer shadow — flat pulse consistent with the shadow-free system. |
| **Loading (transaction list refresh)** | Flat inline progress indicator; previous data stays visible. No full-page block. |
| **Error (payment failed)** | Inline message in near-black ink with plain Korean explanation and a retry action. No generic "오류가 발생했습니다" alone — states what went wrong and next step. |
| **Error (form validation — bridge UI)** | Field-level message below the input in red; describes what's valid, not just "필수". Green focus ring switches to red border on error field. |
| **Success (payment complete)** | Brief inline confirmation. Green tint (`#eef9f3`) background with `#09aa5c` text confirmation. Transaction reference shown immediately. No confetti. |
| **Success (merchant onboarded)** | Calm confirmation page in Pretendard. Next-step action highlighted with green CTA. |
| **Skeleton** | `#f6f8fa` blocks at final dimensions, 20–28px radius, flat pulse. Consistent with card shapes. |
| **Disabled** | Muted Light (`#aaaaac`) text; surfaces reduce opacity. Green elements fade to muted grey rather than disappear — avoids losing the brand signal entirely. |
| **Benefit badge (active)** | Green tint `#eef9f3` surface with `#09aa5c` text, full-pill shape — "N% 적립" or similar. Activates when merchant has configured point benefits. |

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, labelling YAML components with the primitive type the token set records, refusing to attach a Primitive type to the §4-only Error Input writing, refusing to treat a generic Focus capture as `focus-visible` treatment, and refusing to treat this as a complete state-coverage claim, are a derived editorial implementation inference from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. The source records a Focus Input with a green `#09aa5c` border from the bridge UI spec; that is a generic focus observation, a different evidence type from a `focus-visible` treatment. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. The YAML token set records `button-primary`, `button-secondary`, `button-green`, `card-surface`, `card-benefit`, `card-green-tint`, `badge-green`, `badge-ink`, `input-default`, `input-focus`, and `nav-link`. The §4 Error Input writing is not in the token set.

### Primary CTA (Hero)

- Role: Main landing page action — "가맹점 가입하기" (merchant signup)
- Primitive type: `button` · Kind: interactive
- Domain: merchant center
- Background: `#1e1e23`
- Text: `#ffffff`
- Radius: 8px
- Padding: `18px 24px` (YAML); source §5 also writes 18px vertical padding
- Height: 62px
- Font: 20px / 700 NanumSquareNeo (YAML `20px / 700 NanumSquareNeo`; §3 / §4 also write 20px NanumSquareNeo weight 700, line height 1.00)
- Token-set use: `Primary hero CTA (가맹점 가입하기)`
- Observed: default on the merchant-center landing
- The 62px height is this control's geometry. The `8px` radius is this control's radius; it is not `tokens.spacing.sm: 8`. The `18px 24px` padding is this control's padding; 18px is not a YAML spacing step. The 20px font is this control's font; it is not `tokens.spacing.lg: 20`. Reading those figures as this button's geometry rather than those YAML steps is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the merchant-center landing |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; visual treatment omitted |
| disabled | applicable | A signup CTA can be gated; the state contract records muted-light text and reduced opacity |
| loading | not-applicable | The control hands off to merchant signup; it runs no operation in place that could be pending |
| error | not-applicable | Nothing resolves on this control — it hands off — so no failure outcome can render on it |
| success | not-applicable | Handing off to signup is not an action-outcome confirmation on the control |

### Secondary (Outlined)

- Role: "로그인" — secondary nav-level action
- Primitive type: `button` · Kind: interactive
- Domain: merchant center
- Background: `#ffffff`
- Text: `#1e1e23`
- Radius: 6px
- Padding: `10px 13px`
- Height: 44px
- Border: `1px solid #dcdee0`
- Font: 16px / 500 Pretendard (YAML `16px / 500 Pretendard`; §3 Button Default also writes 16px Pretendard weight 500, line height 1.50)
- Token-set use: `Secondary action (로그인)`
- The 44px height is this control's geometry. The `6px` radius is this control's radius; it is `tokens.rounded.sm` on this control, not a spacing step. The 16px font is this control's font; it is not `tokens.spacing.base: 16`. Reading those figures as this button's geometry rather than those YAML steps is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the secondary nav-level action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; visual treatment omitted |
| disabled | applicable | A login control can be gated; visual treatment omitted |
| loading | not-applicable | The control hands off to login; it runs no operation in place that could be pending |
| error | not-applicable | Nothing resolves on this control, so no failure outcome can render on it |
| success | not-applicable | Handing off to login is not an action-outcome confirmation on the control |

### Green Payment Button

- Role: Primary payment/checkout CTA — the green pay button that appears in merchant checkout contexts
- Primitive type: `button` · Kind: interactive
- Domain: checkout / official bridge UI (not the merchant-center hero)
- Background: `#09aa5c`
- Text: `#ffffff`
- Radius: 8px
- Font: 16px / 700 Pretendard
- Token-set use: `Green payment CTA — primary pay action in checkout`
- Official bridge UI button spec (source comment, A3): primary 60% width / secondary 40% (payment completion flow)
- No height or padding is recorded for this control in the token set or in §4; none is supplied here.
- This control's 16px / 700 Pretendard is not the merchant-center hero's 20px / 700 NanumSquareNeo, and its fill is not the hero's `#1e1e23`. The `8px` radius is this control's radius; it is not `tokens.spacing.sm: 8`. Reading those figures as this checkout button's geometry rather than as the merchant-center hero, and keeping the 60% / 40% width spec on the payment completion flow rather than on the merchant-center landing, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared as the primary pay action in checkout |
| hover | applicable | Pointer-web payment button; Green Hover `#0b9552` is named for hover/pressed on green interactive elements; that named hover is recorded here as the source's hover/pressed writing, not as a `focus-visible` treatment |
| focus-visible | applicable | Keyboard-reachable action control; visual treatment omitted |
| disabled | applicable | A pay action can be gated; the state contract records green elements fading to muted grey rather than disappearing |
| loading | applicable | The control commits a payment in place, so it can report in-progress; treatment omitted |
| error | applicable | The state contract names Error (payment failed) as an inline message with a retry action on a failed payment |
| success | applicable | The state contract names Success (payment complete) as a brief inline confirmation with green tint `#eef9f3` and `#09aa5c` text |

### Surface Feature Card

- Role: Merchant type info cards and step info cards — shadow-free flat surface
- Primitive type: `card`
- Domain: merchant center
- Background: `#f6f8fa`
- Radius: 20px
- Token-set use: `Feature content card on grey surface (no shadow)`
- Source §5 also records feature cards at fixed heights: 208px step cards, 480px type info cards
- Kind omitted. The source records this as a content container with no interactive-kind evidence, so no Core §4.4 state-applicability map is declared and it is not recast as a control. The `20px` radius is this card's geometry; it is not `tokens.spacing.lg: 20`. Reading that figure as this card's geometry, and omitting kind rather than inventing it, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Benefit Showcase Card

- Role: Larger benefit showcase panels with more corner radius — consistent shadow-free flatness
- Primitive type: `card`
- Domain: merchant center
- Background: `#f6f8fa`
- Radius: 28px
- Token-set use: `Benefit/feature showcase card — larger radius`
- Source §5 also records 420px showcase cards
- Kind omitted, on the same grounds as the surface feature card. The `28px` radius is this card's geometry; it is not `tokens.spacing.xl: 28` and not the subsection size `28px`. Reading that figure as this card's geometry, and omitting kind rather than inventing it, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Green Tint Guide Card

- Role: Help/guide cards — the green tint marks Naver Pay branded informational surfaces
- Primitive type: `card`
- Domain: merchant center / official spec (canonical fill `#eef9f3`)
- Background: `#eef9f3`
- Text: `#404048`
- Radius: 12px
- Padding: `40px 26px`
- Token-set use: `Guide/help card on green-tinted surface`
- Kind omitted, on the same grounds as the other cards. The `12px` radius is this card's geometry; it is not `tokens.spacing.md: 12` and not a YAML rounded step. The `40px` in the padding is this card's padding; it is not `tokens.spacing.xxl: 40` and not the section title `40px`. `26px` is this card's horizontal padding; it is not a YAML spacing step. Reading those figures as this card's geometry, and omitting kind rather than inventing it, are derived editorial implementation inferences from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Benefit Badge (Green)

- Role: Naver Pay point/benefit highlight tag
- Primitive type: `badge` · Kind: non-interactive
- Background: `#eef9f3`
- Text: `#09aa5c`
- Radius: 9999px (full pill)
- Font: 12px / 400 Pretendard
- Token-set use: `Naver Pay point/benefit badge`
- Additional named appearance (outside the seven canonical states): Benefit badge (active) — "N% 적립" or similar, when merchant has configured point benefits
- Kind reason: a badge displays a point/benefit status. The source names no action on the badge itself, so it declares no state-applicability map. The `12px` font is this badge's font; it is not `tokens.spacing.md: 12`. The `9999px` radius is this badge's geometry; it is not only `tokens.rounded.full: 9999` rewritten as a spacing step. Treating this benefit badge as a status marker rather than a control, and reading those figures as this badge's geometry rather than those YAML steps, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Dark Label Badge

- Role: Dark label — partner tags, count badges
- Primitive type: `badge` · Kind: non-interactive
- Background: `#1e1e23`
- Text: `#ffffff`
- Radius: 9999px (full pill)
- Font: 12px / 400 Pretendard
- Token-set use: `Dark label badge`
- Kind reason: a badge displays a partner or count label. The source names no action on the badge itself, so it declares no state-applicability map. Treating this dark label badge as a status marker rather than a control is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Default Input

- Role: Default text field state (휴대폰 번호 입력, bridge UI pattern)
- Primitive type: `input` · Kind: interactive
- Domain: official bridge UI spec
- Background: `#ffffff`
- Text: `#1e1e23`
- Border: `1px solid #dcdee0`
- Radius: 6px
- Font: 16px / 400 Pretendard
- Token-set use: `Default text input (from bridge UI spec)`
- YAML also records `input-focus` as a second token-set row: Focused text input — green border. Source §4 Focus Input Use: Active/focused text field — green border is the pay brand's focus signal. Observed focus treatment: border `1px solid #09aa5c`. It is recorded here as the generic focus observation it is, and is not carried into the `focus-visible` row.
- Source §4 Error Input (not in the token set): Border `1px solid #e53935` (error red, standard; not green-system). Use: Validation error state per bridge UI spec. The longer §14 writing sits in the state contract above.
- Source §8 also records input fields at 44px height with a clear focus ring (green border). That 44px is this field's layout measurement; it is not a YAML spacing step.
- The `6px` radius is this field's radius; it is `tokens.rounded.sm` on this control, not a spacing step. The 16px font is this field's font; it is not `tokens.spacing.base: 16`. Reading those figures as this field's geometry, and keeping the recorded green border as generic focus rather than as `focus-visible` treatment, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared as the default text field from the bridge UI spec |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; treatment omitted because the recorded green border is a generic focus observation, a different evidence type |
| disabled | applicable | A text field can be gated; the state contract records muted-light `#aaaaac` labels |
| loading | not-applicable | The field accepts a value; in-progress work is not a treatment on the field itself |
| error | applicable | Declared: `1px solid #e53935` per bridge UI spec; field-level message below the input in red, describing what's valid, not just "필수" |
| success | not-applicable | The documented field outcomes are default, focus, and validation error; a filled value is not an action-outcome confirmation on the field |

### Top Nav

- Role: Horizontal top navigation with logo left-aligned
- Primitive type: `tab` · Kind: interactive
- Domain: merchant center
- Background: `#ffffff`
- Text: `#767678` (nav links), `#1e1e23` (logo)
- Font: 16px / 400 Pretendard
- Radius on items: 8px
- Height: 44px
- Token-set use: `Top nav item`
- Active (an additional recorded variant, outside the seven canonical states): green `#09aa5c` text on active item (YAML `active: "text #09aa5c on active"`)
- The `8px` radius is this item's geometry; it is not `tokens.spacing.sm: 8`. The 16px font is this item's font; it is not `tokens.spacing.base: 16`. The 44px height is this nav's geometry, shared as a number with the secondary button and the input layout measurement, not transferred as one token. Treating this top nav item as a destination-select control, so loading, error, and success are not-applicable on the item itself, and reading those figures as this nav's geometry rather than those YAML steps, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the top nav item |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A nav destination can be unavailable; visual treatment omitted |
| loading | not-applicable | A nav item selects a destination; the item itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Selecting a nav item is not an action-outcome confirmation on the tab |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and grid

- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 28px, 40px, 60px
- Centered single-column hero with 42px NanumSquareNeo headline as the anchor
- Feature cards arranged in horizontal scroll/wrap rows (merchant benefit cards, type selector cards)
- Full-width grey surface bands (`#f6f8fa`) alternate with white sections for content rhythm
- Feature cards sit at fixed heights (420px showcase cards, 208px step cards, 480px type info cards)
- Hero CTA uses 18px vertical padding for a commanding 62px hit height on the main "가맹점 가입하기" button
- Card padding tends to 35–40px vertical for generous content breathing room

### Whitespace

- **Generous card padding**: Cards breathe — 35–40px vertical internal padding on showcase cards
- **Flat segmentation**: sections separate by `#f6f8fa` vs `#ffffff` tint, never shadows
- **Large radius creates warmth**: 20–28px card radius softens what could be a cold financial layout

The recorded whitespace account — breathing room, flat segmentation by tint, large radius as warmth in a payment context — is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide. The measured parts are the 35–40px card padding, the 20–28px radii, the 420 / 208 / 480px card heights, and the two band colors.

### Border radius in layout

- Small (6px): inputs, secondary buttons — tight, utilitarian
- Medium (8px): primary buttons, nav items — moderate, action-oriented
- Large (20px): standard content cards — the workhorse
- XLarge (28px): showcase/benefit cards — generous, consumer-friendly
- Full (9999px): badges, pill chips — fully round

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, cards stack |
| Tablet | 640-1024px | 2-column card grids, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column feature cards, centered hero |

### Touch targets and collapsing

- Primary CTA at 62px height — very comfortable tap target
- Secondary nav buttons at 44px height — standard Korean mobile minimum
- Input fields at 44px height with clear focus ring (green border)
- Hero: 42px NanumSquareNeo headline compresses on mobile, weight 700 maintained
- Feature cards: horizontal multi-card → single-column stacked
- Tinted surface bands: maintain full-width treatment at all sizes
- Nav: horizontal links collapse to condensed top navigation on mobile
- Product illustrations and screenshots carry no shadow at any size — consistent with flat system
- Cards maintain 20–28px radius across breakpoints

The inspection covers computed styles on the merchant-center landing and the two official spec pages. The breakpoint table, the collapsing strategy, the image behavior, and the tap-comfort reading of the 62px and 44px heights are a derived editorial implementation inference from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide. Those heights are the named elements' recorded measurements, not a captured cross-viewport pass.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Brand-published lines

Voice samples (verbatim from live surfaces):

- "매출을 만드는 가장 쉬운 방법" — hero H2 (merchant center). *(verified live 2026-06-22)*
- "Npay 포인트 혜택으로 고객의 구매를 더 쉽게" — benefit H3 (merchant center). *(verified live 2026-06-22)*
- "사업자라면 누구나 쉽게 시작할 수 있어요" — onboarding H3 (merchant center). *(verified live 2026-06-22)*

Labels and spec lines recorded in the source, byte-exact:

- CTAs: "가맹점 가입하기", "내 사업에 맞는 가입 유형 확인하기", "로그인"
- Section title: "내 사업에는 어떤 방식이 맞을까?"
- Inline anchors: "취급불가상품안내", "내 사업에 맞는 가입 유형 확인하기"
- Design guide text: "로고 사이의 간격 길이를 사용하여 로고 바깥쪽에 최소 여백을 둡니다."
- Error / guidance: "잘못된 사용은 브랜드 이미지를 왜곡하거나 커뮤니케이션 효과를 약화하므로 사용상 주의를 필요로 합니다."
- Principle 3 CTA pair: "시작하기" not "설치하기"
- State-contract strings: "오류가 발생했습니다", "필수", "N% 적립"
- Outcome vocabulary named in the voice section: 매출, 정산, 포인트 혜택

The English renderings the source places beside some of those lines sit beside the published strings and never replace them: "The easiest way to generate revenue"; "Make it easier for customers to buy". Keeping those English renderings beside the published strings rather than substituting them is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide. The published copy is Korean.

### Voice

The characterization below and the five context rows are a derived editorial implementation inference from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide. The published strings and their live markers are the measured parts.

Naver Pay's voice is **practical, merchant-friendly, and confidence-instilling** — a platform that speaks to Korean business owners in plain, efficient Korean. The merchant center headline "매출을 만드는 가장 쉬운 방법" ("The easiest way to generate revenue") sets the register: direct, benefit-first, zero hype. Copy is grounded in concrete outcomes (매출, 정산, 포인트 혜택) and treats the merchant as a capable operator who wants clear answers, not marketing language.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, benefit-first. "매출을 만드는 가장 쉬운 방법." Confident without superlatives. |
| Feature descriptions | Outcome-framed. "Npay 포인트 혜택으로 고객의 구매를 더 쉽게" (Make it easier for customers to buy). |
| CTAs | Direct, specific. "가맹점 가입하기", "내 사업에 맞는 가입 유형 확인하기". |
| Design guide text | Matter-of-fact spec language. "로고 사이의 간격 길이를 사용하여 로고 바깥쪽에 최소 여백을 둡니다." |
| Error / guidance | Calm, actionable. "잘못된 사용은 브랜드 이미지를 왜곡하거나 커뮤니케이션 효과를 약화하므로 사용상 주의를 필요로 합니다." |

The role notes beside those lines — declarative, benefit-first, outcome-framed, matter-of-fact spec language, calm and actionable — are part of the same editorial reading. Those role notes are a derived editorial implementation inference from the verified surfaces; they are not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Forbidden register

The same editorial reading names a forbidden register: technical payment jargon left unexplained, aggressive urgency cues, English-language hero copy, exclamation-heavy sales tone. This is an authoring rule for writing in this style. Naming that forbidden register, and classifying it as an authoring rule rather than as a Naver Pay-published policy, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

### Locale

The captured merchant-center landing and every published line above are Korean. Display restraint in the type system: large headlines are in Korean, never in English. The 14px / 400 / 1.50 Pretendard body is the recorded body role. The reading of that size as hangul-first sizing — the sweet spot for dense hangul legibility in data-heavy financial layouts — is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide. Keep the published strings in Korean rather than substituting a translation for them.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide.

- the exact cubic-bezier curves behind the `ease-enter`, `ease-exit`, and `ease-standard` roles
- the transition properties behind the recorded durations, until a per-component computed observation records all five motion evidence kinds
- hover appearance of controls other than the named `#0b9552` color shift on green interactive elements
- `focus-visible` visual treatment — the recorded input border is a generic focus observation
- height and padding on the green payment CTA, which the token set and §4 do not record
- tokens on the login-gated web app `new.pay.naver.com` beyond the pre-auth surfaces and official design spec the YAML note names
- an observed appearance for the philosophy-layer state rows other than the bridge UI error border already recorded on the input
