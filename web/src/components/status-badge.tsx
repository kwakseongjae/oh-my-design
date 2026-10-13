/**
 * NEW / HOT / STATES status badge — concept A square chip (styles/brand-a.css `.sq-chip-*`).
 *
 * Since rebrand A the badge sits on paper next to the tier chip on archive cards, no longer over
 * brand-coloured tiles, so the r1 glass gradients (and their solid dark bases) are gone.
 * HOT = ink fill, NEW = gamboge fill behind ink (gamboge is never text), STATES = ink outline.
 * Light and dark come from the --sq-* tokens.
 *
 * STATES is deliberately labelled for what it measures rather than as a verdict:
 * "DEEP" next to HOT would imply the unbadged 95% are shallow, when most simply
 * have not had their component states observed yet.
 */

type Kind = "new" | "hot" | "states";

const ICON: Record<Kind, React.ReactNode> = {
  new: (
    <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.7 5.4L19 9l-5.3 1.6L12 16l-1.7-5.4L5 9l5.3-1.6L12 2z" />
      <path d="M19 3l.7 2.1L22 6l-2.3.9L19 9l-.7-2.1L16 6l2.3-.9L19 3z" opacity=".9" />
    </svg>
  ),
  states: (
    <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <path d="M4 17h3M4 12h3M4 7h3" opacity=".65" />
      <path d="M12 17h8M12 12h8M12 7h8" />
    </svg>
  ),
  hot: (
    <svg viewBox="0 0 20 20" width="11" height="11" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.989 5.989 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
      />
    </svg>
  ),
};

export function StatusBadge({ kind, className = "" }: { kind: Kind; className?: string }) {
  return (
    <span className={`sq-chip sq-chip-${kind} ${className}`}>
      <span style={{ display: "inline-flex" }}>{ICON[kind]}</span>
      {kind === "new" ? "NEW" : kind === "hot" ? "HOT" : "STATES"}
    </span>
  );
}
