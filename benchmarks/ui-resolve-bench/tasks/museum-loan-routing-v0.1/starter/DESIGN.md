---
omd: 0.1
brand: Folio
status: fictional benchmark fixture
---

# Folio Design Contract

## 1. Visual Theme & Atmosphere

Folio is a quiet collections-operations workbench. One coherent loan surface
keeps supplied object, destination, registrar, policy, and review information
legible without implying that condition, custody, or transport outcomes are known.

## 2. Color Palette & Roles

- `page` `#F3F0EA` — page background
- `surface` `#FFFEFB` — routing console and controls
- `ink` `#252724` — primary text
- `muted` `#666760` — secondary text
- `line` `#CFC9BE` — separators
- `route` `#2D3E36` — primary action, focus, selected choice
- `attention` `#8B4A3A` — validation and deliberate emphasis

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
- Loan mapping: one coherent definition surface, not one card per object
- Validation: inline status tied to the handoff-label field

## 5. Layout Principles

- Maximum width 1040px
- Space scale: 4, 8, 12, 16, 20, 28, 40, 60
- Desktop aligns object, destination, and registrar facts
- Mobile uses label-above-value reading order and full-width reading cells
- Compact controls move below their full-width label when space is constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px route outline. No blur,
glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied identifier exactly.
- Do keep routing choices reversible and validation concrete.
- Do not insert break markers inside atomic identifiers.
- Do not invent condition, insurance, schedule, custody, or transport outcomes.

## 8. Responsive Behavior

- Reflow before identifiers or controls clip at 720px.
- Controls remain at least 44px tall.
- Atomic identifiers, short labels, and controls remain on one line.
- Do not make a single text node horizontally scrollable.
- Desktop column widths must not constrain mobile reading rows.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working museum-loan handoff as the visual center. Improve hierarchy and
narrow-screen reading order without adding unsupported collection facts.

## 10. Voice & Tone

Quiet, exact, operational. Avoid seamless, intelligent, perfect, instant, and service theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied objects visible.
2. Separate routing state from inferred outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Routing policy updates `aria-pressed` and body policy state.
- Source-note preservation updates `aria-pressed` and its label.
- Empty handoff label announces an error and receives focus.
- Valid handoff label announces readiness without claiming loan success.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
