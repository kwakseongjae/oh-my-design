---
omd: 0.1
brand: Ledgerline
status: fictional benchmark fixture
---

# Ledgerline Design Contract

## 1. Visual Theme & Atmosphere

Ledgerline is a deliberate audit desk. One coherent delivery surface keeps the
supplied manifest, artifact destinations, recipient policy, and final review
boundary legible without implying that a transfer has occurred.

## 2. Color Palette & Roles

- `page` `#F4F0EA` — page background
- `surface` `#FFFFFF` — delivery console and controls
- `ink` `#252C33` — primary text
- `muted` `#5F6972` — secondary text
- `line` `#CDD1D4` — separators
- `delivery` `#4B596A` — primary action, focus, selected choice
- `attention` `#8B593C` — validation and deliberate emphasis

No gradients, glass, glow, decorative left borders, or invented status colors.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 50/54 desktop, 36/40 mobile, weight 400
- Section heading: 28/32
- Body: 16/25
- Label: 12/17, weight 700, letter spacing 0.05em

## 4. Component Stylings

- Primary button: delivery fill, white label, 4px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 4px radius
- Delivery console: 8px radius, 1px ring, no diffuse shadow
- Delivery channels: three semantic buttons with visible selected state
- Manifest: one coherent definition surface, not one card per artifact
- Validation: inline status tied to the export-label field

## 5. Layout Principles

- Maximum width 1080px
- Space scale: 4, 8, 12, 16, 20, 28, 40, 64
- Desktop aligns artifact, destination, and retention facts
- Mobile uses label-above-value reading order and full-width reading cells
- Compact controls move below their full-width label when space is constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px delivery outline. No blur,
glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied identifier exactly.
- Do keep delivery choices reversible and validation concrete.
- Do not insert break markers inside atomic identifiers.
- Do not invent compliance, recipient-verification, or transfer outcomes.

## 8. Responsive Behavior

- Reflow before identifiers or controls clip at 720px.
- Controls remain at least 44px tall.
- Atomic identifiers, filenames, short labels, and controls remain on one line.
- Do not make a single text node horizontally scrollable.
- Desktop column widths must not constrain mobile reading rows.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working delivery setup as the visual center. Improve hierarchy and
narrow-screen reading order without adding unsupported compliance facts.

## 10. Voice & Tone

Calm, precise, operational. Avoid seamless, intelligent, perfect, zero-risk,
and compliance theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied artifacts visible.
2. Separate delivery state from inferred outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Delivery channel updates `aria-pressed` and body channel state.
- Recipient identity verification updates `aria-pressed` and its label.
- Empty export label announces an error and receives focus.
- Valid export label announces readiness without claiming transfer success.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
