"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { BrowseModal } from "@/components/browse-modal";
import { event } from "@/lib/gtag";
import { V2 } from "./tokens";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.66 5.57.66 11.84c0 5.02 3.25 9.27 7.76 10.77.57.1.78-.25.78-.54 0-.27-.01-1.15-.02-2.09-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.94.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.5-1.44.1-3 0 0 .95-.3 3.11 1.16.9-.25 1.87-.38 2.83-.38s1.93.13 2.83.38c2.16-1.46 3.11-1.16 3.11-1.16.6 1.56.22 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.3-5.19 5.58.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.65.78.54 4.5-1.5 7.75-5.75 7.75-10.77C23.34 5.57 18.27.5 12 .5z" />
    </svg>
  );
}

/**
 * Scroll-aware v2 nav. At the very top the nav is fully transparent
 * (no gray bg over the dark hero — keeps the hero gradient uninterrupted).
 * After ~6px of scroll it fades into a smoked-glass surface so it stays
 * legible over the lighter sections below.
 */
export function V2Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300"
      style={{
        background: scrolled ? "rgba(10,10,15,0.62)" : "transparent",
        backdropFilter: scrolled ? "saturate(160%) blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(160%) blur(18px)" : "none",
        borderBottom: `1px solid ${scrolled ? V2.borderDark : "transparent"}`,
        color: V2.textOnDark,
      }}
    >
      {/* hairline gradient accent — only visible after scroll */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${V2.primary} 35%, ${V2.accent} 65%, transparent 100%)`,
          opacity: scrolled ? 0.55 : 0,
        }}
      />

      <div
        className="mx-auto grid h-14 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 px-4 sm:px-6"
      >
        {/* LEFT — logo */}
        <div className="justify-self-start">
          <Link
            href="/v2"
            aria-label="oh-my-design home"
            className="group inline-flex items-center outline-none rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
            style={{
              // @ts-expect-error css var
              "--tw-ring-color": V2.accent,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.png"
              alt="oh-my-design"
              className="h-6 sm:h-7 transition-opacity group-hover:opacity-90"
              draggable={false}
            />
          </Link>
        </div>

        {/* CENTER — browse */}
        <div className="justify-self-center">
          <BrowseModal
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 sm:px-4 h-9 sm:h-10 text-xs sm:text-sm font-medium text-white/85 transition-all hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a89cff]"
          />
        </div>

        {/* RIGHT — docs + github + cta */}
        <div className="flex items-center gap-2 justify-self-end">
          <Link
            href="/docs"
            onClick={() => event("nav_click", { location: "v2_docs" })}
            className="hidden items-center gap-1.5 rounded-full h-9 sm:h-10 px-3 text-xs font-medium text-white/70 transition-colors hover:text-white sm:inline-flex"
          >
            Docs
          </Link>
          <a
            href="https://github.com/kwakseongjae/oh-my-design"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => event("outbound_click", { url: "github_nav_v2" })}
            className="hidden items-center gap-1.5 rounded-full border h-9 sm:h-10 px-3 text-xs font-medium text-white/85 transition-all hover:bg-white/5 hover:text-white md:inline-flex"
            style={{ borderColor: V2.borderDark }}
          >
            <GithubMark className="h-3.5 w-3.5" />
            <span>GitHub</span>
            <Star className="h-3 w-3" style={{ color: V2.accent }} />
          </a>
          <Link
            href="/builder"
            onClick={() => event("cta_click", { location: "nav_v2" })}
            className="inline-flex items-center gap-1.5 rounded-full whitespace-nowrap px-3 sm:px-4 h-9 sm:h-10 text-xs sm:text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: V2.primary,
              boxShadow: `0 6px 18px -6px ${V2.primary}`,
            }}
          >
            <span className="sm:hidden">Build</span>
            <span className="hidden sm:inline">Open Builder</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
