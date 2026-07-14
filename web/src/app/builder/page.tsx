"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { trackGenerate, trackApiError, trackRawMdOpen, trackBuilderOpen } from "@/lib/builder/analytics";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { ReferenceSelector } from "@/components/reference-selector";
import { DesignWizard } from "@/components/design-wizard";
import { PreviewExportView } from "@/components/preview-export-view";
import { InstallCta } from "@/components/install-cta";
import { GithubStarButton } from "@/components/github-star-button";
import { ScrollToTop } from "@/components/scroll-to-top";
import { encodeConfig, decodeConfig } from "@/lib/core/config-hash";
import { buildBuilderPrompt, DEFAULT_BUILDER_COMPONENTS } from "@/lib/core/builder-prompt";
import type { Overrides, StylePreferences } from "@/lib/core/types";
import type { ReferenceDetailAstContract } from "@/lib/references/detail-projection";
import { isColorFilter, type ColorFilter } from "@/lib/builder/color-family";
import { useMounted } from "@/lib/use-mounted";

type Step = "select" | "customize" | "preview";

export interface RefListItem {
  id: string;
  name: string;
  category: string;
  country: string;
  /** Raw 2-letter code (KR/US/JP…) for locale-aware sort matching. */
  countryCode: string;
  primaryColor: string;
  background: string;
  /** Among the most-selected references — resolved server-side so the grid
   *  arrives hot-first + badged with no post-render reflow. */
  hot: boolean;
  /** select-counter score (0 when KV cold) — drives Popular sort + Recommended blend. */
  pop: number;
  /** first-added date (YYYY-MM-DD) or null — drives New sort + recency boost. */
  added: string | null;
  /** 0..1 content-completeness — the algorithmic "marquee" proxy. */
  quality: number;
}

export interface RefDetail {
  id: string;
  designMd: string;
  primary: string;
  background: string;
  foreground: string;
  fontFamily: string;
  mono?: string;
  brandFont?: string;
  headingWeight: string;
  radius: string;
  mood: string;
  accent?: string;
  border?: string;
  /** Present on the default AST API path; optional only for the rollback flag. */
  referenceAst?: ReferenceDetailAstContract;
}

const DEFAULT_COMPONENTS = DEFAULT_BUILDER_COMPONENTS;

