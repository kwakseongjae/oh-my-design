---
id: devsisters
name: "Devsisters"
country: KR
category: consumer-tech
homepage: "https://www.devsisters.com"
primary_color: "#FF5F00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=devsisters.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#FF5F00"
    bright-orange: "#FF8200"
    yellow: "#FFCE00"
    black: "#000000"
    canvas: "#FFFFFF"
    peach: "#F8E8DA"
    border: "#DCDCDC"
    body: "#666666"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    h1:      { size: 32, weight: 900, use: "English display H1, all-caps azo-sans-web" }
    h2:      { size: 24, weight: 800, use: "H2 / CTA labels" }
    h3:      { size: 18, weight: 700, use: "H3 subheadings" }
    body:    { size: 16, weight: 500, lineHeight: 1.5, use: "Pretendard Korean body" }
    label:   { size: 14, weight: 500, use: "Nav links, footer items" }
  spacing: { sm: 5.5, md: 12, base: 16, lg: 20, xl: 24 }
  rounded: { sm: 8, md: 20, lg: 36, full: 9999 }
  components:
    button-primary: { type: button, bg: "#FF5F00", fg: "#FFFFFF", radius: 36, padding: "12px 24px", font: "azo-sans-web/800", use: "Orange primary CTA" }
    button-secondary: { type: button, bg: "#000000", fg: "#FFFFFF", radius: 36, padding: "12px 24px", font: "azo-sans-web/800", use: "Black secondary pill button" }
    nav: { type: tab, bg: "#FF5F00", fg: "#FFFFFF", padding: "0px 20px", font: "azo-sans-web/800", use: "Top nav bar" }
    card: { type: card, bg: "#FFFFFF", radius: 8, use: "Standard content card, 1px #DCDCDC border" }
    feature-card: { type: card, bg: "#FFFFFF", radius: 20, padding: "52px 80px", use: "News/feature card" }
    badge: { type: badge, bg: "#FFCE00", fg: "#000000", radius: 36, padding: "5.5px 12px", use: "Accent tag badge" }
  components_harvested: true
---

# Devsisters

Korean game company behind the Cookie Run franchise — building joyful, globally loved play experiences since 2007.

## 1. Visual Theme & Atmosphere

Devsisters' digital product language is bold, energetic, and unambiguously orange. The homepage announces itself in a full-bleed deep orange (`#FF5F00`) navigation bar that carries through to the footer, wrapping the entire experience in brand warmth. Against this chromatic confidence, content cards surface on pure white with subtle grey borders and generously rounded corners (20 px on cards, 36 px on buttons), giving the layout a playful softness that balances the brand's intensity. Typography oscillates between the heavyweight display face `azo-sans-web` (used at weights 800–900 for English headlines) and the versatile Korean system stack `Pretendard` (used at weight 500–700 for body and UI copy), creating a bilingual dual-register hierarchy that reads as global without feeling generic. The overall atmosphere is that of a confident entertainer: vivid, rounded, action-forward, with just enough restraint in whitespace and card structure to keep the experience legible across ages and screen sizes.

## 2. Color Palette & Roles

- **Brand Orange:** `#FF5F00` — primary background (nav, footer, CTA buttons, section fills); the brand's dominant signal colour
- **Bright Orange:** `#FF8200` — hover/active tint on nav border; lighter orange accent for secondary states
- **Yellow Accent:** `#FFCE00` — tag badges and highlight chips, always paired with `#000000` text for contrast
- **Pure Black:** `#000000` — body text, black pill-style secondary buttons, dark section backgrounds
- **Pure White:** `#FFFFFF` — content card backgrounds, reversed text on orange/black surfaces
- **Warm Peach:** `#F8E8DA` — accordion/expanded nav background; softened orange tone for nested UI
- **Grey Border:** `#DCDCDC` — card borders, dividers on white backgrounds
- **Mid Grey:** `#666666` — secondary body text, labels on white

## 3. Typography Rules

- **Display / English headings:** `azo-sans-web`, fallback `Dotum,돋움,굴림,arial`; weights 900 (H1), 800 (H2/CTA labels), 700 (H3). All-caps treatment for nav and section labels (`text-transform: uppercase`).
- **Body / Korean UI:** `Pretendard`, fallback `Dotum,돋움,굴림,arial`; weights 500 (body), 600 (subheadings), 700 (emphasis). Registered at Black → ExtraLight across nine weight steps via `@font-face`.
- **Base body size:** 16 px; `line-height: 1.5` for paragraphs.
- **UI label size:** 14 px / weight 500 (nav links, footer items).
- **Heading scale:** 32 px (H1 desktop), 24 px (H2), 18 px (H3), 14 px (body-sm).
- **Letter-spacing:** `0.01em` on uppercase display copy; `letter-spacing: -0.56px` on large-format hero numerals.
- **No italic** usage detected across any brand-owned surface.

