---
id: cakeresume
name: "Cake"
country: TW
category: saas
homepage: "https://www.cake.me"
primary_color: "#13AB67"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cake.me&sz=128"
verified: "2026-06-01"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  colors:
    primary: "#13AB67"
    brand: "#13AB67"
    canvas: "#FFFFFF"
    foreground: "#000000"
    heading: "#0C4129"
    accent: "#378060"
    muted: "#E2E6E4"
    hairline: "#D1D6D4"
    chip-text: "#0E0E0F"
    on-primary: "#FFFFFF"
  typography:
    family: { sans: "Inter", cjk: "Apple SD Gothic Neo" }
    heading: { size: 38, weight: 600, use: "Page headings, deep-green anchor" }
    body:    { size: 16, weight: 400, use: "Standard reading text" }
    control: { size: 14, weight: 400, use: "Button and control labels" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 4, lg: 4, full: 9999 }
  shadow:
    none: "none — separation via color and 1px borders, not drop shadows"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#13AB67", fg: "#FFFFFF", border: "none", radius: "4px", height: "32px", font: "14px / 400", use: "Single most important action (Sign Up, primary submit)" }
    button-secondary: { type: button, bg: "transparent", fg: "#13AB67", border: "none", radius: "4px", height: "32px", font: "14px / 400", use: "Quieter Log In beside primary" }
    language-selector: { type: input, bg: "#FFFFFF", fg: "#000000", border: "1px solid #D1D6D4", radius: "4px", height: "32px", font: "14px / 400", use: "Header locale/language switcher" }
    chip-neutral: { type: badge, bg: "#E2E6E4", fg: "#0E0E0F", border: "none", radius: "4px", use: "Receding metadata/tag pills" }
---

# Design System Inspiration of Cake

## 1. Visual Theme & Atmosphere

