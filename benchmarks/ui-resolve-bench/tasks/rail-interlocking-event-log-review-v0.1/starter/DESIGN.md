# Rail interlocking event log review

## Color
- Canvas: `#F1F0EC`
- Surface: `#FCFBF8`
- Ink: `#1D2833`
- Muted text: `#747671`
- Border: `#A9AAA6`
- Primary action: `#273E5A`
- Signal: `#A94832`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates state and structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic signal-zone, event-log, station, and review-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the signal-zone register, interlocking-desk strip, and event-log decision as separate relationship carriers.
- Preserve four signal zones, six event-log assignments, two interlocking desks, three view controls, one interlocking-note toggle, and one event-log review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, review windows, and `Interlocking review pending` state are observations only. They do not prove interlocking operation, event-log completeness, fault reconstruction, corridor cause, compliance acceptance, maintenance closure, or restoration approval.
