import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  CreditCard,
  FileText,
  FolderGit2,
  Languages,
  LayoutTemplate,
  ListFilter,
  LoaderCircle,
  MoreHorizontal,
  Search,
  Settings2,
  ShieldAlert,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import type { CliDocsDictionary } from "@/data/cli-docs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AntiSlopContent = CliDocsDictionary["antiSlop"];
type Example = AntiSlopContent["examples"][number];
type Lens = AntiSlopContent["lenses"][number];
type Direction = AntiSlopContent["directions"][number];

const exampleIcons = {
  writing: FileText,
  locale: Languages,
  interface: LayoutTemplate,
} as const;

function Line({ className = "" }: { className?: string }) {
  return <span className={`block h-1.5 rounded-full bg-current ${className}`} />;
}

function SpecimenCell({
  label,
  improved = false,
  children,
}: {
  label: string;
  improved?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className={`mb-2 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] ${improved ? "text-primary" : "text-muted-foreground"}`}>
        {label}
      </p>
      <div className={`min-h-48 overflow-hidden rounded-xl bg-background p-3 ${improved ? "ring-1 ring-primary/20" : "ring-1 ring-foreground/10"}`}>
        {children}
      </div>
    </div>
  );
}

function MiniChrome({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="flex h-7 items-center justify-between border-b border-border/70 px-2">
      <div className="flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-foreground/15" />
        <span className="font-mono text-[7px] font-medium text-foreground/55">{title}</span>
      </div>
      {action ?? <MoreHorizontal className="size-3 text-muted-foreground" />}
    </div>
  );
}

