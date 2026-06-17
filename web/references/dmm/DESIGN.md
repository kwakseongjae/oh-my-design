---
id: dmm
name: DMM.com (Turtle)
country: JP
category: consumer-tech
homepage: "https://dmm.com/"
primary_color: "#94bcff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=dmm.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Two surfaces: the public Turtle Design System portal (turtle.dmm.com) is a dark-first system engineered for one-switch dark mode — canvas #323232, raised card #252525, accent blue #94bcff; the consumer dmm.com platform carries the legacy brand crimson #b42f5a + amber #ffc847. primary = Turtle accent blue #94bcff (the DS link/action color). Translucent overlays live in prose, not in tokens.colors."
  colors:
    primary: "#94bcff"
    accent-green: "#98e467"
    accent-pink: "#f7b6e7"
    canvas: "#323232"
    surface: "#252525"
    on-dark: "#ffffff"
    on-dark-soft: "#e3e3e3"
    on-dark-muted: "#b9b9b9"
    brand-crimson: "#b42f5a"
    brand-crimson-deep: "#8f0539"
    brand-crimson-bright: "#dc0000"
    amber: "#ffc847"
    amber-soft: "#ffea80"
    light-canvas: "#ffffff"
    light-surface: "#f2f4f7"
    light-hairline: "#e9ebef"
    ink: "#242424"
    ink-soft: "#333333"
    ink-muted: "#6e6e6e"
    link-blue: "#005fc0"
  typography:
    family: { sans: "Helvetica Neue", cjk: "Hiragino Kaku Gothic ProN", cjk-alt: "Hiragino Sans", legacy-cjk: "Hiragino Kaku Gothic Pro" }
    portal-title:  { size: 32, weight: 700, lineHeight: 1.75, use: "Turtle portal page H1 (rgb 227 e3e3e3)" }
    hero-title:    { size: 32, weight: 700, lineHeight: 1.31, use: "Hero H1 on dark, weight 700" }
    section-head:  { size: 25, weight: 600, lineHeight: 1.3, use: "Section H2, semibold (発見と熱中を、創造する。)" }
    card-head:     { size: 24, weight: 700, lineHeight: 1.75, use: "Resource/product card H2" }
    body:          { size: 16, weight: 400, lineHeight: 1.3, use: "Body copy on dark, #b9b9b9" }
    body-tight:    { size: 14, weight: 400, lineHeight: 1.3, use: "Sidebar nav item, secondary text" }
    nav-label:     { size: 12, weight: 600, lineHeight: 1.3, use: "Top nav button label, semibold/bold" }
    legacy-link:   { size: 12, weight: 400, lineHeight: 1.3, use: "dmm.com directory link, 12.5px" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, card-x: 56, card-y: 24 }
  rounded: { sm: 8, md: 12, full: 9999 }
  shadow:
    none: "none"
  components:
    card-link: { type: card, bg: "#252525", fg: "#e3e3e3", radius: "12px", padding: "24px 56px", font: "20px / 600", use: "Turtle portal resource/product navigation card on dark canvas" }
    pill-button: { type: button, fg: "#ffffff", radius: "9999px", padding: "12px 16px", font: "16px / 600", use: "Turtle about/CTA pill on dark, full-round" }
    nav-button: { type: button, fg: "#ffffff", radius: "0px", padding: "8px 12px", font: "12px / 600", use: "Top-nav menu trigger (Turtle について / プロダクト / ガイドライン)" }
    side-tab: { type: tab, fg: "#ffffff", font: "14px / 400", use: "Left sidebar nav item", active: "text #94bcff on active section" }
    doc-link: { type: listItem, fg: "#94bcff", font: "16px / 400", use: "In-page doc link (デザイントークン / コンポーネント / リソース)" }
    crimson-tag: { type: badge, bg: "#b42f5a", fg: "#ffffff", radius: "0px", font: "12px / 400", use: "dmm.com consumer brand-crimson section tag" }
    amber-pill: { type: badge, bg: "#ffc847", fg: "#242424", radius: "9999px", font: "12px / 700", use: "dmm.com promo/campaign amber chip" }
  components_harvested: true
---

# Design System Inspiration of DMM.com (Turtle)

## 1. Visual Theme & Atmosphere

