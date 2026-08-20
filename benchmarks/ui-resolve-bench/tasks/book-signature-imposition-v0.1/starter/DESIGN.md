---
omd: 0.1
brand: Folioform
status: fictional benchmark fixture
---

# Folioform Design Contract

## 1. Visual Theme & Atmosphere

Folioform is a precise prepress review surface for arranging supplied folio pairs before a signature is reviewed. It keeps signature, sheet side, folio pair, trim, binding, creep-compensation, and job-name facts visible without implying that pagination, color, print, production, approval, or delivery has completed.

## 2. Color Palette & Roles

- `page` `#EFECE5` — page background
- `surface` `#FFFEFA` — signature sheet and controls
- `ink` `#202522` — primary text
- `muted` `#666861` — secondary text
- `line` `#C8C2B7` — separators
- `route` `#253A33` — primary action, focus, selected choice
- `attention` `#A64632` — validation and deliberate emphasis

No gradients, glass, glow, decorative side borders, or invented status colors.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 45/50 desktop, 32/37 mobile, weight 400
- Section heading: 25/30
- Body: 16/25
- Label/metadata: 12/17, weight 700, letter spacing 0.04em

## 4. Component Stylings

- Primary button: route fill, white label, 2px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 2px radius
- Signature sheet: square corners, 1px ring, no diffuse shadow
- Binding methods: three semantic buttons with visible selected state
- Folio grid: four ordered pairs on one imposed sheet, retaining side and pair facts
- Validation: inline status tied to the job-name field

## 5. Layout Principles

- Maximum width 1080px
- Space scale: 4, 8, 12, 16, 24, 32, 48, 64
- Desktop centers a two-column imposition sheet with four ordered folio pairs
- Mobile uses one full-width ordered folio-pair row per item
- Compact controls move below their full-width naming copy when constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px route outline. No blur, glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied identifier and folio relationship exactly.
- Do keep binding and compensation choices reversible.
- Do not insert break markers inside atomic identifiers.
- Do not invent print, approval, pagination, color, production, or delivery outcomes.

## 8. Responsive Behavior

- Reflow the sheet before folio facts or controls clip at 740px.
- Controls remain at least 44px tall.
- Atomic identifiers, short metadata, compact-control copy, and controls remain on one line.
- Display headings and body prose may wrap naturally.
- Do not make a single text node horizontally scrollable.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working signature sheet as the visual center. Improve hierarchy and narrow-screen reading order without adding unsupported print or approval facts.

## 10. Voice & Tone

Technical, editorial, exact. Avoid seamless, intelligent, perfect, instant, and service theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied folio relationships visible.
2. Separate review state from production outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Binding selection updates `aria-pressed` and body binding state.
- Creep compensation updates `aria-pressed` and its naming copy.
- Empty job name announces an error and receives focus.
- Valid job name announces readiness for review without claiming approval or print.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
