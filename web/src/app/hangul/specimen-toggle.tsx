"use client";

import { useState } from "react";

/** A before/after switch for one live specimen. Both states are real DOM text;
 *  only the CSS the rule changes differs between them. */
export function SpecimenToggle({
  id,
  before,
  after,
  beforeNote,
  afterNote,
}: {
  id: string;
  before: React.ReactNode;
  after: React.ReactNode;
  beforeNote: React.ReactNode;
  afterNote: React.ReactNode;
}) {
  const [fixed, setFixed] = useState(false);
  return (
    <div>
      <div role="group" aria-label="전·후 전환" className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-muted p-1">
        {[
          { v: false, label: "Before · 스킬 없이" },
          { v: true, label: "After · 규칙 적용" },
        ].map((o) => (
          <button
            key={String(o.v)}
            type="button"
            aria-pressed={fixed === o.v}
            aria-controls={`${id}-stage`}
            onClick={() => setFixed(o.v)}
            className={`min-h-11 rounded-lg px-2 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring motion-safe:transition-colors ${
              fixed === o.v ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
      <div
        id={`${id}-stage`}
        className="mt-3 overflow-hidden rounded-xl border border-border bg-white text-[#191f28]"
        data-hangul-specimen={id}
      >
        {fixed ? after : before}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{fixed ? afterNote : beforeNote}</p>
    </div>
  );
}
