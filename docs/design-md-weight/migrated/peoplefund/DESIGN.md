# PeopleFund Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

PeopleFund (피플펀드), now rebranded as 크플 (Cple), is Korea's online P2P real-estate lending and investment platform. Catalog homepage identity is `https://peoplefund.co.kr/`. This contract covers the first-party public surfaces the source inspected on 2026-07-02: `https://peoplefund.co.kr/` (redirects to `https://www.cple.co.kr/` — homepage live computed style) and `https://www.cple.co.kr/product/invest`. Named first-party sources that frame engineering or parent-company identity — and that the source does not treat as those token surfaces — are `https://tech.peoplefund.co.kr/` (PeopleFund engineering tech blog) and blog.pfct.co.kr. YAML `tokens.source` is `live-extract`. Token note from the source, kept as written: primary = live brand amber (`#ffc32d`) on status badges (NOTICE/HOT/NEW/마감임박); confirmed via Tailwind class `bg-[#FFC32D]` and bgFreq ×13. Canvas white (`#ffffff`). Body bg soft grey (`#f6f6f6`). Secondary charcoal (`#2e303b`) for nav/UI text. Footer dark blue-grey (`#263238`). Site has rebranded from PeopleFund to 크플 (Cple) at cple.co.kr; peoplefund.co.kr redirects there. Every value stays attached to the surface that established it. Reading those two inspected routes as this contract's token surfaces, keeping the tech blog and blog.pfct.co.kr as named first-party sources that do not supply the computed interface tokens below, keeping the token note as written, and keeping every value attached to the surface that established it, are derived editorial implementation inferences from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification.

The canvas is pure white (`#ffffff`) with a soft cool-grey body background (`#f6f6f6`) segmenting content into breathable zones. Text is set in near-pure black (`#000000`) — not a warmed navy or charcoal. The amber `#ffc32d` appears almost exclusively on status badges (NOTICE, HOT, NEW, 마감임박). Typography is Pretendard at SemiBold (weight 600) for all headings; the largest visible heading on the live homepage is 29px. There are essentially no drop shadows; the invest-page background (`#f5f5f5`) and the homepage grey (`#f6f6f6`) do separation work by tint alone. Product cards are white on grey. The dark footer (`#263238`) grounds the page. The amber status label is a surgical accent: one color, maximum signal, deployed only where real urgency exists (a product 95% funded, a NOTICE, a HOT ranking). The hex values, the Pretendard face, the 29px heading ceiling, the badge labels, the no-shadow observation, and the 95% funded / NOTICE / HOT ranking urgency examples are the source's own. Readings built on them — a confident, minimal financial product; directness and legibility over refinement; an information-dense, data-board feel; a surgical accent; a brand that trusts data density over decoration — are a derived editorial implementation inference from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. PeopleFund (피플펀드) was founded in **2015** by **김대윤 (Kim Dae-yoon, CEO)** as a marketplace lending platform connecting individual investors with property-secured borrowers — a model Korea permitted under its P2P lending regulatory framework. The founding thesis addressed a Korean market inefficiency: retail investors had almost no access to mid-yield instruments between bank deposits (1-2%) and equity risk, while qualified borrowers were underserved by banks with rigid scoring. PeopleFund proposed a middle path: real-estate-collateralized loans, transparently listed, directly matchable online. The company rebranded to **크플 (Cple)** — 크라우드펀딩 플랫폼 (Crowdfunding Platform) — reflecting its ambition to be the defining Korean online investment finance brand, claiming the position of "대한민국 최상위 온투금융" (Korea's Top Online Finance). This rebrand surfaced in 2024-2025 with the new `cple.co.kr` domain, though `peoplefund.co.kr` continues to redirect there. The brand's parent company is **PFCT (피에프씨테크놀로지스 / PFC Technologies)**. PeopleFund has received recognition including a **2019 국무총리 표창** (Prime Minister's Commendation), coverage from **Bloomberg** and **CNBC**, awards at the **IFLR APAC Awards**, and investment from international firms including **CLSA Capital Partners**. This institutional recognition is surfaced prominently on the homepage as social proof — appropriate for a platform asking retail investors to commit capital to property loans. What PeopleFund refuses, visible in its design: the glossy over-promise of neo-bank apps, the lifestyle marketing of mainstream consumer fintech, and the heavy regulatory-compliance aesthetic of old banking. What it embraces: a data-dense, scannable product board, a single amber urgency signal, and the confidence to let the numbers speak. The year 2015, the founder, the P2P marketplace model, the founding thesis, the 크플 (Cple) / 크라우드펀딩 플랫폼 rebrand, 2024-2025 and `cple.co.kr`, the PFCT parent, the 2019 국무총리 표창, Bloomberg, CNBC, IFLR APAC Awards, CLSA Capital Partners, the homepage social-proof sentence, and that closing refuse-and-embrace pair are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-rebrand narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification. Each names a surface or control the source records.