function LensVisual({
  id,
  beforeLabel,
  afterLabel,
  specimen,
  ui,
}: {
  id: Lens["id"];
  beforeLabel: string;
  afterLabel: string;
  specimen: AntiSlopContent["specimen"];
  ui: AntiSlopContent["specimenUi"];
}) {
  const pair = (before: React.ReactNode, after: React.ReactNode) => (
    <div className="grid gap-3 sm:grid-cols-2" aria-hidden="true">
      <SpecimenCell label={beforeLabel}>{before}</SpecimenCell>
      <SpecimenCell label={afterLabel} improved>{after}</SpecimenCell>
    </div>
  );

  if (id === "hierarchy") {
    return pair(
      <div className="rounded-lg bg-muted/30 ring-1 ring-foreground/10">
        <MiniChrome title={ui.dashboard} />
        <div className="grid grid-cols-2 gap-2 p-2">
          {["72%", "18", "04", "12"].map((value) => (
            <div key={value} className="rounded-lg bg-background p-2 ring-1 ring-foreground/10">
              <span className="block text-xs font-medium text-foreground/60">{value}</span>
              <Line className="mt-3 w-full text-foreground/10" />
              <Line className="mt-2 w-2/3 text-foreground/10" />
            </div>
          ))}
        </div>
      </div>,
      <div className="rounded-lg ring-1 ring-foreground/10">
        <MiniChrome title={`${ui.release} / 1.9`} action={<span className="size-2 rounded-full bg-primary" />} />
        <div className="p-3">
          <div className="flex items-start justify-between gap-3">
            <div><span className="block text-2xl font-semibold tracking-[-0.04em] text-foreground">72%</span><Line className="mt-2 w-20 text-foreground/15" /></div>
            <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-[7px] font-medium text-primary">12 / 18</span>
          </div>
          <div className="mt-5 space-y-2 border-t border-border/70 pt-3">
            {[true, true, false].map((done, index) => <div key={index} className="flex items-center gap-2"><span className={`flex size-3.5 items-center justify-center rounded-full ${done ? "bg-primary text-primary-foreground" : "ring-1 ring-foreground/15"}`}>{done && <Check className="size-2" />}</span><Line className={`${index === 2 ? "w-3/5" : "w-4/5"} text-foreground/15`} /></div>)}
          </div>
          <div className="mt-4 flex h-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"><ArrowRight className="size-3" /></div>
        </div>
      </div>,
    );
  }

  if (id === "containers") {
    return pair(
      <div className="rounded-lg bg-muted/40 p-2 ring-1 ring-foreground/10">
        <div className="rounded-lg bg-background p-2 shadow-sm ring-1 ring-foreground/10">
          <div className="flex items-center gap-2"><Settings2 className="size-3 text-primary" /><Line className="w-16 text-foreground/20" /></div>
          <div className="mt-3 rounded-lg bg-muted/35 p-2 ring-1 ring-foreground/10">
            <div className="rounded-lg bg-background p-2 shadow-sm ring-1 ring-foreground/10"><Line className="w-3/5 text-foreground/20" /><div className="mt-3 rounded-lg bg-muted/40 p-2 ring-1 ring-foreground/10"><Line className="w-full text-foreground/15" /></div></div>
          </div>
        </div>
      </div>,
      <div>
        <div className="flex items-center gap-2 border-b border-border/70 pb-3"><Settings2 className="size-3.5 text-foreground" /><span className="font-mono text-[8px] font-medium text-foreground">{ui.settings}</span></div>
        <div className="divide-y divide-border/70">
          {[true, false, true].map((enabled, index) => (
            <div key={index} className="flex items-center justify-between py-3">
              <div className="min-w-0 flex-1"><Line className={`${index === 1 ? "w-16" : "w-20"} text-foreground/25`} /><Line className="mt-2 w-3/5 text-foreground/10" /></div>
              <span className={`relative h-4 w-7 rounded-full ${enabled ? "bg-primary" : "bg-muted ring-1 ring-foreground/10"}`}><span className={`absolute top-0.5 size-3 rounded-full bg-background ${enabled ? "right-0.5" : "left-0.5"}`} /></span>
            </div>
          ))}
        </div>
      </div>,
    );
  }

  if (id === "typography") {
    return pair(
      <div className="space-y-4 pt-1">
        <span className="block text-[11px] font-medium text-foreground/70">{ui.introducing}</span>
        <span className="block text-[12px] font-medium text-foreground/75">{ui.typographyTitle}</span>
        <span className="block text-[11px] leading-5 text-foreground/60">{ui.typographyBody}</span>
        <div className="flex gap-2"><span className="rounded-full bg-primary/10 px-2 py-1 text-[8px] text-primary">{ui.newLabel}</span><span className="rounded-full bg-muted px-2 py-1 text-[8px] text-foreground/55">{ui.docsLabel}</span></div>
      </div>,
      <div>
        <div className="flex items-center gap-1.5 font-mono text-[7px] text-muted-foreground"><FolderGit2 className="size-3" /> {ui.docsLabel} / DESIGN.md</div>
        <h4 className="mt-5 text-xl font-semibold leading-6 tracking-[-0.035em] text-foreground">DESIGN.md</h4>
        <p className="mt-2 text-[9px] leading-4 text-muted-foreground">2026-07-20 · v1.9</p>
        <div className="mt-5 space-y-2 text-foreground/15"><Line className="w-full" /><Line className="w-11/12" /><Line className="w-4/5" /></div>
        <div className="mt-5 border-t border-border/70 pt-3"><span className="font-mono text-[8px] font-medium text-primary">01 — tokens</span></div>
      </div>,
    );
  }

  if (id === "color") {
    return pair(
      <div className="relative h-40 overflow-hidden rounded-lg bg-gradient-to-br from-primary/35 via-background to-primary/15 p-3 ring-1 ring-primary/20">
        <div className="absolute -right-6 -top-5 size-24 rounded-full bg-primary/35 blur-2xl" />
        <div className="relative rounded-xl bg-background/60 p-3 shadow-xl ring-1 ring-primary/25 backdrop-blur">
          <div className="flex items-center gap-2"><CreditCard className="size-4 text-primary" /><Line className="w-16 text-foreground/25" /></div>
          <span className="mt-5 block bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-xl font-semibold text-transparent">$128.00</span>
          <div className="mt-4 h-8 rounded-full bg-primary shadow-[0_0_20px_color-mix(in_oklch,var(--primary)_45%,transparent)]" />
        </div>
      </div>,
      <div className="rounded-lg ring-1 ring-foreground/10">
        <MiniChrome title={ui.checkout} action={<ShieldAlert className="size-3 text-muted-foreground" />} />
        <div className="p-3">
          <div className="flex items-center justify-between"><span className="text-[9px] text-muted-foreground">DESIGN.md</span><span className="text-sm font-semibold text-foreground">$128.00</span></div>
          <div className="mt-4 grid grid-cols-[1fr_auto] gap-2 border-y border-border/70 py-3"><div><Line className="w-16 text-foreground/20" /><Line className="mt-2 w-10 text-foreground/10" /></div><span className="rounded-md bg-muted px-2 py-1 text-[8px] text-foreground/60">VISA</span></div>
          <div className="mt-4 flex h-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><ArrowRight className="size-3" /></div>
        </div>
      </div>,
    );
  }

  if (id === "evidence") {
    return pair(
      <div className="text-center">
        <span className="mx-auto flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Sparkles className="size-4" /></span>
        <span className="mt-4 block text-2xl font-semibold text-foreground">10M+</span>
        <Line className="mx-auto mt-2 w-24 text-foreground/15" />
        <div className="mt-5 grid grid-cols-3 gap-2">{[0, 1, 2].map((item) => <span key={item} className="flex h-8 items-center justify-center rounded-lg bg-muted ring-1 ring-foreground/10"><span className="size-3 rounded-full bg-foreground/10" /></span>)}</div>
      </div>,
      <div className="rounded-lg bg-foreground p-2 text-background">
        <div className="flex items-center gap-1.5 border-b border-background/15 pb-2"><span className="size-1.5 rounded-full bg-background/30" /><span className="font-mono text-[7px] text-background/60">{ui.verify}</span></div>
        <div className="mt-3 space-y-2 font-mono text-[8px]">
          <div className="flex items-center gap-2"><Check className="size-3 text-primary" /><span>DESIGN.md</span><span className="ml-auto text-background/45">42 / 42</span></div>
          <div className="flex items-center gap-2"><Check className="size-3 text-primary" /><span>/docs/ko</span><span className="ml-auto text-background/45">200</span></div>
          <div className="flex items-center gap-2"><Check className="size-3 text-primary" /><span>mobile</span><span className="ml-auto text-background/45">0 px</span></div>
        </div>
        <div className="mt-5 rounded-md bg-background/10 p-2"><span className="font-mono text-[7px] text-background/55">{ui.artifact}</span><div className="mt-2 flex items-center gap-2"><FileText className="size-3 text-primary" /><span className="font-mono text-[8px]">report.md</span></div></div>
      </div>,
    );
  }

  if (id === "density") {
    return pair(
      <div className="space-y-3">
        {["08:30", "09:15", "10:40"].map((time) => <div key={time} className="rounded-lg p-4 ring-1 ring-foreground/10"><span className="font-mono text-[8px] text-muted-foreground">{time}</span><Line className="mt-3 w-3/4 text-foreground/20" /></div>)}
      </div>,
      <div className="rounded-lg ring-1 ring-foreground/10">
        <div className="flex h-8 items-center gap-2 border-b border-border/70 px-2"><Search className="size-3 text-muted-foreground" /><Line className="w-16 text-foreground/10" /><ListFilter className="ml-auto size-3 text-primary" /></div>
        <div className="grid grid-cols-[2.8rem_1fr_2rem] bg-muted/45 px-2 py-1.5 font-mono text-[7px] text-muted-foreground"><span>{ui.time}</span><span>{ui.route}</span><span>{ui.status}</span></div>
        <div className="divide-y divide-border/70">{["08:30", "09:15", "10:40", "12:00"].map((time, index) => <div key={time} className="grid grid-cols-[2.8rem_1fr_2rem] items-center px-2 py-2"><span className="font-mono text-[7px] text-muted-foreground">{time}</span><span className="font-mono text-[7px] text-foreground/65">/{index + 1}</span><Check className={`size-3 ${index === 1 ? "text-primary" : "text-foreground/25"}`} /></div>)}</div>
      </div>,
    );
  }

  if (id === "states") {
    return pair(
      <div className="flex h-40 items-center justify-center text-center">
        <div><span className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-4" /></span><Line className="mx-auto mt-4 w-20 text-foreground/20" /><Line className="mx-auto mt-2 w-12 text-foreground/10" /></div>
      </div>,
      <div className="space-y-2">
        {[
          { icon: <span className="font-mono text-[8px]">0</span>, tone: "bg-muted text-muted-foreground" },
          { icon: <LoaderCircle className="size-3" />, tone: "bg-muted text-muted-foreground" },
          { icon: <AlertCircle className="size-3" />, tone: "bg-destructive/10 text-destructive" },
          { icon: <CircleCheck className="size-3" />, tone: "bg-primary/10 text-primary" },
        ].map((state, index) => <div key={index} className="flex items-center gap-2 rounded-lg px-2 py-2 ring-1 ring-foreground/10"><span className={`flex size-6 items-center justify-center rounded-md ${state.tone}`}>{state.icon}</span><div className="min-w-0 flex-1"><Line className={`${index === 2 ? "w-4/5" : "w-3/5"} text-foreground/20`} /><Line className="mt-1.5 w-2/5 text-foreground/10" /></div>{index === 2 && <ArrowRight className="size-3 text-destructive" />}</div>)}
      </div>,
    );
  }

  if (id === "responsive") {
    return pair(
      <div className="mx-auto w-24 overflow-hidden rounded-[14px] bg-muted p-1.5 ring-1 ring-foreground/15">
        <div className="overflow-hidden rounded-[10px] bg-background">
          <MiniChrome title={ui.desktop} />
          <div className="w-48 p-2"><div className="grid grid-cols-3 gap-2"><div className="h-20 rounded bg-primary/20" /><div className="h-20 rounded bg-muted" /><div className="h-20 rounded bg-muted" /></div><div className="mt-2 flex gap-2"><span className="h-6 w-20 rounded-lg bg-primary" /><span className="h-6 w-16 rounded-lg bg-muted" /></div></div>
        </div>
      </div>,
      <div className="mx-auto w-24 rounded-[14px] bg-muted p-1.5 ring-1 ring-foreground/15">
        <div className="overflow-hidden rounded-[10px] bg-background">
          <div className="flex h-7 items-center justify-between border-b border-border/70 px-2"><span className="font-mono text-[7px] text-foreground/60">3 / 3</span><MoreHorizontal className="size-3 text-muted-foreground" /></div>
          <div className="p-2"><div className="h-12 rounded-lg bg-primary/12 p-2"><CreditCard className="size-3 text-primary" /><Line className="mt-2 w-10 text-primary/40" /></div><Line className="mt-3 w-full text-foreground/20" /><Line className="mt-2 w-2/3 text-foreground/10" /><div className="mt-4 flex h-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"><ArrowRight className="size-3" /></div></div>
        </div>
      </div>,
    );
  }

  if (id === "motion") {
    return pair(
      <div className="relative h-40 rounded-lg bg-muted/35 p-3 ring-1 ring-foreground/10">
        <div className="flex items-center justify-between"><Line className="w-16 text-foreground/20" /><Bell className="size-4 text-primary" /></div>
        <div className="absolute left-3 right-3 top-12 space-y-2">{["translate-x-2 -rotate-1", "-translate-x-1 rotate-1", "translate-x-3"].map((movement, index) => <div key={index} className={`${movement} flex items-center gap-2 rounded-lg bg-background p-2 shadow-sm ring-1 ring-foreground/10`}><span className="size-2 rounded-full bg-primary/40" /><Line className="w-3/5 text-foreground/15" /></div>)}</div>
        <span className="absolute bottom-2 right-3 font-mono text-[8px] text-primary">↑ · ↗ · ↕</span>
      </div>,
      <div className="relative h-40 rounded-lg ring-1 ring-foreground/10">
        <MiniChrome title={ui.notifications} action={<span className="flex size-5 items-center justify-center rounded-md bg-primary/10 text-primary"><Bell className="size-3" /></span>} />
        <div className="absolute right-2 top-9 w-28 rounded-lg bg-background p-2 ring-1 ring-foreground/15"><div className="flex items-center gap-2"><span className="flex size-5 items-center justify-center rounded-md bg-primary/10 text-primary"><Check className="size-3" /></span><div className="flex-1"><Line className="w-full text-foreground/20" /><Line className="mt-1.5 w-2/3 text-foreground/10" /></div></div><div className="mt-3 h-1 overflow-hidden rounded-full bg-muted"><span className="block h-full w-4/5 bg-primary" /></div></div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-[7px] text-muted-foreground"><Clock3 className="size-3" /> 180 ms <ArrowRight className="size-3 text-primary" /></div>
      </div>,
    );
  }

  return pair(
    <div>
      <div className="flex flex-wrap gap-2">{[ui.all, ui.newLabel, ui.open, "12"].map((label) => <span key={label} className="rounded-full bg-primary/10 px-2 py-1 font-mono text-[7px] text-primary ring-1 ring-primary/15">{label}</span>)}</div>
      <div className="mt-4 rounded-full bg-muted px-3 py-2 ring-1 ring-foreground/10"><div className="flex items-center gap-2"><Search className="size-3 text-muted-foreground" /><Line className="w-16 text-foreground/10" /></div></div>
      <div className="mt-4 rounded-full bg-primary px-3 py-2 text-center font-mono text-[8px] text-primary-foreground">{specimen.nextStep}</div>
    </div>,
    <div className="rounded-lg ring-1 ring-foreground/10">
      <div className="flex items-center gap-3 border-b border-border/70 px-2 py-2 font-mono text-[7px]"><span className="border-b-2 border-primary pb-1 text-primary">{specimen.reference}</span><span className="pb-1 text-muted-foreground">{specimen.output}</span></div>
      <div className="flex items-center gap-2 border-b border-border/70 p-2"><div className="flex flex-1 items-center gap-2 rounded-lg bg-muted/50 px-2 py-1.5"><Search className="size-3 text-muted-foreground" /><Line className="w-14 text-foreground/10" /></div><span className="flex size-7 items-center justify-center rounded-lg ring-1 ring-foreground/10"><ListFilter className="size-3 text-foreground/60" /></span></div>
      <div className="p-2"><div className="flex items-center justify-between"><span className="inline-flex items-center gap-1 text-[8px] text-primary"><Check className="size-3" /> {specimen.verified}</span><ChevronDown className="size-3 text-muted-foreground" /></div><div className="mt-4 flex h-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"><ArrowRight className="size-3" /></div></div>
    </div>,
  );
}

