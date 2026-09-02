# mikan Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

mikan (英語アプリmikan) is Japan's most-downloaded English-vocabulary learning app — over 10 million downloads — built by 株式会社mikan. Catalog homepage identity is `https://mikan.link/`. Catalog `primary_color` is `#ff4c0a`. This contract covers two first-party web surfaces the source inspected live on 2026-06-17: the corporate site at `https://mikan.link/` and the toB product surface `mikan for School` at `https://school.mikan.com/`. Every color, type, geometry, elevation, and component value below stays attached to the surface that established it. 英語アプリmikan is the named consumer product; it is not a token-capture surface in this packet. A public mikan DesignSystem (Figma) is documented by mikan designers (note.com/jirosh1998, "Figmaのリファクタリングからはじめるデザインシステムの構築") as a semantic color model (Background/Surface/Text/UI/Border/Social) with "mikan Orange" as the primary brand color, Component/Type/Size/status naming, and cross-platform iOS/Android JP+EN typography. Exact in-app hex codes are not disclosed there; all hex values in this document come from the live website inspection of the two URLs above, not from that Figma article. Reading those two URLs as this contract's token surfaces, keeping 英語アプリmikan as the named consumer product rather than as a token-capture surface, keeping the Figma DesignSystem as corroborating narrative rather than as the source of these hex values, and attaching every value to the surface that established it, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

The following characterization of the captured layer is a derived editorial implementation inference from the verified surfaces; it is not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers. Its surfaces read exactly as the product promises: bright, friendly, and relentlessly encouraging. The corporate site (`mikan.link`) opens on a warm off-white canvas (`#f7f4f3`) and white cards (`#ffffff`), with a single high-energy citrus orange (`#ff4c0a`) doing all the heavy lifting. That orange is the brand's namesake — mikan is the Japanese mandarin orange (みかん) — and it appears on every call-to-action, every English section label ("Service", "News"), and every Japanese section heading. The eye is trained to read orange as "go here, do this," while text sits in a calm near-black charcoal (`#333333`) and a deep navy (`#000e22`) so the page never feels shouty despite the saturated accent. Display headlines run in **Hiragino Kaku Gothic ProN** at weight 900 (36px hero copy, 60px English section labels). Body copy drops to a comfortable 16px at weight 400 with a generous 1.7 line-height, optimized for the dense kanji-kana mix of Japanese reading. The result is a tone that is confident but never corporate-cold — the visual equivalent of the app's "小さな『できた』の積み重ね" ("a stack of small *I-did-it!* moments") mission. The hex values, the two sizes, the 1.7 line-height, the namesake, and the mission string are the source's record.

What distinguishes the two captured surfaces, as the source records them: the corporate site is flat, almost shadowless, with corporate CTAs as flat orange rectangles at a tidy 6px radius; on `mikan for School` (`school.mikan.com`) the primary button shifts to a warmer accent orange (`#ff7f09`) sitting on a solid offset shadow (`#e26f00 0px 4px 0px 0px`) — a tactile, pressable, game-like affordance. Deep navy (`#001c46`) full-width bands break up the white, and step numerals are set in **Oswald** (46px, weight 600) in marigold (`#fd9b12`). The YAML token note states that split in those words: primary = corporate-site brand orange (`#ff4c0a`) on every CTA + section heading; mikan for School (`school.mikan.com`) runs a warmer marigold (`#fd9b12`) + accent orange (`#ff7f09`) with a 3D hard-shadow (`#e26f00`) button; deep navy (`#001c46`) bands + near-black text (`#000e22` / `#333333`); CJK display via Hiragino Kaku Gothic ProN. Calling that School button a deliberately playful 3D hard-shadow, calling the pair an education brand that looks like learning should feel — bright, low-friction, and quietly rigorous — and reading the corporate/School split as two variant subgroups rather than as a conflict, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

Brand narrative recorded by the source, kept as narrative context. The homepage states "1000万ダウンロード突破". The product's premise, as the source writes it, is behavioral, not just instructional: language acquisition is hard mostly because momentum is hard to sustain, so mikan engineers the experience around "小さな『できた』" — small, frequent, felt moments of success. The company has grown from a single consumer app into a two-sided education business: the toC `英語アプリmikan` for individual learners, and `mikan for School` (`school.mikan.com`), a toB service for schools and cram schools that wraps the same learning engine in teacher-facing management tools ("先生の学習管理を効率化"). Partnerships with established Japanese education publishers (KADOKAWA's 『真・英文法大全』, Z会's 速読速聴・英単語 series) extend the content library, positioning mikan as infrastructure for English study rather than a single app. Official homepage copy and those partnership cards provide that narrative context; they do not by themselves supply interface tokens. What the source says the design refuses: the cold, exam-pressure aesthetic of legacy Japanese cram-school materials, and the gamified-but-hollow look of attention-farming apps. What it says the design embraces: a bright, friendly citrus identity; heavy, approachable gothic type; flat, fast, low-friction layouts; and playful tactile buttons that make tapping "next" feel like a small reward. The source's own closing note flags "the design is the mission rendered visually" as an editorial reading connecting observed design to the stated mission, not a directly sourced mikan statement. The design is the mission rendered visually — learning that feels like a stack of small wins. That behavioral-premise reading, the refuses/embraces pairing, classifying the homepage and partnership facts as narrative context that does not by itself supply interface tokens, and that "design is the mission rendered visually" line, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, and recording that they do not come from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

