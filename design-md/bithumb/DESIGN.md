---
id: bithumb
name: "Bithumb"
country: KR
category: fintech
homepage: "https://www.bithumb.com"
primary_color: "#1C2028"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=bithumb.com&sz=128"
verified: "2026-06-01"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary #1C2028 is the measured dominant structural near-black (matches primary_color); bronze #543E35 is the rebrand CTA accent, not the structural primary. Trading red/blue follow Korea convention (red=up, blue=down)."
  colors:
    primary: "#1C2028"
    brand: "#543E35"
    canvas: "#1C2028"
    on-primary: "#FFFFFF"
    cta-text: "#4F3327"
    cta-surface-text: "#F8F9FA"
    hairline: "#B6ABA1"
    muted: "#707882"
    muted-2: "#93989E"
    surface-text: "#F8F9FA"
    foreground: "#FFFFFF"
    price-up: "#E15241"
    price-down: "#4880EE"
  typography:
    family: { sans: "Bithumb Trading Sans", mono: "Bithumb Trading Sans" }
    body:        { size: 14, weight: 400, use: "Workhorse readable content in a packed layout" }
    control:     { size: 13, weight: 500, use: "Buttons, chips, interactive labels" }
    micro-label: { size: 12, weight: 400, use: "Dense data annotations coexisting with numbers" }
    chip-active: { size: 13, weight: 600, use: "Active filter chip label" }
    cta:         { size: 18, weight: 500, use: "Primary exchange CTA label" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, full: 9999 }
  shadow:
    flat: "none — depth is structural (color layering + 1px borders), no drop shadows captured"
    hairline: "1px solid #B6ABA1"
    chip-inactive: "1px solid rgba(28,32,40,0.1)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#1C2028", fg: "#FFFFFF", radius: "4px", height: "32px", font: "13px / 500", use: "Signup — structural top-chrome action" }
    cta-filled: { type: button, bg: "#543E35", fg: "#F8F9FA", radius: "4px", height: "56px", font: "18px / 500", use: "Primary exchange CTA — single warmest action" }
    cta-outline: { type: button, bg: "transparent", fg: "#4F3327", border: "1px solid #B6ABA1", radius: "4px", height: "56px", use: "Secondary action paired with filled bronze CTA" }
    chip-active: { type: badge, bg: "#1C2028", fg: "#FFFFFF", radius: "8px", height: "36px", font: "13px / 600", use: "Selected filter chip" }
    chip-inactive: { type: badge, bg: "transparent", fg: "#707882", border: "1px solid rgba(28,32,40,0.1)", radius: "8px", use: "Unselected filter chip" }
---

# Design System Inspiration of Bithumb

## 1. Visual Theme & Atmosphere

Bithumb wears the aesthetic of money taken seriously: a dark, premium, data-dense trading surface built on a near-black structural base of #1C2028, warmed in carefully chosen places by a bronze/brown accent (#543E35) that signals a deliberate, recent rebrand. As Korea's No.1 crypto-asset exchange, the interface earns trust not through decoration but through density — packed grids of numbers, tight controls, and micro-labels that never waste a pixel. The palette is restrained and structural, letting the trading colors do the emotional work: red (#E15241) reads as price up and blue (#4880EE) as price down, following the Korea-market convention rather than the Western one. Everything is signed by the proprietary 'Bithumb Trading Sans' typeface, a brand-owned voice that lends the dense data UI a consistent, money-grade tone. The result feels less like a consumer app and more like a professional terminal: composed, serious, and engineered for people moving real value. Bronze against near-black is the whole mood — warmth held in tension with a structural, almost industrial calm.

## 2. Color Palette & Roles

- **Structural near-black** `#1C2028` — the primary structural color; used for the signup button surface and active filter chips. The anchor of the entire dark UI.
- **Warm bronze/brown** `#543E35` — the rebrand accent; carries the exchange CTA surface, the single warmest gesture in the chrome.
- **Brown text** `#4F3327` — used as the text color on outline CTAs, echoing the bronze accent in type.
- **Neutral border** `#B6ABA1` — the 1px border on outline CTAs; a warm, low-contrast separator.
- **Trading red (price up)** `#E15241` — Korea convention: rising prices. An emotional, directional color, not a structural one.
- **Trading blue (price down)** `#4880EE` — Korea convention: falling prices. The counterpart to trading red.
- **Muted gray** `#707882` — inactive chip text and secondary labels.
- **Muted gray** `#93989E` — secondary/tertiary muted text.
- **Off-white surface text** `#F8F9FA` — text on the bronze exchange CTA.
- **Pure white** `#FFFFFF` — text on the structural near-black signup button and active chips.

Roles in short: #1C2028 is structure, #543E35 is the warm call-to-action, #E15241 / #4880EE are reserved exclusively for directional trading signal, and the grays (#707882, #93989E) plus the neutral border #B6ABA1 carry everything quiet.

## 3. Typography Rules

