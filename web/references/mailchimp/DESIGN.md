---
id: mailchimp
name: Mailchimp
country: US
category: marketing
homepage: "https://mailchimp.com"
primary_color: "#ffe01b"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=mailchimp.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-17"
  note: "primary = live Cavendish Yellow CTA (#ffe01b, rgb 255,224,27); Peppercorn ink (#231e15) is the text/heading + 1px button outline; Teal Ink (#004e56) is the link color. Live inspect + refero Tier 2 agree (Press Black/Voltage Yellow/Teal Ink). getdesign.md has no Mailchimp entry."
  colors:
    primary: "#ffe01b"
    ink: "#231e15"
    ink-deep: "#241c15"
    teal: "#004e56"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    surface-warm: "#ebe1cd"
    slate: "#27455c"
    forest: "#468254"
    sand: "#e7b75f"
    charcoal: "#403b3b"
    graphite: "#706d67"
    hairline: "#bcbab6"
    ink-pure: "#000000"
    on-primary: "#231e15"
  typography:
    family: { display: "Means Web", sans: "Graphik Web" }
    display-hero: { size: 48, weight: 400, lineHeight: 1.0, tracking: -1.0, use: "Hero headline, Means Web serif" }
    heading-lg:   { size: 40, weight: 400, lineHeight: 1.0, tracking: -0.5, use: "Section titles, Means Web serif" }
    heading:      { size: 32, weight: 400, tracking: -0.5, use: "Sub-section heads, Means Web serif" }
    heading-sm:   { size: 24, weight: 400, lineHeight: 1.33, tracking: -0.32, use: "Card / feature heads, Graphik Web" }
    body:         { size: 16, weight: 400, lineHeight: 1.35, use: "Standard reading text, Graphik Web" }
    label:        { size: 13, weight: 500, use: "Nav links, button labels, badges, Graphik Web" }
    caption:      { size: 11, weight: 400, use: "Fine print, terms, Graphik Web" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 80 }
  rounded: { xs: 3, sm: 8, md: 10, lg: 26, pill: 32 }
  shadow:
    hairline: "rgb(35, 30, 21) 0px 0px 0px 1px"
    elevation: "rgba(35, 30, 21, 0.15) 0px 0px 20px 3px"
  components:
    button-primary: { type: button, bg: "#ffe01b", fg: "#231e15", radius: "26px", padding: "12px 24px", height: "44px", font: "13px / 500 Graphik Web", shadow: "1px #231e15 ring", use: "Hero CTA — Start Free Trial, full Cavendish-Yellow pill" }
    button-outline: { type: button, fg: "#231e15", radius: "26px", padding: "12px 24px", height: "44px", font: "13px / 500 Graphik Web", shadow: "1px #231e15 ring", use: "Secondary action — Log In, transparent pill with peppercorn outline" }
    button-outline-light: { type: button, fg: "#ffffff", radius: "26px", padding: "6px 16px", height: "32px", font: "13px / 500 Graphik Web", shadow: "1px #ffffff ring", use: "Secondary CTA on dark/photographic backgrounds — Customize my experience" }
    nav-link: { type: tab, fg: "#231e15", radius: "3px", padding: "8px", font: "13px / 500 Graphik Web", use: "Top nav item, near-square 3px corner", active: "teal #004e56 text on hover/active" }
    card: { type: card, bg: "#ffffff", fg: "#000000", radius: "10px", padding: "8px", border: "1px solid #bcbab6", use: "Plan-selector / option card, hairline border, no shadow" }
    card-elevated: { type: card, bg: "#ffffff", fg: "#231e15", radius: "10px", padding: "24px 16px", shadow: "rgba(35,30,21,0.15) 0px 0px 20px 3px", use: "Featured pricing plan card, warm-tinted elevation" }
    badge-peppercorn: { type: badge, bg: "#231e15", fg: "#ffffff", radius: "8px", padding: "4px 12px", font: "13px / 500 Graphik Web", use: "Trust badge — Risk-Free / No Credit Card Required" }
    input-radio: { type: input, border: "1px solid #bcbab6", radius: "10px", use: "Plan-selector radio option row, sits inside option card" }
  components_harvested: true