function DirectionVisual({ direction }: { direction: Direction }) {
  if (direction.id === "editorial") {
    return <div aria-hidden="true" className="h-36 overflow-hidden border-y border-foreground/20 py-4"><div className="h-8 w-4/5 bg-foreground" /><div className="mt-2 h-8 w-3/5 bg-foreground" /><div className="mt-5 grid grid-cols-[1fr_5rem] gap-4"><Line className="w-full text-foreground/15" /><div className="h-10 bg-primary/15" /></div></div>;
  }
  if (direction.id === "product") {
    return <div aria-hidden="true" className="h-36 overflow-hidden rounded-lg ring-1 ring-foreground/10"><div className="grid grid-cols-[4rem_1fr] border-b border-border bg-muted/40 px-3 py-2"><Line className="w-7 text-foreground/15" /><Line className="w-12 text-foreground/15" /></div>{["08:30", "09:12", "10:04", "11:48"].map((time, index) => <div key={time} className="grid grid-cols-[4rem_1fr_auto] items-center border-b border-border px-3 py-2 last:border-b-0"><span className="font-mono text-[8px] text-muted-foreground">{time}</span><Line className={`${index === 1 ? "w-4/5 text-primary" : "w-3/5 text-foreground/15"}`} /><span className="size-2 rounded-full bg-foreground/10" /></div>)}</div>;
  }
  return <div aria-hidden="true" className="h-36 max-w-72"><div className="h-5 w-4/5 rounded bg-foreground" /><Line className="mt-5 w-full text-foreground/15" /><Line className="mt-2 w-4/5 text-foreground/15" /><div className="mt-7 h-9 w-28 rounded-lg bg-primary" /></div>;
}

