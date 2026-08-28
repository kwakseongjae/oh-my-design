# KB Pay Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

KB Pay (KB페이) is KB Kookmin Card's flagship mobile payment platform — the unified gateway to Korea's largest credit card network wrapped in KB Financial Group's signature warm yellow identity. This contract's live-extract tokens attach to the two first-party surfaces inspected on 2026-06-22: the KB Pay introduction page at `https://card.kbcard.com/CXPRISVC0127.cms` and the KB Kookmin Card homepage at `https://card.kbcard.com/`. YAML `tokens.source` is `live-extract`. The source also names `https://m.kbcard.com/BON/DVIEW/MBEM0007` as the live page that supplied the §10 voice samples. `kbpay.kbcard.com` returned 404; the source records the primary domain as `card.kbcard.com`. Every value stays attached to the surface or section that established it. Reading those two inspected routes as this contract's token surfaces, keeping the voice-sample URL as a named copy source rather than as a second token extract, keeping values attached to the surface or section that established them, and treating the 404 domain note as the source's own resolution fact rather than as a new product surface, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

The visual system opens on a clean white canvas (`#FFFFFF`) with the brand's defining primary color, KB Yellow (`#FFCC00`), commanding every primary call-to-action on the page. The typography is built entirely on KB Financial Group's proprietary typefaces: `KBFGDisplayM` for headings and display text, and `KBFGText` for body copy and UI labels. Section labels such as "인기 메뉴" appear in a warm accent purple (`#614CC2`). Depth on the main surface is handled through soft single-layer card shadows — `rgba(0,0,0,0.16) 0px 1px 3px 0px` — applied consistently to finance-menu cards and recommendation panels. Surface tints (`#F9F9F9`, `#F9FAFE`) segment content zones on an otherwise white canvas. The geometry throughout favors moderate rounding: `4px` on buttons, `16px` on cards. The hex values, the two proprietary families, the editorial-label color, the card shadow, the two surface tints, and the two radii are recorded. Calling the yellow the action color rather than an accent flourish, calling the display face at 32px/weight 400 confident and calm, calling the result a financial product that reads as approachable and warm rather than austere and institutional, and calling the 4px/16px pair a balance between efficiency and contemporary Korean fintech aesthetics, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. KB Pay was launched in **2020** as KB Kookmin Card's mobile payment solution, and in **2022** consolidated the existing "KB국민카드 모바일홈" app into a single unified platform — delivering on the promise of "한번에, 한손에, 한눈에" (at once, in one hand, at a glance). KB Kookmin Card is a subsidiary of **KB Financial Group (KB금융그룹)**, Korea's largest financial holding company by total assets, with headquarters in Yeongdeungpo, Seoul. The parent group's brand identity — the yellow star-b symbol and `#FFCC00` primary — carries directly into KB Pay's visual system, making the payment app an extension of one of Korea's most trusted institutional identities. The founding logic was straightforward: Korean consumers were managing payment, card issuance, loan inquiry, point redemption, and lifestyle benefits across fragmented apps. KB Pay's consolidation — card, points, financial products, shopping, travel, all accessible in one home screen — was a product response to that fragmentation. The "듀얼홈" (dual home) structure introduced a split-view between personal use and card management, reflecting the reality that KB's users range from young adults making first digital payments to professionals managing corporate accounts. KB Financial Group's branding philosophy is built around the concept of "국민" (the Korean people) — the name literally means "National People's Card." Design decisions reflect a responsibility to the widest possible demographic: generous touch targets (48px CTAs), accessible color contrast on yellow (black text for maximum WCAG compliance), proprietary fonts that render cleanly at all sizes, and copy guidelines that mandate plain language accessible to users regardless of age or education level. KB Pay is not a startup designing for a demographic niche — it is a national financial infrastructure product. The years 2020 and 2022, the "KB국민카드 모바일홈" consolidation, the Yeongdeungpo headquarters, the star-b and `#FFCC00` carry-through, the founding-logic paragraph, the "듀얼홈" sentence, the "국민" philosophy, the 48px / yellow-contrast / proprietary-font / plain-language list, and that closing national-infrastructure sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-consolidation narrative as context that does not by itself supply interface tokens, and marking the "national financial infrastructure product" framing as the source's own closing sentence rather than as a separately published KB doctrine, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and taking them from the inspected introduction-page controls rather than from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification. Each names a surface or control the source records. They do not come from the source's persona section.

- Read the KB Pay introduction hero and the line “한번에, 한손에, 한눈에 KB Pay” on `https://card.kbcard.com/CXPRISVC0127.cms`.
- Use the primary yellow CTA (`로그인`, `신청하기`) on that introduction page.
- Scan finance-menu cards (`.recom-card`, `.finance-menu__item`) on that introduction page.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable KB Pay user segments, not individual people, so those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: Korean cardholders, students, families, financial product shoppers. Refusing to promote individual personas, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not KB Pay-authored or a separately published UI specification.