---

# Design System Inspiration of Mailchimp

## 1. Visual Theme & Atmosphere

Mailchimp's website is a landmark in "outsider-art" brand design — a marketing platform that deliberately rejects the cool, gradient-heavy SaaS aesthetic in favor of something warm, hand-made, and unmistakably its own. The page opens on a pure white canvas (`#ffffff`) anchored by a single, screaming hero color: Cavendish Yellow (`#ffe01b`), a saturated voltage-yellow reserved almost exclusively for the primary call-to-action. Text and headings sit in Peppercorn (`#231e15`) — a warm near-black that carries a faint brown-red undertone rather than the cold neutrality of pure black. This pairing, yellow against peppercorn, is the entire brand in two colors: playful but grounded, loud but never garish.

The typographic personality is the system's quiet masterstroke. Headlines run in **Means Web**, a high-contrast editorial serif at 48px on the hero with tight `-1px` tracking and a weight of only 400 — giving the page the feel of a vintage printing press or a literary magazine rather than a tech product. Body and UI text drop to **Graphik Web**, a clean, neutral grotesque at 16px (13px for nav and buttons), which carries all the functional copy. This serif-display-over-grotesque-body split is exactly inverted from the typical SaaS playbook (geometric sans everywhere) and is what makes Mailchimp read as a brand with a point of view rather than a template.

What truly distinguishes Mailchimp is its restraint with depth and its warmth in the details. Shadows are almost entirely absent — separation comes from hairline borders (`1px solid #bcbab6`) and a faint ash-white surface (`#f5f5f5`). When elevation is used (a featured pricing card), the shadow is warm-tinted — `rgba(35,30,21,0.15)` — peppercorn bleeding into the shadow layer rather than generic gray. The geometry is split-personality: navigation items use a tight near-square 3px corner, while every button is a full 26px pill outlined with a crisp 1px peppercorn ring (rendered as a box-shadow, not a border). The result is a system that feels editorial, tactile, and human — the antithesis of frictionless minimalism.

**Key Characteristics:**
- Cavendish Yellow (`#ffe01b`) as the single hero/CTA color — voltage-bright, used sparingly
- Peppercorn (`#231e15`) for all text instead of pure black — warm near-black with brown-red undertone
- Means Web editorial serif for headlines (48px / weight 400 / -1px tracking) — vintage-press feel
- Graphik Web grotesque for all body and UI text (16px body, 13px nav/buttons)
- Pill buttons (26px radius) outlined with a 1px peppercorn ring via box-shadow
- Near-square 3px nav corners — a deliberate counterpoint to the pill buttons
- Teal Ink (`#004e56`) reserved for links — the only cool accent in a warm palette
- Warm-tinted shadows (`rgba(35,30,21,0.15)`) on the rare elevated card — never neutral gray

## 2. Color Palette & Roles

### Primary
- **Cavendish Yellow** (`#ffe01b`): Mailchimp's hero color and the system's single primary-action background. The voltage-yellow pill CTA ("Start Free Trial") — the one color the eye is trained to treat as "the action." Confirmed verbatim on the brand-assets page: "Cavendish Yellow is Mailchimp's hero color."
- **Peppercorn** (`#231e15`): Primary text, heading, and CTA-label color, and the 1px outline ring on buttons. A warm near-black (brown-red undertone) used everywhere instead of pure black. "We use Peppercorn for accents" (brand-assets page).

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on dark/photographic blocks.
- **Ash White** (`#f5f5f5`): Cool-neutral tinted surface for collapsed option cards and segmented blocks.
- **Warm Parchment** (`#ebe1cd`): Warm cream surface for editorial/illustration panels — the "paper" texture of the brand.
- **Silver Rule** (`#bcbab6`): The hairline border color for option cards and dividers — the primary separation device in this near-shadowless system.
- **Deep Ink** (`#241c15`): Near-black peppercorn variant used as a full-bleed dark background (cookie/consent bar, dark sections).
- **Pure Black** (`#000000`): Maximum-contrast body text inside dense cards (pricing tables).

