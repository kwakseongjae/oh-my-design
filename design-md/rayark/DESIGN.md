---
id: "rayark"
name: "Rayark"
country: TW
category: entertainment
homepage: "https://rayark.com"
primary_color: "#5FE0EE"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=rayark.com&sz=128"
verified: "2026-06-01"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    ground: "#1a1c1d"
    accent: "#5fe0ee"
    on-dark: "#ffffff"
    on-accent: "#000000"
  typography:
    family: { sans: "Noto Sans", mono: "Noto Sans" }
    nav:    { size: 20, weight: 400, use: "Navigation links, white on dark" }
    body:   { size: 16, weight: 400, use: "Running text" }
    button: { size: 16, weight: 700, use: "Primary CTA label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 3, md: 3, lg: 3, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#5fe0ee", fg: "#000000", radius: 3, padding: "0 16px", font: "16/700", use: "Primary CTA 'Play Now', 2px solid #ffffff border, 40px height" }
    nav-top: { type: tab, bg: "transparent", fg: "#ffffff", font: "20/400", use: "Transparent header, white nav links, 70px height" }
    surface: { type: card, bg: "#1a1c1d", fg: "#ffffff", font: "16/400", use: "Near-black page canvas" }
  components_harvested: true
---
# Design System Inspiration of Rayark

## 1. Visual Theme & Atmosphere

Rayark presents the cool, premium mood of a rhythm-game interface: a near-black canvas lit by a single shard of electric cyan. The Taipei indie studio behind Cytus, Deemo, VOEZ and the RPG Sdorica carries that gameplay aesthetic straight into its brand surface, where almost everything recedes into darkness so that one accent color can carry all the energy. White display type sits crisply on the black ground, corners stay sharp rather than soft, and the cyan reads like a neon line glowing on a dark stage. The atmosphere is restrained but charged — calm, confident, and unmistakably built by people who design for the screen. Nothing is decorative for its own sake; the contrast between deep black, bright white, and one luminous accent is the entire personality.

## 2. Color Palette & Roles
The palette is deliberately tight: a single near-black ground, one electric-cyan accent, and white for text. This three-value discipline is what makes the cyan feel like light rather than paint.

| Role | Value | Notes |
| --- | --- | --- |
| Ground / page background | `#1A1C1D` | Near-black canvas (rgb 26,28,29); the base everything sits on |
| Accent / signature | `#5FE0EE` | Electric cyan (rgb 95,224,238); hero and accent text, primary CTA fill |
| Text on dark | `#FFFFFF` | White display and navigation type |
| Text on accent | `#000000` | Black label inside the cyan CTA for maximum contrast |

Use the cyan sparingly — as the single point of emphasis against the dark field. White carries legibility; black is the stage.

## 3. Typography Rules
Typography is set in Noto Sans, a clean humanist sans that keeps the dark UI readable and modern.

- **Family:** Noto Sans across the interface.
- **Navigation:** 20px, weight 400 — confident but not heavy, white on the dark ground.
- **Body:** 16px for running text.
- **CTA label:** 16px, weight 700 — the bold weight gives the button its punch.

Keep the type white on the dark canvas and reserve weight (700) for the moments that must act, like the primary button.

## 4. Component Stylings

### Primary Button — "Play Now"

**Default**
- Background: #5FE0EE
- Text: #000000
- Border: 2px solid #FFFFFF
- Radius: 3px
- Height: 40px
- Font: 16px / 700
- Use: Primary call-to-action — the cyan CTA with sharp corners and a white outline that pops off the black ground

### Top Navigation

**Default**
- Background: transparent
- Text: #FFFFFF
- Border: none
- Height: 70px
- Font: 20px / 400
- Use: Transparent header with white nav links floating over the dark hero

### Page Surface

**Default**
- Background: #1A1C1D
- Text: #FFFFFF
- Border: none
- Height: full viewport
- Font: 16px / 400
- Use: The near-black canvas that grounds every screen and lets the cyan accent read as light

## 5. Layout Principles
The layout leans on a transparent header that lets the hero artwork run edge to edge beneath it, with the navigation (70px tall) floating over the dark canvas rather than sitting in a separate bar. Content is staged against the near-black ground so that bright accents define the eye path. Keep the structure clean and full-bleed; let the darkness provide the negative space rather than crowding the frame with boxes.