- KB Yellow (`#FFCC00`) as the exclusive primary CTA color — one brand anchor, one action signal
- KBFGDisplayM for display headings, KBFGText for body — both proprietary KB fonts
- White canvas with light surface tints (`#F9F9F9`, `#F9FAFE`) segmenting content zones
- Single-layer card shadow (`rgba(0,0,0,0.16) 0px 1px 3px 0px`) for gentle elevation
- 4px radius on buttons, 16px on cards
- Accent purple (`#614CC2`) for editorial labels (인기 메뉴, 인기 신용카드)
- `18px/600 KBFGText` for CTA labels — weight carried in font weight, not size alone
- Near-black heading text (`rgba(0,0,0,0.87)` ≈ `#151515`) instead of pure black

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not KB Pay-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each. The source comment records the "one action, one color" principle and the "national infrastructure product" framing as editorial readings connecting the observed system to institutional positioning, not directly sourced KB statements.

1. **One action, one color.** KB Yellow (`#FFCC00`) carries all primary CTAs. *UI implication:* every screen has exactly one yellow element — the next step is always unambiguous regardless of the user's financial literacy.
2. **"국민" means everyone.** The service must be legible and operable by a 7-year-old and a 75-year-old on the same day. *UI implication:* 48px touch targets, 15px minimum body size, KBFGText at accessible weight, WCAG AA-compliant yellow-on-black contrast.
3. **Finance without intimidation.** KB Pay rejects the cold institutional blue of legacy Korean banking. *UI implication:* warm yellow, rounded cards, white surfaces — the palette of a consumer product, not a government counter.
4. **한손에 (in one hand) is a design constraint, not a tagline.** The app must function entirely within thumb reach. *UI implication:* primary actions at the bottom of the viewport, nav condensed to a 6-item tab row, no deep hierarchy.
5. **Trust through consistency.** A national-scale financial product must behave the same way on every surface. *UI implication:* KBFGDisplayM/Text proprietary fonts across all KB subsidiaries; `#FFCC00` is the same hex in KB Bank, KB Card, KB Insurance — the brand is the group, not the product.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

- Use KB Yellow (`#FFCC00`) exclusively for primary CTAs — one action color, one meaning
- Apply `KBFGDisplayM` for all section headings and display text — it carries KB's brand DNA
- Use `#F9F9F9` surface tints to separate content zones without resorting to borders
- Keep card radius at 16px for containers and 4px for interactive controls — each has a purpose
- Apply the single card shadow (`rgba(0,0,0,0.16) 0px 1px 3px 0px`) only to clickable card units
- Set CTA labels in `18px/600 KBFGText` — weight signals emphasis, size signals hierarchy
- Use `#614CC2` (accent purple) sparingly for editorial/curatorial labels — it balances yellow without competing

### Avoid

The source states these seven as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

- Use KB Yellow for decorative backgrounds or illustrations — dilutes its CTA signal
- Replace KBFGText/KBFGDisplayM with system fonts or third-party typefaces — loses brand identity
- Add multiple shadow layers or heavy elevation — KB Pay is a clean, performance-first mobile product
- Use pure black (`#000000`) for body text — near-black `rgba(0,0,0,0.87)` ≈ `#151515` reads warmer
- Apply the accent purple (`#614CC2`) to CTAs or interactive elements — it is a label/editorial color only
- Use the outlined secondary button for primary flows — yellow CTA must always be the first visible action
- Round buttons beyond 4px on desktop surfaces — sharp buttons signal decisiveness for financial transactions

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping `#776C61` on the §2 body role that names it rather than inventing a YAML key, keeping `#000000` as on-primary CTA text rather than as body ink, and attaching token-set roles to the live-extract introduction-page claim rather than relabeling an introduction-page value as a different surface's fill, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification. The hex values and recorded uses are the source's own. Surface attachments follow the live-extract claim.

