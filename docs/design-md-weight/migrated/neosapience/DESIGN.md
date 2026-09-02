# Neosapience Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Neosapience (네오사피엔스) is the Korean generative-AI lab behind Typecast — emotionally expressive text-to-speech, voice cloning, and AI-avatar synthesis. This contract covers the two first-party surfaces the source inspected for tokens: the corporate site at `https://neosapience.com` and the product site at `https://typecast.ai/`. A third named URL, `https://company.typecast.ai/ko/`, is the corporate KO mirror; the source records it as an identical system (title "네오사피엔스 - 자연스러운 감정이 담긴 음성 인공지능 기술과 가상인간를 통한 생성형 AI 콘텐츠 제작 플랫폼"; H1 "네오사피엔스 소개") and not as a separate token set. Catalog identity also records `primary_color: "#fe7e43"`; that catalog field is the same hex as `tokens.colors.primary` and is not a third orange. Reading those two inspected URLs as this contract's token surfaces, keeping the KO mirror as the same corporate system in Korean rather than as a third token surface, attaching every value to the surface that established it, and keeping catalog `primary_color` on the same hex as `tokens.colors.primary` rather than as a second orange, are derived editorial implementation inferences from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.

Its identity lives across two deliberately different surfaces, and the split is the whole story. Corporate (`neosapience.com`) is a calm, research-grade white room — a pure white canvas (`#ffffff`) with deep-navy headings (`#09162d`), Tailwind gray-900 body text (`#111827`), and a single warm orange accent (`#fe7e43`) used sparingly. There are essentially no shadows — separation comes from soft grey surfaces (`#f4f4f4`, `#f9fafb`) and the occasional thin outline. The register is academic and trustworthy: this is the face the company shows to investors, researchers, and recruits, and it reads like a well-typeset paper. The product surface (`typecast.ai`) is the opposite mood — playful, consumer, and saturated. The hero runs **Plus Jakarta Sans** at 66px weight 600 in near-black (`#262626`), CTAs are full-pill orange (`#f97316`) in **Roboto** weight 700, and the page is dotted with emotion-preset chips, peach tints (`#ffe7d4`), and a gold-amber secondary accent (`#f7b500`). Body copy drops to a softer grey (`#404040`). Where the corporate site whispers, the product shouts a friendly invitation to "TRY FOR FREE." Both surfaces share **Pretendard** as the underlying body font (with `Spoqa Han Sans` fallback on the product), which keeps Korean and Latin text cohesive across the two worlds. What unifies the two systems is a shared warm-orange spine and a hangul-first typographic discipline. The corporate orange (`#fe7e43`) and the product CTA orange (`#f97316`) are siblings — both signal "the action / the brand" — and they keep an otherwise neutral palette (navy `#09162d`, nav grey `#1f2937`, muted `#4b5563` and `#6b7280`, pure black `#000000` for the sharp-edged research list, tab border `#e5e5e5`, active tab `#ffc98f`) feeling human rather than clinical. The hex values, family names, and two-surface split are the source's own. The characterizations built on them — two deliberately different surfaces; the split is the whole story; a calm, research-grade white room; academic and trustworthy; reading like a well-typeset paper; the product as the opposite mood; whispers versus shouts; a shared warm-orange spine and hangul-first typographic discipline; the two oranges as siblings that both signal "the action / the brand"; an otherwise neutral palette feeling human rather than clinical; a brand that can be both a serious AI research house and an approachable creator tool without either voice undermining the other — are a derived editorial implementation inference from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Neosapience (네오사피엔스) is a Korean generative-AI company founded in **2017** by **김태수 (Taesu Kim, CEO)**, an engineer-researcher who set out to give synthetic speech genuine emotion — not just intelligible words, but the expressive prosody that makes a voice feel human. The company's research lineage is visible directly on its homepage: a long, dated publication list stretching back to 2018 covering emotional TTS, voice cloning, diffusion-based speech synthesis (Diff-TTS, EdiTTS), singing synthesis (MLP Singer), and face reenactment — the building blocks of expressive multimodal content generation. That research matured into **Typecast**, the company's flagship product: a content-creation platform where creators type text and get emotionally expressive AI voiceovers and AI-avatar video. The product's underlying model, **Typecast SSFM** ("controllable speech/video synthesis"), is the commercial expression of the lab's papers on cross-speaker emotion transfer and prompt-controllable expressive TTS. The two-surface brand — austere research house, friendly creator tool — is intentional: the corporate site speaks to investors, researchers, and recruits; Typecast speaks to millions of creators. The source HTML comment qualifies founding details beyond the homepage as widely documented public knowledge, not directly quoted from a verified company statement in this turn; the dated research-paper list is observed live on neosapience.com. What Neosapience refuses, visible in its design: the cold, clinical aesthetic of enterprise AI (no dark-mode-terminal posturing, no generic blue-gradient "AI" clichés) on the corporate side, and the intimidating complexity of pro audio tools on the product side. What it embraces: a warm orange spine that humanizes the technology, a research-grade calm that signals rigor, and a product surface that makes a deeply technical capability feel as simple as picking an emotion and pressing "Try me." The 2017 founding, 김태수 (Taesu Kim, CEO), the 2018-onward paper list, Typecast, Typecast SSFM, and that refuses/embraces closing are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-research narrative as context that does not by itself supply interface tokens, and carrying the source's own "not directly quoted from a verified company statement in this turn" bound on founding details beyond the homepage, are derived editorial implementation inferences from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks — corporate mission-and-publication reading, Typecast hero/demo invitation, Typecast feature-and-emotion switching, and corporate top-nav destinations — each naming a captured surface, control, or verbatim label the source records, is a derived editorial implementation inference from the verified surfaces; it is not Neosapience-authored or a separately published UI specification. They do not come from the source's Personas section.

