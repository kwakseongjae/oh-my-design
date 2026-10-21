"use client";

import { useState, type ReactNode } from "react";

/**
 * A before/after switch for one specimen (v4's idea, rebuilt). Both states are real DOM text set
 * by the CSS the rule changes; the value that changed sits on its own row under the specimen, so
 * spec text never overlaps the specimen (owner v4 review). The stage has a fixed height, so
 * switching never moves the page.
 */
export function SpecimenToggle({
  id,
  before,
  after,
  spec,
  labels,
}: {
  id: string;
  before: ReactNode;
  after: ReactNode;
  spec: { readonly before: string; readonly after: string };
  labels: { readonly label: string; readonly before: string; readonly after: string };
}) {
  const [fixed, setFixed] = useState(false);
  return (
    <div className="hg-tg">
      <div id={`${id}-stage`} className="hg-tg-stage" data-hangul-specimen={fixed ? "after" : "before"}>
        <div className="hg-tg-spec">{fixed ? after : before}</div>
        <p className="hg-tg-val" aria-live="polite">{fixed ? spec.after : spec.before}</p>
      </div>
      <div className="hg-seg" role="group" aria-label={labels.label}>
        {[false, true].map((v) => (
          <button
            key={String(v)}
            type="button"
            className="hg-seg-btn"
            aria-pressed={fixed === v}
            aria-controls={`${id}-stage`}
            onClick={() => setFixed(v)}
          >
            {v ? labels.after : labels.before}
          </button>
        ))}
      </div>
    </div>
  );
}
