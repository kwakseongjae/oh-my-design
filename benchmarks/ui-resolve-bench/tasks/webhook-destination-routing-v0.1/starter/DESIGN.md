---
omd: 0.1
brand: Relaydesk
status: fictional benchmark fixture
---

# Relaydesk Design Contract

## 1. Visual Theme & Atmosphere

Relaydesk is a careful integration desk. One coherent routing surface keeps
supplied event identifiers, destination choice, current policy, and final
action in a clear operational order.

## 2. Color Palette & Roles

- `page` `#F5F2EC` — page background
- `surface` `#FFFFFF` — routing console and controls
- `ink` `#202B30` — primary text
- `muted` `#59686B` — secondary text
- `line` `#CBD2D1` — separators
- `route` `#315A62` — primary action, focus, selected choice
- `attention` `#A45A3A` — validation and deliberate emphasis

No gradients, glass, glow, decorative left borders, or invented status colors.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 50/54 desktop, 36/40 mobile, weight 400
- Section heading: 28/32
- Body: 16/25
- Label: 12/17, weight 700, letter spacing 0.05em

## 4. Component Stylings

- Primary button: route fill, white label, 4px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 4px radius
- Routing console: 8px radius, 1px ring, no diffuse shadow
- Delivery lanes: three semantic buttons with visible selected state
- Event routes: one coherent definition surface, not one card per event
- Validation: inline status tied to the route-label field

## 5. Layout Principles

- Maximum width 1080px
- Space scale: 4, 8, 12, 16, 20, 28, 40, 64
- Desktop aligns event, endpoint, and policy as one readable row
- Mobile uses label-above-value reading order and full-width reading cells
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px route outline. No blur,
glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied identifier exactly.
- Do keep choices reversible and validation concrete.
- Do not insert break markers inside atomic identifiers.
- Do not invent delivery, signing, destination-health, or validation outcomes.

## 8. Responsive Behavior

- Reflow before identifiers or controls clip at 720px.
- Controls remain at least 44px tall.
- Atomic identifiers, filenames, short labels, and controls remain on one line.
- Desktop column widths must not constrain mobile reading rows.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working route setup as the visual center. Improve hierarchy and
narrow-screen reading order without adding unsupported delivery facts.

## 10. Voice & Tone

Calm, precise, operational. Avoid seamless, intelligent, perfect, zero-risk,
and integration theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied identifiers visible.
2. Separate route state from inferred outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Delivery lane updates `aria-pressed` and body lane state.
- Signature verification updates `aria-pressed` and its visible label.
- Empty route label announces an error and receives focus.
- Valid route label announces readiness without claiming delivery success.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
