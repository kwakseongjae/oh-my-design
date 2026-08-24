# 8percent Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

8percent (에잇퍼센트) is a Korean online investment-linked finance (온투업) platform. Catalog homepage identity is `https://www.8percent.kr/`. Treating the following three URLs as the named evidence domains of this reconstruction is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification. This contract covers three named first-party evidence domains from the 2026-07-02 packet: the product homepage at `https://www.8percent.kr/`, the business-disclosure surface at `https://www.8percent.kr/disclosures/`, and the official product/engineering blog at `https://8percent.github.io/` (including the EDS post `https://8percent.github.io/2024-07-15/frontend-eds-improvement/`).

Source token note: primary = live action/emphasis blue (`#3282f0`); `#6741d9` purple is the secondary accent (tinted "more" pills). Data-dense, near-shadowless product surface on a cool-grey canvas (`#f1f3f5`) with white (`#ffffff`) cards. Official DS = EDS (Eight Design System): EdsButton/EdsTextfield/EdsToggle/EdsCheckbox. Treating that note as a register split — `#3282f0` is catalog `primary_color` and the harvested primary EdsButton fill, `#6741d9` is the tinted-pill accent rather than a second primary, and EDS names EdsButton / EdsTextfield / EdsToggle / EdsCheckbox — is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification.

The following evidence-domain sentence is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification. Color, type, and component values below stay attached to the surface that established them. Pretendard is recorded on the homepage and disclosures. NanumSquare (with Source Sans Pro) is recorded on the official product/engineering blog (`8percent.github.io`). A homepage or disclosure value is not a proxy for the blog face.

The next paragraphs’ marketplace-character, hierarchy, restraint, typographic-personality (Korean-product-standard; weight and size rather than color; appropriate-for-financial-data), flashier-peer-contrast, and bank-grade-unintimidating readings are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification. The source reads the product surface as a data-dense, trust-first financial marketplace that stays calm instead of loud. The page sits on a soft cool-grey canvas (`#f1f3f5`) with white (`#ffffff`) cards floating on it, separated not by shadows but by a light divider grey (`#dee3e8`) and thin `#d2d2d2` hairlines. Text runs in a restrained cool-neutral ladder — near-black ink (`#1d2024`) for headings, a softer slate (`#3c3c3c`) for the big statistic numerals, and a quiet mid-grey (`#606060`) for body copy. The single saturated action color is a confident blue (`#3282f0`), reserved for emphasis words, links, and the primary call-to-action; the source says the eye is trained to read that blue as "do this / go here."

The typographic personality is read as Korean-product-standard: everything on the product surfaces is set in **Pretendard**, tuned for dense legibility. Headlines are Bold (700) and tightly tracked — section titles at 24px / 1.50rem with `-0.6px` tracking (`#1d2024`), and the marquee accumulated-loan statistic at 40px / 2.50rem weight 400 with `-0.9px` tracking in slate (`#3c3c3c`). Body and UI text drop to a quiet 14px / 0.88rem / weight 400 in `#606060`. The result is read as a hierarchy driven by weight and size rather than color — appropriate for a page that must present interest rates, credit grades, and loan balances without ever feeling like a hard sell.

What the source treats as distinctive among flashier fintech peers is restraint with depth and a disciplined second accent. There are essentially no drop shadows; grouping comes from flat tinted surfaces and hairlines. Beyond the primary blue, a measured purple (`#6741d9`) appears only on tinted "more" pills (a `rgba(103, 65, 217, 0.1)` wash behind `#6741d9` text). Investment products carry color-coded credit-grade markers — a blue tier (`#3770b2`) plus gold (`#d2b82f`), green (`#4a7656`), and lilac (`#8884c9`) variants. Interactive chrome is softly rounded (10px cards dominate, with a 3–16px radius family plus YAML `full` 9999 / `9999px`), and a light-blue tint surface (`#f1f6fe`) hosts the softer secondary actions. The source reads that combination as engineered, orderly, and deliberately un-intimidating — a bank-grade tool that looks like a modern product.

