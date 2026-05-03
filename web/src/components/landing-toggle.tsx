"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface LandingToggleProps {
  current: "v1" | "v2";
}

/**
 * Floating segmented pill that switches between landing variants.
 * Persists last-seen variant in localStorage but never auto-redirects —
 * both routes remain directly openable.
 */
export function LandingToggle({ current }: LandingToggleProps) {
  const router = useRouter();

  useEffect(() => {
    try {
      localStorage.setItem("omd_landing_variant", current);
    } catch {
      // ignore (Safari private mode etc.)
    }
  }, [current]);

  const go = (target: "v1" | "v2") => {
    if (target === current) return;
    // Scroll to top BEFORE navigating so the new variant lands at the hero,
    // and again after push to win against any layout-restoration race in the
    // App Router.
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    router.push(target === "v1" ? "/" : "/v2");
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
    }
  };

  const segBase =
    "px-3 py-1.5 text-[11px] font-semibold tracking-wide uppercase rounded-full transition-colors";
  const active = "bg-foreground text-background";
  const inactive = "text-foreground/60 hover:text-foreground";

  return (
    <div
      role="navigation"
      aria-label="Landing variant toggle"
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-1 rounded-full border border-border/60 bg-background/80 p-1 shadow-lg backdrop-blur-md dark:bg-background/70"
    >
      <button
        type="button"
        onClick={() => go("v1")}
        aria-pressed={current === "v1"}
        className={`${segBase} ${current === "v1" ? active : inactive}`}
      >
        v1
      </button>
      <button
        type="button"
        onClick={() => go("v2")}
        aria-pressed={current === "v2"}
        className={`${segBase} ${current === "v2" ? active : inactive}`}
      >
        v2
      </button>
    </div>
  );
}

export default LandingToggle;
