"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ArrowRight, Download, Zap, Moon, Sun, Layers, ExternalLink } from "lucide-react";
import { event, initErrorLogging, initScrollDepth } from "@/lib/gtag";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";
import { getLogoUrl, isGitHubLogo } from "@/lib/logos";
import { BrowseModal } from "@/components/browse-modal";
import { getAllDesignSystems } from "@/lib/design-systems";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

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
  { id: "pinkoi", name: "Pinkoi", color: "#f16c5d" },
  { id: "dcard", name: "Dcard", color: "#00324e" },
  { id: "line", name: "LINE", color: "#07b53b" },
  { id: "mercari", name: "Mercari", color: "#ff333f" },
  { id: "freee", name: "freee", color: "#285ac8" },
];

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.66 5.57.66 11.84c0 5.02 3.25 9.27 7.76 10.77.57.1.78-.25.78-.54 0-.27-.01-1.15-.02-2.09-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.94.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.5-1.44.1-3 0 0 .95-.3 3.11 1.16.9-.25 1.87-.38 2.83-.38s1.93.13 2.83.38c2.16-1.46 3.11-1.16 3.11-1.16.6 1.56.22 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.3-5.19 5.58.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.65.78.54 4.5-1.5 7.75-5.75 7.75-10.77C23.34 5.57 18.27.5 12 .5z" />
    </svg>
  );
}

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

export default function Landing() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dsCount = getAllDesignSystems().length;
  useEffect(() => {
    setMounted(true);
    initErrorLogging();
    initScrollDepth();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,80,255,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,80,255,0.08),transparent)]" />
      </div>

      {/* Nav — three-column layout so Browse sits dead-centre */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl safe-top dark:border-border">
        <div className="mx-auto grid h-14 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 px-4 sm:px-6">
          <div className="justify-self-start">
            <Link href="/">
              <img src="/logo.png" alt="oh-my-design" className="h-6 sm:h-8 block dark:hidden" />
              <img src="/logo-white.png" alt="oh-my-design" className="h-6 sm:h-8 hidden dark:block" />
            </Link>
          </div>
          <div className="justify-self-center">
            <BrowseModal />
          </div>
          <div className="flex items-center gap-2 justify-self-end">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border/60 bg-card/50 transition-colors hover:bg-accent dark:border-border dark:bg-card/60"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <Link
              href="/builder"
              onClick={() => event("cta_click", { location: "nav" })}
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-3 sm:px-4 h-9 sm:h-10 text-xs sm:text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <span className="sm:hidden">Build</span>
              <span className="hidden sm:inline">Start Building</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero — all CSS animations, no framer-motion */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 sm:pt-28 pb-12 sm:pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className="animate-fade-up animate-delay-1 mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur dark:border-border dark:bg-card/60">
            <Zap className="h-3.5 w-3.5 text-yellow-500" />
            67 references &middot; 10 with brand philosophy &middot; zero AI calls
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="animate-fade-blur-up animate-delay-1 inline-block">Design</span>{" "}
            <span className="animate-fade-blur-up animate-delay-2 inline-block">systems</span>{" "}
            <span className="animate-fade-blur-up animate-delay-3 inline-block">from</span>
            <br />
            <span className={`animate-fade-blur-up animate-delay-4 inline-block ${playfair.className} italic bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
              the world&apos;s best
            </span>
          </h1>

          {/* Subtext */}
          <div className="animate-fade-up animate-delay-6 mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed text-center">
            <p>Start from a design system built by top companies.</p>
            <p>Customize colors, radius, and dark mode.</p>
            <p>Export <span className="font-semibold text-foreground">DESIGN.md</span>.</p>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up animate-delay-7 mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <Link
                href="/builder"
                onClick={() => event("cta_click", { location: "hero" })}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Open Builder
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://github.com/kwakseongjae/oh-my-design"
                onClick={() => event("outbound_click", { url: "github" })}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-8 py-3.5 text-base font-medium backdrop-blur transition-colors hover:bg-accent dark:border-border dark:bg-card/60"
              >
                GitHub
              </a>
            </div>
            <Link
              href="/curation"
              onClick={() => event("cta_click", { location: "hero_curation" })}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Get a personal curation
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="animate-fade-up animate-delay-8 py-8 overflow-hidden">
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
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps to{" "}
            <span className={`${playfair.className} italic text-primary`}>your</span>{" "}
            design system
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { step: "01", title: "Pick a reference", desc: "Choose from 67 real company design systems -- Stripe, Vercel, Toss, Kakao, Pinkoi, Dcard, LINE, Mercari, freee, and more.", icon: Layers },
            { step: "02", title: "Make it yours", desc: "Walk through A/B choices for buttons, tables, cards. Fine-tune colors, radius, dark mode. Ten picks ship with a full brand philosophy — voice, principles, personas.", icon: Zap },
            { step: "03", title: "Export DESIGN.md", desc: "Download or copy your customized DESIGN.md. Use the CLI command to regenerate anytime.", icon: Download },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/30 p-6 sm:p-8 backdrop-blur transition-all hover:bg-card/60 hover:-translate-y-1 dark:border-border/80 dark:bg-card"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className={`text-4xl font-bold text-primary/20 ${playfair.className} italic`}>{item.step}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="text-center rounded-3xl border border-border/40 bg-card/20 py-20 px-8 backdrop-blur dark:border-border dark:bg-card/40">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to{" "}
            <span className={`${playfair.className} italic text-primary`}>design</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            No signup. No API key. No cost. Just pick, customize, and export.
          </p>
          <Link
            href="/builder"
            onClick={() => event("cta_click", { location: "footer" })}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Open Builder
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 dark:border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-12">
            {/* Brand column */}
            <div className="sm:col-span-5">
              <Link href="/" className="inline-flex items-center gap-2">
                <img src="/logo.png" alt="OMD" className="h-7 block dark:hidden" />
                <img src="/logo-white.png" alt="OMD" className="h-7 hidden dark:block" />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Design systems from the world&apos;s best. Pick a reference, customize, and export
                <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-[11px] font-mono text-foreground/70">DESIGN.md</code>
                your AI coding agent can read.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <a
                  href="https://github.com/kwakseongjae/oh-my-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => event("outbound_click", { url: "github_footer" })}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground dark:border-border dark:bg-card/60"
                >
                  <GithubMark className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </div>

            {/* Product column — pushed to the far right */}
            <div className="sm:col-span-4 sm:col-start-9">
              <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
                Product
              </div>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/builder" className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                    Builder
                  </Link>
                </li>
                <li>
                  <Link href="/curation" className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                    Personal Curation
                  </Link>
                </li>
                <li>
                  <Link href="/design-systems" className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                    Design Systems
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border/30 pt-6 text-xs text-muted-foreground">
            <div>
              &copy; {new Date().getFullYear()} oh-my-design. Open source &middot;{" "}
              <a
                href="https://github.com/kwakseongjae/oh-my-design/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                MIT License
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              67 references &middot; {dsCount} linked design systems
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