- Scan investment product cards on the product listing page and the hero carousel.
- Open a product with "상품 보러가기".
- Sign up with 투자회원가입 or log in with 로그인.
- Contact through the dark hero pills — 1600-9613 and FAQ.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable PeopleFund user segments, not individual people, so those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is those user segments: Korean retail investors, property-secured borrowers. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not PeopleFund-authored or a separately published UI specification.

- Pretendard SemiBold (weight 600) for all headings — consistent, legible, Korean-optimized
- Pure black (`#000000`) body text — no warm navy or grey subtlety; directness is the value
- Single brand amber (`#ffc32d`) reserved for status and urgency signals
- Flat depth: no shadows; separation via `#f6f6f6` surface tint
- White cards on grey body — data-board aesthetic for an investment platform
- Tight negative tracking on headings (-0.4px at 29px, -0.3px at 23px and 19px)
- Dark charcoal (`#2e303b`) for secondary UI text (nav links, action buttons)
- Dark blue-grey footer (`#263238`) — grounding anchor
- Primary CTA "상품 보러가기": white button, black text, zero radius — deliberately un-styled

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Returns over rhetoric.** The product listings lead with funded percentages and product codes, not marketing copy. *UI implication:* investment card layout prioritizes data fields — funding %, status badge, product ID — before descriptive text.
2. **Single accent, maximum signal.** Amber `#ffc32d` appears only on status labels. *UI implication:* do not add a second accent color; the amber's power comes from its singularity. Every new use dilutes the urgency signal.
3. **Flat and fast.** No shadows, no depth tricks. *UI implication:* separate content zones with tint (`#f6f6f6`) and hairlines (`#d0d8dc`); avoid elevation layers that add visual noise without adding meaning.
4. **Pretendard all the way.** A single font across all levels signals system coherence. *UI implication:* do not introduce a second typeface; vary weight (400 body, 600 heading/CTA) to create hierarchy.
5. **Credibility through specificity.** Awards, partner logos, return rates, and product percentages anchor trust. *UI implication:* always prefer a specific number ("95.1% 마감임박") over a generic quality claim.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification.

- Use Pretendard SemiBold (weight 600) for all headings — it is the single heading anchor
- Reserve amber (`#ffc32d`) for urgency and status signals — NOTICE, HOT, NEW, 마감임박
- Separate sections with flat tinted surfaces (`#f6f6f6`) and `#d0d8dc` hairlines, not shadows
- Use pure black (`#000000`) for primary text — directness is the brand value
- Use charcoal (`#2e303b`) for secondary UI chrome (nav text, button text) to soften pure black in interactive contexts
- Apply tight negative letter-spacing to headings (-0.4px at 29px, -0.3px at 23px)
- Use 0px radius on the primary product CTA button — its un-styled nature signals content confidence

The source's Agent Prompt Guide also records this unique constraint, kept as written: CTA button is 0px radius — un-styled white on dark bg sections. Keeping that Agent Prompt Guide constraint on this page rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification.

- Spread amber across decorative elements — dilutes the urgency signal
- Use drop shadows for elevation — PeopleFund is a flat system
- Use a second accent color outside `#ffc32d` and `#2054ae` — palette discipline is the system's restraint
- Apply large pill radius to product cards or standard buttons — only contact/phone pill buttons use 30px
- Use display-size type (48px+) — the system's max heading is 29px; density over drama
- Use light font weights (300 or below) for headings — SemiBold (600) is the minimum heading weight
- Use warm-tinted greys for text — `#000000` and `#2e303b` are the text colors; keep them cool and direct

