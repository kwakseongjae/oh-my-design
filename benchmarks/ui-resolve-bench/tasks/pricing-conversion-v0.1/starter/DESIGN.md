---
omd: 0.1
brand: Relay
status: fictional benchmark fixture
---

# Relay Design Contract

## 1. Visual Theme & Atmosphere

Relay should feel like a calm release room: precise enough for engineers, plain
enough for a first-time founder, and warm enough that a blocked launch does not
feel like an emergency dashboard. Prefer editorial hierarchy and real release
artifacts over a wall of interchangeable feature cards.

## 2. Color Palette & Roles

- `paper` `#F7F5EF` — page background
- `surface` `#FFFFFF` — elevated working surfaces
- `ink` `#172033` — primary text and dark controls
- `muted` `#667085` — secondary text only
- `line` `#D9D8D1` — separators and control rings
- `relay-blue` `#3157D5` — primary actions, focus, and selected state
- `signal-orange` `#E7683D` — small emphasis and status accents, never a second primary CTA
- `success` `#287A55` — confirmed signup state
- `danger` `#B33A3A` — validation error state

Do not introduce gradients or undeclared colors. Never use opacity to make body
text lighter than `muted`.

## 3. Typography Rules

- UI and body: `Arial`, `Helvetica`, sans-serif
- Display: `Georgia`, serif
- Hero: 64/64 desktop, 42/44 mobile, weight 400
- Section heading: 36/40 desktop, 30/34 mobile
- Body: 17/27
- Label: 13/18, weight 700, letter spacing 0.06em
- Keep prose at 66 characters or fewer per line.

These local families are intentionally explicit so the fixture is reproducible
without network access. Do not substitute another font.

## 4. Component Stylings

- Primary button: relay-blue fill, white label, 10px radius, 46px minimum height
- Secondary button: paper or surface fill, ink label, 1px line ring, 10px radius
- Pricing plan: 16px radius, 1px line ring, no wide shadow
- Recommended plan: selected by hierarchy, blue ring, and concise label; no glow
- Billing control: two semantic buttons inside one 10px-radius track
- Form errors appear next to the field and explain recovery
- FAQ uses real buttons; answers are not hover-only

## 5. Layout Principles

- Maximum content width: 1160px
- Space scale: 4, 8, 12, 16, 24, 32, 48, 72, 96
- Desktop pricing plans may use three columns; mobile is one reading-order column
- Prefer dividers and spacing before nesting another container
- Cards exist only for selectable plans or bounded product artifacts

## 6. Depth & Elevation

Depth uses rings and surface contrast. Do not use backdrop blur, glass, glow, or
diffuse drop shadows. A focused field may add a 3px blue focus ring.

## 7. Do's and Don'ts

- Do make the recommended plan obvious without making other plans look disabled.
- Do show concrete plan limits and decision-relevant differences.
- Do preserve all `data-bench` hooks and journeys.
- Do not add invented customer logos, testimonials, ratings, percentages, or
  performance claims.
- Do not use decorative left-accent borders, generic icon tiles, or excessive
  pills.

## 8. Responsive Behavior

- Reflow at 760px; never shrink three desktop columns until copy clips.
- Mobile CTA and form controls are at least 44px tall.
- Navigation may simplify, but the pricing anchor and primary action remain.
- No horizontal page scrolling at 320px or wider.

## 9. Agent Prompt Guide

Use the plan comparison and working billing/signup interactions as the visual
center. A release-summary artifact may support the story if it uses only the
facts already present in the starter.

## 10. Voice & Tone

Calm, specific, and builder-to-builder. Use short sentences and concrete nouns.
Avoid “revolutionize,” “supercharge,” “seamless,” “magical,” “10x,” and vague
claims about speed or productivity.

## 11. Brand Narrative

[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles

1. Make the next release decision visible.
2. Show what is blocked before promising what is fast.
3. One primary action per decision point.

## 13. Personas

[FILL IN — no demographic or behavioral persona facts are provided.]

## 14. States

- Invalid email: retain input, show the reason, and move focus to the field.
- Valid email: replace error with a calm inline confirmation; do not use a modal.
- Billing selection: update `aria-pressed` and every visible price.
- FAQ: update `aria-expanded`; collapsed answers must be hidden from assistive tech.

## 15. Motion & Easing

- `fast`: 120ms ease-out for focus and pressed feedback
- `standard`: 180ms ease-out for FAQ reveal
- Disable nonessential transitions under `prefers-reduced-motion: reduce`
