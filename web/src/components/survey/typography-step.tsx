"use client";

import { motion } from "framer-motion";

/* ── Types ──────────────────────────────────────────────── */

type TypographyChar = "geometric" | "humanist" | "monospace";

interface TypoOption {
  id: TypographyChar;
  label: string;
  description: string;
  fontStack: string;
  sampleHeading: string;
  sampleBody: string;
  letterSpacing: string;
  style: "normal" | "italic";
}

const OPTIONS: TypoOption[] = [
  {
    id: "geometric",
    label: "Geometric & Modern",
    description: "Clean, precise, neutral — Inter, Geist, Suisse",
    fontStack: "'Inter', 'Geist', system-ui, sans-serif",
    sampleHeading: "Build better products",
    sampleBody: "Ship fast with confidence. Our platform helps teams move quickly without sacrificing quality.",
    letterSpacing: "-0.02em",
    style: "normal",
  },
  {
    id: "humanist",
    label: "Humanist & Warm",
    description: "Friendly, organic, readable — Source Sans, Nunito",
    fontStack: "'Source Sans 3', 'Nunito', 'Segoe UI', sans-serif",
    sampleHeading: "Welcome back, team",
    sampleBody: "Pick up where you left off. Your workspace is ready with everything you need to get started today.",
    letterSpacing: "0em",
    style: "normal",
  },
  {
    id: "monospace",
    label: "Monospace & Technical",
    description: "Code-native, precise, developer — JetBrains, Fira Code",
    fontStack: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
    sampleHeading: "$ deploy --prod",
    sampleBody: "Zero downtime deployments. Every push triggers a build, runs tests, and deploys to production.",
    letterSpacing: "0em",
    style: "normal",
  },
];

/* ── Mini UI Preview ────────────────────────────────────── */

function TypoPreview({ opt, primary }: { opt: TypoOption; primary: string }) {
  return (
    <div className="w-full space-y-4 px-2">
      {/* Heading sample */}
      <div>
        <div
          className="text-xl sm:text-2xl font-semibold leading-tight"
          style={{ fontFamily: opt.fontStack, letterSpacing: opt.letterSpacing }}
        >
          {opt.sampleHeading}
        </div>
        <div
          className="mt-2 text-xs leading-relaxed text-muted-foreground"
          style={{ fontFamily: opt.fontStack }}
        >
          {opt.sampleBody}
        </div>
      </div>

      {/* Mini component samples */}
      <div className="flex items-center gap-2">
        <div
          className="px-3 py-1.5 text-[10px] font-medium text-white rounded-md"
          style={{ background: primary, fontFamily: opt.fontStack }}
        >
          Get Started
        </div>
        <div
          className="px-3 py-1.5 text-[10px] font-medium border preview-border rounded-md"
          style={{ fontFamily: opt.fontStack }}
        >
          Learn More
        </div>
        <div
          className="px-2 py-0.5 text-[9px] font-medium rounded"
          style={{ background: `${primary}15`, color: primary, fontFamily: opt.fontStack }}
        >
          v2.0
        </div>
      </div>

      {/* Hierarchy demo */}
      <div className="rounded-lg border preview-border p-3 space-y-1.5">
        <div
          className="text-sm font-semibold"
          style={{ fontFamily: opt.fontStack, letterSpacing: opt.letterSpacing }}
        >
          Section Title
        </div>
        <div className="text-[10px] text-muted-foreground" style={{ fontFamily: opt.fontStack }}>
          Subtitle or description text
        </div>
        <div className="flex gap-4 pt-1">
          <div>
            <div className="text-lg font-bold" style={{ fontFamily: opt.fontStack }}>2,847</div>
            <div className="text-[9px] text-muted-foreground" style={{ fontFamily: opt.fontStack }}>Users</div>
          </div>
          <div>
            <div className="text-lg font-bold" style={{ fontFamily: opt.fontStack }}>98.2%</div>
            <div className="text-[9px] text-muted-foreground" style={{ fontFamily: opt.fontStack }}>Uptime</div>
          </div>
          <div>
            <div className="text-lg font-bold" style={{ fontFamily: opt.fontStack }}>142ms</div>
            <div className="text-[9px] text-muted-foreground" style={{ fontFamily: opt.fontStack }}>Latency</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────── */

export function TypographyCharStep({
  value,
  onChange,
  primary,
}: {
  value: TypographyChar | null;
  onChange: (v: TypographyChar) => void;
  primary: string;
}) {
  return (
    <div>
      <div className="mb-2">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What typography feels right?
        </h2>
        <p className="mt-2 text-base text-muted-foreground">
          Font character shapes the entire personality of your interface.
        </p>
      </div>

      <div className="mt-8 grid gap-4">
        {OPTIONS.map((opt, i) => {
          const isSelected = value === opt.id;
          return (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onChange(opt.id)}
              className={`group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl border-2 text-left transition-all ${
                isSelected
                  ? "border-foreground shadow-xl shadow-foreground/5"
                  : "border-border/40 hover:border-border dark:border-border"
              }`}
            >
              {/* Preview area */}
              <div className="relative flex-1 overflow-hidden bg-muted/30 dark:bg-muted/60 p-6">
                <TypoPreview opt={opt} primary={primary} />
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground shadow-lg"
                  >
                    <svg className="h-4 w-4 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                )}
              </div>
              {/* Label */}
              <div className="p-4 sm:w-48 sm:flex sm:flex-col sm:justify-center border-t sm:border-t-0 sm:border-l border-border/40">
                <div className="text-sm font-semibold">{opt.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{opt.description}</div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