- Read "We invent the future of creativity with AI" and the dated publication list on `https://neosapience.com`.
- Press "TRY FOR FREE" in the Typecast hero, or "Try me" beside product demos, on `https://typecast.ai/`.
- Switch Typecast features with the segmented control ("Text-to-Speech", "Smart Emotion", "Voice Cloning") and pick emotion-preset pills ("Happy · Paige", "Sad · Nia", "Angry · Riley", "Whisper · Chad").
- Open corporate top-nav destinations "About", "Mission", "Our tech", "Research", "Careers".
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three named figures as fictional archetypes informed by publicly observable Neosapience / Typecast user and stakeholder segments (creators using AI voice, ML researchers, and recruits), not individual people, so their names, ages, cities, biographies, motivations, and affiliation classifications are dropped rather than promoted, and no demographic segment list is carried into this document or its sidecar. What the source independently records is: the corporate site speaks to investors, researchers, and recruits; Typecast speaks to millions of creators; and the §13 header's publicly observable segments (creators using AI voice, ML researchers, and recruits). Dropping those fictional archetypes rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading only those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.

- Two-surface split: minimal-flat corporate (`neosapience.com`) vs. playful-saturated product (`typecast.ai`)
- Shared warm-orange spine — corporate `#fe7e43`, product CTA `#f97316`
- Pretendard as the cross-surface body font; Plus Jakarta Sans (display) + Roboto (UI) on the product
- Deep-navy `#09162d` corporate headings; near-black `#262626` product headings — never pure black for headings
- Flat corporate depth: no shadows, grey surfaces (`#f4f4f4`, `#f9fafb`) and outlines do the separating
- Full-pill geometry on product CTAs (9999px) and emotion chips; conservative 6–12px radii on corporate chrome
- Peach (`#ffe7d4`) and amber (`#f7b500`) tints add warmth on the product surface only

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Neosapience-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each. The source HTML comment flags interpretive claims (e.g., "two faces, one spine", "warm, not clinical") as editorial readings connecting Neosapience's observed two-surface design to its positioning, not directly sourced company statements.

1. **Emotion is the product.** The company's reason to exist is expressive, emotional synthetic voice — not merely intelligible TTS. *UI implication:* the product surfaces emotion presets (Happy, Sad, Angry, Whisper) as first-class, tappable chips.
2. **Research credibility, plainly shown.** A dated publication list is a design element, not a hidden CV. *UI implication:* the corporate research list is sharp-edged and factual — dates and titles, no decoration.
3. **Two faces, one spine.** The serious research house and the friendly creator tool are different moods unified by the warm orange. *UI implication:* keep surfaces tonally distinct but always carry the orange action/brand color.
4. **Warm, not clinical.** AI does not have to look cold. *UI implication:* orange accents, peach tints, and near-black (not pure black) headings keep the technology human.
5. **Low-friction invitation.** The path from "curious" to "trying it" is one pill. *UI implication:* the product primary CTA is unmistakable — a 60px orange pill that says "TRY FOR FREE".

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.

- Keep the corporate surface flat and minimal — Pretendard, navy `#09162d` headings, white canvas, no shadows
- Reserve orange (`#fe7e43` corporate, `#f97316` product) for brand accents and primary actions
- Use Plus Jakarta Sans for product display headlines and Roboto weight 700 for product CTA labels
- Use full-pill geometry (9999px) for product CTAs and emotion chips
- Separate corporate sections with grey surfaces (`#f4f4f4`, `#f9fafb`) and thin outlines, not shadows
- Use near-black headings (navy `#09162d` corporate, `#262626` product) instead of pure black
- Let the product surface carry the warmth — peach (`#ffe7d4`) and amber (`#f7b500`) tints belong on typecast.ai
- Use Pretendard as the shared body font so Korean and Latin text stays cohesive across surfaces

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.

