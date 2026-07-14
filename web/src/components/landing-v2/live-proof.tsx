"use client";

import { useEffect, useRef, useState, type TouchEvent as RTouchEvent } from "react";
import { useMediaQuery } from "@/lib/use-media-query";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { V2, BRAND_COLORS } from "./tokens";
import { getLogoUrl, getLogoFallbackUrl } from "@/lib/logos";

interface BrandCard {
  id: string;
  name: string;
  primary: string;
  bg: string;
  text: string;
  radius: string;
  fontWeight: number;
  fontFamily: string;
  headline: string;
  body: string;
  buttonLabel: string;
  excerpt: string;
}

const BRANDS: BrandCard[] = [
  {
    id: "stripe",
    name: "Stripe",
    primary: BRAND_COLORS.stripe,
    bg: "#ffffff",
    text: "#0a2540",
    radius: "8px",
    fontWeight: 600,
    fontFamily: "Inter, system-ui, sans-serif",
    headline: "Built for scale",
    body: "Move money for businesses around the world. From day one.",
    buttonLabel: "Start integrating",
    excerpt: "voice: clear, technical, confidence-led",
  },
  {
    id: "toss",
    name: "Toss",
    primary: BRAND_COLORS.toss,
    bg: "#ffffff",
    text: "#191f28",
    radius: "12px",
    fontWeight: 700,
    fontFamily: "Pretendard, system-ui, sans-serif",
    headline: "송금, 더 쉽게",
    body: "복잡한 절차 없이 3초 안에 보내세요.",
    buttonLabel: "지금 시작하기",
    excerpt: "voice: 솔직하고 다정하게, 금융용어 없이",
  },
  {
    id: "linear.app",
    name: "Linear",
    primary: BRAND_COLORS["linear.app"],
    bg: "#0d0e10",
    text: "#f7f8f8",
    radius: "6px",
    fontWeight: 500,
    fontFamily: "Inter, system-ui, sans-serif",
    headline: "Issue tracking, finally fast",
    body: "Built for high-velocity software teams.",
    buttonLabel: "Try Linear",
    excerpt: "voice: precise, unhurried, builder-to-builder",
  },
  {
    id: "notion",
    name: "Notion",
    primary: "#0f172a",
    bg: "#ffffff",
    text: "#191919",
    radius: "4px",
    fontWeight: 500,
    fontFamily: "ui-serif, Georgia, serif",
    headline: "Your wiki, docs & projects. Together.",
    body: "One workspace. Every team.",
    buttonLabel: "Get Notion free",
    excerpt: "voice: warm, literary, your-second-brain",
  },
  {
    id: "vercel",
    name: "Vercel",
    primary: "#000000",
    bg: "#ffffff",
    text: "#000000",
    radius: "999px",
    fontWeight: 500,
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    headline: "Ship. Then iterate.",
    body: "The frontend cloud for builders.",
    buttonLabel: "Deploy",
    excerpt: "voice: minimal, primitive-first, ship-now",
  },
];

