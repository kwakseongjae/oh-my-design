import { CLI_DOCS } from "@/data/cli-docs";
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
      add(...section(content.outcomesTitle, content.outcomesLead));
      for (const outcome of content.outcomes) {
        add(`### ${outcome.title}`, outcome.description, `**${dictionary.ui.prompt}**`, ...code(outcome.prompt), `**${dictionary.ui.result}**`, outcome.result);
      }
      add(`> **${content.truthTitle}** ${content.truthBody}`, content.proof);
      add(...section(content.installTitle, content.installBody), ...code("npx oh-my-design-cli@latest"), ...code("npx oh-my-design-cli@latest doctor"), content.afterInstall);
      add(...section(content.differentiatorTitle), ...bullets(content.differentiators));
      break;
    }
    case "getting-started": {
      const content = dictionary.gettingStarted;
      begin(content.title, content.lead);
      add(...section(content.prerequisitesTitle), ...bullets(content.prerequisites));
      add(...section(content.stepsTitle));
      content.steps.forEach((step, index) => add(`### ${index + 1}. ${step.title}`, step.body, ...(step.command ? code(step.command) : [])));
      add(...section(content.channelsTitle));
      content.channels.forEach((channel) => add(`### ${channel.name}`, channel.body, ...code(channel.command)));
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
    case "skills": {
      const content = dictionary.skills;
      begin(content.title, content.lead);
      add(content.countNote);
      for (const group of content.groups) add(`## ${group.title}`, group.description, ...bullets(group.skills.map((skill) => `\`${skill}\``)));
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
    case "showcase": {
      const content = dictionary.showcase;
      begin(content.title, content.lead);
      const product = content.productCase;
      add(`## ${product.title}`, product.lead, ...bullets(product.metrics));
      add(`### ${product.promptLabel}`, ...code(product.prompt), product.disclosure, product.historicalNote);
      add(`- [${product.promptLinkLabel}](${SITE_URL}/showcase/applepresso/PROMPT.md)`, `- [${product.provenanceLinkLabel}](${SITE_URL}/showcase/applepresso/provenance.json)`);
      break;
    }
    case "troubleshooting": {
      const content = dictionary.troubleshooting;
      begin(content.title, content.lead);
      add(...section(content.doctorTitle, content.doctorBody), ...code("npx oh-my-design-cli@latest doctor"));
      for (const item of content.cases) add(`## ${item.symptom}`, item.fix);
      break;
    }
    case "ai": {
      const content = dictionary.ai;
      begin(content.title, content.lead);
      add(...section(content.machineTitle, content.machineBody));
      for (const link of content.machineLinks) add(`- [${link.label}](${SITE_URL}${link.href}) — ${link.description}`);
      add(...section(content.promptTitle), ...code(content.prompt));
      add(...section(content.contractTitle), ...bullets(content.contract));
      add(...section(content.builderTitle, content.builderBody));
      break;
    }
  }

  return `${lines.join("\n").trim()}\n`;
}