- Don't bring product saturation (peach tints, big pills) onto the calm corporate research surface
- Don't spread orange across many elements — it should mark the brand / the action, not decorate everything
- Don't use heavy drop shadows on the corporate surface — it is a flat, outline-based system
- Don't set product CTAs in anything but the orange pill — `#f97316`, 9999px radius, Roboto 700
- Don't use pure black (`#000000`) for headings or body — reserve it for the sharp-edged research list outline
- Don't mix Plus Jakarta Sans into the corporate surface — Pretendard owns the corporate voice
- Don't add a second saturated hue beyond the orange family — amber (`#f7b500`) is a tint accent, not a competing brand color
- Don't use sharp square corners on product chrome — product geometry is pills and large radii

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Taking those role names from the source's own token-set keys, pairing each hex to the token-set path named beside it, keeping `tokens.colors.primary` `#fe7e43` off `tokens.colors.product-cta` `#f97316`, keeping `tokens.colors.ink` `#09162d` off `tokens.colors.ink-product` `#262626` and off `tokens.colors.ink-pure` `#000000`, keeping `tokens.colors.body` `#111827` off `tokens.colors.body-product` `#404040`, keeping `tokens.colors.nav` `#1f2937` off those inks, keeping `tokens.colors.muted` `#4b5563` off `tokens.colors.muted-alt` `#6b7280`, keeping `tokens.colors.canvas` `#ffffff` off `tokens.colors.surface` `#f4f4f4` and `tokens.colors.surface-alt` `#f9fafb`, keeping `tokens.colors.peach` `#ffe7d4` off `tokens.colors.amber` `#f7b500`, keeping `tokens.colors.tab-active` `#ffc98f` off `tokens.colors.tab-border` `#e5e5e5`, attaching every role to the surface the source recorded, reading the two oranges as siblings that both signal "the action / the brand" only as the source's own wording rather than as a third mixed orange, and keeping the canvas role off Typecast CTA text and off emotion-chip / corporate-nav background as component-field attachments rather than extra colors keys, are derived editorial implementation inferences from the verified surfaces; they are not Neosapience-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

#### Brand & Accent

- **Neosapience Orange** (`#fe7e43`): The corporate brand accent and `primary_color`. Used sparingly on `neosapience.com` for highlights and active states — the single warm hue in an otherwise neutral research palette. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is this same hex; it is not `tokens.colors.product-cta`.
- **Typecast CTA Orange** (`#f97316`): The product's primary action color — every "TRY FOR FREE" / "Try me" pill on `typecast.ai`. A sibling of the corporate orange, slightly more saturated. Token-set path `tokens.colors.product-cta`.
- **Amber Gold** (`#f7b500`): Secondary accent on the product surface — highlight ticks, decorative emphasis. Token-set path `tokens.colors.amber`.
- **Peach Tint** (`#ffe7d4`): Soft warm background wash behind product feature blocks and chips. Token-set path `tokens.colors.peach`.

#### Ink & Text

- **Ink Navy** (`#09162d`): Corporate heading color — a deep blue-black for H1/section heads, carrying research-grade weight without harshness. Token-set path `tokens.colors.ink`.
- **Product Ink** (`#262626`): Near-black for Typecast product headings and chip labels. Token-set path `tokens.colors.ink-product`.
- **Body Gray** (`#111827`): Tailwind gray-900, the corporate body / default text color. Token-set path `tokens.colors.body`.
- **Nav Gray** (`#1f2937`): Tailwind gray-800, used for corporate nav links. Token-set path `tokens.colors.nav`.
- **Product Body** (`#404040`): Softer grey for Typecast product body copy. Token-set path `tokens.colors.body-product`.
- **Muted** (`#4b5563`): Tailwind gray-600, secondary text and captions. Token-set path `tokens.colors.muted`.
- **Muted Alt** (`#6b7280`): Tailwind gray-500, lowest-emphasis labels and metadata. Token-set path `tokens.colors.muted-alt`.
- **Pure Black** (`#000000`): Maximum-contrast outline on the sharp-edged research-paper list rows. Token-set path `tokens.colors.ink-pure`. Not a heading or body color.

#### Surface & Border

- **Pure White** (`#ffffff`): Page background and card surfaces on both sites. Token-set path `tokens.colors.canvas`.
- **Surface Grey** (`#f4f4f4`): Corporate content-card / panel background. Token-set path `tokens.colors.surface`.
- **Surface Alt** (`#f9fafb`): Tailwind gray-50, alternating section background. Token-set path `tokens.colors.surface-alt`.
- **Tab Active** (`#ffc98f`): The 2px border on the active Typecast feature tab — a peach-orange outline. Token-set path `tokens.colors.tab-active`.
- **Tab Border** (`#e5e5e5`): The 2px border on inactive Typecast feature tabs. Token-set path `tokens.colors.tab-border`.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 12` · `tokens.spacing.base: 16` · `tokens.spacing.lg: 20` · `tokens.spacing.xl: 24` · `tokens.spacing.xxl: 30` · `tokens.spacing.s40: 40` · `tokens.spacing.s48: 48` · `tokens.spacing.section: 64`.

Source §5 also writes the scale as 4px, 8px, 12px, 16px, 20px, 24px, 30px, 40px, 48px, 64px, with base unit 4px. Notable, and not a `tokens.spacing` key: corporate hero blocks use large 32–40px vertical padding; product CTA pills use 10px vertical / 20–30px horizontal padding.

`tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and is not body/nav size 16. `tokens.spacing.xl: 24` is not `tokens.rounded.xl: 24`. `tokens.spacing.xxl: 30` is not `tokens.rounded.card-product: 30` and is not the 30px in CTA horizontal padding. `tokens.spacing.s40: 40` is not emotion-chip height 40px and is not feature-tab height 40px. `tokens.spacing.s48: 48` is not Product Section size 48. `tokens.spacing.section: 64` is not use-case card height 64px. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, keeping those writings of `16`, `24`, `30`, `40`, `48`, and `64` on their own records, and keeping the source's corporate-hero 32–40px vertical-padding notable and the product-CTA 10px / 20–30px padding notable off the `tokens.spacing` key list, are derived editorial implementation inferences from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `tokens.rounded.nav: 6` · `tokens.rounded.tab: 8` · `tokens.rounded.card: 12` · `tokens.rounded.lg: 16` · `tokens.rounded.xl: 24` · `tokens.rounded.card-product: 30` · `tokens.rounded.full: 9999`.

