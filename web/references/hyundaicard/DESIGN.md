---
id: "hyundaicard"
name: "Hyundai Card"
country: KR
category: fintech
homepage: "https://www.hyundaicard.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=hyundaicard.com&sz=128"
verified: "2026-06-01"
omd: "0.1"
ds:
  name: Hyundai Card Design Library
  url: "https://newsroom.hyundaicard.com/front/board/Hyundai-Card-Design-Library?country=en"
  type: brand
  description: Hyundai Card's official Design Library — the brand's design philosophy, the proprietary Youandi typeface, and visual identity.
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  note: "deliberately monochrome — black IS the brand color; the only accents are functional content tags on DIVE"
  colors:
    ink: "#000000"
    ground: "#ffffff"
    tag-red: "#f36464"
    tag-green: "#15a91f"
  typography:
    family: { sans: "Youandi", fallback: "Noto Sans KR" }
    heading: { size: 26, weight: 600, use: "Section-level headings; pair with Youandi for brand moments" }
    body:    { size: 13, weight: 400, use: "Running text, Noto Sans KR" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 24, full: 9999 }
  shadow:
    flat: "none"
  components:
    button-primary: { type: button, bg: "#ffffff", fg: "#000000", radius: 24, use: "Minimal monochrome pill, 48px tall, outline border" }
    heading: { type: card, bg: "#ffffff", fg: "#000000", use: "Section heading, 26px/600, editorial spacing" }
    page-surface: { type: card, bg: "#ffffff", fg: "#000000", use: "Base content canvas, white ground, generous whitespace" }
    tag-red: { type: badge, fg: "#f36464", use: "Functional content category tag on DIVE only" }
    tag-green: { type: badge, fg: "#15a91f", use: "Functional content category tag on DIVE only" }
  components_harvested: true
---
# Design System Inspiration of Hyundai Card

## 1. Visual Theme & Atmosphere

Hyundai Card is Korea's most design-celebrated credit-card brand, and its visual identity is an exercise in disciplined restraint: monochrome premium minimalism built almost entirely from ink black (#000000) on a clean white (#FFFFFF) ground. Color is not used as decoration here — it is withheld on purpose, treated as a luxury that the brand chooses not to spend, so that the absence of color becomes the statement. The signature element is typography itself: the proprietary "Youandi" (유앤아이) typeface carries the brand's voice, making letterforms the primary expressive medium rather than imagery or palette. The atmosphere is gallery-like and editorial — generous whitespace, high contrast, and a quiet confidence that reads as understated wealth rather than loud premium cues. Surfaces are flat and unadorned, headers are transparent, and every element earns its place. The result feels less like a banking product and more like a cultural design platform, which is exactly how the DIVE surface presents the brand. This is typography-as-identity, where the discipline of black, white, and a custom face does all the work.