The same Agent Prompt Guide records this unique prohibition, kept as written: Footer always `#263238` dark blue-grey. Keeping that prohibition here rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping YAML lowercase beside body mixed-case writings, keeping `tokens.colors.ink` unmerged from `tokens.colors.on-primary` even though both are `#000000`, and keeping `#f6f6f6` unmerged from `#f5f5f5`, are derived editorial implementation inferences from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification. The hex values and recorded uses are the source's own. Characterizations on the rows (maximum-legibility contrast, professional/grounding/financial-grade, measured intensity, secondary accent outside amber) are the same derived class.

- **Brand Amber** (`#ffc32d`): The single saturated brand accent. Deployed exclusively on status badges (NOTICE, HOT, NEW, 마감임박) to signal urgency on investment listings. Confirmed in Tailwind source class `bg-[#FFC32D]`. Token-set path `tokens.colors.primary`. Catalog `primary_color` is the same hex.
- **Pure Black** (`#000000`): Primary body text, heading text, and text on the amber badge. Chosen for maximum legibility contrast with white and grey surfaces. Token-set path `tokens.colors.ink`. `tokens.colors.on-primary` is the same hex on a second key (text on amber).
- **Pure White** (`#ffffff`): Canvas, card surfaces, nav background, and button backgrounds. Token-set path `tokens.colors.canvas`.
- **Surface Grey** (`#f6f6f6`): Body background on the new homepage. Provides gentle section separation without harsh borders. Token-set path `tokens.colors.surface`.
- **Surface Alt** (`#f5f5f5`): Body background on the invest product listing page — a nearly identical grey variant. Token-set path `tokens.colors.surface-alt`.
- **Hairline** (`#d0d8dc`): Border color on outline buttons (signup/login) and form inputs. The primary separation device in UI chrome. Token-set path `tokens.colors.hairline`.
- **Charcoal** (`#2e303b`): Secondary UI text — used for nav link labels and action button text where pure black would be too stark against the white button background. Token-set path `tokens.colors.charcoal`.
- **Ink Secondary** (`#2e2e2e`): Slightly softened dark for body text in legacy areas. Token-set path `tokens.colors.ink-secondary`.
- **Muted Grey** (`#6a6a6a`): Secondary body text on the invest listing page — the workhorse muted color for descriptions, metadata, footer text. Token-set path `tokens.colors.muted`.
- **Muted Light** (`#90a4af`): Light muted for lowest-emphasis elements, placeholders. Token-set path `tokens.colors.muted-light`.
- **Footer Dark** (`#263238`): Dark blue-grey footer background. Professional, grounding, financial-grade. Token-set path `tokens.colors.footer-bg`.
- **Error Red** (`#ff4d4f`): Error and warning states. Measured intensity — not alarming but clearly negative. Token-set path `tokens.colors.error`.
- **Success Green** (`#37c94d`): Success / completion states on transaction-level feedback. Token-set path `tokens.colors.success`.
- **Progress Blue** (`#2054ae`): Accent for funded-percentage progress bars on investment cards. A secondary accent outside the amber primary. Token-set path `tokens.colors.accent-blue`.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 3 | `tokens.spacing.xs` |
| sm | 6 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 20 | `tokens.spacing.base` |
| lg | 32 | `tokens.spacing.lg` |
| xl | 48 | `tokens.spacing.xl` |
| section | 64 | `tokens.spacing.section` |

The source also writes a base unit of `~4px`, the same scale as px (3px, 6px, 12px, 20px, 32px, 48px, 64px), card horizontal padding 20px, and section vertical gap 48–64px. The `~4px` base unit is that layout writing; it is not a YAML spacing key. `tokens.spacing.xs: 3` is not the status-badge padding `3px 6px`. `tokens.spacing.sm: 6` is not that badge's 6px side padding. `tokens.spacing.md: 12` is not the 12px badge font. `tokens.spacing.base: 20` is not the nav-outline padding `0px 20px` and not the card horizontal padding 20px written as those components. `tokens.spacing.lg: 32` is not the dark-pill padding `17px 32px`. `tokens.spacing.xl: 48` is not display-size type (48px+) and not the 48–64px section gap by itself. `tokens.spacing.section: 64` is the YAML section step; it is not the 48–64px section gap by itself. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| none | 0 | `tokens.rounded.none` |
| sm | 10 | `tokens.rounded.sm` |
| md | 16 | `tokens.rounded.md` |
| pill | 30 | `tokens.rounded.pill` |
| full | 9999 | `tokens.rounded.full` |