- **KB Yellow / Primary** (`#FFCC00`): The signature brand color of KB Financial Group and KB Pay. Used exclusively for primary CTAs (`.btn.btn--primary`), notification badges, and active UI indicators. Maps to Pantone 1235 C / `rgb(255, 204, 0)`. Token-set path `tokens.colors.primary`. Claim surface: kbpay-intro.
- **Yellow Light** (`#FFE066`): Nav underline accent and depth-1 bar (`em.depth1-bar`) for the active main navigation item. Token-set path `tokens.colors.primary-light`. Claim surface: kbpay-intro.
- **Yellow Tint** (`#FAEAAD`): Warm tinted surface for breadcrumb highlights and breadcrumb-KB Pay path background. Token-set path `tokens.colors.primary-tint`. Claim surface: kbpay-intro.
- **Canvas White** (`#FFFFFF`): Page background, card surfaces, and CTA text on yellow. Token-set path `tokens.colors.canvas`. Claim surface: kbpay-intro.
- **Surface Light** (`#F9F9F9`): The primary content zone separator — used throughout for section backgrounds and list-item surfaces. Token-set path `tokens.colors.surface`. Claim surface: kbpay-intro.
- **Surface Alt** (`#F9FAFE`): Secondary tinted surface (`.braille-card`, utility containers) with a very faint blue cast for differentiation. Token-set path `tokens.colors.surface-alt`. Claim surface: kbpay-intro.
- **Ink** (`#151515`): Effective heading and primary body color (`rgba(0,0,0,0.87)`) — not pure black but a near-black with visual warmth. Token-set path `tokens.colors.ink`. Claim surface: kbpay-intro.
- **Body Dark** (`#333333`): Standard body copy, nav links, button labels. Token-set path `tokens.colors.body`. Claim surface: kbpay-intro.
- **Body Mid** (`#444444`): Secondary UI text and descriptive copy. Token-set path `tokens.colors.muted`. Claim surface: kbpay-intro.
- **Muted** (`#666666`): Utility navigation, captions, meta information. Token-set path `tokens.colors.faint`. Claim surface: kbpay-intro.
- **Divider** (`#AAAAAA`): Border color for outlined buttons and form field borders. Token-set path `tokens.colors.divider`. Claim surface: kbpay-intro.
- **Black on Yellow** (`#000000`): CTA label text on `#FFCC00` backgrounds. Token-set path `tokens.colors.on-primary`. Claim surface: kbpay-intro.
- **Accent Purple** (`#614CC2`): Used for editorial section headings ("인기 메뉴", "인기 신용카드", "인기 체크카드"). Token-set path `tokens.colors.accent-purple`. Claim surface: kbpay-intro.
- **KB Brown** (`#776C61`): Skip navigation and accessibility-first link background — a warm brown from KB's brand neutral palette. Source §2 body only; not a YAML `tokens.colors.*` path.

`#000000` as `tokens.colors.on-primary` is not body ink. `#151515` is the heading/body ink. `#FFFFFF` as canvas is not the only white the source records on yellow CTA text; the on-yellow text token is `#000000`. Reading those three attachments as the roles named beside them, rather than as a shared numeral or a swapped pair, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them. Claim surface for all eight steps: kbpay-intro. The source also names a base unit of 8px.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 16 | `tokens.spacing.md` |
| base | 20 | `tokens.spacing.base` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 32 | `tokens.spacing.xl` |
| xxl | 48 | `tokens.spacing.xxl` |
| section | 64 | `tokens.spacing.section` |

`tokens.spacing.xs: 4` is not `tokens.rounded.md: 4` and is not the primary-button radius `4px`. `tokens.spacing.sm: 8` is not a type size. `tokens.spacing.md: 16` is not `tokens.rounded.lg: 16`, not the primary-button padding `0 16px`, and not a type size. `tokens.spacing.base: 20` is not the utility-nav padding `20px 0px`. `tokens.spacing.lg: 24` is not the section-heading 24px. `tokens.spacing.xl: 32` is not the display-hero 32px. `tokens.spacing.xxl: 48` is not the primary-button height `48px`. `tokens.spacing.section: 64` is a spacing step. Nav padding `27px 0px` (80px total height with 26px top/bottom) is a layout measurement, not a YAML spacing step. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them. Claim surface for all four steps: kbpay-intro.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 3 | `tokens.rounded.sm` |
| md | 4 | `tokens.rounded.md` |
| lg | 16 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

The source's radius-use lines: Micro (3px) on the notification badge and legacy `.kbBtn` utility buttons; Standard (4px) on primary CTA buttons and form inputs; Card (16px) on finance cards, banner items, and guide containers; Full (9999px) on toggle switches and pill badges. `tokens.rounded.sm: 3` is not a type size. `tokens.rounded.md: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.lg: 16` is not `tokens.spacing.md: 16`. `tokens.rounded.full: 9999` is a step; the toggle records `9999px` on that control. The breadcrumb highlight's §4 radius `0px` is that control's geometry; it is not a YAML rounded step. Keeping those local radii on their components, and keeping each YAML step on its own key path, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, transparent bg | Navigation, headings, inline text, most links |
| Surface (Level 1) | `#F9F9F9` or `#F9FAFE` background shift | Section separators, utility containers |
| Card (Level 2) | `rgba(0,0,0,0.16) 0px 1px 3px 0px` | Finance menu items, recommendation cards |

Token-set path `tokens.shadow.card`: `rgba(0, 0, 0, 0.16) 0px 1px 3px 0px`. Token-set path `tokens.shadow.none`: `none`. Claim surface: kbpay-intro. The three-level table and the two shadow tokens are the source's own. Reading the single thin shadow as deliberately minimal, as making cards feel clickable without visual noise, and as appropriate for a mobile payment product where cognitive load should be low, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live-extract pass. The motion contract below sits outside that attribution: the source names three duration tokens and three easing roles, and assigns no computed-sample source to the three cubic-bezier values. The durations, easing roles, and motion rules below, the omission of the three untraceable curve values, and the five-kind promotion gate below, are therefore a derived editorial implementation inference from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

