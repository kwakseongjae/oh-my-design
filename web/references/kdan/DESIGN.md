---
id: kdan
name: "Kdan Mobile"
country: TW
category: productivity
homepage: "https://www.kdan.com"
primary_color: "#00DC87"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kdan.com&sz=128"
verified: "2026-06-01"
omd: "0.1"
ds:
  name: "kdan-ui"
  url: "https://github.com/kdan-mobile-software-ltd/kdan-ui-revamp"
  type: system
  description: "Kdan's open-source UI token library (kdanGreen brand token + neutral scale + semantic colors)."
---

# Design System Inspiration of Kdan Mobile

## 1. Visual Theme & Atmosphere

Kdan Mobile presents itself as bold, modern, and developer-credible document software, the kind of digital-workflow SaaS that signs contracts and ships SDKs without losing its sense of energy. The atmosphere is built on a structural deep teal-black base (#002D37) that grounds the interface like ink on a signed page, punctuated by an electric-lime pop (#CAFF00) reserved for the loudest hero moments and the brand's own kdanGreen token (#00DC87) carried over from its open-source UI library. Type is set in Clear Sans, a humanist sans that keeps long documents and dense product copy legible while reading clean and unfussy. Corners are crisp at 4px — tight enough to feel precise and technical, never soft or playful. The overall effect is confident and high-contrast: a serious productivity tool from Tainan, Taiwan that still wants you to feel the charge of getting work done fast. It reads as energetic document software that respects both the signer and the integrating engineer.

## 2. Color Palette & Roles

- **kdanGreen / Brand primary** `#00DC87` — the catalog primary, drawn directly from the kdan-ui-revamp brand token.
- **Structural deep teal-black** `#002D37` — solid primary button surface and the grounding structural base on live kdan.com.
- **Electric lime** `#CAFF00` — loud hero CTA accent, used sparingly for the highest-emphasis moment.
- **Hyperlink blue** `#007AFF` — semantic link color from the token library.
- **Error red** `#F25858` — semantic error state from the token library.
- **Gray 1000** `#191919` — darkest neutral in the scale.
- **Gray 100** `#FAFAFA` — lightest neutral in the scale.
- **Hover layer** `rgba(0,0,0,0.2)` — semi-transparent overlay token applied on hover.
- **Disabled surface** `#AFAFAF` with text `#4B4B4B` — muted neutral pairing for disabled controls.
- **White** `#FFFFFF` — primary button text on the teal-black surface.
- **Black** `#000000` — text on the electric-lime CTA, for maximum contrast.

Roles: kdanGreen anchors the brand identity, deep teal-black does the structural and primary-action work, and electric lime is the single loud accent. The neutral gray scale (gray100 to gray1000) handles surfaces and text, while hyperlink, error, and hover-layer tokens cover semantic and interaction states.

## 3. Typography Rules

- **Typeface:** Clear Sans across the interface.
- **Body:** 16px.
- **Hero heading:** 56px at weight 700.
- **Button label (standard):** 16px at weight 500.
- **Hero CTA label:** 22px at weight 500.

Clear Sans is a humanist sans-serif chosen for sustained legibility in document-heavy contexts. The hierarchy is steep — a 56px/700 hero headline sits far above 16px body — giving pages a confident, declarative top while keeping reading text calm. Button labels favor the medium 500 weight for a solid, tappable feel without shouting.

## 4. Component Stylings

### Button

**Solid primary**
- Background: #002D37
- Text: #FFFFFF
- Border: 1.5px solid #002D37
- Radius: 4px
- Height: 38px
- Font: 16px / 500
- Use: primary action on live kdan.com

**Outline**
- Background: transparent
- Text: #002D37
- Border: 1.5px solid #002D37
- Radius: 4px
- Height: 38px
- Font: 16px / 500
- Use: secondary action paired alongside the solid primary

**Lime hero CTA**
- Background: #CAFF00
- Text: #000000
- Border: none
- Radius: 4px
- Height: 53px
- Font: 22px / 500
- Use: single loud, high-emphasis hero call-to-action

**Disabled**
- Background: #AFAFAF
- Text: #4B4B4B
- Border: none
- Radius: 4px
- Use: non-interactive disabled state

## 5. Layout Principles

Kdan's layout reads as confident document software: a structural deep teal-black base anchors the page, with content set against the light neutral scale (gray100 #FAFAFA at the bright end). A steep type hierarchy — 56px/700 hero down to 16px body — establishes a clear declarative top and a calm reading body. Primary and outline actions share the same 38px height and 4px radius so action rows align cleanly, while the taller 53px lime hero CTA stands apart as the single loudest target. The crisp 4px corner radius is applied consistently across controls, reinforcing a precise, technical feel rather than a soft one.

## 6. Depth & Elevation

Depth is handled with restraint and high contrast rather than heavy shadow. The primary interaction-depth cue is the hover layer — a semi-transparent `rgba(0,0,0,0.2)` overlay token from the kdan-ui library — which darkens a surface on hover to signal interactivity. Borders do structural work too: solid controls carry a 1.5px solid border in their own surface color (#002D37), giving edges definition without relying on drop shadows. The visual stack is built primarily from solid color contrast — deep teal-black against light neutrals — so elevation is felt through tone and the hover overlay more than through layered shadow.

## 7. Do's and Don'ts

### Do
- Anchor structure and primary actions with deep teal-black #002D37 and white #FFFFFF text.
- Reserve electric lime #CAFF00 for a single loud hero CTA, with black #000000 text for contrast.
- Keep the kdanGreen #00DC87 token as the brand identity color.
- Use a consistent 4px radius and 1.5px borders across controls.
- Set type in Clear Sans, with a steep 56px/700 hero over 16px body.

### Don't
- Scatter the electric lime across many elements — it loses its punch when overused.
- Soften the 4px corners into large rounded shapes; the brand reads precise and technical.
- Use error red #F25858 or hyperlink blue #007AFF for decoration — they are semantic.
- Invent shadow-heavy elevation; lean on color contrast and the hover overlay.

## 8. Responsive Behavior

The blob does not capture explicit breakpoints, fluid grids, or per-viewport measurements for Kdan, so specific responsive numbers are not asserted here. Qualitatively, the fixed control heights (38px standard, 53px hero CTA) and the consistent 4px radius are designed to hold their proportions across viewports, while the steep Clear Sans hierarchy (56px/700 hero, 16px body) gives a reliable anchor for scaling text down on smaller screens. Action rows that pair the solid primary and outline buttons share a common 38px height, which keeps them aligned whether stacked or placed side by side.

## 9. Agent Prompt Guide

When generating UI in Kdan's style, instruct the agent: "Build bold, developer-credible productivity software from Taiwan. Ground the page in deep teal-black #002D37 with white #FFFFFF text and light neutral surfaces (up to gray100 #FAFAFA). Use kdanGreen #00DC87 as the brand identity color. Reserve electric lime #CAFF00 — with black #000000 text — for exactly one loud hero CTA at 53px height, 22px/500. Standard buttons are 38px tall, 16px/500, 4px radius, 1.5px solid border in #002D37 (solid: teal-black bg/white text; outline: transparent bg/teal-black text). Disabled controls use #AFAFAF on #4B4B4B. Set everything in Clear Sans, hero headings 56px/700, body 16px. Keep corners crisp at 4px, use the rgba(0,0,0,0.2) hover overlay for interactivity, and lean on color contrast over shadows. Use hyperlink blue #007AFF and error red #F25858 only for their semantic roles."

## 10. Voice & Tone

Kdan's voice is bold, modern, and confident — the tone of a document-software company that is sure of its product and credible to developers. It speaks plainly and energetically, matching the high-contrast structural base and the single electric-lime exclamation point. Copy should feel capable and direct: productivity language that respects the signer's time and the engineer's intelligence, never cute or padded.

## 11. Brand Narrative

Kdan Mobile is a Tainan, Taiwan digital-workflow SaaS built around PDF productivity, e-signature, and document SDKs. Its visual identity carries that dual story — the seriousness of signed documents and the credibility of developer tooling — through a deep teal-black structural base, an electric-lime pop accent, and the brand's own kdanGreen token surfaced from its open-source kdan-ui library. Setting everything in Clear Sans with crisp 4px corners, Kdan reads as energetic, modern, and confident: software that handles real contracts and real integrations while still feeling charged with momentum.

## 12. Principles

- **Confident and high-contrast:** ground in deep teal-black, let one electric-lime accent carry the energy.
- **Developer-credible:** lean on Kdan's own open-source token library (kdanGreen, neutral scale, semantic colors) as the source of truth.
- **Precise, not soft:** crisp 4px corners and 1.5px borders over rounded, shadow-heavy styling.
- **Restraint with accent:** the loud lime is a single exclamation point, never a refrain.
- **Legible by default:** Clear Sans and a steep hierarchy keep document-heavy work readable.

## 13. Personas

- **The signer / business user:** needs to move documents and signatures quickly; served by a clear hierarchy, calm 16px body text, and unambiguous primary actions in deep teal-black.
- **The integrating developer:** evaluates Kdan's SDKs and trusts the open-source kdan-ui token library; served by a credible, technical, precisely-cornered visual language and documented tokens.
- **The decision-maker scanning the hero:** drawn in by the bold 56px/700 headline and the single loud electric-lime CTA that signals where to act.

## 14. States

- **Default (solid primary):** background #002D37, text #FFFFFF, 1.5px solid #002D37 border, 4px radius, 38px height.
- **Hover:** rgba(0,0,0,0.2) hover-layer overlay token darkens the surface to signal interactivity.
- **Disabled:** background #AFAFAF, text #4B4B4B, 4px radius — clearly muted and non-interactive.
- **Error (semantic):** error red #F25858 reserved for error messaging and validation.
- **Link (semantic):** hyperlink blue #007AFF for inline links.

## 15. Motion & Easing

The blob does not capture explicit animation durations, easing curves, or transition timing for Kdan, so no specific motion values are asserted. Qualitatively, the documented interaction model is a hover state that applies the rgba(0,0,0,0.2) overlay token — implying a quick, subtle tonal shift on hover rather than elaborate motion. In keeping with the precise, high-contrast character (crisp 4px corners, solid color contrast), any motion should stay restrained and snappy, matching the confident, developer-credible tone rather than drawing attention to itself.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://www.kdan.com (live homepage — buttons, hero CTA, Clear Sans, hero 56px/700), https://github.com/kdan-mobile-software-ltd (brand-owned org), https://github.com/kdan-mobile-software-ltd/kdan-ui-revamp (open-source kdan-ui token library — kdanGreen + neutrals + semantic colors)
**Tier 2 sources:** getdesign.md/kdan — NOT LISTED. refero — not listed. Note: brand token kdanGreen #00DC87 is the catalog primary; #002D37 is the structural surface and #CAFF00 the loud accent.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
