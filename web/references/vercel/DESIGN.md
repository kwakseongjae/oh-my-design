---
omd: 0.1
brand: Vercel
---

# Design System Inspiration of Vercel

## 1. Visual Theme & Atmosphere

Vercel's website is the visual thesis of developer infrastructure made invisible — a design system so restrained it borders on philosophical. The page is overwhelmingly white (`#ffffff`) with near-black (`#171717`) text, creating a gallery-like emptiness where every element earns its pixel. This isn't minimalism as decoration; it's minimalism as engineering principle. The Geist design system treats the interface like a compiler treats code — every unnecessary token is stripped away until only structure remains.

The custom Geist font family is the crown jewel. Geist Sans uses aggressive negative letter-spacing (-2.4px to -2.88px at display sizes), creating headlines that feel compressed, urgent, and engineered — like code that's been minified for production. At body sizes, the tracking relaxes but the geometric precision persists. Geist Mono completes the system as the monospace companion for code, terminal output, and technical labels. Both fonts enable OpenType `"liga"` (ligatures) globally, adding a layer of typographic sophistication that rewards close reading.

What distinguishes Vercel from other monochrome design systems is its shadow-as-border philosophy. Instead of traditional CSS borders, Vercel uses `box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08)` — a zero-offset, zero-blur, 1px-spread shadow that creates a border-like line without the box model implications. This technique allows borders to exist in the shadow layer, enabling smoother transitions, rounded corners without clipping, and a subtler visual weight than traditional borders. The entire depth system is built on layered, multi-value shadow stacks where each layer serves a specific purpose: one for the border, one for soft elevation, one for ambient depth.

**Key Characteristics:**
- Geist Sans with extreme negative letter-spacing (-2.4px to -2.88px at display) — text as compressed infrastructure
- Geist Mono for code and technical labels with OpenType `"liga"` globally
- Shadow-as-border technique: `box-shadow 0px 0px 0px 1px` replaces traditional borders throughout
- Multi-layer shadow stacks for nuanced depth (border + elevation + ambient in single declarations)
- Near-pure white canvas with `#171717` text — not quite black, creating micro-contrast softness
- Workflow-specific accent colors: Ship Red (`#ff5b4f`), Preview Pink (`#de1d8d`), Develop Blue (`#0a72ef`)
- Focus ring system using `hsla(212, 100%, 48%, 1)` — a saturated blue for accessibility
- Pill badges (9999px) with tinted backgrounds for status indicators

## 2. Color Palette & Roles

### Primary
- **Vercel Black** (`#171717`): Primary text, headings, dark surface backgrounds. Not pure black — the slight warmth prevents harshness.
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on dark.
- **True Black** (`#000000`): Secondary use, `--geist-console-text-color-default`, used in specific console/code contexts.

### Workflow Accent Colors
- **Ship Red** (`#ff5b4f`): `--ship-text`, the "ship to production" workflow step — warm, urgent coral-red.
- **Preview Pink** (`#de1d8d`): `--preview-text`, the preview deployment workflow — vivid magenta-pink.
- **Develop Blue** (`#0a72ef`): `--develop-text`, the development workflow — bright, focused blue.

### Console / Code Colors
- **Console Blue** (`#0070f3`): `--geist-console-text-color-blue`, syntax highlighting blue.
- **Console Purple** (`#7928ca`): `--geist-console-text-color-purple`, syntax highlighting purple.
- **Console Pink** (`#eb367f`): `--geist-console-text-color-pink`, syntax highlighting pink.

### Interactive
- **Link Blue** (`#0072f5`): Primary link color with underline decoration.
- **Focus Blue** (`hsla(212, 100%, 48%, 1)`): `--ds-focus-color`, focus ring on interactive elements.
- **Ring Blue** (`rgba(147, 197, 253, 0.5)`): `--tw-ring-color`, Tailwind ring utility.

