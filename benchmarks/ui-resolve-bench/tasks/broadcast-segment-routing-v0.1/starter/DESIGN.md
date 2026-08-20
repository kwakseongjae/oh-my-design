---
omd: 0.1
brand: Cueboard
status: fictional benchmark fixture
---

# Cueboard Design Contract

## 1. Visual Theme & Atmosphere

Cueboard is a quiet broadcast-operations surface for routing supplied segments into a rundown review. It keeps segment, destination, producer, duration, routing mode, and handoff facts visible without implying that material is approved, scheduled, or aired.

## 2. Color Palette & Roles

- `page` `#E9EEF0` — page background
- `surface` `#FBFCFC` — routing sheet and controls
- `ink` `#172126` — primary text
- `muted` `#5E6A70` — secondary text
- `line` `#B9C3C7` — separators
- `route` `#174F5C` — primary action, focus, selected choice
- `attention` `#A44632` — validation and deliberate emphasis

No gradients, glass, glow, decorative side borders, or invented status colors.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 46/51 desktop, 33/38 mobile, weight 400
- Section heading: 26/31
- Body: 16/25
- Label/metadata: 12/17, weight 700, letter spacing 0.04em

## 4. Component Stylings

- Primary button: route fill, white label, 2px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 2px radius
- Routing sheet: 3px radius, 1px ring, no diffuse shadow
- Routing modes: three semantic buttons with visible selected state
- Segment map: one coherent definition surface, not one card per segment
- Validation: inline status tied to the handoff-name field

## 5. Layout Principles

- Maximum width 1120px
- Space scale: 4, 8, 12, 16, 22, 30, 44, 64
- Desktop aligns segment, destination, producer, and duration facts
- Mobile uses label-above-value reading order and full-width reading cells
- Compact controls move below their full-width naming copy when constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px route outline. No blur, glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied identifier and duration exactly.
- Do keep routing choices reversible and validation concrete.
- Do not insert break markers inside atomic identifiers.
- Do not invent scheduling, approval, broadcast, audience, or compliance outcomes.

## 8. Responsive Behavior

- Reflow before identifiers or controls clip at 760px.
- Controls remain at least 44px tall.
- Atomic identifiers, short metadata, compact-control copy, and controls remain on one line.
- Display headings and body prose may wrap naturally.
- Do not make a single text node horizontally scrollable.
- Desktop column widths must not constrain mobile reading rows.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working rundown handoff as the visual center. Improve hierarchy and narrow-screen reading order without adding unsupported broadcast facts.

## 10. Voice & Tone

Direct, calm, operational. Avoid seamless, intelligent, perfect, instant, and service theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied segments visible.
2. Separate routing state from broadcast outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Routing mode updates `aria-pressed` and body routing state.
- Rundown-context preservation updates `aria-pressed` and its naming copy.
- Empty handoff name announces an error and receives focus.
- Valid handoff name announces readiness without claiming scheduling or approval.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
