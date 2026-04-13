"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronRight, Plus, X, Sun, Moon, Monitor, Sparkles } from "lucide-react";
import { generateColorScale, isLight, contrastForeground, generateChartColors } from "@/lib/core/color";
import type { Overrides } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { Button } from "@/components/ui/button";

// ── Component Registry ───────────────────────────────────────────

interface CompDef {
  id: string;
  label: string;
  category: string;
  core: boolean;
  variants?: { id: string; label: string }[];
}

const ALL_COMPONENTS: CompDef[] = [
  { id: "button", label: "Button", category: "Form", core: true },
  { id: "input", label: "Input & Label", category: "Form", core: true },
  { id: "table", label: "Table", category: "Data Display", core: true },
  { id: "card", label: "Card", category: "Data Display", core: true },
  { id: "badge", label: "Badge", category: "Data Display", core: true },
  { id: "tabs", label: "Tabs", category: "Navigation", core: true },
  { id: "dialog", label: "Dialog / Modal", category: "Feedback", core: true },
  { id: "select", label: "Select / Dropdown", category: "Form", core: false,
    variants: [{ id: "simple", label: "Simple dropdown" }, { id: "searchable", label: "Searchable with groups" }] },
  { id: "checkbox", label: "Checkbox & Radio", category: "Form", core: false,
    variants: [{ id: "minimal", label: "Minimal checkmarks" }, { id: "card-select", label: "Card selection" }] },
  { id: "switch", label: "Switch / Toggle", category: "Form", core: false },
  { id: "calendar", label: "Calendar", category: "Data Display", core: false,
    variants: [{ id: "inline", label: "Inline month view" }, { id: "dropdown", label: "Input with dropdown" }] },
  { id: "toast", label: "Toast", category: "Feedback", core: false,
    variants: [{ id: "minimal", label: "Minimal one-line" }, { id: "rich", label: "Rich with description" }] },
  { id: "alert", label: "Alert / Banner", category: "Feedback", core: false,
    variants: [{ id: "border-left", label: "Left border accent" }, { id: "full-width", label: "Full width banner" }] },
  { id: "breadcrumb", label: "Breadcrumb", category: "Navigation", core: false },
  { id: "sidebar-nav", label: "Sidebar Nav", category: "Navigation", core: false,
    variants: [{ id: "indicator", label: "Active indicator bar" }, { id: "filled", label: "Filled background" }] },
  { id: "accordion", label: "Accordion / FAQ", category: "Layout", core: false },
  { id: "separator", label: "Separator", category: "Layout", core: false },
];

type PreviewTheme = "reference" | "dark" | "light";

// ── Main Component ───────────────────────────────────────────────