Cake is a Taiwan-built global talent network — formerly CakeResume — that bundles job search, an AI resume and portfolio builder, and recruiting SaaS into one optimistic surface. The atmosphere is clean and professional: a wide white ground (#FFFFFF) lets every element breathe, and a confident Cake green (#13AB67) carries the eye to whatever action matters most. Headings sit in a deep, grounded green (#0C4129) that reads as serious and trustworthy without ever turning cold, while a mid-green accent (#378060) adds quiet warmth between the two. Corners are crisp and small — a consistent 4px radius — so the product feels modern and engineered rather than soft or playful. Set in Inter throughout the UI, the whole experience is tidy, legible, and human: a tool that takes your career seriously but still feels approachable.

## 2. Color Palette & Roles

- **Brand green / primary action** `#13AB67` — the signature Cake green, reserved for the most important call to action (Sign Up / primary buttons). It is the loudest color on the page and should stay scarce.
- **Deep-green heading** `#0C4129` — the grounded, authoritative tone used for headings and primary text emphasis.
- **Mid-green accent** `#378060` — a softer green that bridges the brand green and the deep heading green; use for secondary accents and supporting emphasis.
- **Neutral fill** `#E2E6E4` — a light, cool-neutral surface for chips and quiet containers.
- **Neutral border** `#D1D6D4` — the standard 1px hairline border for inputs, selectors, and dividers.
- **Ground** `#FFFFFF` — the page background and the field on which everything else is composed.
- **Text** `#000000` — primary body and control text; on neutral chips text shifts to near-black `#0E0E0F`.

Roles in practice: green carries action and identity, deep green carries hierarchy, neutrals carry structure and rest, and white carries space. Keep the brand green for one decisive thing per view.

## 3. Typography Rules

- **Primary typeface:** Inter — used for UI and headings.
- **CJK body typeface:** Apple SD Gothic Neo — used for CJK body text, keeping multilingual content consistent and legible.
- **Body:** 16px, set in Inter for comfortable reading.
- **Heading:** 38px / 600 weight, colored deep green (#0C4129) — large and confident, anchoring the page.
- **Control / button text:** 14px / 400 weight, Inter — quiet and even, never shouting against the green fill.

The type system is restrained: one Latin family doing the heavy lifting, a dedicated CJK companion for global reach, and a clear jump from 16px body to 38px headings that makes hierarchy obvious at a glance.

## 4. Component Stylings

### Button

**Primary (Sign Up)**
- Background: #13AB67
- Text: #FFFFFF
- Border: none
- Radius: 4px
- Padding: horizontal, snug to 14px label
- Height: 32px
- Font: 14px / 400
- Use: the single most important action in a view (Sign Up, primary submit), set in Inter

**Secondary (Log In)**
- Background: transparent
- Text: #13AB67
- Border: none
- Radius: 4px
- Padding: horizontal, snug to 14px label
- Height: 32px
- Font: 14px / 400
- Use: the secondary, lower-emphasis action sitting beside the primary button

### Language Selector

**Default**
- Background: #FFFFFF
- Text: #000000
- Border: 1px solid #D1D6D4
- Radius: 4px
- Padding: horizontal, compact
- Height: 32px
- Font: 14px / 400
- Use: the locale / language switcher in the header, styled as a quiet bordered control

### Chip

**Neutral**
- Background: #E2E6E4
- Text: #0E0E0F
- Border: none
- Radius: 4px
- Padding: compact, label-hugging
- Height: compact
- Font: small label
- Use: neutral tags and metadata pills that should recede behind primary content

## 5. Layout Principles

Cake composes on a generous white ground where whitespace is the primary structuring tool. Controls share a consistent 32px height, so buttons, the language selector, and adjacent fields align cleanly along a shared baseline. The small 4px radius is applied uniformly across buttons, the selector, and chips, giving the interface a tidy, engineered rhythm. Hierarchy is carried by scale and color rather than by heavy dividers — a 38px deep-green heading sets the top of a view, 16px body fills the reading column, and quiet neutral borders (#D1D6D4) mark only where structure genuinely needs an edge. Keep one decisive green action per region so the eye always knows where to go.

## 6. Depth & Elevation

Depth in Cake is intentionally flat and restrained. Elevation is communicated primarily through color and borders rather than heavy shadows: the white ground recedes, neutral fills (#E2E6E4) lift chips just enough to read as discrete objects, and a 1px #D1D6D4 hairline defines the edges of inputs and the language selector. The primary green button stands out by saturation and contrast against white, not by floating on a drop shadow. The result is a crisp, modern surface where separation comes from value and outline, keeping the interface light and engineered rather than skeuomorphic.

## 7. Do's and Don'ts

### Do
- Reserve the brand green #13AB67 for the single most important action in a view.
- Set headings in deep green #0C4129 at 38px / 600 to anchor hierarchy.
- Keep a consistent 4px radius on buttons, selectors, and chips.
- Align controls to the shared 32px height for clean baselines.
- Lean on white space and 1px #D1D6D4 hairlines instead of heavy dividers.

### Don't
- Fill large areas with the brand green — it loses its meaning as the primary action.
- Mix radii; avoid pill or large-radius shapes that break the crisp 4px system.
- Add heavy drop shadows; let color and borders carry separation.
- Color body headings in pure black when the deep-green #0C4129 is the brand voice.

## 8. Responsive Behavior

The white-ground, whitespace-first composition adapts gracefully across breakpoints: the 16px body remains the reading baseline, and the 38px deep-green heading scales down as viewport width tightens so it never crowds the column. The header's quiet bordered language selector and the 32px-tall action buttons collapse into a compact arrangement on narrow screens while keeping their 4px corners and shared height. Because separation relies on neutral fills (#E2E6E4) and 1px #D1D6D4 borders rather than fixed-width shadows, components reflow cleanly into a single column without visual breakage. The primary green action stays prominent and reachable at every size.

## 9. Agent Prompt Guide

When generating UI in Cake's style, instruct the agent: "Build on a pure white #FFFFFF ground with generous whitespace. Use exactly one primary action per view, filled with Cake green #13AB67 and white #FFFFFF text, 4px radius, 32px height, Inter 14px/400. Render secondary actions as transparent buttons with #13AB67 text at the same 4px radius and 32px height. Set headings in Inter at 38px/600 colored deep green #0C4129, and body at 16px. For inputs and selectors, use a white background, #000000 text, and a 1px solid #D1D6D4 border at 4px radius. Use neutral chips with #E2E6E4 fill and #0E0E0F text. Avoid heavy shadows — separate elements with color and 1px borders. Use #378060 only as a supporting mid-green accent." This keeps output professional, optimistic, and unmistakably Cake.

## 10. Voice & Tone

Cake speaks like a trustworthy career partner: clear, encouraging, and grown-up. The tone is professional but warm — never corporate-stiff, never overly casual. Microcopy favors plain, action-oriented language ("Sign Up", "Log In") that matches the restrained 14px control type. The optimism in the green palette carries into the words: confident about your potential, practical about the next step. Across languages — Latin in Inter, CJK in Apple SD Gothic Neo — the voice stays consistent: helpful, human, and globally minded.

## 11. Brand Narrative

Cake began in Taiwan as CakeResume and grew into a global talent network connecting people, portfolios, and companies. The rename to Cake signals a broader ambition: not just a resume tool, but an entire career surface spanning AI-assisted resume and portfolio building, job search, and recruiting SaaS. The deep-green headings and confident brand green tell a story of growth and trust — green as both optimism and momentum. Built for a multilingual, cross-border audience, Cake pairs an engineered, crisp aesthetic with genuine human warmth, presenting career progress as something serious, hopeful, and within reach.

## 12. Principles

- **Optimistic, not loud:** green signals possibility; reserve the brightest green for the one action that matters.
- **Trust through clarity:** deep-green headings and clean 16px body make information easy and credible.
- **Crisp and engineered:** a uniform 4px radius and shared 32px control height keep the system tidy.
- **Whitespace first:** let the white ground structure the page before any border or fill does.
- **Globally human:** Inter for Latin, Apple SD Gothic Neo for CJK — consistent and welcoming across regions.

## 13. Personas

- **The Job Seeker:** building a resume or portfolio, wants encouragement and a clear next step — served by the obvious green primary action and reassuring deep-green headings.
- **The Recruiter:** scanning candidates inside the SaaS, needs scannable, professional, low-noise surfaces — served by neutral chips, hairline borders, and restrained color.
- **The Global User:** working across languages — served by the Inter / Apple SD Gothic Neo pairing and consistent multilingual layout.

## 14. States

- **Default action:** brand green #13AB67 fill, white #FFFFFF text, 4px radius, 32px height — the resting primary button.
- **Secondary / default Log In:** transparent background with #13AB67 text — present but quieter beside the primary.
- **Selector default:** white #FFFFFF background, #000000 text, 1px solid #D1D6D4 border, 4px radius, 32px height.
- **Neutral / inactive chip:** #E2E6E4 fill with #0E0E0F text, used for metadata and tags that should recede.

(Hover, pressed, and focus treatments were not captured in live inspection and are intentionally left undocumented rather than invented.)

## 15. Motion & Easing

Specific motion timings and easing curves were not captured during live inspection. In keeping with the brand's crisp, engineered character, any motion should stay quick and understated — brief, confident transitions on the primary green action and the language selector that reinforce responsiveness without drawing attention away from content. Avoid bouncy or theatrical animation; favor calm, purposeful feedback consistent with the clean white ground and 4px geometry.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://www.cake.me (live brand site — colors, typography, components), https://github.com/cakeresume (brand-owned engineering org), https://medium.com/cakeresume (brand-owned publication)
**Tier 2 sources:** getdesign.md/cakeresume — NOT LISTED. refero — not listed.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
