# PortOne Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

PortOne (포트원) is Korea's integrated payments-and-settlement fintech — the rebrand of the developer-beloved 아임포트 (Iamport). Catalog homepage identity is `https://www.portone.io`. This contract covers the two first-party public surfaces the source inspected for tokens on 2026-06-26: the marketing homepage at `https://www.portone.io` and the developer docs at `https://developers.portone.io`. The official blog at `https://blog.portone.io` and the GitHub org at `https://github.com/portone-io` are named brand-owned sources in the same packet; they are not token surfaces. YAML `tokens.source` is `live-extract`. Token note from the source, kept as written: primary = live CTA orange gradient (`#fc6b2d`); secondary CTA = charcoal gradient (`#363a44`). Marketing surface uses Tailwind gray ink (`#111827`); the developer docs surface (`developers.portone.io`) shifts to slate ink (`#0f172a` / `#334155`). Mostly shadowless — flat tinted surfaces + hairlines. Every value stays attached to the surface that established it. Reading those two inspected URLs as this contract's token surfaces, keeping the blog and GitHub org as named sources that do not supply computed interface tokens, keeping values attached to the surface that established them, and keeping that token note as the facts it names, are derived editorial implementation inferences from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

The captured marketing homepage, in the source's own values: a pure white canvas (`#ffffff`), layered with a cool near-white surface (`#f9fafb`) and a second flatter gray (`#f3f4f6`). Text sits in a deep Tailwind ink (`#111827`). The one saturated brand accent is a warm signal orange (`#fc6b2d`), reserved almost exclusively for the primary call-to-action and the small eyebrow labels above each section. Everything runs in **Pretendard Variable**. The hero H1 ("AI로 결제와 재무 운영을 자유롭게") sits at a light 56px / weight 400, while the section H2 ("결제 연동부터 글로벌 재무 운영까지 하나의 AI 재무 인프라로") jumps to 48px / weight 1000 (ExtraBlack). Body and UI text drop to 16px / weight 400, with nav and docs labels at 14px / weight 500. The marketing site is near-shadowless — separation comes from flat tinted surfaces (`#f9fafb`), thin `#d1d5db` hairlines, and generous pill geometry (64px nav pills, 999px CTA pills, 30px cards); the rare card uses only a soft purple-tinted glow. Cross the boundary to the developer docs (`developers.portone.io`) and the palette shifts from gray to slate: headings move to slate ink (`#0f172a`), body to slate (`#334155`), and muted labels to slate-400 (`#94a3b8`), with tighter 6px radii — but the orange (`#fc6b2d`) accent stays constant. Status colors: a blue tint (`#e6f1ff`) for informational chips, an error red (`#df4c4c`) on a red tint (`#fef2f2`), and a green tint (`#dcfce7`) for success — with the gray ladder `#374151` → `#6b7280` providing text hierarchy and white (`#ffffff`) doing duty as on-primary text. The charcoal (`#363a44`) gradient on the secondary CTA is the only non-orange "action" color. The hex values, sizes, weights, labels, radii, and the two-surface split in this paragraph are recorded. Readings of that captured layer as calm, confident financial infrastructure rather than a hard-sell SaaS pitch; of `#111827` as never pure black for headings, giving the page a premium, trustworthy weight; of the eye as trained to treat that single orange as "the action."; of Pretendard Variable as the de-facto Korean product font; of the light-versus-ultra-heavy contrast as the core tension of the system — whisper-light where it sets the scene, ultra-bold where it persuades; of restraint with depth and a deliberate two-surface split as what distinguishes PortOne from its fintech peers; and of the orange accent as anchoring both surfaces to one brand — are a derived editorial implementation inference from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. PortOne (포트원) began in **2015** as **아임포트 (Iamport)**, a developer-first payment-integration service operated by **코리아포트원 (Korea PortOne Co., Ltd.)** under CEO **정영주 (Jung Young-joo)**. Iamport solved a uniquely painful Korean problem: integrating even one domestic PG (payment gateway) was a multi-week ordeal of bespoke SDKs, and supporting many of them was effectively a full-time job. Iamport's premise — a single API in front of every PG — let developers ship payments in minutes instead of months. On **February 6, 2023** the company rebranded from Iamport to **PortOne**, signaling a move beyond a developer utility toward a full **"원 페이먼트 인프라" (One Payment Infrastructure)** platform. The rebrand carried three stated brand narratives — *"One to Beyond, First Chapter, Asia No.1"* — and a service philosophy of *"세상 모든 방식의 결제를 가능하게 하는 통합 솔루션"* ("an integrated solution that makes every method of payment in the world possible"). By 2022 the company was processing roughly **10조원 (~10 trillion KRW)** in annual transaction volume across ~2,300 merchants; today PortOne reaches **8 countries and ~3,000 customers**, fronting **100+ payment options** and ~25 domestic and international PGs through one integrated API, and extending into partner-settlement automation and AI-assisted financial operations. What PortOne refuses, visible in its design: the heavy, intimidating chrome of legacy enterprise finance software, and the dark-pattern urgency of conversion-obsessed marketing. What it embraces: a flat, fast, developer-respecting interface; a single trustworthy orange; Pretendard Variable headlines that range from whisper-light to ExtraBlack; and copy that names the capability plainly. The two-surface design — gray-ink marketing, slate-ink docs, one orange accent — mirrors the company's dual audience of business buyers and the developers who actually wire up the API. The source's own note that specific figures beyond the homepage are widely reported public facts, not directly quoted PortOne statements in this turn, is kept here so that evidence class stays visible. The same source names its own interpretive claims as "one API one infrastructure" and "two-surface split mirrors dual audience"; those stay in the derived class of this paragraph. Official history, the KDPRESS rebrand article, and the live surfaces provide that narrative context; they do not by themselves supply interface tokens. The years 2015 and 2022, February 6, 2023, 아임포트 / Iamport, 코리아포트원 / Korea PortOne Co., Ltd., 정영주 / Jung Young-joo, the three stated brand narratives, the service philosophy, the TPV and merchant figures, 8 countries / ~3,000 customers / 100+ payment options / ~25 PGs, partner-settlement automation and AI-assisted financial operations, the refusal/embrace pairing, that closing two-surface / dual-audience sentence, and the source's own figures-are-public-facts note are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-rebrand narrative as context that does not by itself supply interface tokens, and reading the two-surface design as mirroring a dual audience, are derived editorial implementation inferences from the verified surfaces; they are not PortOne-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