export function Preview({
  detail,
  overrides,
  onBack,
  onComponentsChange,
}: {
  detail: RefDetail;
  overrides: Overrides;
  onBack: () => void;
  onComponentsChange?: (components: string[]) => void;
}) {
  const primary = overrides.primaryColor || detail.primary;
  const font = overrides.fontFamily || detail.fontFamily;
  const weight = overrides.headingWeight || detail.headingWeight;
  const radius = overrides.borderRadius || detail.radius.replace(/[-–].*/, "").trim();
  const scale = generateColorScale(primary);
  const fg = detail.foreground;
  const bg = detail.background;
  const border = detail.border || "#e5e7eb";

  const [activeComps, setActiveComps] = useState<Set<string>>(
    () => new Set(ALL_COMPONENTS.filter((c) => c.core).map((c) => c.id))
  );
  const [addedComps, setAddedComps] = useState<Set<string>>(new Set());
  const [compVariants, setCompVariants] = useState<Record<string, string>>({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [abPickerComp, setAbPickerComp] = useState<CompDef | null>(null);
  const [previewTheme, setPreviewTheme] = useState<PreviewTheme>("reference");

  // Sync component list to parent
  useEffect(() => {
    onComponentsChange?.(Array.from(activeComps));
  }, [activeComps, onComponentsChange]);

  const addComp = (comp: CompDef) => {
    if (comp.variants && comp.variants.length > 1) {
      setAbPickerComp(comp);
    } else {
      setActiveComps((prev) => new Set([...prev, comp.id]));
      setAddedComps((prev) => new Set([...prev, comp.id]));
    }
  };

  const confirmVariant = (compId: string, variantId: string) => {
    setCompVariants((prev) => ({ ...prev, [compId]: variantId }));
    setActiveComps((prev) => new Set([...prev, compId]));
    setAddedComps((prev) => new Set([...prev, compId]));
    setAbPickerComp(null);
  };

  const removeComp = (id: string) => {
    setActiveComps((prev) => { const n = new Set(prev); n.delete(id); return n; });
    setAddedComps((prev) => { const n = new Set(prev); n.delete(id); return n; });
  };

  const coreComps = ALL_COMPONENTS.filter((c) => c.core && activeComps.has(c.id));
  const extraComps = ALL_COMPONENTS.filter((c) => !c.core && activeComps.has(c.id));
  const availableToAdd = ALL_COMPONENTS.filter((c) => !activeComps.has(c.id));

  const pBg = previewTheme === "dark" ? "#0a0a0a" : previewTheme === "light" ? "#ffffff" : bg;
  const pFg = previewTheme === "dark" ? "#fafafa" : previewTheme === "light" ? "#09090b" : fg;
  const pBorder = previewTheme === "dark" ? "#2a2a2a" : previewTheme === "light" ? "#e5e7eb" : border;
  const pMuted = previewTheme === "dark" ? "#1a1a1a" : previewTheme === "light" ? "#f5f5f5" : (isLight(bg) ? "#f5f5f5" : "#1a1a1a");
  const isDark = previewTheme === "dark";

  const renderComp = (id: string) => {
    const props = { primary, radius, border: pBorder, muted: pMuted, dark: isDark, weight, font };
    switch (id) {
      case "button": return <ButtonPreview {...props} />;
      case "input": return <InputPreview radius={radius} border={pBorder} />;
      case "select": return <SelectPreview radius={radius} border={pBorder} />;
      case "checkbox": return <CheckboxPreview primary={primary} border={pBorder} />;
      case "switch": return <SwitchPreview primary={primary} dark={isDark} />;
      case "table": return <TablePreview primary={primary} border={pBorder} dark={isDark} />;
      case "card": return <CardPreview primary={primary} weight={weight} border={pBorder} radius={radius} />;
      case "badge": return <BadgePreview primary={primary} border={pBorder} dark={isDark} />;
      case "calendar": return <CalendarPreview primary={primary} radius={radius} border={pBorder} />;
      case "toast": return <ToastPreview border={pBorder} radius={radius} />;
      case "alert": return <AlertPreview primary={primary} radius={radius} />;
      case "dialog": return <DialogPreview border={pBorder} radius={radius} dark={isDark} />;
      case "tabs": return <TabsPreview primary={primary} radius={radius} muted={pMuted} dark={isDark} border={pBorder} />;
      case "breadcrumb": return <BreadcrumbPreview />;
      case "sidebar-nav": return <SidebarNavPreview primary={primary} radius={radius} />;
      case "accordion": return <AccordionPreview border={pBorder} />;
      case "separator": return <SeparatorPreview border={pBorder} />;
      default: return null;
    }
  };

  return (
    <div>
      {/* Controls bar */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold text-muted-foreground">Live Preview</h3>
          <span className="text-xs text-muted-foreground/60">{activeComps.size} components</span>
          {availableToAdd.length > 0 && (
            <Button variant="outline" size="sm" onClick={() => setShowAddModal(true)} className="gap-1.5 h-7 text-xs">
              <Plus className="h-3 w-3" /> Add Components
            </Button>
          )}
        </div>
        <div className="flex items-center gap-0.5 rounded-lg border p-0.5 dark:border-border">
          {([
            { key: "reference" as PreviewTheme, icon: Monitor, label: "Reference" },
            { key: "light" as PreviewTheme, icon: Sun, label: "Light" },
            { key: "dark" as PreviewTheme, icon: Moon, label: "Dark" },
          ]).map((t) => (
            <button
              key={t.key}
              onClick={() => setPreviewTheme(t.key)}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
                previewTheme === t.key ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <t.icon className="h-3 w-3" />
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Preview frame */}
      <div
        className="rounded-xl border dark:border-border overflow-hidden transition-colors duration-300"
        style={{ background: pBg, color: pFg, fontFamily: `"${font}", system-ui, sans-serif` }}
      >
        <div className="p-6 sm:p-8 space-y-10">
          {/* Core components */}
          {coreComps.map((c) => (
            <div key={c.id}>{renderComp(c.id)}</div>
          ))}

          {/* Divider between core and added */}
          {extraComps.length > 0 && (
            <div className="flex items-center gap-3 py-2">
              <div className="h-px flex-1" style={{ background: pBorder }} />
              <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest opacity-40">
                <Sparkles className="h-3 w-3" /> Added components
              </span>
              <div className="h-px flex-1" style={{ background: pBorder }} />
            </div>
          )}

          {/* Added components */}
          {extraComps.map((c) => (
            <div key={c.id} className="relative group">
              <button
                onClick={() => removeComp(c.id)}
                className="absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                title="Remove"
              >
                <X className="h-3 w-3" />
              </button>
              {compVariants[c.id] && (
                <div className="mb-2">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: `${primary}15`, color: primary }}>
                    {c.variants?.find((v) => v.id === compVariants[c.id])?.label}
                  </span>
                </div>
              )}
              {renderComp(c.id)}
            </div>
          ))}

          {/* Add more — bottom dashed button */}
          {availableToAdd.length > 0 && (
            <div className="pt-4">
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 rounded-xl border-2 border-dashed px-6 py-4 text-sm font-medium transition-opacity w-full justify-center opacity-40 hover:opacity-70"
                style={{ borderColor: pBorder, color: pFg }}
              >
                <Plus className="h-4 w-4" />
                Add Components ({availableToAdd.length} available)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Add Components Modal ──────────────────────── */}
      <AnimatePresence>
        {showAddModal && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 z-50 m-auto flex max-h-[70vh] max-w-lg flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl dark:border-border"
            >
              <div className="flex items-center justify-between border-b px-6 py-4">
                <div>
                  <h2 className="text-lg font-semibold">Add Components</h2>
                  <p className="text-sm text-muted-foreground">Components with variants will ask you to choose a style</p>
                </div>
                <button onClick={() => setShowAddModal(false)} className="rounded-full p-2 hover:bg-muted"><X className="h-4 w-4" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                {["Form", "Data Display", "Feedback", "Navigation", "Layout"].map((cat) => {
                  const comps = availableToAdd.filter((c) => c.category === cat);
                  if (comps.length === 0) return null;
                  return (
                    <div key={cat} className="mb-6 last:mb-0">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{cat}</h3>
                      <div className="space-y-1">
                        {comps.map((comp) => (
                          <button
                            key={comp.id}
                            onClick={() => { addComp(comp); if (!comp.variants || comp.variants.length <= 1) setShowAddModal(false); }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-muted"
                          >
                            <Plus className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium flex-1">{comp.label}</span>
                            {comp.variants && comp.variants.length > 1 && (
                              <span className="text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded font-medium">A/B</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
                {availableToAdd.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">All components added!</div>
                )}
              </div>
              <div className="border-t px-6 py-4">
                <Button variant="outline" className="w-full" onClick={() => setShowAddModal(false)}>Done</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── A/B Variant Picker Modal with UI Preview ── */}
      <AnimatePresence>
        {abPickerComp && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setAbPickerComp(null)} className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 z-[60] m-auto flex max-h-[80vh] max-w-2xl flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl dark:border-border"
            >
              <div className="flex items-center justify-between border-b px-6 py-4">
                <div>
                  <h2 className="text-lg font-semibold">{abPickerComp.label}</h2>
                  <p className="text-sm text-muted-foreground">Choose your preferred style</p>
                </div>
                <button onClick={() => setAbPickerComp(null)} className="rounded-full p-2 hover:bg-muted"><X className="h-4 w-4" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {abPickerComp.variants?.map((v, vi) => (
                    <button
                      key={v.id}
                      onClick={() => { confirmVariant(abPickerComp.id, v.id); setShowAddModal(false); }}
                      className="group flex flex-col overflow-hidden rounded-xl border-2 text-left transition-all hover:border-foreground/40 dark:border-border dark:hover:border-foreground/40"
                    >
                      {/* Live UI Preview */}
                      <div className="p-5 bg-muted/30 dark:bg-muted/60 min-h-[140px] flex items-center justify-center">
                        <ABVariantPreview compId={abPickerComp.id} variantId={v.id} primary={primary} radius={radius} border={pBorder} dark={isDark} />
                      </div>
                      <div className="p-3 border-t flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary font-bold text-xs shrink-0">
                          {vi === 0 ? "A" : "B"}
                        </div>
                        <div className="text-sm font-medium">{v.label}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Component Previews ───────────────────────────────────────────

function CompLabel({ label }: { label: string }) {
  return <h4 className="text-xs font-semibold uppercase tracking-widest opacity-30 mb-4">{label}</h4>;
}

function ButtonPreview({ primary, radius, border, muted, dark }: { primary: string; radius: string; border: string; muted: string; dark: boolean; weight?: string; font?: string }) {
  return (
    <div>
      <CompLabel label="Button" />
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 text-sm font-medium" style={{ background: primary, color: contrastForeground(primary), borderRadius: radius }}>Primary</button>
          <button className="px-4 py-2 text-sm font-medium border" style={{ borderColor: border, borderRadius: radius, background: muted }}>Secondary</button>
          <button className="px-4 py-2 text-sm font-medium border" style={{ borderColor: border, borderRadius: radius, background: "transparent" }}>Outline</button>
          <button className="px-4 py-2 text-sm font-medium" style={{ background: "transparent", borderRadius: radius, opacity: 0.6 }}>Ghost</button>
          <button className="px-4 py-2 text-sm font-medium" style={{ background: "#ef4444", color: "#fff", borderRadius: radius }}>Destructive</button>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs font-medium" style={{ background: primary, color: contrastForeground(primary), borderRadius: radius }}>Small</button>
          <button className="px-4 py-2 text-sm font-medium" style={{ background: primary, color: contrastForeground(primary), borderRadius: radius }}>Default</button>
          <button className="px-5 py-2.5 text-base font-medium" style={{ background: primary, color: contrastForeground(primary), borderRadius: radius }}>Large</button>
        </div>
      </div>
    </div>
  );
}

function InputPreview({ radius, border }: { radius: string; border: string }) {
  return (
    <div>
      <CompLabel label="Input & Label" />
      <div className="grid gap-4 sm:grid-cols-2 max-w-lg">
        <div><label className="text-sm font-medium mb-1.5 block">Email</label><input className="w-full px-3 py-2 text-sm border bg-transparent outline-none" style={{ borderColor: border, borderRadius: radius }} placeholder="you@example.com" readOnly /></div>
        <div><label className="text-sm font-medium mb-1.5 block">Password</label><input className="w-full px-3 py-2 text-sm border bg-transparent outline-none" style={{ borderColor: border, borderRadius: radius }} type="password" placeholder="••••••••" readOnly /></div>
      </div>
    </div>
  );
}

function SelectPreview({ radius, border }: { radius: string; border: string }) {
  return (
    <div>
      <CompLabel label="Select / Dropdown" />
      <div className="max-w-xs"><label className="text-sm font-medium mb-1.5 block">Framework</label>
        <div className="flex items-center justify-between px-3 py-2 text-sm border" style={{ borderColor: border, borderRadius: radius }}>
          <span className="opacity-40">Select a framework...</span><ChevronDown className="h-4 w-4 opacity-30" />
        </div>
      </div>
    </div>
  );
}

function CheckboxPreview({ primary, border }: { primary: string; border: string }) {
  return (
    <div>
      <CompLabel label="Checkbox & Radio" />
      <div className="space-y-3">
        <div className="flex items-center gap-6">
          {["Option A", "Option B", "Option C"].map((opt, i) => (
            <label key={opt} className="flex items-center gap-2 text-sm cursor-default">
              <div className="h-4 w-4 rounded border flex items-center justify-center" style={{ borderColor: i === 0 ? primary : border, background: i === 0 ? primary : "transparent" }}>
                {i === 0 && <Check className="h-3 w-3" style={{ color: contrastForeground(primary) }} />}
              </div>{opt}
            </label>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {["Small", "Medium", "Large"].map((opt, i) => (
            <label key={opt} className="flex items-center gap-2 text-sm cursor-default">
              <div className="h-4 w-4 rounded-full border flex items-center justify-center" style={{ borderColor: i === 1 ? primary : border }}>
                {i === 1 && <div className="h-2 w-2 rounded-full" style={{ background: primary }} />}
              </div>{opt}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function SwitchPreview({ primary, dark }: { primary: string; dark: boolean }) {
  return (
    <div>
      <CompLabel label="Switch / Toggle" />
      <div className="flex items-center gap-8">
        {[true, false].map((on, i) => (
          <label key={i} className="flex items-center gap-3 text-sm">
            <div className="h-6 w-11 rounded-full p-0.5" style={{ background: on ? primary : (dark ? "#333" : "#d4d4d4") }}>
              <div className="h-5 w-5 rounded-full bg-white shadow" style={{ transform: on ? "translateX(20px)" : "translateX(0)" }} />
            </div>{on ? "Enabled" : "Disabled"}
          </label>
        ))}
      </div>
    </div>
  );
}

function TablePreview({ primary, border, dark }: { primary: string; border: string; dark: boolean }) {
  const rows = [
    { proj: "next-app", status: "Active", team: "Frontend", updated: "2 min ago" },
    { proj: "api-service", status: "Building", team: "Backend", updated: "14 min ago" },
    { proj: "design-system", status: "Active", team: "Design", updated: "1 hr ago" },
    { proj: "mobile-app", status: "Error", team: "Mobile", updated: "3 hr ago" },
  ];
  return (
    <div>
      <CompLabel label="Table" />
      <div className="overflow-x-auto border rounded-lg" style={{ borderColor: border }}>
        <table className="w-full text-sm">
          <thead><tr style={{ borderBottom: `1px solid ${border}` }}>
            <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider opacity-40">Project</th>
            <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider opacity-40">Status</th>
            <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider opacity-40">Team</th>
            <th className="px-4 py-2.5 text-right text-xs font-medium uppercase tracking-wider opacity-40">Updated</th>
          </tr></thead>
          <tbody>{rows.map((row) => (
            <tr key={row.proj} style={{ borderBottom: `1px solid ${border}` }}>
              <td className="px-4 py-2.5 font-medium">{row.proj}</td>
              <td className="px-4 py-2.5"><span className="px-2 py-0.5 text-[10px] font-medium rounded-full" style={{ background: row.status === "Active" ? primary : row.status === "Error" ? "#ef4444" : (dark ? "#222" : "#f0f0f0"), color: row.status === "Active" ? contrastForeground(primary) : row.status === "Error" ? "#fff" : undefined }}>{row.status}</span></td>
              <td className="px-4 py-2.5 opacity-50">{row.team}</td>
              <td className="px-4 py-2.5 text-right opacity-30 text-xs">{row.updated}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

function CardPreview({ primary, weight, border, radius }: { primary: string; weight: string; border: string; radius: string }) {
  return (
    <div>
      <CompLabel label="Card" />
      <div className="grid gap-4 sm:grid-cols-3">
        {[{ title: "Total Revenue", value: "$45,231", change: "+20.1%", up: true },
          { title: "Subscriptions", value: "2,350", change: "+18.2%", up: true },
          { title: "Active Now", value: "573", change: "-2.4%", up: false }].map((s) => (
          <div key={s.title} className="p-4 border" style={{ borderColor: border, borderRadius: `calc(${radius} * 1.5)` }}>
            <div className="text-xs font-medium opacity-40 mb-1">{s.title}</div>
            <div className="text-2xl font-bold" style={{ fontWeight: Number(weight) }}>{s.value}</div>
            <div className="text-xs mt-1" style={{ color: s.up ? "#22c55e" : "#ef4444" }}>{s.change} from last month</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BadgePreview({ primary, border, dark }: { primary: string; border: string; dark: boolean }) {
  return (
    <div>
      <CompLabel label="Badge" />
      <div className="flex flex-wrap gap-2">
        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full" style={{ background: primary, color: contrastForeground(primary) }}>Default</span>
        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full" style={{ background: dark ? "#222" : "#f5f5f5" }}>Secondary</span>
        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full border" style={{ borderColor: border }}>Outline</span>
        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full" style={{ background: "#ef4444", color: "#fff" }}>Destructive</span>
        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full" style={{ background: "#22c55e20", color: "#22c55e" }}>Success</span>
      </div>
    </div>
  );
}

function CalendarPreview({ primary, radius, border }: { primary: string; radius: string; border: string }) {
  return (
    <div>
      <CompLabel label="Calendar" />
      <div className="inline-block border p-4" style={{ borderColor: border, borderRadius: `calc(${radius} * 1.5)` }}>
        <div className="flex items-center justify-between mb-3">
          <button className="p-1 opacity-30 hover:opacity-100">&larr;</button>
          <span className="text-sm font-semibold">April 2026</span>
          <button className="p-1 opacity-30 hover:opacity-100">&rarr;</button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {["Mo","Tu","We","Th","Fr","Sa","Su"].map((d) => <div key={d} className="py-1 font-medium opacity-30">{d}</div>)}
          {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
            <div key={d} className="py-1.5 cursor-default" style={{ borderRadius: radius, ...(d === 13 ? { background: primary, color: contrastForeground(primary), fontWeight: 600 } : {}), ...(d === 14 || d === 15 ? { background: `${primary}15` } : {}) }}>{d}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ToastPreview({ border, radius }: { border: string; radius: string }) {
  return (
    <div>
      <CompLabel label="Toast" />
      <div className="space-y-3 max-w-sm">
        <div className="flex items-center gap-3 p-3 border shadow-lg" style={{ borderColor: border, borderRadius: radius }}>
          <div className="flex h-5 w-5 items-center justify-center rounded-full text-xs" style={{ background: "#22c55e20", color: "#22c55e" }}>✓</div>
          <div className="flex-1 text-sm font-medium">Changes saved</div>
          <span className="text-xs opacity-30 cursor-pointer">Undo</span>
        </div>
        <div className="flex items-start gap-3 p-3 border shadow-lg" style={{ borderColor: border, borderRadius: radius }}>
          <div className="flex h-5 w-5 items-center justify-center rounded-full text-xs" style={{ background: "#ef444420", color: "#ef4444" }}>!</div>
          <div className="flex-1"><div className="text-sm font-medium">Deploy failed</div><div className="text-xs opacity-40 mt-0.5">Build error on line 42</div></div>
        </div>
      </div>
    </div>
  );
}

function AlertPreview({ primary, radius }: { primary: string; radius: string }) {
  return (
    <div>
      <CompLabel label="Alert / Banner" />
      <div className="space-y-3 max-w-lg">
        <div className="flex items-start gap-3 p-3 border-l-4" style={{ borderLeftColor: primary, background: `${primary}08`, borderRadius: `0 ${radius} ${radius} 0` }}>
          <span className="text-sm">ℹ️</span><div><div className="text-sm font-medium">Update available</div><div className="text-xs opacity-50 mt-0.5">A new version is available.</div></div>
        </div>
        <div className="flex items-start gap-3 p-3 border-l-4" style={{ borderLeftColor: "#ef4444", background: "#ef444408", borderRadius: `0 ${radius} ${radius} 0` }}>
          <span className="text-sm">⚠️</span><div><div className="text-sm font-medium">API key expired</div><div className="text-xs opacity-50 mt-0.5">Regenerate in settings.</div></div>
        </div>
      </div>
    </div>
  );
}

function DialogPreview({ border, radius, dark }: { border: string; radius: string; dark: boolean }) {
  return (
    <div>
      <CompLabel label="Dialog / Modal" />
      <div className="max-w-sm p-5 border shadow-xl" style={{ borderColor: border, borderRadius: `calc(${radius} * 1.5)`, background: dark ? "#111" : "#fff", color: dark ? "#fafafa" : "#09090b" }}>
        <h4 className="font-semibold mb-1">Delete project?</h4>
        <p className="text-sm opacity-40 mb-4">This cannot be undone.</p>
        <div className="flex justify-end gap-2">
          <button className="px-3 py-1.5 text-sm border" style={{ borderColor: border, borderRadius: radius }}>Cancel</button>
          <button className="px-3 py-1.5 text-sm text-white" style={{ background: "#ef4444", borderRadius: radius }}>Delete</button>
        </div>
      </div>
    </div>
  );
}

function TabsPreview({ primary, radius, muted, dark, border }: { primary: string; radius: string; muted: string; dark: boolean; border: string }) {
  return (
    <div>
      <CompLabel label="Tabs" />
      <div className="space-y-4">
        <div className="flex gap-1 p-1" style={{ background: muted, borderRadius: radius }}>
          {["Overview","Analytics","Settings"].map((t,i) => (
            <button key={t} className="px-3 py-1.5 text-sm font-medium" style={{ borderRadius: `calc(${radius} - 2px)`, background: i===0?(dark?"#000":"#fff"):"transparent", boxShadow: i===0?"0 1px 2px rgba(0,0,0,0.05)":"none", opacity: i===0?1:0.4 }}>{t}</button>
          ))}
        </div>
        <div className="flex gap-6 border-b" style={{ borderColor: border }}>
          {["Overview","Analytics","Settings"].map((t,i) => (
            <button key={t} className={`pb-2.5 text-sm font-medium ${i===0?"border-b-2":"opacity-30"}`} style={i===0?{ borderColor: primary, color: primary }:{}}>{t}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function BreadcrumbPreview() {
  return (
    <div>
      <CompLabel label="Breadcrumb" />
      <div className="flex items-center gap-2 text-sm">
        {["Home","Projects","Design System"].map((item,i,arr) => (
          <span key={item} className="flex items-center gap-2">
            <span className={i<arr.length-1?"opacity-40":"font-medium"}>{item}</span>
            {i<arr.length-1 && <ChevronRight className="h-3 w-3 opacity-20" />}
          </span>
        ))}
      </div>
    </div>
  );
}

function SidebarNavPreview({ primary, radius }: { primary: string; radius: string }) {
  return (
    <div>
      <CompLabel label="Sidebar Navigation" />
      <div className="w-56 space-y-0.5">
        {["Dashboard","Projects","Team","Settings","Billing"].map((item,i) => (
          <div key={item} className="flex items-center px-3 py-2 text-sm rounded-md" style={{ borderRadius: radius, background: i===0?`${primary}12`:"transparent", color: i===0?primary:undefined, fontWeight: i===0?500:400 }}>
            {i===0 && <div className="h-4 w-1 rounded-full mr-2" style={{ background: primary }} />}{item}
          </div>
        ))}
      </div>
    </div>
  );
}

function AccordionPreview({ border }: { border: string }) {
  return (
    <div>
      <CompLabel label="Accordion / FAQ" />
      <div className="max-w-lg">
        {[{ q: "What is oh-my-design?", a: "A design system generator from real company references.", open: true },
          { q: "Do I need an API key?", open: false }, { q: "Can I customize components?", open: false }].map((item) => (
          <div key={item.q} className="py-4 border-b" style={{ borderColor: border }}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{item.q}</span>
              <ChevronDown className={`h-4 w-4 opacity-30 ${item.open?"rotate-180":""}`} />
            </div>
            {item.open && <p className="text-sm opacity-40 mt-2">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── A/B Variant Previews (live UI for the picker modal) ─────────

function ABVariantPreview({ compId, variantId, primary, radius, border, dark }: {
  compId: string; variantId: string; primary: string; radius: string; border: string; dark: boolean;
}) {
  const fg = dark ? "#fafafa" : "#09090b";
  switch (compId) {
    case "select":
      return variantId === "simple" ? (
        <div className="w-48">
          <div className="flex items-center justify-between px-3 py-2 text-xs border rounded-md" style={{ borderColor: border, borderRadius: radius, color: fg }}>
            <span style={{ opacity: 0.4 }}>Select...</span><ChevronDown className="h-3 w-3" style={{ opacity: 0.3 }} />
          </div>
          <div className="mt-1 border rounded-md p-1 shadow-lg text-xs" style={{ borderColor: border, borderRadius: radius, color: fg }}>
            {["React", "Vue", "Svelte"].map((f) => <div key={f} className="px-2 py-1.5 rounded" style={{ borderRadius: `calc(${radius} - 2px)` }}>{f}</div>)}
          </div>
        </div>
      ) : (
        <div className="w-52">
          <div className="flex items-center justify-between px-3 py-2 text-xs border rounded-md" style={{ borderColor: border, borderRadius: radius, color: fg }}>
            <span style={{ opacity: 0.4 }}>Search frameworks...</span><ChevronDown className="h-3 w-3" style={{ opacity: 0.3 }} />
          </div>
          <div className="mt-1 border rounded-md p-1 shadow-lg text-xs" style={{ borderColor: border, borderRadius: radius, color: fg }}>
            <input className="w-full px-2 py-1 mb-1 text-xs border-b bg-transparent outline-none" style={{ borderColor: border }} placeholder="Search..." readOnly />
            <div className="px-2 py-1 text-[10px] font-medium" style={{ opacity: 0.4 }}>Frontend</div>
            {["React", "Vue"].map((f) => <div key={f} className="px-2 py-1.5 rounded" style={{ borderRadius: `calc(${radius} - 2px)` }}>{f}</div>)}
            <div className="px-2 py-1 text-[10px] font-medium" style={{ opacity: 0.4 }}>Backend</div>
            {["Node.js"].map((f) => <div key={f} className="px-2 py-1.5 rounded" style={{ borderRadius: `calc(${radius} - 2px)` }}>{f}</div>)}
          </div>
        </div>
      );
    case "checkbox":
      return variantId === "minimal" ? (
        <div className="space-y-2" style={{ color: fg }}>
          {["Email notifications", "Push notifications", "SMS alerts"].map((opt, i) => (
            <label key={opt} className="flex items-center gap-2 text-xs">
              <div className="h-4 w-4 rounded border flex items-center justify-center" style={{ borderColor: i === 0 ? primary : border, background: i === 0 ? primary : "transparent" }}>
                {i === 0 && <Check className="h-3 w-3" style={{ color: contrastForeground(primary) }} />}
              </div>{opt}
            </label>
          ))}
        </div>
      ) : (
        <div className="space-y-2 w-full" style={{ color: fg }}>
          {["Starter", "Pro", "Enterprise"].map((opt, i) => (
            <div key={opt} className="flex items-center gap-3 px-3 py-2 border rounded-lg text-xs" style={{ borderColor: i === 1 ? primary : border, borderRadius: radius, background: i === 1 ? `${primary}08` : "transparent" }}>
              <div className="h-4 w-4 rounded-full border flex items-center justify-center" style={{ borderColor: i === 1 ? primary : border }}>
                {i === 1 && <div className="h-2 w-2 rounded-full" style={{ background: primary }} />}
              </div>
              <span className="font-medium">{opt}</span>
            </div>
          ))}
        </div>
      );
    case "calendar":
      return variantId === "inline" ? (
        <div className="text-center text-xs" style={{ color: fg }}>
          <div className="font-semibold mb-2">April 2026</div>
          <div className="grid grid-cols-7 gap-0.5">
            {["M","T","W","T","F","S","S"].map((d,i) => <div key={i} className="py-0.5" style={{ opacity: 0.3 }}>{d}</div>)}
            {[...Array(5)].map((_,i) => <div key={`e${i}`} />)}
            {Array.from({length:30},(_,i)=>i+1).map((d) => (
              <div key={d} className="py-1 rounded" style={{ borderRadius: radius, ...(d===13?{background:primary,color:contrastForeground(primary)}:{}) }}>{d}</div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-48" style={{ color: fg }}>
          <div className="flex items-center justify-between px-3 py-2 text-xs border" style={{ borderColor: border, borderRadius: radius }}>
            <span>Apr 13, 2026</span>
            <span style={{ opacity: 0.3 }}>|</span>
          </div>
          <div className="mt-1 border rounded-md p-2 shadow-lg text-[10px] text-center" style={{ borderColor: border, borderRadius: radius }}>
            <div className="font-semibold mb-1">April 2026</div>
            <div className="grid grid-cols-7 gap-0.5">
              {Array.from({length:14},(_,i)=>i+8).map((d) => (
                <div key={d} className="py-0.5 rounded" style={{ borderRadius: radius, ...(d===13?{background:primary,color:contrastForeground(primary)}:{}) }}>{d}</div>
              ))}
            </div>
          </div>
        </div>
      );
    case "toast":
      return variantId === "minimal" ? (
        <div className="flex items-center gap-2 px-3 py-2 border shadow text-xs w-56" style={{ borderColor: border, borderRadius: radius, color: fg }}>
          <div className="h-4 w-4 rounded-full text-[10px] flex items-center justify-center" style={{ background: "#22c55e20", color: "#22c55e" }}>v</div>
          <span className="flex-1 font-medium">Changes saved</span>
          <span style={{ opacity: 0.3, fontSize: 10 }}>Undo</span>
        </div>
      ) : (
        <div className="px-3 py-2.5 border shadow text-xs w-60" style={{ borderColor: border, borderRadius: radius, color: fg }}>
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full text-[10px] flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#22c55e20", color: "#22c55e" }}>v</div>
            <div><div className="font-medium">Successfully deployed</div><div style={{ opacity: 0.4, marginTop: 2 }}>Changes are now live at app.vercel.com</div></div>
          </div>
        </div>
      );
    case "alert":
      return variantId === "border-left" ? (
        <div className="flex items-start gap-2 p-2.5 border-l-4 text-xs w-56" style={{ borderLeftColor: primary, background: `${primary}08`, borderRadius: `0 ${radius} ${radius} 0`, color: fg }}>
          <span className="font-bold" style={{ color: primary }}>i</span>
          <div><div className="font-medium">Update available</div><div style={{ opacity: 0.4, marginTop: 2 }}>New version ready.</div></div>
        </div>
      ) : (
        <div className="flex items-center gap-2 px-3 py-2 text-xs w-64" style={{ background: `${primary}10`, borderRadius: radius, color: fg }}>
          <span className="font-bold" style={{ color: primary }}>i</span>
          <span className="font-medium flex-1">A new update is available.</span>
          <span style={{ opacity: 0.4, fontSize: 10 }}>Dismiss</span>
        </div>
      );
    case "sidebar-nav":
      return variantId === "indicator" ? (
        <div className="w-40 space-y-0.5 text-xs" style={{ color: fg }}>
          {["Dashboard", "Projects", "Settings"].map((item, i) => (
            <div key={item} className="flex items-center px-2 py-1.5 rounded" style={{ borderRadius: radius, background: i===0?`${primary}12`:"transparent", color: i===0?primary:undefined, fontWeight: i===0?500:400 }}>
              {i===0 && <div className="h-3 w-0.5 rounded-full mr-2" style={{ background: primary }} />}{item}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-40 space-y-0.5 text-xs" style={{ color: fg }}>
          {["Dashboard", "Projects", "Settings"].map((item, i) => (
            <div key={item} className="px-2 py-1.5 rounded" style={{ borderRadius: radius, background: i===0?primary:"transparent", color: i===0?contrastForeground(primary):undefined, fontWeight: i===0?500:400 }}>{item}</div>
          ))}
        </div>
      );
    default:
      return <div className="text-xs" style={{ color: fg, opacity: 0.5 }}>Preview</div>;
  }
}

function SeparatorPreview({ border }: { border: string }) {
  return (
    <div>
      <CompLabel label="Separator" />
      <div className="space-y-4 max-w-sm">
        <div className="text-sm">Content above</div>
        <div className="h-px w-full" style={{ background: border }} />
        <div className="text-sm">Content below</div>
        <div className="flex items-center gap-3">
          <div className="h-px flex-1" style={{ background: border }} /><span className="text-xs opacity-30">OR</span><div className="h-px flex-1" style={{ background: border }} />
        </div>
      </div>
    </div>
  );
}