The source's prose radius scale is Zero (`0px`) for primary CTA buttons, Small (`10px`) for nav outline action buttons and form inputs, Medium (`8px`) for cards and containers — the workhorse, and Pill (`30px`) for contact/phone/FAQ pill buttons in the dark hero section. `tokens.rounded.none: 0` is the YAML none step; the CTA `0px` and the status-badge `0px` sit on those components. `tokens.rounded.sm: 10` is not a spacing step. `tokens.rounded.md: 16` is a YAML step; it is not the card `8px`, not body size 16, and not `tokens.spacing` of 16 (there is none). `tokens.rounded.pill: 30` is not the dark-pill `30px` written as that component, even though both are 30. `tokens.rounded.full: 9999` is a YAML step; no component writes `9999`. The progress badge `4px` radius and the card `8px` radius live on those components; they are not YAML rounded steps. Keeping those local radii on their components, and keeping `md: 16` and `full: 9999` on their own key paths, is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, no border | Most surfaces — pure flat system. Token-set path `tokens.shadow.none`: `none`. |
| Tint (Level 1) | `#f6f6f6` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #d0d8dc` border | Outline buttons, form inputs, white card edges on grey background |

Live DOM inspection found `box-shadow: none` across all visible elements. Depth and grouping come from tinted background bands (`#f6f6f6`) and thin `#d0d8dc` hairline borders. The amber badge does the hierarchy work that shadows would otherwise do. Those observations are the source's own. The further reading — that this is a deliberate choice for a P2P investment platform because flat UIs load faster on mobile and avoid the "bank software" heaviness that can reduce trust perception in the crowdfunding-adjacent segment — is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

### Motion

Durations the source records, kept as duration tokens. They are not easing curves.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover, button press |
| `motion-standard` | 200ms | Card reveal, dropdown, tooltip |
| `motion-slow` | 300ms | Page-level section transition |

Easing token names and their source Use pairings, kept as name+use rows. Unsourced curves omitted at the curve-value boundary.

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted | Arriving — cards, dropdowns, panels |
| `ease-exit` | omitted | Dismissals |
| `ease-standard` | omitted | Two-way transitions |

Unsourced easing curves (`ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`) are omitted at the curve-value boundary. `ease-exit` matches the catalog template example. The source's use line that product cards fade into view at `motion-standard / ease-enter` as the list loads is kept as that use claim; it does not restore a curve. Signature motion the source names stays: the amber status badge does not animate — static signals are trusted signals; a pulsing badge would feel like manipulation on a financial platform. No spring or bounce anywhere. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the platform remains fully usable and data-accessible.

Omitting the three unsourced curves, keeping the three duration rows as duration tokens rather than easing curves, keeping the three easing Use pairings as name+use rows rather than restoring a curve, keeping the fade-at-`motion-standard / ease-enter` use claim as a use claim that does not restore a curve, keeping the no-animate-badge and no-spring rules, and holding the five-kind per-component promotion gate rather than treating a single official curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | Pretendard is used for every text level on the inspected homepage and invest listing — headings, body, nav, buttons. H2 29px/600/-0.4px, H3 23px/600/-0.3px, H4 19px/600/-0.3px: all confirmed live. |
| Fallback stack | YAML records fallback `Lato, "Noto Sans KR", sans-serif`. That stack is a fallback, not the live face. |

### Family

- **Primary:** `Pretendard`, with fallback `Lato, "Noto Sans KR", sans-serif`. Token-set path `tokens.typography.family.sans` / `tokens.typography.family.fallback`.
- Pretendard is used for every text level — headings, body, nav, buttons. No secondary display font.

