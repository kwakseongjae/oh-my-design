"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating "scroll to top" button, fixed bottom-right. Appears once the window
 * has scrolled past `threshold` px and smooth-scrolls back to the top on click.
 * Used on the builder's long-scrolling steps (select grid + preview).
 * `bottomClass` lets a page lift the button above other fixed bottom chrome
 * (e.g. the sticky install bar on the builder preview step).
 */
export function ScrollToTop({
  threshold = 480,
  bottomClass = "bottom-5",
}: {
  threshold?: number;
  bottomClass?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed ${bottomClass} right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/85 text-foreground shadow-lg backdrop-blur transition-all duration-200 hover:bg-muted hover:scale-105 ${
        show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