Durations the source records, kept as duration tokens. They are not easing curves.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | CTA press feedback, tab active state |
| `motion-standard` | 200ms | Card expand, modal open, dropdown |
| `motion-slow` | 320ms | Screen-level transition, bottom-sheet slide |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to KB Pay-computed samples. `cubic-bezier(0.4, 0.0, 1, 1)` matches the documented template `ease-exit` re-injection path. The curves are omitted here and only the roles and their uses are kept:

| Role | Use |
|---|---|
| `ease-enter` | Cards/sheets arriving |
| `ease-exit` | Modals/overlays dismissing |
| `ease-standard` | Two-way state transitions |

Motion rules, as the source states them. Motion in KB Pay is transactional and purposeful — this is a payment infrastructure product used by millions of Korean users including elderly and accessibility-sensitive users. The primary CTA (`#FFCC00`) responds to press with an immediate opacity shift at `motion-fast`; no spring or bounce. Bottom sheets slide in at `motion-slow/ease-enter` giving users a moment to register what is appearing. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the yellow CTA remains visible and tappable without any animation dependency.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | `KBFGDisplayM` and `KBFGText` are KB Financial Group's proprietary typefaces. The source records them as exclusive to the group and as the families used for page titles, section headings, navigation, body copy, and button labels on the inspected KB Pay introduction page. |
| Live computed surface-use | H1 "KB Pay" computes `KBFGDisplayM` 32px / 400 / `rgba(0,0,0,0.87)`. H3 "서비스 특징" computes `KBFGDisplayM` 24px / 400 / `rgb(21,21,21)`. Body computes `KBFGText` / `rgba(0,0,0,0.87)` / 15px. |
| Official distributed asset | The families remain proprietary KB Financial Group faces. |

### Family

- **Display:** `KBFGDisplayM` — Token-set path `tokens.typography.family.display`. Claim surface: kbpay-intro. Used for page titles ("KB Pay"), section headings ("서비스 특징", "이용전 유의사항").
- **Body:** `KBFGText` — Token-set path `tokens.typography.family.body`. Claim surface: kbpay-intro. Used for navigation, body copy, button labels, utility text. Weight 400 as default.

Do not replace KBFGDisplayM or KBFGText with a system substitute, and do not present a fallback as KBFGDisplayM or KBFGText. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). Token-set `use` strings are kept verbatim; where the source §3 table is the longer record of the same role, that longer use is kept beside the YAML use. Surface attachments follow the live-extract claim. Keeping YAML line heights as unitless ratios, keeping the YAML use and the §3 longer use on the same role rather than dropping the longer wording, and attaching surfaces from the live-extract claim, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | Claim surface |
|---|---|---:|---:|---|---|---|
| Display Hero | KBFGDisplayM | 32px | 400 | 1.3 | Page hero title (KB Pay), KBFGDisplayM | kbpay-intro |
| Section Heading | KBFGDisplayM | 24px | 400 | 1.4 | Section headings (서비스 특징), KBFGDisplayM | kbpay-intro |
| Main Nav | KBFGText | 15px | 400 | 1.5 | Main navigation items, KBFGText | kbpay-intro |
| Body | KBFGText | 15px | 400 | 1.6 | Standard body copy, KBFGText | kbpay-intro |
| Editorial Label | KBFGText | 18px | 600 | 1.0 | Section label (인기 메뉴), accent-purple. §3 longer use: Section labels (인기 메뉴) in accent purple | kbpay-intro |
| CTA Label | KBFGText | 18px | 600 | 1.0 | Primary CTA label (로그인, 신청하기). §3 longer use: Primary button labels (로그인, 신청하기) | kbpay-intro |
| Utility Nav | KBFGText | 13px | 400 | 1.5 | Utility nav links (회원가입, 고객센터), KBFGText | kbpay-intro |
| Tag/Badge | KBFGText | 14px | 400 | | Breadcrumb and content labels. Source §3 hierarchy only; not a YAML `tokens.typography.*` path | kbpay-intro |

The 32px hero size is not `tokens.spacing.xl: 32`. The 24px section size is not `tokens.spacing.lg: 24`. The 15px body size is not the 15px main-nav size as a shared type-role row — YAML keeps them as two roles (`body` lineHeight `1.6`, `nav-main` lineHeight `1.5`). The 18px editorial-label size is not the 18px CTA-label size as a shared role — YAML keeps `label` and `button-lg` as two paths. The 14px Tag/Badge size is the §3 role; it is not the outlined-button 14px font as a shared type-role row. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing or another component, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

