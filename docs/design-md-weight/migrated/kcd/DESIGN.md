# Korea Credit Data Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Korea Credit Data (한국신용데이터) is the SME-fintech company behind 캐시노트 (CashNote), Korea's most widely used business-management platform for small-business owners (사장님). This contract covers the two first-party surfaces the source inspected for tokens on 2026-06-26: the corporate site at `https://kcd.co.kr` and the flagship product page at `https://cashnote.kr`. The YAML token set is `live-extract`. Every value stays attached to the surface or evidence class that established it. Reading those two URLs as this contract's inspected token surfaces, keeping every value attached to the surface that established it, and refusing to treat one surface's heading color or CTA geometry as the other surface's, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.

Across both surfaces the canvas is pure white (`#ffffff`), segmented by cool near-white surfaces — a grey surface (`#f4f7f9`) and an even paler card surface (`#f9fbfc`). The single saturated brand accent is a confident action blue (`#2d91ff`), reserved for CTAs and key interactive text; a deeper pressed blue (`#0257d7`) backs it for strong states. The hex values and the reservation of the saturated blue are recorded. Calling the surfaces calm, data-grade financial software rather than a loud consumer app, calling the effect trustworthy and engineered, and reading the company as a fintech that handles real money for hundreds of thousands of merchants and looks like it, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Korea Credit Data (한국신용데이터) was founded in **2016** by **김동호 (Kim Dong-ho, CEO)** to solve a structural gap in Korea's small-business economy: the country's millions of independent shop owners generated rich commercial data — card sales, settlements, cash flow — but had no simple way to see or use it. Kim, who had previously founded the survey company 아이디인큐 (now 오픈서베이), built KCD around a single conviction stated on its site: that "누구나 기술 혜택을 누릴 수 있는 세상" (a world where anyone can enjoy the benefits of technology) should include the corner-store owner, not just large enterprises. The company's flagship product, **캐시노트 (CashNote)**, launched in 2017 as a business-management service delivered first through KakaoTalk: a sole proprietor could see consolidated card-sales and settlement data without installing complex accounting software. CashNote grew into one of Korea's most widely used SME platforms — the homepage frames it as serving "사업자 경영관리" across "관리 거래액" and a large base of "캐시노트 이용 사업장" — expanding from sales tracking into payments, supplies purchasing, lending/credit, and consultant services, all under the "사업의 모든 순간" (every moment of business) framing. What KCD refuses, visible in its design: the heavy, intimidating chrome of legacy financial software (no shadow-stacked enterprise dashboards), and the dark-pattern urgency of consumer fintech marketing. What it embraces: a flat, fast, mobile-native interface; a single trustworthy action blue; large plain-Korean headlines; and an empathy-first stance toward the 사장님 it explicitly names as the starting point for every product decision. The year 2016, 김동호, 아이디인큐 / 오픈서베이, the 2017 KakaoTalk launch, the homepage frames "사업자 경영관리" / "관리 거래액" / "캐시노트 이용 사업장", the expansion list, "사업의 모든 순간", and that closing refuse-and-embrace sentence are the source's own narrative facts; they do not by themselves supply interface tokens. The source's philosophy-layer note records that those founding details beyond the live homepage mission text are widely documented public facts, not directly quoted from a verified KCD statement in that turn; mission phrases ("누구나 기술 혜택을 누릴 수 있는 세상", "사업의 모든 순간", "공감") are verbatim from the live homepage. Classifying that founding-and-thesis narrative as context that does not by itself supply interface tokens, and keeping the philosophy-layer authority bound on the founding details, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification. Each names a surface or control the source records.

- Start 캐시노트 with "캐시노트 시작하기" or "앱 다운로드" on `cashnote.kr`.
- Read the corporate surface at `https://kcd.co.kr` ("서비스 보기", "자세히 보기").
- Read dated metrics ("2026년 5월 기준") beside "사업자 경영관리 서비스" / "관리 거래액".
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three entries as fictional archetypes informed by publicly observable KCD / CashNote user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: small-business owners (사장님); independent shop owners; sole proprietors. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not KCD-authored or a separately published UI specification.

