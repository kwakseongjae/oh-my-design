---
omd: 0.1
brand: RelayDesk
status: fictional benchmark fixture
---

# RelayDesk Design Contract

## 1. Visual Theme & Atmosphere

RelayDesk is a calm dispatch desk, not an alarm dashboard. The main artifact is
one shipment-exception matrix. Preserve the relationship between shipment,
route, expected window, scan evidence, current state, and next action.

## 2. Color Palette & Roles

- `page` `#F1F2EE` — page background
- `surface` `#FFFFFF` — console and controls
- `ink` `#1E2522` — primary text
- `muted` `#5E6762` — secondary text
- `line` `#D1D6D1` — separators
- `dispatch` `#245A53` — primary action, focus, selected filter
- `exception` `#A8543F` — actionable state
- `monitoring` `#39705D` — monitoring state

No gradients, glass, glow, decorative left borders, or invented status colors.
State must remain readable without color.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 52/56 desktop, 38/41 mobile, weight 400
- Section heading: 30/34
- Body: 16/25
- Label: 12/17, weight 700, letter spacing 0.05em

## 4. Component Stylings

- Primary button: dispatch fill, white label, 4px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 4px radius
- Main console: 8px radius, 1px ring, no diffuse shadow
- Filters: three semantic buttons with visible selected state
- Matrix: one coherent data surface, not a card per field
- Evidence: real disclosure button and visible expanded state

## 5. Layout Principles

- Maximum width 1160px
- Space scale: 4, 8, 12, 16, 20, 28, 40, 64
- Desktop aligns comparable fields in columns
- Mobile uses label-above-value reading order
- No horizontal page scrolling at 320px or wider
- Prefer dividers and spacing before another container

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px dispatch outline. No blur,
glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve shipment, route, timing, evidence, state, and next action.
- Do keep actionable state distinct without warning theatre.
- Do keep all protected hooks and working journeys.
- Do not invent severity, delay cause, carrier fault, ETA, or customer impact.
- Do not fragment one record into interchangeable cards.

## 8. Responsive Behavior

- Reflow before data clips at 760px.
- Controls remain at least 44px tall.
- Short labels and controls remain on one line.
- Selected target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working exception matrix as the visual center. Improve hierarchy and
narrow-screen reading order without adding unsupported logistics facts.

## 10. Voice & Tone

Calm, concrete, operational. Prefer shipment, route, scan, state, and record.
Avoid seamless, intelligent, zero-delay, and urgency theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep the shipment identifiable.
2. Separate scan evidence from inference.
3. Make the next accountable action obvious.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Filter updates `aria-pressed`, body filter, and visible rows.
- Evidence updates `aria-expanded` and hidden state.
- Complete triage announces the state and disables the completed action.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for disclosure
- Disable nonessential motion under `prefers-reduced-motion: reduce`