Treating the following public-history and homepage-press facts as narrative rather than interface tokens is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification. The source records that 8percent was founded around **2014 by 이효진 (Lee Hyo-jin, CEO)**, a former bank employee. Broader founding details are widely documented public facts, not directly quoted from a verified 8percent statement in the source turn. The company became **Korea's first licensed online investment-linked finance provider (온투업 1호)**, a positioning the source says it still leads with on the homepage. The live homepage marks 10th-anniversary milestones and an accumulated loan volume above 1.39 trillion won, including the live statistic "누적 대출액 1조 3,955억 2,815만 원". Press coverage on the site documents institutional-investor inflows and the CEO's public profile, including a noted meeting with then-U.S. Treasury Secretary Janet Yellen.

The following product-origin / name-thesis reading is a derived editorial implementation inference from the source Brand Narrative; it is not 8percent-authored or a separately published UI specification. The source states that the brand was founded to attack a uniquely Korean gap: the chasm between the low single-digit rates savers earned on deposits and the high double-digit rates borrowers paid on consumer and card loans. The brand name encodes the mission — connect lenders and borrowers directly so both meet near a fairer middle (an ~8% register) — reframing lending as a transparent, data-driven marketplace rather than an opaque bank product.

The following refusal, embrace, decade-arc, and category-operator readings are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification. The source treats 8percent as refusing the hard-sell urgency and guaranteed-return theatrics of predatory lending marketing, and the heavy institutional chrome of legacy banking, and as embracing a flat, data-dense, near-shadowless interface; a single trustworthy blue; verifiable statistics leading the page; and color-coded credit grading that makes risk legible rather than hidden. Over a decade the platform is described as an established P2P/online-investment brand and as the disciplined, disclosure-forward operator in a category that has seen less-careful players fail.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Scan products now funding (`모집중 상품` on the homepage).
- Read the accumulated-loan statistic (`누적 대출액 1조 3,955억 2,815만 원`).
- Open business disclosure (`사업공시 보러가기`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names fictional archetypes informed by publicly observable segments (Korean retail investors seeking mid-yield alternatives, borrowers refinancing high-rate loans), not individual people. Restricting Audience so those fictional archetypes are not Audience and are not primary tasks, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification.

### Distinctive traits

- Action blue `#3282f0` as catalog `primary_color`, emphasis/link color, and primary EdsButton fill
- Measured purple `#6741d9` on a `rgba(103, 65, 217, 0.1)` tinted "more" pill
- Cool-neutral text ladder: ink `#1d2024` → slate `#3c3c3c` → body `#606060` → muted `#858d94` → faint `#9ca5ad`
- Cool-grey canvas `#f1f3f5`, white `#ffffff` cards, divider `#dee3e8`, hairline `#d2d2d2`; live inspection `box-shadow: none`
- Credit-grade blue `#3770b2` plus gold `#d2b82f` / green `#4a7656` / lilac `#8884c9`
- Light-blue tint surface `#f1f6fe` for soft secondary actions
- Pretendard on product surfaces; NanumSquare on the official blog
- Softly rounded geometry: 10px card radius dominant, YAML 3 / 4 / 8 / 10 / 16 / 9999 (`9999px`)
- Official EDS names: EdsButton, EdsTextfield, EdsToggle, EdsCheckbox

Treating `#3282f0` as the single action hue rather than a second identity color and as catalog `primary_color` plus emphasis/link color plus primary EdsButton fill, treating `#6741d9` as a measured tinted-pill accent rather than a second primary, treating `#3770b2` as a grade marker rather than the action blue, treating surfaces as separated by tint and hairline rather than elevation, treating geometry as softly rounded with 10px dominant, and treating NanumSquare as the blog face rather than the product face, is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification.

### Principles

These five items, including each *UI implication*, are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification.

1. **Show the numbers.** Trust is earned with verifiable data, not adjectives. *UI implication:* lead with real statistics (accumulated loan volume, rates, grades); keep the palette neutral so figures read cleanly.
2. **Make risk legible.** Credit grade is a first-class citizen, not fine print. *UI implication:* color-code grades (blue `#3770b2` and a gold/green/lilac spectrum) and always pair the color with the letter grade.
3. **One action, one color.** Blue (`#3282f0`) means "do this." *UI implication:* reserve the saturated blue for the primary CTA, emphasis, and links so the next step is never ambiguous.
4. **Flat and calm.** Data density beats decorative depth. *UI implication:* no shadows; separate with `#dee3e8` dividers and `#d2d2d2` hairlines on a cool-grey canvas.
5. **Disclosure over persuasion.** Regulatory transparency is a design surface. *UI implication:* give business disclosures tidy tabbed layouts that read like a filing, not a sales page.

Treating the following as a capture-bound application of source §7 Do’s, live inspect, and the EDS blog, with first-party EDS names marked separately from the remaining token-role rules, is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification.

- First-party (EDS blog): official design system EDS (Eight Design System) names EdsButton (variants primary/secondary/tertiary, sizes xs/s/m/l), EdsTextfield, EdsToggle, and EdsCheckbox.
- Use Pretendard throughout the product surfaces — 700 for headings, 400 for body/UI.
- Drive hierarchy with weight and size, keeping the palette neutral for dense financial data.
- Reserve blue (`#3282f0`) for the primary action, emphasis, and links — the single action color.
- Use the purple accent (`#6741d9`) only on tinted `rgba(103, 65, 217, 0.1)` "more" pills.
- Separate surfaces with the `#dee3e8` divider and `#d2d2d2` hairlines, not shadows.
- Set the canvas to cool-grey (`#f1f3f5`) with white (`#ffffff`) cards.
- Color-code credit grades (blue `#3770b2` plus the gold/green/lilac spectrum) for scannable risk.
- Use the 10px card radius as the default; keep the 3–16px radius family.

### Avoid

The following items copy source §7 Don’ts. They are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification.

- Do not use drop shadows for elevation — 8percent is a flat, hairline-and-divider system.
- Do not spread the blue across many elements — it dilutes the single-action signal.
- Do not introduce a third saturated accent — blue is primary, purple is the one measured accent.
- Do not set body text in the ink navy — reserve `#1d2024` for headings; body is `#606060`.
- Do not use heavy display faces — Pretendard 700/400 carries everything on the product surface.
- Do not use NanumSquare on the product UI — it belongs to the blog only.
- Do not use positive letter-spacing on headlines — display tracks tight (`-0.9px` / `-0.6px`).
- Do not rely on color alone to grade risk — pair the grade color with the letter grade.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following unmerged-role readings are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification. Catalog `primary_color` `#3282f0` is the live action/emphasis blue and the harvested primary EdsButton fill; it is not Grade Accent `#3770b2` and not Accent Purple `#6741d9`. Accent Purple is the tinted-"more"-pill accent, not a second primary. Grade Accent is the B-tier credit-grade marker, not the action hue. Gold `#d2b82f`, green `#4a7656`, and lilac `#8884c9` stay unmerged from Grade Accent and from the action blue. Ink `#1d2024` is heading/strong-label/active-tab color; Body `#606060` is standard product text; they are not merged. EdsTextfield `#1d2024` is that control’s value field, not a license to set body copy in Ink. Neutral Confirm `#4b525a` is this control’s label, which shares Label but is not Ink. Surface Blue `#f1f6fe` is the soft-action tint; it is not Canvas. Skeleton `#dee3e8` in the §14 row is that table’s skeleton-block field, not a second divider token and not a harvested-button fill.

- **8percent Blue / Primary** (`#3282f0`): catalog `primary_color`. Primary brand and action color. Emphasis words, links ("사업공시 보러가기"), active markers, and the primary CTA. YAML `primary`.
- **Accent Purple** (`#6741d9`): secondary accent for tinted "more" pills, shown as `#6741d9` text on a `rgba(103, 65, 217, 0.1)` wash. YAML `accent-purple`.
- **Ink** (`#1d2024`): primary heading and strong-label color; also the active disclosure-tab label. YAML `ink`.
- **Slate** (`#3c3c3c`): large statistic numerals and secondary headings (the accumulated-loan figure). YAML `slate`.
- **Body** (`#606060`): standard body/product text — the document default. YAML `body`.
- **Label** (`#4b525a`): strong secondary labels, neutral confirm-button text, notice-pill text. YAML `label`.
- **Muted** (`#858d94`): tertiary text, captions, metadata. YAML `muted`.
- **Faint** (`#9ca5ad`): inactive nav labels, disabled/low-emphasis text. YAML `faint`.
- **Canvas Grey** (`#f1f3f5`): page background; also the neutral notice-pill fill. YAML `canvas`.
- **Pure White** (`#ffffff`): card and content surfaces, confirm-button fill, text on the blue CTA. YAML `surface`.
- **Surface Blue** (`#f1f6fe`): light-blue tint surface behind soft secondary actions. YAML `surface-blue`.
- **Divider** (`#dee3e8`): the most frequent surface separator — card dividers and section rules in the shadow-free system. YAML `divider`.
- **Hairline** (`#d2d2d2`): thin borders on buttons, inputs, and containers. YAML `hairline`.
- **Grade Accent Blue** (`#3770b2`): credit-grade marker (B tier). YAML `grade-accent`. Alongside gold (`#d2b82f`), green (`#4a7656`), and lilac (`#8884c9`).

### Spacing

YAML scale: xs 4, sm 6, md 8, base 12, lg 16, xl 32. Body layout states a ~4px base unit and the same 4px, 6px, 8px, 12px, 16px, 32px rhythm. Soft pills use compact 6px vertical / 12–16px horizontal padding. Soft Blue-Tint pads `6px 16px 6px 12px`. News-More pads `8px 16px`. Notice pads `0px 16px`. Neutral Confirm is 60px high. Notice pills are 56px high. Soft action pills are 40px high.

### Shape

YAML `rounded`: xs 3, sm 4, md 8, lg 10, xl 16, full 9999 (`9999px`).

Observed radii in the body: Extra-small 3px (confirm buttons, tight controls); Small 4px (inputs, grade tags, small containers); Medium 8px (soft action pills); Large 10px (product cards — the workhorse radius, dominant on the page); Extra-large 16px (notice pills, large containers); Full `9999px` (pills / circular markers). News-More uses 6px, which is recorded on that control and is not a YAML `rounded` step.

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification. 3px / 4px / 6px / 8px / 10px / 16px / `9999px` remain local harvested geometry, not a universal radius for every unlisted control. Calling 10px the workhorse radius, dominant on the page, is that same derived reading.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f1f3f5` canvas vs `#ffffff` card shift | Card/section separation without elevation |
| Divider (Level 2) | `#dee3e8` rule / `1px solid #d2d2d2` hairline | Card outlines, list separators, dividers |

YAML `tokens.shadow.none` is `none`. Live inspection found `box-shadow: none` across the hero, section headings, product cards, and buttons.

The following divider-not-elevation and shadow-philosophy readings are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification. The dominant repeated surface color is the `#dee3e8` divider rather than any elevation token. Separation and grouping are communicated through flat tint (cool-grey `#f1f3f5` canvas vs white `#ffffff` cards) and thin `#d2d2d2` hairlines. The source reads this as a deliberate modern-flat choice that keeps a data-heavy financial UI feeling clean, fast, and trustworthy — when emphasis is needed the system reaches for color (blue `#3282f0`) or a tinted surface (`#f1f6fe`), never a drop shadow.

### Motion

Source-stated duration roles. The source HTML comment attaches live inspect to token-level claims in §1–9; §15 sits in the philosophy layer (sections 10–15) and is not in the live-inspect list. Treating the duration table, easing names, signature press/fade-in, and reduced-motion line as source-stated rather than computed CSS, and treating the "functional and restrained" / "signals steadiness, not playfulness" readings as editorial, is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card/section reveal, tab switch, dropdown |
| `motion-slow` | 320ms | Page-level transitions, modal |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only) | Arriving — cards, sheets, dropdowns |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only) | Two-way transitions |

