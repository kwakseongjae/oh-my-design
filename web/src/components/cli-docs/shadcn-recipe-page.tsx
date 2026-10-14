import { ArrowUpRight, Check, CircleAlert, FileText } from "lucide-react";
import Link from "next/link";
import type { CliDocsDictionary } from "@/data/cli-docs";
import {
  SHADCN_EARLIER_RUNS,
  SHADCN_RUN_EVIDENCE,
  SHADCN_RUN_EXCERPT,
  SHADCN_SKILL_INSTALL,
  SHADCN_SKILL_SOURCE,
} from "@/data/docs-shadcn-recipe";
import { CopyCode } from "./copy-code";

/** Renders `code` spans in recipe copy; everything else stays plain text. */
function InlineCode({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/g).map((part, index) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <code key={index} className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em] text-foreground">
            {part.slice(1, -1)}
          </code>
        ) : (
          part
        ),
      )}
    </>
  );
}

function SectionHeading({ id, children, lead }: { id: string; children: string; lead?: string }) {
  return (
    <div id={id} className="scroll-mt-24 pt-4">
      <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">{children}</h2>
      {lead && <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{lead}</p>}
    </div>
  );
}

export function ShadcnRecipePage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.shadcn;
  const copyProps = {
    copyLabel: dictionary.ui.copy,
    copiedLabel: dictionary.ui.copied,
    failureLabel: dictionary.ui.copyFailed,
  };

  return (
    <article>
      <header className="mb-8 border-b border-border/60 pb-6 sm:mb-14 sm:pb-10">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{content.eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:mt-4 sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">{content.lead}</p>
      </header>

      <section>
        <SectionHeading id="answer">{content.answerTitle}</SectionHeading>
        <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-foreground">
          <InlineCode text={content.answerBody} />
        </p>
      </section>

      <section className="mt-16">
        <SectionHeading id="steps">{content.stepsTitle}</SectionHeading>
        <ol className="mt-7 divide-y divide-border/60 border-y border-border/60">
          {content.steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4">
              <span className="pt-0.5 font-mono text-sm font-semibold tabular-nums text-primary">0{index + 1}</span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  <InlineCode text={step.body} />
                </p>
                {step.command && (
                  <div className="mt-4">
                    <CopyCode code={step.command} {...copyProps} kind={step.command === SHADCN_SKILL_INSTALL ? "install" : "recipe"} />
                  </div>
                )}
                {index === content.steps.length - 1 && (
                  <div className="mt-5">
                    <p className="mb-2 text-xs font-medium text-foreground">{content.promptTitle}</p>
                    <CopyCode code={content.prompt} {...copyProps} kind="agent" />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionHeading id="carries" lead={content.carryLead}>{content.carryTitle}</SectionHeading>
        <dl className="mt-7 divide-y divide-border/60 rounded-xl ring-1 ring-foreground/10">
          {content.carries.map((fact) => (
            <div key={fact.label} className="grid gap-1 px-4 py-3.5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4">
              <dt className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                {fact.label}
              </dt>
              <dd className="text-sm leading-6 text-muted-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16">
        <SectionHeading id="limits">{content.limitsTitle}</SectionHeading>
        <ul className="mt-6 space-y-3">
          {content.limits.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <CircleAlert className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <SectionHeading id="evidence" lead={content.evidenceBody}>{content.evidenceTitle}</SectionHeading>
        <figure className="mt-6 overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
          <figcaption className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5 font-mono text-[11px] text-muted-foreground">
            <FileText className="h-3.5 w-3.5" aria-hidden />
            REPORT.md · toss/design.md · 2026-10-14
          </figcaption>
          <pre lang="en" className="overflow-x-auto whitespace-pre-wrap break-words p-4 font-mono text-xs leading-5 text-foreground">
            {SHADCN_RUN_EXCERPT}
          </pre>
        </figure>
        <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
          <a href={SHADCN_RUN_EVIDENCE} className="inline-flex items-center gap-1.5 font-medium text-primary" rel="noopener">
            {content.evidenceLink}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
          <a href={SHADCN_EARLIER_RUNS} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground" rel="noopener">
            {content.evidenceLinkEarlier}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
          <a href={SHADCN_SKILL_SOURCE} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground" rel="noopener">
            shadcn-ui/ui#12252
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
          <Link href="/design-systems" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
            {dictionary.ui.openCatalog}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </section>
    </article>
  );
}