- Follow the primary CTA **도입문의** / "Contact sales" on `https://www.portone.io`.
- Follow the secondary CTA **시작하기** / "Get started" on `https://www.portone.io`.
- Search the developer docs at `https://developers.portone.io`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable PortOne user segments (Korean e-commerce developers, finance/operations teams, cross-border merchants), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is those publicly observable segments: Korean e-commerce developers, finance/operations teams, cross-border merchants. The same source names a dual audience of business buyers and the developers who actually wire up the API, and treats the reader — often a developer or finance operator — as a peer. Reading those source-named groups as this product's audience, dropping those fictional archetypes rather than promoting them, and carrying no occupation reconstructed from the dropped biographies, are derived editorial implementation inferences from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

- Pretendard Variable across both surfaces — weight 400 hero vs weight 1000 (ExtraBlack) section heads
- Single saturated orange (`#fc6b2d`) reserved for the primary CTA and eyebrow labels
- Tailwind ink (`#111827`) for marketing text; slate ink (`#0f172a` / `#334155`) on developer docs
- Flat depth: mostly shadowless; tinted `#f9fafb` surfaces + `#d1d5db` hairlines do the separating
- Pill-everything geometry — 64px nav pills, 999px CTA pills, 30px feature cards
- Charcoal gradient (`#363a44`) as the secondary "action" color
- Cool gray neutral ladder (`#374151` → `#6b7280` → `#94a3b8`) for text hierarchy
- Status tints: blue `#e6f1ff`, success `#dcfce7`, error `#df4c4c` on `#fef2f2`

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not PortOne-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **One API, one infrastructure.** PortOne's entire reason for existing is consolidation — many PGs behind a single integration. *UI implication:* one primary action color (orange `#fc6b2d`), one font, one consistent pill geometry; never fragment the system.
2. **Respect the developer.** The product was born as a developer tool (Iamport). *UI implication:* the docs surface is first-class — precise slate typography, fast search, integration-path-first navigation, not an afterthought.
3. **Capability over hype.** State what it does, not how revolutionary it is. *UI implication:* declarative headlines, terse CTAs ("도입문의"), no exclamation-driven urgency.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* near-shadowless; separate with `#f9fafb` tint and `#d1d5db` hairlines; keep the page light.
5. **Quiet where it informs, bold where it persuades.** *UI implication:* light (400) hero and body for reading; ExtraBlack (1000) heads and orange eyebrows for the moments that need to land.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

