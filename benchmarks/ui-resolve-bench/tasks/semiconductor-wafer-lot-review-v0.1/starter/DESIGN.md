# Semiconductor wafer-lot review

## Color
- Canvas: `#F2F0EB`
- Surface: `#FFFEFA`
- Ink: `#26232B`
- Muted text: `#78727C`
- Border: `#B5B0A8`
- Primary action: `#3D315B`
- Signal: `#A34F29`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates state and structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic wafer-lot, metrology-packet, station, and inspection-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the wafer-lot register, inspection-station strip, and disposition decision as separate relationship carriers.
- Preserve four wafer lots, six metrology-packet assignments, two inspection stations, three view controls, one process-note toggle, and one disposition review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, inspection windows, and `Disposition review pending` state are observations only. They do not prove yield, defect cause, metrology completeness, recipe approval, lot release, rework authorization, or production readiness.
