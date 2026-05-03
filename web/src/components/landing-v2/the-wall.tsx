"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { getLogoUrl, getLogoFallbackUrl } from "@/lib/logos";
import { V2, BRAND_COLORS, colorForId } from "./tokens";

/* ──────────────────────────── DATA ──────────────────────────── */

const EXCERPTS: Record<string, string[]> = {
  stripe: [
    "## §02 Tokens",
    "primary: #635bff   radius: 8px   weight: 600",
    "## §10 Voice",
    "Clear, technical, confidence-led. Never marketing-y.",
  ],
  toss: [
    "## §02 Tokens",
    "primary: #3182f6   radius: 12px",
    "## §10 Voice",
    "솔직하고 다정하게, 금융용어 없이.",
    "## §13 Forbidden",
    "Get Started · Click here · Submit",
  ],
  "linear.app": [
    "## §02 Tokens",
    "primary: #5e6ad2   radius: 6px",
    "## §10 Voice",
    "Precise. Unhurried. Builder-to-builder.",
  ],
};

/* ──────────────────────────── COLOR HELPERS ──────────────────────────── */

const NEAR_BLACK = new Set([
  "#000000",
  "#0a0a0f",
  "#0d0e10",
  "#0f0f17",
  "#08090a",
]);

function luminance(hex: string): number | null {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) return null;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function isDarkBrand(c: string) {
  if (NEAR_BLACK.has(c.toLowerCase())) return true;
  const l = luminance(c);
  return l !== null && l < 28;
}

/** Pick a text color that stays readable against the brand bg. */
function readableOn(hex: string): string {
  const l = luminance(hex);
  if (l === null) return "#ffffff";
  return l > 150 ? "#0a0a0f" : "#ffffff";
}

/* ──────────────────────────── LOGO ──────────────────────────── */

function BrandLogo({
  id,
  size = 30,
  invert = true,
}: {
  id: string;
  size?: number;
  invert?: boolean;
}) {
  const primary = getLogoUrl(id, invert ? "ffffff" : "000000");
  const fallback = getLogoFallbackUrl(id);
  const [src, setSrc] = useState<string | null>(primary ?? fallback);
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      width={size}
      height={size}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => {
        if (src !== fallback && fallback) setSrc(fallback);
      }}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

/* ──────────────────────────── WALL ──────────────────────────── */

interface OpenState {
  id: string;
  /** Click position in coordinates relative to the section box. */
  origin: { x: number; y: number };
}