DMM.com is one of Japan's sprawling digital platforms — video, games, e-books, English conversation, FX trading, 3D printing, even an aquarium — over sixty services under one roof. In 2025 its Platform Development Division made its internal design system, **Turtle**, public, and that portal (`turtle.dmm.com`) is the brand's most coherent design surface. The defining choice is that Turtle is **dark-first**: the portal canvas is a deep charcoal (`#323232`) with raised cards one step lighter (`#252525`), and the whole color architecture is engineered so that dark mode is reached with a single mode switch rather than a parallel palette. Where most systems treat dark mode as an afterthought, Turtle treats it as a peer — the public-facing documentation literally ships in the dark theme.

On that charcoal field the text runs as a calm three-step grey ladder — pure white (`#ffffff`) for primary headings, a soft `#e3e3e3` for section heads, and a muted `#b9b9b9` for body — so hierarchy is carried by luminance rather than color. The accent palette is restrained and luminous: a periwinkle blue (`#94bcff`) is the link and action color, joined by a spring green (`#98e467`) and a soft pink (`#f7b6e7`) used sparingly for status and decorative highlights. Geometry is gentle and modern: documentation cards sit at a 12px radius, and pill controls go fully round (`9999px`). There are essentially no drop shadows — separation comes from the surface-step (`#323232` → `#252525`), which is exactly how a one-switch dark system has to behave.

The consumer platform at `dmm.com` is a second, older register — a dense white directory whose brand DNA shows in a vivid **crimson** (`#b42f5a`, deepening to `#8f0539`) and a warm promotional **amber** (`#ffc847`). This is the legacy entertainment-portal energy: information-dense, link-heavy (classic browser-blue `#0000ee` and a refined `#005fc0`), built for breadth. The interesting tension of the DMM brand is exactly this split — a calm, engineered, dark-first design system (Turtle) being rolled across a loud, maximal, crimson consumer empire. Turtle is the future the company is migrating toward; as of August 2025 it covers over half of the division's front-end products.

**Key Characteristics:**
- Dark-first by design — Turtle canvas `#323232`, raised card `#252525`, engineered for one-switch dark mode
- Luminance hierarchy — white `#ffffff` → soft `#e3e3e3` → muted `#b9b9b9` text ladder on charcoal
- Periwinkle blue (`#94bcff`) as the link/action accent; green (`#98e467`) + pink (`#f7b6e7`) as sparing highlights
- Shadowless depth — separation via the `#323232`/`#252525` surface step, never drop shadows
- Pill controls (`9999px`) + 12px documentation cards — gentle, modern geometry
- Legacy consumer brand-crimson (`#b42f5a` → `#8f0539`) + promo amber (`#ffc847`) on the white dmm.com platform
- Japanese-first stack — `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`

## 2. Color Palette & Roles

### Turtle Accent (Primary)
- **Periwinkle Blue** (`#94bcff`): The Turtle link and action color — in-page doc links, active sidebar items, interactive accents on the dark canvas. The system's primary signal color.
- **Spring Green** (`#98e467`): Positive / success accent and decorative highlight on dark surfaces.
- **Soft Pink** (`#f7b6e7`): Secondary decorative / status accent, used sparingly alongside the green.

### Dark Surfaces (Turtle)
- **Canvas Charcoal** (`#323232`): The Turtle portal body background — the base of the dark-first system.
- **Raised Surface** (`#252525`): One step lighter than canvas; documentation/navigation cards and panels. The surface-step that replaces shadows.

### Text Ladder (on dark)
- **On-Dark White** (`#ffffff`): Primary headings, strong labels on the dark canvas.
- **On-Dark Soft** (`#e3e3e3`): Section headings and card text — a softened white.
- **On-Dark Muted** (`#b9b9b9`): Body copy, descriptions, lowest-emphasis text on dark.

### Consumer Brand (dmm.com platform)
- **Brand Crimson** (`#b42f5a`): The DMM consumer platform brand color — section tags, promotional surfaces.
- **Crimson Deep** (`#8f0539`): Darker crimson for hover/emphasis on brand surfaces.
- **Crimson Bright** (`#dc0000`): Vivid red used for alerts and high-urgency promo labels.
- **Amber** (`#ffc847`): Warm promotional yellow for campaign chips and highlight banners.
- **Amber Soft** (`#ffea80`): Lighter amber for tinted promotional backgrounds.