## 4. Component Stylings

### Primary CTA Button

**Orange Primary (css-1d80czy)**
- Background: `#FF5F00`
- Text: `#FFFFFF`
- Border: none
- Radius: 36px
- Padding: 12px 24px
- Height: 48px
- Font: azo-sans-web / 800

**Black Secondary (css-w3127n)**
- Background: `#000000`
- Text: `#FFFFFF`
- Border: none
- Radius: 36px
- Padding: 12px 24px
- Height: 48px
- Font: azo-sans-web / 800

### Navigation Bar

**Top Nav (css-15afoiw)**
- Background: `#FF5F00`
- Text: `#FFFFFF`
- Height: 48px
- Padding: 0px 20px
- Font: azo-sans-web / 800

**Mobile Nav Drawer (css-1wp6ena)**
- Background: `#FF5F00`
- Text: `#FFFFFF`
- Border: none

### Content Card

**Standard Card (css-136jai7 / css-1v6f5oy)**
- Background: `#FFFFFF`
- Border: 1px solid `#DCDCDC`
- Radius: 8px

**News/Feature Card**
- Background: `#FFFFFF`
- Radius: 20px
- Padding: 52px 80px

### Tag Badge

**Accent Tag (css-1vxk175)**
- Background: `#FFCE00`
- Text: `#000000`
- Radius: 36px
- Padding: 5.5px 12px

**Active State Tag**
- Background: `#FF5F00`
- Text: `#FFFFFF`
- Radius: 36px

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.devsisters.com (homepage HTML + inline CSS), https://www.devsisters.com/_next/static/css/bab2a2ef530354d9.css (CSS bundle), https://www.devsisters.com/resource (brand resource page), https://www.devsisters.com/about (about page)
**Tier 2 sources:** getdesign.md/devsisters — 0 DESIGN.md files (NOT LISTED). refero — no result for Devsisters KR.
**Conflicts unresolved:** none

## 5. Layout Principles

- **Full-bleed orange chrome:** Nav (48 px) and footer share `#FF5F00` background, creating a colour-wrapped container around all page content.
- **Card grid:** News and game cards use a fluid multi-column grid; cards have `border-radius: 20px` and a subtle overlay gradient (`rgba(0,0,0,0.6)→rgba(0,0,0,0)`) for hero image cards.
- **Max-width centred content:** Content sections are horizontally centred with symmetric horizontal padding; desktop padding expands to `52px 80px` for inset cards.
- **Section rhythm:** Alternating white and orange sections create a visual beat; each section is `position: relative` with generous vertical padding (~11–22 vw on mobile).
- **Sticky nav:** The top bar is `position: sticky; top: 0; z-index: 2` so the orange anchor persists while scrolling.

## 6. Depth & Elevation

- **Card hover lift:** `transition: transform 0.3s ease-out, box-shadow 0.3s ease-out` — cards translate up slightly on hover.
- **Image card overlay:** `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 60%)` at `opacity: 0.5` by default, removing on hover for reveal.
- **No heavy drop shadows** detected across the system — elevation is conveyed through colour contrast (orange vs. white) and border radius rather than shadows.
- **Mobile nav overlay:** Full-screen orange drawer translates in with `transform: translate(100%, 0)` → `translate(0, 0)`.

## 7. Do's and Don'ts

### Do
- Use `#FF5F00` as the primary action colour for all main CTAs, nav chrome, and section backgrounds.
- Pair `#FFCE00` badges with `#000000` text — this is the only accessible combination for yellow.
- Use `azo-sans-web` weight 800–900 in all-caps for English display copy; use `Pretendard` weight 500–700 for Korean body text.
- Apply `border-radius: 36px` on all pill-shaped buttons and tags; `border-radius: 20px` on content cards.
- Keep button height at 48 px (desktop) with 12 px/24 px padding.
- Use `#000000` for the secondary black pill button when an alternative to orange is needed on white backgrounds.

### Don't
- Don't use `#FFCE00` without `#000000` text — it fails contrast on white or orange backgrounds.
- Don't mix `azo-sans-web` (display) and `Pretendard` (body) at the same hierarchical level — they serve distinct roles.
- Don't introduce border-radius values other than 36 px (pills/tags), 20 px (cards), or 8 px (images/thumbnails).
- Don't place orange text on an orange background — reversed white text is the only on-brand contrast pairing.
- Don't use italic or light weights (100–300) in UI components — the brand voice reads as bold and direct.
- Don't add heavy drop shadows; depth is communicated through colour field transitions and border radius, not elevation.

## 8. Responsive Behavior

