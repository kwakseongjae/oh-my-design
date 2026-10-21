import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CLI_DOCTOR_COMMAND, CLI_DOCS, CLI_INSTALL_COMMAND, type CliDocsDictionary } from "@/data/cli-docs";
import { SHADCN_EARLIER_RUNS, SHADCN_RUN_EVIDENCE, SHADCN_RUN_EXCERPT, SHADCN_SKILL_SOURCE } from "@/data/docs-shadcn-recipe";
import { DOCS_SITE_LOCALE, docsHref, type DocsLocale, type DocsPage } from "@/lib/docs/locales";
import { catalogPathFor } from "@/lib/i18n/ko-detail";
import { CopyCode } from "./copy-code";
import { DocsShell } from "./docs-shell";
import { AntiSlopPage } from "./anti-slop-page";
import { ChannelTabs } from "./channel-tabs";
import type { TocItem } from "./docs-toc";
import { DocsHead, DocsSection } from "./docs-blocks";
import { InlineText } from "./inline-text";

/** The on-this-page list for each page. Every id is an <h2 id> the page renders. */
export function getDocsToc(dictionary: CliDocsDictionary, page: DocsPage): TocItem[] {
  switch (page) {
    case "overview":
      return [
        { id: "two-parts", label: dictionary.overview.partsTitle },
        { id: "install", label: dictionary.overview.installTitle },
        { id: "outcomes", label: dictionary.overview.outcomesTitle },
        { id: "quality", label: dictionary.overview.qualityTitle },
        { id: "next-steps", label: dictionary.overview.nextTitle },
      ];
    case "getting-started":
      return [
        { id: "prerequisites", label: dictionary.gettingStarted.prerequisitesTitle },
        { id: "quick-start", label: dictionary.gettingStarted.stepsTitle },
        { id: "channels", label: dictionary.gettingStarted.channelsTitle },
        { id: "without-cli", label: dictionary.gettingStarted.rawTitle },
        { id: "done", label: dictionary.gettingStarted.doneTitle },
      ];
    case "workflows":
      return dictionary.workflows.workflows.map((item, index) => ({ id: `workflow-${index + 1}`, label: item.title }));
    case "demo":
      return [
        { id: "formats", label: dictionary.demo.formatsTitle },
        { id: "runbook", label: dictionary.demo.runbookTitle },
        { id: "proof", label: dictionary.demo.proofTitle },
        { id: "guardrails", label: dictionary.demo.guardrailsTitle },
      ];
    case "shadcn":
      return [
        { id: "answer", label: dictionary.shadcn.answerTitle },
        { id: "steps", label: dictionary.shadcn.stepsTitle },
        { id: "carries", label: dictionary.shadcn.carryTitle },
        { id: "limits", label: dictionary.shadcn.limitsTitle },
        { id: "evidence", label: dictionary.shadcn.evidenceTitle },
      ];
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
  }
}

export function CliDocsRoute({ locale, page }: { locale: DocsLocale; page: DocsPage }) {
  const dictionary = CLI_DOCS[locale];
  const toc = getDocsToc(dictionary, page);

  return (
    <DocsShell locale={locale} page={page} dictionary={dictionary} toc={toc}>
      {page === "overview" && <OverviewPage locale={locale} dictionary={dictionary} />}
      {page === "getting-started" && <GettingStartedPage dictionary={dictionary} />}
      {page === "workflows" && <WorkflowsPage dictionary={dictionary} />}
      {page === "demo" && <DemoPage dictionary={dictionary} />}
      {page === "shadcn" && <ShadcnPage dictionary={dictionary} />}
      {page === "skills" && <SkillsPage dictionary={dictionary} />}
      {page === "anti-slop" && <AntiSlopPage dictionary={dictionary} />}
    </DocsShell>
  );
}

function Code({ dictionary, code, kind }: { dictionary: CliDocsDictionary; code: string; kind: "install" | "recipe" | "agent" }) {
  return (
    <CopyCode
      code={code}
      copyLabel={dictionary.ui.copy}
      copiedLabel={dictionary.ui.copied}
      failureLabel={dictionary.ui.copyFailed}
      kind={kind}
    />
  );
}

