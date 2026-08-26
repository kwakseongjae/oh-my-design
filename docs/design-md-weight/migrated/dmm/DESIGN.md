# DMM.com (Turtle) Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

DMM.com is one of Japan's sprawling digital platforms — video, games, e-books, English conversation, FX trading, 3D printing, even an aquarium — over sixty services under one roof. This contract covers two live first-party surfaces: the public **Turtle** Design System portal at `turtle.dmm.com` (including its resources page) and the consumer platform at `dmm.com`. It does not treat either surface as a proxy for the individual service products behind them.

Turtle is the design system DMM's Platform Development Division built to bring coherence to that breadth, and in 2025 the division made it public. Its stated motivation is concrete: inconsistent UX across dozens of services creates cognitive load for users; teams redundantly rebuild the same components; and research/learning costs stay high. Turtle answers with packaged design tokens, a React component library, page templates, a Figma community library, Storybook, and an AI bridge called **Turtle MCP** that can build UI from Figma data in minutes. As of August 2025 it runs in over half of the division's front-end products. The system describes itself as "not a completed form" but "a system that changes appropriately in response to changing needs and environments" — the **E (Evolve)** of its own ABCDE principles. DMM states that it released the portal, the Figma library, and its knowledge openly to "contribute to the design-system community and share knowledge with others facing the same challenges."

The defining measured choice is that Turtle is **dark-first**: the portal canvas is a deep charcoal (`#323232`) with raised cards one step lighter (`#252525`), and the introduction doc states that dark-mode support is completed with a mode switch alone. On that charcoal field the text runs as a three-step grey ladder — `#ffffff` for primary headings, `#e3e3e3` for section heads, `#b9b9b9` for body — so hierarchy is carried by luminance. The accent palette is restrained: a periwinkle blue (`#94bcff`) is the link and action color, joined by a spring green (`#98e467`) and a soft pink (`#f7b6e7`) used sparingly. Documentation cards sit at a 12px radius and pill controls go fully round (`9999px`). Live inspection found no drop shadows; separation comes from the surface step (`#323232` → `#252525`).

The consumer platform at `dmm.com` is a second, older register — a dense white directory whose brand color is a vivid **crimson** (`#b42f5a`, deepening to `#8f0539`) alongside a warm promotional **amber** (`#ffc847`). It is information-dense and link-heavy (classic browser blue `#0000ee` and a refined `#005fc0`), built for breadth across its service catalog.

The characterizing wording in the two paragraphs above — calling the dark-first choice "defining", the accent palette "restrained", hierarchy "carried by" luminance, and the consumer directory "built for" breadth — and the reading that follows are a derived editorial implementation inference from the verified surfaces; they are not DMM-authored or a separately published brand statement. The measured values they sit on (`#323232`, `#252525`, the three-step text ladder, `#94bcff`, 12px, `9999px`, `box-shadow: none`, `#b42f5a`, `#8f0539`, `#ffc847`, `#0000ee`, `#005fc0`) stand on their own. The two registers are read here as one tension — a calm, engineered, dark-first design system being rolled across a loud, maximal crimson consumer empire, with dark mode treated as a peer rather than an afterthought, and Turtle read as the future the company is migrating toward.

The founding history that follows rests on widely documented public corporate profiles plus the live portal tagline, rather than on a quoted first-party DMM press statement in this pass. DMM.com traces to **1999**, when **亀山敬司 (Keiji Kameyama)** founded what was then 株式会社デジタルメディアマート — the seed of today's 合同会社DMM.com, headquartered in Roppongi, Tokyo. He started at nineteen as a street-stall accessory vendor, ran cafes and a video-rental business, and built that into video distribution, online games, e-books, FX trading, English conversation, 3D printing, solar, animation, a football club and an aquarium — more than sixty services in all. The DMM Group tagline that appears on the Turtle portal, "発見と熱中を、創造する。" ("Create discovery and enthusiasm"), is the throughline the source names across that sprawl.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Reach a Turtle documentation area from the portal's large navigation cards: "デザイントークン", "コンポーネント", "リソース", "AI-friendly デザインガイドライン".
- Read a Turtle documentation page from the left sidebar: "はじめに", "プロダクトビジョン", "デザイン原則", "システム全体像".
- Reach a service from the dense multi-column directory on the consumer `dmm.com` platform, which exposes more than sixty services.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source itself labels its persona section fictional archetypes, so the four named biographies are dropped rather than relocated. What remains are the group-level segments the source describes as publicly observable: front-end engineers and designers across DMM's Platform Development Division, and the external design-system community DMM opened the portal to.

