---
id: friendliai
name: FriendliAI
display_name_kr: 프렌들리에이아이
country: KR
category: ai
homepage: "https://friendli.ai/"
primary_color: "#2a62db"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=friendli.ai&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live 'Get started' CTA blue (#2a62db); link text runs a slightly deeper blue (#2453ba). Ink near-black navy (#0a101a) on a cool-grey canvas (#f7f8fa). Distinctive variable-font weights (530 / 650) via the Saans typeface."
  colors:
    primary: "#2a62db"
    link: "#2453ba"
    accent: "#0095ff"
    ink: "#0a101a"
    slate: "#243b53"
    navy: "#102a43"
    muted: "#486581"
    slate-mid: "#537696"
    grey: "#6e7a84"
    faint: "#a7adb2"
    canvas: "#f7f8fa"
    hairline: "#d9e2ec"
    hairline-soft: "#e5ebf2"
    on-primary: "#ffffff"
    black: "#000000"
  typography:
    family: { sans: "Saans" }
    display-hero: { size: 56, weight: 650, lineHeight: 1.10, use: "Hero headline, Saans SemiBold-ish variable weight" }
    blog-title:   { size: 36, weight: 600, lineHeight: 1.20, use: "Blog article headline" }
    subhead:      { size: 22, weight: 530, lineHeight: 1.30, use: "Hero subheadline, muted slate" }
    nav:          { size: 15, weight: 500, lineHeight: 1.40, use: "Top nav item" }
    body:         { size: 16, weight: 400, lineHeight: 1.55, use: "Standard reading text" }
    button:       { size: 14, weight: 530, use: "Button / CTA label" }
    tag:          { size: 13, weight: 500, use: "Blog topic tag pill" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 48 }
  rounded: { sm: 4, md: 8, lg: 12, xl: 32, full: 360 }
  shadow:
    elevated: "rgba(0,0,0,0.25) 0px 0px 35px 0px"
    none: "none"
  components:
    button-primary: { type: button, bg: "#2a62db", fg: "#ffffff", radius: "4px", height: "32px", padding: "0 12px", font: "14px / 530", use: "Get started primary CTA" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#000000", radius: "4px", height: "32px", padding: "0 12px", font: "14px / 530", use: "Talk to an engineer secondary CTA" }
    feature-card: { type: card, bg: "#ffffff", border: "1px solid #d9e2ec", radius: "32px", padding: "32px", use: "Feature card in homepage grid" }
    elevated-card: { type: card, bg: "#ffffff", radius: "5px", shadow: "rgba(0,0,0,0.25) 0px 0px 35px", padding: "30px", use: "Elevated spotlight card" }
    tag-pill: { type: badge, bg: "#ffffff", fg: "#243b53", border: "1px solid #d9e2ec", radius: "360px", padding: "4px 12px", font: "13px / 500", use: "Blog topic tag pill" }
    highlight-badge: { type: badge, bg: "#0a101a", fg: "#ffffff", radius: "360px", padding: "4px 12px", font: "14px / 500", use: "HIGHLIGHTS label badge" }
    search-input: { type: input, bg: "#ffffff", border: "1px solid #d9e2ec", radius: "360px", padding: "9px 40px", font: "14px", use: "Blog search input, pill" }
    nav-link: { type: tab, fg: "#0a101a", font: "15px / 500", active: "text #2453ba", use: "Top nav item" }
  components_harvested: true
---

# Design System Inspiration of FriendliAI

## 1. Visual Theme & Atmosphere

FriendliAI (프렌들리에이아이) is a Korean AI-infrastructure company whose homepage presents itself as "The Frontier AI Inference Cloud" — and the design reads exactly like that positioning: technical, exact, and quietly confident, the visual language of a systems company that sells throughput and reliability to engineers. The canvas is not pure white but a soft cool-grey (`#f7f8fa`) that keeps large marketing surfaces calm and screen-friendly, with white (`#ffffff`) reserved for the cards and panels that carry content. Text sits in a deep near-black navy (`#0a101a`) rather than true black for body, giving the page an engineered, blue-cool temperature that matches the product domain — GPUs, tokens, and latency graphs.

The single saturated brand color is a decisive royal blue: the primary "Get started" CTA fills with `#2a62db`, while inline links run a marginally deeper, more legible blue (`#2453ba`) that appears hundreds of times across the body copy. A brighter electric blue (`#0095ff`) is held in reserve for the top announcement banner and accent graphics, so the palette climbs in energy from the muted body text up to the loud "ship-now" banner. The rest of the system is a disciplined cool-grey ladder — dark slate (`#243b53`), deep navy (`#102a43`), muted slate (`#486581`), a mid slate (`#537696`), a neutral grey (`#6e7a84`), and a faint grey (`#a7adb2`) — that handles every level of secondary text and dark section.

What distinguishes FriendliAI typographically is its use of **Saans**, a contemporary grotesk deployed as a variable font at unusually precise weights: the hero headline runs at weight **650** (between SemiBold and Bold), subheads at **530**, and CTA labels at **530** — not the default 400/500/600/700 rungs most sites reach for. This micro-tuned weight scale is the brand's typographic signature: it reads as engineered rather than decorated. Depth is minimal — most separation comes from `#d9e2ec` hairlines and the cool-grey canvas — but the system does keep one dramatic elevation for spotlight cards (a soft `rgba(0,0,0,0.25) 0px 0px 35px` ambient glow). Geometry is split: sharp 4px radii on buttons, generous 32px radii on feature cards, and full 360px pills on tags and the search field.

**Key Characteristics:**
- Saans grotesk at micro-tuned variable weights — hero at 650, subhead/buttons at 530, not the usual 400/600/700 rungs
- Royal-blue action color (`#2a62db`) for CTAs, deeper blue (`#2453ba`) for inline links
- Cool-grey canvas (`#f7f8fa`) with white (`#ffffff`) cards — never a stark white page
- Near-black navy (`#0a101a`) body text instead of pure black, for an engineered cool temperature
- Bright electric blue (`#0095ff`) reserved for the top announcement banner and accents
- Disciplined cool-grey text ladder: `#243b53` → `#486581` → `#537696` → `#6e7a84` → `#a7adb2`
- Split geometry — 4px button corners, 32px card corners, 360px full pills for tags/search
- Mostly flat: `#d9e2ec` hairlines carry separation, with one soft ambient glow for spotlight cards

## 2. Color Palette & Roles

### Primary & Action
- **Friendli Blue** (`#2a62db`): Primary brand and action color. Fills the "Get started" CTA — the system's single primary action.
- **Link Blue** (`#2453ba`): The inline link and active-nav color; a slightly deeper, more legible blue than the CTA. The most frequent non-neutral color in body copy.
- **Electric Blue** (`#0095ff`): A brighter accent held for the top announcement banner ("GLM-5.2 is live…") and highlight graphics.

### Ink & Dark
- **Ink Navy** (`#0a101a`): Primary text and heading color; a near-black navy used instead of pure black. Also the fill of the dark HIGHLIGHTS badge.
- **Dark Slate** (`#243b53`): Dark-section background and the text color of white topic-tag pills.
- **Deep Navy** (`#102a43`): The darkest section background, for immersive brand blocks.
- **Pure Black** (`#000000`): Occasional maximum-contrast label (e.g. the secondary "Talk to an engineer" button text).

### Neutral & Text Ladder
- **Muted Slate** (`#486581`): Hero subheadline and secondary headings.
- **Mid Slate** (`#537696`): Lower-emphasis links such as "Log in".
- **Grey** (`#6e7a84`): Tertiary body text and metadata.
- **Faint Grey** (`#a7adb2`): Lowest-emphasis labels, disabled text, placeholders.

### Surface & Border
- **Canvas Grey** (`#f7f8fa`): The default page background — a cool near-white that keeps marketing surfaces calm.
- **Pure White** (`#ffffff`): Cards, panels, buttons, and text on blue/dark.
- **Hairline** (`#d9e2ec`): The primary separation device — card borders, the search-input outline, dividers.
- **Hairline Soft** (`#e5ebf2`): A lighter hairline used on inline links and subtle borders.
- **On-Primary** (`#ffffff`): Text/icon color on the blue CTA and dark badges.

## 3. Typography Rules

### Font Family
- **Sans**: `Saans` (served as `SaansLocalFont` with a local fallback) — used for every text element, from hero to nav to body. FriendliAI does not split display and body across two families; Saans carries the whole system.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Saans | 56px (3.50rem) | 650 | 1.10 (tight) | Hero H1 "The Frontier AI Inference Cloud" |
| Blog Title | Saans | 36px (2.25rem) | 600 | 1.20 | Blog article headline |
| Hero Subhead | Saans | 22px (1.38rem) | 530 | 1.30 | Muted-slate (`#486581`) supporting line |
| Nav Item | Saans | 15px (0.94rem) | 500 | 1.40 | Top navigation links |
| Body | Saans | 16px (1.00rem) | 400 | 1.55 (24.8px) | Standard reading text |
| Button | Saans | 14px (0.88rem) | 530 | — | CTA / button labels |
| Tag | Saans | 13px (0.81rem) | 500 | — | Blog topic-tag pills |

### Principles
- **Micro-tuned variable weights**: The signature choice. Saans runs at 650 for the hero, 530 for subheads and buttons, 600 for blog titles — precise interpolations rather than the default 400/500/600/700 rungs. The weight scale itself signals engineering rigor.
- **One family, all roles**: Saans covers display, nav, body, and UI. Hierarchy is built from size and variable weight, not from swapping typefaces.
- **Cool near-black body**: Body text is `#0a101a` navy, not pure black — the same cool temperature as the product's data-heavy surfaces.
- **Comfortable body rhythm**: Body sits at 16px with a generous 1.55 line-height (24.8px), keeping long technical paragraphs readable.

## 4. Component Stylings

### Buttons

**Get Started (Primary)**
- Background: `#2a62db`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 12px
- Height: 32px
- Font: 14px Saans weight 530
- Use: Header and hero primary CTA — the system's single primary action

**Talk to an Engineer (Secondary)**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 4px
- Padding: 0px 12px
- Height: 32px
- Font: 14px Saans weight 530
- Use: Secondary header CTA, sitting beside the primary blue button

**Log in (Quiet)**
- Text: `#537696`
- Radius: 4px
- Padding: 0px 4px
- Height: 32px
- Font: 14px Saans weight 530
- Use: Lowest-emphasis text link in the header

### Inputs & Forms

**Search (Pill)**
- Background: `#ffffff`
- Border: 1px solid `#d9e2ec`
- Radius: 360px
- Padding: 9px 40px
- Font: 14px Saans
- Use: Blog search field — a full-pill input with a leading search icon ("Search blogs")

### Cards & Containers

**Feature Card**
- Background: `#ffffff`
- Border: 1px solid `#d9e2ec`
- Radius: 32px
- Padding: 32px
- Use: Feature card in the homepage grid — large rounded corners, hairline border, no shadow

**Elevated Spotlight Card**
- Background: `#ffffff`
- Radius: 5px
- Padding: 30px
- Shadow: `rgba(0,0,0,0.25) 0px 0px 35px 0px`
- Use: A single elevated card with a soft ambient glow, used to spotlight a headline result

### Badges

**Topic Tag Pill**
- Background: `#ffffff`
- Text: `#243b53`
- Border: 1px solid `#d9e2ec`
- Radius: 360px
- Padding: 4px 12px
- Font: 13px Saans weight 500
- Use: Blog topic tags ("GLM-5.2", "Inference", "NVIDIA")

**HIGHLIGHTS Badge**
- Background: `#0a101a`
- Text: `#ffffff`
- Radius: 360px
- Padding: 4px 12px
- Font: 14px Saans weight 500
- Use: Dark section label on the blog ("HIGHLIGHTS")

### Navigation
- Background: `#ffffff`
- Text: `#0a101a`
- Font: 15px Saans weight 500
- Active: link blue `#2453ba`
- Use: Top horizontal nav ("Product", "Solutions", "Models", "Developers", "Customers", "Company", "Pricing")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://friendli.ai/, https://friendli.ai/blog, https://docs.friendli.ai/guides/intro
**Tier 2 sources:** getdesign.md/friendliai — 0 DESIGN.md files (no entry); styles.refero.design/?q=friendli — no FriendliAI match (default browse grid returned)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 30px, 32px, 48px
- Notable: Card padding lands at a generous 32px; buttons stay compact at 0px 12px horizontal for a tight, dense header

### Grid & Container
- Centered single-column hero with the 56px Saans headline as the anchor, muted subhead beneath
- Feature sections use a multi-column grid of 32px-radius white cards on the grey canvas
- A sticky top announcement banner (`#0095ff`) rides above the nav for launch news
- Dark immersive sections use `#102a43` / `#243b53` backgrounds with white text

### Whitespace Philosophy
- **Calm canvas, contained content**: The cool-grey (`#f7f8fa`) canvas keeps the page quiet; content is pulled into white cards so data and copy sit on clean surfaces.
- **Hairline separation**: Sections and cards separate with `#d9e2ec` hairlines rather than heavy shadow, keeping the system flat and fast.
- **One glow, used sparingly**: The single ambient `rgba(0,0,0,0.25) 0px 0px 35px` shadow appears only on a spotlight card, so elevation reads as intentional emphasis.

### Border Radius Scale
- Small (4px): buttons, quiet links
- Medium (8px): inline chrome, small containers
- Large (12px): mid-size panels
- Extra-large (32px): feature cards — the distinctive soft-cornered block
- Full (360px): tag pills, the search input, round chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, body text, most sections |
| Tint (Level 1) | `#f7f8fa` canvas vs `#ffffff` card | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #d9e2ec` border | Feature-card outlines, search input, dividers |
| Ambient (Level 3) | `rgba(0,0,0,0.25) 0px 0px 35px 0px` | The single spotlight card — a soft symmetric glow |

**Shadow Philosophy**: FriendliAI is a near-flat system. Nav, hero, feature cards, and tags carry no shadow; grouping is done with the cool-grey canvas (`#f7f8fa`) and `#d9e2ec` hairlines. The one exception is a symmetric ambient glow (`rgba(0,0,0,0.25) 0px 0px 35px 0px`) reserved for a single spotlight card, so elevation is a deliberate signal of "look here" rather than a default decoration. This restraint reads as engineered — depth is a tool, not a texture.

## 7. Do's and Don'ts

### Do
- Use Saans at its micro-tuned variable weights (650 hero, 530 subhead/buttons, 600 blog titles) — the precise weight scale is the brand voice
- Reserve `#2a62db` for the primary CTA and `#2453ba` for inline links — keep blue as the single action/interaction color
- Set body and headings in near-black navy (`#0a101a`), not pure black
- Sit content on white (`#ffffff`) cards over the cool-grey (`#f7f8fa`) canvas
- Separate cards and sections with `#d9e2ec` hairlines, not shadows
- Use 32px radii on feature cards and 360px pills on tags and the search field
- Hold the bright electric blue (`#0095ff`) for the announcement banner and accents only
- Keep buttons compact (32px height, 4px radius, 0px 12px padding) for a dense, engineered header

### Don't
- Reach for the default 400/600/700 weight rungs — Saans is tuned to 530/650, and generic weights break the signature
- Spread blue across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve near-black navy `#0a101a` (black is only the secondary-button label)
- Stack heavy drop shadows on cards — the system is flat, with one intentional ambient glow
- Put the whole page on stark white — the cool-grey `#f7f8fa` canvas is the base
- Use sharp square corners on tags or the search field — those are full pills
- Mix in a second saturated hue — the blues are the only accents on the neutral ladder

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses, feature cards stack, nav collapses to a menu |
| Tablet | 640-1024px | 2-column feature grid, moderate padding |
| Desktop | 1024-1440px | Full multi-column layout, centered hero, sticky announcement banner |

### Touch Targets
- Primary/secondary buttons at 32px height with 12px horizontal padding
- Tag pills and the search input use full 360px radius for clear, tappable shapes
- Nav items spaced within a comfortable header band

### Collapsing Strategy
- Hero: 56px Saans headline scales down on mobile; weight 650 maintained
- Feature cards: multi-column grid → 2-up → single stacked column, 32px radius preserved
- Announcement banner: full-width `#0095ff` bar persists, text truncates
- Dark sections: maintain full-width `#102a43` / `#243b53` treatment, reduce internal padding

### Image Behavior
- Product/architecture diagrams sit inside white cards with hairline borders
- Cards maintain 32px radius across breakpoints
- The spotlight card keeps its ambient glow at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Friendli Blue (`#2a62db`)
- Inline link / active nav: Link Blue (`#2453ba`)
- Announcement / accent: Electric Blue (`#0095ff`)
- Heading / body text: Ink Navy (`#0a101a`)
- Dark section: Deep Navy (`#102a43`) / Dark Slate (`#243b53`)
- Subhead / secondary text: Muted Slate (`#486581`)
- Quiet link: Mid Slate (`#537696`)
- Tertiary text: Grey (`#6e7a84`)
- Faint / disabled: Faint Grey (`#a7adb2`)
- Canvas: Canvas Grey (`#f7f8fa`)
- Card / surface: Pure White (`#ffffff`)
- Border: Hairline (`#d9e2ec`), Hairline Soft (`#e5ebf2`)
- Secondary-button label: Pure Black (`#000000`)

### Example Component Prompts
- "Create a hero on a `#f7f8fa` canvas. Headline at 56px Saans weight 650, line-height 1.10, color `#0a101a`. Subhead at 22px weight 530, color `#486581`. Primary CTA: `#2a62db` background, white text, 4px radius, 32px height, 0px 12px padding, 14px weight 530 — 'Get started'. Beside it a white secondary button (`#ffffff` bg, `#000000` text, 4px radius) — 'Talk to an engineer'."
- "Design a feature card: white `#ffffff` background, 1px solid `#d9e2ec` border, 32px radius, 32px padding, no shadow. Title in `#0a101a`, body in `#6e7a84`."
- "Build a topic tag pill: white background, `#243b53` text, 1px solid `#d9e2ec` border, 360px radius, 4px 12px padding, 13px Saans weight 500."
- "Create a top nav on white: Saans 15px weight 500 items in `#0a101a`, active item in link blue `#2453ba`. Right-aligned `#2a62db` 'Get started' pill-adjacent button."

### Iteration Guide
1. Saans everywhere; hero at weight 650, subheads/buttons at 530, blog titles at 600
2. `#2a62db` is the CTA, `#2453ba` is the link — keep blue as the single interaction color
3. Content on white `#ffffff` cards over the `#f7f8fa` grey canvas
4. Separate with `#d9e2ec` hairlines; reserve the one `rgba(0,0,0,0.25) 0px 0px 35px` glow for a spotlight card
5. Split geometry: 4px buttons, 32px feature cards, 360px pills
6. Body/heading text is `#0a101a` navy, never pure black
7. Hold `#0095ff` for the announcement banner and accents only

---

## 10. Voice & Tone

FriendliAI's voice is **precise, benchmark-driven, and developer-first** — the register of an infrastructure company that competes on measurable performance (throughput, latency, cost) and lets the numbers do the persuading. The hero line "The Frontier AI Inference Cloud" is declarative and category-claiming, not hypey; the supporting line "Inference performance drives profitability" frames the pitch in a business outcome an engineer can defend to finance. Announcements are concrete and comparative ("GLM-5.2 is live. #1 throughput on OpenRouter"), naming the exact model and the exact metric rather than reaching for adjectives.

| Context | Tone |
|---|---|
| Hero headline | Declarative, category-claiming. "The Frontier AI Inference Cloud." No superlatives. |
| Supporting line | Business-outcome framed. "Inference performance drives profitability." |
| Announcements | Concrete and comparative — names the model and the metric. "#1 throughput on OpenRouter." |
| CTAs | Direct, low-friction. "Get started", "Talk to an engineer". |
| Blog / technical | Engineer-to-engineer: benchmarks, model names, architecture, reproducible claims. |

**Voice samples (verbatim from live surfaces):**
- "The Frontier AI Inference Cloud" — hero H1 (category claim). *(verified live 2026-07-02, friendli.ai)*
- "Inference performance drives profitability" — hero subhead (business framing). *(verified live 2026-07-02, friendli.ai)*
- "GLM-5.2 is live. #1 throughput on OpenRouter" — announcement banner (concrete, comparative). *(verified live 2026-07-02, friendli.ai)*
- "Talk to an engineer" — secondary CTA (developer-first, not "Book a demo"). *(verified live 2026-07-02, friendli.ai)*

**Forbidden register**: vague hype ("revolutionary", "game-changing"), unquantified performance claims, consumer-app exclamation, sales-gated basic functionality ("Request a demo" in place of "Get started"), stacked adjectives on capabilities.

## 11. Brand Narrative

FriendliAI (프렌들리에이아이) is a Korean AI-infrastructure company built around a single problem: serving generative-AI models in production is slow and expensive, and the cost of inference — not training — is what determines whether an AI product is viable at scale. The company's answer is an inference cloud engineered for throughput and cost-efficiency, offered as dedicated endpoints, serverless endpoints, and self-hosted containers, so teams can run open and custom models without building serving infrastructure themselves. The homepage states the thesis plainly: *"Inference performance drives profitability."*

The brand's origin is academic and engineering-led — it grew out of systems research on efficient large-model serving, and its founding premise reframes inference from a fixed cost into an optimization surface. That research heritage shows up everywhere in the design: benchmark-first messaging, model names and metrics quoted verbatim, and a "Talk to an engineer" CTA that treats the visitor as a technical peer rather than a lead to be qualified.

What FriendliAI refuses, visible in its design: consumer-app hype and demo-gating (the primary CTA is "Get started", the secondary is "Talk to an engineer" — never "Request a demo" in their place), and the decorative heaviness of legacy enterprise software. What it embraces: a calm cool-grey canvas, one decisive blue, the micro-tuned Saans weight scale, and copy that quotes exact throughput numbers. It is the visual language of a company that expects to be judged on benchmarks.

## 12. Principles

1. **Numbers over adjectives.** Performance is stated as measurements ("#1 throughput on OpenRouter"), not superlatives. *UI implication:* surface concrete metrics — tokens/s, latency, cost — as first-class content, set in the tabular-friendly Saans; never replace a number with a boast.
2. **Engineer as first-class user.** The buyer is technical. *UI implication:* the primary path is "Get started" and "Talk to an engineer" — self-serve and peer-to-peer, never "Request a demo" gating.
3. **One action, one blue.** `#2a62db` means "do this"; `#2453ba` means "go here". *UI implication:* keep blue reserved for CTAs and links so the next step is never ambiguous on a dense technical page.
4. **Flat and fast.** Depth is a tool, not a texture. *UI implication:* separate with the `#f7f8fa` canvas and `#d9e2ec` hairlines; reserve the single ambient glow for one spotlight moment.
5. **Precision as personality.** The micro-tuned Saans weights (530, 650) are the brand's fingerprint. *UI implication:* honor the exact weight scale; generic 400/600/700 reads as a different, less rigorous product.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable FriendliAI user segments (ML platform engineers, AI product teams, infrastructure leads), not individual people.*

**Daniel Cho, 33, Seoul.** ML platform engineer at a scale-up shipping an LLM feature. Cares about tokens-per-second and per-request cost more than brand. Chose FriendliAI after reading a throughput benchmark and being able to spin up an endpoint without a sales call.

**Priya Nair, 29, San Francisco.** Founding engineer at an AI startup running open models in production. Uses "Talk to an engineer" precisely because it is not "Book a demo" — she wants an architecture conversation, not a pitch. Trusts vendors who quote metrics she can reproduce.

**Marcus Feld, 41, Berlin.** Infrastructure lead at a mid-size SaaS integrating generative AI. Evaluates inference providers on cost predictability and reliability. Reads the FriendliAI blog for model-serving benchmarks and mentally downgrades any vendor whose landing page leans on unquantified "revolutionary" claims.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no endpoints yet)** | White `#ffffff` card on the `#f7f8fa` canvas. Single Ink Navy (`#0a101a`) line explaining no endpoints exist, with one `#2a62db` "Get started" CTA. No decorative illustration. |
| **Empty (no results / blog search)** | Muted Slate (`#486581`) single line stating nothing matched, with the search field (360px pill) kept visible to adjust the query. |
| **Loading (dashboard first paint)** | Skeleton blocks at final dimensions in Hairline (`#d9e2ec`) on the white card, 32px radius preserved. Flat pulse, no shadow shimmer. |
| **Loading (inference request in flight)** | Inline progress within the panel; previous values stay visible. A thin `#2a62db` indicator, never a full-screen block. |
| **Error (request failed)** | Inline message in Ink Navy with a plain-language explanation plus the concrete error/status and a retry. No generic "Something went wrong" alone. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "Required". |
| **Success (endpoint deployed)** | Brief inline confirmation in a calm tone; the endpoint detail and metrics linked immediately below. No celebratory emoji. |
| **Skeleton** | `#d9e2ec` blocks at final dimensions, matching card radius, flat pulse consistent with the near-flat system. |
| **Disabled** | Faint Grey (`#a7adb2`) text on a reduced-opacity surface; the blue CTA fades rather than turning grey, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus rings |
| `motion-standard` | 200ms | Card reveal, dropdown, sheet, tab change |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, matching the engineered, near-flat aesthetic. Buttons respond to press with a subtle opacity/scale shift; feature cards and benchmark panels fade-in from below at `motion-standard / ease-enter`. The one ambient-glow spotlight card may intensify its glow slightly on hover, but nothing bounces or springs — an inference-infrastructure product signals steadiness and reliability, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10-15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on:
- https://friendli.ai/ (homepage) — hero H1 "The Frontier AI Inference Cloud" (Saans 56px / weight 650 / color rgb(10,16,26) #0a101a); subhead H2 "Inference performance drives profitability" (22px / 530 / rgb(72,101,129) #486581); "Get started" CTA bg rgb(42,98,219) #2a62db / white / radius 4px / 32px height; "Talk to an engineer" bg white / black text; announcement banner "GLM-5.2 is live. #1 throughput on OpenRouter" bg rgb(0,149,255) #0095ff; feature cards white / 1px #d9e2ec / 32px radius; body font SaansLocalFont / rgb(10,16,26) / 16px / lh 24.8px; canvas rgb(247,248,250) #f7f8fa.
- https://friendli.ai/blog (blog) — blog H1 36px / weight 600; HIGHLIGHTS badge bg rgb(10,16,26) #0a101a / white / 360px pill; topic tag pills white / rgb(36,59,83) #243b53 / 360px; search input white / 1px rgb(217,226,236) #d9e2ec / 360px pill.

Token-level claims (§1-9) are sourced from this live inspection (see web/references/friendliai/.verification.md for raw samples).

Voice samples (§10) are verbatim from the live homepage (hero H1, subhead H2, announcement banner, secondary CTA).

Brand narrative (§11): FriendliAI (프렌들리에이아이) is a Korean AI-infrastructure company providing a generative-AI inference cloud (dedicated endpoints, serverless endpoints, containers). The company positioning "The Frontier AI Inference Cloud" and "Inference performance drives profitability" are verbatim from the live homepage. Founding/heritage framing (systems research on efficient large-model serving) is general public knowledge about the company, not a directly quoted FriendliAI statement in this turn; product structure (dedicated/serverless endpoints, container) reflects the site's Product/Solutions navigation observed live.

Personas (§13) are fictional archetypes informed by publicly observable FriendliAI user segments (ML platform engineers, AI product teams, infrastructure leads). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "numbers over adjectives", "engineer as first-class user", "precision as personality") are editorial readings connecting FriendliAI's observed design and copy to its positioning, not directly sourced FriendliAI statements.
-->
