---
id: gogolook
name: "Gogolook"
country: TW
category: consumer-tech
homepage: "https://whoscall.com"
primary_color: "#0CD25F"
logo:
  type: favicon
  slug: "https://cdn.prod.website-files.com/6824b7a0497f20e292c20ff9/68ac49dd7f01530f6ef06b10_Webclip.png"
verified: "2026-06-01"
omd: "0.1"
ds:
  name: Whoscall Brand Guidelines
  url: "https://whoscall.com/en/brand"
  type: brand
  description: Whoscall's official brand page — logo, the documented brand green #0CD25F, and usage guidelines.
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    brand: "#0cd25f"
    cta: "#05f067"
    brand-tint: "#e6faef"
    dark-gray: "#2c3e50"
    text: "#262626"
    canvas: "#ffffff"
    accent-pink: "#f53f90"
    accent-teal: "#019d91"
  typography:
    family: { sans: "Noto Sans", mono: "Noto Sans" }
    hero:    { size: 118, weight: 500, lineHeight: 1.1, use: "Nunito rounded display hero" }
    body:    { size: 16, weight: 400, lineHeight: 1.5, use: "Noto Sans body copy" }
    button:  { size: 16, weight: 500, lineHeight: 1.0, use: "Pill button label" }
  spacing: { xs: 8, sm: 16, base: 16, lg: 32, xl: 48, section: 64 }
  rounded: { sm: 40, md: 40, lg: 100, full: 9999 }
  components:
    button-primary: { type: button, bg: "#05f067", fg: "#262626", radius: "100px", padding: "16px 32px", font: "16px / 500", use: "Primary download CTA pill, 56px height" }
    button-secondary: { type: button, bg: "rgba(255,255,255,0.8)", fg: "#262626", radius: "100px", padding: "16px 32px", font: "16px / 500", use: "Secondary demo pill, 56px height" }
    button-premium: { type: button, bg: "#e6faef", fg: "#262626", radius: "40px", padding: "16px 32px", font: "16px / 400", use: "Premium / upgrade action on light-green surface, 57px height" }
  components_harvested: true
---
# Design System Inspiration of Gogolook

## 1. Visual Theme & Atmosphere

