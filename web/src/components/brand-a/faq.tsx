"use client";

import { useId, useState, type ReactNode } from "react";

/**
 * Round 11 FAQ (#faq, docs/REDESIGN_R11_PLAN_2026-10-20.md W4): seven questions as one animated
 * accordion (grid-rows 0fr → 1fr, 0.32 s; none with reduced motion). The round 10 categories and
 * question search are gone. Answers arrive as server-rendered nodes (rich.tsx), and closed panels
 * stay in the DOM, so every answer is in the page source whatever is open.
 */
export interface FaqItem {
  q: string;
  answer: ReactNode;
  link?: { label: string; href: string };
}

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="sq-acc">
      {items.map((x, i) => {
        const on = open === i;
        return (
          <div key={i} className={`sq-acc-i${on ? " sq-on" : ""}`}>
            <h3>
              <button type="button" className="sq-acc-b" aria-expanded={on} aria-controls={`${id}-a${i}`} id={`${id}-q${i}`} onClick={() => setOpen(on ? null : i)}>
                <span>{x.q}</span>
                <span className="sq-acc-ic" aria-hidden="true" />
              </button>
            </h3>
            <div className="sq-acc-p" id={`${id}-a${i}`} role="region" aria-labelledby={`${id}-q${i}`} inert={!on}>
              <div>
                <p>{x.answer}</p>
                {x.link ? (
                  <p className="sq-acc-link">
                    <a href={x.link.href} target="_blank" rel="noopener noreferrer">{x.link.label}</a>
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