- Pretendard throughout — Bold (700) for display, Regular (400) for body, hangul-optimized
- Single saturated action blue (`#2d91ff`) reserved for CTAs and key interactive text
- Deeper pressed blue (`#0257d7`) for strong/active states
- Deep navy (`#192d82`) product headings; warmer corporate ink (`#1e2137`); near-black (`#0c1120`) for max contrast
- Flat depth: `box-shadow: none` everywhere; tinted surfaces (`#f4f7f9`, `#f9fbfc`) + `#eeeeee` hairline do the separating
- Blue tints (`#e2f3ff`, `#cae7ff`, `#f3faff`) for highlight cards, metric chips, and reversed text
- Soft rounding ladder — 6px corporate ghost, 12–16px product CTAs, 20px cards
- Cool neutral text ladder (`#44546f` → `#728094` → `#a4aeba`)

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not KCD-authored or a separately published UI specification. The source states them in its own Principles section. Every *UI implication* below is that same derived class. The source's philosophy-layer note records that interpretive claims such as "one action, one color" and "flat and fast as a rejection of legacy financial software chrome" are editorial readings connecting observed design to stated positioning, not directly sourced KCD statements.

1. **Empathy for the 사장님 first.** KCD states that every concern "begins from empathy for the business owner." *UI implication:* lead with the owner's real moment and plain language; never with the product's feature list or jargon.
2. **Data and connection, made simple.** The mission is to resolve business problems "데이터와 연결로." *UI implication:* surface consolidated numbers clearly (dated metrics, navy stat labels) and hide the underlying complexity.
3. **One action, one color.** Action blue (`#2d91ff`) means "do this." *UI implication:* reserve the saturated blue for CTAs and key interactive text so the next step is never ambiguous.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; reach for blue tint, not elevation, to emphasize.
5. **Tech benefits for everyone.** "누구나 기술 혜택을 누릴 수 있는 세상." *UI implication:* keep targets large, copy plain, and the interface approachable to a non-technical owner.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not KCD-authored or a separately published UI specification.

- Set everything in Pretendard — Bold (700) for display, Regular (400) for body
- Reserve action blue (`#2d91ff`) for CTAs and key interactive text — keep it the single action color
- Use the deeper blue (`#0257d7`) for pressed/active states
- Use deep navy (`#192d82`) for product headings and corporate ink (`#1e2137`) for the company site
- Separate sections with flat tints (`#f4f7f9` / `#f9fbfc`) and `#eeeeee` hairlines, not shadows
- Highlight with blue tints (`#e2f3ff` / `#cae7ff`) instead of elevation
- Use the soft-CTA pattern — blue label on a grey (`#f4f7f9`) fill at 16px radius
- Round cards generously at 20px

### Avoid

The source states these seven as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not KCD-authored or a separately published UI specification.

- Use drop shadows for elevation — KCD is a flat, shadow-free system
- Spread the action blue across many elements — it dilutes the single-action signal
- Use pure black for text — reach for ink (`#1e2137`), deep navy (`#192d82`), or near-black (`#0c1120`)
- Mix in a second saturated accent color — blue is the only hue
- Set body text in Bold — Bold is for display and CTAs
- Use a different font for headlines — Pretendard owns both display and body
- Use sharp/square corners on cards — cards round at 20px

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, and keeping every heading color on the surface the source attached it to, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Action Blue** (`#2d91ff`): Primary brand and action color. The saturated blue on CTA labels, interactive text, and emphasis — the system's single "do this" color, confirmed live on both `kcd.co.kr` and `cashnote.kr`. Token-set path `tokens.colors.primary`.
- **Pressed Blue** (`#0257d7`): Deeper blue for pressed/active and strong-emphasis states on the action blue. Token-set path `tokens.colors.primary-deep`.
- **Deep Navy** (`#192d82`): Primary heading color on the product surface — a dark, trustworthy blue that carries the CashNote headlines and stat labels. Token-set path `tokens.colors.navy`.
- **Corporate Ink** (`#1e2137`): Primary text/heading color on the company site; nav links and body. A dark blue-charcoal used instead of pure black. Token-set path `tokens.colors.ink`.
- **Ink Deep** (`#0c1120`): Near-black for maximum-contrast text moments. Token-set path `tokens.colors.ink-deep`.
- **Body Slate** (`#44546f`): Secondary body copy and descriptions. Token-set path `tokens.colors.body`.
- **Muted Slate** (`#728094`): Tertiary text, captions, metadata. Token-set path `tokens.colors.muted`.
- **Faint Blue-Grey** (`#a4aeba`): Disabled text, placeholders, lowest-emphasis labels. Token-set path `tokens.colors.faint`.
- **Pure White** (`#ffffff`): Page background, white cards, text reversed on blue/navy. Token-set path `tokens.colors.canvas`.
- **Surface Grey** (`#f4f7f9`): Cool grey surface for soft buttons and segmented sections. Token-set path `tokens.colors.surface`.
- **Surface Alt** (`#f9fbfc`): Palest near-white card surface. Token-set path `tokens.colors.surface-alt`.
- **Tint Blue** (`#e2f3ff`): Light blue tint for highlight cards and metric chips. Token-set path `tokens.colors.tint-blue`.
- **Tint Blue Strong** (`#cae7ff`): Stronger blue tint for emphasized blue surfaces. Token-set path `tokens.colors.tint-blue-strong`.
- **Pale Blue** (`#f3faff`): The palest blue, used for text reversed on a saturated blue field. Token-set path `tokens.colors.pale-blue`.
- **Hairline** (`#eeeeee`): Thin borders and dividers — the primary separation device in the shadowless system. Token-set path `tokens.colors.hairline`.
- **On Primary** (`#ffffff`): White text/iconography on blue and navy fills. Token-set path `tokens.colors.on-primary`. Same hex as `tokens.colors.canvas` on a second key.

