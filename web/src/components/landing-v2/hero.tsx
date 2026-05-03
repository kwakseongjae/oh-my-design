"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, Check, Copy, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { V2 } from "./tokens";

const INSTALL_CMD = "npx oh-my-design-cli install-skills";

interface BrandSpec {
  id: string;
  name: string;
  color: string;
  lines: string[];
}

const BRANDS_HERO: BrandSpec[] = [
  {
    id: "toss",
    name: "Toss",
    color: "#3182f6",
    lines: [
      "# DESIGN.md",
      "",
      "## Brand: Toss",
      "primary: #3182f6",
      "radius: 8px",
      "weight.heading: 700",
      "",
      "## Voice",
      "솔직하고 다정하게,",
      "금융용어 없이.",
      "",
      "## Forbidden",
      "- Get Started",
      "- Click here",
      "- Submit",
    ],
  },
  {
    id: "stripe",
    name: "Stripe",
    color: "#635bff",
    lines: [
      "# DESIGN.md",
      "",
      "## Brand: Stripe",
      "primary: #635bff",
      "radius: 6px",
      "weight.heading: 600",
      "",
      "## Voice",
      "Clear. Technical.",
      "Confidence-led.",
      "",
      "## Forbidden",
      "- Hassle-free",
      "- World-class",
      "- Game-changing",
    ],
  },
  {
    id: "linear",
    name: "Linear",
    color: "#7e8aff",
    lines: [
      "# DESIGN.md",
      "",
      "## Brand: Linear",
      "primary: #5e6ad2",
      "radius: 6px",
      "weight.heading: 500",
      "",
      "## Voice",
      "Precise. Unhurried.",
      "Builder-to-builder.",
      "",
      "## Forbidden",
      "- Sync error!",
      "- Oh no…",
      "(no exclamations)",
    ],
  },
  {
    id: "anthropic",
    name: "Anthropic",
    color: "#cc785c",
    lines: [
      "# DESIGN.md",
      "",
      "## Brand: Anthropic",
      "primary: #cc785c",
      "radius: 10px",
      "weight.heading: 500",
      "",
      "## Voice",
      "Warm, literary,",
      "human-first.",
      "",
      "## Forbidden",
      "- Click here",
      "- Don't miss out",
      "- Limited time",
    ],
  },
];

const AUTO_CYCLE_MS = 3000;