The source's named radius uses, kept on their own rows:

- Nav hover (`6` / `6px`): corporate nav pills. Token-set key `tokens.rounded.nav`.
- Tab (`8` / `8px`): product feature segmented control. Token-set key `tokens.rounded.tab`.
- Card (`12` / `12px`): corporate content panels. Token-set key `tokens.rounded.card`.
- Large (`16` / `16px`): product media blocks. Token-set key `tokens.rounded.lg`. This `16` is not a spacing step.
- Extra-large (`24` / `24px`): product media blocks (source writes Large as 16–24px). Token-set key `tokens.rounded.xl`. This `24` is not `tokens.spacing.xl: 24`.
- Product card (`30` / `30px`): use-case selector cards. Token-set key `tokens.rounded.card-product`. This `30` is not `tokens.spacing.xxl: 30`.
- Full (`9999` / `9999px`): product CTAs and emotion chips. Token-set key `tokens.rounded.full`.

Keeping those seven rounded keys on their own path, and keeping `tokens.rounded.full: 9999` unmerged from any spacing or height, is a derived editorial implementation inference from the verified surfaces; it is not Neosapience-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Corporate surfaces, headings, most chrome |
| Tint (Level 1) | `#f4f4f4` / `#f9fafb` background shift | Corporate card/section separation without elevation |
| Soft (Level 2) | `rgba(0,0,0,0.06) 0px 4px 16px` | Product use-case cards on typecast.ai |

YAML `tokens.shadow.none` is `none`. YAML `tokens.shadow.product-soft` is `rgba(0,0,0,0.06) 0px 4px 16px`.

The source's shadow philosophy, kept as written: The corporate surface is essentially shadowless — live inspection found `box-shadow: none` across the hero, nav, headings, and content panels, with depth conveyed entirely through flat grey surfaces and outlines. This keeps the research face clean and serious. The product surface introduces a single soft shadow on its rounded use-case cards to make them feel tappable and friendly, but never the heavy stacked-card look of legacy apps. Emphasis, when needed, comes from the orange accent (`#fe7e43` / `#f97316`) or warm tints (`#ffe7d4`), not elevation. Reading that stack as a two-surface elevation system — flat corporate, one soft product shadow — and reading the tappable-and-friendly / never-heavy-stacked-card clauses as purpose rather than as extra tokens, is a derived editorial implementation inference from the verified surfaces; it is not Neosapience-authored or a separately published UI specification. The measurements themselves are recorded values.

### Motion

Source-stated duration roles. The source HTML comment attaches live inspect to token-level claims in §1–9; §15 sits in the philosophy layer (sections 10–15) and is not in the live-inspect list. Treating §15 as philosophy-layer rather than live-inspect, treating the duration table, easing names, two-surface motion rules, and reduced-motion line as source-stated rather than computed CSS, treating the omitted `ease-exit` curve as matching the legacy spec-template `ease-exit` example, and treating the omitted `ease-enter` / `ease-standard` curves as unattributed, is a derived editorial implementation inference from the verified surfaces; it is not Neosapience-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, tab switch, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only) | Arriving — cards, chips, sheets |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only) | Two-way transitions |

The following motion-rule readings, including functional-and-quiet-on-corporate / slightly-more-playful-on-product, chip-and-tab scale/opacity, fade-in from below, near-instant corporate transitions, no-bounce-or-heavy-spring, and reduced-motion-fully-functional, are a derived editorial implementation inference from the verified surfaces; they are not Neosapience-authored or a separately published UI specification. Motion is functional and quiet on the corporate surface and slightly more playful on the product. Emotion chips and feature tabs respond to press with a subtle scale/opacity shift; product cards and sections fade-in from below at `motion-standard / ease-enter`. The corporate research surface keeps motion to near-instant functional transitions, consistent with its flat, calm aesthetic. No bounce or heavy spring — an AI research company signals steadiness, and the product stays inviting without being gimmicky. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; both surfaces remain fully functional.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. A motion value beyond the duration table above may be promoted only after component-specific computed observation establishes all five evidence kinds — transition properties, animation name, duration, easing, and reduced-motion behavior. A single confirmed curve does not satisfy that condition. Until then the unresolved curve fields stay absent rather than carrying a plausible default. That condition is set by this document, not by Neosapience.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Family