Type rules the source states in §3 Principles. These four rules, and the readings inside them, are a derived editorial implementation inference from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

- **Proprietary fonts as identity**: KBFGDisplayM and KBFGText are exclusive to KB Financial Group, making every text element brand-identifiable without a logo.
- **Weight contrast is hierarchy**: KBFGDisplayM at weight 400 for headings achieves a calm authority; KBFGText at weight 600 for CTAs and labels provides emphasis without visual aggression.
- **15px as the information density anchor**: Body and nav at 15px is generous for Korean hangul legibility while remaining dense enough for financial service browsing.
- **Black on yellow at 18px/600**: CTA legibility maximized through weight rather than size — the yellow does the attention-grabbing, the weight does the reading-clarity.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=kbcard.com&sz=128`. That URL is an identity pointer, not a KB-hosted brand file and not a substitute for the group star-b. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.
- Official identity assets the source names: the yellow star-b symbol and `#FFCC00` primary of KB Financial Group, carried into KB Pay.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (no card registered)** | White canvas. Single near-black line in KBFGText 15px explaining how to add a card, one `#FFCC00` CTA "카드 등록하기". No illustration clutter. |
| **Empty (no transaction history)** | Muted text `#666666` in KBFGText 15px stating the period has no transactions; date filter visible above for adjustment. |
| **Loading (initial app launch)** | Skeleton blocks at card dimensions with `#F9F9F9` fill and gentle pulse animation. Nav and tab bar remain visible. No spinner overlay. |
| **Loading (balance refresh)** | Previous balance remains visible; a subtle progress indicator below the card header. Avoids a blank screen during refresh. |
| **Error (network failure)** | Inline message in body text area — KBFGText 15px, near-black, plain Korean explanation. A yellow `#FFCC00` retry CTA. No red-heavy alarmist UI. |
| **Error (payment declined)** | Dedicated state with the decline reason in plain Korean and a single action path (카드 확인하기 or 고객센터 연결). |
| **Success (payment complete)** | Brief confirmation screen: large KB Yellow checkmark or animated symbol, "결제 완료" in KBFGDisplayM 24px, transaction details in KBFGText 15px. Auto-advance to home after 2s. |
| **Success (card application submitted)** | Inline confirmation with expected processing time. Plain Korean timeline, no marketing upsell on the confirmation screen. |
| **Skeleton** | `#F9F9F9` blocks at final card and list-item dimensions, 16px radius, gentle 1.5s pulse. |
| **Disabled** | Reduced-opacity surface (`opacity: 0.4`) on button; yellow fades to `#FAEAAD` tint rather than turning grey — preserves brand warmth. |

Those ten rows are the source's §14 body. They describe payment-product states the source recorded; they are not selector-backed captures on `.btn.btn--primary` or `.recom-card`. Keeping that section attachment, rather than transferring those treatments onto a different control as if they had been computed there, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic Focus capture is not `focus-visible` treatment evidence; the source records no focus transition, and none is assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination finance tile, a destination navigation item, a tab, a toggle, or a destination utility link — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary CTA

- Role: primary action on the KB Pay introduction page
- Primitive type: `button` · Kind: interactive
- Background: `#FFCC00`
- Text: `#000000`
- Radius: `4px`
- Height: `48px`
- Padding: `0 16px`
- Font: `18px / 600 KBFGText`
- Token-set use: `Primary CTA (로그인, 신청하기) — KB signature yellow`. §4 longer use: All primary actions (로그인, 신청하기, 확인) — the single action color
- Observed: default. Source §14 Disabled records `opacity: 0.4` and yellow fading to `#FAEAAD` on button; that treatment stays attached to the §14 button row, not rewritten as a computed hover.
- Claim surface: kbpay-intro
- The `4px` radius is this button's geometry. It is not only `tokens.rounded.md: 4` and not `tokens.spacing.xs: 4`. The `16px` in the padding is this control's padding. It is not `tokens.spacing.md: 16`. The `48px` height is this control's height. It is not `tokens.spacing.xxl: 48`. The 18px / 600 / KBFGText font is this control's font, not only the CTA Label type-role row. Reading those figures as this button's geometry rather than as those YAML steps or as a shared type-role row, and keeping the §14 Disabled `opacity: 0.4` / `#FAEAAD` treatment attached to the §14 button row rather than rewriting it as a computed hover, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; §14 records opacity 0.4 and yellow → `#FAEAAD` |
| loading | applicable | This control commits 로그인 / 신청하기 / 확인; visual treatment omitted |
| error | applicable | This control commits 로그인 / 신청하기 / 확인; visual treatment omitted |
| success | applicable | This control commits 로그인 / 신청하기 / 확인; visual treatment omitted |

### Secondary Outlined