function BeforeInterfaceSpecimen({ nextGen }: { nextGen: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-64 overflow-hidden rounded-xl bg-gradient-to-br from-primary/25 via-muted to-primary/10 p-4 ring-1 ring-primary/20"
    >
      <div className="absolute -right-8 -top-10 size-32 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-12 -left-8 size-36 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative rounded-xl bg-background/75 p-3 shadow-sm ring-1 ring-primary/20 backdrop-blur">
        <div className="border-l-4 border-primary pl-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-1 font-mono text-[8px] text-primary">
            <Sparkles className="size-2.5" /> {nextGen}
          </span>
          <div className="mt-3 h-3 w-4/5 rounded-full bg-foreground/20" />
          <div className="mt-2 h-2 w-3/5 rounded-full bg-foreground/10" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[WandSparkles, Sparkles, LayoutTemplate].map((Icon, index) => (
            <div key={index} className="rounded-lg bg-background/80 p-2 text-center shadow-sm ring-1 ring-primary/15">
              <span className="mx-auto flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/55 text-primary-foreground">
                <Icon className="size-3.5" />
              </span>
              <span className="mx-auto mt-2 block h-1.5 w-8 rounded-full bg-foreground/15" />
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-background/80 p-2 ring-1 ring-primary/15">
          <div className="rounded-md bg-gradient-to-r from-primary to-primary/60 p-2">
            <span className="mx-auto block h-1.5 w-16 rounded-full bg-primary-foreground/80" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AfterInterfaceSpecimen({ specimen }: { specimen: AntiSlopContent["specimen"] }) {
  return (
    <div aria-hidden="true" className="min-h-64 rounded-xl bg-background p-5 ring-1 ring-foreground/10">
      <div className="flex items-center justify-between border-b border-border/70 pb-3">
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-muted-foreground">DESIGN.md</span>
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-primary"><Check className="size-3" /> {specimen.verified}</span>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_8rem]">
        <div>
          <span className="font-mono text-[9px] tabular-nums text-primary">{specimen.reference}</span>
          <div className="mt-3 h-4 w-4/5 rounded-full bg-foreground/80" />
          <div className="mt-3 space-y-2">
            <div className="h-2 w-full rounded-full bg-foreground/10" />
            <div className="h-2 w-5/6 rounded-full bg-foreground/10" />
            <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
          </div>
        </div>
        <div className="flex flex-col justify-between border-t border-border/70 pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
          <div>
            <span className="block font-mono text-[9px] text-muted-foreground">{specimen.output}</span>
            <span className="mt-2 block text-xs font-medium text-foreground">{specimen.nextStep}</span>
          </div>
          <span className="mt-5 flex h-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ArrowRight className="size-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

function TextSpecimen({ example, side }: { example: Example; side: "before" | "after" }) {
  const isBefore = side === "before";
  const signals = isBefore ? example.beforeSignals : example.afterSignals;
  return (
    <div className={isBefore ? "rounded-xl bg-muted/45 p-5 ring-1 ring-foreground/10" : "rounded-xl bg-background p-5 ring-1 ring-primary/20"}>
      <p className="text-lg font-medium leading-7 tracking-tight text-foreground">
        {isBefore ? example.beforeTitle : example.afterTitle}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {isBefore ? example.beforeBody : example.afterBody}
      </p>
      <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border/70 pt-4">
        {signals.map((signal) => (
          <span
            key={signal}
            className={isBefore ? "rounded-md bg-background px-2 py-1 text-[10px] text-muted-foreground ring-1 ring-foreground/10" : "inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary"}
          >
            {!isBefore && <Check className="size-2.5" />}
            {signal}
          </span>
        ))}
      </div>
    </div>
  );
}

function ComparisonPanel({ content, example }: { content: AntiSlopContent; example: Example }) {
  const isInterface = example.id === "interface";
  return (
    <TabsContent value={example.id} className="mt-5">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] lg:items-center">
        <div>
          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{content.beforeLabel}</p>
          {isInterface ? (
            <div>
              <BeforeInterfaceSpecimen nextGen={content.specimen.nextGen} />
              <h3 className="mt-4 text-base font-medium text-foreground">{example.beforeTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{example.beforeBody}</p>
            </div>
          ) : <TextSpecimen example={example} side="before" />}
        </div>
        <span className="mx-auto hidden size-8 items-center justify-center rounded-full bg-muted text-muted-foreground ring-1 ring-foreground/10 lg:flex">
          <ArrowRight className="size-3.5" />
        </span>
        <div>
          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{content.afterLabel}</p>
          {isInterface ? (
            <div>
              <AfterInterfaceSpecimen specimen={content.specimen} />
              <h3 className="mt-4 text-base font-medium text-foreground">{example.afterTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{example.afterBody}</p>
            </div>
          ) : <TextSpecimen example={example} side="after" />}
        </div>
      </div>
      <div className="mt-5 grid gap-3 border-y border-border/70 py-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
        <div className="flex flex-wrap gap-1.5">
          {example.ruleIds.map((ruleId) => (
            <code key={ruleId} className="rounded-md bg-muted px-2 py-1 text-[10px] text-foreground/70">{ruleId}</code>
          ))}
        </div>
        <p className="text-sm leading-6 text-muted-foreground sm:pl-3">
          <span className="mr-2 font-medium text-foreground">{content.detectedLabel}</span>
          {example.reason}
        </p>
      </div>
    </TabsContent>
  );
}

export function AntiSlopPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.antiSlop;
  const exampleOrder = { interface: 0, writing: 1, locale: 2 } as const;
  const orderedExamples = [...content.examples].sort((left, right) => exampleOrder[left.id] - exampleOrder[right.id]);
  const defaultExample = orderedExamples[0]?.id;

  return (
    <article>
      <header className="mb-8 border-b border-border/60 pb-6 sm:mb-14 sm:pb-10">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{content.eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:mt-4 sm:text-5xl lg:text-6xl">
          {content.title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">{content.lead}</p>
      </header>

      <section id="definition" className="scroll-mt-24">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">01 — {content.definitionTitle}</p>
        <p className="mt-5 max-w-4xl text-balance text-2xl font-medium leading-tight tracking-[-0.025em] text-foreground sm:text-4xl">
          {content.definitionBody}
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{content.definitionNote}</p>
      </section>

      <section id="principles" className="mt-20 scroll-mt-24">
        <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">{content.principlesTitle}</h2>
        <ol className="mt-7 border-y border-border/70">
          {content.principles.map((principle, index) => (
            <li key={principle.title} className="grid gap-3 border-b border-border/70 py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(0,0.55fr)_minmax(0,1fr)] sm:items-start sm:gap-5">
              <span className="font-mono text-xs font-medium tabular-nums text-primary">0{index + 1}</span>
              <h3 className="text-sm font-semibold text-foreground">{principle.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{principle.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="atlas" className="mt-20 scroll-mt-24">
        <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">{content.atlasTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">{content.atlasLead}</p>
        <div className="mt-8 divide-y divide-border/70 border-y border-border/70">
          {content.lenses.map((lens, index) => (
            <article key={lens.id} className="grid gap-7 py-8 lg:grid-cols-[minmax(20rem,0.85fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <LensVisual
                  id={lens.id}
                  beforeLabel={content.slopSignalLabel}
                  afterLabel={content.designerPreferenceLabel}
                  specimen={content.specimen}
                  ui={content.specimenUi}
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] font-semibold tabular-nums text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-foreground">{lens.title}</h3>
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-foreground">{lens.question}</p>
                <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{content.slopSignalLabel}</dt>
                    <dd className="mt-2 text-xs leading-5 text-muted-foreground">{lens.slop}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-primary">{content.designerPreferenceLabel}</dt>
                    <dd className="mt-2 text-xs leading-5 text-foreground/75">{lens.preference}</dd>
                  </div>
                  <div className="sm:col-span-2 border-t border-border/70 pt-4">
                    <dt className="text-[10px] font-medium text-foreground">{content.validWhenLabel}</dt>
                    <dd className="mt-1 text-xs leading-5 text-muted-foreground">{lens.validWhen}</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {lens.ruleIds.map((ruleId) => <code key={ruleId} className="rounded-md bg-muted px-2 py-1 text-[9px] text-foreground/65">{ruleId}</code>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="directions" className="mt-20 scroll-mt-24">
        <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">{content.directionsTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">{content.directionsLead}</p>
        <div className="mt-8 grid gap-x-8 gap-y-10 lg:grid-cols-3">
          {content.directions.map((direction) => (
            <article key={direction.id} className="border-t border-foreground/20 pt-5">
              <DirectionVisual direction={direction} />
              <h3 className="mt-6 text-base font-semibold text-foreground">{direction.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{direction.body}</p>
              <p className="mt-4 text-xs leading-5 text-foreground/75">{direction.proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="comparison" className="mt-20 scroll-mt-24">
        <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">{content.compareTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{content.compareLead}</p>
        <Tabs defaultValue={defaultExample} className="mt-7">
          <TabsList className="grid h-10 w-full grid-cols-3 sm:w-fit sm:min-w-96" aria-label={content.compareTitle}>
            {orderedExamples.map((example) => {
              const Icon = exampleIcons[example.id];
              return <TabsTrigger key={example.id} value={example.id} className="px-2 sm:px-4"><Icon className="size-3.5" />{example.tab}</TabsTrigger>;
            })}
          </TabsList>
          {orderedExamples.map((example) => <ComparisonPanel key={example.id} content={content} example={example} />)}
        </Tabs>
      </section>

      <section id="classifier" className="mt-20 scroll-mt-24">
        <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">{content.classifierTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{content.classifierLead}</p>
        <div className="mt-7 divide-y divide-border/70 border-y border-border/70">
          {content.classifications.map((item) => (
            <div key={item.label} className="grid gap-3 py-5 sm:grid-cols-[7rem_minmax(0,0.65fr)_minmax(0,1fr)] sm:items-start sm:gap-5">
              <span className={item.label === "SLOP" ? "w-fit rounded-md bg-primary px-2 py-1 font-mono text-[10px] font-semibold tracking-wider text-primary-foreground" : "w-fit rounded-md bg-muted px-2 py-1 font-mono text-[10px] font-semibold tracking-wider text-foreground/65"}>{item.label}</span>
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="mt-20 scroll-mt-24">
        <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">{content.workflowTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{content.workflowLead}</p>
        <ol className="mt-7 grid border-y border-border/70 lg:grid-cols-5">
          {content.workflow.map((step, index) => (
            <li key={step.title} className="border-b border-border/70 py-5 last:border-b-0 lg:border-b-0 lg:border-r lg:px-4 lg:last:border-r-0 lg:first:pl-0 lg:last:pr-0">
              <span className="font-mono text-xs font-semibold tabular-nums text-primary">0{index + 1}</span>
              <h3 className="mt-4 text-sm font-semibold leading-5 text-foreground">{step.title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="sources" className="mt-20 scroll-mt-24">
        <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">{content.sourcesTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{content.sourcesLead}</p>
        <div className="mt-7 divide-y divide-border/70 border-y border-border/70">
          {content.sources.map((source) => (
            <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="group grid gap-2 rounded-lg py-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:grid-cols-[12rem_minmax(0,1fr)_auto] sm:items-center sm:gap-5">
              <span className="text-sm font-medium text-foreground group-hover:text-primary">{source.label}</span>
              <span className="text-xs leading-5 text-muted-foreground">{source.note}</span>
              <ArrowUpRight className="size-3.5 text-muted-foreground group-hover:text-primary" />
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