- Use Pretendard Variable for all text — both marketing and docs surfaces
- Reserve signal orange (`#fc6b2d`) for the primary CTA and section eyebrows — keep it the single "action" color
- Contrast light (400) hero copy against ExtraBlack (1000) section heads — the weight jump is the hierarchy
- Use ink (`#111827`) for marketing headings and slate (`#0f172a` / `#334155`) for docs — never pure black
- Separate sections with flat tinted surfaces (`#f9fafb`) and `#d1d5db` hairlines, not shadows
- Use pill geometry — 64px nav pills, 999px CTA pills, 20–30px cards
- Use the charcoal gradient (`#363a44`) for the secondary CTA
- Keep status colors tinted and quiet: blue `#e6f1ff`, success `#dcfce7`, error `#df4c4c` on `#fef2f2`

### Avoid

The source states these seven as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

- Spread orange across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for headings — use ink `#111827` or slate `#0f172a`
- Lean on heavy drop shadows for elevation — PortOne is a flat, hairline-separated system
- Use sharp/square corners on CTAs or nav — interactive chrome is pill-shaped
- Mix in a second saturated accent hue — orange is the only one; charcoal is neutral
- Set every headline at one weight — the light/ExtraBlack contrast is the voice
- Use a different font on the docs vs marketing — Pretendard Variable spans both

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping marketing gray-ink roles off docs slate-ink roles, keeping `tokens.colors.canvas` `#ffffff` off `tokens.colors.on-primary` `#ffffff`, keeping `tokens.colors.error-bg` `#fef2f2` off `tokens.components.badge-error.bg`, keeping `tokens.colors.success-bg` `#dcfce7` off `tokens.components.badge-success.bg`, keeping `tokens.colors.gray-strong` `#374151` off `tokens.components.badge-success.fg`, attaching every role to the surface the source recorded, and keeping the YAML token note as the facts it names, are derived editorial implementation inferences from the verified surfaces; they are not PortOne-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Marketing surface (`https://www.portone.io`)

- **Signal Orange** (`#fc6b2d`): Primary brand color and CTA fill (rendered as a top-down gradient). The single "action" color — also used on the small eyebrow labels above each section ("원 페이먼트 인프라", "국내 결제"). Token-set path `tokens.colors.primary`. Constant across both captured surfaces.
- **Charcoal** (`#363a44`): The secondary CTA gradient fill ("시작하기"). A deep neutral that pairs with the orange without competing for the "primary action" read. Token-set path `tokens.colors.secondary`.
- **Ink** (`#111827`): Primary heading and text color on marketing surfaces. A very dark blue-gray (Tailwind gray-900) used instead of pure black. Token-set path `tokens.colors.ink`.
- **Pure White** (`#ffffff`): Page background, white card surfaces, and text on orange/charcoal CTAs (on-primary). Token-set path `tokens.colors.canvas`. `tokens.colors.on-primary` is the same hex on a second key.
- **Surface Gray** (`#f9fafb`): Cool near-white tinted surface for feature cards and segmented sections. Token-set path `tokens.colors.surface`.
- **Surface Alt** (`#f3f4f6`): A flatter secondary gray for alternating blocks and chips. Token-set path `tokens.colors.surface-alt`.
- **Hairline** (`#d1d5db`): Thin borders, dividers, and input outlines — the primary separation device in a largely shadowless system. Token-set path `tokens.colors.border`.
- **Gray Strong** (`#374151`): Secondary body copy and emphasis text (Tailwind gray-700). Token-set path `tokens.colors.gray-strong`.
- **Body Gray** (`#6b7280`): Tertiary text, descriptions, captions (Tailwind gray-500). Token-set path `tokens.colors.body`.

Developer docs surface (`https://developers.portone.io`)

- **Slate Ink** (`#0f172a`): Heading color on `developers.portone.io` (Tailwind slate-900). Token-set path `tokens.colors.ink-slate`.
- **Slate Body** (`#334155`): Body and sidebar text on the docs (Tailwind slate-700). Token-set path `tokens.colors.body-slate`.
- **Muted Slate** (`#94a3b8`): Placeholder, search hint, and lowest-emphasis labels (Tailwind slate-400). Token-set path `tokens.colors.muted`.

Status & accent (recorded on the marketing capture; orange remains the constant accent on docs)

