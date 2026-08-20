# Beacon DESIGN.md

## Product contract

Beacon is an incident coordination console for a small platform team. The
fixture contains four current incidents and two expandable response notes.
Do not invent uptime, response-time, customer, automation, or integration
claims.

## Visual direction

The console should feel controlled and information-dense, not cinematic.
Near-black green frames one raised operational surface. Mint indicates the
primary safe action. Amber is reserved for warnings and orientation.

## Color tokens

- Page background: `#0D1412`
- Surface: `#15211D`
- Primary action: `#46C78E`
- Accent: `#F4B860`
- Ink: `#ECF4F0`
- Muted text: `#9AA9A2`
- Border: `#2B3933`

## Typography

- Body, data, and controls: `Arial, sans-serif`
- Display heading: `Georgia, serif`
- Body: 15px / 1.55
- Supporting copy: 13px / 1.5
- H1: clamp(34px, 5vw, 60px) / 1.02
- Use tabular numerals only where the content is numeric.

## Geometry

- Main console radius: `14px`
- Buttons and filters: `10px`
- Rows use separators and alignment; they are not individual floating cards.
- Minimum interactive target: 44px.

## Interaction

- Filters are a single-select group with visible `aria-pressed` state.
- Disclosures start closed and preserve `aria-controls` relationships.
- Acknowledge is the only filled primary action and announces its result.
- Focus must remain visibly distinct from hover, severity, and selection.
- Reduced motion should remove decorative transitions.

## Voice

Use short operational labels and factual status sentences. Do not celebrate,
gamify, exaggerate urgency, or imply a recovery outcome that the fixture does
not prove.
