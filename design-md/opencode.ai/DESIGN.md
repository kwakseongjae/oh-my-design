---
id: opencode.ai
name: OpenCode AI
country: US
category: ai
homepage: "https://opencode.ai"
primary_color: "#000000"
logo:
  type: github
  slug: opencode-ai
verified: "2026-05-15"
omd: "0.1"
ds:
  name: OpenCode Brand
  url: "https://opencode.ai/brand"
  type: brand
  description: OpenCode's terminal-oriented logo and brand assets.
  og_image: "https://opencode.ai/social-share.png"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#201d1d"
    canvas: "#fdfcfc"
    foreground: "#201d1d"
    on-primary: "#fdfcfc"
    muted: "#9a9898"
    surface: "#302c2c"
    surface-light: "#f1eeee"
    hairline: "#646262"
    body: "#424245"
    accent: "#007aff"
    accent-hover: "#0056b3"
    accent-active: "#004085"
    error: "#ff3b30"
    success: "#30d158"
    warning: "#ff9f0a"
  typography:
    family: { sans: "Berkeley Mono", mono: "Berkeley Mono" }
    heading-1:   { size: 38, weight: 700, lineHeight: 1.50, use: "Hero headlines, page titles" }
    heading-2:   { size: 16, weight: 700, lineHeight: 1.50, use: "Section titles, bold emphasis" }
    body:        { size: 16, weight: 400, lineHeight: 1.50, use: "Standard body text, paragraphs" }
    body-medium: { size: 16, weight: 500, lineHeight: 1.50, use: "Links, button text, nav items" }
    body-tight:  { size: 16, weight: 500, lineHeight: 1.00, use: "Compact labels, tab items" }
    caption:     { size: 14, weight: 400, lineHeight: 2.00, use: "Footnotes, metadata, small labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 96 }
  rounded: { sm: 4, md: 4, lg: 6, full: 9999 }
  shadow:
    flat: "none"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#201d1d", fg: "#fdfcfc", radius: "4px", padding: "4px 20px", font: "16px / 500", border: "1px solid #646262", use: "Primary CTAs, main actions" }
    input-email: { type: input, bg: "#f1eeee", fg: "#201d1d", border: "1px solid rgba(15,0,0,0.12)", radius: "6px", padding: "20px", use: "Form fields, email capture" }
    link-default: { type: badge, fg: "#201d1d", font: "16px / 500", states: "underline 1px", use: "Primary text links in body content" }
    tab-nav: { type: tab, font: "16px / 500", active: "2px bottom border #9a9898", use: "Section switching, content filtering" }
---

# Design System Inspiration of OpenCode

## 1. Visual Theme & Atmosphere

OpenCode's website embodies a terminal-native, monospace-first aesthetic that reflects its identity as an open source AI coding agent. The entire visual system is built on a stark dark-on-light contrast using a near-black background (`#201d1d`) with warm off-white text (`#fdfcfc`). This isn't a generic dark theme -- it's a warm, slightly reddish-brown dark that feels like a sophisticated terminal emulator rather than a cold IDE. The warm undertone in both the darks and lights (notice the subtle red channel in `#201d1d` -- rgb(32, 29, 29)) creates a cohesive, lived-in quality.

Berkeley Mono is the sole typeface, establishing an unapologetic monospace identity. Every element -- headings, body text, buttons, navigation -- shares this single font family, creating a unified "everything is code" philosophy. The heading at 38px bold with 1.50 line-height is generous and readable, while body text at 16px with weight 500 provides a slightly heavier-than-normal reading weight that enhances legibility on screen. The monospace grid naturally enforces alignment and rhythm across the layout.

The color system is deliberately minimal. The primary palette consists of just three functional tones: the warm near-black (`#201d1d`), a medium warm gray (`#9a9898`), and a bright off-white (`#fdfcfc`). Semantic colors borrow from the Apple HIG palette -- blue accent (`#007aff`), red danger (`#ff3b30`), green success (`#30d158`), orange warning (`#ff9f0a`) -- giving the interface familiar, trustworthy signal colors without adding brand complexity. Borders use a subtle warm transparency (`rgba(15, 0, 0, 0.12)`) that ties into the warm undertone of the entire system.

**Key Characteristics:**
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

### Do's and Don'ts

- **DO** use Berkeley Mono everywhere — headings, body, buttons, navigation, labels. The single-font system IS the brand.
- **DON'T** introduce a sans-serif or serif voice — even for "marketing" copy. Mixing voices breaks OpenCode's terminal-native identity.
- **DO** use warm dark `#201d1d` (rgb 32, 29, 29) as background — the subtle red undertone is intentional.
- **DON'T** use pure `#000000` or cool grays — they feel like generic dark themes, not OpenCode's lived-in terminal warmth.
- **DO** use warm off-white `#fdfcfc` for foreground text — pure white is too cold against the warm dark.
- **DO** use 4px border radius universally — sharp, utilitarian corners match the developer-tool aesthetic.
- **DON'T** use rounded or pill-shaped components — that's consumer/marketing language.
- **DO** apply Apple HIG semantic colors (blue `#007aff`, red `#ff3b30`, green `#30d158`, orange `#ff9f0a`) for status — they're trustworthy signals without adding brand complexity.
- **DON'T** invent custom semantic colors — the Apple palette is the convention developers expect.
- **DO** underline links by default — text-centric identity reinforces "everything is code."
- **DON'T** use color-only link styling without underline — accessibility AND identity benefit from the underline.

## 2. Color Palette & Roles

### Primary
- **OpenCode Dark** (`#201d1d`): Primary background, button fills, link text. A warm near-black with subtle reddish-brown warmth -- rgb(32, 29, 29).
- **OpenCode Light** (`#fdfcfc`): Primary text on dark surfaces, button text. A barely-warm off-white that avoids clinical pure white.
- **Mid Gray** (`#9a9898`): Secondary text, muted links. A neutral warm gray that bridges dark and light.

### Secondary
- **Dark Surface** (`#302c2c`): Slightly lighter than primary dark, used for elevated surfaces and subtle differentiation.
- **Border Gray** (`#646262`): Stronger borders, outline rings on interactive elements.
- **Light Surface** (`#f1eeee`): Light mode surface, subtle background variation.

### Accent
- **Accent Blue** (`#007aff`): Primary accent, links, interactive highlights. Apple system blue.
- **Accent Blue Hover** (`#0056b3`): Darker blue for hover states.
- **Accent Blue Active** (`#004085`): Deepest blue for pressed/active states.

### Semantic
- **Danger Red** (`#ff3b30`): Error states, destructive actions. Apple system red.
- **Danger Hover** (`#d70015`): Darker red for hover on danger elements.
- **Danger Active** (`#a50011`): Deepest red for pressed danger states.
- **Success Green** (`#30d158`): Success states, positive feedback. Apple system green.
- **Warning Orange** (`#ff9f0a`): Warning states, caution signals. Apple system orange.
- **Warning Hover** (`#cc7f08`): Darker orange for hover on warning elements.
- **Warning Active** (`#995f06`): Deepest orange for pressed warning states.

### Text Scale
- **Text Muted** (`#6e6e73`): Muted labels, disabled text, placeholder content.
- **Text Secondary** (`#424245`): Secondary text on light backgrounds, captions.

### Border
- **Border Warm** (`rgba(15, 0, 0, 0.12)`): Primary border color, warm transparent black with red tint.
- **Border Tab** (`#9a9898`): Tab underline border, 2px solid bottom.
- **Border Outline** (`#646262`): 1px solid outline border for containers.

## 3. Typography Rules

### Font Family
- **Universal**: `Berkeley Mono`, with fallbacks: `IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Heading 1 | 38px (2.38rem) | 700 | 1.50 | Hero headlines, page titles |
| Heading 2 | 16px (1.00rem) | 700 | 1.50 | Section titles, bold emphasis |
| Body | 16px (1.00rem) | 400 | 1.50 | Standard body text, paragraphs |
| Body Medium | 16px (1.00rem) | 500 | 1.50 | Links, button text, nav items |
| Body Tight | 16px (1.00rem) | 500 | 1.00 (tight) | Compact labels, tab items |
| Caption | 14px (0.88rem) | 400 | 2.00 (relaxed) | Footnotes, metadata, small labels |

### Principles
- **One font, one voice**: Berkeley Mono is used exclusively. There is no typographic variation between display, body, and code -- everything speaks in the same monospace register. Hierarchy is achieved through size and weight alone.
- **Weight as hierarchy**: 700 for headings, 500 for interactive/medium emphasis, 400 for body text. Three weight levels create the entire hierarchy.
- **Generous line-height**: 1.50 as the standard line-height gives text room to breathe within the monospace grid. The relaxed 2.00 line-height on captions creates clear visual separation.
- **Tight for interaction**: Interactive elements (tabs, compact labels) use 1.00 line-height for dense, clickable targets.

## 4. Component Stylings

### Buttons

**Primary (Dark Fill)**
- Background: `#201d1d` (OpenCode Dark)
- Text: `#fdfcfc` (OpenCode Light)
- Padding: 4px 20px
- Radius: 4px
- Font: 16px Berkeley Mono, weight 500, line-height 2.00 (relaxed)
- Outline: `rgb(253, 252, 252) none 0px`
- Use: Primary CTAs, main actions

### Inputs

**Email Input**
- Background: `#f8f7f7` (light neutral)
- Text: `#201d1d`
- Border: `1px solid rgba(15, 0, 0, 0.12)`
- Padding: 20px
- Radius: 6px
- Font: Berkeley Mono, standard size
- Use: Form fields, email capture

### Links

**Default Link**
- Color: `#201d1d`
- Decoration: underline 1px
- Font-weight: 500
- Use: Primary text links in body content

**Light Link**
- Color: `#fdfcfc`
- Decoration: none
- Use: Links on dark backgrounds, navigation

**Muted Link**
- Color: `#9a9898`
- Decoration: none
- Use: Footer links, secondary navigation

### Tabs

**Tab Navigation**
- Border-bottom: `2px solid #9a9898` (active tab indicator)
- Font: 16px, weight 500, line-height 1.00
- Use: Section switching, content filtering

### Navigation
- Clean horizontal layout with Berkeley Mono throughout
- Brand logotype left-aligned in monospace
- Links at 16px weight 500 with underline decoration
- Dark background matching page background
- No backdrop blur or transparency -- solid surfaces only

### Image Treatment
- Terminal/code screenshots as hero imagery
- Dark terminal aesthetic with monospace type
- Minimal borders, content speaks for itself

### Distinctive Components

**Terminal Hero**
- Full-width dark terminal window as hero element
- ASCII art / stylized logo within terminal frame
- Monospace command examples with syntax highlighting
- Reinforces the CLI-first identity of the product

**Feature List**
- Bulleted feature items with Berkeley Mono text
- Weight 500 for feature names, 400 for descriptions
- Tight vertical spacing between items
- No cards or borders -- pure text layout

**Email Capture**
- Light background input (`#f8f7f7`) contrasting dark page
- Generous 20px padding for comfortable typing
- 6px radius -- the roundest element in the system
- Newsletter/waitlist pattern

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Fine scale: 1px, 2px, 4px (sub-8px for borders and micro-adjustments)
- Standard scale: 8px, 12px, 16px, 20px, 24px
- Extended scale: 32px, 40px, 48px, 64px, 80px, 96px
- The system follows a clean 4/8px grid with consistent doubling

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

### Border Radius Scale
- Micro (4px): Default for all elements -- buttons, containers, badges
- Input (6px): Form inputs get slightly more roundness
- The entire system uses just two radius values, reinforcing the utilitarian aesthetic

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Default state for most elements |
| Border Subtle (Level 1) | `1px solid rgba(15, 0, 0, 0.12)` | Section dividers, input borders, horizontal rules |
| Border Tab (Level 2) | `2px solid #9a9898` bottom only | Active tab indicator |
| Border Outline (Level 3) | `1px solid #646262` | Container outlines, elevated elements |

**Shadow Philosophy**: OpenCode's depth system is intentionally flat. There are no box-shadows in the extracted tokens -- zero shadow values were detected. Depth is communicated exclusively through border treatments and background color shifts. This flatness is consistent with the terminal aesthetic: terminals don't have shadows, and neither does OpenCode. The three border levels (transparent warm, tab indicator, solid outline) create sufficient visual hierarchy without any elevation illusion.

### Decorative Depth
- Background color shifts between `#201d1d` and `#302c2c` create subtle surface differentiation
- Transparent borders at 12% opacity provide barely-visible structure
- The warm reddish tint in border colors (`rgba(15, 0, 0, 0.12)`) ties borders to the overall warm dark palette
- No gradients, no blurs, no ambient effects -- pure flat terminal aesthetic

## 7. Interaction & Motion

### Hover States
- Links: color shift from default to accent blue (`#007aff`) or underline style change
- Buttons: subtle background lightening or border emphasis
- Accent blue provides a three-stage hover sequence: `#007aff` → `#0056b3` → `#004085` (default → hover → active)
- Danger red: `#ff3b30` → `#d70015` → `#a50011`
- Warning orange: `#ff9f0a` → `#cc7f08` → `#995f06`

### Focus States
- Border-based focus: increased border opacity or solid border color
- No shadow-based focus rings -- consistent with the flat, no-shadow aesthetic
- Keyboard focus likely uses outline or border color shift to accent blue

### Transitions
- Minimal transitions expected -- terminal-inspired interfaces favor instant state changes
- Color transitions: 100-150ms for subtle state feedback
- No scale, rotate, or complex transform animations

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, reduced padding, heading scales down |
| Tablet | 640-1024px | Content width expands, slight padding increase |
| Desktop | >1024px | Full content width (~800-900px centered), maximum whitespace |

### Touch Targets
- Buttons with 4px 20px padding provide adequate horizontal touch area
- Input fields with 20px padding ensure comfortable mobile typing
- Tab items at 16px with tight line-height may need mobile adaptation

### Collapsing Strategy
- Hero heading: 38px → 28px → 24px on smaller screens
- Navigation: horizontal links → hamburger/drawer on mobile
- Feature lists: maintain single-column, reduce horizontal padding
- Terminal hero: maintain full-width, reduce internal padding
- Footer columns: multi-column → stacked single column
- Section spacing: 96px → 64px → 48px on mobile

### Image Behavior
- Terminal screenshots maintain aspect ratio and border treatment
- Full-width elements scale proportionally
- Monospace type maintains readability at all sizes due to fixed-width nature

## 9. Agent Prompt Guide

### Quick Color Reference
- Page background: `#201d1d` (warm near-black)
- Primary text: `#fdfcfc` (warm off-white)
- Secondary text: `#9a9898` (warm gray)
- Muted text: `#6e6e73`
- Accent: `#007aff` (blue)
- Danger: `#ff3b30` (red)
- Success: `#30d158` (green)
- Warning: `#ff9f0a` (orange)
- Button bg: `#201d1d`, button text: `#fdfcfc`
- Border: `rgba(15, 0, 0, 0.12)` (warm transparent)
- Input bg: `#f8f7f7`, input border: `rgba(15, 0, 0, 0.12)`

### Example Component Prompts
- "Create a hero section on `#201d1d` warm dark background. Headline at 38px Berkeley Mono weight 700, line-height 1.50, color `#fdfcfc`. Subtitle at 16px weight 400, color `#9a9898`. Primary CTA button (`#201d1d` bg with `1px solid #646262` border, 4px radius, 4px 20px padding, `#fdfcfc` text at weight 500)."
- "Design a feature list: single-column on `#201d1d` background. Feature name at 16px Berkeley Mono weight 700, color `#fdfcfc`. Description at 16px weight 400, color `#9a9898`. No cards, no borders -- pure text with 16px vertical gap between items."
- "Build an email capture form: `#f8f7f7` background input, `1px solid rgba(15, 0, 0, 0.12)` border, 6px radius, 20px padding. Adjacent dark button (`#201d1d` bg, `#fdfcfc` text, 4px radius, 4px 20px padding). Berkeley Mono throughout."
- "Create navigation: sticky `#201d1d` background. 16px Berkeley Mono weight 500 for links, `#fdfcfc` text. Brand name left-aligned in monospace. Links with underline decoration. No blur, no transparency -- solid dark surface."
- "Design a footer: `#201d1d` background, multi-column link grid. Links at 16px Berkeley Mono weight 400, color `#9a9898`. Section headers at weight 700. Border-top `1px solid rgba(15, 0, 0, 0.12)` separator."

### Iteration Guide
1. Berkeley Mono is the only font -- never introduce a second typeface. Size and weight create all hierarchy.
2. Keep surfaces flat: no shadows, no gradients, no blur effects. Use borders and background shifts only.
3. The warm undertone matters: use `#201d1d` not `#000000`, use `#fdfcfc` not `#ffffff`. The reddish warmth is subtle but essential.
4. Border radius is 4px everywhere except inputs (6px). Never use rounded pills or large radii.
5. Semantic colors follow Apple HIG: `#007aff` blue, `#ff3b30` red, `#30d158` green, `#ff9f0a` orange. Each has hover and active darkened variants.
6. Three-stage interaction: default → hover (darkened) → active (deeply darkened) for all semantic colors.
7. Borders use `rgba(15, 0, 0, 0.12)` -- a warm transparent dark, not neutral gray. This ties borders to the warm palette.
8. Spacing follows an 8px grid: 8, 16, 24, 32, 40, 48, 64, 80, 96px. Use 4px for fine adjustments only.

## 10. Voice & Tone

OpenCode's voice is **OSS-AI-coding-direct and CLI-fluent.** "오픈 소스 AI 코딩 에이전트" — open-source AI coding agent positioning. Warm dark canvas + 4px sharp radius signal "premium developer tool with OSS heritage."

| Context | Tone |
|---|---|
| CTA | Verb. "다운로드", "문서 읽기", "Try it" |
| Marketing | CLI-first. `curl -fsSL https://opencode.ai/install | sh` as hero |
| Documentation | Code-block-heavy, terminal-output-rich |
| Error | Specific. "Model not configured. Run `opencode setup`." |

**Voice samples**
- Marketing CTAs: *"다운로드"* / *"문서 읽기"* <!-- verified: opencode.ai homepage 2026-05 -->
- Hero install snippet: *"curl -fsSL https://opencode.ai/install | sh"* <!-- verified: opencode.ai homepage -->

**Forbidden phrases.** "Revolutionary AI coding". Generic Cursor-comparison framing.

## 11. Brand Narrative

OpenCode is the **open-source AI coding agent** built by **SST (Serverless Stack)** team — designed for terminal-first workflows ([opencode.ai](https://opencode.ai/), [GitHub: sst/opencode](https://github.com/sst/opencode)). Created by **Dax Raad** alongside SST co-founders **Jay (Frank's partner from University of Waterloo, Anomaly co-founder)** and **Frank Wang (CTO)**, with **Adam Elmore** ([Tech Funding News — OpenCode background story](https://techfundingnews.com/opencode-the-background-story-on-the-most-popular-open-source-coding-agent-in-the-world/), [Baseten — Conversation with Dax](https://www.baseten.co/blog/building-ai-agents-open-code-and-open-source-a-conversation-with-dax/)). **SST origin**: Jay + Frank met **first week at University of Waterloo**, launched **Anomaly** (Jay CEO / Frank CTO) → in **2021 took Serverless Stack (SST) through Y Combinator** raising **$1M post-demo-day** with backing from founders of **PayPal, LinkedIn, Yelp, YouTube** — SST grew to **25,000 GitHub stars** and turned profitable in 2025. **OpenCode launched June 19 2024** built from day one as a **server-client architecture** to connect to any frontend (terminal, desktop, web, mobile). Reached **650,000 monthly active users in 5 months** — one of the fastest adoption curves in developer tooling. Dax Raad is also creator of **Zen** (commerce-tech tool, Tier 1 confirms "Zen 알아보기" CTA on opencode.ai homepage cross-promotes Zen). Position: serious developer tool that respects CLI heritage while integrating LLM capabilities.

## 12. Principles

1. **OSS by default.** *UI implication:* GitHub link prominent; self-hosted-first.
2. **Warm dark canvas.** Borders `rgba(15,0,0,0.12)` warm transparent. *UI implication:* preserve warmth.
3. **4px sharp radius.** *UI implication:* never round more.
4. **8px grid.** *UI implication:* preserve 8px spacing; 4px fine adjustments only.
5. **CLI install is the marketing.** *UI implication:* hero shows actual install command.

## 13. Personas

*Personas are fictional archetypes informed by OpenCode user segments (terminal-first developers, OSS-enthusiast engineers, indie SaaS), not individual people.*

**Sergey Volkov, 35, Berlin.** Senior engineer. OpenCode as terminal-native Cursor alternative.

**Sofia Russo, 28, Milan.** Indie developer. Self-hosts OpenCode for privacy.

**Marcus Chen, 41, San Francisco.** Engineering manager. Evaluates OpenCode + Claude vs Cursor.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no projects)** | "Open a folder" CTA |
| **Empty (no chat)** | "Try `opencode chat`" CLI snippet |
| **Loading (model)** | Per-token streaming |
| **Loading (file applying)** | Diff view with applying state |
| **Error (model)** | Specific provider error |
| **Error (apply)** | Diff stays visible + retry |
| **Success (changes)** | File pulse on changed files |
| **Success (commit)** | Multi-file diff success summary |
| **Skeleton (file tree)** | Warm dark placeholders |
| **Disabled (no model configured)** | Setup link |
| **Loading (long agent)** | Persistent progress |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |

Standard cubic-bezier; no bounce. `prefers-reduced-motion: reduce` removes hover transitions.

---

**Verified:** 2026-05-08 (omd:migrate run 43 — Apple-tier)
**Tier 1 sources:** opencode.ai home + /docs (live DOM via playwright — Primary **`#201d1d` Coffee Charcoal** 4px / 40-42px / 8×16×8×10 asym (icon-spacing) / 16px·**500**; Inverse `#fdfcfc` Soft White 4px (Zen cross-promo); install-snippet text-only tabs color-state; doc sidebar `#f8f7f7` active. **Warm-cast color discipline** — no pure black/white anywhere).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders/SST):** opencode.ai/about, GitHub sst/opencode, Tech Funding News (OpenCode background), Baseten (Dax conversation), Codacy blog.
**Style ref:** `stripe`. **Conflicts unresolved:** none. **Earlier addition:** Zen cross-promo Inverse Primary + install-snippet tab system + warm-cast discipline missed by prior pass.