### Neutral Scale
- **Gray 900** (`#171717`): Primary text, headings, nav text.
- **Gray 600** (`#4d4d4d`): Secondary text, description copy.
- **Gray 500** (`#666666`): Tertiary text, muted links.
- **Gray 400** (`#808080`): Placeholder text, disabled states.
- **Gray 100** (`#ebebeb`): Borders, card outlines, dividers.
- **Gray 50** (`#fafafa`): Subtle surface tint, inner shadow highlight.

### Surface & Overlay
- **Overlay Backdrop** (`hsla(0, 0%, 98%, 1)`): `--ds-overlay-backdrop-color`, modal/dialog backdrop.
- **Selection Text** (`hsla(0, 0%, 95%, 1)`): `--geist-selection-text-color`, text selection highlight.
- **Badge Blue Bg** (`#ebf5ff`): Pill badge background, tinted blue surface.
- **Badge Blue Text** (`#0068d6`): Pill badge text, darker blue for readability.

### Shadows & Depth
- **Border Shadow** (`rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`): The signature — replaces traditional borders.
- **Subtle Elevation** (`rgba(0, 0, 0, 0.04) 0px 2px 2px`): Minimal lift for cards.
- **Card Stack** (`rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, rgba(0,0,0,0.04) 0px 8px 8px -8px, #fafafa 0px 0px 0px 1px`): Full multi-layer card shadow.
- **Ring Border** (`rgb(235, 235, 235) 0px 0px 0px 1px`): Light gray ring-border for tabs and images.

## 3. Typography Rules

### Font Family
- **Primary**: `Geist`, with fallbacks: `Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`
- **Monospace**: `Geist Mono`, with fallbacks: `ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New`
- **OpenType Features**: `"liga"` enabled globally on all Geist text; `"tnum"` for tabular numbers on specific captions.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Geist | 48px (3.00rem) | 600 | 1.00–1.17 (tight) | -2.4px to -2.88px | Maximum compression, billboard impact |
| Section Heading | Geist | 40px (2.50rem) | 600 | 1.20 (tight) | -2.4px | Feature section titles |
| Sub-heading Large | Geist | 32px (2.00rem) | 600 | 1.25 (tight) | -1.28px | Card headings, sub-sections |
| Sub-heading | Geist | 32px (2.00rem) | 400 | 1.50 | -1.28px | Lighter sub-headings |
| Card Title | Geist | 24px (1.50rem) | 600 | 1.33 | -0.96px | Feature cards |
| Card Title Light | Geist | 24px (1.50rem) | 500 | 1.33 | -0.96px | Secondary card headings |
| Body Large | Geist | 20px (1.25rem) | 400 | 1.80 (relaxed) | normal | Introductions, feature descriptions |
| Body | Geist | 18px (1.13rem) | 400 | 1.56 | normal | Standard reading text |
| Body Small | Geist | 16px (1.00rem) | 400 | 1.50 | normal | Standard UI text |
| Body Medium | Geist | 16px (1.00rem) | 500 | 1.50 | normal | Navigation, emphasized text |
| Body Semibold | Geist | 16px (1.00rem) | 600 | 1.50 | -0.32px | Strong labels, active states |
| Button / Link | Geist | 14px (0.88rem) | 500 | 1.43 | normal | Buttons, links, captions |
| Button Small | Geist | 14px (0.88rem) | 400 | 1.00 (tight) | normal | Compact buttons |
| Caption | Geist | 12px (0.75rem) | 400–500 | 1.33 | normal | Metadata, tags |
| Mono Body | Geist Mono | 16px (1.00rem) | 400 | 1.50 | normal | Code blocks |
| Mono Caption | Geist Mono | 13px (0.81rem) | 500 | 1.54 | normal | Code labels |
| Mono Small | Geist Mono | 12px (0.75rem) | 500 | 1.00 (tight) | normal | `text-transform: uppercase`, technical labels |
| Micro Badge | Geist | 7px (0.44rem) | 700 | 1.00 (tight) | normal | `text-transform: uppercase`, tiny badges |

