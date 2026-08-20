---
omd: 0.1
brand: Proofline
status: fictional benchmark fixture
---

# Proofline Design Contract

## 1. Visual Theme & Atmosphere

Proofline is a restrained prepress handoff surface for routing supplied print proofs before review. It keeps proof, press, owner, window, route, source-note context, and handoff-name facts visible without implying that a proof is approved, printed, legally cleared, produced, or delivered.

## 2. Color Palette & Roles

- `page` `#E8EAED` — page background
- `surface` `#FFFFFF` — proof board and controls
- `ink` `#1D252C` — primary text
- `muted` `#606A73` — secondary text
- `line` `#C4CBD1` — separators
- `route` `#234F68` — primary action, focus, selected choice
- `attention` `#8B4337` — validation and deliberate emphasis

No gradients, glass, glow, decorative side borders, or invented status colors.

## 3. Typography Rules

- UI/body: `Verdana`, sans-serif
- Display: `Times New Roman`, serif
- Hero: 44/48 desktop, 31/36 mobile, weight 400
- Section heading: 24/29
- Body: 15/24
- Label/metadata: 11/16, weight 700, letter spacing 0.05em

## 4. Component Stylings

- Primary button: route fill, white label, 3px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 3px radius
- Proof board: square corners, 1px ring, no diffuse shadow
- Review routes: three semantic buttons with visible selected state
- Proof manifest: one numbered vertical manifest; each desktop ticket aligns proof, press, owner, and window facts
- Validation: inline status tied to the handoff-name field

## 5. Layout Principles

- Maximum width 1040px
- Space scale: 4, 8, 12, 16, 24, 32, 48, 64
- Desktop keeps a narrow ordinal rail and four aligned fact tracks per proof ticket
- Mobile keeps the ordinal rail but moves every fact to a full-width label-above-value reading row
- Compact controls move below their full-width naming copy when constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px route outline. No blur, glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied identifier exactly.
- Do keep route choices reversible and validation concrete.
- Do not insert break markers inside atomic identifiers.
- Do not invent print, press, approval, legal, production, or delivery outcomes.

## 8. Responsive Behavior

- Reflow ticket facts before identifiers or controls clip at 760px.
- Controls remain at least 44px tall.
- Atomic identifiers, short metadata, compact-control copy, and dynamic route state remain on one line.
- Display headings and body prose may wrap naturally.
- Do not make a single text node horizontally scrollable.
- Desktop fact tracks must not constrain mobile reading rows.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working proof-routing handoff as the visual center. Improve hierarchy and narrow-screen reading order without adding unsupported print or approval facts.

## 10. Voice & Tone

Editorial, exact, quiet. Avoid seamless, intelligent, perfect, instant, and service theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied proof facts visible.
2. Separate review route from production outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Review route updates `aria-pressed` and body route state.
- Source-note preservation updates `aria-pressed` and its naming copy.
- Empty handoff name announces an error and receives focus.
- Valid handoff name announces readiness without claiming print, approval, legal clearance, or delivery.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