The YAML token note records: primary = live action blue (`#2d91ff`), confirmed across both `kcd.co.kr` corporate and `cashnote.kr` product surfaces; pressed/strong blue (`#0257d7`). Deep navy (`#192d82`) carries product headings; corporate ink (`#1e2137`). Near-shadowless flat system; separation via tinted surfaces (`#f4f7f9` / `#f9fbfc`) + blue tints (`#e2f3ff` / `#cae7ff`). Keeping that note as the token-set's own writing, rather than as a separately published color specification, is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them. The source §5 also writes a base unit of `8px` and the same scale as `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px`.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 32 | `tokens.spacing.xl` |
| xxl | 48 | `tokens.spacing.xxl` |
| section | 64 | `tokens.spacing.section` |

`tokens.spacing.sm: 8` is not the 8px base-unit sentence written as a second key. `tokens.spacing.md: 12` is not `tokens.rounded.md: 12` and not the compact-button / input radius. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16`, not the Body or Button type-role 16, and not the soft-CTA `0 16px` padding. `tokens.spacing.lg: 24` is not the outline-CTA `0 24px` padding and not a type-role size. `tokens.spacing.xl: 32` is not the corporate-ghost `15px 32px` padding. `tokens.spacing.xxl: 48` is not the soft-CTA `48px` height. `tokens.spacing.section: 64` is not a type-role size. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them. The source §5 writes the same ladder with px spellings and uses: Small (6px) corporate ghost buttons; Medium (12px) compact buttons, inputs; Large (16px) product CTAs; XLarge (20px) cards — the workhorse; Full (9999px) pills, avatars.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 6 | `tokens.rounded.sm` |
| md | 12 | `tokens.rounded.md` |
| lg | 16 | `tokens.rounded.lg` |
| xl | 20 | `tokens.rounded.xl` |
| full | 9999 | `tokens.rounded.full` |

`tokens.rounded.sm: 6` is the corporate-ghost radius, not a spacing step. `tokens.rounded.md: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.lg: 16` is not `tokens.spacing.base: 16`. `tokens.rounded.xl: 20` is not a spacing step. `tokens.rounded.full: 9999` stays unitless; the §5 spelling `9999px` sits beside it and is not a replacement of the YAML integer. Reading those figures as the rounded keys named beside them, rather than as shared numerals across spacing, is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

### Elevation

Token-set path `tokens.shadow.none` is `"none"`. Live inspection found `box-shadow: none` across heroes, nav, headings, buttons, and cards on both surfaces. Depth and grouping come from the four treatments the source names:

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f4f7f9` / `#f9fbfc` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #eeeeee` border | Dividers, field outlines |
| Accent (Level 3) | `#e2f3ff` / `#cae7ff` blue tint | Highlight cards, metric chips — emphasis via color |

When emphasis is needed the system reaches for color — the action blue (`#2d91ff`), the deep navy (`#192d82`), or a blue tint (`#e2f3ff` / `#cae7ff`) — never elevation. The source's shadow-philosophy sentence that this keeps a money-handling product feeling clean, fast, and mobile-native rather than heavy is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

