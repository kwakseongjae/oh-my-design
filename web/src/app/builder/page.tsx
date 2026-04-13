"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReferenceSelector } from "@/components/reference-selector";
import { DesignWizard } from "@/components/design-wizard";
import { PreviewExportView } from "@/components/preview-export-view";
import type { Overrides, StylePreferences } from "@/lib/core/types";

type Step = "select" | "customize" | "preview";

export interface RefListItem {
  id: string;
  name: string;
  category: string;
  primaryColor: string;
  background: string;
}

export interface RefDetail {
  id: string;
  designMd: string;
  primary: string;
  background: string;
  foreground: string;
  fontFamily: string;
  mono?: string;
  headingWeight: string;
  radius: string;
  mood: string;
  accent?: string;
  border?: string;
}

export default function BuilderPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<Step>("select");
  const [refs, setRefs] = useState<RefListItem[]>([]);
  const [detail, setDetail] = useState<RefDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [overrides, setOverrides] = useState<Overrides>({
    primaryColor: "",
    fontFamily: "",
    headingWeight: "",
    borderRadius: "",
    darkMode: false,
  });
  const [activeComponents, setActiveComponents] = useState<string[]>([
    "button", "input", "table", "card", "badge", "tabs", "dialog",
  ]);
  const [stylePreferences, setStylePreferences] = useState<StylePreferences>({});

  const [refsLoading, setRefsLoading] = useState(true);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    fetch("/api/references")
      .then((r) => r.json())
      .then(setRefs)
      .finally(() => setRefsLoading(false));
  }, []);

  const selectRef = useCallback(async (id: string) => {
    setLoading(true);
    const res = await fetch(`/api/references/${id}`);
    const data: RefDetail = await res.json();
    setDetail(data);
    setOverrides({
      primaryColor: data.primary,
      fontFamily: data.fontFamily,
      headingWeight: data.headingWeight,
      borderRadius: data.radius.replace(/[-–].*/, "").trim(),
      darkMode: false,
    });
    setStep("customize");
    setLoading(false);
  }, []);

  const STEPS: { key: Step; label: string; num: number }[] = [
    { key: "select", label: "Reference", num: 1 },
    { key: "customize", label: "Customize", num: 2 },
    { key: "preview", label: "Export", num: 3 },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <img src="/logo.png" alt="oh-my-design" className="h-6 block dark:hidden" />
            <img src="/logo-white.png" alt="oh-my-design" className="h-6 hidden dark:block" />
          </div>

          {/* Steps */}
          <nav className="hidden sm:flex items-center gap-1 rounded-full border border-border/40 bg-muted/30 dark:border-border dark:bg-muted/50 p-1 backdrop-blur">
            {STEPS.map((s) => (
              <button
                key={s.key}
                onClick={() => {
                  if (s.key === "select") setStep("select");
                  else if (detail) setStep(s.key);
                }}
                disabled={!detail && s.key !== "select"}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  step === s.key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                } disabled:opacity-30 disabled:cursor-not-allowed`}
              >
                <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                  step === s.key ? "bg-primary-foreground/20" : "bg-muted"
                }`}>
                  {s.num}
                </span>
                {s.label}
              </button>
            ))}
          </nav>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/40 bg-card/50 dark:border-border dark:bg-card/60 transition-colors hover:bg-accent"
            >
              {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {step === "select" && (
          <ReferenceSelector refs={refs} onSelect={selectRef} loading={loading} initialLoading={refsLoading} />
        )}
        {step === "customize" && detail && (
          <DesignWizard
            detail={detail}
            overrides={overrides}
            onChange={setOverrides}
            onComplete={() => setStep("preview")}
            onBack={() => setStep("select")}
            onPreferencesChange={(p) => setStylePreferences(p as StylePreferences)}
          />
        )}
        {step === "preview" && detail && (
          <PreviewExportView
            detail={detail}
            overrides={overrides}
            onBack={() => setStep("customize")}
            components={activeComponents}
            onComponentsChange={setActiveComponents}
            stylePreferences={stylePreferences}
          />
        )}
      </main>
    </div>
  );
}