export function TheWall() {
  // BRAND_COLORS holds all 67 brands — use it as the source of truth
  // (the web design-systems registry is a smaller subset).
  const cards = useMemo(
    () =>
      Object.keys(BRAND_COLORS).sort((a, b) => a.localeCompare(b)),
    []
  );

  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [open, setOpen] = useState<OpenState | null>(null);

  // First-entry nudge: pick 3 random tiles to pulse briefly so users see
  // they're interactive. Triggers once per page load when section enters
  // viewport. Respects prefers-reduced-motion.
  const [nudgeIdx, setNudgeIdx] = useState<Set<number>>(new Set());
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let fired = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (fired) return;
        if (entries.some((e) => e.isIntersecting && e.intersectionRatio > 0.15)) {
          fired = true;
          // Pick 3 distinct random indices.
          const picks = new Set<number>();
          while (picks.size < 3 && picks.size < cards.length) {
            picks.add(Math.floor(Math.random() * cards.length));
          }
          setNudgeIdx(picks);
          // Stop nudge after 4s.
          window.setTimeout(() => setNudgeIdx(new Set()), 4000);
          io.disconnect();
        }
      },
      { threshold: [0.15, 0.4] }
    );
    io.observe(section);
    return () => io.disconnect();
  }, [cards.length]);

  // Cursor-tracked ADDITIVE spotlight — adds brightness to the cursor area
  // via plus-lighter blending. Outside tiles stay at their resting tone
  // (no global dimming).
  useEffect(() => {
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    if (!section || !overlay) return;

    let lastX = -9999;
    let lastY = -9999;
    let ticking = false;
    let visible = false;

    const apply = () => {
      ticking = false;
      overlay.style.background = `radial-gradient(circle 320px at ${lastX}px ${lastY}px, rgba(255,255,255,0.16) 0%, rgba(168,156,255,0.06) 35%, transparent 70%)`;
      overlay.style.opacity = visible ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      lastX = e.clientX - rect.left;
      lastY = e.clientY - rect.top;
      visible = true;
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(apply);
      }
    };

    const onLeave = () => {
      visible = false;
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(apply);
      }
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      style={{
        background: V2.bgDark,
        color: V2.textOnDark,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 40% at 50% 0%, ${V2.primary}10, transparent 65%)`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <div
            className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: V2.accent }}
          >
            The wall
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {cards.length} systems. All real.{" "}
            <span style={{ color: V2.primary }}>All extracted.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/55">
            Move your cursor across the wall. Click any tile to immerse in that
            brand and read the DESIGN.md excerpt your AI agent uses.
          </p>
        </div>

        <div
          className="grid gap-2.5 sm:gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))" }}
        >
          {cards.map((id, idx) => (
            <Tile
              key={id}
              id={id}
              index={idx}
              nudge={nudgeIdx.has(idx)}
              onOpen={(viewportOrigin) => {
                const rect = sectionRef.current?.getBoundingClientRect();
                if (!rect) return;
                setOpen({
                  id,
                  origin: {
                    x: viewportOrigin.x - rect.left,
                    y: viewportOrigin.y - rect.top,
                  },
                });
              }}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/35">
          Logos belong to their respective companies. Reproduced for
          educational reference only.
        </p>
      </div>

      {/* Cursor-tracked ADDITIVE highlight — plus-lighter blend brightens
          the area near the cursor without dimming the rest. */}
      <div
        ref={overlayRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          mixBlendMode: "plus-lighter",
          opacity: 0,
        }}
      />

      <AnimatePresence>
        {open && (
          <FillPanel
            id={open.id}
            origin={open.origin}
            color={colorForId(open.id)}
            onClose={() => setOpen(null)}
          />
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .omd-v2-nudge {
          animation: omd-v2-nudge 1.4s ease-in-out 3;
        }
        @keyframes omd-v2-nudge {
          0%, 100% {
            transform: translateY(0);
            box-shadow: inset 0 0 0 1px rgba(168,156,255,0.08);
          }
          50% {
            transform: translateY(-6px);
            box-shadow:
              0 14px 32px -12px rgba(168,156,255,0.55),
              0 0 0 1px rgba(168,156,255,0.4);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .omd-v2-nudge { animation: none; }
        }
      ` }} />
    </section>
  );
}

/* ──────────────────────────── TILE ──────────────────────────── */

