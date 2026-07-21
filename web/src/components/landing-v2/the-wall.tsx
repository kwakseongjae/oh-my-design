"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { getLogoUrl, getLogoFallbackUrl, isGitHubLogo } from "@/lib/logos";
import { isLight } from "@/lib/core/color";
import { V2, BRAND_COLORS, colorForId } from "./tokens";
import { canonicalBuilderPreviewPath } from "@/lib/builder/preview-path";
import { event } from "@/lib/gtag";

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

/* ──────────────────────────── LOGO ──────────────────────────── */

/**
 * Brand logo — mirrors the builder's RefLogo so the Wall reads identically:
 * logo color adapts to the brand-color background luminance (black glyph on
 * light tiles, white on dark), with a primary → favicon → initial-letter
 * fallback chain. GitHub/favicon logos (and any fallback stage) get a frosted
 * ring so raster marks sit cleanly on the brand color.
 */
function BrandLogo({ id, size = 34 }: { id: string; size?: number }) {
  const color = colorForId(id);
  const lightBg = isLight(color);
  const primary = getLogoUrl(id, lightBg ? "000000" : "ffffff");
  const fallback = getLogoFallbackUrl(id);
  const isGh = isGitHubLogo(id);
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const src = stage === 0 ? primary : stage === 1 ? fallback : null;

  if (!src) {
    return (
      <div
        className="flex items-center justify-center rounded-full font-bold"
        style={{
          width: size,
          height: size,
          fontSize: size * 0.45,
          background: lightBg ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.18)",
          color: lightBg ? "#1e1e1e" : "#ffffff",
        }}
      >
        {id.charAt(0).toUpperCase()}
      </div>
    );
  }

  const ringed = isGh || stage > 0;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setStage((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : 2))}
      className={ringed ? "rounded-full ring-2 ring-white/20 bg-white/10 p-1 object-contain" : "object-contain"}
      style={{ width: size, height: size }}
    />
  );
}

/* ──────────────────────────── WALL ──────────────────────────── */

export function TheWall() {
  // BRAND_COLORS holds every catalog brand — use it as the source of truth
  // (the web design-systems registry is a smaller subset).
  const cards = useMemo(
    () =>
      Object.keys(BRAND_COLORS).sort((a, b) => a.localeCompare(b)),
    []
  );

  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  // Mobile: show a 3-col × 10-row subset, with a "Show more" button to reveal the rest.
  const [expanded, setExpanded] = useState(false);
  const MOBILE_COLLAPSED = 30;

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
            {REFERENCE_COUNT} references.{" "}
            <span style={{ color: V2.primary }}>Quality-graded.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/55">
            Each tile opens an evidence-backed company reference in Builder.
            Unknown fields stay absent instead of being replaced with guesses.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 sm:[grid-template-columns:repeat(auto-fill,minmax(120px,1fr))]">
          {cards.map((id, idx) => (
            <Tile
              key={id}
              id={id}
              index={idx}
              className={!expanded && idx >= MOBILE_COLLAPSED ? "hidden sm:block" : ""}
            />
          ))}
        </div>

        {/* Mobile-only "Show more" — desktop (sm+) always shows the full wall */}
        {!expanded && cards.length > MOBILE_COLLAPSED && (
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              Show more <span className="text-white/40">+{cards.length - MOBILE_COLLAPSED}</span>
            </button>
          </div>
        )}

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
    </section>
  );
}

/* ──────────────────────────── TILE ──────────────────────────── */

function Tile({
  id,
  index,
  className = "",
}: {
  id: string;
  index: number;
  className?: string;
}) {
  const color = colorForId(id);
  const dark = isDarkBrand(color);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, px: 50, py: 50 });
  const [hover, setHover] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  // Flat brand color as the tile background — matches the builder's reference
  // cards (no dark-gradient substitution for near-black brands). Dark tiles
  // get a faint white inset border so they don't vanish into the dark section.
  const tileStyle: CSSProperties = {
    background: color,
    borderColor: dark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.18)",
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
    <Link
      href={canonicalBuilderPreviewPath(id)}
      aria-label={`Open ${id} reference in builder preview`}
      onClick={() => event("wall_reference_open", { reference: id })}
      className={`block rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-white/50 ${className}`}
    >
    <motion.div
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, delay: (index % 14) * 0.025 }}
      className="group relative aspect-[3/2] overflow-hidden rounded-xl border"
      style={tileStyle}
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

      {/* logo */}
      <span
        className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
        style={{ transform: hover ? "scale(1.08)" : "scale(1)" }}
      >
        <BrandLogo id={id} size={34} />
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

      {/* brand id */}
      <span className="absolute inset-x-0 bottom-1.5 px-2 text-[10px] font-mono font-semibold leading-tight text-white/95 drop-shadow">
        {id}
      </span>
    </motion.div>
    </Link>
  );
}