- **Accent Blue** (`#e6f1ff`): Informational tinted surface / highlight chip background. Token-set path `tokens.colors.accent-blue`.
- **Error Red** (`#df4c4c`): Error and alert text/icon color. Token-set path `tokens.colors.error`.
- **Error Tint** (`#fef2f2`): Soft red surface behind error states and alert pills. Token-set path `tokens.colors.error-bg`.
- **Success Tint** (`#dcfce7`): Soft green surface for success states and confirmation pills. Token-set path `tokens.colors.success-bg`.

The source records marketing gray-ink vs docs slate-ink as an intentional two-surface split, not an unresolved conflict; orange `#fc6b2d` is constant across both. Keeping both ramps, and refusing to collapse them into one fill, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them. Source §5 writes a base unit of ~4px and the scale 4px, 8px, 16px, 20px, 24px, 48px, 64px. Both writings stay. Keeping the YAML unitless steps beside the §5 px writings, rather than collapsing them to one form, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| base | 16 | `tokens.spacing.base` |
| md | 20 | `tokens.spacing.md` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 48 | `tokens.spacing.xl` |
| section | 64 | `tokens.spacing.section` |

Notable, as the source states them: CTA pills use 12px 20px padding; nav pills a square 16px; cards 20–24px interior padding. `tokens.spacing.base: 16` is not `tokens.rounded.md: 16`, not the 16px body role, and not nav padding `16px`. `tokens.spacing.md: 20` is not card-surface padding `20px` and not `tokens.components.card-white.radius: 20px`. `tokens.spacing.lg: 24` is not card-white padding `24px` and not the 24px eyebrow role. `tokens.spacing.xl: 48` is not Display H2 `48`. `tokens.spacing.section: 64` is not the 64px nav-item radius. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them. Source §5 writes Extra small (6px): docs inputs, code chips, dense UI; Small (8px): badges, inner elements; Medium (16px): standard cards; Large (30px): hero feature cards; Full (999px): CTA pills, nav pills. Both writings stay. YAML `full: 999` is not rewritten as a replacement for component `999px`.

| Step | Value | Token-set path | Source §5 use |
|---|---:|---|---|
| xs | 6 | `tokens.rounded.xs` | docs inputs, code chips, dense UI |
| sm | 8 | `tokens.rounded.sm` | badges, inner elements |
| md | 16 | `tokens.rounded.md` | standard cards |
| lg | 30 | `tokens.rounded.lg` | hero feature cards |
| full | 999 | `tokens.rounded.full` | CTA pills, nav pills |

Component-local radii that are not a step on this scale: White Feature Card `20px`; Header Nav CTA and nav-item pill `64px`. `tokens.rounded.md: 16` is not `tokens.spacing.base: 16`. `tokens.rounded.lg: 30` is not a spacing step. `tokens.rounded.full: 999` is not the 64px nav pill recorded as a second geometry. Keeping YAML `6` / `8` / `16` / `30` / `999` off the prose `px` writings, keeping card-white `20px` and nav `64px` off the rounded scale, and reading the repeated pill (64px nav, 999px CTA) as a rounded cadence rather than as one radius applied everywhere, are derived editorial implementation inferences from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f9fafb` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `1px solid #d1d5db` border | Card outlines, input borders, dividers |
| Glow (Level 3, rare) | `rgba(180,156,197,0.1) 0px 0px 16px 4px` | Subtle ambient lift on a featured card |

Token-set path `tokens.shadow.none` is `none`. Token-set path `tokens.shadow.glow` is `rgba(180,156,197,0.1) 0px 0px 16px 4px`. Live inspection found `box-shadow: none` across the hero, nav, headings, and most cards; the only elevation observed was a single soft purple-tinted glow on a featured card. Depth and grouping come from flat tinted surfaces (`#f9fafb`) and thin `#d1d5db` hairlines. When emphasis is needed, the system reaches for color (orange `#fc6b2d` or the charcoal `#363a44` CTA), never heavy elevation. The four-level table, the two shadow tokens, the live `box-shadow: none` observation, and the rare-glow writing are the source's own. Reading PortOne as a near-shadowless system, reading that flatness as keeping the financial UI feeling clean, fast, and mobile-native, and keeping the glow on a featured card rather than as a card-elevation ladder, are derived editorial implementation inferences from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, and shadow on the homepage and developer-docs surfaces. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this motion section. Duration roles as this record states them, with no computed transition observation behind them, are a derived editorial implementation inference from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to PortOne evidence, so the curves are omitted here and only the roles and their uses are kept. Classing those curves as untraceable to PortOne evidence, and omitting them on that ground, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