function Tile({
  id,
  index,
  nudge,
  onOpen,
}: {
  id: string;
  index: number;
  nudge?: boolean;
  onOpen: (origin: { x: number; y: number }) => void;
}) {
  const color = colorForId(id);
  const dark = isDarkBrand(color);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, px: 50, py: 50 });
  const [hover, setHover] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTilt({
      rx: (0.5 - y) * 12,
      ry: (x - 0.5) * 12,
      px: x * 100,
      py: y * 100,
    });
  };
  const onLeave = () => {
    setHover(false);
    setTilt({ rx: 0, ry: 0, px: 50, py: 50 });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOpen({ x: e.clientX, y: e.clientY });
  };

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const r = e.currentTarget.getBoundingClientRect();
      onOpen({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    }
  };

  const background = dark
    ? `linear-gradient(135deg, #16161d 0%, #0f0f15 100%)`
    : color;

  const tileStyle: CSSProperties = {
    background,
    borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.18)",
    transform: `perspective(600px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) ${
      hover ? "translateZ(8px) scale(1.04)" : ""
    }`,
    transition:
      "transform 0.18s ease-out, box-shadow 0.25s ease-out, border-color 0.2s",
    boxShadow: hover
      ? `0 18px 40px -16px ${color}99, 0 0 0 1px ${color}66`
      : dark
      ? "inset 0 0 0 1px rgba(255,255,255,0.04)"
      : "0 1px 2px rgba(0,0,0,0.25)",
  };

  return (
    <motion.button
      type="button"
      aria-label={`${id} — immerse in DESIGN.md`}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      onFocus={() => setHover(true)}
      onBlur={onLeave}
      onClick={handleClick}
      onKeyDown={handleKey}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, delay: (index % 14) * 0.025 }}
      className={`group relative aspect-[3/2] overflow-hidden rounded-xl border outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] ${
        nudge ? "omd-v2-nudge" : ""
      }`}
      style={{
        ...tileStyle,
        // @ts-expect-error css var
        "--tw-ring-color": V2.accent,
      }}
    >
      {/* moving sheen */}
      <span
        aria-hidden
        className="absolute inset-0 transition-opacity duration-200"
        style={{
          background: hover
            ? `radial-gradient(180px 120px at ${tilt.px}% ${tilt.py}%, rgba(255,255,255,0.18), transparent 60%)`
            : "transparent",
        }}
      />

      {/* permanent ↗ affordance — top-right */}
      <span
        aria-hidden
        className="absolute right-2 top-2 transition-all duration-200"
        style={{
          opacity: hover ? 1 : 0.45,
          transform: hover ? "translate(2px, -2px)" : "translate(0, 0)",
          color: "rgba(255,255,255,0.95)",
          filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))",
        }}
      >
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.4} />
      </span>

      {/* logo */}
      <span
        className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
        style={{ transform: hover ? "scale(1.08)" : "scale(1)" }}
      >
        <BrandLogo id={id} size={34} invert />
      </span>

      {/* bottom gradient veil */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* brand id (default) — fades out on hover so Peek label can take over */}
      <span
        className="absolute inset-x-0 bottom-1.5 px-2 text-[10px] font-mono font-semibold leading-tight text-white/95 drop-shadow transition-all duration-200"
        style={{
          opacity: hover ? 0 : 1,
          transform: hover ? "translateY(4px)" : "translateY(0)",
        }}
      >
        {id}
      </span>

      {/* Peek label (hover) — slides up from bottom */}
      <span
        className="absolute inset-x-0 bottom-1.5 flex items-center justify-center gap-1 px-2 text-[10px] font-mono font-bold uppercase tracking-wider leading-tight text-white drop-shadow transition-all duration-200"
        style={{
          opacity: hover ? 1 : 0,
          transform: hover ? "translateY(0)" : "translateY(6px)",
        }}
      >
        Peek <ArrowUpRight className="h-3 w-3" strokeWidth={2.6} />
      </span>
    </motion.button>
  );
}

/* ──────────────────────────── FILL PANEL ──────────────────────────── */

/**
 * Section-bounded radial fill — lives inside the Wall via absolute inset-0.
 * Click anywhere outside the centered content closes it (no need to hunt
 * for the X). ESC also closes. Page-level scroll is left alone.
 */