async function fetchRef(id: string): Promise<RefDetail | null> {
  try {
    const res = await fetch(`/api/references/${id}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    trackApiError("reference_detail");
    return null;
  }
}

export default function BuilderPage() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
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
  const [selectedColor, setSelectedColor] = useState<ColorFilter | null>(null);

  const [refsLoading, setRefsLoading] = useState(true);

  // Guard against the initial popstate-like hydrate pushing a duplicate
  // history entry. We only write URL on transitions the user initiates.
  const hydrating = useRef(true);

  // generation_complete / builder_export / trackRef('generate') fire when a
  // reference reaches the preview step. goToPreview() is reachable via
  // back/forward (goToStepFromNav), which would re-fire them and re-increment
  // the Upstash counter for one user. Dedupe by cfg so only genuinely new
  // generations count (S3).
  const firedGenerations = useRef<Set<string>>(new Set());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedStep = params.get("step");
    const entryStep = requestedStep === "preview" || requestedStep === "customize"
      ? requestedStep
      : params.has("ref")
        ? "customize"
        : "select";
    trackBuilderOpen({ entryStep });
  }, []);

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
    const colorParam = params.get("color");
    setSelectedColor(isColorFilter(colorParam) ? colorParam : null);

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
      .catch(() => trackApiError("references"))
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

  // Reset window scroll to top on every step transition. Without this, scrolling
  // down the reference list (step 1) then proceeding leaves the next step scrolled
  // to the carried-over position, forcing the user to scroll back up.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

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

  const pushUrl = useCallback((nextStep: Step, ref?: string, cfg?: string) => {
    if (hydrating.current) return; // don't write during hydration
    const params = new URLSearchParams();
    if (nextStep !== "select") params.set("step", nextStep);
    if (ref) params.set("ref", ref);
    if (cfg) params.set("cfg", cfg);
    if (selectedColor) params.set("color", selectedColor);
    const qs = params.toString();
    const url = qs ? `/builder?${qs}` : `/builder`;
    window.history.pushState({}, "", url);
  }, [selectedColor]);

  // Reference grid pick → always as-is (the single primary path). Load the ref
  // but hold overrides at their empty-string
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
    const cfg = encodeConfig(id, pure, DEFAULT_COMPONENTS, {});
    if (!firedGenerations.current.has(cfg)) {
      firedGenerations.current.add(cfg);
      // Fires bld_generate{mode:as_is} + the Redis `generate` counter.
      trackGenerate({ reference: id, mode: "as_is" });
    }
    pushUrl("preview", id, cfg);
  }, [pushUrl]);

  const goToPreview = useCallback(() => {
    if (!detail) return;
    const cfg = encodeConfig(detail.id, overrides, activeComponents, stylePreferences);
    if (!firedGenerations.current.has(cfg)) {
      firedGenerations.current.add(cfg);
      // Fires bld_generate{mode:customize} + the Redis `generate` counter.
      trackGenerate({ reference: detail.id, mode: "customize" });
    }
    setStep("preview");
    pushUrl("preview", detail.id, cfg);
  }, [detail, overrides, activeComponents, stylePreferences, pushUrl]);

  const goToCustomize = useCallback(() => {
    if (!detail) return;
    // Entering customize from the as-is preview: seed the wizard from the
    // reference's own values (empty overrides == "as-is") so the controls
    // start populated. Mirrors the pre-demotion selectRef seeding.
    setOverrides((o) =>
      o.primaryColor || o.borderRadius
        ? o
        : {
            primaryColor: detail.primary,
            fontFamily: "",
            headingWeight: "",
            borderRadius: detail.radius.replace(/[-–].*/, "").trim(),
            darkMode: o.darkMode,
          },
    );
    setStep("customize");
    pushUrl("customize", detail.id);
  }, [detail, pushUrl]);

  const goToSelect = useCallback(() => {
    setStep("select");
    pushUrl("select");
  }, [pushUrl]);

  const changeColor = useCallback((color: ColorFilter | null) => {
    setSelectedColor(color);
    if (hydrating.current) return;
    const params = new URLSearchParams(window.location.search);
    params.delete("step");
    params.delete("ref");
    params.delete("cfg");
    if (color) params.set("color", color);
    else params.delete("color");
    const query = params.toString();
    window.history.replaceState({}, "", query ? `/builder?${query}` : "/builder");
  }, []);

  const goToStepFromNav = useCallback((next: Step) => {
    if (next === "select") return goToSelect();
    if (!detail) return;
    if (next === "customize") return goToCustomize();
    if (next === "preview") return goToPreview();
  }, [detail, goToSelect, goToCustomize, goToPreview]);

  // Use-as-is is the only primary path now (customize is a demoted, opt-in
  // tweak reachable from the preview screen), so the header is always the
  // two-step Reference → Export.
  const STEPS: { key: Step; label: string; num: number }[] = [
    { key: "select", label: "Reference", num: 1 },
    { key: "preview", label: "Export", num: 2 },
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

          <div className="flex items-center gap-2">
            <GithubStarButton className="hidden sm:inline-flex" />
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border/40 bg-card/50 dark:border-border dark:bg-card/60 transition-colors hover:bg-accent"
              >
                {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Content. Preview gets extra bottom padding so the last content row
          stays reachable above the fixed install bar (same pb pattern as the
          reference detail pages). */}
      <main className={`mx-auto max-w-7xl px-4 py-8 sm:px-6 ${step === "preview" ? "sm:pb-24" : ""}`}>
        {step === "select" && (
          <ReferenceSelector
            refs={refs}
            onSelect={selectRefAsIs}
            loading={loading}
            initialLoading={refsLoading}
            selectedColor={selectedColor}
            onColorChange={changeColor}
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
          <>
            <PreviewExportView
              detail={detail}
              overrides={overrides}
              onBack={goToSelect}
              onCustomize={goToCustomize}
              components={activeComponents}
              onComponentsChange={setActiveComponents}
              stylePreferences={stylePreferences}
            />
            {/* Builder is the main funnel surface — close the loop from preview
                into the install command. Same sticky bottom bar as the reference
                detail pages (#19); the main's pb-24 above keeps content clear of
                it. Fires act_install_copy{surface:'builder'} / act_prompt_copy{reference,surface}
                (see InstallCta). The first prompt is composed from the LIVE
                builder config (not a generic brand line) so the user's step-2
                customizations survive the handoff to the agent; the URL we
                append matches the cfg replaceState sync above (same encoder). */}
            {/* Hidden on mobile (sm:block) — the fixed install bar crowds the
                small-screen preview; desktop keeps it as the funnel close. */}
            <div className="hidden sm:block">
            <InstallCta
              variant="bar"
              source="builder"
              reference={detail.id}
              brandName={detail.id}
              prompt={buildBuilderPrompt({
                brandName: detail.id,
                overrides,
                components: activeComponents,
                stylePreferences,
                // selectRef seeds these two slots from the reference, so a
                // matching value means "unchanged" — not a customization.
                defaults: {
                  primaryColor: detail.primary,
                  borderRadius: detail.radius.replace(/[-–].*/, "").trim(),
                },
                url: `${typeof window !== "undefined" ? window.location.origin : "https://oh-my-design.kr"}/builder?step=preview&ref=${detail.id}&cfg=${encodeConfig(detail.id, overrides, activeComponents, stylePreferences)}`,
              })}
            />
            </div>
            {/* Bridge the client funnel to the server-rendered, indexable
                artifacts: the canonical reference page (where Claude/Brave land)
                and its raw .md (what agents fetch). Keeps shared builder URLs
                one hop from citable content. */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <Link
                href={`/design-systems/${detail.id}`}
                className="underline underline-offset-2 hover:text-foreground"
              >
                View {detail.id} reference page
              </Link>
              <span aria-hidden className="hidden sm:inline">·</span>
              <a
                href={`/${detail.id}/design.md`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackRawMdOpen(detail.id)}
                className="underline underline-offset-2 hover:text-foreground"
              >
                Raw DESIGN.md
              </a>
            </div>
          </>
        )}
      </main>

      {/* Floating scroll-to-top on the long-scrolling steps (select grid + preview).
          On preview it lifts above the fixed install bar (bottom-4 + pill height)
          so the two floating controls never overlap on narrow viewports. */}
      {(step === "select" || step === "preview") && (
        <ScrollToTop bottomClass={step === "preview" ? "bottom-5 sm:bottom-20" : "bottom-5"} />
      )}
    </div>
  );
}