- **Corporate**: `Pretendard` (with `Pretendard Fallback`) — all corporate headings, nav, and body on `neosapience.com`. Token-set path `tokens.typography.family.corporate`.
- **Product Display**: `Plus Jakarta Sans` — Typecast hero and section headlines. Token-set path `tokens.typography.family.product-display`.
- **Product UI**: `Roboto` — Typecast buttons, chips, and interactive labels. Token-set path `tokens.typography.family.product-ui`.
- **Product Body / Fallback**: `Pretendard`, then `Spoqa Han Sans` — Typecast paragraph text and the Korean fallback. Token-set path `tokens.typography.family.product-fallback` is `Spoqa Han Sans`.

Live inspect (2026-06-26): corporate body Pretendard `rgb(17,24,39)` `#111827`; H1/section 36px/700 `rgb(9,22,45)` `#09162d`; orange accent `rgb(254,126,67)` `#fe7e43`; product hero H1 66px/600 Plus Jakarta Sans `rgb(38,38,38)` `#262626`; primary CTA "TRY FOR FREE" bg `rgb(249,115,22)` `#f97316` 18px/700 Roboto.

The following family-use rules are the source's own typography principles. Reading "one font per job, per surface", "heavy display, light body", "hangul-first sizing", and "headings are never pure black" as implementation rules rather than as a separately published type specimen, and reading the trailing do-not-present-fallback-or-system-face / do-not-mix-display-into-corporate lines as those same implementation rules rather than as a separately published type specimen, is a derived editorial implementation inference from the verified surfaces; it is not Neosapience-authored or a separately published UI specification.

- **One font per job, per surface**: Pretendard owns the corporate voice; Plus Jakarta Sans persuades and Roboto operates on the product. They never swap roles across surfaces.
- **Heavy display, light body**: Headlines run 600–700; body and nav sit at 400–500. The weight jump is the primary hierarchy signal.
- **Hangul-first sizing**: Body sits at a deliberate 16px / line-height 1.5 — generous for hangul legibility while staying dense enough for information-rich research and product layouts.
- **Headings are never pure black**: corporate uses navy `#09162d`, product uses near-black `#262626` — warmth over absolute contrast.

Do not present `Pretendard Fallback`, `Spoqa Han Sans`, or a system face as the brand face. Do not mix Plus Jakarta Sans into the corporate surface.

### Type roles

Each row keeps the YAML token-set path and `use` string beside the longer §3 table writing (size rem, Surface, Notes). Unitless line-height stays a ratio and is never converted to a replacement px. Pairing each role to its token-set path, keeping YAML `use` verbatim beside the longer §3 Notes, keeping `tokens.typography.body.size` `16` off `tokens.spacing.base: 16` and off nav size 16 as a second key, keeping `tokens.typography.section-product.size` `48` off `tokens.spacing.s48: 48`, keeping caption YAML size 14 beside the §3 range 14–16px, keeping Button 18px off Corporate Lead 18px as two roles that share a size, and keeping the inline demo CTA's 16px / 700 Roboto as a component-local writing off the Button type-role, are derived editorial implementation inferences from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Surface | Token-set use | Notes |
|---|---|---|---|---|---|---|---|
| Product Hero | Plus Jakarta Sans | 66px (4.13rem) | 600 | 1.06 | typecast.ai | Typecast product hero, Plus Jakarta Sans | "The world's most expressive AI voice". Path `tokens.typography.display-hero`. |
| Product Section | Plus Jakarta Sans | 48px (3.00rem) | 700 | 1.2 | typecast.ai | Typecast section heads, Plus Jakarta Sans | "What are you making?". Path `tokens.typography.section-product`. This `48` is not `tokens.spacing.s48: 48`. |
| Corporate Heading | Pretendard | 36px (2.25rem) | 700 | 1.25 | neosapience.com | Corporate H1 / section heads, Pretendard | H1 / section heads. Path `tokens.typography.heading`. |
| Corporate Lead | Pretendard | 18px (1.13rem) | 500 | 1.55 | neosapience.com | Corporate hero lead paragraph, Pretendard | Hero lead paragraph. Path `tokens.typography.lead`. This `18` is not Button size 18. |
| Nav Link | Pretendard | 16px (1.00rem) | 500 | 1.5 | neosapience.com | Corporate nav links, Pretendard | Top-nav items. Path `tokens.typography.nav`. |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.5 | both | Body copy, Pretendard | Standard reading text. Path `tokens.typography.body`. Same size numeral as Nav Link; two keys. This `16` is not `tokens.spacing.base: 16`. |
| Button | Roboto | 18px (1.13rem) | 700 | 1.0 | typecast.ai | Typecast primary CTA label, Roboto | Primary CTA label. Path `tokens.typography.button`. Inline "Try me" labels are a component-local 16px / 700 Roboto writing, not this role. |
| Caption / Chip | Roboto / Pretendard | 14–16px | 400 | 1.5 | both | Chip labels, metadata | YAML `tokens.typography.caption.size` is 14; the §3 table writes 14–16px. Emotion-chip labels are 16px Roboto 400. |

### Assets