### Principles
- **Compression as identity**: Geist Sans at display sizes uses -2.4px to -2.88px letter-spacing — the most aggressive negative tracking of any major design system. This creates text that feels _minified_, like code optimized for production. The tracking progressively relaxes as size decreases: -1.28px at 32px, -0.96px at 24px, -0.32px at 16px, and normal at 14px.
- **Ligatures everywhere**: Every Geist text element enables OpenType `"liga"`. Ligatures aren't decorative — they're structural, creating tighter, more efficient glyph combinations.
- **Three weights, strict roles**: 400 (body/reading), 500 (UI/interactive), 600 (headings/emphasis). No bold (700) except for tiny micro-badges. This narrow weight range creates hierarchy through size and tracking, not weight.
- **Mono for identity**: Geist Mono in uppercase with `"tnum"` or `"liga"` serves as the "developer console" voice — compact technical labels that connect the marketing site to the product.

## 4. Component Stylings

### Buttons

**Primary White (Shadow-bordered)**
- Background: `#ffffff`
- Text: `#171717`
- Padding: 0px 6px (minimal — content-driven width)
- Radius: 6px (subtly rounded)
- Shadow: `rgb(235, 235, 235) 0px 0px 0px 1px` (ring-border)
- Hover: background shifts to `var(--ds-gray-1000)` (dark)
- Focus: `2px solid var(--ds-focus-color)` outline + `var(--ds-focus-ring)` shadow
- Use: Standard secondary button

**Primary Dark (Inferred from Geist system)**
- Background: `#171717`
- Text: `#ffffff`
- Padding: 8px 16px
- Radius: 6px
- Use: Primary CTA ("Start Deploying", "Get Started")

**Pill Button / Badge**
- Background: `#ebf5ff` (tinted blue)
- Text: `#0068d6`
- Padding: 0px 10px
- Radius: 9999px (full pill)
- Font: 12px weight 500
- Use: Status badges, tags, feature labels

**Large Pill (Navigation)**
- Background: transparent or `#171717`
- Radius: 64px–100px
- Use: Tab navigation, section selectors

### Cards & Containers
- Background: `#ffffff`
- Border: via shadow — `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`
- Radius: 8px (standard), 12px (featured/image cards)
- Shadow stack: `rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, #fafafa 0px 0px 0px 1px`
- Image cards: `1px solid #ebebeb` with 12px top radius
- Hover: subtle shadow intensification

### Inputs & Forms
- Radio: standard styling with focus `var(--ds-gray-200)` background
- Focus shadow: `1px 0 0 0 var(--ds-gray-alpha-600)`
- Focus outline: `2px solid var(--ds-focus-color)` — consistent blue focus ring
- Border: via shadow technique, not traditional border

### Navigation
- Clean horizontal nav on white, sticky
- Vercel logotype left-aligned, 262x52px
- Links: Geist 14px weight 500, `#171717` text
- Active: weight 600 or underline
- CTA: dark pill buttons ("Start Deploying", "Contact Sales")
- Mobile: hamburger menu collapse
- Product dropdowns with multi-level menus

### Image Treatment
- Product screenshots with `1px solid #ebebeb` border
- Top-rounded images: `12px 12px 0px 0px` radius
- Dashboard/code preview screenshots dominate feature sections
- Soft gradient backgrounds behind hero images (pastel multi-color)

### Distinctive Components

**Workflow Pipeline**
- Three-step horizontal pipeline: Develop → Preview → Ship
- Each step has its own accent color: Blue → Pink → Red
- Connected with lines/arrows
- The visual metaphor for Vercel's core value proposition

**Trust Bar / Logo Grid**
- Company logos (Perplexity, ChatGPT, Cursor, etc.) in grayscale
- Horizontal scroll or grid layout
- Subtle `#ebebeb` border separation

**Metric Cards**
- Large number display (e.g., "10x faster")
- Geist 48px weight 600 for the metric
- Description below in gray body text
- Shadow-bordered card container

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 14px, 16px, 32px, 36px, 40px
- Notable gap: jumps from 16px to 32px — no 20px or 24px in primary scale

### Grid & Container
- Max content width: approximately 1200px
- Hero: centered single-column with generous top padding
- Feature sections: 2–3 column grids for cards
- Full-width dividers using `border-bottom: 1px solid #171717`
- Code/dashboard screenshots as full-width or contained with border