## 2. Color Palette & Roles
The palette is deliberately monochrome. The ground is white (#FFFFFF) and the ink is black (#000000), and the brand color is essentially black itself — color is the thing that is held back, which is the entire point of the identity. The only chromatic accents appear as functional category tags on the DIVE content surface, never as primary brand expression.

| Role | Value | Usage |
| --- | --- | --- |
| Ground | #FFFFFF | Page and surface background; the dominant field |
| Ink | #000000 | Body text, headings, primary brand color; the monochrome anchor |
| Accent — red (functional) | #F36464 | Content category tag on DIVE only |
| Accent — green (functional) | #15A91F | Content category tag on DIVE only |

The accents are strictly utilitarian. They classify content; they do not brand. Treat #F36464 and #15A91F as labeling tools confined to tags, and keep the rest of the experience in pure black-and-white.

## 3. Typography Rules
Typography is the brand. The display layer uses the proprietary "Youandi" typeface (confirmed in the DOM as YouandiNewKr, with HEB / TR / HB weights) for headings and branding — it is the signature element and should be reserved for moments that carry the brand's voice. Body text is set in Noto Sans KR for legibility across Korean and Latin content. The captured body size is 13px, and the heading size is 26px at weight 600, giving a clear two-step hierarchy: a confident editorial heading over a quiet, readable body.

| Token | Value |
| --- | --- |
| Display / branding | Youandi (YouandiNewKr — HEB / TR / HB weights), proprietary |
| Body | Noto Sans KR |
| Body size | 13px |
| Heading | 26px / 600 |

Rule of thumb: let Youandi own the brand and headline moments; let Noto Sans KR carry running text at 13px; reserve the 26px/600 step for section-level headings.

## 4. Component Stylings

### Page Surface (DIVE)

**Default**
- Background: #FFFFFF
- Text: #000000
- Border: none
- Padding: generous whitespace (editorial)
- Height: full viewport
- Font: 13px / 400 (Noto Sans KR)
- Use: the base content canvas — white ground, black ink, maximal restraint

### Heading

**Section heading**
- Background: transparent
- Text: #000000
- Border: none
- Padding: editorial spacing above and below
- Height: auto
- Font: 26px / 600
- Use: section-level titles; pair with Youandi for true brand moments

### Button

**Primary (minimal pill)**
- Background: #FFFFFF
- Text: #000000
- Border: minimal outline (monochrome)
- Radius: 24px
- Padding: balanced for a 48px pill
- Height: 48px
- Font: body scale (Noto Sans KR)
- Use: primary action; the rounded pill is the one soft gesture in an otherwise hard, flat system

### Header

**Transparent header**
- Background: transparent
- Text: #000000
- Border: none
- Padding: edge-aligned to the content grid
- Height: auto
- Font: Noto Sans KR
- Use: lets the white ground read continuously from header into content; no chrome, no shadow

### Content Tag

**Category tag (red)**
- Background: tag fill
- Text: #F36464
- Border: none
- Radius: pill
- Padding: compact
- Height: compact label
- Font: small body scale
- Use: functional content classification on DIVE only — not brand color

**Category tag (green)**
- Background: tag fill
- Text: #15A91F
- Border: none
- Radius: pill
- Padding: compact
- Height: compact label
- Font: small body scale
- Use: functional content classification on DIVE only — not brand color

## 5. Layout Principles
The layout is editorial and gallery-like, built on generous whitespace and a continuous white ground. The transparent header dissolves into the content so the page reads as one uninterrupted surface, and the absence of borders, fills, and chrome keeps attention on type and spacing. Black ink on white field creates the contrast that structures the page; there is no competing color to organize around. Hierarchy is established through the typographic step — 26px/600 headings over 13px body — and through the rhythm of negative space rather than through dividers or boxes. The pill button at 24px radius is the single soft moment in an otherwise crisp, rectilinear field. Treat layout as composition: align to a clean grid, let whitespace breathe, and resist the urge to add color or ornament.

## 6. Depth & Elevation
This is a flat system. There are no documented shadows, gradients, or elevation layers — the header is transparent and surfaces sit at a single plane on the white ground. Depth, to the extent it exists, comes from contrast (black ink against white) and from spacing, not from drop shadows or stacking. Keep elements coplanar; if separation is needed, use whitespace and the typographic hierarchy rather than introducing elevation. The only curvature in the system is the 24px button radius, which softens the action without implying lift. Restraint applies to depth exactly as it applies to color.

## 7. Do's and Don'ts

### Do
- Keep the palette monochrome: #FFFFFF ground, #000000 ink.
- Treat black (#000000) as the brand color — withholding color is the point.
- Reserve Youandi (proprietary) for headings and branding moments.
- Set body in Noto Sans KR at 13px; use 26px/600 for headings.
- Use the 48px pill button with 24px radius as the soft action gesture.
- Keep the header transparent and surfaces flat.

### Don't
- Introduce color as a brand element — the accents #F36464 and #15A91F are for functional content tags only.
- Add shadows, gradients, or elevation; the system is flat.
- Substitute a generic display face where Youandi carries the brand voice.
- Crowd the layout — whitespace is structural.
- Box content in borders or fills; let contrast and spacing do the work.

## 8. Responsive Behavior
The captured surface (DIVE) is a content/culture platform whose responsive logic follows its editorial, whitespace-driven layout: the continuous white ground and transparent header scale naturally from desktop to mobile, with the typographic hierarchy (26px/600 heading over 13px body) carrying structure at every width. The 48px pill button provides a comfortable touch target on mobile. Beyond these observed values, responsive specifics were not captured (the main banking site is security-plugin-walled), so adapt qualitatively: preserve generous whitespace, keep the monochrome contrast, maintain the flat single-plane surface, and let the type hierarchy — not added chrome — communicate structure as the viewport narrows.

## 9. Agent Prompt Guide
When generating UI in the Hyundai Card style, instruct the agent: "Design a monochrome, editorial interface — white (#FFFFFF) ground, black (#000000) ink, and treat black as the brand color. Withhold color entirely; the absence of color is the statement. Use a proprietary-feeling display typeface (Youandi, weights HEB/TR/HB) for headings and branding, and Noto Sans KR for body at 13px, with 26px/600 section headings. Keep everything flat — no shadows, no gradients, no elevation, transparent header. The only soft gesture is a 48px pill button with 24px radius, white fill, black text. Lean on generous whitespace and high black-on-white contrast for structure. If you must classify content, you may use red #F36464 or green #15A91F as small functional tag colors only — never as brand color." Emphasize restraint above all: when in doubt, remove rather than add.

## 10. Voice & Tone
The voice is quietly confident and editorial — the tone of a design gallery rather than a bank. It speaks with the assurance of a brand that has nothing to prove, letting restraint imply premium. There is no shouting, no urgency, no decorative flourish; the message lands through clarity and discipline. Like the monochrome palette, the language withholds: it says only what is needed, and it trusts the audience to read the sophistication in the negative space. The tone is cultured, deliberate, and self-assured.

## 11. Brand Narrative
Hyundai Card built its reputation as Korea's most design-celebrated credit-card brand by treating design as the product, not the packaging. The brand's central idea is that luxury is restraint: a monochrome world of black and white, anchored by a typeface it commissioned for itself — Youandi (유앤아이) — so that even the letters belong to the brand alone. Color is the resource it refuses to spend, turning absence into a signature. The DIVE platform extends this story from finance into culture and design, presenting the same monochrome, Youandi-led identity as a creative point of view rather than a transactional one. The narrative is consistent at every touchpoint: typography-as-identity, discipline-as-luxury, and the quiet confidence of a brand that lets what it leaves out speak as loudly as what it puts in.

## 12. Principles
- **Withhold color.** Black (#000000) on white (#FFFFFF) is the identity; color is deliberately held back.
- **Typography is the brand.** Youandi (proprietary) carries the voice; let letterforms lead.
- **Restraint as luxury.** Remove before you add; whitespace and contrast do the structural work.
- **Flat and honest.** No shadows, no gradients, no chrome — a single clean plane.
- **One soft gesture.** The 24px-radius, 48px pill button is the system's only concession to softness.
- **Function over decoration.** The only accents (#F36464, #15A91F) exist to classify, never to brand.

## 13. Personas
- **The design-literate cardholder** — values craft and discretion over flash; reads the monochrome restraint as a marker of taste and expects the interface to feel like a curated space.
- **The culture seeker on DIVE** — comes for design, art, and editorial content rather than banking, and responds to the gallery-like white-ground layout and Youandi typography.
- **The premium minimalist** — wants the confidence of black-and-white sophistication, prefers whitespace to ornament, and trusts a brand that says less.

## 14. States
Observed component states are minimal by design — the system favors flat, high-contrast defaults over elaborate interactive feedback. From the captured values: the default surface is #FFFFFF ground with #000000 text; the primary button defaults to white fill, black text, 24px radius, 48px height; the header defaults to transparent. Hover, pressed, focus, disabled, and error states were not captured in the blob, so do not invent them — derive them qualitatively in keeping with the monochrome, flat philosophy (e.g., subtle black/white contrast shifts rather than colored state changes), and keep any feedback as restrained as the rest of the system. Functional content tags carry the red (#F36464) or green (#15A91F) accent to signal category, the closest thing to a "stateful" color in the system.

## 15. Motion & Easing
No motion or easing values were captured in the blob. In keeping with the brand's restraint, motion should be treated qualitatively: quiet, minimal, and unobtrusive — transitions that respect the gallery-like calm rather than drawing attention to themselves. The flat, monochrome system implies subtle, understated movement (gentle fades and clean transitions) over expressive or bouncy animation. Do not invent specific durations or curves; let any motion echo the same discipline as the visual identity — present only when it serves clarity, never as decoration.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://www.hyundaicard.com (homepage / brand context — main site security-plugin-walled), https://dive.hyundaicard.com (live DOM inspect — monochrome surface, Youandi display fonts, Noto Sans KR body, button + tag values), https://newsroom.hyundaicard.com (brand-owned regional source)
**Tier 2 sources:** getdesign.md/hyundaicard — NOT LISTED. refero — not listed. Note: hyundaicard.com main site is security-plugin-walled; DIVE (dive.hyundaicard.com) is the accessible brand surface and carries the same Youandi/monochrome identity.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
