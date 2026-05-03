"use client";

import { useEffect, useRef, useState } from "react";
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
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const md = window.matchMedia("(max-width: 767px)");
    setIsMobile(md.matches);
    const onMq = () => setReduced(mq.matches);
    const onMd = () => setIsMobile(md.matches);
    mq.addEventListener("change", onMq);
    md.addEventListener("change", onMd);
    return () => {
      mq.removeEventListener("change", onMq);
      md.removeEventListener("change", onMd);
    };
  }, []);

  useEffect(() => {
    if (reduced || isMobile) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const el = sectionRef.current;
      if (!el) return;
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: `+=${BRANDS.length * 400}`,
          pin: true,
          scrub: 0.6,
          onUpdate: (self: { progress: number }) => {
            const idx = Math.min(
              BRANDS.length - 1,
              Math.floor(self.progress * BRANDS.length)
            );
            setActiveIdx(idx);
          },
        });
      }, el);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [reduced, isMobile]);

  // Static / mobile fallback: simple grid
  if (reduced || isMobile) {
    return (
      <section className="relative py-20 px-4 sm:px-6" style={{ background: V2.bgLight }}>
        <Header />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b) => (
            <BrandPricingCard key={b.id} brand={b} />
          ))}
        </div>
        <p
          className="mx-auto mt-8 max-w-2xl text-center text-sm"
          style={{ color: "rgba(10,10,15,0.55)" }}
        >
          Same prompt. Same component. The DESIGN.md decides everything else.
        </p>
      </section>
    );
  }

  const active = BRANDS[activeIdx];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "100vh", background: V2.bgLight }}
    >
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
                  className="h-1.5 rounded-full transition-all"
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
                    className="absolute inset-0 transition-all duration-500 ease-out"
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