### Motion

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Unsourced easing curves (`ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`) are omitted at the curve-value boundary. `ease-exit` matches the catalog template in `spec/omd-v0.1.md`. None of the three appear in the live-inspect comment. The source's use names for arriving / dismissals / two-way transitions stay as use claims; they do not restore a curve. Signature motions the source names stay: buttons respond to press with a subtle scale/opacity shift; cards and metrics fade-in from below at `motion-standard / ease-enter`. No bounce or spring — a money-handling product for shop owners signals steadiness, not playfulness. That spring stance is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

Omitting the three unsourced curves, keeping the source use names for arriving / dismissals / two-way transitions as use claims that do not restore a curve, keeping the three duration rows as duration tokens rather than easing curves, keeping the two signature motions, and holding the five-kind per-component promotion gate rather than treating a single official curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not KCD-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | Pretendard is the single family the source records across corporate and product surfaces. |
| Live computed surface-use | Both inspected surfaces compute visible text as Pretendard. Sibling raw samples: `kcd.co.kr` body `font-family: Pretendard, Arial, Helvetica, sans-serif`; `cashnote.kr` body `font-family: Pretendard, sans-serif`. |
| Official distributed asset | No KCD-exclusive distributed type family was verified. |
| License | Pretendard's upstream project is not restated here as a KCD brand asset. |
| Declared-only | The source names a system sans fallback beside Pretendard. That fallback is not presented as the brand face. |

### Family

- **Current visible UI family:** `Pretendard` — Token-set path `tokens.typography.family.sans`.
- Bold (700) for display and nav, SemiBold (600) for compact UI, Regular (400) for body.
- Do not replace Pretendard with a system substitute, and do not present the system sans fallback as Pretendard. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

### Type roles

YAML sizes stay as the integers the token set recorded; the §3 table's `px` / `rem` spellings sit beside them. YAML line heights stay unitless ratios (A1a). Token-set `use` strings are kept; where the §3 table or a live-inspect line is the longer writing of the same role, that longer writing is kept beside the YAML use (wave 37). Surface attachments follow the source sentence that established each size. Keeping YAML integers beside the §3 px/rem spellings, keeping unitless line heights as ratios, attaching each size to the surface that established it, and taking the longer of two writings for the same role, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | Surface |
|---|---|---|---:|---:|---|---|
| Product Hero | Pretendard | 72 (`72px` / `4.50rem`) | 700 | 1.10 | Product hero headline, Pretendard Bold. §3 complete: CashNote hero ("내 사업이 채워지는 모든 순간") | `cashnote.kr` |
| Section Hero | Pretendard | 56 (`56px` / `3.50rem`) | 700 | 1.21 | Section hero headlines. Live-inspect complete: "창업을 준비하는 사장님들을 위한 첫걸음" | `cashnote.kr` |
| Corporate Head | Pretendard | 46 (`46px` / `2.88rem`) | 700 | 1.35 | Corporate section heads. Live-inspect complete: "사업의 모든 순간 마주하는 문제를 데이터와 연결로 풀어내고자 합니다." | `kcd.co.kr` |
| Feature Head | Pretendard | 44 (`44px` / `2.75rem`) | 700 | 1.27 | Product feature heads. Live-inspect complete: "매출을 확인하고 관리하는 모든 순간" | `cashnote.kr` |
| Title | Pretendard | 24 (`24px` / `1.50rem`) | 600 | 1.21 | Stat / sub-section titles. Live-inspect complete: "사업자 경영관리 서비스" / "관리 거래액" | `cashnote.kr` |
| Nav Link | Pretendard | 18 (`18px` / `1.13rem`) | 700 | 1.20 | Corporate top nav links | `kcd.co.kr` |
| Body | Pretendard | 16 (`16px` / `1.00rem`) | 400 | 1.50 | Standard reading text | both |
| Button Large | Pretendard | 19 (`19px` / `1.19rem`) | 700 | 1.00 | Large CTA label | product CTAs |
| Button | Pretendard | 16 (`16px` / `1.00rem`) | 600 | 1.00 | Compact CTA label | compact CTAs |