export function HeroV2() {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "60vh",
        background:
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(85,70,255,0.12), transparent 60%), #0a0a0f",
        color: V2.textOnDark,
      }}
    >
      {/* dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 80%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
            style={{
              borderColor: V2.borderDark,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: V2.accent }}
            />
            DESIGN.md · brand DNA for AI agents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight"
          >
            Stop generating
            <br />
            <span
              className="inline-block pb-1"
              style={{
                backgroundImage: `linear-gradient(135deg, ${V2.primary} 0%, ${V2.primaryGlow} 55%, #c4b9ff 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              modern minimalist.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
          >
            One <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">DESIGN.md</code>{" "}
            spec. 67 real brands extracted. Your AI agent (Claude Code, Codex,
            OpenCode, Cursor) ships UI that actually looks like Stripe, Toss,
            Linear — not slop. Free, MIT, zero AI calls during install.
          </motion.p>

          {/* install snippet */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-7 flex max-w-md items-center gap-2 rounded-xl border bg-black/40 px-3 py-2.5 font-mono text-sm backdrop-blur"
            style={{ borderColor: V2.borderDark }}
          >
            <span className="select-none" style={{ color: V2.accent }}>$</span>
            <code className="flex-1 truncate text-white/85">{INSTALL_CMD}</code>
            <button
              type="button"
              onClick={onCopy}
              aria-label={copied ? "Copied" : "Copy install command"}
              className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/55 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2"
              style={{
                // @ts-expect-error css var
                "--tw-ring-color": V2.accent,
              }}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" style={{ color: V2.accent }} />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/builder"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
              style={{
                background: V2.primary,
                color: "#fff",
                // @ts-expect-error css var
                "--tw-ring-color": V2.accent,
              }}
            >
              Browse the builder
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://github.com/kwakseongjae/oh-my-design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/5"
              style={{ borderColor: V2.borderDark }}
            >
              <Star className="h-4 w-4" />
              Star on GitHub
            </a>
          </motion.div>
        </div>

        {/* Right — interactive multi-brand DESIGN.md panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <DesignMdPanel />
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────── INTERACTIVE DESIGN.md PANEL ────────────────────── */

function DesignMdPanel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const brand = BRANDS_HERO[active];

  // Auto-cycle through brands; pauses on hover or when user clicks a tab.
  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % BRANDS_HERO.length);
    }, AUTO_CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="mx-auto w-full"
      style={{ maxWidth: 540 }}
    >
      <div
        className="relative overflow-hidden rounded-2xl border shadow-2xl transition-shadow duration-700"
        style={{
          borderColor: V2.borderDark,
          background: "#0f0f17",
          boxShadow: `0 36px 90px -28px ${brand.color}55, 0 0 0 1px rgba(255,255,255,0.06)`,
        }}
      >
        {/* HEADER: mac dots + brand tabs + file path */}
        <div
          className="flex flex-wrap items-center gap-2 px-3.5 py-2.5"
          style={{ borderBottom: `1px solid ${V2.borderDark}` }}
        >
          <div className="flex gap-1.5">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>

          <div role="tablist" aria-label="Brand presets" className="ml-2 flex gap-1">
            {BRANDS_HERO.map((b, i) => {
              const isActive = i === active;
              return (
                <button
                  key={b.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  className="rounded-md px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider transition-all"
                  style={
                    isActive
                      ? {
                          background: b.color + "26",
                          color: b.color,
                          border: `1px solid ${b.color}66`,
                        }
                      : {
                          color: "rgba(255,255,255,0.45)",
                          border: "1px solid transparent",
                        }
                  }
                >
                  {b.name}
                </button>
              );
            })}
          </div>

          <span
            className="ml-auto hidden rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/55 sm:inline-block"
            style={{ minWidth: 0 }}
          >
            references/{brand.id}/DESIGN.md
          </span>
        </div>

        {/* CONTENT: stagger-revealed lines, holds when done */}
        <div
          className="relative font-mono text-[13px] leading-[1.7]"
          style={{ minHeight: 360 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28 }}
              className="px-5 py-5"
            >
              {brand.lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: 0.08 + i * 0.025,
                    ease: "easeOut",
                  }}
                  className="whitespace-pre"
                  style={{
                    color: line.startsWith("##")
                      ? brand.color
                      : line.startsWith("#")
                      ? "rgba(255,255,255,0.96)"
                      : line.includes(":")
                      ? "rgba(255,255,255,0.85)"
                      : "rgba(255,255,255,0.62)",
                    fontWeight: line.startsWith("##") ? 700 : 400,
                  }}
                >
                  {line || " "}
                </motion.div>
              ))}
              {/* persistent end cursor */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="omd-v2-cursor mt-2 inline-block h-[14px] w-[7px] translate-y-[2px]"
                style={{ background: brand.color }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FOOTER: cycle status + dot indicators */}
        <div
          className="flex items-center justify-between px-3.5 py-2 font-mono text-[10px] uppercase tracking-wider text-white/40"
          style={{ borderTop: `1px solid ${V2.borderDark}` }}
        >
          <span className="inline-flex items-center gap-1.5">
            {paused ? (
              <Pause className="h-2.5 w-2.5" />
            ) : (
              <span
                className="block h-1.5 w-1.5 rounded-full"
                style={{ background: brand.color }}
              />
            )}
            {paused ? "paused · hover to keep" : "auto · brand cycle"}
          </span>
          <div className="flex items-center gap-1" aria-hidden>
            {BRANDS_HERO.map((b, i) => (
              <span
                key={b.id}
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 18 : 4,
                  height: 4,
                  background:
                    i === active ? b.color : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .omd-v2-cursor { animation: omd-v2-blink 1s step-end infinite; }
        @keyframes omd-v2-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .omd-v2-cursor { animation: none; }
        }
      ` }} />
    </div>
  );
}
