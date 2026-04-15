export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export function event(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}

/** Track unhandled JS errors */
export function initErrorLogging() {
  if (typeof window === "undefined") return;

  window.addEventListener("error", (e) => {
    event("js_error", {
      message: e.message || "unknown",
      source: e.filename || "",
      line: e.lineno || 0,
    });
  });

  window.addEventListener("unhandledrejection", (e) => {
    event("js_error", {
      message: String(e.reason?.message || e.reason || "unhandled_promise"),
      source: "promise",
    });
  });
}

/** Track landing page scroll depth at 25/50/75/100% thresholds */
export function initScrollDepth() {
  if (typeof window === "undefined") return;

  const fired = new Set<number>();
  const thresholds = [25, 50, 75, 100];

  function check() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const pct = Math.round((scrollTop / docHeight) * 100);

    for (const t of thresholds) {
      if (pct >= t && !fired.has(t)) {
        fired.add(t);
        event("scroll_depth", { percent: t, page: window.location.pathname });
      }
    }
  }

  window.addEventListener("scroll", check, { passive: true });
}
