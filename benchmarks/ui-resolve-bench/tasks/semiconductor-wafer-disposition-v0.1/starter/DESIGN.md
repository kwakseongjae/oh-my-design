# Semiconductor wafer lot disposition

## Color

- Canvas: `#F2F4F1`
- Surface: `#FBFCFA`
- Ink: `#182329`
- Muted text: `#737C78`
- Border: `#A7AFAB`
- Primary action: `#244B5A`
- Signal: `#A04E3F`

Use Ink for normal text when Muted text does not meet contrast on the actual surface. Signal communicates state and structure; it does not replace readable text.

## Typography

- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic lot, metrology-scan, chamber, and process-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry

- Cards: `4px` radius
- Controls: `4px` radius

## Layout and behavior

- Preserve the lot register, process-chamber strip, and disposition decision as three separate relationship carriers.
- Preserve five wafer lots, seven metrology-scan assignments, three process chambers, three view controls, one engineer-note toggle, and one disposition-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary

The supplied identifiers, assignments, process windows, and `Process engineering review pending` state are observations only. They do not prove wafer provenance verification, process completion, yield-excursion clearance, process qualification, metrology interpretation, material approval, or MES release publication.
