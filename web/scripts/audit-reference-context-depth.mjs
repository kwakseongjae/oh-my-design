import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WEB_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = resolve(WEB_ROOT, "..");
const CONFIG_PATH = join(ROOT, "config", "context-depth-top20.json");
const DEFAULT_JSON = join(ROOT, "artifacts", "reverify", "context-depth-top20.json");
const DEFAULT_MD = join(ROOT, "artifacts", "reverify", "context-depth-top20.md");

function sectionMap(markdown) {
  const sections = {};
  let active = null;
  for (const line of markdown.split(/\r?\n/)) {
    const heading = line.match(/^## (\d+)\. /);
    if (heading) {
      active = heading[1];
      sections[active] = "";
      continue;
    }
    if (active) sections[active] += `${line}\n`;
  }
  return sections;
}

function wordCount(value) {
  return (String(value ?? "").replace(/[`#*|<>()[\]{}]/g, " ").match(/[A-Za-z0-9가-힣]+/g) ?? []).length;
}

function firstParagraph(value) {
  return String(value ?? "").trim().split(/\n\s*\n/)[0] ?? "";
}

function uniqueUrls(value) {
  return [...new Set(String(value ?? "").match(/https?:\/\/[^\s)>]+/g) ?? [])];
}

function contextEvidenceBlock(verification) {
  const lines = verification.split(/\r?\n/);
  const start = lines.findIndex((line) => /^## Context and narrative evidence/.test(line));
  if (start < 0) return "";
  const collected = [];
  for (const line of lines.slice(start + 1)) {
    if (/^## /.test(line)) break;
    collected.push(line);
  }
  return collected.join("\n");
}

function auditReference(id, policy) {
  const markdownPath = join(WEB_ROOT, "references", id, "DESIGN.md");
  const verificationPath = join(WEB_ROOT, "references", id, ".verification.md");
  const markdown = readFileSync(markdownPath, "utf8");
  const verification = existsSync(verificationPath) ? readFileSync(verificationPath, "utf8") : "";
  const sections = sectionMap(markdown);
  const intro = firstParagraph(sections[1]);
  const contextBlock = contextEvidenceBlock(verification);
  const combinedTypographyEvidence = `${sections[3] ?? ""}\n${verification}`.toLowerCase();
  const evidenceClasses = policy.requiredEvidenceClasses.filter((label) =>
    combinedTypographyEvidence.includes(label.toLowerCase()),
  );
  const metrics = {
    introWords: wordCount(intro),
    typographyWords: wordCount(sections[3]),
    voiceWords: wordCount(sections[10]),
    narrativeWords: wordCount(sections[11]),
    principlesWords: wordCount(sections[12]),
    personasWords: wordCount(sections[13]),
    contextSources: uniqueUrls(contextBlock).length,
    evidenceClasses: evidenceClasses.length,
  };
  const reasons = [];
  const [introMin, introMax] = policy.introWordRange;
  if (metrics.introWords < introMin || metrics.introWords > introMax) reasons.push("intro_depth");
  if (/current public ecosystem|this reference (?:records|preserves)|unverified claims/i.test(intro)) reasons.push("audit_lead");
  if (metrics.typographyWords < 100) reasons.push("typography_depth");
  if (metrics.voiceWords < 80) reasons.push("voice_depth");
  if (metrics.narrativeWords < 120) reasons.push("narrative_depth");
  if (metrics.principlesWords < 60) reasons.push("principles_depth");
  if (metrics.personasWords < 40) reasons.push("persona_depth");
  if (/\[FILL IN/i.test([sections[1], sections[3], sections[10], sections[11], sections[12], sections[13]].join("\n"))) reasons.push("fill_in");
  if (metrics.contextSources < policy.requiredContextSources) reasons.push("context_sources");
  if (metrics.evidenceClasses < 3) reasons.push("font_evidence_classes");
  return { id, status: reasons.length === 0 ? "pass" : "needs_enrichment", metrics, reasons };
}

const config = JSON.parse(readFileSync(CONFIG_PATH, "utf8"));
const references = config.batches.flatMap((batch) =>
  batch.references.map((id) => ({ batch: batch.id, ...auditReference(id, config.policy) })),
);
const report = {
  schemaVersion: 1,
  asOf: config.asOf,
  total: references.length,
  pass: references.filter((reference) => reference.status === "pass").length,
  needsEnrichment: references.filter((reference) => reference.status !== "pass").length,
  references,
};

mkdirSync(dirname(DEFAULT_JSON), { recursive: true });
writeFileSync(DEFAULT_JSON, `${JSON.stringify(report, null, 2)}\n`);
const rows = references.map((reference) =>
  `| ${reference.batch} | ${reference.id} | ${reference.status} | ${reference.metrics.introWords} | ${reference.metrics.contextSources} | ${reference.metrics.evidenceClasses}/5 | ${reference.reasons.join(", ") || "—"} |`,
);
writeFileSync(DEFAULT_MD, [
  "# Top 20 reference context-depth audit",
  "",
  `As of: ${report.asOf} · Pass: ${report.pass}/${report.total} · Needs enrichment: ${report.needsEnrichment}`,
  "",
  "| Batch | Reference | Status | Intro words | Context sources | Font classes | Reasons |",
  "|---|---|---|---:|---:|---:|---|",
  ...rows,
  "",
].join("\n"));

console.log(`[context-depth] ${report.pass}/${report.total} pass; ${report.needsEnrichment} need enrichment`);
console.log(`[context-depth] wrote ${DEFAULT_JSON}`);
console.log(`[context-depth] wrote ${DEFAULT_MD}`);
