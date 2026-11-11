- `compiled/components.yaml` is the `components` block. Paste it under `tokens:` in `front.yaml` as it is and write
  each `use` line. Do not add, drop or re-derive components or their values. If one of this order's rules says a
  compiled component must be prose only, leave it out and name the rule in report.md. If you think a control the
  script left as prose only should be a component, say so in report.md and still leave it out.
- `compiled/proof.md` is the controls table with the raw transition strings. Paste it into the Proof block of
  `verification.md`.
- `compiled/census.md` is a digest of the survey: page facts, fonts, colours by count, custom properties by prefix.
- `compiled/candidates.md` lists every colour, type size and corner radius the capture measured, with where each
  was seen (element counts, the measured control and state, the custom property that declares it). Name the
  `colors`, `typography` and `rounded` tokens from this list: go through it row by row and give a token to every
  candidate whose role you can state from where it was seen. Leave a candidate out when you cannot say what it is
  for, when step 4 puts it with a framework or a third party, or when it is only declared and nothing in the
  evidence shows the brand using it. A value that is not in the list needs its source named in report.md.
