# Rail signal speed-restriction release

## Color
- Canvas: `#F0EFEA`
- Surface: `#FBFAF7`
- Ink: `#202723`
- Muted text: `#8B918C`
- Border: `#A5AAA4`
- Primary action: `#263F38`
- Signal: `#A84B32`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates operational state and signal structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic signal-asset, inspection-record, possession-window, and possession-time identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `2px` radius
- Controls: `2px` radius

## Layout and behavior
- Preserve the signal-asset register, possession-window strip, and speed-restriction decision as separate relationship carriers.
- Preserve four signal assets, six inspection-record assignments, two possession windows, three view controls, one controller-note toggle, and one release-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, possession times, and `Release review pending` state are observations only. They do not prove route-control clearance, possession surrender, interlocking acceptance, track-circuit integrity, driver briefing, timetable publication, engineering sign-off, or restriction release.