- **Mobile breakpoint:** < 720 px — single-column card grid; font sizes shift to vw-based scaling (e.g., `3.6vw` display, `3.3vw` body).
- **Tablet breakpoint:** ≥ 720 px — two-column grids; nav switches from hamburger drawer to inline links; button radius locks to `36px`.
- **Desktop breakpoint:** ≥ 1024 px — full multi-column layouts; font sizes resolve to fixed px values (32 px H1, 18 px H3, 14 px label); nav padding fixed at `20px`.
- **Large desktop:** ≥ 1280 px — content max-width caps; nav padding stays `20px`; images use `w=3840` srcset.
- **All breakpoints:** Orange nav and footer remain full-bleed; button height stays 48 px on tablet/desktop.

## 9. Agent Prompt Guide

When generating Devsisters-style UI:
- Set the primary surface to `#FF5F00`; default text on it to `#FFFFFF`.
- Primary buttons: background `#FF5F00`, text `#FFFFFF`, radius `36px`, height `48px`, font weight `800`, all-caps English label.
- Secondary buttons: background `#000000`, same geometry.
- Tag chips: background `#FFCE00`, text `#000000`, radius `36px`, padding `5.5px 12px`.
- Cards: background `#FFFFFF`, border `1px solid #DCDCDC`, radius `20px`.
- Heading font `azo-sans-web` (weight 900) for English; `Pretendard` (weight 700) for Korean.
- Body font `Pretendard` weight 500, size 16px.
- Transitions: `color 0.2s linear, background 0.2s linear` on interactive elements; content reveals `0.8s cubic-bezier(0.075, 0.82, 0.165, 1)`.
- Avoid gradients, shadows, or pastel tones — keep the palette disciplined to the five core swatches.

## 10. Voice & Tone

**Brand register:** Energetic, global, warm-direct.

Three adjectives: **Joyful · Brave · Essential**

| Do | Don't |
|---|---|
| Speak with conviction and warmth ("세상을 즐겁게") | Use hedged, corporate language ("we aim to try to") |
| Lead with action verbs ("Run Brave", "Create", "Build") | Bury the point in qualifiers |
| Address a global audience without losing Korean warmth | Over-localize to a single market in global copy |
| Keep sentences short and declarative | Write multi-clause academic sentences |

**Voice samples (illustrative):**
- *Illustrative:* "We don't settle for experiences that fade. We build worlds people live inside."
- *Illustrative:* "In a market that gets harder every day, running brave isn't a slogan — it's how we survive."
- *Illustrative:* "세상을 즐겁게. 더 넓은 곳에서, 더 많은 사람들에게, 더 오랜 시간 동안." (Make the world joyful. In more places, for more people, for longer.)

## 11. Brand Narrative

Founded in 2007 in Seoul, Devsisters started as a small Korean mobile studio and grew through the Cookie Run franchise into one of Korea's most recognised game IP creators. The studio's breakout moment came with Cookie Run: OvenBreak and accelerated to global scale with Cookie Run: Kingdom, which reached Apple App Store top-10 rankings in the United States and built a fandom spanning more than 300 million cumulative users across all titles. Today Devsisters operates four global offices, three development studios, and one investment subsidiary (Devsisters Ventures), with reach extending into animation, licensing, and new platform categories including PC, console, and VR.

The company's stated mission is "We Create a Joyful World — in more places, for more people, for longer." This is not framed as aspiration but as operating mandate: every product, from the games themselves to the corporate website, is expected to deliver the same quality of lived experience that earns a long-term place in users' daily lives. Devsisters' "Brave Journey" timeline on the about page frames the studio's history as a series of courageous bets — each expansion into a new platform or IP category described as an act of deliberate boldness rather than incremental growth.

Three philosophical pillars govern Devsisters' creative and product decisions: **Focus on Core** (pursue the essential goal without being constrained by convention), **Run Brave** (compete with courage even in a harsh market environment), and **Touch Hearts** (create not just useful but genuinely moving experiences that people return to long after the initial novelty fades). These pillars surface visibly in UI decisions — the brand's unapologetically bold orange palette and all-caps display typography reflect the same "no hedging" stance the company articulates in its mission language.

## 12. Principles

1. **Focus on Core** — strip away convention and pursue the essential outcome with relentless focus.
   *UI implication:* Avoid decorative complexity; every visual element should earn its place by serving the user's primary goal. Remove anything that dilutes the orange-signal hierarchy.

2. **Run Brave** — act with courage and intensity even when conditions are difficult.
   *UI implication:* Make primary actions unambiguously visible — bold orange buttons, full-bleed colour fields. Never let the interface be timid about what it wants the user to do next.