The system is set in the proprietary **'Bithumb Trading Sans'** typeface — brand-owned, and a core part of the rebrand's signature. This is a dense data UI, so the type scale stays tight and functional:

- **Body:** 14px — the workhorse for readable content in a packed layout.
- **Controls:** 13px — buttons, chips, and interactive labels sit one step down from body.
- **Micro-labels:** 12px — the smallest tier, for dense data annotations that must coexist with numbers.

Weights observed in components run from 500 (medium, on CTAs and the signup button) up to 600 (semibold, on active filter chips), giving emphasis without resorting to a large size jump. The discipline is clear: hold the scale narrow, let weight and color — not size — create hierarchy in a money-grade, data-first interface.

## 4. Component Stylings

### Primary Button

**Signup (structural)**
- Background: #1C2028
- Text: #FFFFFF
- Border: none
- Radius: 4px
- Height: 32px
- Font: 13px / 500
- Use: account signup / primary structural action in the top chrome

### Exchange CTA

**Filled (bronze)**
- Background: #543E35
- Text: #F8F9FA
- Border: none
- Radius: 4px
- Height: 56px
- Font: 18px / 500
- Use: the primary exchange call-to-action — the single warmest, most prominent action

**Outline**
- Background: transparent
- Text: #4F3327
- Border: 1px solid #B6ABA1
- Radius: 4px
- Height: 56px
- Use: secondary action paired alongside the filled bronze CTA

### Filter Chip

**Active**
- Background: #1C2028
- Text: #FFFFFF
- Border: none
- Radius: 8px
- Height: 36px
- Font: 13px / 600
- Use: the currently selected filter in a chip row

**Inactive**
- Background: transparent
- Text: #707882
- Border: 1px solid rgba(28,32,40,0.1)
- Radius: 8px
- Use: unselected filter options in the same chip row

## 5. Layout Principles

Bithumb's layout philosophy is density done deliberately: a data-dense trading aesthetic where information packs tightly and controls sit compact (13px control type, 12px micro-labels). The structural near-black base (#1C2028) frames the content rather than competing with it, so dense grids of numbers and chips can coexist without visual fatigue. Two radius scales signal two layout intents — 4px on buttons and CTAs for crisp, terminal-like edges, and 8px on filter chips for a slightly softer, more tappable control row. Control heights are tiered to importance: 32px for the compact signup button, 36px for filter chips, and a generous 56px for the primary exchange CTAs that deserve weight. The overall principle is restraint in surface and richness in data — let the structure recede so the numbers and the directional trading colors lead.

## 6. Depth & Elevation

The aesthetic is structural and flat rather than shadow-heavy: depth comes primarily from color layering against the near-black #1C2028 base and from borders, not from elevation. The outline CTA uses a 1px solid #B6ABA1 border, and inactive chips use a 1px solid rgba(28,32,40,0.1) border — these thin strokes do the separating work that shadows would in a lighter UI. Filled surfaces (the bronze #543E35 CTA, the structural #1C2028 signup button and active chips) establish foreground purely through contrast and warmth against the dark ground. No specific shadow blur, spread, or elevation token was captured in the inspection, so elevation should be treated qualitatively: lean on contrast and 1px borders, not drop shadows.

## 7. Do's and Don'ts

