import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Bot,
  Check,
  CircleAlert,
  FileCode2,
  FileCheck2,
  Layers3,
  LayoutTemplate,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  WandSparkles,
} from "lucide-react";
import {
  CLI_DOCTOR_COMMAND,
  CLI_DOCS,
  CLI_INSTALL_COMMAND,
  type CliDocsDictionary,
} from "@/data/cli-docs";
import type { DocsLocale, DocsPage } from "@/lib/docs/locales";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyCode } from "./copy-code";
import { DocsShell } from "./docs-shell";
import { AntiSlopPage } from "./anti-slop-page";

type TocItem = { id: string; label: string };

export function getDocsToc(dictionary: CliDocsDictionary, page: DocsPage): TocItem[] {
  switch (page) {
    case "overview":
      return [
        { id: "outcomes", label: dictionary.overview.outcomesTitle },
        { id: "install", label: dictionary.overview.installTitle },
        { id: "why-omd", label: dictionary.overview.differentiatorTitle },
      ];
    case "getting-started":
      return [
        { id: "prerequisites", label: dictionary.gettingStarted.prerequisitesTitle },
        { id: "quick-start", label: dictionary.gettingStarted.stepsTitle },
        { id: "channels", label: dictionary.gettingStarted.channelsTitle },
        { id: "done", label: dictionary.gettingStarted.doneTitle },
      ];
    case "demo":
      return [
        { id: "formats", label: dictionary.demo.formatsTitle },
        { id: "runbook", label: dictionary.demo.runbookTitle },
        { id: "proof", label: dictionary.demo.proofTitle },
        { id: "guardrails", label: dictionary.demo.guardrailsTitle },
      ];
    case "workflows":
      return dictionary.workflows.workflows.map((item, index) => ({ id: `workflow-${index + 1}`, label: item.title }));
    case "skills":
      return [
        ...dictionary.skills.groups.map((group, index) => ({ id: `skill-group-${index + 1}`, label: group.title })),
        { id: "skill-routing", label: dictionary.skills.routingTitle },
      ];
    case "anti-slop":
      return [
        { id: "definition", label: dictionary.antiSlop.definitionTitle },
        { id: "principles", label: dictionary.antiSlop.principlesTitle },
        { id: "atlas", label: dictionary.antiSlop.atlasTitle },
        { id: "directions", label: dictionary.antiSlop.directionsTitle },
        { id: "comparison", label: dictionary.antiSlop.compareTitle },
        { id: "classifier", label: dictionary.antiSlop.classifierTitle },
        { id: "workflow", label: dictionary.antiSlop.workflowTitle },
        { id: "sources", label: dictionary.antiSlop.sourcesTitle },
      ];
    case "showcase":
      return [{ id: "real-case", label: dictionary.showcase.productCase.title }];
    case "troubleshooting":
      return [
        { id: "doctor", label: dictionary.troubleshooting.doctorTitle },
        ...dictionary.troubleshooting.cases.map((item, index) => ({ id: `issue-${index + 1}`, label: item.symptom })),
      ];
    case "ai":
      return [
        { id: "machine-readable", label: dictionary.ai.machineTitle },
        { id: "agent-prompt", label: dictionary.ai.promptTitle },
        { id: "agent-contract", label: dictionary.ai.contractTitle },
      ];
  }
}

export function CliDocsRoute({ locale, page }: { locale: DocsLocale; page: DocsPage }) {
  const dictionary = CLI_DOCS[locale];
  const toc = getDocsToc(dictionary, page);

  return (
    <DocsShell locale={locale} page={page} dictionary={dictionary} toc={toc}>
      {page === "overview" && <OverviewPage dictionary={dictionary} />}
      {page === "getting-started" && <GettingStartedPage dictionary={dictionary} />}
      {page === "demo" && <DemoPage dictionary={dictionary} />}
      {page === "workflows" && <WorkflowsPage dictionary={dictionary} />}
      {page === "skills" && <SkillsPage dictionary={dictionary} />}
      {page === "anti-slop" && <AntiSlopPage dictionary={dictionary} />}
      {page === "showcase" && <ShowcasePage dictionary={dictionary} />}
      {page === "troubleshooting" && <TroubleshootingPage dictionary={dictionary} />}
      {page === "ai" && <AiPage dictionary={dictionary} />}
    </DocsShell>
  );
}

