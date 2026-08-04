# Spent-fuel cask transfer review

## Color
- Canvas: `#F1F0EB`
- Surface: `#FFFDF8`
- Ink: `#242A2D`
- Muted text: `#767A78`
- Border: `#B9B7AE`
- Primary action: `#334F5C`
- Signal: `#98512E`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates state and structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic cask, surveillance-packet, handling-station, and transfer-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the cask register, handling-station strip, and transfer decision as separate relationship carriers.
- Preserve four casks, six surveillance assignments, two handling stations, three view controls, one inspector-note toggle, and one transfer review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, transfer windows, and `Transfer review pending` state are observations only. They do not prove seal integrity, radiation clearance, crane availability, route clearance, regulator authorization, transfer approval, or movement readiness.