### Distinctive traits

These seven items copy the source's Key Characteristics list. Their values are the measured tokens; the naming and grouping of them as traits ("dark-first by design", "luminance hierarchy", "shadowless depth", "Japanese-first stack") is a derived editorial implementation inference from the verified surfaces; it is not DMM-authored or a separately published UI specification. The one exception is the mode-switch statement, which the Turtle introduction doc publishes directly.

- Dark-first by design — Turtle canvas `#323232`, raised card `#252525`, engineered so dark mode is reached by a mode switch
- Luminance hierarchy — white `#ffffff` → soft `#e3e3e3` → muted `#b9b9b9` text ladder on charcoal
- Periwinkle blue (`#94bcff`) as the link/action accent; green (`#98e467`) + pink (`#f7b6e7`) as sparing highlights
- Shadowless depth — separation via the `#323232`/`#252525` surface step rather than drop shadows
- Pill controls (`9999px`) + 12px documentation cards
- Legacy consumer brand-crimson (`#b42f5a` → `#8f0539`) + promo amber (`#ffc847`) on the white `dmm.com` platform
- Japanese-first stack — `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`

### Principles

Turtle publishes its design principles as the **ABCDE** framework, each posed as a question the team asks of any design decision. The five Japanese questions below are verbatim from the Turtle design-principle doc.

1. **A — Achieve Goals.** "エンドユーザーが効率的に目的を達成できるか？" (Can end users efficiently accomplish their objectives?)
2. **B — Bring out Abilities.** "クリエイターの能力を最大限に引き出せているか？" (Does it maximize creator capabilities?)
3. **C — Consistency.** "一貫性を担保できているか？" (Is consistency maintained?)
4. **D — Design Intent.** "設計の意図は明確になっているか？" (Are design decisions clearly documented?)
5. **E — Evolve.** "変化を恐れず進化を選択できているか？" (Can we choose to evolve without fearing change?)

The five UI implications below are a derived editorial implementation inference from the verified surfaces and those published questions; they are not DMM-authored or a separately published UI specification.

- **A** — the shortest path to the user's goal wins over decoration; the dense consumer directory and the calm doc portal both optimize for "find it and act."
- **B** — ship tokens, components, templates, and Turtle MCP so designers and engineers spend effort on product value rather than re-building primitives.
- **C** — one token set drives every service; the luminance ladder and the accent blue are reused rather than re-invented per team.
- **D** — the public portal exists to make rationale legible: tokens, principles, and getting-started docs are first-class.
- **E** — the system is candidly "β" and "not a completed form"; treat versions and "(準備中)" states as honest, expected, and shippable.

### Application rules

The following eight items copy the source's Do list. Their values are the observed tokens; the prescriptions built on those values, and the causal wording inside them ("designed so dark mode is one mode switch", "the active/action signal"), are a derived editorial implementation inference from the verified surfaces; they are not DMM-authored or a separately published UI specification.

- Build dark-first — canvas `#323232`, raised surface `#252525`, designed so dark mode is one mode switch
- Carry hierarchy with the luminance ladder: `#ffffff` → `#e3e3e3` → `#b9b9b9` on dark
- Reserve the periwinkle blue (`#94bcff`) for links and the active/action signal
- Separate panels with the surface step (`#323232` → `#252525`) rather than drop shadows
- Use full-round pills (`9999px`) for buttons and 12px radius for documentation cards
- Use the spring green (`#98e467`) and soft pink (`#f7b6e7`) only as sparing accents
- Keep typography on the system Hiragino/Helvetica stack
- On the consumer platform, use the brand crimson (`#b42f5a`) and amber (`#ffc847`) for promo and branding

### Avoid

