---
omd: 0.1
brand: Permit
status: fictional benchmark fixture
---

# Permit Design Contract

## 1. Visual Theme & Atmosphere

Permit should feel like a quiet review desk: deliberate, legible, and
accountable without resembling a threat-monitoring dashboard. The main visual
artifact is the access-review matrix. Preserve the relationship between the
requester, requested scope, urgency, evidence, owner, and action.

## 2. Color Palette & Roles

- `paper` `#F2F0E9` — page background
- `surface` `#FFFFFF` — review console and bounded controls
- `ink` `#18231F` — primary text
- `muted` `#626C67` — secondary text
- `line` `#D7D3C8` — separators and control rings
- `permit-green` `#1D5D4F` — primary action, focus, and selected state
- `signal-rust` `#C45A3B` — urgent non-text signal, never ordinary body text
- `success` `#287052` — completed review status
- `danger` `#A33C35` — validation or blocking error only

Do not introduce gradients, glass, glow, undeclared colors, or decorative
status palettes. Urgency must remain readable without color.

## 3. Typography Rules

- UI and body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 56/58 desktop, 40/42 mobile, weight 400
- Section heading: 32/36 desktop, 28/32 mobile
- Body: 16/25
- Label: 12/17, weight 700, letter spacing 0.06em
- Data label: 13/18, weight 700

These local families are explicit for reproducibility. Do not substitute
another font.

## 4. Component Stylings

- Primary button: permit-green fill, white label, 8px radius, 44px minimum
  height
- Secondary button: surface fill, ink label, 1px line ring, 8px radius
- Main console: 12px radius, 1px line ring, no diffuse shadow
- Filter group: three semantic buttons with a visible selected state
- Review matrix: one coherent data surface, not a separate card per cell
- Evidence disclosure: real button with visible expanded state
- Status changes: concise inline announcement near the completing action

## 5. Layout Principles

- Maximum content width: 1180px
- Space scale: 4, 8, 12, 16, 24, 32, 48, 72
- Desktop may use aligned columns for request comparison
- Narrow screens preserve reading order and labels; reflow is preferred to
  clipping or shrinking text
- If a data region genuinely needs horizontal scrolling, the region—not the
  page—owns it and remains keyboard reachable with visible focus
- Prefer dividers and spacing before nesting another container

## 6. Depth & Elevation

Use surface contrast and 1px rings. Do not use blur, glass, glow, or wide drop
shadows. Focus may use a 3px permit-green outline.

## 7. Do's and Don'ts

- Do preserve identity, scope, urgency, evidence, owner, and next action.
- Do make urgent requests scannable without relying on color alone.
- Do keep all protected hooks and working journeys.
- Do not invent risk scores, compliance claims, approval history, or user
  counts.
- Do not convert the matrix into a wall of interchangeable cards.
- Do not add decorative left-accent borders, icon tiles, or excessive pills.

## 8. Responsive Behavior

- Reflow at 760px before useful data clips.
- Controls are at least 44px tall.
- The owner and action stay near each request on narrow screens.
- No horizontal page scrolling at 320px or wider.
- Focus remains visible at 200% zoom.

## 9. Agent Prompt Guide

Use the working access-review matrix as the visual center. Improve hierarchy
and narrow-screen reading order without adding unsupported security facts or
extra workflow.

## 10. Voice & Tone

Direct, calm, and operational. Use concrete nouns and actions. Avoid
“seamless,” “zero risk,” “military-grade,” “world-class,” and urgency theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep the requested scope visible.
2. Separate evidence from inference.
3. Make the next accountable action obvious.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Filter: update `aria-pressed`, body filter state, and visible request rows.
- Evidence: update `aria-expanded`; collapsed evidence is hidden from
  assistive technology.
- Complete review: announce the changed state inline and expose the completed
  button state.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus and pressed feedback
- `standard`: 180ms ease-out for evidence reveal
- Disable nonessential transitions under `prefers-reduced-motion: reduce`