### Text Hierarchy
- **Peppercorn** (`#231e15`): Primary text, headings, nav, strong labels.
- **Warm Charcoal** (`#403b3b`): Secondary copy and fine-print terms text.
- **Graphite** (`#706d67`): Tertiary / muted captions and metadata.

### Accent
- **Teal Ink** (`#004e56`): The link color (310 occurrences in the live scan) — a deep teal that is the only cool note in the palette.
- **Slate Teal** (`#27455c`): Photographic-section overlay/background tint behind white headlines.
- **Forest Green** (`#468254`): Occasional supporting accent on illustration/data blocks.
- **Sand** (`#e7b75f`): Warm golden accent used in footer / illustration treatments — a muted cousin of the hero yellow.

## 3. Typography Rules

### Font Family
- **Display**: `Means Web` (fallback: `Georgia, Times, "Times New Roman"`) — a high-contrast editorial serif used for all headlines (h1/h2) at weight 400. Letter-spacing runs tight (`-1px` at 48px, `-0.5px` at 40px).
- **Sans / Body**: `Graphik Web` (fallback: `"Helvetica Neue", Helvetica, Arial, Verdana, sans-serif`) — a neutral grotesque carrying all body copy, nav, buttons, badges, and smaller headings (h3 at 24px).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Means Web | 48px (3.00rem) | 400 | 1.0 (48px) | -1px | Hero headline, editorial serif |
| Heading Large | Means Web | 40px (2.50rem) | 400 | 1.0 (40px) | -0.5px | Section titles |
| Heading | Means Web | 32px (2.00rem) | 400 | normal | -0.5px | Sub-section / FAQ heads |
| Heading Small | Graphik Web | 24px (1.50rem) | 400-500 | 1.33 (32px) | -0.32px | Card / feature heads |
| Body | Graphik Web | 16px (1.00rem) | 400 | 1.35 (21.6px) | normal | Standard reading text |
| Label | Graphik Web | 13px (0.81rem) | 500 | normal | normal | Nav links, button labels, badges |
| Caption | Graphik Web | 11px (0.69rem) | 400 | normal | normal | Fine print, terms |

### Principles
- **Serif display, grotesque body**: Means Web (serif) owns every headline; Graphik Web (sans) owns every paragraph and UI control. This editorial inversion of the SaaS default is the brand's typographic signature.
- **Light editorial weight**: Headlines run at weight 400, not bold — the high-contrast serif provides presence without heaviness, evoking a printed page rather than a landing page.
- **Tight display tracking**: -1px at 48px, -0.5px at 40px; body text stays at normal tracking.
- **13px functional UI**: Nav, buttons, and badges all sit at a compact 13px / weight 500 — dense, utilitarian chrome around the warm editorial display type.

## 4. Component Stylings

### Buttons

**Start Free Trial (Primary)**
- Background: `#ffe01b`
- Text: `#231e15`
- Radius: 26px
- Padding: 12px 24px
- Height: 44px
- Font: 13px Graphik Web weight 500
- Shadow: `rgb(35, 30, 21) 0px 0px 0px 1px` (1px peppercorn ring)
- Use: Hero / nav primary call-to-action — the single Cavendish-Yellow action color

**Log In (Outline)**
- Text: `#231e15`
- Radius: 26px
- Padding: 12px 24px
- Height: 44px
- Font: 13px Graphik Web weight 500
- Shadow: `rgb(35, 30, 21) 0px 0px 0px 1px` (1px peppercorn ring)
- Use: Secondary action — transparent pill with peppercorn outline