Do not replace Pretendard with Lato or "Noto Sans KR" and call the result PeopleFund. Do not present the fallback stack as Pretendard. That fallback-never-substitute reading is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). The parenthetical px figures are the source §3 spelling, not a replacement of the YAML ratio. Token-set `use` strings are kept verbatim in the Token-set use column. Source §3 Hierarchy Notes stay in the Notes column of the same table. YAML tracking is `-0.4` / `-0.3`; the §3 spelling is `-0.4px` / `-0.3px`. Both writings stay. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 px/rem spellings on separate readings, keeping YAML `use` verbatim beside the longer §3 Notes rather than choosing one writing as a replacement, and refusing to rewrite a ratio as a fixed px, are derived editorial implementation inferences from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Letter spacing | Token-set use | Notes | Token-set path |
|---|---|---:|---:|---|---|---|---|---|
| Section Heading (H2) | Pretendard | 29 (`29px` / `1.81rem`) | 600 | 1.31 (`38px`) | -0.4 (`-0.4px`) | Section headings H2, Pretendard SemiBold | Homepage section titles | `tokens.typography.section` |
| Sub-section (H3) | Pretendard | 23 (`23px` / `1.44rem`) | 600 | 1.39 (`32px`) | -0.3 (`-0.3px`) | Sub-section headings H3 | Feature sub-heads, dark section callouts | `tokens.typography.subsection` |
| Card Heading (H4) | Pretendard | 19 (`19px` / `1.19rem`) | 600 | 1.37 (`26px`) | -0.3 (`-0.3px`) | Card headings H4 | Investment card titles, feature bullets | `tokens.typography.card-head` |
| Body | Pretendard | 16 (`16px` / `1.00rem`) | 400 | 1.50 (`24px`) | normal | Standard body copy | Standard reading text | `tokens.typography.body` |
| Nav Link | Pretendard | 16 (`16px` / `1.00rem`) | 500 | 1.00 | normal | Nav link labels | Top navigation labels | `tokens.typography.nav` |
| Button (CTA) | Pretendard | 15 (`15px` / `0.94rem`) | 600 | 1.00 | normal | Primary CTA button label | "상품 보러가기" CTA label | `tokens.typography.button` |
| Button (Nav action) | Pretendard | 16 (`16px` / `1.00rem`) | 400 | 1.00 | normal | Nav action buttons (signup/login) | Signup/login outline buttons | `tokens.typography.button-nav` |

The 16px Body / Nav Link / Button (Nav action) size is not `tokens.rounded.md: 16`. The 32px H3 line-height spelling is not `tokens.spacing.lg: 32`. The 12px badge fonts in Components are not `tokens.spacing.md: 12`. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing or radius, is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

Typography principles the source records, kept as written: **Single font system** — Pretendard does everything; no separate display or monospace font is visible on the main product surfaces. **Weight 600 as the heading anchor** — all headings use SemiBold; there is no ExtraBold (800) headline, unlike more expressive KR fintechs like Finda or Toss. **Tight tracking at display sizes** — -0.4px at 29px, -0.3px at 23px and 19px; headlines compress but not dramatically. **400 for body and nav action buttons** — the split between 600 (heading/CTA) and 400 (body/nav-action) is the system's primary hierarchy signal. The Finda/Toss comparison, and reading those four sentences as implementation principles rather than as a separately published type spec, are a derived editorial implementation inference from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=peoplefund.co.kr&sz=128`. That slug is an identity pointer, not a PeopleFund-hosted brand file. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| Empty (no invest products matching filter) | White canvas. Charcoal (`#2e303b`) single line at body size explaining no matching products. No illustration. One plain CTA to reset filter. |
| Empty (portfolio, no investments yet) | Muted grey (`#6a6a6a`) text: first-investment prompt with link to product list. Direct, no celebratory onboarding art. |
| Loading (product list fetch) | Skeleton white cards on `#f6f6f6` background at product card dimensions, 8px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| Loading (portfolio calculation) | Inline data refreshes with previous values staying visible; spinner next to the yield figure. |
| Error (investment failed) | Inline error message with Error Red (`#ff4d4f`) accent. Plain Korean: states what failed and what to do next. No generic "오류가 발생했습니다" alone. |
| Error (form validation) | Field-level message below the input. Describes the specific violation and the valid format. |
| Error (product sold out / 모집완료) | Status badge changes to "모집완료" (closed). Product card dims. No amber badge — the urgency color retires when the window closes. |
| Success (investment placed) | Brief inline confirmation in calm tone. Success Green (`#37c94d`) accent. Next step (view portfolio) linked immediately below. No celebratory animation. |
| Skeleton | `#f6f6f6` blocks at final card dimensions, 8px radius, flat pulse consistent with shadowless system. |
| Disabled | Muted grey (`#6a6a6a`) text and reduced-opacity surface; amber status signals disappear on disabled products. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination control, a nav tab, or a contact pill that commits no operation in place — and the reason given is always that semantic one. YAML `Primitive type` is attached only when the token set records that type. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, YAML `Primitive type` only when the token set records that type, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary CTA (View Products)

