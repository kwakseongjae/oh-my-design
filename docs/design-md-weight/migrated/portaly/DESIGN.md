# Portaly Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Portaly (傳送門) is Taiwan's largest Traditional-Chinese link-in-bio and creator landing-page builder, operated by Real Engine. Catalog homepage identity is `https://portaly.cc/`. YAML `tokens.source` is `live-extract`. Catalog `primary_color` `#862983` is the same plum as `tokens.colors.primary` `#862983`; they stay two writings, not a second plum. This contract covers the first-party surfaces the source inspected on 2026-06-17: the homepage `https://portaly.cc/` (geo-redirects to `/en`), pricing `https://portaly.cc/en/pricing`, blog `https://portaly.cc/en/blog`, and the founder live creator page `https://portaly.cc/cwl` (Traditional-Chinese product surface). Every value stays attached to the surface that established it. A homepage hero value is not a pricing-control value; a pricing CTA is not a creator-page link block; a creator-page stack is not a substitute for the marketing chrome. Reading those inspected URLs as this contract's surfaces, keeping catalog `primary_color` `#862983` beside `tokens.colors.primary` `#862983` rather than as a second plum, keeping YAML `tokens.source` as `live-extract`, keeping every value attached to the surface that established it, and keeping homepage, pricing, blog, and `/cwl` from rewriting one another's geometry, are derived editorial implementation inferences from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

The marketing surface reads like a bright, optimistic creator-economy product rather than a utilitarian dev tool. The page background is a soft off-white (`#f8f8f8`) under crisp white (`#ffffff`) content cards, with body copy in a comfortable warm grey-black (`#333333`) and headlines in true black (`#000000`). The single most saturated interactive color is a confident magenta-plum (`#862983`) — it owns every filled "Join Now" / "Start Free" call-to-action and the billing toggle — so the eye is trained to read that one plum as "the action." The brand's emotional signature is its **teal-and-magenta duality wired into a curved-arrow logo**. The Portaly wordmark sits in navy (`#0c2340`) with a teal-to-magenta swoosh curving through the letters — the curved-arrow visual metaphor that recurs across the system as a left-to-right gradient (`#bb53b9 → #00a6a3`, magenta into teal) on stat strips and decorative accents. Teal (`#00a6a3`, with `#12a3a0` and `#38aaaa` companions) is the accent voice: feature checkmarks, the "200,000 creators" highlight, and icon details. The hero itself is washed in a separate purple gradient (`#6e28af → #ac8ffe`) with white headline and a white outline pill CTA, giving the top of the page a playful, energetic lift before the content settles into clean white. Geometrically the system is friendly and rounded but not extreme: filled pricing buttons sit at a tidy 6px radius, large CTAs relax to 20px, plan cards round to 12px with a soft grey ambient shadow (`rgba(99,99,99,0.2) 0px 2px 8px`), and the hero/nav pills go fully round (9999px). Depth is gentle — a single soft card shadow and thin `#d9d9d9` hairlines do the separating, never heavy elevation. Typography is set in **Noto Sans with a Noto Sans TC fallback**, so the same chrome renders Traditional Chinese natively on creator pages (e.g. `林啟維`, `Portaly 徵才 全端工程師`). Headlines run heavy — 50px ExtraBold (800) on the hero, 36px Bold (700) on sections — over quiet 16px / weight 400 body, the classic bold-display-over-light-body tension. The hex values, the filled "Join Now" / "Start Free" ownership, the teal-and-magenta duality wired into a curved-arrow logo, the left-to-right gradient on stat strips, the "200,000 creators" highlight, the purple hero wash, the radius steps, the Noto stack with the two Traditional-Chinese examples, and the 50px ExtraBold / 36px Bold over 16px / 400 body are the source's own. The characterizations built on them — bright, optimistic creator-economy product rather than a utilitarian dev tool; the eye trained to read that one plum as "the action"; playful, energetic lift; friendly and rounded but not extreme; gentle depth; bold-display-over-light-body tension — are a derived editorial implementation inference from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Portaly (傳送門) was launched in **2022** by **CW Lin (林啟維)** under **Real Engine, Inc. (真實引擎)**, a Taiwan startup, to solve a problem visual creators and small Traditional-Chinese-speaking businesses faced: the dominant Western link-in-bio tools were built for a Latin, English-first audience and treated a creator's page as a bare list of links rather than a real, monetizable web presence. Portaly reframed the link-in-bio as a *social landing page* — a place to not only point followers outward but to sell, collect leads, and build a brand, localized first for the Taiwanese creator market. The product grew into Taiwan's largest Traditional-Chinese link-in-bio / creator landing-page builder, serving a stated 200,000+ creators worldwide, with generative-AI page building added in 2023 — the sibling capture dates that Product Hunt launch **2023-06-05** — a launch that won **#2 Product of the Day** on Product Hunt (the badge still sits live on the homepage and pricing page). The company has been recognized in Taiwan's **Neo 30 (2023)** startup list and is a **500 Global** alumnus. What Portaly refuses, visible in its design: the cold, utilitarian aesthetic of a pure-utility link list, and the high-pressure monetization patterns of growth-hacking tools. What it embraces: a bright, optimistic creator-economy mood; a friendly magenta-and-teal identity carried by a curved-arrow swoosh; native Traditional-Chinese typography (Noto Sans TC); and copy that frames growth and profit as encouraging outcomes the creator owns. The years, founder, operator, Latin-English-first problem sentence, social-landing-page reframe, 200,000+ creators, 2023 generative-AI launch, Product Hunt badge, Neo 30 (2023), 500 Global alumnus, and that refuse-and-embrace closing are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-recognition narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, each naming a YAML `use` string or captured control the source records, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification. They do not come from the source's Personas section.

