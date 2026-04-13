"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ArrowRight, Download, Zap, Moon, Sun, Layers } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Playfair_Display } from "next/font/google";
import { getLogoUrl, isGitHubLogo } from "@/lib/logos";
import { isLight } from "@/lib/core/color";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

// ── Logo data ────────────────────────────────────────────────────

const FEATURED_BRANDS = [
  { id: "stripe", name: "Stripe", color: "#533afd" },
  { id: "vercel", name: "Vercel", color: "#000000" },
  { id: "notion", name: "Notion", color: "#000000" },
  { id: "linear.app", name: "Linear", color: "#5e6ad2" },
  { id: "figma", name: "Figma", color: "#a259ff" },
  { id: "apple", name: "Apple", color: "#000000" },
  { id: "spotify", name: "Spotify", color: "#1ed760" },
  { id: "supabase", name: "Supabase", color: "#3ecf8e" },
  { id: "tesla", name: "Tesla", color: "#e31937" },
  { id: "airbnb", name: "Airbnb", color: "#ff385c" },
  { id: "coinbase", name: "Coinbase", color: "#0052ff" },
  { id: "framer", name: "Framer", color: "#0055ff" },
  { id: "sentry", name: "Sentry", color: "#362d59" },
  { id: "mongodb", name: "MongoDB", color: "#47a248" },
  { id: "uber", name: "Uber", color: "#000000" },
  { id: "nvidia", name: "NVIDIA", color: "#76b900" },
  { id: "pinterest", name: "Pinterest", color: "#e60023" },
  { id: "cursor", name: "Cursor", color: "#000000" },
  { id: "raycast", name: "Raycast", color: "#ff6363" },
  { id: "webflow", name: "Webflow", color: "#4353ff" },
];

// ── Animated word component ──────────────────────────────────────

function AnimWord({ children, delay }: { children: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

// ── Logo card for marquee ────────────────────────────────────────

function LogoCard({ brand }: { brand: (typeof FEATURED_BRANDS)[number] }) {
  const lightLogo = getLogoUrl(brand.id, "999999");
  const darkLogo = getLogoUrl(brand.id, "666666");
  const github = isGitHubLogo(brand.id);

  return (
    <div className="mx-6 flex items-center gap-2.5 group transition-opacity duration-300 opacity-40 hover:opacity-100 sm:mx-8">
      {github ? (
        <img src={lightLogo!} alt={brand.name} className="h-6 w-6 rounded-full object-contain grayscale group-hover:grayscale-0 transition-all" loading="lazy" />
      ) : (
        <>
          <img src={lightLogo!} alt={brand.name} className="h-5 w-5 object-contain hidden dark:block transition-all group-hover:scale-110" loading="lazy" />
          <img src={darkLogo!} alt={brand.name} className="h-5 w-5 object-contain block dark:hidden transition-all group-hover:scale-110" loading="lazy" />
        </>
      )}
      <span className="text-sm font-medium whitespace-nowrap">{brand.name}</span>
    </div>
  );
}

// ── Main Landing ─────────────────────────────────────────────────

export default function Landing() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,80,255,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,80,255,0.08),transparent)]" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl dark:border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/">
            <img src="/logo.png" alt="oh-my-design" className="h-8 block dark:hidden" />
            <img src="/logo-white.png" alt="oh-my-design" className="h-8 hidden dark:block" />
          </Link>
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/50 transition-colors hover:bg-accent dark:border-border dark:bg-card/60"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start Building <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, willChange: "transform, opacity" }}
        className="mx-auto max-w-6xl px-6 pt-28 pb-16"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur dark:border-border dark:bg-card/60"
          >
            <Zap className="h-3.5 w-3.5 text-yellow-500" />
            58 companies &middot; zero AI calls &middot; 100% free
          </motion.div>

          {/* Headline with calligraphy accent */}
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            <AnimWord delay={0.1}>Design</AnimWord>{" "}
            <AnimWord delay={0.18}>systems</AnimWord>{" "}
            <AnimWord delay={0.26}>from</AnimWord>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${playfair.className} italic bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent`}
            >
              the world&apos;s best
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed text-center"
          >
            <p>Start from a design system built by top companies.</p>
            <p>Customize colors, typography, and every token.</p>
            <p>Export <span className="font-semibold text-foreground">DESIGN.md</span> + <span className="font-semibold text-foreground">shadcn/ui CSS</span>.</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Link
              href="/builder"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            >
              Open Builder
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://github.com/oh-my-design/oh-my-design"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-8 py-3.5 text-base font-medium backdrop-blur transition-colors hover:bg-accent dark:border-border dark:bg-card/60"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Logo Marquee — Row 1 (left to right) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="py-8 overflow-hidden"
      >
        <Marquee speed={30} gradient={false} pauseOnHover autoFill>
          {FEATURED_BRANDS.slice(0, 10).map((brand) => (
            <LogoCard key={brand.id} brand={brand} />
          ))}
        </Marquee>
        <div className="h-6" />
        <Marquee speed={20} gradient={false} direction="right" pauseOnHover autoFill>
          {FEATURED_BRANDS.slice(10).map((brand) => (
            <LogoCard key={brand.id} brand={brand} />
          ))}
        </Marquee>
      </motion.section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps to{" "}
            <span className={`${playfair.className} italic text-primary`}>your</span>{" "}
            design system
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Pick a reference",
              desc: "Choose from 58 real company design systems — Stripe, Vercel, Notion, Linear, and more.",
              icon: Layers,
            },
            {
              step: "02",
              title: "Make it yours",
              desc: "Walk through A/B choices for buttons, tables, cards. Fine-tune colors, fonts, and radius.",
              icon: Zap,
            },
            {
              step: "03",
              title: "Export everything",
              desc: "Download DESIGN.md, copy shadcn/ui CSS variables, or grab JSON tokens. Paste and ship.",
              icon: Download,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/30 p-8 backdrop-blur transition-all hover:bg-card/60 dark:border-border dark:bg-card/60"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className={`text-4xl font-bold text-primary/20 ${playfair.className} italic`}>{item.step}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl border border-border/40 bg-card/20 py-20 px-8 backdrop-blur dark:border-border dark:bg-card/40"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to{" "}
            <span className={`${playfair.className} italic text-primary`}>design</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            No signup. No API key. No cost. Just pick, customize, and export.
          </p>
          <Link
            href="/builder"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Open Builder
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 dark:border-border py-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
        <img src="/logo.png" alt="OMD" className="h-5 opacity-60 block dark:hidden" />
        <img src="/logo-white.png" alt="OMD" className="h-5 opacity-60 hidden dark:block" />
        <span>oh-my-design &middot; Open source &middot; Built with Next.js + shadcn/ui</span>
      </footer>
    </div>
  );
}