3. **Touch Hearts** — create experiences that resonate emotionally and last beyond the first encounter.
   *UI implication:* Motion timing and easing should feel alive (`0.8s cubic-bezier(0.075, 0.82, 0.165, 1)` for content reveals); card imagery should be rich and emotionally engaging, not generic stock.

4. **Global by Default** — design for every culture, language, and generation from the first commit.
   *UI implication:* All typographic hierarchies must work in both `azo-sans-web` (Latin/English) and `Pretendard` (Korean); layout padding must accommodate longer Korean strings without breaking.

5. **Earned Simplicity** — complexity is acceptable in the product; the interface should absorb that complexity so users don't have to.
   *UI implication:* Navigation collapses gracefully into a single-layer drawer on mobile; colour does the heavy lifting of wayfinding so users never need to read a label twice.

## 13. Personas

*Illustrative persona — not based on proprietary user research:*
**The Global Cookie Fan (age 12–22):** Plays Cookie Run: Kingdom daily across mobile and web; follows Devsisters on YouTube and social media; expects the website to feel as polished as the game itself. Reacts to bold visuals and new character reveals. Needs: fast load, strong imagery, quick links to game download and patch notes.

*Illustrative persona — not based on proprietary user research:*
**The Korean Parent (age 35–50):** Monitors their child's gaming activity; visits the site to check parental guidance and privacy policy. Expects a trustworthy, legible institutional presence underneath the brand's playfulness. Needs: clear footer navigation to policy pages, Korean-first information hierarchy.

*Illustrative persona — not based on proprietary user research:*
**The International Press / Analyst (age 25–45):** Arrives via news search after a new partnership announcement; scans for investor relations, company size, studio pipeline. Needs: structured company/about page, downloadable brand resources, English-language toggle.

*Illustrative persona — not based on proprietary user research:*
**The Prospective Hire (age 22–35):** Korean or international game developer drawn to the brand's culture narrative. Evaluates Devsisters' three philosophical pillars and office locations before applying. Needs: careers link in footer, clear studio descriptions, the "Brave Journey" timeline as social proof.

## 14. States

- **Empty state:** No-content zones (e.g., empty game roster tab) render a white card with a `#DCDCDC` border and centre-aligned `#666666` label; no placeholder animation.
- **Loading state:** Content sections use opacity-based fade-in (`opacity 0.8s cubic-bezier(0.075, 0.82, 0.165, 1)`) from `opacity: 0` to `opacity: 1`; images use Next.js blur placeholder (transparent colour token).
- **Error — network failure:** Page degradation is graceful; the orange nav chrome and footer remain rendered from static HTML; content areas show a white card with an inline retry prompt in `#FF5F00` text.
- **Error — 404/Not Found:** Inherits full orange-chrome layout; body card is white with centred content and a primary orange CTA back to homepage.
- **Success state:** After form submission (e.g., contact form), a white card with `#FF5F00` border-top accent and a checkmark icon in `#FF5F00` confirms the action.
- **Skeleton loading:** Image cards display a `border-radius: 20px` rectangle in `#F3F3F3` that fills the card area while the image loads; no animation shimmer detected (simple placeholder colour).
- **Disabled state:** Buttons reduce to `opacity: 0.4`; background and radius preserved; cursor changes to `not-allowed`; no colour change that could be confused with a hover state.

## 15. Motion & Easing

**Duration scale:**
- `0.2s` — micro-interactions: button colour/fill transitions, tag hover, icon fill changes
- `0.3s` — moderate: nav background transition on scroll, card hover lift
- `0.4–0.5s` — moderate-slow: CTA arrow transforms, mobile nav translate-in
- `0.6s` — slow: accordion expand/collapse (`max-height` transitions)
- `0.8s` — content reveal: section entrance animations (opacity + transform)
- `1.0–1.2s` — very slow: hero element staggered entrances

**Easing tokens:**
- `linear` — used for colour/fill/opacity micro-transitions (`color 0.2s linear`)
- `ease-out` — card hover lift, opacity fade-outs (`0.3s ease-out`)
- `cubic-bezier(0.075, 0.82, 0.165, 1)` — primary content reveal (easeOutCirc feel; overshoots slightly, settles softly)
- `cubic-bezier(0.83, 0, 0.17, 1)` — accordion snap (fast-out, slow-in; snappy close/open)
- `cubic-bezier(0.22, 1, 0.36, 1)` — nav max-height expand (spring-like deceleration)
- `cubic-bezier(0.61, 1, 0.88, 1)` — background colour transitions on nav state changes

**Rules:**
- Never animate layout-affecting properties (width, height) without a cubic-bezier easing — linear layout animation reads as mechanical.
- Content entrance animations trigger on scroll intersection; they do not replay on re-scroll.
- Reduce-motion: no `prefers-reduced-motion` query detected in source; treat all motion as decorative and ensure content is fully readable without it.
