# Aircraft flight-recorder download review

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
- Atomic airframe, recorder-segment, station, and acquisition-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the airframe manifest, acquisition-station strip, and download decision as separate relationship carriers.
- Preserve four airframes, six recorder-segment assignments, two acquisition stations, three view controls, one custody-note toggle, and one download-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, acquisition windows, and `Custody review pending` state are observations only. They do not prove custody, completeness, reconstruction, findings, acceptance, admissibility, or publication.
