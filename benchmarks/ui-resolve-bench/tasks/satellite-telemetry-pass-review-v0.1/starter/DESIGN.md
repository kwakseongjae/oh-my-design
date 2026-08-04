# Satellite telemetry pass review

## Color
- Canvas: `#EEF2F4`
- Surface: `#FBFDFE`
- Ink: `#172B36`
- Muted text: `#63747C`
- Border: `#A8B3B8`
- Primary action: `#174A5B`
- Signal: `#B4552D`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates state and structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic orbit-pass, telemetry-packet, station, and review-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the orbit-pass register, ground-station strip, and telemetry-packet decision as separate relationship carriers.
- Preserve four orbit passes, six telemetry-packet assignments, two ground stations, three view controls, one telemetry-note toggle, and one telemetry-packet review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, review windows, and `Telemetry review pending` state are observations only. They do not prove downlink continuity, telemetry-packet completeness, anomaly reconstruction, orbital anomaly cause, command acceptance, recovery closure, or maneuver approval.
