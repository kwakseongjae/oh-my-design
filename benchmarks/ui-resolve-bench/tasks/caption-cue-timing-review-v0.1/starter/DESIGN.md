---
omd: 0.1
brand: Cuefold
status: fictional benchmark fixture
---

# Cuefold Design Contract

## 1. Visual Theme & Atmosphere

Cuefold is a dark editorial timing surface for reviewing supplied caption cues before a named cue set reaches a review boundary. It keeps cue, speaker, timecode, source-rate, timebase, and boundary-snap facts visible without implying that transcript, captions, playback, accessibility, translation, editorial approval, publishing, or delivery has completed.

## 2. Color Palette & Roles

- `page` `#111518` — page background
- `surface` `#1A1F23` — timing surface and controls
- `ink` `#F2F0EA` — primary text
- `muted` `#A8ADB1` — secondary text
- `line` `#3D454B` — separators
- `route` `#D7B45A` — primary action, focus, selected choice
- `attention` `#D96F5F` — validation and deliberate emphasis

No gradients, glass, glow, decorative side borders, or invented status colors.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 45/50 desktop, 32/37 mobile, weight 400
- Section heading: 25/30
- Body: 16/25
- Label/metadata: 12/17, weight 700, letter spacing 0.04em
- Timecodes and identifiers remain atomic; do not fake a monospace product font

## 4. Component Stylings

- Primary button: route fill, page-colored label, 2px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 2px radius
- Cue timeline: square corners, 1px ring, no diffuse shadow
- Timebase modes: three semantic buttons with visible selected state
- Cue rail: five ordered cues retaining identifier, speaker, in, and out facts
- Validation: inline status tied to the cue-set-name field

## 5. Layout Principles

- Maximum width 1120px
- Space scale: 4, 8, 12, 16, 24, 32, 48, 64
- Desktop presents an ordered cue rail with a stable timing column
- Mobile uses one full-width ordered cue row per item
- Compact controls move below their full-width naming copy when constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px route outline. No blur, glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied cue relationship and timecode exactly.
- Do keep timebase and boundary-snap choices reversible.
- Do not insert break markers inside atomic identifiers or timecodes.
- Do not invent transcript, accessibility, approval, publishing, or delivery outcomes.

## 8. Responsive Behavior

- Reflow the cue rail before identifiers, timecodes, or controls clip at 760px.
- Controls remain at least 44px tall.
- Cue identifiers, complete timecode pairs, short metadata, compact-control copy, and controls remain on one line.
- Display headings and body prose may wrap naturally.
- Do not make a single text node horizontally scrollable.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working cue timeline as the visual center. Improve hierarchy and narrow-screen reading order without adding unsupported caption or review facts.

## 10. Voice & Tone

Editorial, exact, calm. Avoid seamless, intelligent, perfect, instant, and service theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied timing relationships visible.
2. Separate review state from editorial and accessibility outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Timebase selection updates `aria-pressed` and body timebase state.
- Boundary snapping updates `aria-pressed` and its naming copy.
- Empty cue-set name announces an error and receives focus.
- Valid cue-set name announces readiness for review without claiming approval or publishing.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