YAML typography keys for those rows: `tokens.typography.display-hero` (72), `tokens.typography.display` (56), `tokens.typography.heading` (46), `tokens.typography.subheading` (44), `tokens.typography.title` (24), `tokens.typography.nav` (18), `tokens.typography.body` (16 / 400), `tokens.typography.button-lg` (19), `tokens.typography.button` (16 / 600).

The 72px Product Hero is the `cashnote.kr` hero. The 56px Section Hero is the product/corporate section-hero role in YAML; the live-inspect line that names "창업을 준비하는 사장님들을 위한 첫걸음" is that role's complete writing on `cashnote.kr`, not a second size. The 46px Corporate Head is `kcd.co.kr`. The 44px Feature Head is `cashnote.kr`. The 24px Title is the stat / sub-section role; the live-inspect pair "사업자 경영관리 서비스" / "관리 거래액" is that role's complete writing. The 18px Nav Link is corporate top nav. The 16px Body size is not `tokens.spacing.base: 16` and not the Button role's 16. The 19px Button Large size is not a spacing step. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing, is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

A corporate-hero measurement sits beside the YAML display scale and is not a YAML typography key: `kcd.co.kr` hero H2 "모든 과정이 쉬워지도록 돕습니다" at 52px / 700 / white (`#ffffff`) (source §1 "52–56px Bold headlines"; sibling raw sample). That 52px is the corporate hero, not `tokens.typography.display` 56 and not the 56px Section Hero. The source §9 example prompt writes the product hero "내 사업이 채워지는 모든 순간" in `#192d82`. The philosophy-layer comment records the same H2 as Pretendard 72px / 700 / `#192d82`. The sibling raw sample on `cashnote.kr` records that same H2 as `color: rgb(243, 250, 255)` (`#f3faff`, reversed on blue). Both writings stay on that hero string; they are not collapsed. Keeping 52px on the corporate hero rather than folding it into YAML 56, and keeping `#192d82` and `#f3faff` as two writings of the product-hero color rather than choosing one, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.

