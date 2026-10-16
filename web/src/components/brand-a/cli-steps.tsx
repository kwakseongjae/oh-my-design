"use client";

import { useState, type ReactNode } from "react";

/**
 * Round 10 CLI section: three steps (install → check → apply) beside the real transcript on its
 * dark field. Choosing a step marks it (the active step is the section's one violet state) and
 * brings its part of the transcript forward. Titles and panes are server-rendered; this island
 * only owns which step is active. Step 1 holds the page's one copy command.
 */
export function CliSteps({ steps, term, label, termLabel }: { steps: { title: string; body: ReactNode }[]; term: ReactNode[]; label: string; termLabel: string }) {
  const [on, setOn] = useState(0);
  return (
    <div className="sq-cli-grid">
      <ol className="sq-steps" aria-label={label}>
        {steps.map((s, i) => (
          <li key={i} className={`sq-step${on === i ? " sq-on" : ""}`}>
            <button type="button" className="sq-step-t" aria-pressed={on === i} onClick={() => setOn(i)}>
              {s.title}
            </button>
            <div className="sq-step-b">{s.body}</div>
          </li>
        ))}
      </ol>
      <div className="sq-term-runs" role="region" aria-label={termLabel}>
        {term.map((node, i) => (
          <div key={i} className={`sq-term-run${on === i ? " sq-on" : ""}`}>
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
