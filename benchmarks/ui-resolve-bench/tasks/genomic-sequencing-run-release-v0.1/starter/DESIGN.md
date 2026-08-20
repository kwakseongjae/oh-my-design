# Genomic sequencing run release

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
- Atomic library, read-set, lane, and QC-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry

- Cards: `4px` radius
- Controls: `4px` radius

## Layout and behavior

- Preserve the library manifest, instrument-lane strip, and release decision as three separate relationship carriers.
- Preserve five libraries, seven read-set assignments, three instrument lanes, three view controls, one analyst-note toggle, and one release-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary

The supplied identifiers, assignments, QC windows, and `Bioinformatics review pending` state are observations only. They do not prove consent verification, sequencing completion, contamination clearance, clinical validation, variant interpretation, diagnostic approval, or archive publication.