### Whitespace Philosophy
- **Gallery emptiness**: Massive vertical padding between sections (80px–120px+). The white space IS the design — it communicates that Vercel has nothing to prove and nothing to hide.
- **Compressed text, expanded space**: The aggressive negative letter-spacing on headlines is counterbalanced by generous surrounding whitespace. The text is dense; the space around it is vast.
- **Section rhythm**: White sections alternate with white sections — there's no color variation between sections. Separation comes from borders (shadow-borders) and spacing alone.

### Border Radius Scale
- Micro (2px): Inline code snippets, small spans
- Subtle (4px): Small containers
- Standard (6px): Buttons, links, functional elements
- Comfortable (8px): Cards, list items
- Image (12px): Featured cards, image containers (top-rounded)
- Large (64px): Tab navigation pills
- XL (100px): Large navigation links
- Full Pill (9999px): Badges, status pills, tags
- Circle (50%): Menu toggle, avatar containers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, text blocks |
| Ring (Level 1) | `rgba(0,0,0,0.08) 0px 0px 0px 1px` | Shadow-as-border for most elements |
| Light Ring (Level 1b) | `rgb(235,235,235) 0px 0px 0px 1px` | Lighter ring for tabs, images |
| Subtle Card (Level 2) | Ring + `rgba(0,0,0,0.04) 0px 2px 2px` | Standard cards with minimal lift |
| Full Card (Level 3) | Ring + Subtle + `rgba(0,0,0,0.04) 0px 8px 8px -8px` + inner `#fafafa` ring | Featured cards, highlighted panels |
| Focus (Accessibility) | `2px solid hsla(212, 100%, 48%, 1)` outline | Keyboard focus on all interactive elements |

**Shadow Philosophy**: Vercel has arguably the most sophisticated shadow system in modern web design. Rather than using shadows for elevation in the traditional Material Design sense, Vercel uses multi-value shadow stacks where each layer has a distinct architectural purpose: one creates the "border" (0px spread, 1px), another adds ambient softness (2px blur), another handles depth at distance (8px blur with negative spread), and an inner ring (`#fafafa`) creates the subtle highlight that makes the card "glow" from within. This layered approach means cards feel built, not floating.

### Decorative Depth
- Hero gradient: soft, pastel multi-color gradient wash behind hero content (barely visible, atmospheric)
- Section borders: `1px solid #171717` (full dark line) between major sections
- No background color variation — depth comes entirely from shadow layering and border contrast

## 7. Do's and Don'ts

### Do
- Use Geist Sans with aggressive negative letter-spacing at display sizes (-2.4px to -2.88px at 48px)
- Use shadow-as-border (`0px 0px 0px 1px rgba(0,0,0,0.08)`) instead of traditional CSS borders
- Enable `"liga"` on all Geist text — ligatures are structural, not optional
- Use the three-weight system: 400 (body), 500 (UI), 600 (headings)
- Apply workflow accent colors (Red/Pink/Blue) only in their workflow context
- Use multi-layer shadow stacks for cards (border + elevation + ambient + inner highlight)
- Keep the color palette achromatic — grays from `#171717` to `#ffffff` are the system
- Use `#171717` instead of `#000000` for primary text — the micro-warmth matters

### Don't
- Don't use positive letter-spacing on Geist Sans — it's always negative or zero
- Don't use weight 700 (bold) on body text — 600 is the maximum, used only for headings
- Don't use traditional CSS `border` on cards — use the shadow-border technique
- Don't introduce warm colors (oranges, yellows, greens) into the UI chrome
- Don't apply the workflow accent colors (Ship Red, Preview Pink, Develop Blue) decoratively
- Don't use heavy shadows (> 0.1 opacity) — the shadow system is whisper-level
- Don't increase body text letter-spacing — Geist is designed to run tight
- Don't use pill radius (9999px) on primary action buttons — pills are for badges/tags only
- Don't skip the inner `#fafafa` ring in card shadows — it's the glow that makes the system work

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <400px | Tight single column, minimal padding |
| Mobile | 400–600px | Standard mobile, stacked layout |
| Tablet Small | 600–768px | 2-column grids begin |
| Tablet | 768–1024px | Full card grids, expanded padding |
| Desktop Small | 1024–1200px | Standard desktop layout |
| Desktop | 1200–1400px | Full layout, maximum content width |
| Large Desktop | >1400px | Centered, generous margins |

