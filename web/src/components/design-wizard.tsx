"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { generateColorScale, isLight, contrastForeground } from "@/lib/core/color";
import type { Overrides } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

// ── Types ────────────────────────────────────────────────────────

export interface WizardResult {
  overrides: Overrides;
  preferences: Record<string, string>;
}

interface StepProps {
  detail: RefDetail;
  overrides: Overrides;
  preferences: Record<string, string>;
  onOverride: (o: Partial<Overrides>) => void;
  onPref: (key: string, value: string) => void;
}

// ── Animated Text ────────────────────────────────────────────────

function AnimatedHeading({ text, sub }: { text: string; sub?: string }) {
  const words = text.split(" ");
  return (
    <div className="mb-2">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: words.length * 0.08 + 0.1 }}
          className="mt-3 text-base text-muted-foreground sm:text-lg"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

// ── A/B Card ─────────────────────────────────────────────────────

function ABCard({
  label,
  description,
  selected,
  onClick,
  children,
  delay = 0,
}: {
  label: string;
  description: string;
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 text-left transition-colors ${
        selected
          ? "border-foreground shadow-xl shadow-foreground/5"
          : "border-border/40 hover:border-border dark:border-border"
      }`}
    >
      <div className="relative flex min-h-[200px] items-center justify-center bg-muted/30 dark:bg-muted/60 p-6 sm:min-h-[220px]">
        {children}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground shadow-lg"
            >
              <Check className="h-4 w-4 text-background" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="p-4 border-t">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{description}</div>
      </div>
    </motion.button>
  );
}

// ── Steps ────────────────────────────────────────────────────────

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8" />;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border/40 dark:border-border bg-card/50 dark:bg-card/60 transition-colors hover:bg-accent"
    >
      {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
    </button>
  );
}

function IntroStep() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 12, stiffness: 200 }}
        className="mb-8"
      >
        <img src="/logo.png" alt="OMD" className="h-16 object-contain block dark:hidden" />
        <img src="/logo-white.png" alt="OMD" className="h-16 object-contain hidden dark:block" />
      </motion.div>
      <AnimatedHeading
        text="Let's build your design"
        sub="We'll walk you through a series of choices to craft your perfect design system."
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-sm text-muted-foreground"
      >
        Takes about 60 seconds
      </motion.p>
    </div>
  );
}

function ButtonStyleStep({ detail, preferences, onPref }: StepProps) {
  const primary = detail.primary;
  return (
    <div>
      <AnimatedHeading text="How should buttons feel?" sub="This sets the tone for all interactive elements." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ABCard label="Sharp & Precise" description="Small radius, technical, decisive" selected={preferences.buttonStyle === "sharp"} onClick={() => onPref("buttonStyle", "sharp")} delay={0.3}>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3">
              <div className="px-6 py-2.5 text-sm font-medium text-white rounded-md shadow-sm" style={{ background: primary }}>Deploy</div>
              <div className="px-6 py-2.5 text-sm font-medium border preview-border rounded-md">Cancel</div>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 text-xs rounded-md border preview-border">Small</div>
              <div className="px-3 py-1 text-xs rounded-md" style={{ background: `${primary}25`, color: primary }}>Tag</div>
            </div>
          </div>
        </ABCard>
        <ABCard label="Rounded & Friendly" description="Pill shape, approachable, modern" selected={preferences.buttonStyle === "rounded"} onClick={() => onPref("buttonStyle", "rounded")} delay={0.4}>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3">
              <div className="px-6 py-2.5 text-sm font-medium text-white rounded-full shadow-sm" style={{ background: primary }}>Deploy</div>
              <div className="px-6 py-2.5 text-sm font-medium border preview-border rounded-full">Cancel</div>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 text-xs rounded-full border preview-border">Small</div>
              <div className="px-3 py-1 text-xs rounded-full" style={{ background: `${primary}25`, color: primary }}>Tag</div>
            </div>
          </div>
        </ABCard>
      </div>
    </div>
  );
}

function InputStyleStep({ detail, preferences, onPref }: StepProps) {
  const primary = detail.primary;
  return (
    <div>
      <AnimatedHeading text="How should inputs look?" sub="Forms are in every app. This choice cascades to all text fields and selects." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ABCard label="Bordered Box" description="Full border, contained, structured" selected={preferences.inputStyle === "bordered"} onClick={() => onPref("inputStyle", "bordered")} delay={0.3}>
          <div className="w-full max-w-[220px] space-y-3 px-2">
            <div>
              <div className="text-[11px] font-medium mb-1 text-muted-foreground">Email</div>
              <div className="px-3 py-2 text-xs border rounded-lg preview-border bg-background">user@example.com</div>
            </div>
            <div>
              <div className="text-[11px] font-medium mb-1 text-muted-foreground">Password</div>
              <div className="px-3 py-2 text-xs border rounded-lg preview-border bg-background text-muted-foreground">••••••••</div>
            </div>
            <div className="px-4 py-2 text-xs font-medium text-white rounded-lg text-center" style={{ background: primary }}>Sign In</div>
          </div>
        </ABCard>
        <ABCard label="Underline" description="Bottom border only, minimal, Material-style" selected={preferences.inputStyle === "underline"} onClick={() => onPref("inputStyle", "underline")} delay={0.4}>
          <div className="w-full max-w-[220px] space-y-3 px-2">
            <div>
              <div className="text-[11px] font-medium mb-1 text-muted-foreground">Email</div>
              <div className="px-1 py-2 text-xs border-b-2 preview-border">user@example.com</div>
            </div>
            <div>
              <div className="text-[11px] font-medium mb-1 text-muted-foreground">Password</div>
              <div className="px-1 py-2 text-xs border-b-2 preview-border text-muted-foreground">••••••••</div>
            </div>
            <div className="px-4 py-2 text-xs font-medium text-white rounded-lg text-center" style={{ background: primary }}>Sign In</div>
          </div>
        </ABCard>
      </div>
    </div>
  );
}

function DepthStyleStep({ detail, preferences, onPref }: StepProps) {
  const primary = detail.primary;
  return (
    <div>
      <AnimatedHeading text="Flat or elevated?" sub="This controls shadows across every card, dropdown, and dialog." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ABCard label="Flat & Clean" description="Borders only, no shadows, minimal depth" selected={preferences.depthStyle === "flat"} onClick={() => onPref("depthStyle", "flat")} delay={0.3}>
          <div className="flex gap-3">
            <div className="w-32 rounded-xl border preview-border p-3 bg-background">
              <div className="h-2 w-16 rounded bg-foreground/70 mb-2" />
              <div className="h-1.5 w-full rounded bg-muted-foreground/15 mb-1" />
              <div className="h-1.5 w-3/4 rounded bg-muted-foreground/15" />
            </div>
            <div className="w-32 rounded-xl border preview-border p-3 bg-background">
              <div className="h-2 w-12 rounded bg-foreground/70 mb-2" />
              <div className="h-1.5 w-full rounded bg-muted-foreground/15 mb-1" />
              <div className="h-1.5 w-2/3 rounded bg-muted-foreground/15" />
            </div>
          </div>
        </ABCard>
        <ABCard label="Layered & Rich" description="Multi-layer shadows, floating feel" selected={preferences.depthStyle === "layered"} onClick={() => onPref("depthStyle", "layered")} delay={0.4}>
          <div className="flex gap-3">
            <div className="w-32 rounded-xl p-3 bg-card shadow-xl shadow-black/10 dark:shadow-white/5">
              <div className="h-2 w-16 rounded bg-foreground/70 mb-2" />
              <div className="h-1.5 w-full rounded bg-muted-foreground/15 mb-1" />
              <div className="h-1.5 w-3/4 rounded bg-muted-foreground/15" />
            </div>
            <div className="w-32 rounded-xl p-3 bg-card shadow-lg shadow-black/8 dark:shadow-white/3">
              <div className="h-2 w-12 rounded bg-foreground/70 mb-2" />
              <div className="h-1.5 w-full rounded bg-muted-foreground/15 mb-1" />
              <div className="h-1.5 w-2/3 rounded bg-muted-foreground/15" />
            </div>
          </div>
        </ABCard>
      </div>
    </div>
  );
}

function DensityStep({ detail, preferences, onPref }: StepProps) {
  const primary = detail.primary;
  return (
    <div>
      <AnimatedHeading text="Compact or spacious?" sub="This controls padding, gaps, and whitespace across all components." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ABCard label="Compact & Dense" description="Tight padding, small gaps, data-focused" selected={preferences.density === "compact"} onClick={() => onPref("density", "compact")} delay={0.3}>
          <div className="w-full max-w-[240px] rounded-lg border preview-border overflow-hidden bg-background">
            <div className="px-2.5 py-1.5 border-b preview-border text-[10px] font-medium text-muted-foreground" style={{ background: `${primary}06` }}>Notifications</div>
            {["Deployment successful", "New comment on PR #42", "Build failed: main"].map((t, i) => (
              <div key={i} className="px-2.5 py-1.5 text-[10px] border-b last:border-0 preview-border flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full" style={{ background: i === 2 ? "#ef4444" : primary }} />
                {t}
              </div>
            ))}
          </div>
        </ABCard>
        <ABCard label="Open & Spacious" description="Generous whitespace, breathing room" selected={preferences.density === "spacious"} onClick={() => onPref("density", "spacious")} delay={0.4}>
          <div className="w-full max-w-[240px] rounded-xl border preview-border overflow-hidden bg-background">
            <div className="px-4 py-3 border-b preview-border text-[10px] font-medium text-muted-foreground" style={{ background: `${primary}06` }}>Notifications</div>
            {["Deployment successful", "New comment on PR #42", "Build failed: main"].map((t, i) => (
              <div key={i} className="px-4 py-3 text-[10px] border-b last:border-0 preview-border flex items-center gap-3">
                <div className="h-2 w-2 rounded-full" style={{ background: i === 2 ? "#ef4444" : primary }} />
                {t}
              </div>
            ))}
          </div>
        </ABCard>
      </div>
    </div>
  );
}

function SaturationStep({ detail, preferences, onPref, overrides }: StepProps) {
  const primary = overrides.primaryColor || detail.primary;
  return (
    <div>
      <AnimatedHeading text="Muted or vivid?" sub="This controls the intensity of your entire color palette." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ABCard label="Muted & Soft" description="Desaturated palette, pastel accents, calm" selected={preferences.saturation === "muted"} onClick={() => onPref("saturation", "muted")} delay={0.3}>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              {["#8b9fad", "#9db5a0", "#b5a08b", "#a08bb5", "#8badb5"].map((c, i) => (
                <div key={i} className="h-10 w-10 rounded-lg" style={{ background: c }} />
              ))}
            </div>
            <div className="flex gap-2">
              <div className="px-4 py-1.5 text-[10px] font-medium text-white rounded-md" style={{ background: "#7a8e9a" }}>Button</div>
              <div className="px-3 py-1.5 text-[10px] rounded-md" style={{ background: "#7a8e9a20", color: "#7a8e9a" }}>Badge</div>
            </div>
          </div>
        </ABCard>
        <ABCard label="Vivid & Bold" description="High saturation, punchy colors, energetic" selected={preferences.saturation === "vivid"} onClick={() => onPref("saturation", "vivid")} delay={0.4}>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              {["#2563eb", "#16a34a", "#ea580c", "#9333ea", "#0891b2"].map((c, i) => (
                <div key={i} className="h-10 w-10 rounded-lg" style={{ background: c }} />
              ))}
            </div>
            <div className="flex gap-2">
              <div className="px-4 py-1.5 text-[10px] font-medium text-white rounded-md" style={{ background: "#2563eb" }}>Button</div>
              <div className="px-3 py-1.5 text-[10px] rounded-md" style={{ background: "#2563eb20", color: "#2563eb" }}>Badge</div>
            </div>
          </div>
        </ABCard>
      </div>
    </div>
  );
}

function HeaderStyleStep({ detail, preferences, onPref }: StepProps) {
  const primary = detail.primary;
  const border = detail.border || "#e5e7eb";
  return (
    <div>
      <AnimatedHeading text="What's your header vibe?" sub="The first thing users see. It sets the entire mood." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ABCard label="Glass & Floating" description="Backdrop blur, transparent, modern" selected={preferences.headerStyle === "glass"} onClick={() => onPref("headerStyle", "glass")} delay={0.3}>
          <div className="w-full">
            <div className="flex items-center justify-between px-4 py-3 rounded-xl border preview-border" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md bg-foreground/80" />
                <span className="text-xs font-bold">acme</span>
              </div>
              <div className="flex gap-3 text-[10px] text-muted-foreground"><span>Products</span><span>Solutions</span><span>Docs</span></div>
              <div className="px-3 py-1 text-[10px] font-medium text-white rounded-md" style={{ background: primary }}>Sign Up</div>
            </div>
            <div className="mt-3 px-4">
              <div className="h-3 w-32 rounded bg-foreground/10" />
              <div className="mt-2 h-2 w-48 rounded bg-foreground/5" />
            </div>
          </div>
        </ABCard>
        <ABCard label="Solid & Bold" description="Solid dark background, high contrast" selected={preferences.headerStyle === "solid"} onClick={() => onPref("headerStyle", "solid")} delay={0.4}>
          <div className="w-full">
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-foreground text-background">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md bg-background/20" />
                <span className="text-xs font-bold">acme</span>
              </div>
              <div className="flex gap-3 text-[10px] opacity-60"><span>Products</span><span>Solutions</span><span>Docs</span></div>
              <div className="px-3 py-1 text-[10px] font-medium rounded-md bg-background text-foreground">Sign Up</div>
            </div>
            <div className="mt-3 px-4">
              <div className="h-3 w-32 rounded bg-foreground/10" />
              <div className="mt-2 h-2 w-48 rounded bg-foreground/5" />
            </div>
          </div>
        </ABCard>
      </div>
    </div>
  );
}

function CardStyleStep({ detail, preferences, onPref }: StepProps) {
  const border = detail.border || "#e5e7eb";
  const primary = detail.primary;
  return (
    <div>
      <AnimatedHeading text="How should cards be defined?" sub="Cards contain your main content blocks." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ABCard label="Subtle Border" description="Thin border, no shadow, flat hierarchy" selected={preferences.cardStyle === "bordered"} onClick={() => onPref("cardStyle", "bordered")} delay={0.3}>
          <div className="w-48 rounded-xl border p-4 preview-border">
            <div className="h-2.5 w-20 rounded bg-foreground/70 mb-3" />
            <div className="h-2 w-full rounded bg-muted-foreground/15 mb-1.5" />
            <div className="h-2 w-3/4 rounded bg-muted-foreground/15 mb-4" />
            <div className="h-7 w-20 rounded-md" style={{ background: `${primary}15` }} />
          </div>
        </ABCard>
        <ABCard label="Elevated Shadow" description="Shadow depth, floating, layered" selected={preferences.cardStyle === "elevated"} onClick={() => onPref("cardStyle", "elevated")} delay={0.4}>
          <div className="w-48 rounded-xl p-4 bg-card shadow-xl shadow-black/10 dark:shadow-white/5">
            <div className="h-2.5 w-20 rounded bg-foreground/70 mb-3" />
            <div className="h-2 w-full rounded bg-muted-foreground/15 mb-1.5" />
            <div className="h-2 w-3/4 rounded bg-muted-foreground/15 mb-4" />
            <div className="h-7 w-20 rounded-md" style={{ background: `${primary}15` }} />
          </div>
        </ABCard>
      </div>
    </div>
  );
}

function ColorStep({ detail, overrides, onOverride }: StepProps) {
  const primary = overrides.primaryColor || detail.primary;
  const scale = generateColorScale(primary);
  const COLORS = [
    { hex: "#000000", name: "Black" }, { hex: "#171717", name: "Zinc" },
    { hex: "#2563eb", name: "Blue" }, { hex: "#6366f1", name: "Indigo" },
    { hex: "#7c3aed", name: "Violet" }, { hex: "#a855f7", name: "Purple" },
    { hex: "#ec4899", name: "Pink" }, { hex: "#ef4444", name: "Red" },
    { hex: "#f97316", name: "Orange" }, { hex: "#22c55e", name: "Green" },
    { hex: "#06b6d4", name: "Cyan" }, { hex: "#0ea5e9", name: "Sky" },
  ];
  return (
    <div>
      <AnimatedHeading text="Pick your brand color" sub="This drives buttons, links, focus rings, and accents." />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-6">
        {COLORS.map((c) => (
          <button key={c.hex} onClick={() => onOverride({ primaryColor: c.hex })}
            className={`group flex flex-col items-center gap-2 rounded-xl p-3 transition-all ${primary === c.hex ? "bg-muted ring-2 ring-foreground ring-offset-2 ring-offset-background" : "hover:bg-muted/50"}`}>
            <div className="h-12 w-12 rounded-xl shadow-sm transition-transform group-hover:scale-110" style={{ background: c.hex }} />
            <span className="text-xs font-medium">{c.name}</span>
          </button>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6 flex items-center gap-3">
        <input type="color" value={primary} onChange={(e) => onOverride({ primaryColor: e.target.value })} className="h-10 w-10 cursor-pointer rounded-lg border-0 p-0" />
        <Input value={primary} onChange={(e) => { if (/^#[0-9a-fA-F]{0,6}$/.test(e.target.value)) onOverride({ primaryColor: e.target.value }); }} className="w-32 font-mono" placeholder="#000000" />
        <span className="text-xs text-muted-foreground">or pick custom</span>
      </motion.div>
      {/* Scale preview */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6 flex overflow-hidden rounded-xl border border-border/40 dark:border-border">
        {Object.entries(scale).map(([stop, hex]) => (
          <div key={stop} className="flex-1 py-6 sm:py-8 text-center text-[10px] sm:text-xs font-mono transition-colors" style={{ background: hex, color: isLight(hex) ? "#000" : "#fff" }}>
            {stop}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function TypographyStep({ detail, overrides, onOverride }: StepProps) {
  const weight = overrides.headingWeight || detail.headingWeight;
  const font = overrides.fontFamily || detail.fontFamily;
  const WEIGHTS: { value: string; label: string; desc: string }[] = [
    { value: "300", label: "Light", desc: "Whisper-level elegance" },
    { value: "400", label: "Regular", desc: "Neutral, balanced" },
    { value: "500", label: "Medium", desc: "Slightly emphasized" },
    { value: "600", label: "Semibold", desc: "Strong and confident" },
    { value: "700", label: "Bold", desc: "Maximum impact" },
  ];
  return (
    <div>
      <AnimatedHeading text="How bold should headings be?" sub="This controls the visual weight of all titles and headings across your UI." />
      <div className="mt-8 grid grid-cols-5 gap-3">
        {WEIGHTS.map((w, i) => (
          <motion.button
            key={w.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.06 }}
            onClick={() => onOverride({ headingWeight: w.value })}
            className={`flex flex-col items-center rounded-xl border p-5 transition-all ${weight === w.value ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/30"}`}
          >
            <div className="text-3xl leading-none mb-3" style={{ fontWeight: Number(w.value), fontFamily: font }}>Aa</div>
            <div className="text-xs font-medium">{w.label}</div>
            <div className="text-[10px] mt-0.5 opacity-50">{w.desc}</div>
          </motion.button>
        ))}
      </div>
      {/* Live comparison — show multiple UI elements affected */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 rounded-xl border border-border/40 dark:border-border overflow-hidden"
      >
        <div className="px-5 py-3 border-b border-border/40 dark:border-border bg-muted/20">
          <p className="text-xs text-muted-foreground">How it looks across your UI</p>
        </div>
        <div className="p-5 space-y-5">
          {/* Page title */}
          <div>
            <h2 className="text-3xl tracking-tight" style={{ fontWeight: Number(weight) }}>Dashboard Overview</h2>
            <p className="text-sm text-muted-foreground mt-1">Welcome back. Here is what is happening today.</p>
          </div>
          {/* Card titles */}
          <div className="grid grid-cols-3 gap-3">
            {["Total Revenue", "Active Users", "Conversion"].map((t) => (
              <div key={t} className="rounded-lg border border-border/40 dark:border-border p-3">
                <p className="text-xs text-muted-foreground mb-1">{t}</p>
                <p className="text-xl" style={{ fontWeight: Number(weight) }}>$12,345</p>
              </div>
            ))}
          </div>
          {/* Section heading */}
          <div>
            <h3 className="text-lg mb-1" style={{ fontWeight: Number(weight) }}>Recent Activity</h3>
            <p className="text-xs text-muted-foreground">Body text, labels, and descriptions stay at regular weight.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function RadiusStep({ detail, overrides, onOverride }: StepProps) {
  const radius = overrides.borderRadius || detail.radius.replace(/[-–].*/, "").trim();
  const primary = overrides.primaryColor || detail.primary;
  const OPTIONS = [
    { value: "0px", label: "Sharp", desc: "No rounding" },
    { value: "4px", label: "Tight", desc: "Subtle rounding" },
    { value: "8px", label: "Medium", desc: "Balanced" },
    { value: "12px", label: "Soft", desc: "Friendly feel" },
    { value: "9999px", label: "Pill", desc: "Fully rounded" },
  ];
  return (
    <div>
      <AnimatedHeading text="Choose your corner style" sub="Radius affects the entire feel — sharp is technical, round is friendly." />
      <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-5">
        {OPTIONS.map((r, i) => (
          <motion.button
            key={r.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.06 }}
            onClick={() => onOverride({ borderRadius: r.value })}
            className={`flex flex-col items-center rounded-xl border p-3 sm:p-4 transition-all ${radius === r.value ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/30"}`}
          >
            <div className="mb-2 sm:mb-3 h-12 w-12 sm:h-14 sm:w-14 border-2 border-current opacity-40" style={{ borderRadius: r.value }} />
            <div className="text-xs font-medium">{r.label}</div>
            <div className="text-[11px] opacity-60">{r.desc}</div>
          </motion.button>
        ))}
      </div>
      {/* Live comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex items-center gap-4 justify-center"
      >
        <div className="px-5 py-2 text-sm font-medium text-white" style={{ background: primary, borderRadius: radius, color: contrastForeground(primary) }}>Button</div>
        <div className="px-4 py-2 text-sm border preview-border" style={{ borderRadius: radius }}>Input</div>
        <div className="px-3 py-1 text-xs font-medium" style={{ background: `${primary}15`, color: primary, borderRadius: radius }}>Badge</div>
      </motion.div>
    </div>
  );
}

function DarkModeStep({ overrides, onOverride }: StepProps) {
  return (
    <div>
      <AnimatedHeading text="One last thing" sub="Should we generate dark mode tokens too?" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 grid gap-4 sm:grid-cols-2"
      >
        <button
          onClick={() => onOverride({ darkMode: true })}
          className={`flex flex-col items-center rounded-2xl border-2 p-8 transition-all ${overrides.darkMode ? "border-foreground shadow-xl" : "border-border/40 hover:border-border dark:border-border"}`}
        >
          <div className="mb-4 h-24 w-40 rounded-xl bg-zinc-900 p-3">
            <div className="h-2 w-12 rounded bg-white/70 mb-2" />
            <div className="h-1.5 w-full rounded bg-white/20 mb-1" />
            <div className="h-1.5 w-3/4 rounded bg-white/20" />
          </div>
          <div className="text-sm font-semibold">Yes, include dark mode</div>
          <div className="text-xs text-muted-foreground mt-1">Generate .dark CSS variables</div>
        </button>
        <button
          onClick={() => onOverride({ darkMode: false })}
          className={`flex flex-col items-center rounded-2xl border-2 p-8 transition-all ${!overrides.darkMode ? "border-foreground shadow-xl" : "border-border/40 hover:border-border dark:border-border"}`}
        >
          <div className="mb-4 h-24 w-40 rounded-xl bg-white border p-3" style={{ borderColor: "#e5e7eb" }}>
            <div className="h-2 w-12 rounded bg-zinc-800 mb-2" />
            <div className="h-1.5 w-full rounded bg-zinc-200 mb-1" />
            <div className="h-1.5 w-3/4 rounded bg-zinc-200" />
          </div>
          <div className="text-sm font-semibold">Light only</div>
          <div className="text-xs text-muted-foreground mt-1">Keep it simple</div>
        </button>
      </motion.div>
    </div>
  );
}

function SummaryStep({ detail, overrides, preferences }: StepProps) {
  const primary = overrides.primaryColor || detail.primary;
  const scale = generateColorScale(primary);
  return (
    <div className="flex flex-col items-center text-center min-h-[50vh] justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 12, stiffness: 200 }}
        className="mb-6"
      >
        <img src="/logo.png" alt="OMD" className="h-14 object-contain block dark:hidden" />
        <img src="/logo-white.png" alt="OMD" className="h-14 object-contain hidden dark:block" />
      </motion.div>
      <AnimatedHeading text="Your design is ready" sub="Review the live preview and export your DESIGN.md" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex overflow-hidden rounded-xl w-full max-w-md"
      >
        {Object.values(scale).map((hex, i) => (
          <div key={i} className="flex-1 h-4" style={{ background: hex }} />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground"
      >
        <span className="rounded-full border px-3 py-1">{overrides.fontFamily || detail.fontFamily}</span>
        <span className="rounded-full border px-3 py-1">Radius {overrides.borderRadius || detail.radius}</span>
        <span className="rounded-full border px-3 py-1">{overrides.darkMode ? "Dark + Light" : "Light only"}</span>
        {Object.entries(preferences).map(([k, v]) => (
          <span key={k} className="rounded-full border px-3 py-1">{k}: {v}</span>
        ))}
      </motion.div>
    </div>
  );
}

// ── Main Wizard ──────────────────────────────────────────────────

const STEP_LABELS = ["Intro", "Buttons", "Inputs", "Header", "Cards", "Density", "Color", "Radius", "Dark Mode", "Summary"];

export function DesignWizard({
  detail,
  overrides,
  onChange,
  onComplete,
  onBack,
  onPreferencesChange,
}: {
  detail: RefDetail;
  overrides: Overrides;
  onChange: (o: Overrides) => void;
  onComplete: () => void;
  onBack: () => void;
  onPreferencesChange?: (prefs: Record<string, string>) => void;
}) {
  const [step, setStep] = useState(0);
  const [prefs, setPrefs] = useState<Record<string, string>>({
    buttonStyle: "sharp",
    inputStyle: "bordered",
    headerStyle: "glass",
    cardStyle: "bordered",
    density: "spacious",
  });
  const [direction, setDirection] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset scroll on step change
  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [step]);

  // Lock body scroll when wizard is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const onOverride = useCallback((partial: Partial<Overrides>) => {
    onChange({ ...overrides, ...partial });
  }, [overrides, onChange]);

  const onPref = useCallback((key: string, value: string) => {
    setPrefs((p) => ({ ...p, [key]: value }));
  }, []);

  // Sync preferences to parent via useEffect (avoids setState during render)
  useEffect(() => {
    onPreferencesChange?.(prefs);
  }, [prefs, onPreferencesChange]);

  const stepProps: StepProps = { detail, overrides, preferences: prefs, onOverride, onPref };

  const steps = [
    <IntroStep key="intro" />,
    <ButtonStyleStep key="btn" {...stepProps} />,
    <InputStyleStep key="inp" {...stepProps} />,
    <HeaderStyleStep key="hdr" {...stepProps} />,
    <CardStyleStep key="card" {...stepProps} />,
    <DensityStep key="density" {...stepProps} />,
    <ColorStep key="clr" {...stepProps} />,
    <RadiusStep key="rad" {...stepProps} />,
    <DarkModeStep key="dm" {...stepProps} />,
    <SummaryStep key="sum" {...stepProps} />,
  ];

  const totalSteps = steps.length;
  const isLast = step === totalSteps - 1;
  const isFirst = step === 0;
  const progress = ((step) / (totalSteps - 1)) * 100;

  const goNext = () => { setDirection(1); setStep((s) => Math.min(s + 1, totalSteps - 1)); };
  const goPrev = () => { setDirection(-1); setStep((s) => Math.max(s - 1, 0)); };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* Progress bar */}
      <div className="h-1 w-full bg-muted">
        <motion.div
          className="h-full bg-foreground"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border/40 safe-top">
        <button onClick={onBack} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4 inline mr-1" /> Exit
        </button>
        <span className="text-xs text-muted-foreground">
          {step + 1} / {totalSteps} &middot; {STEP_LABELS[step]}
        </span>
        <ThemeToggle />
      </div>

      {/* Content */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {steps[step]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-border/40 px-4 sm:px-6 py-3 sm:py-4 safe-bottom">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <button
            onClick={goPrev}
            disabled={isFirst}
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all disabled:opacity-0 hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          {/* Step dots */}
          <div className="flex gap-1">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > step ? 1 : -1); setStep(i); }}
                className="flex items-center justify-center h-8 w-4 sm:w-auto"
              >
                <span className={`block h-1.5 rounded-full transition-all ${
                  i === step ? "w-5 sm:w-6 bg-foreground" : i < step ? "w-1.5 bg-foreground/40" : "w-1.5 bg-muted-foreground/20"
                }`} />
              </button>
            ))}
          </div>

          {isLast ? (
            <button
              onClick={onComplete}
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 shadow-md shadow-primary/20"
            >
              View Preview <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={goNext}
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 shadow-md shadow-primary/20"
            >
              {isFirst ? "Let's Go" : "Next"} <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