export function LiveProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Desktop: pin the section (CSS position:sticky) and scrub the active brand
  // by scroll progress — same behaviour as the previous gsap ScrollTrigger, but
  // on the framer-motion engine the rest of the landing already uses (no second
  // animation library, no separate gsap chunk). The tall outer section provides
  // BRANDS.length*400px of scroll travel; the sticky inner stays pinned across it.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduced || isMobile) return;
    const idx = Math.min(
      BRANDS.length - 1,
      Math.floor(progress * BRANDS.length)
    );
    setActiveIdx(idx);
  });

  // Mobile/reduced: gentle auto-advance through brands; pauses after interaction.
  useEffect(() => {
    if (!isMobile || reduced || paused) return;
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % BRANDS.length), 4000);
    return () => clearInterval(t);
  }, [isMobile, reduced, paused]);

  const pauseAuto = () => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 9000);
  };
  const go = (idx: number) => {
    setActiveIdx(((idx % BRANDS.length) + BRANDS.length) % BRANDS.length);
    pauseAuto();
  };
  const onTouchStart = (e: RTouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: RTouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(activeIdx + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  const active = BRANDS[activeIdx];

  // Mobile / reduced-motion: a tap+swipe brand carousel that keeps the
  // "same prompt → different DESIGN.md" narrative (instead of a static stack).
  if (reduced || isMobile) {
    return (
      <section className="relative py-16 px-4" style={{ background: V2.bgLight }}>
        <Header />

        {/* brand tabs */}
        <div className="mx-auto mt-7 flex max-w-md items-center justify-center gap-1.5 overflow-x-auto pb-1">
          {BRANDS.map((b, i) => (
            <button
              key={b.id}
              onClick={() => go(i)}
              className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors"
              style={
                i === activeIdx
                  ? { background: b.primary, color: "#fff" }
                  : { background: "rgba(10,10,15,0.05)", color: "rgba(10,10,15,0.5)" }
              }
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* prompt context */}
        <div className="mx-auto mt-5 max-w-md text-center text-xs" style={{ color: "rgba(10,10,15,0.5)" }}>
          Prompt <span className="font-mono">&ldquo;build me a hero card&rdquo;</span> · DESIGN.md ={" "}
          <span className="font-mono font-semibold" style={{ color: active.primary }}>{active.name}</span>
        </div>

        {/* swipeable single-card crossfade */}
        <div
          className="relative mx-auto mt-5 h-[340px] w-full max-w-[380px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {BRANDS.map((b, i) => (
            <div
              key={b.id}
              className="absolute inset-0 transition-[opacity,transform] duration-500 ease-out"
              style={{
                opacity: i === activeIdx ? 1 : 0,
                transform: `scale(${i === activeIdx ? 1 : 0.96})`,
                pointerEvents: i === activeIdx ? "auto" : "none",
              }}
            >
              <BrandPricingCard brand={b} />
            </div>
          ))}
        </div>

        {/* progress dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {BRANDS.map((b, i) => (
            <button
              key={b.id}
              onClick={() => go(i)}
              aria-label={b.name}
              className="h-1.5 rounded-full transition-[width,background-color]"
              style={{
                width: i === activeIdx ? 36 : 14,
                background: i === activeIdx ? active.primary : "rgba(10,10,15,0.15)",
              }}
            />
          ))}
        </div>

        {/* DESIGN.md excerpt */}
        <div
          className="mx-auto mt-6 max-w-md rounded-lg border px-4 py-3 text-center font-mono text-xs"
          style={{ borderColor: V2.borderLight, background: "rgba(85,70,255,0.04)", color: "rgba(10,10,15,0.7)" }}
        >
          <span className="opacity-60">DESIGN.md →</span>{" "}
          <span style={{ color: active.primary, fontWeight: 600 }}>{active.name}:</span> {active.excerpt}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      style={{ height: `calc(100vh + ${BRANDS.length * 400}px)`, background: V2.bgLight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto flex h-full max-w-6xl flex-col px-4 sm:px-6 py-16">
        <Header />

        <div className="mt-8 grid flex-1 grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          {/* LEFT — chat-like prompt */}
          <div className="flex flex-col justify-center">
            <div
              className="rounded-2xl border p-5 shadow-sm"
              style={{
                borderColor: V2.borderLight,
                background: "#fff",
              }}
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-black/40">
                Prompt
              </div>
              <div className="mt-2 font-mono text-sm leading-relaxed text-black/80">
                build me a hero card for the landing
              </div>
            </div>
            <div className="mt-4 text-xs text-black/50">
              ↓ DESIGN.md context loaded:{" "}
              <span
                className="font-mono font-semibold"
                style={{ color: active.primary }}
              >
                {active.name}
              </span>
            </div>

            {/* progress dots */}
            <div className="mt-6 flex items-center gap-2">
              {BRANDS.map((b, i) => (
                <span
                  key={b.id}
                  className="h-1.5 rounded-full transition-[width,background-color]"
                  style={{
                    width: i === activeIdx ? 36 : 14,
                    background:
                      i === activeIdx ? active.primary : "rgba(10,10,15,0.15)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — brand-card stack with crossfade */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[360px] w-full max-w-[380px]">
              {BRANDS.map((b, i) => {
                const isActive = i === activeIdx;
                const offset = i - activeIdx;
                return (
                  <div
                    key={b.id}
                    className="absolute inset-0 transition-[opacity,transform] duration-500 ease-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: `translateY(${offset * 24}px) scale(${
                        isActive ? 1 : 0.94
                      })`,
                      pointerEvents: isActive ? "auto" : "none",
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    <BrandPricingCard brand={b} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* caption — DESIGN.md excerpt */}
        <div className="mt-6">
          <div
            className="mx-auto max-w-3xl rounded-lg border px-4 py-3 text-center font-mono text-xs"
            style={{
              borderColor: V2.borderLight,
              background: "rgba(85,70,255,0.04)",
              color: "rgba(10,10,15,0.7)",
            }}
          >
            <span className="opacity-60">DESIGN.md →</span>{" "}
            <span style={{ color: active.primary, fontWeight: 600 }}>
              {active.name}:
            </span>{" "}
            {active.excerpt}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="text-center">
      <div
        className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
        style={{ color: V2.primary }}
      >
        Live proof
      </div>
      <h2
        className="text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: V2.textOnLight }}
      >
        Same prompt. Five brands.{" "}
        <span style={{ color: V2.primary }}>One file</span> decides.
      </h2>
    </div>
  );
}

function BrandLogoChip({
  id,
  invert,
}: {
  id: string;
  invert: boolean;
}) {
  const primary = getLogoUrl(id, invert ? "ffffff" : "000000");
  const fallback = getLogoFallbackUrl(id);
  // id/invert are stable per instance; initialize once and let onError swap.
  const [src, setSrc] = useState<string | null>(primary ?? fallback);
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={18}
      height={18}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (src !== fallback && fallback) setSrc(fallback);
      }}
      style={{ width: 18, height: 18, objectFit: "contain" }}
    />
  );
}

function BrandPricingCard({ brand }: { brand: BrandCard }) {
  // Heuristic: dark cards want white logos, light cards want dark logos.
  const isDarkBg =
    brand.bg === "#000000" || brand.bg === "#0d0e10" || brand.bg.startsWith("#0");
  return (
    <div
      className="h-full w-full overflow-hidden border shadow-lg"
      style={{
        background: brand.bg,
        color: brand.text,
        borderRadius: brand.radius === "999px" ? "16px" : "16px",
        borderColor: V2.borderLight,
        fontFamily: brand.fontFamily,
      }}
    >
      <div className="flex h-full flex-col p-6">
        <div className="flex items-center gap-2">
          <BrandLogoChip id={brand.id} invert={isDarkBg} />
          <div className="text-[11px] uppercase tracking-wider opacity-60">
            {brand.name}
          </div>
        </div>
        <div
          className="mt-5 text-2xl leading-[1.15] tracking-tight"
          style={{
            fontWeight: brand.fontWeight + 100,
            letterSpacing: brand.fontWeight >= 600 ? "-0.01em" : 0,
          }}
        >
          {brand.headline}
        </div>
        <div
          className="mt-3 text-sm leading-relaxed opacity-75"
          style={{ fontWeight: brand.fontWeight - 100 }}
        >
          {brand.body}
        </div>
        <button
          className="mt-auto px-5 py-3 text-sm transition-opacity hover:opacity-90"
          style={{
            background: brand.primary,
            color: "#fff",
            borderRadius: brand.radius,
            fontWeight: brand.fontWeight,
            fontFamily: brand.fontFamily,
          }}
        >
          {brand.buttonLabel}
        </button>
      </div>
    </div>
  );
}