### Touch Targets
- Buttons use comfortable padding (8px–16px vertical)
- Navigation links at 14px with adequate spacing
- Pill badges have 10px horizontal padding for tap targets
- Mobile menu toggle uses 50% radius circular button

### Collapsing Strategy
- Hero: display 48px → scales down, maintains negative tracking proportionally
- Navigation: horizontal links + CTAs → hamburger menu
- Feature cards: 3-column → 2-column → single column stacked
- Code screenshots: maintain aspect ratio, may horizontally scroll
- Trust bar logos: grid → horizontal scroll
- Footer: multi-column → stacked single column
- Section spacing: 80px+ → 48px on mobile

### Image Behavior
- Dashboard screenshots maintain border treatment at all sizes
- Hero gradient softens/simplifies on mobile
- Product screenshots use responsive images with consistent border radius
- Full-width sections maintain edge-to-edge treatment

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Vercel Black (`#171717`)
- Background: Pure White (`#ffffff`)
- Heading text: Vercel Black (`#171717`)
- Body text: Gray 600 (`#4d4d4d`)
- Border (shadow): `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`
- Link: Link Blue (`#0072f5`)
- Focus ring: Focus Blue (`hsla(212, 100%, 48%, 1)`)

### Example Component Prompts
- "Create a hero section on white background. Headline at 48px Geist weight 600, line-height 1.00, letter-spacing -2.4px, color #171717. Subtitle at 20px Geist weight 400, line-height 1.80, color #4d4d4d. Dark CTA button (#171717, 6px radius, 8px 16px padding) and ghost button (white, shadow-border rgba(0,0,0,0.08) 0px 0px 0px 1px, 6px radius)."
- "Design a card: white background, no CSS border. Use shadow stack: rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, #fafafa 0px 0px 0px 1px. Radius 8px. Title at 24px Geist weight 600, letter-spacing -0.96px. Body at 16px weight 400, #4d4d4d."
- "Build a pill badge: #ebf5ff background, #0068d6 text, 9999px radius, 0px 10px padding, 12px Geist weight 500."
- "Create navigation: white sticky header. Geist 14px weight 500 for links, #171717 text. Dark pill CTA 'Start Deploying' right-aligned. Shadow-border on bottom: rgba(0,0,0,0.08) 0px 0px 0px 1px."
- "Design a workflow section showing three steps: Develop (text color #0a72ef), Preview (#de1d8d), Ship (#ff5b4f). Each step: 14px Geist Mono uppercase label + 24px Geist weight 600 title + 16px weight 400 description in #4d4d4d."

### Iteration Guide
1. Always use shadow-as-border instead of CSS border — `0px 0px 0px 1px rgba(0,0,0,0.08)` is the foundation
2. Letter-spacing scales with font size: -2.4px at 48px, -1.28px at 32px, -0.96px at 24px, normal at 14px
3. Three weights only: 400 (read), 500 (interact), 600 (announce)
4. Color is functional, never decorative — workflow colors (Red/Pink/Blue) mark pipeline stages only
5. The inner `#fafafa` ring in card shadows is what gives Vercel cards their subtle inner glow
6. Geist Mono uppercase for technical labels, Geist Sans for everything else

---

## 10. Voice & Tone

Vercel's voice is engineer-terse, confident, and quietly clever. Headlines are short and declarative — *"Your product, delivered"*, *"Deploy once, deliver everywhere"*, *"Previews for every push"* — mirroring the compressed typography they sit in. Marketing copy reads like a well-written README: precise verbs, specific nouns, no adjective stacking. Performance claims, when made, are numeric (*"95% reduction in page load times"*, *"24x faster builds"*), not adjectival ("blazingly fast"). The Vercel Design team describes its posture as *"stewards of the Vercel Brand and Geist Design System"* — the steward word is earned by the discipline visible in every pixel and comma.

