# Organ transport custody review

## Color
- Canvas: `#F1F0EB`
- Surface: `#FFFDF8`
- Ink: `#242A2D`
- Muted text: `#767A78`
- Border: `#B9B7AE`
- Primary action: `#334F5C`
- Signal: `#98512E`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates state and structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic container, custody-scan, receiving-bay, and handoff-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the container register, receiving-bay strip, and handoff decision as separate relationship carriers.
- Preserve four containers, six custody scan assignments, two receiving bays, three view controls, one custody-note toggle, and one handoff review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, handoff windows, and `Handoff review pending` state are observations only. They do not prove container seal continuity, temperature stability, courier availability, route confirmation, transplant coordinator authorization, clinical handoff approval, or recipient readiness.