The following motion-rule readings are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification. Motion is described as functional and restrained — consistent with the flat, data-first aesthetic. Pills and buttons respond to press with a subtle opacity/scale shift; product cards fade-in from below at `motion-standard / ease-enter`. No bounce or spring — a regulated finance product is read as signalling steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings, including the fallback-not-product-face assignment, are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The EDS blog names Eight Design System components (EdsButton, EdsTextfield, EdsToggle, EdsCheckbox). |
| Live computed surface-use | Product homepage and disclosures: Pretendard at weights 400 and 700. Body 14px Pretendard `#606060` with line-height 16.1px. Headings `#1d2024` (H3 24px/700/`-0.6px`); hero stat `#3c3c3c` (40px/400/`-0.9px`). |
| Blog surface-use | Official product/engineering blog (`8percent.github.io`): `NanumSquare` with `Source Sans Pro`. |
| Declared fallbacks | Product stack records `Malgun Gothic` and `Apple SD Gothic Neo` as fallbacks beside Pretendard. They are fallbacks, not the product face. |

The following blog-versus-product face assignment is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification. NanumSquare is the blog face. Pretendard is the product/disclosures face. Do not present Malgun Gothic, Apple SD Gothic Neo, or Source Sans Pro as Pretendard or as NanumSquare.

