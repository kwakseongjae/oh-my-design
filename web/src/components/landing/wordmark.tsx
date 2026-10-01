/**
 * PROVISIONAL wordmark — "oh-my-design" set in the proof-sheet face beside a
 * printer's registration mark. Placeholder until the owner settles the logo
 * question (script "OMD" redrawn vs. replaced; which name is shown). Plain
 * text + one inline SVG, coloured by currentColor, so it is trivially
 * reversible: swap this component and nothing else changes.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-display text-[19px] font-extrabold leading-none tracking-[-0.03em] ${className}`}>
      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className="shrink-0">
        <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <path d="M10 0v20M0 10h20" stroke="currentColor" strokeWidth="1.25" />
      </svg>
      oh-my-design
    </span>
  );
}