Gogolook is the Taiwan TrustTech company behind Whoscall, the caller-ID and anti-scam app, and its design speaks in the language of friendly, reassuring consumer safety rather than cold enterprise security. The world is built on a clean white ground (#FFFFFF) that keeps everything calm and uncluttered, punctuated by a vivid, documented brand green (#0CD25F) that signals "you're protected" without ever feeling alarming. Buttons are fully-rounded pills, soft and tappable, and a big playful rounded display face (Nunito) carries the headlines while Noto Sans handles the body, so the voice reads as approachable and human. The overall feeling is of a trusted neighbor who happens to be excellent at spotting scams: warm, confident, and easy to talk to. Color is used sparingly and purposefully, letting the green do the emotional work of conveying safety against a quiet, bright backdrop. Nothing here shouts; the protection is communicated through friendliness, generous rounding, and a single confident accent rather than through dark, defensive, "security-vendor" visual tropes.

## 2. Color Palette & Roles
- **Whoscall Green #0CD25F** — primary brand color, documented on whoscall.com/en/brand; the core identity hue and the emotional anchor for "trusted protection."
- **Download-CTA Green #05F067** — the live, slightly brighter near-twin green used on the primary download pill on whoscall.com; carries the main call-to-action.
- **Light-Green Tint #E6FAEF** — soft pale-green surface used for the premium button background; a gentle, low-pressure accent fill.
- **Dark Gray #2C3E50** — documented secondary on the brand page; a softened near-black for structure and contrast that avoids harsh pure black.
- **Primary Text #262626** — the live body and button text color on whoscall.com; warm dark neutral for readability.
- **White #FFFFFF** — the dominant ground; keeps the experience bright, clean, and reassuring.
- **Category accent — Pink #F53F90** — a documented live category accent for differentiation and playful color-coding.
- **Category accent — Teal #019D91** — a second live category accent, complementing the green family with a cooler tone.

## 3. Typography Rules
Two faces split the work cleanly. **Nunito** is the rounded display face — its soft, geometric letterforms reinforce the friendly, approachable character, scaling all the way up to a 118px hero at weight 500. **Noto Sans** handles body copy at 16px, providing neutral, highly legible text with broad multilingual coverage suited to a Taiwan-rooted consumer product. Primary text renders in #262626, a warm dark neutral rather than pure black, keeping even dense copy soft on a white ground. The pairing is deliberate: rounded, expressive headlines invite the reader in, while clean, sober body text keeps trust-critical information clear and credible.

## 4. Component Stylings

### Primary Download Pill

**Default**
- Background: #05F067
- Text: #262626
- Border: none
- Radius: 100px
- Padding: 16px 32px
- Height: 56px
- Font: 16px / 500
- Use: primary download call-to-action on whoscall.com

### Secondary Demo Pill

**Default**
- Background: rgba(255,255,255,0.8)
- Text: #262626
- Border: none
- Radius: 100px
- Padding: 16px 32px
- Height: 56px
- Font: 16px / 500
- Use: secondary "demo" action sitting beside the primary download CTA

### Premium Button

**Default**
- Background: #E6FAEF
- Text: #262626
- Border: none
- Radius: 40px
- Padding: 16px 32px
- Height: 57px
- Font: 16px / 400
- Use: premium / upgrade action on a soft light-green surface

## 5. Layout Principles
The composition rests on a generous white ground that gives each element room to breathe, with the bright green CTA acting as the single visual destination on the page. Content is kept calm and uncluttered, so the eye moves naturally from a large rounded Nunito hero down to a clear, tappable pill button. Spacing is comfortable and the hierarchy is unambiguous: one confident primary action, supported by a quieter secondary pill, rather than a wall of competing buttons. The white-first canvas reinforces the brand's reassuring, non-aggressive posture — safety presented as a clean, open, easy-to-navigate space.

## 6. Depth & Elevation
Elevation is restrained and quiet. The interface leans on the white ground and soft pale-green tint surfaces (#E6FAEF) to separate planes rather than heavy shadow stacks, keeping the look flat, bright, and friendly. Depth is implied mainly through the fully-rounded pill geometry and gentle background-color shifts between the white canvas and the light-green premium surface. No documented hard borders are used on the primary actions, so contrast comes from color fill rather than outlines or strong drop shadows.

## 7. Do's and Don'ts

### Do
- Lead with the documented Whoscall Green (#0CD25F) as the brand anchor and reserve the brighter #05F067 for the live download CTA.
- Keep the ground white (#FFFFFF) and let color carry meaning sparingly.
- Use fully-rounded pill geometry (100px radius) for primary and secondary actions.
- Pair rounded Nunito display with clean Noto Sans body, and render text in #262626.

### Don't
- Invent dark "security-vendor" backgrounds or aggressive red-alert palettes; the brand reads as friendly protection.
- Square off the buttons or reduce their rounding — the pill language is core to the approachable feel.
- Overload the page with multiple competing accents; the category pink (#F53F90) and teal (#019D91) are accents, not primaries.
- Substitute pure black for text where #262626 is specified.

## 8. Responsive Behavior
The white-first, single-CTA layout is built to stay calm and legible as it scales, with the pill buttons holding their fully-rounded 100px geometry and comfortable 16px 32px padding across contexts. The Nunito display face flexes dramatically — anchored by a 118px hero on large screens — while Noto Sans body stays at a steady 16px for reliable readability on smaller viewports. Because the design depends on color fill rather than fine borders or dense shadow, it degrades gracefully: the green CTA remains the clear focal point regardless of width. (Specific breakpoint values are not documented in the captured data; behavior is described qualitatively.)

## 9. Agent Prompt Guide
When generating UI in Gogolook's style, instruct the agent to: start from a clean white (#FFFFFF) ground; make the single most important action a fully-rounded pill (radius 100px, height 56px, padding 16px 32px, font 16px/500) filled with the live download green #05F067 and dark text #262626; reserve the documented brand green #0CD25F as the identity anchor; add a quieter secondary pill on a translucent white background (rgba(255,255,255,0.8)) with matching geometry; use a softer premium button on a light-green tint surface (#E6FAEF, radius 40px, height 57px, font 16px/400). Set headlines in rounded Nunito (scaling up to a 118px/500 hero) and body in Noto Sans at 16px, all text in #262626. Keep the mood friendly, reassuring, and consumer-grade — approachable protection, never enterprise security. Use category accents pink #F53F90 and teal #019D91 only for light color-coding, never as the dominant hue.

## 10. Voice & Tone
The voice is warm, reassuring, and plainly human — the tone of a trusted neighbor who is genuinely good at spotting scams. It reassures without alarming, choosing friendly confidence over fear-based urgency. Copy should feel approachable and protective at once: clear about safety, never preachy or technical for its own sake. Where a security vendor might say "threat detected," Gogolook would rather say "we've got your back."

## 11. Brand Narrative
Gogolook is a Taiwan TrustTech company, best known for Whoscall, its caller-ID and anti-scam app. Its mission energy is consumer safety made friendly: turning the anxious, technical world of fraud and spam into something approachable, reassuring, and easy to trust. The brand deliberately positions itself as approachable protection rather than enterprise security — a clean white ground, a vivid documented brand green, fully-rounded pill buttons, and a big playful rounded display face together signal that staying safe should feel calm and human, not cold and defensive.

## 12. Principles
- **Approachable protection, not enterprise security** — safety communicated through warmth, rounding, and a single confident green.
- **Reassure, don't alarm** — bright white grounds and friendly greens replace dark, defensive security tropes.
- **One confident action** — a single primary pill CTA carries the page; everything else stays quiet.
- **Friendly by form** — fully-rounded pills and rounded Nunito display make the interface feel human and tappable.
- **Color with purpose** — green does the emotional work of "you're protected"; accents are used sparingly.

## 13. Personas
- **The Cautious Everyday User** — wants to feel safe from scam calls without learning security jargon; reassured by the calm white ground, friendly green, and one obvious tap target.
- **The Family Protector** — sets up safety tools for parents or kids and needs a product that looks trustworthy and non-intimidating; the approachable, neighborly tone earns confidence.
- **The Regional Mobile-First User** — a Taiwan-rooted, multilingual audience served by Noto Sans body text and a clean, legible, mobile-friendly layout.

## 14. States
Documented interactive states beyond the default are not present in the captured data, so additional states (hover, pressed, focus, disabled) should be derived conservatively from the established palette rather than invented. Keep any state treatment within the brand's friendly, low-pressure language: lean on gentle shifts within the green family and the light-green tint (#E6FAEF) for surfaces, and preserve the #262626 text and fully-rounded pill geometry across states. Avoid introducing alarm colors or hard borders that would break the reassuring tone. (No specific hover/pressed/focus values are documented; treat them qualitatively.)

## 15. Motion & Easing
No motion or easing values are documented in the captured data, so motion should be described qualitatively rather than specified numerically. In keeping with the brand's friendly, reassuring character, any motion should feel soft, calm, and welcoming — gentle transitions that match the rounded pill geometry and the unhurried, neighborly tone, never abrupt or alarming. (Specific durations and easing curves are not in the captured data.)

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://www.gogolook.com/about (corporate brand / company background), https://whoscall.com/en/brand (documented brand color page — Whoscall Green #0CD25F, Dark Gray #2C3E50, White #FFFFFF), https://medium.com/gogolook-tech (brand-owned engineering/tech blog)
**Tier 2 sources:** getdesign.md/gogolook — NOT LISTED. refero — not listed. Note: documented brand green #0CD25F is the catalog primary; the live download CTA renders the near-twin #05F067.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