- Catalog favicon pointer: `https://www.google.com/s2/favicons?domain=neosapience.com&sz=128` (`logo.type: favicon`). Classing that Google s2 URL as a catalog identity pointer rather than as a first-party mark file is a derived editorial implementation inference from the verified surfaces; it is not Neosapience-authored or a separately published UI specification.
- Corporate KO mirror title, kept byte-exact: "네오사피엔스 - 자연스러운 감정이 담긴 음성 인공지능 기술과 가상인간를 통한 생성형 AI 콘텐츠 제작 플랫폼". H1: "네오사피엔스 소개".

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Declared components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply on interactive controls. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless the source recorded one. Absence of a capture is not a `not-applicable` reason. Generic `focus` in the motion-fast use list is not `focus-visible` treatment. This is not a complete state-coverage claim. YAML `tokens.components` names eight controls; each keeps the primitive `type` recorded on that key. `corporate-card` and `research-item` have a YAML `type` but no interactive-kind evidence, so kind and the applicability map are omitted rather than decided (C4). Treating those two as unresolved for interactive kind, treating feature-tab / nav-link / emotion-chip / use-case card loading/error/success as not-applicable on role grounds rather than on missing capture, treating Typecast Primary CTA loading/error/success as not-applicable because the public hero CTA hands off, treating Typecast Inline CTA loading and error as applicable because that control commits voice synthesis, treating the §14 table below as philosophy-layer product/flow states rather than as computed component treatments, and keeping each control's recorded height, padding, radius, and font on that control's own rows rather than merging them with spacing, type, or rounded keys, are derived editorial implementation inferences from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.

Source §14 States body, preserved (philosophy layer; not in the live-inspect list):

| State | Treatment |
|---|---|
| **Empty (no projects yet, product)** | White canvas. Single near-black (`#262626`) line inviting the first project, with one orange (`#f97316`) pill CTA. No clutter. |
| **Empty (no search results)** | Muted (`#6b7280`) single line; a path back to browse. Calm, honest. |
| **Loading (voice synthesis)** | Inline progress within the active control; emotion chips stay visible. No blocking overlay. |
| **Loading (page first paint)** | Skeleton blocks at final dimensions on grey surface (`#f4f4f4`); corporate side stays shadow-free. |
| **Error (synthesis failed)** | Inline message in body color with a plain-language explanation and retry — never a bare generic error. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "required". |
| **Success (export ready)** | Brief inline confirmation in calm tone; download/next-step linked immediately below. No celebratory emoji. |
| **Disabled** | Muted (`#6b7280`) text on reduced-opacity surface; orange actions fade rather than turn grey to preserve brand read. |

### Typecast Primary CTA (TRY FOR FREE)

- Primitive type: `button` (YAML `type: button`)
- Kind: interactive
- Anatomy: label
- Background: `#f97316`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 10px 30px
- Height: 60px
- Font: 18px / 700 Roboto (source §4: 18px Roboto weight 700)
- YAML use: Typecast primary CTA — TRY FOR FREE
- Use: Product primary action — "TRY FOR FREE" in the Typecast hero
- Token-set path `tokens.components.cta-primary`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured product-hero CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A primary CTA can be made unavailable; visual treatment omitted |
| loading | not-applicable | The public hero CTA hands off to its destination; progress belongs to that destination, not to this control |
| error | not-applicable | The control carries no input of its own to validate |
| success | not-applicable | The control presents no completion outcome of its own |

### Typecast Inline CTA (Try me)

- Primitive type: `button` (YAML `type: button`)
- Kind: interactive
- Anatomy: label
- Background: `#f97316`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 10px 20px
- Height: 44px
- Font: 16px / 700 Roboto (source §4: 16px Roboto weight 700)
- YAML use: Inline product CTA — Try me
- Use: Inline "Try me" CTAs beside product demos
- Token-set path `tokens.components.cta-inline`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured inline product CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A demo CTA can be made unavailable; visual treatment omitted |
| loading | applicable | This control commits voice synthesis; visual treatment omitted (philosophy-layer §14: inline progress within the active control; emotion chips stay visible; no blocking overlay) |
| error | applicable | Synthesis can fail on this control; visual treatment omitted (philosophy-layer §14: inline message in body color with a plain-language explanation and retry) |
| success | not-applicable | Playback of the preview is not a completion outcome of this control; "export ready" is a different product flow |

### Feature Tab (segmented)

- Primitive type: `tab` (YAML `type: tab`)
- Kind: interactive
- Anatomy: label
- Text: `#404040`
- Radius: 8px
- Border: 2px solid #ffc98f
- Padding: 4px 20px 4px 16px
- Height: 40px
- Font: 16px Roboto weight 500
- Active: text `#404040` + 2px border `#ffc98f` (YAML: `text #404040 + 2px border #ffc98f`)
- Disabled: 2px solid `#e5e5e5` border (inactive). YAML `disabled`: `#e5e5e5 border`
- YAML use: Typecast feature segmented control (Text-to-Speech / Voice Cloning)
- Use: Typecast feature switcher ("Text-to-Speech", "Smart Emotion", "Voice Cloning")
- Token-set path `tokens.components.feature-tab`
- This height `40px` is not `tokens.spacing.s40: 40` and is not emotion-chip height 40px as a replacement; both component heights stay.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured segmented control; inactive uses `#e5e5e5` border |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | Captured inactive treatment: 2px solid `#e5e5e5` border |
| loading | not-applicable | Selecting a feature tab does not itself present progress |
| error | not-applicable | Tab selection carries no validation outcome |
| success | not-applicable | Tab selection carries no completion outcome |