- Role: Primary "View Products" CTA on hero sections. Use: "상품 보러가기" (View Products) CTA on each investment card in the hero carousel
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#000000`
- Radius: `0px`
- Height: `46px`
- Padding: `0px`
- Font: `15px / 600 Pretendard`
- Token-set path: `tokens.components.button-cta`
- Token-set use: `Primary 'View Products' CTA on hero sections`
- The `0px` radius is `tokens.components.button-cta.radius`. It is not only `tokens.rounded.none: 0` written as this button. The `0px` padding is this control's padding. The 46px height is this CTA's geometry. The 15px font is not a spacing step. Reading those figures as this control's geometry rather than a spacing or rounded step is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A product CTA can be gated; visual treatment omitted |
| loading | not-applicable | Product-view destination CTA; it commits no operation in place |
| error | not-applicable | Product-view destination CTA; it commits no operation in place |
| success | not-applicable | Product-view destination CTA; it commits no operation in place |

### Nav Action Outline

- Role: Header signup (투자회원가입) and login (로그인) actions
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#2e303b`
- Border: `1px solid #d0d8dc`
- Radius: `10px`
- Padding: `0px 20px`
- Height: `50px`
- Font: `16px / 400 Pretendard`
- Token-set path: `tokens.components.button-nav-outline`
- Token-set use: `Nav action buttons — 투자회원가입, 로그인`
- The `10px` radius is `tokens.components.button-nav-outline.radius`. It is not only `tokens.rounded.sm: 10` written as this button. The `0px 20px` padding is this control's padding; it is not `tokens.spacing.base: 20`. The 16px font is not `tokens.rounded.md: 16`. Reading those figures as this control's geometry rather than a spacing or rounded step is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Signup/login can be gated; visual treatment omitted |
| loading | applicable | `투자회원가입` / `로그인` is an in-place commit; visual treatment omitted |
| error | applicable | A failed signup or login can be reported on this control; visual treatment omitted |
| success | applicable | A completed signup or login can be reported on this control; visual treatment omitted |

### Dark Pill (Contact)

- Role: Phone number (1600-9613) and FAQ pill buttons on the dark hero section
- Primitive type: `button` · Kind: interactive
- Background: `rgba(0,0,0,0.2)` / `rgba(0, 0, 0, 0.2)`
- Text: `#000000`
- Border: `1px solid rgba(255,255,255,0.2)` / `1px solid rgba(255, 255, 255, 0.2)`
- Radius: `30px`
- Padding: `17px 32px`
- Height: `58px`
- Font: `16px / 400 Pretendard`
- Token-set path: `tokens.components.button-dark-pill`
- Token-set use: `Phone/FAQ contact pill buttons on dark hero section`
- The `30px` radius is `tokens.components.button-dark-pill.radius`. It is not only `tokens.rounded.pill: 30` written as this button. The `17px 32px` padding is this control's padding; it is not `tokens.spacing.lg: 32`. Reading those figures as this control's geometry rather than a spacing or rounded step is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A contact pill can be gated; visual treatment omitted |
| loading | not-applicable | Phone/FAQ contact destination; it commits no operation in place |
| error | not-applicable | Phone/FAQ contact destination; it commits no operation in place |
| success | not-applicable | Phone/FAQ contact destination; it commits no operation in place |

### Default Input

- Role: Standard form inputs for signup, login, and investment flow
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #d0d8dc`
- Radius: `10px`
- Font: `16px / 400 Pretendard`
- Token-set path: `tokens.components.input-default`
- Token-set use: `Standard form input fields`
- The `10px` radius is `tokens.components.input-default.radius`. It is not only `tokens.rounded.sm: 10` written as this field. The 16px font is not `tokens.rounded.md: 16`. Reading those figures as this field's geometry rather than a rounded step is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A form field can be gated; visual treatment omitted |
| loading | not-applicable | Form field; it commits no operation in place |
| error | applicable | Form field; field-level validation is recorded in the capture record |
| success | not-applicable | Form field; it commits no operation in place |

### Product Card

- Role: Investment listing cards on the product board — white on `#f6f6f6` grey background, no shadow
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#000000`
- Radius: `8px`
- Token-set path: `tokens.components.card-product`
- Token-set use: `Investment product cards on product listing page`
- The `8px` radius is `tokens.components.card-product.radius`. It is not a YAML rounded step (`none` 0 / `sm` 10 / `md` 16 / `pill` 30 / `full` 9999). Reading that `8px` as this card's radius rather than a YAML rounded step is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Feature Card

