# Rail consist handoff review

## Color

- Canvas: `#F1EEE8`
- Surface: `#FFFDFC`
- Ink: `#23201C`
- Muted text: `#756F66`
- Border: `#A8A097`
- Primary action: `#334A5E`
- Signal: `#A34B35`

Use Ink for normal text when Muted text does not meet contrast on the actual surface. Signal is a state and non-text cue, not a substitute for readable body text.

## Typography

- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic wagon, seal, and departure identifiers remain intact. Do not abbreviate or break inside an identifier.

## Geometry

- Cards: `0px` radius
- Controls: `3px` radius

## Layout and behavior

- Preserve the consist register, departure-window strip, and handoff decision as three separate relationship carriers.
- Preserve six wagons, eight seal assignments, four departure windows, three view controls, one inspection-note toggle, and one review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary

The supplied identifiers, assignments, windows, and `Yard review open` state are observations only. They do not prove clearance, validation, release, approval, authorization, or completion.