- Join from the pricing CTA "Join Now" (YAML `button-primary` use: `Primary CTA on pricing (Join Now), hover deepens plum`).
- Start from "Start Free" / "Start for Free" / "Start for free" (YAML `button-primary-lg` use: `Large primary CTA (Start Free)`; YAML `button-secondary` use: `Secondary CTA (Start for Free), magenta outline`; YAML `button-hero-ghost` use: `White outline pill CTA over the purple hero gradient`).
- Switch Annual/Monthly billing (YAML `toggle-billing` use: `Annual/Monthly billing switch, magenta #862983 active thumb`).
- Open a creator-page link block (YAML `link-block` use: `Creator-page link block (filled 6px / rounded 16px variants); accent color is creator-chosen`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable Portaly user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: Traditional-Chinese visual creators, small businesses, course/product sellers; visual creators and small businesses; visual creators and small Traditional-Chinese-speaking businesses. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

- Magenta-plum (`#862983`) reserved for the primary interactive action — filled CTAs and the billing toggle thumb
- Teal accent voice (`#00a6a3` / `#12a3a0` / `#38aaaa`) — logo swoosh, feature checkmarks, highlights
- Signature magenta→teal gradient (`#bb53b9 → #00a6a3`) and a playful purple hero gradient (`#6e28af → #ac8ffe`)
- Navy (`#0c2340`, deeper `#1a2a3a`) for nav links and structural ink instead of pure black
- Noto Sans + Noto Sans TC stack — bold display (800/700) over quiet 16px/400 body, Traditional-Chinese native
- Rounded-but-restrained geometry — 6px buttons, 12px cards, 20px large CTAs, 9999px hero/nav pills
- Gentle depth — one soft grey card shadow (`rgba(99,99,99,0.2) 0px 2px 8px`) + `#d9d9d9` hairlines
- Off-white canvas (`#f8f8f8`) under white surfaces; warm-grey body text (`#333333`)

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Portaly-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **A page, not a link list.** (`a page, not a link list`) Portaly treats a creator's page as a real, monetizable landing page. *UI implication:* full-width tappable link blocks, plan-grade cards, and product/lead blocks — structure beyond a bare list.
2. **One action, one plum.** (`one action, one plum`) Magenta-plum (`#862983`) means "do this." *UI implication:* reserve the saturated plum exclusively for the primary filled CTA so the next step is never ambiguous.
3. **Teal is the brand's warmth.** (`teal-magenta duality as the brand's warmth`) The teal-magenta duality and curved-arrow swoosh are the identity. *UI implication:* use teal (`#00a6a3`/`#12a3a0`) for accents, checkmarks, and the signature gradient; don't introduce a competing hue.
4. **Traditional-Chinese first.** The product is built for a Traditional-Chinese creator market. *UI implication:* always carry the Noto Sans TC fallback so CJK renders natively and consistently with Latin.
5. **Optimistic, not pushy.** Growth and profit are framed as encouraging outcomes. *UI implication:* keep CTAs free-forward and low-pressure; lean on bright color and airy layout, never scarcity or dark patterns.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

- Reserve magenta-plum (`#862983`) for the primary action — filled CTAs and the billing toggle
- Use teal (`#00a6a3` / `#12a3a0`) as the accent voice — checkmarks, highlights, the logo swoosh
- Reach for the magenta→teal gradient (`#bb53b9 → #00a6a3`) for the signature curved-arrow / stat accents
- Use the purple hero gradient (`#6e28af → #ac8ffe`) with white headline + white outline pill at the top
- Set type in Noto Sans with a Noto Sans TC fallback so Traditional Chinese renders natively
- Run headlines heavy (800 hero / 700 sections) over quiet 16px / weight 400 body
- Keep buttons at 6px, cards at 12px, large CTAs at 20px, hero/nav pills fully round
- Use navy (`#0c2340`) for nav links and structural ink instead of pure black

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

- Spread plum across many elements — it dilutes the single-action signal
- Swap the accent away from teal — the teal-magenta duality is the brand's identity
- Use heavy or dark drop shadows — depth is a soft grey ambient lift only
- Set the whole UI in pure black headings everywhere — reserve `#000000` for marketing display lines
- Use sharp square corners on buttons or cards — everything is gently rounded
- Render Traditional Chinese without the Noto Sans TC fallback — the stack must carry CJK
- Add a third saturated brand hue — plum + teal (+ the playful purple hero) is the whole palette
- Set headlines in a light weight — display is always Bold/ExtraBold

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Pairing each hex to the token-set path named beside it, keeping catalog `primary_color` `#862983` beside `tokens.colors.primary`, keeping `tokens.colors.teal` `#00a6a3` unmerged from `tokens.colors.teal-alt` `#12a3a0` and from `tokens.colors.teal-soft` `#38aaaa`, keeping `tokens.colors.purple-hero` `#6e28af` unmerged from `tokens.colors.purple-hero-light` `#ac8ffe` and from `tokens.colors.swoosh-magenta` `#bb53b9`, keeping `tokens.colors.navy` `#0c2340` unmerged from `tokens.colors.navy-deep` `#1a2a3a` and from `tokens.colors.ink-pure` `#000000`, keeping `tokens.colors.ink` `#333333` unmerged from navy and from pure black, keeping `tokens.colors.canvas` `#f8f8f8` unmerged from `tokens.colors.surface` `#ffffff` and from `tokens.colors.surface-alt` `#f2f2f2`, keeping `tokens.colors.on-primary` `#ffffff` as a second key that shares hex with `tokens.colors.surface`, and attaching every role to the surface the source recorded, are derived editorial implementation inferences from the verified surfaces; they are not Portaly-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Primary and brand

- **Portaly Plum** (`#862983`): Primary interactive color. Filled CTA background ("Join Now", "Start Free"), billing toggle active thumb, secondary-button outline/text. The system's single "action" color. Token-set path `tokens.colors.primary`. Catalog `primary_color` `#862983` is the same plum on a second writing. YAML token note: primary = pricing interactive magenta/plum (`#862983`) on filled CTAs + toggle thumb.
- **Brand Teal** (`#00a6a3`): The dominant accent — logo swoosh endpoint, the magenta→teal gradient, highlight numerals ("200,000"), icon details. Appears 60+ times in the live color scan. Token-set path `tokens.colors.teal`. YAML token note: teal (`#00a6a3` / `#12a3a0`) is the brand accent (logo swoosh, checkmarks, gradient endpoint).
- **Teal Alt** (`#12a3a0`): Slightly deeper teal used for feature checkmarks and secondary accent strokes. Token-set path `tokens.colors.teal-alt`.
- **Teal Soft** (`#38aaaa`): A muted teal companion for softer accent surfaces and hover tints. Token-set path `tokens.colors.teal-soft`.

Gradients

- **Swoosh Magenta** (`#bb53b9`): The magenta start of the signature left-to-right brand gradient `#bb53b9 → #00a6a3` (the curved-arrow swoosh / stat-strip accent). Token-set path `tokens.colors.swoosh-magenta`.
- **Purple Hero** (`#6e28af`): Top stop of the hero background gradient. Token-set path `tokens.colors.purple-hero`. YAML token note: hero uses a purple gradient (`#6e28af → #ac8ffe`). This writing stays on the homepage hero band; it is not a pricing-card fill.
- **Purple Hero Light** (`#ac8ffe`): Bottom stop of the hero gradient `#6e28af → #ac8ffe` — gives the hero its playful violet wash. Token-set path `tokens.colors.purple-hero-light`.

Ink and structure

- **Ink Navy** (`#0c2340`): Nav links, structural headings, strong labels — a deep blue-black instead of pure black. Token-set path `tokens.colors.navy`. YAML token note: navy (`#0c2340`) for nav.
- **Navy Deep** (`#1a2a3a`): A darker navy used on deeper structural surfaces and dark creator-page backdrops. Token-set path `tokens.colors.navy-deep`. This writing stays on creator-page / deeper structural surfaces; it is not `tokens.colors.navy`.
- **Ink** (`#333333`): Default body text — a warm grey-black, the document default. Token-set path `tokens.colors.ink`.
- **Pure Black** (`#000000`): Maximum-contrast marketing headlines (hero feature statements, section heads). Token-set path `tokens.colors.ink-pure`. This is not navy and not body ink.

Neutral and surface

- **Canvas** (`#f8f8f8`): Page background — soft off-white under white content. Token-set path `tokens.colors.canvas`.
- **Surface** (`#ffffff`): White content cards, plan cards, button surfaces, text on plum/teal. Token-set path `tokens.colors.surface`. Same hex as `tokens.colors.on-primary`; it stays a second key.
- **Surface Alt** (`#f2f2f2`): Secondary grey surface for alternating blocks and chips. Token-set path `tokens.colors.surface-alt`.
- **Hairline** (`#d9d9d9`): Thin borders, dividers, plan-grid separators, and the billing-toggle track. Token-set path `tokens.colors.hairline`.
- **Muted** (`#969696`): Helper/fine-print text ("Permanently Free to Use", annual-fee notes). Token-set path `tokens.colors.muted`.
- **On Primary** (`#ffffff`): Text/icon color on plum and teal fills. Token-set path `tokens.colors.on-primary`. Same hex as `tokens.colors.surface`; it stays a second key.

Keeping Purple Hero on the homepage hero band rather than as a pricing-card fill, and keeping Navy Deep on creator-page / deeper structural surfaces rather than as `tokens.colors.navy`, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 20 | `tokens.spacing.lg` |
| xl | 24 | `tokens.spacing.xl` |
| xxl | 40 | `tokens.spacing.xxl` |
| section | 64 | `tokens.spacing.section` |

Source §5 also names a base unit ~4px and the scale 4px, 8px, 12px, 16px, 20px, 24px, 40px, 64px. Those px spellings stay beside the YAML unitless steps; neither replaces the other. `tokens.spacing.md: 12` is not `tokens.rounded.md: 12`. `tokens.spacing.base: 16` is not the 16px body size, not the 16px / 600 control font, and not the rounded 16px creator-link variant. `tokens.spacing.lg: 20` is not `tokens.rounded.lg: 20`. `tokens.spacing.xl: 24` is not the 24px feature-head size. `tokens.spacing.xxl: 40` is not the 40px half of large-CTA padding `24px 40px`. `tokens.spacing.section: 64` is not a type size. `tokens.spacing.xs: 4` is not the 4px half of pricing-button padding `4px 16px` as a replacement of that padding field. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path |
|---|---:|---|
| sm | 6 | `tokens.rounded.sm` |
| md | 12 | `tokens.rounded.md` |
| lg | 20 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

Source §5 also writes the radius scale as Small (6px): pricing buttons, filled creator link blocks — the workhorse; Medium (12px): pricing plan cards, content containers; Large (16px–20px): rounded creator link blocks, large CTAs; Full (9999px): hero/nav pills, billing toggle, "Join Now" header pill. The 16px rounded creator-link variant is that component's local geometry. It is not `tokens.rounded.lg: 20` and not `tokens.spacing.base: 16`. `tokens.rounded.sm: 6` is not `tokens.spacing` anything. `tokens.rounded.md: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.lg: 20` is the large-CTA step and is not `tokens.spacing.lg: 20`. `tokens.rounded.full: 9999` is a step; it is not a replacement for 6, 12, 16, or 20. The "Join Now" header pill at 9999px is nav geometry, not `tokens.components.button-primary` radius `6px`. Keeping those local radii off the YAML scale as second writings, and keeping the header pill off the pricing Join Now control, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

### Elevation

The source records two YAML shadows plus a hairline separator. Reading that stack as gentle, friendly, approachable-not-engineered depth — the opposite of a heavy fintech card-stack — is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most marketing chrome |
| Block (Level 1) | `rgba(0,0,0,0.05) 0px 1px 2px 0px` | Creator link blocks, subtle lift. Token-set path `tokens.shadow.block` |
| Card (Level 2) | `rgba(99,99,99,0.2) 0px 2px 8px 0px` | Pricing plan cards, elevated content. Token-set path `tokens.shadow.card` |
| Hairline | `1px solid #d9d9d9` | Plan-grid dividers, section separators |

**Shadow Philosophy** (source-stated): Portaly keeps elevation gentle and friendly. The signature card shadow is a soft, neutral grey ambient blur (`rgba(99,99,99,0.2) 0px 2px 8px`) — low spread, no harsh contrast — used on pricing plan cards. Creator link blocks carry an even lighter `rgba(0,0,0,0.05) 0px 1px 2px` lift. Most of the marketing surface is flat; depth is reserved for the few surfaces that genuinely need to read as "tappable cards." The mood is approachable, not engineered — the opposite of a heavy fintech card-stack. `tokens.shadow.card` stays on pricing plan cards; `tokens.shadow.block` stays on creator link blocks. Neither is copied onto the other. Keeping those two YAML shadows unmerged — card on pricing plan cards, block on creator link blocks — is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

### Motion

Portaly's motion is friendly but functional — consistent with the bright, approachable creator-economy mood. Treating the duration table and easing names as source-stated rather than computed CSS, and treating the exact cubic-bezier values as unattributed catalog boilerplate rather than live-extracted tokens, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, toggle flip, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown, link-block reorder |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only; the source value `cubic-bezier(0.2, 0.6, 0.25, 1)` matches a catalog-boilerplate enter example, not a live-extracted Portaly curve) | Arriving — cards, blocks, sheets |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches `spec/omd-v0.1.md` template example `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`) | Dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only; the source value `cubic-bezier(0.25, 0.1, 0.25, 1)` is the CSS `ease` keyword, not a live-extracted Portaly curve) | Two-way transitions |

**Motion rules** (source-stated): Motion is friendly but functional — consistent with the bright, approachable creator-economy mood. The billing toggle flips its plum thumb at `motion-fast`; link blocks and cards reveal/reorder at `motion-standard / ease-enter` with a small fade-from-below; the purple hero settles in once on load. A light delight is on-brand here (more than a fintech tool would allow), but never bouncy chaos — a creator's published page must feel stable and trustworthy. Treating those signature-motion characterizations — light delight more than a fintech tool would allow, never bouncy chaos, stable and trustworthy — as a derived editorial implementation inference from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional. Treating that reduced-motion line as source-stated register rather than a computed reduced-motion implementation is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. The HTML comment sources token-level claims (§1–9) from live inspection; §15 sits in the philosophy layer and is not in that live-extract claim. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists. Naming those five evidence kinds as the promotion gate for a further curve, refusing a partial confirmation, keeping the three duration rows and three easing names, and treating the cubic-bezier values as unattributed, are derived editorial implementation inferences from the verified surfaces; they are not Portaly-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The live marketing and creator surfaces use Noto Sans / Noto Sans TC. The packet does not publish a universal current typography token as a separately issued type specimen. |
| Live computed surface-use | YAML `tokens.source` is `live-extract`. Marketing chrome and creator pages compute the Noto stack. |
| YAML family keys | `tokens.typography.family.sans`: `Noto Sans`. `tokens.typography.family.cjk`: `Noto Sans TC`. |
| Recorded stack | `"Noto Sans", "Noto Sans TC", sans-serif`. Source §9 also writes `'Noto Sans, Noto Sans TC, sans-serif'`. Creator product pages also append `Noto Color Emoji`. |
| Official distributed asset | No Portaly-exclusive distributed type family was verified. |
| Declared-only | `sans-serif` is the generic fallback. `Noto Color Emoji` is appended on creator pages. |
| License | This record does not establish a Portaly font-license notice. Noto Sans / Noto Sans TC are upstream faces, not a Portaly-owned brand asset. |
| Locale | Marketing site renders English globally but the font stack carries Noto Sans TC for Traditional Chinese. |

Reading those evidence-class rows as the source's resolution table rather than as a published Portaly type specimen, keeping sans and cjk as two YAML keys, keeping the quoted stack and the §9 quote as two writings, recording that no Portaly-exclusive distributed type family was verified, and recording that this packet does not establish a Portaly font-license notice, are derived editorial implementation inferences from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

### Family

- **YAML sans path:** `Noto Sans` — Token-set path `tokens.typography.family.sans`. The primary Latin face for all display and body text.
- **YAML cjk path:** `Noto Sans TC` — Token-set path `tokens.typography.family.cjk`. Traditional-Chinese fallback in the same stack.
- **Recorded stack:** `"Noto Sans", "Noto Sans TC", sans-serif`
- **§9 stack writing:** `'Noto Sans, Noto Sans TC, sans-serif'`
- **Creator-page append:** `Noto Color Emoji`

Do not present `sans-serif` or `Noto Color Emoji` as a replacement for the YAML family. Always carry the Noto Sans TC fallback so Traditional Chinese renders natively. A fallback member of a stack is never presented as the brand face. That fallback-and-chain reading is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

### Type roles

YAML records unitless `size`, `weight`, `lineHeight`, optional `tracking`, and `use`. Source §3 writes px, rem, computed line-height px, and a second Notes column. Both writings stay; the longer Notes/use string is kept beside the YAML `use`. Unitless line heights stay ratios (A1a). Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim, keeping §3 Notes as a second writing rather than a replacement, keeping lede YAML weight `400` beside §3 `400-500`, keeping display-hero YAML tracking `1` beside §3 `1px`, and omitting no verified metric, are derived editorial implementation inferences from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use / §3 Notes |
|---|---|---|---:|---|---|---|
| Display Hero | Noto Sans | 50 / 50px (3.13rem) | 800 | 1.38 (68.75px) | 1 / 1px | Hero headline, Noto Sans ExtraBold · Hero headline, ExtraBold |
| Feature XL | Noto Sans | 50 / 50px (3.13rem) | 700 | 1.50 (75px) | normal | Large feature statement (Turn Traffic into Revenue) · Large feature statement |
| Section Heading | Noto Sans | 36 / 36px (2.25rem) | 700 | 1.50 (54px) | normal | Section titles · live H2 "Drive Social Media Traffic" |
| Feature Head | Noto Sans | 24 / 24px (1.50rem) | 700 | 1.50 (36px) | normal | Feature card heads |
| Lede / Subhead | Noto Sans | 20 / 20px (1.25rem) | 400 (YAML) / 400-500 (§3) | 1.50 (30px) | normal | Hero subhead / lede · Hero subhead, intro text |
| Nav Link | Noto Sans | 18 / 18px (1.13rem) | 600 | 1.33 (24px) | normal | Nav links, Noto Sans SemiBold · Top navigation items |
| Body | Noto Sans | 16 / 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |

Token-set paths: `tokens.typography.display-hero` · `tokens.typography.feature-xl` · `tokens.typography.section` · `tokens.typography.feature` · `tokens.typography.lede` · `tokens.typography.nav` · `tokens.typography.body`.

White at 50px ExtraBold and white at 20px / 400 is the homepage hero on the purple gradient (`#6e28af → #ac8ffe`). It is not Feature XL (`Turn Traffic into Revenue`) and not body lede on the `#f8f8f8` canvas. Feature XL `Turn Traffic into Revenue` sits on the signature magenta→teal stat strip (`#bb53b9 → #00a6a3`); that gradient is the strip, not the type fill. Live section H2 `Drive Social Media Traffic` is the 36px / 700 section-title capture. Keeping that white hero type on the homepage hero band, keeping Feature XL on the stat strip rather than on the purple hero, and keeping `Drive Social Media Traffic` on the section-title role, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

### Type principles

Source §3 states these four as its type principles. Treating them as the source's type rules rather than as a separately published Portaly type specification is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

- **Bold display, quiet body**: headlines run 800 (hero) and 700 (sections/features); body and lede stay at 400. The weight jump is the primary hierarchy signal.
- **Two-language, one stack**: the same `Noto Sans → Noto Sans TC` stack renders Latin marketing copy and Traditional-Chinese creator pages without a font swap — Noto's matched metrics keep hangul-free CJK and Latin visually consistent.
- **Near-flat tracking**: only the hero carries a slight positive `1px` letter-spacing for its ExtraBold display line; everything else sits at normal tracking.
- **Generous line-height**: body and most heads run at a comfortable 1.5 line-height, reinforcing the airy, approachable creator-economy feel.

### Assets

- Catalog logo: type `favicon`. Treating that Google favicon lookup as a catalog identity-boundary record rather than a captured first-party Portaly mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.
- The wordmark sits in navy (`#0c2340`) with a teal-to-magenta swoosh. The curved-arrow visual metaphor recurs as `#bb53b9 → #00a6a3`.
- Template thumbnails keep their vibrant gradient fills and rounded corners. Phone-mockup product shots in the hero scale proportionally. Do not replace those first-party product shots or creator-page avatars with invented brand-color decoration. Refusing to replace that photography with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification. The source state contract, preserved here in full:

| State | Treatment |
|---|---|
| **Empty (new creator page)** | White canvas, avatar placeholder + handle, a single Ink (`#333333`) prompt to add the first link block, with a plum (`#862983`) "add" CTA. Encouraging, never blank-scary. |
| **Empty (no analytics yet)** | Muted (`#969696`) single line explaining no data has been collected yet, with a path to share the page. Honest and calm. |
| **Loading (page/builder)** | Skeleton blocks at final link-block dimensions on the `#f8f8f8` canvas, 6px radius, soft pulse consistent with the gentle-shadow system. |
| **Loading (AI page generation)** | Inline progress with the plum accent; existing blocks stay visible while AI proposes new ones. |
| **Error (save/publish failed)** | Inline message in Ink (`#333333`) with a plain-language explanation and a retry — states what to do next, no bare error code. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "required". |
| **Success (published / saved)** | Brief inline confirmation in calm tone; the live page link surfaces immediately below. No celebratory emoji spam. |
| **Skeleton** | `#f2f2f2` / `#f8f8f8` blocks at final dimensions, 6px–12px radius, soft pulse. |
| **Disabled** | Muted (`#969696`) text on reduced-opacity surface; plum actions fade rather than turn grey to preserve brand read. |

Characterizations such as Encouraging-never-blank-scary, Honest-and-calm, no-bare-error-code, not-just-"required", and No-celebratory-emoji-spam are the source's own §14 wording. Treating them as the source state contract rather than a new treatment sheet is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, labelling YAML components with the primitive type the token set records, labelling no extra §4-only control as a YAML primitive, refusing to treat this as a complete state-coverage claim, treating nav `active` as not `focus-visible` evidence, and refusing to copy "hover deepens plum" onto `focus-visible` or onto any control other than `button-primary`, are a derived editorial implementation inference from the verified surfaces; they are not Portaly-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. A generic hover observation is not `focus-visible` treatment. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. The YAML token set records `button-primary`, `button-primary-lg`, `button-secondary`, `button-hero-ghost`, `nav-link`, `plan-card`, `link-block`, `toggle-billing`, and `feature-check`. The "Join Now" header pill is named in §4 Navigation / §5 Full radius; it is not a YAML component, and has no primitive type.

### Primary (Join Now)

- Role: Primary CTA on pricing/nav — the system's single filled action
- Kind: interactive
- Primitive type: `button`
- Anatomy: label
- Background: `#862983`
- Text: `#ffffff`
- Radius: 6px
- Padding: 4px 16px
- Height: 32px
- Font: `16px / 600 Noto Sans` · 16px Noto Sans weight 600
- Use: YAML `Primary CTA on pricing (Join Now), hover deepens plum` · §4 `Primary CTA on pricing/nav — the system's single filled action`
- YAML `tokens.components.button-primary`
- Observed: default recipe from YAML / §4; hover deepens plum (no hex recorded)
- Disabled treatment the source records for plum actions: muted (`#969696`) text on reduced-opacity surface; plum actions fade rather than turn grey to preserve brand read

This control's radius `6px` is `tokens.rounded.sm: 6` on this pricing filled CTA. It is not the "Join Now" header pill at `tokens.rounded.full: 9999`, not `button-primary-lg` radius `20px`, and not `tokens.spacing` anything. `#862983` is this control's fill and `tokens.colors.primary`; `#ffffff` is this control's on-fill and `tokens.colors.on-primary`. "hover deepens plum" stays on this control; it is not copied onto `focus-visible` and not copied onto Primary Large, Secondary, or Hero Ghost. Keeping those fields unmerged, and keeping this pricing 6px Join Now off the 9999px header pill, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; source records hover deepens plum (no hex); that writing stays here and is not `focus-visible` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Source records a plum-action fade rather than grey |
| loading | not-applicable | Destination pricing CTA; it commits no operation in place |
| error | not-applicable | Destination pricing CTA; it commits no operation in place |
| success | not-applicable | Destination pricing CTA; it commits no operation in place |

### Primary Large (Start Free)

- Role: Large primary CTA in plan cards / section ends
- Kind: interactive
- Primitive type: `button`
- Background: `#862983`
- Text: `#ffffff`
- Radius: 20px
- Padding: 24px 40px
- Height: 52px
- Font: `18px / 600 Noto Sans` · 18px Noto Sans weight 600
- Use: YAML `Large primary CTA (Start Free)` · §4 `Large primary CTA in plan cards / section ends`
- YAML `tokens.components.button-primary-lg`

Radius `20px` is this control and `tokens.rounded.lg: 20`. It is not `tokens.spacing.lg: 20`, not pricing Join Now `6px`, and not the rounded creator-link `16px`. Padding `24px 40px` is this control; it is not `tokens.spacing.xl: 24` or `tokens.spacing.xxl: 40` as a replacement. Height `52px` is this control; it is not the 32px pricing CTA. Keeping those fields on this control is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A plan-start action can be gated; plum-action fade rather than grey |
| loading | not-applicable | Destination plan CTA; it commits no operation in place |
| error | not-applicable | Destination plan CTA; it commits no operation in place |
| success | not-applicable | Destination plan CTA; it commits no operation in place |

### Secondary (Start for Free)

- Role: Lower-emphasis plum-outline action (Free plan)
- Kind: interactive
- Primitive type: `button`
- Background: `#ffffff`
- Text: `#862983`
- Border: `1px solid #862983`
- Radius: 6px
- Padding: 4px 16px
- Height: 32px
- Font: `16px / 600 Noto Sans` · 16px Noto Sans weight 600
- Use: YAML `Secondary CTA (Start for Free), magenta outline` · §4 `Lower-emphasis plum-outline action (Free plan)`
- YAML `tokens.components.button-secondary`

Fill `#ffffff` is this control's background and `tokens.colors.surface`; it is not `tokens.colors.on-primary` as a replacement. Label `#862983` is outline/text, not a filled plum action. Radius `6px` is this control, same numeral as pricing Join Now, on a second component. Keeping fill off on-primary and keeping this outline off the filled Join Now, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A Free-plan action can be gated; treatment omitted |
| loading | not-applicable | Destination Free-plan CTA; it commits no operation in place |
| error | not-applicable | Destination Free-plan CTA; it commits no operation in place |
| success | not-applicable | Destination Free-plan CTA; it commits no operation in place |

### Hero Ghost (Start for free)

- Role: White outline pill CTA over the purple hero gradient
- Kind: interactive
- Primitive type: `button`
- Background: transparent (source §9; YAML records no `bg`)
- Text: `#ffffff`
- Border: `2px solid #ffffff`
- Radius: 9999px
- Padding: `14px 70px`
- Font: `28px / 600 Noto Sans` · 28px Noto Sans weight 600
- Use: YAML `White outline pill CTA over the purple hero gradient`
- YAML `tokens.components.button-hero-ghost`
- Surface: homepage purple hero (`#6e28af → #ac8ffe`). White type and the 2px white ring stay on that band.

YAML records no height; none is invented. Padding is YAML/§4 `14px 70px`. Radius `9999px` is this control and `tokens.rounded.full: 9999`. It is not the "Join Now" header pill merely because both are 9999px, and it is not pricing Join Now `6px`. Font `28px / 600` is this control; it is not nav `18px / 600` and not Primary Large `18px / 600` as a replacement. Keeping transparent background, the missing height, and homepage-hero attribution on this control is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A hero CTA can be gated; treatment omitted |
| loading | not-applicable | Destination hero CTA; it commits no operation in place |
| error | not-applicable | Destination hero CTA; it commits no operation in place |
| success | not-applicable | Destination hero CTA; it commits no operation in place |

### Nav Link

- Role: Top nav item (Features, Pricing, Portaly AI, Blog)
- Kind: interactive
- Primitive type: `tab`
- Background: `#ffffff` (source §4 Navigation; YAML `nav-link` records no `bg`)
- Text: `#0c2340`
- Font: `18px / 600 Noto Sans` · 18px Noto Sans weight 600
- Active: magenta `#862983` text on the active item
- Use: YAML `Top nav item (Features, Pricing, Portaly AI, Blog)` · §4 `Top horizontal nav (Features, Pricing, Portaly AI, Blog) with a plum "Join Now" pill right-aligned`
- YAML `tokens.components.nav-link`

The right-aligned plum "Join Now" header pill is §4 Navigation / §5 Full (`9999px`). It is not `tokens.components.button-primary` (6px, 32px, padding `4px 16px`, font `16px / 600`). Named Active magenta text is an additional named-source-state. It is not a Core `focus-visible` row and is not copied onto that row as a colour. Keeping Active off `focus-visible`, and keeping the 9999px header pill off `button-primary`, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A nav item can be gated; treatment omitted |
| loading | not-applicable | Destination tab; it commits no operation in place |
| error | not-applicable | Destination tab; it commits no operation in place |
| success | not-applicable | Destination tab; it commits no operation in place |

### Pricing Plan Card

- Role: Pricing plan card sitting on the `#f8f8f8` canvas (no border)
- Primitive type: `card`
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(99,99,99,0.2) 0px 2px 8px 0px`
- Use: YAML `Pricing plan card on #f8f8f8 canvas, no border`
- YAML `tokens.components.plan-card`
- Layout the source also records: each card ~538px / ~540px wide in a two-up grid (Free / Premium)

Radius `12px` is this control and `tokens.rounded.md: 12`. It is not `tokens.spacing.md: 12`. Shadow is `tokens.shadow.card`; it is not `tokens.shadow.block`. Kind and a state-applicability map are omitted: the source records a card container, not an interactive-kind for the card itself (C4). Treating this as a container without deciding interactive-kind, and keeping ~538px beside ~540px as two source writings, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

### Creator Link Block

- Role: The core product component — a full-width tappable link row on a creator's page
- Kind: interactive
- Primitive type: `card`
- Background: `#ffffff`
- Radius: 6px
- Padding: 8px 16px
- Font: `16px / 600 Noto Sans` · 16px Noto Sans weight 600
- YAML filled variant (source §4 / YAML): radius 6px, padding 8px 16px, font `16px / 600 Noto Sans`
- Rounded 16px variant (YAML `use` / §4 / §5 names it): radius 16px
- Shadow: `rgba(0,0,0,0.05) 0px 1px 2px 0px` (source §4; YAML `tokens.shadow.block`; YAML `link-block` record itself has no `shadow` field)
- Use: YAML `Creator-page link block (filled 6px / rounded 16px variants); accent color is creator-chosen` · §4 `The core product component — a full-width tappable link row on a creator's page (filled 6px and rounded 16px variants; accent color is creator-chosen)`
- YAML `tokens.components.link-block`
- Surface: founder creator page `https://portaly.cc/cwl` (Traditional-Chinese product surface)
- Sibling-named labels on that surface: filled variant `🦞 OpenClaw 安裝手冊`; rounded variant `經理人專欄`

Filled 6px is this YAML radius and `tokens.rounded.sm: 6`. Rounded 16px is the other variant the source names; it is not `tokens.rounded.lg: 20` and not `tokens.spacing.base: 16`. Accent color is creator-chosen; it is not `tokens.colors.primary`. Shadow is `tokens.shadow.block`; it is not `tokens.shadow.card`. YAML filled padding `8px 16px` stays on the filled variant. Source §8 `44px+` is the touch-target writing for creator link blocks; it is not a height token on this YAML record. Keeping the 6px / 16px variants and those two labels on this component, and keeping creator-chosen accent off plum, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tappable row; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable destination row; visual treatment omitted |
| disabled | applicable | A link row can be gated; treatment omitted |
| loading | not-applicable | Destination link row; it commits no operation in place. Page/builder skeleton at final link-block dimensions stays on the §14 capture record |
| error | not-applicable | Destination link row; it commits no operation in place |
| success | not-applicable | Destination link row; it commits no operation in place |

### Billing Switch (Annual / Monthly)

- Role: Billing-period switch; the active thumb is plum `#862983`
- Kind: interactive
- Primitive type: `toggle`
- Background: `#d9d9d9`
- Radius: 9999px
- Height: 24px
- Use: YAML `Annual/Monthly billing switch, magenta #862983 active thumb` · §4 Billing-period switch; the active thumb is plum `#862983`
- YAML `tokens.components.toggle-billing`
- Surface: pricing

Track `#d9d9d9` is this control and `tokens.colors.hairline`. Thumb `#862983` is `tokens.colors.primary` on this control. Radius `9999px` is this control and `tokens.rounded.full: 9999`; it is not Hero Ghost padding or the header pill as a replacement. Height `24px` is this control; it is not `tokens.typography.feature` size 24. Keeping those fields on this toggle is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable toggle; visual treatment omitted |
| disabled | applicable | A billing switch can be gated; treatment omitted |
| loading | not-applicable | The control only switches Annual/Monthly; it commits no operation in place |
| error | not-applicable | The control commits no operation in place |
| success | not-applicable | The control commits no operation in place |

### Feature Check

- Role: Teal checkmark glyph preceding each plan feature line
- Kind: non-interactive
- Primitive type: `badge`
- Text: `#12a3a0`
- Font: `16px / 400 Noto Sans` · 16px Noto Sans weight 400
- Use: YAML `Teal checkmark in plan feature lists` · §4 `Teal checkmark glyph preceding each plan feature line`
- YAML `tokens.components.feature-check`

`#12a3a0` is this glyph and `tokens.colors.teal-alt`; it is not `tokens.colors.teal` `#00a6a3`. Kind is non-interactive because the source records a checkmark glyph in a plan feature list, not a control. A state-applicability map is omitted. Treating that glyph as non-interactive, and keeping teal-alt off teal, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Treating those layout behaviors as the source wrote them rather than as a measured cross-viewport specification beyond the named rows, keeping YAML spacing unmerged from this layout prose, and keeping Mobile / Tablet / Desktop as source §8 writings rather than invented breakpoint tokens, are derived editorial implementation inferences from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

### Spacing system (source §5)

- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 40px, 64px
- Notable: section CTAs use a generous 24px 40px padding for the large "Start Free" button; plan cards sit ~540px wide in a two-up grid

YAML spacing is `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 12` · `tokens.spacing.base: 16` · `tokens.spacing.lg: 20` · `tokens.spacing.xl: 24` · `tokens.spacing.xxl: 40` · `tokens.spacing.section: 64`, recorded without a px suffix.

### Grid and container

- Centered marketing column: full-width purple hero gradient band, then white content sections on the `#f8f8f8` canvas
- Pricing: a centered two-up plan-card grid (Free / Premium), each card ~538px wide at 12px radius
- Feature sections alternate white feature-card rows with template-thumbnail gradient grids
- Creator pages: a single mobile-first centered column of full-width link blocks under an avatar + handle header

### Whitespace philosophy

- **Airy and optimistic**: generous vertical rhythm between sections; the creator-economy product avoids dense dashboard packing on its marketing surface.
- **Color band cadence**: the purple hero gradient gives way to clean white content, a bright-to-calm transition that anchors the brand mood up top.
- **Soft segmentation**: sections separate by `#f8f8f8` vs `#ffffff` background shift and thin `#d9d9d9` hairlines, not heavy borders.

### Breakpoints (source §8)

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; hero headline compresses; plan cards stack; creator pages are mobile-first by default |
| Tablet | 640-1024px | Moderate padding; two-up feature/plan grids begin |
| Desktop | 1024-1440px | Full layout; centered hero; two-up plan grid; template-thumbnail rows |

### Touch targets

- Filled CTAs at 32px+ height with comfortable horizontal padding; large CTA at 52px
- Creator link blocks at 44px+ full-width rows — generous, unmistakable tap targets
- Nav links spaced for touch within the white header

### Collapsing strategy

- Hero: 50px ExtraBold headline scales down on mobile, weight 800 maintained
- Pricing: two-up plan cards → stacked single column
- Feature sections + template grids: multi-column → stacked
- Purple hero band maintains its gradient full-width across breakpoints

### Image behavior

- Template thumbnails keep their vibrant gradient fills and rounded corners at all sizes
- Phone-mockup product shots in the hero scale proportionally
- Creator-page avatars and link blocks remain full-width centered on narrow viewports

<!-- design-md:section content-locales -->
## 6. Content & Locales

Portaly's voice is **encouraging, growth-minded, and creator-first** — it speaks to visual creators and small businesses as ambitious people turning an audience into income, not as users to be onboarded. The hero line "Your All-in-One Platform for Growth and Profit" and the supporting "Join 200,000 creators worldwide to turn passion into profit" set the register: aspirational, plain-spoken, benefit-forward, never jargon-heavy. Pricing copy ("Growth & monetization plans built for creators", "From basic presence to steady monetization — choose the plan that fits you") frames money positively and removes friction rather than pressuring. Marketing site renders English globally; creator product pages are personal and warm, in Traditional Chinese. Treating those voice adjectives and the register reading as a derived editorial implementation inference from the verified surfaces; they are not Portaly-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational, benefit-first. "Your All-in-One Platform for Growth and Profit." Confident, not hype. |
| Feature heads | Action verbs naming an outcome. "Turn Traffic into Revenue", "Grow Your Fanbase", "Monetize Your Content". |
| CTAs | Direct, low-pressure, free-forward. "Start for free", "Join Now", "Start Free". |
| Pricing copy | Reassuring and transparent. "Permanently Free to Use", "with the first 14 days free", "Save 14% monthly". |
| Creator product (TC) | Personal and warm, in Traditional Chinese — a creator's own links, columns, and recruiting posts. |

**Forbidden register**: fear-based or scarcity urgency, undefined growth-hacking jargon, exclamation-heavy hype, dismissive or gatekeeping language toward small creators. Treating that forbidden-register list as source-stated §10 rather than a separately published microcopy specification is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

**Voice samples (verbatim from live surfaces):**

- "Your All-in-One Platform for Growth and Profit" — hero headline (mission-framed). *(verified live 2026-06-17, portaly.cc/)*
- "Join 200,000 creators worldwide to turn passion into profit" / "Join 200,000 creators worldwide to turn passion into profit." — hero subhead (scale + benefit). *(verified live 2026-06-17, portaly.cc/)*
- "Growth & monetization plans built for creators" / "Growth & monetization plans built for creators." — pricing headline. *(verified live 2026-06-17, portaly.cc/en/pricing)*
- "Drive Social Media Traffic" — live section H2 on `portaly.cc/`. *(sibling capture 2026-06-17)*
- `🦞 OpenClaw 安裝手冊` — filled 6px link-block label on `portaly.cc/cwl`. *(sibling capture 2026-06-17)*
- `經理人專欄` — rounded 16px link-block label on `portaly.cc/cwl`. *(sibling capture 2026-06-17)*

Traditional-Chinese product examples the source records on creator pages stay as source evidence: `林啟維`, `Portaly 徵才 全端工程師`. Treating the live samples as verbatim live strings, and the creator-page examples as recorded product surface, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. Treating this list as a catalog of source-named unresolved writings, not coverage of domains the source never named, is a derived editorial implementation inference from the verified surfaces; it is not Portaly-authored or a separately published UI specification.

- exact hex for YAML `hover deepens plum` on `button-primary`
- `focus-visible` visual treatments (named hover deepen and named nav Active are not that evidence)
- hover visual treatments on Primary Large, Secondary, Hero Ghost, Nav Link, Creator Link Block, and Billing Switch
- exact cubic-bezier values for `ease-enter` / `ease-exit` / `ease-standard` (unattributed; names kept)
- YAML `button-hero-ghost` height (source records padding and font, not height)
- interactive kind and state-applicability map for Pricing Plan Card
- motion promotion beyond the duration table, easing names, signature motions, and reduced-motion line — promote only after per-component computed capture of all five kinds: transition properties, animation name, duration, easing, and reduced-motion behavior; official documentation of a single curve or duration is not that gate