- Role: login button in the nav header
- Primitive type: `button` · Kind: interactive
- Background: `#FFFFFF`
- Text: `#333333`
- Border: `1px solid #AAAAAA`
- Radius: `3px`
- Height: `44px`
- Font: `14px / 400 KBFGText`
- Token-set use: `Secondary action (로그인 버튼 in nav header)`. §4 longer use: Login button in nav header — a lower-emphasis companion to yellow CTA
- Claim surface: kbpay-intro
- The `3px` radius is this button's geometry. It is not only `tokens.rounded.sm: 3`. The 14px / 400 / KBFGText font is this control's font; it is not the Tag/Badge 14px type-role row. Reading those figures as this outlined button's geometry rather than as those YAML steps or as a shared type-role row is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | This control commits 로그인; visual treatment omitted |
| error | applicable | This control commits 로그인; visual treatment omitted |
| success | applicable | This control commits 로그인; visual treatment omitted |

### Text Input

- Role: standard form input fields
- Primitive type: `input` · Kind: interactive
- Background: `#FFFFFF`
- Border: `1px solid #AAAAAA`
- Radius: `4px`
- Text: `#333333`
- Font: `15px KBFGText` weight 400
- Token-set use: `Form input fields`
- Claim surface: kbpay-intro
- The `4px` radius is this input's geometry. It is not only `tokens.rounded.md: 4`. The 15px / KBFGText font is this control's font; it is not only the Body type-role row. Reading those figures as this input's geometry rather than as those YAML steps or as a shared type-role row is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | Form field; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | Form field; visual treatment omitted |

### Standard Card

- Role: finance menu item and recommendation panel
- Primitive type: `card` · Kind: interactive
- Background: `#FFFFFF`
- Radius: `16px`
- Shadow: `rgba(0, 0, 0, 0.16) 0px 1px 3px 0px`
- Token-set use: `Recommended card / finance menu item (recom-card, finance-menu__item)`. §4 longer use: Finance menu items (대출, 카드, 신용점수 등) and recommendation panels (recom-card)
- Claim surface: kbpay-intro
- The `16px` radius is this card's geometry. It is not only `tokens.rounded.lg: 16` and not `tokens.spacing.md: 16`. The shadow is this card's elevation. It is not only `tokens.shadow.card` as a free-floating fill. Reading those figures as this card's geometry rather than as those YAML steps is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination tile; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination tile can be gated; visual treatment omitted |
| loading | not-applicable | Destination finance tile; it commits no operation in place |
| error | not-applicable | Destination finance tile; it commits no operation in place |
| success | not-applicable | Destination finance tile; it commits no operation in place |

### Surface Card

- Role: secondary surface card
- Primitive type: `card`
- Background: `#F9FAFE`
- Radius: `4px`
- Token-set use: `Secondary surface card (braille-card, info containers)`. §4 longer use: Braille-accessible info blocks and utility containers; no shadow, surface tint only
- Claim surface: kbpay-intro
- The source supplies no interaction evidence for this row. Kind and applicability map are omitted (C4). The `4px` radius is this card's geometry. It is not only `tokens.rounded.md: 4`. Reading that radius as this card's geometry, and omitting kind and the map because the source supplies no interaction evidence, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

### Notification Badge

- Role: active nav indicator and notification count
- Primitive type: `badge`
- Background: `#FFCC00`
- Text: `#000000`
- Radius: `3px`
- Font: `12px / 600 KBFGText`
- Token-set use: `Notification count badge (active nav indicator)`. §4 longer use: Active nav indicator dot and notification count
- Claim surface: kbpay-intro
- The source supplies no interaction evidence for this row. Kind and applicability map are omitted (C4). The `3px` radius is this badge's geometry. It is not only `tokens.rounded.sm: 3`. Reading that radius as this badge's geometry rather than as that YAML step, and omitting kind and the map because the source supplies no interaction evidence, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

### Breadcrumb Highlight

- Role: active breadcrumb path segment
- Primitive type: `badge`
- Background: `#FAEAAD`
- Text: `#333333`
- Radius: YAML `4px` · §4 `0px` — both records kept; they are not resolved
- Font: `14px / 400 KBFGText`
- Token-set use: `Breadcrumb highlight / active section label (KB Pay breadcrumb)`. §4 longer use: Active breadcrumb path segment (KB Pay current section)
- Claim surface: kbpay-intro
- The source supplies no interaction evidence for this row. Kind and applicability map are omitted (C4). The YAML `4px` and the §4 `0px` stay as a conflict; a migrator does not choose one. Keeping both radius records, and omitting kind and the map because the source supplies no interaction evidence, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

### Main Nav Item

