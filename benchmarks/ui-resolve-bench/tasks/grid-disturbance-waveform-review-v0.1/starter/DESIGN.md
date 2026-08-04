# Grid disturbance waveform review

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
- Atomic substation, waveform-file, station, and capture-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the substation register, relay-terminal strip, and waveform decision as separate relationship carriers.
- Preserve four substations, six waveform-file assignments, two relay terminals, three view controls, one relay-note toggle, and one waveform-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, capture windows, and `Relay review pending` state are observations only. They do not prove relay operation, waveform completeness, fault reconstruction, grid cause, compliance acceptance, maintenance closure, or restoration approval.