### Emotion Preset Chip

- Primitive type: `badge` (YAML `type: badge`)
- Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#262626`
- Radius: 9999px
- Padding: 0px 20px 0px 12px
- Height: 40px
- Font: 16px / 400 Roboto (source §4: 16px Roboto weight 400)
- YAML use: Emotion preset pill (Happy, Sad, Angry, Whisper)
- Use: Emotion-preset pills on the Typecast hero ("Happy · Paige", "Sad · Nia", "Angry · Riley", "Whisper · Chad")
- Token-set path `tokens.components.emotion-chip`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured emotion-preset pills |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable chip; visual treatment omitted |
| disabled | applicable | A preset chip can be made unavailable; visual treatment omitted |
| loading | not-applicable | Selecting an emotion preset does not itself present progress; synthesis loading belongs to the "Try me" control |
| error | not-applicable | Preset selection carries no validation outcome |
| success | not-applicable | Preset selection carries no completion outcome |

### Use-case Card

- Primitive type: `card` (YAML `type: card`)
- Kind: interactive
- Anatomy: container
- Background: `#ffffff`
- Radius: 30px
- Padding: 20px 30px
- Height: 64px
- Shadow: `rgba(0,0,0,0.06) 0px 4px 16px`
- YAML use: Typecast use-case selector card with product-soft shadow
- Use: Typecast use-case selector cards ("Kid", "TikTok")
- Token-set path `tokens.components.usecase-card`
- This height `64px` is not `tokens.spacing.section: 64` as a replacement; both writings stay. This radius `30px` is not `tokens.spacing.xxl: 30`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured use-case selector cards |
| hover | applicable | Pointer-web selector; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable selector; visual treatment omitted |
| disabled | applicable | A selector card can be made unavailable; visual treatment omitted |
| loading | not-applicable | Selecting a use-case card does not itself present progress |
| error | not-applicable | Use-case selection carries no validation outcome |
| success | not-applicable | Use-case selection carries no completion outcome |

### Corporate Content Card

- Primitive type: `card` (YAML `type: card`)
- Interaction kind and applicability map: omitted. YAML records `type: card` and use "Corporate content card, flat (no shadow)"; the source establishes no interactive primitive for this panel, so kind is left unresolved rather than decided.
- Background: `#f4f4f4`
- Text: `#111827`
- Radius: 12px
- Use: Corporate panel / content card on neosapience.com — flat, no shadow
- Token-set path `tokens.components.corporate-card`

### Research Paper Row

- Primitive type: `listItem` (YAML `type: listItem`)
- Interaction kind and applicability map: omitted. YAML records `type: listItem` and use "Research paper list row, sharp-edge outline"; the source describes publication list rows (date + paper title) and does not establish an interactive primitive, so kind is left unresolved rather than decided.
- Text: `#111827`
- Border: 1px solid #000000
- Height: 62px
- Padding: 16px
- Radius: 0px (sharp-edged)
- YAML use: Research paper list row, sharp-edge outline
- Use: Publication list rows on neosapience.com — date + paper title, distinct sharp-cornered outline
- Token-set path `tokens.components.research-item`

### Corporate Nav Link

- Primitive type: `tab` (YAML `type: tab`)
- Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#1f2937`
- Font: 16px / 500 Pretendard (source §4: 16px Pretendard weight 500)
- Radius: 6px (hover pill)
- Padding: 8px 16px
- Active: orange `#fe7e43` text
- YAML use: Corporate top-nav item (About, Mission, Careers)
- Use: Corporate top nav ("About", "Mission", "Our tech", "Research", "Careers")
- Token-set path `tokens.components.nav-link`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured corporate top-nav items |
| hover | applicable | Pointer-web destination; visual treatment omitted (radius 6px is recorded as hover-pill geometry, not as a hover color treatment) |
| focus-visible | applicable | Keyboard-reachable destination; visual treatment omitted |
| disabled | applicable | A nav item can be made unavailable; visual treatment omitted |
| loading | not-applicable | Opening a corporate destination does not itself present progress on this control |
| error | not-applicable | Navigation carries no validation outcome |
| success | not-applicable | Navigation carries no completion outcome |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing system and containers

Base unit: 4px. Scale as in Foundations. Corporate: centered single-column with a 36px Pretendard headline anchor; max content ~1050px; large grey panels (`#f4f4f4`, 12px radius) frame media. Product: multi-section marketing flow — hero with pill CTA, feature segmented tabs, emotion-chip row, use-case card grid. Research: vertical list of sharp-edged outlined rows (date + title).

### Whitespace

