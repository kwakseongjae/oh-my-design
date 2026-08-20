---
omd: 0.1
brand: Fieldbook
status: fictional benchmark fixture
---

# Fieldbook Design Contract

## 1. Visual Theme & Atmosphere

Fieldbook is a calm field-research operations workbench. One coherent routing
surface keeps supplied sample, destination, steward, policy, and review facts
legible without implying that sample quality or scientific outcomes are known.

## 2. Color Palette & Roles

- `page` `#EEF1ED` — page background
- `surface` `#FCFDF9` — routing console and controls
- `ink` `#252A27` — primary text
- `muted` `#626A65` — secondary text
- `line` `#C8CEC7` — separators
- `route` `#29433B` — primary action, focus, selected choice
- `attention` `#9B542F` — validation and deliberate emphasis

No gradients, glass, glow, decorative left borders, or invented status colors.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 48/52 desktop, 34/38 mobile, weight 400
- Section heading: 27/31
- Body: 16/25
- Label/metadata: 12/17, weight 700, letter spacing 0.04em

## 4. Component Stylings

- Primary button: route fill, white label, 2px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 2px radius
- Routing console: 4px radius, 1px ring, no diffuse shadow
- Routing policies: three semantic buttons with visible selected state
- Sample mapping: one coherent definition surface, not one card per sample
- Validation: inline status tied to the handoff-label field

## 5. Layout Principles

- Maximum width 1040px
- Space scale: 4, 8, 12, 16, 20, 28, 40, 60
- Desktop aligns sample, destination, and steward facts
- Mobile uses label-above-value reading order and full-width reading cells
- Compact controls move below their full-width naming copy when constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px route outline. No blur,
glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied identifier exactly.
- Do keep routing choices reversible and validation concrete.
- Do not insert break markers inside atomic identifiers.
- Do not invent sample quality, assay, custody, storage, or research outcomes.

## 8. Responsive Behavior

- Reflow before identifiers or controls clip at 720px.
- Controls remain at least 44px tall.
- Atomic identifiers, short labels, and controls remain on one line.
- Do not make a single text node horizontally scrollable.
- Desktop column widths must not constrain mobile reading rows.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working sample handoff as the visual center. Improve hierarchy and
narrow-screen reading order without adding unsupported scientific facts.

## 10. Voice & Tone

Calm, exact, observational. Avoid seamless, intelligent, perfect, instant, and service theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied samples visible.
2. Separate routing state from inferred outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Routing policy updates `aria-pressed` and body policy state.
- Field-note preservation updates `aria-pressed` and its naming copy.
- Empty handoff label announces an error and receives focus.
- Valid handoff label announces readiness without claiming research success.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
