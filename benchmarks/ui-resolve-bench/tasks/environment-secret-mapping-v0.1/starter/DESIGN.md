---
omd: 0.1
brand: Lockstep
status: fictional benchmark fixture
---

# Lockstep Design Contract

## 1. Visual Theme & Atmosphere

Lockstep is a careful release desk. One coherent mapping surface keeps supplied
identifiers, environment choice, current state, and final action in clear order.

## 2. Color Palette & Roles

- `page` `#F3F1ED` — page background
- `surface` `#FFFFFF` — console and controls
- `ink` `#202A35` — primary text
- `muted` `#596673` — secondary text
- `line` `#C9D0D6` — separators
- `mapping` `#3D526B` — primary action, focus, selected choice
- `attention` `#A65B43` — validation and deliberate emphasis

No gradients, glass, glow, decorative left borders, or invented status colors.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 50/54 desktop, 36/40 mobile, weight 400
- Section heading: 28/32
- Body: 16/25
- Label: 12/17, weight 700, letter spacing 0.05em

## 4. Component Stylings

- Primary button: mapping fill, white label, 4px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 4px radius
- Mapping console: 8px radius, 1px ring, no diffuse shadow
- Environment choices: three semantic buttons with visible selected state
- Secret mapping: one coherent data surface, not a card per secret
- Validation: inline status tied to the mapping-label field

## 5. Layout Principles

- Maximum width 1080px
- Space scale: 4, 8, 12, 16, 20, 28, 40, 64
- Desktop keeps identifiers and aliases aligned in rows
- Mobile uses label-above-value reading order and full-width reading cells
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px mapping outline. No blur,
glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied secret identifier exactly.
- Do keep choices reversible and validation concrete.
- Do not insert break markers inside atomic identifiers.
- Do not invent validation, rotation, destination, or deployment outcomes.

## 8. Responsive Behavior

- Reflow before identifiers or controls clip at 720px.
- Controls remain at least 44px tall.
- Atomic identifiers, short labels, and controls remain on one line.
- Desktop column widths must not constrain mobile reading rows.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working mapping setup as the visual center. Improve hierarchy and
narrow-screen reading order without adding unsupported security facts.

## 10. Voice & Tone

Calm, precise, operational. Avoid seamless, intelligent, perfect, zero-risk,
and security theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied identifiers visible.
2. Separate mapping state from inferred outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Environment choice updates `aria-pressed` and body environment state.
- Inherited fallback updates `aria-pressed` and its visible label.
- Empty mapping label announces an error and receives focus.
- Valid mapping label announces readiness without claiming deployment success.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