- Role: Homepage feature highlight sections (three attraction points)
- Primitive type: `card`
- Background: `#f6f6f6`
- Text: `#000000`
- Radius: `8px`
- Token-set path: `tokens.components.card-feature`
- Token-set use: `Feature highlight cards on homepage sections`
- The `8px` radius is `tokens.components.card-feature.radius`. It is not a YAML rounded step. Reading that `8px` as this card's radius rather than a YAML rounded step is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification. Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Status Badge (Amber)

- Role: Investment product status labels — NOTICE, HOT, NEW, 마감임박 (Near-close)
- Primitive type: `badge`
- Background: `#ffc32d`
- Text: `#000000`
- Radius: `0px`
- Padding: `3px 6px`
- Font: `12px / 600 Pretendard`
- Token-set path: `tokens.components.badge-status`
- Token-set use: `Investment status labels — NOTICE, HOT, NEW, 마감임박`
- The `0px` radius is `tokens.components.badge-status.radius`. The `3px 6px` padding is this badge's padding; it is not `tokens.spacing.xs: 3` or `tokens.spacing.sm: 6`. The 12px font is not `tokens.spacing.md: 12`. Reading those figures as this badge's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Progress Badge (Blue)

- Role: Funded-percentage status on investment card listings
- Primitive type: `badge`
- Background: `#2054ae`
- Text: `#ffffff`
- Radius: `4px`
- Font: `12px / 400 Pretendard`
- Token-set path: `tokens.components.badge-progress`
- Token-set use: `Progress / percent-funded status on invest cards`
- The `4px` radius is `tokens.components.badge-progress.radius`. It is not a YAML rounded step and not the `~4px` spacing base unit. Reading that `4px` as this badge's radius rather than a YAML rounded step or the `~4px` spacing base unit is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification. Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Nav Link

- Role: Top nav items — 투자, 대출, 이용안내. Top horizontal sticky nav. Background `#ffffff`. Height 80px header. Right actions: outline signup and login buttons.
- Primitive type: `tab` · Kind: interactive
- Text: `#2e303b`
- Font: `16px / 500 Pretendard`
- Active: text `#000000` bold on active nav item
- Token-set path: `tokens.components.nav-link`
- Token-set use: `Top nav items — 투자, 대출, 이용안내`
- The 80px header height is this nav chrome's geometry. The 16px font is not `tokens.rounded.md: 16`. Reading those figures as this nav's geometry rather than a rounded step is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A nav item can be gated; visual treatment omitted |
| loading | not-applicable | Destination nav tab; it commits no operation in place |
| error | not-applicable | Destination nav tab; it commits no operation in place |
| success | not-applicable | Destination nav tab; it commits no operation in place |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Centered single-column hero with investment product carousel as the anchor. Product listing section: horizontal scrolling card row (visible on homepage). Feature sections: 3-up grid (three attraction points). Full-width dark sections (`#000000` bg) for "Contact us" callouts with white text H3 headings. White sections alternate with `#f6f6f6` tinted sections for separation. Card horizontal padding 20px; section vertical gap 48–64px; tight body padding reflecting dense investment-data presentation. These layout rules are the source's own list. Reading them as the layout contract for the inspected homepage and invest listing, keeping the 20px card padding off `tokens.spacing.base: 20` as a second writing, and keeping the `#000000` dark-section fill as a layout-surface use rather than a new color key, are derived editorial implementation inferences from the verified surfaces; they are not PeopleFund-authored or a separately published UI specification.

Whitespace the source records: **Data density over breathing room** — the product serves investors who want to scan multiple investment options; the layout is relatively dense with information. **Flat separation** — `#f6f6f6` vs `#ffffff` bands do all separation work, no shadow elevation. **Single accent per screen** — the amber `#ffc32d` on status badges is the only saturated color; everything else is white, grey, black, and charcoal — so the amber always reads immediately. Those three sentences are the source's own whitespace philosophy. Reading them as layout decision rules rather than as a separately published layout spec is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single column, product carousel becomes single-item; reduced section padding |
| Tablet | 768-1024px | 2-up investment card rows; moderate padding |
| Desktop | 1024px+ | Full layout; horizontal product carousel; 3-up feature grid |

