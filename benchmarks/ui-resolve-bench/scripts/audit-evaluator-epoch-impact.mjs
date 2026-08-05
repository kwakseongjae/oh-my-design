#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { collectTextGeometryInPage, loadEvaluatorDependencies, OBJECTIVE_METHODOLOGY_EPOCH } from "./evaluate-run.mjs";
import { benchRoot, parseArgs, readJson, writeJson } from "./_lib.mjs";

function chromeExecutable() {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);
  for (const candidate of candidates) if (existsSync(candidate)) return candidate;
  for (const command of ["google-chrome", "chromium", "chromium-browser"]) {
    try { return execFileSync("which", [command], { encoding: "utf8" }).trim(); } catch { /* continue */ }
  }
  throw new Error("Chrome/Chromium executable not found; set CHROME_PATH");
}

export async function auditEvaluatorEpochImpact() {
  const { playwright } = loadEvaluatorDependencies();
  const { chromium } = playwright;
  const tasksRoot = join(benchRoot, "tasks");
  const tasks = readdirSync(tasksRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const browser = await chromium.launch({
    executablePath: chromeExecutable(),
    headless: true,
    args: ["--disable-background-networking", "--disable-component-update", "--no-first-run"],
  });
  const audited = [];
  try {
    for (const taskId of tasks) {
      const taskRoot = join(tasksRoot, taskId);
      const task = readJson(join(taskRoot, "task.json"));
      const oracle = task.text_geometry_oracle;
      if (!Array.isArray(oracle?.atomic_scope_selectors) || oracle.atomic_scope_selectors.length === 0) continue;
      const entry = join(taskRoot, "starter", task.entry);
      if (!existsSync(entry)) throw new Error(`starter entry missing for ${taskId}: ${entry}`);
      const html = readFileSync(entry, "utf8");
      const page = await browser.newPage();
      const conditions = [];
      try {
        for (const viewport of task.viewports.filter((item) => oracle.viewports.includes(item.name))) {
          await page.setViewportSize({ width: viewport.width, height: viewport.height });
          await page.setContent(html, { waitUntil: "domcontentloaded" });
          if (viewport.zoom) {
            await page.evaluate((zoom) => { document.documentElement.style.zoom = String(zoom); }, viewport.zoom);
          }
          const observation = await page.evaluate(collectTextGeometryInPage, oracle);
          conditions.push({
            viewport: viewport.name,
            passive_text_scrollers: observation.passive_text_scrollers,
          });
        }
      } finally {
        await page.close();
      }
      const affectedConditions = conditions.filter((condition) => condition.passive_text_scrollers.length > 0);
      audited.push({
        task_id: taskId,
        task_version: task.version,
        affected: affectedConditions.length > 0,
        affected_conditions: affectedConditions,
      });
    }
  } finally {
    await browser.close();
  }
  return {
    schema_version: "0.1",
    objective_methodology_epoch: OBJECTIVE_METHODOLOGY_EPOCH,
    scope: "frozen-task-starters-with-explicit-atomic-selectors",
    provider_calls: 0,
    model_exposures: 0,
    audited_tasks: audited.length,
    affected_tasks: audited.filter((task) => task.affected).length,
    tasks: audited,
    historical_score_policy: "do-not-rescore; export and aggregate by objective_methodology_epoch",
  };
}

const args = parseArgs();
const result = await auditEvaluatorEpochImpact();
if (args.get("out")) writeJson(resolve(String(args.get("out"))), result);
console.log(JSON.stringify(result, null, 2));
