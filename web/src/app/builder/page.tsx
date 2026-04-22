"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { event, trackRef } from "@/lib/gtag";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { ReferenceSelector } from "@/components/reference-selector";
import { DesignWizard } from "@/components/design-wizard";
import { PreviewExportView } from "@/components/preview-export-view";
import { encodeConfig, decodeConfig } from "@/lib/core/config-hash";
import type { Overrides, StylePreferences } from "@/lib/core/types";

type Step = "select" | "customize" | "preview";

export interface RefListItem {
  id: string;
  name: string;
  category: string;
  country: string;
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

const DEFAULT_COMPONENTS = [
  "button", "input", "table", "card", "badge", "tabs", "dialog",
];

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
  const [activeComponents, setActiveComponents] = useState<string[]>(DEFAULT_COMPONENTS);
  const [stylePreferences, setStylePreferences] = useState<StylePreferences>({});

  const [refsLoading, setRefsLoading] = useState(true);

  // Guard against the initial popstate-like hydrate pushing a duplicate
  // history entry. We only write URL on transitions the user initiates.
  const hydrating = useRef(true);

  useEffect(() => setMounted(true), []);

  // ── URL hydration ────────────────────────────────────────────────
  //
  // URL shape (query-string, single route):
  //   /builder                                   → step 1 (select)
  //   /builder?step=customize&ref=<id>           → step 2 (wizard)
  //   /builder?step=preview&ref=<id>&cfg=<hash>  → step 3 (preview + export)
  //
  // Backward compat: `?ref=<id>` without `step=` (old survey-result links)
  // is treated as step=customize.
  //
  // `cfg` is the same base64 hash used by the npx command, so the preview
  // URL and the generated CLI invocation always describe the same artifact.
  const loadFromUrl = useCallback(async () => {
    const params = new URLSearchParams(window.location.search);
    const rawStep = (params.get("step") as Step | null) ?? null;
    const refParam = params.get("ref");
    const cfgParam = params.get("cfg");

    const resolvedStep: Step =
      rawStep === "preview" || rawStep === "customize" || rawStep === "select"
        ? rawStep
        : refParam
          ? "customize" // legacy link
          : "select";

    // Preview needs both ref + cfg. If cfg is present, hydrate state FROM it
    // before landing on the step (so the preview shows the full captured config).
    if (resolvedStep === "preview" && refParam && cfgParam) {
      try {
        const decoded = decodeConfig(cfgParam);
        const data = await fetchRef(refParam);
        if (data) {
          setDetail(data);
          // Preserve the decoded overrides verbatim — do NOT seed empty fields
          // from the reference defaults. An empty-string slot means "no
          // override / use reference as-is"; filling it from defaults would
          // defeat the Use-as-is path and cause radius-range collapses on
          // shared preview URLs.
          setOverrides({
            primaryColor: decoded.overrides.primaryColor,
            fontFamily: decoded.overrides.fontFamily,
            headingWeight: decoded.overrides.headingWeight,
            borderRadius: decoded.overrides.borderRadius,
            darkMode: decoded.overrides.darkMode,
          });
          if (decoded.components.length > 0) setActiveComponents(decoded.components);
          setStylePreferences(decoded.stylePreferences || {});
          setStep("preview");
          return;
        }
      } catch {
        // malformed hash — fall through to customize/select
      }
    }

    if (resolvedStep === "customize" && refParam) {
      const data = await fetchRef(refParam);
      if (data) {
        setDetail(data);
        setOverrides({
          primaryColor: data.primary,
          fontFamily: "",
          headingWeight: "",
          borderRadius: data.radius.replace(/[-–].*/, "").trim(),
          darkMode: false,
        });
        setStep("customize");
        return;
      }
    }

    setStep("select");
  }, []);

  useEffect(() => {
    fetch("/api/references")
      .then((r) => r.json())
      .then((data) => setRefs(data))
      .catch(() => event("api_error", { endpoint: "/api/references" }))
      .finally(() => setRefsLoading(false));
  }, []);