The following seven items copy the source's Don't list. The judgement wording inside them ("so it survives the dark/light switch", "it is the link/action signal", "weight is the hierarchy", "the system is deliberately font-pragmatic", "it is the base theme rather than a variant") is a derived editorial implementation inference from the verified surfaces; it is not DMM-authored or a separately published UI specification. The base-theme item does rest on a published statement — the introduction doc's mode-switch sentence — while its framing as a prohibition does not.

- Do not bake drop shadows for elevation — Turtle separates by luminance so it survives the dark/light switch
- Do not spread the accent blue across decorative surfaces — it is the link/action signal
- Do not use pure-grey guesses for text — stay on the `#ffffff` / `#e3e3e3` / `#b9b9b9` ladder
- Do not mix the dark Turtle palette and the light consumer crimson on one surface — they are two registers
- Do not use heavy weights below 600 for headings or 400 for body — weight is the hierarchy
- Do not introduce a custom display typeface — the system is deliberately font-pragmatic
- Do not treat dark mode as a bolt-on — it is the base theme rather than a variant

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

**Turtle accent (primary)**

- **Periwinkle Blue** (`#94bcff`): the Turtle link and action color — in-page doc links, active sidebar items, interactive accents on the dark canvas. The system's primary signal color.
- **Spring Green** (`#98e467`): positive / success accent and decorative highlight on dark surfaces.
- **Soft Pink** (`#f7b6e7`): secondary decorative / status accent, used sparingly alongside the green.

**Dark surfaces (Turtle)**

- **Canvas Charcoal** (`#323232`): the Turtle portal body background — the base of the dark-first system.
- **Raised Surface** (`#252525`): one step lighter than canvas; documentation and navigation cards and panels.

**Text ladder (on dark)**

- **On-Dark White** (`#ffffff`): primary headings, strong labels on the dark canvas.
- **On-Dark Soft** (`#e3e3e3`): section headings and card text.
- **On-Dark Muted** (`#b9b9b9`): body copy, descriptions, lowest-emphasis text on dark.

**Consumer brand (`dmm.com` platform)**

- **Brand Crimson** (`#b42f5a`): the DMM consumer platform brand color — section tags, promotional surfaces.
- **Crimson Deep** (`#8f0539`): darker crimson for hover/emphasis on brand surfaces.
- **Crimson Bright** (`#dc0000`): vivid red used for alerts and high-urgency promo labels.
- **Amber** (`#ffc847`): warm promotional yellow for campaign chips and highlight banners.
- **Amber Soft** (`#ffea80`): lighter amber for tinted promotional backgrounds.

**Light neutrals and links (`dmm.com` platform)**

- **Light Canvas** (`#ffffff`): the white consumer platform background.
- **Light Surface** (`#f2f4f7`): cool-grey tinted panels and content blocks.
- **Light Hairline** (`#e9ebef`): thin borders and dividers on the white platform.
- **Ink** (`#242424`): darkest near-black text on the light platform.
- **Ink Soft** (`#333333`): standard body text on white.
- **Ink Muted** (`#6e6e6e`): secondary / metadata text on white.
- **Link Blue** (`#005fc0`): the refined navigation link blue on the consumer platform, alongside the classic browser blue `#0000ee`.

### Spacing

Base unit 8px (nav padding 8px 12px; card padding lands at 24px 56px). Scale: 4px, 8px, 12px, 16px, 24px, 32px, 56px. Turtle navigation cards use an asymmetric 24px vertical / 56px horizontal pad.

### Shape

- Square: 0px — top-nav triggers and the consumer crimson tag
- Small: 8px — inner elements, small controls
- Medium: 12px — documentation and navigation cards
- Full: 9999px — pill buttons and promo chips

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page canvas (`#323232`), inline text |
| Surface step (Level 1) | `#252525` raised background on `#323232` | Cards and panels separated by luminance |
| Light hairline (Level 2) | `1px solid #e9ebef` | `dmm.com` white-platform dividers and card outlines |

Live inspection recorded `box-shadow: none` across the portal hero, nav, headings, and the large `#252525` cards. Elevation is expressed as a surface luminance step: a raised card is one shade lighter than the canvas. When emphasis is needed the portal reaches for the accent blue (`#94bcff`) rather than for elevation. The consumer `dmm.com` platform, a light system, uses thin `#e9ebef` hairlines.

