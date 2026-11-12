- `compiled/components.yaml` is the `components` block. Paste it under `tokens:` in `front.yaml` as it is and write
  each `use` line. Do not add, drop or re-derive components or their values. If one of this order's rules says a
  compiled component must be prose only, leave it out and name the rule in report.md. If you think a control the
  script left as prose only should be a component, say so in report.md and still leave it out.
- `compiled/proof.md` is the controls table with the raw transition strings. Paste it into the Proof block of
  `verification.md`.
- `compiled/census.md` is a digest of the survey: page facts, fonts, colours by count, custom properties by prefix.
- `compiled/candidates.md` lists every colour, type size and corner radius the capture measured, with where each
  was seen (element counts, the measured control and state, the custom property that declares it). Name the
  `colors`, `typography` and `rounded` tokens from this list, going through it row by row:
  - A colour **seen on the page** gets a token when you can state its role from where it was seen (what it paints,
    which control, which state). An element count alone is not a role: a colour on one or two elements, with no
    measured control and no custom property, is left out unless another file in the evidence shows what it is.
  - A colour that is **declared only** is not a token: nothing in the capture was painted with it. When its custom
    property is in a namespace step 4 found to be the company's own, list it in `body.md` §2 under its own heading
    ("Declared in the site's CSS, not seen painted"), in a table of CSS property and value, and say there that the
    list is not exported as tokens. Leave a declared colour from a framework or third-party namespace out
    altogether. (Batch 9, 2026-11-12: exported as tokens, these gave references of 57 to 100 colour tokens.)
  - Type sizes and radii: a token for each row you can tie to a kind of element or a measured control.
  - A value that is not in the list needs its source named in report.md.
