# Cave climate-sensor custody review

## Color

- Canvas: `#F2F0E8`
- Surface: `#FFFDF7`
- Ink: `#202A27`
- Muted text: `#6B756F`
- Border: `#A8B0A9`
- Primary action: `#245A4A`
- Signal: `#9A4E32`

Use Ink for normal text when Muted text does not meet contrast on the actual surface. Signal communicates state and structure; it does not replace readable text.

## Typography

- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic probe, data-cartridge, chamber, and collection-window identifiers remain intact. Do not abbreviate or break inside an identifier.

## Geometry

- Cards: `4px` radius
- Controls: `4px` radius

## Layout and behavior

- Preserve the probe register, collection-window strip, and custody decision as three separate relationship carriers.
- Preserve five probes, seven data-cartridge assignments, four collection windows, three view controls, one technician-note toggle, and one review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary

The supplied identifiers, assignments, windows, and `Sensor-data review pending` state are observations only. They do not prove climate stability, data completeness, calibration, clearance, data-cartridge integrity, acceptance, publication, or custody closure.
