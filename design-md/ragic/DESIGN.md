---
id: ragic
name: Ragic
country: TW
category: productivity
homepage: "https://www.ragic.com"
primary_color: "#f70e0e"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ragic.com&sz=128"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  note: "primary = live 'Create account' CTA fill (#f70e0e); brand-red accent (#fa3e3e) is the most-used signature color across headings, stats, and dividers"
  colors:
    primary: "#f70e0e"
    primary-deep: "#d50e0e"
    accent-red: "#fa3e3e"
    link: "#0066cc"
    accent-blue: "#65a4f4"
    blue-tint: "#e8f0fb"
    canvas: "#ffffff"
    surface: "#fafafa"
    surface-gray: "#efefef"
    heading: "#000000"
    body: "#222222"
    label: "#333333"
    muted: "#aaaaaa"
    slate: "#73859f"
    panel-dark: "#2b333f"
    hairline: "#dddddd"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Open Sans", cjk: "Noto Sans TC" }
    h1:        { size: 36, weight: 700, lineHeight: 1.20, tracking: -1.0, use: "Hero headline — bold, tightly tracked" }
    h2:        { size: 32, weight: 800, lineHeight: 1.25, tracking: 0, use: "Section titles — heaviest weight on the page" }
    stat:      { size: 32, weight: 300, tracking: 0, use: "Large numeric stats in accent-red (#fa3e3e)" }
    cta-label: { size: 17, weight: 600, lineHeight: 1.00, use: "Primary 'Create account' button label" }
    body:      { size: 15, weight: 400, lineHeight: 1.60, use: "Standard reading text, 24px line-height" }
    button:    { size: 14, weight: 400, lineHeight: 1.00, use: "Tab / filter chip buttons" }
    caption:   { size: 12, weight: 400, lineHeight: 1.20, use: "Small UI labels, table chrome" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 30, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 5, lg: 6, pill: 9, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.08) 0px 1px 3px"
    standard: "rgba(0,0,0,0.12) 0px 2px 8px"
    elevated: "rgba(0,0,0,0.18) 0px 8px 24px"
  components:
    button-primary: { type: button, bg: "#f70e0e", fg: "#ffffff", radius: 6, padding: "14px 30px", font: "weight 600", use: "Primary 'Create account' CTA" }
    tab: { type: tab, bg: "#ffffff", fg: "#aaaaaa", radius: 5, padding: "8px 16px", use: "Tab / filter chip", active: "#65a4f4 text + 1px #65a4f4 border" }
    link: { type: badge, fg: "#0066cc", use: "Utilitarian database-link blue, no underline until hover" }
    card: { type: card, bg: "#ffffff", radius: 6, use: "White surface, 1px #dddddd hairline, soft neutral shadow" }
    stat-figure: { type: badge, fg: "#fa3e3e", font: "weight 300, 32px", use: "Large spreadsheet-style numeric stats" }
  components_harvested: true
---

# Design System Inspiration of Ragic

## 1. Visual Theme & Atmosphere

Ragic's website is unapologetically utilitarian -- the visual language of a tool built by spreadsheet people, for spreadsheet people. It is a no-code database SaaS out of Taiwan, and the site wears that engineering pragmatism on its sleeve: a clean white canvas (`#ffffff`), near-black body text (`#222222`), and a single hot, confident red (`#f70e0e` / `#fa3e3e`) that does almost all the emotional work. There is no gradient mesh, no glassmorphism, no ambient hero animation. The atmosphere is "open the file and start working" -- a density and directness that signals the product itself: a grid you can fill with real data, today.

The typographic foundation is `Open Sans` with a deep CJK fallback chain led by `Noto Sans TC` (Traditional Chinese, Taiwan), then Simplified Chinese, Japanese, and Korean -- a stack engineered for a pan-Asian B2B audience where a single row of a database might mix English field names with Traditional-Chinese values. Headlines are genuinely bold: the hero `h1` runs at 36px weight 700 with a tight `-1px` letter-spacing, and section `h2` titles climb to weight 800 -- the heaviest weight on the page. This is the opposite of the whisper-weight luxury aesthetic; Ragic shouts its value props in plain, heavy sans-serif because its buyers are operations managers, not design directors.

The signature gesture is the red. Ragic's brand red appears in three calibrated shades: a saturated CTA red (`#f70e0e`) on the primary "Create account" button, a slightly deeper red (`#d50e0e`) for full-bleed section bands, and a lighter accent red (`#fa3e3e`) for large numeric stats and decorative emphasis. Against the otherwise grayscale page, this red reads as urgency and confidence -- the "do it now" of a tool that wants you in the product, not reading marketing copy. Links, by contrast, stay a classic utilitarian web-blue (`#0066cc`), reinforcing the "this is software, not a billboard" register.

**Key Characteristics:**
- A single hot red (`#f70e0e` CTA / `#fa3e3e` accent / `#d50e0e` band) carrying nearly all brand emotion against a grayscale page
- `Open Sans` + `Noto Sans TC` CJK-first stack -- built for Traditional-Chinese / Taiwan B2B users
- Genuinely heavy headlines: `h1` 700, `h2` 800 -- plain, loud, value-prop-forward
- Classic web-blue (`#0066cc`) links and `#65a4f4` accent-blue tab states -- "this is software"
- Conservative radii (2-6px) -- spreadsheet chrome, nothing pill-shaped on content
- High information density: 15px body at 24px line-height, tight tab/filter rows
- Pure-white canvas with `#fafafa` / `#efefef` neutral bands for sectioning -- no color theming
- Large weight-300 numbers (`#fa3e3e`) styled like cells in a financial sheet

## 2. Color Palette & Roles

### Primary (Ragic Red)
- **Ragic Red** (`#f70e0e`): The primary CTA fill -- the live "Create account" button. Saturated, urgent, the single loudest color on the page.
- **Red Deep** (`#d50e0e`): Full-bleed section bands and immersive red blocks. A touch darker for large surfaces so white text stays readable.
- **Accent Red** (`#fa3e3e`): The most-used brand tint -- large numeric stats, decorative emphasis, hover highlights. The "Ragic feel" color.

### Interactive Blue
- **Link Blue** (`#0066cc`): Standard text links, "Try it now", "How to get started?". The utilitarian database-link blue, no underline until hover.
- **Accent Blue** (`#65a4f4`): Active tab / selected filter-chip border and text (e.g. "Featured templates" selected state).
- **Blue Tint** (`#e8f0fb`): Soft blue-wash background for highlighted cards and selected-state surfaces.

### Neutral Scale
- **Heading** (`#000000`): Pure black for the heaviest headlines (`h1`, `h2`). Maximum contrast, maximum directness.
- **Body** (`#222222`): Standard reading text -- near-black, slightly softened from pure black.
- **Label** (`#333333`): Secondary text, captions, table chrome.
- **Muted** (`#aaaaaa`): Inactive tab labels, placeholder-level text, low-priority filter chips.
- **Slate** (`#73859f`): Blue-gray UI accents, overlay tints, secondary chrome (used at partial alpha).

### Surface & Borders
- **Canvas** (`#ffffff`): Page background, card surfaces, button text on red.
- **Surface** (`#fafafa`): Off-white alternating section band.
- **Surface Gray** (`#efefef`): Light gray panel band for sectioning and code/preview areas.
- **Hairline** (`#dddddd`): Standard 1px border for tabs, cards, table cells, inputs.
- **Panel Dark** (`#2b333f`): Dark video/preview overlay panels and the play-button chrome.

### On-color
- **On Primary** (`#ffffff`): White text/icons on all red surfaces and dark panels.

## 3. Typography Rules

### Font Family
- **Primary**: `Open Sans`
- **CJK fallback chain**: `Noto Sans TC` -> `Noto Sans CJK TC` -> `Noto Sans SC` -> `Noto Sans JP` -> `Noto Sans KR` -> `Lucida Grande`, `Tahoma`, `arial`, sans-serif
- **Rationale**: Traditional-Chinese-first ordering targets the Taiwan / Greater China market; the full CJK chain lets a single database row render mixed-script content cleanly.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero H1 | Open Sans | 36px (2.25rem) | 700 | 1.20 (43.2px) | -1.0px | Hero headline, tightly tracked bold |
| Section H2 | Open Sans | 32px (2.00rem) | 800 | 1.25 (40px) | normal | Heaviest weight on the page |
| Stat Figure | Open Sans | 32px (2.00rem) | 300 | normal | normal | Large numbers in accent-red `#fa3e3e` |
| CTA Label | Open Sans | 17px (1.06rem) | 600 | 1.00 | normal | Primary "Create account" button |
| Body | Open Sans | 15px (0.94rem) | 400 | 1.60 (24px) | normal | Standard reading text |
| Tab Button | Open Sans | 14px (0.88rem) | 400 | 1.00 | normal | Template / filter chip labels |
| Link | Open Sans | 15px (0.94rem) | 400 | 1.60 | normal | `#0066cc`, underline on hover only |
| Caption | Open Sans | 12px (0.75rem) | 400 | 1.20 | normal | Small UI labels, table chrome |

### Principles
- **Weight as volume**: Where premium brands go light, Ragic goes heavy -- `h2` at weight 800 is the loudest typographic gesture. The system trusts bold sans-serif to communicate value props directly.
- **Tight hero tracking**: The `h1` carries `-1px` letter-spacing for a dense, engineered headline block; everything below relaxes to normal tracking.
- **Numbers as a display element**: Large statistics render at weight 300 / 32px in accent-red (`#fa3e3e`) -- a deliberate light-weight contrast that makes figures feel like cells in a spreadsheet rather than headline text.
- **CJK-first fallback**: The `Noto Sans TC` lead in the fallback chain is a localization decision, not an afterthought -- Traditional Chinese is a first-class rendering target.
- **Comfortable body density**: 15px body at 24px (1.60) line-height keeps long feature copy legible while staying information-dense.

## 4. Component Stylings

### Buttons

**Primary (Ragic Red)**
- Background: `#f70e0e`
- Text: `#ffffff`
- Padding: 14px 30px
- Radius: 6px
- Font: 17px Open Sans weight 600
- Height: ~53px
- Use: Top-of-funnel CTA -- "Create account", "Sign up free"

**Section-band Red**
- Background: `#d50e0e` (full-bleed band)
- Text: `#ffffff`
- Use: Immersive red section backgrounds with white headlines and supporting CTA

**Tab / Filter Chip (inactive)**
- Background: `#ffffff`
- Text: `#aaaaaa`
- Padding: 8px 16px
- Radius: 5px
- Border: `1px solid #dddddd`
- Font: 14px weight 400
- Use: Template category filters -- "Sales", "Marketing", "HR", "Accounting"

**Tab / Filter Chip (active/selected)**
- Background: `#ffffff`
- Text: `#65a4f4`
- Radius: 5px
- Border: `1px solid #65a4f4`
- Use: Currently selected filter -- "Featured templates"

**Text Link**
- Background: transparent
- Text: `#0066cc`
- No underline until hover
- Font: 15px weight 400
- Use: Inline links -- "Try it now", "How to get started?"

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #dddddd`
- Radius: 5px (standard), 6px (comfortable)
- Shadow (standard): `rgba(0,0,0,0.12) 0px 2px 8px`
- Highlighted card: `#e8f0fb` blue-tint background for selected/recommended items
- Hover: subtle shadow lift, occasional `#fa3e3e` accent border

### Stat Figures
- Large numbers (e.g. "$200,000") render at 32px Open Sans weight 300 in accent-red `#fa3e3e`
- Paired with a small `#333333` caption label beneath
- Spreadsheet-cell aesthetic: light weight, high color saturation, no decoration

### Inputs & Forms
- Border: `1px solid #dddddd`
- Radius: 2-5px
- Background: `#ffffff`
- Text: `#222222`
- Placeholder: `#aaaaaa`
- Focus: `#65a4f4` border accent

### Navigation
- Clean horizontal header on white
- Brand logotype left-aligned
- Links: 15px Open Sans, `#0066cc` / `#333333`
- Primary CTA right-aligned: red "Create account" / "Sign up" button (`#f70e0e`, 6px radius, white text, weight 600)

### Media Panels
- Dark overlay: `#2b333f` at 0.7 alpha for video covers
- Play button: 9px radius, `1px solid #ffffff` border, white glyph on the dark panel

---

**Verified:** 2026-06-08 (omd-add-reference — Tier 1 live inspect)
**Tier 1 sources:** https://www.ragic.com, https://blog.ragic.com (live DOM getComputedStyle — body, h1/h2/h3, "Create account" CTA, template filter tabs, stat figures, anchor colors)
**Method:** playwright getComputedStyle on the live homepage; rgb()→hex conversion; ≥6 concrete samples collected.
**`.verification.md`:** `web/references/ragic/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: ~8px, with a generous CTA step at 14px/30px
- Scale: 4px, 8px, 12px, 16px, 24px, 30px, 48px, 64px
- Body line-height of 24px establishes a strong vertical rhythm for dense feature copy

### Grid & Container
- Centered single-column hero with a heavy bold headline and supporting red CTA
- Feature/template sections use multi-column card and filter-chip grids
- Full-bleed red bands (`#d50e0e`) break the white flow for emphasis moments
- Alternating `#fafafa` / `#efefef` neutral bands segment the long marketing page

### Whitespace Philosophy
- **Functional density**: This is a tool's marketing site -- whitespace exists to organize information, not to create luxury breathing room. Template grids and filter rows pack tightly.
- **Band rhythm**: White → off-white (`#fafafa`) → light-gray (`#efefef`) → red band (`#d50e0e`) creates a section cadence without introducing arbitrary brand colors.
- **Red as punctuation**: The red appears in measured doses -- one CTA per section, one band per major theme -- so it never loses its urgency.

### Border Radius Scale
- Micro (2px): Inputs, tight chrome
- Standard (5px): Tabs, filter chips, cards
- Comfortable (6px): Primary buttons
- Pill (9px): Media/play-button chrome
- Full (9999px): Occasional circular icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, bands |
| Ambient (Level 1) | `rgba(0,0,0,0.08) 0px 1px 3px` | Subtle card lift, hover hints |
| Standard (Level 2) | `rgba(0,0,0,0.12) 0px 2px 8px` | Standard cards, template tiles |
| Elevated (Level 3) | `rgba(0,0,0,0.18) 0px 8px 24px` | Popovers, dropdowns, modals |

**Shadow Philosophy**: Ragic's elevation is neutral and restrained -- plain black-based shadows at low alpha, no chromatic tinting. This is deliberate: the product is a data tool, and depth is used to separate UI layers (a dropdown over a grid, a card over a band) rather than to create atmosphere. Where Stripe tints shadows blue for brand, Ragic keeps them gray so the red can be the only color that ever draws the eye.

### Decorative Depth
- Dark media panels (`#2b333f` at 0.7 alpha) sit over screenshots/video covers
- Red bands (`#d50e0e`) create depth through color contrast rather than shadow
- Selected cards lift via the `#e8f0fb` blue-tint fill plus a soft standard shadow

## 7. Do's and Don'ts

### Do
- Use Ragic Red (`#f70e0e`) for the single primary CTA in each section -- "Create account", "Sign up"
- Reserve accent-red (`#fa3e3e`) for large numeric stats and emphasis
- Use bold weights for headlines -- `h1` 700, `h2` 800 -- value props should be loud
- Keep links the utilitarian web-blue (`#0066cc`), underline on hover only
- Use `#65a4f4` for active/selected tab and filter-chip states
- Keep radii conservative (2-6px) on content; spreadsheet chrome, not consumer pills
- Alternate `#ffffff` / `#fafafa` / `#efefef` bands to segment long pages
- Keep body at 15px / 24px line-height for legible density

### Don't
- Don't dilute the red -- one CTA red per section keeps its urgency
- Don't use gradients, glassmorphism, or ambient hero animation -- Ragic is plain on purpose
- Don't go light-weight on headlines -- weight 300 is for numbers only, not titles
- Don't tint shadows -- elevation stays neutral gray so red owns all the color
- Don't drop the `Noto Sans TC` CJK fallback -- Traditional Chinese is a first-class target
- Don't use red for links or red for body emphasis -- red is CTA + stat only
- Don't add pill-shaped buttons on content -- 6px is the comfortable max for CTAs

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked cards, hamburger nav, reduced heading sizes |
| Tablet | 640-1024px | 2-column template grids, moderate padding |
| Desktop | 1024-1280px | Full multi-column template/filter layout |
| Large Desktop | >1280px | Centered content with neutral margins |

### Touch Targets
- Primary CTA is generously sized (~53px tall, 14px/30px padding)
- Filter chips at 8px/16px padding with adequate row spacing
- Links at 15px with comfortable tap spacing

### Collapsing Strategy
- Hero: 36px bold headline compresses on mobile, weight 700 maintained
- Navigation: horizontal links + red CTA → hamburger toggle
- Template grids: multi-column → 2-column → single stacked
- Red bands: maintain full-width treatment, reduce internal padding
- Filter-chip rows: wrap or horizontal-scroll on narrow screens

### Image / Media Behavior
- Screenshots and template previews maintain their `#dddddd` hairline and 5px radius at all sizes
- Dark video panels (`#2b333f`) scale with the media; play glyph stays centered
- Stat figures stay accent-red and legible down to mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Ragic Red (`#f70e0e`)
- Section band: Red Deep (`#d50e0e`)
- Stat / emphasis: Accent Red (`#fa3e3e`)
- Link: Web Blue (`#0066cc`)
- Active tab: Accent Blue (`#65a4f4`)
- Background: White (`#ffffff`), bands `#fafafa` / `#efefef`
- Heading text: Black (`#000000`)
- Body text: Near-black (`#222222`)
- Muted text: Gray (`#aaaaaa`)
- Border: Hairline (`#dddddd`)

### Example Component Prompts
- "Create a hero on white background. Headline at 36px Open Sans weight 700, line-height 1.20, letter-spacing -1px, color #000000. Body at 15px weight 400, line-height 1.60, color #222222. Primary CTA: red button (#f70e0e fill, white text, 6px radius, 14px 30px padding, 17px weight 600) labeled 'Create account', plus a #0066cc text link 'Try it now'."
- "Design a template-filter chip row: white chips with 1px solid #dddddd border, 5px radius, 8px 16px padding, 14px Open Sans #aaaaaa text. Selected chip uses #65a4f4 text + 1px #65a4f4 border."
- "Build a stat block: large number at 32px Open Sans weight 300 in #fa3e3e, with a #333333 caption label beneath. White card, 1px #dddddd border, 5px radius, shadow rgba(0,0,0,0.12) 0px 2px 8px."
- "Create navigation: white header, brand logo left, #0066cc/#333333 links, red 'Sign up' CTA right-aligned (#f70e0e, white text, 6px radius, weight 600)."
- "Design a full-bleed red section: #d50e0e background, white headline at 32px weight 800, white body, and a white-outlined CTA."

### Iteration Guide
1. Red is the only brand color -- use `#f70e0e` for CTA, `#fa3e3e` for stats; keep everything else grayscale + blue links.
2. Headlines are bold (700/800); only numbers go light (300).
3. Links are `#0066cc`, underline on hover only -- the software-not-billboard register.
4. Border-radius stays 2-6px on content; never pill-shaped buttons.
5. Use `Open Sans` with the `Noto Sans TC`-led CJK fallback chain for any multilingual text.
6. Shadows are neutral gray at low alpha -- no chromatic tinting.
7. Segment long pages with `#ffffff` / `#fafafa` / `#efefef` bands and occasional `#d50e0e` red bands.
8. Body is 15px at 24px line-height -- dense but legible.

---

## 10. Voice & Tone

Ragic's voice is the voice of a practical builder talking to another practical builder -- direct, benefit-first, and faintly proud of how much you can do without writing code. The homepage leads with blunt, almost aggressive confidence ("#1 No Code database builder", "No Code AI tool for your business") rather than aspirational storytelling. CTAs are imperative and low-friction ("Create account", "Try it now", "How to get started?"). There is no hype vocabulary and no enterprise-procurement coldness; the register is "here's the tool, here's what it does, go build."

| Context | Tone |
|---|---|
| Hero headlines | Blunt, ranking-forward, benefit-first. "#1 No Code database builder." |
| Feature descriptions | Concrete capability + the business problem it solves. Plain verbs. |
| CTAs | Low-friction imperatives. "Create account", "Try it now". |
| Template gallery | Functional and categorical — "Sales", "HR", "Accounting", "MIS". |
| Docs / how-to | Step-by-step, screenshot-led, peer-to-peer. Shows, doesn't lecture. |
| Pricing | Transparent, comparison-friendly, no "contact us" gating for basics. |
| Localized (TW / 繁中) | Same directness, fully Traditional-Chinese-native, not machine-translated. |

**Forbidden register.** Vague aspirational marketing ("transform your business", "unleash your potential"), enterprise gatekeeping ("request a demo" before you can see the product), and decorative adjective stacks. Ragic shows the grid and lets the tool argue for itself.

## 11. Brand Narrative

Ragic is a no-code database / spreadsheet-application platform from **Taiwan**, built for businesses that have outgrown shared spreadsheets but don't want -- or can't afford -- custom software. Its founding premise is a rejection familiar to anyone who has run a small or mid-sized operation on a tangle of Excel files: that turning a spreadsheet into a real, multi-user, relational business application should not require hiring developers. Ragic's answer is a product where you design a database the way you'd lay out a spreadsheet, and it becomes a shareable web application -- forms, links between sheets, permissions, and reports included.

That positioning shapes the entire design language. The site looks like a tool, not a brand campaign, because the buyer is an operations manager, an accountant, or an MIS lead evaluating whether this can replace their spreadsheet sprawl. The heavy bold headlines, the dense template gallery organized by department (Sales, Marketing, HR, Accounting, MIS, Project Management), the transparent self-serve "Create account" funnel -- all of it says "you can try this yourself, today, without a salesperson." The Traditional-Chinese-first font stack and the pan-CJK fallback chain make explicit that this is a product rooted in the Taiwan / Greater-China market that also serves a global English audience.

What Ragic embraces: pragmatism, transparency, immediate self-serve trial, and a single loud red that says *go*. What it refuses: the visual theatrics of Silicon-Valley SaaS landing pages and the procurement-gated coldness of legacy enterprise software. The aesthetic is honest about what the product is -- a grid you can fill with your real business data.

## 12. Principles

1. **The tool argues for itself.** Show the grid, show the templates, show the self-serve signup. Design should reduce the distance between a curious visitor and a working database, not decorate the journey.
2. **One loud color.** Red (`#f70e0e` / `#fa3e3e`) is the only color allowed to carry urgency. Everything else stays grayscale + utilitarian blue so the "go" signal never gets diluted.
3. **Bold says value, light says data.** Headlines are heavy (700/800) because value props should be loud; numbers are light (300) because data should feel like cells, not slogans.
4. **Density is respect.** The buyer works in spreadsheets all day. A dense, scannable template gallery respects their time more than a sparse, scrolling brand experience.
5. **Localization is structural.** The `Noto Sans TC`-first fallback chain is a design decision, not a setting. Traditional Chinese is a first-class rendering target, not an afterthought translation.
6. **Self-serve, no gatekeeping.** The primary CTA is "Create account", not "Request a demo". Trust the user to evaluate the product themselves.
7. **Neutral depth, colored intent.** Shadows are gray; only red and blue ever signal intent. Elevation organizes layers; color organizes meaning.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Ragic user segments (SMB operations managers, accountants, MIS leads, departmental power-users replacing spreadsheets), not individual people.*

**Mei-Ling Chen, 38, Taichung.** Operations manager at a mid-sized manufacturing company. Has been running production scheduling across a dozen shared Excel files that constantly break when two people edit at once. Found Ragic searching for "Excel 線上資料庫" and built a working multi-user order-tracking app over a weekend without IT. Trusts the product because she could try it herself without talking to a salesperson, and because the Traditional-Chinese interface feels native, not translated.

**David Wu, 45, Taipei.** MIS lead at a regional distributor. Evaluates tools by how fast a non-technical colleague can become self-sufficient. Likes that Ragic's template gallery is organized by department -- he can hand "Inventory Management" to the warehouse team and "HR" to the people team and step back. Skeptical of any SaaS that hides pricing behind "contact us"; Ragic's transparent self-serve funnel earns his trust.

**Priya Nair, 33, Singapore.** Founder of a small B2B services firm running on Google Sheets. Needs forms, permissions, and links between datasets that spreadsheets can't cleanly provide, but a custom build is out of budget. Uses Ragic as the database backbone for client intake and project tracking. Reads the how-to docs as her primary onboarding -- screenshot-led, step-by-step, no fluff.

**Kenji Sato, 50, Osaka.** Accountant at an SME. Cares about data density and accurate Japanese rendering in mixed English/Japanese records. Appreciates that the font stack handles CJK properly in dense tables. Would abandon any tool that turned his finance data into a sparse, padded "dashboard experience" at the cost of how many rows he can scan at once.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new sheet, no records)** | White canvas. Plain near-black (`#222222`) prompt at 15px: "No records yet." One red CTA: "Add record". No illustration — the empty grid itself is the affordance. |
| **Empty (filtered, zero rows)** | Gray (`#aaaaaa`) single line: "No matching records." Active filters stay visible above so the user can adjust scope. |
| **Loading (sheet first paint)** | Light skeleton rows in `#efefef` at final dimensions. Neutral, no shimmer color — the grid layout is preserved. |
| **Loading (in-place refresh)** | Thin accent-red (`#fa3e3e`) progress indicator; previous rows stay visible. Never blank the grid. |
| **Error (save failed)** | Inline message in Ragic Red (`#f70e0e`) near the field/action. States what failed and what to do — no generic "Something went wrong". |
| **Error (field validation)** | Field-level: red border + small `#333333` message below describing the specific invalid value. |
| **Success (record saved)** | Brief inline confirmation, plain and quiet — the saved row updates in place. No celebratory toast, no emoji. |
| **Selected (active tab/filter)** | White chip with `#65a4f4` text + `1px #65a4f4` border; highlighted cards use the `#e8f0fb` blue-tint fill. |
| **Disabled** | Reduced-opacity surface and text together. Red actions fade rather than switch to gray, to preserve the brand read. |
| **Hover (link)** | `#0066cc` link gains an underline on hover; cards lift with a soft neutral shadow. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection commits, focus rings, cell edits |
| `motion-fast` | 120ms | Hover, button press, chip select |
| `motion-standard` | 200ms | Dropdown, modal, row expand |
| `motion-slow` | 300ms | Section reveals, occasional page transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Dropdowns, popovers arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Restraint.** Ragic is a data tool; motion is functional, not decorative. No spring, no bounce, no overshoot — a row that expands or a dropdown that opens should feel like a spreadsheet responding, immediate and predictable. The product's job is to keep the user in their data, so transitions stay short and quiet.