### Family

- **Product (homepage and disclosures):** Pretendard (with `Malgun Gothic`, `Apple SD Gothic Neo` fallbacks) — YAML `family.body`
- **Blog:** NanumSquare (with `Source Sans Pro`) — YAML `family.blog`

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification. Do not replace Pretendard on the product surfaces with NanumSquare. Do not present the fallback stack as the brand face.

The following type-rule readings (weight over color for hierarchy; tight tracking on display; one typeface and two weights on product; hangul-first density at 14px / 16.1px) are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification. 700 headings versus 400 body carry the structure. Tracking is `-0.9px` at 40px and `-0.6px` at 24px; body stays at normal tracking. Pretendard 700 and 400 do all product work. NanumSquare is walled off to the blog. Body at a deliberate 14px with a tight 16.1px line-height is recorded for information-rich financial layouts.

### Type roles

Verified YAML line-height values are the unitless ratios `1.10`, `1.50`, and `1.15`. The following ratio-versus-size-local reading is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification. The unitless ratios scale with font size and are not fixed px. Those px figures are size-local observations, not replacements for the ratios. YAML tracking `-0.9` / `-0.6` is the same pair written `-0.9px` / `-0.6px` in the body. YAML Subhead `1.50` has no size-local px in the body table.

The following unmerged-ink reading is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification. YAML Body color is not a single ink: the body table paints Body at `#606060` while Section Heading uses `#1d2024` and Hero Stat uses `#3c3c3c`.