function LinkRow({ href, title, description, code = false, external = false }: { href: string; title: string; description: string; code?: boolean; external?: boolean }) {
  const inner = (
    <>
      <span className="dx-row-t">{code ? <code translate="no">{title}</code> : title}</span>
      <span className="dx-row-d">{description}</span>
      {external ? <ArrowUpRight size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
    </>
  );
  return (
    <li>
      {external ? (
        <a className="dx-row" href={href} target="_blank" rel="noreferrer">{inner}</a>
      ) : (
        <Link className="dx-row" href={href} prefetch={false}>{inner}</Link>
      )}
    </li>
  );
}

/* ---- pages ---- */

function OverviewPage({ locale, dictionary }: { locale: DocsLocale; dictionary: CliDocsDictionary }) {
  const content = dictionary.overview;
  return (
    <article>
      <DocsHead title={content.title} lead={content.lead} />

      <DocsSection id="two-parts" title={content.partsTitle}>
        <div className="dx-cards">
          <div className="dx-card">
            <h3 className="dx-h3">{content.archive.name}</h3>
            <p className="dx-p"><InlineText text={content.archive.body} /></p>
            <Link className="dx-card-action" href={catalogPathFor(DOCS_SITE_LOCALE[locale])} prefetch={false}>
              {content.archive.action}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="dx-card">
            <h3 className="dx-h3" lang="en">{content.cli.name}</h3>
            <p className="dx-p"><InlineText text={content.cli.body} /></p>
            <Link className="dx-card-action" href={docsHref(locale, "getting-started")} prefetch={false}>
              {content.cli.action}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </DocsSection>

      <DocsSection id="install" title={content.installTitle} lead={content.installBody}>
        <div className="dx-stack">
          <Code dictionary={dictionary} code={CLI_INSTALL_COMMAND} kind="install" />
          <Code dictionary={dictionary} code={CLI_DOCTOR_COMMAND} kind="agent" />
        </div>
        <p className="dx-p dx-muted" style={{ marginTop: 16 }}>{content.afterInstall}</p>
      </DocsSection>

      <DocsSection id="outcomes" title={content.outcomesTitle} lead={content.outcomesLead}>
        <div className="dx-stack-lg">
          {content.outcomes.map((outcome) => (
            <div key={outcome.title} className="dx-item">
              <h3 className="dx-h3">{outcome.title}</h3>
              <p className="dx-p">{outcome.description}</p>
              <Code dictionary={dictionary} code={outcome.prompt} kind="recipe" />
              <dl className="dx-kv">
                <dt>{dictionary.ui.result}</dt>
                <dd>{outcome.result}</dd>
              </dl>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="quality" title={content.qualityTitle}>
        <p className="dx-p">{content.qualityBody}</p>
      </DocsSection>

      <DocsSection id="next-steps" title={content.nextTitle}>
        <ul className="dx-rows">
          {content.next.map((item) => (
            <LinkRow key={item.page} href={docsHref(locale, item.page)} title={dictionary.nav[item.page]} description={item.body} />
          ))}
        </ul>
      </DocsSection>
    </article>
  );
}

function GettingStartedPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.gettingStarted;
  return (
    <article>
      <DocsHead title={content.title} lead={content.lead} />

      <DocsSection id="prerequisites" title={content.prerequisitesTitle}>
        <ul className="dx-list">
          {content.prerequisites.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </DocsSection>

      <DocsSection id="quick-start" title={content.stepsTitle}>
        <ol className="dx-steps">
          {content.steps.map((step) => (
            <li key={step.title}>
              <h3 className="dx-h3">{step.title}</h3>
              <p className="dx-p dx-muted"><InlineText text={step.body} /></p>
              {step.command ? <Code dictionary={dictionary} code={step.command} kind={step.command === CLI_INSTALL_COMMAND ? "install" : "agent"} /> : null}
              {step.prompt ? <Code dictionary={dictionary} code={step.prompt} kind="recipe" /> : null}
            </li>
          ))}
        </ol>
      </DocsSection>

      <DocsSection id="channels" title={content.channelsTitle} lead={content.channelsLead}>
        <ChannelTabs
          label={content.channelsTitle}
          channels={content.channels}
          copy={{ copy: dictionary.ui.copy, copied: dictionary.ui.copied, failed: dictionary.ui.copyFailed }}
        />
      </DocsSection>

      <DocsSection id="without-cli" title={content.rawTitle} lead={content.rawBody}>
        <ul className="dx-rows">
          {content.rawLinks.map((link) => (
            <LinkRow key={link.href} href={link.href} title={link.label} description={link.description} code external />
          ))}
        </ul>
      </DocsSection>

      <DocsSection id="done" title={content.doneTitle}>
        <p className="dx-p">{content.doneBody}</p>
      </DocsSection>
    </article>
  );
}

function WorkflowsPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.workflows;
  return (
    <article>
      <DocsHead title={content.title} lead={content.lead} />
      {content.workflows.map((workflow, index) => (
        <DocsSection key={workflow.title} id={`workflow-${index + 1}`} title={workflow.title} lead={workflow.when}>
          <div className="dx-stack" style={{ marginTop: 20 }}>
            <Code dictionary={dictionary} code={workflow.prompt} kind="recipe" />
          </div>
          <dl className="dx-kv" style={{ marginTop: 16 }}>
            <dt>{dictionary.ui.result}</dt>
            <dd>{workflow.outputs.join(" · ")}</dd>
            <dt>{dictionary.ui.skillsLabel}</dt>
            <dd>
              <span className="dx-tags">
                {workflow.skills.map((skill) => <code key={skill} translate="no">{skill}</code>)}
              </span>
            </dd>
          </dl>
        </DocsSection>
      ))}
    </article>
  );
}

function DemoPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.demo;
  return (
    <article>
      <DocsHead title={content.title} lead={content.lead} />

      <DocsSection id="formats" title={content.formatsTitle} lead={content.formatsLead}>
        <div className="dx-stack-lg">
          {content.formats.map((format) => (
            <div key={format.duration} className="dx-item">
              <h3 className="dx-h3">{format.duration} · {format.title}</h3>
              <p className="dx-p dx-muted">{format.when}</p>
              <p className="dx-p">{format.goal}</p>
              <dl className="dx-kv">
                <dt>{dictionary.ui.verified}</dt>
                <dd>{format.proof}</dd>
              </dl>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="runbook" title={content.runbookTitle} lead={content.runbookLead}>
        <ol className="dx-steps">
          {content.steps.map((step) => (
            <li key={step.title}>
              <h3 className="dx-h3">{step.title}</h3>
              <p className="dx-p dx-muted"><InlineText text={step.body} /></p>
              {step.command ? <Code dictionary={dictionary} code={step.command} kind="install" /> : null}
            </li>
          ))}
        </ol>
        <div className="dx-item" style={{ marginTop: 40 }}>
          <h3 className="dx-h3">{content.starterPromptTitle}</h3>
          <Code dictionary={dictionary} code={content.starterPrompt} kind="recipe" />
        </div>
      </DocsSection>

      <DocsSection id="proof" title={content.proofTitle} lead={content.proofLead}>
        <ul className="dx-list">
          {content.proof.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </DocsSection>

      <DocsSection id="guardrails" title={content.guardrailsTitle}>
        <div className="dx-stack-lg" style={{ gap: 28 }}>
          {content.guardrails.map((item) => (
            <div key={item.title} className="dx-item" style={{ gap: 6 }}>
              <h3 className="dx-h3">{item.title}</h3>
              <p className="dx-p">{item.body}</p>
            </div>
          ))}
        </div>
      </DocsSection>
    </article>
  );
}

/**
 * A DESIGN.md from the archive handed to shadcn's own skill (feat/referral-1, 2026-10-14).
 * Shell commands here are not the OmD install, so they copy as "agent" (the install
 * metric counts only `npx oh-my-design-cli@latest`); the prompt copies as "recipe".
 */
function ShadcnPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.shadcn;
  const evidenceLinks = [
    { href: SHADCN_RUN_EVIDENCE, label: content.evidenceLink },
    { href: SHADCN_EARLIER_RUNS, label: content.evidenceLinkEarlier },
    { href: SHADCN_SKILL_SOURCE, label: "shadcn-ui/ui#12252" },
  ];
  return (
    <article>
      <DocsHead title={content.title} lead={content.lead} />

      <DocsSection id="answer" title={content.answerTitle}>
        <p className="dx-p"><InlineText text={content.answerBody} /></p>
      </DocsSection>

      <DocsSection id="steps" title={content.stepsTitle}>
        <ol className="dx-steps">
          {content.steps.map((step) => (
            <li key={step.title}>
              <h3 className="dx-h3">{step.title}</h3>
              <p className="dx-p dx-muted"><InlineText text={step.body} /></p>
              {step.command ? <Code dictionary={dictionary} code={step.command} kind="agent" /> : null}
            </li>
          ))}
        </ol>
        <div className="dx-item" style={{ marginTop: 40 }}>
          <h3 className="dx-h3">{content.promptTitle}</h3>
          <Code dictionary={dictionary} code={content.prompt} kind="recipe" />
        </div>
      </DocsSection>

      <DocsSection id="carries" title={content.carryTitle} lead={content.carryLead}>
        <dl className="dx-kv dx-facts">
          {content.carries.map((fact) => (
            <Fragment key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </Fragment>
          ))}
        </dl>
      </DocsSection>

      <DocsSection id="limits" title={content.limitsTitle}>
        <ul className="dx-list">
          {content.limits.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </DocsSection>

      <DocsSection id="evidence" title={content.evidenceTitle} lead={content.evidenceBody}>
        <pre lang="en" translate="no" className="dx-excerpt">{SHADCN_RUN_EXCERPT}</pre>
        <ul className="dx-list">
          {evidenceLinks.map((link) => (
            <li key={link.href}>
              <a className="dx-link" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            </li>
          ))}
        </ul>
      </DocsSection>
    </article>
  );
}

function SkillsPage({ dictionary }: { dictionary: CliDocsDictionary }) {
  const content = dictionary.skills;
  return (
    <article>
      <DocsHead title={content.title} lead={content.lead} />
      {content.groups.map((group, index) => (
        <DocsSection key={group.title} id={`skill-group-${index + 1}`} title={group.title} lead={group.description}>
          <div className="dx-skills">
            {group.skills.map((skill) => (
              <div key={skill} className="dx-skill">
                <code translate="no">{skill}</code>
                <p>{content.descriptions[skill]}</p>
              </div>
            ))}
          </div>
        </DocsSection>
      ))}
      <DocsSection id="skill-routing" title={content.routingTitle}>
        <p className="dx-p">{content.routingBody}</p>
      </DocsSection>
    </article>
  );
}