The following whitespace-philosophy readings — corporate calm, product energy, flat corporate segmentation — are a derived editorial implementation inference from the verified surfaces; they are not Neosapience-authored or a separately published UI specification.

- **Corporate calm**: generous vertical rhythm, airy white space, minimal chrome — a research-paper cadence
- **Product energy**: denser, chip-and-card rich, warm tints fill negative space to feel inviting
- **Flat corporate segmentation**: sections separate by grey surface (`#f4f4f4` / `#f9fafb`) rather than elevation

### Breakpoints and collapsing

Source §8, kept as written (token-level claims §1–9):

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; corporate headline compresses; product chips wrap/scroll |
| Tablet | 640–1024px | Moderate padding; 2-up product feature cards |
| Desktop | 1024–1440px | Full layout; centered corporate hero; multi-column product sections |

Collapsing strategy:

- Corporate hero: 36px Pretendard headline scales down on mobile, weight 700 maintained
- Product hero: 66px Plus Jakarta Sans compresses on smaller viewports
- Emotion-chip row and feature tabs: horizontal wrap/scroll on narrow screens
- Research list: full-width sharp-edged rows stack vertically

### Touch targets

- Product primary CTA at 60px height, full pill — an unmistakable target
- Inline "Try me" CTAs at 44px height — meets the comfortable tap minimum
- Emotion chips and feature tabs at 40px height with generous horizontal padding

### Image behavior

- Corporate media sits inside flat grey panels (`#f4f4f4`, 12px radius), no shadow at any size
- Product use-case cards keep their 30px radius and soft shadow across breakpoints

Reading "unmistakable target", "comfortable tap minimum", and "no shadow at any size" as purpose clauses on those recorded heights and radii, is a derived editorial implementation inference from the verified surfaces; it is not Neosapience-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Neosapience speaks in two registers that mirror its two surfaces. The corporate voice is **measured, research-forward, and mission-driven** — the homepage hero reads "We invent the future of creativity with AI" and the about copy positions the company as "an AI startup at the forefront" of generative voice and avatar synthesis. The product voice (Typecast) is **warm, inviting, and creator-friendly** — "The world's most expressive AI voice," "What are you making? Let's bring it to life," "TRY FOR FREE." The shared thread is confidence without hype: the corporate side earns trust through research credibility (a long, dated list of published papers), and the product side earns it through an immediate, low-friction invitation to try. Summarizing those two registers as measured / research-forward / mission-driven versus warm / inviting / creator-friendly, and reading the shared thread as confidence without hype, is a derived editorial implementation inference from the verified surfaces; it is not Neosapience-authored or a separately published UI specification. The quoted lines are verbatim from the live surfaces.

| Context | Tone |
|---|---|
| Corporate hero | Mission-framed, declarative. "We invent the future of creativity with AI." |
| Corporate about | Research-forward, credible. Positions the company at the AI frontier. |
| Research list | Factual, dated, technical. Paper titles stated plainly with publication dates. |
| Product hero | Confident, expressive. "The world's most expressive AI voice." |
| Product CTAs | Direct, inviting, low-pressure. "TRY FOR FREE", "Try me". |
| Product feature copy | Benefit-first, creator-centric. "What are you making? Let's bring it to life." |

**Voice samples (verbatim from live surfaces):**

- "We invent the future of creativity with AI" — neosapience.com section heading *(verified live 2026-06-26)*
- "The world's most expressive AI voice" — typecast.ai hero H1 *(verified live 2026-06-26)*
- "What are you making? Let's bring it to life" — typecast.ai section H2 *(verified live 2026-06-26)*
- "TRY FOR FREE" — typecast.ai primary CTA *(verified live 2026-06-26)*

Corporate KO mirror, kept byte-exact: title "네오사피엔스 - 자연스러운 감정이 담긴 음성 인공지능 기술과 가상인간를 통한 생성형 AI 콘텐츠 제작 플랫폼"; H1 "네오사피엔스 소개".

**Forbidden register**: aggressive sales urgency, fear-based pitches, undefined hype superlatives on the corporate surface, and any tone that makes the research face feel like a sales funnel. Classing that forbidden-register list as a content constraint drawn from the source's Voice & Tone section, and adding no further locale behavior beyond the recorded voice samples, the KO mirror title, and hangul-first body size because the source writes none, is a derived editorial implementation inference from the verified surfaces; it is not Neosapience-authored or a separately published UI specification.

Hangul-first body sizing (16px / line-height 1.5) is recorded under Typography. Beyond those voice samples, the KO mirror title, and that hangul-first body size, the source writes no further locale behavior, so none is added here.

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

These are unnamed values, not permissions to invent. Listing them as the source-unnamed curve values and uncomputed interaction treatments, rather than as coverage of surfaces the source never named, is a derived editorial implementation inference from the verified surfaces; it is not Neosapience-authored or a separately published UI specification.

- exact cubic-bezier values for `ease-enter`, `ease-exit`, and `ease-standard` (unattributed; names and uses kept)
- computed hover and focus-visible visual treatments
- per-component computed motion evidence of all five kinds (transition properties, animation name, duration, easing, reduced-motion behavior) beyond the source-stated duration table