| Role | Font | Size | Weight | Line height (YAML) | Body-table observation | Tracking | Color (body table) | Use (YAML) |
|---|---|---:|---:|---:|---|---|---|---|
| Hero Stat | Pretendard | 40px (2.50rem) | 400 | 1.10 | 44px at this size | -0.9px | `#3c3c3c` | Hero stat numerals (누적 대출액), Pretendard |
| Section Heading | Pretendard | 24px (1.50rem) | 700 | 1.50 | 36px at this size | -0.6px | `#1d2024` | Section titles (모집중 상품), Pretendard Bold |
| Subhead / Active Tab | Pretendard | 16px (1.00rem) | 700 | 1.50 | 1.50 (no extra px) | normal | `#1d2024` | Active nav / disclosure tab, Pretendard Bold |
| Body | Pretendard | 14px (0.88rem) | 400 | 1.15 | 16.1px at this size | normal | `#606060` | Standard product text, Pretendard |

### Assets

Treating catalog logo metadata as a Google favicon lookup (`https://www.google.com/s2/favicons?domain=8percent.kr&sz=128`), not a captured first-party mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification.

Treating verified product and grade imagery as not replaceable with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted. Hex values and geometry in the harvested components remain source-stated.

| State | Treatment |
|---|---|
| **Empty (no products funding)** | White (`#ffffff`) card on the `#f1f3f5` canvas. Single Ink (`#1d2024`) line stating no products are currently funding, with a calm path to upcoming products. No illustration clutter. |
| **Empty (no investments yet)** | Muted (`#858d94`) single line explaining nothing invested yet, plus a `#3282f0` link into the product list. Honest and quiet. |
| **Loading (product list fetch)** | Skeleton cards at final dimensions, 10px radius, on the `#dee3e8`/`#f1f3f5` neutral field. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (figures compute)** | Inline placeholder within the statistic band; previously loaded numbers stay visible until refreshed. |
| **Error (fetch failed)** | Inline message in Ink (`#1d2024`) with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the EdsTextfield describing what is valid, not just "필수". |
| **Success (investment placed)** | Brief inline confirmation in a calm tone; the transaction/grade detail is linked immediately below. No celebratory emoji. |
| **Skeleton** | `#dee3e8` blocks at final dimensions, 10px radius, flat pulse. |
| **Disabled** | Faint (`#9ca5ad`) text on a reduced-opacity surface; the blue action fades rather than turning grey, preserving the brand read. |