Touch targets the source records: Product "상품 보러가기" buttons: 46px height — comfortable for tap. Nav action buttons: 50px height with 20px horizontal padding — generously tappable. Contact pill buttons: 58px height — large hit area for phone number tap.

Collapsing strategy the source records: Hero investment carousel: multi-card horizontal scroll → single centered card on mobile. H2 headings maintain 29px on mobile (size scale is conservative enough to not compress further). Feature 3-up grid → stacked single column on mobile. Footer: multi-column links collapse to stacked single column.

Image behavior the source records: Investment product images carry no shadow at any size — consistent with flat system. Cards maintain 8px radius across breakpoints.

<!-- design-md:section content-locales -->
## 6. Content & Locales

PeopleFund's voice is **direct, data-forward, and quietly ambitious** — a platform that speaks to investors as rational adults who want yields and returns, not lifestyle aspirations. The homepage title "크플 - 대한민국 최상위 온투금융(투자, 대출)" (크플 - Korea's Top Online Investment Finance) sets the register: declarative, superlative in claim but specific in domain. The section headline "폭풍성장 크플" ("Storm-growth Cple") reads as bold shorthand for performance, not hype. Copy is dense and numeric — funding percentages (95.1%), product codes (21548호), annualized return rates — because the user is here to decide whether to commit capital. Reading that register as this contract's voice, rather than as a separately published PeopleFund microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Hero / section headings | Bold and declarative. "폭풍성장", "세 가지 매력 포인트." Confident without adjective-stacking. |
| Investment product labels | Data-first: percentage funded, product ID, status (마감임박 / 모집중). |
| Status badges | Single-word urgency. NOTICE · HOT · NEW · 마감임박. Amber background does the emphasis work. |
| CTAs | Plain imperatives. "상품 보러가기" (View Products). No exclamation marks. |
| Feature descriptions | Benefit-summarized: "손쉬운 투자", "높은 수익률", "다채로운 상품" — three-word benefit anchors. |
| Contact / support | Direct. "고민하지 말고 물어보세요" (Don't hesitate, just ask) — approachable but not casual. |

**Voice samples (verbatim from live homepage):**

- "크플 - 대한민국 최상위 온투금융(투자, 대출)" — page title (domain authority claim). *(verified live 2026-07-02)*
- "폭풍성장 크플" — section heading (performance claim, colloquial strength). *(verified live 2026-07-02)*
- "세 가지 매력 포인트" — feature section heading (structured promise). *(verified live 2026-07-02)*

Further live headings the source records: "대한민국을 대표하는 크플", "크플과 함께하는". Footer nav: "회사소개", "뉴스룸", "투자사 소개". Products listed: "서울시 양천구 21548호" 94.7% 마감임박, "평택시 독곡동 21577호" 95.1% 마감임박. Recognition on homepage: "2019 국무총리 표창", "CLSA Capital Partners", "블룸버그", "CNBC", "IFLR APAC AWARDS".

blog.pfct.co.kr metadata (2026-07-02), kept byte-exact: Organization name "피에프씨테크놀로지스(PFC Technologies)" / "피플펀드 PeopleFund"; blog title "PFCT 공식블로그 '피플로그'"; description "보통 사람을 위한 보통이 아닌 금융, 피플펀드 공식 블로그 '피플로그' 입니다."

**Forbidden register**: vague lifestyle marketing ("unlock your financial future"), undifferentiated safety claims without numbers, exclamation-mark-driven urgency, cute mascot language. The amber badge handles urgency — copy stays numeric and factual. No generic "오류가 발생했습니다" alone.

Published names and labels the source records, kept byte-exact: PeopleFund, 피플펀드, 크플, Cple, 상품 보러가기, 투자회원가입, 로그인, 투자, 대출, 이용안내, NOTICE, HOT, NEW, 마감임박, 모집완료, 모집중, 1600-9613, 손쉬운 투자, 높은 수익률, 다채로운 상품, 고민하지 말고 물어보세요, 회사소개, 뉴스룸, 투자사 소개, 대한민국을 대표하는 크플, 크플과 함께하는, 피에프씨테크놀로지스, PFC Technologies, 피플로그, PFCT.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not PeopleFund-authored or a separately published UI specification.

- unsourced easing curve values (`ease-enter`, `ease-exit`, `ease-standard`)
- getdesign.md/peoplefund and styles.refero.design/?q=peoplefund records (source: not found)
