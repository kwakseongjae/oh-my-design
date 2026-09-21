/**
 * NEW / HOT / STATES status badge — tinted glassmorphism.
 *
 * Sits over a colored / image / dark backdrop (builder color header,
 * design-systems thumbnail, landing-wall brand tile). Per-kind tinted glass
 * (cool mint for NEW, warm ember for HOT, cool indigo for STATES) gives each
 * badge punch while staying frosted; a thin (not heavy) top highlight keeps the
 * glass crisp.
 *
 * STATES is deliberately labelled for what it measures rather than as a verdict:
 * "DEEP" next to HOT would imply the unbadged 95% are shallow, when most simply
 * have not had their component states observed yet.
 *
 * Every kind composites its gradient over a SOLID dark base rather than over the
 * tile behind it. Without one the badge inherits the brand colour it sits on, and
 * measured on the live builder grid three of six badges were already failing —
 * HOT 2.22:1 over Baemin's teal, HOT 2.47:1 over Karrot's orange, NEW 2.93:1 over
 * Serendie's blue. With the base every badge reads >= 4.5:1 on every tile, which
 * is what 9px uppercase text needs, and the glass look is unchanged.
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

const STYLE: Record<Kind, React.CSSProperties> = {
  new: {
    // Solid base for the same reason as `states` below — measured on the live
    // grid, NEW read 2.93:1 on Serendie's blue tile. The mint stop is light
    // enough that even a near-black base capped at 4.35, so its alpha drops
    // 0.55 -> 0.50 to clear AA at 4.58:1.
    background:
      "linear-gradient(135deg, rgba(45,212,191,0.50), rgba(16,185,129,0.30) 55%, rgba(255,255,255,0.14)), #043326",
    border: "1px solid rgba(255,255,255,0.35)",
    boxShadow:
      "inset 0 0.5px 0 rgba(255,255,255,0.30), 0 3px 10px rgba(6,95,70,0.30)",
  },
  states: {
    // The gradient is translucent, so it composites over whatever tile it sits
    // on — which means a light brand colour washes the badge out. Measured on
    // the live grid: white text hit 2.23:1 over Dabang's white tile and 2.74:1
    // over KakaoBank's yellow, both under 3:1. The solid indigo-900 layer under
    // the gradient makes the badge's ground tile-independent (~6.6:1 everywhere)
    // while keeping the frosted look.
    background:
      "linear-gradient(135deg, rgba(99,102,241,0.58), rgba(56,189,248,0.34) 58%, rgba(255,255,255,0.13)), #312e81",
    border: "1px solid rgba(255,255,255,0.35)",
    boxShadow:
      "inset 0 0.5px 0 rgba(255,255,255,0.30), 0 3px 10px rgba(49,46,129,0.30)",
  },
  hot: {
    // Was the worst of the three: 2.22:1 on Baemin's teal tile, 2.47:1 on
    // Karrot's orange. Solid ember base takes it to 4.60:1 on every tile.
    background:
      "linear-gradient(135deg, rgba(251,146,60,0.60), rgba(244,63,94,0.40) 60%, rgba(255,255,255,0.12)), #4a1105",
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
      {kind === "new" ? "NEW" : kind === "hot" ? "HOT" : "STATES"}
    </span>
  );
}
