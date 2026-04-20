"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ActionsHeader } from "./actions-header";
import { MoodOverrideBadge } from "./mood-override-badge";
import type { PlaygroundState } from "@/lib/playground/state";

export function PlaygroundHeader({
  state,
  onReset,
  onRevertOverrides,
}: {
  state: PlaygroundState;
  onReset: () => void;
  onRevertOverrides: () => void;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const displayName = state.name.trim() || "Untitled";

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl dark:border-border">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{displayName}</div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              <span>playground</span>
              <span aria-hidden>·</span>
              <span>{state.mood}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <MoodOverrideBadge
              mood={state.mood}
              overrides={state.overrides}
              onRevert={onRevertOverrides}
            />
          </div>
          <ActionsHeader state={state} onReset={onReset} />
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card/50 transition-colors hover:bg-accent dark:border-border"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