- Discover 英語アプリmikan on the corporate site `https://mikan.link/` (section label "Service", heading "英語アプリmikan", CTA "View More →").
- Start a mikan for School free trial on `https://school.mikan.com/` ("無料トライアルのお申し込み").
- Request or download School materials on `https://school.mikan.com/` ("資料請求する", "資料ダウンロード").
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section states in its own header, and again in its closing note, that the entries are fictional archetypes informed by publicly observable mikan user segments and that the names are illustrative; those biographies are not carried here and are not re-hosted in the sidecar. What the source independently records, in its own wording, as publicly observable mikan user segments is the audience at a group level: Japanese students preparing for English exams, working adults relearning vocabulary, teachers adopting toB tools. Dropping the fictional biographies rather than promoting them, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

### Distinctive traits

The eight traits below are the source's own Key Characteristics. The values in them are recorded; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

- Citrus brand orange (`#ff4c0a`) reserved for every CTA + section heading — the single "action/identity" color
- Hiragino Kaku Gothic ProN weight 900 for display headlines — heavy, rounded, friendly CJK gothic
- Noto Sans / Noto Sans JP weight 700 on the toB `mikan for School` surface
- 3D hard-shadow buttons (`#e26f00 0px 4px 0px 0px`) on School — playful, tactile, pressable
- Warm off-white canvas (`#f7f4f3`) + deep navy (`#001c46`) bands instead of stark white-on-black
- Near-black charcoal (`#333333`) and navy ink (`#000e22`) for text — never harsh pure black for body
- Conservative radius ladder: 4px → 6px → 8px → 10px → 12px → 20px cards
- Oswald numerals (`#fd9b12` marigold) for step counters — numbered-tutorial cadence

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers. The source's own closing note flags "one bright signal" and "flat and fast with a tactile reward" as editorial readings connecting observed design to the stated mission, not directly sourced mikan statements.

1. **Celebrate small wins.** The product is built on "小さな『できた』." *UI implication:* surface progress visibly and frequently; reward the next tap with a tactile, satisfying affordance (the School 3D hard-shadow button).
2. **One bright signal.** Orange (`#ff4c0a`) means "this is mikan, do this." *UI implication:* reserve the saturated citrus for CTAs and section identity so the action is never ambiguous; don't dilute it with decorative color.
3. **Friendly, never intimidating.** English study should feel approachable. *UI implication:* heavy but rounded gothic type, generous whitespace, warm off-white canvas — no cram-school severity.
4. **Flat and fast, with a tactile reward.** *UI implication:* keep marketing chrome flat (tint + hairline + navy bands); reserve the playful 3D shadow for the moments where a tap should feel good.
5. **Two audiences, one warmth.** Learners and teachers both get an encouraging tone. *UI implication:* the toB School surface stays as friendly as the consumer app while adding concrete benefit framing.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

- Use the citrus brand orange (`#ff4c0a`) for every corporate CTA and section heading — it's the namesake "action + identity" color
- Set display headlines in Hiragino Kaku Gothic ProN weight 900 — heavy, rounded, friendly CJK gothic
- Use Noto Sans JP weight 700 for headings on the mikan for School surface
- Apply the 3D hard-shadow (`#e26f00 0px 4px 0px 0px`) on School primary buttons for a pressable, playful feel
- Use near-black charcoal (`#333333`) or navy ink (`#000e22`) for text instead of pure black
- Separate corporate sections with warm tint (`#f7f4f3`) and `#eeeeee` hairlines, and break rhythm with deep navy (`#001c46`) bands
- Set step numerals (01/02/03) in Oswald, marigold (`#fd9b12`)
- Keep radius conservative — 4px–12px on buttons and cards

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

- Spread orange across many decorative elements — keep it the single action/identity signal
- Use pure black (`#000000`) for body text — reserve charcoal `#333333` and navy ink `#000e22`
- Put the 3D hard-shadow on corporate buttons — corporate CTAs stay flat 6px
- Set body copy in a light weight or a serif — gothic at weight 400 owns reading text
- Use soft blurred drop shadows for elevation — the system is flat plus one hard-offset exception
- Mix in a second saturated accent hue beyond the orange family (orange / marigold / accent-orange)
- Set Japanese headlines in a thin weight — display is always weight 700–900
- Use positive, decorative letter-spacing on dense CJK body — keep it tight and legible

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. YAML keys keep the lowercase hex the token set writes; source prose keeps the same lowercase hex. Same-hex keys stay separate: `tokens.colors.canvas` `#ffffff` is not `tokens.colors.on-primary` `#ffffff`. `tokens.colors.navy` `#001c46` is not `tokens.colors.ink` `#000e22`. Where a line also characterizes a value — namesake citrus, single saturated "action + identity" hue, warmer companion, barely-there peach-grey, primary separation device in the shadow-light corporate system — that characterization is a derived editorial implementation inference from the verified surfaces; it is not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers. The hex values and recorded uses are the source's own.

