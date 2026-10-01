"use client";

import { useState } from "react";
import s from "./hangul.module.css";

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
      <div className={s.proofTable}>
        <div id={`${id}-stage`} className={s.screen} data-hangul-specimen={id}>
          {fixed ? after : before}
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:items-start">
        <div role="group" aria-label="적용 전후 바꾸기" className={s.seg}>
          {[
            { v: false, label: "스킬 없이" },
            { v: true, label: "규칙 적용" },
          ].map((o) => (
            <button
              key={String(o.v)}
              type="button"
              aria-pressed={fixed === o.v}
              aria-controls={`${id}-stage`}
              onClick={() => setFixed(o.v)}
              className={s.segBtn}
            >
              {o.label}
            </button>
          ))}
        </div>
        <p className={s.body} aria-live="polite">
          <span
            className="font-semibold"
            style={{ color: fixed ? "var(--fg)" : "var(--accent)" }}
          >
            {fixed ? "적용 후 · " : "적용 전 · "}
          </span>
          {fixed ? afterNote : beforeNote}
        </p>
      </div>
    </div>
  );
}
