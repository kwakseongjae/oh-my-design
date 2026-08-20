# Runway lighting return-to-service

## Color
- Canvas: `#EEF1F2`
- Surface: `#FAFCFC`
- Ink: `#182327`
- Muted text: `#879397`
- Border: `#9EA9AD`
- Primary action: `#163A45`
- Signal: `#B44B34`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates operational state and circuit structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic lighting-circuit, test-record, closure-window, and closure-time identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `2px` radius
- Controls: `2px` radius

## Layout and behavior
- Preserve the lighting-circuit register, closure-window strip, and return-to-service decision as separate relationship carriers.
- Preserve four lighting circuits, six test-record assignments, two closure windows, three view controls, one engineering-note toggle, and one return-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, closure times, and `Return review pending` state are observations only. They do not prove electrical isolation clearance, ATC approval, photometric acceptance, cable integrity, weather suitability, NOTAM closure, maintenance sign-off, or operational return.