Two readings in the paragraph above are a derived editorial implementation inference from the verified surfaces; they are not DMM-authored or a separately published elevation doctrine. First, that the portal reaches for the accent blue rather than for elevation when emphasis is needed — the observation is that emphasis on the captured surfaces appears in `#94bcff` and that no shadow was measured. Second, that the luminance step is the correct discipline for a one-switch dark-mode system, on the ground that a token-driven step inverts cleanly between themes where a baked drop shadow does not.

### Motion

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, button/pill press |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sidebar drawer |
| `motion-slow` | 320ms | Page-level transitions, theme switch crossfade |

Named easing roles: `ease-enter` (arriving — cards, drawers, dropdowns), `ease-exit` (dismissals), `ease-standard` (two-way transitions).

The exact curve value for each of those three roles is omitted. The source record carries one `cubic-bezier` per role with no observation behind any of them, and one of the three is byte-identical to a generic non-brand implementation default rather than to a measured DMM value. Promoting any curve into this contract requires per-component computed observation of all five motion evidence kinds — transition properties, animation name, duration, easing, and reduced-motion behavior — recorded on the component that uses it. A single confirmed curve elsewhere does not satisfy that gate.

Motion rules carried from the source: motion is functional and quiet; the signature moment is the dark/light theme switch, which crossfades the canvas and surface tokens at `motion-slow`, staying clean because separation is luminance-based and shadowless; cards and the documentation sidebar reveal with `motion-standard` / `ease-enter`; pill controls respond to press with a subtle opacity/scale shift; no bounce or spring. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the theme switch becomes an immediate swap, and the portal remains fully functional.

The duration values, the easing role assignments, and the motion rules in the two paragraphs above are a derived editorial implementation inference from the verified static surfaces and Turtle's published posture; they are not DMM-authored or a separately published motion specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use (Turtle portal) | The portal computes its text on `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`. |
| Live computed surface-use (consumer platform) | `dmm.com` computes `"Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", HiraginoSans-W3, メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif`. |
| Brand-owned typeface | No custom brand typeface is declared. Turtle leans on system-available Japanese sans faces. |
| Official distributed asset | This pass establishes no DMM- or Turtle-distributed type family. |

Both stacks front a Latin face (Helvetica Neue, or Hiragino Kaku Gothic Pro on the legacy platform) ahead of the Japanese Hiragino faces. Reading the absence of a proprietary face as pragmatism consistent with Turtle's "Do more with less" tooling motto is a derived editorial implementation inference from the verified surfaces; it is not DMM-authored or a separately published typography rationale.

### Type roles

| Role | Size | Weight | Line height | Color | Notes |
|---|---:|---:|---:|---|---|
| Portal Title (H1) | 32px (2.00rem) | 700 | 1.75 (56px) | `#e3e3e3` | Turtle portal page heading |
| Hero Title (H1) | 32px (2.03rem) | 700 | 1.31 | `#ffffff` | Landing hero "Turtle Design System" |
| Section Head (H2) | 25px (1.60rem) | 600 | 1.3 | `#e3e3e3` | Section titles ("発見と熱中を、創造する。") |
| Card Head (H2) | 24px (1.50rem) | 700 | 1.75 (42px) | `#e3e3e3` | Resource/product card headings |
| Brand Title (H1) | 28px (1.80rem) | 600 | 1.3 | `#ffffff` | Top portal brand "Turtle Design System ポータル β" |
| Body | 16px (1.00rem) | 400 | 1.3 | `#b9b9b9` | Standard reading text on dark |
| Body Tight | 14px (0.88rem) | 400 | 1.3 | `#ffffff` | Sidebar nav items |
| Nav Label | 12.6px (0.79rem) | 600–700 | 1.3 | `#ffffff` | Top-nav button labels |
| Legacy Link | 12.5px (0.78rem) | 400 | normal | `#005fc0` | `dmm.com` directory links |

### Type rules

- Headings sit at 600–700 and body at 400; with a single accent blue, weight and luminance carry the hierarchy.
- The `#ffffff` → `#e3e3e3` → `#b9b9b9` ladder is the on-dark text scale — three deliberate steps.
- No proprietary face is introduced; the system stack stays as measured.
- Line heights stay generous (1.3 to 1.75) so dense kanji and kana set comfortably.