| Token | Use |
|---|---|
| `ease-enter` | Arriving — sheets, cards, pills |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

A future motion pass may promote an omitted curve only after recording, per component, the computed transition properties, the animation name, the duration, the easing, and the reduced-motion behavior on the live surface; confirming a single curve, or citing an official source for one, does not satisfy that condition. Setting that promotion condition in this document, rather than reading it as a PortOne-authored motion specification, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

Motion rules, as the source states them:

- Motion is functional and quiet — consistent with the flat, fast aesthetic.
- Pill CTAs respond to press with a subtle scale/opacity shift; section content fades in from below at `motion-standard / ease-enter`.
- No bounce or spring — payments infrastructure signals steadiness, not playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

Reading those motion rules as matching a flat, fast aesthetic, and reading the no-bounce stance as a steadiness signal for payments infrastructure, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, and the resolution in each cell, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | This record's evidence is live inspection of two web surfaces; it carries no PortOne-published type specification. |
| Live computed surface-use | Both captured surfaces compute visible text as Pretendard Variable — marketing homepage and developer docs. |
| Official distributed asset | No PortOne-exclusive distributed type family was verified. |
| Declared-only | `Pretendard` and system fallbacks are declared beside Pretendard Variable; those fallbacks are not presented as the brand face. |
| License | No license or distribution statement accompanies the family in this record. |
| Outside these captures | Surfaces other than `https://www.portone.io` and `https://developers.portone.io` contributed no type value here. |

### Family

- **Sans:** `Pretendard Variable` (with `Pretendard` and system fallbacks) — used for every text element on both the marketing site and the developer docs. Token-set path `tokens.typography.family.sans`.
- Do not replace unavailable or unobserved brand type with Pretendard Variable. A fallback member of a stack is never presented as the brand face.

Calling Pretendard Variable the one face that carries every job on both captured surfaces, and refusing to present the declared `Pretendard` / system fallbacks as the brand face, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification. The family name is live-computed.

### Type roles

YAML writes numeric sizes and line heights without a `px` suffix. Source §3 writes the same roles with `px` and rem, and writes `~` on three line-heights. All writings stay. YAML lineHeight values stay as those numbers and are never converted to a replacement px. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 notes beside them, keeping YAML `56` / `1.2` off prose `56px (3.50rem)` / `~1.2`, keeping YAML `48` / `1.25` off `48px (3.00rem)` / `~1.25` and off `tokens.spacing.xl: 48`, keeping YAML `36` / `1.35` off `36px (2.25rem)` / `~1.35`, keeping YAML `24` off `24px (1.50rem)` and off `tokens.spacing.lg: 24`, keeping body `16` off `tokens.spacing.base: 16` and off `tokens.rounded.md: 16`, keeping nav `14` off any spacing step, keeping button `15` off secondary-CTA `12px / 400`, and keeping caption `12` off that same secondary-CTA font, are derived editorial implementation inferences from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | Notes |
|---|---|---|---:|---|---|---|
| Hero H1 | Pretendard Variable | YAML `56` / §3 `56px (3.50rem)` | 400 | YAML `1.2` / §3 `~1.2` | Hero H1, light Pretendard | Light hero headline |
| Display H2 | Pretendard Variable | YAML `48` / §3 `48px (3.00rem)` | 1000 | YAML `1.25` / §3 `~1.25` | Section H2, ExtraBlack | ExtraBlack section heads |
| Section H3 | Pretendard Variable | YAML `36` / §3 `36px (2.25rem)` | 400 | YAML `1.35` / §3 `~1.35` | Sub-section H3 | Sub-section headlines |
| Eyebrow | Pretendard Variable | YAML `24` / §3 `24px (1.50rem)` | 1000 | YAML none / §3 `normal` | Orange eyebrow label above sections | Orange label above sections |
| Body | Pretendard Variable | YAML `16` / §3 `16px (1.00rem)` | 400 | YAML `1.5` / §3 `1.5` | Standard reading text | Standard reading text |
| Nav / Docs | Pretendard Variable | YAML `14` / §3 `14px (0.88rem)` | 500 | YAML none / §3 `normal` | Nav links / docs sidebar | Nav links, docs sidebar |
| Button | Pretendard Variable | YAML `15` / §3 `15px (0.94rem)` | 700 | YAML none / §3 `normal` | CTA button label | CTA button label |
| Caption | Pretendard Variable | YAML `12` / §3 `12px (0.75rem)` | 400 | YAML none / §3 `normal` | Small labels, metadata | Small labels, metadata |

