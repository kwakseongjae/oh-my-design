# Task: improve the Cuefold caption timing review

Work only inside this repository. Improve `index.html` into a clear, production-ready caption-cue timing review surface. Read the entire `DESIGN.md` first.

Preserve every supplied cue, speaker, in, out, and source-rate value, every `data-bench` hook, exactly one cue-timeline marker, and exactly one context/target/evidence/state/action marker. Preserve these journeys: choose one of three timebases; toggle dialogue-boundary snapping with correct `aria-pressed`; reject an empty cue-set name and focus it; accept `Episode 04 dialogue cues`; retain visible keyboard focus and reduced motion.

At 390×844, 320×720, and 200% zoom preserve exact cue and speaker identifiers and complete in→out timecode pairs plus target/evidence/state/action hierarchy without injected break opportunities, mid-token fragmentation, short-label wrapping, a single-text scroller, clipping, or horizontal page scroll. The desktop cue timeline may reflow into ordered full-width cue rows on narrow screens. Do not insert `<wbr>`, `<br>`, zero-width spaces, soft hyphens, or generated separators. Do not invent transcript, caption, playback, accessibility, translation, editorial, approval, publishing, customer, or delivery outcomes.

Do not explain a plan. Inspect, implement, exercise the interactions locally, and leave a finished page.