Those four rules are a derived editorial implementation inference from the measured type roles; they are not DMM-authored or a separately published typography specification.

### Assets

- The Turtle resources page publishes a Figma community library and GitHub / Storybook entries, with "(準備中)" labels where an item is under preparation.
- Turtle MCP is the published AI bridge that builds UI from Figma data.
- Portal illustrations and product thumbnails carry no shadow. Reading that as consistency with the shadowless dark system is a derived editorial implementation inference from the verified surfaces; it is not DMM-authored or a separately published asset rule.

<!-- design-md:section components-states -->
## 4. Components & States

### State contract record

The state contract below is carried over in full from the source record. It is a derived editorial implementation inference built from the verified tokens and the observed portal patterns; it is not DMM-authored or a separately published state specification.

| State | Treatment |
|---|---|
| **Empty (no results)** | Dark `#323232` canvas. A single muted (`#b9b9b9`) line explaining there's nothing yet, with one periwinkle (`#94bcff`) link to adjust scope. No illustration clutter. |
| **Empty (section under construction)** | The honest Turtle pattern: a "(準備中)" label in muted grey, signaling the feature is in preparation rather than hiding it. |
| **Loading (content fetch)** | Skeleton blocks one surface-step lighter (`#252525`) on the `#323232` canvas, at final card dimensions, 12px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place)** | Inline progress in the accent blue (`#94bcff`); previous content stays visible. |
| **Error (load failed)** | Inline message in soft white (`#e3e3e3`) with a plain-language explanation and a retry link in `#94bcff`. States what to do next, never a bare "エラー". |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "必須". |
| **Success (saved / applied)** | Brief inline confirmation; the spring green (`#98e467`) carries the positive signal. No celebratory emoji. |
| **Skeleton** | `#252525` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Reduced-opacity surface with muted (`#b9b9b9`) text; accent-blue actions fade rather than turn grey, preserving the theme read. |
| **Dark/Light switch** | The defining state: a single mode switch inverts the token set — `#323232`/`#252525` luminance steps and the accent palette remap cleanly, with no shadow baking to break the transition. |

Declared interactive components close Core §4.4 applicability by control meaning rather than by capture completeness. `default` and `focus-visible` apply to every one of them, and their visual treatments are omitted where the source carries none. Absence of an observation is never a `not-applicable` reason here.

`loading`, `error`, and `success` follow each control's product role. The Turtle portal controls declared below are navigation controls with named destinations: they route, and the fetch, the form, and the save/apply mutation that the contract above describes belong to the receiving content surface. Those three states are therefore `not-applicable` for them by role, with two exceptions recorded per component — the Resource / Product Card, whose loading skeleton the contract specifies at that card's own dimensions, and the Portal Pill, whose source use mixes one named navigation label with generic "primary CTAs" so that its target mapping stays unresolved and the three fields stay omitted rather than closed. Those role determinations are this document's reading of each component's own `use` field in the source; DMM publishes no state-applicability map, so the reading is a derived editorial implementation inference from the verified surfaces and is not DMM-authored or a separately published state-applicability specification. This is not a complete state-coverage claim.

### Resource / Product Card

- Role: large navigation card on the dark portal canvas
- Type: card
- Kind: interactive
- Anatomy: heading on a raised surface
- Background: `#252525`
- Text: `#e3e3e3`
- Radius: 12px
- Padding: 24px 56px
- Font: 20px / 600
- Height: 100px
- Use: "デザイントークン", "コンポーネント", "リソース", "AI-friendly デザインガイドライン"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Measured on the Turtle portal |
| hover | applicable | Pointer-web navigation card; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The portal marks an unavailable destination "(準備中)"; the contract above records the disabled treatment |
| loading | applicable | The contract's content-fetch skeleton is specified at this card's final dimensions and 12px radius |
| error | not-applicable | The card routes to a named documentation area; a failed load is reported by the receiving content surface |
| success | not-applicable | The card performs navigation, not a save/apply mutation |

### Portal Pill (About / CTA)

- Role: full-round pill on the dark portal
- Type: button
- Kind: interactive
- Anatomy: label
- Background: transparent on the dark canvas
- Text: `#ffffff`
- Radius: 9999px
- Padding: 12px 16px
- Font: 16px / 600
- Height: 40px
- Use: "Turtle について" and primary CTAs on the dark portal

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Measured on the dark portal |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The contract above records a disabled treatment in which accent actions fade |