### Light Neutrals & Links (dmm.com platform)
- **Light Canvas** (`#ffffff`): The white consumer platform background.
- **Light Surface** (`#f2f4f7`): Cool-grey tinted panels and content blocks.
- **Light Hairline** (`#e9ebef`): Thin borders and dividers on the white platform.
- **Ink** (`#242424`): Darkest near-black text on the light platform.
- **Ink Soft** (`#333333`): Standard body text on white.
- **Ink Muted** (`#6e6e6e`): Secondary / metadata text on white.
- **Link Blue** (`#005fc0`): The refined navigation link blue on the consumer platform.

## 3. Typography Rules

### Font Family
- **Sans / CJK stack**: `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif` — the Turtle portal stack, Latin-Helvetica fronting the Japanese Hiragino faces.
- **Legacy CJK stack** (dmm.com platform): `"Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", HiraginoSans-W3, メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif`.
- No custom brand typeface — Turtle leans on system-available Japanese sans faces, which is consistent with its "do more with less" pragmatism.

### Hierarchy

| Role | Size | Weight | Line Height | Color | Notes |
|------|------|--------|-------------|-------|-------|
| Portal Title (H1) | 32px (2.00rem) | 700 | 1.75 (56px) | `#e3e3e3` | Turtle portal page heading |
| Hero Title (H1) | 32px (2.03rem) | 700 | 1.31 | `#ffffff` | Landing hero "Turtle Design System" |
| Section Head (H2) | 25px (1.60rem) | 600 | 1.3 | `#e3e3e3` | Section titles ("発見と熱中を、創造する。") |
| Card Head (H2) | 24px (1.50rem) | 700 | 1.75 (42px) | `#e3e3e3` | Resource/product card headings |
| Brand Title (H1) | 28px (1.80rem) | 600 | 1.3 | `#ffffff` | Top portal brand "Turtle Design System ポータル β" |
| Body | 16px (1.00rem) | 400 | 1.3 | `#b9b9b9` | Standard reading text on dark |
| Body Tight | 14px (0.88rem) | 400 | 1.3 | `#ffffff` | Sidebar nav items |
| Nav Label | 12.6px (0.79rem) | 600–700 | 1.3 | `#ffffff` | Top-nav button labels |
| Legacy Link | 12.5px (0.78rem) | 400 | normal | `#005fc0` | dmm.com directory links |

### Principles
- **Weight does the work, not color**: headings sit at 600–700, body at 400; with a single accent blue, weight and luminance carry almost all hierarchy.
- **Luminance ladder**: `#ffffff` → `#e3e3e3` → `#b9b9b9` is the on-dark text scale — three deliberate steps, never pure-grey guesswork.
- **System-font pragmatism**: no proprietary face. Helvetica Neue fronts the Japanese Hiragino stack — fast, available, and "do more with less."
- **CJK-first metrics**: line-heights stay generous (1.3–1.75) so dense hangul-adjacent kanji/kana set comfortably.

## 4. Component Stylings

### Buttons

**Portal Pill (About / CTA)**
- Text: `#ffffff`
- Radius: 9999px
- Padding: 12px 16px
- Font: 16px / weight 600
- Height: 40px
- Use: "Turtle について" and primary CTAs on the dark portal — full-round pill

**Top-Nav Trigger**
- Text: `#ffffff`
- Radius: 0px
- Padding: 8px 12px
- Font: 12.6px / weight 600
- Height: 35px
- Use: Top navigation menu triggers ("Turtle について", "プロダクト", "ガイドライン", "導入の手引き")

**Top-Nav Active**
- Text: `#e3e3e3`
- Font: 12.6px / weight 700
- Use: Active top-nav item ("トップ") — heavier weight marks the current section

### Cards & Containers

**Resource / Product Card**
- Background: `#252525`
- Text: `#e3e3e3`
- Radius: 12px
- Padding: 24px 56px
- Font: 20px / weight 600
- Height: 100px
- Use: Large navigation cards on the dark canvas ("デザイントークン", "コンポーネント", "リソース", "AI-friendly デザインガイドライン")

### Tabs

**Sidebar Nav Item**
- Text: `#ffffff`
- Font: 14px / weight 400
- Active: `#94bcff` text on the active section
- Use: Left documentation sidebar items ("はじめに", "プロダクトビジョン", "デザイン原則", "システム全体像")

