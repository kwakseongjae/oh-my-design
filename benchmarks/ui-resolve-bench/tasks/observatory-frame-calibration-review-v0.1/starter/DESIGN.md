# Observatory frame calibration review

## Color
- Canvas: `#F0F1F4`
- Surface: `#FEFEFF`
- Ink: `#20242C`
- Muted text: `#747A86`
- Border: `#AEB4C0`
- Primary action: `#263B68`
- Signal: `#A24832`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates state and structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic frame, calibration-packet, station, and observation-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the observation-frame manifest, telescope-station strip, and archive decision as separate relationship carriers.
- Preserve four frames, six calibration-packet assignments, two telescope stations, three view controls, one observer-note toggle, and one archive review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, observation windows, and `Archive review pending` state are observations only. They do not prove calibration validity, artifact cause, packet completeness, pointing approval, science release, reprocessing authorization, or archive readiness.
