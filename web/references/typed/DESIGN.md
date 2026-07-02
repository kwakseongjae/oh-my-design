---
id: typed
name: Typed (Business Canvas)
display_name_kr: 타입드 (비즈니스캔버스)
country: KR
category: productivity
homepage: "https://typed.do/"
primary_color: "#a88ef5"
logo:
  type: favicon
  slug: "https://framerusercontent.com/images/9k3ECSkXaY4oMl9xFCpVzF5TmJE.png"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "Two brand-owned surfaces. typed.do (Typed product, now a shutdown notice) carries the residual Typed identity: violet CTA (#a88ef5) + lavender card border (#c9b5f4) on a lavender-white canvas (#f9f8fc), Helvetica Neue. business-canvas.com (parent corporate site, Framer-built) carries the dark cinematic system: Pretendard family, black canvas (#000000), electric-lime signal (#cedc00) used as a glow, 12/16px cards, 100px pill links, #333333 footer."
  colors:
    primary: "#a88ef5"
    primary-soft: "#c9b5f4"
    accent-lime: "#cedc00"
    canvas-light: "#f9f8fc"
    canvas-dark: "#000000"
    surface: "#ffffff"
    surface-dark: "#333333"
    ink: "#1a1a1a"
    muted: "#6b6b6b"
    faint: "#888888"
    on-dark-muted: "#aaaaaa"
    on-dark-soft: "#cccccc"
  typography:
    family: { product: "Helvetica Neue", corporate: "Pretendard" }
    hero:         { size: 36, weight: 400, lineHeight: 1.3, use: "Corporate hero / blog headline, Pretendard" }
    section:      { size: 24, weight: 800, use: "Section title, Pretendard ExtraBold" }
    notice-title: { size: 24, weight: 700, use: "Typed notice headline, Helvetica Neue Bold" }
    subhead:      { size: 22, weight: 700, use: "Nav / section link, Pretendard Bold" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Body text, Helvetica Neue / Pretendard" }
    button:       { size: 14, weight: 600, use: "CTA label, Helvetica Neue" }
    meta:         { size: 14, weight: 400, use: "Author / meta caption, Pretendard Medium" }
    nav:          { size: 12, weight: 400, use: "Corporate nav / pill label, Pretendard" }
  spacing: { xs: 4, sm: 6, md: 12, base: 16, chip: 18, lg: 24, xl: 30, xxl: 32, section: 40 }
  rounded: { sm: 8, md: 12, lg: 16, round: 40, pill: 100 }
  shadow:
    card: "rgba(0,0,0,0.03) 0px 4px 10px"
    glow-lime: "0px 0px 10px #cedc00"
  components:
    button-primary: { type: button, bg: "#a88ef5", fg: "#ffffff", radius: "8px", padding: "12px 24px", font: "14px / 600 Helvetica Neue", use: "Typed primary CTA (migration / action button)" }
    notice-card:     { type: card, bg: "#ffffff", border: "2px solid #c9b5f4", radius: "16px", padding: "40px 30px", shadow: "0px 4px 10px rgba(0,0,0,0.03)", use: "Typed white notice / content card on lavender canvas" }
    pill-link:       { type: button, bg: "#000000", radius: "100px", padding: "6px 18px", shadow: "0px 0px 10px #cedc00", font: "12px / 400 Pretendard", use: "Corporate outbound pill link on dark canvas, electric-lime glow" }
    footer-bar:      { type: card, bg: "#333333", fg: "#ffffff", padding: "16px 32px", use: "Corporate footer contact / links bar" }
    nav-item:        { type: tab, fg: "#aaaaaa", active: "text #ffffff", font: "22px / 700 Pretendard Bold", use: "Corporate section nav (HOME / ABOUT / PRODUCT)" }
    lime-marker:     { type: badge, bg: "#cedc00", fg: "#000000", radius: "0px", font: "16px / 400 Pretendard", use: "Electric-lime text highlight / signal marker" }
  components_harvested: true
---

# Design System Inspiration of Typed (Business Canvas)

## 1. Visual Theme & Atmosphere

Typed (타입드) is the flagship document-and-knowledge workspace built by the Korean productivity-software company Business Canvas (비즈니스캔버스), and its brand today lives across two very different but deliberately paired surfaces. The Typed product site (typed.do) — now a graceful shutdown notice — preserves the product's residual identity: a soft lavender-white canvas (`#f9f8fc`), a single confident electric violet (`#a88ef5`) reserved for the one call-to-action, a white notice card (`#ffffff`) ringed by a 2px soft-lavender border (`#c9b5f4`), and clean near-black text (`#1a1a1a`) over quiet muted grey (`#6b6b6b`). It reads calm, literate, and un-anxious — a product saying goodbye with dignity rather than a dead 404.

The parent corporate surface (business-canvas.com) carries the other half of the personality: a dark, cinematic, full-bleed scroll narrative set on pure black (`#000000`) with white and stepped-grey Pretendard text (`#aaaaaa`, `#cccccc`) telling the company's "유한의 여정, 무한의 가능성" (finite journey, infinite possibility) story. The signature move here is an electric lime (`#cedc00`) deployed not as fill but as a glow — a `0px 0px 10px` halo behind pill links and a highlight marker behind key phrases — a jolt of energy against the darkness. Geometry is soft and modern: 12px and 16px radius cards, full 100px pill links, 40px round carousel controls, and a `#333333` footer bar.

Together the system reads as **calm-violet product plus high-energy dark corporate** — two moods held by one company. The violet is the human, approachable product voice; the black-and-lime is the ambitious, editorial company voice. There is very little heavy chrome: separation comes from tint (`#f9f8fc` light vs `#000000` dark), soft borders, and a single near-invisible card shadow (`rgba(0,0,0,0.03)`), never stacked elevation. Occasional faint grey (`#888888`) handles the lowest-emphasis captions.

**Key Characteristics:**
- Electric violet (`#a88ef5`) as the single Typed "action" color — reserved for the one CTA
- Soft-lavender 2px card border (`#c9b5f4`) framing white notice cards on a lavender canvas (`#f9f8fc`)
- Dark cinematic corporate canvas (`#000000`) with white / stepped-grey Pretendard text (`#aaaaaa`, `#cccccc`)
- Electric-lime (`#cedc00`) used as a glow halo and highlight marker, never as a solid fill
- Two type voices: Helvetica Neue on the product surface, Pretendard (five weights) on the corporate surface
- Near-black ink (`#1a1a1a`) and muted grey (`#6b6b6b`) instead of pure-black body text on light
- Pill-and-round geometry — 100px pill links, 40px round controls, 12/16px cards, 8px CTA
- Flat depth: a single `rgba(0,0,0,0.03)` card shadow; grouping by tint and border, not stacked shadows

## 2. Color Palette & Roles

### Primary
- **Typed Violet** (`#a88ef5`): The primary brand color and single CTA background on typed.do. A soft, confident electric violet — the product's "do this" color.
- **Lavender Border** (`#c9b5f4`): A 2px soft-lavender outline on the white notice card; the muted sibling of the violet, used for framing rather than action.

### Accent
- **Electric Lime** (`#cedc00`): Business Canvas's signal accent. Never a solid fill — it appears as a `0px 0px 10px` glow halo behind pill links and as a highlight marker behind emphasized phrases. Maximum energy, minimum area.

### Canvas & Surface
- **Lavender Canvas** (`#f9f8fc`): The near-white, faintly violet page background on the Typed product surface — softer and warmer than pure white.
- **Dark Canvas** (`#000000`): Pure black full-bleed background on the corporate scroll narrative.
- **Surface White** (`#ffffff`): White notice / content card fill, and text color on violet and on dark.
- **Surface Dark** (`#333333`): The corporate footer bar and dark secondary surface.

### Text
- **Ink** (`#1a1a1a`): Primary near-black text and headings on light surfaces — warm, not harsh.
- **Muted** (`#6b6b6b`): Secondary / supporting copy on light surfaces (the shutdown subtext).
- **Faint** (`#888888`): Lowest-emphasis captions and fine print on light.
- **On-Dark Muted** (`#aaaaaa`): Grey body / label text on the black corporate canvas.
- **On-Dark Soft** (`#cccccc`): Slightly brighter grey for sub-headings on dark.

## 3. Typography Rules

### Font Family
- **Product surface (Helvetica Neue)**: typed.do uses `"Helvetica Neue", Helvetica, Arial, sans-serif` for its notice headline, subtext, and CTA — a neutral, timeless grotesque.
- **Corporate surface (Pretendard)**: business-canvas.com uses the `Pretendard` family across five named weights — Regular, Medium, SemiBold, Bold, ExtraBold — the de-facto Korean product font, tuned for dense hangul legibility.

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Corporate Hero | Pretendard | 36px | 400 | Blog / about headline, large editorial scale |
| Section Title | Pretendard ExtraBold | 24px | 800 | "BCU", section anchors on dark |
| Notice Title | Helvetica Neue | 24px | 700 | Typed shutdown headline "We're saying goodbye" |
| Nav / Section Link | Pretendard Bold | 22px | 700 | Corporate section navigation |
| Body | Helvetica Neue / Pretendard | 16px | 400 | Standard reading text (line-height 1.5) |
| CTA Label | Helvetica Neue | 14px | 600 | Violet migration button label |
| Meta / Author | Pretendard Medium | 14px | 400 | Blog author, role captions |
| Nav / Pill Label | Pretendard | 12px | 400 | Corporate pill links, small nav labels |

### Principles
- **Two surfaces, two type voices**: Helvetica Neue is the calm product voice; Pretendard is the ambitious corporate voice. They never mix within one surface.
- **Weight carries hierarchy on dark**: the corporate site steps from ExtraBold (800) titles down through Bold, SemiBold, Medium to Regular — weight, not color, is the primary signal.
- **Hangul-first sizing**: body sits at 16px with 1.5 line-height for comfortable hangul reading.
- **Restraint on the product surface**: the shutdown notice uses just three type sizes (24 / 16 / 14) — nothing decorative.

## 4. Component Stylings

### Buttons

**Typed Primary CTA**
- Background: `#a88ef5`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 24px
- Font: 14px / 600 / Helvetica Neue
- Height: 41px
- Use: The single primary action on typed.do (migration / action button)

**Corporate Pill Link**
- Background: `#000000`
- Radius: 100px
- Padding: 6px 18px
- Shadow: `0px 0px 10px #cedc00` (electric-lime glow)
- Font: 12px / 400 / Pretendard
- Height: 41px
- Use: Outbound pill links on the dark corporate canvas ("리캐치 웹사이트 바로가기")

### Cards & Containers

**Notice Card**
- Background: `#ffffff`
- Border: 2px solid `#c9b5f4`
- Radius: 16px
- Padding: 40px 30px
- Shadow: `0px 4px 10px rgba(0,0,0,0.03)`
- Use: The white Typed notice / content card centered on the lavender canvas

**Corporate Content Card**
- Radius: 12px
- Padding: 24px
- Use: Framer-built stat / story cards on the corporate scroll (media cards, "CANVAS Crew" stat card)

### Badges

**Lime Highlight Marker**
- Background: `#cedc00`
- Text: `#000000`
- Radius: 0px
- Font: 16px / 400 / Pretendard
- Use: Electric-lime highlight bar drawn behind emphasized phrases on the corporate site

### Navigation

**Corporate Section Nav**
- Text: `#aaaaaa`
- Active: `#ffffff` text
- Font: 22px / 700 / Pretendard Bold
- Use: Section navigation on the corporate site (HOME / ABOUT / PRODUCT / NEWSROOM)

### Footer
- Background: `#333333`
- Text: `#ffffff`
- Padding: 16px 32px
- Use: Corporate footer contact / links bar (관련 사이트 / 공지사항 / Contact Us)

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://typed.do/ | https://www.business-canvas.com/ | https://www.business-canvas.com/en/blog/launch-business-canvas-website
**Tier 2 sources:** getdesign.md/typed (0 DESIGN.md files — not listed); styles.refero.design/?q=typed (no brand-specific match — default browse grid returned)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px (measured paddings: 4, 6, 12, 16, 18, 24, 30, 32, 40px)
- Notable: the Typed notice card uses a generous 40px 30px inner padding; corporate content cards use a clean 24px; the footer bar uses 16px 32px

### Grid & Container
- Typed product surface: a single centered notice card (max ~544px wide) floating on the lavender canvas — one column, one message
- Corporate surface: full-bleed, full-height cinematic scroll sections stacked vertically, each a self-contained "page" (Scroll to page 1–6 controls)
- Content cards group into responsive grids on the corporate story sections

### Whitespace Philosophy
- **One idea per viewport**: the corporate scroll gives each statement its own full screen; the product notice gives the single goodbye message a wide, calm frame.
- **Tint over borders**: sections separate by canvas tint (`#f9f8fc` light vs `#000000` dark), not heavy dividers.
- **Air around the CTA**: the violet button sits alone with room to breathe — reinforcing it as the single action.

### Border Radius Scale
- Small (8px): the primary CTA
- Medium (12px): corporate content / media cards
- Large (16px): the Typed notice card
- Round (40px): corporate carousel / control buttons
- Pill (100px): outbound corporate links

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Most surfaces, corporate dark sections, text |
| Card (Level 1) | `rgba(0,0,0,0.03) 0px 4px 10px` | The single Typed notice card — a near-invisible lift |
| Glow (Accent) | `0px 0px 10px #cedc00` | Electric-lime halo behind corporate pill links |
| Tint (Grouping) | `#f9f8fc` vs `#000000` canvas shift | Section / surface separation without elevation |

**Shadow Philosophy**: The system is nearly shadowless. On the light product surface there is exactly one soft card shadow (`rgba(0,0,0,0.03)`) — barely perceptible, just enough to float the notice off the lavender canvas. On the dark corporate surface, "depth" is created by the electric-lime glow (`#cedc00`) rather than any drop shadow: the halo makes a pill link feel active and energized against pure black. Grouping is done with canvas tint and the soft 2px lavender border, never with stacked elevation.

## 7. Do's and Don'ts

### Do
- Reserve violet (`#a88ef5`) for the single primary CTA — keep it the one "action" color
- Frame white notice cards with the 2px soft-lavender border (`#c9b5f4`) on the lavender canvas (`#f9f8fc`)
- Use the electric lime (`#cedc00`) as a glow or highlight marker only — never as a solid fill
- Set the product surface in Helvetica Neue and the corporate surface in Pretendard
- Use near-black ink (`#1a1a1a`) for body text on light, not pure black
- Keep the corporate canvas pure black (`#000000`) with stepped-grey (`#aaaaaa`, `#cccccc`) text hierarchy
- Use pill geometry for outbound links (100px) and soft radii for cards (12–16px)
- Let one idea own one viewport — calm, generous framing over dense stacking

### Don't
- Spread violet across many elements — it dilutes the single-action signal
- Fill areas with the electric lime — it is a glow / highlight, not a background
- Mix Helvetica Neue and Pretendard within the same surface
- Use pure black (`#000000`) for body text on the light product canvas — reserve near-black `#1a1a1a`
- Stack drop shadows for elevation — the system floats on a single `rgba(0,0,0,0.03)` lift
- Use sharp square corners on interactive chrome — links are pills, cards are rounded
- Add a second saturated accent — violet (product) and lime (corporate) are the only two hues

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; corporate scroll sections stack full-height; notice card fills width |
| Tablet | 640–1024px | Moderate padding; 2-up corporate story cards |
| Desktop | 1024–1440px | Full cinematic scroll; centered notice card at ~544px |

### Touch Targets
- Typed CTA at 41px height with 12px 24px padding — comfortable primary target
- Corporate pill links at 41px height, full 100px radius for an unmistakable tap area
- Round carousel controls at 40px

### Collapsing Strategy
- Corporate scroll: each full-height section maintains its full-bleed treatment, internal padding reduces on mobile
- Notice card: fixed max-width, gains side margin on large screens and fills width on mobile
- Story card grids: multi-column → stacked single column

### Image Behavior
- Corporate media/video cards keep the 12px radius (top-rounded `12px 12px 0px 0px` for media headers) across breakpoints
- The notice card carries no imagery — text-only, consistent at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Typed Violet (`#a88ef5`)
- Card border: Lavender (`#c9b5f4`)
- Accent glow / highlight: Electric Lime (`#cedc00`)
- Light canvas: Lavender White (`#f9f8fc`)
- Dark canvas: Black (`#000000`)
- Card / on-violet text: White (`#ffffff`)
- Footer / dark surface: `#333333`
- Ink text: `#1a1a1a`
- Muted text: `#6b6b6b`
- Faint text: `#888888`
- Grey on dark: `#aaaaaa` / `#cccccc`

### Example Component Prompts
- "Create a centered notice card: white `#ffffff` background, 2px solid `#c9b5f4` border, 16px radius, 40px 30px padding, shadow `0px 4px 10px rgba(0,0,0,0.03)`, on a `#f9f8fc` lavender canvas. Title 24px Helvetica Neue weight 700 `#1a1a1a`; subtext 16px weight 400 `#6b6b6b`. One violet CTA: `#a88ef5` background, white text, 8px radius, 12px 24px padding, 14px weight 600."
- "Build a dark corporate section: pure black `#000000` background. Hero 36px Pretendard weight 400 white; grey supporting text `#aaaaaa`. An outbound pill link: transparent on black, 100px radius, 6px 18px padding, with an electric-lime glow `0px 0px 10px #cedc00`, 12px Pretendard label."
- "Add a lime highlight marker: `#cedc00` background bar behind a phrase, `#000000` text, 0px radius — used sparingly for emphasis."
- "Create a footer bar: `#333333` background, white text, 16px 32px padding, links 관련 사이트 / 공지사항 / Contact Us."

### Iteration Guide
1. Violet (`#a88ef5`) is the single product action color — never spread it
2. Electric lime (`#cedc00`) is glow / highlight only — never a fill
3. Helvetica Neue on the product surface, Pretendard on the corporate surface — don't mix
4. One soft shadow (`rgba(0,0,0,0.03)`); otherwise group by tint and the 2px lavender border
5. Pills (100px) for links, soft radii (12–16px) for cards, 8px for the CTA
6. Near-black `#1a1a1a` for body on light; stepped greys (`#aaaaaa`, `#cccccc`) on black

---

## 10. Voice & Tone

Business Canvas / Typed speaks in a **calm, literate, quietly ambitious** register — a company that treats work as a journey worth narrating and treats its users with dignity even at the end. The clearest proof is the product's own farewell: rather than a broken page, typed.do shows a composed notice that begins "We're saying goodbye" and explains, plainly, that the service has been discontinued and where users can migrate. No spin, no upsell. The corporate voice is more editorial and aspirational — the about narrative reads like a manifesto ("결과에 앞서 과정에서부터 증명하는 팀") rather than a feature list.

| Context | Tone |
|---|---|
| Product notices | Calm, honest, dignified. "We're saying goodbye." States the fact and the next step. |
| Corporate hero | Editorial, mission-framed. "소프트웨어를 통해 기업의 일을 더 쉽게, 더 효율적으로, 더 효과적으로." |
| About narrative | Reflective, almost literary. Frames the company as a journey ("유한의 여정, 무한의 가능성"). |
| Links / CTAs | Plain and direct. "Migration Guide", "리캐치 웹사이트 바로가기". |

**Voice samples (verbatim from live surfaces):**
- "We're saying goodbye" — typed.do shutdown headline. *(verified live 2026-07-02)*
- "Typed.do has been discontinued" — typed.do shutdown subtext. *(verified live 2026-07-02)*
- "소프트웨어를 통해 기업의 일을 더 쉽게, 더 효율적으로, 더 효과적으로" — business-canvas.com hero. *(verified live 2026-07-02)*
- "결과에 앞서 과정에서부터 증명하는 팀" — corporate about section. *(verified live 2026-07-02)*

**Forbidden register**: hype superlatives, fake urgency, blaming users, and (critically) treating a shutdown as a marketing moment. The farewell must read as respect, not spin.

## 11. Brand Narrative

Business Canvas (비즈니스캔버스) is a Korean productivity-software company whose stated purpose — verbatim on its corporate hero — is "소프트웨어를 통해 기업의 일을 더 쉽게, 더 효율적으로, 더 효과적으로" ("making companies' work easier, more efficient, and more effective through software"). Its flagship product, **Typed (타입드)**, was an AI-assisted document and knowledge-work workspace designed to pull scattered files and references into a single connected canvas — a "documents-as-a-graph" take on knowledge management aimed at teams drowning in fragmented docs.

The corporate site frames the company as a journey ("유한의 여정, 무한의 가능성" — a finite journey toward infinite possibility) and a team that proves itself "결과에 앞서 과정에서부터" (from the process, ahead of the result), backed by early investors visible on the About page (소풍벤처스 / Sopoong Ventures among them). *(These company-history and investor details are drawn from the live corporate site and general public knowledge; specific founding dates and founder names are not independently re-verified in this pass.)*

What is directly verifiable today is the ending and the pivot. Typed.do now serves a composed shutdown notice: the product has been discontinued (dated May on the notice), with English and Korean migration guides pointing users to Google Drive. Business Canvas itself continues, having redirected its energy toward newer products — **re:catch (리캐치)** and **Typed Finance** — both linked from the corporate site. The design tells this two-chapter story literally: the calm violet-and-lavender Typed surface is the product chapter closing gracefully, while the black-and-electric-lime corporate surface is the company chapter pressing forward with ambition.

## 12. Principles

1. **Close with dignity.** A discontinued product still deserves a designed goodbye. *UI implication:* replace dead ends with calm, honest notices — state the fact, provide the migration path, keep the brand's composure.
2. **One action, one violet.** *UI implication:* reserve `#a88ef5` for the single primary CTA so the next step is never ambiguous; everything else stays neutral.
3. **Energy as glow, not fill.** The electric lime (`#cedc00`) signals momentum without shouting. *UI implication:* use it as a halo or highlight marker, never as a large background — a little goes a long way.
4. **Two voices, one company.** The product is calm and human; the company is bold and editorial. *UI implication:* let the product surface breathe (Helvetica Neue, lavender, soft) and let the corporate surface command (Pretendard, black, cinematic) — don't homogenize them.
5. **Process over decoration.** The brand celebrates the journey, not ornament. *UI implication:* flat depth, tint-based grouping, generous framing; nothing exists just to look busy.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Typed / Business Canvas user segments (knowledge workers, students, and small teams managing scattered documents), not individual people.*

**정민, 27, 서울.** A graduate researcher who used Typed to link papers, notes, and drafts into one workspace. On learning of the shutdown, appreciated that the farewell page told her exactly how to export to Google Drive instead of leaving her stranded.

**Daniel, 34, remote.** A startup PM who evaluated Typed for team docs. Follows Business Canvas's newer products (re:catch, Typed Finance) via the corporate site and reads the editorial "journey" framing as a sign the team thinks in decades, not quarters.

**수아, 31, 판교.** A designer who admires the corporate site's craft — the cinematic black scroll and the restrained electric-lime glow — and cites it as an example of a Korean B2B brand with a genuine point of view rather than a generic SaaS template.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no content yet)** | Lavender canvas (`#f9f8fc`) with a single white notice card; one Ink (`#1a1a1a`) line and, if actionable, one violet (`#a88ef5`) CTA. No clutter. |
| **Empty (product discontinued)** | The signature real state: a centered white notice card (2px `#c9b5f4` border) with a calm headline, plain explanation, and migration links. Honest, not apologetic-in-spin. |
| **Loading** | Minimal — a quiet indicator on the light surface; corporate sections fade in on scroll. No heavy skeleton stacks (the system is flat). |
| **Error (page/route dead)** | Replaced by a designed notice card rather than a raw 404 — states what happened and where to go next. |
| **Error (form validation)** | Field-level message in a muted (`#6b6b6b`) tone below the input; describes what is valid, not just "필수". |
| **Success (action complete)** | Brief, calm inline confirmation; next step linked immediately below. No celebratory emoji. |
| **Skeleton** | Flat tinted blocks at final dimensions on the light surface; no shadow shimmer. |
| **Disabled** | Reduced-opacity surface with faint (`#888888`) text; the violet fades rather than turning grey, to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, link / pill press, focus |
| `motion-standard` | 300ms | Section fade-in on the corporate scroll, card reveal |
| `motion-slow` | 600ms | Full-viewport cinematic scroll transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sections, pills |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: On the corporate surface, motion is cinematic-but-controlled — full-height sections fade and settle as the user scrolls (the "Scroll to page 1–6" narrative), and the electric-lime glow (`#cedc00`) can pulse subtly to draw the eye to a pill link. On the calm product surface, motion is minimal: a gentle fade for the notice, no bounce, no spring. Under `prefers-reduced-motion: reduce`, scroll fades and the lime glow pulse collapse to instant; the content remains fully functional and readable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle:
- https://typed.do/ (shutdown notice): body bg rgb(249,248,252) #f9f8fc; notice card
  bg #ffffff / 16px radius / 40px 30px padding / 2px solid rgb(201,181,244) #c9b5f4 /
  shadow rgba(0,0,0,0.03) 0px 4px 10px; H1 "We're saying goodbye" Helvetica Neue 24px/700
  rgb(26,26,26) #1a1a1a; H2 subtext 16px/400 rgb(107,107,107) #6b6b6b; CTA "Migration
  Guide" bg rgb(168,142,245) #a88ef5 / #ffffff / 8px radius / 12px 24px padding / 14px/600;
  faint text rgb(136,136,136) #888888.
- https://www.business-canvas.com/ (corporate about): Pretendard family (Regular/Medium/
  SemiBold/Bold/ExtraBold); dark canvas rgb(0,0,0) #000000; white + grey text
  rgb(170,170,170) #aaaaaa, rgb(204,204,204) #cccccc; pill link 100px radius / 6px 18px
  padding with lime glow shadow rgb(206,220,0) #cedc00 0px 0px 10px; content cards 12px
  radius / 24px padding; footer bar rgb(51,51,51) #333333 / 16px 32px padding; round
  controls 40px radius; lime highlight marker rgba(206,220,0) behind text.
- https://www.business-canvas.com/en/blog/launch-business-canvas-website (blog): dark
  editorial, Pretendard, H1 36px, white/grey text hierarchy.

Voice samples (§10) are verbatim from the live surfaces (typed.do shutdown H1/H2;
business-canvas.com hero + about section headings).

Brand narrative (§11): Business Canvas (비즈니스캔버스) is a Korean productivity-software
company; Typed (타입드) was its flagship AI document/knowledge workspace, now discontinued
(shutdown notice live on typed.do, migration to Google Drive). Corporate purpose line and
investor (소풍벤처스) are drawn from the live corporate site; the company now runs re:catch
(리캐치) and Typed Finance (both linked on the site). Specific founding dates / founder names
are general public knowledge, not independently re-verified in this pass.

Personas (§13) are fictional archetypes informed by publicly observable user segments.
Names are illustrative; they do not refer to real people.

Interpretive claims (e.g. "two voices, one company", "energy as glow not fill", "close with
dignity") are editorial readings connecting the observed live design to the brand's
positioning, not directly sourced company statements.
-->
