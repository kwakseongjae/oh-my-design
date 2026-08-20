# TernaryOps design contract

## Product direction

TernaryOps is a quiet product-operations tool for inspecting rollout inputs.
It should feel precise and calm, not promotional. Avoid dashboard theatre,
gradient glows, generic card walls, warning banners, and fake analytics.

## Color

- Page: `#F0F3F2`
- Surface: `#FFFFFF`
- Ink: `#1D2928`
- Muted text: `#5A6865`
- Border: `#CBD4D1`
- Primary action: `#315D58`
- Review accent: `#9B5A3C`
- Ready accent: `#3D6C58`

## Shape and spacing

- Main console radius: `8px`
- Controls: `4px`
- Spacing scale: `4, 8, 12, 16, 20, 24, 32, 48, 64`
- Prefer borders and spacing to layered shadows.

## Typography

- Body and controls: Arial, Helvetica, sans-serif
- Display headings: Georgia, serif
- Hero: 52/56 desktop, 38/41 mobile, weight 400
- Section heading: 30/34 desktop, 27/31 mobile
- Selected target: at least 20px or 700 weight
- Metadata labels: 12/17, weight 700, restrained tracking

## Responsive behavior

- Desktop may use a table; below 760px each flag becomes a reading-order block.
- Mobile metadata uses label-above-value rows, not narrow label columns.
- Atomic dot-separated flag keys remain intact and visible without page overflow.
- The selected review boundary stacks to one column on mobile.

## Motion and states

- Reduced motion is respected and focus is visible.
- Review and ready use text plus a restrained non-text color cue.
- Target, evidence, state, and action remain distinct without new facts.