Characterizations in that table such as “No illustration clutter”, “Honest and quiet”, “no shadow shimmer, consistent with the shadowless system”, “Never a bare 오류가 발생했습니다”, “not just 필수”, “No celebratory emoji”, and “preserving the brand read” are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification. Treating `#dee3e8` in the Skeleton/Loading rows as that table’s skeleton-block field, not as Divider reused onto harvested buttons, is part of the same derived reading.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact selector/label/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed from the §14 rows. This is not a complete state-coverage claim.

The source records a generic EdsTextfield named Focus. That hex is on the EdsTextfield field list and the additional-observed-state sentence; it is generic Focus, not `focus-visible` treatment evidence. The `focus-visible` row does not carry a colour. A later generic Focus observation would not be `focus-visible` evidence.

Product Card and Credit-Grade Tag have no interactive-kind confirmation for a §4.4 map, so kind and a state-applicability map are omitted. EdsToggle and EdsCheckbox are named in EDS and in the token note; harvested geometry for those two is absent, so no components are invented for them.

### Primary (EdsButton)

- Role: primary action, brand blue
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#3282f0`
- Text: `#ffffff`
- Radius: 8px
- Font: 16px / 700 / Pretendard
- Use: Primary action, brand blue
- YAML `button-primary.states`: EdsButton variants primary/secondary/tertiary, sizes xs/s/m/l
- Observed: default only
- Field note: `#3282f0` is this control’s fill and catalog `primary_color`. It is not Grade Accent `#3770b2`. YAML `states` is this component’s legacy metadata field; it is not merged into Use.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the primary EdsButton |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A primary action can be unavailable; visual treatment omitted. Source §14 Disabled says the blue action fades rather than turning grey; that row is not copied here as a computed paint |

Loading, error, and success applicability are omitted. Source names this control as a primary action with EDS variant/size notes; exact selector/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

### Soft Blue-Tint

- Role: soft secondary action pill
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#f1f6fe`
- YAML `button-soft` fg: `#3282f0`
- Radius: 8px
- Padding: 6px 16px 6px 12px
- Height: 40px
- Font: 14px / 400 / Pretendard
- Use: Soft blue-tint action pill ("전체 상품, 한 번에 투자"); body also records "전체 상품, 한 번에 투자해볼까요?" with blue emphasis
- Observed: default only
- YAML `tokens.components.button-soft` records bg/fg/radius/padding/font/use; height 40px is body §4 / §8
- Field note: The following unmerged-role and mixed-anatomy readings are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification. `#f1f6fe` is this control’s fill and Surface Blue. YAML `button-soft` fg `#3282f0` is this component’s token field, not a full-bleed primary fill. Source §9-only mixed anatomy is a near-ink base label with a `#3282f0` emphasis word; that mixed label is not the same as painting the whole label `#3282f0`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the soft secondary action pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a soft listing/investment pill; exact selector/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

### News-More Pill

- Role: tinted "more" pill — the purple accent’s home
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `rgba(103, 65, 217, 0.1)`
- Text: `#6741d9`
- Radius: 6px
- Padding: 8px 16px
- Height: 40px
- Font: 14px / 700 / Pretendard
- Use: Tinted "more" pill ("언론기사 더 보기")
- Observed: default only
- YAML `tokens.components.button-news-pill` records bg/fg/radius/padding/font/use; height 40px is body §4 / §8
- Field note: The following unmerged-role reading is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification. `#6741d9` and the `rgba(103, 65, 217, 0.1)` wash are this control’s field, not a page-wide purple.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the tinted more pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A more-pill can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a press-more pill; exact destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Neutral Confirm

- Role: neutral confirm button (date-picker 확인)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#4b525a`
- Border: 1px solid `#d2d2d2`
- Radius: 3px
- Height: 60px
- Font: 16px / 700 / Pretendard
- Use: Neutral confirm button (date-picker 확인)
- Observed: default only
- YAML `tokens.components.button-confirm` records bg/fg/border/radius/font/use; height 60px is body §4 / §8
- Field note: `#4b525a` is this control’s label (Label), not Ink `#1d2024`. `#ffffff` fill is this control’s field, not a second canvas token.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the date-picker confirm |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A confirm action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a date-picker confirm; exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

### EdsTextfield

