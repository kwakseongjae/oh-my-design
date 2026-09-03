# OpenCode AI Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

OpenCode is the **open-source AI coding agent** built by the **SST (Serverless Stack)** team — designed for terminal-first workflows. Catalog identity `name` is OpenCode AI; homepage `https://opencode.ai`. This contract covers two first-party surfaces the source inspected for tokens: the corporate home at `https://opencode.ai/` (Korean locale — 다운로드 / install snippet / Zen 알아보기) and documentation at `https://opencode.ai/docs/` (sidebar nav). YAML `tokens.source` is `prose-derived` (`tokens.extracted` 2026-06-09). The source footer also records live DOM via playwright on those same two URLs (verified 2026-05-08). The OpenCode Brand page at `https://opencode.ai/brand` is recorded as terminal-oriented logo and brand assets (`ds.type: brand`); it is not a component-token specification. `https://github.com/sst/opencode` is a named product-repository source. Every value stays attached to the writing that established it. Reading those two URLs as this contract's token surfaces, keeping the Brand page as logo-and-asset identity rather than as a component-token specification, keeping the GitHub repository as a named product source rather than as that live token surface, and keeping `prose-derived` YAML beside the footer live-DOM writing, are derived editorial implementation inferences from the verified surfaces; they are not OpenCode-authored or a separately published UI specification.