`loading`, `error`, and `success` applicability is omitted for this control. The source use mixes one named navigation label with generic "primary CTAs", so the target mapping is unresolved and those three fields stay open at that boundary.

### Top-Nav Trigger

- Role: top navigation menu trigger
- Type: button
- Kind: interactive
- Anatomy: label
- Text: `#ffffff`
- Radius: 0px
- Padding: 8px 12px
- Font: 12.6px / 600
- Height: 35px
- Use: "Turtle について", "プロダクト", "ガイドライン", "導入の手引き"
- Active variant: text `#e3e3e3` at weight 700 marks the current section ("トップ")

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Measured on the portal top nav |
| hover | applicable | Pointer-web menu trigger; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The contract above records a disabled treatment |
| loading | not-applicable | The trigger opens a menu; it does not own the fetch whose progress the contract describes |
| error | not-applicable | Not a form field and not the owner of a content fetch |
| success | not-applicable | Opens navigation, not a save/apply mutation |

### Sidebar Nav Item

- Role: left documentation sidebar item
- Type: tab
- Kind: interactive
- Anatomy: label
- Text: `#ffffff`
- Font: 14px / 400
- Active variant: `#94bcff` text on the active section
- Use: "はじめに", "プロダクトビジョン", "デザイン原則", "システム全体像"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Measured in the portal sidebar |
| hover | applicable | Pointer-web sidebar item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A documentation section can be unavailable; the contract above records the disabled treatment |
| loading | not-applicable | The item switches documentation sections; the content surface owns the fetch |
| error | not-applicable | Not a form field and not the owner of a content fetch |
| success | not-applicable | Switches sections, not a save/apply mutation |

### In-Page Doc Link

- Role: documentation cross-link inside the body
- Type: listItem
- Kind: interactive
- Anatomy: inline text link
- Text: `#94bcff`
- Font: 16px / 400
- Use: "デザイントークン", "コンポーネント", "リソース", and the Figma community URL

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Measured in portal body copy |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The contract above records that accent-blue actions fade rather than turn grey |
| loading | not-applicable | The link routes; the destination surface owns the fetch |
| error | not-applicable | Not a form field and not the owner of a content fetch |
| success | not-applicable | Routes, rather than performing a save/apply mutation |

### Legacy Platform Link

- Role: consumer directory navigation link on `dmm.com`
- Kind: interactive
- Anatomy: inline text link
- Text: `#005fc0`
- Font: 12.5px / 400

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Measured on the consumer platform |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A directory entry can be unavailable; visual treatment omitted |
| loading | not-applicable | The link routes to a service; the destination owns the fetch |
| error | not-applicable | Not a form field and not the owner of a content fetch |
| success | not-applicable | Routes, rather than performing a save/apply mutation |

### Brand Crimson Tag

- Role: consumer `dmm.com` brand-crimson section tag / category label
- Type: badge
- Kind: non-interactive — the source establishes it as a badge that labels a section or category, with no control role
- Background: `#b42f5a`
- Text: `#ffffff`
- Radius: 0px
- Font: 12px / 400

### Promo Amber Chip

- Role: `dmm.com` campaign / promotional pill on the white platform
- Type: badge
- Kind: non-interactive — the source establishes it as a badge carrying campaign wording, with no control role
- Background: `#ffc847`
- Text: `#242424`
- Radius: 9999px
- Font: 12px / 700

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Grid and container

- Turtle portal: a left documentation sidebar plus a centered content column, with large 100px-tall navigation cards laid out in a responsive grid.
- Consumer `dmm.com`: a dense multi-column directory grid. Reading that density as built for breadth across the service catalog is a derived editorial implementation inference from the verified surfaces; it is not DMM-authored or a separately published layout specification.
- The hero block centers the "Turtle Design System" title with the "発見と熱中を、創造する。" tagline beneath.

### Density

What was measured: the portal's card padding is 24px 56px and panels separate by the `#323232` → `#252525` luminance step rather than by lines or shadows, while the `dmm.com` platform runs a high link density in a multi-column directory.

