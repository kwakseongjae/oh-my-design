"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, RotateCcw } from "lucide-react";
import Link from "next/link";
import { QuizWizard, type QuizResult } from "@/components/survey/quiz-wizard";
import { ResultCard } from "@/components/survey/result-card";
import { event } from "@/lib/gtag";
import type { QuizScore } from "@/lib/survey/scoring";

function ResultHeader({ onRetake }: { onRetake: () => void }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="oh-my-design" className="h-6 block dark:hidden" />
          <img src="/logo-white.png" alt="oh-my-design" className="h-6 hidden dark:block" />
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={onRetake}
            className="flex items-center gap-1.5 rounded-full border border-border/40 dark:border-white/10 bg-card/50 dark:bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw className="h-3 w-3" /> Retake
          </button>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/40 dark:border-white/10 bg-card/50 dark:bg-white/[0.04] transition-colors hover:bg-accent"
            >
              {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default function CurationPage() {
  const [result, setResult] = useState<QuizScore | null>(null);

  // Page view tracking on mount
  useEffect(() => {
    event("curation_view");
  }, []);

  if (result) {
    return (
      <div className="min-h-screen bg-background">
        <ResultHeader
          onRetake={() => {
            event("curation_retake", { type_code: result.typeCode });
            setResult(null);
          }}
        />
        <ResultCard
          score={result}
          onGenerateDesign={(refId) => {
            window.location.href = `/builder?ref=${refId}`;
          }}
        />
      </div>
    );
  }

  return (
    <QuizWizard
      onComplete={(r: QuizResult) => setResult(r.score)}
    />
  );
}
