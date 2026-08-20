---
omd: 0.1
brand: Northline
status: fictional benchmark fixture
---

# Northline Spectrum Review Design Contract

## 1. Visual Theme & Atmosphere

Northline is a restrained observatory operations surface for reviewing supplied receiver allocations before a night session is handed off. It keeps frequency ranges, allocation identifiers, receiver mode, guard-band notes, session name, and review state visible without claiming that interference, calibration, signal, safety, observation, science, approval, or release work is complete.

## 2. Color Palette & Roles

- `page` `#EEECE6` — page background
- `surface` `#FFFEFA` — spectrum and control surface
- `ink` `#1B2524` — primary text and readable supporting copy
- `muted` `#696D6B` — secondary metadata candidate; use only where exact contrast passes
- `line` `#BDB9AE` — separators
- `signal` `#203D3A` — primary action, focus, selected choice
- `attention` `#A64A32` — validation and deliberate emphasis

All normal text must meet WCAG AA contrast against its rendered background. If a semantic token name does not meet the threshold, use the existing verified `ink` role rather than inventing a substitute. No gradients, glass, glow, decorative side borders, or invented status colors.

## 3. Typography Rules

- UI/body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 46/49 desktop, 32/37 mobile, weight 400
- Section heading: 25/30
- Body: 16/25
- Label/metadata: 12/17, weight 700, letter spacing 0.04em

## 4. Component Stylings

- Primary button: signal fill, white label, 2px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 2px radius
- Spectrum board: square corners, 1px ring, no diffuse shadow
- Receiver modes: three semantic buttons with visible selected state
- Spectrum strip: seven ascending supplied allocation segments, retaining exact range and allocation pairs
- Validation: inline status tied to the session-name field

## 5. Layout Principles

- Maximum width 1120px
- Space scale: 4, 8, 12, 16, 24, 32, 48, 64
- Desktop presents one continuous ordered spectrum strip
- Mobile uses one full-width ordered allocation row per segment
- Compact controls move below their full-width naming copy when constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px signal outline. No blur, glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied range and allocation relationship exactly.
- Do keep receiver and guard-band choices reversible.
- Do calculate exact contrast for every normal-text foreground/background pair.
- Do reflow the parent metadata or decision row before an atomic child wraps.
- Do not insert break markers inside atomic values.
- Do not invent interference, calibration, signal, safety, approval, observation, science, or release outcomes.

## 8. Responsive Behavior

- Reflow the spectrum strip before range or allocation facts clip at 740px.
- Controls remain at least 44px tall.
- Atomic ranges, allocation identifiers, short metadata, compact-control copy, and controls remain on one line.
- If a sibling atomic value would wrap, stack its parent row before changing or splitting the value.
- Release desktop track widths and minimum widths at the narrowest condition.
- Display headings and body prose may wrap naturally.
- Do not make a single text node horizontally scrollable.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the ordered spectrum strip as the visual center. Improve hierarchy, exact text contrast, and narrow-screen reading order without adding unsupported observatory outcomes.

## 10. Voice & Tone

Technical, calm, exact. Avoid seamless, intelligent, perfect, instant, and service theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied allocation relationships visible.
2. Separate review state from observatory outcomes.
3. Make the handoff boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Receiver selection updates `aria-pressed` and body receiver state.
- Guard-band notes update `aria-pressed` and their naming copy.
- Empty session name announces an error and receives focus.
- Valid session name announces readiness for review without claiming approval or observation.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
