# RelayForge design contract

## Product direction

RelayForge is a compact internal release tool. It should feel precise, calm, and
easy to inspect. Avoid dashboard theatre, glowing cards, warning-heavy surfaces,
and decorative infrastructure motifs.

## Color

- Page: `#F3F1ED`
- Surface: `#FFFFFF`
- Ink: `#20242A`
- Muted text: `#62666C`
- Border: `#D1CEC7`
- Primary action: `#3D526D`
- Blocked accent: `#A65B3E`
- Ready accent: `#416753`

## Shape and spacing

- Main console radius: `6px`
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
- At 760px and below, each artifact becomes one reading-order block.
- Mobile metadata uses label-above-value rows; never reserve a narrow label column.
- Atomic artifact filenames remain intact and visible without page overflow.
- The selected promotion boundary stacks to one column on mobile.

## Motion and states

- Reduced motion is respected and focus is visible.
- Blocked and ready states use text plus a restrained color cue.
- Target, evidence, state, and final action remain distinct without new facts.