### Badges

**Brand Crimson Tag**
- Background: `#b42f5a`
- Text: `#ffffff`
- Radius: 0px
- Font: 12px / weight 400
- Use: Consumer dmm.com brand-crimson section tag / category label

**Promo Amber Chip**
- Background: `#ffc847`
- Text: `#242424`
- Radius: 9999px
- Font: 12px / weight 700
- Use: dmm.com campaign / promotional pill on the white platform

### Links

**In-Page Doc Link**
- Text: `#94bcff`
- Font: 16px / weight 400
- Use: Documentation cross-links inside the body ("デザイントークン", "コンポーネント", "リソース", Figma community URL)

**Legacy Platform Link**
- Text: `#005fc0`
- Font: 12.5px / weight 400
- Use: dmm.com consumer directory navigation links

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://turtle.dmm.com/ (Turtle DS portal — dark-first tokens, cards, nav, live DOM); https://turtle.dmm.com/products/resources/ (Turtle resources — Figma/GitHub/Storybook, headings); https://dmm.com/ (consumer platform — brand crimson + amber, live DOM)
**Tier 2 sources:** getdesign.md/dmm — 404 (no entry); styles.refero.design/?q=dmm — no DMM match (fuzzy unrelated results only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px (nav padding 8px 12px; card padding lands at the generous 24px 56px)
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 56px
- Notable: Turtle navigation cards use an asymmetric 24px vertical / 56px horizontal pad, giving the large dark cards an airy, document-like feel

### Grid & Container
- Turtle portal: a left documentation sidebar + a centered content column, with large 100px-tall navigation cards laid out in a responsive grid
- Consumer dmm.com: a dense multi-column directory grid built for breadth across 60+ services
- Hero block centers the "Turtle Design System" title with the "発見と熱中を、創造する。" tagline beneath

### Whitespace Philosophy
- **Document calm**: the Turtle portal is spacious and reading-oriented — generous card padding, clear vertical rhythm, nothing crowded.
- **Surface-step over borders**: panels separate by the `#323232` → `#252525` luminance step, not by lines or shadows.
- **Consumer density**: the dmm.com platform is the opposite — maximal link density, because its job is to expose an enormous service catalog.

### Border Radius Scale
- Small (8px): inner elements, small controls
- Medium (12px): documentation/navigation cards — the workhorse on the portal
- Full (9999px): pill buttons, promo chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page canvas (`#323232`), inline text |
| Surface step (Level 1) | `#252525` raised background on `#323232` | Cards/panels separated by luminance, not shadow |
| Light hairline (Level 2) | `1px solid #e9ebef` | dmm.com white-platform dividers and card outlines |

**Shadow Philosophy**: Turtle is a near-shadowless, dark-first system. Live inspection found `box-shadow: none` across the portal hero, nav, headings, and the large `#252525` cards. Elevation is expressed purely as a **surface luminance step** — a raised card is simply one shade lighter than the canvas (`#323232` → `#252525`). This is the correct discipline for a one-switch dark-mode system: a token-driven luminance step inverts cleanly between themes, whereas baked drop-shadows do not. When emphasis is needed the system reaches for the accent blue (`#94bcff`), never for elevation. The consumer dmm.com platform, being a light system, uses thin `#e9ebef` hairlines instead.

## 7. Do's and Don'ts

### Do
- Build dark-first — canvas `#323232`, raised surface `#252525`, designed so dark mode is one mode switch
- Carry hierarchy with the luminance ladder: `#ffffff` → `#e3e3e3` → `#b9b9b9` on dark
- Reserve the periwinkle blue (`#94bcff`) for links and the active/action signal
- Separate panels with the surface step (`#323232` → `#252525`), not drop shadows
- Use full-round pills (`9999px`) for buttons and 12px radius for documentation cards
- Use the spring green (`#98e467`) and soft pink (`#f7b6e7`) only as sparing accents
- Keep typography on the system Hiragino/Helvetica stack — "do more with less"
- On the consumer platform, use the brand crimson (`#b42f5a`) and amber (`#ffc847`) for promo/branding

### Don't
- Bake drop shadows for elevation — Turtle separates by luminance so it survives the dark/light switch
- Spread the accent blue across decorative surfaces — it's the link/action signal
- Use pure-grey guesses for text — stick to the `#ffffff`/`#e3e3e3`/`#b9b9b9` ladder
- Mix the dark Turtle palette and the light consumer crimson on one surface — they are two registers
- Use heavy weights below 600 for headings or 400 for body — weight is the hierarchy
- Introduce a custom display typeface — the system is deliberately font-pragmatic
- Treat dark mode as a bolt-on — it is the base theme, not a variant

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Sidebar collapses to a top toggle; nav cards stack single-column |
| Tablet | 640-1024px | 2-up navigation cards, moderate padding |
| Desktop | 1024-1440px | Full sidebar + content column, multi-column card grid |

### Touch Targets
- Top-nav triggers at 35px height with 8px 12px padding
- Pill CTAs at 40px height, full-round for an unmistakable target
- Large navigation cards at 100px height — generous tap area

### Collapsing Strategy
- Documentation sidebar: persistent on desktop → top toggle/drawer on mobile
- Navigation cards: multi-column grid → 2-up → single stacked column
- Hero title: 32px scales down on mobile, weight 700 maintained
- Consumer dmm.com directory: dense multi-column grid reflows to fewer columns on narrow viewports

### Image Behavior
- Portal illustrations and product thumbnails carry no shadow, consistent with the shadowless dark system
- Cards maintain 12px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent / link: Periwinkle Blue (`#94bcff`)
- Dark canvas: Charcoal (`#323232`)
- Raised surface: (`#252525`)
- Heading text (dark): White (`#ffffff`) / Soft (`#e3e3e3`)
- Body text (dark): Muted (`#b9b9b9`)
- Success accent: Spring Green (`#98e467`)
- Decorative accent: Soft Pink (`#f7b6e7`)
- Consumer brand: Crimson (`#b42f5a`), Amber (`#ffc847`)
- Consumer link: Link Blue (`#005fc0`)

### Example Component Prompts
- "Create a dark-first portal hero: #323232 canvas. Title at 32px weight 700, color #ffffff, on the system stack ('Helvetica Neue', 'Hiragino Kaku Gothic ProN', sans-serif). Section head at 25px weight 600, #e3e3e3. Body at 16px weight 400, #b9b9b9. One periwinkle link (#94bcff)."
- "Design a navigation card: #252525 background on a #323232 canvas, 12px radius, no shadow, 24px 56px padding. Heading 20px weight 600, #e3e3e3. Separation comes from the surface step, not a border."
- "Build a full-round pill button: transparent on dark, #ffffff text, 9999px radius, 12px 16px padding, 16px weight 600."
- "Create a left documentation sidebar: items at 14px weight 400, #ffffff text, active item turns #94bcff. No shadows."
- "Design a consumer promo chip: #ffc847 amber background, #242424 text, 9999px radius, 12px weight 700; and a crimson section tag #b42f5a with white text."

### Iteration Guide
1. Start dark — `#323232` canvas, `#252525` raised cards — and make sure dark mode is reached by a single mode switch
2. Carry hierarchy with luminance: `#ffffff` → `#e3e3e3` → `#b9b9b9`
3. The accent blue `#94bcff` is the link/action color — don't spread it decoratively
4. No shadows — separate with the surface step; it survives the dark/light theme switch
5. Pills are `9999px`, documentation cards are 12px
6. Stay on the system Hiragino/Helvetica stack — no custom face
7. Keep the consumer crimson (`#b42f5a`) + amber (`#ffc847`) on the light platform only

---

## 10. Voice & Tone

DMM's design-system voice — as written across the Turtle portal — is **pragmatic, candid, and community-minded**. It does not posture. The portal openly labels itself "ポータル β" (a beta), states adoption honestly ("プラットフォーム開発本部のフロントエンドプロダクトの50%以上で導入" — over 50% as of August 2025), and frames its own AI tooling with the plain motto "Do more with less." The register is that of an internal team writing for peers and then deciding to share the homework with the wider community, rather than a marketing department selling a product.

| Context | Tone |
|---|---|
| Portal headings | Plain and structural. "発見と熱中を、創造する。", "一般公開の目的", "Turtle を使って開発する". |
| Principle statements | Question-framed and reflective. The ABCDE principles are posed as questions to ask yourself, not commandments. |
| Adoption / status | Candid and numeric. States real percentages and "(準備中)" (under preparation) where things aren't ready. |
| AI tooling (Turtle MCP) | Terse and confident. "Do more with less." |
| Getting-started docs | Instructional, peer-to-peer. Assumes a designer or front-end engineer reader. |

**Voice samples (verbatim from live Turtle portal):**
- "発見と熱中を、創造する。" — section heading / DMM Group tagline ("Create discovery and enthusiasm"). *(verified live 2026-06-17)*
- "Turtle Design System ポータル β" — portal brand title; the "β" candidly signals work-in-progress. *(verified live 2026-06-17)*
- "Do more with less" — Turtle MCP / AI tooling motto. *(verified via turtle.dmm.com/about/introduction 2026-06-17)*

**Forbidden register**: hype superlatives ("revolutionary", "業界最高"), false completeness (Turtle explicitly says it is "not a completed form"), and hiding work-in-progress status behind polish — the portal prefers honest "(準備中)" labels.

## 11. Brand Narrative

DMM.com traces to **1999**, when **亀山敬司 (Keiji Kameyama)** founded what was then 株式会社デジタルメディアマート — the seed of today's 合同会社DMM.com, headquartered in Roppongi, Tokyo. Kameyama's path is itself part of the brand's identity: he started at nineteen as a street-stall accessory vendor, ran cafes and a video-rental business, and built that into one of Japan's broadest digital conglomerates — video distribution, online games, e-books, FX trading, English conversation, 3D printing, solar, animation, even a football club and an aquarium, more than sixty services in all. The DMM Group tagline that appears on the Turtle portal — **"発見と熱中を、創造する。"** ("Create discovery and enthusiasm") — is the throughline across that sprawl: DMM's business is making people stumble into something and get absorbed in it.

Turtle is the design system that the Platform Development Division built to bring coherence to that breadth. Its stated motivation is concrete: inconsistent UX across dozens of services creates cognitive load for users; teams redundantly rebuild the same components; and research/learning costs stay high. Turtle answers with packaged design tokens, a React component library, page templates, a Figma community library, Storybook, and an AI bridge called **Turtle MCP** that can build UI from Figma data in minutes. As of August 2025 it runs in over half of the division's front-end products.

What makes the brand distinctive in the design-system world is the **decision to go public**. DMM released Turtle's portal, its Figma library, and its knowledge openly — explicitly to "contribute to the design-system community and share knowledge with others facing the same challenges." The system describes itself as "not a completed form" but "a system that changes appropriately in response to changing needs and environments" — the **E (Evolve)** of its own ABCDE principles. That posture — dark-first, font-pragmatic, candidly beta, openly shared — is the opposite of the loud, maximal crimson consumer platform it sits behind, and it is where DMM signals where its product craft is heading.

## 12. Principles

Turtle's published principles use the **ABCDE** framework — each posed as a question the team asks of any design decision. *(verbatim from turtle.dmm.com/about/design-principle/, verified live 2026-06-17.)*

1. **A — Achieve Goals.** "エンドユーザーが効率的に目的を達成できるか？" (Can end users efficiently accomplish their objectives?) *UI implication:* the shortest path to the user's goal wins over decoration; the dense consumer directory and the calm doc portal both optimize for "find it and act."
2. **B — Bring out Abilities.** "クリエイターの能力を最大限に引き出せているか？" (Does it maximize creator capabilities?) *UI implication:* ship tokens, components, templates, and Turtle MCP so designers/engineers spend effort on product value, not re-building primitives.
3. **C — Consistency.** "一貫性を担保できているか？" (Is consistency maintained?) *UI implication:* one token set drives every service; the luminance ladder and accent blue are reused everywhere rather than re-invented per team.
4. **D — Design Intent.** "設計の意図は明確になっているか？" (Are design decisions clearly documented?) *UI implication:* the public portal exists to make rationale legible — tokens, principles, and getting-started docs are first-class, not afterthoughts.
5. **E — Evolve.** "変化を恐れず進化を選択できているか？" (Can we choose to evolve without fearing change?) *UI implication:* the system is candidly "β" and "not a completed form"; treat versions and "(準備中)" states as honest, expected, and shippable.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Turtle/DMM user segments (front-end engineers and designers across DMM's platform division, plus the external community DMM opened the system to), not individual people.*

**佐藤 拓海 (Takumi Sato), 30, Tokyo.** Front-end engineer in DMM's Platform Development Division. Adopts Turtle's npm package so his team stops re-implementing the same buttons across services. Values that dark mode is a single mode switch, not a second stylesheet to maintain. Reads the Storybook catalog and copies snippets.

**石川 美咲 (Misaki Ishikawa), 34, Tokyo.** Product designer maintaining several DMM services. Lives in the Turtle Figma community library — tokens, components, templates — to keep dozens of screens consistent without hand-syncing colors. Appreciates the ABCDE principles as a shared vocabulary in design reviews.

**Daniel Okafor, 28, Berlin.** An outside engineer who found the public Turtle portal looking for a real-world dark-first token architecture. Studies how DMM achieves one-switch dark mode and how it documents intent. Represents exactly the community DMM opened the system for.

**川口 さやか (Sayaka Kawaguchi), 41, Osaka.** PM coordinating designers and engineers on a platform product. Uses Turtle's documented intent (the D principle) to settle "why is it this way" debates by pointing at the portal rather than re-litigating.

## 14. States

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

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, button/pill press |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sidebar drawer |
| `motion-slow` | 320ms | Page-level transitions, theme switch crossfade |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, drawers, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, matching the calm dark-first documentation register. The signature moment is the **dark/light theme switch**, which crossfades the canvas and surface tokens at `motion-slow` — because separation is luminance-based and shadowless, the transition stays clean with nothing to re-bake. Cards and the documentation sidebar reveal with `motion-standard / ease-enter`; pill controls respond to press with a subtle opacity/scale shift. No bounce or spring — a developer-facing design system signals steadiness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the theme switch becomes an immediate swap; the portal remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://turtle.dmm.com/ — body bg rgb(50,50,50) #323232; card bg rgb(37,37,37) #252525;
  text ladder rgb(255,255,255)/rgb(227,227,227) #e3e3e3/rgb(185,185,185) #b9b9b9;
  accent fg rgb(148,188,255) #94bcff (links), rgb(152,228,103) #98e467 (green),
  rgb(247,182,231) #f7b6e7 (pink); cards radius 12px / 24px 56px padding;
  pill radius 9999px; box-shadow none; font "Helvetica Neue", Arial,
  "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif.
- https://turtle.dmm.com/products/resources/ — Figma community library, GitHub/Storybook
  "(準備中)" labels; H2 24px/700 #e3e3e3.
- https://dmm.com/ — consumer platform; brand bg rgb(180,47,90) #b42f5a (×16),
  rgb(255,200,71) #ffc847 amber, link rgb(0,95,192) #005fc0, ink rgb(36,36,36) #242424.

Tier 1 doc pages (WebFetch, 2026-06-17):
- https://turtle.dmm.com/about/introduction/ — Turtle is DMM's design system; tokens +
  components + templates + Storybook + Turtle MCP; "Dark-mode 対応をモード切り替えだけで完了できます";
  "Do more with less"; >50% adoption as of August 2025.
- https://turtle.dmm.com/about/design-principle/ — ABCDE principles (Achieve Goals /
  Bring out Abilities / Consistency / Design Intent / Evolve), each as a Japanese
  question (verbatim quotes used in §12). "not a completed form" / evolves with needs.

Voice samples (§10) are verbatim from the live portal (section heading, brand title)
and the introduction doc ("Do more with less").

Brand narrative (§11): DMM.com founded 1999 by 亀山敬司 (Keiji Kameyama) as
デジタルメディアマート (now 合同会社DMM.com, HQ Roppongi, Tokyo); 60+ services;
Group tagline "発見と熱中を、創造する。". These are widely documented public facts
(Japanese Wikipedia / corporate profiles) plus the live portal tagline; not a single
quoted DMM press statement in this turn. Turtle public release + >50% adoption (Aug 2025)
are from the live introduction doc.

Personas (§13) are fictional archetypes informed by publicly observable Turtle/DMM
user segments (DMM platform-division front-end engineers and designers, plus the
external community DMM opened the system to). Names are illustrative; they do not
refer to real people.

Interpretive claims (e.g., "luminance step replaces shadow so it survives the theme
switch", "dark-first as a peer not a bolt-on", "calm DS behind a loud crimson platform")
are editorial readings connecting Turtle's observed design to its stated principles,
not directly sourced DMM statements.
-->
