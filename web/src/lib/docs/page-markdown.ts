import { CLI_DOCS, CLI_DOCTOR_COMMAND, CLI_INSTALL_COMMAND } from "@/data/cli-docs";
import { SHADCN_EARLIER_RUNS, SHADCN_RUN_EVIDENCE, SHADCN_RUN_EXCERPT, SHADCN_SKILL_SOURCE } from "@/data/docs-shadcn-recipe";
import { docsHref, docsLlmsHref, type DocsLocale, type DocsPage } from "./locales";

const SITE_URL = "https://oh-my-design.kr";

function bullets(items: string[]): string[] {
  return items.map((item) => `- ${item}`);
}

function code(value: string): string[] {
  return ["```text", value, "```"];
}

function section(title: string, body?: string): string[] {
  return [`## ${title}`, ...(body ? ["", body] : [])];
}

/**
 * Stable Markdown projection of each human docs page. This is deliberately
 * generated from the same locale dictionary as the rendered route so copy,
 * raw view, and llms handoff never drift into separate editorial sources.
 */
export function docsPageMarkdown(locale: DocsLocale, page: DocsPage): string {
  const dictionary = CLI_DOCS[locale];
  const lines: string[] = [];
  const add = (...parts: string[]) => lines.push(...parts, "");

  const begin = (title: string, lead: string) => {
    add(`# ${title}`, lead);
    add(
      `> Human page: ${SITE_URL}${docsHref(locale, page)}`,
      `> Locale index: ${SITE_URL}${docsLlmsHref(locale)}`,
    );
  };

  switch (page) {
    case "overview": {
      const content = dictionary.overview;
      begin(content.title, content.lead);
      add(...section(content.partsTitle));
      add(`### ${content.archive.name}`, content.archive.body);
      add(`### ${content.cli.name}`, content.cli.body);
      add(...section(content.installTitle, content.installBody), ...code(CLI_INSTALL_COMMAND), ...code(CLI_DOCTOR_COMMAND), content.afterInstall);
      add(...section(content.outcomesTitle, content.outcomesLead));
      for (const outcome of content.outcomes) {
        add(`### ${outcome.title}`, outcome.description, `**${dictionary.ui.prompt}**`, ...code(outcome.prompt), `**${dictionary.ui.result}:** ${outcome.result}`);
      }
      add(...section(content.qualityTitle, content.qualityBody));
      add(...section(content.nextTitle), ...content.next.map((item) => `- [${dictionary.nav[item.page]}](${SITE_URL}${docsHref(locale, item.page)}): ${item.body}`));
      break;
    }
    case "getting-started": {
      const content = dictionary.gettingStarted;
      begin(content.title, content.lead);
      add(...section(content.prerequisitesTitle), ...bullets(content.prerequisites));
      add(...section(content.stepsTitle));
      content.steps.forEach((step, index) => add(
        `### ${index + 1}. ${step.title}`,
        step.body,
        ...(step.command ? code(step.command) : []),
        ...(step.prompt ? [`**${dictionary.ui.prompt}**`, ...code(step.prompt)] : []),
      ));
      add(...section(content.channelsTitle, content.channelsLead));
      content.channels.forEach((channel) => add(`### ${channel.name}`, channel.body, ...code(channel.command)));
      add(...section(content.rawTitle, content.rawBody));
      add(...content.rawLinks.map((link) => `- [${link.label}](${SITE_URL}${link.href}): ${link.description}`));
      add(...section(content.doneTitle, content.doneBody));
      break;
    }
    case "demo": {
      const content = dictionary.demo;
      begin(content.title, content.lead);
      add(...section(content.formatsTitle, content.formatsLead));
      for (const format of content.formats) add(`### ${format.duration} — ${format.title}`, format.when, format.goal, `**${dictionary.ui.verified}:** ${format.proof}`);
      add(...section(content.runbookTitle, content.runbookLead));
      content.steps.forEach((step, index) => add(`### ${index + 1}. ${step.title}`, step.body, ...(step.command ? code(step.command) : [])));
      add(`### ${content.starterPromptTitle}`, ...code(content.starterPrompt));
      add(...section(content.proofTitle, content.proofLead), ...bullets(content.proof));
      add(...section(content.guardrailsTitle));
      for (const guardrail of content.guardrails) add(`### ${guardrail.title}`, guardrail.body);
      break;
    }
    case "workflows": {
      const content = dictionary.workflows;
      begin(content.title, content.lead);
      for (const workflow of content.workflows) {
        add(`## ${workflow.title}`, workflow.when, `**${dictionary.ui.prompt}**`, ...code(workflow.prompt), `**${dictionary.ui.result}**`, ...bullets(workflow.outputs), `**${dictionary.ui.skillsLabel}:** ${workflow.skills.join(", ")}`);
      }
      break;
    }
    case "shadcn": {
      const content = dictionary.shadcn;
      begin(content.title, content.lead);
      add(...section(content.answerTitle, content.answerBody));
      add(...section(content.stepsTitle));
      content.steps.forEach((step, index) => add(`### ${index + 1}. ${step.title}`, step.body, ...(step.command ? code(step.command) : [])));
      add(`### ${content.promptTitle}`, ...code(content.prompt));
      add(...section(content.carryTitle, content.carryLead), ...bullets(content.carries.map((fact) => `**${fact.label}:** ${fact.value}`)));
      add(...section(content.limitsTitle), ...bullets(content.limits));
      add(...section(content.evidenceTitle, content.evidenceBody), SHADCN_RUN_EXCERPT.split("\n").map((line) => `> ${line}`).join("\n"));
      add(`- [${content.evidenceLink}](${SHADCN_RUN_EVIDENCE})`, `- [${content.evidenceLinkEarlier}](${SHADCN_EARLIER_RUNS})`, `- [shadcn-ui/ui#12252](${SHADCN_SKILL_SOURCE})`);
      break;
    }
    case "skills": {
      const content = dictionary.skills;
      begin(content.title, content.lead);
      for (const group of content.groups) {
        add(`## ${group.title}`, group.description, ...bullets(group.skills.map((skill) => {
          const own = content.pages[skill];
          return `\`${skill}\` — ${content.descriptions[skill]}${own ? ` [${own.label}](${SITE_URL}${own.href})` : ""}`;
        })));
      }
      add(...section(content.routingTitle, content.routingBody));
      break;
    }
    case "anti-slop": {
      const content = dictionary.antiSlop;
      begin(content.title, content.lead);
      add(...section(content.definitionTitle, content.definitionBody), content.definitionNote);
      add(...section(content.principlesTitle));
      content.principles.forEach((principle, index) => add(`### ${index + 1}. ${principle.title}`, principle.body));
      add(...section(content.atlasTitle, content.atlasLead));
      for (const [index, lens] of content.lenses.entries()) {
        add(
          `### ${index + 1}. ${lens.title}`,
          lens.question,
          `**${content.slopSignalLabel}:** ${lens.slop}`,
          `**${content.designerPreferenceLabel}:** ${lens.preference}`,
          `**${content.validWhenLabel}:** ${lens.validWhen}`,
          `**Rules:** ${lens.ruleIds.map((ruleId) => `\`${ruleId}\``).join(", ")}`,
        );
      }
      add(...section(content.directionsTitle, content.directionsLead));
      content.directions.forEach((direction) => add(`### ${direction.title}`, direction.body, direction.proof));
      add(...section(content.compareTitle, content.compareLead));
      for (const example of content.examples) {
        add(
          `### ${example.tab}`,
          `**${content.beforeLabel}: ${example.beforeTitle}**`,
          example.beforeBody,
          ...bullets(example.beforeSignals),
          `**${content.afterLabel}: ${example.afterTitle}**`,
          example.afterBody,
          ...bullets(example.afterSignals),
          `**${content.detectedLabel}:** ${example.reason}`,
          `**Rules:** ${example.ruleIds.map((ruleId) => `\`${ruleId}\``).join(", ")}`,
        );
      }
      add(...section(content.classifierTitle, content.classifierLead));
      content.classifications.forEach((item) => add(`### ${item.label} — ${item.title}`, item.body));
      add(...section(content.workflowTitle, content.workflowLead));
      content.workflow.forEach((step, index) => add(`### ${index + 1}. ${step.title}`, step.body));
      add(...section(content.sourcesTitle, content.sourcesLead));
      content.sources.forEach((source) => add(`- [${source.label}](${source.href}) — ${source.note}`));
      break;
    }
  }

  return `${lines.join("\n").trim()}\n`;
}