## 6. Depth & Elevation
Depth here comes from contrast, not shadow. The near-black ground (`#1A1C1D`) recedes while white text and the cyan accent advance, and the primary button earns its prominence through a bright fill plus a 2px white outline rather than a drop shadow. The transparent navigation reinforces the sense of layers — UI floating above artwork — without any heavy elevation effect. Treat luminosity as the elevation system: brighter means closer.

## 7. Do's and Don'ts

### Do
- Build on the near-black ground `#1A1C1D` and let it carry most of the screen.
- Reserve the cyan `#5FE0EE` as a single point of emphasis so it reads as light.
- Keep corners sharp (radius 3px on the CTA) for the game-UI edge.
- Outline the primary button with a 2px white border so it pops off the dark.

### Don't
- Dilute the palette with extra accent colors — the power is in the single cyan.
- Soften the CTA into a pill; the sharp 3px radius is part of the character.
- Drop white text onto the cyan fill — labels on the accent are black `#000000`.
- Add heavy drop shadows; depth comes from contrast and luminosity.

## 8. Responsive Behavior
The transparent header and full-bleed dark canvas adapt gracefully across viewports, with the 70px navigation bar anchoring the top of the screen. Maintain the dark ground and the single cyan accent at every breakpoint, and keep the CTA's height (40px) and weight (700) intact so the call-to-action stays tappable and legible on smaller screens. Let hero artwork scale behind the floating navigation rather than reflowing into separate panels.

## 9. Agent Prompt Guide
When generating UI in Rayark's spirit: start from a near-black ground `#1A1C1D`, set type in Noto Sans (nav 20px/400, body 16px) in white `#FFFFFF`, and introduce exactly one accent — electric cyan `#5FE0EE`. Make the primary action a cyan button with black `#000000` label text, a 2px solid white border, a sharp 3px radius, and a 40px height with a 16px/700 label. Keep the header transparent at 70px so artwork runs beneath it. Favor contrast and luminosity over shadows, and keep the whole palette to three values so the cyan always reads as glowing light.

## 10. Voice & Tone
Cool, confident, and screen-native — the tone of a studio that designs for play. The voice is economical and assured rather than chatty, matching an interface that says everything with one accent color. It carries the quiet swagger of a rhythm-game UI: precise, modern, and a little electric.

## 11. Brand Narrative
Rayark is a Taipei indie game studio known for the rhythm games Cytus, Deemo and VOEZ and the RPG Sdorica. Its brand surface translates that catalog into a dark, premium gaming aesthetic — a near-black stage where a single shard of electric cyan does the work of a spotlight. The identity reads as the cool, neon-on-black mood of a rhythm-game screen carried into the studio's own front door.

## 12. Principles
- **One accent, maximum charge.** A single electric cyan against black does more than a full palette ever could.
- **Darkness as the stage.** The near-black ground is the foundation that lets light read as light.
- **Sharp over soft.** Crisp corners (3px) keep the game-UI edge.
- **Contrast is the depth system.** Luminosity, not shadow, signals hierarchy.

## 13. Personas
- **The rhythm-game player** who expects a sleek, neon-lit interface and reads the dark canvas as native territory.
- **The fan of the studio's titles** (Cytus, Deemo, VOEZ, Sdorica) arriving to learn more, who recognizes the premium, screen-first mood.

## 14. States
- **Default CTA:** cyan `#5FE0EE` fill, black `#000000` label, 2px solid white border, 3px radius, 40px height.
- **Navigation default:** white `#FFFFFF` links at 20px/400 on a transparent 70px header.
- **Surface default:** near-black `#1A1C1D` ground with white body text.

(Hover, pressed, and focus values are not present in the verified source and are intentionally left to qualitative judgment rather than invented.)

## 15. Motion & Easing
No motion or easing values were captured in the verified source. In keeping with the brand's character, any motion should feel as crisp and precise as the visual language — quick, clean transitions that match a rhythm-game cadence, with the cyan accent used to draw the eye rather than elaborate animation. Specific timing and easing curves are intentionally left unspecified rather than fabricated.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://rayark.com (live DOM: body bg #1A1C1D, accent cyan #5FE0EE, transparent header, white nav 20px/400, 70px height, 'Play Now' CTA values), https://rayark.com/en/about/ (English studio identity / brand narrative), https://github.com/rayark (studio org / catalog cross-reference)
**Tier 2 sources:** getdesign.md/rayark — NOT LISTED. refero — not listed (game studio absent).
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