The rest of this subsection is a derived editorial implementation inference from the verified surfaces; it is not DMM-authored or a separately published layout doctrine. The portal is read as spacious and reading-oriented with a clear vertical rhythm; the consumer platform is read as the opposite register, its density explained by the job of exposing an enormous service catalog; and naming one register "calm" and the other "loud" is the same editorial reading qualified in Experience.

### Touch targets

Measured on the desktop captures: top-nav triggers at 35px height with 8px 12px padding; pill CTAs at 40px height, full-round; large navigation cards at 100px height. The source also states that cards maintain their 12px radius across breakpoints; that cross-viewport claim carries the same qualification as the responsive bands below.

### Responsive bands

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Sidebar collapses to a top toggle; nav cards stack single-column |
| Tablet | 640-1024px | 2-up navigation cards, moderate padding |
| Desktop | 1024-1440px | Full sidebar plus content column, multi-column card grid |

Collapsing strategy: the documentation sidebar is persistent on desktop and becomes a top toggle or drawer on mobile; navigation cards go multi-column grid → 2-up → single stacked column; the hero title scales down from 32px on mobile while keeping weight 700; the consumer directory reflows to fewer columns on narrow viewports.

The band edges, the collapsing strategy, the mobile hero behavior, and the cross-breakpoint radius claim above are a derived editorial implementation inference from the captured desktop surfaces; they are not DMM-authored or a separately published responsive specification. The heights in Touch targets are desktop-capture measurements rather than cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Both captured surfaces publish in Japanese, and portal labels mix Latin and Japanese in one string ("AI-friendly デザインガイドライン", "Turtle Design System ポータル β"). Product strings are carried here in their published form; an English gloss sits beside the original rather than replacing it.

Verbatim samples from the live Turtle portal:

- "発見と熱中を、創造する。" — section heading and DMM Group tagline ("Create discovery and enthusiasm")
- "Turtle Design System ポータル β" — portal brand title; the "β" signals work-in-progress
- "Do more with less" — Turtle MCP / AI tooling motto
- "プラットフォーム開発本部のフロントエンドプロダクトの50%以上で導入" — the adoption statement, over 50% as of August 2025
- "(準備中)" — the under-preparation label used where a resource is not yet ready

The quoted strings above are verbatim. That "(準備中)" marks a resource under preparation is observed, not inferred: live inspection of the resources page recorded the label on the entries that are not yet ready, as Assets above records. The gloss attached to "Turtle Design System ポータル β" — that the "β" signals work-in-progress — and the five tone characterizations in the table below are a derived editorial implementation inference from those strings; they are not DMM-authored or a separately published voice guideline.

| Context | Tone |
|---|---|
| Portal headings | Plain and structural. "発見と熱中を、創造する。", "一般公開の目的", "Turtle を使って開発する". |
| Principle statements | Question-framed and reflective. The ABCDE principles are posed as questions to ask yourself rather than as commandments. |
| Adoption / status | Candid and numeric. States real percentages and "(準備中)" (under preparation) where things aren't ready. |
| AI tooling (Turtle MCP) | Terse and confident. "Do more with less." |
| Getting-started docs | Instructional, peer-to-peer. Assumes a designer or front-end engineer reader. |

Forbidden register carried from the source: hype superlatives ("revolutionary", "業界最高"), false completeness — the portal states it is "not a completed form" — and hiding work-in-progress status behind polish, on the reading that the portal prefers honest "(準備中)" labels. The published strings inside that rule are first-party; framing them as a forbidden register is a derived editorial implementation inference from the verified surfaces and is not DMM-authored or a separately published voice guideline.

Characterizing that voice as pragmatic, candid, and community-minded, and reading it as an internal team writing for peers who then decided to share the homework rather than as a marketing department selling a product, is a derived editorial implementation inference from the quoted strings above; it is not DMM-authored or a separately published voice guideline.

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

- the exact curve value behind each of the three named easing roles `ease-enter`, `ease-exit`, and `ease-standard`, until per-component computed capture of all five motion evidence kinds exists
- `loading`, `error`, and `success` applicability on the Portal Pill, whose source use mixes a named navigation label with generic "primary CTAs"
- a first-party DMM mark file — the logo on record is a third-party Google favicon proxy rather than a DMM-published mark