  useEffect(() => {
    (async () => {
      await loadFromUrl();
      hydrating.current = false;
    })();
    const onPop = () => {
      hydrating.current = true;
      loadFromUrl().finally(() => {
        hydrating.current = false;
      });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [loadFromUrl]);

  // While in preview, keep the cfg query param in sync with the live state
  // (components, overrides, prefs) so the URL is always a truthful snapshot
  // the user can copy-share. Uses replaceState to avoid history churn.
  useEffect(() => {
    if (hydrating.current) return;
    if (step !== "preview" || !detail) return;
    const cfg = encodeConfig(detail.id, overrides, activeComponents, stylePreferences);
    const params = new URLSearchParams(window.location.search);
    if (params.get("cfg") === cfg && params.get("ref") === detail.id) return;
    params.set("step", "preview");
    params.set("ref", detail.id);
    params.set("cfg", cfg);
    window.history.replaceState({}, "", `/builder?${params.toString()}`);
  }, [step, detail, overrides, activeComponents, stylePreferences]);

  // ── URL writers ──────────────────────────────────────────────────

  function pushUrl(nextStep: Step, ref?: string, cfg?: string) {
    if (hydrating.current) return; // don't write during hydration
    const params = new URLSearchParams();
    if (nextStep !== "select") params.set("step", nextStep);
    if (ref) params.set("ref", ref);
    if (cfg) params.set("cfg", cfg);
    const qs = params.toString();
    const url = qs ? `/builder?${qs}` : `/builder`;
    window.history.pushState({}, "", url);
  }

  async function fetchRef(id: string): Promise<RefDetail | null> {
    try {
      const res = await fetch(`/api/references/${id}`);
      if (!res.ok) return null;
      return await res.json();
    } catch {
      event("api_error", { endpoint: `/api/references/${id}` });
      return null;
    }
  }

  const selectRef = useCallback(async (id: string) => {
    setLoading(true);
    const data = await fetchRef(id);
    setLoading(false);
    if (!data) return;
    setDetail(data);
    setOverrides({
      primaryColor: data.primary,
      fontFamily: "",
      headingWeight: "",
      borderRadius: data.radius.replace(/[-–].*/, "").trim(),
      darkMode: false,
    });
    setActiveComponents(DEFAULT_COMPONENTS);
    setStylePreferences({});
    setStep("customize");
    pushUrl("customize", id);
  }, []);

  // Skip-wizard path: load the ref but hold overrides at their empty-string
  // defaults and stylePreferences at {}. This is the contract for "pure
  // original" — every rewrite guard inside applyOverridesToMd and the preview
  // honors empty strings as "no override" and falls back to the ref's own
  // values, so the DESIGN.md and the preview render the reference unchanged.
  const selectRefAsIs = useCallback(async (id: string) => {
    setLoading(true);
    const data = await fetchRef(id);
    setLoading(false);
    if (!data) return;
    setDetail(data);
    const pure: Overrides = {
      primaryColor: "",
      fontFamily: "",
      headingWeight: "",
      borderRadius: "",
      darkMode: false,
    };
    setOverrides(pure);
    setActiveComponents(DEFAULT_COMPONENTS);
    setStylePreferences({});
    setStep("preview");
    event("generation_complete", { reference: id, mode: "as_is" });
    trackRef("generate", id);
    const cfg = encodeConfig(id, pure, DEFAULT_COMPONENTS, {});
    pushUrl("preview", id, cfg);
  }, []);

  const goToPreview = useCallback(() => {
    if (!detail) return;
    const cfg = encodeConfig(detail.id, overrides, activeComponents, stylePreferences);
    event("generation_complete", { reference: detail.id });
    trackRef("generate", detail.id);
    setStep("preview");
    pushUrl("preview", detail.id, cfg);
  }, [detail, overrides, activeComponents, stylePreferences]);

  const goToCustomize = useCallback(() => {
    if (!detail) return;
    setStep("customize");
    pushUrl("customize", detail.id);
  }, [detail]);

  const goToSelect = useCallback(() => {
    setStep("select");
    pushUrl("select");
  }, []);

  const goToStepFromNav = useCallback((next: Step) => {
    if (next === "select") return goToSelect();
    if (!detail) return;
    if (next === "customize") return goToCustomize();
    if (next === "preview") return goToPreview();
  }, [detail, goToSelect, goToCustomize, goToPreview]);

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
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="oh-my-design" className="h-6 block dark:hidden" />
            <img src="/logo-white.png" alt="oh-my-design" className="h-6 hidden dark:block" />
          </Link>

          {/* Steps */}
          <nav className="hidden sm:flex items-center gap-1 rounded-full border border-border/40 bg-muted/30 dark:border-border dark:bg-muted/50 p-1 backdrop-blur">
            {STEPS.map((s) => (
              <button
                key={s.key}
                onClick={() => goToStepFromNav(s.key)}
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
          <ReferenceSelector
            refs={refs}
            onSelect={selectRef}
            onSelectAsIs={selectRefAsIs}
            loading={loading}
            initialLoading={refsLoading}
          />
        )}
        {step === "customize" && detail && (
          <DesignWizard
            detail={detail}
            overrides={overrides}
            onChange={setOverrides}
            onComplete={goToPreview}
            onBack={goToSelect}
            onPreferencesChange={(p) => setStylePreferences(p as StylePreferences)}
          />
        )}
        {step === "preview" && detail && (
          <PreviewExportView
            detail={detail}
            overrides={overrides}
            onBack={goToCustomize}
            components={activeComponents}
            onComponentsChange={setActiveComponents}
            stylePreferences={stylePreferences}
          />
        )}
      </main>
    </div>
  );
}
