---
id: 42dot
name: 42dot
display_name_kr: 포티투닷
country: KR
category: automotive
homepage: "https://42dot.ai/"
primary_color: "#786efa"
logo:
  type: favicon
  slug: "https://42dot.ai/icon.png"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "Monochrome black/white system with a single periwinkle-violet accent (#786efa) reserved for active topic tags. Dark chrome uses graphite #32353f (nav dropdown) and charcoal #282b32 (blog hero); secondary text/borders sit in slate #737d8c. Type is AstaSans with Noto Sans KR fallback."
  colors:
    primary: "#786efa"
    ink: "#000000"
    muted: "#737d8c"
    nav-dark: "#32353f"
    hero-dark: "#282b32"
    canvas: "#ffffff"
    surface: "#fbfbfb"
    card: "#f6f6f9"
    on-dark: "#ffffff"
  typography:
    family: { sans: "AstaSans", kr: "Noto Sans KR" }
    display-hero:  { size: 38, weight: 600, lineHeight: 1.45, use: "Hero headline on dark, AstaSans SemiBold" }
    section:       { size: 36, weight: 600, lineHeight: 1.60, use: "Section titles on light" }
    section-label: { size: 29, weight: 500, lineHeight: 1.45, use: "Blog index labels (Tags / Posts)" }
    card-title:    { size: 26, weight: 600, lineHeight: 1.50, use: "Blog / research card title" }
    nav:           { size: 14, weight: 500, lineHeight: 1.40, use: "Top nav item" }
    body:          { size: 14, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    tag:           { size: 11, weight: 400, lineHeight: 1.40, use: "Topic tag pill label" }
  spacing: { xs: 6, sm: 12, base: 16, md: 24, lg: 48, section: 64 }
  rounded: { none: 0, pill: 22, full: 9999 }
  shadow:
    dropdown: "rgba(0,0,0,0.2) 0px 4px 10px"
  components:
    tag-active:     { type: badge, bg: "#786efa", fg: "#ffffff", radius: "22px", padding: "6px 12px", font: "11px / 400 AstaSans", use: "Active / featured topic tag pill on homepage cards" }
    tag-filter:     { type: badge, fg: "#737d8c", border: "1px solid #737d8c", radius: "22px", padding: "6px 12px", font: "11px / 400 AstaSans", use: "Inactive tag filter chip on blog index" }
    blog-card:      { type: card, bg: "#f6f6f9", fg: "#000000", radius: "0px", padding: "48px", use: "Blog / research entry card on homepage" }
    nav-dropdown:   { type: card, bg: "#32353f", fg: "#ffffff", shadow: "rgba(0,0,0,0.2) 0px 4px 10px", use: "Mega-dropdown panel under top nav" }
    nav-item:       { type: tab, fg: "#ffffff", font: "14px / 500 AstaSans", active: "text #ffffff on active item; sub-items dimmed to 50% white", use: "Top navigation item on dark hero" }
    carousel-button: { type: button, bg: "#ffffff", fg: "#000000", radius: "9999px", use: "Circular prev / next carousel control" }
  components_harvested: true
---

# Design System Inspiration of 42dot

## 1. Visual Theme & Atmosphere

42dot (포티투닷) is Hyundai Motor Group's mobility-AI company, and its site reads exactly like an engineering-led autonomy lab that happens to have taste: a near-monochrome black-and-white system, cinematic dark hero footage, and a single restrained accent. The homepage opens on a full-bleed charcoal hero (`#282b32`) with white AstaSans headlines — "We Are A Mobility AI Company", "The Answer to Mobility and Everything" — layered over vehicle/road video, then resolves into airy off-white content bands (`#fbfbfb`, `#ffffff`) once you scroll past the fold. The impression is confident and technical rather than consumer-cute: this is a company that builds the software brain of a car, and the design signals precision over decoration.

The one deliberate spark of color is a periwinkle-violet (`#786efa`) reserved almost exclusively for active topic-tag pills ("#LLM", "#SDV", "#Active Learning"). Everything else — nav, body, headings, cards — is built from black (`#000000`) ink, a cool slate (`#737d8c`) for secondary text and hairline tag borders, and two grades of dark chrome: graphite (`#32353f`) for the mega-dropdown nav panels and charcoal (`#282b32`) for the blog hero. Because the palette is otherwise achromatic, that lone violet does a lot of work: it is the system's "this is live / this is selected" signal.

Typographically the system is unmistakably AstaSans (with a Noto Sans KR fallback for hangul), run at SemiBold 600 for the big statements — 38px on the hero, 36px on section titles — and stepped down to a quiet 14px / 400 for body. Geometry is deliberately flat and mostly square: cards carry a 0px radius and separate by tint (`#f6f6f9`) rather than shadow, the only real elevation being a soft `rgba(0,0,0,0.2)` drop on the nav dropdown. The two rounded exceptions are intentional — the 22px tag pills and the fully-circular carousel controls — so roundness itself reads as an interactive affordance.

**Key Characteristics:**
- Near-monochrome system: black `#000000` ink on white `#ffffff` / off-white `#fbfbfb`, with two dark chrome grades (`#32353f` nav, `#282b32` hero)
- Single periwinkle-violet accent (`#786efa`) reserved for active topic tags — the lone "selected/live" signal
- AstaSans (Noto Sans KR fallback) at SemiBold 600 for hero and section headlines
- Slate (`#737d8c`) for secondary text and 1px tag-filter hairline borders
- Flat depth: 0px-radius cards separated by tint (`#f6f6f9`), not elevation
- Cinematic dark hero footage under white headlines — engineering-lab confidence
- Pill (22px) tags and circular (9999px) carousel controls as the only rounded shapes

## 2. Color Palette & Roles

### Primary / Accent
- **Periwinkle Violet** (`#786efa`): The single saturated accent. Live inspection found it as the background of active/featured topic-tag pills on the homepage (16 instances) and as an occasional text highlight. In an otherwise achromatic system it is the "selected / live" signal.

### Ink & Text
- **Pure Black** (`#000000`): Primary text and heading color across light surfaces — the dominant foreground (300+ occurrences). 42dot uses true black, not a softened navy.
- **Muted Slate** (`#737d8c`): Secondary text, metadata, and the 1px hairline border on inactive tag-filter chips. The most common secondary foreground on the blog index.

### Dark Chrome
- **Nav Graphite** (`#32353f`): Background of the mega-dropdown navigation panels that open under the top nav.
- **Hero Charcoal** (`#282b32`): Background of the blog hero band and dark editorial sections; white headlines sit on top.

### Surface & Neutral
- **Pure White** (`#ffffff`): Page canvas, card surfaces on white bands, and all text/labels placed on dark chrome (nav, hero).
- **Off-White** (`#fbfbfb`): The primary light content band beneath the hero — a barely-there grey that keeps large sections from feeling stark.
- **Card Mist** (`#f6f6f9`): Fill for the blog / research entry cards on the homepage — a cool near-white that separates cards by tint rather than shadow.
- **On-Dark White** (`#ffffff`): Nav items, hero headlines, and tag-pill labels rendered on the dark chrome and on the violet accent.

## 3. Typography Rules

### Font Family
- **Sans**: `AstaSans` — the brand's Latin typeface, used for every headline, nav item, label, and body run.
- **Korean**: `Noto Sans KR` — the declared fallback for hangul, keeping bilingual (EN/KR) copy visually consistent.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Hero Display | AstaSans | 38px (2.40rem) | 600 | 1.45 (55.68px) | White on dark hero — "We Are A Mobility AI Company" |
| Section Title | AstaSans | 36px (2.22rem) | 600 | 1.60 (56.83px) | Black on light — "We Make Everything Autonomous and Frictionless" |
| Section Label | AstaSans | 29px (1.80rem) | 500 | 1.45 (41.76px) | Blog index labels — "Tags", "Posts" |
| Card Title | AstaSans | 26px (1.60rem) | 600 | 1.50 (38.40px) | Blog / research card headline |
| Nav Item | AstaSans | 14px (0.89rem) | 500 | 1.40 | Top-level nav; sub-items drop to weight 400 |
| Body | AstaSans | 14px (0.88rem) | 400 | 1.50 | Standard reading text |
| Tag Pill | AstaSans | 11px (0.70rem) | 400 | 1.40 | Topic tag label |

### Principles
- **SemiBold for statements, regular for reading**: Weight 600 carries every hero and section headline; weight 400/500 carries nav and body. The weight jump is the primary hierarchy signal in an otherwise low-contrast palette.
- **One family, two scripts**: AstaSans owns Latin; Noto Sans KR is the hangul fallback. They never swap — bilingual copy stays visually unified.
- **Generous line-height on display**: Section titles run at 1.6 line-height, giving large multi-line statements air rather than density.
- **Small, quiet body**: Body sits at 14px / 400 — 42dot lets the imagery and headlines lead; running text is deliberately understated.

## 4. Component Stylings

### Tags

**Active Tag Pill**
- Background: `#786efa`
- Text: `#ffffff`
- Radius: 22px
- Padding: 6px 12px
- Font: 11px / 400 / AstaSans
- Use: Active / featured topic tag on homepage cards ("#LLM", "#CES #SDV", "#Active Learning")

**Inactive Tag Filter**
- Text: `#737d8c`
- Border: 1px solid `#737d8c`
- Radius: 22px
- Padding: 6px 12px
- Font: 11px / 400 / AstaSans
- Use: Tag-filter chips on the blog index ("#AI", "#Software", "#Transformer")

### Cards & Containers

**Blog / Research Card**
- Background: `#f6f6f9`
- Text: `#000000`
- Radius: 0px
- Padding: 48px
- Use: Blog / research entry card on the homepage — separated by tint, no shadow

### Navigation

**Nav Dropdown Panel**
- Background: `#32353f`
- Text: `#ffffff`
- Shadow: `rgba(0,0,0,0.2) 0px 4px 10px`
- Use: Mega-dropdown panel that opens under a top-nav item

**Nav Item**
- Text: `#ffffff`
- Font: 14px / 500 / AstaSans
- Active: white `#ffffff` label; sub-items dimmed to 50% white
- Use: Top navigation item on the dark hero

### Buttons

**Carousel Control**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 9999px
- Use: Circular prev / next control on homepage carousels

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://42dot.ai/ | https://42dot.ai/blog
**Tier 2 sources:** getdesign.md/42dot (listed but 0 DESIGN.md files — no data); styles.refero.design/?q=42dot (no 42dot match — KR under-coverage)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px, with a dense small end for chips
- Scale: 6px, 12px, 16px, 24px, 48px, 64px
- Notable: tag pills use a tight 6px × 12px pad; blog cards use a generous 48px interior pad, giving the editorial grid a spacious, magazine feel

### Grid & Container
- Full-bleed cinematic hero band (dark), then centered content bands on white / off-white
- Homepage blog/research row is a horizontal card grid; each card is a 0px-radius `#f6f6f9` block
- Blog index splits into a "Tags" filter cloud and a "Posts" card grid
- Mega-dropdown nav panels (`#32353f`) expand the header into a dark full-width menu

### Whitespace Philosophy
- **Cinematic then calm**: a dense, imagery-heavy dark hero gives way to airy, generously-padded light content — the page breathes after the statement.
- **Tint over elevation**: sections and cards separate by background tint (`#fbfbfb`, `#f6f6f9`) and dark chrome, almost never by shadow.
- **Restraint as brand**: whitespace and monochrome do the heavy lifting so the lone violet accent stays loud.

### Border Radius Scale
- None (0px): cards, content containers — the default is square
- Pill (22px): topic tags
- Full (9999px): circular carousel controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page bands, cards, headings — the default |
| Tint (Level 1) | `#f6f6f9` / `#fbfbfb` background shift | Card and section separation without elevation |
| Dark chrome (Level 2) | `#32353f` / `#282b32` fill | Nav dropdown panels, hero band |
| Drop (Level 3) | `rgba(0,0,0,0.2) 0px 4px 10px` | The one real shadow — nav mega-dropdown panel |

**Shadow Philosophy**: 42dot is a near-flat system. Live inspection found `box-shadow: none` across the hero, headings, blog cards, and tags; the only measured elevation is a soft `rgba(0,0,0,0.2) 0px 4px 10px` under the nav mega-dropdown. Depth is otherwise communicated by tint (`#f6f6f9` cards on `#fbfbfb` bands) and by the dark chrome (`#32353f`, `#282b32`) rather than by layered shadows — a modern, engineered flatness that suits an autonomy company more than a decorative card-stack aesthetic.

## 7. Do's and Don'ts

### Do
- Use AstaSans (Noto Sans KR fallback) at SemiBold 600 for hero and section headlines
- Reserve periwinkle-violet (`#786efa`) for the active/selected state — keep it the single accent
- Use pure black (`#000000`) for body and headings on light surfaces
- Separate cards and sections by tint (`#f6f6f9`, `#fbfbfb`), not shadow
- Keep cards square (0px radius); reserve rounding for tags (22px) and circular controls
- Use slate (`#737d8c`) for secondary text and 1px tag hairline borders
- Set white (`#ffffff`) headlines over the dark chrome (`#282b32` / `#32353f`) hero and nav

### Don't
- Spread the violet accent across many elements — it dilutes the single "selected" signal
- Use softened navy for text — 42dot uses true black `#000000`
- Reach for drop shadows to separate content — tint and dark chrome do that job
- Round the cards — the square 0px card is the system default
- Set headlines in a light weight — display is always SemiBold (600)
- Introduce a second saturated hue — the system is monochrome plus one violet
- Use AstaSans body at a heavy weight — running text stays quiet at 14px / 400

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, dropdown becomes a full-screen menu |
| Tablet | 640-1024px | 2-up card grids, moderate padding |
| Desktop | 1024-1440px | Full layout, cinematic hero, multi-column card rows, mega-dropdown nav |

### Touch Targets
- Nav items sit in a 44-48px-tall header row for comfortable tapping
- Tag pills at ~24px height with 6px × 12px padding — compact but tappable
- Circular carousel controls at ~45px diameter

### Collapsing Strategy
- Hero: 38px AstaSans headline scales down on mobile, weight 600 maintained
- Mega-dropdown (`#32353f`) collapses into a stacked full-screen mobile menu
- Blog/research card row: multi-column → stacked single column
- Tag cloud on the blog index wraps to multiple rows

### Image Behavior
- Cinematic hero footage crops to fill on all sizes; white headlines stay legible over the dark charcoal
- Blog card thumbnails maintain their square (0px) framing across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Accent / active state: Periwinkle Violet (`#786efa`)
- Ink / body / heading: Pure Black (`#000000`)
- Secondary text / tag border: Muted Slate (`#737d8c`)
- Nav dropdown background: Nav Graphite (`#32353f`)
- Hero background: Hero Charcoal (`#282b32`)
- Canvas / on-dark text: Pure White (`#ffffff`)
- Light content band: Off-White (`#fbfbfb`)
- Card fill: Card Mist (`#f6f6f9`)

### Example Component Prompts
- "Create a cinematic hero: full-bleed `#282b32` charcoal background with a video, white AstaSans headline at 38px weight 600, line-height 1.45 — 'We Are A Mobility AI Company'. No shadow."
- "Design a blog card: `#f6f6f9` background, 0px radius, 48px padding, no shadow. Title 26px AstaSans weight 600 `#000000`. A periwinkle tag pill: `#786efa` background, white text, 22px radius, 6px 12px padding, 11px AstaSans."
- "Build a tag-filter row: pills with transparent background, `#737d8c` text, 1px solid `#737d8c` border, 22px radius, 6px 12px padding, 11px AstaSans."
- "Create a top nav on a `#282b32` hero: AstaSans 14px weight 500 white items; a mega-dropdown panel with `#32353f` background and a `rgba(0,0,0,0.2) 0px 4px 10px` shadow."

### Iteration Guide
1. AstaSans SemiBold (600) for every headline; 14px / 400 for body
2. `#786efa` is the single accent — reserve it for the active/selected state
3. No shadows except the nav dropdown — separate with `#f6f6f9` / `#fbfbfb` tint
4. Cards are square (0px); only tags (22px) and carousel controls (9999px) round
5. Text is true black `#000000`, secondary is slate `#737d8c`
6. Dark chrome is `#32353f` (nav) and `#282b32` (hero); white text on both

---

## 10. Voice & Tone

42dot's voice is **declarative, technical, and quietly ambitious** — an engineering company stating a mission rather than selling a product. The homepage statements ("We Are A Mobility AI Company", "The Answer to Mobility and Everything", "We Make Everything Autonomous and Frictionless") are short, present-tense, and confident, with no exclamation urgency and no consumer hype. Bilingual (EN/KR) copy carries the same register in both scripts: plain, capable, forward-looking.

| Context | Tone |
|---|---|
| Hero statements | Declarative, mission-framed. "We Make Everything Autonomous and Frictionless." Confident, never salesy. |
| Section titles | Capability-first. "Technology", "Mobility", "AEV", "Come Ride With Us!". |
| Blog / research titles | Precise and specific. "42dot LLM 1.3B", "Active Learning을 통한 지속적인 모델 성능 개선". |
| Tags | Terse technical labels. "#LLM", "#SDV", "#3DObjectDetection", "#Transformer". |
| Careers | Inviting but grounded. "Open Roles", "42dot Way". |

**Voice samples (verbatim from live site, 2026-07-02):**
- "We Are A Mobility AI Company" — hero headline (mission statement). *(verified live)*
- "We Make Everything Autonomous and Frictionless" — section title (product thesis). *(verified live)*
- "The Answer to Mobility and Everything" — hero sub-statement. *(verified live)*

**Forbidden register**: consumer-app hype, exclamation-heavy marketing, undefined buzzwords without a technical anchor, decorative superlatives ("revolutionary", "game-changing").

## 11. Brand Narrative

42dot (포티투닷) was founded in **2019** by **송창현 (Song Chang-hyun)**, the former CTO of Naver and head of Naver Labs, with the ambition of building the full software stack for autonomous mobility — from perception and driving intelligence to the vehicle's operating system. The name nods to Douglas Adams' "42" (the answer to life, the universe, and everything), reframed on the site as "The Answer to Mobility and Everything." The company positions itself not as a car maker but as a **mobility AI company**: the software brain that makes vehicles and fleets autonomous.

In **2022**, 42dot was acquired by **Hyundai Motor Group** (Hyundai Motor and Kia taking a majority stake), becoming the group's core software and autonomy arm and anchoring its Software-Defined Vehicle (SDV) strategy. Its work spans autonomous driving (the AKit full-stack), Software-Defined Vehicle and Software-Defined Fleet platforms, an in-house 42dot LLM, and TAP! — an integrated autonomous-mobility service piloted on Korean roads.

What the design refuses, visible in the system: the decorative, consumer-cute chrome of a lifestyle app, and the heavy card-stack skeuomorphism of legacy dashboards. What it embraces: a near-monochrome, engineered flatness; cinematic dark hero footage; a single disciplined violet accent; and bilingual copy that states capability plainly. The aesthetic says "we build the serious software inside the car" more than "we want to delight you."

## 12. Principles

1. **Autonomy is the product; software is the medium.** 42dot sells intelligence, not chrome. *UI implication:* let imagery and precise headlines lead; keep the interface quiet and monochrome so the technology is the subject.
2. **One accent, one meaning.** The lone violet (`#786efa`) marks what is active or selected. *UI implication:* never spend the accent on decoration — reserve it for the live/selected state so intent is unambiguous.
3. **Flat and engineered.** Depth comes from tint and dark chrome, not shadow stacks. *UI implication:* separate content with `#f6f6f9`/`#fbfbfb` tint and `#32353f`/`#282b32` bands; keep cards square.
4. **State it, don't sell it.** Copy is declarative and present-tense. *UI implication:* short mission-framed headlines in SemiBold; no exclamation urgency, no undefined buzzwords.
5. **Bilingual by default.** EN and KR carry equal weight. *UI implication:* AstaSans for Latin, Noto Sans KR for hangul, one visual system across both scripts.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable 42dot audiences (automotive OEM engineers, autonomy researchers, mobility-service riders, and prospective hires), not individual people.*

**정민호, 38, 서울.** A software architect at an automotive OEM evaluating SDV platforms. Reads 42dot's technology and blog pages for architectural depth, not marketing. Trusts the brand precisely because the site is engineered and understated rather than flashy.

**Sarah Kim, 29, Seoul.** An autonomy/ML researcher who follows the 42dot blog and research feed for posts like "42dot LLM 1.3B" and active-learning work. Filters by tags ("#LLM", "#Transformer") and values that the writing is specific and technical.

**이수현, 44, 판교.** A mobility-service operations lead assessing TAP! and fleet software for a pilot. Wants clarity on capability and reliability; responds to the calm, capability-first tone over consumer hype.

**David Park, 26, remote.** A new-grad engineer browsing "Open Roles" and "42dot Way". Reads the careers pages to gauge whether the culture is genuinely engineering-led. The restrained, confident design reinforces that impression.

## 14. States

| State | Treatment |
|---|---|
| **Empty (blog filter, no matches)** | White canvas. Single Pure Black (`#000000`) line explaining no posts match the selected tags, with a path to clear filters. No illustration clutter. |
| **Empty (saved / list, none yet)** | Muted Slate (`#737d8c`) single line stating nothing is here yet, plus a route back. Calm and honest. |
| **Loading (blog / card grid)** | Skeleton blocks at final card dimensions on `#f6f6f9`, 0px radius. Flat pulse — no shadow shimmer, consistent with the near-flat system. |
| **Loading (in-place fetch)** | Subtle progress within the section; previous content stays visible rather than blanking. |
| **Error (fetch failed)** | Inline message in Pure Black with a plain-language explanation and a retry. No bare "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input in a warm error tone; states what is valid, not just "필수". |
| **Success (submitted / applied)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f6f6f9` blocks at final dimensions, 0px radius, flat pulse. |
| **Disabled** | Muted Slate (`#737d8c`) text on reduced-opacity surface; the violet accent fades rather than switching to grey, to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, tag press, focus |
| `motion-standard` | 240ms | Dropdown open, card/section reveal, carousel slide |
| `motion-slow` | 400ms | Hero footage fades, page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdown panels, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, carousel |

**Motion rules**: Motion is functional and composed — matching the engineered, near-flat aesthetic. The nav mega-dropdown (`#32353f`) expands with `motion-standard / ease-enter`; carousels slide horizontally; hero footage cross-fades slowly as ambient atmosphere, not interactive delight. No bounce or spring — an autonomy company signals steadiness and control. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and hero footage holds a still frame; the site stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on 2 surfaces:
- https://42dot.ai/ — dark hero #282b32, white AstaSans headline 38px/600; section titles
  35.52px/600 black; blog/research cards #f6f6f9 0px radius 48px padding; active tag pills
  bg rgb(120,110,250) #786efa white text, 22.4px radius, 5.6px 12px padding, 11.2px;
  nav dropdown bg rgb(50,53,63) #32353f with rgba(0,0,0,0.2) 0px 4px 10px shadow;
  circular carousel buttons #ffffff 50% radius.
- https://42dot.ai/blog — active tag pills #786efa ×16; inactive tag filters transparent,
  rgb(115,125,140) #737d8c text + 1px solid rgba(115,125,140,0.3) border; blog hero
  rgb(40,43,50) #282b32; card titles AstaSans 25.6px/600; section labels 28.8px/500.

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Proof block).

Voice samples (§10) are verbatim from the live homepage (hero + section statements).

Brand narrative (§11): 42dot (포티투닷) founded 2019 by Song Chang-hyun (former Naver CTO /
Naver Labs head); acquired by Hyundai Motor Group in 2022 (Hyundai + Kia majority stake),
anchoring the group's SDV strategy; products span AKit autonomous driving, SDV/SDF platforms,
42dot LLM, and TAP! mobility service. The company's mobility-AI positioning and the taglines
are verbatim from the live site; founding/acquisition details are widely documented public
facts, not directly quoted from a verified 42dot statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable 42dot audiences
(OEM engineers, autonomy researchers, mobility riders, prospective hires). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "one accent, one meaning", "flat and engineered as a rejection of
consumer-cute chrome") are editorial readings connecting 42dot's observed design to its
positioning, not directly sourced 42dot statements.
-->