| Context | Tone |
|---|---|
| Hero headlines | Short, declarative, 4–7 words. "Build and deploy the best web experiences." |
| Product feature copy | Verb + object, concrete. "Ship fast. Stay fast." |
| CTAs | Imperative, 2–3 words. "Start Deploying", "Talk to Sales", "View Docs". |
| Error messages (dashboard, CLI) | Developer-readable: error type + specific cause + next action. |
| Docs | Terse paragraphs, heavy code examples, zero tutorial-speak. |
| Changelog / blog / "Ship" posts | Ship-proud, dated, technical. "We did X. Here's how it works." |
| Marketing enterprise | Confident but numeric; case studies over superlatives. |
| Blog / social voice | Wry, developer-insider, occasional wordplay — the brand page explicitly calls out "delightful wordplay" as part of the register. |

**Forbidden phrases.** "Blazingly fast" and "lightning-fast" as marketing adjectives — "fast" without the lightning is preferred. "Revolutionary", "game-changing", "unleash", "supercharge". Marketing toast strings like "You did it! 🎉". Emoji on product surfaces (dashboard, settings, billing) — Vercel does not toast-spam. Decorative "sparkle" language around AI features (✨ prefix on "AI Cloud" etc. is not Vercel's register, even when AI is the subject).

## 11. Brand Narrative

Vercel was founded in 2015 by Guillermo Rauch and originally called **ZEIT**; the company renamed to Vercel in April 2020, the same moment it raised its Series A to build the cloud infrastructure underneath Next.js, the open-source React framework it had shepherded since 2016. Vercel's founding thesis is that frontend developers should not have to think about infrastructure: the framework and the deployment target should be one cognitive object, not two.

The visual language — white canvas, near-black text (`#171717`), Geist Sans with aggressive negative letter-spacing, shadow-as-border throughout — is a design statement that mirrors the product thesis. It is **minimalism as engineering principle**, not minimalism as style choice. Every element on a Vercel marketing page has been through the same "does this justify its bytes?" discipline that a well-written Next.js component goes through. The Vercel Design team puts this explicitly: *"We design systems and systemize designs. Imbuing our work with care and craft as stewards of the Vercel Brand and Geist Design System."*

What Vercel refuses: the "enterprise dev-tools dark dashboard" visual default, decorative illustrations of cloud icons and laptops, typography that wastes tracking, marketing language with adjective stacks ("blazingly fast, enterprise-grade, battle-tested"). What it embraces: Geist as a **developer-first typeface** (*"Specifically designed for developers and designers"*, per the Geist page), the Develop / Preview / Ship pipeline as a visual motif (three workflow colors), and the shadow-as-border technique as a constant reminder that the craft is in the details most teams don't ship.

## 12. Principles

1. **Minimalism as engineering principle, not style.** Every element justifies its bytes. A drop shadow, a background gradient, a decorative icon — each is weighed against what it adds to understanding. The Vercel Design team states this explicitly: *"We design systems and systemize designs."*
2. **Shadow-as-border is a craft signal.** The `box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08)` technique is a technical choice with no marketing benefit — it exists because it's cleaner than `1px solid` on rounded corners. Readers of code recognize it. That recognition IS the brand.
3. **Type is compression.** Display headlines at -2.4px to -2.88px letter-spacing make the text feel minified, engineered, urgent. Generous tracking on display text would read as consumer-brand; Vercel reads as infrastructure.
4. **Workflow colors are semantic, not decorative.** Ship Red, Preview Pink, and Develop Blue each correspond to a specific stage in the product pipeline. Using them anywhere else — a decorative gradient, a generic CTA — breaks the pipeline metaphor.
5. **Three weights, no more.** 400 (read), 500 (interact), 600 (announce). Vercel does not use 700 / bold in Geist Sans. The narrow weight range forces hierarchy through size and tracking.
6. **Performance claims are numeric.** *"95% reduction in page load times"*, *"24x faster builds"* — not "blazingly fast". Developers are the audience; developers want numbers.
7. **Consistency is the product.** The same shadow stack, the same pill-badge treatment, the same Geist Mono uppercase labels appear across the marketing site, the dashboard, the docs, and the CLI output. Consistency is how an infrastructure brand earns trust.
8. **"Delightful wordplay" is the one license.** The Vercel Design page explicitly notes *"meticulous interactions, delightful wordplay"*. Occasional wit is allowed — but only in voice, never in visuals. The visuals stay austere.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Vercel user segments (frontend developers, founding engineers, DevOps engineers, engineering managers at Next.js-heavy teams), not individual people.*

**Aarav Nair, 26, Bengaluru.** Frontend developer at a Series-A startup. Deploys to Vercel 8–12 times a day via `git push`. Reads the Vercel dashboard the way he reads a terminal — eyes scanning for non-zero values. Would never use a CI product whose dashboard required mouse navigation for common tasks. Appreciates that Vercel's docs have code-first examples above paragraph explanations.

**Priya Shah, 34, Toronto.** Staff engineer at a media company. Migrated the company's React site to Next.js on Vercel two years ago. Lives in the Deployments view. Values preview URLs per PR more than any other single feature. Cares that Geist Mono renders the same in the dashboard as it does in her terminal — that visual consistency is a subtle trust signal.

**Daniel Hwang, 41, Seoul.** Engineering manager with a team of 9 frontend engineers. Uses Vercel's analytics + speed insights in weekly team syncs. Picks infrastructure partners based on dashboard clarity and docs quality, not on pricing-page calculators. Views Vercel's design restraint as a credibility signal — a dashboard that is not trying to sell him is a dashboard he trusts with production.

**Elena Romano, 28, Milan.** Founder + sole engineer of an indie SaaS. Uses Vercel because it's the shortest path from `npx create-next-app` to a live URL. Reads the Vercel blog for release notes and the occasional "how we built it" post. Finds Vercel's voice closer to how her engineer friends talk about software than how marketing teams talk about software — which is why she trusts it.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no projects)** | White canvas (`#ffffff`). Single line of Gray 900 (`#171717`) text at 18px Geist weight 500: "No projects yet." One dark pill CTA: "Add New...". No illustration, no onboarding tour. |
| **Empty (deployments list, new project)** | Gray 500 (`#666666`) caption at 14px: "Your first deployment will appear here after you push to connected Git." Single link ("Connect a repository") in Link Blue. |
| **Loading (dashboard first paint)** | Shadow-bordered skeleton blocks at Gray 100 (`#ebebeb`). 1.2s shimmer. Skeleton keeps the same `0px 0px 0px 1px` shadow-as-border as real content — geometry matches exactly on paint-in. |
| **Loading (deployment in progress)** | Status pill with Develop Blue (`#0a72ef`) text + spinning icon at 14px Geist Mono uppercase. Deployment row remains interactive; the build log is accessible during build. |
| **Error (build failed)** | Status pill in Ship Red (`#ff5b4f`). Inline expandable log shows the exact failure output. No modal. No sanitized "Build failed. Contact support." — the failure is the developer's problem to solve and the tool shows them the problem, verbatim. |
| **Error (form validation, dashboard)** | Field-level. Shadow-border switches from subtle to Ship Red at the same 1px spread. 13px caption below in Ship Red describes what is invalid and what would be valid. |
| **Error (API / runtime, serverless function)** | Dedicated error surface with the full stack trace, request ID, timestamp, region. Vercel treats runtime errors as first-class content, not toast dismissals. |
| **Success (deployment ready)** | Status pill in subtle green tint with "Ready" label in 12px Geist Mono uppercase. Deployment URL is instantly copyable. No celebratory animation. |
| **Success (action saved)** | 3s auto-dismiss toast at bottom-right. Geist weight 400, sentence case, past tense: "Settings updated." No emoji, no exclamation. |
| **Skeleton** | Shadow-bordered blocks at exact final dimensions. Gray 100 (`#ebebeb`) fill. 1.2s shimmer in Gray 50 (`#fafafa`). Never uses a different color for skeleton — stays in the monochrome palette. |
| **Disabled** | Opacity reduced on text and shadow-border together. Disabled dark buttons become `rgba(23,23,23,0.4)` fill. Geometry stable for re-enablement. |
| **Cold-start / preview latency** | Subtle banner in Gray 50 with Gray 600 text acknowledging the current cold-start cost. Transparent honesty; Vercel knows developers care about this specific latency. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection, toggle |
| `motion-fast` | 120ms | Hover, focus, button press |
| `motion-standard` | 200ms | Dropdown, popover, sheet, tab switch |
| `motion-slow` | 320ms | Section reveals on marketing surfaces |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, popovers, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Explicitly forbidden.** No spring, no bounce, no overshoot. No `cubic-bezier` with middle control values above `1.0`. Vercel's motion matches its typography — compressed, deliberate, no playful excess. A bouncing modal would read as consumer app; Vercel is infrastructure.