### Do
- Use #1C2028 as the structural anchor for primary surfaces and active states.
- Reserve #543E35 bronze for the single most important call-to-action.
- Keep red (#E15241) strictly for price-up and blue (#4880EE) strictly for price-down — Korea convention, never swapped.
- Hold the type scale tight (14 / 13 / 12px) and use weight (500–600), not size, for emphasis.
- Use 4px radius on buttons/CTAs and 8px on filter chips, consistently.

### Don't
- Apply the Western convention (green-up / red-down) — Bithumb's market reads red as up.
- Substitute a generic font; the proprietary 'Bithumb Trading Sans' is part of the brand signature.
- Dilute the bronze accent by spreading #543E35 across many surfaces — its power is its scarcity.
- Introduce heavy drop shadows; depth here is structural (color + 1px borders).
- Loosen the data density into airy spacing — the money-grade seriousness depends on it.

## 8. Responsive Behavior

No discrete breakpoint pixel values or responsive grid tokens were captured in the live inspection, so responsive behavior is described qualitatively. The system is built around compact, fixed-height controls — a 32px signup button, 36px filter chips, 56px exchange CTAs — which translate cleanly to touch targets, with the 56px CTAs comfortably finger-sized and the 36px chips reading as a scrollable control row. The dense data orientation (13px controls, 12px micro-labels) implies that on narrower viewports the trading grids would reflow into stacked, scrollable panels rather than shrinking type below the legibility floor. Treat the chip row as horizontally scrollable on small screens, and keep the bronze CTA full-width and prominent where space contracts. Until real breakpoints are measured, preserve the height tiers and radius scales rather than inventing new ones.

## 9. Agent Prompt Guide

When generating UI in Bithumb's style, prompt for: a dark, data-dense trading interface on a structural near-black base (#1C2028); a single warm bronze (#543E35) primary CTA; directional trading colors used only for price signal (red #E15241 = up, blue #4880EE = down, Korea convention); the proprietary 'Bithumb Trading Sans' (or a tight, neutral sans as stand-in); a compressed type scale (body 14px, controls 13px, micro-labels 12px) with emphasis via weight 500–600. Specify radii explicitly: 4px on buttons and CTAs, 8px on filter chips. Specify heights: 32px signup button, 36px chips, 56px exchange CTAs. Ask for structural depth — color layering and 1px borders (#B6ABA1 for outlines, rgba(28,32,40,0.1) for inactive chips) — not drop shadows. The brief in one line: "serious, dense, money-grade — near-black structure, one bronze accent, directional trading color, nothing decorative."

## 10. Voice & Tone

Bithumb's voice is serious, dense, and money-grade — the register of a professional trading floor, not a playful consumer app. It communicates with precision and economy, trusting the user to handle real numbers and real risk. Microcopy should be direct and unembellished, prioritizing clarity of state (price up / price down, active / inactive) over personality. The tone is confident and composed: it conveys that this is Korea's No.1 exchange without saying so loudly, letting the density and discipline of the interface make the claim.

## 11. Brand Narrative

Bithumb is Korea's No.1 crypto-asset exchange, and its recent rebrand tells the story of an institution maturing into a premium, professional identity. The visual narrative pairs a near-black structural base with a deliberate bronze/brown accent (#543E35) — warmth introduced into an otherwise austere, money-grade environment, signaling both gravity and craft. The proprietary 'Bithumb Trading Sans' typeface makes the brand literally speak in its own voice, a mark of an organization investing in a coherent, owned identity. Korea-convention trading colors (red up, blue down) root the brand firmly in its home market and its users' expectations. The throughline: seriousness about money, expressed as density, restraint, and a single warm accent that makes the dark feel intentional rather than cold.

## 12. Principles

- **Density with discipline** — pack information tightly, but keep the scale and palette restrained so it never reads as cluttered.
- **One warm accent** — let bronze (#543E35) carry the primary action; scarcity is what gives it power.
- **Color is signal** — reserve red/blue strictly for directional price meaning; structure stays in near-black and gray.
- **Owned voice** — the proprietary 'Bithumb Trading Sans' is non-negotiable to the identity.
- **Structural depth** — separate with contrast and 1px borders, not shadows.
- **Money-grade seriousness** — every choice should reinforce trust and gravity, not delight.

## 13. Personas

- **The active trader** — moves real value, expects a dense terminal where price-up (#E15241) and price-down (#4880EE) read instantly. Values speed, precision, and zero ambiguity over decoration.
- **The serious newcomer** — drawn by Bithumb's No.1 standing; needs the prominent bronze exchange CTA (#543E35, 56px) and clear signup path (#1C2028 button) to feel guided without the interface feeling consumer-soft.
- **The Korea-market user** — reads red as up and blue as down by convention; any deviation would break trust instantly. The directional colors are designed for exactly this reader.

## 14. States

- **Active (filter chip):** background #1C2028, text #FFFFFF, radius 8px, height 36px, font 13px/600 — high-contrast, structural, clearly selected.
- **Inactive (filter chip):** background transparent, text #707882 (muted gray), border 1px solid rgba(28,32,40,0.1), radius 8px — recessive and quiet against the dark ground.
- **Primary action (exchange CTA):** background #543E35, text #F8F9FA, radius 4px, height 56px, font 18px/500 — the warmest, most prominent state.
- **Secondary action (outline CTA):** background transparent, text #4F3327, border 1px solid #B6ABA1, radius 4px, height 56px — paired but subordinate to the filled bronze.
- **Price up:** trading red #E15241 (Korea convention).
- **Price down:** trading blue #4880EE (Korea convention).
- Hover, pressed, focus, and disabled states were not captured in the live inspection; treat them qualitatively (likely subtle contrast shifts against #1C2028) rather than inventing values.

## 15. Motion & Easing

No motion durations, easing curves, or transition tokens were captured in the live inspection. In keeping with the brand's serious, money-grade, data-dense character, motion should be treated qualitatively: minimal, fast, and functional — the kind of restrained transition appropriate to a professional trading terminal, where responsiveness and clarity matter more than expressive animation. State changes (chip active/inactive, CTA press) should feel immediate and composed. Until real timing values are measured, do not invent durations or curves; default to crisp, low-key transitions that respect the density of the interface.

---
**Verified:** 2026-06-01
**Tier 1 sources:** https://www.bithumb.com (live primary site, brand-owned), https://apidocs.bithumb.com (official API docs, brand-owned), https://www.bithumbcorp.com (corporate site, brand-owned), https://github.com/bithumb (official GitHub org, brand-owned)
**Tier 2 sources:** getdesign.md/bithumb — NOT LISTED. refero — not listed. Note: primary_color #1C2028 is the measured dominant structural color (brand logotype orange not present in the rendered web chrome); the rebrand pairs near-black with a bronze accent #543E35.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof block)