Token-set paths: `tokens.typography.hero` · `tokens.typography.display` · `tokens.typography.section` · `tokens.typography.eyebrow` · `tokens.typography.body` · `tokens.typography.nav` · `tokens.typography.button` · `tokens.typography.caption`.

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

- **One font, two weight extremes**: Pretendard Variable carries everything; the hierarchy signal is the weight jump from light (400) hero copy to ExtraBlack (1000) section heads.
- **Orange owns the eyebrow**: the small section-eyebrow labels are set in heavy weight and signal orange (`#fc6b2d`) — a recurring rhythmic accent.
- **Hangul-first sizing**: body sits at a comfortable 16px; docs and nav drop to 14px / weight 500 for dense scanning.
- **Heading warmth**: headings use ink (`#111827`) on marketing and slate (`#0f172a`) on docs — never pure black.

### Assets

- Catalog logo: YAML `logo.type: github`, `logo.slug: portone-io`. That GitHub-org slug is a catalog identity pointer, not a PortOne-hosted brand file on this page.
- Product screenshots and illustrations, as the source records them, carry little to no shadow at any size, consistent with the flat system.

Reading the GitHub-org slug as a catalog identity pointer rather than as a PortOne-hosted brand file, and reading the screenshots as first-party page content rather than as a published illustration specification, are derived editorial implementation inferences from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The live inspection recorded default computed styles. The source's live inspection recorded computed default styling, and the state treatments in the State record below are stated at system level rather than measured per control.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. YAML records `type: button` on `tokens.components.button-primary` and `tokens.components.button-secondary`; `type: tab` on `tokens.components.nav-link`; `type: card` on `tokens.components.card-surface` and `tokens.components.card-white`; `type: input` on `tokens.components.input-search`; `type: badge` on `tokens.components.badge-success` and `tokens.components.badge-error`. Header Nav CTA is labelled `not in the token set`. Tinted Surface Card and White Feature Card have recorded geometry and no interactive-kind evidence, so kind and a state-applicability map are omitted for them rather than assumed.

The applicability note above, every interactive-kind verdict, every applicability verdict, the reason given for either, the omit-kind decision for the two card records, the refusal to attach a YAML primitive type that the token set does not record, labelling the non-YAML component `not in the token set`, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

### State treatments

The nine state treatments below are a derived editorial implementation inference from the verified surfaces; they are not PortOne-authored or a separately published UI specification. They compose values established elsewhere in this contract, and no computed per-component observation accompanies them. The rows themselves are the source's §14 table, kept as written.

| State | Treatment |
|---|---|
| **Empty (no transactions / data)** | White canvas. Single Ink (`#111827`) line at body size explaining no activity yet, with one orange CTA to take the next step. No illustration clutter. |
| **Empty (saved / list, none yet)** | Body Gray (`#6b7280`) single line: nothing here yet, plus a path back. Honest, calm. |
| **Loading (data fetch)** | Skeleton rows on `#f9fafb` tinted surface at final card dimensions, flat pulse. No shadow shimmer — consistent with the shadowless system. |
| **Loading (docs search)** | Inline spinner within the search field; previous results stay visible until replaced. |
| **Error (request failed)** | Inline message: Error Red (`#df4c4c`) text on Error Tint (`#fef2f2`) surface, 8px radius, with a plain-language cause and a retry. No generic "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input in the error tone; describes what is valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation in Success Tint (`#dcfce7`), 8px radius; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f9fafb` blocks at final dimensions, flat pulse, no elevation. |
| **Disabled** | Muted Slate (`#94a3b8`) text on reduced-opacity surface; the orange CTA fades rather than turning gray, to preserve the brand read. |

These rows describe empty/loading/error/success treatments the source wrote at system level. They are not attached as computed visual treatments to the destination controls above.

### Primary CTA (도입문의)

- Role: Primary call-to-action — orange gradient pill ("도입문의" / "Contact sales")
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Label: `도입문의` / `Contact sales`
- Background: `#fc6b2d`
- Text: `#ffffff`
- Radius: 999px
- Padding: 12px 20px
- Font: 15px Pretendard Variable weight 700
- Token-set font record: `15px / 700`
- Token-set use: `Primary CTA 도입문의 — orange gradient pill`
- Domain: marketing homepage `https://www.portone.io`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; source states the orange CTA fades rather than turning gray; no opacity value is given |
| loading | not-applicable | This control takes the reader to a sales inquiry; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination role; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result |

