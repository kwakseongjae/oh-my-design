# Radiotherapy plan export review

## Color

- Canvas: `#F1F3F7`
- Surface: `#FFFFFF`
- Ink: `#1E2837`
- Muted text: `#6E7683`
- Border: `#AAB2BF`
- Primary action: `#304E75`
- Signal: `#9B4D67`

Use Ink for normal text when Muted text does not meet contrast on the actual surface. Signal communicates state and structure; it does not replace readable text.

## Typography

- Body: Tahoma, sans-serif
- Display: Georgia, serif
- Atomic treatment-plan, DICOM-bundle, QA-room, and QA-window identifiers remain intact. Do not abbreviate or break inside an identifier.

## Geometry

- Cards: `4px` radius
- Controls: `4px` radius

## Layout and behavior

- Preserve the plan manifest, QA-window strip, and export decision as three separate relationship carriers.
- Preserve five treatment plans, seven DICOM bundle assignments, three QA windows, three view controls, one transfer-note toggle, and one review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary

The supplied identifiers, assignments, windows, and `Physics review pending` state are observations only. They do not prove patient match verification, dosimetrist approval, physics sign-off, treatment authorization, dose delivery, image guidance confirmation, or export completion.
