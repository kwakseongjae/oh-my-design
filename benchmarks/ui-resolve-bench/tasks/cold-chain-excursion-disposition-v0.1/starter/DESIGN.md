# Cold-chain excursion disposition

## Color
- Canvas: `#F0EFEA`
- Surface: `#FBFAF7`
- Ink: `#202723`
- Muted text: `#8B918C`
- Border: `#A5AAA4`
- Primary action: `#263F38`
- Alert: `#A84B32`

Use Ink for normal text when Muted text does not meet contrast. Alert communicates operational state and excursion state; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic shipment-lot, sensor-record, custody-window, and custody-time identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `2px` radius
- Controls: `2px` radius

## Layout and behavior
- Preserve the shipment-lot register, custody-window strip, and excursion decision as separate relationship carriers.
- Preserve four shipment lots, six sensor-record assignments, two custody windows, three view controls, one assessor-note toggle, and one disposition-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, custody times, and `Disposition review pending` state are observations only. They do not prove quality release, custody verification, excursion acceptance, sensor calibration, carrier notification, CAPA closure, inventory release, or disposition approval.