**Signature motions.**

1. **Cell / row edit commit.** Edits commit instantly (`motion-instant`) — the grid must feel as responsive as a native spreadsheet. No animated confirmation that delays the next action.
2. **Filter-chip select.** Selecting a template category transitions the chip border/text to `#65a4f4` over `motion-fast`, and the gallery re-filters with a short `motion-standard` fade.
3. **Dropdown / popover.** Field menus and config popovers arrive with `ease-enter` over `motion-standard`, dismissing with `ease-exit`.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`. The grid remains fully functional; nothing in the data workflow depends on animation.

## 16. Do's and Don'ts

### Do
- Lead with blunt, benefit-first headlines in bold Open Sans (700/800)
- Use exactly one Ragic Red (`#f70e0e`) CTA per section, plus `#fa3e3e` for stats
- Keep links `#0066cc` and active states `#65a4f4` — utilitarian software signals
- Maintain the `Open Sans` + `Noto Sans TC` CJK-first stack for all text
- Keep the grid/template gallery dense and scannable
- Use neutral gray shadows and `#dddddd` hairlines for structure
- Offer a transparent, self-serve "Create account" funnel — no demo gating

### Don't
- Don't add gradients, glass, or ambient hero motion — Ragic is plain on purpose
- Don't dilute the red across multiple competing CTAs
- Don't use light weights on headlines (300 is for numbers only)
- Don't tint shadows or theme sections with color other than the red band (`#d50e0e`)
- Don't use red for links or body emphasis — red is CTA + stat only
- Don't pad away data density to chase a "premium" sparse look
- Don't drop or reorder the CJK fallback chain — Traditional Chinese leads