- Role: standard text field (EDS EdsTextfield)
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#ffffff`
- Text: `#1d2024`
- Border: 1px solid `#d2d2d2`
- Radius: 4px
- Font: 14px Pretendard
- Focus: `#3282f0`
- Use: EdsTextfield, brand-blue focus
- Observed: default, plus named Focus `#3282f0`
- Field note: `#1d2024` is this control’s value color. Named Focus `#3282f0` is generic Focus, not `focus-visible` treatment. The following application reading is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification. It is not a license to set body copy in Ink.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as EdsTextfield |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted. Source §14 names a field-level message below EdsTextfield; that row is not copied here as a computed paint |

Loading and success applicability are omitted. Source records default geometry plus named Focus `#3282f0`. Exact loading/success mapping for this field is unresolved, so those two fields stay omitted at this boundary rather than closed from the §14 rows.

Additional observed named state: Focus `#3282f0`. That appearance is a captured generic Focus, not an observed `focus-visible` treatment.

### Product Card

- Role: investment product card
- Type: card
- Anatomy: surface
- Background: `#ffffff`
- Border: 1px solid `#dee3e8`
- Radius: 10px
- Use: Investment product card, flat with `#dee3e8` divider
- Observed: default only

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Credit-Grade Tag

- Role: credit-grade marker on product cards
- Type: badge
- Anatomy: label
- Background: `#3770b2`
- Text: `#ffffff`
- Radius: 4px
- Font: 14px / 400 / Pretendard
- Use: Credit-grade tag on product cards (B tier blue; grades color-coded)
- Observed: default only
- Field note: `#3770b2` is this badge’s fill. Gold `#d2b82f`, green `#4a7656`, and lilac `#8884c9` are sibling grade colors, not this badge’s fill and not Primary `#3282f0`.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Disclosure Tab

- Role: disclosure section tabs
- Kind: interactive
- Type: tab
- Anatomy: label
- Text (inactive): `#9ca5ad`
- Text (active): `#1d2024`
- Font: 16px Pretendard weight 700 (active), weight 400 (inactive)
- Use: Disclosure section tabs ("경영현황", "이용정보", "취급현황") — active bold ink, inactive faint
- Observed: static inactive and static active appearances. The active appearance is a captured variant, not an observed click transition.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Static inactive appearance captured on disclosure tabs |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A disclosure tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A disclosure tab selects a grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: static active appearance (`#1d2024` / weight 700). That appearance is a captured variant, not an observed click transition.

### Notice Pill

- Role: notice/announcement link pill
- Kind: interactive
- Anatomy: label
- Background: `#f1f3f5`
- Text: `#4b525a`
- Radius: 16px
- Padding: 0px 16px
- Height: 56px
- Use: Notice/announcement link pill ("[공지] 개인정보 처리방침 개정 안내")
- Observed: default only
- YAML `tokens.components` does not record this control; values are body §4 / §8 only. Type is not invented.
- Field note: `#f1f3f5` is this pill’s fill and Canvas. `#4b525a` is this pill’s label (Label), not Ink.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named notice/announcement link pill |
| hover | applicable | Pointer-web link pill; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A notice pill can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a notice link pill; exact destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing is xs 4, sm 6, md 8, base 12, lg 16, xl 32. Body layout repeats 4px, 6px, 8px, 12px, 16px, 32px with a ~4px base unit. Soft pills use compact 6px vertical / 12–16px horizontal padding; Soft Blue-Tint pads `6px 16px 6px 12px`; News-More pads `8px 16px`; Notice pads `0px 16px`. Neutral Confirm is 60px high. Notice pills are 56px high. Soft action pills are 40px high. Product cards use 10px radius. Hero statistic is a 40px numeral.

The “flat segmentation”, “dense data, calm chrome”, “restraint with color”, scannable-card-grid, and hero-statistic-anchors-top readings in this section are derived editorial implementation inferences from the verified surfaces; they are not 8percent-authored or a separately published UI specification.

Recorded layout:

- Cool-grey (`#f1f3f5`) full-width canvas hosting white (`#ffffff`) cards
- Investment products laid out as a scannable card grid with color-coded grade markers
- Hero statistic band ("누적 대출액") anchors the top with a large 40px numeral
- Disclosure surfaces use tabbed sections ("경영현황"/"이용정보"/"취급현황") over tabular data
- Flat segmentation: sections separate by the `#dee3e8` divider and `#d2d2d2` hairlines, not by elevation
- Dense data, calm chrome: rates, grades, and balances are packed tightly while the surrounding chrome stays airy and neutral
- Restraint with color: the neutral field keeps the single blue action color and purple accent legible