**Secondary on Dark (Light Outline)**
- Text: `#ffffff`
- Radius: 26px
- Padding: 6px 16px
- Height: 32px
- Font: 13px Graphik Web weight 500
- Shadow: `rgb(255, 255, 255) 0px 0px 0px 1px` (1px white ring)
- Use: Secondary CTA on dark/photographic backgrounds ("Customize my experience")

### Inputs & Forms

**Radio Option Row**
- Border: 1px solid `#bcbab6`
- Radius: 10px
- Use: Plan-selector radio option, the row sits inside the option card; collapsed state shifts to `#f5f5f5` background

### Cards & Containers

**Option Card**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#bcbab6`
- Radius: 10px
- Padding: 8px
- Use: Plan-selector / option card with hairline border, no shadow

**Featured Plan Card (Elevated)**
- Background: `#ffffff`
- Text: `#231e15`
- Radius: 10px
- Padding: 24px 16px
- Shadow: `rgba(35, 30, 21, 0.15) 0px 0px 20px 3px` (warm-tinted)
- Use: Highlighted pricing plan — the one place elevation appears, tinted peppercorn not gray

### Badges

**Trust Badge (Peppercorn)**
- Background: `#231e15`
- Text: `#ffffff`
- Radius: 8px
- Padding: 4px 12px
- Font: 13px Graphik Web weight 500
- Use: Risk-Free / No Credit Card Required reassurance pill

### Navigation
- Background: `#ffffff`
- Text: `#231e15`
- Radius: 3px (near-square nav-item corner)
- Padding: 8px
- Font: 13px Graphik Web weight 500
- Hover/Active: Teal Ink `#004e56`
- Use: Top horizontal nav ("Industries and Solutions", "Integrations", "Resources", "Pricing")

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://mailchimp.com/ (homepage live DOM — hero CTA, nav, pricing cards, badges); https://mailchimp.com/about/brand-assets/ (official brand page — "Cavendish Yellow is Mailchimp's hero color. We use Peppercorn for accents.")
**Tier 2 sources:** styles.refero.design/style/24929007-7e62-4c96-a940-7de65438a578 (Mailchimp — confirms Press Black `#231e15`, Voltage Yellow `#ffe01b`, Teal Ink `#004e56`, Graphik Web + Means Web, 26px pill / 3px nav / 8px badge / 10px card, warm-tinted shadow); getdesign.md/mailchimp — no entry (not listed)
**Conflicts unresolved:** none (Tier 1 live inspect and refero Tier 2 agree on color taxonomy, type system, and radii)

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 80px
- Notable: Button padding lands at 12px 24px; section gaps run a generous 80px+, giving the editorial layout room to breathe

### Grid & Container
- Max content width: ~1200px
- Hero: centered single column with the 48px Means Web serif headline as the anchor and a single yellow CTA
- Feature sections: photographic full-bleed blocks (slate-teal `#27455c` tint) with white headlines, alternating with white editorial blocks
- Pricing: card-based plan selector with hairline-bordered option cards and one warm-shadowed featured card

### Whitespace Philosophy
- **Editorial breathing room**: despite being a marketing tool, the page is airy and magazine-like — generous vertical rhythm, large serif headlines given space to read.
- **Flat segmentation**: sections separate by background swap (`#ffffff` ↔ `#f5f5f5` ↔ photographic slate) and hairlines, rarely by shadow.
- **One loud note**: the Cavendish-Yellow CTA is the single high-saturation element on an otherwise warm-neutral page — color used as punctuation, not decoration.