The source records a terminal-native, monospace-first aesthetic. The visual system uses a near-black background (`#201d1d`) with warm off-white text (`#fdfcfc`). Berkeley Mono is the sole typeface. The source's own atmosphere sentences, kept as recorded: this isn't a generic dark theme -- it's a warm, slightly reddish-brown dark that feels like a sophisticated terminal emulator rather than a cold IDE. The warm undertone in both the darks and lights (notice the subtle red channel in `#201d1d` -- rgb(32, 29, 29)) creates a cohesive, lived-in quality. Every element -- headings, body text, buttons, navigation -- shares this single font family, creating a unified "everything is code" philosophy. The heading at 38px bold with 1.50 line-height is generous and readable, while body text at 16px with weight 500 provides a slightly heavier-than-normal reading weight that enhances legibility on screen. The color system is deliberately minimal. The primary palette consists of just three functional tones: the warm near-black (`#201d1d`), a medium warm gray (`#9a9898`), and a bright off-white (`#fdfcfc`). Semantic colors borrow from the Apple HIG palette -- blue accent (`#007aff`), red danger (`#ff3b30`), green success (`#30d158`), orange warning (`#ff9f0a`). Borders use a subtle warm transparency (`rgba(15, 0, 0, 0.12)`). The hex values, rgb(32, 29, 29), Berkeley Mono, 38px / 1.50, 16px / 500, Apple HIG semantic hexes, and `rgba(15, 0, 0, 0.12)` are the source's own. Readings of that layer as terminal-native, as a sophisticated terminal emulator rather than a cold IDE, as lived-in, as "everything is code", as deliberately minimal, or as warm-cast rather than generic dark, are a derived editorial implementation inference from the verified surfaces; they are not OpenCode-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. OpenCode is the **open-source AI coding agent** built by **SST (Serverless Stack)** team — designed for terminal-first workflows ([opencode.ai](https://opencode.ai/), [GitHub: sst/opencode](https://github.com/sst/opencode)). Created by **Dax Raad** alongside SST co-founders **Jay (Frank's partner from University of Waterloo, Anomaly co-founder)** and **Frank Wang (CTO)**, with **Adam Elmore**. **SST origin**: Jay + Frank met **first week at University of Waterloo**, launched **Anomaly** (Jay CEO / Frank CTO) → in **2021 took Serverless Stack (SST) through Y Combinator** raising **$1M post-demo-day** with backing from founders of **PayPal, LinkedIn, Yelp, YouTube** — SST grew to **25,000 GitHub stars** and turned profitable in 2025. **OpenCode launched June 19 2024** built from day one as a **server-client architecture** to connect to any frontend (terminal, desktop, web, mobile). Reached **650,000 monthly active users in 5 months** — one of the fastest adoption curves in developer tooling. Dax Raad is also creator of **Zen** (commerce-tech tool, Tier 1 confirms "Zen 알아보기" CTA on opencode.ai homepage cross-promotes Zen). Position: serious developer tool that respects CLI heritage while integrating LLM capabilities. Those dates, names, architecture, adoption figures, the Zen cross-promo, and that closing position sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding and product-evolution narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

- Install OpenCode from the homepage hero command `curl -fsSL https://opencode.ai/install | sh`.
- Use the homepage CTAs "다운로드" and "문서 읽기".
- Read documentation on `https://opencode.ai/docs/`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its §13 figures as fictional archetypes informed by OpenCode user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. The source's own group-level wording in that header is terminal-first developers, OSS-enthusiast engineers, indie SaaS. Dropping those fictional archetypes rather than promoting them, carrying no demographic identifier list, and reading that header's group-level wording as this product's audience, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

- Berkeley Mono as the sole typeface -- monospace everywhere, no sans-serif or serif voices
- Warm near-black primary (`#201d1d`) with reddish-brown undertone, not pure black
- Off-white text (`#fdfcfc`) with warm tint, not pure white
- Minimal 4px border radius throughout -- sharp, utilitarian corners
- 8px base spacing system scaling up to 96px
- Apple HIG-inspired semantic colors (blue, red, green, orange)
- Transparent warm borders using `rgba(15, 0, 0, 0.12)`
- Email input with generous 20px padding and 6px radius -- the most generous component radius
- Single button variant: dark background, light text, tight vertical padding (4px 20px)
- Underlined links as default link style, reinforcing the text-centric identity

### Principles

These 5 items — numbered stems from the source's Principles section, plus every *UI implication* below as the source's own editorial reading — are a derived editorial implementation inference from the verified surfaces; they are not OpenCode-authored or a separately published UI specification.

1. **OSS by default.** *UI implication:* GitHub link prominent; self-hosted-first.
2. **Warm dark canvas.** Borders `rgba(15,0,0,0.12)` warm transparent. *UI implication:* preserve warmth.
3. **4px sharp radius.** *UI implication:* never round more.
4. **8px grid.** *UI implication:* preserve 8px spacing; 4px fine adjustments only.
5. **CLI install is the marketing.** *UI implication:* hero shows actual install command.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not OpenCode-authored or a separately published UI specification.

- **DO** use Berkeley Mono everywhere — headings, body, buttons, navigation, labels. The single-font system IS the brand.
- **DO** use warm dark `#201d1d` (rgb 32, 29, 29) as background — the subtle red undertone is intentional.
- **DO** use warm off-white `#fdfcfc` for foreground text — pure white is too cold against the warm dark.
- **DO** use 4px border radius universally — sharp, utilitarian corners match the developer-tool aesthetic.
- **DO** apply Apple HIG semantic colors (blue `#007aff`, red `#ff3b30`, green `#30d158`, orange `#ff9f0a`) for status — they're trustworthy signals without adding brand complexity.
- **DO** underline links by default — text-centric identity reinforces "everything is code."

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not OpenCode-authored or a separately published UI specification.

- **DON'T** introduce a sans-serif or serif voice — even for "marketing" copy. Mixing voices breaks OpenCode's terminal-native identity.
- **DON'T** use pure `#000000` or cool grays — they feel like generic dark themes, not OpenCode's lived-in terminal warmth.
- **DON'T** use rounded or pill-shaped components — that's consumer/marketing language.
- **DON'T** invent custom semantic colors — the Apple palette is the convention developers expect.
- **DON'T** use color-only link styling without underline — accessibility AND identity benefit from the underline.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.primary` `#201d1d` unmerged from `tokens.colors.foreground` `#201d1d`, keeping catalog identity `primary_color` `#000000` unmerged from `tokens.colors.primary`, keeping `tokens.colors.canvas` `#fdfcfc` unmerged from `tokens.colors.on-primary` `#fdfcfc`, keeping `tokens.colors.muted` `#9a9898` unmerged from Border Tab `#9a9898`, keeping `tokens.colors.hairline` `#646262` unmerged from Border Outline `#646262` and from YAML `button-primary` border `#646262`, keeping `tokens.colors.body` `#424245` unmerged from §2 Text Secondary `#424245` as two names of one hex, keeping `tokens.colors.surface-light` `#f1eeee` unmerged from YAML `input-email` background `#f1eeee` and unmerged from §4 Email Input background `#f8f7f7` and from the docs-sidebar `#f8f7f7`, and keeping the Apple HIG semantic hexes on their accent / error / success / warning keys rather than as a second brand palette, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

**YAML `tokens.colors` (16 keys)**

- **Primary** (`#201d1d`): `tokens.colors.primary`. OpenCode Dark. Primary background, button fills, link text. A warm near-black with subtle reddish-brown warmth -- rgb(32, 29, 29). Source footer name: **Coffee Charcoal**. Catalog identity `primary_color` is `#000000` and is not this key.
- **Foreground** (`#201d1d`): `tokens.colors.foreground`. Same hex as primary; separate key.
- **Canvas** (`#fdfcfc`): `tokens.colors.canvas`. OpenCode Light. A barely-warm off-white. Source footer name: **Soft White**. This is not `tokens.colors.on-primary`.
- **On-primary** (`#fdfcfc`): `tokens.colors.on-primary`. Primary text on dark surfaces, button text. Not `tokens.colors.canvas`.
- **Muted** (`#9a9898`): `tokens.colors.muted`. Mid Gray. Secondary text, muted links. A neutral warm gray that bridges dark and light.
- **Surface** (`#302c2c`): `tokens.colors.surface`. Dark Surface. Slightly lighter than primary dark, used for elevated surfaces and subtle differentiation.
- **Surface-light** (`#f1eeee`): `tokens.colors.surface-light`. Light Surface. Light mode surface, subtle background variation. Not the §4 Email Input `#f8f7f7` and not the docs-sidebar `#f8f7f7`.
- **Hairline** (`#646262`): `tokens.colors.hairline`. Border Gray. Stronger borders, outline rings on interactive elements.
- **Body** (`#424245`): `tokens.colors.body`. Text Secondary on light backgrounds, captions.
- **Accent** (`#007aff`): `tokens.colors.accent`. Accent Blue. Primary accent, links, interactive highlights. Apple system blue.
- **Accent-hover** (`#0056b3`): `tokens.colors.accent-hover`. Accent Blue Hover. Darker blue for hover states.
- **Accent-active** (`#004085`): `tokens.colors.accent-active`. Accent Blue Active. Deepest blue for pressed/active states.
- **Error** (`#ff3b30`): `tokens.colors.error`. Danger Red. Error states, destructive actions. Apple system red.
- **Success** (`#30d158`): `tokens.colors.success`. Success Green. Success states, positive feedback. Apple system green.
- **Warning** (`#ff9f0a`): `tokens.colors.warning`. Warning Orange. Warning states, caution signals. Apple system orange.

**Recorded body writings that are not YAML `tokens.colors.*` keys**

- **Catalog identity primary_color** (`#000000`): YAML frontmatter identity. Not `tokens.colors.primary`. The source Don't list says not to use pure `#000000`.
- **Danger Hover** (`#d70015`): Darker red for hover on danger elements.
- **Danger Active** (`#a50011`): Deepest red for pressed danger states.
- **Warning Hover** (`#cc7f08`): Darker orange for hover on warning elements.
- **Warning Active** (`#995f06`): Deepest orange for pressed warning states.
- **Text Muted** (`#6e6e73`): Muted labels, disabled text, placeholder content.
- **Text Secondary** (`#424245`): Secondary text on light backgrounds, captions. Same hex as `tokens.colors.body`; this is the §2 name.
- **Border Warm** (`rgba(15, 0, 0, 0.12)`): Primary border color, warm transparent black with red tint. Source §12 also writes `rgba(15,0,0,0.12)`. Both writings stay.
- **Border Tab** (`#9a9898`): Tab underline border, 2px solid bottom. Same hex as `tokens.colors.muted`; this is the border use.
- **Border Outline** (`#646262`): 1px solid outline border for containers. Same hex as `tokens.colors.hairline`; this is the outline use.
- **Email Input §4 background** (`#f8f7f7`): light neutral on the Email Input writing. Not `tokens.colors.surface-light`.
- **Docs sidebar active** (`#f8f7f7`): docs surface. Not the Email Input field, and not `tokens.colors.surface-light`.
- **Inverse Primary fill** (`#fdfcfc`): Soft White fill on the Zen 알아보기 CTA. Same hex as canvas / on-primary; this is the inverse-button fill on the dark hero.

The source footer **warm-cast color discipline**: no pure black/white anywhere. That discipline sentence is the source's own. Source §9 unique writing, kept here because the contrast hex is unique to that guide: The warm undertone matters: use `#201d1d` not `#000000`, use `#fdfcfc` not `#ffffff`. The reddish warmth is subtle but essential.

### Spacing

YAML `tokens.spacing` steps, recorded without a px suffix: `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48` · `section: 96`.

Source §5 writes a spacing system beside those keys: Base unit: 8px. Fine scale: 1px, 2px, 4px (sub-8px for borders and micro-adjustments). Standard scale: 8px, 12px, 16px, 20px, 24px. Extended scale: 32px, 40px, 48px, 64px, 80px, 96px. The system follows a clean 4/8px grid with consistent doubling.

`tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4` and not `tokens.rounded.md: 4` and not button radius 4px. `tokens.spacing.sm: 8` is not a type size. `tokens.spacing.md: 12` is not a radius. `tokens.spacing.base: 16` is not heading-2 / body / body-medium / body-tight size 16 and is not the 16px in YAML `button-primary` font. `tokens.spacing.lg: 24` is not the mobile heading collapse 24px. `tokens.spacing.xl: 32` is not a type size. `tokens.spacing.xxl: 48` is not a control height. `tokens.spacing.section: 96` is not the mobile collapse 96px as a replacement for this key. Fine-scale 1px / 2px and standard-scale 20px and extended-scale 40px / 64px / 80px are §5 writings; they are not YAML `tokens.spacing` keys. Button padding `4px 20px`, email padding `20px`, live-DOM Primary `8×16×8×10`, and live-DOM height 40-42px stay on those components. Keeping those YAML steps unitless beside the source's own px list, not treating a spacing step as a type size, radius, padding, or control height, and treating 20px / 40px / 64px / 80px / 1px / 2px as the §5 scale rather than as missing YAML keys, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

### Shape

YAML `tokens.rounded` (unitless steps, kept on their own path): `sm: 4` · `md: 4` · `lg: 6` · `full: 9999`.

Source §5 Border Radius Scale: Micro (4px): Default for all elements -- buttons, containers, badges. Input (6px): Form inputs get slightly more roundness. The entire system uses just two radius values, reinforcing the utilitarian aesthetic.

- `tokens.rounded.sm: 4` and `tokens.rounded.md: 4` stay two keys. Neither replaces the other.
- `tokens.rounded.lg: 6` is the input radius. YAML `input-email.radius` is `6px`. Source: the roundest element in the system.
- `tokens.rounded.full: 9999` stays the YAML full step. It is not rewritten as a pill used on a named control in this capture.

YAML `button-primary.radius` is `4px`. Source footer Header/Hero Primary radius is 4px. Inverse Primary radius is 4px.

Reading 4 / 4 / 6 / 9999 as four token-set keys, keeping sm unmerged from md, keeping 6 as the input radius rather than as a spacing step, and keeping 9999 as the recorded full step rather than as a universal radius, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

### Elevation

YAML `tokens.shadow.flat: "none"`.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Default state for most elements |
| Border Subtle (Level 1) | `1px solid rgba(15, 0, 0, 0.12)` | Section dividers, input borders, horizontal rules |
| Border Tab (Level 2) | `2px solid #9a9898` bottom only | Active tab indicator |
| Border Outline (Level 3) | `1px solid #646262` | Container outlines, elevated elements |

Source shadow philosophy, kept as recorded: OpenCode's depth system is intentionally flat. There are no box-shadows in the extracted tokens -- zero shadow values were detected. Depth is communicated exclusively through border treatments and background color shifts. This flatness is consistent with the terminal aesthetic: terminals don't have shadows, and neither does OpenCode. The three border levels (transparent warm, tab indicator, solid outline) create sufficient visual hierarchy without any elevation illusion.

Decorative depth the source records: Background color shifts between `#201d1d` and `#302c2c` create subtle surface differentiation. Transparent borders at 12% opacity provide barely-visible structure. The warm reddish tint in border colors (`rgba(15, 0, 0, 0.12)`) ties borders to the overall warm dark palette. No gradients, no blurs, no ambient effects -- pure flat terminal aesthetic. Navigation: No backdrop blur or transparency -- solid surfaces only.

Reading those samples as a flat, border-and-shift treatment for the observed elements rather than as a drop-shadow scale, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

### Motion

Durations the source records, kept as duration tokens. They are not easing curves.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |

Source §7 Transitions, kept as a separate writing from those tokens: Minimal transitions expected -- terminal-inspired interfaces favor instant state changes. Color transitions: 100-150ms for subtle state feedback. No scale, rotate, or complex transform animations.

Source §15, kept as recorded: Standard cubic-bezier; no bounce. `prefers-reduced-motion: reduce` removes hover transitions.

No cubic-bezier tuple is named. "Standard cubic-bezier" stays as that source sentence; it is not promoted as a curve token. `motion-fast` 150ms is not a replacement for the §7 range 100-150ms. Hover color sequences the source names (`#007aff` → `#0056b3` → `#004085`; `#ff3b30` → `#d70015` → `#a50011`; `#ff9f0a` → `#cc7f08` → `#995f06`) stay on those color keys; they are not per-control computed hover paints.

Omitting an unnamed curve tuple, keeping the three duration rows as duration tokens, keeping the §7 100-150ms writing beside `motion-fast` 150ms, keeping "Standard cubic-bezier; no bounce" and the reduced-motion rule, holding the five-kind per-component promotion gate rather than treating a single named duration or the phrase "Standard cubic-bezier" as sufficient, and holding that official documentation of a single curve or duration is not that gate, are derived editorial implementation inferences from the verified surfaces; they are not OpenCode-authored or a separately published UI specification.

Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior as a new component token until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating Berkeley Mono as the captured sole typeface without a loadable source URL, refusing to substitute IBM Plex Mono or a system mono stack while calling it Berkeley Mono, reading the absence of an OpenCode font-licence URL or public type specimen as unresolved official product-use rather than as a distributed-asset proof, and reading the fallback stack as fallbacks not a substitute branded family, are derived editorial implementation inferences from the verified surfaces; they are not OpenCode-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | YAML `ds` records OpenCode Brand at `https://opencode.ai/brand` as terminal-oriented logo and brand assets. No OpenCode-authored font licence or public type specimen establishing Berkeley Mono as a distributed brand font package is recorded. |
| Live computed surface-use | The source names Berkeley Mono as the sole typeface on headings, body, buttons, navigation, and labels. |
| FontFaceSet and source corroboration | The supplied capture records the family name. It does not record matching FontFaceSet source URLs for Berkeley Mono. |
| Official distributed asset | No OpenCode-hosted font-file URL is recorded. |
| Declared-only | None named beyond the Berkeley Mono family and the fallback stack. |
| License | No OpenCode font-licence URL is recorded. Do not invent one. |
| System fallback | `IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace` is the recorded fallback stack, not a substitute branded family. |

### Family

- **Universal:** `Berkeley Mono` — YAML `tokens.typography.family.sans` and YAML `tokens.typography.family.mono`. Both keys stay. There is no typographic variation between display, body, and code -- everything speaks in the same monospace register.
- **Fallbacks:** `IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`
- Do not substitute a system font or IBM Plex Mono and call it Berkeley Mono. Reading computed visible use without a matching FontFaceSet source URL as family metadata rather than as a loadable specimen URL, and keeping YAML `sans` unmerged from YAML `mono` as two keys of the same family name, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

### Type roles

YAML writes unitless line heights `1.50` / `1.00` / `2.00`. Source §3 writes the same roles with px sizes, rem notes, and a Notes column. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px (A1a). Pairing each role to the token-set path named beside it, keeping YAML `use` strings verbatim, keeping the longer §3 Notes column beside them, keeping heading-1 `38` off spacing, keeping heading-2 / body / body-medium / body-tight `16` off `tokens.spacing.base: 16`, and keeping caption `14` off a radius, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Notes |
|---|---|---:|---:|---:|---|
| Heading 1 | Berkeley Mono | 38 | 700 | 1.50 | 38px (2.38rem). YAML use: Hero headlines, page titles |
| Heading 2 | Berkeley Mono | 16 | 700 | 1.50 | 16px (1.00rem). YAML use: Section titles, bold emphasis |
| Body | Berkeley Mono | 16 | 400 | 1.50 | 16px (1.00rem). YAML use: Standard body text, paragraphs |
| Body Medium | Berkeley Mono | 16 | 500 | 1.50 | 16px (1.00rem). YAML use: Links, button text, nav items |
| Body Tight | Berkeley Mono | 16 | 500 | 1.00 | 16px (1.00rem), (tight). YAML use: Compact labels, tab items |
| Caption | Berkeley Mono | 14 | 400 | 2.00 | 14px (0.88rem), (relaxed). YAML use: Footnotes, metadata, small labels |

Token-set paths: `tokens.typography.heading-1` · `tokens.typography.heading-2` · `tokens.typography.body` · `tokens.typography.body-medium` · `tokens.typography.body-tight` · `tokens.typography.caption`.

YAML `button-primary.font` is `16px / 500`. Source §4 Primary font: 16px Berkeley Mono, weight 500, line-height 2.00 (relaxed). Those stay two writings. Body Medium 1.50 is not that button line-height 2.00. Body Tight 1.00 is the tab compact line-height. Keeping the YAML Primary font writing unmerged from the §4 Primary line-height writing, and keeping Body Medium line-height off the button line-height and Body Tight as the tab compact line-height, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

Source typography principles, kept as type rules: **One font, one voice**: Berkeley Mono is used exclusively. Hierarchy is achieved through size and weight alone. **Weight as hierarchy**: 700 for headings, 500 for interactive/medium emphasis, 400 for body text. Three weight levels create the entire hierarchy. **Generous line-height**: 1.50 as the standard line-height gives text room to breathe within the monospace grid. The relaxed 2.00 line-height on captions creates clear visual separation. **Tight for interaction**: Interactive elements (tabs, compact labels) use 1.00 line-height for dense, clickable targets. Treating those four as type-role rules from the source's typography section rather than as a separately published type specification is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

### Assets

- Catalog logo: YAML `logo.type: github`, slug `opencode-ai`.
- OpenCode Brand page: `https://opencode.ai/brand` — `ds.name` OpenCode Brand; `ds.type: brand`; `ds.description` OpenCode's terminal-oriented logo and brand assets.
- OG image: `https://opencode.ai/social-share.png`
- Image treatment the source records: Terminal/code screenshots as hero imagery. Dark terminal aesthetic with monospace type. Minimal borders, content speaks for itself.
- Treating the Brand page as an asset source but not as an interface-token specification or a font licence, and treating the GitHub slug as catalog identity rather than as a hosted mark file, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

All component observations below are scoped to the supplied `https://opencode.ai/` and `https://opencode.ai/docs/` writings plus the source's component token set. The source records these product-level state treatments. They stay as recorded treatments for the states they name; they are not a complete state-coverage claim for every control.

| State | Treatment |
|---|---|
| **Empty (no projects)** | "Open a folder" CTA |
| **Empty (no chat)** | "Try `opencode chat`" CLI snippet |
| **Loading (model)** | Per-token streaming |
| **Loading (file applying)** | Diff view with applying state |
| **Loading (long agent)** | Persistent progress |
| **Error (model)** | Specific provider error |
| **Error (apply)** | Diff stays visible + retry |
| **Success (changes)** | File pulse on changed files |
| **Success (commit)** | Multi-file diff success summary |
| **Skeleton (file tree)** | Warm dark placeholders |
| **Disabled (no model configured)** | Setup link |

Source §7 Focus, kept as recorded and not promoted as a `focus-visible` treatment: Border-based focus: increased border opacity or solid border color. No shadow-based focus rings -- consistent with the flat, no-shadow aesthetic. Keyboard focus likely uses outline or border color shift to accent blue. That "likely" sentence is the source's own hedge. Treating it as not a `focus-visible` treatment, and treating generic observed Focus as a different evidence class from `focus-visible`, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

Source §7 Hover, kept as qualitative color sequences on the accent / danger / warning keys, not as per-control computed paints: Links: color shift from default to accent blue (`#007aff`) or underline style change. Buttons: subtle background lightening or border emphasis. Accent blue provides a three-stage hover sequence: `#007aff` → `#0056b3` → `#004085` (default → hover → active). Danger red: `#ff3b30` → `#d70015` → `#a50011`. Warning orange: `#ff9f0a` → `#cc7f08` → `#995f06`. Treating those hover sequences as qualitative color-key writings rather than as per-control computed paints is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover applies wherever a pointer control exists. Loading, error, and success follow the control's product role, not its primitive kind. Where a state applies by role and no treatment was observed, the state stays applicable and only its visual treatment is omitted. Absence of a capture is not a `not-applicable` reason. Every interactive-kind verdict, every applicability verdict, and the reason given for either — including keeping each YAML `use` string as a Token-set use row, keeping YAML font / padding / radius / border / `states` / `active` byte forms beside the §4 writings, treating the Capture-record empty / loading / error / success / skeleton / disabled rows as product-level recorded treatments rather than as per-control computed state tokens, treating 다운로드 / 문서 읽기 / Zen 알아보기 as destinations, treating Tab Navigation and install-snippet tabs as tabs, and treating Email Input as a form field — is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary (Dark Fill)

- Role: Primary CTAs, main actions
- Token-set use: Primary CTAs, main actions
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled filled button
- Background: `#201d1d`. YAML bg: `#201d1d`
- Text: `#fdfcfc`. YAML fg: `#fdfcfc`
- Border: `1px solid #646262`. YAML border: `1px solid #646262`
- Radius: 4px. YAML radius: `4px`
- Padding: 4px 20px. YAML padding: `4px 20px`
- Font: 16px Berkeley Mono, weight 500, line-height 2.00 (relaxed). YAML font: `16px / 500`
- Outline: `rgb(253, 252, 252) none 0px`
- Source footer live-DOM Header/Hero Primary (다운로드 / 문서 읽기), kept as a second writing and not merged into the YAML padding: `#201d1d` Coffee Charcoal; color `#fdfcfc`; radius 4px; padding 8×16×8×10 (asymmetric — icon-spacing left); 40-42px / 16px·**500**
- Observed: default. YAML `use`: Primary CTAs, main actions

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as Primary (Dark Fill) and as Header/Hero Primary 다운로드 / 문서 읽기 |
| hover | applicable | Pointer-web button; visual treatment omitted. The source's "subtle background lightening or border emphasis" is qualitative, not a computed paint on this control. |
| focus-visible | applicable | Interactive control; visual treatment omitted. The source's "likely" outline/accent-blue focus is not this row. |
| disabled | applicable | Button control; product-level "Disabled (no model configured) / Setup link" is a Capture-record treatment, not this control's computed paint |
| loading | not-applicable | This Primary CTA presents homepage destinations (다운로드 / 문서 읽기); it does not commit an operation whose pending result this button would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this button would report. |
| success | not-applicable | Same role reason: choosing that destination is not an operation with a success result. |

### Inverse Primary (Zen cross-promo)

- Role: cross-promo CTA to Zen on the dark hero
- Kind: interactive — recorded as a CTA. Not in the token set. No YAML `tokens.components` primitive type is assigned.
- Background: `#fdfcfc` Soft White
- Text: `#201d1d` Coffee Charcoal
- Radius: 4px
- Use: "Zen 알아보기"
- Source footer writing: Inverse `#fdfcfc` Soft White 4px (Zen cross-promo)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the Zen 알아보기 Inverse Primary |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | This Inverse Primary presents a Zen destination; it does not commit an operation whose pending result this control would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this control would report. |
| success | not-applicable | Same role reason: choosing that destination is not an operation with a success result. |

### Email Input

- Role: Form fields, email capture
- Token-set use: Form fields, email capture
- Primitive type: `input` · Kind: interactive
- Anatomy: value field
- Background: YAML bg `#f1eeee`. Source §4 Email Input background `#f8f7f7` (light neutral). Both writings stay. Neither is `tokens.colors.surface-light` as a page-surface token, and neither is the docs-sidebar `#f8f7f7`.
- Text: `#201d1d`. YAML fg: `#201d1d`
- Border: `1px solid rgba(15, 0, 0, 0.12)`. YAML border: `1px solid rgba(15,0,0,0.12)`
- Padding: 20px. YAML padding: `20px`
- Radius: 6px. YAML radius: `6px`. Source: the roundest element in the system
- Font: Berkeley Mono, standard size
- Use: Form fields, email capture. Newsletter/waitlist pattern. Light background input contrasting dark page.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as Email Input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted. The source's "likely" focus is not this row. |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| loading | not-applicable | This email field presents a value; it does not commit an operation whose pending result this input would report. |
| error | applicable | Form field; no validation treatment observed on this input |
| success | not-applicable | Completing capture is not a success result this input would report. |

### Default Link

- Role: Primary text links in body content
- Token-set use: Primary text links in body content
- Primitive type: `badge` · Kind: interactive
- Color: `#201d1d`. YAML fg: `#201d1d`
- Decoration: underline 1px. YAML states: `underline 1px`
- Font-weight: 500. YAML font: `16px / 500`
- Use: Primary text links in body content

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as Default Link |
| hover | applicable | Pointer-web link; source qualitative: color shift to `#007aff` or underline style change. That sequence is not a computed paint on this control. |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A link can be unavailable; visual treatment omitted |
| loading | not-applicable | This Default Link presents a text destination; it does not commit an operation whose pending result this link would report. |
| error | not-applicable | Same role reason: following that destination is not an operation with an error result this link would report. |
| success | not-applicable | Same role reason: following that destination is not an operation with a success result. |

### Light Link

- Role: Links on dark backgrounds, navigation
- Kind: interactive — recorded as a link. Not in the token set. No YAML primitive type.
- Color: `#fdfcfc`
- Decoration: none
- Source Navigation writing: Links at 16px weight 500 with underline decoration on the dark nav (that underline writing is the nav treatment; Light Link decoration none stays this row). Keeping the nav underline writing as the Navigation treatment and Light Link decoration none as this row is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as Light Link |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A link can be unavailable; visual treatment omitted |
| loading | not-applicable | This Light Link presents a destination; it does not commit an operation whose pending result this link would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this link would report. |
| success | not-applicable | Same role reason: choosing that destination is not an operation with a success result. |

### Muted Link

- Role: Footer links, secondary navigation
- Kind: interactive — recorded as a link. Not in the token set. No YAML primitive type.
- Color: `#9a9898`
- Decoration: none
- Source §9 footer writing, kept here because it is unique to that guide: Links at 16px Berkeley Mono weight 400, color `#9a9898`. Section headers at weight 700. Border-top `1px solid rgba(15, 0, 0, 0.12)` separator.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as Muted Link |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A link can be unavailable; visual treatment omitted |
| loading | not-applicable | This Muted Link presents a destination; it does not commit an operation whose pending result this link would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this link would report. |
| success | not-applicable | Same role reason: choosing that destination is not an operation with a success result. |

### Tab Navigation

- Role: Section switching, content filtering
- Token-set use: Section switching, content filtering
- Primitive type: `tab` · Kind: interactive
- Border-bottom: `2px solid #9a9898` (active tab indicator). YAML active: `2px bottom border #9a9898`
- Font: 16px, weight 500, line-height 1.00. YAML font: `16px / 500`
- Use: Section switching, content filtering

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as Tab Navigation |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | This tab selects a section; it does not commit an operation whose pending result this tab would report. |
| error | not-applicable | Same role reason: switching a tab is not an operation with an error result this tab would report. |
| success | not-applicable | Same role reason: switching a tab is not an operation with a success result. |

### Install-snippet tabs

- Role: install-method tab strip on the homepage hero
- Kind: interactive — source footer records install-snippet text-only tabs, color-state distinction. Not in the token set. No YAML primitive type.
- Source footer writing: install-snippet text-only tabs color-state
- Recorded method labels, kept as copy not as a YAML type: `curl` / `npm` / `bun` / `brew` / `paru`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as install-snippet tabs |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | This install-snippet tab selects an install method; it does not commit an operation whose pending result this tab would report. |
| error | not-applicable | Same role reason: switching an install method is not an operation with an error result this tab would report. |
| success | not-applicable | Same role reason: switching an install method is not an operation with a success result. |

### Docs sidebar active

- Role: active doc-sidebar item
- Kind: interactive — recorded as sidebar nav. Not in the token set. No YAML primitive type.
- Background: `#f8f7f7`
- Text: `#201d1d` Coffee Charcoal
- Source footer writing: doc sidebar `#f8f7f7` active
- Recorded label from the sibling, kept as copy: "소개"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the active docs sidebar item |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav item can be unavailable; visual treatment omitted |
| loading | not-applicable | This sidebar item presents a documentation destination; it does not commit an operation whose pending result this item would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this item would report. |
| success | not-applicable | Same role reason: choosing that destination is not an operation with a success result. |

### Navigation (chrome)

Clean horizontal layout with Berkeley Mono throughout. Brand logotype left-aligned in monospace. Links at 16px weight 500 with underline decoration. Dark background matching page background. No backdrop blur or transparency -- solid surfaces only. Source §9 unique writing: sticky `#201d1d` background. Not in the token set. No YAML primitive type. No state-applicability map: this block is chrome around the Light Link / Default Link rows.

### Terminal Hero

Full-width dark terminal window as hero element. ASCII art / stylized logo within terminal frame. Monospace command examples with syntax highlighting. Reinforces the CLI-first identity of the product. Not in the token set. No YAML primitive type. No state-applicability map: this is hero chrome, not a commit control.

### Feature List

Bulleted feature items with Berkeley Mono text. Weight 500 for feature names, 400 for descriptions. Tight vertical spacing between items. No cards or borders -- pure text layout. Source §9 unique writing: Feature name at 16px Berkeley Mono weight 700, color `#fdfcfc`. Description at 16px weight 400, color `#9a9898`. No cards, no borders -- pure text with 16px vertical gap between items. Not in the token set. No YAML primitive type. No state-applicability map: this is a text list, not a commit control.

### Email Capture (pattern)

Light background input (`#f8f7f7`) contrasting dark page. Generous 20px padding for comfortable typing. 6px radius -- the roundest element in the system. Newsletter/waitlist pattern. Adjacent dark button uses the Primary (Dark Fill) values (`#201d1d` bg, `#fdfcfc` text, 4px radius, 4px 20px padding). Berkeley Mono throughout. The input is the Email Input row; the adjacent button is the Primary (Dark Fill) row. Treating Navigation, Terminal Hero, and Feature List as chrome or a text list with no state-applicability map, and mapping Email Capture onto the Email Input and Primary (Dark Fill) rows rather than as a third primitive, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Source spacing, grid, and whitespace writings, kept as recorded. Reading those measurements as local captured geometry rather than as a complete grid declaration, keeping YAML `tokens.spacing` keys unmerged from the §5 1px / 2px / 20px / 40px / 64px / 80px writings, and refusing to treat 800-900px as an exact width token, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

### Grid & Container

- Max content width: approximately 800-900px (narrow, reading-optimized)
- Single-column layout as the primary pattern
- Centered content with generous horizontal margins
- Hero section: full-width dark terminal element
- Feature sections: single-column text blocks
- Footer: multi-column link grid

### Whitespace Philosophy

- **Monospace rhythm**: The fixed-width nature of Berkeley Mono creates a natural vertical grid. Line-heights of 1.50 and 2.00 maintain consistent rhythm.
- **Narrow and focused**: Content is constrained to a narrow column, creating generous side margins that focus attention on the text.
- **Sections through spacing**: No decorative dividers. Sections are separated by generous vertical spacing (48-96px) rather than borders or background changes.

### Responsive behavior

The source records this breakpoint table. It is the source's responsive writing, not a live computed breakpoint capture. Reading it as a recorded source table rather than as a cross-viewport specification proven by a mobile capture, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, reduced padding, heading scales down |
| Tablet | 640-1024px | Content width expands, slight padding increase |
| Desktop | >1024px | Full content width (~800-900px centered), maximum whitespace |

Touch targets the source records: Buttons with 4px 20px padding provide adequate horizontal touch area. Input fields with 20px padding ensure comfortable mobile typing. Tab items at 16px with tight line-height may need mobile adaptation.

Collapsing strategy the source records: Hero heading: 38px → 28px → 24px on smaller screens. Navigation: horizontal links → hamburger/drawer on mobile. Feature lists: maintain single-column, reduce horizontal padding. Terminal hero: maintain full-width, reduce internal padding. Footer columns: multi-column → stacked single column. Section spacing: 96px → 64px → 48px on mobile.

Image behavior the source records: Terminal screenshots maintain aspect ratio and border treatment. Full-width elements scale proportionally. Monospace type maintains readability at all sizes due to fixed-width nature.

<!-- design-md:section content-locales -->
## 6. Content & Locales

OpenCode's voice is **OSS-AI-coding-direct and CLI-fluent.** "오픈 소스 AI 코딩 에이전트" — open-source AI coding agent positioning. Warm dark canvas + 4px sharp radius signal "premium developer tool with OSS heritage." Characterizing that voice as OSS-AI-coding-direct and CLI-fluent implementation context rather than as a separately published copy manual, requiring the quoted strings below byte-exact, and treating English beside a Korean string as a reading aid rather than a replacement, is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| CTA | Verb. "다운로드", "문서 읽기", "Try it" |
| Marketing | CLI-first. `curl -fsSL https://opencode.ai/install | sh` as hero |
| Documentation | Code-block-heavy, terminal-output-rich |
| Error | Specific. "Model not configured. Run `opencode setup`." |

**Voice samples**

- Marketing CTAs: *"다운로드"* / *"문서 읽기"*
- Hero install snippet: *"curl -fsSL https://opencode.ai/install | sh"*
- Inverse cross-promo: *"Zen 알아보기"*
- Docs sidebar active: *"소개"*
- Install-method tabs: *"curl / npm / bun / brew / paru"*
- Empty (no projects): *"Open a folder"*
- Empty (no chat): *"Try `opencode chat`"*

**Forbidden phrases.** "Revolutionary AI coding". Generic Cursor-comparison framing.

Reproduce those quoted strings byte-exact rather than translating or re-casing them.

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

These decisions are unnamed values, not permissions to invent. Treating the list as a catalog of source-unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification.

- exact cubic-bezier tuples (the source writes "Standard cubic-bezier; no bounce" without a curve tuple)
- `focus-visible` visual treatment (the source's "Keyboard focus likely uses outline or border color shift to accent blue" is a different evidence class)
- per-control computed hover paints (qualitative hover and the three-stage accent / danger / warning hex sequences stay on those color keys)
- pressed visual treatments as per-control computed paints
- FontFaceSet / hosted source URL for Berkeley Mono
- a first-party hosted font-licence URL
- live computed confirmation of the source's <640px / 640-1024px / >1024px breakpoint table
- a motion value promoted as a new component token before that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed
