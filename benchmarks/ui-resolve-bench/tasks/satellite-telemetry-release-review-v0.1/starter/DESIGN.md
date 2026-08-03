# Satellite telemetry release review

## Color

- Canvas: `#F3F0E8`
- Surface: `#FCFBF7`
- Ink: `#17251F`
- Muted text: `#747A76`
- Border: `#A9AEA7`
- Primary action: `#2F5D50`
- Signal: `#C66A2B`

Use Ink for normal text when Muted text does not meet contrast on the actual surface. Signal communicates state and structure; it does not replace readable text.

## Typography

- Body: Verdana, sans-serif
- Display: Times New Roman, serif
- Atomic payload, telemetry-archive, ground-station, and pass-window identifiers remain intact. Do not abbreviate or break inside an identifier.

## Geometry

- Cards: `2px` radius
- Controls: `2px` radius

## Layout and behavior

- Preserve the payload manifest, ground-pass strip, and release decision as three separate relationship carriers.
- Preserve four payloads, six telemetry archive assignments, three ground passes, three view controls, one relay-note toggle, and one release-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary

The supplied identifiers, assignments, windows, and `Range coordination open` state are observations only. They do not prove launch clearance, range approval, orbit insertion, payload commissioning, telemetry validation, ground-station acceptance, or archive release.
