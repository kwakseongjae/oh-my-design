---
id: loom
name: Loom
country: US
category: productivity
homepage: "https://www.loom.com"
primary_color: "#1868db"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=loom.com&sz=128"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  components_harvested: true
  note: "primary = live Loom blue #1868db (pill CTA, white text); brand accents (coral #ff613d, purple #bf63f3, deep purple #48245d) appear in marketing illustration gradients"
  colors:
    primary: "#1868db"
    primary-hover: "#0052cc"
    brand: "#1868db"
    canvas: "#ffffff"
    surface-blue: "#e9f2fe"
    foreground: "#101214"
    body: "#292a2e"
    muted: "#7d818a"
    on-primary: "#ffffff"
    ink: "#101214"
    accent-coral: "#ff613d"
    accent-purple: "#bf63f3"
    accent-deep: "#48245d"
  typography:
    family: { display: "Charlie Display", text: "Charlie Text" }
    display-hero: { size: 63, weight: 700, lineHeight: 1.03, tracking: 0, use: "Hero headline, bold confident statement" }
    display-lg:   { size: 44, weight: 700, lineHeight: 1.14, tracking: 0, use: "Section headlines" }
    heading:      { size: 33, weight: 700, lineHeight: 1.27, tracking: 0, use: "Sub-section / card headings" }
    lead:         { size: 27, weight: 400, lineHeight: 1.52, use: "Lead paragraph, intro copy" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, nav links" }
    button:       { size: 16, weight: 700, lineHeight: 1.0, use: "Primary button label" }
    button-light: { size: 16, weight: 400, lineHeight: 1.0, use: "Header CTA label" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 16, lg: 24, full: 9999 }
  shadow:
    soft: "rgba(0,0,0,0.03) 0px 4px 6.4px 0px"
    standard: "rgba(0,0,0,0.05) 0px 3px 9.6px 0px"
  components:
    button-primary: { type: button, bg: "#1868db", fg: "#ffffff", radius: "9999px", padding: "16px 23px", height: "58px", font: "16px / 700", hover: "bg #0052cc", use: "Primary CTA (Get Loom for free, Download now, Learn more)" }
    button-light: { type: button, bg: "#e9f2fe", fg: "#101214", radius: "9999px", padding: "16px 23px", height: "58px", font: "16px / 700", use: "Secondary actions (Contact Sales, Install Chrome Extension, See all use cases)" }
    button-dark: { type: button, bg: "#101214", fg: "#ffffff", radius: "9999px", padding: "16px 23px", height: "58px", font: "16px / 700", use: "Alternate emphasis CTA (Learn more, Explore our blog)" }
    icon-button: { type: button, bg: "#ffffff", fg: "#292a2e", radius: "9999px", height: "56px", shadow: "rgba(0,0,0,0.03) 0px 4px 6.4px 0px, rgba(0,0,0,0.05) 0px 3px 9.6px 0px", use: "Testimonial carousel previous/next controls" }
    footer: { type: card, bg: "#e9f2fe", fg: "#292a2e", use: "Footer background, links hover toward #1868db" }
---

# Design System Inspiration of Loom

## 1. Visual Theme & Atmosphere

Loom's website projects the friendly confidence of a consumer-grade tool that quietly does serious work. The canvas is pure white (`#ffffff`) with near-black ink (`#101214`) for headlines and a softer charcoal (`#292a2e`) for body copy, while a single saturated blue (`#1868db`) carries every primary action. This is not the cold corporate blue of legacy enterprise software; it is a bright, approachable cobalt that reads as energetic and trustworthy. The overall impression is of a product that wants you to press record immediately — clean, bold, and unintimidating.

The defining typographic gesture is the **Charlie** type family — `Charlie Display` for headlines and `Charlie Text` for body — a humanist sans with warm, rounded terminals. Headlines run heavy at weight 700 and large sizes (the hero lands around 63px), giving the page a punchy editorial loudness that is the opposite of the whisper-weight restraint seen in fintech systems. Where Stripe murmurs, Loom announces. The hero copy ("One video is worth a thousand words") is set in this bold display face with tight line-height (~1.03), creating dense, declarative blocks that feel like a magazine cover.

Loom's other signature is its commitment to the **full-pill geometry**. Every button — primary, secondary, dark, and the circular carousel controls — uses a `9999px` border-radius. Nothing on the page is sharp-cornered; the rounding signals softness and consumer-friendliness. Surfaces lift off the page with gentle, low-opacity multi-layer shadows (`rgba(0,0,0,0.03)` and `rgba(0,0,0,0.05)` at small blur), so depth feels airy rather than dramatic. Marketing illustrations introduce playful gradient accents — coral (`#ff613d`), bright purple (`#bf63f3`), and a deep aubergine (`#48245d`) — that keep the otherwise blue-and-white palette from feeling sterile.

**Key Characteristics:**
- Charlie Display / Charlie Text — a warm humanist sans, bold at display sizes
- Weight 700 headlines as the signature — punchy, declarative, consumer-confident
- Single dominant action color: Loom blue (`#1868db`) on pure white
- Full-pill geometry (`9999px`) on every button and control — nothing sharp
- Near-black ink headings (`#101214`) over softer charcoal body (`#292a2e`)
- Soft, low-opacity multi-layer shadows — airy elevation, never heavy
- Light-blue surface tint (`#e9f2fe`) for secondary buttons and footer
- Playful coral / purple gradient accents (`#ff613d`, `#bf63f3`, `#48245d`) in illustrations

## 2. Color Palette & Roles

### Primary
- **Loom Blue** (`#1868db`): Primary brand color, CTA backgrounds, primary links, interactive highlights. A bright, saturated cobalt that anchors every action on the page.
- **Ink** (`#101214`): Primary heading color and dark-button fill. A near-black with a faint blue undertone — warmer and softer than pure `#000000`.
- **Pure White** (`#ffffff`): Page background, card surfaces, primary-button text, circular control fill.

### Secondary & Surface
- **Surface Blue** (`#e9f2fe`): Light-blue tint used for secondary "light" buttons and the footer background. Reads as a calm, on-brand neutral.
- **Body Charcoal** (`#292a2e`): Standard body copy, nav links, secondary labels. Softer than the ink headings for comfortable reading.
- **Muted Gray** (`#7d818a`): De-emphasized text, captions, metadata, supporting labels.

### Interactive
- **Loom Blue** (`#1868db`): Primary buttons, primary links, active states.
- **Primary Hover** (`#0052cc`): Deeper blue for hover/pressed states on primary links and buttons.

### Accent (illustration & marketing)
- **Coral** (`#ff613d`): Warm orange-red used in illustration gradients and decorative highlights.
- **Bright Purple** (`#bf63f3`): Vivid violet for gradient decoration and playful accents.
- **Deep Aubergine** (`#48245d`): Dark purple anchoring gradient illustrations and immersive accent zones.

### Neutral Scale
- **Ink** (`#101214`): Headings, strong labels.
- **Body** (`#292a2e`): Paragraph text, navigation.
- **Muted** (`#7d818a`): Secondary/captions.
- **On-Primary** (`#ffffff`): Text and icons on Loom blue or dark fills.

## 3. Typography Rules

### Font Family
- **Display**: `Charlie Display`, with fallback `sans-serif` — used for all headlines.
- **Text**: `Charlie Text`, with fallback `sans-serif` — used for body, leads, nav, and UI.
- Charlie is a warm humanist sans with rounded terminals; Loom pairs the heavier Display cut for headings with the more readable Text cut for running copy.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Charlie Display | 63px (3.95rem) | 700 | 1.03 (tight) | Hero headline, max size, declarative |
| Display Large | Charlie Display | 44px (2.75rem) | 700 | 1.14 | Major section headlines |
| Heading | Charlie Display | 33px (2.03rem) | 700 | 1.27 | Sub-section and card headings |
| Lead | Charlie Text | 27px (1.67rem) | 400 | 1.52 | Lead paragraph, intro copy |
| Body | Charlie Text | 16px (1.00rem) | 400 | 1.50 | Standard reading text, nav links |
| Button | Charlie Text | 16px (1.00rem) | 700 | 1.00 (tight) | Primary/dark button label |
| Button Light | Charlie Text | 16px (1.00rem) | 400 | 1.00 (tight) | Header CTA, lighter weight |

### Principles
- **Bold display weight as signature**: Weight 700 on headlines is Loom's loudest typographic choice. The page is meant to feel energetic and immediate, not restrained.
- **Two cuts, two jobs**: `Charlie Display` carries headings (heavy, tight); `Charlie Text` carries everything readable (regular, comfortable 1.5 line-height).
- **Tight headlines, generous body**: Display line-heights compress toward 1.03–1.27 for dense impact; body and lead relax to 1.5–1.52 for readability.
- **Minimal tracking**: Letter-spacing stays `normal` across the system — the warmth comes from the typeface, not from tracking manipulation.

## 4. Component Stylings

### Buttons

**Primary (Loom Blue)**
- Background: `#1868db`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: 16px 23px
- Height: 58px
- Font: 16px Charlie Text weight 700
- Hover: deepens toward `#0052cc`
- Use: Primary CTA ("Get Loom for free", "Download now", "Learn more")

**Primary Compact**
- Background: `#1868db`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: 8px 16px
- Height: 48px
- Font: 16px Charlie Text weight 400
- Use: Header CTA ("Get Loom for free" in nav)

**Light (Surface Blue)**
- Background: `#e9f2fe`
- Text: `#101214`
- Radius: `9999px`
- Padding: 16px 23px
- Height: 58px
- Font: 16px Charlie Text weight 700
- Use: Secondary actions ("Contact Sales", "Install Chrome Extension", "See all use cases")

**Dark (Ink)**
- Background: `#101214`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: 16px 23px
- Height: 58px
- Font: 16px Charlie Text weight 700
- Use: Alternate emphasis CTA ("Learn more", "Explore our blog")

### Icon Buttons / Carousel Controls
- Background: `#ffffff`
- Text: `#292a2e`
- Radius: `9999px` (circular)
- Height: 56px
- Shadow: `rgba(0,0,0,0.03) 0px 4px 6.4px 0px, rgba(0,0,0,0.05) 0px 3px 9.6px 0px`
- Use: Testimonial carousel previous/next controls

### Cards & Containers
- Background: `#ffffff`
- Radius: 16px (md), 24px (lg) for larger feature cards
- Shadow (soft): `rgba(0,0,0,0.03) 0px 4px 6.4px 0px`
- Shadow (standard): `rgba(0,0,0,0.05) 0px 3px 9.6px 0px`
- Use: Feature cards, testimonial cards, media previews

### Navigation
- Background: white, clean horizontal nav
- Links: Charlie Text 16px weight 400, `#292a2e`
- Primary CTA: Loom blue pill ("Get Loom for free") right-aligned
- Secondary CTA: light-blue pill ("Contact Sales")

### Footer
- Background: `#e9f2fe`
- Text: `#292a2e`
- Links: `#292a2e`, hover toward `#1868db`

---

**Verified:** 2026-06-08 (omd:add-reference — Tier 1 live inspect)
**Tier 1 sources:** https://www.loom.com (live DOM computed-style inspect — hero, nav, CTA buttons, carousel controls, footer; playwright getComputedStyle)
**Tier 2 sources:** getdesign.md/loom — not authoritative; refero — directory only
**Conflicts unresolved:** none
**`.verification.md`:** `web/references/loom/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- Button padding follows an 8px rhythm (8px/16px compact, 16px/23px large)

### Grid & Container
- Centered single-column hero with large bold headline and a pair of pill CTAs
- Feature sections alternate text + media in 2-column splits
- Testimonial carousel with circular white controls
- Generous full-width sections with light-blue tinted zones for rhythm

### Whitespace Philosophy
- **Open and breathable**: Loom leans on white space to keep the bold headlines from feeling heavy. The 1.5 body line-height reinforces an unhurried reading pace.
- **Section tinting**: Light-blue (`#e9f2fe`) zones and the footer break the white expanse without introducing hard color, creating a soft light/lighter cadence.
- **Pill rhythm**: Repeated full-radius buttons create a consistent rounded visual motif down the page.

### Border Radius Scale
- Small (8px): subtle rounding on small surfaces
- Medium (16px): standard cards
- Large (24px): feature cards, media frames
- Full (9999px): every button and circular control

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text |
| Soft (Level 1) | `rgba(0,0,0,0.03) 0px 4px 6.4px 0px` | Subtle card lift |
| Standard (Level 2) | `rgba(0,0,0,0.05) 0px 3px 9.6px 0px` | Cards, controls, media previews |
| Control (Level 2) | `rgba(0,0,0,0.03) 0px 4px 6.4px, rgba(0,0,0,0.05) 0px 3px 9.6px` | Circular carousel buttons |

**Shadow Philosophy**: Loom's elevation is deliberately gentle. Shadow opacities stay between 0.03 and 0.05 with small blur radii, so cards and controls feel like they hover a few millimeters off the page rather than casting deep dramatic shadows. The neutral (un-tinted) black shadow keeps the focus on the bold typography and bright blue actions — depth is a supporting role, never the star.

## 7. Do's and Don'ts

### Do
- Use Loom blue (`#1868db`) as the single primary action color
- Set headlines in Charlie Display at weight 700 — bold and declarative
- Make every button and control a full pill (`9999px`)
- Use near-black ink (`#101214`) for headings and softer charcoal (`#292a2e`) for body
- Keep elevation soft and low-opacity (0.03–0.05)
- Use the light-blue surface (`#e9f2fe`) for secondary buttons and footer
- Let body text breathe at 1.5 line-height
- Reserve coral/purple accents for illustrations and gradients only

### Don't
- Use sharp or small-radius corners on buttons — Loom is fully pill-shaped
- Set headlines in a light weight — bold 700 is the brand voice
- Introduce a second competing primary color — blue owns all actions
- Use heavy, high-opacity, or tinted dramatic shadows
- Use coral/purple accents for buttons or links — they are decorative only
- Use pure black (`#000000`) for headings — ink `#101214` is warmer
- Crowd body copy with tight line-height — keep 1.5 for readability

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses, stacked CTAs |
| Tablet | 640-1024px | 2-column splits collapse, moderate padding |
| Desktop | 1024-1280px | Full alternating text+media layout |
| Large Desktop | >1280px | Centered content with generous margins |

### Touch Targets
- Buttons run 48–58px tall — comfortably tappable pills
- Circular carousel controls at 56px diameter
- Nav links with generous spacing

### Collapsing Strategy
- Hero: ~63px display compresses to ~36–40px on mobile, weight 700 maintained
- Navigation: horizontal links + CTA pills collapse to a menu toggle
- Feature splits: side-by-side text+media stack vertically
- CTA pairs stack full-width on mobile
- Section spacing compresses on smaller viewports

### Image Behavior
- Product/video preview frames keep rounded corners (16–24px) at all sizes
- Marketing illustrations with coral/purple gradients simplify on mobile
- Media maintains soft shadow elevation across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Loom Blue (`#1868db`)
- CTA Hover: Deeper Blue (`#0052cc`)
- Background: Pure White (`#ffffff`)
- Heading text: Ink (`#101214`)
- Body text: Charcoal (`#292a2e`)
- Muted text: Gray (`#7d818a`)
- Secondary surface / footer: Surface Blue (`#e9f2fe`)
- Dark button: Ink (`#101214`)
- Accent decorative: Coral (`#ff613d`), Purple (`#bf63f3`), Deep Aubergine (`#48245d`)

### Example Component Prompts
- "Create a hero on white. Headline at 63px Charlie Display weight 700, line-height 1.03, color #101214. Lead at 27px Charlie Text weight 400, line-height 1.52, color #101214. Primary CTA pill (#1868db, 9999px radius, 16px 23px padding, white text weight 700) plus a light pill (#e9f2fe bg, #101214 text, 9999px)."
- "Design a feature card: white background, 16px radius, shadow rgba(0,0,0,0.05) 0px 3px 9.6px. Heading 33px Charlie Display weight 700, #101214. Body 16px Charlie Text weight 400, line-height 1.5, #292a2e."
- "Build a dark CTA pill: #101214 background, white text, 9999px radius, 16px 23px padding, 16px Charlie Text weight 700."
- "Create circular carousel controls: white #ffffff fill, 56px diameter, 9999px radius, shadow rgba(0,0,0,0.03) 0px 4px 6.4px, rgba(0,0,0,0.05) 0px 3px 9.6px."
- "Design a footer: #e9f2fe background, #292a2e text, links hovering toward #1868db."

### Iteration Guide
1. Loom blue (`#1868db`) is the only primary action color — never split actions across colors
2. All buttons and controls are full pills (`9999px`) — no exceptions
3. Headlines use Charlie Display weight 700; body uses Charlie Text weight 400 at 1.5 line-height
4. Heading color is ink `#101214`, body is charcoal `#292a2e`, muted is `#7d818a`
5. Keep shadows soft (0.03–0.05 opacity, small blur) — airy not heavy
6. Light-blue `#e9f2fe` is the secondary-surface and footer tint
7. Reserve coral/purple gradients for illustrations only — never for UI controls

---

## 10. Voice & Tone

Loom's voice is warm, direct, and human — the tone of a helpful colleague who would rather show you than tell you. The product itself is about replacing long written messages with a quick video, and the copy mirrors that: short, plain, action-first. The hero line *"One video is worth a thousand words"* sets the register — a familiar idiom repurposed with a knowing wink, confident without being grandiose. CTAs are friendly imperatives ("Get Loom for free", "Download now"), never gated or salesy on the basics.

| Context | Tone |
|---|---|
| Hero headlines | Bold, idiomatic, confident. Conversational, never corporate. |
| Product descriptions | One concrete benefit per line. "Record your screen, voice, and face." |
| CTAs | Friendly imperatives. "Get Loom for free", "Download now", "Learn more". |
| Onboarding / empty states | Encouraging, low-pressure. Invites the first recording. |
| Enterprise / sales | Slightly more formal but still warm; "Contact Sales" not "Request a demo gate". |
| Support / errors | Plain-language, reassuring, solution-first. |

**Forbidden phrases.** "Revolutionary", "game-changer", "supercharge", "synergy", "cutting-edge". Jargon-heavy enterprise-speak. Exclamation-stacked hype. Anything that makes recording a video feel like a chore.

## 11. Brand Narrative

Loom was founded in **2015** (originally as *Opentest*, then *OpenVid*, before becoming Loom) by **Joe Thomas**, **Shahed Khan**, and **Vinay Hiremath**. The founders were building a usability-testing product and discovered that the most valuable thing they had made was the simple screen-and-camera recorder they used to share feedback. They pivoted to that recorder — the insight being that asynchronous video could replace a huge volume of meetings and long written messages.

That founding insight — *async video as a faster, more human way to communicate at work* — shaped everything: a one-click recorder, instant shareable links, and a friendly consumer-grade interface that lowers the barrier to pressing record. Loom grew rapidly through bottom-up adoption inside companies and was **acquired by Atlassian in 2023** for roughly $975M, positioning it alongside Atlassian's suite of team-collaboration tools.

What Loom embraces: speed-to-record, warmth, and the idea that showing beats telling. What it rejects: the friction of meetings, the cold formality of legacy enterprise screen-share tools, and any UX that makes capturing a quick video feel heavyweight. The bold blue-and-white visual identity is the design expression of that ethos — bright, immediate, and unintimidating.

## 12. Principles

1. **Show, don't tell.** *UI implication:* Lead with video previews and live demos; let the product demonstrate itself rather than describing it in walls of text.
2. **One click to record.** *UI implication:* The primary action (Loom blue pill) is unmistakable and always within reach; never bury the record/start CTA.
3. **Warm over corporate.** *UI implication:* Rounded full-pill geometry, friendly Charlie typeface, and conversational copy keep the tool approachable, not enterprise-cold.
4. **Async beats meetings.** *UI implication:* Flows favor self-serve, low-friction starts ("Get Loom for free") over gated sales funnels.
5. **Clarity through restraint.** *UI implication:* A single dominant action color and soft elevation keep attention on content; decorative color stays in illustrations.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Loom user segments (remote-team managers, engineers, customer-facing teams, educators), not individual people.*

**Priya Nair, 34, Austin.** Engineering manager at a remote-first startup. Records a 3-minute Loom instead of writing a long PR review or scheduling another sync. Values the one-click recorder and instant share link; would abandon any tool that made capturing a quick walkthrough feel like setup work.

**Marcus Bell, 41, Manchester.** Customer success lead. Sends personalized Loom videos to onboard new accounts. Cares that recipients can watch without an account and that the playback page looks polished and on-brand.

**Sofia Lindqvist, 28, Stockholm.** Product designer. Uses Loom to narrate design walkthroughs for async feedback across time zones. Appreciates the warm, unintimidating interface that makes hitting record feel casual rather than performative.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no recordings yet)** | White canvas, friendly headline in ink (`#101214`), one Loom blue pill CTA inviting the first recording. Encouraging, low-pressure. |
| **Empty (no search results)** | Muted gray (`#7d818a`) single line explaining nothing matched, with filters visible to adjust. No dead-end illustration. |
| **Loading (library first paint)** | Skeleton blocks at final dimensions in surface-blue (`#e9f2fe`) tint with gentle shimmer. |
| **Loading (video processing)** | Inline progress indicator in Loom blue; previous content stays visible where possible. |
| **Error (upload/record failed)** | Inline message in plain language, solution-first, with a clear retry pill. Never a generic "Something went wrong". |
| **Error (form validation)** | Field-level message describing what is invalid and what would be valid. |
| **Success (recording shared)** | Brief confirmation with the shareable link surfaced immediately for one-tap copy. |
| **Success (action saved)** | Short auto-dismiss toast, sentence case, no exclamation hype. |
| **Skeleton** | Surface-blue blocks at final dimensions; soft shimmer consistent with the gentle shadow system. |
| **Disabled** | Reduced opacity on surface and label together; blue actions fade rather than switching to gray, preserving brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection, focus rings |
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Dropdowns, carousel slides, card reveals |
| `motion-slow` | 320ms | Page-level transitions, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — panels, dropdowns, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Signature motions.**

1. **Carousel slide.** Testimonial carousel advances with `motion-standard / ease-standard`, a smooth horizontal glide paired with the soft-shadowed circular controls.
2. **Hover lift.** Buttons and cards lift subtly on hover via `motion-fast`, deepening the soft shadow slightly — gentle, never bouncy.
3. **CTA feedback.** Primary pills respond to press with a quick `motion-fast` color deepen toward `#0052cc`.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; carousels advance instantly and hover lifts are removed. The interface stays fully functional.