- **mikan Orange** (`#ff4c0a` / YAML `tokens.colors.primary`): The namesake citrus brand color. CTA backgrounds, English section labels ("Service", "News"), and Japanese section headings on the corporate site. The system's single saturated "action + identity" hue. Catalog `primary_color` is this hex.
- **Marigold** (`#fd9b12` / YAML `tokens.colors.marigold`): Warmer secondary orange used for the School download pill and the Oswald step numerals (01/02/03). A softer, more golden companion to the primary.
- **Accent Orange** (`#ff7f09` / YAML `tokens.colors.accent-orange`): The `mikan for School` primary-CTA fill and outline-border color. Mid-bright orange that reads slightly warmer than the corporate primary.
- **Brand Navy** (`#001c46` / YAML `tokens.colors.navy`): Deep navy full-width section bands on the corporate site, providing dark contrast against the orange and white.
- **Ink Navy** (`#000e22` / YAML `tokens.colors.ink`): Near-black blue-tinted text color for primary copy on dark/light surfaces.
- **Charcoal** (`#333333` / YAML `tokens.colors.text`): The workhorse text color across nav, cards, and body — a warm near-black, never pure `#000000`.
- **Muted Grey** (`#666666` / YAML `tokens.colors.muted`): Secondary/metadata text, captions, fine print.
- **Pure White** (`#ffffff` / YAML `tokens.colors.canvas`): Card surfaces, button text on orange/navy, primary content background.
- **On-Primary White** (`#ffffff` / YAML `tokens.colors.on-primary`): Text/icon color on all orange and navy fills. Same hex as canvas; a different key.
- **Warm Canvas** (`#f7f4f3` / YAML `tokens.colors.surface`): The page's warm off-white background — a barely-there peach-grey that softens the orange.
- **Surface Grey** (`#fafafa` / YAML `tokens.colors.surface-grey`): Light grey card-inner / alternating-block surface.
- **Surface Alt** (`#f9f9f9` / YAML `tokens.colors.surface-alt`): A near-white alternating section background.
- **Hairline** (`#eeeeee` / YAML `tokens.colors.hairline`): Thin borders and dividers — the primary separation device in the shadow-light corporate system.
- **Orange Shadow** (`#e26f00` / YAML `tokens.colors.orange-shadow`): The solid offset color of the School 3D hard-shadow button (`#e26f00 0px 4px 0px 0px`) — a darker burnt-orange that grounds the pressable affordance.

Two further values are recorded only against a specific component and are kept there rather than promoted to a general role: the corporate-CTA 6px radius and the news-card 10px radius. Keeping those two values on their components rather than promoting them to a YAML rounded step is a derived editorial implementation inference from the verified surfaces; it is not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

### Spacing

Token-set steps, unitless: `xs: 4 · sm: 8 · md: 12 · base: 16 · lg: 20 · xl: 30 · xxl: 48 · section: 64`. Source §5 writes the same scale as 4px, 8px, 12px, 16px, 20px, 30px, 48px, 64px. Base unit: 8px (with 4px sub-step). The unitless YAML steps stay unitless; they are not rewritten as a replacement `px`. Source §5 also records that CTA horizontal padding lands at 30px (measured) and that cards use 20px / 24px inner padding. The `24px` card padding is not a YAML spacing step. Reading the 30px CTA padding as giving the orange buttons a generous, tappable hit area, and keeping `24px` as measured card padding rather than inserting it into the YAML scale, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

### Shape

Token-set steps, unitless: `sm: 4 · md: 8 · lg: 12 · xl: 20 · full: 320`. Source §5 names the same ladder with px suffixes: XSmall (4px) School download pill, small inner elements; Small (6px) corporate CTA buttons; Medium (8px) School CTAs, review cards; Large (10–12px) news cards, careers cards — the card workhorse; XLarge (20px) larger feature containers; Pill (320px / full) rounded avatar/icon chips. Small (6px) and the news-card 10px are control-local radii that are not YAML rounded keys. YAML `sm: 4` is source XSmall (download pill). YAML `md: 8` is source Medium. YAML `lg: 12` is the careers-card end of Large. YAML `xl: 20` is source XLarge. YAML `tokens.rounded.sm: 4` is not the corporate-CTA 6px. YAML `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. YAML `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. YAML `tokens.rounded.xl: 20` is not `tokens.spacing.lg: 20`. YAML `tokens.rounded.full: 320` is the Pill (320px / full) step: rounded avatar/icon chips. Keeping the five YAML steps as five keys, pairing them with the source XSmall / Medium / XLarge / Pill names rather than dropping those names, keeping 6px and 10px as control-local radii rather than as missing YAML steps, keeping rounded steps off the same-number spacing steps, and reading the ladder as conservative rather than as a universal radius scale, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

### Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Corporate page background, cards, headings |
| Tint (Level 1) | `#f7f4f3` / `#fafafa` background shift | Section separation without elevation |
| Hairline (Level 2) | `1px solid #eeeeee` border | Card outlines, dividers |
| Hard-3D (Level 3) | `#e26f00 0px 4px 0px 0px` solid offset | mikan for School pressable buttons only |

YAML `tokens.shadow.none` is `"none"`. YAML `tokens.shadow.hard-3d` is `"#e26f00 0px 4px 0px 0px"`. Live inspection found `box-shadow: none` across the hero, nav, headings, and most cards. Depth and grouping are communicated through flat tinted surfaces (`#f7f4f3`, `#fafafa`), thin `#eeeeee` hairlines, and deep navy (`#001c46`) contrast bands. The one deliberate exception lives on `mikan for School`: a solid-offset **3D hard-shadow** (`#e26f00 0px 4px 0px 0px`) on the primary buttons — not a soft blur but a flat, game-like, pressable affordance. This split is intentional: calm flat marketing chrome on corporate, playful tactile buttons where the product wants kids and teachers to tap. Reading that `box-shadow: none` range as a near-shadowless corporate system, reading the School offset as the one hard-offset exception rather than as a general elevation ladder, and reading the split as intentional, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, geometry, border, and shadow on the two web surfaces. The motion contract below sits outside that attribution: the sibling verification file records no transition, animation, duration, or easing observation on either surface. The durations, easing roles, signature motion, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists (`ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to mikan-computed samples. `ease-exit` matches the catalog template in `spec/omd-v0.1.md`. None of the three appear in the live-inspect comment. The curves are omitted here at the curve-value boundary; only the roles and their uses are kept. They do not restore a curve.

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, sheets, panels |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

**Motion rules**: Motion is friendly but restrained. The signature interaction is the School **3D hard-shadow button press** — on tap, the `#e26f00 0px 4px 0px 0px` offset collapses so the button visibly "presses down," a tactile reward consistent with the "できた！" philosophy. Section content fades in from below at `motion-standard / ease-enter`. Celebration moments (lesson complete) may use a brief bouncy accent, but routine UI avoids gratuitous spring. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the button-press offset becomes a static state change; the product remains fully functional.

Omitting the three unsourced curves, keeping the source use names for arriving / dismissals / two-way transitions as use claims that do not restore a curve, keeping the three duration rows as duration tokens rather than easing curves, keeping the signature 3D press, the fade-in-from-below, the brief-bouncy-accent-with-no-gratuitous-spring stance, and the reduced-motion collapse, and holding the five-kind per-component promotion gate rather than treating a single official curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings — that the Figma DesignSystem corroborates an orange-primary friendly-gothic system without disclosing in-app hex or a universal current family token; that corporate computed text is the Hiragino stack and School computed headings are Noto Sans / Noto Sans JP; that Oswald is live-used for step numerals and Lato is live-used on one School download label; that no mikan-exclusive distributed type family was verified; and that system/fallback faces in the stack are not presented as the brand face — are a derived editorial implementation inference from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

| Evidence class | Resolution |
|---|---|
| Official product-use | A public mikan DesignSystem (Figma) documented by mikan designers describes cross-platform iOS/Android JP+EN typography and "mikan Orange" as primary. It does not disclose exact in-app hex codes or a universal current family token for these two web surfaces. |
| Live computed surface-use | Corporate `mikan.link` computes the stack `-apple-system, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif` on body, hero, section labels, and nav. `mikan for School` computes section titles in `Noto Sans` weight 700 and feature sub-heads in `Noto Sans JP` weight 700. Step numeral "01" computes `Oswald` 46px weight 600. School "資料ダウンロード" computes `font-family: Lato`. |
| Official distributed asset | No mikan-exclusive distributed type family was verified. |
| Declared-only | Lato appears on a School download button label. It is not a YAML `tokens.typography.family` key and is not presented as the UI family. |
| License | The source records no font license. None is supplied here. |
| Fallback | The corporate ladder includes `-apple-system`, `"Helvetica Neue"`, Arial, `"Hiragino Sans"`, Meiryo, `sans-serif`. Those faces are recorded fallbacks. They are not the brand face. |
| Outside these captures | Type for the consumer app 英語アプリmikan, and any in-app Figma hex, remain outside these two web captures. |

### Family

- **Display (corporate):** `Hiragino Kaku Gothic ProN`. Token-set path `tokens.typography.family.display`. Full stack: `-apple-system, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`. Weight 900 at display sizes; weight 700 for nav.
- **Body / toB (School):** `Noto Sans JP` (and `Noto Sans`). Token-set path `tokens.typography.family.body`. Weight 700 for headings, weight 400 for body — the Google CJK web standard.
- **Numerals:** `Oswald`. Token-set path `tokens.typography.family.numeral`. Condensed Latin for step counters (01/02/03) at weight 500–600, in marigold. YAML `tokens.typography.step-num.weight` is `600`.
- **Misc Latin:** `Lato` appears on a School download button label.
- Do not replace unavailable or unobserved brand type with Hiragino, Noto Sans JP, Oswald, or Lato. Do not present `-apple-system`, Helvetica Neue, Arial, Hiragino Sans, Meiryo, or `sans-serif` as the brand face. Reading the corporate site as leaning on the system Hiragino stack and `mikan for School` as standardizing on Noto Sans JP — both gothic, both friendly, never serif for UI — keeping Oswald as numeral-only rather than as a body face, and treating "the Google CJK web standard" as the source's own label for Noto Sans JP rather than as a separately published family token, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

### Type roles

YAML writes numeric sizes without a `px` suffix and unitless line-heights (`1.4`, `1.5`, `1.7`) where it records them. Source §3 writes the same roles with `px` / `rem` and, for some rows, `normal`. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px (A1a). Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 Notes beside them, keeping YAML `36` / `60` / `32` / `24` / `46` / `16` / `15` off spacing and radius steps, and keeping `tokens.typography.hero.lineHeight` `1.4` off `tokens.typography.school-h2.lineHeight` `1.5` off `tokens.typography.body.lineHeight` `1.7`, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

| Role | Font | Size | Weight | Line height | Token-set use | Notes |
|---|---|---|---:|---|---|---|
| Corporate Hero | Hiragino Kaku Gothic ProN | YAML `36` / §3 `36px` (2.25rem) | 900 | `lineHeight: 1.4` | Corporate hero copy, Hiragino weight 900 | "小さな『できた』の積み重ねをずっと支える" |
| English Section Label | Hiragino Kaku Gothic ProN | YAML `60` / §3 `60px` (3.75rem) | 900 | §3 `normal` | Large English section labels (Service), brand orange | "Service" — brand orange `#ff4c0a` |
| Japanese Section Heading | Hiragino Kaku Gothic ProN | YAML `36` / §3 `36px` (2.25rem) | 900 | §3 `normal` | Japanese section headings, brand orange | "英語アプリmikan" — brand orange |
| School Section Title | Noto Sans | YAML `32` / §3 `32px` (2.00rem) | 700 | `lineHeight: 1.5` | mikan for School section titles, Noto Sans 700 | "生徒の学習が続く仕組み" |
| School Feature Sub-head | Noto Sans JP | YAML `24` / §3 `24px` (1.50rem) | 700 | §3 `normal` | School feature sub-heads, Noto Sans JP 700 | "自分に合った出題方法で学習できる！" |
| Step Numeral | Oswald | YAML `46` / §3 `46px` (2.88rem) | YAML `600` / §3 `500–600` | §3 `normal` | Step numerals 01/02/03, Oswald, marigold | "01/02/03" — marigold `#fd9b12` |
| Nav Link | Hiragino Kaku Gothic ProN | YAML `16` / §3 `16px` (1.00rem) | 700 | §3 `normal` | Top nav links, weight 700 | Top / About / Members / News |
| Body | Hiragino / Noto Sans | YAML `16` / §3 `16px` (1.00rem) | 400 | `lineHeight: 1.7` | Standard reading text | Standard reading text |
| Button Label | Hiragino Kaku Gothic ProN | YAML `15` / §3 `15px` (0.94rem) | 700 | §3 `normal` | Corporate CTA label | Corporate CTA label |

Token-set paths: `tokens.typography.hero` · `tokens.typography.section` · `tokens.typography.section-jp` · `tokens.typography.school-h2` · `tokens.typography.school-h3` · `tokens.typography.step-num` · `tokens.typography.nav` · `tokens.typography.body` · `tokens.typography.button`. `tokens.typography.hero.size` `36` is not `tokens.typography.section-jp.size` `36`. `tokens.typography.nav.size` `16` is not `tokens.typography.body.size` `16` and is not `tokens.spacing.base: 16`. `tokens.typography.button.size` `15` is not a spacing step.

Source typography principles, kept as type rules: **Heavy display, calm body** — Hiragino weight 900 carries every corporate headline; weight 400 carries every paragraph at a roomy 1.7 line-height; the weight jump is the primary hierarchy signal. **Orange is a typographic role, not just a fill** — English/Japanese section labels are set *in* brand orange (`#ff4c0a`), making color part of the type system rather than decoration. **CJK-first stack with graceful Latin fallback** — the `-apple-system → Hiragino Kaku Gothic ProN → Meiryo → sans-serif` ladder guarantees consistent gothic rendering across macOS, iOS, and Windows. **Oswald owns numerals** — condensed Latin numerals (01/02/03) give the toB step tutorials a crisp, counted cadence distinct from the rounded gothic body. **Two surfaces, two body fonts** — the corporate site leans on the system Hiragino stack; `mikan for School` standardizes on Noto Sans JP — both gothic, both friendly, never serif for UI. Treating those five as type-role rules from the source's typography section rather than as a separately published type specification is a derived editorial implementation inference from the verified surfaces; it is not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=mikan.com&sz=128`. Frontmatter records `logo.type: favicon`. That URL is a third-party favicon-proxy pointer keyed to `mikan.com`, not a mikan-hosted brand file and not `mikan.link`.
- App screenshots and illustrations sit flat (no shadow) on corporate, consistent with the flat system.
- The reviewed material establishes no other first-party mikan image, icon, or illustration asset, and none is substituted here.

Reading the Google s2 favicon URL as a catalog identity pointer keyed to `mikan.com` rather than a mikan-hosted brand file and rather than `mikan.link`, and reading "sit flat (no shadow)" as consistent with the flat system, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source's state contract, preserved with its values and copy:

| State | Treatment |
|---|---|
| **Empty (no study history)** | Warm canvas (`#f7f4f3`). Single charcoal (`#333333`) line encouraging a first session, with one orange (`#ff4c0a`) CTA to start. Friendly, never blank or scolding. |
| **Empty (no saved word lists)** | Muted Grey (`#666666`) single line noting nothing saved yet, plus a path back to study. Calm and inviting. |
| **Loading (content fetch)** | Skeleton blocks at final card dimensions on `#fafafa`, 10px radius, flat pulse consistent with the shadow-light system. |
| **Loading (button press)** | School 3D buttons depress (offset shadow collapses) on tap; previous content stays visible. |
| **Error (network)** | Inline message in charcoal with a plain, encouraging explanation and a retry — no bare "エラーが発生しました." States the next step. |
| **Error (form validation)** | Field-level message below the input describing what's valid, in a warm tone — not just "必須". |
| **Success (lesson complete)** | Bright "できた！" celebration moment; orange/marigold accent confirms the win. The reward IS the success state. |
| **Skeleton** | `#fafafa` blocks at final dimensions, 8–10px radius, flat pulse. |
| **Disabled** | Muted Grey (`#666666`) text on reduced-opacity surface; orange actions fade rather than turn grey to preserve brand read. |

These nine rows stay as recorded treatments for the states they name. They are source-stated product-level treatments; they are not computed captures of the consumer app 英語アプリmikan, and they are not a complete state-coverage claim for every control.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a `Primitive type` line only when the source YAML records that type on that component, omitting kind and a state-applicability map on the three cards, treating the Step Numeral as non-interactive, treating Corporate CTA and Top Nav as destination / grouping-select controls so loading/error/success are not-applicable on them, treating School Primary / Secondary / Download as in-place commits so loading/error/success stay applicable, treating the nine-row table as product-level recorded treatments rather than as per-control computed state tokens, treating a recorded generic focus appearance as a different evidence kind from `focus-visible`, treating YAML nav `active` as an additional recorded variant outside the seven canonical states, and the refusal to treat this as a complete state-coverage claim, are a derived editorial implementation inference from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A recorded generic `focus` appearance is a different evidence kind from `focus-visible`. The source records no `focus-visible` capture; no `focus-visible` row carries a treatment. YAML `active: "brand orange #ff4c0a text on active"` on the nav item is an additional recorded variant, outside the seven canonical states.

### Corporate CTA (Primary)

- Role: Corporate site call-to-action — "採用情報", "View More →"
- Primitive type: `button` · YAML `type: button` · Kind: interactive
- Anatomy: label
- Background: `#ff4c0a` / YAML `tokens.components.button-primary.bg`
- Text: `#ffffff` / YAML `fg`
- Radius: 6px / YAML `radius: "6px"`
- Padding: 15px 30px / YAML `padding: "15px 30px"`
- Height: 48px / YAML `height: "48px"`
- Font: 15px Hiragino weight 700. YAML font: `15px / 700`
- Token-set use: Corporate CTA — 採用情報 / View More
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured: background, text, radius, padding, height, and font |
| hover | applicable | Pointer-web destination control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; no treatment carried |
| disabled | applicable | A destination control can be unavailable; source-stated product-level disabled: orange actions fade rather than turn grey |
| loading | not-applicable | 採用情報 and View More → present destinations; this control does not commit an operation whose pending result this button would report |
| error | not-applicable | Choosing that destination is not an operation with an error result this button would report |
| success | not-applicable | Choosing that destination is not an operation with a success result |

### School Primary (3D Fill)

- Role: mikan for School primary CTA — "無料トライアルのお申し込み" (pressable 3D hard-shadow)
- Primitive type: `button` · YAML `type: button` · Kind: interactive
- Anatomy: label
- Background: `#ff7f09` / YAML `tokens.components.button-school-fill.bg`
- Text: `#ffffff` / YAML `fg`
- Radius: 8px / YAML `radius: "8px"`
- Padding: 17px 30px / YAML `padding: "17px 30px"`
- Shadow: `#e26f00 0px 4px 0px 0px` / YAML `shadow: "#e26f00 0px 4px 0px 0px"`
- Height: 61px / YAML `height: "61px"`
- Font: 16px weight 400. YAML font: `16px / 400`
- Token-set use: mikan for School primary — 無料トライアルのお申し込み, 3D hard-shadow
- Observed: default; source-stated press: offset shadow collapses on tap

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured: background, text, radius, padding, shadow, height, and font |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; no treatment carried |
| disabled | applicable | A trial-application control can be gated; source-stated product-level disabled: orange actions fade rather than turn grey |
| loading | applicable | 無料トライアルのお申し込み is an in-place commit; it can be pending on the control that starts it. Visual treatment omitted beyond the source-stated press collapse |
| error | applicable | The same operation can fail. Visual treatment omitted |
| success | applicable | A control that commits a trial application can confirm its outcome. Visual treatment omitted |

### School Secondary (3D Outline)

- Role: School secondary action — "資料請求する"
- Primitive type: `button` · YAML `type: button` · Kind: interactive
- Anatomy: label
- Background: `#ffffff` / YAML `tokens.components.button-school-outline.bg`
- Text: `#333333` / YAML `fg`
- Border: 2px solid `#ff7f09` / YAML `border: "2px solid #ff7f09"`
- Radius: 8px / YAML `radius: "8px"`
- Padding: 17px 30px / YAML `padding: "17px 30px"`
- Shadow: `#e26f00 0px 4px 0px 0px` / YAML `shadow: "#e26f00 0px 4px 0px 0px"`
- Height: 65px / YAML `height: "65px"`
- Font: 16px weight 400. YAML font: `16px / 400`
- Token-set use: School secondary — 資料請求する
- Observed: default

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured: background, text, border, radius, padding, shadow, height, and font |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; no treatment carried |
| disabled | applicable | A materials-request control can be gated; visual treatment omitted |
| loading | applicable | 資料請求する is an in-place commit; it can be pending on the control that starts it. Visual treatment omitted |
| error | applicable | The same operation can fail. Visual treatment omitted |
| success | applicable | A control that commits a materials request can confirm its outcome. Visual treatment omitted |

### Download Pill (Marigold)

- Role: School "資料ダウンロード" download button
- Primitive type: `button` · YAML `type: button` · Kind: interactive
- Anatomy: label
- Background: `#fd9b12` / YAML `tokens.components.button-download.bg`
- Text: `#ffffff` / YAML `fg`
- Radius: 4px / YAML `radius: "4px"`
- Height: 44px / YAML `height: "44px"`
- Font: 15px weight 400. YAML font: `15px / 400`. Source §3 also records `Lato` on this School download button label.
- Token-set use: School 資料ダウンロード marigold pill
- Observed: default

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured: background, text, radius, height, and font |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; no treatment carried |
| disabled | applicable | A download control can be gated; visual treatment omitted |
| loading | applicable | 資料ダウンロード is an in-place commit; it can be pending on the control that starts it. Visual treatment omitted |
| error | applicable | The same operation can fail. Visual treatment omitted |
| success | applicable | A control that commits a download can confirm its outcome. Visual treatment omitted |

### News / Notice Card

- Role: News / お知らせ list card on corporate home (flat, no shadow)
- Primitive type: `card` · YAML `type: card`
- Background: `#ffffff` / YAML `bg`
- Text: `#333333` / YAML `fg`
- Radius: 10px / YAML `radius: "10px"`
- Padding: 20px / YAML `padding: "20px"`
- Token-set use: News / お知らせ list card, flat
- Kind omitted. The source records this as a flat list card and gives it no control role or interactive-kind evidence, so it declares no Core §4.4 state-applicability map and it is not recast as a control.

### Careers Card

- Role: Job-posting card prefixed with 🍊 ("英語アプリmikanフロントエンドエンジニア")
- Primitive type: `card` · YAML `type: card`
- Background: `#ffffff` / YAML `bg`
- Text: `#333333` / YAML `fg`
- Radius: 12px / YAML `radius: "12px"`
- Padding: 20px / YAML `padding: "20px"`
- Token-set use: Careers posting card 🍊
- Kind omitted. The source records this as a posting card and gives it no control role or interactive-kind evidence, so it declares no Core §4.4 state-applicability map.

### Review / Interview Card

- Role: Note interview / student-review card linking to note.com
- Primitive type: `card` · YAML `type: card`
- Background: `#ffffff` / YAML `bg`
- Text: `#333333` / YAML `fg`
- Radius: 8px / YAML `radius: "8px"`
- Token-set use: Note interview / review card
- Kind omitted. The source names a destination (note.com) as the card's use and gives the card itself no control role, interactive-kind evidence, or state, so kind and a state-applicability map are omitted rather than invented.

### Step Numeral

- Role: Numbered step counter (01 / 02 / 03) on mikan for School feature sections
- Primitive type: `badge` · YAML `type: badge` · Kind: non-interactive
- Text: `#fd9b12` / YAML `fg`
- Font: 46px Oswald weight 600. YAML font: `46px / 600 Oswald`
- Token-set use: Step numeral 01/02/03 on School
- Kind reason: a badge displays a step numeral. The source names no action, control, or state on the badge itself, so it declares no state-applicability map.

### Top Nav

- Role: Top horizontal nav ("Top", "About", "Members", "News", "Contact")
- Primitive type: `tab` · YAML `type: tab` · Kind: interactive
- Background: `#ffffff`
- Text: `#333333` / YAML `fg`
- Font: 16px Hiragino weight 700. YAML font: `16px / 700`
- Token-set use: Top nav item (Top / About / Members)
- Active (an additional recorded variant, outside the seven canonical states): brand orange #ff4c0a text on the active item. YAML `active: "brand orange #ff4c0a text on active"`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured: background, text, and font |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable nav item; no treatment carried |
| disabled | applicable | A nav item can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab/destination nav item selects a page; the item itself does not enter a loading state |
| error | not-applicable | Nav selection is not a validation or request-failure state on the item |
| success | not-applicable | Selecting a nav item is not an action-outcome confirmation on the item |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The captured surfaces use the spacing scale recorded above. Centered single-column hero with the 36px Hiragino weight-900 headline as the anchor. News / careers cards arranged in responsive multi-column grids that wrap to single column on mobile. Feature sections alternate white (`#ffffff`) and warm canvas (`#f7f4f3`), broken by deep navy (`#001c46`) full-width bands. mikan for School uses numbered (01/02/03) feature blocks with Oswald counters anchoring each step.

Whitespace, as the source names it: **Friendly breathing room** — despite being information-rich ed-tech, the surfaces stay airy with generous vertical rhythm between sections. **Flat segmentation** — corporate sections separate by background tint (warm canvas vs white) and `#eeeeee` hairlines rather than heavy elevation. **Color as anchor** — deep navy bands and orange section labels create rhythm without arbitrary decoration.

Breakpoints the source states:

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, cards stack |
| Tablet | 640-1024px | 2-up feature/news cards, moderate padding |
| Desktop | 1024-1366px | Full layout, multi-column news/careers grids, navy bands full-width |

Touch targets the source records: Corporate CTA at 48px height with 15px 30px padding — comfortably tappable. School primary CTA at 61px height — large, unmistakable, with 3D affordance. Nav links at 16px weight 700 within a generous header.

Collapsing strategy the source states: Hero: 36px Hiragino headline scales down on mobile, weight 900 maintained. News / careers card grids: multi-column → single column stack. Navy contrast bands and warm-canvas sections maintain full-width treatment. School numbered steps (01/02/03) stack vertically on narrow viewports. Cards maintain their 8–12px radius across breakpoints. App screenshots and illustrations sit flat (no shadow) on corporate, consistent with the flat system.

The 48px corporate CTA, 61px School primary, 65px School secondary, and 44px download pill are desktop-capture measurements, not cross-viewport specifications. Reading friendly breathing room / flat segmentation / color as anchor as the layout philosophy, treating the breakpoint table as source-stated intended behavior rather than as a captured cross-viewport pass, reading those control heights as desktop-capture measurements rather than as cross-viewport specifications, and reading “sit flat (no shadow)” on corporate illustrations as consistent with the flat system, are derived editorial implementation inferences from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

<!-- design-md:section content-locales -->
## 6. Content & Locales

mikan's voice is **warm, encouraging, and achievement-celebrating** — an English-learning companion that turns a daunting task (memorizing tens of thousands of words) into a stream of small wins. The brand mission "小さな『できた』の積み重ねをずっと支える" ("supporting the steady accumulation of small *I-did-it!* moments") sets the register: motivational, kind, never scolding. Copy treats the learner as someone capable who just needs momentum, not a struggling student to be lectured. The toB `mikan for School` voice stays equally friendly while adding concrete teacher-facing benefit framing ("先生の学習管理を効率化" / "streamline teachers' study management").

| Context | Tone |
|---|---|
| Mission / hero | Warm, motivational. "小さな『できた』の積み重ねをずっと支える." Celebrates progress. |
| Service labels | Plain English/Japanese. "Service", "英語アプリmikan", "mikan for School". |
| CTAs | Direct, low-pressure. "資料ダウンロード", "無料トライアルのお申し込み", "View More →". |
| School benefit copy | Concrete and outcome-framed. "生徒の学習が続く仕組み", "先生の学習管理を効率化". |
| Careers cards | Friendly, 🍊-prefixed, role-clear. "英語アプリmikanフロントエンドエンジニア". |

**Voice samples (verbatim from live surfaces):**

- "小さな『できた』の積み重ねをずっと支える" — corporate hero (mission, achievement-framed).
- "生徒の学習が続く仕組み" — mikan for School section heading ("the system that keeps students learning").
- "できた！を実感できるmikanの学習ステップ" — School feature sub-head ("mikan's study steps where you feel *I did it!*").

**Forbidden register**: shame-based study pressure, exam-anxiety fear appeals, cold institutional tone, undefined jargon. mikan keeps the tone of an encouraging coach, not a stern teacher.

The adjectives, the register, the tone table, limiting voice samples to the three quoted public lines rather than expanding them into a consumer-app copy specification, and the forbidden-register list, are the reviewed material's own voice guidance and are a derived editorial implementation inference from the verified surfaces; they are not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

The captured surfaces are Japanese-language corporate and School marketing pages. Hiragino Kaku Gothic ProN / Noto Sans JP carry the recorded CJK type system, with Oswald on numerals and Lato on one download label. The source establishes no further locale-profile behavior, and none is supplied here.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unnamed or that this migration omitted at the smallest value boundary. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers.

- easing curve values (`ease-enter` / `ease-exit` / `ease-standard`); roles and uses stay
- hover and `focus-visible` visual treatments on the declared controls
