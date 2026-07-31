---
omd: 0.1
brand: RelayLocale
status: fictional benchmark fixture
---

# RelayLocale Design Contract

## 1. Visual Theme & Atmosphere

RelayLocale is a precise release handoff desk, not a language-quality
scoreboard. Keep artifact identity, supplied source evidence, current state,
and the next accountable action in one coherent review surface.

## 2. Color Palette & Roles

- `page` `#F2F4F3` — page background
- `surface` `#FFFFFF` — console and controls
- `ink` `#1B282C` — primary text
- `muted` `#5B686D` — secondary text
- `line` `#CCD5D5` — separators
- `handoff` `#265A68` — primary action, focus, selected filter
- `review` `#B05E45` — needs-review state

No gradients, glass, glow, decorative left borders, or invented quality colors.
State must remain readable without color.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 50/54 desktop, 36/40 mobile, weight 400
- Section heading: 28/32
- Body: 16/25
- Label: 12/17, weight 700, letter spacing 0.05em

## 4. Component Stylings

- Primary button: handoff fill, white label, 4px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 4px radius
- Main console: 6px radius, 1px ring, no diffuse shadow
- Filters: three semantic buttons with visible selected state
- Bundle matrix: one coherent data surface, not a card per field
- Evidence: real disclosure button and visible expanded state

## 5. Layout Principles

- Maximum width 1120px
- Space scale: 4, 8, 12, 16, 20, 28, 40, 64
- Desktop aligns comparable bundle fields in columns
- Mobile uses label-above-value reading order
- No horizontal page scrolling at 320px or wider
- Prefer dividers and spacing before another container

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px handoff outline. No blur,
glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every artifact identifier and supplied source fact.
- Do separate source evidence from translation inference.
- Do keep all protected hooks and working journeys.
- Do not invent translation quality, locale readiness, or release outcomes.
- Do not fragment one bundle into interchangeable cards.

## 8. Responsive Behavior

- Reflow before labels, controls, or atomic artifact identifiers clip at 720px.
- Controls remain at least 44px tall.
- Artifact identifiers, short labels, and controls remain on one line.
- Selected target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working bundle matrix as the visual center. Improve hierarchy and
narrow-screen reading order without adding unsupported localization facts.

## 10. Voice & Tone

Calm, exact, release-oriented. Prefer artifact, locale, source, state, and
handoff. Avoid perfect, native-quality, intelligent, zero-error, and urgency
theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep the artifact identifiable.
2. Separate supplied evidence from inference.
3. Make the handoff boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Filter updates `aria-pressed`, body filter, and visible rows.
- Evidence updates `aria-expanded` and hidden state.
- Complete handoff announces the state and disables the completed action.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for disclosure
- Disable nonessential motion under `prefers-reduced-motion: reduce`
