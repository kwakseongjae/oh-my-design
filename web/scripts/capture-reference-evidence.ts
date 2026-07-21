#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, type Page, type Response as PlaywrightResponse } from "playwright-core";
import {
  aggregateReferenceEvidence,
  type FontFaceEvidence,
  type InteractionEvidence,
  type InteractionEvidenceKind,
  type RawElementEvidence,
  type ReferenceEvidenceBundle,
} from "../src/lib/references/evidence.ts";
import { isUnsafeCaptureSurface } from "../src/lib/references/capture-policy.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const ROOT = resolve(WEB_ROOT, "..");

function option(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function slugFromUrl(value: string): string {
  return new URL(value).hostname.replace(/^www\./, "").split(".")[0] || "reference";
}

const target = process.argv.slice(2).find((value) => !value.startsWith("--") && !process.argv[process.argv.indexOf(value) - 1]?.startsWith("--"));
if (!target) {
  console.error("Usage: capture-reference-evidence <reference-id|url> [--url <url>] [--max-routes 3] [--out <file>] [--json] [--no-interactions] [--baseline-only]");
  process.exit(1);
}

const isUrl = /^https?:\/\//.test(target);
const referenceId = option("--id") ?? (isUrl ? slugFromUrl(target) : target);
const designPath = join(WEB_ROOT, "references", referenceId, "DESIGN.md");
const markdown = existsSync(designPath) ? readFileSync(designPath, "utf8") : "";
const homepage = option("--url") ?? (isUrl ? target : markdown.match(/^homepage:\s*"?([^"\n]+)"?/m)?.[1]);
if (!homepage) throw new Error(`no homepage for ${referenceId}; pass --url`);

const output = resolve(option("--out") ?? join(ROOT, "artifacts", "reference-evidence", `${referenceId}.json`));
const explicitRoutes = option("--routes")?.split(",").map((value) => value.trim()).filter(Boolean) ?? [];
const routeConfigPath = join(ROOT, "config", "reference-capture-routes.json");
const routeConfig = existsSync(routeConfigPath)
  ? JSON.parse(readFileSync(routeConfigPath, "utf8")) as {
      schemaVersion?: number;
      references?: Record<string, string[] | { routes: string[]; maxRoutes?: number }>;
    }
  : undefined;
if (routeConfig && routeConfig.schemaVersion !== 1) throw new Error(`unsupported capture route config: ${routeConfig.schemaVersion}`);
const routeEntry = routeConfig?.references?.[referenceId];
const configuredRoutes = Array.isArray(routeEntry) ? routeEntry : routeEntry?.routes ?? [];
const maxRoutes = Number(option("--max-routes") ?? (!Array.isArray(routeEntry) ? routeEntry?.maxRoutes : undefined) ?? "3");
if (!Number.isInteger(maxRoutes) || maxRoutes < 1 || maxRoutes > 8) throw new Error(`invalid --max-routes: ${maxRoutes}`);
const captureExpandedInteractions = !process.argv.includes("--no-interactions");
const capturePseudoStates = !process.argv.includes("--baseline-only");
if (!Array.isArray(configuredRoutes) || configuredRoutes.some((value) => typeof value !== "string" || !/^https?:\/\//.test(value))) {
  throw new Error(`invalid capture routes for ${referenceId}`);
}

const chromeCandidates = [
  process.env.OMD_CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
].filter((value): value is string => Boolean(value));
const chromePath = chromeCandidates.find(existsSync);
if (!chromePath) throw new Error("Chrome executable not found; set OMD_CHROME_PATH");

function normalizeFamily(value: string): string {
  return value.replace(/["']/g, "").trim();
}

function fontSources(css: string, cssUrl: string): FontFaceEvidence[] {
  const results: FontFaceEvidence[] = [];
  for (const match of css.matchAll(/@font-face\s*{([\s\S]*?)}/gi)) {
    const body = match[1];
    const family = normalizeFamily(body.match(/font-family\s*:\s*([^;]+)/i)?.[1] ?? "");
    if (!family) continue;
    const sources = [...body.matchAll(/url\((['"]?)(.*?)\1\)/gi)].flatMap((item) => {
      try { return [new URL(item[2], cssUrl).href]; } catch { return []; }
    });
    results.push({
      family,
      status: "declared",
      weight: body.match(/font-weight\s*:\s*([^;]+)/i)?.[1]?.trim() ?? "normal",
      style: body.match(/font-style\s*:\s*([^;]+)/i)?.[1]?.trim() ?? "normal",
      sources,
    });
  }
  return results;
}

async function dismissObstructions(page: Page): Promise<void> {
  await page.keyboard.press("Escape").catch(() => {});
  const selectors = [
    '[aria-label*="close" i]', '[aria-label*="dismiss" i]', '[aria-label*="닫기"]',
    'button:has-text("Accept")', 'button:has-text("I agree")', 'button:has-text("동의")',
    'button:has-text("모두 동의")', '[id*="cookie" i] button', '[class*="cookie" i] button',
  ];
  for (const selector of selectors) {
    const locator = page.locator(selector).first();
    if (await locator.isVisible({ timeout: 150 }).catch(() => false)) {
      await locator.click({ timeout: 500 }).catch(() => {});
    }
  }
}

async function discoverRoutes(page: Page, baseUrl: string): Promise<{ routes: string[]; fontOrLicenseUrls: string[]; publicDesignSystemUrls: string[] }> {
  const links = await page.evaluate(() => [...document.querySelectorAll("a[href]")].map((anchor) => (anchor as HTMLAnchorElement).href));
  const base = new URL(baseUrl);
  const unique = [...new Set<string>(links)];
  const routeWeight = (url: string) => {
    const path = new URL(url).pathname.toLowerCase();
    if (/design-system|\/components?(?:\/|$)|storybook|styleguide/.test(path)) return 100;
    if (/\/styles?(?:\/|$)|typography|tokens?/.test(path)) return 90;
    if (/product|features|pricing|solutions/.test(path)) return 70;
    if (/docs|about|brand/.test(path)) return 30;
    return 0;
  };
  const routes = unique
    .filter((url) => { try { const parsed = new URL(url); return parsed.origin === base.origin && !isUnsafeCaptureSurface(url); } catch { return false; } })
    .filter((url) => routeWeight(url) > 0)
    .sort((a, b) => routeWeight(b) - routeWeight(a) || a.localeCompare(b));
  const fontOrLicenseUrls = unique.filter((url) => /font|typography|typeface|license/i.test(url)).slice(0, 20);
  const publicDesignSystemUrls = unique.filter((url) => /design-system|components|storybook|styleguide|\.design(?:\/|$)/i.test(url)).slice(0, 20);
  return { routes, fontOrLicenseUrls, publicDesignSystemUrls };
}

async function captureElements(page: Page, surfaceId: string): Promise<RawElementEvidence[]> {
  const raw = await page.evaluate(() => {
    const selectors = [
      "body", "h1", "h2", "h3", "h4", "p", "button", "a", "input", "select", "textarea", "article", "li",
      "[role]", '[class*="card" i]', '[class*="button" i]', '[class*="badge" i]', '[class*="chip" i]',
      '[class*="tab" i]', '[class*="dialog" i]', '[class*="modal" i]', '[class*="toast" i]', '[class*="avatar" i]',
    ].join(",");
    const seen = new Set<Element>();
    const candidates = [...document.querySelectorAll(selectors)].filter((element) => {
      if (seen.has(element)) return false;
      seen.add(element);
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return rect.width >= 12 && rect.height >= 8 && rect.bottom >= 0 && rect.top <= document.documentElement.scrollHeight && style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) > 0;
    }).slice(0, 500);
    let interactiveIndex = 0;
    return candidates.map((element) => {
      const html = element as HTMLElement;
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      const interactive = element.matches('button,a,input,select,textarea,[role="button"],[role="tab"],[role="switch"],[tabindex]');
      const selector = interactive ? `[data-omd-capture="${interactiveIndex++}"]` : (() => {
        const id = html.id ? `#${CSS.escape(html.id)}` : "";
        const testId = html.getAttribute("data-testid");
        return id || (testId ? `[data-testid="${CSS.escape(testId)}"]` : element.tagName.toLowerCase());
      })();
      if (interactive) html.setAttribute("data-omd-capture", String(interactiveIndex - 1));
      return {
        selector,
        tagName: element.tagName.toLowerCase(),
        role: element.getAttribute("role"),
        inputType: element.getAttribute("type"),
        className: typeof html.className === "string" ? html.className.slice(0, 160) : "",
        ariaHasPopup: element.getAttribute("aria-haspopup"),
        ariaSelected: element.getAttribute("aria-selected"),
        ariaChecked: element.getAttribute("aria-checked"),
        disabled: (element as HTMLButtonElement).disabled === true || element.getAttribute("aria-disabled") === "true",
        textLength: (element.textContent ?? "").trim().length,
        rect: { width: Math.round(rect.width), height: Math.round(rect.height), top: Math.round(rect.top + window.scrollY) },
        style: {
          color: style.color,
          backgroundColor: style.backgroundColor,
          borderColor: style.borderColor,
          borderWidth: style.borderWidth,
          borderRadius: style.borderRadius,
          boxShadow: style.boxShadow,
          padding: style.padding,
          margin: style.margin,
          gap: style.gap,
          fontFamily: style.fontFamily,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          lineHeight: style.lineHeight,
          letterSpacing: style.letterSpacing,
        },
      };
    });
  });
  return raw.map((element: Omit<RawElementEvidence, "surfaceId">) => ({ ...element, surfaceId, selector: `${surfaceId}::${element.selector}` }));
}

async function captureStates(page: Page, surfaceId: string, elements: readonly RawElementEvidence[]): Promise<{
  states: Record<string, string[]>;
  elements: RawElementEvidence[];
}> {
  const result: Record<string, string[]> = {};
  const captured: RawElementEvidence[] = [];
  const interactive = elements.filter((element) => element.selector.includes("[data-omd-capture=")).slice(0, 24);
  for (const element of interactive) {
    const domSelector = element.selector.split("::")[1];
    const locator = page.locator(domSelector).first();
    const read = () => locator.evaluate((node: Element) => {
      const style = getComputedStyle(node);
      return {
        color: style.color,
        backgroundColor: style.backgroundColor,
        borderColor: style.borderColor,
        borderWidth: style.borderWidth,
        borderRadius: style.borderRadius,
        boxShadow: style.boxShadow,
        padding: style.padding,
        margin: style.margin,
        gap: style.gap,
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        letterSpacing: style.letterSpacing,
        transform: style.transform,
      };
    }).catch(() => null);
    const base = await read();
    const states: string[] = [];
    const capture = (state: string, value: Awaited<ReturnType<typeof read>>) => {
      if (!base || !value || JSON.stringify(value) === JSON.stringify(base)) return;
      states.push(state);
      const { transform, ...style } = value;
      void transform; // state detection uses transform; raw token evidence deliberately excludes it
      const selector = `${element.selector}::state-${state}`;
      captured.push({ ...element, selector, style });
      result[selector] = [state];
    };
    await locator.hover({ timeout: 500 }).catch(() => {});
    capture("hover", await read());
    await page.mouse.down().catch(() => {});
    capture("pressed", await read());
    await page.mouse.move(0, 0).catch(() => {});
    await page.mouse.up().catch(() => {});
    await page.mouse.move(0, 0).catch(() => {});
    await locator.focus({ timeout: 500 }).catch(() => {});
    capture("focus", await read());
    if (states.length) result[`${surfaceId}::${domSelector}`] = states;
  }
  return { states: result, elements: captured };
}

async function captureInteractionTargets(
  page: Page,
  surfaceId: string,
  phase: string,
  targetSelector: string,
): Promise<RawElementEvidence[]> {
  const raw = await page.evaluate(({ phase, targetSelector }) => {
    const visible = (element: Element) => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return rect.width >= 8 && rect.height >= 8 && style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) > 0;
    };
    const semantic = [
      "button", "a", "input", "select", "textarea", "li", "[role]",
      '[class*="button" i]', '[class*="menu" i]', '[class*="dialog" i]',
      '[class*="toast" i]', '[class*="alert" i]', '[class*="tab" i]',
    ].join(",");
    const seen = new Set<Element>();
    const candidates: Element[] = [];
    for (const root of document.querySelectorAll(targetSelector)) {
      for (const element of [root, ...root.querySelectorAll(semantic)]) {
        if (seen.has(element) || !visible(element)) continue;
        seen.add(element);
        candidates.push(element);
      }
    }
    return candidates.slice(0, 120).map((element, index) => {
      const html = element as HTMLElement;
      const value = `${phase}-${index}`;
      html.setAttribute("data-omd-interaction-capture", value);
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return {
        selector: `[data-omd-interaction-capture="${value}"]`,
        tagName: element.tagName.toLowerCase(),
        role: element.getAttribute("role"),
        inputType: element.getAttribute("type"),
        className: typeof html.className === "string" ? html.className.slice(0, 160) : "",
        ariaHasPopup: element.getAttribute("aria-haspopup"),
        ariaSelected: element.getAttribute("aria-selected"),
        ariaChecked: element.getAttribute("aria-checked"),
        disabled: (element as HTMLButtonElement).disabled === true || element.getAttribute("aria-disabled") === "true",
        textLength: (element.textContent ?? "").trim().length,
        rect: { width: Math.round(rect.width), height: Math.round(rect.height), top: Math.round(rect.top + window.scrollY) },
        style: {
          color: style.color,
          backgroundColor: style.backgroundColor,
          borderColor: style.borderColor,
          borderWidth: style.borderWidth,
          borderRadius: style.borderRadius,
          boxShadow: style.boxShadow,
          padding: style.padding,
          margin: style.margin,
          gap: style.gap,
          fontFamily: style.fontFamily,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          lineHeight: style.lineHeight,
          letterSpacing: style.letterSpacing,
        },
      };
    });
  }, { phase, targetSelector });
  return raw.map((element: Omit<RawElementEvidence, "surfaceId">) => ({
    ...element,
    surfaceId,
    selector: `${surfaceId}::${element.selector}`,
  }));
}

async function captureInteractions(page: Page, surfaceId: string): Promise<{
  elements: RawElementEvidence[];
  states: Record<string, string[]>;
  interactions: InteractionEvidence[];
}> {
  const captured: RawElementEvidence[] = [];
  const states: Record<string, string[]> = {};
  const interactions: InteractionEvidence[] = [];
  let phaseIndex = 0;

  const mergeStates = (selector: string, values: readonly string[]) => {
    if (!selector) return;
    states[selector] = [...new Set([...(states[selector] ?? []), ...values])];
  };
  const triggerSelector = async (locator: ReturnType<Page["locator"]>): Promise<string> => {
    const value = await locator.getAttribute("data-omd-capture").catch(() => null);
    return value === null ? "" : `${surfaceId}::[data-omd-capture="${value}"]`;
  };
  const runClick = async (
    kind: InteractionEvidenceKind,
    locator: ReturnType<Page["locator"]>,
    targetSelector: string,
    interactionStates: readonly string[],
  ) => {
    if (!await locator.isVisible({ timeout: 150 }).catch(() => false)) return;
    const trigger = await triggerSelector(locator);
    const beforeUrl = page.url();
    if (!await locator.click({ timeout: 800 }).then(() => true).catch(() => false)) return;
    await page.waitForTimeout(180);
    const before = new URL(beforeUrl);
    const after = new URL(page.url());
    if (`${after.origin}${after.pathname}${after.search}` !== `${before.origin}${before.pathname}${before.search}`) {
      await page.goto(beforeUrl, { waitUntil: "domcontentloaded", timeout: 45_000 }).catch(() => null);
      await page.waitForTimeout(180);
      return;
    }
    const phase = `${kind}-${phaseIndex++}`;
    const targets = await captureInteractionTargets(page, surfaceId, phase, targetSelector);
    if (targets.length === 0) {
      await page.keyboard.press("Escape").catch(() => {});
      return;
    }
    mergeStates(trigger, interactionStates);
    for (const target of targets) mergeStates(target.selector, interactionStates);
    captured.push(...targets);
    interactions.push({
      kind,
      surfaceId,
      triggerSelector: trigger,
      targetSelectors: targets.map((target) => target.selector),
      states: [...interactionStates],
    });
    await page.keyboard.press("Escape").catch(() => {});
    await page.waitForTimeout(80);
  };

  const menuTriggers = await page.locator([
    'button[aria-haspopup="menu"]', 'button[aria-haspopup="listbox"]',
    '[role="button"][aria-haspopup="menu"]', '[role="button"][aria-haspopup="listbox"]',
    '[data-omd-action="menu"]',
  ].join(",")).all();
  for (const locator of menuTriggers.slice(0, 4)) {
    await runClick("menu", locator, [
      '[role="menu"]', '[role="listbox"]',
      '[class*="menu" i][data-state="open"]', '[class*="popover" i][data-state="open"]',
    ].join(","), ["expanded", "menu-open"]);
  }

  const dialogTriggers = await page.locator([
    'button[aria-haspopup="dialog"]', '[role="button"][aria-haspopup="dialog"]',
    'button[class*="open-modal" i]', '[role="button"][class*="open-modal" i]',
    '[data-omd-action="dialog"]',
  ].join(",")).all();
  for (const locator of dialogTriggers.slice(0, 3)) {
    await runClick("dialog", locator, '[role="dialog"],[aria-modal="true"],[class*="dialog" i]:not([hidden]),[class*="modal" i]:not([hidden])', ["dialog-open"]);
  }

  const tabTriggers = await page.locator('[role="tab"][aria-selected="false"],button[class*="btn-tab" i],[data-omd-action="tab"]').all();
  const seenTabTriggers = new Set<string>();
  for (const locator of tabTriggers.slice(0, 3)) {
    const marker = await locator.getAttribute("data-omd-capture").catch(() => null);
    if (marker !== null && seenTabTriggers.has(marker)) continue;
    if (marker !== null) seenTabTriggers.add(marker);
    const href = await locator.getAttribute("href").catch(() => null);
    if (href) {
      const before = new URL(page.url());
      const after = new URL(href, before);
      if (`${after.origin}${after.pathname}${after.search}` !== `${before.origin}${before.pathname}${before.search}`) continue;
    }
    await runClick("tab", locator, '[role="tab"][aria-selected="true"],[role="tabpanel"]:not([hidden])', ["selected", "tab-selected"]);
  }

  const formActions = await page.locator('[data-omd-action="form-error"]').all();
  for (const locator of formActions.slice(0, 2)) {
    await runClick("form-error", locator, '[aria-invalid="true"],input:invalid,select:invalid,textarea:invalid,[role="alert"]', ["error"]);
  }
  if (formActions.length === 0) {
    const required = page.locator('input[required]:not(:disabled),select[required]:not(:disabled),textarea[required]:not(:disabled)').first();
    if (await required.isVisible({ timeout: 150 }).catch(() => false)) {
      await required.evaluate((node) => {
        (node as HTMLInputElement).focus();
        (node as HTMLInputElement).reportValidity();
      }).catch(() => {});
      const phase = `form-error-${phaseIndex++}`;
      const targets = await captureInteractionTargets(page, surfaceId, phase, 'input:invalid,select:invalid,textarea:invalid,[aria-invalid="true"]');
      if (targets.length) {
        for (const target of targets) mergeStates(target.selector, ["error"]);
        captured.push(...targets);
        interactions.push({ kind: "form-error", surfaceId, triggerSelector: "", targetSelectors: targets.map((target) => target.selector), states: ["error"] });
      }
    }
  }

  const toastTriggers = await page.locator('[data-omd-action="toast"]').all();
  for (const locator of toastTriggers.slice(0, 2)) {
    await runClick("toast", locator, '[role="alert"],[role="status"],[class*="toast" i]:not([hidden]),[class*="snackbar" i]:not([hidden])', ["toast-visible"]);
  }

  return { elements: captured, states, interactions };
}

async function documentFonts(page: Page): Promise<FontFaceEvidence[]> {
  return page.evaluate(() => {
    const fonts: Array<{ family: string; status: string; weight: string; style: string; sources: string[] }> = [];
    document.fonts.forEach((font) => fonts.push({
      family: font.family.replace(/["']/g, "").trim(),
      status: font.status,
      weight: font.weight,
      style: font.style,
      sources: [],
    }));
    return fonts;
  });
}

const browser = await chromium.launch({ executablePath: chromePath, headless: true, args: ["--disable-http2"] });
const context = await browser.newContext({
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36",
  viewport: { width: 1440, height: 900 },
});
const page = await context.newPage();
const cssByUrl = new Map<string, string>();
page.on("response", async (response: PlaywrightResponse) => {
  const contentType = response.headers()["content-type"] ?? "";
  if (!contentType.includes("css") && !/\.css(?:\?|$)/.test(response.url())) return;
  try { cssByUrl.set(response.url(), await response.text()); } catch {}
});

const capturedAt = new Date().toISOString();
const surfaces: ReferenceEvidenceBundle["surfaces"][number][] = [];
const allFaces: FontFaceEvidence[] = [];
const stateEvidence: Record<string, string[]> = {};
const interactionEvidence: InteractionEvidence[] = [];
let discovery = { routes: [] as string[], fontOrLicenseUrls: [] as string[], publicDesignSystemUrls: [] as string[] };

await page.goto(homepage, { waitUntil: "domcontentloaded", timeout: 45_000 });
await page.waitForTimeout(1_200);
await dismissObstructions(page);
discovery = await discoverRoutes(page, homepage);
const routeUrls = [homepage, ...explicitRoutes, ...configuredRoutes, ...discovery.routes]
  .filter((url, index, list) => list.indexOf(url) === index)
  .slice(0, maxRoutes * 3);

for (const [index, url] of routeUrls.entries()) {
  if (surfaces.length >= maxRoutes) break;
  if (index > 0) {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 }).catch(() => null);
    await page.waitForTimeout(900);
    await dismissObstructions(page);
  }
  const currentUrl = new URL(page.url());
  if (isUnsafeCaptureSurface(currentUrl.href)) continue;
  const surfaceId = surfaces.length === 0 ? "home" : `surface-${surfaces.length + 1}`;
  const capturedSurfaceUrl = currentUrl.href;
  const baselineElements = await captureElements(page, surfaceId);
  const pseudoStates = capturePseudoStates
    ? await captureStates(page, surfaceId, baselineElements)
    : { elements: [], states: {} };
  const expanded = captureExpandedInteractions
    ? await captureInteractions(page, surfaceId)
    : { elements: [], states: {}, interactions: [] };
  if (isUnsafeCaptureSurface(page.url())) continue;
  for (const [selector, values] of Object.entries(pseudoStates.states)) {
    stateEvidence[selector] = [...new Set([...(stateEvidence[selector] ?? []), ...values])];
  }
  for (const [selector, values] of Object.entries(expanded.states)) {
    stateEvidence[selector] = [...new Set([...(stateEvidence[selector] ?? []), ...values])];
  }
  interactionEvidence.push(...expanded.interactions);
  const elements = [...baselineElements, ...pseudoStates.elements, ...expanded.elements];
  surfaces.push({ id: surfaceId, url: capturedSurfaceUrl, viewport: "1440x900", elements });
  allFaces.push(...await documentFonts(page));
}
await browser.close();

for (const [cssUrl, css] of cssByUrl) allFaces.push(...fontSources(css, cssUrl));
const mergedFaces = new Map<string, FontFaceEvidence>();
for (const face of allFaces) {
  const key = face.family.toLowerCase().replace(/[^a-z0-9가-힣]/g, "");
  const previous = mergedFaces.get(key);
  mergedFaces.set(key, {
    family: face.family,
    status: previous?.status === "loaded" || face.status === "loaded" ? "loaded" : face.status,
    weight: previous?.weight ?? face.weight,
    style: previous?.style ?? face.style,
    sources: [...new Set([...(previous?.sources ?? []), ...face.sources])],
  });
}

const sources = surfaces.map((surface) => ({
  id: `surface-${surface.id}`,
  url: surface.url,
  kind: (/\/docs|\/brand|design-system|components|storybook|styleguide/i.test(new URL(surface.url).pathname)
    ? "official-doc"
    : "product-surface") as "official-doc" | "product-surface",
}));
const bundle = aggregateReferenceEvidence({
  referenceId,
  capturedAt,
  tool: "playwright_cli",
  sources,
  surfaces,
  faces: [...mergedFaces.values()],
  stateEvidence,
  interactions: interactionEvidence,
  discovery: {
    fontOrLicenseUrls: discovery.fontOrLicenseUrls,
    publicDesignSystemUrls: discovery.publicDesignSystemUrls,
  },
});

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, `${JSON.stringify(bundle, null, 2)}\n`, "utf8");
if (process.argv.includes("--json")) console.log(JSON.stringify(bundle, null, 2));
else {
  console.log(`[reference-evidence] ${referenceId}: ${bundle.coverage.surfaceCount} surfaces · ${bundle.colors.length} colors · ${bundle.fonts.length} fonts · ${bundle.components.length} component variants · ${bundle.coverage.interactionCount} interactions · coverage ${bundle.coverage.score}/100`);
  console.log(`[reference-evidence] wrote ${output}`);
  for (const font of bundle.fonts.slice(0, 8)) {
    console.log(`  font ${font.family}: ${font.status}/${font.confidence} · usage ${font.usageCount} · ${font.roles.join(", ") || "not observed"}`);
  }
}
