# Pharmaceutical batch deviation review

## Color
- Canvas: `#F2F0EC`
- Surface: `#FFFEFB`
- Ink: `#252824`
- Muted text: `#777970`
- Border: `#B5B6AE`
- Primary action: `#274F45`
- Signal: `#9A432F`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates state and structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic batch, deviation-record, quality-desk, and review-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the manufacturing-batch ledger, quality-desk strip, and disposition decision as separate relationship carriers.
- Preserve four batches, six deviation-record assignments, two quality desks, three view controls, one reviewer-note toggle, and one disposition review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, review windows, and `Disposition review pending` state are observations only. They do not prove deviation closure, root cause, sample completeness, sterility approval, batch release, rework authorization, or disposition readiness.
