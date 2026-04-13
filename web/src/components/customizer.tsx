"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Paintbrush, Type, Square, Layers, Table2, ChevronDown, MousePointerClick, PanelTop, MessageSquare, ToggleLeft } from "lucide-react";
import { generateColorScale, isLight, contrastForeground } from "@/lib/core/color";
import type { Overrides } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ABPicker, type ABQuestion } from "@/components/ab-picker";
import { ComponentModal, type ComponentVariant } from "@/components/component-modal";

// ── Preference state ─────────────────────────────────────────────

export interface StylePreferences {
  buttonStyle: string;
  tableStyle: string;
  headerStyle: string;
  cardStyle: string;
  dropdownStyle: string;
  fabStyle: string;
}

const DEFAULT_PREFS: StylePreferences = {
  buttonStyle: "sharp",
  tableStyle: "minimal",
  headerStyle: "floating",
  cardStyle: "bordered",
  dropdownStyle: "compact",
  fabStyle: "circle",
};

// ── Color presets ────────────────────────────────────────────────

const COLOR_PRESETS = [
  "#000000", "#171717", "#2563eb", "#6366f1", "#7c3aed",
  "#a855f7", "#ec4899", "#ef4444", "#f97316", "#22c55e",
  "#06b6d4", "#0ea5e9",
];

const FONT_OPTIONS = [
  { value: "Geist", label: "Geist", hint: "Vercel's own" },
  { value: "Inter", label: "Inter", hint: "Clean geometric" },
  { value: "system-ui", label: "System UI", hint: "Native OS" },
  { value: "JetBrains Mono", label: "JetBrains Mono", hint: "Monospace" },
];

const WEIGHT_OPTIONS = ["300", "400", "500", "600", "700"];

const RADIUS_OPTIONS = [
  { value: "0px", label: "None", shape: "0" },
  { value: "4px", label: "Tight", shape: "4px" },
  { value: "6px", label: "Medium", shape: "6px" },
  { value: "8px", label: "Soft", shape: "8px" },
  { value: "12px", label: "Round", shape: "12px" },
  { value: "9999px", label: "Pill", shape: "9999px" },
];

// ── Component ────────────────────────────────────────────────────

