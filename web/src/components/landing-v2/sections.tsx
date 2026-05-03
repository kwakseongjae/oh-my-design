"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Bug,
  Heart,
  Lightbulb,
  Mail,
  Sparkles,
  Star,
} from "lucide-react";
import { getLogoUrl, getLogoFallbackUrl } from "@/lib/logos";
import { V2 } from "./tokens";

/* ──────────────────────── shared logo chip ──────────────────────── */

function BrandLogoChip({
  id,
  size = 18,
  invert,
}: {
  id: string;
  size?: number;
  invert: boolean;
}) {
  const primary = getLogoUrl(id, invert ? "ffffff" : "000000");
  const fallback = getLogoFallbackUrl(id);
  const [src, setSrc] = useState<string | null>(primary ?? fallback);
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (src !== fallback && fallback) setSrc(fallback);
      }}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

/* ─────────────────────────── 04 — SIDE BY SIDE ───────────────────────────
 *
 * Four surfaces, four real brands. The WITHOUT side stays as Tailwind-default
 * slop. The WITH side renders in that brand's actual aesthetic (token + voice
 * + typography), so the gap between "generic AI output" and "brand-aware AI
 * output" is visceral.
 */

interface Strip {
  surface: string;
  /** Reasoning behind the brand pick — shown small under the strip. */
  rationale: string;
  flip?: boolean;
  brand: {
    id: string;
    name: string;
    primary: string;
    bg: string;
    text: string;
    radius: string;
    fontFamily: string;
    weight: number;
    voiceLine: string;
    /** Renders the WITHOUT (generic) variant. */
    without: React.ReactNode;
    /** Renders the WITH (brand-aware) variant. */
    with: React.ReactNode;
  };
}