Typography principles the source records: one family, weight-driven hierarchy — the jump from Bold (700) display to Regular (400) body is the primary hierarchy signal; large product display — the CashNote hero runs to 72px Bold; SemiBold for UI density — 600 is the working weight for stat titles and compact buttons, 700 for the large CTAs and corporate nav; hangul-first sizing — body sits at 16px / line-height 1.5 for comfortable hangul legibility in information-dense layouts. Treating those four sentences as the source's own typography principles rather than as a separately published type specification is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=kcd.co.kr&sz=128`. That slug is an identity pointer, not a KCD-hosted brand file. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.
- App screenshots and illustrations carry no shadow at any size, consistent with the flat system.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (no sales data yet)** | White canvas. Single deep-navy (`#192d82`) line explaining no data has synced yet, with one action-blue CTA to connect a source. No illustration clutter. |
| **Empty (saved/bookmarked, none yet)** | Muted slate (`#728094`) single line: nothing saved yet, plus a path back. Honest, calm. |
| **Loading (metrics fetch)** | Skeleton blocks on `#f4f7f9` surface at final card dimensions, 20px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle action-blue (`#2d91ff`) progress indicator; previous values stay visible. |
| **Error (sync failed)** | Inline message in corporate ink (`#1e2137`) with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation in calm tone; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f4f7f9` / `#f9fbfc` blocks at final dimensions, 20px radius, flat pulse. |
| **Disabled** | Faint blue-grey (`#a4aeba`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve brand read. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic Focus capture is not `focus-visible` treatment evidence; the form field's observed Focus `#2d91ff` is recorded as that observed Focus, and it is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA, a nav tab, or a display surface that commits no operation in place — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Soft CTA (Primary)

- Role: Primary soft call-to-action — "앱 다운로드", "캐시노트 시작하기" (blue label on grey fill)
- Primitive type: `button` · Kind: interactive
- Background: `#f4f7f9`
- Text: `#2d91ff`
- Radius: `16px`
- Padding: `0px 16px` / YAML `0 16px`
- Height: `48px`
- Font: `19px` Pretendard weight 700 / YAML `19px / 700`
- Token-set use: `Primary soft CTA — 앱 다운로드, 캐시노트 시작하기 (blue label on grey fill)`
- Token-set path: `tokens.components.button-soft`
- The YAML and §4 Soft CTA record both labels on this 16px / 48px / 19px / 700 geometry. The sibling raw sample on `cashnote.kr` measures "앱 다운로드" at that same geometry, and measures "캐시노트 시작하기" on a different radius, height, and weight than this YAML row. That sibling measure is not a source DESIGN.md token and is not promoted here; it stays in provenance. The 16px radius is `tokens.components.button-soft.radius`. It is not `tokens.rounded.lg: 16` and not `tokens.spacing.base: 16`. The `0px 16px` padding is this control's padding. The 48px height is this control's height; it is not `tokens.spacing.xxl: 48`. Reading those figures as this control's geometry rather than a spacing or rounded step, and refusing to collapse the sibling's second-label measure into this YAML row, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination CTA; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable destination CTA; visual treatment omitted |
| disabled | applicable | A start / download CTA can be gated; Disabled treatment captured above |
| loading | not-applicable | Destination CTA ("앱 다운로드", "캐시노트 시작하기"); it commits no operation in place |
| error | not-applicable | Destination CTA; it commits no operation in place |
| success | not-applicable | Destination CTA; it commits no operation in place |

### Outline CTA

- Role: Secondary outline action — "캐시노트 컨설턴트"
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#2d91ff`
- Border: `1px solid #2d91ff`
- Radius: `16px`
- Padding: `0px 24px` / YAML `0 24px`
- Height: `56px`
- Font: `19px` Pretendard weight 600 / YAML `19px / 600`
- Token-set use: `Outline CTA — 캐시노트 컨설턴트`
- Token-set path: `tokens.components.button-outline`
- The 16px radius is this control's radius. It is not `tokens.rounded.lg: 16` and not Soft CTA's 16px written as this control. The `0px 24px` padding is this control's padding; it is not `tokens.spacing.lg: 24`. The 56px height is this control's height. Reading those figures as this control's geometry rather than a spacing or rounded step is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination CTA; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable destination CTA; visual treatment omitted |
| disabled | applicable | A consultant CTA can be gated; visual treatment omitted |
| loading | not-applicable | Destination CTA ("캐시노트 컨설턴트"); it commits no operation in place |
| error | not-applicable | Destination CTA; it commits no operation in place |
| success | not-applicable | Destination CTA; it commits no operation in place |

### Corporate Ghost

- Role: Corporate-site ghost CTA — "서비스 보기", "자세히 보기"
- Primitive type: `button` · Kind: interactive
- Text: `#1e2137`
- Border: `1px solid #1e2137`
- Radius: `6px`
- Padding: `15px 32px`
- Height: `51px`
- Font: `16px` Pretendard weight 700 / YAML `16px / 700`
- Token-set use: `Corporate ghost CTA — 서비스 보기, 자세히 보기`
- Token-set path: `tokens.components.button-corporate`
- YAML records no background key on this row. The 6px radius is `tokens.components.button-corporate.radius` and `tokens.rounded.sm: 6`. The `15px 32px` padding is this control's padding; the 32px in that padding is not `tokens.spacing.xl: 32`. The 16px font size is not `tokens.spacing.base: 16` and not the Body type-role 16 written as this control. Reading those figures as this control's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination CTA; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable destination CTA; visual treatment omitted |
| disabled | applicable | A corporate ghost CTA can be gated; visual treatment omitted |
| loading | not-applicable | Destination CTA ("서비스 보기", "자세히 보기"); it commits no operation in place |
| error | not-applicable | Destination CTA; it commits no operation in place |
| success | not-applicable | Destination CTA; it commits no operation in place |

### Form / Search Field

- Role: Form/search field following the surface-fill + hairline convention; faint blue-grey (`#a4aeba`) placeholder
- Primitive type: `input` · Kind: interactive
- Background: `#f4f7f9`
- Text: `#1e2137`
- Border: `1px solid #eeeeee`
- Radius: `12px`
- Padding: `0px 16px` / YAML `0 16px`
- Token-set use: `Form/search field — surface fill + hairline, focus #2d91ff`
- Token-set path: `tokens.components.input-field`
- Observed: Focus `#2d91ff`. That observed Focus is not a `focus-visible` treatment.
- The 12px radius is `tokens.components.input-field.radius`. It is not `tokens.spacing.md: 12` and not `tokens.rounded.md: 12` written as this field. The `0px 16px` padding is this field's padding. Reading that padding as this field's geometry rather than `tokens.spacing.base: 16`, and recording the observed Focus as that observed Focus rather than as `focus-visible` treatment, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A form field can be gated; visual treatment omitted |
| loading | not-applicable | Value field; it commits no operation in place |
| error | applicable | Form field; Error (form validation) is a separate source-state record |
| success | not-applicable | Value field; it commits no operation in place |

### Surface Card

- Role: Feature card on the light surface — flat, shadowless
- Primitive type: `card`
- Background: `#f9fbfc`
- Border: `1px solid #f9fbfc`
- Radius: `20px`
- Padding: `0px 24px` / YAML `0 24px`
- Token-set use: `Feature card on light surface (shadowless)`
- Token-set path: `tokens.components.card-surface`
- The 20px radius is `tokens.components.card-surface.radius` and `tokens.rounded.xl: 20`. The `0px 24px` padding is this card's padding; it is not `tokens.spacing.lg: 24`. The source §9 example prompt lands title 44px Pretendard weight 700 `#192d82` and body 16px Pretendard 400 `#44546f` on this card (A3). Reading those figures as this card's geometry rather than a spacing step, and landing the source Agent Prompt Guide's title / body pairing on this card rather than dropping it, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Blue-Tinted Card

- Role: Highlight card that uses blue tint instead of elevation
- Primitive type: `card`
- Background: `#e2f3ff`
- Text: `#192d82`
- Radius: `20px`
- Token-set use: `Blue-tinted highlight card`
- Token-set path: `tokens.components.card-tint`
- YAML records no padding or border key on this row. The 20px radius is this card's radius; it is not Surface Card's 20px written as this card. Reading that 20px as this card's radius rather than Surface Card's 20px is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Stat Chip

- Role: Metric / stat chip — "2026년 5월 기준", deep-navy label on a light blue tint
- Primitive type: `badge`
- Background: `#e2f3ff`
- Text: `#192d82`
- Radius: `20px`
- Font: `16px` Pretendard weight 600 / YAML `16px / 600`
- Token-set use: `Stat / metric chip — 2026년 5월 기준`
- Token-set path: `tokens.components.badge-stat`
- The 20px radius is this chip's radius. The 16px font size is not `tokens.spacing.base: 16` and not the Body type-role 16 written as this chip. Reading those figures as this chip's geometry rather than a spacing or type-role step is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Corporate Top Nav

- Role: Corporate top nav item ("회사소개", "서비스", "팀 문화", "인재영입", "새 소식")
- Primitive type: `tab` · Kind: interactive
- Background: `#ffffff`
- Text: `#1e2137`
- Font: `18px` Pretendard weight 700 / YAML `18px / 700`
- Active: action blue `#2d91ff` text on active item
- Token-set use: `Corporate top nav item`
- Token-set path: `tokens.components.nav-link`
- YAML records `fg`, `font`, `active`, and `use` on this row; the `#ffffff` background is the source §4 Navigation writing on the same nav. Keeping both the YAML keys and the §4 background on this nav, rather than dropping the longer §4 writing, is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable nav item; visual treatment omitted |
| disabled | applicable | A nav item can be gated; visual treatment omitted |
| loading | not-applicable | Corporate destination tab; it commits no operation in place |
| error | not-applicable | Corporate destination tab; it commits no operation in place |
| success | not-applicable | Corporate destination tab; it commits no operation in place |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Centered single-column heroes with the large Bold Pretendard headline as the anchor. Stat/metric blocks arranged in a horizontal row of navy-titled figures. Feature sections alternate white (`#ffffff`) and pale surface (`#f9fbfc`) full-width bands. Cards use a 20px radius and group related features/metrics. Whitespace the source names: breathing room over density — despite being a data-heavy fintech, the marketing surfaces are airy with generous vertical rhythm; flat segmentation — sections separate by background tint (`#f4f7f9` / `#f9fbfc`) and `#eeeeee` hairlines, not by shadow; blue for emphasis, not depth — highlights reach for `#e2f3ff` / `#cae7ff` tint rather than elevation. These layout rules are the source's own list. Reading the "breathing room over density" and "data-heavy fintech" characterizations as derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, stat rows stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

Touch targets the source records: Soft CTA at 48px height, outline CTA at 56px — comfortably tappable; corporate ghost button at 51px with 15px 32px padding; nav links at 18px Bold with generous spacing. Notable: large CTAs use generous horizontal padding (24–32px) and tall 48–56px hit areas for comfortable touch.

Collapsing strategy the source records: Hero — 72px Bold product headline scales down on mobile, weight 700 maintained; Stat row — horizontal figures wrap/stack on narrow viewports; Feature bands — multi-column → stacked single column; White / pale (`#f9fbfc`) alternating sections keep full-width treatment. Image behavior: app screenshots and illustrations carry no shadow at any size, consistent with the flat system; cards maintain the 20px radius across breakpoints.

The 48px / 56px / 51px heights, the 15px 32px ghost padding, the 18px nav, the 24–32px CTA padding, the 72px hero that scales, and the Desktop band `1024-1440px` are the source's own writings on the roles named beside them. Reading those figures as those roles rather than as a single cross-viewport specification, and keeping the Desktop band as the source wrote it rather than as a measurement of any one canvas, are derived editorial implementation inferences from the verified surfaces; they are not KCD-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

KCD's voice is **plain, empathetic, and reassuring** — a partner that speaks to small-business owners (사장님) in everyday Korean, not finance jargon. The corporate mission line "모든 과정이 쉬워지도록 돕습니다" ("We help make every step easier") and the product hero "내 사업이 채워지는 모든 순간" ("Every moment my business fills up") set the register: warm, ownership-centered, never hype. Copy frames the company as solving the small-business owner's real problems "데이터와 연결로" (with data and connection), and consistently starts from "공감" (empathy) toward the 사장님. Reading that register as this contract's voice, rather than as a separately published KCD microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Corporate mission | Calm, purpose-framed. "모든 과정이 쉬워지도록 돕습니다." |
| Product hero | Ownership-centered, warm. "내 사업이 채워지는 모든 순간." |
| Feature copy | Benefit-first, plain Korean. "매출을 확인하고 관리하는 모든 순간." |
| CTAs | Direct, low-pressure. "캐시노트 시작하기", "앱 다운로드", "자세히 보기". |
| Trust / scale copy | Concrete, dated. "2026년 5월 기준" beside real metrics, not vague claims. |

**Voice samples (verbatim from live surfaces):**

- "모든 과정이 쉬워지도록 돕습니다" — corporate hero (mission). *(verified live 2026-06-26, kcd.co.kr)*
- "사업의 모든 순간 마주하는 문제를 데이터와 연결로 풀어내고자 합니다." — corporate statement. *(verified live 2026-06-26, kcd.co.kr)*
- "모든 고민은 사장님에 대한 공감에서 시작합니다." — corporate statement (empathy-first). *(verified live 2026-06-26, kcd.co.kr)*
- "내 사업이 채워지는 모든 순간" — CashNote product hero. *(verified live 2026-06-26, cashnote.kr)*

**Forbidden register**: aggressive sales urgency, undefined financial jargon left unexplained, fear-based pitching, exclamation-heavy hype, anything that talks down to a 사장님. The source state contract also refuses a bare "오류가 발생했습니다" and a field error that says only "필수".

Published names and labels the source records, kept byte-exact: 한국신용데이터, 캐시노트, 사장님, 내 사업이 채워지는 모든 순간, 모든 과정이 쉬워지도록 돕습니다, 앱 다운로드, 캐시노트 시작하기, 캐시노트 컨설턴트, 서비스 보기, 자세히 보기, 2026년 5월 기준, 회사소개, 서비스, 팀 문화, 인재영입, 새 소식, 사업의 모든 순간 마주하는 문제를 데이터와 연결로 풀어내고자 합니다., 모든 고민은 사장님에 대한 공감에서 시작합니다., 매출을 확인하고 관리하는 모든 순간, 누구나 기술 혜택을 누릴 수 있는 세상, 데이터와 연결로, 공감, 사업의 모든 순간, 사업자 경영관리, 관리 거래액, 캐시노트 이용 사업장, 창업을 준비하는 사장님들을 위한 첫걸음, 사업자 경영관리 서비스, 오류가 발생했습니다, 필수, 김동호, 아이디인큐, 오픈서베이.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not KCD-authored or a separately published UI specification.

- unsourced easing curve values
- getdesign.md/kcd and styles.refero.design records (source: SPA shell only / no genuine KCD entry)
- `focus-visible` visual treatments
