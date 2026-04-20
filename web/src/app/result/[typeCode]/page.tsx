"use client";

import { use, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Moon, Sun } from "lucide-react";
import {
  DESIGN_TYPES,
  AXES,
  buildTypeAvatarUrl,
  matchReferences,
  type TypeCode,
} from "@/lib/survey/types";
import { getLogoUrl, isGitHubLogo } from "@/lib/logos";
import { event } from "@/lib/gtag";
import { ShareButtons } from "@/components/survey/share-buttons";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["700"],
});

type Params = Promise<{ typeCode: string }>;

export default function SharedResultPage(props: { params: Params }) {
  const { typeCode } = use(props.params);
  const code = typeCode.toUpperCase() as TypeCode;
  const type = DESIGN_TYPES[code];

  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (type) {
      event("shared_view", { type_code: code });
    }
  }, [code, type]);

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!type) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Unknown design type</h1>
          <p className="text-muted-foreground mt-2">Code "{code}" not found</p>
          <Link
            href="/curation"
            className="inline-flex items-center gap-2 mt-6 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Take the curation yourself <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const logoColor = mounted && resolvedTheme === "dark" ? "white" : "black";
  const matches = matchReferences(code);

  const axes = [
    { axis: "temperature", value: code[0] },
    { axis: "density", value: code[1] },
    { axis: "elevation", value: code[2] },
    { axis: "shape", value: code[3] },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="oh-my-design" className="h-6 block dark:hidden" />
            <img src="/logo-white.png" alt="oh-my-design" className="h-6 hidden dark:block" />
          </Link>
          <div className="flex items-center gap-2">
            {process.env.NODE_ENV !== "production" && (
              <Link
                href={`/playground?from=${code}`}
                onClick={() => event("shared_view_playground_click", { type_code: code })}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/50 px-3.5 py-2 text-xs font-medium text-foreground/80 transition-colors hover:bg-accent dark:border-border"
              >
                Customize in Playground
              </Link>
            )}
            <Link
              href="/curation"
              onClick={() => event("shared_view_cta_click", { location: "header", type_code: code })}
              className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Take the quiz
            </Link>
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full border border-border/40 dark:border-white/10 bg-card/50 dark:bg-white/[0.04] transition-colors hover:bg-accent"
            >
              {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>
      </header>

      <div className="max-w-xl mx-auto px-4 py-10 sm:py-14">
        {/* ══════════ SECTION 1 · Friend's result (compact) ══════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-border/60 bg-card/50 dark:border-white/10 dark:bg-white/[0.03] p-5"
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
            Your friend's design type
          </div>
          <div className="flex items-center gap-4">
            <img
              src={buildTypeAvatarUrl(code)}
              alt={type.name}
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="text-xl font-bold sm:text-2xl">{type.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5 font-mono tracking-wider">{code}</div>
              <div className="text-sm text-muted-foreground italic mt-1.5">"{type.tagline}"</div>
            </div>
          </div>
        </motion.section>

        {/* ══════════ SECTION 2 · CTA (conversion hook) ══════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-center py-10 sm:py-14"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-3">
            Now it's your turn
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What's{" "}
            <span className={`${playfair.className} italic bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
              YOUR
            </span>{" "}
            design type?
          </h1>
          <p className="text-sm text-muted-foreground mt-3">
            12 questions · 60 seconds · instantly matched
          </p>

          <Link
            href="/curation"
            onClick={() => event("shared_view_cta_click", { location: "hero", type_code: code })}
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
          >
            Find your type
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.section>

        {/* ══════════ SECTION 3 · Full type details ══════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-border/40 dark:bg-white/[0.06]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              About {type.name}
            </span>
            <div className="h-px flex-1 bg-border/40 dark:bg-white/[0.06]" />
          </div>

          {/* Axis badges */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {axes.map((a) => {
              const ax = AXES[a.axis as keyof typeof AXES];
              if (!ax) return null;
              const isB = a.value === ax.B;
              const label = isB ? ax.labelB : ax.labelA;
              return (
                <span
                  key={a.axis}
                  className="inline-flex items-center gap-1 rounded-full border border-border/60 dark:border-white/10 bg-card dark:bg-white/[0.04] px-2.5 py-0.5 text-xs text-muted-foreground"
                >
                  <span className="font-mono font-bold text-foreground">{a.value}</span>
                  {label}
                </span>
              );
            })}
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground text-center">
            {type.description}
          </p>

          {/* Matching references */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-3 text-center">
              Their best matches
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {matches.primary.map((ref) => {
                const logo = getLogoUrl(ref.id, logoColor);
                const isGh = isGitHubLogo(ref.id);
                return (
                  <div
                    key={ref.id}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-card dark:bg-white/[0.04] dark:border-white/10 p-3"
                  >
                    {logo && (
                      <img
                        src={logo}
                        alt={ref.id}
                        className={`h-8 w-8 flex-shrink-0 object-contain ${isGh ? "rounded-lg" : ""}`}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold capitalize">{ref.id.replace(".app", "")}</div>
                      <div className="text-xs text-muted-foreground">{ref.category}</div>
                    </div>
                    <span className="text-base font-bold text-primary">{ref.score}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Share this result */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className="text-xs text-muted-foreground">Share this type:</span>
            <ShareButtons typeCode={code} typeName={type.name} tagline={type.tagline} />
          </div>
        </motion.section>
      </div>

      {/* Sticky CTA (appears on scroll) */}
      {stickyVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 sm:bottom-6"
        >
          <Link
            href="/curation"
            onClick={() => event("shared_view_cta_click", { location: "sticky", type_code: code })}
            className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/30"
          >
            What's yours?
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