function FillPanel({
  id,
  origin,
  color,
  onClose,
}: {
  id: string;
  origin: { x: number; y: number };
  color: string;
  onClose: () => void;
}) {
  const text = readableOn(color);
  const muted =
    text === "#0a0a0f" ? "rgba(10,10,15,0.7)" : "rgba(255,255,255,0.75)";
  const subtle =
    text === "#0a0a0f" ? "rgba(10,10,15,0.55)" : "rgba(255,255,255,0.55)";
  const overlay =
    text === "#0a0a0f" ? "rgba(10,10,15,0.06)" : "rgba(255,255,255,0.08)";

  const panelRef = useRef<HTMLDivElement>(null);
  // Diagonal: largest distance from origin to a section corner. Computed
  // after mount using the panel's own rect (matches the section).
  const [diag, setDiag] = useState(1500);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const w = r.width;
    const h = r.height;
    setDiag(
      Math.max(
        Math.hypot(origin.x, origin.y),
        Math.hypot(w - origin.x, origin.y),
        Math.hypot(origin.x, h - origin.y),
        Math.hypot(w - origin.x, h - origin.y)
      )
    );
  }, [origin.x, origin.y]);

  const lines = EXCERPTS[id] ?? [
    "## §02 Tokens",
    `primary: ${color}`,
    "## Excerpt",
    "Full DESIGN.md available on the catalog page.",
  ];

  return (
    <motion.div
      ref={panelRef}
      role="dialog"
      aria-modal="false"
      aria-label={`${id} DESIGN.md preview`}
      className="absolute inset-0 z-[60] cursor-zoom-out"
      style={{ background: color, color: text }}
      initial={{
        clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
      }}
      animate={{
        clipPath: `circle(${diag}px at ${origin.x}px ${origin.y}px)`,
      }}
      exit={{
        clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
      }}
      transition={{
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      }}
      onClick={onClose}
    >
      {/* Sticky viewport-centered region — keeps content (and X) in view
          even as the user scrolls within the section. */}
      <div
        className="sticky top-0 flex w-full items-center justify-center"
        style={{ height: "100vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.985 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.28, duration: 0.4 },
          }}
          exit={{ opacity: 0, y: 0, transition: { duration: 0.12 } }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl rounded-3xl px-7 py-7 cursor-default sm:px-9 sm:py-9"
          style={{
            background: overlay,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: `1px solid ${
              text === "#0a0a0f"
                ? "rgba(10,10,15,0.12)"
                : "rgba(255,255,255,0.16)"
            }`,
            boxShadow:
              text === "#0a0a0f"
                ? "0 30px 80px -30px rgba(10,10,15,0.25)"
                : "0 30px 80px -30px rgba(0,0,0,0.55)",
          }}
        >
          {/* close button — inside content card, always in viewport */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute -top-3 -right-3 inline-flex h-9 w-9 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              background: text,
              color: color,
              // @ts-expect-error css var
              "--tw-ring-color": text,
              "--tw-ring-offset-color": color,
            }}
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>

          {/* brand identity row */}
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
              style={{
                background:
                  text === "#0a0a0f"
                    ? "rgba(10,10,15,0.06)"
                    : "rgba(255,255,255,0.1)",
              }}
            >
              <BrandLogo id={id} size={36} invert={text === "#ffffff"} />
            </div>
            <div className="flex min-w-0 flex-col">
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: subtle }}
              >
                references / {id}
              </span>
              <span className="text-2xl font-bold tracking-tight sm:text-3xl">
                {id
                  .replace(/\.app$|\.ai$/, "")
                  .replace(/^./, (c) => c.toUpperCase())}
              </span>
            </div>
          </div>

          {/* excerpt */}
          <div
            className="mt-6 overflow-hidden rounded-xl border font-mono text-[13px] leading-relaxed"
            style={{
              background:
                text === "#0a0a0f"
                  ? "rgba(10,10,15,0.04)"
                  : "rgba(255,255,255,0.06)",
              borderColor:
                text === "#0a0a0f"
                  ? "rgba(10,10,15,0.1)"
                  : "rgba(255,255,255,0.12)",
            }}
          >
            <div
              className="flex items-center justify-between border-b px-4 py-2.5 text-[10px] uppercase tracking-wider"
              style={{
                borderColor:
                  text === "#0a0a0f"
                    ? "rgba(10,10,15,0.08)"
                    : "rgba(255,255,255,0.08)",
                color: subtle,
              }}
            >
              <span>DESIGN.md excerpt</span>
              <span className="opacity-60">read by your agent</span>
            </div>
            <div className="px-4 py-3">
              {lines.map((l, i) => (
                <div
                  key={i}
                  style={{
                    color: l.startsWith("##") ? text : muted,
                    fontWeight: l.startsWith("##") ? 700 : 400,
                    marginTop: l.startsWith("##") && i > 0 ? "0.7em" : 0,
                  }}
                >
                  {l || " "}
                </div>
              ))}
            </div>
          </div>

          {/* actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Link
                href={`/design-systems/${id}`}
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: text, color: color }}
              >
                See the full DESIGN.md
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-medium uppercase tracking-wider underline underline-offset-4"
                style={{ color: subtle }}
              >
                Esc
              </button>
            </div>
            <div
              className="flex items-center gap-2 text-[11px] font-mono"
              style={{ color: subtle }}
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-sm"
                style={{ background: color, outline: `1px solid ${subtle}` }}
              />
              {color.toUpperCase()}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
