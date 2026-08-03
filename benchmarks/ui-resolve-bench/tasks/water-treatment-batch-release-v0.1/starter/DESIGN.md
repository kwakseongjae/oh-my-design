# Drinking-water treatment batch release

## Color

- Canvas: `#EEF3F3`
- Surface: `#FAFCFC`
- Ink: `#14262D`
- Muted text: `#6D7D7E`
- Border: `#9EADAE`
- Primary action: `#164C5D`
- Signal: `#B65B3F`

Use Ink for normal text when Muted text does not meet contrast on the actual surface. Signal communicates state and structure; it does not replace readable text.

## Typography

- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic batch, laboratory-sample, treatment-train, and run-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry

- Cards: `2px` radius
- Controls: `2px` radius

## Layout and behavior

- Preserve the batch register, treatment-train strip, and release decision as three separate relationship carriers.
- Preserve five treatment batches, seven laboratory-sample assignments, three treatment trains, three view controls, one operator-note toggle, and one release-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary

The supplied identifiers, assignments, run windows, and `Water quality review pending` state are observations only. They do not prove source-water certification, treatment completion, contaminant clearance, laboratory interpretation, regulatory approval, public-health assurance, or distribution release publication.
