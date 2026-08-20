---
omd: 0.1
brand: FieldMerge
status: fictional benchmark fixture
---

# FieldMerge Design Contract

## 1. Visual Theme & Atmosphere

FieldMerge is a careful mapping desk, not a celebratory import wizard. The main
artifact is one coherent configuration surface that keeps source evidence,
mapping choices, current state, and the final import action in a clear order.

## 2. Color Palette & Roles

- `page` `#F5F3EF` — page background
- `surface` `#FFFFFF` — console and controls
- `ink` `#1D2630` — primary text
- `muted` `#5A6571` — secondary text
- `line` `#CCD2D9` — separators
- `mapping` `#304C73` — primary action, focus, selected choice
- `attention` `#B25E3B` — validation and deliberate emphasis

No gradients, glass, glow, decorative left borders, or invented status colors.
State must remain readable without color.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 50/54 desktop, 36/40 mobile, weight 400
- Section heading: 28/32
- Body: 16/25
- Label: 12/17, weight 700, letter spacing 0.05em

## 4. Component Stylings

- Primary button: mapping fill, white label, 6px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 6px radius
- Mapping console: 10px radius, 1px ring, no diffuse shadow
- Key choices: three semantic buttons with visible selected state
- Mapping table: one coherent data surface, not a card per field
- Validation: inline status tied to the mapping-name field

## 5. Layout Principles

- Maximum width 1080px
- Space scale: 4, 8, 12, 16, 20, 28, 40, 64
- Desktop keeps source and destination fields aligned in rows
- Mobile uses label-above-value reading order
- No horizontal page scrolling at 320px or wider
- Prefer dividers and spacing before another container

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px mapping outline. No blur,
glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve the source file and supplied column names.
- Do keep choices reversible and validation concrete.
- Do keep all protected hooks and working journeys.
- Do not invent record counts, match rates, destinations, or import outcomes.
- Do not fragment one mapping into interchangeable cards.

## 8. Responsive Behavior

- Reflow before labels or controls clip at 720px.
- Controls remain at least 44px tall.
- Short labels and controls remain on one line.
- Source, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working mapping setup as the visual center. Improve hierarchy and
narrow-screen reading order without adding unsupported data facts.

## 10. Voice & Tone

Calm, precise, operational. Prefer source, field, key, mapping, row, and import.
Avoid seamless, intelligent, perfect, zero-error, and migration theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep source evidence visible.
2. Separate configuration state from inferred outcomes.
3. Make the final import boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Key choice updates `aria-pressed` and body key state.
- Missing-key policy updates `aria-pressed` and its visible label.
- Empty mapping name announces an error and receives focus.
- Valid mapping name announces readiness without claiming import success.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
