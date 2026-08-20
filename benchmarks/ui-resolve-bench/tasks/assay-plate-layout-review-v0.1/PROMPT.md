# Task: improve the Fieldnote assay plate layout review

Work only inside this repository. Improve `index.html` into a clear, production-ready assay-plate layout review surface. Read the entire `DESIGN.md` first.

Preserve every supplied well coordinate, sample identifier, and control role, every `data-bench` hook, exactly one plate-map marker, and exactly one context/target/evidence/state/action marker. Preserve these journeys: choose one of three plate formats; toggle edge-well exclusion with correct `aria-pressed`; reject an empty review-set name and focus it; accept `Plate 7 layout review`; retain visible keyboard focus and reduced motion.

At 390×844, 320×720, and 200% zoom preserve exact coordinate/sample pairs and target/evidence/state/action hierarchy without changing spatial well order, injected break opportunities, mid-token fragmentation, short-label wrapping, a single-text scroller, clipping, or horizontal page scroll. The desktop plate map may become ordered row groups on narrow screens, but A01→C04 order and each coordinate/sample pairing must remain explicit. Do not insert `<wbr>`, `<br>`, zero-width spaces, soft hyphens, or generated separators. Do not invent assay, sample, control, calibration, quality, safety, approval, analysis, customer, or release outcomes.

Do not explain a plan. Inspect, implement, exercise the interactions locally, and leave a finished page.