### Border Radius Scale
- Near-square (3px): nav items — a deliberate tight corner
- Small (8px): badges, trust pills
- Medium (10px): option / plan cards — the card workhorse
- Large (26px): buttons (full pill at button height)
- Pill (32px): tags / large rounded chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f5f5` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `1px solid #bcbab6` border | Option-card outlines, dividers |
| Ring (Level 2b) | `rgb(35,30,21) 0px 0px 0px 1px` box-shadow | The 1px peppercorn outline on pill buttons |
| Elevation (Level 3) | `rgba(35,30,21,0.15) 0px 0px 20px 3px` | The single featured pricing card — warm-tinted |

**Shadow Philosophy**: Mailchimp is a near-shadowless, hairline-driven system. Live inspection found `box-shadow: none` across the hero, nav, headings, and most cards; separation is communicated by the ash-white surface (`#f5f5f5`) and the silver-rule hairline (`#bcbab6`). The two shadows that do exist are both warm-tinted with peppercorn (`rgb(35,30,21)` / `rgba(35,30,21,0.15)`) rather than neutral gray — even the button's 1px outline ring is a box-shadow in peppercorn. This warmth-in-depth is consistent with the brand's hand-made, editorial atmosphere; generic gray shadows would feel mechanical and off-brand.

## 7. Do's and Don'ts

### Do
- Use Means Web editorial serif for headlines at weight 400 — the vintage-press serif is the brand's voice
- Use Graphik Web grotesque for all body, nav, button, and badge text
- Reserve Cavendish Yellow (`#ffe01b`) for the single primary CTA — keep it the one "action" color
- Use Peppercorn (`#231e15`) for text and the 1px button outline instead of pure black
- Outline pill buttons with a 1px peppercorn ring rendered as a box-shadow
- Separate sections with `#f5f5f5` tint and `#bcbab6` hairlines, not shadows
- Use full pill geometry (26px) on buttons, near-square (3px) on nav items
- Tint the rare elevation shadow warm (`rgba(35,30,21,0.15)`), never neutral gray
- Reserve Teal Ink (`#004e56`) for links — the only cool accent

### Don't
- Set headlines in a geometric sans — Means Web serif owns display, that's the whole point
- Spread Cavendish Yellow across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for headings — reserve warm Peppercorn `#231e15`
- Reach for drop shadows for elevation — separate with hairlines and tint first
- Use neutral gray shadows — when elevation is needed, tint it warm with peppercorn
- Make buttons sharp-cornered — every button is a full 26px pill
- Use bold (700) weight on the serif headlines — weight 400 is the editorial register
- Add a second saturated accent — yellow is the only loud color, teal is reserved for links

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero serif compresses, plan cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1280px | Full layout, centered hero, multi-column feature bands |
| Large Desktop | >1280px | Centered ~1200px content with generous margins |

### Touch Targets
- Primary CTA at 44px height, full pill — an unmistakable tap target
- Nav links at 13px within a comfortably padded header
- Trust badges and plan-card radios spaced for touch

### Collapsing Strategy
- Hero: 48px Means Web serif scales down on mobile, weight 400 maintained
- Feature bands: photographic full-bleed blocks maintain full-width, reduce internal padding
- Pricing: plan cards collapse from side-by-side to stacked single column
- White / ash / photographic sections maintain full-width treatment