function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <header className="mb-8 border-b border-border/60 pb-6 sm:mb-14 sm:pb-10">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:mt-4 sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">{lead}</p>
    </header>
  );
}

function SectionTitle({ id, children, lead }: { id: string; children: string; lead?: string }) {
  return (
    <div id={id} className="scroll-mt-24 pt-4">
      <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">{children}</h2>
      {lead && <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{lead}</p>}
    </div>
  );
}

function TruthCallout({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl bg-muted/35 p-5 ring-1 ring-foreground/10 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
          <CircleAlert className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
        </div>
      </div>
    </div>
  );
}

function OutcomePreview({
  variant,
  outputLabel,
  readyLabel,
  verifiedLabel,
}: {
  variant: number;
  outputLabel: string;
  readyLabel: string;
  verifiedLabel: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="relative isolate min-h-64 overflow-hidden rounded-xl bg-muted/35 p-4 ring-1 ring-foreground/10"
    >
      <div className="absolute -right-14 -top-16 size-40 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-14 size-44 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative flex items-center justify-between border-b border-border/70 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary" />
          <span className="size-1.5 rounded-full bg-primary/40" />
          <span className="size-1.5 rounded-full bg-primary/20" />
        </div>
        <span className="font-mono text-[9px] font-medium tracking-[0.12em] text-muted-foreground">
          {variant === 0 ? "DESIGN.md" : variant === 1 ? outputLabel : verifiedLabel}
        </span>
      </div>

      {variant === 0 && (
        <div className="relative mt-4 grid grid-cols-[0.8fr_1.2fr] gap-3">
          <div className="space-y-2 rounded-lg bg-background/80 p-3 ring-1 ring-foreground/10">
            <div className="flex items-center gap-2 text-primary">
              <FileCheck2 className="size-3.5" />
              <span className="h-1.5 w-12 rounded-full bg-primary/50" />
            </div>
            {["w-4/5", "w-3/5", "w-full", "w-2/3"].map((width, index) => (
              <div key={index} className={`h-1.5 ${width} rounded-full bg-foreground/10`} />
            ))}
            <div className="pt-1">
              <span className="inline-flex rounded-md bg-primary/10 px-2 py-1 font-mono text-[8px] text-primary">verified_v2</span>
            </div>
          </div>
          <div className="space-y-3 rounded-lg bg-background/80 p-3 ring-1 ring-foreground/10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] text-muted-foreground">TOKENS</span>
              <SlidersHorizontal className="size-3 text-primary" />
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              <span className="aspect-square rounded-md bg-primary" />
              <span className="aspect-square rounded-md bg-primary/70" />
              <span className="aspect-square rounded-md bg-primary/35" />
              <span className="aspect-square rounded-md bg-primary/10 ring-1 ring-primary/20" />
            </div>
            <div className="space-y-2">
              {["w-full", "w-4/5", "w-3/5"].map((width, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary/50" />
                  <span className={`h-1.5 ${width} rounded-full bg-foreground/10`} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-between rounded-lg bg-primary px-3 py-2 text-primary-foreground">
            <span className="font-mono text-[9px] font-medium">{readyLabel}</span>
            <Check className="size-3.5" />
          </div>
        </div>
      )}

      {variant === 1 && (
        <div className="relative mx-auto mt-4 max-w-64 rounded-xl bg-background/90 p-3 ring-1 ring-foreground/10">
          <div className="flex items-center justify-between">
            <LayoutTemplate className="size-4 text-primary" />
            <span className="rounded-full bg-primary/10 px-2 py-1 font-mono text-[8px] text-primary">02 / 03</span>
          </div>
          <div className="mt-5 flex justify-center">
            <div className="relative flex size-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
              <span className="size-7 rounded-lg bg-primary/80" />
              <span className="absolute -right-1 top-0 size-4 rounded-full bg-background ring-1 ring-primary/30" />
            </div>
          </div>
          <div className="mx-auto mt-4 h-2 w-28 rounded-full bg-foreground/15" />
          <div className="mx-auto mt-2 h-1.5 w-40 rounded-full bg-foreground/8" />
          <div className="mx-auto mt-1.5 h-1.5 w-32 rounded-full bg-foreground/8" />
          <div className="mt-5 flex h-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ArrowRight className="size-4" />
          </div>
          <div className="mt-3 flex justify-center gap-1.5">
            <span className="h-1.5 w-5 rounded-full bg-primary" />
            <span className="size-1.5 rounded-full bg-primary/25" />
            <span className="size-1.5 rounded-full bg-primary/25" />
          </div>
        </div>
      )}

      {variant === 2 && (
        <div className="relative mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="rounded-lg bg-background/65 p-3 opacity-70 ring-1 ring-foreground/10">
            <span className="mb-4 block h-2 w-14 rounded-full bg-foreground/15" />
            <div className="space-y-2.5">
              <div className="h-8 rounded-md bg-foreground/8" />
              <div className="ml-4 h-8 rounded-md bg-foreground/8" />
              <div className="h-8 rounded-md bg-foreground/8" />
            </div>
            <div className="mt-4 h-7 w-2/3 rounded-md bg-foreground/15" />
          </div>
          <div className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
            <ArrowRight className="size-3.5" />
          </div>
          <div className="rounded-lg bg-background p-3 ring-1 ring-primary/25">
            <div className="mb-4 flex items-center justify-between">
              <span className="h-2 w-16 rounded-full bg-primary/70" />
              <span className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="size-2.5" /></span>
            </div>
            <div className="space-y-2.5">
              <div className="h-8 rounded-md bg-primary/10 ring-1 ring-primary/15" />
              <div className="h-8 rounded-md bg-primary/10 ring-1 ring-primary/15" />
              <div className="h-8 rounded-md bg-primary/10 ring-1 ring-primary/15" />
            </div>
            <div className="mt-4 h-7 rounded-md bg-primary" />
          </div>
          <div className="col-span-3 mt-2 grid grid-cols-3 gap-2">
            {["01", "02", "03"].map((item) => (
              <span key={item} className="flex items-center justify-center gap-1 rounded-md bg-primary/10 px-2 py-1.5 text-center font-mono text-[8px] font-medium text-primary"><Check className="size-2.5" />{item}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function OverviewPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.overview;
  const icons = [Layers3, WandSparkles, ShieldCheck];
  return (
    <article>
      <PageHeader eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <section>
        <SectionTitle id="outcomes" lead={content.outcomesLead}>{content.outcomesTitle}</SectionTitle>
        <div className="mt-8 grid gap-4">
          {content.outcomes.map((outcome, index) => {
            const Icon = icons[index];
            return (
              <div key={outcome.title} className="relative overflow-hidden rounded-xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20"><Icon className="h-5 w-5" /></span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{outcome.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{outcome.description}</p>
                  </div>
                </div>
                <div className="mt-6 grid items-stretch gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(260px,1.1fr)]">
                  <div className="flex flex-col gap-3">
                    <div className="rounded-xl bg-muted/40 p-4 ring-1 ring-foreground/10">
                      <div className="flex items-center gap-2">
                        <span className="flex size-5 items-center justify-center rounded-md bg-primary/10 font-mono text-[9px] font-semibold text-primary">01</span>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-primary">{dictionary.ui.prompt}</p>
                      </div>
                      <p className="mt-3 text-[13px] leading-6 text-foreground/75">“{outcome.prompt}”</p>
                    </div>
                    <div className="relative flex-1 overflow-hidden rounded-xl bg-primary/5 p-4 ring-1 ring-primary/20">
                      <div className="flex items-center gap-2">
                        <span className="flex size-5 items-center justify-center rounded-md bg-primary text-[9px] text-primary-foreground"><Check className="size-3" /></span>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-primary">{dictionary.ui.result}</p>
                      </div>
                      <p className="mt-3 text-[13px] leading-6 text-foreground/80">{outcome.result}</p>
                    </div>
                  </div>
                  <OutcomePreview
                    variant={index}
                    outputLabel={dictionary.ui.actualOutput}
                    readyLabel={dictionary.ui.ready}
                    verifiedLabel={dictionary.ui.verified}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-10">
        <TruthCallout title={content.truthTitle} body={content.truthBody} />
        <p className="mt-4 text-center font-mono text-[11px] leading-5 text-muted-foreground">{content.proof}</p>
      </div>

      <section className="mt-20">
        <SectionTitle id="install" lead={content.installBody}>{content.installTitle}</SectionTitle>
        <div className="mt-6 space-y-3">
          <CopyCode code={CLI_INSTALL_COMMAND} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind="install" />
          <CopyCode code={CLI_DOCTOR_COMMAND} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind="agent" />
        </div>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{content.afterInstall}</p>
      </section>

      <section className="mt-20">
        <SectionTitle id="why-omd">{content.differentiatorTitle}</SectionTitle>
        <div className="mt-6 grid gap-3">
          {content.differentiators.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg p-4 ring-1 ring-foreground/10">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm leading-6 text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-xs">
          <a href="https://www.tasteskill.dev/docs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-muted-foreground ring-1 ring-foreground/10 transition-colors hover:bg-muted hover:text-foreground">Taste Skill docs <ArrowUpRight className="h-3 w-3" /></a>
          <a href="https://impeccable.style/tutorials/getting-started/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-muted-foreground ring-1 ring-foreground/10 transition-colors hover:bg-muted hover:text-foreground">Impeccable workflow <ArrowUpRight className="h-3 w-3" /></a>
          <a href="https://nextjs.org/docs/app/getting-started" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-muted-foreground ring-1 ring-foreground/10 transition-colors hover:bg-muted hover:text-foreground">Next.js docs pattern <ArrowUpRight className="h-3 w-3" /></a>
        </div>
      </section>
    </article>
  );
}

function GettingStartedPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.gettingStarted;
  const channelTabs = [...content.channels].sort((left, right) => {
    if (left.name === "Claude Code") return -1;
    if (right.name === "Claude Code") return 1;
    return 0;
  });
  const prerequisiteVisuals = [
    { Icon: FileCode2, marker: "20+" },
    { Icon: Route, marker: "git" },
    { Icon: Bot, marker: "AI" },
  ];
  return (
    <article>
      <PageHeader eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <section>
        <SectionTitle id="prerequisites">{content.prerequisitesTitle}</SectionTitle>
        <ul className="mt-7 grid gap-4 sm:grid-cols-3">
          {content.prerequisites.map((item, index) => {
            const { Icon, marker } = prerequisiteVisuals[index];
            return (
              <li
                key={item}
                className="relative isolate min-h-56 overflow-hidden rounded-xl bg-card p-5 ring-1 ring-foreground/10"
              >
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 -z-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl"
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] font-medium tabular-nums tracking-[0.16em] text-muted-foreground">
                    0{index + 1} / 03
                  </span>
                </div>
                <p className="mt-8 min-h-12 max-w-52 text-base font-medium leading-6 text-foreground">
                  {item}
                </p>
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between border-t border-border/60 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-primary" />
                    {dictionary.ui.ready}
                  </span>
                  <span className="rounded-md bg-muted px-2 py-1 font-mono text-[10px] font-semibold text-primary ring-1 ring-foreground/10">
                    {marker}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="mt-16">
        <SectionTitle id="quick-start">{content.stepsTitle}</SectionTitle>
        <ol className="mt-7 divide-y divide-border/60 border-y border-border/60">
          {content.steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4">
              <span className="pt-0.5 font-mono text-sm font-semibold tabular-nums text-primary">0{index + 1}</span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p>
                {step.command && <div className="mt-4"><CopyCode code={step.command} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind={step.command === CLI_INSTALL_COMMAND ? "install" : "agent"} /></div>}
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-20">
        <SectionTitle id="channels">{content.channelsTitle}</SectionTitle>
        <Tabs defaultValue="claude-code" className="mt-7 gap-4">
          <TabsList
            aria-label={content.channelsTitle}
            className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-xl bg-muted/70 p-1"
          >
            {channelTabs.map((channel) => {
              const value = channel.command.match(/--agent\s+([^\s]+)/)?.[1] ?? channel.name.toLowerCase();
              return (
                <TabsTrigger key={channel.name} value={value} className="h-9 min-w-fit flex-none px-3 text-xs sm:flex-1">
                  {channel.name}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {channelTabs.map((channel) => {
            const value = channel.command.match(/--agent\s+([^\s]+)/)?.[1] ?? channel.name.toLowerCase();
            return (
              <TabsContent
                key={channel.name}
                value={value}
                className="rounded-xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Bot className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-foreground">{channel.name}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{channel.body}</p>
                  </div>
                </div>
                <div className="mt-5 border-t border-border/60 pt-5">
                  <CopyCode code={channel.command} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind="install" />
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>
      <section className="mt-20 scroll-mt-24" id="done"><TruthCallout title={content.doneTitle} body={content.doneBody} /></section>
    </article>
  );
}

function DemoPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.demo;

  return (
    <article>
      <PageHeader eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      <section>
        <SectionTitle id="formats" lead={content.formatsLead}>{content.formatsTitle}</SectionTitle>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {content.formats.map((format, index) => (
            <div key={format.duration} className="flex flex-col rounded-xl bg-card p-5 ring-1 ring-foreground/10">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary ring-1 ring-primary/20">{format.duration}</span>
                <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{format.title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{format.when}</p>
              <p className="mt-5 text-sm leading-6 text-foreground/75">{format.goal}</p>
              <div className="mt-5 flex gap-2 border-t border-border/60 pt-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-xs leading-5 text-muted-foreground">{format.proof}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle id="runbook" lead={content.runbookLead}>{content.runbookTitle}</SectionTitle>
        <ol className="mt-8 divide-y divide-border/60 border-y border-border/60">
          {content.steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4">
              <span className="pt-0.5 font-mono text-sm font-semibold tabular-nums text-primary">0{index + 1}</span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p>
                {step.command && (
                  <div className="mt-4">
                    <CopyCode code={step.command} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind="install" />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 rounded-xl bg-primary/10 p-5 ring-1 ring-primary/20 sm:p-6">
          <div className="flex items-start gap-3">
            <WandSparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-foreground">{content.starterPromptTitle}</h3>
              <div className="mt-4">
                <CopyCode code={content.starterPrompt} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind="recipe" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle id="proof" lead={content.proofLead}>{content.proofTitle}</SectionTitle>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {content.proof.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg p-4 ring-1 ring-foreground/10">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm leading-6 text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle id="guardrails">{content.guardrailsTitle}</SectionTitle>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {content.guardrails.map((item) => (
            <div key={item.title} className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
              <div className="flex items-start gap-3">
                <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

function WorkflowsPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.workflows;
  return (
    <article>
      <PageHeader eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <div className="space-y-14">
        {content.workflows.map((workflow, index) => (
          <section key={workflow.title} id={`workflow-${index + 1}`} className="scroll-mt-24">
            <div className="flex flex-wrap items-center gap-3"><span className="font-mono text-xs text-primary">0{index + 1}</span><h2 className="text-2xl font-semibold tracking-tight text-foreground">{workflow.title}</h2><span className="rounded-full bg-muted px-2.5 py-1 text-[10px] text-muted-foreground ring-1 ring-foreground/10">{workflow.when}</span></div>
            <div className="mt-5"><CopyCode code={workflow.prompt} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind="recipe" /></div>
            <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
              <div className="rounded-lg p-4 ring-1 ring-foreground/10"><p className="font-mono text-[10px] uppercase tracking-wider text-primary">{dictionary.ui.result}</p><ul className="mt-3 space-y-2">{workflow.outputs.map((item) => <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-3.5 w-3.5 text-primary" />{item}</li>)}</ul></div>
              <div className="rounded-lg p-4 ring-1 ring-foreground/10"><p className="font-mono text-[10px] uppercase tracking-wider text-primary">{dictionary.ui.skillsLabel}</p><div className="mt-3 flex flex-wrap gap-1.5 sm:max-w-44">{workflow.skills.map((skill) => <code key={skill} className="rounded-md bg-primary/10 px-2 py-1 text-[11px] text-primary">{skill}</code>)}</div></div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function SkillsPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.skills;
  return (
    <article>
      <PageHeader eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <div className="rounded-lg bg-primary/10 px-4 py-3 font-mono text-xs text-primary ring-1 ring-primary/20">{content.countNote}</div>
      <div className="mt-14 space-y-12">
        {content.groups.map((group, index) => (
          <section key={group.title} id={`skill-group-${index + 1}`} className="scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{group.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {group.skills.map((skill) => <div key={skill} className="flex min-h-12 items-center gap-3 rounded-lg px-4 ring-1 ring-foreground/10"><FileCode2 className="h-4 w-4 text-primary" /><code className="text-[13px] text-foreground/75">{skill}</code></div>)}
            </div>
          </section>
        ))}
      </div>
      <section className="mt-20 scroll-mt-24" id="skill-routing"><TruthCallout title={content.routingTitle} body={content.routingBody} /></section>
    </article>
  );
}

function ActualProductCase({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.showcase.productCase;

  return (
    <section id="real-case" className="scroll-mt-24">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{content.eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl">{content.title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">{content.lead}</p>

      <figure className="mt-8 overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
        <video
          aria-label={content.videoLabel}
          className="aspect-video w-full bg-black object-cover"
          controls
          playsInline
          poster="/showcase/applepresso/02-design-system.png"
          preload="metadata"
        >
          <source src="/showcase/applepresso/applepresso.mp4" type="video/mp4" />
        </video>
        <figcaption className="border-t border-border/60 px-4 py-3">
          <p className="font-mono text-[11px] text-foreground/75">{content.videoLabel}</p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">{content.videoSummary}</p>
        </figcaption>
      </figure>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {[
          { label: content.beforeLabel, alt: content.beforeAlt, src: "/showcase/applepresso/01-controlled-baseline.png" },
          { label: content.afterLabel, alt: content.afterAlt, src: "/showcase/applepresso/02-design-system.png" },
        ].map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
            <Image
              alt={image.alt}
              className="aspect-video w-full object-cover"
              height={1080}
              sizes="(min-width: 768px) 420px, 100vw"
              src={image.src}
              width={1920}
            />
            <figcaption className="border-t border-border/60 px-4 py-3 text-xs font-medium text-foreground/75">{image.label}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {content.metrics.map((metric) => (
          <div key={metric} className="rounded-lg bg-primary/10 px-3 py-3 text-center font-mono text-[11px] text-primary ring-1 ring-primary/20">{metric}</div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-base font-semibold text-foreground">{content.promptLabel}</h3>
        <div className="mt-4"><CopyCode code={content.prompt} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind="recipe" /></div>
      </div>

      <div className="mt-6 grid gap-3">
        <div className="flex gap-3 rounded-xl bg-card p-5 ring-1 ring-foreground/10">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-muted-foreground">{content.disclosure}</p>
        </div>
        <p className="rounded-lg bg-muted/40 px-4 py-3 text-xs leading-5 text-muted-foreground ring-1 ring-foreground/10">{content.historicalNote}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <a href="/showcase/applepresso/archived-prompt.md" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-foreground ring-1 ring-foreground/10 transition-colors hover:bg-muted">
          {content.promptLinkLabel}<ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <a href="/showcase/applepresso/provenance.json" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-foreground ring-1 ring-foreground/10 transition-colors hover:bg-muted">
          {content.provenanceLinkLabel}<ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}

function ShowcasePage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.showcase;
  return (
    <article>
      <PageHeader eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <ActualProductCase dictionary={dictionary} />
    </article>
  );
}

function TroubleshootingPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.troubleshooting;
  return (
    <article>
      <PageHeader eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <section id="doctor" className="scroll-mt-24">
        <SectionTitle id="doctor-title" lead={content.doctorBody}>{content.doctorTitle}</SectionTitle>
        <div className="mt-5 space-y-3"><CopyCode code={CLI_DOCTOR_COMMAND} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind="agent" /><CopyCode code={`${CLI_DOCTOR_COMMAND} --json`} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind="agent" /></div>
      </section>
      <div className="mt-16 space-y-8">
        {content.cases.map((item, index) => <section key={item.symptom} id={`issue-${index + 1}`} className="scroll-mt-24 rounded-xl bg-card p-5 ring-1 ring-foreground/10"><div className="flex gap-3"><CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><h2 className="text-base font-semibold text-foreground">{item.symptom}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.fix}</p></div></div></section>)}
      </div>
    </article>
  );
}

function AiPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.ai;
  return (
    <article>
      <PageHeader eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <section id="machine-readable" className="scroll-mt-24">
        <SectionTitle id="machine-title" lead={content.machineBody}>{content.machineTitle}</SectionTitle>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">{content.machineLinks.map((item) => <a key={item.href} href={item.href} className="group rounded-lg p-4 ring-1 ring-foreground/10 transition-colors hover:bg-muted/60"><div className="flex items-center justify-between"><code className="text-sm text-primary">{item.label}</code><ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground" /></div><p className="mt-2 text-xs leading-5 text-muted-foreground">{item.description}</p></a>)}</div>
      </section>
      <section id="agent-prompt" className="mt-20 scroll-mt-24">
        <SectionTitle id="agent-prompt-title">{content.promptTitle}</SectionTitle>
        <div className="mt-5"><CopyCode code={content.prompt} copyLabel={dictionary.ui.copy} copiedLabel={dictionary.ui.copied} failureLabel={dictionary.ui.copyFailed} kind="agent" /></div>
      </section>
      <section id="agent-contract" className="mt-20 scroll-mt-24">
        <SectionTitle id="agent-contract-title">{content.contractTitle}</SectionTitle>
        <div className="mt-6 space-y-3">{content.contract.map((item, index) => <div key={item} className="flex gap-3 rounded-lg p-4 ring-1 ring-foreground/10"><span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-[10px] text-primary">{index + 1}</span><p className="text-sm leading-6 text-muted-foreground">{item}</p></div>)}</div>
      </section>
      <div className="mt-16 rounded-xl bg-primary/10 p-6 ring-1 ring-primary/20">
        <div className="flex items-start gap-3"><Route className="mt-0.5 h-5 w-5 text-primary" /><div><p className="text-sm font-semibold text-foreground">{content.builderTitle}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{content.builderBody}</p><Link href="/builder" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">{dictionary.ui.openBuilder}<ArrowUpRight className="h-3.5 w-3.5" /></Link></div></div>
      </div>
    </article>
  );
}
