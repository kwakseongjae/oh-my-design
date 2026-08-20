# Grid battery dispatch release review

## Color

- Canvas: `#EEF2EF`
- Surface: `#FCFFFD`
- Ink: `#1F2926`
- Muted text: `#68736F`
- Border: `#9AA8A2`
- Primary action: `#215947`
- Signal: `#B15B3F`

Use Ink for normal text when Muted text does not meet contrast on the actual surface. Signal communicates state and structure; it does not replace readable text.

## Typography

- Body: Arial, sans-serif
- Display: Palatino, serif
- Atomic battery-rack, inverter-certificate, grid-certificate, grid-unit, and dispatch-window identifiers remain intact. Do not abbreviate or break inside an identifier.

## Geometry

- Cards: `2px` radius
- Controls: `2px` radius

## Layout and behavior

- Preserve the battery register, dispatch-window strip, and energization decision as three separate relationship carriers.
- Preserve six battery racks, eight inverter certificate assignments, four dispatch windows, three view controls, one operator-note toggle, and one review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary

The supplied identifiers, assignments, windows, and `Grid operator review open` state are observations only. They do not prove asset identity verification, dispatch approval, battery energization, energy release, telemetry verification, reserve acceptance, curtailment clearance, or operator notification.