**Signature motions.**

1. **Deployment status transition.** When a deployment moves from "Building" (Develop Blue) to "Ready" (green) on the dashboard, the status pill transitions color over `motion-standard` with `ease-standard`. No scale, no flash. The single color change is the entire animation — minimalism even in state transitions.
2. **Shadow-border hover lift.** On hover over a card, the shadow stack intensifies from the base `rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px` to include a deeper second layer over `motion-fast`. The element itself does not translate; the shadow grows. The card appears to "press outward from the page" without moving.
3. **Develop → Preview → Ship ambient.** The three-color workflow accent on marketing hero sections cycles at slow 12-second intervals using `linear` easing. This is the one ambient motion on the marketing site — and it is functional: it illustrates the pipeline concept the text describes rather than decorating.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. The ambient Develop/Preview/Ship animation stops. Shadow-border hover lifts become instant. The dashboard remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch (2026-04-19):
- https://vercel.com/ — confirms current marketing positioning:
    "Build and deploy the best web experiences with the AI Cloud"
    "Vercel provides the developer tools and cloud infrastructure to build,
     scale, and secure a faster, more personalized web."
  Confirms marketing voice register — terse, declarative headlines ("Your
  product, delivered", "Deploy once, deliver everywhere", "Previews for every
  push") and numeric performance claims ("95% reduction in page load times",
  "24x faster builds").