const STRIPS: Strip[] = [
  /* —————————————— TOSS — primary CTA —————————————— */
  {
    surface: "Primary CTA",
    rationale:
      "Toss Voice §10 — 솔직하고 다정하게, 금융용어 없이. Forbidden: 'Get Started'.",
    brand: {
      id: "toss",
      name: "Toss",
      primary: "#3182f6",
      bg: "#ffffff",
      text: "#191f28",
      radius: "12px",
      fontFamily: "Pretendard, system-ui, sans-serif",
      weight: 700,
      voiceLine: "솔직하고 다정하게",
      without: (
        <button
          className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
          disabled
        >
          Get Started →
        </button>
      ),
      with: (
        <button
          className="rounded-xl px-6 py-3.5 text-[15px] font-extrabold text-white shadow-lg"
          style={{
            background: "#3182f6",
            fontFamily: "Pretendard, system-ui, sans-serif",
            boxShadow: "0 12px 28px -10px rgba(49,130,246,0.55)",
          }}
          disabled
        >
          3초만에 시작하기
        </button>
      ),
    },
  },
  /* —————————————— ANTHROPIC — empty state —————————————— */
  {
    surface: "Empty state",
    rationale:
      "Anthropic Voice §10 — warm, human, literary. Empty isn't empty — it's a doorway.",
    brand: {
      id: "claude",
      name: "Anthropic",
      primary: "#cc785c",
      bg: "#f5f1ea",
      text: "#2c1810",
      radius: "10px",
      fontFamily: "ui-serif, Georgia, 'Times New Roman', serif",
      weight: 500,
      voiceLine: "warm, literary, human-first",
      without: (
        <div className="rounded-md border border-gray-300 bg-gray-50 px-5 py-4 text-center text-sm text-gray-500">
          No data available.
        </div>
      ),
      with: (
        <div
          className="rounded-[10px] border px-6 py-5"
          style={{
            background: "#f5f1ea",
            borderColor: "rgba(204,120,92,0.25)",
            color: "#2c1810",
            fontFamily: "ui-serif, Georgia, serif",
          }}
        >
          <div className="text-base font-medium">
            Nothing here yet — and that&apos;s a good place to begin.
          </div>
          <div className="mt-1.5 text-[13px] opacity-70">
            Tell Claude what you want this page to feel like.
          </div>
        </div>
      ),
    },
  },
  /* —————————————— LINEAR — error toast —————————————— */
  {
    surface: "Error toast",
    rationale:
      "Linear Voice §10 — precise, no panic, builder-to-builder. Mono numerals, no exclamation marks.",
    brand: {
      id: "linear.app",
      name: "Linear",
      primary: "#5e6ad2",
      bg: "#0d0e10",
      text: "#f7f8f8",
      radius: "8px",
      fontFamily:
        "'Inter Display', Inter, system-ui, sans-serif",
      weight: 500,
      voiceLine: "precise, unhurried",
      without: (
        <div className="rounded-md border border-red-300 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
          Error 500: Internal Server Error
        </div>
      ),
      with: (
        <div
          className="flex items-center gap-3 rounded-lg border px-4 py-3 text-sm"
          style={{
            background: "#0d0e10",
            color: "#f7f8f8",
            borderColor: "rgba(94,106,210,0.4)",
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 500,
            boxShadow: "0 12px 28px -10px rgba(94,106,210,0.45)",
          }}
        >
          <span
            className="block h-2 w-2 rounded-full"
            style={{ background: "#5e6ad2" }}
          />
          <span className="opacity-90">
            Sync paused — we&apos;ll retry in 4 seconds.
          </span>
          <span
            className="ml-auto rounded border px-2 py-0.5 text-[11px] font-mono"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            ⌘.
          </span>
        </div>
      ),
    },
  },
  /* —————————————— VERCEL — login form —————————————— */
  {
    surface: "Auth form",
    rationale:
      "Vercel Voice §10 — minimal, primitive-first. Text size shrinks. Buttons are pills.",
    brand: {
      id: "vercel",
      name: "Vercel",
      primary: "#000000",
      bg: "#ffffff",
      text: "#000000",
      radius: "999px",
      fontFamily: "var(--font-geist-v2), system-ui, sans-serif",
      weight: 500,
      voiceLine: "ship, then iterate",
      without: (
        <div className="space-y-2">
          <input
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
          />
          <button className="w-full rounded-md bg-gray-900 py-2 text-sm font-semibold text-white">
            Submit
          </button>
        </div>
      ),
      with: (
        <div
          className="rounded-2xl border bg-white p-5"
          style={{
            borderColor: "rgba(0,0,0,0.08)",
            fontFamily: "var(--font-geist-v2), system-ui, sans-serif",
            boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 8px 24px -16px rgba(0,0,0,0.18)",
          }}
        >
          <div className="text-xs font-medium uppercase tracking-wider text-black/55">
            Continue with Vercel
          </div>
          <input
            placeholder="you@work.com"
            className="mt-3 w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
          />
          <button
            className="mt-2.5 w-full rounded-full bg-black py-2.5 text-sm font-semibold text-white transition-transform active:scale-[0.99]"
            style={{ borderRadius: "999px" }}
          >
            Continue with Email →
          </button>
        </div>
      ),
    },
  },
];

