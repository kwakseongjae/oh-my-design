# RunwayOps design contract

## Product direction

RunwayOps is a quiet internal reliability tool. It should feel deliberate,
inspectable, and calm under pressure. Avoid dashboard theatre, generic glowing
cards, alarm-heavy red surfaces, and decorative status effects.

## Color

- Page: `#F2F3F0`
- Surface: `#FFFFFF`
- Ink: `#202521`
- Muted text: `#5E665F`
- Border: `#CFD5CF`
- Primary action: `#355C4A`
- Blocked accent: `#A34B3F`
- Ready accent: `#3E6954`

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

- Desktop may use a comparison table.
- At 760px and below, each request becomes one reading-order block.
- Mobile metadata uses label-above-value rows; do not reserve a narrow label
  column that forces short values or controls to wrap.
- The selected authorization boundary stacks to one column on mobile.
- Preserve full control labels and atomic owner/status metadata.

## Motion and states

- Reduced motion is respected.
- Focus is visible on every control.
- Blocked and ready states use text plus a restrained color cue.
- The selected target, evidence, state, and final action remain distinct without
  adding new facts or warning banners.