Source breakpoint table:

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single-column product cards, hero stat compresses, tabs scroll |
| Tablet | 640-1024px | 2-up product cards, moderate padding |
| Desktop | 1024-1440px | Full multi-column product grid, centered content |

Collapsing strategy recorded in the source: hero statistic 40px numeral scales down on mobile, weight 400 maintained; product grid multi-column → 2-up → single column stacked; disclosure tables horizontal scroll on narrow viewports; tinted/white surfaces maintain full-width treatment. Image behavior: product/grade thumbnails keep their color-coded backgrounds at all sizes; cards maintain the 10px radius across breakpoints, no shadow at any size.

Touch-target record: Neutral confirm buttons at 60px height; notice pills at 56px height; soft action pills at 40px; nav/disclosure tabs spaced for touch within the header.

Treating that table as a recorded span of named widths, not a complete specification of every unlisted control, treating the 40px / 56px / 60px / 10px figures as surface measurements in this packet rather than universal layout tokens, and treating the touch-target record (including tabs spaced for touch) as a purpose reading of those measurements rather than a complete target-size specification, is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Observed (live surfaces, 2026-07-02)

The live strings below are source-stated. Treating the parenthetical characterizations (plainly names the state / quantified trust / transparency-first CTA) as citation-character of those live strings is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification.

- "모집중 상품" — section heading; plainly names the state ("products now funding"). *(verified live 2026-07-02)*
- "누적 대출액 1조 3,955억 2,815만 원" — hero statistic (quantified trust). *(verified live 2026-07-02)*
- "사업공시 보러가기" — disclosure link (transparency-first CTA). *(verified live 2026-07-02)*
- Control strings from harvested components: "전체 상품, 한 번에 투자"; "전체 상품, 한 번에 투자해볼까요?"; "언론기사 더 보기"; date-picker "확인"; "[공지] 개인정보 처리방침 개정 안내"; disclosure tabs "경영현황", "이용정보", "취급현황"

Treating the §14 empty/loading/error/success strings as part of the state contract, not extra Observed voice samples, is a derived editorial implementation inference from the verified surfaces; it is not 8percent-authored or a separately published UI specification.

### Derived editorial voice

The following voice reading, context table, and forbidden-register list are a derived editorial implementation inference from the verified surfaces; they are not 8percent-authored or a separately published UI specification. They are not the Observed strings above.

The source describes 8percent's voice as **plain, reassuring, and evidence-led** — a financial platform that earns trust by showing numbers, not by hyping returns. Its name is read as stating the thesis directly (targeting a mid-single-digit yield that sits between low deposit rates and high consumer-loan rates), and the homepage leads with a verifiable statistic rather than a slogan. Copy is read as treating the reader as a rational investor who deserves disclosure and comparison, and as foregrounding regulatory standing ("온투업 1호").

| Context | Tone |
|---|---|
| Hero / statistics | Concrete and quantified. Leads with accumulated-loan figures, not adjectives. |
| Product labels | Functional and precise. Credit grade, rate, term stated plainly. |
| CTAs | Direct, low-pressure. "한 번에 투자", "사업공시 보러가기", "더 보기". |
| Disclosure / compliance | Formal, transparent. Business-disclosure tabs read like a regulatory filing. |
| Press / trust copy | Factual, third-party-anchored. Cites coverage and milestones, not superlatives. |

**Forbidden register** (source): guaranteed-return language, fear- or urgency-based investment pressure, undefined financial jargon left unexplained, exclamation-heavy hype.

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

- `ease-enter` / `ease-exit` / `ease-standard` cubic-bezier curves
- hover, pressed, and `focus-visible` visual treatments
- loading, error, and success visual treatments on the harvested buttons and notice pill, and the omitted loading/error/success applicability fields on Primary (EdsButton), Soft Blue-Tint, News-More Pill, Neutral Confirm, and Notice Pill; omitted loading/success on EdsTextfield
- harvested geometry for EdsToggle and EdsCheckbox
- interactive kind and state-applicability map for Product Card and Credit-Grade Tag
- motion animation names, transition properties, and any duration beyond the three source tokens — promote only after per-component computed capture of all five kinds; a single named duration is not that gate
