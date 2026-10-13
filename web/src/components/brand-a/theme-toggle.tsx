"use client";

import { useTheme } from "next-themes";

/** Half-filled square: the theme control from the prototype, wired to next-themes. */
export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      className="sq-theme"
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <rect x="1.5" y="1.5" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 1.5h7.5v15H9Z" fill="currentColor" />
      </svg>
    </button>
  );
}
