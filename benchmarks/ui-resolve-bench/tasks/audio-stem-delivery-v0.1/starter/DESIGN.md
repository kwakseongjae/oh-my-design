---
omd: 0.1
brand: Mixrail
status: fictional benchmark fixture
---

# Mixrail Design Contract

## 1. Visual Theme & Atmosphere

Mixrail is a precise post-production handoff surface for arranging supplied audio stems before package review. It keeps stem, bus, owner, package mode, checksum context, and delivery-name facts visible without implying that a mix is approved, delivered, mastered, or accepted.

## 2. Color Palette & Roles

- `page` `#ECEAE6` — page background
- `surface` `#FAF9F6` — delivery board and controls
- `ink` `#202326` — primary text
- `muted` `#62676B` — secondary text
- `line` `#C6C3BC` — separators
- `route` `#314C61` — primary action, focus, selected choice
- `attention` `#9B4638` — validation and deliberate emphasis

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
- Delivery board: 4px radius, 1px ring, no diffuse shadow
- Package modes: three semantic buttons with visible selected state
- Stem inventory: one two-column inventory surface on desktop, one reading column on mobile
- Validation: inline status tied to the delivery-name field

## 5. Layout Principles

- Maximum width 1080px
- Space scale: 4, 8, 12, 16, 24, 32, 48, 64
- Desktop uses two inventory columns; each item aligns stem, bus, and owner facts
- Mobile uses label-above-value order and one full-width fact per row
- Compact controls move below their full-width naming copy when constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px route outline. No blur, glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied identifier exactly.
- Do keep package choices reversible and validation concrete.
- Do not insert break markers inside atomic identifiers.
- Do not invent delivery, approval, playback, quality, acceptance, or legal outcomes.

## 8. Responsive Behavior

- Reflow the inventory before identifiers or controls clip at 740px.
- Controls remain at least 44px tall.
- Atomic identifiers, short metadata, compact-control copy, and controls remain on one line.
- Display headings and body prose may wrap naturally.
- Do not make a single text node horizontally scrollable.
- Desktop inventory tracks must not constrain mobile reading facts.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working stem-package handoff as the visual center. Improve hierarchy and narrow-screen reading order without adding unsupported audio or delivery facts.

## 10. Voice & Tone

Technical, quiet, exact. Avoid seamless, intelligent, perfect, instant, and service theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied stem facts visible.
2. Separate package state from delivery outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Package mode updates `aria-pressed` and body package state.
- Checksum-context preservation updates `aria-pressed` and its naming copy.
- Empty delivery name announces an error and receives focus.
- Valid delivery name announces readiness without claiming delivery or approval.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
