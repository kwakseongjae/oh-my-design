/**
 * NEW / HOT status badge — tinted glassmorphism.
 *
 * Sits over a colored / image / dark backdrop (builder color header,
 * design-systems thumbnail, landing-wall brand tile). Per-kind tinted glass
 * (cool mint for NEW, warm ember for HOT) gives each badge punch while staying
 * frosted; a thin (not heavy) top highlight keeps the glass crisp.
 */

type Kind = "new" | "hot";

const ICON: Record<Kind, React.ReactNode> = {
  new: (
    <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.7 5.4L19 9l-5.3 1.6L12 16l-1.7-5.4L5 9l5.3-1.6L12 2z" />
      <path d="M19 3l.7 2.1L22 6l-2.3.9L19 9l-.7-2.1L16 6l2.3-.9L19 3z" opacity=".9" />
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

const STYLE: Record<Kind, React.CSSProperties> = {
  new: {
    background:
      "linear-gradient(135deg, rgba(45,212,191,0.55), rgba(16,185,129,0.30) 55%, rgba(255,255,255,0.14))",
    border: "1px solid rgba(255,255,255,0.35)",
    boxShadow:
      "inset 0 0.5px 0 rgba(255,255,255,0.30), 0 3px 10px rgba(6,95,70,0.30)",
  },
  hot: {
    background:
      "linear-gradient(135deg, rgba(251,146,60,0.60), rgba(244,63,94,0.40) 60%, rgba(255,255,255,0.12))",
    border: "1px solid rgba(255,255,255,0.35)",
    boxShadow:
      "inset 0 0.5px 0 rgba(255,255,255,0.30), 0 3px 10px rgba(159,18,57,0.30)",
  },
};

export function StatusBadge({ kind, className = "" }: { kind: Kind; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-[3px] text-[9px] font-mono font-bold uppercase tracking-[0.14em] text-white ${className}`}
      style={{
        ...STYLE[kind],
        backdropFilter: "blur(7px) saturate(160%)",
        WebkitBackdropFilter: "blur(7px) saturate(160%)",
        textShadow: "0 1px 2px rgba(0,0,0,0.35)",
      }}
    >
      <span style={{ display: "inline-flex", filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.3))" }}>
        {ICON[kind]}
      </span>
      {kind === "new" ? "NEW" : "HOT"}
    </span>
  );
}