### Image Behavior
- Hand-drawn Freddie illustrations and editorial imagery carry no shadow, consistent with the flat system
- Photographic feature blocks keep the slate-teal (`#27455c`) overlay tint behind white headlines
- Cards maintain 10px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Cavendish Yellow (`#ffe01b`)
- CTA / heading / body text: Peppercorn (`#231e15`)
- Link: Teal Ink (`#004e56`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Ash White (`#f5f5f5`)
- Warm surface: Warm Parchment (`#ebe1cd`)
- Hairline border: Silver Rule (`#bcbab6`)
- Secondary text: Warm Charcoal (`#403b3b`)
- Muted text: Graphite (`#706d67`)
- Photographic overlay: Slate Teal (`#27455c`)

### Example Component Prompts
- "Create a hero on white background. Headline at 48px Means Web serif weight 400, line-height 1.0, letter-spacing -1px, color #231e15. One yellow CTA pill: #ffe01b background, #231e15 text, 26px radius, 12px 24px padding, 13px Graphik Web weight 500, with a 1px peppercorn ring via box-shadow (rgb(35,30,21) 0 0 0 1px). Body copy at 16px Graphik Web, #231e15."
- "Design an option card: white background, 1px solid #bcbab6 border, 10px radius, no shadow, 8px padding. Title 24px Graphik Web weight 500, -0.32px tracking, #231e15. Body 16px Graphik Web, #000000."
- "Build a featured pricing card: white background, 10px radius, warm-tinted shadow rgba(35,30,21,0.15) 0px 0px 20px 3px, 24px 16px padding. Include a peppercorn trust badge: #231e15 background, #ffffff text, 8px radius, 4px 12px padding, 13px Graphik Web weight 500."
- "Create top nav: white header, Graphik Web 13px weight 500 links, #231e15 text with 3px near-square hover corner, teal #004e56 on active. Yellow #ffe01b CTA pill right-aligned with peppercorn 1px ring."

### Iteration Guide
1. Means Web serif (weight 400) for every headline; Graphik Web for every paragraph and control
2. Cavendish Yellow (`#ffe01b`) is the single action color — don't spread it
3. Peppercorn (`#231e15`) for text and the 1px button ring, never pure black for headings
4. Near-shadowless — separate with `#f5f5f5` tint and `#bcbab6` hairlines
5. Pill buttons (26px) with a 1px peppercorn box-shadow ring; near-square (3px) nav corners
6. Tint the rare elevation shadow warm (`rgba(35,30,21,0.15)`), never gray
7. Teal Ink (`#004e56`) is for links only — the one cool note

---

## 10. Voice & Tone

Mailchimp's voice is **plainspoken, genuine, and wryly funny** — a small-business champion that strips away B2B jargon and talks to the underdog like a knowledgeable friend, not a vendor. The official content style guide states the brand value clarity above all: *"We're weird but not inappropriate, smart but not snobbish. We prefer the subtle over the noisy, the wry over the farcical."* Humor is used only when it's natural — Freddie the mascot winks and high-fives but never talks, and the copy follows the same rule: dry, straight-faced, a touch eccentric, but never forced.

| Context | Tone |
|---|---|
| Hero headlines | Plainspoken, benefit-first. "Email & SMS marketing minus the learning curve." Confident, never hyperbolic. |
| Feature copy | Translator role — demystifies marketing jargon and actually educates, in plain English. |
| CTAs | Direct, low-pressure imperatives. "Start Free Trial", "Customize my experience". |
| Trust / reassurance | Concrete and calm. "Risk-Free • No Credit Card Required." States the promise plainly. |
| Humor | Dry and subtle. Freddie's wink, not a punchline — "the wry over the farcical". |

**Voice samples (verbatim from live homepage 2026-06-17):**
- "Email & SMS marketing minus the learning curve" — hero headline (benefit-first, plainspoken). *(verified live)*
- "Marketing that delivers results" — section heading (concrete promise, no hyperbole). *(verified live)*
- "Risk-Free • No Credit Card Required" — trust badge (plain reassurance). *(verified live)*

**Forbidden register** (from the official style guide): passive voice, slang and jargon, hyperbolic over-promises, "fluffy metaphors and cheap plays to emotion", forced humor, and anything condescending or exclusive.

## 11. Brand Narrative

Mailchimp was founded in **Atlanta in 2001** by **Ben Chestnut** and **Dan Kurzius** as a side project of their web-design agency, the Rocket Science Group ([Mailchimp — About](https://mailchimp.com/about/), [Wikipedia](https://en.wikipedia.org/wiki/Mailchimp)). It began as "an alternative to the oversized, expensive email software of the early 2000s" — built to give small-business owners the marketing tools their larger competitors took for granted. Wary of giving up control, Chestnut and Kurzius famously **bootstrapped the company from profits and took no outside investment** for two decades, an almost unheard-of path in SaaS ([Founder Stories — Dave Lu](https://www.davelu.com/p/founder-stories-ben-chestnut-of-mailchimp)).

That underdog origin is the company's stated mission to this day: *"Today, we continue to empower the underdog and strive to be the business partner we wish we had way back in the beginning"* ([Mailchimp — About](https://mailchimp.com/about/)). The design system is a direct expression of that posture — warm, hand-made, and human, deliberately rejecting the cold polish of enterprise software because the brand sees itself on the side of the small operator, not the incumbent.

In **September 2021, Intuit acquired Mailchimp for approximately $12 billion** in cash and stock ([Inside Philanthropy](https://www.insidephilanthropy.com/home/2021-9-22-after-a-big-acquisition-mailchimps-co-founders-are-the-latest-multi-billionaires-to-watch)). What Mailchimp refuses, visible in its design: the gradient-heavy, frictionless SaaS aesthetic and the hyperbolic over-promising of growth marketing. What it embraces: an editorial serif voice, a single voltage-yellow accent, Freddie the wordless winking mascot, and "outsider-art" illustration — a brand that is *"weird but not inappropriate, smart but not snobbish."*

## 12. Principles

1. **Empower the underdog.** The company's stated mission is to be "the business partner we wish we had way back in the beginning." *UI implication:* keep the interface approachable and jargon-free — demystify marketing rather than gatekeeping it behind enterprise polish.
2. **Clarity above all.** The style guide values clarity over entertainment. *UI implication:* the single yellow CTA and one-loud-note layout make the next step unambiguous; copy is plain English.
3. **Weird but not inappropriate.** Personality is a feature, not a risk. *UI implication:* the editorial serif, hand-drawn Freddie, and outsider-art illustration give the product a point of view — but humor stays "the wry over the farcical."
4. **Warmth over polish.** The brand sides with the human, not the machine. *UI implication:* Peppercorn instead of black, warm-tinted shadows instead of gray, parchment surfaces — every neutral leans warm.
5. **One action, one color.** Cavendish Yellow means "do this." *UI implication:* reserve the saturated yellow exclusively for the primary CTA so the action is never ambiguous.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Mailchimp user segments (solo founders, small-business owners, freelance marketers, creators), not individual people.*

**Dana Okafor, 34, Austin.** Runs a two-person specialty coffee subscription business. Set up her first email campaign in an afternoon without reading a manual. Chose Mailchimp because it felt made for someone her size, not for a 40-person marketing department. Distrusts tools whose homepages are wall-to-wall enterprise jargon.

**Marcus Bell, 41, Manchester.** A freelance marketer managing campaigns for five local clients. Values that the platform demystifies the jargon so he can explain results to non-technical shop owners. Notices and appreciates the brand's dry humor — the Freddie wink makes the work feel less like a chore.

**Priya Raman, 28, Bangalore.** A maker selling handmade goods who treats her newsletter as a creative outlet. Loves that the brand looks hand-made and editorial rather than corporate — the warm palette and serif headlines feel like a magazine she'd actually want to be in. Would be put off by a cold, gradient-heavy SaaS redesign.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no campaigns yet)** | White canvas. Single Peppercorn (`#231e15`) line at body size in plain English explaining nothing's been created yet, with one Cavendish-Yellow CTA to start. A Freddie illustration may appear — warm, not clinical. |
| **Empty (no audience/contacts)** | Warm Charcoal (`#403b3b`) single line: nothing imported yet, plus a clear path to add contacts. Honest, jargon-free. |
| **Loading (dashboard first paint)** | Skeleton blocks at final dimensions on `#f5f5f5` tinted surface, 10px radius. Flat pulse consistent with the near-shadowless system — no heavy shimmer. |
| **Loading (in-place refresh)** | Previous content stays visible; a subtle progress indicator rather than a blocking spinner. |
| **Error (action failed)** | Inline message in Peppercorn with a plain-language explanation and a concrete next step. No generic "Something went wrong" — states what happened and what to do. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "Required". Plain English, never condescending. |
| **Success (campaign sent)** | Brief inline confirmation in a calm, plainspoken tone; the Freddie high-five appears for genuine milestones — celebratory but never over-the-top. |
| **Skeleton** | `#f5f5f5` blocks at final dimensions, 10px radius, flat pulse. |
| **Disabled** | Reduced-opacity surface and text together; the yellow CTA fades rather than turning gray, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card / section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is warm and human but restrained — consistent with the editorial, near-shadowless aesthetic. Buttons respond to press with a subtle scale/opacity shift; sections fade-in from below at `motion-standard / ease-enter`. The brand's playfulness lives in illustration and copy (Freddie's wink), not in bouncy UI — so motion avoids spring and overshoot, which would read as gimmicky against the editorial register. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle on
https://mailchimp.com/ and https://mailchimp.com/about/brand-assets/:
- Hero H1 "Email & SMS marketing minus the learning curve" — Means Web 48px / weight 400 / -1px / color rgb(35,30,21)
- Section H2 "Marketing that delivers results" — Means Web 40px / 400 / -0.5px
- Primary CTA "Start Free Trial" — bg rgb(255,224,27) #ffe01b / text rgb(35,30,21) / radius 26px / 12px 24px / 1px peppercorn ring box-shadow
- Log In outline button — transparent / radius 26px / 1px peppercorn ring
- Nav items — color rgb(35,30,21) / radius 3px / 13px Graphik Web weight 500
- Link color rgb(0,78,86) #004e56 (310 occurrences)
- Trust badge "Risk-Free • No Credit Card Required" — bg rgb(35,30,21) / text white / radius 8px
- Option card — 1px solid rgb(188,186,182) #bcbab6 / radius 10px
- Featured plan card — shadow rgba(35,30,21,0.15) 0px 0px 20px 3px (warm-tinted)
- box-shadow: none across hero/nav/most headings (near-shadowless system)
- Brand-assets page verbatim: "Cavendish Yellow is Mailchimp's hero color. We use Peppercorn for accents."

Token-level claims (§1-9) are sourced from this live inspection and corroborated by
Tier 2 refero (styles.refero.design/style/24929007-7e62-4c96-a940-7de65438a578):
Press Black #231e15, Voltage Yellow #ffe01b, Teal Ink #004e56, Graphik Web + Means Web,
26px pill / 3px nav / 8px badge / 10px card, warm-tinted shadow. getdesign.md/mailchimp
has no entry.

Voice & Tone (§10) — verbatim from Mailchimp's official content style guide
(https://styleguide.mailchimp.com/voice-and-tone/): "We're weird but not inappropriate,
smart but not snobbish", "We prefer the subtle over the noisy, the wry over the farcical",
plainspoken / genuine / clarity-above-all, and the forbidden register (passive voice,
slang/jargon, hyperbole, fluffy metaphors, forced humor, condescension).

Brand Narrative (§11): Founded Atlanta 2001 by Ben Chestnut and Dan Kurzius as a side
project of the Rocket Science Group; bootstrapped with no outside investment; mission
"empower the underdog" verbatim from https://mailchimp.com/about/; acquired by Intuit
for ~$12B in September 2021. Sources: mailchimp.com/about, Wikipedia (Mailchimp),
Dave Lu founder-stories, Inside Philanthropy.

Personas (§13) are fictional archetypes informed by publicly observable Mailchimp user
segments (solo founders, small-business owners, freelance marketers, creators). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "warmth over polish as a rejection of enterprise software",
"one action one color") are editorial readings connecting Mailchimp's observed design and
stated values, not directly sourced Mailchimp statements.
-->