export function SideBySide() {
  return (
    <section
      className="py-28 px-4 sm:px-6"
      style={{ background: V2.bgLight, color: V2.textOnLight }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div
            className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: V2.primary }}
          >
            Same prompt · Different brain
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            What an agent ships{" "}
            <span style={{ color: V2.primary }}>without</span> vs{" "}
            <span style={{ color: V2.primary }}>with</span> DESIGN.md
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base opacity-65">
            Same prompt to the same model. The only difference: one read your
            <code className="mx-1 rounded bg-black/[0.05] px-1.5 py-0.5 font-mono text-[12px] text-black/85">DESIGN.md</code>
            first.
          </p>
        </div>

        <div className="space-y-10">
          {STRIPS.map((s, i) => (
            <StripRow key={s.surface} strip={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StripRow({ strip, index }: { strip: Strip; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const flip = strip.flip;
  const { brand } = strip;
  const isDarkBg = brand.bg === "#0d0e10" || brand.bg === "#000000";

  return (
    <div ref={ref} className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
      {/* WITHOUT */}
      <motion.div
        initial={{ opacity: 0, x: flip ? 60 : -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl border p-7"
        style={{
          order: flip ? 3 : 1,
          borderColor: V2.borderLight,
          background: "rgba(0,0,0,0.025)",
        }}
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-black/55">
            Without DESIGN.md
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider opacity-50">
            {strip.surface}
          </span>
        </div>
        <div className="mt-7 mb-2 flex min-h-[120px] items-center justify-center">
          {brand.without}
        </div>
        <p className="mt-5 text-xs text-black/50 leading-relaxed">
          Generic Tailwind defaults · stock voice · zero brand recognition.
        </p>
      </motion.div>

      {/* arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="hidden items-center justify-center self-center lg:flex"
        style={{ order: 2, color: V2.primary }}
      >
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-base font-bold"
          style={{
            borderColor: V2.primary,
            background: "rgba(85,70,255,0.06)",
          }}
        >
          →
        </span>
      </motion.div>

      {/* WITH — full brand immersion */}
      <motion.div
        initial={{ opacity: 0, x: flip ? -60 : 60, scale: 0.97 }}
        animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border p-7"
        style={{
          order: flip ? 1 : 3,
          borderColor: brand.primary + "33",
          background: brand.bg,
          color: brand.text,
          fontFamily: brand.fontFamily,
          boxShadow: `0 22px 60px -28px ${brand.primary}55, 0 0 0 1px ${brand.primary}22`,
        }}
      >
        {/* corner brand glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl"
          style={{ background: brand.primary, opacity: 0.18 }}
        />

        <div className="relative flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
            style={{ background: brand.primary }}
          >
            <BrandLogoChip
              id={brand.id}
              size={12}
              invert={true}
            />
            With · {brand.name}
          </span>
          <span
            className="text-[10px] font-mono uppercase tracking-wider"
            style={{
              color: isDarkBg ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)",
            }}
          >
            {strip.surface}
          </span>
        </div>

        <div
          className="relative mt-7 mb-2 flex min-h-[120px] items-center justify-center"
          style={{ fontWeight: brand.weight }}
        >
          {brand.with}
        </div>

        <div
          className="relative mt-5 flex items-center gap-2 text-xs leading-relaxed"
          style={{
            color: isDarkBg ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.65)",
          }}
        >
          <span className="font-mono uppercase tracking-wider opacity-70">
            voice ·
          </span>
          <span className="italic">{brand.voiceLine}</span>
        </div>
      </motion.div>

      {/* rationale row — full width, ties the strip together */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="lg:col-span-3 -mt-2 text-center text-[11px] font-mono leading-relaxed text-black/40"
      >
        <span style={{ color: V2.primary }}>§{String(index + 1).padStart(2, "0")}</span>{" "}
        {strip.rationale}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────── 06 — CLI STRIP ─────────────────────────── */

export function CliStrip() {
  return (
    <section
      className="py-24 px-4 sm:px-6"
      style={{ background: V2.bgDark, color: V2.textOnDark }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <div
            className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: V2.accent }}
          >
            CLI
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            One install.{" "}
            <span style={{ color: V2.accent }}>
              Claude Code, Codex, OpenCode, Cursor
            </span>{" "}
            all see the same brand.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/55">
            That&apos;s the only command you&apos;ll run. After that, you just
            talk to your agent.
          </p>
          <Link
            href="/docs"
            className="group mt-5 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/85 transition-all hover:bg-white/5 hover:text-white"
            style={{ borderColor: V2.borderDark }}
          >
            Read the docs
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div
          className="overflow-hidden rounded-xl border shadow-2xl"
          style={{
            borderColor: V2.borderDark,
            background: "#0f0f17",
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2.5"
            style={{ borderBottom: `1px solid ${V2.borderDark}` }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11px] text-white/40">
              ~/project
            </span>
          </div>
          <div className="px-6 py-7 font-mono text-sm leading-[1.85]">
            <div>
              <span style={{ color: V2.accent }}>$</span>{" "}
              <span className="omd-v2-typing inline-block overflow-hidden whitespace-nowrap align-bottom">
                npx oh-my-design-cli install-skills
              </span>
              <span
                className="omd-v2-cursor2 ml-0.5 inline-block h-[14px] w-[8px] translate-y-[2px]"
                style={{ background: V2.accent }}
              />
            </div>
            <div className="mt-3 omd-v2-output">
              <div style={{ color: V2.accent }}>
                ✓ Installed 6 skills + 11 sub-agents
              </div>
              <div style={{ color: V2.accent }}>
                ✓ Wrote .claude/skills, .codex/skills, .opencode/agents
              </div>
              <div style={{ color: V2.accent }}>
                ✓ Bundled 67 reference DESIGN.md files
              </div>
              <div style={{ color: V2.accent }}>
                ✓ Hooked CLAUDE.md, AGENTS.md, .cursor/rules
              </div>
              <div className="mt-2 text-white/50">
                Restart your agent. Then just talk: &ldquo;Set up the design
                system for a calm B2B fintech dashboard.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .omd-v2-typing { animation: omd-v2-typing 6.5s steps(36) infinite; width: 0; }
        @keyframes omd-v2-typing {
          0% { width: 0; }
          25%, 75% { width: 36ch; }
          100% { width: 0; }
        }
        .omd-v2-cursor2 { animation: omd-v2-blink2 1s step-end infinite; }
        @keyframes omd-v2-blink2 {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .omd-v2-output { animation: omd-v2-out 6.5s ease-in-out infinite; opacity: 0; }
        @keyframes omd-v2-out {
          0%, 30% { opacity: 0; transform: translateY(4px); }
          45%, 75% { opacity: 1; transform: translateY(0); }
          90%, 100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .omd-v2-typing { width: 36ch; animation: none; }
          .omd-v2-output { opacity: 1; animation: none; }
          .omd-v2-cursor2 { animation: none; }
        }
      ` }} />
    </section>
  );
}

/* ─────────────────────────── 07 — PHILOSOPHY BAND ───────────────────────────
 *
 * Words reveal stagger on scroll-into-view; mouse position drifts the
 * gradient angle so the headline subtly shifts as you read it.
 */

const PHILOSOPHY_LINE_1 = ["Tokens", "get", "you", "halfway."];
const PHILOSOPHY_LINE_2 = ["Voice", "takes", "you", "home."];

export function PhilosophyBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [angle, setAngle] = useState(135);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    let pending = false;
    let lastX = 0.5;
    let lastY = 0.5;
    const apply = () => {
      pending = false;
      // 90 → 180 deg range, anchored on cursor x/y
      setAngle(90 + lastX * 60 + lastY * 30);
    };
    const onMove = (e: MouseEvent) => {
      const r = node.getBoundingClientRect();
      lastX = (e.clientX - r.left) / r.width;
      lastY = (e.clientY - r.top) / r.height;
      if (!pending) {
        pending = true;
        raf = requestAnimationFrame(apply);
      }
    };
    node.addEventListener("mousemove", onMove);
    return () => {
      node.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const gradient = `linear-gradient(${angle}deg, ${V2.primary} 0%, ${V2.primaryGlow} 50%, ${V2.accent} 100%)`;

  return (
    <section
      ref={ref}
      className="relative flex items-center overflow-hidden px-4 sm:px-6"
      style={{
        minHeight: "75vh",
        background: V2.bgLight,
        color: V2.textOnLight,
      }}
    >
      {/* faint background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0a0a0f 1px, transparent 1px), linear-gradient(to bottom, #0a0a0f 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl text-center">
        <h2
          className="font-bold leading-[1.0] tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 7rem)",
          }}
          aria-label="Tokens get you halfway. Voice takes you home."
        >
          <span className="block">
            {PHILOSOPHY_LINE_1.map((w, i) => (
              <Word
                key={i}
                word={w}
                gradient={gradient}
                inView={inView}
                delay={0.04 * i}
                emphasized={w === "halfway."}
              />
            ))}
          </span>
          <span className="block mt-2 sm:mt-4">
            {PHILOSOPHY_LINE_2.map((w, i) => (
              <Word
                key={i}
                word={w}
                gradient={gradient}
                inView={inView}
                delay={0.04 * (i + PHILOSOPHY_LINE_1.length) + 0.15}
                emphasized={w === "home."}
              />
            ))}
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-10 max-w-2xl text-sm sm:text-base opacity-65"
        >
          20 of our 67 references ship with a full brand-philosophy layer —{" "}
          <span className="font-semibold text-foreground" style={{ color: V2.textOnLight }}>
            Voice · Narrative · Principles · Personas · States · Motion
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] opacity-40"
        >
          <span
            className="inline-block h-1 w-8 rounded-full"
            style={{ background: V2.primary }}
          />
          Move your cursor
        </motion.div>
      </div>
    </section>
  );
}

function Word({
  word,
  gradient,
  inView,
  delay,
  emphasized,
}: {
  word: string;
  gradient: string;
  inView: boolean;
  delay: number;
  emphasized: boolean;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 28, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="inline-block whitespace-pre"
      style={
        emphasized
          ? {
              backgroundImage: gradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              transition: "background-image 0.3s linear",
            }
          : {}
      }
    >
      {word}
      {/* trailing space (preserved by whitespace-pre) */}{" "}
    </motion.span>
  );
}

/* ─────────────────────────── 09 — FINAL CTA + FOOTER ─────────────────────────── */

const CONTACT_TILES: {
  label: string;
  desc: string;
  href: string;
  external?: boolean;
  Icon: typeof Bug;
  accent: string;
}[] = [
  {
    label: "Found a bug?",
    desc: "Open a GitHub issue",
    href:
      "https://github.com/kwakseongjae/oh-my-design/issues/new?labels=bug&template=bug_report.md",
    external: true,
    Icon: Bug,
    accent: "#ff6b6b",
  },
  {
    label: "Feature request",
    desc: "Tell us what to build next",
    href:
      "https://github.com/kwakseongjae/oh-my-design/issues/new?labels=enhancement&template=feature_request.md",
    external: true,
    Icon: Lightbulb,
    accent: "#ffb547",
  },
  {
    label: "Request a brand",
    desc: "Want your favorite DS extracted?",
    href:
      "mailto:gkffhdnls13@gmail.com?subject=oh-my-design%20%E2%80%94%20Brand%20request&body=Brand%3A%20%0AWebsite%3A%20%0AWhat%20I%20love%20about%20it%3A%20",
    Icon: Sparkles,
    accent: "#5546ff",
  },
  {
    label: "Special thanks",
    desc: "Say hi · share what you shipped",
    href:
      "mailto:gkffhdnls13@gmail.com?subject=oh-my-design%20%E2%80%94%20Special%20thanks",
    Icon: Heart,
    accent: "#ec4899",
  },
];

export function FinalCtaFooter() {
  return (
    <>
      {/* —————————————— FINAL CTA BAND —————————————— */}
      <section
        className="relative overflow-hidden px-4 py-28 sm:px-6"
        style={{ background: V2.bgDark, color: V2.textOnDark }}
      >
        {/* indigo glow halo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${V2.primary} 50%, transparent 100%)`,
            opacity: 0.6,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${V2.primary}22, transparent 60%)`,
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <div
              className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: V2.accent }}
            >
              <span
                className="inline-block h-1 w-8 rounded-full"
                style={{ background: V2.accent }}
              />
              Open source · MIT · zero AI calls
            </div>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Help shape{" "}
              <span
                className="inline-block"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${V2.primary} 0%, ${V2.primaryGlow} 50%, ${V2.accent} 100%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                oh-my-design.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
              No signup, no API key, no cost — but every brand we add, every
              bug we squash, comes from someone like you reaching out.
            </p>

            {/* primary install CTA */}
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/builder"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: V2.primary,
                  boxShadow: `0 18px 40px -16px ${V2.primary}cc`,
                }}
              >
                Open the Builder
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://github.com/kwakseongjae/oh-my-design"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-base font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                style={{ borderColor: V2.borderDark }}
              >
                <Star
                  className="h-4 w-4"
                  style={{ color: V2.accent }}
                />
                Star on GitHub
              </a>
            </div>

            {/* install snippet */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <div
                className="inline-flex items-center gap-2 rounded-full border bg-black/40 px-4 py-2 font-mono text-xs"
                style={{
                  borderColor: V2.borderDark,
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                <span style={{ color: V2.accent }}>$</span>
                <code>npx oh-my-design-cli install-skills</code>
              </div>
              <Link
                href="/docs"
                className="group inline-flex items-center gap-1.5 text-xs font-medium text-white/55 transition-colors hover:text-white"
              >
                or read the docs
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* contact tiles row */}
          <div className="mt-16">
            <div className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Or reach out directly
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {CONTACT_TILES.map((t) => (
                <ContactTile key={t.label} {...t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* —————————————— FOOTER (v1-style restructured) —————————————— */}
      <footer
        style={{
          background: V2.bgDark,
          color: V2.textOnDark,
          borderTop: `1px solid ${V2.borderDark}`,
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid gap-12 sm:grid-cols-12">
            {/* Brand column */}
            <div className="sm:col-span-5">
              <Link href="/v2" className="inline-flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-white.png"
                  alt="oh-my-design"
                  className="h-7"
                  draggable={false}
                />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
                Design systems from the world&apos;s best. Pick a reference,
                customize, and export
                <code
                  className="mx-1 rounded px-1.5 py-0.5 text-[11px] font-mono"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  DESIGN.md
                </code>
                your AI coding agent (Claude Code, Codex, OpenCode, Cursor) reads as ground truth.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <a
                  href="https://www.npmjs.com/package/oh-my-design-cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  style={{ borderColor: V2.borderDark }}
                >
                  <span className="font-mono text-[10px] font-semibold">npm</span>
                  <span className="text-white/40">·</span>
                  <span>v1.0.0</span>
                </a>
                <a
                  href="https://github.com/kwakseongjae/oh-my-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  style={{ borderColor: V2.borderDark }}
                >
                  <GithubMark className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </div>

            {/* Product column */}
            <div className="sm:col-span-3 sm:col-start-7">
              <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                Product
              </div>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/builder"
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    Builder
                  </Link>
                </li>
                <li>
                  <Link
                    href="/font-playground"
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    Font Playground
                  </Link>
                </li>
                <li>
                  <Link
                    href="/design-systems"
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    Design Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/curation"
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    Personal Curation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources column */}
            <div className="sm:col-span-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                Resources
              </div>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/oh-my-design-cli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    npm package
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kwakseongjae/oh-my-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    GitHub repo
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kwakseongjae/oh-my-design/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kwakseongjae/oh-my-design/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* bottom bar */}
          <div
            className="mt-14 flex flex-col-reverse items-start gap-4 border-t pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: V2.borderDark }}
          >
            <div>
              &copy; {new Date().getFullYear()} oh-my-design · Open source ·{" "}
              <a
                href="https://github.com/kwakseongjae/oh-my-design/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                MIT License
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              67 references · 6 skills · 11 sub-agents · live
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactTile({
  label,
  desc,
  href,
  external,
  Icon,
  accent,
}: {
  label: string;
  desc: string;
  href: string;
  external?: boolean;
  Icon: typeof Bug;
  accent: string;
}) {
  const props = external
    ? {
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};
  return (
    <a
      href={href}
      {...props}
      className="group relative overflow-hidden rounded-2xl border p-5 text-left transition-all hover:-translate-y-0.5"
      style={{
        borderColor: V2.borderDark,
        background: "rgba(255,255,255,0.02)",
      }}
    >
      {/* hover glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle 200px at 50% -20%, ${accent}40, transparent 70%)`,
        }}
      />
      <div className="relative flex items-start justify-between">
        <div
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
          style={{
            background: accent + "22",
            color: accent,
          }}
        >
          <Icon className="h-4 w-4" strokeWidth={2.2} />
        </div>
        <span
          className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider opacity-40 transition-opacity group-hover:opacity-100"
          style={{ color: accent }}
        >
          {external ? "GitHub" : (
            <>
              <Mail className="h-3 w-3" /> Email
            </>
          )}
        </span>
      </div>
      <div className="relative mt-5 text-sm font-semibold text-white">
        {label}
      </div>
      <div className="relative mt-1 text-xs text-white/55">{desc}</div>
      <div
        className="relative mt-4 inline-flex items-center gap-1 text-[11px] font-medium opacity-65 transition-all group-hover:gap-2 group-hover:opacity-100"
        style={{ color: accent }}
      >
        Open
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

/* ─────────────────────────── shared GithubMark ─────────────────────────── */

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.66 5.57.66 11.84c0 5.02 3.25 9.27 7.76 10.77.57.1.78-.25.78-.54 0-.27-.01-1.15-.02-2.09-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.94.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.5-1.44.1-3 0 0 .95-.3 3.11 1.16.9-.25 1.87-.38 2.83-.38s1.93.13 2.83.38c2.16-1.46 3.11-1.16 3.11-1.16.6 1.56.22 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.3-5.19 5.58.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.65.78.54 4.5-1.5 7.75-5.75 7.75-10.77C23.34 5.57 18.27.5 12 .5z" />
    </svg>
  );
}