### Secondary CTA (시작하기)

- Role: Secondary call-to-action — charcoal gradient pill ("시작하기" / "Get started")
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Label: `시작하기` / `Get started`
- Background: `#363a44`
- Text: `#ffffff`
- Radius: 999px
- Padding: 12px 20px
- Font: 12px Pretendard Variable weight 400
- Token-set font record: `12px / 400`
- Token-set use: `Secondary CTA 시작하기 — charcoal gradient pill`
- Domain: marketing homepage `https://www.portone.io`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | This control takes the reader to a start path; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination role; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result |

### Header Nav CTA

- Role: Compact contact CTA in the sticky header
- Primitive type: not in the token set
- Kind: interactive
- Background: `#363a44`
- Text: `#ffffff`
- Radius: 64px
- Padding: 16px
- Domain: marketing homepage sticky header
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | This control is a compact contact entry in the header; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination role; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result |

### Navigation

- Role: Top horizontal nav ("서비스", "가격안내", "헬프센터", "개발가이드", "블로그")
- Primitive type: `tab` · Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#111827`
- Radius: 64px (nav-item pill)
- Padding: 16px
- Font: 14px Pretendard Variable weight 500
- Token-set font record: `14px / 500`
- Active: orange `#fc6b2d` text on active item
- Token-set active: `orange #fc6b2d text on active`
- Token-set use: `Top navigation item pill`
- Domain: marketing homepage `https://www.portone.io`
- Observed: default; active item text `#fc6b2d`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A nav item can be gated; visual treatment omitted |
| loading | not-applicable | This item is a destination tab/link; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab/link; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching a nav destination is not an operation with a success result |

### Tinted Surface Card

- Role: Feature card sitting on the cool gray surface
- Primitive type: `card`
- Background: `#f9fafb`
- Text: `#111827`
- Radius: 30px
- Padding: 20px
- Token-set use: `Tinted feature card on gray surface`
- Domain: marketing homepage `https://www.portone.io`
- Observed: default; `box-shadow: none`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### White Feature Card

- Role: White feature card, hairline-separated (no shadow)
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#111827`
- Radius: 20px
- Padding: 24px
- Token-set use: `White feature card, hairline-separated`
- Domain: marketing homepage `https://www.portone.io`
- Observed: default; hairline-separated, no shadow
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Docs Search Field

- Role: Search input on the developer docs (`developers.portone.io`), placeholder in muted slate `#94a3b8`
- Primitive type: `input` · Kind: interactive
- Anatomy: value field
- Background: `#ffffff`
- Text: `#334155`
- Border: `1px solid #d1d5db`
- Radius: 6px
- Padding: 6px 12px
- Token-set use: `Docs search field`
- Domain: developer docs `https://developers.portone.io`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | Source states an inline spinner within the search field, with previous results staying visible until replaced; no computed spinner value is given |
| error | applicable | Form field; source states a field-level validation message; visual treatment omitted as a computed value |
| success | not-applicable | A search field does not report an action-complete success of its own |

### Success Pill

- Role: Success / confirmation status pill
- Primitive type: `badge`
- Kind: non-interactive — a status marker, not a commit control
- Background: `#dcfce7`
- Text: `#374151`
- Radius: 8px
- Font: 12px Pretendard Variable weight 500
- Token-set font record: `12px / 500`
- Token-set use: `Success status pill`

### Error Pill

- Role: Error / alert status pill
- Primitive type: `badge`
- Kind: non-interactive — a status marker, not a commit control
- Background: `#fef2f2`
- Text: `#df4c4c`
- Radius: 8px
- Font: 12px Pretendard Variable weight 500
- Token-set font record: `12px / 500`
- Token-set use: `Error / alert pill`

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and container

- Centered single-column hero with the 56px Pretendard H1 as the anchor
- Section eyebrow (orange, weight 1000) → ExtraBlack H2 → supporting body is the repeating vertical rhythm
- Feature sections alternate between white (`#ffffff`) and tinted gray (`#f9fafb`) full-width bands
- Cards group related products at 20–30px radius
- Spacing restated from `tokens.spacing`: 4 / 8 / 16 / 20 / 24 / 48 / 64
- Shape restated from `tokens.rounded`: extra-small 6 · small 8 · medium 16 · large 30 · full 999
- Notable: CTA pills use 12px 20px padding; nav pills a square 16px; cards 20–24px interior padding

