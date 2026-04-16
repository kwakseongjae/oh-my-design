"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { selectTemplates, type QuestionTemplate } from "@/lib/survey/quiz-data";
import { computeScore, type QuizAnswers, type QuizScore } from "@/lib/survey/scoring";
import { getDesignType, matchReferences } from "@/lib/survey/types";
import { event } from "@/lib/gtag";
import { CompanyMiniUI } from "./company-mini-ui";

/* ── Shared Components ──────────────────────────────────── */

function AnimatedHeading({ text, sub }: { text: string; sub?: string }) {
  const words = text.split(" ");
  return (
    <div className="mb-2">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        {words.map((word, i) => (
          <motion.span
            key={`${text}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: words.length * 0.04 + 0.1 }}
          className="mt-2 text-sm text-muted-foreground"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8" />;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 dark:border-border bg-card/50 dark:bg-card/60 transition-colors hover:bg-accent"
    >
      {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
    </button>
  );
}

/* ── Quiz Step Components ───────────────────────────────── */

function CompanyABStep({
  template,
  value,
  onChange,
}: {
  template: QuestionTemplate;
  value: string | null;
  onChange: (companyId: string) => void;
}) {
  return (
    <div>
      <AnimatedHeading text={template.question} sub={template.sub} />
      <div className="mt-6 grid gap-3 sm:grid-cols-2" style={{ height: "calc(100dvh - 280px)", minHeight: "300px" }}>
        {[
          { id: template.companyA, label: template.poleA },
          { id: template.companyB, label: template.poleB },
        ].map((opt, i) => {
          const isSelected = value === opt.id;
          return (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(opt.id)}
              className={`relative flex flex-col overflow-hidden rounded-2xl border-2 text-left transition-all ${
                isSelected
                  ? "border-foreground shadow-xl shadow-foreground/5"
                  : "border-border/40 hover:border-border dark:border-border"
              }`}
            >
              <div className="relative flex-1 overflow-hidden">
                <CompanyMiniUI companyId={opt.id} sceneType={template.sceneType} className="w-full h-full" />
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground shadow-lg"
                    >
                      <svg className="h-3.5 w-3.5 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function SaturationStep({ value, onChange }: { value: string | null; onChange: (v: string) => void }) {
  const muted = ["#8b9fad", "#9db5a0", "#b5a08b", "#a08bb5", "#8badb5"];
  const vivid = ["#2563eb", "#16a34a", "#ea580c", "#9333ea", "#0891b2"];

  return (
    <div>
      <AnimatedHeading text="Which color palette speaks to you?" sub="Saturation level sets the overall energy." />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          { id: "muted", label: "Muted & Soft", desc: "Desaturated, calm, refined", colors: muted },
          { id: "vivid", label: "Vivid & Bold", desc: "High saturation, punchy, energetic", colors: vivid },
        ].map((opt, i) => {
          const isSelected = value === opt.id;
          return (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(opt.id)}
              className={`relative flex flex-col overflow-hidden rounded-2xl border-2 p-6 text-left transition-all ${
                isSelected
                  ? "border-foreground shadow-xl shadow-foreground/5"
                  : "border-border/40 hover:border-border dark:border-border"
              }`}
            >
              <div className="flex gap-2.5 mb-4">
                {opt.colors.map((c, ci) => (
                  <div key={ci} className="h-12 w-12 rounded-lg" style={{ background: c }} />
                ))}
              </div>
              <div className="flex gap-2 mb-3">
                <div className="px-4 py-1.5 text-xs font-medium text-white rounded-md" style={{ background: opt.colors[0] }}>Primary</div>
                <div className="px-3 py-1.5 text-xs rounded-md" style={{ background: `${opt.colors[0]}18`, color: opt.colors[0] }}>Secondary</div>
              </div>
              <div className="text-sm font-semibold">{opt.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{opt.desc}</div>
              {isSelected && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-foreground shadow-lg">
                  <svg className="h-3.5 w-3.5 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function TypographyStep({ value, onChange }: { value: string | null; onChange: (v: string) => void }) {
  const options = [
    { id: "geometric", label: "Geometric & Modern", desc: "Clean, precise, neutral", font: "'Inter', system-ui, sans-serif", ls: "-0.02em", sample: "Build better products" },
    { id: "humanist", label: "Humanist & Warm", desc: "Friendly, organic, readable", font: "'Georgia', serif", ls: "0em", sample: "Welcome back, team" },
  ];

  return (
    <div>
      <AnimatedHeading text="Which typography feels natural?" sub="Font character shapes brand perception." />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {options.map((opt, i) => {
          const isSelected = value === opt.id;
          return (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(opt.id)}
              className={`relative flex flex-col overflow-hidden rounded-2xl border-2 p-6 text-left transition-all ${
                isSelected
                  ? "border-foreground shadow-xl shadow-foreground/5"
                  : "border-border/40 hover:border-border dark:border-border"
              }`}
            >
              <div className="text-lg font-semibold leading-tight mb-2" style={{ fontFamily: opt.font, letterSpacing: opt.ls }}>
                {opt.sample}
              </div>
              <div className="text-xs leading-relaxed mb-3" style={{ fontFamily: opt.font, opacity: 0.45 }}>
                Ship fast with confidence. Our platform helps teams move quickly without sacrificing quality.
              </div>
              <div className="flex gap-2 mb-3">
                <div className="px-3 py-1 text-[9px] font-medium text-white rounded-md bg-foreground" style={{ fontFamily: opt.font }}>Get Started</div>
                <div className="px-2 py-0.5 text-[8px] rounded border border-border" style={{ fontFamily: opt.font }}>v2.0</div>
              </div>
              <div className="text-sm font-semibold">{opt.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{opt.desc}</div>
              {isSelected && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-foreground shadow-lg">
                  <svg className="h-3.5 w-3.5 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function DarkModeStep({ value, onChange }: { value: boolean | null; onChange: (v: boolean) => void }) {
  const options = [
    {
      isDark: true, label: "Dark Mode", desc: "Immersive, focused, easy on the eyes",
      bg: "#09090b", fg: "#fafafa", border: "#27272a", primary: "#3b82f6",
    },
    {
      isDark: false, label: "Light Mode", desc: "Bright, clean, traditional",
      bg: "#ffffff", fg: "#09090b", border: "#e4e4e7", primary: "#18181b",
    },
  ];

  return (
    <div>
      <AnimatedHeading text="Dark mode or light mode?" sub="Last one! Your default theme preference." />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {options.map((opt, i) => {
          const isSelected = value === opt.isDark;
          return (
            <motion.button
              key={String(opt.isDark)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(opt.isDark)}
              className={`relative flex flex-col overflow-hidden rounded-2xl border-2 text-left transition-all ${
                isSelected
                  ? "border-foreground shadow-xl shadow-foreground/5"
                  : "border-border/40 hover:border-border dark:border-border"
              }`}
            >
              {/* Inline theme preview */}
              <div className="p-4" style={{ background: opt.bg, color: opt.fg, borderRadius: "14px 14px 0 0" }}>
                <div className="flex items-center justify-between mb-3" style={{ borderBottom: `1px solid ${opt.border}`, paddingBottom: "8px" }}>
                  <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded" style={{ background: opt.primary }} />
                    <img src={opt.isDark ? "/logo-white.png" : "/logo.png"} alt="omd" className="h-2.5 object-contain" />
                  </div>
                  <div className="px-2 py-0.5 text-[7px] font-medium" style={{ background: opt.primary, color: opt.bg, borderRadius: "6px" }}>Sign Up</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] font-semibold">Welcome back</div>
                  <div className="text-[7px]" style={{ opacity: 0.4 }}>Your dashboard is ready with today's updates.</div>
                  <div className="rounded-lg p-2" style={{ border: `1px solid ${opt.border}` }}>
                    <div className="text-[7px]" style={{ opacity: 0.4 }}>Revenue</div>
                    <div className="text-[11px] font-bold mt-0.5">$24,521</div>
                  </div>
                  <div className="rounded-lg p-2" style={{ border: `1px solid ${opt.border}` }}>
                    <div className="flex items-center gap-1.5 text-[7px]">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ background: opt.primary }} />
                      <span style={{ opacity: 0.6 }}>Deploy completed</span>
                      <span className="ml-auto" style={{ opacity: 0.25 }}>2m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="text-sm font-semibold">{opt.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{opt.desc}</div>
              </div>
              {isSelected && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-foreground shadow-lg">
                  <svg className="h-3.5 w-3.5 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Main Quiz Wizard ───────────────────────────────────── */

export interface QuizResult {
  score: QuizScore;
}

export function QuizWizard({ onComplete }: { onComplete: (result: QuizResult) => void }) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Select templates once on mount (random set)
  const templates = useMemo(() => selectTemplates(), []);

  // Core axis answers: templateId → chosen companyId
  const [coreAnswers, setCoreAnswers] = useState<Record<string, string>>({});
  const [saturation, setSaturation] = useState<string | null>(null);
  const [typography, setTypography] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [comprehensive, setComprehensive] = useState<string | null>(null);

  useEffect(() => { scrollRef.current?.scrollTo(0, 0); }, [step]);

  // Build step list: intro + 8 core + saturation + typography + comprehensive + darkmode + result = 14
  const coreTemplates = templates.filter(
    (t) => t.axis === "temperature" || t.axis === "density" || t.axis === "elevation" || t.axis === "shape",
  );
  const compTemplate = templates.find((t) => t.axis === "comprehensive");

  const totalSteps = 14; // intro(0) + 8 core(1-8) + sat(9) + typo(10) + comp(11) + dark(12) + result(13)
  const isFirst = step === 0;
  const isResult = step === totalSteps - 1;
  const progress = (step / (totalSteps - 1)) * 100;

  // Can proceed?
  const canProceed = (() => {
    if (step === 0) return true;
    if (step >= 1 && step <= 8) return !!coreAnswers[coreTemplates[step - 1]?.id];
    if (step === 9) return !!saturation;
    if (step === 10) return !!typography;
    if (step === 11) return !!comprehensive;
    if (step === 12) return darkMode !== null;
    return false;
  })();

  const goNext = () => {
    // Start event when user leaves intro
    if (step === 0) {
      event("curation_start");
    }
    // Step progress tracking
    if (step > 0 && step < 12) {
      event("curation_step", { step: step + 1, total: 12 });
    }
    if (step === 12 && darkMode !== null) {
      // Compute score and show result
      const answers: QuizAnswers = {
        core: coreAnswers,
        saturation: (saturation as "muted" | "vivid") || "muted",
        typography: (typography as "geometric" | "humanist" | "monospace") || "geometric",
        darkMode: darkMode ?? false,
        comprehensive: comprehensive || "",
      };
      const score = computeScore(answers, templates);
      event("curation_complete", {
        type_code: score.typeCode,
        saturation: score.saturation,
        typography: score.typography,
        dark_mode: String(score.darkMode),
      });
      onComplete({ score });
    }
    setDirection(1);
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  };

  const goPrev = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  // Render current step
  const renderStep = () => {
    if (step === 0) {
      return (
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="mb-8">
            <img src="/logo.png" alt="OMD" className="h-14 object-contain block dark:hidden" />
            <img src="/logo-white.png" alt="OMD" className="h-14 object-contain hidden dark:block" />
          </motion.div>
          <AnimatedHeading text="Curate your design" sub="12 choices — we'll match you with references that fit." />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 text-sm text-muted-foreground">
            Takes about 60 seconds
          </motion.p>
        </div>
      );
    }

    if (step >= 1 && step <= 8) {
      const t = coreTemplates[step - 1];
      if (!t) return null;
      return (
        <CompanyABStep
          template={t}
          value={coreAnswers[t.id] || null}
          onChange={(id) => setCoreAnswers((prev) => ({ ...prev, [t.id]: id }))}
        />
      );
    }

    if (step === 9) return <SaturationStep value={saturation} onChange={setSaturation} />;
    if (step === 10) return <TypographyStep value={typography} onChange={setTypography} />;

    if (step === 11 && compTemplate) {
      return (
        <CompanyABStep
          template={compTemplate}
          value={comprehensive}
          onChange={setComprehensive}
        />
      );
    }

    if (step === 12) return <DarkModeStep value={darkMode} onChange={setDarkMode} />;

    return null;
  };

  // Result is handled by parent, but show nothing if we reach step 13
  if (isResult) return null;

  const isDev = process.env.NODE_ENV === "development";

  const skipToResult = () => {
    event("curation_dev_skip");
    // Fill all answers with defaults
    const defaults: Record<string, string> = {};
    for (const t of coreTemplates) defaults[t.id] = t.companyA;
    setCoreAnswers(defaults);
    setSaturation("muted");
    setTypography("geometric");
    setComprehensive(compTemplate?.companyA || "vercel");
    setDarkMode(false);
    const answers: QuizAnswers = {
      core: defaults,
      saturation: "muted",
      typography: "geometric",
      darkMode: false,
      comprehensive: compTemplate?.companyA || "vercel",
    };
    const score = computeScore(answers, templates);
    onComplete({ score });
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* Dev skip button */}
      {isDev && (
        <button
          onClick={skipToResult}
          className="fixed bottom-20 right-4 z-[60] rounded-lg bg-red-500/90 px-3 py-1.5 text-[10px] font-mono text-white shadow-lg hover:bg-red-500 transition-colors"
        >
          DEV: Skip to result
        </button>
      )}

      {/* Progress */}
      <div className="h-1 w-full bg-muted">
        <motion.div className="h-full bg-foreground" animate={{ width: `${progress}%` }} transition={{ duration: 0.3, ease: "easeOut" }} />
      </div>

      {/* Top bar */}
      <div className="flex h-12 items-center justify-between px-4 sm:px-6 border-b border-border/40">
        <div className="flex items-center gap-3 min-w-[60px]">
          <a href="/" aria-label="Home" className="flex items-center transition-opacity hover:opacity-70">
            <img src="/logo.png" alt="OMD" className="h-5 object-contain block dark:hidden" />
            <img src="/logo-white.png" alt="OMD" className="h-5 object-contain hidden dark:block" />
          </a>
          {!isFirst && (
            <button onClick={goPrev} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          )}
        </div>
        <span className="text-xs text-muted-foreground">{step}/{totalSteps - 1}</span>
        <div className="flex justify-end min-w-[60px]">
          <ThemeToggle />
        </div>
      </div>

      {/* Content */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer nav */}
      <div className="border-t border-border/40 px-4 sm:px-6 py-3 safe-bottom">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <button onClick={goPrev} disabled={isFirst}
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all disabled:opacity-0 hover:bg-muted">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          <div className="hidden sm:flex gap-1">
            {Array.from({ length: totalSteps - 1 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center h-6 w-3">
                <span className={`block h-1.5 rounded-full transition-all ${
                  i + 1 === step ? "w-5 bg-foreground" : i + 1 < step ? "w-1.5 bg-foreground/40" : "w-1.5 bg-muted-foreground/20"
                }`} />
              </div>
            ))}
          </div>

          <button onClick={goNext} disabled={!canProceed}
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground whitespace-nowrap transition-all hover:opacity-90 shadow-md shadow-primary/20 disabled:opacity-30">
            {isFirst ? "Let's Go" : step === 12 ? "See Results" : "Next"} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
