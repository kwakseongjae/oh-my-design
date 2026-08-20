# Grove DESIGN.md

## Product contract

Grove is a research workspace for small product teams. This task covers only
the first-run workspace setup. Do not invent customer counts, performance
claims, integrations, collaboration features, or paid-plan details.

## Visual direction

The interface should feel grounded, quiet, and editorial. Warm paper-like
backgrounds hold focused white work surfaces. Deep green is reserved for the
primary action and selected state; burnt orange is a small orientation accent.

## Color tokens

- Page background: `#F4F2EC`
- Surface: `#FFFFFF`
- Primary action: `#174E3A`
- Accent: `#D97841`
- Ink: `#15211B`
- Muted text: `#5B675F`
- Border: `#D5D8CF`

## Typography

- Body and controls: `Arial, sans-serif`
- Display heading: `Georgia, serif`
- Body: 16px / 1.6
- Supporting copy: 14px / 1.55
- H1: clamp(36px, 6vw, 68px) / 1.02
- Avoid all-caps paragraphs and decorative monospace.

## Geometry

- Main work-surface radius: `18px`
- Buttons and fields: `12px`
- Use one strong container rather than nesting many rounded cards.
- Minimum interactive target: 44px.

## Interaction

- Role choice is a single-select group with visible `aria-pressed` state.
- Weekly digest is optional and reversible.
- Invalid workspace names focus the field and explain the correction inline.
- Success copy confirms only that the workspace is ready.
- Focus must remain visibly distinct from hover and selected states.

## Voice

Direct, calm, and specific. Explain what the action changes and what remains
editable. Avoid celebration copy, vague reassurance, fake urgency, and claims
that are not present in the task.