- Role: primary horizontal navigation
- Primitive type: `tab` · Kind: interactive
- Background: `#FFFFFF` (nav bar)
- Text: YAML `fg: #333333` · §4 `rgba(0,0,0,0.87)` — both records kept
- Active: YAML `text #614CC2 + yellow #FFE066 underline bar` · §4 Active underline `#FFE066` bar (`em.depth1-bar`), 2px equivalent — both records kept
- Height: `80px` nav height
- Font: `15px / 400 KBFGText`
- Token-set use: `Main horizontal nav (My KB, 혜택, 금융, 카드, 서비스, 라이프)`
- Claim surface: kbpay-intro
- The 80px height and the `#FFE066` bar are this nav item's geometry. They are not a YAML spacing step. The 15px / 400 / KBFGText font is this control's font; it is not only the Main Nav type-role row. Keeping both text and active records, and reading those figures as this nav item's geometry rather than as those YAML steps, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | Tab control; it commits no operation in place |
| error | not-applicable | Tab control; it commits no operation in place |
| success | not-applicable | Tab control; it commits no operation in place |

### Toggle Switch

- Role: on/off toggle for settings and alerts
- Primitive type: `toggle` · Kind: interactive
- Background: `#FFCC00`
- Text: `#FFFFFF`
- Radius: `9999px`
- Token-set use: `On/off toggle for settings and alerts`
- Claim surface: kbpay-intro
- The `9999px` radius is this toggle's geometry. It is not only `tokens.rounded.full: 9999`. Reading that radius as this toggle's geometry rather than as that YAML step is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A toggle can be gated; visual treatment omitted |
| loading | not-applicable | Toggle control; it commits no operation in place |
| error | not-applicable | Toggle control; it commits no operation in place |
| success | not-applicable | Toggle control; it commits no operation in place |

### Feature Banner

- Role: KB Pay feature banner item (`setting-banner__item`)
- Background: transparent / image
- Radius: `16px`
- Use: large image cards
- Not in the token set. No primitive type is attached.
- The source supplies no interaction evidence for this row. Kind and applicability map are omitted (C4). The `16px` radius is this banner's geometry. It is not only `tokens.rounded.lg: 16`. Reading that radius as this banner's geometry rather than as that YAML step, omitting a primitive type because the row is not in the token set, and omitting kind and the map because the source supplies no interaction evidence, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

### Utility Nav Links

- Role: utility links
- Background: `#FFFFFF`
- Text: `#666666`
- Height: `60px` utility nav bar
- Font: `13px / 400 KBFGText`
- Use: Utility links (회원가입, 고객센터, 상품공시실 등)
- Not in the token set. No primitive type is attached.
- Kind: interactive
- The 60px height is this bar's geometry. It is not a YAML spacing step. The 13px / 400 / KBFGText font is this control's font; it is not only the Utility Nav type-role row. Omitting a primitive type because the row is not in the token set, and reading those figures as this bar's geometry, are derived editorial implementation inferences from the verified surfaces; they are not KB Pay-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination link can be gated; visual treatment omitted |
| loading | not-applicable | Destination utility link; it commits no operation in place |
| error | not-applicable | Destination utility link; it commits no operation in place |
| success | not-applicable | Destination utility link; it commits no operation in place |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The source records a spacing system with base unit 8px and scale 4px, 8px, 16px, 20px, 24px, 32px, 48px, 64px. Button padding is `0 16px` horizontal. Main nav links use `27px 0px` (80px total height with 26px top/bottom). Utility nav uses `20px 0px` (60px total height). Those figures are the source's own layout measurements. Reading the 20px utility padding as that measurement rather than as `tokens.spacing.base: 20`, and reading the 16px button padding as that measurement rather than as `tokens.spacing.md: 16`, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

Grid and container, as the source states them:

- Single-column hero with KB Pay title at 32px KBFGDisplayM
- Feature tabs (홈, 카드(듀얼홈), 혜택, 결제, 금융, 쇼핑/여행) as horizontal scroll or 6-tab layout
- Finance menu: 2-column or 4-column grid of 16px-radius white cards with subtle shadow
- Full-width white nav bar with dual-row: utility links (60px) + main nav (80px)
- Content grouped into white (`#FFFFFF`) and light-surface (`#F9F9F9`) alternating bands

Feature tabs (홈, 카드(듀얼홈), 혜택, 결제, 금융, 쇼핑/여행) are that layout row. They are not the main-nav set (My KB, 혜택, 금융, 카드, 서비스, 라이프). Keeping those two label sets on the rows that name them, rather than merging them into one nav, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

Whitespace philosophy, as the source states it. **Measured and purposeful**: KB Pay is a financial product serving millions — layout choices favor clarity and scanability over decorative whitespace. **Card rhythm**: Finance menu cards repeat at consistent 16px radius with the same single shadow, creating a uniform grid of trustworthy service tiles. **Yellow as the only visual interrupt**: On a largely monochromatic (white + gray) surface, `#FFCC00` is the sole saturated element — its scarcity amplifies its authority. Those three sentences are the source's own. Reading them as layout rules for the recorded surfaces rather than as a separately published KB layout specification is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