export function Customizer({
  detail,
  overrides,
  onChange,
  onNext,
  onBack,
}: {
  detail: RefDetail;
  overrides: Overrides;
  onChange: (o: Overrides) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [prefs, setPrefs] = useState<StylePreferences>(DEFAULT_PREFS);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [section, setSection] = useState<"taste" | "tokens" | "components">("taste");

  const primary = overrides.primaryColor || detail.primary;
  const font = overrides.fontFamily || detail.fontFamily;
  const weight = overrides.headingWeight || detail.headingWeight;
  const radius = overrides.borderRadius || detail.radius.replace(/[-–].*/, "").trim();
  const scale = useMemo(() => generateColorScale(primary), [primary]);
  const fg = contrastForeground(primary);
  const border = detail.border || "#e5e7eb";

  // ── A/B Questions ────────────────────────────────────────────

  const abQuestions: ABQuestion[] = [
    {
      id: "buttonStyle",
      title: "Button Style",
      subtitle: "How should your primary buttons feel?",
      optionA: {
        id: "sharp",
        label: "Sharp & Precise",
        description: "Small radius, solid fill, technical feel",
        preview: (
          <div className="flex items-center justify-center h-full gap-3 p-4">
            <div className="px-4 py-2 text-xs font-medium text-white rounded" style={{ background: primary, borderRadius: "4px" }}>Get Started</div>
            <div className="px-4 py-2 text-xs font-medium border rounded" style={{ borderRadius: "4px", borderColor: border }}>Learn More</div>
          </div>
        ),
      },
      optionB: {
        id: "rounded",
        label: "Rounded & Friendly",
        description: "Pill shape, soft feel, approachable",
        preview: (
          <div className="flex items-center justify-center h-full gap-3 p-4">
            <div className="px-5 py-2 text-xs font-medium text-white rounded-full" style={{ background: primary }}>Get Started</div>
            <div className="px-5 py-2 text-xs font-medium border rounded-full" style={{ borderColor: border }}>Learn More</div>
          </div>
        ),
      },
    },
    {
      id: "tableStyle",
      title: "Table Style",
      subtitle: "How should data tables look?",
      optionA: {
        id: "minimal",
        label: "Minimal Lines",
        description: "Divider lines only, clean and airy",
        preview: (
          <div className="p-3 text-[10px]">
            <div className="flex font-medium opacity-50 pb-1.5 border-b" style={{ borderColor: border }}>
              <span className="flex-1">Name</span><span className="w-16">Role</span><span className="w-16 text-right">Status</span>
            </div>
            {["Kim / Dev / Active", "Lee / PM / Pending"].map((row, i) => {
              const [n, r, s] = row.split(" / ");
              return (
                <div key={i} className="flex py-1.5 border-b" style={{ borderColor: `${border}60` }}>
                  <span className="flex-1">{n}</span><span className="w-16 opacity-60">{r}</span>
                  <span className="w-16 text-right">{s}</span>
                </div>
              );
            })}
          </div>
        ),
      },
      optionB: {
        id: "bordered",
        label: "Bordered & Striped",
        description: "Full borders with alternating row backgrounds",
        preview: (
          <div className="p-3 text-[10px] border rounded" style={{ borderColor: border }}>
            <div className="flex font-medium pb-1.5 border-b" style={{ borderColor: border }}>
              <span className="flex-1">Name</span><span className="w-16">Role</span><span className="w-16 text-right">Status</span>
            </div>
            {["Kim / Dev / Active", "Lee / PM / Pending"].map((row, i) => {
              const [n, r, s] = row.split(" / ");
              return (
                <div key={i} className="flex py-1.5" style={{ background: i % 2 === 1 ? `${primary}08` : "transparent" }}>
                  <span className="flex-1">{n}</span><span className="w-16 opacity-60">{r}</span>
                  <span className="w-16 text-right">{s}</span>
                </div>
              );
            })}
          </div>
        ),
      },
    },
    {
      id: "headerStyle",
      title: "Navigation Header",
      subtitle: "What kind of top bar do you prefer?",
      optionA: {
        id: "floating",
        label: "Floating & Transparent",
        description: "Blur backdrop, border bottom, glass effect",
        preview: (
          <div className="p-2">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg border backdrop-blur" style={{ borderColor: `${border}60`, background: "rgba(255,255,255,0.5)" }}>
              <div className="flex items-center gap-2"><div className="h-4 w-4 rounded bg-foreground/80" /><span className="text-[10px] font-semibold">Brand</span></div>
              <div className="flex gap-2 text-[9px] opacity-50"><span>Home</span><span>Docs</span><span>Blog</span></div>
              <div className="px-2 py-0.5 text-[9px] text-white rounded" style={{ background: primary, borderRadius: "4px" }}>Sign Up</div>
            </div>
            <div className="mt-2 h-8 bg-gradient-to-b from-muted/30 to-transparent rounded" />
          </div>
        ),
      },
      optionB: {
        id: "solid",
        label: "Solid & Distinct",
        description: "Solid background, clear separation",
        preview: (
          <div className="p-2">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-foreground text-background">
              <div className="flex items-center gap-2"><div className="h-4 w-4 rounded bg-background/20" /><span className="text-[10px] font-semibold">Brand</span></div>
              <div className="flex gap-2 text-[9px] opacity-50"><span>Home</span><span>Docs</span><span>Blog</span></div>
              <div className="px-2 py-0.5 text-[9px] rounded bg-background text-foreground" style={{ borderRadius: "4px" }}>Sign Up</div>
            </div>
            <div className="mt-2 h-8" />
          </div>
        ),
      },
    },
    {
      id: "cardStyle",
      title: "Card Style",
      subtitle: "How should content cards appear?",
      optionA: {
        id: "bordered",
        label: "Bordered",
        description: "Clean border, no shadow, subtle separation",
        preview: (
          <div className="flex justify-center p-4">
            <div className="w-40 rounded-lg border p-3" style={{ borderColor: border }}>
              <div className="h-2 w-16 rounded bg-foreground/70 mb-2" />
              <div className="h-1.5 w-full rounded bg-muted-foreground/20 mb-1" />
              <div className="h-1.5 w-3/4 rounded bg-muted-foreground/20" />
            </div>
          </div>
        ),
      },
      optionB: {
        id: "elevated",
        label: "Elevated",
        description: "Shadow depth, floating feel",
        preview: (
          <div className="flex justify-center p-4">
            <div className="w-40 rounded-lg p-3 shadow-lg bg-card">
              <div className="h-2 w-16 rounded bg-foreground/70 mb-2" />
              <div className="h-1.5 w-full rounded bg-muted-foreground/20 mb-1" />
              <div className="h-1.5 w-3/4 rounded bg-muted-foreground/20" />
            </div>
          </div>
        ),
      },
    },
  ];

  // ── Component gallery data ───────────────────────────────────

  const componentItems = [
    {
      id: "dropdown",
      icon: ChevronDown,
      label: "Dropdown Menu",
      desc: "Context menus & select dropdowns",
      variants: [
        {
          id: "compact", label: "Compact",
          preview: (
            <div className="w-44 rounded-md border shadow-lg p-1" style={{ borderColor: border }}>
              {["Edit", "Duplicate", "Archive"].map((item) => (
                <div key={item} className="px-3 py-1.5 text-xs rounded hover:bg-muted cursor-default">{item}</div>
              ))}
              <div className="my-1 h-px bg-border" />
              <div className="px-3 py-1.5 text-xs rounded text-red-500">Delete</div>
            </div>
          ),
        },
        {
          id: "spacious", label: "Spacious with Icons",
          preview: (
            <div className="w-52 rounded-lg border shadow-xl p-1.5" style={{ borderColor: border }}>
              {[
                { icon: "✏️", label: "Edit", hint: "⌘E" },
                { icon: "📋", label: "Duplicate", hint: "⌘D" },
                { icon: "📦", label: "Archive", hint: "" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 px-3 py-2 text-xs rounded-md hover:bg-muted cursor-default">
                  <span>{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                  {item.hint && <span className="text-[10px] text-muted-foreground">{item.hint}</span>}
                </div>
              ))}
            </div>
          ),
        },
      ],
    },
    {
      id: "fab",
      icon: MousePointerClick,
      label: "Floating Action Button",
      desc: "Fixed position CTA button",
      variants: [
        {
          id: "circle", label: "Circle Icon",
          preview: (
            <div className="flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg" style={{ background: primary }}>
                <span className="text-lg">+</span>
              </div>
            </div>
          ),
        },
        {
          id: "extended", label: "Extended with Label",
          preview: (
            <div className="flex justify-center">
              <div className="flex h-10 items-center gap-2 rounded-full px-5 text-xs font-medium text-white shadow-lg" style={{ background: primary }}>
                <span>+</span> New Item
              </div>
            </div>
          ),
        },
        {
          id: "stacked", label: "Speed Dial Stack",
          preview: (
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs shadow" style={{ borderColor: border }}>📎</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs shadow" style={{ borderColor: border }}>📷</div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg" style={{ background: primary }}>
                <span className="text-base">+</span>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "header",
      icon: PanelTop,
      label: "Page Header",
      desc: "Hero section & page titles",
      variants: [
        {
          id: "centered", label: "Centered Hero",
          preview: (
            <div className="text-center p-4">
              <div className="text-sm font-bold mb-1" style={{ fontWeight: Number(weight) }}>Ship faster with Next.js</div>
              <div className="text-[10px] text-muted-foreground mb-3">The React framework for production</div>
              <div className="flex justify-center gap-2">
                <div className="px-3 py-1 text-[10px] font-medium text-white rounded" style={{ background: primary, borderRadius: radius }}>Deploy</div>
                <div className="px-3 py-1 text-[10px] font-medium border rounded" style={{ borderColor: border, borderRadius: radius }}>Learn</div>
              </div>
            </div>
          ),
        },
        {
          id: "left-aligned", label: "Left Aligned",
          preview: (
            <div className="p-4">
              <div className="text-[10px] font-medium mb-1 px-2 py-0.5 rounded-full inline-block" style={{ background: `${primary}15`, color: primary }}>New Release</div>
              <div className="text-sm font-bold mt-2 mb-1" style={{ fontWeight: Number(weight) }}>Ship faster with Next.js</div>
              <div className="text-[10px] text-muted-foreground mb-3 max-w-[200px]">The React framework for production-grade applications</div>
              <div className="px-3 py-1 text-[10px] font-medium text-white rounded inline-block" style={{ background: primary, borderRadius: radius }}>Get Started</div>
            </div>
          ),
        },
      ],
    },
    {
      id: "toast",
      icon: MessageSquare,
      label: "Toast / Notification",
      desc: "Feedback messages",
      variants: [
        {
          id: "minimal", label: "Minimal Bar",
          preview: (
            <div className="flex items-center gap-3 rounded-lg border p-3 shadow-md" style={{ borderColor: border }}>
              <span className="text-green-500 text-sm">✓</span>
              <div className="flex-1"><div className="text-xs font-medium">Changes saved</div></div>
              <span className="text-[10px] text-muted-foreground cursor-pointer">Undo</span>
            </div>
          ),
        },
        {
          id: "rich", label: "Rich with Description",
          preview: (
            <div className="rounded-lg border p-3 shadow-xl" style={{ borderColor: border }}>
              <div className="flex items-start gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-500 text-xs">✓</div>
                <div className="flex-1">
                  <div className="text-xs font-medium">Successfully deployed</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Your changes are now live at vercel.app</div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "toggle",
      icon: ToggleLeft,
      label: "Toggle / Tabs",
      desc: "Segmented controls",
      variants: [
        {
          id: "underline", label: "Underline Tabs",
          preview: (
            <div className="flex gap-4 border-b pb-px" style={{ borderColor: border }}>
              {["Overview", "Analytics", "Settings"].map((t, i) => (
                <div key={t} className={`pb-2 text-xs font-medium ${i === 0 ? "border-b-2 border-foreground" : "text-muted-foreground"}`}>{t}</div>
              ))}
            </div>
          ),
        },
        {
          id: "pill", label: "Pill Tabs",
          preview: (
            <div className="flex gap-1 rounded-lg bg-muted p-1">
              {["Overview", "Analytics", "Settings"].map((t, i) => (
                <div key={t} className={`px-3 py-1 text-xs font-medium rounded-md ${i === 0 ? "bg-background shadow-sm" : "text-muted-foreground"}`}>{t}</div>
              ))}
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Customize your design</h2>
          <p className="text-sm text-muted-foreground mt-1">Based on {detail.id.charAt(0).toUpperCase() + detail.id.slice(1)}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onBack}>Back</Button>
          <Button size="sm" onClick={onNext}>Preview & Export <ChevronRight className="ml-1 h-3.5 w-3.5" /></Button>
        </div>
      </motion.div>

      {/* Section tabs */}
      <div className="flex gap-1 mb-8 rounded-lg bg-muted/50 p-1 w-fit">
        {([
          { key: "taste", label: "Style Taste", icon: Paintbrush },
          { key: "tokens", label: "Design Tokens", icon: Type },
          { key: "components", label: "Components", icon: Layers },
        ] as const).map((s) => (
          <button
            key={s.key}
            onClick={() => setSection(s.key)}
            className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-all ${
              section === s.key ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <s.icon className="h-3.5 w-3.5" />
            {s.label}
          </button>
        ))}
      </div>

      {/* ── TASTE TAB: A/B choices ──────────────────────── */}
      {section === "taste" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-10"
        >
          {abQuestions.map((q) => (
            <ABPicker
              key={q.id}
              question={q}
              selected={prefs[q.id as keyof StylePreferences]}
              onSelect={(val) => setPrefs({ ...prefs, [q.id as keyof StylePreferences]: val })}
            />
          ))}
        </motion.div>
      )}

      {/* ── TOKENS TAB: Color, Font, Weight, Radius ────── */}
      {section === "tokens" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-8 lg:grid-cols-[1fr_340px]"
        >
          <div className="space-y-8">
            {/* Primary Color */}
            <section>
              <Label className="text-sm font-semibold mb-3 block">Primary Color</Label>
              <div className="flex flex-wrap gap-2 mb-3">
                {COLOR_PRESETS.map((c) => (
                  <button
                    key={c}
                    onClick={() => onChange({ ...overrides, primaryColor: c })}
                    className={`h-8 w-8 rounded-lg transition-all hover:scale-110 ${primary === c ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""}`}
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input type="color" value={primary} onChange={(e) => onChange({ ...overrides, primaryColor: e.target.value })} className="h-9 w-9 cursor-pointer rounded border-0 p-0" />
                <Input value={primary} onChange={(e) => { if (/^#[0-9a-fA-F]{0,6}$/.test(e.target.value)) onChange({ ...overrides, primaryColor: e.target.value }); }} className="w-28 font-mono text-sm" />
                <Button variant="outline" size="sm" onClick={() => onChange({ ...overrides, primaryColor: detail.primary })}>Reset</Button>
              </div>
              <div className="mt-3 flex overflow-hidden rounded-lg border border-border/60 dark:border-border">
                {Object.entries(scale).map(([stop, hex]) => (
                  <div key={stop} className="flex-1 py-5 text-center text-[9px] font-mono cursor-pointer hover:opacity-80 transition-opacity" style={{ background: hex, color: isLight(hex) ? "#000" : "#fff" }} onClick={() => navigator.clipboard.writeText(hex)} title={hex}>
                    {stop}
                  </div>
                ))}
              </div>
            </section>

            <Separator />

            {/* Font */}
            <section>
              <Label className="text-sm font-semibold mb-3 block">Font Family</Label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {FONT_OPTIONS.map((f) => (
                  <button key={f.value} onClick={() => onChange({ ...overrides, fontFamily: f.value })} className={`rounded-lg border px-3 py-3 text-left transition-all ${(overrides.fontFamily || detail.fontFamily) === f.value ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/30"}`}>
                    <div className="text-sm font-medium" style={{ fontFamily: f.value }}>{f.label}</div>
                    <div className="text-[10px] opacity-60">{f.hint}</div>
                  </button>
                ))}
              </div>
            </section>

            <Separator />

            {/* Weight */}
            <section>
              <Label className="text-sm font-semibold mb-3 block">Heading Weight</Label>
              <div className="flex gap-2">
                {WEIGHT_OPTIONS.map((w) => (
                  <button key={w} onClick={() => onChange({ ...overrides, headingWeight: w })} className={`flex-1 rounded-lg border py-3 text-center transition-all ${(overrides.headingWeight || detail.headingWeight) === w ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/30"}`}>
                    <div className="text-lg leading-none" style={{ fontWeight: Number(w) }}>Aa</div>
                    <div className="text-[10px] mt-1 opacity-60">{w}</div>
                  </button>
                ))}
              </div>
            </section>

            <Separator />

            {/* Radius */}
            <section>
              <Label className="text-sm font-semibold mb-3 block">Border Radius</Label>
              <div className="flex gap-2">
                {RADIUS_OPTIONS.map((r) => (
                  <button key={r.value} onClick={() => onChange({ ...overrides, borderRadius: r.value })} className={`flex-1 rounded-lg border py-3 text-center transition-all ${(overrides.borderRadius || radius) === r.value ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/30"}`}>
                    <div className="mx-auto h-7 w-7 border-2 border-current opacity-40" style={{ borderRadius: r.shape }} />
                    <div className="text-[10px] mt-1">{r.label}</div>
                  </button>
                ))}
              </div>
            </section>

            <Separator />

            {/* Dark Mode */}
            <section className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-semibold">Dark Mode Tokens</Label>
                <p className="text-xs text-muted-foreground mt-0.5">Generate .dark CSS variables</p>
              </div>
              <Switch checked={overrides.darkMode} onCheckedChange={(checked) => onChange({ ...overrides, darkMode: checked })} />
            </section>
          </div>

          {/* Mini preview sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-20 rounded-xl border border-border/60 dark:border-border overflow-hidden" style={{ background: detail.background, color: detail.foreground, fontFamily: `"${font}", system-ui` }}>
              <div className="p-5 space-y-4">
                <h3 className="text-base" style={{ fontWeight: Number(weight) }}>Live Preview</h3>
                <p className="text-xs opacity-50">Updates as you change tokens</p>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 text-xs font-medium text-white" style={{ background: primary, borderRadius: radius, color: fg }}>Primary</div>
                  <div className="px-3 py-1.5 text-xs font-medium border" style={{ borderColor: border, borderRadius: radius }}>Outline</div>
                </div>
                <div className="flex gap-1.5">
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded-full" style={{ background: primary, color: fg }}>Active</span>
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded-full border" style={{ borderColor: border }}>Draft</span>
                </div>
                <input className="w-full px-3 py-1.5 text-xs border bg-transparent outline-none" style={{ borderColor: border, borderRadius: radius }} placeholder="Input..." readOnly />
              </div>
              <div className="flex">{Object.values(scale).map((hex, i) => <div key={i} className="flex-1 h-2" style={{ background: hex }} />)}</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ── COMPONENTS TAB: Interactive gallery ─────────── */}
      {section === "components" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-sm text-muted-foreground mb-6">Click a component to choose your preferred variant. Your choices will be reflected in the final DESIGN.md.</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {componentItems.map((comp) => {
              const selectedVariant = prefs[comp.id as keyof StylePreferences] || comp.variants[0].id;
              const variant = comp.variants.find((v) => v.id === selectedVariant) || comp.variants[0];
              return (
                <motion.button
                  key={comp.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveModal(comp.id)}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border/50 dark:border-border text-left transition-all hover:border-border hover:shadow-md"
                >
                  {/* Component preview */}
                  <div className="relative flex min-h-[140px] items-center justify-center bg-muted/30 dark:bg-muted/60 p-4">
                    {variant.preview}
                    <div className="absolute top-2 right-2 rounded-full border bg-background/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground backdrop-blur">
                      {variant.label}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="flex items-center gap-3 border-t p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50">
                      <comp.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{comp.label}</div>
                      <div className="text-[11px] text-muted-foreground">{comp.desc}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Component modals */}
          {componentItems.map((comp) => (
            <ComponentModal
              key={comp.id}
              open={activeModal === comp.id}
              onClose={() => setActiveModal(null)}
              title={comp.label}
              description={comp.desc}
              variants={comp.variants}
              selected={prefs[comp.id as keyof StylePreferences] || comp.variants[0].id}
              onSelect={(val) => setPrefs({ ...prefs, [comp.id as keyof StylePreferences]: val })}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
