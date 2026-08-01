---
omd: 0.1
brand: Briefline
status: fictional benchmark fixture
---

# Briefline Design Contract

## 1. Visual Theme & Atmosphere

Briefline is a restrained editorial-operations workbench. One coherent routing surface keeps supplied source, desk, editor, policy, and review facts legible without implying that a brief is accurate, approved, or published.

## 2. Color Palette & Roles

- `page` `#F3F0EA` — page background
- `surface` `#FFFDF8` — routing console and controls
- `ink` `#282723` — primary text
- `muted` `#67635B` — secondary text
- `line` `#CDC7BB` — separators
- `route` `#3D4737` — primary action, focus, selected choice
- `attention` `#9A4F34` — validation and deliberate emphasis

No gradients, glass, glow, decorative side borders, or invented status colors.

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
- Brief mapping: one coherent definition surface, not one card per source
- Validation: inline status tied to the handoff-label field

## 5. Layout Principles

- Maximum width 1040px
- Space scale: 4, 8, 12, 16, 20, 28, 40, 60
- Desktop aligns source, destination desk, and editor facts
- Mobile uses label-above-value reading order and full-width reading cells
- Compact controls move below their full-width naming copy when constrained
- No horizontal page scrolling at 320px or wider

## 6. Depth & Elevation

Use surface contrast and 1px lines. Focus uses a 3px route outline. No blur, glass, glow, or wide shadows.

## 7. Do's and Don'ts

- Do preserve every supplied identifier exactly.
- Do keep routing choices reversible and validation concrete.
- Do not insert break markers inside atomic identifiers.
- Do not invent publication, approval, readership, accuracy, or legal-review outcomes.

## 8. Responsive Behavior

- Reflow before identifiers or controls clip at 720px.
- Controls remain at least 44px tall.
- Atomic identifiers, short metadata, compact-control copy, and controls remain on one line.
- Display headings and body prose may wrap naturally.
- Do not make a single text node horizontally scrollable.
- Desktop column widths must not constrain mobile reading rows.
- Target, evidence, state, and action keep their hierarchy at 200%.

## 9. Agent Prompt Guide

Use the working editorial handoff as the visual center. Improve hierarchy and narrow-screen reading order without adding unsupported editorial facts.

## 10. Voice & Tone

Calm, exact, editorial. Avoid seamless, intelligent, perfect, instant, and service theatre.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Keep supplied sources visible.
2. Separate routing state from editorial outcomes.
3. Make the final review boundary explicit.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Routing policy updates `aria-pressed` and body policy state.
- Source-context preservation updates `aria-pressed` and its naming copy.
- Empty handoff label announces an error and receives focus.
- Valid handoff label announces readiness without claiming editorial approval.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus/pressed feedback
- `standard`: 180ms ease-out for state changes
- Disable nonessential motion under `prefers-reduced-motion: reduce`