- https://vercel.com/design — confirms the Vercel Design team's own
  self-description (verbatim):
    "We design systems and systemize designs. Imbuing our work with care
     and craft as stewards of the Vercel Brand and Geist Design System."
  Also mentions "meticulous interactions, delightful wordplay" as explicit
  tone register.
- https://vercel.com/geist/introduction — confirms Geist Design System's
  tagline ("Vercel design system for building consistent web experiences")
  and the Geist Sans / Geist Mono typefaces as "Specifically designed for
  developers and designers".

Base DESIGN.md (sections 1–9) is the source for all token-level claims
(Vercel Black #171717, Geist Sans/Mono fonts, shadow-as-border technique,
workflow accent colors Ship Red #ff5b4f / Preview Pink #de1d8d / Develop
Blue #0a72ef, multi-layer shadow stacks, three-weight system 400/500/600).

Not independently verified via WebFetch — widely documented public facts used:
- Vercel was founded in 2015 by Guillermo Rauch.
- The company was originally named ZEIT and renamed to Vercel in April 2020.
- Vercel is the primary maintainer of Next.js, the open-source React framework.
- Next.js has existed as an open-source project since 2016.

Personas (§13) are fictional archetypes informed by publicly observable
Vercel user segments (frontend developers, staff engineers, engineering
managers, founding engineers of Next.js-heavy teams). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "shadow-as-border is a craft signal", "type is
compression", "developers are the audience; developers want numbers") are
editorial readings connecting Vercel's stated design posture to the design
system, not directly sourced Vercel statements.
-->

