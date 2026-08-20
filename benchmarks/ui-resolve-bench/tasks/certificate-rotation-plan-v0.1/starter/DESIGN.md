---
omd: 0.1
brand: Northstar
status: fictional benchmark fixture
---

# Northstar Design Contract

## 1. Visual Theme & Atmosphere

Northstar is a quiet infrastructure workbench. One coherent planning surface
keeps the supplied rotation plan, service sequence, operator policy, and final
review boundary legible without implying that a certificate was validated or rotated.

## 2. Color Palette & Roles

- `page` `#F3F5F2` — page background
- `surface` `#FFFFFF` — rotation console and controls
- `ink` `#202A26` — primary text
- `muted` `#5C6963` — secondary text
- `line` `#C9D1CC` — separators
- `rotation` `#315B4C` — primary action, focus, selected choice
- `attention` `#9A5A3A` — validation and deliberate emphasis

No gradients, glass, glow, decorative left borders, or invented status colors.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 48/52 desktop, 34/38 mobile, weight 400
- Section heading: 27/31
- Body: 16/25
- Label: 12/17, weight 700, letter spacing 0.04em

## 4. Component Stylings

- Primary button: rotation fill, white label, 3px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 3px radius
- Rotation console: 6px radius, 1px ring, no diffuse shadow
- Rollout windows: three semantic buttons with visible selected state
- Sequence: one coherent ordered surface, not one card per service
- Validation: inline status tied to the rotation-label field

## 5. Layout Principles

- Maximum width 1040px
- Space scale: 4, 8, 12, 16, 20, 28, 40, 60
- Desktop aligns service, current certificate, and target certificate facts
- Mobile uses label-above-value reading order and full-width reading cells
- Compact controls move below their full-width label when space is constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px rotation outline. No blur,
glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied identifier exactly.
- Do keep rollout choices reversible and validation concrete.
- Do not insert break markers inside atomic identifiers.
- Do not invent certificate health, operator confirmation, or rotation outcomes.

## 8. Responsive Behavior

- Reflow before identifiers or controls clip at 720px.
- Controls remain at least 44px tall.
- Atomic identifiers, filenames, short labels, and controls remain on one line.
- Do not make a single text node horizontally scrollable.
- Desktop column widths must not constrain mobile reading rows.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working rotation plan as the visual center. Improve hierarchy and
narrow-screen reading order without adding unsupported security facts.

## 10. Voice & Tone

Calm, exact, operational. Avoid seamless, intelligent, perfect, zero-risk, and security theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied services visible.
2. Separate planning state from inferred outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Rollout window updates `aria-pressed` and body window state.
- Dual-operator confirmation updates `aria-pressed` and its label.
- Empty rotation label announces an error and receives focus.
- Valid rotation label announces readiness without claiming rotation success.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