Breakpoints the source names:

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, stacked nav, compact finance menu |
| Tablet | 640-1024px | 2-column finance menu, moderate padding |
| Desktop | 1024-1440px | Full dual-row nav, 4-column finance grid, centered hero |

Touch targets the source names: Primary CTA buttons 48px height; nav links 80px nav height; finance menu cards large tiles at 176px+ height; utility nav links 60px height minimum.

Collapsing strategy the source names: Dual-row nav (utility + main) → single hamburger menu on mobile; 4-column finance menu → 2-column → scrollable horizontal chips on narrow viewport; Feature tabs (6 items) → horizontally scrollable tab row; Hero title scales proportionally; KBFGDisplayM weight 400 maintained throughout; KB Yellow CTA button stretches to full-width on mobile.

The 48px CTA, 80px nav, 176px+ finance tiles, 60px utility bar, and the 1024-1440px desktop row are the source's own figures. Reading them as the layout and touch measurements the source recorded, rather than as a second token-set path, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

KB Pay's voice is **warm, confident, and enabling** — a financial partner that speaks plain Korean to the widest possible audience, from teenagers making first purchases to seniors managing retirement funds. The headline "한번에, 한손에, 한눈에 KB Pay" (at once, in one hand, at a glance) sets the register: punchy, parallel, optimistic. The service does not lecture about finance; it simplifies it. Copy is short, action-oriented, and jargon-light — consistent with KB Financial Group's stated mission of being "국민의 행복생활 파트너" (the Korean people's happy-life partner). The quoted lines and the mission string are the source's own. Reading that register as this contract's voice, rather than as a separately published KB Pay microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Hero / primary CTA | Short, punchy, parallel structure. "한번에, 한손에, 한눈에". Action verbs without punctuation excess. |
| Feature descriptions | Benefit-first, feature-second. "나에게 꼭 맞는 콘텐츠 추천" — the outcome, then the mechanism. |
| Service feature tabs | Ultra-compact 2-4 Korean syllable labels (홈, 혜택, 결제, 금융). Density over description. |
| Eligibility / restrictions | Clear, matter-of-fact. "만 7세 이상 개인 고객" — no softening language around limits. |
| Error / notice copy | Formal and direct, consistent with Korean financial regulation communication standards. |
| CTAs | Verb + subject. "신청하기" (apply), "다운받기" (download), "확인" (confirm). |

**Voice samples (verbatim from live KB Pay page):**

- "한번에, 한손에, 한눈에 KB Pay" — hero tagline (parallel three-part promise). *(verified live 2026-06-22)*
- "나에게 꼭 맞는 콘텐츠 추천" — 홈 tab feature description (benefit-first). *(verified live 2026-06-22)*
- "매일 새로운 혜택과 이벤트" — 혜택 tab feature description (ongoing value promise). *(verified live 2026-06-22)*
- "국민의 행복생활 파트너 KB국민카드" — site title / brand positioning. *(verified live 2026-06-22)*
- "KB Pay 소개>KB Pay>결제서비스>서비스 | 국민의 행복생활 파트너 KB국민카드" — page title recorded from the introduction-page inspect. *(verified live 2026-06-22)*

**Forbidden register**: financial jargon left unexplained, urgency tactics ("마감 임박"), aggressive upsell framing, English acronyms without Korean equivalents in consumer-facing copy.

Published names and lines the source records, kept byte-exact: KB Pay, KB페이, KB Yellow, KBFGDisplayM, KBFGText, 서비스 특징, 이용전 유의사항, 인기 메뉴, 인기 신용카드, 인기 체크카드, 로그인, 신청하기, 확인, 다운받기, 회원가입, 고객센터, 상품공시실, My KB, 혜택, 금융, 카드, 서비스, 라이프, 홈, 카드(듀얼홈), 결제, 쇼핑/여행, 한번에, 한손에, 한눈에 KB Pay, 한번에, 한손에, 한눈에, 나에게 꼭 맞는 콘텐츠 추천, 매일 새로운 혜택과 이벤트, 국민의 행복생활 파트너, 국민의 행복생활 파트너 KB국민카드, KB Pay 소개>KB Pay>결제서비스>서비스 | 국민의 행복생활 파트너 KB국민카드, 만 7세 이상 개인 고객, 카드 등록하기, 결제 완료, 카드 확인하기, 고객센터 연결, 듀얼홈, KB국민카드 모바일홈, KB금융그룹, 국민, 마감 임박, 대출, 신용점수.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not KB Pay-authored or a separately published UI specification.

- unsourced easing curve values for `ease-enter`, `ease-exit`, and `ease-standard`
- getdesign.md/kbpay and styles.refero.design/?q=KB+Pay records (source: not found)
- `kbpay.kbcard.com` as a live product host (source: HTTP 404)
- `focus-visible` visual treatments