Whitespace the source states:

- **Breathing room over density**: despite being a data-heavy fintech, the marketing surface is airy with generous vertical rhythm.
- **Flat segmentation**: sections separate by background tint (`#f9fafb` vs `#ffffff`) and `#d1d5db` hairlines, not by shadow.
- **Pill rhythm**: the repeated pill (64px nav, 999px CTA) creates a consistent rounded cadence.

Reading the page as breathing-room-over-density, reading segmentation as flat tint-and-hairline rather than shadow, and reading the repeated pill as a rounded cadence, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the recorded target sizes are stated by the source at system level rather than measured across viewports. Reading those rows as the source's own layout record, not as a newly measured cross-viewport specification, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, nav collapses |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

Touch targets the source records:

- CTA pills at ~50px height, full pill for an unmistakable target
- Nav pills at 40px height with 16px padding
- Docs search field at comfortable 6px 12px padding

Collapsing strategy, as the source states it:

- Hero: 56px Pretendard headline scales down on mobile, weight maintained
- Nav: horizontal pills → hamburger toggle
- Feature bands: multi-column → stacked single column
- Tinted / white alternating sections maintain full-width treatment

Image behavior: Product screenshots and illustrations carry little to no shadow at any size, consistent with the flat system. Cards maintain 16–30px radius across breakpoints. The Desktop row keeps the source body's `1024-1440px` range.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice samples

These strings are verbatim live copy from the captured homepage. The parenthetical labels — hero H1, section H2, page title meta — are a derived editorial implementation inference from the verified surfaces; they are not PortOne-authored or a separately published UI specification.

- "AI로 결제와 재무 운영을 자유롭게" — hero H1 (capability-framed mission). *(verified live homepage)*
- "결제 연동부터 글로벌 재무 운영까지 하나의 AI 재무 인프라로" — section H2 (end-to-end promise). *(verified live homepage)*
- "통합 결제·정산 AI 재무 인프라 | 포트원" — page title meta (integrated positioning). *(verified live homepage)*

English glosses sit beside the Korean originals and do not replace them: "Free your payments and financial operations with AI"; "One Payment Infrastructure". Placing those glosses beside the issued Korean, rather than substituting them, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

### Voice and tone

The voice reading below, including the tone table, is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification. PortOne's voice is **clear, infrastructural, and quietly ambitious** — a payments partner that turns a notoriously complex domain (multi-PG integration, cross-border settlement, reconciliation) into plain, confident Korean. The hero line "AI로 결제와 재무 운영을 자유롭게" and the positioning "원 페이먼트 인프라" set the register: declarative, capability-first, never gimmicky. Copy treats the reader — often a developer or finance operator — as a peer who wants the integration done, not a lead to be pressured.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, capability-framed. "AI로 결제와 재무 운영을 자유롭게." Confident, not hype. |
| Section eyebrows | Terse product labels in orange. "원 페이먼트 인프라", "국내 결제". |
| CTAs | Direct, low-pressure. "도입문의", "시작하기". |
| Feature descriptions | Benefit-first, concrete. "사업의 시작부터 확장까지, 단 하나의 결제 인프라." |
| Developer docs | Precise, peer-to-peer. Quick guides and API references lead with the integration path. |

### Forbidden register

The exclusions below are a derived editorial implementation inference from the verified surfaces; they are not PortOne-authored or a separately published UI specification. **Forbidden register**: aggressive sales urgency, undefined jargon left unexplained, exclamation-heavy hype, fear-based FOMO. PortOne sells reliability, not anxiety.

Nav labels, kept as issued copy: "서비스", "가격안내", "헬프센터", "개발가이드", "블로그".

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

These decisions are unnamed values, not permissions to invent. Treating the list as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not PortOne-authored or a separately published UI specification.

- the exact `ease-enter`, `ease-exit`, and `ease-standard` curves; the token names and uses are recorded, the curves carry no attribution
- hover, pill-press, and focus visual treatments; the motion rules name `motion-fast` 120ms without an accompanying computed value
- `focus-visible` visual treatment; the source names generic focus as a motion-fast use and does not record a `focus-visible` color
- computed per-component values behind the empty, loading, error, success, skeleton, and disabled treatments described above
- the interactive kind of the Tinted Surface Card and the White Feature Card
