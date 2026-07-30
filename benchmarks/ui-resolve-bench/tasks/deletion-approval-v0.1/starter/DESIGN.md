---
omd: 0.1
brand: ArchiveLine
status: fictional benchmark fixture
---

# ArchiveLine Design Contract

## 1. Visual Theme & Atmosphere

ArchiveLine should feel like a careful records desk: calm, exact, and
deliberate. The deletion queue is the primary artifact. Preserve the visible
relationship between workspace, owner, requested date, deletion scope,
supplied evidence, blocker state, and the final approval decision.

## 2. Color Palette & Roles

- `paper` `#F4F1EB` — page background
- `surface` `#FFFFFF` — queue and dialog surfaces
- `ink` `#242128` — primary text
- `muted` `#625D66` — secondary text
- `line` `#D6D0D9` — separators and control rings
- `archive-violet` `#5B3D77` — primary action, focus, and selected state
- `signal-clay` `#A05245` — blocked non-text signal
- `success` `#35634B` — confirmed status
- `danger` `#9F3D35` — blocking error only

Do not introduce gradients, glass, glow, undeclared colors, or ornamental
status palettes. Status must remain understandable without color.

## 3. Typography Rules

- UI and body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 54/58 desktop, 39/42 mobile, weight 400
- Section heading: 30/34 desktop, 27/31 mobile
- Body: 16/25
- Label: 12/17, weight 700, letter spacing 0.06em
- Scope value: 16/22, weight 700

These local families are explicit for reproducibility. Do not substitute
another font.

## 4. Component Stylings

- Primary button: archive-violet fill, white label, 6px radius, 44px minimum height
- Secondary button: surface fill, ink label, 1px line ring, 6px radius
- Main queue: 10px radius, 1px line ring, no diffuse shadow
- Filter group: three semantic buttons with one visible selected state
- Deletion table: one coherent comparison surface, not a card per field
- Evidence disclosure: real button with visible expanded state
- Approval dialog: bounded confirmation with visible workspace and deletion scope,
  cancel-first keyboard order, and no decorative warning banner
- Status change: concise inline announcement beside the decision trigger

## 5. Layout Principles

- Maximum content width: 1160px
- Space scale: 4, 8, 12, 16, 24, 32, 48, 72
- Desktop may use aligned columns for payout comparison
- Narrow screens preserve labels and reading order before visual density
- Reflow useful data rather than clipping it or shrinking body text
- Prefer dividers and whitespace before nesting another container

## 6. Depth & Elevation

Use surface contrast and 1px rings. The modal may use one restrained backdrop
and a compact shadow. Do not use blur, glass, glow, or stacked shadows. Focus
uses a 3px archive-violet outline.

## 7. Do's and Don'ts

- Do keep workspace and deletion scope visible at the confirmation boundary.
- Do restore focus after cancel and confirm.
- Do distinguish “blocked” in text as well as color.
- Do not invent risk scores, legal conclusions, approval history, or deletion
  guarantees.
- Do not hide the destructive boundary behind an icon-only control.
- Do not add accent side borders, decorative icon tiles, or excessive pills.

## 8. Responsive Behavior

- Reflow at 760px before useful data clips.
- Controls are at least 44px tall.
- Dialog actions stack when their labels no longer fit.
- No horizontal page scrolling at 320px or wider.
- Focus remains visible at 200% zoom.

## 9. Agent Prompt Guide

Use the deletion queue and approval boundary as the visual center. Improve
hierarchy, narrow-screen reading order, and decision clarity without adding
unsupported governance facts or extra workflow.

## 10. Voice & Tone

Concrete, measured, and operational. Name the workspace, owner, scope, action,
and state. Avoid “seamless,” “instant,” “risk-free,” “smart,” and generic
reassurance.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep the deletion scope at the decision boundary.
2. Separate supplied evidence from inference.
3. Make cancellation as legible as confirmation.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Filter: update `aria-pressed`, body filter state, and visible payout rows.
- Evidence: update `aria-expanded`; collapsed evidence remains hidden.
- Approval dialog: closed initially; opening moves focus inside; cancel and
  confirm close it and restore focus to the trigger.
- Confirmed: announce the changed state inline.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus and pressed feedback
- `standard`: 180ms ease-out for evidence and dialog feedback
- Disable nonessential transitions under `prefers-reduced-motion: reduce`
