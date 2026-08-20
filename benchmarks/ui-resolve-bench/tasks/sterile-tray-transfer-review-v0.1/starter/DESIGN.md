# Sterile-tray transfer review

## Color

- Canvas: `#F2F0EC`
- Surface: `#FFFEFA`
- Ink: `#252321`
- Muted text: `#766E66`
- Border: `#AAA198`
- Primary action: `#3B4C67`
- Signal: `#9A493E`

Use Ink for normal text when Muted text does not meet contrast on the actual surface. Signal communicates state and structure; it does not replace readable text.

## Typography

- Body: Tahoma, sans-serif
- Display: Palatino Linotype, serif
- Atomic tray, chemical-indicator, sterilizer, and cycle-window identifiers remain intact. Do not abbreviate or break inside an identifier.

## Geometry

- Cards: `2px` radius
- Controls: `2px` radius

## Layout and behavior

- Preserve the tray register, sterilizer-cycle strip, and transfer decision as three separate relationship carriers.
- Preserve six trays, eight chemical-indicator assignments, four cycle windows, three view controls, one processing-note toggle, and one review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary

The supplied identifiers, assignments, windows, and `Processing review open` state are observations only. They do not prove sterility, exposure clearance, biological-indicator passage, approval, operating-room acceptance, cycle completion, load release, or transfer-chain closure.
